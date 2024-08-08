import { c as create_ssr_component, e as escape, b as add_attribute } from "./ssr.js";
const Password = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let red;
  let { password } = $$props;
  let { placeholder = "******" } = $$props;
  let { disabled = false } = $$props;
  let { required = false } = $$props;
  let { small = false } = $$props;
  if ($$props.password === void 0 && $$bindings.password && password !== void 0) $$bindings.password(password);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0) $$bindings.required(required);
  if ($$props.small === void 0 && $$bindings.small && small !== void 0) $$bindings.small(small);
  red = required && (password == "" || password == void 0);
  return `<div class="${"relative w-full " + escape(small ? "max-w-lg" : "", true)}"><div class="absolute inset-y-0 right-0 flex items-center px-2" data-svelte-h="svelte-1gk90su"><input class="!hidden js-password-toggle" id="toggle" type="checkbox"> <label class="bg-surface-secondary hover:bg-gray-400 rounded px-2 py-1 text-sm text-tertiary font-mono cursor-pointer js-password-label" for="toggle">show</label></div> <input class="${"block " + escape(small ? "!text-2xs" : "w-full", true) + " px-2 py-1 " + escape(red ? "!border-red-500" : "", true) + " text-sm js-password h-9"}" id="password" type="password" autocomplete="off"${add_attribute("placeholder", placeholder, 0)} ${disabled ? "disabled" : ""}${add_attribute("value", password, 0)}></div> ${red ? `<div class="text-red-600 text-2xs grow" data-svelte-h="svelte-1lp7n08">This field is required</div>` : ``}`;
});
export {
  Password as P
};
