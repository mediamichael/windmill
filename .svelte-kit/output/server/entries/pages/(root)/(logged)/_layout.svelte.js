import { c as create_ssr_component, v as validate_component, s as subscribe, f as each, b as add_attribute, e as escape$1, a as set_store_value, d as createEventDispatcher, q as missing_component, p as compute_slots, o as onDestroy, z as null_to_empty, u as setContext, l as add_classes } from "../../../../chunks/ssr.js";
import { c as ScriptService, R as ResourceService, A as AppService, F as FlowService, l as IndexSearchService, e as RawAppService, O as OpenAPI, W as WorkspaceService, g as SettingService } from "../../../../chunks/services.gen.js";
import { M as MenuItem, g as classNames, B as Button, s as sendUserToast, a1 as isMac, P as Portal, q as displayDateOnly, a2 as getModifierKey } from "../../../../chunks/toast.js";
import { w as workspaceStore, e as enterpriseLicense, u as userStore, r as awarenessStore, n as userWorkspaces, b as superadmin, x as isPremiumStore, y as workspaceUsageStore, z as usageStore, d as defaultScripts, h as hubBaseUrlStore, A as starStore, f as copilotInfo } from "../../../../chunks/stores2.js";
import { a as MenuV2 } from "../../../../chunks/DropdownV2.js";
import { g as goto } from "../../../../chunks/client.js";
import { b as base } from "../../../../chunks/base.js";
import { p as page, n as navigating } from "../../../../chunks/stores.js";
import { WebsocketProvider } from "y-websocket";
import * as Y from "yjs";
import { twMerge } from "tailwind-merge";
import { P as Popover, E as External_link } from "../../../../chunks/Popover.js";
import "../../../../chunks/common.js";
import { B as Building } from "../../../../chunks/building.js";
import { P as Plus } from "../../../../chunks/plus.js";
import { S as Settings } from "../../../../chunks/settings.js";
import "../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import YAML from "yaml";
import "minimatch";
import { C as Crown, U as USER_SETTINGS_HASH, S as SuperadminSettings, a as SUPERADMIN_SETTINGS_HASH } from "../../../../chunks/SuperadminSettings.js";
import { D as DarkModeObserver } from "../../../../chunks/DarkModeObserver.js";
import { U as User } from "../../../../chunks/user2.js";
import { I as Icon } from "../../../../chunks/Icon.js";
import { M as Moon, S as Sun } from "../../../../chunks/DarkModeToggle.js";
import { a as ConfirmationModal } from "../../../../chunks/ConfirmationModal.js";
import { P as Play } from "../../../../chunks/play.js";
import { D as Dollar_sign } from "../../../../chunks/Required.js";
import { C as Calendar } from "../../../../chunks/calendar.js";
import { B as Bot } from "../../../../chunks/bot.js";
import { F as Folder_open } from "../../../../chunks/LightweightSchemaForm.js";
import { E as Eye } from "../../../../chunks/eye.js";
import { H as Help_circle } from "../../../../chunks/help-circle.js";
import { B as Book_open } from "../../../../chunks/book-open.js";
import { G as Github } from "../../../../chunks/github.js";
import { C as CenteredModal } from "../../../../chunks/CenteredModal.js";
import { g as goto$1 } from "../../../../chunks/navigation.js";
import { U as UserSettings } from "../../../../chunks/UserSettings.js";
import { W as WindmillIcon } from "../../../../chunks/WindmillIcon.js";
import { B as BarsStaggered } from "../../../../chunks/util.js";
import { S as Star } from "../../../../chunks/star.js";
import { C as Code_2 } from "../../../../chunks/code-2.js";
import { L as Layout_dashboard } from "../../../../chunks/layout-dashboard.js";
import { s as syncTutorialsTodos } from "../../../../chunks/tutorialUtils.js";
import { g as getUserExt } from "../../../../chunks/user.js";
import { w as workspacedOpenai } from "../../../../chunks/lib.js";
import { M as Menu } from "../../../../chunks/menu.js";
import { t as tick, A as Arrow_left } from "../../../../chunks/Head.js";
import { T as TimeAgo } from "../../../../chunks/FlowGraphViewerStep.js";
import { J as JobPreview } from "../../../../chunks/JobPreview.js";
import { S as SearchItems } from "../../../../chunks/SearchItems.js";
import { T as ToggleButtonGroup, a as ToggleButton } from "../../../../chunks/ToggleButtonGroup.js";
import { F as FlowIcon } from "../../../../chunks/FlowIcon.js";
import { A as Alert } from "../../../../chunks/Alert.js";
/* empty css                                                      */
import "../../../../chunks/index2.js";
import { L as Loader_2 } from "../../../../chunks/loader-2.js";
import { P as Pen_square } from "../../../../chunks/pen-square.js";
import { A as Arrow_down } from "../../../../chunks/arrow-down.js";
import uFuzzy from "@leeoniya/ufuzzy";
import { s as scroll_into_view_if_needed_polyfill } from "../../../../chunks/utils2.js";
import { S as Search } from "../../../../chunks/search.js";
import { S as Search_code } from "../../../../chunks/search-code.js";
import { A as Alert_triangle } from "../../../../chunks/alert-triangle.js";
import { b as base$1 } from "../../../../chunks/paths.js";
const Boxes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"
      }
    ],
    ["path", { "d": "m7 16.5-4.74-2.85" }],
    ["path", { "d": "m7 16.5 5-3" }],
    ["path", { "d": "M7 16.5v5.17" }],
    [
      "path",
      {
        "d": "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"
      }
    ],
    ["path", { "d": "m17 16.5-5-3" }],
    ["path", { "d": "m17 16.5 4.74-2.85" }],
    ["path", { "d": "M17 16.5v5.17" }],
    [
      "path",
      {
        "d": "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"
      }
    ],
    ["path", { "d": "M12 8 7.26 5.15" }],
    ["path", { "d": "m12 8 4.74-2.85" }],
    ["path", { "d": "M12 13.5V8" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "boxes" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Folder_cog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "18", "cy": "18", "r": "3" }],
    [
      "path",
      {
        "d": "M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3"
      }
    ],
    ["path", { "d": "m21.7 19.4-.9-.3" }],
    ["path", { "d": "m15.2 16.9-.9-.3" }],
    ["path", { "d": "m16.6 21.7.3-.9" }],
    ["path", { "d": "m19.1 15.2.3-.9" }],
    ["path", { "d": "m19.6 21.7-.4-1" }],
    ["path", { "d": "m16.8 15.3-.4-1" }],
    ["path", { "d": "m14.3 19.6 1-.4" }],
    ["path", { "d": "m20.7 16.8 1-.4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "folder-cog" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Hard_hat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"
      }
    ],
    [
      "path",
      {
        "d": "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"
      }
    ],
    ["path", { "d": "M4 15v-3a6 6 0 0 1 6-6h0" }],
    ["path", { "d": "M14 6h0a6 6 0 0 1 6 6v3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "hard-hat" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      }
    ],
    ["polyline", { "points": "9 22 9 12 15 12 15 22" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "home" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Log_out = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
      }
    ],
    ["polyline", { "points": "16 17 21 12 16 7" }],
    [
      "line",
      {
        "x1": "21",
        "x2": "9",
        "y1": "12",
        "y2": "12"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "log-out" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Newspaper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
      }
    ],
    ["path", { "d": "M18 14h-8" }],
    ["path", { "d": "M15 18h-5" }],
    ["path", { "d": "M10 6h8v4h-8V6Z" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "newspaper" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Server_cog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "3" }],
    [
      "path",
      {
        "d": "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"
      }
    ],
    [
      "path",
      {
        "d": "M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"
      }
    ],
    ["path", { "d": "M6 6h.01" }],
    ["path", { "d": "M6 18h.01" }],
    ["path", { "d": "m15.7 13.4-.9-.3" }],
    ["path", { "d": "m9.2 10.9-.9-.3" }],
    ["path", { "d": "m10.6 15.7.3-.9" }],
    ["path", { "d": "m13.6 15.7-.4-1" }],
    ["path", { "d": "m10.8 9.3-.4-1" }],
    ["path", { "d": "m8.3 13.6 1-.4" }],
    ["path", { "d": "m14.7 10.8 1-.4" }],
    ["path", { "d": "m13.4 8.3-.3.9" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "server-cog" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const User_cog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "18", "cy": "15", "r": "3" }],
    ["circle", { "cx": "9", "cy": "7", "r": "4" }],
    ["path", { "d": "M10 15H6a4 4 0 0 0-4 4v2" }],
    ["path", { "d": "m21.7 16.4-.9-.3" }],
    ["path", { "d": "m15.2 13.9-.9-.3" }],
    ["path", { "d": "m16.6 18.7.3-.9" }],
    ["path", { "d": "m19.1 12.2.3-.9" }],
    ["path", { "d": "m19.6 18.7-.4-1" }],
    ["path", { "d": "m16.8 12.3-.4-1" }],
    ["path", { "d": "m14.3 16.6 1-.4" }],
    ["path", { "d": "m20.7 13.8 1-.4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "user-cog" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
function showActivity(url) {
  if (url.startsWith("/scripts/add")) {
    return "Creating a script";
  } else if (url.startsWith("/scripts/edit")) {
    return "Editing a script";
  } else if (url.startsWith("/scripts/get")) {
    return "Viewing a script";
  } else if (url.startsWith("/flows/add")) {
    return "Creating a flow";
  } else if (url.startsWith("/flows/edit")) {
    return "Editing a flow";
  } else if (url.startsWith("/flows/get")) {
    return "Viewing a flow";
  } else if (url.startsWith("/apps/add")) {
    return "Creating an app";
  } else if (url.startsWith("/apps/edit")) {
    return "Editing an app";
  } else if (url.startsWith("/runs")) {
    return "Exploring runs";
  } else if (url.startsWith("/variables")) {
    return "Exploring variables";
  } else if (url.startsWith("/resources")) {
    return "Exploring runs";
  } else if (url == "/") {
    return "On the home page";
  } else {
    return "";
  }
}
const MultiplayerMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  let $page, $$unsubscribe_page;
  let $userStore, $$unsubscribe_userStore;
  let $awarenessStore, $$unsubscribe_awarenessStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_awarenessStore = subscribe(awarenessStore, (value) => $awarenessStore = value);
  const wsProtocol = "ws";
  let awareness = void 0;
  let wsProvider = void 0;
  let connected = false;
  function connectWorkspace(workspace) {
    const ydoc = new Y.Doc();
    wsProvider = new WebsocketProvider(`${wsProtocol}://${window.location.host}/ws_mp/`, workspace, ydoc);
    wsProvider.on("sync", (isSynced) => {
      connected = true;
    });
    awareness = wsProvider.awareness;
    awareness?.setLocalState({
      name: $userStore?.username,
      url: $page.url.pathname
    });
    function setPeers() {
      if (!awareness) return;
      set_store_value(awarenessStore, $awarenessStore = Object.fromEntries(Array.from(awareness.getStates().values()).map((x) => [x.name, x.url])), $awarenessStore);
    }
    setPeers();
    awareness?.on("change", (changes) => {
      setPeers();
    });
  }
  {
    awareness?.setLocalState({
      name: $userStore?.username,
      url: $page.url.pathname
    });
  }
  $enterpriseLicense && $workspaceStore && connectWorkspace($workspaceStore);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_enterpriseLicense();
  $$unsubscribe_page();
  $$unsubscribe_userStore();
  $$unsubscribe_awarenessStore();
  return `${connected ? `<div class="divide-gray-100 border-t" role="none"><div class="px-2.5 text-xs font-semibold mt-1" data-svelte-h="svelte-1y0l6cx">Live activity</div> <div class="py-1 flex flex-col gap-y-1 max-h-48 overflow-auto">${each(Object.entries($awarenessStore ?? {}), ([user, url]) => {
    return `<div class="inline-flex gap-2 px-2 items-center"><span class="inline-flex h-6 w-6 px-1 items-center justify-center rounded-full ring-2 ring-white bg-gray-600"${add_attribute("title", user, 0)}><span class="text-sm font-medium leading-none text-white">${escape$1(user.substring(0, 2).toLocaleUpperCase())}</span></span> <div class="flex flex-col"><span class="text-sm text-primary truncate">${escape$1(user)}</span> <span class="text-xs text-tertiary truncate">${escape$1(showActivity(url))}</span></div> </div>`;
  })}</div></div>` : ``}`;
});
const MenuButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = void 0 } = $$props;
  let { icon = void 0 } = $$props;
  let { isCollapsed } = $$props;
  let { disabled = false } = $$props;
  let { lightMode = false } = $$props;
  let { stopPropagationOnClick = false } = $$props;
  let { shortcut = "" } = $$props;
  createEventDispatcher();
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
  if ($$props.isCollapsed === void 0 && $$bindings.isCollapsed && isCollapsed !== void 0) $$bindings.isCollapsed(isCollapsed);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.lightMode === void 0 && $$bindings.lightMode && lightMode !== void 0) $$bindings.lightMode(lightMode);
  if ($$props.stopPropagationOnClick === void 0 && $$bindings.stopPropagationOnClick && stopPropagationOnClick !== void 0) $$bindings.stopPropagationOnClick(stopPropagationOnClick);
  if ($$props.shortcut === void 0 && $$bindings.shortcut && shortcut !== void 0) $$bindings.shortcut(shortcut);
  return `${!disabled ? `${validate_component(Popover, "Popover").$$render(
    $$result,
    {
      appearTimeout: 0,
      disappearTimeout: 0,
      class: "w-full",
      disablePopup: !isCollapsed
    },
    {},
    {
      text: () => {
        return `${label ? `${escape$1(label)}` : ``} `;
      },
      default: () => {
        return `<button${add_attribute(
          "class",
          twMerge(
            "group flex items-center px-2 py-2 font-light rounded-md h-8 gap-3 w-full",
            lightMode ? "text-primary hover:bg-surface-hover " : "  hover:bg-[#2A3648] text-primary-inverse dark:text-primary",
            "transition-all",
            $$props.class
          ),
          0
        )}${add_attribute("title", label, 0)}>${icon ? `${validate_component(icon || missing_component, "svelte:component").$$render(
          $$result,
          {
            size: 16,
            class: twMerge(
              "flex-shrink-0",
              lightMode ? "text-primary group-hover:text-secondary" : "text-primary-inverse group-hover:text-secondary-inverse dark:group-hover:text-secondary dark:text-primary",
              "transition-all"
            )
          },
          {},
          {}
        )}` : ``} ${!isCollapsed && label ? `<span${add_attribute(
          "class",
          twMerge(
            "whitespace-pre truncate",
            lightMode ? "text-primary" : "text-primary-inverse  dark:text-primary",
            "transition-all",
            $$props.class
          ),
          0
        )}>${escape$1(label)} <span class="pl-2 text-xs dark:text-secondary light:text-secondary-inverse font-semibold">${escape$1(shortcut)}</span></span>` : ``}</button>`;
      }
    }
  )}` : ``}`;
});
const WorkspaceMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $userWorkspaces, $$unsubscribe_userWorkspaces;
  let $userStore, $$unsubscribe_userStore;
  let $superadmin, $$unsubscribe_superadmin;
  let $$unsubscribe_isPremiumStore;
  let $$unsubscribe_workspaceUsageStore;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_userWorkspaces = subscribe(userWorkspaces, (value) => $userWorkspaces = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_superadmin = subscribe(superadmin, (value) => $superadmin = value);
  $$unsubscribe_isPremiumStore = subscribe(isPremiumStore, (value) => value);
  $$unsubscribe_workspaceUsageStore = subscribe(workspaceUsageStore, (value) => value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  let { isCollapsed = false } = $$props;
  if ($$props.isCollapsed === void 0 && $$bindings.isCollapsed && isCollapsed !== void 0) $$bindings.isCollapsed(isCollapsed);
  $$unsubscribe_page();
  $$unsubscribe_workspaceStore();
  $$unsubscribe_userWorkspaces();
  $$unsubscribe_userStore();
  $$unsubscribe_superadmin();
  $$unsubscribe_isPremiumStore();
  $$unsubscribe_workspaceUsageStore();
  $$unsubscribe_enterpriseLicense();
  return `${validate_component(MenuV2, "Menu").$$render($$result, {}, {}, {
    trigger: () => {
      return `<div slot="trigger">${validate_component(MenuButton, "MenuButton").$$render(
        $$result,
        {
          class: "!text-xs",
          icon: Building,
          label: $workspaceStore ?? "",
          isCollapsed
        },
        {},
        {}
      )}</div>`;
    },
    default: () => {
      return `<div class="divide-y" role="none"><div class="py-1">${each($userWorkspaces, (workspace) => {
        return `${validate_component(MenuItem, "MenuItem").$$render($$result, {}, {}, {
          default: () => {
            return `<button class="${"text-xs min-w-0 w-full overflow-hidden flex flex-col py-1.5 " + escape$1(
              $workspaceStore === workspace.id ? "cursor-default bg-surface-selected" : "cursor-pointer hover:bg-surface-hover",
              true
            )}"><div class="text-primary pl-4 truncate text-left text-[1.2em]">${escape$1(workspace.name)}</div> <div class="text-tertiary font-mono pl-4 text-2xs whitespace-nowrap truncate text-left">${escape$1(workspace.id)} </div></button> `;
          }
        })}`;
      })}</div> <div class="py-1" role="none"><a href="${escape$1(base, true) + "/user/create_workspace"}" class="text-primary px-4 py-2 text-xs hover:bg-surface-hover hover:text-primary flex flex-flow gap-2" role="menuitem" tabindex="-1">${validate_component(Plus, "Plus").$$render($$result, { size: 16 }, {}, {})}
				Workspace</a></div> <div class="py-1" role="none"><a href="${escape$1(base, true) + "/user/workspaces"}" class="text-primary block px-4 py-2 text-xs hover:bg-surface-hover hover:text-primary" role="menuitem" tabindex="-1" data-svelte-h="svelte-1ouhqie">All workspaces &amp; invites</a></div> ${$userStore?.is_admin || $superadmin ? `<div class="py-1" role="none">${validate_component(MenuItem, "MenuItem").$$render($$result, {}, {}, {
        default: () => {
          return `<a href="${escape$1(base, true) + "/workspace_settings"}" class="text-secondary px-4 py-2 text-xs hover:bg-surface-hover hover:text-primary flex flex-flow gap-2" role="menuitem" tabindex="-1">${validate_component(Settings, "Settings").$$render($$result, { size: 16 }, {}, {})}
						Workspace Settings</a>`;
        }
      })}</div>` : ``}</div> ${``} ${$enterpriseLicense ? `${validate_component(MultiplayerMenu, "MultiplayerMenu").$$render($$result, {}, {}, {})}` : ``}`;
    }
  })}`;
});
const MenuLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { label } = $$props;
  let { href } = $$props;
  let { icon = void 0 } = $$props;
  let { isCollapsed } = $$props;
  let { disabled = false } = $$props;
  let { lightMode = false } = $$props;
  let isSelected = false;
  navigating.subscribe(() => {
    if (href === "/") {
      isSelected = $page.url.pathname === href;
    } else {
      isSelected = $page.url.pathname.includes(href);
    }
  });
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
  if ($$props.isCollapsed === void 0 && $$bindings.isCollapsed && isCollapsed !== void 0) $$bindings.isCollapsed(isCollapsed);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.lightMode === void 0 && $$bindings.lightMode && lightMode !== void 0) $$bindings.lightMode(lightMode);
  $$unsubscribe_page();
  return `${!disabled ? `${validate_component(Popover, "Popover").$$render(
    $$result,
    {
      appearTimeout: 0,
      disappearTimeout: 0,
      class: "w-full",
      disablePopup: !isCollapsed
    },
    {},
    {
      text: () => {
        return `${escape$1(label)} `;
      },
      default: () => {
        return `<a${add_attribute("href", href, 0)}${add_attribute(
          "class",
          classNames(
            "group flex items-center px-2 py-2 text-sm font-light rounded-md h-8 gap-3",
            isSelected ? lightMode ? "bg-surface-selected hover:bg-surface-hover rounded-none" : "bg-frost-700 hover:bg-[#30404e]" : lightMode ? "hover:bg-surface-hover rounded-none" : "hover:bg-[#2A3648]",
            "hover:transition-all",
            $$props.class
          ),
          0
        )}${add_attribute("target", href.includes("http") ? "_blank" : null, 0)}${add_attribute("title", isCollapsed ? void 0 : label, 0)}>${icon ? `${validate_component(icon || missing_component, "svelte:component").$$render(
          $$result,
          {
            size: 16,
            class: classNames(
              "flex-shrink-0",
              isSelected ? lightMode ? "text-primary group-hover:text-secondary" : "text-frost-200 group-hover:text-white" : lightMode ? "text-primary group-hover:text-secondary" : "text-gray-100 group-hover:text-white",
              "transition-all"
            )
          },
          {},
          {}
        )}` : ``} ${!isCollapsed ? `<span${add_attribute(
          "class",
          classNames(
            "whitespace-pre truncate",
            isSelected ? lightMode ? "text-primary group-hover:text-secondary" : "text-frost-200 group-hover:text-white" : lightMode ? "text-primary group-hover:text-secondary" : "text-gray-100 group-hover:text-white",
            "transition-all duration-75"
          ),
          0
        )}>${escape$1(label)}</span>` : ``}</a>`;
      }
    }
  )}` : ``}`;
});
const UserMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  let $$unsubscribe_isPremiumStore;
  let $$unsubscribe_usageStore;
  let $$unsubscribe_workspaceStore;
  let $$unsubscribe_workspaceUsageStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_isPremiumStore = subscribe(isPremiumStore, (value) => value);
  $$unsubscribe_usageStore = subscribe(usageStore, (value) => value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  $$unsubscribe_workspaceUsageStore = subscribe(workspaceUsageStore, (value) => value);
  let darkMode = false;
  let { isCollapsed = false } = $$props;
  let { lightMode = false } = $$props;
  if ($$props.isCollapsed === void 0 && $$bindings.isCollapsed && isCollapsed !== void 0) $$bindings.isCollapsed(isCollapsed);
  if ($$props.lightMode === void 0 && $$bindings.lightMode && lightMode !== void 0) $$bindings.lightMode(lightMode);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(MenuV2, "Menu").$$render($$result, {}, {}, {
      trigger: () => {
        return `<div slot="trigger" class="w-full">${validate_component(MenuButton, "MenuButton").$$render(
          $$result,
          {
            class: "!text-xs",
            icon: User,
            label: `User (${$userStore?.username ?? $userStore?.email})`,
            isCollapsed,
            lightMode
          },
          {},
          {}
        )}</div>`;
      },
      default: () => {
        return `<div class="divide-y z-20"><div class="px-4 py-3" role="none"><p class="text-sm font-medium text-primary truncate" role="none">${escape$1($userStore?.email)}</p> <span class="text-xs text-tertiary flex flex-row gap-2 items-center">${$userStore?.is_admin ? `Admin of this workspace ${validate_component(Crown, "Crown").$$render($$result, { size: 14 }, {}, {})}` : `${$userStore?.operator ? `Operator in this workspace ${validate_component(Hard_hat, "HardHat").$$render($$result, { size: 14 }, {}, {})}` : ``}`}</span></div> <div class="py-1" role="none">${validate_component(MenuItem, "MenuItem").$$render(
          $$result,
          {
            href: USER_SETTINGS_HASH,
            class: twMerge("flex flex-row gap-2 items-center px-4 py-2 ", "text-secondary text-sm", "hover:bg-surface-hover hover:text-primary cursor-pointer")
          },
          {},
          {
            default: () => {
              return `${validate_component(Settings, "Settings").$$render($$result, { size: 14 }, {}, {})}
				Account settings`;
            }
          }
        )}</div> <div class="py-1" role="none"><button${add_attribute("class", twMerge("text-secondary block text-left px-4 py-2 font-normal text-sm hover:bg-surface-hover hover:text-primary w-full", "flex flex-row items-center gap-2"), 0)} role="menuitem" tabindex="-1">${darkMode ? `${validate_component(Sun, "Sun").$$render($$result, { size: 14 }, {}, {})}` : `${validate_component(Moon, "Moon").$$render($$result, { size: 14 }, {}, {})}`}
				Switch theme</button></div> <div class="py-1" role="none">${validate_component(MenuItem, "MenuItem").$$render(
          $$result,
          {
            href: "#",
            class: twMerge("flex flex-row gap-2 items-center px-4 py-2 ", "text-secondary text-sm", "hover:bg-surface-hover hover:text-primary cursor-pointer")
          },
          {},
          {
            default: () => {
              return `${validate_component(Log_out, "LogOut").$$render($$result, { size: 14 }, {}, {})}
				Sign out`;
            }
          }
        )}</div> ${``}</div>`;
      }
    })} ${validate_component(DarkModeObserver, "DarkModeObserver").$$render(
      $$result,
      { darkMode },
      {
        darkMode: ($$value) => {
          darkMode = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_userStore();
  $$unsubscribe_isPremiumStore();
  $$unsubscribe_usageStore();
  $$unsubscribe_workspaceStore();
  $$unsubscribe_workspaceUsageStore();
  return $$rendered;
});
const Discord = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = 16 } = $$props;
  let { style = "fill: white;" } = $$props;
  let { class: clazz = "" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("height", `${size}px`, 0)} viewBox="0 0 640 512"${add_attribute("class", clazz, 0)}${add_attribute("style", style, 0)}><path fill="currentColor" d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path></svg>`;
});
const SidebarContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mainMenuLinks;
  let secondaryMenuLinks;
  let $userStore, $$unsubscribe_userStore;
  let $superadmin, $$unsubscribe_superadmin;
  let $$unsubscribe_workspaceStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_superadmin = subscribe(superadmin, (value) => $superadmin = value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  let hasNewChangelogs = false;
  let recentChangelogs = [];
  localStorage.getItem("changelogsLastOpened");
  const thirdMenuLinks = [
    {
      label: "Help",
      icon: Help_circle,
      subItems: [
        {
          label: "Docs",
          href: "https://www.windmill.dev/docs/intro/",
          icon: Book_open
        },
        {
          label: "Feedbacks",
          href: "https://discord.gg/V7PM2YHsPB",
          icon: Discord
        },
        {
          label: "Issues",
          href: "https://github.com/windmill-labs/windmill/issues/new",
          icon: Github
        },
        {
          label: "Changelog",
          href: "https://www.windmill.dev/changelog/",
          icon: Newspaper
        }
      ]
    }
  ];
  let { isCollapsed = false } = $$props;
  let { noGap = false } = $$props;
  let leaveWorkspaceModal = false;
  if ($$props.isCollapsed === void 0 && $$bindings.isCollapsed && isCollapsed !== void 0) $$bindings.isCollapsed(isCollapsed);
  if ($$props.noGap === void 0 && $$bindings.noGap && noGap !== void 0) $$bindings.noGap(noGap);
  mainMenuLinks = [
    {
      label: "Home",
      href: `${base}/`,
      icon: Home
    },
    {
      label: "Runs",
      href: `${base}/runs`,
      icon: Play
    },
    {
      label: "Variables",
      href: `${base}/variables`,
      icon: Dollar_sign,
      disabled: $userStore?.operator
    },
    {
      label: "Resources",
      href: `${base}/resources`,
      icon: Boxes,
      disabled: $userStore?.operator
    },
    {
      label: "Schedules",
      href: `${base}/schedules`,
      icon: Calendar,
      disabled: $userStore?.operator
    }
  ];
  secondaryMenuLinks = [
    // {
    // 	label: 'Workspace',
    // 	href: '/workspace_settings',
    // 	icon: Cog,
    // 	disabled: !$userStore?.is_admin && !$userStore?.is_super_admin
    // },
    {
      label: "Settings",
      icon: Settings,
      subItems: [
        {
          label: "Account",
          href: "#user-settings",
          icon: User_cog,
          faIcon: void 0
        },
        ...$userStore?.is_admin || $superadmin ? [
          {
            label: "Workspace",
            href: `${base}/workspace_settings`,
            icon: Folder_cog,
            faIcon: void 0
          }
        ] : [],
        ...$superadmin ? [
          {
            label: "Instance",
            href: "#superadmin-settings",
            icon: Server_cog,
            faIcon: void 0
          }
        ] : [],
        ...!$superadmin && !$userStore?.is_admin ? [
          {
            label: "Leave Workspace",
            action: () => {
              leaveWorkspaceModal = true;
            },
            class: "text-red-400",
            icon: Log_out,
            faIcon: void 0
          }
        ] : []
      ],
      disabled: $userStore?.operator
    },
    {
      label: "Workers",
      href: `${base}/workers`,
      icon: Bot,
      disabled: $userStore?.operator
    },
    {
      label: "Folders & Groups",
      icon: Folder_open,
      subItems: [
        {
          label: "Folders",
          href: `${base}/folders`,
          icon: Folder_open,
          disabled: $userStore?.operator,
          faIcon: void 0
        },
        {
          label: "Groups",
          href: `${base}/groups`,
          icon: User_cog,
          disabled: $userStore?.operator,
          faIcon: void 0
        }
      ],
      disabled: $userStore?.operator
    },
    {
      label: "Audit Logs",
      href: `${base}/audit_logs`,
      icon: Eye,
      disabled: $userStore?.operator
    }
  ];
  $$unsubscribe_userStore();
  $$unsubscribe_superadmin();
  $$unsubscribe_workspaceStore();
  return `<nav${add_attribute("class", twMerge("grow flex flex-col overflow-x-hidden scrollbar-hidden px-2 md:pb-2 justify-between", noGap ? "gap-0" : "gap-16"), 0)}><div${add_attribute("class", twMerge("space-y-1 pt-4 ", noGap ? "md:mb-0 mb-0" : "mb-6 md:mb-10"), 0)}>${each(mainMenuLinks, (menuLink) => {
    return `${validate_component(MenuLink, "MenuLink").$$render($$result, Object.assign({}, { class: "!text-xs" }, menuLink, { isCollapsed }), {}, {})}`;
  })}</div> <div class="flex flex-col h-full justify-end"><div${add_attribute("class", twMerge("space-y-0.5 mb-6 md:mb-10", noGap ? "md:mb-0 mb-0" : "mb-6 md:mb-10"), 0)}>${validate_component(UserMenu, "UserMenu").$$render($$result, { isCollapsed }, {}, {})} ${each(secondaryMenuLinks, (menuLink) => {
    return `${menuLink.subItems ? `${validate_component(MenuV2, "Menu").$$render($$result, {}, {}, {
      trigger: () => {
        return `<div slot="trigger">${validate_component(MenuButton, "MenuButton").$$render($$result, Object.assign({}, { class: "!text-2xs" }, menuLink, { isCollapsed }), {}, {})} </div>`;
      },
      default: () => {
        return `${each(menuLink.subItems, (subItem) => {
          return `${validate_component(MenuItem, "MenuItem").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="py-1" role="none">${subItem?.["action"] ? `<button class="text-secondary block px-4 py-2 text-xs hover:bg-surface-hover hover:text-primary"><div class="flex flex-row items-center gap-2">${subItem.icon ? `${validate_component(subItem.icon || missing_component, "svelte:component").$$render($$result, { size: 16 }, {}, {})}` : ``} ${escape$1(subItem.label)}</div> </button>` : `<a${add_attribute("href", subItem.href, 0)}${add_attribute("class", twMerge("text-secondary block px-4 py-2 text-2xs hover:bg-surface-hover hover:text-primary"), 0)} role="menuitem" tabindex="-1"><div class="flex flex-row items-center gap-2">${subItem.icon ? `${validate_component(subItem.icon || missing_component, "svelte:component").$$render($$result, { size: 16 }, {}, {})}` : ``} ${escape$1(subItem.label)}</div> </a>`}</div> `;
            }
          })}`;
        })} `;
      }
    })}` : `${validate_component(MenuLink, "MenuLink").$$render($$result, Object.assign({}, { class: "!text-2xs" }, menuLink, { isCollapsed }), {}, {})}`}`;
  })}</div> <div class="space-y-0.5">${each(thirdMenuLinks, (menuLink) => {
    return `${menuLink.subItems ? `${validate_component(MenuV2, "Menu").$$render($$result, {}, {}, {
      trigger: () => {
        return `<div slot="trigger">  <div class="relative">${validate_component(MenuButton, "MenuButton").$$render($$result, Object.assign({}, { class: "!text-2xs" }, menuLink, { isCollapsed }), {}, {})} ${menuLink.label === "Help" && hasNewChangelogs ? `<span class="absolute top-1 right-1 flex h-2 w-2" data-svelte-h="svelte-brvh19"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-frost-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-2 w-2 bg-frost-500"></span> </span>` : ``}</div> </div>`;
      },
      default: () => {
        return `${each(menuLink.subItems, (subItem) => {
          return `${validate_component(MenuItem, "MenuItem").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="py-1" role="none"><a${add_attribute("href", subItem.href, 0)} class="text-secondary block px-4 py-2 text-xs hover:bg-surface-hover hover:text-primary relative" role="menuitem" tabindex="-1" target="_blank"><div class="flex flex-row items-center gap-2">${subItem.icon ? `${validate_component(subItem.icon || missing_component, "svelte:component").$$render($$result, { size: 16 }, {}, {})}` : ``} ${escape$1(subItem.label)}</div> </a></div> `;
            }
          })}`;
        })} ${recentChangelogs.length > 0 ? `<div class="w-full h-1 border-t"></div> <span class="text-xs px-4 font-bold" data-svelte-h="svelte-15ql2qm">Latest changelogs</span> ${each(recentChangelogs, (changelog) => {
          return `${validate_component(MenuItem, "MenuItem").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="py-1" role="none"><a${add_attribute("href", changelog.href, 0)} class="text-secondary block px-4 py-2 text-xs hover:bg-surface-hover hover:text-primary relative" role="menuitem" tabindex="-1" target="_blank"><div class="flex flex-row items-center gap-2">${escape$1(changelog.label)}</div> </a></div> `;
            }
          })}`;
        })}` : ``} `;
      }
    })}` : ``}`;
  })}</div></div></nav> ${validate_component(ConfirmationModal, "ConfirmationModal").$$render(
    $$result,
    {
      open: leaveWorkspaceModal,
      title: "Leave workspace",
      confirmationText: "Remove"
    },
    {},
    {
      default: () => {
        return `<div class="flex flex-col w-full space-y-4" data-svelte-h="svelte-hgd01j"><span>Are you sure you want to leave this workspace?</span></div>`;
      }
    }
  )}`;
});
const FavoriteMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { lightMode = false } = $$props;
  let { isCollapsed = false } = $$props;
  let { favoriteLinks = [] } = $$props;
  if ($$props.lightMode === void 0 && $$bindings.lightMode && lightMode !== void 0) $$bindings.lightMode(lightMode);
  if ($$props.isCollapsed === void 0 && $$bindings.isCollapsed && isCollapsed !== void 0) $$bindings.isCollapsed(isCollapsed);
  if ($$props.favoriteLinks === void 0 && $$bindings.favoriteLinks && favoriteLinks !== void 0) $$bindings.favoriteLinks(favoriteLinks);
  return `${validate_component(MenuV2, "Menu").$$render($$result, {}, {}, {
    trigger: () => {
      return `<div slot="trigger">${validate_component(MenuButton, "MenuButton").$$render(
        $$result,
        {
          class: "!text-xs",
          icon: Star,
          label: "Favorites",
          isCollapsed,
          lightMode
        },
        {},
        {}
      )}</div>`;
    },
    default: () => {
      return `<div class="overflow-hidden" role="none">${!favoriteLinks.length ? `<div class="py-1" role="none" data-svelte-h="svelte-p7ijjr"><div class="text-secondary block px-4 py-2 text-xs" role="menuitem" tabindex="-1">Star items first</div></div>` : `<div class="py-1 w-full max-w-full">${each(favoriteLinks ?? [], (favorite) => {
        return `${validate_component(MenuItem, "MenuItem").$$render($$result, { href: favorite.href }, {}, {
          default: () => {
            return `<span class="w-full inline-flex flex-row px-4 py-2 hover:bg-surface-hover"><span class="center-center">${favorite.kind == "script" ? `${validate_component(Code_2, "Code2").$$render($$result, { size: 16 }, {}, {})}` : `${favorite.kind == "flow" ? `${validate_component(BarsStaggered, "BarsStaggered").$$render($$result, { size: 16 }, {}, {})}` : `${favorite.kind == "app" || favorite.kind == "raw_app" ? `${validate_component(Layout_dashboard, "LayoutDashboard").$$render($$result, { size: 16 }, {}, {})}` : ``}`}`}</span> <span class="text-primary ml-2 grow min-w-0 text-xs truncate">${escape$1(favorite.label)} </span></span> `;
          }
        })}`;
      })}</div>`}</div>`;
    }
  })}`;
});
const OperatorMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  let darkMode = false;
  let { isCollapsed = false } = $$props;
  let { favoriteLinks = [] } = $$props;
  const mainMenuLinks = [
    {
      label: "Home",
      href: `${base}/`,
      icon: Home
    },
    {
      label: "Runs",
      href: `${base}/runs`,
      icon: Play
    },
    {
      label: "Schedules",
      href: `${base}/schedules`,
      icon: Calendar
    }
  ];
  if ($$props.isCollapsed === void 0 && $$bindings.isCollapsed && isCollapsed !== void 0) $$bindings.isCollapsed(isCollapsed);
  if ($$props.favoriteLinks === void 0 && $$bindings.favoriteLinks && favoriteLinks !== void 0) $$bindings.favoriteLinks(favoriteLinks);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(MenuV2, "Menu").$$render($$result, {}, {}, {
      trigger: () => {
        return `<div slot="trigger">${validate_component(MenuButton, "MenuButton").$$render(
          $$result,
          {
            class: "!text-xs",
            icon: Menu,
            isCollapsed,
            lightMode: true,
            label: void 0
          },
          {},
          {}
        )}</div>`;
      },
      default: () => {
        return `<div class="w-full max-w-full">${each(favoriteLinks ?? [], (favorite) => {
          return `${validate_component(MenuItem, "MenuItem").$$render($$result, { href: favorite.href }, {}, {
            default: () => {
              return `<span class="w-full inline-flex flex-row px-2 py-2 hover:bg-surface-hover"><span class="center-center">${favorite.kind == "script" ? `${validate_component(Code_2, "Code2").$$render($$result, { size: 16 }, {}, {})}` : `${favorite.kind == "flow" ? `${validate_component(BarsStaggered, "BarsStaggered").$$render($$result, { size: 16 }, {}, {})}` : `${favorite.kind == "app" || favorite.kind == "raw_app" ? `${validate_component(Layout_dashboard, "LayoutDashboard").$$render($$result, { size: 16 }, {}, {})}` : ``}`}`}</span> <span class="text-primary ml-2 grow min-w-0 text-xs truncate">${escape$1(favorite.label)} </span></span> `;
            }
          })}`;
        })}</div> ${each(mainMenuLinks, (menuLink) => {
          return `${validate_component(MenuLink, "MenuLink").$$render($$result, Object.assign({}, { class: "!text-xs" }, menuLink, { isCollapsed }, { lightMode: true }), {}, {})}`;
        })} <div class="divide-y" role="none"><div role="none">${validate_component(MenuItem, "MenuItem").$$render(
          $$result,
          {
            href: USER_SETTINGS_HASH,
            class: twMerge("flex flex-row gap-3.5 items-center px-2 py-2 ", "text-secondary text-xs", "hover:bg-surface-hover hover:text-primary cursor-pointer")
          },
          {},
          {
            default: () => {
              return `${validate_component(Settings, "Settings").$$render($$result, { size: 14 }, {}, {})}
				Account settings`;
            }
          }
        )}</div> <div role="none"><button${add_attribute("class", twMerge("text-secondary block text-left px-2 py-2 font-normal text-xs hover:bg-surface-hover hover:text-primary w-full", "flex flex-row items-center gap-3.5 "), 0)} role="menuitem" tabindex="-1">${darkMode ? `${validate_component(Sun, "Sun").$$render($$result, { size: 14 }, {}, {})}` : `${validate_component(Moon, "Moon").$$render($$result, { size: 14 }, {}, {})}`}
				Switch theme</button> <a href="${escape$1(base, true) + "/user/workspaces"}" class="text-primary flex gap-3.5 px-2 py-2 text-xs hover:bg-surface-hover hover:text-primary" role="menuitem" tabindex="-1">${validate_component(Building, "Building").$$render($$result, { size: 14 }, {}, {})}
				All Workspaces</a> ${validate_component(MenuItem, "MenuItem").$$render(
          $$result,
          {
            href: "#",
            class: twMerge("flex flex-row gap-3.5  items-center px-2 py-2 ", "text-secondary text-xs", "hover:bg-surface-hover hover:text-primary cursor-pointer")
          },
          {},
          {
            default: () => {
              return `${validate_component(Log_out, "LogOut").$$render($$result, { size: 14 }, {}, {})}
				Sign out`;
            }
          }
        )}</div></div> ${$enterpriseLicense ? `${validate_component(MultiplayerMenu, "MultiplayerMenu").$$render($$result, {}, {}, {})}` : ``}`;
      }
    })} ${validate_component(DarkModeObserver, "DarkModeObserver").$$render(
      $$result,
      { darkMode },
      {
        darkMode: ($$value) => {
          darkMode = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_enterpriseLicense();
  return $$rendered;
});
const ContentSearchInnerItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { href } = $$props;
  createEventDispatcher();
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  return `<div class="flex flex-col gap-2"><div class="flex flex-row items-center justify-between"><a class="text-sm text-blue-500 truncate hover:underline"${add_attribute("href", href, 0)}>${escape$1(title)}</a> <div class="flex flex-row gap-2 items-center">${slots.actions ? slots.actions({}) : ``}</div></div> ${slots.default ? slots.default({}) : ``}</div>`;
});
function getCounts(n) {
  return ` (${n})`;
}
function escape(htmlStr) {
  return htmlStr.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
const ContentSearchInner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let counts;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  createEventDispatcher();
  let { search = "" } = $$props;
  async function open(nsearch) {
    await Promise.all([loadScripts(), loadResources(), loadApps(), loadFlows()]);
    if (nsearch) {
      search = nsearch;
    }
  }
  async function loadScripts() {
    scripts = await ScriptService.listSearchScript({ workspace: $workspaceStore ?? "" });
  }
  async function loadResources() {
    resources = await ResourceService.listSearchResource({ workspace: $workspaceStore ?? "" });
  }
  async function loadApps() {
    apps = await AppService.listSearchApp({ workspace: $workspaceStore ?? "" });
  }
  async function loadFlows() {
    flows = await FlowService.listSearchFlow({ workspace: $workspaceStore ?? "" });
  }
  let searchKind = "all";
  let scripts = void 0;
  let filteredScriptItems = [];
  let resources = void 0;
  let filteredResourceItems = [];
  let flows = void 0;
  let filteredFlowItems = [];
  let apps = void 0;
  let filteredAppItems = [];
  let showNbScripts = 10;
  let showNbApps = 10;
  let showNbResources = 10;
  let showNbFlows = 10;
  function resetShows() {
    showNbScripts = 10;
    showNbApps = 10;
    showNbResources = 10;
    showNbFlows = 10;
  }
  if ($$props.search === void 0 && $$bindings.search && search !== void 0) $$bindings.search(search);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.loadScripts === void 0 && $$bindings.loadScripts && loadScripts !== void 0) $$bindings.loadScripts(loadScripts);
  if ($$props.loadResources === void 0 && $$bindings.loadResources && loadResources !== void 0) $$bindings.loadResources(loadResources);
  if ($$props.loadApps === void 0 && $$bindings.loadApps && loadApps !== void 0) $$bindings.loadApps(loadApps);
  if ($$props.loadFlows === void 0 && $$bindings.loadFlows && loadFlows !== void 0) $$bindings.loadFlows(loadFlows);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    counts = search == "" || !scripts || !resources || !flows || !apps || !filteredAppItems || !filteredFlowItems || !filteredResourceItems || !filteredScriptItems ? {
      all: "",
      apps: "",
      flows: "",
      resources: "",
      scripts: ""
    } : {
      all: getCounts(filteredAppItems.length + filteredFlowItems.length + filteredResourceItems.length + filteredScriptItems.length),
      apps: getCounts(filteredAppItems.length),
      resources: getCounts(filteredResourceItems.length),
      flows: getCounts(filteredFlowItems.length),
      scripts: getCounts(filteredScriptItems.length)
    };
    search && resetShows();
    $$rendered = `${validate_component(SearchItems, "SearchItems").$$render(
      $$result,
      {
        filter: search,
        items: scripts,
        f: (s) => {
          return escape(s.content);
        },
        filteredItems: filteredScriptItems
      },
      {
        filteredItems: ($$value) => {
          filteredScriptItems = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(SearchItems, "SearchItems").$$render(
      $$result,
      {
        filter: search,
        items: resources,
        f: (s) => {
          return escape(YAML.stringify(s.value));
        },
        filteredItems: filteredResourceItems
      },
      {
        filteredItems: ($$value) => {
          filteredResourceItems = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(SearchItems, "SearchItems").$$render(
      $$result,
      {
        filter: search,
        items: flows,
        f: (s) => {
          return escape(YAML.stringify(s.value, null, 4));
        },
        filteredItems: filteredFlowItems
      },
      {
        filteredItems: ($$value) => {
          filteredFlowItems = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(SearchItems, "SearchItems").$$render(
      $$result,
      {
        filter: search,
        items: apps,
        f: (s) => {
          return escape(YAML.stringify(s.value, null, 4));
        },
        filteredItems: filteredAppItems
      },
      {
        filteredItems: ($$value) => {
          filteredAppItems = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="flex flex-col gap-2"><div class="flex gap-2 flex-wrap sticky top-0 left-0 right-0 bg-surface"><div class="p-2">${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
      $$result,
      { class: "h-10 ", selected: searchKind },
      {
        selected: ($$value) => {
          searchKind = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              small: true,
              light: true,
              value: "all",
              label: "All" + counts.all
            },
            {},
            {}
          )} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              small: true,
              light: true,
              value: "scripts",
              icon: Code_2,
              label: "Scripts" + counts.scripts
            },
            {},
            {}
          )} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              small: true,
              light: true,
              value: "resources",
              icon: Boxes,
              label: "Resources" + counts.resources
            },
            {},
            {}
          )} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              small: true,
              light: true,
              value: "flows",
              label: "Flows" + counts.flows,
              icon: FlowIcon,
              selectedColor: "#14b8a6"
            },
            {},
            {}
          )} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              small: true,
              light: true,
              value: "apps",
              label: "Apps" + counts.apps,
              icon: Layout_dashboard,
              selectedColor: "#fb923c"
            },
            {},
            {}
          )}`;
        }
      }
    )}</div></div> <div class="px-2"><div class="text-xs text-secondary">Searching among <div class="inline-flex">${scripts ? `${escape$1(scripts?.length)}` : `${validate_component(Loader_2, "Loader2").$$render($$result, { size: 10, class: "animate-spin " }, {}, {})}`}</div>
			scripts,
			<div class="inline-flex">${resources ? `${escape$1(resources?.length)}` : `${validate_component(Loader_2, "Loader2").$$render($$result, { size: 10, class: "animate-spin " }, {}, {})}`}</div>
			resources,
			<div class="inline-flex">${flows ? `${escape$1(flows?.length)}` : `${validate_component(Loader_2, "Loader2").$$render($$result, { size: 10, class: "animate-spin " }, {}, {})}`}</div>
			flows,
			<div class="inline-flex">${apps ? `${escape$1(apps?.length)}` : `${validate_component(Loader_2, "Loader2").$$render($$result, { size: 10, class: "animate-spin " }, {}, {})}`}</div>
			apps</div></div> <div${add_attribute("class", twMerge("p-2"), 0)}>${!$enterpriseLicense ? `<div class="py-1"></div> ${validate_component(Alert, "Alert").$$render(
      $$result,
      {
        title: "Content Search is an EE feature",
        type: "warning"
      },
      {},
      {
        default: () => {
          return `Without EE, content search will only search among 10 scripts, 3 flows, 3 apps and 3
				resources.`;
        }
      }
    )} <div class="py-1"></div>` : ``} ${search.trim().length > 0 ? `<div class="flex flex-col gap-4">${(searchKind == "all" || searchKind == "scripts") && filteredScriptItems?.length > 0 ? `${each(filteredScriptItems.slice(0, showNbScripts) ?? [], (item) => {
      return `${validate_component(ContentSearchInnerItem, "ContentSearchInnerItem").$$render(
        $$result,
        {
          title: `Script: ${item.path}`,
          href: `/scripts/get/${item.path}`
        },
        {},
        {
          actions: () => {
            return `${validate_component(Button, "Button").$$render(
              $$result,
              {
                href: `/scripts/get/${item.path}`,
                color: "light",
                size: "xs",
                startIcon: { icon: External_link }
              },
              {},
              {
                default: () => {
                  return `Open
								`;
                }
              }
            )} ${validate_component(Button, "Button").$$render(
              $$result,
              {
                href: `/scripts/edit/${item.path}?no_draft=true`,
                target: "_blank",
                color: "light",
                size: "xs",
                startIcon: { icon: Pen_square }
              },
              {},
              {
                default: () => {
                  return `Edit
								`;
                }
              }
            )} `;
          },
          default: () => {
            return `<pre class="text-xs border rounded-md p-2 overflow-auto max-h-40 w-full"><code><!-- HTML_TAG_START -->${item.marked}<!-- HTML_TAG_END --></code>
							</pre> `;
          }
        }
      )}`;
    })} ${filteredScriptItems.length > showNbScripts ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "light",
        size: "xs",
        startIcon: { icon: Arrow_down }
      },
      {},
      {
        default: () => {
          return `Show more scripts (${escape$1(showNbScripts)} of ${escape$1(filteredScriptItems.length)})`;
        }
      }
    )}` : ``}` : ``} ${(searchKind == "all" || searchKind == "resources") && filteredResourceItems?.length > 0 ? `${each(filteredResourceItems.slice(0, showNbResources) ?? [], (item) => {
      return `${validate_component(ContentSearchInnerItem, "ContentSearchInnerItem").$$render(
        $$result,
        {
          title: `Resource: ${item.path}`,
          href: `/resources#${item.path}`
        },
        {},
        {
          actions: () => {
            return `${validate_component(Button, "Button").$$render(
              $$result,
              {
                href: `/resources#${item.path}`,
                color: "light",
                target: "_blank",
                size: "xs",
                startIcon: { icon: Pen_square }
              },
              {},
              {
                default: () => {
                  return `Edit
								`;
                }
              }
            )} `;
          },
          default: () => {
            return `<pre class="text-xs border rounded-md p-2 overflow-auto max-h-40 w-full"><code><!-- HTML_TAG_START -->${item.marked}<!-- HTML_TAG_END --></code></pre> `;
          }
        }
      )}`;
    })} ${filteredResourceItems.length > showNbResources ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "light",
        size: "xs",
        startIcon: { icon: Arrow_down }
      },
      {},
      {
        default: () => {
          return `Show more resources (${escape$1(showNbResources)} of ${escape$1(filteredResourceItems.length)})`;
        }
      }
    )}` : ``}` : ``} ${(searchKind == "all" || searchKind == "flows") && filteredFlowItems?.length > 0 ? `${each(filteredFlowItems.slice(0, showNbFlows) ?? [], (item) => {
      return `${validate_component(ContentSearchInnerItem, "ContentSearchInnerItem").$$render(
        $$result,
        {
          title: `Flow: ${item.path}`,
          href: `/flows/get/${item.path}`
        },
        {},
        {
          actions: () => {
            return `${validate_component(Button, "Button").$$render(
              $$result,
              {
                href: `/flows/get/${item.path}`,
                color: "light",
                size: "xs",
                startIcon: { icon: External_link }
              },
              {},
              {
                default: () => {
                  return `Open
								`;
                }
              }
            )} ${validate_component(Button, "Button").$$render(
              $$result,
              {
                href: `/flows/edit/${item.path}?no_draft=true`,
                color: "light",
                target: "_blank",
                size: "xs",
                startIcon: { icon: Pen_square }
              },
              {},
              {
                default: () => {
                  return `Edit
								`;
                }
              }
            )} `;
          },
          default: () => {
            return `<pre class="text-xs border p-2 overflow-auto max-h-40 w-full"><code><!-- HTML_TAG_START -->${item.marked}<!-- HTML_TAG_END --></code></pre> `;
          }
        }
      )}`;
    })} ${filteredFlowItems.length > showNbFlows ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "light",
        size: "xs",
        startIcon: { icon: Arrow_down }
      },
      {},
      {
        default: () => {
          return `Show more flows (${escape$1(showNbFlows)} of ${escape$1(filteredFlowItems.length)})`;
        }
      }
    )}` : ``}` : ``} ${(searchKind == "all" || searchKind == "apps") && filteredAppItems?.length > 0 ? `${each(filteredAppItems.slice(0, showNbApps) ?? [], (item) => {
      return `${validate_component(ContentSearchInnerItem, "ContentSearchInnerItem").$$render(
        $$result,
        {
          title: `App: ${item.path}`,
          href: `/apps/get/${item.path}`
        },
        {},
        {
          actions: () => {
            return `${validate_component(Button, "Button").$$render(
              $$result,
              {
                href: `/apps/get/${item.path}`,
                color: "light",
                size: "xs",
                startIcon: { icon: External_link }
              },
              {},
              {
                default: () => {
                  return `Open
								`;
                }
              }
            )} ${validate_component(Button, "Button").$$render(
              $$result,
              {
                href: `/apps/edit/${item.path}?no_draft=true`,
                color: "light",
                target: "_blank",
                size: "xs",
                startIcon: { icon: Pen_square }
              },
              {},
              {
                default: () => {
                  return `Edit
								`;
                }
              }
            )} `;
          },
          default: () => {
            return `<pre class="text-xs border p-2 overflow-auto max-h-40 w-full"><code><!-- HTML_TAG_START -->${item.marked}<!-- HTML_TAG_END --></code></pre> `;
          }
        }
      )}`;
    })} ${filteredAppItems.length > showNbApps ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "light",
        size: "xs",
        startIcon: { icon: Arrow_down }
      },
      {},
      {
        default: () => {
          return `Show more apps (${escape$1(showNbApps)} of ${escape$1(filteredAppItems.length)})`;
        }
      }
    )}` : ``}` : ``}</div>` : `<div class="flex justify-center items-center h-48" data-svelte-h="svelte-ic9br"><div class="text-tertiary text-center"><div class="text-2xl font-bold">Empty Search Filter</div> <div class="text-sm">Start writing, search everywhere a path is referenced for instance</div></div></div>`}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_enterpriseLicense();
  return $$rendered;
});
const QuickMenuItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { hovered = false } = $$props;
  let { id } = $$props;
  let { label = "" } = $$props;
  let { icon = void 0 } = $$props;
  let { shortcutKey = void 0 } = $$props;
  let { containerClass = void 0 } = $$props;
  let { mouseMoved = false } = $$props;
  const dispatch = createEventDispatcher();
  onDestroy(() => {
    window.removeEventListener("keydown", handleKeydown);
  });
  async function handleKeydown(event) {
    if (hovered && event.key === "Enter") {
      event.preventDefault();
      runAction();
    }
  }
  function runAction() {
    dispatch("select");
  }
  let { kbdClass = "" } = $$props;
  let { small = true } = $$props;
  if (small) {
    kbdClass = twMerge(kbdClass, "!text-[10px]  px-1", "text-xs", "leading-none");
  } else {
    kbdClass += " !text-xs px-1.5";
  }
  if ($$props.hovered === void 0 && $$bindings.hovered && hovered !== void 0) $$bindings.hovered(hovered);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
  if ($$props.shortcutKey === void 0 && $$bindings.shortcutKey && shortcutKey !== void 0) $$bindings.shortcutKey(shortcutKey);
  if ($$props.containerClass === void 0 && $$bindings.containerClass && containerClass !== void 0) $$bindings.containerClass(containerClass);
  if ($$props.mouseMoved === void 0 && $$bindings.mouseMoved && mouseMoved !== void 0) $$bindings.mouseMoved(mouseMoved);
  if ($$props.kbdClass === void 0 && $$bindings.kbdClass && kbdClass !== void 0) $$bindings.kbdClass(kbdClass);
  if ($$props.small === void 0 && $$bindings.small && small !== void 0) $$bindings.small(small);
  return `  <div${add_attribute("id", id, 0)}${add_attribute("class", twMerge(`rounded-md w-full transition-all cursor-pointer ${hovered ? "bg-surface-hover" : ""}`, containerClass), 0)}>${$$slots.itemReplacement ? `${slots.itemReplacement ? slots.itemReplacement({}) : ``}` : `<div class="flex flex-row gap-2 items-center px-2 py-1.5 rounded-md pr-6 text-sm"><div class="w-4">${icon ? `${validate_component(icon || missing_component, "svelte:component").$$render($$result, { size: 16 }, {}, {})}` : `${shortcutKey != void 0 ? `<div class="font-bold flex items-center justify-center w-full"><span class="h-4 center-center ml-0.5 rounded border bg-surface-secondary text-primary shadow-sm font-light transition-all group-hover:border-primary-500 group-hover:text-primary-inverse"><kbd${add_attribute("class", kbdClass, 0)}>${escape$1(shortcutKey)}</kbd></span></div>` : ``}`}</div> ${escape$1(label)} ${shortcutKey != void 0 ? `<div class="ml-auto"><div class="font-bold flex items-center justify-center w-full"><span class="flex h-4 center-center ml-0.5 rounded border bg-surface-secondary text-primary shadow-sm font-light transition-all group-hover:border-primary-500 group-hover:text-primary-inverse"><kbd${add_attribute("class", kbdClass, 0)}>${escape$1(shortcutKey)}</kbd></span></div></div>` : ``}</div>`}</div>`;
});
const css = {
  code: ".quick-search-input.svelte-znsvxp{border:none!important;box-shadow:none!important;outline:none}.quick-search-input.svelte-znsvxp:focus-visible{outline:none!important}",
  map: null
};
const RUNS_PREFIX = ">";
const LOGS_PREFIX = "!";
const CONTENT_SEARCH_PREFIX = "#";
const SWITCH_MODE_PREFIX = "?";
const debouncePeriod = 1e3;
function removePrefix(str, prefix) {
  if (str.startsWith(prefix)) {
    return str.substring(prefix.length);
  }
  return str;
}
function placeholderFromPrefix(text) {
  switch (text) {
    case "":
      return "   Search or type `?` for search options";
    case RUNS_PREFIX:
      return "   Search across completed runs";
    case LOGS_PREFIX:
      return "   Search across completed runs";
    case CONTENT_SEARCH_PREFIX:
      return "   Search flows/scripts/apps by content";
    default:
      return "";
  }
}
function maxModalWidth(tab) {
  if (tab === "runs") {
    return "max-w-7xl";
  } else {
    return "max-w-4xl";
  }
}
function maxModalHeight(tab) {
  if (tab === "runs") {
    return "";
  } else if (tab === "content") {
    return "max-h-[70vh]";
  } else {
    return "max-h-[60vh]";
  }
}
const GlobalSearchModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  let open = false;
  let searchTerm = "";
  let textInput;
  let selectedWorkspace = void 0;
  let contentSearch = void 0;
  let tab = "default";
  let switchModeItems = [
    {
      search_id: "switchto:run-search",
      label: "Search across completed runs",
      action: () => switchMode("runs"),
      shortcutKey: RUNS_PREFIX,
      icon: Search
    },
    {
      search_id: "switchto:content-search",
      label: "Search scripts/flows/apps based on content",
      action: () => switchMode("content"),
      shortcutKey: CONTENT_SEARCH_PREFIX,
      icon: Search_code
    },
    {
      search_id: "switchto:log-search",
      label: "Search Windmill logs",
      action: () => switchMode("logs"),
      shortcutKey: LOGS_PREFIX,
      icon: Search
    }
  ];
  let defaultMenuItems = [
    {
      search_id: "nav:home",
      label: "Go to Home",
      action: () => gotoPage(),
      icon: Home
    },
    {
      search_id: "nav:runs",
      label: "Go to Runs",
      action: () => gotoPage(),
      icon: Play
    },
    {
      search_id: "nav:variables",
      label: "Go to Variables",
      action: () => gotoPage(),
      icon: Dollar_sign
    },
    {
      search_id: "nav:resources",
      label: "Go to Resources",
      action: () => gotoPage(),
      icon: Boxes
    },
    {
      search_id: "nav:schedules",
      label: "Go to Schedules",
      action: () => gotoPage(),
      icon: Calendar
    },
    ...switchModeItems
  ];
  let itemMap = {
    default: defaultMenuItems,
    "switch-mode": switchModeItems,
    runs: [],
    content: [],
    logs: []
  };
  async function switchPrompt(tab2) {
    if (tab2 === "default") {
      searchTerm = "";
    }
    if (tab2 === "runs") {
      searchTerm = RUNS_PREFIX;
    }
    if (tab2 === "content") {
      searchTerm = CONTENT_SEARCH_PREFIX;
    }
    if (tab2 === "switch-mode") {
      searchTerm = SWITCH_MODE_PREFIX;
    }
    if (tab2 === "logs") {
      searchTerm = LOGS_PREFIX;
    }
    selectedItem = selectItem(0);
    textInput.focus();
  }
  let opts = {};
  let uf = new uFuzzy(opts);
  let defaultMenuItemLabels = defaultMenuItems.map((item) => item.label);
  let switchModeItemLabels = switchModeItems.map((item) => item.label);
  function fuzzyFilter(filter, items, itemsPlainText) {
    if (filter === "") {
      return items;
    }
    let idxs = uf.filter(itemsPlainText, filter) ?? [];
    let info;
    try {
      info = uf.info(idxs, itemsPlainText, filter);
    } catch (e) {
      return items;
    }
    let order = uf.sort(info, itemsPlainText, filter);
    let r = [];
    for (let o of order) {
      r.push(items[info.idx[o]]);
    }
    return r;
  }
  let debounceTimeout = void 0;
  let loadingCompletedRuns = false;
  let queryParseErrors = [];
  async function handleSearch() {
    queryParseErrors = [];
    if (tab !== "default" && (searchTerm === "" || ![RUNS_PREFIX, LOGS_PREFIX, CONTENT_SEARCH_PREFIX, SWITCH_MODE_PREFIX].includes(searchTerm[0]))) {
      _switchMode("default");
    }
    if (tab != "switch-mode" && searchTerm.length > 0 && searchTerm[0] === SWITCH_MODE_PREFIX) {
      _switchMode("switch-mode");
    }
    if (tab != "logs" && searchTerm.length > 0 && searchTerm[0] === LOGS_PREFIX) {
      _switchMode("logs");
    }
    if (tab != "runs" && searchTerm.length > 0 && searchTerm[0] === RUNS_PREFIX) {
      _switchMode("runs");
    }
    if (tab != "content" && searchTerm.length > 0 && searchTerm[0] === CONTENT_SEARCH_PREFIX) {
      _switchMode("content");
    }
    if (tab === "default") {
      itemMap["default"] = fuzzyFilter(searchTerm, defaultMenuItems, defaultMenuItemLabels);
      if (combinedItems) {
        itemMap["default"] = itemMap["default"].concat(fuzzyFilter(searchTerm, combinedItems, combinedItems.map((i) => `${i.path} ${i.summary}`)));
      }
    }
    if (tab === "switch-mode") {
      itemMap["switch-mode"] = fuzzyFilter(removePrefix(searchTerm, SWITCH_MODE_PREFIX), switchModeItems, switchModeItemLabels);
    }
    if (tab === "runs") {
      const s = removePrefix(searchTerm, RUNS_PREFIX);
      clearTimeout(debounceTimeout);
      loadingCompletedRuns = true;
      debounceTimeout = setTimeout(
        async () => {
          clearTimeout(debounceTimeout);
          let searchResults;
          try {
            searchResults = await IndexSearchService.searchJobsIndex({
              searchQuery: s,
              workspace: $workspaceStore
            });
            itemMap["runs"] = searchResults.hits;
            queryParseErrors = searchResults.query_parse_errors;
          } catch (e) {
            sendUserToast(e, true);
          }
          loadingCompletedRuns = false;
          selectedItem = selectItem(0);
        },
        debouncePeriod
      );
    }
    selectedItem = selectItem(0);
  }
  function selectItem(index) {
    if (!itemMap[tab] || itemMap[tab].length <= index) {
      return void 0;
    }
    onHover(itemMap[tab][index]);
    return itemMap[tab][index];
  }
  let selectedItem;
  async function handleKeydown(event) {
    if ((!isMac() ? event.ctrlKey : event.metaKey) && event.key === "k") {
      event.preventDefault();
      await openModal();
    }
    if (open) {
      if (event.key === "Escape") {
        event.preventDefault();
        if (searchTerm.length != 0 || tab != "default") {
          switchMode("default");
        } else {
          open = false;
        }
      }
      if (event.key === "ArrowDown") {
        event.preventDefault();
        let idx = itemMap[tab].indexOf(selectedItem);
        if (idx != -1) {
          idx = (idx + 1) % itemMap[tab].length;
          selectedItem = selectItem(idx);
          let el = document.getElementById(selectedItem.search_id);
          if (el) scroll_into_view_if_needed_polyfill(el, false);
        }
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        let idx = itemMap[tab].indexOf(selectedItem);
        if (idx != -1) {
          idx = (idx - 1 + itemMap[tab].length) % itemMap[tab].length;
          selectedItem = selectItem(idx);
          let el = document.getElementById(selectedItem.search_id);
          if (el) scroll_into_view_if_needed_polyfill(el, false);
        }
      }
    }
  }
  function _switchMode(mode) {
    selectedItem = void 0;
    tab = mode;
  }
  function switchMode(mode) {
    switchPrompt(mode);
    textInput.focus();
  }
  function gotoPage(path) {
    open = false;
    searchTerm = "";
    goto();
  }
  let mouseMoved = false;
  function handleMouseMove() {
    mouseMoved = true;
  }
  onDestroy(() => {
    window.removeEventListener("keydown", handleKeydown);
    window.removeEventListener("mousemove", handleMouseMove);
  });
  let combinedItems = void 0;
  async function fetchCombinedItems() {
    const scripts = await ScriptService.listScripts({ workspace: $workspaceStore });
    const flows = await FlowService.listFlows({ workspace: $workspaceStore });
    const apps = await AppService.listApps({ workspace: $workspaceStore });
    const raw_apps = await RawAppService.listRawApps({ workspace: $workspaceStore });
    let combinedItems2 = [
      ...flows.map((x) => ({
        ...x,
        type: "flow",
        time: new Date(x.edited_at).getTime(),
        search_id: x.path
      })),
      ...scripts.map((x) => ({
        ...x,
        type: "script",
        time: new Date(x.created_at).getTime(),
        search_id: x.path
      })),
      ...apps.map((x) => ({
        ...x,
        type: "app",
        time: new Date(x.edited_at).getTime(),
        search_id: x.path
      })),
      ...raw_apps.map((x) => ({
        ...x,
        type: "raw_app",
        time: new Date(x.edited_at).getTime(),
        search_id: x.path
      }))
    ].sort((a, b) => a.starred != b.starred ? a.starred ? -1 : 1 : a.time - b.time > 0 ? -1 : 1);
    return combinedItems2;
  }
  function iconForWindmillItem(type) {
    switch (type) {
      case "flow":
        return BarsStaggered;
      case "script":
        return Code_2;
      case "app":
        return Layout_dashboard;
      case "raw_app":
        return Layout_dashboard;
    }
  }
  function onHover(selectedItem2) {
    if (tab === "runs") {
      selectedWorkspace = selectedItem2?.document?.workspace_id[0];
    }
  }
  async function openSearchWithPrefilledText(text) {
    await openModal();
    searchTerm = text ?? searchTerm;
    await handleSearch();
  }
  async function focusTextInput() {
    await tick();
    if (open) {
      if (combinedItems == void 0) {
        combinedItems = await fetchCombinedItems();
        handleSearch();
      }
      selectedItem = selectItem(0);
    }
  }
  async function openModal() {
    open = !open;
    focusTextInput();
  }
  if ($$props.openSearchWithPrefilledText === void 0 && $$bindings.openSearchWithPrefilledText && openSearchWithPrefilledText !== void 0) $$bindings.openSearchWithPrefilledText(openSearchWithPrefilledText);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    tab === "content" && contentSearch?.open();
    {
      handleSearch();
    }
    $$rendered = `${open ? `${validate_component(Portal, "Portal").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="${escape$1(null_to_empty(twMerge(`fixed top-0 bottom-0 left-0 right-0 transition-all duration-50 flex items-start justify-center`, " bg-black bg-opacity-40", "z-[1100]")), true) + " svelte-znsvxp"}"><div class="${escape$1(maxModalWidth(tab), true) + " w-full mt-36 bg-surface rounded-lg relative svelte-znsvxp"}"><div class="px-4 py-2 flex flex-row gap-1 items-center border-b">${validate_component(Search, "Search").$$render($$result, { size: "16" }, {}, {})} <div class="relative inline-block w-full"><input id="quickSearchInput" type="text" class="quick-search-input svelte-znsvxp"${add_attribute("this", textInput, 0)}${add_attribute("value", searchTerm, 0)}> <label for="quickSearchInput" class="absolute top-1/2 left-2 transform -translate-y-1/2 pointer-events-none text-gray-400 transition-all duration-200 whitespace-pre">${escape$1(placeholderFromPrefix(searchTerm))}</label></div> ${queryParseErrors.length > 0 ? `${validate_component(Popover, "Popover").$$render(
          $$result,
          {
            notClickable: true,
            placement: "bottom-start"
          },
          {},
          {
            text: () => {
              return `Some of your search terms have been ignored because one or more parse errors:<br><br> <ul>${each(queryParseErrors, (msg) => {
                return `<li>- ${escape$1(msg)}</li>`;
              })}</ul> `;
            },
            default: () => {
              return `${validate_component(Alert_triangle, "AlertTriangle").$$render($$result, { size: 16, class: "text-yellow-500" }, {}, {})}`;
            }
          }
        )}` : ``}</div> <div class="${"overflow-y-auto relative " + escape$1(maxModalHeight(tab), true) + " svelte-znsvxp"}">${tab === "default" || tab === "switch-mode" ? (() => {
          let items = (itemMap[tab] ?? []).filter((e) => defaultMenuItems.includes(e));
          return ` ${items.length > 0 ? `<div${add_attribute("class", tab === "switch-mode" ? "p-2" : "p-2 border-b", 0)}>${each(items, (el) => {
            return `${validate_component(QuickMenuItem, "QuickMenuItem").$$render(
              $$result,
              {
                id: el?.search_id,
                hovered: el?.search_id === selectedItem?.search_id,
                label: el?.label,
                icon: el?.icon,
                shortcutKey: el?.shortcutKey,
                mouseMoved
              },
              {
                mouseMoved: ($$value) => {
                  mouseMoved = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
          })}</div>` : ``}`;
        })() : ``} ${tab === "default" ? `<div class="p-2">${(itemMap[tab] ?? []).filter((e) => (combinedItems ?? []).includes(e)).length > 0 ? `<div class="py-2 px-1 text-xs font-semibold text-tertiary" data-svelte-h="svelte-5nner">Flows/Scripts/Apps</div> ${each((itemMap[tab] ?? []).filter((e) => (combinedItems ?? []).includes(e)), (el) => {
          return `${validate_component(QuickMenuItem, "QuickMenuItem").$$render(
            $$result,
            {
              id: el?.search_id,
              hovered: el?.path === selectedItem?.path,
              label: (el.summary ? `${el.summary} - ` : "") + el.path + (el.starred ? " ★" : ""),
              icon: iconForWindmillItem(el.type),
              mouseMoved
            },
            {
              mouseMoved: ($$value) => {
                mouseMoved = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        })}` : ``} ${(itemMap[tab] ?? []).length === 0 ? `<div class="flex w-full justify-center items-center" data-svelte-h="svelte-amhjen"><div class="text-tertiary text-center"><div class="text-2xl font-bold">Nothing found</div> <div class="text-sm">Tip: press \`esc\` to quickly clear the search bar</div></div></div>` : ``}</div>` : `${tab === "content" ? `${validate_component(ContentSearchInner, "ContentSearchInner").$$render(
          $$result,
          {
            search: removePrefix(searchTerm, "#"),
            this: contentSearch
          },
          {
            this: ($$value) => {
              contentSearch = $$value;
              $$settled = false;
            }
          },
          {}
        )}` : `${tab === "logs" ? `<div class="p-2">${validate_component(Alert, "Alert").$$render(
          $$result,
          {
            title: "Service log search is coming soon",
            type: "info"
          },
          {},
          {
            default: () => {
              return `Full text search on windmill&#39;s service logs is coming soon`;
            }
          }
        )}</div>` : `${tab === "runs" ? `<div class="flex h-full p-2 divide-x">${loadingCompletedRuns ? `<div class="flex w-full justify-center items-center h-48"><div class="text-tertiary text-center">${validate_component(Loader_2, "Loader2").$$render($$result, { size: 34, class: "animate-spin" }, {}, {})}</div></div>` : `${itemMap["runs"] && itemMap["runs"].length > 0 ? `<div class="w-4/12 overflow-y-auto max-h-[70vh]">${each(itemMap["runs"] ?? [], (r) => {
          return `${validate_component(QuickMenuItem, "QuickMenuItem").$$render(
            $$result,
            {
              id: r?.document.id[0],
              hovered: selectedItem && r?.document.id[0] === selectedItem?.document.id[0],
              icon: r?.icon,
              containerClass: "rounded-md px-2 py-1 my-2",
              mouseMoved
            },
            {
              mouseMoved: ($$value) => {
                mouseMoved = $$value;
                $$settled = false;
              }
            },
            {
              itemReplacement: () => {
                return `<div class="${escape$1(
                  null_to_empty(twMerge(`w-full flex flex-row items-center gap-4 transition-all`, r?.document.id === selectedItem?.document?.id ? "bg-surface-hover" : "")),
                  true
                ) + " svelte-znsvxp"}"><div class="${"rounded-full w-2 h-2 " + escape$1(r?.document.success[0] ? "bg-green-400" : "bg-red-400", true)}"></div> <div class="flex flex-col gap-2"><div class="text-xs">${escape$1(r?.document.script_path)}</div> <div class="flex flex-row gap-2"><div class="whitespace-nowrap col-span-2 !text-tertiary !text-2xs overflow-hidden text-ellipsis flex-shrink text-center">${escape$1(displayDateOnly(new Date(r?.document.created_at[0])))}</div> <div class="whitespace-nowrap col-span-2 !text-tertiary !text-2xs overflow-hidden text-ellipsis flex-shrink text-center">${validate_component(TimeAgo, "TimeAgo").$$render($$result, { date: r?.document.created_at[0] ?? "" }, {}, {})} </div></div> </div></div> `;
              }
            }
          )}`;
        })}</div> ${selectedItem === void 0 ? `Select a result to preview` : `<div class="w-8/12 overflow-y-scroll max-h-[70vh]">${validate_component(JobPreview, "JobPreview").$$render(
          $$result,
          {
            id: selectedItem?.document?.id[0],
            workspace: selectedWorkspace
          },
          {},
          {}
        )}</div>`}` : `<div class="flex w-full justify-center items-center h-48"><div class="text-tertiary text-center">${searchTerm === RUNS_PREFIX ? `<div class="text-2xl font-bold" data-svelte-h="svelte-6lpg86">Enter your search terms</div> <div class="text-sm" data-svelte-h="svelte-1nrx18y">Start typing to do full-text search across completed runs</div>` : `<div class="text-2xl font-bold" data-svelte-h="svelte-40tib">No runs found</div> <div class="text-sm" data-svelte-h="svelte-15e8ynv">There were no completed runs that match your query</div>`} <div class="text-sm" data-svelte-h="svelte-qjs8l7">Note that new runs might take a while to become searchable (by default ~5min)</div> ${!$enterpriseLicense ? `<div class="py-6"></div> ${validate_component(Alert, "Alert").$$render(
          $$result,
          {
            title: "This is an EE feature",
            type: "warning"
          },
          {},
          {
            default: () => {
              return `Full-text search on jobs is only available on EE.`;
            }
          }
        )}` : ``}</div></div>`}`}</div>` : ``}`}`}`}</div></div></div>`;
      }
    })}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_enterpriseLicense();
  return $$rendered;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $defaultScripts, $$unsubscribe_defaultScripts;
  let $page, $$unsubscribe_page;
  let $hubBaseUrlStore, $$unsubscribe_hubBaseUrlStore;
  let $$unsubscribe_workspaceUsageStore;
  let $$unsubscribe_usageStore;
  let $starStore, $$unsubscribe_starStore;
  let $superadmin, $$unsubscribe_superadmin;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_defaultScripts = subscribe(defaultScripts, (value) => $defaultScripts = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_hubBaseUrlStore = subscribe(hubBaseUrlStore, (value) => $hubBaseUrlStore = value);
  $$unsubscribe_workspaceUsageStore = subscribe(workspaceUsageStore, (value) => value);
  $$unsubscribe_usageStore = subscribe(usageStore, (value) => value);
  $$unsubscribe_starStore = subscribe(starStore, (value) => $starStore = value);
  $$unsubscribe_superadmin = subscribe(superadmin, (value) => $superadmin = value);
  OpenAPI.WITH_CREDENTIALS = true;
  let globalSearchModal = void 0;
  let isCollapsed = false;
  let userSettings;
  let superadminSettings;
  let menuHidden = false;
  if ($page.status == 404) {
    goto$1("/user/login");
  }
  function onQueryChangeUserSettings() {
    if (userSettings && $page.url.hash === USER_SETTINGS_HASH) {
      userSettings.openDrawer();
    }
  }
  function onQueryChangeAdminSettings() {
    if (superadminSettings && $page.url.hash === SUPERADMIN_SETTINGS_HASH) {
      superadminSettings.openDrawer();
    }
  }
  function onQueryChange() {
    let queryWorkspace = $page.url.searchParams.get("workspace");
    if (queryWorkspace) {
      set_store_value(workspaceStore, $workspaceStore = queryWorkspace, $workspaceStore);
    }
    menuHidden = $page.url.searchParams.get("nomenubar") === "true";
  }
  async function updateUserStore(workspace) {
    if (workspace) {
      try {
        localStorage.setItem("workspace", String(workspace));
      } catch (e) {
        console.error("Could not persist workspace to local storage", e);
      }
      const user = await getUserExt(workspace);
      userStore.set(user);
    } else {
      userStore.set(void 0);
    }
  }
  let favoriteLinks = [];
  function onLoad() {
    loadFavorites();
    loadUsage();
    syncTutorialsTodos();
    loadHubBaseUrl();
  }
  async function loadUsage() {
  }
  async function loadHubBaseUrl() {
    set_store_value(hubBaseUrlStore, $hubBaseUrlStore = await SettingService.getGlobal({ key: "hub_base_url" }) ?? "https://hub.windmill.dev", $hubBaseUrlStore);
  }
  async function loadFavorites() {
    const scripts = await ScriptService.listScripts({
      workspace: $workspaceStore ?? "",
      starredOnly: true,
      includeWithoutMain: true
    });
    const flows = await FlowService.listFlows({
      workspace: $workspaceStore ?? "",
      starredOnly: true
    });
    const apps = await AppService.listApps({
      workspace: $workspaceStore ?? "",
      starredOnly: true
    });
    const raw_apps = await RawAppService.listRawApps({
      workspace: $workspaceStore ?? "",
      starredOnly: true
    });
    favoriteLinks = [
      ...scripts.map((s) => ({
        label: s.summary || s.path,
        href: `${base$1}/scripts/get/${s.hash}`,
        kind: "script"
      })),
      ...flows.map((f) => ({
        label: f.summary || f.path,
        href: `${base$1}/flows/get/${f.path}`,
        kind: "flow"
      })),
      ...apps.map((f) => ({
        label: f.summary || f.path,
        href: `${base$1}/apps/get/${f.path}`,
        kind: "app"
      })),
      ...raw_apps.map((f) => ({
        label: f.summary || f.path,
        href: `${base$1}/apps/get_raw/${f.version}/${f.path}`,
        kind: "raw_app"
      }))
    ];
  }
  let devOnly = $page.url.pathname.startsWith(base$1 + "/scripts/dev");
  async function loadCopilot(workspace) {
    workspacedOpenai.init(workspace);
    try {
      copilotInfo.set(await WorkspaceService.getCopilotInfo({ workspace }));
    } catch (err) {
      copilotInfo.set({
        exists_openai_resource_path: false,
        code_completion_enabled: false
      });
      console.error("Could not get copilot info");
    }
  }
  workspaceStore.subscribe(async (workspace) => {
    if (workspace) {
      loadCopilot(workspace);
    }
  });
  async function loadDefaultScripts(workspace, user) {
    if (!user?.operator) {
      set_store_value(defaultScripts, $defaultScripts = await WorkspaceService.getDefaultScripts({ workspace }), $defaultScripts);
    }
  }
  let timeout;
  async function onUserStore(u) {
    if (u && timeout) {
      clearTimeout(timeout);
      timeout = void 0;
    } else if (!u) {
      timeout = setTimeout(
        async () => {
          if (!$userStore && $workspaceStore) {
            set_store_value(userStore, $userStore = await getUserExt($workspaceStore), $userStore);
          }
        },
        5e3
      );
    }
  }
  function openSearchModal(text) {
    globalSearchModal?.openSearchWithPrefilledText(text);
  }
  setContext("openSearchWithPrefilledText", openSearchModal);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $page.url && userSettings != void 0 && onQueryChangeUserSettings();
    $page.url && superadminSettings != void 0 && onQueryChangeAdminSettings();
    $page.url && onQueryChange();
    {
      updateUserStore($workspaceStore);
    }
    $workspaceStore && $starStore && onLoad();
    {
      onUserStore($userStore);
    }
    $workspaceStore && $userStore && loadDefaultScripts($workspaceStore, $userStore);
    $$rendered = ` ${validate_component(UserSettings, "UserSettings").$$render(
      $$result,
      { this: userSettings },
      {
        this: ($$value) => {
          userSettings = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${$page.status == 404 ? `${validate_component(CenteredModal, "CenteredModal").$$render(
      $$result,
      {
        title: "Page not found, redirecting you to login"
      },
      {},
      {
        default: () => {
          return `<div class="w-full"><div class="block m-auto w-20">${validate_component(WindmillIcon, "WindmillIcon").$$render(
            $$result,
            {
              height: "80px",
              width: "80px",
              spin: "fast"
            },
            {},
            {}
          )}</div></div>`;
        }
      }
    )}` : `${$userStore ? `${validate_component(GlobalSearchModal, "GlobalSearchModal").$$render(
      $$result,
      { this: globalSearchModal },
      {
        this: ($$value) => {
          globalSearchModal = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${$superadmin ? `${validate_component(SuperadminSettings, "SuperadminSettings").$$render(
      $$result,
      { this: superadminSettings },
      {
        this: ($$value) => {
          superadminSettings = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} <div>${!menuHidden ? `${!$userStore?.operator ? `${`<div id="sidebar"${add_attribute("class", classNames("flex flex-col fixed inset-y-0 transition-all ease-in-out duration-200 shadow-md z-40 ", "md:w-40", devOnly ? "!hidden" : ""), 0)}><div class="flex-1 flex flex-col min-h-0 h-screen shadow-lg dark:bg-[#1e232e] bg-[#202125] !dark"><button><div class="${[
      "flex-row flex-shrink-0 px-3.5 py-3.5 text-opacity-70 h-12 flex items-center gap-1.5",
      "w-40"
    ].join(" ").trim()}"><div${add_classes("mr-1".trim())}>${validate_component(WindmillIcon, "WindmillIcon").$$render(
      $$result,
      {
        white: true,
        height: "20px",
        width: "20px"
      },
      {},
      {}
    )}</div> ${`<div class="text-sm mt-0.5 text-white" data-svelte-h="svelte-39rk57">Windmill</div>`}</div></button> <div class="px-2 py-4 space-y-2 border-y border-gray-700">${validate_component(WorkspaceMenu, "WorkspaceMenu").$$render($$result, { isCollapsed }, {}, {})} ${validate_component(FavoriteMenu, "FavoriteMenu").$$render($$result, { favoriteLinks, isCollapsed }, {}, {})} ${validate_component(MenuButton, "MenuButton").$$render(
      $$result,
      {
        stopPropagationOnClick: true,
        isCollapsed,
        icon: Search,
        label: "Search",
        class: "!text-xs",
        shortcut: `${getModifierKey()}k`
      },
      {},
      {}
    )}</div> ${validate_component(SidebarContent, "SidebarContent").$$render($$result, { isCollapsed }, {}, {})} <div class="flex-shrink-0 flex px-4 pb-3.5"><button>${validate_component(Arrow_left, "ArrowLeft").$$render(
      $$result,
      {
        size: 16,
        class: classNames("flex-shrink-0 h-4 w-4 transition-all ease-in-out duration-200 text-white", "rotate-0")
      },
      {},
      {}
    )}</button></div></div></div>`}` : `<div class="absolute top-2 left-2 z5000">${validate_component(OperatorMenu, "OperatorMenu").$$render($$result, { favoriteLinks }, {}, {})}</div>`} <div${add_attribute("class", classNames("fixed inset-0 dark:bg-[#1e232e] bg-[#202125] dark:bg-opacity-75 bg-opacity-75 transition-opacity ease-linear duration-300  !dark", "opacity-0"), 0)}><div${add_attribute("class", twMerge("fixed inset-0 flex ", "-z-0"), 0)}><div${add_attribute("class", classNames("relative flex-1 flex flex-col max-w-min w-full bg-surface transition ease-in-out duration-100 transform", "-translate-x-full"), 0)}><div${add_attribute("class", classNames("absolute top-0 right-0 -mr-12 pt-2 ease-in-out duration-100", "opacity-0"), 0)}><button type="button" class="ml-1 flex items-center justify-center h-8 w-8 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white border border-white" data-svelte-h="svelte-1sxkpin"><svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="dark:bg-[#1e232e] bg-[#202125] h-full !dark"><div class="${[
      "flex gap-x-2 flex-shrink-0 p-4 font-semibold text-gray-200 w-10",
      "w-40"
    ].join(" ").trim()}">${validate_component(WindmillIcon, "WindmillIcon").$$render(
      $$result,
      {
        white: true,
        height: "20px",
        width: "20px"
      },
      {},
      {}
    )} ${`Windmill`}</div> <div class="px-2 py-4 space-y-2 border-y border-gray-500">${validate_component(WorkspaceMenu, "WorkspaceMenu").$$render($$result, {}, {}, {})} ${validate_component(FavoriteMenu, "FavoriteMenu").$$render($$result, { favoriteLinks }, {}, {})} ${validate_component(MenuButton, "MenuButton").$$render(
      $$result,
      {
        stopPropagationOnClick: true,
        isCollapsed,
        icon: Search,
        label: "Search",
        class: "!text-xs",
        shortcut: `${getModifierKey()}k`
      },
      {},
      {}
    )}</div> ${validate_component(SidebarContent, "SidebarContent").$$render($$result, { isCollapsed }, {}, {})}</div></div></div></div>` : ``} <div id="content"${add_attribute(
      "class",
      classNames(
        "w-full flex flex-col flex-1 h-full",
        devOnly || $userStore?.operator ? "!pl-0" : "md:pl-40",
        "transition-all ease-in-out duration-200"
      ),
      0
    )}><main class="min-h-screen"><div class="relative w-full h-full"><div${add_attribute("class", classNames("py-2 px-2 sm:px-4 md:px-8 flex justify-between items-center shadow-sm max-w-7xl mx-auto md:hidden", devOnly || $userStore?.operator ? "hidden" : ""), 0)}><button type="button" class="h-8 w-8 inline-flex items-center justify-center rounded-md text-tertiary hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" data-svelte-h="svelte-1mnenjc"><svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg></button></div> ${slots.default ? slots.default({}) : ``}</div></main></div></div>` : `${validate_component(CenteredModal, "CenteredModal").$$render($$result, { title: "Loading user..." }, {}, {
      default: () => {
        return `<div class="w-full"><div class="block m-auto w-16">${validate_component(WindmillIcon, "WindmillIcon").$$render(
          $$result,
          {
            height: "60px",
            width: "60px",
            spin: "fast"
          },
          {},
          {}
        )}</div></div>`;
      }
    })}`}`}`;
  } while (!$$settled);
  $$unsubscribe_userStore();
  $$unsubscribe_workspaceStore();
  $$unsubscribe_defaultScripts();
  $$unsubscribe_page();
  $$unsubscribe_hubBaseUrlStore();
  $$unsubscribe_workspaceUsageStore();
  $$unsubscribe_usageStore();
  $$unsubscribe_starStore();
  $$unsubscribe_superadmin();
  return $$rendered;
});
export {
  Layout as default
};
