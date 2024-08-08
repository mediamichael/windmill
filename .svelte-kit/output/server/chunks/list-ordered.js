import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { I as Icon } from "./Icon.js";
const List_ordered = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "10",
        "x2": "21",
        "y1": "6",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "10",
        "x2": "21",
        "y1": "12",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "10",
        "x2": "21",
        "y1": "18",
        "y2": "18"
      }
    ],
    ["path", { "d": "M4 6h1v4" }],
    ["path", { "d": "M4 10h2" }],
    ["path", { "d": "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "list-ordered" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  List_ordered as L
};
