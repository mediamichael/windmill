import { c as create_ssr_component, v as validate_component, s as subscribe, d as createEventDispatcher, b as add_attribute, e as escape, f as each } from "./ssr.js";
import { I as Icon } from "./Icon.js";
import { U as UserService, g as SettingService } from "./services.gen.js";
import { T as TableCustom } from "./TableCustom.js";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import { B as Button, N as generateRandomString, p as truncate } from "./toast.js";
import "./index2.js";
/* empty css                                     */
import "./common.js";
import { T as Toggle } from "./Toggle.js";
import { q as globalEmailInvite, u as userStore } from "./stores2.js";
import { T as Tooltip } from "./Tooltip.js";
import { D as Drawer, a as DrawerContent } from "./DrawerContent.js";
import { T as Tabs, a as Tab } from "./Tabs.js";
import { T as TabContent } from "./TabContent.js";
import { b as base } from "./base.js";
import { S as SearchItems } from "./SearchItems.js";
import { p as page } from "./stores.js";
import { g as goto } from "./client.js";
import { V as Version } from "./Version.js";
import { U as Uptodate } from "./LoginPageHeader.js";
import { s as settingsKeys, I as InstanceSettings } from "./InstanceSettings.js";
import { T as ToggleButtonGroup, a as ToggleButton } from "./ToggleButtonGroup.js";
import { a as ConfirmationModal } from "./ConfirmationModal.js";
import { A as Alert } from "./Alert.js";
import "yaml";
import "minimatch";
import { P as Popup } from "./Popup.js";
import { autoPlacement } from "@floating-ui/core";
import { i as isCloudHosted } from "./cloud.js";
import { E as External_link } from "./Popover.js";
const Crown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "crown" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const USER_SETTINGS_HASH = "#user-settings";
const SUPERADMIN_SETTINGS_HASH = "#superadmin-settings";
const InviteGlobalUser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $globalEmailInvite, $$unsubscribe_globalEmailInvite;
  $$unsubscribe_globalEmailInvite = subscribe(globalEmailInvite, (value) => $globalEmailInvite = value);
  createEventDispatcher();
  let is_super_admin = false;
  let password = generateRandomString(10);
  let name;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<h3 class="mb-4" data-svelte-h="svelte-18qdnwj">Add new user to instance</h3> <div class="flex flex-row flex-wrap gap-2 mb-2 items-end"><label class="block shrink min-w-0"><span class="text-secondary text-sm" data-svelte-h="svelte-114jd6n">Email</span> <input type="email" placeholder="email"${add_attribute("value", $globalEmailInvite, 0)}></label> <label class="block shrink min-w-0"><span class="text-secondary text-sm" data-svelte-h="svelte-1cbt48o">Password</span> <input${add_attribute("value", password, 0)}></label> <div><span class="text-secondary text-sm" data-svelte-h="svelte-xg3tt1">Name (optional)</span> <input type="text" placeholder="name (optional)"${add_attribute("value", name, 0)}></div> ${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        class: "mx-2 mb-1",
        options: { right: "Superadmin" },
        checked: is_super_admin
      },
      {
        checked: ($$value) => {
          is_super_admin = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="flex flex-row-reverse grow"><div class="flex">${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "contained",
        color: "dark",
        size: "sm",
        disabled: $globalEmailInvite == "" || password == void 0
      },
      {},
      {
        default: () => {
          return `Add user to instance`;
        }
      }
    )}</div></div></div> <div class="flex gap-2 items-end" data-svelte-h="svelte-sc7x52"><div class="text-xs text-tertiary grow text-right">Email will be sent if SMTP configured</div></div>`;
  } while (!$$settled);
  $$unsubscribe_globalEmailInvite();
  return $$rendered;
});
const ChangeInstanceUsername = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { email } = $$props;
  let { username } = $$props;
  let { isConflict = false } = $$props;
  let loading = false;
  let usernameInfo = void 0;
  async function getUsernameInfo() {
    usernameInfo = await UserService.globalUsernameInfo({ email });
    if (isConflict) {
      username = usernameInfo.username;
    }
  }
  getUsernameInfo();
  createEventDispatcher();
  if ($$props.email === void 0 && $$bindings.email && email !== void 0) $$bindings.email(email);
  if ($$props.username === void 0 && $$bindings.username && username !== void 0) $$bindings.username(username);
  if ($$props.isConflict === void 0 && $$bindings.isConflict && isConflict !== void 0) $$bindings.isConflict(isConflict);
  return `${validate_component(Popup, "Popup").$$render(
    $$result,
    {
      floatingConfig: {
        middleware: [
          autoPlacement({
            allowedPlacements: ["bottom-end", "top-end"]
          })
        ]
      },
      containerClasses: "border rounded-lg shadow-lg p-4 bg-surface"
    },
    {},
    {
      button: () => {
        return `${validate_component(Button, "Button").$$render(
          $$result,
          {
            color: isConflict ? "red" : "light",
            size: "xs",
            spacingSize: "xs2",
            nonCaptureEvent: true
          },
          {},
          {
            default: () => {
              return `${escape(isConflict ? "Fix username conflict" : "Change username")}`;
            }
          }
        )} `;
      },
      default: ({ close }) => {
        return `<div class="flex flex-col max-w-2xl p-2"><span class="text-sm mb-2 leading-6 font-semibold">${escape(isConflict ? "Fix username conflict" : "Change username")}</span> <span class="text-xs mb-1 leading-6">${escape(isConflict ? "Auto-generated instance username" : "New username")}</span> <input type="text" class="mb-4" ${isConflict ? "disabled" : ""}${add_attribute("value", username, 0)}> ${isConflict ? `${validate_component(Alert, "Alert").$$render(
          $$result,
          {
            title: "Username conflict",
            class: "mb-4"
          },
          {},
          {
            default: () => {
              return `Users are required to have an instance-wide username that is shared across all workspaces.
				However, this user has different usernames in different workspaces.

				${usernameInfo?.workspace_usernames && usernameInfo.workspace_usernames.filter((w) => w.username !== username).length > 0 ? `<br> <br>
					Workspaces requiring username modification: ${escape(usernameInfo.workspace_usernames.filter((w) => w.username !== username).map((wu) => `${wu.workspace_id} (${wu.username})`).join(", "))}` : ``}`;
            }
          }
        )}` : ``} ${!isConflict && usernameInfo?.workspace_usernames && usernameInfo.workspace_usernames.filter((w) => w.username !== username).length > 0 ? `${validate_component(Alert, "Alert").$$render(
          $$result,
          {
            title: "Concerned workspaces",
            class: "mb-4"
          },
          {},
          {
            default: () => {
              return `${escape(usernameInfo.workspace_usernames.filter((w) => w.username !== username).map((wu) => `${wu.workspace_id}`).join(", "))}`;
            }
          }
        )}` : ``} ${validate_component(Alert, "Alert").$$render(
          $$result,
          {
            type: "warning",
            title: "Manual action required",
            class: "mb-4"
          },
          {},
          {
            default: () => {
              return `This operation does not handle references in scripts, workflows and applications to scripts in
			the workspace, and references in resources to variables. You will have to handle those
			manually.
			<br>`;
            }
          }
        )} ${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "contained",
            color: "blue",
            size: "xs",
            disabled: email === void 0 || !username,
            loading
          },
          {},
          {
            default: () => {
              return `Confirm username change`;
            }
          }
        )}</div>`;
      }
    }
  )}`;
});
const SuperadminSettings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $$unsubscribe_userStore;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => value);
  let drawer;
  let filter = "";
  function openDrawer() {
    listUsers();
    drawer?.openDrawer?.();
  }
  function closeDrawer() {
    drawer?.closeDrawer();
    removeHash();
  }
  function removeHash() {
    const index = $page.url.href.lastIndexOf("#");
    if (index === -1) return;
    $page.url.href.slice(0, index);
    goto();
  }
  let users = [];
  let filteredUsers = [];
  let deleteConfirmedCallback = void 0;
  async function listUsers() {
    users = await UserService.listUsersAsSuperAdmin({ perPage: 1e5 });
  }
  let tab = "users";
  let nbDisplayed = 50;
  let instanceSettings;
  let automateUsernameCreation = false;
  async function getAutomateUsernameCreationSetting() {
    automateUsernameCreation = await SettingService.getGlobal({ key: "automate_username_creation" }) ?? false;
  }
  getAutomateUsernameCreationSetting();
  let automateUsernameModalOpen = false;
  if ($$props.openDrawer === void 0 && $$bindings.openDrawer && openDrawer !== void 0) $$bindings.openDrawer(openDrawer);
  if ($$props.closeDrawer === void 0 && $$bindings.closeDrawer && closeDrawer !== void 0) $$bindings.closeDrawer(closeDrawer);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(SearchItems, "SearchItems").$$render(
      $$result,
      {
        filter,
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
    )} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "1200px", this: drawer },
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
              overflow_y: true,
              title: "Instance Settings"
            },
            {},
            {
              default: () => {
                return `<div class="flex flex-col h-full w-full"><div><div class="flex justify-between"><div class="text-xs pt-1 text-tertiary flex flex-col"><div>Windmill ${validate_component(Version, "Version").$$render($$result, {}, {}, {})}</div></div> <div>${validate_component(Uptodate, "Uptodate").$$render($$result, {}, {}, {})}</div></div></div> <div class="flex flex-row-reverse">${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    variant: "border",
                    color: "dark",
                    target: "_blank",
                    href: base + "/?workspace=admins",
                    endIcon: { icon: External_link }
                  },
                  {},
                  {
                    default: () => {
                      return `Admins workspace`;
                    }
                  }
                )}</div> <div class="pt-4 h-full">${validate_component(Tabs, "Tabs").$$render(
                  $$result,
                  { selected: tab },
                  {
                    selected: ($$value) => {
                      tab = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    content: () => {
                      return `<div class="pt-4"></div> ${validate_component(TabContent, "TabContent").$$render($$result, { value: "users" }, {}, {
                        default: () => {
                          return `<div class="h-full">${!automateUsernameCreation && !isCloudHosted() ? `<div class="mb-4"><h3 class="mb-2">Automatic username creation
											${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                            default: () => {
                              return `Automatically create a username for new users based on their email, shared
												across workspaces.`;
                            }
                          })}</h3> ${validate_component(Button, "Button").$$render(
                            $$result,
                            {
                              btnClasses: "w-auto",
                              size: "sm",
                              color: "dark"
                            },
                            {},
                            {
                              default: () => {
                                return `Enable (recommended)`;
                              }
                            }
                          )} ${validate_component(ConfirmationModal, "ConfirmationModal").$$render(
                            $$result,
                            {
                              open: automateUsernameModalOpen,
                              title: "Automatic username creation",
                              confirmationText: "Enable"
                            },
                            {},
                            {
                              default: () => {
                                return `Once activated, it will not be possible to disable this feature. In case
											existing users have different usernames in different workspaces, you will have
											to manually confirm the username for each user.`;
                              }
                            }
                          )}</div>` : ``} <div class="py-2 mb-4">${validate_component(InviteGlobalUser, "InviteGlobalUser").$$render($$result, {}, {}, {})}</div> <h3 data-svelte-h="svelte-1qy6oia">All instance users</h3> <div class="pb-1"></div> <div><input placeholder="Search users" class="input mt-1"${add_attribute("value", filter, 0)}></div> <div class="mt-2 overflow-auto">${validate_component(TableCustom, "TableCustom").$$render($$result, {}, {}, {
                            body: () => {
                              return `<tbody slot="body" class="overflow-y-auto w-full h-full max-h-full">${filteredUsers && users ? `${each(filteredUsers.slice(0, nbDisplayed), ({ email, super_admin, login_type, name, username }) => {
                                return `<tr class="border"><td>${escape(email)}</td> <td>${escape(login_type)}</td> <td><span class="break-words">${escape(truncate(name ?? "", 30))}</span></td> ${automateUsernameCreation ? `<td>${username ? `${escape(username)}` : `${validate_component(ChangeInstanceUsername, "ChangeInstanceUsername").$$render($$result, { username: "", email, isConflict: true }, {}, {})}`} </td>` : ``} <td>${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render($$result, { selected: super_admin }, {}, {
                                  default: () => {
                                    return `${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: false, size: "xs", label: "User" }, {}, {})} ${validate_component(ToggleButton, "ToggleButton").$$render(
                                      $$result,
                                      {
                                        value: true,
                                        size: "xs",
                                        label: "Superadmin"
                                      },
                                      {},
                                      {}
                                    )} `;
                                  }
                                })}</td> <td><div class="flex flex-row gap-x-1 justify-end">${automateUsernameCreation && username ? `${validate_component(ChangeInstanceUsername, "ChangeInstanceUsername").$$render($$result, { username, email }, {}, {})}` : ``} ${validate_component(Button, "Button").$$render(
                                  $$result,
                                  {
                                    color: "light",
                                    variant: "contained",
                                    size: "xs",
                                    spacingSize: "xs2",
                                    btnClasses: "text-red-500"
                                  },
                                  {},
                                  {
                                    default: () => {
                                      return `Remove
																`;
                                    }
                                  }
                                )} </div></td> </tr>`;
                              })}` : ``}</tbody>`;
                            },
                            "header-row": () => {
                              return `<tr slot="header-row" class="sticky top-0 bg-surface border-b"><th data-svelte-h="svelte-1xocb9y">email</th> <th data-svelte-h="svelte-uco45k">auth</th> <th data-svelte-h="svelte-133cb2x">name</th> ${automateUsernameCreation ? `<th data-svelte-h="svelte-142nkvu">username</th>` : ``} <th></th> <th></th></tr>`;
                            }
                          })}</div> ${filteredUsers && filteredUsers?.length > 50 && nbDisplayed < filteredUsers.length ? `<span class="text-xs">${escape(nbDisplayed)} users out of ${escape(filteredUsers.length)} <button class="ml-4" data-svelte-h="svelte-1rcm8tm">load 50 more</button></span>` : ``}</div>`;
                        }
                      })} ${validate_component(TabContent, "TabContent").$$render($$result, { value: "", values: settingsKeys }, {}, {
                        default: () => {
                          return `${validate_component(InstanceSettings, "InstanceSettings").$$render(
                            $$result,
                            {
                              hideTabs: true,
                              hideSave: true,
                              tab,
                              this: instanceSettings
                            },
                            {
                              this: ($$value) => {
                                instanceSettings = $$value;
                                $$settled = false;
                              }
                            },
                            {}
                          )}`;
                        }
                      })} `;
                    },
                    default: () => {
                      return `${validate_component(Tab, "Tab").$$render($$result, { value: "users" }, {}, {
                        default: () => {
                          return `Global Users`;
                        }
                      })} ${each(settingsKeys, (category) => {
                        return `${validate_component(Tab, "Tab").$$render($$result, { value: category }, {}, {
                          default: () => {
                            return `${escape(category)}`;
                          }
                        })}`;
                      })}`;
                    }
                  }
                )}</div></div> ${tab != "users" ? `<div class="absolute bottom-2 w-[95%]">${validate_component(Button, "Button").$$render($$result, { color: "dark" }, {}, {
                  default: () => {
                    return `Save`;
                  }
                })}</div>` : ``}`;
              }
            }
          )}`;
        }
      }
    )} ${validate_component(ConfirmationModal, "ConfirmationModal").$$render(
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
  $$unsubscribe_page();
  $$unsubscribe_userStore();
  return $$rendered;
});
export {
  Crown as C,
  SuperadminSettings as S,
  USER_SETTINGS_HASH as U,
  SUPERADMIN_SETTINGS_HASH as a
};
