import { c as create_ssr_component, v as validate_component, o as onDestroy, s as subscribe, b as add_attribute, e as escape } from "./ssr.js";
import { I as Icon } from "./Icon.js";
import { computePosition, autoUpdate } from "@floating-ui/dom";
import { t as tick } from "./Head.js";
import { e as enterpriseLicense } from "./stores2.js";
import { T as Tooltip } from "./Tooltip.js";
import { twMerge } from "tailwind-merge";
import { A as Alert_triangle } from "./alert-triangle.js";
const Chevron_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m9 18 6-6-6-6" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "chevron-right" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Trash = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M3 6h18" }],
    [
      "path",
      {
        "d": "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
      }
    ],
    [
      "path",
      {
        "d": "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "trash" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
function createFloatingActions(initOptions) {
  let referenceElement;
  let floatingElement;
  const defaultOptions = {
    autoUpdate: true
  };
  let options = initOptions;
  const getOptions = (mixin) => {
    return { ...defaultOptions, ...initOptions || {}, ...mixin || {} };
  };
  const updatePosition = (updateOptions) => {
    if (referenceElement && floatingElement) {
      options = getOptions(updateOptions);
      computePosition(referenceElement, floatingElement, options).then((v) => {
        Object.assign(floatingElement.style, {
          position: v.strategy,
          left: `${v.x}px`,
          top: `${v.y}px`
        });
        options?.onComputed && options.onComputed(v);
      });
    }
  };
  const referenceAction = (node) => {
    if ("subscribe" in node) {
      setupVirtualElementObserver(node);
      return {};
    } else {
      referenceElement = node;
      updatePosition();
    }
  };
  const contentAction = (node, contentOptions) => {
    let autoUpdateDestroy;
    floatingElement = node;
    options = getOptions(contentOptions);
    setTimeout(() => updatePosition(contentOptions), 0);
    updatePosition(contentOptions);
    const destroyAutoUpdate = () => {
      if (autoUpdateDestroy) {
        autoUpdateDestroy();
        autoUpdateDestroy = void 0;
      }
    };
    const initAutoUpdate = ({ autoUpdate: autoUpdate$1 } = options || {}) => {
      destroyAutoUpdate();
      if (autoUpdate$1 !== false) {
        tick().then(() => {
          return autoUpdate(referenceElement, floatingElement, () => updatePosition(options), autoUpdate$1 === true ? {} : autoUpdate$1);
        });
      }
      return;
    };
    autoUpdateDestroy = initAutoUpdate();
    return {
      update(contentOptions2) {
        updatePosition(contentOptions2);
        autoUpdateDestroy = initAutoUpdate(contentOptions2);
      },
      destroy() {
        destroyAutoUpdate();
      }
    };
  };
  const setupVirtualElementObserver = (node) => {
    const unsubscribe = node.subscribe(($node) => {
      if (referenceElement === void 0) {
        referenceElement = $node;
        updatePosition();
      } else {
        Object.assign(referenceElement, $node);
        updatePosition();
      }
    });
    onDestroy(unsubscribe);
  };
  return [
    referenceAction,
    contentAction,
    updatePosition
  ];
}
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  let { label = void 0 } = $$props;
  let { tooltip = void 0 } = $$props;
  let { eeOnly = false } = $$props;
  let { small = false } = $$props;
  let { collapsable = false } = $$props;
  let collapsed = true;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.tooltip === void 0 && $$bindings.tooltip && tooltip !== void 0) $$bindings.tooltip(tooltip);
  if ($$props.eeOnly === void 0 && $$bindings.eeOnly && eeOnly !== void 0) $$bindings.eeOnly(eeOnly);
  if ($$props.small === void 0 && $$bindings.small && small !== void 0) $$bindings.small(small);
  if ($$props.collapsable === void 0 && $$bindings.collapsable && collapsable !== void 0) $$bindings.collapsable(collapsable);
  $$unsubscribe_enterpriseLicense();
  return `<div class="w-full"><div class="flex flex-row justify-between items-center mb-2"><h2${add_attribute("class", twMerge("font-semibold flex flex-row items-center gap-1", small ? "text-sm" : "text-base"), 0)}>${collapsable ? `<button class="flex items-center gap-1">${`${validate_component(Chevron_right, "ChevronRight").$$render($$result, { size: 16 }, {}, {})}`} ${escape(label)}</button>` : `${escape(label)}`} ${slots.header ? slots.header({}) : ``} ${tooltip ? `${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(tooltip)}`;
    }
  })}` : ``} ${eeOnly ? `${!$enterpriseLicense ? `<div class="flex text-xs items-center gap-1 text-yellow-500 whitespace-nowrap ml-8">${validate_component(Alert_triangle, "AlertTriangle").$$render($$result, { size: 16 }, {}, {})}
						EE only ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
    default: () => {
      return `Enterprise Edition only feature`;
    }
  })}</div>` : ``}` : ``}</h2> ${slots.action ? slots.action({}) : ``}</div> <div${add_attribute(
    "class",
    collapsable && collapsed ? `hidden ${$$props.class}` : `${$$props.class}`,
    0
  )}>${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  Chevron_right as C,
  Section as S,
  Trash as T,
  createFloatingActions as c
};
