import { c as create_ssr_component, v as validate_component, d as createEventDispatcher, e as escape } from "./ssr.js";
import { I as Icon } from "./Icon.js";
import "./index2.js";
import "yaml";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import "./common.js";
import "minimatch";
/* empty css                                     */
import { P as Popup } from "./Popup.js";
import { D as DateTimeInput } from "./DateTimeInput.js";
import { C as Calendar } from "./calendar.js";
const Filter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "polygon",
      {
        "points": "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "filter" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const CalendarPicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { date } = $$props;
  let { label } = $$props;
  let { useDropdown = false } = $$props;
  let { clearable = false } = $$props;
  createEventDispatcher();
  let { placement = "top-end" } = $$props;
  if ($$props.date === void 0 && $$bindings.date && date !== void 0) $$bindings.date(date);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.useDropdown === void 0 && $$bindings.useDropdown && useDropdown !== void 0) $$bindings.useDropdown(useDropdown);
  if ($$props.clearable === void 0 && $$bindings.clearable && clearable !== void 0) $$bindings.clearable(clearable);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0) $$bindings.placement(placement);
  return `${validate_component(Popup, "Popup").$$render(
    $$result,
    {
      floatingConfig: { placement, strategy: "absolute" }
    },
    {},
    {
      button: () => {
        return `<button title="Open calendar picker" class="absolute bottom-1 right-2 top-1 py-1 min-w-min !px-2 items-center text-primary bg-surface border rounded center-center hover:bg-surface-hover transition-all cursor-pointer" aria-label="Open calendar picker">${validate_component(Calendar, "Calendar").$$render($$result, { size: 14 }, {}, {})}</button> `;
      },
      default: () => {
        return ` <label class="block text-primary"><div class="pb-1 text-sm text-secondary">${escape(label)}</div> <div class="flex w-full">${validate_component(DateTimeInput, "DateTimeInput").$$render($$result, { clearable, useDropdown, value: date }, {}, {})}</div></label>`;
      }
    }
  )}`;
});
export {
  CalendarPicker as C,
  Filter as F
};
