import { c as create_ssr_component, s as subscribe, v as validate_component, a as set_store_value } from "../../../../../../../chunks/ssr.js";
import { c as ScriptService, D as DraftService } from "../../../../../../../chunks/services.gen.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import { w as workspaceStore, i as initialArgsStore } from "../../../../../../../chunks/stores2.js";
import { S as ScriptBuilder } from "../../../../../../../chunks/ScriptBuilder.js";
import { d as decodeState, s as sendUserToast, c as cleanValueProperties, o as orderedJsonStringify } from "../../../../../../../chunks/toast.js";
import { g as goto } from "../../../../../../../chunks/navigation.js";
import { r as replaceState } from "../../../../../../../chunks/client.js";
import { D as DiffDrawer } from "../../../../../../../chunks/DiffDrawer.js";
import { U as UnsavedConfirmationModal } from "../../../../../../../chunks/ScriptEditor.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $page, $$unsubscribe_page;
  let $initialArgsStore, $$unsubscribe_initialArgsStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_initialArgsStore = subscribe(initialArgsStore, (value) => $initialArgsStore = value);
  let initialState = window.location.hash != "" ? window.location.hash.slice(1) : void 0;
  let initialArgs = {};
  if ($initialArgsStore) {
    initialArgs = $initialArgsStore;
    set_store_value(initialArgsStore, $initialArgsStore = void 0, $initialArgsStore);
  }
  let topHash = $page.url.searchParams.get("topHash") ?? void 0;
  let hash = $page.url.searchParams.get("hash") ?? void 0;
  let scriptLoadedFromUrl = initialState != void 0 ? decodeState(initialState) : void 0;
  let script = void 0;
  let initialPath = "";
  let scriptBuilder = void 0;
  let reloadAction = async () => {
  };
  let savedScript = void 0;
  let fullyLoaded = false;
  async function loadScript() {
    fullyLoaded = false;
    if (scriptLoadedFromUrl != void 0 && scriptLoadedFromUrl.path == $page.params.path) {
      script = scriptLoadedFromUrl;
      reloadAction = async () => {
        scriptLoadedFromUrl = void 0;
        goto(`/scripts/edit/${script.path}`);
        loadScript();
      };
      async function compareAutosave() {
        savedScript = await ScriptService.getScriptByPathWithDraft({
          workspace: $workspaceStore,
          path: script.path
        });
        const draftOrDeployed = cleanValueProperties(savedScript?.draft || savedScript);
        const urlScript = cleanValueProperties(scriptLoadedFromUrl);
        if (orderedJsonStringify(draftOrDeployed) === orderedJsonStringify(urlScript)) {
          reloadAction();
        } else {
          sendUserToast("Script loaded from latest autosave stored in the URL", false, [
            {
              label: "Discard browser stored autosave and reload",
              callback: reloadAction
            },
            {
              label: "Show diff",
              callback: async () => {
                diffDrawer.openDrawer();
                diffDrawer.setDiff({
                  mode: "simple",
                  original: draftOrDeployed,
                  current: urlScript,
                  title: `${savedScript?.draft ? "Latest saved draft" : "Deployed"} <> Autosave`,
                  button: {
                    text: "Discard autosave",
                    onClick: reloadAction
                  }
                });
              }
            }
          ]);
        }
      }
      compareAutosave();
    } else {
      if (hash) {
        const scriptByHash = await ScriptService.getScriptByHash({ workspace: $workspaceStore, hash });
        savedScript = structuredClone(scriptByHash);
        script = {
          ...scriptByHash,
          parent_hash: hash,
          lock: void 0
        };
      } else {
        const scriptWithDraft = await ScriptService.getScriptByPathWithDraft({
          workspace: $workspaceStore,
          path: $page.params.path
        });
        savedScript = structuredClone(scriptWithDraft);
        if (scriptWithDraft.draft != void 0) {
          script = scriptWithDraft.draft;
          if (!scriptWithDraft.draft_only) {
            reloadAction = async () => {
              scriptLoadedFromUrl = void 0;
              await DraftService.deleteDraft({
                workspace: $workspaceStore,
                kind: "script",
                path: script.path
              });
              goto(`/scripts/edit/${script.path}`);
              loadScript();
            };
            const deployed = cleanValueProperties(scriptWithDraft);
            const draft = cleanValueProperties(script);
            sendUserToast("Script loaded from latest saved draft", false, [
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
          script = scriptWithDraft;
        }
        script.parent_hash = scriptWithDraft.hash;
      }
    }
    if (script) {
      initialPath = script.path;
      scriptBuilder?.setCode(script.content);
      if (topHash) {
        script.parent_hash = topHash;
      }
    }
    fullyLoaded = true;
  }
  let diffDrawer;
  async function restoreDraft() {
    if (!savedScript || !savedScript.draft) {
      sendUserToast("Could not restore to draft", true);
      return;
    }
    diffDrawer.closeDrawer();
    goto(`/scripts/edit/${savedScript.draft.path}`);
    loadScript();
  }
  async function restoreDeployed() {
    if (!savedScript) {
      sendUserToast("Could not restore to deployed", true);
      return;
    }
    diffDrawer.closeDrawer();
    if (savedScript.draft) {
      await DraftService.deleteDraft({
        workspace: $workspaceStore,
        kind: "script",
        path: savedScript.path
      });
    }
    goto(`/scripts/edit/${savedScript.path}`);
    loadScript();
  }
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        if ($workspaceStore) {
          loadScript();
        }
      }
    }
    $$rendered = `${validate_component(DiffDrawer, "DiffDrawer").$$render(
      $$result,
      {
        restoreDraft,
        restoreDeployed,
        this: diffDrawer
      },
      {
        this: ($$value) => {
          diffDrawer = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${script ? `${validate_component(ScriptBuilder, "ScriptBuilder").$$render(
      $$result,
      {
        initialPath,
        script,
        fullyLoaded,
        initialArgs,
        diffDrawer,
        searchParams: $page.url.searchParams,
        replaceStateFn: (path) => {
          replaceState(path, $page.state);
        },
        this: scriptBuilder,
        savedScript
      },
      {
        this: ($$value) => {
          scriptBuilder = $$value;
          $$settled = false;
        },
        savedScript: ($$value) => {
          savedScript = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(UnsavedConfirmationModal, "UnsavedConfirmationModal").$$render(
            $$result,
            {
              diffDrawer,
              savedValue: savedScript,
              modifiedValue: script
            },
            {},
            {}
          )}`;
        }
      }
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_page();
  $$unsubscribe_initialArgsStore();
  return $$rendered;
});
export {
  Page as default
};
