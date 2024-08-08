import { c as create_ssr_component, s as subscribe, d as createEventDispatcher, v as validate_component, f as each, b as add_attribute } from "./ssr.js";
import { F as FlowService, c as ScriptService, A as AppService } from "./services.gen.js";
import { w as workspaceStore } from "./stores2.js";
import { b as base } from "./base.js";
import { S as Select, a as SELECT_INPUT_DEFAULT_STYLE } from "./LightweightSchemaForm.js";
import "./scripts.js";
import "./index2.js";
import { B as Button, p as truncate } from "./toast.js";
import { D as Drawer, a as DrawerContent } from "./DrawerContent.js";
import "./common.js";
import { H as HighlightCode, a as FlowPathViewer } from "./FlowGraphViewerStep.js";
import { T as ToggleButtonGroup, a as ToggleButton } from "./ToggleButtonGroup.js";
import { F as FlowIcon } from "./FlowIcon.js";
import { D as DarkModeObserver } from "./DarkModeObserver.js";
import { R as Refresh_cw } from "./refresh-cw.js";
import { E as External_link } from "./Popover.js";
import { P as Pen } from "./pen.js";
import { C as Code } from "./util.js";
import { C as Code_2 } from "./code-2.js";
const ScriptPicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { initialPath = void 0 } = $$props;
  let { scriptPath = void 0 } = $$props;
  let { allowFlow = false } = $$props;
  let { itemKind = "script" } = $$props;
  let { kinds = ["script"] } = $$props;
  let { disabled = false } = $$props;
  let { allowRefresh = false } = $$props;
  let items = [];
  let drawerViewer;
  let drawerFlowViewer;
  let code = "";
  let lang;
  let options = [["Script", "script", Code_2, void 0]];
  allowFlow && options.push(["Flow", "flow", FlowIcon, "#14b8a6"]);
  createEventDispatcher();
  async function loadItems() {
    if (itemKind == "flow") {
      items = (await FlowService.listFlows({ workspace: $workspaceStore })).map((flow) => ({
        value: flow.path,
        label: `${flow.path}${flow.summary ? ` | ${truncate(flow.summary, 20)}` : ""}`
      }));
    } else if (itemKind == "script") {
      items = (await ScriptService.listScripts({
        workspace: $workspaceStore,
        kinds: kinds.join(",")
      })).map((script) => ({
        value: script.path,
        label: `${script.path}${script.summary ? ` | ${truncate(script.summary, 20)}` : ""}`
      }));
    } else if (itemKind == "app") {
      items = (await AppService.listApps({ workspace: $workspaceStore })).map((app) => ({
        value: app.path,
        label: `${app.path}${app.summary ? ` | ${truncate(app.summary, 20)}` : ""}`
      }));
    }
  }
  let darkMode = false;
  if ($$props.initialPath === void 0 && $$bindings.initialPath && initialPath !== void 0) $$bindings.initialPath(initialPath);
  if ($$props.scriptPath === void 0 && $$bindings.scriptPath && scriptPath !== void 0) $$bindings.scriptPath(scriptPath);
  if ($$props.allowFlow === void 0 && $$bindings.allowFlow && allowFlow !== void 0) $$bindings.allowFlow(allowFlow);
  if ($$props.itemKind === void 0 && $$bindings.itemKind && itemKind !== void 0) $$bindings.itemKind(itemKind);
  if ($$props.kinds === void 0 && $$bindings.kinds && kinds !== void 0) $$bindings.kinds(kinds);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.allowRefresh === void 0 && $$bindings.allowRefresh && allowRefresh !== void 0) $$bindings.allowRefresh(allowRefresh);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    itemKind && $workspaceStore && loadItems();
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
    )} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "900px", this: drawerViewer },
      {
        this: ($$value) => {
          drawerViewer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Script " + scriptPath }, {}, {
            default: () => {
              return `${validate_component(HighlightCode, "HighlightCode").$$render($$result, { code, language: lang }, {}, {})}`;
            }
          })}`;
        }
      }
    )} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "900px", this: drawerFlowViewer },
      {
        this: ($$value) => {
          drawerFlowViewer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Flow " + scriptPath }, {}, {
            default: () => {
              return `${validate_component(FlowPathViewer, "FlowPathViewer").$$render($$result, { path: scriptPath ?? "" }, {}, {})}`;
            }
          })}`;
        }
      }
    )} <div class="flex flex-row items-center gap-4 w-full mt-2">${options.length > 1 ? `<div>${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
      $$result,
      { selected: itemKind },
      {
        selected: ($$value) => {
          itemKind = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(options, ([label, value, icon, selectedColor]) => {
            return `${validate_component(ToggleButton, "ToggleButton").$$render(
              $$result,
              {
                icon,
                disabled,
                value,
                label,
                selectedColor
              },
              {},
              {}
            )}`;
          })}`;
        }
      }
    )}</div>` : ``} ${disabled ? `<input type="text"${add_attribute("value", scriptPath ?? "", 0)} disabled>` : `${validate_component(Select, "Select").$$render(
      $$result,
      {
        value: items?.find((x) => x.value == initialPath),
        class: "grow shrink max-w-full",
        items,
        placeholder: "Pick " + (itemKind === "app" ? "an" : "a") + " " + itemKind,
        inputStyles: SELECT_INPUT_DEFAULT_STYLE.inputStyles,
        containerStyles: darkMode ? SELECT_INPUT_DEFAULT_STYLE.containerStylesDark : SELECT_INPUT_DEFAULT_STYLE.containerStyles,
        portal: false,
        justValue: scriptPath
      },
      {
        justValue: ($$value) => {
          scriptPath = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${allowRefresh ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "border",
        color: "light",
        wrapperClasses: "self-stretch",
        startIcon: { icon: Refresh_cw },
        iconOnly: true
      },
      {},
      {}
    )}` : ``} ${scriptPath !== void 0 && scriptPath !== "" ? `${itemKind == "flow" ? `<div class="flex gap-2">${validate_component(Button, "Button").$$render(
      $$result,
      {
        endIcon: { icon: External_link },
        target: "_blank",
        color: "light",
        size: "xs",
        variant: "border",
        href: base + "/flows/edit/" + scriptPath
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
        color: "light",
        size: "xs",
        variant: "border"
      },
      {},
      {
        default: () => {
          return `View`;
        }
      }
    )}</div>` : `${itemKind == "app" ? `<div class="flex gap-2">${validate_component(Button, "Button").$$render(
      $$result,
      {
        startIcon: { icon: Pen },
        target: "_blank",
        color: "light",
        size: "xs",
        href: base + "/apps/edit/" + scriptPath,
        variant: "border"
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
        color: "light",
        size: "xs",
        variant: "border",
        target: "_blank",
        startIcon: { icon: Code },
        href: base + "/apps/get/" + scriptPath
      },
      {},
      {
        default: () => {
          return `View`;
        }
      }
    )}</div>` : `<div class="flex gap-2">${validate_component(Button, "Button").$$render(
      $$result,
      {
        startIcon: { icon: Pen },
        target: "_blank",
        color: "light",
        size: "xs",
        href: base + "/scripts/edit/" + scriptPath,
        variant: "border"
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
        color: "light",
        size: "xs",
        variant: "border",
        startIcon: { icon: Code }
      },
      {},
      {
        default: () => {
          return `View`;
        }
      }
    )}</div>`}`}` : ``}</div>`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
export {
  ScriptPicker as S
};
