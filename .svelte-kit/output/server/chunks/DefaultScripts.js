import { c as create_ssr_component, v as validate_component, s as subscribe, e as escape, a as set_store_value, d as createEventDispatcher, b as add_attribute, f as each, o as onDestroy, z as null_to_empty } from "./ssr.js";
import { I as Icon } from "./Icon.js";
import { b as base } from "./base.js";
import { w as writable } from "./index.js";
import "./index2.js";
import { P as Popover, E as External_link } from "./Popover.js";
import "yaml";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import { B as Button, b as emptyString, H as truncateHash, h as getLocalSetting, s as sendUserToast, I as toCamel, k as capitalize } from "./toast.js";
import "minimatch";
/* empty css                                     */
import { P as Popup } from "./Popup.js";
import "./common.js";
import { S as SUPPORTED_LANGUAGES, M as MAX_SCHEMA_LENGTH, c as addThousandsSeparator } from "./lib.js";
import { j as dbSchemas, w as workspaceStore, f as copilotInfo, k as formatOnSave, c as codeCompletionSessionEnabled, g as codeCompletionLoading, d as defaultScripts, u as userStore } from "./stores2.js";
import { s as scriptLangToEditorLang, d as defaultScriptLanguages } from "./scripts.js";
import { H as HighlightCode } from "./FlowGraphViewerStep.js";
import { e as LoadingIcon, R as Rotate_cw } from "./LightweightSchemaForm.js";
import { autoPlacement } from "@floating-ui/core";
import { X } from "./x.js";
import { C as Check } from "./check.js";
import { W as Wand_2 } from "./wand-2.js";
import { c as ScriptService, R as ResourceService, V as VariableService } from "./services.gen.js";
import { N as NoItemFound, I as ItemPicker, R as ResourceEditorDrawer } from "./SchemaForm.js";
import { V as VariableEditor, S as Save } from "./VariableEditor.js";
import { D as Drawer, a as DrawerContent } from "./DrawerContent.js";
import { S as Skeleton } from "./Skeleton.js";
/* empty css                                             */
import { S as SearchItems } from "./SearchItems.js";
import { B as Badge } from "./Badge.js";
import { T as Toggle } from "./Toggle.js";
import { P as PickHubScript } from "./PickHubScript.js";
import { W as WindmillIcon } from "./WindmillIcon.js";
import { T as ToggleButtonGroup, a as ToggleButton } from "./ToggleButtonGroup.js";
import { B as Building } from "./building.js";
import { S as ScriptVersionHistory } from "./ScriptVersionHistory.js";
import { T as Tooltip } from "./Tooltip.js";
import { twMerge } from "tailwind-merge";
/* empty css                                                  */
import { B as Bot } from "./bot.js";
import { H as History } from "./history2.js";
import { A as Alert_triangle } from "./alert-triangle.js";
import { P as Plus } from "./plus.js";
import { D as Dollar_sign } from "./Required.js";
import { U as Users } from "./users.js";
import { L as Link } from "./link.js";
import { A as Alert } from "./Alert.js";
import { S as Settings } from "./settings.js";
const Check_circle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M22 11.08V12a10 10 0 1 1-5.93-9.14"
      }
    ],
    ["path", { "d": "m9 11 3 3L22 4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "check-circle" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Library = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "m16 6 4 14" }],
    ["path", { "d": "M12 6v14" }],
    ["path", { "d": "M8 8v12" }],
    ["path", { "d": "M4 4v16" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "library" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Package = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "m7.5 4.27 9 5.15" }],
    [
      "path",
      {
        "d": "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
      }
    ],
    ["path", { "d": "m3.3 7 8.7 5 8.7-5" }],
    ["path", { "d": "M12 22V12" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "package" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Paintbrush = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z"
      }
    ],
    [
      "path",
      {
        "d": "M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"
      }
    ],
    ["path", { "d": "M14.5 17.5 4.5 15" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "paintbrush" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Sparkles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
      }
    ],
    ["path", { "d": "M5 3v4" }],
    ["path", { "d": "M19 17v4" }],
    ["path", { "d": "M3 5h4" }],
    ["path", { "d": "M17 19h4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "sparkles" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ScriptFix = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $dbSchemas, $$unsubscribe_dbSchemas;
  let $generatedCode, $$unsubscribe_generatedCode;
  let $generatedExplanation, $$unsubscribe_generatedExplanation;
  let $$unsubscribe_workspaceStore;
  let $copilotInfo, $$unsubscribe_copilotInfo;
  $$unsubscribe_dbSchemas = subscribe(dbSchemas, (value) => $dbSchemas = value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  $$unsubscribe_copilotInfo = subscribe(copilotInfo, (value) => $copilotInfo = value);
  let { lang } = $$props;
  let { editor } = $$props;
  let { diffEditor } = $$props;
  let { error } = $$props;
  let { args } = $$props;
  let genLoading = false;
  let generatedCode = writable("");
  $$unsubscribe_generatedCode = subscribe(generatedCode, (value) => $generatedCode = value);
  let generatedExplanation = writable("");
  $$unsubscribe_generatedExplanation = subscribe(generatedExplanation, (value) => $generatedExplanation = value);
  function hideDiff() {
    editor?.show();
    diffEditor?.hide();
  }
  function clear() {
    set_store_value(generatedCode, $generatedCode = "", $generatedCode);
    set_store_value(generatedExplanation, $generatedExplanation = "", $generatedExplanation);
  }
  function updateSchema(lang2, args2) {
    const schemaRes = lang2 === "graphql" ? args2.api : args2.database;
    if (typeof schemaRes === "string") {
      $dbSchemas[schemaRes.replace("$res:", "")];
    }
  }
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0) $$bindings.lang(lang);
  if ($$props.editor === void 0 && $$bindings.editor && editor !== void 0) $$bindings.editor(editor);
  if ($$props.diffEditor === void 0 && $$bindings.diffEditor && diffEditor !== void 0) $$bindings.diffEditor(diffEditor);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
  if ($$props.args === void 0 && $$bindings.args && args !== void 0) $$bindings.args(args);
  lang && clear();
  !$generatedCode && hideDiff();
  {
    updateSchema(lang, args);
  }
  $$unsubscribe_dbSchemas();
  $$unsubscribe_generatedCode();
  $$unsubscribe_generatedExplanation();
  $$unsubscribe_workspaceStore();
  $$unsubscribe_copilotInfo();
  return `${SUPPORTED_LANGUAGES.has(lang) ? `<div>${$generatedCode.length > 0 ? `<div class="flex gap-1">${validate_component(Button, "Button").$$render(
    $$result,
    {
      title: "Discard generated code",
      size: "xs",
      color: "red",
      spacingSize: "xs2",
      variant: "contained",
      startIcon: { icon: X }
    },
    {},
    {
      default: () => {
        return `Discard`;
      }
    }
  )}${validate_component(Button, "Button").$$render(
    $$result,
    {
      title: "Accept generated code",
      size: "xs",
      color: "green",
      spacingSize: "xs2",
      startIcon: { icon: Check }
    },
    {},
    {
      default: () => {
        return `Accept`;
      }
    }
  )} ${$generatedExplanation.length > 0 ? `${validate_component(Popover, "Popover").$$render($$result, {}, {}, {
    text: () => {
      return `${escape($generatedExplanation)}`;
    },
    default: () => {
      return `${validate_component(Button, "Button").$$render(
        $$result,
        {
          size: "xs",
          color: "light",
          variant: "contained",
          spacingSize: "xs2"
        },
        {},
        {
          default: () => {
            return `Explain`;
          }
        }
      )}`;
    }
  })}` : ``}</div>` : `${validate_component(Popup, "Popup").$$render(
    $$result,
    {
      floatingConfig: {
        middleware: [
          autoPlacement({
            allowedPlacements: ["bottom-end", "top-end"]
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
            title: "Fix code",
            size: "xs",
            color: "light",
            spacingSize: "xs2",
            startIcon: { icon: Wand_2 },
            nonCaptureEvent: !genLoading,
            btnClasses: "text-violet-800 dark:text-violet-400 bg-violet-100 dark:bg-gray-700"
          },
          {},
          {
            default: () => {
              return `${`
							AI Fix`}`;
            }
          }
        )} `;
      },
      default: ({ close }) => {
        return `<div>${$copilotInfo.exists_openai_resource_path ? `<div class="w-[42rem] min-h-[3rem] max-h-[34rem] overflow-y-scroll">${$generatedCode.length > 0 ? `<div class="overflow-x-scroll">${validate_component(HighlightCode, "HighlightCode").$$render($$result, { language: lang, code: $generatedCode }, {}, {})}</div> ${$generatedExplanation.length > 0 ? `<p class="text-sm mt-2"><span class="font-bold" data-svelte-h="svelte-seuk9l">Explanation:</span> ${escape($generatedExplanation)}</p>` : ``}` : `${validate_component(LoadingIcon, "LoadingIcon").$$render($$result, {}, {}, {})}`}</div>` : `<div class="w-80" data-svelte-h="svelte-8llzr7"><p class="text-sm">Enable Windmill AI in the <a class="inline-flex flex-row items-center gap-1" href="${escape(base, true) + "/workspace_settings?tab=openai"}" target="_blank">workspace settings</a></p></div>`}</div>`;
      }
    }
  )}`}</div>` : ``}`;
});
const WorkspaceScriptPicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let prefilteredItems;
  let owners;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { kind = "script" } = $$props;
  let { isTemplate = void 0 } = $$props;
  let { displayLock = false } = $$props;
  let items = void 0;
  let filteredItems = void 0;
  let { filter = "" } = $$props;
  async function loadItems() {
    items = await ScriptService.listScripts({
      workspace: $workspaceStore,
      kinds: kind,
      isTemplate
    });
  }
  let ownerFilter = void 0;
  createEventDispatcher();
  let lockHash = false;
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0) $$bindings.kind(kind);
  if ($$props.isTemplate === void 0 && $$bindings.isTemplate && isTemplate !== void 0) $$bindings.isTemplate(isTemplate);
  if ($$props.displayLock === void 0 && $$bindings.displayLock && displayLock !== void 0) $$bindings.displayLock(displayLock);
  if ($$props.filter === void 0 && $$bindings.filter && filter !== void 0) $$bindings.filter(filter);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $workspaceStore && kind && loadItems();
    {
      if ($workspaceStore) {
        ownerFilter = void 0;
      }
    }
    prefilteredItems = ownerFilter ? items?.filter((x) => x.path.startsWith(ownerFilter)) : items;
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
    )} <div class="flex flex-col min-h-0"><div class="w-full flex mt-1 items-center gap-2 mb-3">${slots.default ? slots.default({}) : ``} <input type="text" placeholder="Search Workspace Scripts" class="text-2xl grow"${add_attribute("value", filter, 0)}></div> ${filteredItems ? `${owners.length > 0 ? `<div class="gap-2 w-full flex flex-wrap my-2">${each(owners, (owner) => {
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
    })}</div>` : ``} ${displayLock ? `<div class="flex flex-row-reverse mb-1">${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        options: {
          left: "Latest version",
          right: "Lock current hash permanently"
        },
        checked: lockHash
      },
      {
        checked: ($$value) => {
          lockHash = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : ``} ${filter.length > 0 && filteredItems.length == 0 ? `${validate_component(NoItemFound, "NoItemFound").$$render($$result, {}, {}, {})}` : ``} <ul class="divide-y border rounded-md">${each(filteredItems, ({ path, hash, summary, description, marked }) => {
      return `<li class="flex flex-row w-full"><button class="p-4 gap-1 flex flex-row grow hover:bg-surface-hover bg-surface transition-all text-primary"><div class="flex flex-col"><div class="text-sm font-semibold flex flex-col"><span class="mr-2 text-left">${marked ? `<!-- HTML_TAG_START -->${marked}<!-- HTML_TAG_END --> ` : `${escape(!summary || summary.length == 0 ? path : summary)} `}</span> <span class="font-normal text-xs text-left italic overflow-hidden">${escape(path ?? "")}</span></div> <div class="text-xs font-light italic text-left">${escape(description ?? "")}</div></div> ${lockHash ? `${validate_component(Badge, "Badge").$$render($$result, { large: true, baseClass: "ml-4" }, {}, {
        default: () => {
          return `${escape(truncateHash(hash ?? ""))}`;
        }
      })}` : ``}</button> </li>`;
    })}</ul>` : `<div class="mt-6"></div> ${each(new Array(6), (_) => {
      return `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[4], 0.7] }, {}, {})}`;
    })}`}</div>`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const ToggleHubWorkspace = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { selected = "hub" } = $$props;
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0) $$bindings.selected(selected);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="max-w-min">${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
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
              value: "hub",
              icon: WindmillIcon,
              label: "Hub"
            },
            {},
            {}
          )} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              value: "workspace",
              icon: Building,
              label: "Workspace"
            },
            {},
            {}
          )}`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const PaintbrushOff = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = 24 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  return `<svg${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.37 2.62999L14 6.99999L12.41 5.40999C12.0353 5.03749 11.5284 4.8284 11 4.8284C10.4716 4.8284 9.96473 5.03749 9.59 5.40999L8 6.99999L17 16L18.59 14.41C18.9625 14.0353 19.1716 13.5284 19.1716 13C19.1716 12.4716 18.9625 11.9647 18.59 11.59L17 9.99999L21.37 5.62999C21.7678 5.23216 21.9913 4.6926 21.9913 4.12999C21.9913 3.56738 21.7678 3.02781 21.37 2.62999C20.9722 2.23216 20.4326 2.00867 19.87 2.00867C19.3074 2.00867 18.7678 2.23216 18.37 2.62999Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 8C7 11 5 11.5 2 12L10 22C12 21 16 17 16 15" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.5 17.5L4.5 15" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 22L2 2" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const SETTING_NAME$1 = "formatOnSave";
const FormatOnSave = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $formatOnSave, $$unsubscribe_formatOnSave;
  $$unsubscribe_formatOnSave = subscribe(formatOnSave, (value) => $formatOnSave = value);
  function loadSetting() {
    set_store_value(formatOnSave, $formatOnSave = (getLocalSetting(SETTING_NAME$1) ?? "true") == "true", $formatOnSave);
  }
  loadSetting();
  $$unsubscribe_formatOnSave();
  return `${validate_component(Popover, "Popover").$$render($$result, {}, {}, {
    text: () => {
      return `${escape($formatOnSave ? "Disable" : "Enable")} auto-formatting`;
    },
    default: () => {
      return `${validate_component(Button, "Button").$$render(
        $$result,
        {
          size: "xs",
          color: "light",
          startIcon: {
            icon: !$formatOnSave ? PaintbrushOff : Paintbrush
          },
          btnClasses: "text-tertiary"
        },
        {},
        {}
      )}`;
    }
  })}`;
});
const ScriptGen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $generatedCode, $$unsubscribe_generatedCode;
  let $dbSchemas, $$unsubscribe_dbSchemas;
  let $$unsubscribe_workspaceStore;
  let $copilotInfo, $$unsubscribe_copilotInfo;
  $$unsubscribe_dbSchemas = subscribe(dbSchemas, (value) => $dbSchemas = value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  $$unsubscribe_copilotInfo = subscribe(copilotInfo, (value) => $copilotInfo = value);
  let { iconOnly = false } = $$props;
  let { lang } = $$props;
  let { editor } = $$props;
  let { diffEditor } = $$props;
  let { inlineScript = false } = $$props;
  let { args } = $$props;
  let { transformer = false } = $$props;
  let funcDesc = "";
  let trimmedDesc = "";
  let genLoading = false;
  let input;
  let generatedCode = writable("");
  $$unsubscribe_generatedCode = subscribe(generatedCode, (value) => $generatedCode = value);
  let dbSchema = void 0;
  let blockPopupOpen = false;
  let mode = "gen";
  let button;
  function hideDiff() {
    editor?.show();
    diffEditor?.hide();
  }
  function clear() {
    set_store_value(generatedCode, $generatedCode = "", $generatedCode);
  }
  function updateSchema(lang2, args2, dbSchemas2) {
    const schemaRes = lang2 === "graphql" ? args2.api : args2.database;
    if (typeof schemaRes === "string") {
      const schemaPath = schemaRes.replace("$res:", "");
      if (schemaPath in dbSchemas2 && dbSchemas2[schemaPath].lang === lang2) {
        dbSchema = dbSchemas2[schemaPath];
      } else {
        dbSchema = void 0;
      }
    } else {
      dbSchema = void 0;
    }
  }
  let promptHistory = [];
  function getPromptHistory() {
    try {
      promptHistory = JSON.parse(localStorage.getItem("prompts-" + lang) || "[]");
    } catch (e) {
      console.error("error interacting with local storage", e);
    }
  }
  onDestroy(() => {
  });
  if ($$props.iconOnly === void 0 && $$bindings.iconOnly && iconOnly !== void 0) $$bindings.iconOnly(iconOnly);
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0) $$bindings.lang(lang);
  if ($$props.editor === void 0 && $$bindings.editor && editor !== void 0) $$bindings.editor(editor);
  if ($$props.diffEditor === void 0 && $$bindings.diffEditor && diffEditor !== void 0) $$bindings.diffEditor(diffEditor);
  if ($$props.inlineScript === void 0 && $$bindings.inlineScript && inlineScript !== void 0) $$bindings.inlineScript(inlineScript);
  if ($$props.args === void 0 && $$bindings.args && args !== void 0) $$bindings.args(args);
  if ($$props.transformer === void 0 && $$bindings.transformer && transformer !== void 0) $$bindings.transformer(transformer);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (lang == "bunnative") {
        lang = "bun";
      }
    }
    trimmedDesc = funcDesc.trim();
    lang && clear();
    !$generatedCode && hideDiff();
    {
      updateSchema(lang, args, $dbSchemas);
    }
    lang && getPromptHistory();
    $$rendered = ` ${``} ${$generatedCode.length > 0 && !genLoading ? `${inlineScript ? `<div class="flex gap-1">${validate_component(Button, "Button").$$render(
      $$result,
      {
        title: "Discard generated code",
        btnClasses: "!font-medium px-2 w-7",
        size: "xs",
        color: "red",
        variant: "contained",
        startIcon: { icon: X },
        iconOnly: true
      },
      {},
      {}
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        title: "Accept generated code",
        btnClasses: "!font-medium px-2 w-7",
        size: "xs",
        color: "green",
        iconOnly: true,
        startIcon: { icon: Check }
      },
      {},
      {}
    )}</div>` : `<div class="flex gap-1 px-2">${validate_component(Button, "Button").$$render(
      $$result,
      {
        title: "Discard generated code",
        btnClasses: "!font-medium px-2",
        size: "xs",
        color: "red",
        variant: "contained",
        startIcon: { icon: X },
        iconOnly
      },
      {},
      {
        default: () => {
          return `Discard`;
        }
      }
    )}${validate_component(Button, "Button").$$render(
      $$result,
      {
        title: "Accept generated code",
        btnClasses: "!font-medium px-2",
        size: "xs",
        color: "green",
        startIcon: { icon: Check },
        iconOnly
      },
      {},
      {
        default: () => {
          return `Accept`;
        }
      }
    )}</div>`}` : ``} ${($generatedCode.length === 0 || genLoading) && SUPPORTED_LANGUAGES.has(lang ?? "") ? `${validate_component(Popup, "Popup").$$render(
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
        },
        blockOpen: blockPopupOpen
      },
      {},
      {
        button: () => {
          return `${inlineScript ? `${validate_component(Button, "Button").$$render(
            $$result,
            {
              size: "xs",
              color: "light",
              btnClasses: "!px-2",
              propagateEvent: !genLoading,
              iconOnly: true,
              title: "Generate code from prompt",
              startIcon: {
                icon: Wand_2,
                classes: "text-violet-800 dark:text-violet-400"
              },
              element: button
            },
            {
              element: ($$value) => {
                button = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : `${validate_component(Button, "Button").$$render(
            $$result,
            {
              title: "Generate code from prompt",
              btnClasses: twMerge("!font-medium", "text-violet-800 dark:text-violet-400"),
              size: "xs",
              color: "light",
              spacingSize: "md",
              startIcon: { icon: Wand_2 },
              propagateEvent: !genLoading,
              iconOnly,
              element: button
            },
            {
              element: ($$value) => {
                button = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${`AI Gen`}`;
              }
            }
          )}`} `;
        },
        default: ({ close }) => {
          return `<div class="block text-primary">${`${$copilotInfo.exists_openai_resource_path ? `<div class="flex flex-col gap-4"><div class="flex flex-row justify-between items-center">${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
            $$result,
            { class: "w-auto shrink-0", selected: mode },
            {
              selected: ($$value) => {
                mode = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${validate_component(ToggleButton, "ToggleButton").$$render(
                  $$result,
                  {
                    value: "gen",
                    label: "Generate from scratch",
                    small: true,
                    light: true
                  },
                  {},
                  {}
                )} ${validate_component(ToggleButton, "ToggleButton").$$render(
                  $$result,
                  {
                    value: "edit",
                    label: "Edit existing code",
                    small: true,
                    light: true
                  },
                  {},
                  {}
                )}`;
              }
            }
          )} <div class="text-[0.6rem] text-secondary opacity-60 flex flex-row items-center gap-0.5">GPT-4o${validate_component(Bot, "Bot").$$render($$result, { size: 14 }, {}, {})}</div></div> <div class="flex w-96 items-start"><textarea${add_attribute(
            "placeholder",
            mode === "edit" ? "Describe the changes you want" : "Describe what the script should do",
            0
          )} rows="1" class="resize-none overflow-hidden"${add_attribute("this", input, 0)}>${escape("")}</textarea> ${validate_component(Button, "Button").$$render(
            $$result,
            {
              size: "xs",
              color: "light",
              buttonType: "button",
              btnClasses: "!h-[34px] qhd:!h-[38px] !ml-2 text-violet-800 dark:text-violet-400 bg-violet-100 dark:bg-gray-700",
              title: "Generate code from prompt",
              "aria-label": "Generate",
              disabled: trimmedDesc.length <= 0,
              iconOnly: true,
              startIcon: { icon: Wand_2 }
            },
            {},
            {}
          )}</div> ${promptHistory.length > 0 ? `<div class="w-96 flex flex-col gap-1">${each(promptHistory, (p) => {
            return `${validate_component(Button, "Button").$$render(
              $$result,
              {
                size: "xs2",
                color: "light",
                btnClasses: "justify-start overflow-x-scroll no-scrollbar",
                startIcon: { icon: History, classes: "shrink-0" }
              },
              {},
              {
                default: () => {
                  return `${escape(p)}`;
                }
              }
            )}`;
          })} <button class="underline text-xs text-start px-2 text-secondary font-normal" data-svelte-h="svelte-1w0240h">clear history</button></div>` : ``} ${[
            "postgresql",
            "mysql",
            "snowflake",
            "bigquery",
            "mssql",
            "graphql"
          ].includes(lang ?? "") && dbSchema?.lang === lang ? `<div class="flex flex-row items-center justify-between gap-2 w-96"><div class="flex flex-row items-center gap-1"><p class="text-xs text-secondary">Context: ${escape(lang === "graphql" ? "GraphQL" : "DB")} schema</p> ${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: "top" }, {}, {
            default: () => {
              return `We pass the selected schema to GPT-4 Turbo for better script generation.`;
            }
          })} ${dbSchema && dbSchema.stringified.length > MAX_SCHEMA_LENGTH ? `${validate_component(Popover, "Popover").$$render($$result, { notClickable: true, placement: "top" }, {}, {
            text: () => {
              return `The schema is about ${escape(addThousandsSeparator(dbSchema.stringified.length / 3.5))}
											tokens. To avoid exceeding the model&#39;s context length, it will be truncated to
											${escape(addThousandsSeparator(MAX_SCHEMA_LENGTH / 3.5))}
											tokens.
										`;
            },
            default: () => {
              return `${validate_component(Alert_triangle, "AlertTriangle").$$render($$result, { size: 16, class: "text-yellow-500" }, {}, {})}`;
            }
          })}` : ``}</div> ${dbSchema && dbSchema.lang !== "graphql" && (dbSchema.schema?.public || dbSchema.schema?.PUBLIC || dbSchema.schema?.dbo) ? `${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
            $$result,
            {
              class: "w-auto shrink-0",
              selected: dbSchema.publicOnly
            },
            {
              selected: ($$value) => {
                dbSchema.publicOnly = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${validate_component(ToggleButton, "ToggleButton").$$render(
                  $$result,
                  {
                    value: true,
                    label: (dbSchema.schema?.dbo ? "Dbo" : "Public") + " schema",
                    small: true,
                    light: true
                  },
                  {},
                  {}
                )} ${validate_component(ToggleButton, "ToggleButton").$$render(
                  $$result,
                  {
                    value: false,
                    label: "All schemas",
                    small: true,
                    light: true
                  },
                  {},
                  {}
                )}`;
              }
            }
          )}` : ``}</div>` : ``}</div>` : `<p class="text-sm">Enable Windmill AI in the <a href="${escape(base, true) + "/workspace_settings?tab=openai"}" target="_blank" class="inline-flex flex-row items-center gap-1">workspace settings ${validate_component(External_link, "ExternalLink").$$render($$result, { size: 16 }, {}, {})}</a></p>`}`}</div>`;
        }
      }
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_generatedCode();
  $$unsubscribe_dbSchemas();
  $$unsubscribe_workspaceStore();
  $$unsubscribe_copilotInfo();
  return $$rendered;
});
const SparklesOffIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  return `<svg${add_attribute("width", size, 0)}${add_attribute("height", size, 0)}${add_attribute("class", $$props.class, 0)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3L10.088 8.813C9.99015 9.11051 9.82379 9.38088 9.60234 9.60234C9.38088 9.82379 9.11051 9.99015 8.813 10.088L3 12L8.813 13.912C9.11051 14.0099 9.38088 14.1762 9.60234 14.3977C9.82379 14.6191 9.99015 14.8895 10.088 15.187L12 21L13.912 15.187C14.0099 14.8895 14.1762 14.6191 14.3977 14.3977C14.6191 14.1762 14.8895 14.0099 15.187 13.912L21 12L15.187 10.088C14.8895 9.99015 14.6191 9.82379 14.3977 9.60234C14.1762 9.38088 14.0099 9.11051 13.912 8.813L12 3Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 3V7" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 17V21" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 5H7" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 19H21" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 22L22 2" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const SETTING_NAME = "codeCompletionSessionEnabled";
const CodeCompletionStatus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $codeCompletionSessionEnabled, $$unsubscribe_codeCompletionSessionEnabled;
  let $copilotInfo, $$unsubscribe_copilotInfo;
  let $codeCompletionLoading, $$unsubscribe_codeCompletionLoading;
  $$unsubscribe_codeCompletionSessionEnabled = subscribe(codeCompletionSessionEnabled, (value) => $codeCompletionSessionEnabled = value);
  $$unsubscribe_copilotInfo = subscribe(copilotInfo, (value) => $copilotInfo = value);
  $$unsubscribe_codeCompletionLoading = subscribe(codeCompletionLoading, (value) => $codeCompletionLoading = value);
  function loadSetting() {
    set_store_value(codeCompletionSessionEnabled, $codeCompletionSessionEnabled = (getLocalSetting(SETTING_NAME) ?? "true") == "true", $codeCompletionSessionEnabled);
  }
  loadSetting();
  $$unsubscribe_codeCompletionSessionEnabled();
  $$unsubscribe_copilotInfo();
  $$unsubscribe_codeCompletionLoading();
  return `${$copilotInfo.exists_openai_resource_path && $copilotInfo.code_completion_enabled ? `${validate_component(Popover, "Popover").$$render($$result, {}, {}, {
    text: () => {
      return `Code completion: ${escape($codeCompletionSessionEnabled ? "enabled" : "disabled")} (applies only to you)`;
    },
    default: () => {
      return `${validate_component(Button, "Button").$$render(
        $$result,
        {
          color: "light",
          size: "xs",
          loading: $codeCompletionLoading,
          startIcon: $codeCompletionLoading ? void 0 : {
            icon: $codeCompletionSessionEnabled ? Sparkles : SparklesOffIcon,
            classes: $codeCompletionSessionEnabled ? "text-violet-800 dark:text-violet-400" : "text-violet-800/50 dark:text-violet-400/50"
          }
        },
        {},
        {}
      )}`;
    }
  })}` : `${validate_component(Popover, "Popover").$$render($$result, {}, {}, {
    text: () => {
      return `Code completion is disabled in the workspace settings`;
    },
    default: () => {
      return `${validate_component(Button, "Button").$$render(
        $$result,
        {
          color: "light",
          startIcon: { icon: SparklesOffIcon },
          btnClasses: "text-violet-800/50 dark:text-violet-400/50"
        },
        {},
        {}
      )}`;
    }
  })}`}`;
});
const css = {
  code: "@keyframes svelte-ttfb2q-pulse{50%{opacity:.5}}span.green.svelte-ttfb2q{--tw-text-opacity:1;animation:svelte-ttfb2q-pulse 5s ease-in-out infinite;color:rgb(22 163 74/var(--tw-text-opacity))}",
  map: null
};
const EDITOR_BAR_WIDTH_THRESHOLD = 1044;
function compile(schema) {
  function rec(x, root = false) {
    let res = "{\n";
    const entries = Object.entries(x);
    if (entries.length == 0) {
      return "any";
    }
    let i = 0;
    for (let [name, prop] of entries) {
      if (prop.type == "object") {
        res += `${name}: ${rec(prop.properties ?? {})}`;
      } else if (prop.type == "array") {
        res += `${name}: ${prop?.items?.type ?? "any"}[]`;
      } else {
        let typ = prop?.type ?? "any";
        if (typ == "integer") {
          typ = "number";
        }
        res += `${name}: ${typ}`;
      }
      i++;
      if (i < entries.length) {
        res += ",\n";
      }
    }
    if (!root) {
      res += "\n}";
    }
    return res;
  }
  return rec(schema.properties, true);
}
function phpCompile(schema) {
  let res = "  ";
  const entries = Object.entries(schema.properties);
  if (entries.length === 0) {
    return "array";
  }
  let i = 0;
  for (let [name, prop] of entries) {
    let typ = "array";
    if (prop.type === "array") {
      typ = "array";
    } else if (prop.type === "string") {
      typ = "string";
    } else if (prop.type === "number") {
      typ = "float";
    } else if (prop.type === "integer") {
      typ = "int";
    } else if (prop.type === "boolean") {
      typ = "bool";
    }
    res += `public ${typ} $${name};`;
    i++;
    if (i < entries.length) {
      res += "\n";
    }
  }
  return res;
}
function pythonCompile(schema) {
  let res = "";
  const entries = Object.entries(schema.properties);
  if (entries.length === 0) {
    return "dict";
  }
  let i = 0;
  for (let [name, prop] of entries) {
    let typ = "dict";
    if (prop.type === "array") {
      typ = "list";
    } else if (prop.type === "string") {
      typ = "str";
    } else if (prop.type === "number") {
      typ = "float";
    } else if (prop.type === "integer") {
      typ = "int";
    } else if (prop.type === "boolean") {
      typ = "bool";
    }
    res += `${name}: ${typ}`;
    i++;
    if (i < entries.length) {
      res += "\n";
    }
  }
  return res;
}
const EditorBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { lang } = $$props;
  let { editor } = $$props;
  let { websocketAlive } = $$props;
  let { iconOnly = false } = $$props;
  let { validCode = true } = $$props;
  let { kind = "script" } = $$props;
  let { template = "script" } = $$props;
  let { collabMode = false } = $$props;
  let { collabLive = false } = $$props;
  let { collabUsers = [] } = $$props;
  let { scriptPath = void 0 } = $$props;
  let { diffEditor = void 0 } = $$props;
  let { args } = $$props;
  let { noHistory = false } = $$props;
  let { saveToWorkspace = false } = $$props;
  let contextualVariablePicker;
  let variablePicker;
  let resourcePicker;
  let resourceTypePicker;
  let variableEditor;
  let resourceEditor;
  let showContextVarPicker = false;
  let showVarPicker = false;
  let showResourcePicker = false;
  let showResourceTypePicker = false;
  let codeViewer;
  function addEditorActions() {
    editor?.addAction("insert-variable", "Windmill: Insert variable", () => {
      variablePicker.openDrawer();
    });
    editor?.addAction("insert-resource", "Windmill: Insert resource", () => {
      resourcePicker.openDrawer();
    });
  }
  async function loadVariables() {
    return await VariableService.listVariable({ workspace: $workspaceStore ?? "" });
  }
  async function loadContextualVariables() {
    return await VariableService.listContextualVariables({ workspace: $workspaceStore ?? "NO_W" });
  }
  let scriptPicker;
  let pick_existing = "hub";
  let filter = "";
  createEventDispatcher();
  async function resourceTypePickCallback(name) {
    if (!editor) return;
    const resourceType = await ResourceService.getResourceType({
      workspace: $workspaceStore ?? "NO_W",
      path: name
    });
    if (lang == "python3") {
      const pySchema = pythonCompile(resourceType.schema);
      editor.insertAtCursor(`class ${name}(TypedDict):
${pySchema}
`);
      const code = editor.getCode();
      if (!code.includes("from typing import TypedDict")) {
        editor.insertAtBeginning("from typing import TypedDict\n");
      }
    } else if (lang === "php") {
      const phpSchema = phpCompile(resourceType.schema);
      const rtName = toCamel(capitalize(name));
      editor.insertAtCursor(`if (!class_exists('${rtName}')) {
class ${rtName} {
${phpSchema}
`);
      editor.backspace();
      editor.insertAtCursor("}");
    } else {
      const tsSchema = compile(resourceType.schema);
      editor.insertAtCursor(`type ${toCamel(capitalize(name))} = ${tsSchema}`);
    }
    sendUserToast(`${name} inserted at cursor`);
  }
  let historyBrowserDrawerOpen = false;
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0) $$bindings.lang(lang);
  if ($$props.editor === void 0 && $$bindings.editor && editor !== void 0) $$bindings.editor(editor);
  if ($$props.websocketAlive === void 0 && $$bindings.websocketAlive && websocketAlive !== void 0) $$bindings.websocketAlive(websocketAlive);
  if ($$props.iconOnly === void 0 && $$bindings.iconOnly && iconOnly !== void 0) $$bindings.iconOnly(iconOnly);
  if ($$props.validCode === void 0 && $$bindings.validCode && validCode !== void 0) $$bindings.validCode(validCode);
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0) $$bindings.kind(kind);
  if ($$props.template === void 0 && $$bindings.template && template !== void 0) $$bindings.template(template);
  if ($$props.collabMode === void 0 && $$bindings.collabMode && collabMode !== void 0) $$bindings.collabMode(collabMode);
  if ($$props.collabLive === void 0 && $$bindings.collabLive && collabLive !== void 0) $$bindings.collabLive(collabLive);
  if ($$props.collabUsers === void 0 && $$bindings.collabUsers && collabUsers !== void 0) $$bindings.collabUsers(collabUsers);
  if ($$props.scriptPath === void 0 && $$bindings.scriptPath && scriptPath !== void 0) $$bindings.scriptPath(scriptPath);
  if ($$props.diffEditor === void 0 && $$bindings.diffEditor && diffEditor !== void 0) $$bindings.diffEditor(diffEditor);
  if ($$props.args === void 0 && $$bindings.args && args !== void 0) $$bindings.args(args);
  if ($$props.noHistory === void 0 && $$bindings.noHistory && noHistory !== void 0) $$bindings.noHistory(noHistory);
  if ($$props.saveToWorkspace === void 0 && $$bindings.saveToWorkspace && saveToWorkspace !== void 0) $$bindings.saveToWorkspace(saveToWorkspace);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    showContextVarPicker = [
      "python3",
      "bash",
      "powershell",
      "go",
      "deno",
      "bun",
      "bunnative",
      "nativets",
      "php"
    ].includes(lang ?? "");
    showVarPicker = [
      "python3",
      "bash",
      "powershell",
      "go",
      "deno",
      "bun",
      "bunnative",
      "nativets",
      "php"
    ].includes(lang ?? "");
    showResourcePicker = [
      "python3",
      "bash",
      "powershell",
      "go",
      "deno",
      "bun",
      "bunnative",
      "nativets",
      "php"
    ].includes(lang ?? "");
    showResourceTypePicker = ["typescript", "javascript"].includes(scriptLangToEditorLang(lang)) || lang === "python3" || lang === "php";
    editor && addEditorActions();
    $$rendered = `${scriptPath ? `${validate_component(Drawer, "Drawer").$$render(
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
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Versions History" }, {}, {
            default: () => {
              return `${validate_component(ScriptVersionHistory, "ScriptVersionHistory").$$render($$result, { scriptPath }, {}, {})}`;
            }
          })}`;
        }
      }
    )}` : ``} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "900px", this: scriptPicker },
      {
        this: ($$value) => {
          scriptPicker = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Code" }, {}, {
            default: () => {
              return `${pick_existing == "hub" ? `${validate_component(PickHubScript, "PickHubScript").$$render(
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
              )}`}`;
            }
          })}`;
        }
      }
    )} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "600px", this: codeViewer },
      {
        this: ($$value) => {
          codeViewer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Code" }, {}, {
            default: () => {
              return `${`${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[40]] }, {}, {})}`}`;
            }
          })}`;
        }
      }
    )} ${validate_component(ItemPicker, "ItemPicker").$$render(
      $$result,
      {
        pickCallback: (path, name) => {
          if (!editor) return;
          if (lang == "deno") {
            editor.insertAtCursor(`Deno.env.get('${name}')`);
          } else if (lang === "bun" || lang === "bunnative" || lang == "nativets") {
            editor.insertAtCursor(`process.env["${name}"]`);
          } else if (lang == "python3") {
            if (!editor.getCode().includes("import os")) {
              editor.insertAtBeginning("import os\n");
            }
            editor.insertAtCursor(`os.environ.get("${name}")`);
          } else if (lang == "go") {
            if (!editor.getCode().includes('"os"')) {
              editor.insertAtLine('import "os"\n', 2);
            }
            editor.insertAtCursor(`os.Getenv("${name}")`);
          } else if (lang == "bash") {
            editor.insertAtCursor(`$${name}`);
          } else if (lang == "powershell") {
            editor.insertAtCursor(`$Env:${name}`);
          } else if (lang == "php") {
            editor.insertAtCursor(`getenv('${name}');`);
          }
          sendUserToast(`${name} inserted at cursor`);
        },
        tooltip: "Contextual Variables are variables whose values are contextual to the Script\n	execution. They are are automatically set by Windmill.",
        documentationLink: "https://www.windmill.dev/docs/core_concepts/variables_and_secrets#contextual-variables",
        itemName: "Contextual Variable",
        extraField: "name",
        loadItems: loadContextualVariables,
        this: contextualVariablePicker
      },
      {
        this: ($$value) => {
          contextualVariablePicker = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ItemPicker, "ItemPicker").$$render(
      $$result,
      {
        pickCallback: (path, name) => {
          if (!editor) return;
          if (lang == "deno") {
            if (!editor.getCode().includes("import * as wmill from")) {
              editor.insertAtBeginning(`import * as wmill from "npm:windmill-client@1"
`);
            }
            editor.insertAtCursor(`(await wmill.getVariable('${path}'))`);
          } else if (lang === "bun" || lang === "bunnative") {
            const code = editor.getCode();
            if (!code.includes(`import * as wmill from`)) {
              editor.insertAtBeginning(`import * as wmill from "windmill-client"
`);
            }
            editor.insertAtCursor(`(await wmill.getVariable('${path}'))`);
          } else if (lang == "python3") {
            if (!editor.getCode().includes("import wmill")) {
              editor.insertAtBeginning("import wmill\n");
            }
            editor.insertAtCursor(`wmill.get_variable("${path}")`);
          } else if (lang == "go") {
            if (!editor.getCode().includes('wmill "github.com/windmill-labs/windmill-go-client"')) {
              editor.insertAtLine('import wmill "github.com/windmill-labs/windmill-go-client"\n\n', 3);
            }
            editor.insertAtCursor(`v, _ := wmill.GetVariable("${path}")`);
          } else if (lang == "bash") {
            editor.insertAtCursor(`curl -s -H "Authorization: Bearer $WM_TOKEN" \\
  "$BASE_INTERNAL_URL/api/w/$WM_WORKSPACE/variables/get_value/${path}" | jq -r .`);
          } else if (lang == "powershell") {
            editor.insertAtCursor(`$Headers = @{
"Authorization" = "Bearer $Env:WM_TOKEN"`);
            editor.arrowDown();
            editor.insertAtCursor(`
Invoke-RestMethod -Headers $Headers -Uri "$Env:BASE_INTERNAL_URL/api/w/$Env:WM_WORKSPACE/variables/get_value/${path}"`);
          } else if (lang == "nativets") {
            const code = editor.getCode();
            if (!code.includes(`import * as wmill from`)) {
              editor.insertAtBeginning(`import * as wmill from "./windmill.ts"
`);
            }
            editor.insertAtCursor(`(await wmill.getVariable('${path}'))`);
          } else if (lang == "php") {
            editor.insertAtCursor(`$ch = curl_init(getenv('BASE_INTERNAL_URL') . '/api/w/' . getenv('WM_WORKSPACE') . '/variables/get_value/${path}');
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Authorization: Bearer ' . getenv('WM_TOKEN')));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$var = json_decode(curl_exec($ch));`);
          }
          sendUserToast(`${name} inserted at cursor`);
        },
        tooltip: "Variables are dynamic values that have a key associated to them and can be retrieved during the execution of a Script or Flow.",
        documentationLink: "https://www.windmill.dev/docs/core_concepts/variables_and_secrets",
        itemName: "Variable",
        extraField: "path",
        loadItems: loadVariables,
        buttons: {
          "Edit/View": (x) => variableEditor.editVariable(x)
        },
        this: variablePicker
      },
      {
        this: ($$value) => {
          variablePicker = $$value;
          $$settled = false;
        }
      },
      {
        submission: () => {
          return `<div slot="submission" class="flex flex-row">${validate_component(Button, "Button").$$render(
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
    )} ${validate_component(ItemPicker, "ItemPicker").$$render(
      $$result,
      {
        pickCallback: (path, _) => {
          if (!editor) return;
          if (lang == "deno") {
            if (!editor.getCode().includes("import * as wmill from")) {
              editor.insertAtBeginning(`import * as wmill from "npm:windmill-client@1"
`);
            }
            editor.insertAtCursor(`(await wmill.getResource('${path}'))`);
          } else if (lang === "bun" || lang === "bunnative") {
            const code = editor.getCode();
            if (!code.includes(`import * as wmill from`)) {
              editor.insertAtBeginning(`import * as wmill from "windmill-client"
`);
            }
            editor.insertAtCursor(`(await wmill.getResource('${path}'))`);
          } else if (lang == "python3") {
            if (!editor.getCode().includes("import wmill")) {
              editor.insertAtBeginning("import wmill\n");
            }
            editor.insertAtCursor(`wmill.get_resource("${path}")`);
          } else if (lang == "go") {
            if (!editor.getCode().includes('wmill "github.com/windmill-labs/windmill-go-client"')) {
              editor.insertAtLine('import wmill "github.com/windmill-labs/windmill-go-client"\n\n', 3);
            }
            editor.insertAtCursor(`r, _ := wmill.GetResource("${path}")`);
          } else if (lang == "bash") {
            editor.insertAtCursor(`curl -s -H "Authorization: Bearer $WM_TOKEN" \\
  "$BASE_INTERNAL_URL/api/w/$WM_WORKSPACE/resources/get_value_interpolated/${path}" | jq`);
          } else if (lang == "powershell") {
            editor.insertAtCursor(`$Headers = @{
"Authorization" = "Bearer $Env:WM_TOKEN"`);
            editor.arrowDown();
            editor.insertAtCursor(`
Invoke-RestMethod -Headers $Headers -Uri "$Env:BASE_INTERNAL_URL/api/w/$Env:WM_WORKSPACE/resources/get_value_interpolated/${path}"`);
          } else if (lang == "nativets") {
            const code = editor.getCode();
            if (!code.includes(`import * as wmill from`)) {
              editor.insertAtBeginning(`import * as wmill from "./windmill.ts"
`);
            }
            editor.insertAtCursor(`(await wmill.getResource('${path}'))`);
          } else if (lang == "php") {
            editor.insertAtCursor(`$ch = curl_init(getenv('BASE_INTERNAL_URL') . '/api/w/' . getenv('WM_WORKSPACE') . '/resources/get_value_interpolated/${path}');
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Authorization: Bearer ' . getenv('WM_TOKEN')));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$res = json_decode(curl_exec($ch));`);
          }
          sendUserToast(`${path} inserted at cursor`);
        },
        tooltip: "Resources represent connections to third party systems. Resources are a good way to define a connection to a frequently used third party system such as a database.",
        documentationLink: "https://www.windmill.dev/docs/core_concepts/resources_and_types",
        itemName: "Resource",
        buttons: {
          "Edit/View": (x) => resourceEditor.initEdit(x)
        },
        extraField: "description",
        extraField2: "resource_type",
        loadItems: async () => await ResourceService.listResource({ workspace: $workspaceStore ?? "NO_W" }),
        this: resourcePicker
      },
      {
        this: ($$value) => {
          resourcePicker = $$value;
          $$settled = false;
        }
      },
      {
        submission: () => {
          return `<div slot="submission" class="flex flex-row gap-x-1 mr-2">${validate_component(Button, "Button").$$render(
            $$result,
            {
              startIcon: { icon: Plus },
              target: "_blank",
              variant: "border",
              color: "blue",
              size: "sm",
              href: base + "/resources?connect_app=undefined"
            },
            {},
            {
              default: () => {
                return `Add Resource`;
              }
            }
          )}</div>`;
        }
      }
    )} ${showResourceTypePicker ? `${validate_component(ItemPicker, "ItemPicker").$$render(
      $$result,
      {
        pickCallback: async (_, name) => {
          resourceTypePickCallback(name);
        },
        tooltip: "Resources Types are the schemas associated with a Resource. They define the structure of the data that is returned from a Resource.",
        documentationLink: "https://www.windmill.dev/docs/core_concepts/resources_and_types",
        itemName: "Resource Type",
        extraField: "name",
        loadItems: async () => await ResourceService.listResourceType({ workspace: $workspaceStore ?? "NO_W" }),
        this: resourceTypePicker
      },
      {
        this: ($$value) => {
          resourceTypePicker = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${validate_component(ResourceEditorDrawer, "ResourceEditorDrawer").$$render(
      $$result,
      { this: resourceEditor },
      {
        this: ($$value) => {
          resourceEditor = $$value;
          $$settled = false;
        }
      },
      {}
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
    )} <div class="flex justify-between items-center overflow-y-auto w-full p-0.5"><div class="flex items-center"><div${add_attribute(
      "title",
      validCode ? "Main function parsable" : "Main function not parsable",
      0
    )} class="${"rounded-full w-2 h-2 mx-2 " + escape(validCode ? "bg-green-300" : "bg-red-300", true)}"></div> <div class="flex items-center gap-0.5">${showContextVarPicker ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        title: "Add context variable",
        color: "light",
        size: "xs",
        btnClasses: "!font-medium text-tertiary",
        spacingSize: "md",
        startIcon: { icon: Dollar_sign },
        iconOnly
      },
      {},
      {
        default: () => {
          return `+Context Var`;
        }
      }
    )}` : ``} ${showVarPicker ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        title: "Add variable",
        color: "light",
        btnClasses: "!font-medium text-tertiary",
        size: "xs",
        spacingSize: "md",
        startIcon: { icon: Dollar_sign },
        iconOnly
      },
      {},
      {
        default: () => {
          return `+Variable`;
        }
      }
    )}` : ``} ${showResourcePicker ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        title: "Add resource",
        btnClasses: "!font-medium text-tertiary",
        size: "xs",
        spacingSize: "md",
        color: "light",
        iconOnly,
        startIcon: { icon: Package }
      },
      {},
      {
        default: () => {
          return `+Resource`;
        }
      }
    )}` : ``} ${showResourceTypePicker ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        title: "Add resource type",
        btnClasses: "!font-medium text-tertiary",
        size: "xs",
        spacingSize: "md",
        color: "light",
        iconOnly,
        startIcon: { icon: Package }
      },
      {},
      {
        default: () => {
          return `+Type`;
        }
      }
    )}` : ``} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        title: "Reset Content",
        btnClasses: "!font-medium text-tertiary",
        size: "xs",
        spacingSize: "md",
        color: "light",
        iconOnly,
        startIcon: { icon: Rotate_cw }
      },
      {},
      {
        default: () => {
          return `Reset`;
        }
      }
    )} ${lang == "deno" || lang == "python3" || lang == "go" || lang == "bash" ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        btnClasses: "!font-medium text-tertiary",
        size: "xs",
        spacingSize: "md",
        color: "light",
        startIcon: {
          icon: Rotate_cw,
          classes: websocketAlive[lang] == false ? "animate-spin" : ""
        },
        title: "Reload assistants"
      },
      {},
      {
        default: () => {
          return `${!iconOnly ? `Assistants` : ``} <span class="-my-1">${lang == "deno" ? `(<span class="${escape(null_to_empty(websocketAlive.deno ? "green" : "text-red-700"), true) + " svelte-ttfb2q"}">Deno</span>)` : `${lang == "go" ? `(<span class="${escape(null_to_empty(websocketAlive.go ? "green" : "text-red-700"), true) + " svelte-ttfb2q"}">Go</span>)` : `${lang == "python3" ? `(<span class="${escape(null_to_empty(websocketAlive.pyright ? "green" : "text-red-700"), true) + " svelte-ttfb2q"}">Pyright</span> <span class="${escape(null_to_empty(websocketAlive.ruff ? "green" : "text-red-700"), true) + " svelte-ttfb2q"}">Ruff</span>)` : `${lang == "bash" ? `(<span class="${escape(null_to_empty(websocketAlive.shellcheck ? "green" : "text-red-700"), true) + " svelte-ttfb2q"}">Shellcheck</span>)` : ``}`}`}`}</span>`;
        }
      }
    )}` : ``} ${collabMode ? `<div class="flex items-center px-3">${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        options: { right: "" },
        size: "xs",
        checked: collabLive
      },
      {},
      {}
    )} ${validate_component(Popover, "Popover").$$render($$result, {}, {}, {
      text: () => {
        return `Multiplayer`;
      },
      default: () => {
        return `${validate_component(Users, "Users").$$render($$result, { class: "ml-1 text-tertiary", size: 14 }, {}, {})}`;
      }
    })} ${collabLive ? `<button title="Show invite link" class="p-1 rounded hover:bg-gray-400 mx-1 border">${validate_component(Link, "Link").$$render($$result, { size: 14 }, {}, {})}</button> <div class="isolate flex -space-x-2 pl-2">${each(collabUsers, (user) => {
      return `<span class="inline-flex h-6 w-6 items-center justify-center rounded-full ring-2 ring-white bg-gray-600"${add_attribute("title", user.name, 0)}><span class="text-sm font-medium leading-none text-white">${escape(user.name.substring(0, 2).toLocaleUpperCase())}</span> </span>`;
    })}</div>` : ``}</div>` : ``} ${validate_component(FormatOnSave, "FormatOnSave").$$render($$result, {}, {}, {})} ${validate_component(ScriptGen, "ScriptGen").$$render($$result, { editor, diffEditor, lang, iconOnly, args }, {}, {})} ${validate_component(CodeCompletionStatus, "CodeCompletionStatus").$$render($$result, {}, {}, {})}</div></div> <div class="flex flex-row items-center gap-2">${scriptPath && !noHistory ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        btnClasses: "!font-medium text-tertiary",
        size: "xs",
        spacingSize: "md",
        color: "light",
        iconOnly,
        startIcon: { icon: History },
        title: "See history"
      },
      {},
      {
        default: () => {
          return `History`;
        }
      }
    )}` : ``} ${`${validate_component(Button, "Button").$$render(
      $$result,
      {
        btnClasses: "!font-medium text-tertiary",
        size: "xs",
        spacingSize: "md",
        color: "light",
        iconOnly,
        startIcon: { icon: Library },
        title: "Explore other scripts"
      },
      {},
      {
        default: () => {
          return `Library`;
        }
      }
    )}`} ${saveToWorkspace ? `${validate_component(Button, "Button").$$render(
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
    )}` : ``}</div> </div>`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const DefaultScriptsInner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let langs;
  let $defaultScripts, $$unsubscribe_defaultScripts;
  let $$unsubscribe_workspaceStore;
  $$unsubscribe_defaultScripts = subscribe(defaultScripts, (value) => $defaultScripts = value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  function computeLangs(defaultScripts2) {
    const allLangs = Object.keys(defaultScriptLanguages);
    if (!defaultScripts2 || defaultScripts2.order == void 0) return allLangs;
    return defaultScripts2.order?.concat(allLangs.filter((l) => !defaultScripts2.order?.includes(l))).filter((x) => x != "nativets");
  }
  langs = computeLangs($defaultScripts);
  $$unsubscribe_defaultScripts();
  $$unsubscribe_workspaceStore();
  return `${validate_component(Alert, "Alert").$$render(
    $$result,
    {
      title: "Global to workspace",
      type: "info",
      class: "mb-4"
    },
    {},
    {
      default: () => {
        return `This setting is only available to admins and will affect all users in the workspace.`;
      }
    }
  )} <div class="h-full w-full flex-col gap-2 flex">${each(langs, (lang, i) => {
    return `<div class="w-full p-2 rounded border border-seconadry grid grid-cols-3"><h3>${escape(lang)}</h3> <div>${i > 0 ? `<button class="text-lg mr-2" data-svelte-h="svelte-1waoozr">↑</button>` : ``} ${i < langs.length - 1 ? `<button class="text-lg mr-2" data-svelte-h="svelte-ad03qd">↓</button> ` : ``}</div>  <div class="flex justify-end">${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        options: { right: "hide" },
        size: "xs",
        color: "red",
        checked: $defaultScripts?.hidden?.includes(lang)
      },
      {},
      {}
    )}</div> </div>`;
  })}</div>`;
});
const DefaultScripts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let drawer;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$userStore?.is_admin || $userStore?.is_super_admin ? `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { placement: "left", this: drawer },
      {
        this: ($$value) => {
          drawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Edit Default Scripts" }, {}, {
            default: () => {
              return `${validate_component(DefaultScriptsInner, "DefaultScriptsInner").$$render($$result, {}, {}, {})}`;
            }
          })}`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        startIcon: { icon: Settings },
        color: "light",
        size: "xs2",
        btnClasses: "!text-tertiary",
        variant: "contained"
      },
      {},
      {
        default: () => {
          return `defaults`;
        }
      }
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_userStore();
  return $$rendered;
});
export {
  Check_circle as C,
  DefaultScripts as D,
  EditorBar as E,
  Paintbrush as P,
  ScriptFix as S,
  ToggleHubWorkspace as T,
  WorkspaceScriptPicker as W,
  EDITOR_BAR_WIDTH_THRESHOLD as a,
  ScriptGen as b
};
