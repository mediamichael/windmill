import { c as create_ssr_component, v as validate_component, d as createEventDispatcher, b as add_attribute, e as escape, f as each, s as subscribe, h as getContext } from "../../../../../../chunks/ssr.js";
import { J as JobService, U as UserService, d as FolderService, c as ScriptService, F as FlowService } from "../../../../../../chunks/services.gen.js";
import { p as page } from "../../../../../../chunks/stores.js";
import { P as Portal, W as msToReadableTime, j as displayDate, B as Button, H as truncateHash, t as truncateRev, D as Chevron_down, C as Check_circle_2, s as sendUserToast } from "../../../../../../chunks/toast.js";
import { w as workspaceStore, e as enterpriseLicense, u as userStore, b as superadmin } from "../../../../../../chunks/stores2.js";
import { T as Tooltip$1 } from "../../../../../../chunks/Tooltip.js";
import { twMerge } from "tailwind-merge";
import "yaml";
import "minimatch";
import { D as Drawer, a as DrawerContent } from "../../../../../../chunks/DrawerContent.js";
import "../../../../../../chunks/common.js";
import { S as Skeleton } from "../../../../../../chunks/Skeleton.js";
import { Chart, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, LogarithmicScale, PointElement, TimeScale } from "chart.js";
import "../../../../../../chunks/svelte.js";
import { S as Scatter } from "../../../../../../chunks/Scatter.js";
import "chartjs-adapter-date-fns";
import zoomPlugin from "chartjs-plugin-zoom";
import { g as getDbClockNow, f as forLater, T as TimeAgo } from "../../../../../../chunks/FlowGraphViewerStep.js";
import { J as JobPreview } from "../../../../../../chunks/JobPreview.js";
import { F as Filter, C as CalendarPicker } from "../../../../../../chunks/CalendarPicker.js";
import { b as base } from "../../../../../../chunks/base.js";
import { r as replaceState } from "../../../../../../chunks/client.js";
import "../../../../../../chunks/index2.js";
import { B as Badge } from "../../../../../../chunks/Badge.js";
/* empty css                                                            */
import { S as ScheduleEditor } from "../../../../../../chunks/ScheduleEditor.js";
import { B as BarsStaggered } from "../../../../../../chunks/util.js";
import { W as WaitTimeWarning } from "../../../../../../chunks/FlowStatusViewer.js";
import { I as Icon } from "../../../../../../chunks/Icon.js";
import { F as Fast_forward } from "../../../../../../chunks/fast-forward.js";
import { C as Check } from "../../../../../../chunks/check.js";
import { X } from "../../../../../../chunks/x.js";
import { P as Play } from "../../../../../../chunks/play.js";
import { C as Calendar } from "../../../../../../chunks/calendar.js";
import { H as Hourglass } from "../../../../../../chunks/hourglass.js";
import { L as List_filter } from "../../../../../../chunks/list-filter.js";
import { F as Folder } from "../../../../../../chunks/VariableEditor.js";
import { V as VirtualList } from "../../../../../../chunks/index3.js";
import { P as Popover, E as External_link } from "../../../../../../chunks/Popover.js";
import { A as Alert_triangle } from "../../../../../../chunks/alert-triangle.js";
import { S as SplitPanesWrapper } from "../../../../../../chunks/SplitPanesWrapper.js";
import { S as Splitpanes, P as Pane } from "../../../../../../chunks/Pane.js";
import "../../../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import { C as CloseButton } from "../../../../../../chunks/CloseButton.js";
import { P as Popup } from "../../../../../../chunks/Popup.js";
import { b as Tab, T as ToggleButtonGroup, a as ToggleButton } from "../../../../../../chunks/ToggleButtonGroup.js";
import { S as SimpleAutocomplete } from "../../../../../../chunks/SimpleAutocomplete.js";
import { J as JsonEditor } from "../../../../../../chunks/SchemaForm.js";
import { T as Toggle } from "../../../../../../chunks/Toggle.js";
import { L as Label } from "../../../../../../chunks/Label.js";
import { S as Section } from "../../../../../../chunks/Section.js";
import { D as DropdownV2 } from "../../../../../../chunks/DropdownV2.js";
import { a as Alert_circle } from "../../../../../../chunks/Alert.js";
import { a as ConfirmationModal } from "../../../../../../chunks/ConfirmationModal.js";
import { R as Refresh_cw } from "../../../../../../chunks/refresh-cw.js";
import { J as JobLoader } from "../../../../../../chunks/JobLoader.js";
import { L as Line } from "../../../../../../chunks/Line.js";
import { C as Clock } from "../../../../../../chunks/DateTimeInput.js";
const Play_circle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["polygon", { "points": "10 8 16 12 10 16 10 8" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "play-circle" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Shield_question = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"
      }
    ],
    [
      "path",
      {
        "d": "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"
      }
    ],
    ["path", { "d": "M12 17h.01" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "shield-question" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const SUCCESS_COLOR = "#4ade80";
const FAIL_COLOR = "#f87171";
function isDark() {
  return document.documentElement.classList.contains("dark");
}
function getBackgorundColor() {
  return isDark() ? "#2e3440" : "#ffffff";
}
function hexToRgb(hexColor) {
  hexColor = hexColor.replace(/^#/, "");
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);
  return [r, g, b];
}
function rgbToHex(rgbColor) {
  return "#" + rgbColor.map((c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }).join("");
}
function mergeColors(color1, color2, slider) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  const blendedRgb = rgb1.map((c1, i) => Math.round(c1 * (1 - slider) + rgb2[i] * slider));
  return rgbToHex(blendedRgb);
}
function getPath(x) {
  return x.path;
}
function minJobTime(jobs) {
  let min = new Date(jobs[0].started_at);
  for (const job of jobs) {
    if (new Date(job.started_at) < min) {
      min = new Date(job.started_at);
    }
  }
  return min;
}
function maxJobTime(jobs) {
  let max = new Date(jobs[0].started_at);
  for (const job of jobs) {
    if (new Date(job.started_at) > max) {
      max = new Date(job.started_at);
    }
  }
  return max;
}
function addSeconds$1(date, seconds) {
  date.setTime(date.getTime() + seconds * 1e3);
  return date;
}
const RunChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let success;
  let failed;
  let data;
  let scatterOptions;
  let { jobs = [] } = $$props;
  let { maxIsNow = false } = $$props;
  let { minTimeSet = void 0 } = $$props;
  let { maxTimeSet = void 0 } = $$props;
  let { selectedIds = [] } = $$props;
  let { canSelect = true } = $$props;
  const dispatch = createEventDispatcher();
  const SUCCESS_COLOR_TRANSPARENT = mergeColors(SUCCESS_COLOR, getBackgorundColor(), 0.8);
  const FAIL_COLOR_TRANSPARENT = mergeColors(FAIL_COLOR, getBackgorundColor(), 0.8);
  Chart.register(Title, Tooltip, Legend, zoomPlugin, LineElement, CategoryScale, LinearScale, LogarithmicScale, PointElement, TimeScale);
  const zoomOptions = {
    pan: {
      enabled: true,
      modifierKey: "ctrl",
      onPanComplete: ({ chart }) => {
        dispatch("zoom", {
          min: addSeconds$1(new Date(chart.scales.x.min), -1),
          max: addSeconds$1(new Date(chart.scales.x.max), 1)
        });
      }
    },
    zoom: {
      drag: { enabled: true },
      mode: "x",
      onZoom: ({ chart }) => {
        dispatch("zoom", {
          min: addSeconds$1(new Date(chart.scales.x.min), -1),
          max: addSeconds$1(new Date(chart.scales.x.max), 1)
        });
      }
    }
  };
  Chart.defaults.color = isDark() ? "#ccc" : "#666";
  Chart.defaults.borderColor = isDark() ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)";
  function highlightSelectedPoints(ids) {
    if (!canSelect || ids.length === 0) {
      data.datasets[0].backgroundColor = FAIL_COLOR;
      data.datasets[1].backgroundColor = SUCCESS_COLOR;
    } else {
      data.datasets[0].backgroundColor = data.datasets[0].data.map((p) => ids.includes(p.id) ? FAIL_COLOR : FAIL_COLOR_TRANSPARENT);
      data.datasets[1].backgroundColor = data.datasets[1].data.map((p) => ids.includes(p.id) ? SUCCESS_COLOR : SUCCESS_COLOR_TRANSPARENT);
    }
  }
  let minTime = addSeconds$1(/* @__PURE__ */ new Date(), -300);
  let maxTime = getDbClockNow();
  function computeMinMaxTime(jobs2, minTimeSet2, maxTimeSet2) {
    let minTimeSetDate = minTimeSet2 ? new Date(minTimeSet2) : void 0;
    let maxTimeSetDate = maxTimeSet2 ? new Date(maxTimeSet2) : void 0;
    if (minTimeSetDate && maxTimeSetDate) {
      minTime = minTimeSetDate;
      maxTime = maxTimeSetDate;
      return;
    }
    if (jobs2 == void 0 || jobs2?.length == 0) {
      minTime = minTimeSetDate ?? addSeconds$1(/* @__PURE__ */ new Date(), -300);
      maxTime = maxTimeSetDate ?? getDbClockNow();
      return;
    }
    const maxJob = maxIsNow ? getDbClockNow() : maxJobTime(jobs2);
    const minJob = minJobTime(jobs2);
    const diff = (maxJob.getTime() - minJob.getTime()) / 2e4;
    minTime = minTimeSetDate ?? addSeconds$1(minJob, -diff);
    if (maxIsNow) {
      maxTime = maxTimeSetDate ?? maxJob;
    } else {
      maxTime = maxTimeSetDate ?? addSeconds$1(maxJob, diff);
    }
  }
  if ($$props.jobs === void 0 && $$bindings.jobs && jobs !== void 0) $$bindings.jobs(jobs);
  if ($$props.maxIsNow === void 0 && $$bindings.maxIsNow && maxIsNow !== void 0) $$bindings.maxIsNow(maxIsNow);
  if ($$props.minTimeSet === void 0 && $$bindings.minTimeSet && minTimeSet !== void 0) $$bindings.minTimeSet(minTimeSet);
  if ($$props.maxTimeSet === void 0 && $$bindings.maxTimeSet && maxTimeSet !== void 0) $$bindings.maxTimeSet(maxTimeSet);
  if ($$props.selectedIds === void 0 && $$bindings.selectedIds && selectedIds !== void 0) $$bindings.selectedIds(selectedIds);
  if ($$props.canSelect === void 0 && $$bindings.canSelect && canSelect !== void 0) $$bindings.canSelect(canSelect);
  success = jobs?.filter((x) => x.success);
  failed = jobs?.filter((x) => !x.success);
  data = {
    datasets: [
      {
        borderColor: "rgba(99,0,125, 0)",
        backgroundColor: FAIL_COLOR,
        radius: 3,
        label: "Failed",
        data: failed?.map((job) => ({
          x: job.started_at,
          y: job.duration_ms,
          id: job.id,
          path: job.script_path
        })) ?? []
      },
      {
        borderColor: "rgba(99,0,125, 0)",
        backgroundColor: SUCCESS_COLOR,
        radius: 3,
        label: "Successful",
        data: success?.map((job) => ({
          x: job.started_at,
          y: job.duration_ms,
          id: job.id,
          path: job.script_path
        })) ?? []
      }
    ]
  };
  {
    computeMinMaxTime(jobs, minTimeSet, maxTimeSet);
  }
  scatterOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      zoom: zoomOptions,
      legend: { display: false },
      tooltip: {
        callbacks: {
          label(context) {
            return getPath(context.raw);
          }
        }
      }
    },
    onClick: (e, u) => {
      if (canSelect) {
        const ids = u.map((j) => data.datasets[j.datasetIndex].data[j.index].id);
        selectedIds = ids;
      }
    },
    scales: {
      x: {
        type: "time",
        grid: { display: false },
        min: minTime,
        max: maxTime
      },
      y: {
        grid: { display: false },
        title: { display: true, text: "job duration (ms)" },
        type: "logarithmic"
      }
    },
    animation: false
  };
  data && scatterOptions && highlightSelectedPoints(selectedIds);
  return `   <div class="relative max-h-40">${validate_component(Scatter, "Scatter").$$render($$result, { data, options: scatterOptions }, {}, {})}</div>`;
});
function isJobCancelable$2(j) {
  return j.type === "QueuedJob" && !j.schedule_path;
}
const RunRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isExternal;
  createEventDispatcher();
  let { job } = $$props;
  let { selected = false } = $$props;
  let { containerWidth = 0 } = $$props;
  let { containsLabel = false } = $$props;
  let { activeLabel } = $$props;
  let { isSelectingJobsToCancel = false } = $$props;
  let scheduleEditor;
  let triggeredByWidth = 0;
  if ($$props.job === void 0 && $$bindings.job && job !== void 0) $$bindings.job(job);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0) $$bindings.selected(selected);
  if ($$props.containerWidth === void 0 && $$bindings.containerWidth && containerWidth !== void 0) $$bindings.containerWidth(containerWidth);
  if ($$props.containsLabel === void 0 && $$bindings.containsLabel && containsLabel !== void 0) $$bindings.containsLabel(containsLabel);
  if ($$props.activeLabel === void 0 && $$bindings.activeLabel && activeLabel !== void 0) $$bindings.activeLabel(activeLabel);
  if ($$props.isSelectingJobsToCancel === void 0 && $$bindings.isSelectingJobsToCancel && isSelectingJobsToCancel !== void 0) $$bindings.isSelectingJobsToCancel(isSelectingJobsToCancel);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    isExternal = job && job.id === "-";
    $$rendered = `${validate_component(Portal, "Portal").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(ScheduleEditor, "ScheduleEditor").$$render(
          $$result,
          { this: scheduleEditor },
          {
            this: ($$value) => {
              scheduleEditor = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}   <div${add_attribute("class", twMerge("hover:bg-surface-hover cursor-pointer", selected ? "bg-blue-50 dark:bg-blue-900/50" : "", "flex flex-row items-center h-full"), 0)} style="${"width: " + escape(containerWidth, true) + "px"}"><div class="w-1/12 flex justify-center">${isSelectingJobsToCancel && isJobCancelable$2(job) ? `<div class="px-2"><input type="checkbox" ${selected ? "checked" : ""}></div>` : ``} ${isExternal ? `${validate_component(Badge, "Badge").$$render($$result, { color: "gray", baseClass: "!px-1.5" }, {}, {
      default: () => {
        return `${validate_component(Shield_question, "ShieldQuestion").$$render($$result, { size: 14 }, {}, {})}`;
      }
    })}` : `${"success" in job && job.success ? `${job.is_skipped ? `${validate_component(Badge, "Badge").$$render($$result, { color: "green", rounded: true }, {}, {
      default: () => {
        return `${validate_component(Fast_forward, "FastForward").$$render($$result, { size: 14 }, {}, {})}`;
      }
    })}` : `${validate_component(Badge, "Badge").$$render($$result, { color: "green", baseClass: "!px-1.5" }, {}, {
      default: () => {
        return `${validate_component(Check, "Check").$$render($$result, { size: 14 }, {}, {})}`;
      }
    })}`}` : `${"success" in job ? `${validate_component(Badge, "Badge").$$render($$result, { color: "red", baseClass: "!px-1.5" }, {}, {
      default: () => {
        return `${validate_component(X, "X").$$render($$result, { size: 14 }, {}, {})}`;
      }
    })}` : `${"running" in job && job.running ? `${validate_component(Badge, "Badge").$$render($$result, { color: "yellow", baseClass: "!px-1.5" }, {}, {
      default: () => {
        return `${validate_component(Play, "Play").$$render($$result, { size: 14 }, {}, {})}`;
      }
    })}` : `${job && "running" in job && job.scheduled_for && forLater(job.scheduled_for) ? `${validate_component(Badge, "Badge").$$render($$result, { color: "blue", baseClass: "!px-1.5" }, {}, {
      default: () => {
        return `${validate_component(Calendar, "Calendar").$$render($$result, { size: 14 }, {}, {})}`;
      }
    })}` : `${validate_component(Badge, "Badge").$$render($$result, { baseClass: "!px-1.5" }, {}, {
      default: () => {
        return `${validate_component(Hourglass, "Hourglass").$$render($$result, { size: 14 }, {}, {})}`;
      }
    })}`}`}`}`}`}</div> <div class="w-4/12 flex justify-start"><div class="flex flex-row items-center gap-1 text-gray-500 dark:text-gray-300 text-2xs">${job ? `${"started_at" in job && job.started_at ? `Started ${validate_component(TimeAgo, "TimeAgo").$$render(
      $$result,
      {
        withDate: true,
        agoOnlyIfRecent: true,
        date: job.started_at ?? ""
      },
      {},
      {}
    )} ${job && "duration_ms" in job && job.duration_ms != void 0 ? `(Ran in ${escape(msToReadableTime(job.duration_ms))}${job.job_kind == "flow" || job.job_kind == "flowpreview" ? ` total` : ``})` : ``} ${job && (job.self_wait_time_ms || job.aggregate_wait_time_ms) ? `${validate_component(WaitTimeWarning, "WaitTimeWarning").$$render(
      $$result,
      {
        self_wait_time_ms: job.self_wait_time_ms,
        aggregate_wait_time_ms: job.aggregate_wait_time_ms,
        variant: "icon"
      },
      {},
      {}
    )}` : ``}` : `${`scheduled_for` in job && job.scheduled_for && forLater(job.scheduled_for) ? `Scheduled for ${escape(displayDate(job.scheduled_for))}` : `Waiting for executor (created ${validate_component(TimeAgo, "TimeAgo").$$render(
      $$result,
      {
        withDate: true,
        agoOnlyIfRecent: true,
        date: job.created_at || ""
      },
      {},
      {}
    )})`}`}` : ``}</div></div> <div class="w-4/12 flex justify-start flex-col"><div class="flex flex-row text-sm">${job === void 0 ? `No job found` : `<div class="flex flex-row gap-1 min-w-0"><div class="whitespace-nowrap text-xs font-semibold truncate">${job.script_path ? `<div class="flex flex-row gap-1 items-center">${isExternal ? `<span class="w-30 justify-center" data-svelte-h="svelte-12y2hn">-</span>` : `<a href="${escape(base, true) + "/run/" + escape(job.id, true) + "?workspace=" + escape(job.workspace_id, true)}" class="truncate w-30 dark:text-blue-400">${escape(job.script_path)}</a> ${validate_component(Button, "Button").$$render($$result, { size: "xs2", color: "light" }, {}, {
      default: () => {
        return `${validate_component(List_filter, "ListFilter").$$render($$result, { size: 10 }, {}, {})}`;
      }
    })}`} ${job.script_path?.startsWith("f/") ? `${validate_component(Button, "Button").$$render($$result, { size: "xs2", color: "light" }, {}, {
      default: () => {
        return `${validate_component(Folder, "Folder").$$render($$result, { size: 10 }, {}, {})}`;
      }
    })}` : ``}</div>` : `${"job_kind" in job && job.job_kind == "preview" ? `<a href="${escape(base, true) + "/run/" + escape(job.id, true) + "?workspace=" + escape(job.workspace_id, true)}">Preview without path</a>` : `${"job_kind" in job && job.job_kind == "dependencies" ? `<a href="${escape(base, true) + "/run/" + escape(job.id, true) + "?workspace=" + escape(job.workspace_id, true)}">lock deps of ${escape(truncateHash(job.script_hash ?? ""))}</a>` : `${"job_kind" in job && job.job_kind == "identity" ? `<a href="${escape(base, true) + "/run/" + escape(job.id, true) + "?workspace=" + escape(job.workspace_id, true)}">no op</a>` : ``}`}`}`}</div></div>`}</div> ${job && job.parent_job ? `${job.is_flow_step ? `<div class="flex flex-row gap-1 items-center">${validate_component(BarsStaggered, "BarsStaggered").$$render($$result, { class: "text-secondary", size: 14 }, {}, {})} <span class="mx-1 text-xs">Step of flow <a${add_attribute("href", `${base}/run/${job.parent_job}?workspace=${job.workspace_id}`, 0)}>${escape(truncateRev(job.parent_job, 6))}</a></span></div>` : `<div class="flex flex-row gap-1 items-center"><span class="text-2xs text-tertiary truncate">parent <a${add_attribute("href", `${base}/run/${job.parent_job}?workspace=${job.workspace_id}`, 0)}>${escape(truncateRev(job.parent_job, 10))}</a></span></div>`}` : ``}</div> ${containsLabel ? `<div class="w-3/12 flex justify-start">${job && job?.["labels"] ? `<div class="flex flex-row items-center gap-1 overflow-x-auto">${Array.isArray(job?.["labels"]) ? `${each(job?.["labels"], (label) => {
      return `${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: "border",
          size: "xs2",
          btnClasses: twMerge(
            activeLabel == label ? "bg-blue-50 dark:bg-blue-900/50" : "",
            "!text-2xs !font-normal truncate max-w-28"
          ),
          color: "light"
        },
        {},
        {
          default: () => {
            return `${escape(label)} ${validate_component(List_filter, "ListFilter").$$render($$result, { size: 10 }, {}, {})} `;
          }
        }
      )}`;
    })}` : ``}</div>` : ``}</div>` : ``} <div class="w-3/12 flex justify-start">${job && job.schedule_path ? `<div class="flex flex-row items-center gap-1">${validate_component(Calendar, "Calendar").$$render($$result, { size: 14 }, {}, {})} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs2",
        color: "light",
        btnClasses: "font-normal"
      },
      {},
      {
        default: () => {
          return `<div class="truncate text-ellipsis text-left" style="${"max-width: " + escape(triggeredByWidth - 48, true) + "px"}">${escape(job.schedule_path)}</div>`;
        }
      }
    )}</div>` : `<div class="flex flex-row gap-1 items-center"><div class="text-xs">${escape(job.created_by)}</div> ${!isExternal ? `${validate_component(Button, "Button").$$render($$result, { size: "xs2", color: "light" }, {}, {
      default: () => {
        return `${validate_component(List_filter, "ListFilter").$$render($$result, { size: 10 }, {}, {})}`;
      }
    })}` : ``}</div>`}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
function getTime(job) {
  return job["started_at"] ?? job["scheduled_for"] ?? job["created_at"];
}
function isJobCancelable$1(j) {
  return j.type === "QueuedJob" && !j.schedule_path;
}
function jobCountString$1(jobCount) {
  const jc = jobCount;
  const isTruncated = jc >= 1e3;
  return `${jc}${isTruncated ? "+" : ""} job${jc != 1 ? "s" : ""}`;
}
const RunsTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let groupedJobs;
  let flatJobs;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { jobs = void 0 } = $$props;
  let { externalJobs = [] } = $$props;
  let { omittedObscuredJobs } = $$props;
  let { showExternalJobs = false } = $$props;
  let { isSelectingJobsToCancel = false } = $$props;
  let { selectedIds = [] } = $$props;
  let { selectedWorkspace = void 0 } = $$props;
  let { activeLabel = null } = $$props;
  let containsLabel = false;
  function groupJobsByDay(jobs2) {
    const groupedLogs = {};
    if (!jobs2) return groupedLogs;
    let newContainsLabel = false;
    for (const job of jobs2) {
      if (job?.["labels"] != void 0) {
        newContainsLabel = true;
      }
      const field = getTime(job);
      if (field) {
        const date = new Date(field);
        date.setMilliseconds(date.getMilliseconds());
        const day = date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        });
        if (!groupedLogs[day]) {
          groupedLogs[day] = [];
        }
        groupedLogs[day].push(job);
      }
    }
    containsLabel = newContainsLabel;
    for (const day in groupedLogs) {
      groupedLogs[day].sort((a, b) => {
        return new Date(getTime(b)).getTime() - new Date(getTime(a)).getTime();
      });
    }
    const sortedLogs = {};
    Object.keys(groupedLogs).sort((a, b) => {
      return new Date(b).getTime() - new Date(a).getTime();
    }).forEach((key) => {
      sortedLogs[key] = groupedLogs[key];
    });
    return sortedLogs;
  }
  function flattenJobs(groupedJobs2) {
    const flatJobs2 = [];
    for (const [date, jobsByDay] of Object.entries(groupedJobs2)) {
      flatJobs2.push({ type: "date", date });
      for (const job of jobsByDay) {
        flatJobs2.push({ type: "job", job });
      }
    }
    return flatJobs2;
  }
  let stickyIndices = [];
  let tableHeight = 0;
  let header = 0;
  let containerWidth = 0;
  let allSelected = false;
  let cancelableJobCount = 0;
  createEventDispatcher();
  if ($$props.jobs === void 0 && $$bindings.jobs && jobs !== void 0) $$bindings.jobs(jobs);
  if ($$props.externalJobs === void 0 && $$bindings.externalJobs && externalJobs !== void 0) $$bindings.externalJobs(externalJobs);
  if ($$props.omittedObscuredJobs === void 0 && $$bindings.omittedObscuredJobs && omittedObscuredJobs !== void 0) $$bindings.omittedObscuredJobs(omittedObscuredJobs);
  if ($$props.showExternalJobs === void 0 && $$bindings.showExternalJobs && showExternalJobs !== void 0) $$bindings.showExternalJobs(showExternalJobs);
  if ($$props.isSelectingJobsToCancel === void 0 && $$bindings.isSelectingJobsToCancel && isSelectingJobsToCancel !== void 0) $$bindings.isSelectingJobsToCancel(isSelectingJobsToCancel);
  if ($$props.selectedIds === void 0 && $$bindings.selectedIds && selectedIds !== void 0) $$bindings.selectedIds(selectedIds);
  if ($$props.selectedWorkspace === void 0 && $$bindings.selectedWorkspace && selectedWorkspace !== void 0) $$bindings.selectedWorkspace(selectedWorkspace);
  if ($$props.activeLabel === void 0 && $$bindings.activeLabel && activeLabel !== void 0) $$bindings.activeLabel(activeLabel);
  groupedJobs = jobs ? showExternalJobs ? groupJobsByDay([...jobs, ...externalJobs]) : groupJobsByDay(jobs) : void 0;
  flatJobs = groupedJobs ? flattenJobs(groupedJobs) : void 0;
  {
    {
      stickyIndices = [];
      let index = 0;
      for (const entry of flatJobs ?? []) {
        if (entry.type === "date") {
          stickyIndices.push(index);
        }
        index++;
      }
    }
  }
  isSelectingJobsToCancel && (cancelableJobCount = jobs?.filter(isJobCancelable$1).length ?? 0);
  isSelectingJobsToCancel && (allSelected = selectedIds.length === cancelableJobCount);
  $$unsubscribe_workspaceStore();
  return ` <div class="divide-y min-w-[640px] h-full" id="runs-table-wrapper"><div>${isSelectingJobsToCancel && cancelableJobCount != 0 ? `  <div${add_attribute("class", twMerge("hover:bg-surface-hover bg-surface-primary cursor-pointer", allSelected ? "bg-blue-50 dark:bg-blue-900/50" : "", "flex flex-row items-center sticky w-full p-2 pr-4 top-0 font-semibold border-t text-sm"), 0)}><div class="px-2"><input type="checkbox" ${allSelected ? "checked" : ""}></div>
				Select all</div>` : ``} <div class="flex flex-row bg-surface-secondary sticky top-0 w-full p-2 pr-4">${showExternalJobs && externalJobs.length > 0 ? `<div class="w-1/12 text-2xs"><div class="flex flex-row">${escape(jobs && jobCountString$1(jobs.length + externalJobs.length))}${validate_component(Tooltip$1, "Tooltip").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(externalJobs.length)} jobs obscured`;
    }
  })}</div></div>` : `${$workspaceStore !== "admins" && omittedObscuredJobs ? `<div class="w-1/12 text-2xs flex flex-row">${escape(jobs && jobCountString$1(jobs.length))} ${validate_component(Popover, "Popover").$$render($$result, {}, {}, {
    text: () => {
      return `Too specific filtering may have caused the omission of obscured jobs. This is done for
							security reasons. To see obscured jobs, try removing some filters.
						`;
    },
    default: () => {
      return `${validate_component(Alert_triangle, "AlertTriangle").$$render(
        $$result,
        {
          size: 16,
          class: "ml-0.5 text-yellow-500"
        },
        {},
        {}
      )}`;
    }
  })}</div>` : `<div class="w-1/12 text-2xs">${escape(jobs && jobCountString$1(jobs.length))}</div>`}`} <div class="w-4/12 text-xs font-semibold" data-svelte-h="svelte-1ib55d1">Timestamp</div> <div class="w-4/12 text-xs font-semibold" data-svelte-h="svelte-yhjak0">Path</div> ${containsLabel ? `<div class="w-3/12 text-xs font-semibold" data-svelte-h="svelte-w8iy5w">Label</div>` : ``} <div class="w-3/12 text-xs font-semibold" data-svelte-h="svelte-6403ce">Triggered by</div></div></div> ${validate_component(VirtualList, "VirtualList").$$render(
    $$result,
    {
      width: "100%",
      height: tableHeight - header,
      itemCount: flatJobs?.length ?? 3,
      itemSize: 42,
      stickyIndices
    },
    {},
    {
      item: ({ style, index }) => {
        return `<div slot="item"${add_attribute("style", style, 0)} class="w-full">${flatJobs ? (() => {
          let jobOrDate = flatJobs[index];
          return ` ${jobOrDate ? `${jobOrDate?.type === "date" ? `<div class="bg-surface-secondary py-2 border-b font-semibold text-xs pl-5">${escape(jobOrDate.date)}</div>` : `<div class="flex flex-row items-center h-full w-full">${validate_component(RunRow, "RunRow").$$render(
            $$result,
            {
              containsLabel,
              job: jobOrDate.job,
              selected: jobOrDate.job.id !== "-" && selectedIds.includes(jobOrDate.job.id),
              isSelectingJobsToCancel,
              activeLabel,
              containerWidth
            },
            {},
            {}
          )}</div>`}` : `${escape(JSON.stringify(jobOrDate))}`}`;
        })() : `<div class="flex flex-row items-center h-full w-full" data-svelte-h="svelte-15sv8s7"><div class="w-1/12 text-2xs">...</div> <div class="w-4/12 text-xs">...</div> <div class="w-4/12 text-xs">...</div> <div class="w-3/12 text-xs">...</div></div>`}</div>`;
      }
    }
  )}</div> ${jobs?.length == 0 && (!showExternalJobs || externalJobs?.length == 0) ? `<tr data-svelte-h="svelte-a5vhyg"><td colspan="4" class="text-center py-8"><div class="text-xs text-secondary">No jobs found for the selected filters.</div></td></tr>` : ``}`;
});
const ToggleButtonMore = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selected, $$unsubscribe_selected;
  let { disabled = false } = $$props;
  let { small = false } = $$props;
  let { light = false } = $$props;
  let { id = void 0 } = $$props;
  let { togglableItems } = $$props;
  const { select, selected } = getContext("ToggleButtonGroup");
  $$unsubscribe_selected = subscribe(selected, (value) => $selected = value);
  let items = togglableItems.map((i) => ({
    displayName: i.label,
    action: () => select(i.value)
  }));
  function isAnOptionSelected(selected2) {
    return togglableItems.some((i) => i.value === selected2);
  }
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.small === void 0 && $$bindings.small && small !== void 0) $$bindings.small(small);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0) $$bindings.light(light);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.togglableItems === void 0 && $$bindings.togglableItems && togglableItems !== void 0) $$bindings.togglableItems(togglableItems);
  $$unsubscribe_selected();
  return `${validate_component(Popover, "Popover").$$render(
    $$result,
    {
      disablePopup: true,
      notClickable: true,
      class: twMerge("flex", disabled ? "cursor-not-allowed" : "cursor-pointer"),
      disappearTimeout: 0
    },
    {},
    {
      default: () => {
        return `<div${add_attribute("id", id, 0)} class="flex">${isAnOptionSelected($selected) ? `${validate_component(Tab, "Tab").$$render(
          $$result,
          {
            disabled,
            class: twMerge(
              " rounded-md transition-all text-xs flex gap-1 flex-row items-center",
              small ? "px-1.5 py-0.5 text-2xs" : "px-2 py-1",
              light ? "font-medium" : "",
              isAnOptionSelected($selected) ? "bg-surface shadow-md" : "bg-surface-secondary hover:bg-surface-hover",
              $$props.class
            )
          },
          {},
          {
            default: () => {
              return `${escape(togglableItems.find((i) => i.value === $selected)?.label)}`;
            }
          }
        )}` : ``} <div class="flex items-center">${validate_component(DropdownV2, "DropdownV2").$$render($$result, { items }, {}, {})}</div></div>`;
      }
    }
  )}`;
});
const RunsFilter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let displayedLabel;
  let displayedConcurrencyKey;
  let displayedTag;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  let { path = null } = $$props;
  let { label = null } = $$props;
  let { concurrencyKey = null } = $$props;
  let { tag = null } = $$props;
  let { success = void 0 } = $$props;
  let { isSkipped = void 0 } = $$props;
  let { argFilter } = $$props;
  let { argError } = $$props;
  let { resultFilter } = $$props;
  let { resultError } = $$props;
  let { jobKindsCat } = $$props;
  let { user = null } = $$props;
  let { folder = null } = $$props;
  let { mobile = false } = $$props;
  let { paths = [] } = $$props;
  let { usernames = [] } = $$props;
  let { folders = [] } = $$props;
  let { allWorkspaces = false } = $$props;
  let copyArgFilter = argFilter;
  let copyResultFilter = resultFilter;
  let { filterBy = "path" } = $$props;
  createEventDispatcher();
  if ($$props.path === void 0 && $$bindings.path && path !== void 0) $$bindings.path(path);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.concurrencyKey === void 0 && $$bindings.concurrencyKey && concurrencyKey !== void 0) $$bindings.concurrencyKey(concurrencyKey);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
  if ($$props.success === void 0 && $$bindings.success && success !== void 0) $$bindings.success(success);
  if ($$props.isSkipped === void 0 && $$bindings.isSkipped && isSkipped !== void 0) $$bindings.isSkipped(isSkipped);
  if ($$props.argFilter === void 0 && $$bindings.argFilter && argFilter !== void 0) $$bindings.argFilter(argFilter);
  if ($$props.argError === void 0 && $$bindings.argError && argError !== void 0) $$bindings.argError(argError);
  if ($$props.resultFilter === void 0 && $$bindings.resultFilter && resultFilter !== void 0) $$bindings.resultFilter(resultFilter);
  if ($$props.resultError === void 0 && $$bindings.resultError && resultError !== void 0) $$bindings.resultError(resultError);
  if ($$props.jobKindsCat === void 0 && $$bindings.jobKindsCat && jobKindsCat !== void 0) $$bindings.jobKindsCat(jobKindsCat);
  if ($$props.user === void 0 && $$bindings.user && user !== void 0) $$bindings.user(user);
  if ($$props.folder === void 0 && $$bindings.folder && folder !== void 0) $$bindings.folder(folder);
  if ($$props.mobile === void 0 && $$bindings.mobile && mobile !== void 0) $$bindings.mobile(mobile);
  if ($$props.paths === void 0 && $$bindings.paths && paths !== void 0) $$bindings.paths(paths);
  if ($$props.usernames === void 0 && $$bindings.usernames && usernames !== void 0) $$bindings.usernames(usernames);
  if ($$props.folders === void 0 && $$bindings.folders && folders !== void 0) $$bindings.folders(folders);
  if ($$props.allWorkspaces === void 0 && $$bindings.allWorkspaces && allWorkspaces !== void 0) $$bindings.allWorkspaces(allWorkspaces);
  if ($$props.filterBy === void 0 && $$bindings.filterBy && filterBy !== void 0) $$bindings.filterBy(filterBy);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    displayedLabel = label;
    displayedConcurrencyKey = concurrencyKey;
    displayedTag = tag;
    {
      {
        if (path !== null && path !== "" && filterBy !== "path") {
          filterBy = "path";
        } else if (user !== null && user !== "" && filterBy !== "user") {
          filterBy = "user";
        } else if (folder !== null && folder !== "" && filterBy !== "folder") {
          filterBy = "folder";
        } else if (label !== null && label !== "" && filterBy !== "label") {
          filterBy = "label";
        } else if (concurrencyKey !== null && concurrencyKey !== "" && filterBy !== "concurrencyKey") {
          filterBy = "concurrencyKey";
        } else if (tag !== null && tag !== "" && filterBy !== "tag") {
          filterBy = "tag";
        }
      }
    }
    $$rendered = `<div class="flex gap-4">${!mobile ? `<div class="flex gap-2">${$workspaceStore == "admins" ? `<div class="relative"><span class="text-xs absolute -top-4" data-svelte-h="svelte-1qqgw54">Workspaces</span> ${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
      $$result,
      { selected: allWorkspaces },
      {
        selected: ($$value) => {
          allWorkspaces = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: false, label: "Admins" }, {}, {})} ${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: true, label: "All" }, {}, {})}`;
        }
      }
    )}</div>` : ``} <div class="relative"><span class="text-xs absolute -top-4" data-svelte-h="svelte-hxoxdn">Filter by</span> ${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
      $$result,
      { selected: filterBy },
      {
        selected: ($$value) => {
          filterBy = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: "path", label: "Path" }, {}, {})} ${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: "user", label: "User" }, {}, {})} ${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: "folder", label: "Folder" }, {}, {})} ${validate_component(ToggleButtonMore, "ToggleButtonMore").$$render(
            $$result,
            {
              togglableItems: [
                {
                  label: "Concurrency key",
                  value: "concurrencyKey"
                },
                { label: "Label", value: "label" },
                { label: "Tag", value: "tag" }
              ]
            },
            {},
            {}
          )}`;
        }
      }
    )}</div> ${filterBy == "user" ? `<div class="relative">${user ? `<button class="absolute top-2 right-2 z-50">${validate_component(X, "X").$$render($$result, { size: 14 }, {}, {})}</button>` : `${validate_component(Chevron_down, "ChevronDown").$$render(
      $$result,
      {
        class: "absolute top-2 right-2",
        size: 14
      },
      {},
      {}
    )}`} <span class="text-xs absolute -top-4" data-svelte-h="svelte-1pyie1l">User</span> ${validate_component(SimpleAutocomplete, "AutoComplete").$$render(
      $$result,
      {
        create: true,
        onCreate: (user2) => {
          usernames.push(user2);
          return user2;
        },
        createText: "Press enter to use this value",
        noInputStyles: true,
        items: usernames,
        value: user,
        inputClassName: "!h-[32px] py-1 !text-xs !w-64",
        hideArrow: true,
        className: user ? "!font-bold" : "",
        dropdownClassName: "!font-normal !w-64 !max-w-64",
        selectedItem: user
      },
      {
        selectedItem: ($$value) => {
          user = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : `${filterBy == "folder" ? `<div class="relative">${folder ? `<button class="absolute top-2 right-2 z-50">${validate_component(X, "X").$$render($$result, { size: 14 }, {}, {})}</button>` : `${validate_component(Chevron_down, "ChevronDown").$$render(
      $$result,
      {
        class: "absolute top-2 right-2",
        size: 14
      },
      {},
      {}
    )}`} <span class="text-xs absolute -top-4" data-svelte-h="svelte-wldlua">Folder</span> ${validate_component(SimpleAutocomplete, "AutoComplete").$$render(
      $$result,
      {
        noInputStyles: true,
        items: folders,
        value: folder,
        inputClassName: "!h-[32px] py-1 !text-xs !w-64",
        hideArrow: true,
        className: folder ? "!font-bold" : "",
        dropdownClassName: "!font-normal !w-64 !max-w-64",
        selectedItem: folder
      },
      {
        selectedItem: ($$value) => {
          folder = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : `${filterBy === "path" ? `<div class="relative">${path ? `<button class="absolute top-2 right-2 z-50">${validate_component(X, "X").$$render($$result, { size: 14 }, {}, {})}</button>` : `${validate_component(Chevron_down, "ChevronDown").$$render(
      $$result,
      {
        class: "absolute top-2 right-2",
        size: 14
      },
      {},
      {}
    )}`} <span class="text-xs absolute -top-4" data-svelte-h="svelte-1w50znp">Path</span> ${validate_component(SimpleAutocomplete, "AutoComplete").$$render(
      $$result,
      {
        create: true,
        onCreate: (path2) => {
          paths.push(path2);
          return path2;
        },
        createText: "Press enter to use this value",
        noInputStyles: true,
        items: paths,
        value: path,
        inputClassName: "!h-[32px] py-1 !text-xs !w-64",
        hideArrow: true,
        className: path ? "!font-bold" : "",
        dropdownClassName: "!font-normal !w-64 !max-w-64",
        selectedItem: path
      },
      {
        selectedItem: ($$value) => {
          path = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : `${filterBy === "label" ? `<div class="relative">${label ? `<button class="absolute top-2 right-2 z-50">${validate_component(X, "X").$$render($$result, { size: 14 }, {}, {})}</button>` : ``} <span class="text-xs absolute -top-4">Label ${validate_component(Tooltip$1, "Tooltip").$$render($$result, {}, {}, {
      default: () => {
        return `Labels are string values in the array at the result field &#39;wm_labels&#39; to easily
								filter them`;
      }
    })}</span> <input autofocus type="text" class="!h-[32px] py-1 !text-xs !w-64"${add_attribute("value", displayedLabel, 0)}></div>` : `${filterBy === "concurrencyKey" ? `<div class="relative">${concurrencyKey ? `<button class="absolute top-2 right-2 z-50">${validate_component(X, "X").$$render($$result, { size: 14 }, {}, {})}</button>` : ``} <span class="text-xs absolute -top-4">Concurrency Key ${validate_component(Tooltip$1, "Tooltip").$$render($$result, {}, {}, {
      default: () => {
        return `For concurrency limited jobs, the concurrency key defines a group of jobs that share
								the same limits.
								${!$enterpriseLicense ? `Concurrency limits are an EE feature.` : ``}`;
      }
    })}</span> <input autofocus type="text" class="!h-[32px] py-1 !text-xs !w-64"${add_attribute("value", displayedConcurrencyKey, 0)}></div>` : `${filterBy === "tag" ? `<div class="relative">${tag ? `<button class="absolute top-2 right-2 z-50">${validate_component(X, "X").$$render($$result, { size: 14 }, {}, {})}</button>` : ``} <span class="text-xs absolute -top-4" data-svelte-h="svelte-2ovw46">Tag</span> <input autofocus type="text" class="!h-[32px] py-1 !text-xs !w-64"${add_attribute("value", displayedTag, 0)}></div>` : ``}`}`}`}`}`}</div> <div class="relative"><span class="text-xs absolute -top-4" data-svelte-h="svelte-vw9cog">Kind</span> ${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
      $$result,
      { selected: jobKindsCat },
      {
        selected: ($$value) => {
          jobKindsCat = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: "all", label: "All" }, {}, {})} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              value: "runs",
              label: "Runs",
              showTooltipIcon: true,
              tooltip: "Runs are jobs that have no parent jobs (flows are jobs that are parent of the jobs they start), they have been triggered through the UI, a schedule or webhook"
            },
            {},
            {}
          )} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              value: "previews",
              label: "Previews",
              showTooltipIcon: true,
              tooltip: "Previews are jobs that have been started in the editor as 'Tests'"
            },
            {},
            {}
          )} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              value: "dependencies",
              label: "Deps",
              showTooltipIcon: true,
              tooltip: "Deploying a script, flow or an app launch a dependency job that create and then attach the lockfile to the deployed item. This mechanism ensure that logic is always executed with the exact same direct and indirect dependencies."
            },
            {},
            {}
          )} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              value: "deploymentcallbacks",
              label: "Sync",
              showTooltipIcon: true,
              tooltip: "Sync jobs that are triggered on every script deployment to sync the workspace with the Git repository configured in the the workspace settings"
            },
            {},
            {}
          )}`;
        }
      }
    )}</div> <div class="relative"><span class="text-xs absolute -top-4" data-svelte-h="svelte-8hcda0">Status</span> ${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
      $$result,
      { selected: success },
      {
        selected: ($$value) => {
          success = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: void 0, label: "All" }, {}, {})} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              value: "running",
              tooltip: "Running",
              class: "whitespace-nowrap",
              icon: Play_circle,
              iconProps: {
                color: success === "running" ? "blue" : "gray"
              }
            },
            {},
            {}
          )} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              value: "success",
              tooltip: "Success",
              class: "whitespace-nowrap",
              icon: Check_circle_2,
              iconProps: {
                color: success === "success" ? "green" : "gray"
              }
            },
            {},
            {}
          )} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              value: "failure",
              tooltip: "Failure",
              class: "whitespace-nowrap",
              icon: Alert_circle,
              iconProps: {
                color: success === "failure" ? "red" : "gray"
              }
            },
            {},
            {}
          )}`;
        }
      }
    )}</div>` : ``} ${validate_component(Popup, "Popup").$$render(
      $$result,
      {
        floatingConfig: {
          strategy: "absolute",
          placement: "bottom-end"
        },
        containerClasses: "border rounded-lg shadow-lg p-6 bg-surface"
      },
      {},
      {
        button: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              color: "dark",
              size: "xs",
              nonCaptureEvent: true,
              startIcon: { icon: Filter }
            },
            {},
            {
              default: () => {
                return `More filters`;
              }
            }
          )} `;
        },
        default: ({ close }) => {
          return `${validate_component(Section, "Section").$$render($$result, { label: "Filters" }, {}, {
            action: () => {
              return `${validate_component(CloseButton, "CloseButton").$$render($$result, {}, {}, {})} `;
            },
            default: () => {
              return `<div class="w-80 flex flex-col gap-4">${mobile ? `${validate_component(Label, "Label").$$render($$result, { label: "Filter by" }, {}, {
                default: () => {
                  return `${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
                    $$result,
                    { selected: filterBy },
                    {
                      selected: ($$value) => {
                        filterBy = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: "path", label: "Path" }, {}, {})} ${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: "user", label: "User" }, {}, {})} ${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: "folder", label: "Folder" }, {}, {})} ${validate_component(ToggleButton, "ToggleButton").$$render(
                          $$result,
                          {
                            value: "concurrencyKey",
                            label: "Concurrency"
                          },
                          {},
                          {}
                        )} ${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: "tag", label: "Tag" }, {}, {})} ${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: "label", label: "Label" }, {}, {})}`;
                      }
                    }
                  )}`;
                }
              })} ${filterBy == "user" ? `${validate_component(Label, "Label").$$render($$result, { label: "User" }, {}, {
                default: () => {
                  return `<div class="relative w-full">${user ? `<button class="absolute top-2 right-2 z-50">${validate_component(X, "X").$$render($$result, { size: 14 }, {}, {})}</button>` : `${validate_component(Chevron_down, "ChevronDown").$$render(
                    $$result,
                    {
                      class: "absolute top-2 right-2",
                      size: 14
                    },
                    {},
                    {}
                  )}`} ${validate_component(SimpleAutocomplete, "AutoComplete").$$render(
                    $$result,
                    {
                      items: usernames,
                      value: user,
                      inputClassName: "!h-[32px] py-1 !text-xs !w-80",
                      hideArrow: true,
                      className: user ? "!font-bold" : "",
                      dropdownClassName: "!font-normal !w-80 !max-w-80",
                      selectedItem: user
                    },
                    {
                      selectedItem: ($$value) => {
                        user = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div>`;
                }
              })}` : `${filterBy == "folder" ? `${validate_component(Label, "Label").$$render($$result, { label: "Folder" }, {}, {
                default: () => {
                  return `<div class="relative w-full">${folder ? `<button class="absolute top-2 right-2 z-50">${validate_component(X, "X").$$render($$result, { size: 14 }, {}, {})}</button>` : `${validate_component(Chevron_down, "ChevronDown").$$render(
                    $$result,
                    {
                      class: "absolute top-2 right-2",
                      size: 14
                    },
                    {},
                    {}
                  )}`} ${validate_component(SimpleAutocomplete, "AutoComplete").$$render(
                    $$result,
                    {
                      noInputStyles: true,
                      items: folders,
                      value: folder,
                      inputClassName: "!h-[32px] py-1 !text-xs !w-80",
                      hideArrow: true,
                      className: folder ? "!font-bold" : "",
                      dropdownClassName: "!font-normal !w-80 !max-w-80",
                      selectedItem: folder
                    },
                    {
                      selectedItem: ($$value) => {
                        folder = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div>`;
                }
              })}` : `${filterBy === "path" ? `${validate_component(Label, "Label").$$render($$result, { label: "Path" }, {}, {
                default: () => {
                  return `<div class="relative w-full">${path ? `<button class="absolute top-2 right-2 z-50">${validate_component(X, "X").$$render($$result, { size: 14 }, {}, {})}</button>` : `${validate_component(Chevron_down, "ChevronDown").$$render(
                    $$result,
                    {
                      class: "absolute top-2 right-2",
                      size: 14
                    },
                    {},
                    {}
                  )}`} ${validate_component(SimpleAutocomplete, "AutoComplete").$$render(
                    $$result,
                    {
                      noInputStyles: true,
                      items: paths,
                      value: path,
                      inputClassName: "!h-[32px] py-1 !text-xs !w-80",
                      hideArrow: true,
                      className: path ? "!font-bold" : "",
                      dropdownClassName: "!font-normal !w-80 !max-w-80",
                      selectedItem: path
                    },
                    {
                      selectedItem: ($$value) => {
                        path = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div>`;
                }
              })}` : `${filterBy === "tag" ? `${validate_component(Label, "Label").$$render($$result, { label: "Tag" }, {}, {
                default: () => {
                  return `<div class="relative w-full">${tag ? `<button class="absolute top-2 right-2 z-50">${validate_component(X, "X").$$render($$result, { size: 14 }, {}, {})}</button>` : ``} <input autofocus type="text" class="!h-[32px] py-1 !text-xs !w-80"${add_attribute("value", displayedTag, 0)}></div>`;
                }
              })}` : `${filterBy === "label" ? `${validate_component(Label, "Label").$$render($$result, { label: "Label" }, {}, {
                default: () => {
                  return `<div class="relative w-full">${label ? `<button class="absolute top-2 right-2 z-50">${validate_component(X, "X").$$render($$result, { size: 14 }, {}, {})}</button>` : ``} <input autofocus type="text" class="!h-[32px] py-1 !text-xs !w-80"${add_attribute("value", displayedLabel, 0)}></div>`;
                }
              })}` : `${filterBy === "concurrencyKey" ? `${validate_component(Label, "Label").$$render($$result, { label: "Concurrency Key" }, {}, {
                default: () => {
                  return `<div class="relative w-full">${concurrencyKey ? `<button class="absolute top-2 right-2 z-50">${validate_component(X, "X").$$render($$result, { size: 14 }, {}, {})}</button>` : ``} <input autofocus type="text" class="!h-[32px] py-1 !text-xs !w-80"${add_attribute("value", displayedConcurrencyKey, 0)}></div>`;
                }
              })}` : ``}`}`}`}`}`} ${validate_component(Label, "Label").$$render($$result, { label: "Kind" }, {}, {
                default: () => {
                  return `${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
                    $$result,
                    { selected: jobKindsCat },
                    {
                      selected: ($$value) => {
                        jobKindsCat = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: "all", label: "All" }, {}, {})} ${validate_component(ToggleButton, "ToggleButton").$$render(
                          $$result,
                          {
                            value: "runs",
                            label: "Runs",
                            showTooltipIcon: true,
                            tooltip: "Runs are jobs that have no parent jobs (flows are jobs that are parent of the jobs they start), they have been triggered through the UI, a schedule or webhook"
                          },
                          {},
                          {}
                        )} ${validate_component(ToggleButton, "ToggleButton").$$render(
                          $$result,
                          {
                            value: "previews",
                            label: "Previews",
                            showTooltipIcon: true,
                            tooltip: "Previews are jobs that have been started in the editor as 'Tests'"
                          },
                          {},
                          {}
                        )} ${validate_component(ToggleButton, "ToggleButton").$$render(
                          $$result,
                          {
                            value: "dependencies",
                            label: "Deps",
                            showTooltipIcon: true,
                            tooltip: "Deploying a script, flow or an app launch a dependency job that create and then attach the lockfile to the deployed item. This mechanism ensure that logic is always executed with the exact same direct and indirect dependencies."
                          },
                          {},
                          {}
                        )} ${validate_component(ToggleButton, "ToggleButton").$$render(
                          $$result,
                          {
                            value: "deploymentcallbacks",
                            label: "Sync",
                            showTooltipIcon: true,
                            tooltip: "Sync jobs that are triggered on every script deployment to sync the workspace with the Git repository configured in the the workspace settings"
                          },
                          {},
                          {}
                        )}`;
                      }
                    }
                  )}`;
                }
              })} ${validate_component(Label, "Label").$$render($$result, { label: "Status" }, {}, {
                default: () => {
                  return `${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
                    $$result,
                    { selected: success },
                    {
                      selected: ($$value) => {
                        success = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: void 0, label: "All" }, {}, {})} ${validate_component(ToggleButton, "ToggleButton").$$render(
                          $$result,
                          {
                            value: "running",
                            label: "Running",
                            class: "whitespace-nowrap"
                          },
                          {},
                          {}
                        )} ${validate_component(ToggleButton, "ToggleButton").$$render(
                          $$result,
                          {
                            value: "success",
                            label: "Success",
                            class: "whitespace-nowrap"
                          },
                          {},
                          {}
                        )} ${validate_component(ToggleButton, "ToggleButton").$$render(
                          $$result,
                          {
                            value: "failure",
                            label: "Failure",
                            class: "whitespace-nowrap"
                          },
                          {},
                          {}
                        )}`;
                      }
                    }
                  )}`;
                }
              })}` : ``} ${validate_component(Label, "Label").$$render($$result, { label: "Show Skipped Flows" }, {}, {
                default: () => {
                  return `<div class="flex flex-row gap-1 items-center">${validate_component(Toggle, "Toggle").$$render(
                    $$result,
                    { size: "xs", checked: isSkipped },
                    {
                      checked: ($$value) => {
                        isSkipped = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )} ${validate_component(Tooltip$1, "Tooltip").$$render($$result, {}, {}, {
                    default: () => {
                      return `Skipped flows are flows that did an early break`;
                    }
                  })}</div>`;
                }
              })} <span class="text-xs leading-6">${escape(`Filter by a json being a subset of the args/result. Try '{"foo": "bar"}'`)}</span> ${validate_component(Label, "Label").$$render($$result, { label: "Filter by args" }, {}, {
                default: () => {
                  return `${validate_component(JsonEditor, "JsonEditor").$$render(
                    $$result,
                    { error: argError, code: copyArgFilter },
                    {
                      error: ($$value) => {
                        argError = $$value;
                        $$settled = false;
                      },
                      code: ($$value) => {
                        copyArgFilter = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })} ${validate_component(Label, "Label").$$render($$result, { label: "Filter by result" }, {}, {
                default: () => {
                  return `${validate_component(JsonEditor, "JsonEditor").$$render(
                    $$result,
                    {
                      error: resultError,
                      code: copyResultFilter
                    },
                    {
                      error: ($$value) => {
                        resultError = $$value;
                        $$settled = false;
                      },
                      code: ($$value) => {
                        copyResultFilter = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })} <div class="flex flex-row gap-2 justify-between">${validate_component(Button, "Button").$$render($$result, { size: "xs", color: "light" }, {}, {
                default: () => {
                  return `Clear`;
                }
              })} ${validate_component(Button, "Button").$$render($$result, { size: "xs", color: "dark" }, {}, {
                default: () => {
                  return `Set args/result filter`;
                }
              })}</div></div>`;
            }
          })}`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_enterpriseLicense();
  return $$rendered;
});
const QueuePopover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let jobs = void 0;
  let { allWorkspaces = false } = $$props;
  getQueuedJobs();
  async function getQueuedJobs() {
    jobs = await JobService.listQueue({
      workspace: $workspaceStore ?? "",
      scheduledForBeforeNow: true,
      suspended: false,
      running: false,
      allWorkspaces
    });
  }
  if ($$props.allWorkspaces === void 0 && $$bindings.allWorkspaces && allWorkspaces !== void 0) $$bindings.allWorkspaces(allWorkspaces);
  $$unsubscribe_workspaceStore();
  return `${jobs == void 0 ? `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[2, 2], [2, 2]] }, {}, {})}` : `<div class="flex flex-col gap-2 text-sm">${jobs.length > 100 ? `<div class="text-secondary text-xs" data-svelte-h="svelte-1a0vtrh">Only showing the first 100 jobs</div>` : ``} ${each(jobs.slice(0, 100), (job) => {
    return `<div class="flex"><a target="_blank"${add_attribute("href", `/run/${job.id}?workspace=${job.workspace_id}`, 0)} class="flex flex-row gap-2 items-center font-mono mr-8">${escape(job.id)} ${validate_component(External_link, "ExternalLink").$$render($$result, { size: 10 }, {}, {})}</a> <div class="w-32">${escape(displayDate(job.created_at))}</div> <div class="text-2xs text-tertiary">tag: ${escape(job.tag)}</div> </div>`;
  })}</div>`}`;
});
const RunsQueue = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $queue_count, $$unsubscribe_queue_count;
  let { queue_count = void 0 } = $$props;
  $$unsubscribe_queue_count = subscribe(queue_count, (value) => $queue_count = value);
  let { allWorkspaces = false } = $$props;
  if ($$props.queue_count === void 0 && $$bindings.queue_count && queue_count !== void 0) $$bindings.queue_count(queue_count);
  if ($$props.allWorkspaces === void 0 && $$bindings.allWorkspaces && allWorkspaces !== void 0) $$bindings.allWorkspaces(allWorkspaces);
  $$unsubscribe_queue_count();
  return `<div class="flex gap-1 relative max-w-36 min-w-[50px] items-baseline"><div class="text-xs absolute -top-4 truncate" data-svelte-h="svelte-3ijn5b">Jobs waiting for a worker</div> <div class="mt-1">${escape(queue_count ? ($queue_count ?? 0).toFixed(0) : "...")}</div> <div class="truncate text-2xs text-blue-400">${queue_count && ($queue_count ?? 0) > 0 ? `${validate_component(Popup, "Popup").$$render($$result, {}, {}, {
    button: () => {
      return `<span class="text-2xs truncate" data-svelte-h="svelte-1n540io">jobs</span> `;
    },
    default: () => {
      return `${validate_component(QueuePopover, "QueuePopover").$$render($$result, { allWorkspaces }, {}, {})}`;
    }
  })}` : ``}</div></div>`;
});
const ManuelDatePicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { minTs } = $$props;
  let { maxTs } = $$props;
  let { loading = false } = $$props;
  let { selectedManualDate = 0 } = $$props;
  function computeMinMax() {
    return manualDates[selectedManualDate].computeMinMax();
  }
  const manualDates = [
    {
      label: "Last 1000 runs",
      computeMinMax: () => {
        return void 0;
      }
    },
    {
      label: "Within 30 seconds",
      computeMinMax: () => {
        let minTs2 = new Date((/* @__PURE__ */ new Date()).getTime() - 30 * 1e3).toISOString();
        let maxTs2 = (/* @__PURE__ */ new Date()).toISOString();
        return { minTs: minTs2, maxTs: maxTs2 };
      }
    },
    {
      label: "Within last minute",
      computeMinMax: () => {
        let minTs2 = new Date((/* @__PURE__ */ new Date()).getTime() - 60 * 1e3).toISOString();
        let maxTs2 = (/* @__PURE__ */ new Date()).toISOString();
        return { minTs: minTs2, maxTs: maxTs2 };
      }
    },
    {
      label: "Within last 5 minutes",
      computeMinMax: () => {
        let minTs2 = new Date((/* @__PURE__ */ new Date()).getTime() - 5 * 60 * 1e3).toISOString();
        let maxTs2 = (/* @__PURE__ */ new Date()).toISOString();
        return { minTs: minTs2, maxTs: maxTs2 };
      }
    },
    {
      label: "Within last 30 minutes",
      computeMinMax: () => {
        let minTs2 = new Date((/* @__PURE__ */ new Date()).getTime() - 30 * 60 * 1e3).toISOString();
        let maxTs2 = (/* @__PURE__ */ new Date()).toISOString();
        return { minTs: minTs2, maxTs: maxTs2 };
      }
    },
    {
      label: "Within last 24 hours",
      computeMinMax: () => {
        let minTs2 = new Date((/* @__PURE__ */ new Date()).getTime() - 24 * 60 * 60 * 1e3).toISOString();
        let maxTs2 = (/* @__PURE__ */ new Date()).toISOString();
        return { minTs: minTs2, maxTs: maxTs2 };
      }
    },
    {
      label: "Within last 7 days",
      computeMinMax: () => {
        let minTs2 = new Date((/* @__PURE__ */ new Date()).getTime() - 7 * 24 * 60 * 60 * 1e3).toISOString();
        let maxTs2 = (/* @__PURE__ */ new Date()).toISOString();
        return { minTs: minTs2, maxTs: maxTs2 };
      }
    },
    {
      label: "Within last month",
      computeMinMax: () => {
        let minTs2 = new Date((/* @__PURE__ */ new Date()).getTime() - 30 * 24 * 60 * 60 * 1e3).toISOString();
        let maxTs2 = (/* @__PURE__ */ new Date()).toISOString();
        return { minTs: minTs2, maxTs: maxTs2 };
      }
    }
  ];
  const dispatch = createEventDispatcher();
  if ($$props.minTs === void 0 && $$bindings.minTs && minTs !== void 0) $$bindings.minTs(minTs);
  if ($$props.maxTs === void 0 && $$bindings.maxTs && maxTs !== void 0) $$bindings.maxTs(maxTs);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
  if ($$props.selectedManualDate === void 0 && $$bindings.selectedManualDate && selectedManualDate !== void 0) $$bindings.selectedManualDate(selectedManualDate);
  if ($$props.computeMinMax === void 0 && $$bindings.computeMinMax && computeMinMax !== void 0) $$bindings.computeMinMax(computeMinMax);
  return `${validate_component(Button, "Button").$$render(
    $$result,
    {
      color: "light",
      size: "xs",
      variant: "border",
      dropdownItems: [
        ...manualDates.map((d, i) => ({
          label: d.label,
          onClick: () => {
            selectedManualDate = i;
            const ts = d.computeMinMax();
            if (ts) {
              minTs = ts.minTs;
              maxTs = ts.maxTs;
            } else {
              minTs = void 0;
              maxTs = void 0;
            }
            dispatch("loadJobs");
          }
        }))
      ]
    },
    {},
    {
      default: () => {
        return `<div class="flex flex-row items-center gap-2">${validate_component(Refresh_cw, "RefreshCw").$$render(
          $$result,
          {
            size: 14,
            class: loading ? "animate-spin" : ""
          },
          {},
          {}
        )} ${escape(manualDates[selectedManualDate].label)}</div>`;
      }
    }
  )}`;
});
function calculateTimeSeries(extendedJobs) {
  const timeline = /* @__PURE__ */ new Map();
  extendedJobs.jobs.forEach((j) => {
    if (j.started_at != void 0) {
      const startTime = new Date(j.started_at).getTime();
      if (!timeline.has(startTime)) {
        timeline.set(startTime, { count: 0, id_started: [], id_ended: [] });
      }
      const s = timeline.get(startTime);
      s.count += 1;
      s.id_started.push(j.id);
      if (j.type === "CompletedJob") {
        const jc = j;
        const endTime = startTime + jc.duration_ms;
        if (!timeline.has(endTime)) {
          timeline.set(endTime, { count: 0, id_started: [], id_ended: [] });
        }
        const e = timeline.get(endTime);
        e.count -= 1;
        e.id_ended.push(j.id);
      }
    }
  });
  extendedJobs.obscured_jobs.forEach((j) => {
    if (j.started_at != void 0) {
      const startTime = new Date(j.started_at).getTime();
      if (!timeline.has(startTime)) {
        timeline.set(startTime, { count: 0, id_started: [], id_ended: [] });
      }
      const s = timeline.get(startTime);
      s.count += 1;
      s.id_started.push("unknoww");
      if (j.duration_ms != void 0) {
        const jc = j;
        const endTime = startTime + jc.duration_ms;
        if (!timeline.has(endTime)) {
          timeline.set(endTime, { count: 0, id_started: [], id_ended: [] });
        }
        const e = timeline.get(endTime);
        e.count -= 1;
        e.id_ended.push("unknown");
      }
    }
  });
  let count = 0;
  const result = [];
  for (const [time, change] of [...timeline.entries()].sort(([time1], [time2]) => time1 - time2)) {
    count += change.count;
    let msg = "";
    msg += change.id_started.length != 0 ? `${change.id_started.join(",")} started` : "";
    msg += change.id_started.length != 0 && change.id_ended.length != 0 ? "\n" : "";
    msg += change.id_ended.length != 0 ? `${change.id_ended.join(",")} ended` : "";
    result.push({ time: new Date(time), count, msg });
  }
  if (result.length > 0) {
    let start_time = addSeconds(new Date(result[0].time), -1);
    let start_count = 0;
    let end_count = result[result.length - 1].count;
    result.unshift({ time: start_time, count: start_count });
    result.push({ time: /* @__PURE__ */ new Date(), count: end_count });
  }
  return result;
}
function addSeconds(date, seconds) {
  date.setTime(date.getTime() + seconds * 1e3);
  return date;
}
const ConcurrentJobsChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data;
  let options;
  let { extendedJobs = void 0 } = $$props;
  let { maxIsNow = false } = $$props;
  let { minTimeSet = void 0 } = $$props;
  let { maxTimeSet = void 0 } = $$props;
  const dispatch = createEventDispatcher();
  let intervals = void 0;
  Chart.register(Title, Tooltip, Legend, zoomPlugin, LineElement, CategoryScale, LinearScale, PointElement, TimeScale);
  const zoomOptions = {
    pan: {
      enabled: true,
      modifierKey: "ctrl",
      onPanComplete: ({ chart }) => {
        dispatch("zoom", {
          min: addSeconds(new Date(chart.scales.x.min), -1),
          max: addSeconds(new Date(chart.scales.x.max), 1)
        });
      }
    },
    zoom: {
      drag: { enabled: true },
      mode: "x",
      onZoom: ({ chart }) => {
        dispatch("zoom", {
          min: addSeconds(new Date(chart.scales.x.min), -1),
          max: addSeconds(new Date(chart.scales.x.max), 1)
        });
      }
    }
  };
  let minTime = addSeconds(/* @__PURE__ */ new Date(), -300);
  let maxTime = getDbClockNow();
  function minJobTime2(intervals2) {
    return intervals2[0].time;
  }
  function maxJobTime2(intervals2) {
    return intervals2[intervals2?.length - 1].time;
  }
  function computeMinMaxTime(intervals2, minTimeSet2, maxTimeSet2) {
    let minTimeSetDate = minTimeSet2 ? new Date(minTimeSet2) : void 0;
    let maxTimeSetDate = maxTimeSet2 ? new Date(maxTimeSet2) : void 0;
    if (minTimeSetDate && maxTimeSetDate) {
      minTime = minTimeSetDate;
      maxTime = maxTimeSetDate;
      return;
    }
    if (intervals2 == void 0 || intervals2?.length == 0) {
      minTime = minTimeSetDate ?? addSeconds(/* @__PURE__ */ new Date(), -300);
      maxTime = maxTimeSetDate ?? getDbClockNow();
      return;
    }
    const maxJob = maxIsNow ? getDbClockNow() : maxJobTime2(intervals2);
    const minJob = minJobTime2(intervals2);
    const diff = (maxJob.getTime() - minJob.getTime()) / 2e4;
    minTime = minTimeSetDate ?? addSeconds(minJob, -diff);
    if (maxIsNow) {
      maxTime = maxTimeSetDate ?? maxJob;
    } else {
      maxTime = maxTimeSetDate ?? addSeconds(maxJob, diff);
    }
  }
  if ($$props.extendedJobs === void 0 && $$bindings.extendedJobs && extendedJobs !== void 0) $$bindings.extendedJobs(extendedJobs);
  if ($$props.maxIsNow === void 0 && $$bindings.maxIsNow && maxIsNow !== void 0) $$bindings.maxIsNow(maxIsNow);
  if ($$props.minTimeSet === void 0 && $$bindings.minTimeSet && minTimeSet !== void 0) $$bindings.minTimeSet(minTimeSet);
  if ($$props.maxTimeSet === void 0 && $$bindings.maxTimeSet && maxTimeSet !== void 0) $$bindings.maxTimeSet(maxTimeSet);
  intervals = extendedJobs ? calculateTimeSeries(extendedJobs) : void 0;
  data = {
    datasets: [
      {
        borderColor: "#4ade80",
        backgroundColor: "#f8717100",
        pointRadius: 0,
        label: "running",
        showLine: true,
        stepped: true,
        data: intervals?.map((job) => ({ x: job.time, y: job.count, id: job.msg })) ?? []
      }
    ]
  };
  {
    computeMinMaxTime(intervals, minTimeSet, maxTimeSet);
  }
  options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      zoom: zoomOptions,
      legend: { display: false },
      tooltip: {
        callbacks: {
          footer(context) {
            return context[context.length - 1].raw.id;
          }
        }
      }
    },
    scales: {
      x: {
        type: "time",
        grid: { display: false },
        min: minTime,
        max: maxTime
      },
      y: {
        grid: { display: false },
        title: { display: true, text: "concurrent jobs" },
        beginAtZero: true,
        ticks: { stepSize: 1 }
      }
    },
    animation: false,
    interaction: { intersect: false, mode: "index" }
  };
  return `<div class="relative max-h-40">${validate_component(Line, "Line").$$render($$result, { data, options }, {}, {})}</div>`;
});
const warnJobLimitMsg = "The exact number of concurrent jobs at the beginning of the time range may be incorrect as only the last 1000 jobs are taken into account: a job that was started earlier than this limit will not be taken into account";
function typeOfChart(s) {
  switch (s) {
    case "RunChart":
      return "RunChart";
    case "ConcurrencyChart":
      return "ConcurrencyChart";
    default:
      return "RunChart";
  }
}
function isJobCancelable(j) {
  return j.type === "QueuedJob" && !j.schedule_path;
}
function jobCountString(count) {
  return `${count} ${count == 1 ? "job" : "jobs"}`;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let warnJobLimit;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $page, $$unsubscribe_page;
  let $userStore, $$unsubscribe_userStore;
  let $superadmin, $$unsubscribe_superadmin;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_superadmin = subscribe(superadmin, (value) => $superadmin = value);
  let jobs;
  let selectedIds = [];
  let selectedWorkspace = void 0;
  let path = $page.params.path;
  let user = $page.url.searchParams.get("user");
  let folder = $page.url.searchParams.get("folder");
  let label = $page.url.searchParams.get("label");
  let concurrencyKey = $page.url.searchParams.get("concurrency_key");
  let tag = $page.url.searchParams.get("tag");
  let success = $page.url.searchParams.get("success") ?? void 0;
  let isSkipped = $page.url.searchParams.get("is_skipped") != void 0 ? $page.url.searchParams.get("is_skipped") == "true" : false;
  let showSchedules = $page.url.searchParams.get("show_schedules") != void 0 ? $page.url.searchParams.get("show_schedules") == "true" : localStorage.getItem("show_schedules_in_run") == "false" ? false : true;
  let showFutureJobs = $page.url.searchParams.get("show_future_jobs") != void 0 ? $page.url.searchParams.get("show_future_jobs") == "true" : localStorage.getItem("show_future_jobs") == "false" ? false : true;
  let argFilter = $page.url.searchParams.get("arg") ? JSON.parse(decodeURIComponent($page.url.searchParams.get("arg") ?? "{}")) : void 0;
  let resultFilter = $page.url.searchParams.get("result") ? JSON.parse(decodeURIComponent($page.url.searchParams.get("result") ?? "{}")) : void 0;
  let minTs = $page.url.searchParams.get("min_ts") ?? void 0;
  let maxTs = $page.url.searchParams.get("max_ts") ?? void 0;
  let schedulePath = $page.url.searchParams.get("schedule_path") ?? void 0;
  let jobKindsCat = $page.url.searchParams.get("job_kinds") ?? "runs";
  let allWorkspaces = $page.url.searchParams.get("all_workspaces") == "true";
  let queue_count = void 0;
  let jobKinds = void 0;
  let loading = false;
  let paths = [];
  let usernames = [];
  let folders = [];
  let completedJobs = void 0;
  let extendedJobs = void 0;
  let argError = "";
  let resultError = "";
  let selectedManualDate = 0;
  let autoRefresh = true;
  let runDrawer;
  let isCancelingVisibleJobs = false;
  let isCancelingFilteredJobs = false;
  let lookback = 1;
  let innerWidth = window.innerWidth;
  let jobLoader = void 0;
  let externalJobs = void 0;
  let graph = typeOfChart($page.url.searchParams.get("graph"));
  let graphIsRunsChart = graph === "RunChart";
  let manualDatePicker;
  function setQuery() {
    let searchParams = new URLSearchParams();
    if (user) {
      searchParams.set("user", user);
    } else {
      searchParams.delete("user");
    }
    if (folder) {
      searchParams.set("folder", folder);
    } else {
      searchParams.delete("folder");
    }
    if (success !== void 0) {
      searchParams.set("success", success.toString());
    } else {
      searchParams.delete("success");
    }
    if (isSkipped) {
      searchParams.set("is_skipped", isSkipped.toString());
    } else {
      searchParams.delete("is_skipped");
    }
    if (showSchedules) {
      searchParams.set("show_schedules", showSchedules.toString());
    } else {
      searchParams.delete("show_schedules");
    }
    if (showFutureJobs) {
      searchParams.set("show_future_jobs", showFutureJobs.toString());
    } else {
      searchParams.delete("show_future_jobs");
    }
    if (allWorkspaces && $workspaceStore == "admins") {
      searchParams.set("all_workspaces", allWorkspaces.toString());
      searchParams.set("workspace", "admins");
    } else {
      searchParams.delete("all_workspaces");
    }
    if (argFilter) {
      searchParams.set("arg", encodeURIComponent(JSON.stringify(argFilter)));
    } else {
      searchParams.delete("arg");
    }
    if (resultFilter) {
      searchParams.set("result", encodeURIComponent(JSON.stringify(resultFilter)));
    } else {
      searchParams.delete("result");
    }
    if (schedulePath) {
      searchParams.set("schedule_path", schedulePath);
    } else {
      searchParams.delete("schedule_path");
    }
    if (jobKindsCat != "runs") {
      searchParams.set("job_kinds", jobKindsCat);
    } else {
      searchParams.delete("job_kinds");
    }
    if (minTs) {
      searchParams.set("min_ts", minTs);
    } else {
      searchParams.delete("min_ts");
    }
    if (maxTs) {
      searchParams.set("max_ts", maxTs);
    } else {
      searchParams.delete("max_ts");
    }
    if (concurrencyKey) {
      searchParams.set("concurrency_key", concurrencyKey);
    } else {
      searchParams.delete("concurrency_key");
    }
    if (tag) {
      searchParams.set("tag", tag);
    } else {
      searchParams.delete("tag");
    }
    if (label) {
      searchParams.set("label", label);
    } else {
      searchParams.delete("label");
    }
    if (graph != "RunChart") {
      searchParams.set("graph", graph);
    } else {
      searchParams.delete("graph");
    }
    let newPath = path ? `/${path}` : "/";
    let newUrl = `/runs${newPath}?${searchParams.toString()}`;
    replaceState(newUrl.toString(), $page.state);
  }
  async function loadUsernames() {
    usernames = await UserService.listUsernames({ workspace: $workspaceStore });
  }
  async function loadFolders() {
    folders = await FolderService.listFolders({ workspace: $workspaceStore }).then((x) => x.map((y) => y.name));
  }
  async function loadPaths() {
    const npaths_scripts = await ScriptService.listScriptPaths({ workspace: $workspaceStore ?? "" });
    const npaths_flows = await FlowService.listFlowPaths({ workspace: $workspaceStore ?? "" });
    paths = npaths_scripts.concat(npaths_flows).sort();
  }
  let jobIdsToCancel = [];
  let isSelectingJobsToCancel = false;
  let fetchingFilteredJobs = false;
  let selectedFiltersString = void 0;
  async function cancelVisibleJobs() {
    isSelectingJobsToCancel = true;
    selectedIds = jobs?.filter(isJobCancelable).map((j) => j.id) ?? [];
    if (selectedIds.length === 0) {
      sendUserToast("There are no visible jobs that can be canceled", true);
    }
  }
  async function cancelFilteredJobs() {
    isCancelingFilteredJobs = true;
    fetchingFilteredJobs = true;
    const selectedFilters = {
      workspace: $workspaceStore ?? "",
      startedBefore: maxTs,
      startedAfter: minTs,
      schedulePath,
      scriptPathExact: path === null || path === "" ? void 0 : path,
      createdBy: user === null || user === "" ? void 0 : user,
      scriptPathStart: folder === null || folder === "" ? void 0 : `f/${folder}/`,
      jobKinds,
      success: success == "success" ? true : success == "failure" ? false : void 0,
      running: success == "running" ? true : void 0,
      isNotSchedule: showSchedules == false ? true : void 0,
      scheduledForBeforeNow: showFutureJobs == false ? true : void 0,
      args: argFilter && argFilter != "{}" && argFilter != "" && argError == "" ? argFilter : void 0,
      result: resultFilter && resultFilter != "{}" && resultFilter != "" && resultError == "" ? resultFilter : void 0,
      allWorkspaces: allWorkspaces ? true : void 0,
      concurrencyKey: concurrencyKey ?? void 0,
      tag: tag ?? void 0
    };
    selectedFiltersString = JSON.stringify(selectedFilters, null, 4);
    jobIdsToCancel = await JobService.listFilteredUuids(selectedFilters);
    fetchingFilteredJobs = false;
  }
  function setLookback(lookbackInDays) {
    lookback = lookbackInDays;
  }
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    (user || label || folder || path || success !== void 0 || isSkipped || showSchedules || showFutureJobs || argFilter || resultFilter || schedulePath || jobKindsCat || concurrencyKey || tag || graph || minTs || maxTs || allWorkspaces || $workspaceStore) && setQuery();
    {
      if ($workspaceStore) {
        loadUsernames();
        loadFolders();
        loadPaths();
      }
    }
    warnJobLimit = graph === "ConcurrencyChart" && extendedJobs !== void 0 && extendedJobs.jobs.length + extendedJobs.obscured_jobs.length >= 1e3;
    $$rendered = `${validate_component(JobLoader, "JobLoader").$$render(
      $$result,
      {
        allWorkspaces,
        user,
        folder,
        path,
        label,
        success,
        isSkipped,
        argFilter,
        resultFilter,
        showSchedules,
        showFutureJobs,
        schedulePath,
        jobKindsCat,
        computeMinAndMax: manualDatePicker?.computeMinMax,
        jobKinds,
        autoRefresh,
        concurrencyKey,
        argError,
        resultError,
        tag,
        lookback: graphIsRunsChart ? 0 : lookback,
        jobs,
        minTs,
        maxTs,
        queue_count,
        completedJobs,
        externalJobs,
        extendedJobs,
        loading,
        this: jobLoader
      },
      {
        jobs: ($$value) => {
          jobs = $$value;
          $$settled = false;
        },
        minTs: ($$value) => {
          minTs = $$value;
          $$settled = false;
        },
        maxTs: ($$value) => {
          maxTs = $$value;
          $$settled = false;
        },
        queue_count: ($$value) => {
          queue_count = $$value;
          $$settled = false;
        },
        completedJobs: ($$value) => {
          completedJobs = $$value;
          $$settled = false;
        },
        externalJobs: ($$value) => {
          externalJobs = $$value;
          $$settled = false;
        },
        extendedJobs: ($$value) => {
          extendedJobs = $$value;
          $$settled = false;
        },
        loading: ($$value) => {
          loading = $$value;
          $$settled = false;
        },
        this: ($$value) => {
          jobLoader = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ConfirmationModal, "ConfirmationModal").$$render(
      $$result,
      {
        title: `Confirm cancelling all jobs correspoding to the selected filters (${jobIdsToCancel.length} jobs)`,
        confirmationText: `Cancel ${jobIdsToCancel.length} jobs that matched the filters`,
        open: isCancelingFilteredJobs,
        loading: fetchingFilteredJobs
      },
      {},
      {
        default: () => {
          return `<pre>${escape(selectedFiltersString)}</pre>`;
        }
      }
    )} ${validate_component(ConfirmationModal, "ConfirmationModal").$$render(
      $$result,
      {
        title: `Confirm cancelling the selected jobs`,
        confirmationText: `Cancel ${jobIdsToCancel.length} jobs`,
        open: isCancelingVisibleJobs
      },
      {},
      {}
    )} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { this: runDrawer },
      {
        this: ($$value) => {
          runDrawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Run details" }, {}, {
            default: () => {
              return `${selectedIds.length === 1 ? `${selectedIds[0] === "-" ? `<div class="p-4" data-svelte-h="svelte-5yc598">There is no information available for this job</div>` : `${validate_component(JobPreview, "JobPreview").$$render(
                $$result,
                {
                  blankLink: true,
                  id: selectedIds[0],
                  workspace: selectedWorkspace
                },
                {},
                {}
              )}`}` : ``}`;
            }
          })}`;
        }
      }
    )}  ${innerWidth > 1280 ? `<div class="w-full h-screen"><div class="px-2"><div class="flex items-center space-x-2 flex-row justify-between"><div class="flex-col"><div class="flex flex-row flex-wrap justify-between py-2 my-4 px-4 gap-1 items-center"><h1${add_attribute("class", twMerge("!text-2xl font-semibold leading-6 tracking-tight", $userStore?.operator ? "pl-10" : ""), 0)}>Runs</h1> ${validate_component(Tooltip$1, "Tooltip").$$render(
      $$result,
      {
        documentationLink: "https://www.windmill.dev/docs/core_concepts/monitor_past_and_future_runs"
      },
      {},
      {
        default: () => {
          return `All past and schedule executions of scripts and flows, including previews. You only
							see your own runs or runs of groups you belong to unless you are an admin.`;
        }
      }
    )}</div></div> ${validate_component(RunsFilter, "RunsFilter").$$render(
      $$result,
      {
        usernames,
        folders,
        paths,
        isSkipped,
        user,
        folder,
        label,
        concurrencyKey,
        tag,
        path,
        success,
        argFilter,
        resultFilter,
        argError,
        resultError,
        jobKindsCat,
        allWorkspaces
      },
      {
        isSkipped: ($$value) => {
          isSkipped = $$value;
          $$settled = false;
        },
        user: ($$value) => {
          user = $$value;
          $$settled = false;
        },
        folder: ($$value) => {
          folder = $$value;
          $$settled = false;
        },
        label: ($$value) => {
          label = $$value;
          $$settled = false;
        },
        concurrencyKey: ($$value) => {
          concurrencyKey = $$value;
          $$settled = false;
        },
        tag: ($$value) => {
          tag = $$value;
          $$settled = false;
        },
        path: ($$value) => {
          path = $$value;
          $$settled = false;
        },
        success: ($$value) => {
          success = $$value;
          $$settled = false;
        },
        argFilter: ($$value) => {
          argFilter = $$value;
          $$settled = false;
        },
        resultFilter: ($$value) => {
          resultFilter = $$value;
          $$settled = false;
        },
        argError: ($$value) => {
          argError = $$value;
          $$settled = false;
        },
        resultError: ($$value) => {
          resultError = $$value;
          $$settled = false;
        },
        jobKindsCat: ($$value) => {
          jobKindsCat = $$value;
          $$settled = false;
        },
        allWorkspaces: ($$value) => {
          allWorkspaces = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> <div class="p-2 w-full"><div class="relative z-10"><div class="absolute right-0 -mt-6"><div class="flex flex-row justify-between items-center">${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
      $$result,
      { selected: graph },
      {
        selected: ($$value) => {
          graph = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: "RunChart", label: "Duration" }, {}, {})} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              value: "ConcurrencyChart",
              label: "Concurrency",
              icon: warnJobLimit ? Alert_triangle : void 0,
              tooltip: warnJobLimit ? warnJobLimitMsg : void 0
            },
            {},
            {}
          )}`;
        }
      }
    )}</div> ${!graphIsRunsChart ? `${validate_component(DropdownV2, "DropdownV2").$$render(
      $$result,
      {
        items: [
          {
            displayName: "None",
            action: () => setLookback(0)
          },
          {
            displayName: "1 day",
            action: () => setLookback(1)
          },
          {
            displayName: "3 days",
            action: () => setLookback(3)
          },
          {
            displayName: "7 days",
            action: () => setLookback(7)
          }
        ]
      },
      {},
      {
        buttonReplacement: () => {
          return `<div class="mt-1 p-2 h-8 flex flex-row items-center hover:bg-surface-hover cursor-pointer rounded-md">${validate_component(Chevron_down, "ChevronDown").$$render($$result, { class: "w-5 h-5" }, {}, {})} <span class="text-xs min-w-[5rem]">${escape(lookback)} days lookback</span> ${validate_component(Tooltip$1, "Tooltip").$$render($$result, {}, {}, {
            default: () => {
              return `How far behind the min datetime to start considering jobs for the concurrency
										graph. Change this value to include jobs started before the set time window for
										the computation of the graph`;
            }
          })}</div>`;
        }
      }
    )}` : ``}</div></div> ${graph === "RunChart" ? `${validate_component(RunChart, "RunChart").$$render(
      $$result,
      {
        canSelect: !isSelectingJobsToCancel,
        minTimeSet: minTs,
        maxTimeSet: maxTs,
        maxIsNow: maxTs == void 0,
        jobs: completedJobs,
        selectedIds
      },
      {
        selectedIds: ($$value) => {
          selectedIds = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${graph === "ConcurrencyChart" ? `${validate_component(ConcurrentJobsChart, "ConcurrentJobsChart").$$render(
      $$result,
      {
        minTimeSet: minTs,
        maxTimeSet: maxTs,
        maxIsNow: maxTs == void 0,
        extendedJobs
      },
      {},
      {}
    )}` : ``}`}</div> <div class="flex flex-col gap-1 md:flex-row w-full p-4"><div class="flex gap-2 grow flex-row">${validate_component(RunsQueue, "RunsQueue").$$render($$result, { queue_count, allWorkspaces }, {}, {})} <div class="flex flex-row">${isSelectingJobsToCancel ? `<div class="mt-1 p-2 h-8 flex flex-row items-center gap-1">${validate_component(Button, "Button").$$render(
      $$result,
      {
        startIcon: { icon: X },
        size: "xs",
        color: "gray",
        variant: "contained"
      },
      {},
      {}
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        disabled: selectedIds.length == 0,
        startIcon: { icon: Check },
        size: "xs",
        color: "red",
        variant: "contained"
      },
      {},
      {
        default: () => {
          return `Cancel ${escape(jobCountString(selectedIds.length))}`;
        }
      }
    )}</div>` : `${!$userStore?.is_admin && !$superadmin ? `${validate_component(DropdownV2, "DropdownV2").$$render(
      $$result,
      {
        items: [
          {
            displayName: "Select jobs to cancel",
            action: cancelVisibleJobs
          }
        ]
      },
      {},
      {
        buttonReplacement: () => {
          return `<div class="mt-1 p-2 h-8 flex flex-row items-center hover:bg-surface-hover cursor-pointer rounded-md"><span class="text-xs min-w-[5rem]" data-svelte-h="svelte-1vzc4m8">Cancel jobs</span> ${validate_component(Chevron_down, "ChevronDown").$$render($$result, { class: "w-5 h-5" }, {}, {})}</div>`;
        }
      }
    )}` : `${validate_component(DropdownV2, "DropdownV2").$$render(
      $$result,
      {
        items: [
          {
            displayName: "Select jobs to cancel",
            action: cancelVisibleJobs
          },
          {
            displayName: "Cancel all jobs matching filters",
            action: cancelFilteredJobs
          }
        ]
      },
      {},
      {
        buttonReplacement: () => {
          return `<div class="mt-1 p-2 h-8 flex flex-row items-center hover:bg-surface-hover cursor-pointer rounded-md"><span class="text-xs min-w-[5rem]" data-svelte-h="svelte-1vzc4m8">Cancel jobs</span> ${validate_component(Chevron_down, "ChevronDown").$$render($$result, { class: "w-5 h-5" }, {}, {})}</div>`;
        }
      }
    )}`}`}</div></div> <div class="relative flex gap-2 items-center pr-8 w-40">${validate_component(Toggle, "Toggle").$$render(
      $$result,
      { size: "xs", checked: showSchedules },
      {
        checked: ($$value) => {
          showSchedules = $$value;
          $$settled = false;
        }
      },
      {}
    )} <span class="text-xs absolute -top-4" data-svelte-h="svelte-1urbxnw">CRON Schedules</span> ${validate_component(Calendar, "Calendar").$$render($$result, { size: 16 }, {}, {})}</div> <div class="relative flex gap-2 items-center pr-8 w-40"><span class="text-xs absolute -top-4" data-svelte-h="svelte-nhou9e">Planned later</span> ${validate_component(Toggle, "Toggle").$$render(
      $$result,
      { size: "xs", checked: showFutureJobs },
      {
        checked: ($$value) => {
          showFutureJobs = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Clock, "Clock").$$render($$result, { size: 16 }, {}, {})}</div> <div class="flex flex-row gap-1 w-full max-w-lg"><div class="relative w-full"><div class="flex gap-1 relative w-full"><span class="text-xs absolute -top-4" data-svelte-h="svelte-4hp8yf">Min datetime</span> <input type="text"${add_attribute(
      "value",
      minTs ? new Date(minTs).toLocaleString() : "zoom x axis to set min (drag with ctrl)",
      0
    )} disabled> ${validate_component(CalendarPicker, "CalendarPicker").$$render(
      $$result,
      {
        clearable: true,
        date: minTs,
        label: "Min datetimes"
      },
      {},
      {}
    )}</div></div> <div class="relative w-full"><div class="flex gap-1 relative w-full"><span class="text-xs absolute -top-4" data-svelte-h="svelte-17c9r1x">Max datetime</span> <input type="text"${add_attribute(
      "value",
      maxTs ? new Date(maxTs).toLocaleString() : "zoom x axis to set max",
      0
    )} disabled> ${validate_component(CalendarPicker, "CalendarPicker").$$render(
      $$result,
      {
        clearable: true,
        date: maxTs,
        label: "Max datetimes"
      },
      {},
      {}
    )}</div></div></div> <div class="flex flex-row gap-2 items-center">${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs",
        color: "light",
        variant: "border"
      },
      {},
      {
        default: () => {
          return `Reset`;
        }
      }
    )} ${validate_component(ManuelDatePicker, "ManuelDatePicker").$$render(
      $$result,
      {
        loading,
        minTs,
        maxTs,
        selectedManualDate,
        this: manualDatePicker
      },
      {
        minTs: ($$value) => {
          minTs = $$value;
          $$settled = false;
        },
        maxTs: ($$value) => {
          maxTs = $$value;
          $$settled = false;
        },
        selectedManualDate: ($$value) => {
          selectedManualDate = $$value;
          $$settled = false;
        },
        this: ($$value) => {
          manualDatePicker = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        size: "xs",
        options: { right: "Auto-refresh" },
        textClass: "whitespace-nowrap",
        checked: autoRefresh
      },
      {
        checked: ($$value) => {
          autoRefresh = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> ${validate_component(SplitPanesWrapper, "SplitPanesWrapper").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Splitpanes, "Splitpanes").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Pane, "Pane").$$render($$result, { size: 60, minSize: 40 }, {}, {
              default: () => {
                return `${jobs ? `${validate_component(RunsTable, "RunsTable").$$render(
                  $$result,
                  {
                    jobs,
                    externalJobs: externalJobs ?? [],
                    omittedObscuredJobs: extendedJobs?.omitted_obscured_jobs ?? false,
                    showExternalJobs: !graphIsRunsChart,
                    activeLabel: label,
                    isSelectingJobsToCancel,
                    selectedIds,
                    selectedWorkspace
                  },
                  {
                    selectedIds: ($$value) => {
                      selectedIds = $$value;
                      $$settled = false;
                    },
                    selectedWorkspace: ($$value) => {
                      selectedWorkspace = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}` : `<div class="gap-1 flex flex-col">${each(new Array(8), (_) => {
                  return `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[3]] }, {}, {})}`;
                })}</div>`}`;
              }
            })} ${validate_component(Pane, "Pane").$$render($$result, { size: 40, minSize: 15, class: "border-t" }, {}, {
              default: () => {
                return `${selectedIds.length === 1 ? `${selectedIds[0] === "-" ? `<div class="p-4" data-svelte-h="svelte-5yc598">There is no information available for this job</div>` : `${validate_component(JobPreview, "JobPreview").$$render(
                  $$result,
                  {
                    id: selectedIds[0],
                    workspace: selectedWorkspace
                  },
                  {},
                  {}
                )}`}` : `${selectedIds.length > 1 ? `<div class="text-xs m-4">There are ${escape(selectedIds.length)} jobs selected. Choose 1 to see detailed information</div>` : `<div class="text-xs m-4" data-svelte-h="svelte-1s2hdz1">No job selected</div>`}`}`;
              }
            })}`;
          }
        })}`;
      }
    })}</div>` : `<div class="flex flex-col h-screen"><div class="px-2"><div class="flex items-center space-x-2 flex-row justify-between"><div class="flex flex-row flex-wrap justify-between py-2 my-4 px-4 gap-1"><h1 class="!text-2xl font-semibold leading-6 tracking-tight" data-svelte-h="svelte-1kwcmr0">Runs</h1> ${validate_component(Tooltip$1, "Tooltip").$$render(
      $$result,
      {
        light: true,
        documentationLink: "https://www.windmill.dev/docs/core_concepts/monitor_past_and_future_runs",
        scale: 0.9,
        wrapperClass: "flex items-center"
      },
      {},
      {
        default: () => {
          return `All past and schedule executions of scripts and flows, including previews. You only see
						your own runs or runs of groups you belong to unless you are an admin.`;
        }
      }
    )}</div> ${validate_component(RunsFilter, "RunsFilter").$$render(
      $$result,
      {
        paths,
        usernames,
        folders,
        mobile: true,
        isSkipped,
        jobKindsCat,
        folder,
        path,
        user,
        label,
        concurrencyKey,
        tag,
        success,
        argFilter,
        resultFilter,
        argError,
        resultError,
        allWorkspaces
      },
      {
        isSkipped: ($$value) => {
          isSkipped = $$value;
          $$settled = false;
        },
        jobKindsCat: ($$value) => {
          jobKindsCat = $$value;
          $$settled = false;
        },
        folder: ($$value) => {
          folder = $$value;
          $$settled = false;
        },
        path: ($$value) => {
          path = $$value;
          $$settled = false;
        },
        user: ($$value) => {
          user = $$value;
          $$settled = false;
        },
        label: ($$value) => {
          label = $$value;
          $$settled = false;
        },
        concurrencyKey: ($$value) => {
          concurrencyKey = $$value;
          $$settled = false;
        },
        tag: ($$value) => {
          tag = $$value;
          $$settled = false;
        },
        success: ($$value) => {
          success = $$value;
          $$settled = false;
        },
        argFilter: ($$value) => {
          argFilter = $$value;
          $$settled = false;
        },
        resultFilter: ($$value) => {
          resultFilter = $$value;
          $$settled = false;
        },
        argError: ($$value) => {
          argError = $$value;
          $$settled = false;
        },
        resultError: ($$value) => {
          resultError = $$value;
          $$settled = false;
        },
        allWorkspaces: ($$value) => {
          allWorkspaces = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> <div class="p-2 w-full"><div class="relative z-10"><div class="absolute right-2">${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
      $$result,
      { selected: graph },
      {
        selected: ($$value) => {
          graph = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: "RunChart", label: "Duration" }, {}, {})} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              value: "ConcurrencyChart",
              label: "Concurrency"
            },
            {},
            {}
          )}`;
        }
      }
    )} ${!graphIsRunsChart ? `${validate_component(DropdownV2, "DropdownV2").$$render(
      $$result,
      {
        items: [
          {
            displayName: "None",
            action: () => setLookback(0)
          },
          {
            displayName: "1 day",
            action: () => setLookback(1)
          },
          {
            displayName: "3 days",
            action: () => setLookback(3)
          },
          {
            displayName: "7 days",
            action: () => setLookback(7)
          }
        ]
      },
      {},
      {
        buttonReplacement: () => {
          return `<div class="mt-1 p-2 h-8 flex flex-row items-center hover:bg-surface-hover cursor-pointer rounded-md">${validate_component(Chevron_down, "ChevronDown").$$render($$result, { class: "w-5 h-5" }, {}, {})} <span class="text-xs min-w-[5rem]">${escape(lookback)} days lookback</span> ${validate_component(Tooltip$1, "Tooltip").$$render($$result, {}, {}, {
            default: () => {
              return `How far behind the min datetime to start considering jobs for the concurrency
										graph. Change this value to include jobs started before the set time window for
										the computation of the graph`;
            }
          })}</div>`;
        }
      }
    )}` : ``}</div></div> ${graph === "RunChart" ? `${validate_component(RunChart, "RunChart").$$render(
      $$result,
      {
        canSelect: !isSelectingJobsToCancel,
        minTimeSet: minTs,
        maxTimeSet: maxTs,
        maxIsNow: maxTs == void 0,
        jobs: completedJobs,
        selectedIds
      },
      {
        selectedIds: ($$value) => {
          selectedIds = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${graph === "ConcurrencyChart" ? `${validate_component(ConcurrentJobsChart, "ConcurrentJobsChart").$$render(
      $$result,
      {
        minTimeSet: minTs,
        maxTimeSet: maxTs,
        maxIsNow: maxTs == void 0,
        extendedJobs
      },
      {},
      {}
    )}` : ``}`}</div> <div class="flex flex-col gap-4 md:flex-row w-full p-4"><div class="flex items-center flex-row gap-2 grow">${queue_count ? `${validate_component(RunsQueue, "RunsQueue").$$render($$result, { queue_count, allWorkspaces }, {}, {})}` : ``} <div class="flex flex-row">${isSelectingJobsToCancel ? `<div class="mt-1 p-2 h-8 flex flex-row items-center gap-1">${validate_component(Button, "Button").$$render(
      $$result,
      {
        startIcon: { icon: X },
        size: "xs",
        color: "gray",
        variant: "contained"
      },
      {},
      {}
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        disabled: selectedIds.length == 0,
        startIcon: { icon: Check },
        size: "xs",
        color: "red",
        variant: "contained"
      },
      {},
      {
        default: () => {
          return `Cancel ${escape(jobCountString(selectedIds.length))}`;
        }
      }
    )}</div>` : `${!$userStore?.is_admin && !$superadmin ? `${validate_component(DropdownV2, "DropdownV2").$$render(
      $$result,
      {
        items: [
          {
            displayName: "Select jobs to cancel",
            action: cancelVisibleJobs
          }
        ]
      },
      {},
      {
        buttonReplacement: () => {
          return `<div class="mt-1 p-2 h-8 flex flex-row items-center hover:bg-surface-hover cursor-pointer rounded-md"><span class="text-xs min-w-[5rem]" data-svelte-h="svelte-1vzc4m8">Cancel jobs</span> ${validate_component(Chevron_down, "ChevronDown").$$render($$result, { class: "w-5 h-5" }, {}, {})}</div>`;
        }
      }
    )}` : `${validate_component(DropdownV2, "DropdownV2").$$render(
      $$result,
      {
        items: [
          {
            displayName: "Select jobs to cancel",
            action: cancelVisibleJobs
          },
          {
            displayName: "Cancel all jobs matching filters",
            action: cancelFilteredJobs
          }
        ]
      },
      {},
      {
        buttonReplacement: () => {
          return `<div class="mt-1 p-2 h-8 flex flex-row items-center hover:bg-surface-hover cursor-pointer rounded-md"><span class="text-xs min-w-[5rem]" data-svelte-h="svelte-1vzc4m8">Cancel jobs</span> ${validate_component(Chevron_down, "ChevronDown").$$render($$result, { class: "w-5 h-5" }, {}, {})}</div>`;
        }
      }
    )}`}`}</div></div> <div class="flex gap-2 py-1"><div class="relative flex gap-2 items-center pr-8 w-40">${validate_component(Toggle, "Toggle").$$render(
      $$result,
      { size: "xs", checked: showSchedules },
      {
        checked: ($$value) => {
          showSchedules = $$value;
          $$settled = false;
        }
      },
      {}
    )} <span class="text-xs absolute -top-4" data-svelte-h="svelte-12r04ms">Schedules</span> ${validate_component(Calendar, "Calendar").$$render($$result, { size: 16 }, {}, {})}</div> <div class="relative flex gap-2 items-center pr-8 w-40"><span class="text-xs absolute -top-4" data-svelte-h="svelte-nhou9e">Planned later</span> ${validate_component(Toggle, "Toggle").$$render(
      $$result,
      { size: "xs", checked: showFutureJobs },
      {
        checked: ($$value) => {
          showFutureJobs = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Clock, "Clock").$$render($$result, { size: 16 }, {}, {})}</div></div> <div class="flex flex-row gap-1 w-full max-w-lg items-center"><div class="relative w-full"><div class="flex gap-1 relative w-full"><span class="text-xs absolute -top-4" data-svelte-h="svelte-4hp8yf">Min datetime</span> <input type="text"${add_attribute(
      "value",
      minTs ? new Date(minTs).toLocaleString() : "zoom x axis to set min (drag with ctrl)",
      0
    )} disabled> ${validate_component(CalendarPicker, "CalendarPicker").$$render(
      $$result,
      {
        clearable: true,
        date: minTs,
        label: "Min datetimes"
      },
      {},
      {}
    )}</div></div> <div class="relative w-full"><div class="flex gap-1 relative w-full"><span class="text-xs absolute -top-4" data-svelte-h="svelte-17c9r1x">Max datetime</span> <input type="text"${add_attribute(
      "value",
      maxTs ? new Date(maxTs).toLocaleString() : "zoom x axis to set max",
      0
    )} disabled> ${validate_component(CalendarPicker, "CalendarPicker").$$render(
      $$result,
      {
        clearable: true,
        date: maxTs,
        label: "Max datetimes"
      },
      {},
      {}
    )}</div></div></div> <div class="flex flex-row gap-2 items-center">${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs",
        color: "light",
        variant: "border"
      },
      {},
      {
        default: () => {
          return `Reset`;
        }
      }
    )} ${validate_component(ManuelDatePicker, "ManuelDatePicker").$$render(
      $$result,
      {
        loading,
        this: manualDatePicker,
        minTs,
        maxTs,
        selectedManualDate
      },
      {
        this: ($$value) => {
          manualDatePicker = $$value;
          $$settled = false;
        },
        minTs: ($$value) => {
          minTs = $$value;
          $$settled = false;
        },
        maxTs: ($$value) => {
          maxTs = $$value;
          $$settled = false;
        },
        selectedManualDate: ($$value) => {
          selectedManualDate = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        size: "xs",
        options: { right: "Auto-refresh" },
        textClass: "whitespace-nowrap",
        checked: autoRefresh
      },
      {
        checked: ($$value) => {
          autoRefresh = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> <div class="grow">${validate_component(RunsTable, "RunsTable").$$render(
      $$result,
      {
        activeLabel: label,
        jobs,
        externalJobs: externalJobs ?? [],
        omittedObscuredJobs: extendedJobs?.omitted_obscured_jobs ?? false,
        showExternalJobs: !graphIsRunsChart,
        isSelectingJobsToCancel,
        selectedIds,
        selectedWorkspace
      },
      {
        selectedIds: ($$value) => {
          selectedIds = $$value;
          $$settled = false;
        },
        selectedWorkspace: ($$value) => {
          selectedWorkspace = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>`}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_page();
  $$unsubscribe_userStore();
  $$unsubscribe_superadmin();
  return $$rendered;
});
export {
  Page as default
};
