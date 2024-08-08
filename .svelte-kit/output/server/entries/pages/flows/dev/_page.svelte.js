import { c as create_ssr_component, s as subscribe, a as set_store_value, u as setContext, o as onDestroy, v as validate_component, e as escape } from "../../../../chunks/ssr.js";
import { s as sendUserToast, e as emptySchema } from "../../../../chunks/toast.js";
import { S as Splitpanes, P as Pane } from "../../../../chunks/Pane.js";
import { S as SimpleEditor } from "../../../../chunks/SimpleEditor.js";
import { F as FlowPreviewButtons, a as FlowModuleSchemaMap, b as FlowEditorPanel } from "../../../../chunks/FlowPreviewButtons.js";
import { w as writable } from "../../../../chunks/index.js";
import { O as OpenAPI } from "../../../../chunks/services.gen.js";
import { b as initHistory } from "../../../../chunks/history.js";
import { deepEqual } from "fast-equals";
import { p as page } from "../../../../chunks/stores.js";
import { u as userStore, w as workspaceStore } from "../../../../chunks/stores2.js";
import { g as getUserExt } from "../../../../chunks/user.js";
import { D as DarkModeToggle } from "../../../../chunks/DarkModeToggle.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $flowStore, $$unsubscribe_flowStore;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $page, $$unsubscribe_page;
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let token = $page.url.searchParams.get("wm_token") ?? void 0;
  let workspace = $page.url.searchParams.get("workspace") ?? void 0;
  let themeDarkRaw = $page.url.searchParams.get("activeColorTheme");
  let themeDark = themeDarkRaw == "2" || themeDarkRaw == "4";
  if (token) {
    OpenAPI.WITH_CREDENTIALS = true;
    OpenAPI.TOKEN = $page.url.searchParams.get("wm_token");
  }
  if (workspace) {
    set_store_value(workspaceStore, $workspaceStore = workspace, $workspaceStore);
  }
  if (workspace && token) {
    loadUser();
  }
  async function loadUser() {
    const user = await getUserExt(workspace);
    userStore.set(user);
  }
  let darkModeToggle;
  let darkMode = void 0;
  let modeInitialized = false;
  function initializeMode() {
    modeInitialized = true;
    darkModeToggle.toggle();
  }
  const flowStore = writable({
    summary: "",
    value: { modules: [] },
    extra_perms: {},
    schema: emptySchema()
  });
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => $flowStore = value);
  let initialCode = JSON.stringify($flowStore, null, 4);
  const flowStateStore = writable({});
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
  let currentScript = void 0;
  const href = window.location.href;
  const indexQ = href.indexOf("?");
  const searchParams = indexQ > -1 ? new URLSearchParams(href.substring(indexQ)) : void 0;
  if (searchParams?.has("local")) {
    connectWs();
  }
  const el = (event) => {
    if (event.data.type == "runTest") {
      runTest();
    } else if (event.data.type == "replaceScript") {
      replaceScript(event.data);
    }
  };
  onDestroy(() => {
    window.removeEventListener("message", el);
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
      const socket = new WebSocket(`ws://localhost:${port}/ws`);
      socket.addEventListener("message", (event) => {
        replaceData(event.data);
      });
    } catch (e) {
      sendUserToast("Failed to connect to local server", true);
      console.error(e);
    }
  }
  function runTest() {
    if (!currentScript) {
      return;
    }
    testJobLoader.runPreview(currentScript.path, currentScript.content, args, void 0);
  }
  let lastPath = void 0;
  async function replaceScript(lastEdit) {
    currentScript = lastEdit;
    if (lastPath !== lastEdit.path) ;
  }
  let editor;
  function updateCode(editor2, flow) {
    if (editor2 && !deepEqual(flow, JSON.parse(editor2.getCode()))) {
      editor2.setCode(JSON.stringify(flow, null, 4));
    }
  }
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    darkModeToggle && themeDark != darkMode && darkMode != void 0 && !modeInitialized && initializeMode();
    {
      updateCode(editor, $flowStore);
    }
    $$rendered = ` <main class="h-screen w-full"><div class="h-full w-full grid grid-cols-2">${validate_component(SimpleEditor, "SimpleEditor").$$render(
      $$result,
      {
        code: initialCode,
        lang: "json",
        this: editor
      },
      {
        this: ($$value) => {
          editor = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="flex flex-col max-h-screen h-full relative"><div class="absolute top-0 left-2">${validate_component(DarkModeToggle, "DarkModeToggle").$$render(
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
    )} ${$userStore ? `As ${escape($userStore?.username)} in ${escape($workspaceStore)}` : `<span class="text-red-600" data-svelte-h="svelte-2v8g86">Unable to login</span>`}</div> <div class="flex justify-center pt-1 z-50 absolute right-2 top-2 gap-2">${validate_component(FlowPreviewButtons, "FlowPreviewButtons").$$render($$result, {}, {}, {})}</div> ${validate_component(Splitpanes, "Splitpanes").$$render(
      $$result,
      {
        horizontal: true,
        class: "h-full max-h-screen grow"
      },
      {},
      {
        default: () => {
          return `${validate_component(Pane, "Pane").$$render($$result, { size: 33 }, {}, {
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
          })} ${validate_component(Pane, "Pane").$$render($$result, { size: 67 }, {}, {
            default: () => {
              return `${validate_component(FlowEditorPanel, "FlowEditorPanel").$$render($$result, { noEditor: true }, {}, {})}`;
            }
          })}`;
        }
      }
    )}</div></div></main>`;
  } while (!$$settled);
  $$unsubscribe_flowStore();
  $$unsubscribe_workspaceStore();
  $$unsubscribe_page();
  $$unsubscribe_userStore();
  return $$rendered;
});
export {
  Page as default
};
