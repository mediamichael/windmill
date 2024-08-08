import { c as create_ssr_component, s as subscribe, v as validate_component } from "../../../../../../chunks/ssr.js";
import { g as goto } from "../../../../../../chunks/navigation.js";
import { p as page } from "../../../../../../chunks/stores.js";
import { C as CenteredModal } from "../../../../../../chunks/CenteredModal.js";
import { A as Alert } from "../../../../../../chunks/Alert.js";
import "yaml";
import { s as sendUserToast } from "../../../../../../chunks/toast.js";
import "minimatch";
import "../../../../../../chunks/common.js";
/* empty css                                                            */
import "../../../../../../chunks/index2.js";
import { W as WindmillIcon } from "../../../../../../chunks/WindmillIcon.js";
import { W as WorkspaceService } from "../../../../../../chunks/services.gen.js";
import { w as workspaceStore } from "../../../../../../chunks/stores2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $page, $$unsubscribe_page;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let success = $page.url.searchParams.get("success") === "true";
  let attempt = 0;
  if (!success) {
    setTimeout(
      () => {
        goto("/workspace_settings?tab=premium");
      },
      5e3
    );
  } else {
    let interval = setInterval(
      async () => {
        attempt += 1;
        if ((await WorkspaceService.getSettings({ workspace: $workspaceStore })).customer_id) {
          clearInterval(interval);
          goto("/workspace_settings?tab=premium");
        } else if (attempt > 10) {
          sendUserToast("Subscription upgrade failed. Contact contact@windmill.dev", true);
          clearInterval(interval);
          goto("/workspace_settings?tab=premium");
        }
      },
      5e3
    );
  }
  $$unsubscribe_workspaceStore();
  $$unsubscribe_page();
  return ` ${validate_component(CenteredModal, "CenteredModal").$$render(
    $$result,
    {
      title: "Subscription upgrade " + (success ? "succeeded" : "failed")
    },
    {},
    {
      default: () => {
        return `${!success ? `<div class="my-2">${validate_component(Alert, "Alert").$$render($$result, { type: "error", title: "Checkout failed" }, {}, {
          default: () => {
            return `The checkout failed, your subscription has not been updated.`;
          }
        })}</div> <p class="text-sm my-6 text-tertiary" data-svelte-h="svelte-73ejmk">You will be redirected to the workspace settings page in 5 seconds...</p>` : `<p class="text-sm my-6 text-tertiary w-full text-center" data-svelte-h="svelte-4xz88">Waiting for your upgrade to be processed...</p>`} <div class="block m-auto w-20">${validate_component(WindmillIcon, "WindmillIcon").$$render(
          $$result,
          {
            height: "80px",
            width: "80px",
            spin: "fast"
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}`;
});
export {
  Page as default
};
