import { c as create_ssr_component, t as compute_rest_props, B as get_current_component, s as subscribe, u as setContext, v as validate_component, h as getContext, n as noop, b as add_attribute } from "./ssr.js";
import { f as forwardEventsBuilder, u as usePopoverContext, a as useOpenClosed, S as State, P as PopoverStates, b as focusIn, F as Focus, R as Render, c as Features, d as usePopoverGroupContext, e as Popover } from "./common.js";
import { w as writable } from "./index.js";
import { E as resolveButtonType, T as TransitionRoot } from "./toast.js";
import { C as ConditionalPortal } from "./DrawerContent.js";
const POPOVER_PANEL_CONTEXT_NAME = "headlessui-popover-panel-context";
function usePopoverPanelContext() {
  return getContext(POPOVER_PANEL_CONTEXT_NAME);
}
const PopoverPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let visible;
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use", "focus"]);
  let $api, $$unsubscribe_api;
  let $$unsubscribe_apiButton;
  let $panelStore, $$unsubscribe_panelStore;
  let $openClosedState, $$unsubscribe_openClosedState;
  let { as = "div" } = $$props;
  let { use = [] } = $$props;
  let { focus = false } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let api = usePopoverContext("PopoverPanel");
  $$unsubscribe_api = subscribe(api, (value) => $api = value);
  setContext(POPOVER_PANEL_CONTEXT_NAME, $api.panelId);
  let panelStore = $api.panel;
  $$unsubscribe_panelStore = subscribe(panelStore, (value) => $panelStore = value);
  let apiButton = $api.button;
  $$unsubscribe_apiButton = subscribe(apiButton, (value) => value);
  let openClosedState = useOpenClosed();
  $$unsubscribe_openClosedState = subscribe(openClosedState, (value) => $openClosedState = value);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0) $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0) $$bindings.focus(focus);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    visible = openClosedState !== void 0 ? $openClosedState === State.Open : $api.popoverState === PopoverStates.Open;
    {
      (() => {
        if (!focus) return;
        if ($api.popoverState !== PopoverStates.Open) return;
        if (!$panelStore) return;
        let activeElement = document.activeElement;
        if ($panelStore.contains(activeElement)) return;
        focusIn($panelStore, Focus.First);
      })();
    }
    slotProps = {
      open: $api.popoverState === PopoverStates.Open,
      close: $api.close
    };
    $$rendered = ` ${validate_component(Render, "Render").$$render(
      $$result,
      Object.assign(
        {},
        $$restProps,
        { id: $api.panelId },
        { as },
        { slotProps },
        { use: [...use, forwardEvents] },
        { name: "PopoverPanel" },
        { visible },
        {
          features: Features.RenderStrategy | Features.Static
        },
        { el: $panelStore }
      ),
      {
        el: ($$value) => {
          $panelStore = $$value;
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
  $$unsubscribe_apiButton();
  $$unsubscribe_panelStore();
  $$unsubscribe_openClosedState();
  return $$rendered;
});
const PopoverButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let type;
  let propsWeControl;
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use", "disabled"]);
  let $api, $$unsubscribe_api;
  let $apiPanel, $$unsubscribe_apiPanel;
  let $ourStore, $$unsubscribe_ourStore = noop, $$subscribe_ourStore = () => ($$unsubscribe_ourStore(), $$unsubscribe_ourStore = subscribe(ourStore, ($$value) => $ourStore = $$value), ourStore);
  let $$unsubscribe_apiButton;
  let { as = "button" } = $$props;
  let { use = [] } = $$props;
  let { disabled = false } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let api = usePopoverContext("PopoverButton");
  $$unsubscribe_api = subscribe(api, (value) => $api = value);
  let apiButton = $api.button;
  $$unsubscribe_apiButton = subscribe(apiButton, (value) => value);
  let ourStore = apiButton;
  $$subscribe_ourStore();
  let groupContext = usePopoverGroupContext();
  groupContext?.closeOthers;
  let panelContext = usePopoverPanelContext();
  let isWithinPanel = panelContext === null ? false : panelContext === $api.panelId;
  if (isWithinPanel) {
    $$subscribe_ourStore(ourStore = writable());
  }
  let apiPanel = $api.panel;
  $$unsubscribe_apiPanel = subscribe(apiPanel, (value) => $apiPanel = value);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0) $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    type = resolveButtonType({ type: $$props.type, as }, $ourStore);
    propsWeControl = isWithinPanel ? { type } : {
      id: $api.buttonId,
      type,
      "aria-expanded": disabled ? void 0 : $api.popoverState === PopoverStates.Open,
      "aria-controls": $apiPanel ? $api.panelId : void 0,
      disabled: disabled ? true : void 0
    };
    slotProps = {
      open: $api.popoverState === PopoverStates.Open
    };
    $$rendered = ` ${validate_component(Render, "Render").$$render(
      $$result,
      Object.assign({}, $$restProps, propsWeControl, { as }, { slotProps }, { use: [...use, forwardEvents] }, { name: "PopoverButton" }, { el: $ourStore }),
      {
        el: ($$value) => {
          $ourStore = $$value;
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
  $$unsubscribe_apiPanel();
  $$unsubscribe_ourStore();
  $$unsubscribe_apiButton();
  return $$rendered;
});
const Popup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { floatingConfig = {
    strategy: "absolute",
    placement: "bottom-start"
  } } = $$props;
  let { containerClasses = "rounded-lg shadow-md border p-4 bg-surface" } = $$props;
  let { blockOpen = false } = $$props;
  let { shouldUsePortal = true } = $$props;
  if ($$props.floatingConfig === void 0 && $$bindings.floatingConfig && floatingConfig !== void 0) $$bindings.floatingConfig(floatingConfig);
  if ($$props.containerClasses === void 0 && $$bindings.containerClasses && containerClasses !== void 0) $$bindings.containerClasses(containerClasses);
  if ($$props.blockOpen === void 0 && $$bindings.blockOpen && blockOpen !== void 0) $$bindings.blockOpen(blockOpen);
  if ($$props.shouldUsePortal === void 0 && $$bindings.shouldUsePortal && shouldUsePortal !== void 0) $$bindings.shouldUsePortal(shouldUsePortal);
  return `${validate_component(Popover, "Popover").$$render($$result, { class: "leading-none" }, {}, {
    default: () => {
      return `${validate_component(PopoverButton, "PopoverButton").$$render($$result, {}, {}, {
        default: () => {
          return `<div>${slots.button ? slots.button({}) : ``}</div>`;
        }
      })} ${validate_component(ConditionalPortal, "ConditionalPortal").$$render($$result, { condition: shouldUsePortal }, {}, {
        default: () => {
          return `<div class="z5000">${validate_component(TransitionRoot, "Transition").$$render(
            $$result,
            {
              show: blockOpen || void 0,
              enter: "transition ease-out duration-200",
              enterFrom: "opacity-0 translate-y-1",
              enterTo: "opacity-100 translate-y-0",
              leave: "transition ease-in duration-150",
              leaveFrom: "opacity-100 translate-y-0",
              leaveTo: "opacity-0 translate-y-1"
            },
            {},
            {
              default: () => {
                return `${validate_component(PopoverPanel, "PopoverPanel").$$render($$result, { static: blockOpen }, {}, {
                  default: ({ close }) => {
                    return `<div${add_attribute("class", containerClasses, 0)}>${slots.default ? slots.default({ close }) : ``}</div>`;
                  }
                })}`;
              }
            }
          )}</div>`;
        }
      })}`;
    }
  })}`;
});
export {
  Popup as P
};
