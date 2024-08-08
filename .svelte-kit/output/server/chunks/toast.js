import { c as create_ssr_component, v as validate_component, t as compute_rest_props, B as get_current_component, s as subscribe, n as noop, o as onDestroy, d as createEventDispatcher, u as setContext, p as compute_slots, e as escape, b as add_attribute, w as spread, y as escape_attribute_value, x as escape_object, q as missing_component, f as each } from "./ssr.js";
import { t as toast } from "./SvelteToast.svelte_svelte_type_style_lang.js";
import { f as forwardEventsBuilder, i as useMenuContext, j as MenuStates, R as Render, h as useId, a as useOpenClosed, S as State, c as Features, k as useTransitionContext, l as useParentNesting, T as TreeStates, N as NESTING_CONTEXT_NAME, m as useOpenClosedProvider, n as RenderStrategy, o as match, p as useNesting, q as TRANSITION_CONTEXT_NAME, M as Menu, B as ButtonType } from "./common.js";
import { twMerge } from "tailwind-merge";
import { w as writable } from "./index.js";
import { I as Icon } from "./Icon.js";
import YAML from "yaml";
import { minimatch } from "minimatch";
import { L as Loader_2 } from "./loader-2.js";
const Check_circle_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "m9 12 2 2 4-4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "check-circle-2" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Chevron_down = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m6 9 6 6 6-6" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "chevron-down" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const X_circle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "m15 9-6 6" }],
    ["path", { "d": "m9 9 6 6" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "x-circle" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
function resolveButtonType(props, ref) {
  if (props.type)
    return props.type;
  let tag = props.as ?? "button";
  if (typeof tag === "string" && tag.toLowerCase() === "button")
    return "button";
  if (ref && ref instanceof HTMLButtonElement)
    return "button";
  return void 0;
}
const MenuButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let buttonStore;
  let itemsStore;
  let propsWeControl;
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use", "disabled"]);
  let $api, $$unsubscribe_api;
  let $itemsStore, $$unsubscribe_itemsStore = noop, $$subscribe_itemsStore = () => ($$unsubscribe_itemsStore(), $$unsubscribe_itemsStore = subscribe(itemsStore, ($$value) => $itemsStore = $$value), itemsStore);
  let $buttonStore, $$unsubscribe_buttonStore = noop, $$subscribe_buttonStore = () => ($$unsubscribe_buttonStore(), $$unsubscribe_buttonStore = subscribe(buttonStore, ($$value) => $buttonStore = $$value), buttonStore);
  let { as = "button" } = $$props;
  let { use = [] } = $$props;
  let { disabled = false } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  const api = useMenuContext("MenuButton");
  $$unsubscribe_api = subscribe(api, (value) => $api = value);
  const id = `headlessui-menu-button-${useId()}`;
  if ($$props.as === void 0 && $$bindings.as && as !== void 0) $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$subscribe_buttonStore(buttonStore = $api.buttonStore);
    $$subscribe_itemsStore(itemsStore = $api.itemsStore);
    propsWeControl = {
      id,
      type: resolveButtonType({ type: $$props.type, as }, $buttonStore),
      disabled: disabled ? true : void 0,
      "aria-haspopup": true,
      "aria-controls": $itemsStore?.id,
      "aria-expanded": disabled ? void 0 : $api.menuState === MenuStates.Open
    };
    slotProps = { open: $api.menuState === MenuStates.Open };
    $$rendered = `${validate_component(Render, "Render").$$render(
      $$result,
      Object.assign({}, { ...$$restProps, ...propsWeControl }, { as }, { slotProps }, { use: [...use, forwardEvents] }, { name: "MenuButton" }, { el: $buttonStore }),
      {
        el: ($$value) => {
          $buttonStore = $$value;
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
  $$unsubscribe_itemsStore();
  $$unsubscribe_buttonStore();
  return $$rendered;
});
function treeWalker({ container, accept, walk, enabled }) {
  let root = container;
  if (!root)
    return;
  if (enabled !== void 0 && !enabled)
    return;
  let acceptNode = Object.assign((node) => accept(node), {
    acceptNode: accept
  });
  let walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_ELEMENT,
    acceptNode,
    // @ts-ignore-error Typescript bug thinks this can only have 3 args
    false
  );
  while (walker.nextNode())
    walk(walker.currentNode);
}
const MenuItems = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let buttonStore;
  let itemsStore;
  let visible;
  let propsWeControl;
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use"]);
  let $api, $$unsubscribe_api;
  let $buttonStore, $$unsubscribe_buttonStore = noop, $$subscribe_buttonStore = () => ($$unsubscribe_buttonStore(), $$unsubscribe_buttonStore = subscribe(buttonStore, ($$value) => $buttonStore = $$value), buttonStore);
  let $itemsStore, $$unsubscribe_itemsStore = noop, $$subscribe_itemsStore = () => ($$unsubscribe_itemsStore(), $$unsubscribe_itemsStore = subscribe(itemsStore, ($$value) => $itemsStore = $$value), itemsStore);
  let $openClosedState, $$unsubscribe_openClosedState;
  let { as = "div" } = $$props;
  let { use = [] } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  const api = useMenuContext("MenuItems");
  $$unsubscribe_api = subscribe(api, (value) => $api = value);
  const id = `headlessui-menu-items-${useId()}`;
  let openClosedState = useOpenClosed();
  $$unsubscribe_openClosedState = subscribe(openClosedState, (value) => $openClosedState = value);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0) $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$subscribe_buttonStore(buttonStore = $api.buttonStore);
    $$subscribe_itemsStore(itemsStore = $api.itemsStore);
    visible = openClosedState !== void 0 ? $openClosedState === State.Open : $api.menuState === MenuStates.Open;
    {
      treeWalker({
        container: $itemsStore,
        enabled: $api.menuState === MenuStates.Open,
        accept(node) {
          if (node.getAttribute("role") === "menuitem") return NodeFilter.FILTER_REJECT;
          if (node.hasAttribute("role")) return NodeFilter.FILTER_SKIP;
          return NodeFilter.FILTER_ACCEPT;
        },
        walk(node) {
          node.setAttribute("role", "none");
        }
      });
    }
    propsWeControl = {
      "aria-activedescendant": $api.activeItemIndex === null ? void 0 : $api.items[$api.activeItemIndex]?.id,
      "aria-labelledby": $buttonStore?.id,
      id,
      role: "menu",
      tabIndex: 0
    };
    slotProps = { open: $api.menuState === MenuStates.Open };
    $$rendered = `${validate_component(Render, "Render").$$render(
      $$result,
      Object.assign(
        {},
        { ...$$restProps, ...propsWeControl },
        { as },
        { slotProps },
        { use: [...use, forwardEvents] },
        { name: "MenuItems" },
        { visible },
        {
          features: Features.RenderStrategy | Features.Static
        },
        { el: $itemsStore }
      ),
      {
        el: ($$value) => {
          $itemsStore = $$value;
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
  $$unsubscribe_buttonStore();
  $$unsubscribe_itemsStore();
  $$unsubscribe_openClosedState();
  return $$rendered;
});
const MenuItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active;
  let buttonStore;
  let propsWeControl;
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use", "disabled"]);
  let $api, $$unsubscribe_api;
  let $$unsubscribe_buttonStore = noop, $$subscribe_buttonStore = () => ($$unsubscribe_buttonStore(), $$unsubscribe_buttonStore = subscribe(buttonStore, ($$value) => $$value), buttonStore);
  let { as = "a" } = $$props;
  let { use = [] } = $$props;
  let { disabled = false } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component(), [
    {
      name: "click",
      shouldExclude: () => disabled
    }
  ]);
  const api = useMenuContext("MenuItem");
  $$unsubscribe_api = subscribe(api, (value) => $api = value);
  const id = `headlessui-menu-item-${useId()}`;
  let elementRef;
  onDestroy(() => {
    $api.unregisterItem(id);
  });
  if ($$props.as === void 0 && $$bindings.as && as !== void 0) $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    active = $api.activeItemIndex !== null ? $api.items[$api.activeItemIndex].id === id : false;
    $$subscribe_buttonStore(buttonStore = $api.buttonStore);
    elementRef?.textContent?.toLowerCase().trim() || "";
    propsWeControl = {
      id,
      role: "menuitem",
      tabIndex: disabled === true ? void 0 : -1,
      "aria-disabled": disabled === true ? true : void 0
    };
    slotProps = { active, disabled };
    $$rendered = `${validate_component(Render, "Render").$$render(
      $$result,
      Object.assign({}, { ...$$restProps, ...propsWeControl }, { use: [...use, forwardEvents] }, { as }, { slotProps }, { name: "MenuItem" }, { el: elementRef }),
      {
        el: ($$value) => {
          elementRef = $$value;
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
  $$unsubscribe_buttonStore();
  return $$rendered;
});
const TransitionChild = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let strategy;
  let classes;
  let $$restProps = compute_rest_props($$props, [
    "as",
    "use",
    "enter",
    "enterFrom",
    "enterTo",
    "entered",
    "leave",
    "leaveFrom",
    "leaveTo"
  ]);
  let $transitionContext, $$unsubscribe_transitionContext;
  let $nestingContext, $$unsubscribe_nestingContext;
  let $$unsubscribe_nesting;
  let { as = "div" } = $$props;
  let { use = [] } = $$props;
  let { enter = "" } = $$props;
  let { enterFrom = "" } = $$props;
  let { enterTo = "" } = $$props;
  let { entered = "" } = $$props;
  let { leave = "" } = $$props;
  let { leaveFrom = "" } = $$props;
  let { leaveTo = "" } = $$props;
  const dispatch = createEventDispatcher();
  const forwardEvents = forwardEventsBuilder(get_current_component(), ["introstart", "introend", "outrostart", "outroend"]);
  let container = null;
  let transitionContext = useTransitionContext();
  $$unsubscribe_transitionContext = subscribe(transitionContext, (value) => $transitionContext = value);
  let nestingContext = useParentNesting();
  $$unsubscribe_nestingContext = subscribe(nestingContext, (value) => $nestingContext = value);
  let state = $transitionContext.initialShow || $$props.unmount !== false ? TreeStates.Visible : TreeStates.Hidden;
  let id = useId();
  let nesting = writable(useNesting(() => {
    {
      state = TreeStates.Hidden;
      $nestingContext.unregister(id);
      dispatch("outroend");
    }
  }));
  $$unsubscribe_nesting = subscribe(nesting, (value) => value);
  function splitClasses(classes2 = "") {
    return classes2.split(" ").filter((className) => className.trim().length > 1);
  }
  setContext(NESTING_CONTEXT_NAME, nesting);
  let openClosedState = writable(State.Closed);
  useOpenClosedProvider(openClosedState);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0) $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.enter === void 0 && $$bindings.enter && enter !== void 0) $$bindings.enter(enter);
  if ($$props.enterFrom === void 0 && $$bindings.enterFrom && enterFrom !== void 0) $$bindings.enterFrom(enterFrom);
  if ($$props.enterTo === void 0 && $$bindings.enterTo && enterTo !== void 0) $$bindings.enterTo(enterTo);
  if ($$props.entered === void 0 && $$bindings.entered && entered !== void 0) $$bindings.entered(entered);
  if ($$props.leave === void 0 && $$bindings.leave && leave !== void 0) $$bindings.leave(leave);
  if ($$props.leaveFrom === void 0 && $$bindings.leaveFrom && leaveFrom !== void 0) $$bindings.leaveFrom(leaveFrom);
  if ($$props.leaveTo === void 0 && $$bindings.leaveTo && leaveTo !== void 0) $$bindings.leaveTo(leaveTo);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    strategy = $$props.unmount === false ? RenderStrategy.Hidden : RenderStrategy.Unmount;
    {
      {
        (() => {
          if (strategy !== RenderStrategy.Hidden) return;
          if (!id) return;
          if ($transitionContext.show && state !== TreeStates.Visible) {
            state = TreeStates.Visible;
            return;
          }
          match(state, {
            [TreeStates.Hidden]: () => $nestingContext.unregister(id),
            [TreeStates.Visible]: () => $nestingContext.register(id)
          });
        })();
      }
    }
    splitClasses(enter);
    splitClasses(enterFrom);
    splitClasses(enterTo);
    splitClasses(entered);
    splitClasses(leave);
    splitClasses(leaveFrom);
    splitClasses(leaveTo);
    {
      openClosedState.set(match(state, {
        [TreeStates.Visible]: State.Open,
        [TreeStates.Hidden]: State.Closed
      }));
    }
    classes = `${$$props.class || ""} ${entered}`;
    $$rendered = `${validate_component(Render, "Render").$$render(
      $$result,
      Object.assign({}, $$restProps, { as }, { use: [...use, forwardEvents] }, { slotProps: {} }, { name: "TransitionChild" }, { class: classes }, { visible: state === TreeStates.Visible }, { features: Features.RenderStrategy }, { el: container }),
      {
        el: ($$value) => {
          container = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_transitionContext();
  $$unsubscribe_nestingContext();
  $$unsubscribe_nesting();
  return $$rendered;
});
const TransitionRoot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["as", "use", "show", "appear"]);
  let $$unsubscribe_nestingBag;
  let $openClosedState, $$unsubscribe_openClosedState;
  const forwardEvents = forwardEventsBuilder(get_current_component(), ["introstart", "introend", "outrostart", "outroend"]);
  let { as = "div" } = $$props;
  let { use = [] } = $$props;
  let { show = void 0 } = $$props;
  let { appear = false } = $$props;
  let openClosedState = useOpenClosed();
  $$unsubscribe_openClosedState = subscribe(openClosedState, (value) => $openClosedState = value);
  function computeShow2(show2, openClosedState2) {
    if (show2 === void 0 && openClosedState2 !== void 0) {
      return match(openClosedState2, {
        [State.Open]: true,
        [State.Closed]: false
      });
    }
    return show2;
  }
  let shouldShow = computeShow2(show, openClosedState !== void 0 ? $openClosedState : void 0);
  let initialShow = shouldShow;
  let state = shouldShow ? TreeStates.Visible : TreeStates.Hidden;
  let nestingBag = writable(useNesting(() => {
    state = TreeStates.Hidden;
  }));
  $$unsubscribe_nestingBag = subscribe(nestingBag, (value) => value);
  let initial = true;
  let transitionBag = writable();
  setContext(NESTING_CONTEXT_NAME, nestingBag);
  setContext(TRANSITION_CONTEXT_NAME, transitionBag);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0) $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.appear === void 0 && $$bindings.appear && appear !== void 0) $$bindings.appear(appear);
  {
    {
      shouldShow = computeShow2(show, openClosedState !== void 0 ? $openClosedState : void 0);
      if (shouldShow !== true && shouldShow !== false) {
        throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
      }
    }
  }
  {
    transitionBag.set({
      show: !!shouldShow,
      appear: appear || !initial,
      initialShow: !!initialShow
    });
  }
  $$unsubscribe_nestingBag();
  $$unsubscribe_openClosedState();
  return `${state === TreeStates.Visible || $$props.unmount === false ? `${validate_component(TransitionChild, "TransitionChild").$$render($$result, Object.assign({}, $$restProps, { as }, { use: [...use, forwardEvents] }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : ``}`;
});
const Portal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { target = "body" } = $$props;
  if ($$props.target === void 0 && $$bindings.target && target !== void 0) $$bindings.target(target);
  return `<div hidden>${slots.default ? slots.default({}) : ``}</div>`;
});
const ButtonDropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { hasPadding = true } = $$props;
  let { target = "body" } = $$props;
  let { disabled = false } = $$props;
  if ($$props.hasPadding === void 0 && $$bindings.hasPadding && hasPadding !== void 0) $$bindings.hasPadding(hasPadding);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0) $$bindings.target(target);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  return `${validate_component(Menu, "Menu").$$render(
    $$result,
    {
      as: "div",
      class: "relative hover:z-50 flex w-full h-full"
    },
    {},
    {
      default: ({ open }) => {
        return `<span>${validate_component(MenuButton, "MenuButton").$$render(
          $$result,
          {
            class: twMerge("h-full w-full flex flex-row gap-2 items-center", hasPadding ? "px-2" : ""),
            disabled
          },
          {},
          {
            default: () => {
              return `${$$slots.buttonReplacement ? `${slots.buttonReplacement ? slots.buttonReplacement({}) : ``}` : `${slots.label ? slots.label({}) : ``} ${validate_component(Chevron_down, "ChevronDown").$$render($$result, { class: "w-5 h-5" }, {}, {})}`}`;
            }
          }
        )}</span> ${validate_component(Portal, "Portal").$$render($$result, { target }, {}, {
          default: () => {
            return `<div class="z-[6000]">${validate_component(TransitionRoot, "Transition").$$render(
              $$result,
              {
                show: open,
                enter: "transition ease-out duration-[25ms]",
                enterFrom: "transform opacity-0 scale-95",
                enterTo: "transform opacity-100 scale-100",
                leave: "transition ease-in duration-[25ms]",
                leaveFrom: "transform opacity-100 scale-100",
                leaveTo: "transform opacity-0 scale-95"
              },
              {},
              {
                default: () => {
                  return `${validate_component(MenuItems, "MenuItems").$$render(
                    $$result,
                    {
                      class: "absolute border right-0 z-50 w-56 origin-top-right top-1 rounded-md bg-surface shadow-md focus:outline-none"
                    },
                    {},
                    {
                      default: () => {
                        return `<div class="my-1">${slots.items ? slots.items({}) : ``}</div>`;
                      }
                    }
                  )}`;
                }
              }
            )}</div>`;
          }
        })}`;
      }
    }
  )}`;
});
function validateUsername(username) {
  if (username != "" && !/^[a-zA-Z]\w+$/.test(username)) {
    return "username can only contain letters and numbers and must start with a letter";
  } else {
    return "";
  }
}
function parseQueryParams(url) {
  if (!url) return {};
  const index = url.indexOf("?");
  if (index == -1) return {};
  const paramArr = url?.slice(index + 1)?.split("&");
  const params = {};
  paramArr?.map((param) => {
    const [key, val] = param.split("=");
    params[key] = decodeURIComponent(val);
  });
  return params;
}
function displayDateOnly(dateString) {
  const date = new Date(dateString ?? "");
  if (date.toString() === "Invalid Date") {
    return "";
  } else {
    return date.toLocaleDateString([], {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
  }
}
function subtractDaysFromDateString(dateString, days) {
  if (dateString == void 0) {
    return void 0;
  }
  let date = new Date(dateString);
  date.setDate(date.getDate() - days);
  return date.toISOString();
}
function displayDate(dateString, displaySecond = false, displayDate2 = true) {
  const date = new Date(dateString ?? "");
  if (date.toString() === "Invalid Date") {
    return "";
  } else {
    return `${date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: displaySecond ? "2-digit" : void 0
    })}${displayDate2 ? ` ${date.getDate()}/${date.getMonth() + 1}` : ""}`;
  }
}
function displayTime(dateString) {
  const date = new Date(dateString ?? "");
  if (date.toString() === "Invalid Date") {
    return "";
  } else {
    return `${date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    })}.${date.getMilliseconds()}`;
  }
}
function displaySize(sizeInBytes) {
  if (sizeInBytes === void 0) {
    return void 0;
  }
  const units = ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
  let size = sizeInBytes;
  let unit_idx = 0;
  while (unit_idx < units.length - 1 && size > 1024) {
    size /= 1024;
    unit_idx += 1;
  }
  return `${size.toFixed(1)}${units[unit_idx]}`;
}
function msToSec(ms, maximumFractionDigits) {
  if (ms === void 0) return "?";
  return (ms / 1e3).toLocaleString(void 0, {
    maximumFractionDigits: maximumFractionDigits ?? 3,
    minimumFractionDigits: maximumFractionDigits
  });
}
function msToReadableTime(ms) {
  if (ms === void 0) return "?";
  const seconds = Math.floor(ms / 1e3);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  if (days > 0) {
    return `${days}d ${hours % 24}h ${minutes % 60}m ${seconds % 60}s`;
  } else if (hours > 0) {
    return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
  } else if (minutes > 0) {
    return `${minutes}m ${seconds % 60}s`;
  } else {
    return `${msToSec(ms)}s`;
  }
}
function truncateHash(hash) {
  if (hash.length >= 6) {
    return hash.substr(hash.length - 6);
  } else {
    return hash;
  }
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const DELETE = "delete";
function emptySchema() {
  return {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    properties: {},
    required: [],
    type: "object"
  };
}
function emptyString(str) {
  return str === void 0 || str === null || str === "";
}
function defaultIfEmptyString(str, dflt) {
  return emptyString(str) ? dflt : str;
}
function allTrue(dict) {
  return Object.values(dict).every(Boolean);
}
function encodeState(state) {
  return btoa(encodeURIComponent(JSON.stringify(state)));
}
function decodeState(query) {
  try {
    return JSON.parse(decodeURIComponent(atob(query)));
  } catch (e) {
    sendUserToast("Impossible to parse state", true);
    return {};
  }
}
function groupBy(items, toGroup, toSort, dflts = []) {
  let r = /* @__PURE__ */ new Map();
  for (const dflt of dflts) {
    r.set(dflt, []);
  }
  items.forEach((sc) => {
    let section = toGroup(sc);
    if (r.has(section)) {
      let arr = r.get(section);
      arr.push(sc);
      arr.sort((a, b) => toSort(a).localeCompare(toSort(b)));
    } else {
      r.set(section, [sc]);
    }
  });
  return [...r.entries()].sort((s1, s2) => {
    let n1 = s1[0];
    let n2 = s2[0];
    if (n1 > n2) {
      return 1;
    } else if (n1 < n2) {
      return -1;
    } else {
      return 0;
    }
  });
}
function removeMarkdown(text) {
  return text.replace(/[[\*|\-|#\_]/g, "");
}
function truncate(s, n, suffix = "...") {
  if (!s) {
    return "";
  }
  if (s.length <= n) {
    return s;
  } else {
    return s.substring(0, n) + suffix;
  }
}
function truncateRev(s, n, prefix = "...") {
  if (!s) {
    return prefix;
  }
  if (s.length <= n) {
    return s;
  } else {
    return prefix + s.substring(s.length - n, s.length);
  }
}
function setInputCat(type, format, itemsType, enum_, contentEncoding) {
  if (type === "number" || type === "integer") {
    return "number";
  } else if (type === "boolean") {
    return "boolean";
  } else if (type == "array" && itemsType != void 0) {
    return "list";
  } else if (type == "object" && format?.startsWith("resource")) {
    return "resource-object";
  } else if (type == "object" && format?.startsWith("dynselect-")) {
    return "dynselect";
  } else if (!type || type == "object" || type == "array") {
    return "object";
  } else if (type == "string" && enum_) {
    return "enum";
  } else if (type == "string" && format == "date-time") {
    return "date";
  } else if (type == "string" && format == "date") {
    return "date";
  } else if (type == "string" && format == "sql") {
    return "sql";
  } else if (type == "string" && format == "yaml") {
    return "yaml";
  } else if (type == "string" && contentEncoding == "base64") {
    return "base64";
  } else if (type == "string" && format == "email") {
    return "email";
  } else if (type == "string" && format == "currency") {
    return "currency";
  } else if (type == "oneOf") {
    return "oneOf";
  } else {
    return "string";
  }
}
function formatCron(inp) {
  let splitted = inp.split(" ");
  splitted = splitted.filter(String);
  if (6 - splitted.length > 0) {
    return splitted.concat(Array(6 - splitted.length).fill("*")).join(" ");
  } else {
    return inp;
  }
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
async function copyToClipboard(value, sendToast = true) {
  if (!value) {
    return false;
  }
  let success = false;
  if (navigator?.clipboard && window.isSecureContext) {
    success = await navigator.clipboard.writeText(value).then(() => true).catch(() => false);
  } else {
    const textArea = document.createElement("textarea");
    textArea.value = value;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      success = true;
    } catch (error) {
    } finally {
      textArea.remove();
    }
  }
  sendToast && sendUserToast(success ? "Copied to clipboard!" : "Couldn't copy to clipboard", !success);
  return success;
}
function pluralize(quantity, word, customPlural) {
  if (quantity <= 1) {
    return `${quantity} ${word}`;
  } else {
    return `${quantity} ${word}s`;
  }
}
function capitalize(word) {
  return word ? word.charAt(0).toUpperCase() + word.slice(1) : "";
}
function addWhitespaceBeforeCapitals(word) {
  if (!word) {
    return "";
  }
  return word.replace(/([A-Z])/g, " $1").trim();
}
function isObject(obj) {
  return obj != null && typeof obj === "object";
}
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}
function isMac() {
  return navigator.userAgent.indexOf("Mac OS X") !== -1;
}
function getModifierKey() {
  return isMac() ? "⌘" : "Ctrl+";
}
function isValidHexColor(color) {
  return /^#(([A-F0-9]{2}){3,4}|[A-F0-9]{3})$/i.test(color);
}
function sortObject(o) {
  return Object.keys(o).sort().reduce((obj, key) => {
    obj[key] = o[key];
    return obj;
  }, {});
}
function generateRandomString(len = 24) {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
function deepMergeWithPriority(target, source) {
  if (typeof target !== "object" || typeof source !== "object") {
    return source;
  }
  const merged = { ...target };
  for (const key in source) {
    if (source.hasOwnProperty(key) && merged?.hasOwnProperty(key)) {
      if (target?.hasOwnProperty(key)) {
        merged[key] = deepMergeWithPriority(target[key], source[key]);
      } else {
        merged[key] = source[key];
      }
    } else {
      if (merged) {
        merged[key] = source[key];
      }
    }
  }
  return merged;
}
function canWrite(path, extra_perms, user) {
  if (user?.is_admin || user?.is_super_admin) {
    return true;
  }
  let keys = Object.keys(extra_perms);
  if (!user) {
    return false;
  }
  if (isObviousOwner(path, user)) {
    return true;
  }
  let userOwner = `u/${user.username}`;
  if (keys.includes(userOwner) && extra_perms[userOwner]) {
    return true;
  }
  if (user.pgroups.findIndex((x) => keys.includes(x) && extra_perms[x]) != -1) {
    return true;
  }
  if (user.folders.findIndex((x) => path.startsWith("f/" + x + "/") && user.folders[x]) != -1) {
    return true;
  }
  return false;
}
function isOwner(path, user, workspace) {
  if (!user || !workspace) {
    return false;
  }
  if (user.is_super_admin) {
    return true;
  }
  if (workspace == "admin") {
    return false;
  } else if (user.is_admin) {
    return true;
  } else if (path.startsWith("u/" + user.username + "/")) {
    return true;
  } else if (path.startsWith("f/")) {
    return user.folders_owners.some((x) => path.startsWith("f/" + x + "/"));
  } else {
    return false;
  }
}
function isObviousOwner(path, user) {
  if (!user) {
    return false;
  }
  if (user.is_admin || user.is_super_admin) {
    return true;
  }
  let userOwner = `u/${user.username}`;
  if (path.startsWith(userOwner)) {
    return true;
  }
  if (user.pgroups.findIndex((x) => path.startsWith(x)) != -1) {
    return true;
  }
  if (user.folders.findIndex((x) => path.startsWith("f/" + x)) != -1) {
    return true;
  }
  return false;
}
function extractCustomProperties(styleStr) {
  let properties = styleStr.split(";");
  let customProperties = properties.filter((property) => property.trim().startsWith("--"));
  let customStyleStr = customProperties.join(";");
  return customStyleStr;
}
function computeSharableHash(args) {
  let nargs = {};
  for (let k in args) {
    let v = args[k];
    if (v !== void 0) {
      let size = roughSizeOfObject(v) > 1e6;
      if (size) {
        console.error(`Value at key ${k} too big (${size}) to be shared`);
        return "";
      }
      nargs[k] = JSON.stringify(v);
    }
  }
  try {
    let r = new URLSearchParams(nargs).toString();
    return r.length > 1e6 ? "" : r;
  } catch (e) {
    console.error("Error computing sharable hash", e);
    return "";
  }
}
function toCamel(s) {
  return s.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace("-", "").replace("_", "");
  });
}
function cleanExpr(expr) {
  if (!expr) {
    return "";
  }
  return expr.split("\n").filter((x) => x != "" && !x.startsWith(`import `)).join("\n");
}
const dynamicTemplateRegex = new RegExp(/\$\{(.*)\}/);
function isCodeInjection(expr) {
  if (!expr) {
    return false;
  }
  return dynamicTemplateRegex.test(expr);
}
async function tryEvery({
  tryCode,
  timeoutCode,
  interval,
  timeout
}) {
  const times = Math.floor(timeout / interval);
  let i = 0;
  while (i < times) {
    await sleep(interval);
    try {
      await tryCode();
      break;
    } catch (err) {
    }
    i++;
  }
  if (i >= times) {
    timeoutCode();
  }
}
function roughSizeOfObject(object) {
  if (typeof object == "string") {
    return object.length * 2;
  }
  var objectList = [];
  var stack = [object];
  var bytes = 0;
  while (stack.length) {
    let value = stack.pop();
    if (typeof value === "boolean") {
      bytes += 4;
    } else if (typeof value === "string") {
      bytes += value.length * 2;
    } else if (typeof value === "number") {
      bytes += 8;
    } else if (typeof value === "object" && objectList.indexOf(value) === -1) {
      objectList.push(value);
      for (var i in value) {
        bytes += 2 * i.length;
        stack.push(value[i]);
      }
    }
  }
  return bytes;
}
function cleanValueProperties(obj) {
  if (typeof obj !== "object") {
    return obj;
  } else {
    let newObj = {};
    for (const key of Object.keys(obj)) {
      if (key !== "parent_hash" && key !== "draft" && key !== "draft_only") {
        newObj[key] = structuredClone(obj[key]);
      }
    }
    return newObj;
  }
}
function orderedJsonStringify(obj, space) {
  const allKeys = /* @__PURE__ */ new Set();
  JSON.stringify(
    obj,
    (key, value) => (value != void 0 && value != null && allKeys.add(key), value)
  );
  return JSON.stringify(obj, Array.from(allKeys).sort(), space);
}
function sortObjectKeys(obj) {
  if (obj && typeof obj === "object" && !Array.isArray(obj)) {
    const sortedObj = {};
    Object.keys(obj).sort().forEach((key) => {
      sortedObj[key] = sortObjectKeys(obj[key]);
    });
    return sortedObj;
  } else if (Array.isArray(obj)) {
    return obj.map((item) => sortObjectKeys(item));
  } else {
    return obj;
  }
}
function orderedYamlStringify(obj) {
  const sortedObj = sortObjectKeys(obj);
  return YAML.stringify(sortedObj);
}
function evalJs(expr) {
  let template = `
