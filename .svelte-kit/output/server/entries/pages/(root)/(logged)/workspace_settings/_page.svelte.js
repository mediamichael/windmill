import { c as create_ssr_component, v as validate_component, s as subscribe, f as each, b as add_attribute, e as escape, d as createEventDispatcher, o as onDestroy } from "../../../../../chunks/ssr.js";
import { r as replaceState } from "../../../../../chunks/client.js";
import { p as page } from "../../../../../chunks/stores.js";
import { C as CenteredPage } from "../../../../../chunks/CenteredPage.js";
import { A as Alert } from "../../../../../chunks/Alert.js";
import { B as Badge } from "../../../../../chunks/Badge.js";
import { B as Button, p as truncate, k as capitalize, P as Portal, b as emptyString, C as Check_circle_2, X as X_circle } from "../../../../../chunks/toast.js";
/* empty css                                                         */
import { T as Tooltip } from "../../../../../chunks/Tooltip.js";
import "../../../../../chunks/common.js";
import { T as Tabs, a as Tab } from "../../../../../chunks/Tabs.js";
import { w as workspaceStore, a as usersWorkspaceStore, e as enterpriseLicense, q as globalEmailInvite, b as superadmin, u as userStore, h as hubBaseUrlStore } from "../../../../../chunks/stores2.js";
import "../../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import "yaml";
import "minimatch";
import { T as Toggle } from "../../../../../chunks/Toggle.js";
import { X } from "../../../../../chunks/x.js";
import { P as Plus } from "../../../../../chunks/plus.js";
import { E as ErrorOrRecoveryHandler } from "../../../../../chunks/ErrorOrRecoveryHandler.js";
import { P as PageHeader } from "../../../../../chunks/PageHeader.js";
import { b as ResourcePicker } from "../../../../../chunks/SchemaForm.js";
import { S as ScriptPicker } from "../../../../../chunks/ScriptPicker.js";
import { c as S3FilePicker, R as Rotate_cw } from "../../../../../chunks/LightweightSchemaForm.js";
import { g as SettingService, W as WorkspaceService, U as UserService, R as ResourceService } from "../../../../../chunks/services.gen.js";
import "../../../../../chunks/index2.js";
import { P as Popup } from "../../../../../chunks/Popup.js";
import { T as ToggleButtonGroup, a as ToggleButton } from "../../../../../chunks/ToggleButtonGroup.js";
import { I as Icon } from "../../../../../chunks/Icon.js";
import { S as Skeleton } from "../../../../../chunks/Skeleton.js";
import { D as DataTable, H as Head, C as Cell } from "../../../../../chunks/Head.js";
import { S as SearchItems } from "../../../../../chunks/SearchItems.js";
import { R as Row } from "../../../../../chunks/Row.js";
import { a as ConfirmationModal } from "../../../../../chunks/ConfirmationModal.js";
import { i as isCloudHosted } from "../../../../../chunks/cloud.js";
import { S as Search } from "../../../../../chunks/search.js";
import { L as Loader_2 } from "../../../../../chunks/loader-2.js";
import { B as BarsStaggered } from "../../../../../chunks/util.js";
import { b as base } from "../../../../../chunks/base.js";
import { twMerge } from "tailwind-merge";
import { E as External_link } from "../../../../../chunks/Popover.js";
import { T as TestOpenaiKey } from "../../../../../chunks/TestOpenaiKey.js";
import { M as Modal } from "../../../../../chunks/Modal.js";
import { P as Pen } from "../../../../../chunks/pen.js";
import { S as Save } from "../../../../../chunks/VariableEditor.js";
import { C as Code_2 } from "../../../../../chunks/code-2.js";
const Mail_plus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"
      }
    ],
    [
      "path",
      {
        "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
      }
    ],
    ["path", { "d": "M19 16v6" }],
    ["path", { "d": "M16 19h6" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "mail-plus" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Mails = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "16",
        "height": "13",
        "x": "6",
        "y": "4",
        "rx": "2"
      }
    ],
    [
      "path",
      {
        "d": "m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"
      }
    ],
    ["path", { "d": "M2 8v11c0 1.1.9 2 2 2h14" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "mails" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Slack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "3",
        "height": "8",
        "x": "13",
        "y": "2",
        "rx": "1.5"
      }
    ],
    [
      "path",
      {
        "d": "M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"
      }
    ],
    [
      "rect",
      {
        "width": "3",
        "height": "8",
        "x": "8",
        "y": "14",
        "rx": "1.5"
      }
    ],
    [
      "path",
      {
        "d": "M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"
      }
    ],
    [
      "rect",
      {
        "width": "8",
        "height": "3",
        "x": "14",
        "y": "13",
        "rx": "1.5"
      }
    ],
    [
      "path",
      {
        "d": "M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"
      }
    ],
    [
      "rect",
      {
        "width": "8",
        "height": "3",
        "x": "2",
        "y": "8",
        "rx": "1.5"
      }
    ],
    ["path", { "d": "M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "slack" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const User_plus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
      }
    ],
    ["circle", { "cx": "9", "cy": "7", "r": "4" }],
    [
      "line",
      {
        "x1": "19",
        "x2": "19",
        "y1": "8",
        "y2": "14"
      }
    ],
    [
      "line",
      {
        "x1": "22",
        "x2": "16",
        "y1": "11",
        "y2": "11"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "user-plus" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const DeployToSetting = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let deployableWorkspaces;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $usersWorkspaceStore, $$unsubscribe_usersWorkspaceStore;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_usersWorkspaceStore = subscribe(usersWorkspaceStore, (value) => $usersWorkspaceStore = value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  const all_ok = {
    scripts: true,
    flows: true,
    apps: true,
    resources: true,
    variables: true,
    secrets: true
  };
  let { workspaceToDeployTo } = $$props;
  let { deployUiSettings = { include_path: [], include_type: all_ok } } = $$props;
  if ($$props.workspaceToDeployTo === void 0 && $$bindings.workspaceToDeployTo && workspaceToDeployTo !== void 0) $$bindings.workspaceToDeployTo(workspaceToDeployTo);
  if ($$props.deployUiSettings === void 0 && $$bindings.deployUiSettings && deployUiSettings !== void 0) $$bindings.deployUiSettings(deployUiSettings);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    deployableWorkspaces = $usersWorkspaceStore?.workspaces.map((w) => w.id).filter((w) => w != $workspaceStore);
    $$rendered = `<h3 class="mt-8" data-svelte-h="svelte-4bzqfg">Workspace to link to</h3> <div class="flex min-w-0 mt-2"><select>${deployableWorkspaces?.length == 0 ? `<option disabled value="No workspace deployable to" data-svelte-h="svelte-1vhngoc">No workspace deployable to</option>` : ``}<option value="" data-svelte-h="svelte-tqvxxz">Disable deployment</option>${each(deployableWorkspaces ?? [], (name) => {
      return `<option${add_attribute("value", name, 0)}>${escape(name)}</option>`;
    })}</select></div> <h3 class="mt-6 mb-3" data-svelte-h="svelte-77n60t">Deployable items</h3> <div class="flex flex-wrap gap-20"><div class="max-w-md w-full">${Array.isArray(deployUiSettings?.include_path) ? `<h4 class="flex gap-2 mb-4">Filter on path${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
      default: () => {
        return `Only scripts, flows and apps with their path matching one of those filters will be allowed
					to be deployed in the deploy UI. The filters allow &#39;*&#39;&#39; and &#39;**&#39; characters, with &#39;*&#39;&#39;
					matching any character allowed in paths until the next slash (/) and &#39;**&#39; matching
					anything including slashes.`;
      }
    })}</h4> ${each(deployUiSettings.include_path ?? [], (regexpPath, idx) => {
      return `<div class="flex mt-1 items-center"><input type="text" id="arg-input-array"${add_attribute("value", regexpPath, 0)}> <button class="rounded-full p-1 bg-surface-secondary duration-200 hover:bg-surface-hover ml-2" aria-label="Clear">${validate_component(X, "X").$$render($$result, { size: 14 }, {}, {})}</button> </div>`;
    })}` : ``} <div class="flex mt-2">${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "border",
        color: "light",
        size: "xs",
        btnClasses: "mt-1",
        id: "deploy-ui-add-path-filter",
        startIcon: { icon: Plus }
      },
      {},
      {
        default: () => {
          return `Add filter`;
        }
      }
    )}</div></div> <div class="max-w-md w-full"><h4 class="flex gap-2 mb-4">Filter on type${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
      default: () => {
        return `You can filter which types of item can be deployed to the production workspace. By default
				everything is deployable.`;
      }
    })}</h4> <div class="flex flex-col gap-2 mt-1">${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        options: { right: "Scripts" },
        checked: deployUiSettings.include_type.scripts
      },
      {
        checked: ($$value) => {
          deployUiSettings.include_type.scripts = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        options: { right: "Flows" },
        checked: deployUiSettings.include_type.flows
      },
      {
        checked: ($$value) => {
          deployUiSettings.include_type.flows = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        options: { right: "Apps" },
        checked: deployUiSettings.include_type.apps
      },
      {
        checked: ($$value) => {
          deployUiSettings.include_type.apps = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        options: { right: "Resources" },
        checked: deployUiSettings.include_type.resources
      },
      {
        checked: ($$value) => {
          deployUiSettings.include_type.resources = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="flex gap-3">${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        options: { right: "Variables " },
        checked: deployUiSettings.include_type.variables
      },
      {
        checked: ($$value) => {
          deployUiSettings.include_type.variables = $$value;
          $$settled = false;
        }
      },
      {}
    )} <span data-svelte-h="svelte-1s4sarz">-</span> ${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        disabled: !deployUiSettings.include_type.variables,
        options: { left: "Include secrets" },
        checked: deployUiSettings.include_type.secrets
      },
      {
        checked: ($$value) => {
          deployUiSettings.include_type.secrets = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div></div></div> ${$enterpriseLicense ? `<div class="flex mt-5 mb-5 gap-1">${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "blue",
        disabled: workspaceToDeployTo == void 0
      },
      {},
      {
        default: () => {
          return `Save Deployment UI settings`;
        }
      }
    )}</div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_usersWorkspaceStore();
  $$unsubscribe_enterpriseLicense();
  return $$rendered;
});
const AddUser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_globalEmailInvite;
  let $$unsubscribe_superadmin;
  let $$unsubscribe_workspaceStore;
  $$unsubscribe_globalEmailInvite = subscribe(globalEmailInvite, (value) => value);
  $$unsubscribe_superadmin = subscribe(superadmin, (value) => value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  createEventDispatcher();
  let email;
  let username;
  let automateUsernameCreation = false;
  async function getAutomateUsernameCreationSetting() {
    automateUsernameCreation = await SettingService.getGlobal({ key: "automate_username_creation" }) ?? false;
  }
  getAutomateUsernameCreationSetting();
  let selected = "developer";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Popup, "Popup").$$render(
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
              color: "dark",
              size: "xs",
              nonCaptureEvent: true,
              startIcon: { icon: User_plus }
            },
            {},
            {
              default: () => {
                return `Add new user`;
              }
            }
          )} `;
        },
        default: () => {
          return `<div class="flex flex-col w-72 p-2"><span class="text-sm mb-2 leading-6 font-semibold" data-svelte-h="svelte-5460b4">Add a new user</span> <span class="text-xs mb-1 leading-6" data-svelte-h="svelte-8pog62">Email</span> <input type="email mb-1" placeholder="email"${add_attribute("value", email, 0)}> ${!automateUsernameCreation ? `<span class="text-xs mb-1 pt-2 leading-6" data-svelte-h="svelte-dnd91b">Username</span> <input type="text" placeholder="username"${add_attribute("value", username, 0)}>` : ``} <span class="text-xs mb-1 pt-2 leading-6" data-svelte-h="svelte-17x6v23">Role</span> ${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
            $$result,
            { class: "mb-4", selected },
            {
              selected: ($$value) => {
                selected = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${validate_component(ToggleButton, "ToggleButton").$$render(
                  $$result,
                  {
                    value: "operator",
                    size: "sm",
                    label: "Operator",
                    tooltip: "An operator can only execute and view scripts/flows/apps from your workspace, and only those that he has visibility on."
                  },
                  {},
                  {}
                )} ${validate_component(ToggleButton, "ToggleButton").$$render(
                  $$result,
                  {
                    position: "center",
                    value: "developer",
                    size: "sm",
                    label: "Developer",
                    tooltip: "A Developer can execute and view scripts/flows/apps, but they can also create new ones and edit those they are allowed to by their path (either u/ or Writer or Admin of their folder found at /f)."
                  },
                  {},
                  {}
                )} ${validate_component(ToggleButton, "ToggleButton").$$render(
                  $$result,
                  {
                    position: "right",
                    value: "admin",
                    size: "sm",
                    label: "Admin",
                    tooltip: "An admin has full control over a specific Windmill workspace, including the ability to manage users, edit entities, and control permissions within the workspace."
                  },
                  {},
                  {}
                )}`;
              }
            }
          )} ${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "contained",
              color: "blue",
              size: "sm",
              disabled: email === void 0
            },
            {},
            {
              default: () => {
                return `Add`;
              }
            }
          )}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_globalEmailInvite();
  $$unsubscribe_superadmin();
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const InviteUser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_globalEmailInvite;
  let $$unsubscribe_superadmin;
  let $$unsubscribe_workspaceStore;
  $$unsubscribe_globalEmailInvite = subscribe(globalEmailInvite, (value) => value);
  $$unsubscribe_superadmin = subscribe(superadmin, (value) => value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  createEventDispatcher();
  let email;
  let selected = "developer";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Popup, "Popup").$$render(
      $$result,
      {
        floatingConfig: {
          strategy: "absolute",
          placement: "bottom-end"
        }
      },
      {},
      {
        button: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              color: "dark",
              size: "xs",
              nonCaptureEvent: true,
              startIcon: { icon: Mail_plus }
            },
            {},
            {
              default: () => {
                return `Invite`;
              }
            }
          )} `;
        },
        default: () => {
          return `<div class="flex flex-col gap-2"><input type="email" placeholder="email" class="mr-4"${add_attribute("value", email, 0)}> ${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
            $$result,
            { selected },
            {
              selected: ($$value) => {
                selected = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${validate_component(ToggleButton, "ToggleButton").$$render(
                  $$result,
                  {
                    value: "operator",
                    size: "sm",
                    label: "Operator",
                    tooltip: "An operator can only execute and view scripts/flows/apps from your workspace, and only those that he has visibility on."
                  },
                  {},
                  {}
                )} ${validate_component(ToggleButton, "ToggleButton").$$render(
                  $$result,
                  {
                    position: "center",
                    value: "developer",
                    size: "sm",
                    label: "Developer",
                    tooltip: "A Developer can execute and view scripts/flows/apps, but they can also create new ones and edit those they are allowed to by their path (either u/ or Writer or Admin of their folder found at /f)."
                  },
                  {},
                  {}
                )} ${validate_component(ToggleButton, "ToggleButton").$$render(
                  $$result,
                  {
                    position: "right",
                    value: "admin",
                    size: "sm",
                    label: "Admin",
                    tooltip: "An admin has full control over a specific Windmill workspace, including the ability to manage users, edit entities, and control permissions within the workspace."
                  },
                  {},
                  {}
                )}`;
              }
            }
          )} ${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "contained",
              color: "blue",
              size: "sm",
              disabled: email === void 0
            },
            {},
            {
              default: () => {
                return `Invite`;
              }
            }
          )}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_globalEmailInvite();
  $$unsubscribe_superadmin();
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const WorkspaceUserSettings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let users = void 0;
  let invites = [];
  let filteredUsers = void 0;
  let userFilter = "";
  let auto_invite_domain;
  let operatorOnly = void 0;
  let autoAdd = void 0;
  let nbDisplayed = 30;
  async function loadSettings() {
    const settings = await WorkspaceService.getSettings({ workspace: $workspaceStore });
    auto_invite_domain = settings.auto_invite_domain;
    operatorOnly = settings.auto_invite_operator;
    autoAdd = settings.auto_add;
  }
  let getUsagePromise = void 0;
  let usage = void 0;
  async function getUsage() {
    try {
      getUsagePromise = UserService.listUsersUsage({ workspace: $workspaceStore });
      const res = await getUsagePromise;
      usage = res.reduce(
        (acc, { email, executions }) => {
          if (email) {
            acc[email] = executions ?? 0;
          }
          return acc;
        },
        {}
      );
    } catch (e) {
      console.warn(e);
    }
  }
  async function listUsers() {
    users = await UserService.listUsers({ workspace: $workspaceStore });
  }
  async function listInvites() {
    invites = await WorkspaceService.listPendingInvites({ workspace: $workspaceStore });
  }
  async function getDisallowedAutoDomain() {
    await WorkspaceService.isDomainAllowed();
  }
  onDestroy(() => {
    try {
      getUsagePromise?.cancel();
    } catch (e) {
      console.warn(e);
    }
  });
  let deleteConfirmedCallback = void 0;
  let nbInviteDisplayed = 50;
  let showInvites = false;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $userStore?.email.split("@")[1];
    {
      {
        if ($workspaceStore) {
          getDisallowedAutoDomain();
          listUsers();
          getUsage();
          listInvites();
          loadSettings();
        }
      }
    }
    showInvites = invites?.length > 0 || auto_invite_domain != void 0 && !autoAdd;
    $$rendered = `${validate_component(SearchItems, "SearchItems").$$render(
      $$result,
      {
        filter: userFilter,
        items: users,
        f: (x) => x.email + " " + x.name + " " + x.company,
        filteredItems: filteredUsers
      },
      {
        filteredItems: ($$value) => {
          filteredUsers = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="flex flex-col gap-4 my-8" data-svelte-h="svelte-1s8svzc"><div class="flex flex-col gap-1"><div class="text-tertiary text-xs">Add members to your workspace and manage their roles. You can also auto-add users to join your
			workspace.
			<a href="https://www.windmill.dev/docs/core_concepts/roles_and_permissions" target="_blank" class="text-blue-500">Learn more</a>.</div></div></div> <div class="flex flex-row justify-between items-center">${validate_component(PageHeader, "PageHeader").$$render(
      $$result,
      {
        title: "Members (" + (filteredUsers?.length ?? users?.length ?? "") + ")",
        primary: true,
        tooltip: "Manage users manually or enable SSO authentication.",
        documentationLink: "https://www.windmill.dev/docs/core_concepts/authentification"
      },
      {},
      {}
    )} <div class="flex flex-row items-center gap-2 relative"><input placeholder="Filter members" class="input !pl-8"${add_attribute("value", userFilter, 0)}> ${validate_component(Search, "Search").$$render($$result, { class: "absolute left-2", size: 14 }, {}, {})} ${validate_component(Popup, "Popup").$$render(
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
              color: auto_invite_domain != void 0 ? "green" : "red",
              variant: "border",
              size: "xs",
              nonCaptureEvent: true,
              startIcon: { icon: Mails }
            },
            {},
            {
              default: () => {
                return `Auto-${escape(showInvites && !autoAdd ? "invite" : "add")}: ${escape(auto_invite_domain != void 0 ? "ON" : "OFF")}`;
              }
            }
          )} `;
        },
        default: () => {
          return `<div class="flex flex-col items-start"><span class="text-sm leading-6 font-semibold">${escape(`Auto-add anyone joining the instance`)}</span> ${showInvites ? `<span class="text-xs mb-1 leading-6 pt-2">Mode ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
            default: () => {
              return `Whether to invite or add users directly to the workspace.`;
            }
          })}</span> ${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render($$result, { selected: autoAdd ? "add" : "invite" }, {}, {
            default: () => {
              return `${validate_component(ToggleButton, "ToggleButton").$$render(
                $$result,
                {
                  value: "invite",
                  size: "xs",
                  label: "Auto-invite"
                },
                {},
                {}
              )} ${validate_component(ToggleButton, "ToggleButton").$$render(
                $$result,
                {
                  value: "add",
                  size: "xs",
                  label: "Auto-add"
                },
                {},
                {}
              )}`;
            }
          })}` : ``} <span class="text-xs mb-1 leading-6 pt-2">Role ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
            default: () => {
              return `Role of the auto-added users`;
            }
          })}</span> ${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
            $$result,
            {
              selected: operatorOnly ? "operator" : "developer"
            },
            {},
            {
              default: () => {
                return `${validate_component(ToggleButton, "ToggleButton").$$render(
                  $$result,
                  {
                    value: "operator",
                    size: "xs",
                    label: "Operator",
                    tooltip: "An operator can only execute and view scripts/flows/apps from your workspace, and only those that he has visibility on."
                  },
                  {},
                  {}
                )} ${validate_component(ToggleButton, "ToggleButton").$$render(
                  $$result,
                  {
                    value: "developer",
                    size: "xs",
                    label: "Developer",
                    tooltip: "A Developer can execute and view scripts/flows/apps, but they can also create new ones and edit those they are allowed to by their path (either u/ or Writer or Admin of their folder found at /f)."
                  },
                  {},
                  {}
                )}`;
              }
            }
          )} <div class="pt-2">${validate_component(Toggle, "Toggle").$$render(
            $$result,
            {
              size: "xs",
              checked: auto_invite_domain != void 0,
              disabled: isCloudHosted(),
              options: { right: "Enabled" }
            },
            {},
            {}
          )}</div> ${``}</div>`;
        }
      }
    )} ${validate_component(AddUser, "AddUser").$$render($$result, {}, {}, {})}</div></div> <div class="">${validate_component(DataTable, "DataTable").$$render(
      $$result,
      {
        shouldLoadMore: (filteredUsers?.length ?? 0) > 30,
        loadMore: 30
      },
      {},
      {
        default: () => {
          return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
            default: () => {
              return `<tr>${validate_component(Cell, "Cell").$$render($$result, { head: true, first: true }, {}, {
                default: () => {
                  return `Email`;
                }
              })} ${validate_component(Cell, "Cell").$$render($$result, { head: true }, {}, {
                default: () => {
                  return `Username`;
                }
              })} ${validate_component(Cell, "Cell").$$render($$result, { head: true }, {}, {
                default: () => {
                  return `Executions (<abbr title="past 1w" data-svelte-h="svelte-rjy5zh">1w</abbr>)
					${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                    default: () => {
                      return `An execution is calculated as 1 for any runs of scripts + 1 for each seconds above the
						first one`;
                    }
                  })}`;
                }
              })} ${validate_component(Cell, "Cell").$$render($$result, { head: true }, {}, {
                default: () => {
                  return `Status`;
                }
              })} ${validate_component(Cell, "Cell").$$render($$result, { head: true }, {}, {
                default: () => {
                  return `Role`;
                }
              })} ${validate_component(Cell, "Cell").$$render($$result, { head: true, last: true }, {}, {
                default: () => {
                  return `<span class="sr-only" data-svelte-h="svelte-1nvuc3u">Actions</span>`;
                }
              })}</tr>`;
            }
          })} <tbody class="divide-y bg-surface">${filteredUsers ? `${each(filteredUsers.slice(0, nbDisplayed), ({ email, username, is_admin, operator, disabled }) => {
            return `<tr class="!hover:bg-surface-hover">${validate_component(Cell, "Cell").$$render($$result, { first: true }, {}, {
              default: () => {
                return `${escape(truncate(email, 20))}`;
              }
            })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
              default: () => {
                return `${escape(truncate(username, 30))}`;
              }
            })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
              default: () => {
                return `${usage?.[email] != void 0 ? `${escape(usage?.[email])}` : `${validate_component(Loader_2, "Loader2").$$render($$result, { size: 14, class: "animate-spin" }, {}, {})}`}`;
              }
            })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
              default: () => {
                return `<div class="flex gap-1">${disabled ? `${validate_component(Badge, "Badge").$$render($$result, { color: "red" }, {}, {
                  default: () => {
                    return `Disabled`;
                  }
                })}` : `${validate_component(Badge, "Badge").$$render($$result, { color: "green" }, {}, {
                  default: () => {
                    return `Enabled`;
                  }
                })}`}</div> `;
              }
            })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
              default: () => {
                return `<div>${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
                  $$result,
                  {
                    selected: is_admin ? "admin" : operator ? "operator" : "developer"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(ToggleButton, "ToggleButton").$$render(
                        $$result,
                        {
                          value: "operator",
                          size: "xs",
                          label: "Operator",
                          tooltip: "An operator can only execute and view scripts/flows/apps from your workspace, and only those that he has visibility on."
                        },
                        {},
                        {}
                      )} ${validate_component(ToggleButton, "ToggleButton").$$render(
                        $$result,
                        {
                          value: "developer",
                          size: "xs",
                          label: "Developer",
                          tooltip: "A Developer can execute and view scripts/flows/apps, but they can also create new ones and edit those they are allowed to by their path (either u/ or Writer or Admin of their folder found at /f)."
                        },
                        {},
                        {}
                      )} ${validate_component(ToggleButton, "ToggleButton").$$render(
                        $$result,
                        {
                          value: "admin",
                          size: "xs",
                          label: "Admin",
                          tooltip: "An admin has full control over a specific Windmill workspace, including the ability to manage users, edit entities, and control permissions within the workspace."
                        },
                        {},
                        {}
                      )} `;
                    }
                  }
                )}</div> `;
              }
            })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
              default: () => {
                return `<div class="flex gap-1">${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    color: "light",
                    variant: "contained",
                    size: "xs",
                    spacingSize: "xs2"
                  },
                  {},
                  {
                    default: () => {
                      return `${escape(disabled ? "Enable" : "Disable")} `;
                    }
                  }
                )} ${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    color: "light",
                    variant: "contained",
                    btnClasses: "text-red-500",
                    size: "xs",
                    spacingSize: "xs2"
                  },
                  {},
                  {
                    default: () => {
                      return `Remove
								`;
                    }
                  }
                )}</div> `;
              }
            })} </tr>`;
          })}` : `${each(new Array(6), (_) => {
            return `<tr class="border"><td${add_attribute("colspan", 6, 0)}>${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[4]] }, {}, {})}</td> </tr>`;
          })}`}</tbody>`;
        }
      }
    )}</div> ${showInvites ? `${validate_component(PageHeader, "PageHeader").$$render(
      $$result,
      {
        title: "Invites (" + (invites.length ?? "") + ")",
        primary: false,
        tooltip: "Manage invites on your workspace.",
        documentationLink: "https://www.windmill.dev/docs/core_concepts/authentification#adding-users-to-a-workspace"
      },
      {},
      {
        default: () => {
          return `<div class="flex gap-2 items-center">${validate_component(InviteUser, "InviteUser").$$render($$result, {}, {}, {})}</div>`;
        }
      }
    )} <div>${validate_component(DataTable, "DataTable").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
          default: () => {
            return `<tr>${validate_component(Cell, "Cell").$$render($$result, { head: true, first: true }, {}, {
              default: () => {
                return `Email`;
              }
            })} ${validate_component(Cell, "Cell").$$render($$result, { head: true }, {}, {
              default: () => {
                return `Role`;
              }
            })} ${validate_component(Cell, "Cell").$$render($$result, { head: true, last: true }, {}, {
              default: () => {
                return `<span class="sr-only" data-svelte-h="svelte-1nvuc3u">Actions</span>`;
              }
            })}</tr>`;
          }
        })} <tbody class="divide-y bg-surface">${invites?.length > 0 ? `${each(invites.slice(0, nbInviteDisplayed), ({ email, is_admin, operator }) => {
          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Cell, "Cell").$$render($$result, { first: true }, {}, {
                default: () => {
                  return `${escape(email)}`;
                }
              })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                default: () => {
                  return `<div>${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
                    $$result,
                    {
                      selected: is_admin ? "admin" : operator ? "operator" : "developer"
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(ToggleButton, "ToggleButton").$$render(
                          $$result,
                          {
                            value: "operator",
                            size: "xs",
                            label: "Operator",
                            tooltip: "An operator can only execute and view scripts/flows/apps from your workspace, and only those that he has visibility on."
                          },
                          {},
                          {}
                        )} ${validate_component(ToggleButton, "ToggleButton").$$render(
                          $$result,
                          {
                            value: "developer",
                            size: "xs",
                            label: "Developer",
                            tooltip: "A Developer can execute and view scripts/flows/apps, but they can also create new ones and edit those they are allowed to by their path (either u/ or Writer or Admin of their folder found at /f)."
                          },
                          {},
                          {}
                        )} ${validate_component(ToggleButton, "ToggleButton").$$render(
                          $$result,
                          {
                            value: "admin",
                            size: "xs",
                            label: "Admin",
                            tooltip: "An admin has full control over a specific Windmill workspace, including the ability to manage users, edit entities, and control permissions within the workspace."
                          },
                          {},
                          {}
                        )} `;
                      }
                    }
                  )}</div> `;
                }
              })} ${validate_component(Cell, "Cell").$$render($$result, { last: true }, {}, {
                default: () => {
                  return `<button class="ml-2 text-red-500" data-svelte-h="svelte-fvzh6x">Cancel</button> `;
                }
              })} `;
            }
          })}`;
        })}` : `<tr data-svelte-h="svelte-1l3536n"><td colspan="3" class="text-center py-8"><div class="text-xs text-secondary">No invites yet</div></td></tr>`}</tbody>`;
      }
    })} ${invites && invites?.length > 50 && nbInviteDisplayed < invites.length ? `<span class="text-xs">${escape(nbInviteDisplayed)} invites out of ${escape(invites.length)} <button class="ml-4" data-svelte-h="svelte-lpznut">load 50 more</button></span>` : ``}</div>` : ``} ${validate_component(ConfirmationModal, "ConfirmationModal").$$render(
      $$result,
      {
        open: Boolean(deleteConfirmedCallback),
        title: "Remove user",
        confirmationText: "Remove"
      },
      {},
      {
        default: () => {
          return `<div class="flex flex-col w-full space-y-4" data-svelte-h="svelte-1ixpg8j"><span>Are you sure you want to remove ?</span></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_userStore();
  return $$rendered;
});
const PremiumInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { plan } = $$props;
  let { customer_id } = $$props;
  let users = void 0;
  let premiumInfo = void 0;
  const plans = {
    Free: [
      "Users use their individual global free-tier quotas when doing executions in this workspace",
      "<b>1 000</b> free global executions per-user per month",
      "<b>1 000</b> free executions per workspace per month"
    ],
    Team: [
      `<b>$10/mo</b> per seat`,
      `Every seat includes <b>10 000</b> executions`,
      `Every seat includes either 1 developer OR 2 operators`
    ],
    Enterprise: [
      `Dedicated and isolated database and workers available (EU/US/Asia)`,
      `Dedicated entire cluster available for (EU/US/Asia)`,
      `SAML support with group syncing`,
      `SLA & Priority Support 24/7 with 3h response time and automation engineer assistance`,
      `Design partners for Roadmap`,
      `<div class="mt-4">Self-hosted licenses also available</div>`
    ]
  };
  async function listUsers() {
    users = await UserService.listUsers({ workspace: $workspaceStore });
  }
  async function loadPremiumInfo() {
    const info = await WorkspaceService.getPremiumInfo({ workspace: $workspaceStore });
    const developerNb = users?.filter((x) => !x.operator)?.length ?? 0;
    const operatorNb = users?.filter((x) => x.operator)?.length ?? 0;
    const seatsFromUsers = Math.ceil(developerNb + operatorNb / 2);
    const seatsFromComps = Math.ceil((info.usage ?? 0) / 1e4);
    const usedSeats = Math.max(seatsFromUsers, seatsFromComps);
    premiumInfo = {
      ...info,
      usage: info.usage ?? 0,
      seats: info.seats ?? 1,
      developerNb,
      operatorNb,
      seatsFromUsers,
      seatsFromComps,
      usedSeats
    };
  }
  let billingModeLoading = false;
  if ($$props.plan === void 0 && $$bindings.plan && plan !== void 0) $$bindings.plan(plan);
  if ($$props.customer_id === void 0 && $$bindings.customer_id && customer_id !== void 0) $$bindings.customer_id(customer_id);
  {
    {
      if ($workspaceStore) {
        loadPremiumInfo();
        listUsers();
      }
    }
  }
  $$unsubscribe_workspaceStore();
  return `<div class="flex flex-col gap-4 my-8" data-svelte-h="svelte-7mzsi3"><div class="flex flex-col gap-1"><div class="text-primary text-lg font-semibold">Plans</div></div></div> ${customer_id ? `<div class="mt-2 mb-2">${validate_component(Button, "Button").$$render(
    $$result,
    {
      endIcon: { icon: External_link },
      color: "dark",
      href: base + "/api/w/" + $workspaceStore + "/workspaces/billing_portal"
    },
    {},
    {
      default: () => {
        return `Customer Portal`;
      }
    }
  )} <p class="text-xs text-tertiary mt-1" data-svelte-h="svelte-d8h5dy">See invoices, change billing information or subscription details.</p></div>` : ``} <div class="text-xs my-4">${premiumInfo?.premium ? `<div class="flex flex-col gap-0.5">${plan ? `<div class="text-base inline font-bold leading-8 mb-2">Current plan: ${escape(capitalize(plan))} plan${escape(plan === "team" && premiumInfo.automatic_billing ? " (usage-based)" : plan === "team" ? ` (${premiumInfo.seats} seat${premiumInfo.seats > 1 ? "s" : ""})` : "")}</div> ${plan === "team" ? `<div class="flex flex-row items-center gap-2 mb-4">${validate_component(Toggle, "Toggle").$$render(
    $$result,
    {
      checked: premiumInfo?.automatic_billing,
      options: {
        left: "Static number of seats",
        leftTooltip: "You will be billed for a fixed number of seats, you have to manually adapt the number of seats in the customer portal based on your usage.",
        right: "Automatic billing based on usage",
        rightTooltip: "You will be billed for the maximum number of seats used in a given billing period."
      },
      disabled: billingModeLoading
    },
    {},
    {}
  )} ${``}</div>` : ``}` : `<div class="inline text-lg font-bold" data-svelte-h="svelte-y35pjt">Current plan: Free plan</div>`} ${plan ? `<div class="w-full">${validate_component(DataTable, "DataTable").$$render($$result, {}, {}, {
    default: () => {
      return `<tbody class="divide-y"><tr>${validate_component(Cell, "Cell").$$render($$result, { first: true }, {}, {
        default: () => {
          return `Developers
									${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
            default: () => {
              return `Actual pricing is calculated on the MAXIMUM number of users in a given billing
										period, see the customer portal for more info.`;
            }
          })}`;
        }
      })} ${validate_component(Cell, "Cell").$$render($$result, { last: true, numeric: true }, {}, {
        default: () => {
          return `<div class="text-base">${escape(premiumInfo.developerNb)}</div>`;
        }
      })}</tr> <tr>${validate_component(Cell, "Cell").$$render($$result, { first: true }, {}, {
        default: () => {
          return `Operators
									${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
            default: () => {
              return `Actual pricing is calculated on the MAXIMUM number of operators in a given
										billing period, see the customer portal for more info.`;
            }
          })}`;
        }
      })} ${validate_component(Cell, "Cell").$$render($$result, { last: true, numeric: true }, {}, {
        default: () => {
          return `<div class="text-base">${escape(premiumInfo.operatorNb)}</div>`;
        }
      })}</tr> <tr>${validate_component(Cell, "Cell").$$render($$result, { first: true }, {}, {
        default: () => {
          return `<div class="font-semibold" data-svelte-h="svelte-14l9vc8">Minimum number of seats needed for users</div>`;
        }
      })} ${validate_component(Cell, "Cell").$$render($$result, { last: true, numeric: true }, {}, {
        default: () => {
          return `<div class="text-base font-bold">u = ceil(${escape(premiumInfo.developerNb)} + ${escape(premiumInfo.operatorNb)}/2) = ${escape(premiumInfo.seatsFromUsers)}</div>`;
        }
      })}</tr> <tr>${validate_component(Cell, "Cell").$$render($$result, { first: true }, {}, {
        default: () => {
          return `Computations executed this month`;
        }
      })} ${validate_component(Cell, "Cell").$$render($$result, { last: true, numeric: true }, {}, {
        default: () => {
          return `<div class="text-base">${escape(premiumInfo.usage)}</div>`;
        }
      })}</tr> <tr>${validate_component(Cell, "Cell").$$render($$result, { first: true }, {}, {
        default: () => {
          return `<div class="font-semibold" data-svelte-h="svelte-217ljh">Minimum number of seats needed for computations</div>`;
        }
      })} ${validate_component(Cell, "Cell").$$render($$result, { last: true, numeric: true }, {}, {
        default: () => {
          return `<div class="text-base font-bold">c = ceil(${escape(premiumInfo.usage)} / 10 000) = ${escape(premiumInfo.seatsFromComps)}</div>`;
        }
      })}</tr> <tr>${validate_component(Cell, "Cell").$$render($$result, { first: true }, {}, {
        default: () => {
          return `<div${add_attribute(
            "class",
            twMerge("font-semibold", plan === "team" && premiumInfo.usedSeats > premiumInfo.seats && !premiumInfo.automatic_billing ? "text-red-500" : ""),
            0
          )}>Used seats ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
            default: () => {
              return `Highest between seats from developers + operators and seats from computations`;
            }
          })}${escape(plan === "team" && premiumInfo.usedSeats > premiumInfo.seats && !premiumInfo.automatic_billing ? " > Paid seats" : "")}</div>`;
        }
      })} ${validate_component(Cell, "Cell").$$render($$result, { last: true, numeric: true }, {}, {
        default: () => {
          return `<div${add_attribute(
            "class",
            twMerge("text-base font-bold", plan === "team" && premiumInfo.usedSeats > premiumInfo.seats && !premiumInfo.automatic_billing ? "text-red-500" : ""),
            0
          )}>max(u, c) = max(${escape(premiumInfo.seatsFromUsers)}, ${escape(premiumInfo.seatsFromComps)}) = ${escape(premiumInfo.usedSeats)}${escape(plan === "team" && premiumInfo.usedSeats > premiumInfo.seats && !premiumInfo.automatic_billing ? ` > ${premiumInfo.seats}` : "")}</div>`;
        }
      })}</tr></tbody>`;
    }
  })} ${plan === "team" && premiumInfo.usedSeats > premiumInfo.seats && !premiumInfo.automatic_billing ? `<p class="text-red-500 mt-2 text-right text-base" data-svelte-h="svelte-13h87mp">You have exceeded your allowed number of seats, please update your plan in the
							customer portal.</p>` : ``}</div>` : ``}</div>` : `This workspace is <b data-svelte-h="svelte-1ob75vd">not</b> on a team plan. Users use their global free-tier quotas when doing executions
		in this workspace. Upgrade to a Team or Enterprise plan to unlock unlimited executions in this workspace.`}</div> <div class="text-base font-bold leading-8 mb-2 pt-8" data-svelte-h="svelte-1ha37ik">All plans</div> <div class="grid grid-cols-1 md:grid-cols-3 gap-4">${each(Object.entries(plans), ([planTitle, planDesc]) => {
    return `<div class="box p-4 text-xs flex flex-col h-full overflow-hidden prose-sm rounded-md"><h2 class="${"mb-4 " + escape(
      planTitle === "Team" ? "text-blue-500" : planTitle === "Enterprise" ? "text-teal-600" : "",
      true
    )}">${escape(planTitle)}</h2> <ul class="list-disc text-sm p-4">${each(planDesc, (item) => {
      return `<li class="mt-2"><!-- HTML_TAG_START -->${item}<!-- HTML_TAG_END --></li>`;
    })}</ul> <div class="grow"></div> ${planTitle == "Team" ? `${plan != "team" ? `<div class="mt-4 mx-auto">${plan != "enterprise" ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs",
        color: "bg-blue-500 text-white",
        href: base + "/api/w/" + $workspaceStore + "/workspaces/checkout?plan=team"
      },
      {},
      {
        default: () => {
          return `Upgrade to Team plan`;
        }
      }
    )}` : `<div class="mx-auto font-semibold text-center" data-svelte-h="svelte-1jbs7vi">Cancel your plan in the customer portal then upgrade to a team plan
							</div>`} </div>` : `<div class="mx-auto text-md font-semibold" data-svelte-h="svelte-16fdndr">Workspace is on the team plan</div>`}` : `${planTitle == "Enterprise" ? `${plan != "enterprise" ? `<div class="mt-4 mx-auto">${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs",
        color: "bg-teal-600 text-white",
        href: "https://www.windmill.dev/pricing",
        target: "_blank"
      },
      {},
      {
        default: () => {
          return `See more
						`;
        }
      }
    )} </div>` : `<div class="mx-auto text-md font-semibold" data-svelte-h="svelte-1xhbqva">Workspace is on enterprise plan</div>`}` : `${planTitle === "Free" ? `${plan ? `<div class="mx-auto font-semibold text-center" data-svelte-h="svelte-wehw3g">Cancel your plan in the customer portal to downgrade to the free plan
					</div>` : `<div class="mx-auto font-semibold text-center" data-svelte-h="svelte-18ty4ia">Workspace is on the free plan </div>`}` : ``}`}`} </div>`;
  })}</div> <div class="flex flex-col gap-1 my-8 w-full items-center" data-svelte-h="svelte-1v1gifh"><div class="text-primary text-md font-semibold">Frequently asked questions </div><br> <div class="flex flex-col gap-4"><div><div class="text-sm mb-1 text-secondary font-medium">What is an execution?</div> <div class="text-xs max-w-xl border-b pb-4 text-tertiary">The single credit-unit is called an &quot;execution&quot;. An execution corresponds to a single job
				whose duration is less than 1s. For any additional seconds of computation, an additional
				execution is accounted for. Jobs are executed on one powerful virtual CPU with 2Gb of
				memory. Most jobs will take less than 200ms to execute.</div></div> <div><div class="text-sm mb-1 text-secondary font-medium">What is the difference between a developer and an operator?</div> <div class="text-xs max-w-xl text-tertiary">A developer can write scripts/flows/apps/variables/resources. An operator can only run/view
				them.</div></div></div></div>`;
});
const ChangeWorkspaceName = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let newName = "";
  let currentName = "";
  async function getWorkspaceName() {
    currentName = await WorkspaceService.getWorkspaceName({ workspace: $workspaceStore });
  }
  getWorkspaceName();
  let { open = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div><p class="font-semibold text-sm" data-svelte-h="svelte-t0z804">Workspace name</p> <div class="flex flex-row gap-0.5 items-center"><p class="text-sm text-secondary">${escape(currentName)}</p> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs",
        spacingSize: "xs2",
        color: "light",
        iconOnly: true,
        startIcon: { icon: Pen }
      },
      {},
      {}
    )}</div></div> ${validate_component(Modal, "Modal").$$render(
      $$result,
      { title: "Change workspace name", open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        actions: () => {
          return `${validate_component(Button, "Button").$$render($$result, { size: "sm", disabled: !newName }, {}, {
            default: () => {
              return `Save`;
            }
          })} `;
        },
        default: () => {
          return `<div class="flex flex-col gap-4 mt-4">${currentName ? `<p class="text-secondary text-sm">Current name <br> <span class="font-bold">${escape(currentName)}</span></p>` : ``} <label class="block"><span class="text-secondary text-sm" data-svelte-h="svelte-1vioy9c">New name</span> <input type="text"${add_attribute("value", newName, 0)}></label></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const ChangeWorkspaceId = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let newName = "";
  let newId = "";
  let checking = false;
  let errorId = "";
  async function validateName(id) {
    checking = true;
    let exists = await WorkspaceService.existsWorkspace({ requestBody: { id } });
    if (exists) {
      errorId = "ID already exists";
    } else if (id != "" && !/^\w+(-\w+)*$/.test(id)) {
      errorId = "ID can only contain letters, numbers and dashes and must not finish by a dash";
    } else {
      errorId = "";
    }
    checking = false;
  }
  let { open = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    newId = newName.toLowerCase().replace(/\s/gi, "-");
    {
      validateName(newId);
    }
    $$rendered = `<div><p class="font-semibold text-sm" data-svelte-h="svelte-18texnu">Workspace ID</p> <div class="flex flex-row gap-0.5 items-center"><p class="text-sm text-secondary">${escape($workspaceStore ?? "")}</p> ${`${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs",
        spacingSize: "xs2",
        color: "light",
        iconOnly: true,
        startIcon: { icon: Pen }
      },
      {},
      {}
    )}`}</div></div> ${validate_component(Modal, "Modal").$$render(
      $$result,
      { title: "Change workspace ID", open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        actions: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              size: "sm",
              disabled: checking || errorId.length > 0 || !newName || !newId
            },
            {},
            {
              default: () => {
                return `Save`;
              }
            }
          )} `;
        },
        default: () => {
          return `<div class="flex flex-col gap-4">${validate_component(Alert, "Alert").$$render($$result, { type: "warning", title: "Warning" }, {}, {
            default: () => {
              return `You will have to update your webhook calls and your CLI sync configuration.`;
            }
          })} <p class="text-secondary text-sm">Current ID <br> <span class="font-bold">${escape($workspaceStore ?? "")}</span></p> <label class="block"><span class="text-secondary text-sm" data-svelte-h="svelte-1vioy9c">New name</span> <input type="text"${add_attribute("value", newName, 0)}></label> <label class="block"><span class="text-secondary text-sm" data-svelte-h="svelte-xui0y6">New ID</span> <input type="text"${add_attribute("value", newId, 0)}> ${errorId ? `<div class="text-red-500 text-xs mt-1">${escape(errorId)}</div>` : ``}</label></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
function convertBackendSettingsToFrontendSettings(large_file_storage) {
  let settings = convertBackendSettingsToFrontendSettingsItem(large_file_storage);
  settings.secondaryStorage = Object.entries(large_file_storage?.secondary_storage ?? {}).map(
    ([key, value]) => [key, convertBackendSettingsToFrontendSettingsItem(value)]
  );
  return settings;
}
function convertBackendSettingsToFrontendSettingsItem(large_file_storage) {
  if (large_file_storage?.type === "S3Storage") {
    return {
      resourceType: "s3",
      resourcePath: large_file_storage?.s3_resource_path?.replace("$res:", ""),
      publicResource: large_file_storage?.public_resource
    };
  } else if (large_file_storage?.type === "AzureBlobStorage") {
    return {
      resourceType: "azure_blob",
      resourcePath: large_file_storage?.azure_blob_resource_path?.replace("$res:", ""),
      publicResource: large_file_storage?.public_resource
    };
  } else if (large_file_storage?.type === "AzureWorkloadIdentity") {
    return {
      resourceType: "azure_workload_identity",
      resourcePath: large_file_storage?.azure_blob_resource_path?.replace("$res:", ""),
      publicResource: large_file_storage?.public_resource
    };
  } else if (large_file_storage?.type === "S3AwsOidc") {
    return {
      resourceType: "s3_aws_oidc",
      resourcePath: large_file_storage?.s3_resource_path?.replace("$res:", ""),
      publicResource: large_file_storage?.public_resource
    };
  } else {
    return {
      resourceType: "s3",
      resourcePath: void 0,
      publicResource: void 0
    };
  }
}
let encryptionKeyRegex = /^[a-zA-Z0-9]{64}$/;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  let $userStore, $$unsubscribe_userStore;
  let $superadmin, $$unsubscribe_superadmin;
  let $hubBaseUrlStore, $$unsubscribe_hubBaseUrlStore;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_superadmin = subscribe(superadmin, (value) => $superadmin = value);
  $$unsubscribe_hubBaseUrlStore = subscribe(hubBaseUrlStore, (value) => $hubBaseUrlStore = value);
  let s3FileViewer;
  let initialPath;
  let scriptPath;
  let team_name;
  let itemKind = "flow";
  let plan = void 0;
  let customer_id = void 0;
  let webhook = void 0;
  let workspaceToDeployTo = void 0;
  let errorHandlerSelected = "slack";
  let errorHandlerInitialScriptPath;
  let errorHandlerScriptPath;
  let errorHandlerItemKind = "script";
  let errorHandlerExtraArgs = {};
  let errorHandlerMutedOnCancel = void 0;
  let openaiResourceInitialPath = void 0;
  let s3ResourceSettings = {
    resourceType: "s3",
    resourcePath: void 0,
    publicResource: void 0,
    secondaryStorage: void 0
  };
  let gitSyncSettings;
  let gitSyncTestJobs;
  let workspaceDefaultAppPath = void 0;
  let workspaceEncryptionKey = void 0;
  let editedWorkspaceEncryptionKey = void 0;
  let codeCompletionEnabled = false;
  let tab = $page.url.searchParams.get("tab") ?? "users";
  let usingOpenaiClientCredentialsOauth = false;
  const latestGitSyncHubScript = `hub/8931/sync-script-to-git-repo-windmill`;
  async function loadSettings() {
    const settings = await WorkspaceService.getSettings({ workspace: $workspaceStore });
    team_name = settings.slack_name;
    if (settings.slack_command_script) {
      itemKind = settings.slack_command_script.split("/")[0];
    }
    scriptPath = (settings.slack_command_script ?? "").split("/").slice(1).join("/");
    initialPath = scriptPath;
    plan = settings.plan;
    customer_id = settings.customer_id;
    workspaceToDeployTo = settings.deploy_to;
    webhook = settings.webhook;
    openaiResourceInitialPath = settings.openai_resource_path;
    errorHandlerItemKind = settings.error_handler?.split("/")[0];
    errorHandlerScriptPath = (settings.error_handler ?? "").split("/").slice(1).join("/");
    errorHandlerInitialScriptPath = errorHandlerScriptPath;
    errorHandlerMutedOnCancel = settings.error_handler_muted_on_cancel;
    if (emptyString($enterpriseLicense)) {
      errorHandlerSelected = "custom";
    } else {
      errorHandlerSelected = emptyString(errorHandlerScriptPath) || errorHandlerScriptPath.startsWith("hub/") && errorHandlerScriptPath.endsWith("/workspace-or-schedule-error-handler-slack") ? "slack" : "custom";
    }
    errorHandlerExtraArgs = settings.error_handler_extra_args ?? {};
    codeCompletionEnabled = settings.code_completion_enabled;
    workspaceDefaultAppPath = settings.default_app;
    s3ResourceSettings = convertBackendSettingsToFrontendSettings(settings.large_file_storage);
    if (settings.git_sync !== void 0 && settings.git_sync !== null) {
      gitSyncTestJobs = [];
      gitSyncSettings = {
        include_path: settings.git_sync.include_path?.length ?? 0 > 0 ? settings.git_sync.include_path ?? [] : ["f/**"],
        repositories: (settings.git_sync.repositories ?? []).map((settings2) => {
          gitSyncTestJobs.push({ jobId: void 0, status: void 0 });
          return {
            git_repo_resource_path: settings2.git_repo_resource_path.replace("$res:", ""),
            script_path: settings2.script_path,
            use_individual_branch: settings2.use_individual_branch ?? false,
            group_by_folder: settings2.group_by_folder ?? false,
            exclude_types_override: {
              scripts: (settings2.exclude_types_override?.indexOf("script") ?? -1) >= 0,
              flows: (settings2.exclude_types_override?.indexOf("flow") ?? -1) >= 0,
              apps: (settings2.exclude_types_override?.indexOf("app") ?? -1) >= 0,
              resourceTypes: (settings2.exclude_types_override?.indexOf("resourcetype") ?? -1) >= 0,
              resources: (settings2.exclude_types_override?.indexOf("resource") ?? -1) >= 0,
              variables: (settings2.exclude_types_override?.indexOf("variable") ?? -1) >= 0,
              secrets: (settings2.exclude_types_override?.indexOf("secret") ?? -1) >= 0,
              schedules: (settings2.exclude_types_override?.indexOf("schedule") ?? -1) >= 0,
              folders: (settings2.exclude_types_override?.indexOf("folder") ?? -1) >= 0,
              users: (settings2.exclude_types_override?.indexOf("user") ?? -1) >= 0,
              groups: (settings2.exclude_types_override?.indexOf("group") ?? -1) >= 0
            }
          };
        }),
        include_type: {
          scripts: (settings.git_sync.include_type?.indexOf("script") ?? -1) >= 0,
          flows: (settings.git_sync.include_type?.indexOf("flow") ?? -1) >= 0,
          apps: (settings.git_sync.include_type?.indexOf("app") ?? -1) >= 0,
          resourceTypes: (settings.git_sync.include_type?.indexOf("resourcetype") ?? -1) >= 0,
          resources: (settings.git_sync.include_type?.indexOf("resource") ?? -1) >= 0,
          variables: (settings.git_sync.include_type?.indexOf("variable") ?? -1) >= 0,
          secrets: (settings.git_sync.include_type?.indexOf("secret") ?? -1) >= 0,
          schedules: (settings.git_sync.include_type?.indexOf("schedule") ?? -1) >= 0,
          folders: (settings.git_sync.include_type?.indexOf("folder") ?? -1) >= 0,
          users: (settings.git_sync.include_type?.indexOf("user") ?? -1) >= 0,
          groups: (settings.git_sync.include_type?.indexOf("group") ?? -1) >= 0
        }
      };
    } else {
      gitSyncSettings = {
        include_path: ["f/**"],
        repositories: [],
        include_type: {
          scripts: true,
          flows: true,
          apps: true,
          folders: true,
          resourceTypes: false,
          resources: false,
          variables: false,
          secrets: false,
          schedules: false,
          users: false,
          groups: false
        }
      };
      gitSyncTestJobs = [];
    }
    if (settings.deploy_ui != void 0 && settings.deploy_ui != null) {
      deployUiSettings = {
        include_path: settings.deploy_ui.include_path?.length ?? 0 > 0 ? settings.deploy_ui.include_path ?? [] : [],
        include_type: {
          scripts: (settings.deploy_ui.include_type?.indexOf("script") ?? -1) >= 0,
          flows: (settings.deploy_ui.include_type?.indexOf("flow") ?? -1) >= 0,
          apps: (settings.deploy_ui.include_type?.indexOf("app") ?? -1) >= 0,
          resources: (settings.deploy_ui.include_type?.indexOf("resource") ?? -1) >= 0,
          variables: (settings.deploy_ui.include_type?.indexOf("variable") ?? -1) >= 0,
          secrets: (settings.deploy_ui.include_type?.indexOf("secret") ?? -1) >= 0
        }
      };
    }
    usingOpenaiClientCredentialsOauth = await ResourceService.existsResourceType({
      workspace: $workspaceStore,
      path: "openai_client_credentials_oauth"
    });
  }
  let deployUiSettings;
  let debounced = void 0;
  function setQueryWithoutLoad(url, args, bounceTime) {
    debounced && clearTimeout(debounced);
    debounced = setTimeout(
      () => {
        const nurl = new URL(url.toString());
        for (const { key, value } of args) {
          if (value) {
            nurl.searchParams.set(key, value);
          } else {
            nurl.searchParams.delete(key);
          }
        }
        try {
          replaceState(nurl.toString(), $page.state);
        } catch (e) {
          console.error(e);
        }
      },
      bounceTime ?? 200
    );
  }
  if ($$props.setQueryWithoutLoad === void 0 && $$bindings.setQueryWithoutLoad && setQueryWithoutLoad !== void 0) $$bindings.setQueryWithoutLoad(setQueryWithoutLoad);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        if ($workspaceStore) {
          loadSettings();
        }
      }
    }
    $$rendered = `${validate_component(Portal, "Portal").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(S3FilePicker, "S3FilePicker").$$render(
          $$result,
          {
            readOnlyMode: false,
            fromWorkspaceSettings: true,
            this: s3FileViewer
          },
          {
            this: ($$value) => {
              s3FileViewer = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })} ${validate_component(CenteredPage, "CenteredPage").$$render($$result, {}, {}, {
      default: () => {
        return `${$userStore?.is_admin || $superadmin ? `${validate_component(PageHeader, "PageHeader").$$render(
          $$result,
          {
            title: "Workspace settings: " + $workspaceStore
          },
          {},
          {
            default: () => {
              return `${$superadmin ? ` ${validate_component(Button, "Button").$$render(
                $$result,
                {
                  variant: "border",
                  color: "dark",
                  size: "sm"
                },
                {},
                {
                  default: () => {
                    return `Instance settings`;
                  }
                }
              )} ` : ``}`;
            }
          }
        )} <div class="overflow-x-auto scrollbar-hidden">${validate_component(Tabs, "Tabs").$$render(
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
              return `${validate_component(Tab, "Tab").$$render($$result, { size: "xs", value: "users" }, {}, {
                default: () => {
                  return `<div class="flex gap-2 items-center my-1" data-svelte-h="svelte-1i22w6l">Users</div>`;
                }
              })} ${validate_component(Tab, "Tab").$$render($$result, { size: "xs", value: "git_sync" }, {}, {
                default: () => {
                  return `<div class="flex gap-2 items-center my-1" data-svelte-h="svelte-rlna96">Git Sync</div>`;
                }
              })} ${validate_component(Tab, "Tab").$$render($$result, { size: "xs", value: "deploy_to" }, {}, {
                default: () => {
                  return `<div class="flex gap-2 items-center my-1" data-svelte-h="svelte-87sq3e">Deployment UI</div>`;
                }
              })} ${`${validate_component(Tab, "Tab").$$render($$result, { size: "xs", value: "slack" }, {}, {
                default: () => {
                  return `<div class="flex gap-2 items-center my-1" data-svelte-h="svelte-1bvs44f">Slack</div>`;
                }
              })}`} ${``} ${`${validate_component(Tab, "Tab").$$render($$result, { size: "xs", value: "webhook" }, {}, {
                default: () => {
                  return `<div class="flex gap-2 items-center my-1" data-svelte-h="svelte-1r53g30">Webhook</div>`;
                }
              })}`} ${validate_component(Tab, "Tab").$$render($$result, { size: "xs", value: "error_handler" }, {}, {
                default: () => {
                  return `<div class="flex gap-2 items-center my-1" data-svelte-h="svelte-1kphb4p">Error Handler</div>`;
                }
              })} ${validate_component(Tab, "Tab").$$render($$result, { size: "xs", value: "openai" }, {}, {
                default: () => {
                  return `<div class="flex gap-2 items-center my-1" data-svelte-h="svelte-ghiocd">Windmill AI</div>`;
                }
              })} ${validate_component(Tab, "Tab").$$render($$result, { size: "xs", value: "windmill_lfs" }, {}, {
                default: () => {
                  return `<div class="flex gap-2 items-center my-1" data-svelte-h="svelte-18oscxo">S3 Storage</div>`;
                }
              })} ${validate_component(Tab, "Tab").$$render($$result, { size: "xs", value: "default_app" }, {}, {
                default: () => {
                  return `<div class="flex gap-2 items-center my-1" data-svelte-h="svelte-1llnxdh">Default App</div>`;
                }
              })} ${validate_component(Tab, "Tab").$$render($$result, { size: "xs", value: "encryption" }, {}, {
                default: () => {
                  return `<div class="flex gap-2 items-center my-1" data-svelte-h="svelte-jcc7vy">Encryption</div>`;
                }
              })} ${validate_component(Tab, "Tab").$$render($$result, { size: "xs", value: "general" }, {}, {
                default: () => {
                  return `<div class="flex gap-2 items-center my-1" data-svelte-h="svelte-1iw4gwz">General</div>`;
                }
              })}`;
            }
          }
        )}</div> ${tab == "users" ? `${validate_component(WorkspaceUserSettings, "WorkspaceUserSettings").$$render($$result, {}, {}, {})}` : `${tab == "deploy_to" ? `<div class="flex flex-col gap-4 my-8" data-svelte-h="svelte-1lxadrs"><div class="flex flex-col gap-1"><div class="text-primary text-lg font-semibold">Link this workspace to another Staging / Prod workspace</div> <div class="text-tertiary text-xs">Connecting this workspace with another staging/production workspace enables web-based
						deployment to that workspace.
						<a href="https://www.windmill.dev/docs/core_concepts/staging_prod" target="_blank" class="text-blue-500">Learn more</a>.</div></div></div> ${$enterpriseLicense ? `${validate_component(DeployToSetting, "DeployToSetting").$$render(
          $$result,
          { workspaceToDeployTo, deployUiSettings },
          {
            workspaceToDeployTo: ($$value) => {
              workspaceToDeployTo = $$value;
              $$settled = false;
            },
            deployUiSettings: ($$value) => {
              deployUiSettings = $$value;
              $$settled = false;
            }
          },
          {}
        )}` : `<div class="my-2">${validate_component(Alert, "Alert").$$render(
          $$result,
          {
            type: "error",
            title: "Enterprise license required"
          },
          {},
          {
            default: () => {
              return `Deploy to staging/prod from the web UI is only available with an enterprise license`;
            }
          }
        )}</div>`}` : `${tab == "premium" ? `${validate_component(PremiumInfo, "PremiumInfo").$$render($$result, { customer_id, plan }, {}, {})}` : `${tab == "slack" ? `<div class="flex flex-col gap-4 my-8"><div class="flex flex-col gap-1" data-svelte-h="svelte-183iqed"><div class="text-primary text-lg font-semibold">Connect workspace to Slack</div> <div class="text-tertiary text-xs">Connect your Windmill workspace to your Slack workspace to trigger a script or a flow
						with a &#39;/windmill&#39; command or to configure Slack error handlers.
						<a href="https://www.windmill.dev/docs/integrations/slack" target="_blank" class="text-blue-500">Learn more</a>.</div></div> ${team_name ? `<div class="flex flex-col gap-2 max-w-sm">${validate_component(Button, "Button").$$render(
          $$result,
          {
            size: "sm",
            endIcon: { icon: Slack },
            btnClasses: "mt-2",
            variant: "border"
          },
          {},
          {
            default: () => {
              return `Disconnect Slack`;
            }
          }
        )} ${validate_component(Button, "Button").$$render(
          $$result,
          {
            size: "sm",
            endIcon: { icon: Code_2 },
            href: base + "/scripts/add?hub=hub%2F314%2Fslack%2Fexample_of_responding_to_a_slack_command_slack"
          },
          {},
          {
            default: () => {
              return `Create a script to handle slack commands`;
            }
          }
        )} ${validate_component(Button, "Button").$$render(
          $$result,
          {
            size: "sm",
            endIcon: { icon: BarsStaggered },
            href: base + "/flows/add?hub=28"
          },
          {},
          {
            default: () => {
              return `Create a flow to handle slack commands`;
            }
          }
        )}</div>` : `<div class="flex flex-row gap-2">${validate_component(Button, "Button").$$render(
          $$result,
          {
            size: "xs",
            color: "dark",
            href: base + "/api/oauth/connect_slack",
            startIcon: { icon: Slack }
          },
          {},
          {
            default: () => {
              return `Connect to Slack`;
            }
          }
        )} ${validate_component(Badge, "Badge").$$render($$result, { color: "red" }, {}, {
          default: () => {
            return `Not connnected`;
          }
        })}</div>`}</div> <div class="bg-surface-disabled p-4 rounded-md flex flex-col gap-1"><div class="text-primary font-md font-semibold" data-svelte-h="svelte-1hb434f">Script or flow to run on /windmill command</div> <div class="relative">${!team_name ? `<div class="absolute top-0 right-0 bottom-0 left-0 bg-surface-disabled/50 z-40"></div>` : ``} ${validate_component(ScriptPicker, "ScriptPicker").$$render(
          $$result,
          {
            kinds: ["script"],
            allowFlow: true,
            initialPath,
            itemKind,
            scriptPath
          },
          {
            itemKind: ($$value) => {
              itemKind = $$value;
              $$settled = false;
            },
            scriptPath: ($$value) => {
              scriptPath = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div> <div class="prose text-2xs text-tertiary">Pick a script or flow meant to be triggered when the \`/windmill\` command is invoked. Upon
					connection, templates for a <a href="${escape($hubBaseUrlStore, true) + "/scripts/slack/1405/"}">script</a>
					and <a href="${escape($hubBaseUrlStore, true) + "/flows/28/"}">flow</a> are available.

					<br><br>

					The script or flow chosen is passed the parameters \`response_url: string\` and \`text:
					string\` respectively the url to reply directly to the trigger and the text of the command.

					<br><br>

					It can take additionally the following args: channel_id, user_name, user_id, command,
					trigger_id, api_app_id

					<br><br> <span class="font-bold text-xs" data-svelte-h="svelte-1kujcni">The script or flow is permissioned as group &quot;slack&quot; that will be automatically created
						after connection to Slack.</span> <br><br>

					See more on <a href="https://www.windmill.dev/docs/integrations/slack" data-svelte-h="svelte-1j5l8x6">documentation</a>.</div></div>` : `${tab == "general" ? `<div class="flex flex-col gap-4 my-8" data-svelte-h="svelte-q00k61"><div class="text-primary text-lg font-semibold">General</div></div> <div class="flex flex-col gap-10">${validate_component(ChangeWorkspaceName, "ChangeWorkspaceName").$$render($$result, {}, {}, {})} ${validate_component(ChangeWorkspaceId, "ChangeWorkspaceId").$$render($$result, {}, {}, {})}</div> ${validate_component(PageHeader, "PageHeader").$$render(
          $$result,
          {
            title: "Export workspace",
            primary: false
          },
          {},
          {}
        )} <div class="flex justify-start">${validate_component(Button, "Button").$$render(
          $$result,
          {
            size: "sm",
            href: base + "/api/w/" + ($workspaceStore ?? "") + "/workspaces/tarball?archive_type=zip",
            target: "_blank"
          },
          {},
          {
            default: () => {
              return `Export workspace as zip file`;
            }
          }
        )}</div> <div class="mt-20"></div> ${validate_component(PageHeader, "PageHeader").$$render(
          $$result,
          {
            title: "Delete workspace",
            primary: false
          },
          {},
          {}
        )} <p class="italic text-xs" data-svelte-h="svelte-1yymb1">The workspace will be archived for a short period of time and then permanently deleted</p> ${$workspaceStore === "admins" || $workspaceStore === "starter" ? `<p class="italic text-xs" data-svelte-h="svelte-1vfsai6">This workspace cannot be deleted as it has a special function. Consult the documentation
					for more information.</p>` : ``} <div class="flex gap-2">${validate_component(Button, "Button").$$render(
          $$result,
          {
            color: "red",
            disabled: $workspaceStore === "admins" || $workspaceStore === "starter",
            size: "sm",
            btnClasses: "mt-2"
          },
          {},
          {
            default: () => {
              return `Archive workspace`;
            }
          }
        )} ${$superadmin ? `${validate_component(Button, "Button").$$render(
          $$result,
          {
            color: "red",
            disabled: $workspaceStore === "admins" || $workspaceStore === "starter",
            size: "sm",
            btnClasses: "mt-2"
          },
          {},
          {
            default: () => {
              return `Delete workspace (superadmin)`;
            }
          }
        )}` : ``}</div>` : `${tab == "webhook" ? `<div class="flex flex-col gap-4 my-8" data-svelte-h="svelte-1sn41pb"><div class="flex flex-col gap-1"><div class="text-primary text-lg font-semibold">Workspace Webhook</div> <div class="text-tertiary text-xs">Connect your Windmill workspace to an external service to sync or get notified about any
						change.
						<a href="https://www.windmill.dev/docs/core_concepts/webhooks#workspace-webhook" target="_blank" class="text-blue-500">Learn more</a>.</div></div></div> <div class="flex flex-col gap-4 my-4" data-svelte-h="svelte-thgl0q"><div class="flex flex-col gap-1"><div class="text-primary text-base font-semibold">URL to send requests to</div> <div class="text-tertiary text-xs">This URL will be POSTed to with a JSON body depending on the type of event. The type is
						indicated by the type field. The other fields are dependent on the type.</div></div></div> <div class="flex gap-2"><input class="justify-start" type="text"${add_attribute("value", webhook, 0)}> ${validate_component(Button, "Button").$$render($$result, { color: "blue", btnClasses: "justify-end" }, {}, {
          default: () => {
            return `Set Webhook`;
          }
        })}</div>` : `${tab == "error_handler" ? `${!$enterpriseLicense ? `<div class="pt-4"></div> ${validate_component(Alert, "Alert").$$render(
          $$result,
          {
            type: "info",
            title: "Workspace error handler is an EE feature"
          },
          {},
          {
            default: () => {
              return `Workspace error handler is a Windmill EE feature. It enables using your current Slack
					connection or a custom script to send notifications anytime any job would fail.`;
            }
          }
        )}` : ``} <div class="flex flex-col gap-4 my-8" data-svelte-h="svelte-158mj7j"><div class="flex flex-col gap-1"><div class="text-primary text-lg font-semibold">Workspace Error Handler</div> <div class="text-tertiary text-xs">Define a script or flow to be executed automatically in case of error in the workspace.
						<a href="https://www.windmill.dev/docs/core_concepts/error_handling#workspace-error-handler" target="_blank" class="text-blue-500">Learn more</a>.</div></div></div> <div class="flex flex-col gap-4 my-4" data-svelte-h="svelte-59ywvq"><div class="flex flex-col gap-1"><div class="text-primary text-base font-semibold">Script or flow to run as error handler</div></div></div> ${validate_component(ErrorOrRecoveryHandler, "ErrorOrRecoveryHandler").$$render(
          $$result,
          {
            isEditable: true,
            errorOrRecovery: "error",
            showScriptHelpText: true,
            customInitialScriptPath: errorHandlerInitialScriptPath,
            customScriptTemplate: "/scripts/add?hub=hub%2F2420%2Fwindmill%2Fworkspace_error_handler_template",
            handlerSelected: errorHandlerSelected,
            handlerPath: errorHandlerScriptPath,
            customHandlerKind: errorHandlerItemKind,
            handlerExtraArgs: errorHandlerExtraArgs
          },
          {
            handlerSelected: ($$value) => {
              errorHandlerSelected = $$value;
              $$settled = false;
            },
            handlerPath: ($$value) => {
              errorHandlerScriptPath = $$value;
              $$settled = false;
            },
            customHandlerKind: ($$value) => {
              errorHandlerItemKind = $$value;
              $$settled = false;
            },
            handlerExtraArgs: ($$value) => {
              errorHandlerExtraArgs = $$value;
              $$settled = false;
            }
          },
          {
            "custom-tab-tooltip": () => {
              return `${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="flex gap-20 items-start mt-3" data-svelte-h="svelte-w15qgr"><div class="text-sm">The following args will be passed to the error handler:
								<ul class="mt-1 ml-2"><li><b>path</b>: The path of the script or flow that errored.</li> <li><b>email</b>: The email of the user who ran the script or flow that errored.</li> <li><b>error</b>: The error details.</li> <li><b>job_id</b>: The job id.</li> <li><b>is_flow</b>: Whether the error comes from a flow.</li> <li><b>workspace_id</b>: The workspace id of the failed script or flow.</li></ul> <br>
								The error handler will be executed by the automatically created group g/error_handler.
								If your error handler requires variables or resources, you need to add them to the group.</div></div>`;
                }
              })}`;
            }
          }
        )} <div class="flex flex-col mt-5 gap-5 items-start">${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            disabled: !$enterpriseLicense || errorHandlerSelected === "slack" && !emptyString(errorHandlerScriptPath) && emptyString(errorHandlerExtraArgs["channel"]),
            options: {
              right: "Do not run error handler for canceled jobs"
            },
            checked: errorHandlerMutedOnCancel
          },
          {
            checked: ($$value) => {
              errorHandlerMutedOnCancel = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Button, "Button").$$render(
          $$result,
          {
            disabled: !$enterpriseLicense || errorHandlerSelected === "slack" && !emptyString(errorHandlerScriptPath) && emptyString(errorHandlerExtraArgs["channel"]),
            size: "sm"
          },
          {},
          {
            default: () => {
              return `Save`;
            }
          }
        )}</div>` : `${tab == "openai" ? `<div class="flex flex-col gap-4 my-8" data-svelte-h="svelte-1iua73m"><div class="flex flex-col gap-1"><div class="text-primary text-lg font-semibold">Windmill AI</div> <div class="text-tertiary text-xs">Select an OpenAI resource to unlock Windmill AI features.</div> <div class="text-tertiary text-xs">Windmill AI uses OpenAI&#39;s GPT-4o for all AI features.
						<a href="https://www.windmill.dev/docs/core_concepts/ai_generation" target="_blank" class="text-blue-500">Learn more</a>.</div></div></div> <div class="mt-5 flex gap-1">${validate_component(ResourcePicker, "ResourcePicker").$$render(
          $$result,
          {
            resourceType: usingOpenaiClientCredentialsOauth ? "openai_client_credentials_oauth" : "openai",
            initialValue: openaiResourceInitialPath
          },
          {},
          {}
        )} ${validate_component(TestOpenaiKey, "TestOpenaiKey").$$render($$result, { disabled: !openaiResourceInitialPath }, {}, {})}</div> <div class="mt-3">${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            class: "mr-2",
            options: { right: "Enable code completion" },
            checked: codeCompletionEnabled
          },
          {
            checked: ($$value) => {
              codeCompletionEnabled = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div>` : `${tab == "windmill_lfs" ? `<div class="flex flex-col gap-4 my-8" data-svelte-h="svelte-17tjalz"><div class="flex flex-col gap-1"><div class="text-primary text-lg font-semibold">S3 Storage</div> <div class="text-tertiary text-xs">Connect your Windmill workspace to your S3 bucket or your Azure Blob storage.
						<a href="https://www.windmill.dev/docs/core_concepts/persistent_storage/large_data_files" target="_blank" class="text-blue-500">Learn more</a>.</div></div></div> ${!$enterpriseLicense ? `${validate_component(Alert, "Alert").$$render(
          $$result,
          {
            type: "info",
            title: "S3 storage is limited to 20 files in Windmill CE"
          },
          {},
          {
            default: () => {
              return `Windmill S3 bucket browser will not work for buckets containing more than 20 files and
					uploads are limited to files ${escape("<")} 50MB. Consider upgrading to Windmill EE to use this feature
					with large buckets.`;
            }
          }
        )}` : `${validate_component(Alert, "Alert").$$render(
          $$result,
          {
            type: "info",
            title: "Logs storage is set at the instance level"
          },
          {},
          {
            default: () => {
              return `This setting is only for storage of large files allowing to upload files directly to
					object storage using S3Object and use the wmill sdk to read and write large files backed
					by an object storage. The automatics large logs storage is set by the superadmins in the
					instance settings UI.`;
            }
          }
        )}`} ${s3ResourceSettings ? `<div class="mt-5"><div class="w-full">${validate_component(Tabs, "Tabs").$$render(
          $$result,
          {
            selected: s3ResourceSettings.resourceType
          },
          {
            selected: ($$value) => {
              s3ResourceSettings.resourceType = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `${validate_component(Tab, "Tab").$$render($$result, { exact: true, size: "xs", value: "s3" }, {}, {
                default: () => {
                  return `S3`;
                }
              })} ${validate_component(Tab, "Tab").$$render($$result, { size: "xs", value: "azure_blob" }, {}, {
                default: () => {
                  return `Azure Blob`;
                }
              })} ${validate_component(Tab, "Tab").$$render(
                $$result,
                {
                  exact: true,
                  size: "xs",
                  value: "s3_aws_oidc"
                },
                {},
                {
                  default: () => {
                    return `AWS OIDC`;
                  }
                }
              )} ${validate_component(Tab, "Tab").$$render(
                $$result,
                {
                  size: "xs",
                  value: "azure_workload_identity"
                },
                {},
                {
                  default: () => {
                    return `Azure Workload Identity`;
                  }
                }
              )}`;
            }
          }
        )}</div> <div class="w-full flex gap-1 mt-4">${validate_component(ResourcePicker, "ResourcePicker").$$render(
          $$result,
          {
            resourceType: s3ResourceSettings.resourceType,
            value: s3ResourceSettings.resourcePath
          },
          {
            value: ($$value) => {
              s3ResourceSettings.resourcePath = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Button, "Button").$$render(
          $$result,
          {
            size: "sm",
            variant: "contained",
            color: "dark",
            disabled: emptyString(s3ResourceSettings.resourcePath)
          },
          {},
          {
            default: () => {
              return `Browse content (save first)`;
            }
          }
        )}</div></div> ${s3ResourceSettings.resourceType == "s3" ? `<div class="flex flex-col mt-5 mb-1 gap-1">${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            disabled: emptyString(s3ResourceSettings.resourcePath),
            options: {
              right: "S3 resource details and content can be accessed by all users of this workspace",
              rightTooltip: 'If set, all users of this workspace will have access the to entire content of the S3 bucket, as well as the resource details and the "open preview" button. This effectively by-pass the permissions set on the resource and makes it public to everyone.'
            },
            checked: s3ResourceSettings.publicResource
          },
          {
            checked: ($$value) => {
              s3ResourceSettings.publicResource = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${s3ResourceSettings.publicResource === true ? `<div class="pt-2"></div> ${validate_component(Alert, "Alert").$$render(
          $$result,
          {
            type: "warning",
            title: "S3 bucket content and resource details are shared"
          },
          {},
          {
            default: () => {
              return `S3 resource public access is ON, which means that the entire content of the S3
								bucket will be accessible to all the users of this workspace regardless of whether
								they have access the resource or not. Similarly, certain Windmill SDK endpoints can
								be used in scripts to access the resource details, including public and private
								keys.`;
            }
          }
        )}` : ``}</div>` : `<div class="flex flex-col mt-5 mb-1 gap-1">${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            disabled: emptyString(s3ResourceSettings.resourcePath),
            options: {
              right: "object storage content can be accessed by all users of this workspace",
              rightTooltip: "If set, all users of this workspace will have access the to entire content of the object storage."
            },
            checked: s3ResourceSettings.publicResource
          },
          {
            checked: ($$value) => {
              s3ResourceSettings.publicResource = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${s3ResourceSettings.publicResource === true ? `<div class="pt-2"></div> ${validate_component(Alert, "Alert").$$render($$result, { type: "warning", title: "object content" }, {}, {
          default: () => {
            return `object public access is ON, which means that the entire content of the object store
								will be accessible to all the users of this workspace regardless of whether they
								have access the resource or not.`;
          }
        })}` : ``}</div>`} <div class="mt-6"><div class="flex mt-2 flex-col gap-y-4 max-w-3xl">${each(s3ResourceSettings.secondaryStorage ?? [], (secondaryStorage, idx) => {
          return `<div class="flex gap-1 items-center"><input class="max-w-[200px]" type="text" placeholder="Storage name"${add_attribute("value", secondaryStorage[0], 0)}> <select class="max-w-[125px]"><option value="s3" data-svelte-h="svelte-1yz0d7m">S3</option><option value="azure_blob" data-svelte-h="svelte-ykdvs1">Azure Blob</option><option value="s3_aws_oidc" data-svelte-h="svelte-xzqqu2">AWS OIDC</option><option value="azure_workload_identity" data-svelte-h="svelte-5n004k">Azure Workload Identity</option></select> ${validate_component(ResourcePicker, "ResourcePicker").$$render(
            $$result,
            {
              resourceType: secondaryStorage[1].resourceType,
              value: secondaryStorage[1].resourcePath
            },
            {
              value: ($$value) => {
                secondaryStorage[1].resourcePath = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${validate_component(Button, "Button").$$render(
            $$result,
            {
              size: "sm",
              variant: "contained",
              color: "dark",
              disabled: emptyString(secondaryStorage[1].resourcePath)
            },
            {},
            {
              default: () => {
                return `Browse content (save first)`;
              }
            }
          )} <button class="rounded-full p-1 bg-surface-secondary duration-200 hover:bg-surface-hover ml-2" aria-label="Clear">${validate_component(X, "X").$$render($$result, { size: 14 }, {}, {})}</button> </div>`;
        })} <div class="flex gap-1">${validate_component(Button, "Button").$$render($$result, { size: "xs", variant: "border" }, {}, {
          default: () => {
            return `${validate_component(Plus, "Plus").$$render($$result, { size: 14 }, {}, {})}Add secondary storage`;
          }
        })} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `Secondary storage is a feature that allows you to read and write from storage that
								isn&#39;t your main storage by specifying it in the s3 object as &quot;secondary_storage&quot;
								with the name of it`;
          }
        })}</div></div></div> <div class="flex mt-5 mb-5 gap-1">${validate_component(Button, "Button").$$render(
          $$result,
          {
            color: "blue",
            disabled: emptyString(s3ResourceSettings.resourcePath)
          },
          {},
          {
            default: () => {
              return `Save S3 settings`;
            }
          }
        )}</div>` : ``}` : `${tab == "git_sync" ? `<div class="flex flex-col gap-4 my-8" data-svelte-h="svelte-u3fw8y"><div class="flex flex-col gap-1"><div class="text-primary text-lg font-semibold">Git Sync</div> <div class="text-tertiary text-xs">Connect the Windmill workspace to a Git repository to automatically commit and push
						scripts, flows, and apps to the repository on each deploy.
						<a href="https://www.windmill.dev/docs/advanced/git_sync" target="_blank" class="text-blue-500">Learn more</a>.</div></div></div> ${!$enterpriseLicense ? `<div class="mb-2"></div> ${validate_component(Alert, "Alert").$$render(
          $$result,
          {
            type: "warning",
            title: "Syncing workspace to Git is an EE feature"
          },
          {},
          {
            default: () => {
              return `Automatically saving scripts to a Git repository on each deploy is a Windmill EE feature.`;
            }
          }
        )} <div class="mb-2"></div>` : ``} ${gitSyncSettings != void 0 ? `${$enterpriseLicense ? `<div class="flex mt-5 mb-5 gap-1">${validate_component(Button, "Button").$$render(
          $$result,
          {
            color: "blue",
            disabled: gitSyncSettings?.repositories?.some((elmt) => emptyString(elmt.git_repo_resource_path))
          },
          {},
          {
            default: () => {
              return `Save Git sync settings`;
            }
          }
        )}</div>` : ``} <div class="flex flex-wrap gap-20"><div class="max-w-md w-full">${Array.isArray(gitSyncSettings?.include_path) ? `<h4 class="flex gap-2 mb-4">Filter on path${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `Only scripts, flows and apps with their path matching one of those filters will be
									synced to the Git repositories below. The filters allow &#39;*&#39;&#39; and &#39;**&#39; characters,
									with &#39;*&#39;&#39; matching any character allowed in paths until the next slash (/) and
									&#39;**&#39; matching anything including slashes.
									<br>By default everything in folders will be synced.`;
          }
        })}</h4> ${each(gitSyncSettings.include_path ?? [], (gitSyncRegexpPath, idx) => {
          return `<div class="flex mt-1 items-center"><input type="text" id="arg-input-array"${add_attribute("value", gitSyncRegexpPath, 0)}> <button class="rounded-full p-1 bg-surface-secondary duration-200 hover:bg-surface-hover ml-2" aria-label="Clear">${validate_component(X, "X").$$render($$result, { size: 14 }, {}, {})}</button> </div>`;
        })}` : ``} <div class="flex mt-2">${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "border",
            color: "light",
            size: "xs",
            btnClasses: "mt-1",
            id: "git-sync-add-path-filter",
            startIcon: { icon: Plus }
          },
          {},
          {
            default: () => {
              return `Add filter`;
            }
          }
        )}</div></div> <div class="max-w-md w-full"><h4 class="flex gap-2 mb-4">Filter on type${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `On top of the filter path above, you can include only certain type of object to be
								synced with the Git repository.
								<br>By default everything is synced.`;
          }
        })}</h4> <div class="flex flex-col gap-2 mt-1">${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            options: { right: "Scripts" },
            checked: gitSyncSettings.include_type.scripts
          },
          {
            checked: ($$value) => {
              gitSyncSettings.include_type.scripts = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            options: { right: "Flows" },
            checked: gitSyncSettings.include_type.flows
          },
          {
            checked: ($$value) => {
              gitSyncSettings.include_type.flows = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            options: { right: "Apps" },
            checked: gitSyncSettings.include_type.apps
          },
          {
            checked: ($$value) => {
              gitSyncSettings.include_type.apps = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            options: { right: "Folders" },
            checked: gitSyncSettings.include_type.folders
          },
          {
            checked: ($$value) => {
              gitSyncSettings.include_type.folders = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            options: { right: "Resources" },
            checked: gitSyncSettings.include_type.resources
          },
          {
            checked: ($$value) => {
              gitSyncSettings.include_type.resources = $$value;
              $$settled = false;
            }
          },
          {}
        )} <div class="flex gap-3">${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            options: { right: "Variables " },
            checked: gitSyncSettings.include_type.variables
          },
          {
            checked: ($$value) => {
              gitSyncSettings.include_type.variables = $$value;
              $$settled = false;
            }
          },
          {}
        )} <span data-svelte-h="svelte-1s4sarz">-</span> ${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            disabled: !gitSyncSettings.include_type.variables,
            options: { left: "Include secrets" },
            checked: gitSyncSettings.include_type.secrets
          },
          {
            checked: ($$value) => {
              gitSyncSettings.include_type.secrets = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div> ${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            options: { right: "Schedules" },
            checked: gitSyncSettings.include_type.schedules
          },
          {
            checked: ($$value) => {
              gitSyncSettings.include_type.schedules = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            options: { right: "Resource Types" },
            checked: gitSyncSettings.include_type.resourceTypes
          },
          {
            checked: ($$value) => {
              gitSyncSettings.include_type.resourceTypes = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            options: { right: "Users" },
            checked: gitSyncSettings.include_type.users
          },
          {
            checked: ($$value) => {
              gitSyncSettings.include_type.users = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            options: { right: "Groups" },
            checked: gitSyncSettings.include_type.groups
          },
          {
            checked: ($$value) => {
              gitSyncSettings.include_type.groups = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div></div></div> <h4 class="flex gap-2 mt-5 mb-5">Repositories to sync${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `The changes will be deployed to all the repositories set below.`;
          }
        })}</h4> ${Array.isArray(gitSyncSettings.repositories) ? `${each(gitSyncSettings.repositories, (gitSyncRepository, idx) => {
          return `<div class="flex mt-5 mb-1 gap-1 items-center text-xs"><h6>Repository #${escape(idx + 1)}</h6> <button class="rounded-full p-1 bg-surface-secondary duration-200 hover:bg-surface-hover ml-2" aria-label="Clear">${validate_component(X, "X").$$render($$result, { size: 14 }, {}, {})} </button></div> <div class="flex mt-5 mb-1 gap-1">${validate_component(ResourcePicker, "ResourcePicker").$$render(
            $$result,
            {
              resourceType: "git_repository",
              initialValue: gitSyncRepository.git_repo_resource_path
            },
            {},
            {}
          )} ${validate_component(Button, "Button").$$render(
            $$result,
            {
              disabled: emptyString(gitSyncRepository.script_path),
              btnClasses: "w-32 text-center",
              color: "dark",
              size: "xs"
            },
            {},
            {
              default: () => {
                return `Test connection`;
              }
            }
          )}</div> <div class="flex mb-5 text-normal text-2xs gap-1">${gitSyncSettings.repositories.filter((settings) => settings.git_repo_resource_path === gitSyncRepository.git_repo_resource_path).length > 1 ? `<span class="text-red-700" data-svelte-h="svelte-bm0sci">Using the same resource twice is not allowed.</span>` : ``} ${gitSyncTestJobs[idx].status !== void 0 ? `${gitSyncTestJobs[idx].status === "running" ? `${validate_component(Rotate_cw, "RotateCw").$$render($$result, { size: 14 }, {}, {})}` : `${gitSyncTestJobs[idx].status === "success" ? `${validate_component(Check_circle_2, "CheckCircle2").$$render($$result, { size: 14, class: "text-green-600" }, {}, {})}` : `${validate_component(X_circle, "XCircle").$$render($$result, { size: 14, class: "text-red-700" }, {}, {})}`}`}
								Git sync resource checked via Windmill job
								<a target="_blank"${add_attribute("href", `/run/${gitSyncTestJobs[idx].jobId}?workspace=${$workspaceStore}`, 0)}>${escape(gitSyncTestJobs[idx].jobId)} </a>WARNING: Only read permissions are verified.` : ``}</div> <div class="flex flex-col mt-5 mb-1 gap-4">${gitSyncSettings && gitSyncRepository ? `${gitSyncRepository.script_path != latestGitSyncHubScript ? `${validate_component(Alert, "Alert").$$render(
            $$result,
            {
              type: "warning",
              title: "Script version mismatch"
            },
            {},
            {
              default: () => {
                return `The git sync version for this repository is not latest. Current: <a target="_blank" href="https://hub.windmill.dev/scripts/windmill/6943/sync-script-to-git-repo-windmill/5813/versions">${escape(gitSyncRepository.script_path)}</a>, latest:
										<a target="_blank" href="https://hub.windmill.dev/scripts/windmill/6943/sync-script-to-git-repo-windmill/5813/versions">${escape(latestGitSyncHubScript)}</a> <div class="flex mt-2">${validate_component(Button, "Button").$$render($$result, { size: "xs", color: "dark" }, {}, {
                  default: () => {
                    return `Update git sync script (require save git settings to be applied)`;
                  }
                })}</div> `;
              }
            }
          )}` : ``} ${validate_component(Toggle, "Toggle").$$render(
            $$result,
            {
              disabled: emptyString(gitSyncRepository.git_repo_resource_path),
              options: {
                right: "Create one branch per deployed object",
                rightTooltip: "If set, Windmill will create a unique branch per object being pushed based on its path, prefixed with 'wm_deploy/'."
              },
              checked: gitSyncRepository.use_individual_branch
            },
            {
              checked: ($$value) => {
                gitSyncRepository.use_individual_branch = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${validate_component(Toggle, "Toggle").$$render(
            $$result,
            {
              disabled: emptyString(gitSyncRepository.git_repo_resource_path) || !gitSyncRepository.use_individual_branch,
              options: {
                right: "Group deployed objects by folder",
                rightTooltip: "Instead of creating a branch per object, Windmill will create a branch per folder containing objects being deployed."
              },
              checked: gitSyncRepository.group_by_folder
            },
            {
              checked: ($$value) => {
                gitSyncRepository.group_by_folder = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``}</div> <div class="flex flex-col mt-5 mb-1 gap-1">${gitSyncSettings && Object.keys(gitSyncSettings.include_type).some((k) => gitSyncSettings.include_type[k] === true) ? `<h6 data-svelte-h="svelte-1ci84ck">Exclude specific types for this repository only</h6> ${gitSyncSettings.include_type.scripts ? `${validate_component(Toggle, "Toggle").$$render(
            $$result,
            {
              color: "red",
              options: { right: "Exclude scripts" },
              checked: gitSyncRepository.exclude_types_override.scripts
            },
            {
              checked: ($$value) => {
                gitSyncRepository.exclude_types_override.scripts = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``} ${gitSyncSettings.include_type.flows ? `${validate_component(Toggle, "Toggle").$$render(
            $$result,
            {
              color: "red",
              options: { right: "Exclude flows" },
              checked: gitSyncRepository.exclude_types_override.flows
            },
            {
              checked: ($$value) => {
                gitSyncRepository.exclude_types_override.flows = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``} ${gitSyncSettings.include_type.apps ? `${validate_component(Toggle, "Toggle").$$render(
            $$result,
            {
              color: "red",
              options: { right: "Exclude apps" },
              checked: gitSyncRepository.exclude_types_override.apps
            },
            {
              checked: ($$value) => {
                gitSyncRepository.exclude_types_override.apps = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``} ${gitSyncSettings.include_type.folders ? `${validate_component(Toggle, "Toggle").$$render(
            $$result,
            {
              color: "red",
              options: { right: "Exclude folders" },
              checked: gitSyncRepository.exclude_types_override.folders
            },
            {
              checked: ($$value) => {
                gitSyncRepository.exclude_types_override.folders = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``} ${gitSyncSettings.include_type.resources ? `${validate_component(Toggle, "Toggle").$$render(
            $$result,
            {
              color: "red",
              options: { right: "Exclude resources" },
              checked: gitSyncRepository.exclude_types_override.resources
            },
            {
              checked: ($$value) => {
                gitSyncRepository.exclude_types_override.resources = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``} ${gitSyncSettings.include_type.variables ? `<div class="flex gap-3">${validate_component(Toggle, "Toggle").$$render(
            $$result,
            {
              color: "red",
              options: { right: "Exclude variables " },
              checked: gitSyncRepository.exclude_types_override.variables
            },
            {
              checked: ($$value) => {
                gitSyncRepository.exclude_types_override.variables = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${gitSyncSettings.include_type.secrets ? `<span data-svelte-h="svelte-1s4sarz">-</span> ${validate_component(Toggle, "Toggle").$$render(
            $$result,
            {
              color: "red",
              disabled: gitSyncRepository.exclude_types_override.variables,
              options: { left: "Exclude secrets" },
              checked: gitSyncRepository.exclude_types_override.secrets
            },
            {
              checked: ($$value) => {
                gitSyncRepository.exclude_types_override.secrets = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``} </div>` : ``} ${gitSyncSettings.include_type.schedules ? `${validate_component(Toggle, "Toggle").$$render(
            $$result,
            {
              color: "red",
              options: { right: "Exclude schedules" },
              checked: gitSyncRepository.exclude_types_override.schedules
            },
            {
              checked: ($$value) => {
                gitSyncRepository.exclude_types_override.schedules = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``} ${gitSyncSettings.include_type.resourceTypes ? `${validate_component(Toggle, "Toggle").$$render(
            $$result,
            {
              color: "red",
              options: { right: "Exclude resource types" },
              checked: gitSyncRepository.exclude_types_override.resourceTypes
            },
            {
              checked: ($$value) => {
                gitSyncRepository.exclude_types_override.resourceTypes = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``}` : ``} </div>`;
        })}` : ``} <div class="flex mt-5 mb-5 gap-1">${validate_component(Button, "Button").$$render(
          $$result,
          {
            color: "none",
            variant: "border",
            size: "xs",
            btnClasses: "mt-1",
            id: "git-sync-add-connection",
            startIcon: { icon: Plus }
          },
          {},
          {
            default: () => {
              return `Add connection`;
            }
          }
        )}</div> <div class="bg-surface-disabled p-4 rounded-md flex flex-col gap-1"><div class="text-primary font-md font-semibold" data-svelte-h="svelte-1qexfuo">Git repository initial setup</div> <div class="prose max-w-none text-2xs text-tertiary">Every time a script is deployed, only the updated script will be pushed to the remote
						Git repository.

						<br>

						. For the git repo to be representative of the entire workspace, it is recommended to
						set it up using the Windmill CLI before turning this option on.

						<br><br>

						Not familiar with Windmill CLI?
						<a href="https://www.windmill.dev/docs/advanced/cli" data-svelte-h="svelte-1aiihu1">Check out the docs</a> <br><br>

						Run the following commands from the git repo folder to push the initial workspace
						content to the remote:

						<br> <pre class="overflow-auto max-h-screen"><code>wmill workspace add  ${escape($workspaceStore)} ${escape($workspaceStore)} ${escape(`${$page.url.protocol}//${$page.url.hostname}/`)}
echo &#39;includes: [&quot;f/**&quot;]&#39; &gt; wmill.yaml
wmill sync pull --raw --skip-variables --skip-secrets --skip-resources
git add -A
git commit -m &#39;Initial commit&#39;
git push</code></pre></div></div>` : `${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin mt-4", size: 20 }, {}, {})}`}` : `${tab == "default_app" ? `<div class="flex flex-col gap-4 my-8" data-svelte-h="svelte-1udsbm9"><div class="flex flex-col gap-1"><div class="text-primary text-lg font-semibold">Workspace default app</div> <div class="text-tertiary text-xs">If configured, users who are operators in this workspace will be redirected to this app
						automatically when logging into this workspace.</div> <div class="text-tertiary text-xs">Make sure the default app is shared with all the operators of this workspace before
						turning this feature on.
						<a href="https://www.windmill.dev/docs/apps/default_app" target="_blank" class="text-blue-500">Learn more</a>.</div></div></div> ${!$enterpriseLicense ? `${validate_component(Alert, "Alert").$$render(
          $$result,
          {
            type: "info",
            title: "Windmill EE only feature"
          },
          {},
          {
            default: () => {
              return `Default app can only be set on Windmill Enterprise Edition.`;
            }
          }
        )}` : ``} ${validate_component(Alert, "Alert").$$render(
          $$result,
          {
            type: "info",
            title: "Default app must be accessible to all operators"
          },
          {},
          {
            default: () => {
              return `Make sure the default app is shared with all the operators of this workspace before turning
				this feature on.`;
            }
          }
        )} <div class="mt-5 flex gap-1">${validate_component(ScriptPicker, "ScriptPicker").$$render(
          $$result,
          {
            initialPath: workspaceDefaultAppPath,
            itemKind: "app"
          },
          {},
          {}
        )}</div>` : `${tab == "encryption" ? `<div class="flex flex-col gap-4 my-8" data-svelte-h="svelte-1qi8xkh"><div class="flex flex-col gap-1"><div class="text-primary text-lg font-semibold">Workspace secret encryption</div> <div class="text-tertiary text-xs">When updating the encryption key of a workspace, all secrets will be re-encrypted with
						the new key and the previous key will be replaced by the new one.</div> <div class="text-tertiary text-xs">If you&#39;re manually updating the key to match another workspace key from another Windmill
						instance, make sure not to use the &#39;SECRET_SALT&#39; environment variable or, if you&#39;re
						using it, make sure it the salt matches across both instances.
						<a href="https://www.windmill.dev/docs/core_concepts/workspace_secret_encryption" target="_blank" class="text-blue-500">Learn more</a>.</div></div></div> <div class="mt-5 flex gap-1 mb-10">${validate_component(Button, "Button").$$render(
          $$result,
          {
            color: "blue",
            disabled: editedWorkspaceEncryptionKey === workspaceEncryptionKey,
            startIcon: {
              icon: Save,
              classes: ""
            }
          },
          {},
          {
            default: () => {
              return `Save &amp; Re-encrypt workspace`;
            }
          }
        )}</div> <h6 data-svelte-h="svelte-1w7d3n1">Workspace encryption key</h6> <div class="flex gap-2 mt-1"><input class="justify-start" type="text"${add_attribute("placeholder", "*".repeat(64), 0)}${add_attribute("value", editedWorkspaceEncryptionKey, 0)}> ${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
          default: () => {
            return `Load current key`;
          }
        })}</div> ${!emptyString(editedWorkspaceEncryptionKey) && !encryptionKeyRegex.test("") ? `<div class="text-xs text-red-600" data-svelte-h="svelte-1k2rx0i">Key invalid - it should be 64 characters long and only contain letters and numbers.</div>` : ``}` : ``}`}`}`}`}`}`}`}`}`}`}`}` : `<div class="bg-red-100 border-l-4 border-red-600 text-orange-700 p-4 m-4" role="alert" data-svelte-h="svelte-w8kj6q"><p class="font-bold">Not an admin</p> <p>Workspace settings are only available for admin of workspaces</p></div>`}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_workspaceStore();
  $$unsubscribe_enterpriseLicense();
  $$unsubscribe_userStore();
  $$unsubscribe_superadmin();
  $$unsubscribe_hubBaseUrlStore();
  return $$rendered;
});
export {
  Page as default
};
