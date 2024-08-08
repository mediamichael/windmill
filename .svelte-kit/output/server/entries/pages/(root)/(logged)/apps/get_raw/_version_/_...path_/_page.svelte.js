import { c as create_ssr_component, s as subscribe, o as onDestroy, v as validate_component } from "../../../../../../../../chunks/ssr.js";
import { p as page } from "../../../../../../../../chunks/stores.js";
import "../../../../../../../../chunks/index2.js";
import "yaml";
import "../../../../../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import "../../../../../../../../chunks/common.js";
import "minimatch";
/* empty css                                                                  */
import { S as Skeleton } from "../../../../../../../../chunks/Skeleton.js";
import { w as workspaceStore, u as userStore } from "../../../../../../../../chunks/stores2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  let $$unsubscribe_workspaceStore;
  let $$unsubscribe_userStore;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => value);
  onDestroy(() => {
    globalThis.windmill = void 0;
  });
  $$unsubscribe_page();
  $$unsubscribe_workspaceStore();
  $$unsubscribe_userStore();
  return `<div id="root"></div> ${`${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [10] }, {}, {})}`}`;
});
export {
  Page as default
};
