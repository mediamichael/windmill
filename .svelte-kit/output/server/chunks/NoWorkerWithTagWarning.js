import { c as create_ssr_component, o as onDestroy, v as validate_component, e as escape } from "./ssr.js";
import { b as WorkerService } from "./services.gen.js";
import { P as Popover } from "./Popover.js";
import { A as Alert_triangle } from "./alert-triangle.js";
const NoWorkerWithTagWarning = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tag } = $$props;
  let noWorkerWithTag = false;
  let timeout = void 0;
  async function lookForTag() {
    try {
      const existsWorkerWithTag = await WorkerService.existsWorkerWithTag({ tag });
      noWorkerWithTag = !existsWorkerWithTag;
      if (noWorkerWithTag) {
        timeout = setTimeout(
          () => {
            lookForTag();
          },
          1e3
        );
      }
    } catch (err) {
      console.error(err);
    }
  }
  lookForTag();
  onDestroy(() => {
    if (timeout) {
      clearTimeout(timeout);
    }
  });
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
  return `${noWorkerWithTag ? `${validate_component(Popover, "Popover").$$render($$result, { notClickable: true, placement: "top" }, {}, {
    text: () => {
      return `No worker with tag <b>${escape(tag)}</b> is currently running.
		`;
    },
    default: () => {
      return `${validate_component(Alert_triangle, "AlertTriangle").$$render($$result, { size: 16, class: "text-yellow-500" }, {}, {})}`;
    }
  })}` : ``}`;
});
export {
  NoWorkerWithTagWarning as N
};
