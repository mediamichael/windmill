import { c as create_ssr_component, s as subscribe, v as validate_component, f as each, e as escape } from "./ssr.js";
import { w as workspaceStore } from "./stores2.js";
import { b as base } from "./base.js";
import { j as displayDate, C as Check_circle_2, X as X_circle } from "./toast.js";
import { T as Tabs, a as Tab } from "./Tabs.js";
import { L as LogViewer, D as DisplayResult } from "./TimelineBar.js";
import { D as Drawer, a as DrawerContent } from "./DrawerContent.js";
import { T as Tooltip } from "./Tooltip.js";
import "./common.js";
/* empty css                                             */
import { S as Splitpanes, P as Pane } from "./Pane.js";
import { S as SplitPanesWrapper } from "./SplitPanesWrapper.js";
import { S as ScriptFix } from "./DefaultScripts.js";
import { D as DataTable, H as Head, C as Cell } from "./Head.js";
import { W as WorkflowTimeline } from "./WorkflowTimeline.js";
import { L as Loader_2 } from "./loader-2.js";
function asWorkflowStatus(x) {
  return x;
}
const LogPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { lang } = $$props;
  let { previewIsLoading = false } = $$props;
  let { previewJob } = $$props;
  let { pastPreviews = [] } = $$props;
  let { editor = void 0 } = $$props;
  let { diffEditor = void 0 } = $$props;
  let { args = void 0 } = $$props;
  let { workspace = void 0 } = $$props;
  let selectedTab = "logs";
  let drawerOpen = false;
  let drawerContent = void 0;
  function setFocusToLogs() {
    selectedTab = "logs";
  }
  let forceJson = false;
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0) $$bindings.lang(lang);
  if ($$props.previewIsLoading === void 0 && $$bindings.previewIsLoading && previewIsLoading !== void 0) $$bindings.previewIsLoading(previewIsLoading);
  if ($$props.previewJob === void 0 && $$bindings.previewJob && previewJob !== void 0) $$bindings.previewJob(previewJob);
  if ($$props.pastPreviews === void 0 && $$bindings.pastPreviews && pastPreviews !== void 0) $$bindings.pastPreviews(pastPreviews);
  if ($$props.editor === void 0 && $$bindings.editor && editor !== void 0) $$bindings.editor(editor);
  if ($$props.diffEditor === void 0 && $$bindings.diffEditor && diffEditor !== void 0) $$bindings.diffEditor(diffEditor);
  if ($$props.args === void 0 && $$bindings.args && args !== void 0) $$bindings.args(args);
  if ($$props.workspace === void 0 && $$bindings.workspace && workspace !== void 0) $$bindings.workspace(workspace);
  if ($$props.setFocusToLogs === void 0 && $$bindings.setFocusToLogs && setFocusToLogs !== void 0) $$bindings.setFocusToLogs(setFocusToLogs);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "800px", open: drawerOpen },
      {
        open: ($$value) => {
          drawerOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: drawerContent?.title }, {}, {
            default: () => {
              return `${`${`${``}`}`}`;
            }
          })}`;
        }
      }
    )} ${validate_component(Tabs, "Tabs").$$render(
      $$result,
      { class: "mt-1", selected: selectedTab },
      {
        selected: ($$value) => {
          selectedTab = $$value;
          $$settled = false;
        }
      },
      {
        content: () => {
          return ` ${selectedTab === "logs" ? `${validate_component(SplitPanesWrapper, "SplitPanesWrapper").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Splitpanes, "Splitpanes").$$render($$result, { horizontal: true }, {}, {
                default: () => {
                  return `${previewJob?.is_flow_step == false && previewJob?.flow_status && !(typeof previewJob.flow_status == "object" && "_metadata" in previewJob.flow_status) ? `${validate_component(Pane, "Pane").$$render($$result, { class: "relative" }, {}, {
                    default: () => {
                      return `${validate_component(WorkflowTimeline, "WorkflowTimeline").$$render(
                        $$result,
                        {
                          flow_status: asWorkflowStatus(previewJob.flow_status),
                          flowDone: previewJob.type == "CompletedJob"
                        },
                        {},
                        {}
                      )}`;
                    }
                  })}` : ``} ${validate_component(Pane, "Pane").$$render($$result, { class: "relative" }, {}, {
                    default: () => {
                      return `${validate_component(LogViewer, "LogViewer").$$render(
                        $$result,
                        {
                          jobId: previewJob?.id,
                          duration: previewJob?.["duration_ms"],
                          mem: previewJob?.["mem_peak"],
                          content: previewJob?.logs,
                          isLoading: previewIsLoading,
                          tag: previewJob?.tag
                        },
                        {},
                        {}
                      )}`;
                    }
                  })} ${validate_component(Pane, "Pane").$$render($$result, {}, {}, {
                    default: () => {
                      return `${previewJob != void 0 && "result" in previewJob ? `<div class="relative w-full h-full p-2"><div class="relative">${validate_component(DisplayResult, "DisplayResult").$$render(
                        $$result,
                        {
                          workspaceId: previewJob?.workspace_id,
                          jobId: previewJob?.id,
                          result: previewJob.result,
                          forceJson
                        },
                        {
                          forceJson: ($$value) => {
                            forceJson = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          "copilot-fix": () => {
                            return `${lang && editor && diffEditor && args && previewJob?.result && typeof previewJob?.result == "object" && `error` in previewJob?.result && previewJob?.result.error ? `${validate_component(ScriptFix, "ScriptFix").$$render(
                              $$result,
                              {
                                error: JSON.stringify(previewJob.result.error),
                                lang,
                                editor,
                                diffEditor,
                                args
                              },
                              {},
                              {}
                            )}` : ``}`;
                          }
                        }
                      )}</div></div>` : `<div class="text-sm text-tertiary p-2 flex justify-between items-center"><span>${previewIsLoading ? `${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})}` : `Test to see the result here`}</span> ${validate_component(Tooltip, "Tooltip").$$render(
                        $$result,
                        {
                          documentationLink: "https://www.windmill.dev/docs/core_concepts/rich_display_rendering"
                        },
                        {},
                        {
                          default: () => {
                            return `The result renderer in Windmill supports rich display rendering, allowing you to
									customize the display format of your results.`;
                          }
                        }
                      )}</div>`}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}` : ``} ${selectedTab === "history" ? `<div>${validate_component(DataTable, "DataTable").$$render($$result, { size: "xs", noBorder: true }, {}, {
            default: () => {
              return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                default: () => {
                  return `<tr>${validate_component(Cell, "Cell").$$render($$result, { first: true }, {}, {
                    default: () => {
                      return `Id`;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `Created at`;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `Success`;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `Result`;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `Code`;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, { last: true }, {}, {
                    default: () => {
                      return `Logs`;
                    }
                  })}</tr>`;
                }
              })} <tbody class="divide-y">${each(pastPreviews, ({ id, created_at, success }) => {
                return `<tr>${validate_component(Cell, "Cell").$$render($$result, { first: true }, {}, {
                  default: () => {
                    return `<a class="pr-3" href="${escape(base, true) + "/run/" + escape(id, true) + "?workspace=" + escape(workspace ?? $workspaceStore, true)}" target="_blank">${escape(id.substring(30))}</a> `;
                  }
                })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(displayDate(created_at))}`;
                  }
                })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${success ? `${validate_component(Check_circle_2, "CheckCircle2").$$render($$result, { size: 10, class: "text-green-600" }, {}, {})}` : `${validate_component(X_circle, "XCircle").$$render($$result, { size: 10, class: "text-red-700" }, {}, {})}`} `;
                  }
                })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                  default: () => {
                    return `<button class="text-xs" data-svelte-h="svelte-1ln9tql">See Result</button> `;
                  }
                })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                  default: () => {
                    return `<button class="text-xs" data-svelte-h="svelte-1hxpmt8">View code</button> `;
                  }
                })} ${validate_component(Cell, "Cell").$$render($$result, { last: true }, {}, {
                  default: () => {
                    return `<button class="text-xs" data-svelte-h="svelte-ldm7b0">View logs</button> `;
                  }
                })} </tr>`;
              })}</tbody>`;
            }
          })}</div>` : ``} `;
        },
        default: () => {
          return `${validate_component(Tab, "Tab").$$render($$result, { value: "logs", size: "xs" }, {}, {
            default: () => {
              return `Logs &amp; Result`;
            }
          })} ${validate_component(Tab, "Tab").$$render($$result, { value: "history", size: "xs" }, {}, {
            default: () => {
              return `History`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
export {
  LogPanel as L
};
