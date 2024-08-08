import { c as create_ssr_component, s as subscribe, v as validate_component, e as escape, l as add_classes, b as add_attribute } from "../../../../../../../chunks/ssr.js";
import "../../../../../../../chunks/client.js";
import { b as base } from "../../../../../../../chunks/base.js";
import { W as WorkspaceService, g as SettingService, U as UserService } from "../../../../../../../chunks/services.gen.js";
import { v as validateUsername, B as Button } from "../../../../../../../chunks/toast.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import "../../../../../../../chunks/stores2.js";
import { C as CenteredModal } from "../../../../../../../chunks/CenteredModal.js";
import "../../../../../../../chunks/index2.js";
/* empty css                                                               */
import "../../../../../../../chunks/common.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let workspace_id = $page.url.searchParams.get("workspace") ?? "";
  let username = "";
  let errorUsername = "";
  let checking = false;
  async function validateName(username2) {
    checking = true;
    try {
      await WorkspaceService.existsUsername({
        requestBody: { id: workspace_id, username: username2 }
      });
      errorUsername = validateUsername(username2);
    } catch (error) {
      errorUsername = "Username already exists";
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
        username = uname.toLowerCase();
      });
    }
  }
  getAutomateUsernameCreationSetting();
  {
    validateName(username);
  }
  $$unsubscribe_page();
  return ` ${validate_component(CenteredModal, "CenteredModal").$$render(
    $$result,
    {
      title: "Invitation to join " + workspace_id
    },
    {},
    {
      default: () => {
        return `${!automateUsernameCreation ? `<label class="block pb-2"><span class="text-secondary text-sm">Your username in workspace ${escape(workspace_id)}:</span> <input${add_classes((errorUsername != "" ? "input-error" : "").trim())}${add_attribute("value", username, 0)}> ${errorUsername ? `<span class="text-red-500 text-xs">${escape(errorUsername)}</span>` : ``}</label>` : ``} <div class="flex flex-row justify-between pt-4 gap-x-1">${validate_component(Button, "Button").$$render(
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
        )} <button ${checking || !automateUsernameCreation && (errorUsername != "" || !username) ? "disabled" : ""} class="place-items-end bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border rounded" type="button">Accept invite</button></div>`;
      }
    }
  )}`;
});
export {
  Page as default
};
