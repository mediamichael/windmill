import { c as create_ssr_component, s as subscribe, d as createEventDispatcher, v as validate_component, e as escape, f as each, b as add_attribute } from "./ssr.js";
import { b as base } from "./base.js";
import { C as ConcurrencyGroupsService } from "./services.gen.js";
import { T as TestJobLoader, L as LogViewer, D as DisplayResult } from "./TimelineBar.js";
import { J as JobArgs } from "./JobArgs.js";
import "./index2.js";
import { P as Popover } from "./Popover.js";
import { B as Badge } from "./Badge.js";
import { B as Button, t as truncateRev } from "./toast.js";
/* empty css                                     */
import "./common.js";
import { S as Skeleton } from "./Skeleton.js";
import { T as Tabs, a as Tab } from "./Tabs.js";
import { f as forLater, H as HighlightCode } from "./FlowGraphViewerStep.js";
import { F as FlowProgressBar } from "./FlowProgressBar.js";
import { D as DurationMs, F as FlowStatusViewer } from "./FlowStatusViewer.js";
import { w as workspaceStore } from "./stores2.js";
import { W as WorkflowTimeline } from "./WorkflowTimeline.js";
import { L as List_filter } from "./list-filter.js";
function asWorkflowStatus(x) {
  return x;
}
const JobPreview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { id } = $$props;
  let { blankLink = false } = $$props;
  let { workspace } = $$props;
  let job = void 0;
  let watchJob = void 0;
  let getLogs = void 0;
  let result;
  let currentJob = void 0;
  let lastJobId = void 0;
  let concurrencyKey = void 0;
  async function getConcurrencyKey(job2) {
    lastJobId = job2.id;
    concurrencyKey = await ConcurrencyGroupsService.getConcurrencyKey({ id: job2.id });
  }
  let viewTab = "result";
  createEventDispatcher();
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.blankLink === void 0 && $$bindings.blankLink && blankLink !== void 0) $$bindings.blankLink(blankLink);
  if ($$props.workspace === void 0 && $$bindings.workspace && workspace !== void 0) $$bindings.workspace(workspace);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (currentJob?.id == id) {
        job = currentJob;
      }
    }
    id && watchJob && watchJob(id);
    job?.logs == void 0 && job && viewTab == "logs" && getLogs?.();
    job?.id && lastJobId !== job.id && getConcurrencyKey(job);
    $$rendered = `${validate_component(TestJobLoader, "TestJobLoader").$$render(
      $$result,
      {
        lazyLogs: true,
        workspaceOverride: workspace,
        job: currentJob,
        getLogs,
        watchJob
      },
      {
        job: ($$value) => {
          currentJob = $$value;
          $$settled = false;
        },
        getLogs: ($$value) => {
          getLogs = $$value;
          $$settled = false;
        },
        watchJob: ($$value) => {
          watchJob = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="p-4 flex flex-col gap-2 items-start h-full">${job ? `<div class="flex gap-2 flex-wrap">${job?.["priority"] ? `${validate_component(Badge, "Badge").$$render($$result, { color: "red" }, {}, {
      default: () => {
        return `priority: ${escape(job?.["priority"])}`;
      }
    })}` : ``} ${job && "duration_ms" in job && job.duration_ms != void 0 ? `${validate_component(DurationMs, "DurationMs").$$render(
      $$result,
      {
        duration_ms: job.duration_ms,
        self_wait_time_ms: job?.self_wait_time_ms,
        aggregate_wait_time_ms: job?.aggregate_wait_time_ms
      },
      {},
      {}
    )}` : ``} ${job?.["mem_peak"] ? `${validate_component(Badge, "Badge").$$render($$result, { large: true }, {}, {
      default: () => {
        return `Mem: ${escape(job?.["mem_peak"] ? `${(job["mem_peak"] / 1024).toPrecision(4)}MB` : "N/A")}`;
      }
    })}` : ``} ${workspace && $workspaceStore != workspace ? `${validate_component(Badge, "Badge").$$render($$result, { large: true }, {}, {
      default: () => {
        return `Workspace: ${escape(workspace)}`;
      }
    })}` : ``} ${job.tag ? `${validate_component(Badge, "Badge").$$render($$result, { large: true }, {}, {
      default: () => {
        return `Tag: ${escape(job.tag)}`;
      }
    })}` : ``} ${job?.["labels"] && Array.isArray(job?.["labels"]) && job?.["labels"].length > 0 ? `${each(job?.["labels"], (label) => {
      return `${validate_component(Badge, "Badge").$$render($$result, { baseClass: "text-2xs" }, {}, {
        default: () => {
          return `Label: ${escape(label)}`;
        }
      })}`;
    })}` : ``} ${concurrencyKey ? `${validate_component(Popover, "Popover").$$render($$result, { notClickable: true }, {}, {
      text: () => {
        return `This jobs has concurrency limits enabled with the key:
						${validate_component(Button, "Button").$$render(
          $$result,
          {
            class: "inline-text",
            size: "xs2",
            color: "light"
          },
          {},
          {
            default: () => {
              return `${escape(concurrencyKey)} ${validate_component(List_filter, "ListFilter").$$render($$result, { class: "inline-block", size: 10 }, {}, {})}`;
            }
          }
        )} `;
      },
      default: () => {
        return `${validate_component(Badge, "Badge").$$render($$result, { large: true }, {}, {
          default: () => {
            return `Concurrency: ${escape(truncateRev(concurrencyKey, 20))}`;
          }
        })}`;
      }
    })}` : ``}</div> <a href="${escape(base, true) + "/run/" + escape(job?.id, true) + "?workspace=" + escape(job?.workspace_id, true)}" class="flex flex-row gap-1 items-center"${add_attribute("target", blankLink ? "_blank" : void 0, 0)}><span class="font-semibold text-sm leading-6" data-svelte-h="svelte-1ffau0c">ID:</span> <span class="text-sm">${escape(job?.id ?? "")}</span></a> <span class="font-semibold text-xs leading-6" data-svelte-h="svelte-1fav7f2">Arguments</span> <div class="w-full">${validate_component(JobArgs, "JobArgs").$$render(
      $$result,
      {
        id: job?.id,
        workspace: job?.workspace_id ?? $workspaceStore ?? "no_w",
        args: job?.args
      },
      {},
      {}
    )}</div> ${job?.type === "CompletedJob" ? `<span class="font-semibold text-xs leading-6" data-svelte-h="svelte-17wo16c">Results</span>` : ``} ${job && "scheduled_for" in job && !job.running && job.scheduled_for && forLater(job.scheduled_for) ? `<div class="text-sm font-semibold text-tertiary mb-1"><div data-svelte-h="svelte-5bw0rb">Job is scheduled for</div> <div>${escape(new Date(job?.["scheduled_for"]).toLocaleString())}</div></div>` : ``} <div class="w-full rounded-md min-h-full">${job?.is_flow_step == false && job?.flow_status && (job?.job_kind == "preview" || job?.job_kind == "script") && !(typeof job.flow_status == "object" && "_metadata" in job.flow_status) ? `${validate_component(WorkflowTimeline, "WorkflowTimeline").$$render(
      $$result,
      {
        flow_status: asWorkflowStatus(job.flow_status),
        flowDone: job.type == "CompletedJob"
      },
      {},
      {}
    )}` : ``} ${job?.type === "CompletedJob" ? `${validate_component(Tabs, "Tabs").$$render(
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
          return `${validate_component(Tab, "Tab").$$render($$result, { size: "xs", value: "result" }, {}, {
            default: () => {
              return `Result`;
            }
          })} ${validate_component(Tab, "Tab").$$render($$result, { size: "xs", value: "logs" }, {}, {
            default: () => {
              return `Logs`;
            }
          })} ${job?.job_kind == "preview" ? `${validate_component(Tab, "Tab").$$render($$result, { size: "xs", value: "code" }, {}, {
            default: () => {
              return `Code`;
            }
          })}` : ``}`;
        }
      }
    )} ${validate_component(Skeleton, "Skeleton").$$render($$result, { loading: !job, layout: [[5]] }, {}, {})} ${job ? `${viewTab == "result" && (job?.job_kind == "flow" || job?.job_kind == "flowpreview") ? `<div class="flex flex-col gap-2"><div class="w-full mt-10 mb-20">${validate_component(FlowStatusViewer, "FlowStatusViewer").$$render(
      $$result,
      {
        jobId: job.id,
        workspaceId: job.workspace_id
      },
      {},
      {}
    )}</div></div>` : `<div class="flex flex-col border rounded-md p-2 mt-2 h-full overflow-auto">${viewTab == "logs" ? `<div class="w-full">${validate_component(LogViewer, "LogViewer").$$render(
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
    )}</div>` : `${job ? `No code is available` : `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[5]] }, {}, {})}`}`}` : `${job !== void 0 && "result" in job && job.result !== void 0 ? `${validate_component(DisplayResult, "DisplayResult").$$render(
      $$result,
      {
        workspaceId: job?.workspace_id,
        jobId: job?.id,
        result,
        disableExpand: true
      },
      {},
      {}
    )}` : `${job ? `No output is available yet` : ``}`}`}`}</div>`}` : ``}` : `${(job && `running` in job ? job.running : false) ? `${job?.job_kind == "flow" || job?.job_kind == "flowpreview" ? `<div class="flex flex-col gap-2 w-full">${validate_component(FlowProgressBar, "FlowProgressBar").$$render($$result, { job, class: "py-4" }, {}, {})} ${validate_component(FlowStatusViewer, "FlowStatusViewer").$$render(
      $$result,
      {
        jobId: job.id,
        workspaceId: job.workspace_id
      },
      {},
      {}
    )}</div>` : `<div class="text-sm font-semibold text-tertiary mb-1" data-svelte-h="svelte-1s6erwv">Job is still running</div> ${validate_component(LogViewer, "LogViewer").$$render(
      $$result,
      {
        jobId: job?.id,
        duration: job?.["duration_ms"],
        mem: job?.["mem_peak"],
        content: job?.logs,
        isLoading: true,
        tag: job?.tag
      },
      {},
      {}
    )}`}` : ``}`}</div>` : ``}</div>`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
export {
  JobPreview as J
};
