import { t as tick } from "./Head.js";
import { c as create_ssr_component, s as subscribe, e as escape, v as validate_component, b as add_attribute, f as each, a as set_store_value, d as createEventDispatcher } from "./ssr.js";
import { A as Alert } from "./Alert.js";
import { B as Badge } from "./Badge.js";
import { B as Button, b as emptyString, s as sendUserToast, a as canWrite } from "./toast.js";
import { D as Drawer, a as DrawerContent } from "./DrawerContent.js";
import "./common.js";
import { T as Tabs, a as Tab } from "./Tabs.js";
import { C as CronInput } from "./CronInput.js";
import { S as Save, P as Path } from "./VariableEditor.js";
import { R as Required } from "./Required.js";
import { S as SchemaForm } from "./SchemaForm.js";
import { S as ScriptPicker } from "./ScriptPicker.js";
import { E as ErrorOrRecoveryHandler } from "./ErrorOrRecoveryHandler.js";
import { T as Toggle } from "./Toggle.js";
import { T as Tooltip } from "./Tooltip.js";
import { D as DropdownV2 } from "./DropdownV2.js";
import { b as WorkerService, g as SettingService, F as FlowService, c as ScriptService, S as ScheduleService } from "./services.gen.js";
import { e as enterpriseLicense, p as workerTags, w as workspaceStore, u as userStore } from "./stores2.js";
import { b as base } from "./base.js";
import { S as Section } from "./Section.js";
import "./index2.js";
import "yaml";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import "minimatch";
/* empty css                                     */
import { S as SecondsInput } from "./TestConnection.js";
import { T as ToggleButtonGroup, a as ToggleButton } from "./ToggleButtonGroup.js";
import { A as Alert_triangle } from "./alert-triangle.js";
import { A as AssignableTags } from "./AssignableTags.js";
import { E as External_link } from "./Popover.js";
import { L as Loader_2 } from "./loader-2.js";
import { R as Rotate_cw } from "./LightweightSchemaForm.js";
import { L as Label } from "./Label.js";
import { D as DateTimeInput } from "./DateTimeInput.js";
import { L as List } from "./list.js";
const FlowRetries = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  let { flowModuleRetry } = $$props;
  let { disabled = false } = $$props;
  let delayType;
  let loaded = false;
  function initialLoad() {
    delayType = (flowModuleRetry?.constant?.attempts ?? 0) > 0 ? "constant" : (flowModuleRetry?.exponential?.attempts ?? 0) > 0 ? "exponential" : "disabled";
    loaded = true;
  }
  function resetDelayType() {
    delayType = "disabled";
  }
  if ($$props.flowModuleRetry === void 0 && $$bindings.flowModuleRetry && flowModuleRetry !== void 0) $$bindings.flowModuleRetry(flowModuleRetry);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    flowModuleRetry === void 0 && resetDelayType();
    !loaded && initialLoad();
    $$rendered = `<div class="${"h-full flex flex-col " + escape($$props.class ?? "", true)}">${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
      $$result,
      {
        class: `h-10 ${disabled ? "disabled" : ""}`,
        selected: delayType
      },
      {
        selected: ($$value) => {
          delayType = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              light: true,
              value: "disabled",
              label: "Disabled"
            },
            {},
            {}
          )} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              light: true,
              value: "constant",
              label: "Constant"
            },
            {},
            {}
          )} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              light: true,
              value: "exponential",
              label: "Exponential"
            },
            {},
            {}
          )}`;
        }
      }
    )} <div class="flex h-[calc(100%-22px)]"><div class="w-1/2 h-full overflow-auto pr-2">${delayType === "constant" ? `${flowModuleRetry?.constant ? `<div class="text-xs font-bold !mt-2" data-svelte-h="svelte-1pj1q7s">Attempts</div> <input type="number"${add_attribute("value", flowModuleRetry.constant.attempts, 0)}> <div class="text-xs font-bold !mt-2" data-svelte-h="svelte-7tjbmr">Delay</div> ${validate_component(SecondsInput, "SecondsInput").$$render(
      $$result,
      {
        seconds: flowModuleRetry.constant.seconds
      },
      {
        seconds: ($$value) => {
          flowModuleRetry.constant.seconds = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}` : `${delayType === "exponential" ? `${flowModuleRetry?.exponential ? `<div class="text-xs font-bold !mt-2" data-svelte-h="svelte-1pj1q7s">Attempts</div> <input type="number"${add_attribute("value", flowModuleRetry.exponential.attempts, 0)}> <div class="text-xs font-bold !mt-2" data-svelte-h="svelte-fkcq7b">Multiplier</div> <span class="text-xs text-tertiary" data-svelte-h="svelte-woh7dg">delay = multiplier * base ^ (number of attempt)</span> <input type="number"${add_attribute("value", flowModuleRetry.exponential.multiplier, 0)}> <div class="text-xs font-bold !mt-2" data-svelte-h="svelte-1ndcx1q">Base (in seconds)</div> <input type="number" step="1"${add_attribute("value", flowModuleRetry.exponential.seconds, 0)}> <div class="text-xs font-bold !mt-2" data-svelte-h="svelte-1byd67b">Randomization factor (percentage)</div> <div class="flex w-full gap-4">${!$enterpriseLicense ? `<div class="flex text-xs items-center gap-1 text-yellow-500 whitespace-nowrap">${validate_component(Alert_triangle, "AlertTriangle").$$render($$result, { size: 16 }, {}, {})}
								EE only</div>` : ``} <input ${!$enterpriseLicense ? "disabled" : ""} type="range"${add_attribute("min", 0, 0)}${add_attribute("max", 100, 0)}${add_attribute("step", 5, 0)}${add_attribute("value", flowModuleRetry.exponential.random_factor, 0)}> <div class="w-20"><input ${"disabled"} type="number"${add_attribute("step", 5, 0)}${add_attribute("min", 0, 0)}${add_attribute("max", 100, 0)}${add_attribute("value", flowModuleRetry.exponential.random_factor, 0)}></div></div>` : ``}` : ``}`}</div> <div class="w-1/2 h-full overflow-auto pl-2">${(() => {
      let { attempts: cAttempts, seconds: cSeconds } = flowModuleRetry?.constant || {}, { attempts: eAttempts, seconds: eSeconds, multiplier, random_factor } = flowModuleRetry?.exponential || {}, cArray = Array.from({ length: cAttempts || 0 }, () => cSeconds), eArray = Array.from({ length: eAttempts || 0 }, (_, i) => (multiplier || 0) * (eSeconds || 0) ** (i + cArray.length + 1)), array = [...cArray, ...eArray];
      return `     <div class="bg-surface-secondary border rounded px-4 py-2"><div class="text-xs font-medium mb-2" data-svelte-h="svelte-1fivn9b">Retry attempts</div> ${array.length > 0 ? `<table class="text-xs"><tr><td class="font-semibold pr-1 pb-1" data-svelte-h="svelte-1o381jv">1:</td> <td class="pb-1">After ${escape(array[0])} second${escape(array[0] === 1 ? "" : "s")} ${(random_factor ?? 0) > 0 ? `(+/- ${escape((array[0] ?? 0) * (random_factor ?? 0) / 100)}
										seconds)` : ``}</td></tr> ${each(array.slice(1), (delay, i) => {
        let index = i + 2;
        return ` <tr><td class="font-semibold pr-1 align-top">${escape(index)}:</td> <td class="pb-1 whitespace-nowrap">${escape(delay)} second${escape(delay === 1 ? "" : "s")} ${(random_factor ?? 0) > 0 ? `(+/- ${escape((delay ?? 0) * (random_factor ?? 0) / 100)}
											seconds)` : ``}
										after attempt #${escape(index - 1)} ${i > cArray.length - 2 ? `<span class="text-gray-400 pl-2">(${escape(multiplier)} * ${escape(eSeconds)}<sup>${escape(index)}</sup>)
											</span>` : ``}</td> </tr>`;
      })}</table>` : `<div class="text-xs" data-svelte-h="svelte-1twdwy7">No retries</div>`}</div>`;
    })()}</div></div></div>`;
  } while (!$$settled);
  $$unsubscribe_enterpriseLicense();
  return $$rendered;
});
const WorkerTagPicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workerTags, $$unsubscribe_workerTags;
  $$unsubscribe_workerTags = subscribe(workerTags, (value) => $workerTags = value);
  let { tag } = $$props;
  let { popupPlacement = "bottom-end" } = $$props;
  loadWorkerGroups();
  async function loadWorkerGroups() {
    if (!$workerTags) {
      set_store_value(workerTags, $workerTags = await WorkerService.getCustomTags(), $workerTags);
    }
  }
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
  if ($$props.popupPlacement === void 0 && $$bindings.popupPlacement && popupPlacement !== void 0) $$bindings.popupPlacement(popupPlacement);
  $$unsubscribe_workerTags();
  return `<div class="flex gap-2 items-center"><div class="max-w-sm grow">${workerTags ? `${$workerTags?.length ?? 0 > 0 ? `<select${add_attribute("value", tag, 0)}>${tag ? `<option value="" data-svelte-h="svelte-1vcxyd9">reset to default</option>` : `<option value="" disabled selected data-svelte-h="svelte-osofec">Worker Group Tag</option>`}${each($workerTags ?? [], (tag2) => {
    return `<option${add_attribute("value", tag2, 0)}>${escape(tag2)}</option>`;
  })}</select>` : `<div class="text-sm text-secondary flex flex-row gap-2">No custom worker group tag defined on this instance in &quot;Workers ${escape("->")} Custom Tags&quot;
					<a href="https://www.windmill.dev/docs/core_concepts/worker_groups" target="_blank" class="hover:underline"><div class="flex flex-row gap-2 items-center">See documentation
							${validate_component(External_link, "ExternalLink").$$render($$result, { size: "12" }, {}, {})}</div></a></div>`}` : `${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})}`}</div> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "border",
      color: "light",
      startIcon: { icon: Rotate_cw }
    },
    {},
    {}
  )} ${validate_component(AssignableTags, "AssignableTags").$$render($$result, { placement: popupPlacement }, {}, {})}</div>`;
});
function isSlackHandler(isSlackHandler2, scriptPath) {
  if (isSlackHandler2 == "error") {
    return scriptPath.startsWith("hub/") && scriptPath.endsWith("/workspace-or-schedule-error-handler-slack");
  } else {
    return scriptPath.startsWith("hub/") && scriptPath.endsWith("/schedule-recovery-handler-slack");
  }
}
const ScheduleEditorInner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let allowSchedule;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $userStore, $$unsubscribe_userStore;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  let optionTabSelected = "error_handler";
  let is_flow = false;
  let initialPath = "";
  let edit = true;
  let schedule = "0 0 12 * *";
  let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let paused_until = void 0;
  let itemKind = "script";
  let errorHandleritemKind = "script";
  let wsErrorHandlerMuted = false;
  let errorHandlerPath = void 0;
  let errorHandlerCustomInitialPath = void 0;
  let errorHandlerSelected = "slack";
  let errorHandlerExtraArgs = {};
  let recoveryHandlerPath = void 0;
  let recoveryHandlerCustomInitialPath = void 0;
  let recoveryHandlerSelected = "slack";
  let recoveryHandlerItemKind = "script";
  let recoveryHandlerExtraArgs = {};
  let failedTimes = 1;
  let failedExact = false;
  let recoveredTimes = 1;
  let retry = void 0;
  let script_path = "";
  let initialScriptPath = "";
  let runnable;
  let args = {};
  let loading = false;
  function openEdit(ePath, isFlow) {
    is_flow = isFlow;
    initialPath = ePath;
    itemKind = is_flow ? "flow" : "script";
    if (path == ePath) {
      loadSchedule();
    } else {
      path = ePath;
    }
    edit = true;
    drawer?.openDrawer();
  }
  async function openNew(nis_flow, initial_script_path) {
    args = {};
    runnable = void 0;
    is_flow = nis_flow;
    schedule = "0 0 12 * *";
    paused_until = void 0;
    showPauseUntil = false;
    let defaultErrorHandlerMaybe = void 0;
    let defaultRecoveryHandlerMaybe = void 0;
    if ($workspaceStore) {
      defaultErrorHandlerMaybe = await SettingService.getGlobal({
        key: "default_error_handler_" + $workspaceStore
      });
      defaultRecoveryHandlerMaybe = await SettingService.getGlobal({
        key: "default_recovery_handler_" + $workspaceStore
      });
    }
    edit = false;
    itemKind = nis_flow ? "flow" : "script";
    initialScriptPath = initial_script_path ?? "";
    summary = "";
    no_flow_overlap = false;
    path = initialScriptPath;
    initialPath = initialScriptPath;
    script_path = initialScriptPath;
    await loadScript(script_path);
    if (defaultErrorHandlerMaybe !== void 0 && defaultErrorHandlerMaybe !== null) {
      wsErrorHandlerMuted = defaultErrorHandlerMaybe["wsErrorHandlerMuted"];
      let splitted = defaultErrorHandlerMaybe["errorHandlerPath"].split("/");
      errorHandleritemKind = splitted[0];
      errorHandlerPath = splitted.slice(1)?.join("/");
      errorHandlerExtraArgs = defaultErrorHandlerMaybe["errorHandlerExtraArgs"];
      errorHandlerCustomInitialPath = errorHandlerPath;
      errorHandlerSelected = isSlackHandler("error", errorHandlerPath) ? "slack" : "custom";
      failedTimes = defaultErrorHandlerMaybe["failedTimes"];
      failedExact = defaultErrorHandlerMaybe["failedExact"];
    } else {
      wsErrorHandlerMuted = false;
      errorHandlerPath = void 0;
      errorHandleritemKind = "script";
      errorHandlerExtraArgs = {};
      errorHandlerCustomInitialPath = void 0;
      errorHandlerSelected = "slack";
      failedTimes = 1;
      failedExact = false;
    }
    if (defaultRecoveryHandlerMaybe !== void 0 && defaultRecoveryHandlerMaybe !== null) {
      let splitted = defaultRecoveryHandlerMaybe["recoveryHandlerPath"].split("/");
      recoveryHandlerItemKind = splitted[0];
      recoveryHandlerPath = splitted.slice(1)?.join("/");
      recoveryHandlerExtraArgs = defaultRecoveryHandlerMaybe["recoveryHandlerExtraArgs"];
      recoveryHandlerCustomInitialPath = recoveryHandlerPath;
      recoveryHandlerSelected = isSlackHandler("recovery", recoveryHandlerPath) ? "slack" : "custom";
      recoveredTimes = defaultRecoveryHandlerMaybe["recoveredTimes"];
    } else {
      recoveryHandlerPath = void 0;
      recoveryHandlerItemKind = "script";
      recoveryHandlerExtraArgs = {};
      recoveryHandlerCustomInitialPath = void 0;
      recoveryHandlerSelected = "slack";
      recoveredTimes = 1;
    }
    timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    drawer?.openDrawer();
  }
  async function resetRetries() {
    if (itemKind === "flow") {
      retry = void 0;
    }
  }
  let isValid = true;
  let path = "";
  let enabled = false;
  let pathError = "";
  let summary = "";
  let no_flow_overlap = false;
  let tag = void 0;
  let validCRON = true;
  createEventDispatcher();
  async function loadScript(p) {
    if (p) {
      runnable = void 0;
      if (is_flow) {
        runnable = await FlowService.getFlowByPath({ workspace: $workspaceStore, path: p });
      } else {
        runnable = await ScriptService.getScriptByPath({ workspace: $workspaceStore, path: p });
      }
    } else {
      runnable = void 0;
    }
  }
  async function saveAsDefaultErrorHandler(overrideExisting) {
    if (!$enterpriseLicense) {
      sendUserToast(`Setting default error handler is an enterprise edition feature`, true);
      return;
    }
    if ($workspaceStore) {
      await ScheduleService.setDefaultErrorOrRecoveryHandler({
        workspace: $workspaceStore,
        requestBody: {
          handler_type: "error",
          override_existing: overrideExisting,
          path: errorHandlerPath == void 0 ? void 0 : `${errorHandleritemKind}/${errorHandlerPath}`,
          extra_args: errorHandlerExtraArgs,
          number_of_occurence: failedTimes,
          number_of_occurence_exact: failedExact,
          workspace_handler_muted: wsErrorHandlerMuted
        }
      });
      if (errorHandlerPath !== void 0) {
        sendUserToast(`Default error handler saved to ${errorHandlerPath}`, false);
      } else {
        sendUserToast(`Default error handler reset`, false);
      }
    }
  }
  async function saveAsDefaultRecoveryHandler(overrideExisting) {
    if (!$enterpriseLicense) {
      sendUserToast(`Setting default recovery handler is an enterprise edition feature`, true);
      return;
    }
    if ($workspaceStore) {
      await ScheduleService.setDefaultErrorOrRecoveryHandler({
        workspace: $workspaceStore,
        requestBody: {
          handler_type: "recovery",
          override_existing: overrideExisting,
          path: recoveryHandlerPath === void 0 ? void 0 : `${recoveryHandlerItemKind}/${recoveryHandlerPath}`,
          extra_args: recoveryHandlerExtraArgs,
          number_of_occurence: recoveredTimes
        }
      });
      if (recoveryHandlerPath !== void 0) {
        sendUserToast(`Default recovery handler saved to ${recoveryHandlerPath}`, false);
      } else {
        sendUserToast(`Default recovery handler reset`, false);
      }
    }
  }
  let can_write = true;
  async function loadSchedule() {
    loading = true;
    try {
      const s = await ScheduleService.getSchedule({
        workspace: $workspaceStore,
        path: initialPath
      });
      enabled = s.enabled;
      schedule = s.schedule;
      timezone = s.timezone;
      paused_until = s.paused_until;
      showPauseUntil = paused_until !== void 0;
      summary = s.summary ?? "";
      script_path = s.script_path ?? "";
      await loadScript(script_path);
      is_flow = s.is_flow;
      no_flow_overlap = s.no_flow_overlap ?? false;
      wsErrorHandlerMuted = s.ws_error_handler_muted ?? false;
      retry = s.retry;
      if (s.on_failure) {
        let splitted = s.on_failure.split("/");
        errorHandleritemKind = splitted[0];
        errorHandlerPath = splitted.slice(1)?.join("/");
        errorHandlerCustomInitialPath = errorHandlerPath;
        failedTimes = s.on_failure_times ?? 1;
        failedExact = s.on_failure_exact ?? false;
        errorHandlerExtraArgs = s.on_failure_extra_args ?? {};
        errorHandlerSelected = isSlackHandler("error", errorHandlerPath) ? "slack" : "custom";
      } else {
        errorHandlerPath = void 0;
        errorHandleritemKind = "script";
        errorHandlerCustomInitialPath = void 0;
        errorHandlerExtraArgs = {};
        failedExact = false;
        failedTimes = 1;
        errorHandlerSelected = "slack";
      }
      if (s.on_recovery) {
        let splitted = s.on_recovery.split("/");
        recoveryHandlerItemKind = splitted[0];
        recoveryHandlerPath = splitted.slice(1)?.join("/");
        recoveryHandlerCustomInitialPath = recoveryHandlerPath;
        recoveredTimes = s.on_recovery_times ?? 1;
        recoveryHandlerExtraArgs = s.on_recovery_extra_args ?? {};
        recoveryHandlerSelected = isSlackHandler("recovery", recoveryHandlerPath) ? "slack" : "custom";
      } else {
        recoveryHandlerPath = void 0;
        recoveryHandlerItemKind = "script";
        recoveryHandlerCustomInitialPath = void 0;
        recoveredTimes = 1;
        recoveryHandlerSelected = "slack";
        recoveryHandlerExtraArgs = {};
      }
      args = s.args ?? {};
      can_write = canWrite(s.path, s.extra_perms, $userStore);
      tag = s.tag;
    } catch (err) {
      sendUserToast(`Could not load schedule: ${err}`, true);
    }
    loading = false;
  }
  let drawer;
  let pathC;
  let dirtyPath = false;
  let showPauseUntil = false;
  if ($$props.openEdit === void 0 && $$bindings.openEdit && openEdit !== void 0) $$bindings.openEdit(openEdit);
  if ($$props.openNew === void 0 && $$bindings.openNew && openNew !== void 0) $$bindings.openNew(openNew);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    (is_flow = itemKind == "flow") && resetRetries();
    runnable?.schema && runnable.schema.properties && Object.keys(runnable.schema.properties).length === 0 && (isValid = true);
    allowSchedule = isValid && validCRON && script_path != "";
    {
      {
        if ($workspaceStore) {
          if (edit && path != "") {
            loadSchedule();
          }
        }
      }
    }
    !showPauseUntil && (paused_until = void 0);
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "900px", this: drawer },
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
              title: edit ? `Edit schedule ${initialPath}` : "New schedule"
            },
            {},
            {
              actions: () => {
                return `${edit ? `<div class="mr-8">${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    size: "sm",
                    variant: "border",
                    startIcon: { icon: List },
                    disabled: !allowSchedule || pathError != "" || emptyString(script_path),
                    href: `${base}/runs/${script_path}?show_schedules=true&show_future_jobs=true`
                  },
                  {},
                  {
                    default: () => {
                      return `View runs`;
                    }
                  }
                )}</div> <div class="mr-8 center-center -mt-1">${validate_component(Toggle, "Toggle").$$render(
                  $$result,
                  {
                    disabled: !can_write,
                    checked: enabled,
                    options: { right: "enable", left: "disable" }
                  },
                  {},
                  {}
                )}</div>` : ``} ${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    startIcon: { icon: Save },
                    disabled: !allowSchedule || pathError != "" || emptyString(script_path) || errorHandlerSelected == "slack" && !emptyString(errorHandlerPath) && emptyString(errorHandlerExtraArgs["channel"])
                  },
                  {},
                  {
                    default: () => {
                      return `${escape(edit ? "Save" : "Schedule")}`;
                    }
                  }
                )} `;
              },
              default: () => {
                return `<div class="flex flex-col gap-12"><div class="flex flex-col gap-4"><div><h2 class="text-base font-semibold mb-2" data-svelte-h="svelte-11b9xjs">Metadata</h2> ${validate_component(Label, "Label").$$render($$result, { label: "Summary" }, {}, {
                  default: () => {
                    return ` <input autofocus type="text" placeholder="Short summary to be displayed when listed" class="text-sm w-full"${add_attribute("value", summary, 0)}>`;
                  }
                })}</div> ${validate_component(Label, "Label").$$render($$result, { label: "Path" }, {}, {
                  default: () => {
                    return `${!edit ? `${validate_component(Path, "Path").$$render(
                      $$result,
                      {
                        checkInitialPathExistence: true,
                        initialPath,
                        namePlaceholder: "schedule",
                        kind: "schedule",
                        dirty: dirtyPath,
                        this: pathC,
                        error: pathError,
                        path
                      },
                      {
                        dirty: ($$value) => {
                          dirtyPath = $$value;
                          $$settled = false;
                        },
                        this: ($$value) => {
                          pathC = $$value;
                          $$settled = false;
                        },
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
                    )}` : `<div class="flex justify-start w-full">${validate_component(Badge, "Badge").$$render(
                      $$result,
                      {
                        color: "gray",
                        class: "center-center !bg-surface-secondary !text-tertiary  !h-[24px] rounded-r-none border"
                      },
                      {},
                      {
                        default: () => {
                          return `Schedule path (not editable)`;
                        }
                      }
                    )} <input type="text" readonly${add_attribute("value", path, 0)}${add_attribute("size", path?.length || 50, 0)} class="font-mono !text-xs grow shrink overflow-x-auto !h-[24px] !py-0 !border-l-0 !rounded-l-none"> </div>`}`;
                  }
                })}</div> ${validate_component(Section, "Section").$$render($$result, { label: "Schedule" }, {}, {
                  header: () => {
                    return `${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                      default: () => {
                        return `Schedules use CRON syntax. Seconds are mandatory.`;
                      }
                    })} `;
                  },
                  default: () => {
                    return `${validate_component(CronInput, "CronInput").$$render(
                      $$result,
                      {
                        disabled: !can_write,
                        schedule,
                        timezone,
                        validCRON
                      },
                      {
                        schedule: ($$value) => {
                          schedule = $$value;
                          $$settled = false;
                        },
                        timezone: ($$value) => {
                          timezone = $$value;
                          $$settled = false;
                        },
                        validCRON: ($$value) => {
                          validCRON = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )} ${validate_component(Toggle, "Toggle").$$render(
                      $$result,
                      {
                        options: {
                          right: "Pause schedule until...",
                          rightTooltip: "Pausing the schedule will program the next job to run as if the schedule starts at the time the pause is lifted, instead of now."
                        },
                        size: "xs",
                        checked: showPauseUntil
                      },
                      {
                        checked: ($$value) => {
                          showPauseUntil = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )} ${showPauseUntil ? `${validate_component(DateTimeInput, "DateTimeInput").$$render(
                      $$result,
                      { value: paused_until },
                      {
                        value: ($$value) => {
                          paused_until = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}` : ``}`;
                  }
                })} ${validate_component(Section, "Section").$$render($$result, { label: "Runnable" }, {}, {
                  default: () => {
                    return `${!edit ? `<p class="text-xs mb-1 text-tertiary">Pick a script or flow to be triggered by the schedule${validate_component(Required, "Required").$$render($$result, { required: true }, {}, {})}</p> ${validate_component(ScriptPicker, "ScriptPicker").$$render(
                      $$result,
                      {
                        disabled: initialScriptPath != "" || !can_write,
                        initialPath: initialScriptPath,
                        kinds: ["script"],
                        allowFlow: true,
                        itemKind,
                        scriptPath: script_path
                      },
                      {
                        itemKind: ($$value) => {
                          itemKind = $$value;
                          $$settled = false;
                        },
                        scriptPath: ($$value) => {
                          script_path = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}` : `${validate_component(Alert, "Alert").$$render(
                      $$result,
                      {
                        type: "info",
                        title: "Runnable path cannot be edited",
                        collapsible: true
                      },
                      {},
                      {
                        default: () => {
                          return `Once a schedule is created, the runnable path cannot be changed. However, when renaming
						a script or a flow, the runnable path will automatically update itself.`;
                        }
                      }
                    )} <div class="my-2"></div> ${validate_component(ScriptPicker, "ScriptPicker").$$render(
                      $$result,
                      {
                        disabled: true,
                        initialPath: script_path,
                        scriptPath: script_path,
                        allowFlow: true,
                        itemKind
                      },
                      {},
                      {}
                    )}`} ${itemKind == "flow" ? `${validate_component(Toggle, "Toggle").$$render(
                      $$result,
                      {
                        options: { right: "no overlap of flows" },
                        class: "mt-2",
                        checked: no_flow_overlap
                      },
                      {
                        checked: ($$value) => {
                          no_flow_overlap = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}` : ``} ${itemKind == "script" ? `<div class="flex gap-2 items-center mt-2">${validate_component(Toggle, "Toggle").$$render(
                      $$result,
                      {
                        options: { right: "no overlap" },
                        checked: true,
                        disabled: true
                      },
                      {},
                      {}
                    )}${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                      default: () => {
                        return `Currently, overlapping scripts&#39; executions is not supported. The next execution will
							be scheduled only after the previous iteration has completed.`;
                      }
                    })}</div>` : ``} <div class="mt-6">${!loading ? `${runnable ? `${runnable?.schema && runnable.schema.properties && Object.keys(runnable.schema.properties).length > 0 ? `${validate_component(SchemaForm, "SchemaForm").$$render(
                      $$result,
                      {
                        showReset: true,
                        disabled: !can_write,
                        schema: runnable.schema,
                        isValid,
                        args
                      },
                      {
                        isValid: ($$value) => {
                          isValid = $$value;
                          $$settled = false;
                        },
                        args: ($$value) => {
                          args = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}` : `<div class="text-xs texg-gray-700">This ${escape(is_flow ? "flow" : "script")} takes no argument</div>`}` : `<div class="text-xs texg-gray-700 my-2">Pick a ${escape(is_flow ? "flow" : "script")} and fill its argument here</div>`}` : `${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})}`}</div>`;
                  }
                })} <div class="flex flex-col gap-2">${!loading ? `${validate_component(Tabs, "Tabs").$$render(
                  $$result,
                  { selected: optionTabSelected },
                  {
                    selected: ($$value) => {
                      optionTabSelected = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    default: () => {
                      return `${validate_component(Tab, "Tab").$$render($$result, { value: "error_handler" }, {}, {
                        default: () => {
                          return `Error Handler`;
                        }
                      })} ${validate_component(Tab, "Tab").$$render($$result, { value: "recovery_handler" }, {}, {
                        default: () => {
                          return `Recovery Handler`;
                        }
                      })} ${itemKind === "script" ? `${validate_component(Tab, "Tab").$$render($$result, { value: "retries" }, {}, {
                        default: () => {
                          return `Retries`;
                        }
                      })} ${validate_component(Tab, "Tab").$$render($$result, { value: "tag" }, {}, {
                        default: () => {
                          return `Custom tag`;
                        }
                      })}` : ``}`;
                    }
                  }
                )} <div class="pt-0.5"></div> ${optionTabSelected === "error_handler" ? `${validate_component(Section, "Section").$$render($$result, { label: "Error handler" }, {}, {
                  action: () => {
                    return `<div class="flex flex-row items-center gap-1 text-2xs text-tertiary">defaults
									${validate_component(DropdownV2, "Dropdown").$$render(
                      $$result,
                      {
                        items: [
                          {
                            displayName: `Override future schedules only`,
                            action: () => saveAsDefaultErrorHandler(false)
                          },
                          {
                            displayName: "Override all existing",
                            type: "delete",
                            action: () => saveAsDefaultErrorHandler(true)
                          }
                        ]
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(Save, "Save").$$render($$result, { size: 12, class: "mr-1" }, {}, {})}
											Set as default`;
                        }
                      }
                    )}</div> `;
                  },
                  header: () => {
                    return `<div class="flex flex-row gap-2">${!$enterpriseLicense ? `<span class="text-normal text-2xs" data-svelte-h="svelte-188fr0s">(ee only)</span>` : ``}</div> `;
                  },
                  default: () => {
                    return `<div class="flex flex-row py-2">${validate_component(Toggle, "Toggle").$$render(
                      $$result,
                      {
                        size: "xs",
                        disabled: !can_write || !$enterpriseLicense,
                        options: {
                          right: "Mute workspace error handler for this schedule"
                        },
                        checked: wsErrorHandlerMuted
                      },
                      {
                        checked: ($$value) => {
                          wsErrorHandlerMuted = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</div> ${validate_component(ErrorOrRecoveryHandler, "ErrorOrRecoveryHandler").$$render(
                      $$result,
                      {
                        isEditable: can_write,
                        errorOrRecovery: "error",
                        showScriptHelpText: true,
                        customInitialScriptPath: errorHandlerCustomInitialPath,
                        slackToggleText: "Alert channel on error",
                        customScriptTemplate: "/scripts/add?hub=hub%2F2420%2Fwindmill%2Fschedule_error_handler_template",
                        handlerSelected: errorHandlerSelected,
                        handlerPath: errorHandlerPath,
                        customHandlerKind: errorHandleritemKind,
                        handlerExtraArgs: errorHandlerExtraArgs
                      },
                      {
                        handlerSelected: ($$value) => {
                          errorHandlerSelected = $$value;
                          $$settled = false;
                        },
                        handlerPath: ($$value) => {
                          errorHandlerPath = $$value;
                          $$settled = false;
                        },
                        customHandlerKind: ($$value) => {
                          errorHandleritemKind = $$value;
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
                              return `<div class="flex gap-20 items-start mt-3" data-svelte-h="svelte-kjfcn5"><div class="text-sm">The following args will be passed to the error handler:
												<ul class="mt-1 ml-2"><li><b>path</b>: The path of the script or flow that failed.</li> <li><b>is_flow</b>: Whether the runnable is a flow.</li> <li><b>schedule_path</b>: The path of the schedule.</li> <li><b>error</b>: The error details.</li> <li><b>failed_times</b>: Minimum number of times the schedule failed before
														calling the error handler.</li> <li><b>started_at</b>: The start datetime of the latest job that failed.</li></ul></div></div>`;
                            }
                          })}`;
                        }
                      }
                    )} <div class="flex flex-row items-center justify-between"><div class="flex flex-row items-center mt-4 font-semibold text-sm gap-2"><p${add_attribute("class", emptyString(errorHandlerPath) ? "text-tertiary" : "", 0)}>Triggered when schedule failed</p> <select class="!w-14" ${!$enterpriseLicense || emptyString(errorHandlerPath) ? "disabled" : ""}><option${add_attribute("value", false, 0)} data-svelte-h="svelte-cye4l8">&gt;=</option><option${add_attribute("value", true, 0)} data-svelte-h="svelte-1ip4e1o">==</option></select> <input type="number" class="${"!w-14 text-center " + escape(emptyString(errorHandlerPath) ? "text-tertiary" : "", true)}" ${!$enterpriseLicense ? "disabled" : ""} min="1"${add_attribute("value", failedTimes, 0)}> <p${add_attribute("class", emptyString(errorHandlerPath) ? "text-tertiary" : "", 0)}>time${escape(failedTimes > 1 ? "s in a row" : "")}</p></div></div>`;
                  }
                })}` : `${optionTabSelected === "recovery_handler" ? `${validate_component(Section, "Section").$$render($$result, { label: "Recovery handler" }, {}, {
                  action: () => {
                    return `<div class="flex flex-row items-center text-tertiary text-2xs gap-2">defaults
									${validate_component(DropdownV2, "Dropdown").$$render(
                      $$result,
                      {
                        items: [
                          {
                            displayName: `Override future schedules only`,
                            action: () => saveAsDefaultRecoveryHandler(false)
                          },
                          {
                            displayName: "Override all existing",
                            type: "delete",
                            action: () => saveAsDefaultRecoveryHandler(true)
                          }
                        ]
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(Save, "Save").$$render($$result, { size: 12, class: "mr-1" }, {}, {})}
											Set as default`;
                        }
                      }
                    )}</div> `;
                  },
                  header: () => {
                    return `<div class="flex flex-row gap-2">${!$enterpriseLicense ? `<span class="text-normal text-2xs" data-svelte-h="svelte-188fr0s">(ee only)</span>` : ``}</div> `;
                  },
                  default: () => {
                    return `${validate_component(ErrorOrRecoveryHandler, "ErrorOrRecoveryHandler").$$render(
                      $$result,
                      {
                        isEditable: can_write && !emptyString($enterpriseLicense),
                        errorOrRecovery: "recovery",
                        customInitialScriptPath: recoveryHandlerCustomInitialPath,
                        slackToggleText: "Alert channel when error recovered",
                        customScriptTemplate: "/scripts/add?hub=hub%2F2421%2Fwindmill%2Fschedule_recovery_handler_template",
                        handlerSelected: recoveryHandlerSelected,
                        handlerPath: recoveryHandlerPath,
                        customHandlerKind: recoveryHandlerItemKind,
                        handlerExtraArgs: recoveryHandlerExtraArgs
                      },
                      {
                        handlerSelected: ($$value) => {
                          recoveryHandlerSelected = $$value;
                          $$settled = false;
                        },
                        handlerPath: ($$value) => {
                          recoveryHandlerPath = $$value;
                          $$settled = false;
                        },
                        customHandlerKind: ($$value) => {
                          recoveryHandlerItemKind = $$value;
                          $$settled = false;
                        },
                        handlerExtraArgs: ($$value) => {
                          recoveryHandlerExtraArgs = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        "custom-tab-tooltip": () => {
                          return `${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                            default: () => {
                              return `<div class="flex gap-20 items-start mt-3" data-svelte-h="svelte-cbqkdq"><div class="text-sm">The following args will be passed to the recovery handler:
												<ul class="mt-1 ml-2"><li><b>path</b>: The path of the script or flow that recovered.</li> <li><b>is_flow</b>: Whether the runnable is a flow.</li> <li><b>schedule_path</b>: The path of the schedule.</li> <li><b>error</b>: The error of the last job that errored</li> <li><b>error_started_at</b>: The start datetime of the last job that
														errored</li> <li><b>success_times</b>: The number of times the schedule succeeded before
														calling the recovery handler.</li> <li><b>success_result</b>: The result of the latest successful job</li> <li><b>success_started_at</b>: The start datetime of the latest successful
														job</li></ul></div></div>`;
                            }
                          })}`;
                        }
                      }
                    )} <div class="flex flex-row items-center justify-between"><div class="${"flex flex-row items-center mt-5 font-semibold text-sm " + escape(emptyString(recoveryHandlerPath) ? "text-tertiary" : "", true)}"><p data-svelte-h="svelte-pj8xoh">Triggered when schedule recovered</p> <input type="number" class="!w-14 mx-2 text-center" min="1"${add_attribute("value", recoveredTimes, 0)}> <p>time${escape(recoveredTimes > 1 ? "s in a row" : "")}</p></div></div>`;
                  }
                })}` : `${optionTabSelected === "retries" ? `${validate_component(Section, "Section").$$render($$result, { label: "Retries" }, {}, {
                  header: () => {
                    return `<div class="flex flex-row gap-2">${!$enterpriseLicense ? `<span class="text-normal text-2xs" data-svelte-h="svelte-188fr0s">(ee only)</span>` : ``}</div> ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                      default: () => {
                        return `If defined, upon error this schedule will be retried with a delay and a maximum
									number of attempts as defined below.
									<br>
									This is only available for individual script. For flows, retries can be set on each
									flow step in the flow editor.`;
                      }
                    })} `;
                  },
                  default: () => {
                    return `${validate_component(FlowRetries, "FlowRetries").$$render(
                      $$result,
                      {
                        disabled: itemKind !== "script",
                        flowModuleRetry: retry
                      },
                      {
                        flowModuleRetry: ($$value) => {
                          retry = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}`;
                  }
                })}` : `${optionTabSelected === "tag" ? `${validate_component(Section, "Section").$$render(
                  $$result,
                  {
                    label: "Custom script tag",
                    tooltip: "When set, the script tag will be overridden by this tag"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(WorkerTagPicker, "WorkerTagPicker").$$render(
                        $$result,
                        { popupPlacement: "top-end", tag },
                        {
                          tag: ($$value) => {
                            tag = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )}`;
                    }
                  }
                )}` : ``}`}`}`}` : `${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})}`}</div></div>`;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_userStore();
  $$unsubscribe_enterpriseLicense();
  return $$rendered;
});
const ScheduleEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open = false;
  async function openEdit(ePath, isFlow) {
    open = true;
    await tick();
    drawer?.openEdit(ePath, isFlow);
  }
  async function openNew(is_flow, initial_script_path) {
    open = true;
    await tick();
    drawer?.openNew(is_flow, initial_script_path);
  }
  let drawer;
  if ($$props.openEdit === void 0 && $$bindings.openEdit && openEdit !== void 0) $$bindings.openEdit(openEdit);
  if ($$props.openNew === void 0 && $$bindings.openNew && openNew !== void 0) $$bindings.openNew(openNew);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${open ? `${validate_component(ScheduleEditorInner, "ScheduleEditorInner").$$render(
      $$result,
      { this: drawer },
      {
        this: ($$value) => {
          drawer = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  FlowRetries as F,
  ScheduleEditor as S,
  WorkerTagPicker as W
};
