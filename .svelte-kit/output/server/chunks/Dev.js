import { c as create_ssr_component, s as subscribe, u as setContext, o as onDestroy, a as set_store_value, v as validate_component, e as escape } from "./ssr.js";
import { S as SchemaForm } from "./SchemaForm.js";
import { T as TestJobLoader } from "./TimelineBar.js";
import { w as writable } from "./index.js";
import "./index2.js";
import { s as sendUserToast, B as Button, e as emptySchema } from "./toast.js";
/* empty css                                     */
import "./common.js";
import { W as WindmillIcon } from "./WindmillIcon.js";
import { L as LogPanel } from "./LogPanel.js";
import { O as OpenAPI, W as WorkspaceService } from "./services.gen.js";
import { i as inferArgs } from "./infer.js";
import { u as userStore, w as workspaceStore, f as copilotInfo } from "./stores2.js";
import { S as Splitpanes, P as Pane } from "./Pane.js";
import { D as DarkModeToggle } from "./DarkModeToggle.js";
import { p as page } from "./stores.js";
import { g as getUserExt } from "./user.js";
import { F as FlowPreviewButtons, a as FlowModuleSchemaMap, b as FlowEditorPanel } from "./FlowPreviewButtons.js";
import { deepEqual } from "fast-equals";
import { b as initHistory } from "./history.js";
import { d as dfs } from "./FlowStatusViewer.js";
import { p as pickScript, l as loadSchemaFromModule } from "./flowStateUtils.js";
import { T as Toggle } from "./Toggle.js";
import { s as setLicense } from "./enterpriseUtils.js";
import { w as workspacedOpenai } from "./lib.js";
import { P as Play } from "./play.js";
import { C as Corner_down_left } from "./ConfirmationModal.js";
const Dev = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let token;
  let workspace;
  let themeDarkRaw;
  let themeDark;
  let $flowStateStore, $$unsubscribe_flowStateStore;
  let $flowStore, $$unsubscribe_flowStore;
  let $selectedIdStore, $$unsubscribe_selectedIdStore;
  let $userStore, $$unsubscribe_userStore;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $modulesStore, $$unsubscribe_modulesStore;
  let $page, $$unsubscribe_page;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let flowCopilotContext = {
    drawerStore: writable(void 0),
    modulesStore: writable([]),
    currentStepStore: writable(void 0),
    genFlow,
    shouldUpdatePropertyType: writable({}),
    exprsToSet: writable({}),
    generatedExprs: writable({}),
    stepInputsLoading: writable(false)
  };
  const { modulesStore } = flowCopilotContext;
  $$unsubscribe_modulesStore = subscribe(modulesStore, (value) => $modulesStore = value);
  async function genFlow(idx, flowModules, stepOnly = false) {
    let module = stepOnly ? $modulesStore[0] : $modulesStore[idx];
    if (module && module.selectedCompletion) {
      const [hubScriptModule, hubScriptState] = await pickScript(module.selectedCompletion.path, `${module.selectedCompletion.summary} (${module.selectedCompletion.app})`, module.id, void 0);
      const flowModule = {
        id: module.id,
        value: hubScriptModule.value,
        summary: hubScriptModule.summary
      };
      set_store_value(flowStateStore, $flowStateStore[module.id] = hubScriptState, $flowStateStore);
      flowModules.splice(idx, 0, flowModule);
      flowStore.set($flowStore);
      sendUserToast("Added module", false);
    }
  }
  setContext("FlowCopilotContext", flowCopilotContext);
  async function setCopilotInfo() {
    if (workspace) {
      workspacedOpenai.init(workspace, token);
      try {
        copilotInfo.set(await WorkspaceService.getCopilotInfo({ workspace }));
      } catch (err) {
        copilotInfo.set({
          exists_openai_resource_path: false,
          code_completion_enabled: false
        });
        console.error("Could not get copilot info");
      }
    }
  }
  async function loadUser() {
    try {
      const user = await getUserExt(workspace);
      set_store_value(userStore, $userStore = user, $userStore);
    } catch (e) {
      sendUserToast(`Failed to load user ${e}`, true);
    }
  }
  let darkModeToggle;
  let darkMode = void 0;
  let modeInitialized = false;
  function initializeMode() {
    modeInitialized = true;
    darkModeToggle.toggle();
  }
  let testJobLoader;
  let socket = void 0;
  let args = {};
  let isValid = true;
  let testIsLoading = false;
  let testJob;
  let pastPreviews = [];
  let validCode = true;
  let currentScript = void 0;
  let schema = emptySchema();
  const href = window.location.href;
  const indexQ = href.indexOf("?");
  const searchParams = indexQ > -1 ? new URLSearchParams(href.substring(indexQ)) : void 0;
  if (searchParams?.has("local")) {
    connectWs();
  }
  let useLock = false;
  let lockChanges = false;
  let timeout = void 0;
  let loadingCodebaseButton = false;
  let lastBundleCommandId = "";
  const el = (event) => {
    if (event.data.type == "runTest") {
      runTest();
      event.preventDefault();
    } else if (event.data.type == "replaceScript") {
      mode = "script";
      replaceScript(event.data);
    } else if (event.data.type == "testBundle") {
      if (event.data.id == lastBundleCommandId) {
        testBundle(event.data.file, event.data.isTar);
      } else {
        sendUserToast(`Bundle received ${lastBundleCommandId} was obsolete, ignoring`, true);
      }
    } else if (event.data.type == "testBundleError") {
      loadingCodebaseButton = false;
      sendUserToast(
        typeof event.data.error == "object" ? JSON.stringify(event.data.error) : event.data.error,
        true
      );
    } else if (event.data.type == "replaceFlow") {
      mode = "flow";
      lockChanges = true;
      replaceFlow(event.data);
      timeout && clearTimeout(timeout);
      timeout = setTimeout(
        () => {
          lockChanges = false;
        },
        500
      );
    } else if (event.data.type == "error") {
      sendUserToast(event.data.error.message, true);
    }
  };
  setLicense();
  async function testBundle(file, isTar) {
    testJobLoader?.abstractRun(async () => {
      try {
        const form = new FormData();
        form.append("preview", JSON.stringify({
          content: currentScript?.content,
          kind: isTar ? "tarbundle" : "bundle",
          path: currentScript?.path,
          args,
          language: currentScript?.language,
          tag: currentScript?.tag
        }));
        if (isTar) {
          var array = [];
          file = atob(file);
          for (var i = 0; i < file.length; i++) {
            array.push(file.charCodeAt(i));
          }
          let blob = new Blob([new Uint8Array(array)], { type: "application/octet-stream" });
          form.append("file", blob);
        } else {
          form.append("file", file);
        }
        const url = "/api/w/" + workspace + "/jobs/run/preview_bundle";
        const req = await fetch(url, {
          method: "POST",
          body: form,
          headers: { Authorization: "Bearer " + token }
        });
        if (req.status != 201) {
          throw Error(`Script snapshot creation was not successful: ${req.status} - ${req.statusText} - ${await req.text()}`);
        }
        return await req.text();
      } catch (e) {
        sendUserToast(`Failed to send bundle ${e}`, true);
        throw Error(e);
      }
    });
    loadingCodebaseButton = false;
  }
  onDestroy(() => {
    window.removeEventListener("message", el);
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket?.close();
    }
  });
  function connectWs() {
    const port = searchParams?.get("port") || "3001";
    try {
      let replaceData = function(msg) {
        let data = void 0;
        try {
          data = JSON.parse(msg);
        } catch {
          console.log("Received invalid JSON: " + msg);
          return;
        }
        replaceScript(data);
      };
      socket = new WebSocket(`ws://localhost:${port}/ws`);
      socket.addEventListener("message", (event) => {
        replaceData(event.data);
      });
    } catch (e) {
      sendUserToast("Failed to connect to local server", true);
      console.error(e);
    }
  }
  function runTest() {
    if (mode == "script") {
      if (!currentScript) {
        return;
      }
      if (currentScript.isCodebase) {
        loadingCodebaseButton = true;
        lastBundleCommandId = Math.random().toString(36).substring(7);
        window.parent?.postMessage(
          {
            type: "testBundle",
            id: lastBundleCommandId
          },
          "*"
        );
      } else {
        testJobLoader.runPreview(currentScript.path, currentScript.content, currentScript.language, args, currentScript.tag, useLock ? currentScript.lock : void 0);
      }
    } else {
      flowPreviewButtons?.openPreview();
    }
  }
  let lastPath = void 0;
  async function replaceScript(lastEdit) {
    currentScript = lastEdit;
    if (lastPath !== lastEdit.path) {
      schema = emptySchema();
    }
    try {
      await inferArgs(lastEdit.language, lastEdit.content, schema);
      schema = schema;
      lastPath = lastEdit.path;
      validCode = true;
    } catch (e) {
      console.error(e);
      validCode = false;
    }
  }
  let mode = "script";
  const flowStore = writable({
    summary: "",
    value: { modules: [] },
    extra_perms: {},
    schema: emptySchema()
  });
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => $flowStore = value);
  let lastUriPath = void 0;
  async function replaceFlow(lastEdit) {
    lastUriPath = lastEdit.uriPath;
    try {
      if (!deepEqual(lastEdit.flow, $flowStore)) {
        if (!lastEdit.flow.summary) {
          lastEdit.flow.summary = "New flow";
        }
        if (!lastEdit.flow.value?.modules) {
          lastEdit.flow.value = { modules: [] };
        }
        set_store_value(flowStore, $flowStore = lastEdit.flow, $flowStore);
        inferModuleArgs($selectedIdStore);
      }
    } catch (e) {
      console.error("issue setting new flowstore", e);
    }
  }
  const flowStateStore = writable({});
  $$unsubscribe_flowStateStore = subscribe(flowStateStore, (value) => $flowStateStore = value);
  const scheduleStore = writable({
    args: {},
    cron: "",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    enabled: false,
    summary: void 0
  });
  const previewArgsStore = writable({});
  const scriptEditorDrawer = writable(void 0);
  const moving = writable(void 0);
  const history = initHistory($flowStore);
  const testStepStore = writable({});
  const selectedIdStore = writable("settings-metadata");
  $$unsubscribe_selectedIdStore = subscribe(selectedIdStore, (value) => $selectedIdStore = value);
  setContext("FlowEditorContext", {
    selectedId: selectedIdStore,
    schedule: scheduleStore,
    previewArgs: previewArgsStore,
    scriptEditorDrawer,
    moving,
    history,
    pathStore: writable(""),
    flowStateStore,
    flowStore,
    testStepStore,
    saveDraft: () => {
    },
    initialPath: "",
    flowInputsStore: writable({})
  });
  let lastSent = void 0;
  function updateFlow(flow) {
    if (lockChanges) {
      return;
    }
    if (!deepEqual(flow, lastSent)) {
      lastSent = JSON.parse(JSON.stringify(flow));
      window?.parent.postMessage({ type: "flow", flow, uriPath: lastUriPath }, "*");
    }
  }
  let flowPreviewButtons;
  async function inferModuleArgs(selectedIdStore2) {
    if (selectedIdStore2 == "") {
      return;
    }
    dfs($flowStore.value.modules, async (mod) => {
      if (mod.id == selectedIdStore2) {
        if (mod.value.type == "rawscript" || mod.value.type === "script" || mod.value.type === "flow") {
          const { input_transforms, schema: schema2 } = await loadSchemaFromModule(mod);
          if (mod.value.type == "rawscript" && mod.value.lock != void 0) {
            mod.value.lock = void 0;
          }
          mod.value.input_transforms = input_transforms;
          if (!deepEqual(schema2, $flowStateStore[mod.id]?.schema)) {
            if (!$flowStateStore[mod.id]) {
              set_store_value(flowStateStore, $flowStateStore[mod.id] = { schema: schema2 }, $flowStateStore);
            } else {
              set_store_value(flowStateStore, $flowStateStore[mod.id].schema = schema2, $flowStateStore);
            }
          }
        }
      }
    });
  }
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    token = $page.url.searchParams.get("wm_token") ?? void 0;
    workspace = $page.url.searchParams.get("workspace") ?? void 0;
    themeDarkRaw = $page.url.searchParams.get("activeColorTheme");
    themeDark = themeDarkRaw == "2" || themeDarkRaw == "4";
    {
      if (token) {
        OpenAPI.WITH_CREDENTIALS = true;
        OpenAPI.TOKEN = $page.url.searchParams.get("wm_token");
      }
    }
    {
      if (workspace) {
        set_store_value(workspaceStore, $workspaceStore = workspace, $workspaceStore);
        setCopilotInfo();
      }
    }
    {
      if (workspace && token) {
        loadUser();
      }
    }
    darkModeToggle && themeDark != darkMode && darkMode != void 0 && !modeInitialized && initializeMode();
    {
      updateFlow($flowStore);
    }
    $selectedIdStore && inferModuleArgs($selectedIdStore);
    $$rendered = ` ${validate_component(TestJobLoader, "TestJobLoader").$$render(
      $$result,
      {
        this: testJobLoader,
        isLoading: testIsLoading,
        job: testJob
      },
      {
        this: ($$value) => {
          testJobLoader = $$value;
          $$settled = false;
        },
        isLoading: ($$value) => {
          testIsLoading = $$value;
          $$settled = false;
        },
        job: ($$value) => {
          testJob = $$value;
          $$settled = false;
        }
      },
      {}
    )} <main class="h-screen w-full">${mode == "script" ? `<div class="flex flex-col h-full"><div class="absolute top-0 left-2">${validate_component(DarkModeToggle, "DarkModeToggle").$$render(
      $$result,
      {
        forcedDarkMode: false,
        darkMode,
        this: darkModeToggle
      },
      {
        darkMode: ($$value) => {
          darkMode = $$value;
          $$settled = false;
        },
        this: ($$value) => {
          darkModeToggle = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="text-center w-full text-lg truncate py-1 text-primary">${escape(currentScript?.path ?? "Not editing a script")} <span class="text-2xs text-secondary">${escape(currentScript?.language ?? "")}</span><span class="text-2xs text-secondary">${escape(currentScript?.isCodebase ? " (codebase)" : "")}</span></div> <div class="absolute top-2 right-2 !text-tertiary text-xs">${$userStore != void 0 ? `As ${escape($userStore?.username)} in ${escape($workspaceStore)}` : `<span class="text-red-600" data-svelte-h="svelte-2v8g86">Unable to login</span>`}</div> ${!validCode ? `<div class="text-center w-full text-lg truncate py-1 text-red-500" data-svelte-h="svelte-c1zufk">Invalid code</div>` : ``} <div class="flex flex-row-reverse py-1">${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        size: "xs",
        options: {
          left: "Infer lockfile",
          right: "Use current lockfile"
        },
        checked: useLock
      },
      {
        checked: ($$value) => {
          useLock = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="flex justify-center pt-1">${testIsLoading ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        btnClasses: "w-full",
        color: "red",
        size: "xs"
      },
      {},
      {
        default: () => {
          return `${validate_component(WindmillIcon, "WindmillIcon").$$render(
            $$result,
            {
              white: true,
              class: "mr-2 text-white",
              height: "20px",
              width: "20px",
              spin: "fast"
            },
            {},
            {}
          )}
						Cancel`;
        }
      }
    )}` : `${validate_component(Button, "Button").$$render(
      $$result,
      {
        disabled: currentScript === void 0,
        color: "dark",
        btnClasses: "w-full",
        size: "xs",
        startIcon: { icon: Play, classes: "animate-none" },
        shortCut: {
          Icon: Corner_down_left,
          hide: testIsLoading
        }
      },
      {},
      {
        default: () => {
          return `${loadingCodebaseButton ? `Bundle is building...` : `${testIsLoading ? `Running` : `Test`}`}`;
        }
      }
    )}`}</div> ${validate_component(Splitpanes, "Splitpanes").$$render($$result, { horizontal: true, class: "h-full" }, {}, {
      default: () => {
        return `${validate_component(Pane, "Pane").$$render($$result, { size: 33 }, {}, {
          default: () => {
            return `<div class="px-2"><div class="break-words relative font-sans">${validate_component(SchemaForm, "SchemaForm").$$render(
              $$result,
              { compact: true, schema, args, isValid },
              {
                args: ($$value) => {
                  args = $$value;
                  $$settled = false;
                },
                isValid: ($$value) => {
                  isValid = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div></div>`;
          }
        })} ${validate_component(Pane, "Pane").$$render($$result, { size: 67 }, {}, {
          default: () => {
            return `${validate_component(LogPanel, "LogPanel").$$render(
              $$result,
              {
                workspace,
                lang: currentScript?.language,
                previewJob: testJob,
                pastPreviews,
                previewIsLoading: testIsLoading
              },
              {},
              {}
            )}`;
          }
        })}`;
      }
    })}</div>` : ` <div class="h-full w-full"><div class="flex flex-col max-h-screen h-full relative"><div class="absolute top-0 left-2">${validate_component(DarkModeToggle, "DarkModeToggle").$$render(
      $$result,
      {
        forcedDarkMode: false,
        darkMode,
        this: darkModeToggle
      },
      {
        darkMode: ($$value) => {
          darkMode = $$value;
          $$settled = false;
        },
        this: ($$value) => {
          darkModeToggle = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${$userStore ? `As ${escape($userStore?.username)} in ${escape($workspaceStore)}` : `<span class="text-red-600">Unable to login on ${escape($workspaceStore)}</span>`}</div> <div class="flex justify-center pt-1 z-50 absolute right-2 top-2 gap-2">${validate_component(FlowPreviewButtons, "FlowPreviewButtons").$$render(
      $$result,
      { this: flowPreviewButtons },
      {
        this: ($$value) => {
          flowPreviewButtons = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> ${validate_component(Splitpanes, "Splitpanes").$$render(
      $$result,
      {
        horizontal: true,
        class: "h-full max-h-screen grow"
      },
      {},
      {
        default: () => {
          return `${validate_component(Pane, "Pane").$$render($$result, { size: 67 }, {}, {
            default: () => {
              return `${$flowStore?.value?.modules ? `${validate_component(FlowModuleSchemaMap, "FlowModuleSchemaMap").$$render(
                $$result,
                {
                  disableAi: true,
                  disableTutorials: true,
                  smallErrorHandler: true,
                  disableStaticInputs: true,
                  modules: $flowStore.value.modules
                },
                {
                  modules: ($$value) => {
                    $flowStore.value.modules = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}` : `<div class="text-red-400 mt-20" data-svelte-h="svelte-ui4l5w">Missing flow modules</div>`}`;
            }
          })} ${validate_component(Pane, "Pane").$$render($$result, { size: 33 }, {}, {
            default: () => {
              return `${validate_component(FlowEditorPanel, "FlowEditorPanel").$$render($$result, { enableAi: true, noEditor: true }, {}, {})}`;
            }
          })}`;
        }
      }
    )}</div></div>`}</main>`;
  } while (!$$settled);
  $$unsubscribe_flowStateStore();
  $$unsubscribe_flowStore();
  $$unsubscribe_selectedIdStore();
  $$unsubscribe_userStore();
  $$unsubscribe_workspaceStore();
  $$unsubscribe_modulesStore();
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Dev as D
};
