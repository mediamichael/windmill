import { c as create_ssr_component, v as validate_component, s as subscribe } from "./ssr.js";
import { T as Tooltip } from "./Tooltip.js";
import "yaml";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import { B as Button } from "./toast.js";
import "minimatch";
/* empty css                                     */
import "./common.js";
import { w as workspaceStore } from "./stores2.js";
import { I as Icon } from "./Icon.js";
import { B as Bell_off } from "./PanelSection.js";
const Bell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
      }
    ],
    ["path", { "d": "M10.3 21a1.94 1.94 0 0 0 3.4 0" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "bell" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ErrorHandlerToggleButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  let { kind } = $$props;
  let { scriptOrFlowPath } = $$props;
  let { errorHandlerMuted } = $$props;
  let { iconOnly = true } = $$props;
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0) $$bindings.kind(kind);
  if ($$props.scriptOrFlowPath === void 0 && $$bindings.scriptOrFlowPath && scriptOrFlowPath !== void 0) $$bindings.scriptOrFlowPath(scriptOrFlowPath);
  if ($$props.errorHandlerMuted === void 0 && $$bindings.errorHandlerMuted && errorHandlerMuted !== void 0) $$bindings.errorHandlerMuted(errorHandlerMuted);
  if ($$props.iconOnly === void 0 && $$bindings.iconOnly && iconOnly !== void 0) $$bindings.iconOnly(iconOnly);
  $$unsubscribe_workspaceStore();
  return `${validate_component(Button, "Button").$$render(
    $$result,
    {
      title: errorHandlerMuted === void 0 || !errorHandlerMuted ? "Disable workspace error handler for this script" : "Enable workspace error handler for this script",
      size: "xs",
      color: "light",
      startIcon: {
        icon: errorHandlerMuted === void 0 || !errorHandlerMuted ? Bell : Bell_off
      },
      iconOnly
    },
    {},
    {
      default: () => {
        return `${errorHandlerMuted === void 0 || !errorHandlerMuted ? `<div class="flex flex-row items-center">${!iconOnly ? `Mute` : ``}</div>` : `<div class="flex flex-row items-center">${!iconOnly ? `Unmute` : ``}</div>`} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `Disable workspace error handler, EE only`;
          }
        })}`;
      }
    }
  )}`;
});
export {
  ErrorHandlerToggleButton as E
};
