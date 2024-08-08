import { OpenAI } from "openai";
import { O as OpenAPI, R as ResourceService } from "./services.gen.js";
import { I as toCamel, k as capitalize } from "./toast.js";
import YAML from "yaml";
import { printSchema, buildClientSchema } from "graphql";
function compile(schema) {
  function rec(x, root = false) {
    let res = "{\n";
    const entries = Object.entries(x);
    if (entries.length == 0) {
      return "any";
    }
    let i = 0;
    for (let [name, prop] of entries) {
      if (prop.type == "object") {
        res += `  ${name}: ${rec(prop.properties ?? {})}`;
      } else if (prop.type == "array") {
        res += `  ${name}: ${prop?.items?.type ?? "any"}[]`;
      } else {
        let typ = prop?.type ?? "any";
        if (typ == "integer") {
          typ = "number";
        }
        res += `  ${name}: ${typ}`;
      }
      i++;
      if (i < entries.length) {
        res += ",\n";
      }
    }
    res += "\n}";
    return res;
  }
  return rec(schema.properties, true);
}
function pythonCompile(schema) {
  let res = "";
  const entries = Object.entries(schema.properties);
  if (entries.length === 0) {
    return "dict";
  }
  let i = 0;
  for (let [name, prop] of entries) {
    let typ = "dict";
    if (prop.type === "array") {
      typ = "list";
    } else if (prop.type === "string") {
      typ = "str";
    } else if (prop.type === "number") {
      typ = "float";
    } else if (prop.type === "integer") {
      typ = "int";
    } else if (prop.type === "boolean") {
      typ = "bool";
    }
    res += `    ${name}: ${typ}`;
    i++;
    if (i < entries.length) {
      res += "\n";
    }
  }
  return res;
}
function phpCompile(schema) {
  let res = "";
  const entries = Object.entries(schema.properties);
  if (entries.length === 0) {
    return "array";
  }
  let i = 0;
  for (let [name, prop] of entries) {
    let typ = "array";
    if (prop.type === "array") {
      typ = "array";
    } else if (prop.type === "string") {
      typ = "string";
    } else if (prop.type === "number") {
      typ = "float";
    } else if (prop.type === "integer") {
      typ = "int";
    } else if (prop.type === "boolean") {
      typ = "bool";
    }
    res += `  public ${typ} $${name};`;
    i++;
    if (i < entries.length) {
      res += "\n";
    }
  }
  return res;
}
function formatResourceTypes(resourceTypes, lang) {
  if (lang === "python3") {
    const result = resourceTypes.map((resourceType) => {
      return `class ${resourceType.name}(TypedDict):
${pythonCompile(resourceType.schema)}`;
    });
    return "\n" + result.join("\n\n");
  } else if (lang === "php") {
    const result = resourceTypes.map((resourceType) => {
      return `class ${toCamel(capitalize(resourceType.name))} {
${phpCompile(
        resourceType.schema
      )}
}`;
    });
    return "\n" + result.join("\n\n");
  } else {
    const result = resourceTypes.filter(
      (resourceType) => Boolean(resourceType.schema) && typeof resourceType.schema === "object"
    ).map((resourceType) => {
      return `type ${toCamel(capitalize(resourceType.name))} = ${compile(
        resourceType.schema
      )}`;
    });
    return "\n" + result.join("\n\n");
  }
}
function yamlStringifyExceptKeys(obj, keys) {
  return YAML.stringify(obj, (key, val) => {
    if (keys.includes(key)) {
      return void 0;
    } else {
      return val;
    }
  });
}
const GEN_PROMPT = {
  "system": "You are a helpful coding assistant for Windmill, a developer platform for running scripts. You write code as instructed by the user. Each user message includes some contextual information which should guide your answer.\nOnly output code. Wrap the code in a code block.\nPut explanations directly in the code as comments.\n\nHere's how interactions have to look like:\nuser: {sample_question}\nassistant: ```language\n{code}\n```",
  "prompts": {
    "python3": {
      "prompt": '<contextual_information>\nYou have to write a function in Python called "main". Specify the parameter types. Do not call the main function. You should generally return the result.\nThe "main" function cannot be async. If you need to use async code, you can use the asyncio library.\nYou can take as parameters resources which are dictionaries containing credentials or configuration information. For Windmill to correctly detect the resources to be passed, the resource type name has to be exactly as specified in the following list:\n<resourceTypes>\n{resourceTypes}\n</resourceTypes>\nYou need to define the type of the resources that are needed before the main function, but only include them if they are actually needed to achieve the function purpose.\nThe resource type name has to be exactly as specified (has to be IN LOWERCASE). If the type name conflicts with any imported methods, you have to rename the imported method with the conflicting name.\n<contextual_information>\nMy instructions: {description}'
    },
    "deno": {
      "prompt": '<contextual_information>\nYou have to write TypeScript code and export a "main" function like this: "export async function main(...)" and specify the parameter types but do not call it. You should generally return the result.\nYou can import deno libraries or you can also import npm libraries like that: "import ... from "npm:{package}";". The fetch standard method is available globally.\nYou can take as parameters resources which are dictionaries containing credentials or configuration information. For Windmill to correctly detect the resources to be passed, the resource type name has to be exactly as specified in the following list:\n<resourceTypes>\n{resourceTypes}\n</resourceTypes>\nYou need to define the type of the resources that are needed before the main function, but only include them if they are actually needed to achieve the function purpose.\nThe resource type name has to be exactly as specified (no resource suffix). If the type name conflicts with any imported methods, you have to rename the imported method with the conflicting name.\n</contextual_information>\nMy instructions: {description}'
    },
    "go": {
      "prompt": 'Here\'s my go code: \n```go\n{code}\n```\n<contextual_information>\nYou have to write go code and export a "main" function. Import the packages you need. The return type of the function has to be ({return_type}, error). The file package has to be "inner"\n</contextual_information>\nMy instructions: {description}'
    },
    "bash": {
      "prompt": '<contextual_information>\nYou have to write bash code. Do not include "#!/bin/bash". Arguments are always string and can only be obtained with "var1="$1"", "var2="$2"", etc... You do not need to check if the arguments are present.\n</contextual_information>\nMy instructions: {description}'
    },
    "postgresql": {
      "prompt": "<contextual_information>\nYou have to write a statement for PostgreSQL. Arguments can be obtained directly in the statement with `$1::{type}`, `$2::{type}`, etc... Name the parameters (without specifying the type) by adding comments before the statement like that: `-- $1 name1` or `-- $2 name = default` (one per row)\n</contextual_information>\nMy instructions: {description}"
    },
    "mysql": {
      "prompt": "<contextual_information>\nYou have to write a statement for MySQL. Arguments can be obtained directly in the statement with ?. Name the parameters by adding comments before the statement like that: `-- ? name1 ({type})` or `-- ? name2 ({type}) = default` (one per row)\n</contextual_information>\nMy instructions: {description}"
    },
    "bigquery": {
      "prompt": "<contextual_information>\nYou have to write a statement for BigQuery. You can define arguments by adding comments before the statement like that: `-- @name1 ({type})` or `-- @name2 ({type}) = default` (one per row). They can then be obtained directly in the statement with `@name1`, `@name2`, etc....\n</contextual_information>\nMy instructions: {description}"
    },
    "snowflake": {
      "prompt": "<contextual_information>\nYou have to write a statement for Snowflake. Arguments can be obtained directly in the statement with ?. Name the parameters by adding comments before the statement like that: `-- ? name1 ({type})` or `-- ? name2 ({type}) = default` (one per row)\n</contextual_information>\nMy instructions: {description}"
    },
    "mssql": {
      "prompt": "<contextual_information>\nYou have to write a statement for Microsoft SQL Server. Arguments can be obtained directly in the statement with @p1, @p2, etc.. Name the parameters by adding comments before the statement like that: `-- @p1 name1 ({type})` or `-- @p2 name2 ({type}) = default` (one per row)\n</contextual_information>\nMy instructions: {description}"
    },
    "graphql": {
      "prompt": "<contextual_information>\nYou have to write a query for GraphQL. Add the needed arguments as query parameters.\n</contextual_information>\nMy instructions: {description}"
    },
    "powershell": {
      "prompt": '<contextual_information>\nYou have to write Powershell code. Arguments can be obtained by calling the param function on the first line like that: `param($ParamName1, $ParamName2 = "default value", [{type}]$ParamName3, ...)`\n</contextual_information>\nMy instructions: {description}'
    },
    "nativets": {
      "prompt": '<contextual_information>\nYou have to write TypeScript code and export a "main" function like this: "export async function main(...)" and specify the parameter types but do not call it. You should generally return the result.\nYou should use fetch and are not allowed to import any libraries. \nYou can take as parameters resources which are dictionaries containing credentials or configuration information. For Windmill to correctly detect the resources to be passed, the resource type name has to be exactly as specified in the following list:\n<resourceTypes>\n{resourceTypes}\n</resourceTypes>\nYou need to define the type of the resources that are needed before the main function, but only include them if they are actually needed to achieve the function purpose.\nThe resource type name has to be exactly as specified (no resource suffix).\n</contextual_information>\nMy instructions: {description}'
    },
    "bun": {
      "prompt": '<contextual_information>\nYou have to write TypeScript code and export a "main" function like this: "export async function main(...)" and specify the parameter types but do not call it. You should generally return the result.\nThe fetch standard method is available globally.\nYou can take as parameters resources which are dictionaries containing credentials or configuration information. For Windmill to correctly detect the resources to be passed, the resource type name has to be exactly as specified in the following list:\n<resourceTypes>\n{resourceTypes}\n</resourceTypes>\nYou need to define the type of the resources that are needed before the main function, but only include them if they are actually needed to achieve the function purpose.\nThe resource type name has to be exactly as specified (no resource suffix). If the type name conflicts with any imported methods, you have to rename the imported method with the conflicting name.\n</contextual_information>\nMy instructions: {description}'
    },
    "php": {
      "prompt": '<contextual_information>\nYou have to write a function in php called "main". Specify the parameter types. Do not call the main function. You should generally return the result. The script must start with `<?php`.\nYou can take as parameters resources which are classes containing credentials or configuration information. For Windmill to correctly detect the resources to be passed, the resource type name has to be exactly as specified in the following list:\n<resourceTypes>\n{resourceTypes}\n</resourceTypes>\nYou need to define the type of the resources that are needed before the main function, but only include them if they are actually needed to achieve the function purpose.\nBefore defining each type, check if the class already exists using class_exists.\nThe resource type name has to be exactly as specified.\nIf you need to import libraries, you need to specify them as comments in the following manner before the main function:\n```\n// require:\n// mylibrary/mylibrary\n// myotherlibrary/myotherlibrary@optionalversion\n```\nNo need to require autoload, it is already done.\n<contextual_information>\nMy instructions: {description}'
    },
    "frontend": {
      "prompt": "Write client-side javascript code that should {description}. \n\n<contextual_information>\nYou can access the context object with the ctx global variable. \nThe app state is a store that can be used to store data. You can access and update the state object with the state global variable like this: state.foo = 'bar'\nYou can use the goto function to navigate to a specific URL: goto(path: string, newTab?: boolean)\nYou can use the openModal and closeModal functions to open and close a modal: openModal(id: string), closeModal(id: string)\nYou can use the setTab function to manually set the tab of a Tab component: setTab(id: string, index: string)\nYou can use the recompute function to recompute a component: recompute(id: string)\nYou can use the getAgGrid function to get the ag-grid instance of a table: getAgGrid(id: string)\nYou can use the setSelectedIndex function to select a row in a table or an AG Grid table: setSelectedIndex(id: string, index: number)\nThe setValue function is meant to set or force the value of a component: setValue(id: string, value: any)\nYou can validate a specific field of a form: validate(id: string, key: string)\nYou can validate all fields of a form: validateAll(id: string, key: string)\nYou can invalidate a specific field of a form: invalidate(id: string, key: string, error: string)\n</contextual_information>"
    },
    "transformer": {
      "prompt": "Write client-side javascript code that should process the variable `result` according to the following instructions: {description}.\nThe variable `result` is available globally.\nAt the end of the code, the processed result has to be returned.\n\n<contextual_information>\nYou can access the context object with the ctx global variable. \nThe app state is a store that can be used to store data. You can access and update the state object with the state global variable like this: state.foo = 'bar'\nYou can use the goto function to navigate to a specific URL: goto(path: string, newTab?: boolean)\nYou can use the openModal and closeModal functions to open and close a modal: openModal(id: string), closeModal(id: string)\nYou can use the setTab function to manually set the tab of a Tab component: setTab(id: string, index: string)\nYou can use the recompute function to recompute a component: recompute(id: string)\nYou can use the getAgGrid function to get the ag-grid instance of a table: getAgGrid(id: string)\nYou can use the setSelectedIndex function to select a row in a table or an AG Grid table: setSelectedIndex(id: string, index: number)\nThe setValue function is meant to set or force the value of a component: setValue(id: string, value: any)\nYou can validate a specific field of a form: validate(id: string, key: string)\nYou can validate all fields of a form: validateAll(id: string, key: string)\nYou can invalidate a specific field of a form: invalidate(id: string, key: string, error: string)\n</contextual_information>"
    }
  }
};
const GEN_CONFIG = GEN_PROMPT;
const SUPPORTED_LANGUAGES = new Set(Object.keys(GEN_CONFIG.prompts));
const openaiConfig = {
  temperature: 0,
  max_tokens: 4096,
  model: "gpt-4o-2024-05-13",
  seed: 42,
  stream: true,
  messages: []
};
class WorkspacedOpenai {
  client;
  init(workspace, token = void 0) {
    const baseURL = `${location.origin}${OpenAPI.BASE}/w/${workspace}/openai/proxy`;
    this.client = new OpenAI({
      baseURL,
      apiKey: "fakekey",
      defaultHeaders: {
        Authorization: token ? `Bearer ${token}` : ""
      },
      dangerouslyAllowBrowser: true
    });
  }
  getClient() {
    if (!this.client) {
      throw new Error("OpenAI not initialized");
    }
    return this.client;
  }
}
let workspacedOpenai = new WorkspacedOpenai();
async function getResourceTypes(scriptOptions) {
  const elems = scriptOptions.type === "gen" || scriptOptions.type === "edit" ? [scriptOptions.description] : [];
  if (scriptOptions.type === "edit" || scriptOptions.type === "fix") {
    const { code } = scriptOptions;
    const mainSig = scriptOptions.language === "python3" ? code.match(/def main\((.*?)\)/s) : code.match(/function main\((.*?)\)/s);
    if (mainSig) {
      elems.push(mainSig[1]);
    }
    const matches = code.matchAll(/^(?:type|class) ([a-zA-Z0-9_]+)/gm);
    for (const match of matches) {
      elems.push(match[1]);
    }
  }
  const resourceTypes = await ResourceService.queryResourceTypes({
    workspace: scriptOptions.workspace,
    text: elems.join(";"),
    limit: 3
  });
  return resourceTypes;
}
async function addResourceTypes(scriptOptions, prompt) {
  if (["deno", "bun", "nativets", "python3", "php"].includes(scriptOptions.language)) {
    const resourceTypes = await getResourceTypes(scriptOptions);
    const resourceTypesText = formatResourceTypes(
      resourceTypes,
      ["deno", "bun", "nativets"].includes(scriptOptions.language) ? "typescript" : scriptOptions.language
    );
    prompt = prompt.replace("{resourceTypes}", resourceTypesText);
  }
  return prompt;
}
const MAX_SCHEMA_LENGTH = 1e5 * 3.5;
function addThousandsSeparator(n) {
  return n.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
}
function stringifySchema(dbSchema) {
  const { schema, lang } = dbSchema;
  if (lang === "graphql") {
    let graphqlSchema = printSchema(buildClientSchema(schema));
    return graphqlSchema;
  } else {
    let smallerSchema = {};
    for (const schemaKey in schema) {
      smallerSchema[schemaKey] = {};
      for (const tableKey in schema[schemaKey]) {
        smallerSchema[schemaKey][tableKey] = [];
        for (const colKey in schema[schemaKey][tableKey]) {
          const col = schema[schemaKey][tableKey][colKey];
          const p = [colKey, col.type, col.required];
          if (col.default) {
            p.push(col.default);
          }
          smallerSchema[schemaKey][tableKey].push(p);
        }
      }
    }
    let finalSchema = smallerSchema;
    if (dbSchema.publicOnly) {
      finalSchema = smallerSchema.public || smallerSchema.PUBLIC || smallerSchema.dbo || smallerSchema;
    } else if (lang === "mysql" && Object.keys(smallerSchema).length === 1) {
      finalSchema = smallerSchema[Object.keys(smallerSchema)[0]];
    }
    return JSON.stringify(finalSchema);
  }
}
async function getNonStreamingCompletion(messages, abortController, model = openaiConfig.model, noCache) {
  const openaiClient = workspacedOpenai.getClient();
  const completion = await openaiClient.chat.completions.create(
    {
      ...openaiConfig,
      messages,
      stream: false,
      model
    },
    {
      query: {
        no_cache: noCache
      },
      signal: abortController.signal
    }
  );
  return completion.choices[0]?.message.content || "";
}
async function getCompletion(messages, abortController, model = openaiConfig.model) {
  const openaiClient = workspacedOpenai.getClient();
  const completion = await openaiClient.chat.completions.create(
    {
      ...openaiConfig,
      messages,
      model
    },
    {
      signal: abortController.signal
    }
  );
  return completion;
}
function getStringEndDelta(prev, now) {
  return now.slice(prev.length);
}
async function deltaCodeCompletion(messages, generatedCodeDelta, abortController) {
  const completion = await getCompletion(messages, abortController);
  let response = "";
  let code = "";
  let delta = "";
  for await (const part of completion) {
    response += part.choices[0]?.delta?.content || "";
    let match = response.match(/```[a-zA-Z]+\n([\s\S]*?)\n```/);
    if (match) {
      delta = getStringEndDelta(code, match[1]);
      code = match[1];
      generatedCodeDelta.set(delta);
      break;
    }
    match = response.match(/```[a-zA-Z]+\n([\s\S]*)/);
    if (!match) {
      continue;
    }
    if (!match[1].endsWith("`")) {
      delta = getStringEndDelta(code, match[1]);
      generatedCodeDelta.set(delta);
      code = match[1];
    }
  }
  if (code.length === 0) {
    throw new Error("No code block found");
  }
  return code;
}
export {
  MAX_SCHEMA_LENGTH as M,
  SUPPORTED_LANGUAGES as S,
  getCompletion as a,
  addResourceTypes as b,
  addThousandsSeparator as c,
  deltaCodeCompletion as d,
  getNonStreamingCompletion as g,
  stringifySchema as s,
  workspacedOpenai as w,
  yamlStringifyExceptKeys as y
};
