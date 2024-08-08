import { c as create_ssr_component, v as validate_component, b as add_attribute, p as compute_slots, s as subscribe, e as escape, f as each } from "../../../../../../chunks/ssr.js";
import { p as page } from "../../../../../../chunks/stores.js";
import { b as base } from "../../../../../../chunks/base.js";
import { M as MetricsService, C as ConcurrencyGroupsService, c as ScriptService } from "../../../../../../chunks/services.gen.js";
import { j as displayDate, t as truncateRev, O as displayTime, a as canWrite, H as truncateHash, B as Button, P as Portal, Q as ButtonDropdown, C as Check_circle_2, X as X_circle, b as emptyString } from "../../../../../../chunks/toast.js";
import { B as BarsStaggered, G as Git_branch, a as Clipboard_copy } from "../../../../../../chunks/util.js";
import { T as TestJobLoader, L as LogViewer, D as DisplayResult } from "../../../../../../chunks/TimelineBar.js";
import { w as workspaceStore, e as enterpriseLicense, i as initialArgsStore, n as userWorkspaces, u as userStore, b as superadmin } from "../../../../../../chunks/stores2.js";
import { J as JobStatus, F as FlowStatusViewer } from "../../../../../../chunks/FlowStatusViewer.js";
import { T as TimeAgo, f as forLater, H as HighlightCode } from "../../../../../../chunks/FlowGraphViewerStep.js";
import { A as Alert } from "../../../../../../chunks/Alert.js";
import { B as Badge } from "../../../../../../chunks/Badge.js";
import { D as Drawer, a as DrawerContent } from "../../../../../../chunks/DrawerContent.js";
import { M as MenuItem } from "../../../../../../chunks/MenuItem.js";
import { P as Popup } from "../../../../../../chunks/Popup.js";
import { S as Skeleton } from "../../../../../../chunks/Skeleton.js";
import { T as Tabs, a as Tab } from "../../../../../../chunks/Tabs.js";
import "../../../../../../chunks/common.js";
import { T as Tooltip } from "../../../../../../chunks/Tooltip.js";
/* empty css                                                            */
import "../../../../../../chunks/index3.js";
/* empty css                                                                         */
import "../../../../../../chunks/lib.js";
import "../../../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import "../../../../../../chunks/SimpleAutocomplete.js";
import "../../../../../../chunks/VariableEditor.js";
import "@leeoniya/ufuzzy";
import "monaco-editor/esm/vs/editor/editor.api.js";
import "monaco-editor";
import "monaco-editor/esm/vs/basic-languages/sql/sql.contribution.js";
import "monaco-editor/esm/vs/basic-languages/yaml/yaml.contribution.js";
import "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution.js";
import "monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution.js";
import "monaco-editor/esm/vs/language/typescript/monaco.contribution.js";
import "monaco-editor/esm/vs/language/json/monaco.contribution.js";
import "monaco-editor/esm/vs/basic-languages/css/css.contribution.js";
import "monaco-editor/esm/vs/language/css/monaco.contribution.js";
import "../../../../../../chunks/SimpleEditor.js";
import "monaco-languageclient";
import "vscode/services";
import "../../../../../../chunks/index2.js";
import "../../../../../../chunks/SchemaForm.js";
import "monaco-editor/esm/vs/basic-languages/graphql/graphql.contribution.js";
import "../../../../../../chunks/utils3.js";
import "../../../../../../chunks/scripts.js";
/* empty css                                                                    */
import "d3-dag";
import "d3-zoom";
/* empty css                                                                          */
/* empty css                                                                      */
import "../../../../../../chunks/infer.js";
import { C as Clock } from "../../../../../../chunks/DateTimeInput.js";
import { I as Icon } from "../../../../../../chunks/Icon.js";
import { B as Bot } from "../../../../../../chunks/bot.js";
import { C as Calendar } from "../../../../../../chunks/calendar.js";
import { C as Code_2 } from "../../../../../../chunks/code-2.js";
import { U as User } from "../../../../../../chunks/user2.js";
import { J as JobArgs } from "../../../../../../chunks/JobArgs.js";
import { F as FlowProgressBar } from "../../../../../../chunks/FlowProgressBar.js";
import "../../../../../../chunks/client.js";
import { P as PersistentScriptDrawer, A as Activity } from "../../../../../../chunks/PersistentScriptDrawer.js";
import { Chart, Title, Tooltip as Tooltip$1, Legend, LineElement, LinearScale, PointElement, CategoryScale } from "chart.js";
import "../../../../../../chunks/svelte.js";
import { L as Line } from "../../../../../../chunks/Line.js";
import { T as Toggle } from "../../../../../../chunks/Toggle.js";
import { W as WorkflowTimeline } from "../../../../../../chunks/WorkflowTimeline.js";
import { S as ScheduleEditor } from "../../../../../../chunks/ScheduleEditor.js";
import { P as Popover } from "../../../../../../chunks/Popover.js";
import { H as HighlightTheme, a as Highlight, j as json } from "../../../../../../chunks/SchemaViewer.js";
import { R as Refresh_cw } from "../../../../../../chunks/refresh-cw.js";
import { P as Pen } from "../../../../../../chunks/pen.js";
import { T as Trash } from "../../../../../../chunks/Section.js";
import { L as List } from "../../../../../../chunks/list.js";
import { M as More_vertical } from "../../../../../../chunks/DropdownV2.js";
import { F as Fast_forward } from "../../../../../../chunks/fast-forward.js";
import { C as Circle } from "../../../../../../chunks/circle.js";
import { H as Hourglass } from "../../../../../../chunks/hourglass.js";
import { a as Arrow_right } from "../../../../../../chunks/Head.js";
const Memory_stick = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M6 19v-3" }],
    ["path", { "d": "M10 19v-3" }],
    ["path", { "d": "M14 19v-3" }],
    ["path", { "d": "M18 19v-3" }],
    ["path", { "d": "M8 11V9" }],
    ["path", { "d": "M16 11V9" }],
    ["path", { "d": "M12 11V9" }],
    ["path", { "d": "M2 15h20" }],
    [
      "path",
      {
        "d": "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "memory-stick" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Timer_off = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M10 2h4" }],
    [
      "path",
      {
        "d": "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7"
      }
    ],
    [
      "path",
      {
        "d": "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2"
      }
    ],
    ["path", { "d": "m2 2 20 20" }],
    ["path", { "d": "M12 12v-2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "timer-off" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ActionRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let wide;
  let $$slots = compute_slots(slots);
  let { applyPageWidth = false } = $$props;
  let { stickToTop = false } = $$props;
  if ($$props.applyPageWidth === void 0 && $$bindings.applyPageWidth && applyPageWidth !== void 0) $$bindings.applyPageWidth(applyPageWidth);
  if ($$props.stickToTop === void 0 && $$bindings.stickToTop && stickToTop !== void 0) $$bindings.stickToTop(stickToTop);
  wide = applyPageWidth ? "max-w-7xl mx-auto px-4 sm:px-6 md:px-8" : "";
  return ` <div${add_attribute(
    "class",
    "bg-surface py-3 " + (stickToTop ? "lg:sticky lg:top-0 z-[500] border-b border-gray-200 border-opacity-0 duration-300 " : "") + ($$props.class || ""),
    0
  )}><div${add_attribute("class", "w-full flex flex-wrap justify-between items-center gap-4 " + wide, 0)}><div class="flex flex-wrap items-center gap-2">${$$slots.left ? `${slots.left ? slots.left({}) : ``}` : ``}</div> <div class="flex flex-wrap items-center gap-2">${$$slots.middle ? `${slots.middle ? slots.middle({}) : ``}` : ``}</div> <div class="flex flex-wrap items-center gap-2 lg:gap-4">${$$slots.right ? `${slots.right ? slots.right({}) : ``}` : ``}</div></div></div>`;
});
const SMALL_ICON_SIZE = 14;
const FlowMetadata = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { job } = $$props;
  let { scheduleEditor } = $$props;
  if ($$props.job === void 0 && $$bindings.job && job !== void 0) $$bindings.job(job);
  if ($$props.scheduleEditor === void 0 && $$bindings.scheduleEditor && scheduleEditor !== void 0) $$bindings.scheduleEditor(scheduleEditor);
  $$unsubscribe_workspaceStore();
  return `<div class="rounded-md p-3 bg-surface-secondary shadow-sm sm:text-sm md:text-base overflow-x-auto" style="min-height: 150px;">${validate_component(JobStatus, "JobStatus").$$render($$result, { job }, {}, {})} <div class="flex flex-row gap-2 items-center">${validate_component(Clock, "Clock").$$render(
    $$result,
    {
      size: SMALL_ICON_SIZE,
      class: "text-secondary min-w-3.5"
    },
    {},
    {}
  )} <span class="text-2xs text-secondary whitespace-nowrap">${job["success"] != void 0 ? `Received job: ${escape(displayDate(job.created_at ?? ""))}` : `Received job ${validate_component(TimeAgo, "TimeAgo").$$render(
    $$result,
    {
      withDate: true,
      date: job.created_at ?? ""
    },
    {},
    {}
  )}`} ${validate_component(Tooltip, "Tooltip").$$render($$result, { small: true }, {}, {
    default: () => {
      return `${escape(job?.created_at)}`;
    }
  })}</span></div> ${job && "started_at" in job && job.started_at ? `<div class="flex flex-row gap-2 items-center text-sm">${validate_component(Clock, "Clock").$$render(
    $$result,
    {
      size: SMALL_ICON_SIZE,
      class: "text-secondary min-w-3.5"
    },
    {},
    {}
  )} <span class="whitespace-nowrap">Started ${validate_component(TimeAgo, "TimeAgo").$$render(
    $$result,
    {
      withDate: true,
      agoOnlyIfRecent: true,
      date: job.started_at ?? ""
    },
    {},
    {}
  )} ${validate_component(Tooltip, "Tooltip").$$render($$result, { small: true }, {}, {
    default: () => {
      return `${escape(job?.started_at)}`;
    }
  })}</span></div>` : ``} ${job && job["mem_peak"] ? `<div class="flex flex-row gap-2 items-center text-sm">${validate_component(Memory_stick, "MemoryStick").$$render(
    $$result,
    {
      size: SMALL_ICON_SIZE,
      class: "text-secondary min-w-3.5"
    },
    {},
    {}
  )} <span>Mem peak: ${escape((job["mem_peak"] / 1024).toPrecision(5))}MB</span></div>` : ``} <div>${job && job.parent_job ? `${job.is_flow_step ? `<div class="flex flex-row gap-2 items-center text-sm">${validate_component(BarsStaggered, "BarsStaggered").$$render(
    $$result,
    {
      size: SMALL_ICON_SIZE,
      class: "text-secondary min-w-3.5"
    },
    {},
    {}
  )} <span class="whitespace-nowrap">Step of flow
						<a${add_attribute("href", `${base}/run/${job.parent_job}?workspace=${$workspaceStore}`, 0)}>${escape(job.parent_job)}</a></span></div>` : `<div class="flex flex-row gap-2 items-center text-sm">${validate_component(Bot, "Bot").$$render(
    $$result,
    {
      size: SMALL_ICON_SIZE,
      class: "text-secondary min-w-3.5"
    },
    {},
    {}
  )} <span class="whitespace-nowrap">Triggered by parent
						<a${add_attribute("href", `${base}/run/${job.parent_job}?workspace=${$workspaceStore}`, 0)}>${escape(job.parent_job)}</a></span></div>`}` : `${job && job.schedule_path ? `<div class="flex flex-row gap-2 w-full items-center text-sm">${validate_component(Calendar, "Calendar").$$render(
    $$result,
    {
      size: SMALL_ICON_SIZE,
      class: "text-secondary min-w-3.5"
    },
    {},
    {}
  )} <span class="whitespace-nowrap">Schedule:
					<a href="#" class="break-words text-blue-600 font-normal">${escape(truncateRev(job.schedule_path, 40))}</a></span></div>` : ``}`} ${job && job.job_kind == "flow" || job?.job_kind == "script" ? (() => {
    let stem = `${job?.job_kind}s`, isScript = job?.job_kind === "script", viewHref = `${base}/${stem}/get/${isScript ? job?.script_hash : job?.script_path}`;
    return `   <div class="flex flex-row gap-2 items-center">${isScript ? `${validate_component(Code_2, "Code2").$$render(
      $$result,
      {
        size: SMALL_ICON_SIZE,
        class: "text-secondary min-w-3.5"
      },
      {},
      {}
    )}` : `${validate_component(BarsStaggered, "BarsStaggered").$$render(
      $$result,
      {
        size: SMALL_ICON_SIZE,
        class: "text-secondary"
      },
      {},
      {}
    )}`} <span class="truncate text-sm"><a${add_attribute("href", viewHref, 0)}>${escape(isScript ? job?.script_hash : job?.script_path)}</a></span></div>`;
  })() : ``} <div class="flex items-center gap-2 text-sm">${validate_component(User, "User").$$render(
    $$result,
    {
      size: SMALL_ICON_SIZE,
      class: "text-secondary min-w-3.5"
    },
    {},
    {}
  )} <span>By ${escape(truncateRev(job.created_by ?? "unknown", 40))}${(job?.created_by?.length ?? 0) > 40 ? `${validate_component(Tooltip, "Tooltip").$$render($$result, { small: true }, {}, {
    default: () => {
      return `<div class="break-all">${escape(job.created_by)}</div>`;
    }
  })}` : ``} ${job.permissioned_as !== `u/${job.created_by}` && job.permissioned_as != job.created_by ? `but permissioned as ${escape(job.permissioned_as)}` : ``}</span></div></div> <div class="text-secondary text-2xs pt-2 whitespace-nowrap">run id:
		<a${add_attribute("href", `${base}/run/${job.id}?workspace=${job.workspace_id}`, 0)}>${escape(job.id)}</a></div></div>`;
});
const MemoryFootprintViewer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  Chart.register(Title, Tooltip$1, Legend, LineElement, LinearScale, PointElement, CategoryScale);
  let { jobId } = $$props;
  let { jobUpdateLastFetch } = $$props;
  let jobMetricsLastFetch = void 0;
  let jobMemoryStats = void 0;
  let data = [];
  let labels = [];
  async function loadMetricsData() {
    try {
      let jobStatsPromise = MetricsService.getJobMetrics({
        workspace: $workspaceStore,
        id: jobId,
        requestBody: {
          from_timestamp: jobMetricsLastFetch?.toISOString(),
          timeseries_max_datapoints: 0
        }
      });
      jobMetricsLastFetch = /* @__PURE__ */ new Date();
      let jobStats = await jobStatsPromise;
      let memoryTimeseries = jobStats.timeseries_metrics?.filter((ts) => ts.metric_id === "memory_kb") ?? [];
      if (memoryTimeseries.length > 0) {
        jobMemoryStats = (jobMemoryStats ?? []).concat(memoryTimeseries[0].values);
      }
    } catch {
      console.error("Unable to load metrics data for job", jobId);
      return;
    }
    for (let dp of jobMemoryStats ?? []) {
      let ts = new Date(dp.timestamp).valueOf();
      if (data.length === 0 || ts > data[data.length - 1].x) {
        data.push({ x: ts, y: dp.value });
        labels.push(displayTime(dp.timestamp));
      }
    }
    data = [...data];
  }
  if ($$props.jobId === void 0 && $$bindings.jobId && jobId !== void 0) $$bindings.jobId(jobId);
  if ($$props.jobUpdateLastFetch === void 0 && $$bindings.jobUpdateLastFetch && jobUpdateLastFetch !== void 0) $$bindings.jobUpdateLastFetch(jobUpdateLastFetch);
  jobUpdateLastFetch && loadMetricsData();
  $$unsubscribe_workspaceStore();
  $$unsubscribe_enterpriseLicense();
  return `<div class="relative max-h-100">${!$enterpriseLicense ? `${validate_component(Alert, "Alert").$$render(
    $$result,
    {
      type: "error",
      title: "Enterprise Edition only feature"
    },
    {},
    {
      default: () => {
        return `Job metrics are only available on Windmill Enterprise Edition.`;
      }
    }
  )}` : `${(jobMemoryStats?.length ?? 0) === 0 ? `${validate_component(Alert, "Alert").$$render(
    $$result,
    {
      type: "info",
      title: "No metric available"
    },
    {},
    {
      default: () => {
        return `No data points available for this job. Metrics are recorded only for jobs running for more
			than 500ms.`;
      }
    }
  )}` : ``}`} ${validate_component(Line, "Line").$$render(
    $$result,
    {
      class: "w-full max-h-80",
      data: {
        labels,
        datasets: [
          {
            label: "Job memory footprint (kB)",
            data,
            fill: false,
            borderColor: "rgb(59, 130, 246, 0.8)",
            backgroundColor: "rgb(59, 130, 246, 0.8)",
            tension: 0.1
          }
        ]
      },
      options: {
        animation: { duration: 0 },
        maintainAspectRatio: false,
        responsive: true
      }
    },
    {},
    {}
  )}</div>`;
});
function removeSensitiveInfos(jobs, redactSensitive) {
  if (!redactSensitive) {
    return jobs;
  }
  {
    return [];
  }
}
function asWorkflowStatus(x) {
  return x;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_initialArgsStore;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $page, $$unsubscribe_page;
  let $userWorkspaces, $$unsubscribe_userWorkspaces;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  let $userStore, $$unsubscribe_userStore;
  let $superadmin, $$unsubscribe_superadmin;
  $$unsubscribe_initialArgsStore = subscribe(initialArgsStore, (value) => value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_userWorkspaces = subscribe(userWorkspaces, (value) => $userWorkspaces = value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_superadmin = subscribe(superadmin, (value) => $superadmin = value);
  let job;
  let jobUpdateLastFetch;
  let viewTab = "result";
  let selectedJobStep = void 0;
  let branchOrIterationN = 0;
  let selectedJobStepIsTopLevel = void 0;
  let selectedJobStepType = "single";
  let restartBranchNames = [];
  let testIsLoading = false;
  let testJobLoader;
  let persistentScriptDrawer;
  let getLogs = void 0;
  let lastJobId = void 0;
  let concurrencyKey = void 0;
  async function getConcurrencyKey(job2) {
    lastJobId = job2.id;
    concurrencyKey = await ConcurrencyGroupsService.getConcurrencyKey({ id: job2.id });
  }
  function initView() {
    if (job && "result" in job && job.result != void 0) {
      viewTab = "result";
    } else if (viewTab == "result") {
      viewTab = "logs";
    }
  }
  async function getJob() {
    await testJobLoader?.watchJob($page.params.run);
    initView();
  }
  function onSelectedJobStepChange() {
    if (selectedJobStep !== void 0 && job?.flow_status?.modules !== void 0) {
      selectedJobStepIsTopLevel = job?.flow_status?.modules.map((m) => m.id).indexOf(selectedJobStep) >= 0;
      let moduleDefinition = job?.raw_flow?.modules.find((m) => m.id == selectedJobStep);
      if (moduleDefinition?.value.type == "forloopflow") {
        selectedJobStepType = "forloop";
      } else if (moduleDefinition?.value.type == "branchall") {
        selectedJobStepType = "branchall";
        moduleDefinition?.value.branches.forEach((branch, idx) => {
          restartBranchNames.push([
            idx,
            emptyString(branch.summary) ? `Branch #${idx}` : branch.summary
          ]);
        });
      } else {
        selectedJobStepType = "single";
      }
    }
  }
  let persistentScriptDefinition = void 0;
  async function onJobLoaded() {
    if (job === void 0 || job.job_kind !== "script" || job.script_hash === void 0) {
      return;
    }
    const script = await ScriptService.getScriptByHash({
      workspace: $workspaceStore,
      hash: job.script_hash
    });
    if (script.restart_unless_cancelled ?? false) {
      persistentScriptDefinition = script;
    }
  }
  let notfound = false;
  let forceCancel = false;
  let debugViewer;
  let debugContent = void 0;
  let redactSensitive = false;
  let scheduleEditor;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    job?.logs == void 0 && job && viewTab == "logs" && getLogs?.();
    job?.id && lastJobId !== job.id && getConcurrencyKey(job);
    {
      {
        if ($workspaceStore && $page.params.run && testJobLoader) {
          forceCancel = false;
          getJob();
        }
      }
    }
    selectedJobStep !== void 0 && onSelectedJobStepChange();
    job && onJobLoaded();
    $$rendered = `${validate_component(HighlightTheme, "HighlightTheme").$$render($$result, {}, {}, {})} ${validate_component(ScheduleEditor, "ScheduleEditor").$$render(
      $$result,
      { this: scheduleEditor },
      {
        this: ($$value) => {
          scheduleEditor = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${(job?.job_kind == "flow" || job?.job_kind == "flowpreview") && job?.["running"] && job?.parent_job == void 0 ? `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "800px", this: debugViewer },
      {
        this: ($$value) => {
          debugViewer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Debug Detail" }, {}, {
            actions: () => {
              return `<div class="flex items-center gap-1"><div class="w-60 pt-2">${validate_component(Toggle, "Toggle").$$render(
                $$result,
                {
                  options: { right: "Redact args/result/logs" },
                  checked: redactSensitive
                },
                {
                  checked: ($$value) => {
                    redactSensitive = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div> ${validate_component(Button, "Button").$$render($$result, { color: "light", size: "xs" }, {}, {
                default: () => {
                  return `<div class="flex gap-2 items-center">Copy ${validate_component(Clipboard_copy, "ClipboardCopy").$$render($$result, {}, {}, {})}</div>`;
                }
              })}</div> `;
            },
            default: () => {
              return `<pre><code class="text-2xs p-2">
					${validate_component(Highlight, "Highlight").$$render(
                $$result,
                {
                  language: json,
                  code: JSON.stringify(removeSensitiveInfos(debugContent, redactSensitive), null, 4)
                },
                {},
                {}
              )}
			</code></pre>`;
            }
          })}`;
        }
      }
    )}` : ``} ${validate_component(TestJobLoader, "TestJobLoader").$$render(
      $$result,
      {
        lazyLogs: true,
        workspaceOverride: $workspaceStore,
        this: testJobLoader,
        getLogs,
        isLoading: testIsLoading,
        job,
        jobUpdateLastFetch,
        notfound
      },
      {
        this: ($$value) => {
          testJobLoader = $$value;
          $$settled = false;
        },
        getLogs: ($$value) => {
          getLogs = $$value;
          $$settled = false;
        },
        isLoading: ($$value) => {
          testIsLoading = $$value;
          $$settled = false;
        },
        job: ($$value) => {
          job = $$value;
          $$settled = false;
        },
        jobUpdateLastFetch: ($$value) => {
          jobUpdateLastFetch = $$value;
          $$settled = false;
        },
        notfound: ($$value) => {
          notfound = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Portal, "Portal").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(PersistentScriptDrawer, "PersistentScriptDrawer").$$render(
          $$result,
          { this: persistentScriptDrawer },
          {
            this: ($$value) => {
              persistentScriptDrawer = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })} ${notfound ? `<div class="max-w-7xl px-4 mx-auto w-full"><div class="flex flex-col gap-6"><h1 class="text-red-400 mt-6">Job ${escape($page.params.run)} not found in ${escape($workspaceStore)}</h1> <h2 data-svelte-h="svelte-q7zwf9">Are you in the right workspace?</h2> <div class="flex flex-col gap-2">${each($userWorkspaces, (workspace) => {
      return `<div>${validate_component(Button, "Button").$$render($$result, { variant: "border" }, {}, {
        default: () => {
          return `See in ${escape(workspace.name)} `;
        }
      })} </div>`;
    })} <div>${validate_component(Button, "Button").$$render($$result, { href: base + "/runs" }, {}, {
      default: () => {
        return `Go to runs page`;
      }
    })}</div></div></div></div>` : `${validate_component(Skeleton, "Skeleton").$$render(
      $$result,
      {
        class: "max-w-7xl px-4 mx-auto w-full",
        loading: !job,
        layout: [0.75, [2, 0, 2], 2.25, [{ h: 1.5, w: 40 }]]
      },
      {},
      {}
    )} ${validate_component(ActionRow, "ActionRow").$$render($$result, { class: "max-w-7xl px-4 mx-auto w-full" }, {}, {
      right: () => {
        let stem = `/${job?.job_kind}s`, isScript = job?.job_kind === "script", viewHref = `${stem}/get/${isScript ? job?.script_hash : job?.script_path}`;
        return `${(job?.job_kind == "flow" || job?.job_kind == "flowpreview") && job?.["running"] && job?.parent_job == void 0 ? `<div class="inline">${validate_component(ButtonDropdown, "ButtonDropdown").$$render($$result, { hasPadding: false }, {}, {
          items: () => {
            return `${validate_component(MenuItem, "MenuItem").$$render($$result, {}, {}, {
              default: () => {
                return `Show Flow Debug Info`;
              }
            })} `;
          },
          buttonReplacement: () => {
            return `${validate_component(Button, "Button").$$render(
              $$result,
              {
                nonCaptureEvent: true,
                size: "xs",
                color: "light"
              },
              {},
              {
                default: () => {
                  return `<div class="flex flex-row items-center">${validate_component(More_vertical, "MoreVertical").$$render($$result, { size: 14 }, {}, {})}</div>`;
                }
              }
            )}`;
          }
        })}</div>` : ``} ${job?.job_kind === "flowpreview" || job?.job_kind === "preview" ? `${validate_component(Button, "Button").$$render(
          $$result,
          {
            color: "dark",
            size: "md",
            variant: "border",
            startIcon: { icon: Git_branch }
          },
          {},
          {
            default: () => {
              return `Fork ${escape(job?.job_kind == "flowpreview" ? "flow" : "code")} preview`;
            }
          }
        )}` : ``} ${persistentScriptDefinition !== void 0 ? `${validate_component(Button, "Button").$$render(
          $$result,
          {
            color: "blue",
            size: "md",
            startIcon: { icon: Activity }
          },
          {},
          {
            default: () => {
              return `Current runs`;
            }
          }
        )}` : ``} ${job?.type != "CompletedJob" && (!job?.schedule_path || job?.["running"] == true) ? `${!forceCancel ? `${validate_component(Button, "Button").$$render(
          $$result,
          {
            color: "red",
            size: "md",
            startIcon: { icon: Timer_off }
          },
          {},
          {
            default: () => {
              return `Cancel`;
            }
          }
        )}` : `${validate_component(Button, "Button").$$render(
          $$result,
          {
            color: "red",
            size: "md",
            startIcon: { icon: Timer_off }
          },
          {},
          {
            default: () => {
              return `Force Cancel`;
            }
          }
        )}`}` : ``} ${job?.schedule_path ? `${validate_component(Button, "Button").$$render(
          $$result,
          {
            size: "sm",
            startIcon: { icon: Calendar }
          },
          {},
          {
            default: () => {
              return `Edit schedule`;
            }
          }
        )}` : ``} ${job?.type === "CompletedJob" && job?.job_kind === "flow" && selectedJobStep !== void 0 && selectedJobStepIsTopLevel ? `${selectedJobStepType == "single" ? `${validate_component(Button, "Button").$$render(
          $$result,
          {
            title: `Re-start this flow from step ${selectedJobStep} (included). ${!$enterpriseLicense ? " This is a feature only available in enterprise edition." : ""}`,
            variant: "border",
            color: "blue",
            disabled: !$enterpriseLicense,
            startIcon: { icon: Refresh_cw }
          },
          {},
          {
            default: () => {
              return `Re-start from
						${validate_component(Badge, "Badge").$$render($$result, { baseClass: "ml-1", color: "indigo" }, {}, {
                default: () => {
                  return `${escape(selectedJobStep)}`;
                }
              })}`;
            }
          }
        )}` : `${validate_component(Popup, "Popup").$$render(
          $$result,
          {
            floatingConfig: {
              strategy: "absolute",
              placement: "bottom-start"
            }
          },
          {},
          {
            button: () => {
              return `${validate_component(Button, "Button").$$render(
                $$result,
                {
                  title: `Re-start this flow from step ${selectedJobStep} (included). ${!$enterpriseLicense ? " This is a feature only available in enterprise edition." : ""}`,
                  variant: "border",
                  color: "blue",
                  disabled: !$enterpriseLicense,
                  startIcon: { icon: Refresh_cw },
                  nonCaptureEvent: true
                },
                {},
                {
                  default: () => {
                    return `Re-start from
								${validate_component(Badge, "Badge").$$render($$result, { baseClass: "ml-1", color: "indigo" }, {}, {
                      default: () => {
                        return `${escape(selectedJobStep)}`;
                      }
                    })}`;
                  }
                }
              )} `;
            },
            default: () => {
              return `<label class="block text-primary"><div class="pb-1 text-sm text-secondary">${escape(selectedJobStepType == "forloop" ? "From iteration #:" : "From branch:")}</div> <div class="flex w-full">${selectedJobStepType === "forloop" ? `<input type="number" min="0" class="!w-32 grow"${add_attribute("value", branchOrIterationN, 0)}>` : `<select class="!w-32 grow">${each(restartBranchNames, ([branchIdx, branchName]) => {
                return `<option${add_attribute("value", branchIdx, 0)}>${escape(branchName)}</option>`;
              })}</select>`} ${validate_component(Button, "Button").$$render(
                $$result,
                {
                  size: "xs",
                  color: "blue",
                  buttonType: "button",
                  btnClasses: "!p-1 !w-[34px] !ml-1",
                  "aria-label": "Restart flow"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Arrow_right, "ArrowRight").$$render($$result, { size: 18 }, {}, {})}`;
                  }
                }
              )}</div></label>`;
            }
          }
        )}`}` : ``} ${job?.job_kind === "script" || job?.job_kind === "flow" ? `${validate_component(Button, "Button").$$render(
          $$result,
          {
            color: "blue",
            size: "sm",
            startIcon: { icon: Refresh_cw }
          },
          {},
          {
            default: () => {
              return `Run again`;
            }
          }
        )}` : ``} ${job?.job_kind === "script" || job?.job_kind === "flow" ? `${!$userStore?.operator ? `${canWrite(job?.script_path ?? "", {}, $userStore) ? `${validate_component(Button, "Button").$$render(
          $$result,
          {
            color: "blue",
            size: "sm",
            startIcon: { icon: Pen }
          },
          {},
          {
            default: () => {
              return `Edit`;
            }
          }
        )}` : ``}` : ``} ${validate_component(Button, "Button").$$render(
          $$result,
          {
            href: viewHref,
            color: "blue",
            size: "sm",
            startIcon: {
              icon: job?.job_kind === "script" ? Code_2 : job?.job_kind === "flow" ? BarsStaggered : Code_2
            }
          },
          {},
          {
            default: () => {
              return `View ${escape(job?.job_kind)}`;
            }
          }
        )}` : ``} `;
      },
      left: () => {
        let isScript = job?.job_kind === "script", runsHref = `/runs/${job?.script_path}${!isScript ? "?jobKind=flow" : ""}`;
        return `<div class="flex gap-2 items-center">${job && "deleted" in job && !job?.deleted && ($superadmin || ($userStore?.is_admin ?? false)) ? `${validate_component(ButtonDropdown, "ButtonDropdown").$$render($$result, { target: "body", hasPadding: false }, {}, {
          items: () => {
            return `${validate_component(MenuItem, "MenuItem").$$render($$result, {}, {}, {
              default: () => {
                return `<span class="text-red-600" data-svelte-h="svelte-unv39q">Delete result, logs and args (admin only)</span>`;
              }
            })} `;
          },
          buttonReplacement: () => {
            return `${validate_component(Button, "Button").$$render(
              $$result,
              {
                nonCaptureEvent: true,
                variant: "border",
                size: "sm",
                startIcon: { icon: Trash }
              },
              {},
              {}
            )}`;
          }
        })} ${job?.job_kind === "script" || job?.job_kind === "flow" ? `${validate_component(Button, "Button").$$render(
          $$result,
          {
            href: runsHref,
            variant: "border",
            color: "blue",
            size: "sm",
            startIcon: { icon: List }
          },
          {},
          {
            default: () => {
              return `View runs`;
            }
          }
        )}` : ``}` : ``}</div>`;
      }
    })} <div class="w-full"><h1 class="flex flex-row flex-wrap justify-between items-center gap-x-4 py-6 max-w-7xl mx-auto px-4"><div class="flex flex-row flex-wrap gap-6 items-center">${job ? `${"success" in job && job.success ? `${job.is_skipped ? `${validate_component(Fast_forward, "FastForward").$$render($$result, { class: "text-green-600", size: 14 }, {}, {})}` : `${validate_component(Check_circle_2, "CheckCircle2").$$render($$result, { class: "text-green-600", size: 14 }, {}, {})}`}` : `${job && "success" in job ? `${validate_component(X_circle, "XCircle").$$render($$result, { class: "text-red-700", size: 14 }, {}, {})}` : `${job && "running" in job && job.running ? `${validate_component(Circle, "Circle").$$render(
      $$result,
      {
        class: "text-yellow-500 fill-current",
        size: 14
      },
      {},
      {}
    )}` : `${job && "running" in job && job.scheduled_for && forLater(job.scheduled_for) ? `${validate_component(Calendar, "Calendar").$$render($$result, { class: "text-secondary", size: 14 }, {}, {})}` : `${job && "running" in job && job.scheduled_for ? `${validate_component(Hourglass, "Hourglass").$$render($$result, { class: "text-tertiary", size: 14 }, {}, {})}` : ``}`}`}`}`} ${escape(job.script_path ?? (job.job_kind == "dependencies" ? "lock dependencies" : "No path"))} <div class="flex flex-row gap-2 items-center flex-wrap">${job.script_hash ? `<a href="${escape(base, true) + "/scripts/get/" + escape(job.script_hash, true) + "?workspace=" + escape($workspaceStore, true)}">${validate_component(Badge, "Badge").$$render($$result, { color: "gray" }, {}, {
      default: () => {
        return `${escape(truncateHash(job.script_hash))}`;
      }
    })}</a>` : ``} ${job && "job_kind" in job ? `<div>${validate_component(Badge, "Badge").$$render($$result, { color: "blue" }, {}, {
      default: () => {
        return `${escape(job.job_kind)}`;
      }
    })}</div>` : ``} ${persistentScriptDefinition ? `<button>${validate_component(Badge, "Badge").$$render($$result, { color: "red" }, {}, {
      default: () => {
        return `persistent`;
      }
    })}</button>` : ``} ${job && "priority" in job ? `<div>${validate_component(Badge, "Badge").$$render($$result, { color: "blue" }, {}, {
      default: () => {
        return `priority: ${escape(job.priority)}`;
      }
    })}</div>` : ``} ${job.tag && ![
      "deno",
      "python3",
      "flow",
      "other",
      "go",
      "postgresql",
      "mysql",
      "bigquery",
      "snowflake",
      "mssql",
      "graphql",
      "nativets",
      "bash",
      "powershell",
      "php",
      "other",
      "dependency"
    ].includes(job.tag) ? `<div>${validate_component(Badge, "Badge").$$render($$result, { color: "indigo" }, {}, {
      default: () => {
        return `Tag: ${escape(job.tag)}`;
      }
    })}</div>` : ``} ${!job.visible_to_owner ? `<div>${validate_component(Badge, "Badge").$$render($$result, { color: "red" }, {}, {
      default: () => {
        return `only visible to you ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `The option to hide this run from the owner of this script or flow was activated`;
          }
        })}`;
      }
    })}</div>` : ``} ${job?.["labels"] && Array.isArray(job?.["labels"]) && job?.["labels"].length > 0 ? `${each(job?.["labels"], (label) => {
      return `<div>${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
        default: () => {
          return `Label: ${escape(label)}`;
        }
      })} </div>`;
    })}` : ``} ${concurrencyKey ? `<div>${validate_component(Popover, "Popover").$$render($$result, { notClickable: true }, {}, {
      text: () => {
        return `This job has concurrency limits enabled with the key
										<a${add_attribute("href", `${base}/runs/?job_kinds=all&graph=ConcurrencyChart&concurrency_key=${concurrencyKey}`, 0)}>${escape(concurrencyKey)}</a> `;
      },
      default: () => {
        return `<a${add_attribute("href", `${base}/runs/?job_kinds=all&graph=ConcurrencyChart&concurrency_key=${concurrencyKey}`, 0)}>${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
          default: () => {
            return `Concurrency: ${escape(truncateRev(concurrencyKey, 20))}`;
          }
        })}</a>`;
      }
    })}</div>` : ``}</div>` : ``}</div></h1> ${job?.["deleted"] ? `<div class="max-w-7xl mx-auto w-full px-4">${validate_component(Alert, "Alert").$$render($$result, { type: "error", title: "Deleted" }, {}, {
      default: () => {
        return `The content of this run was deleted (by an admin, no less)`;
      }
    })}</div> <div class="my-4"></div>` : ``}  <div class="flex flex-col gap-y-8 sm:grid sm:grid-cols-3 sm:gap-10 max-w-7xl mx-auto w-full px-4"><div class="col-span-2">${validate_component(JobArgs, "JobArgs").$$render(
      $$result,
      {
        workspace: job?.workspace_id ?? $workspaceStore ?? "no_w",
        id: job?.id,
        args: job?.args
      },
      {},
      {}
    )}</div> <div>${validate_component(Skeleton, "Skeleton").$$render($$result, { loading: !job, layout: [[9.5]] }, {}, {})} ${job ? `${validate_component(FlowMetadata, "FlowMetadata").$$render($$result, { job, scheduleEditor }, {}, {})}` : ``}</div></div> ${job?.["scheduled_for"] && forLater(job?.["scheduled_for"]) ? `<div class="max-w-7xl mx-auto w-full px-4"><h2 class="mt-10">Scheduled to be executed later: ${escape(displayDate(job?.["scheduled_for"]))}</h2></div>` : ``} ${job?.job_kind !== "flow" && job?.job_kind !== "flowpreview" && job?.job_kind !== "singlescriptflow" ? `<div class="max-w-7xl mx-auto w-full px-4 mb-10">${job?.flow_status && typeof job.flow_status == "object" && !("_metadata" in job.flow_status) ? `<div class="mt-10"></div> ${validate_component(WorkflowTimeline, "WorkflowTimeline").$$render(
      $$result,
      {
        flow_status: asWorkflowStatus(job.flow_status),
        flowDone: job.type == "CompletedJob"
      },
      {},
      {}
    )}` : ``}  <div class="mr-2 sm:mr-0 mt-12">${validate_component(Tabs, "Tabs").$$render(
      $$result,
      { selected: viewTab },
      {
        selected: ($$value) => {
          viewTab = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Tab, "Tab").$$render($$result, { value: "result" }, {}, {
            default: () => {
              return `Result`;
            }
          })} ${validate_component(Tab, "Tab").$$render($$result, { value: "logs" }, {}, {
            default: () => {
              return `Logs`;
            }
          })} ${validate_component(Tab, "Tab").$$render($$result, { value: "stats" }, {}, {
            default: () => {
              return `Metrics`;
            }
          })} ${job?.job_kind == "preview" ? `${validate_component(Tab, "Tab").$$render($$result, { value: "code" }, {}, {
            default: () => {
              return `Code`;
            }
          })}` : ``}`;
        }
      }
    )} ${validate_component(Skeleton, "Skeleton").$$render($$result, { loading: !job, layout: [[5]] }, {}, {})} ${job ? `<div class="flex flex-row border rounded-md p-2 mt-2 overflow-auto min-h-[600px]">${viewTab == "logs" ? `<div class="w-full">${validate_component(LogViewer, "LogViewer").$$render(
      $$result,
      {
        jobId: job.id,
        duration: job?.["duration_ms"],
        mem: job?.["mem_peak"],
        isLoading: !(job && "logs" in job && job.logs),
        content: job?.logs,
        tag: job?.tag
      },
      {},
      {}
    )}</div>` : `${viewTab == "code" ? `${job && "raw_code" in job && job.raw_code ? `<div class="text-xs">${validate_component(HighlightCode, "HighlightCode").$$render(
      $$result,
      {
        lines: true,
        language: job.language,
        code: job.raw_code
      },
      {},
      {}
    )}</div>` : `${job ? `No code is available` : `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[5]] }, {}, {})}`}`}` : `${viewTab == "stats" ? `<div class="w-full">${validate_component(MemoryFootprintViewer, "MemoryFootprintViewer").$$render(
      $$result,
      { jobId: job.id, jobUpdateLastFetch },
      {
        jobUpdateLastFetch: ($$value) => {
          jobUpdateLastFetch = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : `${job !== void 0 && "result" in job && job.result !== void 0 ? `${validate_component(DisplayResult, "DisplayResult").$$render(
      $$result,
      {
        workspaceId: job?.workspace_id,
        jobId: job?.id,
        result: job.result
      },
      {},
      {}
    )}` : `${job ? `No output is available yet` : ``}`}`}`}`}</div>` : ``}</div></div>` : `${!job?.["deleted"] ? `<div class="mt-10"></div> ${validate_component(FlowProgressBar, "FlowProgressBar").$$render(
      $$result,
      {
        job,
        class: "py-4 max-w-7xl mx-auto px-4"
      },
      {},
      {}
    )} <div class="w-full mt-10">${validate_component(FlowStatusViewer, "FlowStatusViewer").$$render(
      $$result,
      {
        jobId: job.id,
        workspaceId: $workspaceStore,
        selectedJobStep
      },
      {
        selectedJobStep: ($$value) => {
          selectedJobStep = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : ``}`}</div>`}`;
  } while (!$$settled);
  $$unsubscribe_initialArgsStore();
  $$unsubscribe_workspaceStore();
  $$unsubscribe_page();
  $$unsubscribe_userWorkspaces();
  $$unsubscribe_enterpriseLicense();
  $$unsubscribe_userStore();
  $$unsubscribe_superadmin();
  return $$rendered;
});
export {
  Page as default
};
