import { c as create_ssr_component, v as validate_component } from "../../../../../../../chunks/ssr.js";
import "../../../../../../../chunks/client.js";
import { C as CenteredModal } from "../../../../../../../chunks/CenteredModal.js";
import { I as InstanceSettings } from "../../../../../../../chunks/InstanceSettings.js";
import "../../../../../../../chunks/index2.js";
import "yaml";
import "../../../../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import { B as Button } from "../../../../../../../chunks/toast.js";
import "minimatch";
/* empty css                                                               */
import "../../../../../../../chunks/common.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(CenteredModal, "CenteredModal").$$render($$result, { title: "Instance Settings" }, {}, {
    default: () => {
      return `${validate_component(InstanceSettings, "InstanceSettings").$$render($$result, {}, {}, {})} <p class="text-secondary text-sm px-2 py-4" data-svelte-h="svelte-1g9l1gj">You can change these settings later in the instance settings but finishing setup will leave this
		page.</p> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
        default: () => {
          return `Finish Setup`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default
};
