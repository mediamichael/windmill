import { c as create_ssr_component, s as subscribe, v as validate_component, b as add_attribute, l as add_classes, e as escape } from "../../../../../../../chunks/ssr.js";
import "../../../../../../../chunks/client.js";
import { b as base } from "../../../../../../../chunks/base.js";
import { W as WorkspaceService, g as SettingService, U as UserService } from "../../../../../../../chunks/services.gen.js";
import { v as validateUsername, B as Button } from "../../../../../../../chunks/toast.js";
import { a as usersWorkspaceStore } from "../../../../../../../chunks/stores2.js";
import "../../../../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import { C as CenteredModal } from "../../../../../../../chunks/CenteredModal.js";
import { T as Tooltip } from "../../../../../../../chunks/Tooltip.js";
/* empty css                                                               */
import "../../../../../../../chunks/common.js";
import { T as Toggle } from "../../../../../../../chunks/Toggle.js";
import { T as TestOpenaiKey } from "../../../../../../../chunks/TestOpenaiKey.js";
import { i as isCloudHosted } from "../../../../../../../chunks/cloud.js";
import { T as ToggleButtonGroup, a as ToggleButton } from "../../../../../../../chunks/ToggleButtonGroup.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $usersWorkspaceStore, $$unsubscribe_usersWorkspaceStore;
  let $page, $$unsubscribe_page;
  $$unsubscribe_usersWorkspaceStore = subscribe(usersWorkspaceStore, (value) => $usersWorkspaceStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.url.searchParams.get("rd");
  let id = "";
  let name = "";
  let username = "";
  let errorId = "";
  let errorUser = "";
  let openAiKey = "";
  let checking = false;
  async function validateName(id2) {
    checking = true;
    let exists = await WorkspaceService.existsWorkspace({ requestBody: { id: id2 } });
    if (exists) {
      errorId = "ID already exists";
    } else if (id2 != "" && !/^\w+(-\w+)*$/.test(id2)) {
      errorId = "ID can only contain letters, numbers and dashes and must not finish by a dash";
    } else {
      errorId = "";
    }
    checking = false;
  }
  let automateUsernameCreation = false;
  async function getAutomateUsernameCreationSetting() {
    automateUsernameCreation = await SettingService.getGlobal({ key: "automate_username_creation" }) ?? false;
    if (!automateUsernameCreation) {
      UserService.globalWhoami().then((x) => {
        let uname = "";
        if (x.name) {
          uname = x.name.split(" ")[0];
        } else {
          uname = x.email.split("@")[0];
        }
        uname = uname.replace(/\./gi, "");
        username = uname.toLowerCase();
      });
    }
  }
  getAutomateUsernameCreationSetting();
  let auto_invite = false;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    id = name.toLowerCase().replace(/\s/gi, "-");
    {
      validateName(id);
    }
    errorUser = validateUsername(username);
    $usersWorkspaceStore?.email.split("@")[1];
    $$rendered = `${validate_component(CenteredModal, "CenteredModal").$$render($$result, { title: "New Workspace" }, {}, {
      default: () => {
        return `<label class="block pb-4 pt-4"><span class="text-secondary text-sm" data-svelte-h="svelte-1iy0xhz">Workspace name</span> <span class="ml-4 text-tertiary text-xs" data-svelte-h="svelte-1af8adn">Displayable name</span>  <input autofocus type="text"${add_attribute("value", name, 0)}></label> <label class="block pb-4"><span class="text-secondary text-sm" data-svelte-h="svelte-1tb7opp">Workspace ID</span> <span class="ml-10 text-tertiary text-xs" data-svelte-h="svelte-992b5t">Slug to uniquely identify your workspace</span> ${errorId ? `<span class="text-red-500 text-xs">${escape(errorId)}</span>` : ``} <input type="text"${add_classes((errorId != "" ? "input-error" : "").trim())}${add_attribute("value", id, 0)}></label> ${!automateUsernameCreation ? `<label class="block pb-4"><span class="text-secondary text-sm" data-svelte-h="svelte-2kf00z">Your username in that workspace</span> <input type="text"${add_attribute("value", username, 0)}> ${errorUser ? `<span class="text-red-500 text-xs">${escape(errorUser)}</span>` : ``}</label>` : ``} <label class="block pb-4"><span class="text-secondary text-sm">OpenAI key for Windmill AI
			${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `Find out how it can help you <a href="https://www.windmill.dev/docs/core_concepts/ai_generation" target="_blank" rel="noopener noreferrer" data-svelte-h="svelte-ha4rfm">in the docs</a>`;
          }
        })} <span class="text-2xs text-tertiary ml-2" data-svelte-h="svelte-1t9j7a7">(optional but recommended)</span></span> <div class="flex flex-row gap-1"><input type="password"${add_attribute("value", openAiKey, 0)}> ${validate_component(TestOpenaiKey, "TestOpenaiKey").$$render($$result, { apiKey: openAiKey, disabled: !openAiKey }, {}, {})}</div> ${``}</label> ${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            disabled: isCloudHosted(),
            options: {
              right: `Auto-invite anyone joining the instance`
            },
            checked: auto_invite
          },
          {
            checked: ($$value) => {
              auto_invite = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${``} <div${add_attribute("class", "overflow-hidden transition-all " + (auto_invite ? "h-36" : "h-0"), 0)}><div class="text-xs mb-1 leading-6 pt-2">Mode ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `Whether to invite or add users directly to the workspace.`;
          }
        })}</div> <div class="text-xs mb-1 leading-6 pt-2">Role ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `Role of the auto-invited users`;
          }
        })}</div> ${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
          $$result,
          {
            selected: "developer"
          },
          {},
          {
            default: () => {
              return `${validate_component(ToggleButton, "ToggleButton").$$render(
                $$result,
                {
                  value: "operator",
                  size: "xs",
                  label: "Operator"
                },
                {},
                {}
              )} ${validate_component(ToggleButton, "ToggleButton").$$render(
                $$result,
                {
                  value: "developer",
                  size: "xs",
                  label: "Developer"
                },
                {},
                {}
              )}`;
            }
          }
        )}</div> <div class="flex flex-wrap flex-row justify-between pt-10 gap-1">${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "border",
            size: "sm",
            href: base + "/user/workspaces"
          },
          {},
          {
            default: () => {
              return `← Back to workspaces`;
            }
          }
        )} ${validate_component(Button, "Button").$$render(
          $$result,
          {
            disabled: checking || errorId != "" || !name || !automateUsernameCreation && (errorUser != "" || !username) || !id
          },
          {},
          {
            default: () => {
              return `Create workspace`;
            }
          }
        )}</div>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_usersWorkspaceStore();
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
