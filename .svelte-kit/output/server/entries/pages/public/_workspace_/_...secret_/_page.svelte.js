import { c as create_ssr_component, v as validate_component, s as subscribe, u as setContext, e as escape } from "../../../../../chunks/ssr.js";
import { p as page } from "../../../../../chunks/stores.js";
import "hash-sum";
import "../../../../../chunks/common.js";
import "yaml";
import "../../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import "minimatch";
import "../../../../../chunks/index2.js";
/* empty css                                                         */
import { S as Skeleton } from "../../../../../chunks/Skeleton.js";
import "../../../../../chunks/gridUtils.js";
import { e as enterpriseLicense, u as userStore } from "../../../../../chunks/stores2.js";
import "../../../../../chunks/AppSliderInputs.svelte_svelte_type_style_lang.js";
import "../../../../../chunks/index3.js";
/* empty css                                                                      */
/* empty css                                                              */
import "../../../../../chunks/svelte.js";
import "ansi_up";
import "@json2csv/plainjs";
/* empty css                                                            */
import "ag-grid-community";
import "ol/proj.js";
/* empty css                                                                 */
import "d3-dag";
import "d3-zoom";
/* empty css                                                                       */
import { W as WindmillIcon } from "../../../../../chunks/WindmillIcon.js";
import "@leeoniya/ufuzzy";
/* empty css                                                                        */
import "../../../../../chunks/scripts.js";
/* empty css                                                                   */
import "easy-reactive";
import "../../../../../chunks/utils3.js";
import { I as IS_APP_PUBLIC_CONTEXT_KEY } from "../../../../../chunks/types.js";
import "chartjs-plugin-zoom";
import "chartjs-adapter-date-fns";
/* empty css                                                             */
import "pdfjs-dist";
import { i as isCloudHosted } from "../../../../../chunks/cloud.js";
import "../../../../../chunks/client.js";
import { U as User } from "../../../../../chunks/user2.js";
import { I as Icon } from "../../../../../chunks/Icon.js";
const User_round_x = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M2 21a8 8 0 0 1 11.873-7" }],
    ["circle", { "cx": "10", "cy": "8", "r": "5" }],
    ["path", { "d": "m17 17 5 5" }],
    ["path", { "d": "m22 17-5 5" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "user-round-x" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  setContext(IS_APP_PUBLIC_CONTEXT_KEY, true);
  const darkMode = window.localStorage.getItem("dark-mode") ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  if (darkMode === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  $$unsubscribe_page();
  $$unsubscribe_enterpriseLicense();
  $$unsubscribe_userStore();
  return `<div class="${"z-50 text-xs fixed bottom-1 right-2 " + escape(
    $enterpriseLicense && !isCloudHosted() ? "transition-opacity delay-1000 duration-1000 opacity-20 hover:delay-0 hover:opacity-100" : "",
    true
  )}"><a href="https://windmill.dev" class="whitespace-nowrap text-tertiary inline-flex items-center">Powered by  ${validate_component(WindmillIcon, "WindmillIcon").$$render($$result, {}, {}, {})} Windmill</a></div> <div class="z-50 text-2xs text-tertiary absolute top-3 left-2">${$userStore ? ` <div class="flex gap-1 items-center">${validate_component(User, "User").$$render($$result, { size: 14 }, {}, {})}${escape($userStore.username)}</div>` : `${validate_component(User_round_x, "UserRoundX").$$render($$result, { size: 14 }, {}, {})}`}</div> ${`${`${`${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[4], 0.5, [50]] }, {}, {})}`}`}`}`;
});
export {
  Page as default
};
