import { c as create_ssr_component } from "./ssr.js";
const MenuItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <div class="py-1"><span class="text-secondary block px-4 py-2 text-sm hover:bg-surface-hover hover:text-primary" role="menuitem" tabindex="-1">${slots.default ? slots.default({}) : ``}</span></div>`;
});
export {
  MenuItem as M
};
