import { c as create_ssr_component, s as subscribe, v as validate_component, e as escape } from "../../../../../../chunks/ssr.js";
import { p as page } from "../../../../../../chunks/stores.js";
import { b as base } from "../../../../../../chunks/base.js";
import { C as CenteredModal } from "../../../../../../chunks/CenteredModal.js";
import "../../../../../../chunks/index2.js";
import "yaml";
import "../../../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import { B as Button } from "../../../../../../chunks/toast.js";
import "minimatch";
/* empty css                                                            */
import "../../../../../../chunks/common.js";
import { w as workspaceStore } from "../../../../../../chunks/stores2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_workspaceStore;
  let $page, $$unsubscribe_page;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let port = Number($page.url.searchParams.get("port"));
  port = port == 0 || Number.isNaN(port) ? 80 : port;
  $$unsubscribe_workspaceStore();
  $$unsubscribe_page();
  return `${validate_component(CenteredModal, "CenteredModal").$$render($$result, { title: "Authorize login request" }, {}, {
    default: () => {
      return `<p class="text-center text-lg mb-6">Token will be posted to your local machine to port ${escape(port)}</p> <div class="flex flex-row justify-around pt-4 gap-x-1">${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: "border",
          color: "dark",
          size: "sm",
          href: base
        },
        {},
        {
          default: () => {
            return `Decline`;
          }
        }
      )} ${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: "contained",
          color: "blue",
          size: "sm"
        },
        {},
        {
          default: () => {
            return `Authorize`;
          }
        }
      )}</div>`;
    }
  })}`;
});
export {
  Page as default
};
