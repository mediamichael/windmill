import { c as create_ssr_component, v as validate_component, s as subscribe, b as add_attribute, f as each, e as escape, d as createEventDispatcher } from "./ssr.js";
import { S as ScheduleService, c as ScriptService } from "./services.gen.js";
import { i as inferArgs } from "./infer.js";
import { i as initialCode, M as MetadataGen } from "./MetadataGen.js";
import { w as workspaceStore, d as defaultScripts, u as userStore, e as enterpriseLicense } from "./stores2.js";
import { b as emptyString, B as Button, G as encodeState, e as emptySchema, s as sendUserToast, L as formatCron } from "./toast.js";
import { P as Path, S as Save } from "./VariableEditor.js";
import { S as Summary, A as Awareness, D as Diff, a as ScriptEditor } from "./ScriptEditor.js";
import { A as Alert } from "./Alert.js";
import { B as Badge } from "./Badge.js";
import { D as Drawer, a as DrawerContent } from "./DrawerContent.js";
import "./common.js";
import { w as writable } from "./index.js";
import { S as SecondsInput } from "./TestConnection.js";
import { T as Tabs, a as Tab } from "./Tabs.js";
import { T as TabContent } from "./TabContent.js";
import { L as LanguageIcon, C as Code } from "./util.js";
import { T as Tooltip } from "./Tooltip.js";
import { T as ToggleButtonGroup, a as ToggleButton } from "./ToggleButtonGroup.js";
import { E as ErrorHandlerToggleButton } from "./ErrorHandlerToggleButton.js";
import { i as isCloudHosted } from "./cloud.js";
import { P as Popover } from "./Popover.js";
import { T as Toggle } from "./Toggle.js";
import { E as EditableSchemaForm } from "./EditableSchemaDrawer.js";
import { S as Section } from "./Section.js";
import { L as Label } from "./Label.js";
import { S as ScheduleEditor, W as WorkerTagPicker } from "./ScheduleEditor.js";
import { C as CronInput } from "./CronInput.js";
import { S as SchemaForm } from "./SchemaForm.js";
/* empty css                                     */
import "./index2.js";
import { S as Skeleton } from "./Skeleton.js";
import { C as Calendar } from "./calendar.js";
import { p as processLangs, d as defaultScriptLanguages, a as loadScriptSchedule } from "./scripts.js";
import { D as DefaultScripts, C as Check_circle } from "./DefaultScripts.js";
import { C as CustomPopover } from "./CustomPopover.js";
import { X } from "./x.js";
import { P as Plus } from "./plus.js";
import { P as Pen } from "./pen.js";
import { S as Settings } from "./settings.js";
import { C as Corner_down_left } from "./ConfirmationModal.js";
import { I as Icon } from "./Icon.js";
import { B as Bug } from "./bug.js";
const Rocket = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
      }
    ],
    [
      "path",
      {
        "d": "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
      }
    ],
    [
      "path",
      {
        "d": "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"
      }
    ],
    [
      "path",
      {
        "d": "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "rocket" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const yOffset = 80;
const ScriptSchema = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { schema } = $$props;
  function setSchema(newSchema) {
    schema = newSchema;
  }
  if ($$props.schema === void 0 && $$bindings.schema && schema !== void 0) $$bindings.schema(schema);
  if ($$props.setSchema === void 0 && $$bindings.setSchema && setSchema !== void 0) $$bindings.setSchema(setSchema);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(EditableSchemaForm, "EditableSchemaForm").$$render(
      $$result,
      { uiOnly: true, offset: yOffset, schema },
      {
        schema: ($$value) => {
          schema = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const ScriptSchedules = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $schedule, $$unsubscribe_schedule;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { initialPath } = $$props;
  let { schema } = $$props;
  let { schedule } = $$props;
  $$unsubscribe_schedule = subscribe(schedule, (value) => $schedule = value);
  let schedules = void 0;
  async function loadSchedules() {
    try {
      schedules = (await ScheduleService.listSchedules({
        workspace: $workspaceStore ?? "",
        path: initialPath,
        isFlow: false
      })).filter((s) => s.path != initialPath);
    } catch (e) {
      console.error("impossible to load schedules");
    }
  }
  let scheduleEditor;
  if ($$props.initialPath === void 0 && $$bindings.initialPath && initialPath !== void 0) $$bindings.initialPath(initialPath);
  if ($$props.schema === void 0 && $$bindings.schema && schema !== void 0) $$bindings.schema(schema);
  if ($$props.schedule === void 0 && $$bindings.schedule && schedule !== void 0) $$bindings.schedule(schedule);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    initialPath && loadSchedules();
    $$rendered = `<div class="w-full flex flex-col gap-4 mb-4"> ${validate_component(Label, "Label").$$render($$result, { label: "Summary" }, {}, {
      default: () => {
        return `<input autofocus type="text" placeholder="Short summary to be displayed when listed" class="text-sm w-full"${add_attribute("value", $schedule.summary, 0)}>`;
      }
    })}</div> ${validate_component(CronInput, "CronInput").$$render(
      $$result,
      {
        schedule: $schedule.cron,
        timezone: $schedule.timezone
      },
      {
        schedule: ($$value) => {
          $schedule.cron = $$value;
          $$settled = false;
        },
        timezone: ($$value) => {
          $schedule.timezone = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="mt-10"></div> ${validate_component(SchemaForm, "SchemaForm").$$render(
      $$result,
      { schema, args: $schedule.args },
      {
        args: ($$value) => {
          $schedule.args = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${emptyString($schedule.cron) ? `<p class="text-xs text-tertiary mt-10" data-svelte-h="svelte-1jzhrue">Define a schedule frequency first</p>` : ``} <div class="mt-10"></div> ${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        disabled: emptyString($schedule.cron),
        options: { right: "Schedule enabled" },
        checked: $schedule.enabled
      },
      {
        checked: ($$value) => {
          $schedule.enabled = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Alert, "Alert").$$render(
      $$result,
      {
        bgClass: "my-4",
        type: "warning",
        title: "Changes only applied upon deploy"
      },
      {},
      {
        default: () => {
          return `Changes to the primary schedule are only applied upon deploy. Other schedules&#39; changes are applied
	immediately.`;
        }
      }
    )} ${initialPath != "" ? `${validate_component(ScheduleEditor, "ScheduleEditor").$$render(
      $$result,
      { this: scheduleEditor },
      {
        this: ($$value) => {
          scheduleEditor = $$value;
          $$settled = false;
        }
      },
      {}
    )} <h2 class="pt-7" data-svelte-h="svelte-v4x0vx">Other schedules</h2> <div class="py-4 flex">${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "border",
        color: "light",
        size: "xs",
        startIcon: { icon: Calendar }
      },
      {},
      {
        default: () => {
          return `New Schedule`;
        }
      }
    )}</div> ${schedules ? `${schedules.length == 0 ? `<div class="text-xs text-secondary px-2" data-svelte-h="svelte-1l10wcu">No other schedules</div>` : `<div class="flex flex-col divide-y px-2 pt-2 max-w-lg">${each(schedules, (schedule2) => {
      return `<div class="grid grid-cols-6 text-2xs items-center py-2"><div class="col-span-3 truncate">${escape(schedule2.path)}</div><div>${escape(schedule2.schedule)}</div> <div>${escape(schedule2.enabled ? "on" : "off")}</div> <button data-svelte-h="svelte-eb71uj">Edit</button> </div>`;
    })}</div>`}` : `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[8]] }, {}, {})}`}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_schedule();
  return $$rendered;
});
const ScriptBuilder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let langs;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $scheduleStore, $$unsubscribe_scheduleStore;
  let $defaultScripts, $$unsubscribe_defaultScripts;
  let $userStore, $$unsubscribe_userStore;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_defaultScripts = subscribe(defaultScripts, (value) => $defaultScripts = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  let { script } = $$props;
  let { fullyLoaded = true } = $$props;
  let { initialPath = "" } = $$props;
  let { template = "script" } = $$props;
  let { initialArgs = {} } = $$props;
  let { lockedLanguage = false } = $$props;
  let { showMeta = false } = $$props;
  let { diffDrawer = void 0 } = $$props;
  let { savedScript = void 0 } = $$props;
  let { searchParams = new URLSearchParams() } = $$props;
  let { disableHistoryChange = false } = $$props;
  let { replaceStateFn = (url) => window.history.replaceState(null, "", url) } = $$props;
  let metadataOpen = showMeta || initialPath == "" && searchParams.get("state") == void 0 && searchParams.get("collab") == void 0;
  let editor = void 0;
  let scriptEditor = void 0;
  let scheduleStore = writable({
    summary: "",
    cron: "0 */5 * * *",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    args: {},
    enabled: false
  });
  $$unsubscribe_scheduleStore = subscribe(scheduleStore, (value) => $scheduleStore = value);
  async function loadSchedule() {
    const scheduleRes = await loadScriptSchedule(initialPath, $workspaceStore);
    if (scheduleRes) {
      scheduleStore.set(scheduleRes);
    }
  }
  const dispatch = createEventDispatcher();
  const enterpriseLangs = ["bigquery", "snowflake", "mssql"];
  function setCode(code) {
    editor?.setCode(code);
  }
  const scriptKindOptions = [
    {
      value: "script",
      title: "Action",
      Icon: Code
    },
    {
      value: "trigger",
      title: "Trigger",
      desc: "First module of flows to trigger them based on external changes. These kind of scripts are usually running on a schedule to periodically look for changes.",
      documentationLink: "https://www.windmill.dev/docs/flows/flow_trigger",
      Icon: Rocket
    },
    {
      value: "approval",
      title: "Approval",
      desc: "Send notifications externally to ask for approval to continue a flow.",
      documentationLink: "https://www.windmill.dev/docs/flows/flow_approval",
      Icon: Check_circle
    },
    {
      value: "failure",
      title: "Error Handler",
      desc: "Handle errors in flows after all retry attempts have been exhausted.",
      documentationLink: "https://www.windmill.dev/docs/flows/flow_error_handler",
      Icon: Bug
    }
  ];
  let pathError = "";
  let loadingSave = false;
  let loadingDraft = false;
  if (script.content == "") {
    initContent(script.language, script.kind, template);
  }
  function initContent(language, kind, template2) {
    scriptEditor?.disableCollaboration();
    script.content = initialCode(language, kind, template2);
    scriptEditor?.inferSchema(script.content, language);
    if (script.content != editor?.getCode()) {
      setCode(script.content);
    }
  }
  async function createSchedule(path2) {
    const { cron, timezone, args, enabled, summary } = $scheduleStore;
    try {
      await ScheduleService.createSchedule({
        workspace: $workspaceStore,
        requestBody: {
          path: path2,
          schedule: formatCron(cron),
          timezone,
          script_path: path2,
          is_flow: false,
          args,
          enabled,
          summary
        }
      });
    } catch (err) {
      sendUserToast(`The primary schedule could not be created: ${err}`, true);
    }
  }
  async function editScript(stay, deploymentMsg2) {
    loadingSave = true;
    try {
      try {
        localStorage.removeItem(script.path);
      } catch (e) {
        console.error("error interacting with local storage", e);
      }
      script.schema = script.schema ?? emptySchema();
      try {
        const noMainFunc = await inferArgs(script.language, script.content, script.schema);
        script.no_main_func = noMainFunc || void 0;
      } catch (error) {
        sendUserToast(`Could not parse code, are you sure it is valid?`, true);
      }
      const newHash = await ScriptService.createScript({
        workspace: $workspaceStore,
        requestBody: {
          path: script.path,
          summary: script.summary,
          description: script.description ?? "",
          content: script.content,
          parent_hash: script.parent_hash,
          schema: script.schema,
          is_template: script.is_template,
          language: script.language,
          kind: script.kind,
          tag: script.tag,
          envs: script.envs,
          dedicated_worker: script.dedicated_worker,
          concurrent_limit: script.concurrent_limit,
          concurrency_time_window_s: script.concurrency_time_window_s,
          cache_ttl: script.cache_ttl,
          ws_error_handler_muted: script.ws_error_handler_muted,
          priority: script.priority,
          restart_unless_cancelled: script.restart_unless_cancelled,
          delete_after_use: script.delete_after_use,
          timeout: script.timeout,
          concurrency_key: emptyString(script.concurrency_key) ? void 0 : script.concurrency_key,
          visible_to_runner_only: script.visible_to_runner_only,
          no_main_func: script.no_main_func,
          deployment_message: deploymentMsg2 || void 0
        }
      });
      const { enabled, timezone, args, cron, summary } = $scheduleStore;
      const scheduleExists = await ScheduleService.existsSchedule({
        workspace: $workspaceStore ?? "",
        path: script.path
      });
      if (scheduleExists) {
        const schedule = await ScheduleService.getSchedule({
          workspace: $workspaceStore ?? "",
          path: script.path
        });
        if (JSON.stringify(schedule.args) != JSON.stringify(args) || schedule.schedule != cron || schedule.timezone != timezone || schedule.summary != summary) {
          await ScheduleService.updateSchedule({
            workspace: $workspaceStore ?? "",
            path: script.path,
            requestBody: {
              schedule: formatCron(cron),
              timezone,
              args,
              summary
            }
          });
        }
        if (enabled != schedule.enabled) {
          await ScheduleService.setScheduleEnabled({
            workspace: $workspaceStore ?? "",
            path: script.path,
            requestBody: { enabled }
          });
        }
      } else if (enabled) {
        await createSchedule(script.path);
      }
      savedScript = structuredClone(script);
      if (!disableHistoryChange) {
        history.replaceState(history.state, "", `/scripts/edit/${script.path}`);
      }
      if (stay) {
        script.parent_hash = newHash;
      }
    } catch (error) {
      sendUserToast(`Error while saving the script: ${error.body || error.message}`, true);
    }
    loadingSave = false;
  }
  function computeDropdownItems(initialPath2) {
    let dropdownItems = initialPath2 != "" ? [
      {
        label: "Deploy & Stay here",
        onClick: () => {
          editScript(true);
        }
      },
      {
        label: "Fork",
        onClick: () => {
          window.open(`/scripts/add?template=${initialPath2}`);
        }
      },
      ...!script.draft_only ? [
        {
          label: "Exit & See details",
          onClick: () => {
            dispatch("seeDetails", initialPath2);
          }
        }
      ] : []
    ] : [];
    return dropdownItems.length > 0 ? dropdownItems : void 0;
  }
  let path = void 0;
  let dirtyPath = false;
  let selectedTab = "metadata";
  let deploymentMsg = "";
  let msgInput = void 0;
  if ($$props.script === void 0 && $$bindings.script && script !== void 0) $$bindings.script(script);
  if ($$props.fullyLoaded === void 0 && $$bindings.fullyLoaded && fullyLoaded !== void 0) $$bindings.fullyLoaded(fullyLoaded);
  if ($$props.initialPath === void 0 && $$bindings.initialPath && initialPath !== void 0) $$bindings.initialPath(initialPath);
  if ($$props.template === void 0 && $$bindings.template && template !== void 0) $$bindings.template(template);
  if ($$props.initialArgs === void 0 && $$bindings.initialArgs && initialArgs !== void 0) $$bindings.initialArgs(initialArgs);
  if ($$props.lockedLanguage === void 0 && $$bindings.lockedLanguage && lockedLanguage !== void 0) $$bindings.lockedLanguage(lockedLanguage);
  if ($$props.showMeta === void 0 && $$bindings.showMeta && showMeta !== void 0) $$bindings.showMeta(showMeta);
  if ($$props.diffDrawer === void 0 && $$bindings.diffDrawer && diffDrawer !== void 0) $$bindings.diffDrawer(diffDrawer);
  if ($$props.savedScript === void 0 && $$bindings.savedScript && savedScript !== void 0) $$bindings.savedScript(savedScript);
  if ($$props.searchParams === void 0 && $$bindings.searchParams && searchParams !== void 0) $$bindings.searchParams(searchParams);
  if ($$props.disableHistoryChange === void 0 && $$bindings.disableHistoryChange && disableHistoryChange !== void 0) $$bindings.disableHistoryChange(disableHistoryChange);
  if ($$props.replaceStateFn === void 0 && $$bindings.replaceStateFn && replaceStateFn !== void 0) $$bindings.replaceStateFn(replaceStateFn);
  if ($$props.setCode === void 0 && $$bindings.setCode && setCode !== void 0) $$bindings.setCode(setCode);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        if (initialPath != "") {
          loadSchedule();
        }
      }
    }
    langs = processLangs(script.language, $defaultScripts?.order ?? Object.keys(defaultScriptLanguages)).map((l) => [defaultScriptLanguages[l], l]).filter((x) => $defaultScripts?.hidden == void 0 || !$defaultScripts.hidden.includes(x[1]));
    {
      {
        ["collab", "path"].forEach((x) => {
          if (searchParams.get(x)) {
            searchParams.delete(x);
          }
        });
      }
    }
    !disableHistoryChange && replaceStateFn("#" + encodeState(script));
    $$rendered = ` ${slots.default ? slots.default({}) : ``} ${!$userStore?.operator ? `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      {
        placement: "right",
        size: selectedTab === "ui" ? "1200px" : "800px",
        open: metadataOpen
      },
      {
        open: ($$value) => {
          metadataOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { noPadding: true, title: "Settings" }, {}, {
            default: () => {
              return ` ${validate_component(Tabs, "Tabs").$$render(
                $$result,
                { selected: selectedTab },
                {
                  selected: ($$value) => {
                    selectedTab = $$value;
                    $$settled = false;
                  }
                },
                {
                  content: () => {
                    return `<div${add_attribute("class", selectedTab === "ui" ? "p-0" : "p-4", 0)}${add_attribute("style", selectedTab === "ui" ? `height: calc(100% - 32px);` : "", 0)}>${validate_component(TabContent, "TabContent").$$render($$result, { value: "metadata" }, {}, {
                      default: () => {
                        return `<div class="flex flex-col gap-8">${validate_component(Section, "Section").$$render($$result, { label: "Metadata" }, {}, {
                          action: () => {
                            return `<div class="flex flex-row items-center gap-2">${validate_component(ErrorHandlerToggleButton, "ErrorHandlerToggleButton").$$render(
                              $$result,
                              {
                                kind: "script",
                                scriptOrFlowPath: script.path,
                                iconOnly: false,
                                errorHandlerMuted: script.ws_error_handler_muted
                              },
                              {
                                errorHandlerMuted: ($$value) => {
                                  script.ws_error_handler_muted = $$value;
                                  $$settled = false;
                                }
                              },
                              {}
                            )}</div> `;
                          },
                          default: () => {
                            return `<div class="flex flex-col gap-4">${validate_component(Label, "Label").$$render($$result, { label: "Summary" }, {}, {
                              default: () => {
                                return `${validate_component(MetadataGen, "MetadataGen").$$render(
                                  $$result,
                                  {
                                    label: "Summary",
                                    lang: script.language,
                                    code: script.content,
                                    promptConfigName: "summary",
                                    generateOnAppear: true,
                                    elementProps: {
                                      type: "text",
                                      placeholder: "Short summary to be displayed when listed"
                                    },
                                    content: script.summary
                                  },
                                  {
                                    content: ($$value) => {
                                      script.summary = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}`;
                              }
                            })} ${validate_component(Label, "Label").$$render($$result, { label: "Path" }, {}, {
                              default: () => {
                                return `${validate_component(Path, "Path").$$render(
                                  $$result,
                                  {
                                    initialPath,
                                    autofocus: false,
                                    namePlaceholder: "script",
                                    kind: "script",
                                    this: path,
                                    error: pathError,
                                    path: script.path,
                                    dirty: dirtyPath
                                  },
                                  {
                                    this: ($$value) => {
                                      path = $$value;
                                      $$settled = false;
                                    },
                                    error: ($$value) => {
                                      pathError = $$value;
                                      $$settled = false;
                                    },
                                    path: ($$value) => {
                                      script.path = $$value;
                                      $$settled = false;
                                    },
                                    dirty: ($$value) => {
                                      dirtyPath = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}`;
                              }
                            })} ${validate_component(Label, "Label").$$render($$result, { label: "Description" }, {}, {
                              default: () => {
                                return `${validate_component(MetadataGen, "MetadataGen").$$render(
                                  $$result,
                                  {
                                    lang: script.language,
                                    code: script.content,
                                    promptConfigName: "description",
                                    elementType: "textarea",
                                    elementProps: { placeholder: "Description displayed" },
                                    content: script.description
                                  },
                                  {
                                    content: ($$value) => {
                                      script.description = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}`;
                              }
                            })}</div>`;
                          }
                        })} ${validate_component(Section, "Section").$$render($$result, { label: "Language" }, {}, {
                          action: () => {
                            return `${validate_component(DefaultScripts, "DefaultScripts").$$render($$result, {}, {}, {})}`;
                          },
                          default: () => {
                            return `${lockedLanguage ? `<div class="text-sm text-tertiary italic mb-2">As a forked script, the language &#39;${escape(script.language)}&#39; cannot be modified.</div>` : ``} <div class="grid grid-cols-3 gap-2">${each(langs, ([label, lang]) => {
                              let isPicked = lang == script.language && template == "script" || template == "bunnative" && lang == "bunnative" || template == "docker" && lang == "docker";
                              return ` ${validate_component(Popover, "Popover").$$render(
                                $$result,
                                {
                                  disablePopup: !enterpriseLangs.includes(lang) || !!$enterpriseLicense
                                },
                                {},
                                {
                                  text: () => {
                                    return `${escape(label)} is only available with an enterprise license`;
                                  },
                                  default: () => {
                                    return `${validate_component(Button, "Button").$$render(
                                      $$result,
                                      {
                                        size: "sm",
                                        variant: "border",
                                        color: isPicked ? "blue" : "light",
                                        btnClasses: isPicked ? "!border-2 !bg-blue-50/75 dark:!bg-frost-900/75" : "m-[1px]",
                                        disabled: lockedLanguage || enterpriseLangs.includes(lang) && !$enterpriseLicense
                                      },
                                      {},
                                      {
                                        default: () => {
                                          return `${validate_component(LanguageIcon, "LanguageIcon").$$render($$result, { lang }, {}, {})} <span class="ml-2 py-2 truncate">${escape(label)}</span> `;
                                        }
                                      }
                                    )} `;
                                  }
                                }
                              )}`;
                            })}</div>`;
                          }
                        })} ${validate_component(Section, "Section").$$render($$result, { label: "Script kind" }, {}, {
                          header: () => {
                            return `${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                              default: () => {
                                return `Tag this script&#39;s purpose within flows such that it is available as the
											corresponding action.`;
                              }
                            })} `;
                          },
                          default: () => {
                            return `${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render($$result, { class: "h-10", selected: script.kind }, {}, {
                              default: () => {
                                return `${each(scriptKindOptions, ({ value, title, desc, documentationLink, Icon: Icon2 }) => {
                                  return `${validate_component(ToggleButton, "ToggleButton").$$render(
                                    $$result,
                                    {
                                      label: title,
                                      value,
                                      tooltip: desc,
                                      documentationLink,
                                      icon: Icon2,
                                      showTooltipIcon: Boolean(desc)
                                    },
                                    {},
                                    {}
                                  )}`;
                                })}`;
                              }
                            })}`;
                          }
                        })}</div>`;
                      }
                    })} ${validate_component(TabContent, "TabContent").$$render($$result, { value: "runtime" }, {}, {
                      default: () => {
                        return `<div class="flex flex-col gap-8">${validate_component(Section, "Section").$$render(
                          $$result,
                          {
                            label: "Concurrency limits",
                            eeOnly: true
                          },
                          {},
                          {
                            default: () => {
                              return `<div class="flex flex-col gap-4">${validate_component(Label, "Label").$$render(
                                $$result,
                                {
                                  label: "Max number of executions within the time window"
                                },
                                {},
                                {
                                  default: () => {
                                    return `<div class="flex flex-row gap-2 max-w-sm"><input ${!$enterpriseLicense ? "disabled" : ""} type="number"${add_attribute("value", script.concurrent_limit, 0)}> ${validate_component(Button, "Button").$$render(
                                      $$result,
                                      {
                                        size: "sm",
                                        color: "light",
                                        variant: "border"
                                      },
                                      {},
                                      {
                                        default: () => {
                                          return `Remove Limits`;
                                        }
                                      }
                                    )}</div>`;
                                  }
                                }
                              )} ${validate_component(Label, "Label").$$render($$result, { label: "Time window in seconds" }, {}, {
                                default: () => {
                                  return `${validate_component(SecondsInput, "SecondsInput").$$render(
                                    $$result,
                                    {
                                      disabled: !$enterpriseLicense,
                                      seconds: script.concurrency_time_window_s
                                    },
                                    {
                                      seconds: ($$value) => {
                                        script.concurrency_time_window_s = $$value;
                                        $$settled = false;
                                      }
                                    },
                                    {}
                                  )}`;
                                }
                              })} ${validate_component(Label, "Label").$$render(
                                $$result,
                                {
                                  label: "Custom concurrency key (optional)"
                                },
                                {},
                                {
                                  header: () => {
                                    return `${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                                      default: () => {
                                        return `Concurrency keys are global, you can have them be workspace specific using
													the variable \`$workspace\`. You can also use an argument&#39;s value using
													\`$args[name_of_arg]\``;
                                      }
                                    })} `;
                                  },
                                  default: () => {
                                    return `<input ${!$enterpriseLicense ? "disabled" : ""} type="text" autofocus${add_attribute("placeholder", `$workspace/script/${script.path}-$args[foo]`, 0)}${add_attribute("value", script.concurrency_key, 0)}>`;
                                  }
                                }
                              )}</div>`;
                            }
                          }
                        )} ${validate_component(Section, "Section").$$render($$result, { label: "Worker Group Tag (Queue)" }, {}, {
                          header: () => {
                            return `${validate_component(Tooltip, "Tooltip").$$render(
                              $$result,
                              {
                                documentationLink: "https://www.windmill.dev/docs/core_concepts/worker_groups"
                              },
                              {},
                              {
                                default: () => {
                                  return `The script will be executed on a worker configured to listen to this worker
											group tag (queue). For instance, you could setup an &quot;highmem&quot;, or &quot;gpu&quot; tag.`;
                                }
                              }
                            )} `;
                          },
                          default: () => {
                            return `${validate_component(WorkerTagPicker, "WorkerTagPicker").$$render(
                              $$result,
                              { tag: script.tag },
                              {
                                tag: ($$value) => {
                                  script.tag = $$value;
                                  $$settled = false;
                                }
                              },
                              {}
                            )}`;
                          }
                        })} ${validate_component(Section, "Section").$$render($$result, { label: "Cache" }, {}, {
                          default: () => {
                            return `<div class="flex gap-2 shrink flex-col">${validate_component(Toggle, "Toggle").$$render(
                              $$result,
                              {
                                size: "sm",
                                checked: Boolean(script.cache_ttl),
                                options: {
                                  right: "Cache the results for each possible inputs"
                                }
                              },
                              {},
                              {}
                            )} <span class="text-secondary text-sm leading-none" data-svelte-h="svelte-1m2bwjo">How long to the keep cache valid</span> ${script.cache_ttl ? `${validate_component(SecondsInput, "SecondsInput").$$render(
                              $$result,
                              { seconds: script.cache_ttl },
                              {
                                seconds: ($$value) => {
                                  script.cache_ttl = $$value;
                                  $$settled = false;
                                }
                              },
                              {}
                            )}` : `${validate_component(SecondsInput, "SecondsInput").$$render($$result, { disabled: true }, {}, {})}`}</div>`;
                          }
                        })} ${validate_component(Section, "Section").$$render($$result, { label: "Timeout" }, {}, {
                          default: () => {
                            return `<div class="flex gap-2 shrink flex-col">${validate_component(Toggle, "Toggle").$$render(
                              $$result,
                              {
                                size: "sm",
                                checked: Boolean(script.timeout),
                                options: {
                                  right: "Add a custom timeout for this script"
                                }
                              },
                              {},
                              {}
                            )} <span class="text-secondary text-sm leading-none" data-svelte-h="svelte-f5q2ij">Timeout duration</span> ${script.timeout ? `${validate_component(SecondsInput, "SecondsInput").$$render(
                              $$result,
                              { seconds: script.timeout },
                              {
                                seconds: ($$value) => {
                                  script.timeout = $$value;
                                  $$settled = false;
                                }
                              },
                              {}
                            )}` : `${validate_component(SecondsInput, "SecondsInput").$$render($$result, { disabled: true }, {}, {})}`}</div>`;
                          }
                        })} ${validate_component(Section, "Section").$$render($$result, { label: "Perpetual Script" }, {}, {
                          default: () => {
                            return `<div class="flex gap-2 shrink flex-col">${validate_component(Toggle, "Toggle").$$render(
                              $$result,
                              {
                                size: "sm",
                                checked: Boolean(script.restart_unless_cancelled),
                                options: {
                                  right: "Restart upon ending unless cancelled"
                                }
                              },
                              {},
                              {}
                            )}</div>`;
                          }
                        })} ${validate_component(Section, "Section").$$render($$result, { label: "Dedicated Workers", eeOnly: true }, {}, {
                          header: () => {
                            return `${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                              default: () => {
                                return `In this mode, the script is meant to be run on dedicated workers that run the
											script at native speed. Can reach &gt;1500rps per dedicated worker. Only
											available on enterprise edition and for Python3, Deno and Bun. For other
											languages, the efficiency is already on par with deidcated workers since they
											do not spawn a full runtime`;
                              }
                            })} `;
                          },
                          default: () => {
                            return `${validate_component(Toggle, "Toggle").$$render(
                              $$result,
                              {
                                disabled: !$enterpriseLicense || isCloudHosted() || script.language != "bun" && script.language != "python3" && script.language != "deno",
                                size: "sm",
                                checked: Boolean(script.dedicated_worker),
                                options: {
                                  right: "Script is run on dedicated workers"
                                }
                              },
                              {},
                              {}
                            )} ${script.dedicated_worker ? `<div class="py-2">${validate_component(Alert, "Alert").$$render(
                              $$result,
                              {
                                type: "info",
                                title: "Require dedicated workers"
                              },
                              {},
                              {
                                default: () => {
                                  return `One worker in a worker group needs to be configured with dedicated worker
												set to: <pre>${escape($workspaceStore)}:${escape(script.path)}</pre>`;
                                }
                              }
                            )}</div>` : ``}`;
                          }
                        })} ${validate_component(Section, "Section").$$render($$result, { label: "Delete after use" }, {}, {
                          header: () => {
                            return `${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                              default: () => {
                                return `WARNING: This settings ONLY applies to synchronous webhooks or when the script
											is used within a flow. If used individually, this script must be triggered
											using a synchronous endpoint to have the desired effect.
											<br> <br>
											The logs, arguments and results of the job will be completely deleted from Windmill
											once it is complete and the result has been returned.
											<br> <br>
											The deletion is irreversible.
											${!$enterpriseLicense ? `<br> <br>
												This option is only available on Windmill Enterprise Edition.` : ``}`;
                              }
                            })} `;
                          },
                          default: () => {
                            return `<div class="flex gap-2 shrink flex-col">${validate_component(Toggle, "Toggle").$$render(
                              $$result,
                              {
                                disabled: !$enterpriseLicense,
                                size: "sm",
                                checked: Boolean(script.delete_after_use),
                                options: {
                                  right: "Delete logs, arguments and results after use"
                                }
                              },
                              {},
                              {}
                            )}</div>`;
                          }
                        })} ${`${validate_component(Section, "Section").$$render(
                          $$result,
                          {
                            label: "High priority script",
                            eeOnly: true
                          },
                          {},
                          {
                            header: () => {
                              return ` ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Jobs from script labeled as high priority take precedence over the other
												jobs when in the jobs queue.
												${!$enterpriseLicense ? `This is a feature only available on enterprise
													edition.` : ``}`;
                                }
                              })} `;
                            },
                            default: () => {
                              return `${validate_component(Toggle, "Toggle").$$render(
                                $$result,
                                {
                                  disabled: !$enterpriseLicense || isCloudHosted(),
                                  size: "sm",
                                  checked: script.priority !== void 0 && script.priority > 0,
                                  options: { right: "Label as high priority" }
                                },
                                {},
                                {
                                  right: () => {
                                    return `<input type="number" class="!w-16 ml-4" ${script.priority === void 0 ? "disabled" : ""}${add_attribute("value", script.priority, 0)}>`;
                                  }
                                }
                              )}`;
                            }
                          }
                        )}`} ${validate_component(Section, "Section").$$render($$result, { label: "Runs visibility" }, {}, {
                          header: () => {
                            return `${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                              default: () => {
                                return `When this option is enabled, manual executions of this script are invisible to
											users other than the user running it, including the owner(s). This setting can
											be overridden when this script is run manually from the advanced menu.`;
                              }
                            })} `;
                          },
                          default: () => {
                            return `<div class="flex gap-2 shrink flex-col">${validate_component(Toggle, "Toggle").$$render(
                              $$result,
                              {
                                size: "sm",
                                checked: Boolean(script.visible_to_runner_only),
                                options: { right: "Make runs invisible to others" }
                              },
                              {},
                              {}
                            )}</div>`;
                          }
                        })} ${`${validate_component(Section, "Section").$$render($$result, { label: "Custom env variables" }, {}, {
                          header: () => {
                            return `${validate_component(Tooltip, "Tooltip").$$render(
                              $$result,
                              {
                                documentationLink: "https://www.windmill.dev/docs/script_editor/custom_environment_variables"
                              },
                              {},
                              {
                                default: () => {
                                  return `Additional static custom env variables to pass to the script.`;
                                }
                              }
                            )} `;
                          },
                          default: () => {
                            return `${script.envs && script.envs.length > 0 ? `${validate_component(Alert, "Alert").$$render(
                              $$result,
                              {
                                type: "warning",
                                title: "Not passed in previews",
                                size: "xs"
                              },
                              {},
                              {
                                default: () => {
                                  return `Static envs variables are not passed in preview but solely on deployed
												scripts.`;
                                }
                              }
                            )}` : ``} <div class="w-full mt-2"><span class="text-tertiary text-xs pb-2">Format is: \`${escape("<KEY>=<VALUE>")}\`</span> ${Array.isArray(script.envs ?? []) ? `${each(script.envs ?? [], (v, i) => {
                              return `<div class="flex max-w-md mt-1 w-full items-center relative"><input type="text" placeholder="<KEY>=<VALUE>"${add_attribute("value", v, 0)}> <button class="rounded-full p-1 bg-surface/60 duration-200 hover:bg-gray-200 absolute right-2" aria-label="Clear">${validate_component(X, "X").$$render($$result, { size: 14 }, {}, {})}</button> </div>`;
                            })}` : ``}</div> <div class="flex mt-2">${validate_component(Button, "Button").$$render(
                              $$result,
                              {
                                variant: "border",
                                color: "light",
                                size: "xs"
                              },
                              {},
                              {
                                default: () => {
                                  return `<div class="flex flex-row gap-1">${validate_component(Plus, "Plus").$$render($$result, { size: "16" }, {}, {})}
													Add item</div>`;
                                }
                              }
                            )}</div>`;
                          }
                        })}`}</div>`;
                      }
                    })} ${validate_component(TabContent, "TabContent").$$render($$result, { value: "ui", class: "h-full" }, {}, {
                      default: () => {
                        return `${validate_component(ScriptSchema, "ScriptSchema").$$render(
                          $$result,
                          { schema: script.schema },
                          {
                            schema: ($$value) => {
                              script.schema = $$value;
                              $$settled = false;
                            }
                          },
                          {}
                        )}`;
                      }
                    })} ${validate_component(TabContent, "TabContent").$$render($$result, { value: "schedule" }, {}, {
                      default: () => {
                        return `${validate_component(ScriptSchedules, "ScriptSchedules").$$render(
                          $$result,
                          {
                            initialPath,
                            schema: script.schema,
                            schedule: scheduleStore
                          },
                          {},
                          {}
                        )}`;
                      }
                    })}</div> `;
                  },
                  default: () => {
                    return `${validate_component(Tab, "Tab").$$render($$result, { value: "metadata" }, {}, {
                      default: () => {
                        return `Metadata`;
                      }
                    })} ${validate_component(Tab, "Tab").$$render($$result, { value: "runtime" }, {}, {
                      default: () => {
                        return `Runtime`;
                      }
                    })} ${validate_component(Tab, "Tab").$$render($$result, { value: "ui" }, {}, {
                      default: () => {
                        return `Generated UI
					${validate_component(Tooltip, "Tooltip").$$render(
                          $$result,
                          {
                            documentationLink: "https://www.windmill.dev/docs/core_concepts/json_schema_and_parsing"
                          },
                          {},
                          {
                            default: () => {
                              return `The arguments are synced with the main signature but you may refine the parts that
						cannot be inferred from the type directly.`;
                            }
                          }
                        )}`;
                      }
                    })} ${validate_component(Tab, "Tab").$$render(
                      $$result,
                      {
                        value: "schedule",
                        active: $scheduleStore.enabled
                      },
                      {},
                      {
                        default: () => {
                          return `Schedule`;
                        }
                      }
                    )}`;
                  }
                }
              )}`;
            }
          })}`;
        }
      }
    )} <div class="flex flex-col h-screen"><div class="flex h-12 items-center px-4"><div class="justify-between flex gap-2 lg:gap-8 w-full items-center"><div class="flex flex-row gap-2 grow max-w-md"><div class="center-center"><button>${validate_component(LanguageIcon, "LanguageIcon").$$render($$result, { lang: script.language, height: 20 }, {}, {})}</button></div> ${validate_component(Summary, "Summary").$$render(
      $$result,
      { value: script.summary },
      {
        value: ($$value) => {
          script.summary = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="gap-4 flex">${$scheduleStore.enabled ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        btnClasses: "hidden lg:inline-flex",
        startIcon: { icon: Calendar },
        variant: "contained",
        color: "light",
        size: "xs"
      },
      {},
      {
        default: () => {
          return `${escape($scheduleStore.cron ?? "")}`;
        }
      }
    )}` : ``} <div class="flex justify-start w-full border rounded-md overflow-hidden"><div><button>${validate_component(Badge, "Badge").$$render(
      $$result,
      {
        color: "gray",
        class: "center-center !bg-surface-secondary !text-tertiary !h-[28px]  !w-[70px] rounded-none hover:!bg-surface-hover transition-all"
      },
      {},
      {
        default: () => {
          return `${validate_component(Pen, "Pen").$$render($$result, { size: 12, class: "mr-2" }, {}, {})} Path`;
        }
      }
    )}</button></div> <input type="text" readonly${add_attribute("value", script.path, 0)}${add_attribute("size", script.path?.length || 50, 0)} class="font-mono !text-xs !min-w-[96px] !max-w-[300px] !w-full !h-[28px] !my-0 !py-0 !border-l-0 !rounded-l-none !border-0 !shadow-none"></div></div> ${$enterpriseLicense && initialPath != "" ? `${validate_component(Awareness, "Awareness").$$render($$result, {}, {}, {})}` : ``} <div class="flex flex-row gap-x-1 lg:gap-x-2">${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "light",
        variant: "border",
        size: "xs",
        disabled: !savedScript || !diffDrawer
      },
      {},
      {
        default: () => {
          return `<div class="flex flex-row gap-2 items-center">${validate_component(Diff, "DiffIcon").$$render($$result, { size: 14 }, {}, {})} <span class="hidden lg:flex" data-svelte-h="svelte-eilm9s">Diff</span></div>`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "light",
        variant: "border",
        size: "xs",
        startIcon: { icon: Settings }
      },
      {},
      {
        default: () => {
          return `<span class="hidden lg:flex" data-svelte-h="svelte-spwyhq">Settings</span>`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        loading: loadingDraft,
        size: "xs",
        startIcon: { icon: Save },
        disabled: initialPath != "" && !savedScript,
        shortCut: { key: "S" }
      },
      {},
      {
        default: () => {
          return `<span class="hidden lg:flex" data-svelte-h="svelte-e6nnhu">Draft</span>`;
        }
      }
    )} ${validate_component(CustomPopover, "CustomPopover").$$render($$result, { appearTimeout: 0, focusEl: msgInput }, {}, {
      overlay: () => {
        return `<div class="flex flex-row gap-2 min-w-72"><input type="text" placeholder="Deployment message"${add_attribute("value", deploymentMsg, 0)}${add_attribute("this", msgInput, 0)}> ${validate_component(Button, "Button").$$render(
          $$result,
          {
            size: "xs",
            endIcon: { icon: Corner_down_left },
            loading: loadingSave
          },
          {},
          {
            default: () => {
              return `Deploy`;
            }
          }
        )}</div> `;
      },
      default: () => {
        return `${validate_component(Button, "Button").$$render(
          $$result,
          {
            loading: loadingSave,
            size: "xs",
            disabled: !fullyLoaded,
            startIcon: { icon: Save },
            dropdownItems: computeDropdownItems(initialPath)
          },
          {},
          {
            default: () => {
              return `Deploy`;
            }
          }
        )}`;
      }
    })}</div></div></div> ${validate_component(ScriptEditor, "ScriptEditor").$$render(
      $$result,
      {
        collabMode: true,
        edit: initialPath != "",
        path: script.path,
        lang: script.language,
        initialArgs,
        kind: script.kind,
        template,
        tag: script.tag,
        editor,
        this: scriptEditor,
        schema: script.schema,
        code: script.content
      },
      {
        editor: ($$value) => {
          editor = $$value;
          $$settled = false;
        },
        this: ($$value) => {
          scriptEditor = $$value;
          $$settled = false;
        },
        schema: ($$value) => {
          script.schema = $$value;
          $$settled = false;
        },
        code: ($$value) => {
          script.content = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : `Script Builder not available to operators`}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_scheduleStore();
  $$unsubscribe_defaultScripts();
  $$unsubscribe_userStore();
  $$unsubscribe_enterpriseLicense();
  return $$rendered;
});
export {
  ScriptBuilder as S
};
