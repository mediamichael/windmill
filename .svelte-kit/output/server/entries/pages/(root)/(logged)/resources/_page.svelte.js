import { c as create_ssr_component, s as subscribe, d as createEventDispatcher, v as validate_component, e as escape, f as each, b as add_attribute } from "../../../../../chunks/ssr.js";
import { p as page } from "../../../../../chunks/stores.js";
import { a as AppConnectDrawer, R as ResourceEditorDrawer } from "../../../../../chunks/SchemaForm.js";
import { C as CenteredPage } from "../../../../../chunks/CenteredPage.js";
import { A as Alert } from "../../../../../chunks/Alert.js";
import { B as Badge } from "../../../../../chunks/Badge.js";
import { B as Button, g as classNames, e as emptySchema, A as ALL_DEPLOYABLE, a as canWrite, x as removeMarkdown, p as truncate, i as isDeployable, s as sendUserToast } from "../../../../../chunks/toast.js";
import { D as Drawer, a as DrawerContent } from "../../../../../chunks/DrawerContent.js";
import "../../../../../chunks/common.js";
import { S as Skeleton } from "../../../../../chunks/Skeleton.js";
import { T as Tabs, a as Tab } from "../../../../../chunks/Tabs.js";
import { a as ConfirmationModal } from "../../../../../chunks/ConfirmationModal.js";
import { D as DeployWorkspaceDrawer } from "../../../../../chunks/DeployWorkspaceDrawer.js";
import { D as DropdownV2 } from "../../../../../chunks/DropdownV2.js";
import { L as ListFilters } from "../../../../../chunks/ListFilters.js";
import { I as IconedResourceType } from "../../../../../chunks/IconedResourceType.js";
import { P as PageHeader } from "../../../../../chunks/PageHeader.js";
import { P as Popover } from "../../../../../chunks/Popover.js";
import { R as Required, F as File_up } from "../../../../../chunks/Required.js";
import { r as resourceTypesStore } from "../../../../../chunks/resourceTypesStore.js";
import { H as HighlightTheme, a as Highlight, j as json, S as SchemaViewer } from "../../../../../chunks/SchemaViewer.js";
import { S as SearchItems } from "../../../../../chunks/SearchItems.js";
import { S as SharedBadge } from "../../../../../chunks/SharedBadge.js";
import { S as ShareModal, a as Share } from "../../../../../chunks/ShareModal.js";
import { S as SimpleEditor } from "../../../../../chunks/SimpleEditor.js";
import "../../../../../chunks/index2.js";
import "yaml";
import "../../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import "minimatch";
import { P as Path, S as Save } from "../../../../../chunks/VariableEditor.js";
import { w as workspaceStore, o as oauthStore, e as enterpriseLicense, u as userStore } from "../../../../../chunks/stores2.js";
import { P as Password } from "../../../../../chunks/Password.js";
import { R as Rotate_cw } from "../../../../../chunks/LightweightSchemaForm.js";
import { L as Loader_2 } from "../../../../../chunks/loader-2.js";
import { D as DataTable, H as Head, C as Cell } from "../../../../../chunks/Head.js";
import { R as Row } from "../../../../../chunks/Row.js";
import { T as Toggle } from "../../../../../chunks/Toggle.js";
import { T as Tooltip } from "../../../../../chunks/Tooltip.js";
import { W as WorkspaceService, R as ResourceService, i as OauthService } from "../../../../../chunks/services.gen.js";
import "@redocly/json-to-json-schema";
import { E as EditableSchemaWrapper } from "../../../../../chunks/EditableSchemaWrapper.js";
import { B as Braces } from "../../../../../chunks/braces.js";
import { P as Plus } from "../../../../../chunks/plus.js";
import { L as Link } from "../../../../../chunks/link.js";
import { B as Building } from "../../../../../chunks/building.js";
import { C as Circle } from "../../../../../chunks/circle.js";
import { P as Pen } from "../../../../../chunks/pen.js";
import { T as Trash } from "../../../../../chunks/Section.js";
const SupabaseConnect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let resourceValue;
  let disabled;
  let $$unsubscribe_workspaceStore;
  let $oauthStore, $$unsubscribe_oauthStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  $$unsubscribe_oauthStore = subscribe(oauthStore, (value) => $oauthStore = value);
  let drawer;
  let token = void 0;
  async function open() {
    token = $oauthStore?.access_token ?? "";
    drawer.openDrawer?.();
    step = "init";
    description = "";
  }
  let step = "init";
  async function listDatabases() {
    if (!token) return;
    databases = void 0;
    const res = await fetch("/api/oauth/list_supabase", {
      headers: {
        "Content-Type": "application/json",
        "X-Supabase-Token": token
      }
    });
    databases = await res.json();
  }
  let databases = void 0;
  let selectedDatabase = void 0;
  let description = "";
  let pathError = "";
  let password = "";
  let path = void 0;
  createEventDispatcher();
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    token != void 0 && listDatabases();
    resourceValue = {
      host: `aws-0-${selectedDatabase?.region}.pooler.supabase.com`,
      user: `postgres.${selectedDatabase?.id}`,
      port: 5432,
      dbname: "postgres",
      sslmode: "prefer",
      password: `$var:${path}`
    };
    disabled = path == void 0 || pathError != "" || path == "";
    $$rendered = `${validate_component(HighlightTheme, "HighlightTheme").$$render($$result, {}, {}, {})} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "800px", this: drawer },
      {
        this: ($$value) => {
          drawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Add a Supabase Database" }, {}, {
            actions: () => {
              return `<div slot="actions" class="flex gap-1">${step == "resource" && selectedDatabase != void 0 ? `${validate_component(Button, "Button").$$render($$result, { variant: "border" }, {}, {
                default: () => {
                  return `Back`;
                }
              })} ${validate_component(Button, "Button").$$render($$result, { disabled }, {}, {
                default: () => {
                  return `Save`;
                }
              })}` : ``}</div>`;
            },
            default: () => {
              return `${step === "init" || selectedDatabase == void 0 ? `<h2>Connect an existing database <div class="inline-block ml-2">${validate_component(Button, "Button").$$render(
                $$result,
                {
                  variant: "border",
                  color: "light",
                  wrapperClasses: "self-stretch"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Rotate_cw, "RotateCwIcon").$$render($$result, { size: 12 }, {}, {})}`;
                  }
                }
              )}</div></h2> <div class="mt-6"></div> ${databases == void 0 ? `${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})}` : `<div class="flex flex-col gap-y-2"></div> ${each(databases, (database) => {
                return `<button class="btn btn-outline-primary mt-2 border p-2 w-full border-secondary-inverse hover:border-secondary rounded"><div class="flex flex-row items-center"><div class="flex-grow"><h3 class="text-lg font-semibold">${escape(database.name)}</h3> <p class="text-sm text-secondary">id: ${escape(database.id)} - region: ${escape(database.region)}</p> </div></div> </button>`;
              })}`} <h3 class="mt-8 mb-2" data-svelte-h="svelte-i0s9ff">Create a new database</h3> <p class="text-sm text-secondary" data-svelte-h="svelte-1hrfiqu"><a href="https://supabase.com/dashboard/projects" target="_blank" rel="noopener noreferrer">Create a new database in your Supabase account</a></p>` : `${step === "resource" ? `${validate_component(Path, "Path").$$render(
                $$result,
                {
                  initialPath: "",
                  fullNamePlaceholder: "supabase_" + selectedDatabase?.name?.replace(/\s+/g, "").replace(/[^\w\s]/gi, ""),
                  kind: "resource",
                  error: pathError,
                  path
                },
                {
                  error: ($$value) => {
                    pathError = $$value;
                    $$settled = false;
                  },
                  path: ($$value) => {
                    path = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} <h2 class="mt-8 mb-2" data-svelte-h="svelte-jv87qv">Database Password</h2> <p class="text-sm text-secondary mb-1" data-svelte-h="svelte-1enyalh">For security reasons from supabase, the password of the database cannot be retrieved
				automatically. In a future update, a dedicated role for windmill will be created and the
				password for it will be generated automatically. The password of the database is shown
				during the project creation.</p> ${validate_component(Password, "Password").$$render(
                $$result,
                { required: true, password },
                {
                  password: ($$value) => {
                    password = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} <h3 class="mt-6 mb-2" data-svelte-h="svelte-1wejgut">Description</h3> <textarea autocomplete="off">${escape(description || "")}</textarea> <div class="mt-12"></div> <p class="my-1 text-sm text-secondary">A resource and a variable will be created at path: ${escape(path)}. The content of the resource will
				be:</p> ${validate_component(Highlight, "Highlight").$$render(
                $$result,
                {
                  language: json,
                  code: JSON.stringify(resourceValue, null, 4)
                },
                {},
                {}
              )}` : ``}`}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_oauthStore();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let owners;
  let types;
  let currentResources;
  let preFilteredItemsOwners;
  let preFilteredType;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  let $$unsubscribe_page;
  let $userStore, $$unsubscribe_userStore;
  let $$unsubscribe_resourceTypesStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_resourceTypesStore = subscribe(resourceTypesStore, (value) => value);
  let cacheResources;
  let stateResources;
  let resources;
  let resourceTypes;
  let filteredItems = void 0;
  let resourceTypeViewer;
  let resourceTypeViewerObj = {
    rt: "",
    description: "",
    schema: emptySchema()
  };
  let resourceTypeDrawer;
  let editResourceTypeDrawer;
  let newResourceType = {
    name: "",
    schema: emptySchema(),
    description: ""
  };
  let editResourceType = {
    name: "",
    schema: emptySchema(),
    description: ""
  };
  let resourceEditor;
  let shareModal;
  let appConnect;
  let supabaseConnect;
  let deleteConfirmedCallback = void 0;
  let loading = { resources: true, types: true };
  let filter = "";
  let ownerFilter = void 0;
  let typeFilter = void 0;
  async function loadResources() {
    resources = await loadResourceInternal(void 0, "cache,state");
    loading.resources = false;
  }
  async function loadCache() {
    cacheResources = await loadResourceInternal("cache", void 0);
    loading.resources = false;
  }
  async function loadState() {
    stateResources = await loadResourceInternal("state", void 0);
    loading.resources = false;
  }
  async function loadResourceInternal(resourceType, resourceTypeExclude) {
    return (await ResourceService.listResource({
      workspace: $workspaceStore,
      resourceTypeExclude,
      resourceType
    })).map((x) => {
      return {
        canWrite: canWrite(x.path, x.extra_perms, $userStore) && $workspaceStore == x.workspace_id,
        ...x
      };
    });
  }
  async function loadResourceTypes() {
    resourceTypes = (await ResourceService.listResourceType({ workspace: $workspaceStore })).map((x) => {
      return {
        canWrite: $workspaceStore == x.workspace_id,
        ...x
      };
    });
    loading.types = false;
  }
  async function deleteResource(path, account) {
    if (account) {
      OauthService.disconnectAccount({ workspace: $workspaceStore, id: account });
    }
    await ResourceService.deleteResource({ workspace: $workspaceStore, path });
    reload();
  }
  let disableCustomPrefix = false;
  let tab = "workspace";
  let inferrer = void 0;
  let inferrerJson = "";
  let deploymentDrawer;
  async function reload() {
    loading = { resources: true, types: true };
    if (tab == "cache") {
      await loadCache();
    } else if (tab == "states") {
      await loadState();
    } else {
      await loadResources();
    }
    await loadResourceTypes();
    loading = { resources: false, types: false };
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
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    owners = Array.from(new Set(filteredItems?.map((x) => x.path.split("/").slice(0, 2).join("/")) ?? [])).sort();
    types = Array.from(new Set(filteredItems?.map((x) => x.resource_type))).sort();
    {
      if ($workspaceStore) {
        ownerFilter = void 0;
      }
    }
    currentResources = tab == "cache" ? cacheResources : tab == "states" ? stateResources : resources;
    preFilteredItemsOwners = ownerFilter == void 0 ? currentResources : currentResources?.filter((x) => x.path.startsWith(ownerFilter ?? ""));
    preFilteredType = typeFilter == void 0 ? preFilteredItemsOwners?.filter((x) => {
      return tab === "workspace" ? x.resource_type !== "app_theme" && x.resource_type !== "state" && x.resource_type !== "cache" : tab === "states" ? x.resource_type === "state" : tab === "cache" ? x.resource_type === "cache" : tab === "theme" ? x.resource_type === "app_theme" : true;
    }) : preFilteredItemsOwners?.filter((x) => {
      return x.resource_type === typeFilter && (tab === "workspace" ? x.resource_type !== "app_theme" && x.resource_type !== "state" && x.resource_type !== "cache" : true);
    });
    {
      {
        if ($workspaceStore && $userStore) {
          loadResources();
          loadResourceTypes();
        }
      }
    }
    $$rendered = `${validate_component(ConfirmationModal, "ConfirmationModal").$$render(
      $$result,
      {
        open: Boolean(deleteConfirmedCallback),
        title: "Remove resource",
        confirmationText: "Remove"
      },
      {},
      {
        default: () => {
          return `<div class="flex flex-col w-full space-y-4"><span data-svelte-h="svelte-1mgjke5">Are you sure you want to remove this resource?</span> ${validate_component(Alert, "Alert").$$render(
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
				while removing a resource to bypass confirmation.</div>`;
              }
            }
          )}</div>`;
        }
      }
    )} ${validate_component(DeployWorkspaceDrawer, "DeployWorkspaceDrawer").$$render(
      $$result,
      { this: deploymentDrawer },
      {
        this: ($$value) => {
          deploymentDrawer = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "800px", this: inferrer },
      {
        this: ($$value) => {
          inferrer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Infer type from JSON" }, {}, {
            actions: () => {
              return `${validate_component(Button, "Button").$$render($$result, { size: "sm" }, {}, {
                default: () => {
                  return `Infer`;
                }
              })} `;
            },
            default: () => {
              return `${validate_component(SimpleEditor, "SimpleEditor").$$render(
                $$result,
                {
                  lang: "json",
                  class: "h-full",
                  fixedOverflowWidgets: false,
                  code: inferrerJson
                },
                {
                  code: ($$value) => {
                    inferrerJson = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })}`;
        }
      }
    )} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "800px", this: resourceTypeViewer },
      {
        this: ($$value) => {
          resourceTypeViewer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: resourceTypeViewerObj.rt }, {}, {
            default: () => {
              return `<div><h1 class="mb-8 mt-4">${validate_component(IconedResourceType, "IconedResourceType").$$render($$result, { name: resourceTypeViewerObj.rt }, {}, {})}</h1> <div class="py-2 box prose mb-8 text-secondary">${escape(resourceTypeViewerObj.description)}</div> ${validate_component(SchemaViewer, "SchemaViewer").$$render($$result, { schema: resourceTypeViewerObj.schema }, {}, {})}</div>`;
            }
          })}`;
        }
      }
    )} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      {
        size: "800px",
        this: editResourceTypeDrawer
      },
      {
        this: ($$value) => {
          editResourceTypeDrawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Edit resource type" }, {}, {
            actions: () => {
              return `${validate_component(Button, "Button").$$render($$result, { startIcon: { icon: Save } }, {}, {
                default: () => {
                  return `Update`;
                }
              })} `;
            },
            default: () => {
              return `<div class="flex flex-col gap-6"><label for="inp"><div class="mb-1 font-semibold text-secondary gap-1 flex flex-row items-center">Name
					<div class="flex flex-row items-center gap-x-4"><div class="flex flex-row items-center"><div class="inline-block"><input disabled id="inp" type="text"${add_attribute("class", classNames("!h-8  !border !border-gray-200"), 0)}${add_attribute("value", editResourceType.name, 0)}></div></div></div></div></label> <label><div class="mb-1 font-semibold text-secondary" data-svelte-h="svelte-3cc9jx">Description</div> <textarea autocomplete="off">${escape("")}</textarea></label> <div><div class="mb-1 font-semibold text-secondary" data-svelte-h="svelte-5wmo2c">Schema</div> ${validate_component(EditableSchemaWrapper, "EditableSchemaWrapper").$$render(
                $$result,
                {
                  noPreview: true,
                  schema: editResourceType.schema
                },
                {
                  schema: ($$value) => {
                    editResourceType.schema = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div></div>`;
            }
          })}`;
        }
      }
    )} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "1200px", this: resourceTypeDrawer },
      {
        this: ($$value) => {
          resourceTypeDrawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Create resource type" }, {}, {
            actions: () => {
              return `${validate_component(Button, "Button").$$render($$result, { startIcon: { icon: Save } }, {}, {
                default: () => {
                  return `Save`;
                }
              })} `;
            },
            default: () => {
              return `<div class="flex flex-col gap-6"><label for="inp"><div class="mb-1 font-semibold text-secondary gap-1 flex flex-row items-center">Name${validate_component(Required, "Required").$$render($$result, { required: true }, {}, {})}${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                default: () => {
                  return `Resource types are synchronized with the official types on the hub regularly. The \`c_\`
						prefix is to avoid name clashes with them.`;
                }
              })}</div> <div class="flex flex-row items-center gap-x-4"><div class="flex flex-row items-center">${!disableCustomPrefix ? `<span class="border border-r-0 rounded-l py-1 text-sm bg-surface-secondary inline-block w-8 h-8 px-2" data-svelte-h="svelte-zu2nw1">c_</span>` : ``} <div class="inline-block"><input id="inp" type="text"${add_attribute("class", classNames("!h-8  !border ", !disableCustomPrefix ? "!rounded-l-none" : ""), 0)}${add_attribute("value", newResourceType.name, 0)}></div></div> ${$userStore?.is_admin || $userStore?.is_super_admin ? `${validate_component(Toggle, "Toggle").$$render(
                $$result,
                {
                  options: { right: "disable c_ prefix (admin only)" },
                  checked: disableCustomPrefix
                },
                {
                  checked: ($$value) => {
                    disableCustomPrefix = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}` : ``}</div></label> <label><div class="mb-1 font-semibold text-secondary" data-svelte-h="svelte-3cc9jx">Description</div> <textarea autocomplete="off">${escape("")}</textarea></label> <div><div class="flex justify-between w-full items-center"><div class="mb-1 font-semibold text-secondary" data-svelte-h="svelte-5wmo2c">Schema</div> <div class="mb-2 w-full flex flex-row-reverse">${validate_component(Button, "Button").$$render(
                $$result,
                {
                  size: "sm",
                  color: "light",
                  variant: "border",
                  startIcon: { icon: Braces }
                },
                {},
                {
                  default: () => {
                    return `Infer schema from a json value`;
                  }
                }
              )}</div></div></div> ${validate_component(EditableSchemaWrapper, "EditableSchemaWrapper").$$render(
                $$result,
                {
                  fullHeight: true,
                  schema: newResourceType.schema
                },
                {
                  schema: ($$value) => {
                    newResourceType.schema = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div>`;
            }
          })}`;
        }
      }
    )} ${validate_component(SearchItems, "SearchItems").$$render(
      $$result,
      {
        filter,
        items: preFilteredType,
        f: (x) => x.path + " " + x.resource_type + " " + x.description + " ",
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
            title: "Resources",
            tooltip: "Save and permission rich objects (JSON) including credentials obtained through OAuth.",
            documentationLink: "https://www.windmill.dev/docs/core_concepts/resources_and_types"
          },
          {},
          {
            default: () => {
              return `<div class="flex flex-row justify-end gap-4">${validate_component(Button, "Button").$$render(
                $$result,
                {
                  variant: "border",
                  size: "md",
                  startIcon: { icon: Plus }
                },
                {},
                {
                  default: () => {
                    return `Add Resource Type`;
                  }
                }
              )} ${validate_component(Button, "Button").$$render($$result, { size: "md", startIcon: { icon: Link } }, {}, {
                default: () => {
                  return `Add Resource`;
                }
              })}</div>`;
            }
          }
        )} <div class="flex justify-between">${validate_component(Tabs, "Tabs").$$render(
          $$result,
          { class: "w-full", selected: tab },
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
              })} ${validate_component(Tab, "Tab").$$render($$result, { size: "md", value: "types" }, {}, {
                default: () => {
                  return `<div class="flex gap-2 items-center my-1">Resource Types
					${validate_component(Tooltip, "Tooltip").$$render(
                    $$result,
                    {
                      documentationLink: "https://www.windmill.dev/docs/core_concepts/resources_and_types"
                    },
                    {},
                    {
                      default: () => {
                        return `Every resource has a Resource Type attached to it which contains its schema and make it
						easy in scripts and flows to accept only resources of a specific resource type.`;
                      }
                    }
                  )}</div>`;
                }
              })} ${validate_component(Tab, "Tab").$$render($$result, { size: "md", value: "states" }, {}, {
                default: () => {
                  return `<div class="flex gap-2 items-center my-1">States
					${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                    default: () => {
                      return `States are actually resources (but excluded from the Workspace tab for clarity). States
						are used by scripts to keep data persistent between runs of the same script by the same
						trigger (schedule or user)`;
                    }
                  })}</div>`;
                }
              })} ${validate_component(Tab, "Tab").$$render($$result, { size: "md", value: "cache" }, {}, {
                default: () => {
                  return `<div class="flex gap-2 items-center my-1">Cache
					${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                    default: () => {
                      return `Cached results are actually resources (but excluded from the Workspace tab for clarity).
						Cache are used by flows&#39;s step to cache result to avoid recomputing unnecessarily`;
                    }
                  })}</div>`;
                }
              })} ${validate_component(Tab, "Tab").$$render($$result, { size: "md", value: "theme" }, {}, {
                default: () => {
                  return `<div class="flex gap-2 items-center my-1">Theme
					${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                    default: () => {
                      return `Theme are actually resources (but excluded from the Workspace tab for clarity). Theme
						are used by the apps to customize their look and feel.`;
                    }
                  })}</div>`;
                }
              })}`;
            }
          }
        )} <div class="flex">${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "border",
            color: "light",
            startIcon: {
              icon: Rotate_cw,
              classes: loading.resources || loading.types ? "animate-spin" : ""
            }
          },
          {},
          {}
        )}</div></div> ${tab == "workspace" || tab == "states" || tab == "cache" || tab == "theme" ? `<div class="pt-2"><input placeholder="Search Resource" class="input mt-1"${add_attribute("value", filter, 0)}></div> ${validate_component(ListFilters, "ListFilters").$$render(
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
        )} ${tab != "states" && tab != "cache" ? `${validate_component(ListFilters, "ListFilters").$$render(
          $$result,
          {
            queryName: "app_filter",
            filters: types,
            resourceType: true,
            selectedFilter: typeFilter
          },
          {
            selectedFilter: ($$value) => {
              typeFilter = $$value;
              $$settled = false;
            }
          },
          {}
        )}` : `<div class="h-4"></div>`} <div class="overflow-x-auto pb-40 mt-4">${loading.resources ? `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [0.5, [2], 1] }, {}, {})} ${each(new Array(6), (_) => {
          return `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[4], 0.7] }, {}, {})}`;
        })}` : `${filteredItems?.length == 0 ? `<div class="flex flex-col items-center justify-center h-full" data-svelte-h="svelte-1he2q5w"><div class="text-md font-medium">No resources found</div> <div class="text-sm text-secondary">Try changing the filters or creating a new resource</div></div>` : `${validate_component(DataTable, "DataTable").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Cell, "Cell").$$render($$result, { head: true, first: true }, {}, {})} ${validate_component(Cell, "Cell").$$render($$result, { head: true }, {}, {
                      default: () => {
                        return `Path`;
                      }
                    })} ${validate_component(Cell, "Cell").$$render($$result, { head: true }, {}, {
                      default: () => {
                        return `Resource type`;
                      }
                    })} ${validate_component(Cell, "Cell").$$render($$result, { head: true }, {}, {
                      default: () => {
                        return `Description`;
                      }
                    })} ${validate_component(Cell, "Cell").$$render($$result, { head: true }, {}, {})} ${validate_component(Cell, "Cell").$$render($$result, { head: true, last: true }, {}, {})}`;
                  }
                })}`;
              }
            })} <tbody class="divide-y bg-surface">${filteredItems ? `${each(filteredItems, ({ path, description, resource_type, extra_perms, canWrite: canWrite2, is_oauth, is_linked, account, refresh_error, is_expired, marked, is_refreshed }) => {
              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Cell, "Cell").$$render($$result, { first: true }, {}, {
                    default: () => {
                      return `${validate_component(SharedBadge, "SharedBadge").$$render($$result, { canWrite: canWrite2, extraPerms: extra_perms }, {}, {})} `;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `<a class="break-all" href="${"#" + escape(path, true)}">${marked ? `<!-- HTML_TAG_START -->${marked}<!-- HTML_TAG_END -->` : `${escape(path)}`}</a> `;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `<a href="${"#" + escape(name, true)}">${validate_component(IconedResourceType, "IconedResourceType").$$render($$result, { name: resource_type, after: true }, {}, {})}</a> `;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `<span class="text-tertiary text-xs">${escape(removeMarkdown(truncate(description ?? "", 30)))}</span> `;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="flex flex-row text-center"><div class="w-10">${is_linked ? `${validate_component(Popover, "Popover").$$render($$result, {}, {}, {
                        text: () => {
                          return `<div slot="text" data-svelte-h="svelte-3pks77">This resource is linked with a variable of the same path. They are
															deleted and renamed together.
														</div>`;
                        },
                        default: () => {
                          return `${validate_component(Link, "Link").$$render($$result, {}, {}, {})} `;
                        }
                      })}` : ``}</div> <div class="w-10">${is_refreshed ? `${validate_component(Popover, "Popover").$$render($$result, {}, {}, {
                        text: () => {
                          return `<div slot="text" data-svelte-h="svelte-1qew4lh">The OAuth token will be kept up-to-date in the background by Windmill
															using its refresh token
														</div>`;
                        },
                        default: () => {
                          return `${validate_component(Rotate_cw, "RotateCw").$$render($$result, {}, {}, {})} `;
                        }
                      })}` : ``}</div> ${is_oauth ? `<div class="w-10 pt-1.5">${refresh_error ? `${validate_component(Popover, "Popover").$$render($$result, {}, {}, {
                        text: () => {
                          return `<div slot="text">Latest exchange of the refresh token did not succeed. Error: ${escape(refresh_error)} </div>`;
                        },
                        default: () => {
                          return `${validate_component(Circle, "Circle").$$render(
                            $$result,
                            {
                              class: "text-red-600 animate-[pulse_5s_linear_infinite] fill-current",
                              size: 12
                            },
                            {},
                            {}
                          )} `;
                        }
                      })}` : `${is_expired ? `${validate_component(Popover, "Popover").$$render($$result, {}, {}, {
                        text: () => {
                          return `<div slot="text" data-svelte-h="svelte-1nhbkdq">The access_token is expired, it will get renewed the next time this
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
                      })}` : `${validate_component(Popover, "Popover").$$render($$result, {}, {}, {
                        text: () => {
                          return `<div slot="text" data-svelte-h="svelte-djkvhj">The resource was connected through OAuth and the token is not
																expired.
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
                  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(DropdownV2, "Dropdown").$$render(
                        $$result,
                        {
                          items: [
                            {
                              displayName: !canWrite2 ? "View Permissions" : "Share",
                              icon: Share,
                              action: () => {
                                shareModal.openDrawer?.(path, "resource");
                              }
                            },
                            {
                              displayName: "Edit",
                              icon: Pen,
                              disabled: !canWrite2,
                              action: () => {
                                resourceEditor?.initEdit?.(path);
                              }
                            },
                            ...isDeployable("resource", path, deployUiSettings) ? [
                              {
                                displayName: "Deploy to prod/staging",
                                icon: File_up,
                                action: () => {
                                  deploymentDrawer.openDrawer(path, "resource");
                                }
                              }
                            ] : [],
                            {
                              displayName: "Delete",
                              disabled: !canWrite2,
                              icon: Trash,
                              type: "delete",
                              action: (event) => {
                                if (event?.shiftKey) {
                                  deleteResource(path, account);
                                } else {
                                  deleteConfirmedCallback = () => {
                                    deleteResource(path, account);
                                  };
                                }
                              }
                            },
                            ...account != void 0 ? [
                              {
                                displayName: "Refresh token",
                                icon: Rotate_cw,
                                action: async () => {
                                  await OauthService.refreshToken({
                                    workspace: $workspaceStore ?? "",
                                    id: account ?? 0,
                                    requestBody: { path }
                                  });
                                  sendUserToast("Token refreshed");
                                  loadResources();
                                }
                              }
                            ] : []
                          ]
                        },
                        {},
                        {}
                      )} `;
                    }
                  })} `;
                }
              })}`;
            })}` : ``}</tbody>`;
          }
        })}`}`}</div>` : `${tab == "types" ? `${loading.types ? `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [0.5, [2], 1] }, {}, {})} ${each(new Array(6), (_) => {
          return `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[4], 0.7] }, {}, {})}`;
        })}` : `<div class="overflow-auto mt-4">${validate_component(DataTable, "DataTable").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Cell, "Cell").$$render($$result, { head: true, first: true }, {}, {
                      default: () => {
                        return `Name`;
                      }
                    })} ${validate_component(Cell, "Cell").$$render($$result, { head: true }, {}, {
                      default: () => {
                        return `Description`;
                      }
                    })} ${validate_component(Cell, "Cell").$$render($$result, { head: true, last: true }, {}, {})}`;
                  }
                })}`;
              }
            })} <tbody class="divide-y bg-surface">${resourceTypes ? `${each(resourceTypes, ({ name: name2, description, schema, canWrite: canWrite2 }) => {
              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Cell, "Cell").$$render($$result, { first: true }, {}, {
                    default: () => {
                      return `<a href="${"#" + escape(name2, true)}">${validate_component(IconedResourceType, "IconedResourceType").$$render($$result, { after: true, name: name2 }, {}, {})}</a> `;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `<span class="text-tertiary text-xs w-96 flex flex-wrap whitespace-pre-wrap">${escape(removeMarkdown(truncate(description ?? "", 200)))}</span> `;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, { last: true }, {}, {
                    default: () => {
                      return `${!canWrite2 ? `${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
                        default: () => {
                          return `Shared globally
												${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                            default: () => {
                              return `This resource type is from the &#39;admins&#39; workspace shared with all
													workspaces
												`;
                            }
                          })} `;
                        }
                      })}` : `${$userStore?.is_admin || $userStore?.is_super_admin ? `<div class="flex flex-row-reverse gap-2">${validate_component(Button, "Button").$$render(
                        $$result,
                        {
                          size: "xs",
                          color: "red",
                          variant: "border",
                          btnClasses: "border-0",
                          startIcon: { icon: Trash }
                        },
                        {},
                        {
                          default: () => {
                            return `Delete
												`;
                          }
                        }
                      )} ${validate_component(Button, "Button").$$render(
                        $$result,
                        {
                          size: "xs",
                          color: "light",
                          startIcon: { icon: Pen }
                        },
                        {},
                        {
                          default: () => {
                            return `Edit
												`;
                          }
                        }
                      )} </div>` : `${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
                        default: () => {
                          return `Non Editable
												${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                            default: () => {
                              return `Since resource types are shared with the whole workspace, only admins can
													edit/delete them
												`;
                            }
                          })} `;
                        }
                      })}`}`} `;
                    }
                  })} `;
                }
              })}`;
            })}` : ``}</tbody>`;
          }
        })}</div>`}` : ``}`}`;
      }
    })} ${validate_component(SupabaseConnect, "SupabaseConnect").$$render(
      $$result,
      { this: supabaseConnect },
      {
        this: ($$value) => {
          supabaseConnect = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(AppConnectDrawer, "AppConnect").$$render(
      $$result,
      { this: appConnect },
      {
        this: ($$value) => {
          appConnect = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ResourceEditorDrawer, "ResourceEditorDrawer").$$render(
      $$result,
      { this: resourceEditor },
      {
        this: ($$value) => {
          resourceEditor = $$value;
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
    )}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_enterpriseLicense();
  $$unsubscribe_page();
  $$unsubscribe_userStore();
  $$unsubscribe_resourceTypesStore();
  return $$rendered;
});
export {
  Page as default
};
