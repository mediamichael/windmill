import { c as create_ssr_component, v as validate_component, e as escape, f as each, h as getContext, s as subscribe, b as add_attribute, d as createEventDispatcher, q as missing_component, u as setContext, a as set_store_value } from "./ssr.js";
import { t as tick } from "./Head.js";
import { c as ScriptService, F as FlowService, D as DraftService } from "./services.gen.js";
import { c as charsToNumber, b as initHistory, p as push } from "./history.js";
import { w as workspaceStore, f as copilotInfo, t as tutorialsToDo, u as userStore, e as enterpriseLicense } from "./stores2.js";
import { B as Button, g as classNames, k as capitalize, Q as ButtonDropdown, M as MenuItem$1, c as cleanValueProperties, o as orderedJsonStringify, s as sendUserToast, G as encodeState, y as sleep } from "./toast.js";
import { w as writable } from "./index.js";
import "./index2.js";
import { twMerge } from "tailwind-merge";
import { B as Badge } from "./Badge.js";
import { T as TutorialItem, U as UndoRedo } from "./TutorialItem.js";
/* empty css                                     */
import "./common.js";
import { C as CenteredPage } from "./CenteredPage.js";
import { S as Splitpanes, P as Pane } from "./Pane.js";
import { a as FlowModuleSchemaMap, b as FlowEditorPanel, M as ManualPopover, c as FlowTutorials, d as FlowCopilotInputsModal, F as FlowPreviewButtons } from "./FlowPreviewButtons.js";
import { W as WindmillIcon } from "./WindmillIcon.js";
import { S as Skeleton } from "./Skeleton.js";
import YAML from "yaml";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import "minimatch";
import { D as Drawer, a as DrawerContent } from "./DrawerContent.js";
import { a as ConfirmationModal, C as Corner_down_left } from "./ConfirmationModal.js";
import { D as DiffDrawer } from "./DiffDrawer.js";
import { D as Diff, a as ScriptEditor, S as Summary, A as Awareness } from "./ScriptEditor.js";
import "./infer.js";
import { S as Save } from "./VariableEditor.js";
import { L as Loader_2 } from "./loader-2.js";
import { d as dfs, g as getPreviousIds } from "./util.js";
import { H as HighlightTheme, a as Highlight, j as json, S as SchemaViewer } from "./SchemaViewer.js";
import { T as Tabs, a as Tab } from "./Tabs.js";
import { T as TabContent } from "./TabContent.js";
import { b as FieldHeader } from "./LightweightSchemaForm.js";
import { F as FlowGraphViewer } from "./FlowGraphViewerStep.js";
import { C as Clipboard } from "./clipboard.js";
import { y as yaml } from "./yaml.js";
import { c as cleanInputs, p as pickScript, e as emptyFlowModuleState, a as loadFlowModuleState } from "./flowStateUtils.js";
import { l as loadFlowSchedule } from "./scheduleUtils.js";
import { g as getAllModules } from "./flowExplorer.js";
import { b as addResourceTypes, d as deltaCodeCompletion, g as getNonStreamingCompletion } from "./lib.js";
import { s as scriptLangToEditorLang } from "./scripts.js";
import { A as Alert } from "./Alert.js";
import { T as ToggleButtonGroup, a as ToggleButton } from "./ToggleButtonGroup.js";
import { A as APP_TO_ICON_COMPONENT } from "./index4.js";
import { X } from "./x.js";
import { W as Wand_2 } from "./wand-2.js";
import { P as Plus } from "./plus.js";
import { b as base } from "./base.js";
import { P as Popup } from "./Popup.js";
import { E as External_link } from "./Popover.js";
import { M as MenuItem } from "./MenuItem.js";
import { B as Book_open } from "./book-open.js";
import { i as ignoredTutorials } from "./TemplateEditor.js";
import { F as FlowHistory } from "./FlowHistory.js";
import { C as CustomPopover } from "./CustomPopover.js";
import { C as Calendar } from "./calendar.js";
import { P as Pen } from "./pen.js";
import { M as More_vertical } from "./DropdownV2.js";
import { H as History } from "./history2.js";
import { F as File_json } from "./file-json.js";
function toAny(x) {
  return x;
}
const FlowViewer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let flowFiltered;
  let { flow } = $$props;
  let { initialOpen = void 0 } = $$props;
  let { noSide = false } = $$props;
  let { noGraph = false } = $$props;
  let { tab = noGraph ? "schema" : "ui" } = $$props;
  let { noSummary = false } = $$props;
  let rawType = "yaml";
  if ($$props.flow === void 0 && $$bindings.flow && flow !== void 0) $$bindings.flow(flow);
  if ($$props.initialOpen === void 0 && $$bindings.initialOpen && initialOpen !== void 0) $$bindings.initialOpen(initialOpen);
  if ($$props.noSide === void 0 && $$bindings.noSide && noSide !== void 0) $$bindings.noSide(noSide);
  if ($$props.noGraph === void 0 && $$bindings.noGraph && noGraph !== void 0) $$bindings.noGraph(noGraph);
  if ($$props.tab === void 0 && $$bindings.tab && tab !== void 0) $$bindings.tab(tab);
  if ($$props.noSummary === void 0 && $$bindings.noSummary && noSummary !== void 0) $$bindings.noSummary(noSummary);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    flowFiltered = {
      summary: flow.summary,
      description: flow.description,
      value: flow.value,
      schema: flow.schema
    };
    $$rendered = `${validate_component(HighlightTheme, "HighlightTheme").$$render($$result, {}, {}, {})} ${validate_component(Tabs, "Tabs").$$render(
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
          return `${validate_component(TabContent, "TabContent").$$render($$result, { value: "ui" }, {}, {
            default: () => {
              return `<div class="flow-root w-full pb-4">${!noSummary ? `<h2 class="my-4">${escape(flow.summary)}</h2> <div>${escape(flow.description ?? "")}</div>` : ``} <p class="font-black text-lg w-full my-4" data-svelte-h="svelte-b4j65f"><span>Flow Input</span></p> ${flow.schema && flow.schema.properties && Object.keys(flow.schema.properties).length > 0 && flow.schema ? `<ul class="my-2">${each(Object.entries(flow.schema.properties), ([inp, v]) => {
                return `<li class="list-disc flex flex-row">${validate_component(FieldHeader, "FieldHeader").$$render(
                  $$result,
                  {
                    label: inp,
                    required: flow.schema.required?.includes(inp),
                    type: toAny(v)?.type,
                    contentEncoding: toAny(v)?.contentEncoding,
                    format: toAny(v)?.format
                  },
                  {},
                  {}
                )}<span class="ml-4 mt-2 text-xs">${escape(toAny(v)?.default != void 0 ? "default: " + JSON.stringify(toAny(v)?.default) : "")}</span> </li>`;
              })}</ul>` : `<div class="text-secondary text-xs italic mb-4" data-svelte-h="svelte-16anxws">No inputs</div>`} ${validate_component(FlowGraphViewer, "FlowGraphViewer").$$render(
                $$result,
                {
                  download: true,
                  noSide,
                  flow,
                  overflowAuto: true
                },
                {},
                {}
              )}</div>`;
            }
          })} ${validate_component(TabContent, "TabContent").$$render($$result, { value: "raw" }, {}, {
            default: () => {
              return `${validate_component(Tabs, "Tabs").$$render(
                $$result,
                { wrapperClass: "mt-4", selected: rawType },
                {
                  selected: ($$value) => {
                    rawType = $$value;
                    $$settled = false;
                  }
                },
                {
                  content: () => {
                    return `<div class="relative pt-2">${validate_component(Button, "Button").$$render(
                      $$result,
                      {
                        color: "light",
                        variant: "border",
                        size: "xs",
                        startIcon: { icon: Clipboard },
                        btnClasses: "absolute top-2 right-2 w-min"
                      },
                      {},
                      {
                        default: () => {
                          return `Copy content`;
                        }
                      }
                    )} ${validate_component(Highlight, "Highlight").$$render(
                      $$result,
                      {
                        class: "overflow-auto px-1",
                        language: rawType === "yaml" ? yaml : json,
                        code: rawType === "yaml" ? YAML.stringify(flowFiltered) : JSON.stringify(flowFiltered, null, 4)
                      },
                      {},
                      {}
                    )}</div> `;
                  },
                  default: () => {
                    return `${validate_component(Tab, "Tab").$$render($$result, { value: "yaml" }, {}, {
                      default: () => {
                        return `YAML`;
                      }
                    })} ${validate_component(Tab, "Tab").$$render($$result, { value: "json" }, {}, {
                      default: () => {
                        return `JSON`;
                      }
                    })}`;
                  }
                }
              )}`;
            }
          })} ${validate_component(TabContent, "TabContent").$$render($$result, { value: "schema" }, {}, {
            default: () => {
              return `<div class="my-4"></div> ${validate_component(SchemaViewer, "SchemaViewer").$$render($$result, { schema: flow.schema }, {}, {})}`;
            }
          })} `;
        },
        default: () => {
          return `${!noGraph ? `${validate_component(Tab, "Tab").$$render($$result, { value: "ui" }, {}, {
            default: () => {
              return `Graph`;
            }
          })}` : ``} ${validate_component(Tab, "Tab").$$render($$result, { value: "raw" }, {}, {
            default: () => {
              return `Raw`;
            }
          })} ${validate_component(Tab, "Tab").$$render($$result, { value: "schema" }, {}, {
            default: () => {
              return `Input Schema`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
let size = 40;
const FlowEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $copilotCurrentStepStore, $$unsubscribe_copilotCurrentStepStore;
  let $flowStore, $$unsubscribe_flowStore;
  const { flowStore } = getContext("FlowEditorContext");
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => $flowStore = value);
  let { loading } = $$props;
  let { disableStaticInputs = false } = $$props;
  let { disableTutorials = false } = $$props;
  let { disableAi = false } = $$props;
  let { disableSettings = false } = $$props;
  let { smallErrorHandler = false } = $$props;
  let { enableAi = true } = $$props;
  const { currentStepStore: copilotCurrentStepStore } = getContext("FlowCopilotContext");
  $$unsubscribe_copilotCurrentStepStore = subscribe(copilotCurrentStepStore, (value) => $copilotCurrentStepStore = value);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
  if ($$props.disableStaticInputs === void 0 && $$bindings.disableStaticInputs && disableStaticInputs !== void 0) $$bindings.disableStaticInputs(disableStaticInputs);
  if ($$props.disableTutorials === void 0 && $$bindings.disableTutorials && disableTutorials !== void 0) $$bindings.disableTutorials(disableTutorials);
  if ($$props.disableAi === void 0 && $$bindings.disableAi && disableAi !== void 0) $$bindings.disableAi(disableAi);
  if ($$props.disableSettings === void 0 && $$bindings.disableSettings && disableSettings !== void 0) $$bindings.disableSettings(disableSettings);
  if ($$props.smallErrorHandler === void 0 && $$bindings.smallErrorHandler && smallErrorHandler !== void 0) $$bindings.smallErrorHandler(smallErrorHandler);
  if ($$props.enableAi === void 0 && $$bindings.enableAi && enableAi !== void 0) $$bindings.enableAi(enableAi);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div${add_attribute(
      "class",
      classNames("h-full overflow-hidden transition-colors duration-[400ms] ease-linear border-t", $copilotCurrentStepStore !== void 0 ? "border-gray-500/75" : ""),
      0
    )}>${validate_component(Splitpanes, "Splitpanes").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Pane, "Pane").$$render(
          $$result,
          {
            size,
            minSize: 15,
            class: "h-full relative z-0"
          },
          {},
          {
            default: () => {
              return `<div class="grow overflow-hidden bg-gray h-full bg-surface-secondary relative">${loading ? `<div class="p-2 pt-10">${each(new Array(6), (_) => {
                return `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[2], 1.5] }, {}, {})}`;
              })}</div>` : `${$flowStore.value.modules ? `${validate_component(FlowModuleSchemaMap, "FlowModuleSchemaMap").$$render(
                $$result,
                {
                  disableStaticInputs,
                  disableTutorials,
                  disableAi,
                  disableSettings,
                  smallErrorHandler,
                  modules: $flowStore.value.modules
                },
                {
                  modules: ($$value) => {
                    $flowStore.value.modules = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}` : ``}`}</div>`;
            }
          }
        )} ${validate_component(Pane, "Pane").$$render(
          $$result,
          {
            class: "relative z-10",
            size: 100 - size,
            minSize: 40
          },
          {},
          {
            default: () => {
              return `${loading ? `<div class="w-full h-full"><div class="block m-auto mt-40 w-10">${validate_component(WindmillIcon, "WindmillIcon").$$render(
                $$result,
                {
                  height: "40px",
                  width: "40px",
                  spin: "fast"
                },
                {},
                {}
              )}</div></div>` : `${validate_component(FlowEditorPanel, "FlowEditorPanel").$$render($$result, { enableAi }, {}, {})}`}`;
            }
          }
        )}`;
      }
    })}</div>`;
  } while (!$$settled);
  $$unsubscribe_copilotCurrentStepStore();
  $$unsubscribe_flowStore();
  return $$rendered;
});
const ScriptEditorDrawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let scriptEditorDrawer;
  createEventDispatcher();
  async function openDrawer(hash, cb) {
    script = void 0;
    scriptEditorDrawer.openDrawer?.();
    script = await ScriptService.getScriptByHash({ workspace: $workspaceStore, hash });
    savedScript = structuredClone(script);
  }
  let script = void 0;
  let savedScript = void 0;
  let diffDrawer;
  let unsavedModalOpen = false;
  if ($$props.openDrawer === void 0 && $$bindings.openDrawer && openDrawer !== void 0) $$bindings.openDrawer(openDrawer);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = ` ${validate_component(ConfirmationModal, "ConfirmationModal").$$render(
      $$result,
      {
        open: unsavedModalOpen,
        title: "Unsaved changes detected",
        confirmationText: "Discard changes"
      },
      {},
      {
        default: () => {
          return `<div class="flex flex-col w-full space-y-4"><span data-svelte-h="svelte-vwsyyn">Are you sure you want to discard the changes you have made?</span> ${validate_component(Button, "Button").$$render(
            $$result,
            {
              wrapperClasses: "self-start",
              color: "light",
              variant: "border",
              size: "xs"
            },
            {},
            {
              default: () => {
                return `Show diff`;
              }
            }
          )}</div>`;
        }
      }
    )}  ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "1200px", this: scriptEditorDrawer },
      {
        this: ($$value) => {
          scriptEditorDrawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render(
            $$result,
            {
              title: "Script Editor",
              noPadding: true,
              forceOverflowVisible: true,
              fullScreen: true
            },
            {},
            {
              actions: () => {
                return `${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    disabled: !savedScript || !script,
                    color: "light",
                    variant: "border"
                  },
                  {},
                  {
                    default: () => {
                      return `<div class="flex flex-row gap-2 items-center">${validate_component(Diff, "DiffIcon").$$render($$result, { size: 14 }, {}, {})}
					Diff</div>`;
                    }
                  }
                )} ${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    disabled: !script,
                    startIcon: { icon: Save }
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
                return `${script ? `${validate_component(ScriptEditor, "ScriptEditor").$$render(
                  $$result,
                  {
                    noSyncFromGithub: true,
                    lang: script.language,
                    path: script.path,
                    fixedOverflowWidgets: false,
                    tag: void 0,
                    code: script.content,
                    schema: script.schema
                  },
                  {
                    code: ($$value) => {
                      script.content = $$value;
                      $$settled = false;
                    },
                    schema: ($$value) => {
                      script.schema = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}` : `<div class="absolute inset-0 center-center flex-col bg-surface text-tertiary border">${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin", size: 16 }, {}, {})} <span class="text-xs mt-1" data-svelte-h="svelte-19kx0d7">Loading</span></div>`}`;
              }
            }
          )}`;
        }
      }
    )} ${validate_component(DiffDrawer, "DiffDrawer").$$render(
      $$result,
      { this: diffDrawer },
      {
        this: ($$value) => {
          diffDrawer = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const FlowImportExportMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $flowStore, $$unsubscribe_flowStore;
  const { flowStore } = getContext("FlowEditorContext");
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => $flowStore = value);
  let { drawer } = $$props;
  if ($$props.drawer === void 0 && $$bindings.drawer && drawer !== void 0) $$bindings.drawer(drawer);
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
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "OpenFlow" }, {}, {
            default: () => {
              return `${$flowStore ? `${validate_component(FlowViewer, "FlowViewer").$$render(
                $$result,
                {
                  flow: cleanInputs($flowStore),
                  tab: "raw"
                },
                {},
                {}
              )}` : ``}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_flowStore();
  return $$rendered;
});
const systemPrompt = `You are a helpful coding assistant for Windmill, a developer platform for running scripts. You write code as instructed by the user. Each user message includes some contextual information which should guide your answer.
Only output code. Wrap the code in a code block.
Put explanations directly in the code as comments.

Here's how interactions have to look like:
user: {sample_question}
assistant: \`\`\`{codeLang}
{code}
\`\`\``;
const additionalInfos = {
  bun: `<contextual_information>
You have to write TypeScript code and export a "main" function like this: "export async function main(...)" and specify the parameter types but do not call it. You should generally return the result.
The fetch standard method is available globally.
You can take as parameters resources which are dictionaries containing credentials or configuration information. For Windmill to correctly detect the resources to be passed, the resource type name has to be exactly as specified in the following list:
<resourceTypes>
{resourceTypes}
</resourceTypes>
You need to define the type of the resources that are needed before the main function, but only include them if they are actually needed to achieve the function purpose.
The resource type name has to be exactly as specified (no resource suffix). If the type name conflicts with any imported methods, you have to rename the imported method with the conflicting name.
</contextual_information>`,
  python3: `<contextual_information>
You have to write a function in Python called "main". Specify the parameter types. Do not call the main function. You should generally return the result.
You can take as parameters resources which are dictionaries containing credentials or configuration information. For Windmill to correctly detect the resources to be passed, the resource type name has to be exactly as specified in the following list:
<resourceTypes>
{resourceTypes}
</resourceTypes>
You need to define the type of the resources that are needed before the main function, but only include them if they are actually needed to achieve the function purpose.
The resource type name has to be exactly as specified (has to be IN LOWERCASE). If the type name conflicts with any imported methods, you have to rename the imported method with the conflicting name.
<contextual_information>`
};
const triggerPrompts = {
  bun: `I'm building a workflow which is a sequence of script steps. Write the first script in {codeLang} which should check for {description} and return an array.
To maintain state across runs, you can use "const {state_name}: {state_type} = await getState()" and "await setState(value: any)" which you have to import like this: import { getState, setState } from "windmill-client@1"

{additionalInformation}`,
  python3: `I'm building a workflow which is a sequence of script steps. Write the first script in {codeLang} which should check for {description} and return an array.
To maintain state across runs, you can use get_state() and set_state(value) which you have to import like this: from wmill import get_state, set_state

{additionalInformation}`
};
const firstActionPrompt = `I'm building a workflow which is a sequence of script steps. Write a script in {codeLang} which should {description}.
Return the script's output.

{additionalInformation}`;
const inferTypePrompt = 'Infer the type of "prev_output" from the previous\'s step code: ```{codeLang}\n{prevCode}\n```';
const actionPrompt = `I'm building a workflow which is a sequence of script steps. Write a script in {codeLang} which should {description}. It should take a parameter called "prev_output" which contains the output of the previous script.
{inferTypePrompt}
Return the script's output.

{additionalInformation}`;
const inferTypeLoopPrompt = 'Infer the type of "prev_output" from the previous\'s step code: ```{codeLang}\n{prevCode}\n```, keeping in mind that it is ONE ELEMENT of the output of the previous step.';
const loopActionPrompt = `I'm building a workflow which is a sequence of script steps. Write a script in {codeLang} which should {description}. It should take a parameter called "prev_output" which contains ONE ELEMEMT of the output of the previous script.
{inferTypePrompt}
Return the script's output.

{additionalInformation}`;
const inferTypeGluePrompt = "Infer its properties from the previous's step code: ```{codeLang}\n{prevCode}\n```";
const loopGluePrompt = `I'm building a workflow which is a sequence of script steps. 
My current step code has the following inputs: {inputs}. 
Determine for each input, what to pass from the following:
- \`flow_input\` (javascript object): general inputs that are passed to the workflow, you can assume any object properties (snake case).
- \`flow_input.iter.value\` (javascript object): it is ONE ELEMENT of the output of the previous step. {inferTypeGluePrompt}

Reply with the most probable answer, do not explain or discuss.
Your answer has to be in the following format (one line per input):
input_name: expr`;
const gluePrompt = `I'm building a workflow which is a sequence of script steps. 
My current step code has the following inputs: {inputs}. 
Determine for each input, what to pass from the following:
- \`flow_input\` (javascript object): general inputs that are passed to the workflow, you can assume any object properties (snake case).
- \`results.{prevId}\` (javascript object): output of the previous step. {inferTypeGluePrompt}

Reply with the most probable answer, do not explain or discuss.
Your answer has to be in the following format (one line per input):
input_name: expr`;
async function getPreviousStepContent(pastModule, workspace) {
  if (pastModule.value.type === "rawscript") {
    return { prevCode: pastModule.value.content, prevLang: pastModule.value.language };
  } else {
    if (pastModule.value.path.startsWith("hub/")) {
      const script = await ScriptService.getHubScriptByPath({
        path: pastModule.value.path
      });
      return { prevCode: script.content, prevLang: script.language };
    } else if (pastModule.value.hash) {
      const script = await ScriptService.getScriptByHash({
        workspace,
        hash: pastModule.value.hash
      });
      return { prevCode: script.content, prevLang: script.language };
    } else {
      const script = await ScriptService.getScriptByPath({
        workspace,
        path: pastModule.value.path
      });
      return { prevCode: script.content, prevLang: script.language };
    }
  }
}
async function stepCopilot(module, deltaCodeStore, workspace, pastModule, isFirstInLoop, abortController) {
  if (module.source !== "custom") {
    throw new Error("Not a custom module");
  }
  const lang = module.lang ?? "bun";
  const codeLang = lang === "python3" ? "python" : "typescript (Node.js)";
  let prompt = module.type === "trigger" ? triggerPrompts[lang] : pastModule === void 0 ? firstActionPrompt : isFirstInLoop ? loopActionPrompt : actionPrompt;
  const { prevCode, prevLang } = pastModule ? await getPreviousStepContent(pastModule, workspace) : { prevCode: void 0, prevLang: void 0 };
  prompt = prompt.replace("{codeLang}", codeLang).replace(
    "{inferTypePrompt}",
    prevCode && prevLang ? (isFirstInLoop ? inferTypeLoopPrompt : inferTypePrompt).replace("{prevCode}", prevCode).replace("{codeLang}", scriptLangToEditorLang(prevLang)) : ""
  ).replace("{additionalInformation}", additionalInfos[lang]).replace("{description}", module.description);
  prompt = await addResourceTypes(
    {
      type: "gen",
      language: lang,
      description: module.description,
      dbSchema: void 0,
      workspace
    },
    prompt
  );
  const code = await deltaCodeCompletion(
    [
      {
        role: "system",
        content: systemPrompt
      },
      {
        role: "user",
        content: prompt
      }
    ],
    deltaCodeStore,
    abortController
  );
  return code;
}
async function glueCopilot(inputs, workspace, pastModule, isFirstInLoop, abortController) {
  const { prevCode, prevLang } = await getPreviousStepContent(pastModule, workspace);
  const stringInputs = [];
  for (const inputName in inputs) {
    const input = inputs[inputName];
    if (input.type === "static" && input.value && typeof input.value === "object" && !Array.isArray(input.value)) {
      stringInputs.push(`${inputName} (${Object.keys(input.value).join(", ")})`);
    } else {
      stringInputs.push(inputName);
    }
  }
  let response = await getNonStreamingCompletion(
    [
      {
        role: "user",
        content: (isFirstInLoop ? loopGluePrompt : gluePrompt).replace("{inputs}", stringInputs.join(", ")).replace("{prevId}", pastModule.id).replace(
          "{inferTypeGluePrompt}",
          inferTypeGluePrompt.replace("{prevCode}", prevCode).replace("{codeLang}", scriptLangToEditorLang(prevLang))
        )
      }
    ],
    abortController
  );
  const matches = response.matchAll(/([a-zA-Z_0-9.]+): (.+)/g);
  const result = {};
  const allExprs = {};
  for (const match of matches) {
    const inputName = match[1];
    const inputExpr = match[2].replace(",", "");
    allExprs[inputName] = inputExpr;
    if (inputName.includes(".")) {
      const [firstKey, ...rest] = inputName.split(".");
      const restStr = rest.join(".");
      if (!result[firstKey]) {
        result[firstKey] = `{
  "${restStr}": ${inputExpr}
}`;
      } else {
        result[firstKey] = result[firstKey].replace("\n}", `,
  "${restStr}": ${inputExpr}
}`);
      }
    } else {
      result[inputName] = inputExpr;
    }
  }
  return {
    inputs: result,
    allExprs
  };
}
const FlowCopilotDrawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $drawerStore, $$unsubscribe_drawerStore;
  let $flowStore, $$unsubscribe_flowStore;
  let $currentStepStore, $$unsubscribe_currentStepStore;
  let $modulesStore, $$unsubscribe_modulesStore;
  let { getHubCompletions } = $$props;
  let { genFlow } = $$props;
  let { flowCopilotMode } = $$props;
  const { flowStore } = getContext("FlowEditorContext");
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => $flowStore = value);
  const { drawerStore, modulesStore, currentStepStore } = getContext("FlowCopilotContext");
  $$unsubscribe_drawerStore = subscribe(drawerStore, (value) => $drawerStore = value);
  $$unsubscribe_modulesStore = subscribe(modulesStore, (value) => $modulesStore = value);
  $$unsubscribe_currentStepStore = subscribe(currentStepStore, (value) => $currentStepStore = value);
  if ($$props.getHubCompletions === void 0 && $$bindings.getHubCompletions && getHubCompletions !== void 0) $$bindings.getHubCompletions(getHubCompletions);
  if ($$props.genFlow === void 0 && $$bindings.genFlow && genFlow !== void 0) $$bindings.genFlow(genFlow);
  if ($$props.flowCopilotMode === void 0 && $$bindings.flowCopilotMode && flowCopilotMode !== void 0) $$bindings.flowCopilotMode(flowCopilotMode);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { this: $drawerStore },
      {
        this: ($$value) => {
          $drawerStore = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render(
            $$result,
            {
              title: "AI Flow Builder",
              tooltip: "Build flows from prompts",
              documentationLink: "https://www.windmill.dev/docs/core_concepts/ai_generation#windmill-ai-for-flows"
            },
            {},
            {
              default: () => {
                return `<div class="flex flex-col gap-6">${$flowStore.value.modules.length > 0 && $currentStepStore === void 0 ? `${validate_component(Alert, "Alert").$$render($$result, { type: "error", title: "Flow not empty" }, {}, {
                  default: () => {
                    return `All flow steps will be overriden`;
                  }
                })}` : ``} ${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
                  $$result,
                  { selected: flowCopilotMode },
                  {
                    selected: ($$value) => {
                      flowCopilotMode = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    default: () => {
                      return `${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: "sequence", label: "Sequence" }, {}, {})} ${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: "trigger", label: "Trigger" }, {}, {})}`;
                    }
                  }
                )} ${flowCopilotMode === "trigger" ? `${validate_component(Alert, "Alert").$$render($$result, { title: "Trigger flow builder" }, {}, {
                  default: () => {
                    return `Build a flow with two scripts, one that regularly checks for changes in an external system
					and a second that is executed for each change using a for-loop. For both steps, you can
					either choose a script from the hub or generate one from scratch using Windmill AI. The
					inputs of the for-loop action are automatically filled in with the ouputs of the trigger
					step. At the end of the process, flow inputs are inferred and you just need to fill them
					in. <br><br>
					The flow is automatically set to run every 15 minutes when deployed.`;
                  }
                })}` : `${validate_component(Alert, "Alert").$$render($$result, { title: "Sequence flow builder" }, {}, {
                  default: () => {
                    return `Build a flow with a sequence of scripts that are executed one after the other. For each
					step, you can either choose a script from the hub or generate one from scratch using
					Windmill AI. Each step inputs are automatically filled in with the previous step&#39;s
					outputs. At the end of the process, flow inputs are inferred and you just need to fill
					them in.`;
                  }
                })}`} ${each($modulesStore, (copilotModule, i) => {
                  return `<div>${i === 1 && $modulesStore[i - 1].type === "trigger" ? `<div class="flex flex-row items-center mb-4 gap-1"><p class="text-sm font-semibold" data-svelte-h="svelte-dyur95">For loop</p> ${validate_component(Badge, "Badge").$$render($$result, { color: "indigo" }, {}, {
                    default: () => {
                      return `${escape(copilotModule.id)}_loop`;
                    }
                  })} </div>` : ``} <div${add_attribute(
                    "class",
                    i === 1 && $modulesStore[i - 1].type === "trigger" ? "pl-4" : "",
                    0
                  )}><div class="flex flex-row items-center justify-between"><div class="flex flex-row justify-between items-center w-full mb-2"><div class="flex flex-row items-center gap-1"><p class="text-sm font-semibold">${escape(copilotModule.type === "trigger" ? "Trigger" : "Action")}</p> ${validate_component(Badge, "Badge").$$render($$result, { color: "indigo" }, {}, {
                    default: () => {
                      return `${escape(copilotModule.id)}`;
                    }
                  })}</div> ${flowCopilotMode === "sequence" && i >= 1 ? `<button>${validate_component(X, "X").$$render($$result, {}, {}, {})} </button>` : ``} </div></div> ${copilotModule.source !== void 0 ? `<div${add_attribute(
                    "class",
                    classNames("p-4 gap-4 flex flex-row grow  transition-all items-center rounded-md justify-between border", $currentStepStore !== void 0 && i < charsToNumber($currentStepStore) ? "bg-gray-700/10" : "bg-surface"),
                    0
                  )}><div class="flex items-center gap-4"><div class="rounded-md p-1 flex justify-center items-center bg-surface border h-6 w-6">${copilotModule.source === "hub" && copilotModule.selectedCompletion ? `${validate_component(APP_TO_ICON_COMPONENT[copilotModule.selectedCompletion["app"]] || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : `${validate_component(Wand_2, "Wand2").$$render($$result, {}, {}, {})}`}</div> <div class="w-full text-left font-normal"><div class="text-primary flex-wrap text-sm font-medium">${escape(copilotModule.source === "hub" && copilotModule.selectedCompletion ? copilotModule.selectedCompletion.summary + " (" + copilotModule.selectedCompletion.app + ")" : `Generate "${copilotModule.description}" in ${copilotModule.lang === "bun" ? "TypeScript" : "Python"}`)}</div> </div></div> ${copilotModule.source === "hub" && copilotModule.selectedCompletion && copilotModule.selectedCompletion?.kind !== "script" ? `${validate_component(Badge, "Badge").$$render($$result, { color: "gray", baseClass: "border" }, {}, {
                    default: () => {
                      return `${escape(capitalize(copilotModule.selectedCompletion.kind.toString()))}`;
                    }
                  })}` : ``} <button>${validate_component(X, "X").$$render($$result, {}, {}, {})} </button></div> ${$currentStepStore !== void 0 && i < charsToNumber($currentStepStore) ? `<p class="font-semibold text-sm text-green-600" data-svelte-h="svelte-o5vspj">Already generated, edit step to regenerate from this point</p>` : ``}` : `<input name="description" type="text"${add_attribute(
                    "placeholder",
                    copilotModule.type === "trigger" ? 'describe what should trigger your flow e.g. "new slack message"' : "describe what this step should do",
                    0
                  )}${add_attribute("value", copilotModule.description, 0)}>`} ${copilotModule.description.length > 2 && copilotModule.source === void 0 ? `<div class="divide-y border rounded-md transition-all mt-2"><button class="p-4 gap-4 flex flex-row hover:bg-surface-hover bg-surface transition-all items-center rounded-md justify-between w-full"><div class="flex items-center gap-4"><div class="rounded-md p-1 flex justify-center items-center bg-surface border w-6 h-6">${validate_component(Wand_2, "Wand2").$$render($$result, {}, {}, {})}</div> <div class="w-full text-left text-sm"><div class="text-primary flex-wrap font-medium">Generate &quot;${escape(copilotModule.description)}&quot; in TypeScript
											</div></div> </div></button> <button class="p-4 gap-4 flex flex-row hover:bg-surface-hover bg-surface transition-all items-center rounded-md justify-between w-full"><div class="flex items-center gap-4"><div class="rounded-md p-1 flex justify-center items-center bg-surface border w-6 h-6">${validate_component(Wand_2, "Wand2").$$render($$result, {}, {}, {})}</div> <div class="w-full text-left text-sm"><div class="text-primary flex-wrap font-medium">Generate &quot;${escape(copilotModule.description)}&quot; in Python</div> </div></div> </button></div> ${copilotModule.hubCompletions.length > 0 ? `<p class="mt-2 font-semibold text-sm" data-svelte-h="svelte-1n1oee9">Hub scripts</p> <ul class="divide-y border rounded-md transition-all mt-1">${each(copilotModule.hubCompletions, (item) => {
                    return `<li><button class="p-4 gap-4 flex flex-row hover:bg-surface-hover bg-surface transition-all items-center rounded-md justify-between w-full"><div class="flex items-center gap-4"><div class="rounded-md p-1 flex justify-center items-center bg-surface border w-6 h-6">${validate_component(APP_TO_ICON_COMPONENT[item["app"]] || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div> <div class="text-left font-normal text-sm"><div class="text-primary font-medium">${escape((item.summary ?? "") + " (" + item["app"] + ")")}</div> </div></div> ${item.kind !== "script" ? `${validate_component(Badge, "Badge").$$render($$result, { color: "gray", baseClass: "border" }, {}, {
                      default: () => {
                        return `${escape(capitalize(item.kind.toString()))}`;
                      }
                    })}` : ``}</button> </li>`;
                  })} </ul>` : ``}` : ``}</div> </div>`;
                })} ${flowCopilotMode !== "trigger" ? `<div class="flex justify-start">${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    startIcon: { icon: Plus },
                    size: "xs",
                    variant: "border"
                  },
                  {},
                  {
                    default: () => {
                      return `Add step`;
                    }
                  }
                )}</div>` : ``} ${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    spacingSize: "md",
                    startIcon: { icon: Wand_2 },
                    disabled: $modulesStore.find((m) => m.source === void 0) !== void 0
                  },
                  {},
                  {
                    default: () => {
                      return `${escape($currentStepStore !== void 0 ? `Regenerate flow from step '${$currentStepStore}'` : "Build flow")}`;
                    }
                  }
                )}</div>`;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_drawerStore();
  $$unsubscribe_flowStore();
  $$unsubscribe_currentStepStore();
  $$unsubscribe_modulesStore();
  return $$rendered;
});
const FlowCopilotStatus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $copilotInfo, $$unsubscribe_copilotInfo;
  let $currentStepStore, $$unsubscribe_currentStepStore;
  let $$unsubscribe_drawerStore;
  let $modulesStore, $$unsubscribe_modulesStore;
  let $$unsubscribe_flowStore;
  $$unsubscribe_copilotInfo = subscribe(copilotInfo, (value) => $copilotInfo = value);
  let { copilotLoading } = $$props;
  let { copilotStatus } = $$props;
  let { abortController } = $$props;
  let { genFlow } = $$props;
  let { finishCopilotFlowBuilder } = $$props;
  let copilotPopover = void 0;
  const { flowStore } = getContext("FlowEditorContext");
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => value);
  const { modulesStore, drawerStore, currentStepStore } = getContext("FlowCopilotContext");
  $$unsubscribe_modulesStore = subscribe(modulesStore, (value) => $modulesStore = value);
  $$unsubscribe_drawerStore = subscribe(drawerStore, (value) => value);
  $$unsubscribe_currentStepStore = subscribe(currentStepStore, (value) => $currentStepStore = value);
  if ($$props.copilotLoading === void 0 && $$bindings.copilotLoading && copilotLoading !== void 0) $$bindings.copilotLoading(copilotLoading);
  if ($$props.copilotStatus === void 0 && $$bindings.copilotStatus && copilotStatus !== void 0) $$bindings.copilotStatus(copilotStatus);
  if ($$props.abortController === void 0 && $$bindings.abortController && abortController !== void 0) $$bindings.abortController(abortController);
  if ($$props.genFlow === void 0 && $$bindings.genFlow && genFlow !== void 0) $$bindings.genFlow(genFlow);
  if ($$props.finishCopilotFlowBuilder === void 0 && $$bindings.finishCopilotFlowBuilder && finishCopilotFlowBuilder !== void 0) $$bindings.finishCopilotFlowBuilder(finishCopilotFlowBuilder);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      copilotStatus.length > 0 ? copilotPopover?.open() : copilotPopover?.close();
    }
    copilotStatus && copilotPopover?.refresh();
    $$rendered = `${$copilotInfo.exists_openai_resource_path ? `${validate_component(ManualPopover, "ManualPopover").$$render(
      $$result,
      { this: copilotPopover },
      {
        this: ($$value) => {
          copilotPopover = $$value;
          $$settled = false;
        }
      },
      {
        content: () => {
          return `<div slot="content" class="text-sm flex flex-row items-center z-[901]"><span class="font-semibold">${escape(copilotStatus)}</span> ${!copilotLoading && $currentStepStore !== void 0 && $currentStepStore !== "Input" ? `${validate_component(Button, "Button").$$render(
            $$result,
            {
              size: "xs",
              btnClasses: "ml-2",
              color: "red"
            },
            {},
            {
              default: () => {
                return `Edit prompts`;
              }
            }
          )} ${validate_component(Button, "Button").$$render(
            $$result,
            {
              btnClasses: "ml-2",
              color: "green",
              size: "xs"
            },
            {},
            {
              default: () => {
                return `${escape(charsToNumber($currentStepStore) >= $modulesStore.length - 1 ? "Flow inputs" : "Next step")}`;
              }
            }
          )}` : ``}</div>`;
        },
        default: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              size: "xs",
              btnClasses: twMerge($currentStepStore !== void 0 ? "z-[901]" : "", copilotLoading || $currentStepStore !== void 0 && $currentStepStore !== "Input" ? "" : "text-violet-800 dark:text-violet-400"),
              startIcon: copilotLoading || $currentStepStore !== void 0 && $currentStepStore !== "Input" ? void 0 : { icon: Wand_2 },
              color: copilotLoading || $currentStepStore !== void 0 && $currentStepStore !== "Input" ? "red" : "light",
              variant: copilotLoading || $currentStepStore !== void 0 && $currentStepStore !== "Input" ? "contained" : "border"
            },
            {},
            {
              default: () => {
                return `${copilotLoading ? `${validate_component(WindmillIcon, "WindmillIcon").$$render(
                  $$result,
                  {
                    white: true,
                    class: "mr-1 text-white",
                    height: "16px",
                    width: "20px",
                    spin: "veryfast"
                  },
                  {},
                  {}
                )}` : ``} ${escape(copilotLoading ? "Stop" : $currentStepStore !== void 0 && $currentStepStore !== "Input" ? "Exit" : "AI Builder")}`;
              }
            }
          )}`;
        }
      }
    )}` : `${validate_component(Popup, "Popup").$$render(
      $$result,
      {
        floatingConfig: {
          strategy: "absolute",
          placement: "bottom"
        }
      },
      {},
      {
        button: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              size: "xs",
              startIcon: { icon: Wand_2 },
              btnClasses: "text-violet-800 dark:text-violet-400",
              color: "light",
              variant: "border",
              nonCaptureEvent: true
            },
            {},
            {
              default: () => {
                return `AI Builder`;
              }
            }
          )} `;
        },
        default: () => {
          return `<div class="block text-primary"><p class="text-sm">Enable Windmill AI in the <a href="${escape(base, true) + "/workspace_settings?tab=openai"}" target="_blank" class="inline-flex flex-row items-center gap-1">workspace settings ${validate_component(External_link, "ExternalLink").$$render($$result, { size: 16 }, {}, {})}</a></p></div>`;
        }
      }
    )}`}`;
  } while (!$$settled);
  $$unsubscribe_copilotInfo();
  $$unsubscribe_currentStepStore();
  $$unsubscribe_drawerStore();
  $$unsubscribe_modulesStore();
  $$unsubscribe_flowStore();
  return $$rendered;
});
const css = {
  code: ".driver-popover-title{--tw-text-opacity:1;color:rgb(var(--color-text-primary)/var(--tw-text-opacity));font-size:1rem;line-height:1.5rem}.driver-popover-description{--tw-text-opacity:1;color:rgb(var(--color-text-secondary)/var(--tw-text-opacity));font-size:.875rem;line-height:1.25rem}.driver-popover{--tw-bg-opacity:1;background-color:rgb(var(--color-surface)/var(--tw-bg-opacity));max-width:42rem;padding:1.5rem}",
  map: null
};
const FlowBuilderTutorials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let targetTutorial = void 0;
  let flowTutorials = void 0;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<button>${validate_component(ButtonDropdown, "ButtonDropdown").$$render($$result, { hasPadding: false }, {}, {
      items: () => {
        return `${validate_component(TutorialItem, "TutorialItem").$$render($$result, { label: "Simple flow tutorial", index: 0 }, {}, {})} ${validate_component(TutorialItem, "TutorialItem").$$render($$result, { label: "For loops tutorial", index: 1 }, {}, {})} ${validate_component(TutorialItem, "TutorialItem").$$render($$result, { label: "Branch one tutorial", index: 2 }, {}, {})} ${validate_component(TutorialItem, "TutorialItem").$$render($$result, { label: "Branch all tutorial", index: 3 }, {}, {})} ${validate_component(TutorialItem, "TutorialItem").$$render($$result, { label: "Error handler", index: 4 }, {}, {})} <div class="border-t border-surface-hover"></div> ${validate_component(MenuItem, "MenuItem").$$render($$result, {}, {}, {
          default: () => {
            return `<div${add_attribute("class", classNames("text-primary flex flex-row items-center text-left gap-2 cursor-pointer hover:bg-surface-hover !text-xs font-semibold"), 0)} data-svelte-h="svelte-757df">Reset tutorials</div>`;
          }
        })} ${validate_component(MenuItem, "MenuItem").$$render($$result, {}, {}, {
          default: () => {
            return `<div${add_attribute("class", classNames("text-primary flex flex-row items-center text-left gap-2 cursor-pointer hover:bg-surface-hover !text-xs font-semibold"), 0)} data-svelte-h="svelte-ep3r0x">Skip tutorials</div>`;
          }
        })} `;
      },
      buttonReplacement: () => {
        return `${validate_component(Button, "Button").$$render(
          $$result,
          {
            nonCaptureEvent: true,
            size: "xs",
            color: "light",
            variant: "border",
            id: "tutorials-button",
            startIcon: { icon: Book_open }
          },
          {},
          {}
        )}`;
      }
    })}</button> ${validate_component(FlowTutorials, "FlowTutorials").$$render(
      $$result,
      { this: flowTutorials },
      {
        this: ($$value) => {
          flowTutorials = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ConfirmationModal, "ConfirmationModal").$$render(
      $$result,
      {
        open: targetTutorial !== void 0,
        title: "Tutorial error",
        confirmationText: "Open new tab"
      },
      {},
      {
        default: () => {
          return `<div class="flex flex-col w-full space-y-4" data-svelte-h="svelte-6i2k0v"><span>You need to create a new flow before starting the tutorial.</span></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
