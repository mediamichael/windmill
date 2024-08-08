import { c as create_ssr_component, v as validate_component, s as subscribe, d as createEventDispatcher, f as each, b as add_attribute, e as escape } from "./ssr.js";
import { I as Icon } from "./Icon.js";
import { S as Splitpanes, P as Pane } from "./Pane.js";
import { P as PanelSection } from "./PanelSection.js";
import { g as classNames, b as emptyString } from "./toast.js";
import { A as AppService } from "./services.gen.js";
import { w as workspaceStore } from "./stores2.js";
import "hash-sum";
import "./common.js";
import "./index2.js";
/* empty css                                     */
import { S as Skeleton } from "./Skeleton.js";
import "./gridUtils.js";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import "./AppSliderInputs.svelte_svelte_type_style_lang.js";
import "./index3.js";
/* empty css                                                  */
/* empty css                                          */
import "./svelte.js";
import "ansi_up";
import "@json2csv/plainjs";
/* empty css                                        */
import "ag-grid-community";
import "ol/proj.js";
/* empty css                                             */
import "d3-dag";
import "d3-zoom";
/* empty css                                                   */
import "@leeoniya/ufuzzy";
/* empty css                                                    */
import "./scripts.js";
/* empty css                                               */
import "easy-reactive";
import "./utils3.js";
import "chartjs-plugin-zoom";
import "chartjs-adapter-date-fns";
import "pdfjs-dist";
const Arrow_big_up = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M9 18v-6H5l7-7 7 7h-4v6H9z" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "arrow-big-up" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const DeploymentHistory = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { appPath } = $$props;
  let loading = false;
  let versions = [];
  let selectedVersion = void 0;
  async function loadVersions() {
    if (appPath === void 0) {
      return;
    }
    loading = true;
    versions = await AppService.getAppHistoryByPath({
      workspace: $workspaceStore,
      path: appPath
    });
    loading = false;
  }
  createEventDispatcher();
  loadVersions();
  if ($$props.appPath === void 0 && $$bindings.appPath && appPath !== void 0) $$bindings.appPath(appPath);
  $$unsubscribe_workspaceStore();
  return `${validate_component(Splitpanes, "Splitpanes").$$render($$result, { class: "!overflow-visible" }, {}, {
    default: () => {
      return `${validate_component(Pane, "Pane").$$render($$result, { size: 20 }, {}, {
        default: () => {
          return `${validate_component(PanelSection, "PanelSection").$$render($$result, { title: "Past Deployments" }, {}, {
            default: () => {
              return `<div class="flex flex-col gap-2 w-full">${!loading ? `${versions.length > 0 ? `<div class="flex gap-2 flex-col">${each(versions ?? [], (version) => {
                return ` <div${add_attribute(
                  "class",
                  classNames("border flex gap-1 truncate justify-between flex-row w-full items-center p-2 rounded-md cursor-pointer hover:bg-blue-50 hover:text-blue-400", selectedVersion?.version == version.version ? "bg-blue-100 text-blue-600" : ""),
                  0
                )}><span class="text-xs truncate">${emptyString(version.deployment_msg) ? `Version ${escape(version.version)}` : `${escape(version.deployment_msg)}`}</span> </div>`;
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
  Arrow_big_up as A,
  DeploymentHistory as D
};
