import { c as create_ssr_component, t as compute_rest_props, b as add_attribute } from "./ssr.js";
import { twMerge } from "tailwind-merge";
const CenteredPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<div class="pb-8"><div${add_attribute("class", twMerge("max-w-7xl mx-auto px-4 sm:px-6 md:px-8", $$restProps.class), 0)}>${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  CenteredPage as C
};
