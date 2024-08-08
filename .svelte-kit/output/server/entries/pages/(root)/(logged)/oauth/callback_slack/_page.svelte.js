import { c as create_ssr_component, s as subscribe, v as validate_component } from "../../../../../../chunks/ssr.js";
import "../../../../../../chunks/client.js";
import { p as page } from "../../../../../../chunks/stores.js";
import "../../../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import "../../../../../../chunks/common.js";
import "yaml";
import "minimatch";
import { w as workspaceStore } from "../../../../../../chunks/stores2.js";
import { C as CenteredPage } from "../../../../../../chunks/CenteredPage.js";
import { P as PageHeader } from "../../../../../../chunks/PageHeader.js";
import { W as WindmillIcon } from "../../../../../../chunks/WindmillIcon.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_workspaceStore;
  let $page, $$unsubscribe_page;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.url.searchParams.get("error");
  $page.url.searchParams.get("code") ?? void 0;
  $page.url.searchParams.get("state") ?? void 0;
  $$unsubscribe_workspaceStore();
  $$unsubscribe_page();
  return `${validate_component(CenteredPage, "CenteredPage").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(PageHeader, "PageHeader").$$render($$result, { title: "Connection to slack in progress" }, {}, {})} <div class="mx-auto w-0">${validate_component(WindmillIcon, "WindmillIcon").$$render(
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
  })}`;
});
export {
  Page as default
};
