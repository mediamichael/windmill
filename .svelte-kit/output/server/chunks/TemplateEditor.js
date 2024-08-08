import { c as create_ssr_component, v as validate_component, d as createEventDispatcher, e as escape, s as subscribe, a as set_store_value, h as getContext, o as onDestroy, b as add_attribute } from "./ssr.js";
import { I as Icon } from "./Icon.js";
import { driver } from "driver.js";
import { u as updateProgress } from "./tutorialUtils.js";
import { w as writable } from "./index.js";
import { B as Button } from "./toast.js";
import { C as Check_circle } from "./DefaultScripts.js";
import { A as Alert } from "./Alert.js";
import { A as Arrow_left, a as Arrow_right } from "./Head.js";
import { deepEqual } from "fast-equals";
import { f as findGridItem } from "./history.js";
import { P as Popover } from "./Popover.js";
import { L as LanguageIcon } from "./util.js";
import { e as enterpriseLicense } from "./stores2.js";
import { c as createHash } from "./SimpleEditor.js";
import "monaco-editor";
import { b as buildWorkerDefinition, E as EditorTheme } from "./EditorTheme.js";
import "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution.js";
import "monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution.js";
import "monaco-editor/esm/vs/language/typescript/monaco.contribution.js";
import "monaco-languageclient";
import "vscode/services";
import "monaco-editor/esm/vs/editor/editor.api.js";
const Function_square = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "18",
        "height": "18",
        "x": "3",
        "y": "3",
        "rx": "2",
        "ry": "2"
      }
    ],
    [
      "path",
      {
        "d": "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"
      }
    ],
    ["path", { "d": "M9 11.2h5.7" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "function-square" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Plug = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M12 22v-5" }],
    ["path", { "d": "M9 8V2" }],
    ["path", { "d": "M15 8V2" }],
    [
      "path",
      {
        "d": "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "plug" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ignoredTutorials = writable([]);
const SkipTutorials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  return `<div class="flex flex-row gap-2 justify-end w-full pt-6 pb-2">${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: "xs",
      color: "light",
      startIcon: { icon: Check_circle },
      variant: "border",
      btnClasses: "font-normal"
    },
    {},
    {
      default: () => {
        return `Mark this tutorial as completed`;
      }
    }
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: "xs",
      color: "light",
      startIcon: { icon: Check_circle },
      btnClasses: "font-normal",
      variant: "border"
    },
    {},
    {
      default: () => {
        return `Mark all tutorials as completed`;
      }
    }
  )}</div>`;
});
const TutorialControls = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { activeIndex = void 0 } = $$props;
  let { totalSteps = void 0 } = $$props;
  createEventDispatcher();
  if ($$props.activeIndex === void 0 && $$bindings.activeIndex && activeIndex !== void 0) $$bindings.activeIndex(activeIndex);
  if ($$props.totalSteps === void 0 && $$bindings.totalSteps && totalSteps !== void 0) $$bindings.totalSteps(totalSteps);
  return `<div class="flex flex-col gap-4 w-full pt-4">${activeIndex === 0 ? `${validate_component(Alert, "Alert").$$render($$result, { size: "xs", title: "Help" }, {}, {
    default: () => {
      return `<li data-svelte-h="svelte-jegyhc">UI is not interactive during tutorial, press next at every step</li> <li data-svelte-h="svelte-1mi63y0">You can use the arrow keys to navigate</li>`;
    }
  })}` : ``} <div class="flex flex-row gap-2 justify-between w-full items-center"><div class="text-xs">Step ${escape(activeIndex)} of ${escape(totalSteps)}</div> <div class="flex flex-row gap-2">${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: "xs2",
      color: "light",
      startIcon: { icon: Arrow_left }
    },
    {},
    {
      default: () => {
        return `Previous`;
      }
    }
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: "xs2",
      color: "dark",
      endIcon: { icon: Arrow_right }
    },
    {},
    {
      default: () => {
        return `Next`;
      }
    }
  )}</div></div></div>`;
});
const css$1 = {
  code: ".driver-popover{padding:32px}.driver-popover-title{font-size:1.2rem!important;line-height:2!important}",
  map: null
};
const Tutorial = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $ignoredTutorials, $$unsubscribe_ignoredTutorials;
  $$unsubscribe_ignoredTutorials = subscribe(ignoredTutorials, (value) => $ignoredTutorials = value);
  let { index = 0 } = $$props;
  let { name = "action" } = $$props;
  let { tainted = false } = $$props;
  let { getSteps = () => [] } = $$props;
  let totalSteps = 0;
  let tutorial = void 0;
  const dispatch = createEventDispatcher();
  function renderControls({ config, state }) {
    const popoverDescription = document.querySelector("#driver-popover-description");
    if (!tutorial) {
      return;
    }
    if (state.activeIndex == 0) {
      const div = document.createElement("div");
      const skipTutorials = new SkipTutorials({ target: div });
      skipTutorials.$on("skipAll", () => {
        dispatch("skipAll");
        tutorial?.destroy();
      });
      skipTutorials.$on("skipThis", () => {
        updateProgress(index);
        tutorial?.destroy();
      });
      if (popoverDescription) {
        popoverDescription.appendChild(div);
      }
    }
    const controls = document.createElement("div");
    const tutorialControls = new TutorialControls({
      target: controls,
      props: {
        activeIndex: state.activeIndex,
        totalSteps
      }
    });
    tutorialControls.$on("next", () => {
      const step = tutorial?.getActiveStep();
      if (step) {
        if (tutorial?.getActiveStep()?.popover?.onNextClick) {
          const activeElement = tutorial?.getActiveElement();
          tutorial?.getActiveStep()?.popover?.onNextClick?.(activeElement, step, { config, state });
        } else {
          tutorial?.moveNext();
        }
      }
    });
    tutorialControls.$on("previous", () => {
      tutorial?.movePrevious();
    });
    if (popoverDescription) {
      popoverDescription.appendChild(controls);
    }
  }
  const runTutorial = (options) => {
    if (tainted) {
      dispatch("error", { detail: name });
      return;
    }
    tutorial = driver({
      allowClose: true,
      disableActiveInteraction: true,
      showButtons: ["close"],
      showProgress: false,
      overlayColor: "rgba(0, 0, 0, 0.8)",
      onPopoverRender: (popover, { config, state }) => {
        renderControls({ config, state });
      },
      onDestroyed: () => {
        if (!tutorial?.hasNextStep()) {
          set_store_value(ignoredTutorials, $ignoredTutorials = Array.from(/* @__PURE__ */ new Set([...$ignoredTutorials, index])), $ignoredTutorials);
        }
      }
    });
    const steps = getSteps(tutorial, options);
    totalSteps = steps.length;
    tutorial.setSteps(steps);
    tutorial.drive();
  };
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.tainted === void 0 && $$bindings.tainted && tainted !== void 0) $$bindings.tainted(tainted);
  if ($$props.getSteps === void 0 && $$bindings.getSteps && getSteps !== void 0) $$bindings.getSteps(getSteps);
  if ($$props.renderControls === void 0 && $$bindings.renderControls && renderControls !== void 0) $$bindings.renderControls(renderControls);
  if ($$props.runTutorial === void 0 && $$bindings.runTutorial && runTutorial !== void 0) $$bindings.runTutorial(runTutorial);
  $$result.css.add(css$1);
  $$unsubscribe_ignoredTutorials();
  return ``;
});
function setInputBySelector(selector, value) {
  const input = document.querySelector(selector);
  if (input) {
    input.value = value;
    input.dispatchEvent(new Event("input", { bubbles: true }));
  }
}
function clickButtonBySelector(selector) {
  const button = document.querySelector(selector);
  if (button) {
    button.click();
  }
}
function clickFirstButtonBySelector(selector) {
  const buttons = document.querySelector(selector);
  const button = buttons?.childNodes[0];
  if (button) {
    button.click();
  }
}
function triggerAddFlowStep(index) {
  const button = document.querySelector(`#flow-editor-add-step-${index}`);
  if (button) {
    button.parentElement?.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true }));
  }
}
function selectFlowStepKind(index) {
  const button = document.querySelector(
    `#flow-editor-insert-module > div > button:nth-child(${index})`
  );
  if (button) {
    button?.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true }));
  }
}
function isFlowTainted(flow) {
  return flow.value.modules.length > 0 || Object.keys(flow?.schema?.properties ?? {}).length > 0;
}
const emptyApp = {
  grid: [
    {
      "3": {
        fixed: false,
        x: 0,
        y: 0,
        fullHeight: false,
        w: 6,
        h: 2
      },
      "12": {
        fixed: false,
        x: 0,
        y: 0,
        fullHeight: false,
        w: 12,
        h: 2
      },
      data: {
        type: "containercomponent",
        configuration: {},
        customCss: {
          container: {
            class: "!p-0",
            style: ""
          }
        },
        actions: [],
        numberOfSubgrids: 1,
        id: "a"
      },
      id: "a"
    }
  ],
  fullscreen: false,
  unusedInlineScripts: [],
  hiddenInlineScripts: [],
  theme: {
    type: "path",
    path: "f/app_themes/theme_0"
  },
  subgrids: {
    "a-0": [
      {
        "3": {
          fixed: false,
          x: 0,
          y: 0,
          fullHeight: false,
          w: 6,
          h: 1
        },
        "12": {
          fixed: false,
          x: 0,
          y: 0,
          fullHeight: false,
          w: 6,
          h: 1
        },
        data: {
          type: "textcomponent",
          configuration: {
            style: {
              type: "static",
              value: "Body"
            },
            copyButton: {
              type: "static",
              value: false
            },
            tooltip: {
              type: "evalv2",
              value: "",
              fieldType: "text",
              expr: "`Author: ${ctx.author}`",
              connections: [
                {
                  componentId: "ctx",
                  id: "author"
                }
              ]
            },
            disableNoText: {
              type: "static",
              value: true,
              fieldType: "boolean"
            }
          },
          componentInput: {
            type: "templatev2",
            fieldType: "template",
            eval: "${ctx.summary}",
            connections: [
              {
                id: "summary",
                componentId: "ctx"
              }
            ]
          },
          customCss: {
            text: {
              class: "text-xl font-semibold whitespace-nowrap truncate",
              style: ""
            },
            container: {
              class: "",
              style: ""
            }
          },
          actions: [],
          horizontalAlignment: "left",
          verticalAlignment: "center",
          id: "b"
        },
        id: "b"
      },
      {
        "3": {
          fixed: false,
          x: 0,
          y: 1,
          fullHeight: false,
          w: 3,
          h: 1
        },
        "12": {
          fixed: false,
          x: 6,
          y: 0,
          fullHeight: false,
          w: 6,
          h: 1
        },
        data: {
          type: "recomputeallcomponent",
          configuration: {},
          actions: [],
          menuItems: [],
          horizontalAlignment: "right",
          verticalAlignment: "center",
          id: "c"
        },
        id: "c"
      }
    ]
  },
  hideLegacyTopBar: true,
  norefreshbar: false
};
function isAppTainted(app) {
  if (app.hideLegacyTopBar === true) {
    if (Array.isArray(app.hiddenInlineScripts) && app.hiddenInlineScripts?.length > 0) {
      return true;
    }
    if (Array.isArray(app.grid) && app.grid.length > 1) {
      return true;
    }
    return !deepEqual(app, emptyApp);
  } else {
    return !(app.grid.length === 0 && app.hiddenInlineScripts?.length === 0);
  }
}
function updateFlowModuleById(flow, id, callback) {
  const dfs = (modules) => {
    for (const module of modules) {
      if (module.id === id) {
        callback(module);
        return;
      }
      if (module.value.type === "forloopflow") {
        dfs(module.value.modules);
      } else if (module.value.type === "branchone") {
        module.value.branches.forEach((branch) => dfs(branch.modules));
      } else if (module.value.type === "branchall") {
        module.value.branches.forEach((branch) => dfs(branch.modules));
      }
    }
  };
  dfs(flow.value.modules);
  flow = flow;
}
function updateInlineRunnableCode(app, componentId, newCode) {
  const gridItem = findGridItem(app, componentId);
  if (gridItem?.data.componentInput?.type === "runnable") {
    if (gridItem.data.componentInput.runnable?.type === "runnableByName" && gridItem.data.componentInput.runnable.inlineScript) {
      gridItem.data.componentInput.runnable.inlineScript.content = newCode;
    }
  }
  app = app;
}
function connectInlineRunnableInputToComponentOutput(app, sourceComponentId, sourceField, targetComponentId, targetField, fieldType = "text") {
  const gridItem = findGridItem(app, sourceComponentId);
  if (gridItem?.data.componentInput?.type === "runnable") {
    gridItem.data.componentInput.fields = {
      [sourceField]: {
        type: "evalv2",
        expr: `${targetComponentId}.${targetField}`,
        fieldType,
        connections: [
          {
            componentId: targetComponentId,
            id: targetField
          }
        ]
      }
    };
  }
}
const FlowScriptPicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  let { disabled = false } = $$props;
  let { label } = $$props;
  let { lang = void 0 } = $$props;
  let { id = void 0 } = $$props;
  const enterpriseLangs = ["bigquery", "snowflake", "mssql"];
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0) $$bindings.lang(lang);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  $$unsubscribe_enterpriseLicense();
  return `${validate_component(Popover, "Popover").$$render(
    $$result,
    {
      disablePopup: !enterpriseLangs.includes(lang || "") || !!$enterpriseLicense
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
            btnClasses: "w-32 truncate",
            size: "sm",
            spacingSize: "md",
            variant: "border",
            color: "light",
            disabled: disabled || enterpriseLangs.includes(lang || "") && !$enterpriseLicense,
            id
          },
          {},
          {
            default: () => {
              return `<div class="flex justify-center flex-col items-center gap-2">${lang ? `${validate_component(LanguageIcon, "LanguageIcon").$$render($$result, { lang }, {}, {})}` : ``} <span class="text-xs">${escape(label)}</span></div>`;
            }
          }
        )}`;
      }
    }
  )}`;
});
const css = {
  code: ".template .mtk20{color:#000!important}",
  map: null
};
const TemplateEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedComponent, $$unsubscribe_selectedComponent;
  let $componentControl, $$unsubscribe_componentControl;
  const conf = {
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    comments: {
      lineComment: "//",
      blockComment: ["/*", "*/"]
    },
    brackets: [["{", "}"], ["[", "]"], ["(", ")"]],
    onEnterRules: [],
    autoClosingPairs: [
      { open: "{", close: "}" },
      { open: "[", close: "]" },
      { open: "(", close: ")" },
      { open: '"', close: '"', notIn: ["string"] },
      {
        open: "'",
        close: "'",
        notIn: ["string", "comment"]
      },
      {
        open: "`",
        close: "`",
        notIn: ["string", "comment"]
      }
    ],
    folding: {
      markers: {
        start: new RegExp("^\\s*//\\s*#?region\\b"),
        end: new RegExp("^\\s*//\\s*#?endregion\\b")
      }
    }
  };
  const language = {
    // Set defaultToken to invalid to see what you do not tokenize yet
    defaultToken: "invalid",
    tokenPostfix: ".ts",
    keywords: [
      // Should match the keys of textToKeywordObj in
      // https://github.com/microsoft/TypeScript/blob/master/src/compiler/scanner.ts
      "abstract",
      "any",
      "as",
      "asserts",
      "bigint",
      "boolean",
      "break",
      "case",
      "catch",
      "class",
      "continue",
      "const",
      "constructor",
      "debugger",
      "declare",
      "default",
      "delete",
      "do",
      "else",
      "enum",
      "export",
      "extends",
      "false",
      "finally",
      "for",
      "from",
      "function",
      "get",
      "if",
      "implements",
      "import",
      "in",
      "infer",
      "instanceof",
      "interface",
      "is",
      "keyof",
      "let",
      "module",
      "namespace",
      "never",
      "new",
      "null",
      "number",
      "object",
      "out",
      "package",
      "private",
      "protected",
      "public",
      "override",
      "readonly",
      "require",
      "global",
      "return",
      "set",
      "static",
      "string",
      "super",
      "switch",
      "symbol",
      "this",
      "throw",
      "true",
      "try",
      "type",
      "typeof",
      "undefined",
      "unique",
      "unknown",
      "var",
      "void",
      "while",
      "with",
      "yield",
      "async",
      "await",
      "of"
    ],
    operators: [
      "<=",
      ">=",
      "==",
      "!=",
      "===",
      "!==",
      "=>",
      "+",
      "-",
      "**",
      "*",
      "/",
      "%",
      "++",
      "--",
      "<<",
      "</",
      ">>",
      ">>>",
      "&",
      "|",
      "^",
      "!",
      "~",
      "&&",
      "||",
      "??",
      "?",
      ":",
      "=",
      "+=",
      "-=",
      "*=",
      "**=",
      "/=",
      "%=",
      "<<=",
      ">>=",
      ">>>=",
      "&=",
      "|=",
      "^=",
      "@"
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    digits: /\d+(_+\d+)*/,
    octaldigits: /[0-7]+(_+[0-7]+)*/,
    binarydigits: /[0-1]+(_+[0-1]+)*/,
    hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
    regexpctl: /[(){}\[\]\$\^|\-*+?\.]/,
    regexpesc: /\\(?:[bBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,
    // The main tokenizer for our languages
    tokenizer: {
      root: [
        [
          /\$\{/,
          {
            token: "delimiter.bracket",
            next: "@bracketCounting"
          }
        ],
        [/[^\\`$]+/, "string"],
        [/@escapes/, "string.escape"],
        [/\\./, "string.escape.invalid"]
      ],
      common: [
        // identifiers and keywords
        [
          /[a-z_$][\w$]*/,
          {
            cases: {
              "@keywords": "keyword",
              "@default": "identifier"
            }
          }
        ],
        [/[A-Z][\w\$]*/, "type.identifier"],
        // [/[A-Z][\w\$]*/, 'identifier'],
        // whitespace
        { include: "@whitespace" },
        // regular expression: ensure it is terminated before beginning (otherwise it is an opeator)
        [
          /\/(?=([^\\\/]|\\.)+\/([dgimsuy]*)(\s*)(\.|;|,|\)|\]|\}|$))/,
          {
            token: "regexp",
            bracket: "@open",
            next: "@regexp"
          }
        ],
        // delimiters and operators
        [/[()\[\]]/, "@brackets"],
        [/[<>](?!@symbols)/, "@brackets"],
        [/!(?=([^=]|$))/, "delimiter"],
        [
          /@symbols/,
          {
            cases: {
              "@operators": "delimiter",
              "@default": ""
            }
          }
        ],
        // numbers
        [/(@digits)[eE]([\-+]?(@digits))?/, "number.float"],
        [/(@digits)\.(@digits)([eE][\-+]?(@digits))?/, "number.float"],
        [/0[xX](@hexdigits)n?/, "number.hex"],
        [/0[oO]?(@octaldigits)n?/, "number.octal"],
        [/0[bB](@binarydigits)n?/, "number.binary"],
        [/(@digits)n?/, "number"],
        // delimiter: after number because of .\d floats
        [/[;,.]/, "delimiter"],
        // strings
        [/"([^"\\]|\\.)*$/, "string.invalid"],
        [/'([^'\\]|\\.)*$/, "string.invalid"],
        [/"/, "string", "@string_double"],
        [/'/, "string", "@string_single"],
        [/`/, "string", "@string_backtick"]
      ],
      whitespace: [
        [/[ \t\r\n]+/, ""],
        [/\/\*\*(?!\/)/, "comment.doc", "@jsdoc"],
        [/\/\*/, "comment", "@comment"],
        [/\/\/.*$/, "comment"]
      ],
      comment: [[/[^\/*]+/, "comment"], [/\*\//, "comment", "@pop"], [/[\/*]/, "comment"]],
      jsdoc: [
        [/[^\/*]+/, "comment.doc"],
        [/\*\//, "comment.doc", "@pop"],
        [/[\/*]/, "comment.doc"]
      ],
      // We match regular expression quite precisely
      regexp: [
        [
          /(\{)(\d+(?:,\d*)?)(\})/,
          [
            "regexp.escape.control",
            "regexp.escape.control",
            "regexp.escape.control"
          ]
        ],
        [
          /(\[)(\^?)(?=(?:[^\]\\\/]|\\.)+)/,
          [
            "regexp.escape.control",
            {
              token: "regexp.escape.control",
              next: "@regexrange"
            }
          ]
        ],
        [/(\()(\?:|\?=|\?!)/, ["regexp.escape.control", "regexp.escape.control"]],
        [/[()]/, "regexp.escape.control"],
        [/@regexpctl/, "regexp.escape.control"],
        [/[^\\\/]/, "regexp"],
        [/@regexpesc/, "regexp.escape"],
        [/\\\./, "regexp.invalid"],
        [
          /(\/)([dgimsuy]*)/,
          [
            {
              token: "regexp",
              bracket: "@close",
              next: "@pop"
            },
            "keyword.other"
          ]
        ]
      ],
      regexrange: [
        [/-/, "regexp.escape.control"],
        [/\^/, "regexp.invalid"],
        [/@regexpesc/, "regexp.escape"],
        [/[^\]]/, "regexp"],
        [
          /\]/,
          {
            token: "regexp.escape.control",
            next: "@pop",
            bracket: "@close"
          }
        ]
      ],
      string_double: [
        [/[^\\"]+/, "string"],
        [/@escapes/, "string.escape"],
        [/\\./, "string.escape.invalid"],
        [/"/, "string", "@pop"]
      ],
      string_single: [
        [/[^\\']+/, "string"],
        [/@escapes/, "string.escape"],
        [/\\./, "string.escape.invalid"],
        [/'/, "string", "@pop"]
      ],
      string_backtick: [
        [
          /\$\{/,
          {
            token: "delimiter.bracket",
            next: "@bracketCounting"
          }
        ],
        [/[^\\`$]+/, "string"],
        [/@escapes/, "string.escape"],
        [/\\./, "string.escape.invalid"],
        [/`/, "string", "@pop"]
      ],
      bracketCounting: [
        [/\{/, "delimiter.bracket", "@bracketCounting"],
        [/\}/, "delimiter.bracket", "@pop"],
        { include: "common" }
      ]
    }
  };
  let divEl = null;
  let editor;
  let model;
  const { componentControl, selectedComponent } = getContext("AppViewerContext") || {
    componentControl: writable({}),
    selectedComponent: writable([])
  };
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => $componentControl = value);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => $selectedComponent = value);
  if ($selectedComponent) {
    set_store_value(
      componentControl,
      $componentControl[$selectedComponent[0]] = {
        ...$componentControl[$selectedComponent[0]],
        setCode: (value) => {
          code = value;
          setCode(value);
        }
      },
      $componentControl
    );
  }
  let { code = "" } = $$props;
  let { hash = createHash() } = $$props;
  let { automaticLayout = true } = $$props;
  let { extraLib = "" } = $$props;
  let { autoHeight = true } = $$props;
  let { fixedOverflowWidgets = true } = $$props;
  let { fontSize = 16 } = $$props;
  if (typeof code != "string") {
    code = "";
  }
  createEventDispatcher();
  buildWorkerDefinition("../../../workers", import.meta.url);
  function insertAtCursor(code2) {
  }
  function setCode(ncode) {
    code = ncode;
  }
  function getCode() {
    return "";
  }
  let cip;
  let extraModel;
  let jsLoader = void 0;
  function focus() {
  }
  onDestroy(() => {
    try {
      jsLoader && clearTimeout(jsLoader);
      model && model.dispose();
      editor && editor.dispose();
      cip && cip.dispose();
      extraModel && extraModel.dispose();
    } catch (err) {
    }
  });
  if ($$props.conf === void 0 && $$bindings.conf && conf !== void 0) $$bindings.conf(conf);
  if ($$props.language === void 0 && $$bindings.language && language !== void 0) $$bindings.language(language);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0) $$bindings.code(code);
  if ($$props.hash === void 0 && $$bindings.hash && hash !== void 0) $$bindings.hash(hash);
  if ($$props.automaticLayout === void 0 && $$bindings.automaticLayout && automaticLayout !== void 0) $$bindings.automaticLayout(automaticLayout);
  if ($$props.extraLib === void 0 && $$bindings.extraLib && extraLib !== void 0) $$bindings.extraLib(extraLib);
  if ($$props.autoHeight === void 0 && $$bindings.autoHeight && autoHeight !== void 0) $$bindings.autoHeight(autoHeight);
  if ($$props.fixedOverflowWidgets === void 0 && $$bindings.fixedOverflowWidgets && fixedOverflowWidgets !== void 0) $$bindings.fixedOverflowWidgets(fixedOverflowWidgets);
  if ($$props.fontSize === void 0 && $$bindings.fontSize && fontSize !== void 0) $$bindings.fontSize(fontSize);
  if ($$props.insertAtCursor === void 0 && $$bindings.insertAtCursor && insertAtCursor !== void 0) $$bindings.insertAtCursor(insertAtCursor);
  if ($$props.setCode === void 0 && $$bindings.setCode && setCode !== void 0) $$bindings.setCode(setCode);
  if ($$props.getCode === void 0 && $$bindings.getCode && getCode !== void 0) $$bindings.getCode(getCode);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0) $$bindings.focus(focus);
  $$result.css.add(css);
  $$unsubscribe_selectedComponent();
  $$unsubscribe_componentControl();
  return `${validate_component(EditorTheme, "EditorTheme").$$render($$result, {}, {}, {})} <div style="height: 18px;" class="${escape($$props.class ?? "", true) + " border template rounded min-h-4 mx-0.5 overflow-clip"}"${add_attribute("this", divEl, 0)}></div>`;
});
export {
  Function_square as F,
  Plug as P,
  TemplateEditor as T,
  FlowScriptPicker as a,
  Tutorial as b,
  clickButtonBySelector as c,
  isFlowTainted as d,
  setInputBySelector as e,
  isAppTainted as f,
  clickFirstButtonBySelector as g,
  updateInlineRunnableCode as h,
  ignoredTutorials as i,
  connectInlineRunnableInputToComponentOutput as j,
  selectFlowStepKind as s,
  triggerAddFlowStep as t,
  updateFlowModuleById as u
};
