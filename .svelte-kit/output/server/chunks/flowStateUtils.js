import { w as workspaceStore } from "./stores2.js";
import { l as loadSchemaFlow } from "./scripts.js";
import { J as JobService } from "./services.gen.js";
import { F as cleanExpr, e as emptySchema } from "./toast.js";
import { m as get_store_value } from "./ssr.js";
import { N as NEVER_TESTED_THIS_FAR } from "./LightweightSchemaForm.js";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import "./common.js";
import { p as parseOutputs, i as inferArgs, l as loadSchemaFromPath } from "./infer.js";
function create_context_function_template(eval_string, context) {
  return `
return function (context) {
"use strict";
${Object.keys(context).length > 0 ? `let ${Object.keys(context).map((key) => ` ${key} = context['${key}']`)};` : ``}
return ${eval_string}
}`;
}
function make_context_evaluator(eval_string, context) {
  let template = create_context_function_template(eval_string, context);
  let functor = Function(template);
  return functor();
}
function evalValue(k, mod, testStepStore, pickableProperties, showError) {
  let inputTransforms = mod.value["input_transforms"] ?? {};
  let v = testStepStore[mod.id]?.[k];
  let t = inputTransforms?.[k];
  if (!v) {
    if (t.type == "static") {
      v = t.value;
    } else {
      try {
        let context = {
          flow_input: pickableProperties?.flow_input,
          results: pickableProperties?.priorIds
        };
        v = make_context_evaluator(t.expr, context)(context);
      } catch (e) {
        v = void 0;
      }
    }
  }
  if (v == NEVER_TESTED_THIS_FAR) {
    return void 0;
  }
  return v;
}
function cleanInputs(flow) {
  const newFlow = JSON.parse(JSON.stringify(flow));
  newFlow.value.modules.forEach((mod) => {
    if (mod.value.type == "rawscript" || mod.value.type == "script") {
      Object.values(mod.value.input_transforms ?? {}).forEach((inp) => {
        if (inp.type == "javascript") {
          inp.value = void 0;
          inp.expr = cleanExpr(inp.expr);
        } else {
          inp.expr = void 0;
        }
      });
    }
  });
  if (newFlow.value.concurrency_key == "") {
    newFlow.value.concurrency_key = void 0;
  }
  return newFlow;
}
function getDefaultExpr(key = "myfield", previousModuleId, previousExpr) {
  return previousExpr ?? (previousModuleId ? `results.${previousModuleId}.${key}` : `flow_input.${key}`);
}
async function runFlowPreview(args, flow, path, restartedFrom) {
  const newFlow = flow;
  return await JobService.runFlowPreview({
    workspace: get_store_value(workspaceStore) ?? "",
    requestBody: {
      args,
      value: newFlow.value,
      path,
      tag: newFlow.tag,
      restarted_from: restartedFrom
    }
  });
}
function codeToStaticTemplate(code) {
  if (!code || typeof code != "string") return void 0;
  const lines = code.split("\n");
  if (lines.length == 1) {
    const line = lines[0].trim();
    if (line[0] == "`" && line.charAt(line.length - 1) == "`") {
      return line.slice(1, line.length - 1).replaceAll("\\`", "`");
    } else {
      return `\${${line}}`;
    }
  }
  return void 0;
}
function emptyFlowModuleState() {
  return {
    schema: emptySchema(),
    previewResult: NEVER_TESTED_THIS_FAR
  };
}
function isInputFilled(inputTransforms, key, schema) {
  const required = schema?.required?.includes(key) ?? false;
  if (!required) {
    return true;
  }
  if (inputTransforms.hasOwnProperty(key)) {
    const transform = inputTransforms[key];
    if (transform?.type === "static" && (transform?.value === void 0 || transform?.value === "" || transform?.value === null)) {
      return false;
    } else if (transform?.type === "javascript" && (transform?.expr === void 0 || transform?.expr === "" || transform?.expr === null)) {
      return false;
    }
  }
  return true;
}
async function isConnectedToMissingModule(argName, flowModuleValue, moduleIds) {
  const type = flowModuleValue.type;
  if (type === "rawscript" || type === "script" || type === "flow") {
    const input = flowModuleValue?.input_transforms[argName];
    const val = input.type === "static" ? String(input.value) : input.expr;
    try {
      const outputs = await parseOutputs(val, true);
      let error = "";
      outputs?.forEach(([componentId, id]) => {
        if (componentId === "results") {
          if (!moduleIds.includes(id)) {
            error += `Input ${argName} is connected to a missing module with id ${id}
`;
          }
        }
      });
      return error;
    } catch (e) {
      return `Input ${argName} expression is invalid`;
    }
  }
  return;
}
async function computeFlowStepWarning(argName, flowModuleValue, messages, schema, moduleIds = []) {
  if (messages[argName]) {
    delete messages[argName];
  }
  const type = flowModuleValue.type;
  if (type == "rawscript" || type == "script" || type == "flow") {
    if (!isInputFilled(flowModuleValue.input_transforms, argName, schema ?? {})) {
      messages[argName] = {
        message: `Input ${argName} is required but not filled`,
        type: "warning"
      };
    }
    const errorMessage = await isConnectedToMissingModule(argName, flowModuleValue, moduleIds);
    if (errorMessage) {
      messages[argName] = {
        message: errorMessage,
        type: "error"
      };
    } else {
      if (messages[argName]?.type === "error") {
        delete messages[argName];
      }
    }
  }
  return messages;
}
async function initFlowStepWarnings(flowModuleValue, schema, moduleIds = []) {
  const messages = {};
  const type = flowModuleValue.type;
  if (type == "rawscript" || type == "script" || type == "flow") {
    const keys = Object.keys(flowModuleValue.input_transforms ?? {});
    const promises = keys.map(async (key) => {
      await computeFlowStepWarning(key, flowModuleValue, messages, schema ?? {}, moduleIds);
    });
    await Promise.all(promises);
  }
  return messages;
}
async function loadSchemaFromModule(module) {
  const mod = module.value;
  if (mod.type == "rawscript" || mod.type === "script" || mod.type === "flow") {
    let schema;
    if (mod.type === "rawscript") {
      schema = emptySchema();
      await inferArgs(mod.language, mod.content ?? "", schema);
    } else if (mod.type == "script" && mod.path && mod.path != "") {
      schema = await loadSchemaFromPath(mod.path, mod.hash);
    } else if (mod.type == "flow" && mod.path && mod.path != "") {
      schema = await loadSchemaFlow(mod.path);
    } else {
      return {
        input_transforms: {},
        schema: emptySchema()
      };
    }
    const keys = Object.keys(schema?.properties ?? {});
    let input_transforms = mod.input_transforms ?? {};
    if (JSON.stringify(keys.sort()) !== JSON.stringify(Object.keys(input_transforms).sort())) {
      input_transforms = keys.reduce((accu, key) => {
        let nv = input_transforms[key] ?? (module.id == "failure" && ["message", "name"].includes(key) ? { type: "javascript", expr: `error.${key}` } : {
          type: "static",
          value: void 0
        });
        accu[key] = nv;
        return accu;
      }, {});
    }
    return {
      input_transforms,
      schema: schema ?? emptySchema()
    };
  }
  return {
    input_transforms: {},
    schema: emptySchema()
  };
}
async function loadFlowModuleState(flowModule) {
  try {
    const { input_transforms, schema } = await loadSchemaFromModule(flowModule);
    if (flowModule.value.type == "script" || flowModule.value.type == "rawscript" || flowModule.value.type == "flow") {
      flowModule.value.input_transforms = input_transforms;
    }
    return {
      schema,
      previewResult: NEVER_TESTED_THIS_FAR
    };
  } catch (e) {
    console.debug(e);
    return emptyFlowModuleState();
  }
}
async function pickScript(path, summary, id, hash) {
  const flowModule = {
    id,
    value: { type: "script", path, hash, input_transforms: {} },
    summary
  };
  return [flowModule, await loadFlowModuleState(flowModule)];
}
function sliceModules(modules, upTo, idOrders) {
  return modules.filter((x) => idOrders.indexOf(x.id) <= upTo).map((m) => {
    if (idOrders.indexOf(m.id) == upTo) {
      return m;
    }
    if (m.value.type === "forloopflow") {
      m.value.modules = sliceModules(m.value.modules, upTo, idOrders);
    } else if (m.value.type === "branchone") {
      m.value.branches = m.value.branches.map((b) => {
        b.modules = sliceModules(b.modules, upTo, idOrders);
        return b;
      });
      m.value.default = sliceModules(m.value.default, upTo, idOrders);
    } else if (m.value.type === "branchall") {
      m.value.branches = m.value.branches.map((b) => {
        b.modules = sliceModules(b.modules, upTo, idOrders);
        return b;
      });
    }
    return m;
  });
}
export {
  loadFlowModuleState as a,
  codeToStaticTemplate as b,
  cleanInputs as c,
  evalValue as d,
  emptyFlowModuleState as e,
  getDefaultExpr as g,
  initFlowStepWarnings as i,
  loadSchemaFromModule as l,
  pickScript as p,
  runFlowPreview as r,
  sliceModules as s
};
