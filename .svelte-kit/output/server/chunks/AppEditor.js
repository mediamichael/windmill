import { c as create_ssr_component, v as validate_component, h as getContext, s as subscribe, e as escape, b as add_attribute, q as missing_component, d as createEventDispatcher, f as each, a as set_store_value, o as onDestroy, m as get_store_value, u as setContext } from "./ssr.js";
import { S as SplitPanesWrapper } from "./SplitPanesWrapper.js";
import { twMerge } from "tailwind-merge";
import { S as Splitpanes, P as Pane } from "./Pane.js";
import { w as writable } from "./index.js";
import { P as Plug_2, R as RecomputeAllComponents, G as Grid, C as ComponentWrapper, a as GridEditorMenu, b as Component$1, H as HiddenComponent, c as ComponentOutputViewer, d as ComponentCallbacks, r as resolveTheme, D as DEFAULT_THEME, e as Paintbrush_2, f as ResolveConfig, g as ResolveNavbarItemPath, h as Chevron_left, i as buildWorld, j as getTheme, A as AppPreview } from "./AppPreview.js";
import { r as replaceState, g as goto } from "./client.js";
import { p as page } from "./stores.js";
import { A as Alert, C as Chevron_up } from "./Alert.js";
import { B as Badge } from "./Badge.js";
import { B as Button, ad as isObject, N as generateRandomString, R as pluralize, k as capitalize, ae as addWhitespaceBeforeCapitals, g as classNames, Q as ButtonDropdown, Y as debounce, b as emptyString, t as truncateRev, M as MenuItem$1, D as Chevron_down, f as defaultIfEmptyString, e as emptySchema, af as isValidHexColor, a1 as isMac, a2 as getModifierKey, G as encodeState } from "./toast.js";
import { T as TutorialItem, U as UndoRedo } from "./TutorialItem.js";
import { z as zIndexes, D as Drawer, a as DrawerContent } from "./DrawerContent.js";
import "./common.js";
import { T as Tabs, a as Tab } from "./Tabs.js";
import { a as TimelineBar, T as TestJobLoader, L as LogViewer, D as DisplayResult } from "./TimelineBar.js";
import { F as FlowProgressBar } from "./FlowProgressBar.js";
import { F as FlowStatusViewer } from "./FlowStatusViewer.js";
import { J as JobArgs } from "./JobArgs.js";
import { S as Save, P as Path, V as VariableEditor } from "./VariableEditor.js";
import { T as Toggle } from "./Toggle.js";
import { W as WorkspaceService, F as FlowService, S as ScheduleService, A as AppService, R as ResourceService, V as VariableService } from "./services.gen.js";
import { u as userStore, w as workspaceStore, t as tutorialsToDo, e as enterpriseLicense, d as defaultScripts } from "./stores2.js";
import { O as buildExtraLib, L as allItems, P as cleanseOneOfConfiguration, f as findGridItem, D as ctxRegex, Q as fieldTypeToTsType, N as BG_PREFIX, p as push, i as insertNewGridItem, a as appComponentFromType, S as toStatic, K as dfs, V as forbiddenIds, W as allsubIds, X as schemaToInputsSpec, Y as getAllGridItems, Z as clearResultAppInput, G as isScriptByPathDefined, F as isScriptByNameDefined, A as findComponentSettings, _ as isTableAction, M as migrateApp, b as initHistory, x as findGridItemParentGrid } from "./history.js";
import YAML from "yaml";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import "minimatch";
import { H as HighlightTheme, a as Highlight, j as json } from "./SchemaViewer.js";
import "./index2.js";
import { C as Clipboard } from "./clipboard.js";
import { y as yaml } from "./yaml.js";
/* empty css                                     */
import { b as components, F as Form_input, a as presets, T as Text_cursor_input, c as ccomponents, M as Mouse_pointer_square, d as Type, N as Network } from "./components.js";
import { C as CloseButton } from "./CloseButton.js";
import { T as Tooltip } from "./Tooltip.js";
import { I as Icon } from "./Icon.js";
import { P as Plug, F as Function_square, b as Tutorial, f as isAppTainted, c as clickButtonBySelector, g as clickFirstButtonBySelector, h as updateInlineRunnableCode, j as connectInlineRunnableInputToComponentOutput, i as ignoredTutorials, a as FlowScriptPicker, T as TemplateEditor } from "./TemplateEditor.js";
import { S as SimpleEditor, a as customisationByComponent, h as hasStyleValue } from "./SimpleEditor.js";
import { e as Grip_vertical, b as ResourcePicker, J as JsonEditor, S as SchemaForm, N as NoItemFound, I as ItemPicker } from "./SchemaForm.js";
import { P as Plus } from "./plus.js";
import { X } from "./x.js";
import { L as Loader_2 } from "./loader-2.js";
import { C as ClearableInput, a as EditableSchemaDrawer, T as Trash_2 } from "./EditableSchemaDrawer.js";
import { P as Popup } from "./Popup.js";
import { L as Label } from "./Label.js";
import { offset, flip, shift } from "@floating-ui/dom";
import { S as Section, T as Trash } from "./Section.js";
import { C as ColumnIdentity } from "./utils3.js";
import { D as DateTimeInput } from "./DateTimeInput.js";
import { S as Select, a as SELECT_INPUT_DEFAULT_STYLE, g as FileInput, R as Rotate_cw, M as Move_right } from "./LightweightSchemaForm.js";
import { D as DarkModeObserver } from "./DarkModeObserver.js";
import { S as Settings } from "./settings.js";
import { T as ToggleButtonGroup, a as ToggleButton } from "./ToggleButtonGroup.js";
import { p as parseOutputs, l as loadSchemaFromPath, a as loadSchema } from "./infer.js";
import { deepEqual } from "fast-equals";
import { P as Popover, E as External_link } from "./Popover.js";
/* empty css                                         */
import { P as Pen } from "./pen.js";
import { U as User } from "./user2.js";
import { B as Bell_off, P as PanelSection } from "./PanelSection.js";
import { E as Eye } from "./eye.js";
import { D as Diff, U as UnsavedConfirmationModal, S as Summary, A as Awareness, a as ScriptEditor } from "./ScriptEditor.js";
import "@aws-crypto/sha256-js";
import { D as DeploymentHistory, A as Arrow_big_up } from "./DeploymentHistory.js";
import { a as secondaryMenuRight, s as secondaryMenuLeft, b as secondaryMenuRightStore, c as secondaryMenuLeftStore } from "./AppSliderInputs.svelte_svelte_type_style_lang.js";
import { u as updateProgress } from "./tutorialUtils.js";
import { M as MenuItem } from "./MenuItem.js";
import { a as ConfirmationModal, C as Corner_down_left } from "./ConfirmationModal.js";
import { c as columnConfiguration, i as isFixed } from "./gridUtils.js";
import { B as Book_open } from "./book-open.js";
import { C as CronInput } from "./CronInput.js";
import { S as ScriptPicker } from "./ScriptPicker.js";
import { b as base } from "./base.js";
import { H as HighlightCode, a as FlowPathViewer, c as FlowModuleScript } from "./FlowGraphViewerStep.js";
import { H as History } from "./history2.js";
import { F as File_json } from "./file-json.js";
import { F as File_up } from "./Required.js";
import { B as Bug } from "./bug.js";
import { R as Refresh_cw } from "./refresh-cw.js";
import { E as Expand } from "./expand.js";
import { M as More_vertical } from "./DropdownV2.js";
import { T as TabContent } from "./TabContent.js";
import { C as Cell, D as DataTable, H as Head, a as Arrow_right, A as Arrow_left } from "./Head.js";
import { S as Skeleton } from "./Skeleton.js";
import { L as Layout_dashboard } from "./layout-dashboard.js";
import { E as Editor } from "./Editor.js";
import { s as scriptLangToEditorLang, p as processLangs, d as defaultScriptLanguages, g as getScriptByPath } from "./scripts.js";
import { b as ScriptGen, D as DefaultScripts, P as Paintbrush } from "./DefaultScripts.js";
import { D as DiffEditor } from "./DiffEditor.js";
import { S as SecondsInput } from "./TestConnection.js";
import { autoPlacement } from "@floating-ui/core";
import { D as Database } from "./IconedResourceType.js";
import { P as PickHubScript } from "./PickHubScript.js";
import { S as SearchItems } from "./SearchItems.js";
import { R as RowIcon } from "./RowIcon.js";
import { B as Building } from "./building.js";
import { G as Globe_2 } from "./globe-2.js";
import { G as Git_fork } from "./git-fork.js";
import { R as Row } from "./Row.js";
import css$6 from "highlight.js/lib/languages/css";
import { C as Code, G as Git_branch, S as Square, h as Menu } from "./util.js";
import { E as Eye_off } from "./eye-off.js";
import { A as Alert_triangle } from "./alert-triangle.js";
import { L as List } from "./list.js";
import { B as Braces } from "./braces.js";
import parse from "style-to-object";
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
/* empty css                                             */
import "d3-zoom";
/* empty css                                                   */
import "d3-dag";
import "@leeoniya/ufuzzy";
import { M as MultiSelectWrapper } from "./MultiSelectWrapper.js";
import { C as Copy } from "./copy.js";
import { M as Minus } from "./minus.js";
const Align_center_horizontal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M2 12h20" }],
    [
      "path",
      {
        "d": "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"
      }
    ],
    [
      "path",
      {
        "d": "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"
      }
    ],
    [
      "path",
      {
        "d": "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"
      }
    ],
    [
      "path",
      {
        "d": "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "align-center-horizontal" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Align_center_vertical = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M12 2v20" }],
    [
      "path",
      {
        "d": "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"
      }
    ],
    [
      "path",
      {
        "d": "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"
      }
    ],
    [
      "path",
      {
        "d": "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"
      }
    ],
    [
      "path",
      {
        "d": "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "align-center-vertical" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Align_center = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "21",
        "x2": "3",
        "y1": "6",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "17",
        "x2": "7",
        "y1": "12",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "19",
        "x2": "5",
        "y1": "18",
        "y2": "18"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "align-center" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Align_end_horizontal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "6",
        "height": "16",
        "x": "4",
        "y": "2",
        "rx": "2"
      }
    ],
    [
      "rect",
      {
        "width": "6",
        "height": "9",
        "x": "14",
        "y": "9",
        "rx": "2"
      }
    ],
    ["path", { "d": "M22 22H2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "align-end-horizontal" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Align_end_vertical = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "16",
        "height": "6",
        "x": "2",
        "y": "4",
        "rx": "2"
      }
    ],
    [
      "rect",
      {
        "width": "9",
        "height": "6",
        "x": "9",
        "y": "14",
        "rx": "2"
      }
    ],
    ["path", { "d": "M22 22V2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "align-end-vertical" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Align_horizontal_space_around = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "6",
        "height": "10",
        "x": "9",
        "y": "7",
        "rx": "2"
      }
    ],
    ["path", { "d": "M4 22V2" }],
    ["path", { "d": "M20 22V2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "align-horizontal-space-around" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Align_justify = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "3",
        "x2": "21",
        "y1": "6",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "3",
        "x2": "21",
        "y1": "12",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "3",
        "x2": "21",
        "y1": "18",
        "y2": "18"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "align-justify" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Align_left = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "21",
        "x2": "3",
        "y1": "6",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "15",
        "x2": "3",
        "y1": "12",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "17",
        "x2": "3",
        "y1": "18",
        "y2": "18"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "align-left" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Align_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "21",
        "x2": "3",
        "y1": "6",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "21",
        "x2": "9",
        "y1": "12",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "21",
        "x2": "7",
        "y1": "18",
        "y2": "18"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "align-right" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Align_start_horizontal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "6",
        "height": "16",
        "x": "4",
        "y": "6",
        "rx": "2"
      }
    ],
    [
      "rect",
      {
        "width": "6",
        "height": "9",
        "x": "14",
        "y": "6",
        "rx": "2"
      }
    ],
    ["path", { "d": "M22 2H2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "align-start-horizontal" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Align_start_vertical = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "9",
        "height": "6",
        "x": "6",
        "y": "14",
        "rx": "2"
      }
    ],
    [
      "rect",
      {
        "width": "16",
        "height": "6",
        "x": "6",
        "y": "4",
        "rx": "2"
      }
    ],
    ["path", { "d": "M2 2v20" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "align-start-vertical" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Arrow_up_square = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "18",
        "height": "18",
        "x": "3",
        "y": "3",
        "rx": "2"
      }
    ],
    ["path", { "d": "m16 12-4-4-4 4" }],
    ["path", { "d": "M12 16V8" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "arrow-up-square" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Asterisk = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M12 6v12" }],
    ["path", { "d": "M17.196 9 6.804 15" }],
    ["path", { "d": "m6.804 9 10.392 6" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "asterisk" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Book_text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
      }
    ],
    ["path", { "d": "M8 7h6" }],
    ["path", { "d": "M8 11h8" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "book-text" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"
      }
    ],
    ["path", { "d": "m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" }],
    [
      "path",
      {
        "d": "M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"
      }
    ],
    [
      "path",
      {
        "d": "m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "component" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const File_clock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M16 22h2c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3"
      }
    ],
    ["polyline", { "points": "14 2 14 8 20 8" }],
    ["circle", { "cx": "8", "cy": "16", "r": "6" }],
    ["path", { "d": "M9.5 17.5 8 16.25V14" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "file-clock" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Grid_3x3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "18",
        "height": "18",
        "x": "3",
        "y": "3",
        "rx": "2"
      }
    ],
    ["path", { "d": "M3 9h18" }],
    ["path", { "d": "M3 15h18" }],
    ["path", { "d": "M9 3v18" }],
    ["path", { "d": "M15 3v18" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "grid-3x3" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Italic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "19",
        "x2": "10",
        "y1": "4",
        "y2": "4"
      }
    ],
    [
      "line",
      {
        "x1": "14",
        "x2": "5",
        "y1": "20",
        "y2": "20"
      }
    ],
    [
      "line",
      {
        "x1": "15",
        "x2": "9",
        "y1": "4",
        "y2": "20"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "italic" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Laptop_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "18",
        "height": "12",
        "x": "3",
        "y": "4",
        "rx": "2",
        "ry": "2"
      }
    ],
    [
      "line",
      {
        "x1": "2",
        "x2": "22",
        "y1": "20",
        "y2": "20"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "laptop-2" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Maximize_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["polyline", { "points": "15 3 21 3 21 9" }],
    ["polyline", { "points": "9 21 3 21 3 15" }],
    [
      "line",
      {
        "x1": "21",
        "x2": "14",
        "y1": "3",
        "y2": "10"
      }
    ],
    [
      "line",
      {
        "x1": "3",
        "x2": "10",
        "y1": "21",
        "y2": "14"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "maximize-2" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Mouse_pointer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"
      }
    ],
    ["path", { "d": "m13 13 6 6" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "mouse-pointer" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Mouse = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "x": "5",
        "y": "2",
        "width": "14",
        "height": "20",
        "rx": "7"
      }
    ],
    ["path", { "d": "M12 6v4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "mouse" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Move_left = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M6 8L2 12L6 16" }], ["path", { "d": "M2 12H22" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "move-left" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Pencil = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"
      }
    ],
    ["path", { "d": "m15 5 4 4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "pencil" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Pin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "12",
        "x2": "12",
        "y1": "17",
        "y2": "22"
      }
    ],
    [
      "path",
      {
        "d": "M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "pin" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Pointer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M22 14a8 8 0 0 1-8 8" }],
    [
      "path",
      {
        "d": "M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"
      }
    ],
    [
      "path",
      {
        "d": "M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1"
      }
    ],
    [
      "path",
      {
        "d": "M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10"
      }
    ],
    [
      "path",
      {
        "d": "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "pointer" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Rectangle_horizontal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "20",
        "height": "12",
        "x": "2",
        "y": "6",
        "rx": "2"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "rectangle-horizontal" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Rotate_ccw = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
      }
    ],
    ["path", { "d": "M3 3v5h5" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "rotate-ccw" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Shield = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "shield" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Slash = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M22 2 2 22" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "slash" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Smartphone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "14",
        "height": "20",
        "x": "5",
        "y": "2",
        "rx": "2",
        "ry": "2"
      }
    ],
    ["path", { "d": "M12 18h.01" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "smartphone" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Stretch_vertical = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "6",
        "height": "20",
        "x": "4",
        "y": "2",
        "rx": "2"
      }
    ],
    [
      "rect",
      {
        "width": "6",
        "height": "20",
        "x": "14",
        "y": "2",
        "rx": "2"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "stretch-vertical" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Strikethrough = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M16 4H9a3 3 0 0 0-2.83 4" }],
    ["path", { "d": "M14 12a4 4 0 0 1 0 8H6" }],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "12",
        "y2": "12"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "strikethrough" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Toggle_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "20",
        "height": "12",
        "x": "2",
        "y": "6",
        "rx": "6",
        "ry": "6"
      }
    ],
    ["circle", { "cx": "16", "cy": "12", "r": "2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "toggle-right" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Underline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M6 4v6a6 6 0 0 0 12 0V4" }],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "20",
        "y2": "20"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "underline" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Unplug = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "m19 5 3-3" }],
    ["path", { "d": "m2 22 3-3" }],
    [
      "path",
      {
        "d": "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"
      }
    ],
    ["path", { "d": "M7.5 13.5 10 11" }],
    ["path", { "d": "M10.5 16.5 13 14" }],
    [
      "path",
      {
        "d": "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "unplug" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Upload = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
      }
    ],
    ["polyline", { "points": "17 8 12 3 7 8" }],
    [
      "line",
      {
        "x1": "12",
        "x2": "12",
        "y1": "3",
        "y2": "15"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "upload" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const css$5 = { name: "css", register: css$6 };
const tabs = {
  title: "Tabs",
  components: ["tabscomponent", "conditionalwrapper"],
  presets: ["sidebartabscomponent", "invisibletabscomponent"]
};
const layout = {
  title: "Layout",
  components: [
    "containercomponent",
    "listcomponent",
    "horizontaldividercomponent",
    "verticaldividercomponent",
    "drawercomponent",
    "verticalsplitpanescomponent",
    "horizontalsplitpanescomponent",
    "modalcomponent",
    "steppercomponent",
    "carousellistcomponent",
    "decisiontreecomponent",
    "navbarcomponent",
    "recomputeallcomponent"
  ],
  presets: ["topbarcomponent"]
};
const buttons = {
  title: "Buttons",
  components: ["buttoncomponent", "formcomponent", "formbuttoncomponent", "downloadcomponent"]
};
const inputs = {
  title: "Inputs",
  components: [
    "schemaformcomponent",
    "textinputcomponent",
    "textareainputcomponent",
    "quillcomponent",
    "passwordinputcomponent",
    "emailinputcomponent",
    "numberinputcomponent",
    "currencycomponent",
    "slidercomponent",
    "dateslidercomponent",
    "rangecomponent",
    "dateinputcomponent",
    "timeinputcomponent",
    "datetimeinputcomponent",
    "dateselectcomponent",
    "fileinputcomponent",
    "s3fileinputcomponent",
    "checkboxcomponent",
    "selectcomponent",
    "resourceselectcomponent",
    "multiselectcomponentv2",
    "selecttabcomponent",
    "selectstepcomponent"
  ]
};
const display = {
  title: "Display",
  components: [
    "textcomponent",
    "iconcomponent",
    "imagecomponent",
    "mapcomponent",
    "htmlcomponent",
    "mardowncomponent",
    "pdfcomponent",
    "displaycomponent",
    "jobidlogcomponent",
    "jobidflowstatuscomponent",
    "jobiddisplaycomponent",
    "statcomponent",
    "menucomponent",
    "alertcomponent"
  ]
};
const tables = {
  title: "Tables",
  components: [
    "aggridcomponent",
    "aggridcomponentee",
    "dbexplorercomponent",
    "aggridinfinitecomponent",
    "aggridinfinitecomponentee",
    "tablecomponent"
  ]
};
const charts = {
  title: "Charts",
  components: [
    "plotlycomponentv2",
    "chartjscomponentv2",
    "vegalitecomponent",
    "agchartscomponent",
    "agchartscomponentee"
  ]
};
const COMPONENT_SETS = [layout, tabs, buttons, inputs, tables, display, charts];
const DEPRECATED_COMPONENTS = {
  tablecomponent: "We will be removing this component in the future. we recommend using the AgGrid table instead."
};
const DocLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { docLink } = $$props;
  let { btnClasses = void 0 } = $$props;
  let { size = "xs" } = $$props;
  if ($$props.docLink === void 0 && $$bindings.docLink && docLink !== void 0) $$bindings.docLink(docLink);
  if ($$props.btnClasses === void 0 && $$bindings.btnClasses && btnClasses !== void 0) $$bindings.btnClasses(btnClasses);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  return `${validate_component(Popover, "Popover").$$render($$result, {}, {}, {
    text: () => {
      return `<div class="flex flex-row gap-1">Open documentation in a new tab

			${validate_component(External_link, "ExternalLink").$$render($$result, { size: 16 }, {}, {})}</div> `;
    },
    default: () => {
      return `${validate_component(Button, "Button").$$render(
        $$result,
        {
          iconOnly: true,
          startIcon: { icon: Book_text },
          size,
          btnClasses: twMerge("p-1 text-gray-300 hover:!text-gray-600 dark:text-gray-500 dark:hover:!text-gray-200 bg-transparent", btnClasses),
          href: docLink,
          target: "_blank",
          color: "light"
        },
        {},
        {}
      )}`;
    }
  })}`;
});
const SecondaryMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedComponent, $$unsubscribe_selectedComponent;
  let $secondaryMenu, $$unsubscribe_secondaryMenu;
  const { selectedComponent } = getContext("AppViewerContext");
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => $selectedComponent = value);
  let { right } = $$props;
  let secondaryMenu = right ? secondaryMenuRight : secondaryMenuLeft;
  $$unsubscribe_secondaryMenu = subscribe(secondaryMenu, (value) => $secondaryMenu = value);
  let lastSelected = $selectedComponent;
  if ($$props.right === void 0 && $$bindings.right && right !== void 0) $$bindings.right(right);
  {
    if (right && lastSelected !== $selectedComponent) {
      secondaryMenu.close();
      lastSelected = $selectedComponent;
    }
  }
  $$unsubscribe_selectedComponent();
  $$unsubscribe_secondaryMenu();
  return `<div class="${[
    escape(`absolute inset-0 overflow-hidden w-full`, true),
    !$secondaryMenu.isOpen ? "pointer-events-none" : ""
  ].join(" ").trim()}"${add_attribute("style", `z-index: ${zIndexes.secondaryMenu}`, 0)}>${$secondaryMenu.isOpen && $secondaryMenu.component ? `<div class="flex flex-col w-full h-full bg-surface"><div class="${"flex justify-between " + escape(right ? "" : "flex-row-reverse", true) + " items-center gap-1 px-3 py-2"}">${validate_component(CloseButton, "CloseButton").$$render($$result, {}, {}, {})} ${$secondaryMenu?.props?.type === "style" ? `<div class="flex flex-row items-center gap-1"><div class="text-xs font-bold" data-svelte-h="svelte-18ekkok">Style Panel</div> ${validate_component(DocLink, "DocLink").$$render(
    $$result,
    {
      docLink: "https://www.windmill.dev/docs/apps/app_configuration_settings/app_styling"
    },
    {},
    {}
  )}</div>` : ``}</div> <div class="relative h-full overflow-y-auto">${typeof $secondaryMenu.component === "string" ? `<!-- HTML_TAG_START -->${$secondaryMenu.component}<!-- HTML_TAG_END -->` : `${validate_component($secondaryMenu.component || missing_component, "svelte:component").$$render($$result, Object.assign({}, $secondaryMenu.props), {}, {})}`}</div></div>` : ``}</div>`;
});
const AppExportButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let jsonViewerDrawer;
  let app = void 0;
  let rawType = "yaml";
  function open2(app_l) {
    app = app_l;
    jsonViewerDrawer?.toggleDrawer();
  }
  if ($$props.open === void 0 && $$bindings.open && open2 !== void 0) $$bindings.open(open2);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(HighlightTheme, "HighlightTheme").$$render($$result, {}, {}, {})} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "800px", this: jsonViewerDrawer },
      {
        this: ($$value) => {
          jsonViewerDrawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "App Export" }, {}, {
            default: () => {
              return `<div>${validate_component(Tabs, "Tabs").$$render(
                $$result,
                { selected: rawType },
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
                        color: "dark",
                        variant: "border",
                        size: "sm",
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
                        class: "overflow-auto px-1 flex-1",
                        language: rawType === "yaml" ? yaml : json,
                        code: rawType === "yaml" ? YAML.stringify(app ?? {}) : JSON.stringify(app ?? {}, null, 4)
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
              )}</div>`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const ConnectedInputEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_app;
  let $$unsubscribe_connectingInput;
  let { componentInput } = $$props;
  const { connectingInput, app } = getContext("AppViewerContext");
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => value);
  $$unsubscribe_app = subscribe(app, (value) => value);
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  $$unsubscribe_app();
  $$unsubscribe_connectingInput();
  return `${componentInput.connection ? `<div class="flex justify-between w-full items-center"><span class="text-xs" data-svelte-h="svelte-12cauxa">Connection</span> <div>${validate_component(Badge, "Badge").$$render($$result, { color: "indigo" }, {}, {
    default: () => {
      return `${escape(componentInput.connection.componentId)}`;
    }
  })} ${validate_component(Badge, "Badge").$$render($$result, { color: "indigo" }, {}, {
    default: () => {
      return `${escape(componentInput.connection.path)}`;
    }
  })}</div></div> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: "xs",
      startIcon: { icon: Unplug },
      color: "red",
      variant: "border"
    },
    {},
    {
      default: () => {
        return `Disconnect`;
      }
    }
  )}` : `${validate_component(Button, "Button").$$render($$result, { size: "xs", endIcon: { icon: Plug } }, {}, {
    default: () => {
      return `Connect`;
    }
  })}`}`;
});
const EvalInputEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let extraLib;
  let $state, $$unsubscribe_state;
  let $worldStore, $$unsubscribe_worldStore;
  let { componentInput } = $$props;
  let { id } = $$props;
  const { onchange, worldStore, state } = getContext("AppViewerContext");
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    extraLib = componentInput?.expr && $worldStore ? buildExtraLib($worldStore?.outputsById ?? {}, id, $state, false) : void 0;
    $$rendered = `${componentInput?.type === "eval" ? `<div class="border">${validate_component(SimpleEditor, "SimpleEditor").$$render(
      $$result,
      {
        lang: "javascript",
        shouldBindKey: false,
        extraLib,
        autoHeight: true,
        code: componentInput.expr
      },
      {
        code: ($$value) => {
          componentInput.expr = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_state();
  $$unsubscribe_worldStore();
  return $$rendered;
});
const RowInputEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { componentInput } = $$props;
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  return `${componentInput ? `<input type="text" placeholder="column name"${add_attribute("value", componentInput.column, 0)}>` : ``}`;
});
const SubTypeEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  let { componentInput } = $$props;
  let { subFieldType } = $$props;
  let { id } = $$props;
  let fakeComponentInput = { ...componentInput, value };
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.subFieldType === void 0 && $$bindings.subFieldType && subFieldType !== void 0) $$bindings.subFieldType(subFieldType);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    fakeComponentInput && (value = fakeComponentInput.value);
    $$rendered = `${validate_component(StaticInputEditor, "StaticInputEditor").$$render(
      $$result,
      {
        id,
        fieldType: subFieldType,
        componentInput: fakeComponentInput
      },
      {
        componentInput: ($$value) => {
          fakeComponentInput = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const QuickAddColumn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $worldStore, $$unsubscribe_worldStore;
  let { columns = [] } = $$props;
  let { id } = $$props;
  let remainingColumns = [];
  const { worldStore } = getContext("AppViewerContext");
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  createEventDispatcher();
  let result = [];
  function subscribeToAllOutputs(observableOutputs) {
    if (observableOutputs) {
      observableOutputs?.["result"]?.subscribe(
        {
          id: "quickadd-" + id + "-result",
          next: (value) => {
            result = value;
          }
        },
        result
      );
    }
  }
  function updateRemainingColumns(result2, columns2) {
    if (Array.isArray(result2) && result2?.length > 0) {
      const allKeysSet = result2.reduce(
        (acc, obj) => {
          if (isObject(obj)) {
            Object.keys(obj).forEach((key) => acc.add(key));
          }
          return acc;
        },
        /* @__PURE__ */ new Set()
      );
      remainingColumns = Array.from(allKeysSet).filter((x) => !columns2?.includes(x));
    }
  }
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0) $$bindings.columns(columns);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  id && subscribeToAllOutputs($worldStore?.outputsById?.[id]);
  {
    updateRemainingColumns(result, columns);
  }
  $$unsubscribe_worldStore();
  return `${remainingColumns.length > 0 ? `<div class="text-xs font-semibold" data-svelte-h="svelte-cgeuvr">Quick add</div> <div class="flex flex-row gap-2 items-center flex-wrap">${each(remainingColumns, (column) => {
    return `${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs2",
        color: "light",
        variant: "border",
        startIcon: { icon: Plus }
      },
      {},
      {
        default: () => {
          return `${escape(column)} `;
        }
      }
    )}`;
  })}</div>` : ``}`;
});
const RefreshDatabaseStudioTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_componentControl;
  let { id = void 0 } = $$props;
  const { componentControl } = getContext("AppViewerContext");
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => value);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  $$unsubscribe_componentControl();
  return `${id ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: "xs2",
      color: "light",
      startIcon: { icon: Rotate_ccw }
    },
    {},
    {
      default: () => {
        return `Force refresh`;
      }
    }
  )}` : ``}`;
});
const ArrayStaticInputEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { componentInput } = $$props;
  let { subFieldType = void 0 } = $$props;
  let { selectOptions = void 0 } = $$props;
  let { id } = $$props;
  createEventDispatcher();
  let items = getItems(componentInput);
  function getItems(componentInput2) {
    return (Array.isArray(componentInput2.value) ? componentInput2.value : []).filter((x) => x != void 0).map((item) => {
      return { value: item, id: generateRandomString() };
    });
  }
  function clearTableOnComponentReset(value) {
    if (Array.isArray(value) && value.length === 0 && items.length > 0) {
      items = [];
    }
  }
  function handleItemsChange() {
    componentInput.value = items.map((item) => item.value).filter((item) => item != void 0);
  }
  let raw = false;
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.subFieldType === void 0 && $$bindings.subFieldType && subFieldType !== void 0) $$bindings.subFieldType(subFieldType);
  if ($$props.selectOptions === void 0 && $$bindings.selectOptions && selectOptions !== void 0) $$bindings.selectOptions(selectOptions);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    subFieldType === "db-explorer" && clearTableOnComponentReset(componentInput?.value);
    items != void 0 && handleItemsChange();
    $$rendered = `<div class="flex gap-2 flex-col mt-2 w-full">${Array.isArray(items) && componentInput.value ? `<div class="flex flex-row items-center justify-between"><div class="text-xs text-tertiary font-semibold">${escape(pluralize(items.length, "item"))}</div> ${subFieldType === "ag-grid" || subFieldType === "table-column" ? `${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        options: { right: "Raw" },
        size: "xs",
        checked: raw
      },
      {
        checked: ($$value) => {
          raw = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</div> <section>${each(items, (item, index) => {
      return `<div class="border-0 outline-none w-full"> <div class="flex flex-row gap-2 items-center relative my-1 w-full"><div class="grow min-w-0">${validate_component(SubTypeEditor, "SubTypeEditor").$$render(
        $$result,
        {
          id,
          subFieldType: raw ? "object" : subFieldType,
          componentInput,
          value: item.value
        },
        {
          componentInput: ($$value) => {
            componentInput = $$value;
            $$settled = false;
          },
          value: ($$value) => {
            item.value = $$value;
            $$settled = false;
          }
        },
        {}
      )}</div> <div class="flex justify-between flex-col items-center"> <div class="w-4 h-4 cursor-move handle">${validate_component(Grip_vertical, "GripVertical").$$render($$result, { size: 16 }, {}, {})}</div> ${subFieldType !== "db-explorer" ? `<button class="z-10 rounded-full p-1 duration-200 hover:bg-surface-hover" aria-label="Remove item">${validate_component(X, "X").$$render($$result, { size: 14 }, {}, {})} </button>` : ``} </div></div> </div>`;
    })}</section>` : ``} ${subFieldType === "db-explorer" ? `${componentInput.loading ? `<div class="flex flex-row gap-2 w-full items-center"><div class="flex flex-row gap-2 w-full items-center text-xs">${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin", size: 14 }, {}, {})}
					Loading columns defintions...</div></div>` : ``} ${validate_component(RefreshDatabaseStudioTable, "RefreshDatabaseStudioTable").$$render($$result, { id }, {}, {})}` : ``} ${subFieldType !== "db-explorer" ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs",
        color: "light",
        startIcon: { icon: Plus }
      },
      {},
      {
        default: () => {
          return `Add`;
        }
      }
    )} ${subFieldType === "table-column" || subFieldType == "ag-grid" ? `${validate_component(QuickAddColumn, "QuickAddColumn").$$render(
      $$result,
      {
        id,
        columns: componentInput.value?.map((item) => item.field)
      },
      {},
      {}
    )}` : ``}` : ``}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const IconSelectInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value = "" } = $$props;
  let items;
  let filteredItems;
  let search = "";
  let { floatingConfig = {
    strategy: "absolute",
    placement: "bottom-end"
  } } = $$props;
  let { shouldUsePortal = true } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.floatingConfig === void 0 && $$bindings.floatingConfig && floatingConfig !== void 0) $$bindings.floatingConfig(floatingConfig);
  if ($$props.shouldUsePortal === void 0 && $$bindings.shouldUsePortal && shouldUsePortal !== void 0) $$bindings.shouldUsePortal(shouldUsePortal);
  {
    {
      filteredItems = items;
    }
  }
  return `${validate_component(Popup, "Popup").$$render($$result, { floatingConfig, shouldUsePortal }, {}, {
    button: () => {
      return `<div class="relative">${validate_component(ClearableInput, "ClearableInput").$$render($$result, { readonly: true, value, class: "!pr-6" }, {}, {})} ${``}</div> `;
    },
    default: ({ close: close2 }) => {
      return `${`${filteredItems ? `<div class="w-72"><input type="text" placeholder="Search" class="col-span-4 mb-2"${add_attribute("value", search, 0)}> <div class="grid gap-1 grid-cols-4 max-h-[300px] overflow-auto">${filteredItems.length ? each(filteredItems, (label) => {
        return `<button type="button"${add_attribute("title", label, 0)} class="${"w-full center-center flex-col font-normal p-1 hover:bg-gray-100 focus:bg-gray-100 rounded duration-200 dark:hover:bg-frost-900 dark:focus:bg-frost-900 " + escape(
          label === value ? "text-blue-600 bg-blue-50 pointer-events-none" : "",
          true
        )}"><img class="dark:invert" loading="lazy" src="${"https://cdn.jsdelivr.net/npm/lucide-static@0.367.0/icons/" + escape(label, true) + ".svg"}"> <span class="inline-block w-full text-[10px] ellipsize pt-0.5">${escape(label)}</span> </button>`;
      }) : `<div class="col-span-4 text-center text-secondary text-sm p-2" data-svelte-h="svelte-1dqbxxx">No icons match your search
						</div>`}</div></div>` : `<div class="text-center text-sm text-secondary p-2" data-svelte-h="svelte-1rekirh">Couldn&#39;t load options</div>`}`}`;
    }
  })}`;
});
const css$4 = {
  code: ".color-picker-input span>label{display:none}.color-picker-input span>div.wrapper{border-radius:.375rem!important;border-style:none!important;box-shadow:0 10px 40px -5px rgba(0,0,0,.25)!important;color:#000;top:6px!important;z-index:30!important}.color-picker-input .slider-wrapper{overflow:visible!important}.color-picker-input .slider-indicator{background-color:#fafafa!important;border:1px solid #2e2e2eaf!important;border-radius:7px!important;box-shadow:0 2px 6px -2px rgba(0,0,0,.5)!important;height:14px!important;margin-top:0!important;top:-2px!important;width:14px!important}.color-picker-input .input-container>input{background-color:#fff;border:1px solid #d1d5db!important;border-radius:6px;color:#000!important}",
  map: null
};
const ColorInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value = "#fff" } = $$props;
  const dispatch = createEventDispatcher();
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  $$result.css.add(css$4);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      dispatch("change", value);
    }
    $$rendered = `<div class="grow">${validate_component(ClearableInput, "ClearableInput").$$render(
      $$result,
      { readonly: true, value },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> ${``}`;
  } while (!$$settled);
  return $$rendered;
});
const TabSelectInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let { componentInput } = $$props;
  const { app } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  const tabComponents = allItems($app.grid, $app.subgrids).filter((component) => component.data.type === "tabscomponent" || component.data.type === "conditionalwrapper" || component.data.type === "decisiontreecomponent");
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  $$unsubscribe_app();
  return `${componentInput.value && tabComponents.length > 0 ? `<div><div class="flex flex-row gap-2 w-full"><div class="flex flex-col"><label for="tabId" class="text-xs font-semibold" data-svelte-h="svelte-1lxb59n">Tab ID</label> <select id="tabId" class="border rounded-md p-1 !w-16">${each(tabComponents, (tabComponent) => {
    return `<option${add_attribute("value", tabComponent.data.id, 0)}>${escape(tabComponent.data.id)} </option>`;
  })}</select></div> <div class="flex flex-col"><label for="tabIndex" class="text-xs font-semibold" data-svelte-h="svelte-g7v5mv">Tab Index</label> <select id="tabIndex" class="border rounded-md p-1 !w-16">${each(tabComponents, (tabComponent) => {
    return `${tabComponent.data.id === componentInput.value.id ? `${each(Array(tabComponent.data.numberOfSubgrids), (_, i) => {
      return `<option${add_attribute("value", i, 0)}>${escape(i)}</option>`;
    })}` : ``}`;
  })}</select></div></div></div>` : `<div class="text-xs text-tertiary" data-svelte-h="svelte-rhowc0">No tab component found in the app</div>`}`;
});
const AgGridWizard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  const presets2 = [
    { label: "None", value: null },
    {
      label: "Currency CHF",
      value: 'value + " CHF"'
    },
    {
      label: "Currency USD",
      value: '"$ " + value'
    },
    {
      label: "Date",
      value: "new Date(value).toLocaleDateString()"
    },
    {
      label: "Percentage",
      value: 'value + " %"'
    },
    {
      label: "Currency GBP",
      value: 'value + " £"'
    },
    {
      label: "Currency EUR",
      value: 'value + " €"'
    },
    {
      label: "Currency JPY",
      value: 'value + " ¥"'
    },
    {
      label: "Decimal places (2)",
      value: "parseFloat(value).toFixed(2)"
    },
    {
      label: "Uppercase",
      value: "value.toUpperCase()"
    },
    {
      label: "Lowercase",
      value: "value.toLowerCase()"
    },
    {
      label: "Boolean (True/False)",
      value: 'value ? "True" : "False"'
    }
  ];
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (value && value.cellRendererType === null) {
        value.cellRendererType = "text";
      }
    }
    $$rendered = `${validate_component(Popup, "Popup").$$render(
      $$result,
      {
        floatingConfig: {
          strategy: "fixed",
          placement: "left-end",
          middleware: [offset(8), flip(), shift()]
        },
        containerClasses: "border rounded-lg shadow-lg bg-surface p-4"
      },
      {},
      {
        button: () => {
          return `${slots.trigger ? slots.trigger({}) : ``} `;
        },
        default: () => {
          return `${value ? `<div class="flex flex-col w-96 p-2 gap-4"><span class="text-sm mb-2 leading-6 font-semibold">Column definitions
				${validate_component(Tooltip, "Tooltip").$$render(
            $$result,
            {
              documentationLink: "https://www.ag-grid.com/javascript-data-grid/column-definitions/"
            },
            {},
            {
              default: () => {
                return `Column definitions are used to define columns in ag-Grid.`;
              }
            }
          )}</span> ${validate_component(Label, "Label").$$render($$result, { label: "Header name" }, {}, {
            default: () => {
              return `<input type="text" placeholder="Header name"${add_attribute("value", value.headerName, 0)}>`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { label: "Editable value" }, {}, {
            default: () => {
              return `${validate_component(Toggle, "Toggle").$$render(
                $$result,
                {
                  options: { right: "Editable" },
                  size: "xs",
                  checked: value.editable
                },
                {
                  checked: ($$value) => {
                    value.editable = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { label: "Min width (px)" }, {}, {
            default: () => {
              return `<input type="number" placeholder="width"${add_attribute("value", value.minWidth, 0)}>`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { label: "Flex" }, {}, {
            header: () => {
              return `${validate_component(Tooltip, "Tooltip").$$render(
                $$result,
                {
                  documentationLink: "https://www.ag-grid.com/javascript-data-grid/column-sizing/#column-flex"
                },
                {},
                {
                  default: () => {
                    return `It&#39;s often required that one or more columns fill the entire available space in the
						grid. For this scenario, it is possible to use the flex config. Some columns could be
						set with a regular width config, while other columns would have a flex config. Flex
						sizing works by dividing the remaining space in the grid among all flex columns in
						proportion to their flex value. For example, suppose the grid has a total width of 450px
						and it has three columns: the first with width: 150; the second with flex: 1; and third
						with flex: 2. The first column will be 150px wide, leaving 300px remaining. The column
						with flex: 2 has twice the size with flex: 1. So final sizes will be: 150px, 100px,
						200px.`;
                  }
                }
              )} `;
            },
            default: () => {
              return `<input type="range" step="1"${add_attribute("min", 1, 0)}${add_attribute("max", 12, 0)}${add_attribute("value", value.flex, 0)}> <div class="text-xs">${escape(value.flex)}</div>`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { label: "Hide" }, {}, {
            default: () => {
              return `${validate_component(Toggle, "Toggle").$$render(
                $$result,
                {
                  options: { right: "Hide" },
                  size: "xs",
                  checked: value.hide
                },
                {
                  checked: ($$value) => {
                    value.hide = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { label: "Value formatter" }, {}, {
            action: () => {
              return `${validate_component(Button, "Button").$$render(
                $$result,
                {
                  size: "xs",
                  color: "light",
                  variant: "border"
                },
                {},
                {
                  default: () => {
                    return `Clear`;
                  }
                }
              )} `;
            },
            header: () => {
              return `${validate_component(Tooltip, "Tooltip").$$render(
                $$result,
                {
                  documentationLink: "https://www.ag-grid.com/javascript-data-grid/value-formatters/"
                },
                {},
                {
                  default: () => {
                    return `Value formatters allow you to format values for display. This is useful when data is one
						type (e.g. numeric) but needs to be converted for human reading (e.g. putting in
						currency symbols and number formatting).`;
                  }
                }
              )}`;
            }
          })} <div><div class="flex flex-col gap-4"><div class="relative">${!presets2.find((preset) => preset.value === value?.valueFormatter) ? `<div class="z-50 absolute bg-opacity-50 bg-surface top-0 left-0 bottom-0 right-0"></div>` : ``} <div class="text-xs font-semibold" data-svelte-h="svelte-12t3cmx">Presets</div> <select placeholder="Code">${each(presets2, (preset) => {
            return `<option${add_attribute("value", preset.value, 0)}>${escape(preset.label)}</option>`;
          })}</select></div> ${validate_component(SimpleEditor, "SimpleEditor").$$render(
            $$result,
            {
              extraLib: "declare const value: any",
              autoHeight: true,
              lang: "javascript",
              code: value.valueFormatter
            },
            {
              code: ($$value) => {
                value.valueFormatter = $$value;
                $$settled = false;
              }
            },
            {}
          )} <div class="text-xs text-secondary -mt-4" data-svelte-h="svelte-1rtpro7">Use \`value\` in the formatter</div></div></div> ${validate_component(Label, "Label").$$render($$result, { label: "Sort" }, {}, {
            default: () => {
              return `<select><option${add_attribute("value", null, 0)} data-svelte-h="svelte-89u4a7">None</option><option value="asc" data-svelte-h="svelte-13sjfr5">Ascending</option><option value="desc" data-svelte-h="svelte-1h5gs53">Descending</option></select>`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { label: "Filter" }, {}, {
            header: () => {
              return `${validate_component(Tooltip, "Tooltip").$$render(
                $$result,
                {
                  documentationLink: "https://www.ag-grid.com/javascript-data-grid/filtering/"
                },
                {},
                {
                  default: () => {
                    return `Filtering allows you to limit the rows displayed in your grid to those that match
						criteria you specify.`;
                  }
                }
              )} `;
            },
            default: () => {
              return `${validate_component(Toggle, "Toggle").$$render(
                $$result,
                {
                  options: { right: "Enable filter" },
                  size: "xs",
                  checked: value.filter
                },
                {
                  checked: ($$value) => {
                    value.filter = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })}  ${validate_component(Label, "Label").$$render($$result, { label: "Type" }, {}, {
            default: () => {
              return `<select><option value="text" data-svelte-h="svelte-1mqqvia">Text</option><option value="link" data-svelte-h="svelte-on4v3i">Link</option></select>`;
            }
          })} ${value.cellRendererType === "link" ? `${validate_component(Alert, "Alert").$$render($$result, { type: "info", title: "Label", size: "xs" }, {}, {
            default: () => {
              return `They are two ways to define a link:
					<ul class="list-disc list-inside" data-svelte-h="svelte-ihclhl"><li><strong>String</strong>: The string will be used as the link and the label.</li> <li><strong>Object</strong>: The object must have a <code>href</code> and a
							<code>label</code> property.</li></ul>`;
            }
          })}` : ``}</div>` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const TableColumnWizard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { column } = $$props;
  if ($$props.column === void 0 && $$bindings.column && column !== void 0) $$bindings.column(column);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Popup, "Popup").$$render(
      $$result,
      {
        floatingConfig: {
          strategy: "fixed",
          placement: "left-end",
          middleware: [offset(8), flip(), shift()]
        },
        containerClasses: "border rounded-lg shadow-lg bg-surface p-4"
      },
      {},
      {
        button: () => {
          return `${slots.trigger ? slots.trigger({}) : ``} `;
        },
        default: () => {
          return `<div class="flex flex-col w-96 p-2 gap-4"><span class="text-sm mb-2 leading-6 font-semibold">Table Column
			${validate_component(Tooltip, "Tooltip").$$render(
            $$result,
            {
              documentationLink: "https://www.ag-grid.com/javascript-data-grid/column-definitions/"
            },
            {},
            {
              default: () => {
                return `Column definitions are used to define columns in ag-Grid.`;
              }
            }
          )}</span> ${validate_component(Label, "Label").$$render($$result, { label: "Header name" }, {}, {
            default: () => {
              return `<input placeholder="header name"${add_attribute("value", column.headerName, 0)}>`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { label: "Show column" }, {}, {
            default: () => {
              return `${validate_component(Toggle, "Toggle").$$render(
                $$result,
                {
                  options: { right: "Hide column" },
                  size: "xs",
                  checked: column.hideColumn
                },
                {
                  checked: ($$value) => {
                    column.hideColumn = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { label: "Type" }, {}, {
            default: () => {
              return `<select><option value="text" data-svelte-h="svelte-1mqqvia">Text</option><option value="badge" data-svelte-h="svelte-l658jc">Badge</option><option value="link" data-svelte-h="svelte-on4v3i">Link</option></select>`;
            }
          })} ${column.type === "link" ? `${validate_component(Alert, "Alert").$$render($$result, { type: "info", title: "Label", size: "xs" }, {}, {
            default: () => {
              return `They are two ways to define a link:
				<ul class="list-disc list-inside" data-svelte-h="svelte-qqxeqp"><li><strong>String</strong>: The string will be used as the link and the label.</li> <li><strong>Object</strong>: The object must have a <code>href</code> and a
						<code>label</code> property.</li></ul>`;
            }
          })}` : ``}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const PlotlyWizard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedComponent, $$unsubscribe_selectedComponent;
  const { selectedComponent } = getContext("AppViewerContext");
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value2) => $selectedComponent = value2);
  let { value = void 0 } = $$props;
  createEventDispatcher();
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Popup, "Popup").$$render(
      $$result,
      {
        floatingConfig: {
          strategy: "fixed",
          placement: "left-end",
          middleware: [offset(8), flip(), shift()]
        },
        containerClasses: "border rounded-lg shadow-lg bg-surface p-4"
      },
      {},
      {
        button: () => {
          return `${slots.trigger ? slots.trigger({}) : ``} `;
        },
        default: () => {
          return `${value ? `<div class="flex flex-col w-96 p-2 gap-4">${validate_component(Label, "Label").$$render($$result, { label: "Name" }, {}, {
            default: () => {
              return `<input type="text"${add_attribute("value", value.name, 0)}>`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { label: "Type" }, {}, {
            default: () => {
              return `<select><option value="bar" data-svelte-h="svelte-1uefkc8">Bar</option><option value="scatter" data-svelte-h="svelte-141vq8k">Scatter</option></select>`;
            }
          })} ${value.type === "scatter" && value.extraOptions ? `${validate_component(Label, "Label").$$render($$result, { label: "Mode" }, {}, {
            default: () => {
              return `<select><option value="markers" data-svelte-h="svelte-14gdipo">Markers</option><option value="lines" data-svelte-h="svelte-19gvjc4">Lines</option><option value="lines+markers" data-svelte-h="svelte-1xicwkq">Lines + Markers</option></select>`;
            }
          })}` : ``} ${validate_component(Label, "Label").$$render($$result, { label: "Aggregation method" }, {}, {
            header: () => {
              return `${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                default: () => {
                  return `A method to aggregate the data. For example, if you have multiple x data points with the
						same value, you can choose to sum them up or take the mean. If you don&#39;t have multiple x
						data points with the same value, this option will have no effect.`;
                }
              })} `;
            },
            default: () => {
              return `<select><option value="sum" data-svelte-h="svelte-1d5dnig">Sum</option><option value="mean" data-svelte-h="svelte-1p1fzs2">Mean</option><option value="median" data-svelte-h="svelte-k87j72">Median</option><option value="min" data-svelte-h="svelte-14nmmaq">Min</option><option value="max" data-svelte-h="svelte-14udsz2">Max</option></select>`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { label: "Tooltip" }, {}, {
            default: () => {
              return `<input type="text"${add_attribute("value", value.tooltip, 0)}>`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { label: "Color" }, {}, {
            default: () => {
              return `${validate_component(ColorInput, "ColorInput").$$render(
                $$result,
                { value: value.color },
                {
                  value: ($$value) => {
                    value.color = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(InputsSpecEditor, "InputsSpecEditor").$$render(
            $$result,
            {
              key: "Data",
              id: $selectedComponent?.[0] ?? "",
              userInputEnabled: false,
              shouldCapitalize: true,
              resourceOnly: false,
              fieldType: value.value?.["fieldType"],
              subFieldType: value.value?.["subFieldType"],
              format: value.value?.["format"],
              selectOptions: value.value?.["selectOptions"],
              tooltip: value.value?.["tooltip"],
              fileUpload: value.value?.["fileUpload"],
              placeholder: value.value?.["placeholder"],
              customTitle: value.value?.["customTitle"],
              displayType: false,
              componentInput: value.value
            },
            {
              componentInput: ($$value) => {
                value.value = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${validate_component(Button, "Button").$$render($$result, { color: "red", size: "xs" }, {}, {
            default: () => {
              return `Remove dataset`;
            }
          })}</div>` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_selectedComponent();
  return $$rendered;
});
const ChartJSWizard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedComponent, $$unsubscribe_selectedComponent;
  const { selectedComponent } = getContext("AppViewerContext");
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value2) => $selectedComponent = value2);
  let { value = void 0 } = $$props;
  createEventDispatcher();
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Popup, "Popup").$$render(
      $$result,
      {
        floatingConfig: {
          strategy: "fixed",
          placement: "left-end",
          middleware: [offset(8), flip(), shift()]
        },
        containerClasses: "border rounded-lg shadow-lg bg-surface p-4"
      },
      {},
      {
        button: () => {
          return `${slots.trigger ? slots.trigger({}) : ``} `;
        },
        default: () => {
          return `${value ? `<div class="flex flex-col w-96 p-2 gap-4">${validate_component(Label, "Label").$$render($$result, { label: "Name" }, {}, {
            default: () => {
              return `<input type="text"${add_attribute("value", value.name, 0)}>`;
            }
          })} ${validate_component(InputsSpecEditor, "InputsSpecEditor").$$render(
            $$result,
            {
              key: "Data",
              id: $selectedComponent?.[0] ?? "",
              userInputEnabled: false,
              shouldCapitalize: true,
              resourceOnly: false,
              fieldType: value.value?.["fieldType"],
              subFieldType: value.value?.["subFieldType"],
              format: value.value?.["format"],
              selectOptions: value.value?.["selectOptions"],
              tooltip: value.value?.["tooltip"],
              fileUpload: value.value?.["fileUpload"],
              placeholder: value.value?.["placeholder"],
              customTitle: value.value?.["customTitle"],
              displayType: false,
              componentInput: value.value
            },
            {
              componentInput: ($$value) => {
                value.value = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${validate_component(Button, "Button").$$render($$result, { color: "red", size: "xs" }, {}, {
            default: () => {
              return `Remove dataset`;
            }
          })}</div>` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_selectedComponent();
  return $$rendered;
});
function getValueOfDeprecated(obj) {
  if (!obj) return false;
  let innerObject = obj[Object.keys(obj)[0]];
  return innerObject?.deprecated;
}
const OneOfInputSpecsEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { key } = $$props;
  let { oneOf } = $$props;
  let { inputSpecsConfiguration } = $$props;
  let { labels } = $$props;
  let { shouldCapitalize } = $$props;
  let { id } = $$props;
  let { resourceOnly } = $$props;
  let { tooltip } = $$props;
  let { disabledOptions = [] } = $$props;
  let { acceptSelf = false } = $$props;
  let { recomputeOnInputChanged = true } = $$props;
  let { showOnDemandOnlyToggle = true } = $$props;
  if ($$props.key === void 0 && $$bindings.key && key !== void 0) $$bindings.key(key);
  if ($$props.oneOf === void 0 && $$bindings.oneOf && oneOf !== void 0) $$bindings.oneOf(oneOf);
  if ($$props.inputSpecsConfiguration === void 0 && $$bindings.inputSpecsConfiguration && inputSpecsConfiguration !== void 0) $$bindings.inputSpecsConfiguration(inputSpecsConfiguration);
  if ($$props.labels === void 0 && $$bindings.labels && labels !== void 0) $$bindings.labels(labels);
  if ($$props.shouldCapitalize === void 0 && $$bindings.shouldCapitalize && shouldCapitalize !== void 0) $$bindings.shouldCapitalize(shouldCapitalize);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.resourceOnly === void 0 && $$bindings.resourceOnly && resourceOnly !== void 0) $$bindings.resourceOnly(resourceOnly);
  if ($$props.tooltip === void 0 && $$bindings.tooltip && tooltip !== void 0) $$bindings.tooltip(tooltip);
  if ($$props.disabledOptions === void 0 && $$bindings.disabledOptions && disabledOptions !== void 0) $$bindings.disabledOptions(disabledOptions);
  if ($$props.acceptSelf === void 0 && $$bindings.acceptSelf && acceptSelf !== void 0) $$bindings.acceptSelf(acceptSelf);
  if ($$props.recomputeOnInputChanged === void 0 && $$bindings.recomputeOnInputChanged && recomputeOnInputChanged !== void 0) $$bindings.recomputeOnInputChanged(recomputeOnInputChanged);
  if ($$props.showOnDemandOnlyToggle === void 0 && $$bindings.showOnDemandOnlyToggle && showOnDemandOnlyToggle !== void 0) $$bindings.showOnDemandOnlyToggle(showOnDemandOnlyToggle);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        if (oneOf == void 0) {
          oneOf = { configuration: {}, selected: "" };
        }
        if (oneOf.configuration == void 0) {
          oneOf.configuration = {};
        }
        if (oneOf.selected == void 0) {
          oneOf.selected = "";
        }
        if (oneOf?.configuration[oneOf?.selected] == void 0) {
          oneOf.configuration[oneOf.selected] = {};
        }
        if (oneOf.selected === "") {
          oneOf = {
            configuration: cleanseOneOfConfiguration(inputSpecsConfiguration),
            selected: Object.keys(inputSpecsConfiguration ?? {})[0],
            type: "oneOf"
          };
        }
      }
    }
    $$rendered = `<div class="p-2 border"><div class="mb-2 text-sm font-semibold">${escape(capitalize(addWhitespaceBeforeCapitals(key)))} 
		${tooltip ? `${validate_component(Tooltip, "Tooltip").$$render($$result, { light: true }, {}, {
      default: () => {
        return `${escape(tooltip)}`;
      }
    })}` : ``}</div> <select class="w-full border border-gray-300 rounded-md p-2"${add_attribute("value", oneOf.selected, 0)}>${each(Object.keys(inputSpecsConfiguration ?? {}), (choice) => {
      return `${!disabledOptions.includes(choice) && !getValueOfDeprecated(inputSpecsConfiguration[choice]) || oneOf.selected === choice ? `<option${add_attribute("value", choice, 0)}>${escape(labels?.[choice] ?? choice)}</option>` : ``}`;
    })}</select> ${oneOf.selected !== "none" && oneOf.selected !== "errorOverlay" ? `<div class="mb-4"></div>` : ``} <div class="flex flex-col gap-4">${each(Object.keys(inputSpecsConfiguration?.[oneOf.selected] ?? {}), (nestedKey) => {
      let config = {
        ...inputSpecsConfiguration?.[oneOf.selected]?.[nestedKey],
        ...oneOf.configuration?.[oneOf.selected]?.[nestedKey]
      };
      return ` ${config && oneOf.configuration[oneOf.selected] ? `${validate_component(InputsSpecEditor, "InputsSpecEditor").$$render(
        $$result,
        {
          recomputeOnInputChanged,
          key: nestedKey,
          id,
          acceptSelf,
          userInputEnabled: false,
          shouldCapitalize,
          resourceOnly,
          fieldType: config?.["fieldType"],
          subFieldType: config?.["subFieldType"],
          format: config?.["format"],
          selectOptions: config?.["selectOptions"],
          placeholder: config?.["placeholder"],
          customTitle: config?.["customTitle"],
          tooltip: config?.["tooltip"],
          fileUpload: config?.["fileUpload"],
          loading: config?.["loading"],
          documentationLink: config?.["documentationLink"],
          allowTypeChange: config?.["allowTypeChange"],
          showOnDemandOnlyToggle,
          componentInput: oneOf.configuration[oneOf.selected][nestedKey]
        },
        {
          componentInput: ($$value) => {
            oneOf.configuration[oneOf.selected][nestedKey] = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : ``}`;
    })}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const AgChartWizard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isEE;
  let $selectedComponent, $$unsubscribe_selectedComponent;
  let $app, $$unsubscribe_app;
  const { selectedComponent, app } = getContext("AppViewerContext");
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value2) => $selectedComponent = value2);
  $$unsubscribe_app = subscribe(app, (value2) => $app = value2);
  let component = void 0;
  let { value = void 0 } = $$props;
  createEventDispatcher();
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (component === void 0 && $selectedComponent && $app) {
        component = findGridItem($app, $selectedComponent[0]);
      }
    }
    isEE = component?.data.type === "agchartscomponentee";
    $$rendered = `${validate_component(Popup, "Popup").$$render(
      $$result,
      {
        floatingConfig: {
          strategy: "fixed",
          placement: "left-end",
          middleware: [offset(8), flip(), shift()]
        },
        containerClasses: "border rounded-lg shadow-lg bg-surface p-4"
      },
      {},
      {
        button: () => {
          return `${slots.trigger ? slots.trigger({}) : ``} `;
        },
        default: () => {
          return `${value ? `<div class="flex flex-col w-96 p-2 gap-4">${validate_component(Label, "Label").$$render($$result, { label: "Name" }, {}, {
            default: () => {
              return `<input type="text"${add_attribute("value", value.name, 0)}>`;
            }
          })} ${validate_component(OneOfInputSpecsEditor, "OneOfInputSpecsEditor").$$render(
            $$result,
            {
              key: "Data",
              id: $selectedComponent?.[0] ?? "",
              shouldCapitalize: true,
              resourceOnly: false,
              inputSpecsConfiguration: value.value?.["configuration"],
              labels: value.value?.["labels"],
              tooltip: value.value?.["tooltip"],
              disabledOptions: isEE ? [] : ["range-bar", "range-area"],
              oneOf: value.value
            },
            {
              oneOf: ($$value) => {
                value.value = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${validate_component(Button, "Button").$$render($$result, { color: "red", size: "xs" }, {}, {
            default: () => {
              return `Remove dataset`;
            }
          })}</div>` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_selectedComponent();
  $$unsubscribe_app();
  return $$rendered;
});
const DBExplorerWizard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let warning;
  let { value } = $$props;
  const presets2 = [
    { label: "None", value: null },
    {
      label: "Currency CHF",
      value: 'value + " CHF"'
    },
    {
      label: "Currency USD",
      value: '"$ " + value'
    },
    {
      label: "Date",
      value: "new Date(value).toLocaleDateString()"
    },
    {
      label: "Percentage",
      value: 'value + " %"'
    },
    {
      label: "Currency GBP",
      value: 'value + " £"'
    },
    {
      label: "Currency EUR",
      value: 'value + " €"'
    },
    {
      label: "Currency JPY",
      value: 'value + " ¥"'
    },
    {
      label: "Decimal places (2)",
      value: "parseFloat(value).toFixed(2)"
    },
    {
      label: "Uppercase",
      value: "value.toUpperCase()"
    },
    {
      label: "Lowercase",
      value: "value.toLowerCase()"
    },
    {
      label: "Boolean (True/False)",
      value: 'value ? "True" : "False"'
    },
    {
      label: "Object",
      value: "JSON.stringify(value, null, 2)"
    }
  ];
  function computeWarning(columnMetadata, value2) {
    if (columnMetadata?.isnullable === "NO" && !columnMetadata?.defaultvalue) {
      if ([ColumnIdentity.Always, ColumnIdentity.ByDefault].includes(columnMetadata?.isidentity)) {
        return {
          type: "info",
          title: "Value will be generated",
          message: "The column is an identity column. The value will be generated by the database."
        };
      }
      if (value2?.hideInsert) {
        return {
          type: "warning",
          title: "No default value",
          message: "The column is not nullable and doesn't have a default value. A default value is required."
        };
      }
    }
    if (columnMetadata?.defaultvalue !== null) {
      return {
        type: "info",
        title: "Default value",
        message: `${value2?.hideInsert ? "" : "You may want to hide this field from insert. "}The column has a default value defined in the database. The default value is: ${value2?.defaultvalue}`
      };
    }
    if (columnMetadata?.isnullable === "YES") {
      return {
        type: "info",
        title: "Default value",
        message: `${value2?.hideInsert ? "" : "You may want to hide this field from insert. "}The column can be null. If no value is provided, the default value will be null.`
      };
    }
    return null;
  }
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    warning = computeWarning(value, value);
    $$rendered = `${validate_component(Popup, "Popup").$$render(
      $$result,
      {
        floatingConfig: {
          strategy: "fixed",
          placement: "left-start",
          middleware: [offset(8), flip(), shift()]
        },
        containerClasses: "border rounded-lg shadow-lg bg-surface p-4  max-h-[512px] overflow-y-auto"
      },
      {},
      {
        button: () => {
          return `${slots.trigger ? slots.trigger({}) : ``} `;
        },
        default: () => {
          return `${value ? `<div class="flex flex-col w-96 p-2 gap-4">${validate_component(Section, "Section").$$render($$result, { label: "Column settings" }, {}, {
            header: () => {
              return `${validate_component(Badge, "Badge").$$render($$result, { color: "blue" }, {}, {
                default: () => {
                  return `${escape(value.field)}`;
                }
              })} `;
            },
            default: () => {
              return `${validate_component(Label, "Label").$$render($$result, { label: "Skip for select and update" }, {}, {
                action: () => {
                  return `${validate_component(Toggle, "Toggle").$$render(
                    $$result,
                    {
                      size: "xs",
                      disabled: value?.isprimarykey,
                      checked: value.ignored
                    },
                    {
                      checked: ($$value) => {
                        value.ignored = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )} `;
                },
                header: () => {
                  return `${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                    default: () => {
                      return `By default, all columns are included in the select and update queries. If you want to
							exclude a column from the select and update queries, you can set this property to
							true.`;
                    }
                  })} `;
                },
                default: () => {
                  return `${value?.isprimarykey ? `${validate_component(Alert, "Alert").$$render(
                    $$result,
                    {
                      type: "warning",
                      size: "xs",
                      title: "Primary key",
                      class: "my-1"
                    },
                    {},
                    {
                      default: () => {
                        return `You cannot skip a primary key.`;
                      }
                    }
                  )}` : ``}`;
                }
              })} ${validate_component(Label, "Label").$$render($$result, { label: "Hide from insert" }, {}, {
                action: () => {
                  return `${validate_component(Toggle, "Toggle").$$render(
                    $$result,
                    { size: "xs", checked: value.hideInsert },
                    {
                      checked: ($$value) => {
                        value.hideInsert = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )} `;
                },
                header: () => {
                  return `${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                    default: () => {
                      return `By default, all columns are used to generate the submit form. If you want to exclude a
							column from the submit form, you can set this property to true. If the column is not
							nullable or doesn&#39;t have a default value, a default value will be required.`;
                    }
                  })}`;
                }
              })} ${warning ? `${validate_component(Alert, "Alert").$$render(
                $$result,
                {
                  type: warning.type,
                  size: "xs",
                  title: warning.title,
                  class: "my-2"
                },
                {},
                {
                  default: () => {
                    return `${escape(warning.message)}`;
                  }
                }
              )}` : ``} ${value?.defaultvalue !== null && value?.hideInsert ? `${validate_component(Toggle, "Toggle").$$render(
                $$result,
                {
                  size: "xs",
                  options: {
                    right: `Override default value: ${value?.defaultvalue}`
                  },
                  checked: value.overrideDefaultValue
                },
                {
                  checked: ($$value) => {
                    value.overrideDefaultValue = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}` : ``} ${validate_component(Label, "Label").$$render($$result, { label: "Default input" }, {}, {
                header: () => {
                  return `${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                    default: () => {
                      return `By default, all columns are used to generate the submit form. If you want to exclude a
							column from the submit form, you can set this property to true. If the column is not
							nullable or doesn&#39;t have a default value, a default value will be required.`;
                    }
                  })} `;
                },
                default: () => {
                  return `${value?.datatype ? (() => {
                    let type = value?.datatype;
                    return ` <div class="flex flex-row items-center gap-2">${validate_component(Badge, "Badge").$$render($$result, { color: "dark-gray" }, {}, {
                      default: () => {
                        return `Type:
								${escape(type)}`;
                      }
                    })} ${value?.isnullable == "YES" && value.hideInsert ? `${validate_component(Toggle, "Toggle").$$render(
                      $$result,
                      {
                        size: "xs",
                        options: { right: "Set to null" },
                        disabled: value.hideInsert && value?.defaultvalue !== null && !value?.overrideDefaultValue,
                        checked: value.defaultValueNull
                      },
                      {
                        checked: ($$value) => {
                          value.defaultValueNull = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}` : ``}</div> <input type="text" placeholder="Default value" class="mt-2" ${value.defaultValueNull || value.hideInsert && value?.defaultvalue !== null && !value?.overrideDefaultValue ? "disabled" : ""}${add_attribute("value", value.defaultUserValue, 0)}>`;
                  })() : ``}`;
                }
              })}`;
            }
          })} ${validate_component(Section, "Section").$$render($$result, { label: "AG Grid configuration" }, {}, {
            default: () => {
              return `<div${add_attribute("class", twMerge("flex flex-col gap-4", value.ignored ? "opacity-50 cursor-none " : ""), 0)}>${validate_component(Label, "Label").$$render($$result, { label: "Header name" }, {}, {
                default: () => {
                  return `<input type="text" placeholder="Header name"${add_attribute("value", value.headerName, 0)}>`;
                }
              })} ${validate_component(Label, "Label").$$render($$result, { label: "Editable value" }, {}, {
                default: () => {
                  return `${validate_component(Toggle, "Toggle").$$render(
                    $$result,
                    {
                      options: { right: "Editable" },
                      size: "xs",
                      checked: value.editable
                    },
                    {
                      checked: ($$value) => {
                        value.editable = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })} ${validate_component(Label, "Label").$$render($$result, { label: "Min width (px)" }, {}, {
                default: () => {
                  return `<input type="number" placeholder="width"${add_attribute("value", value.minWidth, 0)}>`;
                }
              })} ${validate_component(Label, "Label").$$render($$result, { label: "Flex" }, {}, {
                header: () => {
                  return `${validate_component(Tooltip, "Tooltip").$$render(
                    $$result,
                    {
                      documentationLink: "https://www.ag-grid.com/javascript-data-grid/column-sizing/#column-flex"
                    },
                    {},
                    {
                      default: () => {
                        return `It&#39;s often required that one or more columns fill the entire available space in the
								grid. For this scenario, it is possible to use the flex config. Some columns could
								be set with a regular width config, while other columns would have a flex config.
								Flex sizing works by dividing the remaining space in the grid among all flex columns
								in proportion to their flex value. For example, suppose the grid has a total width
								of 450px and it has three columns: the first with width: 150; the second with flex:
								1; and third with flex: 2. The first column will be 150px wide, leaving 300px
								remaining. The column with flex: 2 has twice the size with flex: 1. So final sizes
								will be: 150px, 100px, 200px.`;
                      }
                    }
                  )} `;
                },
                default: () => {
                  return `<input type="range" step="1"${add_attribute("min", 1, 0)}${add_attribute("max", 12, 0)}${add_attribute("value", value.flex, 0)}> <div class="text-xs">${escape(value.flex)}</div>`;
                }
              })} ${validate_component(Label, "Label").$$render($$result, { label: "Hide" }, {}, {
                default: () => {
                  return `${validate_component(Toggle, "Toggle").$$render(
                    $$result,
                    {
                      options: { right: "Hide" },
                      size: "xs",
                      checked: value.hide
                    },
                    {
                      checked: ($$value) => {
                        value.hide = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })} ${validate_component(Label, "Label").$$render($$result, { label: "Value formatter" }, {}, {
                action: () => {
                  return `${validate_component(Button, "Button").$$render(
                    $$result,
                    {
                      size: "xs",
                      color: "light",
                      variant: "border"
                    },
                    {},
                    {
                      default: () => {
                        return `Clear`;
                      }
                    }
                  )} `;
                },
                header: () => {
                  return `${validate_component(Tooltip, "Tooltip").$$render(
                    $$result,
                    {
                      documentationLink: "https://www.ag-grid.com/javascript-data-grid/value-formatters/"
                    },
                    {},
                    {
                      default: () => {
                        return `Value formatters allow you to format values for display. This is useful when data is
								one type (e.g. numeric) but needs to be converted for human reading (e.g. putting in
								currency symbols and number formatting).`;
                      }
                    }
                  )}`;
                }
              })} <div><div class="flex flex-col gap-4"><div class="relative">${!presets2.find((preset) => preset.value === value?.valueFormatter) ? `<div class="z-50 absolute bg-opacity-50 bg-surface top-0 left-0 bottom-0 right-0"></div>` : ``} <div class="text-xs font-semibold" data-svelte-h="svelte-12t3cmx">Presets</div> <select placeholder="Code">${each(presets2, (preset) => {
                return `<option${add_attribute("value", preset.value, 0)}>${escape(preset.label)}</option>`;
              })}</select></div> ${validate_component(SimpleEditor, "SimpleEditor").$$render(
                $$result,
                {
                  extraLib: "declare const value: any",
                  autoHeight: true,
                  lang: "javascript",
                  code: value.valueFormatter
                },
                {
                  code: ($$value) => {
                    value.valueFormatter = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} <div class="text-xs text-secondary -mt-4" data-svelte-h="svelte-1rtpro7">Use \`value\` in the formatter</div></div></div> ${validate_component(Label, "Label").$$render($$result, { label: "Sort" }, {}, {
                default: () => {
                  return `<select><option${add_attribute("value", null, 0)} data-svelte-h="svelte-89u4a7">None</option><option value="asc" data-svelte-h="svelte-13sjfr5">Ascending</option><option value="desc" data-svelte-h="svelte-1h5gs53">Descending</option></select>`;
                }
              })}</div>`;
            }
          })}</div>` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const DBTableSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sortedOptions;
  let { componentInput } = $$props;
  let { selectOptions = void 0 } = $$props;
  let { id } = $$props;
  let selectedValue = componentInput?.value ?? void 0;
  let darkMode = false;
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.selectOptions === void 0 && $$bindings.selectOptions && selectOptions !== void 0) $$bindings.selectOptions(selectOptions);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    sortedOptions = Array.isArray(selectOptions) ? selectOptions?.sort((a, b) => a.localeCompare(b)) : [];
    $$rendered = `${validate_component(DarkModeObserver, "DarkModeObserver").$$render(
      $$result,
      { darkMode },
      {
        darkMode: ($$value) => {
          darkMode = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${selectOptions && componentInput ? `${validate_component(Select, "Select").$$render(
      $$result,
      {
        portal: false,
        value: selectedValue,
        items: sortedOptions,
        class: "text-clip grow min-w-0",
        placeholder: "Select a table",
        inputStyles: SELECT_INPUT_DEFAULT_STYLE.inputStyles,
        containerStyles: darkMode ? SELECT_INPUT_DEFAULT_STYLE.containerStylesDark : SELECT_INPUT_DEFAULT_STYLE.containerStyles,
        clearable: true
      },
      {},
      {}
    )}` : `<input${add_attribute("id", id, 0)} class="w-full p-2 border rounded-md" type="text">`}`;
  } while (!$$settled);
  return $$rendered;
});
const AppPicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_userStore;
  let $$unsubscribe_workspaceStore;
  $$unsubscribe_userStore = subscribe(userStore, (value2) => value2);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value2) => value2);
  let { value = "" } = $$props;
  let { selecteValue = value } = $$props;
  let darkMode = false;
  const { appPath } = getContext("AppViewerContext");
  let apps = [];
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.selecteValue === void 0 && $$bindings.selecteValue && selecteValue !== void 0) $$bindings.selecteValue(selecteValue);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(DarkModeObserver, "DarkModeObserver").$$render(
      $$result,
      { darkMode },
      {
        darkMode: ($$value) => {
          darkMode = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="flex flex-col gap-2 w-full">${validate_component(Select, "Select").$$render(
      $$result,
      {
        class: "grow shrink max-w-full",
        items: apps.map((app) => {
          return {
            value: app.path,
            label: app.path === appPath ? `${app.path} (current app)` : app.path
          };
        }),
        placeholder: "Pick an app",
        inputStyles: SELECT_INPUT_DEFAULT_STYLE.inputStyles,
        containerStyles: darkMode ? SELECT_INPUT_DEFAULT_STYLE.containerStylesDark : SELECT_INPUT_DEFAULT_STYLE.containerStyles,
        portal: false,
        value: selecteValue
      },
      {
        value: ($$value) => {
          selecteValue = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${!appPath ? `${validate_component(Alert, "Alert").$$render(
      $$result,
      {
        title: "Current app not selectable",
        size: "xs",
        type: "warning",
        collapsible: true
      },
      {},
      {
        default: () => {
          return `Current app is not selectable until you have deployed this app at least once.`;
        }
      }
    )}` : ``} ${appPath && appPath === value ? `<div class="text-2xs" data-svelte-h="svelte-jaboh8">The current app is selected. If the path changes, the path needs to be updated manually.</div>` : ``}</div>`;
  } while (!$$settled);
  $$unsubscribe_userStore();
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const StaticInputEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { componentInput } = $$props;
  let { fieldType = void 0 } = $$props;
  let { subFieldType = void 0 } = $$props;
  let { selectOptions = void 0 } = $$props;
  let { placeholder = void 0 } = $$props;
  let { format = void 0 } = $$props;
  let { id } = $$props;
  const { onchange } = getContext("AppViewerContext");
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.fieldType === void 0 && $$bindings.fieldType && fieldType !== void 0) $$bindings.fieldType(fieldType);
  if ($$props.subFieldType === void 0 && $$bindings.subFieldType && subFieldType !== void 0) $$bindings.subFieldType(subFieldType);
  if ($$props.selectOptions === void 0 && $$bindings.selectOptions && selectOptions !== void 0) $$bindings.selectOptions(selectOptions);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.format === void 0 && $$bindings.format && format !== void 0) $$bindings.format(format);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    componentInput && onchange?.();
    $$rendered = `${componentInput?.type === "static" ? `${fieldType === "number" || fieldType === "integer" ? `<input type="number"${add_attribute("value", componentInput.value, 0)}>` : `${fieldType === "textarea" ? `<textarea>${escape(componentInput.value || "")}</textarea>` : `${fieldType === "date" ? `<input type="date"${add_attribute("value", componentInput.value, 0)}>` : `${fieldType === "time" ? `<input type="time"${add_attribute("value", componentInput.value, 0)}>` : `${fieldType === "datetime" ? `${validate_component(DateTimeInput, "DateTimeInput").$$render(
      $$result,
      { value: componentInput.value },
      {
        value: ($$value) => {
          componentInput.value = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${fieldType === "boolean" ? `${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        size: "xs",
        class: "mt-2",
        checked: componentInput.value
      },
      {
        checked: ($$value) => {
          componentInput.value = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${fieldType === "select" && selectOptions ? `${subFieldType === "db-table" ? `${validate_component(DBTableSelect, "DBTableSelect").$$render(
      $$result,
      { selectOptions, id, componentInput },
      {
        componentInput: ($$value) => {
          componentInput = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `<select>${each(selectOptions ?? [], (option) => {
      return `${typeof option == "string" ? `<option${add_attribute("value", option, 0)}>${escape(option)} </option>` : `<option${add_attribute("value", option.value, 0)}>${escape(option.label)} </option>`}`;
    })}</select>`}` : `${fieldType === "icon-select" ? `${validate_component(IconSelectInput, "IconSelectInput").$$render(
      $$result,
      { value: componentInput.value },
      {
        value: ($$value) => {
          componentInput.value = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${fieldType === "tab-select" ? `${validate_component(TabSelectInput, "TabSelectInput").$$render(
      $$result,
      { componentInput },
      {
        componentInput: ($$value) => {
          componentInput = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${fieldType === "resource" && subFieldType && [
      "mysql",
      "postgres",
      "ms_sql_server",
      "snowflake",
      "bigquery"
    ].includes(subFieldType) ? `${validate_component(ResourcePicker, "ResourcePicker").$$render(
      $$result,
      {
        initialValue: componentInput.value?.split("$res:")?.[1] || "",
        showSchemaExplorer: true,
        resourceType: subFieldType === "postgres" ? "postgresql" : subFieldType
      },
      {},
      {}
    )}` : `${fieldType === "resource" && subFieldType === "s3" ? `${validate_component(ResourcePicker, "ResourcePicker").$$render(
      $$result,
      {
        initialValue: componentInput.value?.split("$res:")?.[1] || "",
        resourceType: "s3"
      },
      {},
      {}
    )}` : `${fieldType === "labeledresource" ? `${componentInput?.value && typeof componentInput?.value == "object" && "label" in componentInput?.value && (componentInput.value?.["value"] == void 0 || typeof componentInput.value?.["value"] == "string") ? `<div class="flex flex-col gap-1 w-full"><input placeholder="Label" type="text"${add_attribute("value", componentInput.value["label"], 0)}> ${validate_component(ResourcePicker, "ResourcePicker").$$render(
      $$result,
      {
        initialValue: componentInput.value?.["value"]?.split("$res:")?.[1] || "",
        showSchemaExplorer: true
      },
      {},
      {}
    )}</div>` : `Inconsistent labeled resource object`}` : `${fieldType === "color" ? `${validate_component(ColorInput, "ColorInput").$$render(
      $$result,
      { value: componentInput.value },
      {
        value: ($$value) => {
          componentInput.value = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${fieldType === "object" || fieldType == "labeledselect" ? `${format?.startsWith("resource-") && (componentInput.value == void 0 || typeof componentInput.value == "string") ? `${validate_component(ResourcePicker, "ResourcePicker").$$render(
      $$result,
      {
        initialValue: componentInput.value?.split("$res:")?.[1] || "",
        resourceType: format && format?.split("-").length > 1 ? format.substring("resource-".length) : void 0,
        showSchemaExplorer: true
      },
      {},
      {}
    )}` : `<div class="flex w-full flex-col">${validate_component(JsonEditor, "JsonEditor").$$render(
      $$result,
      {
        small: true,
        code: JSON.stringify(componentInput.value, null, 2),
        value: componentInput.value
      },
      {
        value: ($$value) => {
          componentInput.value = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>`}` : `${fieldType === "array" ? `${validate_component(ArrayStaticInputEditor, "ArrayStaticInputEditor").$$render(
      $$result,
      { id, subFieldType, componentInput },
      {
        componentInput: ($$value) => {
          componentInput = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${fieldType === "schema" ? `<div class="w-full">${validate_component(EditableSchemaDrawer, "EditableSchemaDrawer").$$render(
      $$result,
      { schema: componentInput.value },
      {
        schema: ($$value) => {
          componentInput.value = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : `${fieldType === "ag-grid" ? `<div class="flex flex-row rounded-md bg-surface items-center h-full"><div class="relative w-full"><input class="text-xs px-2 border-y w-full flex flex-row items-center border-r rounded-r-md h-8" placeholder="Field"${add_attribute("value", componentInput.value.field, 0)}> <div class="absolute top-1 right-1">${validate_component(AgGridWizard, "AgGridWizard").$$render(
      $$result,
      { value: componentInput.value },
      {
        value: ($$value) => {
          componentInput.value = $$value;
          $$settled = false;
        }
      },
      {
        trigger: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              color: "light",
              size: "xs2",
              nonCaptureEvent: true
            },
            {},
            {
              default: () => {
                return `<div class="flex flex-row items-center gap-2 text-xs font-normal">${validate_component(Settings, "Settings").$$render($$result, { size: 16 }, {}, {})}</div>`;
              }
            }
          )}`;
        }
      }
    )}</div></div></div>` : `${fieldType === "db-explorer" && componentInput.value != void 0 ? `<div class="flex flex-row rounded-md bg-surface items-center h-full"><div class="relative w-full"><input class="text-xs px-2 border-y w-full flex flex-row items-center border-r rounded-r-md h-8" placeholder="Field" disabled${add_attribute("value", componentInput.value.field, 0)}> <div class="absolute top-1 right-1">${validate_component(DBExplorerWizard, "DBExplorerWizard").$$render(
      $$result,
      { value: componentInput.value },
      {
        value: ($$value) => {
          componentInput.value = $$value;
          $$settled = false;
        }
      },
      {
        trigger: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              color: "light",
              size: "xs2",
              nonCaptureEvent: true
            },
            {},
            {
              default: () => {
                return `<div class="flex flex-row items-center gap-2 text-xs font-normal">${validate_component(Settings, "Settings").$$render($$result, { size: 16 }, {}, {})}</div>`;
              }
            }
          )}`;
        }
      }
    )}</div></div></div>` : `${fieldType === "table-column" ? `<div class="flex flex-row rounded-md bg-surface items-center h-full"><div class="relative w-full"><input class="text-xs px-2 border-y w-full flex flex-row items-center border-r rounded-r-md h-8" placeholder="Field"${add_attribute("value", componentInput.value.field, 0)}> <div class="absolute top-1 right-1">${validate_component(TableColumnWizard, "TableColumnWizard").$$render(
      $$result,
      { column: componentInput.value },
      {
        column: ($$value) => {
          componentInput.value = $$value;
          $$settled = false;
        }
      },
      {
        trigger: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              color: "light",
              size: "xs2",
              nonCaptureEvent: true
            },
            {},
            {
              default: () => {
                return `<div class="flex flex-row items-center gap-2 text-xs font-normal">${validate_component(Settings, "Settings").$$render($$result, { size: 16 }, {}, {})}</div>`;
              }
            }
          )}`;
        }
      }
    )}</div></div></div>` : `${fieldType === "plotly" ? `<div class="flex flex-row rounded-md bg-surface items-center h-full"><div class="relative w-full"><input class="text-xs px-2 border-y w-full flex flex-row items-center border-r rounded-r-md h-8" placeholder="Dataset name"${add_attribute("value", componentInput.value.name, 0)}> <div class="absolute top-1 right-1">${validate_component(PlotlyWizard, "PlotlyWizard").$$render(
      $$result,
      { value: componentInput.value },
      {
        value: ($$value) => {
          componentInput.value = $$value;
          $$settled = false;
        }
      },
      {
        trigger: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              color: "light",
              size: "xs2",
              nonCaptureEvent: true
            },
            {},
            {
              default: () => {
                return `<div class="flex flex-row items-center gap-2 text-xs font-normal">${validate_component(Settings, "Settings").$$render($$result, { size: 16 }, {}, {})}</div>`;
              }
            }
          )}`;
        }
      }
    )}</div></div></div>` : `${fieldType === "chartjs" ? `<div class="flex flex-row rounded-md bg-surface items-center h-full"><div class="relative w-full"><input class="text-xs px-2 border-y w-full flex flex-row items-center border-r rounded-r-md h-8" placeholder="Dataset name"${add_attribute("value", componentInput.value.name, 0)}> <div class="absolute top-1 right-1">${validate_component(ChartJSWizard, "ChartJSWizard").$$render(
      $$result,
      { value: componentInput.value },
      {
        value: ($$value) => {
          componentInput.value = $$value;
          $$settled = false;
        }
      },
      {
        trigger: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              color: "light",
              size: "xs2",
              nonCaptureEvent: true
            },
            {},
            {
              default: () => {
                return `<div class="flex flex-row items-center gap-2 text-xs font-normal">${validate_component(Settings, "Settings").$$render($$result, { size: 16 }, {}, {})}</div>`;
              }
            }
          )}`;
        }
      }
    )}</div></div></div>` : `${fieldType === "ag-chart" ? `<div class="flex flex-row rounded-md bg-surface items-center h-full"><div class="relative w-full"><input class="text-xs px-2 border-y w-full flex flex-row items-center border-r rounded-r-md h-8" placeholder="Dataset name"${add_attribute("value", componentInput.value.name, 0)}> <div class="absolute top-1 right-1">${validate_component(AgChartWizard, "AgChartWizard").$$render(
      $$result,
      { value: componentInput.value },
      {
        value: ($$value) => {
          componentInput.value = $$value;
          $$settled = false;
        }
      },
      {
        trigger: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              color: "light",
              size: "xs2",
              nonCaptureEvent: true
            },
            {},
            {
              default: () => {
                return `<div class="flex flex-row items-center gap-2 text-xs font-normal">${validate_component(Settings, "Settings").$$render($$result, { size: 16 }, {}, {})}</div>`;
              }
            }
          )}`;
        }
      }
    )}</div></div></div>` : `${fieldType === "number-tuple" ? `<div class="flex flex-row rounded-md bg-surface items-center h-full"><div class="relative w-full flex flex-row gap-2">${validate_component(Label, "Label").$$render($$result, { label: "Y Low" }, {}, {
      default: () => {
        return `<input class="text-xs px-2 border-y w-full flex flex-row items-center border-r rounded-r-md h-8" type="number"${add_attribute("value", componentInput.value[0], 0)}>`;
      }
    })} ${validate_component(Label, "Label").$$render($$result, { label: "Y High" }, {}, {
      default: () => {
        return `<input class="text-xs px-2 border-y w-full flex flex-row items-center border-r rounded-r-md h-8" type="number"${add_attribute("value", componentInput.value[1], 0)}>`;
      }
    })}</div></div>` : `${fieldType === "app-path" ? `${validate_component(AppPicker, "AppPicker").$$render(
      $$result,
      { value: componentInput.value },
      {
        value: ($$value) => {
          componentInput.value = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `<div class="flex gap-1 relative w-full"><textarea rows="1"${add_attribute("placeholder", placeholder ?? "Static value", 0)} class="!pr-12">${escape(componentInput.value || "")}</textarea></div>`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const UploadInputEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { componentInput } = $$props;
  let { fileUpload } = $$props;
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.fileUpload === void 0 && $$bindings.fileUpload && fileUpload !== void 0) $$bindings.fileUpload(fileUpload);
  return `${validate_component(FileInput, "FileInput").$$render(
    $$result,
    {
      accept: fileUpload?.accept,
      multiple: fileUpload?.multiple,
      convertTo: fileUpload?.convertTo,
      iconSize: 24,
      class: "text-sm py-4"
    },
    {},
    {
      "selected-title": () => {
        return ` <span></span>`;
      }
    }
  )}`;
});
async function inferDeps(code, worldOutputs, componentInput, app) {
  const outputs = await parseOutputs(code);
  if (outputs && componentInput) {
    const noutputs = outputs.filter(
      ([componentId, id]) => componentId == "row" || componentId == "iter" || componentId == "group" || componentId == "file" || id in (worldOutputs[componentId] ?? {})
    ).map(([componentId, id]) => ({
      componentId,
      id
    }));
    if (!deepEqual(noutputs, componentInput.connections)) {
      componentInput.connections = noutputs;
      app.update((old) => old);
    }
  }
}
const EvalV2InputEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let extraLib;
  let $worldStore, $$unsubscribe_worldStore;
  let $state, $$unsubscribe_state;
  let $$unsubscribe_evalPreview;
  let { componentInput } = $$props;
  let { id } = $$props;
  let { field } = $$props;
  let { fixedOverflowWidgets = true } = $$props;
  let { acceptSelf = false } = $$props;
  let { recomputeOnInputChanged = true } = $$props;
  let { showOnDemandOnlyToggle = false } = $$props;
  let { securedContext = false } = $$props;
  const { onchange, worldStore, state, app } = getContext("AppViewerContext");
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  const { evalPreview } = getContext("AppEditorContext");
  $$unsubscribe_evalPreview = subscribe(evalPreview, (value) => value);
  let editor;
  function setCode(code) {
    editor?.setCode(code);
  }
  if (componentInput && componentInput.expr && componentInput.expr != "" && componentInput.connections == void 0) {
    inferDepsFromCode(componentInput.expr);
  }
  if (componentInput && componentInput.connections == void 0) {
    componentInput.connections = [];
  }
  function inferDepsFromCode(code) {
    if (componentInput) {
      inferDeps(code, $worldStore.outputsById, componentInput, app);
    }
  }
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.field === void 0 && $$bindings.field && field !== void 0) $$bindings.field(field);
  if ($$props.fixedOverflowWidgets === void 0 && $$bindings.fixedOverflowWidgets && fixedOverflowWidgets !== void 0) $$bindings.fixedOverflowWidgets(fixedOverflowWidgets);
  if ($$props.acceptSelf === void 0 && $$bindings.acceptSelf && acceptSelf !== void 0) $$bindings.acceptSelf(acceptSelf);
  if ($$props.recomputeOnInputChanged === void 0 && $$bindings.recomputeOnInputChanged && recomputeOnInputChanged !== void 0) $$bindings.recomputeOnInputChanged(recomputeOnInputChanged);
  if ($$props.showOnDemandOnlyToggle === void 0 && $$bindings.showOnDemandOnlyToggle && showOnDemandOnlyToggle !== void 0) $$bindings.showOnDemandOnlyToggle(showOnDemandOnlyToggle);
  if ($$props.securedContext === void 0 && $$bindings.securedContext && securedContext !== void 0) $$bindings.securedContext(securedContext);
  if ($$props.setCode === void 0 && $$bindings.setCode && setCode !== void 0) $$bindings.setCode(setCode);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    extraLib = componentInput?.expr && $worldStore ? buildExtraLib($worldStore?.outputsById ?? {}, acceptSelf ? "" : id, $state, false) : void 0;
    $$rendered = `${componentInput?.type === "evalv2" ? `${``} <div class="border relative">${`${validate_component(SimpleEditor, "SimpleEditor").$$render(
      $$result,
      {
        small: true,
        lang: "javascript",
        shouldBindKey: false,
        extraLib,
        autoHeight: true,
        fixedOverflowWidgets,
        this: editor,
        code: componentInput.expr
      },
      {
        this: ($$value) => {
          editor = $$value;
          $$settled = false;
        },
        code: ($$value) => {
          componentInput.expr = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${securedContext && componentInput?.expr?.match(ctxRegex) ? `<div class="border bg-surface absolute top-0.5 right-8 p-0.5">${validate_component(Popover, "Popover").$$render($$result, { notClickable: true }, {}, {
      text: () => {
        return `This context variable is securely provided by the backend and cannot be altered by
							users
						`;
      },
      default: () => {
        return `${validate_component(Shield, "Shield").$$render($$result, { size: 12 }, {}, {})}`;
      }
    })}</div>` : ``} <button class="border bg-surface absolute top-0.5 right-2 p-0.5">${validate_component(Maximize_2, "Maximize2").$$render($$result, { size: 12 }, {}, {})}</button> ${``}`}</div>  ${componentInput?.expr && componentInput.expr != "" && componentInput.expr.trim().startsWith("{") ? `<div class="text-2xs text-red-500"><pre class="font-mono inline">${escape("{...}")}</pre> are not valid js expressions, prefix with
			<pre class="font-mono inline text-2xs">${escape("return ")}</pre>
			or surround with <pre class="font-mono text-2xs inline">${escape("()")}</pre></div>` : ``} ${componentInput.connections?.length > 0 && recomputeOnInputChanged ? `<div class="flex flex-wrap gap-2 items-center">${showOnDemandOnlyToggle ? `${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        size: "xs",
        color: "blue",
        disabled: !recomputeOnInputChanged,
        checked: !componentInput.onDemandOnly
      },
      {},
      {}
    )}` : ``} <div class="text-2xs text-tertiary">${escape(componentInput.onDemandOnly ? "NOT" : "")} Re-evaluated on changes to:</div> <div class="flex flex-wrap gap-1">${each(componentInput.connections, (connection) => {
      return `<span class="inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium border">${escape(connection.componentId + "." + connection.id)}</span>`;
    })}</div></div>` : ``}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_worldStore();
  $$unsubscribe_state();
  $$unsubscribe_evalPreview();
  return $$rendered;
});
const InputsSpecEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_app;
  let $$unsubscribe_connectingInput;
  let { id } = $$props;
  let { componentInput } = $$props;
  let { key } = $$props;
  let { userInputEnabled = false } = $$props;
  let { shouldCapitalize = true } = $$props;
  let { resourceOnly = false } = $$props;
  let { tooltip = void 0 } = $$props;
  let { fieldType } = $$props;
  let { subFieldType } = $$props;
  let { format } = $$props;
  let { selectOptions } = $$props;
  let { fileUpload = void 0 } = $$props;
  let { placeholder } = $$props;
  let { customTitle = void 0 } = $$props;
  let { displayType = false } = $$props;
  let { allowTypeChange = true } = $$props;
  let { shouldFormatExpression = false } = $$props;
  let { fixedOverflowWidgets = true } = $$props;
  let { loading = false } = $$props;
  let { acceptSelf = false } = $$props;
  let { recomputeOnInputChanged = true } = $$props;
  let { showOnDemandOnlyToggle = true } = $$props;
  let { documentationLink = void 0 } = $$props;
  let { markdownTooltip = void 0 } = $$props;
  let { securedContext = false } = $$props;
  const { connectingInput, app } = getContext("AppViewerContext");
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => value);
  $$unsubscribe_app = subscribe(app, (value) => value);
  let evalV2editor;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0) $$bindings.key(key);
  if ($$props.userInputEnabled === void 0 && $$bindings.userInputEnabled && userInputEnabled !== void 0) $$bindings.userInputEnabled(userInputEnabled);
  if ($$props.shouldCapitalize === void 0 && $$bindings.shouldCapitalize && shouldCapitalize !== void 0) $$bindings.shouldCapitalize(shouldCapitalize);
  if ($$props.resourceOnly === void 0 && $$bindings.resourceOnly && resourceOnly !== void 0) $$bindings.resourceOnly(resourceOnly);
  if ($$props.tooltip === void 0 && $$bindings.tooltip && tooltip !== void 0) $$bindings.tooltip(tooltip);
  if ($$props.fieldType === void 0 && $$bindings.fieldType && fieldType !== void 0) $$bindings.fieldType(fieldType);
  if ($$props.subFieldType === void 0 && $$bindings.subFieldType && subFieldType !== void 0) $$bindings.subFieldType(subFieldType);
  if ($$props.format === void 0 && $$bindings.format && format !== void 0) $$bindings.format(format);
  if ($$props.selectOptions === void 0 && $$bindings.selectOptions && selectOptions !== void 0) $$bindings.selectOptions(selectOptions);
  if ($$props.fileUpload === void 0 && $$bindings.fileUpload && fileUpload !== void 0) $$bindings.fileUpload(fileUpload);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.customTitle === void 0 && $$bindings.customTitle && customTitle !== void 0) $$bindings.customTitle(customTitle);
  if ($$props.displayType === void 0 && $$bindings.displayType && displayType !== void 0) $$bindings.displayType(displayType);
  if ($$props.allowTypeChange === void 0 && $$bindings.allowTypeChange && allowTypeChange !== void 0) $$bindings.allowTypeChange(allowTypeChange);
  if ($$props.shouldFormatExpression === void 0 && $$bindings.shouldFormatExpression && shouldFormatExpression !== void 0) $$bindings.shouldFormatExpression(shouldFormatExpression);
  if ($$props.fixedOverflowWidgets === void 0 && $$bindings.fixedOverflowWidgets && fixedOverflowWidgets !== void 0) $$bindings.fixedOverflowWidgets(fixedOverflowWidgets);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
  if ($$props.acceptSelf === void 0 && $$bindings.acceptSelf && acceptSelf !== void 0) $$bindings.acceptSelf(acceptSelf);
  if ($$props.recomputeOnInputChanged === void 0 && $$bindings.recomputeOnInputChanged && recomputeOnInputChanged !== void 0) $$bindings.recomputeOnInputChanged(recomputeOnInputChanged);
  if ($$props.showOnDemandOnlyToggle === void 0 && $$bindings.showOnDemandOnlyToggle && showOnDemandOnlyToggle !== void 0) $$bindings.showOnDemandOnlyToggle(showOnDemandOnlyToggle);
  if ($$props.documentationLink === void 0 && $$bindings.documentationLink && documentationLink !== void 0) $$bindings.documentationLink(documentationLink);
  if ($$props.markdownTooltip === void 0 && $$bindings.markdownTooltip && markdownTooltip !== void 0) $$bindings.markdownTooltip(markdownTooltip);
  if ($$props.securedContext === void 0 && $$bindings.securedContext && securedContext !== void 0) $$bindings.securedContext(securedContext);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (componentInput == void 0) {
        componentInput = { type: "static", value: void 0 };
      }
    }
    $$rendered = `${!(resourceOnly && (fieldType !== "object" || !format?.startsWith("resource-"))) ? `<div${add_attribute("class", classNames("flex gap-1", "flex-col"), 0)}><div class="flex justify-between items-end"><div class="flex flex-row gap-4 items-center"><div class="flex items-center"><span class="!text-2xs font-semibold text-ellipsis text-primary">${escape(customTitle ? customTitle : shouldCapitalize ? capitalize(addWhitespaceBeforeCapitals(key)) : key)}</span> ${loading ? `${validate_component(Loader_2, "Loader2").$$render($$result, { size: 14, class: "animate-spin ml-2" }, {}, {})}` : ``} ${tooltip || markdownTooltip ? `${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        small: true,
        documentationLink,
        markdownTooltip
      },
      {},
      {
        default: () => {
          return `${escape(tooltip)}`;
        }
      }
    )}` : ``}</div> ${displayType ? `<div class="text-xs text-tertiary mr-1">${escape(fieldType === "array" && subFieldType ? `${fieldTypeToTsType(subFieldType)}[]` : fieldTypeToTsType(fieldType))}</div>` : ``}</div> <div${add_attribute("class", classNames("flex gap-x-2 gap-y-1 justify-end items-center"), 0)}>${componentInput?.type && allowTypeChange !== false ? `${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
      $$result,
      {
        class: "h-7",
        selected: componentInput.type
      },
      {
        selected: ($$value) => {
          componentInput.type = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              value: "static",
              icon: Pen,
              iconOnly: true,
              tooltip: "Static"
            },
            {},
            {}
          )} ${userInputEnabled ? `${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              value: "user",
              icon: User,
              iconOnly: true,
              tooltip: "User Input"
            },
            {},
            {}
          )}` : ``} ${fileUpload ? `${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              value: "upload",
              icon: Upload,
              iconOnly: true,
              tooltip: "Upload"
            },
            {},
            {}
          )}` : ``} ${componentInput?.type === "connected" ? `${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              value: "connected",
              icon: Plug_2,
              iconOnly: true,
              tooltip: "Connect"
            },
            {},
            {}
          )}` : ``} ${componentInput?.type === "eval" ? `${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              value: "eval",
              icon: Function_square,
              iconOnly: true,
              tooltip: "Eval Legacy"
            },
            {},
            {}
          )}` : ``} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              value: "evalv2",
              icon: Function_square,
              iconOnly: true,
              tooltip: "Eval"
            },
            {},
            {}
          )}`;
        }
      }
    )} <div>${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs",
        variant: "border",
        color: "light",
        title: "Connect",
        id: "schema-plug"
      },
      {},
      {
        default: () => {
          return `${validate_component(Plug, "Plug").$$render($$result, { size: 14 }, {}, {})}`;
        }
      }
    )}</div>` : ``}</div></div> ${componentInput?.type === "connected" ? `${validate_component(ConnectedInputEditor, "ConnectedInputEditor").$$render(
      $$result,
      { componentInput },
      {
        componentInput: ($$value) => {
          componentInput = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${componentInput?.type === "row" ? `${validate_component(RowInputEditor, "RowInputEditor").$$render(
      $$result,
      { componentInput },
      {
        componentInput: ($$value) => {
          componentInput = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${componentInput?.type === "static" ? `<div${add_attribute("class", "w-full flex flex-row-reverse", 0)}>${validate_component(StaticInputEditor, "StaticInputEditor").$$render(
      $$result,
      {
        id,
        fieldType,
        subFieldType,
        selectOptions,
        format,
        placeholder,
        componentInput
      },
      {
        componentInput: ($$value) => {
          componentInput = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : `${componentInput?.type === "eval" ? `${validate_component(EvalInputEditor, "EvalInputEditor").$$render(
      $$result,
      { id, componentInput },
      {
        componentInput: ($$value) => {
          componentInput = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${componentInput?.type === "evalv2" ? `${validate_component(EvalV2InputEditor, "EvalV2InputEditor").$$render(
      $$result,
      {
        acceptSelf,
        field: key,
        id,
        fixedOverflowWidgets,
        recomputeOnInputChanged,
        showOnDemandOnlyToggle,
        securedContext,
        this: evalV2editor,
        componentInput
      },
      {
        this: ($$value) => {
          evalV2editor = $$value;
          $$settled = false;
        },
        componentInput: ($$value) => {
          componentInput = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${componentInput?.type === "upload" ? `${validate_component(UploadInputEditor, "UploadInputEditor").$$render(
      $$result,
      { fileUpload, componentInput },
      {
        componentInput: ($$value) => {
          componentInput = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${componentInput?.type === "user" ? `<span class="text-2xs italic text-tertiary" data-svelte-h="svelte-1bt87jq">Field&#39;s value is set by the user</span>` : ``}`}`}`}`}`}`} ${(componentInput?.type === "evalv2" || componentInput?.type === "connected" || componentInput?.type === "user") && fieldType == "object" && format?.startsWith("resource-") ? `<div class="flex flex-row items-center">${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        size: "xs",
        options: {
          left: "static resource select only",
          right: "resources from users allowed"
        },
        checked: componentInput.allowUserResources
      },
      {
        checked: ($$value) => {
          componentInput.allowUserResources = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
      default: () => {
        return `Apps are executed on behalf of publishers and by default cannot access viewer&#39;s
					resources. If the resource passed here as a reference does not come from a static
					&#39;Resource Select&#39; component (which will be whitelisted by the auto-generated policy), you
					need to toggle this.`;
      }
    })}</div>` : ``}</div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_connectingInput();
  return $$rendered;
});
const InputsSpecsEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let finalInputSpecsConfiguration;
  let { id } = $$props;
  let { inputSpecs } = $$props;
  let { inputSpecsConfiguration = void 0 } = $$props;
  let { userInputEnabled = false } = $$props;
  let { shouldCapitalize = true } = $$props;
  let { resourceOnly = false } = $$props;
  let { displayType = false } = $$props;
  let { deletable = false } = $$props;
  let { acceptSelf = false } = $$props;
  let { recomputeOnInputChanged = true } = $$props;
  let { showOnDemandOnlyToggle = false } = $$props;
  let { securedContext = false } = $$props;
  let { overridenByComponent = [] } = $$props;
  createEventDispatcher();
  const mapping = {
    onSuccess: "On success wizard",
    onError: "On error wizard"
  };
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.inputSpecs === void 0 && $$bindings.inputSpecs && inputSpecs !== void 0) $$bindings.inputSpecs(inputSpecs);
  if ($$props.inputSpecsConfiguration === void 0 && $$bindings.inputSpecsConfiguration && inputSpecsConfiguration !== void 0) $$bindings.inputSpecsConfiguration(inputSpecsConfiguration);
  if ($$props.userInputEnabled === void 0 && $$bindings.userInputEnabled && userInputEnabled !== void 0) $$bindings.userInputEnabled(userInputEnabled);
  if ($$props.shouldCapitalize === void 0 && $$bindings.shouldCapitalize && shouldCapitalize !== void 0) $$bindings.shouldCapitalize(shouldCapitalize);
  if ($$props.resourceOnly === void 0 && $$bindings.resourceOnly && resourceOnly !== void 0) $$bindings.resourceOnly(resourceOnly);
  if ($$props.displayType === void 0 && $$bindings.displayType && displayType !== void 0) $$bindings.displayType(displayType);
  if ($$props.deletable === void 0 && $$bindings.deletable && deletable !== void 0) $$bindings.deletable(deletable);
  if ($$props.acceptSelf === void 0 && $$bindings.acceptSelf && acceptSelf !== void 0) $$bindings.acceptSelf(acceptSelf);
  if ($$props.recomputeOnInputChanged === void 0 && $$bindings.recomputeOnInputChanged && recomputeOnInputChanged !== void 0) $$bindings.recomputeOnInputChanged(recomputeOnInputChanged);
  if ($$props.showOnDemandOnlyToggle === void 0 && $$bindings.showOnDemandOnlyToggle && showOnDemandOnlyToggle !== void 0) $$bindings.showOnDemandOnlyToggle(showOnDemandOnlyToggle);
  if ($$props.securedContext === void 0 && $$bindings.securedContext && securedContext !== void 0) $$bindings.securedContext(securedContext);
  if ($$props.overridenByComponent === void 0 && $$bindings.overridenByComponent && overridenByComponent !== void 0) $$bindings.overridenByComponent(overridenByComponent);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    finalInputSpecsConfiguration = inputSpecsConfiguration ?? inputSpecs;
    $$rendered = `${inputSpecs ? `<div class="w-full flex flex-col gap-4">${each(Object.keys(finalInputSpecsConfiguration), (k) => {
      return `${overridenByComponent.includes(k) ? `<div><span class="text-xs font-semibold truncate text-primary">${escape(k)}</span> <div class="text-tertiary text-xs" data-svelte-h="svelte-1xpdxxe">Managed by the component</div> </div>` : `${finalInputSpecsConfiguration[k]?.type == "oneOf" ? `${validate_component(OneOfInputSpecsEditor, "OneOfInputSpecsEditor").$$render(
        $$result,
        {
          acceptSelf,
          key: mapping[k] ?? k,
          id,
          shouldCapitalize,
          resourceOnly,
          inputSpecsConfiguration: finalInputSpecsConfiguration?.[k]?.["configuration"],
          labels: finalInputSpecsConfiguration?.[k]?.["labels"],
          tooltip: finalInputSpecsConfiguration?.[k]?.["tooltip"],
          recomputeOnInputChanged,
          showOnDemandOnlyToggle,
          oneOf: inputSpecs[k]
        },
        {
          oneOf: ($$value) => {
            inputSpecs[k] = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : (() => {
        let meta = finalInputSpecsConfiguration?.[k];
        return ` ${validate_component(InputsSpecEditor, "InputsSpecEditor").$$render(
          $$result,
          {
            acceptSelf,
            key: k,
            id,
            userInputEnabled,
            shouldCapitalize,
            resourceOnly,
            fieldType: meta?.["fieldType"],
            subFieldType: meta?.["subFieldType"],
            format: meta?.["format"],
            selectOptions: meta?.["selectOptions"],
            tooltip: meta?.["tooltip"],
            fileUpload: meta?.["fileUpload"],
            placeholder: meta?.["placeholder"],
            customTitle: meta?.["customTitle"],
            loading: meta?.["loading"],
            documentationLink: meta?.["documentationLink"],
            markdownTooltip: meta?.["markdownTooltip"],
            allowTypeChange: meta?.["allowTypeChange"],
            displayType,
            recomputeOnInputChanged,
            showOnDemandOnlyToggle,
            securedContext,
            componentInput: inputSpecs[k]
          },
          {
            componentInput: ($$value) => {
              inputSpecs[k] = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${deletable ? `<div class="flex flex-row-reverse -mt-4">${validate_component(CloseButton, "CloseButton").$$render($$result, { noBg: true }, {}, {})} </div>` : ``}`;
      })()}`}`;
    })} ${overridenByComponent.length > 0 ? `${each(overridenByComponent.filter((item) => Object.keys(finalInputSpecsConfiguration).indexOf(item) < 0), (k) => {
      return `<div><span class="text-xs font-semibold truncate text-primary">${escape(k)}</span> <div class="text-tertiary text-xs">Managed by the component
						${validate_component(Tooltip, "Tooltip").$$render($$result, { light: true }, {}, {
        default: () => {
          return `The input is managed by the component and cannot be edited here: It will be injected
							by the component itself.
						`;
        }
      })}</div> </div>`;
    })}` : ``}</div>` : `<div class="text-tertiary text-sm" data-svelte-h="svelte-5nf1ix">No inputs</div>`}`;
  } while (!$$settled);
  return $$rendered;
});
const AppComponentInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { component } = $$props;
  let { resourceOnly = false } = $$props;
  if ($$props.component === void 0 && $$bindings.component && component !== void 0) $$bindings.component(component);
  if ($$props.resourceOnly === void 0 && $$bindings.resourceOnly && resourceOnly !== void 0) $$bindings.resourceOnly(resourceOnly);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${component?.componentInput?.type === "runnable" && Object.keys(component?.componentInput?.fields ?? {}).length > 0 ? `<div class="mb-8 border p-2"><div class="flex justify-between mb-4"><span class="text-sm font-bold">${escape(component.id)}</span> <span class="text-sm font-bold">${escape(components[component.type].name)}</span></div> ${resourceOnly && Object.keys(component.componentInput.fields).filter((fieldKey) => {
      if (component?.componentInput?.type === "runnable") {
        const fields = component.componentInput?.fields;
        const field = fields[fieldKey];
        return field.fieldType === "object" && field.format?.startsWith("resource-");
      }
      return false;
    }).length === 0 ? `<span class="text-sm text-secondary" data-svelte-h="svelte-nxqhxy">No resource input</span>` : `${validate_component(InputsSpecsEditor, "InputsSpecsEditor").$$render(
      $$result,
      {
        id: component.id,
        shouldCapitalize: false,
        userInputEnabled: component.type === "formcomponent" || component.type === "formbuttoncomponent",
        resourceOnly,
        inputSpecs: component.componentInput.fields
      },
      {
        inputSpecs: ($$value) => {
          component.componentInput.fields = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}</div>` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const AppInputs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  const { app } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  let resourceOnly = true;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Alert, "Alert").$$render($$result, { type: "info", title: "Configurations" }, {}, {
      default: () => {
        return `In order to properly configure the app, you need to fill in the inputs below.`;
      }
    })} <div class="mt-2 flex flex-row-reverse">${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        options: { right: "Resource only" },
        checked: resourceOnly
      },
      {
        checked: ($$value) => {
          resourceOnly = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="gap-4 flex flex-col pt-4">${each(allItems($app.grid, $app.subgrids), (gridItem) => {
      return `${gridItem?.data?.type === "tablecomponent" ? `<div>${validate_component(AppComponentInput, "AppComponentInput").$$render(
        $$result,
        { resourceOnly, component: gridItem.data },
        {
          component: ($$value) => {
            gridItem.data = $$value;
            $$settled = false;
          }
        },
        {}
      )} <div class="ml-4 mt-4">${each(gridItem.data.actionButtons, (actionButton) => {
        return `${validate_component(AppComponentInput, "AppComponentInput").$$render(
          $$result,
          {
            resourceOnly,
            component: actionButton.data
          },
          {
            component: ($$value) => {
              actionButton.data = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      })}</div> </div>` : `${gridItem?.data?.type === "aggridcomponent" || gridItem?.data?.type === "aggridcomponentee" || gridItem?.data?.type === "dbexplorercomponent" || gridItem?.data?.type === "aggridinfinitecomponent" || gridItem?.data?.type === "aggridinfinitecomponentee" ? `<div>${validate_component(AppComponentInput, "AppComponentInput").$$render(
        $$result,
        { resourceOnly, component: gridItem.data },
        {
          component: ($$value) => {
            gridItem.data = $$value;
            $$settled = false;
          }
        },
        {}
      )} <div class="ml-4 mt-4">${Array.isArray(gridItem.data.actions) ? `${each(gridItem.data.actions, (actionButton) => {
        return `${validate_component(AppComponentInput, "AppComponentInput").$$render(
          $$result,
          {
            resourceOnly,
            component: actionButton.data
          },
          {
            component: ($$value) => {
              actionButton.data = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      })}` : ``}</div> </div>` : `${validate_component(AppComponentInput, "AppComponentInput").$$render(
        $$result,
        { resourceOnly, component: gridItem.data },
        {
          component: ($$value) => {
            gridItem.data = $$value;
            $$settled = false;
          }
        },
        {}
      )}`}`}`;
    })}</div> ${$app?.hiddenInlineScripts?.length > 0 ? `<div class="font-bold text-lg" data-svelte-h="svelte-1dffkmf">Background runnable inputs</div> <div class="gap-4 flex flex-col pt-4">${each($app?.hiddenInlineScripts ?? [], (script, index) => {
      return `<div class="border p-2"><div class="text-sm font-bold">${escape(script.name)}</div> ${resourceOnly && Object.keys(script.fields).filter((fieldKey) => {
        const fields = script.fields;
        const field = fields[fieldKey];
        return field.fieldType === "object" && field.format?.startsWith("resource-");
      }).length === 0 ? `<span class="text-sm text-secondary" data-svelte-h="svelte-nxqhxy">No resource input</span>` : `${validate_component(InputsSpecsEditor, "InputsSpecsEditor").$$render(
        $$result,
        {
          id: BG_PREFIX + index,
          shouldCapitalize: false,
          userInputEnabled: false,
          resourceOnly,
          inputSpecs: script.fields
        },
        {
          inputSpecs: ($$value) => {
            script.fields = $$value;
            $$settled = false;
          }
        },
        {}
      )}`} </div>`;
    })}</div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_app();
  return $$rendered;
});
const PreviewToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $mode, $$unsubscribe_mode;
  let { loading = false } = $$props;
  const { mode, jobs, jobsById } = getContext("AppViewerContext");
  $$unsubscribe_mode = subscribe(mode, (value) => $mode = value);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
      $$result,
      { class: "h-[30px]", selected: $mode },
      {
        selected: ($$value) => {
          $mode = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              label: "Editor",
              value: "dnd",
              icon: Pen,
              disabled: loading,
              iconProps: { size: 16 },
              class: "gap-2"
            },
            {},
            {}
          )} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              label: "Preview",
              value: "preview",
              icon: Eye,
              tooltip: "Preview mode",
              disabled: loading,
              id: "app-editor-preview-toggle",
              iconProps: { size: 16 },
              class: "gap-2"
            },
            {},
            {}
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_mode();
  return $$rendered;
});
const AppTutorial = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $selectedComponent, $$unsubscribe_selectedComponent;
  let $focusedGrid, $$unsubscribe_focusedGrid;
  let $connectingInput, $$unsubscribe_connectingInput;
  let { name } = $$props;
  let { index } = $$props;
  let tutorial = void 0;
  const { app, selectedComponent, focusedGrid, connectingInput } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => $selectedComponent = value);
  $$unsubscribe_focusedGrid = subscribe(focusedGrid, (value) => $focusedGrid = value);
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => $connectingInput = value);
  const { history } = getContext("AppEditorContext");
  function runTutorial() {
    tutorial?.runTutorial();
  }
  function addComponent(appComponentType) {
    push(history, $app);
    const id = insertNewGridItem($app, appComponentFromType(appComponentType), $focusedGrid);
    set_store_value(selectedComponent, $selectedComponent = [id], $selectedComponent);
    app.set($app);
  }
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
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
        index,
        name,
        tainted: isAppTainted($app),
        getSteps: (driver) => {
          const steps = [
            {
              popover: {
                title: "App editor tutorial",
                description: "This tutorial will show you how to use the App editor, add components, background scripts and connect them.",
                onNextClick: () => {
                  addComponent("textinputcomponent");
                  setTimeout(() => {
                    clickButtonBySelector("#app-editor-component-library-tab");
                  });
                  setTimeout(() => {
                    driver.moveNext();
                  });
                }
              }
            },
            {
              element: "#app-editor-component-list",
              popover: {
                title: "Components panel",
                description: "This is the components panel. Here you can add components to your app. Components are the building blocks of your app. You can add as many components as you want."
              }
            },
            {
              element: "#displaycomponent",
              popover: {
                title: "Adding a component",
                description: "Click on a component to add it to your app. Here we will add a display component.",
                onNextClick: () => {
                  if (!$selectedComponent?.includes("e")) {
                    addComponent("displaycomponent");
                  }
                  setTimeout(() => {
                    driver.moveNext();
                  });
                }
              }
            },
            {
              element: ".wm-app-viewer",
              popover: {
                title: "App canvas",
                description: "In the canvas, you can move components around, resize them, and organize them in grids. In this example, we already added a text input and a display component.",
                onNextClick: () => {
                  driver.moveNext();
                }
              }
            },
            {
              element: "#component-input",
              popover: {
                title: "Component input",
                description: "They are several ways to set the input of a component. It can be static, the result of a JS expression, connected to the output of another component, or the result of a inline runnable. Here we will create an inline runnable that will convert the text to uppercase.",
                onNextClick: () => {
                  clickFirstButtonBySelector("#component-input");
                  setTimeout(() => {
                    driver.moveNext();
                  });
                }
              }
            },
            {
              element: "#data-source-compute",
              popover: {
                title: "Compute",
                description: "Click on the compute button to create a new inline runnable.",
                onNextClick: () => {
                  clickFirstButtonBySelector("#data-source-compute");
                  setTimeout(() => {
                    driver.moveNext();
                  });
                }
              }
            },
            {
              element: "#app-editor-create-inline-script",
              popover: {
                title: "Create an inline script",
                description: "Let's create an inline script.",
                onNextClick: () => {
                  clickButtonBySelector("#app-editor-create-inline-script");
                  setTimeout(() => {
                    driver.moveNext();
                  });
                }
              }
            },
            {
              element: "#app-editor-empty-runnable",
              popover: {
                title: "Choose a language",
                description: "You can choose the language of your runnable. They are two type of runnables: frontend and backend."
              }
            },
            {
              element: "#app-editor-backend-runnables",
              popover: {
                title: "Backend runnables",
                description: "Backend runnables are scripts that are executed on the server. They can be used to perform tasks that are not possible to be performed on the client. For example, you can use backend runnables to send emails, perform database operations, etc."
              }
            },
            {
              element: "#app-editor-frontend-runnables",
              popover: {
                title: "Frontend runnables",
                description: "Frontend scripts are executed in the browser and can manipulate the app context directly. You can also interact with components using component controls."
              }
            },
            {
              element: "#create-deno-script",
              popover: {
                title: "Create a deno script",
                description: "Let's create a simple deno script. For the sake of this tutorial, we will create a script that converts the text to uppercase.",
                onNextClick: () => {
                  clickButtonBySelector("#create-deno-script");
                  setTimeout(() => {
                    if ($selectedComponent?.[0]) {
                      updateInlineRunnableCode($app, $selectedComponent[0], `export async function main(x: string) {
  return x?.toLocaleUpperCase();
}
`);
                    }
                    driver.moveNext();
                  });
                }
              }
            },
            {
              element: "#schema-plug",
              popover: {
                title: "Connect the function input",
                description: "The function we created has an string input 'x'. We can connect the output of the text component to it.",
                onNextClick: () => {
                  clickButtonBySelector("#schema-plug");
                  setTimeout(() => {
                    driver.moveNext();
                  });
                }
              }
            },
            {
              element: "#connect-output-d",
              popover: {
                title: "Select the output",
                description: " ",
                onNextClick: () => {
                  $connectingInput.opened = false;
                  $connectingInput.input = void 0;
                  setTimeout(() => {
                    driver.moveNext();
                  });
                },
                onPopoverRender: (popover, opts) => {
                  const wrapper = document.createElement("div");
                  wrapper.classList.add("flex", "flex-col", "gap-2", "w-full", "items-start");
                  const p1 = document.createElement("p");
                  p1.innerText = "You can now select the output in the output menu. Click on the little red button to open the menu.";
                  const id = document.createElement("div");
                  id.innerHTML = `<button class="bg-red-500/70 border border-red-600 px-1 py-0.5" title="Outputs" aria-label="Open output"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-icon lucide lucide-plug-2 "><path d="M9 2v6"></path><path d="M15 2v6"></path><path d="M12 17v5"></path><path d="M5 8h14"></path><path d="M6 11V8h12v3a6 6 0 1 1-12 0v0Z"></path></svg></button>`;
                  const p2 = document.createElement("p");
                  p2.innerText = 'Once opened, you can select the output you want to connect to. Here we will connect the result output of the text component to the input "x" of the inline runnable.';
                  const objectViewer = document.createElement("div");
                  objectViewer.innerHTML = `<div class="rounded-lg shadow-md border p-4 bg-surface"><span class="s-UNyBDXJ1E286">  <ul class="w-full pl-2 border-none s-UNyBDXJ1E286"><li class="s-UNyBDXJ1E286"><button class="whitespace-nowrap s-UNyBDXJ1E286"><span class="key border  font-semibold rounded px-1 hover:bg-surface-hover text-2xs text-secondary s-UNyBDXJ1E286">result</span> :</button> <button class="val  rounded px-1 hover:bg-blue-100 string s-UNyBDXJ1E286"><span title="" class="text-2xs s-UNyBDXJ1E286">""</span></button></li> </ul> </span> <span class="border border-blue-600 rounded px-1 cursor-pointer hover:bg-gray-200 s-UNyBDXJ1E286 hidden">{...}</span> </div>`;
                  wrapper.appendChild(p1);
                  wrapper.appendChild(id);
                  wrapper.appendChild(p2);
                  wrapper.appendChild(objectViewer);
                  popover.description.appendChild(wrapper);
                  tutorial?.renderControls(opts);
                }
              }
            },
            {
              element: ".wm-app-viewer",
              popover: {
                title: "Let's test out the app !",
                description: "We can now type in the text input and see the result in the display component",
                onNextClick: () => {
                  connectInlineRunnableInputToComponentOutput($app, "e", "x", "d", "result", "integer");
                  $app = $app;
                  updateProgress(7);
                  setTimeout(() => {
                    driver.moveNext();
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
  $$unsubscribe_app();
  $$unsubscribe_selectedComponent();
  $$unsubscribe_focusedGrid();
  $$unsubscribe_connectingInput();
  return $$rendered;
});
const BackgroundRunnablesTutorial = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { index } = $$props;
  let tutorial = void 0;
  function runTutorial(skipStepsCount = void 0) {
    tutorial?.runTutorial({ skipStepsCount });
  }
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
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
        index,
        name,
        getSteps: (driver, options) => {
          const steps = [
            {
              element: "#app-editor-runnable-panel",
              popover: {
                title: "Runnable panel",
                description: "This is the runnable panel. Here you can add runnables to your app. Runnables are scripts that can be executed in the background. You can add as many runnables as you want."
              }
            },
            {
              element: "#create-background-runnable",
              popover: {
                title: "Create a runnable",
                description: "Click here to create a runnable. Runnables are scripts that can be executed in the background. You can add as many runnables as you want.",
                onNextClick: () => {
                  clickButtonBySelector("#create-background-runnable");
                  setTimeout(() => {
                    driver.moveNext();
                  });
                }
              }
            },
            {
              element: "#app-editor-empty-runnable",
              popover: {
                title: "Empty runnable panel",
                description: "This is the empty runnable panel. Here you can add runnables to your app. Runnables are scripts that can be executed in the background. You can add as many runnables as you want. You can also select a script or a flow from your workspace or the Hub."
              }
            },
            {
              element: "#app-editor-backend-runnables",
              popover: {
                title: "Backend runnables",
                description: "Backend runnables are scripts that are executed on the server. They can be used to perform tasks that are not possible to be performed on the client. For example, you can use backend runnables to send emails, perform database operations, etc."
              }
            },
            {
              element: "#app-editor-frontend-runnables",
              popover: {
                title: "Frontend runnables",
                description: "Frontend scripts are executed in the browser and can manipulate the app context directly. You can also interact with components using component controls.",
                onNextClick: () => {
                  setTimeout(() => {
                    driver.moveNext();
                    updateProgress(5);
                  });
                }
              }
            }
          ];
          if (options?.skipStepsCount) {
            steps.splice(1, options.skipStepsCount);
          }
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
  return $$rendered;
});
const ConnectionTutorial = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $selectedComponent, $$unsubscribe_selectedComponent;
  let $focusedGrid, $$unsubscribe_focusedGrid;
  let { name } = $$props;
  let { index } = $$props;
  let tutorial = void 0;
  const { app, selectedComponent, focusedGrid } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => $selectedComponent = value);
  $$unsubscribe_focusedGrid = subscribe(focusedGrid, (value) => $focusedGrid = value);
  const { history } = getContext("AppEditorContext");
  function runTutorial() {
    tutorial?.runTutorial();
  }
  function addComponent() {
    push(history, $app);
    const id = insertNewGridItem($app, appComponentFromType("textcomponent"), $focusedGrid);
    set_store_value(selectedComponent, $selectedComponent = [id], $selectedComponent);
    app.set($app);
  }
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
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
        index,
        name,
        getSteps: (driver) => [
          {
            popover: {
              title: "Connection tutorial",
              description: "We will connect the input of a text component to an output.",
              onNextClick: () => {
                addComponent();
                setTimeout(() => {
                  driver.moveNext();
                });
              }
            }
          },
          {
            element: `#component-input`,
            popover: {
              title: "Data source",
              description: "Here we can set the data source of the text component: it can be static, the result of an evaluation or the result of script or flow. We are going to connect the data source to an output.",
              onNextClick: () => {
                clickButtonBySelector("#component-input");
                setTimeout(() => {
                  driver.moveNext();
                });
              }
            }
          },
          {
            element: "#plug",
            popover: {
              title: "Connect the text component",
              description: "Click on the plug icon to connect the text component",
              onNextClick: () => {
                clickButtonBySelector("#plug");
                setTimeout(() => {
                  driver.moveNext();
                });
              }
            }
          },
          {
            element: "#output-ctx",
            popover: {
              title: "Select the output",
              description: "You can now select the output in the output menu. Let's select your email in the app context",
              onNextClick: () => {
                clickButtonBySelector("#output-ctx");
                setTimeout(() => {
                  driver.moveNext();
                });
              }
            }
          },
          {
            element: ".val",
            popover: {
              title: "Click on the output",
              description: "Simply click on the output to connect it",
              onNextClick: () => {
                clickButtonBySelector(".val");
                setTimeout(() => {
                  driver.moveNext();
                });
              }
            }
          },
          {
            popover: {
              title: "Connection done",
              description: "You can now see the email output connected to the text component input",
              onNextClick: () => {
                updateProgress(6);
                setTimeout(() => {
                  driver.moveNext();
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
  $$unsubscribe_app();
  $$unsubscribe_selectedComponent();
  $$unsubscribe_focusedGrid();
  return $$rendered;
});
const AppTutorials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let backgroundRunnablesTutorial = void 0;
  let connectionTutorial = void 0;
  let appTutorial = void 0;
  function runTutorialById(id, options) {
    if (id === "backgroundrunnables") {
      backgroundRunnablesTutorial?.runTutorial(options?.skipStepsCount);
    } else if (id === "connection") {
      connectionTutorial?.runTutorial();
    } else if (id === "simpleapptutorial") {
      appTutorial?.runTutorial();
    }
  }
  if ($$props.runTutorialById === void 0 && $$bindings.runTutorialById && runTutorialById !== void 0) $$bindings.runTutorialById(runTutorialById);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(AppTutorial, "AppTutorial").$$render(
      $$result,
      {
        index: 7,
        name: "simpleapptutorial",
        this: appTutorial
      },
      {
        this: ($$value) => {
          appTutorial = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(BackgroundRunnablesTutorial, "BackgroundRunnablesTutorial").$$render(
      $$result,
      {
        index: 5,
        name: "backgroundrunnables",
        this: backgroundRunnablesTutorial
      },
      {
        this: ($$value) => {
          backgroundRunnablesTutorial = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ConnectionTutorial, "ConnectionTutorial").$$render(
      $$result,
      {
        index: 6,
        name: "connection",
        this: connectionTutorial
      },
      {
        this: ($$value) => {
          connectionTutorial = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const css$3 = {
  code: ".driver-popover-title{--tw-text-opacity:1;color:rgb(var(--color-text-primary)/var(--tw-text-opacity));font-size:1rem;line-height:1.5rem}.driver-popover-description{--tw-text-opacity:1;color:rgb(var(--color-text-secondary)/var(--tw-text-opacity));font-size:.875rem;line-height:1.25rem}.driver-popover{--tw-bg-opacity:1;background-color:rgb(var(--color-surface)/var(--tw-bg-opacity));max-width:42rem;padding:1.5rem}",
  map: null
};
const AppEditorTutorial = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_tutorialsToDo;
  let $$unsubscribe_ignoredTutorials;
  let $$unsubscribe_app;
  $$unsubscribe_tutorialsToDo = subscribe(tutorialsToDo, (value) => value);
  $$unsubscribe_ignoredTutorials = subscribe(ignoredTutorials, (value) => value);
  let appTutorials = void 0;
  let targetTutorial = void 0;
  const { app } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => value);
  function toggleTutorial() {
    const urlParams = new URLSearchParams(window.location.search);
    const tutorial = urlParams.get("tutorial");
    if (tutorial === "simpleapptutorial") {
      appTutorials?.runTutorialById("simpleapptutorial");
    }
  }
  if ($$props.toggleTutorial === void 0 && $$bindings.toggleTutorial && toggleTutorial !== void 0) $$bindings.toggleTutorial(toggleTutorial);
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(ButtonDropdown, "ButtonDropdown").$$render($$result, { hasPadding: false }, {}, {
      items: () => {
        return `${validate_component(TutorialItem, "TutorialItem").$$render($$result, { label: "App tutorial", index: 7 }, {}, {})} ${validate_component(TutorialItem, "TutorialItem").$$render($$result, { label: "Background runnables", index: 5 }, {}, {})} ${validate_component(TutorialItem, "TutorialItem").$$render($$result, { label: "Connection", index: 6 }, {}, {})} <div class="border-t border-surface-hover"></div> ${validate_component(MenuItem, "MenuItem").$$render($$result, {}, {}, {
          default: () => {
            return `<div${add_attribute("class", classNames("text-primary flex flex-row items-center text-left gap-2 cursor-pointer hover:bg-surface-hover !text-xs font-semibold"), 0)} data-svelte-h="svelte-tvevad">Reset tutorials</div>`;
          }
        })} ${validate_component(MenuItem, "MenuItem").$$render($$result, {}, {}, {
          default: () => {
            return `<div${add_attribute("class", classNames("text-primary flex flex-row items-center text-left gap-2 cursor-pointer hover:bg-surface-hover !text-xs font-semibold"), 0)} data-svelte-h="svelte-phyxnx">Skip tutorials</div>`;
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
            iconOnly: true,
            startIcon: { icon: Book_open }
          },
          {},
          {}
        )}`;
      }
    })} ${validate_component(AppTutorials, "AppTutorials").$$render(
      $$result,
      { this: appTutorials },
      {
        this: ($$value) => {
          appTutorials = $$value;
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
          return `<div class="flex flex-col w-full space-y-4" data-svelte-h="svelte-3729a1"><span>This tutorial can only be run on a new app.</span></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_tutorialsToDo();
  $$unsubscribe_ignoredTutorials();
  $$unsubscribe_app();
  return $$rendered;
});
const AppTimeline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $jobsById, $$unsubscribe_jobsById;
  let $jobs, $$unsubscribe_jobs;
  const { jobs, jobsById } = getContext("AppViewerContext");
  $$unsubscribe_jobs = subscribe(jobs, (value) => $jobs = value);
  $$unsubscribe_jobsById = subscribe(jobsById, (value) => $jobsById = value);
  let min = void 0;
  let max = void 0;
  let total = void 0;
  let debounced = debounce(() => computeItems($jobs), 30);
  let items = {};
  function reset() {
    min = void 0;
    max = void 0;
  }
  function computeItems(jobs2) {
    let nmin = void 0;
    let nmax = void 0;
    let isStillRunning = false;
    let nitems = {};
    jobs2.forEach((k) => {
      let v = $jobsById[k];
      if (v.created_at) {
        if (!nmin) {
          nmin = v.created_at;
        } else {
          nmin = Math.min(nmin, v.created_at);
        }
      }
      if (v.duration_ms == void 0) {
        isStillRunning = true;
      }
      if (!isStillRunning) {
        if (v.started_at && v.duration_ms) {
          let lmax = v.started_at + v.duration_ms;
          if (!nmax) {
            nmax = lmax;
          } else {
            nmax = Math.max(nmax, lmax);
          }
        }
      }
      if (!nitems[v.component]) {
        nitems[v.component] = [];
      }
      nitems[v.component].push({
        created_at: v.created_at,
        duration_ms: v.duration_ms,
        started_at: v.started_at,
        id: v.job
      });
    });
    Object.values(nitems).forEach((v) => {
      v.sort((x, y) => {
        if (!x.created_at) {
          return -1;
        } else if (!y.created_at) {
          return 1;
        } else {
          return x.created_at - y.created_at;
        }
      });
    });
    min = nmin;
    max = isStillRunning ? void 0 : nmax;
    if (max && min) {
      total = max - min;
    }
    items = nitems;
  }
  let now = Date.now();
  let interval = setInterval(
    (x) => {
      if (!max) {
        now = Date.now();
      }
      if (min && (!max || total == void 0)) {
        total = max ? max - min : Math.max(now - min, 2e3);
      }
    },
    30
  );
  onDestroy(() => {
    interval && clearInterval(interval);
  });
  if ($$props.reset === void 0 && $$bindings.reset && reset !== void 0) $$bindings.reset(reset);
  $jobs && $jobsById && debounced();
  $$unsubscribe_jobsById();
  $$unsubscribe_jobs();
  return ` <div class="divide-y"><div class="flex flex-row-reverse mb-2 items-center text-sm text-secondary px-2" data-svelte-h="svelte-1am1cpr"><div class="flex gap-4 items-center"><div class="flex gap-2 items-center text-xs"><div>Waiting for executor</div> <div class="h-4 w-4 bg-gray-300 dark:bg-gray-600 rounded"></div></div> <div class="flex gap-2 items-center text-xs"><div>Execution</div> <div class="h-4 w-4 bg-blue-500/90 rounded"></div></div></div></div> ${each(Object.entries(items), ([k, v]) => {
    return `<div class="px-2 py-2 grid grid-cols-12 w-full"><div class="col-span-2">${escape(k)}</div> <div class="col-span-10 pt-1 px-2 flex min-h-6 w-full">${min && total ? ` <div class="flex flex-col gap-2 w-full">${each(v ?? [], (b) => {
      let waitingLen = b?.created_at ? b.started_at ? b.started_at - b?.created_at : b.duration_ms ? 0 : now - b?.created_at : 0;
      return ` <div class="flex w-full">${validate_component(TimelineBar, "TimelineBar").$$render(
        $$result,
        {
          position: "left",
          id: b?.id,
          total,
          min,
          gray: true,
          started_at: b.created_at,
          len: waitingLen < 100 ? 0 : waitingLen - 100,
          running: b?.started_at == void 0
        },
        {},
        {}
      )} ${b.started_at ? `${validate_component(TimelineBar, "TimelineBar").$$render(
        $$result,
        {
          position: waitingLen < 100 ? "center" : "right",
          id: b?.id,
          total,
          min,
          concat: true,
          started_at: b.started_at,
          len: b.started_at ? b?.duration_ms ?? now - b?.started_at : 0,
          running: b?.duration_ms == void 0
        },
        {},
        {}
      )}` : ``} </div>`;
    })}</div> ` : ``}</div></div>`;
  })}</div>`;
});
const AppReportsDrawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  let { appPath } = $$props;
  let { open: open2 = false } = $$props;
  let appReportingEnabled = false;
  let appReportingStartupDuration = 5;
  let appReportingSchedule = {
    cron: "0 0 12 * *",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  };
  let selectedTab = $enterpriseLicense ? "slack" : "custom";
  let screenshotKind = "pdf";
  let customPath = void 0;
  let customPathSchema = {};
  let args = {};
  let areArgsValid = true;
  let isSlackConnectedWorkspace = false;
  async function getWorspaceSlackSetting() {
    const settings = await WorkspaceService.getSettings({ workspace: $workspaceStore });
    if (settings.slack_name) {
      isSlackConnectedWorkspace = true;
    } else {
      isSlackConnectedWorkspace = false;
    }
  }
  getWorspaceSlackSetting();
  async function getAppReportingInfo() {
    const flowPath = appPath + "_reports";
    try {
      const flow = await FlowService.getFlowByPath({
        workspace: $workspaceStore,
        path: flowPath
      });
      const schedule = await ScheduleService.getSchedule({
        workspace: $workspaceStore,
        path: flowPath
      });
      appReportingSchedule = {
        cron: schedule.schedule,
        timezone: schedule.timezone
      };
      appReportingStartupDuration = schedule.args?.startup_duration ?? appReportingStartupDuration;
      screenshotKind = schedule.args?.kind ?? screenshotKind;
      args = schedule.args ? Object.fromEntries(Object.entries(schedule.args).filter(([key, _]) => key !== "app_path" && key !== "startup_duration" && key !== "kind")) : {};
      selectedTab = flow.value.modules[1]?.value.type === "script" ? flow.value.modules[1].value.path === notificationScripts.email.path ? "email" : flow.value.modules[1].value.path === notificationScripts.slack.path ? "slack" : flow.value.modules[1].value.path === notificationScripts.discord.path ? "discord" : "custom" : "custom";
      customPath = selectedTab === "custom" && flow.value.modules[1]?.value.type === "script" && !flow.value.modules[1].value.path.startsWith("hub/") ? flow.value.modules[1].value.path : void 0;
      appReportingEnabled = true;
    } catch (err) {
    }
  }
  const notificationScripts = {
    discord: {
      path: "hub/7838/discord",
      schema: {
        type: "object",
        properties: {
          discord_webhook: {
            type: "object",
            format: "resource-discord_webhook",
            properties: {},
            required: [],
            description: ""
          }
        },
        required: ["discord_webhook"]
      }
    },
    slack: {
      path: "hub/7836/slack",
      schema: {
        type: "object",
        properties: { channel: { type: "string", default: "" } },
        required: ["channel"]
      }
    },
    email: {
      path: "hub/7837/smtp",
      schema: {
        type: "object",
        properties: {
          smtp: {
            type: "object",
            format: "resource-smtp",
            properties: {},
            required: [],
            description: ""
          },
          from_email: { type: "string", default: "" },
          to_email: { type: "string", default: "" }
        },
        required: ["smtp", "from_email", "to_email"]
      }
    }
  };
  let testLoading = false;
  let disabled = true;
  if ($$props.appPath === void 0 && $$bindings.appPath && appPath !== void 0) $$bindings.appPath(appPath);
  if ($$props.open === void 0 && $$bindings.open && open2 !== void 0) $$bindings.open(open2);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      customPath ? loadSchemaFromPath(customPath).then((schema) => {
        customPathSchema = schema ? {
          ...schema,
          properties: Object.fromEntries(Object.entries(schema.properties ?? {}).filter(([key, _]) => key !== "screenshot" && key !== "app_path" && key !== "kind"))
        } : {};
      }) : customPathSchema = {};
    }
    appPath && getAppReportingInfo();
    disabled = emptyString(appReportingSchedule.cron) || selectedTab === "custom" && emptyString(customPath) || selectedTab === "slack" && !isSlackConnectedWorkspace || !areArgsValid;
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "800px", open: open2 },
      {
        open: ($$value) => {
          open2 = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render(
            $$result,
            {
              title: "Schedule Reports",
              tooltip: "Send a PDF or PNG preview of any app at a given schedule",
              documentationLink: "https://www.windmill.dev/docs/apps/schedule_reports"
            },
            {},
            {
              actions: () => {
                return `<div class="mr-4 center-center -mt-2">${validate_component(Toggle, "Toggle").$$render(
                  $$result,
                  {
                    checked: appReportingEnabled,
                    options: { right: "enable", left: "disable" },
                    disabled: disabled && !appReportingEnabled
                  },
                  {},
                  {}
                )}</div> ${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    color: "dark",
                    startIcon: { icon: Save },
                    size: "sm",
                    disabled
                  },
                  {},
                  {
                    default: () => {
                      return `${escape(appReportingEnabled ? "Update" : "Save and enable")}`;
                    }
                  }
                )} `;
              },
              default: () => {
                return `<div class="flex flex-col gap-8">${validate_component(Alert, "Alert").$$render(
                  $$result,
                  {
                    type: "info",
                    title: "Scheduled PDF/PNG reports"
                  },
                  {},
                  {
                    default: () => {
                      return `Send a PDF or PNG preview of the app at a given schedule. Enabling this feature will create
				a flow and a schedule in your workspace.
				<br><br>
				For the flow to be executed, you need to set the WORKER_GROUP environment variable of one of
				your workers to &quot;reports&quot; or add the tag &quot;chromium&quot; to one of your worker groups.`;
                    }
                  }
                )} ${validate_component(Section, "Section").$$render($$result, { label: "Reporting schedule" }, {}, {
                  default: () => {
                    return `${validate_component(CronInput, "CronInput").$$render(
                      $$result,
                      {
                        schedule: appReportingSchedule.cron,
                        timezone: appReportingSchedule.timezone
                      },
                      {
                        schedule: ($$value) => {
                          appReportingSchedule.cron = $$value;
                          $$settled = false;
                        },
                        timezone: ($$value) => {
                          appReportingSchedule.timezone = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}`;
                  }
                })} ${validate_component(Section, "Section").$$render(
                  $$result,
                  {
                    label: "Startup duration in seconds",
                    tooltip: "The number of seconds to wait before capturing a preview to ensure that all startup scripts\n		have been executed."
                  },
                  {},
                  {
                    default: () => {
                      return `<div class="w-full pt-2"><input type="number" class="text-sm w-full font-semibold"${add_attribute("value", appReportingStartupDuration, 0)}></div>`;
                    }
                  }
                )} ${validate_component(Section, "Section").$$render($$result, { label: "Screenshot kind" }, {}, {
                  default: () => {
                    return `<div class="w-full pt-2"><select class="text-sm w-full font-semibold"><option value="pdf" data-svelte-h="svelte-4pojam">PDF</option><option value="png" data-svelte-h="svelte-epj37c">PNG</option></select></div>`;
                  }
                })} ${validate_component(Section, "Section").$$render($$result, { label: "Notification" }, {}, {
                  default: () => {
                    return `${validate_component(Tabs, "Tabs").$$render(
                      $$result,
                      { selected: selectedTab },
                      {
                        selected: ($$value) => {
                          selectedTab = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `${!$enterpriseLicense ? `${validate_component(Tab, "Tab").$$render($$result, { value: "custom" }, {}, {
                            default: () => {
                              return `Custom`;
                            }
                          })}` : ``} ${validate_component(Tab, "Tab").$$render(
                            $$result,
                            {
                              value: "slack",
                              disabled: !$enterpriseLicense
                            },
                            {},
                            {
                              default: () => {
                                return `Slack${escape(!$enterpriseLicense ? " (EE only)" : "")}`;
                              }
                            }
                          )} ${validate_component(Tab, "Tab").$$render(
                            $$result,
                            {
                              value: "discord",
                              disabled: !$enterpriseLicense
                            },
                            {},
                            {
                              default: () => {
                                return `Discord${escape(!$enterpriseLicense ? " (EE only)" : "")}`;
                              }
                            }
                          )} ${validate_component(Tab, "Tab").$$render(
                            $$result,
                            {
                              value: "email",
                              disabled: !$enterpriseLicense
                            },
                            {},
                            {
                              default: () => {
                                return `<div class="flex flex-row gap-1 items-center">Email${escape(!$enterpriseLicense ? " (EE only)" : "")}</div>`;
                              }
                            }
                          )} ${$enterpriseLicense ? `${validate_component(Tab, "Tab").$$render($$result, { value: "custom" }, {}, {
                            default: () => {
                              return `Custom`;
                            }
                          })}` : ``}`;
                        }
                      }
                    )} ${selectedTab === "custom" ? `<div class="pt-2">${validate_component(ScriptPicker, "ScriptPicker").$$render(
                      $$result,
                      {
                        initialPath: customPath,
                        allowRefresh: true
                      },
                      {},
                      {}
                    )}</div> <div class="prose text-2xs text-tertiary mt-2" data-svelte-h="svelte-cmm2mt">Pick a script that does whatever with the PDF/PNG report.

						<br>

						The script chosen is passed the parameters \`screenshot: string\`, \`kind: &#39;pdf&#39; | &#39;png&#39;\`,
						\`app_path: string\` where \`screenshot\` is the base64 encoded PDF/PNG report, \`kind\` is
						the type of the screenshot, and \`app_path\` is the path of the app being reported.</div>` : ``} ${selectedTab === "slack" ? `<div class="pt-4">${isSlackConnectedWorkspace ? `${validate_component(Alert, "Alert").$$render(
                      $$result,
                      {
                        type: "info",
                        title: "Will use the Slack resource linked to the workspace"
                      },
                      {},
                      {}
                    )}` : `${validate_component(Alert, "Alert").$$render(
                      $$result,
                      {
                        type: "error",
                        title: "Workspace not connected to Slack"
                      },
                      {},
                      {
                        default: () => {
                          return `<div class="flex flex-row gap-x-1 w-full items-center"><p class="text-clip grow min-w-0" data-svelte-h="svelte-14cob5t">The workspace needs to be connected to Slack to use this feature. You can <a target="_blank" href="${escape(base, true) + "/workspace_settings?tab=slack"}">configure it here</a>.</p> ${validate_component(Button, "Button").$$render(
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
                    )}`}</div>` : ``} <div class="w-full pt-4">${selectedTab !== "custom" || customPath !== void 0 ? `${validate_component(SchemaForm, "SchemaForm").$$render(
                      $$result,
                      {
                        schema: selectedTab !== "custom" ? notificationScripts[selectedTab].schema : customPathSchema,
                        isValid: areArgsValid,
                        args
                      },
                      {
                        isValid: ($$value) => {
                          areArgsValid = $$value;
                          $$settled = false;
                        },
                        args: ($$value) => {
                          args = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}` : ``}</div> ${validate_component(Button, "Button").$$render(
                      $$result,
                      {
                        loading: testLoading,
                        disabled,
                        size: "xs",
                        color: "dark",
                        btnClasses: "w-auto"
                      },
                      {},
                      {
                        default: () => {
                          return `Send test report`;
                        }
                      }
                    )}`;
                  }
                })}</div>`;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_enterpriseLicense();
  return $$rendered;
});
const DebugPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let unintitializedComponents;
  let subgridsErrors;
  let $app, $$unsubscribe_app;
  let $initialized, $$unsubscribe_initialized;
  const { app, initialized } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_initialized = subscribe(initialized, (value) => $initialized = value);
  unintitializedComponents = allItems($app.grid, $app.subgrids).map((x) => x.id).filter((x) => !$initialized.initializedComponents?.includes(x)).sort();
  subgridsErrors = Object.keys($app.subgrids ?? {}).map((x) => {
    const parentId = x.split("-")[0];
    const parent = findGridItem($app, parentId);
    const subgrid = x.replace(`${parentId}-`, "");
    if (subgrid == "-1") {
      return {
        subGridId: x,
        error: "Invalid subgrid index -1 "
      };
    } else if (parent === void 0) {
      return { subGridId: x, error: "Parent not found" };
    } else if (parent?.data?.numberOfSubgrids === void 0) {
      return {
        subGridId: x,
        error: "Parent is not a container"
      };
    }
  }).filter(Boolean);
  $$unsubscribe_app();
  $$unsubscribe_initialized();
  return `<div class="flex flex-col gap-8" style="all:none;">${unintitializedComponents?.length === 0 && subgridsErrors?.length === 0 ? `${validate_component(Alert, "Alert").$$render(
    $$result,
    {
      type: "success",
      title: "No issues found"
    },
    {},
    {
      default: () => {
        return `The app has no subgrid errors or uninitialized components.`;
      }
    }
  )}` : `${validate_component(Alert, "Alert").$$render($$result, { type: "error", title: "Issues found" }, {}, {
    default: () => {
      return `The app has ${escape(unintitializedComponents.length)} uninitialized components and ${escape(subgridsErrors.length)}
			subgrid errors.
			<br>
			Please contact Windmill support for assistance.`;
    }
  })}`} ${unintitializedComponents.length > 0 ? `${validate_component(Section, "Section").$$render($$result, { label: "Uninitialized components" }, {}, {
    default: () => {
      return `<div class="max-w-xl"><div class="text-sm mb-4">There are ${escape(pluralize(unintitializedComponents.length, "uninitialized component"))} in the app.</div> <div class="grid grid-cols-4 border rounded-md overflow-hidden"> <div class="font-semibold bg-gray-100 dark:bg-gray-900 px-2 py-1 text-xs border-b" data-svelte-h="svelte-1p3eb17">Component Id</div> <div class="font-semibold bg-gray-100 dark:bg-gray-900 px-2 py-1 text-xs border-b" data-svelte-h="svelte-1fjaoun">Type</div> <div class="font-semibold bg-gray-100 dark:bg-gray-900 px-2 py-1 text-xs border-b" data-svelte-h="svelte-cv5und">Status</div> <div class="font-semibold bg-gray-100 dark:bg-gray-900 px-2 py-1 text-xs border-b" data-svelte-h="svelte-1p46orm">Action</div>  ${each(unintitializedComponents, (c) => {
        let item = findGridItem($app, c);
        return ` ${!item ? `<div>Item ${escape(c)} not found</div>` : ` <div class="text-xs flex items-center px-2 py-2">${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
          default: () => {
            return `${escape(c)} `;
          }
        })}</div> <div class="text-xs flex items-center px-2 py-2">${validate_component(Badge, "Badge").$$render($$result, { color: "blue" }, {}, {
          default: () => {
            return `${escape(item?.data?.type || "Unknown")} `;
          }
        })}</div> <div class="text-xs flex items-center px-2 py-2">${validate_component(Badge, "Badge").$$render($$result, { color: "red" }, {}, {
          default: () => {
            return `Uninitialized`;
          }
        })}</div> <div class="text-xs flex items-center px-2 py-2">${validate_component(Button, "Button").$$render(
          $$result,
          {
            color: "light",
            startIcon: { icon: Trash },
            size: "xs2"
          },
          {},
          {
            default: () => {
              return `Remove
							`;
            }
          }
        )} </div>`}`;
      })}</div></div>`;
    }
  })}` : ``} ${subgridsErrors.length > 0 ? `${validate_component(Section, "Section").$$render($$result, { label: "Subgrids errors" }, {}, {
    default: () => {
      return `<div class="max-w-xl"><div class="text-sm mb-4">There are
					${escape(pluralize(subgridsErrors.length, "subgrid"))} with errors in the app.</div> <div class="grid grid-cols-3 border rounded-md overflow-hidden"> <div class="font-semibold bg-gray-100 dark:bg-gray-900 px-2 py-1 text-xs border-b" data-svelte-h="svelte-nfy6x4">Subgrid Id</div> <div class="font-semibold bg-gray-100 dark:bg-gray-900 px-2 py-1 text-xs border-b" data-svelte-h="svelte-1ir3pkx">Error</div> <div class="font-semibold bg-gray-100 dark:bg-gray-900 px-2 py-1 text-xs border-b" data-svelte-h="svelte-10miixl">Action</div>  ${each(subgridsErrors, (s) => {
        return ` <div class="text-xs flex items-center px-2 py-2">${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
          default: () => {
            return `${escape(s?.subGridId)} `;
          }
        })}</div> <div class="text-xs flex items-center px-2 py-2">${validate_component(Badge, "Badge").$$render($$result, { color: "red" }, {}, {
          default: () => {
            return `${escape(s?.error)} `;
          }
        })}</div> <div class="text-xs flex items-center px-2 py-2">${validate_component(Button, "Button").$$render(
          $$result,
          {
            color: "light",
            startIcon: { icon: Trash },
            size: "xs2"
          },
          {},
          {
            default: () => {
              return `Remove
							`;
            }
          }
        )} </div>`;
      })}</div></div>`;
    }
  })}` : ``}</div>`;
});
const AppEditorHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hasErrors;
  let $app, $$unsubscribe_app;
  let $summary, $$unsubscribe_summary;
  let $staticExporter, $$unsubscribe_staticExporter;
  let $errorByComponent, $$unsubscribe_errorByComponent;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $page, $$unsubscribe_page;
  let $$unsubscribe_secondaryMenuRightStore;
  let $$unsubscribe_secondaryMenuLeftStore;
  let $jobsDrawerOpen, $$unsubscribe_jobsDrawerOpen;
  let $openDebugRun, $$unsubscribe_openDebugRun;
  let $$unsubscribe_refreshComponents;
  let $jobs, $$unsubscribe_jobs;
  let $jobsById, $$unsubscribe_jobsById;
  let $history, $$unsubscribe_history;
  let $breakpoint, $$unsubscribe_breakpoint;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_secondaryMenuRightStore = subscribe(secondaryMenuRightStore, (value) => value);
  $$unsubscribe_secondaryMenuLeftStore = subscribe(secondaryMenuLeftStore, (value) => value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  let { policy } = $$props;
  let { fromHub = false } = $$props;
  let { diffDrawer = void 0 } = $$props;
  let { savedApp = void 0 } = $$props;
  let { version = void 0 } = $$props;
  const { app, summary, breakpoint, appPath, jobs, jobsById, staticExporter, errorByComponent, openDebugRun } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_summary = subscribe(summary, (value) => $summary = value);
  $$unsubscribe_breakpoint = subscribe(breakpoint, (value) => $breakpoint = value);
  $$unsubscribe_jobs = subscribe(jobs, (value) => $jobs = value);
  $$unsubscribe_jobsById = subscribe(jobsById, (value) => $jobsById = value);
  $$unsubscribe_staticExporter = subscribe(staticExporter, (value) => $staticExporter = value);
  $$unsubscribe_errorByComponent = subscribe(errorByComponent, (value) => $errorByComponent = value);
  $$unsubscribe_openDebugRun = subscribe(openDebugRun, (value) => $openDebugRun = value);
  const { history, jobsDrawerOpen, refreshComponents } = getContext("AppEditorContext");
  $$unsubscribe_history = subscribe(history, (value) => $history = value);
  $$unsubscribe_jobsDrawerOpen = subscribe(jobsDrawerOpen, (value) => $jobsDrawerOpen = value);
  $$unsubscribe_refreshComponents = subscribe(refreshComponents, (value) => value);
  const loading = {
    publish: false,
    save: false,
    saveDraft: false
  };
  let newPath = "";
  let pathError = void 0;
  let appExport;
  let draftDrawerOpen = false;
  let saveDrawerOpen = false;
  let inputsDrawerOpen = fromHub;
  let historyBrowserDrawerOpen = false;
  let debugAppDrawerOpen = false;
  let deploymentMsg = void 0;
  let secretUrl = void 0;
  async function getSecretUrl() {
    secretUrl = await AppService.getPublicSecretOfApp({
      workspace: $workspaceStore,
      path: appPath
    });
  }
  let onLatest = true;
  async function compareVersions() {
    if (version === void 0) {
      return;
    }
    const appHistory = await AppService.getAppHistoryByPath({
      workspace: $workspaceStore,
      path: appPath
    });
    onLatest = version === appHistory[0]?.version;
  }
  let selectedJobId = void 0;
  let testJobLoader;
  let job = void 0;
  let testIsLoading = false;
  let dirtyPath = false;
  let path = void 0;
  let moreItems = [
    {
      displayName: "Deployment History",
      icon: History,
      action: () => {
        historyBrowserDrawerOpen = true;
      },
      disabled: !savedApp
    },
    {
      displayName: "Export",
      icon: File_json,
      action: () => {
        appExport.open($app);
      }
    },
    // {
    // 	displayName: 'Publish to Hub',
    // 	icon: faGlobe,
    // 	action: () => {
    // 		const url = appToHubUrl(toStatic($app, $staticExporter, $summary, $hubBaseUrlStore))
    // 		window.open(url.toString(), '_blank')
    // 	}
    // },
    {
      displayName: "Hub compatible JSON",
      icon: File_up,
      action: () => {
        appExport.open(toStatic($app, $staticExporter, $summary).app);
      }
    },
    {
      displayName: "App Inputs",
      icon: Form_input,
      action: () => {
        inputsDrawerOpen = true;
      }
    },
    {
      displayName: "Schedule Reports",
      icon: File_clock,
      action: () => {
        appReportingDrawerOpen = true;
      },
      disabled: !savedApp || savedApp.draft_only
    },
    {
      displayName: "Diff",
      icon: Diff,
      action: () => {
        if (!savedApp) {
          return;
        }
        diffDrawer?.openDrawer();
        diffDrawer?.setDiff({
          mode: "normal",
          deployed: savedApp,
          draft: savedApp.draft,
          current: {
            summary: $summary,
            value: $app,
            path: newPath || savedApp.draft?.path || savedApp.path,
            policy
          }
        });
      },
      disabled: !savedApp
    },
    // App debug menu
    {
      displayName: "Troubleshoot panel",
      icon: Bug,
      action: () => {
        debugAppDrawerOpen = true;
      }
    }
  ];
  let appEditorTutorial = void 0;
  function toggleTutorial() {
    appEditorTutorial?.toggleTutorial();
  }
  let rightColumnSelect = "timeline";
  let appReportingDrawerOpen = false;
  function openTroubleshootPanel() {
    debugAppDrawerOpen = true;
  }
  if ($$props.policy === void 0 && $$bindings.policy && policy !== void 0) $$bindings.policy(policy);
  if ($$props.fromHub === void 0 && $$bindings.fromHub && fromHub !== void 0) $$bindings.fromHub(fromHub);
  if ($$props.diffDrawer === void 0 && $$bindings.diffDrawer && diffDrawer !== void 0) $$bindings.diffDrawer(diffDrawer);
  if ($$props.savedApp === void 0 && $$bindings.savedApp && savedApp !== void 0) $$bindings.savedApp(savedApp);
  if ($$props.version === void 0 && $$bindings.version && version !== void 0) $$bindings.version(version);
  if ($$props.toggleTutorial === void 0 && $$bindings.toggleTutorial && toggleTutorial !== void 0) $$bindings.toggleTutorial(toggleTutorial);
  if ($$props.openTroubleshootPanel === void 0 && $$bindings.openTroubleshootPanel && openTroubleshootPanel !== void 0) $$bindings.openTroubleshootPanel(openTroubleshootPanel);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if ($openDebugRun == void 0) {
        set_store_value(
          openDebugRun,
          $openDebugRun = (jobId) => {
            set_store_value(jobsDrawerOpen, $jobsDrawerOpen = true, $jobsDrawerOpen);
            selectedJobId = jobId;
          },
          $openDebugRun
        );
      }
    }
    appPath != "" && secretUrl == void 0 && getSecretUrl();
    saveDrawerOpen && compareVersions();
    selectedJobId && !selectedJobId?.includes("Frontend") && testJobLoader?.watchJob(selectedJobId);
    {
      if (selectedJobId?.includes("Frontend") && selectedJobId) {
        job = void 0;
      }
    }
    hasErrors = Object.keys($errorByComponent).length > 0;
    $$rendered = ` ${validate_component(TestJobLoader, "TestJobLoader").$$render(
      $$result,
      {
        this: testJobLoader,
        isLoading: testIsLoading,
        job
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
          job = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(UnsavedConfirmationModal, "UnsavedConfirmationModal").$$render(
      $$result,
      {
        diffDrawer,
        savedValue: savedApp,
        modifiedValue: {
          summary: $summary,
          value: $app,
          path: newPath || savedApp?.draft?.path || savedApp?.path,
          policy
        }
      },
      {},
      {}
    )} ${appPath == "" ? `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "800px", open: draftDrawerOpen },
      {
        open: ($$value) => {
          draftDrawerOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Initial draft save" }, {}, {
            actions: () => {
              return `<div slot="actions">${validate_component(Button, "Button").$$render(
                $$result,
                {
                  startIcon: { icon: Save },
                  disabled: pathError != ""
                },
                {},
                {
                  default: () => {
                    return `Save initial draft`;
                  }
                }
              )}</div>`;
            },
            default: () => {
              return `${validate_component(Alert, "Alert").$$render($$result, { title: "Require path", type: "info" }, {}, {
                default: () => {
                  return `Choose a path to save the initial draft of the app.`;
                }
              })} <h3 data-svelte-h="svelte-1sjxw1i">Summary</h3> <div class="w-full pt-2"> <input autofocus type="text" placeholder="App summary" class="text-sm w-full font-semibold"${add_attribute("value", $summary, 0)}></div> <div class="py-2"></div> ${validate_component(Path, "Path").$$render(
                $$result,
                {
                  autofocus: false,
                  initialPath: "",
                  namePlaceholder: "app",
                  kind: "app",
                  this: path,
                  error: pathError,
                  path: newPath,
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
                    newPath = $$value;
                    $$settled = false;
                  },
                  dirty: ($$value) => {
                    dirtyPath = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} <div class="py-4"></div>`;
            }
          })}`;
        }
      }
    )}` : ``} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "800px", open: saveDrawerOpen },
      {
        open: ($$value) => {
          saveDrawerOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Deploy" }, {}, {
            actions: () => {
              return `<div slot="actions" class="flex flex-row gap-4">${validate_component(Button, "Button").$$render(
                $$result,
                {
                  variant: "border",
                  color: "light",
                  disabled: !savedApp || savedApp.draft_only
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
                  startIcon: { icon: Save },
                  disabled: pathError != ""
                },
                {},
                {
                  default: () => {
                    return `Deploy`;
                  }
                }
              )}</div>`;
            },
            default: () => {
              return `${!onLatest ? `${validate_component(Alert, "Alert").$$render(
                $$result,
                {
                  title: "You're not on the latest app version",
                  type: "warning"
                },
                {},
                {
                  default: () => {
                    return `By deploying, you may overwrite changes made by other users.`;
                  }
                }
              )} <div class="py-2"></div>` : ``} <span class="text-secondary text-sm font-bold" data-svelte-h="svelte-10ys0lq">Summary</span> <div class="w-full pt-2"> <input autofocus type="text" placeholder="App summary" class="text-sm w-full"${add_attribute("value", $summary, 0)}></div> <div class="py-4"></div> <span class="text-secondary text-sm font-bold" data-svelte-h="svelte-1hnffqe">Deployment message</span> <div class="w-full pt-2"> <input type="text" placeholder="Optional deployment message" class="text-sm w-full"${add_attribute("value", deploymentMsg, 0)}></div> <div class="py-4"></div> <span class="text-secondary text-sm font-bold" data-svelte-h="svelte-15o66pv">Path</span> ${validate_component(Path, "Path").$$render(
                $$result,
                {
                  initialPath: appPath,
                  namePlaceholder: "app",
                  kind: "app",
                  autofocus: false,
                  this: path,
                  dirty: dirtyPath,
                  error: pathError,
                  path: newPath
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
                  error: ($$value) => {
                    pathError = $$value;
                    $$settled = false;
                  },
                  path: ($$value) => {
                    newPath = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} <div class="py-2"></div> ${appPath == "" ? `${validate_component(Alert, "Alert").$$render($$result, { title: "Require saving", type: "error" }, {}, {
                default: () => {
                  return `Save this app once before you can publish it`;
                }
              })}` : `${validate_component(Alert, "Alert").$$render($$result, { title: "App executed on behalf of you" }, {}, {
                default: () => {
                  return `A viewer of the app will execute the runnables of the app on behalf of the publisher (you)
				${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                    default: () => {
                      return `It ensures that all required resources/runnable visible for publisher but not for viewer
					at time of creating the app would prevent the execution of the app. To guarantee tight
					security, a policy is computed at time of deployment of the app which only allow the
					scripts/flows referred to in the app to be called on behalf of. Furthermore, static
					parameters are not overridable. Hence, users will only be able to use the app as intended
					by the publisher without risk for leaking resources not used in the app.`;
                    }
                  })}`;
                }
              })} <div class="mt-10"></div> <h2 data-svelte-h="svelte-fxvh3q">Secret public URL</h2> <div class="mt-4"></div> ${validate_component(Toggle, "Toggle").$$render(
                $$result,
                {
                  options: {
                    left: `Require login and read-access`,
                    right: `No login required`
                  },
                  checked: policy.execution_mode == "anonymous"
                },
                {},
                {}
              )} <div class="my-6 box">Secret public url:
				${secretUrl ? (() => {
                let url = `${$page.url.hostname}/public/${$workspaceStore}/${secretUrl}`, href = $page.url.protocol + "//" + url;
                return `  <a${add_attribute("href", href, 0)} class="whitespace-nowrap text-ellipsis overflow-hidden mr-1 inline-flex gap-2">${escape(url)} <span class="text-gray-700 ml-2">${validate_component(Clipboard, "Clipboard").$$render($$result, {}, {}, {})}</span></a>`;
              })() : `${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})}`} <div class="text-xs text-secondary" data-svelte-h="svelte-1krw05r">You may share this url directly or embed it using an iframe (if not requiring login)</div></div> ${validate_component(Alert, "Alert").$$render(
                $$result,
                {
                  type: "info",
                  title: "Only latest deployed app is publicly available"
                },
                {},
                {
                  default: () => {
                    return `You will still need to deploy the app to make visible the latest changes`;
                  }
                }
              )}`}`;
            }
          })}`;
        }
      }
    )} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "600px", open: inputsDrawerOpen },
      {
        open: ($$value) => {
          inputsDrawerOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "App inputs configuration" }, {}, {
            default: () => {
              return `${validate_component(AppInputs, "AppInputs").$$render($$result, {}, {}, {})}`;
            }
          })}`;
        }
      }
    )} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      {
        size: "1200px",
        open: historyBrowserDrawerOpen
      },
      {
        open: ($$value) => {
          historyBrowserDrawerOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Deployment History" }, {}, {
            default: () => {
              return `${validate_component(DeploymentHistory, "DeploymentHistory").$$render($$result, { appPath }, {}, {})}`;
            }
          })}`;
        }
      }
    )} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "800px", open: debugAppDrawerOpen },
      {
        open: ($$value) => {
          debugAppDrawerOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Troubleshoot Panel" }, {}, {
            default: () => {
              return `${validate_component(DebugPanel, "DebugPanel").$$render($$result, {}, {}, {})}`;
            }
          })}`;
        }
      }
    )} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "900px", open: $jobsDrawerOpen },
      {
        open: ($$value) => {
          $jobsDrawerOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render(
            $$result,
            {
              noPadding: true,
              title: "Debug Runs",
              tooltip: "Look at latests runs to spot potential bugs.",
              documentationLink: "https://www.windmill.dev/docs/apps/app_debugging"
            },
            {},
            {
              actions: () => {
                return `${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    size: "md",
                    color: "light",
                    variant: "border",
                    title: "Refresh App"
                  },
                  {},
                  {
                    default: () => {
                      return `Refresh app ${validate_component(Refresh_cw, "RefreshCw").$$render($$result, { size: 16 }, {}, {})}`;
                    }
                  }
                )} ${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    size: "md",
                    color: "light",
                    variant: "border"
                  },
                  {},
                  {
                    default: () => {
                      return `Clear jobs`;
                    }
                  }
                )} ${hasErrors ? `${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    size: "md",
                    color: "light",
                    variant: "border"
                  },
                  {},
                  {
                    default: () => {
                      return `Clear Errors  ${validate_component(Bell_off, "BellOff").$$render($$result, { size: 14 }, {}, {})}`;
                    }
                  }
                )}` : ``} `;
              },
              default: () => {
                return `${validate_component(Splitpanes, "Splitpanes").$$render($$result, { class: "!overflow-visible" }, {}, {
                  default: () => {
                    return `${validate_component(Pane, "Pane").$$render($$result, { size: 25 }, {}, {
                      default: () => {
                        return `${validate_component(PanelSection, "PanelSection").$$render($$result, { title: "Past Runs" }, {}, {
                          default: () => {
                            return `<div class="flex flex-col gap-2 w-full">${$jobs.length > 0 ? `<div class="flex gap-2 flex-col-reverse">${each($jobs ?? [], (id) => {
                              let selectedJob = $jobsById[id];
                              return ` ${selectedJob ? `  <div${add_attribute(
                                "class",
                                classNames(
                                  "border flex gap-1 truncate justify-between flex-row w-full items-center p-2 rounded-md cursor-pointer hover:bg-surface-secondary hover:text-blue-400",
                                  selectedJob.error ? "border border-red-500 text-primary" : "",
                                  selectedJob.error && $errorByComponent[selectedJob.component]?.id == id ? selectedJobId == id ? "bg-red-600 !border-blue-600" : "bg-red-400" : selectedJobId == id ? "text-blue-600" : ""
                                ),
                                0
                              )}><span class="text-xs truncate">${escape(truncateRev(selectedJob.job, 20))}</span> ${validate_component(Badge, "Badge").$$render($$result, { color: "indigo" }, {}, {
                                default: () => {
                                  return `${escape(selectedJob.component)}`;
                                }
                              })} </div>` : ``}`;
                            })}</div>` : `<div class="text-sm text-tertiary" data-svelte-h="svelte-153zr3m">No items</div>`}</div>`;
                          }
                        })}`;
                      }
                    })} ${validate_component(Pane, "Pane").$$render($$result, { size: 75 }, {}, {
                      default: () => {
                        return `<div class="w-full h-full flex flex-col"><div>${validate_component(Tabs, "Tabs").$$render(
                          $$result,
                          { selected: rightColumnSelect },
                          {
                            selected: ($$value) => {
                              rightColumnSelect = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `${validate_component(Tab, "Tab").$$render($$result, { value: "timeline" }, {}, {
                                default: () => {
                                  return `<span class="font-semibold text-md" data-svelte-h="svelte-qdy0j8">Timeline</span>`;
                                }
                              })} ${validate_component(Tab, "Tab").$$render($$result, { value: "detail" }, {}, {
                                default: () => {
                                  return `<span class="font-semibold" data-svelte-h="svelte-p3gq42">Details</span>`;
                                }
                              })}`;
                            }
                          }
                        )}</div> ${rightColumnSelect == "timeline" ? `<div class="p-2 grow overflow-auto">${validate_component(AppTimeline, "AppTimeline").$$render($$result, {}, {}, {})}</div>` : `${rightColumnSelect == "detail" ? `<div class="grow flex flex-col w-full overflow-auto">${selectedJobId ? `${selectedJobId?.includes("Frontend") ? (() => {
                          let jobResult = $jobsById[selectedJobId];
                          return ` ${jobResult?.error !== void 0 ? `${validate_component(Splitpanes, "Splitpanes").$$render(
                            $$result,
                            {
                              horizontal: true,
                              class: "grow border w-full"
                            },
                            {},
                            {
                              default: () => {
                                return `${validate_component(Pane, "Pane").$$render($$result, { size: 10, minSize: 10 }, {}, {
                                  default: () => {
                                    return `${validate_component(LogViewer, "LogViewer").$$render(
                                      $$result,
                                      {
                                        content: `Logs are avaiable in the browser console directly`,
                                        isLoading: false,
                                        tag: void 0
                                      },
                                      {},
                                      {}
                                    )}`;
                                  }
                                })} ${validate_component(Pane, "Pane").$$render(
                                  $$result,
                                  {
                                    size: 90,
                                    minSize: 10,
                                    class: "text-sm text-secondary"
                                  },
                                  {},
                                  {
                                    default: () => {
                                      return `<div class="relative h-full px-2">${validate_component(DisplayResult, "DisplayResult").$$render(
                                        $$result,
                                        {
                                          result: {
                                            error: {
                                              name: "Frontend execution error",
                                              message: jobResult.error
                                            }
                                          }
                                        },
                                        {},
                                        {}
                                      )}</div>`;
                                    }
                                  }
                                )}`;
                              }
                            }
                          )}` : `${jobResult !== void 0 ? `${validate_component(Splitpanes, "Splitpanes").$$render(
                            $$result,
                            {
                              horizontal: true,
                              class: "grow border w-full"
                            },
                            {},
                            {
                              default: () => {
                                return `${validate_component(Pane, "Pane").$$render($$result, { size: 10, minSize: 10 }, {}, {
                                  default: () => {
                                    return `${validate_component(LogViewer, "LogViewer").$$render(
                                      $$result,
                                      {
                                        content: `Logs are avaiable in the browser console directly`,
                                        isLoading: false,
                                        tag: void 0
                                      },
                                      {},
                                      {}
                                    )}`;
                                  }
                                })} ${validate_component(Pane, "Pane").$$render(
                                  $$result,
                                  {
                                    size: 90,
                                    minSize: 10,
                                    class: "text-sm text-secondary"
                                  },
                                  {},
                                  {
                                    default: () => {
                                      return `<div class="relative h-full px-2">${validate_component(DisplayResult, "DisplayResult").$$render(
                                        $$result,
                                        {
                                          workspaceId: $workspaceStore,
                                          jobId: selectedJobId,
                                          result: jobResult.result
                                        },
                                        {},
                                        {}
                                      )}</div>`;
                                    }
                                  }
                                )}`;
                              }
                            }
                          )}` : `${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})}`}`}`;
                        })() : `<div class="flex flex-col h-full w-full mb-4">${job?.["running"] ? `<div class="flex flex-row-reverse w-full">${validate_component(Button, "Button").$$render($$result, { color: "red", variant: "border" }, {}, {
                          default: () => {
                            return `${validate_component(Loader_2, "Loader2").$$render($$result, { size: 14, class: "animate-spin mr-2" }, {}, {})}

													Cancel`;
                          }
                        })}</div>` : ``} ${job?.args ? `<div class="p-2">${validate_component(JobArgs, "JobArgs").$$render(
                          $$result,
                          {
                            id: job.id,
                            workspace: job.workspace_id ?? $workspaceStore ?? "no_w",
                            args: job?.args
                          },
                          {},
                          {}
                        )}</div>` : ``} ${job?.raw_code ? `<div class="pb-2 pl-2 pr-2 w-full overflow-auto h-full max-h-[80px]">${validate_component(HighlightCode, "HighlightCode").$$render(
                          $$result,
                          {
                            language: job?.language,
                            code: job?.raw_code
                          },
                          {},
                          {}
                        )}</div>` : ``} ${job?.job_kind !== "flow" && job?.job_kind !== "flowpreview" ? (() => {
                          let jobResult = $jobsById[selectedJobId];
                          return ` ${validate_component(Splitpanes, "Splitpanes").$$render(
                            $$result,
                            {
                              horizontal: true,
                              class: "grow border w-full"
                            },
                            {},
                            {
                              default: () => {
                                return `${validate_component(Pane, "Pane").$$render($$result, { size: 50, minSize: 10 }, {}, {
                                  default: () => {
                                    return `${validate_component(LogViewer, "LogViewer").$$render(
                                      $$result,
                                      {
                                        duration: job?.["duration_ms"],
                                        jobId: job?.id,
                                        content: job?.logs,
                                        isLoading: testIsLoading,
                                        tag: job?.tag
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
                                    class: "text-sm text-secondary"
                                  },
                                  {},
                                  {
                                    default: () => {
                                      return `${job != void 0 && "result" in job && job.result != void 0 ? `<div class="relative h-full px-2">${validate_component(DisplayResult, "DisplayResult").$$render(
                                        $$result,
                                        {
                                          workspaceId: $workspaceStore,
                                          jobId: selectedJobId,
                                          result: job.result
                                        },
                                        {},
                                        {}
                                      )}</div>` : `${testIsLoading ? `<div class="p-2">${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})}</div>` : `${job != void 0 && "result" in job && job?.["result"] == void 0 ? `<div class="p-2 text-tertiary" data-svelte-h="svelte-1mr3ok5">Result is undefined</div>` : `<div class="p-2 text-tertiary">${validate_component(Loader_2, "Loader2").$$render($$result, { size: 14, class: "animate-spin mr-2" }, {}, {})}</div>`}`}`}`;
                                    }
                                  }
                                )} ${jobResult?.transformer ? `${validate_component(Pane, "Pane").$$render(
                                  $$result,
                                  {
                                    size: 50,
                                    minSize: 10,
                                    class: "text-sm text-secondary p-2"
                                  },
                                  {},
                                  {
                                    default: () => {
                                      return `<div class="font-bold" data-svelte-h="svelte-glvtfj">Transformer results</div> ${job != void 0 && "result" in job && job.result != void 0 ? `<div class="relative h-full px-2">${validate_component(DisplayResult, "DisplayResult").$$render(
                                        $$result,
                                        {
                                          workspaceId: $workspaceStore,
                                          jobId: selectedJobId,
                                          result: jobResult?.transformer
                                        },
                                        {},
                                        {}
                                      )}</div>` : `${testIsLoading ? `<div class="p-2">${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})}</div>` : `${job != void 0 && "result" in job && job?.["result"] == void 0 ? `<div class="p-2 text-tertiary" data-svelte-h="svelte-1mr3ok5">Result is undefined</div>` : `<div class="p-2 text-tertiary">${validate_component(Loader_2, "Loader2").$$render($$result, { size: 14, class: "animate-spin mr-2" }, {}, {})}</div>`}`}`}`;
                                    }
                                  }
                                )}` : ``}`;
                              }
                            }
                          )}`;
                        })() : `<div class="mt-10"></div> ${validate_component(FlowProgressBar, "FlowProgressBar").$$render($$result, { job, class: "py-4" }, {}, {})} <div class="w-full mt-10 mb-20">${validate_component(FlowStatusViewer, "FlowStatusViewer").$$render($$result, { jobId: job.id }, {}, {})}</div>`}</div>`}` : `<div class="text-sm p-2 text-tertiary" data-svelte-h="svelte-lc45d2">Select a job to see its details</div>`}</div>` : ``}`}</div>`;
                      }
                    })}`;
                  }
                })}`;
              }
            }
          )}`;
        }
      }
    )} ${validate_component(AppReportsDrawer, "AppReportsDrawer").$$render(
      $$result,
      { appPath, open: appReportingDrawerOpen },
      {
        open: ($$value) => {
          appReportingDrawerOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="border-b flex flex-row justify-between py-1 gap-2 gap-y-2 px-2 items-center overflow-y-visible overflow-x-auto"><div class="flex flex-row gap-2 items-center">${validate_component(Summary, "Summary").$$render(
      $$result,
      { value: $summary },
      {
        value: ($$value) => {
          $summary = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="flex gap-2">${validate_component(UndoRedo, "UndoRedo").$$render(
      $$result,
      {
        undoProps: { disabled: $history?.index === 0 },
        redoProps: {
          disabled: $history && $history?.index === $history.history.length - 1
        }
      },
      {},
      {}
    )} ${$app ? `${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
      $$result,
      {
        class: "h-[30px]",
        selected: $app.fullscreen
      },
      {
        selected: ($$value) => {
          $app.fullscreen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              icon: Align_horizontal_space_around,
              value: false,
              tooltip: "The max width is 1168px and the content stay centered instead of taking the full page width",
              iconProps: { size: 16 }
            },
            {},
            {}
          )} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              tooltip: "The width is of the app if the full width of its container",
              icon: Expand,
              value: true,
              iconProps: { size: 16 }
            },
            {},
            {}
          )}`;
        }
      }
    )}` : ``} <div>${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
      $$result,
      { class: "h-[30px]", selected: $breakpoint },
      {
        selected: ($$value) => {
          $breakpoint = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              tooltip: "Mobile View",
              icon: Smartphone,
              value: "sm",
              iconProps: { size: 16 }
            },
            {},
            {}
          )} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              tooltip: "Computer View",
              icon: Laptop_2,
              value: "lg",
              iconProps: { size: 16 }
            },
            {},
            {}
          )}`;
        }
      }
    )}</div></div></div> ${$enterpriseLicense && appPath != "" ? `${validate_component(Awareness, "Awareness").$$render($$result, {}, {}, {})}` : ``} <div class="flex flex-row gap-2 justify-end items-center overflow-visible">${validate_component(ButtonDropdown, "ButtonDropdown").$$render($$result, { hasPadding: false }, {}, {
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
                return `<div${add_attribute("class", classNames("text-primary flex flex-row items-center text-left px-4 py-2 gap-2 cursor-pointer hover:bg-surface-hover !text-xs font-semibold"), 0)}>${validate_component(item.icon || missing_component, "svelte:component").$$render($$result, { size: 14 }, {}, {})} ${escape(item.displayName)}</div> `;
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
    })} ${validate_component(AppEditorTutorial, "AppEditorTutorial").$$render(
      $$result,
      { this: appEditorTutorial },
      {
        this: ($$value) => {
          appEditorTutorial = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="hidden md:inline relative overflow-visible">${hasErrors ? `<span class="animate-ping absolute inline-flex rounded-full bg-red-600 h-2 w-2 z-50 -right-0.5 -top-0.5"></span> <span class="absolute inline-flex rounded-full bg-red-600 h-2 w-2 z-50 -right-0.5 -top-0.5"></span>` : ``} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: hasErrors ? "red" : "light",
        size: "xs",
        variant: "border",
        btnClasses: "relative"
      },
      {},
      {
        default: () => {
          return `<div class="flex flex-row gap-1 items-center">${validate_component(Bug, "Bug").$$render($$result, { size: 14 }, {}, {})} <div data-svelte-h="svelte-vct039">Debug runs</div> <div class="text-2xs text-tertiary">(${escape($jobs?.length > 99 ? "99+" : $jobs?.length ?? 0)})</div> ${hasErrors ? `${validate_component(Button, "Button").$$render(
            $$result,
            {
              size: "xs",
              btnClasses: "-my-2 !px-1 !py-0",
              color: "light",
              variant: "border"
            },
            {},
            {
              default: () => {
                return `${validate_component(Bell_off, "BellOff").$$render($$result, { size: 12 }, {}, {})}`;
              }
            }
          )}` : ``}</div>`;
        }
      }
    )}</div> ${validate_component(AppExportButton, "AppExportButton").$$render(
      $$result,
      { this: appExport },
      {
        this: ($$value) => {
          appExport = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(PreviewToggle, "PreviewToggle").$$render($$result, { loading: loading.save }, {}, {})} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        loading: loading.save,
        startIcon: { icon: Save },
        size: "xs",
        disabled: $page.params.path !== void 0 && !savedApp,
        shortCut: { key: "S" }
      },
      {},
      {
        default: () => {
          return `Draft`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        loading: loading.save,
        startIcon: { icon: Save },
        size: "xs",
        dropdownItems: appPath != "" ? () => [
          {
            label: "Fork",
            onClick: () => {
              window.open(`/apps/add?template=${appPath}`);
            }
          }
        ] : void 0
      },
      {},
      {
        default: () => {
          return `Deploy`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_summary();
  $$unsubscribe_staticExporter();
  $$unsubscribe_errorByComponent();
  $$unsubscribe_workspaceStore();
  $$unsubscribe_page();
  $$unsubscribe_secondaryMenuRightStore();
  $$unsubscribe_secondaryMenuLeftStore();
  $$unsubscribe_jobsDrawerOpen();
  $$unsubscribe_openDebugRun();
  $$unsubscribe_refreshComponents();
  $$unsubscribe_jobs();
  $$unsubscribe_jobsById();
  $$unsubscribe_history();
  $$unsubscribe_breakpoint();
  $$unsubscribe_enterpriseLicense();
  return $$rendered;
});
const css$2 = {
  code: ".svlt-grid-shadow{background:#93c4fdd0!important}.svlt-grid-active{opacity:1!important}",
  map: null
};
const GridEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $selectedComponent, $$unsubscribe_selectedComponent;
  let $allIdsInPath, $$unsubscribe_allIdsInPath;
  let $componentActive, $$unsubscribe_componentActive;
  let $connectingInput, $$unsubscribe_connectingInput;
  let $summary, $$unsubscribe_summary;
  let $bgRuns, $$unsubscribe_bgRuns;
  let $focusedGrid, $$unsubscribe_focusedGrid;
  let $$unsubscribe_parentWidth;
  let $mode, $$unsubscribe_mode;
  let $scale, $$unsubscribe_scale;
  let $breakpoint, $$unsubscribe_breakpoint;
  let { policy } = $$props;
  const { selectedComponent, app, mode, connectingInput, summary, focusedGrid, parentWidth, breakpoint, allIdsInPath, bgRuns } = getContext("AppViewerContext");
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => $selectedComponent = value);
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_mode = subscribe(mode, (value) => $mode = value);
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => $connectingInput = value);
  $$unsubscribe_summary = subscribe(summary, (value) => $summary = value);
  $$unsubscribe_focusedGrid = subscribe(focusedGrid, (value) => $focusedGrid = value);
  $$unsubscribe_parentWidth = subscribe(parentWidth, (value) => value);
  $$unsubscribe_breakpoint = subscribe(breakpoint, (value) => $breakpoint = value);
  $$unsubscribe_allIdsInPath = subscribe(allIdsInPath, (value) => $allIdsInPath = value);
  $$unsubscribe_bgRuns = subscribe(bgRuns, (value) => $bgRuns = value);
  const { history, scale, componentActive } = getContext("AppEditorContext");
  $$unsubscribe_scale = subscribe(scale, (value) => $scale = value);
  $$unsubscribe_componentActive = subscribe(componentActive, (value) => $componentActive = value);
  let previousSelectedIds = void 0;
  if ($$props.policy === void 0 && $$bindings.policy && policy !== void 0) $$bindings.policy(policy);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (!deepEqual(previousSelectedIds, $selectedComponent)) {
        previousSelectedIds = $selectedComponent;
        set_store_value(allIdsInPath, $allIdsInPath = ($selectedComponent ?? []).flatMap((id) => dfs($app.grid, id, $app.subgrids ?? {})).filter((x) => x != void 0), $allIdsInPath);
      }
    }
    $$rendered = `<div class="w-full z-[1000] overflow-visible h-full"><div${add_attribute("class", $app.hideLegacyTopBar ? "hidden" : "", 0)}><div class="${"w-full sticky top-0 flex justify-between border-b " + escape($componentActive ? "invisible" : "z-50", true) + " " + escape($connectingInput?.opened ? "" : "bg-surface", true) + " px-4 py-1 items-center gap-4"}"><h3 class="truncate">${escape($summary)}</h3> <div class="flex gap-2 items-center"><div>${!$connectingInput.opened ? `${validate_component(RecomputeAllComponents, "RecomputeAllComponents").$$render($$result, {}, {}, {})}` : ``}</div> ${$bgRuns.length > 0 ? `${validate_component(Popover, "Popover").$$render($$result, { notClickable: true }, {}, {
      text: () => {
        return `<span slot="text"><div class="flex flex-col">${each($bgRuns, (bgRun) => {
          return `<div class="flex gap-2 items-center"><div class="text-2xs text-tertiary">${escape(bgRun)}</div> </div>`;
        })}</div></span>`;
      },
      default: () => {
        return `<span class="!text-2xs text-tertiary inline-flex gap-1 items-center">${validate_component(Loader_2, "Loader2").$$render($$result, { size: 10, class: "animate-spin" }, {}, {})} ${escape($bgRuns.length)}</span>`;
      }
    })}` : `<span class="w-9"></span>`}</div> <div class="flex text-2xs gap-8 items-center"><div class="py-2 pr-2 text-secondary flex gap-1 items-center">Hide bar on view
					${validate_component(Toggle, "Toggle").$$render(
      $$result,
      { size: "xs", checked: $app.norefreshbar },
      {
        checked: ($$value) => {
          $app.norefreshbar = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div>${escape(policy.on_behalf_of ? `Author ${policy.on_behalf_of_email}` : "")} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
      default: () => {
        return `The scripts will be run on behalf of the author and a tight policy ensure security about
						the possible inputs of the runnables.`;
      }
    })}</div></div></div></div>  <div${add_attribute("style", $app.css?.["app"]?.["grid"]?.style, 0)}${add_attribute("class", twMerge("p-2 overflow-visible z-50", $app.css?.["app"]?.["grid"]?.class ?? "", "wm-app-grid !static h-full w-full"), 0)}><div${add_attribute(
      "class",
      twMerge(
        !$focusedGrid && $mode !== "preview" ? "outline-dashed" : "",
        "subgrid  overflow-visible  z-100",
        "outline-[#999999] dark:outline-[#aaaaaa] outline-dotted outline-offset-2 outline-1 "
      ),
      0
    )}${add_attribute("style", `transform: scale(${$scale / 100});`, 0)}>${validate_component(Grid, "Grid").$$render(
      $$result,
      {
        allIdsInPath: $allIdsInPath,
        selectedIds: $selectedComponent,
        items: $app.grid,
        cols: columnConfiguration
      },
      {},
      {
        default: ({ dataItem, hidden }) => {
          return `${validate_component(ComponentWrapper, "ComponentWrapper").$$render(
            $$result,
            {
              id: dataItem.id,
              type: dataItem.data.type,
              class: classNames("h-full w-full center-center outline outline-surface-secondary", Boolean($selectedComponent?.includes(dataItem.id)) ? "active-grid-item" : "")
            },
            {},
            {
              default: () => {
                return `${validate_component(GridEditorMenu, "GridEditorMenu").$$render($$result, { id: dataItem.id }, {}, {
                  default: () => {
                    return `${validate_component(Component$1, "Component").$$render(
                      $$result,
                      {
                        hidden,
                        render: true,
                        component: dataItem.data,
                        selected: Boolean($selectedComponent?.includes(dataItem.id)),
                        locked: isFixed(dataItem),
                        fullHeight: dataItem?.[$breakpoint === "sm" ? 3 : 12]?.fullHeight
                      },
                      {},
                      {}
                    )}`;
                  }
                })}`;
              }
            }
          )}`;
        }
      }
    )}</div></div></div> ${$app.hiddenInlineScripts ? `${each($app.hiddenInlineScripts, (runnable, index) => {
      return `${runnable ? `${validate_component(HiddenComponent, "HiddenComponent").$$render($$result, { id: BG_PREFIX + index, runnable }, {}, {})}` : ``}`;
    })}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_selectedComponent();
  $$unsubscribe_allIdsInPath();
  $$unsubscribe_componentActive();
  $$unsubscribe_connectingInput();
  $$unsubscribe_summary();
  $$unsubscribe_bgRuns();
  $$unsubscribe_focusedGrid();
  $$unsubscribe_parentWidth();
  $$unsubscribe_mode();
  $$unsubscribe_scale();
  $$unsubscribe_breakpoint();
  return $$rendered;
});
const store = writable({});
const isOpenStore = {
  subscribe: store.subscribe,
  update: store.update,
  set: store.set,
  /** If an item is already set, it won't get updated. */
  addItems: (items) => {
    let newItems = {};
    items.forEach((item) => newItems = { ...newItems, ...item });
    store.update((last) => ({ ...newItems, ...last }));
  },
  toggle: (id) => {
    store.update((last) => ({ ...last, [id]: !last[id] }));
  },
  reset: () => store.set({})
};
const ListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let storeTitle;
  let $isOpenStore, $$unsubscribe_isOpenStore;
  $$unsubscribe_isOpenStore = subscribe(isOpenStore, (value) => $isOpenStore = value);
  let { title } = $$props;
  let { prefix = void 0 } = $$props;
  let { openByDefault = false } = $$props;
  let { wrapperClasses = "" } = $$props;
  let { toggleClasses = "" } = $$props;
  let { contentWrapperClasses = "" } = $$props;
  let { isOpen = false } = $$props;
  let { tooltip = void 0 } = $$props;
  let { documentationLink = void 0 } = $$props;
  let { subtitle = void 0 } = $$props;
  const dispatch = createEventDispatcher();
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0) $$bindings.prefix(prefix);
  if ($$props.openByDefault === void 0 && $$bindings.openByDefault && openByDefault !== void 0) $$bindings.openByDefault(openByDefault);
  if ($$props.wrapperClasses === void 0 && $$bindings.wrapperClasses && wrapperClasses !== void 0) $$bindings.wrapperClasses(wrapperClasses);
  if ($$props.toggleClasses === void 0 && $$bindings.toggleClasses && toggleClasses !== void 0) $$bindings.toggleClasses(toggleClasses);
  if ($$props.contentWrapperClasses === void 0 && $$bindings.contentWrapperClasses && contentWrapperClasses !== void 0) $$bindings.contentWrapperClasses(contentWrapperClasses);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0) $$bindings.isOpen(isOpen);
  if ($$props.tooltip === void 0 && $$bindings.tooltip && tooltip !== void 0) $$bindings.tooltip(tooltip);
  if ($$props.documentationLink === void 0 && $$bindings.documentationLink && documentationLink !== void 0) $$bindings.documentationLink(documentationLink);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0) $$bindings.subtitle(subtitle);
  storeTitle = prefix + title;
  isOpen = prefix ? $isOpenStore[storeTitle] : true;
  {
    dispatch("open", isOpen);
  }
  $$unsubscribe_isOpenStore();
  return `<section class="${"pt-1 pb-2 px-1 " + escape(wrapperClasses, true)}">${prefix !== void 0 ? `<button class="${"w-full flex justify-between items-center text-secondary px-2 py-1 rounded-sm duration-200 hover:bg-surface-hover " + escape(toggleClasses, true)}"><h1 class="text-sm font-semibold text-left">${slots.title ? slots.title({}) : ` ${escape(title)} ${subtitle ? `<span class="text-2xs text-tertiary ml-1">${escape(subtitle)}</span>` : ``} `} ${tooltip ? `${validate_component(Tooltip, "Tooltip").$$render($$result, { class: "ml-1", documentationLink }, {}, {
    default: () => {
      return `${escape(tooltip)}`;
    }
  })}` : ``}</h1> ${validate_component(Chevron_down, "ChevronDown").$$render(
    $$result,
    {
      class: "rotate-0 duration-300 " + (isOpen ? "!rotate-180" : "")
    },
    {},
    {}
  )}</button> ${isOpen ? `<div class="${"px-2 " + escape(contentWrapperClasses, true)}">${slots.default ? slots.default({}) : ``}</div>` : ``}` : `<h1 class="text-base font-semibold text-left px-2 py-1 text-secondary">${slots.title ? slots.title({}) : ` ${escape(title)} ${subtitle ? `<span class="text-2xs text-tertiary ml-1">${escape(subtitle)}</span>` : ``} `} ${tooltip ? `${validate_component(Tooltip, "Tooltip").$$render($$result, { class: "ml-1", documentationLink }, {}, {
    default: () => {
      return `${escape(tooltip)}`;
    }
  })}` : ``}</h1> <div class="px-2">${slots.default ? slots.default({}) : ``}</div>`}</section>`;
});
async function listGroups(workspace) {
  const listGroupsRequest = {
    workspace,
    name: "app_group"
  };
  return ResourceService.listResourceNames(listGroupsRequest);
}
const NameEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { kind } = $$props;
  let { row } = $$props;
  let editedName = row.name;
  createEventDispatcher();
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0) $$bindings.kind(kind);
  if ($$props.row === void 0 && $$bindings.row && row !== void 0) $$bindings.row(row);
  return `${validate_component(Popup, "Popup").$$render(
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
            size: "xs2",
            nonCaptureEvent: true
          },
          {},
          {
            default: () => {
              return `<div class="flex flex-row gap-1 items-center">${validate_component(Pen, "Pen").$$render($$result, { size: 16 }, {}, {})}</div>`;
            }
          }
        )} `;
      },
      default: ({ close: close2 }) => {
        return `<div class="flex flex-col w-80 gap-2"><div class="leading-6 font-semibold text-xs">Edit ${escape(kind)} name</div> <div class="flex flex-row gap-2"><input${add_attribute("value", editedName, 0)}> ${validate_component(Button, "Button").$$render($$result, { color: "dark", size: "xs" }, {}, {
          default: () => {
            return `Update`;
          }
        })}</div></div>`;
      }
    }
  )}`;
});
const CustomComponentRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  let { row } = $$props;
  createEventDispatcher();
  if ($$props.row === void 0 && $$bindings.row && row !== void 0) $$bindings.row(row);
  $$unsubscribe_workspaceStore();
  return `<tr>${validate_component(Cell, "Cell").$$render($$result, { first: true }, {}, {
    default: () => {
      return `<div class="flex flex-row gap-1 items-center">${validate_component(NameEditor, "NameEditor").$$render($$result, { kind: "custom component", row }, {}, {})} ${escape(row.name)}</div>`;
    }
  })} ${validate_component(Cell, "Cell").$$render($$result, { last: true }, {}, {
    default: () => {
      return `<div${add_attribute("class", twMerge("flex flex-row gap-1 justify-end  z-[10000]"), 0)}><button>${validate_component(ButtonDropdown, "ButtonDropdown").$$render($$result, { target: "#cc_portal", hasPadding: false }, {}, {
        items: () => {
          return `${validate_component(MenuItem$1, "MenuItem").$$render($$result, {}, {}, {
            default: () => {
              return `<div${add_attribute("class", classNames("!text-red-600 flex flex-row items-center text-left px-4 py-2 gap-2 cursor-pointer hover:bg-gray-100 !text-xs font-semibold"), 0)}>${validate_component(Trash, "Trash").$$render($$result, { size: 16 }, {}, {})}
								Delete</div>`;
            }
          })}`;
        }
      })}</button></div>`;
    }
  })}</tr>`;
});
const CustomComponentsList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let customcomponents = [];
  let loading = false;
  async function getCustomComponents() {
    loading = true;
    customcomponents = await ResourceService.listResourceNames({
      workspace: $workspaceStore ?? "",
      name: "app_custom"
    });
    loading = false;
  }
  createEventDispatcher();
  let nameField = "";
  let reactVersion = "18.2.0";
  let useReact = true;
  getCustomComponents();
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div id="cc_portal"></div> <div class="p-2 flex flex-col items-start w-auto gap-2 relative"><div class="w-full flex flex-col gap-y-2 pb-8"><div><input type="text"${add_attribute("placeholder", "Custom Component name", 0)}${add_attribute("value", nameField, 0)}></div> <div><input type="file" accept="text/javascript " ${""}></div> <div class="flex gap-4">${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        options: { right: "React Component" },
        checked: useReact
      },
      {
        checked: ($$value) => {
          useReact = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div><input ${!useReact ? "disabled" : ""} type="text"${add_attribute("placeholder", "React version", 0)}${add_attribute("value", reactVersion, 0)}></div></div> ${validate_component(Button, "Button").$$render($$result, { color: "dark", size: "xs" }, {}, {
      default: () => {
        return `Add Custom Component`;
      }
    })}</div> ${loading ? `<div class="flex flex-col w-full pt-12">${each(new Array(6), (_) => {
      return `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[2], 0.5] }, {}, {})}`;
    })}</div>` : `${Array.isArray(customcomponents) && customcomponents.length > 0 ? `<div class="w-full">${validate_component(DataTable, "DataTable").$$render($$result, { size: "xs" }, {}, {
      default: () => {
        return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
          default: () => {
            return `<tr>${validate_component(Cell, "Cell").$$render($$result, { first: true, head: true }, {}, {
              default: () => {
                return `Path`;
              }
            })} ${validate_component(Cell, "Cell").$$render($$result, { last: true, head: true }, {}, {})}</tr>`;
          }
        })} <tbody class="divide-y">${customcomponents && customcomponents.length > 0 ? `${each(customcomponents, (row) => {
          return `${validate_component(CustomComponentRow, "CustomComponentRow").$$render($$result, { row }, {}, {})}`;
        })}` : `<tr data-svelte-h="svelte-1hwx9ss">Loading...</tr>`}</tbody>`;
      }
    })}</div>` : ``}`}</div>`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const ComponentList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let componentsFiltered;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $$unsubscribe_app;
  let $$unsubscribe_selectedComponent;
  let $$unsubscribe_focusedGrid;
  let $$unsubscribe_dndItem;
  let $$unsubscribe_yTop;
  let $$unsubscribe_enterpriseLicense;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => value);
  const { app, selectedComponent, focusedGrid } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => value);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => value);
  $$unsubscribe_focusedGrid = subscribe(focusedGrid, (value) => value);
  const { history, dndItem, yTop } = getContext("AppEditorContext");
  $$unsubscribe_dndItem = subscribe(dndItem, (value) => value);
  $$unsubscribe_yTop = subscribe(yTop, (value) => value);
  let groups = [];
  let customComponents = [];
  async function fetchGroups() {
    groups = await listGroups($workspaceStore ?? "");
  }
  async function fetchCustomComponents() {
    customComponents = await ResourceService.listResourceNames({
      workspace: $workspaceStore ?? "",
      name: "app_custom"
    });
  }
  let search = "";
  let ccDrawer;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    componentsFiltered = COMPONENT_SETS.map((set) => ({
      ...set,
      components: set.components?.filter((component) => {
        const name = components[component].name.toLowerCase();
        return name.includes(search.toLowerCase().trim());
      }),
      presets: set.presets?.filter((preset) => {
        const presetName = presets[preset].name.toLowerCase();
        return presetName.includes(search.toLowerCase().trim());
      })
    }));
    {
      {
        if ($workspaceStore) {
          fetchGroups();
          fetchCustomComponents();
        }
      }
    }
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { this: ccDrawer },
      {
        this: ($$value) => {
          ccDrawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render(
            $$result,
            {
              title: "Custom Components",
              documentationLink: "https://www.windmill.dev/docs/apps/react_components"
            },
            {},
            {
              default: () => {
                return `${validate_component(CustomComponentsList, "ComponentsList").$$render($$result, {}, {}, {})}`;
              }
            }
          )}`;
        }
      }
    )} <section class="p-2 sticky w-full z-10 top-0 bg-surface">${validate_component(ClearableInput, "ClearableInput").$$render(
      $$result,
      {
        placeholder: "Search components...",
        value: search
      },
      {
        value: ($$value) => {
          search = $$value;
          $$settled = false;
        }
      },
      {}
    )}</section> <div class="relative" id="app-editor-component-list">${componentsFiltered.reduce((acc, { components: components2, presets: presets2 }) => acc + components2.length + (Array.isArray(presets2) ? presets2.length : 0), 0) === 0 ? `<div class="absolute left-0 top-0 w-full text-sm text-tertiary text-center py-6 px-2" data-svelte-h="svelte-6cfywf">No components found</div>` : `<div>${each(componentsFiltered, ({ title, components: components$1, presets: presets$1 }, index) => {
      return `${components$1.length || presets$1?.length ? `<div>${validate_component(ListItem, "ListItem").$$render(
        $$result,
        {
          title: `${title}`,
          subtitle: `(${components$1.length})`
        },
        {},
        {
          default: () => {
            return `<div class="flex flex-wrap gap-3 py-2">${each(components$1, (item) => {
              return `<div class="w-[64px] relative">${DEPRECATED_COMPONENTS[item] ? `<div class="absolute -top-2 -right-2 bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100 rounded-md py-0.5 px-1 flex flex-row gap-1 items-center">${validate_component(Popover, "Popover").$$render($$result, {}, {}, {
                text: () => {
                  return `<div slot="text">${escape(DEPRECATED_COMPONENTS[item])} </div>`;
                },
                default: () => {
                  return `<div class="font-normal text-2xs" data-svelte-h="svelte-1qr7fbs">Deprecated</div> `;
                }
              })} </div>` : ``} <button${add_attribute("id", item, 0)}${add_attribute("title", components[item].name, 0)} class="cursor-move transition-all border w-[64px] shadow-sm h-16 p-2 flex flex-col gap-2 items-center justify-center bg-surface rounded-md hover:bg-blue-50 dark:hover:bg-blue-900 duration-200 hover:border-blue-500">${validate_component(components[item].icon || missing_component, "svelte:component").$$render($$result, { class: "text-primary" }, {}, {})}</button> <div class="text-xs text-center flex-wrap text-secondary mt-1">${escape(components[item].name)}</div> </div>`;
            })} ${presets$1 ? `${each(presets$1, (presetItem) => {
              return `<div class="w-[64px]"><button${add_attribute("title", presets[presetItem].name, 0)} class="transition-all border w-[64px] shadow-sm h-16 p-2 flex flex-col gap-2 items-center justify-center bg-surface rounded-md hover:bg-blue-50 dark:hover:bg-blue-900 duration-200 hover:border-blue-500">${validate_component(presets[presetItem].icon || missing_component, "svelte:component").$$render($$result, { class: "text-secondary" }, {}, {})}</button> <div class="text-xs text-center flex-wrap text-secondary mt-1">${escape(presets[presetItem].name)}</div> </div>`;
            })}` : ``}</div> `;
          }
        }
      )} </div>` : ``}`;
    })} ${validate_component(ListItem, "ListItem").$$render($$result, { title: "Groups" }, {}, {
      default: () => {
        return `<div class="flex flex-wrap gap-3 py-2">${groups ? `${each(groups, (group) => {
          return `<div class="w-[64px]"><button${add_attribute("title", group.name, 0)} class="transition-all border w-[64px] shadow-sm h-16 p-2 flex flex-col gap-2 items-center justify-center bg-surface rounded-md hover:bg-blue-50 dark:hover:bg-blue-900 duration-200 hover:border-blue-500">${validate_component(Layout_dashboard, "LayoutDashboard").$$render($$result, { class: "text-secondary" }, {}, {})}</button> <div class="text-xs text-center flex-wrap text-secondary mt-1">${escape(group.name)}</div> </div>`;
        })}` : ``} <div class="w-[64px]"><button title="" class="transition-all border w-[64px] shadow-sm h-16 p-2 flex flex-col gap-2 items-center justify-center bg-surface rounded-md hover:bg-blue-50 dark:hover:bg-blue-900 duration-200 hover:border-blue-500">${validate_component(Plus, "Plus").$$render($$result, { class: "text-secondary" }, {}, {})}</button> <div class="text-xs text-center flex-wrap text-secondary mt-1" data-svelte-h="svelte-yyddmn">Add new</div></div></div>`;
      }
    })} ${validate_component(ListItem, "ListItem").$$render(
      $$result,
      {
        title: "Custom Components",
        tooltip: "Create components in React or vanilla JS"
      },
      {},
      {
        default: () => {
          return `<div class="flex flex-wrap gap-3 py-2">${customComponents ? `${each(customComponents, (cc) => {
            return `<div class="w-[64px]"><button${add_attribute("title", cc.name, 0)} class="transition-all border w-[64px] shadow-sm h-16 p-2 flex flex-col gap-2 items-center justify-center bg-surface rounded-md hover:bg-blue-50 dark:hover:bg-blue-900 duration-200 hover:border-blue-500">${validate_component(Layout_dashboard, "LayoutDashboard").$$render($$result, { class: "text-secondary" }, {}, {})}</button> <div class="text-xs text-center flex-wrap text-secondary mt-1">${escape(cc.name)}</div> </div>`;
          })}` : ``} <div class="w-[64px]"><button title="" class="transition-all border w-[64px] shadow-sm h-16 p-2 flex flex-col gap-2 items-center justify-center bg-surface rounded-md hover:bg-blue-50 dark:hover:bg-blue-900 duration-200 hover:border-blue-500">${validate_component(Plus, "Plus").$$render($$result, { class: "text-secondary" }, {}, {})}</button> <div class="text-xs text-center flex-wrap text-secondary mt-1" data-svelte-h="svelte-yyddmn">Add new</div></div></div>`;
        }
      }
    )}</div>`}</div>`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_app();
  $$unsubscribe_selectedComponent();
  $$unsubscribe_focusedGrid();
  $$unsubscribe_dndItem();
  $$unsubscribe_yTop();
  $$unsubscribe_enterpriseLicense();
  return $$rendered;
});
const SubGridOutput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let outputs;
  let subgridItems;
  let $app, $$unsubscribe_app;
  let $worldStore, $$unsubscribe_worldStore;
  let $$unsubscribe_connectingInput;
  let { name = void 0 } = $$props;
  let { parentId } = $$props;
  let { expanded = false } = $$props;
  let { subGrids } = $$props;
  let { nameOverrides = void 0 } = $$props;
  const { app, connectingInput, worldStore } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  let selected = 0;
  function subscribeToOutput() {
    outputs.selectedTabIndex.subscribe(
      {
        id: "subgridoutput-" + parentId,
        next: (value) => {
          selected = value;
        }
      },
      selected
    );
  }
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.parentId === void 0 && $$bindings.parentId && parentId !== void 0) $$bindings.parentId(parentId);
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0) $$bindings.expanded(expanded);
  if ($$props.subGrids === void 0 && $$bindings.subGrids && subGrids !== void 0) $$bindings.subGrids(subGrids);
  if ($$props.nameOverrides === void 0 && $$bindings.nameOverrides && nameOverrides !== void 0) $$bindings.nameOverrides(nameOverrides);
  outputs = $worldStore?.outputsById[parentId];
  subgridItems = subGrids.map((k) => ({ k, items: $app.subgrids?.[k] ?? [] }));
  {
    if (outputs?.selectedTabIndex) {
      subscribeToOutput();
    }
  }
  $$unsubscribe_app();
  $$unsubscribe_worldStore();
  $$unsubscribe_connectingInput();
  return `${each(subgridItems, ({ k, items }, index) => {
    return `<div class="ml-2 my-2">${subGrids.length > 1 ? ` <div${add_attribute(
      "class",
      classNames("px-1 py-0.5 flex justify-between items-center font-semibold text-xs border-l border-y w-full cursor-pointer", selected === index ? "bg-surface-selected" : "bg-surface"),
      0
    )}><div class="text-xs">${nameOverrides && nameOverrides[index] ? `${escape(nameOverrides[index])}` : `${escape(name ? name : "Should implement name")} ${escape(index + 1)}`}</div> </div>` : ``} ${selected === index || name !== "Tabs" ? `<div class="border-l">${items.length > 0 ? `${each(items, (subGridItem, index2) => {
      return `${validate_component(ComponentOutput, "ComponentOutput").$$render(
        $$result,
        {
          gridItem: subGridItem,
          first: index2 === 0,
          expanded
        },
        {},
        {}
      )}`;
    })}` : `<div class="text-xs text-tertiary border-y border-l p-1" data-svelte-h="svelte-635i6w">No components</div>`} </div>` : ``} </div>`;
  })}`;
});
const regex = /^[a-zA-Z][a-zA-Z0-9]*$/;
const IdEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $$unsubscribe_selectedComponent;
  const { app, selectedComponent } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value2) => $app = value2);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value2) => value2);
  let { id } = $$props;
  createEventDispatcher();
  let value = id;
  let error = "";
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  {
    if (!regex.test(value)) {
      error = "The ID must include only letters and numbers and start with a letter";
    } else if (forbiddenIds.includes(value)) {
      error = "This ID is reserved";
    } else if (allItems($app.grid, $app.subgrids).some((item) => item.id === value && item.id !== id)) {
      error = "This ID is already in use";
    } else {
      error = "";
    }
  }
  $$unsubscribe_app();
  $$unsubscribe_selectedComponent();
  return `${validate_component(Popup, "Popup").$$render(
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
        return `<button title="Edit ID" class="flex items-center px-1 rounded-sm bg-surface-secondary hover:text-primary text-secondary h-5" aria-label="Open component ID editor">${validate_component(Pencil, "Pencil").$$render($$result, { size: 14 }, {}, {})}</button> `;
      },
      default: ({ close: close2 }) => {
        return `<label class="block text-primary"><div class="pb-1 text-sm text-secondary" data-svelte-h="svelte-1v38jpj">Component ID</div> <div class="flex w-full"><input type="text" class="!w-auto grow"${add_attribute("value", value, 0)}> ${validate_component(Button, "Button").$$render(
          $$result,
          {
            size: "xs",
            color: "blue",
            buttonType: "button",
            btnClasses: "!p-1 !w-[34px] !ml-1",
            "aria-label": "Save ID",
            disabled: error != ""
          },
          {},
          {
            default: () => {
              return `${validate_component(Arrow_right, "ArrowRight").$$render($$result, { size: 18 }, {}, {})}`;
            }
          }
        )}</div> ${error != "" ? `<div class="w-full text-sm text-red-600 whitespace-pre-wrap pt-1">${escape(error)}</div>` : ``}</label>`;
      }
    }
  )}`;
});
const OutputHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let subids;
  let inSearch;
  let open2;
  let $$unsubscribe_worldStore;
  let $selectedComponent, $$unsubscribe_selectedComponent;
  let $app, $$unsubscribe_app;
  let $manuallyOpened, $$unsubscribe_manuallyOpened;
  let $allIdsInPath, $$unsubscribe_allIdsInPath;
  let $hasResult, $$unsubscribe_hasResult;
  let $search, $$unsubscribe_search;
  let $$unsubscribe_hoverStore;
  let $connectingInput, $$unsubscribe_connectingInput;
  let { id } = $$props;
  let { name } = $$props;
  let { first = false } = $$props;
  let { nested = false } = $$props;
  let { color = "indigo" } = $$props;
  let { selectable = true } = $$props;
  let { renamable = true } = $$props;
  let { disabled = false } = $$props;
  const { manuallyOpened, search, hasResult } = getContext("ContextPanel");
  $$unsubscribe_manuallyOpened = subscribe(manuallyOpened, (value) => $manuallyOpened = value);
  $$unsubscribe_search = subscribe(search, (value) => $search = value);
  $$unsubscribe_hasResult = subscribe(hasResult, (value) => $hasResult = value);
  const { selectedComponent, app, hoverStore, allIdsInPath, connectingInput, worldStore } = getContext("AppViewerContext");
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => $selectedComponent = value);
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_hoverStore = subscribe(hoverStore, (value) => value);
  $$unsubscribe_allIdsInPath = subscribe(allIdsInPath, (value) => $allIdsInPath = value);
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => $connectingInput = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => value);
  const hoverColor = {
    blue: "hover:bg-blue-100 hover:text-blue-500 dark:hover:bg-frost-900 dark:hover:text-frost-100",
    indigo: "hover:bg-indigo-100 hover:text-indigo-500 dark:hover:bg-frost-900 dark:hover:text-indigo-300"
  };
  const openBackground = {
    blue: "bg-blue-50 dark:bg-frost-800",
    indigo: "bg-indigo-50 dark:bg-indigo-700/50"
  };
  const manuallyOpenColor = {
    blue: "text-primary dark:text-gray-50 bg-gray-300 rounded-sm dark:bg-gray-600",
    indigo: "text-primary bg-gray-300 dark:text-gray-50 rounded-sm dark:bg-gray-600"
  };
  const idClass = {
    blue: "bg-blue-500 text-white",
    indigo: "bg-indigo-500 text-white"
  };
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.first === void 0 && $$bindings.first && first !== void 0) $$bindings.first(first);
  if ($$props.nested === void 0 && $$bindings.nested && nested !== void 0) $$bindings.nested(nested);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.selectable === void 0 && $$bindings.selectable && selectable !== void 0) $$bindings.selectable(selectable);
  if ($$props.renamable === void 0 && $$bindings.renamable && renamable !== void 0) $$bindings.renamable(renamable);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  subids = $search != "" ? allsubIds($app, id) : [];
  inSearch = $search != "" && ($hasResult[id] || Object.entries($hasResult).some(([key, value]) => value && subids.includes(key)));
  open2 = $allIdsInPath.includes(id) || id == $selectedComponent?.[0] || $manuallyOpened[id] || inSearch;
  $$unsubscribe_worldStore();
  $$unsubscribe_selectedComponent();
  $$unsubscribe_app();
  $$unsubscribe_manuallyOpened();
  $$unsubscribe_allIdsInPath();
  $$unsubscribe_hasResult();
  $$unsubscribe_search();
  $$unsubscribe_hoverStore();
  $$unsubscribe_connectingInput();
  return ` <div${add_attribute(
    "class",
    $search == "" || inSearch ? "" : "invisible h-0 overflow-hidden",
    0
  )}>  <div${add_attribute(
    "class",
    classNames(
      "flex items-center justify-between p-1 cursor-pointer gap-1 truncate",
      hoverColor[color],
      $selectedComponent?.includes(id) ? openBackground[color] : $connectingInput.hoveredComponent === id ? "bg-orange-300 " : "bg-surface-secondary",
      first ? "border-t" : "",
      nested ? "border-l" : "",
      "transition-all"
    ),
    0
  )}${add_attribute("id", `output-${id}`, 0)}><div class="flex"><button ${!(selectable && !$selectedComponent?.includes(id)) || $connectingInput?.opened ? "disabled" : ""} title="Select component" class="flex items-center ml-0.5 rounded-sm bg-surface-selected hover:text-primary text-tertiary"><div${add_attribute("class", classNames("text-2xs  font-bold px-2 py-0.5 rounded-sm", $selectedComponent?.includes(id) ? idClass[color] : ""), 0)}>${escape(id)}</div> ${selectable && !$selectedComponent?.includes(id) ? `<div class="px-1">${validate_component(Pointer, "Pointer").$$render($$result, { size: 14 }, {}, {})}</div>` : ``}</button> ${selectable && renamable && $selectedComponent?.includes(id) ? `<div class="h-3">${validate_component(IdEditor, "IdEditor").$$render($$result, { id }, {}, {})}</div>` : ``}</div> <div class="text-2xs font-bold flex flex-row gap-2 items-center truncate">${["ctx", "state"].includes(id) ? `${validate_component(DocLink, "DocLink").$$render(
    $$result,
    {
      docLink: id === "state" ? "https://www.windmill.dev/docs/apps/outputs#state" : id === "ctx" ? "https://www.windmill.dev/docs/apps/outputs#app-context" : "",
      size: "xs2"
    },
    {},
    {}
  )}` : ``} ${escape(name)} <div${add_attribute("class", classNames("bg-surface-secondary rounded-sm"), 0)}>${!open2 ? `${validate_component(Chevron_down, "ChevronDown").$$render($$result, { size: 14, color: "gray" }, {}, {})}` : `${$manuallyOpened[id] ? `${validate_component(Chevron_up, "ChevronUp").$$render(
    $$result,
    {
      size: 14,
      class: manuallyOpenColor[color],
      strokeWidth: 4
    },
    {},
    {}
  )}` : `${validate_component(Chevron_up, "ChevronUp").$$render($$result, { size: 14, color: "gray" }, {}, {})}`}`}</div></div></div> <div class="${"border-b " + escape(open2 ? "h-full" : "h-0 overflow-hidden invisible", true) + " " + escape(
    $connectingInput.hoveredComponent === id && !$selectedComponent?.includes(id) ? "  bg-orange-100/40" : "",
    true
  )}"><div${add_attribute("class", classNames(nested ? "border-l ml-2" : "", open2 ? "border-t" : ""), 0)}>${slots.default ? slots.default({}) : ``}</div></div></div>`;
});
const Output = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_connectingInput;
  const { connectingInput } = getContext("AppViewerContext");
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => value);
  let { id } = $$props;
  let { first = false } = $$props;
  let { label } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.first === void 0 && $$bindings.first && first !== void 0) $$bindings.first(first);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  $$unsubscribe_connectingInput();
  return `${validate_component(OutputHeader, "OutputHeader").$$render($$result, { renamable: false, id, name: label, first }, {}, {
    default: () => {
      return `${validate_component(ComponentOutputViewer, "ComponentOutputViewer").$$render($$result, { componentId: id }, {}, {})}`;
    }
  })}`;
});
const TableActionsOutput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { gridItem } = $$props;
  if ($$props.gridItem === void 0 && $$bindings.gridItem && gridItem !== void 0) $$bindings.gridItem(gridItem);
  return `<div class="my-1">${gridItem.data.type === "tablecomponent" && gridItem.data.actionButtons.length > 0 ? `<div class="ml-2 border-l">${each(gridItem.data.actionButtons, (action, index) => {
    return `${validate_component(Output, "Output").$$render(
      $$result,
      {
        id: action.id,
        first: index === 0,
        label: "Table action"
      },
      {},
      {}
    )}`;
  })}</div>` : ``} ${(gridItem.data.type === "aggridcomponent" || gridItem.data.type === "aggridcomponentee" || gridItem.data.type === "dbexplorercomponent" || gridItem.data.type === "aggridinfinitecomponent" || gridItem.data.type === "aggridinfinitecomponentee") && gridItem.data.actions?.length > 0 ? `<div class="ml-2 border-l">${each(gridItem.data.actions, (action, index) => {
    return `${validate_component(Output, "Output").$$render(
      $$result,
      {
        id: action.id,
        first: index === 0,
        label: "Table action"
      },
      {},
      {}
    )}`;
  })}</div>` : ``}</div>`;
});
const MenuItemsOutput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { gridItem } = $$props;
  if ($$props.gridItem === void 0 && $$bindings.gridItem && gridItem !== void 0) $$bindings.gridItem(gridItem);
  return `<div class="my-1">${gridItem.data.type === "menucomponent" && gridItem.data.menuItems.length > 0 ? `<div class="ml-2 border-l">${each(gridItem.data.menuItems, (action, index) => {
    return `${validate_component(Output, "Output").$$render(
      $$result,
      {
        id: action.id,
        first: index === 0,
        label: "Menu item"
      },
      {},
      {}
    )}`;
  })}</div>` : ``}</div>`;
});
const ComponentOutput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let nameOverrides;
  let subGrids;
  let { gridItem } = $$props;
  let { first = false } = $$props;
  let { nested = false } = $$props;
  let { expanded = false } = $$props;
  getContext("AppViewerContext");
  const name = getComponentNameById(gridItem.id);
  function getComponentNameById(componentId) {
    if (gridItem?.data?.type) {
      return components?.[gridItem?.data.type]?.name ?? "Unknown";
    } else if (componentId == "ctx") {
      return "Context";
    } else if (componentId.startsWith(BG_PREFIX)) {
      return "Background";
    } else {
      return "Table action";
    }
  }
  if ($$props.gridItem === void 0 && $$bindings.gridItem && gridItem !== void 0) $$bindings.gridItem(gridItem);
  if ($$props.first === void 0 && $$bindings.first && first !== void 0) $$bindings.first(first);
  if ($$props.nested === void 0 && $$bindings.nested && nested !== void 0) $$bindings.nested(nested);
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0) $$bindings.expanded(expanded);
  nameOverrides = gridItem?.data?.type === "decisiontreecomponent" ? gridItem.data.nodes.map((n, i) => `${n.label} (Tab index ${i})`) : void 0;
  subGrids = Array.from({
    length: gridItem.data?.numberOfSubgrids ?? 0
  }).map((_, i) => `${gridItem.id}-${i}`);
  return `${validate_component(OutputHeader, "OutputHeader").$$render(
    $$result,
    {
      id: gridItem.id,
      name: getComponentNameById(gridItem.id),
      first,
      nested
    },
    {},
    {
      default: () => {
        return `${validate_component(ComponentOutputViewer, "ComponentOutputViewer").$$render($$result, { componentId: gridItem.id }, {}, {})} ${validate_component(SubGridOutput, "SubGridOutput").$$render(
          $$result,
          {
            name,
            nameOverrides,
            expanded,
            subGrids,
            parentId: gridItem.id
          },
          {},
          {}
        )} ${validate_component(TableActionsOutput, "TableActionsOutput").$$render($$result, { gridItem }, {}, {})} ${validate_component(MenuItemsOutput, "MenuItemsOutput").$$render($$result, { gridItem }, {}, {})}`;
      }
    }
  )}`;
});
const BackgroundScriptOutput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_connectingInput;
  const { connectingInput } = getContext("AppViewerContext");
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => value);
  let { id } = $$props;
  let { name } = $$props;
  let { first = false } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.first === void 0 && $$bindings.first && first !== void 0) $$bindings.first(first);
  $$unsubscribe_connectingInput();
  return `${validate_component(OutputHeader, "OutputHeader").$$render(
    $$result,
    {
      renamable: false,
      selectable: true,
      id,
      name,
      color: "blue",
      first
    },
    {},
    {
      default: () => {
        return `${validate_component(ComponentOutputViewer, "ComponentOutputViewer").$$render($$result, { componentId: id }, {}, {})}`;
      }
    }
  )}`;
});
const BackgroundScriptsOutput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  const { app } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_app();
  return `${each($app.hiddenInlineScripts ?? [], (action, index) => {
    return `${!action.hidden ? `${validate_component(BackgroundScriptOutput, "BackgroundScriptOutput").$$render(
      $$result,
      {
        id: BG_PREFIX + index,
        name: action.name,
        first: index === 0
      },
      {},
      {}
    )}` : ``}`;
  })}`;
});
const ContextPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $connectingInput, $$unsubscribe_connectingInput;
  let $search, $$unsubscribe_search;
  let $app, $$unsubscribe_app;
  const { connectingInput, app } = getContext("AppViewerContext");
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => $connectingInput = value);
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  const { search } = getContext("ContextPanel");
  $$unsubscribe_search = subscribe(search, (value) => $search = value);
  let hasState = false;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(PanelSection, "PanelSection").$$render(
      $$result,
      {
        noPadding: true,
        titlePadding: "px-2 pt-2",
        title: "Outputs"
      },
      {},
      {
        action: () => {
          return `<div class="p-0.5">${validate_component(DocLink, "DocLink").$$render(
            $$result,
            {
              docLink: "https://www.windmill.dev/docs/apps/outputs"
            },
            {},
            {}
          )}</div> `;
        },
        default: () => {
          return `<div${add_attribute(
            "class",
            classNames("bg-surface w-full h-full z-30 overflow-auto", $connectingInput.opened ? "border-blue-500 border-t-2 border-r-2 bg-blue-50/50 dark:bg-frost-900/50 z-50" : ""),
            0
          )}><div class="min-w-[150px]"><div class="sticky z-10 top-0 left-0 w-full p-1.5 bg-surface">${validate_component(ClearableInput, "ClearableInput").$$render(
            $$result,
            {
              placeholder: "Search outputs...",
              value: $search
            },
            {
              value: ($$value) => {
                $search = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div> <div class="flex flex-col gap-4"><div><span class="text-xs font-semibold text-secondary p-2" data-svelte-h="svelte-tf71ne">State &amp; Context</span> ${validate_component(OutputHeader, "OutputHeader").$$render(
            $$result,
            {
              selectable: false,
              id: "ctx",
              name: "App Context",
              first: true,
              color: "blue"
            },
            {},
            {
              default: () => {
                return `${validate_component(ComponentOutputViewer, "ComponentOutputViewer").$$render($$result, { componentId: "ctx" }, {}, {})}`;
              }
            }
          )} ${validate_component(OutputHeader, "OutputHeader").$$render(
            $$result,
            {
              selectable: false,
              id: "state",
              name: "State",
              color: "blue",
              disabled: !hasState
            },
            {},
            {
              default: () => {
                return `${validate_component(ComponentOutputViewer, "ComponentOutputViewer").$$render(
                  $$result,
                  {
                    componentId: "state",
                    hasContent: hasState
                  },
                  {
                    hasContent: ($$value) => {
                      hasState = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            }
          )}</div> <div><span class="text-xs font-semibold text-secondary p-2" data-svelte-h="svelte-63djn6">Components</span> ${each($app.grid, (gridItem, index) => {
            return `${validate_component(ComponentOutput, "ComponentOutput").$$render($$result, { gridItem, first: index === 0 }, {}, {})}`;
          })}</div> <div><span class="text-xs font-semibold text-secondary p-2" data-svelte-h="svelte-1opcf28">Background runnables</span> ${validate_component(BackgroundScriptsOutput, "BackgroundScriptsOutput").$$render($$result, {}, {}, {})}</div></div></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_connectingInput();
  $$unsubscribe_search();
  $$unsubscribe_app();
  return $$rendered;
});
function computeFields(schema, defaultUserInput, fields) {
  let schemaCopy = JSON.parse(JSON.stringify(schema));
  const result = {};
  const newInputs = schemaToInputsSpec(schemaCopy);
  if (!fields) {
    return newInputs;
  }
  Object.keys(newInputs).forEach((key) => {
    const newInput = newInputs[key];
    const oldInput = fields[key];
    if (oldInput === void 0) {
      result[key] = newInput;
    } else {
      if (fieldTypeToTsType(newInput.fieldType) !== fieldTypeToTsType(oldInput.fieldType) || newInput.format !== oldInput.format || newInput.subFieldType !== oldInput.subFieldType || // An input became a select
      newInput.fieldType === "select" && oldInput.fieldType !== "select" || // The input was already a select, but the values changed
      newInput.fieldType === "select" && oldInput.fieldType === "select" && JSON.stringify(newInput.selectOptions) !== JSON.stringify(oldInput.selectOptions)) {
        result[key] = newInput;
      } else {
        result[key] = oldInput;
      }
    }
  });
  return result;
}
function processGridItemRunnable(gridItem, list) {
  const component = gridItem.data;
  if (component) {
    const componentInput = component.componentInput;
    if (component.type === "tablecomponent") {
      component.actionButtons.forEach((actionButton) => {
        if (actionButton.componentInput?.type !== "runnable") {
          return;
        }
        processRunnable(
          actionButton.componentInput.runnable,
          actionButton.componentInput.transformer,
          actionButton.id,
          list
        );
      });
    }
    if (component.type === "aggridcomponent" || component.type === "aggridcomponentee" || component.type === "dbexplorercomponent" || component.type === "aggridinfinitecomponent" || component.type === "aggridinfinitecomponentee") {
      component.actions?.forEach((actionButton) => {
        if (actionButton.componentInput?.type !== "runnable") {
          return;
        }
        processRunnable(
          actionButton.componentInput.runnable,
          actionButton.componentInput.transformer,
          actionButton.id,
          list
        );
      });
    }
    if (component.type === "menucomponent") {
      component.menuItems?.forEach((menuItem) => {
        if (menuItem.componentInput?.type !== "runnable") {
          return;
        }
        processRunnable(
          menuItem.componentInput.runnable,
          menuItem.componentInput.transformer,
          menuItem.id,
          list
        );
      });
    }
    if (componentInput?.type === "runnable") {
      processRunnable(componentInput.runnable, componentInput.transformer, gridItem.id, list);
    }
  }
  return list;
}
function getAppScripts(grid, subgrids) {
  const scriptsList = grid.reduce(
    (acc, gridComponent) => processGridItemRunnable(gridComponent, acc),
    { inline: [], imported: [], transformer: false }
  );
  if (subgrids) {
    Object.values(subgrids).forEach((subgrid) => {
      subgrid.forEach((subgridComponent) => {
        processGridItemRunnable(subgridComponent, scriptsList);
      });
    });
  }
  return scriptsList;
}
function processRunnable(runnable, transformer, id, list) {
  if (runnable?.type === void 0) {
    return;
  }
  const type = runnable.type === "runnableByPath" ? "imported" : "inline";
  list[type].push({
    name: runnable[runnable.type === "runnableByPath" ? "path" : "name"],
    id,
    transformer: transformer !== void 0
  });
}
const css = {
  code: ".panel-item.svelte-e0x8co{align-items:center;border-radius:.125rem;border-width:1px;display:flex;font-weight:400;gap:.25rem;justify-content:space-between;overflow:hidden;padding:.25rem .5rem;text-overflow:ellipsis;transition-duration:.2s;white-space:nowrap;width:100%}",
  map: null
};
const PREFIX = "script-selector-";
const InlineScriptsPanelList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let runnables;
  let $app, $$unsubscribe_app;
  let $$unsubscribe_ignoredTutorials;
  let $$unsubscribe_tutorialsToDo;
  let $selectedComponentInEditor, $$unsubscribe_selectedComponentInEditor;
  let $selectedComponent, $$unsubscribe_selectedComponent;
  $$unsubscribe_ignoredTutorials = subscribe(ignoredTutorials, (value) => value);
  $$unsubscribe_tutorialsToDo = subscribe(tutorialsToDo, (value) => value);
  const { app, selectedComponent } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => $selectedComponent = value);
  const { selectedComponentInEditor } = getContext("AppEditorContext");
  $$unsubscribe_selectedComponentInEditor = subscribe(selectedComponentInEditor, (value) => $selectedComponentInEditor = value);
  function handleSelectedComponent(selectedComponent2) {
    if (selectedComponent2 != $selectedComponentInEditor && !$selectedComponentInEditor?.includes("_transformer")) {
      set_store_value(selectedComponentInEditor, $selectedComponentInEditor = selectedComponent2?.[0], $selectedComponentInEditor);
    }
  }
  let appTutorials = void 0;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    runnables = getAppScripts($app.grid, $app.subgrids);
    {
      handleSelectedComponent($selectedComponent);
    }
    $$rendered = `${validate_component(PanelSection, "PanelSection").$$render(
      $$result,
      {
        title: "Runnables",
        id: "app-editor-runnable-panel"
      },
      {},
      {
        action: () => {
          return `${validate_component(DocLink, "DocLink").$$render(
            $$result,
            {
              docLink: "https://www.windmill.dev/docs/apps/app-runnable-panel#creating-a-runnable"
            },
            {},
            {}
          )} `;
        },
        default: () => {
          return `<div class="w-full flex flex-col gap-6 py-1"><div><div class="flex flex-col gap-2 w-full">${runnables.inline.length > 0 ? `<div class="flex gap-1 flex-col">${each(runnables.inline, ({ name, id, transformer }, index) => {
            return `<button${add_attribute("id", PREFIX + id, 0)} class="${"panel-item " + escape(
              $selectedComponentInEditor === id ? "border-blue-500 bg-blue-100 dark:bg-frost-900/50" : "hover:bg-blue-50 dark:hover:bg-frost-900/50",
              true
            ) + " svelte-e0x8co"}"><span class="text-2xs truncate">${escape(name)}</span> <div>${validate_component(Badge, "Badge").$$render($$result, { color: "indigo" }, {}, {
              default: () => {
                return `${escape(id)}`;
              }
            })} </div></button> ${transformer ? `<div class="w-full pl-4"><button${add_attribute("id", PREFIX + id + "_transformer", 0)} class="${"border flex gap-1 truncate font-normal justify-between w-full items-center px-2 py-0.5 rounded-sm duration-200; " + escape(
              $selectedComponentInEditor === id + "_transformer" ? "border-blue-500 bg-blue-100 dark:bg-frost-900/50" : "hover:bg-blue-50 dark:hover:bg-frost-900/50",
              true
            )}"><span class="text-2xs truncate" data-svelte-h="svelte-1fjvpw1">Transformer</span></button> </div>` : ``}`;
          })}</div>` : ``} ${each(runnables.imported, ({ name, id, transformer }, index) => {
            return `<button${add_attribute("id", PREFIX + id, 0)} class="${"panel-item " + escape(
              $selectedComponentInEditor === id ? "border-blue-500 bg-blue-100 dark:bg-frost-900/50" : "hover:bg-blue-50",
              true
            ) + " svelte-e0x8co"}"><span class="text-2xs truncate">${escape(name)}</span> ${validate_component(Badge, "Badge").$$render($$result, { color: "indigo" }, {}, {
              default: () => {
                return `${escape(id)}`;
              }
            })}</button> ${transformer ? `<div class="w-full pl-4"><button${add_attribute("id", PREFIX + id + "_transformer", 0)} class="${"border flex gap-1 truncate font-normal justify-between w-full items-center px-2 py-0.5 rounded-sm duration-200; " + escape(
              $selectedComponentInEditor === id + "_transformer" ? "border-blue-500 bg-blue-100 dark:bg-frost-900/50" : "hover:bg-blue-50 dark:hover:bg-frost-900/50",
              true
            )}"><span class="text-2xs truncate" data-svelte-h="svelte-1fjvpw1">Transformer</span></button> </div>` : ``}`;
          })} ${$app.unusedInlineScripts?.length > 0 ? `<div class="flex gap-1 flex-col">${each($app.unusedInlineScripts, (unusedInlineScript, index) => {
            let id = `unused-${index}`;
            return ` <button${add_attribute("id", PREFIX + id, 0)} class="${"panel-item " + escape(
              $selectedComponentInEditor === id ? "border-blue-500 bg-blue-100 dark:bg-frost-900/50" : "hover:bg-blue-50 dark:hover:bg-frost-900/50",
              true
            ) + " svelte-e0x8co"}"><span class="text-2xs truncate">${escape(unusedInlineScript.name)}</span> ${validate_component(Badge, "Badge").$$render($$result, { color: "red" }, {}, {
              default: () => {
                return `Detached`;
              }
            })} </button>`;
          })}</div>` : ``} ${runnables.inline.length == 0 && $app.unusedInlineScripts?.length == 0 && runnables.imported.length == 0 ? `<div class="text-xs text-tertiary" data-svelte-h="svelte-f07rgv">No scripts/flows</div>` : ``}</div></div> <div><div class="w-full flex justify-between items-center mb-1"><div class="text-xs text-secondary font-semibold truncate">Background runnables
					${validate_component(Tooltip, "Tooltip").$$render(
            $$result,
            {
              documentationLink: "https://www.windmill.dev/docs/apps/app-runnable-panel#background-runnables"
            },
            {},
            {
              default: () => {
                return `Background runnables can be triggered on app refresh or when their input changes. The
						result can be shared among many components.`;
              }
            }
          )}</div> ${validate_component(Button, "Button").$$render(
            $$result,
            {
              size: "xs",
              color: "light",
              variant: "border",
              btnClasses: "!rounded-full !p-1",
              title: "Create a new background runnable",
              "aria-label": "Create a new background runnable",
              id: "create-background-runnable"
            },
            {},
            {
              default: () => {
                return `${validate_component(Plus, "Plus").$$render($$result, { size: 14, class: "!text-primary" }, {}, {})}`;
              }
            }
          )}</div> <div class="flex flex-col gap-1 w-full">${$app.hiddenInlineScripts?.length > 0 ? `${each($app.hiddenInlineScripts, ({ name, hidden, transformer }, index) => {
            return `${!hidden ? (() => {
              let id = BG_PREFIX + index;
              return ` <button${add_attribute("id", PREFIX + id, 0)} class="${"panel-item " + escape(
                $selectedComponentInEditor === id ? "border-blue-500 bg-blue-100 dark:bg-frost-900/50" : "hover:bg-blue-50 dark:hover:bg-frost-900/50",
                true
              ) + " svelte-e0x8co"}"><span class="text-2xs truncate">${escape(name)}</span> ${validate_component(Badge, "Badge").$$render($$result, { color: "indigo" }, {}, {
                default: () => {
                  return `${escape(id)}`;
                }
              })}</button> ${transformer ? `<div class="w-full pl-4"><button${add_attribute("id", PREFIX + id + "_transformer", 0)} class="${"border flex gap-1 truncate font-normal justify-between w-full items-center px-2 py-0.5 rounded-sm duration-200; " + escape(
                $selectedComponentInEditor === id + "_transformer" ? "border-blue-500 bg-blue-100 dark:bg-frost-900/50" : "hover:bg-blue-50 dark:hover:bg-frost-900/50",
                true
              )}"><span class="text-2xs truncate" data-svelte-h="svelte-1fjvpw1">Transformer</span></button> </div>` : ``}`;
            })() : ``}`;
          })}` : `<div class="text-xs text-tertiary" data-svelte-h="svelte-12c3hsi">No background runnable</div>`}</div></div></div>`;
        }
      }
    )} ${validate_component(AppTutorials, "AppTutorials").$$render(
      $$result,
      { this: appTutorials },
      {
        this: ($$value) => {
          appTutorials = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_ignoredTutorials();
  $$unsubscribe_tutorialsToDo();
  $$unsubscribe_selectedComponentInEditor();
  $$unsubscribe_selectedComponent();
  return $$rendered;
});
const InlineScriptEditorDrawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let scriptEditorDrawer;
  let { inlineScript } = $$props;
  let { editor = void 0 } = $$props;
  let { isOpen = void 0 } = $$props;
  function openDrawer() {
    scriptEditorDrawer.openDrawer?.();
  }
  if ($$props.inlineScript === void 0 && $$bindings.inlineScript && inlineScript !== void 0) $$bindings.inlineScript(inlineScript);
  if ($$props.editor === void 0 && $$bindings.editor && editor !== void 0) $$bindings.editor(editor);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0) $$bindings.isOpen(isOpen);
  if ($$props.openDrawer === void 0 && $$bindings.openDrawer && openDrawer !== void 0) $$bindings.openDrawer(openDrawer);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      {
        size: "1200px",
        open: isOpen,
        this: scriptEditorDrawer
      },
      {
        open: ($$value) => {
          isOpen = $$value;
          $$settled = false;
        },
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
              forceOverflowVisible: true
            },
            {},
            {
              actions: () => {
                return `${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    size: "xs",
                    startIcon: { icon: Save },
                    disabled: true
                  },
                  {},
                  {
                    default: () => {
                      return `Automatically Synced`;
                    }
                  }
                )} `;
              },
              default: () => {
                return `${inlineScript && inlineScript.language != "frontend" ? `${validate_component(ScriptEditor, "ScriptEditor").$$render(
                  $$result,
                  {
                    noHistory: true,
                    noSyncFromGithub: true,
                    lang: inlineScript.language,
                    path: inlineScript.path ? inlineScript.path + "_fullscreen" : void 0,
                    fixedOverflowWidgets: false,
                    tag: void 0,
                    saveToWorkspace: true,
                    code: inlineScript.content,
                    schema: inlineScript.schema
                  },
                  {
                    code: ($$value) => {
                      inlineScript.content = $$value;
                      $$settled = false;
                    },
                    schema: ($$value) => {
                      inlineScript.schema = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}` : ``}`;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const RunButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $runnableComponents, $$unsubscribe_runnableComponents;
  let $$unsubscribe_runnableJobEditorPanel;
  let { id } = $$props;
  let { inlineScript = void 0 } = $$props;
  let { runLoading = false } = $$props;
  let { hideShortcut = false } = $$props;
  const { runnableComponents } = getContext("AppViewerContext");
  $$unsubscribe_runnableComponents = subscribe(runnableComponents, (value) => $runnableComponents = value);
  const { runnableJobEditorPanel } = getContext("AppEditorContext");
  $$unsubscribe_runnableJobEditorPanel = subscribe(runnableJobEditorPanel, (value) => value);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.inlineScript === void 0 && $$bindings.inlineScript && inlineScript !== void 0) $$bindings.inlineScript(inlineScript);
  if ($$props.runLoading === void 0 && $$bindings.runLoading && runLoading !== void 0) $$bindings.runLoading(runLoading);
  if ($$props.hideShortcut === void 0 && $$bindings.hideShortcut && hideShortcut !== void 0) $$bindings.hideShortcut(hideShortcut);
  $$unsubscribe_runnableComponents();
  $$unsubscribe_runnableJobEditorPanel();
  return `${$runnableComponents[id] != void 0 ? `${!runLoading ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      loading: runLoading,
      size: "xs",
      color: "dark",
      btnClasses: "!px-2 !py-1",
      shortCut: { Icon: Corner_down_left, hide: hideShortcut }
    },
    {},
    {
      default: () => {
        return `Run`;
      }
    }
  )}` : `${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: "xs",
      color: "red",
      variant: "border",
      btnClasses: "!px-2 !py-1.5"
    },
    {},
    {
      default: () => {
        return `${validate_component(Loader_2, "Loader2").$$render($$result, { size: 14, class: "animate-spin mr-2" }, {}, {})}
			Cancel`;
      }
    }
  )}`}` : ``}`;
});
const CacheTtlPopup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cache_ttl } = $$props;
  if ($$props.cache_ttl === void 0 && $$bindings.cache_ttl && cache_ttl !== void 0) $$bindings.cache_ttl(cache_ttl);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Popup, "Popup").$$render(
      $$result,
      {
        floatingConfig: {
          middleware: [
            autoPlacement({
              allowedPlacements: [
                "bottom-start",
                "bottom-end",
                "top-start",
                "top-end",
                "top",
                "bottom"
              ]
            })
          ]
        }
      },
      {},
      {
        button: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              nonCaptureEvent: true,
              btnClasses: Boolean(cache_ttl) ? "bg-blue-100 text-blue-800 border border-blue-300 hover:bg-blue-200 dark:bg-frost-700 dark:text-frost-100 dark:border-frost-600" : "bg-surface text-primay hover:bg-hover",
              color: "light",
              variant: "contained",
              size: "xs2",
              iconOnly: true,
              startIcon: { icon: Database }
            },
            {},
            {}
          )} `;
        },
        default: () => {
          return `<div class="block text-primary">${validate_component(Toggle, "Toggle").$$render(
            $$result,
            {
              checked: Boolean(cache_ttl),
              options: {
                right: "Cache the results for each possible inputs"
              }
            },
            {},
            {}
          )} <div class="mb-4"><span class="text-xs font-bold" data-svelte-h="svelte-1tr6l4z">How long to keep cache valid</span> ${cache_ttl ? `${validate_component(SecondsInput, "SecondsInput").$$render(
            $$result,
            { seconds: cache_ttl },
            {
              seconds: ($$value) => {
                cache_ttl = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : `${validate_component(SecondsInput, "SecondsInput").$$render($$result, { disabled: true }, {}, {})}`}</div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const InlineScriptEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let extraLib;
  let $$unsubscribe_stateId;
  let $worldStore, $$unsubscribe_worldStore;
  let $state, $$unsubscribe_state;
  let $userStore, $$unsubscribe_userStore;
  let $$unsubscribe_app;
  let $runnableComponents, $$unsubscribe_runnableComponents;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let inlineScriptEditorDrawer;
  let { inlineScript } = $$props;
  let { name = void 0 } = $$props;
  let { id } = $$props;
  let { defaultUserInput = false } = $$props;
  let { fields = {} } = $$props;
  let { syncFields = false } = $$props;
  let { transformer = false } = $$props;
  let { componentType = void 0 } = $$props;
  const { runnableComponents, stateId, worldStore, state, appPath, app } = getContext("AppViewerContext");
  $$unsubscribe_runnableComponents = subscribe(runnableComponents, (value) => $runnableComponents = value);
  $$unsubscribe_stateId = subscribe(stateId, (value) => value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  $$unsubscribe_app = subscribe(app, (value) => value);
  let { editor = void 0 } = $$props;
  let diffEditor;
  let simpleEditor;
  createEventDispatcher();
  let runLoading = false;
  let drawerIsOpen = void 0;
  if ($$props.inlineScript === void 0 && $$bindings.inlineScript && inlineScript !== void 0) $$bindings.inlineScript(inlineScript);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.defaultUserInput === void 0 && $$bindings.defaultUserInput && defaultUserInput !== void 0) $$bindings.defaultUserInput(defaultUserInput);
  if ($$props.fields === void 0 && $$bindings.fields && fields !== void 0) $$bindings.fields(fields);
  if ($$props.syncFields === void 0 && $$bindings.syncFields && syncFields !== void 0) $$bindings.syncFields(syncFields);
  if ($$props.transformer === void 0 && $$bindings.transformer && transformer !== void 0) $$bindings.transformer(transformer);
  if ($$props.componentType === void 0 && $$bindings.componentType && componentType !== void 0) $$bindings.componentType(componentType);
  if ($$props.editor === void 0 && $$bindings.editor && editor !== void 0) $$bindings.editor(editor);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    inlineScript && (inlineScript.path = `${defaultIfEmptyString(appPath, `u/${$userStore?.username ?? "unknown"}/newapp`)}/${name?.replaceAll(" ", "_")}`);
    extraLib = inlineScript?.language == "frontend" && worldStore ? buildExtraLib($worldStore?.outputsById ?? {}, id, $state, true) : void 0;
    $$rendered = `${inlineScript ? `${inlineScript.language != "frontend" ? `${validate_component(InlineScriptEditorDrawer, "InlineScriptEditorDrawer").$$render(
      $$result,
      {
        editor,
        isOpen: drawerIsOpen,
        this: inlineScriptEditorDrawer,
        inlineScript
      },
      {
        isOpen: ($$value) => {
          drawerIsOpen = $$value;
          $$settled = false;
        },
        this: ($$value) => {
          inlineScriptEditorDrawer = $$value;
          $$settled = false;
        },
        inlineScript: ($$value) => {
          inlineScript = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} <div class="h-full flex flex-col gap-1"><div class="flex justify-between w-full gap-2 px-2 pt-1 flex-row items-center">${name !== void 0 ? `${!transformer ? `<div class="flex flex-row gap-2 w-full items-center"><input placeholder="Inline script name" class="!text-xs !rounded-sm !shadow-none"${add_attribute("value", name, 0)}> <div${add_attribute(
      "title",
      "Main function parsable",
      0
    )} class="${"rounded-full !w-2 !h-2 " + escape("bg-green-300", true)}"></div></div>` : `<span class="text-xs font-semibold truncate w-full">${escape(name)} of ${escape(id)}</span>`}` : ``} <div class="flex w-full flex-row gap-1 items-center justify-end">${inlineScript ? `${validate_component(CacheTtlPopup, "CacheTtlPopup").$$render(
      $$result,
      { cache_ttl: inlineScript.cache_ttl },
      {
        cache_ttl: ($$value) => {
          inlineScript.cache_ttl = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${validate_component(ScriptGen, "ScriptGen").$$render(
      $$result,
      {
        lang: inlineScript?.language,
        editor: inlineScript?.language === "frontend" ? simpleEditor : editor,
        diffEditor,
        inlineScript: true,
        args: Object.entries(fields).reduce(
          (acc, [key, obj]) => {
            acc[key] = obj.type === "static" ? obj.value : void 0;
            return acc;
          },
          {}
        ),
        transformer
      },
      {},
      {}
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        title: "Delete",
        size: "xs2",
        color: "light",
        variant: "contained",
        "aria-label": "Delete",
        endIcon: { icon: Trash_2 },
        iconOnly: true
      },
      {},
      {}
    )} ${inlineScript.language != "frontend" ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs2",
        color: "light",
        title: "Full Editor",
        variant: "contained",
        endIcon: { icon: Maximize_2 },
        iconOnly: true
      },
      {},
      {}
    )}` : ``} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "border",
        size: "xs2",
        color: "light",
        shortCut: { key: "S" }
      },
      {},
      {
        default: () => {
          return `Format`;
        }
      }
    )} ${validate_component(RunButton, "RunButton").$$render(
      $$result,
      {
        id,
        inlineScript: !transformer ? inlineScript : void 0,
        runLoading
      },
      {
        runLoading: ($$value) => {
          runLoading = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>  <div class="border-y h-full">${!drawerIsOpen ? `${inlineScript.language != "frontend" ? `${validate_component(Editor, "Editor").$$render(
      $$result,
      {
        path: inlineScript.path,
        small: true,
        class: "flex flex-1 grow h-full",
        lang: scriptLangToEditorLang(inlineScript?.language),
        scriptLang: inlineScript.language,
        fixedOverflowWidgets: true,
        cmdEnterAction: async () => {
          if (inlineScript) {
            inlineScript.content = editor?.getCode() ?? "";
          }
          try {
            runLoading = true;
            await Promise.all($runnableComponents[id]?.cb?.map((f) => f?.(inlineScript, true)) ?? []);
          } catch {
          }
          runLoading = false;
        },
        args: Object.entries(fields).reduce(
          (acc, [key, obj]) => {
            acc[key] = obj.type === "static" ? obj.value : void 0;
            return acc;
          },
          {}
        ),
        this: editor,
        code: inlineScript.content
      },
      {
        this: ($$value) => {
          editor = $$value;
          $$settled = false;
        },
        code: ($$value) => {
          inlineScript.content = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${validate_component(SimpleEditor, "SimpleEditor").$$render(
      $$result,
      {
        class: "h-full",
        small: true,
        extraLib,
        lang: "javascript",
        domLib: true,
        cmdEnterAction: async () => {
          runLoading = true;
          await await Promise.all($runnableComponents[id]?.cb?.map((f) => f(!transformer ? inlineScript : void 0, true)));
          runLoading = false;
        },
        this: simpleEditor,
        code: inlineScript.content
      },
      {
        this: ($$value) => {
          simpleEditor = $$value;
          $$settled = false;
        },
        code: ($$value) => {
          inlineScript.content = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${validate_component(DiffEditor, "DiffEditor").$$render(
      $$result,
      {
        class: "hidden h-full",
        automaticLayout: true,
        fixedOverflowWidgets: true,
        this: diffEditor
      },
      {
        this: ($$value) => {
          diffEditor = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</div></div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_stateId();
  $$unsubscribe_worldStore();
  $$unsubscribe_state();
  $$unsubscribe_userStore();
  $$unsubscribe_app();
  $$unsubscribe_runnableComponents();
  return $$rendered;
});
const InlineScriptList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items;
  let prefilteredItems;
  let { filter = "" } = $$props;
  let { inlineScripts = [] } = $$props;
  let filteredItems = [];
  createEventDispatcher();
  if ($$props.filter === void 0 && $$bindings.filter && filter !== void 0) $$bindings.filter(filter);
  if ($$props.inlineScripts === void 0 && $$bindings.inlineScripts && inlineScripts !== void 0) $$bindings.inlineScripts(inlineScripts);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    items = inlineScripts.map((x) => ({ title: x }));
    prefilteredItems = items ?? [];
    $$rendered = `${validate_component(SearchItems, "SearchItems").$$render(
      $$result,
      {
        filter,
        items: prefilteredItems,
        f: (x) => x.summary,
        filteredItems
      },
      {
        filteredItems: ($$value) => {
          filteredItems = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="w-full flex mt-1 items-center gap-2">${slots.default ? slots.default({}) : ``} <input type="text" placeholder="Search inline scripts" class="text-2xl grow mb-4"${add_attribute("value", filter, 0)}></div> ${inlineScripts.length === 0 ? `<div class="flex flex-col w-full h-full" data-svelte-h="svelte-1bhy5r5"><div class="text-md">No detached inline scripts</div></div>` : `${filteredItems.length === 0 ? `${validate_component(NoItemFound, "NoItemFound").$$render($$result, {}, {}, {})}` : `<ul class="divide-y border rounded-md">${each(filteredItems, (item) => {
      return `<li class="flex flex-row w-full"><button class="p-4 gap-4 flex flex-row grow justify-between hover:bg-surface-hover bg-surface transition-all items-center rounded-md"><div class="flex items-center gap-4">${validate_component(RowIcon, "RowIcon").$$render($$result, { kind: "script" }, {}, {})} <div class="w-full text-left font-normal"><div class="text-primary flex-wrap text-md font-semibold mb-1">${item.marked ? `<!-- HTML_TAG_START -->${item.marked ?? ""}<!-- HTML_TAG_END -->` : `${escape(item.title ?? "")}`} </div></div> </div></button> </li>`;
    })}</ul>`}`}`;
  } while (!$$settled);
  return $$rendered;
});
const WorkspaceScriptList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let prefilteredItems;
  let $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  let { filter = "" } = $$props;
  let filteredItems = [];
  createEventDispatcher();
  if ($$props.filter === void 0 && $$bindings.filter && filter !== void 0) $$bindings.filter(filter);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    prefilteredItems = [];
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
    )} <div class="w-full flex mt-1 items-center gap-2">${slots.default ? slots.default({}) : ``} <input type="text" placeholder="Search workspace scripts" class="text-2xl grow mb-4"${add_attribute("value", filter, 0)}></div> ${`${each(Array(10).fill(0), (_) => {
      return `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[4], 0.5] }, {}, {})}`;
    })}`}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const WorkspaceFlowList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let prefilteredItems;
  let $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  let { filter = "" } = $$props;
  let filteredItems = [];
  createEventDispatcher();
  if ($$props.filter === void 0 && $$bindings.filter && filter !== void 0) $$bindings.filter(filter);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    prefilteredItems = [];
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
    )} <div class="w-full flex mt-1 items-center gap-2">${slots.default ? slots.default({}) : ``} <input type="text" placeholder="Search workspace flows" class="text-2xl grow mb-4"${add_attribute("value", filter, 0)}></div> ${`${each(Array(10).fill(0), (_) => {
      return `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[4], 0.5] }, {}, {})}`;
    })}`}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const RunnableSelector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let { defaultUserInput = false } = $$props;
  let { hideCreateScript = false } = $$props;
  let { onlyFlow = false } = $$props;
  let tab = onlyFlow ? "workspaceflows" : "inlinescripts";
  let filter = "";
  let picker;
  const { app, workspace } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  createEventDispatcher();
  if ($$props.defaultUserInput === void 0 && $$bindings.defaultUserInput && defaultUserInput !== void 0) $$bindings.defaultUserInput(defaultUserInput);
  if ($$props.hideCreateScript === void 0 && $$bindings.hideCreateScript && hideCreateScript !== void 0) $$bindings.hideCreateScript(hideCreateScript);
  if ($$props.onlyFlow === void 0 && $$bindings.onlyFlow && onlyFlow !== void 0) $$bindings.onlyFlow(onlyFlow);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "1000px", this: picker },
      {
        this: ($$value) => {
          picker = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Script/Flow Picker" }, {}, {
            default: () => {
              return `<div><div class="max-w-6xl">${validate_component(Tabs, "Tabs").$$render(
                $$result,
                { selected: tab },
                {
                  selected: ($$value) => {
                    tab = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `${!onlyFlow ? `${validate_component(Tab, "Tab").$$render($$result, { size: "sm", value: "inlinescripts" }, {}, {
                      default: () => {
                        return `<div class="flex gap-2 items-center my-1">${validate_component(Building, "Building").$$render($$result, { size: 18, strokeWidth: 1.5 }, {}, {})}
								Detached Inline Scripts</div>`;
                      }
                    })} ${validate_component(Tab, "Tab").$$render($$result, { size: "sm", value: "workspacescripts" }, {}, {
                      default: () => {
                        return `<div class="flex gap-2 items-center my-1">${validate_component(Building, "Building").$$render($$result, { size: 18, strokeWidth: 1.5 }, {}, {})}
								Workspace Scripts</div>`;
                      }
                    })}` : ``} ${validate_component(Tab, "Tab").$$render($$result, { size: "sm", value: "workspaceflows" }, {}, {
                      default: () => {
                        return `<div class="flex gap-2 items-center my-1">${validate_component(Building, "Building").$$render($$result, { size: 18, strokeWidth: 1.5 }, {}, {})}
							Workspace Flows</div>`;
                      }
                    })} ${!onlyFlow ? `${validate_component(Tab, "Tab").$$render($$result, { size: "sm", value: "hubscripts" }, {}, {
                      default: () => {
                        return `<div class="flex gap-2 items-center my-1">${validate_component(Globe_2, "Globe2").$$render($$result, { size: 18, strokeWidth: 1.5 }, {}, {})}
								Hub Scripts</div>`;
                      }
                    })}` : ``}`;
                  }
                }
              )} <div class="my-2"></div> <div class="flex flex-col gap-y-16"><div class="flex flex-col">${tab == "inlinescripts" ? `${validate_component(InlineScriptList, "InlineScriptList").$$render(
                $$result,
                {
                  inlineScripts: $app.unusedInlineScripts ? $app.unusedInlineScripts.map((uis) => uis.name) : []
                },
                {},
                {}
              )}` : `${tab == "workspacescripts" ? `${validate_component(WorkspaceScriptList, "WorkspaceScriptList").$$render($$result, {}, {}, {})}` : `${tab == "workspaceflows" ? `${validate_component(WorkspaceFlowList, "WorkspaceFlowList").$$render($$result, {}, {}, {})}` : `${tab == "hubscripts" ? `${validate_component(PickHubScript, "PickHubScript").$$render(
                $$result,
                { filter },
                {
                  filter: ($$value) => {
                    filter = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}` : ``}`}`}`}</div></div></div></div>`;
            }
          })}`;
        }
      }
    )} <div class="flex flex-col gap-2">${!hideCreateScript ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs",
        color: "light",
        variant: "border",
        startIcon: { icon: Plus },
        btnClasses: "truncate w-full",
        id: "app-editor-create-inline-script"
      },
      {},
      {
        default: () => {
          return `Create an inline script`;
        }
      }
    )}` : ``} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs",
        color: "blue",
        variant: "border",
        startIcon: { icon: Mouse_pointer },
        btnClasses: "truncate w-full"
      },
      {},
      {
        default: () => {
          return `${onlyFlow ? `Select a flow` : `Select a script or flow`}`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_app();
  return $$rendered;
});
const EmptyInlineScript = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let langs;
  let $defaultScripts, $$unsubscribe_defaultScripts;
  let $app, $$unsubscribe_app;
  $$unsubscribe_defaultScripts = subscribe(defaultScripts, (value) => $defaultScripts = value);
  let { name } = $$props;
  let { componentType = void 0 } = $$props;
  let { showScriptPicker = false } = $$props;
  let tab = "inlinescripts";
  let filter = "";
  let picker;
  const { appPath, app } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  createEventDispatcher();
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.componentType === void 0 && $$bindings.componentType && componentType !== void 0) $$bindings.componentType(componentType);
  if ($$props.showScriptPicker === void 0 && $$bindings.showScriptPicker && showScriptPicker !== void 0) $$bindings.showScriptPicker(showScriptPicker);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    langs = processLangs(void 0, $defaultScripts?.order ?? Object.keys(defaultScriptLanguages)).map((l) => [defaultScriptLanguages[l], l]).filter((x) => x[1] != "docker" && ($defaultScripts?.hidden == void 0 || !$defaultScripts.hidden.includes(x[1])));
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "1000px", this: picker },
      {
        this: ($$value) => {
          picker = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Script/Flow Picker" }, {}, {
            default: () => {
              return `<div><div class="max-w-6xl">${validate_component(Tabs, "Tabs").$$render(
                $$result,
                { selected: tab },
                {
                  selected: ($$value) => {
                    tab = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `${validate_component(Tab, "Tab").$$render($$result, { size: "sm", value: "inlinescripts" }, {}, {
                      default: () => {
                        return `<div class="flex gap-2 items-center my-1">${validate_component(Building, "Building").$$render($$result, { size: 18 }, {}, {})}
							Detached Inline Scripts</div>`;
                      }
                    })} ${validate_component(Tab, "Tab").$$render($$result, { size: "sm", value: "workspacescripts" }, {}, {
                      default: () => {
                        return `<div class="flex gap-2 items-center my-1">${validate_component(Building, "Building").$$render($$result, { size: 18 }, {}, {})}
							Workspace Scripts</div>`;
                      }
                    })} ${validate_component(Tab, "Tab").$$render($$result, { size: "sm", value: "hubscripts" }, {}, {
                      default: () => {
                        return `<div class="flex gap-2 items-center my-1">${validate_component(Globe_2, "Globe2").$$render($$result, { size: 18 }, {}, {})}
							Hub Scripts</div>`;
                      }
                    })}`;
                  }
                }
              )} <div class="my-2"></div> <div class="flex flex-col gap-y-16"><div class="flex flex-col">${tab == "inlinescripts" ? `${validate_component(InlineScriptList, "InlineScriptList").$$render(
                $$result,
                {
                  inlineScripts: $app.unusedInlineScripts ? $app.unusedInlineScripts.map((uis) => uis.name) : []
                },
                {},
                {}
              )}` : `${tab == "workspacescripts" ? `${validate_component(WorkspaceScriptList, "WorkspaceScriptList").$$render($$result, {}, {}, {})}` : `${tab == "hubscripts" ? `${validate_component(PickHubScript, "PickHubScript").$$render(
                $$result,
                { filter },
                {
                  filter: ($$value) => {
                    filter = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}` : ``}`}`}</div></div></div></div>`;
            }
          })}`;
        }
      }
    )} <div class="flex flex-col px-4 gap-2 text-sm" id="app-editor-empty-runnable"><div class="mt-2 flex justify-between gap-4" id="app-editor-runnable-header"><div class="font-bold items-baseline truncate" data-svelte-h="svelte-1o7p6bc">Choose a language</div> <div class="flex gap-2">${showScriptPicker ? `${validate_component(RunnableSelector, "RunnableSelector").$$render($$result, { hideCreateScript: true }, {}, {})}` : ``} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs",
        variant: "border",
        color: "light",
        startIcon: { icon: Git_fork },
        btnClasses: "truncate"
      },
      {},
      {
        default: () => {
          return `Fork other script`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs",
        color: "red",
        variant: "border",
        btnClasses: "truncate"
      },
      {},
      {
        default: () => {
          return `Clear`;
        }
      }
    )}</div></div> <div class="flex flex-row w-full gap-8"><div id="app-editor-backend-runnables"><div class="mb-1 text-sm font-semibold flex gap-4">Backend ${validate_component(DefaultScripts, "DefaultScripts").$$render($$result, {}, {}, {})}</div> <div class="flex flex-row flex-wrap gap-2">${each(langs, ([label, lang]) => {
      return `${validate_component(FlowScriptPicker, "FlowScriptPicker").$$render($$result, { label, lang, id: `create-${lang}-script` }, {}, {})}`;
    })}</div></div> <div id="app-editor-frontend-runnables"><div class="mb-1 text-sm font-semibold">Frontend
				${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        documentationLink: "https://www.windmill.dev/docs/apps/app-runnable-panel#frontend-scripts"
      },
      {},
      {
        default: () => {
          return `Frontend scripts are executed in the browser and can manipulate the app context directly.`;
        }
      }
    )}</div> <div>${validate_component(FlowScriptPicker, "FlowScriptPicker").$$render($$result, { label: `JavaScript`, lang: "javascript" }, {}, {})}</div></div></div></div>`;
  } while (!$$settled);
  $$unsubscribe_defaultScripts();
  $$unsubscribe_app();
  return $$rendered;
});
const InlineScriptRunnableByPath = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $$unsubscribe_stateId;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { runnable } = $$props;
  let { fields } = $$props;
  let { id } = $$props;
  const { stateId } = getContext("AppViewerContext");
  $$unsubscribe_stateId = subscribe(stateId, (value) => value);
  let drawerFlowViewer;
  let flowPath = "";
  let notFound = false;
  createEventDispatcher();
  async function refreshScript(x) {
    try {
      let { schema } = await getScriptByPath(x.path);
      if (!deepEqual(x.schema, schema)) {
        x.schema = schema;
        if (!x.schema.order) {
          x.schema.order = Object.keys(x.schema.properties ?? {});
        }
        fields = computeFields(schema, false, fields);
      }
    } catch (e) {
      notFound = true;
      console.error(e);
    }
  }
  async function refreshFlow(x) {
    try {
      const { schema } = await loadSchema($workspaceStore ?? "", x.path, "flow") ?? emptySchema();
      if (!deepEqual(x.schema, schema)) {
        x.schema = schema;
        if (!x.schema.order) {
          x.schema.order = Object.keys(x.schema.properties ?? {});
        }
        fields = computeFields(schema, false, fields);
      }
    } catch (e) {
      notFound = true;
      console.error(e);
    }
  }
  let lastRunnable = void 0;
  function refresh(runnable2) {
    if (deepEqual(runnable2, lastRunnable)) {
      return;
    }
    notFound = false;
    if (runnable2.runType == "script") {
      refreshScript(runnable2);
    } else if (runnable2.runType == "flow") {
      refreshFlow(runnable2);
    }
    lastRunnable = runnable2;
  }
  if ($$props.runnable === void 0 && $$bindings.runnable && runnable !== void 0) $$bindings.runnable(runnable);
  if ($$props.fields === void 0 && $$bindings.fields && fields !== void 0) $$bindings.fields(fields);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      refresh(runnable);
    }
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "1200px", this: drawerFlowViewer },
      {
        this: ($$value) => {
          drawerFlowViewer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Flow " + flowPath }, {}, {
            default: () => {
              return `${validate_component(FlowPathViewer, "FlowPathViewer").$$render($$result, { path: flowPath }, {}, {})}`;
            }
          })}`;
        }
      }
    )} <div class="p-2 h-full flex flex-col gap-2"><div class="flex flex-row-reverse w-full gap-2">${validate_component(RunButton, "RunButton").$$render($$result, { hideShortcut: true, id }, {}, {})} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "border",
        size: "xs",
        color: "light",
        startIcon: { icon: Refresh_cw }
      },
      {},
      {}
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs",
        variant: "border",
        color: "red",
        startIcon: { icon: Trash }
      },
      {},
      {
        default: () => {
          return `Clear`;
        }
      }
    )} ${runnable.runType == "flow" ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "border",
        size: "xs",
        color: "light",
        startIcon: { icon: Eye }
      },
      {},
      {
        default: () => {
          return `Expand`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "border",
        size: "xs",
        color: "light",
        startIcon: { icon: Pen },
        endIcon: { icon: External_link },
        target: "_blank",
        href: base + "/flows/edit/" + runnable.path + "?nodraft=true"
      },
      {},
      {
        default: () => {
          return `Edit`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "border",
        size: "xs",
        color: "light",
        startIcon: { icon: Eye },
        endIcon: { icon: External_link },
        target: "_blank",
        href: base + "/flows/get/" + runnable.path + "?workspace=" + $workspaceStore
      },
      {},
      {
        default: () => {
          return `Details`;
        }
      }
    )}` : `${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs",
        variant: "border",
        startIcon: { icon: Git_fork }
      },
      {},
      {
        default: () => {
          return `Fork`;
        }
      }
    )}`} ${validate_component(Popup, "Popup").$$render(
      $$result,
      {
        floatingConfig: {
          middleware: [
            autoPlacement({
              allowedPlacements: [
                "bottom-start",
                "bottom-end",
                "top-start",
                "top-end",
                "top",
                "bottom"
              ]
            })
          ]
        }
      },
      {},
      {
        button: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              nonCaptureEvent: true,
              btnClasses: "bg-surface text-primay hover:bg-hover",
              color: "light",
              variant: "border",
              size: "xs"
            },
            {},
            {
              default: () => {
                return `Cache`;
              }
            }
          )} `;
        },
        default: () => {
          return `<div class="block text-primary">Since this is a reference to a workspace ${escape(runnable.runType)}, set the cache in the ${escape(runnable.runType)}
				settings directly by editing it. The cache will be shared by any app or flow that uses this ${escape(runnable.runType)}.</div>`;
        }
      }
    )} <input placeholder="Background runnable name" class="!text-xs !rounded-xs"${add_attribute("value", runnable.name, 0)}></div> <div class="w-full grow overflow-y-auto">${notFound ? `<div class="text-red-400">${escape(runnable.runType)} not found at ${escape(runnable.path)} in workspace ${escape($workspaceStore)}</div>` : `${runnable.runType == "script" || runnable.runType == "hubscript" ? `<div class="border">${validate_component(FlowModuleScript, "FlowModuleScript").$$render($$result, { path: runnable.path }, {}, {})}</div>` : `${runnable.runType == "flow" ? `${validate_component(FlowPathViewer, "FlowPathViewer").$$render($$result, { path: runnable.path }, {}, {})}` : `Unrecognized runType ${escape(runnable.runType)}`}`}`}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_stateId();
  return $$rendered;
});
const InlineScriptEditorPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_app;
  let { componentInput } = $$props;
  let { defaultUserInput = false } = $$props;
  let { componentType } = $$props;
  let { id } = $$props;
  let { transformer } = $$props;
  const { app } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => value);
  createEventDispatcher();
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.defaultUserInput === void 0 && $$bindings.defaultUserInput && defaultUserInput !== void 0) $$bindings.defaultUserInput(defaultUserInput);
  if ($$props.componentType === void 0 && $$bindings.componentType && componentType !== void 0) $$bindings.componentType(componentType);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.transformer === void 0 && $$bindings.transformer && transformer !== void 0) $$bindings.transformer(transformer);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${transformer ? `${componentInput?.type == "runnable" && componentInput.transformer ? `${validate_component(InlineScriptEditor, "InlineScriptEditor").$$render(
      $$result,
      {
        transformer: true,
        defaultUserInput: false,
        id,
        componentType,
        name: "Transformer",
        inlineScript: componentInput.transformer
      },
      {
        inlineScript: ($$value) => {
          componentInput.transformer = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `<div class="px-2 pt-4 text-tertiary" data-svelte-h="svelte-190a8jl">Selected editor component is a transformer but component has no transformer</div>`}` : `${componentInput?.type == "runnable" ? `${componentInput?.runnable?.type === "runnableByName" && componentInput?.runnable?.name !== void 0 ? `${componentInput.runnable.inlineScript ? `${validate_component(InlineScriptEditor, "InlineScriptEditor").$$render(
      $$result,
      {
        defaultUserInput,
        id,
        componentType,
        syncFields: true,
        inlineScript: componentInput.runnable.inlineScript,
        name: componentInput.runnable.name,
        fields: componentInput.fields
      },
      {
        inlineScript: ($$value) => {
          componentInput.runnable.inlineScript = $$value;
          $$settled = false;
        },
        name: ($$value) => {
          componentInput.runnable.name = $$value;
          $$settled = false;
        },
        fields: ($$value) => {
          componentInput.fields = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${validate_component(EmptyInlineScript, "EmptyInlineScript").$$render(
      $$result,
      {
        componentType,
        name: componentInput.runnable.name
      },
      {},
      {}
    )}`}` : `${componentInput?.runnable?.type === "runnableByPath" && componentInput?.runnable?.path ? `${validate_component(InlineScriptRunnableByPath, "InlineScriptRunnableByPath").$$render(
      $$result,
      {
        id,
        runnable: componentInput.runnable,
        fields: componentInput.fields
      },
      {
        runnable: ($$value) => {
          componentInput.runnable = $$value;
          $$settled = false;
        },
        fields: ($$value) => {
          componentInput.fields = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}`}` : ``}`}`;
  } while (!$$settled);
  $$unsubscribe_app();
  return $$rendered;
});
const InlineScriptsPanelWithTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedComponentInEditor, $$unsubscribe_selectedComponentInEditor;
  const { selectedComponentInEditor } = getContext("AppEditorContext");
  $$unsubscribe_selectedComponentInEditor = subscribe(selectedComponentInEditor, (value) => $selectedComponentInEditor = value);
  let { gridItem } = $$props;
  if ($$props.gridItem === void 0 && $$bindings.gridItem && gridItem !== void 0) $$bindings.gridItem(gridItem);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${gridItem?.data?.id === $selectedComponentInEditor || gridItem?.data?.id + "_transformer" === $selectedComponentInEditor ? `${validate_component(InlineScriptEditorPanel, "InlineScriptEditorPanel").$$render(
      $$result,
      {
        defaultUserInput: gridItem.data?.type == "formcomponent" || gridItem?.data?.type == "formbuttoncomponent",
        id: gridItem.data.id,
        componentType: gridItem.data.type,
        transformer: $selectedComponentInEditor?.endsWith("_transformer"),
        componentInput: gridItem.data.componentInput
      },
      {
        componentInput: ($$value) => {
          gridItem.data.componentInput = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${gridItem?.data?.type === "tablecomponent" ? `${each(gridItem.data.actionButtons, (actionButton, index) => {
      return `${actionButton?.id === $selectedComponentInEditor || actionButton?.id + "_transformer" === $selectedComponentInEditor ? `${validate_component(InlineScriptEditorPanel, "InlineScriptEditorPanel").$$render(
        $$result,
        {
          componentType: actionButton.type,
          id: actionButton.id,
          transformer: $selectedComponentInEditor?.endsWith("_transformer"),
          componentInput: actionButton.componentInput
        },
        {
          componentInput: ($$value) => {
            actionButton.componentInput = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : ``}`;
    })}` : ``} ${(gridItem?.data?.type === "aggridcomponent" || gridItem?.data?.type === "aggridcomponentee" || gridItem?.data?.type === "dbexplorercomponent" || gridItem?.data?.type === "aggridinfinitecomponent" || gridItem?.data?.type === "aggridinfinitecomponentee") && Array.isArray(gridItem.data.actions) ? `${each(gridItem.data.actions, (actionButton, index) => {
      return `${actionButton?.id === $selectedComponentInEditor || actionButton?.id + "_transformer" === $selectedComponentInEditor ? `${validate_component(InlineScriptEditorPanel, "InlineScriptEditorPanel").$$render(
        $$result,
        {
          componentType: actionButton.type,
          id: actionButton.id,
          transformer: $selectedComponentInEditor?.endsWith("_transformer"),
          componentInput: actionButton.componentInput
        },
        {
          componentInput: ($$value) => {
            actionButton.componentInput = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : ``}`;
    })}` : ``} ${gridItem?.data?.type === "menucomponent" ? `${each(gridItem.data.menuItems, (actionButton, index) => {
      return `${actionButton?.id === $selectedComponentInEditor || actionButton?.id + "_transformer" === $selectedComponentInEditor ? `${validate_component(InlineScriptEditorPanel, "InlineScriptEditorPanel").$$render(
        $$result,
        {
          componentType: actionButton.type,
          id: actionButton.id,
          transformer: $selectedComponentInEditor?.endsWith("_transformer"),
          componentInput: actionButton.componentInput
        },
        {
          componentInput: ($$value) => {
            actionButton.componentInput = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : ``}`;
    })}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_selectedComponentInEditor();
  return $$rendered;
});
const InlineScriptHiddenRunnable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_runnableComponents;
  let { runnable } = $$props;
  let { id } = $$props;
  let { transformer } = $$props;
  const { runnableComponents } = getContext("AppViewerContext");
  $$unsubscribe_runnableComponents = subscribe(runnableComponents, (value) => value);
  createEventDispatcher();
  if ($$props.runnable === void 0 && $$bindings.runnable && runnable !== void 0) $$bindings.runnable(runnable);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.transformer === void 0 && $$bindings.transformer && transformer !== void 0) $$bindings.transformer(transformer);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${transformer ? `${runnable.transformer ? `${validate_component(InlineScriptEditor, "InlineScriptEditor").$$render(
      $$result,
      {
        transformer: true,
        defaultUserInput: false,
        id,
        componentType: void 0,
        name: "Transformer",
        inlineScript: runnable.transformer
      },
      {
        inlineScript: ($$value) => {
          runnable.transformer = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `<div class="px-2 pt-4 text-tertiary" data-svelte-h="svelte-190a8jl">Selected editor component is a transformer but component has no transformer</div>`}` : `${runnable?.type === "runnableByName" && runnable.inlineScript ? `${validate_component(InlineScriptEditor, "InlineScriptEditor").$$render(
      $$result,
      {
        id,
        syncFields: true,
        inlineScript: runnable.inlineScript,
        name: runnable.name,
        fields: runnable.fields
      },
      {
        inlineScript: ($$value) => {
          runnable.inlineScript = $$value;
          $$settled = false;
        },
        name: ($$value) => {
          runnable.name = $$value;
          $$settled = false;
        },
        fields: ($$value) => {
          runnable.fields = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${runnable?.type == "runnableByPath" ? `${validate_component(InlineScriptRunnableByPath, "InlineScriptRunnableByPath").$$render(
      $$result,
      { id, runnable, fields: runnable.fields },
      {
        runnable: ($$value) => {
          runnable = $$value;
          $$settled = false;
        },
        fields: ($$value) => {
          runnable.fields = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${validate_component(EmptyInlineScript, "EmptyInlineScript").$$render(
      $$result,
      {
        name: runnable.name,
        showScriptPicker: true
      },
      {},
      {}
    )}`}`}`}`;
  } while (!$$settled);
  $$unsubscribe_runnableComponents();
  return $$rendered;
});
const InlineScriptsPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let gridItem;
  let hiddenInlineScript;
  let unusedInlineScript;
  let $app, $$unsubscribe_app;
  let $$unsubscribe_workspaceStore;
  let $selectedComponentInEditor, $$unsubscribe_selectedComponentInEditor;
  let $$unsubscribe_runnableComponents;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  const { app, runnableComponents } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_runnableComponents = subscribe(runnableComponents, (value) => value);
  const { selectedComponentInEditor } = getContext("AppEditorContext");
  $$unsubscribe_selectedComponentInEditor = subscribe(selectedComponentInEditor, (value) => $selectedComponentInEditor = value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    gridItem = $selectedComponentInEditor && !$selectedComponentInEditor.startsWith(BG_PREFIX) ? findGridItem($app, $selectedComponentInEditor?.split("_")?.[0]) : void 0;
    hiddenInlineScript = $app?.hiddenInlineScripts?.findIndex((k_, index) => {
      const [prefix, id] = $selectedComponentInEditor?.split("_") || [];
      if (prefix !== "bg") return false;
      return Number(id) === index;
    });
    unusedInlineScript = $app?.unusedInlineScripts?.findIndex((k_, index) => `unused-${index}` === $selectedComponentInEditor);
    $$rendered = `${validate_component(SplitPanesWrapper, "SplitPanesWrapper").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Splitpanes, "Splitpanes").$$render($$result, { class: "!overflow-visible" }, {}, {
          default: () => {
            return `${validate_component(Pane, "Pane").$$render($$result, { size: 25 }, {}, {
              default: () => {
                return `${validate_component(InlineScriptsPanelList, "InlineScriptsPanelList").$$render($$result, {}, {}, {})}`;
              }
            })} ${validate_component(Pane, "Pane").$$render($$result, { size: 75 }, {}, {
              default: () => {
                return `${!$selectedComponentInEditor ? `<div class="text-sm text-secondary text-center py-8 px-2" data-svelte-h="svelte-1mmpzl5">Select a script on the left panel</div>` : `${gridItem ? `${validate_component(InlineScriptsPanelWithTable, "InlineScriptsPanelWithTable").$$render(
                  $$result,
                  { gridItem },
                  {
                    gridItem: ($$value) => {
                      gridItem = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}` : `${unusedInlineScript > -1 && $app.unusedInlineScripts?.[unusedInlineScript] ? `${validate_component(InlineScriptEditor, "InlineScriptEditor").$$render(
                  $$result,
                  {
                    id: `unused-${unusedInlineScript}`,
                    name: $app.unusedInlineScripts[unusedInlineScript].name,
                    inlineScript: $app.unusedInlineScripts[unusedInlineScript].inlineScript
                  },
                  {
                    name: ($$value) => {
                      $app.unusedInlineScripts[unusedInlineScript].name = $$value;
                      $$settled = false;
                    },
                    inlineScript: ($$value) => {
                      $app.unusedInlineScripts[unusedInlineScript].inlineScript = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}` : `${hiddenInlineScript > -1 ? `${$app.hiddenInlineScripts?.[hiddenInlineScript] ? `${validate_component(InlineScriptHiddenRunnable, "InlineScriptHiddenRunnable").$$render(
                  $$result,
                  {
                    transformer: $selectedComponentInEditor?.endsWith("_transformer"),
                    id: BG_PREFIX + hiddenInlineScript,
                    runnable: $app.hiddenInlineScripts[hiddenInlineScript]
                  },
                  {
                    runnable: ($$value) => {
                      $app.hiddenInlineScripts[hiddenInlineScript] = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}` : ``}` : `<div class="text-sm text-tertiary text-center py-8 px-2">No script found at id ${escape($selectedComponentInEditor)}</div>`}`}`}`}`;
              }
            })}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_workspaceStore();
  $$unsubscribe_selectedComponentInEditor();
  $$unsubscribe_runnableComponents();
  return $$rendered;
});
const ComponentNavigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let componentCallbacks = void 0;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(ComponentCallbacks, "ComponentCallbacks").$$render(
      $$result,
      { this: componentCallbacks },
      {
        this: ($$value) => {
          componentCallbacks = $$value;
          $$settled = false;
        }
      },
      {}
    )} `;
  } while (!$$settled);
  return $$rendered;
});
const TITLE_PREFIX = "Css.";
const CssHelperPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_app;
  createEventDispatcher();
  const { app } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => value);
  const entries = [
    {
      type: "app",
      name: "App",
      icon: Layout_dashboard,
      ids: ["viewer", "grid", "component"].map((id) => ({ id, forceStyle: true, forceClass: true }))
    },
    {
      type: "quillcomponent",
      name: "Rich Text Editor",
      icon: Text_cursor_input,
      ids: ["q"].map((id) => ({ id, forceStyle: true, forceClass: true }))
    },
    ...Object.entries(ccomponents).filter(([key]) => key !== "quillcomponent").map(([type, { name, icon, customCss }]) => ({
      type,
      name,
      icon,
      ids: Object.entries(customCss).map(([id, v]) => ({
        id,
        forceStyle: v?.style != void 0,
        forceClass: v?.["class"] != void 0
      }))
    }))
  ];
  entries.sort((a, b) => a.name.localeCompare(b.name));
  let search = "";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="p-2">${validate_component(ClearableInput, "ClearableInput").$$render(
      $$result,
      { placeholder: "Search...", value: search },
      {
        value: ($$value) => {
          search = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="h-[calc(100%-50px)] overflow-auto relative">${each(
      search != "" ? entries.filter((x) => x.name.toLowerCase().includes(search.toLowerCase())) : entries,
      ({ type, name, icon, ids }) => {
        return `${ids.length > 0 ? `${validate_component(ListItem, "ListItem").$$render($$result, { title: name, prefix: TITLE_PREFIX }, {}, {
          title: () => {
            return `<div slot="title" class="flex items-center">${validate_component(icon || missing_component, "svelte:component").$$render($$result, { size: 18 }, {}, {})} <span class="ml-1">${escape(name)}</span> </div>`;
          },
          default: () => {
            return `<div class="py-2">${each(customisationByComponent.filter((c) => c.components.includes(type)), (customisation) => {
              return `${customisation.link ? `<a${add_attribute("href", customisation.link, 0)} target="_blank" class="text-frost-500 dark:text-frost-300 font-semibold text-xs"><div class="flex flex-row gap-2">See documentation
									${validate_component(External_link, "ExternalLink").$$render($$result, { size: "16" }, {}, {})}</div> </a>` : ``} ${validate_component(Tabs, "Tabs").$$render($$result, { selected: "selectors" }, {}, {
                content: () => {
                  return `<div slot="content" class="h-full">${validate_component(TabContent, "TabContent").$$render(
                    $$result,
                    {
                      value: "selectors",
                      class: "h-full mt-2 "
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(DataTable, "DataTable").$$render($$result, { size: "sm" }, {}, {
                          default: () => {
                            return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                              default: () => {
                                return `<tr>${validate_component(Cell, "Cell").$$render($$result, { head: true, first: true }, {}, {
                                  default: () => {
                                    return `Selector`;
                                  }
                                })} ${validate_component(Cell, "Cell").$$render($$result, { head: true }, {}, {
                                  default: () => {
                                    return `Comment`;
                                  }
                                })} ${validate_component(Cell, "Cell").$$render($$result, { head: true, last: true }, {}, {})}</tr> `;
                              }
                            })} ${each(customisation.selectors, ({ selector, comment }) => {
                              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(Cell, "Cell").$$render($$result, { first: true }, {}, {
                                    default: () => {
                                      return `${validate_component(Badge, "Badge").$$render($$result, { color: "gray" }, {}, {
                                        default: () => {
                                          return `${escape(selector)}`;
                                        }
                                      })} `;
                                    }
                                  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${comment ? `<div class="max-w-24 whitespace-pre-wrap">${escape(comment)}</div>` : ``} `;
                                    }
                                  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${validate_component(Button, "Button").$$render($$result, { size: "xs2", color: "light" }, {}, {
                                        default: () => {
                                          return `${validate_component(Arrow_up_square, "ArrowUpSquare").$$render($$result, { size: 16 }, {}, {})} `;
                                        }
                                      })} `;
                                    }
                                  })} `;
                                }
                              })}`;
                            })} `;
                          }
                        })} `;
                      }
                    }
                  )} ${validate_component(TabContent, "TabContent").$$render($$result, { value: "variables", class: "h-full mt-2" }, {}, {
                    default: () => {
                      return `${validate_component(DataTable, "DataTable").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                            default: () => {
                              return `<tr>${validate_component(Cell, "Cell").$$render($$result, { head: true, first: true }, {}, {
                                default: () => {
                                  return `Variable`;
                                }
                              })} ${validate_component(Cell, "Cell").$$render($$result, { head: true }, {}, {
                                default: () => {
                                  return `Default value`;
                                }
                              })} ${validate_component(Cell, "Cell").$$render($$result, { head: true }, {}, {
                                default: () => {
                                  return `Comment`;
                                }
                              })} ${validate_component(Cell, "Cell").$$render($$result, { head: true, last: true }, {}, {})}</tr> `;
                            }
                          })} ${each(customisation.variables, ({ variable, value, comment }) => {
                            return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(Cell, "Cell").$$render($$result, { first: true }, {}, {
                                  default: () => {
                                    return `${validate_component(Badge, "Badge").$$render($$result, { color: "gray" }, {}, {
                                      default: () => {
                                        return `${escape(variable)}`;
                                      }
                                    })} `;
                                  }
                                })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${validate_component(Badge, "Badge").$$render($$result, { color: "gray" }, {}, {
                                      default: () => {
                                        return `${escape(value)}`;
                                      }
                                    })} `;
                                  }
                                })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                                  default: () => {
                                    return `${comment ? `<div class="w-80 whitespace-pre-wrap">${escape(comment)}</div>` : ``} `;
                                  }
                                })} ${validate_component(Cell, "Cell").$$render($$result, { sticky: true }, {}, {
                                  default: () => {
                                    return `${validate_component(Button, "Button").$$render(
                                      $$result,
                                      {
                                        size: "xs2",
                                        color: "light",
                                        wrapperClasses: "px-2 py-3.5 bg-surface"
                                      },
                                      {},
                                      {
                                        default: () => {
                                          return `${validate_component(Arrow_up_square, "ArrowUpSquare").$$render($$result, { size: 16 }, {}, {})} `;
                                        }
                                      }
                                    )} `;
                                  }
                                })} `;
                              }
                            })}`;
                          })} `;
                        }
                      })} `;
                    }
                  })} </div>`;
                },
                default: () => {
                  return `${customisation.selectors.length > 0 ? `${validate_component(Tab, "Tab").$$render($$result, { value: "selectors", size: "xs" }, {}, {
                    default: () => {
                      return `Selectors (${escape(customisation.selectors.length)})
								`;
                    }
                  })}` : ``} ${customisation.variables.length > 0 ? `${validate_component(Tab, "Tab").$$render($$result, { value: "variables", size: "xs" }, {}, {
                    default: () => {
                      return `<div class="flex flex-row gap-2 justify-center-center items-center">Variables (${escape(customisation.variables.length)})</div> `;
                    }
                  })}` : ``} `;
                }
              })}`;
            })}</div> `;
          }
        })}` : ``}`;
      }
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_app();
  return $$rendered;
});
const ThemeNameEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  let { row } = $$props;
  let editedName = row.name;
  createEventDispatcher();
  if ($$props.row === void 0 && $$bindings.row && row !== void 0) $$bindings.row(row);
  $$unsubscribe_workspaceStore();
  return `${validate_component(Popup, "Popup").$$render(
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
            size: "xs2",
            nonCaptureEvent: true
          },
          {},
          {
            default: () => {
              return `<div class="flex flex-row gap-1 items-center">${validate_component(Pen, "Pen").$$render($$result, { size: 16 }, {}, {})}</div>`;
            }
          }
        )} `;
      },
      default: ({ close: close2 }) => {
        return `<div class="flex flex-col w-80 gap-2"><div class="leading-6 font-semibold text-xs" data-svelte-h="svelte-1x6sz2a">Edit theme name</div> <div class="flex flex-row gap-2"><input${add_attribute("value", editedName, 0)}> ${validate_component(Button, "Button").$$render($$result, { color: "dark", size: "xs" }, {}, {
          default: () => {
            return `Update`;
          }
        })}</div></div>`;
      }
    }
  )}`;
});
const ThemeDrawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { theme } = $$props;
  let code = void 0;
  let codeDrawer;
  async function openDrawer() {
    codeDrawer.openDrawer();
    code = await resolveTheme(theme, $workspaceStore);
  }
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0) $$bindings.theme(theme);
  if ($$props.openDrawer === void 0 && $$bindings.openDrawer && openDrawer !== void 0) $$bindings.openDrawer(openDrawer);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(HighlightTheme, "HighlightTheme").$$render($$result, {}, {}, {})} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { this: codeDrawer },
      {
        this: ($$value) => {
          codeDrawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Theme viewer" }, {}, {
            default: () => {
              return `<div class="p-2 border rounded-sm">${validate_component(Highlight, "Highlight").$$render($$result, { code: code ?? "", language: css$5 }, {}, {})}</div>`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const ThemeRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let type;
  let $app, $$unsubscribe_app;
  let $$unsubscribe_previewTheme;
  let $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  let { previewThemePath = void 0 } = $$props;
  let { row } = $$props;
  const { previewTheme, app } = getContext("AppViewerContext");
  $$unsubscribe_previewTheme = subscribe(previewTheme, (value) => value);
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $app?.theme?.type === "inlined" ? $app.theme.css : void 0;
  createEventDispatcher();
  let themeDrawer;
  if ($$props.previewThemePath === void 0 && $$bindings.previewThemePath && previewThemePath !== void 0) $$bindings.previewThemePath(previewThemePath);
  if ($$props.row === void 0 && $$bindings.row && row !== void 0) $$bindings.row(row);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    type = $app?.theme?.type;
    $$rendered = `<tr${add_attribute("class", twMerge(previewThemePath === row.path ? "bg-blue-200" : "", "transition-all"), 0)}>${validate_component(Cell, "Cell").$$render($$result, { first: true }, {}, {
      default: () => {
        return `<div class="flex flex-row gap-1 items-center">${validate_component(ThemeNameEditor, "ThemeNameEditor").$$render($$result, { row }, {}, {})} ${escape(row.name)}</div>`;
      }
    })} ${validate_component(Cell, "Cell").$$render($$result, { last: true }, {}, {
      default: () => {
        return `<div${add_attribute("class", twMerge("flex flex-row gap-1 justify-end "), 0)}>${row.path === DEFAULT_THEME ? `${validate_component(Badge, "Badge").$$render($$result, { color: "blue", small: true }, {}, {
          default: () => {
            return `Default`;
          }
        })}` : ``} ${$app?.theme?.type === "path" && $app.theme.path === row.path ? `${validate_component(Badge, "Badge").$$render($$result, { color: "green", small: true }, {}, {
          default: () => {
            return `Active`;
          }
        })}` : ``} ${type === "inlined" ? `${validate_component(Button, "Button").$$render(
          $$result,
          {
            color: "light",
            size: "xs",
            startIcon: { icon: Save }
          },
          {},
          {
            default: () => {
              return `Update`;
            }
          }
        )}` : ``} ${$app?.theme?.type !== "path" || $app.theme.path !== row.path ? `${validate_component(Button, "Button").$$render(
          $$result,
          {
            color: "light",
            size: "xs",
            startIcon: { icon: Eye }
          },
          {},
          {
            default: () => {
              return `Preview`;
            }
          }
        )} ${validate_component(Button, "Button").$$render($$result, { color: "dark", size: "xs2" }, {}, {
          default: () => {
            return `Apply`;
          }
        })}` : ``} <button>${validate_component(ButtonDropdown, "ButtonDropdown").$$render($$result, { hasPadding: false }, {}, {
          items: () => {
            return `${validate_component(MenuItem$1, "MenuItem").$$render($$result, {}, {}, {
              default: () => {
                return `<div${add_attribute("class", classNames("!text-primary flex flex-row items-center text-left px-4 py-2 gap-2 cursor-pointer hover:bg-gray-100 !text-xs font-semibold"), 0)}>${validate_component(Code, "Code").$$render($$result, { size: 16 }, {}, {})}
								View code</div>`;
              }
            })} ${validate_component(MenuItem$1, "MenuItem").$$render($$result, {}, {}, {
              default: () => {
                return `<div${add_attribute("class", classNames("!text-primary flex flex-row items-center text-left px-4 py-2 gap-2 cursor-pointer hover:bg-gray-100 !text-xs font-semibold"), 0)}>${validate_component(Git_branch, "GitBranch").$$render($$result, { size: 16 }, {}, {})}
								Fork</div>`;
              }
            })} ${row.path !== DEFAULT_THEME ? `${validate_component(MenuItem$1, "MenuItem").$$render($$result, {}, {}, {
              default: () => {
                return `<div${add_attribute("class", classNames("!text-primary flex flex-row items-center text-left px-4 py-2 gap-2 cursor-pointer hover:bg-gray-100 !text-xs font-semibold"), 0)}>${validate_component(Pin, "Pin").$$render($$result, { size: 16 }, {}, {})}
									Make default</div>`;
              }
            })} ${validate_component(MenuItem$1, "MenuItem").$$render($$result, {}, {}, {
              default: () => {
                return `<div${add_attribute("class", classNames("!text-red-600 flex flex-row items-center text-left px-4 py-2 gap-2 cursor-pointer hover:bg-gray-100 !text-xs font-semibold"), 0)}>${validate_component(Trash, "Trash").$$render($$result, { size: 16 }, {}, {})}
									Delete</div>`;
              }
            })}` : ``}`;
          }
        })}</button></div>`;
      }
    })}</tr> ${validate_component(ThemeDrawer, "ThemeDrawer").$$render(
      $$result,
      {
        theme: { type: "path", path: row.path ?? "" },
        this: themeDrawer
      },
      {
        this: ($$value) => {
          themeDrawer = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_previewTheme();
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const ThemeList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let type;
  let $app, $$unsubscribe_app;
  let $$unsubscribe_workspaceStore;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  let $previewTheme, $$unsubscribe_previewTheme;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  const { previewTheme, app } = getContext("AppViewerContext");
  $$unsubscribe_previewTheme = subscribe(previewTheme, (value) => $previewTheme = value);
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $app?.theme?.type === "inlined" ? $app.theme.css : void 0;
  let themes = [];
  let nameField = "";
  let previewThemePath = void 0;
  onDestroy(() => {
    previewTheme.set(void 0);
    previewThemePath = void 0;
  });
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    type = $app?.theme?.type;
    $$rendered = `<div class="p-2 flex flex-col items-start w-auto gap-2 relative">${$enterpriseLicense === void 0 ? `<div class="absolute top-0 left-0 w-full h-full bg-gray-50 opacity-50 z-10 bottom-0"></div> ${validate_component(Alert, "Alert").$$render(
      $$result,
      {
        type: "warning",
        title: "Themes are available in the enterprise edition.",
        class: "w-full z-50",
        size: "xs"
      },
      {},
      {
        default: () => {
          return `Upgrade to the enterprise edition to use themes.`;
        }
      }
    )}` : ``} <div class="w-full flex flex-row gap-2 items-center"><input ${type != "inlined" ? "disabled" : ""}${add_attribute(
      "placeholder",
      type == "inlined" ? "Theme name" : "Fork a theme and edit it to create a new one",
      0
    )}${add_attribute("value", nameField, 0)}> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        disabled: type != "inlined" || nameField == "",
        color: "dark",
        size: "xs"
      },
      {},
      {
        default: () => {
          return `Create theme`;
        }
      }
    )}</div> ${`${Array.isArray(themes) && themes.length > 0 ? `<div class="flex flex-row justify-end items-center w-full h-10">${$previewTheme != void 0 ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "dark",
        variant: "border",
        size: "xs",
        startIcon: { icon: Eye_off }
      },
      {},
      {
        default: () => {
          return `Clear preview`;
        }
      }
    )}` : ``}</div> <div class="w-full">${validate_component(DataTable, "DataTable").$$render($$result, { size: "xs" }, {}, {
      default: () => {
        return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
          default: () => {
            return `<tr>${validate_component(Cell, "Cell").$$render($$result, { first: true, head: true }, {}, {
              default: () => {
                return `Path`;
              }
            })} ${validate_component(Cell, "Cell").$$render($$result, { last: true, head: true }, {}, {})}</tr>`;
          }
        })} <tbody class="divide-y">${themes && themes.length > 0 ? `${each(themes, (row) => {
          return `${validate_component(ThemeRow, "ThemeRow").$$render(
            $$result,
            { row, previewThemePath },
            {
              previewThemePath: ($$value) => {
                previewThemePath = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        })}` : `<tr data-svelte-h="svelte-1hwx9ss">Loading...</tr>`}</tbody>`;
      }
    })}</div>` : ``}`}</div>`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_workspaceStore();
  $$unsubscribe_enterpriseLicense();
  $$unsubscribe_previewTheme();
  return $$rendered;
});
const ThemeCodePreview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  let { theme = void 0 } = $$props;
  let code = void 0;
  let cssEditor = void 0;
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0) $$bindings.theme(theme);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="relative h-full"><div class="absolute z-[100] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">${slots.default ? slots.default({}) : ``}</div> <div class="absolute top-0 left-0 right-0 bottom-0 bg-gray-100 bg-opacity-50 z-50"></div> ${validate_component(SimpleEditor, "SimpleEditor").$$render(
      $$result,
      {
        class: "h-full",
        lang: "css",
        code,
        fixedOverflowWidgets: false,
        small: true,
        automaticLayout: true,
        this: cssEditor
      },
      {
        this: ($$value) => {
          cssEditor = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const CssSettings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  let $$unsubscribe_workspaceStore;
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  const { app } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  let cssEditor = void 0;
  let themeViewer = void 0;
  let selectedTab = "css";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "800px", this: themeViewer },
      {
        this: ($$value) => {
          themeViewer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "View themes" }, {}, {
            default: () => {
              return `sa`;
            }
          })}`;
        }
      }
    )} ${validate_component(Tabs, "Tabs").$$render(
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
          return `${selectedTab === "css" ? `${validate_component(SplitPanesWrapper, "SplitPanesWrapper").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Splitpanes, "Splitpanes").$$render($$result, { horizontal: true }, {}, {
                default: () => {
                  return `${validate_component(Pane, "Pane").$$render($$result, { size: 60 }, {}, {
                    default: () => {
                      return `${$enterpriseLicense === void 0 ? `<div class="p-2 flex flex-row gap-2"><div class="flex flex-row items-center text-yellow-500 text-xs"><div class="flex items-center whitespace-nowrap">${validate_component(Alert_triangle, "AlertTriangle").$$render($$result, { size: 16 }, {}, {})}
										EE only</div> ${validate_component(Tooltip, "Tooltip").$$render($$result, { light: true }, {}, {
                        default: () => {
                          return `App CSS editor is an exclusive feature of the Enterprise Edition. You can
										experiment with this feature in the editor, but please note that the changes
										will not be visible once deployed.`;
                        }
                      })}</div> <div class="flex flex-row items-center text-blue-500 text-xs">Component styling available in CE
									${validate_component(Tooltip, "Tooltip").$$render($$result, { light: true }, {}, {
                        default: () => {
                          return `You can still style components in the Community Edition in the styling section
										of the component&#39;s configuration.`;
                        }
                      })}</div></div>` : ``} <div style="${"height: calc(100% - " + escape(0, true) + "px);"}">${$app.theme?.type === "inlined" ? `${validate_component(SimpleEditor, "SimpleEditor").$$render(
                        $$result,
                        {
                          class: "h-full",
                          lang: "css",
                          fixedOverflowWidgets: true,
                          small: true,
                          automaticLayout: true,
                          code: $app.theme.css,
                          this: cssEditor
                        },
                        {
                          code: ($$value) => {
                            $app.theme.css = $$value;
                            $$settled = false;
                          },
                          this: ($$value) => {
                            cssEditor = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )}` : `${validate_component(ThemeCodePreview, "ThemeCodePreview").$$render($$result, { theme: $app.theme }, {}, {
                        default: () => {
                          return `<div class="p-2 w-min">${validate_component(Button, "Button").$$render(
                            $$result,
                            {
                              size: "xs",
                              color: "dark",
                              startIcon: { icon: Git_branch }
                            },
                            {},
                            {
                              default: () => {
                                return `Fork theme to edit`;
                              }
                            }
                          )}</div>`;
                        }
                      })}`}</div>`;
                    }
                  })} ${validate_component(Pane, "Pane").$$render($$result, { size: 40 }, {}, {
                    default: () => {
                      return `${validate_component(CssHelperPanel, "CssHelperPanel").$$render($$result, {}, {}, {})}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}` : ``} ${selectedTab === "theme" ? `${validate_component(ThemeList, "ThemeList").$$render($$result, {}, {}, {})}` : ``} `;
        },
        default: () => {
          return `${validate_component(Tab, "Tab").$$render($$result, { size: "xs", value: "css" }, {}, {
            default: () => {
              return `Code`;
            }
          })} ${validate_component(Tab, "Tab").$$render($$result, { size: "xs", value: "theme" }, {}, {
            default: () => {
              return `Theme`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_enterpriseLicense();
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const ConnectionInstructions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_connectingInput;
  const { connectingInput } = getContext("AppViewerContext");
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => value);
  $$unsubscribe_connectingInput();
  return `<div class="m-2">${validate_component(Alert, "Alert").$$render($$result, { title: "Connecting", type: "info" }, {}, {
    default: () => {
      return `<div class="flex gap-2 flex-col"><div>Click on the output of the component you want to connect to on the left panel &#39;Outputs&#39; or
				in the popup by clicking the <span><div class="inline-flex"><div class="bg-red-500/90 border-red-600 px-1 py-0.5">${validate_component(Plug_2, "Plug2").$$render($$result, { size: 12 }, {}, {})}</div></div></span></div> <div>${validate_component(Button, "Button").$$render(
        $$result,
        {
          color: "blue",
          variant: "border",
          size: "xs"
        },
        {},
        {
          default: () => {
            return `Stop connecting`;
          }
        }
      )}</div></div>`;
    }
  })}</div>`;
});
const TableActions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_app;
  let $$unsubscribe_selectedComponent;
  let $$unsubscribe_errorByComponent;
  let $$unsubscribe_hoverStore;
  let { components: components2 } = $$props;
  let items = components2?.map((tab, index) => {
    return {
      value: tab,
      id: generateRandomString(),
      originalIndex: index
    };
  }) ?? [];
  let { id } = $$props;
  const { selectedComponent, app, errorByComponent, hoverStore } = getContext("AppViewerContext");
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => value);
  $$unsubscribe_app = subscribe(app, (value) => value);
  $$unsubscribe_errorByComponent = subscribe(errorByComponent, (value) => value);
  $$unsubscribe_hoverStore = subscribe(hoverStore, (value) => value);
  if ($$props.components === void 0 && $$bindings.components && components2 !== void 0) $$bindings.components(components2);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  components2 = items.map((item) => item.value);
  $$unsubscribe_app();
  $$unsubscribe_selectedComponent();
  $$unsubscribe_errorByComponent();
  $$unsubscribe_hoverStore();
  return `${components2 ? `${validate_component(PanelSection, "PanelSection").$$render($$result, { title: `Table Actions` }, {}, {
    default: () => {
      return `${components2.length == 0 ? `<span class="text-xs text-tertiary" data-svelte-h="svelte-gvtr8g">No action buttons</span>` : ``} <div class="w-full flex gap-2 flex-col mt-2"><section>${each(items, (item, index) => {
        let component = items[index].value;
        return `<div class="flex flex-row gap-2 items-center mb-2">  <div${add_attribute("class", classNames("w-full text-xs text-semibold truncate py-1.5 px-2 cursor-pointer justify-between flex items-center border rounded-md", "bg-surface hover:bg-surface-hover focus:border-primary text-secondary"), 0)}><div class="flex flex-row gap-2 items-center">${validate_component(Badge, "Badge").$$render($$result, { color: "dark-indigo" }, {}, {
          default: () => {
            return `${escape(component.id)} `;
          }
        })} <div>${component.type == "buttoncomponent" ? `Button` : `${component.type == "selectcomponent" ? `Select` : `${component.type == "checkboxcomponent" ? `Toggle` : ``}`}`} </div></div> <div class="flex flex-row items-center gap-1">${validate_component(CloseButton, "CloseButton").$$render($$result, { small: true }, {}, {})} </div></div> <div class="handle w-4 h-4" aria-label="drag-handle">${validate_component(Grip_vertical, "GripVertical").$$render($$result, { size: 16 }, {}, {})}</div> </div>`;
      })}</section></div> <div class="w-full flex gap-2">${validate_component(Button, "Button").$$render(
        $$result,
        {
          btnClasses: "gap-1 flex items-center text-sm text-tertiary",
          wrapperClasses: "w-full",
          color: "light",
          variant: "border",
          title: "Add Button"
        },
        {},
        {
          default: () => {
            return `+ ${validate_component(Mouse_pointer_square, "Inspect").$$render($$result, { size: 14 }, {}, {})}`;
          }
        }
      )} ${validate_component(Button, "Button").$$render(
        $$result,
        {
          btnClasses: "gap-1 flex items-center text-sm text-tertiary",
          wrapperClasses: "w-full",
          color: "light",
          variant: "border",
          title: "Add Toggle"
        },
        {},
        {
          default: () => {
            return `+ ${validate_component(Toggle_right, "ToggleRightIcon").$$render($$result, { size: 14 }, {}, {})}`;
          }
        }
      )} ${validate_component(Button, "Button").$$render(
        $$result,
        {
          btnClasses: "gap-1 flex items-center text-sm text-tertiary",
          wrapperClasses: "w-full",
          color: "light",
          variant: "border",
          title: "Add Select"
        },
        {},
        {
          default: () => {
            return `+ ${validate_component(List, "List").$$render($$result, { size: 14 }, {}, {})}`;
          }
        }
      )}</div>`;
    }
  })}` : ``}`;
});
const iconOnlyThreshold = 300;
const ComponentInputTypeEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_app;
  let $$unsubscribe_connectingInput;
  let { componentInput } = $$props;
  let { disableStatic = false } = $$props;
  let { evalV2editor } = $$props;
  const { onchange, connectingInput, app } = getContext("AppViewerContext");
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => value);
  $$unsubscribe_app = subscribe(app, (value) => value);
  let clientWidth;
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.disableStatic === void 0 && $$bindings.disableStatic && disableStatic !== void 0) $$bindings.disableStatic(disableStatic);
  if ($$props.evalV2editor === void 0 && $$bindings.evalV2editor && evalV2editor !== void 0) $$bindings.evalV2editor(evalV2editor);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (componentInput.fieldType == "template" && componentInput.type == "static") {
        componentInput.type = "templatev2";
        componentInput["eval"] = componentInput.value;
        componentInput["connections"] = [{ componentId: "ctx", id: "email" }];
      }
    }
    $$rendered = `${componentInput.fieldType !== "any" ? `<div class="w-full"><div class="mx-auto flex gap-2">${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
      $$result,
      {
        noWFull: true,
        selected: componentInput.type
      },
      {
        selected: ($$value) => {
          componentInput.type = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${componentInput.fieldType === "template" ? `${componentInput.type == "template" ? `${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              tooltip: `Templated string (use \${<output>.x} )`,
              value: "template",
              disabled: disableStatic,
              icon: Braces,
              label: "Template"
            },
            {},
            {}
          )}` : `${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              tooltip: `Templated string (use \${<output>.x} )`,
              value: "templatev2",
              disabled: disableStatic,
              icon: Braces,
              label: "Template"
            },
            {},
            {}
          )}`}` : `${componentInput.noStatic !== true ? `${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              label: "Static",
              value: "static",
              disabled: disableStatic,
              iconOnly: clientWidth < iconOnlyThreshold,
              icon: Pen
            },
            {},
            {}
          )}` : ``}`} ${componentInput.type == "connected" ? `${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              value: "connected",
              icon: Plug_2,
              iconOnly: clientWidth < iconOnlyThreshold,
              label: "Connect"
            },
            {},
            {}
          )}` : ``} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              value: "evalv2",
              icon: Function_square,
              iconOnly: clientWidth < iconOnlyThreshold,
              label: "Eval"
            },
            {},
            {}
          )} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              value: "runnable",
              icon: Code,
              iconOnly: clientWidth < iconOnlyThreshold,
              label: "Compute",
              id: "data-source-compute"
            },
            {},
            {}
          )}`;
        }
      }
    )} <div class="flex">${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs",
        variant: "border",
        color: "light",
        title: "Connect",
        id: `plug`
      },
      {},
      {
        default: () => {
          return `${validate_component(Plug, "Plug").$$render($$result, { size: 12 }, {}, {})}`;
        }
      }
    )}</div></div></div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_connectingInput();
  return $$rendered;
});
const AlignmentEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_app;
  const { app } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => value);
  let { component } = $$props;
  if ($$props.component === void 0 && $$bindings.component && component !== void 0) $$bindings.component(component);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${component.horizontalAlignment || component.verticalAlignment ? `<div class="flex flex-wrap gap-x-4 gap-y-1 w-full justify-end items-center"><div class="text-tertiary text-xs" data-svelte-h="svelte-kon31v">Alignment</div> ${component.horizontalAlignment ? `${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
      $$result,
      {
        noWFull: true,
        selected: component.horizontalAlignment
      },
      {
        selected: ($$value) => {
          component.horizontalAlignment = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: "left", icon: Align_start_vertical }, {}, {})} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              value: "center",
              icon: Align_center_vertical
            },
            {},
            {}
          )} ${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: "right", icon: Align_end_vertical }, {}, {})}`;
        }
      }
    )}` : ``} ${component.type !== "formcomponent" && component.verticalAlignment ? `${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
      $$result,
      {
        noWFull: true,
        selected: component.verticalAlignment
      },
      {
        selected: ($$value) => {
          component.verticalAlignment = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: "top", icon: Align_start_horizontal }, {}, {})} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              value: "center",
              icon: Align_center_horizontal
            },
            {},
            {}
          )} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              value: "bottom",
              icon: Align_end_horizontal
            },
            {},
            {}
          )}`;
        }
      }
    )}` : ``}</div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_app();
  return $$rendered;
});
function getDependencies(fields) {
  let dependencies = [];
  if (!fields) return dependencies;
  Object.values(fields).forEach((field) => {
    if (field.type === "connected" && dependencies && field.connection) {
      dependencies.push(`${field.connection.componentId} - ${field.connection.path}`);
    }
    if (field.type === "eval" && !dependencies.includes("Eval")) {
      dependencies.push(`Eval`);
    }
  });
  return dependencies;
}
function isFrontend(runnable) {
  return runnable?.type === "runnableByName" && runnable.inlineScript?.language === "frontend";
}
function isTriggerable(componentType) {
  return ["buttoncomponent", "formbuttoncomponent", "formcomponent", "steppercomponent"].includes(
    componentType
  );
}
function isTriggerOnAppLoad(appComponent) {
  return Boolean(
    appComponent?.configuration?.triggerOnAppLoad != void 0 && appComponent.configuration.triggerOnAppLoad.type == "static" && appComponent.configuration.triggerOnAppLoad.value
  );
}
function getAllTriggerEvents(appComponent, autoRefresh) {
  const events = [];
  const triggerOnAppLoad = isTriggerOnAppLoad(appComponent);
  const isTriggerableComponent = isTriggerable(appComponent.type);
  if (isTriggerableComponent) {
    events.push("click");
    if (triggerOnAppLoad) {
      events.push("start");
    }
  } else if (autoRefresh) {
    events.push("start");
    events.push("refresh");
  }
  return events;
}
const ScriptTransformer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let checked;
  let $$unsubscribe_selectedComponentInEditor;
  const { selectedComponentInEditor } = getContext("AppEditorContext");
  $$unsubscribe_selectedComponentInEditor = subscribe(selectedComponentInEditor, (value) => value);
  let { appInput } = $$props;
  let { id } = $$props;
  if ($$props.appInput === void 0 && $$bindings.appInput && appInput !== void 0) $$bindings.appInput(appInput);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  checked = Boolean(appInput.transformer);
  $$unsubscribe_selectedComponentInEditor();
  return `<div class="mt-2">${validate_component(Section, "Section").$$render(
    $$result,
    {
      label: "Transformer",
      tooltip: "A transformer is an optional frontend script that is executed right after the component's script whose purpose is to do lightweight transformation in the browser. It takes the previous computation's result as `result`",
      small: true
    },
    {},
    {
      action: () => {
        return `${validate_component(Button, "Button").$$render(
          $$result,
          {
            size: "xs",
            color: checked ? "red" : "light",
            variant: "border",
            startIcon: { icon: checked ? X : Plus }
          },
          {},
          {
            default: () => {
              return `${escape(checked ? "Remove" : "Add")}`;
            }
          }
        )}`;
      }
    }
  )}</div>`;
});
const ScriptSettingsSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { tooltip = void 0 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.tooltip === void 0 && $$bindings.tooltip && tooltip !== void 0) $$bindings.tooltip(tooltip);
  return `<div class="py-2"><div class="mb-2 text-sm font-semibold justify-between flex flex-row items-center">${escape(title)} ${tooltip ? `${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(tooltip)}`;
    }
  })}` : ``}</div> ${slots.default ? slots.default({}) : ``}</div>`;
});
const ScriptRunConfiguration = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { autoRefresh = false } = $$props;
  let { recomputeOnInputChanged = false } = $$props;
  let { canConfigureRecomputeOnInputChanged = true } = $$props;
  let { canConfigureRunOnStart = true } = $$props;
  createEventDispatcher();
  if ($$props.autoRefresh === void 0 && $$bindings.autoRefresh && autoRefresh !== void 0) $$bindings.autoRefresh(autoRefresh);
  if ($$props.recomputeOnInputChanged === void 0 && $$bindings.recomputeOnInputChanged && recomputeOnInputChanged !== void 0) $$bindings.recomputeOnInputChanged(recomputeOnInputChanged);
  if ($$props.canConfigureRecomputeOnInputChanged === void 0 && $$bindings.canConfigureRecomputeOnInputChanged && canConfigureRecomputeOnInputChanged !== void 0) $$bindings.canConfigureRecomputeOnInputChanged(canConfigureRecomputeOnInputChanged);
  if ($$props.canConfigureRunOnStart === void 0 && $$bindings.canConfigureRunOnStart && canConfigureRunOnStart !== void 0) $$bindings.canConfigureRunOnStart(canConfigureRunOnStart);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${canConfigureRecomputeOnInputChanged || canConfigureRunOnStart ? `${validate_component(ScriptSettingsSection, "ScriptSettingsSection").$$render($$result, { title: "Triggers" }, {}, {
      default: () => {
        return `<div class="flex flex-col gap-2 mb-4">${autoRefresh !== void 0 && canConfigureRunOnStart ? `<div class="flex items-center justify-between w-full gap-1"><div class="flex flex-row items-center gap-2 text-xs mb-0.5">Run on start and app refresh
						${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `You may want to disable this so that the background runnable is only triggered by
							changes to other values or triggered by another computation on a button (See &#39;Trigger
							Runnables&#39;)`;
          }
        })}</div> ${validate_component(Toggle, "Toggle").$$render(
          $$result,
          { size: "xs", checked: autoRefresh },
          {
            checked: ($$value) => {
              autoRefresh = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div>` : ``} ${recomputeOnInputChanged !== void 0 && canConfigureRecomputeOnInputChanged ? `<div class="flex items-center justify-between w-full"><div class="flex flex-row items-center gap-2 text-xs" data-svelte-h="svelte-1jmtvnd">Recompute on any input changes</div> ${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            size: "xs",
            checked: recomputeOnInputChanged
          },
          {
            checked: ($$value) => {
              recomputeOnInputChanged = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div>` : ``}</div> ${slots.default ? slots.default({}) : ``}`;
      }
    })}` : `${validate_component(ScriptSettingsSection, "ScriptSettingsSection").$$render($$result, { title: "Triggers" }, {}, {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    })}`}`;
  } while (!$$settled);
  return $$rendered;
});
const badgeClass = "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium border";
const ScriptTriggers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let changeEvents;
  let hasNoTriggers;
  let $app, $$unsubscribe_app;
  let $$unsubscribe_connectingInput;
  let $$unsubscribe_stateId;
  let { triggerEvents = [] } = $$props;
  let { inlineScript = void 0 } = $$props;
  let { isFrontend: isFrontend2 = false } = $$props;
  let { dependencies = [] } = $$props;
  let { shoudlDisplayChangeEvents = false } = $$props;
  let { id } = $$props;
  const { connectingInput, app, stateId } = getContext("AppViewerContext");
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => value);
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_stateId = subscribe(stateId, (value) => value);
  let onSuccessEvents = [];
  function computeOnSuccessEvents(app2, _id) {
    const nr = [];
    getAllGridItems(app2).forEach((x) => {
      if (!(x.data && typeof x.data == "object")) {
        return;
      }
      if (`recomputeIds` in x.data) {
        if (x.data.recomputeIds?.includes(id)) {
          nr.push(`success of ${x.id}`);
        }
      }
      if (`onToggle` in x.data) {
        if (x.data.onToggle?.includes(id)) {
          nr.push(`toggle of ${x.id}`);
        }
      }
      if (`onSelect` in x.data) {
        if (x.data.onSelect?.includes(id)) {
          nr.push(`select of ${x.id}`);
        }
      }
    });
    onSuccessEvents = nr;
  }
  const colors = {
    green: "text-green-800 border-green-600 bg-green-100",
    indigo: "text-indigo-800 border-indigo-600 bg-indigo-100",
    blue: "text-blue-800 border-blue-600 bg-blue-100"
  };
  if ($$props.triggerEvents === void 0 && $$bindings.triggerEvents && triggerEvents !== void 0) $$bindings.triggerEvents(triggerEvents);
  if ($$props.inlineScript === void 0 && $$bindings.inlineScript && inlineScript !== void 0) $$bindings.inlineScript(inlineScript);
  if ($$props.isFrontend === void 0 && $$bindings.isFrontend && isFrontend2 !== void 0) $$bindings.isFrontend(isFrontend2);
  if ($$props.dependencies === void 0 && $$bindings.dependencies && dependencies !== void 0) $$bindings.dependencies(dependencies);
  if ($$props.shoudlDisplayChangeEvents === void 0 && $$bindings.shoudlDisplayChangeEvents && shoudlDisplayChangeEvents !== void 0) $$bindings.shoudlDisplayChangeEvents(shoudlDisplayChangeEvents);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  {
    computeOnSuccessEvents($app);
  }
  changeEvents = isFrontend2 ? inlineScript?.refreshOn ? inlineScript.refreshOn.map((x) => `${x.id}.${x.key}`) : [] : dependencies;
  hasNoTriggers = triggerEvents.length === 0 && (changeEvents.length === 0 || !shoudlDisplayChangeEvents) && onSuccessEvents.length == 0;
  $$unsubscribe_app();
  $$unsubscribe_connectingInput();
  $$unsubscribe_stateId();
  return `${hasNoTriggers ? `${validate_component(Alert, "Alert").$$render(
    $$result,
    {
      type: "warning",
      title: "No triggers",
      size: "xs"
    },
    {},
    {
      default: () => {
        return `This script has no triggers. It will never run.`;
      }
    }
  )}` : `${triggerEvents.length > 0 || onSuccessEvents.length > 0 ? `<div class="text-xs font-semibold text-secondary mb-1" data-svelte-h="svelte-1cft7gz">Events</div> <div class="flex flex-row gap-2 flex-wrap">${each(triggerEvents.concat(onSuccessEvents), (triggerEvent) => {
    return `<span${add_attribute("class", classNames(badgeClass), 0)}>${escape(triggerEvent)}</span>`;
  })}</div>` : ``} ${changeEvents.length > 0 && shoudlDisplayChangeEvents ? `<div class="text-xs font-semibold text-secondary mb-1 mt-2" data-svelte-h="svelte-1koc2bo">Values watched</div> <div class="flex flex-row gap-2 flex-wrap">${each(changeEvents, (changeEvent) => {
    return `<span${add_attribute("class", classNames(badgeClass, colors["blue"]), 0)}>${escape(changeEvent)} ${changeEvent === "Eval" ? `${validate_component(Tooltip, "Tooltip").$$render($$result, { class: "!text-blue-600 ml-1" }, {}, {
      default: () => {
        return `At least one input is configured as an evaluated input and the component will be
							triggered if the result of the eval change. Eval expressions are re-evaluated on any
							output or state changes.
						`;
      }
    })}` : ``} ${isFrontend2 ? `<button class="bg-blue-300 ml-2 p-0.5 rounded-md hover:bg-blue-400 cursor-pointer">${validate_component(X, "X").$$render($$result, { size: "14" }, {}, {})} </button>` : ``} </span>`;
  })}</div>` : ``}`} ${isFrontend2 && shoudlDisplayChangeEvents ? `<div class="flex my-4">${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: "xs2",
      color: "dark",
      startIcon: { icon: Plus }
    },
    {},
    {
      default: () => {
        return `Add dependency`;
      }
    }
  )}</div> ${(inlineScript?.suggestedRefreshOn ?? []).length > 0 ? `<div class="gap-1 flex flex-wrap mb-2"><span class="text-secondary text-sm" data-svelte-h="svelte-gypab9">Quick add:</span> ${each(inlineScript?.suggestedRefreshOn ?? [], (suggestion) => {
    return `<button${add_attribute("class", classNames("p-0.5 rounded-md hover:bg-blue-400 cursor-pointer !text-2xs text-secondary", badgeClass), 0)}>+${escape(suggestion.id)}.${escape(suggestion.key)} </button>`;
  })}</div>` : ``}` : ``}`;
});
const ComponentScriptTriggerBy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let triggerEvents;
  let isFrontend2;
  let shoudlDisplayChangeEvents;
  let { appComponent } = $$props;
  let { appInput } = $$props;
  if ($$props.appComponent === void 0 && $$bindings.appComponent && appComponent !== void 0) $$bindings.appComponent(appComponent);
  if ($$props.appInput === void 0 && $$bindings.appInput && appInput !== void 0) $$bindings.appInput(appInput);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    triggerEvents = getAllTriggerEvents(appComponent, appInput.autoRefresh);
    isFrontend2 = appInput.runnable?.type == "runnableByName" && appInput.runnable?.inlineScript?.language === "frontend";
    shoudlDisplayChangeEvents = appInput.recomputeOnInputChanged && !isTriggerable(appComponent.type);
    $$rendered = `${appInput?.runnable?.type === "runnableByName" ? `${validate_component(ScriptTriggers, "ScriptTriggers").$$render(
      $$result,
      {
        id: appComponent.id,
        dependencies: getDependencies(appInput.fields),
        isFrontend: isFrontend2,
        triggerEvents,
        shoudlDisplayChangeEvents,
        inlineScript: appInput.runnable.inlineScript
      },
      {
        inlineScript: ($$value) => {
          appInput.runnable.inlineScript = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${validate_component(ScriptTriggers, "ScriptTriggers").$$render(
      $$result,
      {
        id: appComponent.id,
        dependencies: getDependencies(appInput.fields),
        triggerEvents,
        isFrontend: isFrontend2,
        shoudlDisplayChangeEvents
      },
      {},
      {}
    )}`}`;
  } while (!$$settled);
  return $$rendered;
});
const ScriptSettingsActions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { actions = [] } = $$props;
  if ($$props.actions === void 0 && $$bindings.actions && actions !== void 0) $$bindings.actions(actions);
  return `<div class="flex flex-row gap-1 justify-end">${each(actions, (action, index) => {
    return `${validate_component(Popover, "Popover").$$render($$result, { notClickable: true, disappearTimeout: 0 }, {}, {
      text: () => {
        return `${escape(action.label)} `;
      },
      default: () => {
        return `${validate_component(Button, "Button").$$render(
          $$result,
          {
            color: action.color,
            size: "xs2",
            variant: "border"
          },
          {},
          {
            default: () => {
              return `<div class="flex flex-row gap-1 items-center">${action.icon ? `${validate_component(action.icon || missing_component, "svelte:component").$$render($$result, { size: 12 }, {}, {})}` : ``}</div> `;
            }
          }
        )} `;
      }
    })}`;
  })}</div>`;
});
const ScriptSettingHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { actions = [] } = $$props;
  let { noBorder = false } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.actions === void 0 && $$bindings.actions && actions !== void 0) $$bindings.actions(actions);
  if ($$props.noBorder === void 0 && $$bindings.noBorder && noBorder !== void 0) $$bindings.noBorder(noBorder);
  return `<div${add_attribute("class", twMerge("flex flex-row px-2 py-1 justify-between bg-surface-secondary  ", noBorder ? "" : "border rounded"), 0)}><div class="flex flex-row gap-2 items-center min-w-0">${validate_component(Function_square, "FunctionSquare").$$render($$result, { size: 16, color: "#3b82f6" }, {}, {})} <span class="text-xs font-semibold truncate">${escape(name)}</span></div> ${validate_component(ScriptSettingsActions, "ScriptSettingsActions").$$render($$result, { actions }, {}, {})}</div>`;
});
const ComponentScriptSettings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_runnableComponents;
  let $$unsubscribe_stateId;
  let { appInput } = $$props;
  let { appComponent } = $$props;
  let { hasScript } = $$props;
  let runnable = appInput.runnable;
  const { runnableComponents, stateId } = getContext("AppViewerContext");
  $$unsubscribe_runnableComponents = subscribe(runnableComponents, (value) => value);
  $$unsubscribe_stateId = subscribe(stateId, (value) => value);
  let { actions = [] } = $$props;
  if ($$props.appInput === void 0 && $$bindings.appInput && appInput !== void 0) $$bindings.appInput(appInput);
  if ($$props.appComponent === void 0 && $$bindings.appComponent && appComponent !== void 0) $$bindings.appComponent(appComponent);
  if ($$props.hasScript === void 0 && $$bindings.hasScript && hasScript !== void 0) $$bindings.hasScript(hasScript);
  if ($$props.actions === void 0 && $$bindings.actions && actions !== void 0) $$bindings.actions(actions);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div>${validate_component(ScriptSettingHeader, "ScriptSettingHeader").$$render(
      $$result,
      {
        name: runnable?.type === "runnableByName" ? runnable.name : runnable?.type === "runnableByPath" ? runnable.path : "",
        actions
      },
      {},
      {}
    )} ${!isTriggerable(appComponent.type) ? `<div class="flex items-center justify-between w-full"><div class="flex flex-row items-center gap-2 text-xs" data-svelte-h="svelte-r5zcqn">Hide Refresh Button</div> ${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        size: "xs",
        class: "my-2",
        checked: appInput.hideRefreshButton
      },
      {
        checked: ($$value) => {
          appInput.hideRefreshButton = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : ``} ${hasScript ? `${validate_component(ScriptTransformer, "ScriptTransformer").$$render(
      $$result,
      { id: appComponent.id, appInput },
      {
        appInput: ($$value) => {
          appInput = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ScriptRunConfiguration, "ScriptRunConfiguration").$$render(
      $$result,
      {
        canConfigureRecomputeOnInputChanged: !isTriggerable(appComponent.type) && !isFrontend(appInput.runnable),
        canConfigureRunOnStart: !isTriggerable(appComponent.type),
        autoRefresh: appInput.autoRefresh,
        recomputeOnInputChanged: appInput.recomputeOnInputChanged
      },
      {
        autoRefresh: ($$value) => {
          appInput.autoRefresh = $$value;
          $$settled = false;
        },
        recomputeOnInputChanged: ($$value) => {
          appInput.recomputeOnInputChanged = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ComponentScriptTriggerBy, "ComponentScriptTriggerBy").$$render($$result, { appComponent, appInput }, {}, {})}`;
        }
      }
    )}` : `${validate_component(ScriptSettingsSection, "ScriptSettingsSection").$$render($$result, { title: "Language selection" }, {}, {
      default: () => {
        return `<div class="text-xs" data-svelte-h="svelte-f92mid">Please configure the language in the inline script panel</div>`;
      }
    })}`}</div>`;
  } while (!$$settled);
  $$unsubscribe_runnableComponents();
  $$unsubscribe_stateId();
  return $$rendered;
});
const SelectedRunnable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hasScript;
  let actions;
  let $app, $$unsubscribe_app;
  const { app } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  let { appInput } = $$props;
  let { appComponent } = $$props;
  function detach() {
    if (appInput.runnable?.type === "runnableByName" && appInput.runnable.inlineScript) {
      $app.unusedInlineScripts.push({
        name: appInput.runnable.name,
        inlineScript: appInput.runnable.inlineScript
      });
      app.set($app);
      appInput = clearResultAppInput(appInput);
    }
  }
  function clear() {
    appInput = clearResultAppInput(appInput);
  }
  function getActions(hasScript2) {
    if (hasScript2) {
      return [
        ...appInput.runnable?.type === "runnableByName" && appInput.runnable.inlineScript ? [
          {
            label: "Detach",
            icon: External_link,
            color: "light",
            callback: detach
          }
        ] : [],
        {
          label: "Clear",
          icon: X,
          color: "red",
          callback: clear
        }
      ];
    } else {
      return [
        {
          label: "Clear",
          icon: X,
          color: "red",
          callback: clear
        }
      ];
    }
  }
  if ($$props.appInput === void 0 && $$bindings.appInput && appInput !== void 0) $$bindings.appInput(appInput);
  if ($$props.appComponent === void 0 && $$bindings.appComponent && appComponent !== void 0) $$bindings.appComponent(appComponent);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (appInput.autoRefresh === void 0) {
        appInput.autoRefresh = true;
      }
    }
    {
      {
        if (appInput.recomputeOnInputChanged === void 0) {
          appInput.recomputeOnInputChanged = true;
        }
        if (appInput.doNotRecomputeOnInputChanged != void 0) {
          appInput.recomputeOnInputChanged = !appInput.doNotRecomputeOnInputChanged;
          appInput.doNotRecomputeOnInputChanged = void 0;
        }
      }
    }
    hasScript = appInput?.runnable?.type === "runnableByPath" || appInput?.runnable?.type === "runnableByName" && appInput.runnable?.inlineScript !== void 0;
    actions = getActions(hasScript);
    $$rendered = `${validate_component(ComponentScriptSettings, "ComponentScriptSettings").$$render(
      $$result,
      {
        hasScript,
        actions,
        appInput,
        appComponent
      },
      {
        appInput: ($$value) => {
          appInput = $$value;
          $$settled = false;
        },
        appComponent: ($$value) => {
          appComponent = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_app();
  return $$rendered;
});
const RunnableInputEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_selectedComponentInEditor;
  let { appInput } = $$props;
  let { defaultUserInput = false } = $$props;
  let { appComponent } = $$props;
  const { selectedComponentInEditor } = getContext("AppEditorContext");
  $$unsubscribe_selectedComponentInEditor = subscribe(selectedComponentInEditor, (value) => value);
  if ($$props.appInput === void 0 && $$bindings.appInput && appInput !== void 0) $$bindings.appInput(appInput);
  if ($$props.defaultUserInput === void 0 && $$bindings.defaultUserInput && defaultUserInput !== void 0) $$bindings.defaultUserInput(defaultUserInput);
  if ($$props.appComponent === void 0 && $$bindings.appComponent && appComponent !== void 0) $$bindings.appComponent(appComponent);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${isScriptByPathDefined(appInput) || isScriptByNameDefined(appInput) ? `${validate_component(SelectedRunnable, "SelectedRunnable").$$render(
      $$result,
      { appComponent, appInput },
      {
        appInput: ($$value) => {
          appInput = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${appInput !== void 0 ? `${validate_component(RunnableSelector, "RunnableSelector").$$render(
      $$result,
      {
        hideCreateScript: appComponent.type === "flowstatuscomponent",
        onlyFlow: appComponent.type === "flowstatuscomponent",
        defaultUserInput
      },
      {},
      {}
    )}` : ``}`}`;
  } while (!$$settled);
  $$unsubscribe_selectedComponentInEditor();
  return $$rendered;
});
const STYLE_STORE_KEY = "style_store";
function createStyleStore(properties) {
  const propertyNames = properties.reduce((acc, p) => {
    Object.values(p).forEach((names) => acc.push(...names));
    return acc;
  }, []);
  const style = StyleProperty.filter((p) => propertyNames.includes(p.key)).map((p) => ({
    prop: p,
    value: ""
  }));
  const store2 = writable({
    style: [...style],
    topColors: []
  });
  return {
    subscribe: store2.subscribe,
    set: store2.set,
    update: store2.update,
    updatePropValue: (key, value) => {
      if (!key) {
        return;
      }
      store2.update((s) => {
        const index = s.style.findIndex((p) => p.prop.key === key);
        if (index !== -1) {
          s.style[index].value = value || "";
        }
        return s;
      });
    },
    getProp(key) {
      const s = get_store_value(store2);
      const index = s.style.findIndex((p) => p.prop.key === key);
      return {
        prop: s.style[index],
        index: index === -1 ? void 0 : index
      };
    },
    resetStyle: () => {
      store2.update((s) => {
        s.style = style.map((s2) => ({ ...s2, value: "" }));
        return s;
      });
    },
    setTopColors: (colors) => {
      store2.update((s) => {
        s.topColors = colors;
        return s;
      });
    }
  };
}
var StylePropertyType = /* @__PURE__ */ ((StylePropertyType2) => {
  StylePropertyType2["color"] = "color";
  StylePropertyType2["unit"] = "unit";
  StylePropertyType2["number"] = "number";
  StylePropertyType2["text"] = "text";
  return StylePropertyType2;
})(StylePropertyType || {});
const StylePropertyUnits = ["px", "em", "rem", "%", "vh", "vw"];
const StyleProperty = [
  {
    key: "display",
    value: {
      type: "text",
      options: [
        {
          text: "block",
          icon: Square
        },
        {
          text: "inline-block",
          icon: Rectangle_horizontal
        },
        {
          text: "flex",
          icon: Stretch_vertical
        },
        {
          text: "grid",
          icon: Grid_3x3
        }
      ]
    }
  },
  {
    key: "padding",
    value: [
      {
        type: "unit",
        title: "top"
      },
      {
        type: "unit",
        title: "right"
      },
      {
        type: "unit",
        title: "bottom"
      },
      {
        type: "unit",
        title: "left"
      }
    ]
  },
  {
    key: "opacity",
    value: {
      type: "number",
      step: 0.1,
      min: 0,
      max: 1
    }
  },
  {
    key: "cursor",
    value: {
      type: "text",
      options: [
        {
          text: "default",
          icon: Mouse_pointer
        },
        {
          text: "pointer",
          icon: Pointer
        }
      ]
    }
  },
  {
    key: "width",
    value: {
      type: "unit"
      /* unit */
    }
  },
  {
    key: "min-width",
    value: {
      type: "unit"
      /* unit */
    }
  },
  {
    key: "max-width",
    value: {
      type: "unit"
      /* unit */
    }
  },
  {
    key: "height",
    value: {
      type: "unit"
      /* unit */
    }
  },
  {
    key: "min-height",
    value: {
      type: "unit"
      /* unit */
    }
  },
  {
    key: "max-height",
    value: {
      type: "unit"
      /* unit */
    }
  },
  {
    key: "border",
    value: [
      {
        type: "unit",
        title: "width"
      },
      {
        type: "text",
        title: "style",
        options: [
          {
            text: "solid",
            icon: "___"
          },
          {
            text: "dashed",
            icon: "_ _"
          },
          {
            text: "dotted",
            icon: ". ."
          }
        ]
      },
      {
        type: "color",
        title: "color"
      }
    ]
  },
  {
    key: "border-radius",
    value: {
      type: "unit"
      /* unit */
    }
  },
  {
    key: "box-shadow",
    value: [
      {
        type: "unit",
        title: "offset-x"
      },
      {
        type: "unit",
        title: "offset-y"
      },
      {
        type: "unit",
        title: "blur"
      },
      {
        type: "unit",
        title: "spread"
      },
      {
        type: "color",
        title: "color"
      }
    ]
  },
  {
    key: "background-color",
    value: {
      type: "color"
      /* color */
    }
  },
  {
    key: "color",
    value: {
      type: "color"
      /* color */
    }
  },
  {
    key: "font-family",
    value: {
      type: "text"
      /* text */
    }
  },
  {
    key: "font-size",
    value: {
      type: "unit"
      /* unit */
    }
  },
  {
    key: "font-weight",
    value: {
      type: "number"
      /* number */
    }
  },
  {
    key: "font-style",
    value: {
      type: "text",
      options: [
        {
          text: "normal",
          icon: Type
        },
        {
          text: "italic",
          icon: Italic
        }
      ]
    }
  },
  {
    key: "text-align",
    value: {
      type: "text",
      options: [
        {
          text: "left",
          icon: Align_left
        },
        {
          text: "center",
          icon: Align_center
        },
        {
          text: "right",
          icon: Align_right
        },
        {
          text: "justify",
          icon: Align_justify
        }
      ]
    }
  },
  {
    key: "text-decoration",
    value: {
      type: "text",
      options: [
        {
          text: "none",
          icon: Slash
        },
        {
          text: "underline",
          icon: Underline
        },
        {
          text: "line-through",
          icon: Strikethrough
        }
      ]
    }
  },
  {
    key: "text-transform",
    value: {
      type: "text",
      options: [
        {
          text: "none",
          icon: Slash
        },
        {
          text: "capitalize",
          icon: "Aa"
        },
        {
          text: "uppercase",
          icon: "AA"
        },
        {
          text: "lowercase",
          icon: "aa"
        }
      ]
    }
  },
  {
    key: "line-height",
    value: {
      type: "unit"
      /* unit */
    }
  },
  {
    key: "letter-spacing",
    value: {
      type: "unit"
      /* unit */
    }
  },
  {
    key: "word-spacing",
    value: {
      type: "unit"
      /* unit */
    }
  },
  {
    key: "overflow",
    value: {
      type: "text",
      options: [
        {
          text: "auto",
          icon: Asterisk
        },
        {
          text: "visible",
          icon: Eye
        },
        {
          text: "hidden",
          icon: Eye_off
        },
        {
          text: "scroll",
          icon: Mouse
        }
      ]
    }
  }
];
const layoutGrouping = {
  layout: ["display", "overflow"]
};
const sizeGrouping = {
  size: ["width", "min-width", "max-width", "height", "min-height", "max-height"]
};
const spacingGrouping = {
  spacing: ["padding"]
};
const borderGrouping = {
  borders: ["border", "border-radius"]
};
const typographyGrouping = {
  typography: [
    "color",
    "font-size",
    "font-family",
    "font-weight",
    "font-style",
    "text-align",
    "text-decoration",
    "text-transform",
    "line-height",
    "letter-spacing",
    "word-spacing"
  ]
};
const backgroundGrouping = {
  background: ["background-color", "opacity", "box-shadow"]
};
const miscGrouping = {
  miscellaneous: ["cursor"]
};
const containerDefaultProps = [
  layoutGrouping,
  spacingGrouping,
  backgroundGrouping,
  borderGrouping
];
const buttonDefaultProps = [
  backgroundGrouping,
  borderGrouping,
  typographyGrouping,
  miscGrouping
];
const inputDefaultProps = [borderGrouping, typographyGrouping, miscGrouping];
const sliderDefaultProps = [
  {
    colors: ["color", "background-color", "opacity"]
  },
  borderGrouping,
  miscGrouping
];
const dividerDefaultProps = [
  {
    colors: ["background-color", "opacity"]
  },
  sizeGrouping,
  spacingGrouping,
  borderGrouping
];
const quickStyleProperties = {
  mapcomponent: {
    map: [spacingGrouping, borderGrouping]
  },
  steppercomponent: {
    container: containerDefaultProps
  },
  conditionalwrapper: {
    container: containerDefaultProps
  },
  pdfcomponent: {
    container: containerDefaultProps
  },
  formcomponent: {
    container: containerDefaultProps,
    button: buttonDefaultProps
  },
  customcomponent: {},
  htmlcomponent: {
    container: [
      layoutGrouping,
      sizeGrouping,
      spacingGrouping,
      borderGrouping,
      typographyGrouping,
      backgroundGrouping
    ]
  },
  mardowncomponent: {
    container: containerDefaultProps
  },
  iconcomponent: {
    container: containerDefaultProps,
    icon: [
      {
        colors: ["color", "background-color", "opacity"]
      },
      sizeGrouping,
      spacingGrouping,
      miscGrouping
    ]
  },
  tabscomponent: {
    tabRow: containerDefaultProps,
    allTabs: [typographyGrouping, sizeGrouping],
    selectedTab: [typographyGrouping, sizeGrouping],
    container: containerDefaultProps
  },
  textcomponent: {
    text: [typographyGrouping]
  },
  imagecomponent: {
    image: containerDefaultProps
  },
  rangecomponent: {
    handles: sliderDefaultProps,
    bar: sliderDefaultProps,
    limits: [typographyGrouping],
    values: [typographyGrouping]
  },
  tablecomponent: {
    tableHeader: containerDefaultProps,
    tableBody: containerDefaultProps,
    tableFooter: containerDefaultProps,
    container: containerDefaultProps
  },
  aggridcomponent: {},
  aggridcomponentee: {},
  aggridinfinitecomponent: {},
  aggridinfinitecomponentee: {},
  buttoncomponent: {
    button: buttonDefaultProps,
    container: containerDefaultProps
  },
  downloadcomponent: {
    button: buttonDefaultProps
  },
  drawercomponent: {
    container: containerDefaultProps
  },
  modalcomponent: {
    container: containerDefaultProps
  },
  plotlycomponent: {},
  plotlycomponentv2: {},
  selectcomponent: {
    input: inputDefaultProps
  },
  slidercomponent: {
    handles: sliderDefaultProps,
    bar: sliderDefaultProps,
    limits: [typographyGrouping],
    values: [typographyGrouping]
  },
  dateslidercomponent: {
    handles: sliderDefaultProps,
    bar: sliderDefaultProps,
    limits: [typographyGrouping],
    values: [typographyGrouping]
  },
  displaycomponent: {
    header: [...containerDefaultProps, typographyGrouping],
    container: containerDefaultProps
  },
  logcomponent: {
    header: [...containerDefaultProps, typographyGrouping],
    container: containerDefaultProps
  },
  jobidlogcomponent: {
    header: [...containerDefaultProps, typographyGrouping],
    container: containerDefaultProps
  },
  carousellistcomponent: {
    container: containerDefaultProps
  },
  flowstatuscomponent: {
    header: [...containerDefaultProps, typographyGrouping],
    container: containerDefaultProps
  },
  jobidflowstatuscomponent: {
    header: [...containerDefaultProps, typographyGrouping],
    container: containerDefaultProps
  },
  barchartcomponent: {
    container: containerDefaultProps
  },
  checkboxcomponent: {
    text: [typographyGrouping]
  },
  currencycomponent: {
    input: inputDefaultProps
  },
  piechartcomponent: {
    container: containerDefaultProps
  },
  agchartscomponent: {
    container: containerDefaultProps
  },
  agchartscomponentee: {
    container: containerDefaultProps
  },
  chartjscomponent: {
    container: containerDefaultProps
  },
  chartjscomponentv2: {
    container: containerDefaultProps
  },
  vegalitecomponent: {},
  containercomponent: {
    container: containerDefaultProps
  },
  listcomponent: {
    container: containerDefaultProps
  },
  dateinputcomponent: {
    input: inputDefaultProps
  },
  timeinputcomponent: {
    input: inputDefaultProps
  },
  datetimeinputcomponent: {
    container: inputDefaultProps
  },
  fileinputcomponent: {
    container: containerDefaultProps
  },
  s3fileinputcomponent: {
    container: containerDefaultProps
  },
  textinputcomponent: {
    input: inputDefaultProps
  },
  quillcomponent: {
    input: inputDefaultProps
  },
  textareainputcomponent: {
    input: inputDefaultProps
  },
  emailinputcomponent: {
    input: inputDefaultProps
  },
  formbuttoncomponent: {
    button: buttonDefaultProps,
    popup: containerDefaultProps
  },
  timeseriescomponent: {
    container: containerDefaultProps
  },
  multiselectcomponent: {
    input: inputDefaultProps
  },
  multiselectcomponentv2: {
    input: inputDefaultProps
  },
  numberinputcomponent: {
    input: inputDefaultProps
  },
  scatterchartcomponent: {
    container: containerDefaultProps
  },
  passwordinputcomponent: {
    input: inputDefaultProps
  },
  resourceselectcomponent: {
    input: inputDefaultProps
  },
  verticaldividercomponent: {
    divider: dividerDefaultProps,
    container: containerDefaultProps
  },
  horizontaldividercomponent: {
    divider: dividerDefaultProps,
    container: containerDefaultProps
  },
  verticalsplitpanescomponent: {
    container: containerDefaultProps
  },
  horizontalsplitpanescomponent: {
    container: containerDefaultProps
  },
  schemaformcomponent: {
    container: containerDefaultProps,
    button: buttonDefaultProps
  },
  selecttabcomponent: {
    tabRow: containerDefaultProps,
    allTabs: [typographyGrouping, sizeGrouping],
    selectedTab: [typographyGrouping, sizeGrouping]
  },
  selectstepcomponent: {},
  statcomponent: {},
  menucomponent: {
    button: buttonDefaultProps
  },
  decisiontreecomponent: {
    container: containerDefaultProps
  },
  dbexplorercomponent: {},
  alertcomponent: {
    container: containerDefaultProps,
    background: containerDefaultProps,
    icon: containerDefaultProps,
    title: containerDefaultProps,
    description: containerDefaultProps
  },
  navbarcomponent: {
    container: containerDefaultProps
  },
  dateselectcomponent: {
    input: inputDefaultProps
  },
  jobiddisplaycomponent: {
    header: [...containerDefaultProps, typographyGrouping],
    container: containerDefaultProps
  },
  recomputeallcomponent: {
    container: containerDefaultProps
  }
};
const QuickStyleProperty = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $styleStore, $$unsubscribe_styleStore;
  let { prop } = $$props;
  let { value } = $$props;
  let { inline = false } = $$props;
  const styleStore = getContext(STYLE_STORE_KEY);
  $$unsubscribe_styleStore = subscribe(styleStore, (value2) => $styleStore = value2);
  const dispatch = createEventDispatcher();
  const key = prop.key;
  const type = prop.value?.["type"];
  let unit = StylePropertyUnits[0];
  let internalValue;
  function getInteralValue(value2, propValue) {
    if (!value2) {
      return "";
    }
    if (propValue.type === StylePropertyType.number) {
      return value2;
    }
    if (propValue.type === StylePropertyType.text) {
      return +value2.replace(unit, "");
    }
    return "";
  }
  if ($$props.prop === void 0 && $$bindings.prop && prop !== void 0) $$bindings.prop(prop);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0) $$bindings.inline(inline);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    internalValue = getInteralValue(value, prop.value);
    {
      dispatch("change", value);
    }
    $$rendered = `<div${add_attribute(
      "class",
      inline && type !== StylePropertyType.color ? "" : "w-full",
      0
    )}>${prop.value["title"] ? `<div class="font-medium text-xs text-tertiary">${escape(prop.value["title"])}</div>` : ``} <div class="flex gap-1">${type === StylePropertyType.color ? `${validate_component(ColorInput, "ColorInput").$$render(
      $$result,
      { value },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${each($styleStore.topColors, (color) => {
      return `${validate_component(Popover, "Popover").$$render(
        $$result,
        {
          placement: "bottom",
          notClickable: true,
          disappearTimeout: 0,
          class: "flex"
        },
        {},
        {
          text: () => {
            return `${escape(color)}`;
          },
          default: () => {
            return `${validate_component(Button, "Button").$$render(
              $$result,
              {
                color: "light",
                size: "xs",
                variant: "border",
                btnClasses: "!p-0 !w-[34px] !h-[34px]",
                "aria-label": "Set " + key + " to " + color,
                style: `background-color: ${color};`
              },
              {},
              {}
            )} `;
          }
        }
      )}`;
    })}` : `${type === StylePropertyType.number ? `${validate_component(ClearableInput, "ClearableInput").$$render(
      $$result,
      {
        type: "number",
        inputClass: inline ? "!w-[90px]" : "",
        step: prop.value?.["step"] || 1,
        min: prop.value?.["min"],
        max: prop.value?.["max"],
        value
      },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${type === StylePropertyType.unit ? `${validate_component(ClearableInput, "ClearableInput").$$render(
      $$result,
      {
        wrapperClass: "flex items-center " + (inline ? "!grow-0" : ""),
        inputClass: "!border-r-0 !rounded-r-none " + (inline ? "!w-[90px]" : ""),
        buttonClass: "!right-9",
        type: "number",
        value: internalValue
      },
      {},
      {
        default: () => {
          return `${validate_component(Menu, "Menu").$$render(
            $$result,
            {
              noMinW: true,
              wrapperClasses: "h-full bg-surface rounded-r-md border-y border-r pr-0.5",
              popupClasses: "!mt-0"
            },
            {},
            {
              trigger: () => {
                return `<button slot="trigger" type="button" class="font-normal text-xs px-1 py-1.5 w-8 rounded mt-0.5 duration-200 hover:bg-gray-200/90">${escape(unit)}</button>`;
              },
              default: ({ close: close2 }) => {
                return `<ul class="bg-surface rounded border py-1 overflow-auto">${each(StylePropertyUnits, (u) => {
                  return `<li class="w-full">${validate_component(Button, "Button").$$render(
                    $$result,
                    {
                      type: "button",
                      color: "light",
                      size: "xs",
                      variant: "contained",
                      btnClasses: "!justify-start !rounded-none !w-full !px-3 !py-1.5"
                    },
                    {},
                    {
                      default: () => {
                        return `${escape(u)} `;
                      }
                    }
                  )} </li>`;
                })}</ul>`;
              }
            }
          )}`;
        }
      }
    )}` : `${type === StylePropertyType.text ? `${(prop.value?.["options"] || []).length ? each(prop.value?.["options"] || [], (option) => {
      return `${validate_component(Popover, "Popover").$$render(
        $$result,
        {
          placement: "bottom",
          notClickable: true,
          disappearTimeout: 0
        },
        {},
        {
          text: () => {
            return `${escape(option.text)}`;
          },
          default: () => {
            return `${validate_component(Button, "Button").$$render(
              $$result,
              {
                color: value === option.text ? "dark" : "light",
                size: "xs",
                variant: value === option.text ? "contained" : "border",
                btnClasses: "!p-1 !min-w-[34px] !h-[34px]",
                "aria-label": "Set " + key + " to " + option.text
              },
              {},
              {
                default: () => {
                  return `${typeof option.icon === "string" ? `${escape(option.icon)}` : `${validate_component(option.icon || missing_component, "svelte:component").$$render($$result, { size: 18 }, {}, {})}`} `;
                }
              }
            )} `;
          }
        }
      )}`;
    }) : `${validate_component(ClearableInput, "ClearableInput").$$render(
      $$result,
      { inputClass: "min-w-[32px]", value },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}` : ``}`}`}`}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_styleStore();
  return $$rendered;
});
function formatKebabCase(text) {
  text = text.toLowerCase().replace(/-/, " ");
  if (text.length) {
    text = text[0].toUpperCase() + text.slice(1);
  }
  return text;
}
const QuickStyleMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $styleStore, $$unsubscribe_styleStore;
  let $app, $$unsubscribe_app;
  let { value = "" } = $$props;
  let { properties } = $$props;
  let { componentType = void 0 } = $$props;
  let { componentProperty = void 0 } = $$props;
  const { app } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value2) => $app = value2);
  const styleStore = createStyleStore(properties);
  $$unsubscribe_styleStore = subscribe(styleStore, (value2) => $styleStore = value2);
  setContext(STYLE_STORE_KEY, styleStore);
  let multiValues = initiateMultiValues();
  let isOpen = {};
  function setTopColors() {
    const styles = collectStyles();
    const parsedStyles = styles.map((style) => {
      try {
        return parse(style) || {};
      } catch {
        return {};
      }
    });
    const usedColors = {};
    parsedStyles.forEach((style) => {
      Object.values(style).reduce(
        (colors2, v) => {
          v.split(" ").forEach((v2) => {
            if (isValidHexColor(v2)) {
              colors2[v2] = (colors2[v2] || 0) + 1;
            }
          });
          return colors2;
        },
        usedColors
      );
    });
    const colors = Object.entries(usedColors).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([color]) => color);
    styleStore.setTopColors(colors);
  }
  function collectStyles() {
    const styles = [];
    Object.values($app.css || {}).forEach((element) => {
      Object.values(element).filter(({ style }) => style && styles.push(style));
    });
    $app.grid.map((component) => {
      Object.values(component.data.customCss || {}).forEach(({ style }) => {
        style && styles.push(style);
      });
    });
    Object.values($app.subgrids || {}).forEach((grid) => {
      grid.map((component) => {
        Object.values(component.data.customCss || {}).forEach(({ style }) => {
          style && styles.push(style);
        });
      });
    });
    return styles;
  }
  function initiateMultiValues() {
    return $styleStore.style.reduce(
      (acc, curr, i) => {
        if (Array.isArray(curr.prop.value)) {
          acc[i] = Array.from({ length: curr.prop.value.length }, () => {
            return "";
          });
        }
        return acc;
      },
      {}
    );
  }
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.properties === void 0 && $$bindings.properties && properties !== void 0) $$bindings.properties(properties);
  if ($$props.componentType === void 0 && $$bindings.componentType && componentType !== void 0) $$bindings.componentType(componentType);
  if ($$props.componentProperty === void 0 && $$bindings.componentProperty && componentProperty !== void 0) $$bindings.componentProperty(componentProperty);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $app && setTopColors();
    $$rendered = `<div class="flex flex-col !divide-y">${each(properties, (property) => {
      return `${each(Object.keys(property), (group) => {
        let prefix = `${componentType}_${componentProperty}_${group}`;
        return ` ${validate_component(ListItem, "ListItem").$$render(
          $$result,
          {
            title: group,
            prefix,
            openByDefault: false,
            wrapperClasses: "!px-0 !py-0 ",
            toggleClasses: " !rounded-b-none !py-0\n				" + (isOpen[prefix] ? "!bg-surface-secondary hover:!bg-surface-hover" : ""),
            isOpen: isOpen[prefix]
          },
          {
            isOpen: ($$value) => {
              isOpen[prefix] = $$value;
              $$settled = false;
            }
          },
          {
            title: () => {
              return `<span class="font-normal text-xs">${escape(group)}</span> `;
            },
            default: () => {
              return `<div class="flex justify-start items-center flex-wrap gap-x-4 gap-y-1 pt-3">${each(property[group], (p) => {
                let { prop: { prop }, index } = styleStore.getProp(p);
                return ` ${prop !== void 0 && index !== void 0 ? `<div class="pb-2 pt-1"><div class="text-xs font-semibold text-tertiary pb-0.5">${escape(formatKebabCase(prop.key))}</div> <div class="flex items-center gap-1">${Array.isArray(prop.value) ? `<div class="flex justify-start items-center flex-wrap gap-x-4 gap-y-1">${each(prop.value, (value2, i) => {
                  return `${validate_component(QuickStyleProperty, "QuickStyleProperty").$$render(
                    $$result,
                    {
                      prop: { ...prop, value: value2 },
                      inline: true,
                      value: multiValues[index][i]
                    },
                    {
                      value: ($$value) => {
                        multiValues[index][i] = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                })} </div>` : `${validate_component(QuickStyleProperty, "QuickStyleProperty").$$render(
                  $$result,
                  {
                    prop,
                    inline: true,
                    value: $styleStore.style[index].value
                  },
                  {
                    value: ($$value) => {
                      $styleStore.style[index].value = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`}</div> </div>` : ``}`;
              })}</div> `;
            }
          }
        )}`;
      })}`;
    })}</div>`;
  } while (!$$settled);
  $$unsubscribe_styleStore();
  $$unsubscribe_app();
  return $$rendered;
});
const CssEval = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let id;
  let $selectedComponent, $$unsubscribe_selectedComponent;
  let { evalClass } = $$props;
  let { key } = $$props;
  const { selectedComponent } = getContext("AppViewerContext");
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => $selectedComponent = value);
  if ($$props.evalClass === void 0 && $$bindings.evalClass && evalClass !== void 0) $$bindings.evalClass(evalClass);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0) $$bindings.key(key);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    id = Array.isArray($selectedComponent) ? $selectedComponent[0] : $selectedComponent;
    $$rendered = `${evalClass && id ? `${validate_component(InputsSpecEditor, "InputsSpecEditor").$$render(
      $$result,
      {
        id,
        userInputEnabled: false,
        shouldCapitalize: true,
        resourceOnly: false,
        fieldType: "text",
        customTitle: "Dynamic class (eval)",
        displayType: false,
        placeholder: void 0,
        format: void 0,
        selectOptions: void 0,
        subFieldType: void 0,
        allowTypeChange: false,
        key,
        componentInput: evalClass
      },
      {
        componentInput: ($$value) => {
          evalClass = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_selectedComponent();
  return $$rendered;
});
const CssProperty = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { value = {} } = $$props;
  let { forceStyle = false } = $$props;
  let { forceClass = false } = $$props;
  let { quickStyleProperties: quickStyleProperties2 = void 0 } = $$props;
  let { componentType = void 0 } = $$props;
  let { tooltip = void 0 } = $$props;
  let { shouldDisplayLeft = false } = $$props;
  let { shouldDisplayRight = false } = $$props;
  let { overriden = false } = $$props;
  let { overridding = false } = $$props;
  let { wmClass = void 0 } = $$props;
  const dispatch = createEventDispatcher();
  let isQuickMenuOpen = false;
  let richEditorOpen = false;
  let dynamicClass = value?.evalClass !== void 0;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.forceStyle === void 0 && $$bindings.forceStyle && forceStyle !== void 0) $$bindings.forceStyle(forceStyle);
  if ($$props.forceClass === void 0 && $$bindings.forceClass && forceClass !== void 0) $$bindings.forceClass(forceClass);
  if ($$props.quickStyleProperties === void 0 && $$bindings.quickStyleProperties && quickStyleProperties2 !== void 0) $$bindings.quickStyleProperties(quickStyleProperties2);
  if ($$props.componentType === void 0 && $$bindings.componentType && componentType !== void 0) $$bindings.componentType(componentType);
  if ($$props.tooltip === void 0 && $$bindings.tooltip && tooltip !== void 0) $$bindings.tooltip(tooltip);
  if ($$props.shouldDisplayLeft === void 0 && $$bindings.shouldDisplayLeft && shouldDisplayLeft !== void 0) $$bindings.shouldDisplayLeft(shouldDisplayLeft);
  if ($$props.shouldDisplayRight === void 0 && $$bindings.shouldDisplayRight && shouldDisplayRight !== void 0) $$bindings.shouldDisplayRight(shouldDisplayRight);
  if ($$props.overriden === void 0 && $$bindings.overriden && overriden !== void 0) $$bindings.overriden(overriden);
  if ($$props.overridding === void 0 && $$bindings.overridding && overridding !== void 0) $$bindings.overridding(overridding);
  if ($$props.wmClass === void 0 && $$bindings.wmClass && wmClass !== void 0) $$bindings.wmClass(wmClass);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      dispatch("change", value);
    }
    $$rendered = `<div class="flex justify-between items-center p-2 text-xs leading-6 font-bold w-full"><div class="capitalize">${escape(addWhitespaceBeforeCapitals(name))}</div> <div class="flex flex-row items-center gap-1">${shouldDisplayLeft ? `${validate_component(Popover, "Popover").$$render(
      $$result,
      {
        placement: "bottom",
        notClickable: true,
        disappearTimeout: 0
      },
      {},
      {
        text: () => {
          return `${escape("Copy for this component")}`;
        },
        default: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              color: "light",
              size: "xs2",
              iconOnly: true,
              startIcon: { icon: Move_left }
            },
            {},
            {}
          )}`;
        }
      }
    )}` : ``} ${shouldDisplayRight ? `${validate_component(Popover, "Popover").$$render(
      $$result,
      {
        placement: "bottom",
        notClickable: true,
        disappearTimeout: 0
      },
      {},
      {
        text: () => {
          return `Copy for every ${escape(componentType ? ccomponents[componentType].name : "component")} `;
        },
        default: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              color: "light",
              size: "xs2",
              iconOnly: true,
              startIcon: { icon: Move_right }
            },
            {},
            {}
          )}`;
        }
      }
    )}` : ``} ${validate_component(Popover, "Popover").$$render(
      $$result,
      {
        placement: "bottom",
        notClickable: true,
        disappearTimeout: 0
      },
      {},
      {
        text: () => {
          return `Copy ${escape(wmClass)} `;
        },
        default: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              color: "light",
              size: "xs2",
              iconOnly: true,
              startIcon: { icon: Copy }
            },
            {},
            {}
          )}`;
        }
      }
    )}</div></div> ${value ? `<div class="p-2 flex flex-col gap-2">${tooltip ? `<div class="text-tertiary text-2xs py-2">${escape(tooltip)}</div>` : ``} ${value.style !== void 0 || forceStyle ? `<div class="pb-2"> <div class="block w-full"><div class="flex flex-row justify-between items-center w-full h-8 mb-1"><div class="text-xs font-medium text-tertiary" data-svelte-h="svelte-1axl6my">Plain CSS</div> <div class="flex flex-row gap-1">${overriden ? `${validate_component(Badge, "Badge").$$render($$result, { color: "red", small: true }, {}, {
      default: () => {
        return `Overriden by local`;
      }
    })}` : `${overridding ? `${validate_component(Badge, "Badge").$$render($$result, { color: "blue", small: true }, {}, {
      default: () => {
        return `Overriding global`;
      }
    })}` : ``}`} ${quickStyleProperties2?.length ? `${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
      $$result,
      { selected: richEditorOpen },
      {
        selected: ($$value) => {
          richEditorOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              small: true,
              light: true,
              value: false,
              icon: Code,
              tooltip: "Edit the CSS directly"
            },
            {},
            {}
          )} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              small: true,
              light: true,
              value: true,
              icon: Paintbrush_2,
              tooltip: "Open the rich editor to style the component with a visual interface"
            },
            {},
            {}
          )}`;
        }
      }
    )}` : ``}</div></div> ${validate_component(ClearableInput, "ClearableInput").$$render(
      $$result,
      {
        type: "textarea",
        disabled: isQuickMenuOpen,
        wrapperClass: "h-full min-h-[72px]",
        inputClass: "h-full !text-xs !rounded-none !p-2 !shadow-none !border-gray-200 dark:!border-gray-600 ",
        value: value.style
      },
      {
        value: ($$value) => {
          value.style = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> ${quickStyleProperties2?.length && isQuickMenuOpen ? `<div class="text-xs mb-1 font-medium" data-svelte-h="svelte-1k8i6ob">Rich editor</div> <div class="w-full">${validate_component(QuickStyleMenu, "QuickStyleMenu").$$render(
      $$result,
      {
        properties: quickStyleProperties2,
        componentType,
        componentProperty: name,
        value: value.style
      },
      {
        value: ($$value) => {
          value.style = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : ``} ${componentType && ccomponents?.[componentType]?.quickstyle?.[name]?.quickCss ? `<div class="flex flex-row gap-1 items-center mt-1 flex-wrap">${each(ccomponents?.[componentType]?.quickstyle?.[name].quickCss ?? [], (v) => {
      return `${validate_component(Badge, "Badge").$$render($$result, { small: true, baseClass: "cursor-pointer" }, {}, {
        default: () => {
          return `${escape(v)} `;
        }
      })}`;
    })}</div>` : ``}</div>` : ``} ${value.class !== void 0 || forceClass ? ` <label class="block"><div class="text-xs font-medium text-tertiary mb-1">Tailwind classes
						${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        light: true,
        documentationLink: "https://tailwindcss.com/"
      },
      {},
      {
        default: () => {
          return `Use any tailwind classes to style your component`;
        }
      }
    )}</div> <div class="relative">${validate_component(SimpleEditor, "SimpleEditor").$$render(
      $$result,
      {
        class: "h-24 border !rounded-none",
        lang: "tailwindcss",
        fixedOverflowWidgets: true,
        small: true,
        automaticLayout: true,
        code: value.class
      },
      {
        code: ($$value) => {
          value.class = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> ${componentType && ccomponents?.[componentType]?.quickstyle?.[name]?.quickTailwindClasses ? `<div class="flex flex-row gap-1 items-center mt-1 flex-wrap">${each(ccomponents?.[componentType]?.quickstyle?.[name]?.quickTailwindClasses ?? [], (cls) => {
      return `${validate_component(Badge, "Badge").$$render($$result, { baseClass: "cursor-pointer", small: true }, {}, {
        default: () => {
          return `${escape(cls)} `;
        }
      })}`;
    })}</div>` : ``}</label>` : ``} <div class="flex flex-row justify-between items-center"><div class="text-xs flex flex-row items-center justify-center">Use dynamic class
					${validate_component(Tooltip, "Tooltip").$$render($$result, { light: true }, {}, {
      default: () => {
        return `Eval an expression that return a list of class as string to dynamically add classes to
						the component. The styling can then be dynamic using the global CSS Editor.`;
      }
    })}</div> ${validate_component(Toggle, "Toggle").$$render(
      $$result,
      { size: "xs", checked: dynamicClass },
      {
        checked: ($$value) => {
          dynamicClass = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> ${value?.evalClass && dynamicClass ? `${validate_component(CssEval, "CssEval").$$render(
      $$result,
      { key: name, evalClass: value.evalClass },
      {
        evalClass: ($$value) => {
          value.evalClass = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</div>` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const GridTabDisabled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { field } = $$props;
  let { index } = $$props;
  let disablable = field && !(field?.type === "static" && field?.value === false);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.field === void 0 && $$bindings.field && field !== void 0) $$bindings.field(field);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        size: "xs",
        options: { right: "Can be disabled" },
        checked: disablable
      },
      {
        checked: ($$value) => {
          disablable = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${disablable ? `<div>${validate_component(InputsSpecEditor, "InputsSpecEditor").$$render(
      $$result,
      {
        key: "tabDisabled " + index,
        id,
        userInputEnabled: false,
        shouldCapitalize: true,
        resourceOnly: false,
        fieldType: field?.["fieldType"],
        subFieldType: field?.["subFieldType"],
        format: field?.["format"],
        selectOptions: field?.["selectOptions"],
        tooltip: field?.["tooltip"],
        fileUpload: field?.["fileUpload"],
        placeholder: field?.["placeholder"],
        customTitle: field?.["customTitle"],
        displayType: false,
        componentInput: field
      },
      {
        componentInput: ($$value) => {
          field = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const GridTab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_componentControl;
  let $$unsubscribe_app;
  let $$unsubscribe_runnableComponents;
  let { tabs: tabs2 = [] } = $$props;
  let { disabledTabs = [] } = $$props;
  let { canDisableTabs = false } = $$props;
  let { word = "Tab" } = $$props;
  let { component } = $$props;
  let items = tabs2.map((tab, index) => {
    return {
      value: tab,
      id: generateRandomString(),
      originalIndex: index
    };
  });
  const { app, runnableComponents, componentControl } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => value);
  $$unsubscribe_runnableComponents = subscribe(runnableComponents, (value) => value);
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => value);
  if ($$props.tabs === void 0 && $$bindings.tabs && tabs2 !== void 0) $$bindings.tabs(tabs2);
  if ($$props.disabledTabs === void 0 && $$bindings.disabledTabs && disabledTabs !== void 0) $$bindings.disabledTabs(disabledTabs);
  if ($$props.canDisableTabs === void 0 && $$bindings.canDisableTabs && canDisableTabs !== void 0) $$bindings.canDisableTabs(canDisableTabs);
  if ($$props.word === void 0 && $$bindings.word && word !== void 0) $$bindings.word(word);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0) $$bindings.component(component);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (disabledTabs == void 0) {
        disabledTabs = [
          {
            type: "static",
            value: false,
            fieldType: "boolean"
          },
          {
            type: "static",
            value: false,
            fieldType: "boolean"
          }
        ];
      }
    }
    tabs2 = items.map((item) => item.value);
    $$rendered = `${validate_component(PanelSection, "PanelSection").$$render(
      $$result,
      {
        title: `${word}s ${tabs2 && tabs2.length > 0 ? `(${tabs2.length})` : ""}`
      },
      {},
      {
        default: () => {
          return `${!tabs2 || tabs2.length == 0 ? `<span class="text-xs text-tertiary" data-svelte-h="svelte-mhqht5">No Tabs</span>` : ``} <div class="w-full flex gap-2 flex-col mt-2"><section>${each(items, (item, index) => {
            return `<div class="border rounded-md p-2 mb-2 bg-surface"><div class="w-full flex flex-row gap-2 items-center relative my-1"><input type="text"${add_attribute("value", items[index].value, 0)}> <div class="absolute right-8">${validate_component(CloseButton, "CloseButton").$$render($$result, { noBg: true, small: true }, {}, {})}</div> <div class="flex flex-col justify-center gap-2">  <div class="handle w-4 h-4" aria-label="drag-handle">${validate_component(Grip_vertical, "GripVertical").$$render($$result, { size: 16 }, {}, {})}</div> </div></div> ${canDisableTabs && disabledTabs ? `${validate_component(GridTabDisabled, "GridTabDisabled").$$render(
              $$result,
              {
                index,
                id: component.id,
                field: disabledTabs[index]
              },
              {
                field: ($$value) => {
                  disabledTabs[index] = $$value;
                  $$settled = false;
                }
              },
              {}
            )}` : ``} </div>`;
          })}</section> ${validate_component(Button, "Button").$$render(
            $$result,
            {
              size: "xs",
              color: "light",
              variant: "border",
              startIcon: { icon: Plus },
              iconOnly: true
            },
            {},
            {}
          )}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_componentControl();
  $$unsubscribe_app();
  $$unsubscribe_runnableComponents();
  return $$rendered;
});
const GridPane = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_app;
  let $$unsubscribe_runnableComponents;
  let { panes } = $$props;
  let { component } = $$props;
  const { app, runnableComponents } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => value);
  $$unsubscribe_runnableComponents = subscribe(runnableComponents, (value) => value);
  if ($$props.panes === void 0 && $$bindings.panes && panes !== void 0) $$bindings.panes(panes);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0) $$bindings.component(component);
  $$unsubscribe_app();
  $$unsubscribe_runnableComponents();
  return `${validate_component(PanelSection, "PanelSection").$$render(
    $$result,
    {
      title: `panes ${panes.length > 0 ? `(${panes.length})` : ""}`
    },
    {},
    {
      default: () => {
        return `${panes.length == 0 ? `<span class="text-xs text-tertiary" data-svelte-h="svelte-1yknfoi">No panes</span>` : ``} <div class="w-full flex gap-2 flex-col">${each(panes, (value, index) => {
          return `<div class="w-full flex flex-row gap-1 items-center relative"><input type="number"${add_attribute("value", value, 0)}> ${validate_component(Button, "Button").$$render(
            $$result,
            {
              size: "xs",
              color: "light",
              iconOnly: true,
              startIcon: { icon: Trash }
            },
            {},
            {}
          )} </div>`;
        })} ${validate_component(Button, "Button").$$render(
          $$result,
          {
            size: "xs",
            color: "light",
            variant: "border",
            startIcon: { icon: Plus },
            iconOnly: true
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}`;
});
function hasStyles(customCss) {
  if (!customCss) {
    return false;
  }
  return Object.keys(customCss ?? {}).map((key) => customCss[key]).some((c) => c.style !== "");
}
const CSSMigrationModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let generatedCode;
  let migrations;
  let $app, $$unsubscribe_app;
  let { component } = $$props;
  const { app } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  let migrationModalOpen = false;
  function open2() {
    migrationModalOpen = true;
  }
  function generateCodeFromMigrations(migrations2) {
    let code = "";
    for (const [key, value] of migrations2) {
      code += `${key} {
	${value.join(";\n	")}
}

`;
    }
    return code;
  }
  function getSelector(key) {
    return customisationByComponent.find((c) => c.components.includes(component?.type ?? ""))?.selectors.find((s) => {
      return s.customCssKey === key;
    })?.selector;
  }
  let type = component?.type;
  if ($$props.component === void 0 && $$bindings.component && component !== void 0) $$bindings.component(component);
  if ($$props.open === void 0 && $$bindings.open && open2 !== void 0) $$bindings.open(open2);
  migrations = /* @__PURE__ */ new Map();
  generatedCode = generateCodeFromMigrations(migrations);
  $$unsubscribe_app();
  return `${validate_component(HighlightTheme, "HighlightTheme").$$render($$result, {}, {}, {})} ${migrationModalOpen ? `<div${add_attribute("class", "absolute top-0 bottom-0 left-0 right-0 z-[5000]", 0)} role="dialog"><div${add_attribute(
    "class",
    twMerge("fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity", migrationModalOpen ? "ease-out duration-300 opacity-100" : "ease-in duration-200 opacity-0"),
    0
  )}></div> <div class="fixed inset-0 z-10 overflow-y-auto"><div class="flex min-h-full items-center justify-center p-4"><div${add_attribute(
    "class",
    twMerge("relative transform overflow-hidden rounded-lg bg-surface px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl sm:p-6 ", migrationModalOpen ? "ease-out duration-300 opacity-100 translate-y-0 sm:scale-100" : "ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"),
    0
  )}><div class="leading-6 font-semibold text-sm w-full flex justify-between"><div data-svelte-h="svelte-nmy4qc">Migrate to CSS editor</div>${validate_component(CloseButton, "CloseButton").$$render($$result, {}, {}, {})}</div> <div class=""><div class="">${hasStyles(component?.customCss) ? `<div class="leading-6 text-xs font-semibold">ID ${validate_component(Badge, "Badge").$$render($$result, { color: "indigo", size: "xs" }, {}, {
    default: () => {
      return `${escape(component?.id)}`;
    }
  })}</div>` : ``} ${component?.type && $app.css ? `${each(Object.keys(component.customCss ?? {}), (cssKey) => {
    return `${component.customCss?.[cssKey].style != void 0 && component.customCss[cssKey].style !== "" ? `<div class="grid grid-cols-2 gap-2"><div><div class="flex flex-row justify-between items-center py-0.5"><div class="leading-6 text-xs font-semibold">${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(cssKey)} `;
      }
    })}</div> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "dark",
        size: "xs",
        endIcon: { icon: Move_right }
      },
      {},
      {
        default: () => {
          return `Migrate
													`;
        }
      }
    )}</div> <div class="border p-2 rounded-md">${validate_component(Highlight, "Highlight").$$render(
      $$result,
      {
        code: component.customCss[cssKey].style,
        language: css$5
      },
      {},
      {}
    )} </div></div> <div class=""><div class="leading-6 text-xs font-semibold my-1" data-svelte-h="svelte-1fda0gc">Preview</div> <div class="border rounded-md p-2">${validate_component(Highlight, "Highlight").$$render(
      $$result,
      {
        code: `${getSelector(cssKey)} {
	${component.customCss[cssKey].style}
}`,
        language: css$5
      },
      {},
      {}
    )} </div></div> </div>` : ``}`;
  })}` : ``} ${hasStyles(component?.type ? $app.css?.[component?.type] : void 0) ? `<div class="leading-6 text-xs font-semibold">Global: ${escape(component?.type ? ccomponents[component.type]?.name : "")}</div>` : ``} ${component?.type && $app.css ? `${each(Object.keys($app.css[component?.type] ?? {}), (cssKey) => {
    return `${type && $app.css?.[type]?.[cssKey].style != void 0 && $app.css[type]?.[cssKey].style !== "" ? `<div class="grid grid-cols-2 gap-2"><div><div class="flex flex-row justify-between items-center py-0.5"><div class="leading-6 text-xs font-semibold">${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(cssKey)} `;
      }
    })}</div> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "dark",
        size: "xs",
        endIcon: { icon: Move_right }
      },
      {},
      {
        default: () => {
          return `Migrate
													`;
        }
      }
    )}</div> <div class="border p-2 rounded-md">${validate_component(Highlight, "Highlight").$$render(
      $$result,
      {
        code: $app.css[type][cssKey].style,
        language: css$5
      },
      {},
      {}
    )} </div></div> <div class=""><div class="leading-6 text-xs font-semibold my-1" data-svelte-h="svelte-1fda0gc">Preview</div> <div class="border rounded-md p-2">${validate_component(Highlight, "Highlight").$$render(
      $$result,
      {
        code: `${getSelector(cssKey)} {
	${$app.css[type][cssKey].style}
}`,
        language: css$5
      },
      {},
      {}
    )} </div></div> </div>` : ``}`;
  })}` : ``}</div></div> <div><div class="leading-6 text-xs font-semibold my-1" data-svelte-h="svelte-thtkh8">Current migrations</div> ${migrations.size > 0 ? `<div class="border rounded-md p-2">${validate_component(Highlight, "Highlight").$$render($$result, { code: generatedCode, language: css$5 }, {}, {})}</div>` : `<div class="text-gray-500 text-xs" data-svelte-h="svelte-16dtigr">No migrations</div>`}</div> <div class="mt-2 flex flex-row justify-end items-center gap-2"><div class="text-xs" data-svelte-h="svelte-1xy219j">If the class is already present in the CSS editor, the migration will append the new
							values to the existing ones.</div> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: "xs",
      color: "dark",
      disabled: migrations.size === 0,
      endIcon: { icon: Move_right }
    },
    {},
    {
      default: () => {
        return `Apply migration`;
      }
    }
  )}</div></div></div></div></div>` : ``}`;
});
function hasValues(obj) {
  if (!obj) return false;
  return Object.values(obj).some((v) => v !== "");
}
const CssPropertyWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { forceStyle = false } = $$props;
  let { forceClass = false } = $$props;
  let { id } = $$props;
  let { property = void 0 } = $$props;
  let { overriden = false } = $$props;
  let { overridding = false } = $$props;
  let { wmClass = void 0 } = $$props;
  if ($$props.forceStyle === void 0 && $$bindings.forceStyle && forceStyle !== void 0) $$bindings.forceStyle(forceStyle);
  if ($$props.forceClass === void 0 && $$bindings.forceClass && forceClass !== void 0) $$bindings.forceClass(forceClass);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.property === void 0 && $$bindings.property && property !== void 0) $$bindings.property(property);
  if ($$props.overriden === void 0 && $$bindings.overriden && overriden !== void 0) $$bindings.overriden(overriden);
  if ($$props.overridding === void 0 && $$bindings.overridding && overridding !== void 0) $$bindings.overridding(overridding);
  if ($$props.wmClass === void 0 && $$bindings.wmClass && wmClass !== void 0) $$bindings.wmClass(wmClass);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${property ? `${validate_component(CssProperty, "CssProperty").$$render(
      $$result,
      {
        forceStyle,
        forceClass,
        name: id,
        shouldDisplayLeft: hasValues(property[id]),
        overriden,
        overridding,
        wmClass,
        value: property[id]
      },
      {
        value: ($$value) => {
          property[id] = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const StylePanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let component;
  let type;
  let customCssByComponentType;
  let $app, $$unsubscribe_app;
  let $selectedComponent, $$unsubscribe_selectedComponent;
  let $cssEditorOpen, $$unsubscribe_cssEditorOpen;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  const { app, cssEditorOpen, selectedComponent } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_cssEditorOpen = subscribe(cssEditorOpen, (value) => $cssEditorOpen = value);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => $selectedComponent = value);
  let tab = "local";
  let overrideGlobalCSS = void 0;
  let overrideLocalCSS = void 0;
  let migrationModal = void 0;
  function getSelector(key) {
    return customisationByComponent.find((c) => c.components.includes(component?.type ?? ""))?.selectors.find((s) => {
      return s.customCssKey === key;
    })?.selector;
  }
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    component = findComponentSettings($app, $selectedComponent?.[0])?.item?.data;
    type = component?.type;
    customCssByComponentType = component?.type && $app.css ? Object.entries($app.css[component.type] || {}).map(([id, v]) => ({
      id,
      forceStyle: v?.style != void 0,
      forceClass: v?.["class"] != void 0
    })) : void 0;
    $$rendered = `${component ? `<div class="px-2 flex gap-1 flex-col w-full pb-4">${!$cssEditorOpen ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "light",
        size: "xs2",
        variant: "border"
      },
      {},
      {
        default: () => {
          return `<div class="flex flex-row gap-1 text-xs items-center">Open theme editor${escape($enterpriseLicense === void 0 ? "  (EE only)" : "")} ${validate_component(Tooltip, "Tooltip").$$render($$result, { light: true }, {}, {
            default: () => {
              return `You can also use the App CSS Editor to customise the CSS of all components.`;
            }
          })}</div>`;
        }
      }
    )}` : `<div></div>`} ${$enterpriseLicense !== void 0 ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "light",
        size: "xs2",
        variant: "border"
      },
      {},
      {
        default: () => {
          return `Convert to global CSS`;
        }
      }
    )}` : ``}</div> ${validate_component(Tabs, "Tabs").$$render(
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
          return `${validate_component(TabContent, "TabContent").$$render($$result, { value: "local" }, {}, {
            default: () => {
              return `${component && component.customCss !== void 0 ? `<div class="flex-col flex gap-4 divide-y">${each(Object.keys(ccomponents[component.type].customCss ?? {}), (name) => {
                return `<div class="w-full">${validate_component(CssProperty, "CssProperty").$$render(
                  $$result,
                  {
                    quickStyleProperties: quickStyleProperties?.[component.type]?.[name],
                    forceStyle: ccomponents[component.type].customCss[name].style !== void 0,
                    forceClass: ccomponents[component.type].customCss[name].class !== void 0,
                    tooltip: ccomponents[component.type].customCss[name].tooltip,
                    name,
                    wmClass: getSelector(name),
                    componentType: component.type,
                    shouldDisplayRight: hasStyleValue(component.customCss[name]),
                    overridding: hasStyleValue($app.css?.[component.type]?.[name]) && hasStyleValue(component.customCss[name]),
                    value: component.customCss[name]
                  },
                  {
                    value: ($$value) => {
                      component.customCss[name] = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )} </div>`;
              })}</div>` : ``}`;
            }
          })} ${validate_component(TabContent, "TabContent").$$render($$result, { value: "global" }, {}, {
            default: () => {
              return `${type ? `${each(customCssByComponentType ?? [], ({ id, forceStyle, forceClass }) => {
                return `<div class="w-full">${$app.css && type && $app.css[type] && component?.customCss ? `${validate_component(CssPropertyWrapper, "CssPropertyWrapper").$$render(
                  $$result,
                  {
                    forceStyle,
                    forceClass,
                    id,
                    overriden: hasStyleValue(component.customCss[id]),
                    wmClass: getSelector(id),
                    property: $app.css[type]
                  },
                  {
                    property: ($$value) => {
                      $app.css[type] = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}` : ``} </div>`;
              })}` : ``}`;
            }
          })} `;
        },
        default: () => {
          return `${validate_component(Tab, "Tab").$$render($$result, { value: "local", size: "xs" }, {}, {
            default: () => {
              return `<div class="flex flex-row gap-2 items-center">ID
					${validate_component(Badge, "Badge").$$render($$result, { color: "indigo", size: "xs" }, {}, {
                default: () => {
                  return `${escape(component?.id)}`;
                }
              })} ${validate_component(Tooltip, "Tooltip").$$render($$result, { light: true }, {}, {
                default: () => {
                  return `You can customise the CSS and the classes of this component instance. These
						customisations will only be applied to this component. You can also apply
						custom classes set on the Global styling panel.`;
                }
              })}</div>`;
            }
          })} ${validate_component(Tab, "Tab").$$render($$result, { value: "global", size: "xs" }, {}, {
            default: () => {
              return `<div class="flex flex-row gap-2 items-center">Global: ${escape(type ? ccomponents[type].name : "")} ${validate_component(Tooltip, "Tooltip").$$render($$result, { light: true }, {}, {
                default: () => {
                  return `You can customise the CSS and the classes of all components of this type. These
						customisations will be applied to all components of this type.`;
                }
              })}</div>`;
            }
          })}`;
        }
      }
    )} ${validate_component(ConfirmationModal, "ConfirmationModal").$$render(
      $$result,
      {
        title: "Confirm overriding global CSS",
        confirmationText: "Override global CSS",
        open: Boolean(overrideGlobalCSS)
      },
      {},
      {
        default: () => {
          return `<div class="text-primary pb-2" data-svelte-h="svelte-1u1yzv7">The global CSS for this component already exists. Do you want to override it?</div>`;
        }
      }
    )} ${validate_component(ConfirmationModal, "ConfirmationModal").$$render(
      $$result,
      {
        title: "Confirm overriding local CSS",
        confirmationText: "Override local CSS",
        open: Boolean(overrideLocalCSS)
      },
      {},
      {
        default: () => {
          return `<div class="text-primary pb-2" data-svelte-h="svelte-axw6bh">The local CSS for this component already exists. Do you want to override it?</div>`;
        }
      }
    )} ${validate_component(CSSMigrationModal, "CssMigrationModal").$$render(
      $$result,
      { this: migrationModal, component },
      {
        this: ($$value) => {
          migrationModal = $$value;
          $$settled = false;
        },
        component: ($$value) => {
          component = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `<span class="text-sm text-secondary mx-2" data-svelte-h="svelte-k63k8v">Select a component to style it in this panel</span>`}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_selectedComponent();
  $$unsubscribe_cssEditorOpen();
  $$unsubscribe_enterpriseLicense();
  return $$rendered;
});
const GridCondition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_app;
  let $$unsubscribe_runnableComponents;
  let $$unsubscribe_componentControl;
  let { conditions = [] } = $$props;
  let { component } = $$props;
  let items = conditions.slice(0, -1).map((condition, index) => {
    return {
      value: condition,
      id: generateRandomString(),
      originalIndex: index
    };
  });
  const { app, runnableComponents, componentControl } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => value);
  $$unsubscribe_runnableComponents = subscribe(runnableComponents, (value) => value);
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => value);
  if ($$props.conditions === void 0 && $$bindings.conditions && conditions !== void 0) $$bindings.conditions(conditions);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0) $$bindings.component(component);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    conditions = items.map((item) => item.value).concat([
      {
        type: "evalv2",
        expr: "true",
        fieldType: "boolean",
        connections: []
      }
    ]);
    $$rendered = `${validate_component(PanelSection, "PanelSection").$$render($$result, { title: "Conditions" }, {}, {
      default: () => {
        return `${validate_component(Alert, "Alert").$$render($$result, { title: "Evaluation", size: "xs" }, {}, {
          default: () => {
            return `Conditions are evaluated in order. The first condition that evaluates to true will render its
		subgrid.`;
          }
        })} ${items.length == 0 ? `<span class="text-xs text-tertiary" data-svelte-h="svelte-mhqht5">No Tabs</span>` : ``} <div class="w-full flex flex-col mt-2"><section>${each(items, (item, index) => {
          let condition = item.value;
          return ` <div class="w-full flex flex-row gap-2 items-center relative"><div${add_attribute("class", twMerge("grow border p-3 my-2 rounded-md bg-surface relative"), 0)}>${validate_component(InputsSpecEditor, "InputsSpecEditor").$$render(
            $$result,
            {
              key: `condition${index + 1}`,
              id: component.id,
              userInputEnabled: false,
              shouldCapitalize: true,
              resourceOnly: false,
              fieldType: condition?.["fieldType"],
              subFieldType: condition?.["subFieldType"],
              format: condition?.["format"],
              selectOptions: condition?.["selectOptions"],
              tooltip: condition?.["tooltip"],
              fileUpload: condition?.["fileUpload"],
              placeholder: condition?.["placeholder"],
              customTitle: condition?.["customTitle"],
              displayType: false,
              componentInput: item.value
            },
            {
              componentInput: ($$value) => {
                item.value = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div> <div class="flex flex-col justify-center gap-2">  <div>${validate_component(X, "X").$$render($$result, { size: 16 }, {}, {})}</div>   <div class="w-4 h-4 handle" aria-label="drag-handle">${validate_component(Grip_vertical, "GripVertical").$$render($$result, { size: 16 }, {}, {})} </div></div> </div>`;
        })}</section> <div class="border rounded-md p-3 mb-2"><div class="flex" data-svelte-h="svelte-3orl04"><span class="font-bold text-xs">Default</span></div> ${validate_component(Alert, "Alert").$$render($$result, { title: "Default", size: "xs" }, {}, {
          default: () => {
            return `The default container is rendered if no other conditions evaluate to true.`;
          }
        })}</div> ${validate_component(Button, "Button").$$render(
          $$result,
          {
            size: "xs",
            color: "light",
            variant: "border",
            startIcon: { icon: Plus },
            iconOnly: true
          },
          {},
          {}
        )}</div>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_runnableComponents();
  $$unsubscribe_componentControl();
  return $$rendered;
});
const GroupRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  let { row } = $$props;
  createEventDispatcher();
  if ($$props.row === void 0 && $$bindings.row && row !== void 0) $$bindings.row(row);
  $$unsubscribe_workspaceStore();
  return `<tr>${validate_component(Cell, "Cell").$$render($$result, { first: true }, {}, {
    default: () => {
      return `<div class="flex flex-row gap-1 items-center">${validate_component(NameEditor, "GroupNameEditor").$$render($$result, { kind: "group", row }, {}, {})} ${escape(row.name)}</div>`;
    }
  })} ${validate_component(Cell, "Cell").$$render($$result, { last: true }, {}, {
    default: () => {
      return `<div${add_attribute("class", twMerge("flex flex-row gap-1 justify-end  z-[10000]"), 0)}><button>${validate_component(ButtonDropdown, "ButtonDropdown").$$render(
        $$result,
        {
          target: "#group_portal",
          hasPadding: false
        },
        {},
        {
          items: () => {
            return `${validate_component(MenuItem$1, "MenuItem").$$render($$result, {}, {}, {
              default: () => {
                return `<div${add_attribute("class", classNames("!text-red-600 flex flex-row items-center text-left px-4 py-2 gap-2 cursor-pointer hover:bg-gray-100 !text-xs font-semibold"), 0)}>${validate_component(Trash, "Trash").$$render($$result, { size: 16 }, {}, {})}
								Delete</div>`;
              }
            })}`;
          }
        }
      )}</button></div>`;
    }
  })}</tr>`;
});
const GroupList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $$unsubscribe_app;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { item } = $$props;
  const { app } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => value);
  let groups = [];
  let loading = false;
  async function getGroups() {
    loading = true;
    groups = await listGroups($workspaceStore);
    loading = false;
  }
  let nameField = "";
  getGroups();
  if ($$props.item === void 0 && $$bindings.item && item !== void 0) $$bindings.item(item);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_app();
  return `<div id="group_portal"></div> <div class="p-2 flex flex-col items-start w-auto gap-2 relative"><div class="w-full flex flex-row gap-2 items-center"><input${add_attribute("placeholder", "Group name", 0)}${add_attribute("value", nameField, 0)}> ${validate_component(Button, "Button").$$render($$result, { color: "dark", size: "xs" }, {}, {
    default: () => {
      return `Create group`;
    }
  })}</div> ${loading ? `<div class="flex flex-col w-full pt-12">${each(new Array(6), (_) => {
    return `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[2], 0.5] }, {}, {})}`;
  })}</div>` : `${Array.isArray(groups) && groups.length > 0 ? `<div class="w-full">${validate_component(DataTable, "DataTable").$$render($$result, { size: "xs" }, {}, {
    default: () => {
      return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
        default: () => {
          return `<tr>${validate_component(Cell, "Cell").$$render($$result, { first: true, head: true }, {}, {
            default: () => {
              return `Path`;
            }
          })} ${validate_component(Cell, "Cell").$$render($$result, { last: true, head: true }, {}, {})}</tr>`;
        }
      })} <tbody class="divide-y">${groups && groups.length > 0 ? `${each(groups, (row) => {
        return `${validate_component(GroupRow, "GroupRow").$$render($$result, { row }, {}, {})}`;
      })}` : `<tr data-svelte-h="svelte-1hwx9ss">Loading...</tr>`}</tbody>`;
    }
  })}</div>` : ``}`}</div>`;
});
const GroupManagementDrawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  let codeDrawer;
  async function openDrawer() {
    codeDrawer.openDrawer();
  }
  if ($$props.item === void 0 && $$bindings.item && item !== void 0) $$bindings.item(item);
  if ($$props.openDrawer === void 0 && $$bindings.openDrawer && openDrawer !== void 0) $$bindings.openDrawer(openDrawer);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { this: codeDrawer },
      {
        this: ($$value) => {
          codeDrawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Component Groups" }, {}, {
            default: () => {
              return `${validate_component(GroupList, "GroupList").$$render($$result, { item }, {}, {})}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const GridGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { groupFields } = $$props;
  let { item } = $$props;
  let groupManagementDrawer = void 0;
  let fieldName = "";
  if ($$props.groupFields === void 0 && $$bindings.groupFields && groupFields !== void 0) $$bindings.groupFields(groupFields);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0) $$bindings.item(item);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="flex p-2 gap-1 items-center">${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        size: "xs",
        checked: groupFields != void 0,
        options: {
          right: "container is a component group",
          rightTooltip: `Group fields allow inner components to depend on the group fields which make the container a
		group of component that is encapsulated. Inside the group, it is possible to retrieve the values
		using \`group.<x />\` where x is the group field name`
        }
      },
      {},
      {}
    )}</div> ${groupFields != void 0 ? `<div class="p-2">${validate_component(Button, "Button").$$render($$result, { size: "xs", color: "light" }, {}, {
      default: () => {
        return `Save group to workspace`;
      }
    })}</div> ${validate_component(PanelSection, "PanelSection").$$render(
      $$result,
      {
        title: `Group Fields ${Object.keys(groupFields ?? {}).length > 0 ? `(${Object.keys(groupFields ?? {}).length ?? 0})` : ""}`
      },
      {},
      {
        default: () => {
          return `${Object.keys(groupFields ?? {}).length == 0 ? `<span class="text-xs text-tertiary" data-svelte-h="svelte-zd3p29">No group fields</span>` : ``} <div class="w-full flex gap-2 flex-col mt-2">${validate_component(InputsSpecsEditor, "InputsSpecsEditor").$$render(
            $$result,
            {
              id: item.id,
              shouldCapitalize: false,
              displayType: true,
              deletable: true,
              inputSpecs: groupFields
            },
            {
              inputSpecs: ($$value) => {
                groupFields = $$value;
                $$settled = false;
              }
            },
            {}
          )} <div class="flex flex-row gap-2 items-center relative"><input type="text" placeholder="Group Field Name"${add_attribute("value", fieldName, 0)}> ${validate_component(Button, "Button").$$render(
            $$result,
            {
              disabled: fieldName == "",
              size: "sm",
              color: "light",
              variant: "border",
              startIcon: { icon: Plus },
              iconOnly: true
            },
            {},
            {}
          )}</div></div>`;
        }
      }
    )}` : ``} ${validate_component(GroupManagementDrawer, "GroupManagementDrawer").$$render(
      $$result,
      { item, this: groupManagementDrawer },
      {
        this: ($$value) => {
          groupManagementDrawer = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const setTab = {
  title: "setTab",
  description: "Use the setTab function to manually set the tab of a Tab component.",
  example: "setTab(id: string, index: string)",
  documentation: "https://www.windmill.dev/docs/apps/app-runnable-panel#settab"
};
const recompute = {
  title: "recompute",
  description: "Use the recompute function to recompute the value of a component.",
  example: "recompute(id: string)",
  documentation: "https://www.windmill.dev/docs/apps/app-runnable-panel#recompute"
};
const getAgGrid = {
  title: "getAgGrid",
  description: "Use the getAgGrid function to get the ag-grid instance of a table.",
  example: "getAgGrid(id: string)",
  documentation: "https://www.windmill.dev/docs/apps/app-runnable-panel#getaggrid"
};
const setValue = {
  title: "setValue",
  description: "The setValue function is meant to set or force the value of a component. This can be convenient in cases where connection is not the easiest pattern. Note that it's a bad idea to mix dynamic default value and setValue together.",
  example: "setValue(id: string, value: any)",
  documentation: "https://www.windmill.dev/docs/apps/app-runnable-panel#setvalue"
};
const setSelectedIndex = {
  title: "setSelectedIndex",
  description: "Use the setSelectedIndex function to select a row in a table or an AG Grid table.",
  example: "setSelectedIndex(id: string, index: number)",
  documentation: "https://www.windmill.dev/docs/apps/app-runnable-panel#setselectedindex"
};
const open = {
  title: "open",
  description: "Use the open function to open a modal or a drawer.",
  example: "open(id: string)",
  documentation: "https://www.windmill.dev/docs/apps/app-runnable-panel#open"
};
const clearFiles = {
  title: "clearFiles",
  description: "Clear the files of a file input component.",
  example: "clearFiles(id: string)",
  documentation: "https://www.windmill.dev/docs/apps/app-runnable-panel#clearfiles"
};
const close = {
  title: "close",
  description: "Use the close function to close a modal or a drawer.",
  example: "close(id: string)",
  documentation: "https://www.windmill.dev/docs/apps/app-runnable-panel#close"
};
const validate = {
  title: "validate",
  description: "Validate a specific field of a form",
  example: "validate(id: string, key: string)"
};
const invalidate = {
  title: "invalidate",
  description: "Invalidate a specific field of a form",
  example: "invalidate(id: string, key: string, error: string)"
};
const validateAll = {
  title: "validateAll",
  description: "Validate all fields of a form",
  example: "validateAll(id: string, key: string)"
};
function getComponentControl(type) {
  switch (type) {
    case "tabscomponent":
      return [setTab];
    case "selectstepcomponent":
      return [setTab, setValue];
    case "selecttabcomponent":
      return [setTab, setValue];
    case "conditionalwrapper":
    case "steppercomponent":
      return [setTab];
    case "modalcomponent":
      return [open, close];
    case "drawercomponent":
      return [open, close];
    case "aggridcomponent":
    case "aggridcomponentee":
    case "aggridinfinitecomponent":
    case "aggridinfinitecomponentee":
      return [getAgGrid, setSelectedIndex];
    case "s3fileinputcomponent":
      return [clearFiles];
    case "displaycomponent":
    case "dateinputcomponent":
    case "timeinputcomponent":
    case "datetimeinputcomponent":
    case "textinputcomponent":
    case "numberinputcomponent":
    case "currencycomponent":
    case "checkboxcomponent":
    case "rangecomponent":
    case "multiselectcomponent":
    case "multiselectcomponentv2":
    case "selectcomponent":
    case "slidercomponent":
    case "dateslidercomponent":
    case "quillcomponent":
    case "textcomponent":
    case "textareainputcomponent":
      return [setValue];
    case "formcomponent":
    case "schemaformcomponent":
    case "formbuttoncomponent":
      return [setValue, validate, validateAll, invalidate];
    case "tablecomponent":
      return [setSelectedIndex];
    case "dbexplorercomponent":
      return [recompute];
    default:
      if (components[type].initialData["componentInput"]) {
        return [recompute];
      } else {
        return [];
      }
  }
}
const ComponentControl = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  const componentControls = getComponentControl(type);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  return `${validate_component(HighlightTheme, "HighlightTheme").$$render($$result, {}, {}, {})} ${componentControls?.length > 0 ? `${validate_component(PanelSection, "PanelSection").$$render($$result, { title: "Controls" }, {}, {
    action: () => {
      return `<div slot="action" class="flex justify-end flex-wrap gap-1">${validate_component(Button, "Button").$$render(
        $$result,
        {
          color: "light",
          size: "xs2",
          btnClasses: "text-2xs font-normal"
        },
        {},
        {
          default: () => {
            return `${escape("Show")} details`;
          }
        }
      )}</div>`;
    },
    default: () => {
      return `${`<div class="flex flex-row gap-1 flex-wrap">${each(componentControls, (control) => {
        return `<span class="inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium border">${escape(control.title)} </span>`;
      })}</div>`}`;
    }
  })}` : ``}`;
});
const GridAgGridLicenseKey = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { license } = $$props;
  let valid = false;
  async function checkLicenseKey(key) {
    try {
      const { LicenseManager } = await import("ag-grid-enterprise");
      let details = LicenseManager.getLicenseDetails(key);
      valid = details.valid;
    } catch (e) {
      console.error(e);
    }
  }
  if ($$props.license === void 0 && $$bindings.license && license !== void 0) $$bindings.license(license);
  license && checkLicenseKey(license);
  return `<div class="p-2"><span class="text-xs font-semibold" data-svelte-h="svelte-1o5qj2l">AgGrid EE License Key</span> <input type="text" placeholder="AgGrid Enterprise"${add_attribute("value", license, 0)}> ${valid ? `${validate_component(Badge, "Badge").$$render($$result, { color: "green" }, {}, {
    default: () => {
      return `Valid`;
    }
  })}` : `${validate_component(Badge, "Badge").$$render($$result, { color: "red" }, {}, {
    default: () => {
      return `Invalid`;
    }
  })}`}</div>`;
});
const PlotlyRichEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { datasets = void 0 } = $$props;
  let { xData = void 0 } = $$props;
  let { id } = $$props;
  if ($$props.datasets === void 0 && $$bindings.datasets && datasets !== void 0) $$bindings.datasets(datasets);
  if ($$props.xData === void 0 && $$bindings.xData && xData !== void 0) $$bindings.xData(xData);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(PanelSection, "PanelSection").$$render(
      $$result,
      {
        title: `Plotly configuration`,
        tooltip: "The configuration is divided into two parts: X-axis data and an array of datasets. Each dataset hold the data for the Y-axis and the configuration for the plot (type, color, etc)."
      },
      {},
      {
        default: () => {
          return `<div class="w-full flex flex-col gap-4">${xData ? `${validate_component(InputsSpecEditor, "InputsSpecEditor").$$render(
            $$result,
            {
              key: `X-axis data`,
              id,
              userInputEnabled: false,
              shouldCapitalize: true,
              resourceOnly: false,
              fieldType: xData?.["fieldType"],
              subFieldType: xData?.["subFieldType"],
              format: xData?.["format"],
              selectOptions: xData?.["selectOptions"],
              tooltip: xData?.["tooltip"],
              fileUpload: xData?.["fileUpload"],
              placeholder: xData?.["placeholder"],
              customTitle: xData?.["customTitle"],
              displayType: false,
              componentInput: xData
            },
            {
              componentInput: ($$value) => {
                xData = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``} ${datasets ? `${validate_component(InputsSpecEditor, "InputsSpecEditor").$$render(
            $$result,
            {
              key: `Dataset`,
              id,
              userInputEnabled: false,
              shouldCapitalize: true,
              resourceOnly: false,
              fieldType: datasets?.["fieldType"],
              subFieldType: datasets?.["subFieldType"],
              format: datasets?.["format"],
              selectOptions: datasets?.["selectOptions"],
              tooltip: "For each dataset, you can specify the data for the Y-axis and the configuration for the plot (type, color, etc). If you want to have an eval for every data point, you can switch to JSON mode.",
              fileUpload: datasets?.["fileUpload"],
              placeholder: datasets?.["placeholder"],
              customTitle: datasets?.["customTitle"],
              displayType: false,
              shouldFormatExpression: true,
              allowTypeChange: false,
              componentInput: datasets
            },
            {
              componentInput: ($$value) => {
                datasets = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const ChartJSRichEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { datasets = void 0 } = $$props;
  let { xData = void 0 } = $$props;
  let { id } = $$props;
  if ($$props.datasets === void 0 && $$bindings.datasets && datasets !== void 0) $$bindings.datasets(datasets);
  if ($$props.xData === void 0 && $$bindings.xData && xData !== void 0) $$bindings.xData(xData);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(PanelSection, "PanelSection").$$render(
      $$result,
      {
        title: `Plotly configuration`,
        tooltip: "The configuration is divided into two parts: X-axis data and an array of datasets. Each dataset hold the data for the Y-axis and the configuration for the plot (type, color, etc)."
      },
      {},
      {
        default: () => {
          return `<div class="w-full flex flex-col gap-4">${xData ? `${validate_component(InputsSpecEditor, "InputsSpecEditor").$$render(
            $$result,
            {
              key: `X-axis data`,
              id,
              userInputEnabled: false,
              shouldCapitalize: true,
              resourceOnly: false,
              fieldType: xData?.["fieldType"],
              subFieldType: xData?.["subFieldType"],
              format: xData?.["format"],
              selectOptions: xData?.["selectOptions"],
              tooltip: xData?.["tooltip"],
              fileUpload: xData?.["fileUpload"],
              placeholder: xData?.["placeholder"],
              customTitle: xData?.["customTitle"],
              displayType: false,
              componentInput: xData
            },
            {
              componentInput: ($$value) => {
                xData = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``} ${datasets ? `${validate_component(InputsSpecEditor, "InputsSpecEditor").$$render(
            $$result,
            {
              key: `Dataset`,
              id,
              userInputEnabled: false,
              shouldCapitalize: true,
              resourceOnly: false,
              fieldType: datasets?.["fieldType"],
              subFieldType: datasets?.["subFieldType"],
              format: datasets?.["format"],
              selectOptions: datasets?.["selectOptions"],
              tooltip: "For each dataset, you can specify the data for the Y-axis and the configuration for the plot (type, color, etc). If you want to have an eval for every data point, you can switch to JSON mode.",
              fileUpload: datasets?.["fileUpload"],
              placeholder: datasets?.["placeholder"],
              customTitle: datasets?.["customTitle"],
              displayType: false,
              shouldFormatExpression: true,
              allowTypeChange: false,
              componentInput: datasets
            },
            {
              componentInput: ($$value) => {
                datasets = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const AGChartRichEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { datasets = void 0 } = $$props;
  let { xData = void 0 } = $$props;
  let { id } = $$props;
  if ($$props.datasets === void 0 && $$bindings.datasets && datasets !== void 0) $$bindings.datasets(datasets);
  if ($$props.xData === void 0 && $$bindings.xData && xData !== void 0) $$bindings.xData(xData);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(PanelSection, "PanelSection").$$render(
      $$result,
      {
        title: `AG Chart configuration`,
        tooltip: "The configuration is divided into two parts: X-axis data and an array of datasets. Each dataset hold the data for the Y-axis and the configuration for the plot (type, name, etc)."
      },
      {},
      {
        default: () => {
          return `<div class="w-full flex flex-col gap-4">${xData ? `${validate_component(InputsSpecEditor, "InputsSpecEditor").$$render(
            $$result,
            {
              key: `X-axis data`,
              id,
              userInputEnabled: false,
              shouldCapitalize: true,
              resourceOnly: false,
              fieldType: xData?.["fieldType"],
              subFieldType: xData?.["subFieldType"],
              format: xData?.["format"],
              selectOptions: xData?.["selectOptions"],
              tooltip: xData?.["tooltip"],
              fileUpload: xData?.["fileUpload"],
              placeholder: xData?.["placeholder"],
              customTitle: xData?.["customTitle"],
              displayType: false,
              componentInput: xData
            },
            {
              componentInput: ($$value) => {
                xData = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``} ${datasets ? `${validate_component(InputsSpecEditor, "InputsSpecEditor").$$render(
            $$result,
            {
              key: `Dataset`,
              id,
              userInputEnabled: false,
              shouldCapitalize: true,
              resourceOnly: false,
              fieldType: datasets?.["fieldType"],
              subFieldType: datasets?.["subFieldType"],
              format: datasets?.["format"],
              selectOptions: datasets?.["selectOptions"],
              tooltip: "For each dataset, you can specify the data for the Y-axis and the configuration for the plot (type, color, etc). If you want to have an eval for every data point, you can switch to JSON mode.",
              fileUpload: datasets?.["fileUpload"],
              placeholder: datasets?.["placeholder"],
              customTitle: datasets?.["customTitle"],
              displayType: false,
              shouldFormatExpression: true,
              allowTypeChange: false,
              componentInput: datasets
            },
            {
              componentInput: ($$value) => {
                datasets = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const ComponentPanelDataSource = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_worldStore;
  let { component } = $$props;
  let convertToUIEditorCallback = void 0;
  let selected = "ui-editor";
  const { worldStore } = getContext("AppViewerContext");
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => value);
  function isAgChartsComponent() {
    return component.type === "agchartscomponent" || component.type === "agchartscomponentee";
  }
  if ($$props.component === void 0 && $$bindings.component && component !== void 0) $$bindings.component(component);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${component.type === "plotlycomponentv2" || component.type === "chartjscomponentv2" || component.type === "agchartscomponent" || component.type === "agchartscomponentee" ? `<div class="p-2">${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
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
          return `${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              value: "ui-editor",
              label: "UI Editor",
              tooltip: "Use the UI editor to quickly create a plotly chart."
            },
            {},
            {}
          )} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              value: "json",
              label: "JSON",
              tooltip: "Switch to JSON mode for complete customization of Plotly settings."
            },
            {},
            {}
          )}`;
        }
      }
    )}</div> ${selected === "ui-editor" ? `${component.type === "plotlycomponentv2" ? `${validate_component(PlotlyRichEditor, "PlotlyRichEditor").$$render(
      $$result,
      {
        id: component.id,
        datasets: component.datasets,
        xData: component.xData
      },
      {
        datasets: ($$value) => {
          component.datasets = $$value;
          $$settled = false;
        },
        xData: ($$value) => {
          component.xData = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${isAgChartsComponent() ? `${validate_component(AGChartRichEditor, "AGChartRichEditor").$$render(
      $$result,
      {
        id: component.id,
        datasets: component.datasets,
        xData: component.xData
      },
      {
        datasets: ($$value) => {
          component.datasets = $$value;
          $$settled = false;
        },
        xData: ($$value) => {
          component.xData = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${component.type === "chartjscomponentv2" ? `${validate_component(ChartJSRichEditor, "ChartJSRichEditor").$$render(
      $$result,
      {
        id: component.id,
        datasets: component.datasets,
        xData: component.xData
      },
      {
        datasets: ($$value) => {
          component.datasets = $$value;
          $$settled = false;
        },
        xData: ($$value) => {
          component.xData = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}`}`}` : `${slots.default ? slots.default({}) : ``}`}` : `${slots.default ? slots.default({}) : ``}`} ${validate_component(ConfirmationModal, "ConfirmationModal").$$render(
      $$result,
      {
        open: Boolean(convertToUIEditorCallback),
        title: "Convert to UI Editor",
        confirmationText: "Remove"
      },
      {},
      {
        default: () => {
          return `<div class="flex flex-col w-full space-y-4" data-svelte-h="svelte-1tcu1fb"><span>Are you sure you want to convert this component to the UI Editor? The UI Editor does not
			support all the features of the JSON editor.</span></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_worldStore();
  return $$rendered;
});
const MenuItems = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_app;
  let $selectedComponent, $$unsubscribe_selectedComponent;
  let $$unsubscribe_errorByComponent;
  let { components: components2 } = $$props;
  let { id } = $$props;
  const { selectedComponent, app, errorByComponent } = getContext("AppViewerContext");
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => $selectedComponent = value);
  $$unsubscribe_app = subscribe(app, (value) => value);
  $$unsubscribe_errorByComponent = subscribe(errorByComponent, (value) => value);
  if ($$props.components === void 0 && $$bindings.components && components2 !== void 0) $$bindings.components(components2);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  $$unsubscribe_app();
  $$unsubscribe_selectedComponent();
  $$unsubscribe_errorByComponent();
  return `${validate_component(PanelSection, "PanelSection").$$render($$result, { title: `Menu items` }, {}, {
    default: () => {
      return `${components2.length == 0 ? `<span class="text-xs text-tertiary" data-svelte-h="svelte-gvtr8g">No action buttons</span>` : ``} ${each(components2, (component) => {
        return ` <div${add_attribute(
          "class",
          classNames("w-full text-xs font-bold gap-1 truncate py-1.5 px-2 cursor-pointer transition-all justify-between flex items-center border border-gray-3 rounded-md", "bg-surface border-gray-300  hover:bg-gray-100 focus:bg-gray-100 text-secondary", $selectedComponent?.includes(component.id) ? "outline outline-blue-500 bg-red-400" : ""),
          0
        )}>${validate_component(Badge, "Badge").$$render($$result, { color: "dark-indigo" }, {}, {
          default: () => {
            return `${escape(component.id)} `;
          }
        })} <div>${component.type == "buttoncomponent" ? `Button` : ``}</div> <div>${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "border",
            color: "red",
            startIcon: { icon: Trash },
            iconOnly: true
          },
          {},
          {}
        )}</div> </div>`;
      })} <div class="w-full flex gap-2">${validate_component(Button, "Button").$$render(
        $$result,
        {
          btnClasses: "gap-1 flex items-center text-sm text-tertiary",
          wrapperClasses: "w-full",
          color: "light",
          variant: "border",
          size: "xs",
          title: "Add Button",
          startIcon: { icon: Plus }
        },
        {},
        {
          default: () => {
            return `Add`;
          }
        }
      )}</div>`;
    }
  })}`;
});
const DecisionTreeGraphEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selectedNode;
  let $selectedNodeId, $$unsubscribe_selectedNodeId;
  let $$unsubscribe_debuggingComponents;
  let { component } = $$props;
  let { nodes } = $$props;
  let { rebuildOnChange = void 0 } = $$props;
  let drawer = void 0;
  const { debuggingComponents } = getContext("AppViewerContext");
  $$unsubscribe_debuggingComponents = subscribe(debuggingComponents, (value) => value);
  const selectedNodeId = writable(void 0);
  $$unsubscribe_selectedNodeId = subscribe(selectedNodeId, (value) => $selectedNodeId = value);
  setContext("DecisionTreeEditor", { selectedNodeId });
  if ($$props.component === void 0 && $$bindings.component && component !== void 0) $$bindings.component(component);
  if ($$props.nodes === void 0 && $$bindings.nodes && nodes !== void 0) $$bindings.nodes(nodes);
  if ($$props.rebuildOnChange === void 0 && $$bindings.rebuildOnChange && rebuildOnChange !== void 0) $$bindings.rebuildOnChange(rebuildOnChange);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    selectedNode = nodes?.find((node) => node.id == $selectedNodeId);
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
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
              title: "Decision tree",
              noPadding: true,
              tooltip: "Decision tree graph editor"
            },
            {},
            {
              default: () => {
                return `${validate_component(Splitpanes, "Splitpanes").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Pane, "Pane").$$render($$result, { size: 60 }, {}, {
                      default: () => {
                        return `<div class="w-full h-full">${``}</div>`;
                      }
                    })} ${validate_component(Pane, "Pane").$$render($$result, { size: 40 }, {}, {
                      default: () => {
                        return `<div class="h-full w-full bg-surface p-4 flex flex-col gap-6">${selectedNode ? `${validate_component(Section, "Section").$$render(
                          $$result,
                          {
                            label: "Conditions",
                            class: "w-full flex flex-col gap-2"
                          },
                          {},
                          {
                            action: () => {
                              return `${validate_component(Button, "Button").$$render(
                                $$result,
                                {
                                  size: "xs",
                                  color: "light",
                                  startIcon: { icon: Trash },
                                  variant: "border",
                                  disabled: selectedNode?.next?.length > 1 || nodes.length == 1
                                },
                                {},
                                {
                                  default: () => {
                                    return `Delete node`;
                                  }
                                }
                              )} `;
                            },
                            default: () => {
                              return `${validate_component(Label, "Label").$$render($$result, { label: "Summary" }, {}, {
                                default: () => {
                                  return `<input type="text" class="input input-primary input-bordered"${add_attribute("value", selectedNode.label, 0)}>`;
                                }
                              })} ${selectedNode.next.length > 1 ? `${each(
                                selectedNode.next.sort((n1, n2) => {
                                  return n1.id.localeCompare(n2.id);
                                }),
                                (subNode, index) => {
                                  return `${subNode.condition ? `<div class="flex flex-row gap-4 items-center w-full justify-center"><div class="grow relative">${validate_component(InputsSpecEditor, "InputsSpecEditor").$$render(
                                    $$result,
                                    {
                                      key: `condition-${selectedNode.id}-${index}`,
                                      customTitle: index === 0 ? "Goes to the default branch" : `${index > 0 ? "Otherwise " : ""}Goes to branch ${index}`,
                                      id: selectedNode.id,
                                      userInputEnabled: false,
                                      shouldCapitalize: true,
                                      resourceOnly: false,
                                      fieldType: subNode.condition?.["fieldType"],
                                      subFieldType: subNode.condition?.["subFieldType"],
                                      format: subNode.condition?.["format"],
                                      selectOptions: subNode.condition?.["selectOptions"],
                                      tooltip: subNode.condition?.["tooltip"],
                                      fileUpload: subNode.condition?.["fileUpload"],
                                      placeholder: subNode.condition?.["placeholder"],
                                      displayType: false,
                                      fixedOverflowWidgets: false,
                                      componentInput: subNode.condition
                                    },
                                    {
                                      componentInput: ($$value) => {
                                        subNode.condition = $$value;
                                        $$settled = false;
                                      }
                                    },
                                    {}
                                  )} <div class="flex flex-row gap-1 mt-2">${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
                                    default: () => {
                                      return `${escape(`Next node id: ${subNode.id}`)} `;
                                    }
                                  })} ${validate_component(Badge, "Badge").$$render($$result, { color: "indigo" }, {}, {
                                    default: () => {
                                      return `${escape(`Next tab index: ${nodes?.findIndex((node) => node.id == subNode.id)}`)} `;
                                    }
                                  })} </div></div> </div>` : ``}`;
                                }
                              )} ${validate_component(Alert, "Alert").$$render(
                                $$result,
                                {
                                  type: "info",
                                  class: "mt-4",
                                  title: "Multiple branches",
                                  size: "xs"
                                },
                                {},
                                {
                                  default: () => {
                                    return `The conditions above are evaluated in order. The first condition that is met will
									be the branch that is taken.`;
                                  }
                                }
                              )}` : ``} ${selectedNode.allowed ? `${validate_component(InputsSpecEditor, "InputsSpecEditor").$$render(
                                $$result,
                                {
                                  key: `Can proceed to next step if:`,
                                  id: "allowed",
                                  userInputEnabled: false,
                                  shouldCapitalize: true,
                                  resourceOnly: false,
                                  fieldType: selectedNode.allowed?.["fieldType"],
                                  subFieldType: selectedNode.allowed?.["subFieldType"],
                                  format: selectedNode.allowed?.["format"],
                                  selectOptions: selectedNode.allowed?.["selectOptions"],
                                  tooltip: selectedNode.allowed?.["tooltip"],
                                  fileUpload: selectedNode.allowed?.["fileUpload"],
                                  placeholder: selectedNode.allowed?.["placeholder"],
                                  customTitle: selectedNode.allowed?.["customTitle"],
                                  displayType: false,
                                  fixedOverflowWidgets: false,
                                  componentInput: selectedNode.allowed
                                },
                                {
                                  componentInput: ($$value) => {
                                    selectedNode.allowed = $$value;
                                    $$settled = false;
                                  }
                                },
                                {}
                              )}` : ``} ${selectedNode?.next.length > 0 ? `<div>${validate_component(Button, "Button").$$render(
                                $$result,
                                {
                                  startIcon: { icon: Plus },
                                  color: "light",
                                  variant: "border",
                                  size: "xs"
                                },
                                {},
                                {
                                  default: () => {
                                    return `Add branch`;
                                  }
                                }
                              )}</div>` : ``}`;
                            }
                          }
                        )}` : ``}</div>`;
                      }
                    })}`;
                  }
                })}`;
              }
            }
          )}`;
        }
      }
    )} <div class="p-2 flex flex-col gap-2">${validate_component(Button, "Button").$$render(
      $$result,
      {
        tooltip: "Decision tree graph editor",
        id: "decision-tree-graph-editor",
        size: "xs",
        color: "dark",
        startIcon: { icon: Network }
      },
      {},
      {
        default: () => {
          return `Graph editor`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_selectedNodeId();
  $$unsubscribe_debuggingComponents();
  return $$rendered;
});
const GridAgChartsLicenseKe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { license } = $$props;
  let initial = license;
  if ($$props.license === void 0 && $$bindings.license && license !== void 0) $$bindings.license(license);
  return `<div class="p-2"><span class="text-xs font-semibold" data-svelte-h="svelte-ej6kqc">AgCharts EE License Key</span> <input type="text" placeholder="AgCharts Enterprise"${add_attribute("value", license, 0)}> ${initial != license ? `<div class="text-yellow-500 text-xs" data-svelte-h="svelte-wxtagk">Please reload the page to see the effect of the new license key</div>` : ``}</div>`;
});
const ContextVariables = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let { type } = $$props;
  let { id } = $$props;
  const { app } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  const tables2 = [
    "aggridcomponent",
    "aggridcomponentee",
    "dbexplorercomponent",
    "aggridinfinitecomponent",
    "aggridinfinitecomponentee"
  ];
  const contextVariables = [];
  function addContextVariable(label, description) {
    if (!contextVariables.some((variable) => variable.label === label)) {
      contextVariables.push({ label, description });
    }
  }
  if (tables2.includes(type)) {
    addContextVariable("row", "The current row of a table. Row is an object with keys index and value.");
  } else if (type === "s3fileinputcomponent" || type === "fileinputcomponent") {
    addContextVariable("file", "The current file being processed.");
  } else if (type === "containercomponent") {
    addContextVariable("group", "The group name of the container.");
  } else if (type === "listcomponent") {
    addContextVariable("iter", "The current iteration of the list. Iter is an object with keys index and value.");
  }
  function addGridItemContext(parentId) {
    if (!parentId) return;
    const gridItem = findGridItem($app, parentId);
    addParentContextVariable(gridItem);
  }
  function processParents(parents) {
    parents.forEach((parentId) => {
      if (parentId) {
        const parsedParentId = parentId?.includes("-") ? parentId.split("-")[0] : parentId;
        addGridItemContext(parsedParentId);
      }
    });
  }
  function findParentsContextVariables(id2) {
    if (!id2) return;
    const allParents = dfs($app.grid, id2, $app.subgrids ?? {});
    if (!allParents) return;
    allParents.pop();
    processParents(allParents);
  }
  findParentsContextVariables(id);
  function addParentContextVariable(parent) {
    if (parent?.data?.type === "containercomponent") {
      addContextVariable("group", "The group name of the container.");
    } else if (parent?.data?.type === "listcomponent") {
      addContextVariable("iter", "The current iteration of the list. Iter is an object with keys index and value.");
    } else if (parent?.data?.type && tables2.includes(parent?.data?.type)) {
      addContextVariable("row", "The current row of a table. Row is an object with keys index and value.");
    }
  }
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  $$unsubscribe_app();
  return `${contextVariables.length > 0 ? `<div class="my-2"><div class="text-xs font-semibold flex flex-row gap-1 items-center"><div class="mb-1" data-svelte-h="svelte-ycaji3">Context</div> ${validate_component(Tooltip, "Tooltip").$$render($$result, { small: true, light: true }, {}, {
    default: () => {
      return `Context are variables available in any expressions of config and runnable inputs that are
				specific to this particular component. Hover over the variables to see their descriptions.`;
    }
  })}</div> <div class="flex flex-row gap-1">${each(contextVariables, (contextVariable) => {
    return `${validate_component(Popover, "Popover").$$render($$result, {}, {}, {
      text: () => {
        return `${escape(contextVariable.description)} `;
      },
      default: () => {
        return `<span class="inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium border">${escape(contextVariable.label)}</span> `;
      }
    })}`;
  })}</div></div>` : ``}`;
});
const inputWidth = 280;
const EventHandlerItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let width;
  let { items } = $$props;
  let { value = void 0 } = $$props;
  let { title } = $$props;
  let { tooltip } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.tooltip === void 0 && $$bindings.tooltip && tooltip !== void 0) $$bindings.tooltip(tooltip);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    width = 0;
    $$rendered = `<div${add_attribute(
      "class",
      twMerge("flex flex-col justify-between w-full", width < inputWidth ? "flex-col gap-2" : "flex-row gap-16 "),
      0
    )}><div class="flex items-center text-xs h-8 whitespace-nowrap">${escape(title)} ${validate_component(Tooltip, "Tooltip").$$render($$result, { light: true, small: true }, {}, {
      default: () => {
        return `${escape(tooltip)}`;
      }
    })}</div> <div class="w-full">${items.length === 0 ? `<div class="text-xs text-secondary w-full flex items-center justify-end h-8" data-svelte-h="svelte-15pam68">No components to recompute.</div>` : `${validate_component(MultiSelectWrapper, "MultiSelect").$$render(
      $$result,
      { items, value },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const EventHandlers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $runnableComponents, $$unsubscribe_runnableComponents;
  const { runnableComponents } = getContext("AppViewerContext");
  $$unsubscribe_runnableComponents = subscribe(runnableComponents, (value) => $runnableComponents = value);
  let { item } = $$props;
  let { ownId } = $$props;
  const componentsWithEventHandler = [
    "modalcomponent",
    "drawercomponent",
    "buttoncomponent",
    "formcomponent",
    "formbuttoncomponent",
    "checkboxcomponent",
    "resourceselectcomponent",
    "selectcomponent",
    "tabscomponent",
    "conditionalwrapper",
    "fileinputcomponent",
    "s3fileinputcomponent",
    "steppercomponent"
  ];
  if ($$props.item === void 0 && $$bindings.item && item !== void 0) $$bindings.item(item);
  if ($$props.ownId === void 0 && $$bindings.ownId && ownId !== void 0) $$bindings.ownId(ownId);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${componentsWithEventHandler.includes(item.data.type) ? `${validate_component(PanelSection, "PanelSection").$$render(
      $$result,
      {
        title: "Event handlers",
        tooltip: "Event handlers are used to trigger actions on other components when a specific event occurs. For example, you can trigger a recompute on a component when a button is clicked."
      },
      {},
      {
        default: () => {
          return `${`onOpenRecomputeIds` in item.data && Array.isArray(item.data.onOpenRecomputeIds) || item.data.type === "modalcomponent" || item.data.type === "drawercomponent" ? `${validate_component(EventHandlerItem, "EventHandlerItem").$$render(
            $$result,
            {
              title: "on open",
              tooltip: "Select components to recompute after this component was opened",
              items: Object.keys($runnableComponents).filter((id) => id !== ownId),
              value: item.data.onOpenRecomputeIds
            },
            {
              value: ($$value) => {
                item.data.onOpenRecomputeIds = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``} ${`onCloseRecomputeIds` in item.data && Array.isArray(item.data.onCloseRecomputeIds) || item.data.type === "modalcomponent" || item.data.type === "drawercomponent" ? `${validate_component(EventHandlerItem, "EventHandlerItem").$$render(
            $$result,
            {
              title: "on close",
              tooltip: "Select components to recompute after this component was closed",
              items: Object.keys($runnableComponents).filter((id) => id !== ownId),
              value: item.data.onCloseRecomputeIds
            },
            {
              value: ($$value) => {
                item.data.onCloseRecomputeIds = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``} ${`recomputeIds` in item.data && Array.isArray(item.data.recomputeIds) || item.data.type === "buttoncomponent" || item.data.type === "formcomponent" || item.data.type === "formbuttoncomponent" || item.data.type === "checkboxcomponent" ? `${validate_component(EventHandlerItem, "EventHandlerItem").$$render(
            $$result,
            {
              title: "on success",
              tooltip: "Select components to recompute after this runnable has successfully run",
              items: Object.keys($runnableComponents).filter((id) => id !== ownId),
              value: item.data.recomputeIds
            },
            {
              value: ($$value) => {
                item.data.recomputeIds = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``} ${item.data.type === "checkboxcomponent" ? `${validate_component(EventHandlerItem, "EventHandlerItem").$$render(
            $$result,
            {
              title: "on toggle",
              tooltip: "Contrary to onSuccess, this will only trigger recompute when a human toggle the change, not if it set by a default value or by setValue",
              items: Object.keys($runnableComponents).filter((id) => id !== ownId),
              value: item.data.onToggle
            },
            {
              value: ($$value) => {
                item.data.onToggle = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``} ${item.data.type === "resourceselectcomponent" || item.data.type === "selectcomponent" ? `${validate_component(EventHandlerItem, "EventHandlerItem").$$render(
            $$result,
            {
              title: "on select",
              tooltip: "Contrary to onSuccess, this will only trigger recompute when a human select an item, not if it set by a default value or by setValue",
              items: Object.keys($runnableComponents).filter((id) => id !== ownId),
              value: item.data.onSelect
            },
            {
              value: ($$value) => {
                item.data.onSelect = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``} ${item.data.type === "tabscomponent" || item.data.type === "conditionalwrapper" ? `${validate_component(EventHandlerItem, "EventHandlerItem").$$render(
            $$result,
            {
              title: "on tab change",
              tooltip: "Select components to recompute after the selected tab was changed",
              items: Object.keys($runnableComponents).filter((id) => id !== ownId),
              value: item.data.onTabChange
            },
            {
              value: ($$value) => {
                item.data.onTabChange = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``} ${item.data.type === "fileinputcomponent" || item.data.type === "s3fileinputcomponent" ? `${validate_component(EventHandlerItem, "EventHandlerItem").$$render(
            $$result,
            {
              title: "on file change",
              tooltip: "Select components to recompute after a file was selected",
              items: Object.keys($runnableComponents).filter((id) => id !== ownId),
              value: item.data.onFileChange
            },
            {
              value: ($$value) => {
                item.data.onFileChange = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``} ${item.data.type === "steppercomponent" ? `${validate_component(EventHandlerItem, "EventHandlerItem").$$render(
            $$result,
            {
              title: "on next",
              tooltip: "Select components to recompute after the next button was clicked",
              items: Object.keys($runnableComponents).filter((id) => id !== ownId),
              value: item.data.onNext
            },
            {
              value: ($$value) => {
                item.data.onNext = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``} ${item.data.type === "steppercomponent" ? `${validate_component(EventHandlerItem, "EventHandlerItem").$$render(
            $$result,
            {
              title: "on previous",
              tooltip: "Select components to recompute after the previous button was clicked",
              items: Object.keys($runnableComponents).filter((id) => id !== ownId),
              value: item.data.onPrevious
            },
            {
              value: ($$value) => {
                item.data.onPrevious = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``}`;
        }
      }
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_runnableComponents();
  return $$rendered;
});
const NavbarWizard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedComponent, $$unsubscribe_selectedComponent;
  let { value } = $$props;
  const { selectedComponent } = getContext("AppViewerContext");
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value2) => $selectedComponent = value2);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Popup, "Popup").$$render(
      $$result,
      {
        floatingConfig: {
          strategy: "fixed",
          placement: "left-end",
          middleware: [offset(8), flip(), shift()]
        },
        containerClasses: "border rounded-lg shadow-lg bg-surface p-4"
      },
      {},
      {
        button: () => {
          return `${slots.trigger ? slots.trigger({}) : ``} `;
        },
        default: () => {
          return `${value ? `${validate_component(Section, "Section").$$render(
            $$result,
            {
              label: "Navbar item",
              class: "flex flex-col gap-2 w-80 overflow-y-auto max-h-screen"
            },
            {},
            {
              default: () => {
                return `${validate_component(InputsSpecEditor, "InputsSpecEditor").$$render(
                  $$result,
                  {
                    key: "Label",
                    id: $selectedComponent?.[0] ?? "",
                    userInputEnabled: false,
                    shouldCapitalize: true,
                    resourceOnly: false,
                    fieldType: value.label?.["fieldType"],
                    subFieldType: value.label?.["subFieldType"],
                    format: value.label?.["format"],
                    selectOptions: value.label?.["selectOptions"],
                    fileUpload: value.label?.["fileUpload"],
                    placeholder: value.label?.["placeholder"],
                    customTitle: value.label?.["customTitle"],
                    displayType: false,
                    componentInput: value.label
                  },
                  {
                    componentInput: ($$value) => {
                      value.label = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )} ${validate_component(OneOfInputSpecsEditor, "OneOfInputSpecsEditor").$$render(
                  $$result,
                  {
                    key: "Link",
                    id: $selectedComponent?.[0] ?? "",
                    shouldCapitalize: true,
                    resourceOnly: false,
                    inputSpecsConfiguration: value.path?.["configuration"],
                    labels: value.path?.["labels"],
                    tooltip: value.path?.["tooltip"],
                    oneOf: value.path
                  },
                  {
                    oneOf: ($$value) => {
                      value.path = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )} ${validate_component(Alert, "Alert").$$render(
                  $$result,
                  {
                    size: "xs",
                    title: "Link Behavior",
                    collapsible: true
                  },
                  {},
                  {
                    default: () => {
                      return `<ul class="list-disc" data-svelte-h="svelte-1egguha"><li>If you select an app, there are two cases:
						<div class="ml-2"><ul class="list-disc"><li>You selected the current app itself: Clicking on the link will highlight the item,
									and set the app in the output. Note that adding query params or an hash lets you
									distinguish between different items. Also note that query params can be retrieved
									from the context: \`ctx.query\`.</li> <li>You selected another app: Clicking on the link navigates to the selected app
									without reloading the page. In the editor, it will open in a new tab.</li></ul></div></li> <li>If you select an external link, clicking on the link will navigate to the selected link
						in a new tab.</li></ul>`;
                    }
                  }
                )} ${validate_component(InputsSpecEditor, "InputsSpecEditor").$$render(
                  $$result,
                  {
                    key: "Disabled",
                    id: $selectedComponent?.[0] ?? "",
                    userInputEnabled: false,
                    shouldCapitalize: true,
                    resourceOnly: false,
                    fieldType: value.disabled?.["fieldType"],
                    subFieldType: value.disabled?.["subFieldType"],
                    format: value.disabled?.["format"],
                    selectOptions: value.disabled?.["selectOptions"],
                    fileUpload: value.disabled?.["fileUpload"],
                    placeholder: value.disabled?.["placeholder"],
                    customTitle: value.disabled?.["customTitle"],
                    displayType: false,
                    componentInput: value.disabled
                  },
                  {
                    componentInput: ($$value) => {
                      value.disabled = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )} ${validate_component(InputsSpecEditor, "InputsSpecEditor").$$render(
                  $$result,
                  {
                    key: "Hidden",
                    id: $selectedComponent?.[0] ?? "",
                    userInputEnabled: false,
                    shouldCapitalize: true,
                    resourceOnly: false,
                    fieldType: value.hidden?.["fieldType"],
                    subFieldType: value.hidden?.["subFieldType"],
                    format: value.hidden?.["format"],
                    selectOptions: value.hidden?.["selectOptions"],
                    fileUpload: value.hidden?.["fileUpload"],
                    placeholder: value.hidden?.["placeholder"],
                    customTitle: value.hidden?.["customTitle"],
                    displayType: false,
                    componentInput: value.hidden
                  },
                  {
                    componentInput: ($$value) => {
                      value.hidden = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )} ${validate_component(Label, "Label").$$render($$result, { label: "Icon", class: "w-full" }, {}, {
                  default: () => {
                    return `${validate_component(IconSelectInput, "IconSelectInput").$$render(
                      $$result,
                      {
                        floatingConfig: {
                          strategy: "fixed",
                          placement: "left-end",
                          middleware: [offset(8), flip(), shift()]
                        },
                        shouldUsePortal: false,
                        value: value.icon
                      },
                      {
                        value: ($$value) => {
                          value.icon = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}`;
                  }
                })} ${validate_component(Label, "Label").$$render($$result, { label: "Caption" }, {}, {
                  default: () => {
                    return `<input type="text"${add_attribute("value", value.caption, 0)}>`;
                  }
                })}`;
              }
            }
          )}` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_selectedComponent();
  return $$rendered;
});
const GridNavbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { navbarItems = [] } = $$props;
  let { id } = $$props;
  const { appPath } = getContext("AppViewerContext");
  let items = navbarItems.map((tab, index) => {
    return {
      value: tab,
      id: generateRandomString(),
      originalIndex: index
    };
  });
  let resolvedPaths = [];
  let resolvedLabels = [];
  if ($$props.navbarItems === void 0 && $$bindings.navbarItems && navbarItems !== void 0) $$bindings.navbarItems(navbarItems);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    navbarItems = items.map((item) => item.value);
    $$rendered = `${validate_component(PanelSection, "PanelSection").$$render(
      $$result,
      {
        title: `Items ${navbarItems && navbarItems.length > 0 ? `(${navbarItems.length})` : ""}`
      },
      {},
      {
        default: () => {
          return `${!navbarItems || navbarItems.length == 0 ? `<span class="text-xs text-tertiary" data-svelte-h="svelte-1192b8d">No items</span>` : ``} <div class="w-full flex gap-2 flex-col mt-2"><section>${each(items, (item, index) => {
            return `<div class="border rounded-md p-2 mb-2 bg-surface">${validate_component(ResolveConfig, "ResolveConfig").$$render(
              $$result,
              {
                id,
                key: "label",
                extraKey: item.id,
                configuration: item.value.label,
                resolvedConfig: resolvedLabels[item.originalIndex]
              },
              {
                resolvedConfig: ($$value) => {
                  resolvedLabels[item.originalIndex] = $$value;
                  $$settled = false;
                }
              },
              {}
            )} <div class="w-full flex flex-row gap-2 items-center relative my-1"><div class="text-xs px-2 border-y flex flex-row items-center border rounded-md h-8 w-full">${escape(resolvedLabels[item.originalIndex] ?? "No label")}</div> <div class="absolute right-[4.5rem]">${validate_component(CloseButton, "CloseButton").$$render($$result, { noBg: true, small: true }, {}, {})}</div> ${validate_component(NavbarWizard, "NavbarWizard").$$render(
              $$result,
              { value: items[index].value },
              {
                value: ($$value) => {
                  items[index].value = $$value;
                  $$settled = false;
                }
              },
              {
                trigger: () => {
                  return `${validate_component(Button, "Button").$$render(
                    $$result,
                    {
                      color: "light",
                      size: "xs2",
                      nonCaptureEvent: true
                    },
                    {},
                    {
                      default: () => {
                        return `<div class="flex flex-row items-center gap-2 text-xs font-normal">${validate_component(Settings, "Settings").$$render($$result, { size: 16 }, {}, {})}</div> `;
                      }
                    }
                  )} `;
                }
              }
            )} <div class="flex flex-col justify-center gap-2">  <div class="handle w-4 h-4" aria-label="drag-handle">${validate_component(Grip_vertical, "GripVertical").$$render($$result, { size: 16 }, {}, {})}</div> </div></div> ${validate_component(ResolveNavbarItemPath, "ResolveNavbarItemPath").$$render(
              $$result,
              {
                navbarItem: item.value,
                id,
                index,
                resolvedPath: resolvedPaths[item.originalIndex]
              },
              {
                resolvedPath: ($$value) => {
                  resolvedPaths[item.originalIndex] = $$value;
                  $$settled = false;
                }
              },
              {}
            )} ${resolvedPaths[item.originalIndex] ? `<div class="text-xs text-tertiary flex gap-2 flex-row flex-wrap">Path: ${validate_component(Badge, "Badge").$$render($$result, { small: true }, {}, {
              default: () => {
                return `${escape(resolvedPaths[item.originalIndex])}`;
              }
            })} ${appPath && resolvedPaths[item.originalIndex]?.includes(appPath) ? `${validate_component(Badge, "Badge").$$render($$result, { small: true, color: "blue" }, {}, {
              default: () => {
                return `Current app

										${validate_component(Tooltip, "Tooltip").$$render($$result, { class: "ml-2 !text-blue-900" }, {}, {
                  default: () => {
                    return `Clicking on those items will keep you in the current tab and change the output
											of the component.
										`;
                  }
                })} `;
              }
            })}` : ``} </div>` : `<div class="text-xs text-red-500" data-svelte-h="svelte-1afyu2t">No app path or url selected</div>`} </div>`;
          })}</section> ${validate_component(Button, "Button").$$render(
            $$result,
            {
              size: "xs",
              color: "light",
              variant: "border",
              startIcon: { icon: Plus },
              iconOnly: true
            },
            {},
            {}
          )}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const ComponentPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let extraLib;
  let $app, $$unsubscribe_app;
  let $state, $$unsubscribe_state;
  let $worldStore, $$unsubscribe_worldStore;
  let $$unsubscribe_runnableComponents;
  let $$unsubscribe_focusedGrid;
  let $$unsubscribe_selectedComponent;
  let $$unsubscribe_movingcomponents;
  let $$unsubscribe_errorByComponent;
  let $$unsubscribe_componentControl;
  let $$unsubscribe_stateId;
  let { componentSettings = void 0 } = $$props;
  let { onDelete = void 0 } = $$props;
  let { noGrid = false } = $$props;
  let { duplicateMoveAllowed = true } = $$props;
  const { app, runnableComponents, selectedComponent, worldStore, focusedGrid, stateId, state, errorByComponent, componentControl } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_runnableComponents = subscribe(runnableComponents, (value) => value);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_focusedGrid = subscribe(focusedGrid, (value) => value);
  $$unsubscribe_stateId = subscribe(stateId, (value) => value);
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  $$unsubscribe_errorByComponent = subscribe(errorByComponent, (value) => value);
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => value);
  const { history, movingcomponents } = getContext("AppEditorContext");
  $$unsubscribe_movingcomponents = subscribe(movingcomponents, (value) => value);
  const initialConfiguration = componentSettings?.item?.data?.type ? ccomponents[componentSettings.item.data.type]?.initialData?.configuration : {};
  const componentInput = componentSettings?.item?.data?.type ? ccomponents[componentSettings?.item?.data?.type]?.initialData?.componentInput : void 0;
  const hasInteraction = componentSettings?.item.data.type ? isTriggerable(componentSettings?.item.data.type) : false;
  let evalV2editor = void 0;
  if ($$props.componentSettings === void 0 && $$bindings.componentSettings && componentSettings !== void 0) $$bindings.componentSettings(componentSettings);
  if ($$props.onDelete === void 0 && $$bindings.onDelete && onDelete !== void 0) $$bindings.onDelete(onDelete);
  if ($$props.noGrid === void 0 && $$bindings.noGrid && noGrid !== void 0) $$bindings.noGrid(noGrid);
  if ($$props.duplicateMoveAllowed === void 0 && $$bindings.duplicateMoveAllowed && duplicateMoveAllowed !== void 0) $$bindings.duplicateMoveAllowed(duplicateMoveAllowed);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    extraLib = (componentSettings?.item?.data?.componentInput?.type === "template" || componentSettings?.item?.data?.componentInput?.type === "templatev2") && $worldStore ? buildExtraLib($worldStore?.outputsById ?? {}, componentSettings?.item?.data?.id, $state, false) : void 0;
    componentSettings?.item?.data && app.set($app);
    $$rendered = ` ${componentSettings?.item?.id && isTableAction(componentSettings?.item?.id, $app) ? `<div class="flex items-center px-3 py-2 bg-surface border-b text-xs font-semibold gap-2 justify-between"><div class="flex flex-row items-center gap-2">${validate_component(Popover, "Popover").$$render($$result, {}, {}, {
      text: () => {
        return `<div class="flex flex-row gap-1" data-svelte-h="svelte-n6sxx9">Back to table component</div> `;
      },
      default: () => {
        return `${validate_component(Button, "Button").$$render(
          $$result,
          {
            iconOnly: true,
            startIcon: { icon: Arrow_left },
            size: "xs",
            btnClasses: twMerge("p-1 text-gray-300 hover:!text-gray-600 dark:text-gray-500 dark:hover:!text-gray-200 bg-transparent"),
            color: "light"
          },
          {},
          {}
        )}`;
      }
    })} <div class="flex flex-row gap-2 items-center">Table action of table
				${validate_component(Badge, "Badge").$$render($$result, { color: "indigo" }, {}, {
      default: () => {
        return `${escape(componentSettings?.item?.id.split("_")[0])}`;
      }
    })}</div></div> ${validate_component(DocLink, "DocLink").$$render(
      $$result,
      {
        docLink: "https://www.windmill.dev/docs/apps/app_configuration_settings/aggrid_table#table-actions"
      },
      {},
      {}
    )}</div>` : ``} ${componentSettings?.item?.data ? (() => {
      let component = componentSettings.item.data;
      return ` <div class="flex justify-between items-center px-3 py-1 bg-surface-secondary"><div class="text-xs text-primary font-semibold">${escape(components[componentSettings.item.data.type]?.name ?? "Unknown")}</div> ${validate_component(DocLink, "DocLink").$$render(
        $$result,
        {
          docLink: components[componentSettings.item.data.type]?.documentationLink
        },
        {},
        {}
      )}</div> <div class="flex min-h-[calc(100%-32px)] flex-col min-w-[150px] w-full divide-y">${validate_component(ComponentPanelDataSource, "ComponentPanelDataSource").$$render(
        $$result,
        { component: componentSettings.item.data },
        {
          component: ($$value) => {
            componentSettings.item.data = $$value;
            $$settled = false;
          }
        },
        {
          default: () => {
            return `${component.componentInput ? `${validate_component(PanelSection, "PanelSection").$$render(
              $$result,
              {
                title: componentSettings?.item.data.type == "steppercomponent" ? "Validations" : componentSettings?.item.data.type == "s3fileinputcomponent" ? "Path template" : hasInteraction ? "Event handler" : "Data source",
                id: "component-input"
              },
              {},
              {
                action: () => {
                  return `<div class="flex flex-row gap-1 justify-center items-center">${validate_component(DocLink, "DocLink").$$render(
                    $$result,
                    {
                      docLink: "https://www.windmill.dev/docs/apps/app-runnable-panel#creating-a-runnable"
                    },
                    {},
                    {}
                  )} <div${add_attribute("class", classNames("text-white px-2 text-2xs py-0.5 font-bold rounded-sm", "bg-indigo-500"), 0)}>${escape(`${component.id}`)}</div></div> `;
                },
                default: () => {
                  return `${componentSettings.item.data.componentInput ? `${validate_component(ComponentInputTypeEditor, "ComponentInputTypeEditor").$$render(
                    $$result,
                    {
                      evalV2editor,
                      componentInput: componentSettings.item.data.componentInput
                    },
                    {
                      componentInput: ($$value) => {
                        componentSettings.item.data.componentInput = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )} <div class="flex flex-col w-full gap-2 mt-2">${componentSettings.item.data.componentInput.type === "static" ? `${validate_component(StaticInputEditor, "StaticInputEditor").$$render(
                    $$result,
                    {
                      id: component.id,
                      fieldType: componentInput?.fieldType,
                      subFieldType: componentInput?.subFieldType,
                      format: componentInput?.format,
                      componentInput: componentSettings.item.data.componentInput
                    },
                    {
                      componentInput: ($$value) => {
                        componentSettings.item.data.componentInput = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}` : `${componentSettings.item.data?.componentInput?.type === "template" || componentSettings.item.data?.componentInput?.type === "templatev2" ? `<div class="py-1 min-h-[28px] rounded border border-1 border-gray-500">${validate_component(TemplateEditor, "TemplateEditor").$$render(
                    $$result,
                    {
                      fontSize: 12,
                      extraLib,
                      code: componentSettings.item.data.componentInput.eval
                    },
                    {
                      code: ($$value) => {
                        componentSettings.item.data.componentInput.eval = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> ${componentSettings.item.data?.componentInput?.type === "templatev2" ? `${componentSettings.item.data?.componentInput.connections?.length > 0 ? `<div class="flex flex-wrap gap-2 items-center"><div class="text-2xs text-tertiary" data-svelte-h="svelte-1ftlunq">Re-evaluated on changes to:</div> <div class="flex flex-wrap gap-1">${each(componentSettings.item.data?.componentInput.connections ?? [], (connection) => {
                    return `<span class="inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium border">${escape(connection.componentId + "." + connection.id)} </span>`;
                  })}</div></div>` : ``}` : ``}` : `${componentSettings.item.data.componentInput.type === "connected" && component.componentInput !== void 0 ? `${validate_component(ConnectedInputEditor, "ConnectedInputEditor").$$render(
                    $$result,
                    {
                      componentInput: componentSettings.item.data.componentInput
                    },
                    {
                      componentInput: ($$value) => {
                        componentSettings.item.data.componentInput = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}` : `${componentSettings.item.data.componentInput.type === "evalv2" && component.componentInput !== void 0 ? `${validate_component(EvalV2InputEditor, "EvalV2InputEditor").$$render(
                    $$result,
                    {
                      field: "nonrunnable",
                      id: component.id,
                      this: evalV2editor,
                      componentInput: componentSettings.item.data.componentInput
                    },
                    {
                      this: ($$value) => {
                        evalV2editor = $$value;
                        $$settled = false;
                      },
                      componentInput: ($$value) => {
                        componentSettings.item.data.componentInput = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )} <a class="text-2xs"${add_attribute("href", void 0, 0)}>transform to a frontend script</a>` : `${componentSettings.item.data.componentInput?.type === "runnable" && component.componentInput !== void 0 ? `${validate_component(RunnableInputEditor, "RunnableInputEditor").$$render(
                    $$result,
                    {
                      appComponent: component,
                      defaultUserInput: component.type == "formcomponent" || component.type == "formbuttoncomponent",
                      appInput: componentSettings.item.data.componentInput
                    },
                    {
                      appInput: ($$value) => {
                        componentSettings.item.data.componentInput = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}` : ``}`}`}`}`}</div>` : ``} ${validate_component(ContextVariables, "ContextVariables").$$render($$result, { type: component.type, id: component.id }, {}, {})} ${componentSettings.item.data.componentInput?.type === "runnable" ? `${Object.keys(componentSettings.item.data.componentInput.fields ?? {}).length > 0 ? `<div class="w-full"><div class="flex flex-row items-center gap-2 text-sm font-semibold">Runnable Inputs

										${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                    default: () => {
                      return `The runnable inputs are inferred from the inputs of the flow or script
											parameters this component is attached to.`;
                    }
                  })}</div> ${validate_component(InputsSpecsEditor, "InputsSpecsEditor").$$render(
                    $$result,
                    {
                      id: component.id,
                      shouldCapitalize: false,
                      displayType: true,
                      userInputEnabled: component.type === "formcomponent" || component.type === "formbuttoncomponent",
                      recomputeOnInputChanged: componentSettings.item.data.componentInput.recomputeOnInputChanged,
                      showOnDemandOnlyToggle: true,
                      acceptSelf: component.type === "aggridinfinitecomponent" || component.type === "aggridinfinitecomponentee" || component.type === "steppercomponent",
                      overridenByComponent: component.type === "aggridinfinitecomponent" || component.type === "aggridinfinitecomponentee" ? ["offset", "limit", "orderBy", "isDesc", "search"] : [],
                      securedContext: true,
                      inputSpecs: componentSettings.item.data.componentInput.fields
                    },
                    {
                      inputSpecs: ($$value) => {
                        componentSettings.item.data.componentInput.fields = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div>` : ``}` : ``}`;
                }
              }
            )}` : ``}`;
          }
        }
      )} ${validate_component(ComponentControl, "ComponentControl").$$render($$result, { type: component.type }, {}, {})} ${componentSettings.item.data.type === "navbarcomponent" ? `${validate_component(GridNavbar, "GridNavbar").$$render(
        $$result,
        {
          id: component.id,
          navbarItems: componentSettings.item.data.navbarItems
        },
        {
          navbarItems: ($$value) => {
            componentSettings.item.data.navbarItems = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : ``} ${componentSettings.item.data.type === "tabscomponent" ? `${validate_component(GridTab, "GridTab").$$render(
        $$result,
        {
          canDisableTabs: true,
          tabs: componentSettings.item.data.tabs,
          disabledTabs: componentSettings.item.data.disabledTabs,
          component: componentSettings.item.data
        },
        {
          tabs: ($$value) => {
            componentSettings.item.data.tabs = $$value;
            $$settled = false;
          },
          disabledTabs: ($$value) => {
            componentSettings.item.data.disabledTabs = $$value;
            $$settled = false;
          },
          component: ($$value) => {
            componentSettings.item.data = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `${componentSettings.item.data.type === "aggridcomponentee" ? `${validate_component(GridAgGridLicenseKey, "GridAgGridLicenseKey").$$render(
        $$result,
        {
          license: componentSettings.item.data.license
        },
        {
          license: ($$value) => {
            componentSettings.item.data.license = $$value;
            $$settled = false;
          }
        },
        {}
      )} ${validate_component(TableActions, "TableActions").$$render(
        $$result,
        {
          id: component.id,
          components: componentSettings.item.data.actions
        },
        {
          components: ($$value) => {
            componentSettings.item.data.actions = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `${componentSettings.item.data.type === "agchartscomponentee" ? `${validate_component(GridAgChartsLicenseKe, "GridAgChartsLicenseKe").$$render(
        $$result,
        {
          license: componentSettings.item.data.license
        },
        {
          license: ($$value) => {
            componentSettings.item.data.license = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `${componentSettings.item.data.type === "steppercomponent" ? `${validate_component(GridTab, "GridTab").$$render(
        $$result,
        {
          word: "Step",
          tabs: componentSettings.item.data.tabs,
          component: componentSettings.item.data
        },
        {
          tabs: ($$value) => {
            componentSettings.item.data.tabs = $$value;
            $$settled = false;
          },
          component: ($$value) => {
            componentSettings.item.data = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `${componentSettings.item.data.type === "containercomponent" ? `${validate_component(GridGroup, "GridGroup").$$render(
        $$result,
        {
          item: componentSettings.item,
          groupFields: componentSettings.item.data.groupFields
        },
        {
          groupFields: ($$value) => {
            componentSettings.item.data.groupFields = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `${componentSettings.item.data.type === "conditionalwrapper" ? `${validate_component(GridCondition, "GridCondition").$$render(
        $$result,
        {
          conditions: componentSettings.item.data.conditions,
          component: componentSettings.item.data
        },
        {
          conditions: ($$value) => {
            componentSettings.item.data.conditions = $$value;
            $$settled = false;
          },
          component: ($$value) => {
            componentSettings.item.data = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `${componentSettings.item.data.type === "decisiontreecomponent" ? `${validate_component(DecisionTreeGraphEditor, "DecisionTreeGraphEditor").$$render(
        $$result,
        {
          rebuildOnChange: componentSettings.item.data.nodes,
          nodes: componentSettings.item.data.nodes,
          component: componentSettings.item.data
        },
        {
          nodes: ($$value) => {
            componentSettings.item.data.nodes = $$value;
            $$settled = false;
          },
          component: ($$value) => {
            componentSettings.item.data = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `${componentSettings.item.data.type === "verticalsplitpanescomponent" || componentSettings.item.data.type === "horizontalsplitpanescomponent" ? `${validate_component(GridPane, "GridPane").$$render(
        $$result,
        {
          panes: componentSettings.item.data.panes,
          component: componentSettings.item.data
        },
        {
          panes: ($$value) => {
            componentSettings.item.data.panes = $$value;
            $$settled = false;
          },
          component: ($$value) => {
            componentSettings.item.data = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `${componentSettings.item.data.type === "aggridcomponent" ? `${validate_component(TableActions, "TableActions").$$render(
        $$result,
        {
          id: component.id,
          components: componentSettings.item.data.actions
        },
        {
          components: ($$value) => {
            componentSettings.item.data.actions = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `${componentSettings.item.data.type === "aggridinfinitecomponent" ? `${validate_component(TableActions, "TableActions").$$render(
        $$result,
        {
          id: component.id,
          components: componentSettings.item.data.actions
        },
        {
          components: ($$value) => {
            componentSettings.item.data.actions = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `${componentSettings.item.data.type === "aggridinfinitecomponentee" ? `${validate_component(GridAgGridLicenseKey, "GridAgGridLicenseKey").$$render(
        $$result,
        {
          license: componentSettings.item.data.license
        },
        {
          license: ($$value) => {
            componentSettings.item.data.license = $$value;
            $$settled = false;
          }
        },
        {}
      )} ${validate_component(TableActions, "TableActions").$$render(
        $$result,
        {
          id: component.id,
          components: componentSettings.item.data.actions
        },
        {
          components: ($$value) => {
            componentSettings.item.data.actions = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `${componentSettings.item.data.type === "dbexplorercomponent" ? `${validate_component(TableActions, "TableActions").$$render(
        $$result,
        {
          id: component.id,
          components: componentSettings.item.data.actions
        },
        {
          components: ($$value) => {
            componentSettings.item.data.actions = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `${componentSettings.item.data.type === "tablecomponent" && Array.isArray(componentSettings.item.data.actionButtons) ? `${validate_component(TableActions, "TableActions").$$render(
        $$result,
        {
          id: component.id,
          components: componentSettings.item.data.actionButtons
        },
        {
          components: ($$value) => {
            componentSettings.item.data.actionButtons = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `${componentSettings.item.data.type === "menucomponent" && Array.isArray(componentSettings.item.data.menuItems) ? `${validate_component(MenuItems, "MenuItems").$$render(
        $$result,
        {
          id: component.id,
          components: componentSettings.item.data.menuItems
        },
        {
          components: ($$value) => {
            componentSettings.item.data.menuItems = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : ``}`}`}`}`}`}`}`}`}`}`}`}`}`} ${Object.values(initialConfiguration).length > 0 ? `${validate_component(PanelSection, "PanelSection").$$render($$result, { title: "Configuration" }, {}, {
        default: () => {
          return `${validate_component(InputsSpecsEditor, "InputsSpecsEditor").$$render(
            $$result,
            {
              id: component.id,
              inputSpecsConfiguration: initialConfiguration,
              userInputEnabled: false,
              acceptSelf: true,
              inputSpecs: componentSettings.item.data.configuration
            },
            {
              inputSpecs: ($$value) => {
                componentSettings.item.data.configuration = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      })}` : `${componentSettings.item.data.type != "containercomponent" ? `<div class="h-full w-full text-sm text-tertiary text-center py-8 px-2">${escape(ccomponents[component.type].name)} has no configuration</div>` : ``}`} ${validate_component(EventHandlers, "EventHandlers").$$render(
        $$result,
        {
          ownId: component.id,
          item: componentSettings.item
        },
        {
          item: ($$value) => {
            componentSettings.item = $$value;
            $$settled = false;
          }
        },
        {}
      )} <div class="grow shrink"></div> ${Object.keys(ccomponents[component.type]?.customCss ?? {}).length > 0 ? `${validate_component(PanelSection, "PanelSection").$$render($$result, { title: "Styling" }, {}, {
        action: () => {
          return `<div slot="action" class="flex justify-end flex-wrap gap-1">${validate_component(Button, "Button").$$render(
            $$result,
            {
              color: "light",
              size: "xs",
              variant: "border",
              startIcon: { icon: Chevron_left }
            },
            {},
            {
              default: () => {
                return `Show`;
              }
            }
          )}</div>`;
        },
        default: () => {
          return `<div class="flex gap-2 items-center"><div class="!text-2xs" data-svelte-h="svelte-1dxs59d">Full height</div> ${componentSettings?.item?.[12]?.fullHeight !== void 0 ? `${validate_component(Toggle, "Toggle").$$render(
            $$result,
            {
              size: "xs",
              options: { right: "Desktop" },
              checked: componentSettings.item[12].fullHeight
            },
            {
              checked: ($$value) => {
                componentSettings.item[12].fullHeight = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``} ${componentSettings?.item?.[3]?.fullHeight !== void 0 ? `${validate_component(Toggle, "Toggle").$$render(
            $$result,
            {
              size: "xs",
              options: { right: "Mobile" },
              checked: componentSettings.item[3].fullHeight
            },
            {
              checked: ($$value) => {
                componentSettings.item[3].fullHeight = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``}</div> ${validate_component(AlignmentEditor, "AlignmentEditor").$$render(
            $$result,
            { component: componentSettings.item.data },
            {
              component: ($$value) => {
                componentSettings.item.data = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${``}`;
        }
      })}` : ``} ${duplicateMoveAllowed ? `${validate_component(PanelSection, "PanelSection").$$render($$result, { title: "Copy/Move" }, {}, {
        action: () => {
          return `<div slot="action">${validate_component(Button, "Button").$$render(
            $$result,
            {
              size: "xs",
              color: "red",
              variant: "border",
              shortCut: {
                key: isMac() ? getModifierKey() + "Del" : "Del",
                withoutModifier: true
              }
            },
            {},
            {
              default: () => {
                return `Delete`;
              }
            }
          )}</div>`;
        },
        default: () => {
          return `<div class="grid grid-cols-2 gap-1 text-tertiary"><div data-svelte-h="svelte-6kzr0l"><span class="text-secondary text-xs">Copy:</span></div> <div class="flex items-center gap-1"><div class="text-xs border py-1 px-1.5 rounded-md">${escape(getModifierKey() + "C")}</div> <span class="text-xs" data-svelte-h="svelte-1aftnoc">→</span> <span class="text-xs border py-1 px-1.5 rounded-md">${escape(getModifierKey() + "V")}</span></div> <div data-svelte-h="svelte-7lehob"><span class="text-secondary text-xs">Move:</span></div> <div class="flex items-center gap-1"><div class="text-xs border py-1 px-1.5 rounded-md">${escape(getModifierKey() + "X")}</div> <span class="text-xs" data-svelte-h="svelte-1aftnoc">→</span> <span class="text-xs border py-1 px-1.5 rounded-md">${escape(getModifierKey() + "V")}</span></div> <div data-svelte-h="svelte-bl1to3"><span class="text-secondary text-xs">Navigate:</span></div> <div class="flex items-center gap-1" data-svelte-h="svelte-dbgkvw"><span class="text-xs border py-1 px-1.5 rounded-md">←</span> <span class="text-xs border py-1 px-1.5 rounded-md">↑</span> <span class="text-xs border py-1 px-1.5 rounded-md">→</span> <span class="text-xs border py-1 px-1.5 rounded-md">ESC</span></div> <div data-svelte-h="svelte-spubcl"><span class="text-secondary text-xs whitespace-nowrap">Add to selection:</span></div> <div class="flex items-center gap-1"><span class="text-xs border py-1 px-1.5 rounded-md">${validate_component(Arrow_big_up, "ArrowBigUp").$$render($$result, { size: "14" }, {}, {})} </span>+<span class="text-xs border py-1 px-1.5 rounded-md" data-svelte-h="svelte-v4o9kd">Click</span></div></div>`;
        }
      })}` : ``}</div>`;
    })() : ``}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_state();
  $$unsubscribe_worldStore();
  $$unsubscribe_runnableComponents();
  $$unsubscribe_focusedGrid();
  $$unsubscribe_selectedComponent();
  $$unsubscribe_movingcomponents();
  $$unsubscribe_errorByComponent();
  $$unsubscribe_componentControl();
  $$unsubscribe_stateId();
  return $$rendered;
});
const BackgroundScriptTriggerBy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isFrontend2;
  let triggerEvents;
  let { script } = $$props;
  let { recomputeOnInputChanged = void 0 } = $$props;
  let { id } = $$props;
  if ($$props.script === void 0 && $$bindings.script && script !== void 0) $$bindings.script(script);
  if ($$props.recomputeOnInputChanged === void 0 && $$bindings.recomputeOnInputChanged && recomputeOnInputChanged !== void 0) $$bindings.recomputeOnInputChanged(recomputeOnInputChanged);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    isFrontend2 = script.type == "runnableByName" && script.inlineScript?.language === "frontend";
    triggerEvents = script.autoRefresh ? ["start", "refresh"] : [];
    $$rendered = `${script.type == "runnableByName" && script.inlineScript ? `${validate_component(ScriptTriggers, "ScriptTriggers").$$render(
      $$result,
      {
        id,
        triggerEvents,
        dependencies: getDependencies(script.fields),
        isFrontend: isFrontend2,
        shoudlDisplayChangeEvents: recomputeOnInputChanged || isFrontend2,
        inlineScript: script.inlineScript
      },
      {
        inlineScript: ($$value) => {
          script.inlineScript = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${script.type === "runnableByName" ? `${validate_component(ScriptTriggers, "ScriptTriggers").$$render(
      $$result,
      {
        id,
        dependencies: getDependencies(script.fields),
        triggerEvents,
        isFrontend: isFrontend2,
        shoudlDisplayChangeEvents: recomputeOnInputChanged
      },
      {},
      {}
    )}` : ``}`}`;
  } while (!$$settled);
  return $$rendered;
});
const BackgroundScriptSettings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $$unsubscribe_runnableComponents;
  let { runnable } = $$props;
  let { id } = $$props;
  const { runnableComponents, app } = getContext("AppViewerContext");
  $$unsubscribe_runnableComponents = subscribe(runnableComponents, (value) => value);
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  if ($$props.runnable === void 0 && $$bindings.runnable && runnable !== void 0) $$bindings.runnable(runnable);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    runnable && app.set($app);
    $$rendered = `<div${add_attribute("class", "border-y divide-y ", 0)}>${validate_component(ScriptSettingHeader, "ScriptSettingHeader").$$render($$result, { name: runnable.name, noBorder: true }, {}, {})} <div class="p-2">${validate_component(ScriptTransformer, "ScriptTransformer").$$render(
      $$result,
      { id, appInput: runnable },
      {
        appInput: ($$value) => {
          runnable = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${runnable.type == "runnableByPath" || runnable.inlineScript ? `${validate_component(ScriptRunConfiguration, "ScriptRunConfiguration").$$render(
      $$result,
      {
        canConfigureRecomputeOnInputChanged: runnable.type == "runnableByPath" || runnable.inlineScript?.language !== "frontend",
        autoRefresh: runnable.autoRefresh,
        recomputeOnInputChanged: runnable.recomputeOnInputChanged
      },
      {
        autoRefresh: ($$value) => {
          runnable.autoRefresh = $$value;
          $$settled = false;
        },
        recomputeOnInputChanged: ($$value) => {
          runnable.recomputeOnInputChanged = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(BackgroundScriptTriggerBy, "BackgroundScriptTriggerBy").$$render(
            $$result,
            {
              id,
              recomputeOnInputChanged: runnable.recomputeOnInputChanged,
              script: runnable
            },
            {
              script: ($$value) => {
                runnable = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(ScriptSettingsSection, "ScriptSettingsSection").$$render($$result, { title: "Language selection" }, {}, {
      default: () => {
        return `<div class="text-xs" data-svelte-h="svelte-f92mid">Please configure the language in the inline script panel</div>`;
      }
    })}`}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_runnableComponents();
  return $$rendered;
});
const SettingsPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hiddenInlineScript;
  let componentSettings;
  let tableActionSettings;
  let menuItemsSettings;
  let $app, $$unsubscribe_app;
  let $selectedComponent, $$unsubscribe_selectedComponent;
  let $$unsubscribe_stateId;
  let $runnableComponents, $$unsubscribe_runnableComponents;
  const { selectedComponent, app, stateId, runnableComponents } = getContext("AppViewerContext");
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => $selectedComponent = value);
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_stateId = subscribe(stateId, (value) => value);
  $$unsubscribe_runnableComponents = subscribe(runnableComponents, (value) => $runnableComponents = value);
  let firstComponent = $selectedComponent?.[0];
  function findTableActionSettings(app2, id) {
    return allItems(app2.grid, app2.subgrids).map((x) => {
      if (x?.data?.type === "tablecomponent") {
        if (x?.data?.actionButtons) {
          const tableAction = x.data.actionButtons.find((x2) => x2.id === id);
          if (tableAction) {
            return {
              item: { data: tableAction, id: tableAction.id },
              parent: x.data.id
            };
          }
        }
      } else if (x?.data?.type === "aggridcomponent" || x?.data?.type === "aggridcomponentee" || x?.data?.type === "dbexplorercomponent" || x?.data?.type === "aggridinfinitecomponent" || x?.data?.type === "aggridinfinitecomponentee") {
        if (x?.data?.actions) {
          const tableAction = x.data.actions.find((x2) => x2.id === id);
          if (tableAction) {
            return {
              item: { data: tableAction, id: tableAction.id },
              parent: x.data.id
            };
          }
        }
      }
    }).find((x) => x);
  }
  function findMenuItemsSettings(app2, id) {
    return allItems(app2.grid, app2.subgrids).map((x) => {
      if (x?.data?.type === "menucomponent") {
        if (x?.data?.menuItems) {
          const menuItem = x.data.menuItems.find((x2) => x2.id === id);
          if (menuItem) {
            return {
              item: { data: menuItem, id: menuItem.id },
              parent: x.data.id
            };
          }
        }
      }
    }).find((x) => x);
  }
  const dispatch = createEventDispatcher();
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $selectedComponent?.[0] != firstComponent && (firstComponent = $selectedComponent?.[0]);
    hiddenInlineScript = $app?.hiddenInlineScripts?.map((x, i) => ({ script: x, index: i })).find(({ script, index }) => $selectedComponent?.includes(BG_PREFIX + index));
    componentSettings = findComponentSettings($app, firstComponent);
    tableActionSettings = findTableActionSettings($app, firstComponent);
    menuItemsSettings = findMenuItemsSettings($app, firstComponent);
    $$rendered = `${componentSettings ? `${validate_component(ComponentPanel, "ComponentPanel").$$render(
      $$result,
      {
        onDelete: () => {
          dispatch("delete");
        },
        componentSettings
      },
      {
        componentSettings: ($$value) => {
          componentSettings = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${tableActionSettings ? `${validate_component(ComponentPanel, "ComponentPanel").$$render(
      $$result,
      {
        noGrid: true,
        duplicateMoveAllowed: false,
        onDelete: () => {
          if (tableActionSettings) {
            const parent = findGridItem($app, tableActionSettings.parent);
            if (!parent) return;
            if (parent.data.type === "tablecomponent") {
              parent.data.actionButtons = parent.data.actionButtons.filter((x) => x.id !== tableActionSettings?.item.id);
            }
            if ((parent.data.type === "aggridcomponent" || parent.data.type === "aggridcomponentee" || parent.data.type === "dbexplorercomponent" || parent.data.type === "aggridinfinitecomponent" || parent.data.type === "aggridinfinitecomponentee") && Array.isArray(parent.data.actions)) {
              parent.data.actions = parent.data.actions.filter((x) => x.id !== tableActionSettings?.item.id);
            }
          }
        },
        componentSettings: tableActionSettings
      },
      {
        componentSettings: ($$value) => {
          tableActionSettings = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${menuItemsSettings ? `${validate_component(ComponentPanel, "ComponentPanel").$$render(
      $$result,
      {
        noGrid: true,
        duplicateMoveAllowed: false,
        onDelete: () => {
          if (menuItemsSettings) {
            const parent = findGridItem($app, menuItemsSettings.parent);
            if (!parent) return;
            if (parent.data.type === "menucomponent") {
              parent.data.menuItems = parent.data.menuItems.filter((x) => x.id !== menuItemsSettings?.item.id);
            }
          }
        },
        componentSettings: menuItemsSettings
      },
      {
        componentSettings: ($$value) => {
          menuItemsSettings = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${hiddenInlineScript ? (() => {
      let id = BG_PREFIX + hiddenInlineScript.index;
      return ` ${validate_component(BackgroundScriptSettings, "BackgroundScriptSettings").$$render(
        $$result,
        { id, runnable: hiddenInlineScript.script },
        {
          runnable: ($$value) => {
            hiddenInlineScript.script = $$value;
            $$settled = false;
          }
        },
        {}
      )} ${Object.keys(hiddenInlineScript.script.fields ?? {}).length > 0 ? `<div class="mb-8">${validate_component(PanelSection, "PanelSection").$$render($$result, { title: `Inputs` }, {}, {
        default: () => {
          return `${validate_component(InputsSpecsEditor, "InputsSpecsEditor").$$render(
            $$result,
            {
              displayType: true,
              id,
              shouldCapitalize: false,
              userInputEnabled: false,
              recomputeOnInputChanged: hiddenInlineScript.script.recomputeOnInputChanged,
              showOnDemandOnlyToggle: true,
              inputSpecs: hiddenInlineScript.script.fields
            },
            {
              inputSpecs: ($$value) => {
                hiddenInlineScript.script.fields = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      })}</div>` : ``} ${validate_component(PanelSection, "PanelSection").$$render(
        $$result,
        {
          title: `Event handlers`,
          fullHeight: false,
          tooltip: "Event handlers are used to trigger actions on other components when a specific event occurs. For example, you can trigger a recompute on a component when a script has successfully run."
        },
        {},
        {
          default: () => {
            return `${validate_component(EventHandlerItem, "EventHandlerItem").$$render(
              $$result,
              {
                title: "on success",
                tooltip: "This event is triggered when the script runs successfully.",
                items: Object.keys($runnableComponents).filter((_id) => _id !== id),
                value: hiddenInlineScript.script.recomputeIds
              },
              {
                value: ($$value) => {
                  hiddenInlineScript.script.recomputeIds = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
          }
        }
      )} <div class="grow shrink"></div>`;
    })() : ``}`}`}`}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_selectedComponent();
  $$unsubscribe_stateId();
  $$unsubscribe_runnableComponents();
  return $$rendered;
});
const RunnableJobPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $runnableJobEditorPanel, $$unsubscribe_runnableJobEditorPanel;
  let $selectedComponentInEditor, $$unsubscribe_selectedComponentInEditor;
  const { runnableJobEditorPanel, selectedComponentInEditor } = getContext("AppEditorContext");
  $$unsubscribe_runnableJobEditorPanel = subscribe(runnableJobEditorPanel, (value) => $runnableJobEditorPanel = value);
  $$unsubscribe_selectedComponentInEditor = subscribe(selectedComponentInEditor, (value) => $selectedComponentInEditor = value);
  let testJob = void 0;
  let testIsLoading = false;
  let testJobLoader;
  let jobToWatch = void 0;
  function updateSelectedJob() {
    const selectedComponent = $selectedComponentInEditor;
    if (selectedComponent) {
      const backendJob = $runnableJobEditorPanel.jobs[selectedComponent];
      if (backendJob) {
        if (jobToWatch?.job == backendJob) {
          return;
        }
        if (jobToWatch?.componentId != selectedComponent) {
          testJob = void 0;
        }
        jobToWatch = {
          componentId: selectedComponent,
          job: backendJob
        };
        testJobLoader?.watchJob(backendJob);
      } else {
        testJob = void 0;
        jobToWatch = void 0;
      }
    }
  }
  let logDrawerOpen = false;
  let resultDrawerOpen = false;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $runnableJobEditorPanel.focused && $selectedComponentInEditor && $runnableJobEditorPanel.jobs && updateSelectedJob();
    $$rendered = `${validate_component(TestJobLoader, "TestJobLoader").$$render(
      $$result,
      {
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
    )} ${$runnableJobEditorPanel.focused && $selectedComponentInEditor || logDrawerOpen || resultDrawerOpen ? (() => {
      let frontendJob = $runnableJobEditorPanel?.frontendJobs[$selectedComponentInEditor ?? ""];
      return `  <div class="absolute z-[100] top-0 right-0 border-t h-full" style="${"width: " + escape($runnableJobEditorPanel.width, true) + "px; transform: translateX(" + escape($runnableJobEditorPanel.width, true) + "px);"}">${validate_component(Splitpanes, "Splitpanes").$$render($$result, { horizontal: true }, {}, {
        default: () => {
          return `${validate_component(Pane, "Pane").$$render($$result, { size: frontendJob ? 30 : 50, minSize: 10 }, {}, {
            default: () => {
              return `${frontendJob ? `<div class="p-2 bg-surface-secondary h-full w-full" data-svelte-h="svelte-14r2qcz"><div class="text-sm text-tertiary pb-4">Frontend Job</div> <div class="text-2xs text-tertiary">Check your browser console to see the logs</div></div>` : `${validate_component(LogViewer, "LogViewer").$$render(
                $$result,
                {
                  small: true,
                  jobId: testJob?.id,
                  duration: testJob?.["duration_ms"],
                  mem: testJob?.["mem_peak"],
                  content: testJob?.logs,
                  isLoading: testIsLoading,
                  tag: testJob?.tag,
                  drawerOpen: logDrawerOpen
                },
                {
                  drawerOpen: ($$value) => {
                    logDrawerOpen = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`}`;
            }
          })} ${validate_component(Pane, "Pane").$$render(
            $$result,
            {
              size: frontendJob ? 70 : 50,
              minSize: 10,
              class: "text-sm text-tertiary"
            },
            {},
            {
              default: () => {
                return `${frontendJob ? `<pre class="overflow-x-auto break-words relative h-full px-2 pt-2">${validate_component(DisplayResult, "DisplayResult").$$render(
                  $$result,
                  {
                    result: frontendJob,
                    drawerOpen: resultDrawerOpen
                  },
                  {
                    drawerOpen: ($$value) => {
                      resultDrawerOpen = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</pre>` : `${testJob != void 0 && "result" in testJob && testJob.result != void 0 ? `<pre class="overflow-x-auto break-words relative h-full px-2 pt-2">${validate_component(DisplayResult, "DisplayResult").$$render(
                  $$result,
                  {
                    workspaceId: testJob?.workspace_id,
                    jobId: testJob?.id,
                    result: testJob.result,
                    drawerOpen: resultDrawerOpen
                  },
                  {
                    drawerOpen: ($$value) => {
                      resultDrawerOpen = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</pre>` : `<div class="p-2">${testIsLoading ? `${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})}` : `Test to see the result here`}</div>`}`}`;
              }
            }
          )}`;
        }
      })}</div>`;
    })() : ``}`;
  } while (!$$settled);
  $$unsubscribe_runnableJobEditorPanel();
  $$unsubscribe_selectedComponentInEditor();
  return $$rendered;
});
const css$1 = {
  code: "#o1>.splitpanes__pane,#o2>.splitpanes__pane{overflow:visible!important}",
  map: null
};
const cssId = "wm-global-style";
function animateTo(start, end, onUpdate) {
  const duration = 400;
  const startTime = performance.now();
  function animate(time) {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const currentValue = start + (end - start) * easeInOut(progress);
    onUpdate(currentValue);
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }
  requestAnimationFrame(animate);
}
function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
function updateCssContent(cssString, previewTheme) {
  const theme = previewTheme ?? cssString ?? "";
  const existingElement = document.getElementById(cssId);
  if (existingElement && theme !== existingElement.innerHTML) {
    existingElement.innerHTML = theme;
  }
}
const AppEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let width;
  let $componentActive, $$unsubscribe_componentActive;
  let $yTop, $$unsubscribe_yTop;
  let $$unsubscribe_initialized;
  let $previewTheme, $$unsubscribe_previewTheme;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $mode, $$unsubscribe_mode;
  let $cssEditorOpen, $$unsubscribe_cssEditorOpen;
  let $connectingInput, $$unsubscribe_connectingInput;
  let $$unsubscribe_darkMode;
  let $pickVariableCallback, $$unsubscribe_pickVariableCallback;
  let $focusedGrid, $$unsubscribe_focusedGrid;
  let $appStore, $$unsubscribe_appStore;
  let $worldStore, $$unsubscribe_worldStore;
  let $selectedComponent, $$unsubscribe_selectedComponent;
  let $breakpoint, $$unsubscribe_breakpoint;
  let $page, $$unsubscribe_page;
  let $secondaryMenuLeftStore, $$unsubscribe_secondaryMenuLeftStore;
  let $secondaryMenuRightStore, $$unsubscribe_secondaryMenuRightStore;
  let $summaryStore, $$unsubscribe_summaryStore;
  let $userStore, $$unsubscribe_userStore;
  let $scale, $$unsubscribe_scale;
  let $$unsubscribe_runnableJob;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_secondaryMenuLeftStore = subscribe(secondaryMenuLeftStore, (value) => $secondaryMenuLeftStore = value);
  $$unsubscribe_secondaryMenuRightStore = subscribe(secondaryMenuRightStore, (value) => $secondaryMenuRightStore = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let { app } = $$props;
  let { path } = $$props;
  let { policy } = $$props;
  let { summary } = $$props;
  let { fromHub = false } = $$props;
  let { diffDrawer = void 0 } = $$props;
  let { savedApp = void 0 } = $$props;
  let { version = void 0 } = $$props;
  migrateApp(app);
  const appStore = writable(app);
  $$unsubscribe_appStore = subscribe(appStore, (value) => $appStore = value);
  const selectedComponent = writable(void 0);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => $selectedComponent = value);
  const mode = writable("dnd");
  $$unsubscribe_mode = subscribe(mode, (value) => $mode = value);
  const breakpoint = writable("lg");
  $$unsubscribe_breakpoint = subscribe(breakpoint, (value) => $breakpoint = value);
  const summaryStore = writable(summary);
  $$unsubscribe_summaryStore = subscribe(summaryStore, (value) => $summaryStore = value);
  const connectingInput = writable({
    opened: false,
    input: void 0,
    hoveredComponent: void 0
  });
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => $connectingInput = value);
  summaryStore.subscribe((s) => {
    $worldStore?.outputsById["ctx"].summary.set(s);
  });
  const cssEditorOpen = writable(false);
  $$unsubscribe_cssEditorOpen = subscribe(cssEditorOpen, (value) => $cssEditorOpen = value);
  const history = initHistory(app);
  const jobsById = writable({});
  const focusedGrid = writable(void 0);
  $$unsubscribe_focusedGrid = subscribe(focusedGrid, (value) => $focusedGrid = value);
  const pickVariableCallback = writable(void 0);
  $$unsubscribe_pickVariableCallback = subscribe(pickVariableCallback, (value) => $pickVariableCallback = value);
  let context = {
    email: $userStore?.email,
    groups: $userStore?.groups,
    username: $userStore?.username,
    query: Object.fromEntries($page.url.searchParams.entries()),
    hash: $page.url.hash,
    workspace: $workspaceStore,
    mode: "editor",
    summary: $summaryStore,
    author: policy.on_behalf_of_email
  };
  const darkMode = writable(document.documentElement.classList.contains("dark"));
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => value);
  const worldStore = buildWorld(context);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  const previewTheme = writable(void 0);
  $$unsubscribe_previewTheme = subscribe(previewTheme, (value) => $previewTheme = value);
  const initialized = writable({
    initialized: false,
    initializedComponents: []
  });
  $$unsubscribe_initialized = subscribe(initialized, (value) => value);
  set_store_value(secondaryMenuRightStore, $secondaryMenuRightStore.isOpen = false, $secondaryMenuRightStore);
  set_store_value(secondaryMenuLeftStore, $secondaryMenuLeftStore.isOpen = false, $secondaryMenuLeftStore);
  setContext("AppViewerContext", {
    worldStore,
    app: appStore,
    summary: summaryStore,
    initialized,
    selectedComponent,
    mode,
    connectingInput,
    bgRuns: writable([]),
    breakpoint,
    runnableComponents: writable({}),
    appPath: path,
    workspace: $workspaceStore ?? "",
    onchange: () => saveFrontendDraft(),
    isEditor: true,
    jobs: writable([]),
    staticExporter: writable({}),
    noBackend: false,
    errorByComponent: writable({}),
    jobsById,
    openDebugRun: writable(void 0),
    focusedGrid,
    stateId: writable(0),
    parentWidth: writable(0),
    state: writable({}),
    componentControl: writable({}),
    hoverStore: writable(void 0),
    allIdsInPath: writable([]),
    darkMode,
    cssEditorOpen,
    previewTheme,
    debuggingComponents: writable({}),
    replaceStateFn: (path2) => replaceState(path2, $page.state),
    policy,
    recomputeAllContext: writable({
      loading: false,
      componentNumber: 0,
      refreshing: [],
      progress: 100
    })
  });
  let scale = writable(100);
  $$unsubscribe_scale = subscribe(scale, (value) => $scale = value);
  const componentActive = writable(false);
  $$unsubscribe_componentActive = subscribe(componentActive, (value) => $componentActive = value);
  let yTop = writable(0);
  $$unsubscribe_yTop = subscribe(yTop, (value) => $yTop = value);
  let runnableJob = writable({
    focused: false,
    jobs: {},
    frontendJobs: {},
    width: 100
  });
  $$unsubscribe_runnableJob = subscribe(runnableJob, (value) => value);
  setContext("AppEditorContext", {
    yTop,
    runnableJobEditorPanel: runnableJob,
    evalPreview: writable({}),
    componentActive,
    dndItem: writable({}),
    refreshComponents: writable(void 0),
    history,
    pickVariableCallback,
    movingcomponents: writable(void 0),
    selectedComponentInEditor: writable(void 0),
    jobsDrawerOpen: writable(false),
    scale,
    stylePanel: () => StylePanel
  });
  let timeout = void 0;
  function saveFrontendDraft() {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(
      () => {
        try {
          localStorage.setItem(path != "" ? `app-${path}` : "app", encodeState($appStore));
        } catch (err) {
          console.error(err);
        }
      },
      500
    );
  }
  let selectedTab = "insert";
  let befSelected = void 0;
  function onSelectedComponentChange() {
    selectedTab = "settings";
    if (befSelected) {
      if (!["ctx", "state"].includes(befSelected) && !befSelected?.startsWith(BG_PREFIX)) {
        let item = findGridItem($appStore, befSelected);
        if (item?.data.type === "containercomponent" || item?.data.type === "listcomponent") {
          set_store_value(
            focusedGrid,
            $focusedGrid = {
              parentComponentId: befSelected,
              subGridIndex: 0
            },
            $focusedGrid
          );
        } else if (item?.data.type === "steppercomponent") {
          set_store_value(
            focusedGrid,
            $focusedGrid = {
              parentComponentId: befSelected,
              subGridIndex: $worldStore.outputsById?.[befSelected]?.currentStepIndex?.peak() ?? 0
            },
            $focusedGrid
          );
        } else if (item?.data.type === "tabscomponent" || item?.data.type === "conditionalwrapper") {
          set_store_value(
            focusedGrid,
            $focusedGrid = {
              parentComponentId: befSelected,
              subGridIndex: $worldStore.outputsById?.[befSelected]?.selectedTabIndex?.peak() ?? 0
            },
            $focusedGrid
          );
        } else {
          let subgrid = findGridItemParentGrid($appStore, befSelected);
          if (subgrid) {
            try {
              set_store_value(
                focusedGrid,
                $focusedGrid = {
                  parentComponentId: subgrid.split("-")[0],
                  subGridIndex: parseInt(subgrid.split("-")[1])
                },
                $focusedGrid
              );
            } catch {
            }
          } else {
            set_store_value(focusedGrid, $focusedGrid = void 0, $focusedGrid);
          }
        }
      }
    }
  }
  let itemPicker = void 0;
  let variableEditor = void 0;
  setContext("ContextPanel", {
    search: writable(""),
    manuallyOpened: writable({}),
    hasResult: writable({})
  });
  let runnablePanelSize = 30;
  let gridPanelSize = 70;
  let leftPanelSize = 22;
  let centerPanelSize = 63;
  let rightPanelSize = 22;
  let tmpRunnablePanelSize = -1;
  let tmpGridPanelSize = -1;
  let tmpLeftPanelSize = -1;
  let tmpCenterPanelSize = -1;
  let tmpRightPanelSize = -1;
  let toggled = false;
  let cssToggled = false;
  function animateCssInput(cssEditorOpen2) {
    if (cssEditorOpen2 && !cssToggled) {
      cssToggled = true;
      tmpLeftPanelSize = leftPanelSize;
      tmpCenterPanelSize = centerPanelSize;
      tmpRightPanelSize = rightPanelSize;
      animateTo(leftPanelSize, 20, (newValue) => leftPanelSize = newValue);
      animateTo(centerPanelSize, 55, (newValue) => centerPanelSize = newValue);
      animateTo(rightPanelSize, 25, (newValue) => rightPanelSize = newValue);
      tmpRunnablePanelSize = runnablePanelSize;
      tmpGridPanelSize = gridPanelSize;
      animateTo(runnablePanelSize, 0, (newValue) => runnablePanelSize = newValue);
      animateTo(gridPanelSize, 100, (newValue) => gridPanelSize = newValue);
    } else if (!cssEditorOpen2 && cssToggled) {
      cssToggled = false;
      animateTo(leftPanelSize, tmpLeftPanelSize, (newValue) => leftPanelSize = newValue);
      animateTo(centerPanelSize, tmpCenterPanelSize, (newValue) => centerPanelSize = newValue);
      animateTo(rightPanelSize, tmpRightPanelSize, (newValue) => rightPanelSize = newValue);
      tmpLeftPanelSize = -1;
      tmpCenterPanelSize = -1;
      tmpRightPanelSize = -1;
      animateTo(runnablePanelSize, tmpRunnablePanelSize, (newValue) => runnablePanelSize = newValue);
      animateTo(gridPanelSize, tmpGridPanelSize, (newValue) => gridPanelSize = newValue);
      tmpRunnablePanelSize = -1;
      tmpGridPanelSize = -1;
    }
  }
  function selectCss() {
    selectedTab !== "css" && (selectedTab = "css");
  }
  let css2 = void 0;
  let lastTheme = void 0;
  appStore.subscribe(async (currentAppStore) => {
    if (!currentAppStore.theme) {
      return;
    }
    if (JSON.stringify(currentAppStore.theme) != lastTheme) {
      if (currentAppStore.theme.type === "inlined") {
        css2 = currentAppStore.theme.css;
      } else if (currentAppStore.theme.type === "path" && currentAppStore.theme?.path) {
        let loadedCss = await getTheme($workspaceStore, currentAppStore.theme.path);
        if (loadedCss) {
          css2 = loadedCss.value;
        }
      }
      lastTheme = JSON.stringify(currentAppStore.theme);
    }
  });
  function addOrRemoveCss(isPremium, isPreview = false) {
    const existingElement = document.getElementById(cssId);
    {
      if (!existingElement) {
        const head = document.head;
        const link = document.createElement("style");
        link.id = cssId;
        link.innerHTML = css2 ?? "";
        head.appendChild(link);
      }
    }
  }
  let appEditorHeader = void 0;
  function triggerTutorial() {
    appEditorHeader?.toggleTutorial();
  }
  let box;
  if ($$props.app === void 0 && $$bindings.app && app !== void 0) $$bindings.app(app);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0) $$bindings.path(path);
  if ($$props.policy === void 0 && $$bindings.policy && policy !== void 0) $$bindings.policy(policy);
  if ($$props.summary === void 0 && $$bindings.summary && summary !== void 0) $$bindings.summary(summary);
  if ($$props.fromHub === void 0 && $$bindings.fromHub && fromHub !== void 0) $$bindings.fromHub(fromHub);
  if ($$props.diffDrawer === void 0 && $$bindings.diffDrawer && diffDrawer !== void 0) $$bindings.diffDrawer(diffDrawer);
  if ($$props.savedApp === void 0 && $$bindings.savedApp && savedApp !== void 0) $$bindings.savedApp(savedApp);
  if ($$props.version === void 0 && $$bindings.version && version !== void 0) $$bindings.version(version);
  if ($$props.triggerTutorial === void 0 && $$bindings.triggerTutorial && triggerTutorial !== void 0) $$bindings.triggerTutorial(triggerTutorial);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $appStore && saveFrontendDraft();
    context.mode = $mode == "dnd" ? "editor" : "viewer";
    width = $breakpoint === "sm" ? "min-w-[400px] max-w-[656px]" : "min-w-[710px] w-full";
    {
      if ($selectedComponent?.[0] != befSelected) {
        befSelected = $selectedComponent?.[0];
        if ($selectedComponent?.[0] != void 0) {
          onSelectedComponentChange();
        }
      }
    }
    {
      if ($pickVariableCallback) {
        itemPicker?.openDrawer();
      }
    }
    {
      if ($connectingInput.opened) {
        secondaryMenuRight.open(ConnectionInstructions, {}, () => {
          set_store_value(connectingInput, $connectingInput.opened = false, $connectingInput);
        });
        secondaryMenuLeft.close();
      } else {
        secondaryMenuRight.close();
      }
    }
    {
      if ($connectingInput.opened && !toggled) {
        tmpRunnablePanelSize = runnablePanelSize;
        tmpGridPanelSize = gridPanelSize;
        animateTo(runnablePanelSize, 0, (newValue) => runnablePanelSize = newValue);
        animateTo(gridPanelSize, 100, (newValue) => gridPanelSize = newValue);
        toggled = true;
      } else if (!$connectingInput.opened && toggled) {
        animateTo(runnablePanelSize, tmpRunnablePanelSize, (newValue) => runnablePanelSize = newValue);
        animateTo(gridPanelSize, tmpGridPanelSize, (newValue) => gridPanelSize = newValue);
        tmpRunnablePanelSize = -1;
        tmpGridPanelSize = -1;
        toggled = false;
      }
    }
    {
      animateCssInput($cssEditorOpen);
    }
    $cssEditorOpen && secondaryMenuLeft?.open(StylePanel, { type: "style" });
    $cssEditorOpen && selectCss();
    {
      addOrRemoveCss(true, $mode === "preview");
    }
    {
      updateCssContent(css2, $previewTheme);
    }
    $$rendered = `${validate_component(DarkModeObserver, "DarkModeObserver").$$render($$result, {}, {}, {})}  ${!$userStore?.operator ? `${$appStore ? `${validate_component(AppEditorHeader, "AppEditorHeader").$$render(
      $$result,
      {
        policy,
        fromHub,
        diffDrawer,
        version,
        this: appEditorHeader,
        savedApp
      },
      {
        this: ($$value) => {
          appEditorHeader = $$value;
          $$settled = false;
        },
        savedApp: ($$value) => {
          savedApp = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${$mode === "preview" ? `${validate_component(SplitPanesWrapper, "SplitPanesWrapper").$$render($$result, {}, {}, {
      default: () => {
        return `<div${add_attribute("class", twMerge("h-full w-full relative", $appStore.css?.["app"]?.["viewer"]?.class, "wm-app-viewer"), 0)}${add_attribute("style", $appStore.css?.["app"]?.["viewer"]?.style, 0)}>${validate_component(AppPreview, "AppPreview").$$render(
          $$result,
          {
            workspace: $workspaceStore ?? "",
            summary: $summaryStore,
            app: $appStore,
            appPath: path,
            breakpoint,
            policy,
            isEditor: true,
            context,
            noBackend: false,
            replaceStateFn: (path2) => replaceState(path2, $page.state),
            gotoFn: (path2, opt) => goto(path2, opt)
          },
          {},
          {}
        )}</div>`;
      }
    })}` : `${$componentActive ? `<div class="absolute z-50 inset-0 h-full w-full bg-surface-secondary [background-size:16px_16px]"></div>` : ``} ${validate_component(SplitPanesWrapper, "SplitPanesWrapper").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Splitpanes, "Splitpanes").$$render($$result, { id: "o1", class: "max-w-full" }, {}, {
          default: () => {
            return `${validate_component(Pane, "Pane").$$render(
              $$result,
              {
                minSize: 5,
                maxSize: 33,
                size: leftPanelSize
              },
              {
                size: ($$value) => {
                  leftPanelSize = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `<div${add_attribute("class", twMerge("w-full h-full relative", $secondaryMenuLeftStore.isOpen ? "overflow-hidden" : ""), 0)}> ${validate_component(SecondaryMenu, "SecondaryMenu").$$render($$result, { right: false }, {}, {})} ${validate_component(ContextPanel, "ContextPanel").$$render($$result, {}, {}, {})}</div>`;
                }
              }
            )} ${validate_component(Pane, "Pane").$$render(
              $$result,
              { size: centerPanelSize },
              {
                size: ($$value) => {
                  centerPanelSize = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `${validate_component(Splitpanes, "Splitpanes").$$render(
                    $$result,
                    {
                      id: "o2",
                      horizontal: true,
                      class: "!overflow-visible"
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(Pane, "Pane").$$render(
                          $$result,
                          { class: "ovisible", size: gridPanelSize },
                          {
                            size: ($$value) => {
                              gridPanelSize = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `<div${add_attribute("class", twMerge("bg-surface-secondary h-full w-full relative", $appStore.css?.["app"]?.["viewer"]?.class, "wm-app-viewer h-full overflow-visible"), 0)}${add_attribute("style", $appStore.css?.["app"]?.["viewer"]?.style, 0)}><div class="absolute bottom-2 left-2 z-50 border bg-surface"><div class="flex flex-row gap-2 text-xs items-center h-8 px-1">${validate_component(Button, "Button").$$render(
                                $$result,
                                {
                                  color: "light",
                                  size: "xs2",
                                  disabled: $scale <= 30
                                },
                                {},
                                {
                                  default: () => {
                                    return `${validate_component(Minus, "Minus").$$render($$result, { size: 14 }, {}, {})}`;
                                  }
                                }
                              )} <div class="w-8 flex justify-center text-2xs h-full items-center">${escape($scale)}%</div> ${validate_component(Button, "Button").$$render(
                                $$result,
                                {
                                  color: "light",
                                  size: "xs2",
                                  disabled: $scale >= 100
                                },
                                {},
                                {
                                  default: () => {
                                    return `${validate_component(Plus, "Plus").$$render($$result, { size: 14 }, {}, {})}`;
                                  }
                                }
                              )}</div></div> <div id="app-editor-top-level-drawer"></div> <div class="absolute inset-0 h-full w-full surface-secondary bg-[radial-gradient(#dbdbdb_1px,transparent_1px)] dark:bg-[radial-gradient(#666666_1px,transparent_1px)] [background-size:16px_16px]"></div>  <div${add_attribute(
                                "class",
                                classNames("mx-auto w-full h-full z-50", $appStore.fullscreen ? "" : "max-w-7xl", $componentActive ? "absolute right-0 left-0" : "overflow-auto"),
                                0
                              )}${add_attribute("style", $componentActive ? `top: -${$yTop}px;` : "", 0)}${add_attribute("this", box, 0)}>${$appStore.grid ? `${validate_component(ComponentNavigation, "ComponentNavigation").$$render($$result, {}, {}, {})} <div${add_attribute("class", twMerge(width, "mx-auto", "z-10000"), 0)}>${validate_component(GridEditor, "GridEditor").$$render($$result, { policy }, {}, {})}</div>` : ``}</div></div>`;
                            }
                          }
                        )} ${$connectingInput?.opened == false && !$componentActive ? `${validate_component(Pane, "Pane").$$render(
                          $$result,
                          { size: runnablePanelSize },
                          {
                            size: ($$value) => {
                              runnablePanelSize = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return ` <div class="relative h-full w-full overflow-x-visible">${validate_component(InlineScriptsPanel, "InlineScriptsPanel").$$render($$result, {}, {}, {})} ${validate_component(RunnableJobPanel, "RunnableJobPanel").$$render($$result, {}, {}, {})}</div>`;
                            }
                          }
                        )}` : ``}`;
                      }
                    }
                  )}`;
                }
              }
            )} ${validate_component(Pane, "Pane").$$render(
              $$result,
              {
                minSize: 15,
                maxSize: 33,
                size: rightPanelSize
              },
              {
                size: ($$value) => {
                  rightPanelSize = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `<div class="relative flex flex-col h-full">${validate_component(Tabs, "Tabs").$$render(
                    $$result,
                    {
                      wrapperClass: "!min-h-[42px]",
                      class: "!h-full",
                      selected: selectedTab
                    },
                    {
                      selected: ($$value) => {
                        selectedTab = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      content: () => {
                        return `<div slot="content" class="h-full overflow-y-auto">${validate_component(TabContent, "TabContent").$$render(
                          $$result,
                          {
                            class: "overflow-auto h-full",
                            value: "settings"
                          },
                          {},
                          {
                            default: () => {
                              return `${$selectedComponent !== void 0 ? `${validate_component(SettingsPanel, "SettingsPanel").$$render($$result, {}, {}, {})} ${validate_component(SecondaryMenu, "SecondaryMenu").$$render($$result, { right: true }, {}, {})}` : `<div class="min-w-[150px] text-sm !text-secondary text-center py-8 px-2" data-svelte-h="svelte-lmaxa8">Select a component to see the settings for it</div>`}`;
                            }
                          }
                        )} ${validate_component(TabContent, "TabContent").$$render($$result, { value: "insert" }, {}, {
                          default: () => {
                            return `${validate_component(ComponentList, "ComponentList").$$render($$result, {}, {}, {})}`;
                          }
                        })} ${validate_component(TabContent, "TabContent").$$render($$result, { value: "css", class: "h-full" }, {}, {
                          default: () => {
                            return `${validate_component(CssSettings, "CssSettings").$$render($$result, {}, {}, {})}`;
                          }
                        })}</div>`;
                      },
                      default: () => {
                        return `${validate_component(Popover, "Popover").$$render(
                          $$result,
                          {
                            disappearTimeout: 0,
                            notClickable: true,
                            placement: "bottom"
                          },
                          {},
                          {
                            text: () => {
                              return `Component library`;
                            },
                            default: () => {
                              return `${validate_component(Tab, "Tab").$$render(
                                $$result,
                                {
                                  value: "insert",
                                  size: "xs",
                                  class: "h-full",
                                  id: "app-editor-component-library-tab"
                                },
                                {},
                                {
                                  default: () => {
                                    return `<div class="m-1 center-center">${validate_component(Plus, "Plus").$$render($$result, { size: 18 }, {}, {})}</div>`;
                                  }
                                }
                              )}`;
                            }
                          }
                        )} ${validate_component(Popover, "Popover").$$render(
                          $$result,
                          {
                            disappearTimeout: 0,
                            notClickable: true,
                            placement: "bottom"
                          },
                          {},
                          {
                            text: () => {
                              return `Component settings`;
                            },
                            default: () => {
                              return `${validate_component(Tab, "Tab").$$render(
                                $$result,
                                {
                                  value: "settings",
                                  size: "xs",
                                  class: "h-full"
                                },
                                {},
                                {
                                  default: () => {
                                    return `<div class="m-1 center-center">${validate_component(Component, "Component").$$render($$result, { size: 18 }, {}, {})}</div>`;
                                  }
                                }
                              )}`;
                            }
                          }
                        )} ${validate_component(Popover, "Popover").$$render(
                          $$result,
                          {
                            disappearTimeout: 0,
                            notClickable: true,
                            placement: "bottom"
                          },
                          {},
                          {
                            text: () => {
                              return `Global styling`;
                            },
                            default: () => {
                              return `${validate_component(Tab, "Tab").$$render(
                                $$result,
                                {
                                  value: "css",
                                  size: "xs",
                                  class: "h-full"
                                },
                                {},
                                {
                                  default: () => {
                                    return `<div class="m-1 center-center">${validate_component(Paintbrush, "Paintbrush").$$render($$result, { size: 18 }, {}, {})}</div>`;
                                  }
                                }
                              )}`;
                            }
                          }
                        )}`;
                      }
                    }
                  )}</div>`;
                }
              }
            )}`;
          }
        })}`;
      }
    })}`}` : `App is null`}` : `App editor not available to operators`} ${validate_component(ItemPicker, "ItemPicker").$$render(
      $$result,
      {
        pickCallback: (path2, _) => {
          $pickVariableCallback?.(path2);
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
  $$unsubscribe_componentActive();
  $$unsubscribe_yTop();
  $$unsubscribe_initialized();
  $$unsubscribe_previewTheme();
  $$unsubscribe_workspaceStore();
  $$unsubscribe_mode();
  $$unsubscribe_cssEditorOpen();
  $$unsubscribe_connectingInput();
  $$unsubscribe_darkMode();
  $$unsubscribe_pickVariableCallback();
  $$unsubscribe_focusedGrid();
  $$unsubscribe_appStore();
  $$unsubscribe_worldStore();
  $$unsubscribe_selectedComponent();
  $$unsubscribe_breakpoint();
  $$unsubscribe_page();
  $$unsubscribe_secondaryMenuLeftStore();
  $$unsubscribe_secondaryMenuRightStore();
  $$unsubscribe_summaryStore();
  $$unsubscribe_userStore();
  $$unsubscribe_scale();
  $$unsubscribe_runnableJob();
  return $$rendered;
});
export {
  AppEditor as A
};
