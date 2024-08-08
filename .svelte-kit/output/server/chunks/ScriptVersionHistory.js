import { c as create_ssr_component, s as subscribe, d as createEventDispatcher, v as validate_component, f as each, b as add_attribute, e as escape } from "./ssr.js";
import { S as Splitpanes, P as Pane } from "./Pane.js";
import { P as PanelSection } from "./PanelSection.js";
import { g as classNames, b as emptyString, B as Button } from "./toast.js";
import { c as ScriptService } from "./services.gen.js";
import { w as workspaceStore } from "./stores2.js";
import "./index2.js";
/* empty css                                     */
import "./common.js";
import { S as Skeleton } from "./Skeleton.js";
/* empty css                                             */
import "./scripts.js";
/* empty css                                               */
import { E as External_link } from "./Popover.js";
const ScriptVersionHistory = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  createEventDispatcher();
  let { openDetails = false } = $$props;
  let { scriptPath } = $$props;
  let selectedVersion = void 0;
  let versions = void 0;
  let loading = false;
  async function loadVersions() {
    loading = true;
    versions = await ScriptService.getScriptHistoryByPath({
      workspace: $workspaceStore,
      path: scriptPath
    });
    loading = false;
  }
  loadVersions();
  if ($$props.openDetails === void 0 && $$bindings.openDetails && openDetails !== void 0) $$bindings.openDetails(openDetails);
  if ($$props.scriptPath === void 0 && $$bindings.scriptPath && scriptPath !== void 0) $$bindings.scriptPath(scriptPath);
  $$unsubscribe_workspaceStore();
  return `${validate_component(Splitpanes, "Splitpanes").$$render($$result, { class: "!overflow-visible" }, {}, {
    default: () => {
      return `${validate_component(Pane, "Pane").$$render($$result, { size: 20 }, {}, {
        default: () => {
          return `${validate_component(PanelSection, "PanelSection").$$render($$result, { title: "Past Versions" }, {}, {
            default: () => {
              return `<div class="flex flex-col gap-2 w-full">${!loading ? `${versions && versions.length > 0 ? `<div class="flex gap-2 flex-col">${each(versions ?? [], (version) => {
                return ` <div${add_attribute(
                  "class",
                  classNames("border flex gap-1 truncate justify-between flex-row w-full items-center p-2 rounded-md cursor-pointer hover:bg-blue-50 hover:text-blue-400", selectedVersion?.script_hash == version.script_hash ? "bg-blue-100 text-blue-600" : ""),
                  0
                )}><span class="text-xs truncate">${emptyString(version.deployment_msg) ? `Version ${escape(version.script_hash)}` : `${escape(version.deployment_msg)}`}</span> ${openDetails ? `${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    class: "ml-2 inline-flex gap-1 text-xs items-center",
                    size: "xs",
                    color: "light",
                    variant: "border"
                  },
                  {},
                  {
                    default: () => {
                      return `Run page${validate_component(External_link, "ExternalLink").$$render($$result, { size: 14 }, {}, {})} `;
                    }
                  }
                )}` : ``} </div>`;
              })}</div>` : `<div class="text-sm text-tertiary" data-svelte-h="svelte-153zr3m">No items</div>`}` : `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[40], [40], [40], [40], [40]] }, {}, {})}`}</div>`;
            }
          })}`;
        }
      })} ${validate_component(Pane, "Pane").$$render($$result, { size: 80 }, {}, {
        default: () => {
          return `<div class="h-full w-full overflow-auto">${`<div class="text-sm p-2 text-tertiary" data-svelte-h="svelte-1typ6oq">Select a deployment version to see its details</div>`}</div>`;
        }
      })}`;
    }
  })}`;
});
export {
  ScriptVersionHistory as S
};
