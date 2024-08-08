import { c as create_ssr_component, v as validate_component, d as createEventDispatcher, s as subscribe, b as add_attribute, e as escape } from "./ssr.js";
import "./index2.js";
import "yaml";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import { B as Button, M as MenuItem, g as classNames } from "./toast.js";
import "minimatch";
/* empty css                                     */
import "./common.js";
import { I as Icon } from "./Icon.js";
import { t as tutorialsToDo } from "./stores2.js";
import { C as Circle } from "./circle.js";
import { C as Check_circle } from "./DefaultScripts.js";
const Redo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M21 7v6h-6" }],
    [
      "path",
      {
        "d": "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "redo" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Undo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M3 7v6h6" }],
    [
      "path",
      {
        "d": "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "undo" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const UndoRedo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { undoProps = {} } = $$props;
  let { redoProps = {} } = $$props;
  createEventDispatcher();
  if ($$props.undoProps === void 0 && $$bindings.undoProps && undoProps !== void 0) $$bindings.undoProps(undoProps);
  if ($$props.redoProps === void 0 && $$bindings.redoProps && redoProps !== void 0) $$bindings.redoProps(redoProps);
  return `<div class="flex">${validate_component(Button, "Button").$$render(
    $$result,
    Object.assign(
      {},
      { title: "Undo" },
      { variant: "border" },
      { color: "light" },
      { size: "xs" },
      {
        btnClasses: "!min-h-[30px] !rounded-r-none"
      },
      undoProps
    ),
    {},
    {
      default: () => {
        return `${validate_component(Undo, "Undo").$$render($$result, { size: 14 }, {}, {})}`;
      }
    }
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    Object.assign(
      {},
      { title: "Redo" },
      { variant: "border" },
      { color: "light" },
      { size: "xs" },
      {
        btnClasses: "!min-h-[30px] !rounded-l-none !border-l-0"
      },
      redoProps
    ),
    {},
    {
      default: () => {
        return `${validate_component(Redo, "Redo").$$render($$result, { size: 14 }, {}, {})}`;
      }
    }
  )}</div>`;
});
const TutorialItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $tutorialsToDo, $$unsubscribe_tutorialsToDo;
  $$unsubscribe_tutorialsToDo = subscribe(tutorialsToDo, (value) => $tutorialsToDo = value);
  let { label } = $$props;
  let { index } = $$props;
  let { disabled = false } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  $$unsubscribe_tutorialsToDo();
  return `${validate_component(MenuItem, "MenuItem").$$render($$result, { disabled }, {}, {
    default: () => {
      return `<div${add_attribute("class", classNames("flex flex-row items-center text-left px-4 py-2 gap-2 cursor-pointer hover:bg-surface-hover !text-xs font-semibold", disabled ? "text-disabled" : "text-primary"), 0)}>${$tutorialsToDo.includes(index) ? `${validate_component(Circle, "Circle").$$render($$result, { size: 16 }, {}, {})}` : `${validate_component(Check_circle, "CheckCircle").$$render($$result, { size: 16, color: "green" }, {}, {})}`} <div class="flex flex-row justify-between items-center w-full">${escape(label)} ${slots.default ? slots.default({}) : ``}</div></div>`;
    }
  })}`;
});
export {
  TutorialItem as T,
  UndoRedo as U
};
