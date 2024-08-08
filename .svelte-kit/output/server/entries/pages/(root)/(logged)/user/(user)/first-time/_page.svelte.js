import { c as create_ssr_component, s as subscribe, v as validate_component } from "../../../../../../../chunks/ssr.js";
import "../../../../../../../chunks/client.js";
import { C as CenteredModal } from "../../../../../../../chunks/CenteredModal.js";
import "../../../../../../../chunks/index2.js";
import "yaml";
import "../../../../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import { B as Button } from "../../../../../../../chunks/toast.js";
import "minimatch";
/* empty css                                                               */
import "../../../../../../../chunks/common.js";
import { w as workspaceStore } from "../../../../../../../chunks/stores2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  $$unsubscribe_workspaceStore();
  return `${validate_component(CenteredModal, "CenteredModal").$$render($$result, { title: "Welcome to Windmill" }, {}, {
    default: () => {
      return `<p class="text-center text-lg mt-4 mb-4" data-svelte-h="svelte-1w2ibqh">This is a brand new instance. Setup the instance settings, then set the default superadmin user
		and enable hub resource type sync</p> <div class="flex flex-row justify-between pt-4 gap-x-1">${validate_component(Button, "Button").$$render(
        $$result,
        {
          color: "light",
          size: "xs2",
          variant: "contained"
        },
        {},
        {
          default: () => {
            return `Skip`;
          }
        }
      )} ${validate_component(Button, "Button").$$render($$result, { color: "dark", size: "lg" }, {}, {
        default: () => {
          return `Setup`;
        }
      })}</div>`;
    }
  })}`;
});
export {
  Page as default
};
