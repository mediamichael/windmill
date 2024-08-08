import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import "./index2.js";
import "yaml";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import { B as Button } from "./toast.js";
import "minimatch";
import { D as Drawer, a as DrawerContent } from "./DrawerContent.js";
import "./common.js";
import { D as DeployWorkspace } from "./DeployWorkspace.js";
const DeployWorkspaceDrawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let initialPath = void 0;
  let kind = void 0;
  let drawer = void 0;
  let workspaceToDeployTo = void 0;
  let deployWorkspace = void 0;
  async function openDrawer(initialPath_l, kind_l) {
    initialPath = initialPath_l;
    kind = kind_l;
    drawer?.openDrawer();
  }
  if ($$props.openDrawer === void 0 && $$bindings.openDrawer && openDrawer !== void 0) $$bindings.openDrawer(openDrawer);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "900px", this: drawer },
      {
        this: ($$value) => {
          drawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Deploy " + initialPath }, {}, {
            actions: () => {
              return `${validate_component(Button, "Button").$$render(
                $$result,
                {
                  disabled: workspaceToDeployTo == void 0
                },
                {},
                {
                  default: () => {
                    return `Deploy All`;
                  }
                }
              )} `;
            },
            default: () => {
              return `${kind != void 0 && initialPath != void 0 ? `${validate_component(DeployWorkspace, "DeployWorkspace").$$render(
                $$result,
                {
                  hideButton: true,
                  initialPath,
                  kind,
                  workspaceToDeployTo,
                  this: deployWorkspace
                },
                {
                  workspaceToDeployTo: ($$value) => {
                    workspaceToDeployTo = $$value;
                    $$settled = false;
                  },
                  this: ($$value) => {
                    deployWorkspace = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}` : ``}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  DeployWorkspaceDrawer as D
};
