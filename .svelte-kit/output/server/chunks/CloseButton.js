import { c as create_ssr_component, d as createEventDispatcher, v as validate_component } from "./ssr.js";
import { B as Button } from "./toast.js";
import { twMerge } from "tailwind-merge";
import { X } from "./x.js";
const CloseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { noBg = false } = $$props;
  let { small = false } = $$props;
  createEventDispatcher();
  if ($$props.noBg === void 0 && $$bindings.noBg && noBg !== void 0) $$bindings.noBg(noBg);
  if ($$props.small === void 0 && $$bindings.small && small !== void 0) $$bindings.small(small);
  return `${validate_component(Button, "Button").$$render(
    $$result,
    {
      startIcon: { icon: X },
      iconOnly: true,
      size: "sm",
      color: "light",
      btnClasses: twMerge("hover:bg-surface-hover rounded-full p-0", noBg ? "" : "bg-surface-secondary", small ? "w-6 h-6" : "w-8 h-8")
    },
    {},
    {}
  )}`;
});
export {
  CloseButton as C
};
