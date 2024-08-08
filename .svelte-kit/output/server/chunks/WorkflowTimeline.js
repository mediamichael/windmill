import { c as create_ssr_component, o as onDestroy, e as escape, v as validate_component, f as each } from "./ssr.js";
import { b as base } from "./base.js";
import { j as displayDate, m as msToSec } from "./toast.js";
import { g as getDbClockNow } from "./FlowGraphViewerStep.js";
import { a as TimelineBar } from "./TimelineBar.js";
import { L as Loader_2 } from "./loader-2.js";
import { E as External_link } from "./Popover.js";
const WorkflowTimeline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let min;
  let max;
  let total;
  let { flow_status } = $$props;
  let { flowDone = false } = $$props;
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
  if ($$props.flow_status === void 0 && $$bindings.flow_status && flow_status !== void 0) $$bindings.flow_status(flow_status);
  if ($$props.flowDone === void 0 && $$bindings.flowDone && flowDone !== void 0) $$bindings.flowDone(flowDone);
  min = Object.values(flow_status).reduce(
    (a, b) => Math.min(a, b.scheduled_for ? new Date(b.scheduled_for).getTime() : Infinity),
    Infinity
  );
  max = flowDone ? Object.values(flow_status).reduce(
    (a, b) => Math.max(a, b.started_at ? new Date(b.started_at).getTime() + (b.duration_ms ?? 0) : 0),
    0
  ) : void 0;
  total = flowDone && max ? max - min : now - min;
  return `${flow_status ? `<div class="divide-y border-b"><div class="px-2 py-2 grid grid-cols-12 w-full"><div></div> <div class="col-span-11 pt-1 px-2 flex text-2xs text-secondary justify-between"><div>${escape(min ? displayDate(new Date(min), true) : "")}</div>${max && min ? `<div class="hidden lg:block">${escape(msToSec(max - min))}s</div> ` : ``}<div class="flex gap-1 items-center font-mono">${escape(max ? displayDate(new Date(max), true) : "")}${!max && min ? `${now ? ` ${escape(msToSec(now - min, 3))}s
						` : ``}${validate_component(Loader_2, "Loader2").$$render($$result, { size: 14, class: "animate-spin" }, {}, {})}` : ``}</div></div></div> <div class="flex flex-row-reverse items-center text-sm text-secondary p-2" data-svelte-h="svelte-12a2qxr"><div class="flex gap-4 items-center text-2xs"><div class="flex gap-2 items-center"><div>Waiting for executor</div> <div class="h-4 w-4 bg-gray-500"></div></div> <div class="flex gap-2 items-center"><div>Execution</div> <div class="h-4 w-4 bg-blue-500/90"></div></div></div></div> ${each(Object.entries(flow_status), ([k, v]) => {
    return `<div class="overflow-auto max-h-60 shadow-inner dark:shadow-gray-700 relative"><div class="px-2 py-2 text-xs grid grid-cols-6 w-full gap-1"><a target="_blank" class="inline-flex gap-2 items-baseline" href="${escape(base, true) + "/run/" + escape(k, true)}">${escape(v.name ?? k)} ${validate_component(External_link, "ExternalLink").$$render($$result, { size: 12 }, {}, {})}</a> <div class="col-span-5 flex min-h-6 w-full">${min && total ? (() => {
      let scheduledFor = v?.scheduled_for ? new Date(v?.scheduled_for).getTime() : void 0, startedAt = v?.started_at ? new Date(v?.started_at).getTime() : void 0, waitingLen = scheduledFor ? startedAt ? startedAt - scheduledFor : now - scheduledFor : 0;
      return `   <div class="flex w-full">${validate_component(TimelineBar, "TimelineBar").$$render(
        $$result,
        {
          position: "left",
          id: k,
          total,
          min,
          gray: true,
          started_at: scheduledFor,
          len: waitingLen < 100 ? 0 : waitingLen - 100,
          running: startedAt == void 0
        },
        {},
        {}
      )} ${startedAt ? `${validate_component(TimelineBar, "TimelineBar").$$render(
        $$result,
        {
          position: waitingLen < 100 ? "center" : "right",
          id: k,
          total,
          min,
          concat: true,
          started_at: startedAt,
          len: v.duration_ms ?? now - startedAt,
          running: v.duration_ms == void 0
        },
        {},
        {}
      )}` : ``}</div> `;
    })() : ``}</div></div> </div>`;
  })}</div>` : `${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})}`}`;
});
export {
  WorkflowTimeline as W
};
