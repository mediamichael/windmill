import { c as create_ssr_component, v as validate_component, e as escape, s as subscribe, f as each, b as add_attribute } from "../../../../../chunks/ssr.js";
import { d as FolderService } from "../../../../../chunks/services.gen.js";
import { C as CenteredPage } from "../../../../../chunks/CenteredPage.js";
import { D as DropdownV2 } from "../../../../../chunks/DropdownV2.js";
import { F as FolderEditor } from "../../../../../chunks/FolderEditor.js";
import { P as PageHeader } from "../../../../../chunks/PageHeader.js";
import { w as workspaceStore, u as userStore } from "../../../../../chunks/stores2.js";
import "../../../../../chunks/index2.js";
import "yaml";
import { B as Button, s as sendUserToast } from "../../../../../chunks/toast.js";
import "minimatch";
import { D as Drawer, a as DrawerContent } from "../../../../../chunks/DrawerContent.js";
import { P as Popup } from "../../../../../chunks/Popup.js";
import { S as Skeleton } from "../../../../../chunks/Skeleton.js";
import "../../../../../chunks/common.js";
import { P as Popover } from "../../../../../chunks/Popover.js";
import { C as Cell, D as DataTable, H as Head } from "../../../../../chunks/Head.js";
import { R as Row } from "../../../../../chunks/Row.js";
import { P as Plus } from "../../../../../chunks/plus.js";
import { P as Pen } from "../../../../../chunks/pen.js";
import { T as Trash } from "../../../../../chunks/Section.js";
const FolderInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { members } = $$props;
  if ($$props.members === void 0 && $$bindings.members && members !== void 0) $$bindings.members(members);
  return `${validate_component(Popover, "Popover").$$render($$result, {}, {}, {
    text: () => {
      return `<span slot="text">${escape(members?.join(", "))}</span>`;
    },
    default: () => {
      return `<div class="inline-flex gap-1 items-center"><span class="text-tertiary text-xs">(${escape(members.length)})</span> <div class="max-w-xs truncate"><span class="text-tertiary text-xs">${escape(members?.join(", "))}</span></div></div>`;
    }
  })}`;
});
const FolderUsageInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { name } = $$props;
  let { tabular = false } = $$props;
  let { order = ["scripts", "flows", "apps", "schedules", "variables", "resources"] } = $$props;
  let usage = {};
  async function loadUsage() {
    usage = await FolderService.getFolderUsage({ workspace: $workspaceStore, name });
  }
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.tabular === void 0 && $$bindings.tabular && tabular !== void 0) $$bindings.tabular(tabular);
  if ($$props.order === void 0 && $$bindings.order && order !== void 0) $$bindings.order(order);
  $workspaceStore && loadUsage();
  $$unsubscribe_workspaceStore();
  return `${tabular ? `${each(order, (key) => {
    return `${validate_component(Cell, "Cell").$$render($$result, { class: "w-20" }, {}, {
      default: () => {
        return `${escape(usage[key] ?? "")} `;
      }
    })}`;
  })}` : `<div class="flex flex-col text-xs text-secondary">${each(Object.entries(usage), ([k, v]) => {
    return `<div>${escape(k)}: ${escape(v)} </div>`;
  })}</div>`}`;
});
function computeMembers(owners, extra_perms) {
  const members = new Set(owners);
  for (const [user, _] of Object.entries(extra_perms)) {
    members.add(user);
  }
  return Array.from(members);
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let newFolderName = "";
  let folders = void 0;
  let folderDrawer;
  async function loadFolders() {
    folders = (await FolderService.listFolders({ workspace: $workspaceStore })).map((x) => {
      return {
        canWrite: $userStore != void 0 && ($userStore?.is_admin || $userStore?.is_super_admin || $userStore?.folders_owners.includes(x.name)),
        ...x
      };
    });
  }
  let editFolderName = "";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        if ($workspaceStore && $userStore) {
          loadFolders();
        }
      }
    }
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { this: folderDrawer },
      {
        this: ($$value) => {
          folderDrawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Folder " + editFolderName }, {}, {
            default: () => {
              return `${validate_component(FolderEditor, "FolderEditor").$$render($$result, { name: editFolderName }, {}, {})}`;
            }
          })}`;
        }
      }
    )} ${validate_component(CenteredPage, "CenteredPage").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(PageHeader, "PageHeader").$$render(
          $$result,
          {
            title: "Folders",
            tooltip: "Folders allow to group items such as scripts/flows/resources/schedule together and to grant homogenous RBAC permissions to groups and individual users towards them.",
            documentationLink: "https://www.windmill.dev/docs/core_concepts/groups_and_folders"
          },
          {},
          {
            default: () => {
              return `<div class="flex flex-row">${validate_component(Popup, "Popup").$$render(
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
                          return `New folder`;
                        }
                      }
                    )} `;
                  },
                  default: ({ close }) => {
                    return `<div class="flex flex-col gap-2"><input class="mr-2" placeholder="New folder name"${add_attribute("value", newFolderName, 0)}> <div>${validate_component(Button, "Button").$$render(
                      $$result,
                      {
                        size: "md",
                        startIcon: { icon: Plus },
                        disabled: !newFolderName
                      },
                      {},
                      {
                        default: () => {
                          return `Create`;
                        }
                      }
                    )}</div></div>`;
                  }
                }
              )}</div>`;
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
                })} ${validate_component(Cell, "Cell").$$render($$result, { head: true, class: "w-20" }, {}, {
                  default: () => {
                    return `Scripts`;
                  }
                })} ${validate_component(Cell, "Cell").$$render($$result, { head: true, class: "w-20" }, {}, {
                  default: () => {
                    return `Flows`;
                  }
                })} ${validate_component(Cell, "Cell").$$render($$result, { head: true, class: "w-20" }, {}, {
                  default: () => {
                    return `Apps`;
                  }
                })} ${validate_component(Cell, "Cell").$$render($$result, { head: true, class: "w-20" }, {}, {
                  default: () => {
                    return `Schedules`;
                  }
                })} ${validate_component(Cell, "Cell").$$render($$result, { head: true, class: "w-20" }, {}, {
                  default: () => {
                    return `Variables`;
                  }
                })} ${validate_component(Cell, "Cell").$$render($$result, { head: true, class: "w-20" }, {}, {
                  default: () => {
                    return `Resources`;
                  }
                })} ${validate_component(Cell, "Cell").$$render($$result, { head: true, class: "w-20" }, {}, {
                  default: () => {
                    return `Participants`;
                  }
                })} ${validate_component(Cell, "Cell").$$render($$result, { head: true, last: true }, {}, {})}</tr>`;
              }
            })} <tbody class="divide-y">${folders === void 0 ? `${each(new Array(4), (_) => {
              return `<tr><td colspan="9">${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[2]] }, {}, {})}</td> </tr>`;
            })}` : `${folders.length === 0 ? `<tr data-svelte-h="svelte-1le9n9j"><td colspan="4" class="text-tertiary mt-2">No folders yet, create one!</td></tr>` : ``} ${each(folders, ({ name, extra_perms, owners, canWrite, summary }) => {
              return `${validate_component(Row, "Row").$$render($$result, { hoverable: true }, {}, {
                default: () => {
                  return `${validate_component(Cell, "Cell").$$render($$result, { first: true }, {}, {
                    default: () => {
                      return `<span class="text-blue-500">${escape(name)}</span> ${summary ? `<br> <span class="text-gray-500">${escape(summary)}</span>` : ``} `;
                    }
                  })} ${validate_component(FolderUsageInfo, "FolderUsageInfo").$$render($$result, { name, tabular: true }, {}, {})} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(FolderInfo, "FolderInfo").$$render(
                        $$result,
                        {
                          members: computeMembers(owners, extra_perms)
                        },
                        {},
                        {}
                      )}`;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, { shouldStopPropagation: true }, {}, {
                    default: () => {
                      return `${validate_component(DropdownV2, "Dropdown").$$render(
                        $$result,
                        {
                          items: [
                            {
                              displayName: "Manage folder",
                              icon: Pen,
                              disabled: !canWrite,
                              action: () => {
                                editFolderName = name;
                                folderDrawer.openDrawer();
                              }
                            },
                            {
                              displayName: `Delete${canWrite ? "" : " (require owner permissions)"}`,
                              icon: Trash,
                              type: "delete",
                              disabled: !canWrite,
                              action: async () => {
                                try {
                                  await FolderService.deleteFolder({ workspace: $workspaceStore ?? "", name });
                                } catch (e) {
                                  sendUserToast(e.body, true);
                                  loadFolders();
                                }
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
        })}</div>`;
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
