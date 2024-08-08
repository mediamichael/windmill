import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { I as Icon } from "./Icon.js";
const Fast_forward = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["polygon", { "points": "13 19 22 12 13 5 13 19" }],
    ["polygon", { "points": "2 19 11 12 2 5 2 19" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "fast-forward" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Fast_forward as F
};
