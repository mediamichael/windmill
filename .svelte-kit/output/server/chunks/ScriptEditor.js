import { c as create_ssr_component, v as validate_component, s as subscribe, f as each, b as add_attribute, e as escape, d as createEventDispatcher, o as onDestroy } from "./ssr.js";
import { I as Icon } from "./Icon.js";
import { a as ConfirmationModal, C as Corner_down_left } from "./ConfirmationModal.js";
import "./client.js";
import { B as Button, s as sendUserToast, e as emptySchema } from "./toast.js";
import "yaml";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import "minimatch";
import { p as page } from "./stores.js";
import { r as awarenessStore, u as userStore, w as workspaceStore, e as enterpriseLicense } from "./stores2.js";
import { P as Pen } from "./pen.js";
import { E as Editor } from "./Editor.js";
import { i as inferArgs } from "./infer.js";
import { S as Splitpanes, P as Pane } from "./Pane.js";
import { S as SchemaForm } from "./SchemaForm.js";
import { L as LogPanel } from "./LogPanel.js";
import { E as EditorBar, a as EDITOR_BAR_WIDTH_THRESHOLD } from "./DefaultScripts.js";
import { T as TestJobLoader } from "./TimelineBar.js";
import "./index2.js";
/* empty css                                     */
import "./common.js";
import { S as SplitPanesWrapper } from "./SplitPanesWrapper.js";
import { W as WindmillIcon } from "./WindmillIcon.js";
import * as Y from "yjs";
import { s as scriptLangToEditorLang } from "./scripts.js";
import { WebsocketProvider } from "y-websocket";
import { M as Modal } from "./Modal.js";
import { D as DiffEditor } from "./DiffEditor.js";
import { s as setLicense } from "./enterpriseUtils.js";
import { C as Clipboard } from "./clipboard.js";
import { G as Github } from "./github.js";
import { P as Play } from "./play.js";
const Diff = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M12 3v14" }],
    ["path", { "d": "M5 10h14" }],
    ["path", { "d": "M5 21h14" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "diff" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const UnsavedConfirmationModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { savedValue = void 0 } = $$props;
  let { modifiedValue = void 0 } = $$props;
  let { diffDrawer = void 0 } = $$props;
  let open = false;
  if ($$props.savedValue === void 0 && $$bindings.savedValue && savedValue !== void 0) $$bindings.savedValue(savedValue);
  if ($$props.modifiedValue === void 0 && $$bindings.modifiedValue && modifiedValue !== void 0) $$bindings.modifiedValue(modifiedValue);
  if ($$props.diffDrawer === void 0 && $$bindings.diffDrawer && diffDrawer !== void 0) $$bindings.diffDrawer(diffDrawer);
  $$unsubscribe_page();
  return `${validate_component(ConfirmationModal, "ConfirmationModal").$$render(
    $$result,
    {
      open,
      title: "Unsaved changes detected",
      confirmationText: "Discard changes"
    },
    {},
    {
      default: () => {
        return `<div class="flex flex-col w-full space-y-4"><span data-svelte-h="svelte-vwsyyn">Are you sure you want to discard the changes you have made?</span> ${savedValue && modifiedValue && diffDrawer ? `${validate_component(Button, "Button").$$render(
          $$result,
          {
            wrapperClasses: "self-start",
            color: "light",
            variant: "border",
            size: "xs"
          },
          {},
          {
            default: () => {
              return `Show diff`;
            }
          }
        )}` : ``}</div>`;
      }
    }
  )}`;
});
const Awareness = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $awarenessStore, $$unsubscribe_awarenessStore;
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_awarenessStore = subscribe(awarenessStore, (value) => $awarenessStore = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let url = "";
  $$unsubscribe_awarenessStore();
  $$unsubscribe_userStore();
  return `<div class="isolate flex -space-x-1 overflow-hidden w-20">${each(Object.entries($awarenessStore ?? {}).filter(([a, b]) => b == url && a != $userStore?.username), ([user, _]) => {
    return `<span class="inline-flex h-6 w-6 items-center justify-center rounded-full ring-2 ring-white bg-gray-600"${add_attribute("title", user, 0)}><span class="text-sm font-medium leading-none text-white">${escape(user.substring(0, 2).toLocaleUpperCase())}</span> </span>`;
  })}</div>`;
});
const css = {
  code: ".app-title{border-radius:.25rem;border-width:0;display:block;font-size:.875rem;font-weight:600;line-height:1.25rem;padding:.25rem .5rem;width:100%}.app-title:hover{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);--tw-ring-opacity:1;--tw-ring-color:rgb(234 238 244/var(--tw-ring-opacity));--tw-ring-offset-width:0px;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.app-title:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);--tw-ring-opacity:1;--tw-ring-color:rgb(209 213 219/var(--tw-ring-opacity));--tw-ring-offset-width:0px;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.dark .app-title{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(55 65 81/var(--tw-bg-opacity));border-color:rgb(75 85 99/var(--tw-border-opacity));color:rgb(var(--color-text-secondary)/var(--tw-text-opacity))}.dark .app-title:focus{--tw-ring-opacity:1!important;--tw-ring-color:rgb(94 129 172/var(--tw-ring-opacity))!important}.dark .app-title:hover{--tw-ring-opacity:1;--tw-ring-color:rgb(54 77 110/var(--tw-ring-opacity))}.app-title:focus+.pen-icon{display:none}",
  map: null
};
const Summary = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  $$result.css.add(css);
  return `<div class="flex flex-row center-center gap-1 min-w-32 lg:min-w-64 w-full max-w-md"><div class="relative w-full"><input title="Rename" type="text" placeholder="Untitled" class="windmillapp app-title text-sm w-full font-semibold"${add_attribute("value", value, 0)}> ${validate_component(Pen, "Pen").$$render(
    $$result,
    {
      class: "absolute top-2 right-2 pen-icon -z-10 opacity-60",
      size: 14
    },
    {},
    {}
  )}</div> </div>`;
});
function asKind(str) {
  return str;
}
const ScriptEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  let { schema = emptySchema() } = $$props;
  let { code } = $$props;
  let { path } = $$props;
  let { lang } = $$props;
  let { kind = void 0 } = $$props;
  let { template = "script" } = $$props;
  let { tag } = $$props;
  let { initialArgs = {} } = $$props;
  let { fixedOverflowWidgets = true } = $$props;
  let { noSyncFromGithub = false } = $$props;
  let { editor = void 0 } = $$props;
  let { diffEditor = void 0 } = $$props;
  let { collabMode = false } = $$props;
  let { edit = true } = $$props;
  let { noHistory = false } = $$props;
  let { saveToWorkspace = false } = $$props;
  let { watchChanges = false } = $$props;
  let websocketAlive = {
    pyright: false,
    deno: false,
    go: false,
    ruff: false,
    shellcheck: false
  };
  const dispatch = createEventDispatcher();
  let width = 1200;
  let testJobLoader;
  let args = initialArgs;
  let isValid = true;
  let testIsLoading = false;
  let testJob;
  let pastPreviews = [];
  let validCode = true;
  let wsProvider = void 0;
  let yContent = void 0;
  let peers = [];
  let showCollabPopup = false;
  const url = new URL(window.location.toString());
  let initialCollab = /true|1/i.test(url.searchParams.get("collab") ?? "0");
  if (initialCollab) {
    setCollaborationMode();
    url.searchParams.delete("collab");
    url.searchParams.delete("path");
    history.replaceState(null, "", url);
  }
  function runTest() {
    testJobLoader.runPreview(path, code, lang, args, tag);
  }
  async function inferSchema(code2, nlang) {
    let nschema = schema ?? emptySchema();
    try {
      await inferArgs(nlang ?? lang, code2, nschema);
      validCode = true;
      schema = nschema;
    } catch (e) {
      validCode = false;
    }
  }
  setLicense();
  async function setCollaborationMode() {
    if (!$enterpriseLicense) {
      sendUserToast(`Multiplayer is an enterprise feature`, true, [
        {
          label: "Upgrade",
          callback: () => {
            window.open("https://www.windmill.dev/pricing", "_blank");
          }
        }
      ]);
      return;
    }
    const ydoc = new Y.Doc();
    if (wsProvider) {
      wsProvider.destroy();
    }
    let yContentInit = ydoc.getText("content");
    const wsProtocol = "ws";
    wsProvider = new WebsocketProvider(`${wsProtocol}://${window.location.host}/ws_mp/`, $workspaceStore + "/" + path, ydoc, { connect: false });
    wsProvider.on("sync", (isSynced) => {
      if (isSynced && yContentInit?.toJSON() == "") {
        showCollabPopup = true;
        yContentInit?.insert(0, code);
      }
      yContent = yContentInit;
    });
    wsProvider.on("connection-error", (WSErrorEvent) => {
      console.error(WSErrorEvent);
      sendUserToast("Multiplayer server connection had an error", true);
    });
    wsProvider.connect();
    const awareness = wsProvider.awareness;
    awareness.setLocalStateField("user", { name: $userStore?.username });
    function setPeers() {
      peers = Array.from(awareness.getStates().values()).map((x) => x?.["user"]);
    }
    setPeers();
    awareness.on("change", (changes) => {
      setPeers();
    });
  }
  function disableCollaboration() {
    if (!wsProvider?.shouldConnect) return;
    peers = [];
    console.log("collab mode disabled");
    wsProvider?.disconnect();
    wsProvider.destroy();
    wsProvider = void 0;
  }
  onDestroy(() => {
    disableCollaboration();
  });
  function collabUrl() {
    let url2 = new URL(window.location.toString().split("#")[0]);
    url2.search = "";
    return `${url2}?collab=1` + (edit ? "" : `&path=${path}`);
  }
  if ($$props.schema === void 0 && $$bindings.schema && schema !== void 0) $$bindings.schema(schema);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0) $$bindings.code(code);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0) $$bindings.path(path);
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0) $$bindings.lang(lang);
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0) $$bindings.kind(kind);
  if ($$props.template === void 0 && $$bindings.template && template !== void 0) $$bindings.template(template);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
  if ($$props.initialArgs === void 0 && $$bindings.initialArgs && initialArgs !== void 0) $$bindings.initialArgs(initialArgs);
  if ($$props.fixedOverflowWidgets === void 0 && $$bindings.fixedOverflowWidgets && fixedOverflowWidgets !== void 0) $$bindings.fixedOverflowWidgets(fixedOverflowWidgets);
  if ($$props.noSyncFromGithub === void 0 && $$bindings.noSyncFromGithub && noSyncFromGithub !== void 0) $$bindings.noSyncFromGithub(noSyncFromGithub);
  if ($$props.editor === void 0 && $$bindings.editor && editor !== void 0) $$bindings.editor(editor);
  if ($$props.diffEditor === void 0 && $$bindings.diffEditor && diffEditor !== void 0) $$bindings.diffEditor(diffEditor);
  if ($$props.collabMode === void 0 && $$bindings.collabMode && collabMode !== void 0) $$bindings.collabMode(collabMode);
  if ($$props.edit === void 0 && $$bindings.edit && edit !== void 0) $$bindings.edit(edit);
  if ($$props.noHistory === void 0 && $$bindings.noHistory && noHistory !== void 0) $$bindings.noHistory(noHistory);
  if ($$props.saveToWorkspace === void 0 && $$bindings.saveToWorkspace && saveToWorkspace !== void 0) $$bindings.saveToWorkspace(saveToWorkspace);
  if ($$props.watchChanges === void 0 && $$bindings.watchChanges && watchChanges !== void 0) $$bindings.watchChanges(watchChanges);
  if ($$props.inferSchema === void 0 && $$bindings.inferSchema && inferSchema !== void 0) $$bindings.inferSchema(inferSchema);
  if ($$props.setCollaborationMode === void 0 && $$bindings.setCollaborationMode && setCollaborationMode !== void 0) $$bindings.setCollaborationMode(setCollaborationMode);
  if ($$props.disableCollaboration === void 0 && $$bindings.disableCollaboration && disableCollaboration !== void 0) $$bindings.disableCollaboration(disableCollaboration);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    watchChanges && (code != void 0 || schema != void 0) && dispatch("change", { code, schema });
    $$rendered = `${validate_component(TestJobLoader, "TestJobLoader").$$render(
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
    )}  ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        title: "Invite others",
        open: showCollabPopup
      },
      {
        open: ($$value) => {
          showCollabPopup = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div data-svelte-h="svelte-u0ys6r">Have others join by sharing the following url:</div> <div class="flex gap-2 pr-4"><input type="text" disabled${add_attribute("value", collabUrl(), 0)}> ${validate_component(Button, "Button").$$render(
            $$result,
            {
              color: "light",
              startIcon: { icon: Clipboard },
              iconOnly: true
            },
            {},
            {}
          )}</div>`;
        }
      }
    )} <div class="border-b shadow-sm px-1 pr-4"><div class="flex justify-between space-x-2">${validate_component(EditorBar, "EditorBar").$$render(
      $$result,
      {
        scriptPath: edit ? path : void 0,
        collabLive: wsProvider?.shouldConnect,
        collabMode,
        validCode,
        iconOnly: width < EDITOR_BAR_WIDTH_THRESHOLD,
        editor,
        lang,
        websocketAlive,
        collabUsers: peers,
        kind: asKind(kind),
        template,
        diffEditor,
        args,
        noHistory,
        saveToWorkspace
      },
      {},
      {}
    )} ${!noSyncFromGithub ? `<div class="py-1">${validate_component(Button, "Button").$$render(
      $$result,
      {
        target: "_blank",
        href: "https://www.windmill.dev/docs/cli_local_dev/vscode-extension",
        color: "light",
        size: "xs",
        btnClasses: "hidden lg:flex",
        startIcon: { icon: Github }
      },
      {},
      {
        default: () => {
          return `Use VScode`;
        }
      }
    )}</div>` : ``}</div></div> ${validate_component(SplitPanesWrapper, "SplitPanesWrapper").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Splitpanes, "Splitpanes").$$render($$result, { class: "!overflow-visible" }, {}, {
          default: () => {
            return `${validate_component(Pane, "Pane").$$render(
              $$result,
              {
                size: 60,
                minSize: 10,
                class: "!overflow-visible"
              },
              {},
              {
                default: () => {
                  return `<div class="pl-2 h-full !overflow-visible bg-gray-50 dark:bg-[#272D38]">${validate_component(Editor, "Editor").$$render(
                    $$result,
                    {
                      folding: true,
                      path,
                      yContent,
                      awareness: wsProvider?.awareness,
                      cmdEnterAction: async () => {
                        await inferSchema(code);
                        runTest();
                      },
                      formatAction: async () => {
                        await inferSchema(code);
                        try {
                          localStorage.setItem(path ?? "last_save", code);
                        } catch (e) {
                          console.error("Could not save last_save to local storage", e);
                        }
                        dispatch("format");
                      },
                      class: "flex flex-1 h-full !overflow-visible",
                      lang: scriptLangToEditorLang(lang),
                      scriptLang: lang,
                      automaticLayout: true,
                      fixedOverflowWidgets,
                      args,
                      code,
                      websocketAlive,
                      this: editor
                    },
                    {
                      code: ($$value) => {
                        code = $$value;
                        $$settled = false;
                      },
                      websocketAlive: ($$value) => {
                        websocketAlive = $$value;
                        $$settled = false;
                      },
                      this: ($$value) => {
                        editor = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )} ${validate_component(DiffEditor, "DiffEditor").$$render(
                    $$result,
                    {
                      automaticLayout: true,
                      fixedOverflowWidgets,
                      class: "hidden h-full",
                      this: diffEditor
                    },
                    {
                      this: ($$value) => {
                        diffEditor = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div>`;
                }
              }
            )} ${validate_component(Pane, "Pane").$$render($$result, { size: 40, minSize: 10 }, {}, {
              default: () => {
                return `<div class="flex flex-col h-full"><div class="flex justify-center pt-1">${testIsLoading ? `${validate_component(Button, "Button").$$render(
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
                          height: "16px",
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
                      return `${testIsLoading ? `Running` : `Test`}`;
                    }
                  }
                )}`}</div> ${validate_component(Splitpanes, "Splitpanes").$$render(
                  $$result,
                  {
                    horizontal: true,
                    class: "!max-h-[calc(100%-43px)]"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(Pane, "Pane").$$render($$result, { size: 33 }, {}, {
                        default: () => {
                          return `<div class="px-2"><div class="break-words relative font-sans">${validate_component(SchemaForm, "SchemaForm").$$render(
                            $$result,
                            {
                              helperScript: {
                                type: "inline",
                                code,
                                //@ts-ignore
                                lang
                              },
                              compact: true,
                              schema,
                              showSchemaExplorer: true,
                              args,
                              isValid
                            },
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
                              lang,
                              previewJob: testJob,
                              pastPreviews,
                              previewIsLoading: testIsLoading,
                              editor,
                              diffEditor,
                              args
                            },
                            {},
                            {}
                          )}`;
                        }
                      })}`;
                    }
                  }
                )}</div>`;
              }
            })}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_userStore();
  $$unsubscribe_workspaceStore();
  $$unsubscribe_enterpriseLicense();
  return $$rendered;
});
export {
  Awareness as A,
  Diff as D,
  Summary as S,
  UnsavedConfirmationModal as U,
  ScriptEditor as a
};
