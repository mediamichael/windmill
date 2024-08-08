import { c as create_ssr_component, s as subscribe, v as validate_component, b as add_attribute } from "../../../../../../../chunks/ssr.js";
import { r as replaceState, g as goto } from "../../../../../../../chunks/client.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import { b as base } from "../../../../../../../chunks/base.js";
import { A as AppPreview } from "../../../../../../../chunks/AppPreview.js";
import { w as writable } from "../../../../../../../chunks/index.js";
import "../../../../../../../chunks/index2.js";
import { twMerge } from "tailwind-merge";
import { a as canWrite, B as Button } from "../../../../../../../chunks/toast.js";
/* empty css                                                               */
import "../../../../../../../chunks/common.js";
import { S as Skeleton } from "../../../../../../../chunks/Skeleton.js";
import { A as AppService } from "../../../../../../../chunks/services.gen.js";
import { w as workspaceStore, u as userStore } from "../../../../../../../chunks/stores2.js";
import { P as Pen } from "../../../../../../../chunks/pen.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let app = void 0;
  let can_write = false;
  async function loadApp() {
    app = await AppService.getAppByPath({
      workspace: $workspaceStore,
      path: $page.params.path
    });
    can_write = canWrite(app?.path, app?.extra_perms, $userStore);
  }
  const breakpoint = writable("lg");
  const hideRefreshBar = $page.url.searchParams.get("hideRefreshBar") === "true";
  const hideEditBtn = $page.url.searchParams.get("hideEditBtn") === "true";
  {
    if ($workspaceStore && $page.params.path) {
      if (app && $page.params.path === app.path) {
        console.log("App already loaded");
      } else {
        loadApp();
      }
    }
  }
  $$unsubscribe_page();
  $$unsubscribe_workspaceStore();
  $$unsubscribe_userStore();
  return `${app ? `<div${add_attribute("class", twMerge("min-h-screen h-full w-full", app?.value.css?.["app"]?.["viewer"]?.class, "wm-app-viewer"), 0)}${add_attribute("style", app?.value.css?.["app"]?.["viewer"]?.style, 0)}>${validate_component(AppPreview, "AppPreview").$$render(
    $$result,
    {
      context: {
        email: $userStore?.email,
        username: $userStore?.username,
        groups: $userStore?.groups,
        query: Object.fromEntries($page.url.searchParams.entries()),
        hash: $page.url.hash
      },
      workspace: $workspaceStore ?? "",
      summary: app.summary,
      app: app.value,
      appPath: app.path,
      breakpoint,
      policy: app.policy,
      isEditor: false,
      noBackend: false,
      hideRefreshBar,
      replaceStateFn: (path) => replaceState(path, $page.state),
      gotoFn: (path, opt) => goto(path, opt)
    },
    {},
    {}
  )} ${can_write && !hideEditBtn ? `<div id="app-edit-btn" class="absolute bottom-4 z-50 right-4">${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: "sm",
      startIcon: { icon: Pen },
      variant: "border",
      href: base + "/apps/edit/" + app.path + "?nodraft=true"
    },
    {},
    {
      default: () => {
        return `Edit`;
      }
    }
  )}</div>` : ``}</div>` : `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [10] }, {}, {})}`}`;
});
export {
  Page as default
};
