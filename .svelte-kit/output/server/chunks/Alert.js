import { c as create_ssr_component, v as validate_component, b as add_attribute, q as missing_component, e as escape, p as compute_slots } from "./ssr.js";
import { T as Tooltip, I as Info } from "./Tooltip.js";
import { twMerge } from "tailwind-merge";
import { D as Chevron_down, C as Check_circle_2 } from "./toast.js";
import { I as Icon } from "./Icon.js";
import { A as Alert_triangle } from "./alert-triangle.js";
const Alert_circle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    [
      "line",
      {
        "x1": "12",
        "x2": "12",
        "y1": "8",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "12",
        "x2": "12.01",
        "y1": "16",
        "y2": "16"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "alert-circle" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Chevron_up = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m18 15-6-6-6 6" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "chevron-up" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Alert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { type = "info" } = $$props;
  let { title } = $$props;
  let { notRounded = false } = $$props;
  let { tooltip = "" } = $$props;
  let { documentationLink = void 0 } = $$props;
  let { size = "sm" } = $$props;
  let { collapsible = false } = $$props;
  let { bgClass = void 0 } = $$props;
  let { bgStyle = void 0 } = $$props;
  let { iconClass = void 0 } = $$props;
  let { iconStyle = void 0 } = $$props;
  let { titleClass = void 0 } = $$props;
  let { titleStyle = void 0 } = $$props;
  let { descriptionClass = void 0 } = $$props;
  let { descriptionStyle = void 0 } = $$props;
  let { isCollapsed = true } = $$props;
  const icons = {
    info: Info,
    warning: Alert_circle,
    error: Alert_triangle,
    success: Check_circle_2
  };
  const classes = {
    info: {
      bgClass: "bg-blue-50 border-blue-200 border dark:bg-blue-900/40 dark:border-blue-700/40",
      iconClass: "text-blue-500 dark:text-blue-300",
      titleClass: "text-blue-800 dark:text-blue-100",
      descriptionClass: "text-blue-700 dark:text-blue-100"
    },
    warning: {
      bgClass: "bg-yellow-50 border-yellow-200 border dark:bg-yellow-900/40 dark:border-yellow-700/40",
      iconClass: "text-yellow-500 dark:text-yellow-300/90",
      titleClass: "text-yellow-800 dark:text-yellow-100/90",
      descriptionClass: "text-yellow-700 dark:text-yellow-100/90"
    },
    error: {
      bgClass: "bg-red-50 border-red-200 border dark:bg-red-900/40 dark:border-red-700/40",
      iconClass: "text-red-500 dark:text-red-300/90",
      titleClass: "text-red-800 dark:text-red-100/90",
      descriptionClass: "text-red-700 dark:text-red-100/90"
    },
    success: {
      bgClass: "bg-green-50 border-green-200 border dark:bg-green-900/40 dark:border-green-700/40",
      iconClass: "text-green-500 dark:text-green-300/90",
      titleClass: "text-green-800 dark:text-green-100/90",
      descriptionClass: "text-green-700 dark:text-green-100/90"
    }
  };
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.notRounded === void 0 && $$bindings.notRounded && notRounded !== void 0) $$bindings.notRounded(notRounded);
  if ($$props.tooltip === void 0 && $$bindings.tooltip && tooltip !== void 0) $$bindings.tooltip(tooltip);
  if ($$props.documentationLink === void 0 && $$bindings.documentationLink && documentationLink !== void 0) $$bindings.documentationLink(documentationLink);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.collapsible === void 0 && $$bindings.collapsible && collapsible !== void 0) $$bindings.collapsible(collapsible);
  if ($$props.bgClass === void 0 && $$bindings.bgClass && bgClass !== void 0) $$bindings.bgClass(bgClass);
  if ($$props.bgStyle === void 0 && $$bindings.bgStyle && bgStyle !== void 0) $$bindings.bgStyle(bgStyle);
  if ($$props.iconClass === void 0 && $$bindings.iconClass && iconClass !== void 0) $$bindings.iconClass(iconClass);
  if ($$props.iconStyle === void 0 && $$bindings.iconStyle && iconStyle !== void 0) $$bindings.iconStyle(iconStyle);
  if ($$props.titleClass === void 0 && $$bindings.titleClass && titleClass !== void 0) $$bindings.titleClass(titleClass);
  if ($$props.titleStyle === void 0 && $$bindings.titleStyle && titleStyle !== void 0) $$bindings.titleStyle(titleStyle);
  if ($$props.descriptionClass === void 0 && $$bindings.descriptionClass && descriptionClass !== void 0) $$bindings.descriptionClass(descriptionClass);
  if ($$props.descriptionStyle === void 0 && $$bindings.descriptionStyle && descriptionStyle !== void 0) $$bindings.descriptionStyle(descriptionStyle);
  if ($$props.isCollapsed === void 0 && $$bindings.isCollapsed && isCollapsed !== void 0) $$bindings.isCollapsed(isCollapsed);
  return `<div${add_attribute("class", twMerge(notRounded ? "" : "rounded-md", size === "sm" ? "p-4" : "p-2", classes[type].bgClass, bgClass, $$props.class), 0)}${add_attribute("style", bgStyle, 0)}><div class="flex"><div class="flex h-8 w-8 items-center justify-center rounded-full">${validate_component(icons[type] || missing_component, "svelte:component").$$render(
    $$result,
    {
      class: twMerge(classes[type].iconClass, iconClass),
      style: iconStyle,
      size: 16
    },
    {},
    {}
  )}</div> <div${add_attribute("class", twMerge("ml-1 w-full"), 0)}><div${add_attribute("class", twMerge("w-full flex flex-row items-center justify-between h-8"), 0)}><span${add_attribute("class", twMerge(size === "sm" ? "text-sm" : "text-xs", "font-medium", classes[type].titleClass, titleClass), 0)}${add_attribute("style", titleStyle, 0)}>${escape(title)} ${tooltip != "" || documentationLink ? `${validate_component(Tooltip, "Tooltip").$$render($$result, { documentationLink, scale: 0.9 }, {}, {
    default: () => {
      return `${escape(tooltip)}`;
    }
  })}` : ``}</span> ${collapsible ? `<button class="cursor-pointer">${isCollapsed ? `${validate_component(Chevron_down, "ChevronDown").$$render($$result, { size: 16 }, {}, {})}` : `${validate_component(Chevron_up, "ChevronUp").$$render($$result, { size: 16 }, {}, {})}`}</button>` : ``}</div> ${$$slots.default && !isCollapsed ? `<div class="mt-2"><div${add_attribute("class", twMerge(size === "sm" ? "text-sm" : "text-xs", classes[type].descriptionClass, descriptionClass), 0)}${add_attribute("style", descriptionStyle, 0)}>${slots.default ? slots.default({}) : ``}</div></div>` : `${$$slots.default && !collapsible ? `<div class="mb-2"><div${add_attribute("class", twMerge(size === "sm" ? "text-sm" : "text-xs", classes[type].descriptionClass, descriptionClass), 0)}${add_attribute("style", descriptionStyle, 0)}>${slots.default ? slots.default({}) : ``}</div></div>` : ``}`}</div></div></div>`;
});
export {
  Alert as A,
  Chevron_up as C,
  Alert_circle as a
};
