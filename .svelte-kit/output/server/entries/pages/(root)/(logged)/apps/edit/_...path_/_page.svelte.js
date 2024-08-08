import { c as create_ssr_component, s as subscribe, v as validate_component } from "../../../../../../../chunks/ssr.js";
import { A as AppEditor } from "../../../../../../../chunks/AppEditor.js";
import { A as AppService, D as DraftService } from "../../../../../../../chunks/services.gen.js";
import { w as workspaceStore } from "../../../../../../../chunks/stores2.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import { d as decodeState, s as sendUserToast, c as cleanValueProperties } from "../../../../../../../chunks/toast.js";
import "../../../../../../../chunks/client.js";
import { g as goto } from "../../../../../../../chunks/navigation.js";
import { D as DiffDrawer } from "../../../../../../../chunks/DiffDrawer.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $page, $$unsubscribe_page;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let app = void 0;
  let savedApp = void 0;
  let path = $page.params.path;
  let nodraft = $page.url.searchParams.get("nodraft");
  const initialState = nodraft ? void 0 : localStorage.getItem(`app-${$page.params.path}`);
  let stateLoadedFromUrl = initialState != void 0 ? decodeState(initialState) : void 0;
  async function loadApp() {
    const app_w_draft = await AppService.getAppByPathWithDraft({ path, workspace: $workspaceStore });
    const app_w_draft_ = structuredClone(app_w_draft);
    savedApp = {
      summary: app_w_draft_.summary,
      value: app_w_draft_.value,
      path: app_w_draft_.path,
      policy: app_w_draft_.policy,
      draft_only: app_w_draft_.draft_only,
      draft: app_w_draft_.draft?.["summary"] !== void 0 ? app_w_draft_.draft : app_w_draft_.draft ? {
        summary: app_w_draft_.summary,
        // backward compatibility for old drafts missing metadata
        value: app_w_draft_.draft,
        path: app_w_draft_.path,
        policy: app_w_draft_.policy
      } : void 0
    };
    if (stateLoadedFromUrl) {
      const reloadAction = async () => {
        stateLoadedFromUrl = void 0;
        await loadApp();
      };
      const actions = [];
      if (stateLoadedFromUrl) {
        actions.push({
          label: "Discard browser autosave and reload",
          callback: reloadAction
        });
        const draftOrDeployed = cleanValueProperties(savedApp.draft || savedApp);
        const urlScript = {
          ...draftOrDeployed,
          value: stateLoadedFromUrl
        };
        actions.push({
          label: "Show diff",
          callback: async () => {
            diffDrawer.openDrawer();
            diffDrawer.setDiff({
              mode: "simple",
              original: draftOrDeployed,
              current: urlScript,
              title: `${savedApp?.draft ? "Latest saved draft" : "Deployed"} <> Autosave`,
              button: {
                text: "Discard autosave",
                onClick: reloadAction
              }
            });
          }
        });
      }
      sendUserToast("App restored from browser storage", false, actions);
      app_w_draft.value = stateLoadedFromUrl;
      app = app_w_draft;
    } else if (app_w_draft.draft) {
      if (app_w_draft.summary !== void 0) {
        app = { ...app_w_draft, ...app_w_draft.draft };
      } else {
        app = { ...app_w_draft, value: app_w_draft.draft };
      }
      if (!app_w_draft.draft_only) {
        const reloadAction = () => {
          stateLoadedFromUrl = void 0;
          app = app_w_draft;
        };
        const deployed = cleanValueProperties(app_w_draft);
        const draft = cleanValueProperties(app ?? {});
        sendUserToast("app loaded from latest saved draft", false, [
          {
            label: "Discard draft and load from latest deployed version",
            callback: reloadAction
          },
          {
            label: "Show diff",
            callback: async () => {
              diffDrawer.openDrawer();
              diffDrawer.setDiff({
                mode: "simple",
                original: deployed,
                current: draft,
                title: "Deployed <> Draft",
                button: {
                  text: "Discard draft",
                  onClick: reloadAction
                }
              });
            }
          }
        ]);
      }
    } else {
      app = app_w_draft;
    }
  }
  async function restoreDraft() {
    if (!savedApp || !savedApp.draft) {
      sendUserToast("Could not restore to draft", true);
      return;
    }
    diffDrawer.closeDrawer();
    goto(`/apps/edit/${savedApp.draft.path}`);
    await loadApp();
  }
  async function restoreDeployed() {
    if (!savedApp) {
      sendUserToast("Could not restore to deployed", true);
      return;
    }
    diffDrawer.closeDrawer();
    if (savedApp.draft) {
      await DraftService.deleteDraft({
        workspace: $workspaceStore,
        kind: "app",
        path: savedApp.path
      });
    }
    goto(`/apps/edit/${savedApp.path}`);
    await loadApp();
  }
  let diffDrawer;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        if ($workspaceStore) {
          loadApp();
        }
      }
    }
    $$rendered = `${validate_component(DiffDrawer, "DiffDrawer").$$render(
      $$result,
      {
        restoreDeployed,
        restoreDraft,
        this: diffDrawer
      },
      {
        this: ($$value) => {
          diffDrawer = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${app ? `<div class="h-screen">${validate_component(AppEditor, "AppEditor").$$render(
      $$result,
      {
        summary: app.summary,
        app: app.value,
        path: app.path,
        policy: app.policy,
        diffDrawer,
        version: app.versions ? app.versions[app.versions.length - 1] : void 0,
        savedApp
      },
      {
        savedApp: ($$value) => {
          savedApp = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
