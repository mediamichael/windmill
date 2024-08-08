import { c as create_ssr_component, s as subscribe, d as createEventDispatcher, v as validate_component, f as each, b as add_attribute, e as escape } from "./ssr.js";
import { T as Tooltip } from "./Tooltip.js";
import { B as Button, g as classNames, s as sendUserToast, q as displayDateOnly } from "./toast.js";
/* empty css                                     */
import "./common.js";
import { S as Skeleton } from "./Skeleton.js";
import { f as InputService } from "./services.gen.js";
import { w as workspaceStore, u as userStore } from "./stores2.js";
import { b as base } from "./base.js";
import { S as Splitpanes, P as Pane } from "./Pane.js";
import { O as ObjectViewer } from "./LightweightSchemaForm.js";
import { T as Toggle } from "./Toggle.js";
import { T as TimeAgo } from "./FlowGraphViewerStep.js";
import { J as JobLoader } from "./JobLoader.js";
import { S as Save } from "./VariableEditor.js";
import { E as External_link } from "./Popover.js";
import { A as Arrow_left } from "./Head.js";
import { P as Pen_square } from "./pen-square.js";
import { X } from "./x.js";
const SavedInputs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let runnableId;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let { scriptHash = null } = $$props;
  let { scriptPath = null } = $$props;
  let { flowPath = null } = $$props;
  let { canSaveInputs = true } = $$props;
  let { isValid } = $$props;
  let { args } = $$props;
  let previousInputs = void 0;
  let savedInputs = void 0;
  let selectedInput;
  let jobs = [];
  let loading = false;
  let savingInputs = false;
  createEventDispatcher();
  let runnableType = void 0;
  let hasAlreadyFailed = false;
  async function loadInputHistory() {
    try {
      previousInputs = await InputService.getInputHistory({
        workspace: $workspaceStore,
        runnableId,
        runnableType,
        perPage: 10
      });
    } catch (e) {
      console.error(e);
      if (hasAlreadyFailed) return;
      hasAlreadyFailed = true;
      sendUserToast(`Failed to load input history: ${e}`, true);
    }
  }
  async function loadSavedInputs() {
    savedInputs = await InputService.listInputs({
      workspace: $workspaceStore,
      runnableId,
      runnableType,
      perPage: 10
    });
  }
  let previewArgs = void 0;
  if ($$props.scriptHash === void 0 && $$bindings.scriptHash && scriptHash !== void 0) $$bindings.scriptHash(scriptHash);
  if ($$props.scriptPath === void 0 && $$bindings.scriptPath && scriptPath !== void 0) $$bindings.scriptPath(scriptPath);
  if ($$props.flowPath === void 0 && $$bindings.flowPath && flowPath !== void 0) $$bindings.flowPath(flowPath);
  if ($$props.canSaveInputs === void 0 && $$bindings.canSaveInputs && canSaveInputs !== void 0) $$bindings.canSaveInputs(canSaveInputs);
  if ($$props.isValid === void 0 && $$bindings.isValid && isValid !== void 0) $$bindings.isValid(isValid);
  if ($$props.args === void 0 && $$bindings.args && args !== void 0) $$bindings.args(args);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    runnableId = scriptHash || scriptPath || flowPath || void 0;
    runnableType = scriptHash ? "ScriptHash" : scriptPath ? "ScriptPath" : flowPath ? "FlowPath" : void 0;
    {
      {
        if ($workspaceStore && (scriptHash || scriptPath || flowPath)) {
          loadInputHistory();
          loadSavedInputs();
        }
      }
    }
    $$rendered = `${validate_component(JobLoader, "JobLoader").$$render(
      $$result,
      {
        path: runnableId ?? null,
        isSkipped: false,
        jobKindsCat: "jobs",
        jobKinds: "all",
        user: null,
        label: null,
        folder: null,
        concurrencyKey: null,
        tag: null,
        success: "running",
        argFilter: void 0,
        syncQueuedRunsCount: false,
        refreshRate: 1e4,
        computeMinAndMax: void 0,
        perPage: 5,
        jobs,
        loading
      },
      {
        jobs: ($$value) => {
          jobs = $$value;
          $$settled = false;
        },
        loading: ($$value) => {
          loading = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="min-w-[300px] h-full">${validate_component(Splitpanes, "Splitpanes").$$render($$result, { horizontal: true }, {}, {
      default: () => {
        return `${validate_component(Pane, "Pane").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="w-full flex flex-col gap-4 p-2"><div class="w-full flex justify-between items-center gap-4 flex-wrap"><span class="text-sm font-semibold flex-shrink-0">Saved Inputs ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
              default: () => {
                return `Shared inputs are available to anyone with access to the script`;
              }
            })}</span> ${canSaveInputs ? `${validate_component(Button, "Button").$$render(
              $$result,
              {
                disabled: !isValid,
                loading: savingInputs,
                startIcon: { icon: Save },
                color: "light",
                size: "xs"
              },
              {},
              {
                default: () => {
                  return `<span data-svelte-h="svelte-miemma">Save Current Input</span>`;
                }
              }
            )}` : ``}</div> <div class="w-full flex flex-col gap-1 h-full overflow-y-auto p">${savedInputs === void 0 ? `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[8]] }, {}, {})}` : `${savedInputs.length > 0 ? `${each(savedInputs, (i) => {
              return `<button${add_attribute(
                "class",
                classNames(`w-full flex items-center text-sm group justify-between gap-4 py-1.5 px-4 text-left border rounded-sm hover:bg-surface-hover transition-all`, selectedInput === i ? "border-blue-500 bg-blue-50 dark:bg-blue-900" : ""),
                0
              )}><div class="w-full h-full items-center justify-between flex gap-1 min-w-0">${i.isEditing ? `<form class="w-full"><input type="text" class="text-secondary"${add_attribute("value", i.name, 0)}> </form>` : `<small class="whitespace-nowrap overflow-hidden text-ellipsis flex-shrink text-left">${escape(i.name)} </small>`} ${i.created_by == $userStore?.username || $userStore?.is_admin || $userStore?.is_super_admin ? `<div class="items-center flex gap-2">${!i.isEditing ? `<div class="group-hover:block hidden -my-2">${validate_component(Toggle, "Toggle").$$render(
                $$result,
                {
                  size: "xs",
                  options: { right: "shared" },
                  checked: i.is_public
                },
                {
                  checked: ($$value) => {
                    i.is_public = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} </div>` : ``} ${validate_component(Button, "Button").$$render(
                $$result,
                {
                  loading: i.isSaving,
                  color: "light",
                  size: "xs",
                  variant: "border",
                  spacingSize: "xs2",
                  btnClasses: "group-hover:block hidden -my-2"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Pen_square, "Edit").$$render($$result, { class: "w-4 h-4" }, {}, {})} `;
                  }
                }
              )} ${validate_component(Button, "Button").$$render(
                $$result,
                {
                  color: "red",
                  size: "xs",
                  spacingSize: "xs2",
                  variant: "border",
                  btnClasses: i.isEditing ? "block" : "group-hover:block hidden -my-2"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(X, "X").$$render($$result, { class: "w-4 h-4" }, {}, {})} `;
                  }
                }
              )} </div>` : `<span class="text-xs text-tertiary">By ${escape(i.created_by)}</span>`}</div> </button>`;
            })}` : `<div class="text-center text-tertiary" data-svelte-h="svelte-1q92atb">No saved Inputs</div>`}`}</div></div>`;
          }
        })} ${validate_component(Pane, "Pane").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="w-full flex flex-col gap-4 p-2"><span class="text-sm font-semibold" data-svelte-h="svelte-r40ho5">Previous runs</span> <div class="w-full flex flex-col gap-1 p-0 h-full overflow-y-auto">${loading && (jobs == void 0 || jobs?.length == 0) ? `<div class="text-left text-tertiary text-xs" data-svelte-h="svelte-1xg6n02">Loading current runs...</div>` : `${jobs.length > 0 ? `${each(jobs, (i) => {
              return `<button${add_attribute("class", classNames(`w-full flex items-center justify-between gap-4 py-2 px-4 text-left border rounded-sm hover:bg-surface-hover transition-a`, "border-orange-400"), 0)}><div class="w-full h-full items-center text-xs font-normal grid grid-cols-8 gap-4 min-w-0"><div class="" data-svelte-h="svelte-7g8uat"><div class="rounded-full w-2 h-2 bg-orange-400 animate-pulse"></div></div> <div class="col-span-2 truncate">${escape(i.created_by)}</div> <div class="whitespace-nowrap col-span-3 !text-tertiary !text-2xs overflow-hidden text-ellipsis flex-shrink text-center">${validate_component(TimeAgo, "TimeAgo").$$render($$result, { date: i.started_at ?? "" }, {}, {})}</div> <div class="col-span-2"><a target="_blank" href="${escape(base, true) + "/run/" + escape(i.id, true) + "?workspace=" + escape($workspaceStore, true)}" class="text-right float-right text-secondary" title="See run detail in a new tab">${validate_component(External_link, "ExternalLink").$$render($$result, { size: 16 }, {}, {})}</a> </div></div> </button>`;
            })} ${jobs.length == 5 ? `<div class="text-left text-tertiary text-xs" data-svelte-h="svelte-11pjsqq">... there may be more runs not displayed here as the limit is 5</div>` : ``}` : `<div class="text-left text-tertiary text-xs" data-svelte-h="svelte-j0hawl">No running runs</div>`}`}</div> <div class="w-full flex flex-col gap-1 p-0 h-full overflow-y-auto">${previousInputs === void 0 ? `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[8]] }, {}, {})}` : `${previousInputs.length > 0 ? `${each(previousInputs, (i) => {
              return `<button${add_attribute(
                "class",
                classNames(`w-full flex items-center justify-between gap-4 py-2 px-4 text-left border rounded-sm hover:bg-surface-hover transition-a`, selectedInput === i ? "border-blue-500 bg-blue-50 dark:bg-blue-900" : ""),
                0
              )}><div class="w-full h-full items-center text-xs font-normal grid grid-cols-8 gap-4 min-w-0"><div class=""><div class="${"rounded-full w-2 h-2 " + escape(i.success ? "bg-green-400" : "bg-red-400", true)}"></div></div> <div class="col-span-2 truncate"${add_attribute("title", i.created_by, 0)}>${escape(i.created_by)}</div> <div class="whitespace-nowrap col-span-2 !text-tertiary !text-2xs overflow-hidden text-ellipsis flex-shrink text-center">${escape(displayDateOnly(new Date(i.created_at)))}</div> <div class="whitespace-nowrap col-span-2 !text-tertiary !text-2xs overflow-hidden text-ellipsis flex-shrink text-center">${validate_component(TimeAgo, "TimeAgo").$$render($$result, { date: i.created_at ?? "" }, {}, {})}</div> <div class="col-span-1"><a target="_blank" href="${escape(base, true) + "/run/" + escape(i.id, true) + "?workspace=" + escape($workspaceStore, true)}" class="text-right float-right text-secondary" title="See run detail in a new tab">${validate_component(External_link, "ExternalLink").$$render($$result, { size: 16 }, {}, {})}</a> </div></div> </button>`;
            })}` : `<div class="text-center text-tertiary" data-svelte-h="svelte-1swjs32">No previous Runs</div>`}`}</div></div>`;
          }
        })} ${validate_component(Pane, "Pane").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="h-full overflow-hidden min-h-0 flex flex-col justify-between"><div class="w-full flex flex-col min-h-0 gap-2 px-2 py-2 grow"><div class="w-full flex flex-col">${validate_component(Button, "Button").$$render(
              $$result,
              {
                color: "blue",
                btnClasses: "w-full",
                size: "sm",
                spacingSize: "xl",
                disabled: !selectedInput
              },
              {},
              {
                default: () => {
                  return `${validate_component(Arrow_left, "ArrowLeftIcon").$$render($$result, { class: "w-4 h-4 mr-2" }, {}, {})}
							Use Input`;
                }
              }
            )}</div> <div class="w-full min-h-0 grow overflow-auto">${`${Object.keys({}).length > 0 ? `<div class="overflow-auto h-full p-2">${validate_component(ObjectViewer, "ObjectViewer").$$render($$result, { json: previewArgs }, {}, {})}</div>` : `<div class="text-center text-tertiary" data-svelte-h="svelte-x8bqfn">Select an Input to preview scripts arguments</div>`}`}</div></div></div>`;
          }
        })}`;
      }
    })}</div>`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_userStore();
  return $$rendered;
});
export {
  SavedInputs as S
};
