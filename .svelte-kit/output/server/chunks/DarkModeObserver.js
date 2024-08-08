import { c as create_ssr_component, d as createEventDispatcher, o as onDestroy } from "./ssr.js";
const DarkModeObserver = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { darkMode = false } = $$props;
  createEventDispatcher();
  onDestroy(() => {
  });
  if ($$props.darkMode === void 0 && $$bindings.darkMode && darkMode !== void 0) $$bindings.darkMode(darkMode);
  return ``;
});
export {
  DarkModeObserver as D
};
