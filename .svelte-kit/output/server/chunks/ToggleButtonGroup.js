import { c as create_ssr_component, t as compute_rest_props, B as get_current_component, d as createEventDispatcher, s as subscribe, u as setContext, v as validate_component, h as getContext, n as noop, e as escape, b as add_attribute, q as missing_component } from "./ssr.js";
import { f as forwardEventsBuilder, R as Render, g as globals, h as useId } from "./common.js";
import { E as resolveButtonType } from "./toast.js";
import { twMerge } from "tailwind-merge";
import { P as Popover } from "./Popover.js";
import { I as Info } from "./Tooltip.js";
import { w as writable } from "./index.js";
const { Object: Object_1$1 } = globals;
const TABS_CONTEXT_NAME = "headlessui-tabs-context";
function useTabsContext(component) {
  let context = getContext(TABS_CONTEXT_NAME);
  if (context === void 0) {
    throw new Error(`<${component} /> is missing a parent <TabGroup /> component.`);
  }
  return context;
}
const TabGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use", "defaultIndex", "vertical", "manual"]);
  let $listRef, $$unsubscribe_listRef;
  let { as = "div" } = $$props;
  let { use = [] } = $$props;
  let { defaultIndex = 0 } = $$props;
  let { vertical = false } = $$props;
  let { manual = false } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component(), ["change"]);
  const dispatch = createEventDispatcher();
  let selectedIndex = null;
  let tabs = [];
  let panels = [];
  let listRef = writable(null);
  $$unsubscribe_listRef = subscribe(listRef, (value) => $listRef = value);
  let api = writable({
    selectedIndex,
    orientation: vertical ? "vertical" : "horizontal",
    activation: manual ? "manual" : "auto",
    tabs,
    panels,
    listRef,
    setSelectedIndex(index) {
      if (selectedIndex === index) return;
      selectedIndex = index;
      dispatch("change", index);
    },
    registerTab(tab) {
      if (tabs.includes(tab)) return;
      if (!$listRef) {
        tabs = [...tabs, tab];
        return;
      }
      let currentSelectedTab = selectedIndex !== null ? tabs[selectedIndex] : null;
      let orderMap = Array.from($listRef.querySelectorAll('[id^="headlessui-tabs-tab-"]')).reduce((lookup, element, index) => Object.assign(lookup, { [element.id]: index }), {});
      let nextTabs = [...tabs, tab];
      nextTabs.sort((a, z) => orderMap[a.id] - orderMap[z.id]);
      tabs = nextTabs;
      selectedIndex = (() => {
        if (currentSelectedTab === null) return null;
        return tabs.indexOf(currentSelectedTab);
      })();
    },
    unregisterTab(tab) {
      tabs = tabs.filter((t) => t !== tab);
    },
    registerPanel(panel) {
      if (!panels.includes(panel)) panels = [...panels, panel];
    },
    unregisterPanel(panel) {
      panels = panels.filter((p) => p !== panel);
    }
  });
  setContext(TABS_CONTEXT_NAME, api);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0) $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.defaultIndex === void 0 && $$bindings.defaultIndex && defaultIndex !== void 0) $$bindings.defaultIndex(defaultIndex);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0) $$bindings.vertical(vertical);
  if ($$props.manual === void 0 && $$bindings.manual && manual !== void 0) $$bindings.manual(manual);
  {
    api.update((obj) => {
      return {
        ...obj,
        selectedIndex,
        orientation: vertical ? "vertical" : "horizontal",
        activation: manual ? "manual" : "auto",
        tabs,
        panels
      };
    });
  }
  slotProps = { selectedIndex };
  $$unsubscribe_listRef();
  return `${validate_component(Render, "Render").$$render($$result, Object_1$1.assign({}, $$restProps, { as }, { slotProps }, { use: [...use, forwardEvents] }, { name: "TabGroup" }), {}, {
    default: () => {
      return `${slots.default ? slots.default({ ...slotProps }) : ``}`;
    }
  })}`;
});
const { Object: Object_1 } = globals;
const Tab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let myIndex;
  let selected;
  let myPanelRef;
  let propsWeControl;
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use", "disabled"]);
  let $api, $$unsubscribe_api;
  let $myPanelRef, $$unsubscribe_myPanelRef = noop, $$subscribe_myPanelRef = () => ($$unsubscribe_myPanelRef(), $$unsubscribe_myPanelRef = subscribe(myPanelRef, ($$value) => $myPanelRef = $$value), myPanelRef);
  let { as = "button" } = $$props;
  let { use = [] } = $$props;
  let { disabled = false } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let api = useTabsContext("Tab");
  $$unsubscribe_api = subscribe(api, (value) => $api = value);
  let id = `headlessui-tabs-tab-${useId()}`;
  let tabRef = null;
  if ($$props.as === void 0 && $$bindings.as && as !== void 0) $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    myIndex = tabRef ? $api.tabs.indexOf(tabRef) : -1;
    selected = myIndex === $api.selectedIndex;
    $$subscribe_myPanelRef(myPanelRef = $api.panels[myIndex]?.ref);
    propsWeControl = {
      id,
      role: "tab",
      type: resolveButtonType({ type: $$props.type, as }, tabRef),
      "aria-controls": $myPanelRef ? $api.panels[myIndex]?.id : void 0,
      "aria-selected": selected,
      tabIndex: selected ? 0 : -1,
      disabled: disabled ? true : void 0
    };
    slotProps = { selected };
    $$rendered = `${validate_component(Render, "Render").$$render(
      $$result,
      Object_1.assign({}, { ...$$restProps, ...propsWeControl }, { as }, { slotProps }, { use: [...use, forwardEvents] }, { name: "Tab" }, { el: tabRef }),
      {
        el: ($$value) => {
          tabRef = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({ ...slotProps }) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_api();
  $$unsubscribe_myPanelRef();
  return $$rendered;
});
const TabList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let propsWeControl;
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use"]);
  let $api, $$unsubscribe_api;
  let $listRef, $$unsubscribe_listRef;
  let { as = "div" } = $$props;
  let { use = [] } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let api = useTabsContext("TabList");
  $$unsubscribe_api = subscribe(api, (value) => $api = value);
  let listRef = $api.listRef;
  $$unsubscribe_listRef = subscribe(listRef, (value) => $listRef = value);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0) $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    propsWeControl = {
      role: "tablist",
      "aria-orientation": $api.orientation
    };
    slotProps = { selectedIndex: $api.selectedIndex };
    $$rendered = `${validate_component(Render, "Render").$$render(
      $$result,
      Object.assign({}, { ...$$restProps, ...propsWeControl }, { as }, { slotProps }, { use: [...use, forwardEvents] }, { name: "TabList" }, { el: $listRef }),
      {
        el: ($$value) => {
          $listRef = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({ ...slotProps }) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_api();
  $$unsubscribe_listRef();
  return $$rendered;
});
const ToggleButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selected, $$unsubscribe_selected;
  let { value } = $$props;
  let { label = void 0 } = $$props;
  let { iconOnly = false } = $$props;
  let { tooltip = void 0 } = $$props;
  let { icon = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { selectedColor = "#3b82f6" } = $$props;
  let { small = false } = $$props;
  let { light = false } = $$props;
  let { iconProps = {} } = $$props;
  let { showTooltipIcon = false } = $$props;
  let { documentationLink = void 0 } = $$props;
  let { id = void 0 } = $$props;
  const { select, selected } = getContext("ToggleButtonGroup");
  $$unsubscribe_selected = subscribe(selected, (value2) => $selected = value2);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.iconOnly === void 0 && $$bindings.iconOnly && iconOnly !== void 0) $$bindings.iconOnly(iconOnly);
  if ($$props.tooltip === void 0 && $$bindings.tooltip && tooltip !== void 0) $$bindings.tooltip(tooltip);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.selectedColor === void 0 && $$bindings.selectedColor && selectedColor !== void 0) $$bindings.selectedColor(selectedColor);
  if ($$props.small === void 0 && $$bindings.small && small !== void 0) $$bindings.small(small);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0) $$bindings.light(light);
  if ($$props.iconProps === void 0 && $$bindings.iconProps && iconProps !== void 0) $$bindings.iconProps(iconProps);
  if ($$props.showTooltipIcon === void 0 && $$bindings.showTooltipIcon && showTooltipIcon !== void 0) $$bindings.showTooltipIcon(showTooltipIcon);
  if ($$props.documentationLink === void 0 && $$bindings.documentationLink && documentationLink !== void 0) $$bindings.documentationLink(documentationLink);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  $$unsubscribe_selected();
  return `${validate_component(Popover, "Popover").$$render(
    $$result,
    {
      notClickable: true,
      class: twMerge("flex", disabled ? "cursor-not-allowed" : "cursor-pointer"),
      disablePopup: tooltip === void 0,
      disappearTimeout: 0,
      documentationLink
    },
    {},
    {
      text: () => {
        return `${escape(tooltip)} `;
      },
      default: () => {
        return `<div${add_attribute("id", id, 0)} class="flex">${validate_component(Tab, "Tab").$$render(
          $$result,
          {
            disabled,
            class: twMerge(
              " rounded-md transition-all text-xs flex gap-1 flex-row items-center",
              small ? "px-1.5 py-0.5 text-2xs" : "px-2 py-1",
              light ? "font-medium" : "",
              $selected === value ? "bg-surface shadow-md" : "bg-surface-secondary hover:bg-surface-hover",
              $$props.class
            )
          },
          {},
          {
            default: () => {
              return `${icon ? `${validate_component(icon || missing_component, "svelte:component").$$render(
                $$result,
                Object.assign(
                  {},
                  { size: 14 },
                  {
                    color: $selected === value ? selectedColor : "#9CA3AF"
                  },
                  iconProps
                ),
                {},
                {}
              )}` : ``} ${label && !iconOnly ? `${escape(label)}` : ``} ${showTooltipIcon ? `${validate_component(Info, "Info").$$render($$result, { size: 14, class: "text-gray-400" }, {}, {})}` : ``}`;
            }
          }
        )}</div>`;
      }
    }
  )}`;
});
const ToggleButtonGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedContent, $$unsubscribe_selectedContent;
  let { selected } = $$props;
  let { noWFull = false } = $$props;
  let { disabled = false } = $$props;
  let { tabListClass = "" } = $$props;
  const dispatch = createEventDispatcher();
  const selectedContent = writable(selected);
  $$unsubscribe_selectedContent = subscribe(selectedContent, (value) => $selectedContent = value);
  function setSelected(selected2) {
    if ($selectedContent != selected2) {
      selectedContent.set(selected2);
    }
  }
  setContext("ToggleButtonGroup", {
    selected: selectedContent,
    select: (value) => {
      selectedContent.set(value);
      selected = value;
      dispatch("selected", value);
    }
  });
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0) $$bindings.selected(selected);
  if ($$props.noWFull === void 0 && $$bindings.noWFull && noWFull !== void 0) $$bindings.noWFull(noWFull);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.tabListClass === void 0 && $$bindings.tabListClass && tabListClass !== void 0) $$bindings.tabListClass(tabListClass);
  {
    setSelected(selected);
  }
  $$unsubscribe_selectedContent();
  return `${validate_component(TabGroup, "TabGroup").$$render(
    $$result,
    {
      class: twMerge(`h-8 flex ${noWFull ? "" : "w-full"} ${disabled ? "disabled" : ""}`, $$props.class)
    },
    {},
    {
      default: () => {
        return `${validate_component(TabList, "TabList").$$render(
          $$result,
          {
            class: twMerge("flex bg-surface-secondary rounded-md p-0.5 gap-1 h-full ", tabListClass)
          },
          {},
          {
            default: () => {
              return `${slots.default ? slots.default({}) : ``}`;
            }
          }
        )}`;
      }
    }
  )}`;
});
export {
  ToggleButtonGroup as T,
  ToggleButton as a,
  Tab as b
};
