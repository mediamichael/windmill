import { c as create_ssr_component, v as validate_component, s as subscribe, f as each, e as escape } from "../../../../../../../chunks/ssr.js";
import "../../../../../../../chunks/client.js";
import { b as base } from "../../../../../../../chunks/paths.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import "../../../../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import { B as Button } from "../../../../../../../chunks/toast.js";
import { g as goto } from "../../../../../../../chunks/navigation.js";
import { U as UserService, W as WorkspaceService } from "../../../../../../../chunks/services.gen.js";
import { c as clearStores, s as switchWorkspace } from "../../../../../../../chunks/storeUtils.js";
import "../../../../../../../chunks/common.js";
import "yaml";
import "minimatch";
import { w as workspaceStore, u as userStore, b as superadmin, n as userWorkspaces, a as usersWorkspaceStore } from "../../../../../../../chunks/stores2.js";
import "../../../../../../../chunks/index2.js";
/* empty css                                                               */
import { S as Skeleton } from "../../../../../../../chunks/Skeleton.js";
import { T as Toggle } from "../../../../../../../chunks/Toggle.js";
import { U as UserSettings } from "../../../../../../../chunks/UserSettings.js";
import { U as USER_SETTINGS_HASH, S as SuperadminSettings, C as Crown } from "../../../../../../../chunks/SuperadminSettings.js";
import { C as CenteredModal } from "../../../../../../../chunks/CenteredModal.js";
import { i as isCloudHosted } from "../../../../../../../chunks/cloud.js";
import { I as Icon } from "../../../../../../../chunks/Icon.js";
const Cog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
      }
    ],
    [
      "path",
      {
        "d": "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      }
    ],
    ["path", { "d": "M12 2v2" }],
    ["path", { "d": "M12 22v-2" }],
    ["path", { "d": "m17 20.66-1-1.73" }],
    ["path", { "d": "M11 10.27 7 3.34" }],
    ["path", { "d": "m20.66 17-1.73-1" }],
    ["path", { "d": "m3.34 7 1.73 1" }],
    ["path", { "d": "M14 12h8" }],
    ["path", { "d": "M2 12h2" }],
    ["path", { "d": "m20.66 7-1.73 1" }],
    ["path", { "d": "m3.34 17 1.73-1" }],
    ["path", { "d": "m17 3.34-1 1.73" }],
    ["path", { "d": "m11 13.73-4 6.93" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "cog" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
async function logoutWithRedirect(rd) {
  await clearUser();
  if (rd && rd != "/" && rd?.split("?")[0] != "/user/login") {
    const error = document.cookie.includes("token") ? `error=${encodeURIComponent("You have been logged out because your session has expired.")}&` : "";
    goto(`/user/login?${error}${rd ? "rd=" + encodeURIComponent(rd) : ""}`, { replaceState: true });
  } else {
    goto("/user/login", { replaceState: true });
  }
}
async function clearUser() {
  try {
    clearStores();
    await UserService.logout();
  } catch (error) {
  }
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let rd;
  let adminsInstance;
  let nonAdminWorkspaces;
  let noWorkspaces;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $$unsubscribe_userStore;
  let $superadmin, $$unsubscribe_superadmin;
  let $userWorkspaces, $$unsubscribe_userWorkspaces;
  let $page, $$unsubscribe_page;
  let $usersWorkspaceStore, $$unsubscribe_usersWorkspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => value);
  $$unsubscribe_superadmin = subscribe(superadmin, (value) => $superadmin = value);
  $$unsubscribe_userWorkspaces = subscribe(userWorkspaces, (value) => $userWorkspaces = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_usersWorkspaceStore = subscribe(usersWorkspaceStore, (value) => $usersWorkspaceStore = value);
  let invites = [];
  let list_all_as_super_admin = false;
  let workspaces = void 0;
  let userSettings;
  let superadminSettings;
  async function loadInvites() {
    try {
      invites = await UserService.listWorkspaceInvites();
    } catch {
    }
  }
  async function loadWorkspaces() {
    if (!$usersWorkspaceStore) {
      try {
        usersWorkspaceStore.set(await WorkspaceService.listUserWorkspaces());
      } catch {
      }
    }
    if ($usersWorkspaceStore) {
      if (!$workspaceStore) {
        const local = localStorage.getItem("workspace")?.toString();
        switchWorkspace(local);
      }
    } else {
      const url = $page.url;
      await logoutWithRedirect(url.href.replace(url.origin, ""));
    }
  }
  async function loadWorkspacesAsAdmin() {
    workspaces = (await WorkspaceService.listWorkspacesAsSuperAdmin({ perPage: 1e3 })).map((x) => {
      return { ...x, username: "superadmin" };
    });
  }
  function handleListWorkspaces() {
    if (list_all_as_super_admin) {
      loadWorkspacesAsAdmin();
    } else {
      workspaces = $userWorkspaces;
    }
  }
  async function getCreateWorkspaceRequireSuperadmin() {
    const r = await fetch(base + "/api/workspaces/create_workspace_require_superadmin");
    const t = await r.text();
    createWorkspace = t != "true";
  }
  let createWorkspace = $superadmin || isCloudHosted();
  if (!createWorkspace) {
    getCreateWorkspaceRequireSuperadmin();
  }
  loadInvites();
  loadWorkspaces();
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    rd = $page.url.searchParams.get("rd");
    {
      if (userSettings && $page.url.hash === USER_SETTINGS_HASH) {
        userSettings.openDrawer();
      }
    }
    list_all_as_super_admin != void 0 && $userWorkspaces && handleListWorkspaces();
    adminsInstance = workspaces?.find((x) => x.id == "admins");
    nonAdminWorkspaces = (workspaces ?? []).filter((x) => x.id != "admins");
    noWorkspaces = $superadmin && nonAdminWorkspaces.length == 0;
    {
      if ($superadmin) {
        createWorkspace = true;
      }
    }
    $$rendered = `${$superadmin ? `${validate_component(SuperadminSettings, "SuperadminSettings").$$render(
      $$result,
      { this: superadminSettings },
      {
        this: ($$value) => {
          superadminSettings = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${validate_component(CenteredModal, "CenteredModal").$$render(
      $$result,
      {
        title: "Select a workspace",
        subtitle: "Logged in as " + $usersWorkspaceStore?.email
      },
      {},
      {
        default: () => {
          return `<h2 class="mb-4 inline-flex gap-2">Workspaces${``}</h2> ${$superadmin ? `<div class="flex flex-row-reverse pb-2">${validate_component(Toggle, "Toggle").$$render(
            $$result,
            {
              options: {
                right: "List all workspaces as superadmin"
              },
              checked: list_all_as_super_admin
            },
            {
              checked: ($$value) => {
                list_all_as_super_admin = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div>` : ``} ${adminsInstance ? `${validate_component(Button, "Button").$$render(
            $$result,
            {
              btnClasses: "w-full mt-2 mb-4 truncate",
              color: "light",
              size: "sm",
              variant: "border"
            },
            {},
            {
              default: () => {
                return `Manage Windmill on the superadmins workspace`;
              }
            }
          )}` : ``} ${workspaces && $usersWorkspaceStore ? `${workspaces.length == 0 ? `<p class="text-sm text-tertiary mt-2">You are not a member of any workspace yet. Accept an invitation ${createWorkspace ? `or
					create your own` : ``}
				workspace.</p>` : ``} ${each(nonAdminWorkspaces, (workspace) => {
            return `<label class="block pb-2"><button class="block w-full mx-auto py-1 px-2 rounded-md border shadow-sm text-sm font-normal mt-1 hover:ring-1 hover:ring-indigo-300"><span class="font-mono">${escape(workspace.id)}</span> - ${escape(workspace.name)} as
					<span class="font-mono">${escape(workspace.username)}</span> ${workspace["deleted"] ? `<span class="text-red-500" data-svelte-h="svelte-1i15fgh">(archived)</span>` : ``}</button> ${$superadmin && workspace["deleted"] ? `${validate_component(Button, "Button").$$render(
              $$result,
              {
                size: "xs",
                btnClasses: "w-full mt-1",
                color: "green",
                variant: "border"
              },
              {},
              {
                default: () => {
                  return `Unarchive ${escape(workspace.id)} `;
                }
              }
            )}` : ``} </label>`;
          })}` : `${each(new Array(3), (_) => {
            return `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[2], 0.5] }, {}, {})}`;
          })}`} ${createWorkspace ? `<div class="flex flex-row-reverse pt-4">${validate_component(Button, "Button").$$render(
            $$result,
            {
              size: "sm",
              btnClasses: noWorkspaces ? "animate-bounce hover:animate-none" : "",
              color: noWorkspaces ? "dark" : "blue",
              href: base + "/user/create_workspace" + (rd ? `?rd=${encodeURIComponent(rd)}` : ""),
              variant: noWorkspaces ? "contained" : "border"
            },
            {},
            {
              default: () => {
                return `+ Create a new workspace`;
              }
            }
          )}</div>` : ``} <h2 class="mt-6 mb-4" data-svelte-h="svelte-1t3qyo8">Invites to join a Workspace</h2> ${invites.length == 0 ? `<p class="text-sm text-tertiary mt-2" data-svelte-h="svelte-oe9y82">You don&#39;t have new invites at the moment.</p>` : ``} ${each(invites, (invite) => {
            return `<div class="w-full mx-auto py-1 px-2 rounded-md border shadow-sm text-sm mt-1 flex flex-row justify-between items-center"><div class="grow"><span class="font-mono font-semibold">${escape(invite.workspace_id)}</span> ${invite.is_admin ? `<span class="text-sm" data-svelte-h="svelte-n5fubv">as an admin</span>` : `${invite.operator ? `<span class="text-sm" data-svelte-h="svelte-povf9y">as an operator</span>` : ``}`}</div> <div class="flex justify-end items-center flex-col sm:flex-row gap-1"><a class="font-bold p-1" href="${escape(base, true) + "/user/accept_invite?workspace=" + escape(encodeURIComponent(invite.workspace_id), true) + escape(rd ? `&rd=${encodeURIComponent(rd)}` : "", true)}">Accept</a> <button class="text-red-700 font-bold p-1" data-svelte-h="svelte-1t4rox8">Decline
				</button></div> </div>`;
          })} <div class="flex justify-between items-center mt-10 flex-wrap gap-2">${$superadmin ? `${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "border",
              size: "sm",
              startIcon: { icon: Crown }
            },
            {},
            {
              default: () => {
                return `Superadmin settings`;
              }
            }
          )}` : ``} ${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "border",
              size: "sm",
              startIcon: { icon: Cog }
            },
            {},
            {
              default: () => {
                return `User settings`;
              }
            }
          )} ${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "border",
              color: "blue",
              size: "sm"
            },
            {},
            {
              default: () => {
                return `Log out`;
              }
            }
          )}</div>`;
        }
      }
    )}  ${validate_component(UserSettings, "UserSettings").$$render(
      $$result,
      { this: userSettings },
      {
        this: ($$value) => {
          userSettings = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_userStore();
  $$unsubscribe_superadmin();
  $$unsubscribe_userWorkspaces();
  $$unsubscribe_page();
  $$unsubscribe_usersWorkspaceStore();
  return $$rendered;
});
export {
  Page as default
};
