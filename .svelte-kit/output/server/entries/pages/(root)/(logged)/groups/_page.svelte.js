import { c as create_ssr_component, s as subscribe, v as validate_component, e as escape, b as add_attribute, f as each } from "../../../../../chunks/ssr.js";
import { G as GroupService } from "../../../../../chunks/services.gen.js";
import { C as CenteredPage } from "../../../../../chunks/CenteredPage.js";
import "../../../../../chunks/index2.js";
import { B as Button, a as canWrite } from "../../../../../chunks/toast.js";
import { D as Drawer, a as DrawerContent } from "../../../../../chunks/DrawerContent.js";
import { P as Popup } from "../../../../../chunks/Popup.js";
import { S as Skeleton } from "../../../../../chunks/Skeleton.js";
import "../../../../../chunks/common.js";
import { D as DropdownV2 } from "../../../../../chunks/DropdownV2.js";
import { G as GroupEditor } from "../../../../../chunks/GroupEditor.js";
import { w as workspaceStore, u as userStore } from "../../../../../chunks/stores2.js";
import { P as Popover } from "../../../../../chunks/Popover.js";
import { P as PageHeader } from "../../../../../chunks/PageHeader.js";
import { S as SharedBadge } from "../../../../../chunks/SharedBadge.js";
import { T as TableCustom } from "../../../../../chunks/TableCustom.js";
import { D as DataTable, H as Head, C as Cell } from "../../../../../chunks/Head.js";
import { R as Row } from "../../../../../chunks/Row.js";
import { P as Plus } from "../../../../../chunks/plus.js";
import { P as Pen } from "../../../../../chunks/pen.js";
import { T as Trash } from "../../../../../chunks/Section.js";
const GroupInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { name } = $$props;
  let members = [];
  async function loadMembers() {
    members = (await GroupService.getGroup({ workspace: $workspaceStore, name })).members;
  }
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  $workspaceStore && loadMembers();
  $$unsubscribe_workspaceStore();
  return `${members ? `${validate_component(Popover, "Popover").$$render($$result, {}, {}, {
    text: () => {
      return `<span slot="text">${escape(members?.join(", "))}</span>`;
    },
    default: () => {
      return `<div class="inline-flex gap-1 items-end"><span class="text-tertiary text-xs">(${escape(members.length)})</span> <div class="max-w-xs truncate"><span class="text-tertiary text-xs">${escape(members?.join(", "))}</span></div></div>`;
    }
  })}` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let newGroupName = "";
  let groups = void 0;
  let instanceGroups = void 0;
  let groupDrawer;
  async function loadGroups() {
    groups = (await GroupService.listGroups({ workspace: $workspaceStore })).map((x) => {
      return {
        canWrite: canWrite(x.name, x.extra_perms ?? {}, $userStore),
        ...x
      };
    });
  }
  async function loadInstanceGroups() {
    try {
      instanceGroups = await GroupService.listInstanceGroups();
    } catch (e) {
      instanceGroups = void 0;
    }
  }
  let editGroupName = "";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        loadInstanceGroups();
        if ($workspaceStore && $userStore) {
          loadGroups();
        }
      }
    }
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { this: groupDrawer },
      {
        this: ($$value) => {
          groupDrawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Group " + editGroupName }, {}, {
            default: () => {
              return `${validate_component(GroupEditor, "GroupEditor").$$render($$result, { name: editGroupName }, {}, {})}`;
            }
          })}`;
        }
      }
    )} ${validate_component(CenteredPage, "CenteredPage").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(PageHeader, "PageHeader").$$render(
          $$result,
          {
            title: "Groups",
            tooltip: "Group users together to grant roles and homegenous permissions. Same users can be in many groups at the same time.",
            documentationLink: "https://www.windmill.dev/docs/core_concepts/groups_and_folders"
          },
          {},
          {
            default: () => {
              return `<div class="flex flex-row"><div>${validate_component(Popup, "Popup").$$render(
                $$result,
                {
                  floatingConfig: {
                    strategy: "absolute",
                    placement: "bottom-end"
                  },
                  containerClasses: "border rounded-lg shadow-lg p-4 bg-surface"
                },
                {},
                {
                  button: () => {
                    return `${validate_component(Button, "Button").$$render(
                      $$result,
                      {
                        size: "md",
                        startIcon: { icon: Plus },
                        nonCaptureEvent: true
                      },
                      {},
                      {
                        default: () => {
                          return `New group`;
                        }
                      }
                    )} `;
                  },
                  default: ({ close }) => {
                    return `<div class="flex-col flex gap-2"><input class="mr-2" placeholder="New group name"${add_attribute("value", newGroupName, 0)}> ${validate_component(Button, "Button").$$render(
                      $$result,
                      {
                        size: "md",
                        startIcon: { icon: Plus },
                        disabled: !newGroupName
                      },
                      {},
                      {
                        default: () => {
                          return `Create`;
                        }
                      }
                    )}</div>`;
                  }
                }
              )}</div></div>`;
            }
          }
        )} <div class="relative mb-20 pt-8">${validate_component(DataTable, "DataTable").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
              default: () => {
                return `<tr>${validate_component(Cell, "Cell").$$render($$result, { head: true, first: true }, {}, {
                  default: () => {
                    return `Name`;
                  }
                })} ${validate_component(Cell, "Cell").$$render($$result, { head: true }, {}, {
                  default: () => {
                    return `Members`;
                  }
                })} ${validate_component(Cell, "Cell").$$render($$result, { head: true, last: true }, {}, {})}</tr>`;
              }
            })} <tbody class="divide-y">${groups === void 0 ? `${each(new Array(4), (_) => {
              return `<tr><td colspan="5">${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[2]] }, {}, {})}</td> </tr>`;
            })}` : `${each(groups, ({ name, summary, extra_perms, canWrite: canWrite2 }) => {
              return `${validate_component(Row, "Row").$$render($$result, { hoverable: true }, {}, {
                default: () => {
                  return `${validate_component(Cell, "Cell").$$render($$result, { first: true }, {}, {
                    default: () => {
                      return `<div class="flex flex-row gap-2 justify-between"><div><span class="text-blue-500">${escape(name)}</span> ${summary ? `<br> <span class="text-gray-500">${escape(summary)}</span>` : ``}</div> ${validate_component(SharedBadge, "SharedBadge").$$render($$result, { canWrite: canWrite2, extraPerms: extra_perms }, {}, {})}</div> `;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(GroupInfo, "GroupInfo").$$render($$result, { name }, {}, {})} `;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(DropdownV2, "Dropdown").$$render(
                        $$result,
                        {
                          items: [
                            {
                              displayName: "Manage group",
                              icon: Pen,
                              disabled: !canWrite2,
                              action: () => {
                                editGroupName = name;
                                groupDrawer.openDrawer();
                              }
                            },
                            {
                              displayName: "Delete",
                              icon: Trash,
                              type: "delete",
                              disabled: !canWrite2,
                              action: async () => {
                                await GroupService.deleteGroup({ workspace: $workspaceStore ?? "", name });
                                loadGroups();
                              }
                            }
                          ]
                        },
                        {},
                        {}
                      )} `;
                    }
                  })} `;
                }
              })}`;
            })}`}</tbody>`;
          }
        })}</div> ${instanceGroups && instanceGroups.length > 0 ? `${validate_component(PageHeader, "PageHeader").$$render(
          $$result,
          {
            title: "Instance Groups",
            tooltip: "Instance Groups are managed by SCIM and are groups shared by every workspaces",
            documentationLink: "https://www.windmill.dev/docs/misc/saml_and_scim#scim"
          },
          {},
          {}
        )} <div class="relative mb-20 pt-8">${validate_component(TableCustom, "TableCustom").$$render($$result, {}, {}, {
          body: () => {
            return `<tbody slot="body">${each(instanceGroups, ({ name, emails }) => {
              return `<tr><td><a href="${"#" + escape(name, true)}">${escape(name)} </a></td> <td>${escape(emails?.length ?? 0)} members</td> </tr>`;
            })}</tbody>`;
          },
          "header-row": () => {
            return `<tr slot="header-row" data-svelte-h="svelte-iwpbfj"><th>Name</th> <th>Members</th></tr>`;
          }
        })}</div>` : ``}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_userStore();
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
export {
  Page as default
};
