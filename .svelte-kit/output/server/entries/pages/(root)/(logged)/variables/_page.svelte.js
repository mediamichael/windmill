import { c as create_ssr_component, s as subscribe, d as createEventDispatcher, v as validate_component, e as escape, b as add_attribute, f as each } from "../../../../../chunks/ssr.js";
import { C as CenteredPage } from "../../../../../chunks/CenteredPage.js";
import { A as Alert } from "../../../../../chunks/Alert.js";
import { B as Badge } from "../../../../../chunks/Badge.js";
import { B as Button, A as ALL_DEPLOYABLE, p as truncate, u as isOwner, i as isDeployable, s as sendUserToast, a as canWrite } from "../../../../../chunks/toast.js";
/* empty css                                                         */
import { T as Tooltip } from "../../../../../chunks/Tooltip.js";
import "../../../../../chunks/common.js";
import { S as Skeleton } from "../../../../../chunks/Skeleton.js";
import { T as Tabs, a as Tab } from "../../../../../chunks/Tabs.js";
import { a as ConfirmationModal } from "../../../../../chunks/ConfirmationModal.js";
import { w as workspaceStore, u as userStore, e as enterpriseLicense } from "../../../../../chunks/stores2.js";
import "../../../../../chunks/index2.js";
import "yaml";
import "../../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import "minimatch";
import { D as Drawer, a as DrawerContent } from "../../../../../chunks/DrawerContent.js";
import { S as Section, T as Trash } from "../../../../../chunks/Section.js";
import { S as Save, V as VariableEditor } from "../../../../../chunks/VariableEditor.js";
import { D as DeployWorkspaceDrawer } from "../../../../../chunks/DeployWorkspaceDrawer.js";
import { D as DropdownV2 } from "../../../../../chunks/DropdownV2.js";
import { L as ListFilters } from "../../../../../chunks/ListFilters.js";
import { P as PageHeader } from "../../../../../chunks/PageHeader.js";
import { P as Popover } from "../../../../../chunks/Popover.js";
import { S as SearchItems } from "../../../../../chunks/SearchItems.js";
import { S as SharedBadge } from "../../../../../chunks/SharedBadge.js";
import { S as ShareModal, a as Share } from "../../../../../chunks/ShareModal.js";
import { D as DataTable, H as Head, C as Cell } from "../../../../../chunks/Head.js";
import { R as Row } from "../../../../../chunks/Row.js";
import { D as Dollar_sign, F as File_up, T as TableSimple } from "../../../../../chunks/Required.js";
import { W as WorkspaceService, i as OauthService, V as VariableService } from "../../../../../chunks/services.gen.js";
import { P as Plus } from "../../../../../chunks/plus.js";
import { B as Building } from "../../../../../chunks/building.js";
import { E as Eye_off } from "../../../../../chunks/eye-off.js";
import { L as Link } from "../../../../../chunks/link.js";
import { R as Refresh_cw } from "../../../../../chunks/refresh-cw.js";
import { C as Circle } from "../../../../../chunks/circle.js";
import { P as Pen } from "../../../../../chunks/pen.js";
const ContextualVariableEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value2) => value2);
  createEventDispatcher();
  let edit = false;
  let name = "";
  let value = "";
  function initNew() {
    edit = false;
    name = "";
    value = "";
    drawer.openDrawer();
  }
  function editVariable(editName, editValue) {
    edit = true;
    name = editName;
    value = editValue;
    drawer.openDrawer();
  }
  let drawer;
  if ($$props.initNew === void 0 && $$bindings.initNew && initNew !== void 0) $$bindings.initNew(initNew);
  if ($$props.editVariable === void 0 && $$bindings.editVariable && editVariable !== void 0) $$bindings.editVariable(editVariable);
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
          return `${validate_component(DrawerContent, "DrawerContent").$$render(
            $$result,
            {
              title: edit ? `Update contextual variable ${name}` : "Create a contextual variable"
            },
            {},
            {
              actions: () => {
                return `${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    disabled: value === "" || name === "",
                    startIcon: { icon: Save },
                    color: "dark",
                    size: "sm"
                  },
                  {},
                  {
                    default: () => {
                      return `${escape(edit ? "Update" : "Save")}`;
                    }
                  }
                )} `;
              },
              default: () => {
                return `<div class="flex flex-col gap-8">${!edit ? `${validate_component(Section, "Section").$$render($$result, { label: "Name" }, {}, {
                  default: () => {
                    return `<input type="text" placeholder="Variable name"${add_attribute("value", name, 0)}>`;
                  }
                })}` : ``} ${validate_component(Section, "Section").$$render($$result, { label: "Value" }, {}, {
                  default: () => {
                    return `<textarea rows="4" placeholder="Variable value">${escape(value || "")}</textarea>`;
                  }
                })}</div>`;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open;
  let owners;
  let preFilteredItems;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $userStore, $$unsubscribe_userStore;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  let filter = "";
  let variables = void 0;
  let filteredItems = void 0;
  let contextualVariables = [];
  let shareModal;
  let variableEditor;
  let contextualVariableEditor;
  let loading = { contextual: true };
  let deleteConfirmedCallback = void 0;
  let ownerFilter = void 0;
  async function loadVariables() {
    variables = (await VariableService.listVariable({ workspace: $workspaceStore })).map((x) => {
      return {
        canWrite: canWrite(x.path, x.extra_perms, $userStore) && x.workspace_id == $workspaceStore,
        ...x
      };
    });
  }
  let deployUiSettings = void 0;
  async function getDeployUiSettings() {
    if (!$enterpriseLicense) {
      deployUiSettings = ALL_DEPLOYABLE;
      return;
    }
    let settings = await WorkspaceService.getSettings({ workspace: $workspaceStore });
    deployUiSettings = settings.deploy_ui ?? ALL_DEPLOYABLE;
  }
  getDeployUiSettings();
  async function loadContextualVariables() {
    contextualVariables = await VariableService.listContextualVariables({ workspace: $workspaceStore });
    loading.contextual = false;
  }
  async function deleteVariable(path, account) {
    if (account) {
      OauthService.disconnectAccount({ workspace: $workspaceStore, id: account });
    }
    await VariableService.deleteVariable({ workspace: $workspaceStore, path });
    loadVariables();
    sendUserToast(`Variable ${path} was deleted`);
  }
  let tab = "workspace";
  let deploymentDrawer;
  async function deleteContextualVariable(row) {
    await WorkspaceService.setEnvironmentVariable({
      workspace: $workspaceStore,
      requestBody: { name: row.name, value: void 0 }
    });
    loadContextualVariables();
    sendUserToast(`Custom contextual variable ${row.name} was deleted`);
  }
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    open = Boolean(deleteConfirmedCallback);
    owners = Array.from(new Set(filteredItems?.map((x) => x.path.split("/").slice(0, 2).join("/")) ?? [])).sort();
    {
      if ($workspaceStore) {
        ownerFilter = void 0;
      }
    }
    preFilteredItems = ownerFilter == void 0 ? variables : variables?.filter((x) => x.path.startsWith(ownerFilter ?? ""));
    {
      {
        if ($workspaceStore && $userStore) {
          loadVariables();
          loadContextualVariables();
        }
      }
    }
    $$rendered = `${validate_component(DeployWorkspaceDrawer, "DeployWorkspaceDrawer").$$render(
      $$result,
      { this: deploymentDrawer },
      {
        this: ($$value) => {
          deploymentDrawer = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(SearchItems, "SearchItems").$$render(
      $$result,
      {
        filter,
        items: preFilteredItems,
        f: (x) => x.path + " " + x.description,
        filteredItems
      },
      {
        filteredItems: ($$value) => {
          filteredItems = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(CenteredPage, "CenteredPage").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(PageHeader, "PageHeader").$$render(
          $$result,
          {
            title: "Variables",
            tooltip: "Save and permission strings to be reused in Scripts and Flows.",
            documentationLink: "https://www.windmill.dev/docs/core_concepts/variables_and_secrets"
          },
          {},
          {
            default: () => {
              return `<div class="flex flex-row justify-end">${tab == "contextual" && ($userStore?.is_admin || $userStore?.is_super_admin) ? `${validate_component(Button, "Button").$$render($$result, { size: "md", startIcon: { icon: Plus } }, {}, {
                default: () => {
                  return `New contextual variable`;
                }
              })}` : `${validate_component(Button, "Button").$$render($$result, { size: "md", startIcon: { icon: Plus } }, {}, {
                default: () => {
                  return `New variable`;
                }
              })}`}</div>`;
            }
          }
        )} ${validate_component(VariableEditor, "VariableEditor").$$render(
          $$result,
          { this: variableEditor },
          {
            this: ($$value) => {
              variableEditor = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(ContextualVariableEditor, "ContextualVariableEditor").$$render(
          $$result,
          { this: contextualVariableEditor },
          {
            this: ($$value) => {
              contextualVariableEditor = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(ShareModal, "ShareModal").$$render(
          $$result,
          { this: shareModal },
          {
            this: ($$value) => {
              shareModal = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Tabs, "Tabs").$$render(
          $$result,
          { selected: tab },
          {
            selected: ($$value) => {
              tab = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `${validate_component(Tab, "Tab").$$render($$result, { size: "md", value: "workspace" }, {}, {
                default: () => {
                  return `<div class="flex gap-2 items-center my-1">${validate_component(Building, "Building").$$render($$result, { size: 18 }, {}, {})}
				Workspace</div>`;
                }
              })} ${validate_component(Tab, "Tab").$$render($$result, { size: "md", value: "contextual" }, {}, {
                default: () => {
                  return `<div class="flex gap-2 items-center my-1">${validate_component(Dollar_sign, "DollarSign").$$render($$result, { size: 18 }, {}, {})}
				Contextual
				${validate_component(Tooltip, "Tooltip").$$render(
                    $$result,
                    {
                      documentationLink: "https://www.windmill.dev/docs/core_concepts/variables_and_secrets#contextual-variables"
                    },
                    {},
                    {
                      default: () => {
                        return `Contextual variables are passed as environment variables when running a script and depends
					on the execution context.`;
                      }
                    }
                  )}</div>`;
                }
              })}`;
            }
          }
        )} ${tab == "workspace" ? `<div class="pt-2"><input placeholder="Search Variable" class="input mt-1"${add_attribute("value", filter, 0)}></div> <div class="min-h-[56px]">${validate_component(ListFilters, "ListFilters").$$render(
          $$result,
          {
            filters: owners,
            selectedFilter: ownerFilter
          },
          {
            selectedFilter: ($$value) => {
              ownerFilter = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div> <div class="relative overflow-x-auto pb-40 pr-4">${!filteredItems ? `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [0.5, [2], 1] }, {}, {})} ${each(new Array(3), (_) => {
          return `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[3.5], 0.5] }, {}, {})}`;
        })}` : `${filteredItems.length == 0 ? `<div class="flex flex-col items-center justify-center h-full" data-svelte-h="svelte-z7k3s0"><div class="text-md font-medium">No variables found</div> <div class="text-sm text-secondary">Try changing the filters or creating a new variable</div></div>` : `${validate_component(DataTable, "DataTable").$$render($$result, { size: "xs" }, {}, {
          default: () => {
            return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
              default: () => {
                return `<tr>${validate_component(Cell, "Cell").$$render($$result, { head: true, first: true, class: "!px-0" }, {}, {})} ${validate_component(Cell, "Cell").$$render($$result, { head: true }, {}, {
                  default: () => {
                    return `Path`;
                  }
                })} ${validate_component(Cell, "Cell").$$render($$result, { head: true }, {}, {
                  default: () => {
                    return `Value`;
                  }
                })} ${validate_component(Cell, "Cell").$$render($$result, { head: true }, {}, {
                  default: () => {
                    return `Description`;
                  }
                })} ${validate_component(Cell, "Cell").$$render($$result, { head: true }, {}, {})} ${validate_component(Cell, "Cell").$$render($$result, { head: true, last: true }, {}, {})}</tr>`;
              }
            })} <tbody class="divide-y">${each(filteredItems, ({ path, value, is_secret, description, extra_perms, canWrite: canWrite2, account, is_refreshed, is_expired, refresh_error, is_linked, marked }) => {
              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Cell, "Cell").$$render(
                    $$result,
                    {
                      class: "!px-0 text-center w-12",
                      first: true
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(SharedBadge, "SharedBadge").$$render($$result, { canWrite: canWrite2, extraPerms: extra_perms }, {}, {})} `;
                      }
                    }
                  )} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `<a class="break-all" id="${"edit-" + escape(path, true)}" href="${"#" + escape(path, true)}">${marked ? `<!-- HTML_TAG_START -->${marked}<!-- HTML_TAG_END -->` : `${escape(path)}`}</a> `;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `<span class="inline-flex flex-row items-center gap-2"><div class="text-sm break-words">${value ? `${escape(truncate(value, 20))}` : `∗∗∗∗`}</div> ${is_secret ? `${validate_component(Popover, "Popover").$$render($$result, { notClickable: true }, {}, {
                        text: () => {
                          return `<span slot="text" data-svelte-h="svelte-1un5bk1">This item is secret</span>`;
                        },
                        default: () => {
                          return `${validate_component(Eye_off, "EyeOff").$$render($$result, { size: 12 }, {}, {})} `;
                        }
                      })}` : ``}</span> `;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, { class: "break-words" }, {}, {
                    default: () => {
                      return `<span class="text-xs text-tertiary">${escape(truncate(description ?? "", 50))}</span> `;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, { class: "text-center" }, {}, {
                    default: () => {
                      return `<div class="flex flex-row items-center gap-4">${is_linked ? `${validate_component(Popover, "Popover").$$render($$result, { notClickable: true }, {}, {
                        text: () => {
                          return `<div slot="text" data-svelte-h="svelte-ymckiv">This variable is linked with a resource of the same path. They are deleted
													and renamed together.
												</div>`;
                        },
                        default: () => {
                          return `${validate_component(Link, "Link").$$render($$result, { size: 16 }, {}, {})} `;
                        }
                      })}` : ``} ${account ? `${validate_component(Popover, "Popover").$$render($$result, { notClickable: true }, {}, {
                        text: () => {
                          return `<div slot="text" data-svelte-h="svelte-51ktq4">This OAuth token will be kept up-to-date in the background by Windmill
													using its refresh token
												</div>`;
                        },
                        default: () => {
                          return `${validate_component(Refresh_cw, "RefreshCw").$$render($$result, { size: 16 }, {}, {})} `;
                        }
                      })}` : ``} ${is_refreshed ? `<div class="">${refresh_error ? `${validate_component(Popover, "Popover").$$render($$result, { notClickable: true }, {}, {
                        text: () => {
                          return `<div slot="text">Latest exchange of the refresh token did not succeed. Error: ${escape(refresh_error)} </div>`;
                        },
                        default: () => {
                          return `<div class="relative inline-flex justify-center items-center w-4 h-4">${validate_component(Circle, "Circle").$$render(
                            $$result,
                            {
                              class: "text-red-600 animate-ping absolute z-50 w-4 h-4 fill-current",
                              size: 12
                            },
                            {},
                            {}
                          )} ${validate_component(Circle, "Circle").$$render(
                            $$result,
                            {
                              class: "text-red-600 relative inline-flex fill-current ",
                              size: 12
                            },
                            {},
                            {}
                          )}</div> `;
                        }
                      })}` : `${is_expired ? `${validate_component(Popover, "Popover").$$render($$result, { notClickable: true }, {}, {
                        text: () => {
                          return `<div slot="text" data-svelte-h="svelte-15vcdku">The access_token is expired, it will get renewed the next time this
															variable is fetched or you can request is to be refreshed in the
															dropdown on the right.
														</div>`;
                        },
                        default: () => {
                          return `${validate_component(Circle, "Circle").$$render(
                            $$result,
                            {
                              class: "text-yellow-600 animate-[pulse_5s_linear_infinite] fill-current",
                              size: 12
                            },
                            {},
                            {}
                          )} `;
                        }
                      })}` : `${validate_component(Popover, "Popover").$$render($$result, { notClickable: true }, {}, {
                        text: () => {
                          return `<div slot="text" data-svelte-h="svelte-1chgp9l">The variable was connected through OAuth and the token is not expired.
														</div>`;
                        },
                        default: () => {
                          return `${validate_component(Circle, "Circle").$$render(
                            $$result,
                            {
                              class: "text-green-600 animate-[pulse_5s_linear_infinite] fill-current",
                              size: 12
                            },
                            {},
                            {}
                          )} `;
                        }
                      })}`}`} </div>` : ``}</div> `;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, { last: true, shouldStopPropagation: true }, {}, {
                    default: () => {
                      return `${validate_component(DropdownV2, "Dropdown").$$render(
                        $$result,
                        {
                          items: () => {
                            let owner = isOwner(path, $userStore, $workspaceStore);
                            return [
                              {
                                displayName: "Edit",
                                icon: Pen,
                                action: () => variableEditor.editVariable(path),
                                disabled: !canWrite2
                              },
                              {
                                displayName: "Delete",
                                icon: Trash,
                                type: "delete",
                                action: (event) => {
                                  if (event["shiftKey"]) {
                                    deleteVariable(path, account);
                                  } else {
                                    deleteConfirmedCallback = () => {
                                      deleteVariable(path, account);
                                    };
                                  }
                                },
                                disabled: !owner
                              },
                              ...isDeployable(is_secret ? "secret" : "variable", path, deployUiSettings) ? [
                                {
                                  displayName: "Deploy to prod/staging",
                                  icon: File_up,
                                  action: () => {
                                    deploymentDrawer.openDrawer(path, "variable");
                                  }
                                }
                              ] : [],
                              {
                                displayName: owner ? "Share" : "See Permissions",
                                action: () => {
                                  shareModal.openDrawer(path, "variable");
                                },
                                icon: Share
                              },
                              ...account != void 0 ? [
                                {
                                  displayName: "Refresh token",
                                  icon: Refresh_cw,
                                  action: async () => {
                                    await OauthService.refreshToken({
                                      workspace: $workspaceStore ?? "",
                                      id: account ?? 0,
                                      requestBody: { path }
                                    });
                                    sendUserToast("Token refreshed");
                                    loadVariables();
                                  }
                                }
                              ] : []
                            ];
                          }
                        },
                        {},
                        {}
                      )} `;
                    }
                  })} `;
                }
              })}`;
            })}</tbody>`;
          }
        })}`}`}</div>` : `${tab == "contextual" ? `<div class="overflow-auto">${loading.contextual ? `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [0.5, [2], 1] }, {}, {})} ${each(new Array(8), (_) => {
          return `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[2.8], 0.5] }, {}, {})}`;
        })}` : `${validate_component(PageHeader, "PageHeader").$$render(
          $$result,
          {
            title: "Custom contextual variables",
            primary: false
          },
          {},
          {}
        )} ${contextualVariables.filter((x) => x.is_custom).length === 0 ? `<div class="flex flex-col items-center justify-center h-full" data-svelte-h="svelte-73kacd"><div class="text-md font-medium">No custom contextual variables found</div></div>` : `${validate_component(TableSimple, "TableSimple").$$render(
          $$result,
          {
            headers: ["Name", "Value"],
            data: contextualVariables.filter((x) => x.is_custom),
            keys: ["name", "value"],
            getRowActions: $userStore?.is_admin || $userStore?.is_super_admin ? (row) => {
              return [
                {
                  displayName: "Edit",
                  action: () => contextualVariableEditor.editVariable(row.name, row.value)
                },
                {
                  displayName: "Delete",
                  type: "delete",
                  action: () => {
                    deleteContextualVariable(row);
                  }
                }
              ];
            } : void 0
          },
          {},
          {}
        )}`} ${validate_component(PageHeader, "PageHeader").$$render(
          $$result,
          {
            title: "Contextual variables",
            primary: false
          },
          {},
          {}
        )} ${validate_component(TableSimple, "TableSimple").$$render(
          $$result,
          {
            headers: ["Name", "Example of value", "Description"],
            data: contextualVariables.filter((x) => !x.is_custom),
            keys: ["name", "value", "description"]
          },
          {},
          {}
        )}`}</div>` : ``}`}`;
      }
    })} ${validate_component(ConfirmationModal, "ConfirmationModal").$$render(
      $$result,
      {
        open,
        title: "Remove variable",
        confirmationText: "Remove"
      },
      {},
      {
        default: () => {
          return `<div class="flex flex-col w-full space-y-4"><span data-svelte-h="svelte-1ythk9x">Are you sure you want to remove this variable?</span> ${validate_component(Alert, "Alert").$$render(
            $$result,
            {
              type: "info",
              title: "Bypass confirmation"
            },
            {},
            {
              default: () => {
                return `<div>You can press
				${validate_component(Badge, "Badge").$$render($$result, { color: "dark-gray" }, {}, {
                  default: () => {
                    return `SHIFT`;
                  }
                })}
				while removing a variable to bypass confirmation.</div>`;
              }
            }
          )}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_userStore();
  $$unsubscribe_enterpriseLicense();
  return $$rendered;
});
export {
  Page as default
};
