import { c as create_ssr_component, v as validate_component, d as createEventDispatcher, b as add_attribute } from "./ssr.js";
import "./index2.js";
import { twMerge } from "tailwind-merge";
import "yaml";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import { B as Button } from "./toast.js";
import "minimatch";
/* empty css                                     */
import "./common.js";
import { I as Icon } from "./Icon.js";
import { X } from "./x.js";
const Clock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["polyline", { "points": "12 6 12 12 16 14" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "clock" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}
const DateTimeInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value = void 0 } = $$props;
  let { clearable = false } = $$props;
  let { autofocus = false } = $$props;
  let { useDropdown = false } = $$props;
  let { minDate = void 0 } = $$props;
  let { maxDate = void 0 } = $$props;
  let { disabled = void 0 } = $$props;
  let { inputClass = void 0 } = $$props;
  let date = void 0;
  let time = void 0;
  function parseValue(value2 = void 0) {
    let dateFromValue = value2 ? new Date(value2) : void 0;
    date = isValidDate(dateFromValue) ? `${dateFromValue.getFullYear().toString()}-${(dateFromValue.getMonth() + 1).toString().padStart(2, "0")}-${dateFromValue.getDate().toString().padStart(2, "0")}` : void 0;
    time = isValidDate(dateFromValue) ? `${dateFromValue.getHours().toString().padStart(2, "0")}:${dateFromValue.getMinutes().toString().padStart(2, "0")}` : "12:00";
  }
  let initialDate = date;
  let initialTime = time;
  function parseDateAndTime(date2, time2) {
    if (date2 && time2 && (initialDate != date2 || initialTime != time2)) {
      let newDate = /* @__PURE__ */ new Date(`${date2}T${time2}`);
      if (newDate.toString() != "Invalid Date") {
        value = newDate.toISOString();
        dispatch("change", value);
      }
    }
  }
  const dispatch = createEventDispatcher();
  function setTimeLater(mins) {
    let newDate = /* @__PURE__ */ new Date();
    newDate.setMinutes(newDate.getMinutes() + mins);
    value = newDate.toISOString();
    dispatch("change", value);
  }
  let randomId = "datetarget-" + Math.random().toString(36).substring(7);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.clearable === void 0 && $$bindings.clearable && clearable !== void 0) $$bindings.clearable(clearable);
  if ($$props.autofocus === void 0 && $$bindings.autofocus && autofocus !== void 0) $$bindings.autofocus(autofocus);
  if ($$props.useDropdown === void 0 && $$bindings.useDropdown && useDropdown !== void 0) $$bindings.useDropdown(useDropdown);
  if ($$props.minDate === void 0 && $$bindings.minDate && minDate !== void 0) $$bindings.minDate(minDate);
  if ($$props.maxDate === void 0 && $$bindings.maxDate && maxDate !== void 0) $$bindings.maxDate(maxDate);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.inputClass === void 0 && $$bindings.inputClass && inputClass !== void 0) $$bindings.inputClass(inputClass);
  {
    parseValue(value);
  }
  {
    parseDateAndTime(date, time);
  }
  return `<div class="flex flex-row gap-1 items-center w-full"${add_attribute("id", randomId, 0)}> <input type="date" ${autofocus ? "autofocus" : ""} ${disabled ? "disabled" : ""}${add_attribute("class", twMerge("h-8 text-sm !w-3/4 ", inputClass), 0)}${add_attribute("min", minDate, 0)}${add_attribute("max", maxDate, 0)}${add_attribute("value", date, 0)}> <input type="time"${add_attribute("class", twMerge("h-8 text-sm !w-1/4 min-w-[100px] ", inputClass), 0)} ${disabled ? "disabled" : ""}${add_attribute("value", time, 0)}> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "border",
      color: "light",
      wrapperClasses: "h-8",
      startIcon: { icon: Clock },
      disabled,
      size: "xs",
      portalTarget: `#${randomId}`,
      dropdownItems: useDropdown ? [
        {
          label: "In 15 minutes",
          onClick: () => {
            setTimeLater(15);
          }
        },
        {
          label: "In 1 hour",
          onClick: () => {
            setTimeLater(60);
          }
        },
        {
          label: "Tomorrow",
          onClick: () => {
            setTimeLater(60 * 24);
          }
        },
        {
          label: "In 1 week",
          onClick: () => {
            setTimeLater(7 * 60 * 24);
          }
        }
      ] : void 0
    },
    {},
    {
      default: () => {
        return `Now`;
      }
    }
  )} ${clearable ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "border",
      color: "light",
      wrapperClasses: "h-8",
      disabled
    },
    {},
    {
      default: () => {
        return `${validate_component(X, "X").$$render($$result, { size: 14 }, {}, {})}`;
      }
    }
  )}` : ``} </div>`;
});
export {
  Clock as C,
  DateTimeInput as D
};
