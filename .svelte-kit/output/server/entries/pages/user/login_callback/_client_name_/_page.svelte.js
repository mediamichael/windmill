import { c as create_ssr_component, s as subscribe, v as validate_component } from "../../../../../chunks/ssr.js";
import "../../../../../chunks/client.js";
import { p as page } from "../../../../../chunks/stores.js";
import "../../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import "../../../../../chunks/common.js";
import "yaml";
import "minimatch";
import { C as CenteredModal } from "../../../../../chunks/CenteredModal.js";
import { w as workspaceStore, a as usersWorkspaceStore, u as userStore } from "../../../../../chunks/stores2.js";
import { W as WindmillIcon } from "../../../../../chunks/WindmillIcon.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_workspaceStore;
  let $$unsubscribe_usersWorkspaceStore;
  let $$unsubscribe_userStore;
  let $page, $$unsubscribe_page;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  $$unsubscribe_usersWorkspaceStore = subscribe(usersWorkspaceStore, (value) => value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.url.searchParams.get("error");
  let clientName = $page.params.client_name;
  $page.url.searchParams.get("code") ?? void 0;
  $page.url.searchParams.get("state") ?? void 0;
  const darkMode = window.localStorage.getItem("dark-mode") ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  if (darkMode === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  $$unsubscribe_workspaceStore();
  $$unsubscribe_usersWorkspaceStore();
  $$unsubscribe_userStore();
  $$unsubscribe_page();
  return `${validate_component(CenteredModal, "CenteredModal").$$render($$result, { title: "Login from " + clientName }, {}, {
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
