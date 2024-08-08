import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { B as BarsStaggered } from "./util.js";
const FlowIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "black" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  return `${validate_component(BarsStaggered, "BarsStaggered").$$render($$result, { size: 14, style: `color: ${color};` }, {}, {})}`;
});
export {
  FlowIcon as F
};
