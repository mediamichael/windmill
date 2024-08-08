import { c as ScriptService, F as FlowService } from "./services.gen.js";
import { w as writable } from "./index.js";
import { w as sortObject, e as emptySchema } from "./toast.js";
import { m as get_store_value } from "./ssr.js";
import { t as tick } from "./Head.js";
import init, { parse_db_resource, parse_python, parse_deno, parse_sql, parse_mysql, parse_bigquery, parse_snowflake, parse_mssql, parse_graphql, parse_go, parse_bash, parse_powershell, parse_php, parse_outputs } from "windmill-parser-wasm";
import { w as workspaceStore } from "./stores2.js";
import { a as argSigToJsonSchemaType } from "./inferArgSig.js";
const wasmUrl = "/_app/immutable/assets/windmill_parser_wasm_bg.Bielfr3L.wasm";
init(wasmUrl);
const loadSchemaLastRun = writable(void 0);
async function inferArgs(language, code, schema) {
  await init(wasmUrl);
  const lastRun = get_store_value(loadSchemaLastRun);
  let inferedSchema;
  if (lastRun && code == lastRun[0] && lastRun[1]) {
    inferedSchema = lastRun[1];
  } else {
    if (code == "") {
      code = " ";
    }
    let inlineDBResource = void 0;
    if (["postgresql", "mysql", "bigquery", "snowflake", "mssql"].includes(language ?? "")) {
      inlineDBResource = parse_db_resource(code);
    }
    if (language == "python3") {
      inferedSchema = JSON.parse(parse_python(code));
    } else if (language == "deno") {
      inferedSchema = JSON.parse(parse_deno(code));
    } else if (language == "nativets") {
      inferedSchema = JSON.parse(parse_deno(code));
    } else if (language == "bun" || language == "bunnative") {
      inferedSchema = JSON.parse(parse_deno(code));
    } else if (language == "postgresql") {
      inferedSchema = JSON.parse(parse_sql(code));
      if (inlineDBResource === void 0) {
        inferedSchema.args = [
          {
            name: "database",
            typ: { resource: "postgresql" }
          },
          ...inferedSchema.args
        ];
      }
    } else if (language == "mysql") {
      inferedSchema = JSON.parse(parse_mysql(code));
      if (inlineDBResource === void 0) {
        inferedSchema.args = [
          { name: "database", typ: { resource: "mysql" } },
          ...inferedSchema.args
        ];
      }
    } else if (language == "bigquery") {
      inferedSchema = JSON.parse(parse_bigquery(code));
      if (inlineDBResource === void 0) {
        inferedSchema.args = [
          { name: "database", typ: { resource: "bigquery" } },
          ...inferedSchema.args
        ];
      }
    } else if (language == "snowflake") {
      inferedSchema = JSON.parse(parse_snowflake(code));
      if (inlineDBResource === void 0) {
        inferedSchema.args = [
          { name: "database", typ: { resource: "snowflake" } },
          ...inferedSchema.args
        ];
      }
    } else if (language == "mssql") {
      inferedSchema = JSON.parse(parse_mssql(code));
      if (inlineDBResource === void 0) {
        inferedSchema.args = [
          { name: "database", typ: { resource: "ms_sql_server" } },
          ...inferedSchema.args
        ];
      }
    } else if (language == "graphql") {
      inferedSchema = JSON.parse(parse_graphql(code));
      inferedSchema.args = [{ name: "api", typ: { resource: "graphql" } }, ...inferedSchema.args];
    } else if (language == "go") {
      inferedSchema = JSON.parse(parse_go(code));
    } else if (language == "bash") {
      inferedSchema = JSON.parse(parse_bash(code));
    } else if (language == "powershell") {
      inferedSchema = JSON.parse(parse_powershell(code));
    } else if (language == "php") {
      inferedSchema = JSON.parse(parse_php(code));
    } else {
      return null;
    }
    if (inferedSchema.type == "Invalid") {
      throw new Error(inferedSchema.error);
    }
    loadSchemaLastRun.set([code, inferedSchema]);
  }
  schema.required = [];
  const oldProperties = JSON.parse(JSON.stringify(schema.properties));
  schema.properties = {};
  for (const arg of inferedSchema.args) {
    if (!(arg.name in oldProperties)) {
      schema.properties[arg.name] = { description: "", type: "" };
    } else {
      schema.properties[arg.name] = oldProperties[arg.name];
    }
    schema.properties[arg.name] = sortObject(schema.properties[arg.name]);
    argSigToJsonSchemaType(arg.typ, schema.properties[arg.name]);
    schema.properties[arg.name].default = arg.default;
    if (!arg.has_default && !schema.required.includes(arg.name)) {
      schema.required.push(arg.name);
    }
  }
  await tick();
  return inferedSchema.no_main_func;
}
async function loadSchemaFromPath(path, hash) {
  if (path.startsWith("hub/")) {
    const { content, language, schema } = await ScriptService.getHubScriptByPath({ path });
    if (schema && typeof schema === "object" && "properties" in schema) {
      return schema;
    } else {
      const newSchema = emptySchema();
      await inferArgs(language, content ?? "", newSchema);
      return newSchema;
    }
  } else if (hash) {
    const script = await ScriptService.getScriptByHash({
      workspace: get_store_value(workspaceStore),
      hash
    });
    return inferSchemaIfNecessary(script);
  } else {
    const script = await ScriptService.getScriptByPath({
      workspace: get_store_value(workspaceStore),
      path: path ?? ""
    });
    return inferSchemaIfNecessary(script);
  }
}
async function inferSchemaIfNecessary(script) {
  if (script.schema) {
    return script.schema;
  } else {
    const newSchema = emptySchema();
    await inferArgs(script.language, script.content ?? "", newSchema);
    return newSchema;
  }
}
async function loadSchema(workspace, path, runType) {
  {
    const flow = await FlowService.getFlowByPath({
      workspace,
      path
    });
    return { schema: flow.schema, summary: flow.summary };
  }
}
async function parseOutputs(code, ignoreError) {
  await init(wasmUrl);
  const getOutputs = await parse_outputs(code);
  const outputs = JSON.parse(getOutputs);
  if (outputs.error) {
    {
      return void 0;
    }
  }
  return outputs.error ? [] : outputs.outputs;
}
export {
  loadSchema as a,
  inferArgs as i,
  loadSchemaFromPath as l,
  parseOutputs as p
};
