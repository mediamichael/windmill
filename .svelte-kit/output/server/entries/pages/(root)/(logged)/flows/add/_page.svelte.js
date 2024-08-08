import { c as create_ssr_component, s as subscribe, v as validate_component, a as set_store_value } from "../../../../../../chunks/ssr.js";
import { t as tick } from "../../../../../../chunks/Head.js";
import { g as goto } from "../../../../../../chunks/navigation.js";
import "../../../../../../chunks/client.js";
import { p as page } from "../../../../../../chunks/stores.js";
import { F as FlowBuilder } from "../../../../../../chunks/FlowBuilder.js";
import { U as UnsavedConfirmationModal } from "../../../../../../chunks/ScriptEditor.js";
import { i as importFlowStore, a as initFlow } from "../../../../../../chunks/flowStore.js";
import { F as FlowService } from "../../../../../../chunks/services.gen.js";
import { u as userStore, w as workspaceStore, i as initialArgsStore } from "../../../../../../chunks/stores2.js";
import { e as emptySchema, d as decodeState, s as sendUserToast } from "../../../../../../chunks/toast.js";
import { w as writable } from "../../../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $flowStore, $$unsubscribe_flowStore;
  let $importFlowStore, $$unsubscribe_importFlowStore;
  let $page, $$unsubscribe_page;
  let $initialArgsStore, $$unsubscribe_initialArgsStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_importFlowStore = subscribe(importFlowStore, (value) => $importFlowStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_initialArgsStore = subscribe(initialArgsStore, (value) => $initialArgsStore = value);
  let nodraft = $page.url.searchParams.get("nodraft");
  const hubId = $page.url.searchParams.get("hub");
  const templatePath = $page.url.searchParams.get("template");
  const templateId = $page.url.searchParams.get("template_id");
  const initialState = hubId || templatePath || nodraft ? void 0 : localStorage.getItem("flow");
  let selectedId = "settings-metadata";
  let loading = false;
  let initialPath = void 0;
  let pathStoreInit = void 0;
  let initialArgs = {};
  if ($initialArgsStore) {
    initialArgs = $initialArgsStore;
    set_store_value(initialArgsStore, $initialArgsStore = void 0, $initialArgsStore);
  }
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
  async function loadFlow() {
    loading = true;
    let flow = {
      path: "",
      summary: "",
      value: { modules: [] },
      edited_by: "",
      edited_at: "",
      archived: false,
      extra_perms: {},
      schema: emptySchema()
    };
    let state = initialState ? decodeState(initialState) : void 0;
    const initialStateQuery = $page.url.hash != "" ? $page.url.hash.slice(1) : void 0;
    if (initialStateQuery) {
      state = decodeState(initialStateQuery);
    }
    if ($importFlowStore) {
      flow = $importFlowStore;
      set_store_value(importFlowStore, $importFlowStore = void 0, $importFlowStore);
      sendUserToast("Flow loaded from YAML/JSON");
    } else if (!templatePath && !hubId && state) {
      sendUserToast("Flow restored from draft", false, [
        {
          label: "Start from blank instead",
          callback: () => {
            set_store_value(
              flowStore,
              $flowStore = {
                summary: "",
                value: { modules: [] },
                path: "",
                edited_at: "",
                edited_by: "",
                archived: false,
                extra_perms: {},
                schema: emptySchema()
              },
              $flowStore
            );
          }
        }
      ]);
      flow = state.flow;
      pathStoreInit = state.path;
      state?.selectedId && (selectedId = state?.selectedId);
    } else {
      if (templatePath) {
        let template;
        if (templateId) {
          template = await FlowService.getFlowVersion({
            workspace: $workspaceStore,
            path: templatePath,
            version: parseInt(templateId)
          });
        } else {
          template = await FlowService.getFlowByPath({
            workspace: $workspaceStore,
            path: templatePath
          });
        }
        Object.assign(flow, template);
        const oldPath = templatePath.split("/");
        initialPath = `u/${$userStore?.username.split("@")[0]}/${oldPath[oldPath.length - 1]}_fork`;
        flow = flow;
        goto("?", { replaceState: true });
        selectedId = "settings-metadata";
      } else if (hubId) {
        const hub = await FlowService.getHubFlowById({ id: Number(hubId) });
        delete hub["comments"];
        initialPath = `u/${$userStore?.username}/flow_${hubId}`;
        Object.assign(flow, hub.flow);
        flow = flow;
        goto("?", { replaceState: true });
        selectedId = "constants";
      } else {
        tick().then(() => {
          flowBuilder?.triggerTutorial();
        });
      }
    }
    await initFlow(flow, flowStore, flowStateStore);
    loading = false;
  }
  loadFlow();
  let getSelectedId = void 0;
  let flowBuilder = void 0;
  let savedFlow = void 0;
  if ($$props.flowStore === void 0 && $$bindings.flowStore && flowStore !== void 0) $$bindings.flowStore(flowStore);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = ` ${validate_component(FlowBuilder, "FlowBuilder").$$render(
      $$result,
      {
        initialPath,
        pathStoreInit,
        newFlow: true,
        initialArgs,
        flowStore,
        flowStateStore,
        selectedId,
        loading,
        getSelectedId,
        this: flowBuilder,
        savedFlow
      },
      {
        getSelectedId: ($$value) => {
          getSelectedId = $$value;
          $$settled = false;
        },
        this: ($$value) => {
          flowBuilder = $$value;
          $$settled = false;
        },
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
  $$unsubscribe_userStore();
  $$unsubscribe_workspaceStore();
  $$unsubscribe_flowStore();
  $$unsubscribe_importFlowStore();
  $$unsubscribe_page();
  $$unsubscribe_initialArgsStore();
  return $$rendered;
});
export {
  Page as default
};
