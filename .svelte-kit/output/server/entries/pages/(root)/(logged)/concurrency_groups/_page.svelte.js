import { c as create_ssr_component, o as onDestroy, v as validate_component } from "../../../../../chunks/ssr.js";
import { C as CenteredPage } from "../../../../../chunks/CenteredPage.js";
import "../../../../../chunks/index2.js";
import "yaml";
import "../../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import { B as Button } from "../../../../../chunks/toast.js";
import "minimatch";
/* empty css                                                         */
import "../../../../../chunks/common.js";
import { P as PageHeader } from "../../../../../chunks/PageHeader.js";
import { R as Refresh_cw } from "../../../../../chunks/refresh-cw.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  onDestroy(() => {
  });
  return `${validate_component(CenteredPage, "CenteredPage").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(PageHeader, "PageHeader").$$render($$result, { title: "Concurrency Groups" }, {}, {
        default: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              color: "light",
              size: "md",
              btnClasses: "w-full h-8",
              variant: "border"
            },
            {},
            {
              default: () => {
                return `${validate_component(Refresh_cw, "RefreshCw").$$render(
                  $$result,
                  {
                    class: "",
                    size: "xs"
                  },
                  {},
                  {}
                )}Refresh`;
              }
            }
          )}`;
        }
      })} ${``}`;
    }
  })}`;
});
export {
  Page as default
};
