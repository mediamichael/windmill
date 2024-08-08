import { c as create_ssr_component, h as getContext, s as subscribe, b as add_attribute, d as createEventDispatcher, u as setContext, e as escape } from "./ssr.js";
import { twMerge } from "tailwind-merge";
import { w as writable } from "./index.js";
const Tab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isSelected;
  let $selected, $$unsubscribe_selected;
  let { value } = $$props;
  let { size = "sm" } = $$props;
  let { class: c = "" } = $$props;
  let { style = "" } = $$props;
  let { selectedClass = "" } = $$props;
  let { selectedStyle = "" } = $$props;
  let { id = void 0 } = $$props;
  let { active = false } = $$props;
  let { exact = false } = $$props;
  let { disabled = false } = $$props;
  const { selected, update, hashNavigation } = getContext("Tabs");
  $$unsubscribe_selected = subscribe(selected, (value2) => $selected = value2);
  const fontSizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
    xl: "text-xl"
  };
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.class === void 0 && $$bindings.class && c !== void 0) $$bindings.class(c);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.selectedClass === void 0 && $$bindings.selectedClass && selectedClass !== void 0) $$bindings.selectedClass(selectedClass);
  if ($$props.selectedStyle === void 0 && $$bindings.selectedStyle && selectedStyle !== void 0) $$bindings.selectedStyle(selectedStyle);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0) $$bindings.active(active);
  if ($$props.exact === void 0 && $$bindings.exact && exact !== void 0) $$bindings.exact(exact);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  isSelected = exact ? $selected == value : $selected?.startsWith(value);
  $$unsubscribe_selected();
  return `<button${add_attribute(
    "class",
    twMerge(
      "border-b-2 py-1 px-2 cursor-pointer transition-all z-10 ease-linear font-normal text-primary",
      isSelected ? "wm-tab-active font-main" : "border-gray-300 dark:border-gray-600 border-opacity-0 hover:border-opacity-100 ",
      fontSizeClasses[size],
      c,
      isSelected ? selectedClass : "",
      disabled ? "cursor-not-allowed text-tertiary" : ""
    ),
    0
  )}${add_attribute("style", `${style} ${isSelected ? selectedStyle : ""}`, 0)} ${disabled ? "disabled" : ""}${add_attribute("id", id, 0)}><div${add_attribute("class", twMerge(active ? "bg-blue-50 text-blue-800 rounded-md " : "", "px-2 "), 0)}>${slots.default ? slots.default({}) : ``}</div></button>`;
});
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedStore, $$unsubscribe_selectedStore;
  const dispatch = createEventDispatcher();
  let { selected } = $$props;
  let { hideTabs = false } = $$props;
  let { class: c = "" } = $$props;
  let { wrapperClass = "" } = $$props;
  let { style = "" } = $$props;
  let { hashNavigation = false } = $$props;
  let { values = void 0 } = $$props;
  const selectedStore = writable(selected);
  $$unsubscribe_selectedStore = subscribe(selectedStore, (value) => $selectedStore = value);
  setContext("Tabs", {
    selected: selectedStore,
    update: (value) => {
      selectedStore.set(value);
      selected = value;
    },
    hashNavigation
  });
  function updateSelected() {
    selectedStore.set(selected);
  }
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0) $$bindings.selected(selected);
  if ($$props.hideTabs === void 0 && $$bindings.hideTabs && hideTabs !== void 0) $$bindings.hideTabs(hideTabs);
  if ($$props.class === void 0 && $$bindings.class && c !== void 0) $$bindings.class(c);
  if ($$props.wrapperClass === void 0 && $$bindings.wrapperClass && wrapperClass !== void 0) $$bindings.wrapperClass(wrapperClass);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.hashNavigation === void 0 && $$bindings.hashNavigation && hashNavigation !== void 0) $$bindings.hashNavigation(hashNavigation);
  if ($$props.values === void 0 && $$bindings.values && values !== void 0) $$bindings.values(values);
  selected && updateSelected();
  $selectedStore && dispatch("selected", $selectedStore);
  values ? values.map((x) => "#" + x) : void 0;
  $$unsubscribe_selectedStore();
  return ` ${!hideTabs ? `<div class="${"overflow-x-auto " + escape(wrapperClass, true)}"><div${add_attribute("class", twMerge("border-b flex flex-row whitespace-nowrap scrollbar-hidden", c), 0)}${add_attribute("style", style, 0)}>${slots.default ? slots.default({ selected }) : ``}</div></div>` : ``} ${slots.content ? slots.content({}) : ``}`;
});
export {
  Tabs as T,
  Tab as a
};
