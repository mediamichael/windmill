import { c as create_ssr_component, s as subscribe, o as onDestroy } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { p as page } from "../../../chunks/stores.js";
import { u as userStore, w as workspaceStore, a as usersWorkspaceStore } from "../../../chunks/stores2.js";
import "../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import "../../../chunks/common.js";
import "yaml";
import "minimatch";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_userStore;
  let $$unsubscribe_workspaceStore;
  let $$unsubscribe_page;
  let $$unsubscribe_usersWorkspaceStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_usersWorkspaceStore = subscribe(usersWorkspaceStore, (value) => value);
  onDestroy(() => {
  });
  const darkMode = window.localStorage.getItem("dark-mode") ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  if (darkMode === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  $$unsubscribe_userStore();
  $$unsubscribe_workspaceStore();
  $$unsubscribe_page();
  $$unsubscribe_usersWorkspaceStore();
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
