import { c as create_ssr_component, s as subscribe, v as validate_component } from "../../../../../../../chunks/ssr.js";
import "../../../../../../../chunks/client.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import { C as CenteredModal } from "../../../../../../../chunks/CenteredModal.js";
import { W as WindmillIcon } from "../../../../../../../chunks/WindmillIcon.js";
import "../../../../../../../chunks/stores2.js";
import "../../../../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import "../../../../../../../chunks/common.js";
import "yaml";
import "minimatch";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.url.searchParams.get("rd");
  $$unsubscribe_page();
  return `${validate_component(CenteredModal, "CenteredModal").$$render($$result, { title: "Logging out" }, {}, {
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
