import { c as create_ssr_component, s as subscribe, a as set_store_value, v as validate_component, b as add_attribute } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import { b as base } from "../../../../chunks/paths.js";
import { A as AppConnectInner } from "../../../../chunks/SchemaForm.js";
import { D as DarkModeObserver } from "../../../../chunks/DarkModeObserver.js";
import "../../../../chunks/index2.js";
import "yaml";
import "../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import { B as Button } from "../../../../chunks/toast.js";
import "minimatch";
/* empty css                                                      */
import "../../../../chunks/common.js";
import { w as workspaceStore } from "../../../../chunks/stores2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $page, $$unsubscribe_page;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let resourceType = $page.url.searchParams.get("resource_type") ?? void 0;
  let step = 1;
  let disabled = false;
  let isGoogleSignin = false;
  let manual = true;
  let appConnect = void 0;
  let darkMode = false;
  const workspace = $page.url.searchParams.get("workspace");
  if (workspace) {
    set_store_value(workspaceStore, $workspaceStore = workspace, $workspaceStore);
  }
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(DarkModeObserver, "DarkModeObserver").$$render(
      $$result,
      { darkMode },
      {
        darkMode: ($$value) => {
          darkMode = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div><div class="flex flex-row-reverse w-full"><div class="flex gap-2">${step > 2 ? `${validate_component(Button, "Button").$$render($$result, { variant: "border" }, {}, {
      default: () => {
        return `Back`;
      }
    })}` : ``} ${isGoogleSignin ? `<button ${disabled ? "disabled" : ""}><img class="h-10 w-auto object-contain"${add_attribute(
      "src",
      darkMode ? base + "/google_signin_dark.png" : base + "/google_signin_light.png",
      0
    )} alt="Google sign-in"></button>` : `${validate_component(Button, "Button").$$render($$result, { disabled }, {}, {
      default: () => {
        return `${step == 2 && !manual ? `Connect` : `${step == 1 ? `Next` : `Save`}`}`;
      }
    })}`}</div></div> ${validate_component(AppConnectInner, "AppConnectInner").$$render(
      $$result,
      {
        this: appConnect,
        step,
        resourceType,
        isGoogleSignin,
        disabled,
        manual
      },
      {
        this: ($$value) => {
          appConnect = $$value;
          $$settled = false;
        },
        step: ($$value) => {
          step = $$value;
          $$settled = false;
        },
        resourceType: ($$value) => {
          resourceType = $$value;
          $$settled = false;
        },
        isGoogleSignin: ($$value) => {
          isGoogleSignin = $$value;
          $$settled = false;
        },
        disabled: ($$value) => {
          disabled = $$value;
          $$settled = false;
        },
        manual: ($$value) => {
          manual = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
