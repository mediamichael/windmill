import { o as onDestroy, c as create_ssr_component, s as subscribe, d as createEventDispatcher, v as validate_component, b as add_attribute, e as escape, h as getContext, u as setContext, f as each, a as set_store_value } from "./ssr.js";
import { B as Badge } from "./Badge.js";
import { B as Button, D as Chevron_down, P as Portal, s as sendUserToast, a6 as setInputCat, ac as isCodeInjection, b as emptyString, e as emptySchema, a8 as allTrue, g as classNames } from "./toast.js";
import { L as LanguageIcon, b as getStepPropPicker, R as Repeat, c as Gauge, S as Square, P as Phone_incoming, e as Bed, V as Voicemail, f as getFailureStepPropPicker, C as Code, Z as Zap, s as schemaToObject, F as FlowGraph } from "./util.js";
import { M as MetadataGen } from "./MetadataGen.js";
import { I as IconedPath, H as HighlightCode, c as FlowModuleScript, a as FlowPathViewer } from "./FlowGraphViewerStep.js";
import { c as ScriptService, G as GroupService, J as JobService, b as WorkerService, V as VariableService, F as FlowService, S as ScheduleService } from "./services.gen.js";
import { w as workspaceStore, s as stepInputCompletionEnabled, f as copilotInfo, e as enterpriseLicense, p as workerTags, d as defaultScripts, t as tutorialsToDo } from "./stores2.js";
import { c as charsToNumber, n as numberToChars, U as Unlock } from "./history.js";
import { L as Lock } from "./components.js";
import { R as Refresh_cw } from "./refresh-cw.js";
import { T as Toggle } from "./Toggle.js";
import { S as SimpleEditor } from "./SimpleEditor.js";
import { T as Tooltip } from "./Tooltip.js";
import "./index2.js";
import "./common.js";
import YAML from "yaml";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import "minimatch";
import { C as ClearableInput, a as EditableSchemaDrawer, A as AddProperty, E as EditableSchemaForm } from "./EditableSchemaDrawer.js";
/* empty css                                     */
import { k as keepByKey, O as ObjectViewer, N as NEVER_TESTED_THIS_FAR, b as FieldHeader } from "./LightweightSchemaForm.js";
import { w as writable } from "./index.js";
import { twMerge } from "tailwind-merge";
import { S as Splitpanes, P as Pane } from "./Pane.js";
import { S as Section } from "./Section.js";
import { c as ArgInput, J as JsonEditor, S as SchemaForm, I as ItemPicker, N as NoItemFound } from "./SchemaForm.js";
import { s as sliceModules, b as codeToStaticTemplate, g as getDefaultExpr, r as runFlowPreview, d as evalValue, l as loadSchemaFromModule, i as initFlowStepWarnings, e as emptyFlowModuleState } from "./flowStateUtils.js";
import { T as ToggleButtonGroup, a as ToggleButton } from "./ToggleButtonGroup.js";
import { F as Function_square, P as Plug, T as TemplateEditor, a as FlowScriptPicker, b as Tutorial, t as triggerAddFlowStep, s as selectFlowStepKind, c as clickButtonBySelector, u as updateFlowModuleById, d as isFlowTainted, e as setInputBySelector, i as ignoredTutorials } from "./TemplateEditor.js";
import { g as getResourceTypes } from "./resourceTypesStore.js";
import { y as yamlStringifyExceptKeys, g as getNonStreamingCompletion } from "./lib.js";
import { createPopper } from "@popperjs/core";
import { d as dfs, F as FlowStatusViewer } from "./FlowStatusViewer.js";
import { M as Modal } from "./Modal.js";
import { L as Loader_2 } from "./loader-2.js";
import { C as Check } from "./check.js";
import { W as Wand_2 } from "./wand-2.js";
import { A as Alert } from "./Alert.js";
import { S as SecondsInput } from "./TestConnection.js";
import { T as Tabs, a as Tab } from "./Tabs.js";
import { L as Label } from "./Label.js";
import { D as Drawer, a as DrawerContent } from "./DrawerContent.js";
import { T as TabContent } from "./TabContent.js";
import { H as Help_circle } from "./help-circle.js";
import { F as FlowProgressBar } from "./FlowProgressBar.js";
import { X } from "./x.js";
import { P as Play } from "./play.js";
import { C as Corner_down_left, a as ConfirmationModal } from "./ConfirmationModal.js";
import { t as tick, a as Arrow_right } from "./Head.js";
import { E as Editor } from "./Editor.js";
import { S as ScriptFix, E as EditorBar, D as DefaultScripts, T as ToggleHubWorkspace, W as WorkspaceScriptPicker } from "./DefaultScripts.js";
import { g as getScriptByPath, s as scriptLangToEditorLang, p as processLangs, d as defaultScriptLanguages } from "./scripts.js";
import { T as TestJobLoader, L as LogViewer, D as DisplayResult } from "./TimelineBar.js";
import "./infer.js";
import { P as Popover, E as External_link } from "./Popover.js";
import { D as Database } from "./IconedResourceType.js";
import { P as Pen } from "./pen.js";
import { G as Git_fork } from "./git-fork.js";
import { S as Save, V as VariableEditor, P as Path } from "./VariableEditor.js";
import { F as FlowRetries, S as ScheduleEditor, W as WorkerTagPicker } from "./ScheduleEditor.js";
import { deepEqual } from "fast-equals";
import { b as base } from "./base.js";
import { P as Popup } from "./Popup.js";
import { P as Plus } from "./plus.js";
import { D as DiffEditor } from "./DiffEditor.js";
import { i as isCloudHosted } from "./cloud.js";
import "./index3.js";
/* empty css                                                  */
/* empty css                                         */
import "monaco-editor/esm/vs/editor/editor.api.js";
import "monaco-editor";
import "monaco-editor/esm/vs/basic-languages/sql/sql.contribution.js";
import "monaco-editor/esm/vs/basic-languages/yaml/yaml.contribution.js";
import "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution.js";
import "monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution.js";
import "monaco-editor/esm/vs/language/typescript/monaco.contribution.js";
import "monaco-editor/esm/vs/language/json/monaco.contribution.js";
import "monaco-editor/esm/vs/basic-languages/css/css.contribution.js";
import "monaco-editor/esm/vs/language/css/monaco.contribution.js";
import "monaco-languageclient";
import "vscode/services";
import { P as PickHubScript } from "./PickHubScript.js";
import { S as Skeleton } from "./Skeleton.js";
import { S as SearchItems } from "./SearchItems.js";
import { S as SplitPanesWrapper } from "./SplitPanesWrapper.js";
import { C as CronInput } from "./CronInput.js";
import { C as Calendar } from "./calendar.js";
import { E as ErrorHandlerToggleButton } from "./ErrorHandlerToggleButton.js";
import { C as Clipboard } from "./clipboard.js";
import { A as Alert_triangle } from "./alert-triangle.js";
import "@redocly/json-to-json-schema";
import { S as SavedInputs } from "./SavedInputs.js";
import { S as Sliders_horizontal } from "./sliders-horizontal.js";
import { D as Dollar_sign } from "./Required.js";
import { B as Bug } from "./bug.js";
import { u as updateProgress } from "./tutorialUtils.js";
import { S as SchemaViewer } from "./SchemaViewer.js";
function createPopperActions(initOptions) {
  let popperInstance = null;
  let referenceNode;
  let contentNode;
  let options = initOptions;
  const initPopper = () => {
    if (referenceNode !== void 0 && contentNode !== void 0) {
      popperInstance = createPopper(referenceNode, contentNode, options);
    }
  };
  const deinitPopper = () => {
    if (popperInstance !== null) {
      popperInstance.destroy();
      popperInstance = null;
    }
  };
  const referenceAction = (node) => {
    if ("subscribe" in node) {
      setupVirtualElementObserver(node);
      return {};
    } else {
      referenceNode = node;
      initPopper();
      return {
        destroy() {
          deinitPopper();
        }
      };
    }
  };
  const setupVirtualElementObserver = (node) => {
    const unsubscribe = node.subscribe(($node) => {
      if (referenceNode === void 0) {
        referenceNode = $node;
        initPopper();
      } else {
        Object.assign(referenceNode, $node);
        popperInstance?.update();
      }
    });
    onDestroy(unsubscribe);
  };
  const contentAction = (node, contentOptions) => {
    contentNode = node;
    options = { ...initOptions, ...contentOptions };
    initPopper();
    return {
      update(newContentOptions) {
        options = { ...initOptions, ...newContentOptions };
        popperInstance?.setOptions(options);
      },
      destroy() {
        deinitPopper();
      }
    };
  };
  return [referenceAction, contentAction, () => popperInstance];
}
function nextId(flowState, fullFlow) {
  const allIds = dfs(fullFlow.value.modules, (fm) => fm.id);
  const max = allIds.concat(Object.keys(flowState)).reduce((acc, key) => {
    if (key === "failure" || key.includes("branch") || key.includes("loop")) {
      return acc;
    } else {
      const num = charsToNumber(key);
      return Math.max(acc, num + 1);
    }
  }, 0);
  return numberToChars(max);
}
const FlowCardHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { flowModule = void 0 } = $$props;
  let { title = void 0 } = $$props;
  let latestHash = void 0;
  async function loadLatestHash(value) {
    let script = await ScriptService.getScriptByPath({
      workspace: $workspaceStore,
      path: value.path
    });
    latestHash = script.hash;
  }
  createEventDispatcher();
  if ($$props.flowModule === void 0 && $$bindings.flowModule && flowModule !== void 0) $$bindings.flowModule(flowModule);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $workspaceStore && flowModule?.value.type === "script" && flowModule.value.path && !flowModule.value.path.startsWith("hub/") && loadLatestHash(flowModule.value);
    $$rendered = `<div class="overflow-x-auto scrollbar-hidden flex items-center justify-between px-4 py-1 flex-nowrap">${flowModule ? `<span class="text-sm w-full mr-4"><div class="flex items-center space-x-2">${flowModule.value.type === "identity" ? `<span class="font-bold text-xs" data-svelte-h="svelte-1qp2qx0">Identity (input copied to output)</span>` : `${flowModule?.value.type === "rawscript" ? `<div class="mx-0.5">${validate_component(LanguageIcon, "LanguageIcon").$$render(
      $$result,
      {
        lang: flowModule.value.language,
        width: 20,
        height: 20
      },
      {},
      {}
    )}</div> ${validate_component(MetadataGen, "MetadataGen").$$render(
      $$result,
      {
        promptConfigName: "summary",
        code: flowModule.value.content,
        class: "w-full",
        elementProps: { placeholder: "Summary" },
        content: flowModule.summary
      },
      {
        content: ($$value) => {
          flowModule.summary = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${flowModule?.value.type === "script" && "path" in flowModule.value && flowModule.value.path ? `${validate_component(IconedPath, "IconedPath").$$render(
      $$result,
      {
        path: flowModule.value.path,
        hash: flowModule.value.hash,
        class: "grow"
      },
      {},
      {}
    )} ${flowModule.value.hash ? `${latestHash != flowModule.value.hash ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "light",
        size: "xs",
        variant: "border"
      },
      {},
      {
        default: () => {
          return `Update to latest hash`;
        }
      }
    )}` : ``} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        title: "Unlock hash to always use latest deployed version at that path",
        size: "xs",
        btnClasses: "text-tertiary inline-flex gap-1 items-center",
        color: "light"
      },
      {},
      {
        default: () => {
          return `${validate_component(Unlock, "Unlock").$$render($$result, { size: 12 }, {}, {})}hash`;
        }
      }
    )}` : `${latestHash ? `<div class="flex">${validate_component(Button, "Button").$$render(
      $$result,
      {
        title: "Lock hash to always use this specific version",
        color: "light",
        size: "xs",
        btnClasses: "text-tertiary inline-flex gap-1 items-center"
      },
      {},
      {
        default: () => {
          return `${validate_component(Lock, "Lock").$$render($$result, { size: 12 }, {}, {})}hash`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        title: "Reload latest hash",
        size: "xs",
        color: "light"
      },
      {},
      {
        default: () => {
          return `${validate_component(Refresh_cw, "RefreshCw").$$render($$result, { size: 12 }, {}, {})}`;
        }
      }
    )}</div>` : ``}`} <input placeholder="Summary" class="w-full grow"${add_attribute("value", flowModule.summary, 0)}>` : `${flowModule?.value.type === "flow" ? `${validate_component(Badge, "Badge").$$render($$result, { color: "indigo", capitalize: true }, {}, {
      default: () => {
        return `flow`;
      }
    })} <input placeholder="Summary" class="w-full grow"${add_attribute("value", flowModule.summary, 0)}>` : ``}`}`}`}</div></span>` : ``} ${title ? `<div class="text-sm font-bold text-primary pr-2">${escape(title)}</div>` : ``} ${slots.default ? slots.default({}) : ``}</div>`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const FlowCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = void 0 } = $$props;
  let { flowModule = void 0 } = $$props;
  let { noEditor } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.flowModule === void 0 && $$bindings.flowModule && flowModule !== void 0) $$bindings.flowModule(flowModule);
  if ($$props.noEditor === void 0 && $$bindings.noEditor && noEditor !== void 0) $$bindings.noEditor(noEditor);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${!noEditor ? `${validate_component(FlowCardHeader, "FlowCardHeader").$$render(
      $$result,
      { title, flowModule },
      {
        flowModule: ($$value) => {
          flowModule = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.header ? slots.header({}) : ``}`;
        }
      }
    )}` : ``} ${slots.default ? slots.default({}) : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const EMPTY_STRING = "";
const PropPicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let previousId;
  let flowInputsFiltered;
  let resultByIdFiltered;
  let suggestedPropsFiltered;
  let $$unsubscribe_workspaceStore;
  let $propPickerConfig, $$unsubscribe_propPickerConfig;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  let { pickableProperties } = $$props;
  let { displayContext = true } = $$props;
  let { notSelectable } = $$props;
  let { error = false } = $$props;
  createEventDispatcher();
  let search = "";
  const { propPickerConfig } = getContext("PropPickerWrapper");
  $$unsubscribe_propPickerConfig = subscribe(propPickerConfig, (value) => $propPickerConfig = value);
  if ($$props.pickableProperties === void 0 && $$bindings.pickableProperties && pickableProperties !== void 0) $$bindings.pickableProperties(pickableProperties);
  if ($$props.displayContext === void 0 && $$bindings.displayContext && displayContext !== void 0) $$bindings.displayContext(displayContext);
  if ($$props.notSelectable === void 0 && $$bindings.notSelectable && notSelectable !== void 0) $$bindings.notSelectable(notSelectable);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    previousId = pickableProperties?.previousId;
    flowInputsFiltered = search === EMPTY_STRING ? pickableProperties.flow_input : keepByKey(pickableProperties.flow_input, search);
    resultByIdFiltered = search === EMPTY_STRING ? pickableProperties.priorIds : keepByKey(pickableProperties.priorIds, search);
    suggestedPropsFiltered = $propPickerConfig ? keepByKey(pickableProperties.priorIds, $propPickerConfig.propName) : void 0;
    $$rendered = `<div class="flex flex-col h-full"><div class="px-2">${!notSelectable ? `<div class="flex flex-row space-x-1">${$propPickerConfig ? `${validate_component(Badge, "Badge").$$render($$result, { large: true, color: "blue" }, {}, {
      default: () => {
        return `${escape(`Selected: ${$propPickerConfig?.propName}`)}`;
      }
    })} ${validate_component(Badge, "Badge").$$render($$result, { large: true, color: "blue" }, {}, {
      default: () => {
        return `${escape(`Mode: ${$propPickerConfig?.insertionMode}`)}`;
      }
    })}` : `${validate_component(Badge, "Badge").$$render($$result, { large: true, color: "blue" }, {}, {
      default: () => {
        return `← Edit or connect an input`;
      }
    })}`}</div>` : ``} ${validate_component(ClearableInput, "ClearableInput").$$render(
      $$result,
      {
        placeholder: "Search prop...",
        wrapperClass: "py-2",
        value: search
      },
      {
        value: ($$value) => {
          search = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="${[
      "overflow-y-auto px-2 pt-2 grow",
      !$propPickerConfig && !notSelectable ? "bg-surface-secondary" : ""
    ].join(" ").trim()}"><div class="flex justify-between items-center space-x-1" data-svelte-h="svelte-1wvgsk7"><span class="font-bold text-sm">Flow Input</span> <div class="flex space-x-2 items-center"></div></div> <div class="overflow-y-auto mb-2">${validate_component(ObjectViewer, "ObjectViewer").$$render(
      $$result,
      {
        allowCopy: false,
        pureViewer: !$propPickerConfig,
        json: flowInputsFiltered
      },
      {},
      {}
    )}</div> ${error ? `<span class="font-bold text-sm" data-svelte-h="svelte-ctpt9a">Error</span> <div class="overflow-y-auto mb-2">${validate_component(ObjectViewer, "ObjectViewer").$$render(
      $$result,
      {
        allowCopy: false,
        pureViewer: !$propPickerConfig,
        json: {
          error: {
            message: "The error message",
            name: "The error name",
            stack: "The error stack"
          }
        }
      },
      {},
      {}
    )}</div> ${Object.keys(pickableProperties.priorIds).length > 0 ? `${suggestedPropsFiltered && Object.keys(suggestedPropsFiltered).length > 0 ? `<span class="font-bold text-sm" data-svelte-h="svelte-ru15un">Suggested Results</span> <div class="overflow-y-auto mb-2">${validate_component(ObjectViewer, "ObjectViewer").$$render(
      $$result,
      {
        allowCopy: false,
        topLevelNode: true,
        pureViewer: !$propPickerConfig,
        collapsed: false,
        json: suggestedPropsFiltered
      },
      {},
      {}
    )}</div>` : ``} <span class="font-bold text-sm" data-svelte-h="svelte-108slpj">All Results</span> <div class="overflow-y-auto mb-2">${validate_component(ObjectViewer, "ObjectViewer").$$render(
      $$result,
      {
        allowCopy: false,
        topLevelNode: true,
        pureViewer: !$propPickerConfig,
        collapsed: true,
        json: resultByIdFiltered
      },
      {},
      {}
    )}</div>` : ``}` : `${previousId ? `<span class="font-bold text-sm" data-svelte-h="svelte-1hayrum">Previous Result</span> <div class="overflow-y-auto mb-2">${validate_component(ObjectViewer, "ObjectViewer").$$render(
      $$result,
      {
        allowCopy: false,
        topLevelNode: true,
        pureViewer: !$propPickerConfig,
        json: Object.fromEntries(Object.entries(resultByIdFiltered).filter(([k, v]) => k == previousId))
      },
      {},
      {}
    )}</div>` : ``} ${pickableProperties.hasResume ? `<span class="font-bold text-sm" data-svelte-h="svelte-sdiao6">Resume payloads</span> <div class="overflow-y-auto mb-2">${validate_component(ObjectViewer, "ObjectViewer").$$render(
      $$result,
      {
        allowCopy: false,
        topLevelNode: true,
        pureViewer: !$propPickerConfig,
        json: {
          resume: "The resume payload",
          resumes: "All resume payloads from all approvers",
          approvers: "The list of approvers"
        }
      },
      {},
      {}
    )}</div>` : ``} ${Object.keys(pickableProperties.priorIds).length > 0 ? `${suggestedPropsFiltered && Object.keys(suggestedPropsFiltered).length > 0 ? `<span class="font-bold text-sm" data-svelte-h="svelte-ru15un">Suggested Results</span> <div class="overflow-y-auto mb-2">${validate_component(ObjectViewer, "ObjectViewer").$$render(
      $$result,
      {
        allowCopy: false,
        topLevelNode: true,
        pureViewer: !$propPickerConfig,
        collapsed: false,
        json: suggestedPropsFiltered
      },
      {},
      {}
    )}</div>` : ``} <span class="font-bold text-sm" data-svelte-h="svelte-108slpj">All Results</span> <div class="overflow-y-auto mb-2">${validate_component(ObjectViewer, "ObjectViewer").$$render(
      $$result,
      {
        allowCopy: false,
        topLevelNode: true,
        pureViewer: !$propPickerConfig,
        collapsed: true,
        json: resultByIdFiltered
      },
      {},
      {}
    )}</div>` : ``}`} ${displayContext ? `<span class="font-bold text-sm" data-svelte-h="svelte-1nkoa1z">Variables</span> <div class="overflow-y-auto mb-2">${`<button class="border border-blue-600 key font-normal rounded hover:bg-blue-100 px-1">${escape("{...}")}</button>`}</div> <span class="font-bold text-sm" data-svelte-h="svelte-uio53z">Resources</span> <div class="overflow-y-auto mb-2">${`<button class="border border-blue-600 px-1 key font-normal rounded hover:bg-blue-100">${escape("{...}")}</button>`}</div>` : ``}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_propPickerConfig();
  return $$rendered;
});
const PropPickerResult = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { result } = $$props;
  let { flow_input = void 0 } = $$props;
  createEventDispatcher();
  if ($$props.result === void 0 && $$bindings.result && result !== void 0) $$bindings.result(result);
  if ($$props.flow_input === void 0 && $$bindings.flow_input && flow_input !== void 0) $$bindings.flow_input(flow_input);
  return `<div class="w-full px-2"><span class="font-bold text-sm" data-svelte-h="svelte-ykjbyd">Result</span> <div class="overflow-y-auto mb-2 w-full">${validate_component(ObjectViewer, "ObjectViewer").$$render($$result, { allowCopy: false, json: { result } }, {}, {})}</div> ${flow_input ? `<span class="font-bold text-sm" data-svelte-h="svelte-bs1tjc">Flow Input</span> <div class="overflow-y-auto w-full">${validate_component(ObjectViewer, "ObjectViewer").$$render($$result, { allowCopy: false, json: flow_input }, {}, {})}</div>` : ``}</div>`;
});
const PropPickerWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $propPickerConfig, $$unsubscribe_propPickerConfig;
  let { pickableProperties } = $$props;
  let { result = void 0 } = $$props;
  let { flow_input = void 0 } = $$props;
  let { error = false } = $$props;
  let { displayContext = true } = $$props;
  let { notSelectable = false } = $$props;
  let { noPadding = false } = $$props;
  const propPickerConfig = writable(void 0);
  $$unsubscribe_propPickerConfig = subscribe(propPickerConfig, (value) => $propPickerConfig = value);
  createEventDispatcher();
  setContext("PropPickerWrapper", {
    propPickerConfig,
    focusProp: (propName, insertionMode, onSelect) => {
      propPickerConfig.set({ propName, insertionMode, onSelect });
    },
    clearFocus: () => {
      propPickerConfig.set(void 0);
    }
  });
  if ($$props.pickableProperties === void 0 && $$bindings.pickableProperties && pickableProperties !== void 0) $$bindings.pickableProperties(pickableProperties);
  if ($$props.result === void 0 && $$bindings.result && result !== void 0) $$bindings.result(result);
  if ($$props.flow_input === void 0 && $$bindings.flow_input && flow_input !== void 0) $$bindings.flow_input(flow_input);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
  if ($$props.displayContext === void 0 && $$bindings.displayContext && displayContext !== void 0) $$bindings.displayContext(displayContext);
  if ($$props.notSelectable === void 0 && $$bindings.notSelectable && notSelectable !== void 0) $$bindings.notSelectable(notSelectable);
  if ($$props.noPadding === void 0 && $$bindings.noPadding && noPadding !== void 0) $$bindings.noPadding(noPadding);
  $$unsubscribe_propPickerConfig();
  return `<div class="h-full w-full">${validate_component(Splitpanes, "Splitpanes").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Pane, "Pane").$$render(
        $$result,
        {
          minSize: 20,
          size: 60,
          class: twMerge("relative !transition-none", noPadding ? "" : "p-2")
        },
        {},
        {
          default: () => {
            return `${slots.default ? slots.default({}) : ``}`;
          }
        }
      )} ${validate_component(Pane, "Pane").$$render(
        $$result,
        {
          minSize: 20,
          size: 40,
          class: "pt-2 relative !transition-none " + ($propPickerConfig ? "border-2 border-blue-500" : "")
        },
        {},
        {
          default: () => {
            return `${result ? `${validate_component(PropPickerResult, "PropPickerResult").$$render($$result, { result, flow_input }, {}, {})}` : `${pickableProperties ? `${validate_component(PropPicker, "PropPicker").$$render(
              $$result,
              {
                displayContext,
                error,
                pickableProperties,
                notSelectable
              },
              {},
              {}
            )}` : ``}`}`;
          }
        }
      )}`;
    }
  })}</div>`;
});
const FlowModuleEarlyStop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let stepPropPicker;
  let isStopAfterIfEnabled;
  let result;
  let $flowStateStore, $$unsubscribe_flowStateStore;
  let $previewArgs, $$unsubscribe_previewArgs;
  let $flowStore, $$unsubscribe_flowStore;
  const { flowStateStore, flowStore, previewArgs } = getContext("FlowEditorContext");
  $$unsubscribe_flowStateStore = subscribe(flowStateStore, (value) => $flowStateStore = value);
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => $flowStore = value);
  $$unsubscribe_previewArgs = subscribe(previewArgs, (value) => $previewArgs = value);
  let { flowModule } = $$props;
  let editor = void 0;
  if ($$props.flowModule === void 0 && $$bindings.flowModule && flowModule !== void 0) $$bindings.flowModule(flowModule);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    stepPropPicker = getStepPropPicker($flowStateStore, void 0, void 0, flowModule.id, $flowStore, $previewArgs);
    isStopAfterIfEnabled = Boolean(flowModule.stop_after_if);
    result = $flowStateStore[flowModule.id]?.previewResult ?? NEVER_TESTED_THIS_FAR;
    $$rendered = `<div class="${"flex flex-col items-start space-y-2 " + escape($$props.class, true)}">${validate_component(Section, "Section").$$render(
      $$result,
      {
        label: "Early stop/Break",
        class: "w-full"
      },
      {},
      {
        header: () => {
          return `${validate_component(Tooltip, "Tooltip").$$render(
            $$result,
            {
              documentationLink: "https://www.windmill.dev/docs/flows/early_stop"
            },
            {},
            {
              default: () => {
                return `If defined, at the end of the step, the predicate expression will be evaluated to decide if
				the flow should stop early.`;
              }
            }
          )} `;
        },
        default: () => {
          return `${validate_component(Toggle, "Toggle").$$render(
            $$result,
            {
              checked: isStopAfterIfEnabled,
              options: {
                right: "Early stop or Break if condition met"
              }
            },
            {},
            {}
          )} <div class="${"w-full border p-2 flex flex-col " + escape(flowModule.stop_after_if ? "" : "bg-surface-secondary", true)}">${flowModule.stop_after_if ? `${validate_component(Toggle, "Toggle").$$render(
            $$result,
            {
              size: "xs",
              options: {
                right: 'Label flow as "skipped" if stopped'
              },
              checked: flowModule.stop_after_if.skip_if_stopped
            },
            {
              checked: ($$value) => {
                flowModule.stop_after_if.skip_if_stopped = $$value;
                $$settled = false;
              }
            },
            {}
          )} <span class="mt-2 text-xs font-bold" data-svelte-h="svelte-1izxh2">Stop condition expression</span> <div class="border w-full">${validate_component(PropPickerWrapper, "PropPickerWrapper").$$render(
            $$result,
            {
              notSelectable: true,
              flow_input: stepPropPicker.pickableProperties.flow_input,
              pickableProperties: void 0,
              result
            },
            {},
            {
              default: () => {
                return `${validate_component(SimpleEditor, "SimpleEditor").$$render(
                  $$result,
                  {
                    lang: "javascript",
                    class: "few-lines-editor",
                    extraLib: `declare const result = ${JSON.stringify(result)};`,
                    this: editor,
                    code: flowModule.stop_after_if.expr
                  },
                  {
                    this: ($$value) => {
                      editor = $$value;
                      $$settled = false;
                    },
                    code: ($$value) => {
                      flowModule.stop_after_if.expr = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            }
          )}</div>` : `${validate_component(Toggle, "Toggle").$$render(
            $$result,
            {
              disabled: true,
              size: "xs",
              options: {
                right: 'Label flow as "skipped" if stopped'
              }
            },
            {},
            {}
          )} <span class="mt-2 text-xs font-bold" data-svelte-h="svelte-1izxh2">Stop condition expression</span> <textarea disabled rows="3" class="min-h-[80px]"></textarea>`}</div>`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_flowStateStore();
  $$unsubscribe_previewArgs();
  $$unsubscribe_flowStore();
  return $$rendered;
});
const DynamicInputHelpBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let opened;
  opened = false;
  return `<div class="text-xs flex flex-row-reverse mt-1">${validate_component(Button, "Button").$$render(
    $$result,
    {
      color: "light",
      size: "xs2",
      endIcon: {
        icon: Chevron_down,
        classes: `rotate-0 duration-300 ${opened ? "!rotate-180" : ""}`
      }
    },
    {},
    {
      default: () => {
        return `Help`;
      }
    }
  )}</div> ${opened ? `<div class="bg-surface-secondary border-l-4 text-secondary p-4 m-4" role="alert" id="dynamic-input-help-box">Single javascript expression. The following functions and objects are available:
		<ul class="ml-4"><li><b>${escape("results.<id>")}</b>: the result of step at id &#39;id&#39;</li> <li data-svelte-h="svelte-y5op3j"><b>flow_input</b>: the object containing the flow input arguments</li> <li data-svelte-h="svelte-21ttk7"><b>params</b>: the object containing the current step static values</li> <li data-svelte-h="svelte-bkr4cw"><b>variable(path)</b>: the function returning the variable (including secrets) at given path
				as a string</li> <li data-svelte-h="svelte-5y07g"><b>resource(path)</b>: the function returning the resource at a given path as an object</li></ul>
		If using multiple statements, the last statement shall finish with a return. e.g: \`return x\`</div>` : ``}`;
});
const ManualPopover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { placement = "bottom" } = $$props;
  const [popperRef, popperContent, getInstance] = createPopperActions({ placement });
  async function refresh() {
    await getInstance()?.update();
  }
  let { showTooltip = false } = $$props;
  function open() {
    showTooltip = true;
  }
  function close() {
    showTooltip = false;
  }
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0) $$bindings.placement(placement);
  if ($$props.refresh === void 0 && $$bindings.refresh && refresh !== void 0) $$bindings.refresh(refresh);
  if ($$props.showTooltip === void 0 && $$bindings.showTooltip && showTooltip !== void 0) $$bindings.showTooltip(showTooltip);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.close === void 0 && $$bindings.close && close !== void 0) $$bindings.close(close);
  return `<fragment>${slots.default ? slots.default({}) : ``}</fragment> ${showTooltip ? `${validate_component(Portal, "Portal").$$render($$result, {}, {}, {
    default: () => {
      return `<div${add_attribute("class", twMerge("z-[901] rounded-lg shadow-md border p-4 bg-surface", $$props.class), 0)}>${slots.content ? slots.content({}) : ``}</div>`;
    }
  })}` : ``}`;
});
const FlowCopilotInputsModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let { inputs = [] } = $$props;
  createEventDispatcher();
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.inputs === void 0 && $$bindings.inputs && inputs !== void 0) $$bindings.inputs(inputs);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        title: "Windmill AI wants to add the following inputs to the flow:",
        open
      },
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
              slot: "actions",
              color: "light",
              size: "sm"
            },
            {},
            {
              default: () => {
                return `<span class="inline-flex gap-2">Add ${validate_component(Badge, "Badge").$$render($$result, { color: "dark-green" }, {}, {
                  default: () => {
                    return `Enter`;
                  }
                })}</span>`;
              }
            }
          )}`;
        },
        default: () => {
          return `<ul class="list-disc pl-5">${each(inputs, (input) => {
            return `<li>${escape(input)}</li>`;
          })}</ul>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const StepInputGen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $generatedExprs, $$unsubscribe_generatedExprs;
  let $stepInputCompletionEnabled, $$unsubscribe_stepInputCompletionEnabled;
  let $copilotInfo, $$unsubscribe_copilotInfo;
  let $selectedId, $$unsubscribe_selectedId;
  let $flowStore, $$unsubscribe_flowStore;
  let $stepInputsLoading, $$unsubscribe_stepInputsLoading;
  $$unsubscribe_stepInputCompletionEnabled = subscribe(stepInputCompletionEnabled, (value) => $stepInputCompletionEnabled = value);
  $$unsubscribe_copilotInfo = subscribe(copilotInfo, (value) => $copilotInfo = value);
  let generatedContent = "";
  let loading = false;
  let { focused = false } = $$props;
  let { arg } = $$props;
  let { schemaProperty } = $$props;
  let { pickableProperties = void 0 } = $$props;
  let { argName } = $$props;
  let { showPopup } = $$props;
  let empty = false;
  let btnFocused = false;
  let abortController = new AbortController();
  let newFlowInput = "";
  const { flowStore, selectedId } = getContext("FlowEditorContext");
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => $flowStore = value);
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => $selectedId = value);
  const { stepInputsLoading, generatedExprs } = getContext("FlowCopilotContext") || {};
  $$unsubscribe_stepInputsLoading = subscribe(stepInputsLoading, (value) => $stepInputsLoading = value);
  $$unsubscribe_generatedExprs = subscribe(generatedExprs, (value) => $generatedExprs = value);
  async function generateStepInput() {
    if (generatedContent.length > 0 || loading) {
      return;
    }
    abortController = new AbortController();
    loading = true;
    const flow = JSON.parse(JSON.stringify($flowStore));
    const idOrders = dfs(flow.value.modules, (x) => x.id);
    const upToIndex = idOrders.indexOf($selectedId);
    if (upToIndex === -1) {
      throw new Error("Could not find the selected id in the flow");
    }
    const flowDetails = "Take into account the following information for never tested results:\n<flowDetails>\n" + yamlStringifyExceptKeys(sliceModules(flow.value.modules, upToIndex, idOrders), ["lock"]) + "</flowDetails>";
    try {
      const availableData = {
        results: pickableProperties?.priorIds,
        flow_input: pickableProperties?.flow_input
      };
      const isInsideLoop = availableData.flow_input && "iter" in availableData.flow_input;
      const user = `I'm building a workflow which is a DAG of script steps.
The current step is ${$selectedId}, you can find the details for the step and previous ones below:
${flowDetails}
Determine for the input "${argName}", what to pass either from the previous results or the flow inputs. 
All possibles inputs either start with results. or flow_input. and are followed by the key of the input.
${isInsideLoop ? "As the step is in a loop, the iterator value is accessible as flow_input.iter.value." : "As the step is not in a loop, flow_input.iter.value is not available."}
Here's a summary of the available data:
<available>
${YAML.stringify(availableData)}</available>
${isInsideLoop ? "Favor results and flow_input.iter.value over flow inputs." : "Favor results over flow inputs"}
If none of the available results are appropriate, are already used or are more appropriate for other inputs, you can also imagine new flow_input properties which we will create programmatically based on what you provide.
Reply with the most probable answer, do not explain or discuss.
Use javascript object dot notation to access the properties.
Only return the expression without any wrapper.`;
      generatedContent = await getNonStreamingCompletion([{ role: "user", content: user }], abortController);
      if (pickableProperties && generatedContent.startsWith("flow_input.") && generatedContent.split(".")[1] && !(generatedContent.split(".")[1] in pickableProperties.flow_input)) {
        newFlowInput = generatedContent.split(".")[1];
      } else {
        newFlowInput = "";
      }
    } catch (err) {
      if (!abortController.signal.aborted) {
        sendUserToast("Could not generate summary: " + err, true);
      }
    } finally {
      loading = false;
    }
  }
  function onKeyUp(event) {
    if (!$copilotInfo.exists_openai_resource_path || !$stepInputCompletionEnabled) {
      return;
    }
    if (event.key === "Tab") {
      if (!loading && generatedContent) {
        event.preventDefault();
        dispatch("setExpr", generatedContent);
        if (newFlowInput) {
          openInputsModal = true;
        }
        generatedContent = "";
      }
    } else {
      cancel();
    }
  }
  const dispatch = createEventDispatcher();
  function cancel() {
    abortController.abort();
    generatedContent = "";
  }
  function automaticGeneration() {
    if (empty) {
      generateStepInput();
    }
  }
  function cancelOnOutOfFocus() {
    setTimeout(
      () => {
        if (!focused && !btnFocused) {
          cancel();
        }
      },
      150
    );
  }
  let openInputsModal = false;
  if ($$props.focused === void 0 && $$bindings.focused && focused !== void 0) $$bindings.focused(focused);
  if ($$props.arg === void 0 && $$bindings.arg && arg !== void 0) $$bindings.arg(arg);
  if ($$props.schemaProperty === void 0 && $$bindings.schemaProperty && schemaProperty !== void 0) $$bindings.schemaProperty(schemaProperty);
  if ($$props.pickableProperties === void 0 && $$bindings.pickableProperties && pickableProperties !== void 0) $$bindings.pickableProperties(pickableProperties);
  if ($$props.argName === void 0 && $$bindings.argName && argName !== void 0) $$bindings.argName(argName);
  if ($$props.showPopup === void 0 && $$bindings.showPopup && showPopup !== void 0) $$bindings.showPopup(showPopup);
  if ($$props.onKeyUp === void 0 && $$bindings.onKeyUp && onKeyUp !== void 0) $$bindings.onKeyUp(onKeyUp);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    empty = Object.keys(arg ?? {}).length === 0 || arg.type === "static" && !arg.value || arg.type === "javascript" && !arg.expr;
    {
      if (!focused) {
        cancelOnOutOfFocus();
      }
    }
    {
      if ($copilotInfo.exists_openai_resource_path && $stepInputCompletionEnabled && focused) {
        automaticGeneration();
      }
    }
    {
      dispatch("showExpr", generatedContent);
    }
    {
      dispatch("showExpr", $generatedExprs?.[argName] || "");
    }
    $$rendered = `${$copilotInfo.exists_openai_resource_path && $stepInputCompletionEnabled ? `${validate_component(FlowCopilotInputsModal, "FlowCopilotInputsModal").$$render(
      $$result,
      {
        inputs: [newFlowInput],
        open: openInputsModal
      },
      {
        open: ($$value) => {
          openInputsModal = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ManualPopover, "ManualPopover").$$render(
      $$result,
      {
        showTooltip: showPopup && (generatedContent.length > 0 || !!$generatedExprs?.[argName]),
        placement: "bottom",
        class: "p-2"
      },
      {},
      {
        content: () => {
          return `<div class="text-sm text-tertiary">${escape(generatedContent || $generatedExprs?.[argName])}</div> `;
        },
        default: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              size: "xs",
              color: "light",
              btnClasses: twMerge("text-violet-800 dark:text-violet-400 bg-violet-100 dark:bg-gray-700 dark:hover:bg-surface-hover", !loading && generatedContent.length > 0 ? "bg-green-100 text-green-800 hover:bg-green-100 dark:text-green-400 dark:bg-green-700 dark:hover:bg-green-700" : ""),
              endIcon: {
                icon: loading || $stepInputsLoading && empty ? Loader_2 : generatedContent.length > 0 ? Check : Wand_2,
                classes: loading || $stepInputsLoading && empty ? "animate-spin" : ""
              }
            },
            {},
            {
              default: () => {
                return `${focused ? `${loading ? `ESC` : `${generatedContent.length > 0 ? `TAB` : ``}`}` : ``}`;
              }
            }
          )}`;
        }
      }
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_generatedExprs();
  $$unsubscribe_stepInputCompletionEnabled();
  $$unsubscribe_copilotInfo();
  $$unsubscribe_selectedId();
  $$unsubscribe_flowStore();
  $$unsubscribe_stepInputsLoading();
  return $$rendered;
});
const InputTransformForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputCat;
  let $shouldUpdatePropertyType, $$unsubscribe_shouldUpdatePropertyType;
  let $exprsToSet, $$unsubscribe_exprsToSet;
  let $propPickerConfig, $$unsubscribe_propPickerConfig;
  let { schema } = $$props;
  let { arg } = $$props;
  let { argName } = $$props;
  let { extraLib = "missing extraLib" } = $$props;
  let { inputCheck = true } = $$props;
  let { previousModuleId } = $$props;
  let { pickForField = void 0 } = $$props;
  let { variableEditor = void 0 } = $$props;
  let { itemPicker = void 0 } = $$props;
  let { noDynamicToggle = false } = $$props;
  let { argExtra = {} } = $$props;
  let { pickableProperties = void 0 } = $$props;
  let { enableAi = false } = $$props;
  let monaco = void 0;
  let monacoTemplate = void 0;
  let argInput = void 0;
  createEventDispatcher();
  let propertyType = getPropertyType(arg);
  const { shouldUpdatePropertyType, exprsToSet } = getContext("FlowCopilotContext") || {};
  $$unsubscribe_shouldUpdatePropertyType = subscribe(shouldUpdatePropertyType, (value) => $shouldUpdatePropertyType = value);
  $$unsubscribe_exprsToSet = subscribe(exprsToSet, (value) => $exprsToSet = value);
  function setExpr() {
    const newArg = $exprsToSet?.[argName];
    if (newArg) {
      if (newArg.type === "javascript") {
        propertyType = "javascript";
        arg = { type: "javascript", expr: newArg.expr };
        monaco?.setCode(arg.expr);
      }
    }
    exprsToSet?.set({ ...$exprsToSet, [argName]: void 0 });
  }
  function updatePropertyType() {
    propertyType = $shouldUpdatePropertyType?.[argName] || "static";
    shouldUpdatePropertyType?.set({
      ...$shouldUpdatePropertyType,
      [argName]: void 0
    });
  }
  function getPropertyType(arg2) {
    let type = arg2?.type ?? "static";
    if (type == "javascript" && isStaticTemplate(inputCat) && (arg2?.expr?.length === 0 || arg2?.expr?.[0] === "`")) {
      const newValue = codeToStaticTemplate(arg2.expr);
      if (newValue) {
        type = "static";
        arg2.value = newValue;
      }
    }
    return type;
  }
  function setPropertyType(rawValue) {
    if (!arg) {
      return;
    }
    if (isCodeInjection(rawValue)) {
      arg.expr = getDefaultExpr(argName, previousModuleId, `\`${rawValue.toString().replaceAll("`", "\\`")}\``);
      arg.type = "javascript";
      propertyType = "static";
    } else {
      if (arg.type === "javascript" && propertyType === "static") {
        arg.type = "static";
      }
      if (arg.type) {
        propertyType = arg.type;
      }
    }
  }
  function isStaticTemplate(inputCat2) {
    return inputCat2 === "string" || inputCat2 === "sql" || inputCat2 == "yaml";
  }
  const { focusProp, propPickerConfig } = getContext("PropPickerWrapper");
  $$unsubscribe_propPickerConfig = subscribe(propPickerConfig, (value) => $propPickerConfig = value);
  function setDefaultCode() {
    if (!arg?.value) {
      monacoTemplate?.setCode(schema.properties[argName].default);
    }
  }
  let resourceTypes = void 0;
  async function loadResourceTypes() {
    resourceTypes = await getResourceTypes();
  }
  let focused = false;
  let stepInputGen = void 0;
  loadResourceTypes();
  if ($$props.schema === void 0 && $$bindings.schema && schema !== void 0) $$bindings.schema(schema);
  if ($$props.arg === void 0 && $$bindings.arg && arg !== void 0) $$bindings.arg(arg);
  if ($$props.argName === void 0 && $$bindings.argName && argName !== void 0) $$bindings.argName(argName);
  if ($$props.extraLib === void 0 && $$bindings.extraLib && extraLib !== void 0) $$bindings.extraLib(extraLib);
  if ($$props.inputCheck === void 0 && $$bindings.inputCheck && inputCheck !== void 0) $$bindings.inputCheck(inputCheck);
  if ($$props.previousModuleId === void 0 && $$bindings.previousModuleId && previousModuleId !== void 0) $$bindings.previousModuleId(previousModuleId);
  if ($$props.pickForField === void 0 && $$bindings.pickForField && pickForField !== void 0) $$bindings.pickForField(pickForField);
  if ($$props.variableEditor === void 0 && $$bindings.variableEditor && variableEditor !== void 0) $$bindings.variableEditor(variableEditor);
  if ($$props.itemPicker === void 0 && $$bindings.itemPicker && itemPicker !== void 0) $$bindings.itemPicker(itemPicker);
  if ($$props.noDynamicToggle === void 0 && $$bindings.noDynamicToggle && noDynamicToggle !== void 0) $$bindings.noDynamicToggle(noDynamicToggle);
  if ($$props.argExtra === void 0 && $$bindings.argExtra && argExtra !== void 0) $$bindings.argExtra(argExtra);
  if ($$props.pickableProperties === void 0 && $$bindings.pickableProperties && pickableProperties !== void 0) $$bindings.pickableProperties(pickableProperties);
  if ($$props.enableAi === void 0 && $$bindings.enableAi && enableAi !== void 0) $$bindings.enableAi(enableAi);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    inputCat = setInputCat(schema.properties[argName].type, schema.properties[argName].format, schema.properties[argName].items?.type, schema.properties[argName].enum, schema.properties[argName].contentEncoding);
    $exprsToSet?.[argName] && setExpr();
    $shouldUpdatePropertyType?.[argName] && arg?.type === $shouldUpdatePropertyType?.[argName] && updatePropertyType();
    isStaticTemplate(inputCat) && propertyType == "static" && setPropertyType(arg?.value);
    schema.properties[argName].default && setDefaultCode();
    $$rendered = `${arg != void 0 ? `<div${add_attribute("class", $$props.class, 0)}><div class="flex flex-row justify-between gap-1 pb-1"><div class="flex flex-wrap grow">${validate_component(FieldHeader, "FieldHeader").$$render(
      $$result,
      {
        label: argName,
        format: schema.properties[argName].format,
        contentEncoding: schema.properties[argName].contentEncoding,
        required: schema.required.includes(argName),
        type: schema.properties[argName].type
      },
      {},
      {}
    )} ${isStaticTemplate(inputCat) ? `<div><span class="${"bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 !py-0.5 rounded ml-2 " + escape(
      propertyType == "static" && arg.type === "javascript" ? "visible" : "invisible",
      true
    )}">${escape("${...}")}</span></div>` : ``}</div> ${!noDynamicToggle ? `<div class="flex flex-row gap-x-2 gap-y-1 flex-wrap z-10 items-center">${enableAi ? `${validate_component(StepInputGen, "StepInputGen").$$render(
      $$result,
      {
        focused,
        arg,
        schemaProperty: schema.properties[argName],
        showPopup: isStaticTemplate(inputCat) && propertyType == "static" || propertyType === void 0 || propertyType === "static" || arg?.expr?.length > 0,
        pickableProperties,
        argName,
        this: stepInputGen
      },
      {
        this: ($$value) => {
          stepInputGen = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} <div>${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render($$result, { selected: propertyType }, {}, {
      default: () => {
        return `${isStaticTemplate(inputCat) ? `${validate_component(ToggleButton, "ToggleButton").$$render(
          $$result,
          {
            tooltip: `Write text or surround javascript with \`\${\` and \`}\`. Use \`results\` to connect to another node's output.`,
            light: true,
            value: "static",
            size: "xs2",
            label: "${}"
          },
          {},
          {}
        )}` : `${validate_component(ToggleButton, "ToggleButton").$$render(
          $$result,
          {
            small: true,
            label: "Static",
            value: "static"
          },
          {},
          {}
        )}`} ${validate_component(ToggleButton, "ToggleButton").$$render(
          $$result,
          {
            small: true,
            light: true,
            tooltip: "Javascript expression ('flow_input' or 'results').",
            value: "javascript",
            icon: Function_square
          },
          {},
          {}
        )}`;
      }
    })}</div> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        title: "Connect to another node's output",
        variant: "border",
        color: "light",
        size: "xs2",
        id: "flow-editor-plug"
      },
      {},
      {
        default: () => {
          return `${validate_component(Plug, "Plug").$$render($$result, { size: 16 }, {}, {})} →`;
        }
      }
    )}</div>` : ``}</div> <div class="max-w-xs"></div>  <div class="${"relative " + escape(
      $propPickerConfig?.propName == argName ? "outline outline-offset-1 outline-1 outline-blue-500 rounded-md" : "",
      true
    )}">${$propPickerConfig?.propName == argName && $propPickerConfig?.insertionMode == "connect" ? `<span${add_attribute("class", "text-white  z-50 px-1 text-2xs py-0.5 font-bold rounded-t-sm w-fit absolute top-0 right-0 bg-blue-500", 0)} data-svelte-h="svelte-1s4afpf">Connect input →</span>` : ``}  ${isStaticTemplate(inputCat) && propertyType == "static" && !noDynamicToggle ? `${argName && schema?.properties?.[argName]?.description ? `<div class="text-xs italic pb-1 text-secondary"><pre class="font-main">${escape(schema.properties[argName].description)}</pre></div>` : ``} <div class="mt-2 min-h-[28px]">${arg ? `${validate_component(TemplateEditor, "TemplateEditor").$$render(
      $$result,
      {
        extraLib,
        fontSize: 14,
        this: monacoTemplate,
        code: arg.value
      },
      {
        this: ($$value) => {
          monacoTemplate = $$value;
          $$settled = false;
        },
        code: ($$value) => {
          arg.value = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</div>` : `${propertyType === void 0 || propertyType == "static" ? `${validate_component(ArgInput, "ArgInput").$$render(
      $$result,
      {
        resourceTypes,
        noMargin: true,
        compact: true,
        shouldDispatchChanges: true,
        label: argName,
        type: schema.properties[argName].type,
        oneOf: schema.properties[argName].oneOf,
        required: schema.required.includes(argName),
        defaultValue: schema.properties[argName].default,
        contentEncoding: schema.properties[argName].contentEncoding,
        properties: schema.properties[argName].properties,
        nestedRequired: schema.properties[argName].required,
        displayHeader: false,
        extra: argExtra,
        variableEditor,
        itemPicker,
        showSchemaExplorer: true,
        nullable: schema.properties[argName].nullable,
        this: argInput,
        editor: monaco,
        description: schema.properties[argName].description,
        value: arg.value,
        pattern: schema.properties[argName].pattern,
        valid: inputCheck,
        enum_: schema.properties[argName].enum,
        format: schema.properties[argName].format,
        itemsType: schema.properties[argName].items,
        pickForField,
        title: schema.properties[argName].title,
        placeholder: schema.properties[argName].placeholder
      },
      {
        this: ($$value) => {
          argInput = $$value;
          $$settled = false;
        },
        editor: ($$value) => {
          monaco = $$value;
          $$settled = false;
        },
        description: ($$value) => {
          schema.properties[argName].description = $$value;
          $$settled = false;
        },
        value: ($$value) => {
          arg.value = $$value;
          $$settled = false;
        },
        pattern: ($$value) => {
          schema.properties[argName].pattern = $$value;
          $$settled = false;
        },
        valid: ($$value) => {
          inputCheck = $$value;
          $$settled = false;
        },
        enum_: ($$value) => {
          schema.properties[argName].enum = $$value;
          $$settled = false;
        },
        format: ($$value) => {
          schema.properties[argName].format = $$value;
          $$settled = false;
        },
        itemsType: ($$value) => {
          schema.properties[argName].items = $$value;
          $$settled = false;
        },
        pickForField: ($$value) => {
          pickForField = $$value;
          $$settled = false;
        },
        title: ($$value) => {
          schema.properties[argName].title = $$value;
          $$settled = false;
        },
        placeholder: ($$value) => {
          schema.properties[argName].placeholder = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${arg.expr != void 0 ? `<div class="border mt-2">${validate_component(SimpleEditor, "SimpleEditor").$$render(
      $$result,
      {
        extraLib,
        lang: "javascript",
        shouldBindKey: false,
        autoHeight: true,
        this: monaco,
        code: arg.expr
      },
      {
        this: ($$value) => {
          monaco = $$value;
          $$settled = false;
        },
        code: ($$value) => {
          arg.expr = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> ${validate_component(DynamicInputHelpBox, "DynamicInputHelpBox").$$render($$result, {}, {}, {})} <div class="mb-2"></div>` : `Not recognized input type ${escape(argName)} (${escape(arg.expr)}, ${escape(propertyType)})
				<div class="flex mt-2">${validate_component(Button, "Button").$$render($$result, { variant: "border", size: "xs" }, {}, {
      default: () => {
        return `Set expr to empty string`;
      }
    })}</div>`}`}`}</div></div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_shouldUpdatePropertyType();
  $$unsubscribe_exprsToSet();
  $$unsubscribe_propPickerConfig();
  return $$rendered;
});
const SuspendDrawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let drawer;
  let { text = "Approval Help" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs",
        variant: "border",
        color: "light"
      },
      {},
      {
        default: () => {
          return `${escape(text)} ${validate_component(Help_circle, "HelpCircle").$$render($$result, { size: 12 }, {}, {})}`;
        }
      }
    )} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { this: drawer },
      {
        this: ($$value) => {
          drawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Suspend/Approval/Prompt help" }, {}, {
            default: () => {
              return `<div class="flex flex-col gap-y-6 text-xs text-primary font-normal">${validate_component(Section, "Section").$$render($$result, { label: "Form/Payload" }, {}, {
                default: () => {
                  return `To add a form, go to the <b data-svelte-h="svelte-1ptccuq">Form</b> tab, inside the Advanced ${escape("->")} Suspend tab, and add a form.
				You can then get back the payloads using \`resume\` (single approver), or \`resumes\` (multiple approvers)
				in the next step. Forms are an EE feature only. The approver list itself is fetchable using \`approvers\``;
                }
              })} ${validate_component(Section, "Section").$$render($$result, { label: "Prompt" }, {}, {
                default: () => {
                  return `A prompt is simply an approval step that can be self-approved. To do this, include the
				resume url in the returned payload of the step. The UX will automatically adapt and show the
				prompt to the operator when running the flow. Additionally, adding the cancel url will also
				render a cancel button, providing the operator with an option to cancel the step. e.g:
				${validate_component(Tabs, "Tabs").$$render($$result, { selected: "bun", class: "pt-4" }, {}, {
                    content: () => {
                      return `${validate_component(TabContent, "TabContent").$$render($$result, { value: "deno", class: "p-2" }, {}, {
                        default: () => {
                          return `${validate_component(HighlightCode, "HighlightCode").$$render(
                            $$result,
                            {
                              language: "deno",
                              code: `import * as wmill from "npm:windmill-client@^1.158.2"
    
export async function main() {
    const urls = await wmill.getResumeUrls("approver1")

    return {
        resume: urls['resume'],
        cancel: urls['cancel'], 
        default_args: {}, // optional, see below
        enums: {} // optional, see below
    }
}`
                            },
                            {},
                            {}
                          )}`;
                        }
                      })} ${validate_component(TabContent, "TabContent").$$render($$result, { value: "bun", class: "p-2" }, {}, {
                        default: () => {
                          return `${validate_component(HighlightCode, "HighlightCode").$$render(
                            $$result,
                            {
                              language: "deno",
                              code: `import * as wmill from "windmill-client"
        
export async function main() {
    const urls = await wmill.getResumeUrls("approver1")

    return {
        resume: urls['resume'],
        cancel: urls['cancel'],
        default_args: {}, // optional, see below
        enums: {} // optional, see below
    }
}`
                            },
                            {},
                            {}
                          )}`;
                        }
                      })} ${validate_component(TabContent, "TabContent").$$render($$result, { value: "python", class: "p-2" }, {}, {
                        default: () => {
                          return `${validate_component(HighlightCode, "HighlightCode").$$render(
                            $$result,
                            {
                              language: "python3",
                              code: `import wmill

def main():
    urls = wmill.get_resume_urls()
    return {
        "resume": urls["resume"],
        "cancel": urls["cancel"],
        "default_args": {}, # optional, see below
        "enums": {} # optional, see below
    }
                                    `
                            },
                            {},
                            {}
                          )}`;
                        }
                      })} `;
                    },
                    default: () => {
                      return `${validate_component(Tab, "Tab").$$render($$result, { value: "bun" }, {}, {
                        default: () => {
                          return `TypeScript (Bun)`;
                        }
                      })} ${validate_component(Tab, "Tab").$$render($$result, { value: "deno" }, {}, {
                        default: () => {
                          return `TypeScript (Deno)`;
                        }
                      })} ${validate_component(Tab, "Tab").$$render($$result, { value: "python" }, {}, {
                        default: () => {
                          return `Python`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })} ${validate_component(Section, "Section").$$render($$result, { label: "Default args" }, {}, {
                default: () => {
                  return `As one of the return key of this step, return an object \`default_args\` that contains the
				default arguments of the form arguments. e.g:
				${validate_component(HighlightCode, "HighlightCode").$$render(
                    $$result,
                    {
                      language: "deno",
                      code: `//this assumes the Form tab has a string field named "foo" and a checkbox named "bar"

import * as wmill from "npm:windmill-client@^1.158.2"

export async function main() {
    // if no argument is passed, if user is logged in, it will use the user's username
    const urls = await wmill.getResumeUrls("approver1") 

    // send the resumeUrls to the recipient or see Prompt section above

    return {
        default_args: {
            foo: "foo",
            bar: true
        }
    }
}`
                    },
                    {},
                    {}
                  )}`;
                }
              })} ${validate_component(Section, "Section").$$render($$result, { label: "Dynamics enums" }, {}, {
                default: () => {
                  return `As one of the return key of this step, return an object \`enums\` that contains the default
				options of the form arguments. e.g:
				${validate_component(HighlightCode, "HighlightCode").$$render(
                    $$result,
                    {
                      language: "deno",
                      code: `

//this assumes the Form tab has a string field named "foo"

import * as wmill from "npm:windmill-client@^1.158.2"

export async function main() {
    // if no argument is passed, if user is logged in, it will use the user's username
    const url = await wmill.getResumeUrls("approver1") 

    // send the resumeUrls to the recipient or see Prompt section above

    return {
        enums: {
            foo: ["choice1", "choice2"]
        },
    }
}`
                    },
                    {},
                    {}
                  )}`;
                }
              })}</div>`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const FlowModuleSuspend = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isSuspendEnabled;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $selectedId, $$unsubscribe_selectedId;
  let $flowStateStore, $$unsubscribe_flowStateStore;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  const { selectedId, flowStateStore } = getContext("FlowEditorContext");
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => $selectedId = value);
  $$unsubscribe_flowStateStore = subscribe(flowStateStore, (value) => $flowStateStore = value);
  const result = $flowStateStore[$selectedId]?.previewResult ?? {};
  let { flowModule } = $$props;
  let { previousModuleId } = $$props;
  let schema = emptySchema();
  let allUserGroups = [];
  let suspendTabSelected = "core";
  async function loadGroups() {
    allUserGroups = await GroupService.listGroupNames({ workspace: $workspaceStore });
    schema.properties["groups"] = {
      type: "array",
      items: { type: "string", enum: allUserGroups }
    };
  }
  let jsonView = false;
  if ($$props.flowModule === void 0 && $$bindings.flowModule && flowModule !== void 0) $$bindings.flowModule(flowModule);
  if ($$props.previousModuleId === void 0 && $$bindings.previousModuleId && previousModuleId !== void 0) $$bindings.previousModuleId(previousModuleId);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    isSuspendEnabled = Boolean(flowModule.suspend);
    {
      {
        if ($workspaceStore && allUserGroups.length === 0) {
          loadGroups();
        }
      }
    }
    $$rendered = `${validate_component(Section, "Section").$$render(
      $$result,
      {
        label: "Suspend/Approval/Prompt",
        class: "w-full"
      },
      {},
      {
        header: () => {
          return `<div class="flex flex-row items-center gap-2">${validate_component(Tooltip, "Tooltip").$$render(
            $$result,
            {
              documentationLink: "https://www.windmill.dev/docs/flows/flow_approval"
            },
            {},
            {
              default: () => {
                return `If defined, at the end of the step, the flow will be suspended until it receives external
				requests to be resumed or canceled. This is most useful to implement approval steps but can
				be used flexibly for other purposes.`;
              }
            }
          )} ${validate_component(Toggle, "Toggle").$$render(
            $$result,
            {
              size: "xs",
              checked: isSuspendEnabled,
              options: {
                right: "Suspend flow execution until events/approvals received"
              }
            },
            {},
            {}
          )}</div> `;
        },
        action: () => {
          return `${validate_component(SuspendDrawer, "SuspendDrawer").$$render($$result, { text: "Approval/Prompt helpers" }, {}, {})} `;
        },
        default: () => {
          return `<div class="overflow-x-auto scrollbar-hidden">${validate_component(Tabs, "Tabs").$$render(
            $$result,
            { selected: suspendTabSelected },
            {
              selected: ($$value) => {
                suspendTabSelected = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${validate_component(Tab, "Tab").$$render(
                  $$result,
                  {
                    size: "xs",
                    value: "core",
                    disabled: !isSuspendEnabled
                  },
                  {},
                  {
                    default: () => {
                      return `<div class="flex gap-2 items-center my-1" data-svelte-h="svelte-732l0y">Core</div>`;
                    }
                  }
                )} ${validate_component(Tab, "Tab").$$render(
                  $$result,
                  {
                    size: "xs",
                    value: "form",
                    disabled: !isSuspendEnabled
                  },
                  {},
                  {
                    default: () => {
                      return `<div class="flex gap-2 items-center my-1" data-svelte-h="svelte-1841i9v">Form</div>`;
                    }
                  }
                )} ${validate_component(Tab, "Tab").$$render(
                  $$result,
                  {
                    size: "xs",
                    value: "permissions",
                    disabled: !isSuspendEnabled
                  },
                  {},
                  {
                    default: () => {
                      return `<div class="flex gap-2 items-center my-1" data-svelte-h="svelte-1x1y2zv">Permissions</div>`;
                    }
                  }
                )}`;
              }
            }
          )}</div> ${suspendTabSelected === "core" ? `<div class="flex flex-col mt-4 gap-4">${validate_component(Label, "Label").$$render(
            $$result,
            {
              label: "Number of approvals/events required for resuming flow"
            },
            {},
            {
              default: () => {
                return `${flowModule.suspend ? `<input type="number" min="1" placeholder="1"${add_attribute("value", flowModule.suspend.required_events, 0)}>` : `<input type="number" disabled>`}`;
              }
            }
          )} ${validate_component(Label, "Label").$$render($$result, { label: "Timeout" }, {}, {
            default: () => {
              return `${flowModule.suspend ? `${validate_component(SecondsInput, "SecondsInput").$$render(
                $$result,
                { seconds: flowModule.suspend.timeout },
                {
                  seconds: ($$value) => {
                    flowModule.suspend.timeout = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}` : `${validate_component(SecondsInput, "SecondsInput").$$render($$result, { disabled: true }, {}, {})}`}`;
            }
          })}</div>` : `${suspendTabSelected === "permissions" ? `<div class="flex flex-col mt-4 gap-4">${emptyString($enterpriseLicense) ? `${validate_component(Alert, "Alert").$$render(
            $$result,
            {
              type: "warning",
              title: "Editing permissions is only available in enterprise version"
            },
            {},
            {}
          )}` : ``} ${flowModule.suspend ? `<div class="flex flex-col gap-2">${validate_component(Toggle, "Toggle").$$render(
            $$result,
            {
              disabled: emptyString($enterpriseLicense),
              checked: Boolean(flowModule.suspend.user_auth_required),
              options: {
                right: "Require approvers to be logged in"
              }
            },
            {},
            {}
          )} ${validate_component(Toggle, "Toggle").$$render(
            $$result,
            {
              options: {
                right: "Disable self-approval",
                rightTooltip: "The user who triggered the flow will not be allowed to approve it"
              },
              checked: Boolean(flowModule.suspend.self_approval_disabled),
              disabled: !Boolean(flowModule.suspend.user_auth_required)
            },
            {},
            {}
          )} <div class="mb-4"></div> ${Boolean(flowModule.suspend.user_auth_required) && allUserGroups.length !== 0 && flowModule.suspend && schema.properties["groups"] ? `<span class="text-xs font-bold" data-svelte-h="svelte-1x2padi">Require approvers to be members of one of the following user groups (leave empty for
							any)</span> <div class="border">${validate_component(PropPickerWrapper, "PropPickerWrapper").$$render(
            $$result,
            {
              result,
              displayContext: false,
              pickableProperties: void 0
            },
            {},
            {
              default: () => {
                return `${validate_component(InputTransformForm, "InputTransformForm").$$render(
                  $$result,
                  {
                    class: "min-h-[256px] items-start",
                    argName: "groups",
                    schema,
                    previousModuleId,
                    arg: flowModule.suspend.user_groups_required
                  },
                  {
                    arg: ($$value) => {
                      flowModule.suspend.user_groups_required = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            }
          )}</div>` : ``}</div>` : ``}</div>` : `<div class="grid grid-cols-4 mt-4 gap-8"><div class="col-span-2">${flowModule?.suspend?.resume_form ? `${validate_component(EditableSchemaDrawer, "EditableSchemaDrawer").$$render(
            $$result,
            {
              jsonView,
              schema: flowModule.suspend.resume_form.schema
            },
            {
              schema: ($$value) => {
                flowModule.suspend.resume_form.schema = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : `${emptyString($enterpriseLicense) ? `${validate_component(Alert, "Alert").$$render(
            $$result,
            {
              type: "warning",
              title: "Adding a form to the approval page is an EE feature"
            },
            {},
            {}
          )}` : `<div class="flex flex-col items-end mb-2 w-full">${validate_component(Toggle, "Toggle").$$render(
            $$result,
            {
              checked: false,
              label: "JSON View",
              size: "xs",
              options: {
                right: "JSON Editor",
                rightTooltip: "Arguments can be edited either using the wizard, or by editing their JSON Schema."
              },
              lightMode: true
            },
            {},
            {}
          )}</div> ${validate_component(AddProperty, "AddProperty").$$render($$result, { schema: {} }, {}, {})}`}`}</div> <div class="col-span-2 flex flex-col gap-4">${flowModule.suspend ? `${emptyString($enterpriseLicense) ? `${validate_component(Alert, "Alert").$$render(
            $$result,
            {
              type: "warning",
              title: "Adding a form to the approval page is an EE feature"
            },
            {},
            {}
          )}` : ``} <div class="flex flex-col gap-2"><div class="flex">${validate_component(SuspendDrawer, "SuspendDrawer").$$render(
            $$result,
            {
              text: "Default args & Dynamic enums help"
            },
            {},
            {}
          )}</div></div>` : ``} ${flowModule.suspend ? `${validate_component(Toggle, "Toggle").$$render(
            $$result,
            {
              size: "xs",
              options: {
                right: "Hide cancel button on approval page"
              },
              disabled: !Boolean(flowModule?.suspend?.resume_form),
              checked: flowModule.suspend.hide_cancel
            },
            {
              checked: ($$value) => {
                flowModule.suspend.hide_cancel = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``}</div></div>`}`}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_selectedId();
  $$unsubscribe_flowStateStore();
  $$unsubscribe_enterpriseLicense();
  return $$rendered;
});
const FlowModuleSleep = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isSleepEnabled;
  let $selectedId, $$unsubscribe_selectedId;
  let $flowStateStore, $$unsubscribe_flowStateStore;
  let { flowModule } = $$props;
  let { previousModuleId } = $$props;
  const { selectedId, flowStateStore } = getContext("FlowEditorContext");
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => $selectedId = value);
  $$unsubscribe_flowStateStore = subscribe(flowStateStore, (value) => $flowStateStore = value);
  let schema = emptySchema();
  schema.properties["sleep"] = { type: "number" };
  const result = $flowStateStore[$selectedId]?.previewResult ?? {};
  if ($$props.flowModule === void 0 && $$bindings.flowModule && flowModule !== void 0) $$bindings.flowModule(flowModule);
  if ($$props.previousModuleId === void 0 && $$bindings.previousModuleId && previousModuleId !== void 0) $$bindings.previousModuleId(previousModuleId);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    isSleepEnabled = Boolean(flowModule.sleep);
    $$rendered = `${validate_component(Section, "Section").$$render($$result, { label: "Sleep", class: "w-full" }, {}, {
      header: () => {
        return `${validate_component(Tooltip, "Tooltip").$$render(
          $$result,
          {
            documentationLink: "https://www.windmill.dev/docs/flows/sleep"
          },
          {},
          {
            default: () => {
              return `If defined, at the end of the step, the flow will sleep for a number of seconds before
			scheduling the next job (if any, no effect if the step is the last one).`;
            }
          }
        )} `;
      },
      default: () => {
        return `${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            checked: isSleepEnabled,
            options: {
              right: "Sleep after module successful execution"
            }
          },
          {},
          {}
        )} ${validate_component(Label, "Label").$$render($$result, { label: "Sleep for duration" }, {}, {
          default: () => {
            return `${flowModule.sleep && schema.properties["sleep"] ? `<div class="border">${validate_component(PropPickerWrapper, "PropPickerWrapper").$$render(
              $$result,
              {
                notSelectable: true,
                result,
                displayContext: false,
                pickableProperties: void 0
              },
              {},
              {
                default: () => {
                  return `${validate_component(InputTransformForm, "InputTransformForm").$$render(
                    $$result,
                    {
                      argName: "sleep",
                      schema,
                      previousModuleId,
                      argExtra: { seconds: true },
                      arg: flowModule.sleep
                    },
                    {
                      arg: ($$value) => {
                        flowModule.sleep = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              }
            )}</div>` : `${validate_component(SecondsInput, "SecondsInput").$$render($$result, { disabled: true }, {}, {})} <div class="text-secondary" data-svelte-h="svelte-u6vl5j">OR use a dynamic expression</div>`}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_selectedId();
  $$unsubscribe_flowStateStore();
  return $$rendered;
});
const FlowModuleMock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isMockEnabled;
  let { flowModule } = $$props;
  let code = flowModule.mock?.return_value ? JSON.stringify(flowModule.mock?.return_value, null, 2) : void 0;
  if ($$props.flowModule === void 0 && $$bindings.flowModule && flowModule !== void 0) $$bindings.flowModule(flowModule);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    isMockEnabled = Boolean(flowModule.mock?.enabled);
    $$rendered = `${validate_component(Section, "Section").$$render($$result, { label: "Mock" }, {}, {
      header: () => {
        return `${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `If defined and enabled, the step will immediately return the mock value instead of being
			executed.`;
          }
        })} `;
      },
      default: () => {
        return `${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            checked: isMockEnabled,
            options: { right: "Enable step mocking" }
          },
          {},
          {}
        )} <div><span class="text-xs font-bold" data-svelte-h="svelte-1btgjcv">Mocked Return value</span> ${flowModule?.mock?.return_value != void 0 ? `${validate_component(JsonEditor, "JsonEditor").$$render(
          $$result,
          {
            code,
            value: flowModule.mock.return_value
          },
          {
            value: ($$value) => {
              flowModule.mock.return_value = $$value;
              $$settled = false;
            }
          },
          {}
        )}` : `<input type="text" disabled${add_attribute("value", flowModule.mock?.return_value ? code : "", 0)} class="w-full p-2 border rounded-md">`}</div>`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const FlowLoopIterationPreview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $pathStore, $$unsubscribe_pathStore;
  let $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  let { open } = $$props;
  let { jobId = void 0 } = $$props;
  let { job = void 0 } = $$props;
  let { modules } = $$props;
  let { previewArgs = {} } = $$props;
  let { whileLoop = false } = $$props;
  const forloopSchema = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    properties: {
      iter: {
        type: "object",
        properties: {
          index: { type: "number" },
          value: { type: "object" }
        }
      }
    },
    required: [],
    type: "object"
  };
  const whileLoopSchema = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    properties: {
      iter: {
        type: "object",
        properties: { index: { type: "number" } }
      }
    },
    required: [],
    type: "object"
  };
  let selectedJobStep = void 0;
  let isRunning = false;
  let jobProgressReset;
  function test() {
    runPreview(previewArgs, void 0);
  }
  const { flowStateStore, pathStore } = getContext("FlowEditorContext");
  $$unsubscribe_pathStore = subscribe(pathStore, (value) => $pathStore = value);
  createEventDispatcher();
  async function runPreview(args, restartedFrom) {
    jobProgressReset();
    const newFlow = { value: { modules }, summary: "" };
    jobId = await runFlowPreview(args, newFlow, $pathStore, restartedFrom);
    isRunning = true;
  }
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.jobId === void 0 && $$bindings.jobId && jobId !== void 0) $$bindings.jobId(jobId);
  if ($$props.job === void 0 && $$bindings.job && job !== void 0) $$bindings.job(job);
  if ($$props.modules === void 0 && $$bindings.modules && modules !== void 0) $$bindings.modules(modules);
  if ($$props.previewArgs === void 0 && $$bindings.previewArgs && previewArgs !== void 0) $$bindings.previewArgs(previewArgs);
  if ($$props.whileLoop === void 0 && $$bindings.whileLoop && whileLoop !== void 0) $$bindings.whileLoop(whileLoop);
  if ($$props.forloopSchema === void 0 && $$bindings.forloopSchema && forloopSchema !== void 0) $$bindings.forloopSchema(forloopSchema);
  if ($$props.whileLoopSchema === void 0 && $$bindings.whileLoopSchema && whileLoopSchema !== void 0) $$bindings.whileLoopSchema(whileLoopSchema);
  if ($$props.test === void 0 && $$bindings.test && test !== void 0) $$bindings.test(test);
  if ($$props.runPreview === void 0 && $$bindings.runPreview && runPreview !== void 0) $$bindings.runPreview(runPreview);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (job?.type === "CompletedJob") {
        isRunning = false;
      }
    }
    $$rendered = ` <div class="flex flex-col space-y-2 h-screen bg-surface px-6 py-2 w-full" id="flow-preview-content"><div class="flex flex-row justify-between w-full items-center gap-x-2"><div class="w-8">${validate_component(Button, "Button").$$render(
      $$result,
      {
        startIcon: { icon: X },
        iconOnly: true,
        size: "sm",
        color: "light",
        btnClasses: "hover:bg-surface-hover  bg-surface-secondaryw-8 h-8 rounded-full p-0"
      },
      {},
      {}
    )}</div> ${isRunning ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "red",
        size: "sm",
        btnClasses: "w-full max-w-lg",
        loading: true,
        clickableWhileLoading: true
      },
      {},
      {
        default: () => {
          return `Cancel`;
        }
      }
    )}` : `${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "contained",
        startIcon: { icon: isRunning ? Refresh_cw : Play },
        color: "dark",
        size: "sm",
        btnClasses: "w-full max-w-lg",
        id: "flow-editor-test-flow-drawer",
        shortCut: { Icon: Corner_down_left }
      },
      {},
      {
        default: () => {
          return `Test iteration`;
        }
      }
    )}`} <div></div></div> <div class="w-full flex flex-col gap-y-1">${validate_component(FlowProgressBar, "FlowProgressBar").$$render(
      $$result,
      { job, reset: jobProgressReset },
      {
        reset: ($$value) => {
          jobProgressReset = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="overflow-y-auto grow pr-4"><div class="max-h-1/2 overflow-auto border-b">${validate_component(SchemaForm, "SchemaForm").$$render(
      $$result,
      {
        noVariablePicker: true,
        compact: true,
        class: "py-4 max-w-3xl",
        schema: whileLoop ? whileLoopSchema : forloopSchema,
        args: previewArgs
      },
      {
        args: ($$value) => {
          previewArgs = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="pt-4 grow">${jobId ? `${validate_component(FlowStatusViewer, "FlowStatusViewer").$$render(
      $$result,
      { flowStateStore, jobId, selectedJobStep },
      {
        selectedJobStep: ($$value) => {
          selectedJobStep = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `<div class="italic text-tertiary h-full grow" data-svelte-h="svelte-fn4kw">Flow status will be displayed here</div>`}</div></div></div>`;
  } while (!$$settled);
  $$unsubscribe_pathStore();
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const FlowModuleDeleteAfterUse = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { flowModule } = $$props;
  let { disabled = false } = $$props;
  if ($$props.flowModule === void 0 && $$bindings.flowModule && flowModule !== void 0) $$bindings.flowModule(flowModule);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  return `${validate_component(Section, "Section").$$render($$result, { label: "Delete after use" }, {}, {
    header: () => {
      return `${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
        default: () => {
          return `The logs, arguments and results of this flow step will be completely deleted from Windmill
			once the flow is complete. They might be temporarily visible in UI while the flow is running.
			<br>
			This also applies to a flow step that has failed: the error will not be accessible.
			<br> <br>
			The deletion is irreversible.
			${disabled ? `<br> <br>
				This option is only available on Windmill Enterprise Edition.` : ``}`;
        }
      })} `;
    },
    default: () => {
      return `${validate_component(Toggle, "Toggle").$$render(
        $$result,
        {
          disabled,
          size: "sm",
          checked: Boolean(flowModule.delete_after_use),
          options: {
            right: "Delete logs, arguments and results after the flow is complete"
          }
        },
        {},
        {}
      )}`;
    }
  })}`;
});
const IteratorGen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $stepInputCompletionEnabled, $$unsubscribe_stepInputCompletionEnabled;
  let $copilotInfo, $$unsubscribe_copilotInfo;
  let $selectedId, $$unsubscribe_selectedId;
  let $flowStore, $$unsubscribe_flowStore;
  $$unsubscribe_stepInputCompletionEnabled = subscribe(stepInputCompletionEnabled, (value) => $stepInputCompletionEnabled = value);
  $$unsubscribe_copilotInfo = subscribe(copilotInfo, (value) => $copilotInfo = value);
  let generatedContent = "";
  let loading = false;
  let { focused = false } = $$props;
  let { arg } = $$props;
  let { pickableProperties = void 0 } = $$props;
  let btnFocused = false;
  let empty = false;
  let abortController = new AbortController();
  const { flowStore, selectedId } = getContext("FlowEditorContext");
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => $flowStore = value);
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => $selectedId = value);
  async function generateIteratorExpr() {
    if (generatedContent.length > 0 || loading) {
      return;
    }
    abortController = new AbortController();
    loading = true;
    const flow = JSON.parse(JSON.stringify($flowStore));
    const idOrders = dfs(flow.value.modules, (x) => x.id);
    const upToIndex = idOrders.indexOf($selectedId);
    if (upToIndex === -1) {
      throw new Error("Could not find the selected id in the flow");
    }
    const flowDetails = "Take into account the following information for never tested results:\n<flowDetails>\n" + yamlStringifyExceptKeys(sliceModules(flow.value.modules, upToIndex, idOrders), ["lock"]) + "</flowDetails>";
    try {
      const availableData = {
        results: pickableProperties?.priorIds,
        flow_input: pickableProperties?.flow_input
      };
      const user = `I'm building a workflow which is a DAG of script steps.
The current step is ${$selectedId} and represents a for-loop. You can find the details of all the steps below:
${flowDetails}
Determine the iterator expression to pass either from the previous results or the flow inputs. Here's a summary of the available data:
<available>
${YAML.stringify(availableData)}</available>
Reply with the most probable answer, do not explain or discuss.
Use javascript object dot notation to access the properties.
Only output the expression, do not explain or discuss.`;
      generatedContent = await getNonStreamingCompletion([{ role: "user", content: user }], abortController);
    } catch (err) {
      if (!abortController.signal.aborted) {
        sendUserToast("Could not generate summary: " + err, true);
      }
    } finally {
      loading = false;
    }
  }
  function onKeyUp(event) {
    if (!$copilotInfo.exists_openai_resource_path || !$stepInputCompletionEnabled) {
      return;
    }
    if (event.key === "Tab") {
      if (!loading && generatedContent) {
        event.preventDefault();
        dispatch("setExpr", generatedContent);
        generatedContent = "";
      }
    } else {
      cancel();
    }
  }
  const dispatch = createEventDispatcher();
  function automaticGeneration() {
    if (empty) {
      generateIteratorExpr();
    }
  }
  function cancelOnOutOfFocus() {
    setTimeout(
      () => {
        if (!focused && !btnFocused) {
          cancel();
        }
      },
      150
    );
  }
  function cancel() {
    abortController.abort();
    generatedContent = "";
  }
  if ($$props.focused === void 0 && $$bindings.focused && focused !== void 0) $$bindings.focused(focused);
  if ($$props.arg === void 0 && $$bindings.arg && arg !== void 0) $$bindings.arg(arg);
  if ($$props.pickableProperties === void 0 && $$bindings.pickableProperties && pickableProperties !== void 0) $$bindings.pickableProperties(pickableProperties);
  if ($$props.onKeyUp === void 0 && $$bindings.onKeyUp && onKeyUp !== void 0) $$bindings.onKeyUp(onKeyUp);
  empty = Object.keys(arg ?? {}).length === 0 || arg.type === "static" && !arg.value || arg.type === "javascript" && !arg.expr;
  {
    if (!focused) {
      cancelOnOutOfFocus();
    }
  }
  {
    if ($copilotInfo.exists_openai_resource_path && $stepInputCompletionEnabled && focused) {
      automaticGeneration();
    }
  }
  {
    dispatch("showExpr", generatedContent);
  }
  $$unsubscribe_stepInputCompletionEnabled();
  $$unsubscribe_copilotInfo();
  $$unsubscribe_selectedId();
  $$unsubscribe_flowStore();
  return `${$copilotInfo.exists_openai_resource_path && $stepInputCompletionEnabled ? `${validate_component(ManualPopover, "ManualPopover").$$render(
    $$result,
    {
      showTooltip: !empty && generatedContent.length > 0,
      placement: "bottom",
      class: "p-2"
    },
    {},
    {
      content: () => {
        return `<div class="text-sm text-tertiary">${escape(generatedContent)}</div> `;
      },
      default: () => {
        return `${validate_component(Button, "Button").$$render(
          $$result,
          {
            size: "xs",
            color: "light",
            btnClasses: twMerge("text-violet-800 dark:text-violet-400 bg-violet-100 dark:bg-gray-700 dark:hover:bg-surface-hover", !loading && generatedContent.length > 0 ? "bg-green-100 text-green-800 hover:bg-green-100 dark:text-green-400 dark:bg-green-700 dark:hover:bg-green-700" : ""),
            endIcon: {
              icon: loading ? Loader_2 : generatedContent.length > 0 ? Check : Wand_2,
              classes: loading ? "animate-spin" : ""
            }
          },
          {},
          {
            default: () => {
              return `${focused ? `${loading ? `ESC` : `${generatedContent.length > 0 ? `TAB` : ``}`}` : ``}`;
            }
          }
        )}`;
      }
    }
  )}` : ``}`;
});
const FlowLoop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let stepPropPicker;
  let previewIterationArgs;
  let $flowStateStore, $$unsubscribe_flowStateStore;
  let $previewArgs, $$unsubscribe_previewArgs;
  let $flowStore, $$unsubscribe_flowStore;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  const { previewArgs, flowStateStore, flowStore } = getContext("FlowEditorContext");
  $$unsubscribe_previewArgs = subscribe(previewArgs, (value) => $previewArgs = value);
  $$unsubscribe_flowStateStore = subscribe(flowStateStore, (value) => $flowStateStore = value);
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => $flowStore = value);
  let { mod } = $$props;
  let { parentModule } = $$props;
  let { previousModule } = $$props;
  let { noEditor } = $$props;
  let { enableAi = false } = $$props;
  let editor = void 0;
  let selected = "early-stop";
  let previewOpen = false;
  let jobId = void 0;
  let job = void 0;
  let iteratorFieldFocused = false;
  let iteratorGen = void 0;
  if ($$props.mod === void 0 && $$bindings.mod && mod !== void 0) $$bindings.mod(mod);
  if ($$props.parentModule === void 0 && $$bindings.parentModule && parentModule !== void 0) $$bindings.parentModule(parentModule);
  if ($$props.previousModule === void 0 && $$bindings.previousModule && previousModule !== void 0) $$bindings.previousModule(previousModule);
  if ($$props.noEditor === void 0 && $$bindings.noEditor && noEditor !== void 0) $$bindings.noEditor(noEditor);
  if ($$props.enableAi === void 0 && $$bindings.enableAi && enableAi !== void 0) $$bindings.enableAi(enableAi);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    stepPropPicker = getStepPropPicker($flowStateStore, parentModule, previousModule, mod.id, $flowStore, $previewArgs);
    previewIterationArgs = $flowStateStore[mod.id]?.previewArgs ?? {};
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      {
        alwaysOpen: true,
        size: "75%",
        open: previewOpen
      },
      {
        open: ($$value) => {
          previewOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(FlowLoopIterationPreview, "FlowLoopIterationPreview").$$render(
            $$result,
            {
              modules: mod.value.type == "forloopflow" ? mod.value.modules : [],
              open: previewOpen,
              previewArgs: previewIterationArgs,
              job,
              jobId
            },
            {
              job: ($$value) => {
                job = $$value;
                $$settled = false;
              },
              jobId: ($$value) => {
                jobId = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )} <div class="h-full flex flex-col">${validate_component(FlowCard, "FlowCard").$$render($$result, { noEditor, title: "For loop" }, {}, {
      header: () => {
        return `<div slot="header" class="grow"><div class="my-2 flex flex-row gap-2 items-center"><div>${validate_component(Tooltip, "Tooltip").$$render(
          $$result,
          {
            documentationLink: "https://www.windmill.dev/docs/flows/flow_loops"
          },
          {},
          {
            default: () => {
              return `Add steps inside the loop and specify an iterator expression that defines the sequence
						over which your subsequent steps will iterate.`;
            }
          }
        )}</div> <div class="grow"><input${add_attribute("placeholder", "Summary", 0)}${add_attribute("value", mod.summary, 0)}></div> <div class="justify-end">${validate_component(Button, "Button").$$render(
          $$result,
          {
            startIcon: { icon: Play },
            color: "dark",
            size: "sm"
          },
          {},
          {
            default: () => {
              return `Test an iteration`;
            }
          }
        )}</div></div></div>`;
      },
      default: () => {
        return `${validate_component(Splitpanes, "Splitpanes").$$render(
          $$result,
          {
            horizontal: true,
            class: "!max-h-[calc(100%-30px)]"
          },
          {},
          {
            default: () => {
              return `${validate_component(Pane, "Pane").$$render($$result, { size: 60, minSize: 20, class: "p-4" }, {}, {
                default: () => {
                  return `${mod.value.type === "forloopflow" ? `<div class="flex flex-row gap-8 mt-2 mb-6"><div><div class="mb-2 text-sm font-bold">Skip failures ${validate_component(Tooltip, "Tooltip").$$render(
                    $$result,
                    {
                      documentationLink: "https://www.windmill.dev/docs/flows/flow_loops"
                    },
                    {},
                    {
                      default: () => {
                        return `If disabled, the flow will fail as soon as one of the iteration fail. Otherwise,
									the error will be collected as the result of the iteration. Regardless of this
									setting, if an error handler is defined, it will process the error.`;
                      }
                    }
                  )}</div> ${validate_component(Toggle, "Toggle").$$render(
                    $$result,
                    {
                      options: { right: "Skip failures" },
                      checked: mod.value.skip_failures
                    },
                    {
                      checked: ($$value) => {
                        mod.value.skip_failures = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div><div class="mb-2 text-sm font-bold" data-svelte-h="svelte-135u3v9">Run in parallel</div> ${validate_component(Toggle, "Toggle").$$render(
                    $$result,
                    {
                      options: { right: "All iterations run in parallel" },
                      checked: mod.value.parallel
                    },
                    {
                      checked: ($$value) => {
                        mod.value.parallel = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> <div><div class="mb-2 text-sm font-bold">Parallelism ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                    default: () => {
                      return `Assign a maximum number of branches run in parallel to control huge for-loops.`;
                    }
                  })}</div> <input type="number" ${!mod.value.parallel ? "disabled" : ""}${add_attribute("value", mod.value.parallelism, 0)}></div></div> <div class="my-2 flex flex-row gap-2 items-center"><div class="text-sm font-bold whitespace-nowrap">Iterator expression
							${validate_component(Tooltip, "Tooltip").$$render(
                    $$result,
                    {
                      documentationLink: "https://www.windmill.dev/docs/flows/flow_loops"
                    },
                    {},
                    {
                      default: () => {
                        return `The JavaScript expression that will be evaluated to get the list of items to iterate
								over. Example : [&quot;banana&quot;, &quot;apple&quot;, flow_input.my_fruit].`;
                      }
                    }
                  )}</div> ${enableAi ? `${validate_component(IteratorGen, "IteratorGen").$$render(
                    $$result,
                    {
                      focused: iteratorFieldFocused,
                      arg: mod.value.iterator,
                      pickableProperties: stepPropPicker.pickableProperties,
                      this: iteratorGen
                    },
                    {
                      this: ($$value) => {
                        iteratorGen = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}` : ``}</div> ${mod.value.iterator.type == "javascript" ? ` <div class="border w-full" id="flow-editor-iterator-expression">${validate_component(PropPickerWrapper, "PropPickerWrapper").$$render(
                    $$result,
                    {
                      notSelectable: true,
                      pickableProperties: stepPropPicker.pickableProperties,
                      noPadding: true
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(SimpleEditor, "SimpleEditor").$$render(
                          $$result,
                          {
                            autofocus: true,
                            lang: "javascript",
                            class: "small-editor",
                            shouldBindKey: false,
                            extraLib: stepPropPicker.extraLib,
                            this: editor,
                            code: mod.value.iterator.expr
                          },
                          {
                            this: ($$value) => {
                              editor = $$value;
                              $$settled = false;
                            },
                            code: ($$value) => {
                              mod.value.iterator.expr = $$value;
                              $$settled = false;
                            }
                          },
                          {}
                        )}`;
                      }
                    }
                  )}</div>` : `${validate_component(Button, "Button").$$render($$result, {}, {}, {})}`}` : ``}`;
                }
              })} ${validate_component(Pane, "Pane").$$render(
                $$result,
                {
                  size: 40,
                  minSize: 20,
                  class: "flex flex-col flex-1"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Tabs, "Tabs").$$render(
                      $$result,
                      { selected },
                      {
                        selected: ($$value) => {
                          selected = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        content: () => {
                          return ` <div class="overflow-hidden bg-surface" style="height:calc(100% - 32px);"> ${validate_component(TabContent, "TabContent").$$render(
                            $$result,
                            {
                              value: "early-stop",
                              class: "flex flex-col flex-1 h-full"
                            },
                            {},
                            {
                              default: () => {
                                return `<div class="p-4 overflow-y-auto">${validate_component(FlowModuleEarlyStop, "FlowModuleEarlyStop").$$render(
                                  $$result,
                                  { flowModule: mod },
                                  {
                                    flowModule: ($$value) => {
                                      mod = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</div>`;
                              }
                            }
                          )} ${validate_component(TabContent, "TabContent").$$render(
                            $$result,
                            {
                              value: "suspend",
                              class: "flex flex-col flex-1 h-full"
                            },
                            {},
                            {
                              default: () => {
                                return `<div class="p-4 overflow-y-auto">${validate_component(FlowModuleSuspend, "FlowModuleSuspend").$$render(
                                  $$result,
                                  {
                                    previousModuleId: previousModule?.id,
                                    flowModule: mod
                                  },
                                  {
                                    flowModule: ($$value) => {
                                      mod = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</div>`;
                              }
                            }
                          )} ${validate_component(TabContent, "TabContent").$$render(
                            $$result,
                            {
                              value: "sleep",
                              class: "flex flex-col flex-1 h-full"
                            },
                            {},
                            {
                              default: () => {
                                return `<div class="p-4 overflow-y-auto">${validate_component(FlowModuleSleep, "FlowModuleSleep").$$render(
                                  $$result,
                                  {
                                    previousModuleId: previousModule?.id,
                                    flowModule: mod
                                  },
                                  {
                                    flowModule: ($$value) => {
                                      mod = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</div>`;
                              }
                            }
                          )} ${validate_component(TabContent, "TabContent").$$render(
                            $$result,
                            {
                              value: "mock",
                              class: "flex flex-col flex-1 h-full"
                            },
                            {},
                            {
                              default: () => {
                                return `<div class="p-4 overflow-y-auto">${validate_component(FlowModuleMock, "FlowModuleMock").$$render(
                                  $$result,
                                  { flowModule: mod },
                                  {
                                    flowModule: ($$value) => {
                                      mod = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</div>`;
                              }
                            }
                          )} ${validate_component(TabContent, "TabContent").$$render(
                            $$result,
                            {
                              value: "lifetime",
                              class: "flex flex-col flex-1 h-full"
                            },
                            {},
                            {
                              default: () => {
                                return `<div class="p-4 overflow-y-auto">${validate_component(FlowModuleDeleteAfterUse, "FlowModuleDeleteAfterUse").$$render(
                                  $$result,
                                  {
                                    disabled: !$enterpriseLicense,
                                    flowModule: mod
                                  },
                                  {
                                    flowModule: ($$value) => {
                                      mod = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</div>`;
                              }
                            }
                          )}</div> `;
                        },
                        default: () => {
                          return ` ${validate_component(Tab, "Tab").$$render($$result, { value: "early-stop" }, {}, {
                            default: () => {
                              return `Early Stop/Break`;
                            }
                          })} ${validate_component(Tab, "Tab").$$render($$result, { value: "suspend" }, {}, {
                            default: () => {
                              return `Suspend/Approval/Prompt`;
                            }
                          })} ${validate_component(Tab, "Tab").$$render($$result, { value: "sleep" }, {}, {
                            default: () => {
                              return `Sleep`;
                            }
                          })} ${validate_component(Tab, "Tab").$$render($$result, { value: "mock" }, {}, {
                            default: () => {
                              return `Mock`;
                            }
                          })} ${validate_component(Tab, "Tab").$$render($$result, { value: "lifetime" }, {}, {
                            default: () => {
                              return `Lifetime`;
                            }
                          })}`;
                        }
                      }
                    )}`;
                  }
                }
              )}`;
            }
          }
        )}`;
      }
    })}</div>`;
  } while (!$$settled);
  $$unsubscribe_flowStateStore();
  $$unsubscribe_previewArgs();
  $$unsubscribe_flowStore();
  $$unsubscribe_enterpriseLicense();
  return $$rendered;
});
const ModulePreviewForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { schema } = $$props;
  let { args = {} } = $$props;
  let { mod } = $$props;
  let { pickableProperties } = $$props;
  let { isValid = true } = $$props;
  let { autofocus = false } = $$props;
  getContext("FlowEditorContext");
  let inputCheck = {};
  function removeExtraKey() {
    const nargs = {};
    Object.keys(args ?? {}).forEach((key) => {
      if (keys.includes(key)) {
        nargs[key] = args[key];
      }
    });
    args = nargs;
  }
  let keys = [];
  let editor = {};
  let resourceTypes = void 0;
  async function loadResourceTypes() {
    resourceTypes = await getResourceTypes();
  }
  loadResourceTypes();
  if ($$props.schema === void 0 && $$bindings.schema && schema !== void 0) $$bindings.schema(schema);
  if ($$props.args === void 0 && $$bindings.args && args !== void 0) $$bindings.args(args);
  if ($$props.mod === void 0 && $$bindings.mod && mod !== void 0) $$bindings.mod(mod);
  if ($$props.pickableProperties === void 0 && $$bindings.pickableProperties && pickableProperties !== void 0) $$bindings.pickableProperties(pickableProperties);
  if ($$props.isValid === void 0 && $$bindings.isValid && isValid !== void 0) $$bindings.isValid(isValid);
  if ($$props.autofocus === void 0 && $$bindings.autofocus && autofocus !== void 0) $$bindings.autofocus(autofocus);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    isValid = allTrue(inputCheck) ?? false;
    {
      if (args == void 0 || typeof args !== "object") {
        args = {};
      }
    }
    {
      {
        let lkeys = Object.keys(schema?.properties ?? {});
        if (schema?.properties && JSON.stringify(lkeys) != JSON.stringify(keys)) {
          keys = lkeys;
          removeExtraKey();
        }
      }
    }
    $$rendered = `<div class="w-full pt-2">${keys.length > 0 ? `${each(keys, (argName, i) => {
      return `${Object.keys(schema.properties ?? {}).includes(argName) ? `<div class="flex gap-2">${typeof args == "object" && schema?.properties[argName] ? `${validate_component(ArgInput, "ArgInput").$$render(
        $$result,
        {
          resourceTypes,
          minW: false,
          autofocus: i == 0 && autofocus,
          label: argName,
          description: schema.properties[argName].description,
          type: schema.properties[argName].type,
          oneOf: schema.properties[argName].oneOf,
          required: schema.required.includes(argName),
          pattern: schema.properties[argName].pattern,
          defaultValue: schema.properties[argName].default,
          enum_: schema.properties[argName].enum,
          format: schema.properties[argName].format,
          contentEncoding: schema.properties[argName].contentEncoding,
          properties: schema.properties[argName].properties,
          nestedRequired: schema.properties[argName].required,
          itemsType: schema.properties[argName].items,
          extra: schema.properties[argName],
          nullable: schema.properties[argName].nullable,
          title: schema.properties[argName].title,
          placeholder: schema.properties[argName].placeholder,
          value: args[argName],
          editor: editor[argName],
          valid: inputCheck[argName]
        },
        {
          value: ($$value) => {
            args[argName] = $$value;
            $$settled = false;
          },
          editor: ($$value) => {
            editor[argName] = $$value;
            $$settled = false;
          },
          valid: ($$value) => {
            inputCheck[argName] = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : ``} <div class="pt-6 mt-0.5">${validate_component(Button, "Button").$$render(
        $$result,
        {
          size: "sm",
          variant: "border",
          color: "light",
          title: "Re-evaluate input step"
        },
        {},
        {
          default: () => {
            return `${validate_component(Refresh_cw, "RefreshCw").$$render($$result, { size: 14 }, {}, {})}`;
          }
        }
      )}</div> </div>` : ``}`;
    })}` : ``}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const ModulePreview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_flowStateStore;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $flowStore, $$unsubscribe_flowStore;
  let $pathStore, $$unsubscribe_pathStore;
  let $testStepStore, $$unsubscribe_testStepStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { mod } = $$props;
  let { schema } = $$props;
  let { pickableProperties } = $$props;
  let { lang } = $$props;
  let { editor } = $$props;
  let { diffEditor } = $$props;
  let { noEditor = false } = $$props;
  const { flowStore, flowStateStore, testStepStore, pathStore } = getContext("FlowEditorContext");
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => $flowStore = value);
  $$unsubscribe_flowStateStore = subscribe(flowStateStore, (value) => value);
  $$unsubscribe_testStepStore = subscribe(testStepStore, (value) => $testStepStore = value);
  $$unsubscribe_pathStore = subscribe(pathStore, (value) => $pathStore = value);
  let testJobLoader;
  let testIsLoading = false;
  let testJob = void 0;
  let stepArgs = Object.fromEntries(Object.keys(schema.properties ?? {}).map((k) => [k, evalValue(k, mod, $testStepStore, pickableProperties)]));
  function runTestWithStepArgs() {
    runTest(stepArgs);
  }
  async function runTest(args) {
    const val = mod.value;
    if (val.type == "rawscript") {
      await testJobLoader?.runPreview(val.path ?? ($pathStore ?? "") + "/" + mod.id, val.content, val.language, args, $flowStore?.tag ?? val.tag);
    } else if (val.type == "script") {
      const script = val.hash ? await ScriptService.getScriptByHash({
        workspace: $workspaceStore,
        hash: val.hash
      }) : await getScriptByPath(val.path);
      await testJobLoader?.runPreview(val.path, script.content, script.language, args, $flowStore?.tag ?? script.tag);
    } else if (val.type == "flow") {
      await testJobLoader?.abstractRun(() => JobService.runFlowByPath({
        workspace: $workspaceStore,
        path: val.path,
        requestBody: args
      }));
    } else {
      throw Error("Not supported module type");
    }
  }
  let forceJson = false;
  if ($$props.mod === void 0 && $$bindings.mod && mod !== void 0) $$bindings.mod(mod);
  if ($$props.schema === void 0 && $$bindings.schema && schema !== void 0) $$bindings.schema(schema);
  if ($$props.pickableProperties === void 0 && $$bindings.pickableProperties && pickableProperties !== void 0) $$bindings.pickableProperties(pickableProperties);
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0) $$bindings.lang(lang);
  if ($$props.editor === void 0 && $$bindings.editor && editor !== void 0) $$bindings.editor(editor);
  if ($$props.diffEditor === void 0 && $$bindings.diffEditor && diffEditor !== void 0) $$bindings.diffEditor(diffEditor);
  if ($$props.noEditor === void 0 && $$bindings.noEditor && noEditor !== void 0) $$bindings.noEditor(noEditor);
  if ($$props.runTestWithStepArgs === void 0 && $$bindings.runTestWithStepArgs && runTestWithStepArgs !== void 0) $$bindings.runTestWithStepArgs(runTestWithStepArgs);
  if ($$props.runTest === void 0 && $$bindings.runTest && runTest !== void 0) $$bindings.runTest(runTest);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    set_store_value(testStepStore, $testStepStore[mod.id] = stepArgs, $testStepStore);
    $$rendered = `${validate_component(TestJobLoader, "TestJobLoader").$$render(
      $$result,
      {
        toastError: noEditor,
        this: testJobLoader,
        isLoading: testIsLoading,
        job: testJob
      },
      {
        this: ($$value) => {
          testJobLoader = $$value;
          $$settled = false;
        },
        isLoading: ($$value) => {
          testIsLoading = $$value;
          $$settled = false;
        },
        job: ($$value) => {
          testJob = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Splitpanes, "Splitpanes").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Pane, "Pane").$$render($$result, { size: 50, minSize: 20, class: "p-4" }, {}, {
          default: () => {
            return `${$flowStore.value.same_worker ? `<div class="mb-1 bg-yellow-100 text-yellow-700 p-1 text-xs" data-svelte-h="svelte-gh5zty">The \`./shared\` folder is not passed across individual &quot;Test this step&quot;</div>` : ``} <div class="w-full justify-center flex">${testIsLoading ? `${validate_component(Button, "Button").$$render(
              $$result,
              {
                size: "sm",
                btnClasses: "w-full",
                color: "red"
              },
              {},
              {
                default: () => {
                  return `${validate_component(Loader_2, "Loader2").$$render($$result, { size: 16, class: "animate-spin mr-1" }, {}, {})}
					Cancel`;
                }
              }
            )}` : `${validate_component(Button, "Button").$$render(
              $$result,
              {
                color: "dark",
                btnClasses: "truncate",
                size: "sm",
                shortCut: { Icon: Corner_down_left }
              },
              {},
              {
                default: () => {
                  return `Run`;
                }
              }
            )}`}</div> ${validate_component(ModulePreviewForm, "ModulePreviewForm").$$render(
              $$result,
              {
                pickableProperties,
                mod,
                schema,
                args: stepArgs
              },
              {
                args: ($$value) => {
                  stepArgs = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
          }
        })} ${validate_component(Pane, "Pane").$$render($$result, { size: 50, minSize: 20 }, {}, {
          default: () => {
            return `${validate_component(Splitpanes, "Splitpanes").$$render($$result, { horizontal: true }, {}, {
              default: () => {
                return `${validate_component(Pane, "Pane").$$render($$result, { size: 50, minSize: 10 }, {}, {
                  default: () => {
                    return `${validate_component(LogViewer, "LogViewer").$$render(
                      $$result,
                      {
                        small: true,
                        jobId: testJob?.id,
                        duration: testJob?.["duration_ms"],
                        mem: testJob?.["mem_peak"],
                        content: testJob?.logs,
                        isLoading: testIsLoading,
                        tag: testJob?.tag
                      },
                      {},
                      {}
                    )}`;
                  }
                })} ${validate_component(Pane, "Pane").$$render(
                  $$result,
                  {
                    size: 50,
                    minSize: 10,
                    class: "text-sm text-tertiary"
                  },
                  {},
                  {
                    default: () => {
                      return `${testJob != void 0 && "result" in testJob && testJob.result != void 0 ? `<div class="break-words relative h-full p-2">${validate_component(DisplayResult, "DisplayResult").$$render(
                        $$result,
                        {
                          workspaceId: testJob?.workspace_id,
                          jobId: testJob?.id,
                          result: testJob.result,
                          forceJson
                        },
                        {
                          forceJson: ($$value) => {
                            forceJson = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          "copilot-fix": () => {
                            return `${lang && editor && diffEditor && stepArgs && typeof testJob?.result == "object" && `error` in testJob?.result && testJob?.result.error ? `${validate_component(ScriptFix, "ScriptFix").$$render(
                              $$result,
                              {
                                error: JSON.stringify(testJob.result.error),
                                lang,
                                editor,
                                diffEditor,
                                args: stepArgs
                              },
                              {},
                              {}
                            )}` : ``}`;
                          }
                        }
                      )}</div>` : `<div class="p-2">${testIsLoading ? `${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})}` : `Test to see the result here`}</div>`}`;
                    }
                  }
                )}`;
              }
            })}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_flowStateStore();
  $$unsubscribe_workspaceStore();
  $$unsubscribe_flowStore();
  $$unsubscribe_pathStore();
  $$unsubscribe_testStepStore();
  return $$rendered;
});
const FlowModuleHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let moduleRetry;
  let $workerTags, $$unsubscribe_workerTags;
  let $$unsubscribe_scriptEditorDrawer;
  let $flowStore, $$unsubscribe_flowStore;
  let $$unsubscribe_selectedId;
  $$unsubscribe_workerTags = subscribe(workerTags, (value) => $workerTags = value);
  let { module } = $$props;
  const { scriptEditorDrawer, flowStore, selectedId } = getContext("FlowEditorContext");
  $$unsubscribe_scriptEditorDrawer = subscribe(scriptEditorDrawer, (value) => value);
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => $flowStore = value);
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => value);
  createEventDispatcher();
  let customUi = getContext("customUi");
  loadWorkerGroups();
  async function loadWorkerGroups() {
    if (!$workerTags) {
      set_store_value(workerTags, $workerTags = await WorkerService.getCustomTags(), $workerTags);
    }
  }
  if ($$props.module === void 0 && $$bindings.module && module !== void 0) $$bindings.module(module);
  moduleRetry = module.retry?.constant || module.retry?.exponential;
  $$unsubscribe_workerTags();
  $$unsubscribe_scriptEditorDrawer();
  $$unsubscribe_flowStore();
  $$unsubscribe_selectedId();
  return `<div class="flex flex-row space-x-1">${module.value.type === "script" || module.value.type === "rawscript" || module.value.type == "flow" ? `${moduleRetry ? `${validate_component(Popover, "Popover").$$render(
    $$result,
    {
      placement: "bottom",
      class: "center-center rounded p-2 bg-blue-100 text-blue-800 border border-blue-300 hover:bg-blue-200 dark:bg-frost-700 dark:text-frost-100 dark:border-frost-600"
    },
    {},
    {
      text: () => {
        return `Retries`;
      },
      default: () => {
        return `${validate_component(Repeat, "Repeat").$$render($$result, { size: 14 }, {}, {})}`;
      }
    }
  )}` : ``} ${module?.value?.["concurrent_limit"] != void 0 ? `${validate_component(Popover, "Popover").$$render(
    $$result,
    {
      placement: "bottom",
      class: "center-center rounded p-2 bg-blue-100 text-blue-800 border border-blue-300 hover:bg-blue-200 dark:bg-frost-700 dark:text-frost-100 dark:border-frost-600"
    },
    {},
    {
      text: () => {
        return `Concurrency Limits`;
      },
      default: () => {
        return `${validate_component(Gauge, "Gauge").$$render($$result, { size: 14 }, {}, {})}`;
      }
    }
  )}` : ``} ${module.cache_ttl != void 0 ? `${validate_component(Popover, "Popover").$$render(
    $$result,
    {
      placement: "bottom",
      class: "center-center rounded p-2 bg-blue-100 text-blue-800 border border-blue-300 hover:bg-blue-200 dark:bg-frost-700 dark:text-frost-100 dark:border-frost-600"
    },
    {},
    {
      text: () => {
        return `Cache`;
      },
      default: () => {
        return `${validate_component(Database, "Database").$$render($$result, { size: 14 }, {}, {})}`;
      }
    }
  )}` : ``} ${module.stop_after_if ? `${validate_component(Popover, "Popover").$$render(
    $$result,
    {
      placement: "bottom",
      class: "center-center rounded p-2 bg-blue-100 text-blue-800 border border-blue-300 hover:bg-blue-200 dark:bg-frost-700 dark:text-frost-100 dark:border-frost-600"
    },
    {},
    {
      text: () => {
        return `Early stop/break`;
      },
      default: () => {
        return `${validate_component(Square, "Square").$$render($$result, { size: 14 }, {}, {})}`;
      }
    }
  )}` : ``} ${module.suspend ? `${validate_component(Popover, "Popover").$$render(
    $$result,
    {
      placement: "bottom",
      class: "center-center rounded p-2 bg-blue-100 text-blue-800 border border-blue-300 hover:bg-blue-200 dark:bg-frost-700 dark:text-frost-100 dark:border-frost-600"
    },
    {},
    {
      text: () => {
        return `Suspend`;
      },
      default: () => {
        return `${validate_component(Phone_incoming, "PhoneIncoming").$$render($$result, { size: 14 }, {}, {})}`;
      }
    }
  )}` : ``} ${module.sleep ? `${validate_component(Popover, "Popover").$$render(
    $$result,
    {
      placement: "bottom",
      class: "center-center rounded p-2 bg-blue-100 text-blue-800 border border-blue-300 hover:bg-blue-200 dark:bg-frost-700 dark:text-frost-100 dark:border-frost-600"
    },
    {},
    {
      text: () => {
        return `Sleep`;
      },
      default: () => {
        return `${validate_component(Bed, "Bed").$$render($$result, { size: 14 }, {}, {})}`;
      }
    }
  )}` : ``} ${module.mock?.enabled ? `${validate_component(Popover, "Popover").$$render(
    $$result,
    {
      placement: "bottom",
      class: "center-center rounded p-2 bg-blue-100 text-blue-800 border border-blue-300 hover:bg-blue-200 dark:bg-frost-700 dark:text-frost-100 dark:border-frost-600"
    },
    {},
    {
      text: () => {
        return `Mock`;
      },
      default: () => {
        return `${validate_component(Voicemail, "Voicemail").$$render($$result, { size: 14 }, {}, {})}`;
      }
    }
  )}` : ``}` : ``} ${module.value.type === "script" ? `<div class="w-2"></div> ${!module.value.path.startsWith("hub/") ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: "xs",
      color: "light",
      startIcon: { icon: Pen },
      iconOnly: false,
      disabled: module.value.hash != void 0
    },
    {},
    {
      default: () => {
        return `Edit ${module.value.hash != void 0 ? `(locked hash)` : ``}`;
      }
    }
  )}` : ``} ${customUi?.scriptFork != false ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: "xs",
      color: "light",
      startIcon: { icon: Git_fork },
      iconOnly: false
    },
    {},
    {
      default: () => {
        return `Fork`;
      }
    }
  )}` : ``}` : ``} <div class="px-0.5"></div> ${module.value.type === "rawscript" ? `${$workerTags ? `${$workerTags?.length > 0 ? `<div class="w-40">${$flowStore.tag == void 0 ? `<select placeholder="Tag">${module.value.tag ? `<option value="" data-svelte-h="svelte-1vcxyd9">reset to default</option>` : `<option value="" disabled selected data-svelte-h="svelte-1c72gx5">Tag</option>`}${each($workerTags ?? [], (tag) => {
    return `<option${add_attribute("value", tag, 0)}>${escape(tag)}</option>`;
  })}</select>` : `<button title="Worker Group is defined at the flow level" class="w-full text-left items-center font-normal p-1 border text-xs rounded">Flow&#39;s WG: ${escape($flowStore.tag)}</button>`}</div>` : ``}` : ``} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: "xs",
      color: "light",
      startIcon: { icon: Save },
      iconOnly: false
    },
    {},
    {
      default: () => {
        return `Save to workspace`;
      }
    }
  )}` : ``}</div>`;
});
const FlowModuleCache = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isCacheEnabled;
  let { flowModule } = $$props;
  if ($$props.flowModule === void 0 && $$bindings.flowModule && flowModule !== void 0) $$bindings.flowModule(flowModule);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    isCacheEnabled = Boolean(flowModule.cache_ttl);
    $$rendered = `${validate_component(Section, "Section").$$render(
      $$result,
      {
        label: "Cache",
        class: "flex flex-col gap-4"
      },
      {},
      {
        header: () => {
          return `${validate_component(Tooltip, "Tooltip").$$render(
            $$result,
            {
              documentationLink: "https://www.windmill.dev/docs/flows/cache"
            },
            {},
            {
              default: () => {
                return `If defined, the result of the step will be cached for the number of seconds defined such that
			if this step were to be re-triggered with the same input it would retrieve and return its
			cached value instead of recomputing it.`;
              }
            }
          )} `;
        },
        default: () => {
          return `${flowModule.value.type != "rawscript" ? `<p data-svelte-h="svelte-q1f3yu">The cache settings need to be set in the referenced script/flow settings directly. Cache for
			hub scripts is not available yet.</p>` : `${validate_component(Toggle, "Toggle").$$render(
            $$result,
            {
              checked: isCacheEnabled,
              options: {
                right: "Cache the results for each possible inputs"
              }
            },
            {},
            {}
          )} ${validate_component(Label, "Label").$$render($$result, { label: "How long to keep cache valid" }, {}, {
            default: () => {
              return `${flowModule.cache_ttl ? `${validate_component(SecondsInput, "SecondsInput").$$render(
                $$result,
                { seconds: flowModule.cache_ttl },
                {
                  seconds: ($$value) => {
                    flowModule.cache_ttl = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}` : `${validate_component(SecondsInput, "SecondsInput").$$render($$result, { disabled: true }, {}, {})}`}`;
            }
          })}`}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const StepInputsGen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_flowStore;
  let $$unsubscribe_selectedId;
  let $generatedExprs, $$unsubscribe_generatedExprs;
  let $copilotInfo, $$unsubscribe_copilotInfo;
  let $stepInputCompletionEnabled, $$unsubscribe_stepInputCompletionEnabled;
  $$unsubscribe_copilotInfo = subscribe(copilotInfo, (value) => $copilotInfo = value);
  $$unsubscribe_stepInputCompletionEnabled = subscribe(stepInputCompletionEnabled, (value) => $stepInputCompletionEnabled = value);
  let { pickableProperties = void 0 } = $$props;
  let { argNames = [] } = $$props;
  let { schema } = $$props;
  const { flowStore, selectedId } = getContext("FlowEditorContext");
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => value);
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => value);
  const { exprsToSet, stepInputsLoading, generatedExprs } = getContext("FlowCopilotContext") || {};
  $$unsubscribe_generatedExprs = subscribe(generatedExprs, (value) => $generatedExprs = value);
  let newFlowInputs = [];
  new AbortController();
  let openInputsModal = false;
  if ($$props.pickableProperties === void 0 && $$bindings.pickableProperties && pickableProperties !== void 0) $$bindings.pickableProperties(pickableProperties);
  if ($$props.argNames === void 0 && $$bindings.argNames && argNames !== void 0) $$bindings.argNames(argNames);
  if ($$props.schema === void 0 && $$bindings.schema && schema !== void 0) $$bindings.schema(schema);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="flex flex-row justify-end">${$copilotInfo.exists_openai_resource_path && $stepInputCompletionEnabled ? `${validate_component(FlowCopilotInputsModal, "FlowCopilotInputsModal").$$render(
      $$result,
      {
        inputs: newFlowInputs,
        open: openInputsModal
      },
      {
        open: ($$value) => {
          openInputsModal = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs",
        color: "light",
        btnClasses: twMerge("text-violet-800 dark:text-violet-400", Object.keys($generatedExprs || {}).length > 0 ? "bg-green-100 text-green-800 hover:bg-green-100 dark:text-green-400 dark:bg-green-700 dark:hover:bg-green-700" : ""),
        startIcon: {
          icon: Object.keys($generatedExprs || {}).length > 0 ? Check : Wand_2,
          classes: ""
        },
        disabled: argNames.length === 0
      },
      {},
      {
        default: () => {
          return `${`${Object.keys($generatedExprs || {}).length > 0 ? `Accept` : `Fill inputs`}`}`;
        }
      }
    )}` : `${validate_component(Popup, "Popup").$$render($$result, { floatingConfig: { placement: "top-end" } }, {}, {
      button: () => {
        return `${validate_component(Button, "Button").$$render(
          $$result,
          {
            size: "xs",
            color: "light",
            btnClasses: "text-violet-800 dark:text-violet-400",
            nonCaptureEvent: true,
            startIcon: { icon: Wand_2 }
          },
          {},
          {
            default: () => {
              return `Fill inputs`;
            }
          }
        )} `;
      },
      default: ({ close }) => {
        return `<p class="text-sm">${!$copilotInfo.exists_openai_resource_path ? `Enable Windmill AI in the${escape(" ")} <a href="${escape(base, true) + "/workspace_settings?tab=openai"}" target="_blank" class="inline-flex flex-row items-center gap-1">workspace settings ${validate_component(External_link, "ExternalLink").$$render($$result, { size: 16 }, {}, {})}</a>` : `Enable step input completion in the${escape(" ")} <a href="#user-settings" class="inline-flex flex-row items-center gap-1" data-svelte-h="svelte-32786v">user settings</a>`}</p>`;
      }
    })}`}</div>`;
  } while (!$$settled);
  $$unsubscribe_flowStore();
  $$unsubscribe_selectedId();
  $$unsubscribe_generatedExprs();
  $$unsubscribe_copilotInfo();
  $$unsubscribe_stepInputCompletionEnabled();
  return $$rendered;
});
const InputTransformSchemaForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { schema } = $$props;
  let { args = {} } = $$props;
  let { isValid = true } = $$props;
  let { extraLib = "missing extraLib" } = $$props;
  let { previousModuleId = void 0 } = $$props;
  let { filter = void 0 } = $$props;
  let { noDynamicToggle = false } = $$props;
  let { pickableProperties = void 0 } = $$props;
  let { enableAi = false } = $$props;
  let { class: clazz = "" } = $$props;
  let inputCheck = {};
  createEventDispatcher();
  function setArgs(nargs) {
    args = nargs;
  }
  function removeExtraKey() {
    const nargs = {};
    Object.keys(args ?? {}).forEach((key) => {
      if (keys.includes(key)) {
        nargs[key] = args[key];
      }
    });
    args = nargs;
  }
  let pickForField;
  let itemPicker = void 0;
  let variableEditor = void 0;
  let keys = [];
  if ($$props.schema === void 0 && $$bindings.schema && schema !== void 0) $$bindings.schema(schema);
  if ($$props.args === void 0 && $$bindings.args && args !== void 0) $$bindings.args(args);
  if ($$props.isValid === void 0 && $$bindings.isValid && isValid !== void 0) $$bindings.isValid(isValid);
  if ($$props.extraLib === void 0 && $$bindings.extraLib && extraLib !== void 0) $$bindings.extraLib(extraLib);
  if ($$props.previousModuleId === void 0 && $$bindings.previousModuleId && previousModuleId !== void 0) $$bindings.previousModuleId(previousModuleId);
  if ($$props.filter === void 0 && $$bindings.filter && filter !== void 0) $$bindings.filter(filter);
  if ($$props.noDynamicToggle === void 0 && $$bindings.noDynamicToggle && noDynamicToggle !== void 0) $$bindings.noDynamicToggle(noDynamicToggle);
  if ($$props.pickableProperties === void 0 && $$bindings.pickableProperties && pickableProperties !== void 0) $$bindings.pickableProperties(pickableProperties);
  if ($$props.enableAi === void 0 && $$bindings.enableAi && enableAi !== void 0) $$bindings.enableAi(enableAi);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  if ($$props.setArgs === void 0 && $$bindings.setArgs && setArgs !== void 0) $$bindings.setArgs(setArgs);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    isValid = allTrue(inputCheck) ?? false;
    {
      if (args == void 0 || typeof args !== "object") {
        args = {};
      }
    }
    {
      {
        let lkeys = Object.keys(schema?.properties ?? {});
        if (schema?.properties && JSON.stringify(lkeys) != JSON.stringify(keys)) {
          keys = lkeys;
          removeExtraKey();
        }
      }
    }
    $$rendered = `<div class="${"w-full " + escape(clazz, true)}">${enableAi ? `${validate_component(StepInputsGen, "StepInputsGen").$$render(
      $$result,
      {
        pickableProperties,
        argNames: keys ? keys.filter((argName) => Object.keys(schema.properties ?? {}).includes(argName) && Object.keys(args ?? {}).includes(argName) && (args[argName].type === "static" && !args[argName].value || args[argName].type === "javascript" && !args[argName].expr)) : [],
        schema
      },
      {},
      {}
    )}` : ``} ${keys.length > 0 ? `${each(keys, (argName) => {
      return `${(!filter || filter.includes(argName)) && Object.keys(schema.properties ?? {}).includes(argName) ? `<div class="z-10 pt-4">${validate_component(InputTransformForm, "InputTransformForm").$$render(
        $$result,
        {
          previousModuleId,
          variableEditor,
          itemPicker,
          noDynamicToggle,
          pickableProperties,
          enableAi,
          arg: args[argName],
          schema,
          argName,
          inputCheck: inputCheck[argName],
          extraLib,
          pickForField
        },
        {
          arg: ($$value) => {
            args[argName] = $$value;
            $$settled = false;
          },
          schema: ($$value) => {
            schema = $$value;
            $$settled = false;
          },
          argName: ($$value) => {
            argName = $$value;
            $$settled = false;
          },
          inputCheck: ($$value) => {
            inputCheck[argName] = $$value;
            $$settled = false;
          },
          extraLib: ($$value) => {
            extraLib = $$value;
            $$settled = false;
          },
          pickForField: ($$value) => {
            pickForField = $$value;
            $$settled = false;
          }
        },
        {}
      )} </div>` : ``}`;
    })}` : `<div class="text-tertiary text-sm" data-svelte-h="svelte-5nf1ix">No inputs</div>`}</div> ${validate_component(ItemPicker, "ItemPicker").$$render(
      $$result,
      {
        pickCallback: (path, _) => {
          if (pickForField) {
            args[pickForField].value = "$var:" + path;
          }
        },
        itemName: "Variable",
        extraField: "path",
        loadItems: async () => (await VariableService.listVariable({ workspace: $workspaceStore ?? "" })).map((x) => ({ name: x.path, ...x })),
        this: itemPicker
      },
      {
        this: ($$value) => {
          itemPicker = $$value;
          $$settled = false;
        }
      },
      {
        submission: () => {
          return `<div slot="submission" class="flex flex-row-reverse w-full bg-surface border-t border-gray-200 rounded-bl-lg rounded-br-lg">${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "border",
              color: "blue",
              size: "sm",
              startIcon: { icon: Plus }
            },
            {},
            {
              default: () => {
                return `New Variable`;
              }
            }
          )}</div>`;
        }
      }
    )} ${validate_component(VariableEditor, "VariableEditor").$$render(
      $$result,
      { this: variableEditor },
      {
        this: ($$value) => {
          variableEditor = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const FlowModuleTimeout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let istimeoutEnabled;
  let { flowModule } = $$props;
  if ($$props.flowModule === void 0 && $$bindings.flowModule && flowModule !== void 0) $$bindings.flowModule(flowModule);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    istimeoutEnabled = Boolean(flowModule.timeout);
    $$rendered = `${validate_component(Section, "Section").$$render($$result, { label: "Timeout" }, {}, {
      header: () => {
        return `${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `If defined, the custom timeout will be used instead of the instance timeout for the step. The
			step&#39;s timeout cannot be greater than the instance timeout.`;
          }
        })} `;
      },
      default: () => {
        return `${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            checked: istimeoutEnabled,
            options: {
              right: "Add a custom timeout for this step"
            }
          },
          {},
          {}
        )} <div class="mb-4"><span class="text-xs font-bold" data-svelte-h="svelte-u1gk54">Timeout duration</span> ${flowModule.timeout ? `${validate_component(SecondsInput, "SecondsInput").$$render(
          $$result,
          { seconds: flowModule.timeout },
          {
            seconds: ($$value) => {
              flowModule.timeout = $$value;
              $$settled = false;
            }
          },
          {}
        )}` : `${validate_component(SecondsInput, "SecondsInput").$$render($$result, { disabled: true }, {}, {})}`} <div class="mt-4"></div> ${validate_component(Alert, "Alert").$$render(
          $$result,
          {
            title: "Only used when testing the full flow",
            type: "info"
          },
          {},
          {
            default: () => {
              return `<p class="text-sm" data-svelte-h="svelte-bxqq7b">The timeout will be ignored when running &quot;Test this step&quot;</p>`;
            }
          }
        )}</div>`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
var define_pkg_default = { name: "windy", version: "0.0.1", scripts: { dev: "vite dev", build: "vite build", preview: "vite preview", check: "svelte-check --tsconfig ./tsconfig.json --threshold warning", "check:watch": "svelte-check --tsconfig ./tsconfig.json --watch", lint: "prettier --ignore-path .gitignore --check --plugin-search-dir=. . && eslint --ignore-path .gitignore .", format: "prettier --ignore-path .gitignore --write --plugin-search-dir=. .", package: "svelte-package -o package", "generate-backend-client": "openapi-ts --input ../backend/windmill-api/openapi.yaml --output ./src/lib/gen --useOptions --enums javascript --format false", "generate-backend-client-mac": "openapi-ts --input ../backend/windmill-api/openapi.yaml --output ./src/lib/gen --useOptions --enums javascript", pretest: "tsc --incremental -p tests/tsconfig.json", test: "playwright test --config=tests-out/playwright.config.js", "filter-classes": "node filterTailwindClasses.js" }, devDependencies: { "@floating-ui/core": "^1.3.1", "@hey-api/openapi-ts": "^0.43.0", "@playwright/test": "^1.34.3", "@rgossiaux/svelte-headlessui": "^2.0.0", "@sveltejs/adapter-static": "^3.0.0", "@sveltejs/kit": "^2.0.0", "@sveltejs/package": "^2.2.2", "@sveltejs/vite-plugin-svelte": "^3.0.0", "@tailwindcss/forms": "^0.5.3", "@tailwindcss/typography": "^0.5.8", "@types/d3": "^7.4.0", "@types/d3-zoom": "^3.0.3", "@types/lodash": "^4.14.195", "@types/node": "^20.3.3", "@types/vscode": "^1.83.5", "@typescript-eslint/eslint-plugin": "^5.59.8", "@typescript-eslint/parser": "^5.60.0", "@zerodevx/svelte-toast": "^0.9.5", autoprefixer: "^10.4.13", cssnano: "^6.0.1", "d3-dag": "^0.11.5", eslint: "^8.47.0", "eslint-config-prettier": "^8.6.0", "eslint-plugin-svelte": "^2.33.1", "path-browserify": "^1.0.1", postcss: "^8.4.24", "postcss-load-config": "^4.0.1", prettier: "^2.8.8", "prettier-plugin-svelte": "^2.10.1", "simple-svelte-autocomplete": "^2.5.1", "style-to-object": "^0.4.1", "stylelint-config-recommended": "^13.0.0", svelte: "^4.0.0", "svelte-awesome-color-picker": "^3.0.4", "svelte-check": "^3.4.3", "svelte-floating-ui": "^1.5.8", "svelte-highlight": "^7.6.0", "svelte-multiselect": "^10.0.0", "svelte-popperjs": "^1.3.2", "svelte-preprocess": "^5.0.1", "svelte-range-slider-pips": "^2.3.1", "svelte-splitpanes": "^0.8.0", svelte2tsx: "^0.6.16", tailwindcss: "^3.4.1", tslib: "^2.6.1", typescript: "^5.1.3", vite: "^5", "vite-plugin-circular-dependency": "^0.2.1", yootils: "^0.3.1" }, overrides: { "@rgossiaux/svelte-headlessui": { svelte: "$svelte" }, "ag-grid-svelte": { svelte: "$svelte" }, "svelte-chartjs": { svelte: "$svelte" }, "svelte-timezone-picker": { svelte: "$svelte" }, "monaco-editor": "$monaco-editor", vscode: "$vscode" }, resolutions: { "monaco-editor": "npm:@codingame/monaco-editor-treemended@>=1.83.5 <1.84.0", vscode: "npm:@codingame/monaco-vscode-api@>=1.83.5 <1.84.0" }, type: "module", dependencies: { "@aws-crypto/sha256-js": "^4.0.0", "@json2csv/plainjs": "^7.0.6", "@leeoniya/ufuzzy": "^1.0.8", "@popperjs/core": "^2.11.6", "@redocly/json-to-json-schema": "^0.0.1", "@tanstack/svelte-table": "^8.9.9", "@windmill-labs/svelte-dnd-action": "latest", "ag-charts-community": "^9.0.1", "ag-charts-enterprise": "^9.0.1", "ag-grid-community": "^31.0.0", "ag-grid-enterprise": "^31.0.0", ansi_up: "^5.2.1", "chart.js": "^4.3.0", "chartjs-adapter-date-fns": "^3.0.0", "chartjs-plugin-zoom": "^2.0.0", "d3-zoom": "^3.0.0", "date-fns": "^2.30.0", diff: "^5.1.0", "driver.js": "^1.3.0", "esm-env": "^1.0.0", "fast-equals": "^5.0.1", graphql: "^16.7.1", "hash-sum": "^2.0.0", "highlight.js": "^11.8.0", "lucide-svelte": "^0.293.0", minimatch: "^10.0.1", "monaco-editor": "npm:@codingame/monaco-editor-treemended@>=1.83.5 <1.84.0", "monaco-graphql": "^1.5.1", "monaco-languageclient": "~7.0.1", ol: "^7.4.0", openai: "^4.47.1", "pdfjs-dist": "^3.8.162", quill: "^1.3.7", "svelte-carousel": "^1.0.25", "svelte-chartjs": "^3.1.5", "svelte-exmarkdown": "^3.0.5", "svelte-infinite-loading": "^1.3.8", "svelte-portal": "^2.2.1", "svelte-tiny-virtual-list": "^2.0.5", "tailwind-merge": "^1.13.2", vscode: "npm:@codingame/monaco-vscode-api@>=1.83.5 <1.84.0", "vscode-languageclient": "~9.0.1", "vscode-uri": "~3.0.8", "vscode-ws-jsonrpc": "~3.1.0", "windmill-parser-wasm": "^1.367.2", "windmill-sql-datatype-parser-wasm": "^1.318.0", "y-monaco": "^0.1.4", "y-websocket": "^1.5.0", yaml: "^2.3.4", yjs: "^13.6.7" }, peerDependencies: { svelte: "^4.0.0" }, exports: { "./package.json": "./package.json", ".": { types: "./dist/index.d.ts", svelte: "./dist/index.js" }, "./assets/app.css": "./package/assets/app.css", "./components/TestJobLoader.svelte": { types: "./package/components/TestJobLoader.svelte.d.ts", svelte: "./package/components/TestJobLoader.svelte", default: "./package/components/TestJobLoader.svelte" }, "./components/common/kbd/Kbd.svelte": { types: "./package/components/common/kbd/Kbd.svelte.d.ts", svelte: "./package/components/common/kbd/Kbd.svelte", default: "./package/components/common/kbd/Kbd.svelte" }, "./components/icons/WindmillIcon.svelte": { types: "./package/components/icons/WindmillIcon.d.ts", svelte: "./package/components/icons/WindmillIcon.svelte", default: "./package/components/icons/WindmillIcon.svelte" }, "./components/IconedResourceType.svelte": { types: "./package/components/IconedResourceType.svelte.d.ts", svelte: "./package/components/IconedResourceType.svelte", default: "./package/components/IconedResourceType.svelte" }, "./components/common/drawer/Drawer.svelte": { types: "./package/components/common/drawer/Drawer.svelte.d.ts", svelte: "./package/components/common/drawer/Drawer.svelte", default: "./package/components/common/drawer/Drawer.svelte" }, "./components/common/drawer/DrawerContent.svelte": { types: "./package/components/common/drawer/DrawerContent.svelte.d.ts", svelte: "./package/components/common/drawer/DrawerContent.svelte", default: "./package/components/common/drawer/DrawerContent.svelte" }, "./components/common/button/Button.svelte": { types: "./package/components/common/button/Button.svelte.d.ts", svelte: "./package/components/common/button/Button.svelte", default: "./package/components/common/button/Button.svelte" }, "./components/RadioButton.svelte": { types: "./package/components/RadioButton.svelte.d.ts", svelte: "./package/components/RadioButton.svelte", default: "./package/components/RadioButton.svelte" }, "./components/Toggle.svelte": { types: "./package/components/Toggle.svelte.d.ts", svelte: "./package/components/Toggle.svelte", default: "./package/components/Toggle.svelte" }, "./components/common/tabs/Tabs.svelte": { types: "./package/components/common/tabs/Tabs.svelte.d.ts", svelte: "./package/components/common/tabs/Tabs.svelte", default: "./package/components/common/tabs/Tabs.svelte" }, "./components/common/tabs/Tab.svelte": { types: "./package/components/common/tabs/Tab.svelte.d.ts", svelte: "./package/components/common/tabs/Tab.svelte", default: "./package/components/common/tabs/Tab.svelte" }, "./components/common/alert/Alert.svelte": { types: "./package/components/common/alert/Alert.svelte.d.ts", svelte: "./package/components/common/alert/Alert.svelte", default: "./package/components/common/alert/Alert.svelte" }, "./components/apps/editor/AppPreview.svelte": { types: "./package/components/apps/editor/AppPreview.svelte.d.ts", svelte: "./package/components/apps/editor/AppPreview.svelte", default: "./package/components/apps/editor/AppPreview.svelte" }, "./components/FlowViewer.svelte": { types: "./package/components/FlowViewer.svelte.d.ts", svelte: "./package/components/FlowViewer.svelte", default: "./package/components/FlowViewer.svelte" }, "./components/FlowStatusViewer.svelte": { types: "./package/components/FlowStatusViewer.svelte.d.ts", svelte: "./package/components/FlowStatusViewer.svelte", default: "./package/components/FlowStatusViewer.svelte" }, "./components/FlowBuilder.svelte": { types: "./package/components/FlowBuilder.svelte.d.ts", svelte: "./package/components/FlowBuilder.svelte", default: "./package/components/FlowBuilder.svelte" }, "./components/ScriptBuilder.svelte": { types: "./package/components/ScriptBuilder.svelte.d.ts", svelte: "./package/components/ScriptBuilder.svelte", default: "./package/components/ScriptBuilder.svelte" }, "./components/FlowEditor.svelte": { types: "./package/components/flows/FlowEditor.svelte.d.ts", svelte: "./package/components/flows/FlowEditor.svelte", default: "./package/components/flows/FlowEditor.svelte" }, "./components/SchemaViewer.svelte": { types: "./package/components/SchemaViewer.svelte.d.ts", svelte: "./package/components/SchemaViewer.svelte", default: "./package/components/SchemaViewer.svelte" }, "./components/SchemaForm.svelte": { types: "./package/components/SchemaForm.svelte.d.ts", svelte: "./package/components/SchemaForm.svelte", default: "./package/components/SchemaForm.svelte" }, "./components/EditableSchemaWrapper.svelte": { types: "./package/components/schema/EditableSchemaWrapper.svelte.d.ts", svelte: "./package/components/schema/EditableSchemaWrapper.svelte", default: "./package/components/schema/EditableSchemaWrapper.svelte" }, "./components/ResourceEditor.svelte": { types: "./package/components/ResourceEditor.svelte.d.ts", svelte: "./package/components/ResourceEditor.svelte", default: "./package/components/ResourceEditor.svelte" }, "./components/SchemaEditor.svelte": { types: "./package/components/EditableSchemaForm.svelte.d.ts", svelte: "./package/components/EditableSchemaForm.svelte", default: "./package/components/EditableSchemaForm.svelte" }, "./components/ScriptEditor.svelte": { types: "./package/components/ScriptEditor.svelte.d.ts", svelte: "./package/components/ScriptEditor.svelte", default: "./package/components/ScriptEditor.svelte" }, "./components/scriptEditor/LogPanel.svelte": { types: "./package/components/scriptEditor/LogPanel.svelte.d.ts", svelte: "./package/components/scriptEditor/LogPanel.svelte", default: "./package/components/scriptEditor/LogPanel.svelte" }, "./common": { types: "./package/common.d.ts", default: "./package/common.js" }, "./utils": { types: "./package/utils.d.ts", default: "./package/utils.js" }, "./infer": { types: "./package/infer.d.ts", default: "./package/infer.js" }, "./stores": { types: "./package/stores.d.ts", default: "./package/stores.js" }, "./gen": { types: "./package/gen/index.d.ts", default: "./package/gen/index.js" }, "./components/flows/flowStore": { types: "./package/components/flows/flowStore.d.ts", default: "./package/components/flows/flowStore.js" }, "./components/icons": { types: "./package/components/icons/index.d.ts", svelte: "./package/components/icons/index.js", default: "./package/components/icons/index.js" }, "./components/apps/inputType": { types: "./package/components/apps/inputType.d.ts", default: "./package/components/apps/inputType.js" }, "./components/apps/types": { types: "./package/components/apps/types.d.ts", default: "./package/components/apps/types.js" }, "./components/apps/editor/inlineScriptsPanel/utils": { types: "./package/components/apps/editor/inlineScriptsPanel/utils.d.ts", default: "./package/components/apps/editor/inlineScriptsPanel/utils.js" }, "./gen/core/OpenAPI": { types: "./package/gen/core/OpenAPI.d.ts", default: "./package/gen/core/OpenAPI.js" }, "./components/DropdownV2.svelte": { types: "./package/components/DropdownV2.svelte.d.ts", svelte: "./package/components/DropdownV2.svelte", default: "./package/components/DropdownV2.svelte" } }, files: ["dist", "package"], license: "AGPL-3.0", svelte: "./dist/index.js", typesVersions: { ">4.0": { "components/IconedResourceType.svelte": ["./package/components/IconedResourceType.svelte.d.ts"], "components/TestJobLoader.svelte": ["./package/components/TestJobLoader.svelte.d.ts"], "components/SchemaForm.svelte": ["./package/components/SchemaForm.svelte.d.ts"], "components/icons/WindmillIcon.svelte": ["./package/components/icons/WindmillIcon.svelte.d.ts"], "components/scriptEditor/LogPanel.svelte": ["./package/components/scriptEditor/LogPanel.svelte.d.ts"], "components/ScriptEditor.svelte": ["./package/components/ScriptEditor.svelte.d.ts"], "components/common/kbd/Kbd.svelte": ["./package/components/common/kbd/Kbd.svelte.d.ts"], "components/common/drawer/Drawer.svelte": ["./package/components/common/drawer/Drawer.svelte.d.ts"], "components/common/drawer/DrawerContent.svelte": ["./package/components/common/drawer/DrawerContent.svelte.d.ts"], "components/common/button/Button.svelte": ["./package/components/common/button/Button.svelte.d.ts"], "components/RadioButton.svelte": ["./package/components/RadioButton.svelte.d.ts"], "components/Toggle.svelte": ["./package/components/Toggle.svelte.d.ts"], "components/common/tabs/Tabs.svelte": ["./package/components/common/tabs/Tabs.svelte.d.ts"], "components/common/tabs/Tab.svelte": ["./package/components/common/tabs/Tab.svelte.d.ts"], "components/common/alert/Alert.svelte": ["./package/components/common/alert/Alert.svelte.d.ts"], "components/apps/editor/AppPreview.svelte": ["./package/components/apps/editor/AppPreview.svelte.d.ts"], "components/FlowViewer.svelte": ["./package/components/FlowViewer.svelte.d.ts"], "components/FlowStatusViewer.svelte": ["./package/components/FlowStatusViewer.svelte.d.ts"], "components/FlowBuilder.svelte": ["./package/components/FlowBuilder.svelte.d.ts"], "components/ScriptBuilder.svelte": ["./package/components/ScriptBuilder.svelte.d.ts"], "components/FlowEditor.svelte": ["./package/components/flows/FlowEditor.svelte.d.ts"], "components/SchemaViewer.svelte": ["./package/components/SchemaViewer.svelte.d.ts"], "components/SchemaEditor.svelte": ["./package/components/SchemaEditor.svelte.d.ts"], "components/EditableSchemaWrapper.svelte": ["./package/components/schema/EditableSchemaWrapper.svelte.d.ts"], utils: ["./package/utils.d.ts"], infer: ["./package/infer.d.ts"], common: ["./package/common.d.ts"], stores: ["./package/stores.d.ts"], gen: ["./package/gen/index.d.ts"], "components/flows/flowStore": ["./package/components/flows/flowStore.d.ts"], "components/icons": ["./package/components/icons/index.d.ts"], "components/apps/inputType": ["./package/components/apps/inputType.d.ts"], "components/apps/types": ["./package/components/apps/types.d.ts"], "components/apps/editor/inlineScriptsPanel/utils": ["./package/components/apps/editor/inlineScriptsPanel/utils.d.ts"], "gen/core/OpenAPI": ["./package/gen/core/OpenAPI.d.ts"], "components/DropdownV2.svelte": ["./package/components/DropdownV2.svelte.d.ts"] } }, optionalDependencies: { fsevents: "^2.3.3" }, description: "The Windmill frontend written in Svelte + Tailwind CSS", main: "filterTailwindClasses.js", directories: { test: "tests" }, author: "" };
const deno = {
  s3_client: `import type { S3Object } from "npm:windmill-client@${define_pkg_default.version}";
import * as wmill from "npm:windmill-client@${define_pkg_default.version}";
import { S3Client } from "https://deno.land/x/s3_lite_client@0.2.0/mod.ts";

export async function main(inputFile: S3Object) {
  // this will default to the workspace s3 resource
  let args = await wmill.denoS3LightClientSettings();
  // this will use the designated resource
  // let args = await wmill.denoS3LightClientSettings("<PATH_TO_S3_RESOURCE>");
  const s3Client = new S3Client(args);

  const outputFile = "output/hello.txt"

  // read object from S3
  const getObjectResponse = await s3Client.getObject(inputFile.s3);
  const inputObjContent = await getObjectResponse.text();
  console.log(inputObjContent);

  // write object to S3
  await s3Client.putObject(outputFile, "Hello Windmill!");

  // list objects from bucket
  for await (const obj of s3Client.listObjects({ prefix: "output/" })) {
    console.log(obj.key);
  }

  const result: S3Object = {
    s3: outputFile,
  };
  return result;
}
`
};
const python3 = {
  s3_client: `#requirements:
#boto3==1.34.4
#wmill>=1.229.0

import wmill
from wmill import S3Object
import boto3


def main(input_file: S3Object):
    bucket = wmill.get_resource("<PATH_TO_S3_RESOURCE>")["bucket"]

    # this will default to the workspace s3 resource
    args = wmill.boto3_connection_settings()
    # this will use the designated resource
    # args = wmill.boto3_connection_settings("<PATH_TO_S3_RESOURCE>")
    s3client = boto3.client("s3", **args)

    output_file = "output/hello.txt"

    # read object from S3 and print its content
    input_obj = s3client.get_object(Bucket=bucket, Key=input_file["s3"])["Body"].read()
    print(input_obj)

    # write object to s3
    s3client.put_object(Bucket=bucket, Key=output_file, Body="Hello Windmill!")

    # download file to the job temporary folder:
    s3client.download_file(
        Bucket=bucket, Key=input_file["s3"], Filename="./download.txt"
    )
    with open("./download.txt", mode="rb") as downloaded_file:
        print(downloaded_file.read())

    # upload file from temporary folder to S3
    uploaded_file = "output/uploaded.txt"
    with open("./upload.txt", mode="wb") as file_to_upload:
        file_to_upload.write(str.encode("Hello Windmill!"))
    s3client.upload_file(Bucket=bucket, Key=uploaded_file, Filename="./upload.txt")

    # see https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-examples.html
    # and https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/s3.html
    # for more code examples (listing object, deleting files, etc)
    return [
        S3Object(s3=output_file),
        S3Object(s3=uploaded_file),
    ]
`,
  polars: `#requirements:
#polars==0.20.2
#s3fs==2023.12.0
#wmill>=1.229.0

import wmill
from wmill import S3Object
import polars as pl
import s3fs


def main(input_file: S3Object):
    bucket = wmill.get_resource("<PATH_TO_S3_RESOURCE>")["bucket"]

    # this will default to the workspace s3 resource
    storage_options = wmill.polars_connection_settings().storage_options
    # this will use the designated resource
    # storage_options = wmill.polars_connection_settings("<PATH_TO_S3_RESOURCE>").storage_options

    # input is a parquet file, we use read_parquet in lazy mode.
    # Polars can read various file types, see
    # https://pola-rs.github.io/polars/py-polars/html/reference/io.html
    input_uri = "s3://{}/{}".format(bucket, input_file["s3"])
    input_df = pl.read_parquet(input_uri, storage_options=storage_options).lazy()

    # process the Polars dataframe. See Polars docs:
    # for dataframe: https://pola-rs.github.io/polars/py-polars/html/reference/dataframe/index.html
    # for lazy dataframe: https://pola-rs.github.io/polars/py-polars/html/reference/lazyframe/index.html
    output_df = input_df.collect()
    print(output_df)

    # To write back the result to S3, Polars needs an s3fs connection
    s3 = s3fs.S3FileSystem(**wmill.polars_connection_settings().s3fs_args)
    output_file = "output/result.parquet"
    output_uri = "s3://{}/{}".format(bucket, output_file)
    with s3.open(output_uri, mode="wb") as output_s3:
        # persist the output dataframe back to S3 and return it
        output_df.write_parquet(output_s3)

    return S3Object(s3=output_file)
`,
  duckdb: `#requirements:
#wmill>=1.229.0
#duckdb==0.9.1

import wmill
from wmill import S3Object
import duckdb


def main(input_file: S3Object):
    bucket = wmill.get_resource("u/admin/windmill-cloud-demo")["bucket"]

    # create a DuckDB database in memory
    # see https://duckdb.org/docs/api/python/dbapi
    conn = duckdb.connect()

    # this will default to the workspace s3 resource
    args = wmill.duckdb_connection_settings().connection_settings_str
    # this will use the designated resource
    # args = wmill.duckdb_connection_settings("<PATH_TO_S3_RESOURCE>").connection_settings_str

    # connect duck db to the S3 bucket - this will default to the workspace s3 resource
    conn.execute(args)

    input_uri = "s3://{}/{}".format(bucket, input_file["s3"])
    output_file = "output/result.parquet"
    output_uri = "s3://{}/{}".format(bucket, output_file)

    # Run queries directly on the parquet file
    query_result = conn.sql(
        """
        SELECT * FROM read_parquet('{}')
    """.format(
            input_uri
        )
    )
    query_result.show()

    # Write the result of a query to a different parquet file on S3
    conn.execute(
        """
        COPY (
            SELECT COUNT(*) FROM read_parquet('{input_uri}')
        ) TO '{output_uri}' (FORMAT 'parquet');
    """.format(
            input_uri=input_uri, output_uri=output_uri
        )
    )

    conn.close()
    return S3Object(s3=output_file)
`
};
const s3Scripts = {
  deno,
  python3
};
const FlowModuleComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let stepPropPicker;
  let $flowInputsStore, $$unsubscribe_flowInputsStore;
  let $flowStore, $$unsubscribe_flowStore;
  let $selectedId, $$unsubscribe_selectedId;
  let $flowStateStore, $$unsubscribe_flowStateStore;
  let $previewArgs, $$unsubscribe_previewArgs;
  let $pathStore, $$unsubscribe_pathStore;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  const { selectedId, previewArgs, flowStateStore, flowStore, pathStore, saveDraft, flowInputsStore } = getContext("FlowEditorContext");
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => $selectedId = value);
  $$unsubscribe_previewArgs = subscribe(previewArgs, (value) => $previewArgs = value);
  $$unsubscribe_flowStateStore = subscribe(flowStateStore, (value) => $flowStateStore = value);
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => $flowStore = value);
  $$unsubscribe_pathStore = subscribe(pathStore, (value) => $pathStore = value);
  $$unsubscribe_flowInputsStore = subscribe(flowInputsStore, (value) => $flowInputsStore = value);
  let { flowModule } = $$props;
  let { failureModule = false } = $$props;
  let { parentModule = void 0 } = $$props;
  let { previousModule } = $$props;
  let { scriptKind = "script" } = $$props;
  let { scriptTemplate = "script" } = $$props;
  let { noEditor } = $$props;
  let { enableAi } = $$props;
  let editor;
  let diffEditor;
  let modulePreview;
  let websocketAlive = {
    pyright: false,
    deno: false,
    go: false,
    ruff: false,
    shellcheck: false
  };
  let selected = "inputs";
  let advancedSelected = "retries";
  let advancedRuntimeSelected = "concurrency";
  let s3Kind = "s3_client";
  let wrapper;
  let panes;
  let totalTopGap = 0;
  let validCode = true;
  let width = 1200;
  const { modulesStore: copilotModulesStore } = getContext("FlowCopilotContext") || {};
  function setCopilotModuleEditor() {
    copilotModulesStore?.update((modules) => {
      const module = modules.find((m) => m.id === flowModule.id);
      if (module) {
        module.editor = editor;
      }
      return modules;
    });
  }
  let inputTransformSchemaForm = void 0;
  async function reload(flowModule2) {
    try {
      const { input_transforms, schema } = await loadSchemaFromModule(flowModule2);
      validCode = true;
      if (inputTransformSchemaForm) {
        inputTransformSchemaForm.setArgs(input_transforms);
        if (!deepEqual(schema, $flowStateStore[flowModule2.id]?.schema)) {
          set_store_value(
            flowInputsStore,
            $flowInputsStore[flowModule2?.id] = {
              flowStepWarnings: await initFlowStepWarnings(flowModule2.value, schema ?? {}, dfs($flowStore.value.modules, (fm) => fm.id))
            },
            $flowInputsStore
          );
        }
      } else {
        if (flowModule2.value.type == "rawscript" || flowModule2.value.type == "script" || flowModule2.value.type == "flow") {
          flowModule2.value.input_transforms = input_transforms;
        }
      }
      if (flowModule2.value.type == "rawscript" && flowModule2.value.lock != void 0) {
        flowModule2.value.lock = void 0;
      }
      await tick();
      if (!deepEqual(schema, $flowStateStore[flowModule2.id]?.schema)) {
        if (!$flowStateStore[flowModule2.id]) {
          set_store_value(flowStateStore, $flowStateStore[flowModule2.id] = { schema }, $flowStateStore);
        } else {
          set_store_value(flowStateStore, $flowStateStore[flowModule2.id].schema = schema, $flowStateStore);
        }
      }
    } catch (e) {
      validCode = false;
    }
  }
  let editorPanelSize = noEditor ? 0 : flowModule.value.type == "script" ? 30 : 50;
  let editorSettingsPanelSize = 100 - editorPanelSize;
  function onSelectedIdChange() {
    if (!$flowStateStore?.[$selectedId]?.schema && flowModule) {
      reload(flowModule);
    }
  }
  if ($$props.flowModule === void 0 && $$bindings.flowModule && flowModule !== void 0) $$bindings.flowModule(flowModule);
  if ($$props.failureModule === void 0 && $$bindings.failureModule && failureModule !== void 0) $$bindings.failureModule(failureModule);
  if ($$props.parentModule === void 0 && $$bindings.parentModule && parentModule !== void 0) $$bindings.parentModule(parentModule);
  if ($$props.previousModule === void 0 && $$bindings.previousModule && previousModule !== void 0) $$bindings.previousModule(previousModule);
  if ($$props.scriptKind === void 0 && $$bindings.scriptKind && scriptKind !== void 0) $$bindings.scriptKind(scriptKind);
  if ($$props.scriptTemplate === void 0 && $$bindings.scriptTemplate && scriptTemplate !== void 0) $$bindings.scriptTemplate(scriptTemplate);
  if ($$props.noEditor === void 0 && $$bindings.noEditor && noEditor !== void 0) $$bindings.noEditor(noEditor);
  if ($$props.enableAi === void 0 && $$bindings.enableAi && enableAi !== void 0) $$bindings.enableAi(enableAi);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    editor !== void 0 && setCopilotModuleEditor();
    stepPropPicker = failureModule ? getFailureStepPropPicker($flowStateStore, $flowStore, $previewArgs) : getStepPropPicker($flowStateStore, parentModule, previousModule, flowModule.id, $flowStore, $previewArgs);
    $selectedId && onSelectedIdChange();
    $$rendered = ` ${flowModule.value ? `<div class="h-full"${add_attribute("this", wrapper, 0)}>${validate_component(FlowCard, "FlowCard").$$render(
      $$result,
      { noEditor, flowModule },
      {
        flowModule: ($$value) => {
          flowModule = $$value;
          $$settled = false;
        }
      },
      {
        header: () => {
          return `${validate_component(FlowModuleHeader, "FlowModuleHeader").$$render(
            $$result,
            { module: flowModule },
            {
              module: ($$value) => {
                flowModule = $$value;
                $$settled = false;
              }
            },
            {}
          )} `;
        },
        default: () => {
          return `${flowModule.value.type === "rawscript" && !noEditor ? `<div class="border-b-2 shadow-sm px-1">${validate_component(EditorBar, "EditorBar").$$render(
            $$result,
            {
              validCode,
              editor,
              diffEditor,
              lang: flowModule.value["language"] ?? "deno",
              websocketAlive,
              iconOnly: width < 950,
              kind: scriptKind,
              template: scriptTemplate,
              args: Object.entries(flowModule.value.input_transforms).reduce(
                (acc, [key, obj]) => {
                  acc[key] = obj.type === "static" ? obj.value : void 0;
                  return acc;
                },
                {}
              )
            },
            {},
            {}
          )}</div>` : ``} <div class="h-full" style="${"max-height: calc(100% - " + escape(totalTopGap, true) + "px) !important;"}" id="flow-editor-editor"${add_attribute("this", panes, 0)}>${validate_component(Splitpanes, "Splitpanes").$$render($$result, { horizontal: true }, {}, {
            default: () => {
              return `${validate_component(Pane, "Pane").$$render(
                $$result,
                { minSize: 20, size: editorPanelSize },
                {
                  size: ($$value) => {
                    editorPanelSize = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `${flowModule.value.type === "rawscript" ? `${!noEditor ? `${validate_component(Editor, "Editor").$$render(
                      $$result,
                      {
                        folding: true,
                        path: $pathStore + "/" + flowModule.id,
                        class: "h-full relative",
                        lang: scriptLangToEditorLang(flowModule.value.language),
                        scriptLang: flowModule.value.language,
                        automaticLayout: true,
                        cmdEnterAction: async () => {
                          selected = "test";
                          if ($selectedId == flowModule.id) {
                            if (flowModule.value.type === "rawscript") {
                              flowModule.value.content = editor.getCode();
                            }
                            await reload(flowModule);
                            modulePreview?.runTestWithStepArgs();
                          }
                        },
                        formatAction: () => {
                          reload(flowModule);
                          saveDraft();
                        },
                        fixedOverflowWidgets: true,
                        args: Object.entries(flowModule.value.input_transforms).reduce(
                          (acc, [key, obj]) => {
                            acc[key] = obj.type === "static" ? obj.value : void 0;
                            return acc;
                          },
                          {}
                        ),
                        websocketAlive,
                        this: editor,
                        code: flowModule.value.content
                      },
                      {
                        websocketAlive: ($$value) => {
                          websocketAlive = $$value;
                          $$settled = false;
                        },
                        this: ($$value) => {
                          editor = $$value;
                          $$settled = false;
                        },
                        code: ($$value) => {
                          flowModule.value.content = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )} ${validate_component(DiffEditor, "DiffEditor").$$render(
                      $$result,
                      {
                        automaticLayout: true,
                        fixedOverflowWidgets: true,
                        class: "hidden h-full",
                        this: diffEditor
                      },
                      {
                        this: ($$value) => {
                          diffEditor = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}` : ``}` : `${flowModule.value.type === "script" ? `${!noEditor ? `<div class="border-t">${validate_component(FlowModuleScript, "FlowModuleScript").$$render(
                      $$result,
                      {
                        showAllCode: false,
                        path: flowModule.value.path,
                        hash: flowModule.value.hash
                      },
                      {},
                      {}
                    )}</div>` : ``}` : `${flowModule.value.type === "flow" ? `${validate_component(FlowPathViewer, "FlowPathViewer").$$render($$result, { path: flowModule.value.path }, {}, {})}` : ``}`}`}`;
                  }
                }
              )} ${validate_component(Pane, "Pane").$$render(
                $$result,
                {
                  minSize: 20,
                  size: editorSettingsPanelSize
                },
                {
                  size: ($$value) => {
                    editorSettingsPanelSize = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `${validate_component(Tabs, "Tabs").$$render(
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
                          return `${validate_component(Tab, "Tab").$$render($$result, { value: "inputs" }, {}, {
                            default: () => {
                              return `Step Input`;
                            }
                          })} ${validate_component(Tab, "Tab").$$render($$result, { value: "test" }, {}, {
                            default: () => {
                              return `Test this step`;
                            }
                          })} ${validate_component(Tab, "Tab").$$render($$result, { value: "advanced" }, {}, {
                            default: () => {
                              return `Advanced`;
                            }
                          })}`;
                        }
                      }
                    )} <div${add_attribute(
                      "class",
                      advancedSelected === "runtime" ? "h-[calc(100%-68px)]" : "h-[calc(100%-34px)]",
                      0
                    )}>${selected === "inputs" && (flowModule.value.type == "rawscript" || flowModule.value.type == "script" || flowModule.value.type == "flow") ? `<div class="h-full overflow-auto" id="flow-editor-step-input">${validate_component(PropPickerWrapper, "PropPickerWrapper").$$render(
                      $$result,
                      {
                        pickableProperties: stepPropPicker.pickableProperties,
                        error: failureModule
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(InputTransformSchemaForm, "InputTransformSchemaForm").$$render(
                            $$result,
                            {
                              pickableProperties: stepPropPicker.pickableProperties,
                              schema: $flowStateStore[$selectedId]?.schema ?? {},
                              previousModuleId: previousModule?.id,
                              extraLib: stepPropPicker.extraLib,
                              enableAi,
                              this: inputTransformSchemaForm,
                              args: flowModule.value.input_transforms
                            },
                            {
                              this: ($$value) => {
                                inputTransformSchemaForm = $$value;
                                $$settled = false;
                              },
                              args: ($$value) => {
                                flowModule.value.input_transforms = $$value;
                                $$settled = false;
                              }
                            },
                            {}
                          )}`;
                        }
                      }
                    )}</div>` : `${selected === "test" ? `${validate_component(ModulePreview, "ModulePreview").$$render(
                      $$result,
                      {
                        pickableProperties: stepPropPicker.pickableProperties,
                        mod: flowModule,
                        editor,
                        diffEditor,
                        noEditor,
                        lang: flowModule.value["language"] ?? "deno",
                        schema: $flowStateStore[$selectedId]?.schema ?? {},
                        this: modulePreview
                      },
                      {
                        this: ($$value) => {
                          modulePreview = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}` : `${selected === "advanced" ? `${validate_component(Tabs, "Tabs").$$render(
                      $$result,
                      { selected: advancedSelected },
                      {
                        selected: ($$value) => {
                          advancedSelected = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `${validate_component(Tab, "Tab").$$render(
                            $$result,
                            {
                              value: "retries",
                              active: flowModule.retry !== void 0
                            },
                            {},
                            {
                              default: () => {
                                return `Retries`;
                              }
                            }
                          )} ${!$selectedId.includes("failure") ? `${validate_component(Tab, "Tab").$$render($$result, { value: "runtime" }, {}, {
                            default: () => {
                              return `Runtime`;
                            }
                          })} ${validate_component(Tab, "Tab").$$render(
                            $$result,
                            {
                              value: "cache",
                              active: Boolean(flowModule.cache_ttl)
                            },
                            {},
                            {
                              default: () => {
                                return `Cache`;
                              }
                            }
                          )} ${validate_component(Tab, "Tab").$$render(
                            $$result,
                            {
                              value: "early-stop",
                              active: Boolean(flowModule.stop_after_if)
                            },
                            {},
                            {
                              default: () => {
                                return `Early Stop`;
                              }
                            }
                          )} ${validate_component(Tab, "Tab").$$render(
                            $$result,
                            {
                              value: "suspend",
                              active: Boolean(flowModule.suspend)
                            },
                            {},
                            {
                              default: () => {
                                return `Suspend`;
                              }
                            }
                          )} ${validate_component(Tab, "Tab").$$render(
                            $$result,
                            {
                              value: "sleep",
                              active: Boolean(flowModule.sleep)
                            },
                            {},
                            {
                              default: () => {
                                return `Sleep`;
                              }
                            }
                          )} ${validate_component(Tab, "Tab").$$render(
                            $$result,
                            {
                              value: "mock",
                              active: Boolean(flowModule.mock?.enabled)
                            },
                            {},
                            {
                              default: () => {
                                return `Mock`;
                              }
                            }
                          )} ${validate_component(Tab, "Tab").$$render($$result, { value: "same_worker" }, {}, {
                            default: () => {
                              return `Shared Directory`;
                            }
                          })} ${flowModule.value["language"] === "python3" || flowModule.value["language"] === "deno" ? `${validate_component(Tab, "Tab").$$render($$result, { value: "s3" }, {}, {
                            default: () => {
                              return `S3`;
                            }
                          })}` : ``}` : ``}`;
                        }
                      }
                    )} ${advancedSelected === "runtime" ? `${validate_component(Tabs, "Tabs").$$render(
                      $$result,
                      { selected: advancedRuntimeSelected },
                      {
                        selected: ($$value) => {
                          advancedRuntimeSelected = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `${validate_component(Tab, "Tab").$$render($$result, { value: "concurrency" }, {}, {
                            default: () => {
                              return `Concurrency`;
                            }
                          })} ${validate_component(Tab, "Tab").$$render($$result, { value: "timeout" }, {}, {
                            default: () => {
                              return `Timeout`;
                            }
                          })} ${validate_component(Tab, "Tab").$$render($$result, { value: "priority" }, {}, {
                            default: () => {
                              return `Priority`;
                            }
                          })} ${validate_component(Tab, "Tab").$$render($$result, { value: "lifetime" }, {}, {
                            default: () => {
                              return `Lifetime`;
                            }
                          })}`;
                        }
                      }
                    )}` : ``} <div class="h-[calc(100%-32px)] overflow-auto p-4">${advancedSelected === "retries" ? `${validate_component(Section, "Section").$$render($$result, { label: "Retries" }, {}, {
                      header: () => {
                        return `${validate_component(Tooltip, "Tooltip").$$render(
                          $$result,
                          {
                            documentationLink: "https://www.windmill.dev/docs/flows/retries"
                          },
                          {},
                          {
                            default: () => {
                              return `If defined, upon error this step will be retried with a delay and a
													maximum number of attempts as defined below.`;
                            }
                          }
                        )} `;
                      },
                      default: () => {
                        return `<span class="text-2xs" data-svelte-h="svelte-12cljcw">After all retries attempts have been exhausted:</span> <div class="flex gap-2 mb-4">${validate_component(Toggle, "Toggle").$$render(
                          $$result,
                          {
                            size: "xs",
                            options: {
                              left: "Stop on error and propagate error up",
                              right: "Continue on error with error as step's return"
                            },
                            checked: flowModule.continue_on_error
                          },
                          {
                            checked: ($$value) => {
                              flowModule.continue_on_error = $$value;
                              $$settled = false;
                            }
                          },
                          {}
                        )} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                          default: () => {
                            return `When enabled, the flow will continue to the next step after going through
													all the retries (if any) even if this step fails. This enables to process
													the error in a branch one for instance.`;
                          }
                        })}</div> <div class="my-8"></div> ${validate_component(FlowRetries, "FlowRetries").$$render(
                          $$result,
                          { flowModuleRetry: flowModule.retry },
                          {
                            flowModuleRetry: ($$value) => {
                              flowModule.retry = $$value;
                              $$settled = false;
                            }
                          },
                          {}
                        )}`;
                      }
                    })}` : `${advancedSelected === "runtime" && advancedRuntimeSelected === "concurrency" ? `${validate_component(Section, "Section").$$render(
                      $$result,
                      {
                        label: "Concurrency Limits",
                        class: "flex flex-col gap-4",
                        eeOnly: true
                      },
                      {},
                      {
                        header: () => {
                          return `${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                            default: () => {
                              return `Allowed concurrency within a given timeframe`;
                            }
                          })} `;
                        },
                        default: () => {
                          return `${flowModule.value.type == "rawscript" ? `${validate_component(Label, "Label").$$render(
                            $$result,
                            {
                              label: "Max number of executions within the time window"
                            },
                            {},
                            {
                              default: () => {
                                return `<div class="flex flex-row gap-2 max-w-sm"><input ${!$enterpriseLicense ? "disabled" : ""} type="number"${add_attribute("value", flowModule.value.concurrent_limit, 0)}> ${validate_component(Button, "Button").$$render(
                                  $$result,
                                  {
                                    size: "xs",
                                    color: "light",
                                    variant: "border"
                                  },
                                  {},
                                  {
                                    default: () => {
                                      return `<div class="flex flex-row gap-2" data-svelte-h="svelte-163gbzj">Remove Limits</div>`;
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
                                  seconds: flowModule.value.concurrency_time_window_s
                                },
                                {
                                  seconds: ($$value) => {
                                    flowModule.value.concurrency_time_window_s = $$value;
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
                                    return `Concurrency keys are global, you can have them be workspace specific
															using the variable \`$workspace\`. You can also use an argument&#39;s value
															using \`$args[name_of_arg]\``;
                                  }
                                })} `;
                              },
                              default: () => {
                                return `<input type="text" autofocus ${!$enterpriseLicense ? "disabled" : ""}${add_attribute("placeholder", `$workspace/script/${$pathStore}-$args[foo]`, 0)}${add_attribute("value", flowModule.value.custom_concurrency_key, 0)}>`;
                              }
                            }
                          )}` : `${validate_component(Alert, "Alert").$$render(
                            $$result,
                            {
                              type: "warning",
                              title: "Limitation",
                              size: "xs"
                            },
                            {},
                            {
                              default: () => {
                                return `The concurrency limit of a workspace script is only settable in the script
													metadata itself. For hub scripts, this feature is non available yet.`;
                              }
                            }
                          )}`}`;
                        }
                      }
                    )}` : `${advancedSelected === "runtime" && advancedRuntimeSelected === "timeout" ? `<div>${validate_component(FlowModuleTimeout, "FlowModuleTimeout").$$render(
                      $$result,
                      { flowModule },
                      {
                        flowModule: ($$value) => {
                          flowModule = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</div>` : `${advancedSelected === "runtime" && advancedRuntimeSelected === "priority" ? `${validate_component(Section, "Section").$$render(
                      $$result,
                      {
                        label: "Priority",
                        class: "flex flex-col gap-4"
                      },
                      {},
                      {
                        default: () => {
                          return ` ${validate_component(Toggle, "Toggle").$$render(
                            $$result,
                            {
                              disabled: !$enterpriseLicense || isCloudHosted(),
                              checked: flowModule.priority !== void 0 && flowModule.priority > 0,
                              options: {
                                right: "Enabled high priority flow step",
                                rightTooltip: `Jobs scheduled from this step when the flow is executed are labeled as high priority and take precedence over the other jobs in the jobs queue. ${!$enterpriseLicense ? "This is a feature only available on enterprise edition." : ""}`
                              }
                            },
                            {},
                            {}
                          )} ${validate_component(Label, "Label").$$render($$result, { label: "Priority number" }, {}, {
                            header: () => {
                              return `${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                                default: () => {
                                  return `The higher the number, the higher the priority.`;
                                }
                              })} `;
                            },
                            default: () => {
                              return `<input type="number" class="!w-24" ${flowModule.priority === void 0 ? "disabled" : ""}${add_attribute("value", flowModule.priority, 0)}>`;
                            }
                          })} ${validate_component(Alert, "Alert").$$render(
                            $$result,
                            {
                              type: "warning",
                              title: "Limitation",
                              size: "xs"
                            },
                            {},
                            {
                              default: () => {
                                return `Setting priority is only available for enterprise edition and not available
												on the cloud.`;
                              }
                            }
                          )}`;
                        }
                      }
                    )}` : `${advancedSelected === "runtime" && advancedRuntimeSelected === "lifetime" ? `<div>${validate_component(FlowModuleDeleteAfterUse, "FlowModuleDeleteAfterUse").$$render(
                      $$result,
                      {
                        disabled: !$enterpriseLicense,
                        flowModule
                      },
                      {
                        flowModule: ($$value) => {
                          flowModule = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</div>` : `${advancedSelected === "cache" ? `<div>${validate_component(FlowModuleCache, "FlowModuleCache").$$render(
                      $$result,
                      { flowModule },
                      {
                        flowModule: ($$value) => {
                          flowModule = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</div>` : `${advancedSelected === "early-stop" ? `${validate_component(FlowModuleEarlyStop, "FlowModuleEarlyStop").$$render(
                      $$result,
                      { flowModule },
                      {
                        flowModule: ($$value) => {
                          flowModule = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}` : `${advancedSelected === "suspend" ? `<div>${validate_component(FlowModuleSuspend, "FlowModuleSuspend").$$render(
                      $$result,
                      {
                        previousModuleId: previousModule?.id,
                        flowModule
                      },
                      {
                        flowModule: ($$value) => {
                          flowModule = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</div>` : `${advancedSelected === "sleep" ? `<div>${validate_component(FlowModuleSleep, "FlowModuleSleep").$$render(
                      $$result,
                      {
                        previousModuleId: previousModule?.id,
                        flowModule
                      },
                      {
                        flowModule: ($$value) => {
                          flowModule = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</div>` : `${advancedSelected === "mock" ? `<div>${validate_component(FlowModuleMock, "FlowModuleMock").$$render(
                      $$result,
                      { flowModule },
                      {
                        flowModule: ($$value) => {
                          flowModule = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</div>` : `${advancedSelected === "same_worker" ? `<div>${validate_component(Alert, "Alert").$$render(
                      $$result,
                      {
                        type: "info",
                        title: "Share a directory between steps"
                      },
                      {},
                      {
                        default: () => {
                          return `If shared directory is set, will share a folder that will be mounted on
												\`./shared\` for each of them to pass data between each other.`;
                        }
                      }
                    )} ${validate_component(Button, "Button").$$render($$result, { btnClasses: "mt-4" }, {}, {
                      default: () => {
                        return `Set shared directory in the flow settings`;
                      }
                    })}</div>` : `${advancedSelected === "s3" ? `<div><h2 class="pb-4">S3 snippets
												${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                      default: () => {
                        return `Read/Write object from/to S3 and leverage Polars and DuckDB to run
													efficient ETL processes.`;
                      }
                    })}</h2></div> <div class="flex gap-2 justify-between mb-4 items-center"><div class="flex gap-2">${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
                      $$result,
                      { class: "w-auto", selected: s3Kind },
                      {
                        selected: ($$value) => {
                          s3Kind = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `${flowModule.value["language"] === "deno" ? `${validate_component(ToggleButton, "ToggleButton").$$render(
                            $$result,
                            {
                              value: "s3_client",
                              size: "sm",
                              label: "S3 lite client"
                            },
                            {},
                            {}
                          )}` : `${validate_component(ToggleButton, "ToggleButton").$$render(
                            $$result,
                            {
                              value: "s3_client",
                              size: "sm",
                              label: "Boto3"
                            },
                            {},
                            {}
                          )} ${validate_component(ToggleButton, "ToggleButton").$$render(
                            $$result,
                            {
                              value: "polars",
                              size: "sm",
                              label: "Polars"
                            },
                            {},
                            {}
                          )} ${validate_component(ToggleButton, "ToggleButton").$$render(
                            $$result,
                            {
                              value: "duckdb",
                              size: "sm",
                              label: "DuckDB"
                            },
                            {},
                            {}
                          )}`}`;
                        }
                      }
                    )}</div> ${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
                      default: () => {
                        return `Apply snippet`;
                      }
                    })}</div> ${validate_component(HighlightCode, "HighlightCode").$$render(
                      $$result,
                      {
                        language: flowModule.value["language"],
                        code: s3Scripts[flowModule.value["language"]][s3Kind]
                      },
                      {},
                      {}
                    )}` : ``}`}`}`}`}`}`}`}`}`}`}`}</div>` : ``}`}`}</div>`;
                  }
                }
              )}`;
            }
          })}</div>`;
        }
      }
    )}</div>` : `Incorrect flow module type`}`;
  } while (!$$settled);
  $$unsubscribe_flowInputsStore();
  $$unsubscribe_flowStore();
  $$unsubscribe_selectedId();
  $$unsubscribe_flowStateStore();
  $$unsubscribe_previewArgs();
  $$unsubscribe_pathStore();
  $$unsubscribe_enterpriseLicense();
  return $$rendered;
});
const FlowBranchAllWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { noEditor } = $$props;
  let { branch } = $$props;
  if ($$props.noEditor === void 0 && $$bindings.noEditor && noEditor !== void 0) $$bindings.noEditor(noEditor);
  if ($$props.branch === void 0 && $$bindings.branch && branch !== void 0) $$bindings.branch(branch);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="h-full flex flex-col">${validate_component(FlowCard, "FlowCard").$$render($$result, { noEditor, title: "Branch" }, {}, {
      header: () => {
        return `<div slot="header" class="grow"><input${add_attribute("placeholder", "Summary", 0)}${add_attribute("value", branch.summary, 0)}></div>`;
      },
      default: () => {
        return `<div class="p-4"><div class="mt-2 mb-2 text-sm font-bold" data-svelte-h="svelte-15hre3g">Skip failures</div> ${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            options: { right: "Skip failures" },
            checked: branch.skip_failure
          },
          {
            checked: ($$value) => {
              branch.skip_failure = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div>`;
      }
    })}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const PredicateGen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_selectedId;
  let $$unsubscribe_flowStore;
  let $copilotInfo, $$unsubscribe_copilotInfo;
  let $stepInputCompletionEnabled, $$unsubscribe_stepInputCompletionEnabled;
  $$unsubscribe_copilotInfo = subscribe(copilotInfo, (value) => $copilotInfo = value);
  $$unsubscribe_stepInputCompletionEnabled = subscribe(stepInputCompletionEnabled, (value) => $stepInputCompletionEnabled = value);
  let loading = false;
  let { pickableProperties = void 0 } = $$props;
  let instructions = "";
  let instructionsField = void 0;
  new AbortController();
  const { flowStore, selectedId } = getContext("FlowEditorContext");
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => value);
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => value);
  createEventDispatcher();
  if ($$props.pickableProperties === void 0 && $$bindings.pickableProperties && pickableProperties !== void 0) $$bindings.pickableProperties(pickableProperties);
  $$unsubscribe_selectedId();
  $$unsubscribe_flowStore();
  $$unsubscribe_copilotInfo();
  $$unsubscribe_stepInputCompletionEnabled();
  return `${$copilotInfo.exists_openai_resource_path && $stepInputCompletionEnabled ? `${validate_component(Popup, "Popup").$$render(
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
            color: "light",
            size: "xs",
            nonCaptureEvent: !loading,
            startIcon: { icon: Wand_2 },
            iconOnly: true,
            title: "AI Assistant",
            btnClasses: "min-h-[30px] text-violet-800 dark:text-violet-400 bg-violet-100 dark:bg-gray-700",
            loading,
            clickableWhileLoading: true
          },
          {},
          {}
        )} `;
      },
      default: ({ close }) => {
        return `<div class="flex w-96"><input type="text" placeholder="Predicate description"${add_attribute("this", instructionsField, 0)}${add_attribute("value", instructions, 0)}> ${validate_component(Button, "Button").$$render(
          $$result,
          {
            size: "xs",
            color: "light",
            variant: "contained",
            buttonType: "button",
            btnClasses: "!p-1 !w-[38px] !ml-2 text-violet-800 dark:text-violet-400 bg-violet-100 dark:bg-gray-700",
            title: "Generate predicate from prompt",
            "aria-label": "Generate",
            iconOnly: true,
            disabled: instructions.length == 0,
            startIcon: { icon: Wand_2 }
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}` : ``}`;
});
const BranchPredicateEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let stepPropPicker;
  let $previewArgs, $$unsubscribe_previewArgs;
  let $flowStore, $$unsubscribe_flowStore;
  let $flowStateStore, $$unsubscribe_flowStateStore;
  let { branch } = $$props;
  let { parentModule } = $$props;
  let { previousModule } = $$props;
  let { enableAi = false } = $$props;
  const { previewArgs, flowStateStore, flowStore } = getContext("FlowEditorContext");
  $$unsubscribe_previewArgs = subscribe(previewArgs, (value) => $previewArgs = value);
  $$unsubscribe_flowStateStore = subscribe(flowStateStore, (value) => $flowStateStore = value);
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => $flowStore = value);
  if ($$props.branch === void 0 && $$bindings.branch && branch !== void 0) $$bindings.branch(branch);
  if ($$props.parentModule === void 0 && $$bindings.parentModule && parentModule !== void 0) $$bindings.parentModule(parentModule);
  if ($$props.previousModule === void 0 && $$bindings.previousModule && previousModule !== void 0) $$bindings.previousModule(previousModule);
  if ($$props.enableAi === void 0 && $$bindings.enableAi && enableAi !== void 0) $$bindings.enableAi(enableAi);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    stepPropPicker = getStepPropPicker($flowStateStore, parentModule, previousModule, parentModule.id, $flowStore, $previewArgs);
    $$rendered = `${`<div class="flex justify-between gap-4 p-2"><div class="truncate"><pre class="text-sm truncate">${escape(branch.expr)}</pre></div> <div class="flex flex-row gap-2 items-center">${enableAi ? `${validate_component(PredicateGen, "PredicateGen").$$render(
      $$result,
      {
        pickableProperties: stepPropPicker.pickableProperties
      },
      {},
      {}
    )}` : ``} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs",
        startIcon: { icon: Pen },
        variant: "border",
        id: "flow-editor-edit-predicate"
      },
      {},
      {
        default: () => {
          return `Edit Predicate`;
        }
      }
    )}</div></div>`}`;
  } while (!$$settled);
  $$unsubscribe_previewArgs();
  $$unsubscribe_flowStore();
  $$unsubscribe_flowStateStore();
  return $$rendered;
});
const FlowBranchOneWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { branch } = $$props;
  let { parentModule } = $$props;
  let { previousModule } = $$props;
  let { noEditor } = $$props;
  let { enableAi = false } = $$props;
  if ($$props.branch === void 0 && $$bindings.branch && branch !== void 0) $$bindings.branch(branch);
  if ($$props.parentModule === void 0 && $$bindings.parentModule && parentModule !== void 0) $$bindings.parentModule(parentModule);
  if ($$props.previousModule === void 0 && $$bindings.previousModule && previousModule !== void 0) $$bindings.previousModule(previousModule);
  if ($$props.noEditor === void 0 && $$bindings.noEditor && noEditor !== void 0) $$bindings.noEditor(noEditor);
  if ($$props.enableAi === void 0 && $$bindings.enableAi && enableAi !== void 0) $$bindings.enableAi(enableAi);
  return `<div class="h-full flex flex-col">${validate_component(FlowCard, "FlowCard").$$render($$result, { noEditor, title: "Branch" }, {}, {
    header: () => {
      return `<div slot="header" class="grow"><input${add_attribute("placeholder", "Summary", 0)}${add_attribute("value", branch.summary, 0)}></div>`;
    },
    default: () => {
      return `<div class="overflow-hidden flex-grow"><h3 class="p-2" data-svelte-h="svelte-136zflx">Predicate expression</h3> ${validate_component(BranchPredicateEditor, "BranchPredicateEditor").$$render(
        $$result,
        {
          branch,
          parentModule,
          previousModule,
          enableAi
        },
        {},
        {}
      )}</div>`;
    }
  })}</div>`;
});
const FlowInputs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let langs;
  let $defaultScripts, $$unsubscribe_defaultScripts;
  $$unsubscribe_defaultScripts = subscribe(defaultScripts, (value) => $defaultScripts = value);
  let { failureModule } = $$props;
  let { shouldDisableTriggerScripts = false } = $$props;
  let { noEditor } = $$props;
  let { summary = void 0 } = $$props;
  createEventDispatcher();
  let kind = failureModule ? "failure" : summary == "Trigger" ? "trigger" : summary == "Approval" ? "approval" : "script";
  let pick_existing = "hub";
  let filter = "";
  function displayLang(lang, kind2) {
    if (lang == "bun" || lang == "python3" || lang == "deno") {
      return true;
    }
    if (lang == "go") {
      return kind2 == "script" || kind2 == "trigger" || failureModule;
    }
    if (lang == "bash" || lang == "nativets") {
      return kind2 == "script";
    }
    return kind2 == "script" && !failureModule;
  }
  let customUi = getContext("customUi");
  if ($$props.failureModule === void 0 && $$bindings.failureModule && failureModule !== void 0) $$bindings.failureModule(failureModule);
  if ($$props.shouldDisableTriggerScripts === void 0 && $$bindings.shouldDisableTriggerScripts && shouldDisableTriggerScripts !== void 0) $$bindings.shouldDisableTriggerScripts(shouldDisableTriggerScripts);
  if ($$props.noEditor === void 0 && $$bindings.noEditor && noEditor !== void 0) $$bindings.noEditor(noEditor);
  if ($$props.summary === void 0 && $$bindings.summary && summary !== void 0) $$bindings.summary(summary);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    langs = processLangs(void 0, $defaultScripts?.order ?? Object.keys(defaultScriptLanguages)).map((l) => [defaultScriptLanguages[l], l]).filter((x) => $defaultScripts?.hidden == void 0 || !$defaultScripts.hidden.includes(x[1]));
    $$rendered = `<div class="p-4 h-full flex flex-col" id="flow-editor-flow-inputs">${summary == "Terminate flow" ? `${validate_component(Alert, "Alert").$$render(
      $$result,
      {
        role: "info",
        title: "The flow stops here"
      },
      {},
      {
        default: () => {
          return `This is an identity step with an early stop that has &#39;true&#39; for expression`;
        }
      }
    )}` : `${!failureModule ? ` <div class="center-center"><div class="max-w-min">${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
      $$result,
      { selected: kind },
      {
        selected: ($$value) => {
          kind = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              value: "script",
              icon: Code,
              label: "Action",
              tooltip: "An action script is simply a script that is neither a trigger nor an approval script. Those are the majority of the scripts."
            },
            {},
            {}
          )} ${!shouldDisableTriggerScripts ? `${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              value: "trigger",
              icon: Zap,
              label: "Trigger",
              tooltip: "Used as a first step most commonly with a state and a schedule to watch for changes on an external system, compute the diff since last time and set the new state. The diffs are then treated one by one with a for-loop."
            },
            {},
            {}
          )}` : ``} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              value: "approval",
              icon: Check,
              label: "Approval",
              tooltip: "An approval step will suspend the execution of a flow until it has been approved through the resume endpoints or the approval page by and solely by the recipients of those secret urls."
            },
            {},
            {}
          )}`;
        }
      }
    )}</div></div>` : ``} ${kind == "trigger" ? `<div class="mt-2"></div> ${validate_component(Alert, "Alert").$$render($$result, { title: "Trigger scripts", role: "info" }, {}, {
      default: () => {
        return `Trigger scripts are designed to pull data from an external source and return all of the new
				items since the last run, without resorting to external webhooks.<br><br>

				A trigger script is intended to be used with
				<a href="https://www.windmill.dev/docs/core_concepts/scheduling" target="_blank" class="text-blue-400" data-svelte-h="svelte-b2en0">schedules</a>
				and
				<a href="https://www.windmill.dev/docs/core_concepts/resources_and_types#states" target="_blank" class="text-blue-400" data-svelte-h="svelte-7dnj7k">states</a>
				in order to compare the execution to the previous one and process each new item in a
				<a href="https://www.windmill.dev/docs/flows/flow_loops" target="_blank" class="text-blue-400" data-svelte-h="svelte-1sdseit">for loop</a>. If there are no new items, the flow will be skipped.<br><br>

				By default, adding a trigger will set the schedule to 15 minutes. To see all ways to trigger
				a flow, check
				<a href="https://www.windmill.dev/docs/getting_started/trigger_flows" target="_blank" class="text-blue-400" data-svelte-h="svelte-1pa1c4i">Triggering Flows</a>.`;
      }
    })}` : ``} ${kind == "script" && !noEditor ? `<div class="mt-2"></div> ${validate_component(Alert, "Alert").$$render($$result, { title: "Action Scripts", role: "info" }, {}, {
      default: () => {
        return `An action script is simply a script that is neither a trigger nor an approval script. Those
				are the majority of the scripts.`;
      }
    })}` : ``} ${kind == "approval" ? `${!noEditor ? `<div class="mt-2"></div> ${validate_component(Alert, "Alert").$$render(
      $$result,
      {
        title: "Approval/Prompt Step",
        role: "info"
      },
      {},
      {
        default: () => {
          return `An approval/prompt step will suspend the execution of a flow until it has been approved
					and/or the prompts have been filled in the UI or through the resume endpoints or the
					approval page by and solely by the recipients of the secret urls. See details in
					&#39;Advanced&#39; -&gt; &#39;Suspend&#39; settings of the step. A prompt is a specialized approval step with
					payload that can be self-approved by the caller.<br><br>
					For further details, visit
					<a href="https://www.windmill.dev/docs/flows/flow_approval" target="_blank" class="text-blue-500" data-svelte-h="svelte-1g4518g">Approval/Prompt Steps Documentation</a>
					or
					<div class="inline-flex">${validate_component(SuspendDrawer, "SuspendDrawer").$$render($$result, { text: "Approval/Step prompt helpers" }, {}, {})}</div>`;
        }
      }
    )}` : `<a href="https://www.windmill.dev/docs/flows/flow_approval" target="_blank" class="text-blue-500" data-svelte-h="svelte-3aovuo">Approval/Prompt Steps Documentation</a>`}` : ``} <h3 class="pb-2 pt-4 flex gap-x-8 flex-wrap"><div>Inline new <span class="text-blue-500 dark:text-blue-400">${escape(kind == "script" ? "action" : kind)}</span>
				script
				${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        documentationLink: kind === "script" ? "https://www.windmill.dev/docs/flows/editor_components#flow-actions" : kind === "trigger" ? "https://www.windmill.dev/docs/flows/flow_trigger" : kind === "approval" ? "https://www.windmill.dev/docs/flows/flow_approval" : "https://www.windmill.dev/docs/getting_started/flows_quickstart#flow-editor"
      },
      {},
      {
        default: () => {
          return `Embed <span>${escape(kind == "script" ? "action" : kind)}</span> script directly inside a flow instead
					of saving the script into your workspace for reuse. You can always save an inline script to
					your workspace later.`;
        }
      }
    )}</div> ${validate_component(DefaultScripts, "DefaultScripts").$$render($$result, {}, {}, {})}</h3> ${noEditor ? `<div class="${"py-0.5 text-2xs " + escape(
      summary == void 0 || summary == "" ? "text-red-600" : "text-ternary",
      true
    )}">Pick a summary first, it will be used to create a separate file whose name will be derived
				from the summary</div> <input class="w-full" type="text" placeholder="Summary"${add_attribute("value", summary, 0)}> <div class="pb-2"></div>` : ``} <div class="flex flex-row flex-wrap gap-2" id="flow-editor-action-script">${each(langs.filter((lang) => customUi?.languages == void 0 || customUi?.languages?.includes(lang?.[1])), ([label, lang]) => {
      return `${displayLang(lang, kind) ? `${validate_component(FlowScriptPicker, "FlowScriptPicker").$$render(
        $$result,
        {
          id: `flow-editor-action-script-${lang}`,
          disabled: noEditor && (summary == void 0 || summary == ""),
          label,
          lang: lang == "docker" ? "bash" : lang
        },
        {},
        {}
      )}` : ``}`;
    })}</div> <h3 class="mb-2 mt-6">Use pre-made <span class="text-blue-500 dark:text-blue-400">${escape(kind == "script" ? "action" : kind)}</span> script</h3> ${pick_existing == "hub" ? `${validate_component(PickHubScript, "PickHubScript").$$render(
      $$result,
      { kind, filter },
      {
        filter: ($$value) => {
          filter = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ToggleHubWorkspace, "ToggleHubWorkspace").$$render(
            $$result,
            { selected: pick_existing },
            {
              selected: ($$value) => {
                pick_existing = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(WorkspaceScriptPicker, "WorkspaceScriptPicker").$$render(
      $$result,
      { displayLock: true, kind, filter },
      {
        filter: ($$value) => {
          filter = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ToggleHubWorkspace, "ToggleHubWorkspace").$$render(
            $$result,
            { selected: pick_existing },
            {
              selected: ($$value) => {
                pick_existing = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}`}`}</div>`;
  } while (!$$settled);
  $$unsubscribe_defaultScripts();
  return $$rendered;
});
const FlowInputsFlow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let prefilteredItems;
  let owners;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  createEventDispatcher();
  let items = void 0;
  let filteredItems = void 0;
  let filter = "";
  let ownerFilter = void 0;
  async function loadFlows() {
    items = await FlowService.listFlows({ workspace: $workspaceStore });
  }
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $workspaceStore && loadFlows();
    prefilteredItems = items;
    owners = Array.from(new Set(filteredItems?.map((x) => x.path.split("/").slice(0, 2).join("/")) ?? [])).sort();
    $$rendered = `${validate_component(SearchItems, "SearchItems").$$render(
      $$result,
      {
        filter,
        items: prefilteredItems,
        f: (x) => emptyString(x.summary) ? x.path : x.summary + " (" + x.path + ")",
        filteredItems
      },
      {
        filteredItems: ($$value) => {
          filteredItems = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="flex flex-col min-h-0 p-4"><h3 class="mb-4" data-svelte-h="svelte-1txuoxo">Pick a Workspace Flow</h3> <div class="w-full flex mt-1 items-center gap-2 mb-3">${slots.default ? slots.default({}) : ``} <input type="text" placeholder="Search Workspace Flow" class="text-2xl grow"${add_attribute("value", filter, 0)}></div> ${filteredItems ? `${owners.length > 0 ? `<div class="gap-2 w-full flex flex-wrap my-2">${each(owners, (owner) => {
      return `<div>${validate_component(Badge, "Badge").$$render(
        $$result,
        {
          class: "cursor-pointer hover:bg-gray-200",
          color: owner === ownerFilter ? "blue" : "gray",
          baseClass: owner === ownerFilter ? "border border-blue-500" : "border"
        },
        {},
        {
          default: () => {
            return `${escape(owner)} ${owner === ownerFilter ? `✗` : ``} `;
          }
        }
      )} </div>`;
    })}</div>` : ``} ${filter.length > 0 && filteredItems.length == 0 ? `${validate_component(NoItemFound, "NoItemFound").$$render($$result, {}, {}, {})}` : ``} <ul class="divide-y overflow-auto">${each(filteredItems, ({ path, summary, description, marked }) => {
      return `<li class="flex flex-row w-full"><button class="p-4 gap-1 flex flex-row grow hover:bg-surface-hover bg-surface transition-all text-primary"><div class="flex flex-col"><div class="text-sm font-semibold flex flex-col"><span class="mr-2 text-left">${marked ? `<!-- HTML_TAG_START -->${marked}<!-- HTML_TAG_END -->` : `${escape(!summary || summary.length == 0 ? path : summary)}`}</span> <span class="font-normal text-xs text-left italic overflow-hidden">${escape(path ?? "")} </span></div> <div class="text-xs font-light italic text-left">${escape(description ?? "")}</div> </div></button> </li>`;
    })}</ul>` : `<div class="mt-6"></div> ${each(new Array(6), (_) => {
      return `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[4], 0.7] }, {}, {})}`;
    })}`}</div>`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const FlowBranchesAllWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value2) => $enterpriseLicense = value2);
  let { noEditor } = $$props;
  let { flowModule } = $$props;
  let { previousModule } = $$props;
  let value = flowModule.value;
  let selected = "early-stop";
  if ($$props.noEditor === void 0 && $$bindings.noEditor && noEditor !== void 0) $$bindings.noEditor(noEditor);
  if ($$props.flowModule === void 0 && $$bindings.flowModule && flowModule !== void 0) $$bindings.flowModule(flowModule);
  if ($$props.previousModule === void 0 && $$bindings.previousModule && previousModule !== void 0) $$bindings.previousModule(previousModule);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    value = flowModule.value;
    $$rendered = `<div class="h-full flex flex-col w-full" id="flow-editor-branch-all-wrapper">${validate_component(FlowCard, "FlowCard").$$render(
      $$result,
      {
        noEditor,
        title: value.type == "branchall" ? "Run all branches" : "Run one branch"
      },
      {},
      {
        default: () => {
          return `${validate_component(SplitPanesWrapper, "SplitPanesWrapper").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Splitpanes, "Splitpanes").$$render($$result, { horizontal: true }, {}, {
                default: () => {
                  return `${validate_component(Pane, "Pane").$$render($$result, { size: flowModule ? 60 : 100 }, {}, {
                    default: () => {
                      return `${!noEditor ? `${validate_component(Alert, "Alert").$$render(
                        $$result,
                        {
                          type: "info",
                          title: "All branches will be run",
                          tooltip: "Branch all",
                          documentationLink: "https://www.windmill.dev/docs/flows/flow_branches#branch-all",
                          class: "m-4"
                        },
                        {},
                        {
                          default: () => {
                            return `The result of this step is the list of the result of each branch.`;
                          }
                        }
                      )}` : ``} <div class="p-4 mt-4 w-full"><h3 class="mb-4">${escape(value.branches.length)} branch${escape(value.branches.length > 1 ? "es" : "")}</h3> <div class="flex flex-col gap-y-4 py-2 w-full">${each(value.branches, (branch, i) => {
                        return `<div class="flex flex-row gap-x-4 w-full items-center"><div class="grow flex gap-2">${validate_component(Badge, "Badge").$$render($$result, { large: true, color: "blue" }, {}, {
                          default: () => {
                            return `Branch ${escape(i + 1)}`;
                          }
                        })} <input type="text" placeholder="Summary"${add_attribute("value", branch.summary, 0)}></div> <div class="w-min-sm">${validate_component(Toggle, "Toggle").$$render(
                          $$result,
                          {
                            options: { right: "Skip failure" },
                            checked: branch.skip_failure
                          },
                          {
                            checked: ($$value) => {
                              branch.skip_failure = $$value;
                              $$settled = false;
                            }
                          },
                          {}
                        )}</div> </div>`;
                      })}</div> <p class="text-sm" data-svelte-h="svelte-11js6v4">Add branches and steps directly on the graph.</p> <div class="mt-6 mb-2 text-sm font-bold" data-svelte-h="svelte-13tc0up">Run in parallel</div> ${validate_component(Toggle, "Toggle").$$render(
                        $$result,
                        {
                          options: { right: "All branches run in parallel" },
                          checked: value.parallel
                        },
                        {
                          checked: ($$value) => {
                            value.parallel = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )}</div>`;
                    }
                  })} ${flowModule ? `${validate_component(Pane, "Pane").$$render($$result, { size: 40 }, {}, {
                    default: () => {
                      return `${validate_component(Tabs, "Tabs").$$render(
                        $$result,
                        { selected },
                        {
                          selected: ($$value) => {
                            selected = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          content: () => {
                            return `<div class="overflow-hidden bg-surface">${validate_component(TabContent, "TabContent").$$render(
                              $$result,
                              {
                                value: "early-stop",
                                class: "flex flex-col flex-1 h-full"
                              },
                              {},
                              {
                                default: () => {
                                  return `<div class="p-4 overflow-y-auto">${validate_component(FlowModuleEarlyStop, "FlowModuleEarlyStop").$$render(
                                    $$result,
                                    { flowModule },
                                    {
                                      flowModule: ($$value) => {
                                        flowModule = $$value;
                                        $$settled = false;
                                      }
                                    },
                                    {}
                                  )}</div>`;
                                }
                              }
                            )} ${validate_component(TabContent, "TabContent").$$render(
                              $$result,
                              {
                                value: "suspend",
                                class: "flex flex-col flex-1 h-full"
                              },
                              {},
                              {
                                default: () => {
                                  return `<div class="p-4 overflow-y-auto">${validate_component(FlowModuleSuspend, "FlowModuleSuspend").$$render(
                                    $$result,
                                    {
                                      previousModuleId: previousModule?.id,
                                      flowModule
                                    },
                                    {
                                      flowModule: ($$value) => {
                                        flowModule = $$value;
                                        $$settled = false;
                                      }
                                    },
                                    {}
                                  )}</div>`;
                                }
                              }
                            )} ${validate_component(TabContent, "TabContent").$$render(
                              $$result,
                              {
                                value: "sleep",
                                class: "flex flex-col flex-1 h-full"
                              },
                              {},
                              {
                                default: () => {
                                  return `<div class="p-4 overflow-y-auto">${validate_component(FlowModuleSleep, "FlowModuleSleep").$$render(
                                    $$result,
                                    {
                                      previousModuleId: previousModule?.id,
                                      flowModule
                                    },
                                    {
                                      flowModule: ($$value) => {
                                        flowModule = $$value;
                                        $$settled = false;
                                      }
                                    },
                                    {}
                                  )}</div>`;
                                }
                              }
                            )} ${validate_component(TabContent, "TabContent").$$render(
                              $$result,
                              {
                                value: "mock",
                                class: "flex flex-col flex-1 h-full"
                              },
                              {},
                              {
                                default: () => {
                                  return `<div class="p-4 overflow-y-auto">${validate_component(FlowModuleMock, "FlowModuleMock").$$render(
                                    $$result,
                                    { flowModule },
                                    {
                                      flowModule: ($$value) => {
                                        flowModule = $$value;
                                        $$settled = false;
                                      }
                                    },
                                    {}
                                  )}</div>`;
                                }
                              }
                            )} ${validate_component(TabContent, "TabContent").$$render(
                              $$result,
                              {
                                value: "lifetime",
                                class: "flex flex-col flex-1 h-full"
                              },
                              {},
                              {
                                default: () => {
                                  return `<div class="p-4 overflow-y-auto">${validate_component(FlowModuleDeleteAfterUse, "FlowModuleDeleteAfterUse").$$render(
                                    $$result,
                                    {
                                      disabled: !$enterpriseLicense,
                                      flowModule
                                    },
                                    {
                                      flowModule: ($$value) => {
                                        flowModule = $$value;
                                        $$settled = false;
                                      }
                                    },
                                    {}
                                  )}</div>`;
                                }
                              }
                            )}</div> `;
                          },
                          default: () => {
                            return `${validate_component(Tab, "Tab").$$render($$result, { value: "early-stop" }, {}, {
                              default: () => {
                                return `Early Stop/Break`;
                              }
                            })} ${validate_component(Tab, "Tab").$$render($$result, { value: "suspend" }, {}, {
                              default: () => {
                                return `Suspend/Approval/Prompt`;
                              }
                            })} ${validate_component(Tab, "Tab").$$render($$result, { value: "sleep" }, {}, {
                              default: () => {
                                return `Sleep`;
                              }
                            })} ${validate_component(Tab, "Tab").$$render($$result, { value: "mock" }, {}, {
                              default: () => {
                                return `Mock`;
                              }
                            })} ${validate_component(Tab, "Tab").$$render($$result, { value: "lifetime" }, {}, {
                              default: () => {
                                return `Lifetime`;
                              }
                            })}`;
                          }
                        }
                      )}`;
                    }
                  })}` : ``}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_enterpriseLicense();
  return $$rendered;
});
const FlowBranchesOneWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value2) => $enterpriseLicense = value2);
  let { flowModule } = $$props;
  let { previousModule } = $$props;
  let { noEditor } = $$props;
  let { enableAi = false } = $$props;
  let value = flowModule.value;
  let selected = "early-stop";
  if ($$props.flowModule === void 0 && $$bindings.flowModule && flowModule !== void 0) $$bindings.flowModule(flowModule);
  if ($$props.previousModule === void 0 && $$bindings.previousModule && previousModule !== void 0) $$bindings.previousModule(previousModule);
  if ($$props.noEditor === void 0 && $$bindings.noEditor && noEditor !== void 0) $$bindings.noEditor(noEditor);
  if ($$props.enableAi === void 0 && $$bindings.enableAi && enableAi !== void 0) $$bindings.enableAi(enableAi);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    value = flowModule.value;
    $$rendered = `<div class="h-full" id="flow-editor-branch-one-wrapper">${validate_component(FlowCard, "FlowCard").$$render($$result, { noEditor, title: "Run one branch" }, {}, {
      default: () => {
        return `${validate_component(SplitPanesWrapper, "SplitPanesWrapper").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Splitpanes, "Splitpanes").$$render($$result, { horizontal: true }, {}, {
              default: () => {
                return `${validate_component(Pane, "Pane").$$render($$result, { size: flowModule ? 60 : 100 }, {}, {
                  default: () => {
                    return `${!noEditor ? `${validate_component(Alert, "Alert").$$render(
                      $$result,
                      {
                        type: "info",
                        title: "Only first branch whose condition is true will be run",
                        tooltip: "Branch one",
                        documentationLink: "https://www.windmill.dev/docs/flows/flow_branches#branch-one",
                        class: "m-4"
                      },
                      {},
                      {
                        default: () => {
                          return `The result of this step is the result of the branch.`;
                        }
                      }
                    )}` : ``} <div class="p-4"><h3 class="my-4">${escape(value.branches.length + 1)} branch${escape(value.branches.length + 1 > 1 ? "es" : "")}</h3> <div class="py-2"><div class="flex flex-row gap-2 text-sm p-2">${validate_component(Badge, "Badge").$$render($$result, { large: true, color: "blue" }, {}, {
                      default: () => {
                        return `Default branch`;
                      }
                    })} <p class="italic text-tertiary" data-svelte-h="svelte-1jink0w">If none of the predicates&#39; expressions evaluated in-order match, this branch is
									chosen</p></div> ${each(value.branches, (branch, i) => {
                      return `<div class="flex flex-col gap-x-2 items-center"><div class="w-full flex gap-2 px-2 pt-4 pb-2">${validate_component(Badge, "Badge").$$render($$result, { large: true, color: "blue" }, {}, {
                        default: () => {
                          return `Branch ${escape(i + 1)}`;
                        }
                      })} <input class="w-full" type="text" placeholder="Summary"${add_attribute("value", branch.summary, 0)}></div> <div class="w-full border">${validate_component(BranchPredicateEditor, "BranchPredicateEditor").$$render(
                        $$result,
                        {
                          branch,
                          parentModule: flowModule,
                          previousModule,
                          enableAi
                        },
                        {},
                        {}
                      )}</div> </div>`;
                    })}</div> <p class="text-sm" data-svelte-h="svelte-11js6v4">Add branches and steps directly on the graph.</p></div>`;
                  }
                })} ${flowModule ? `${validate_component(Pane, "Pane").$$render($$result, { size: 40 }, {}, {
                  default: () => {
                    return `${validate_component(Tabs, "Tabs").$$render(
                      $$result,
                      { selected },
                      {
                        selected: ($$value) => {
                          selected = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        content: () => {
                          return `<div class="overflow-hidden bg-surface">${validate_component(TabContent, "TabContent").$$render(
                            $$result,
                            {
                              value: "early-stop",
                              class: "flex flex-col flex-1 h-full"
                            },
                            {},
                            {
                              default: () => {
                                return `<div class="p-4 overflow-y-auto">${validate_component(FlowModuleEarlyStop, "FlowModuleEarlyStop").$$render(
                                  $$result,
                                  { flowModule },
                                  {
                                    flowModule: ($$value) => {
                                      flowModule = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</div>`;
                              }
                            }
                          )} ${validate_component(TabContent, "TabContent").$$render(
                            $$result,
                            {
                              value: "suspend",
                              class: "flex flex-col flex-1 h-full"
                            },
                            {},
                            {
                              default: () => {
                                return `<div class="p-4 overflow-y-auto">${validate_component(FlowModuleSuspend, "FlowModuleSuspend").$$render(
                                  $$result,
                                  {
                                    previousModuleId: previousModule?.id,
                                    flowModule
                                  },
                                  {
                                    flowModule: ($$value) => {
                                      flowModule = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</div>`;
                              }
                            }
                          )} ${validate_component(TabContent, "TabContent").$$render(
                            $$result,
                            {
                              value: "sleep",
                              class: "flex flex-col flex-1 h-full"
                            },
                            {},
                            {
                              default: () => {
                                return `<div class="p-4 overflow-y-auto">${validate_component(FlowModuleSleep, "FlowModuleSleep").$$render(
                                  $$result,
                                  {
                                    previousModuleId: previousModule?.id,
                                    flowModule
                                  },
                                  {
                                    flowModule: ($$value) => {
                                      flowModule = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</div>`;
                              }
                            }
                          )} ${validate_component(TabContent, "TabContent").$$render(
                            $$result,
                            {
                              value: "mock",
                              class: "flex flex-col flex-1 h-full"
                            },
                            {},
                            {
                              default: () => {
                                return `<div class="p-4 overflow-y-auto">${validate_component(FlowModuleMock, "FlowModuleMock").$$render(
                                  $$result,
                                  { flowModule },
                                  {
                                    flowModule: ($$value) => {
                                      flowModule = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</div>`;
                              }
                            }
                          )} ${validate_component(TabContent, "TabContent").$$render(
                            $$result,
                            {
                              value: "lifetime",
                              class: "flex flex-col flex-1 h-full"
                            },
                            {},
                            {
                              default: () => {
                                return `<div class="p-4 overflow-y-auto">${validate_component(FlowModuleDeleteAfterUse, "FlowModuleDeleteAfterUse").$$render(
                                  $$result,
                                  {
                                    disabled: !$enterpriseLicense,
                                    flowModule
                                  },
                                  {
                                    flowModule: ($$value) => {
                                      flowModule = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</div>`;
                              }
                            }
                          )}</div> `;
                        },
                        default: () => {
                          return `${validate_component(Tab, "Tab").$$render($$result, { value: "early-stop" }, {}, {
                            default: () => {
                              return `Early Stop/Break`;
                            }
                          })} ${validate_component(Tab, "Tab").$$render($$result, { value: "suspend" }, {}, {
                            default: () => {
                              return `Suspend/Approval/Prompt`;
                            }
                          })} ${validate_component(Tab, "Tab").$$render($$result, { value: "sleep" }, {}, {
                            default: () => {
                              return `Sleep`;
                            }
                          })} ${validate_component(Tab, "Tab").$$render($$result, { value: "mock" }, {}, {
                            default: () => {
                              return `Mock`;
                            }
                          })} ${validate_component(Tab, "Tab").$$render($$result, { value: "lifetime" }, {}, {
                            default: () => {
                              return `Lifetime`;
                            }
                          })}`;
                        }
                      }
                    )}`;
                  }
                })}` : ``}`;
              }
            })}`;
          }
        })}`;
      }
    })}</div>`;
  } while (!$$settled);
  $$unsubscribe_enterpriseLicense();
  return $$rendered;
});
const FlowWhileLoop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let previewIterationArgs;
  let $flowStateStore, $$unsubscribe_flowStateStore;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  const { flowStateStore } = getContext("FlowEditorContext");
  $$unsubscribe_flowStateStore = subscribe(flowStateStore, (value) => $flowStateStore = value);
  let { mod } = $$props;
  let { previousModule } = $$props;
  let { noEditor } = $$props;
  let selected = "early-stop";
  let previewOpen = false;
  let jobId = void 0;
  let job = void 0;
  if ($$props.mod === void 0 && $$bindings.mod && mod !== void 0) $$bindings.mod(mod);
  if ($$props.previousModule === void 0 && $$bindings.previousModule && previousModule !== void 0) $$bindings.previousModule(previousModule);
  if ($$props.noEditor === void 0 && $$bindings.noEditor && noEditor !== void 0) $$bindings.noEditor(noEditor);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    previewIterationArgs = $flowStateStore[mod.id]?.previewArgs ?? {};
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      {
        alwaysOpen: true,
        size: "75%",
        open: previewOpen
      },
      {
        open: ($$value) => {
          previewOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(FlowLoopIterationPreview, "FlowLoopIterationPreview").$$render(
            $$result,
            {
              modules: mod.value.type == "forloopflow" ? mod.value.modules : [],
              open: previewOpen,
              previewArgs: previewIterationArgs,
              job,
              jobId
            },
            {
              job: ($$value) => {
                job = $$value;
                $$settled = false;
              },
              jobId: ($$value) => {
                jobId = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )} <div class="h-full flex flex-col">${validate_component(FlowCard, "FlowCard").$$render($$result, { noEditor, title: "While loop" }, {}, {
      header: () => {
        return `<div slot="header" class="grow"><input${add_attribute("placeholder", "Summary", 0)}${add_attribute("value", mod.summary, 0)}></div>`;
      },
      default: () => {
        return `${validate_component(Splitpanes, "Splitpanes").$$render(
          $$result,
          {
            horizontal: true,
            class: "!max-h-[calc(100%-48px)]"
          },
          {},
          {
            default: () => {
              return `${validate_component(Pane, "Pane").$$render($$result, { size: 60, minSize: 20, class: "p-4" }, {}, {
                default: () => {
                  return `${!noEditor ? `${validate_component(Alert, "Alert").$$render(
                    $$result,
                    {
                      type: "info",
                      title: "While loops",
                      class: "mb-4",
                      size: "xs",
                      documentationLink: "https://www.windmill.dev/docs/flows/while_loops"
                    },
                    {},
                    {
                      default: () => {
                        return `Add steps inside the while loop but have one of them use early stop/break in their
						Advanced settings (or do it at the loop level that will watch the last step) to break
						out of the while loop (otherwise it will loop forever and you will have to cancel the
						flow manually).`;
                      }
                    }
                  )}` : ``} ${mod.value.type === "whileloopflow" ? `<div class="flex flex-row gap-8 mt-2 mb-6"><div><div class="mb-2 text-sm font-bold">Skip failures ${validate_component(Tooltip, "Tooltip").$$render(
                    $$result,
                    {
                      documentationLink: "https://www.windmill.dev/docs/flows/while_loops"
                    },
                    {},
                    {
                      default: () => {
                        return `If disabled, the flow will fail as soon as one of the iteration fail. Otherwise,
									the error will be collected as the result of the iteration. Regardless of this
									setting, if an error handler is defined, it will process the error.`;
                      }
                    }
                  )}</div> ${validate_component(Toggle, "Toggle").$$render(
                    $$result,
                    {
                      options: { right: "Skip failures" },
                      checked: mod.value.skip_failures
                    },
                    {
                      checked: ($$value) => {
                        mod.value.skip_failures = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div> <div class="my-2 flex flex-row gap-2 items-center"><div class="flex w-full justify-end">${validate_component(Button, "Button").$$render(
                    $$result,
                    {
                      startIcon: { icon: Play },
                      color: "dark",
                      size: "sm"
                    },
                    {},
                    {
                      default: () => {
                        return `Test an iteration`;
                      }
                    }
                  )}</div></div>` : ``}`;
                }
              })} ${validate_component(Pane, "Pane").$$render(
                $$result,
                {
                  size: 40,
                  minSize: 20,
                  class: "flex flex-col flex-1"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Tabs, "Tabs").$$render(
                      $$result,
                      { selected },
                      {
                        selected: ($$value) => {
                          selected = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        content: () => {
                          return ` <div class="overflow-hidden bg-surface" style="height:calc(100% - 32px);"> ${validate_component(TabContent, "TabContent").$$render(
                            $$result,
                            {
                              value: "early-stop",
                              class: "flex flex-col flex-1 h-full"
                            },
                            {},
                            {
                              default: () => {
                                return `<div class="p-4 overflow-y-auto">${validate_component(FlowModuleEarlyStop, "FlowModuleEarlyStop").$$render(
                                  $$result,
                                  { flowModule: mod },
                                  {
                                    flowModule: ($$value) => {
                                      mod = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</div>`;
                              }
                            }
                          )} ${validate_component(TabContent, "TabContent").$$render(
                            $$result,
                            {
                              value: "suspend",
                              class: "flex flex-col flex-1 h-full"
                            },
                            {},
                            {
                              default: () => {
                                return `<div class="p-4 overflow-y-auto">${validate_component(FlowModuleSuspend, "FlowModuleSuspend").$$render(
                                  $$result,
                                  {
                                    previousModuleId: previousModule?.id,
                                    flowModule: mod
                                  },
                                  {
                                    flowModule: ($$value) => {
                                      mod = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</div>`;
                              }
                            }
                          )} ${validate_component(TabContent, "TabContent").$$render(
                            $$result,
                            {
                              value: "sleep",
                              class: "flex flex-col flex-1 h-full"
                            },
                            {},
                            {
                              default: () => {
                                return `<div class="p-4 overflow-y-auto">${validate_component(FlowModuleSleep, "FlowModuleSleep").$$render(
                                  $$result,
                                  {
                                    previousModuleId: previousModule?.id,
                                    flowModule: mod
                                  },
                                  {
                                    flowModule: ($$value) => {
                                      mod = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</div>`;
                              }
                            }
                          )} ${validate_component(TabContent, "TabContent").$$render(
                            $$result,
                            {
                              value: "mock",
                              class: "flex flex-col flex-1 h-full"
                            },
                            {},
                            {
                              default: () => {
                                return `<div class="p-4 overflow-y-auto">${validate_component(FlowModuleMock, "FlowModuleMock").$$render(
                                  $$result,
                                  { flowModule: mod },
                                  {
                                    flowModule: ($$value) => {
                                      mod = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</div>`;
                              }
                            }
                          )} ${validate_component(TabContent, "TabContent").$$render(
                            $$result,
                            {
                              value: "lifetime",
                              class: "flex flex-col flex-1 h-full"
                            },
                            {},
                            {
                              default: () => {
                                return `<div class="p-4 overflow-y-auto">${validate_component(FlowModuleDeleteAfterUse, "FlowModuleDeleteAfterUse").$$render(
                                  $$result,
                                  {
                                    disabled: !$enterpriseLicense,
                                    flowModule: mod
                                  },
                                  {
                                    flowModule: ($$value) => {
                                      mod = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {}
                                )}</div>`;
                              }
                            }
                          )}</div> `;
                        },
                        default: () => {
                          return ` ${validate_component(Tab, "Tab").$$render($$result, { value: "early-stop" }, {}, {
                            default: () => {
                              return `Early Stop/Break`;
                            }
                          })} ${validate_component(Tab, "Tab").$$render($$result, { value: "suspend" }, {}, {
                            default: () => {
                              return `Suspend/Approval/Prompt`;
                            }
                          })} ${validate_component(Tab, "Tab").$$render($$result, { value: "sleep" }, {}, {
                            default: () => {
                              return `Sleep`;
                            }
                          })} ${validate_component(Tab, "Tab").$$render($$result, { value: "mock" }, {}, {
                            default: () => {
                              return `Mock`;
                            }
                          })} ${validate_component(Tab, "Tab").$$render($$result, { value: "lifetime" }, {}, {
                            default: () => {
                              return `Lifetime`;
                            }
                          })}`;
                        }
                      }
                    )}`;
                  }
                }
              )}`;
            }
          }
        )}`;
      }
    })}</div>`;
  } while (!$$settled);
  $$unsubscribe_flowStateStore();
  $$unsubscribe_enterpriseLicense();
  return $$rendered;
});
const FlowModuleWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_flowStore;
  let $$unsubscribe_flowStateStore;
  let $$unsubscribe_flowInputsStore;
  let $$unsubscribe_schedule;
  let $selectedId, $$unsubscribe_selectedId;
  let { flowModule } = $$props;
  let { noEditor = false } = $$props;
  let { enableAi = false } = $$props;
  const { selectedId, schedule, flowStateStore, flowInputsStore, flowStore } = getContext("FlowEditorContext");
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => $selectedId = value);
  $$unsubscribe_schedule = subscribe(schedule, (value) => value);
  $$unsubscribe_flowStateStore = subscribe(flowStateStore, (value) => value);
  $$unsubscribe_flowInputsStore = subscribe(flowInputsStore, (value) => value);
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => value);
  let scriptKind = "script";
  let scriptTemplate = "script";
  let { parentModule = void 0 } = $$props;
  let { previousModule = void 0 } = $$props;
  if ($$props.flowModule === void 0 && $$bindings.flowModule && flowModule !== void 0) $$bindings.flowModule(flowModule);
  if ($$props.noEditor === void 0 && $$bindings.noEditor && noEditor !== void 0) $$bindings.noEditor(noEditor);
  if ($$props.enableAi === void 0 && $$bindings.enableAi && enableAi !== void 0) $$bindings.enableAi(enableAi);
  if ($$props.parentModule === void 0 && $$bindings.parentModule && parentModule !== void 0) $$bindings.parentModule(parentModule);
  if ($$props.previousModule === void 0 && $$bindings.previousModule && previousModule !== void 0) $$bindings.previousModule(previousModule);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${flowModule.id === $selectedId ? `${flowModule.value.type === "forloopflow" ? `${validate_component(FlowLoop, "FlowLoop").$$render(
      $$result,
      {
        noEditor,
        parentModule,
        previousModule,
        enableAi,
        mod: flowModule
      },
      {
        mod: ($$value) => {
          flowModule = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${flowModule.value.type === "whileloopflow" ? `${validate_component(FlowWhileLoop, "FlowWhileLoop").$$render(
      $$result,
      {
        noEditor,
        previousModule,
        mod: flowModule
      },
      {
        mod: ($$value) => {
          flowModule = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${flowModule.value.type === "branchone" ? `${validate_component(FlowBranchesOneWrapper, "FlowBranchesOneWrapper").$$render(
      $$result,
      {
        noEditor,
        previousModule,
        enableAi,
        flowModule
      },
      {
        flowModule: ($$value) => {
          flowModule = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${flowModule.value.type === "branchall" ? `${validate_component(FlowBranchesAllWrapper, "FlowBranchesAllWrapper").$$render(
      $$result,
      { noEditor, previousModule, flowModule },
      {
        flowModule: ($$value) => {
          flowModule = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${flowModule.value.type === "identity" ? `${$selectedId == "failure" ? `<div class="p-4">${validate_component(Alert, "Alert").$$render(
      $$result,
      {
        type: "info",
        title: "Error handlers are triggered upon non recovered errors"
      },
      {},
      {
        default: () => {
          return `If defined, the error handler will take the error as input.`;
        }
      }
    )}</div>` : ``} ${flowModule.value.flow ? `${validate_component(FlowInputsFlow, "FlowInputsFlow").$$render($$result, {}, {}, {})}` : `${validate_component(FlowInputs, "FlowInputs").$$render(
      $$result,
      {
        noEditor,
        summary: flowModule.summary,
        shouldDisableTriggerScripts: parentModule !== void 0 || previousModule !== void 0 || $selectedId == "failure",
        failureModule: $selectedId === "failure"
      },
      {},
      {}
    )}`}` : `${flowModule.value.type === "rawscript" || flowModule.value.type === "script" || flowModule.value.type === "flow" ? `${validate_component(FlowModuleComponent, "FlowModuleComponent").$$render(
      $$result,
      {
        noEditor,
        parentModule,
        previousModule,
        failureModule: $selectedId === "failure",
        scriptKind,
        scriptTemplate,
        enableAi,
        flowModule
      },
      {
        flowModule: ($$value) => {
          flowModule = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}`}`}`}`}`}` : `${flowModule.value.type === "forloopflow" || flowModule.value.type == "whileloopflow" ? `${each(flowModule.value.modules, (submodule, index) => {
      return `${validate_component(FlowModuleWrapper, "svelte:self").$$render(
        $$result,
        {
          noEditor,
          previousModule: flowModule.value.modules[index - 1],
          enableAi,
          flowModule: submodule,
          parentModule: flowModule
        },
        {
          flowModule: ($$value) => {
            submodule = $$value;
            $$settled = false;
          },
          parentModule: ($$value) => {
            flowModule = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}` : `${flowModule.value.type === "branchone" ? `${$selectedId === `${flowModule?.id}-branch-default` ? `<div class="p-2" data-svelte-h="svelte-pq689u"><h3 class="mb-4">Default branch</h3>
			Nothing to configure, this is the default branch if none of the predicates are met.</div>` : `${each(flowModule.value.default, (submodule, index) => {
      return `${validate_component(FlowModuleWrapper, "svelte:self").$$render(
        $$result,
        {
          noEditor,
          previousModule: flowModule.value.default[index - 1],
          enableAi,
          flowModule: submodule,
          parentModule: flowModule
        },
        {
          flowModule: ($$value) => {
            submodule = $$value;
            $$settled = false;
          },
          parentModule: ($$value) => {
            flowModule = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}`} ${each(flowModule.value.branches, (branch, branchIndex) => {
      return `${$selectedId === `${flowModule?.id}-branch-${branchIndex}` ? `${validate_component(FlowBranchOneWrapper, "FlowBranchOneWrapper").$$render(
        $$result,
        {
          noEditor,
          parentModule: flowModule,
          previousModule,
          enableAi,
          branch
        },
        {
          branch: ($$value) => {
            branch = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `${each(branch.modules, (submodule, index) => {
        return `${validate_component(FlowModuleWrapper, "svelte:self").$$render(
          $$result,
          {
            noEditor,
            previousModule: flowModule.value.branches[branchIndex].modules[index - 1],
            enableAi,
            flowModule: submodule,
            parentModule: flowModule
          },
          {
            flowModule: ($$value) => {
              submodule = $$value;
              $$settled = false;
            },
            parentModule: ($$value) => {
              flowModule = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      })}`}`;
    })}` : `${flowModule.value.type === "branchall" ? `${each(flowModule.value.branches, (branch, branchIndex) => {
      return `${$selectedId === `${flowModule?.id}-branch-${branchIndex}` ? `${validate_component(FlowBranchAllWrapper, "FlowBranchAllWrapper").$$render(
        $$result,
        { noEditor, branch },
        {
          branch: ($$value) => {
            branch = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `${each(branch.modules, (submodule, index) => {
        return `${validate_component(FlowModuleWrapper, "svelte:self").$$render(
          $$result,
          {
            noEditor,
            previousModule: flowModule.value.branches[branchIndex].modules[index - 1],
            enableAi,
            flowModule: submodule,
            parentModule: flowModule
          },
          {
            flowModule: ($$value) => {
              submodule = $$value;
              $$settled = false;
            },
            parentModule: ($$value) => {
              flowModule = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      })}`}`;
    })}` : ``}`}`}`}`;
  } while (!$$settled);
  $$unsubscribe_flowStore();
  $$unsubscribe_flowStateStore();
  $$unsubscribe_flowInputsStore();
  $$unsubscribe_schedule();
  $$unsubscribe_selectedId();
  return $$rendered;
});
const FlowSchedules = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $schedule, $$unsubscribe_schedule;
  let $flowStore, $$unsubscribe_flowStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  const { schedule, flowStore, initialPath } = getContext("FlowEditorContext");
  $$unsubscribe_schedule = subscribe(schedule, (value) => $schedule = value);
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => $flowStore = value);
  let schedules = void 0;
  async function loadSchedules() {
    try {
      schedules = (await ScheduleService.listSchedules({
        workspace: $workspaceStore ?? "",
        path: initialPath,
        isFlow: true
      })).filter((s) => s.path != initialPath);
    } catch (e) {
      console.error("impossible to load schedules");
    }
  }
  let scheduleEditor;
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
      {
        schema: $flowStore.schema,
        args: $schedule.args
      },
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
      return `<div class="grid grid-cols-6 text-2xs items-center py-2"><div class="col-span-3 truncate">${escape(schedule2.path)}</div><div>${escape(schedule2.schedule)}</div> <div>${escape(schedule2.enabled ? "on" : "off")}</div> <button data-svelte-h="svelte-1t2bg6m">Edit</button> </div>`;
    })}</div>`}` : `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[8]] }, {}, {})}`}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_schedule();
  $$unsubscribe_flowStore();
  return $$rendered;
});
const Slider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { tooltip = void 0 } = $$props;
  let { view = false } = $$props;
  let { size = "md" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
  if ($$props.tooltip === void 0 && $$bindings.tooltip && tooltip !== void 0) $$bindings.tooltip(tooltip);
  if ($$props.view === void 0 && $$bindings.view && view !== void 0) $$bindings.view(view);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  return `${validate_component(Button, "Button").$$render(
    $$result,
    {
      color: "light",
      size,
      variant: "border",
      endIcon: {
        icon: Chevron_down,
        classes: twMerge("duration-300 ", view ? "rotate-180" : "rotate-0")
      }
    },
    {},
    {
      default: () => {
        return `${escape(text)} ${tooltip ? `${validate_component(Tooltip, "Tooltip").$$render($$result, { wrapperClass: "mx-1" }, {}, {
          default: () => {
            return `${escape(tooltip)}`;
          }
        })}` : ``}`;
      }
    }
  )} ${view ? `<div class="my-4 px-2">${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
function asSchema(x) {
  return x;
}
const FlowSettings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let url;
  let syncedUrl;
  let $workerTags, $$unsubscribe_workerTags;
  let $selectedId, $$unsubscribe_selectedId;
  let $pathStore, $$unsubscribe_pathStore;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $flowStore, $$unsubscribe_flowStore;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  let $previewArgs, $$unsubscribe_previewArgs;
  let $schedule, $$unsubscribe_schedule;
  $$unsubscribe_workerTags = subscribe(workerTags, (value) => $workerTags = value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  let { noEditor } = $$props;
  const { selectedId, flowStore, initialPath, previewArgs, pathStore, schedule } = getContext("FlowEditorContext");
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => $selectedId = value);
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => $flowStore = value);
  $$unsubscribe_previewArgs = subscribe(previewArgs, (value) => $previewArgs = value);
  $$unsubscribe_pathStore = subscribe(pathStore, (value) => $pathStore = value);
  $$unsubscribe_schedule = subscribe(schedule, (value) => $schedule = value);
  let hostname = "SSR";
  let path = void 0;
  let dirtyPath = false;
  if ($$props.noEditor === void 0 && $$bindings.noEditor && noEditor !== void 0) $$bindings.noEditor(noEditor);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    url = `${hostname}/api/w/${$workspaceStore}/jobs/run/f/${$pathStore}`;
    syncedUrl = `${hostname}/api/w/${$workspaceStore}/jobs/run_wait_result/f/${$pathStore}`;
    {
      if ($selectedId == "settings-worker-group") {
        set_store_value(workerTags, $workerTags = void 0, $workerTags);
      }
    }
    $$rendered = `<div class="h-full overflow-hidden">${validate_component(FlowCard, "FlowCard").$$render($$result, { noEditor, title: "Settings" }, {}, {
      default: () => {
        return `<div class="h-full flex-1">${validate_component(Tabs, "Tabs").$$render(
          $$result,
          { selected: $selectedId },
          {
            selected: ($$value) => {
              $selectedId = $$value;
              $$settled = false;
            }
          },
          {
            content: () => {
              return `${validate_component(TabContent, "TabContent").$$render(
                $$result,
                {
                  value: "settings-metadata",
                  class: "p-4 h-full overflow-auto"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Section, "Section").$$render($$result, { label: "Metadata" }, {}, {
                      default: () => {
                        return `<div class="h-full gap-8 flex flex-col">${validate_component(Label, "Label").$$render($$result, { label: "Summary" }, {}, {
                          default: () => {
                            return `${validate_component(MetadataGen, "MetadataGen").$$render(
                              $$result,
                              {
                                promptConfigName: "flowSummary",
                                flow: $flowStore.value,
                                elementProps: {
                                  type: "text",
                                  id: "flow-summary",
                                  placeholder: "Short summary to be displayed when listed"
                                },
                                content: $flowStore.summary
                              },
                              {
                                content: ($$value) => {
                                  $flowStore.summary = $$value;
                                  $$settled = false;
                                }
                              },
                              {}
                            )}`;
                          }
                        })} ${!noEditor ? `${validate_component(Label, "Label").$$render($$result, { label: "Path" }, {}, {
                          default: () => {
                            return `${validate_component(Path, "Path").$$render(
                              $$result,
                              {
                                autofocus: false,
                                initialPath,
                                namePlaceholder: "flow",
                                kind: "flow",
                                this: path,
                                dirty: dirtyPath,
                                path: $pathStore
                              },
                              {
                                this: ($$value) => {
                                  path = $$value;
                                  $$settled = false;
                                },
                                dirty: ($$value) => {
                                  dirtyPath = $$value;
                                  $$settled = false;
                                },
                                path: ($$value) => {
                                  $pathStore = $$value;
                                  $$settled = false;
                                }
                              },
                              {}
                            )}`;
                          }
                        })}` : ``} ${validate_component(Label, "Label").$$render($$result, { label: "Description" }, {}, {
                          default: () => {
                            return `${validate_component(MetadataGen, "MetadataGen").$$render(
                              $$result,
                              {
                                promptConfigName: "flowDescription",
                                flow: $flowStore.value,
                                class: "w-full",
                                elementType: "textarea",
                                elementProps: {
                                  id: "inp",
                                  placeholder: "What this flow does and how to use it."
                                },
                                content: $flowStore.description
                              },
                              {
                                content: ($$value) => {
                                  $flowStore.description = $$value;
                                  $$settled = false;
                                }
                              },
                              {}
                            )}`;
                          }
                        })}  ${validate_component(Toggle, "Toggle").$$render(
                          $$result,
                          {
                            disabled: !$enterpriseLicense || isCloudHosted(),
                            checked: $flowStore.value.priority !== void 0 && $flowStore.value.priority > 0,
                            options: {
                              right: `Label as high priority`,
                              rightTooltip: `All jobs scheduled by flows labeled as high priority take precedence over the other jobs in the jobs queue. ${!$enterpriseLicense ? "This is a feature only available on enterprise edition." : ""}`
                            }
                          },
                          {},
                          {
                            right: () => {
                              return `<input type="number" class="!w-16 ml-4" ${$flowStore.value.priority === void 0 ? "disabled" : ""}${add_attribute("value", $flowStore.value.priority, 0)}>`;
                            }
                          }
                        )} ${validate_component(Toggle, "Toggle").$$render(
                          $$result,
                          {
                            size: "sm",
                            checked: Boolean($flowStore.visible_to_runner_only),
                            options: {
                              right: "Make runs invisible to others",
                              rightTooltip: "When this option is enabled, manual executions of this script are invisible to users other than the user running it, including the owner(s). This setting can be overridden when this script is run manually from the advanced menu."
                            }
                          },
                          {},
                          {}
                        )} <div class="flex flex-row items-center gap-1">${validate_component(ErrorHandlerToggleButton, "ErrorHandlerToggleButton").$$render(
                          $$result,
                          {
                            kind: "flow",
                            scriptOrFlowPath: $pathStore,
                            iconOnly: false,
                            errorHandlerMuted: $flowStore.ws_error_handler_muted
                          },
                          {
                            errorHandlerMuted: ($$value) => {
                              $flowStore.ws_error_handler_muted = $$value;
                              $$settled = false;
                            }
                          },
                          {}
                        )}</div> ${validate_component(Slider, "Slider").$$render($$result, { text: "How to trigger flows?" }, {}, {
                          default: () => {
                            return `<div class="text-sm text-tertiary border p-4 mb-20">On-demand:
										<ul class="pt-4"><li data-svelte-h="svelte-o15b0d">1. <a href="https://www.windmill.dev/docs/core_concepts/auto_generated_uis" target="_blank">Auto-generated UIs</a></li> <li data-svelte-h="svelte-1bevm2t">2. <a href="${escape(base, true) + "/apps/add?nodraft=true"}" target="_blank">App Editor</a> for
												customized-UIs</li> <li data-svelte-h="svelte-1mo60ey">3. <a href="${escape(base, true) + "/schedules"}" target="_blank">Scheduling</a></li> <li data-svelte-h="svelte-1eughyl">4. <a href="https://www.windmill.dev/docs/advanced/cli" target="_blank">Windmill CLI</a></li> <br> <li class="mt-2" data-svelte-h="svelte-qrh5jo"><div class="flex flex-col gap-2"><p>From external events:</p></div></li> <li class="mt-2">5. Send a <a href="https://www.windmill.dev/docs/core_concepts/webhooks" target="_blank" data-svelte-h="svelte-192elm8">webhook</a>
												after each event:
												<ul class="list-disc pl-4"><li>Async ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                              default: () => {
                                return `Return an uuid instantly that you can use to fetch status and result`;
                              }
                            })}:
														<a${add_attribute("href", url, 0)} class="whitespace-nowrap text-ellipsis overflow-hidden mr-1">${escape(url)} <span class="text-secondary ml-2">${validate_component(Clipboard, "Clipboard").$$render($$result, {}, {}, {})}</span></a></li> <li>Sync ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                              default: () => {
                                return `Wait for result within a timeout of 20s`;
                              }
                            })}:
														<a${add_attribute("href", syncedUrl, 0)} class="whitespace-nowrap text-ellipsis overflow-hidden mr-1">${escape(syncedUrl)} <span class="text-secondary ml-2">${validate_component(Clipboard, "Clipboard").$$render($$result, {}, {}, {})}</span></a></li></ul></li> <br> <li data-svelte-h="svelte-sg6lcy">6. Use a <a href="https://www.windmill.dev/docs/flows/flow_trigger" target="_blank">trigger script</a>
												and schedule this flow to run as frequently as needed and compare a state persisted
												in Windmill to the state of the external system. If a difference is detected,
												then the rest of the flow is triggered. Oftentimes, the second step of a flow
												is a for-loop that will iterate over every elements. When using a trigger, a
												default schedule will be created.
												<img class="shadow-lg border rounded" alt="static button" src="${escape(base, true) + "/trigger_button.png"}"></li></ul></div>`;
                          }
                        })}</div>`;
                      }
                    })}`;
                  }
                }
              )} ${validate_component(TabContent, "TabContent").$$render(
                $$result,
                {
                  value: "settings-schedule",
                  class: "p-4 h-full overflow-scroll"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Alert, "Alert").$$render(
                      $$result,
                      {
                        type: "info",
                        title: "Primary Schedule",
                        documentationLink: "https://www.windmill.dev/docs/core_concepts/scheduling"
                      },
                      {},
                      {
                        default: () => {
                          return `Flows can be triggered by any schedules, their webhooks or their UI but they have only
							one primary schedule with which they share the same path. The primary schedule can be
							set here.`;
                        }
                      }
                    )} <div class="mt-4"></div> ${validate_component(FlowSchedules, "FlowSchedules").$$render($$result, {}, {}, {})}`;
                  }
                }
              )} ${validate_component(TabContent, "TabContent").$$render(
                $$result,
                {
                  value: "settings-same-worker",
                  class: "p-4 flex flex-col"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Section, "Section").$$render(
                      $$result,
                      {
                        label: "Shared Directory",
                        class: "flex flex-col"
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(Alert, "Alert").$$render($$result, { type: "info", title: "Shared Directory" }, {}, {
                            default: () => {
                              return `Steps will share a folder at \`./shared\` in which they can store heavier data and
								pass them to the next step. <br><br>Beware that the \`./shared\` folder is not
								preserved across suspends and sleeps. <br><br>
								Furthermore, steps&#39; worker groups is not respected and only the flow&#39;s worker group will
								be respected.`;
                            }
                          })} ${validate_component(Toggle, "Toggle").$$render(
                            $$result,
                            {
                              options: { right: "Shared Directory on `./shared`" },
                              class: "mt-2",
                              checked: $flowStore.value.same_worker
                            },
                            {
                              checked: ($$value) => {
                                $flowStore.value.same_worker = $$value;
                                $$settled = false;
                              }
                            },
                            {}
                          )}`;
                        }
                      }
                    )}`;
                  }
                }
              )} ${validate_component(TabContent, "TabContent").$$render(
                $$result,
                {
                  value: "settings-cache",
                  class: "p-4 flex flex-col"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Section, "Section").$$render($$result, { label: "Cache" }, {}, {
                      action: () => {
                        return `${validate_component(Toggle, "Toggle").$$render(
                          $$result,
                          {
                            size: "xs",
                            checked: Boolean($flowStore.value.cache_ttl),
                            options: {
                              right: "Cache the results for each possible inputs"
                            }
                          },
                          {},
                          {}
                        )} `;
                      },
                      default: () => {
                        return `<div class="flex gap-x-4 flex-col gap-2"><div class="text-xs" data-svelte-h="svelte-19wkkgz">How long to keep the cache valid</div> <div>${$flowStore.value.cache_ttl ? `${validate_component(SecondsInput, "SecondsInput").$$render(
                          $$result,
                          { seconds: $flowStore.value.cache_ttl },
                          {
                            seconds: ($$value) => {
                              $flowStore.value.cache_ttl = $$value;
                              $$settled = false;
                            }
                          },
                          {}
                        )}` : `${validate_component(SecondsInput, "SecondsInput").$$render($$result, { disabled: true }, {}, {})}`}</div></div>`;
                      }
                    })}`;
                  }
                }
              )} ${validate_component(TabContent, "TabContent").$$render(
                $$result,
                {
                  value: "settings-worker-group",
                  class: "p-4 flex flex-col"
                },
                {},
                {
                  header: () => {
                    return `${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                      default: () => {
                        return `In this mode, every scripts of this flow is run on the workers dedicated to this
								flow that keep the scripts &quot;hot&quot; so that there is not cold start cost incurred.
								Steps can run at &gt;1500 rps in this mode.`;
                      }
                    })} `;
                  },
                  default: () => {
                    return `${validate_component(Alert, "Alert").$$render(
                      $$result,
                      {
                        type: "info",
                        title: "Worker Group Tag (Queue)"
                      },
                      {},
                      {
                        default: () => {
                          return `When a worker group tag is defined at the flow level, any steps inside the flow will
							run on any worker group that listen to that tag, regardless of the steps&#39; tag. If no
							worker group tags is defined, the flow controls will be executed with the default tag
							&#39;flow&#39; and the steps will be executed with their respective tag`;
                        }
                      }
                    )} <span class="my-4 text-lg font-bold" data-svelte-h="svelte-12ol4y9">Worker Group Tag (Queue)</span> ${validate_component(WorkerTagPicker, "WorkerTagPicker").$$render(
                      $$result,
                      { tag: $flowStore.tag },
                      {
                        tag: ($$value) => {
                          $flowStore.tag = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )} <div class="py-6"></div> <span class="my-4 text-lg font-bold flex items-baseline gap-8">Dedicated Worker ${!$enterpriseLicense ? `<div class="flex text-xs items-center gap-1 text-yellow-500 whitespace-nowrap">${validate_component(Alert_triangle, "AlertTriangle").$$render($$result, { size: 16 }, {}, {})}
									EE only</div>` : ``}</span> ${validate_component(Toggle, "Toggle").$$render(
                      $$result,
                      {
                        disabled: !$enterpriseLicense || isCloudHosted(),
                        size: "sm",
                        checked: Boolean($flowStore.dedicated_worker),
                        options: {
                          right: "Flow is run on dedicated workers"
                        }
                      },
                      {},
                      {}
                    )} ${$flowStore.dedicated_worker ? `<div class="py-2">${validate_component(Alert, "Alert").$$render(
                      $$result,
                      {
                        type: "info",
                        title: "Require dedicated workers"
                      },
                      {},
                      {
                        default: () => {
                          return `One worker in a worker group needs to be configured with dedicated worker set to: <pre>${escape($workspaceStore)}:flow/${escape($pathStore)}</pre>`;
                        }
                      }
                    )}</div>` : ``}`;
                  }
                }
              )} ${validate_component(TabContent, "TabContent").$$render(
                $$result,
                {
                  value: "settings-early-stop",
                  class: "p-4"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Section, "Section").$$render($$result, { label: "Early stop" }, {}, {
                      header: () => {
                        return `${validate_component(Tooltip, "Tooltip").$$render(
                          $$result,
                          {
                            documentationLink: "https://www.windmill.dev/docs/flows/early_stop"
                          },
                          {},
                          {
                            default: () => {
                              return `If defined, at the beginning of the step the predicate expression will be
									evaluated to decide if the flow should stop early.`;
                            }
                          }
                        )} `;
                      },
                      default: () => {
                        return `${validate_component(Toggle, "Toggle").$$render(
                          $$result,
                          {
                            checked: Boolean($flowStore.value.skip_expr),
                            options: { right: "Early stop if condition met" }
                          },
                          {},
                          {}
                        )} <div class="${"w-full border mt-2 p-2 flex flex-col " + escape($flowStore.value.skip_expr ? "" : "bg-surface-secondary", true)}">${$flowStore.value.skip_expr ? `<div class="border w-full">${validate_component(SimpleEditor, "SimpleEditor").$$render(
                          $$result,
                          {
                            lang: "javascript",
                            class: "small-editor",
                            extraLib: `declare const flow_input = ${JSON.stringify(schemaToObject(asSchema($flowStore.schema), $previewArgs))};
											declare const WM_SCHEDULED_FOR: string;`,
                            code: $flowStore.value.skip_expr
                          },
                          {
                            code: ($$value) => {
                              $flowStore.value.skip_expr = $$value;
                              $$settled = false;
                            }
                          },
                          {}
                        )} <div class="text-xs text-tertiary mt-2">You can use the variable \`flow_input\` to access the inputs of the flow. <br>The variable \`WM_SCHEDULED_FOR\` contains the time the flow was scheduled for
											which you can use to stop early non fresh jobs:
											<pre>new Date().getTime() - new Date(WM_SCHEDULED_FOR).getTime() ${escape(">")} X</pre></div></div>` : `<textarea disabled rows="3" class="min-h-[80px]"></textarea>`}</div>`;
                      }
                    })}`;
                  }
                }
              )} ${validate_component(TabContent, "TabContent").$$render(
                $$result,
                {
                  value: "settings-early-return",
                  class: "p-4"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Section, "Section").$$render($$result, { label: "Early Return" }, {}, {
                      default: () => {
                        return `<div class="py-2">${validate_component(Alert, "Alert").$$render(
                          $$result,
                          {
                            type: "info",
                            title: "Return sync endpoints early"
                          },
                          {},
                          {
                            default: () => {
                              return `If defined, sync endpoints will return early at the node defined here while the
									rest of the flow continue asynchronously.`;
                            }
                          }
                        )}</div> ${validate_component(Toggle, "Toggle").$$render(
                          $$result,
                          {
                            checked: Boolean($flowStore.value.early_return),
                            options: {
                              right: "Early return sync endpoint at a top-level step"
                            }
                          },
                          {},
                          {}
                        )} <div class="${"border max-w-[120px] mt-2 p-2 flex flex-col " + escape(
                          $flowStore.value.early_return ? "" : "bg-surface-secondary",
                          true
                        )}"><select name="oauth_name" id="oauth_name"><option${add_attribute("value", void 0, 0)}>Node&#39;s id</option>${each($flowStore.value?.modules?.map((x) => x.id), (name) => {
                          return `<option${add_attribute("value", name, 0)}>${escape(name)}</option>`;
                        })}</select></div>`;
                      }
                    })}`;
                  }
                }
              )} ${validate_component(TabContent, "TabContent").$$render(
                $$result,
                {
                  value: "settings-concurrency",
                  class: "p-4 flex flex-col"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Section, "Section").$$render(
                      $$result,
                      {
                        label: "Concurrency Limits",
                        eeOnly: true
                      },
                      {},
                      {
                        header: () => {
                          return `${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                            default: () => {
                              return `Allowed concurrency within a given timeframe`;
                            }
                          })} `;
                        },
                        default: () => {
                          return `<div class="flex flex-col gap-4">${validate_component(Label, "Label").$$render(
                            $$result,
                            {
                              label: "Max number of executions within the time window"
                            },
                            {},
                            {
                              default: () => {
                                return `<div class="flex flex-row gap-2 max-w-sm"><input ${!$enterpriseLicense ? "disabled" : ""} type="number"${add_attribute("value", $flowStore.value.concurrent_limit, 0)}> ${validate_component(Button, "Button").$$render(
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
                                  seconds: $flowStore.value.concurrency_time_window_s
                                },
                                {
                                  seconds: ($$value) => {
                                    $flowStore.value.concurrency_time_window_s = $$value;
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
                                    return `Concurrency keys are global, you can have them be workspace specific using the
											variable \`$workspace\`. You can also use an argument&#39;s value using
											\`$args[name_of_arg]\``;
                                  }
                                })} `;
                              },
                              default: () => {
                                return `<input type="text" autofocus ${!$enterpriseLicense ? "disabled" : ""}${add_attribute("placeholder", `$workspace/script/${$pathStore}-$args[foo]`, 0)}${add_attribute("value", $flowStore.value.concurrency_key, 0)}>`;
                              }
                            }
                          )}</div>`;
                        }
                      }
                    )}`;
                  }
                }
              )} `;
            },
            default: () => {
              return `${validate_component(Tab, "Tab").$$render($$result, { value: "settings-metadata" }, {}, {
                default: () => {
                  return `Metadata`;
                }
              })} ${!noEditor ? `${validate_component(Tab, "Tab").$$render(
                $$result,
                {
                  value: "settings-schedule",
                  active: $schedule.enabled
                },
                {},
                {
                  default: () => {
                    return `Schedule`;
                  }
                }
              )}` : ``} ${validate_component(Tab, "Tab").$$render(
                $$result,
                {
                  value: "settings-same-worker",
                  active: $flowStore.value.same_worker
                },
                {},
                {
                  default: () => {
                    return `Shared Directory`;
                  }
                }
              )} ${validate_component(Tab, "Tab").$$render(
                $$result,
                {
                  value: "settings-early-stop",
                  active: Boolean($flowStore.value.skip_expr)
                },
                {},
                {
                  default: () => {
                    return `Early Stop`;
                  }
                }
              )} ${validate_component(Tab, "Tab").$$render(
                $$result,
                {
                  value: "settings-early-return",
                  active: Boolean($flowStore.value.early_return)
                },
                {},
                {
                  default: () => {
                    return `Early Return`;
                  }
                }
              )} ${validate_component(Tab, "Tab").$$render($$result, { value: "settings-worker-group" }, {}, {
                default: () => {
                  return `Worker Group`;
                }
              })} ${validate_component(Tab, "Tab").$$render($$result, { value: "settings-concurrency" }, {}, {
                default: () => {
                  return `Concurrency`;
                }
              })} ${validate_component(Tab, "Tab").$$render(
                $$result,
                {
                  value: "settings-cache",
                  active: Boolean($flowStore.value.cache_ttl)
                },
                {},
                {
                  default: () => {
                    return `Cache`;
                  }
                }
              )}`;
            }
          }
        )}</div>`;
      }
    })}</div>`;
  } while (!$$settled);
  $$unsubscribe_workerTags();
  $$unsubscribe_selectedId();
  $$unsubscribe_pathStore();
  $$unsubscribe_workspaceStore();
  $$unsubscribe_flowStore();
  $$unsubscribe_enterpriseLicense();
  $$unsubscribe_previewArgs();
  $$unsubscribe_schedule();
  return $$rendered;
});
const CapturePayload = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $pathStore, $$unsubscribe_pathStore;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $previewArgs, $$unsubscribe_previewArgs;
  let $flowStore, $$unsubscribe_flowStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  const { previewArgs, flowStore, pathStore } = getContext("FlowEditorContext");
  $$unsubscribe_previewArgs = subscribe(previewArgs, (value) => $previewArgs = value);
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => $flowStore = value);
  $$unsubscribe_pathStore = subscribe(pathStore, (value) => $pathStore = value);
  let drawer;
  let captureInput = void 0;
  let jsonSchema = void 0;
  function openDrawer() {
    drawer.openDrawer();
  }
  let hostname = "SSR";
  if ($$props.openDrawer === void 0 && $$bindings.openDrawer && openDrawer !== void 0) $$bindings.openDrawer(openDrawer);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
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
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Capture request" }, {}, {
            actions: () => {
              return `${validate_component(Button, "Button").$$render($$result, { size: "sm", variant: "border" }, {}, {
                default: () => {
                  return `Copy only as test args`;
                }
              })} ${validate_component(Button, "Button").$$render($$result, { size: "sm" }, {}, {
                default: () => {
                  return `Copy as flow inputs and test args`;
                }
              })} `;
            },
            default: () => {
              return `Send a payload at: <div><a class="text-xs border p-2 flex flex-row items-center gap-2 justify-between" href="${escape(hostname, true) + "/api/w/" + escape($workspaceStore, true) + "/capture_u/" + escape($pathStore, true)}">${escape(hostname)}/api/w/${escape($workspaceStore)}/capture_u/${escape($pathStore)} ${validate_component(Clipboard, "Clipboard").$$render($$result, { size: 14 }, {}, {})}</a></div> <p class="text-secondary mt-4 text-xs" data-svelte-h="svelte-qa30wc">CURL example</p> <div class="text-xs box mb-4 b"><pre class="overflow-auto">${escape(`curl -X POST ${hostname}/api/w/${$workspaceStore}/capture_u/${$pathStore} \\
   -H 'Content-Type: application/json' \\
   -d '{"foo": 42}'`)}</pre></div> <div class="items-center flex flex-row gap-x-2 text-xs text-secondary" data-svelte-h="svelte-dj9asd">Listening for new requests
			<span class="relative flex h-3 w-3"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span></span></div> <div class="box p-2 my-2 mb-4">${validate_component(ObjectViewer, "ObjectViewer").$$render($$result, { topBrackets: true, json: captureInput }, {}, {})}</div> <h3 class="my-2 mt-8" data-svelte-h="svelte-10fymn0">Derived schema</h3> <div class="box p-2">${validate_component(SchemaViewer, "SchemaViewer").$$render($$result, { schema: jsonSchema }, {}, {})}</div> <h3 class="mt-8" data-svelte-h="svelte-d1i9ji">Test args</h3> ${validate_component(SchemaForm, "SchemaForm").$$render(
                $$result,
                {
                  class: "pt-4",
                  schema: $flowStore.schema,
                  args: $previewArgs
                },
                {},
                {}
              )}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_pathStore();
  $$unsubscribe_workspaceStore();
  $$unsubscribe_previewArgs();
  $$unsubscribe_flowStore();
  return $$rendered;
});
const yOffset = 191;
const FlowInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $flowStore, $$unsubscribe_flowStore;
  let $$unsubscribe_flowStateStore;
  let $previewArgs, $$unsubscribe_previewArgs;
  let { noEditor } = $$props;
  const { flowStore, flowStateStore, previewArgs, initialPath } = getContext("FlowEditorContext");
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => $flowStore = value);
  $$unsubscribe_flowStateStore = subscribe(flowStateStore, (value) => value);
  $$unsubscribe_previewArgs = subscribe(previewArgs, (value) => $previewArgs = value);
  let capturePayload;
  let inputLibraryDrawer;
  let jsonPayload;
  let pendingJson;
  let addProperty = void 0;
  if ($$props.noEditor === void 0 && $$bindings.noEditor && noEditor !== void 0) $$bindings.noEditor(noEditor);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(CapturePayload, "CapturePayload").$$render(
      $$result,
      { this: capturePayload },
      {
        this: ($$value) => {
          capturePayload = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(FlowCard, "FlowCard").$$render($$result, { noEditor, title: "Flow Input" }, {}, {
      default: () => {
        return `<div class="flex flex-row items-center gap-2 px-4 py-2 border-b"><div data-svelte-h="svelte-l241pe">Copy input&#39;s schema from</div> ${validate_component(Button, "Button").$$render($$result, { color: "dark", size: "xs" }, {}, {
          default: () => {
            return `A request`;
          }
        })} ${validate_component(Button, "Button").$$render($$result, { color: "dark", size: "xs" }, {}, {
          default: () => {
            return `A JSON`;
          }
        })} ${validate_component(Button, "Button").$$render($$result, { color: "dark", size: "xs" }, {}, {
          default: () => {
            return `Past Runs/Input library`;
          }
        })} ${validate_component(Button, "Button").$$render(
          $$result,
          {
            color: "dark",
            size: "xs",
            disabled: $flowStore.value.modules.length === 0 || $flowStore.value.modules[0].value.type == "identity"
          },
          {},
          {
            default: () => {
              return `First step&#39;s inputs`;
            }
          }
        )}</div> <div class="p-4 border-b">${validate_component(AddProperty, "AddProperty").$$render(
          $$result,
          {
            schema: $flowStore.schema,
            this: addProperty
          },
          {
            schema: ($$value) => {
              $flowStore.schema = $$value;
              $$settled = false;
            },
            this: ($$value) => {
              addProperty = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div> ${validate_component(EditableSchemaForm, "EditableSchemaForm").$$render(
          $$result,
          {
            isFlowInput: true,
            offset: yOffset,
            displayWebhookWarning: true,
            schema: $flowStore.schema
          },
          {
            schema: ($$value) => {
              $flowStore.schema = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "800px", this: jsonPayload },
      {
        this: ($$value) => {
          jsonPayload = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render(
            $$result,
            {
              title: "Input schema from JSON",
              noPadding: true
            },
            {},
            {
              actions: () => {
                return `${validate_component(Button, "Button").$$render($$result, { size: "sm" }, {}, {
                  default: () => {
                    return `Import`;
                  }
                })} `;
              },
              default: () => {
                return `${validate_component(SimpleEditor, "SimpleEditor").$$render(
                  $$result,
                  {
                    lang: "json",
                    class: "h-full",
                    code: pendingJson
                  },
                  {
                    code: ($$value) => {
                      pendingJson = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            }
          )}`;
        }
      }
    )} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { this: inputLibraryDrawer },
      {
        this: ($$value) => {
          inputLibraryDrawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Input library " + initialPath }, {}, {
            default: () => {
              return `${validate_component(SavedInputs, "SavedInputs").$$render(
                $$result,
                {
                  flowPath: initialPath,
                  isValid: true,
                  args: $previewArgs,
                  canSaveInputs: false
                },
                {},
                {}
              )}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_flowStore();
  $$unsubscribe_flowStateStore();
  $$unsubscribe_previewArgs();
  return $$rendered;
});
const FlowFailureModule = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $flowStore, $$unsubscribe_flowStore;
  let { noEditor = false } = $$props;
  const { flowStore } = getContext("FlowEditorContext");
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => $flowStore = value);
  if ($$props.noEditor === void 0 && $$bindings.noEditor && noEditor !== void 0) $$bindings.noEditor(noEditor);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$flowStore.value.failure_module ? `${validate_component(FlowModuleWrapper, "FlowModuleWrapper").$$render(
      $$result,
      {
        noEditor,
        previousModule: void 0,
        flowModule: $flowStore.value.failure_module
      },
      {
        flowModule: ($$value) => {
          $flowStore.value.failure_module = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_flowStore();
  return $$rendered;
});
const FlowConstants = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let scriptModules;
  let resources;
  let steps;
  let $flowStateStore, $$unsubscribe_flowStateStore;
  let $flowStore, $$unsubscribe_flowStore;
  let { noEditor } = $$props;
  let hideOptional = false;
  const { flowStateStore, flowStore } = getContext("FlowEditorContext");
  $$unsubscribe_flowStateStore = subscribe(flowStateStore, (value) => $flowStateStore = value);
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => $flowStore = value);
  setContext("PropPickerWrapper", {
    focusProp: () => {
    },
    propPickerConfig: writable(void 0),
    clearFocus: () => {
    }
  });
  if ($$props.noEditor === void 0 && $$bindings.noEditor && noEditor !== void 0) $$bindings.noEditor(noEditor);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    scriptModules = dfs($flowStore.value.modules, (x) => x).map((x) => [x.value, x]).filter((x) => x[0].type == "script" || x[0].type == "rawscript" || x[0].type == "flow");
    resources = Object.fromEntries(scriptModules.map(([v, m]) => [
      m.id,
      Object.entries(v.input_transforms).map((x) => {
        let schema = $flowStateStore[m.id]?.schema;
        let val = void 0;
        const [k, inputTransform] = x;
        const v2 = schema.properties[k];
        if (v2.format?.includes("resource") && inputTransform.type === "static" && (inputTransform.value === "" || inputTransform.value === void 0 || inputTransform.value === null)) {
          val = { argName: k, type: v2.format.split("-")[1] };
        }
        return val;
      }).filter(Boolean)
    ]).filter((x) => x[1].length > 0));
    steps = scriptModules.map(([v, m]) => [
      v.input_transforms,
      Object.entries(v.input_transforms).filter((x) => {
        const shouldDisplay = hideOptional ? $flowStateStore[m.id]?.schema.required?.includes(x[0]) : true;
        return x[1].type == "static" && shouldDisplay;
      }).map((x) => x[0]),
      m
    ]).filter(([i, f, m]) => f.length > 0);
    $$rendered = `<div class="min-h-full">${validate_component(FlowCard, "FlowCard").$$render($$result, { noEditor, title: "All Static Inputs" }, {}, {
      header: () => {
        return `${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            slot: "header",
            options: { left: "Hide optional inputs" },
            checked: hideOptional
          },
          {
            checked: ($$value) => {
              hideOptional = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      },
      default: () => {
        return `<div class="min-h-full flex-1">${validate_component(Alert, "Alert").$$render(
          $$result,
          {
            type: "info",
            title: "Static Inputs",
            class: "m-4"
          },
          {},
          {
            default: () => {
              return `This page centralizes the static inputs of every steps. It is akin to a file containing all
				constants. Modifying a value here modify it in the step input directly. It is especially
				useful when forking a flow to get an overview of all the variables to parametrize that are
				not exposed directly as flow inputs.`;
            }
          }
        )} ${Object.keys(resources).length > 0 ? `${validate_component(Alert, "Alert").$$render(
          $$result,
          {
            type: "warning",
            title: "Missing resources",
            class: "m-4"
          },
          {},
          {
            default: () => {
              return `The following resources are missing and the flow will not be fully runnable until they are
					set. Add your own resources:
					${each(Object.entries(resources), ([id, r]) => {
                return `${each(r, (resource) => {
                  return `<div class="mt-2">${validate_component(Badge, "Badge").$$render($$result, { color: "red" }, {}, {
                    default: () => {
                      return `${escape(id)}`;
                    }
                  })} is missing a resource of type${escape(" ")} ${validate_component(Badge, "Badge").$$render($$result, { color: "red" }, {}, {
                    default: () => {
                      return `${escape(resource?.type)}`;
                    }
                  })} for the input${escape(" ")} ${validate_component(Badge, "Badge").$$render($$result, { color: "red" }, {}, {
                    default: () => {
                      return `${escape(resource?.argName)}`;
                    }
                  })} </div>`;
                })}`;
              })}`;
            }
          }
        )}` : ``} ${steps.length == 0 ? `<div class="mt-2"></div> ${$flowStore.value.modules.length == 0 ? `${validate_component(Alert, "Alert").$$render(
          $$result,
          {
            type: "warning",
            title: "No steps",
            class: "m-4"
          },
          {},
          {
            default: () => {
              return `This flow has no steps. Add a step to see its static inputs.`;
            }
          }
        )}` : `${validate_component(Alert, "Alert").$$render(
          $$result,
          {
            type: "warning",
            title: "No static inputs",
            class: "m-4"
          },
          {},
          {
            default: () => {
              return `This flow has no steps with static inputs. Add a step with static inputs to see them
						here.`;
            }
          }
        )}`}` : ``} ${each(steps, ([args, filter, m]) => {
          return `${filter.length > 0 ? `<div class="relative h-full border-t p-4"><h2 class="sticky w-full top-0 z-10 inline-flex items-center py-2"><span class="mr-4">${escape(m.summary || m.value["path"] || "Inline script")}</span> ${validate_component(Badge, "Badge").$$render($$result, { large: true, color: "indigo" }, {}, {
            default: () => {
              return `${escape(m.id)}`;
            }
          })}</h2> ${validate_component(InputTransformSchemaForm, "InputTransformSchemaForm").$$render(
            $$result,
            {
              noDynamicToggle: true,
              filter,
              class: "mt-2",
              schema: $flowStateStore[m.id]?.schema ?? {},
              args
            },
            {
              args: ($$value) => {
                args = $$value;
                $$settled = false;
              }
            },
            {}
          )} </div>` : ``}`;
        })}</div>`;
      }
    })}</div>`;
  } while (!$$settled);
  $$unsubscribe_flowStateStore();
  $$unsubscribe_flowStore();
  return $$rendered;
});
function checkDup(modules) {
  let seenModules = [];
  for (const m of modules) {
    if (seenModules.includes(m.id)) {
      console.error(`Duplicate module id: ${m.id}`);
      return m.id;
    }
    seenModules.push(m.id);
  }
}
const FlowEditorPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $flowStore, $$unsubscribe_flowStore;
  let $$unsubscribe_flowStateStore;
  let $$unsubscribe_flowInputsStore;
  let $selectedId, $$unsubscribe_selectedId;
  let { noEditor = false } = $$props;
  let { enableAi = false } = $$props;
  const { selectedId, flowStore, flowStateStore, flowInputsStore } = getContext("FlowEditorContext");
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => $selectedId = value);
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => $flowStore = value);
  $$unsubscribe_flowStateStore = subscribe(flowStateStore, (value) => value);
  $$unsubscribe_flowInputsStore = subscribe(flowInputsStore, (value) => value);
  if ($$props.noEditor === void 0 && $$bindings.noEditor && noEditor !== void 0) $$bindings.noEditor(noEditor);
  if ($$props.enableAi === void 0 && $$bindings.enableAi && enableAi !== void 0) $$bindings.enableAi(enableAi);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$selectedId?.startsWith("settings") ? `${validate_component(FlowSettings, "FlowSettings").$$render($$result, { noEditor }, {}, {})}` : `${$selectedId === "Input" ? `${validate_component(FlowInput, "FlowInput").$$render($$result, { noEditor }, {}, {})}` : `${$selectedId === "Result" ? `<p class="p-4 text-secondary" data-svelte-h="svelte-1glyvk9">Nothing to show about the result node. Happy flow building!</p>` : `${$selectedId === "constants" ? `${validate_component(FlowConstants, "FlowConstants").$$render($$result, { noEditor }, {}, {})}` : `${$selectedId === "failure" ? `${validate_component(FlowFailureModule, "FlowFailureModule").$$render($$result, { noEditor }, {}, {})}` : (() => {
      let dup = checkDup($flowStore.value.modules);
      return ` ${dup ? `<div class="text-red-600 text-xl p-2">There are duplicate modules in the flow at id: ${escape(dup)}</div>` : `${each($flowStore.value.modules, (flowModule, index) => {
        return `${validate_component(FlowModuleWrapper, "FlowModuleWrapper").$$render(
          $$result,
          {
            noEditor,
            previousModule: $flowStore.value.modules[index - 1],
            enableAi,
            flowModule
          },
          {
            flowModule: ($$value) => {
              flowModule = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      })}`}`;
    })()}`}`}`}`}`;
  } while (!$$settled);
  $$unsubscribe_flowStore();
  $$unsubscribe_flowStateStore();
  $$unsubscribe_flowInputsStore();
  $$unsubscribe_selectedId();
  return $$rendered;
});
const FlowSettingsItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let settingsClass;
  let $selectedId, $$unsubscribe_selectedId;
  let $flowStore, $$unsubscribe_flowStore;
  const { selectedId, flowStore } = getContext("FlowEditorContext");
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => $selectedId = value);
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => $flowStore = value);
  settingsClass = classNames("border w-full rounded-sm p-2 bg-surface text-sm cursor-pointer flex items-center", $selectedId?.startsWith("settings") ? "outline outline-offset-1 outline-2  outline-slate-900 dark:bg-white/5 dark:outline-slate-800/60 dark:border-gray-400" : "");
  $$unsubscribe_selectedId();
  $$unsubscribe_flowStore();
  return `<button${add_attribute("class", settingsClass, 0)}>${validate_component(Sliders_horizontal, "SlidersHorizontal").$$render($$result, { size: 16 }, {}, {})} <span class="text-xs font-bold flex flex-row justify-between w-full gap-2 items-center truncate ml-1">Settings

		${$flowStore.value.same_worker ? `${validate_component(Badge, "Badge").$$render($$result, { color: "blue", baseClass: "truncate" }, {}, {
    default: () => {
      return `./shared`;
    }
  })}` : ``}</span></button>`;
});
const FlowConstantsItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let settingsClass;
  let $selectedId, $$unsubscribe_selectedId;
  const { selectedId } = getContext("FlowEditorContext");
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => $selectedId = value);
  settingsClass = classNames("border w-full rounded-sm p-2 bg-surface  text-sm cursor-pointer flex items-center", $selectedId == "constants" ? "outline outline-offset-1 outline-2  outline-slate-900 dark:bg-white/5 dark:outline-slate-800/60 dark:border-gray-400" : "");
  $$unsubscribe_selectedId();
  return `<button${add_attribute("class", settingsClass, 0)}>${validate_component(Dollar_sign, "DollarSign").$$render($$result, { size: 16 }, {}, {})} <span class="text-xs flex flex-row justify-between w-full gap-2 items-center truncate ml-1" data-svelte-h="svelte-148t50c">All Static Inputs</span></button>`;
});
const FlowErrorHandlerItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $flowStore, $$unsubscribe_flowStore;
  let $selectedId, $$unsubscribe_selectedId;
  let $$unsubscribe_flowStateStore;
  let $copilotCurrentStepStore, $$unsubscribe_copilotCurrentStepStore;
  let { small } = $$props;
  const { selectedId, flowStateStore, flowStore } = getContext("FlowEditorContext");
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => $selectedId = value);
  $$unsubscribe_flowStateStore = subscribe(flowStateStore, (value) => value);
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => $flowStore = value);
  const { currentStepStore: copilotCurrentStepStore } = getContext("FlowCopilotContext") || {};
  $$unsubscribe_copilotCurrentStepStore = subscribe(copilotCurrentStepStore, (value) => $copilotCurrentStepStore = value);
  if ($$props.small === void 0 && $$bindings.small && small !== void 0) $$bindings.small(small);
  $$unsubscribe_flowStore();
  $$unsubscribe_selectedId();
  $$unsubscribe_flowStateStore();
  $$unsubscribe_copilotCurrentStepStore();
  return `  <div${add_attribute(
    "class",
    classNames(
      "z-10",
      $copilotCurrentStepStore !== void 0 ? "border-gray-500/75" : "cursor-pointer",
      "border transition-colors duration-[400ms] ease-linear rounded-sm px-2 py-1 bg-surface text-sm flex justify-between items-center flex-row overflow-x-hidden relative",
      $selectedId?.includes("failure") ? "outline outline-offset-1 outline-2 outline-slate-900 dark:outline-slate-900/0 dark:bg-surface-secondary dark:border-gray-400" : ""
    ),
    0
  )}${add_attribute("style", small ? "min-width: 200px" : "min-width: 275px", 0)}>${$copilotCurrentStepStore !== void 0 ? `<div class="absolute inset-0 bg-gray-500 bg-opacity-75 z-[900]"></div>` : ``} <div class="flex justify-between items-center flex-wrap gap-2">${validate_component(Bug, "Bug").$$render($$result, { size: 16 }, {}, {})} <span class="font-bold text-xs" data-svelte-h="svelte-7ylqjr">Error Handler</span></div> <div class="items-center truncate flex text-xs">${Boolean($flowStore?.value?.failure_module) ? `<span>${escape($flowStore.value.failure_module?.summary || ($flowStore.value.failure_module?.value.type === "rawscript" ? `${$flowStore.value.failure_module?.value.language}` : "TBD"))}</span>` : ``}</div> ${validate_component(Toggle, "Toggle").$$render(
    $$result,
    {
      size: small ? "xs" : "sm",
      checked: Boolean($flowStore?.value?.failure_module),
      id: "error-handler-toggle"
    },
    {},
    {}
  )}</div>`;
});
const FlowBranchAll = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $flowStateStore, $$unsubscribe_flowStateStore;
  let $flowStore, $$unsubscribe_flowStore;
  const { flowStore, flowStateStore } = getContext("FlowEditorContext");
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => $flowStore = value);
  $$unsubscribe_flowStateStore = subscribe(flowStateStore, (value) => $flowStateStore = value);
  let tutorial = void 0;
  function runTutorial(indexToInsertAt) {
    tutorial?.runTutorial({ indexToInsertAt });
  }
  if ($$props.runTutorial === void 0 && $$bindings.runTutorial && runTutorial !== void 0) $$bindings.runTutorial(runTutorial);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Tutorial, "Tutorial").$$render(
      $$result,
      {
        index: 3,
        name: "branchall",
        getSteps: (driver, options) => {
          const id = nextId($flowStateStore, $flowStore);
          const index = options?.indexToInsertAt ?? $flowStore.value.modules.length;
          const isFirst = id === "a";
          const steps = [
            {
              popover: {
                title: "Branch all tutorial",
                description: "Learn how to build our first branch to be executed on a condition. You can use arrow keys to navigate"
              }
            },
            {
              element: `#flow-editor-add-step-${index}`,
              popover: {
                title: "Add a step",
                description: "Click here to add a step to your flow",
                onNextClick: () => {
                  triggerAddFlowStep(index);
                  setTimeout(() => {
                    driver.moveNext();
                  });
                }
              }
            },
            {
              popover: {
                title: "Steps kind",
                description: "Choose the kind of step you want to add. Let's start with a simple action"
              },
              element: "#flow-editor-insert-module"
            },
            {
              popover: {
                title: "Insert Branch all",
                description: "Let's pick branch all",
                onNextClick: () => {
                  selectFlowStepKind(isFirst ? 6 : 5);
                  setTimeout(() => {
                    driver.moveNext();
                  });
                }
              },
              element: `#flow-editor-insert-module > div > button:nth-child(${isFirst ? 6 : 5})`
            },
            {
              element: "#flow-editor-branch-all-wrapper",
              popover: {
                title: "Branches",
                description: "Here you can add a summary to a branch, or configure the branches to run in parallel",
                onNextClick: () => {
                  setTimeout(() => {
                    driver.moveNext();
                  });
                }
              }
            },
            {
              popover: {
                title: "Add steps",
                description: "You can now add step to one of the branches",
                onNextClick: () => {
                  setTimeout(() => {
                    driver.moveNext();
                    updateProgress(3);
                  });
                }
              }
            }
          ];
          return steps;
        },
        this: tutorial
      },
      {
        this: ($$value) => {
          tutorial = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_flowStateStore();
  $$unsubscribe_flowStore();
  return $$rendered;
});
const FlowBranchOne = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $flowStateStore, $$unsubscribe_flowStateStore;
  let $flowStore, $$unsubscribe_flowStore;
  const { flowStore, flowStateStore } = getContext("FlowEditorContext");
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => $flowStore = value);
  $$unsubscribe_flowStateStore = subscribe(flowStateStore, (value) => $flowStateStore = value);
  const dispatch = createEventDispatcher();
  let tutorial = void 0;
  function runTutorial(indexToInsertAt) {
    tutorial?.runTutorial({ indexToInsertAt });
  }
  if ($$props.runTutorial === void 0 && $$bindings.runTutorial && runTutorial !== void 0) $$bindings.runTutorial(runTutorial);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Tutorial, "Tutorial").$$render(
      $$result,
      {
        index: 2,
        name: "branchone",
        getSteps: (driver, options) => {
          const id = nextId($flowStateStore, $flowStore);
          const index = options?.indexToInsertAt ?? $flowStore.value.modules.length;
          const isFirst = id === "a";
          const steps = [
            {
              popover: {
                title: "Branch one tutorial",
                description: "Learn how to build our first branch to be executed on a condition. You can use arrow keys to navigate"
              }
            },
            {
              element: `#flow-editor-add-step-${index}`,
              popover: {
                title: "Branch one",
                description: "Windmill supports branches, let us add one",
                onNextClick: () => {
                  triggerAddFlowStep(index);
                  setTimeout(() => {
                    driver.moveNext();
                  });
                }
              }
            },
            {
              popover: {
                title: "Steps kind",
                description: "Choose the kind of step you want to add."
              },
              element: "#flow-editor-insert-module"
            },
            {
              popover: {
                title: "Insert Branch one",
                description: "Let's pick branch one",
                onNextClick: () => {
                  selectFlowStepKind(isFirst ? 5 : 4);
                  setTimeout(() => {
                    driver.moveNext();
                  });
                }
              },
              element: `#flow-editor-insert-module > div > button:nth-child(${isFirst ? 5 : 4})`
            },
            {
              element: "#flow-editor-edit-predicate",
              popover: {
                title: "Edit predicate",
                description: "Click here to edit the predicate of your branch",
                onNextClick: () => {
                  clickButtonBySelector("#flow-editor-edit-predicate");
                  updateFlowModuleById($flowStore, id, (module) => {
                    if (module.value.type === "branchone") {
                      module.value.branches[0].expr = "result.a === 'foo'";
                    }
                  });
                  setTimeout(() => {
                    driver.moveNext();
                  });
                }
              }
            },
            {
              element: "#flow-editor-branch-one-wrapper",
              popover: {
                title: "Predicate saved",
                description: "You can now see the predicate of your branch",
                onNextClick: () => {
                  dispatch("reload");
                  setTimeout(() => {
                    driver.moveNext();
                  });
                }
              }
            },
            {
              popover: {
                title: "Add steps",
                description: "You can now add step to one of the branches",
                onNextClick: () => {
                  setTimeout(() => {
                    driver.moveNext();
                    updateProgress(2);
                  });
                }
              }
            }
          ];
          return steps;
        },
        this: tutorial
      },
      {
        this: ($$value) => {
          tutorial = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_flowStateStore();
  $$unsubscribe_flowStore();
  return $$rendered;
});
const FlowBuilderTutorialSimpleFlow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $flowStore, $$unsubscribe_flowStore;
  const { flowStore } = getContext("FlowEditorContext");
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => $flowStore = value);
  const dispatch = createEventDispatcher();
  const queue = [];
  let tutorial = void 0;
  function runTutorial() {
    tutorial?.runTutorial();
  }
  if ($$props.runTutorial === void 0 && $$bindings.runTutorial && runTutorial !== void 0) $$bindings.runTutorial(runTutorial);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Tutorial, "Tutorial").$$render(
      $$result,
      {
        index: 0,
        name: "action",
        tainted: isFlowTainted($flowStore),
        getSteps: (driver) => [
          {
            popover: {
              title: "Flow builder tutorial",
              description: "Learn how to build powerful flows in a few steps. You can use arrow keys to navigate."
            }
          },
          {
            popover: {
              title: "Flows inputs",
              description: "Flows have inputs that can be used in the flow",
              onNextClick: () => {
                clickButtonBySelector("#flow-editor-virtual-Input");
                setTimeout(() => {
                  driver.moveNext();
                });
              }
            },
            element: "#svelvet-Input"
          },
          {
            element: "#flow-editor-add-property",
            popover: {
              title: "Add a property",
              description: "Click here to add a property to your schema",
              onNextClick: () => {
                clickButtonBySelector("#flow-editor-add-property");
                setTimeout(() => {
                  driver.moveNext();
                });
              }
            }
          },
          {
            element: "#schema-modal-name",
            popover: {
              title: "Name your property",
              description: "Give a name to your property. Here we will call it firstname",
              onNextClick: () => {
                setInputBySelector("#schema-modal-name", "firstname");
                driver.moveNext();
              }
            }
          },
          {
            element: "#schema-modal-save",
            popover: {
              title: "Save your property",
              description: "Click here to save your property",
              onNextClick: () => {
                queue.push(JSON.stringify($flowStore));
                clickButtonBySelector("#schema-modal-save");
                setTimeout(() => {
                  driver.moveNext();
                });
              }
            }
          },
          {
            element: "#flow-editor-add-step-0",
            popover: {
              title: "Add a step",
              description: "Click here to add a step to your flow",
              onNextClick: () => {
                triggerAddFlowStep(0);
                setTimeout(() => {
                  driver.moveNext();
                });
              },
              onPrevClick: () => {
                driver.moveTo(1);
                $flowStore = JSON.parse(queue.pop() || "{}");
                dispatch("reload");
              }
            }
          },
          {
            popover: {
              title: "Steps kind",
              description: "Choose the kind of step you want to add. Let's start with a simple action"
            },
            element: "#flow-editor-insert-module"
          },
          {
            popover: {
              title: "Pick an action",
              description: "Let’s pick an action to add to your flow",
              onNextClick: () => {
                selectFlowStepKind(1);
                setTimeout(() => {
                  driver.moveNext();
                });
              }
            },
            element: "#flow-editor-insert-module > div > button:nth-child(1)"
          },
          {
            element: "#flow-editor-flow-inputs",
            popover: {
              title: "Action configuration",
              description: "An action can be inlined, imported from your workspace or the Hub."
            }
          },
          {
            element: "#flow-editor-action-script",
            popover: {
              title: "Supported languages",
              description: "Windmill support the following languages/runtimes."
            }
          },
          {
            element: "#flow-editor-action-script-bun",
            popover: {
              title: "Typescript",
              description: "Let's pick an action to add to your flow",
              onNextClick: () => {
                clickButtonBySelector("#flow-editor-action-script-bun");
                setTimeout(() => {
                  driver.moveNext();
                });
              }
            }
          },
          {
            element: "#flow-editor-editor",
            popover: {
              title: "Action editor",
              description: "Windmill provides a full code editor to write your actions"
            }
          },
          {
            element: "#flow-editor-step-input",
            popover: {
              title: "Autogenerated schema",
              description: "The schema and the UI is autogenerated from your code"
            }
          },
          {
            element: "#flow-editor-plug",
            popover: {
              title: "Connect",
              description: "You can provide static values or connect to other nodes result. Here we will connect to the firstname input",
              onNextClick: () => {
                clickButtonBySelector("#flow-editor-plug");
                setTimeout(() => {
                  driver.moveNext();
                });
              }
            }
          },
          {
            element: ".key",
            popover: {
              title: "Connection mode",
              description: "Once you pressed the connect button, you can choose what to connect to.",
              onNextClick: () => {
                if ($flowStore.value.modules[0].value.type === "rawscript") {
                  $flowStore.value.modules[0].value.input_transforms = {
                    x: {
                      type: "javascript",
                      expr: "flow_input.firstname"
                    }
                  };
                }
                $flowStore = $flowStore;
                dispatch("reload");
                setTimeout(() => {
                  driver.moveNext();
                });
              }
            }
          },
          {
            element: "#flow-editor-step-input",
            popover: {
              title: "Input connected!",
              description: "The input is now connected to the firstname input"
            }
          },
          {
            element: "#flow-editor-test-flow",
            popover: {
              title: "Test your flow",
              description: "We can now test our flow",
              onNextClick: () => {
                clickButtonBySelector("#flow-editor-test-flow");
                setTimeout(() => {
                  driver.moveNext();
                });
              }
            }
          },
          {
            element: "#flow-preview-content",
            popover: {
              title: "Flow input",
              description: "Let’s provide an input to our flow",
              onNextClick: () => {
                setInputBySelector("textarea.w-full", "Hello World!");
                setTimeout(() => {
                  driver.moveNext();
                });
              }
            }
          },
          {
            element: "#flow-editor-test-flow-drawer",
            popover: {
              title: "Test your flow",
              description: "Finally we can test our flow, and view the results!",
              onNextClick: () => {
                clickButtonBySelector("#flow-editor-test-flow-drawer");
                setTimeout(() => {
                  driver.moveNext();
                  updateProgress(0);
                });
              }
            }
          }
        ],
        this: tutorial
      },
      {
        this: ($$value) => {
          tutorial = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_flowStore();
  return $$rendered;
});
const FlowBuilderTutorialsForLoop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $flowStateStore, $$unsubscribe_flowStateStore;
  let $flowStore, $$unsubscribe_flowStore;
  let $$unsubscribe_selectedId;
  const dispatch = createEventDispatcher();
  const { flowStore, selectedId, flowStateStore } = getContext("FlowEditorContext");
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => $flowStore = value);
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => value);
  $$unsubscribe_flowStateStore = subscribe(flowStateStore, (value) => $flowStateStore = value);
  let tutorial = void 0;
  function runTutorial(indexToInsertAt) {
    tutorial?.runTutorial({ indexToInsertAt });
  }
  if ($$props.runTutorial === void 0 && $$bindings.runTutorial && runTutorial !== void 0) $$bindings.runTutorial(runTutorial);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Tutorial, "Tutorial").$$render(
      $$result,
      {
        index: 1,
        name: "forloop",
        tainted: false,
        getSteps: (driver, options) => {
          const id = nextId($flowStateStore, $flowStore);
          const index = options?.indexToInsertAt ?? $flowStore.value.modules.length;
          const isFirst = id === "a";
          return [
            {
              popover: {
                title: "For loops tutorial",
                description: "Learn how to build our first for loop to iterate on. You can use arrow keys to navigate."
              }
            },
            {
              element: `#flow-editor-add-step-${index}`,
              popover: {
                title: "Add a step",
                description: "Click here to add a step to your flow",
                onNextClick: () => {
                  triggerAddFlowStep(index);
                  setTimeout(() => {
                    driver.moveNext();
                  });
                }
              }
            },
            {
              popover: {
                title: "Steps kind",
                description: "Choose the kind of step you want to add. Let's start with a simple action"
              },
              element: "#flow-editor-insert-module"
            },
            {
              popover: {
                title: "Insert loop",
                description: "Let's pick forloop",
                onNextClick: () => {
                  selectFlowStepKind(isFirst ? 4 : 3);
                  setTimeout(() => {
                    driver.moveNext();
                  });
                }
              },
              element: `#flow-editor-insert-module > div > button:nth-child(${isFirst ? 4 : 3})`
            },
            {
              element: "#flow-editor-iterator-expression",
              popover: {
                title: "Iterator expression",
                description: "The iterator expression is a javascript expression that respresents the array to iterate on. Here we will iterate on the firstname input letter by letter",
                onNextClick: () => {
                  updateFlowModuleById($flowStore, id, (module) => {
                    if (module.value.type === "forloopflow") {
                      if (module.value.iterator.type === "javascript") {
                        module.value.iterator.expr = "[1,2,3]";
                      }
                    }
                  });
                  dispatch("reload");
                  setTimeout(() => {
                    driver.moveNext();
                  });
                }
              }
            },
            {
              element: "#flow-editor-iterator-expression",
              popover: {
                title: "Iterator expression",
                description: "We can refer to the result of previous steps using the results object: results.a or use static values like [1,2,3] in this case.",
                onNextClick: () => {
                  updateFlowModuleById($flowStore, id, (module) => {
                    const newId = nextId($flowStateStore, $flowStore);
                    if (module.value.type === "forloopflow") {
                      module.value.modules = [
                        {
                          id: newId,
                          value: {
                            type: "rawscript",
                            content: "def main(x):\n    return x",
                            // @ts-ignore
                            language: "python3",
                            input_transforms: {
                              x: {
                                type: "javascript",
                                // @ts-ignore
                                value: "",
                                expr: ""
                              }
                            }
                          }
                        }
                      ];
                    }
                    $flowStateStore[newId] = emptyFlowModuleState();
                    $flowStateStore[newId].schema.properties = {
                      x: {
                        type: "string",
                        description: "",
                        default: null
                      }
                    };
                  });
                  dispatch("reload");
                  setTimeout(() => {
                    driver.moveNext();
                  });
                }
              }
            },
            {
              popover: {
                title: "Step of the loop",
                description: "We added an action to the loop. Let’s configure it",
                onNextClick: () => {
                  $flowStore = $flowStore;
                  dispatch("reload");
                  setTimeout(() => {
                    driver.moveNext();
                  });
                }
              }
            },
            {
              element: "#flow-editor-editor",
              popover: {
                title: "Python step",
                description: "We can write python code in the editor. In this example we will capitalize the letter"
              }
            },
            {
              element: "#flow-editor-step-input",
              popover: {
                title: "Flow inputs",
                description: "UI is autogenerated from your code."
              }
            },
            {
              element: "#flow-editor-plug",
              popover: {
                title: "Input configuration",
                description: "Let’s connect the input to the letter input",
                onNextClick: () => {
                  clickButtonBySelector("#flow-editor-plug");
                  setTimeout(() => {
                    driver.moveNext();
                  });
                }
              }
            },
            {
              element: ".key",
              popover: {
                title: "Connect",
                description: "As we did before, we can connect to the iterator of the loop",
                onNextClick: () => {
                  updateFlowModuleById($flowStore, id, (module) => {
                    if (module.value.type === "forloopflow" && module.value.modules[0].value.type === "rawscript") {
                      module.value.modules[0].value.input_transforms = {
                        x: {
                          type: "javascript",
                          expr: "flow_input.iter.value"
                        }
                      };
                    }
                  });
                  dispatch("reload");
                  setTimeout(() => {
                    driver.moveNext();
                  });
                }
              }
            },
            {
              element: "#flow-editor-step-input",
              popover: {
                title: "Iterator",
                description: "Loops expose an iterator object that contains the current value of the loop and the index",
                onNextClick: () => {
                  setTimeout(() => {
                    driver.moveNext();
                    updateProgress(1);
                  });
                }
              }
            },
            {
              element: "#flow-editor-test-flow",
              popover: {
                title: "Test your flow",
                description: "We can now test our flow",
                onNextClick: () => {
                  clickButtonBySelector("#flow-editor-test-flow");
                  setTimeout(() => {
                    driver.moveNext();
                  });
                }
              }
            },
            {
              element: "#flow-editor-test-flow-drawer",
              popover: {
                title: "Test your flow",
                description: "Finally we can test our flow, and view the results!",
                onNextClick: () => {
                  clickButtonBySelector("#flow-editor-test-flow-drawer");
                  setTimeout(() => {
                    driver.moveNext();
                    updateProgress(0);
                  });
                }
              }
            }
          ];
        },
        this: tutorial
      },
      {
        this: ($$value) => {
          tutorial = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_flowStateStore();
  $$unsubscribe_flowStore();
  $$unsubscribe_selectedId();
  return $$rendered;
});
const FlowErrorHandler = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $flowStore, $$unsubscribe_flowStore;
  const { flowStore } = getContext("FlowEditorContext");
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => $flowStore = value);
  let tutorial = void 0;
  function runTutorial() {
    tutorial?.runTutorial();
  }
  if ($$props.runTutorial === void 0 && $$bindings.runTutorial && runTutorial !== void 0) $$bindings.runTutorial(runTutorial);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Tutorial, "Tutorial").$$render(
      $$result,
      {
        index: 0,
        name: "error-handler",
        tainted: false,
        getSteps: (driver) => [
          {
            popover: {
              title: "Error handler tutorial",
              description: "Learn how to recover from an error. You can use arrow keys to navigate.",
              onNextClick: () => {
                $flowStore.value.modules = [
                  {
                    id: "a",
                    value: {
                      type: "rawscript",
                      content: '// import * as wmill from "npm:windmill-client@1"\n\nexport async function main(x: string) {\n  throw new Error("Fake error")\n}\n',
                      language: "deno",
                      input_transforms: { x: { type: "static", value: "" } }
                    }
                  }
                ];
                setTimeout(() => {
                  driver.moveNext();
                });
              }
            }
          },
          {
            element: "#error-handler-toggle",
            popover: {
              title: "Error handler",
              description: "You can add an error handler to your flow. It will be executed if any of the steps in the flow fails.",
              onNextClick: () => {
                clickButtonBySelector("#error-handler-toggle");
                setTimeout(() => {
                  driver.moveNext();
                });
              }
            }
          },
          {
            popover: {
              title: "Steps kind",
              description: "Choose the kind of step you want to add. Let's start with a simple action"
            },
            element: "#flow-editor-insert-module"
          },
          {
            element: "#flow-editor-flow-inputs",
            popover: {
              title: "Action configuration",
              description: "An action can be inlined, imported from your workspace or the Hub."
            }
          },
          {
            element: "#flow-editor-action-script",
            popover: {
              title: "Supported languages",
              description: "Windmill support the following languages/runtimes."
            }
          },
          {
            element: "#flow-editor-action-script > button:nth-child(1)",
            popover: {
              title: "Typescript",
              description: "Let's pick an action to add to your flow",
              onNextClick: () => {
                clickButtonBySelector("#flow-editor-action-script > button > div > button:nth-child(1)");
                setTimeout(() => {
                  driver.moveNext();
                });
              }
            }
          },
          {
            element: "#flow-editor-test-flow",
            popover: {
              title: "Test your flow",
              description: "We can now test our flow",
              onNextClick: () => {
                clickButtonBySelector("#flow-editor-test-flow");
                setTimeout(() => {
                  driver.moveNext();
                });
              }
            }
          },
          {
            element: "#flow-editor-test-flow-drawer",
            popover: {
              title: "Test your flow",
              description: "Finally we can test our flow, and view how the error handler is executed when a step fails",
              onNextClick: () => {
                clickButtonBySelector("#flow-editor-test-flow-drawer");
                setTimeout(() => {
                  driver.moveNext();
                  updateProgress(4);
                });
              }
            }
          }
        ],
        this: tutorial
      },
      {
        this: ($$value) => {
          tutorial = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_flowStore();
  return $$rendered;
});
const FlowTutorials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let flowBuilderTutorialSimpleFlow = void 0;
  let flowBuilderTutorialsForLoop = void 0;
  let flowBranchOne = void 0;
  let flowBranchAll = void 0;
  let flowErrorHandler = void 0;
  function runTutorialById(id, indexToInsertAt) {
    if (id === "forloop") {
      flowBuilderTutorialsForLoop?.runTutorial(indexToInsertAt);
    } else if (id === "branchone") {
      flowBranchOne?.runTutorial();
    } else if (id === "branchall") {
      flowBranchAll?.runTutorial();
    } else if (id === "action") {
      flowBuilderTutorialSimpleFlow?.runTutorial();
    } else if (id === "error-handler") {
      flowErrorHandler?.runTutorial();
    }
  }
  if ($$props.runTutorialById === void 0 && $$bindings.runTutorialById && runTutorialById !== void 0) $$bindings.runTutorialById(runTutorialById);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(FlowBuilderTutorialSimpleFlow, "FlowBuilderTutorialSimpleFlow").$$render(
      $$result,
      { this: flowBuilderTutorialSimpleFlow },
      {
        this: ($$value) => {
          flowBuilderTutorialSimpleFlow = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(FlowBuilderTutorialsForLoop, "FlowBuilderTutorialsForLoop").$$render(
      $$result,
      { this: flowBuilderTutorialsForLoop },
      {
        this: ($$value) => {
          flowBuilderTutorialsForLoop = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(FlowBranchOne, "FlowBranchOne").$$render(
      $$result,
      { this: flowBranchOne },
      {
        this: ($$value) => {
          flowBranchOne = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(FlowBranchAll, "FlowBranchAll").$$render(
      $$result,
      { this: flowBranchAll },
      {
        this: ($$value) => {
          flowBranchAll = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(FlowErrorHandler, "FlowErrorHandler").$$render(
      $$result,
      { this: flowErrorHandler },
      {
        this: ($$value) => {
          flowErrorHandler = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const FlowModuleSchemaMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $flowStore, $$unsubscribe_flowStore;
  let $$unsubscribe_flowStateStore;
  let $$unsubscribe_flowInputsStore;
  let $$unsubscribe_ignoredTutorials;
  let $$unsubscribe_tutorialsToDo;
  let $$unsubscribe_selectedId;
  let $$unsubscribe_copilotInfo;
  let $copilotCurrentStepStore, $$unsubscribe_copilotCurrentStepStore;
  let $moving, $$unsubscribe_moving;
  $$unsubscribe_ignoredTutorials = subscribe(ignoredTutorials, (value) => value);
  $$unsubscribe_tutorialsToDo = subscribe(tutorialsToDo, (value) => value);
  $$unsubscribe_copilotInfo = subscribe(copilotInfo, (value) => value);
  let { modules } = $$props;
  let { sidebarSize = void 0 } = $$props;
  let { disableStaticInputs = false } = $$props;
  let { disableTutorials = false } = $$props;
  let { disableAi = false } = $$props;
  let { disableSettings = false } = $$props;
  let { smallErrorHandler = false } = $$props;
  let flowTutorials = void 0;
  const { selectedId, moving, history, flowStateStore, flowStore, flowInputsStore } = getContext("FlowEditorContext");
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => value);
  $$unsubscribe_moving = subscribe(moving, (value) => $moving = value);
  $$unsubscribe_flowStateStore = subscribe(flowStateStore, (value) => value);
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => $flowStore = value);
  $$unsubscribe_flowInputsStore = subscribe(flowInputsStore, (value) => value);
  let minHeight = 0;
  let deleteCallback = void 0;
  let dependents = {};
  const { currentStepStore: copilotCurrentStepStore } = getContext("FlowCopilotContext") || {};
  $$unsubscribe_copilotCurrentStepStore = subscribe(copilotCurrentStepStore, (value) => $copilotCurrentStepStore = value);
  createEventDispatcher();
  if ($$props.modules === void 0 && $$bindings.modules && modules !== void 0) $$bindings.modules(modules);
  if ($$props.sidebarSize === void 0 && $$bindings.sidebarSize && sidebarSize !== void 0) $$bindings.sidebarSize(sidebarSize);
  if ($$props.disableStaticInputs === void 0 && $$bindings.disableStaticInputs && disableStaticInputs !== void 0) $$bindings.disableStaticInputs(disableStaticInputs);
  if ($$props.disableTutorials === void 0 && $$bindings.disableTutorials && disableTutorials !== void 0) $$bindings.disableTutorials(disableTutorials);
  if ($$props.disableAi === void 0 && $$bindings.disableAi && disableAi !== void 0) $$bindings.disableAi(disableAi);
  if ($$props.disableSettings === void 0 && $$bindings.disableSettings && disableSettings !== void 0) $$bindings.disableSettings(disableSettings);
  if ($$props.smallErrorHandler === void 0 && $$bindings.smallErrorHandler && smallErrorHandler !== void 0) $$bindings.smallErrorHandler(smallErrorHandler);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      sidebarSize = 40;
    }
    $$rendered = `${validate_component(Portal, "Portal").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(ConfirmationModal, "ConfirmationModal").$$render(
          $$result,
          {
            title: "Confirm deleting step with dependents",
            confirmationText: "Delete step",
            open: Boolean(deleteCallback)
          },
          {},
          {
            default: () => {
              return `<div class="text-primary pb-2" data-svelte-h="svelte-gui9fu">Found the following steps that will require changes after this step is deleted:</div> ${each(Object.entries(dependents), ([k, v]) => {
                return `<div class="pb-3"><h3 class="text-secondary font-semibold">${escape(k)}</h3> <ul class="text-sm">${each(v, (dep) => {
                  return `<li>${escape(dep)}</li>`;
                })}</ul> </div>`;
              })}`;
            }
          }
        )}`;
      }
    })} <div class="flex flex-col h-full relative -pt-1"><div${add_attribute(
      "class",
      `z-10 sticky inline-flex flex-col gap-2 top-0 bg-surface-secondary flex-initial p-2 items-center transition-colors duration-[400ms] ease-linear border-b ${$copilotCurrentStepStore !== void 0 ? "border-gray-500/75" : ""}`,
      0
    )}>${$copilotCurrentStepStore !== void 0 ? `<div class="absolute inset-0 bg-gray-500 bg-opacity-75 z-[900] !m-0"></div>` : ``} ${!disableSettings ? `${validate_component(FlowSettingsItem, "FlowSettingsItem").$$render($$result, {}, {}, {})}` : ``} ${!disableStaticInputs ? `${validate_component(FlowConstantsItem, "FlowConstantsItem").$$render($$result, {}, {}, {})}` : ``}</div> <div class="z-10 flex-auto grow">${validate_component(FlowGraph, "FlowGraph").$$render(
      $$result,
      {
        disableAi,
        insertable: true,
        scroll: true,
        minHeight,
        moving: $moving?.module.id,
        rebuildOnChange: $flowStore,
        maxHeight: minHeight,
        modules: $flowStore.value?.modules,
        selectedId,
        flowInputsStore
      },
      {},
      {}
    )}</div> <div class="${"z-10 absolute inline-flex w-full text-sm gap-2 bottom-0 left-0 p-2 " + escape(
      smallErrorHandler ? "flex-row-reverse" : "justify-center",
      true
    ) + " border-b"}">${validate_component(FlowErrorHandlerItem, "FlowErrorHandlerItem").$$render($$result, { small: smallErrorHandler }, {}, {})}</div></div> ${!disableTutorials ? `${validate_component(FlowTutorials, "FlowTutorials").$$render(
      $$result,
      { this: flowTutorials },
      {
        this: ($$value) => {
          flowTutorials = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_flowStore();
  $$unsubscribe_flowStateStore();
  $$unsubscribe_flowInputsStore();
  $$unsubscribe_ignoredTutorials();
  $$unsubscribe_tutorialsToDo();
  $$unsubscribe_selectedId();
  $$unsubscribe_copilotInfo();
  $$unsubscribe_copilotCurrentStepStore();
  $$unsubscribe_moving();
  return $$rendered;
});
const FlowPreviewContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $previewArgs, $$unsubscribe_previewArgs;
  let $pathStore, $$unsubscribe_pathStore;
  let $flowStore, $$unsubscribe_flowStore;
  let $selectedId, $$unsubscribe_selectedId;
  let $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  let capturePayload;
  let { previewMode } = $$props;
  let { open } = $$props;
  let { jobId = void 0 } = $$props;
  let { job = void 0 } = $$props;
  let selectedJobStep = void 0;
  let branchOrIterationN = 0;
  let restartBranchNames = [];
  let selectedJobStepIsTopLevel = void 0;
  let selectedJobStepType = "single";
  let isRunning = false;
  let jobProgressReset;
  function test() {
    runPreview($previewArgs, void 0);
  }
  const { selectedId, previewArgs, flowStateStore, flowStore, pathStore, initialPath } = getContext("FlowEditorContext");
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => $selectedId = value);
  $$unsubscribe_previewArgs = subscribe(previewArgs, (value) => $previewArgs = value);
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => $flowStore = value);
  $$unsubscribe_pathStore = subscribe(pathStore, (value) => $pathStore = value);
  createEventDispatcher();
  function extractFlow(previewMode2) {
    if (previewMode2 === "whole") {
      return $flowStore;
    } else {
      const flow = JSON.parse(JSON.stringify($flowStore));
      const idOrders = dfs(flow.value.modules, (x) => x.id);
      let upToIndex = idOrders.indexOf($selectedId);
      if (upToIndex != -1) {
        flow.value.modules = sliceModules(flow.value.modules, upToIndex, idOrders);
      }
      return flow;
    }
  }
  let lastPreviewFlow = void 0;
  async function runPreview(args, restartedFrom) {
    try {
      lastPreviewFlow = JSON.stringify($flowStore);
      jobProgressReset();
      const newFlow = extractFlow(previewMode);
      jobId = await runFlowPreview(args, newFlow, $pathStore, restartedFrom);
      isRunning = true;
    } catch (e) {
      sendUserToast("Could not run preview", true, void 0, e.toString());
      isRunning = false;
      jobId = void 0;
    }
  }
  function onSelectedJobStepChange() {
    if (selectedJobStep !== void 0 && job?.flow_status?.modules !== void 0) {
      selectedJobStepIsTopLevel = job?.flow_status?.modules.map((m) => m.id).indexOf(selectedJobStep) >= 0;
      let moduleDefinition = job?.raw_flow?.modules.find((m) => m.id == selectedJobStep);
      if (moduleDefinition?.value.type == "forloopflow") {
        selectedJobStepType = "forloop";
      } else if (moduleDefinition?.value.type == "branchall") {
        selectedJobStepType = "branchall";
        moduleDefinition?.value.branches.forEach((branch, idx) => {
          restartBranchNames.push([
            idx,
            emptyString(branch.summary) ? `Branch #${idx}` : branch.summary
          ]);
        });
      } else {
        selectedJobStepType = "single";
      }
    }
  }
  let inputLibraryDrawer;
  if ($$props.previewMode === void 0 && $$bindings.previewMode && previewMode !== void 0) $$bindings.previewMode(previewMode);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.jobId === void 0 && $$bindings.jobId && jobId !== void 0) $$bindings.jobId(jobId);
  if ($$props.job === void 0 && $$bindings.job && job !== void 0) $$bindings.job(job);
  if ($$props.test === void 0 && $$bindings.test && test !== void 0) $$bindings.test(test);
  if ($$props.runPreview === void 0 && $$bindings.runPreview && runPreview !== void 0) $$bindings.runPreview(runPreview);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (job?.type === "CompletedJob") {
        isRunning = false;
      }
    }
    selectedJobStep !== void 0 && onSelectedJobStepChange();
    $$rendered = `${validate_component(CapturePayload, "CapturePayload").$$render(
      $$result,
      { this: capturePayload },
      {
        this: ($$value) => {
          capturePayload = $$value;
          $$settled = false;
        }
      },
      {}
    )}  ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { this: inputLibraryDrawer },
      {
        this: ($$value) => {
          inputLibraryDrawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Input library " + initialPath }, {}, {
            default: () => {
              return `${validate_component(SavedInputs, "SavedInputs").$$render(
                $$result,
                {
                  flowPath: initialPath,
                  isValid: true,
                  args: $previewArgs
                },
                {},
                {}
              )}`;
            }
          })}`;
        }
      }
    )} <div class="flex flex-col space-y-2 h-screen bg-surface px-6 py-2 w-full" id="flow-preview-content"><div class="flex flex-row justify-between w-full items-center gap-x-2"><div class="w-8">${validate_component(Button, "Button").$$render(
      $$result,
      {
        startIcon: { icon: X },
        iconOnly: true,
        size: "sm",
        color: "light",
        btnClasses: "hover:bg-surface-hover  bg-surface-secondaryw-8 h-8 rounded-full p-0"
      },
      {},
      {}
    )}</div> ${isRunning ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "red",
        size: "sm",
        btnClasses: "w-full max-w-lg",
        loading: true,
        clickableWhileLoading: true
      },
      {},
      {
        default: () => {
          return `Cancel`;
        }
      }
    )}` : `<div class="flex flex-row gap-4">${jobId !== void 0 && selectedJobStep !== void 0 && selectedJobStepIsTopLevel ? `${selectedJobStepType == "single" ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs",
        color: "light",
        variant: "border",
        title: `Re-start this flow from step ${selectedJobStep} (included).`,
        startIcon: { icon: Play }
      },
      {},
      {
        default: () => {
          return `Re-start from
							${validate_component(Badge, "Badge").$$render($$result, { baseClass: "ml-1", color: "indigo" }, {}, {
            default: () => {
              return `${escape(selectedJobStep)}`;
            }
          })}`;
        }
      }
    )}` : `${validate_component(Popup, "Popup").$$render(
      $$result,
      {
        floatingConfig: {
          strategy: "absolute",
          placement: "bottom-start"
        }
      },
      {},
      {
        button: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              title: `Re-start this flow from step ${selectedJobStep} (included).`,
              variant: "border",
              color: "blue",
              startIcon: { icon: Refresh_cw },
              nonCaptureEvent: true
            },
            {},
            {
              default: () => {
                return `Re-start from
									${validate_component(Badge, "Badge").$$render($$result, { baseClass: "ml-1", color: "indigo" }, {}, {
                  default: () => {
                    return `${escape(selectedJobStep)}`;
                  }
                })}`;
              }
            }
          )} `;
        },
        default: () => {
          return `<label class="block text-primary"><div class="pb-1 text-sm text-secondary">${escape(selectedJobStepType == "forloop" ? "From iteration #:" : "From branch:")}</div> <div class="flex w-full">${selectedJobStepType === "forloop" ? `<input type="number" min="0" class="!w-32 grow"${add_attribute("value", branchOrIterationN, 0)}>` : `<select class="!w-32 grow">${each(restartBranchNames, ([branchIdx, branchName]) => {
            return `<option${add_attribute("value", branchIdx, 0)}>${escape(branchName)}</option>`;
          })}</select>`} ${validate_component(Button, "Button").$$render(
            $$result,
            {
              size: "xs",
              color: "blue",
              buttonType: "button",
              btnClasses: "!p-1 !w-[34px] !ml-1",
              "aria-label": "Restart flow"
            },
            {},
            {
              default: () => {
                return `${validate_component(Arrow_right, "ArrowRight").$$render($$result, { size: 18 }, {}, {})}`;
              }
            }
          )}</div></label>`;
        }
      }
    )}`}` : ``} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "contained",
        startIcon: { icon: isRunning ? Refresh_cw : Play },
        color: "dark",
        size: "sm",
        btnClasses: "w-full max-w-lg",
        id: "flow-editor-test-flow-drawer",
        shortCut: { Icon: Corner_down_left }
      },
      {},
      {
        default: () => {
          return `Test flow`;
        }
      }
    )}</div>`} <div class="flex gap-2">${initialPath != "" ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        btnClasses: "h-full truncate",
        size: "sm",
        variant: "border"
      },
      {},
      {
        default: () => {
          return `Past Runs/Input library`;
        }
      }
    )}` : ``} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        btnClasses: "h-full truncate",
        size: "sm",
        variant: "border"
      },
      {},
      {
        default: () => {
          return `Fill args from a request`;
        }
      }
    )}</div></div> <div class="w-full flex flex-col gap-y-1">${lastPreviewFlow && JSON.stringify($flowStore) != lastPreviewFlow ? `<div class="pt-1"><div class="bg-orange-200 text-orange-600 border border-orange-600 p-2 flex items-center gap-2 rounded">${validate_component(Alert_triangle, "AlertTriangle").$$render($$result, { size: 14 }, {}, {})} Flow changed since last preview
					<div class="flex"></div></div></div>` : ``} ${validate_component(FlowProgressBar, "FlowProgressBar").$$render(
      $$result,
      { job, reset: jobProgressReset },
      {
        reset: ($$value) => {
          jobProgressReset = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="overflow-y-auto grow flex flex-col pr-4"><div class="border-b">${validate_component(SchemaForm, "SchemaForm").$$render(
      $$result,
      {
        noVariablePicker: true,
        compact: true,
        class: "py-4 max-w-3xl",
        schema: $flowStore.schema,
        args: $previewArgs
      },
      {
        args: ($$value) => {
          $previewArgs = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="pt-4 flex flex-col grow">${jobId ? `${validate_component(FlowStatusViewer, "FlowStatusViewer").$$render(
      $$result,
      {
        wideResults: true,
        flowStateStore,
        jobId,
        selectedJobStep
      },
      {
        selectedJobStep: ($$value) => {
          selectedJobStep = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `<div class="italic text-tertiary h-full grow" data-svelte-h="svelte-fn4kw">Flow status will be displayed here</div>`}</div></div></div>`;
  } while (!$$settled);
  $$unsubscribe_previewArgs();
  $$unsubscribe_pathStore();
  $$unsubscribe_flowStore();
  $$unsubscribe_selectedId();
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const FlowPreviewButtons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let upToDisabled;
  let $selectedId, $$unsubscribe_selectedId;
  const { selectedId } = getContext("FlowEditorContext");
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => $selectedId = value);
  let previewOpen = false;
  let previewMode = "whole";
  async function openPreview() {
    if (!previewOpen) {
      previewOpen = true;
    } else {
      flowPreviewContent?.test();
    }
  }
  let flowPreviewContent;
  let jobId = void 0;
  let job = void 0;
  if ($$props.openPreview === void 0 && $$bindings.openPreview && openPreview !== void 0) $$bindings.openPreview(openPreview);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    upToDisabled = $selectedId == void 0 || [
      "settings",
      "settings-metadata",
      "settings-schedule",
      "settings-retries",
      "settings-same-worker",
      "settings-graph",
      "settings-worker-group",
      "settings-cache",
      "settings-concurrency",
      "settings-early-stop",
      "settings-early-return",
      "inputs",
      "schedules",
      "failure",
      "constants",
      "Result",
      "Input"
    ].includes($selectedId) || $selectedId?.includes("branch");
    $$rendered = `${!upToDisabled ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs",
        disabled: upToDisabled,
        color: "light",
        variant: "border",
        startIcon: { icon: Play }
      },
      {},
      {
        default: () => {
          return `Test up to 
		${validate_component(Badge, "Badge").$$render(
            $$result,
            {
              baseClass: "ml-1",
              small: true,
              color: "indigo",
              wrapperClass: "max-h-[15px]"
            },
            {},
            {
              default: () => {
                return `${escape($selectedId)}`;
              }
            }
          )}`;
        }
      }
    )}` : ``} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "dark",
        size: "xs",
        startIcon: { icon: Play },
        id: "flow-editor-test-flow"
      },
      {},
      {
        default: () => {
          return `Test flow`;
        }
      }
    )} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      {
        alwaysOpen: true,
        size: "75%",
        open: previewOpen
      },
      {
        open: ($$value) => {
          previewOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(FlowPreviewContent, "FlowPreviewContent").$$render(
            $$result,
            {
              open: previewOpen,
              this: flowPreviewContent,
              previewMode,
              job,
              jobId
            },
            {
              this: ($$value) => {
                flowPreviewContent = $$value;
                $$settled = false;
              },
              previewMode: ($$value) => {
                previewMode = $$value;
                $$settled = false;
              },
              job: ($$value) => {
                job = $$value;
                $$settled = false;
              },
              jobId: ($$value) => {
                jobId = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_selectedId();
  return $$rendered;
});
export {
  FlowPreviewButtons as F,
  ManualPopover as M,
  FlowModuleSchemaMap as a,
  FlowEditorPanel as b,
  FlowTutorials as c,
  FlowCopilotInputsModal as d
};
