import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape } from "./ssr.js";
import { I as Icon } from "./Icon.js";
import { g as classNames } from "./toast.js";
import { T as Tooltip } from "./Tooltip.js";
const Bell_off = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5"
      }
    ],
    [
      "path",
      {
        "d": "M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7"
      }
    ],
    ["path", { "d": "M10.3 21a1.94 1.94 0 0 0 3.4 0" }],
    ["path", { "d": "m2 2 20 20" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "bell-off" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const PanelSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { noPadding = false } = $$props;
  let { fullHeight = true } = $$props;
  let { titlePadding = "" } = $$props;
  let { tooltip = "" } = $$props;
  let { documentationLink = void 0 } = $$props;
  let { id = void 0 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.noPadding === void 0 && $$bindings.noPadding && noPadding !== void 0) $$bindings.noPadding(noPadding);
  if ($$props.fullHeight === void 0 && $$bindings.fullHeight && fullHeight !== void 0) $$bindings.fullHeight(fullHeight);
  if ($$props.titlePadding === void 0 && $$bindings.titlePadding && titlePadding !== void 0) $$bindings.titlePadding(titlePadding);
  if ($$props.tooltip === void 0 && $$bindings.tooltip && tooltip !== void 0) $$bindings.tooltip(tooltip);
  if ($$props.documentationLink === void 0 && $$bindings.documentationLink && documentationLink !== void 0) $$bindings.documentationLink(documentationLink);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  return `<div${add_attribute("class", classNames($$props.class, "flex flex-col gap-2 items-start", noPadding ? "" : "p-3", fullHeight ? "h-full" : ""), 0)}${add_attribute("id", id, 0)}><div class="flex justify-between flex-wrap items-center w-full gap-1"><div class="${"text-xs inline-flex items-center font-semibold text-primary " + escape(titlePadding, true) + " gap-1"}"><span class="truncate">${escape(title)}</span> ${tooltip ? `${validate_component(Tooltip, "Tooltip").$$render($$result, { documentationLink }, {}, {
    default: () => {
      return `${escape(tooltip)}`;
    }
  })}` : ``}</div> ${slots.action ? slots.action({}) : ``}</div> ${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Bell_off as B,
  PanelSection as P
};
