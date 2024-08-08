import { c as create_ssr_component, b as add_attribute, e as escape } from "./ssr.js";
const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = void 0 } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  return `<div${add_attribute("class", $$props.class, 0)}><div class="flex flex-row justify-between items-center w-full"><div class="flex flex-row items-center gap-1"><span class="text-secondary text-sm leading-6">${escape(label)}</span> ${slots.header ? slots.header({}) : ``}</div> ${slots.error ? slots.error({}) : ``} ${slots.action ? slots.action({}) : ``}</div> ${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Label as L
};
