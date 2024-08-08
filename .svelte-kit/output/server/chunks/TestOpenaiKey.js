import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import { B as Button } from "./toast.js";
import "./lib.js";
const TestOpenaiKey = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { disabled = false } = $$props;
  let { apiKey = void 0 } = $$props;
  let loading = false;
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.apiKey === void 0 && $$bindings.apiKey && apiKey !== void 0) $$bindings.apiKey(apiKey);
  return `${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: "xs",
      variant: "contained",
      color: "dark",
      disabled,
      loading
    },
    {},
    {
      default: () => {
        return `Test key`;
      }
    }
  )}`;
});
export {
  TestOpenaiKey as T
};
