import { c as create_ssr_component, s as subscribe, v as validate_component, a as set_store_value } from "../../../../../../../chunks/ssr.js";
import { D as DraftService, F as FlowService } from "../../../../../../../chunks/services.gen.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import { F as FlowBuilder } from "../../../../../../../chunks/FlowBuilder.js";
import { w as workspaceStore, i as initialArgsStore } from "../../../../../../../chunks/stores2.js";
import { d as decodeState, e as emptySchema, s as sendUserToast, c as cleanValueProperties, o as orderedJsonStringify } from "../../../../../../../chunks/toast.js";
import { a as initFlow } from "../../../../../../../chunks/flowStore.js";
import { g as goto } from "../../../../../../../chunks/navigation.js";
import "../../../../../../../chunks/client.js";
import { w as writable } from "../../../../../../../chunks/index.js";
import { D as DiffDrawer } from "../../../../../../../chunks/DiffDrawer.js";
import { U as UnsavedConfirmationModal } from "../../../../../../../chunks/ScriptEditor.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $page, $$unsubscribe_page;
  let $initialArgsStore, $$unsubscribe_initialArgsStore;
  let $flowStore, $$unsubscribe_flowStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_initialArgsStore = subscribe(initialArgsStore, (value) => $initialArgsStore = value);
  let nodraft = $page.url.searchParams.get("nodraft");
  const initialState = nodraft ? void 0 : localStorage.getItem(`flow-${$page.params.path}`);
  let stateLoadedFromUrl = initialState != void 0 ? decodeState(initialState) : void 0;
  let initialArgs = {};
  if ($initialArgsStore) {
    initialArgs = $initialArgsStore;
    set_store_value(initialArgsStore, $initialArgsStore = void 0, $initialArgsStore);
  }
  let savedFlow = void 0;
  const flowStore = writable({
    summary: "",
    value: { modules: [] },
    path: "",
    edited_at: "",
    edited_by: "",
    archived: false,
    extra_perms: {},
    schema: emptySchema()
  });
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => $flowStore = value);
  const flowStateStore = writable({});
  let loading = false;
  let selectedId = "settings-metadata";
  let nobackenddraft = false;
  async function loadFlow() {
    loading = true;
    let flow;
    let statePath = stateLoadedFromUrl?.path;
    if (stateLoadedFromUrl != void 0 && statePath == $page.params.path) {
      savedFlow = await FlowService.getFlowByPathWithDraft({
        workspace: $workspaceStore,
        path: statePath
      });
      const draftOrDeployed = cleanValueProperties(savedFlow?.draft || savedFlow);
      const urlScript = cleanValueProperties(stateLoadedFromUrl.flow);
      flow = stateLoadedFromUrl.flow;
      const reloadAction = () => {
        stateLoadedFromUrl = void 0;
        goto(`/flows/edit/${statePath}`);
        loadFlow();
      };
      if (orderedJsonStringify(draftOrDeployed) === orderedJsonStringify(urlScript)) {
        reloadAction();
      } else {
        sendUserToast("Flow loaded from browser storage", false, [
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
                title: `${savedFlow?.draft ? "Latest saved draft" : "Deployed"} <> Autosave`,
                button: {
                  text: "Discard autosave",
                  onClick: reloadAction
                }
              });
            }
          }
        ]);
      }
    } else {
      const flowWithDraft = await FlowService.getFlowByPathWithDraft({
        workspace: $workspaceStore,
        path: $page.params.path
      });
      savedFlow = {
        ...structuredClone(flowWithDraft),
        draft: flowWithDraft.draft ? {
          ...structuredClone(flowWithDraft.draft),
          path: flowWithDraft.draft.path ?? flowWithDraft.path
          // backward compatibility for old drafts missing path
        } : void 0
      };
      if (flowWithDraft.draft != void 0 && !nobackenddraft) {
        flow = flowWithDraft.draft;
        if (!flowWithDraft.draft_only) {
          const deployed = cleanValueProperties(flowWithDraft);
          const draft = cleanValueProperties(flow);
          const reloadAction = async () => {
            stateLoadedFromUrl = void 0;
            await DraftService.deleteDraft({
              workspace: $workspaceStore,
              kind: "flow",
              path: flow.path
            });
            nobackenddraft = true;
            loadFlow();
          };
          sendUserToast("flow loaded from latest saved draft", false, [
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
        flow = flowWithDraft;
      }
    }
    await initFlow(flow, flowStore, flowStateStore);
    loading = false;
    selectedId = stateLoadedFromUrl?.selectedId ?? $page.url.searchParams.get("selected");
  }
  let diffDrawer;
  async function restoreDraft() {
    if (!savedFlow || !savedFlow.draft) {
      sendUserToast("Could not restore to draft", true);
      return;
    }
    diffDrawer.closeDrawer();
    goto(`/flows/edit/${savedFlow.draft.path}`);
    loadFlow();
  }
  async function restoreDeployed() {
    if (!savedFlow) {
      sendUserToast("Could not restore to deployed", true);
      return;
    }
    diffDrawer.closeDrawer();
    if (savedFlow.draft) {
      await DraftService.deleteDraft({
        workspace: $workspaceStore,
        kind: "flow",
        path: savedFlow.path
      });
    }
    goto(`/flows/edit/${savedFlow.path}`);
    loadFlow();
  }
  if ($$props.flowStore === void 0 && $$bindings.flowStore && flowStore !== void 0) $$bindings.flowStore(flowStore);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        if ($workspaceStore) {
          loadFlow();
        }
      }
    }
    $$rendered = ` ${validate_component(DiffDrawer, "DiffDrawer").$$render(
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
    )} ${validate_component(FlowBuilder, "FlowBuilder").$$render(
      $$result,
      {
        flowStore,
        flowStateStore,
        initialPath: $page.params.path,
        newFlow: false,
        selectedId,
        initialArgs,
        loading,
        diffDrawer,
        savedFlow
      },
      {
        savedFlow: ($$value) => {
          savedFlow = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(UnsavedConfirmationModal, "UnsavedConfirmationModal").$$render(
            $$result,
            {
              diffDrawer,
              savedValue: savedFlow,
              modifiedValue: $flowStore
            },
            {},
            {}
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_page();
  $$unsubscribe_initialArgsStore();
  $$unsubscribe_flowStore();
  return $$rendered;
});
export {
  Page as default
};
