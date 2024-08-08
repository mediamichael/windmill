import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { I as Icon } from "./Icon.js";
const Git_fork = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "18", "r": "3" }],
    ["circle", { "cx": "6", "cy": "6", "r": "3" }],
    ["circle", { "cx": "18", "cy": "6", "r": "3" }],
    [
      "path",
      {
        "d": "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"
      }
    ],
    ["path", { "d": "M12 12v3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "git-fork" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Git_fork as G
};
