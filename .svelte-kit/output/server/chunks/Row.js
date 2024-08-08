import { c as create_ssr_component, d as createEventDispatcher, b as add_attribute } from "./ssr.js";
import { twMerge } from "tailwind-merge";
const Row = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { hoverable = false } = $$props;
  let { selected = false } = $$props;
  let { dividable = false } = $$props;
  createEventDispatcher();
  if ($$props.hoverable === void 0 && $$bindings.hoverable && hoverable !== void 0) $$bindings.hoverable(hoverable);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0) $$bindings.selected(selected);
  if ($$props.dividable === void 0 && $$bindings.dividable && dividable !== void 0) $$bindings.dividable(dividable);
  return `<tr${add_attribute("class", twMerge(hoverable ? "hover:bg-surface-hover cursor-pointer" : "", selected ? "bg-blue-50 dark:bg-blue-900/50" : "", "transition-all", dividable ? "divide-x" : ""), 0)}>${slots.default ? slots.default({}) : ``}</tr>`;
});
export {
  Row as R
};
