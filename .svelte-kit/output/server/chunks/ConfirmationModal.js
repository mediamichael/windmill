import { c as create_ssr_component, v as validate_component, d as createEventDispatcher, b as add_attribute, e as escape } from "./ssr.js";
import { g as classNames, B as Button } from "./toast.js";
import { A as Alert_triangle } from "./alert-triangle.js";
import { I as Icon } from "./Icon.js";
import { L as Loader_2 } from "./loader-2.js";
const Corner_down_left = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["polyline", { "points": "9 10 4 15 9 20" }],
    ["path", { "d": "M20 4v7a4 4 0 0 1-4 4H4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "corner-down-left" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ConfirmationModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { confirmationText } = $$props;
  let { keyListen = true } = $$props;
  let { loading = false } = $$props;
  let { open = false } = $$props;
  createEventDispatcher();
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.confirmationText === void 0 && $$bindings.confirmationText && confirmationText !== void 0) $$bindings.confirmationText(confirmationText);
  if ($$props.keyListen === void 0 && $$bindings.keyListen && keyListen !== void 0) $$bindings.keyListen(keyListen);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  return ` ${open ? `<div${add_attribute("class", "absolute top-0 bottom-0 left-0 right-0 z-[5000]", 0)} role="dialog"><div${add_attribute(
    "class",
    classNames("fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity", open ? "ease-out duration-300 opacity-100" : "ease-in duration-200 opacity-0"),
    0
  )}></div> <div class="fixed inset-0 z-10 overflow-y-auto"><div class="flex min-h-full items-center justify-center p-4"><div${add_attribute(
    "class",
    classNames("relative transform overflow-hidden rounded-lg bg-surface px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6", open ? "ease-out duration-300 opacity-100 translate-y-0 sm:scale-100" : "ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"),
    0
  )}><div class="flex"><div class="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-800/50">${validate_component(Alert_triangle, "AlertTriangle").$$render($$result, { class: "text-red-500 dark:text-red-400" }, {}, {})}</div> <div class="ml-4 text-left flex-1"><h3 class="text-lg font-medium text-primary">${escape(title)}</h3> <div class="mt-2 text-sm text-secondary">${slots.default ? slots.default({}) : ``}</div></div></div> <div class="flex items-center space-x-2 flex-row-reverse space-x-reverse mt-4">${validate_component(Button, "Button").$$render(
    $$result,
    {
      disabled: loading,
      color: "red",
      size: "sm",
      shortCut: {
        Icon: Corner_down_left,
        hide: !keyListen,
        withoutModifier: true
      }
    },
    {},
    {
      default: () => {
        return `${loading ? `${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})}` : ``} <span>${escape(confirmationText)}</span>`;
      }
    }
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      disabled: loading,
      color: "light",
      size: "sm",
      shortCut: {
        key: "Esc",
        hide: !keyListen,
        withoutModifier: true
      }
    },
    {},
    {
      default: () => {
        return `Cancel`;
      }
    }
  )}</div></div></div></div></div>` : ``}`;
});
export {
  Corner_down_left as C,
  ConfirmationModal as a
};
