import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import "monaco-editor/esm/vs/editor/editor.api.js";
import { D as DarkModeObserver } from "./DarkModeObserver.js";
import "monaco-languageclient";
import "vscode/services";
function WorkerWrapper$4(options) {
  return new Worker(
    "/_app/immutable/workers/css.worker-BmtTR_DX.js",
    {
      name: options?.name
    }
  );
}
function WorkerWrapper$3(options) {
  return new Worker(
    "/_app/immutable/workers/html.worker-kPRub7RK.js",
    {
      name: options?.name
    }
  );
}
function WorkerWrapper$2(options) {
  return new Worker(
    "/_app/immutable/workers/ts.worker-COVxGf9A.js",
    {
      name: options?.name
    }
  );
}
function WorkerWrapper$1(options) {
  return new Worker(
    "/_app/immutable/workers/json.worker-BQqWkzNp.js",
    {
      name: options?.name
    }
  );
}
function WorkerWrapper(options) {
  return new Worker(
    "/_app/immutable/workers/editor.worker-BGQkI7eh.js",
    {
      name: options?.name
    }
  );
}
function buildWorkerDefinition(workerPath, basePath, useModuleWorker) {
  const monWin = self;
  const workerOverrideGlobals = {
    basePath,
    workerPath,
    workerOptions: {
      type: "classic"
    }
  };
  if (!monWin.MonacoEnvironment) {
    monWin.MonacoEnvironment = {
      workerOverrideGlobals,
      createTrustedTypesPolicy: (_policyName) => {
        return void 0;
      }
    };
  }
  const monEnv = monWin.MonacoEnvironment;
  monEnv.workerOverrideGlobals = workerOverrideGlobals;
  const getWorker = (_, label) => {
    console.log("getWorker: workerId: " + _ + " label: " + label);
    switch (label) {
      case "template":
      case "typescript":
      case "javascript":
        return new WorkerWrapper$2();
      case "html":
      case "handlebars":
      case "razor":
        return new WorkerWrapper$3();
      case "css":
      case "scss":
      case "less":
        return new WorkerWrapper$4();
      case "json":
        return new WorkerWrapper$1();
      case "graphql":
        const workerFilename = `graphql.worker.bundle.js`;
        const workerPathLocal = `${workerOverrideGlobals.workerPath}/${workerFilename}`;
        const workerUrl = new URL(workerPathLocal, workerOverrideGlobals.basePath);
        return new Worker(workerUrl.href, {
          name: label
        });
      default:
        return new WorkerWrapper();
    }
  };
  monWin.MonacoEnvironment.getWorker = getWorker;
}
const EditorTheme = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(DarkModeObserver, "DarkModeObserver").$$render($$result, {}, {}, {})}`;
});
export {
  EditorTheme as E,
  buildWorkerDefinition as b
};
