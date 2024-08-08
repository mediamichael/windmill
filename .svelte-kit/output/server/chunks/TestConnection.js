import { c as create_ssr_component, b as add_attribute, s as subscribe, v as validate_component, e as escape } from "./ssr.js";
import { B as Button } from "./toast.js";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import { w as workspaceStore } from "./stores2.js";
import "yaml";
import "minimatch";
import { D as Database } from "./IconedResourceType.js";
const ONE_DAY_IN_SECONDS = 86400;
const ONE_HOUR_IN_SECONDS = 3600;
const ONE_MINUTE_IN_SECONDS = 60;
const SecondsInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { seconds = 0 } = $$props;
  let { hideDisplay = false } = $$props;
  let { disabled = false } = $$props;
  let { max = void 0 } = $$props;
  let day = void 0;
  let hour = void 0;
  let min = void 0;
  let sec = void 0;
  function convertSecondsToTime(seconds2) {
    day = Math.floor(seconds2 / ONE_DAY_IN_SECONDS);
    seconds2 -= day * ONE_DAY_IN_SECONDS;
    day = day || void 0;
    hour = Math.floor(seconds2 / ONE_HOUR_IN_SECONDS);
    seconds2 -= hour * ONE_HOUR_IN_SECONDS;
    hour = hour || void 0;
    min = Math.floor(seconds2 / ONE_MINUTE_IN_SECONDS);
    seconds2 -= min * ONE_MINUTE_IN_SECONDS;
    min = min || void 0;
    sec = seconds2 || void 0;
  }
  if ($$props.seconds === void 0 && $$bindings.seconds && seconds !== void 0) $$bindings.seconds(seconds);
  if ($$props.hideDisplay === void 0 && $$bindings.hideDisplay && hideDisplay !== void 0) $$bindings.hideDisplay(hideDisplay);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0) $$bindings.max(max);
  {
    convertSecondsToTime(seconds);
  }
  return `<div class="flex flex-wrap gap-x-4">${!hideDisplay ? `<input${add_attribute(
    "value",
    seconds == null || seconds == void 0 ? "Not set" : disabled ? "" : seconds + " second" + (seconds === 1 ? "" : "s"),
    0
  )} ${disabled ? "disabled" : ""} readonly type="text" class="max-w-[248px] bg-gray-50 mb-2 mt-6">` : ``} <div class="flex flex-wrap items-center gap-2 text-xs font-medium"><div class="flex items-center gap-2"><label>Sec
				<input type="number" class="!w-14" ${disabled ? "disabled" : ""}${add_attribute("value", sec, 0)}></label> <label>Min
				<input type="number" class="!w-14" ${disabled ? "disabled" : ""}${add_attribute("value", min, 0)}></label></div> <div class="flex items-center gap-2"><label>Hour
				<input type="number" class="!w-14" ${disabled ? "disabled" : ""}${add_attribute("value", hour, 0)}></label> <label>Day
				<input type="number" class="!w-14" ${disabled ? "disabled" : ""}${add_attribute("value", day, 0)}></label></div></div></div>`;
});
const TestConnection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  let { workspaceOverride = void 0 } = $$props;
  let { resourceType } = $$props;
  let { args = {} } = $$props;
  let { buttonTextOverride = void 0 } = $$props;
  const scripts = {
    postgresql: {
      code: `SELECT 1`,
      lang: "postgresql",
      argName: "database"
    },
    mysql: {
      code: `SELECT 1`,
      lang: "mysql",
      argName: "database"
    },
    bigquery: {
      code: `select 1`,
      lang: "bigquery",
      argName: "database"
    },
    snowflake: {
      code: `select 1`,
      lang: "snowflake",
      argName: "database"
    },
    ms_sql_server: {
      code: `SELECT 1`,
      lang: "mssql",
      argName: "database"
    },
    s3: {
      code: `
import { S3Client } from "https://deno.land/x/s3_lite_client@0.6.1/mod.ts";		

type S3 = object

export async function main(s3: S3) {
	const s3client = new S3Client(s3);
	for await (const obj of s3client.listObjects({ prefix: "/" })) {
		console.log(obj);
	}
}
`,
      lang: "deno",
      argName: "s3"
    },
    graphql: {
      code: "{ __typename }",
      lang: "graphql",
      argName: "api",
      additionalCheck: (testResult) => {
        if (testResult.success && (typeof testResult.result !== "object" || !("__typename" in (testResult.result ?? {})))) {
          return {
            ...testResult,
            result: {
              error: { message: "Invalid GraphQL API response" }
            },
            success: false
          };
        } else {
          return testResult;
        }
      }
    },
    s3_bucket: {
      code: `

const process = require('process');

export async function main(bucket: any) {
	const req = await fetch(process.env.BASE_URL + '/api/settings/test_object_storage_config', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + process.env.WM_TOKEN,
		},
		body: JSON.stringify(bucket),
	});
	if (!req.ok) {
		throw new Error(await req.text());
	}
	return await req.text();
}
`,
      lang: "bun",
      argName: "bucket"
    }
  };
  if ($$props.workspaceOverride === void 0 && $$bindings.workspaceOverride && workspaceOverride !== void 0) $$bindings.workspaceOverride(workspaceOverride);
  if ($$props.resourceType === void 0 && $$bindings.resourceType && resourceType !== void 0) $$bindings.resourceType(resourceType);
  if ($$props.args === void 0 && $$bindings.args && args !== void 0) $$bindings.args(args);
  if ($$props.buttonTextOverride === void 0 && $$bindings.buttonTextOverride && buttonTextOverride !== void 0) $$bindings.buttonTextOverride(buttonTextOverride);
  $$unsubscribe_workspaceStore();
  return `${Object.keys(scripts).includes(resourceType || "") ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      spacingSize: "sm",
      size: "xs",
      btnClasses: "h-8",
      color: "light",
      variant: "border"
    },
    {},
    {
      default: () => {
        return `${`${validate_component(Database, "Database").$$render($$result, { class: "mr-2 !h-4 !w-4" }, {}, {})}`} ${escape(buttonTextOverride ?? "Test connection")}`;
      }
    }
  )}` : ``}`;
});
export {
  SecondsInput as S,
  TestConnection as T
};
