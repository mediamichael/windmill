import { c as create_ssr_component, t as compute_rest_props, e as escape, w as spread, y as escape_attribute_value, x as escape_object, v as validate_component, q as missing_component } from "./ssr.js";
import { i as is_void } from "./names.js";
import { g as classNames } from "./toast.js";
import { X } from "./x.js";
const ColorModifier = "dark-";
const Badge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let badgeClass;
  let $$restProps = compute_rest_props($$props, [
    "color",
    "large",
    "small",
    "href",
    "rounded",
    "dismissable",
    "wrapperClass",
    "baseClass",
    "capitalize",
    "icon"
  ]);
  let { color = "gray" } = $$props;
  let { large = false } = $$props;
  let { small = false } = $$props;
  let { href = "" } = $$props;
  let { rounded = false } = $$props;
  let { dismissable = false } = $$props;
  let { wrapperClass = "" } = $$props;
  let { baseClass = "text-center" } = $$props;
  let { capitalize = false } = $$props;
  let { icon = void 0 } = $$props;
  const colors = {
    gray: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800",
    red: "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900",
    green: "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900",
    yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-100 dark:text-yellow-900",
    orange: "bg-orange-100 text-orange-800 dark:bg-orange-100 dark:text-orange-900",
    indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900",
    ["dark-gray"]: "bg-gray-500 text-gray-100",
    ["dark-blue"]: "bg-blue-500 text-blue-100",
    ["dark-red"]: "bg-red-500 text-white",
    ["dark-green"]: "bg-green-500 text-green-100",
    ["dark-yellow"]: "bg-yellow-300 text-yellow-800",
    ["dark-indigo"]: "bg-indigo-500 text-indigo-100",
    ["dark-orange"]: "bg-orange-500 text-orange-100"
  };
  const hovers = {
    gray: "hover:bg-gray-200 dark:hover:bg-gray-300",
    blue: "hover:bg-blue-200 dark:hover:bg-blue-300",
    red: "hover:bg-red-200 dark:hover:bg-red-300",
    green: "hover:bg-green-200 dark:hover:bg-green-300",
    yellow: "hover:bg-yellow-200 dark:hover:bg-yellow-300",
    indigo: "hover:bg-indigo-200 dark:hover:bg-indigo-300",
    orange: "hover:bg-orange-200 dark:hover:bg-orange-300"
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.large === void 0 && $$bindings.large && large !== void 0) $$bindings.large(large);
  if ($$props.small === void 0 && $$bindings.small && small !== void 0) $$bindings.small(small);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);
  if ($$props.dismissable === void 0 && $$bindings.dismissable && dismissable !== void 0) $$bindings.dismissable(dismissable);
  if ($$props.wrapperClass === void 0 && $$bindings.wrapperClass && wrapperClass !== void 0) $$bindings.wrapperClass(wrapperClass);
  if ($$props.baseClass === void 0 && $$bindings.baseClass && baseClass !== void 0) $$bindings.baseClass(baseClass);
  if ($$props.capitalize === void 0 && $$bindings.capitalize && capitalize !== void 0) $$bindings.capitalize(capitalize);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
  badgeClass = classNames(
    baseClass,
    small ? "text-xs" : large ? "text-sm font-medium" : "text-xs font-semibold",
    colors[color],
    href && (color.startsWith(ColorModifier) ? hovers[color.replace(ColorModifier, "")] : hovers[color]),
    rounded ? "rounded-full px-2 py-1" : "rounded px-2.5 py-0.5",
    "flex flex-row gap-1 items-center",
    $$props.class
  );
  return ` <span class="${"inline-flex justify-center items-center whitespace-nowrap " + escape(wrapperClass, true)}">${((tag) => {
    return tag ? `<${href ? "a" : "span"}${spread(
      [
        { href: escape_attribute_value(href) },
        escape_object($$restProps),
        {
          class: escape_attribute_value(badgeClass)
        }
      ],
      {
        classes: " " + (capitalize ? "capitalize" : "")
      }
    )}>${is_void(tag) ? "" : `${icon?.icon && icon.position === "left" ? `${validate_component(icon.icon || missing_component, "svelte:component").$$render($$result, { size: 14 }, {}, {})}` : ``} ${slots.default ? slots.default({}) : ``} ${icon?.icon && icon.position === "right" ? `${validate_component(icon.icon || missing_component, "svelte:component").$$render($$result, { size: 14 }, {}, {})}` : ``} ${dismissable ? `<button>${validate_component(X, "X").$$render($$result, { size: 10 }, {}, {})}</button>` : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "span")}</span>`;
});
export {
  Badge as B
};
