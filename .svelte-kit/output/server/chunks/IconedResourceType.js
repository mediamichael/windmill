import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute, q as missing_component } from "./ssr.js";
import { I as Icon } from "./Icon.js";
import { A as APP_TO_ICON_COMPONENT } from "./index4.js";
const Database = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "ellipse",
      {
        "cx": "12",
        "cy": "5",
        "rx": "9",
        "ry": "3"
      }
    ],
    ["path", { "d": "M3 5V19A9 3 0 0 0 21 19V5" }],
    ["path", { "d": "M3 12A9 3 0 0 0 21 12" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "database" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconedResourceType = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let iconComponent;
  let { name } = $$props;
  let { silent = false } = $$props;
  let { after = false } = $$props;
  let { height = "24px" } = $$props;
  let { width = "24px" } = $$props;
  let { center = false } = $$props;
  let { isSelected = false } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.silent === void 0 && $$bindings.silent && silent !== void 0) $$bindings.silent(silent);
  if ($$props.after === void 0 && $$bindings.after && after !== void 0) $$bindings.after(after);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.center === void 0 && $$bindings.center && center !== void 0) $$bindings.center(center);
  if ($$props.isSelected === void 0 && $$bindings.isSelected && isSelected !== void 0) $$bindings.isSelected(isSelected);
  iconComponent = APP_TO_ICON_COMPONENT[name] || APP_TO_ICON_COMPONENT[name.split("_")[0]];
  return `<div class="${"truncate flex flex-row gap-2 " + escape(center ? "justify-center items-center" : "", true) + " -pl-2"}">${!silent && !after ? `${escape(name)}` : ``} ${iconComponent ? `<span${add_attribute(
    "class",
    isSelected ? "text-secondary" : "text-secondary grayscale",
    0
  )}>${validate_component(iconComponent || missing_component, "svelte:component").$$render($$result, { height, width }, {}, {})}</span>` : `<span style="${"width: " + escape(width, true) + "; height: " + escape(height, true)}" class="bg-gray-100 rounded-full"></span>`} ${!silent && after ? `${escape(name)}` : ``}</div>`;
});
export {
  Database as D,
  IconedResourceType as I
};
