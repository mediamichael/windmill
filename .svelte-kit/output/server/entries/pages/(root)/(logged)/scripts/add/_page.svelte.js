import { c as create_ssr_component, s as subscribe, v as validate_component, a as set_store_value } from "../../../../../../chunks/ssr.js";
import { c as ScriptService } from "../../../../../../chunks/services.gen.js";
import { p as page } from "../../../../../../chunks/stores.js";
import { w as workspaceStore, d as defaultScripts, i as initialArgsStore } from "../../../../../../chunks/stores2.js";
import { S as ScriptBuilder } from "../../../../../../chunks/ScriptBuilder.js";
import { d as decodeState, e as emptySchema, b as emptyString } from "../../../../../../chunks/toast.js";
import { r as replaceState } from "../../../../../../chunks/client.js";
import { U as UnsavedConfirmationModal } from "../../../../../../chunks/ScriptEditor.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $defaultScripts, $$unsubscribe_defaultScripts;
  let $page, $$unsubscribe_page;
  let $initialArgsStore, $$unsubscribe_initialArgsStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_defaultScripts = subscribe(defaultScripts, (value) => $defaultScripts = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_initialArgsStore = subscribe(initialArgsStore, (value) => $initialArgsStore = value);
  let schema = emptySchema();
  const templatePath = $page.url.searchParams.get("template");
  const hubPath = $page.url.searchParams.get("hub");
  const showMeta = /true|1/i.test($page.url.searchParams.get("show_meta") ?? "0");
  let initialArgs = {};
  if ($initialArgsStore) {
    initialArgs = $initialArgsStore;
    set_store_value(initialArgsStore, $initialArgsStore = void 0, $initialArgsStore);
  }
  const path = $page.url.searchParams.get("path");
  const initialState = $page.url.hash != "" ? $page.url.hash.slice(1) : void 0;
  let scriptBuilder = void 0;
  function decodeStateAndHandleError(state) {
    try {
      return decodeState(state);
    } catch (e) {
      console.error("Error decoding state", e);
      return defaultScript;
    }
  }
  function defaultScript() {
    return {
      hash: "",
      path: path ?? "",
      summary: "",
      content: "",
      schema,
      is_template: false,
      extra_perms: {},
      language: $defaultScripts?.order?.filter((x) => $defaultScripts?.hidden == void 0 || !$defaultScripts.hidden.includes(x))?.[0] ?? "bun",
      kind: "script"
    };
  }
  let script = !path && initialState != void 0 ? decodeStateAndHandleError(initialState) : defaultScript();
  async function loadTemplate() {
    if (templatePath) {
      const template = await ScriptService.getScriptByPath({
        workspace: $workspaceStore,
        path: templatePath
      });
      script.summary = !emptyString(template.summary) ? `Copy of ${template.summary}` : "";
      script.description = template.description;
      script.content = template.content;
      script.schema = template.schema;
      script.language = template.language;
      scriptBuilder?.setCode(script.content);
    }
  }
  async function loadHub() {
    if (hubPath) {
      const { content, language, summary } = await ScriptService.getHubScriptByPath({ path: hubPath });
      script.description = `Fork of ${hubPath}`;
      script.content = content;
      script.summary = summary ?? "";
      script.language = language;
      scriptBuilder?.setCode(script.content);
    }
  }
  loadHub();
  let savedScript = void 0;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        if ($workspaceStore) {
          loadTemplate();
        }
      }
    }
    $$rendered = `${validate_component(ScriptBuilder, "ScriptBuilder").$$render(
      $$result,
      {
        initialArgs,
        lockedLanguage: templatePath != null || hubPath != null,
        searchParams: $page.url.searchParams,
        script,
        showMeta,
        replaceStateFn: (path2) => replaceState(path2, $page.state),
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
              savedValue: savedScript,
              modifiedValue: script
            },
            {},
            {}
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_defaultScripts();
  $$unsubscribe_page();
  $$unsubscribe_initialArgsStore();
  return $$rendered;
});
export {
  Page as default
};
