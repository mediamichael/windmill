import { c as create_ssr_component, e as escape, b as add_attribute } from "./ssr.js";
const SplitPanesWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { refElement = void 0 } = $$props;
  let wrapper;
  let gap = 0;
  if ($$props.refElement === void 0 && $$bindings.refElement && refElement !== void 0) $$bindings.refElement(refElement);
  return `<div class="${"h-full " + escape($$props.class || "", true)}" style="${"max-height: calc(100% - " + escape(gap, true) + "px) !important;"}"${add_attribute("this", wrapper, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  SplitPanesWrapper as S
};
