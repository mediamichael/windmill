import { c as create_ssr_component, s as subscribe, d as createEventDispatcher, v as validate_component, b as add_attribute, e as escape, f as each, a as set_store_value } from "./ssr.js";
import { s as stepInputCompletionEnabled, m as metadataCompletionEnabled, c as codeCompletionSessionEnabled, a as usersWorkspaceStore } from "./stores2.js";
import { U as UserService } from "./services.gen.js";
import { B as Button, h as getLocalSetting, j as displayDate } from "./toast.js";
import { T as TableCustom } from "./TableCustom.js";
import { T as Tooltip } from "./Tooltip.js";
import { D as Drawer, a as DrawerContent } from "./DrawerContent.js";
import "./common.js";
import { p as page } from "./stores.js";
import { g as goto } from "./client.js";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import { V as Version } from "./Version.js";
import { D as DarkModeToggle } from "./DarkModeToggle.js";
import { T as Toggle } from "./Toggle.js";
import { P as Plus } from "./plus.js";
import { C as Clipboard } from "./clipboard.js";
const UserSettings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $stepInputCompletionEnabled, $$unsubscribe_stepInputCompletionEnabled;
  let $metadataCompletionEnabled, $$unsubscribe_metadataCompletionEnabled;
  let $codeCompletionSessionEnabled, $$unsubscribe_codeCompletionSessionEnabled;
  let $page, $$unsubscribe_page;
  let $usersWorkspaceStore, $$unsubscribe_usersWorkspaceStore;
  $$unsubscribe_stepInputCompletionEnabled = subscribe(stepInputCompletionEnabled, (value) => $stepInputCompletionEnabled = value);
  $$unsubscribe_metadataCompletionEnabled = subscribe(metadataCompletionEnabled, (value) => $metadataCompletionEnabled = value);
  $$unsubscribe_codeCompletionSessionEnabled = subscribe(codeCompletionSessionEnabled, (value) => $codeCompletionSessionEnabled = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_usersWorkspaceStore = subscribe(usersWorkspaceStore, (value) => $usersWorkspaceStore = value);
  let { scopes = void 0 } = $$props;
  let { newTokenLabel = void 0 } = $$props;
  let { newToken = void 0 } = $$props;
  let newPassword;
  let tokens;
  let displayCreateToken = scopes != void 0;
  let login_type = "none";
  let drawer;
  createEventDispatcher();
  function openDrawer() {
    loadLoginType();
    listTokens();
    drawer?.openDrawer();
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
  async function loadLoginType() {
    login_type = (await UserService.globalWhoami()).login_type;
  }
  let tokenPage = 1;
  async function listTokens() {
    tokens = await UserService.listTokens({
      excludeEphemeral: true,
      page: tokenPage,
      perPage: 100
    });
  }
  function loadSettings() {
    set_store_value(codeCompletionSessionEnabled, $codeCompletionSessionEnabled = (getLocalSetting("codeCompletionSessionEnabled") ?? "true") == "true", $codeCompletionSessionEnabled);
    set_store_value(metadataCompletionEnabled, $metadataCompletionEnabled = (getLocalSetting("metadataCompletionEnabled") ?? "true") == "true", $metadataCompletionEnabled);
    set_store_value(stepInputCompletionEnabled, $stepInputCompletionEnabled = (getLocalSetting("stepInputCompletionEnabled") ?? "true") == "true", $stepInputCompletionEnabled);
  }
  loadSettings();
  if ($$props.scopes === void 0 && $$bindings.scopes && scopes !== void 0) $$bindings.scopes(scopes);
  if ($$props.newTokenLabel === void 0 && $$bindings.newTokenLabel && newTokenLabel !== void 0) $$bindings.newTokenLabel(newTokenLabel);
  if ($$props.newToken === void 0 && $$bindings.newToken && newToken !== void 0) $$bindings.newToken(newToken);
  if ($$props.openDrawer === void 0 && $$bindings.openDrawer && openDrawer !== void 0) $$bindings.openDrawer(openDrawer);
  if ($$props.closeDrawer === void 0 && $$bindings.closeDrawer && closeDrawer !== void 0) $$bindings.closeDrawer(closeDrawer);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
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
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "User Settings" }, {}, {
            default: () => {
              return `<div class="flex flex-col h-full"><div>${scopes == void 0 ? `<div class="text-xs pt-1 pb-2 text-tertiary flex-col flex">Windmill ${validate_component(Version, "Version").$$render($$result, {}, {}, {})}</div> <div class="font-semibold flex items-baseline">Theme: ${validate_component(DarkModeToggle, "DarkModeToggle").$$render($$result, { forcedDarkMode: false }, {}, {})}</div> <div class="flex flex-wrap md:gap-40 gap-10 mt-2"><div><h2 class="border-b" data-svelte-h="svelte-1slgwxf">User info</h2> <div class="">${``} <div class="flex flex-col gap-2 w-full"><div class="mt-4"><label class="block w-60 mb-2 text-tertiary"><div class="text-secondary" data-svelte-h="svelte-1gri6vl">email</div> <input type="text" disabled${add_attribute("value", $usersWorkspaceStore?.email, 0)} class="input mt-1"></label> ${login_type == "password" ? `<label class="block w-120"><div class="text-secondary" data-svelte-h="svelte-1tervja">password</div> <input type="password" class="w-full block py-1 px-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-sm "${add_attribute("value", newPassword, 0)}> ${validate_component(Button, "Button").$$render($$result, { size: "sm", btnClasses: "mt-4 w-min" }, {}, {
                default: () => {
                  return `Set password`;
                }
              })}</label>` : `${login_type == "github" ? `<span data-svelte-h="svelte-16uiwxg">Authentified through Github OAuth2. Cannot set a password.</span>` : ``}`}</div></div></div></div> <div><h2 class="border-b" data-svelte-h="svelte-19m2yow">AI user settings</h2> <div class="flex flex-col gap-4 mt-2">${validate_component(Toggle, "Toggle").$$render(
                $$result,
                {
                  checked: $codeCompletionSessionEnabled,
                  options: {
                    right: "Code completion",
                    rightTooltip: "AI completion in the code editors"
                  }
                },
                {},
                {}
              )} ${validate_component(Toggle, "Toggle").$$render(
                $$result,
                {
                  checked: $metadataCompletionEnabled,
                  options: {
                    right: "Metadata completion",
                    rightTooltip: "AI completion for summaries and descriptions"
                  }
                },
                {},
                {}
              )} ${validate_component(Toggle, "Toggle").$$render(
                $$result,
                {
                  checked: $stepInputCompletionEnabled,
                  options: {
                    right: "Flow step input completion",
                    rightTooltip: "AI completion for flow step inputs"
                  }
                },
                {},
                {}
              )}</div></div></div>` : ``} <div class="${["grid grid-cols-2 pt-8 pb-1", scopes == void 0 ? "pt-8" : ""].join(" ").trim()}"><h2 class="py-0 my-0 border-b pt-3" data-svelte-h="svelte-dliem9">Tokens</h2> <div class="flex justify-end border-b pb-1">${validate_component(Button, "Button").$$render(
                $$result,
                {
                  size: "sm",
                  startIcon: { icon: Plus },
                  btnClasses: displayCreateToken ? "hidden" : ""
                },
                {},
                {
                  default: () => {
                    return `Create token`;
                  }
                }
              )}</div></div> <div class="text-2xs text-tertiary italic pb-6" data-svelte-h="svelte-1kop48x">Authentify to the Windmill API with access tokens.</div> <div><div class="${escape(newToken ? "" : "hidden", true) + " border rounded-md mb-6 px-2 py-2 bg-green-50 dark:bg-green-200 dark:text-green-800 flex flex-row flex-wrap"}"><div>Added token: <button class="inline-flex gap-2 items-center">${escape(newToken)} ${validate_component(Clipboard, "Clipboard").$$render($$result, { size: 12 }, {}, {})}</button></div> <div class="pt-1 text-xs ml-2" data-svelte-h="svelte-1v5ve0p">Make sure to copy your personal access token now. You won’t be able to see it again!</div></div>  <div class="${escape(displayCreateToken ? "" : "hidden", true) + " py-3 px-3 border rounded-md mb-6 bg-surface-secondary min-w-min"}"><h3 class="pb-3 font-semibold" data-svelte-h="svelte-tsu7ap">Add a new token</h3> ${scopes != void 0 ? `${each(scopes, (scope) => {
                return `<div class="flex flex-col mb-4"><label for="label">Scope ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                  default: () => {
                    return `This token can only be used within its scope. For flows and scripts, it
											allows you to share them without fear of being impersonated. Once a script is
											triggered, the script itself uses a new ephemeral token to be able to act on
											behalf of the token owner.`;
                  }
                })}</label> <input disabled type="text"${add_attribute("value", scope, 0)}> </div>`;
              })}` : ``} <div class="flex flex-row flex-wrap gap-x-2 w-full justify-between"><div class="flex flex-col"><label for="label" data-svelte-h="svelte-1c8pyp1">Label <span class="text-xs text-tertiary">(optional)</span></label> <input type="text"${add_attribute("value", newTokenLabel, 0)}></div> <div class="flex flex-col"><label for="expires" data-svelte-h="svelte-1y3y4rc">Expires In  <span class="text-xs text-tertiary">(optional)</span></label> <select><option${add_attribute("value", void 0, 0)}>No expiration</option><option${add_attribute("value", 7, 0)} data-svelte-h="svelte-1dthd50">7d</option><option${add_attribute("value", 30, 0)} data-svelte-h="svelte-13blykk">30d</option><option${add_attribute("value", 90, 0)} data-svelte-h="svelte-1bgli2s">90d</option></select></div> <div class="flex items-end">${validate_component(Button, "Button").$$render($$result, { btnClasses: "!mt-2" }, {}, {
                default: () => {
                  return `New Token`;
                }
              })}</div></div></div></div> <div class="overflow-auto">${validate_component(TableCustom, "TableCustom").$$render($$result, {}, {}, {
                body: () => {
                  return `<tbody slot="body">${tokens && tokens.length > 0 ? `${each(tokens, ({ token_prefix, expiration, label, scopes: scopes2 }) => {
                    return `<tr><td class="grow">${escape(token_prefix)}****</td> <td class="grow">${escape(label ?? "")}</td> <td class="grow">${escape(displayDate(expiration ?? ""))}</td> <td class="grow">${escape(scopes2?.join(", ") ?? "")}</td> <td class="grow"><button class="text-red-500 text-xs underline" data-svelte-h="svelte-180avbd">Delete</button></td> </tr>`;
                  })}` : `${tokens && tokens.length === 0 ? `<tr class="px-6" data-svelte-h="svelte-1079nt1"><td class="text-secondary italic text-xs">There are no tokens yet</td></tr>` : `<tr data-svelte-h="svelte-123an90">Loading...</tr>`}`}</tbody>`;
                },
                "header-row": () => {
                  return `<tr slot="header-row" data-svelte-h="svelte-rhlixn"><th>prefix</th> <th>label</th> <th>expiration</th> <th>scopes</th> <th></th></tr>`;
                }
              })} <div class="flex flex-row-reverse gap-2 w-full">${tokens?.length == 100 ? `<button class="p-1 underline text-sm whitespace-nowrap text-center" data-svelte-h="svelte-ri10qr">Next</button>` : ``} ${``}</div></div></div></div>`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_stepInputCompletionEnabled();
  $$unsubscribe_metadataCompletionEnabled();
  $$unsubscribe_codeCompletionSessionEnabled();
  $$unsubscribe_page();
  $$unsubscribe_usersWorkspaceStore();
  return $$rendered;
});
export {
  UserSettings as U
};
