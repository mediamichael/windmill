import { c as create_ssr_component, s as subscribe, v as validate_component, e as escape } from "./ssr.js";
import { A as Alert } from "./Alert.js";
import { B as Button, b as emptyString, e as emptySchema, s as sendUserToast } from "./toast.js";
/* empty css                                     */
import "./index2.js";
import "./common.js";
import { T as Tabs, a as Tab } from "./Tabs.js";
import { S as SchemaForm } from "./SchemaForm.js";
import { S as ScriptPicker } from "./ScriptPicker.js";
import { T as Toggle } from "./Toggle.js";
import { b as base } from "./base.js";
import { w as workspaceStore, e as enterpriseLicense, h as hubBaseUrlStore } from "./stores2.js";
import { W as WorkspaceService, c as ScriptService, F as FlowService } from "./services.gen.js";
import { i as inferArgs } from "./infer.js";
import { L as Loader_2 } from "./loader-2.js";
import { R as Rotate_cw } from "./LightweightSchemaForm.js";
const ErrorOrRecoveryHandler = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  let $hubBaseUrlStore, $$unsubscribe_hubBaseUrlStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  $$unsubscribe_hubBaseUrlStore = subscribe(hubBaseUrlStore, (value) => $hubBaseUrlStore = value);
  let { errorOrRecovery } = $$props;
  let { isEditable } = $$props;
  let { slackToggleText = "Enable" } = $$props;
  let { showScriptHelpText = false } = $$props;
  let { handlerSelected } = $$props;
  let { handlerPath } = $$props;
  let { handlerExtraArgs } = $$props;
  let { customInitialScriptPath } = $$props;
  let { customScriptTemplate } = $$props;
  let { customHandlerKind = "script" } = $$props;
  let customHandlerSchema;
  let slackHandlerSchema;
  let workspaceConnectedToSlack = void 0;
  async function loadSlackResources() {
    const settings = await WorkspaceService.getSettings({ workspace: $workspaceStore });
    if (!emptyString(settings.slack_name) && !emptyString(settings.slack_team_id)) {
      workspaceConnectedToSlack = true;
    } else {
      workspaceConnectedToSlack = false;
    }
  }
  async function loadHandlerScriptArgs(p, defaultArgs = []) {
    try {
      let schema = emptySchema();
      if (p.startsWith("hub/")) {
        const hubScript = await ScriptService.getHubScriptByPath({ path: p });
        if (hubScript.schema?.properties) {
          schema = hubScript.schema;
        } else {
          await inferArgs(hubScript.language, hubScript.content ?? "", schema);
        }
      } else {
        let scriptOrFlow = customHandlerKind === "script" ? await ScriptService.getScriptByPath({ workspace: $workspaceStore, path: p }) : await FlowService.getFlowByPath({ workspace: $workspaceStore, path: p });
        schema = scriptOrFlow.schema;
      }
      if (schema && schema.properties) {
        for (let key in schema.properties) {
          if (defaultArgs.includes(key)) {
            delete schema.properties[key];
          }
        }
        return schema;
      }
    } catch (err) {
      sendUserToast(`Could not query handler schema: ${err}`, true);
    }
  }
  function isSlackHandler(scriptPath) {
    if (scriptPath === void 0) {
      return false;
    }
    if (errorOrRecovery == "error") {
      return scriptPath.startsWith("hub/") && scriptPath.endsWith("/workspace-or-schedule-error-handler-slack");
    } else {
      return scriptPath.startsWith("hub/") && scriptPath.endsWith("/schedule-recovery-handler-slack");
    }
  }
  if ($$props.errorOrRecovery === void 0 && $$bindings.errorOrRecovery && errorOrRecovery !== void 0) $$bindings.errorOrRecovery(errorOrRecovery);
  if ($$props.isEditable === void 0 && $$bindings.isEditable && isEditable !== void 0) $$bindings.isEditable(isEditable);
  if ($$props.slackToggleText === void 0 && $$bindings.slackToggleText && slackToggleText !== void 0) $$bindings.slackToggleText(slackToggleText);
  if ($$props.showScriptHelpText === void 0 && $$bindings.showScriptHelpText && showScriptHelpText !== void 0) $$bindings.showScriptHelpText(showScriptHelpText);
  if ($$props.handlerSelected === void 0 && $$bindings.handlerSelected && handlerSelected !== void 0) $$bindings.handlerSelected(handlerSelected);
  if ($$props.handlerPath === void 0 && $$bindings.handlerPath && handlerPath !== void 0) $$bindings.handlerPath(handlerPath);
  if ($$props.handlerExtraArgs === void 0 && $$bindings.handlerExtraArgs && handlerExtraArgs !== void 0) $$bindings.handlerExtraArgs(handlerExtraArgs);
  if ($$props.customInitialScriptPath === void 0 && $$bindings.customInitialScriptPath && customInitialScriptPath !== void 0) $$bindings.customInitialScriptPath(customInitialScriptPath);
  if ($$props.customScriptTemplate === void 0 && $$bindings.customScriptTemplate && customScriptTemplate !== void 0) $$bindings.customScriptTemplate(customScriptTemplate);
  if ($$props.customHandlerKind === void 0 && $$bindings.customHandlerKind && customHandlerKind !== void 0) $$bindings.customHandlerKind(customHandlerKind);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        if ($workspaceStore) {
          loadSlackResources();
        }
      }
    }
    handlerPath && !isSlackHandler(handlerPath) && loadHandlerScriptArgs(handlerPath, [
      "path",
      "workspace_id",
      "job_id",
      "is_flow",
      "schedule_path",
      "error",
      "error_started_at",
      "failed_times",
      "started_at",
      "success_times",
      "success_result",
      "success_started_at",
      "email"
    ]).then((schema) => customHandlerSchema = schema);
    handlerPath && isSlackHandler(handlerPath) && loadHandlerScriptArgs(handlerPath, [
      "path",
      "workspace_id",
      "job_id",
      "is_flow",
      "schedule_path",
      "error",
      "error_started_at",
      "failed_times",
      "started_at",
      "success_times",
      "success_result",
      "success_started_at",
      "email",
      "slack"
    ]).then((schema) => slackHandlerSchema = schema);
    $$rendered = `<div>${validate_component(Tabs, "Tabs").$$render(
      $$result,
      {
        class: "mt-2 mb-4",
        selected: handlerSelected
      },
      {
        selected: ($$value) => {
          handlerSelected = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Tab, "Tab").$$render($$result, { value: "slack" }, {}, {
            default: () => {
              return `Slack`;
            }
          })} ${validate_component(Tab, "Tab").$$render($$result, { value: "custom" }, {}, {
            default: () => {
              return `Custom
			${slots["custom-tab-tooltip"] ? slots["custom-tab-tooltip"]({}) : ``}`;
            }
          })}`;
        }
      }
    )}</div> ${handlerSelected === "custom" ? `<div class="flex flex-row mb-2">${validate_component(ScriptPicker, "ScriptPicker").$$render(
      $$result,
      {
        disabled: !isEditable || !$enterpriseLicense,
        initialPath: customInitialScriptPath,
        kinds: ["script", "failure"],
        allowFlow: true,
        allowRefresh: true,
        scriptPath: handlerPath,
        itemKind: customHandlerKind
      },
      {
        scriptPath: ($$value) => {
          handlerPath = $$value;
          $$settled = false;
        },
        itemKind: ($$value) => {
          customHandlerKind = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${handlerPath === void 0 ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        btnClasses: "ml-4 mt-2",
        color: "dark",
        size: "xs",
        href: customScriptTemplate,
        target: "_blank"
      },
      {},
      {
        default: () => {
          return `Create from template`;
        }
      }
    )}` : ``}</div> ${showScriptHelpText ? `<div class="text-xs">Example of error handler scripts can be found on <a target="_blank" href="${escape($hubBaseUrlStore, true) + "/failures"}">Windmill Hub</a></div>` : ``} ${handlerPath ? `<p class="font-semibold text-sm mt-4 mb-2" data-svelte-h="svelte-1q9k9re">Extra arguments</p> ${validate_component(SchemaForm, "SchemaForm").$$render(
      $$result,
      {
        disabled: !isEditable,
        schema: customHandlerSchema,
        shouldHideNoInputs: true,
        class: "text-xs",
        args: handlerExtraArgs
      },
      {
        args: ($$value) => {
          handlerExtraArgs = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${customHandlerSchema && customHandlerSchema.properties && Object.keys(customHandlerSchema.properties).length === 0 ? `<div class="text-xs texg-gray-700" data-svelte-h="svelte-1brvqof">This error handler takes no extra arguments</div>` : ``}` : ``}` : `${handlerSelected === "slack" ? `<span class="w-full flex mb-3">${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        disabled: !$enterpriseLicense || !isEditable,
        checked: isSlackHandler(handlerPath),
        options: { right: slackToggleText }
      },
      {},
      {}
    )}</span> ${workspaceConnectedToSlack ? `${validate_component(SchemaForm, "SchemaForm").$$render(
      $$result,
      {
        disabled: !$enterpriseLicense || !isSlackHandler(handlerPath),
        schema: slackHandlerSchema,
        schemaSkippedValues: ["slack"],
        schemaFieldTooltip: {
          channel: 'Slack channel name without the "#" - example: "windmill-alerts"'
        },
        shouldHideNoInputs: true,
        class: "text-xs",
        args: handlerExtraArgs
      },
      {
        args: ($$value) => {
          handlerExtraArgs = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${workspaceConnectedToSlack == void 0 ? `${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})}` : ``}`} ${$enterpriseLicense && isSlackHandler(handlerPath) ? `${workspaceConnectedToSlack == false ? `${validate_component(Alert, "Alert").$$render(
      $$result,
      {
        type: "error",
        title: "Workspace not connected to Slack"
      },
      {},
      {
        default: () => {
          return `<div class="flex flex-row gap-x-1 w-full items-center"><p class="text-clip grow min-w-0" data-svelte-h="svelte-1oaouo5">The workspace needs to be connected to Slack to use this feature. You can <a target="_blank" href="${escape(base, true) + "/workspace_settings?tab=slack"}">configure it here</a>.</p> ${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "border",
              color: "light",
              startIcon: { icon: Rotate_cw }
            },
            {},
            {}
          )}</div>`;
        }
      }
    )}` : `${validate_component(Button, "Button").$$render(
      $$result,
      {
        disabled: emptyString(handlerExtraArgs["channel"]),
        btnClasses: "w-32 text-center",
        color: "dark",
        size: "xs"
      },
      {},
      {
        default: () => {
          return `Send test message`;
        }
      }
    )} ${``}`}` : ``}` : ``}`}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_enterpriseLicense();
  $$unsubscribe_hubBaseUrlStore();
  return $$rendered;
});
export {
  ErrorOrRecoveryHandler as E
};
