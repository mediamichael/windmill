import { c as create_ssr_component, h as getContext, s as subscribe, b as add_attribute } from "./ssr.js";
const TabContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selected, $$unsubscribe_selected;
  let { value } = $$props;
  let { alwaysMounted = false } = $$props;
  let { style = "" } = $$props;
  let { values = void 0 } = $$props;
  let { class: clazz = "" } = $$props;
  const { selected } = getContext("Tabs");
  $$unsubscribe_selected = subscribe(selected, (value2) => $selected = value2);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.alwaysMounted === void 0 && $$bindings.alwaysMounted && alwaysMounted !== void 0) $$bindings.alwaysMounted(alwaysMounted);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.values === void 0 && $$bindings.values && values !== void 0) $$bindings.values(values);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  $$unsubscribe_selected();
  return `${value === $selected || alwaysMounted || values?.includes($selected) ? `<div${add_attribute(
    "class",
    `${clazz} ${value === $selected || values?.includes($selected) ? "visible" : "hidden"}`,
    0
  )}${add_attribute("style", style, 0)}>${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
export {
  TabContent as T
};
