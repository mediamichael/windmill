import { m as get_store_value } from "./ssr.js";
import { b as base } from "./base.js";
import { S as ScheduleService, F as FlowService, c as ScriptService } from "./services.gen.js";
import { w as workspaceStore } from "./stores2.js";
function scriptLangToEditorLang(lang) {
  if (lang == "deno") {
    return "typescript";
  } else if (lang == "bun" || lang == "bunnative") {
    return "typescript";
  } else if (lang == "nativets") {
    return "typescript";
  } else if (lang == "postgresql") {
    return "sql";
  } else if (lang == "mysql") {
    return "sql";
  } else if (lang == "bigquery") {
    return "sql";
  } else if (lang == "snowflake") {
    return "sql";
  } else if (lang == "mssql") {
    return "sql";
  } else if (lang == "python3") {
    return "python";
  } else if (lang == "bash") {
    return "shell";
  } else if (lang == "powershell") {
    return "powershell";
  } else if (lang == "php") {
    return "php";
  } else if (lang == "graphql") {
    return "graphql";
  } else if (lang == void 0) {
    return "typescript";
  } else {
    return lang;
  }
}
async function loadScriptSchedule(path, workspace) {
  const existsSchedule = await ScheduleService.existsSchedule({
    workspace,
    path
  });
  if (!existsSchedule) {
    return void 0;
  }
  const schedule = await ScheduleService.getSchedule({
    workspace,
    path
  });
  return {
    summary: schedule.summary,
    enabled: schedule.enabled,
    cron: schedule.schedule,
    timezone: schedule.timezone,
    args: schedule.args ?? {}
  };
}
async function loadSchemaFlow(path) {
  const flow = await FlowService.getFlowByPath({
    workspace: get_store_value(workspaceStore),
    path: path ?? ""
  });
  return flow.schema;
}
function scriptPathToHref(path, hubBaseUrl) {
  if (path.startsWith("hub/")) {
    return hubBaseUrl + "/from_version/" + path.substring(4);
  } else {
    return `${base}/scripts/get/${path}?workspace=${get_store_value(workspaceStore)}`;
  }
}
const scriptLanguagesArray = [
  ["bun", "TypeScript (Bun)"],
  ["python3", "Python"],
  ["deno", "TypeScript (Deno)"],
  ["bash", "Bash"],
  ["go", "Go"],
  ["nativets", "REST"],
  ["bunnative", "REST"],
  ["postgresql", "PostgreSQL"],
  ["mysql", "MySQL"],
  ["bigquery", "BigQuery"],
  ["snowflake", "Snowflake"],
  ["mssql", "MS SQL Server"],
  ["graphql", "GraphQL"],
  ["powershell", "PowerShell"],
  ["php", "PHP"],
  ["docker", "Docker"]
];
function processLangs(selected, langs) {
  if (selected === "nativets") {
    return langs;
  } else {
    let ls = langs.filter((lang) => lang !== "nativets");
    if (!ls.includes("bunnative")) {
      ls.push("bunnative");
    }
    return ls;
  }
}
const defaultScriptLanguages = Object.fromEntries(scriptLanguagesArray);
async function getScriptByPath(path) {
  if (path.startsWith("hub/")) {
    const { content, language, schema, lockfile } = await ScriptService.getHubScriptByPath({ path });
    return {
      content,
      language,
      schema,
      description: "",
      tag: void 0,
      concurrent_limit: void 0,
      concurrency_time_window_s: void 0,
      lock: lockfile
    };
  } else {
    const script = await ScriptService.getScriptByPath({
      workspace: get_store_value(workspaceStore),
      path: path ?? ""
    });
    return {
      content: script.content,
      language: script.language,
      schema: script.schema,
      description: script.description,
      tag: script.tag,
      concurrent_limit: script.concurrent_limit,
      concurrency_time_window_s: script.concurrency_time_window_s,
      lock: script.lock,
      created_at: script.created_at
    };
  }
}
export {
  loadScriptSchedule as a,
  scriptPathToHref as b,
  defaultScriptLanguages as d,
  getScriptByPath as g,
  loadSchemaFlow as l,
  processLangs as p,
  scriptLangToEditorLang as s
};
