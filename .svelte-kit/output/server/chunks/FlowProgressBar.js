import { c as create_ssr_component, b as add_attribute, e as escape, f as each, n as noop, s as subscribe, k as identity, v as validate_component } from "./ssr.js";
import { t as tweened } from "./tweened.js";
let duration = 200;
const ProgressBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let finished;
  let $percent, $$unsubscribe_percent = noop, $$subscribe_percent = () => ($$unsubscribe_percent(), $$unsubscribe_percent = subscribe(percent, ($$value) => $percent = $$value), percent);
  function getTween(initialValue = 0, duration2 = 200) {
    return tweened(initialValue, { duration: duration2, easing: identity });
  }
  let { error = void 0 } = $$props;
  let { index } = $$props;
  let { subIndex } = $$props;
  let { subLength } = $$props;
  let { nextInProgress = false } = $$props;
  let { length } = $$props;
  let percent = getTween(0, duration);
  $$subscribe_percent();
  function resetP() {
    $$subscribe_percent(percent = getTween(0, duration));
  }
  function getPercent(partIndex, _pct) {
    if (!length) {
      return 0;
    }
    const res = Math.min(($percent - partIndex / length * 100) * length, 100);
    return res;
  }
  if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  if ($$props.subIndex === void 0 && $$bindings.subIndex && subIndex !== void 0) $$bindings.subIndex(subIndex);
  if ($$props.subLength === void 0 && $$bindings.subLength && subLength !== void 0) $$bindings.subLength(subLength);
  if ($$props.nextInProgress === void 0 && $$bindings.nextInProgress && nextInProgress !== void 0) $$bindings.nextInProgress(nextInProgress);
  if ($$props.length === void 0 && $$bindings.length && length !== void 0) $$bindings.length(length);
  if ($$props.resetP === void 0 && $$bindings.resetP && resetP !== void 0) $$bindings.resetP(resetP);
  {
    percent.set((length ? index / length + (subIndex && subLength ? subIndex / (subLength ?? 1) / length : 0) : 0) * 100);
  }
  finished = index == length;
  $$unsubscribe_percent();
  return `<div${add_attribute("class", $$props.class, 0)}><div class="${"flex justify-between items-end font-medium mb-1 " + escape(
    error != void 0 ? "text-red-700 dark:text-red-200" : "text-blue-700 dark:text-blue-200",
    true
  )}"><span class="text-base">${escape(error != void 0 ? "Error occured" : finished ? "Done" : `Step ${index + 1}${subIndex !== void 0 ? `.${subIndex + 1}` : ""}`)}</span> <span class="text-sm">${escape($percent.toFixed(0))}%</span></div>   <div class="flex w-full bg-gray-200 rounded-full h-4 overflow-hidden">${each(new Array(length), (_, partIndex) => {
    return `<div class="${"h-full relative border-white " + escape(partIndex === 0 ? "" : "border-l", true) + " w-full"}">${partIndex == index && nextInProgress ? `<div class="absolute left-0 bottom-0 h-full bg-blue-400/50 animate-pulse" style="width: 100%"></div>` : ``} ${partIndex < index - 1 ? `<div class="absolute left-0 bottom-0 h-full w-full bg-blue-400"></div>` : `${partIndex == index - 1 || partIndex == index && subIndex !== void 0 || error == partIndex ? `<div class="${"absolute left-0 bottom-0 h-full " + escape(error == partIndex ? "bg-red-400" : "bg-blue-400", true)}" style="${"width: " + escape(getPercent(partIndex), true) + "%"}"></div>` : ``}`} </div>`;
  })}</div></div>`;
});
const FlowProgressBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { job = void 0 } = $$props;
  let error = void 0;
  let index = 0;
  let subIndex = void 0;
  let subLength = void 0;
  let length = 1;
  let nextInProgress = false;
  function updateJobProgress(job2) {
    const modules = job2?.flow_status?.modules;
    if (!modules?.length) {
      return;
    }
    let subStepIndex = void 0;
    let subStepLength = void 0;
    let newError = void 0;
    let newNextInProgress = false;
    let maxDone = job2?.flow_status?.step ?? 0;
    if (modules.length > maxDone) {
      const nextModule = modules[maxDone];
      if (nextModule.type === "InProgress") {
        newNextInProgress = true;
      }
    }
    let module = modules[maxDone];
    if (module) {
      if (module.type === "Failure" || module.type === "Success" && job2["success"] === false) {
        newError = maxDone;
        maxDone = maxDone + 1;
      }
    }
    if (module?.iterator) {
      const stepIndex = module.iterator.index || 0;
      const stepLength = module.iterator.itered?.length || 0;
      if (module.iterator.index != void 0) {
        subStepIndex = stepIndex;
        subStepLength = stepLength;
      }
    } else if (module?.branchall) {
      subStepIndex = module.branchall.branch;
      subStepLength = module.branchall.len;
    }
    error = newError;
    subLength = subStepLength ? Math.max(subStepLength, 1) : void 0;
    subIndex = subStepIndex;
    length = Math.max(modules.length, 1);
    index = maxDone;
    nextInProgress = newNextInProgress;
  }
  let resetP;
  function reset() {
    resetP?.();
    error = void 0;
    subIndex = void 0;
    subLength = void 0;
    length = 1;
    index = 0;
  }
  if ($$props.job === void 0 && $$bindings.job && job !== void 0) $$bindings.job(job);
  if ($$props.reset === void 0 && $$bindings.reset && reset !== void 0) $$bindings.reset(reset);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (job) updateJobProgress(job);
    }
    $$rendered = `${validate_component(ProgressBar, "ProgressBar").$$render(
      $$result,
      {
        length,
        index,
        nextInProgress,
        subLength,
        subIndex,
        error,
        class: $$props.class,
        resetP
      },
      {
        resetP: ($$value) => {
          resetP = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  FlowProgressBar as F
};
