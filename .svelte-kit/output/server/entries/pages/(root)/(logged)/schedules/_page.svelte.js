import { c as create_ssr_component, s as subscribe, o as onDestroy, b as add_attribute, e as escape, v as validate_component, f as each } from "../../../../../chunks/ssr.js";
import { S as ScheduleService, J as JobService } from "../../../../../chunks/services.gen.js";
import { h as getLocalSetting, z as storeLocalSetting, B as Button, a as canWrite, j as displayDate, s as sendUserToast } from "../../../../../chunks/toast.js";
import { b as base } from "../../../../../chunks/paths.js";
import { C as CenteredPage } from "../../../../../chunks/CenteredPage.js";
import "../../../../../chunks/index2.js";
import { P as Popover } from "../../../../../chunks/Popover.js";
import { B as Badge } from "../../../../../chunks/Badge.js";
/* empty css                                                         */
import "../../../../../chunks/common.js";
import { S as Skeleton } from "../../../../../chunks/Skeleton.js";
import { D as DropdownV2 } from "../../../../../chunks/DropdownV2.js";
import { P as PageHeader } from "../../../../../chunks/PageHeader.js";
import { S as ScheduleEditor } from "../../../../../chunks/ScheduleEditor.js";
import { S as SharedBadge } from "../../../../../chunks/SharedBadge.js";
import { S as ShareModal, a as Share } from "../../../../../chunks/ShareModal.js";
import { T as Toggle } from "../../../../../chunks/Toggle.js";
import { w as workspaceStore, u as userStore } from "../../../../../chunks/stores2.js";
import { s as setQuery, g as goto } from "../../../../../chunks/navigation.js";
import { S as SearchItems } from "../../../../../chunks/SearchItems.js";
import { N as NoItemFound } from "../../../../../chunks/SchemaForm.js";
import { R as RowIcon } from "../../../../../chunks/RowIcon.js";
import "../../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import { w as writable } from "../../../../../chunks/index.js";
import "yaml";
import "minimatch";
import "../../../../../chunks/index3.js";
/* empty css                                                                      */
import "@json2csv/plainjs";
/* empty css                                                            */
import "ag-grid-community";
import "ol/proj.js";
/* empty css                                                                 */
import { J as JobArgs } from "../../../../../chunks/JobArgs.js";
import "ansi_up";
import { L as ListFilters } from "../../../../../chunks/ListFilters.js";
import { T as ToggleButtonGroup, a as ToggleButton } from "../../../../../chunks/ToggleButtonGroup.js";
import { P as Plus } from "../../../../../chunks/plus.js";
import { C as Calendar } from "../../../../../chunks/calendar.js";
import { C as Code } from "../../../../../chunks/util.js";
import { C as Circle } from "../../../../../chunks/circle.js";
import { L as List } from "../../../../../chunks/list.js";
import { P as Pen } from "../../../../../chunks/pen.js";
import { E as Eye } from "../../../../../chunks/eye.js";
import { T as Trash } from "../../../../../chunks/Section.js";
import { P as Play } from "../../../../../chunks/play.js";
import { L as Loader_2 } from "../../../../../chunks/loader-2.js";
const openStore = writable("");
const JobPreview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open;
  let $openStore, $$unsubscribe_openStore;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_openStore = subscribe(openStore, (value) => $openStore = value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { id } = $$props;
  let job = void 0;
  let wrapper;
  onDestroy(() => {
  });
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    open = $openStore === id;
    $$rendered = ` ${``}  <div class="relative"${add_attribute("this", wrapper, 0)}>${slots.default ? slots.default({ open }) : ``} ${open ? `<div class="${"absolute z-50 " + escape("bottom-[35px]", true) + " -left-10 bg-surface rounded border shadow-xl flex justify-start items-start w-[600px] h-80 overflow-hidden"}"><div class="absolute bottom-0 right-1 flex justify-end gap-2 pb-0.5 z-50 bg-surface-primary">${``} ${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
      default: () => {
        return `Mem: ${escape("N/A")}`;
      }
    })} ${``} ${``}</div> <div class="w-1/2 h-full overflow-auto">${validate_component(JobArgs, "JobArgs").$$render(
      $$result,
      {
        id: job?.id,
        workspace: $workspaceStore ?? "no_w",
        args: job?.args
      },
      {},
      {}
    )}</div> <div class="w-1/2 h-full overflow-auto p-2">${``} ${`${``}`}</div></div>` : ``}</div>`;
  } while (!$$settled);
  $$unsubscribe_openStore();
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const SCHEDULE_PATH_KIND_FILTER_SETTING = "schedulePathKindFilter";
const FILTER_USER_FOLDER_SETTING_NAME = "user_and_folders_only";
function filterItemsBasedOnEnabledDisabled(item, filterEnabledDisabled) {
  if (filterEnabledDisabled === "all") return true;
  if (filterEnabledDisabled === "enabled") return item.enabled;
  if (filterEnabledDisabled === "disabled") return !item.enabled;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let owners;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let schedules = [];
  let shareModal;
  let loading = true;
  let loadingSchedulesWithJobStats = true;
  async function loadSchedules() {
    schedules = (await ScheduleService.listSchedules({ workspace: $workspaceStore })).map((x) => {
      return {
        canWrite: canWrite(x.path, x.extra_perms, $userStore),
        ...x
      };
    });
    loading = false;
    loadSchedulesWithJobStats();
  }
  async function loadSchedulesWithJobStats() {
    loadingSchedulesWithJobStats = true;
    let schedulesWithJobsByPath = /* @__PURE__ */ new Map();
    let schedulesWithJobsList = await ScheduleService.listSchedulesWithJobs({ workspace: $workspaceStore });
    schedulesWithJobsList.map((x) => {
      schedulesWithJobsByPath[x.path] = x;
    });
    for (let schedule of schedules) {
      if (schedulesWithJobsByPath[schedule.path]) {
        schedule.jobs = schedulesWithJobsByPath[schedule.path].jobs;
      }
    }
    loadingSchedulesWithJobStats = false;
  }
  async function runScheduleNow(path, args, isFlow) {
    try {
      const runByPath = isFlow ? JobService.runFlowByPath : JobService.runScriptByPath;
      const run = await runByPath({
        path,
        requestBody: args ?? {},
        workspace: $workspaceStore
      });
      sendUserToast(`Schedule ${path} will run now`, false, [
        {
          label: "Go to the run page",
          callback: () => goto("/run/" + run + "?workspace=" + $workspaceStore)
        }
      ]);
    } catch (err) {
      sendUserToast(`Cannot run schedule now: ${err.body}`, true);
    }
  }
  let scheduleEditor;
  let filteredItems = [];
  let items = [];
  let preFilteredItems = [];
  let filter = "";
  let ownerFilter = void 0;
  let nbDisplayed = 15;
  let filterEnabledDisabled = "all";
  let selectedFilterKind = getLocalSetting(SCHEDULE_PATH_KIND_FILTER_SETTING) ?? "schedule";
  let filterUserFolders = getLocalSetting(FILTER_USER_FOLDER_SETTING_NAME) == "true";
  function filterItemsPathsBaseOnUserFilters(item, selectedFilterKind2, filterUserFolders2) {
    if ($workspaceStore == "admins") return true;
    if (filterUserFolders2) {
      if (selectedFilterKind2 === "schedule") {
        return !item.path.startsWith("u/") || item.path.startsWith("u/" + $userStore?.username + "/");
      } else {
        return !item.script_path.startsWith("u/") || item.script_path.startsWith("u/" + $userStore?.username + "/");
      }
    } else {
      return true;
    }
  }
  function updateQueryFilters(selectedFilterKind2, filterUserFolders2, filterEnabledDisabled2) {
    setQuery(new URL(window.location.href), "filter_kind", selectedFilterKind2).then(() => {
      setQuery(new URL(window.location.href), "user_and_folders_only", String(filterUserFolders2)).then(() => {
        setQuery(new URL(window.location.href), "status", filterEnabledDisabled2);
      });
    });
  }
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        if ($workspaceStore && $userStore) {
          loadSchedules();
        }
      }
    }
    {
      storeLocalSetting(SCHEDULE_PATH_KIND_FILTER_SETTING, selectedFilterKind);
    }
    {
      storeLocalSetting(FILTER_USER_FOLDER_SETTING_NAME, filterUserFolders ? "true" : void 0);
    }
    {
      if ($workspaceStore) {
        ownerFilter = void 0;
      }
    }
    preFilteredItems = ownerFilter != void 0 ? selectedFilterKind === "schedule" ? schedules?.filter((x) => x.path.startsWith(ownerFilter + "/") && filterItemsPathsBaseOnUserFilters(x, selectedFilterKind, filterUserFolders) && filterItemsBasedOnEnabledDisabled(x, filterEnabledDisabled)) : schedules?.filter((x) => x.script_path.startsWith(ownerFilter + "/") && filterItemsPathsBaseOnUserFilters(x, selectedFilterKind, filterUserFolders) && filterItemsBasedOnEnabledDisabled(x, filterEnabledDisabled)) : schedules?.filter((x) => filterItemsPathsBaseOnUserFilters(x, selectedFilterKind, filterUserFolders) && filterItemsBasedOnEnabledDisabled(x, filterEnabledDisabled));
    owners = selectedFilterKind === "schedule" ? Array.from(new Set(filteredItems?.map((x) => x.path.split("/").slice(0, 2).join("/")) ?? [])).sort() : Array.from(new Set(filteredItems?.map((x) => x.script_path.split("/").slice(0, 2).join("/")) ?? [])).sort();
    items = preFilteredItems;
    {
      updateQueryFilters(selectedFilterKind, filterUserFolders, filterEnabledDisabled);
    }
    $$rendered = `${validate_component(ScheduleEditor, "ScheduleEditor").$$render(
      $$result,
      { this: scheduleEditor },
      {
        this: ($$value) => {
          scheduleEditor = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(SearchItems, "SearchItems").$$render(
      $$result,
      {
        filter,
        items: preFilteredItems,
        f: (x) => (x.summary ?? "") + " " + x.path + " (" + x.script_path + ")",
        filteredItems
      },
      {
        filteredItems: ($$value) => {
          filteredItems = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(CenteredPage, "CenteredPage").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(PageHeader, "PageHeader").$$render(
          $$result,
          {
            title: "Schedules",
            tooltip: "Trigger Scripts and Flows according to a cron schedule",
            documentationLink: "https://www.windmill.dev/docs/core_concepts/scheduling"
          },
          {},
          {
            default: () => {
              return `${validate_component(Button, "Button").$$render($$result, { size: "md", startIcon: { icon: Plus } }, {}, {
                default: () => {
                  return `New schedule`;
                }
              })}`;
            }
          }
        )} <div class="w-full h-full flex flex-col"><div class="w-full pb-4 pt-6"><input type="text" placeholder="Search schedule" class="search-item"${add_attribute("value", filter, 0)}> <div class="flex flex-row items-center gap-2 mt-6"><div class="text-sm shrink-0" data-svelte-h="svelte-e6mptc">Filter by path of</div> ${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
          $$result,
          { selected: selectedFilterKind },
          {
            selected: ($$value) => {
              selectedFilterKind = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `${validate_component(ToggleButton, "ToggleButton").$$render(
                $$result,
                {
                  small: true,
                  value: "schedule",
                  label: "Schedule",
                  icon: Calendar
                },
                {},
                {}
              )} ${validate_component(ToggleButton, "ToggleButton").$$render(
                $$result,
                {
                  small: true,
                  value: "script_flow",
                  label: "Script/Flow",
                  icon: Code
                },
                {},
                {}
              )}`;
            }
          }
        )}</div> ${validate_component(ListFilters, "ListFilters").$$render(
          $$result,
          {
            syncQuery: true,
            filters: owners,
            selectedFilter: ownerFilter
          },
          {
            selectedFilter: ($$value) => {
              ownerFilter = $$value;
              $$settled = false;
            }
          },
          {}
        )} <div class="flex flex-row items-center justify-end gap-4">${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
          $$result,
          {
            class: "h-6 w-auto",
            selected: filterEnabledDisabled
          },
          {
            selected: ($$value) => {
              filterEnabledDisabled = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `${validate_component(ToggleButton, "ToggleButton").$$render($$result, { small: true, value: "all", label: "All" }, {}, {})} ${validate_component(ToggleButton, "ToggleButton").$$render(
                $$result,
                {
                  small: true,
                  value: "enabled",
                  label: "Enabled"
                },
                {},
                {}
              )} ${validate_component(ToggleButton, "ToggleButton").$$render(
                $$result,
                {
                  small: true,
                  value: "disabled",
                  label: "Disabled"
                },
                {},
                {}
              )}`;
            }
          }
        )} ${$userStore?.is_super_admin && $userStore.username.includes("@") ? `${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            size: "xs",
            options: { right: "Only f/*" },
            checked: filterUserFolders
          },
          {
            checked: ($$value) => {
              filterUserFolders = $$value;
              $$settled = false;
            }
          },
          {}
        )}` : `${$userStore?.is_admin || $userStore?.is_super_admin ? `${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            size: "xs",
            options: {
              right: `Only u/${$userStore.username} and f/*`
            },
            checked: filterUserFolders
          },
          {
            checked: ($$value) => {
              filterUserFolders = $$value;
              $$settled = false;
            }
          },
          {}
        )}` : ``}`}</div></div> ${loading ? `${each(new Array(6), (_) => {
          return `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[6], 0.4] }, {}, {})}`;
        })}` : `${!schedules?.length ? `<div class="text-center text-sm text-tertiary mt-2" data-svelte-h="svelte-8iqnrt">No schedules</div>` : `${items?.length ? `<div class="border rounded-md divide-y">${each(items.slice(0, nbDisplayed), ({ path, error, summary, edited_by, edited_at, schedule, timezone, enabled, script_path, is_flow, extra_perms, canWrite: canWrite2, args, marked, jobs, paused_until }) => {
          let href = `${is_flow ? "/flows/get" : "/scripts/get"}/${script_path}`, avg_s = jobs ? jobs.reduce((acc, x) => acc + x.duration_ms, 0) / jobs.length : void 0;
          return `  <div class="hover:bg-surface-hover w-full items-center px-4 py-2 gap-4 first-of-type:!border-t-0 first-of-type:rounded-t-md last-of-type:rounded-b-md flex flex-col"><div class="w-full flex gap-5 items-center">${validate_component(RowIcon, "RowIcon").$$render($$result, { kind: is_flow ? "flow" : "script" }, {}, {})} <a href="${"#" + escape(path, true)}" class="min-w-0 grow hover:underline decoration-gray-400"><div class="text-primary flex-wrap text-left text-md font-semibold mb-1 truncate">${marked ? `<span class="text-xs"><!-- HTML_TAG_START -->${marked}<!-- HTML_TAG_END --> </span>` : `${escape(summary || script_path)}`}</div> <div class="text-secondary text-xs truncate text-left font-light">schedule: ${escape(path)} </div></a> ${paused_until && new Date(paused_until) > /* @__PURE__ */ new Date() ? `<div class="pb-1">${validate_component(Badge, "Badge").$$render($$result, { color: "yellow" }, {}, {
            default: () => {
              return `Paused until ${escape(new Date(paused_until).toLocaleString())}`;
            }
          })} </div>` : ``} <div class="gap-2 items-center hidden md:flex">${validate_component(Badge, "Badge").$$render($$result, { large: true, color: "blue" }, {}, {
            default: () => {
              return `${escape(schedule)}`;
            }
          })} ${validate_component(Badge, "Badge").$$render($$result, { small: true, color: "gray" }, {}, {
            default: () => {
              return `${escape(timezone)}`;
            }
          })}</div> <div class="hidden lg:flex flex-row gap-1 items-center">${validate_component(SharedBadge, "SharedBadge").$$render($$result, { canWrite: canWrite2, extraPerms: extra_perms }, {}, {})}</div> <div class="w-10">${error ? `${validate_component(Popover, "Popover").$$render($$result, { notClickable: true }, {}, {
            text: () => {
              return `<div slot="text">The schedule disabled itself because there was an error scheduling the next
											job: ${escape(error)} </div>`;
            },
            default: () => {
              return `<span class="flex h-4 w-4">${validate_component(Circle, "Circle").$$render(
                $$result,
                {
                  class: "text-red-600 animate-ping absolute inline-flex fill-current",
                  size: 12
                },
                {},
                {}
              )} ${validate_component(Circle, "Circle").$$render(
                $$result,
                {
                  class: "text-red-600 relative inline-flex fill-current",
                  size: 12
                },
                {},
                {}
              )}</span> `;
            }
          })}` : ``}</div> ${validate_component(Toggle, "Toggle").$$render($$result, { checked: enabled }, {}, {})} <div class="flex gap-2 items-center justify-end">${validate_component(Button, "Button").$$render(
            $$result,
            {
              href: `${base}/runs/?schedule_path=${path}`,
              size: "xs",
              startIcon: { icon: List },
              color: "light",
              variant: "border"
            },
            {},
            {
              default: () => {
                return `Runs
								`;
              }
            }
          )} ${validate_component(Button, "Button").$$render(
            $$result,
            {
              size: "xs",
              startIcon: { icon: Pen },
              color: "dark"
            },
            {},
            {
              default: () => {
                return `Edit
								`;
              }
            }
          )} ${validate_component(DropdownV2, "Dropdown").$$render(
            $$result,
            {
              items: [
                {
                  displayName: `View ${is_flow ? "Flow" : "Script"}`,
                  icon: Eye,
                  action: () => {
                    goto(href);
                  }
                },
                {
                  displayName: "Delete",
                  type: "delete",
                  icon: Trash,
                  disabled: !canWrite2,
                  action: async () => {
                    await ScheduleService.deleteSchedule({ workspace: $workspaceStore ?? "", path });
                    loadSchedules();
                  }
                },
                {
                  displayName: "Edit",
                  icon: Pen,
                  disabled: !canWrite2,
                  action: () => {
                    scheduleEditor?.openEdit(path, is_flow);
                  }
                },
                {
                  displayName: "View runs",
                  icon: List,
                  href: base + "/runs/?schedule_path=" + path + "&show_schedules=true&show_future_jobs=true"
                },
                {
                  displayName: "Audit logs",
                  icon: Eye,
                  href: `${base}/audit_logs?resource=${path}`
                },
                {
                  displayName: "Run now",
                  icon: Play,
                  action: () => {
                    runScheduleNow(script_path, args, is_flow);
                  }
                },
                {
                  displayName: canWrite2 ? "Share" : "See Permissions",
                  icon: Share,
                  action: () => {
                    shareModal.openDrawer(path, "schedule");
                  }
                }
              ]
            },
            {},
            {}
          )} </div></div> <div class="w-full flex justify-between items-baseline">${loadingSchedulesWithJobStats ? `<div class="flex gap-1 ml-0.5 text-[0.7em] text-tertiary items-center">${validate_component(Loader_2, "Loader2").$$render($$result, { size: 14, class: "animate-spin" }, {}, {})} <span data-svelte-h="svelte-so92a8">Job stats loading...</span> </div>` : `<div class="flex gap-1.5 ml-0.5 items-baseline flex-row-reverse">${avg_s ? `<div class="pl-2 text-tertiary text-2xs">Avg: ${escape((avg_s / 1e3).toFixed(2))}s</div>` : ``} ${each(jobs ?? [], (job) => {
            let h = (avg_s ? job.duration_ms / avg_s : 1) * 7 + 3;
            return ` <a href="${escape(base, true) + "/run/" + escape(job.id, true) + "?workspace=" + escape($workspaceStore, true)}">${validate_component(JobPreview, "JobPreview").$$render($$result, { id: job.id }, {}, {
              default: () => {
                return `<div><div class="${escape(job.success ? "bg-green-300" : "bg-red-300", true) + " mx-auto w-1.5"}" style="${"height: " + escape(h, true) + "px"}"></div> </div> `;
              }
            })} </a>`;
          })} </div>`} <div class="flex flex-wrap text-[0.7em] text-tertiary gap-1 items-center justify-end truncate pr-2"><div class="truncate">edited by ${escape(edited_by)}</div><div class="truncate">the ${escape(displayDate(edited_at))}</div></div></div> </div>`;
        })}</div>` : `${validate_component(NoItemFound, "NoItemFound").$$render($$result, {}, {}, {})}`}`}`}</div> ${items && items?.length > 15 && nbDisplayed < items.length ? `<span class="text-xs">${escape(nbDisplayed)} items out of ${escape(items.length)} <button class="ml-4" data-svelte-h="svelte-az4ajw">load 30 more</button></span>` : ``}`;
      }
    })} ${validate_component(ShareModal, "ShareModal").$$render(
      $$result,
      { this: shareModal },
      {
        this: ($$value) => {
          shareModal = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_userStore();
  return $$rendered;
});
export {
  Page as default
};
