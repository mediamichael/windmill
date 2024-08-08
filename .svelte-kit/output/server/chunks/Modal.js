import { c as create_ssr_component, d as createEventDispatcher, b as add_attribute, e as escape, v as validate_component } from "./ssr.js";
import { B as Button } from "./toast.js";
import { B as Badge } from "./Badge.js";
import { twMerge } from "tailwind-merge";
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { open = false } = $$props;
  let { class: c = "" } = $$props;
  let { style = "" } = $$props;
  let { cancelText = void 0 } = $$props;
  createEventDispatcher();
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.class === void 0 && $$bindings.class && c !== void 0) $$bindings.class(c);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.cancelText === void 0 && $$bindings.cancelText && cancelText !== void 0) $$bindings.cancelText(cancelText);
  return ` ${open ? `  <div${add_attribute("class", "absolute top-0 bottom-0 left-0 right-0 z-50", 0)} role="dialog"><div${add_attribute(
    "class",
    twMerge("fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity", open ? "ease-out duration-300 opacity-100" : "ease-in duration-200 opacity-0"),
    0
  )}></div> <div class="fixed inset-0 z-10 overflow-y-auto"><div class="flex min-h-full items-center justify-center p-4"> <div${add_attribute(
    "class",
    twMerge("relative transform overflow-hidden rounded-lg bg-surface px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6", c, open ? "ease-out duration-300 opacity-100 translate-y-0 sm:scale-100" : "ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"),
    0
  )}${add_attribute("style", style, 0)}><div class="flex"><div class="ml-4 text-left flex-1"><h3 class="text-lg font-medium text-primary">${escape(title)}</h3> <div class="mt-2 text-sm text-tertiary">${slots.default ? slots.default({}) : ``}</div></div></div> <div class="flex items-center space-x-2 flex-row-reverse space-x-reverse mt-4">${slots.actions ? slots.actions({}) : ``} ${validate_component(Button, "Button").$$render($$result, { color: "light", size: "sm" }, {}, {
    default: () => {
      return `<span class="inline-flex gap-2">${escape(cancelText ?? "Cancel")}${validate_component(Badge, "Badge").$$render($$result, { color: "dark-gray" }, {}, {
        default: () => {
          return `Escape`;
        }
      })}</span>`;
    }
  })}</div></div></div></div></div>` : ``}`;
});
export {
  Modal as M
};
