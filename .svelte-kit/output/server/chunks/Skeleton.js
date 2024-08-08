import { c as create_ssr_component, e as escape, f as each, v as validate_component } from "./ssr.js";
const HEIGHT_UNIT = 16;
const SkeletonElement = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { element } = $$props;
  if ($$props.element === void 0 && $$bindings.element && element !== void 0) $$bindings.element(element);
  return `<div class="animate-skeleton dark:bg-frost-900/50 [animation-delay:1000ms]" style="${"height: " + escape(element.h * HEIGHT_UNIT, true) + "px; width: " + escape(element.w, true) + "%; min-width: " + escape(element.minW, true) + "px;"}"></div>`;
});
const Skeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { layout } = $$props;
  let { loading = true } = $$props;
  let { overlay = false } = $$props;
  let { mounted = false } = $$props;
  if ($$props.layout === void 0 && $$bindings.layout && layout !== void 0) $$bindings.layout(layout);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
  if ($$props.overlay === void 0 && $$bindings.overlay && overlay !== void 0) $$bindings.overlay(overlay);
  if ($$props.mounted === void 0 && $$bindings.mounted && mounted !== void 0) $$bindings.mounted(mounted);
  return `${loading ? `<div class="relative flex justify-center"><div class="${"flex grow flex-col overflow-hidden transition-[opacity] duration-1000 opacity-0 " + escape(mounted ? "opacity-100" : "", true) + " " + escape(overlay ? "absolute w-full h-full z-[1000]" : "", true) + " " + escape($$props.class, true)}">${each(layout, (row) => {
    return `<div class="flex justify-between items-start gap-4">${typeof row === "number" ? `<div style="${"height: " + escape(row * HEIGHT_UNIT, true) + "px;"}"></div>` : `${Array.isArray(row) ? `${each(row, (el) => {
      let element = typeof el === "number" ? { h: el, w: 100 / row.length, minW: 0 } : el;
      return ` ${validate_component(SkeletonElement, "SkeletonElement").$$render($$result, { element }, {}, {})}`;
    })}` : (() => {
      let { elements, h } = row;
      return ` ${each(new Array(elements), (_) => {
        return `${validate_component(SkeletonElement, "SkeletonElement").$$render($$result, { element: { h, w: 100 / elements } }, {}, {})}`;
      })}`;
    })()}`} </div>`;
  })}</div></div>` : ``}`;
});
export {
  Skeleton as S
};