function snakeCase(e) {
  if (e.toLowerCase() === e) {
    return e;
  }
  return e.match(/([A-Z])/g)?.reduce((str, c) => str.replace(new RegExp(c), "_" + c.toLowerCase()), e)?.substring(e.slice(0, 1).match(/([A-Z])/g) ? 1 : 0) ?? e;
}
function focusCopilot() {
  document.querySelectorAll(".splitpanes__splitter").forEach((el) => {
    el.classList.add("hidden");
  });
  document.querySelectorAll("#flow-graph *").forEach((el) => {
    if (el instanceof HTMLElement) {
      el.style.pointerEvents = "none";
    }
  });
}
function blurCopilot() {
  document.querySelectorAll(".splitpanes__splitter").forEach((el) => {
    el.classList.remove("hidden");
  });
  document.querySelectorAll("#flow-graph *").forEach((el) => {
    if (el instanceof HTMLElement) {
      el.style.pointerEvents = "";
    }
  });
}
const FlowBuilder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $ignoredTutorials, $$unsubscribe_ignoredTutorials;
  let $tutorialsToDo, $$unsubscribe_tutorialsToDo;
  let $copilotCurrentStepStore, $$unsubscribe_copilotCurrentStepStore;
  let $flowStore, $$unsubscribe_flowStore;
  let $shouldUpdatePropertyType, $$unsubscribe_shouldUpdatePropertyType;
  let $flowStateStore, $$unsubscribe_flowStateStore;
  let $copilotInfo, $$unsubscribe_copilotInfo;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $copilotDrawerStore, $$unsubscribe_copilotDrawerStore;
  let $copilotModulesStore, $$unsubscribe_copilotModulesStore;
  let $scheduleStore, $$unsubscribe_scheduleStore;
  let $pathStore, $$unsubscribe_pathStore;
  let $selectedIdStore, $$unsubscribe_selectedIdStore;
  let $userStore, $$unsubscribe_userStore;
  let $scriptEditorDrawer, $$unsubscribe_scriptEditorDrawer;
  let $history, $$unsubscribe_history;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_ignoredTutorials = subscribe(ignoredTutorials, (value) => $ignoredTutorials = value);
  $$unsubscribe_tutorialsToDo = subscribe(tutorialsToDo, (value) => $tutorialsToDo = value);
  $$unsubscribe_copilotInfo = subscribe(copilotInfo, (value) => $copilotInfo = value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  let { initialPath = "" } = $$props;
  let { pathStoreInit = void 0 } = $$props;
  let { newFlow } = $$props;
  let { selectedId } = $$props;
  let { initialArgs = {} } = $$props;
  let { loading = false } = $$props;
  let { flowStore } = $$props;
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => $flowStore = value);
  let { flowStateStore } = $$props;
  $$unsubscribe_flowStateStore = subscribe(flowStateStore, (value) => $flowStateStore = value);
  let { savedFlow = void 0 } = $$props;
  let { diffDrawer = void 0 } = $$props;
  let { customUi = {} } = $$props;
  const dispatch = createEventDispatcher();
  let loadingSave = false;
  let loadingDraft = false;
  async function saveDraft(forceSave = false) {
    if (!newFlow && !savedFlow) {
      return;
    }
    if (savedFlow) {
      const draftOrDeployed = cleanValueProperties(savedFlow.draft || savedFlow);
      const current = cleanValueProperties({ ...$flowStore, path: $pathStore });
      if (!forceSave && orderedJsonStringify(draftOrDeployed) === orderedJsonStringify(current)) {
        sendUserToast("No changes detected, ignoring", false, [
          {
            label: "Save anyway",
            callback: () => {
              saveDraft(true);
            }
          }
        ]);
        return;
      }
    }
    loadingDraft = true;
    try {
      const flow = cleanInputs($flowStore);
      try {
        localStorage.removeItem("flow");
        localStorage.removeItem(`flow-${$pathStore}`);
      } catch (e) {
        console.error("error interacting with local storage", e);
      }
      if (newFlow || savedFlow?.draft_only) {
        if (savedFlow?.draft_only) {
          await FlowService.deleteFlowByPath({
            workspace: $workspaceStore,
            path: initialPath
          });
        }
        await FlowService.createFlow({
          workspace: $workspaceStore,
          requestBody: {
            path: $pathStore,
            summary: flow.summary,
            description: flow.description ?? "",
            value: flow.value,
            schema: flow.schema,
            tag: flow.tag,
            draft_only: true,
            ws_error_handler_muted: flow.ws_error_handler_muted,
            visible_to_runner_only: flow.visible_to_runner_only
          }
        });
      }
      await DraftService.createDraft({
        workspace: $workspaceStore,
        requestBody: {
          path: newFlow || savedFlow?.draft_only ? $pathStore : initialPath,
          typ: "flow",
          value: { ...flow, path: $pathStore }
        }
      });
      savedFlow = {
        ...newFlow || savedFlow?.draft_only ? {
          ...structuredClone($flowStore),
          path: $pathStore,
          draft_only: true
        } : savedFlow,
        draft: {
          ...structuredClone($flowStore),
          path: $pathStore
        }
      };
      if (newFlow) {
        dispatch("saveInitial", $pathStore);
      } else if (savedFlow?.draft_only && $pathStore !== initialPath) {
        initialPath = $pathStore;
        dispatch("saveDraftOnlyAtNewPath", {
          path: $pathStore,
          selectedId: getSelectedId()
        });
      }
      sendUserToast("Saved as draft");
    } catch (error) {
      sendUserToast(`Error while saving the flow as a draft: ${error.body || error.message}`, true);
    }
    loadingDraft = false;
  }
  function computeUnlockedSteps(flow) {
    return Object.fromEntries(getAllModules(flow.value.modules, flow.value.failure_module).filter((m) => m.value.type == "script" && m.value.hash == null).map((m) => [m.id, m.value.path]));
  }
  let timeout = void 0;
  function saveSessionDraft() {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(
      () => {
        try {
          localStorage.setItem(
            initialPath && initialPath != "" ? `flow-${initialPath}` : "flow",
            encodeState({
              flow: $flowStore,
              path: $pathStore,
              selectedId: $selectedIdStore
            })
          );
        } catch (err) {
          console.error(err);
        }
      },
      500
    );
  }
  const selectedIdStore = writable(selectedId ?? "settings-metadata");
  $$unsubscribe_selectedIdStore = subscribe(selectedIdStore, (value) => $selectedIdStore = value);
  function getSelectedId() {
    return $selectedIdStore;
  }
  const scheduleStore = writable({
    summary: void 0,
    args: {},
    cron: "",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    enabled: false
  });
  $$unsubscribe_scheduleStore = subscribe(scheduleStore, (value) => $scheduleStore = value);
  const previewArgsStore = writable(initialArgs);
  const scriptEditorDrawer = writable(void 0);
  $$unsubscribe_scriptEditorDrawer = subscribe(scriptEditorDrawer, (value) => $scriptEditorDrawer = value);
  const moving = writable(void 0);
  const history = initHistory($flowStore);
  $$unsubscribe_history = subscribe(history, (value) => $history = value);
  const pathStore = writable(pathStoreInit ?? initialPath);
  $$unsubscribe_pathStore = subscribe(pathStore, (value) => $pathStore = value);
  const testStepStore = writable({});
  function select(selectedId2) {
    selectedIdStore.set(selectedId2);
  }
  setContext("FlowEditorContext", {
    selectedId: selectedIdStore,
    schedule: scheduleStore,
    previewArgs: previewArgsStore,
    scriptEditorDrawer,
    moving,
    history,
    flowStateStore,
    flowStore,
    pathStore,
    testStepStore,
    saveDraft,
    initialPath,
    flowInputsStore: writable({})
  });
  async function loadSchedule() {
    loadFlowSchedule(initialPath, $workspaceStore).then((schedule) => {
      scheduleStore.set(schedule);
    }).catch(() => {
      scheduleStore.set({
        summary: void 0,
        cron: "0 */5 * * *",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        args: {},
        enabled: false
      });
    });
  }
  const dropdownItems = [];
  if (savedFlow?.draft_only === false || savedFlow?.draft_only === void 0) {
    dropdownItems.push({
      label: "Exit & see details",
      onClick: () => dispatch("details", $pathStore)
    });
  }
  if (!newFlow) {
    dropdownItems.push({
      label: "Fork",
      onClick: () => window.open(`/flows/add?template=${initialPath}`)
    });
  }
  let flowCopilotContext = {
    drawerStore: writable(void 0),
    modulesStore: writable([]),
    currentStepStore: writable(void 0),
    genFlow: void 0,
    shouldUpdatePropertyType: writable({}),
    exprsToSet: writable({}),
    generatedExprs: writable({}),
    stepInputsLoading: writable(false)
  };
  setContext("FlowCopilotContext", flowCopilotContext);
  const { drawerStore: copilotDrawerStore, modulesStore: copilotModulesStore, currentStepStore: copilotCurrentStepStore, shouldUpdatePropertyType } = flowCopilotContext;
  $$unsubscribe_copilotDrawerStore = subscribe(copilotDrawerStore, (value) => $copilotDrawerStore = value);
  $$unsubscribe_copilotModulesStore = subscribe(copilotModulesStore, (value) => $copilotModulesStore = value);
  $$unsubscribe_copilotCurrentStepStore = subscribe(copilotCurrentStepStore, (value) => $copilotCurrentStepStore = value);
  $$unsubscribe_shouldUpdatePropertyType = subscribe(shouldUpdatePropertyType, (value) => $shouldUpdatePropertyType = value);
  let doneTs = 0;
  async function getHubCompletions(text, idx, type) {
    try {
      const ts = Date.now();
      const scripts = (await ScriptService.queryHubScripts({ text: `${text}`, limit: 3, kind: type })).map((s) => ({
        ...s,
        path: `hub/${s.version_id}/${s.app}/${s.summary.toLowerCase().replaceAll(/\s+/g, "_")}`
      }));
      if (ts < doneTs) return;
      doneTs = ts;
      set_store_value(copilotModulesStore, $copilotModulesStore[idx].hubCompletions = scripts, $copilotModulesStore);
    } catch (err) {
      if (err.name !== "CancelError") throw err;
    }
  }
  let abortController = void 0;
  let copilotLoading = false;
  let flowCopilotMode = "sequence";
  let copilotStatus = "";
  let copilotFlowInputs = {};
  let copilotFlowRequiredInputs = [];
  let openCopilotInputsModal = false;
  function setInitCopilotModules(mode) {
    set_store_value(
      copilotModulesStore,
      $copilotModulesStore = [
        {
          id: "a",
          type: mode === "trigger" ? "trigger" : "script",
          description: "",
          code: "",
          hubCompletions: [],
          selectedCompletion: void 0,
          source: void 0,
          lang: void 0
        },
        {
          id: "b",
          type: "script",
          description: "",
          code: "",
          hubCompletions: [],
          selectedCompletion: void 0,
          source: void 0,
          lang: void 0
        }
      ],
      $copilotModulesStore
    );
  }
  function applyCopilotFlowInputs() {
    const properties = {
      ...$flowStore.schema?.properties,
      ...copilotFlowInputs
    };
    const required = [...$flowStore.schema?.required ?? [], ...copilotFlowRequiredInputs];
    set_store_value(
      flowStore,
      $flowStore.schema = {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        properties,
        required,
        type: "object"
      },
      $flowStore
    );
  }
  async function finishStepGen() {
    copilotFlowInputs = {};
    copilotFlowRequiredInputs = [];
    setInitCopilotModules(flowCopilotMode);
    copilotStatus = "Done! Just check the step's inputs and you're good to go!";
    await sleep(3e3);
    copilotStatus = "";
  }
  async function genFlow(idx, flowModules, stepOnly = false) {
    try {
      push(history, $flowStore);
      let module = stepOnly ? $copilotModulesStore[0] : $copilotModulesStore[idx];
      copilotLoading = true;
      copilotStatus = "Generating code for step '" + module.id + "'...";
      set_store_value(copilotCurrentStepStore, $copilotCurrentStepStore = module.id, $copilotCurrentStepStore);
      focusCopilot();
      if (!stepOnly && flowModules.length > idx) {
        select("");
        await tick();
        flowModules.splice(idx, flowModules.length - idx);
        flowStore.set($flowStore);
        focusCopilot();
      }
      if (idx === 0 && !stepOnly) {
        set_store_value(
          flowStore,
          $flowStore.schema = {
            $schema: "https://json-schema.org/draft/2020-12/schema",
            properties: {},
            required: [],
            type: "object"
          },
          $flowStore
        );
      }
      if (module.type === "trigger") {
        if (!$scheduleStore.cron) {
          set_store_value(scheduleStore, $scheduleStore.cron = "0 */15 * * *", $scheduleStore);
        }
        set_store_value(scheduleStore, $scheduleStore.enabled = true, $scheduleStore);
      }
      const flowModule = {
        id: module.id,
        stop_after_if: module.type === "trigger" ? {
          expr: "result == undefined || Array.isArray(result) && result.length == 0",
          skip_if_stopped: true
        } : void 0,
        value: {
          input_transforms: {},
          content: "",
          language: module.lang ?? "bun",
          type: "rawscript"
        },
        summary: module.description
      };
      let isHubStep = false;
      if (module.source === "hub" && module.selectedCompletion) {
        isHubStep = true;
        const [hubScriptModule, hubScriptState] = await pickScript(module.selectedCompletion.path, `${module.selectedCompletion.summary} (${module.selectedCompletion.app})`, module.id, void 0);
        flowModule.value = hubScriptModule.value;
        flowModule.summary = hubScriptModule.summary;
        set_store_value(flowStateStore, $flowStateStore[module.id] = hubScriptState, $flowStateStore);
      } else {
        set_store_value(flowStateStore, $flowStateStore[module.id] = emptyFlowModuleState(), $flowStateStore);
      }
      if (stepOnly) {
        flowModules.splice(idx, 0, flowModule);
      } else if (idx === 1 && $copilotModulesStore[idx - 1].type === "trigger") {
        const loopModule = {
          id: module.id + "_loop",
          value: {
            type: "forloopflow",
            iterator: { type: "javascript", expr: "results.a" },
            skip_failures: true,
            modules: [flowModule]
          }
        };
        const loopState = await loadFlowModuleState(loopModule);
        set_store_value(flowStateStore, $flowStateStore[loopModule.id] = loopState, $flowStateStore);
        flowModules.push(loopModule);
      } else {
        flowModules.push(flowModule);
      }
      $copilotDrawerStore?.closeDrawer();
      await tick();
      select(module.id);
      await tick();
      await tick();
      focusCopilot();
      let isFirstInLoop = false;
      const parents = dfs(module.id, $flowStore).slice(1);
      if (parents[0]?.value.type === "forloopflow" && parents[0].value.modules[0].id === module.id) {
        isFirstInLoop = true;
      }
      const prevNodeId = getPreviousIds(module.id, $flowStore, false)[0];
      const pastModule = dfs(prevNodeId, $flowStore, false)[0];
      if (!module.source) {
        throw new Error("Invalid copilot module source");
      }
      if (module.source === "custom") {
        const deltaStore = writable("");
        const unsubscribe = deltaStore.subscribe(async (delta) => {
          module.editor?.append(delta);
        });
        abortController = new AbortController();
        await stepCopilot(
          module,
          deltaStore,
          $workspaceStore,
          pastModule?.value.type === "rawscript" || pastModule?.value.type === "script" ? pastModule : void 0,
          isFirstInLoop,
          abortController
        );
        unsubscribe();
      }
      copilotStatus = "Generating inputs for step '" + module.id + "'...";
      await sleep(500);
      try {
        if ((flowModule.value.type === "rawscript" || flowModule.value.type === "script") && (pastModule === void 0 || pastModule.value.type === "rawscript" || pastModule.value.type === "script")) {
          const stepSchema = JSON.parse(JSON.stringify($flowStateStore[module.id].schema));
          if (isHubStep && pastModule !== void 0 && $copilotInfo.exists_openai_resource_path) {
            abortController = new AbortController();
            const { inputs, allExprs } = await glueCopilot(flowModule.value.input_transforms, $workspaceStore, pastModule, isFirstInLoop, abortController);
            copilotFlowInputs = {};
            copilotFlowRequiredInputs = [];
            Object.entries(allExprs).forEach(([key, expr]) => {
              if (expr.includes("flow_input.") && !expr.includes("flow_input.iter.")) {
                const flowInputKey = expr.match(/flow_input\.([A-Za-z0-9_]+)/)?.[1];
                if (flowInputKey !== void 0 && (!$flowStore.schema || !(flowInputKey in ($flowStore.schema.properties ?? {})))) {
                  if (key in stepSchema.properties) {
                    copilotFlowInputs[flowInputKey] = stepSchema.properties[key];
                    if (stepSchema.required.includes(key)) {
                      copilotFlowRequiredInputs.push(flowInputKey);
                    }
                  } else {
                    const [firstKey, ...rest] = key.split(".");
                    const restKey = rest.join(".");
                    const firstKeyProperties = stepSchema.properties[firstKey]?.properties;
                    if (firstKeyProperties !== void 0 && restKey in firstKeyProperties) {
                      copilotFlowInputs[flowInputKey] = firstKeyProperties[restKey];
                      if (firstKeyProperties[restKey].required?.includes(flowInputKey)) {
                        copilotFlowRequiredInputs.push(flowInputKey);
                      }
                    }
                  }
                }
              }
            });
            if (!stepOnly) {
              applyCopilotFlowInputs();
            }
            Object.entries(inputs).forEach(([key, expr]) => {
              flowModule.value.input_transforms[key] = { type: "javascript", expr };
              set_store_value(shouldUpdatePropertyType, $shouldUpdatePropertyType[key] = "javascript", $shouldUpdatePropertyType);
            });
          } else {
            if (isHubStep && pastModule !== void 0 && !$copilotInfo.exists_openai_resource_path) {
              sendUserToast("For better input generation, enable Windmill AI in the workspace settings", true);
            }
            copilotFlowInputs = {};
            copilotFlowRequiredInputs = [];
            Object.keys(flowModule.value.input_transforms).forEach((key) => {
              if (key !== "prev_output") {
                const schema = $flowStateStore[module.id].schema;
                const schemaProperty = Object.entries(schema.properties).find((x) => x[0] === key)?.[1];
                const snakeKey = snakeCase(key);
                if (schemaProperty && (!$flowStore.schema || !(snakeKey in $flowStore.schema.properties))) {
                  copilotFlowInputs[snakeKey] = schemaProperty;
                  if (schema.required.includes(snakeKey)) {
                    copilotFlowRequiredInputs.push(snakeKey);
                  }
                }
              }
            });
            if (!stepOnly) {
              applyCopilotFlowInputs();
            }
            for (const key of Object.keys(flowModule.value.input_transforms)) {
              const snakeKey = snakeCase(key);
              flowModule.value.input_transforms[key] = {
                type: "javascript",
                expr: key === "prev_output" ? isFirstInLoop ? "flow_input.iter.value" : pastModule ? "results." + pastModule.id : "flow_input." + snakeKey : "flow_input." + snakeKey
              };
              set_store_value(shouldUpdatePropertyType, $shouldUpdatePropertyType[key] = "javascript", $shouldUpdatePropertyType);
            }
          }
          flowStore.set($flowStore);
        } else {
          if (pastModule !== void 0 && pastModule.value.type !== "rawscript" && pastModule.value.type !== "script") {
            sendUserToast(`Linking to previous step ${pastModule.id} of type ${pastModule.value.type} is not yet supported`, true);
          } else {
            sendUserToast("Something went wrong, could not generate step inputs", true);
          }
        }
      } catch (err) {
        console.error(err);
      }
      if (stepOnly) {
        set_store_value(copilotCurrentStepStore, $copilotCurrentStepStore = void 0, $copilotCurrentStepStore);
        copilotLoading = false;
        copilotStatus = "";
        if (Object.keys(copilotFlowInputs).length > 0) {
          openCopilotInputsModal = true;
        } else {
          finishStepGen();
        }
      } else {
        copilotStatus = "Waiting for the user to validate code and inputs of step '" + module.id + "'";
      }
    } catch (err) {
      if (stepOnly) {
        copilotStatus = "";
        set_store_value(copilotCurrentStepStore, $copilotCurrentStepStore = void 0, $copilotCurrentStepStore);
        setInitCopilotModules(flowCopilotMode);
      }
      if (err?.message) {
        sendUserToast("Failed to generate code: " + err.message, true);
      } else {
        sendUserToast("Failed to generate code", true);
        console.error(err);
      }
    } finally {
      copilotLoading = false;
    }
  }
  flowCopilotContext.genFlow = genFlow;
  async function finishCopilotFlowBuilder() {
    copilotLoading = true;
    select("Input");
    set_store_value(copilotCurrentStepStore, $copilotCurrentStepStore = "Input", $copilotCurrentStepStore);
    copilotStatus = "Done! Just check the flow's inputs and you're good to go!";
    set_store_value(copilotCurrentStepStore, $copilotCurrentStepStore = void 0, $copilotCurrentStepStore);
    copilotLoading = false;
    await sleep(3e3);
    copilotStatus = "";
  }
  let flowTutorials = void 0;
  let jsonViewerDrawer = void 0;
  let flowHistory = void 0;
  function triggerTutorial() {
    const urlParams = new URLSearchParams(window.location.search);
    const tutorial = urlParams.get("tutorial");
    if (tutorial) {
      flowTutorials?.runTutorialById(tutorial);
    } else if ($tutorialsToDo.includes(0) && !$ignoredTutorials.includes(0)) {
      flowTutorials?.runTutorialById("action");
    }
  }
  let moreItems = [];
  function onCustomUiChange(customUi2) {
    moreItems = [
      ...customUi2?.topBar?.history != false ? [
        {
          displayName: "Deployment History",
          icon: History,
          action: () => {
            flowHistory?.open();
          },
          disabled: newFlow
        }
      ] : [],
      ...customUi2?.topBar?.history != false ? [
        {
          displayName: "Export",
          icon: File_json,
          action: () => jsonViewerDrawer?.openDrawer()
        }
      ] : []
    ];
  }
  let deploymentMsg = "";
  let msgInput = void 0;
  if ($$props.initialPath === void 0 && $$bindings.initialPath && initialPath !== void 0) $$bindings.initialPath(initialPath);
  if ($$props.pathStoreInit === void 0 && $$bindings.pathStoreInit && pathStoreInit !== void 0) $$bindings.pathStoreInit(pathStoreInit);
  if ($$props.newFlow === void 0 && $$bindings.newFlow && newFlow !== void 0) $$bindings.newFlow(newFlow);
  if ($$props.selectedId === void 0 && $$bindings.selectedId && selectedId !== void 0) $$bindings.selectedId(selectedId);
  if ($$props.initialArgs === void 0 && $$bindings.initialArgs && initialArgs !== void 0) $$bindings.initialArgs(initialArgs);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
  if ($$props.flowStore === void 0 && $$bindings.flowStore && flowStore !== void 0) $$bindings.flowStore(flowStore);
  if ($$props.flowStateStore === void 0 && $$bindings.flowStateStore && flowStateStore !== void 0) $$bindings.flowStateStore(flowStateStore);
  if ($$props.savedFlow === void 0 && $$bindings.savedFlow && savedFlow !== void 0) $$bindings.savedFlow(savedFlow);
  if ($$props.diffDrawer === void 0 && $$bindings.diffDrawer && diffDrawer !== void 0) $$bindings.diffDrawer(diffDrawer);
  if ($$props.customUi === void 0 && $$bindings.customUi && customUi !== void 0) $$bindings.customUi(customUi);
  if ($$props.computeUnlockedSteps === void 0 && $$bindings.computeUnlockedSteps && computeUnlockedSteps !== void 0) $$bindings.computeUnlockedSteps(computeUnlockedSteps);
  if ($$props.getSelectedId === void 0 && $$bindings.getSelectedId && getSelectedId !== void 0) $$bindings.getSelectedId(getSelectedId);
  if ($$props.triggerTutorial === void 0 && $$bindings.triggerTutorial && triggerTutorial !== void 0) $$bindings.triggerTutorial(triggerTutorial);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      setContext("customUi", customUi);
    }
    {
      {
        if ($flowStore || $selectedIdStore) {
          saveSessionDraft();
        }
      }
    }
    initialPath && set_store_value(pathStore, $pathStore = initialPath, $pathStore);
    selectedId && select(selectedId);
    initialPath && initialPath != "" && $workspaceStore && loadSchedule();
    {
      setInitCopilotModules(flowCopilotMode);
    }
    $copilotCurrentStepStore === void 0 && blurCopilot();
    {
      onCustomUiChange(customUi);
    }
    $$rendered = ` ${slots.default ? slots.default({}) : ``} ${!$userStore?.operator ? `${validate_component(FlowCopilotDrawer, "FlowCopilotDrawer").$$render(
      $$result,
      {
        getHubCompletions,
        genFlow,
        flowCopilotMode
      },
      {
        flowCopilotMode: ($$value) => {
          flowCopilotMode = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${$pathStore ? `${validate_component(FlowHistory, "FlowHistory").$$render(
      $$result,
      { path: $pathStore, this: flowHistory },
      {
        this: ($$value) => {
          flowHistory = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${validate_component(FlowImportExportMenu, "FlowImportExportMenu").$$render(
      $$result,
      { drawer: jsonViewerDrawer },
      {
        drawer: ($$value) => {
          jsonViewerDrawer = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(FlowCopilotInputsModal, "FlowCopilotInputsModal").$$render(
      $$result,
      {
        inputs: Object.keys(copilotFlowInputs),
        open: openCopilotInputsModal
      },
      {
        open: ($$value) => {
          openCopilotInputsModal = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ScriptEditorDrawer, "ScriptEditorDrawer").$$render(
      $$result,
      { this: $scriptEditorDrawer },
      {
        this: ($$value) => {
          $scriptEditorDrawer = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="flex flex-col flex-1 h-screen"> <div class="justify-between flex flex-row items-center pl-2.5 pr-6 space-x-4 scrollbar-hidden overflow-x-auto max-h-12 h-full relative">${$copilotCurrentStepStore !== void 0 ? `<div class="absolute inset-0 bg-gray-500 bg-opacity-75 z-[900] !m-0"></div>` : ``} <div class="flex w-full max-w-md gap-4 items-center">${validate_component(Summary, "Summary").$$render(
      $$result,
      { value: $flowStore.summary },
      {
        value: ($$value) => {
          $flowStore.summary = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(UndoRedo, "UndoRedo").$$render(
      $$result,
      {
        undoProps: { disabled: $history.index === 0 },
        redoProps: {
          disabled: $history.index === $history.history.length - 1
        }
      },
      {},
      {}
    )}</div> <div class="gap-4 flex-row hidden md:flex w-full max-w-md">${$scheduleStore.enabled ? `${validate_component(Button, "Button").$$render(
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
    )}` : ``} ${customUi?.topBar?.path != false ? `<div class="flex justify-start w-full"><div><button>${validate_component(Badge, "Badge").$$render(
      $$result,
      {
        color: "gray",
        class: "center-center !bg-gray-300 !text-tertiary dark:!bg-gray-700 dark:!text-gray-300 !h-[28px]  !w-[70px] rounded-r-none"
      },
      {},
      {
        default: () => {
          return `${validate_component(Pen, "Pen").$$render($$result, { size: 12, class: "mr-2" }, {}, {})} Path`;
        }
      }
    )}</button></div> <input type="text" readonly${add_attribute(
      "value",
      $pathStore && $pathStore != "" ? $pathStore : "Choose a path",
      0
    )} class="font-mono !text-xs !min-w-[96px] !max-w-[300px] !w-full !h-[28px] !my-0 !py-0 !border-l-0 !rounded-l-none"></div>` : ``}</div> <div class="flex flex-row gap-2 items-center">${$enterpriseLicense && !newFlow ? `${validate_component(Awareness, "Awareness").$$render($$result, {}, {}, {})}` : ``} <div>${moreItems?.length > 0 ? `${validate_component(ButtonDropdown, "ButtonDropdown").$$render($$result, { hasPadding: false }, {}, {
      items: () => {
        return `${each(moreItems, (item) => {
          return `${validate_component(MenuItem$1, "MenuItem").$$render(
            $$result,
            {
              disabled: item.disabled,
              class: item.disabled ? "opacity-50" : ""
            },
            {},
            {
              default: () => {
                return `<div${add_attribute("class", twMerge("text-primary flex flex-row items-center text-left px-4 py-2 gap-2 cursor-pointer hover:bg-surface-hover !text-xs font-semibold"), 0)}>${validate_component(item.icon || missing_component, "svelte:component").$$render($$result, { size: 14 }, {}, {})} ${escape(item.displayName)}</div> `;
              }
            }
          )}`;
        })} `;
      },
      buttonReplacement: () => {
        return `${validate_component(Button, "Button").$$render(
          $$result,
          {
            nonCaptureEvent: true,
            size: "xs",
            color: "light"
          },
          {},
          {
            default: () => {
              return `<div class="flex flex-row items-center">${validate_component(More_vertical, "MoreVertical").$$render($$result, { size: 14 }, {}, {})}</div>`;
            }
          }
        )}`;
      }
    })}` : ``}</div> ${customUi?.topBar?.tutorials != false ? `${validate_component(FlowBuilderTutorials, "FlowBuilderTutorials").$$render($$result, {}, {}, {})}` : ``} ${customUi?.topBar?.diff != false ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "light",
        variant: "border",
        size: "xs",
        disabled: !savedFlow
      },
      {},
      {
        default: () => {
          return `<div class="flex flex-row gap-2 items-center">${validate_component(Diff, "DiffIcon").$$render($$result, { size: 14 }, {}, {})}
								Diff</div>`;
        }
      }
    )}` : ``} ${customUi?.topBar?.aiBuilder != false ? `${validate_component(FlowCopilotStatus, "FlowCopilotStatus").$$render(
      $$result,
      {
        copilotLoading,
        genFlow,
        finishCopilotFlowBuilder,
        abortController,
        copilotStatus
      },
      {
        copilotStatus: ($$value) => {
          copilotStatus = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${validate_component(FlowPreviewButtons, "FlowPreviewButtons").$$render($$result, {}, {}, {})} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        loading: loadingDraft,
        size: "xs",
        startIcon: { icon: Save },
        disabled: !newFlow && !savedFlow || loading,
        shortCut: { key: "S" }
      },
      {},
      {
        default: () => {
          return `Draft`;
        }
      }
    )} ${validate_component(CustomPopover, "CustomPopover").$$render($$result, { appearTimeout: 0, focusEl: msgInput }, {}, {
      overlay: () => {
        return `<div class="flex flex-row gap-2 w-80"><input type="text" placeholder="Deployment message"${add_attribute("value", deploymentMsg, 0)}${add_attribute("this", msgInput, 0)}> ${validate_component(Button, "Button").$$render(
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
            disabled: loading,
            loading: loadingSave,
            size: "xs",
            startIcon: { icon: Save },
            dropdownItems: !newFlow ? dropdownItems : void 0
          },
          {},
          {
            default: () => {
              return `Deploy`;
            }
          }
        )}`;
      }
    })}</div></div>  ${$flowStateStore ? `${validate_component(FlowEditor, "FlowEditor").$$render(
      $$result,
      {
        enableAi: customUi?.stepInputs?.ai != false,
        disableSettings: customUi?.settingsPanel === false,
        loading
      },
      {},
      {}
    )}` : `${validate_component(CenteredPage, "CenteredPage").$$render($$result, {}, {}, {
      default: () => {
        return `Loading...`;
      }
    })}`}</div>` : `Flow Builder not available to operators`} ${validate_component(FlowTutorials, "FlowTutorials").$$render(
      $$result,
      { this: flowTutorials },
      {
        this: ($$value) => {
          flowTutorials = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_ignoredTutorials();
  $$unsubscribe_tutorialsToDo();
  $$unsubscribe_copilotCurrentStepStore();
  $$unsubscribe_flowStore();
  $$unsubscribe_shouldUpdatePropertyType();
  $$unsubscribe_flowStateStore();
  $$unsubscribe_copilotInfo();
  $$unsubscribe_workspaceStore();
  $$unsubscribe_copilotDrawerStore();
  $$unsubscribe_copilotModulesStore();
  $$unsubscribe_scheduleStore();
  $$unsubscribe_pathStore();
  $$unsubscribe_selectedIdStore();
  $$unsubscribe_userStore();
  $$unsubscribe_scriptEditorDrawer();
  $$unsubscribe_history();
  $$unsubscribe_enterpriseLicense();
  return $$rendered;
});
export {
  FlowBuilder as F
};
