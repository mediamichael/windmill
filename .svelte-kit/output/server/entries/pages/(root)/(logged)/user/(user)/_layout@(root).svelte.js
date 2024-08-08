import { c as create_ssr_component } from "../../../../../../chunks/ssr.js";
const Layout_root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="min-h-screen antialiased">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout_root as default
};
