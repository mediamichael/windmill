import { c as create_ssr_component, s as subscribe, v as validate_component, a as set_store_value } from "../../../../../../chunks/ssr.js";
import { i as importStore } from "../../../../../../chunks/store.js";
import { A as AppEditor } from "../../../../../../chunks/AppEditor.js";
import { A as AppService } from "../../../../../../chunks/services.gen.js";
import { p as page } from "../../../../../../chunks/stores.js";
import { s as sendUserToast, d as decodeState } from "../../../../../../chunks/toast.js";
import { w as workspaceStore, u as userStore } from "../../../../../../chunks/stores2.js";
import "../../../../../../chunks/client.js";
import { g as goto } from "../../../../../../chunks/navigation.js";
import { D as DEFAULT_THEME } from "../../../../../../chunks/AppPreview.js";
import { p as processDimension, a as presets } from "../../../../../../chunks/components.js";
import { i as insertNewGridItem, a as appComponentFromType, s as setUpTopBarComponentContent } from "../../../../../../chunks/history.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $userStore, $$unsubscribe_userStore;
  let $page, $$unsubscribe_page;
  let $importStore, $$unsubscribe_importStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value2) => $workspaceStore = value2);
  $$unsubscribe_userStore = subscribe(userStore, (value2) => $userStore = value2);
  $$unsubscribe_page = subscribe(page, (value2) => $page = value2);
  $$unsubscribe_importStore = subscribe(importStore, (value2) => $importStore = value2);
  let nodraft = $page.url.searchParams.get("nodraft");
  const hubId = $page.url.searchParams.get("hub");
  const templatePath = $page.url.searchParams.get("template");
  const templateId = $page.url.searchParams.get("template_id");
  const importRaw = $importStore;
  if ($importStore) {
    set_store_value(importStore, $importStore = void 0, $importStore);
  }
  const state = nodraft ? void 0 : localStorage.getItem("app");
  let summary = "";
  let value = {
    grid: [],
    fullscreen: false,
    unusedInlineScripts: [],
    hiddenInlineScripts: [],
    theme: { type: "path", path: DEFAULT_THEME }
  };
  let policy = {
    on_behalf_of: $userStore?.username.includes("@") ? $userStore?.username : `u/${$userStore?.username}`,
    on_behalf_of_email: $userStore?.email,
    execution_mode: "publisher"
  };
  loadApp();
  async function loadApp() {
    if (importRaw) {
      sendUserToast("Loaded from YAML/JSON");
      if ("value" in importRaw) {
        summary = importRaw.summary;
        value = importRaw.value;
        policy = importRaw.policy;
      } else {
        value = importRaw;
      }
    } else if (templatePath) {
      const template = await AppService.getAppByPath({
        workspace: $workspaceStore,
        path: templatePath
      });
      value = template.value;
      sendUserToast("App loaded from template");
      goto("?", { replaceState: true });
    } else if (templateId) {
      const template = await AppService.getAppByVersion({
        workspace: $workspaceStore,
        id: parseInt(templateId)
      });
      value = template.value;
      sendUserToast("App loaded from template");
      goto("?", { replaceState: true });
    } else if (hubId) {
      const hub = await AppService.getHubAppById({ id: Number(hubId) });
      value = {
        hiddenInlineScripts: [],
        unusedInlineScripts: [],
        fullscreen: false,
        ...hub.app.value ?? {}
      };
      summary = hub.app.summary;
      sendUserToast("App loaded from Hub");
      goto("?", { replaceState: true });
    } else if (!templatePath && !hubId && state) {
      sendUserToast("App restored from browser stored autosave", false, [
        {
          label: "Start from blank",
          callback: () => {
            value = {
              grid: [],
              fullscreen: false,
              unusedInlineScripts: [],
              hiddenInlineScripts: [],
              theme: void 0
            };
          }
        }
      ]);
      value = decodeState(state);
    } else {
      const preset = presets["topbarcomponent"];
      const id = insertNewGridItem(
        value,
        appComponentFromType(preset.targetComponent, preset.configuration, void 0, {
          customCss: { container: { class: "!p-0", style: "" } }
        }),
        void 0,
        void 0,
        void 0,
        { x: 0, y: 0 },
        {
          3: processDimension(preset.dims, 3),
          12: processDimension(preset.dims, 12)
        }
      );
      setUpTopBarComponentContent(id, value);
      value.hideLegacyTopBar = true;
      value = value;
    }
  }
  $$unsubscribe_workspaceStore();
  $$unsubscribe_userStore();
  $$unsubscribe_page();
  $$unsubscribe_importStore();
  return `${value ? `<div class="h-screen">${validate_component(AppEditor, "AppEditor").$$render(
    $$result,
    {
      summary,
      app: value,
      path: "",
      policy,
      fromHub: hubId != null
    },
    {},
    {}
  )}</div>` : ``}`;
});
export {
  Page as default
};
