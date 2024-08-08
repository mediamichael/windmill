import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute } from "./ssr.js";
import { P as Portal } from "./toast.js";
import { c as createFloatingActions } from "./Section.js";
import { offset, flip, shift } from "@floating-ui/dom";
import { M as MultiSelect } from "./MultiSelect.js";
import { D as DarkModeObserver } from "./DarkModeObserver.js";
const MultiSelectWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createFloatingActions({
    strategy: "absolute",
    middleware: [offset(5), flip(), shift()]
  });
  let { items } = $$props;
  let { value = [] } = $$props;
  let outerDiv = void 0;
  let portalRef = void 0;
  let darkMode = false;
  let w = 0;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(DarkModeObserver, "DarkModeObserver").$$render(
      $$result,
      { darkMode },
      {
        darkMode: ($$value) => {
          darkMode = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div>${!value || Array.isArray(value) ? `<div class="border rounded-md border-gray-300 shadow-sm dark:border-gray-600 !w-full"><div style="display: contents; --sms-border:${escape("none", true)}; --sms-min-height:${escape("30px", true)}; --sms-focus-border:${escape("none", true)}; --sms-selected-bg:${escape(darkMode ? "#c7d2fe" : "#e0e7ff", true)}; --sms-selected-text-color:${escape(darkMode ? "#312e81" : "#3730a3", true)};">${validate_component(MultiSelect, "MultiSelect").$$render(
      $$result,
      {
        outerDivClass: `!text-xs`,
        ulSelectedClass: "overflow-auto",
        options: items,
        disableRemoveAll: true,
        outerDiv,
        selected: value
      },
      {
        outerDiv: ($$value) => {
          outerDiv = $$value;
          $$settled = false;
        },
        selected: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ option }) => {
          return `  <div class="w-full text-sm">${escape(option)}</div>`;
        }
      }
    )}</div></div> ${validate_component(Portal, "Portal").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="z5000" ${"hidden"}>  <div class="multiselect"${add_attribute("style", `min-width: ${w}px;`, 0)}${add_attribute("this", portalRef, 0)}></div></div>`;
      }
    })}` : `Value ${escape(value)} is not an array`}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  MultiSelectWrapper as M
};
