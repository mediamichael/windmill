import { c as create_ssr_component, s as subscribe, d as createEventDispatcher, o as onDestroy, b as add_attribute, e as escape, v as validate_component, w as spread, x as escape_object, y as escape_attribute_value } from "./ssr.js";
import { y as yamlStringifyExceptKeys, a as getCompletion } from "./lib.js";
import { m as metadataCompletionEnabled, f as copilotInfo } from "./stores2.js";
import { s as sendUserToast } from "./toast.js";
import { twMerge } from "tailwind-merge";
import { C as Check } from "./check.js";
import { W as Wand_2 } from "./wand-2.js";
import { L as Loader_2 } from "./loader-2.js";
const PYTHON_INIT_CODE = `import os
import wmill

# You can import any PyPi package. 
# See here for more info: https://www.windmill.dev/docs/advanced/dependencies_in_python

# you can use typed resources by doing a type alias to dict
#postgresql = dict

def main(
    no_default: str,
    #db: postgresql,
    name="Nicolas Bourbaki",
    age=42,
    obj: dict = {"even": "dicts"},
    l: list = ["or", "lists!"],
    file_: bytes = bytes(0),
):

    print(f"Hello World and a warm welcome especially to {name}")
    print("and its acolytes..", age, obj, l, len(file_))

    # retrieve variables, resources, states using the wmill client
    try:
        secret = wmill.get_variable("f/examples/secret")
    except:
        secret = "No secret yet at f/examples/secret !"
    print(f"The variable at \`f/examples/secret\`: {secret}")

    # Get last state of this script execution by the same trigger/user
    last_state = wmill.get_state()
    new_state = {"foo": 42} if last_state is None else last_state
    new_state["foo"] += 1
    wmill.set_state(new_state)

    # fetch context variables
    user = os.environ.get("WM_USERNAME")

    # return value is converted to JSON
    return {"splitted": name.split(), "user": user, "state": new_state}`;
const PYTHON_INIT_CODE_CLEAR = `# import wmill


def main(x: str):
    return x`;
const PYTHON_INIT_CODE_TRIGGER = `import wmill


def main():
    # A common trigger script would follow this pattern:
    # 1. Get the last saved state
    # state = wmill.get_state()
    # 2. Get the actual state from the external service
    # newState = ...
    # 3. Compare the two states and update the internal state
    # wmill.setState(newState)
    # 4. Return the new rows
    # return range from (state to newState)
    return [1, 2, 3]`;
const PYTHON_FAILURE_MODULE_CODE = `import os

def main(message: str, name: str):
    flow_id = os.environ.get("WM_FLOW_JOB_ID")
    print("message", message)
    print("name", name)
    return message, flow_id`;
