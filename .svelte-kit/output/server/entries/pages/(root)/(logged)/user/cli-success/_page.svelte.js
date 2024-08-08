import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr.js";
import { g as goto } from "../../../../../../chunks/navigation.js";
import { C as CenteredModal } from "../../../../../../chunks/CenteredModal.js";
import { W as WindmillIcon } from "../../../../../../chunks/WindmillIcon.js";
import { s as sendUserToast } from "../../../../../../chunks/toast.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  sendUserToast("Sucess. You can return to your terminal now.");
  goto("/");
  return `${validate_component(CenteredModal, "CenteredModal").$$render($$result, { title: "Redirecting to Home" }, {}, {
    default: () => {
      return `<div class="w-full"><div class="block m-auto w-20">${validate_component(WindmillIcon, "WindmillIcon").$$render(
        $$result,
        {
          height: "80px",
          width: "80px",
          spin: "fast"
        },
        {},
        {}
      )}</div></div>`;
    }
  })}`;
});
export {
  Page as default
};
