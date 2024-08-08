import { c as create_ssr_component, s as subscribe, v as validate_component, f as each, e as escape, o as onDestroy, d as createEventDispatcher, h as getContext, b as add_attribute, a as set_store_value, u as setContext } from "./ssr.js";
import { w as writable } from "./index.js";
import { J as JobService } from "./services.gen.js";
import { w as workspaceStore, u as userStore } from "./stores2.js";
import { b as base } from "./base.js";
import { L as LogViewer, D as DisplayResult, a as TimelineBar } from "./TimelineBar.js";
import { D as Drawer, a as DrawerContent } from "./DrawerContent.js";
import "./index2.js";
import "yaml";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import "./common.js";
import "minimatch";
import { L as Loader_2 } from "./loader-2.js";
import { m as msToSec, W as msToReadableTime, C as Check_circle_2, X as X_circle, j as displayDate, B as Button, Y as debounce, b as emptyString, D as Chevron_down, t as truncateRev } from "./toast.js";
import { B as Badge } from "./Badge.js";
import { f as forLater, g as getDbClockNow, b as FlowGraphViewerStep } from "./FlowGraphViewerStep.js";
/* empty css                                     */
import { P as Popover } from "./Popover.js";
import { H as Hourglass } from "./hourglass.js";
import { A as Alert_triangle } from "./alert-triangle.js";
import { N as NoWorkerWithTagWarning } from "./NoWorkerWithTagWarning.js";
import { C as Clock } from "./DateTimeInput.js";
import { C as Calendar } from "./calendar.js";
import { C as Circle } from "./circle.js";
import { A as Alert } from "./Alert.js";
import { T as Tabs, a as Tab } from "./Tabs.js";
import { F as FlowGraph } from "./util.js";
/* empty css                                                    */
import { J as JobArgs } from "./JobArgs.js";
import { m as mergeSchema } from "./common2.js";
import { L as LightweightSchemaForm } from "./LightweightSchemaForm.js";
import { T as Tooltip } from "./Tooltip.js";
import { X } from "./x.js";
import { deepEqual } from "fast-equals";
const JobLogs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { jobId } = $$props;
  let logs = void 0;
  async function loadLogs() {
    logs = await JobService.getJobLogs({ workspace: $workspaceStore, id: jobId });
  }
  if ($$props.jobId === void 0 && $$bindings.jobId && jobId !== void 0) $$bindings.jobId(jobId);
  jobId && loadLogs();
  $$unsubscribe_workspaceStore();
  return `${validate_component(LogViewer, "LogViewer").$$render(
    $$result,
    {
      content: logs,
      isLoading: false,
      tag: void 0,
      jobId
    },
    {},
    {}
  )}`;
});
const AllFlowLogs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $states, $$unsubscribe_states;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { states } = $$props;
  $$unsubscribe_states = subscribe(states, (value) => $states = value);
  if ($$props.states === void 0 && $$bindings.states && states !== void 0) $$bindings.states(states);
  $$unsubscribe_states();
  $$unsubscribe_workspaceStore();
  return `<div class="flex flex-col">${states != void 0 ? `${each(Object.entries($states ?? {}), ([id, status]) => {
    return `<div class="pb-12"><h1 class="mb-2">Step ${escape(id)}</h1> ${each(Object.entries(status.byJob ?? {}), (jobS) => {
      let job = jobS[0];
      return ` <div><a class="text-xs" rel="noreferrer" target="_blank" href="${escape(base, true) + "/run/" + escape(job, true) + "?workspace=" + escape($workspaceStore, true)}">${escape(job)} </a>${validate_component(JobLogs, "JobLogs").$$render($$result, { jobId: job }, {}, {})}</div>`;
    })} </div>`;
  })}` : `${validate_component(Loader_2, "Loader2").$$render($$result, { size: 14, class: "animate-spin " }, {}, {})}`}</div>`;
});
const FlowJobResult = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { result } = $$props;
  let { logs } = $$props;
  let { col = false } = $$props;
  let { noBorder = false } = $$props;
  let { loading } = $$props;
  let { filename = void 0 } = $$props;
  let { jobId = void 0 } = $$props;
  let { workspaceId = void 0 } = $$props;
  let { refreshLog = false } = $$props;
  let { durationStates } = $$props;
  let lastJobId = void 0;
  let drawer = void 0;
  async function diffJobId() {
    if (jobId != lastJobId) {
      lastJobId = jobId;
      logs = void 0;
      logOffset = 0;
      getLogs();
    }
  }
  let logOffset = 0;
  async function getLogs() {
    if (jobId) {
      const getUpdate = await JobService.getJobUpdates({
        workspace: workspaceId ?? $workspaceStore,
        id: jobId,
        running: loading ?? false,
        logOffset: logOffset == 0 ? logs?.length ? logs?.length + 1 : 0 : logOffset
      });
      logs = (logs ?? "").concat(getUpdate.new_logs ?? "");
      logOffset = getUpdate.log_offset ?? 0;
    }
    if (refreshLog) {
      setTimeout(
        () => {
          if (refreshLog) {
            getLogs();
          }
        },
        1e3
      );
    }
  }
  if ($$props.result === void 0 && $$bindings.result && result !== void 0) $$bindings.result(result);
  if ($$props.logs === void 0 && $$bindings.logs && logs !== void 0) $$bindings.logs(logs);
  if ($$props.col === void 0 && $$bindings.col && col !== void 0) $$bindings.col(col);
  if ($$props.noBorder === void 0 && $$bindings.noBorder && noBorder !== void 0) $$bindings.noBorder(noBorder);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
  if ($$props.filename === void 0 && $$bindings.filename && filename !== void 0) $$bindings.filename(filename);
  if ($$props.jobId === void 0 && $$bindings.jobId && jobId !== void 0) $$bindings.jobId(jobId);
  if ($$props.workspaceId === void 0 && $$bindings.workspaceId && workspaceId !== void 0) $$bindings.workspaceId(workspaceId);
  if ($$props.refreshLog === void 0 && $$bindings.refreshLog && refreshLog !== void 0) $$bindings.refreshLog(refreshLog);
  if ($$props.durationStates === void 0 && $$bindings.durationStates && durationStates !== void 0) $$bindings.durationStates(durationStates);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    jobId != lastJobId && diffJobId();
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { this: drawer },
      {
        this: ($$value) => {
          drawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Explore all steps' logs" }, {}, {
            default: () => {
              return `${validate_component(AllFlowLogs, "AllFlowLogs").$$render($$result, { states: durationStates }, {}, {})}`;
            }
          })}`;
        }
      }
    )} <div class="${[
      "grid " + escape(!col ? "grid-cols-2" : "grid-rows-2", true) + " shadow border border-tertiary-inverse grow overflow-hidden",
      !noBorder ? "border" : ""
    ].join(" ").trim()}"><div class="${"bg-surface " + escape(col ? "" : "max-h-80", true) + " p-1 overflow-auto relative"}"><span class="text-tertiary" data-svelte-h="svelte-19slqk0">Result</span> ${result !== void 0 ? `${validate_component(DisplayResult, "DisplayResult").$$render($$result, { workspaceId, jobId, filename, result }, {}, {})}` : `${loading ? `${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})}` : `<div class="text-gray-400" data-svelte-h="svelte-2iqlxt">No result (result is undefined)</div>`}`}</div> <div class="${"overflow-auto " + escape(col ? "" : "max-h-80", true) + " relative"}"><div class="absolute z-40 text-sm top-1.5 left-2"><button class="" data-svelte-h="svelte-1j4dbx8">explore all steps&#39; logs</button></div> ${validate_component(LogViewer, "LogViewer").$$render(
      $$result,
      {
        content: logs ?? "",
        jobId,
        isLoading: false,
        tag: void 0
      },
      {},
      {}
    )}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
function classFromColorName(color) {
  const colors = {
    gray: "text-gray-400 dark:text-gray-300",
    red: "text-red-400 dark:text-red-500",
    yellow: "text-yellow-500 dark:text-yellow-500",
    orange: "text-orange-500 dark:text-orange-500"
  };
  return colors[color];
}
function waitColorTresholds(waiting_time_ms) {
  if (waiting_time_ms > 3e5) {
    return "red";
  }
  if (waiting_time_ms > 3e4) {
    return "orange";
  }
  if (waiting_time_ms > 5e3) {
    return "yellow";
  }
  return "gray";
}
const WaitTimeWarning = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let total_wait;
  let { self_wait_time_ms = void 0 } = $$props;
  let { aggregate_wait_time_ms = void 0 } = $$props;
  let { variant = "icon" } = $$props;
  if ($$props.self_wait_time_ms === void 0 && $$bindings.self_wait_time_ms && self_wait_time_ms !== void 0) $$bindings.self_wait_time_ms(self_wait_time_ms);
  if ($$props.aggregate_wait_time_ms === void 0 && $$bindings.aggregate_wait_time_ms && aggregate_wait_time_ms !== void 0) $$bindings.aggregate_wait_time_ms(aggregate_wait_time_ms);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0) $$bindings.variant(variant);
  total_wait = (self_wait_time_ms ?? 0) + (aggregate_wait_time_ms ?? 0);
  return `${validate_component(Popover, "Popover").$$render($$result, { notClickable: true }, {}, {
    text: () => {
      return `<div class="mb-5">${self_wait_time_ms != void 0 ? `<div>Time spent waiting for an executor: <span class="font-bold">${escape(msToSec(self_wait_time_ms))}s</span></div>` : ``} ${aggregate_wait_time_ms != void 0 ? `<div>Child jobs&#39; time spent waiting for an executor: <span class="font-bold">${escape(msToSec(aggregate_wait_time_ms))}s</span></div>` : ``}</div> ${self_wait_time_ms != void 0 && aggregate_wait_time_ms != void 0 ? `The top level job and its children (e.g. flow steps) had to wait a for an unexpected amount of
			time before starting. The first value is the top level job&#39;s time spent waiting for a worker
			and the second is the cumulative wait time for its children.` : `${self_wait_time_ms ? `<div data-svelte-h="svelte-16eyxex">This job spent an unexpected amount of time waiting for a worker before starting.</div>` : `${aggregate_wait_time_ms != void 0 ? `<div data-svelte-h="svelte-14ytzkw">This job&#39;s children spent an unexpected amount of time waiting for a worker before starting.
				The value is an aggregate of their individual waiting times.</div>` : ``}`}`} <div data-svelte-h="svelte-1oj5vmb">In a healthy queue, jobs are expected to start in under 50ms.</div> `;
    },
    default: () => {
      return `${variant === "icon" ? `${validate_component(Hourglass, "Hourglass").$$render(
        $$result,
        {
          class: classFromColorName(waitColorTresholds(total_wait)),
          size: 14
        },
        {},
        {}
      )}` : `${variant === "badge" ? `${validate_component(Badge, "Badge").$$render(
        $$result,
        {
          large: true,
          icon: { icon: Hourglass, position: "left" },
          color: waitColorTresholds(total_wait)
        },
        {},
        {
          default: () => {
            return `${escape(msToSec(total_wait))}s`;
          }
        }
      )}` : `${variant === "badge-self-wait" ? `${self_wait_time_ms ? `${validate_component(Badge, "Badge").$$render(
        $$result,
        {
          color: waitColorTresholds(self_wait_time_ms)
        },
        {},
        {
          default: () => {
            return `+${escape(msToSec(self_wait_time_ms))}s`;
          }
        }
      )}` : ``}` : `${variant === "alert" ? `${validate_component(Alert_triangle, "AlertTriangle").$$render(
        $$result,
        {
          class: classFromColorName(waitColorTresholds(total_wait)),
          size: 14
        },
        {},
        {}
      )}` : ``}`}`}`}`;
    }
  })}`;
});
const DurationMs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { duration_ms } = $$props;
  let { self_wait_time_ms = void 0 } = $$props;
  let { aggregate_wait_time_ms = void 0 } = $$props;
  if ($$props.duration_ms === void 0 && $$bindings.duration_ms && duration_ms !== void 0) $$bindings.duration_ms(duration_ms);
  if ($$props.self_wait_time_ms === void 0 && $$bindings.self_wait_time_ms && self_wait_time_ms !== void 0) $$bindings.self_wait_time_ms(self_wait_time_ms);
  if ($$props.aggregate_wait_time_ms === void 0 && $$bindings.aggregate_wait_time_ms && aggregate_wait_time_ms !== void 0) $$bindings.aggregate_wait_time_ms(aggregate_wait_time_ms);
  return `<div>${validate_component(Badge, "Badge").$$render(
    $$result,
    {
      large: true,
      icon: { icon: Hourglass, position: "left" }
    },
    {},
    {
      default: () => {
        return `Ran in ${escape(msToReadableTime(duration_ms))} ${self_wait_time_ms || aggregate_wait_time_ms ? `${validate_component(WaitTimeWarning, "WaitTimeWarning").$$render(
          $$result,
          {
            self_wait_time_ms,
            aggregate_wait_time_ms,
            variant: "alert"
          },
          {},
          {}
        )}` : ``}`;
      }
    }
  )}</div>`;
});
const SMALL_ICON_SIZE = 12;
const JobStatus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { job } = $$props;
  if ($$props.job === void 0 && $$bindings.job && job !== void 0) $$bindings.job(job);
  return `${job && "success" in job && job.success ? `<div class="flex flex-row flex-wrap gap-y-1 mb-1 gap-x-2">${validate_component(Badge, "Badge").$$render(
    $$result,
    {
      large: true,
      color: "green",
      icon: { icon: Check_circle_2, position: "left" }
    },
    {},
    {
      default: () => {
        return `Success ${escape(job.is_skipped ? "(Skipped)" : "")}`;
      }
    }
  )} ${validate_component(DurationMs, "DurationMs").$$render(
    $$result,
    {
      duration_ms: job.duration_ms,
      self_wait_time_ms: job?.self_wait_time_ms,
      aggregate_wait_time_ms: job?.aggregate_wait_time_ms
    },
    {},
    {}
  )}</div>` : `${job && "success" in job ? `<div class="flex flex-row flex-wrap gap-y-1 mb-1 gap-x-2">${validate_component(Badge, "Badge").$$render(
    $$result,
    {
      large: true,
      color: "red",
      icon: { icon: X_circle, position: "left" }
    },
    {},
    {
      default: () => {
        return `Failed`;
      }
    }
  )} ${validate_component(DurationMs, "DurationMs").$$render(
    $$result,
    {
      duration_ms: job.duration_ms,
      self_wait_time_ms: job?.self_wait_time_ms,
      aggregate_wait_time_ms: job?.aggregate_wait_time_ms
    },
    {},
    {}
  )}</div>` : `${job && "running" in job && job.running ? `<div>${validate_component(Badge, "Badge").$$render(
    $$result,
    {
      large: true,
      color: "yellow",
      icon: { icon: Clock, position: "left" }
    },
    {},
    {
      default: () => {
        return `Running
			${job.flow_status ? `(${escape(job.flow_status?.step + 1)} of ${escape(job.raw_flow?.modules?.length ?? "?")})` : ``}`;
      }
    }
  )}</div>` : `${job && "running" in job && "scheduled_for" in job && job.scheduled_for && forLater(job.scheduled_for) ? `<div>${validate_component(Badge, "Badge").$$render(
    $$result,
    {
      color: "blue",
      icon: { icon: Calendar, position: "left" }
    },
    {},
    {
      default: () => {
        return `Scheduled for ${escape(displayDate(job.scheduled_for))}`;
      }
    }
  )}</div>` : `${job && "running" in job ? `<div class="flex flex-row gap-1 items-center">${validate_component(Badge, "Badge").$$render(
    $$result,
    {
      color: "orange",
      icon: { icon: Clock, position: "left" }
    },
    {},
    {
      default: () => {
        return `Queued`;
      }
    }
  )} ${validate_component(NoWorkerWithTagWarning, "NoWorkerWithTagWarning").$$render($$result, { tag: job.tag }, {}, {})}</div>` : `${validate_component(Circle, "Circle").$$render(
    $$result,
    {
      size: SMALL_ICON_SIZE,
      class: "text-gray-200"
    },
    {},
    {}
  )}`}`}`}`}`}`;
});
const FlowPreviewStatus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { job } = $$props;
  if ($$props.job === void 0 && $$bindings.job && job !== void 0) $$bindings.job(job);
  return `<div class="grid grid-cols-2 gap-4 mb-1 text-tertiary dark:text-gray-400">${validate_component(JobStatus, "JobStatus").$$render($$result, { job }, {}, {})} ${job ? `<div><div class="text-primary whitespace-nowrap truncate text-sm"><span class="font-semibold mr-1" data-svelte-h="svelte-bvvxkz">Flow&#39;s job Id:</span> <a rel="noreferrer" target="_blank" href="${escape(base, true) + "/run/" + escape(job?.id, true) + "?workspace=" + escape(job?.workspace_id, true)}">${escape(job?.id)}</a></div></div>` : ``}</div>`;
});
function dfs(modules, f) {
  let result = [];
  for (const module of modules) {
    if (module.value.type == "forloopflow" || module.value.type == "whileloopflow") {
      result = result.concat(f(module));
      result = result.concat(dfs(module.value.modules, f));
    } else if (module.value.type == "branchone") {
      result = result.concat(f(module));
      result = result.concat(
        dfs(
          module.value.branches.map((b) => b.modules).flat().concat(module.value.default),
          f
        )
      );
    } else if (module.value.type == "branchall") {
      result = result.concat(f(module));
      result = result.concat(dfs(module.value.branches.map((b) => b.modules).flat(), f));
    } else {
      result.push(f(module));
    }
  }
  return result;
}
const css$1 = {
  code: ".text-waiting.svelte-1arcw9k{color:#c76bf2}",
  map: null
};
const ModuleStatus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  let { scheduled_for } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.scheduled_for === void 0 && $$bindings.scheduled_for && scheduled_for !== void 0) $$bindings.scheduled_for(scheduled_for);
  $$result.css.add(css$1);
  return `${type == "WaitingForEvents" ? `<span class="italic text-waiting svelte-1arcw9k">${validate_component(Hourglass, "Hourglass").$$render($$result, {}, {}, {})}
		Waiting to be resumed by resume events such as approvals</span>` : `${type == "WaitingForPriorSteps" ? `<span class="italic text-tertiary">${validate_component(Hourglass, "Hourglass").$$render($$result, {}, {}, {})}
		Waiting for prior steps to complete</span>` : `${type == "WaitingForExecutor" ? `<span class="italic text-tertiary">${validate_component(Hourglass, "Hourglass").$$render($$result, {}, {}, {})} ${scheduled_for && forLater(scheduled_for.toString()) ? `Job is scheduled to be executed at ${escape(displayDate(scheduled_for, true))}` : `Job is waiting for an executor`}</span>` : `${type == "Success" ? `${validate_component(Badge, "Badge").$$render($$result, { color: "green" }, {}, {
    default: () => {
      return `Success`;
    }
  })}` : `${type == "Failure" ? `${validate_component(Badge, "Badge").$$render($$result, { color: "red" }, {}, {
    default: () => {
      return `Failure`;
    }
  })}` : ``}`}`}`}`}`;
});
const FlowStatusWaitingForEvents = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let approvalStep;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { isOwner } = $$props;
  let { workspaceId } = $$props;
  let { job } = $$props;
  let default_payload = {};
  let resumeUrl = void 0;
  let cancelUrl = void 0;
  let description = void 0;
  let hide_cancel = false;
  let defaultValues = {};
  let schema = {};
  let lastJobId = void 0;
  async function getDefaultArgs() {
    let jobId = job?.flow_status?.modules?.[approvalStep]?.job;
    if (jobId === lastJobId) {
      return;
    }
    if (!jobId) {
      return {};
    }
    lastJobId = jobId;
    let job_result = await JobService.getCompletedJobResult({
      workspace: workspaceId ?? $workspaceStore ?? "",
      id: jobId
    });
    const args = job_result?.default_args ?? {};
    description = job_result?.description;
    defaultValues = JSON.parse(JSON.stringify(args));
    default_payload = args;
    resumeUrl = job_result?.["resume"];
    cancelUrl = job_result?.["cancel"];
    hide_cancel = job?.raw_flow?.modules?.[approvalStep]?.suspend?.hide_cancel ?? false;
    schema = mergeSchema(job?.raw_flow?.modules?.[approvalStep]?.suspend?.resume_form?.schema ?? {}, job_result?.enums ?? {});
  }
  if ($$props.isOwner === void 0 && $$bindings.isOwner && isOwner !== void 0) $$bindings.isOwner(isOwner);
  if ($$props.workspaceId === void 0 && $$bindings.workspaceId && workspaceId !== void 0) $$bindings.workspaceId(workspaceId);
  if ($$props.job === void 0 && $$bindings.job && job !== void 0) $$bindings.job(job);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    approvalStep = (job?.flow_status?.step ?? 1) - 1;
    job && getDefaultArgs();
    $$rendered = `<div class="w-full h-full mt-2 text-sm text-tertiary"><p data-svelte-h="svelte-tc1ez4">Waiting to be resumed</p> ${description != void 0 ? `${validate_component(DisplayResult, "DisplayResult").$$render(
      $$result,
      {
        workspaceId,
        noControls: true,
        result: description
      },
      {},
      {}
    )}` : ``} <div>${isOwner || resumeUrl ? `<div class="flex flex-row gap-2 mt-2">${cancelUrl && !hide_cancel ? `<div>${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "red",
        title: "Cancel the flow",
        iconOnly: true,
        startIcon: { icon: X },
        variant: "border"
      },
      {},
      {}
    )}</div>` : ``} <div>${validate_component(Button, "Button").$$render($$result, { color: "green", variant: "border" }, {}, {
      default: () => {
        return `Resume ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `Since you are an owner of this flow, you can send resume events without necessarily
							knowing the resume id sent by the approval step`;
          }
        })}`;
      }
    })}</div> ${job?.raw_flow?.modules?.[approvalStep]?.suspend?.resume_form?.schema ? `<div class="w-full border rounded-lg p-2">${validate_component(LightweightSchemaForm, "LightweightSchemaForm").$$render(
      $$result,
      {
        defaultValues,
        schema,
        args: default_payload
      },
      {
        args: ($$value) => {
          default_payload = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : ``} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
      default: () => {
        return `The payload is optional, it is passed to the following step through the \`resume\` variable`;
      }
    })}</div>` : `You cannot resume the flow yourself without receiving the resume secret since you are not an
			owner of ${escape(job.script_path)} and the approval step did not contain the resume url at key \`resume\``}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const FlowTimeline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $durationStatuses, $$unsubscribe_durationStatuses;
  let { selfWaitTime = void 0 } = $$props;
  let { aggregateWaitTime = void 0 } = $$props;
  let { flowModules } = $$props;
  let { durationStatuses } = $$props;
  $$unsubscribe_durationStatuses = subscribe(durationStatuses, (value) => $durationStatuses = value);
  let { flowDone = false } = $$props;
  let min = void 0;
  let max = void 0;
  let total = void 0;
  let items = void 0;
  let debounced = debounce(() => computeItems($durationStatuses), 30);
  function reset() {
    min = void 0;
    max = void 0;
    items = computeItems($durationStatuses);
  }
  function computeItems(durationStatuses2) {
    let nmin = void 0;
    let nmax = void 0;
    let isStillRunning = false;
    let cnt = 0;
    let nitems = {};
    Object.entries(durationStatuses2).forEach(([k, o]) => {
      Object.values(o.byJob).forEach((v) => {
        cnt++;
        if (v.started_at) {
          if (!nmin) {
            nmin = v.started_at;
          } else {
            nmin = Math.min(nmin, v.started_at);
          }
        }
        if (!flowDone && v.duration_ms == void 0) {
          isStillRunning = true;
        }
        if (!isStillRunning) {
          if (v.started_at && v.duration_ms) {
            let lmax = v.started_at + v.duration_ms;
            if (!nmax) {
              nmax = lmax;
            } else {
              nmax = Math.max(nmax, lmax);
            }
          }
        }
      });
      let arr = Object.entries(o.byJob).map(([k2, v]) => ({ ...v, id: k2 }));
      arr.sort((x, y) => {
        if (!x.started_at) {
          return -1;
        } else if (!y.started_at) {
          return 1;
        } else {
          return x.started_at - y.started_at;
        }
      });
      nitems[k] = arr;
    });
    items = nitems;
    min = nmin;
    max = isStillRunning || cnt < flowModules.length && !flowDone ? void 0 : nmax;
    if (max && min) {
      total = max - min;
      total = Math.max(total, 2e3);
    }
  }
  let now = getDbClockNow().getTime();
  let interval = setInterval(
    (x) => {
      if (!max) {
        now = getDbClockNow().getTime();
      }
      if (min && (!max || total == void 0)) {
        total = max ? max - min : Math.max(now - min, 2e3);
      }
    },
    30
  );
  onDestroy(() => {
    interval && clearInterval(interval);
  });
  if ($$props.selfWaitTime === void 0 && $$bindings.selfWaitTime && selfWaitTime !== void 0) $$bindings.selfWaitTime(selfWaitTime);
  if ($$props.aggregateWaitTime === void 0 && $$bindings.aggregateWaitTime && aggregateWaitTime !== void 0) $$bindings.aggregateWaitTime(aggregateWaitTime);
  if ($$props.flowModules === void 0 && $$bindings.flowModules && flowModules !== void 0) $$bindings.flowModules(flowModules);
  if ($$props.durationStatuses === void 0 && $$bindings.durationStatuses && durationStatuses !== void 0) $$bindings.durationStatuses(durationStatuses);
  if ($$props.flowDone === void 0 && $$bindings.flowDone && flowDone !== void 0) $$bindings.flowDone(flowDone);
  if ($$props.reset === void 0 && $$bindings.reset && reset !== void 0) $$bindings.reset(reset);
  flowDone != void 0 && $durationStatuses && debounced();
  $$unsubscribe_durationStatuses();
  return `${items ? `<div class="divide-y border-b"><div class="px-2 py-2 grid grid-cols-12 w-full"><div></div> <div class="col-span-11 pt-1 px-2 flex text-2xs text-secondary justify-between"><div>${escape(min ? displayDate(new Date(min), true) : "")}</div>${max && min ? `<div class="hidden lg:block">${escape(msToSec(max - min))}s</div> ` : ``}<div class="flex gap-1 items-center font-mono">${escape(max ? displayDate(new Date(max), true) : "")}${!max && min ? `${now ? ` ${escape(msToSec(now - min, 3))}s
						` : ``}${validate_component(Loader_2, "Loader2").$$render($$result, { size: 14, class: "animate-spin" }, {}, {})}` : ``}</div></div></div> <div class="flex flex-row-reverse items-center text-sm text-secondary p-2" data-svelte-h="svelte-dfscjc"><div class="flex gap-4 items-center text-2xs"><div class="flex gap-2 items-center"><div>Waiting for executor/Suspend</div> <div class="h-4 w-4 bg-gray-500"></div></div> <div class="flex gap-2 items-center"><div>Execution</div> <div class="h-4 w-4 bg-blue-500/90"></div></div></div></div> ${selfWaitTime ? `<div class="px-2 py-2 grid grid-cols-6 w-full">root:
				${validate_component(WaitTimeWarning, "WaitTimeWarning").$$render(
    $$result,
    {
      self_wait_time_ms: selfWaitTime,
      aggregate_wait_time_ms: aggregateWaitTime,
      variant: "badge-self-wait"
    },
    {},
    {}
  )}</div>` : ``} ${each(Object.values(flowModules), (k) => {
    return `<div class="overflow-auto max-h-60 shadow-inner dark:shadow-gray-700 relative">${($durationStatuses?.[k]?.iteration_from ?? 0) > 0 ? `<div class="w-full flex flex-row-reverse sticky top-0"><button class="!text-secondary underline mr-2 text-2xs text-right whitespace-nowrap">Viewing iterations ${escape($durationStatuses[k].iteration_from)} to ${escape($durationStatuses[k].iteration_total)}. Load more</button> </div>` : ``} <div class="px-2 py-2 grid grid-cols-6 w-full"><div>${escape(k)}</div> <div class="col-span-5 flex min-h-6 w-full">${min && total ? `<div class="flex flex-col gap-2 w-full p-2">${each(items?.[k] ?? [], (b) => {
      let waitingLen = b?.created_at ? b.started_at ? b.started_at - b?.created_at : b.duration_ms ? 0 : now - b?.created_at : 0;
      return ` <div class="flex w-full">${validate_component(TimelineBar, "TimelineBar").$$render(
        $$result,
        {
          position: "left",
          id: b?.id,
          total,
          min,
          gray: true,
          started_at: b.created_at,
          len: waitingLen < 100 ? 0 : waitingLen - 100,
          running: b?.started_at == void 0
        },
        {},
        {}
      )} ${b.started_at ? `${validate_component(TimelineBar, "TimelineBar").$$render(
        $$result,
        {
          position: waitingLen < 100 ? "center" : "right",
          id: b?.id,
          total,
          min,
          concat: true,
          started_at: b.started_at,
          len: b.started_at ? b?.duration_ms ?? now - b?.started_at : 0,
          running: b?.duration_ms == void 0
        },
        {},
        {}
      )}` : ``} </div>`;
    })}</div> ` : ``}</div></div> </div>`;
  })}</div>` : `${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})}`}`;
});
const css = {
  code: ".line.svelte-vajpdb{background:repeating-linear-gradient(180deg,transparent 0 4px,#bbb 4px 8px) 50%/1px 100% no-repeat}",
  map: null
};
function isSuccess(arg) {
  if (arg == void 0) {
    return void 0;
  } else {
    return arg == true;
  }
}
const FlowStatusViewerInner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isListJob;
  let selected;
  let $localDurationStatuses, $$unsubscribe_localDurationStatuses;
  let $localModuleStates, $$unsubscribe_localModuleStates;
  let $$unsubscribe_flowStateStore;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $suspendStatus, $$unsubscribe_suspendStatus;
  let $retryStatus, $$unsubscribe_retryStatus;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  const dispatch = createEventDispatcher();
  let { flowStateStore, retryStatus, suspendStatus } = getContext("FlowStatusViewer");
  $$unsubscribe_flowStateStore = subscribe(flowStateStore, (value) => value);
  $$unsubscribe_retryStatus = subscribe(retryStatus, (value) => $retryStatus = value);
  $$unsubscribe_suspendStatus = subscribe(suspendStatus, (value) => $suspendStatus = value);
  let { jobId } = $$props;
  let { workspaceId = void 0 } = $$props;
  let { flowJobIds = void 0 } = $$props;
  let { innerModule = void 0 } = $$props;
  let { render = true } = $$props;
  let { isOwner = false } = $$props;
  let { selectedNode = void 0 } = $$props;
  let { globalModuleStates } = $$props;
  let { globalDurationStatuses } = $$props;
  let { globalRefreshes = {} } = $$props;
  let { childFlow = false } = $$props;
  let { reducedPolling = false } = $$props;
  let { wideResults = false } = $$props;
  let jobResults = flowJobIds?.flowJobs?.map((x, id) => `iter #${id + 1} not loaded by frontend yet`) ?? [];
  let retry_selected = "";
  let timeout;
  let localModuleStates = writable({});
  $$unsubscribe_localModuleStates = subscribe(localModuleStates, (value) => $localModuleStates = value);
  let localDurationStatuses = writable({});
  $$unsubscribe_localDurationStatuses = subscribe(localDurationStatuses, (value) => $localDurationStatuses = value);
  let { job = void 0 } = $$props;
  function setModuleState(key, value, force, keepType) {
    let newValue = {
      ...$localModuleStates[key] ?? {},
      ...value
    };
    if (!deepEqual($localModuleStates[key], value) || force) {
      [localModuleStates, ...globalModuleStates].forEach((s) => {
        s.update((x) => {
          if (keepType && (x[key]?.type == "Success" || x[key]?.type == "Failure")) {
            newValue.type = x[key].type;
          }
          x[key] = newValue;
          return x;
        });
      });
    }
  }
  let innerModules = [];
  function updateStatus(status) {
    innerModules = status?.modules?.concat(status.failure_module.type != "WaitingForPriorSteps" ? status.failure_module : []) ?? [];
    updateInnerModules();
    let count = status.retry?.fail_count;
    if (count) {
      set_store_value(retryStatus, $retryStatus[jobId ?? ""] = count, $retryStatus);
    } else if ($retryStatus[jobId ?? ""] != void 0) {
      delete $retryStatus[jobId ?? ""];
      retryStatus.set($retryStatus);
    }
    let jobStatus = job?.flow_status?.modules?.[job?.flow_status.step];
    if (jobStatus && jobStatus.count != void 0) {
      set_store_value(suspendStatus, $suspendStatus[jobId ?? ""] = { nb: jobStatus.count, job }, $suspendStatus);
    } else if ($suspendStatus[jobId ?? ""] != void 0) {
      delete $suspendStatus[jobId ?? ""];
      suspendStatus.set($suspendStatus);
    }
  }
  function updateInnerModules() {
    if ($localModuleStates) {
      innerModules.forEach((mod, i) => {
        if (mod.type === "WaitingForEvents" && $localModuleStates?.[innerModules?.[i - 1]?.id ?? ""]?.type == "Success") {
          setModuleState(mod.id ?? "", { type: mod.type, args: job?.args });
        } else if (mod.type === "WaitingForExecutor" && $localModuleStates[mod.id ?? ""]?.scheduled_for == void 0) {
          JobService.getJob({
            workspace: workspaceId ?? $workspaceStore ?? "",
            id: mod.job ?? "",
            noLogs: true
          }).then((job2) => {
            const newState = {
              type: mod.type,
              scheduled_for: job2?.["scheduled_for"],
              job_id: job2?.id,
              parent_module: mod["parent_module"],
              args: job2?.args
            };
            setModuleState(mod.id ?? "", newState);
          }).catch((e) => {
            console.error(`Could not load inner module for job ${mod.job}`, e);
          });
        } else if (mod.flow_jobs && (mod.type == "Success" || mod.type == "Failure") && !["Success", "Failure"].includes($localModuleStates?.[mod.id ?? ""]?.type)) {
          setModuleState(mod.id ?? "", { type: mod.type }, true);
        }
        if (mod.branch_chosen) {
          setModuleState(
            mod.id ?? "",
            {
              branchChosen: mod.branch_chosen.type == "default" ? 0 : (mod.branch_chosen.branch ?? 0) + 1
            },
            true
          );
        }
      });
    }
  }
  let recursiveRefresh = {};
  async function refresh(root, loopJob) {
    let modId = flowJobIds?.moduleId;
    if (!loopJob) {
      loopJob = {
        index: $localModuleStates[modId ?? ""]?.selectedForloopIndex ?? 0,
        job: $localModuleStates[modId ?? ""]?.selectedForloop ?? ""
      };
    }
    let last = root ? void 0 : flowJobIds?.flowJobs?.[flowJobIds?.flowJobs.length - 1];
    Object.entries(recursiveRefresh).forEach(([key, v]) => {
      if (modId) {
        if (root && key == loopJob?.job || key == last) {
          v(false);
        }
      } else {
        v(false);
      }
    });
    let njob = flowJobIds ? root && modId ? storedListJobs?.[loopJob.job] : storedListJobs[flowJobIds.length - 1] : job;
    if (njob) {
      dispatch("jobsLoaded", { job: njob, force: true });
    }
  }
  let errorCount = 0;
  let notAnonynmous = false;
  async function loadJobInProgress() {
    dispatch("start");
    if (jobId != "00000000-0000-0000-0000-000000000000") {
      try {
        const newJob = await JobService.getJob({
          workspace: workspaceId ?? $workspaceStore ?? "",
          id: jobId ?? "",
          noLogs: true
        });
        if (!deepEqual(job, newJob)) {
          job = newJob;
          job?.flow_status && updateStatus(job?.flow_status);
          dispatch("jobsLoaded", { job, force: false });
        }
        errorCount = 0;
        notAnonynmous = false;
      } catch (e) {
        if (e?.body?.includes("As a non logged in user, you can only see jobs ran by anonymous users")) {
          notAnonynmous = true;
        } else {
          errorCount += 1;
          console.error(e);
        }
      }
    }
    if (job?.type !== "CompletedJob" && errorCount < 4 && !destroyed) {
      timeout = setTimeout(() => loadJobInProgress(), reducedPolling ? 5e3 : 1e3);
    } else {
      dispatch("done", job);
    }
  }
  let destroyed = false;
  async function updateJobId() {
    if (jobId !== job?.id) {
      set_store_value(localModuleStates, $localModuleStates = {}, $localModuleStates);
      flowTimeline?.reset();
      timeout && clearTimeout(timeout);
      innerModules = [];
      if (flowJobIds) {
        let modId = flowJobIds?.moduleId ?? "";
        let common = {
          iteration_from: (
            // $localDurationStatuses?.[modId]?.iteration_from ??
            Math.max(flowJobIds.flowJobs.length - 20, 0)
          ),
          iteration_total: $localDurationStatuses?.[modId]?.iteration_total ?? flowJobIds?.length
        };
        set_store_value(
          localDurationStatuses,
          $localDurationStatuses[modId] = {
            ...$localDurationStatuses[modId] ?? { byJob: {} },
            ...common
          },
          $localDurationStatuses
        );
        let prefixed = modId;
        globalDurationStatuses.forEach((x) => x.update((x2) => {
          x2[prefixed] = {
            ...x2[prefixed] ?? { byJob: {} },
            ...common
          };
          return x2;
        }));
      } else {
        set_store_value(localDurationStatuses, $localDurationStatuses = {}, $localDurationStatuses);
      }
      await loadJobInProgress();
    }
  }
  function onFlowJobFlowStatus() {
    if (globalRefreshes) {
      let modId = flowJobIds?.moduleId;
      if (modId) {
        globalRefreshes[modId] = async (loopJob) => {
          setIteration(loopJob.index, loopJob.job, false, modId ?? "");
          refresh(true, loopJob);
        };
      }
    }
  }
  onDestroy(() => {
    destroyed = true;
    timeout && clearTimeout(timeout);
  });
  function setIteration(j, id, clicked, modId) {
    if (modId) {
      if (!$localModuleStates?.[modId]) {
        set_store_value(localModuleStates, $localModuleStates[modId] = { type: "InProgress", args: void 0 }, $localModuleStates);
      }
      let state = $localModuleStates?.[modId];
      if (state) {
        if (state.selectedForloop == id && clicked) {
          setModuleState(
            modId,
            {
              selectedForloop: void 0,
              selectedForloopIndex: -1
            },
            false,
            true
          );
        } else {
          setModuleState(
            modId,
            {
              selectedForloop: id,
              selectedForloopIndex: j
            },
            false,
            true
          );
        }
      }
    }
  }
  let flowTimeline;
  let rightColumnSelect = "timeline";
  let stepDetail = void 0;
  let storedListJobs = {};
  if ($$props.jobId === void 0 && $$bindings.jobId && jobId !== void 0) $$bindings.jobId(jobId);
  if ($$props.workspaceId === void 0 && $$bindings.workspaceId && workspaceId !== void 0) $$bindings.workspaceId(workspaceId);
  if ($$props.flowJobIds === void 0 && $$bindings.flowJobIds && flowJobIds !== void 0) $$bindings.flowJobIds(flowJobIds);
  if ($$props.innerModule === void 0 && $$bindings.innerModule && innerModule !== void 0) $$bindings.innerModule(innerModule);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.isOwner === void 0 && $$bindings.isOwner && isOwner !== void 0) $$bindings.isOwner(isOwner);
  if ($$props.selectedNode === void 0 && $$bindings.selectedNode && selectedNode !== void 0) $$bindings.selectedNode(selectedNode);
  if ($$props.globalModuleStates === void 0 && $$bindings.globalModuleStates && globalModuleStates !== void 0) $$bindings.globalModuleStates(globalModuleStates);
  if ($$props.globalDurationStatuses === void 0 && $$bindings.globalDurationStatuses && globalDurationStatuses !== void 0) $$bindings.globalDurationStatuses(globalDurationStatuses);
  if ($$props.globalRefreshes === void 0 && $$bindings.globalRefreshes && globalRefreshes !== void 0) $$bindings.globalRefreshes(globalRefreshes);
  if ($$props.childFlow === void 0 && $$bindings.childFlow && childFlow !== void 0) $$bindings.childFlow(childFlow);
  if ($$props.reducedPolling === void 0 && $$bindings.reducedPolling && reducedPolling !== void 0) $$bindings.reducedPolling(reducedPolling);
  if ($$props.wideResults === void 0 && $$bindings.wideResults && wideResults !== void 0) $$bindings.wideResults(wideResults);
  if ($$props.job === void 0 && $$bindings.job && job !== void 0) $$bindings.job(job);
  if ($$props.refresh === void 0 && $$bindings.refresh && refresh !== void 0) $$bindings.refresh(refresh);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    jobId && updateJobId();
    isListJob = flowJobIds != void 0 && Array.isArray(flowJobIds?.flowJobs);
    flowJobIds?.moduleId && onFlowJobFlowStatus();
    selected = isListJob ? "sequence" : "graph";
    $$rendered = `${notAnonynmous ? `${validate_component(Alert, "Alert").$$render($$result, { type: "error", title: "Required Auth" }, {}, {
      default: () => {
        return `As a non logged in user, you can only see jobs ran by anonymous users like you`;
      }
    })}` : `${job ? `<div class="${"flow-root w-full space-y-4 " + escape(wideResults ? "" : "max-w-7xl", true) + " mx-auto px-4"}"> ${isListJob ? (() => {
      let sliceFrom = $localDurationStatuses[flowJobIds?.moduleId ?? ""]?.iteration_from ?? 0, lenToAdd = Math.min(20, sliceFrom);
      return `  ${(flowJobIds?.flowJobs.length ?? 0) > 20 && lenToAdd > 0 ? (() => {
        let allToAdd = (flowJobIds?.length ?? 0) - sliceFrom;
        return ` <p class="text-tertiary italic text-xs">For performance reasons, only the last 20 items are shown by default <button class="text-primary underline ml-4">Load ${escape(lenToAdd)} prior</button> ${allToAdd > 0 && allToAdd > lenToAdd ? `${escape(sliceFrom)} <button class="text-primary underline ml-4">Load ${escape(allToAdd)} prior</button>` : ``}</p>`;
      })() : ``} ${render ? `<div class="w-full h-full border rounded-sm bg-surface p-1 overflow-auto">${validate_component(DisplayResult, "DisplayResult").$$render(
        $$result,
        {
          workspaceId: job?.workspace_id,
          jobId,
          result: jobResults
        },
        {},
        {}
      )}</div>` : ``}`;
    })() : `${render ? `<div${add_attribute("class", "border rounded-md shadow p-2", 0)}>${validate_component(FlowPreviewStatus, "FlowPreviewStatus").$$render($$result, { job }, {}, {})} ${!job ? `<div>${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})}</div>` : `${`result` in job ? `<div class="w-full h-full">${validate_component(FlowJobResult, "FlowJobResult").$$render(
      $$result,
      {
        workspaceId: job?.workspace_id,
        jobId: job?.id,
        loading: job["running"] == true,
        result: job.result,
        logs: job.logs,
        durationStates: localDurationStatuses
      },
      {},
      {}
    )}</div>` : `${job.flow_status?.modules?.[job?.flow_status?.step]?.type === "WaitingForEvents" ? `${validate_component(FlowStatusWaitingForEvents, "FlowStatusWaitingForEvents").$$render($$result, { workspaceId, job, isOwner }, {}, {})}` : `${$suspendStatus && Object.keys($suspendStatus).length > 0 ? `<div class="flex gap-2 flex-col">${each(Object.values($suspendStatus), (suspendCount) => {
      return `<div><div class="text-sm">Flow suspended, waiting for ${escape(suspendCount.nb)} events</div> ${validate_component(FlowStatusWaitingForEvents, "FlowStatusWaitingForEvents").$$render(
        $$result,
        {
          job: suspendCount.job,
          workspaceId,
          isOwner
        },
        {},
        {}
      )} </div>`;
    })}</div>` : `${job.logs ? `<div class="text-xs p-4 bg-surface-secondary overflow-auto max-h-80 border border-tertiary-inverse"><pre class="w-full">${escape(job.logs)}</pre></div>` : `${innerModules?.length > 0 ? `<div class="flex flex-col gap-1">${each(innerModules, (mod, i) => {
      return `${mod.type == "InProgress" ? (() => {
        let rawMod = job.raw_flow?.modules[i];
        return ` <div><span class="inline-flex gap-1">${validate_component(Badge, "Badge").$$render($$result, { color: "indigo" }, {}, {
          default: () => {
            return `${escape(mod.id)}`;
          }
        })} <span class="font-medium text-primary">${!emptyString(rawMod?.summary) ? `${escape(rawMod?.summary ?? "")}` : `${rawMod?.value.type == "script" ? `${escape(rawMod.value.path ?? "")}` : `${rawMod?.value.type ? `${escape(rawMod?.value.type)}` : ``}`}`}</span> ${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})}</span></div>`;
      })() : ``}`;
    })}</div>` : ``}`}`}`}`}`}</div>` : ``}`} ${render ? `${innerModules.length > 0 && !isListJob ? `${validate_component(Tabs, "Tabs").$$render(
      $$result,
      {
        class: "mx-auto " + (wideResults ? "" : "max-w-7xl"),
        selected
      },
      {
        selected: ($$value) => {
          selected = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Tab, "Tab").$$render($$result, { value: "graph" }, {}, {
            default: () => {
              return `<span class="font-semibold text-md" data-svelte-h="svelte-1cy6a0b">Graph</span>`;
            }
          })} ${validate_component(Tab, "Tab").$$render($$result, { value: "sequence" }, {}, {
            default: () => {
              return `<span class="font-semibold" data-svelte-h="svelte-p3gq42">Details</span>`;
            }
          })}`;
        }
      }
    )}` : ``}` : ``} <div class="${escape(selected != "sequence" ? "hidden" : "", true) + " max-w-7xl mx-auto"}">${isListJob ? (() => {
      let sliceFrom = $localDurationStatuses[flowJobIds?.moduleId ?? ""]?.iteration_from ?? 0, forloop_selected = $localModuleStates?.[flowJobIds?.moduleId ?? ""]?.selectedForloop;
      return `  <h3 class="text-md leading-6 font-bold text-tertiary border-b mb-4">Subflows (${escape(flowJobIds?.flowJobs.length)})</h3> <div class="overflow-auto max-h-1/2">${each(flowJobIds?.flowJobs ?? [], (loopJobId, j) => {
        return `${render ? `${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: forloop_selected === loopJobId ? "contained" : "border",
            color: flowJobIds?.flowJobsSuccess?.[j] === false ? "red" : forloop_selected === loopJobId ? "dark" : "light",
            btnClasses: "w-full flex justify-start",
            endIcon: {
              icon: Chevron_down,
              classes: forloop_selected == loopJobId ? "!rotate-180" : ""
            }
          },
          {},
          {
            default: () => {
              return `<span class="truncate font-mono">#${escape(j + 1)}: ${escape(loopJobId)}</span> `;
            }
          }
        )}` : ``} ${j >= sliceFrom || forloop_selected == loopJobId ? ` <div class="${["border p-6", forloop_selected != loopJobId ? "hidden" : ""].join(" ").trim()}">${validate_component(FlowStatusViewerInner, "svelte:self").$$render(
          $$result,
          {
            globalRefreshes,
            childFlow,
            job: storedListJobs[j],
            globalModuleStates: [localModuleStates, ...globalModuleStates],
            globalDurationStatuses: [localDurationStatuses, ...globalDurationStatuses],
            render: forloop_selected == loopJobId && selected == "sequence" && render,
            reducedPolling: flowJobIds?.flowJobs.length && flowJobIds?.flowJobs.length > 20,
            workspaceId,
            jobId: loopJobId,
            refresh: recursiveRefresh[loopJobId]
          },
          {
            refresh: ($$value) => {
              recursiveRefresh[loopJobId] = $$value;
              $$settled = false;
            }
          },
          {}
        )} </div>` : ``}`;
      })}</div>`;
    })() : `${innerModules.length > 0 ? `<ul class="w-full"><h3 class="text-md leading-6 font-bold text-primary border-b mb-4 py-2" data-svelte-h="svelte-8ft3sn">Step-by-step</h3> ${each(innerModules, (mod, i) => {
      return `${render ? `<div class="line w-8 h-10 svelte-vajpdb"></div> <h3 class="text-tertiary mb-2 w-full">${job?.raw_flow?.modules && i < job?.raw_flow?.modules.length ? `Step
									<span class="font-medium text-primary">${escape(i + 1)}</span>
									out of
									<span class="font-medium text-primary">${escape(job?.raw_flow?.modules.length)}</span> ${job.raw_flow?.modules[i]?.summary ? `: <span class="font-medium text-primary">${escape(job.raw_flow?.modules[i]?.summary ?? "")} </span>` : ``}` : `<h3 data-svelte-h="svelte-vmk5jy">Failure module</h3>`}</h3> <div class="line w-8 h-10 svelte-vajpdb"></div>` : ``} <li class="w-full border p-6 space-y-2 bg-blue-50/50 dark:bg-frost-900/50">${render && Array.isArray(mod.failed_retries) ? `${each(mod.failed_retries, (failedRetry, j) => {
        return `${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: retry_selected === failedRetry ? "contained" : "border",
            color: "red",
            btnClasses: "w-full flex justify-start",
            endIcon: {
              icon: Chevron_down,
              classes: retry_selected == failedRetry ? "!rotate-180" : ""
            }
          },
          {},
          {
            default: () => {
              return `<span class="truncate font-mono"># Attempt ${escape(j + 1)}: ${escape(failedRetry)}</span> `;
            }
          }
        )}  <div class="${["border p-6", retry_selected != failedRetry ? "hidden" : ""].join(" ").trim()}">${validate_component(FlowStatusViewerInner, "svelte:self").$$render(
          $$result,
          {
            globalRefreshes,
            childFlow,
            globalModuleStates: [localModuleStates, ...globalModuleStates],
            globalDurationStatuses: [localDurationStatuses, ...globalDurationStatuses],
            render: failedRetry == retry_selected,
            reducedPolling: false,
            workspaceId,
            jobId: failedRetry,
            refresh: recursiveRefresh[failedRetry]
          },
          {
            refresh: ($$value) => {
              recursiveRefresh[failedRetry] = $$value;
              $$settled = false;
            }
          },
          {}
        )} </div>`;
      })}` : ``} ${["InProgress", "Success", "Failure"].includes(mod.type) ? `${job.raw_flow?.modules[i]?.value.type == "flow" ? `${validate_component(FlowStatusViewerInner, "svelte:self").$$render(
        $$result,
        {
          globalRefreshes,
          globalModuleStates: [],
          globalDurationStatuses: [],
          render: selected == "sequence" && render,
          workspaceId,
          jobId: mod.job,
          childFlow: true,
          refresh: recursiveRefresh[mod.job ?? ""]
        },
        {
          refresh: ($$value) => {
            recursiveRefresh[mod.job ?? ""] = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `${mod.flow_jobs?.length == 0 && mod.job == "00000000-0000-0000-0000-000000000000" ? `<div class="text-secondary" data-svelte-h="svelte-1ms60mv">no subflow (empty loop?)</div>` : `${validate_component(FlowStatusViewerInner, "svelte:self").$$render(
        $$result,
        {
          globalRefreshes,
          childFlow,
          globalModuleStates: [localModuleStates, ...globalModuleStates],
          globalDurationStatuses: [localDurationStatuses, ...globalDurationStatuses],
          render: selected == "sequence" && render,
          workspaceId,
          jobId: mod.job,
          innerModule: mod.flow_jobs ? job.raw_flow?.modules[i]?.value : void 0,
          flowJobIds: mod.flow_jobs ? {
            moduleId: mod.id,
            flowJobs: mod.flow_jobs,
            flowJobsSuccess: mod.flow_jobs_success,
            length: mod.iterator?.itered?.length ?? mod.flow_jobs.length
          } : void 0,
          refresh: recursiveRefresh[mod.job ?? ""]
        },
        {
          refresh: ($$value) => {
            recursiveRefresh[mod.job ?? ""] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`}`}` : `${validate_component(ModuleStatus, "ModuleStatus").$$render(
        $$result,
        {
          type: mod.type,
          scheduled_for: $localModuleStates?.[mod.id ?? ""]?.scheduled_for
        },
        {},
        {}
      )}`} </li>`;
    })}</ul>` : ``}`}</div></div> ${render ? `${job.raw_flow && !isListJob ? `<div class="${escape(selected != "graph" ? "hidden" : "", true) + " grow mt-4"}"><div class="grid grid-cols-3 border h-full"><div class="col-span-2 bg-surface-secondary"><div class="flex flex-col">${each(Object.values($retryStatus), (count) => {
      return `${count ? `<span class="text-sm">Retry in progress, # of failed attempts: ${escape(count)} </span>` : ``}`;
    })} ${each(Object.values($suspendStatus), (count) => {
      return `${count.nb ? `<span class="text-sm">Flow suspended, waiting for ${escape(count.nb)} events
									</span>` : ``}`;
    })}</div> ${validate_component(FlowGraph, "FlowGraph").$$render(
      $$result,
      {
        download: true,
        success: jobId != void 0 && isSuccess(job?.["success"]),
        flowModuleStates: $localModuleStates,
        modules: job.raw_flow?.modules ?? [],
        failureModule: job.raw_flow?.failure_module
      },
      {},
      {}
    )}</div> <div class="border-l border-tertiary-inverse pt-1 overflow-auto min-h-[700px] flex flex-col z-0 h-full">${validate_component(Tabs, "Tabs").$$render(
      $$result,
      { selected: rightColumnSelect },
      {
        selected: ($$value) => {
          rightColumnSelect = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Tab, "Tab").$$render($$result, { value: "timeline" }, {}, {
            default: () => {
              return `<span class="font-semibold text-md" data-svelte-h="svelte-qdy0j8">Timeline</span>`;
            }
          })} ${validate_component(Tab, "Tab").$$render($$result, { value: "node_status" }, {}, {
            default: () => {
              return `<span class="font-semibold" data-svelte-h="svelte-vkkdiq">Node status</span>`;
            }
          })} ${validate_component(Tab, "Tab").$$render($$result, { value: "node_definition" }, {}, {
            default: () => {
              return `<span class="font-semibold" data-svelte-h="svelte-1uz819f">Node definition</span>`;
            }
          })} ${Object.keys(job?.flow_status?.user_states ?? {}).length > 0 ? `${validate_component(Tab, "Tab").$$render($$result, { value: "user_states" }, {}, {
            default: () => {
              return `<span class="font-semibold" data-svelte-h="svelte-1lc3vyt">User States</span>`;
            }
          })}` : ``}`;
        }
      }
    )} ${rightColumnSelect == "timeline" ? `${validate_component(FlowTimeline, "FlowTimeline").$$render(
      $$result,
      {
        selfWaitTime: job?.self_wait_time_ms,
        aggregateWaitTime: job?.aggregate_wait_time_ms,
        flowDone: job?.["success"] != void 0,
        flowModules: dfs(job.raw_flow?.modules ?? [], (x) => x.id),
        durationStatuses: localDurationStatuses,
        this: flowTimeline
      },
      {
        this: ($$value) => {
          flowTimeline = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${rightColumnSelect == "node_status" ? `<div class="pt-2 max-h-[80vh] grow flex flex-col">${selectedNode ? (() => {
      let node = $localModuleStates[selectedNode];
      return ` ${selectedNode == "end" ? `${validate_component(FlowJobResult, "FlowJobResult").$$render(
        $$result,
        {
          workspaceId: job?.workspace_id,
          jobId: job?.id,
          filename: job.id,
          loading: job["running"],
          noBorder: true,
          col: true,
          result: job["result"],
          logs: job.logs ?? "",
          durationStates: localDurationStatuses
        },
        {},
        {}
      )}` : `${selectedNode == "start" ? `${job.args ? `<div class="p-2">${validate_component(JobArgs, "JobArgs").$$render(
        $$result,
        {
          id: job.id,
          workspace: job.workspace_id ?? $workspaceStore ?? "no_w",
          args: job.args
        },
        {},
        {}
      )}</div>` : `<p class="p-2 text-secondary" data-svelte-h="svelte-1nodrpz">No arguments</p>`}` : `${node ? `${node.flow_jobs_results ? `<span class="pl-1 text-tertiary" data-svelte-h="svelte-lj6c8v">Result of step as collection of all subflows</span> <div class="overflow-auto max-h-[200px] p-2">${validate_component(DisplayResult, "DisplayResult").$$render(
        $$result,
        {
          workspaceId: job?.workspace_id,
          result: node.flow_jobs_results,
          nodeId: selectedNode,
          jobId: job?.id
        },
        {},
        {}
      )}</div> <span class="pl-1 text-tertiary text-lg pt-4" data-svelte-h="svelte-2wy2bg">Selected subflow</span>` : ``} <div class="px-2 flex gap-2 min-w-0 w-full">${validate_component(ModuleStatus, "ModuleStatus").$$render(
        $$result,
        {
          type: node.type,
          scheduled_for: node.scheduled_for
        },
        {},
        {}
      )} ${node.duration_ms ? `${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Hourglass, "Hourglass").$$render($$result, { class: "mr-2", size: 10 }, {}, {})} ${escape(msToSec(node.duration_ms))} s`;
        }
      })}` : ``} ${node.job_id ? `<div class="grow w-full flex flex-row-reverse"><a class="text-right text-xs" rel="noreferrer" target="_blank" href="${escape(base, true) + "/run/" + escape(node.job_id ?? "", true) + "?workspace=" + escape(job?.workspace_id, true)}">${escape(truncateRev(node.job_id ?? "", 10))}</a></div>` : ``}</div> ${!node.isListJob ? `<div class="px-1 py-1">${validate_component(JobArgs, "JobArgs").$$render(
        $$result,
        {
          id: node.job_id,
          workspace: job.workspace_id ?? $workspaceStore ?? "no_w",
          args: node.args
        },
        {},
        {}
      )}</div>` : ``} ${validate_component(FlowJobResult, "FlowJobResult").$$render(
        $$result,
        {
          workspaceId: job?.workspace_id,
          jobId: node.job_id,
          noBorder: true,
          loading: node.type != "Success" && node.type != "Failure",
          refreshLog: node.type == "InProgress",
          col: true,
          result: node.result,
          logs: node.logs,
          durationStates: localDurationStatuses
        },
        {},
        {}
      )}` : `<p class="p-2 text-tertiary italic" data-svelte-h="svelte-1huf0nk">The execution of this node has no information attached to it. The job likely
											did not run yet</p>`}`}`}`;
    })() : `<p class="p-2 text-tertiary italic" data-svelte-h="svelte-71r62y">Select a node to see its details here</p>`}</div>` : `${rightColumnSelect == "node_definition" ? `${validate_component(FlowGraphViewerStep, "FlowGraphViewerStep").$$render($$result, { stepDetail }, {}, {})}` : `${rightColumnSelect == "user_states" ? `<div class="p-2">${validate_component(JobArgs, "JobArgs").$$render(
      $$result,
      {
        argLabel: "Key",
        args: job?.flow_status?.user_states ?? {}
      },
      {},
      {}
    )}</div>` : ``}`}`}`}</div></div></div>` : ``}` : ``}` : `${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})}`}`}`;
  } while (!$$settled);
  $$unsubscribe_localDurationStatuses();
  $$unsubscribe_localModuleStates();
  $$unsubscribe_flowStateStore();
  $$unsubscribe_workspaceStore();
  $$unsubscribe_suspendStatus();
  $$unsubscribe_retryStatus();
  return $$rendered;
});
const FlowStatusViewer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $suspendStatus, $$unsubscribe_suspendStatus;
  let $retryStatus, $$unsubscribe_retryStatus;
  let $$unsubscribe_workspaceStore;
  let $$unsubscribe_userStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => value);
  let { jobId } = $$props;
  let { workspaceId = void 0 } = $$props;
  let { flowStateStore = writable({}) } = $$props;
  let { selectedJobStep = void 0 } = $$props;
  let { isOwner: isOwner$1 = false } = $$props;
  let { wideResults = false } = $$props;
  let lastJobId = jobId;
  let retryStatus = writable({});
  $$unsubscribe_retryStatus = subscribe(retryStatus, (value) => $retryStatus = value);
  let suspendStatus = writable({});
  $$unsubscribe_suspendStatus = subscribe(suspendStatus, (value) => $suspendStatus = value);
  setContext("FlowStatusViewer", {
    flowStateStore,
    suspendStatus,
    retryStatus
  });
  async function updateJobId() {
    if (jobId !== lastJobId) {
      lastJobId = jobId;
      set_store_value(retryStatus, $retryStatus = {}, $retryStatus);
      set_store_value(suspendStatus, $suspendStatus = {}, $suspendStatus);
    }
  }
  createEventDispatcher();
  if ($$props.jobId === void 0 && $$bindings.jobId && jobId !== void 0) $$bindings.jobId(jobId);
  if ($$props.workspaceId === void 0 && $$bindings.workspaceId && workspaceId !== void 0) $$bindings.workspaceId(workspaceId);
  if ($$props.flowStateStore === void 0 && $$bindings.flowStateStore && flowStateStore !== void 0) $$bindings.flowStateStore(flowStateStore);
  if ($$props.selectedJobStep === void 0 && $$bindings.selectedJobStep && selectedJobStep !== void 0) $$bindings.selectedJobStep(selectedJobStep);
  if ($$props.isOwner === void 0 && $$bindings.isOwner && isOwner$1 !== void 0) $$bindings.isOwner(isOwner$1);
  if ($$props.wideResults === void 0 && $$bindings.wideResults && wideResults !== void 0) $$bindings.wideResults(wideResults);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    jobId && updateJobId();
    $$rendered = `${validate_component(FlowStatusViewerInner, "FlowStatusViewerInner").$$render(
      $$result,
      {
        globalDurationStatuses: [],
        globalModuleStates: [],
        jobId,
        workspaceId,
        isOwner: isOwner$1,
        wideResults,
        selectedNode: selectedJobStep
      },
      {
        selectedNode: ($$value) => {
          selectedJobStep = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_suspendStatus();
  $$unsubscribe_retryStatus();
  $$unsubscribe_workspaceStore();
  $$unsubscribe_userStore();
  return $$rendered;
});
export {
  DurationMs as D,
  FlowStatusViewer as F,
  JobStatus as J,
  WaitTimeWarning as W,
  dfs as d
};
