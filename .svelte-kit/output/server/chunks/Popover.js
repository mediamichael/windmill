import { c as create_ssr_component, v as validate_component, b as add_attribute } from "./ssr.js";
import { I as Icon } from "./Icon.js";
const External_link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
      }
    ],
    ["polyline", { "points": "15 3 21 3 21 9" }],
    [
      "line",
      {
        "x1": "10",
        "x2": "21",
        "y1": "14",
        "y2": "3"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "external-link" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Popover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { placement = "bottom-end" } = $$props;
  let { notClickable = false } = $$props;
  let { popupClass = "" } = $$props;
  let { disablePopup = false } = $$props;
  let { disappearTimeout = 100 } = $$props;
  let { appearTimeout = 300 } = $$props;
  let { documentationLink = void 0 } = $$props;
  let { style = void 0 } = $$props;
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0) $$bindings.placement(placement);
  if ($$props.notClickable === void 0 && $$bindings.notClickable && notClickable !== void 0) $$bindings.notClickable(notClickable);
  if ($$props.popupClass === void 0 && $$bindings.popupClass && popupClass !== void 0) $$bindings.popupClass(popupClass);
  if ($$props.disablePopup === void 0 && $$bindings.disablePopup && disablePopup !== void 0) $$bindings.disablePopup(disablePopup);
  if ($$props.disappearTimeout === void 0 && $$bindings.disappearTimeout && disappearTimeout !== void 0) $$bindings.disappearTimeout(disappearTimeout);
  if ($$props.appearTimeout === void 0 && $$bindings.appearTimeout && appearTimeout !== void 0) $$bindings.appearTimeout(appearTimeout);
  if ($$props.documentationLink === void 0 && $$bindings.documentationLink && documentationLink !== void 0) $$bindings.documentationLink(documentationLink);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  return `${notClickable ? ` <span${add_attribute("style", style, 0)}${add_attribute("class", $$props.class, 0)}>${slots.default ? slots.default({}) : ``}</span>` : `<button${add_attribute("style", style, 0)}${add_attribute("class", $$props.class, 0)}>${slots.default ? slots.default({}) : ``}</button>`} ${``}`;
});
export {
  External_link as E,
  Popover as P
};
