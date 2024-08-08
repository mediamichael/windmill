import { c as create_ssr_component, v as validate_component, s as subscribe, d as createEventDispatcher, e as escape, f as each } from "./ssr.js";
import { I as Icon } from "./Icon.js";
import { T as TableCustom } from "./TableCustom.js";
import { h as GranularAclService, G as GroupService, U as UserService } from "./services.gen.js";
import { S as SimpleAutocomplete } from "./SimpleAutocomplete.js";
import { w as workspaceStore, u as userStore } from "./stores2.js";
import { A as Alert } from "./Alert.js";
import { u as isOwner, B as Button } from "./toast.js";
import { D as Drawer, a as DrawerContent } from "./DrawerContent.js";
import "./common.js";
import { T as Tooltip } from "./Tooltip.js";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import { T as ToggleButtonGroup, a as ToggleButton } from "./ToggleButtonGroup.js";
const Share = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
      }
    ],
    ["polyline", { "points": "16 6 12 2 8 6" }],
    [
      "line",
      {
        "x1": "12",
        "x2": "12",
        "y1": "2",
        "y2": "15"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "share" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ShareModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  createEventDispatcher();
  let kind;
  let path = "";
  let ownerKind = "user";
  let owner = "";
  let acls = [];
  let groups = [];
  let usernames = [];
  let drawer;
  let own = false;
  async function openDrawer(newPath, kind_l) {
    path = newPath;
    kind = kind_l;
    loadAcls();
    loadGroups();
    loadUsernames();
    loadOwner();
    drawer.openDrawer();
  }
  async function loadOwner() {
    own = isOwner(path, $userStore, $workspaceStore);
  }
  async function loadAcls() {
    acls = Object.entries(await GranularAclService.getGranularAcls({ workspace: $workspaceStore, path, kind }));
  }
  async function loadGroups() {
    groups = await GroupService.listGroupNames({ workspace: $workspaceStore });
  }
  async function loadUsernames() {
    usernames = await UserService.listUsernames({ workspace: $workspaceStore });
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
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Share " + path }, {}, {
            default: () => {
              return `<div class="flex flex-col gap-6"><h1>${escape(path)}</h1> <h2>Extra Permissions (${escape(acls?.length ?? 0)})   ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                default: () => {
                  return `Items already have default permissions. If belonging to an user or group, that group or
					user owns it and can write to it as well as modify its permisions and move it. Folders
					have read/write that apply to the whole folder and are additive to the items permissions.`;
                }
              })}</h2> ${!own ? `${validate_component(Alert, "Alert").$$render($$result, { type: "warning", title: "Not owner" }, {}, {
                default: () => {
                  return `Since you do not own this item, you cannot modify its permission`;
                }
              })}` : ``} <div>${own ? `<div class="flex flex-row flex-wrap gap-2 items-center"><div>${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
                $$result,
                { selected: ownerKind },
                {
                  selected: ($$value) => {
                    ownerKind = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: "user", size: "xs", label: "User" }, {}, {})} ${validate_component(ToggleButton, "ToggleButton").$$render(
                      $$result,
                      {
                        value: "group",
                        size: "xs",
                        label: "Group"
                      },
                      {},
                      {}
                    )}`;
                  }
                }
              )}</div> ${validate_component(SimpleAutocomplete, "AutoComplete").$$render(
                $$result,
                {
                  required: true,
                  noInputStyles: true,
                  items: ownerKind === "user" ? usernames : groups,
                  selectedItem: owner
                },
                {
                  selectedItem: ($$value) => {
                    owner = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${validate_component(Button, "Button").$$render($$result, { size: "sm" }, {}, {
                default: () => {
                  return `Add permission`;
                }
              })}</div>` : ``} ${validate_component(TableCustom, "TableCustom").$$render($$result, {}, {}, {
                body: () => {
                  return `<tbody slot="body">${each(acls, ([owner2, write]) => {
                    return `<tr><td>${escape(owner2)}</td> <td>${own ? ` <div>${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render($$result, { selected: write ? "writer" : "viewer" }, {}, {
                      default: () => {
                        return `${validate_component(ToggleButton, "ToggleButton").$$render(
                          $$result,
                          {
                            value: "viewer",
                            size: "xs",
                            label: "Viewer"
                          },
                          {},
                          {}
                        )} ${validate_component(ToggleButton, "ToggleButton").$$render(
                          $$result,
                          {
                            value: "writer",
                            size: "xs",
                            label: "Writer"
                          },
                          {},
                          {}
                        )} `;
                      }
                    })}</div> ` : `${escape(write)}`}</td> <td>${own ? `${validate_component(Button, "Button").$$render(
                      $$result,
                      {
                        variant: "border",
                        color: "red",
                        size: "xs"
                      },
                      {},
                      {
                        default: () => {
                          return `Delete
										`;
                        }
                      }
                    )}` : ``}</td> </tr>`;
                  })}</tbody>`;
                },
                "header-row": () => {
                  return `<tr slot="header-row" data-svelte-h="svelte-57yshg"><th>owner</th> <th></th> <th></th></tr>`;
                }
              })}</div></div>`;
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
  ShareModal as S,
  Share as a
};
