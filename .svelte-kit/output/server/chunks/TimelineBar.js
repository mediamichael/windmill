import { c as create_ssr_component, v as validate_component, s as subscribe, d as createEventDispatcher, o as onDestroy, e as escape, b as add_attribute, f as each } from "./ssr.js";
import { t as tick, D as DataTable, H as Head, C as Cell } from "./Head.js";
import { J as JobService } from "./services.gen.js";
import { w as workspaceStore } from "./stores2.js";
import { s as sendUserToast, B as Button, R as pluralize, P as Portal, Z as roughSizeOfObject, m as msToSec } from "./toast.js";
import { b as base } from "./base.js";
import { A as Alert } from "./Alert.js";
import { D as Drawer, a as DrawerContent } from "./DrawerContent.js";
import "./common.js";
import { D as Download, P as Panel_right_open, O as ObjectViewer, c as S3FilePicker } from "./LightweightSchemaForm.js";
import { D as DropdownV2, M as More_vertical } from "./DropdownV2.js";
import { R as Row } from "./Row.js";
import { B as Badge } from "./Badge.js";
import { Parser } from "@json2csv/plainjs";
import { P as Popover, E as External_link } from "./Popover.js";
import { D as DarkModeObserver } from "./DarkModeObserver.js";
import "./index2.js";
import "yaml";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import "minimatch";
/* empty css                                     */
/* empty css                                        */
import { C as Columns } from "./columns.js";
import { I as Icon } from "./Icon.js";
import { I as Info, T as Tooltip, M as Markdown } from "./Tooltip.js";
import { T as Toggle } from "./Toggle.js";
import "ag-grid-community";
import { twMerge } from "tailwind-merge";
import { T as ToggleButtonGroup, a as ToggleButton } from "./ToggleButtonGroup.js";
import "ol/proj.js";
import { H as HighlightTheme, a as Highlight, j as json } from "./SchemaViewer.js";
import { T as Table_2 } from "./table-2.js";
import { B as Braces } from "./braces.js";
import { a as Clipboard_copy } from "./util.js";
import { E as Expand } from "./expand.js";
import AnsiUp from "ansi_up";
import { N as NoWorkerWithTagWarning } from "./NoWorkerWithTagWarning.js";
import { L as Loader_2 } from "./loader-2.js";
const Arrow_down_from_line = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M19 3H5" }],
    ["path", { "d": "M12 21V7" }],
    ["path", { "d": "m6 15 6 6 6-6" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "arrow-down-from-line" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Arrow_up = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m5 12 7-7 7 7" }], ["path", { "d": "M12 19V5" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "arrow-up" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Highlighter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "m9 11-6 6v3h9l3-3" }],
    [
      "path",
      {
        "d": "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "highlighter" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Move_vertical = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["polyline", { "points": "8 18 12 22 16 18" }],
    ["polyline", { "points": "8 6 12 2 16 6" }],
    [
      "line",
      {
        "x1": "12",
        "x2": "12",
        "y1": "2",
        "y2": "22"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "move-vertical" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
let ITERATIONS_BEFORE_SLOW_REFRESH = 10;
let ITERATIONS_BEFORE_SUPER_SLOW_REFRESH = 100;
const TestJobLoader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let workspace;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { isLoading = false } = $$props;
  let { job = void 0 } = $$props;
  let { workspaceOverride = void 0 } = $$props;
  let { notfound = false } = $$props;
  let { jobUpdateLastFetch = void 0 } = $$props;
  let { toastError = false } = $$props;
  let { lazyLogs = false } = $$props;
  const dispatch = createEventDispatcher();
  let syncIteration = 0;
  let errorIteration = 0;
  let logOffset = 0;
  let lastStartedAt = Date.now();
  let currentId = void 0;
  async function abstractRun(fn) {
    try {
      isLoading = true;
      clearCurrentJob();
      const startedAt = Date.now();
      const testId = await fn();
      if (lastStartedAt < startedAt) {
        lastStartedAt = startedAt;
        if (testId) {
          try {
            await watchJob(testId);
          } catch {
            if (currentId === testId) {
              currentId = void 0;
            }
          }
        }
      }
      return testId;
    } catch (err) {
      if (toastError) {
        sendUserToast(err.body, true);
      }
      isLoading = false;
      currentId = void 0;
      job = void 0;
      throw err;
    }
  }
  async function runScriptByPath(path, args) {
    return abstractRun(() => JobService.runScriptByPath({
      workspace: $workspaceStore,
      path: path ?? "",
      requestBody: args
    }));
  }
  async function runFlowByPath(path, args) {
    return abstractRun(() => JobService.runFlowByPath({
      workspace: $workspaceStore,
      path: path ?? "",
      requestBody: args
    }));
  }
  async function getLogs() {
    if (job) {
      const getUpdate = await JobService.getJobUpdates({
        workspace,
        id: job.id,
        running: `running` in job && job.running,
        logOffset: job.logs?.length ?? 0
      });
      if ((job.logs ?? "").length == 0) {
        job.logs = getUpdate.new_logs ?? "";
        logOffset = getUpdate.log_offset ?? 0;
      }
    }
  }
  async function runPreview(path, code, lang, args, tag, lock) {
    return abstractRun(() => JobService.runScriptPreview({
      workspace: $workspaceStore,
      requestBody: {
        path,
        content: code,
        args,
        language: lang,
        tag,
        lock
      }
    }));
  }
  async function cancelJob() {
    const id = currentId;
    if (id) {
      dispatch("cancel", id);
      currentId = void 0;
      try {
        await JobService.cancelQueuedJob({
          workspace: $workspaceStore ?? "",
          id,
          requestBody: {}
        });
      } catch (err) {
        console.error(err);
      }
    }
  }
  async function clearCurrentJob() {
    if (currentId) {
      job = void 0;
      await cancelJob();
    }
  }
  async function watchJob(testId) {
    logOffset = 0;
    syncIteration = 0;
    errorIteration = 0;
    currentId = testId;
    job = void 0;
    const isCompleted = await loadTestJob(testId);
    if (!isCompleted) {
      setTimeout(
        () => {
          syncer(testId);
        },
        50
      );
    }
  }
  async function loadTestJob(id) {
    let isCompleted = false;
    if (currentId === id) {
      try {
        if (job && `running` in job) {
          const offset = logOffset == 0 ? job.logs?.length ? job.logs?.length + 1 : 0 : logOffset;
          let previewJobUpdates = await JobService.getJobUpdates({
            workspace,
            id,
            running: job.running,
            logOffset: offset
          });
          if (previewJobUpdates.new_logs) {
            if (offset == 0) {
              job.logs = previewJobUpdates.new_logs ?? "";
            } else {
              job.logs = (job?.logs ?? "").concat(previewJobUpdates.new_logs);
            }
          }
          if (previewJobUpdates.log_offset) {
            logOffset = previewJobUpdates.log_offset ?? 0;
          }
          if (previewJobUpdates.flow_status) {
            job.flow_status = previewJobUpdates.flow_status;
          }
          if (previewJobUpdates.mem_peak && job) {
            job.mem_peak = previewJobUpdates.mem_peak;
          }
          if ((previewJobUpdates.running ?? false) || (previewJobUpdates.completed ?? false)) {
            job = await JobService.getJob({ workspace, id });
          }
        } else {
          job = await JobService.getJob({ workspace, id, noLogs: lazyLogs });
        }
        jobUpdateLastFetch = /* @__PURE__ */ new Date();
        if (job?.type === "CompletedJob") {
          isCompleted = true;
          if (currentId === id) {
            await tick();
            dispatch("done", job);
            currentId = void 0;
          }
        }
        notfound = false;
      } catch (err) {
        errorIteration += 1;
        if (errorIteration == 5) {
          notfound = true;
          job = void 0;
        }
        console.warn(err);
      }
      return isCompleted;
    } else {
      return true;
    }
  }
  async function syncer(id) {
    if (currentId != id) {
      dispatch("cancel", id);
      return;
    }
    syncIteration++;
    if (await loadTestJob(id)) {
      return;
    }
    let nextIteration = 50;
    if (syncIteration > ITERATIONS_BEFORE_SLOW_REFRESH) {
      nextIteration = 500;
    } else if (syncIteration > ITERATIONS_BEFORE_SUPER_SLOW_REFRESH) {
      nextIteration = 2e3;
    }
    setTimeout(() => syncer(id), nextIteration);
  }
  onDestroy(async () => {
    currentId = void 0;
  });
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading !== void 0) $$bindings.isLoading(isLoading);
  if ($$props.job === void 0 && $$bindings.job && job !== void 0) $$bindings.job(job);
  if ($$props.workspaceOverride === void 0 && $$bindings.workspaceOverride && workspaceOverride !== void 0) $$bindings.workspaceOverride(workspaceOverride);
  if ($$props.notfound === void 0 && $$bindings.notfound && notfound !== void 0) $$bindings.notfound(notfound);
  if ($$props.jobUpdateLastFetch === void 0 && $$bindings.jobUpdateLastFetch && jobUpdateLastFetch !== void 0) $$bindings.jobUpdateLastFetch(jobUpdateLastFetch);
  if ($$props.toastError === void 0 && $$bindings.toastError && toastError !== void 0) $$bindings.toastError(toastError);
  if ($$props.lazyLogs === void 0 && $$bindings.lazyLogs && lazyLogs !== void 0) $$bindings.lazyLogs(lazyLogs);
  if ($$props.abstractRun === void 0 && $$bindings.abstractRun && abstractRun !== void 0) $$bindings.abstractRun(abstractRun);
  if ($$props.runScriptByPath === void 0 && $$bindings.runScriptByPath && runScriptByPath !== void 0) $$bindings.runScriptByPath(runScriptByPath);
  if ($$props.runFlowByPath === void 0 && $$bindings.runFlowByPath && runFlowByPath !== void 0) $$bindings.runFlowByPath(runFlowByPath);
  if ($$props.getLogs === void 0 && $$bindings.getLogs && getLogs !== void 0) $$bindings.getLogs(getLogs);
  if ($$props.runPreview === void 0 && $$bindings.runPreview && runPreview !== void 0) $$bindings.runPreview(runPreview);
  if ($$props.cancelJob === void 0 && $$bindings.cancelJob && cancelJob !== void 0) $$bindings.cancelJob(cancelJob);
  if ($$props.clearCurrentJob === void 0 && $$bindings.clearCurrentJob && clearCurrentJob !== void 0) $$bindings.clearCurrentJob(clearCurrentJob);
  if ($$props.watchJob === void 0 && $$bindings.watchJob && watchJob !== void 0) $$bindings.watchJob(watchJob);
  workspace = workspaceOverride ?? $workspaceStore;
  isLoading = currentId !== void 0;
  $$unsubscribe_workspaceStore();
  return `${slots.default ? slots.default({
    job,
    isLoading,
    workspaceOverride,
    notfound,
    abstractRun,
    runScriptByPath,
    runFlowByPath,
    runPreview,
    cancelJob,
    clearCurrentJob,
    watchJob,
    loadTestJob,
    syncer
  }) : ``}`;
});
function isLink(value) {
  return value?.startsWith("http://") || value?.startsWith("https://");
}
function isEmail(value) {
  return value?.includes("@");
}
function computeStructuredObjectsAndHeaders(objects) {
  if (Array.isArray(objects)) {
    let nextId = 1;
    let hds = [];
    let objs = objects.map((obj) => {
      let rowData = obj && typeof obj == "object" ? obj : {};
      if (Array.isArray(rowData)) {
        rowData = Object.fromEntries(rowData.map((x, i) => ["col" + i, x]));
      }
      let ks = Object.keys(rowData);
      ks.forEach((x) => {
        if (!hds.includes(x)) {
          hds.push(x);
        }
      });
      return {
        _id: nextId++,
        rowData
      };
    });
    return [hds, objs];
  } else {
    return [[], []];
  }
}
function convertJsonToCsv(arr) {
  try {
    const parser = new Parser({});
    const csv = parser.parse(arr);
    return csv;
  } catch (err) {
    throw new Error("An error occured when generating CSV:" + err);
  }
}
const DownloadCsv = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { getContent } = $$props;
  let { customText = void 0 } = $$props;
  if ($$props.getContent === void 0 && $$bindings.getContent && getContent !== void 0) $$bindings.getContent(getContent);
  if ($$props.customText === void 0 && $$bindings.customText && customText !== void 0) $$bindings.customText(customText);
  return `${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: "xs",
      color: "light",
      startIcon: { icon: Download }
    },
    {},
    {
      default: () => {
        return `${escape(customText || "Download as CSV")}`;
      }
    }
  )}`;
});
const css$1 = {
  code: ".three-lines.svelte-himjhr{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}",
  map: null
};
function sortObjects(activeSorting, objects, getRowData) {
  {
    return objects;
  }
}
function computeData(structuredObjects, activeSorting, search) {
  let objects = structuredObjects;
  {
    objects = [...objects];
  }
  return sortObjects(activeSorting, objects);
}
const AutoDataTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data;
  let slicedData;
  let { objects = [] } = $$props;
  let currentPage = 1;
  let perPage = 25;
  let search = "";
  let structuredObjects = [];
  let headers = [];
  function recomputeObjectsAndHeaders(objects2) {
    [headers, structuredObjects] = computeStructuredObjectsAndHeaders(objects2);
  }
  function adjustCurrentPage() {
    const totalItems = objects.length;
    const totalPages = Math.ceil(totalItems / perPage);
    if (currentPage > totalPages) {
      currentPage = totalPages > 0 ? totalPages : 1;
    }
  }
  let activeSorting = void 0;
  let selection = [];
  let colSelection = [];
  const badgeColors = ["gray", "blue", "green", "yellow", "indigo"];
  const darkBadgeColors = ["dark-gray", "dark-blue", "dark-green", "dark-yellow", "dark-indigo"];
  let darkMode = false;
  let wrapperWidth = 0;
  if ($$props.objects === void 0 && $$bindings.objects && objects !== void 0) $$bindings.objects(objects);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      recomputeObjectsAndHeaders(objects);
    }
    perPage && adjustCurrentPage();
    data = computeData(structuredObjects, activeSorting);
    slicedData = data.slice((currentPage - 1) * perPage, currentPage * perPage);
    $$rendered = `${validate_component(DarkModeObserver, "DarkModeObserver").$$render(
      $$result,
      { darkMode },
      {
        darkMode: ($$value) => {
          darkMode = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="w-full"><div class="flex flex-col gap-2 py-1 my-1"${add_attribute("style", `max-width: ${wrapperWidth}px;`, 0)}><div class="flex flex-row justify-between items-center gap-2"><div class="flex flex-row gap-2 items-center whitespace-nowrap w-full"><input placeholder="Search..." class="h-8 !text-xs"${add_attribute("value", search, 0)}> ${selection.length > 0 ? `<span class="text-xs text-gray-500 dark:text-gray-200">${escape(pluralize(selection?.length ?? 1, "item") + " selected")}</span>` : ``}</div> <div class="flex flex-row items-center gap-2">${validate_component(DownloadCsv, "DownloadCsv").$$render(
      $$result,
      {
        getContent: () => {
          return convertJsonToCsv(selection.length > 0 ? sortObjects(activeSorting, structuredObjects).filter(({ _id }) => selection.includes(_id)).map((obj) => colSelection.length == 0 ? obj.rowData : Object.fromEntries(Object.entries(obj.rowData).filter(([key, _]) => colSelection.includes(key)))) : colSelection.length == 0 ? sortObjects(activeSorting, objects) : sortObjects(activeSorting, objects).map((obj) => Object.fromEntries(Object.entries(obj).filter(([key, _]) => colSelection.includes(key)))));
        },
        customText: selection.length > 0 || colSelection.length > 0 ? "Download selected as CSV" : void 0
      },
      {},
      {}
    )} ${validate_component(DropdownV2, "Dropdown").$$render(
      $$result,
      {
        items: () => {
          const actions = [
            {
              displayName: "Download JSON",
              icon: Download,
              action: () => {
                const json2 = JSON.stringify(objects, null, 2);
                const blob = new Blob([json2], { type: "text/json;charset=utf-8;" });
                const url = URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.setAttribute("href", url);
                link.setAttribute("download", "data.json");
                link.style.visibility = "hidden";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }
            }
          ];
          if (selection.length > 0) {
            actions.push({
              displayName: "Clear selection",
              icon: Columns,
              action: () => {
                colSelection = [];
                selection = [];
              }
            });
          }
          return actions;
        }
      },
      {},
      {
        buttonReplacement: () => {
          return `${validate_component(More_vertical, "MoreVertical").$$render(
            $$result,
            {
              size: 8,
              class: "w-8 h-8 p-2 hover:bg-surface-hover cursor-pointer rounded-md"
            },
            {},
            {}
          )}`;
        }
      }
    )}</div></div> ${data.length == 0 ? `<div class="flex flex-col items-center justify-center border rounded-md py-8" data-svelte-h="svelte-10vdho9"><div class="text-gray-500 dark:text-gray-200 text-sm">No data found</div> <div class="text-gray-500 dark:text-gray-200 text-xs">Try changing your search query</div></div>` : `${validate_component(DataTable, "DataTable").$$render(
      $$result,
      {
        size: "sm",
        shouldHidePagination: false,
        paginated: true,
        showNext: currentPage * perPage < objects.length,
        rowCount: data.length,
        currentPage,
        perPage
      },
      {
        currentPage: ($$value) => {
          currentPage = $$value;
          $$settled = false;
        },
        perPage: ($$value) => {
          perPage = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
            default: () => {
              return `<tr>${validate_component(Cell, "Cell").$$render($$result, { head: true, first: true, last: false }, {}, {
                default: () => {
                  return `<input type="checkbox" class="!w-4 !h-4">`;
                }
              })} ${each(headers ?? [], (key, index) => {
                return `${validate_component(Cell, "Cell").$$render(
                  $$result,
                  {
                    head: true,
                    last: index == headers.length - 1
                  },
                  {},
                  {
                    default: () => {
                      return `<div class="flex flex-row gap-1 items-center">${escape(key)} ${activeSorting?.column === key ? `<button class="p-1 w-6 h-6 flex justify-center items-center">${`${validate_component(Arrow_up, "ArrowUp").$$render($$result, { size: "16" }, {}, {})}`} </button>` : `<button class="p-1 w-6 h-6 flex justify-center items-center">${validate_component(Move_vertical, "MoveVertical").$$render(
                        $$result,
                        {
                          size: "16",
                          class: " hover:text-gray-600 text-gray-400"
                        },
                        {},
                        {}
                      )} </button>`} <input type="checkbox" class="!w-4 !h-4" ${colSelection.includes(key) ? "checked" : ""}></div> `;
                    }
                  }
                )}`;
              })}</tr>`;
            }
          })} <tbody class="divide-y">${each(slicedData.filter((x) => x), ({ _id, rowData }, index) => {
            return `${validate_component(Row, "Row").$$render(
              $$result,
              {
                dividable: true,
                selected: selection.includes(_id) && colSelection.length == 0
              },
              {},
              {
                default: () => {
                  return `${validate_component(Cell, "Cell").$$render($$result, { first: true, last: false, class: "w-6" }, {}, {
                    default: () => {
                      return `<input type="checkbox" class="!w-4 !h-4" ${selection.includes(_id) ? "checked" : ""}> `;
                    }
                  })} ${each(headers, (key, index2) => {
                    let value = rowData[key];
                    return ` ${validate_component(Cell, "Cell").$$render(
                      $$result,
                      {
                        selected: colSelection.includes(key) && (selection.length == 0 || selection.includes(_id)),
                        last: index2 == Object.values(rowData ?? {}).length - 1
                      },
                      {},
                      {
                        default: () => {
                          return `${Array.isArray(value) && value.length === 0 ? `<div></div>` : `${Array.isArray(value) && typeof value?.[0] === "string" ? `<div class="flex flex-row gap-1 w-full max-w-32 flex-wrap min-w-32">${each(value, (item, index3) => {
                            return `${validate_component(Badge, "Badge").$$render(
                              $$result,
                              {
                                color: darkMode ? darkBadgeColors[index3 % darkBadgeColors.length] : badgeColors[index3 % badgeColors.length]
                              },
                              {},
                              {
                                default: () => {
                                  return `${escape(item)} `;
                                }
                              }
                            )}`;
                          })} </div>` : `${Array.isArray(value) && typeof value?.[0] === "number" ? `<div class="flex flex-row gap-1 w-full max-w-32 flex-wrap min-w-32">${each(value, (val) => {
                            return `<div class="p-2 bg-surface-secondary rounded-md text-2xs text-wrap whitespace-pre-wrap flex flex-grow w-max overflow-hidden">${escape(JSON.stringify(val, null, 2))} </div>`;
                          })} </div>` : `${Array.isArray(value) ? `<div class="flex flex-row gap-1 w-full flex-wrap min-w-96">${each(value, (val) => {
                            return `<div class="p-2 bg-surface-secondary rounded-md text-2xs text-wrap whitespace-pre-wrap flex flex-grow w-max overflow-hidden">${escape(JSON.stringify(val, null, 2))} </div>`;
                          })} </div>` : `${typeof value === "string" && isEmail(value) ? `<a${add_attribute("href", `mailto:${value}`, 0)} class="hover:underline">${escape(value)} </a>` : `${typeof value === "string" && isLink(value) ? `<a${add_attribute("href", value, 0)} target="_blank" class="hover:underline">${escape(value)} </a>` : (() => {
                            let txt = value == void 0 || value == null ? "" : typeof value != "string" ? JSON.stringify(value) : value;
                            return ` ${validate_component(Popover, "Popover").$$render(
                              $$result,
                              {
                                placement: "bottom",
                                notClickable: true,
                                disablePopup: typeof value === "string" && value.length < 100
                              },
                              {},
                              {
                                text: () => {
                                  return `${escape(txt)}`;
                                },
                                default: () => {
                                  return `<div class="max-w-80 text-wrap whitespace-pre-wrap flex flex-grow w-max three-lines cursor-text svelte-himjhr">${escape(txt?.length > 100 ? txt.slice(0, 100) + "..." : txt)}</div> `;
                                }
                              }
                            )}`;
                          })()}`}`}`}`}`} `;
                        }
                      }
                    )}`;
                  })} `;
                }
              }
            )}`;
          })}</tbody>`;
        }
      }
    )}`}</div> </div>`;
  } while (!$$settled);
  return $$rendered;
});
const FileDownload = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { s3object } = $$props;
  if ($$props.s3object === void 0 && $$bindings.s3object && s3object !== void 0) $$bindings.s3object(s3object);
  $$unsubscribe_workspaceStore();
  return `<a class="relative center-center flex w-full text-center font-normal text-tertiary text-sm border border-dashed border-gray-400 hover:border-blue-500 focus-within:border-blue-500 hover:bg-blue-50 dark:hover:bg-frost-900 focus-within:bg-blue-50 duration-200 rounded-lg p-1 gap-2"${add_attribute(
    "href",
    `${base}/api/w/${$workspaceStore}/job_helpers/download_s3_file?file_key=${s3object?.s3}${s3object?.storage ? `&storage=${s3object.storage}` : ""}`,
    0
  )}${add_attribute("download", s3object?.s3.split("/").pop() ?? "unnamed_download.file", 0)}>${validate_component(Download, "Download").$$render($$result, {}, {}, {})} <span>s3://${escape(s3object.s3)} ${escape(s3object.storage ? ` (${s3object.storage})` : "")}</span></a>`;
});
const ParqetCsvTableRenderer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  let { s3resource } = $$props;
  let { storage } = $$props;
  let { workspaceId } = $$props;
  let { disable_download = false } = $$props;
  let eGui;
  let darkMode = false;
  if ($$props.s3resource === void 0 && $$bindings.s3resource && s3resource !== void 0) $$bindings.s3resource(s3resource);
  if ($$props.storage === void 0 && $$bindings.storage && storage !== void 0) $$bindings.storage(storage);
  if ($$props.workspaceId === void 0 && $$bindings.workspaceId && workspaceId !== void 0) $$bindings.workspaceId(workspaceId);
  if ($$props.disable_download === void 0 && $$bindings.disable_download && disable_download !== void 0) $$bindings.disable_download(disable_download);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(DarkModeObserver, "DarkModeObserver").$$render(
      $$result,
      { darkMode },
      {
        darkMode: ($$value) => {
          darkMode = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div${add_attribute("class", twMerge("mt-2 flex flex-col h-full min-h-[600px]"), 0)}>${s3resource.endsWith(".csv") ? `<div class="flex flex-row-reverse w-full"><div class="flex items-baseline"><label for="csvSeparatorChar" class="text-2xs text-secondary" data-svelte-h="svelte-xiutj4">Separator</label> <div class="w-12 ml-2 mr-2"><select class="h-8"><option value="," data-svelte-h="svelte-1oq6dhq">,</option><option value=";" data-svelte-h="svelte-zl12hk">;</option><option value="\\t" data-svelte-h="svelte-14z0q1a">\\t</option><option value="|" data-svelte-h="svelte-1f29t5a">|</option></select></div></div></div>` : ``} ${!disable_download && !s3resource.endsWith(".csv") ? `<a target="_blank" href="${escape(base, true) + "/api/w/" + escape(workspaceId, true) + "/job_helpers/download_s3_parquet_file_as_csv?file_key=" + escape(s3resource, true) + escape(storage ? `&storage=${storage}` : "", true)}" class="text-secondary w-full text-right underline text-2xs whitespace-nowrap"><div class="flex flex-row-reverse gap-2 items-center">${validate_component(Download, "Download").$$render($$result, { size: 12 }, {}, {})} CSV</div></a>` : ``} <div class="${["ag-theme-alpine shadow-sm h-full", darkMode ? "ag-theme-alpine-dark" : ""].join(" ").trim()}" style="height: 600px;"${add_attribute("this", eGui, 0)}>${``}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const css = {
  code: ".ol-overlaycontainer-stopevent{align-items:flex-end;display:flex;flex-direction:column;justify-content:flex-start}.ol-control button{--tw-bg-opacity:1;--tw-text-opacity:1;--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);align-items:center;background-color:rgb(var(--color-surface)/var(--tw-bg-opacity));border-radius:.25rem;border-width:1px;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);color:rgb(var(--color-text-secondary)/var(--tw-text-opacity));display:flex;height:1.75rem;justify-content:center;margin-right:.25rem;margin-top:.25rem;transition-duration:.2s;width:1.75rem}.ol-control button:focus,.ol-control button:hover{--tw-bg-opacity:1;background-color:rgb(var(--color-surface-hover)/var(--tw-bg-opacity))}",
  map: null
};
const MapResult = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { lon = void 0 } = $$props;
  let { lat = void 0 } = $$props;
  let { zoom = void 0 } = $$props;
  let { markers = void 0 } = $$props;
  let mapElement = void 0;
  if ($$props.lon === void 0 && $$bindings.lon && lon !== void 0) $$bindings.lon(lon);
  if ($$props.lat === void 0 && $$bindings.lat && lat !== void 0) $$bindings.lat(lat);
  if ($$props.zoom === void 0 && $$bindings.zoom && zoom !== void 0) $$bindings.zoom(zoom);
  if ($$props.markers === void 0 && $$bindings.markers && markers !== void 0) $$bindings.markers(markers);
  $$result.css.add(css);
  return `<div class="w-full h-[300px]"${add_attribute("this", mapElement, 0)}></div>`;
});
const IMG_MAX_SIZE = 1e7;
const TABLE_MAX_SIZE = 5e6;
const DISPLAY_MAX_SIZE = 1e5;
function isTableRow(result) {
  return Array.isArray(result) && result.every((x) => Array.isArray(x));
}
function isTableCol(result, keys) {
  return !Array.isArray(result) && keys.map((k) => Array.isArray(result[k])).reduce((a, b) => a && b, true);
}
function isTableRowObject(json2) {
  return Array.isArray(json2) && json2.length > 0 && (json2.every((item) => item && typeof item === "object" && Object.keys(item).length > 0 && !Array.isArray(item)) || Array.isArray(json2[0]) && json2[0].every((item) => typeof item === "string") && json2.slice(1).every((item) => item && typeof item === "object" && Object.keys(item).length > 0 && !Array.isArray(item)));
}
function checkIfS3(result, keys) {
  return keys.includes("s3") && typeof result.s3 === "string";
}
function toJsonStr(result) {
  return JSON.stringify(result ?? null, null, 4) ?? "null";
}
function contentOrRootString(obj) {
  if (typeof obj === "string") {
    return obj;
  } else {
    return obj.content;
  }
}
function handleArrayOfObjectsHeaders(json2) {
  if (Array.isArray(json2) && json2.length > 0 && Array.isArray(json2[0]) && json2[0].every((item) => typeof item === "string") && json2.slice(1).every((item) => item && typeof item === "object" && Object.keys(item).length > 0 && !Array.isArray(item))) {
    const headers = json2[0];
    const rows = json2.slice(1);
    const result = rows.map((row) => {
      const obj = {};
      for (const header of headers) {
        obj[header] = row[header];
      }
      return obj;
    });
    return result;
  }
  return json2;
}
function objectOfArraysToObjects(input) {
  const maxLength = Math.max(...Object.values(input).map((arr) => arr.length));
  const result = [];
  for (let i = 0; i < maxLength; i++) {
    const obj = {};
    for (const key of Object.keys(input)) {
      if (i < input[key].length) {
        obj[key] = input[key][i];
      } else {
        obj[key] = null;
      }
    }
    result.push(obj);
  }
  return result;
}
function arrayOfRowsToObjects(input) {
  if (Array.isArray(input) && input.length > 0) {
    if (input.length > 1 && Array.isArray(input[0]) && input[0].every((item) => typeof item === "string")) {
      const headers = input[0];
      const rows = input.slice(1);
      return rows.map((row) => {
        const obj = {};
        for (let i = 0; i < headers.length; i++) {
          obj[headers[i]] = row[i];
        }
        return obj;
      });
    } else {
      return input;
    }
  }
  return [];
}
const DisplayResult = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { result } = $$props;
  let { requireHtmlApproval = false } = $$props;
  let { filename = void 0 } = $$props;
  let { disableExpand = false } = $$props;
  let { jobId = void 0 } = $$props;
  let { workspaceId = void 0 } = $$props;
  let { hideAsJson = false } = $$props;
  let { noControls = false } = $$props;
  let { drawerOpen = false } = $$props;
  let { nodeId = void 0 } = $$props;
  let resultKind;
  let { forceJson = false } = $$props;
  let enableHtml = false;
  let s3FileDisplayRawMode = false;
  let largeObject = void 0;
  let is_render_all = false;
  let download_as_csv = false;
  function inferResultKind(result2) {
    if (result2 == "WINDMILL_TOO_BIG") {
      largeObject = true;
      return "json";
    }
    if (result2 !== void 0) {
      download_as_csv = false;
      if (typeof result2 === "string") {
        length = 0;
        largeObject = false;
        is_render_all = false;
        return "plain";
      }
      try {
        let keys = result2 && typeof result2 == "object" ? Object.keys(result2) : [];
        is_render_all = keys.length == 1 && keys.includes("render_all") && Array.isArray(result2["render_all"]);
        if (["png", "svg", "jpeg", "html", "gif"].includes(keys[0]) && keys.length == 1) {
          largeObject = roughSizeOfObject(result2) > IMG_MAX_SIZE;
          return keys[0];
        }
        let size = roughSizeOfObject(result2);
        if (size > TABLE_MAX_SIZE) {
          largeObject = true;
          if (Array.isArray(result2) && isTableRowObject(result2)) {
            download_as_csv = true;
          }
          return "json";
        } else {
          largeObject = size > DISPLAY_MAX_SIZE;
        }
        if (Array.isArray(result2)) {
          if (result2.length === 0) {
            return "json";
          } else if (result2.every((elt) => typeof elt === "object" && checkIfS3(elt, Object.keys(elt)))) {
            largeObject = result2.length > 100;
            if (largeObject) {
              return "json";
            }
            return "s3object-list";
          } else if (isTableRow(result2)) {
            return "table-row";
          } else if (isTableRowObject(result2)) {
            return "table-row-object";
          } else {
            return "json";
          }
        } else if (keys.length === 1 && ["table-row", "table-row-object", "table-col"].includes(keys[0])) {
          return keys[0];
        }
        if (largeObject) {
          return "json";
        }
        if (keys.length != 0) {
          if (keys.length == 1 && keys[0] == "html") {
            return "html";
          } else if (keys.length == 1 && keys[0] == "map") {
            return "map";
          } else if (keys.length == 1 && keys[0] == "file") {
            return "file";
          } else if (keys.includes("windmill_content_type") && result2["windmill_content_type"].startsWith("text/")) {
            return "plain";
          } else if (keys.length == 1 && keys[0] == "error") {
            return "error";
          } else if (keys.length === 2 && keys.includes("file") && keys.includes("filename")) {
            return "file";
          } else if (keys.length === 3 && keys.includes("file") && keys.includes("filename") && keys.includes("autodownload")) {
            if (result2.autodownload) {
              const a = document.createElement("a");
              a.href = "data:application/octet-stream;base64," + result2.file;
              a.download = result2.filename;
              a.click();
            }
            return "file";
          } else if (keys.includes("resume") && keys.includes("cancel") && keys.includes("approvalPage")) {
            return "approval";
          } else if (checkIfS3(result2, keys)) {
            return "s3object";
          } else if (keys.length === 1 && (keys.includes("md") || keys.includes("markdown"))) {
            return "markdown";
          } else if (isTableCol(result2, keys)) {
            return "table-col";
          }
        }
      } catch (err) {
      }
    } else {
      largeObject = false;
      is_render_all = false;
    }
    return "json";
  }
  let jsonViewer;
  let s3FileViewer;
  let globalForceJson = false;
  let seeS3PreviewFileFromList = "";
  if ($$props.result === void 0 && $$bindings.result && result !== void 0) $$bindings.result(result);
  if ($$props.requireHtmlApproval === void 0 && $$bindings.requireHtmlApproval && requireHtmlApproval !== void 0) $$bindings.requireHtmlApproval(requireHtmlApproval);
  if ($$props.filename === void 0 && $$bindings.filename && filename !== void 0) $$bindings.filename(filename);
  if ($$props.disableExpand === void 0 && $$bindings.disableExpand && disableExpand !== void 0) $$bindings.disableExpand(disableExpand);
  if ($$props.jobId === void 0 && $$bindings.jobId && jobId !== void 0) $$bindings.jobId(jobId);
  if ($$props.workspaceId === void 0 && $$bindings.workspaceId && workspaceId !== void 0) $$bindings.workspaceId(workspaceId);
  if ($$props.hideAsJson === void 0 && $$bindings.hideAsJson && hideAsJson !== void 0) $$bindings.hideAsJson(hideAsJson);
  if ($$props.noControls === void 0 && $$bindings.noControls && noControls !== void 0) $$bindings.noControls(noControls);
  if ($$props.drawerOpen === void 0 && $$bindings.drawerOpen && drawerOpen !== void 0) $$bindings.drawerOpen(drawerOpen);
  if ($$props.nodeId === void 0 && $$bindings.nodeId && nodeId !== void 0) $$bindings.nodeId(nodeId);
  if ($$props.forceJson === void 0 && $$bindings.forceJson && forceJson !== void 0) $$bindings.forceJson(forceJson);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    resultKind = inferResultKind(result);
    $$rendered = `${validate_component(HighlightTheme, "HighlightTheme").$$render($$result, {}, {}, {})} ${is_render_all ? `<div class="flex flex-col w-full gap-6">${!noControls ? `<div class="text-tertiary text-sm">${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
      $$result,
      {
        class: "h-6",
        selected: "pretty"
      },
      {},
      {
        default: () => {
          return `${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              class: "px-1.5",
              value: "pretty",
              label: "Pretty",
              icon: Highlighter
            },
            {},
            {}
          )} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              class: "px-1.5",
              value: "json",
              label: "JSON",
              icon: Braces
            },
            {},
            {}
          )}`;
        }
      }
    )}</div>` : ``} ${each(result["render_all"], (res) => {
      return `${validate_component(DisplayResult, "svelte:self").$$render(
        $$result,
        {
          noControls,
          result: res,
          requireHtmlApproval,
          filename,
          disableExpand,
          jobId,
          nodeId,
          workspaceId,
          forceJson: globalForceJson,
          hideAsJson: true
        },
        {},
        {}
      )} `;
    })}</div>` : `<div class="${"inline-highlight relative grow " + escape(
      ["plain", "markdown"].includes(resultKind ?? "") ? "" : "min-h-[200px]",
      true
    )}">${result != void 0 && length != void 0 && largeObject != void 0 ? `<div class="flex justify-between items-center w-full"><div class="text-tertiary text-sm">${!hideAsJson && !["json", "s3object"].includes(resultKind ?? "") && typeof result === "object" ? `${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
      $$result,
      {
        class: "h-6",
        selected: forceJson ? "json" : resultKind?.startsWith("table-") ? "table" : "pretty"
      },
      {},
      {
        default: () => {
          return `${["table-col", "table-row", "table-row-object"].includes(resultKind ?? "") ? `${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              class: "px-1.5",
              value: "table",
              label: "Table",
              icon: Table_2
            },
            {},
            {}
          )}` : `${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              class: "px-1.5",
              value: "pretty",
              label: "Pretty",
              icon: Highlighter
            },
            {},
            {}
          )}`} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              class: "px-1.5",
              value: "json",
              label: "JSON",
              icon: Braces
            },
            {},
            {}
          )}`;
        }
      }
    )}` : ``}</div> <div class="text-secondary text-xs flex gap-2.5 z-10 items-center">${slots["copilot-fix"] ? slots["copilot-fix"]({}) : ``} ${!disableExpand && !noControls ? `<a download="${escape(filename ?? "result", true) + ".json"}" class="-mt-1 text-current"${add_attribute(
      "href",
      workspaceId && jobId ? nodeId ? `${base}/api/w/${workspaceId}/jobs/result_by_id/${jobId}/${nodeId}` : `${base}/api/w/${workspaceId}/jobs_u/completed/get_result/${jobId}` : `data:text/json;charset=utf-8,${encodeURIComponent(toJsonStr(result))}`,
      0
    )}>${validate_component(Download, "Download").$$render($$result, { size: 14 }, {}, {})}</a> ${validate_component(Popover, "Popover").$$render(
      $$result,
      {
        documentationLink: "https://www.windmill.dev/docs/core_concepts/rich_display_rendering"
      },
      {},
      {
        text: () => {
          return `The result renderer in Windmill supports rich display rendering, allowing you to
								customize the display format of your results.
							`;
        },
        default: () => {
          return `<div class="-mt-1">${validate_component(Info, "InfoIcon").$$render($$result, { size: 14 }, {}, {})}</div>`;
        }
      }
    )} <button class="-mt-1">${validate_component(Clipboard_copy, "ClipboardCopy").$$render($$result, { size: 14 }, {}, {})}</button> <button class="-mt-1">${validate_component(Expand, "Expand").$$render($$result, { size: 14 }, {}, {})}</button>` : ``}</div> </div><div class="grow">${!forceJson && resultKind == "table-col" ? (() => {
      let data = "table-col" in result ? result["table-col"] : result;
      return `  ${validate_component(AutoDataTable, "AutoDataTable").$$render($$result, { objects: objectOfArraysToObjects(data) }, {}, {})}`;
    })() : `${!forceJson && resultKind == "table-row" ? (() => {
      let data = "table-row" in result ? result["table-row"] : result;
      return `  ${validate_component(AutoDataTable, "AutoDataTable").$$render($$result, { objects: arrayOfRowsToObjects(data) }, {}, {})}`;
    })() : `${!forceJson && resultKind == "table-row-object" ? (() => {
      let data = "table-row-object" in result ? result["table-row-object"] : result;
      return `  ${validate_component(AutoDataTable, "AutoDataTable").$$render(
        $$result,
        {
          objects: handleArrayOfObjectsHeaders(data)
        },
        {},
        {}
      )}`;
    })() : `${!forceJson && resultKind == "html" ? ` <div class="h-full">${!requireHtmlApproval || enableHtml ? `<!-- HTML_TAG_START -->${result.html}<!-- HTML_TAG_END -->` : `<div class="font-main text-sm"><div class="flex flex-col" data-svelte-h="svelte-h7i3dp"><div class="bg-red-400 py-1 rounded-t text-white font-bold text-center">Warning</div> <p class="text-tertiary mb-2 text-left border-2 !border-t-0 rounded-b border-red-400 overflow-auto p-1">Rendering HTML can expose you to <a href="https://owasp.org/www-community/attacks/xss/" target="_blank" rel="noreferrer" class="hover:underline">XSS attacks</a>. Only enable it if you trust the author of the script.</p></div> <div class="center-center">${validate_component(Button, "Button").$$render($$result, { size: "sm", color: "dark" }, {}, {
      default: () => {
        return `Enable HTML rendering`;
      }
    })}</div></div>`}</div>` : `${!forceJson && resultKind == "map" ? ` <div class="h-full">${validate_component(MapResult, "MapResult").$$render(
      $$result,
      {
        lat: result.map.lat,
        lon: result.map.lon,
        zoom: result.map.zoom,
        markers: result.map.markers
      },
      {},
      {}
    )}</div>` : `${!forceJson && resultKind == "png" ? ` <div class="h-full"><img alt="png rendered" class="w-auto h-full" src="${"data:image/png;base64," + escape(contentOrRootString(result.png), true)}"></div>` : `${!forceJson && resultKind == "jpeg" ? ` <div class="h-full"><img alt="jpeg rendered" class="w-auto h-full" src="${"data:image/jpeg;base64," + escape(contentOrRootString(result.jpeg), true)}"></div>` : `${!forceJson && resultKind == "svg" ? ` <div><a download="windmill.svg" href="${"data:text/plain;base64," + escape(btoa(result.svg), true)}">Download</a></div> <div class="h-full overflow-auto"><!-- HTML_TAG_START -->${result.svg}<!-- HTML_TAG_END --></div>` : `${!forceJson && resultKind == "gif" ? ` <div class="h-full"><img alt="gif rendered" class="w-auto h-full" src="${"data:image/gif;base64," + escape(contentOrRootString(result.gif), true)}"></div>` : `${!forceJson && resultKind == "plain" ? `<div class="h-full text-2xs"><pre>${escape(typeof result == "string" ? result : result?.["result"])}</pre>${!noControls ? ` <div class="flex">${validate_component(Button, "Button").$$render($$result, { color: "light", size: "xs" }, {}, {
      default: () => {
        return `<div class="flex gap-2 items-center">Copy ${validate_component(Clipboard_copy, "ClipboardCopy").$$render($$result, { size: 12 }, {}, {})}</div>`;
      }
    })}</div>` : ``}</div>` : `${!forceJson && resultKind == "file" ? ` <div><a${add_attribute("download", result.filename ?? result.file?.filename ?? "windmill.file", 0)} href="${"data:application/octet-stream;base64," + escape(contentOrRootString(result.file), true)}">Download</a></div>` : `${!forceJson && resultKind == "error" && result?.error ? ` <div class="flex flex-col items-start"><span class="text-red-500 font-semibold text-sm whitespace-pre-wrap">${result.error.name || result.error.message ? `${escape(result.error.name)}: ${escape(result.error.message)}` : `${escape(JSON.stringify(result.error, null, 4))}`}</span> <pre class="text-sm whitespace-pre-wrap text-primary">${escape(result.error.stack ?? "")}</pre> ${slots.default ? slots.default({}) : ``}</div>` : `${!forceJson && resultKind == "approval" ? `<div class="flex flex-col gap-3 mt-2 mx-4">${validate_component(Button, "Button").$$render($$result, { color: "green", variant: "border" }, {}, {
      default: () => {
        return `Resume`;
      }
    })} ${validate_component(Button, "Button").$$render($$result, { color: "red", variant: "border" }, {}, {
      default: () => {
        return `Cancel`;
      }
    })} <div class="center-center"><a rel="noreferrer" target="_blank"${add_attribute("href", result["approvalPage"], 0)}>Approval Page</a></div></div>` : `${!forceJson && resultKind == "s3object" ? ` <div class="${"h-full w-full " + escape(
      typeof result?.s3 == "string" && result?.s3?.endsWith(".parquet") ? "h-min-[600px]" : "",
      true
    )}"><div class="flex flex-col gap-2">${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        class: "flex",
        size: "xs",
        options: { right: "Raw S3 object" },
        checked: s3FileDisplayRawMode
      },
      {
        checked: ($$value) => {
          s3FileDisplayRawMode = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${s3FileDisplayRawMode ? `${validate_component(Highlight, "Highlight").$$render(
      $$result,
      {
        class: "",
        language: json,
        code: toJsonStr(result).replace(/\\n/g, "\n")
      },
      {},
      {}
    )} <button class="text-secondary underline text-2xs whitespace-nowrap"><span class="flex items-center gap-1">${validate_component(Panel_right_open, "PanelRightOpen").$$render($$result, { size: 12 }, {}, {})}object store explorer${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
      default: () => {
        return `Require admin privilege or &quot;S3 resource details and content can be accessed
											by all users of this workspace&quot; of S3 Storage to be set in the workspace
											settings`;
      }
    })}</span></button>` : `${!result?.disable_download ? `${validate_component(FileDownload, "FileDownload").$$render($$result, { s3object: result }, {}, {})} <button class="text-secondary underline text-2xs whitespace-nowrap"><span class="flex items-center gap-1">${validate_component(Panel_right_open, "PanelRightOpen").$$render($$result, { size: 12 }, {}, {})}object store explorer${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
      default: () => {
        return `Require admin privilege or &quot;S3 resource details and content can be accessed
											by all users of this workspace&quot; of S3 Storage to be set in the workspace
											settings`;
      }
    })}</span></button>` : ``}`}</div> ${typeof result?.s3 == "string" && (result?.s3?.endsWith(".parquet") || result?.s3?.endsWith(".csv")) ? `${validate_component(ParqetCsvTableRenderer, "ParqetTableRenderer").$$render(
      $$result,
      {
        disable_download: result?.disable_download,
        workspaceId,
        s3resource: result?.s3,
        storage: result?.storage
      },
      {},
      {}
    )}` : ``}</div>` : `${!forceJson && resultKind == "s3object-list" ? ` <div class="h-full w-full"><div class="flex flex-col gap-2">${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        class: "flex mt-1",
        size: "xs",
        options: { right: "Raw S3 object" },
        checked: s3FileDisplayRawMode
      },
      {
        checked: ($$value) => {
          s3FileDisplayRawMode = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${each(result, (s3object) => {
      return `${s3FileDisplayRawMode ? `${validate_component(Highlight, "Highlight").$$render(
        $$result,
        {
          class: "",
          language: json,
          code: toJsonStr(s3object).replace(/\\n/g, "\n")
        },
        {},
        {}
      )} <button class="text-secondary text-2xs whitespace-nowrap"><span class="flex items-center gap-1">${validate_component(Panel_right_open, "PanelRightOpen").$$render($$result, { size: 12 }, {}, {})}open preview</span> </button>` : `${!s3object?.disable_download ? `${validate_component(FileDownload, "FileDownload").$$render($$result, { s3object }, {}, {})}` : `<div class="flex text-secondary pt-2">${escape(s3object?.s3)} (download disabled)</div>`}`} ${s3object?.s3?.endsWith(".parquet") || s3object?.s3?.endsWith(".csv") ? `${seeS3PreviewFileFromList == s3object?.s3 ? `${validate_component(ParqetCsvTableRenderer, "ParqetTableRenderer").$$render(
        $$result,
        {
          disable_download: s3object?.disable_download,
          workspaceId,
          s3resource: s3object?.s3,
          storage: s3object?.storage
        },
        {},
        {}
      )}` : `<button class="text-secondary whitespace-nowrap flex gap-2 items-center">open table preview ${validate_component(Arrow_down_from_line, "ArrowDownFromLine").$$render($$result, {}, {}, {})} </button>`}` : ``}`;
    })}</div></div>` : `${!forceJson && resultKind == "markdown" ? ` <div class="prose-xs dark:prose-invert !list-disc !list-outside">${validate_component(Markdown, "Markdown").$$render($$result, { md: result?.md ?? result?.markdown }, {}, {})}</div>` : `${largeObject ? ` ${result && typeof result == "object" && "file" in result ? `<div><a${add_attribute("download", result.filename ?? result.file?.filename ?? "windmill.file", 0)} href="${"data:application/octet-stream;base64," + escape(contentOrRootString(result.file), true)}">Download</a></div>` : `<div class="text-sm text-tertiary"><a download="${escape(filename ?? "result", true) + ".json"}"${add_attribute(
      "href",
      workspaceId && jobId ? nodeId ? `${base}/api/w/${workspaceId}/jobs/result_by_id/${jobId}/${nodeId}` : `${base}/api/w/${workspaceId}/jobs_u/completed/get_result/${jobId}` : `data:text/json;charset=utf-8,${encodeURIComponent(toJsonStr(result))}`,
      0
    )}>Download ${escape(filename ? "" : "as JSON")}</a> ${download_as_csv ? `${validate_component(DownloadCsv, "DownloadCsv").$$render(
      $$result,
      {
        getContent: () => convertJsonToCsv(result),
        customText: "Download as CSV"
      },
      {},
      {}
    )}` : ``}</div> <div class="mt-1 mb-2">${validate_component(Alert, "Alert").$$render(
      $$result,
      {
        size: "xs",
        title: "Large result detected",
        type: "warning",
        tooltip: "We recommend using persistent object storage for large result. See docs for setting up an object storage service integration using s3 or any other s3 compatible services.",
        documentationLink: "https://www.windmill.dev/docs/core_concepts/persistent_storage#object-storage-for-large-data-s3-r2-minio-azure-blob"
      },
      {},
      {}
    )}</div> ${result && result != "WINDMILL_TOO_BIG" ? `${validate_component(ObjectViewer, "ObjectViewer").$$render($$result, { json: result }, {}, {})}` : ``}`}` : `${typeof result == "string" && result.length > 0 ? ` <pre class="text-sm">${escape(result)}</pre>${!noControls ? `<div class="flex">${validate_component(Button, "Button").$$render($$result, { color: "light", size: "xs" }, {}, {
      default: () => {
        return `<div class="flex gap-2 items-center">Copy ${validate_component(Clipboard_copy, "ClipboardCopy").$$render($$result, { size: 12 }, {}, {})}</div>`;
      }
    })}</div>` : ``}` : ` ${validate_component(Highlight, "Highlight").$$render(
      $$result,
      {
        class: forceJson ? "pt-1" : "h-full w-full",
        language: json,
        code: toJsonStr(result).replace(/\\n/g, "\n")
      },
      {},
      {}
    )}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}</div>` : `${typeof result == "string" && resultKind == "plain" ? `<div class="h-full text-xs"><pre>${escape(result)}</pre> ${!noControls ? `<div class="flex">${validate_component(Button, "Button").$$render($$result, { color: "light", size: "xs" }, {}, {
      default: () => {
        return `<div class="flex gap-2 items-center">Copy ${validate_component(Clipboard_copy, "ClipboardCopy").$$render($$result, { size: 12 }, {}, {})}</div>`;
      }
    })}</div>` : ``}</div>` : `<div class="text-tertiary text-sm">No result: ${escape(toJsonStr(result))}</div>`}`}</div> ${!disableExpand && !noControls ? `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      {
        size: "900px",
        this: jsonViewer,
        open: drawerOpen
      },
      {
        this: ($$value) => {
          jsonViewer = $$value;
          $$settled = false;
        },
        open: ($$value) => {
          drawerOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Expanded Result" }, {}, {
            actions: () => {
              return `${validate_component(Button, "Button").$$render(
                $$result,
                {
                  download: (filename ?? "result") + ".json",
                  href: workspaceId && jobId ? nodeId ? `${base}/api/w/${workspaceId}/jobs/result_by_id/${jobId}/${nodeId}` : `${base}/api/w/${workspaceId}/jobs_u/completed/get_result/${jobId}` : `data:text/json;charset=utf-8,${encodeURIComponent(toJsonStr(result))}`,
                  startIcon: { icon: Download },
                  color: "light",
                  size: "xs"
                },
                {},
                {
                  default: () => {
                    return `Download`;
                  }
                }
              )} ${validate_component(Button, "Button").$$render(
                $$result,
                {
                  color: "light",
                  size: "xs",
                  startIcon: { icon: Clipboard_copy }
                },
                {},
                {
                  default: () => {
                    return `Copy to clipboard`;
                  }
                }
              )} `;
            },
            default: () => {
              return `${validate_component(DisplayResult, "svelte:self").$$render(
                $$result,
                {
                  noControls,
                  result,
                  requireHtmlApproval,
                  filename,
                  jobId,
                  nodeId,
                  workspaceId,
                  hideAsJson,
                  forceJson,
                  disableExpand: true
                },
                {},
                {}
              )}`;
            }
          })}`;
        }
      }
    )} ${validate_component(Portal, "Portal").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(S3FilePicker, "S3FilePicker").$$render(
          $$result,
          { readOnlyMode: true, this: s3FileViewer },
          {
            this: ($$value) => {
              s3FileViewer = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}` : ``}`}`;
  } while (!$$settled);
  return $$rendered;
});
const s3LogPrefixes = [
  "\n[windmill] Previous logs have been saved to object storage at logs/",
  "\n[windmill] Previous logs have been saved to disk at logs/",
  "\n[windmill] No object storage set in instance settings. Previous logs have been saved to disk at "
];
let LOG_INC = 1e4;
function findPrefixIndex(truncateContent2) {
  let index = s3LogPrefixes.findIndex((x) => truncateContent2.startsWith(x));
  if (index == -1) {
    return void 0;
  }
  return index;
}
function truncateContent(jobContent, loadedFromObjectStore, limit) {
  let content = loadedFromObjectStore + jobContent;
  if (content.length > limit) {
    return content.substring(content.length - limit);
  }
  return content;
}
const LogViewer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let truncatedContent;
  let prefixIndex;
  let downloadStartUrl;
  let html;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { content } = $$props;
  let { isLoading } = $$props;
  let { duration = void 0 } = $$props;
  let { mem = void 0 } = $$props;
  let { wrapperClass = "" } = $$props;
  let { jobId = void 0 } = $$props;
  let { tag } = $$props;
  let { small = false } = $$props;
  let { drawerOpen = false } = $$props;
  const ansi_up = new AnsiUp();
  let scroll = true;
  let div = null;
  let LOG_LIMIT = LOG_INC;
  let lastJobId = jobId;
  let loadedFromObjectStore = "";
  function findStartUrl(truncateContent2, prefixIndex2 = void 0) {
    if (prefixIndex2 == void 0) {
      return void 0;
    }
    const end = truncateContent2.substring(1).indexOf("\n");
    return prefixIndex2 != void 0 && truncateContent2 ? truncateContent2.substring(s3LogPrefixes[prefixIndex2]?.length, end == -1 ? void 0 : end + 1) : void 0;
  }
  function tooltipText(prefixIndex2) {
    if (prefixIndex2 == void 0) {
      return "No path/file detected to download from";
    } else if (prefixIndex2 == 0) {
      return "Download the previous logs from the instance configured object store";
    } else if (prefixIndex2 == 1) {
      return "Attempt to download the logs from disk. Assume there is a shared disk between the workers and the server at /tmp/windmill/logs. Upgrade to EE to use an object store such as S3 instead of a shared volume.";
    } else if (prefixIndex2 == 2) {
      return "Attempt to download the logs from disk. Assume there is a shared disk between the workers and the server at /tmp/windmill/logs. Since you are on EE, you can alternatively use an object store such as S3 configured in the instance settings instead of a shared volume..";
    }
  }
  function scrollToBottom() {
    setTimeout(
      () => div?.scroll({
        top: div?.scrollHeight,
        behavior: "smooth"
      }),
      100
    );
  }
  let logViewer;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0) $$bindings.content(content);
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading !== void 0) $$bindings.isLoading(isLoading);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0) $$bindings.duration(duration);
  if ($$props.mem === void 0 && $$bindings.mem && mem !== void 0) $$bindings.mem(mem);
  if ($$props.wrapperClass === void 0 && $$bindings.wrapperClass && wrapperClass !== void 0) $$bindings.wrapperClass(wrapperClass);
  if ($$props.jobId === void 0 && $$bindings.jobId && jobId !== void 0) $$bindings.jobId(jobId);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
  if ($$props.small === void 0 && $$bindings.small && small !== void 0) $$bindings.small(small);
  if ($$props.drawerOpen === void 0 && $$bindings.drawerOpen && drawerOpen !== void 0) $$bindings.drawerOpen(drawerOpen);
  if ($$props.scrollToBottom === void 0 && $$bindings.scrollToBottom && scrollToBottom !== void 0) $$bindings.scrollToBottom(scrollToBottom);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (jobId !== lastJobId) {
        lastJobId = jobId;
        loadedFromObjectStore = "";
        LOG_LIMIT = LOG_INC;
      }
    }
    truncatedContent = truncateContent(content, loadedFromObjectStore, LOG_LIMIT);
    prefixIndex = findPrefixIndex(truncatedContent);
    downloadStartUrl = findStartUrl(truncatedContent, prefixIndex);
    {
      if (content != void 0 && isLoading) {
        isLoading = false;
      }
    }
    truncatedContent && scrollToBottom();
    html = ansi_up.ansi_to_html(downloadStartUrl && prefixIndex != void 0 ? truncatedContent.substring(truncatedContent.substring(1).indexOf("\n") + 2, truncatedContent.length) : truncatedContent);
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      {
        size: "900px",
        this: logViewer,
        open: drawerOpen
      },
      {
        this: ($$value) => {
          logViewer = $$value;
          $$settled = false;
        },
        open: ($$value) => {
          drawerOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Expanded Logs" }, {}, {
            actions: () => {
              return `${validate_component(Button, "Button").$$render(
                $$result,
                {
                  href: base + "/api/w/" + $workspaceStore + "/jobs_u/get_logs/" + jobId,
                  download: "windmill_logs_" + jobId + ".txt",
                  color: "light",
                  size: "xs",
                  startIcon: { icon: Download }
                },
                {},
                {
                  default: () => {
                    return `Download`;
                  }
                }
              )} ${validate_component(Button, "Button").$$render(
                $$result,
                {
                  color: "light",
                  size: "xs",
                  startIcon: { icon: Clipboard_copy }
                },
                {},
                {
                  default: () => {
                    return `Copy to clipboard`;
                  }
                }
              )} `;
            },
            default: () => {
              return `<div><pre class="bg-surface-secondary text-secondary text-xs w-full p-2 whitespace-pre-wrap border rounded-md">${content ? (() => {
                let len = (content?.length ?? 0) + (loadedFromObjectStore?.length ?? 0);
                return `${downloadStartUrl ? `<button>Show more... ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(tooltipText(prefixIndex))}`;
                  }
                })}</button><br>` : `${len > LOG_LIMIT ? `(truncated to the last ${escape(LOG_LIMIT)} characters)...<br><button data-svelte-h="svelte-nb2ypi">Show more..</button><br>` : ``}`}<!-- HTML_TAG_START -->${html}<!-- HTML_TAG_END -->`;
              })() : `${isLoading ? `Waiting for job to start...` : `No logs are available yet`}`}</pre></div>`;
            }
          })}`;
        }
      }
    )} <div class="${"relative w-full h-full " + escape(wrapperClass, true)}"><div class="w-full h-full overflow-auto relative bg-surface-secondary max-h-screen"${add_attribute("this", div, 0)}><div class="sticky z-10 top-0 right-0 w-full flex flex-row-reverse justify-between text-sm"><div class="flex gap-2 pl-0.5 bg-surface-secondary"><div class="flex items-center"><a class="text-primary pb-0.5" target="_blank" href="${escape(base, true) + "/api/w/" + escape($workspaceStore, true) + "/jobs_u/get_logs/" + escape(jobId, true)}" download="${"windmill_logs_" + escape(jobId, true) + ".txt"}">${validate_component(Download, "Download").$$render($$result, { size: "14" }, {}, {})}</a></div> <button>${validate_component(Expand, "Expand").$$render($$result, { size: "12" }, {}, {})}</button> <div class="${escape(small ? "" : "py-2", true) + " pr-2 " + escape(small ? "!text-2xs" : "!text-xs", true) + " flex gap-2 text-tertiary items-center"}">Auto scroll
					<input class="windmillapp" type="checkbox"${add_attribute("checked", scroll, 1)}></div></div></div> ${isLoading ? `<div class="flex gap-2 absolute top-2 left-2 items-center z-10">${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})} ${tag ? `<div class="flex flex-row items-center gap-1"><div class="${"text-secondary " + escape(small ? "!text-2xs" : "!text-xs", true)}">tag: ${escape(tag)}</div> ${validate_component(NoWorkerWithTagWarning, "NoWorkerWithTagWarning").$$render($$result, { tag }, {}, {})}</div>` : ``}</div>` : `${duration ? `<span class="${"absolute " + escape(small ? "!text-2xs" : "!text-xs", true) + " text-tertiary dark:text-gray-400 " + escape(small ? "top-0" : "top-2", true) + " left-2"}">took ${escape(duration)}ms</span>` : ``}`} ${mem ? `<span class="${"absolute " + escape(small ? "!text-2xs" : "!text-xs", true) + " text-tertiary dark:text-gray-400 " + escape(small ? "top-0" : "top-2", true) + " left-36"}">mem peak: ${escape((mem / 1024).toPrecision(4))}MB</span>` : ``} <pre class="${"whitespace-pre-wrap break-words " + escape(small ? "!text-2xs" : "!text-xs", true) + " w-full p-2"}">${content ? (() => {
      let len = (content?.length ?? 0) + (loadedFromObjectStore?.length ?? 0);
      return `${downloadStartUrl ? `<button>Show more...  ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(tooltipText(prefixIndex))}`;
        }
      })}</button><br>` : `${len > LOG_LIMIT ? `(truncated to the last ${escape(LOG_LIMIT)} characters)<br><button data-svelte-h="svelte-nb2ypi">Show more..</button><br>` : ``}`}<span><!-- HTML_TAG_START -->${html}<!-- HTML_TAG_END --></span>`;
    })() : `${!isLoading ? `<span data-svelte-h="svelte-1svxtcp">No logs are available yet</span>` : ``}`}</pre></div></div>`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const TimelineBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { position = "center" } = $$props;
  let { total } = $$props;
  let { min } = $$props;
  let { started_at } = $$props;
  let { len } = $$props;
  let { id } = $$props;
  let { running } = $$props;
  let { concat = false } = $$props;
  let { gray = false } = $$props;
  if ($$props.position === void 0 && $$bindings.position && position !== void 0) $$bindings.position(position);
  if ($$props.total === void 0 && $$bindings.total && total !== void 0) $$bindings.total(total);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0) $$bindings.min(min);
  if ($$props.started_at === void 0 && $$bindings.started_at && started_at !== void 0) $$bindings.started_at(started_at);
  if ($$props.len === void 0 && $$bindings.len && len !== void 0) $$bindings.len(len);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.running === void 0 && $$bindings.running && running !== void 0) $$bindings.running(running);
  if ($$props.concat === void 0 && $$bindings.concat && concat !== void 0) $$bindings.concat(concat);
  if ($$props.gray === void 0 && $$bindings.gray && gray !== void 0) $$bindings.gray(gray);
  return `${min && started_at != void 0 ? `${!concat ? `<div style="${"width: " + escape((started_at - min) / total * 100, true) + "%"}" class="h-4"></div>` : ``} ${validate_component(Popover, "Popover").$$render(
    $$result,
    {
      style: "width: " + len / total * 100 + "%",
      class: "h-4 " + (gray ? "bg-gray-300 dark:bg-gray-600" : running ? "bg-blue-400/90" : "bg-blue-500/90") + " " + (position == "left" ? "rounded-l-sm" : position == "right" ? "rounded-r-sm" : "rounded-sm") + " center-center text-white text-2xs whitespace-nowrap hover:outline outline-1 outline-black"
    },
    {},
    {
      text: () => {
        return `<a href="${escape(base, true) + "/run/" + escape(id, true)}" class="inline-flex items-center gap-1" target="_blank">${escape(id)} ${validate_component(External_link, "ExternalLink").$$render($$result, { size: 14 }, {}, {})}</a>`;
      },
      default: () => {
        return `${len > 0 ? `<span${add_attribute(
          "class",
          len / total < 0.09 ? "-ml-14 text-primary font-mono" : "font-mono",
          0
        )}>${len ? `${escape(msToSec(len, 1))}s` : ``}</span>` : ``}`;
      }
    }
  )}` : ``}`;
});
export {
  Arrow_down_from_line as A,
  DisplayResult as D,
  LogViewer as L,
  TestJobLoader as T,
  TimelineBar as a
};
