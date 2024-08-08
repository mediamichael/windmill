import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { D as Dev } from "../../../../chunks/Dev.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Dev, "Dev").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