return function (fields) {
"use strict";
return ${expr.startsWith("return ") ? expr.substring(7) : expr}
}
`;
  let functor = Function(template);
  return functor();
}
function computeShow(argName, expr, args) {
  if (expr) {
    try {
      let r = evalJs(expr)(args ?? {});
      return r;
    } catch (e) {
      console.error(`Impossible to eval ${expr}:`, e);
      return true;
    }
  }
  return true;
}
function urlizeTokenInternal(token, formatter) {
  if (token.startsWith("http://") || token.startsWith("https://")) {
    {
      return `[${token}](${token})`;
    }
  } else {
    return token;
  }
}
function urlize(input, formatter) {
  if (!input) return "";
  return input.split("\n").map((line) => {
    return line.split(" ").map((word) => urlizeTokenInternal(word)).join(" ");
  }).join("\n");
}
function storeLocalSetting(name, value) {
  if (value != void 0) {
    localStorage.setItem(name, value);
  } else {
    localStorage.removeItem(name);
  }
}
function getLocalSetting(name) {
  try {
    return localStorage.getItem(name);
  } catch (e) {
    return void 0;
  }
}
function computeKind(enum_, contentEncoding, pattern, format) {
  if (enum_ != void 0) {
    return "enum";
  }
  if (contentEncoding == "base64") {
    return "base64";
  }
  if (pattern != void 0) {
    return "pattern";
  }
  if (format == "date-time") {
    return "date-time";
  }
  if (format != void 0 && format != "") {
    if (format?.startsWith("resource")) {
      return "resource";
    }
    return "format";
  }
  return "none";
}
function shouldDisplayPlaceholder(type, format, enum_, contentEncoding, pattern, extra) {
  if (type === "string") {
    const kind = computeKind(enum_, contentEncoding, pattern, format);
    if (kind === "format" && format) {
      const whiteList = ["email", "hostname", "ipv4", "uri", "uuid"];
      return whiteList.includes(format);
    }
    return kind === "none" || kind === "pattern";
  }
  if (type === "number" || type === "integer") {
    return extra?.["min"] === void 0 || extra?.["max"] === void 0;
  }
  return type === void 0;
}
function getSchemaFromProperties(properties) {
  return {
    properties: Object.fromEntries(Object.entries(properties).filter(([k, v]) => k !== "label")),
    required: Object.keys(properties).filter((k) => properties[k].required),
    $schema: "",
    type: "object",
    order: Object.keys(properties).filter((k) => k !== "label")
  };
}
function isDeployable(type, path, deployUiSettings) {
  if (deployUiSettings == void 0) {
    return false;
  }
  if (deployUiSettings.include_type != void 0 && !deployUiSettings.include_type.includes(type)) {
    return false;
  }
  if (deployUiSettings.include_path != void 0 && deployUiSettings.include_path.length != 0 && deployUiSettings.include_path.every((x) => !minimatch(path, x))) {
    return false;
  }
  return true;
}
const ALL_DEPLOYABLE = {
  include_path: [],
  include_type: ["script", "flow", "app", "resource", "variable", "secret"]
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let buttonClass;
  let lucideIconSize;
  let $$restProps = compute_rest_props($$props, [
    "size",
    "spacingSize",
    "color",
    "variant",
    "btnClasses",
    "wrapperClasses",
    "wrapperStyle",
    "disabled",
    "href",
    "target",
    "iconOnly",
    "loadUntilNav",
    "clickableWhileLoading",
    "element",
    "id",
    "nonCaptureEvent",
    "propagateEvent",
    "loading",
    "title",
    "style",
    "download",
    "portalTarget",
    "startIcon",
    "endIcon",
    "shortCut",
    "dropdownItems",
    "focus"
  ]);
  let { size = "md" } = $$props;
  let { spacingSize = size } = $$props;
  let { color = "blue" } = $$props;
  let { variant = "contained" } = $$props;
  let { btnClasses = "" } = $$props;
  let { wrapperClasses = "" } = $$props;
  let { wrapperStyle = "" } = $$props;
  let { disabled = false } = $$props;
  let { href = void 0 } = $$props;
  let { target = void 0 } = $$props;
  let { iconOnly = false } = $$props;
  let { loadUntilNav = false } = $$props;
  let { clickableWhileLoading = false } = $$props;
  let { element = void 0 } = $$props;
  let { id = "" } = $$props;
  let { nonCaptureEvent = false } = $$props;
  let { propagateEvent = false } = $$props;
  let { loading = false } = $$props;
  let { title = void 0 } = $$props;
  let { style = "" } = $$props;
  let { download = void 0 } = $$props;
  let { portalTarget = void 0 } = $$props;
  let { startIcon = void 0 } = $$props;
  let { endIcon = void 0 } = $$props;
  let { shortCut = void 0 } = $$props;
  let { dropdownItems = void 0 } = $$props;
  function computeDropdowns() {
    if (typeof dropdownItems === "function") {
      return dropdownItems();
    } else {
      return dropdownItems;
    }
  }
  function focus() {
    element?.focus({});
  }
  createEventDispatcher();
  const colorVariants = {
    none: { border: "", contained: "", divider: "" },
    blue: {
      border: "border-frost-500 dark:border-frost-300 hover:border-frost-700 dark:hover:border-frost-400 focus-visible:border-frost-700 bg-surface hover:bg-frost-100 dark:hover:bg-frost-900 focus-visible:bg-frost-100 focus-visible:dark:text-frost-100 dark:focus-visible:bg-frost-900 text-frost-500 dark:text-frost-300 dark:hover:text-frost-400 hover:text-frost-700 focus-visible:text-frost-700 focus-visible:ring-frost-300",
      contained: "bg-frost-500 hover:bg-frost-700 focus-visible:bg-frost-700 text-white focus-visible:ring-frost-300 dark:bg-frost-500/90 dark:hover:bg-frost-600/90",
      divider: "divide-x divide-frost-600"
    },
    marine: {
      border: "border-marine-300 dark:border-marine-200 hover:border-marine-500 dark:hover:border-marine-400 focus-visible:border-marine-500 bg-surface hover:bg-marine-500 dark:hover:bg-marine-400 focus-visible:bg-marine-100 focus-visible:dark:text-marine-50 dark:focus-visible:bg-marine-500 text-marine-50 dark:text-marine-50 dark:hover:text-marine-50 hover:text-marine-50 focus-visible:text-marine-300 focus-visible:ring-marine-200",
      contained: "bg-marine-300 hover:bg-marine-500 focus-visible:bg-marine-500 text-gray-50 focus-visible:ring-marine-200 dark:bg-marine-200 dark:hover:bg-marine-400",
      divider: "divide-x divide-marine-500"
    },
    red: {
      border: "border-red-600/60 hover:border-red-600 bg-surface hover:bg-red-100 text-red-600 hover:text-red-700 focus-visible:ring-red-300 dark:border-red-400/90 dark:text-red-400 dark:hover:border-red-400 dark:hover:bg-red-500/60 dark:hover:text-red-100",
      contained: "bg-red-600 hover:bg-red-600 text-white focus-visible:ring-red-300  dark:border-red-400/70 dark:bg-red-700/90 dark:hover:bg-red-900 dark:hover:border-red-300 dark:text-primary",
      divider: "divide-x divide-red-700"
    },
    green: {
      border: "border-green-600 hover:border-green-700 bg-surface hover:bg-green-100 text-green-600 hover:text-green-700 focus-visible:ring-green-300 dark:hover:bg-green-800 dark:border-green-400/90",
      contained: "bg-green-600 hover:bg-green-700 text-white focus-visible:ring-green-300 dark:bg-green-700/90 dark:hover:bg-green-800",
      divider: "divide-x divide-green-700"
    },
    dark: {
      border: "border-marine-300 bg-surface hover:bg-surface-hover focus-visible:bg-surface-hover text-primary hover:text-secondary focus-visible:text-secondary focus-visible:ring-surface-selected-inverse dark:border-marine-200",
      contained: "bg-marine-400 hover:bg-marine-200 focus-visible:bg-surface-hover-inverse text-primary-inverse focus-visible:ring-surface-selected-inverse dark:bg-marine-50 dark:hover:bg-marine-50/70 dark:text-primary-inverse",
      divider: "divide-x divide-gray-800 dark:divide-gray-200"
    },
    gray: {
      border: "border-gray-500 dark:border-gray-300 hover:border-gray-700 dark:hover:border-gray-400 focus-visible:border-gray-700 bg-surface hover:bg-gray-100 dark:hover:bg-gray-900 focus-visible:bg-gray-100 focus-visible:dark:text-gray-100 dark:focus-visible:bg-gray-900 text-gray-500 dark:text-gray-300 dark:hover:text-gray-400 hover:text-gray-700 focus-visible:text-gray-700 focus-visible:ring-gray-300",
      contained: "bg-gray-500 hover:bg-gray-700 focus-visible:bg-gray-700 text-white focus-visible:ring-gray-300",
      divider: "divide-x divide-gray-600"
    },
    light: {
      border: "border  bg-surface hover:bg-surface-hover focus-visible:bg-surface-hover text-primary hover:text-secondary focus-visible:text-secondary focus-visible:ring-surface-selected",
      contained: "bg-surface border-transparent hover:bg-surface-hover focus-visible:bg-surface-hover text-primary focus-visible:ring-surface-selected",
      divider: "divide-x divide-gray-200 dark:divide-gray-700"
    }
  };
  function getColorClass(color2, variant2) {
    if (color2 in colorVariants) {
      return colorVariants[color2][variant2];
    } else {
      return color2;
    }
  }
  const iconMap = {
    xs2: 14,
    xs: 14,
    sm: 16,
    md: 16,
    lg: 18,
    xl: 18
  };
  const iconOnlyPadding = {
    xs2: "m-[1px] qhd:m-[1.125px]",
    xs: "m-[1px] qhd:m-[1.125px]",
    sm: "m-[2px] qhd:m-[2.25px]",
    md: "m-[2px] qhd:m-[2.25px]",
    lg: "m-[5px] qhd:m-[5.625px]",
    xl: "m-[5px] qhd:m-[5.625px]"
  };
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.spacingSize === void 0 && $$bindings.spacingSize && spacingSize !== void 0) $$bindings.spacingSize(spacingSize);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0) $$bindings.variant(variant);
  if ($$props.btnClasses === void 0 && $$bindings.btnClasses && btnClasses !== void 0) $$bindings.btnClasses(btnClasses);
  if ($$props.wrapperClasses === void 0 && $$bindings.wrapperClasses && wrapperClasses !== void 0) $$bindings.wrapperClasses(wrapperClasses);
  if ($$props.wrapperStyle === void 0 && $$bindings.wrapperStyle && wrapperStyle !== void 0) $$bindings.wrapperStyle(wrapperStyle);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0) $$bindings.target(target);
  if ($$props.iconOnly === void 0 && $$bindings.iconOnly && iconOnly !== void 0) $$bindings.iconOnly(iconOnly);
  if ($$props.loadUntilNav === void 0 && $$bindings.loadUntilNav && loadUntilNav !== void 0) $$bindings.loadUntilNav(loadUntilNav);
  if ($$props.clickableWhileLoading === void 0 && $$bindings.clickableWhileLoading && clickableWhileLoading !== void 0) $$bindings.clickableWhileLoading(clickableWhileLoading);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0) $$bindings.element(element);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.nonCaptureEvent === void 0 && $$bindings.nonCaptureEvent && nonCaptureEvent !== void 0) $$bindings.nonCaptureEvent(nonCaptureEvent);
  if ($$props.propagateEvent === void 0 && $$bindings.propagateEvent && propagateEvent !== void 0) $$bindings.propagateEvent(propagateEvent);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.download === void 0 && $$bindings.download && download !== void 0) $$bindings.download(download);
  if ($$props.portalTarget === void 0 && $$bindings.portalTarget && portalTarget !== void 0) $$bindings.portalTarget(portalTarget);
  if ($$props.startIcon === void 0 && $$bindings.startIcon && startIcon !== void 0) $$bindings.startIcon(startIcon);
  if ($$props.endIcon === void 0 && $$bindings.endIcon && endIcon !== void 0) $$bindings.endIcon(endIcon);
  if ($$props.shortCut === void 0 && $$bindings.shortCut && shortCut !== void 0) $$bindings.shortCut(shortCut);
  if ($$props.dropdownItems === void 0 && $$bindings.dropdownItems && dropdownItems !== void 0) $$bindings.dropdownItems(dropdownItems);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0) $$bindings.focus(focus);
  buttonClass = twMerge(
    "w-full",
    getColorClass(color, variant),
    variant === "border" ? "border" : "",
    ButtonType.FontSizeClasses[size],
    ButtonType.SpacingClasses[spacingSize][variant],
    "focus-visible:ring-2 font-semibold",
    dropdownItems && dropdownItems.length > 0 ? "rounded-l-md h-full" : "rounded-md",
    "justify-center items-center text-center whitespace-nowrap inline-flex gap-2",
    btnClasses,
    "active:opacity-80 transition-all",
    disabled ? "!bg-surface-disabled !text-tertiary cursor-not-allowed" : "",
    loading ? "cursor-wait" : ""
  );
  lucideIconSize = (iconMap[size] ?? 12) * 1;
  return ` <div class="${escape(
    dropdownItems && dropdownItems.length > 0 && variant === "contained" ? colorVariants[color].divider : "",
    true
  ) + " " + escape(wrapperClasses, true) + " flex flex-row"}"${add_attribute("style", wrapperStyle, 0)}>${href ? `<a${spread(
    [
      { href: escape_attribute_value(href) },
      {
        download: escape_attribute_value(download)
      },
      {
        class: escape_attribute_value(buttonClass)
      },
      { id: escape_attribute_value(id) },
      { target: escape_attribute_value(target) },
      {
        tabindex: escape_attribute_value(disabled ? -1 : 0)
      },
      escape_object($$restProps),
      { style: escape_attribute_value(style) }
    ],
    {}
  )}${add_attribute("this", element, 0)}>${loading ? `${validate_component(Loader_2, "Loader2").$$render(
    $$result,
    {
      class: twMerge("animate-spin", iconOnlyPadding[size]),
      size: lucideIconSize
    },
    {},
    {}
  )}` : `${startIcon?.icon ? `${validate_component(startIcon.icon || missing_component, "svelte:component").$$render(
    $$result,
    {
      class: twMerge(startIcon?.classes, iconOnlyPadding[size]),
      size: lucideIconSize
    },
    {},
    {}
  )}` : ``}`} ${!iconOnly ? `${slots.default ? slots.default({}) : ``}` : ``} ${endIcon?.icon ? `${validate_component(endIcon.icon || missing_component, "svelte:component").$$render(
    $$result,
    {
      class: twMerge(endIcon?.classes, iconOnlyPadding[size]),
      size: lucideIconSize
    },
    {},
    {}
  )}` : ``} ${shortCut && !shortCut.hide ? `<div class="flex flex-row items-center !text-md opacity-60 gap-0 font-normal">${shortCut.withoutModifier !== true ? `${escape(getModifierKey())}` : ``}${shortCut.Icon ? `<shortCut.Icon class="w-4 h-4"${add_attribute("size", lucideIconSize, 0)}></shortCut.Icon>` : `${escape(shortCut.key)}`}</div>` : ``}</a>` : `<button${spread(
    [
      {
        class: escape_attribute_value(buttonClass)
      },
      { id: escape_attribute_value(id) },
      {
        tabindex: escape_attribute_value(disabled ? -1 : 0)
      },
      { title: escape_attribute_value(title) },
      escape_object($$restProps),
      {
        disabled: disabled || loading && !clickableWhileLoading || null
      },
      { style: escape_attribute_value(style) }
    ],
    {}
  )}${add_attribute("this", element, 0)}>${loading ? `${validate_component(Loader_2, "Loader2").$$render(
    $$result,
    {
      class: twMerge("animate-spin", iconOnlyPadding[size]),
      size: lucideIconSize
    },
    {},
    {}
  )}` : `${startIcon?.icon ? `${validate_component(startIcon.icon || missing_component, "svelte:component").$$render(
    $$result,
    {
      class: twMerge(startIcon?.classes, iconOnlyPadding[size]),
      size: lucideIconSize
    },
    {},
    {}
  )}` : ``}`} ${!iconOnly ? `${slots.default ? slots.default({}) : ``}` : ``} ${endIcon?.icon ? `${validate_component(endIcon.icon || missing_component, "svelte:component").$$render(
    $$result,
    {
      class: twMerge(endIcon?.classes, iconOnlyPadding[size]),
      size: lucideIconSize
    },
    {},
    {}
  )}` : ``} ${shortCut && !shortCut.hide ? (() => {
    let Icon2 = shortCut.Icon;
    return ` <div class="flex flex-row items-center !text-md opacity-60 gap-0 font-normal">${shortCut.withoutModifier !== true ? `${escape(getModifierKey())}` : ``}${shortCut.Icon ? `${validate_component(Icon2, "Icon").$$render($$result, { size: lucideIconSize }, {}, {})}` : `${escape(shortCut.key)}`}</div>`;
  })() : ``}</button>`} ${dropdownItems && dropdownItems.length > 0 ? `<div${add_attribute(
    "class",
    twMerge(
      buttonClass,
      "rounded-md m-0 p-0 h-auto !w-10",
      variant === "border" ? "border-0 border-r border-y " : "border-0",
      "rounded-r-md !rounded-l-none"
    ),
    0
  )}>${validate_component(ButtonDropdown, "ButtonDropdown").$$render($$result, { target: portalTarget }, {}, {
    items: () => {
      return `${each(computeDropdowns() ?? [], (item) => {
        return `${validate_component(MenuItem, "MenuItem").$$render($$result, { href: item.href }, {}, {
          default: () => {
            return `<div${add_attribute("class", classNames("!text-secondary text-left px-4 py-2 gap-2 cursor-pointer hover:bg-surface-hover !text-xs font-semibold"), 0)}>${item.icon ? `${validate_component(item.icon || missing_component, "svelte:component").$$render($$result, { class: "w-4 h-4", size: lucideIconSize }, {}, {})}` : ``} ${escape(item.label)}</div> `;
          }
        })}`;
      })}`;
    }
  })}</div>` : ``}</div>`;
});
const Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { message } = $$props;
  let { toastId } = $$props;
  let { error = false } = $$props;
  let { actions = [] } = $$props;
  let { errorMessage = void 0 } = $$props;
  let { duration = 5e3 } = $$props;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0) $$bindings.message(message);
  if ($$props.toastId === void 0 && $$bindings.toastId && toastId !== void 0) $$bindings.toastId(toastId);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
  if ($$props.actions === void 0 && $$bindings.actions && actions !== void 0) $$bindings.actions(actions);
  if ($$props.errorMessage === void 0 && $$bindings.errorMessage && errorMessage !== void 0) $$bindings.errorMessage(errorMessage);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0) $$bindings.duration(duration);
  return `<div class="pointer-events-auto w-full max-w-sm overflow-hidden bg-surface shadow-lg ring-1 ring-black ring-opacity-5 border"><div class="p-2 min-h-[60px] flex flex-col"><div class="flex items-start w-full"><div class="flex-shrink-0 mt-0.5">${error ? `${validate_component(X_circle, "XCircleIcon").$$render($$result, { class: "h-4 w-4 text-red-400" }, {}, {})}` : `${validate_component(Check_circle_2, "CheckCircle2").$$render($$result, { class: "h-4 w-4 text-green-400" }, {}, {})}`}</div> <div class="ml-3 flex-1 w-0"><p class="text-sm text-secondary break-words">${escape(message)}</p> ${errorMessage ? `<p class="text-sm text-secondary border bg-surface-secondary p-2 w-full overflow-auto mt-2">${escape(errorMessage)}</p>` : ``}</div> <div class="ml-4 flex flex-shrink-0"><button type="button" class="inline-flex rounded-md bg-surface-secondary text-gray-400 hover:text-tertiary focus:outline-none" data-svelte-h="svelte-n5jkwb"><span class="sr-only">Close</span> <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></button></div></div> <div class="mt-2 flex flex-col gap-2 h-15 items-center">${each(actions, (action, index) => {
    return `${validate_component(Button, "Button").$$render($$result, { class: "text-sm !text-primary" }, {}, {
      default: () => {
        return `${escape(action.label)} `;
      }
    })}`;
  })}</div></div></div>`;
});
function sendUserToast(message, error = false, actions = [], errorMessage = void 0, duration = 5e3) {
  toast.push({
    component: {
      src: Toast,
      props: {
        message,
        error,
        actions,
        errorMessage,
        duration
      },
      sendIdTo: "toastId"
    },
    dismissable: false,
    initial: 0,
    theme: {
      "--toastPadding": "0",
      "--toastMsgPadding": "0"
    }
  });
}
export {
  shouldDisplayPlaceholder as $,
  ALL_DEPLOYABLE as A,
  Button as B,
  Check_circle_2 as C,
  Chevron_down as D,
  resolveButtonType as E,
  cleanExpr as F,
  encodeState as G,
  truncateHash as H,
  toCamel as I,
  MenuButton as J,
  MenuItems as K,
  formatCron as L,
  MenuItem as M,
  generateRandomString as N,
  displayTime as O,
  Portal as P,
  ButtonDropdown as Q,
  pluralize as R,
  groupBy as S,
  TransitionRoot as T,
  parseQueryParams as U,
  deepMergeWithPriority as V,
  msToReadableTime as W,
  X_circle as X,
  debounce as Y,
  roughSizeOfObject as Z,
  computeKind as _,
  canWrite as a,
  computeSharableHash as a0,
  isMac as a1,
  getModifierKey as a2,
  copyToClipboard as a3,
  DELETE as a4,
  urlize as a5,
  setInputCat as a6,
  getSchemaFromProperties as a7,
  allTrue as a8,
  computeShow as a9,
  displaySize as aa,
  extractCustomProperties as ab,
  isCodeInjection as ac,
  isObject as ad,
  addWhitespaceBeforeCapitals as ae,
  isValidHexColor as af,
  emptyString as b,
  cleanValueProperties as c,
  decodeState as d,
  emptySchema as e,
  defaultIfEmptyString as f,
  classNames as g,
  getLocalSetting as h,
  isDeployable as i,
  displayDate as j,
  capitalize as k,
  tryEvery as l,
  msToSec as m,
  orderedYamlStringify as n,
  orderedJsonStringify as o,
  truncate as p,
  displayDateOnly as q,
  subtractDaysFromDateString as r,
  sendUserToast as s,
  truncateRev as t,
  isOwner as u,
  validateUsername as v,
  sortObject as w,
  removeMarkdown as x,
  sleep as y,
  storeLocalSetting as z
};
