import { c as create_ssr_component, s as subscribe, d as createEventDispatcher, v as validate_component, b as add_attribute, f as each, e as escape } from "./ssr.js";
import { w as workspaceStore, u as userStore } from "./stores2.js";
import { d as FolderService, U as UserService, G as GroupService } from "./services.gen.js";
import { S as SimpleAutocomplete } from "./SimpleAutocomplete.js";
import { T as TableCustom } from "./TableCustom.js";
import { A as Alert } from "./Alert.js";
import "yaml";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import { B as Button } from "./toast.js";
import "minimatch";
import { D as Drawer, a as DrawerContent } from "./DrawerContent.js";
import "./common.js";
import { S as Skeleton } from "./Skeleton.js";
import { G as GroupEditor } from "./GroupEditor.js";
import { T as ToggleButtonGroup, a as ToggleButton } from "./ToggleButtonGroup.js";
import { S as Section } from "./Section.js";
import { L as Label } from "./Label.js";
import { P as Plus } from "./plus.js";
import { E as Eye } from "./eye.js";
const FolderEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let { name } = $$props;
  let can_write = false;
  let folder;
  let perms = void 0;
  let usernames = [];
  let groups = [];
  let ownerItem = "";
  let newGroup;
  let viewGroup;
  async function loadUsernames() {
    usernames = await UserService.listUsernames({ workspace: $workspaceStore });
  }
  async function loadGroups() {
    groups = await GroupService.listGroupNames({ workspace: $workspaceStore });
  }
  async function load() {
    loadUsernames();
    loadGroups();
    await loadFolder();
  }
  let folderNotFound = void 0;
  async function loadFolder() {
    try {
      folder = await FolderService.getFolder({ workspace: $workspaceStore, name });
      summary = folder.summary ?? "";
      can_write = $userStore != void 0 && (folder?.owners.includes("u/" + $userStore.username) || ($userStore.is_admin ?? false) || ($userStore.is_super_admin ?? false) || $userStore.pgroups.findIndex((x) => folder?.owners.includes(x)) != -1);
      perms = Array.from(new Set(Object.entries(folder?.extra_perms ?? {}).map((x) => x[0]).concat(folder?.owners ?? []))).map((x) => {
        return { owner_name: x, role: getRole(x) };
      });
    } catch (e) {
      folderNotFound = true;
    }
  }
  function getRole(x) {
    const viewer = x in (folder?.extra_perms ?? {});
    const writer = viewer && (folder?.extra_perms ?? {})[x];
    const owner = folder?.owners?.includes(x);
    if (owner) {
      return "admin";
    } else if (writer) {
      return "writer";
    } else {
      return "viewer";
    }
  }
  let ownerKind = "user";
  let newGroupName = "";
  let summary = "";
  createEventDispatcher();
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        if ($workspaceStore && $userStore) {
          load();
        }
      }
    }
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { this: newGroup },
      {
        this: ($$value) => {
          newGroup = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "New Group" }, {}, {
            default: () => {
              return `${`<div class="flex flex-row"><input class="mr-2" placeholder="New group name"${add_attribute("value", newGroupName, 0)}> ${validate_component(Button, "Button").$$render(
                $$result,
                {
                  size: "md",
                  startIcon: { icon: Plus },
                  disabled: !newGroupName
                },
                {},
                {
                  default: () => {
                    return `New group`;
                  }
                }
              )}</div>`}`;
            }
          })}`;
        }
      }
    )} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { this: viewGroup },
      {
        this: ($$value) => {
          viewGroup = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Group " + ownerItem }, {}, {
            default: () => {
              return `${validate_component(GroupEditor, "GroupEditor").$$render($$result, { name: ownerItem }, {}, {})}`;
            }
          })}`;
        }
      }
    )} ${validate_component(Section, "Section").$$render($$result, { label: "Metadata", class: "mb-4" }, {}, {
      default: () => {
        return `${validate_component(Label, "Label").$$render($$result, { label: "Summary" }, {}, {
          default: () => {
            return `<div class="flex flex-row gap-2"><input placeholder="Short summary to be displayed when listed"${add_attribute("value", summary, 0)}> ${validate_component(Button, "Button").$$render($$result, { size: "sm", disabled: !can_write }, {}, {
              default: () => {
                return `Save`;
              }
            })}</div>`;
          }
        })}`;
      }
    })} ${validate_component(Section, "Section").$$render(
      $$result,
      {
        label: `Permissions (${perms?.length ?? 0})`
      },
      {},
      {
        default: () => {
          return `<div class="flex flex-col gap-6">${can_write ? `${validate_component(Alert, "Alert").$$render(
            $$result,
            {
              role: "info",
              title: "New permissions may take up to 60s to apply"
            },
            {},
            {
              default: () => {
                return `<span class="text-xs text-tertiary" data-svelte-h="svelte-kjowyz">Due to permissions cache invalidation</span>`;
              }
            }
          )} <div class="flex items-center gap-1"><div>${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
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
              selectedItem: ownerItem
            },
            {
              selectedItem: ($$value) => {
                ownerItem = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${ownerKind == "group" ? `${validate_component(Button, "Button").$$render(
            $$result,
            {
              title: "View Group",
              btnClasses: "!p-1.5",
              variant: "border",
              size: "xs",
              disabled: !ownerItem || ownerItem == "",
              startIcon: { icon: Eye },
              iconOnly: true
            },
            {},
            {}
          )} ${validate_component(Button, "Button").$$render(
            $$result,
            {
              title: "New Group",
              btnClasses: "!p-1.5",
              variant: "border",
              size: "xs",
              startIcon: { icon: Plus },
              iconOnly: true
            },
            {},
            {}
          )}` : ``} ${validate_component(Button, "Button").$$render(
            $$result,
            {
              disabled: ownerItem == "",
              variant: "contained",
              color: "blue",
              size: "sm"
            },
            {},
            {
              default: () => {
                return `Grant permission to folder`;
              }
            }
          )}</div>` : ``} ${folderNotFound ? `${validate_component(Alert, "Alert").$$render(
            $$result,
            {
              type: "warning",
              title: "Folder not found",
              size: "xs"
            },
            {},
            {
              default: () => {
                return `The folder &quot;${escape(name)}&quot; does not exist in the workspace. You can create it by clicking the
				button below. An item can seemingly be in a folder given its path without the folder
				existing. A windmill folder has settable permissions that its children inherit. If an item
				is within a non-existing folders, only admins will see it.`;
              }
            }
          )} ${validate_component(Button, "Button").$$render(
            $$result,
            {
              color: "light",
              variant: "border",
              wrapperClasses: "w-min",
              startIcon: { icon: Plus },
              size: "xs"
            },
            {},
            {
              default: () => {
                return `Create folder &quot;${escape(name)}&quot;`;
              }
            }
          )}` : ``} ${perms ? `${validate_component(TableCustom, "TableCustom").$$render($$result, {}, {}, {
            body: () => {
              return `<tbody slot="body">${each(perms, ({ owner_name, role }) => {
                return `<tr><td>${escape(owner_name)}</td> <td>${can_write ? `<div>${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render($$result, { selected: role }, {}, {
                  default: () => {
                    return `${validate_component(ToggleButton, "ToggleButton").$$render(
                      $$result,
                      {
                        value: "viewer",
                        size: "xs",
                        label: "Viewer",
                        tooltip: "A viewer of a folder has read-only access to all the elements (scripts/flows/apps/schedules/resources/variables) inside the folder"
                      },
                      {},
                      {}
                    )} ${validate_component(ToggleButton, "ToggleButton").$$render(
                      $$result,
                      {
                        position: "center",
                        value: "writer",
                        size: "xs",
                        label: "Writer",
                        tooltip: "A writer of a folder has read AND write access to all the elements (scripts/flows/apps/schedules/resources/variables) inside the folder"
                      },
                      {},
                      {}
                    )} ${validate_component(ToggleButton, "ToggleButton").$$render(
                      $$result,
                      {
                        position: "right",
                        value: "admin",
                        size: "xs",
                        label: "Admin",
                        tooltip: "An admin of a folder has read AND write access to all the elements inside the folders and can manage the permissions as well as add new admins"
                      },
                      {},
                      {}
                    )} `;
                  }
                })}</div> ` : `${escape(role)} `}</td> <td>${can_write ? `<button class="ml-2 text-red-500" data-svelte-h="svelte-jpy69i">remove</button> ` : ``}</td> </tr>`;
              })}</tbody>`;
            },
            "header-row": () => {
              return `<tr slot="header-row" data-svelte-h="svelte-by7mp6"><th>user/group</th> <th></th> <th></th></tr>`;
            }
          })}  ` : `${folderNotFound === void 0 ? `<div class="flex flex-col">${each(new Array(6), (_) => {
            return `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[2], 0.7] }, {}, {})}`;
          })}</div>` : ``}`}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_userStore();
  return $$rendered;
});
export {
  FolderEditor as F
};
