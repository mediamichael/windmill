import { c as create_ssr_component, s as subscribe, d as createEventDispatcher, v as validate_component, f as each, b as add_attribute, e as escape } from "./ssr.js";
import { S as Splitpanes, P as Pane } from "./Pane.js";
import { P as PanelSection } from "./PanelSection.js";
import { g as classNames, b as emptyString } from "./toast.js";
import { F as FlowService } from "./services.gen.js";
import { w as workspaceStore } from "./stores2.js";
import "./index2.js";
import "./common.js";
import { D as Drawer, a as DrawerContent } from "./DrawerContent.js";
import { S as Skeleton } from "./Skeleton.js";
/* empty css                                             */
import "d3-dag";
import "d3-zoom";
/* empty css                                                   */
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import "@leeoniya/ufuzzy";
import "./index3.js";
/* empty css                                                  */
import "./scripts.js";
/* empty css                                               */
import "yaml";
const FlowHistory = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { path } = $$props;
  let drawer;
  let loading = false;
  let versions = [];
  let selectedVersion = void 0;
  function open() {
    loadVersions();
    drawer.openDrawer();
  }
  async function loadVersions() {
    loading = true;
    versions = await FlowService.getFlowHistory({ workspace: $workspaceStore, path });
    loading = false;
  }
  createEventDispatcher();
  if ($$props.path === void 0 && $$bindings.path && path !== void 0) $$bindings.path(path);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "1200px", this: drawer },
      {
        this: ($$value) => {
          drawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Splitpanes, "Splitpanes").$$render($$result, { class: "!overflow-visible" }, {}, {
                default: () => {
                  return `${validate_component(Pane, "Pane").$$render($$result, { size: 20 }, {}, {
                    default: () => {
                      return `${validate_component(PanelSection, "PanelSection").$$render($$result, { title: "Past Deployments" }, {}, {
                        default: () => {
                          return `<div class="flex flex-col gap-2 w-full">${!loading ? `${versions.length > 0 ? `<div class="flex gap-2 flex-col">${each(versions ?? [], (version) => {
                            return ` <div${add_attribute(
                              "class",
                              classNames("border flex gap-1 truncate justify-between flex-row w-full items-center p-2 rounded-md cursor-pointer hover:bg-blue-50 hover:text-blue-400", selectedVersion?.id == version.id ? "bg-blue-100 text-blue-600" : ""),
                              0
                            )} role="button" tabindex="0"><span class="text-xs truncate">${emptyString(version.deployment_msg) ? `Version ${escape(version.id)}` : `${escape(version.deployment_msg)}`}</span> </div>`;
                          })}</div>` : `<div class="text-sm text-tertiary" data-svelte-h="svelte-153zr3m">No items</div>`}` : `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[40], [40], [40], [40], [40]] }, {}, {})}`}</div>`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Pane, "Pane").$$render($$result, { size: 80 }, {}, {
                    default: () => {
                      return `<div class="h-full w-full overflow-auto">${`<div class="text-sm p-2 text-tertiary" data-svelte-h="svelte-12fhbv3">Select a deployment version to see its details</div>`}</div>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
export {
  FlowHistory as F
};
