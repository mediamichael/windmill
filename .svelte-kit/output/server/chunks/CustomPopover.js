import { c as create_ssr_component, b as add_attribute } from "./ssr.js";
const CustomPopover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { placement = "bottom-end" } = $$props;
  let { notClickable = false } = $$props;
  let { disablePopup = false } = $$props;
  let { disappearTimeout = 100 } = $$props;
  let { appearTimeout = 300 } = $$props;
  let { style = void 0 } = $$props;
  let { focusEl = void 0 } = $$props;
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0) $$bindings.placement(placement);
  if ($$props.notClickable === void 0 && $$bindings.notClickable && notClickable !== void 0) $$bindings.notClickable(notClickable);
  if ($$props.disablePopup === void 0 && $$bindings.disablePopup && disablePopup !== void 0) $$bindings.disablePopup(disablePopup);
  if ($$props.disappearTimeout === void 0 && $$bindings.disappearTimeout && disappearTimeout !== void 0) $$bindings.disappearTimeout(disappearTimeout);
  if ($$props.appearTimeout === void 0 && $$bindings.appearTimeout && appearTimeout !== void 0) $$bindings.appearTimeout(appearTimeout);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.focusEl === void 0 && $$bindings.focusEl && focusEl !== void 0) $$bindings.focusEl(focusEl);
  focusEl && focusEl?.focus();
  return `${notClickable ? ` <span${add_attribute("style", style, 0)}${add_attribute("class", $$props.class, 0)}>${slots.default ? slots.default({}) : ``}</span>` : `<button${add_attribute("style", style, 0)}${add_attribute("class", $$props.class, 0)}>${slots.default ? slots.default({}) : ``}</button>`} ${``}`;
});
export {
  CustomPopover as C
};
