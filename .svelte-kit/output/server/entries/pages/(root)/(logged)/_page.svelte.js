import { c as create_ssr_component, v as validate_component, s as subscribe, d as createEventDispatcher, b as add_attribute, f as each, p as compute_slots, e as escape, h as getContext } from "../../../../chunks/ssr.js";
import { A as starStore, w as workspaceStore, u as userStore, e as enterpriseLicense, h as hubBaseUrlStore } from "../../../../chunks/stores2.js";
import { A as Alert, C as Chevron_up } from "../../../../chunks/Alert.js";
import "yaml";
import "../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import { B as Button, s as sendUserToast, i as isDeployable, a3 as copyToClipboard, a4 as DELETE, u as isOwner, A as ALL_DEPLOYABLE, R as pluralize, D as Chevron_down, h as getLocalSetting, z as storeLocalSetting, a as canWrite } from "../../../../chunks/toast.js";
import "minimatch";
import { D as Drawer, a as DrawerContent } from "../../../../chunks/DrawerContent.js";
import "../../../../chunks/common.js";
import { T as Tabs, a as Tab } from "../../../../chunks/Tabs.js";
import { P as PageHeader } from "../../../../chunks/PageHeader.js";
import { g as goto } from "../../../../chunks/client.js";
import { b as base } from "../../../../chunks/base.js";
import { B as BarsStaggered, C as Code, L as LanguageIcon } from "../../../../chunks/util.js";
import "../../../../chunks/index2.js";
import { S as SimpleEditor } from "../../../../chunks/SimpleEditor.js";
import { i as importFlowStore } from "../../../../chunks/flowStore.js";
import { P as Plus } from "../../../../chunks/plus.js";
import { C as Code_2 } from "../../../../chunks/code-2.js";
import "../../../../chunks/scripts.js";
import { P as PickHubScript } from "../../../../chunks/PickHubScript.js";
/* empty css                                                      */
import { S as Skeleton } from "../../../../chunks/Skeleton.js";
import { S as SearchItems } from "../../../../chunks/SearchItems.js";
import { L as ListFilters } from "../../../../chunks/ListFilters.js";
/* empty css                                                              */
import "d3-dag";
import "d3-zoom";
/* empty css                                                                    */
import "@leeoniya/ufuzzy";
import "../../../../chunks/index3.js";
/* empty css                                                                   */
/* empty css                                                                */
import { C as CenteredPage } from "../../../../chunks/CenteredPage.js";
import { P as Popup } from "../../../../chunks/Popup.js";
import { T as Toggle } from "../../../../chunks/Toggle.js";
import { A as AppService, D as DraftService, F as FlowService, e as RawAppService, c as ScriptService, W as WorkspaceService } from "../../../../chunks/services.gen.js";
import { H as HOME_SEARCH_PLACEHOLDER } from "../../../../chunks/consts.js";
import { J as JsonEditor, N as NoItemFound } from "../../../../chunks/SchemaForm.js";
import { T as ToggleButtonGroup, a as ToggleButton } from "../../../../chunks/ToggleButtonGroup.js";
import { F as FlowIcon } from "../../../../chunks/FlowIcon.js";
import { p as page } from "../../../../chunks/stores.js";
import { H as HighlightCode } from "../../../../chunks/FlowGraphViewerStep.js";
import { D as DropdownV2 } from "../../../../chunks/DropdownV2.js";
import { S as SharedBadge } from "../../../../chunks/SharedBadge.js";
import { S as Star } from "../../../../chunks/star.js";
import { R as RowIcon } from "../../../../chunks/RowIcon.js";
import { twMerge } from "tailwind-merge";
import { B as Bell_off } from "../../../../chunks/PanelSection.js";
import { P as Popover, E as External_link } from "../../../../chunks/Popover.js";
import { B as Badge } from "../../../../chunks/Badge.js";
import { D as DeploymentHistory, A as Arrow_big_up } from "../../../../chunks/DeploymentHistory.js";
import { S as Save, F as Folder, P as Path } from "../../../../chunks/VariableEditor.js";
import { G as Globe } from "../../../../chunks/globe.js";
import { L as Loader_2 } from "../../../../chunks/loader-2.js";
import { P as Pen } from "../../../../chunks/pen.js";
import { G as Git_fork } from "../../../../chunks/git-fork.js";
import { T as Trash } from "../../../../chunks/Section.js";
import { f as File, g as FileInput } from "../../../../chunks/LightweightSchemaForm.js";
import { F as File_up } from "../../../../chunks/Required.js";
import { F as File_json } from "../../../../chunks/file-json.js";
import { H as History } from "../../../../chunks/history2.js";
import { a as Share, S as ShareModal } from "../../../../chunks/ShareModal.js";
import { C as Clipboard } from "../../../../chunks/clipboard.js";
import { E as Eye } from "../../../../chunks/eye.js";
import { S as ScheduleEditor } from "../../../../chunks/ScheduleEditor.js";
import { F as FlowHistory } from "../../../../chunks/FlowHistory.js";
import { L as List } from "../../../../chunks/list.js";
import { C as Calendar } from "../../../../chunks/calendar.js";
import { A as Archive, M as MoveDrawer } from "../../../../chunks/MoveDrawer.js";
import { S as ScriptVersionHistory } from "../../../../chunks/ScriptVersionHistory.js";
import { T as Tooltip } from "../../../../chunks/Tooltip.js";
import { C as Copy } from "../../../../chunks/copy.js";
import { a as ConfirmationModal } from "../../../../chunks/ConfirmationModal.js";
import { D as DeployWorkspaceDrawer } from "../../../../chunks/DeployWorkspaceDrawer.js";
import { I as Icon } from "../../../../chunks/Icon.js";
import { U as User } from "../../../../chunks/user2.js";
import { L as Layout_dashboard } from "../../../../chunks/layout-dashboard.js";
import { S as Search_code } from "../../../../chunks/search-code.js";
import { S as Sliders_horizontal } from "../../../../chunks/sliders-horizontal.js";
import { i as importStore } from "../../../../chunks/store.js";
import "hash-sum";
import "../../../../chunks/gridUtils.js";
import "../../../../chunks/AppSliderInputs.svelte_svelte_type_style_lang.js";
/* empty css                                                           */
import "../../../../chunks/svelte.js";
import "ansi_up";
import "@json2csv/plainjs";
/* empty css                                                         */
import "ag-grid-community";
import "ol/proj.js";
/* empty css                                                                     */
import "easy-reactive";
import "../../../../chunks/utils3.js";
import "chartjs-plugin-zoom";
import "chartjs-adapter-date-fns";
/* empty css                                                          */
import "pdfjs-dist";
import { G as Globe_2 } from "../../../../chunks/globe-2.js";
import { B as Building } from "../../../../chunks/building.js";
const Folder_tree = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"
      }
    ],
    [
      "path",
      {
        "d": "M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"
      }
    ],
    ["path", { "d": "M3 5a2 2 0 0 0 2 2h3" }],
    ["path", { "d": "M3 3v13a2 2 0 0 0 2 2h3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "folder-tree" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Unfold_vertical = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M12 22v-6" }],
    ["path", { "d": "M12 8V2" }],
    ["path", { "d": "M4 12H2" }],
    ["path", { "d": "M10 12H8" }],
    ["path", { "d": "M16 12h-2" }],
    ["path", { "d": "M22 12h-2" }],
    ["path", { "d": "m15 19-3 3-3-3" }],
    ["path", { "d": "m15 5-3-3-3 3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "unfold-vertical" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const CreateActionsFlow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_importFlowStore;
  $$unsubscribe_importFlowStore = subscribe(importFlowStore, (value) => value);
  let drawer = void 0;
  let pendingRaw;
  let importType = "yaml";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = ` <div class="flex flex-row gap-2">${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "sm",
        spacingSize: "xl",
        startIcon: { icon: Plus },
        endIcon: { icon: BarsStaggered },
        href: base + "/flows/add?nodraft=true",
        color: "marine",
        dropdownItems: [
          {
            label: "Import from YAML",
            onClick: () => {
              drawer?.toggleDrawer?.();
              importType = "yaml";
            }
          },
          {
            label: "Import from JSON",
            onClick: () => {
              drawer?.toggleDrawer?.();
              importType = "json";
            }
          }
        ]
      },
      {},
      {
        default: () => {
          return `Flow`;
        }
      }
    )}</div>  ${validate_component(Drawer, "Drawer").$$render(
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
          return `${validate_component(DrawerContent, "DrawerContent").$$render(
            $$result,
            {
              title: "Import flow from " + (importType === "yaml" ? "YAML" : "JSON")
            },
            {},
            {
              actions: () => {
                return `${validate_component(Button, "Button").$$render($$result, { size: "sm" }, {}, {
                  default: () => {
                    return `Import`;
                  }
                })} `;
              },
              default: () => {
                return `${validate_component(SimpleEditor, "SimpleEditor").$$render(
                  $$result,
                  {
                    lang: importType,
                    class: "h-full",
                    fixedOverflowWidgets: false,
                    code: pendingRaw
                  },
                  {
                    code: ($$value) => {
                      pendingRaw = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_importFlowStore();
  return $$rendered;
});
const CreateActionsScript = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <div class="flex flex-row gap-2">${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: "sm",
      spacingSize: "xl",
      color: "marine",
      startIcon: { icon: Plus },
      href: base + "/scripts/add"
    },
    {},
    {
      default: () => {
        return `Script ${validate_component(Code_2, "Code2").$$render($$result, { class: "ml-1.5", size: 18 }, {}, {})}`;
      }
    }
  )}</div>`;
});
const PickHubFlow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let prefilteredItems;
  let apps;
  let { filter = "" } = $$props;
  let { syncQuery = false } = $$props;
  let filteredItems = [];
  let appFilter = void 0;
  createEventDispatcher();
  if ($$props.filter === void 0 && $$bindings.filter && filter !== void 0) $$bindings.filter(filter);
  if ($$props.syncQuery === void 0 && $$bindings.syncQuery && syncQuery !== void 0) $$bindings.syncQuery(syncQuery);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    prefilteredItems = appFilter ? [].filter((i) => i.apps.includes(appFilter)) : [];
    apps = Array.from(new Set(filteredItems?.flatMap((x) => x.apps) ?? [])).sort();
    $$rendered = `${validate_component(SearchItems, "SearchItems").$$render(
      $$result,
      {
        filter,
        items: prefilteredItems,
        f: (x) => x.summary + " (" + x.apps.join(", ") + ")",
        filteredItems
      },
      {
        filteredItems: ($$value) => {
          filteredItems = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="w-full flex mt-1 items-center gap-2">${slots.default ? slots.default({}) : ``} <input type="text" placeholder="Search Hub Flows" class="text-2xl grow"${add_attribute("value", filter, 0)}></div> ${validate_component(ListFilters, "ListFilters").$$render(
      $$result,
      {
        syncQuery,
        filters: apps,
        resourceType: true,
        selectedFilter: appFilter
      },
      {
        selectedFilter: ($$value) => {
          appFilter = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${`<div class="my-2"></div> ${each(Array(10).fill(0), (_) => {
      return `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[4], 0.5] }, {}, {})}`;
    })}`}`;
  } while (!$$settled);
  return $$rendered;
});
const Star_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_starStore;
  $$unsubscribe_starStore = subscribe(starStore, (value) => value);
  let { path } = $$props;
  let { kind } = $$props;
  let { starred = false } = $$props;
  let { workspace_id } = $$props;
  createEventDispatcher();
  if ($$props.path === void 0 && $$bindings.path && path !== void 0) $$bindings.path(path);
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0) $$bindings.kind(kind);
  if ($$props.starred === void 0 && $$bindings.starred && starred !== void 0) $$bindings.starred(starred);
  if ($$props.workspace_id === void 0 && $$bindings.workspace_id && workspace_id !== void 0) $$bindings.workspace_id(workspace_id);
  $$unsubscribe_starStore();
  return `<button class="p-2">${starred ? `${`${validate_component(Star, "Star").$$render($$result, { size: 18, fill: "currentcolor" }, {}, {})}`}` : `${validate_component(Star, "Star").$$render(
    $$result,
    {
      class: "opacity-60",
      size: 18,
      fill: "none"
    },
    {},
    {}
  )}`}</button>`;
});
const Row = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { marked } = $$props;
  let { starred } = $$props;
  let { canFavorite = true } = $$props;
  let { errorHandlerMuted = false } = $$props;
  createEventDispatcher();
  let { kind = "script" } = $$props;
  let { summary = void 0 } = $$props;
  let { path } = $$props;
  let { href } = $$props;
  let { workspaceId } = $$props;
  let { depth = 0 } = $$props;
  let displayPath = (depth === 0 ? path : path?.split("/")?.slice(-1)?.[0]) ?? "";
  if ($$props.marked === void 0 && $$bindings.marked && marked !== void 0) $$bindings.marked(marked);
  if ($$props.starred === void 0 && $$bindings.starred && starred !== void 0) $$bindings.starred(starred);
  if ($$props.canFavorite === void 0 && $$bindings.canFavorite && canFavorite !== void 0) $$bindings.canFavorite(canFavorite);
  if ($$props.errorHandlerMuted === void 0 && $$bindings.errorHandlerMuted && errorHandlerMuted !== void 0) $$bindings.errorHandlerMuted(errorHandlerMuted);
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0) $$bindings.kind(kind);
  if ($$props.summary === void 0 && $$bindings.summary && summary !== void 0) $$bindings.summary(summary);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0) $$bindings.path(path);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.workspaceId === void 0 && $$bindings.workspaceId && workspaceId !== void 0) $$bindings.workspaceId(workspaceId);
  if ($$props.depth === void 0 && $$bindings.depth && depth !== void 0) $$bindings.depth(depth);
  return `<div${add_attribute("class", twMerge("hover:bg-surface-hover w-full inline-flex items-center gap-4 first-of-type:!border-t-0 first-of-type:rounded-t-md last-of-type:rounded-b-md [*:not(:last-child)]:border-b px-4 py-2.5 border-b last:border-b-0", depth > 0 ? "!rounded-none" : ""), 0)}${add_attribute("style", depth > 0 ? `padding-left: ${depth * 32}px;` : "", 0)}><a${add_attribute("href", href, 0)} class="min-w-0 grow hover:underline decoration-gray-400 inline-flex items-center gap-4"><div class="shrink">${validate_component(RowIcon, "RowIcon").$$render($$result, { href, kind }, {}, {})}</div> <div class="grow"><div class="text-primary flex-wrap text-left text-sm font-semibold">${marked ? `<!-- HTML_TAG_START -->${marked}<!-- HTML_TAG_END -->` : `${escape(!summary || summary.length == 0 ? displayPath : summary)}`}</div> <div class="text-secondary text-2xs truncate text-left font-light">${escape(path)}</div></div></a> ${errorHandlerMuted ? `${validate_component(Bell_off, "BellOff").$$render(
    $$result,
    {
      class: "w-8 opacity-60",
      size: 12,
      fill: "currentcolor"
    },
    {},
    {}
  )}` : ``} ${$$slots.badges ? `<div class="hidden lg:flex flex-row gap-4 items-center">${slots.badges ? slots.badges({}) : ``}</div>` : ``} ${canFavorite ? `<div class="center-center h-full text-sm font-semibold text-secondary">${validate_component(Star_1, "Star").$$render(
    $$result,
    {
      kind,
      path,
      starred,
      workspace_id: workspaceId
    },
    {},
    {}
  )}</div>` : `<div class="w-9"></div>`} <div class="flex gap-1 items-center justify-end pr-2">${slots.actions ? slots.actions({}) : ``}</div></div>`;
});
const DraftBadge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { has_draft = false } = $$props;
  let { draft_only = false } = $$props;
  if ($$props.has_draft === void 0 && $$bindings.has_draft && has_draft !== void 0) $$bindings.has_draft(has_draft);
  if ($$props.draft_only === void 0 && $$bindings.draft_only && draft_only !== void 0) $$bindings.draft_only(draft_only);
  return `${has_draft ? `${draft_only ? `${validate_component(Popover, "Popover").$$render($$result, { notClickable: true }, {}, {
    text: () => {
      return `Never deployed and is only a draft`;
    },
    default: () => {
      return `${validate_component(Badge, "Badge").$$render(
        $$result,
        {
          small: true,
          color: "indigo",
          baseClass: "border border-indigo-200"
        },
        {},
        {
          default: () => {
            return `Draft only`;
          }
        }
      )}`;
    }
  })}` : `${validate_component(Popover, "Popover").$$render($$result, { notClickable: true }, {}, {
    text: () => {
      return `Is deployed and has a draft`;
    },
    default: () => {
      return `${validate_component(Badge, "Badge").$$render(
        $$result,
        {
          small: true,
          color: "indigo",
          baseClass: "border border-indigo-200"
        },
        {},
        {
          default: () => {
            return `+Draft`;
          }
        }
      )}`;
    }
  })}`}` : ``}`;
});
const AppDeploymentHistory = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  let { appPath = void 0 } = $$props;
  let historyBrowserDrawerOpen = false;
  function open() {
    historyBrowserDrawerOpen = true;
  }
  if ($$props.appPath === void 0 && $$bindings.appPath && appPath !== void 0) $$bindings.appPath(appPath);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      {
        size: "1200px",
        open: historyBrowserDrawerOpen
      },
      {
        open: ($$value) => {
          historyBrowserDrawerOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Deployment History" }, {}, {
            default: () => {
              return `${validate_component(DeploymentHistory, "DeploymentHistory").$$render($$result, { appPath }, {}, {})}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const AppJsonEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let jsonViewerDrawer;
  let code = "";
  let path = "";
  let useDraft = false;
  let loading = true;
  const dispatch = createEventDispatcher();
  let app = void 0;
  async function open(path_l) {
    loading = true;
    jsonViewerDrawer?.toggleDrawer();
    path = path_l;
    const fapp = await AppService.getAppByPathWithDraft({ workspace: $workspaceStore, path });
    useDraft = fapp?.draft != void 0;
    app = { ...fapp };
    if (fapp.draft) {
      delete app["draft"];
    }
    const capp = fapp?.draft ? fapp.draft : fapp.value;
    code = JSON.stringify(capp, null, 4);
    loading = false;
  }
  async function saveApp() {
    await AppService.updateApp({
      workspace: $workspaceStore,
      path,
      requestBody: { ...app, value: JSON.parse(code) }
    });
    dispatch("change");
    try {
      localStorage.removeItem(`app-${path}`);
    } catch (e) {
      console.error("error interacting with local storage", e);
    }
    sendUserToast("App deployed");
  }
  async function saveDraft() {
    await DraftService.createDraft({
      workspace: $workspaceStore,
      requestBody: {
        path,
        typ: "app",
        value: JSON.parse(code)
      }
    });
    dispatch("change");
    try {
      localStorage.removeItem(`app-${path}`);
    } catch (e) {
      console.error("error interacting with local storage", e);
    }
    sendUserToast("Draft saved");
  }
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.saveApp === void 0 && $$bindings.saveApp && saveApp !== void 0) $$bindings.saveApp(saveApp);
  if ($$props.saveDraft === void 0 && $$bindings.saveDraft && saveDraft !== void 0) $$bindings.saveDraft(saveDraft);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "800px", this: jsonViewerDrawer },
      {
        this: ($$value) => {
          jsonViewerDrawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "App JSON" }, {}, {
            actions: () => {
              return `${!$userStore?.operator ? `${validate_component(Button, "Button").$$render(
                $$result,
                {
                  startIcon: { icon: Save },
                  color: "dark",
                  size: "xs"
                },
                {},
                {
                  default: () => {
                    return `Save as draft`;
                  }
                }
              )} ${validate_component(Button, "Button").$$render(
                $$result,
                {
                  startIcon: { icon: Globe },
                  color: "dark",
                  size: "xs"
                },
                {},
                {
                  default: () => {
                    return `Deploy`;
                  }
                }
              )}` : ``} `;
            },
            default: () => {
              return `${useDraft ? `<div class="mb-1">${validate_component(Badge, "Badge").$$render(
                $$result,
                {
                  small: true,
                  color: "indigo",
                  baseClass: "border border-indigo-200"
                },
                {},
                {
                  default: () => {
                    return `+Draft`;
                  }
                }
              )}</div>` : ``} ${loading ? `${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})}` : `${validate_component(JsonEditor, "JsonEditor").$$render(
                $$result,
                { code },
                {
                  code: ($$value) => {
                    code = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`}`;
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
const AppRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $userStore, $$unsubscribe_userStore;
  let $page, $$unsubscribe_page;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { app } = $$props;
  let { marked } = $$props;
  let { starred } = $$props;
  let { shareModal } = $$props;
  let { moveDrawer } = $$props;
  let { deploymentDrawer } = $$props;
  let { deleteConfirmedCallback } = $$props;
  let { depth = 0 } = $$props;
  let { menuOpen = false } = $$props;
  let { deployUiSettings = void 0 } = $$props;
  const dispatch = createEventDispatcher();
  let appExport;
  let appDeploymentHistory = void 0;
  async function loadAppJson() {
    appExport.open(app.path);
  }
  if ($$props.app === void 0 && $$bindings.app && app !== void 0) $$bindings.app(app);
  if ($$props.marked === void 0 && $$bindings.marked && marked !== void 0) $$bindings.marked(marked);
  if ($$props.starred === void 0 && $$bindings.starred && starred !== void 0) $$bindings.starred(starred);
  if ($$props.shareModal === void 0 && $$bindings.shareModal && shareModal !== void 0) $$bindings.shareModal(shareModal);
  if ($$props.moveDrawer === void 0 && $$bindings.moveDrawer && moveDrawer !== void 0) $$bindings.moveDrawer(moveDrawer);
  if ($$props.deploymentDrawer === void 0 && $$bindings.deploymentDrawer && deploymentDrawer !== void 0) $$bindings.deploymentDrawer(deploymentDrawer);
  if ($$props.deleteConfirmedCallback === void 0 && $$bindings.deleteConfirmedCallback && deleteConfirmedCallback !== void 0) $$bindings.deleteConfirmedCallback(deleteConfirmedCallback);
  if ($$props.depth === void 0 && $$bindings.depth && depth !== void 0) $$bindings.depth(depth);
  if ($$props.menuOpen === void 0 && $$bindings.menuOpen && menuOpen !== void 0) $$bindings.menuOpen(menuOpen);
  if ($$props.deployUiSettings === void 0 && $$bindings.deployUiSettings && deployUiSettings !== void 0) $$bindings.deployUiSettings(deployUiSettings);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${menuOpen ? `${validate_component(AppJsonEditor, "AppJsonEditor").$$render(
      $$result,
      { this: appExport },
      {
        this: ($$value) => {
          appExport = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(AppDeploymentHistory, "AppDeploymentHistory").$$render(
      $$result,
      {
        appPath: app.path,
        this: appDeploymentHistory
      },
      {
        this: ($$value) => {
          appDeploymentHistory = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${validate_component(Row, "Row").$$render(
      $$result,
      {
        href: `${base}/apps/get/${app.path}`,
        kind: "app",
        marked,
        path: app.path,
        summary: app.summary,
        workspaceId: app.workspace_id ?? $workspaceStore ?? "",
        starred,
        canFavorite: !app.draft_only,
        depth
      },
      {},
      {
        actions: () => {
          return `<span class="hidden md:inline-flex gap-x-1">${!$userStore?.operator ? `${app.canWrite ? `<div>${validate_component(Button, "Button").$$render(
            $$result,
            {
              color: "light",
              size: "xs",
              variant: "border",
              startIcon: { icon: Pen },
              href: base + "/apps/edit/" + app.path + "?nodraft=true"
            },
            {},
            {
              default: () => {
                return `Edit`;
              }
            }
          )}</div>` : `<div>${validate_component(Button, "Button").$$render(
            $$result,
            {
              color: "light",
              size: "xs",
              variant: "border",
              startIcon: { icon: Git_fork },
              href: base + "/apps/add?template=" + app.path
            },
            {},
            {
              default: () => {
                return `Fork`;
              }
            }
          )}</div>`}` : ``}</span> ${validate_component(DropdownV2, "Dropdown").$$render(
            $$result,
            {
              items: () => {
                let { draft_only, canWrite: canWrite2, summary, execution_mode, path, has_draft } = app;
                if (draft_only) {
                  return [
                    {
                      displayName: "Delete",
                      icon: Trash,
                      action: async (event) => {
                        if (event?.shiftKey) {
                          await AppService.deleteApp({ workspace: $workspaceStore ?? "", path });
                          dispatch("change");
                        } else {
                          deleteConfirmedCallback = async () => {
                            await AppService.deleteApp({ workspace: $workspaceStore ?? "", path });
                            dispatch("change");
                          };
                        }
                      },
                      type: "delete",
                      disabled: !canWrite2,
                      hide: $userStore?.operator
                    },
                    {
                      displayName: $userStore?.operator ? "View JSON" : "View/Edit JSON",
                      icon: File,
                      action: () => {
                        loadAppJson();
                      }
                    }
                  ];
                }
                return [
                  {
                    displayName: "Duplicate/Fork",
                    icon: Git_fork,
                    href: `${base}/apps/add?template=${path}`,
                    hide: $userStore?.operator
                  },
                  {
                    displayName: "Move/Rename",
                    icon: File_up,
                    action: () => {
                      moveDrawer.openDrawer(path, summary, "app");
                    },
                    disabled: !canWrite2,
                    hide: $userStore?.operator
                  },
                  ...isDeployable("app", path, deployUiSettings) ? [
                    {
                      displayName: "Deploy to staging/prod",
                      icon: Globe,
                      action: () => {
                        deploymentDrawer.openDrawer(path, "app");
                      },
                      hide: $userStore?.operator
                    }
                  ] : [],
                  {
                    displayName: $userStore?.operator ? "View JSON" : "View/Edit JSON",
                    icon: File_json,
                    action: () => {
                      loadAppJson();
                    }
                  },
                  {
                    displayName: "Deployments",
                    icon: History,
                    action: () => appDeploymentHistory?.open(),
                    hide: $userStore?.operator
                  },
                  {
                    displayName: canWrite2 ? "Share" : "See Permissions",
                    icon: Share,
                    action: () => {
                      shareModal.openDrawer && shareModal.openDrawer(path, "app");
                    },
                    hide: $userStore?.operator
                  },
                  {
                    displayName: "Copy path",
                    icon: Clipboard,
                    action: () => {
                      copyToClipboard(path);
                    }
                  },
                  ...execution_mode == "anonymous" ? [
                    {
                      displayName: "Go to public page",
                      icon: External_link,
                      action: async () => {
                        let secretUrl = await AppService.getPublicSecretOfApp({ workspace: $workspaceStore ?? "", path });
                        $page.url.protocol + `//${$page.url.hostname}/public/${$workspaceStore}/${secretUrl}`;
                        goto();
                      }
                    }
                  ] : [],
                  ...has_draft ? [
                    {
                      displayName: "Delete Draft",
                      icon: Trash,
                      action: async () => {
                        await DraftService.deleteDraft({
                          workspace: $workspaceStore ?? "",
                          path,
                          kind: "app"
                        });
                        dispatch("change");
                      },
                      type: DELETE,
                      disabled: !canWrite2,
                      hide: $userStore?.operator
                    }
                  ] : [],
                  {
                    displayName: "Delete",
                    icon: Trash,
                    action: async (event) => {
                      if (event?.shiftKey) {
                        await AppService.deleteApp({ workspace: $workspaceStore ?? "", path });
                        dispatch("change");
                      } else {
                        deleteConfirmedCallback = async () => {
                          await AppService.deleteApp({ workspace: $workspaceStore ?? "", path });
                          dispatch("change");
                        };
                      }
                    },
                    type: "delete",
                    disabled: !canWrite2,
                    hide: $userStore?.operator
                  }
                ];
              }
            },
            {},
            {}
          )} `;
        },
        badges: () => {
          return `${app.execution_mode == "anonymous" ? `${validate_component(Badge, "Badge").$$render($$result, { small: true }, {}, {
            default: () => {
              return `<div class="flex gap-1 items-center">${validate_component(Eye, "Eye").$$render($$result, { size: 14 }, {}, {})}
					Public</div>`;
            }
          })}` : ``} ${validate_component(SharedBadge, "SharedBadge").$$render(
            $$result,
            {
              canWrite: app.canWrite,
              extraPerms: app.extra_perms
            },
            {},
            {}
          )} ${validate_component(DraftBadge, "DraftBadge").$$render(
            $$result,
            {
              has_draft: app.has_draft,
              draft_only: app.draft_only
            },
            {},
            {}
          )} <div class="w-8 center-center"></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_userStore();
  $$unsubscribe_page();
  return $$rendered;
});
const FlowRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let { flow } = $$props;
  let { marked } = $$props;
  let { starred } = $$props;
  let { shareModal } = $$props;
  let { moveDrawer } = $$props;
  let { deleteConfirmedCallback } = $$props;
  let { deploymentDrawer } = $$props;
  let { errorHandlerMuted } = $$props;
  let { depth = 0 } = $$props;
  let { menuOpen = false } = $$props;
  let { deployUiSettings = void 0 } = $$props;
  const dispatch = createEventDispatcher();
  async function archiveFlow(path, archived) {
    try {
      await FlowService.archiveFlowByPath({
        workspace: $workspaceStore,
        path,
        requestBody: { archived }
      });
      dispatch("change");
      sendUserToast(`Archived flow ${path}`);
    } catch (err) {
      sendUserToast(`Could not archive this flow ${err.body}`, true);
    }
  }
  async function deleteFlow(path) {
    try {
      await FlowService.deleteFlowByPath({ workspace: $workspaceStore, path });
      dispatch("change");
      sendUserToast(`Deleted flow ${path}`);
    } catch (err) {
      sendUserToast(`Could not delete this flow ${err.body}`, true);
    }
  }
  let scheduleEditor;
  let flowHistory;
  if ($$props.flow === void 0 && $$bindings.flow && flow !== void 0) $$bindings.flow(flow);
  if ($$props.marked === void 0 && $$bindings.marked && marked !== void 0) $$bindings.marked(marked);
  if ($$props.starred === void 0 && $$bindings.starred && starred !== void 0) $$bindings.starred(starred);
  if ($$props.shareModal === void 0 && $$bindings.shareModal && shareModal !== void 0) $$bindings.shareModal(shareModal);
  if ($$props.moveDrawer === void 0 && $$bindings.moveDrawer && moveDrawer !== void 0) $$bindings.moveDrawer(moveDrawer);
  if ($$props.deleteConfirmedCallback === void 0 && $$bindings.deleteConfirmedCallback && deleteConfirmedCallback !== void 0) $$bindings.deleteConfirmedCallback(deleteConfirmedCallback);
  if ($$props.deploymentDrawer === void 0 && $$bindings.deploymentDrawer && deploymentDrawer !== void 0) $$bindings.deploymentDrawer(deploymentDrawer);
  if ($$props.errorHandlerMuted === void 0 && $$bindings.errorHandlerMuted && errorHandlerMuted !== void 0) $$bindings.errorHandlerMuted(errorHandlerMuted);
  if ($$props.depth === void 0 && $$bindings.depth && depth !== void 0) $$bindings.depth(depth);
  if ($$props.menuOpen === void 0 && $$bindings.menuOpen && menuOpen !== void 0) $$bindings.menuOpen(menuOpen);
  if ($$props.deployUiSettings === void 0 && $$bindings.deployUiSettings && deployUiSettings !== void 0) $$bindings.deployUiSettings(deployUiSettings);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${menuOpen ? `${validate_component(ScheduleEditor, "ScheduleEditor").$$render(
      $$result,
      { this: scheduleEditor },
      {
        this: ($$value) => {
          scheduleEditor = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(FlowHistory, "FlowHistory").$$render(
      $$result,
      { path: flow.path, this: flowHistory },
      {
        this: ($$value) => {
          flowHistory = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${validate_component(Row, "Row").$$render(
      $$result,
      {
        href: flow.draft_only ? `${base}/flows/edit/${flow.path}?nodraft=true` : `${base}/flows/get/${flow.path}?workspace=${$workspaceStore}`,
        kind: "flow",
        workspaceId: flow.workspace_id ?? $workspaceStore ?? "",
        marked,
        path: flow.path,
        summary: flow.summary,
        starred,
        errorHandlerMuted,
        canFavorite: !flow.draft_only,
        depth
      },
      {},
      {
        actions: () => {
          return `<span class="hidden md:inline-flex gap-x-1">${!$userStore?.operator ? `${flow.canWrite && !flow.archived ? `<div>${validate_component(Button, "Button").$$render(
            $$result,
            {
              color: "light",
              size: "xs",
              variant: "border",
              startIcon: { icon: Pen },
              href: base + "/flows/edit/" + flow.path + "?nodraft=true"
            },
            {},
            {
              default: () => {
                return `Edit`;
              }
            }
          )}</div>` : `<div>${validate_component(Button, "Button").$$render(
            $$result,
            {
              color: "light",
              size: "xs",
              variant: "border",
              startIcon: { icon: Git_fork },
              href: base + "/flows/add?template=" + flow.path
            },
            {},
            {
              default: () => {
                return `Fork`;
              }
            }
          )}</div>`}` : ``}</span> ${validate_component(DropdownV2, "Dropdown").$$render(
            $$result,
            {
              items: () => {
                let { draft_only, path, archived, has_draft } = flow;
                let owner = isOwner(path, $userStore, $workspaceStore);
                if (draft_only) {
                  return [
                    {
                      displayName: "Delete",
                      icon: Trash,
                      action: (event) => {
                        if (event?.shiftKey) {
                          deleteFlow(path);
                        } else {
                          deleteConfirmedCallback = () => {
                            deleteFlow(path);
                          };
                        }
                      },
                      type: "delete",
                      disabled: !owner,
                      hide: $userStore?.operator
                    }
                  ];
                }
                return [
                  {
                    displayName: "Duplicate/Fork",
                    icon: Git_fork,
                    href: `${base}/flows/add?template=${path}`,
                    hide: $userStore?.operator
                  },
                  {
                    displayName: "View runs",
                    icon: List,
                    href: `${base}/runs/${path}`
                  },
                  {
                    displayName: "Audit logs",
                    icon: Eye,
                    href: `${base}/audit_logs?resource=${path}`,
                    hide: $userStore?.operator
                  },
                  {
                    displayName: "Move/Rename",
                    icon: File_up,
                    action: () => {
                      moveDrawer.openDrawer(path, flow.summary, "flow");
                    },
                    disabled: !owner || archived,
                    hide: $userStore?.operator
                  },
                  {
                    displayName: "Copy path",
                    icon: Clipboard,
                    action: () => {
                      copyToClipboard(path);
                    }
                  },
                  ...isDeployable("flow", path, deployUiSettings) ? [
                    {
                      displayName: "Deploy to staging/prod",
                      icon: Globe,
                      action: () => {
                        deploymentDrawer.openDrawer(path, "flow");
                      },
                      disabled: archived,
                      hide: $userStore?.operator
                    }
                  ] : [],
                  {
                    displayName: "Deployments",
                    icon: History,
                    action: () => {
                      flowHistory.open();
                    },
                    hide: $userStore?.operator
                  },
                  {
                    displayName: "Schedule",
                    icon: Calendar,
                    action: () => {
                      scheduleEditor?.openNew(true, path);
                    },
                    disabled: archived,
                    hide: $userStore?.operator
                  },
                  {
                    displayName: owner ? "Share" : "See Permissions",
                    icon: Share,
                    action: () => {
                      shareModal.openDrawer && shareModal.openDrawer(path, "flow");
                    },
                    hide: $userStore?.operator
                  },
                  {
                    displayName: archived ? "Unarchive" : "Archive",
                    icon: Archive,
                    action: () => {
                      path && archiveFlow(path, !archived);
                    },
                    type: "delete",
                    disabled: !owner,
                    hide: $userStore?.operator
                  },
                  ...has_draft ? [
                    {
                      displayName: "Delete Draft",
                      icon: Trash,
                      action: async () => {
                        await DraftService.deleteDraft({
                          workspace: $workspaceStore ?? "",
                          path,
                          kind: "flow"
                        });
                        dispatch("change");
                      },
                      type: DELETE,
                      disabled: !owner,
                      hide: $userStore?.operator
                    }
                  ] : [],
                  {
                    displayName: "Delete",
                    icon: Trash,
                    action: (event) => {
                      if (event?.shiftKey) {
                        deleteFlow(path);
                      } else {
                        deleteConfirmedCallback = () => {
                          deleteFlow(path);
                        };
                      }
                    },
                    type: "delete",
                    disabled: !owner,
                    hide: $userStore?.operator
                  }
                ];
              }
            },
            {},
            {}
          )} `;
        },
        badges: () => {
          return `${flow.archived ? `${validate_component(Badge, "Badge").$$render($$result, { color: "red", baseClass: "border" }, {}, {
            default: () => {
              return `archived`;
            }
          })}` : ``} ${validate_component(SharedBadge, "SharedBadge").$$render(
            $$result,
            {
              canWrite: flow.canWrite,
              extraPerms: flow.extra_perms
            },
            {},
            {}
          )} ${validate_component(DraftBadge, "DraftBadge").$$render(
            $$result,
            {
              has_draft: flow.has_draft,
              draft_only: flow.draft_only
            },
            {},
            {}
          )} <div class="w-8 center-center"></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_userStore();
  return $$rendered;
});
const RawAppRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let { app } = $$props;
  let { marked } = $$props;
  let { starred } = $$props;
  let { shareModal } = $$props;
  let { moveDrawer } = $$props;
  let { deleteConfirmedCallback } = $$props;
  let { deploymentDrawer } = $$props;
  let { depth = 0 } = $$props;
  let { menuOpen = false } = $$props;
  let { deployUiSettings = void 0 } = $$props;
  let updateAppDrawer;
  const dispatch = createEventDispatcher();
  if ($$props.app === void 0 && $$bindings.app && app !== void 0) $$bindings.app(app);
  if ($$props.marked === void 0 && $$bindings.marked && marked !== void 0) $$bindings.marked(marked);
  if ($$props.starred === void 0 && $$bindings.starred && starred !== void 0) $$bindings.starred(starred);
  if ($$props.shareModal === void 0 && $$bindings.shareModal && shareModal !== void 0) $$bindings.shareModal(shareModal);
  if ($$props.moveDrawer === void 0 && $$bindings.moveDrawer && moveDrawer !== void 0) $$bindings.moveDrawer(moveDrawer);
  if ($$props.deleteConfirmedCallback === void 0 && $$bindings.deleteConfirmedCallback && deleteConfirmedCallback !== void 0) $$bindings.deleteConfirmedCallback(deleteConfirmedCallback);
  if ($$props.deploymentDrawer === void 0 && $$bindings.deploymentDrawer && deploymentDrawer !== void 0) $$bindings.deploymentDrawer(deploymentDrawer);
  if ($$props.depth === void 0 && $$bindings.depth && depth !== void 0) $$bindings.depth(depth);
  if ($$props.menuOpen === void 0 && $$bindings.menuOpen && menuOpen !== void 0) $$bindings.menuOpen(menuOpen);
  if ($$props.deployUiSettings === void 0 && $$bindings.deployUiSettings && deployUiSettings !== void 0) $$bindings.deployUiSettings(deployUiSettings);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${menuOpen ? `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "800px", this: updateAppDrawer },
      {
        this: ($$value) => {
          updateAppDrawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Update app" }, {}, {
            default: () => {
              return `${validate_component(FileInput, "FileInput").$$render(
                $$result,
                {
                  accept: ".js",
                  multiple: false,
                  convertTo: "text",
                  iconSize: 24,
                  class: "text-sm py-4"
                },
                {},
                {}
              )}`;
            }
          })}`;
        }
      }
    )}` : ``} ${validate_component(Row, "Row").$$render(
      $$result,
      {
        href: base + "/apps/get_raw/" + app.version + "/" + app.path,
        kind: "raw_app",
        marked,
        path: app.path,
        summary: app.summary,
        workspaceId: app.workspace_id ?? $workspaceStore ?? "",
        starred,
        canFavorite: true,
        depth
      },
      {},
      {
        actions: () => {
          return `<span class="hidden md:inline-flex gap-x-1">${!$userStore?.operator ? `${app.canWrite ? `<div>${validate_component(Button, "Button").$$render(
            $$result,
            {
              color: "light",
              size: "xs",
              variant: "border",
              startIcon: { icon: Pen }
            },
            {},
            {
              default: () => {
                return `Edit`;
              }
            }
          )}</div>` : ``}` : ``}</span> ${validate_component(DropdownV2, "Dropdown").$$render(
            $$result,
            {
              items: () => {
                let { summary, path, canWrite: canWrite2 } = app;
                return [
                  {
                    displayName: "Move/Rename",
                    icon: File_up,
                    action: () => {
                      moveDrawer.openDrawer(path, summary, "raw_app");
                    },
                    disabled: !canWrite2
                  },
                  ...isDeployable("app", path, deployUiSettings) ? [
                    {
                      displayName: "Deploy to prod/staging",
                      icon: Globe,
                      action: () => {
                        deploymentDrawer.openDrawer(path, "raw_app");
                      }
                    }
                  ] : [],
                  {
                    displayName: canWrite2 ? "Share" : "See Permissions",
                    icon: Share,
                    action: () => {
                      shareModal.openDrawer && shareModal.openDrawer(path, "raw_app");
                    }
                  },
                  {
                    displayName: "Delete",
                    icon: Trash,
                    action: async (event) => {
                      if (event?.shiftKey) {
                        await RawAppService.deleteRawApp({ workspace: $workspaceStore ?? "", path });
                        dispatch("change");
                      } else {
                        deleteConfirmedCallback = async () => {
                          await RawAppService.deleteRawApp({ workspace: $workspaceStore ?? "", path });
                          dispatch("change");
                        };
                      }
                    },
                    type: "delete",
                    disabled: !canWrite2
                  }
                ];
              }
            },
            {},
            {}
          )} `;
        },
        badges: () => {
          return `${validate_component(SharedBadge, "SharedBadge").$$render(
            $$result,
            {
              canWrite: app.canWrite,
              extraPerms: app.extra_perms
            },
            {},
            {}
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_userStore();
  return $$rendered;
});
const NoMainFuncBadge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Popover, "Popover").$$render($$result, { notClickable: true }, {}, {
    text: () => {
      return `The script has no main function exported`;
    },
    default: () => {
      return `${validate_component(Badge, "Badge").$$render(
        $$result,
        {
          small: true,
          color: "yellow",
          baseClass: "border border-indigo-200"
        },
        {},
        {
          default: () => {
            return `No main`;
          }
        }
      )}`;
    }
  })}`;
});
const dlt = "delete";
const ScriptRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let { script } = $$props;
  let { marked } = $$props;
  let { starred } = $$props;
  let { shareModal } = $$props;
  let { moveDrawer } = $$props;
  let { deploymentDrawer } = $$props;
  let { deleteConfirmedCallback } = $$props;
  let { errorHandlerMuted } = $$props;
  let { showCode } = $$props;
  let { depth = 0 } = $$props;
  let { menuOpen = false } = $$props;
  let { deployUiSettings = void 0 } = $$props;
  const dispatch = createEventDispatcher();
  async function archiveScript(path) {
    await ScriptService.archiveScriptByPath({ workspace: $workspaceStore, path });
    dispatch("change");
    sendUserToast(`Archived script ${path}`);
  }
  async function unarchiveScript(path) {
    const r = await ScriptService.getScriptByPath({ workspace: $workspaceStore, path });
    await ScriptService.createScript({
      workspace: $workspaceStore,
      requestBody: { ...r, parent_hash: r.hash, lock: r.lock }
    });
    dispatch("change");
    sendUserToast(`Unarchived script ${path}`);
  }
  async function deleteScript(path) {
    await ScriptService.deleteScriptByPath({ workspace: $workspaceStore, path });
    dispatch("change");
    sendUserToast(`Delete script ${path}`);
  }
  let scheduleEditor;
  let versionsDrawerOpen = false;
  if ($$props.script === void 0 && $$bindings.script && script !== void 0) $$bindings.script(script);
  if ($$props.marked === void 0 && $$bindings.marked && marked !== void 0) $$bindings.marked(marked);
  if ($$props.starred === void 0 && $$bindings.starred && starred !== void 0) $$bindings.starred(starred);
  if ($$props.shareModal === void 0 && $$bindings.shareModal && shareModal !== void 0) $$bindings.shareModal(shareModal);
  if ($$props.moveDrawer === void 0 && $$bindings.moveDrawer && moveDrawer !== void 0) $$bindings.moveDrawer(moveDrawer);
  if ($$props.deploymentDrawer === void 0 && $$bindings.deploymentDrawer && deploymentDrawer !== void 0) $$bindings.deploymentDrawer(deploymentDrawer);
  if ($$props.deleteConfirmedCallback === void 0 && $$bindings.deleteConfirmedCallback && deleteConfirmedCallback !== void 0) $$bindings.deleteConfirmedCallback(deleteConfirmedCallback);
  if ($$props.errorHandlerMuted === void 0 && $$bindings.errorHandlerMuted && errorHandlerMuted !== void 0) $$bindings.errorHandlerMuted(errorHandlerMuted);
  if ($$props.showCode === void 0 && $$bindings.showCode && showCode !== void 0) $$bindings.showCode(showCode);
  if ($$props.depth === void 0 && $$bindings.depth && depth !== void 0) $$bindings.depth(depth);
  if ($$props.menuOpen === void 0 && $$bindings.menuOpen && menuOpen !== void 0) $$bindings.menuOpen(menuOpen);
  if ($$props.deployUiSettings === void 0 && $$bindings.deployUiSettings && deployUiSettings !== void 0) $$bindings.deployUiSettings(deployUiSettings);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${menuOpen ? `${validate_component(ScheduleEditor, "ScheduleEditor").$$render(
      $$result,
      { this: scheduleEditor },
      {
        this: ($$value) => {
          scheduleEditor = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${validate_component(Row, "Row").$$render(
      $$result,
      {
        href: script.draft_only ? `${base}/scripts/edit/${script.path}` : `${base}/scripts/get/${script.hash}?workspace=${$workspaceStore}`,
        kind: "script",
        marked,
        path: script.path,
        summary: script.summary,
        starred,
        errorHandlerMuted,
        workspaceId: $workspaceStore ?? "",
        canFavorite: !script.draft_only,
        depth
      },
      {},
      {
        actions: () => {
          return `<span class="hidden md:inline-flex gap-x-1">${!$userStore?.operator ? `${script.use_codebase ? `${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
            default: () => {
              return `bundle${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                default: () => {
                  return `This script is deployed as a bundle and can only be deployed from the CLI for now`;
                }
              })}`;
            }
          })}` : `${script.canWrite && !script.archived ? `<div>${validate_component(Button, "Button").$$render(
            $$result,
            {
              color: "light",
              size: "xs",
              variant: "border",
              startIcon: { icon: Pen },
              href: base + "/scripts/edit/" + script.path
            },
            {},
            {
              default: () => {
                return `Edit`;
              }
            }
          )}</div>` : `${!script.draft_only ? `<div>${validate_component(Button, "Button").$$render(
            $$result,
            {
              color: "light",
              size: "xs",
              variant: "border",
              startIcon: { icon: Git_fork },
              href: base + "/scripts/add?template=" + script.path
            },
            {},
            {
              default: () => {
                return `Fork`;
              }
            }
          )}</div>` : ``}`}`}` : ``}</span> ${validate_component(DropdownV2, "Dropdown").$$render(
            $$result,
            {
              items: () => {
                let owner = isOwner(script.path, $userStore, $workspaceStore);
                if (script.draft_only) {
                  return [
                    {
                      displayName: "View code",
                      icon: Code,
                      action: () => {
                        showCode(script.path, script.summary);
                      }
                    },
                    {
                      displayName: "Delete",
                      icon: Trash,
                      action: (event) => {
                        if (event?.shiftKey) {
                          deleteScript(script.path);
                        } else {
                          deleteConfirmedCallback = () => {
                            deleteScript(script.path);
                          };
                        }
                      },
                      type: dlt,
                      disabled: !script.canWrite
                    }
                  ];
                }
                return [
                  {
                    displayName: "View code",
                    icon: Code,
                    action: () => {
                      showCode(script.path, script.summary);
                    }
                  },
                  {
                    displayName: "Duplicate/Fork",
                    icon: Git_fork,
                    href: `${base}/scripts/add?template=${script.path}`,
                    hide: $userStore?.operator
                  },
                  {
                    displayName: "Move/Rename",
                    icon: File_up,
                    action: () => {
                      moveDrawer.openDrawer(script.path, script.summary, "script");
                    },
                    disabled: !owner || script.archived,
                    hide: $userStore?.operator
                  },
                  ...isDeployable("script", script.path, deployUiSettings) ? [
                    {
                      displayName: "Deploy to staging/prod",
                      icon: File_up,
                      action: () => {
                        deploymentDrawer.openDrawer(script.path, "script");
                      },
                      disabled: script.archived,
                      hide: $userStore?.operator
                    }
                  ] : [],
                  {
                    displayName: "View runs",
                    icon: List,
                    href: `${base}/runs/${script.path}`
                  },
                  {
                    displayName: "Versions",
                    icon: History,
                    action: () => {
                      versionsDrawerOpen = true;
                    }
                  },
                  {
                    displayName: "Audit logs",
                    icon: Eye,
                    href: `${base}/audit_logs?resource=${script.path}`,
                    hide: $userStore?.operator
                  },
                  {
                    displayName: "Schedule",
                    icon: Calendar,
                    action: () => {
                      scheduleEditor.openNew(false, script.path);
                    },
                    disabled: script.archived,
                    hide: $userStore?.operator
                  },
                  {
                    displayName: owner ? "Share" : "See Permissions",
                    icon: Share,
                    action: () => {
                      shareModal.openDrawer && shareModal.openDrawer(script.path, "script");
                    },
                    disabled: script.archived,
                    hide: $userStore?.operator
                  },
                  {
                    displayName: "Copy path",
                    icon: Copy,
                    action: () => {
                      copyToClipboard(script.path);
                    }
                  },
                  {
                    displayName: script.archived ? "Unarchive" : "Archive",
                    icon: Archive,
                    action: () => {
                      script.archived ? script.path && unarchiveScript(script.path) : script.path && archiveScript(script.path);
                    },
                    type: "delete",
                    disabled: !owner,
                    hide: $userStore?.operator
                  },
                  ...script.has_draft ? [
                    {
                      displayName: "Delete Draft",
                      icon: Trash,
                      action: async () => {
                        await DraftService.deleteDraft({
                          workspace: $workspaceStore ?? "",
                          path: script.path,
                          kind: "script"
                        });
                        dispatch("change");
                      },
                      type: DELETE,
                      disabled: !owner,
                      hide: $userStore?.operator
                    }
                  ] : [],
                  ...$userStore?.is_admin || $userStore?.is_super_admin ? [
                    {
                      displayName: "Delete",
                      icon: Trash,
                      action: (event) => {
                        if (event?.shiftKey) {
                          deleteScript(script.path);
                        } else {
                          deleteConfirmedCallback = () => {
                            deleteScript(script.path);
                          };
                        }
                      },
                      type: dlt,
                      disabled: !script.canWrite,
                      hide: $userStore?.operator
                    }
                  ] : []
                ];
              }
            },
            {},
            {}
          )} `;
        },
        badges: () => {
          return `${script.lock_error_logs ? `${validate_component(Badge, "Badge").$$render(
            $$result,
            {
              color: "red",
              baseClass: "border border-red-200"
            },
            {},
            {
              default: () => {
                return `Deployment failed`;
              }
            }
          )}` : ``} ${script.archived ? `${validate_component(Badge, "Badge").$$render($$result, { color: "red", baseClass: "border" }, {}, {
            default: () => {
              return `archived`;
            }
          })}` : ``} ${script.no_main_func ? `${validate_component(NoMainFuncBadge, "NoMainFuncBadge").$$render($$result, {}, {}, {})}` : ``} ${validate_component(SharedBadge, "SharedBadge").$$render(
            $$result,
            {
              canWrite: script.canWrite,
              extraPerms: script.extra_perms
            },
            {},
            {}
          )} ${validate_component(DraftBadge, "DraftBadge").$$render(
            $$result,
            {
              has_draft: script.has_draft,
              draft_only: script.draft_only
            },
            {},
            {}
          )} <div class="w-8 center-center">${validate_component(LanguageIcon, "LanguageIcon").$$render(
            $$result,
            {
              lang: script.language,
              width: 12,
              height: 12
            },
            {},
            {}
          )}</div>`;
        }
      }
    )} ${script ? `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "1200px", open: versionsDrawerOpen },
      {
        open: ($$value) => {
          versionsDrawerOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Versions History" }, {}, {
            default: () => {
              return `${validate_component(ScriptVersionHistory, "ScriptVersionHistory").$$render(
                $$result,
                {
                  scriptPath: script.path,
                  openDetails: true
                },
                {},
                {}
              )}`;
            }
          })}`;
        }
      }
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_userStore();
  return $$rendered;
});
const Item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  let { item } = $$props;
  let { depth = 0 } = $$props;
  createEventDispatcher();
  let deleteConfirmedCallback = void 0;
  let shareModal;
  let moveDrawer;
  let deploymentDrawer;
  let menuOpen = false;
  let { showCode } = $$props;
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
  if ($$props.item === void 0 && $$bindings.item && item !== void 0) $$bindings.item(item);
  if ($$props.depth === void 0 && $$bindings.depth && depth !== void 0) $$bindings.depth(depth);
  if ($$props.showCode === void 0 && $$bindings.showCode && showCode !== void 0) $$bindings.showCode(showCode);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${item.type == "script" ? `${validate_component(ScriptRow, "ScriptRow").$$render(
      $$result,
      {
        starred: item.starred ?? false,
        marked: item.marked,
        script: item,
        errorHandlerMuted: item.ws_error_handler_muted === void 0 || item.ws_error_handler_muted === null ? false : item.ws_error_handler_muted,
        shareModal,
        moveDrawer,
        deploymentDrawer,
        depth,
        showCode,
        deployUiSettings,
        deleteConfirmedCallback,
        menuOpen
      },
      {
        deleteConfirmedCallback: ($$value) => {
          deleteConfirmedCallback = $$value;
          $$settled = false;
        },
        menuOpen: ($$value) => {
          menuOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${item.type == "flow" ? `${validate_component(FlowRow, "FlowRow").$$render(
      $$result,
      {
        starred: item.starred ?? false,
        marked: item.marked,
        flow: item,
        errorHandlerMuted: item.ws_error_handler_muted === void 0 || item.ws_error_handler_muted === null ? false : item.ws_error_handler_muted,
        shareModal,
        moveDrawer,
        deploymentDrawer,
        depth,
        deployUiSettings,
        deleteConfirmedCallback,
        menuOpen
      },
      {
        deleteConfirmedCallback: ($$value) => {
          deleteConfirmedCallback = $$value;
          $$settled = false;
        },
        menuOpen: ($$value) => {
          menuOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${item.type == "app" ? `${validate_component(AppRow, "AppRow").$$render(
      $$result,
      {
        starred: item.starred ?? false,
        marked: item.marked,
        app: item,
        moveDrawer,
        shareModal,
        deploymentDrawer,
        depth,
        deployUiSettings,
        deleteConfirmedCallback,
        menuOpen
      },
      {
        deleteConfirmedCallback: ($$value) => {
          deleteConfirmedCallback = $$value;
          $$settled = false;
        },
        menuOpen: ($$value) => {
          menuOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${item.type == "raw_app" ? `${validate_component(RawAppRow, "RawAppRow").$$render(
      $$result,
      {
        starred: item.starred ?? false,
        marked: item.marked,
        app: item,
        moveDrawer,
        shareModal,
        deploymentDrawer,
        depth,
        deployUiSettings,
        deleteConfirmedCallback,
        menuOpen
      },
      {
        deleteConfirmedCallback: ($$value) => {
          deleteConfirmedCallback = $$value;
          $$settled = false;
        },
        menuOpen: ($$value) => {
          menuOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}`}`}`} ${menuOpen ? `${validate_component(ConfirmationModal, "ConfirmationModal").$$render(
      $$result,
      {
        open: Boolean(deleteConfirmedCallback),
        title: "Remove",
        confirmationText: "Remove"
      },
      {},
      {
        default: () => {
          return `<div class="flex flex-col w-full space-y-4"><span data-svelte-h="svelte-10fgfi2">Are you sure you want to remove it?</span> ${validate_component(Alert, "Alert").$$render(
            $$result,
            {
              type: "info",
              title: "Bypass confirmation"
            },
            {},
            {
              default: () => {
                return `<div>You can press
					<span class="inline-flex border rounded-md p-1 bg-blue-100 border-blue-200 dark:bg-blue-800 dark:border-blue-900 text-xs">${validate_component(Arrow_big_up, "ArrowBigUp").$$render($$result, { size: 18 }, {}, {})}</span>
					while removing to bypass confirmation.</div>`;
              }
            }
          )}</div>`;
        }
      }
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
    )} ${validate_component(MoveDrawer, "MoveDrawer").$$render(
      $$result,
      { this: moveDrawer },
      {
        this: ($$value) => {
          moveDrawer = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_enterpriseLicense();
  return $$rendered;
});
const TreeView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  let { collapseAll } = $$props;
  let { depth = 0 } = $$props;
  let { showCode } = $$props;
  let { isSearching = false } = $$props;
  const isFolder = (i) => i && "folderName" in i;
  const isUser = (i) => i && "username" in i;
  let opened = true;
  function toggleOpened(collapseAll2) {
    opened = !collapseAll2;
  }
  let showMax = 15;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0) $$bindings.item(item);
  if ($$props.collapseAll === void 0 && $$bindings.collapseAll && collapseAll !== void 0) $$bindings.collapseAll(collapseAll);
  if ($$props.depth === void 0 && $$bindings.depth && depth !== void 0) $$bindings.depth(depth);
  if ($$props.showCode === void 0 && $$bindings.showCode && showCode !== void 0) $$bindings.showCode(showCode);
  if ($$props.isSearching === void 0 && $$bindings.isSearching && isSearching !== void 0) $$bindings.isSearching(isSearching);
  {
    toggleOpened(collapseAll);
  }
  return `  ${isFolder(item) ? `<div>  <div class="px-4 py-2 border-b w-full flex flex-row items-center justify-between cursor-pointer"><div${add_attribute("class", twMerge("flex flex-row items-center gap-4 text-sm font-semibold"), 0)}${add_attribute("style", depth > 0 ? `padding-left: ${depth * 16}px;` : "", 0)}><div class="rounded-md p-1 flex justify-center items-center border bg-gray-50 border-gray-200 dark:bg-transparent dark:border-gray-900">${depth === 0 ? `${validate_component(Folder, "Folder").$$render($$result, { size: 20, color: "#aaa" }, {}, {})}` : `${validate_component(Folder_tree, "FolderTree").$$render($$result, { size: 20, color: "#aaa" }, {}, {})}`}</div> <div><span class="whitespace-nowrap">${depth === 0 ? `f/` : ``}${escape(item.folderName)}</span> <div class="text-2xs font-normal text-secondary whitespace-nowrap">(${escape(pluralize(item.items.length, " item"))})</div></div></div> <button class="w-full flex flex-row-reverse">${opened ? `${validate_component(Chevron_up, "ChevronUp").$$render($$result, { size: 20 }, {}, {})}` : `${validate_component(Chevron_down, "ChevronDown").$$render($$result, { size: 20 }, {}, {})}`}</button></div> ${opened || isSearching ? `<div>${each(item.items.slice(0, showMax), (subItem) => {
    return `${validate_component(TreeView, "svelte:self").$$render(
      $$result,
      {
        isSearching,
        collapseAll,
        item: subItem,
        showCode,
        depth: depth + 1
      },
      {},
      {}
    )}`;
  })} ${showMax < item.items.length ? `  <div class="text-center text-sm text-secondary cursor-pointer hover:text-primary">Show more (${escape(showMax)}/${escape(item.items.length)})</div>` : ``}</div>` : ``}</div>` : `${isUser(item) ? `<div>  <div class="px-4 py-2 border-b w-full flex flex-row items-center justify-between cursor-pointer"><div${add_attribute("class", twMerge("flex flex-row items-center gap-4 text-sm font-semibold"), 0)}${add_attribute("style", depth > 0 ? `padding-left: ${depth * 16}px;` : "", 0)}><div class="rounded-md p-1 flex justify-center items-center border bg-gray-50 border-gray-200 dark:bg-transparent dark:border-gray-900">${validate_component(User, "User").$$render($$result, { size: 20, color: "#aaa" }, {}, {})}</div> <div><span class="whitespace-nowrap">u/${escape(item.username)}</span> <div class="text-2xs font-normal text-secondary whitespace-nowrap">(${escape(pluralize(item.items.length, " item"))})</div></div></div> <div class="w-full flex flex-row-reverse">${opened ? `${validate_component(Chevron_up, "ChevronUp").$$render($$result, { size: 20 }, {}, {})}` : `${validate_component(Chevron_down, "ChevronDown").$$render($$result, { size: 20 }, {}, {})}`}</div></div> ${opened || isSearching ? `<div>${each(item.items.slice(0, showMax), (subItem) => {
    return `${validate_component(TreeView, "svelte:self").$$render(
      $$result,
      {
        collapseAll,
        item: subItem,
        showCode,
        depth: depth + 1
      },
      {},
      {}
    )}`;
  })} ${showMax < item.items.length ? `  <div class="text-center text-sm text-secondary cursor-pointer py-2 hover:text-primary">Show more (${escape(showMax)}/${escape(item.items.length)})</div>` : ``}</div>` : ``}</div>` : `${validate_component(Item, "Item").$$render($$result, { item, showCode, depth }, {}, {})}`}`}`;
});
function insertItemInFolder(root, item, path) {
  let currentLevel = root;
  path.forEach((folderName, index) => {
    if (index === path.length - 1) {
      currentLevel.push(item);
    } else {
      let folder = currentLevel.find((f) => "folderName" in f && f.folderName === folderName);
      if (!folder) {
        folder = { folderName, items: [] };
        currentLevel.push(folder);
      }
      currentLevel = folder.items;
    }
  });
}
function groupItems(items) {
  if (!items) {
    return [];
  }
  const root = [];
  items.forEach((item) => {
    const pathSplit = item.path.split("/");
    if (pathSplit[0] === "u") {
      const username = pathSplit[1];
      let userItem = root.find((f) => "username" in f && f.username === username);
      if (!userItem) {
        userItem = { username, items: [] };
        root.push(userItem);
      }
      if (pathSplit.length > 2) {
        insertItemInFolder(userItem.items, item, pathSplit.slice(2));
      } else {
        userItem.items.push(item);
      }
    } else if (pathSplit[0] === "f") {
      insertItemInFolder(root, item, pathSplit.slice(1));
    }
  });
  root.sort((a, b) => {
    if ("username" in a && "folderName" in b) {
      return -1;
    }
    if ("folderName" in a && "username" in b) {
      return 1;
    }
    return (a["username"] ?? a["folderName"]).localeCompare(b["username"] ?? b["folderName"]);
  });
  sortGroup(root);
  return root;
}
function sortGroup(group) {
  group.forEach((item) => {
    if ("items" in item) {
      item.items.sort((a, b) => {
        if ("folderName" in a && "folderName" in b) {
          return a.folderName.localeCompare(b.folderName);
        }
        if ("folderName" in a) {
          return -1;
        }
        if ("folderName" in b) {
          return 1;
        }
        if (isItemType(a) && isItemType(b)) {
          if (a.starred && !b.starred) return -1;
          if (!a.starred && b.starred) return 1;
          return getModifiedAt(b) - getModifiedAt(a);
        }
        return 0;
      });
      sortGroup(item.items);
    }
  });
}
function isItemType(item) {
  return "type" in item;
}
function getModifiedAt(item) {
  if (item.type === "app") {
    return new Date(item.edited_at).getTime() || 0;
  } else if (item.type === "script") {
    return new Date(item.created_at).getTime() || 0;
  } else if (item.type === "flow") {
    return new Date(item.edited_at).getTime() || 0;
  } else if (item.type === "raw_app") {
    return new Date(item.edited_at).getTime() || 0;
  }
  return 0;
}
const TreeViewRoot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let groupedItems;
  let { collapseAll } = $$props;
  let { showCode } = $$props;
  let { nbDisplayed } = $$props;
  let { items } = $$props;
  let { isSearching = false } = $$props;
  let treeLoading = false;
  function grpItems(items2) {
    treeLoading = true;
    let r;
    try {
      r = groupItems(items2);
    } finally {
      treeLoading = false;
    }
    return r;
  }
  if ($$props.collapseAll === void 0 && $$bindings.collapseAll && collapseAll !== void 0) $$bindings.collapseAll(collapseAll);
  if ($$props.showCode === void 0 && $$bindings.showCode && showCode !== void 0) $$bindings.showCode(showCode);
  if ($$props.nbDisplayed === void 0 && $$bindings.nbDisplayed && nbDisplayed !== void 0) $$bindings.nbDisplayed(nbDisplayed);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  if ($$props.isSearching === void 0 && $$bindings.isSearching && isSearching !== void 0) $$bindings.isSearching(isSearching);
  groupedItems = grpItems(items);
  return `${treeLoading ? `<div class="flex flex-row items-center justify-center" data-svelte-h="svelte-vq6r9z"><div class="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-gray-100"></div></div>` : `${groupedItems.length === 0 ? `<div class="flex flex-row items-center justify-center" data-svelte-h="svelte-5f3y7x"><div class="text-gray-500 dark:text-gray-400">No items</div></div>` : `<div class="border rounded-md">${each(groupedItems.slice(0, nbDisplayed), (item) => {
    return `${item ? `${validate_component(TreeView, "TreeView").$$render($$result, { isSearching, collapseAll, item, showCode }, {}, {})}` : ``}`;
  })}</div> ${groupedItems.length > 15 && nbDisplayed < groupedItems.length ? `<span class="text-xs">${escape(nbDisplayed)} root nodes out of ${escape(groupedItems.length)} <button class="ml-4" data-svelte-h="svelte-az4ajw">load 30 more</button></span>` : ``}`}`}`;
});
const TREE_VIEW_SETTING_NAME = "treeView";
const FILTER_USER_FOLDER_SETTING_NAME = "filterUserFolders";
const INCLUDE_WITHOUT_MAIN_SETTING_NAME = "includeWithoutMain";
function resetScroll() {
  const element = document.getElementsByTagName("svelte-virtual-list-viewport");
  const firstElement = element.item(0);
  if (firstElement) {
    firstElement.scrollTop = 0;
  }
}
const ItemsList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let owners;
  let preFilteredItems;
  let items;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $userStore, $$unsubscribe_userStore;
  let $page, $$unsubscribe_page;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { filter = "" } = $$props;
  let { subtab = "script" } = $$props;
  let scripts;
  let flows;
  let apps;
  let raw_apps;
  let filteredItems = [];
  let itemKind = $page.url.searchParams.get("kind") ?? "all";
  let loading = true;
  let nbDisplayed = 15;
  async function loadScripts(includeWithoutMain2) {
    const loadedScripts = await ScriptService.listScripts({
      workspace: $workspaceStore,
      showArchived: archived ? true : void 0,
      includeWithoutMain: includeWithoutMain2 ? true : void 0,
      includeDraftOnly: true
    });
    scripts = loadedScripts.map((script2) => {
      return {
        canWrite: canWrite(script2.path, script2.extra_perms, $userStore) && !$userStore?.operator,
        ...script2
      };
    });
    loading = false;
  }
  async function loadFlows() {
    flows = (await FlowService.listFlows({
      workspace: $workspaceStore,
      showArchived: archived ? true : void 0,
      includeDraftOnly: true
    })).map((x) => {
      return {
        canWrite: canWrite(x.path, x.extra_perms, $userStore) && x.workspace_id == $workspaceStore && !$userStore?.operator,
        ...x
      };
    });
    loading = false;
  }
  async function loadApps() {
    apps = (await AppService.listApps({
      workspace: $workspaceStore,
      includeDraftOnly: true
    })).map((app) => {
      return {
        canWrite: canWrite(app.path, app.extra_perms, $userStore) && app.workspace_id == $workspaceStore && !$userStore?.operator,
        ...app
      };
    });
    loading = false;
  }
  async function loadRawApps() {
    raw_apps = (await RawAppService.listRawApps({ workspace: $workspaceStore })).map((app) => {
      return {
        canWrite: canWrite(app.path, app.extra_perms, $userStore) && app.workspace_id == $workspaceStore && !$userStore?.operator,
        ...app
      };
    });
    loading = false;
  }
  let combinedItems = void 0;
  function filterItemsPathsBaseOnUserFilters(item, filterUserFolders2) {
    if ($workspaceStore == "admins") return true;
    if (filterUserFolders2) {
      return !item.path.startsWith("u/") || item.path.startsWith("u/" + $userStore?.username + "/");
    } else {
      return true;
    }
  }
  let ownerFilter = void 0;
  const cmp = new Intl.Collator("en").compare;
  const opts = {
    sort: (info, haystack, needle) => {
      let {
        idx,
        chars,
        terms,
        interLft2,
        interLft1,
        //	interRgt2,
        //	interRgt1,
        start,
        intraIns,
        interIns
      } = info;
      const sortResult = idx.map((v, i) => i).sort((ia, ib) => (
        // most contig chars matched
        chars[ib] - chars[ia] || // least char intra-fuzz (most contiguous)
        intraIns[ia] - intraIns[ib] || // most prefix bounds, boosted by full term matches
        terms[ib] + interLft2[ib] + 0.5 * interLft1[ib] - (terms[ia] + interLft2[ia] + 0.5 * interLft1[ia]) || // highest density of match (least span)
        //	span[ia] - span[ib] ||
        // highest density of match (least term inter-fuzz)
        interIns[ia] - interIns[ib] || // earliest start of match
        start[ia] - start[ib] || // alphabetic
        cmp(haystack[idx[ia]], haystack[idx[ib]]) + (preFilteredItems?.[idx[ib]]?.starred ? 100 : 0) - (preFilteredItems?.[idx[ia]]?.starred ? 100 : 0)
      ));
      return sortResult;
    }
  };
  let archived = false;
  let treeView = getLocalSetting(TREE_VIEW_SETTING_NAME) == "true";
  let filterUserFolders = getLocalSetting(FILTER_USER_FOLDER_SETTING_NAME) == "true";
  let includeWithoutMain = getLocalSetting(INCLUDE_WITHOUT_MAIN_SETTING_NAME) ? getLocalSetting(INCLUDE_WITHOUT_MAIN_SETTING_NAME) == "true" : true;
  getContext("openSearchWithPrefilledText");
  let viewCodeDrawer;
  let viewCodeTitle;
  let script;
  async function showCode(path, summary) {
    viewCodeTitle = summary || path;
    await viewCodeDrawer.openDrawer();
    script = await ScriptService.getScriptByPath({ workspace: $workspaceStore, path });
  }
  let collapseAll = true;
  if ($$props.filter === void 0 && $$bindings.filter && filter !== void 0) $$bindings.filter(filter);
  if ($$props.subtab === void 0 && $$bindings.subtab && subtab !== void 0) $$bindings.subtab(subtab);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    owners = Array.from(new Set(filteredItems?.map((x) => x.path.split("/").slice(0, 2).join("/")) ?? [])).sort();
    {
      {
        if ($userStore && $workspaceStore) {
          loadScripts(includeWithoutMain);
          loadFlows();
          if (!archived) {
            loadApps();
            loadRawApps();
          } else {
            apps = [];
            raw_apps = [];
          }
        }
      }
    }
    combinedItems = flows == void 0 || scripts == void 0 || apps == void 0 || raw_apps == void 0 ? void 0 : [
      ...flows.map((x) => ({
        ...x,
        type: "flow",
        time: new Date(x.edited_at).getTime()
      })),
      ...scripts.map((x) => ({
        ...x,
        type: "script",
        time: new Date(x.created_at).getTime()
      })),
      ...apps.map((x) => ({
        ...x,
        type: "app",
        time: new Date(x.edited_at).getTime()
      })),
      ...raw_apps.map((x) => ({
        ...x,
        type: "raw_app",
        time: new Date(x.edited_at).getTime()
      }))
    ].sort((a, b) => a.starred != b.starred ? a.starred ? -1 : 1 : a.time - b.time > 0 ? -1 : 1);
    {
      if ($workspaceStore) {
        ownerFilter = void 0;
      }
    }
    preFilteredItems = ownerFilter != void 0 ? combinedItems?.filter((x) => x.path.startsWith(ownerFilter + "/") && (x.type == itemKind || itemKind == "all") && filterItemsPathsBaseOnUserFilters(x, filterUserFolders)) : combinedItems?.filter((x) => (x.type == itemKind || itemKind == "all") && filterItemsPathsBaseOnUserFilters(x, filterUserFolders));
    items = filter !== "" ? filteredItems : preFilteredItems;
    items && resetScroll();
    {
      storeLocalSetting(TREE_VIEW_SETTING_NAME, treeView ? "true" : void 0);
    }
    {
      storeLocalSetting(FILTER_USER_FOLDER_SETTING_NAME, filterUserFolders ? "true" : void 0);
    }
    {
      storeLocalSetting(INCLUDE_WITHOUT_MAIN_SETTING_NAME, includeWithoutMain ? "true" : void 0);
    }
    $$rendered = `${validate_component(SearchItems, "SearchItems").$$render(
      $$result,
      {
        filter,
        items: preFilteredItems,
        f: (x) => x.summary ? x.summary + " (" + x.path + ")" : x.path,
        opts,
        filteredItems
      },
      {
        filteredItems: ($$value) => {
          filteredItems = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { this: viewCodeDrawer },
      {
        this: ($$value) => {
          viewCodeDrawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: viewCodeTitle }, {}, {
            default: () => {
              return `${script ? `${validate_component(HighlightCode, "HighlightCode").$$render(
                $$result,
                {
                  language: script?.language,
                  code: script?.content
                },
                {},
                {}
              )}` : `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[40]] }, {}, {})}`}`;
            }
          })}`;
        }
      }
    )} ${validate_component(CenteredPage, "CenteredPage").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="flex flex-wrap gap-2 items-center justify-between w-full mt-2"><div class="flex justify-start">${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
          $$result,
          { class: "h-10", selected: itemKind },
          {
            selected: ($$value) => {
              itemKind = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `${validate_component(ToggleButton, "ToggleButton").$$render(
                $$result,
                {
                  value: "all",
                  label: "All",
                  class: "text-sm px-4 py-2"
                },
                {},
                {}
              )} ${validate_component(ToggleButton, "ToggleButton").$$render(
                $$result,
                {
                  value: "script",
                  icon: Code_2,
                  label: "Scripts",
                  class: "text-sm px-4 py-2"
                },
                {},
                {}
              )} ${`${validate_component(ToggleButton, "ToggleButton").$$render(
                $$result,
                {
                  value: "flow",
                  label: "Flows",
                  icon: FlowIcon,
                  class: "text-sm px-4 py-2",
                  selectedColor: "#14b8a6"
                },
                {},
                {}
              )}`} ${validate_component(ToggleButton, "ToggleButton").$$render(
                $$result,
                {
                  value: "app",
                  label: "Apps",
                  icon: Layout_dashboard,
                  class: "text-sm px-4 py-2",
                  selectedColor: "#fb923c"
                },
                {},
                {}
              )}`;
            }
          }
        )}</div> <div class="relative text-tertiary grow min-w-[100px]"> <input autofocus${add_attribute("placeholder", HOME_SEARCH_PLACEHOLDER, 0)} class="bg-surface !h-10 !px-4 !pr-10 !rounded-lg text-sm focus:outline-none"${add_attribute("value", filter, 0)}> <button type="submit" class="absolute right-0 top-0 mt-3 mr-4" data-svelte-h="svelte-1lqooep"><svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px"><path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path></svg></button></div> ${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "border",
            size: "sm",
            spacingSize: "lg",
            wrapperClasses: "h-10",
            color: "light",
            endIcon: { icon: Search_code }
          },
          {},
          {
            default: () => {
              return `Content`;
            }
          }
        )}</div> <div class="relative">${validate_component(ListFilters, "ListFilters").$$render(
          $$result,
          {
            syncQuery: true,
            filters: owners,
            bottomMargin: false,
            selectedFilter: ownerFilter
          },
          {
            selectedFilter: ($$value) => {
              ownerFilter = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${filteredItems?.length == 0 ? `<div class="mt-10"></div>` : ``} ${!loading ? `<div class="flex w-full flex-row-reverse gap-2 mt-4 mb-1 items-center h-6">${validate_component(Popup, "Popup").$$render(
          $$result,
          {
            floatingConfig: { placement: "bottom-end" },
            containerClasses: "border rounded-lg shadow-lg p-4 bg-surface"
          },
          {},
          {
            button: () => {
              return `${validate_component(Button, "Button").$$render(
                $$result,
                {
                  startIcon: { icon: Sliders_horizontal },
                  nonCaptureEvent: true,
                  iconOnly: true,
                  size: "xs",
                  color: "light",
                  variant: "border",
                  spacingSize: "xs2"
                },
                {},
                {}
              )} `;
            },
            default: () => {
              return `<div><span class="text-sm font-semibold" data-svelte-h="svelte-1cnna1n">Filters</span> <div class="flex flex-col gap-2 mt-2">${validate_component(Toggle, "Toggle").$$render(
                $$result,
                {
                  size: "xs",
                  options: { right: "Only archived" },
                  checked: archived
                },
                {
                  checked: ($$value) => {
                    archived = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${$userStore && !$userStore.operator ? `${validate_component(Toggle, "Toggle").$$render(
                $$result,
                {
                  size: "xs",
                  options: { right: "Include without main function" },
                  checked: includeWithoutMain
                },
                {
                  checked: ($$value) => {
                    includeWithoutMain = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}` : ``}</div></div>`;
            }
          }
        )} ${$userStore?.is_super_admin && $userStore.username.includes("@") ? `${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            size: "xs",
            options: { right: "Only f/*" },
            checked: filterUserFolders
          },
          {
            checked: ($$value) => {
              filterUserFolders = $$value;
              $$settled = false;
            }
          },
          {}
        )}` : `${$userStore?.is_admin || $userStore?.is_super_admin ? `${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            size: "xs",
            options: {
              right: `Only u/${$userStore.username} and f/*`
            },
            checked: filterUserFolders
          },
          {
            checked: ($$value) => {
              filterUserFolders = $$value;
              $$settled = false;
            }
          },
          {}
        )}` : ``}`} ${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            size: "xs",
            options: { right: "Tree view" },
            checked: treeView
          },
          {
            checked: ($$value) => {
              treeView = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${treeView ? `${validate_component(Button, "Button").$$render(
          $$result,
          {
            btnClasses: "py-0 h-6",
            size: "xs",
            variant: "border",
            color: "light",
            startIcon: {
              icon: Unfold_vertical
            }
          },
          {},
          {
            default: () => {
              return `${`Expand all`}`;
            }
          }
        )}` : ``}</div>` : ``}</div> <div>${filteredItems == void 0 ? `<div class="mt-4"></div> ${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[2], 1] }, {}, {})} ${each(new Array(6), (_) => {
          return `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[4], 0.5] }, {}, {})}`;
        })}` : `${filteredItems.length === 0 ? `${validate_component(NoItemFound, "NoItemFound").$$render($$result, {}, {}, {})}` : `${treeView ? `${validate_component(TreeViewRoot, "TreeViewRoot").$$render(
          $$result,
          {
            items,
            nbDisplayed,
            collapseAll,
            isSearching: filter !== "",
            showCode
          },
          {},
          {}
        )}` : `<div class="border rounded-md">${each((items ?? []).slice(0, nbDisplayed), (item) => {
          return `${validate_component(Item, "Item").$$render($$result, { item, showCode }, {}, {})}`;
        })}</div> ${items && items?.length > 15 && nbDisplayed < items.length ? `<span class="text-xs">${escape(nbDisplayed)} items out of ${escape(items.length)} <button class="ml-4" data-svelte-h="svelte-az4ajw">load 30 more</button></span>` : ``}`}`}`}</div>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_userStore();
  $$unsubscribe_page();
  return $$rendered;
});
const CreateActionsApp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_workspaceStore;
  let $$unsubscribe_importStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  $$unsubscribe_importStore = subscribe(importStore, (value) => value);
  let drawer = void 0;
  let rawAppDrawer = void 0;
  let pendingRaw = "";
  let summary = "";
  let path = "";
  let pathError = "";
  let importType = "yaml";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = ` <div class="flex flex-row gap-2">${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "sm",
        spacingSize: "xl",
        startIcon: { icon: Plus },
        href: base + "/apps/add?nodraft=true",
        color: "marine",
        dropdownItems: [
          {
            label: "Import low-code app from YAML",
            onClick: () => {
              drawer?.toggleDrawer?.();
              importType = "yaml";
            }
          },
          {
            label: "Import low-code app from JSON",
            onClick: () => {
              drawer?.toggleDrawer?.();
              importType = "json";
            }
          },
          {
            label: "Import app in React/Vue/Svelte",
            onClick: () => rawAppDrawer?.toggleDrawer?.()
          }
        ]
      },
      {},
      {
        default: () => {
          return `<div class="flex flex-row">App ${validate_component(Layout_dashboard, "LayoutDashboard").$$render($$result, { class: "ml-1.5", size: 18 }, {}, {})}</div>`;
        }
      }
    )}</div>  ${validate_component(Drawer, "Drawer").$$render(
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
          return `${validate_component(DrawerContent, "DrawerContent").$$render(
            $$result,
            {
              title: "Import low-code app from " + (importType === "yaml" ? "YAML" : "JSON")
            },
            {},
            {
              actions: () => {
                return `${validate_component(Button, "Button").$$render($$result, { size: "sm" }, {}, {
                  default: () => {
                    return `Import`;
                  }
                })} `;
              },
              default: () => {
                return `${validate_component(SimpleEditor, "SimpleEditor").$$render(
                  $$result,
                  {
                    lang: importType,
                    class: "h-full",
                    fixedOverflowWidgets: false,
                    code: pendingRaw
                  },
                  {
                    code: ($$value) => {
                      pendingRaw = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            }
          )}`;
        }
      }
    )}  ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "800px", this: rawAppDrawer },
      {
        this: ($$value) => {
          rawAppDrawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Import app in React/Vue/Svelte" }, {}, {
            actions: () => {
              return `${validate_component(Button, "Button").$$render($$result, { disabled: pathError != "", size: "sm" }, {}, {
                default: () => {
                  return `Import`;
                }
              })} `;
            },
            default: () => {
              return `${validate_component(Path, "Path").$$render(
                $$result,
                {
                  initialPath: "",
                  namePlaceholder: "app",
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
              )} <h2 class="border-b pb-1 mt-10 mb-4" data-svelte-h="svelte-1v6nki9">Summary</h2> <input type="text" placeholder="Short summary to be displayed when listed"${add_attribute("value", summary, 0)}> <h2 class="border-b pb-1 mt-10 mb-4">IIFE JS code ${validate_component(Tooltip, "Tooltip").$$render(
                $$result,
                {
                  documentationLink: "https://www.windmill.dev/docs/react_vue_svelte_apps/react"
                },
                {},
                {
                  default: () => {
                    return `Bundle that contains an IIFE code that will mount itself to a &quot;root&quot; element. Any framework
				or vanilla JS can be used to create an app and templates are provided for the major
				frameworks: React/Vue/Svelte. In those frontend apps, it is possible to inline scripts
				directly to be executed by windmill backend which makes it a convenient way of building apps
				with both frontend and backend all-in-one.`;
                  }
                }
              )}</h2> ${validate_component(FileInput, "FileInput").$$render(
                $$result,
                {
                  accept: ".js",
                  multiple: false,
                  convertTo: "text",
                  iconSize: 24,
                  class: "text-sm py-4"
                },
                {},
                {}
              )}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_importStore();
  return $$rendered;
});
const PickHubApp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let prefilteredItems;
  let apps;
  let { filter = "" } = $$props;
  let { syncQuery = false } = $$props;
  let filteredItems = [];
  let appFilter = void 0;
  createEventDispatcher();
  if ($$props.filter === void 0 && $$bindings.filter && filter !== void 0) $$bindings.filter(filter);
  if ($$props.syncQuery === void 0 && $$bindings.syncQuery && syncQuery !== void 0) $$bindings.syncQuery(syncQuery);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    prefilteredItems = appFilter ? [].filter((i) => i.apps.includes(appFilter)) : [];
    apps = Array.from(new Set(filteredItems?.flatMap((x) => x.apps) ?? [])).sort();
    $$rendered = `${validate_component(SearchItems, "SearchItems").$$render(
      $$result,
      {
        filter,
        items: prefilteredItems,
        f: (x) => x.summary + " (" + x.apps.join(", ") + ")",
        filteredItems
      },
      {
        filteredItems: ($$value) => {
          filteredItems = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="w-full flex mt-1 items-center gap-2">${slots.default ? slots.default({}) : ``} <input type="text" placeholder="Search Hub Apps" class="text-2xl grow"${add_attribute("value", filter, 0)}></div> ${validate_component(ListFilters, "ListFilters").$$render(
      $$result,
      {
        syncQuery,
        filters: apps,
        resourceType: true,
        selectedFilter: appFilter
      },
      {
        selectedFilter: ($$value) => {
          appFilter = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${`<div class="my-2"></div> ${each(Array(10).fill(0), (_) => {
      return `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[4], 0.5] }, {}, {})}`;
    })}`}`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $hubBaseUrlStore, $$unsubscribe_hubBaseUrlStore;
  let $userStore, $$unsubscribe_userStore;
  let $$unsubscribe_page;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_hubBaseUrlStore = subscribe(hubBaseUrlStore, (value) => $hubBaseUrlStore = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let tab = window.location.hash == "#workspace" || window.location.hash == "#hub" ? window.location.hash?.replace("#", "") : "workspace";
  let subtab = "script";
  let filter = "";
  let flowViewer;
  let flowViewerFlow;
  let appViewer;
  let appViewerApp;
  let codeViewer;
  let codeViewerObj = void 0;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "900px", this: codeViewer },
      {
        this: ($$value) => {
          codeViewer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "" }, {}, {
            actions: () => {
              return `${validate_component(Button, "Button").$$render(
                $$result,
                {
                  href: $hubBaseUrlStore + "/scripts//0",
                  variant: "contained",
                  color: "light",
                  size: "xs",
                  target: "_blank",
                  disabled: codeViewerObj == void 0
                },
                {},
                {
                  default: () => {
                    return `<div class="flex gap-2 items-center">${validate_component(Globe_2, "Globe2").$$render($$result, { size: 18 }, {}, {})}
					View on the Hub</div>`;
                  }
                }
              )} ${validate_component(Button, "Button").$$render(
                $$result,
                {
                  href: base + "/scripts/add?hub=" + encodeURIComponent(""),
                  startIcon: { icon: Git_fork },
                  color: "dark",
                  size: "xs",
                  disabled: codeViewerObj == void 0
                },
                {},
                {
                  default: () => {
                    return `Fork`;
                  }
                }
              )} `;
            },
            default: () => {
              return `${`<div class="p-2">${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})}</div>`}`;
            }
          })}`;
        }
      }
    )} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "1200px", this: flowViewer },
      {
        this: ($$value) => {
          flowViewer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Hub flow" }, {}, {
            actions: () => {
              return `${validate_component(Button, "Button").$$render(
                $$result,
                {
                  href: $hubBaseUrlStore + "/flows/" + flowViewerFlow?.flow?.id,
                  variant: "contained",
                  color: "light",
                  size: "xs",
                  target: "_blank",
                  disabled: flowViewerFlow == void 0
                },
                {},
                {
                  default: () => {
                    return `<div class="flex gap-2 items-center">${validate_component(Globe_2, "Globe2").$$render($$result, { size: 18 }, {}, {})}
					View on the Hub</div>`;
                  }
                }
              )} ${validate_component(Button, "Button").$$render(
                $$result,
                {
                  href: base + "/flows/add?hub=" + flowViewerFlow?.flow?.id,
                  startIcon: { icon: Git_fork },
                  color: "dark",
                  size: "xs",
                  disabled: flowViewerFlow == void 0
                },
                {},
                {
                  default: () => {
                    return `Fork`;
                  }
                }
              )} `;
            },
            default: () => {
              return `${`<div class="p-2">${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})}</div>`}`;
            }
          })}`;
        }
      }
    )} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "1200px", this: appViewer },
      {
        this: ($$value) => {
          appViewer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Hub app" }, {}, {
            actions: () => {
              return `${validate_component(Button, "Button").$$render(
                $$result,
                {
                  href: $hubBaseUrlStore + "/apps/" + appViewerApp?.app?.id,
                  variant: "contained",
                  color: "light",
                  size: "xs",
                  target: "_blank",
                  disabled: appViewerApp == void 0
                },
                {},
                {
                  default: () => {
                    return `<div class="flex gap-2 items-center">${validate_component(Globe_2, "Globe2").$$render($$result, { size: 18 }, {}, {})}
					View on the Hub</div>`;
                  }
                }
              )} ${validate_component(Button, "Button").$$render(
                $$result,
                {
                  href: base + "/apps/add?hub=" + appViewerApp?.app?.id,
                  startIcon: { icon: Git_fork },
                  color: "dark",
                  disabled: appViewerApp == void 0,
                  size: "xs"
                },
                {},
                {
                  default: () => {
                    return `Fork`;
                  }
                }
              )} `;
            },
            default: () => {
              return `${``}`;
            }
          })}`;
        }
      }
    )} <div><div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-fit-content">${$workspaceStore == "admins" ? `<div class="my-4"></div> ${validate_component(Alert, "Alert").$$render($$result, { title: "Admins workspace" }, {}, {
      default: () => {
        return `The Admins workspace is for admins only and contains scripts whose purpose is to manage your
				Windmill instance, such as keeping resource types up to date.`;
      }
    })}` : ``} ${validate_component(PageHeader, "PageHeader").$$render($$result, { title: "Home" }, {}, {
      default: () => {
        return `<div class="flex flex-row gap-4 flex-wrap justify-end items-center">${!$userStore?.operator ? `<span class="text-sm text-secondary" data-svelte-h="svelte-syxb1a">Create a</span> ${validate_component(CreateActionsScript, "CreateActionsScript").$$render($$result, {}, {}, {})} ${`${validate_component(CreateActionsFlow, "CreateActionsFlow").$$render($$result, {}, {}, {})}`} ${`${validate_component(CreateActionsApp, "CreateActionsApp").$$render($$result, {}, {}, {})}`}` : ``}</div>`;
      }
    })} ${!$userStore?.operator ? `<div class="w-full overflow-auto scrollbar-hidden">${validate_component(Tabs, "Tabs").$$render(
      $$result,
      {
        values: ["hub", "workspace"],
        hashNavigation: true,
        selected: tab
      },
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
          })} ${`${validate_component(Tab, "Tab").$$render($$result, { size: "md", value: "hub" }, {}, {
            default: () => {
              return `<div class="flex gap-2 items-center my-1">${validate_component(Globe_2, "Globe2").$$render($$result, { size: 18 }, {}, {})}
								Hub</div>`;
            }
          })}`}`;
        }
      }
    )}</div>` : ``} <div class="my-2"></div> <div class="flex flex-col gap-y-16"><div class="flex flex-col">${tab == "hub" ? `${validate_component(Tabs, "Tabs").$$render(
      $$result,
      { selected: subtab },
      {
        selected: ($$value) => {
          subtab = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Tab, "Tab").$$render($$result, { size: "md", value: "script" }, {}, {
            default: () => {
              return `<div class="flex gap-2 items-center my-1" data-svelte-h="svelte-1w52l0z">Scripts</div>`;
            }
          })} ${validate_component(Tab, "Tab").$$render($$result, { size: "md", value: "flow" }, {}, {
            default: () => {
              return `<div class="flex gap-2 items-center my-1" data-svelte-h="svelte-r62iqq">Flows</div>`;
            }
          })} ${validate_component(Tab, "Tab").$$render($$result, { size: "md", value: "app" }, {}, {
            default: () => {
              return `<div class="flex gap-2 items-center my-1" data-svelte-h="svelte-vaby4x">Apps</div>`;
            }
          })}`;
        }
      }
    )} <div class="my-2"></div> ${subtab == "script" ? `${validate_component(PickHubScript, "PickHubScript").$$render(
      $$result,
      { syncQuery: true, filter },
      {
        filter: ($$value) => {
          filter = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              startIcon: { icon: External_link },
              target: "_blank",
              href: $hubBaseUrlStore,
              variant: "border",
              color: "light"
            },
            {},
            {
              default: () => {
                return `Hub`;
              }
            }
          )}`;
        }
      }
    )}` : `${subtab == "flow" ? `${validate_component(PickHubFlow, "PickHubFlow").$$render(
      $$result,
      { syncQuery: true, filter },
      {
        filter: ($$value) => {
          filter = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              startIcon: { icon: External_link },
              target: "_blank",
              href: $hubBaseUrlStore,
              variant: "border",
              color: "light"
            },
            {},
            {
              default: () => {
                return `Hub`;
              }
            }
          )}`;
        }
      }
    )}` : `${subtab == "app" ? `${validate_component(PickHubApp, "PickHubApp").$$render(
      $$result,
      { syncQuery: true, filter },
      {
        filter: ($$value) => {
          filter = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              startIcon: { icon: External_link },
              target: "_blank",
              href: $hubBaseUrlStore,
              variant: "border",
              color: "light"
            },
            {},
            {
              default: () => {
                return `Hub`;
              }
            }
          )}`;
        }
      }
    )}` : ``}`}`}` : ``}</div></div></div></div> ${tab == "workspace" ? `${validate_component(ItemsList, "ItemsList").$$render(
      $$result,
      { filter, subtab },
      {
        filter: ($$value) => {
          filter = $$value;
          $$settled = false;
        },
        subtab: ($$value) => {
          subtab = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_hubBaseUrlStore();
  $$unsubscribe_userStore();
  $$unsubscribe_page();
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
export {
  Page as default
};
