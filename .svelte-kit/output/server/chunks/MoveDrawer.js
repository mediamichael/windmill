import { c as create_ssr_component, v as validate_component, s as subscribe, d as createEventDispatcher, b as add_attribute } from "./ssr.js";
import { I as Icon } from "./Icon.js";
import { w as workspaceStore, u as userStore } from "./stores2.js";
import { A as Alert } from "./Alert.js";
import { B as Button, u as isOwner } from "./toast.js";
import { D as Drawer, a as DrawerContent } from "./DrawerContent.js";
import "./common.js";
import { P as Path } from "./VariableEditor.js";
const Archive = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "20",
        "height": "5",
        "x": "2",
        "y": "3",
        "rx": "1"
      }
    ],
    [
      "path",
      {
        "d": "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"
      }
    ],
    ["path", { "d": "M10 12h4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "archive" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const MoveDrawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  createEventDispatcher();
  let kind;
  let initialPath = "";
  let path = void 0;
  let summary = void 0;
  let drawer;
  let own = false;
  async function openDrawer(initialPath_l, summary_l, kind_l) {
    kind = kind_l;
    path = void 0;
    initialPath = initialPath_l;
    summary = summary_l;
    loadOwner();
    drawer.openDrawer();
  }
  function loadOwner() {
    own = isOwner(initialPath, $userStore, $workspaceStore);
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
      { this: drawer },
      {
        this: ($$value) => {
          drawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Move/Rename " + initialPath }, {}, {
            actions: () => {
              return `${validate_component(Button, "Button").$$render($$result, { disabled: !own }, {}, {
                default: () => {
                  return `Move/Rename`;
                }
              })} `;
            },
            default: () => {
              return `${!own ? `${validate_component(Alert, "Alert").$$render($$result, { type: "warning", title: "Not owner" }, {}, {
                default: () => {
                  return `Since you do not own this item, you cannot move this item (you can however fork it)`;
                }
              })}` : ``} <h2 class="border-b pb-1 mt-2 mb-4" data-svelte-h="svelte-7ute3u">Summary</h2> <input type="text" placeholder="Short summary to be displayed when listed" ${!own ? "disabled" : ""}${add_attribute("value", summary, 0)}> <h2 class="border-b pb-1 mt-10 mb-4" data-svelte-h="svelte-180s3s">Path</h2> <div class="flex flex-col mb-2 gap-6">${validate_component(Path, "Path").$$render(
                $$result,
                { disabled: !own, kind, initialPath, path },
                {
                  path: ($$value) => {
                    path = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div>`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_userStore();
  return $$rendered;
});
export {
  Archive as A,
  MoveDrawer as M
};
