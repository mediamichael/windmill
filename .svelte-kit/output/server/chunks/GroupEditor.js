import { c as create_ssr_component, s as subscribe, d as createEventDispatcher, v as validate_component, b as add_attribute, f as each, e as escape } from "./ssr.js";
import { G as GroupService, U as UserService } from "./services.gen.js";
import { u as userStore, w as workspaceStore } from "./stores2.js";
import { S as SimpleAutocomplete } from "./SimpleAutocomplete.js";
import "./index2.js";
import { B as Button, a as canWrite } from "./toast.js";
/* empty css                                     */
import "./common.js";
import { S as Skeleton } from "./Skeleton.js";
import { T as TableCustom } from "./TableCustom.js";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import { T as ToggleButtonGroup, a as ToggleButton } from "./ToggleButtonGroup.js";
import { S as Section } from "./Section.js";
import { L as Label } from "./Label.js";
const GroupEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { name } = $$props;
  let can_write = false;
  let group;
  let instance_group;
  let members = void 0;
  let usernames = [];
  let username = "";
  let summary = "";
  createEventDispatcher();
  async function loadUsernames() {
    usernames = await UserService.listUsernames({ workspace: $workspaceStore });
  }
  async function load() {
    return Promise.all([loadGroup(), loadInstanceGroup(), loadUsernames()]);
  }
  async function loadInstanceGroup() {
    try {
      instance_group = await GroupService.getInstanceGroup({ name });
    } catch (e) {
      instance_group = void 0;
    }
  }
  async function loadGroup() {
    try {
      group = await GroupService.getGroup({ workspace: $workspaceStore, name });
      can_write = canWrite(name, group.extra_perms ?? {}, $userStore);
      members = Array.from(new Set(Object.entries(group?.extra_perms ?? {}).filter(([k, v]) => k.startsWith("u/") && v).map(([k, _]) => k.split("/")[1]).concat(group?.members ?? []))).map((x) => {
        return { member_name: x, role: getRole(x) };
      });
      summary = group.summary ?? "";
    } catch (e) {
      can_write = false;
      members = [];
      summary = "";
      group = { name };
    }
  }
  function getRole(x) {
    const writer = "u/" + x in (group?.extra_perms ?? {}) && (group?.extra_perms ?? {})["u/" + x];
    const member = group?.members?.includes(x);
    if (writer && member) {
      return "admin";
    } else if (writer) {
      return "manager";
    } else {
      return "member";
    }
  }
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
    $$rendered = `${validate_component(Section, "Section").$$render($$result, { label: "Metadata", class: "mb-4" }, {}, {
      default: () => {
        return `${validate_component(Label, "Label").$$render($$result, { label: "Summary" }, {}, {
          default: () => {
            return `<div class="flex flex-row gap-2"><input placeholder="Short summary to be displayed when listed"${add_attribute("value", summary, 0)}> ${validate_component(Button, "Button").$$render($$result, { size: "sm" }, {}, {
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
        label: `Members (${members?.length ?? 0})`
      },
      {},
      {
        default: () => {
          return `${can_write ? `<div class="flex items-start">${validate_component(SimpleAutocomplete, "AutoComplete").$$render(
            $$result,
            {
              required: true,
              noInputStyles: true,
              items: usernames,
              selectedItem: username
            },
            {
              selectedItem: ($$value) => {
                username = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "contained",
              color: "blue",
              size: "sm",
              btnClasses: "!ml-4"
            },
            {},
            {
              default: () => {
                return `Add member`;
              }
            }
          )}</div>` : ``} ${members ? `${validate_component(TableCustom, "TableCustom").$$render($$result, {}, {}, {
            body: () => {
              return `<tbody slot="body">${each(members, ({ member_name, role }) => {
                return `<tr><td>${escape(member_name)}</td> <td>${can_write ? `<div>${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render($$result, { selected: role }, {}, {
                  default: () => {
                    return `${validate_component(ToggleButton, "ToggleButton").$$render(
                      $$result,
                      {
                        value: "member",
                        size: "xs",
                        label: "Member",
                        tooltip: "A Member of a group can see everything the group can see, write to everything the group can write, and generally act on behalf of the group"
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
                        tooltip: "An admin of a group is a member of a group that can also add and remove members to the group, or make them admin."
                      },
                      {},
                      {}
                    )} ${role === "manager" ? `${validate_component(ToggleButton, "ToggleButton").$$render(
                      $$result,
                      {
                        value: "manager",
                        size: "xs",
                        label: "Manager",
                        tooltip: "A manager of a group can manage the group, adding and removing users and\n												change their roles. Being a manager does not make you a member"
                      },
                      {},
                      {}
                    )}` : ``} `;
                  }
                })}</div> ` : `${escape(role)} `}</td> <td>${can_write ? `<button class="ml-2 text-red-500" data-svelte-h="svelte-1erlppf">remove</button> ` : ``}</td> </tr>`;
              })}</tbody>`;
            },
            "header-row": () => {
              return `<tr slot="header-row" data-svelte-h="svelte-107du0a"><th>user</th> <th></th> <th></th></tr>`;
            }
          })} ${instance_group?.emails ? `<h2 class="mt-10" data-svelte-h="svelte-l9k8gm">Members from the instance group</h2> ${validate_component(TableCustom, "TableCustom").$$render($$result, {}, {}, {
            body: () => {
              return `<tbody slot="body">${each(instance_group?.emails ?? [], (email) => {
                return `<tr><td>${escape(email)}</td> </tr>`;
              })}</tbody>`;
            },
            "header-row": () => {
              return `<tr slot="header-row" data-svelte-h="svelte-1so8rku"><th>user</th></tr>`;
            }
          })}` : ``}` : `<div class="flex flex-col">${each(new Array(6), (_) => {
            return `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[2], 0.7] }, {}, {})}`;
          })}</div>`}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_userStore();
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
export {
  GroupEditor as G
};