var define_pkg_default = { name: "windy", version: "0.0.1", scripts: { dev: "vite dev", build: "vite build", preview: "vite preview", check: "svelte-check --tsconfig ./tsconfig.json --threshold warning", "check:watch": "svelte-check --tsconfig ./tsconfig.json --watch", lint: "prettier --ignore-path .gitignore --check --plugin-search-dir=. . && eslint --ignore-path .gitignore .", format: "prettier --ignore-path .gitignore --write --plugin-search-dir=. .", package: "svelte-package -o package", "generate-backend-client": "openapi-ts --input ../backend/windmill-api/openapi.yaml --output ./src/lib/gen --useOptions --enums javascript --format false", "generate-backend-client-mac": "openapi-ts --input ../backend/windmill-api/openapi.yaml --output ./src/lib/gen --useOptions --enums javascript", pretest: "tsc --incremental -p tests/tsconfig.json", test: "playwright test --config=tests-out/playwright.config.js", "filter-classes": "node filterTailwindClasses.js" }, devDependencies: { "@floating-ui/core": "^1.3.1", "@hey-api/openapi-ts": "^0.43.0", "@playwright/test": "^1.34.3", "@rgossiaux/svelte-headlessui": "^2.0.0", "@sveltejs/adapter-static": "^3.0.0", "@sveltejs/kit": "^2.0.0", "@sveltejs/package": "^2.2.2", "@sveltejs/vite-plugin-svelte": "^3.0.0", "@tailwindcss/forms": "^0.5.3", "@tailwindcss/typography": "^0.5.8", "@types/d3": "^7.4.0", "@types/d3-zoom": "^3.0.3", "@types/lodash": "^4.14.195", "@types/node": "^20.3.3", "@types/vscode": "^1.83.5", "@typescript-eslint/eslint-plugin": "^5.59.8", "@typescript-eslint/parser": "^5.60.0", "@zerodevx/svelte-toast": "^0.9.5", autoprefixer: "^10.4.13", cssnano: "^6.0.1", "d3-dag": "^0.11.5", eslint: "^8.47.0", "eslint-config-prettier": "^8.6.0", "eslint-plugin-svelte": "^2.33.1", "path-browserify": "^1.0.1", postcss: "^8.4.24", "postcss-load-config": "^4.0.1", prettier: "^2.8.8", "prettier-plugin-svelte": "^2.10.1", "simple-svelte-autocomplete": "^2.5.1", "style-to-object": "^0.4.1", "stylelint-config-recommended": "^13.0.0", svelte: "^4.0.0", "svelte-awesome-color-picker": "^3.0.4", "svelte-check": "^3.4.3", "svelte-floating-ui": "^1.5.8", "svelte-highlight": "^7.6.0", "svelte-multiselect": "^10.0.0", "svelte-popperjs": "^1.3.2", "svelte-preprocess": "^5.0.1", "svelte-range-slider-pips": "^2.3.1", "svelte-splitpanes": "^0.8.0", svelte2tsx: "^0.6.16", tailwindcss: "^3.4.1", tslib: "^2.6.1", typescript: "^5.1.3", vite: "^5", "vite-plugin-circular-dependency": "^0.2.1", yootils: "^0.3.1" }, overrides: { "@rgossiaux/svelte-headlessui": { svelte: "$svelte" }, "ag-grid-svelte": { svelte: "$svelte" }, "svelte-chartjs": { svelte: "$svelte" }, "svelte-timezone-picker": { svelte: "$svelte" }, "monaco-editor": "$monaco-editor", vscode: "$vscode" }, resolutions: { "monaco-editor": "npm:@codingame/monaco-editor-treemended@>=1.83.5 <1.84.0", vscode: "npm:@codingame/monaco-vscode-api@>=1.83.5 <1.84.0" }, type: "module", dependencies: { "@aws-crypto/sha256-js": "^4.0.0", "@json2csv/plainjs": "^7.0.6", "@leeoniya/ufuzzy": "^1.0.8", "@popperjs/core": "^2.11.6", "@redocly/json-to-json-schema": "^0.0.1", "@tanstack/svelte-table": "^8.9.9", "@windmill-labs/svelte-dnd-action": "latest", "ag-charts-community": "^9.0.1", "ag-charts-enterprise": "^9.0.1", "ag-grid-community": "^31.0.0", "ag-grid-enterprise": "^31.0.0", ansi_up: "^5.2.1", "chart.js": "^4.3.0", "chartjs-adapter-date-fns": "^3.0.0", "chartjs-plugin-zoom": "^2.0.0", "d3-zoom": "^3.0.0", "date-fns": "^2.30.0", diff: "^5.1.0", "driver.js": "^1.3.0", "esm-env": "^1.0.0", "fast-equals": "^5.0.1", graphql: "^16.7.1", "hash-sum": "^2.0.0", "highlight.js": "^11.8.0", "lucide-svelte": "^0.293.0", minimatch: "^10.0.1", "monaco-editor": "npm:@codingame/monaco-editor-treemended@>=1.83.5 <1.84.0", "monaco-graphql": "^1.5.1", "monaco-languageclient": "~7.0.1", ol: "^7.4.0", openai: "^4.47.1", "pdfjs-dist": "^3.8.162", quill: "^1.3.7", "svelte-carousel": "^1.0.25", "svelte-chartjs": "^3.1.5", "svelte-exmarkdown": "^3.0.5", "svelte-infinite-loading": "^1.3.8", "svelte-portal": "^2.2.1", "svelte-tiny-virtual-list": "^2.0.5", "tailwind-merge": "^1.13.2", vscode: "npm:@codingame/monaco-vscode-api@>=1.83.5 <1.84.0", "vscode-languageclient": "~9.0.1", "vscode-uri": "~3.0.8", "vscode-ws-jsonrpc": "~3.1.0", "windmill-parser-wasm": "^1.367.2", "windmill-sql-datatype-parser-wasm": "^1.318.0", "y-monaco": "^0.1.4", "y-websocket": "^1.5.0", yaml: "^2.3.4", yjs: "^13.6.7" }, peerDependencies: { svelte: "^4.0.0" }, exports: { "./package.json": "./package.json", ".": { types: "./dist/index.d.ts", svelte: "./dist/index.js" }, "./assets/app.css": "./package/assets/app.css", "./components/TestJobLoader.svelte": { types: "./package/components/TestJobLoader.svelte.d.ts", svelte: "./package/components/TestJobLoader.svelte", default: "./package/components/TestJobLoader.svelte" }, "./components/common/kbd/Kbd.svelte": { types: "./package/components/common/kbd/Kbd.svelte.d.ts", svelte: "./package/components/common/kbd/Kbd.svelte", default: "./package/components/common/kbd/Kbd.svelte" }, "./components/icons/WindmillIcon.svelte": { types: "./package/components/icons/WindmillIcon.d.ts", svelte: "./package/components/icons/WindmillIcon.svelte", default: "./package/components/icons/WindmillIcon.svelte" }, "./components/IconedResourceType.svelte": { types: "./package/components/IconedResourceType.svelte.d.ts", svelte: "./package/components/IconedResourceType.svelte", default: "./package/components/IconedResourceType.svelte" }, "./components/common/drawer/Drawer.svelte": { types: "./package/components/common/drawer/Drawer.svelte.d.ts", svelte: "./package/components/common/drawer/Drawer.svelte", default: "./package/components/common/drawer/Drawer.svelte" }, "./components/common/drawer/DrawerContent.svelte": { types: "./package/components/common/drawer/DrawerContent.svelte.d.ts", svelte: "./package/components/common/drawer/DrawerContent.svelte", default: "./package/components/common/drawer/DrawerContent.svelte" }, "./components/common/button/Button.svelte": { types: "./package/components/common/button/Button.svelte.d.ts", svelte: "./package/components/common/button/Button.svelte", default: "./package/components/common/button/Button.svelte" }, "./components/RadioButton.svelte": { types: "./package/components/RadioButton.svelte.d.ts", svelte: "./package/components/RadioButton.svelte", default: "./package/components/RadioButton.svelte" }, "./components/Toggle.svelte": { types: "./package/components/Toggle.svelte.d.ts", svelte: "./package/components/Toggle.svelte", default: "./package/components/Toggle.svelte" }, "./components/common/tabs/Tabs.svelte": { types: "./package/components/common/tabs/Tabs.svelte.d.ts", svelte: "./package/components/common/tabs/Tabs.svelte", default: "./package/components/common/tabs/Tabs.svelte" }, "./components/common/tabs/Tab.svelte": { types: "./package/components/common/tabs/Tab.svelte.d.ts", svelte: "./package/components/common/tabs/Tab.svelte", default: "./package/components/common/tabs/Tab.svelte" }, "./components/common/alert/Alert.svelte": { types: "./package/components/common/alert/Alert.svelte.d.ts", svelte: "./package/components/common/alert/Alert.svelte", default: "./package/components/common/alert/Alert.svelte" }, "./components/apps/editor/AppPreview.svelte": { types: "./package/components/apps/editor/AppPreview.svelte.d.ts", svelte: "./package/components/apps/editor/AppPreview.svelte", default: "./package/components/apps/editor/AppPreview.svelte" }, "./components/FlowViewer.svelte": { types: "./package/components/FlowViewer.svelte.d.ts", svelte: "./package/components/FlowViewer.svelte", default: "./package/components/FlowViewer.svelte" }, "./components/FlowStatusViewer.svelte": { types: "./package/components/FlowStatusViewer.svelte.d.ts", svelte: "./package/components/FlowStatusViewer.svelte", default: "./package/components/FlowStatusViewer.svelte" }, "./components/FlowBuilder.svelte": { types: "./package/components/FlowBuilder.svelte.d.ts", svelte: "./package/components/FlowBuilder.svelte", default: "./package/components/FlowBuilder.svelte" }, "./components/ScriptBuilder.svelte": { types: "./package/components/ScriptBuilder.svelte.d.ts", svelte: "./package/components/ScriptBuilder.svelte", default: "./package/components/ScriptBuilder.svelte" }, "./components/FlowEditor.svelte": { types: "./package/components/flows/FlowEditor.svelte.d.ts", svelte: "./package/components/flows/FlowEditor.svelte", default: "./package/components/flows/FlowEditor.svelte" }, "./components/SchemaViewer.svelte": { types: "./package/components/SchemaViewer.svelte.d.ts", svelte: "./package/components/SchemaViewer.svelte", default: "./package/components/SchemaViewer.svelte" }, "./components/SchemaForm.svelte": { types: "./package/components/SchemaForm.svelte.d.ts", svelte: "./package/components/SchemaForm.svelte", default: "./package/components/SchemaForm.svelte" }, "./components/EditableSchemaWrapper.svelte": { types: "./package/components/schema/EditableSchemaWrapper.svelte.d.ts", svelte: "./package/components/schema/EditableSchemaWrapper.svelte", default: "./package/components/schema/EditableSchemaWrapper.svelte" }, "./components/ResourceEditor.svelte": { types: "./package/components/ResourceEditor.svelte.d.ts", svelte: "./package/components/ResourceEditor.svelte", default: "./package/components/ResourceEditor.svelte" }, "./components/SchemaEditor.svelte": { types: "./package/components/EditableSchemaForm.svelte.d.ts", svelte: "./package/components/EditableSchemaForm.svelte", default: "./package/components/EditableSchemaForm.svelte" }, "./components/ScriptEditor.svelte": { types: "./package/components/ScriptEditor.svelte.d.ts", svelte: "./package/components/ScriptEditor.svelte", default: "./package/components/ScriptEditor.svelte" }, "./components/scriptEditor/LogPanel.svelte": { types: "./package/components/scriptEditor/LogPanel.svelte.d.ts", svelte: "./package/components/scriptEditor/LogPanel.svelte", default: "./package/components/scriptEditor/LogPanel.svelte" }, "./common": { types: "./package/common.d.ts", default: "./package/common.js" }, "./utils": { types: "./package/utils.d.ts", default: "./package/utils.js" }, "./infer": { types: "./package/infer.d.ts", default: "./package/infer.js" }, "./stores": { types: "./package/stores.d.ts", default: "./package/stores.js" }, "./gen": { types: "./package/gen/index.d.ts", default: "./package/gen/index.js" }, "./components/flows/flowStore": { types: "./package/components/flows/flowStore.d.ts", default: "./package/components/flows/flowStore.js" }, "./components/icons": { types: "./package/components/icons/index.d.ts", svelte: "./package/components/icons/index.js", default: "./package/components/icons/index.js" }, "./components/apps/inputType": { types: "./package/components/apps/inputType.d.ts", default: "./package/components/apps/inputType.js" }, "./components/apps/types": { types: "./package/components/apps/types.d.ts", default: "./package/components/apps/types.js" }, "./components/apps/editor/inlineScriptsPanel/utils": { types: "./package/components/apps/editor/inlineScriptsPanel/utils.d.ts", default: "./package/components/apps/editor/inlineScriptsPanel/utils.js" }, "./gen/core/OpenAPI": { types: "./package/gen/core/OpenAPI.d.ts", default: "./package/gen/core/OpenAPI.js" }, "./components/DropdownV2.svelte": { types: "./package/components/DropdownV2.svelte.d.ts", svelte: "./package/components/DropdownV2.svelte", default: "./package/components/DropdownV2.svelte" } }, files: ["dist", "package"], license: "AGPL-3.0", svelte: "./dist/index.js", typesVersions: { ">4.0": { "components/IconedResourceType.svelte": ["./package/components/IconedResourceType.svelte.d.ts"], "components/TestJobLoader.svelte": ["./package/components/TestJobLoader.svelte.d.ts"], "components/SchemaForm.svelte": ["./package/components/SchemaForm.svelte.d.ts"], "components/icons/WindmillIcon.svelte": ["./package/components/icons/WindmillIcon.svelte.d.ts"], "components/scriptEditor/LogPanel.svelte": ["./package/components/scriptEditor/LogPanel.svelte.d.ts"], "components/ScriptEditor.svelte": ["./package/components/ScriptEditor.svelte.d.ts"], "components/common/kbd/Kbd.svelte": ["./package/components/common/kbd/Kbd.svelte.d.ts"], "components/common/drawer/Drawer.svelte": ["./package/components/common/drawer/Drawer.svelte.d.ts"], "components/common/drawer/DrawerContent.svelte": ["./package/components/common/drawer/DrawerContent.svelte.d.ts"], "components/common/button/Button.svelte": ["./package/components/common/button/Button.svelte.d.ts"], "components/RadioButton.svelte": ["./package/components/RadioButton.svelte.d.ts"], "components/Toggle.svelte": ["./package/components/Toggle.svelte.d.ts"], "components/common/tabs/Tabs.svelte": ["./package/components/common/tabs/Tabs.svelte.d.ts"], "components/common/tabs/Tab.svelte": ["./package/components/common/tabs/Tab.svelte.d.ts"], "components/common/alert/Alert.svelte": ["./package/components/common/alert/Alert.svelte.d.ts"], "components/apps/editor/AppPreview.svelte": ["./package/components/apps/editor/AppPreview.svelte.d.ts"], "components/FlowViewer.svelte": ["./package/components/FlowViewer.svelte.d.ts"], "components/FlowStatusViewer.svelte": ["./package/components/FlowStatusViewer.svelte.d.ts"], "components/FlowBuilder.svelte": ["./package/components/FlowBuilder.svelte.d.ts"], "components/ScriptBuilder.svelte": ["./package/components/ScriptBuilder.svelte.d.ts"], "components/FlowEditor.svelte": ["./package/components/flows/FlowEditor.svelte.d.ts"], "components/SchemaViewer.svelte": ["./package/components/SchemaViewer.svelte.d.ts"], "components/SchemaEditor.svelte": ["./package/components/SchemaEditor.svelte.d.ts"], "components/EditableSchemaWrapper.svelte": ["./package/components/schema/EditableSchemaWrapper.svelte.d.ts"], utils: ["./package/utils.d.ts"], infer: ["./package/infer.d.ts"], common: ["./package/common.d.ts"], stores: ["./package/stores.d.ts"], gen: ["./package/gen/index.d.ts"], "components/flows/flowStore": ["./package/components/flows/flowStore.d.ts"], "components/icons": ["./package/components/icons/index.d.ts"], "components/apps/inputType": ["./package/components/apps/inputType.d.ts"], "components/apps/types": ["./package/components/apps/types.d.ts"], "components/apps/editor/inlineScriptsPanel/utils": ["./package/components/apps/editor/inlineScriptsPanel/utils.d.ts"], "gen/core/OpenAPI": ["./package/gen/core/OpenAPI.d.ts"], "components/DropdownV2.svelte": ["./package/components/DropdownV2.svelte.d.ts"] } }, optionalDependencies: { fsevents: "^2.3.3" }, description: "The Windmill frontend written in Svelte + Tailwind CSS", main: "filterTailwindClasses.js", directories: { test: "tests" }, author: "" };
const NATIVETS_INIT_CODE = `// Fetch-only script, no imports allowed (except windmill) but benefits from a dedicated highly efficient runtime
//import * as wmill from './windmill.ts'

export async function main(example_input: number = 3) {
  // "3" is the default value of example_input, it can be overriden with code or using the UI
  const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${example_input}\`, {
    headers: { "Content-Type": "application/json" },
  });
  return res.json();
}
`;
const BUNNATIVE_INIT_CODE = `//native
//you can add proxy support using //proxy http(s)://host:port

// native scripts are bun scripts that are executed on native workers and can be parallelized
// only fetch is allowed, but imports will work as long as they also use only fetch and the standard lib

//import * as wmill from "windmill-client"

export async function main(example_input: number = 3) {
  // "3" is the default value of example_input, it can be overriden with code or using the UI
  const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${example_input}\`, {
    headers: { "Content-Type": "application/json" },
  });
  return res.json();
}
`;
const DENO_INIT_CODE = `// Ctrl/CMD+. to cache dependencies on imports hover.

// Deno uses "npm:" prefix to import from npm (https://deno.land/manual@v1.36.3/node/npm_specifiers)
// import * as wmill from "npm:windmill-client@${define_pkg_default.version}"

// fill the type, or use the +Resource type to get a type-safe reference to a resource
// type Postgresql = object

export async function main(
  a: number,
  b: "my" | "enum",
  //c: Postgresql,
  d = "inferred type string from default arg",
  e = { nested: "object" },
  //e: wmill.Base64
) {
  // let x = await wmill.getVariable('u/user/foo')
  return { foo: a };
}
`;
const BUN_INIT_CODE = `// there are multiple modes to add as header: //nobundling //native //npm //nodejs
// https://www.windmill.dev/docs/getting_started/scripts_quickstart/typescript#modes

// import { toWords } from "number-to-words@1"
import * as wmill from "windmill-client"

// fill the type, or use the +Resource type to get a type-safe reference to a resource
// type Postgresql = object


export async function main(
  a: number,
  b: "my" | "enum",
  //c: Postgresql,
  //d: wmill.S3Object, // https://www.windmill.dev/docs/core_concepts/persistent_storage/large_data_files 
  //d: DynSelect_foo, // https://www.windmill.dev/docs/core_concepts/json_schema_and_parsing#dynamic-select
  e = "inferred type string from default arg",
  f = { nested: "object" },
  g: {
    label: "Variant 1",
    foo: string
  } | {
    label: "Variant 2",
    bar: number
  }
) {
  // let x = await wmill.getVariable('u/user/foo')
  return { foo: a };
}
`;
const GO_INIT_CODE = `package inner

import (
	"fmt"
	"rsc.io/quote"
	// wmill "github.com/windmill-labs/windmill-go-client"
)

// Pin dependencies partially in go.mod with a comment starting with "//require":
//require rsc.io/quote v1.5.1

// the main must return (interface{}, error)

func main(x string, nested struct {
	Foo string \`json:"foo"\`
}) (interface{}, error) {
	fmt.Println("Hello, World")
	fmt.Println(nested.Foo)
	fmt.Println(quote.Opt())
	// v, _ := wmill.GetVariable("f/examples/secret")
	return x, nil
}
`;
const GO_FAILURE_MODULE_CODE = `package inner

import (
	"fmt"
  "os"
)

// connect the error parameter to 'previous_result.error'

func main(message string, name string) (interface{}, error) {
	fmt.Println(message)
	fmt.Println(name)
	fmt.Println("flow id that failed", os.Getenv("WM_FLOW_JOB_ID"))
  return message, nil
}
`;
const DENO_INIT_CODE_CLEAR = `// import * as wmill from "npm:windmill-client@${define_pkg_default.version}"

export async function main(x: string) {
  return x
}
`;
const BUN_INIT_CODE_CLEAR = `// import * as wmill from "windmill-client"

export async function main(x: string) {
  return x
}
`;
const DENO_FAILURE_MODULE_CODE = `
export async function main(message: string, name: string) {
  const flow_id = Deno.env.get("WM_FLOW_JOB_ID")
  console.log("message", message)
  console.log("name",name)
  return { message, flow_id }
}
`;
const BUN_FAILURE_MODULE_CODE = `
export async function main(message: string, name: string) {
  const flow_id = process.env.WM_FLOW_JOB_ID
  console.log("message", message)
  console.log("name",name)
  return { message, flow_id }
}
`;
const POSTGRES_INIT_CODE = `-- to pin the database use '-- database f/your/path'
-- $1 name1 = default arg
-- $2 name2
-- $3 name3
-- $4 name4
INSERT INTO demo VALUES ($1::TEXT, $2::INT, $3::TEXT[]) RETURNING *;
UPDATE demo SET col2 = $4::INT WHERE col2 = $2::INT;
`;
const MYSQL_INIT_CODE = `-- to pin the database use '-- database f/your/path'
-- :name1 (text) = default arg
-- :name2 (int)
-- :name3 (int)
INSERT INTO demo VALUES (:name1, :name2);
UPDATE demo SET col2 = :name3 WHERE col2 = :name2;
`;
const BIGQUERY_INIT_CODE = `-- to pin the database use '-- database f/your/path'
-- @name1 (string) = default arg
-- @name2 (integer)
-- @name3 (string[])
-- @name4 (integer)
INSERT INTO \`demodb.demo\` VALUES (@name1, @name2, @name3);
UPDATE \`demodb.demo\` SET col2 = @name4 WHERE col2 = @name2;
`;
const SNOWFLAKE_INIT_CODE = `-- to pin the database use '-- database f/your/path'
-- ? name1 (varchar) = default arg
-- ? name2 (int)
INSERT INTO demo VALUES (?, ?);
-- ? name3 (int)
-- ? name2 (int)
UPDATE demo SET col2 = ? WHERE col2 = ?;
`;
const MSSQL_INIT_CODE = `-- to pin the database use '-- database f/your/path'
-- @p1 name1 (varchar) = default arg
-- @p2 name2 (int)
-- @p3 name3 (int)
INSERT INTO demo VALUES (@p1, @p2);
UPDATE demo SET col2 = @p3 WHERE col2 = @p2;
`;
const GRAPHQL_INIT_CODE = `query($name4: String, $name2: Int, $name3: [String]) {
	demo(name1: $name1, name2: $name2, name3: $name3) {
		name1,
		name2,
		name3
	}
}
`;
const PHP_INIT_CODE = `<?php

// remove the first // of the following lines to specify packages to install using composer
// // require:
// // monolog/monolog@3.6.0
// // stripe/stripe-php

function main(
  // Postgresql $a,
  // array $b,
  // object $c,
  int $d = 123,
  string $e = "default value",
  float $f = 3.5,
  bool $g = true,
) {
  return $d;
}
`;
const FETCH_INIT_CODE = `export async function main(
	url: string | undefined,
	method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' = 'GET',
	body: Object = {},
	headers: Record<string, string> = {}
): Promise<Response | null> {
	if (!url) {
		console.error('Error: URL is undefined')
		return null
	}

	const requestOptions: RequestInit = {
		method: method || 'GET',
		headers: headers || {}
	}

	if (requestOptions.method !== 'GET' && requestOptions.method !== 'HEAD' && body !== undefined) {
		requestOptions.body = JSON.stringify(body)
		requestOptions.headers = {
			'Content-Type': 'application/json',
			...requestOptions.headers
		}
	}

	return await fetch(url, requestOptions)
		.then((res) => res.json())
		.catch(() => {
			throw new Error('An error occured')
		})
}`;
const BASH_INIT_CODE = `# shellcheck shell=bash
# arguments of the form X="$I" are parsed as parameters X of type string
msg="$1"
dflt="\${2:-default value}"

# the last line of the stdout is the return value
# unless you write json to './result.json' or a string to './result.out'
echo "Hello $msg"
`;
const DENO_INIT_CODE_TRIGGER = `import * as wmill from "npm:windmill-client@${define_pkg_default.version}"

export async function main() {

  // A common trigger script would follow this pattern:
  // 1. Get the last saved state
  // const state = await wmill.getState()
  // 2. Get the actual state from the external service
  // const newState = await (await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')).json()
  // 3. Compare the two states and update the internal state
  // await wmill.setState(newState)
  // 4. Return the new rows
  // return range from (state to newState)

  return [1,2,3]

  // In subsequent scripts, you may refer to each row/value returned by the trigger script using
  // 'flow_input.iter.value'
}
`;
const GO_INIT_CODE_TRIGGER = `package inner

import (
	wmill "github.com/windmill-labs/windmill-go-client"
)

func main() (interface{}, error) {

	// A common trigger script would follow this pattern:
	// 1. Get the last saved state
	state, _ := wmill.GetState()
	// 2. Get the actual state from the external service
	// newState := ...
	// 3. Compare the two states and update the internal state
	wmill.SetState(4)
	// 4. Return the new rows

	return state, nil

	// In subsequent scripts, you may refer to each row/value returned by the trigger script using
	// 'flow_input.iter.value'
}
`;
const DENO_INIT_CODE_APPROVAL = `import * as wmill from "npm:windmill-client@^1.158.2"

export async function main(approver?: string) {
  const urls = await wmill.getResumeUrls(approver)
  // send the urls to their intended recipients

  return {
    // if the resumeUrls are part of the response, they will be available to any persons having access
    // to the run page and allowed to be approved from there, even from non owners of the flow
    // self-approval is disableable in the suspend options
    	...urls,

    // to have prompts (self-approvable steps), clude instead the resume url in the returned payload of the step
    // the UX will automatically adapt and show the prompt to the operator when running the flow. e.g:
    // resume: urls['resume'],

		default_args: {},
		enums: {},
		description: undefined
		// supports all formats from rich display rendering such as simple strings,
		// but also markdown, html, images, tables, maps, render_all, etc...
		// https://www.windmill.dev/docs/core_concepts/rich_display_rendering
  }
}

// add a form in Advanced - Suspend
// all on approval steps: https://www.windmill.dev/docs/flows/flow_approval`;
const BUN_INIT_CODE_APPROVAL = `import * as wmill from "windmill-client@^1.158.2"

export async function main(approver?: string) {
  const urls = await wmill.getResumeUrls(approver)
  // send the urls to their intended recipients

  return {
    // if the resumeUrls are part of the response, they will be available to any persons having access
    // to the run page and allowed to be approved from there, even from non owners of the flow
    // self-approval is disableable in the suspend options
    	...urls,

    // to have prompts (self-approvable steps), clude instead the resume url in the returned payload of the step
    // the UX will automatically adapt and show the prompt to the operator when running the flow. e.g:
    // resume: urls['resume'],

		default_args: {},
		enums: {},
		description: undefined
		// supports all formats from rich display rendering such as simple strings,
		// but also markdown, html, images, tables, maps, render_all, etc...
		// https://www.windmill.dev/docs/core_concepts/rich_display_rendering
  }
}

// add a form in Advanced - Suspend
// all on approval steps: https://www.windmill.dev/docs/flows/flow_approval`;
const PYTHON_INIT_CODE_APPROVAL = `import wmill

def main():
  urls = wmill.get_resume_urls()
  # send the urls to their intended recipients

  return {
    # if the get_resume_urls are part of the response, they will be available to any persons having access
    # to the run page and allowed to be approved from there, even from non owners of the flow
    # self-approval is disableable in the suspend options
    **urls,

    # to have prompts (self-approvable steps), clude instead the resume url in the returned payload of the step
    # the UX will automatically adapt and show the prompt to the operator when running the flow. e.g:
    # "resume": urls["resume"],

    "default_args": {},
    "enums": {},
    "description": None,
    # supports all formats from rich display rendering such as simple strings,
    # but also markdown, html, images, tables, maps, render_all, etc...
    # https://www.windmill.dev/docs/core_concepts/rich_display_rendering
  }

# add a form in Advanced - Suspend
# all on approval steps: https://www.windmill.dev/docs/flows/flow_approval`;
const DOCKER_INIT_CODE = `# shellcheck shell=bash
# Bash script that calls docker as a client to the host daemon
# See documentation: https://www.windmill.dev/docs/advanced/docker
msg="\${1:-world}"

IMAGE="alpine:latest"
COMMAND="/bin/echo Hello $msg"

# ensure that the image is up-to-date
docker pull $IMAGE
docker run --rm $IMAGE $COMMAND
`;
const POWERSHELL_INIT_CODE = `param($Msg, $Dflt = "default value", [int]$Nb = 3)

# Import-Module MyModule

# Import-Module WindmillClient
# Connect-Windmill
# Get-WindmillVariable -Path 'u/user/foo'

# the last line of the stdout is the return value
Write-Output "Hello $Msg"`;
const ALL_INITIAL_CODE = [
  PYTHON_INIT_CODE,
  PYTHON_INIT_CODE_TRIGGER,
  DENO_INIT_CODE,
  POSTGRES_INIT_CODE,
  MYSQL_INIT_CODE,
  BIGQUERY_INIT_CODE,
  SNOWFLAKE_INIT_CODE,
  MSSQL_INIT_CODE,
  GRAPHQL_INIT_CODE,
  DENO_INIT_CODE_TRIGGER,
  DENO_INIT_CODE_CLEAR,
  PYTHON_INIT_CODE_CLEAR,
  DENO_INIT_CODE_APPROVAL,
  DENO_FAILURE_MODULE_CODE,
  BUN_INIT_CODE,
  BUN_INIT_CODE_CLEAR,
  BUN_INIT_CODE_APPROVAL,
  BASH_INIT_CODE,
  POWERSHELL_INIT_CODE,
  PHP_INIT_CODE
];
function isInitialCode(content) {
  for (const code of ALL_INITIAL_CODE) {
    if (content === code) {
      return true;
    }
  }
  return false;
}
function initialCode(language, kind, subkind) {
  if (!kind) {
    kind = "script";
  }
  if (language === "deno") {
    if (kind === "trigger") {
      return DENO_INIT_CODE_TRIGGER;
    } else if (kind === "script") {
      if (subkind === "flow") {
        return DENO_INIT_CODE_CLEAR;
      } else if (subkind === "pgsql") {
        return POSTGRES_INIT_CODE;
      } else if (subkind === "mysql") {
        return MYSQL_INIT_CODE;
      } else if (subkind === "fetch") {
        return FETCH_INIT_CODE;
      } else {
        return DENO_INIT_CODE;
      }
    } else if (kind === "failure") {
      return DENO_FAILURE_MODULE_CODE;
    } else if (kind === "approval") {
      return DENO_INIT_CODE_APPROVAL;
    } else {
      return DENO_INIT_CODE;
    }
  } else if (language === "python3") {
    if (kind === "trigger") {
      return PYTHON_INIT_CODE_TRIGGER;
    } else if (kind === "approval") {
      return PYTHON_INIT_CODE_APPROVAL;
    } else if (subkind === "flow") {
      return PYTHON_INIT_CODE_CLEAR;
    } else if (kind === "failure") {
      return PYTHON_FAILURE_MODULE_CODE;
    } else {
      return PYTHON_INIT_CODE;
    }
  } else if (language == "bash") {
    if (subkind === "docker") {
      return DOCKER_INIT_CODE;
    } else {
      return BASH_INIT_CODE;
    }
  } else if (language == "powershell") {
    return POWERSHELL_INIT_CODE;
  } else if (language == "nativets") {
    return NATIVETS_INIT_CODE;
  } else if (language == "postgresql") {
    return POSTGRES_INIT_CODE;
  } else if (language == "mysql") {
    return MYSQL_INIT_CODE;
  } else if (language == "bigquery") {
    return BIGQUERY_INIT_CODE;
  } else if (language == "snowflake") {
    return SNOWFLAKE_INIT_CODE;
  } else if (language == "mssql") {
    return MSSQL_INIT_CODE;
  } else if (language == "graphql") {
    return GRAPHQL_INIT_CODE;
  } else if (language == "php") {
    return PHP_INIT_CODE;
  } else if (language == "bun" || language == "bunnative") {
    if (language == "bunnative" || subkind === "bunnative") {
      return BUNNATIVE_INIT_CODE;
    } else if (kind === "approval") {
      return BUN_INIT_CODE_APPROVAL;
    } else if (kind === "failure") {
      return BUN_FAILURE_MODULE_CODE;
    }
    if (subkind === "flow") {
      return BUN_INIT_CODE_CLEAR;
    }
    return BUN_INIT_CODE;
  } else {
    if (kind === "failure") {
      return GO_FAILURE_MODULE_CODE;
    } else if (kind === "trigger") {
      return GO_INIT_CODE_TRIGGER;
    } else {
      return GO_INIT_CODE;
    }
  }
}
const MetadataGen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $metadataCompletionEnabled, $$unsubscribe_metadataCompletionEnabled;
  let $copilotInfo, $$unsubscribe_copilotInfo;
  $$unsubscribe_metadataCompletionEnabled = subscribe(metadataCompletionEnabled, (value) => $metadataCompletionEnabled = value);
  $$unsubscribe_copilotInfo = subscribe(copilotInfo, (value) => $copilotInfo = value);
  const promptConfigs = {
    summary: {
      system: `
You are a helpful AI assistant. You generate very brief summaries from scripts.
The summaries need to be as short as possible (maximum 8 words) and only give a global idea. Do not specify the programming language. Do not use any punctation. Avoid using prepositions and articles.
Examples: List the commits of a GitHub repository, Divide a number by 16, etc..
`,
      user: `
Generate a very short summary for the script below:
'''code
{code}
\`\`\`
`,
      placeholderName: "code"
    },
    description: {
      system: `
You are a helpful AI assistant. You generate descriptions from scripts.
These descriptions are used to explain to other users what the script does and how to use it.
Be as short as possible to give a global idea, maximum 3-4 sentences.
All scripts export an asynchronous function called main, do not include it in the description.
Do not describe how to call it either.
`,
      user: `
Generate a description for the script below:
'''code
{code}
\`\`\`
`,
      placeholderName: "code"
    },
    flowSummary: {
      system: `
			You are a helpful AI assistant. You generate very brief summaries from scripts.
The summaries need to be as short as possible (maximum 8 words) and only give a global idea. Do not use any punctation. Avoid using prepositions and articles.
`,
      user: `
Summarize the flow below in one very short sentence without punctation:
{flow}`,
      placeholderName: "flow"
    },
    flowDescription: {
      system: `
You are a helpful AI assistant. You generate descriptions from flow.
These descriptions are used to explain to other users what the flow does and how to use it.
Be as short as possible to give a global idea, maximum 3-4 sentences.
Do not include line breaks.
`,
      user: `
Generate a description for the flow below:
{flow}`,
      placeholderName: "flow"
    }
  };
  let { content } = $$props;
  let { code = void 0 } = $$props;
  let { flow = void 0 } = $$props;
  let { promptConfigName } = $$props;
  let { generateOnAppear = false } = $$props;
  let { elementType = "input" } = $$props;
  let { elementProps = {} } = $$props;
  let el;
  let generatedContent = "";
  let active = false;
  let loading = false;
  let abortController = new AbortController();
  let manualDisabled = false;
  let width = 0;
  let genHeight = 0;
  let focused = false;
  let config = promptConfigs[promptConfigName];
  async function generateContent(automatic = false) {
    abortController = new AbortController();
    loading = true;
    try {
      const placeholderContent = flow ? yamlStringifyExceptKeys(flow, ["lock"]) : code;
      if (!placeholderContent) {
        sendUserToast("Could not generate summary: no content to generate from", true);
        return;
      }
      const messages = [
        { role: "system", content: config.system },
        {
          role: "user",
          content: config.user.replace(`{${config.placeholderName}}`, placeholderContent)
        }
      ];
      const response = await getCompletion(messages, abortController);
      generatedContent = "";
      for await (const chunk of response) {
        const toks = chunk.choices[0]?.delta?.content || "";
        generatedContent += toks;
      }
    } catch (err) {
      if (!abortController.signal.aborted) {
        if (automatic) {
          console.error("Could not generate summary " + err);
        } else {
          sendUserToast("Could not generate summary: " + err, true);
        }
      }
    } finally {
      loading = false;
    }
  }
  if ($copilotInfo.exists_openai_resource_path && $metadataCompletionEnabled && generateOnAppear && !content && code && !isInitialCode(code)) {
    setTimeout(
      () => {
      },
      0
    );
    generateContent(true);
  }
  const dispatch = createEventDispatcher();
  onDestroy(() => {
    abortController.abort();
  });
  if ($$props.content === void 0 && $$bindings.content && content !== void 0) $$bindings.content(content);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0) $$bindings.code(code);
  if ($$props.flow === void 0 && $$bindings.flow && flow !== void 0) $$bindings.flow(flow);
  if ($$props.promptConfigName === void 0 && $$bindings.promptConfigName && promptConfigName !== void 0) $$bindings.promptConfigName(promptConfigName);
  if ($$props.generateOnAppear === void 0 && $$bindings.generateOnAppear && generateOnAppear !== void 0) $$bindings.generateOnAppear(generateOnAppear);
  if ($$props.elementType === void 0 && $$bindings.elementType && elementType !== void 0) $$bindings.elementType(elementType);
  if ($$props.elementProps === void 0 && $$bindings.elementProps && elementProps !== void 0) $$bindings.elementProps(elementProps);
  {
    if (content) {
      dispatch("change", { content });
    }
  }
  {
    if (content) {
      abortController.abort();
      generatedContent = "";
    } else {
      manualDisabled = false;
    }
  }
  active = $copilotInfo.exists_openai_resource_path && $metadataCompletionEnabled && !content && (loading || focused || !!generatedContent) && !manualDisabled && (config.placeholderName === "code" && !!code || config.placeholderName === "flow" && !!flow && Array.isArray(flow.modules) && flow.modules.length > 0);
  {
    if (elementType === "textarea" && el !== void 0 && !content) {
      el.style.height = Math.max(genHeight + 34, 58) + "px";
    }
  }
  $$unsubscribe_metadataCompletionEnabled();
  $$unsubscribe_copilotInfo();
  return ` <div${add_attribute("class", twMerge("relative", $$props.class), 0)}><div class="${"absolute left-[0.5rem] " + escape(
    elementType === "textarea" ? "top-[1.3rem]" : "top-[0.3rem]",
    true
  ) + " flex flex-row gap-2 items-start pointer-events-none"}">${active ? `<span${add_attribute(
    "class",
    twMerge("absolute text-xs bg-violet-100 text-violet-800 dark:bg-gray-700 dark:text-violet-400 px-1 py-0.5 rounded-md flex flex-row items-center justify-center gap-2 transition-all shrink-0", !loading && generatedContent.length > 0 ? "bg-green-100 text-green-800 dark:text-green-400 dark:bg-green-700" : ""),
    0
  )}><span class="px-0.5 py-0.5 rounded-md text-2xs text-bold flex flex-row items-center gap-1">${loading ? `ESC` : `TAB`} ${loading ? `${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin", size: 12 }, {}, {})}` : `${generatedContent ? `${validate_component(Check, "Check").$$render($$result, { size: 12 }, {}, {})}` : `${validate_component(Wand_2, "Wand2").$$render($$result, { size: 12 }, {}, {})}`}`}</span></span> <div${add_attribute(
    "class",
    twMerge("text-sm leading-6 indent-[3.5rem] text-gray-500 dark:text-gray-400 pr-1", elementType === "input" ? "text-ellipsis overflow-hidden whitespace-nowrap" : ""),
    0
  )}${add_attribute(
    "style",
    elementType === "input" ? `max-width: calc(${width}px - 0.5rem)` : "",
    0
  )}>${escape(generatedContent)}</div>` : ``}</div> ${elementType === "textarea" ? `<div><div class="flex flex-row-reverse text-2xs text-tertiary -mt-4" data-svelte-h="svelte-8hg0uj">GH Markdown</div> <textarea${spread(
    [
      escape_object(elementProps),
      {
        placeholder: escape_attribute_value(!active ? elementProps.placeholder : "")
      },
      {
        class: escape_attribute_value(active ? "!indent-[3.5rem]" : "")
      }
    ],
    {}
  )}${add_attribute("this", el, 0)}>${escape(content || "")}</textarea></div>` : `<input${add_attribute("placeholder", !active ? elementProps.placeholder : "", 0)}${add_attribute("class", active ? "!indent-[3.5rem]" : "", 0)}${add_attribute("this", el, 0)}${add_attribute("value", content, 0)}>`} </div>`;
});
export {
  MetadataGen as M,
  initialCode as i
};
