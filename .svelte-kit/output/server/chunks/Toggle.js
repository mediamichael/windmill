import { c as create_ssr_component, d as createEventDispatcher, b as add_attribute, e as escape, v as validate_component } from "./ssr.js";
import { g as classNames } from "./toast.js";
import { twMerge } from "tailwind-merge";
import { T as Tooltip } from "./Tooltip.js";
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options = {} } = $$props;
  let { checked = false } = $$props;
  let { disabled = false } = $$props;
  let { textClass = "" } = $$props;
  let { textStyle = "" } = $$props;
  let { color = "blue" } = $$props;
  let { id = (Math.random() + 1).toString(36).substring(10) } = $$props;
  let { lightMode = false } = $$props;
  let { size = "sm" } = $$props;
  createEventDispatcher();
  const bothOptions = Boolean(options.left) && Boolean(options.right);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0) $$bindings.checked(checked);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.textClass === void 0 && $$bindings.textClass && textClass !== void 0) $$bindings.textClass(textClass);
  if ($$props.textStyle === void 0 && $$bindings.textStyle && textStyle !== void 0) $$bindings.textStyle(textStyle);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.lightMode === void 0 && $$bindings.lightMode && lightMode !== void 0) $$bindings.lightMode(lightMode);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  return `<label${add_attribute("for", id, 0)} class="${escape($$props.class || "", true) + " z-auto inline-flex items-center duration-50 " + escape(disabled ? "grayscale opacity-50" : "cursor-pointer", true)}">${Boolean(options?.left) ? `<span${add_attribute(
    "class",
    twMerge(
      "mr-2 font-medium duration-50 select-none",
      bothOptions ? checked ? "text-disabled" : "text-primary" : "text-primary",
      size === "xs" ? "text-xs" : "text-sm",
      textClass
    ),
    0
  )}${add_attribute("style", textStyle, 0)}>${escape(options?.left)} ${options?.leftTooltip ? `${validate_component(Tooltip, "Tooltip").$$render($$result, { light: lightMode }, {}, {
    default: () => {
      return `${escape(options?.leftTooltip)}`;
    }
  })}` : ``}</span>` : ``}   <div class="relative"><input ${disabled ? "disabled" : ""} type="checkbox"${add_attribute("id", id, 0)} class="sr-only peer"${add_attribute("checked", checked, 1)}> <div${add_attribute(
    "class",
    classNames(
      "transition-all bg-surface-selected rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute  after:bg-surface after:border-white after:border after:rounded-full after:transition-all ",
      color == "red" ? "peer-checked:bg-red-600" : "peer-checked:bg-blue-600 dark:peer-checked:bg-blue-500",
      size === "sm" ? "w-11 h-6 after:top-0.5 after:left-[2px] after:h-5 after:w-5" : "w-7 h-4 after:top-0.5 after:left-[2px] after:h-3 after:w-3"
    ),
    0
  )}></div></div> ${Boolean(options?.right) ? `<span${add_attribute(
    "class",
    twMerge(
      "ml-2 font-medium duration-50 select-none",
      bothOptions ? checked ? "text-primary" : "text-disabled" : "text-primary",
      size === "xs" ? "text-xs" : "text-sm",
      textClass
    ),
    0
  )}${add_attribute("style", textStyle, 0)}>${escape(options?.right)} ${options?.rightTooltip ? `${validate_component(Tooltip, "Tooltip").$$render($$result, { light: lightMode }, {}, {
    default: () => {
      return `${escape(options?.rightTooltip)}`;
    }
  })}` : ``}</span>` : ``} ${slots.right ? slots.right({}) : ``}</label>`;
});
export {
  Toggle as T
};
