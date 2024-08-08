import { c as create_ssr_component, v as validate_component, t as compute_rest_props, d as createEventDispatcher, e as escape, w as spread, y as escape_attribute_value, x as escape_object, s as subscribe, f as each, b as add_attribute } from "./ssr.js";
import { R as ResourceService, V as VariableService } from "./services.gen.js";
import { w as workspaceStore, f as copilotInfo } from "./stores2.js";
import "./index2.js";
import { twMerge } from "tailwind-merge";
import { B as Button, _ as computeKind, $ as shouldDisplayPlaceholder, b as emptyString, e as emptySchema, s as sendUserToast, N as generateRandomString } from "./toast.js";
/* empty css                                     */
import { P as Popup } from "./Popup.js";
import "./common.js";
import { c as ArgInput, d as SchemaFormDND, I as ItemPicker, e as Grip_vertical } from "./SchemaForm.js";
import { V as VariableEditor } from "./VariableEditor.js";
import { S as Splitpanes, P as Pane } from "./Pane.js";
import { A as Alert } from "./Alert.js";
import { L as Label } from "./Label.js";
import { T as Toggle } from "./Toggle.js";
import { S as SimpleEditor } from "./SimpleEditor.js";
import { I as IconedResourceType } from "./IconedResourceType.js";
import { T as Tooltip } from "./Tooltip.js";
import { B as Badge } from "./Badge.js";
import { X } from "./x.js";
import "yaml";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import "minimatch";
import { offset, flip, shift } from "@floating-ui/dom";
import { T as Tabs, a as Tab } from "./Tabs.js";
import { deepEqual } from "fast-equals";
import { T as TabContent } from "./TabContent.js";
import { d as LightweightArgInput } from "./LightweightSchemaForm.js";
import { D as Drawer, a as DrawerContent } from "./DrawerContent.js";
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
import { P as Plus } from "./plus.js";
import { T as Trash } from "./Section.js";
import { P as Pen } from "./pen.js";
import { T as ToggleButtonGroup, a as ToggleButton } from "./ToggleButtonGroup.js";
import { I as Icon } from "./Icon.js";
import { s as selectOptions } from "./components.js";
import { b as base } from "./base.js";
import "./lib.js";
import { autoPlacement } from "@floating-ui/core";
import { W as Wand_2 } from "./wand-2.js";
import { H as History } from "./history2.js";
import { E as External_link } from "./Popover.js";
const Trash_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M3 6h18" }],
    [
      "path",
      {
        "d": "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
      }
    ],
    [
      "path",
      {
        "d": "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
      }
    ],
    [
      "line",
      {
        "x1": "10",
        "x2": "10",
        "y1": "11",
        "y2": "17"
      }
    ],
    [
      "line",
      {
        "x1": "14",
        "x2": "14",
        "y1": "11",
        "y2": "17"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "trash-2" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ClearableInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["value", "placeholder", "type", "inputClass", "wrapperClass", "buttonClass"]);
  let { value = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { type = "text" } = $$props;
  let { inputClass = "" } = $$props;
  let { wrapperClass = "" } = $$props;
  let { buttonClass = "" } = $$props;
  const dispatch = createEventDispatcher();
  let isHovered = false;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.inputClass === void 0 && $$bindings.inputClass && inputClass !== void 0) $$bindings.inputClass(inputClass);
  if ($$props.wrapperClass === void 0 && $$bindings.wrapperClass && wrapperClass !== void 0) $$bindings.wrapperClass(wrapperClass);
  if ($$props.buttonClass === void 0 && $$bindings.buttonClass && buttonClass !== void 0) $$bindings.buttonClass(buttonClass);
  {
    if (value === void 0) value = "";
  }
  {
    dispatch("change", value);
  }
  return `<div class="${"relative grow " + escape(wrapperClass, true)}">${type === "textarea" ? `<textarea${spread(
    [
      {
        placeholder: escape_attribute_value(placeholder)
      },
      { rows: "1" },
      {
        class: "resize-y duration-200 " + escape(inputClass, true)
      },
      escape_object($$restProps)
    ],
    {}
  )}>${escape(value, false)}</textarea>` : `<input${spread(
    [
      { type: escape_attribute_value(type) },
      { value: escape_attribute_value(value) },
      {
        placeholder: escape_attribute_value(placeholder)
      },
      {
        class: "duration-200 " + escape((value ? "!pr-[26px] " : "") + inputClass, true)
      },
      escape_object($$restProps)
    ],
    {}
  )}>`} ${value && isHovered ? `<button class="${"absolute z-10 top-[9.5px] right-2 rounded-full p-0.5 text-white bg-gray-300 duration-200 hover:bg-gray-600 focus:bg-gray-600 " + escape(buttonClass, true)}" aria-label="Clear">${validate_component(X, "X").$$render($$result, { size: 11, class: "" }, {}, {})}</button>` : ``} ${slots.default ? slots.default({}) : ``}</div>`;
});
const ResourceTypePicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredResources;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value2) => $workspaceStore = value2);
  let { value } = $$props;
  let { notPickable = false } = $$props;
  let { nonePickable = false } = $$props;
  let resources = [];
  async function loadResources() {
    resources = await ResourceService.listResourceTypeNames({ workspace: $workspaceStore });
  }
  createEventDispatcher();
  let search = "";
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.notPickable === void 0 && $$bindings.notPickable && notPickable !== void 0) $$bindings.notPickable(notPickable);
  if ($$props.nonePickable === void 0 && $$bindings.nonePickable && nonePickable !== void 0) $$bindings.nonePickable(nonePickable);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if ($workspaceStore) {
        loadResources();
      }
    }
    filteredResources = resources.filter((r) => r.toLowerCase().includes(search.toLowerCase()));
    $$rendered = `${validate_component(Label, "Label").$$render(
      $$result,
      {
        label: "Resource type",
        class: "w-full col-span-2"
      },
      {},
      {
        action: () => {
          return `<div class="flex flex-row gap-1">${validate_component(Button, "Button").$$render(
            $$result,
            {
              size: "xs",
              color: "light",
              disabled: notPickable || value === void 0
            },
            {},
            {
              default: () => {
                return `Clear`;
              }
            }
          )} ${validate_component(Popup, "Popup").$$render(
            $$result,
            {
              floatingConfig: {
                strategy: "fixed",
                placement: "left-end",
                middleware: [offset(8), flip(), shift()]
              },
              containerClasses: "border rounded-lg shadow-lg bg-surface p-4 w-[500px] h-[500px] "
            },
            {},
            {
              button: () => {
                return `${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    nonCaptureEvent: true,
                    size: "xs",
                    color: "dark"
                  },
                  {},
                  {
                    default: () => {
                      return `Select resource type`;
                    }
                  }
                )} `;
              },
              default: ({ close }) => {
                return `<div class="flex flex-col gap-2 h-full">${validate_component(ClearableInput, "ClearableInput").$$render(
                  $$result,
                  {
                    placeholder: "Search resource...",
                    value: search
                  },
                  {
                    value: ($$value) => {
                      search = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )} <div class="overflow-y-scroll h-full"><div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-1 items-center overflow-x-hidden">${nonePickable && search === "" ? (() => {
                  let isPicked = value === void 0;
                  return ` ${validate_component(Button, "Button").$$render(
                    $$result,
                    {
                      size: "sm",
                      variant: "border",
                      color: isPicked ? "blue" : "dark",
                      btnClasses: isPicked ? "!border-2" : "m-[1px]",
                      disabled: notPickable
                    },
                    {},
                    {
                      default: () => {
                        return `None`;
                      }
                    }
                  )}`;
                })() : ``} ${each(filteredResources, (r) => {
                  let isPicked = value === r;
                  return ` ${validate_component(Button, "Button").$$render(
                    $$result,
                    {
                      size: "sm",
                      variant: "border",
                      color: isPicked ? "blue" : "light",
                      btnClasses: isPicked ? "!border-2" : "m-[1px]",
                      disabled: notPickable
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(IconedResourceType, "IconedResourceType").$$render(
                          $$result,
                          {
                            name: r,
                            after: true,
                            width: "20px",
                            height: "20px"
                          },
                          {},
                          {}
                        )} `;
                      }
                    }
                  )}`;
                })} ${filteredResources.length === 0 && search !== "" ? `<div class="text-tertiary text-sm" data-svelte-h="svelte-1wvru4h">No resources found</div>` : ``}</div></div></div>`;
              }
            }
          )}</div> `;
        },
        header: () => {
          return `${validate_component(Tooltip, "Tooltip").$$render($$result, { light: true, small: true }, {}, {
            default: () => {
              return `Select a resource type to narrow down the object type.`;
            }
          })} `;
        },
        default: () => {
          return `<div class="flex flex-row items-center w-full justify-between">${validate_component(Badge, "Badge").$$render($$result, { color: !value ? "gray" : "blue" }, {}, {
            default: () => {
              return `${escape(value ?? "None")}`;
            }
          })}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const ObjectTypeNarrowing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { format } = $$props;
  let resource = format?.startsWith("resource-") ? format.substring("resource-".length) : void 0;
  if ($$props.format === void 0 && $$bindings.format && format !== void 0) $$bindings.format(format);
  return `${validate_component(ResourceTypePicker, "ResourceTypePicker").$$render($$result, { value: resource, nonePickable: true }, {}, {})}`;
});
function getOneOfWithoutLabel(oneOf) {
  return oneOf.map((v) => ({
    ...v,
    properties: Object.fromEntries(Object.entries(v.properties ?? {}).filter(([k, v2]) => k !== "label"))
  }));
}
function getResourceTypesFromFormat(format) {
  if (format?.startsWith("resource-")) {
    return [format.split("-")[1]];
  }
  return [];
}
const FlowPropertyEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { format = void 0 } = $$props;
  let { contentEncoding = void 0 } = $$props;
  let { type = void 0 } = $$props;
  let { oneOf = void 0 } = $$props;
  let { required = false } = $$props;
  let { pattern = void 0 } = $$props;
  let { password = false } = $$props;
  let { variableEditor = void 0 } = $$props;
  let { itemPicker = void 0 } = $$props;
  let { nullable = false } = $$props;
  let { defaultValue = void 0 } = $$props;
  let { propsNames = [] } = $$props;
  let { showExpr = void 0 } = $$props;
  let { extra = {} } = $$props;
  let { customErrorMessage = void 0 } = $$props;
  let { itemsType = void 0 } = $$props;
  let { properties = {} } = $$props;
  let { order = [] } = $$props;
  let { requiredProperty = [] } = $$props;
  let { displayWebhookWarning = true } = $$props;
  let { lightweightMode = false } = $$props;
  let oneOfSelected = void 0;
  function oneOfUpdate(oneOf2) {
    if (oneOf2 && oneOf2.length >= 2) {
      if (!oneOfSelected) {
        oneOfSelected = oneOf2[0].title;
      }
      if (!schema.oneOf || !deepEqual(oneOf2.map((v) => [v.title, v.order]), schema.oneOf.map((v) => [v.title, v.order]))) {
        schema.oneOf = getOneOfWithoutLabel(oneOf2);
        schema = schema;
      }
    } else if (!oneOf2) {
      schema.oneOf = void 0;
      schema = schema;
    }
  }
  function orderUpdate(order2) {
    if (order2 && !deepEqual(order2, schema.order)) {
      schema.order = order2;
      schema = schema;
    }
  }
  const dispatch = createEventDispatcher();
  let schema = {
    properties,
    order,
    required: requiredProperty,
    oneOf: oneOf ? getOneOfWithoutLabel(oneOf) : void 0
  };
  function schemaUpdate(changedSchema) {
    if (!deepEqual(changedSchema, {
      properties,
      order,
      required: requiredProperty,
      oneOf: oneOf ? getOneOfWithoutLabel(oneOf) : void 0
    })) {
      properties = structuredClone(changedSchema.properties);
      order = structuredClone(changedSchema.order);
      requiredProperty = structuredClone(changedSchema.required);
      oneOf = changedSchema.oneOf?.map((v) => {
        return {
          ...v,
          properties: {
            ...v.properties,
            label: { type: "string", enum: [v.title ?? ""] }
          }
        };
      });
      dispatch("schemaChange", {
        properties,
        order,
        requiredProperty,
        oneOf
      });
    }
  }
  let variantName = "";
  let initialObjectSelected = Object.keys(schema?.properties ?? {}).length == 0 ? "resource" : "custom-object";
  if ($$props.format === void 0 && $$bindings.format && format !== void 0) $$bindings.format(format);
  if ($$props.contentEncoding === void 0 && $$bindings.contentEncoding && contentEncoding !== void 0) $$bindings.contentEncoding(contentEncoding);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.oneOf === void 0 && $$bindings.oneOf && oneOf !== void 0) $$bindings.oneOf(oneOf);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0) $$bindings.required(required);
  if ($$props.pattern === void 0 && $$bindings.pattern && pattern !== void 0) $$bindings.pattern(pattern);
  if ($$props.password === void 0 && $$bindings.password && password !== void 0) $$bindings.password(password);
  if ($$props.variableEditor === void 0 && $$bindings.variableEditor && variableEditor !== void 0) $$bindings.variableEditor(variableEditor);
  if ($$props.itemPicker === void 0 && $$bindings.itemPicker && itemPicker !== void 0) $$bindings.itemPicker(itemPicker);
  if ($$props.nullable === void 0 && $$bindings.nullable && nullable !== void 0) $$bindings.nullable(nullable);
  if ($$props.defaultValue === void 0 && $$bindings.defaultValue && defaultValue !== void 0) $$bindings.defaultValue(defaultValue);
  if ($$props.propsNames === void 0 && $$bindings.propsNames && propsNames !== void 0) $$bindings.propsNames(propsNames);
  if ($$props.showExpr === void 0 && $$bindings.showExpr && showExpr !== void 0) $$bindings.showExpr(showExpr);
  if ($$props.extra === void 0 && $$bindings.extra && extra !== void 0) $$bindings.extra(extra);
  if ($$props.customErrorMessage === void 0 && $$bindings.customErrorMessage && customErrorMessage !== void 0) $$bindings.customErrorMessage(customErrorMessage);
  if ($$props.itemsType === void 0 && $$bindings.itemsType && itemsType !== void 0) $$bindings.itemsType(itemsType);
  if ($$props.properties === void 0 && $$bindings.properties && properties !== void 0) $$bindings.properties(properties);
  if ($$props.order === void 0 && $$bindings.order && order !== void 0) $$bindings.order(order);
  if ($$props.requiredProperty === void 0 && $$bindings.requiredProperty && requiredProperty !== void 0) $$bindings.requiredProperty(requiredProperty);
  if ($$props.displayWebhookWarning === void 0 && $$bindings.displayWebhookWarning && displayWebhookWarning !== void 0) $$bindings.displayWebhookWarning(displayWebhookWarning);
  if ($$props.lightweightMode === void 0 && $$bindings.lightweightMode && lightweightMode !== void 0) $$bindings.lightweightMode(lightweightMode);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      oneOfUpdate(oneOf);
    }
    {
      orderUpdate(order);
    }
    {
      schemaUpdate(schema);
    }
    $$rendered = `<div class="flex flex-col gap-2">${type === "object" && schema.oneOf && schema.oneOf.length >= 2 ? `<div class="flex flex-row gap-2 items-center justify-start">${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
      $$result,
      { class: "w-auto", selected: oneOfSelected },
      {
        selected: ($$value) => {
          oneOfSelected = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(schema.oneOf, (obj) => {
            return `${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: obj.title, label: obj.title }, {}, {})}`;
          })}`;
        }
      }
    )} ${validate_component(Popup, "Popup").$$render(
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
              size: "xs2",
              color: "light",
              nonCaptureEvent: true,
              startIcon: { icon: Plus }
            },
            {},
            {}
          )} `;
        },
        default: ({ close }) => {
          return `${validate_component(Label, "Label").$$render($$result, { label: "Label" }, {}, {
            default: () => {
              return `<div class="flex flex-col gap-2"><input type="text" class="w-full !bg-surface"${add_attribute("value", variantName, 0)}> ${validate_component(Button, "Button").$$render(
                $$result,
                {
                  variant: "border",
                  color: "light",
                  size: "xs",
                  disabled: !variantName
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
        }
      }
    )}</div> <div class="flex flex-row gap-2 items-center"><span class="font-semibold text-sm">${escape(oneOfSelected)}</span> ${validate_component(Popup, "Popup").$$render(
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
              size: "xs2",
              color: "light",
              startIcon: { icon: Pen },
              propagateEvent: true,
              iconOnly: false
            },
            {},
            {}
          )} `;
        },
        default: ({ close }) => {
          return `${validate_component(Label, "Label").$$render($$result, { label: "Label" }, {}, {
            default: () => {
              return `<div class="flex flex-col gap-2"><input type="text" class="w-full !bg-surface"${add_attribute("value", variantName, 0)}> ${validate_component(Button, "Button").$$render(
                $$result,
                {
                  variant: "border",
                  color: "light",
                  size: "xs",
                  disabled: !variantName
                },
                {},
                {
                  default: () => {
                    return `Rename`;
                  }
                }
              )}</div>`;
            }
          })}`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs2",
        color: "red",
        startIcon: { icon: Trash_2 },
        iconOnly: true,
        disabled: schema.oneOf.length <= 2
      },
      {},
      {}
    )}</div> ${oneOfSelected && schema.oneOf ? (() => {
      let idx = schema.oneOf.findIndex((obj) => obj.title === oneOfSelected);
      return ` ${validate_component(EditableSchemaDrawer, "EditableSchemaDrawer").$$render(
        $$result,
        { schema: schema.oneOf[idx] },
        {
          schema: ($$value) => {
            schema.oneOf[idx] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })() : ``}` : `${type === "object" && format !== "resource-s3_object" ? `${validate_component(Tabs, "Tabs").$$render($$result, { selected: initialObjectSelected }, {}, {
      content: () => {
        return `<div class="pt-2">${validate_component(TabContent, "TabContent").$$render($$result, { value: "custom-object" }, {}, {
          default: () => {
            return `${validate_component(EditableSchemaDrawer, "EditableSchemaDrawer").$$render(
              $$result,
              { schema },
              {
                schema: ($$value) => {
                  schema = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
          }
        })} ${validate_component(TabContent, "TabContent").$$render($$result, { value: "resource" }, {}, {
          default: () => {
            return `${validate_component(ObjectTypeNarrowing, "ObjectTypeNarrowing").$$render(
              $$result,
              { format },
              {
                format: ($$value) => {
                  format = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
          }
        })}</div> `;
      },
      default: () => {
        return `${validate_component(Tab, "Tab").$$render($$result, { value: "resource" }, {}, {
          default: () => {
            return `Resource`;
          }
        })} ${validate_component(Tab, "Tab").$$render($$result, { value: "custom-object" }, {}, {
          default: () => {
            return `Custom Object`;
          }
        })}`;
      }
    })}` : ``}`} ${!(type === "object" && oneOf && oneOf.length >= 2) ? `${validate_component(Label, "Label").$$render($$result, { label: "Default" }, {}, {
      default: () => {
        return `${lightweightMode ? `${validate_component(LightweightArgInput, "LightweightArgInput").$$render(
          $$result,
          {
            type: password ? "string" : type,
            displayHeader: false,
            pattern,
            customErrorMessage,
            itemsType,
            contentEncoding,
            format,
            extra,
            value: defaultValue
          },
          {
            value: ($$value) => {
              defaultValue = $$value;
              $$settled = false;
            }
          },
          {}
        )}` : `${validate_component(ArgInput, "ArgInput").$$render(
          $$result,
          {
            itemPicker,
            resourceTypes: getResourceTypesFromFormat(format),
            type: password ? "string" : type,
            displayHeader: false,
            pattern,
            customErrorMessage,
            itemsType,
            contentEncoding,
            format,
            extra,
            nullable,
            variableEditor,
            compact: true,
            noMargin: true,
            value: defaultValue
          },
          {
            value: ($$value) => {
              defaultValue = $$value;
              $$settled = false;
            }
          },
          {}
        )}`}`;
      }
    })}` : ``} <div class="flex flex-row gap-2">${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        options: { right: "Required" },
        size: "xs",
        disabled: type === "boolean",
        checked: required
      },
      {},
      {}
    )} ${type === "string" ? `${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        options: {
          right: "Nullable",
          rightTooltip: "If enabled, the default value will be null and not an empty string."
        },
        lightMode: true,
        size: "xs",
        disabled: required,
        checked: nullable
      },
      {
        checked: ($$value) => {
          nullable = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</div> ${displayWebhookWarning && !(type === "object" && oneOf && oneOf.length >= 2) ? `${validate_component(Alert, "Alert").$$render(
      $$result,
      {
        type: "info",
        title: "Default not used by webhooks",
        size: "xs",
        collapsible: true
      },
      {},
      {
        default: () => {
          return `If this flow is triggered by a webhook, the default value will not replace a missing value
			from the payload. It will only be used as the default value in the autogenerated UI. We
			recommend using default values in the signature of the steps where this value is used (using
			\`x=default\`) to have the desired behavior.`;
        }
      }
    )}` : ``}</div> <div>${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        size: "xs",
        options: {
          right: "Show this field only when conditions are met"
        },
        checked: Boolean(showExpr)
      },
      {},
      {}
    )} ${showExpr != void 0 ? `<div class="border">${validate_component(SimpleEditor, "SimpleEditor").$$render(
      $$result,
      {
        extraLib: `declare const fields: Record<${propsNames?.filter((x) => x != name).map((x) => `"${x}"`).join(" | ")}, any>;
`,
        lang: "javascript",
        shouldBindKey: false,
        fixedOverflowWidgets: false,
        autoHeight: true,
        code: showExpr
      },
      {
        code: ($$value) => {
          showExpr = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="flex flex-row-reverse text-2xs text-tertiary" data-svelte-h="svelte-1t7i35m"><div>Other fields are available under <code>fields</code> (e.g:
				<code>fields.foo == 42</code>)</div></div>` : ``}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const ArrayTypeNarrowing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { canEditResourceType = false } = $$props;
  let { itemsType } = $$props;
  let selected = itemsType?.type != "string" ? itemsType?.type : Array.isArray(itemsType?.enum) ? "enum" : "string";
  let schema = {
    properties: itemsType?.properties || {},
    order: Object.keys(itemsType?.properties || {}),
    required: Object.values(itemsType?.properties || {}).map((p) => p.required)
  };
  if ($$props.canEditResourceType === void 0 && $$bindings.canEditResourceType && canEditResourceType !== void 0) $$bindings.canEditResourceType(canEditResourceType);
  if ($$props.itemsType === void 0 && $$bindings.itemsType && itemsType !== void 0) $$bindings.itemsType(itemsType);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${canEditResourceType ? `${validate_component(Label, "Label").$$render($$result, { label: "Items type" }, {}, {
      default: () => {
        return `<select id="array-type-narrowing"><option value="string" data-svelte-h="svelte-4gu6e5">Items are strings</option><option value="enum" data-svelte-h="svelte-6x3s21">Items are strings from an enum</option><option value="object" data-svelte-h="svelte-arnwgu">Items are objects (JSON)</option><option value="resource" data-svelte-h="svelte-1ycwtoj">Items are resources</option><option value="number" data-svelte-h="svelte-10yjxvr">Items are numbers</option><option value="bytes" data-svelte-h="svelte-u2dle">Items are bytes</option></select>`;
      }
    })}` : `${itemsType?.resourceType ? `${validate_component(Label, "Label").$$render($$result, { label: "Resource type" }, {}, {
      default: () => {
        return `${validate_component(Badge, "Badge").$$render($$result, { color: "blue" }, {}, {
          default: () => {
            return `${escape(itemsType?.resourceType)}`;
          }
        })}`;
      }
    })}` : ``}`} ${itemsType?.type === "resource" ? `${validate_component(Alert, "Alert").$$render(
      $$result,
      {
        type: "warning",
        title: "Value",
        size: "xs",
        tooltip: "Learn how to use the SDK to get the resource by using the path.",
        documentationLink: "https://www.windmill.dev/docs/code_editor/add_variables_resources#fetching-them-from-within-a-script-by-using-the-wmill-client-in-the-respective-language"
      },
      {},
      {
        default: () => {
          return `The value passed is the path of the resource, not the resource itself. You can use the SDK to
		get the resource by using the path.`;
        }
      }
    )}` : ``} ${canEditResourceType && itemsType?.type == "resource" ? `${validate_component(ResourceTypePicker, "ResourceTypePicker").$$render(
      $$result,
      { value: itemsType.resourceType },
      {
        value: ($$value) => {
          itemsType.resourceType = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${Array.isArray(itemsType?.enum) ? `<label for="input" class="text-secondary text-xs">Enums
		<div class="flex flex-col gap-1">${each(itemsType?.enum || [], (e) => {
      return `<div class="flex flex-row max-w-md gap-1 items-center"><input id="input" type="text"${add_attribute("value", e, 0)}> <div><button class="rounded-full p-1 bg-surface-secondary duration-200 hover:bg-surface-hover ml-2">${validate_component(X, "X").$$render($$result, { size: 14 }, {}, {})} </button></div> </div>`;
    })}</div> <div class="flex flex-row mb-1 mt-2">${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "light",
        variant: "border",
        size: "sm"
      },
      {},
      {
        default: () => {
          return `${validate_component(Plus, "Plus").$$render($$result, { size: 14 }, {}, {})}`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "light",
        variant: "border",
        size: "sm",
        btnClasses: "ml-2"
      },
      {},
      {
        default: () => {
          return `Clear`;
        }
      }
    )}</div></label>` : ``} ${selected === "object" ? `${validate_component(EditableSchemaDrawer, "EditableSchemaDrawer").$$render(
      $$result,
      { schema },
      {
        schema: ($$value) => {
          schema = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const NumberTypeNarrowing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { min } = $$props;
  let { max } = $$props;
  let { currency } = $$props;
  let { currencyLocale } = $$props;
  let minChecked = min != void 0;
  let maxChecked = max != void 0;
  if ($$props.min === void 0 && $$bindings.min && min !== void 0) $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0) $$bindings.max(max);
  if ($$props.currency === void 0 && $$bindings.currency && currency !== void 0) $$bindings.currency(currency);
  if ($$props.currencyLocale === void 0 && $$bindings.currencyLocale && currencyLocale !== void 0) $$bindings.currencyLocale(currencyLocale);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="flex flex-col gap-2"><div class="grid grid-cols-2 gap-4">${validate_component(Label, "Label").$$render($$result, { label: "Min", class: "w-full col-span-1" }, {}, {
      action: () => {
        return `${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            options: { right: "Enabled" },
            size: "xs",
            checked: minChecked
          },
          {
            checked: ($$value) => {
              minChecked = $$value;
              $$settled = false;
            }
          },
          {}
        )} `;
      },
      header: () => {
        return `${validate_component(Tooltip, "Tooltip").$$render($$result, { light: true, small: true }, {}, {
          default: () => {
            return `Set a minimum value for the number. If both min and max are set, the input will render as
					a range slider.`;
          }
        })} `;
      },
      default: () => {
        return `<input type="number" ${!minChecked ? "disabled" : ""}${add_attribute("value", min, 0)}>`;
      }
    })} ${validate_component(Label, "Label").$$render(
      $$result,
      {
        label: "Max",
        class: "w-full col-span-1 "
      },
      {},
      {
        action: () => {
          return `${validate_component(Toggle, "Toggle").$$render(
            $$result,
            {
              options: { right: "Enabled" },
              size: "xs",
              checked: maxChecked
            },
            {
              checked: ($$value) => {
                maxChecked = $$value;
                $$settled = false;
              }
            },
            {}
          )} `;
        },
        header: () => {
          return `${validate_component(Tooltip, "Tooltip").$$render($$result, { light: true, small: true }, {}, {
            default: () => {
              return `Set a maximum value for the number. If both min and max are set, the input will render as
					a range slider.`;
            }
          })} `;
        },
        default: () => {
          return `<input type="number" ${!maxChecked ? "disabled" : ""}${add_attribute("value", max, 0)}>`;
        }
      }
    )}</div> <div class="grid grid-cols-3 gap-4">${validate_component(Label, "Label").$$render(
      $$result,
      {
        label: "Currency",
        class: "w-full col-span-2"
      },
      {},
      {
        header: () => {
          return `${validate_component(Tooltip, "Tooltip").$$render($$result, { light: true, small: true }, {}, {
            default: () => {
              return `Select a currency to display the number in. If a currency is selected, you can also select
					a locale to format the number according to that locale.`;
            }
          })} `;
        },
        default: () => {
          return `<select><option${add_attribute("value", void 0, 0)}>No currency </option>${each(selectOptions.currencyOptions, (c) => {
            return `<option${add_attribute("value", c, 0)}>${escape(c)}</option>`;
          })}</select>`;
        }
      }
    )} ${validate_component(Label, "Label").$$render(
      $$result,
      {
        label: "Currency locale",
        class: "w-full"
      },
      {},
      {
        default: () => {
          return `<select ${!currency ? "disabled" : ""}><option${add_attribute("value", void 0, 0)}>No locale </option>${each(selectOptions.localeOptions, (c) => {
            return `<option${add_attribute("value", c, 0)}>${escape(c)}</option>`;
          })}</select>`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
function getPromptsRegex() {
  try {
    return localStorage.getItem("prompts-regex") ?? void 0;
  } catch (e) {
    console.error("error interacting with local storage", e);
  }
  return void 0;
}
const RegexGen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $copilotInfo, $$unsubscribe_copilotInfo;
  $$unsubscribe_copilotInfo = subscribe(copilotInfo, (value) => $copilotInfo = value);
  let funcDesc = "";
  let genLoading = false;
  let input;
  createEventDispatcher();
  let promptHistory = JSON.parse(getPromptsRegex() || "[]");
  $$unsubscribe_copilotInfo();
  return `${validate_component(Popup, "Popup").$$render(
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
            title: "Generate regexes from prompt",
            btnClasses: "text-violet-800 dark:text-violet-400 bg-violet-100 dark:bg-gray-700",
            size: "sm",
            color: "light",
            spacingSize: "md",
            startIcon: { icon: Wand_2 },
            loading: genLoading,
            propagateEvent: true,
            clickableWhileLoading: true
          },
          {},
          {}
        )} `;
      },
      default: ({ close }) => {
        return `<div class="block text-primary z-[2000]">${$copilotInfo.exists_openai_resource_path ? `<div class="flex flex-col gap-4"><div class="flex w-96"><input type="text"${add_attribute("placeholder", "Describe what the regex should do", 0)}${add_attribute("this", input, 0)}${add_attribute("value", funcDesc, 0)}> ${validate_component(Button, "Button").$$render(
          $$result,
          {
            size: "xs",
            color: "light",
            buttonType: "button",
            btnClasses: "!ml-2 text-violet-800 dark:text-violet-400 bg-violet-100 dark:bg-gray-700",
            "aria-label": "Generate",
            disabled: funcDesc.length <= 0,
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
        })} <button class="underline text-xs text-start px-2 text-secondary font-normal" data-svelte-h="svelte-1lkso4c">clear history</button></div>` : ``}</div>` : `<p class="text-sm">Enable Windmill AI in the <a href="${escape(base, true) + "/workspace_settings?tab=openai"}" target="_blank" class="inline-flex flex-row items-center gap-1">workspace settings ${validate_component(External_link, "ExternalLink").$$render($$result, { size: 16 }, {}, {})}</a></p>`}</div>`;
      }
    }
  )}`;
});
const StringTypeNarrowing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pattern } = $$props;
  let { enum_ } = $$props;
  let { format } = $$props;
  let { contentEncoding } = $$props;
  let { customErrorMessage } = $$props;
  let { minRows = void 0 } = $$props;
  let { disableCreate = false } = $$props;
  let { disableVariablePicker = false } = $$props;
  let { password = false } = $$props;
  let { noExtra = false } = $$props;
  let { dateFormat } = $$props;
  let { enumLabels = void 0 } = $$props;
  let { overrideAllowKindChange = true } = $$props;
  let { originalType = void 0 } = $$props;
  let kind = computeKind(enum_, contentEncoding, pattern, format);
  const allowKindChange = overrideAllowKindChange || originalType === "string";
  let patternStr = pattern ?? "";
  let resource;
  const FORMATS = [
    "email",
    "hostname",
    "uri",
    "uuid",
    "ipv4",
    "yaml",
    "sql",
    // 'time',
    "date-time",
    "date"
  ];
  const FIELD_SETTINGS = [
    ["None", "none"],
    ["File", "base64", "Encoded as Base 64"],
    ["Enum", "enum"],
    ["Datetime", "date-time"],
    ["Format", "format"],
    ["Pattern", "pattern"]
  ];
  const presetOptions = [
    {
      label: "ISO Format",
      format: "yyyy-MM-dd"
    },
    { label: "US Format", format: "MM/dd/yyyy" },
    { label: "EU Format", format: "dd/MM/yyyy" }
  ];
  if ($$props.pattern === void 0 && $$bindings.pattern && pattern !== void 0) $$bindings.pattern(pattern);
  if ($$props.enum_ === void 0 && $$bindings.enum_ && enum_ !== void 0) $$bindings.enum_(enum_);
  if ($$props.format === void 0 && $$bindings.format && format !== void 0) $$bindings.format(format);
  if ($$props.contentEncoding === void 0 && $$bindings.contentEncoding && contentEncoding !== void 0) $$bindings.contentEncoding(contentEncoding);
  if ($$props.customErrorMessage === void 0 && $$bindings.customErrorMessage && customErrorMessage !== void 0) $$bindings.customErrorMessage(customErrorMessage);
  if ($$props.minRows === void 0 && $$bindings.minRows && minRows !== void 0) $$bindings.minRows(minRows);
  if ($$props.disableCreate === void 0 && $$bindings.disableCreate && disableCreate !== void 0) $$bindings.disableCreate(disableCreate);
  if ($$props.disableVariablePicker === void 0 && $$bindings.disableVariablePicker && disableVariablePicker !== void 0) $$bindings.disableVariablePicker(disableVariablePicker);
  if ($$props.password === void 0 && $$bindings.password && password !== void 0) $$bindings.password(password);
  if ($$props.noExtra === void 0 && $$bindings.noExtra && noExtra !== void 0) $$bindings.noExtra(noExtra);
  if ($$props.dateFormat === void 0 && $$bindings.dateFormat && dateFormat !== void 0) $$bindings.dateFormat(dateFormat);
  if ($$props.enumLabels === void 0 && $$bindings.enumLabels && enumLabels !== void 0) $$bindings.enumLabels(enumLabels);
  if ($$props.overrideAllowKindChange === void 0 && $$bindings.overrideAllowKindChange && overrideAllowKindChange !== void 0) $$bindings.overrideAllowKindChange(overrideAllowKindChange);
  if ($$props.originalType === void 0 && $$bindings.originalType && originalType !== void 0) $$bindings.originalType(originalType);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    format = kind == "resource" ? resource != void 0 ? `resource-${resource}` : "resource" : format;
    pattern = patternStr == "" ? void 0 : patternStr;
    contentEncoding = kind == "base64" ? "base64" : void 0;
    {
      {
        if (format == "email") {
          pattern = "^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$";
        }
      }
    }
    $$rendered = `<div class="flex flex-col gap-2">${allowKindChange ? `${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
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
          return `${each(FIELD_SETTINGS, (x) => {
            return `${validate_component(ToggleButton, "ToggleButton").$$render(
              $$result,
              {
                value: x[1],
                label: x[0],
                tooltip: x[2],
                showTooltipIcon: Boolean(x[2])
              },
              {},
              {}
            )}`;
          })}`;
        }
      }
    )}` : ``} ${kind == "pattern" ? `${validate_component(Label, "Label").$$render($$result, { label: "Pattern (Regex)" }, {}, {
      header: () => {
        return `${validate_component(Tooltip, "Tooltip").$$render($$result, { light: true }, {}, {
          default: () => {
            return `Setting a pattern will allow you to specify a regular expression that the input should
					adhere to. You can use the regex generator to help you create a pattern.`;
          }
        })} `;
      },
      default: () => {
        return `<div class="flex flex-row gap-1">${validate_component(ClearableInput, "ClearableInput").$$render(
          $$result,
          {
            id: "input",
            type: "text",
            placeholder: "^(\\\\([0-9]3\\\\))?[0-9]3-[0-9]4$",
            value: patternStr
          },
          {
            value: ($$value) => {
              patternStr = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(RegexGen, "RegexGen").$$render($$result, {}, {}, {})}</div>`;
      }
    })} ${validate_component(Label, "Label").$$render(
      $$result,
      {
        label: "Custom error message",
        class: "w-full"
      },
      {},
      {
        action: () => {
          return `${validate_component(Toggle, "Toggle").$$render(
            $$result,
            {
              size: "xs",
              options: { right: "Enable" },
              checked: customErrorMessage != void 0 && customErrorMessage != ""
            },
            {},
            {}
          )} `;
        },
        header: () => {
          return `${validate_component(Tooltip, "Tooltip").$$render($$result, { light: true }, {}, {
            default: () => {
              return `Setting a custom error message will allow you to specify a message that will be shown when
					the input does not match the pattern.`;
            }
          })} `;
        },
        default: () => {
          return `<input type="text" ${customErrorMessage == void 0 || customErrorMessage == "" ? "disabled" : ""}${add_attribute("value", customErrorMessage, 0)}>`;
        }
      }
    )}` : `${kind == "enum" ? `${validate_component(Label, "Label").$$render($$result, { label: "Enums" }, {}, {
      header: () => {
        return `${validate_component(Tooltip, "Tooltip").$$render($$result, { light: true }, {}, {
          default: () => {
            return `Setting enums will allow you to specify a list of values that the input can take. If you
					want to allow custom values, you can disable the option below.`;
          }
        })} `;
      },
      default: () => {
        return `<div class="flex flex-col gap-1">${each(enum_ || [], (e) => {
          return `<div class="flex flex-row w-full gap-2 pt-2"><input id="input" type="text"${add_attribute("value", e, 0)}> ${enumLabels !== void 0 ? `<input id="input" type="text" placeholder="Optional title..."${add_attribute("value", enumLabels[e], 0)}>` : ``} ${allowKindChange ? `${validate_component(Button, "Button").$$render($$result, { size: "sm" }, {}, {
            default: () => {
              return `-`;
            }
          })}` : ``} </div>`;
        })}</div> ${allowKindChange ? `<div class="flex flex-row my-1">${validate_component(Button, "Button").$$render($$result, { color: "light", size: "sm" }, {}, {
          default: () => {
            return `+`;
          }
        })}</div>` : ``}`;
      }
    })} ${!noExtra ? `${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        size: "xs",
        options: { right: "Disallow creating custom values" },
        checked: disableCreate != void 0 && disableCreate
      },
      {},
      {}
    )}` : ``}` : `${kind == "resource" ? `<div class="mt-1"></div> ${validate_component(ResourceTypePicker, "ResourceTypePicker").$$render(
      $$result,
      { value: resource },
      {
        value: ($$value) => {
          resource = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${kind == "format" ? `${validate_component(Label, "Label").$$render($$result, { label: "Format" }, {}, {
      header: () => {
        return `${validate_component(Tooltip, "Tooltip").$$render($$result, { light: true }, {}, {
          default: () => {
            return `Setting the format will allow you to specify a format that the input should adhere to.`;
          }
        })} `;
      },
      default: () => {
        return `<select><option${add_attribute("value", void 0, 0)}></option>${each(FORMATS, (f) => {
          return `<option${add_attribute("value", f, 0)}>${escape(f)}</option>`;
        })}</select>`;
      }
    })} ${format == "date" ? `<div class="mt-1"></div> <div class="grid grid-cols-3 gap-2">x
				${validate_component(Label, "Label").$$render(
      $$result,
      {
        label: "Date format passed to script",
        class: "col-span-2"
      },
      {},
      {
        header: () => {
          return `${validate_component(Tooltip, "Tooltip").$$render($$result, { light: true }, {}, {
            default: () => {
              return `Setting the date output format will allow you to specify how the date will be passed
							to the script.`;
            }
          })} `;
        },
        default: () => {
          return `${validate_component(ClearableInput, "ClearableInput").$$render(
            $$result,
            {
              type: "text",
              placeholder: "yyyy-MM-dd",
              value: dateFormat
            },
            {
              value: ($$value) => {
                dateFormat = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )} ${validate_component(Label, "Label").$$render($$result, { label: "Presets" }, {}, {
      default: () => {
        return `<select ${(dateFormat ? !presetOptions.map((f) => f.format).includes(dateFormat) : false) ? "disabled" : ""}>${each(presetOptions, (f) => {
          return `<option${add_attribute("value", f.format, 0)}>${escape(f.label)}</option>`;
        })}</select>`;
      }
    })}</div>` : ``}` : `${kind == "none" ? `${!noExtra ? `${validate_component(Label, "Label").$$render($$result, { label: "Min textarea rows" }, {}, {
      default: () => {
        return `<input type="number"${add_attribute("value", minRows, 0)}>`;
      }
    })}` : ``}` : `${kind === "base64" ? `${validate_component(Alert, "Alert").$$render(
      $$result,
      {
        type: "warning",
        title: "S3 Object recommended",
        size: "xs",
        tooltip: "Check out the documentation for more information:",
        documentationLink: "https://www.windmill.dev/docs/core_concepts/persistent_storage#large-data-files-s3-r2-minio-azure-blob"
      },
      {},
      {
        default: () => {
          return `For large files, we recommend using the S3 Object type instead of the base64 string type.`;
        }
      }
    )}` : ``}`}`}`}`}`} ${(kind == "none" || kind == "pattern" || kind == "format") && !noExtra ? `${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        size: "xs",
        options: { right: "Disable variable picker" },
        checked: disableVariablePicker != void 0 && disableVariablePicker,
        disabled: ["email", "yaml", "sql", "date-time", "date"].includes(format ?? "")
      },
      {},
      {}
    )}` : ``} ${kind == "none" || kind == "pattern" ? `${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        size: "xs",
        options: { right: "Is Password" },
        checked: password
      },
      {},
      {}
    )}` : ``}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const css = {
  code: "input.svelte-1bqrn0o::-webkit-inner-spin-button,input.svelte-1bqrn0o::-webkit-outer-spin-button{-webkit-appearance:none!important;margin:0}",
  map: null
};
const PropertyEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { description = "" } = $$props;
  let { format = void 0 } = $$props;
  let { contentEncoding = void 0 } = $$props;
  let { type = void 0 } = $$props;
  let { oneOf = void 0 } = $$props;
  let { pattern = void 0 } = $$props;
  let { enum_ = void 0 } = $$props;
  let { extra = {} } = $$props;
  let { minW = true } = $$props;
  let { customErrorMessage = void 0 } = $$props;
  let { title = void 0 } = $$props;
  let { placeholder = void 0 } = $$props;
  let { properties = void 0 } = $$props;
  let { isFlowInput = false } = $$props;
  let { isAppInput = false } = $$props;
  let { order = void 0 } = $$props;
  let { itemsType = void 0 } = $$props;
  const dispatch = createEventDispatcher();
  let oneOfSelected = oneOf && oneOf.length >= 2 && oneOf[0]["title"] || void 0;
  let oneOfSchemas = void 0;
  function updateOneOfSchemas(oneOf2) {
    if (oneOf2 && oneOf2.length >= 2) {
      oneOfSchemas = oneOf2.map((obj) => {
        return {
          properties: obj.properties ? Object.fromEntries(Object.entries(obj.properties).filter(([k, v]) => k !== "label")) : {},
          order: obj.order
        };
      });
    }
  }
  function focus() {
  }
  let schema = { properties, order };
  let initialExtra = structuredClone({
    order: void 0,
    properties: void 0,
    ...extra
  });
  let mounted = false;
  let firstOnContentChange = true;
  function onContentChange() {
    if (firstOnContentChange) {
      firstOnContentChange = false;
      return;
    }
    if (!deepEqual(extra, initialExtra)) {
      initialExtra = structuredClone(extra);
      console.debug("property content updated");
      dispatch("change");
    }
  }
  function updateSchema() {
    if (!deepEqual(schema.properties, properties) || !deepEqual(schema.order, order)) {
      schema = { properties, order };
      console.debug("property schema updated");
      dispatch("change");
    }
  }
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  if ($$props.format === void 0 && $$bindings.format && format !== void 0) $$bindings.format(format);
  if ($$props.contentEncoding === void 0 && $$bindings.contentEncoding && contentEncoding !== void 0) $$bindings.contentEncoding(contentEncoding);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.oneOf === void 0 && $$bindings.oneOf && oneOf !== void 0) $$bindings.oneOf(oneOf);
  if ($$props.pattern === void 0 && $$bindings.pattern && pattern !== void 0) $$bindings.pattern(pattern);
  if ($$props.enum_ === void 0 && $$bindings.enum_ && enum_ !== void 0) $$bindings.enum_(enum_);
  if ($$props.extra === void 0 && $$bindings.extra && extra !== void 0) $$bindings.extra(extra);
  if ($$props.minW === void 0 && $$bindings.minW && minW !== void 0) $$bindings.minW(minW);
  if ($$props.customErrorMessage === void 0 && $$bindings.customErrorMessage && customErrorMessage !== void 0) $$bindings.customErrorMessage(customErrorMessage);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.properties === void 0 && $$bindings.properties && properties !== void 0) $$bindings.properties(properties);
  if ($$props.isFlowInput === void 0 && $$bindings.isFlowInput && isFlowInput !== void 0) $$bindings.isFlowInput(isFlowInput);
  if ($$props.isAppInput === void 0 && $$bindings.isAppInput && isAppInput !== void 0) $$bindings.isAppInput(isAppInput);
  if ($$props.order === void 0 && $$bindings.order && order !== void 0) $$bindings.order(order);
  if ($$props.itemsType === void 0 && $$bindings.itemsType && itemsType !== void 0) $$bindings.itemsType(itemsType);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0) $$bindings.focus(focus);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      updateOneOfSchemas(oneOf);
    }
    extra && mounted && onContentChange();
    (properties || order) && updateSchema();
    $$rendered = `<div class="flex flex-row items-center justify-between w-full gap-2"> <div${add_attribute("class", twMerge("flex flex-col w-full", "gap-4", minW ? "min-w-[250px]" : ""), 0)}>${slots.typeeditor ? slots.typeeditor({}) : ``} ${validate_component(Label, "Label").$$render($$result, { label: "Description" }, {}, {
      default: () => {
        return `<textarea rows="2" placeholder="Field description">${escape(description || "")}</textarea>`;
      }
    })} ${validate_component(Label, "Label").$$render($$result, { label: "Custom Title", class: "w-full" }, {}, {
      header: () => {
        return `${validate_component(Tooltip, "Tooltip").$$render($$result, { light: true }, {}, {
          default: () => {
            return `Will be displayed in the UI instead of the field name.`;
          }
        })} `;
      },
      default: () => {
        return `<input placeholder="Field title" class="svelte-1bqrn0o"${add_attribute("value", title, 0)}>`;
      }
    })} ${validate_component(Label, "Label").$$render($$result, { label: "Placeholder" }, {}, {
      header: () => {
        return `${validate_component(Tooltip, "Tooltip").$$render($$result, { light: true }, {}, {
          default: () => {
            return `Will be displayed in the input field when the field is empty. If not set, the default
					value will be used. The placeholder is disabled depending on the field type, format, etc.`;
          }
        })} `;
      },
      default: () => {
        return `<textarea placeholder="Enter a placeholder" rows="1" ${!shouldDisplayPlaceholder(type, format, enum_, contentEncoding, pattern, extra) ? "disabled" : ""}>${escape(placeholder || "")}</textarea>`;
      }
    })} ${type == "array" ? `${validate_component(ArrayTypeNarrowing, "ArrayTypeNarrowing").$$render(
      $$result,
      {
        canEditResourceType: isFlowInput || isAppInput,
        itemsType
      },
      {
        itemsType: ($$value) => {
          itemsType = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${type == "string" || ["number", "integer", "object"].includes(type ?? "") ? `<div>${validate_component(Label, "Label").$$render($$result, { label: "Field settings" }, {}, {
      default: () => {
        return `<div>${type == "string" ? `${validate_component(StringTypeNarrowing, "StringTypeNarrowing").$$render(
          $$result,
          {
            originalType: extra["originalType"],
            overrideAllowKindChange: isFlowInput || isAppInput,
            customErrorMessage,
            format,
            pattern,
            enum_,
            contentEncoding,
            password: extra["password"],
            minRows: extra["minRows"],
            disableCreate: extra["disableCreate"],
            disableVariablePicker: extra["disableVariablePicker"],
            dateFormat: extra["dateFormat"],
            enumLabels: extra["enumLabels"]
          },
          {
            customErrorMessage: ($$value) => {
              customErrorMessage = $$value;
              $$settled = false;
            },
            format: ($$value) => {
              format = $$value;
              $$settled = false;
            },
            pattern: ($$value) => {
              pattern = $$value;
              $$settled = false;
            },
            enum_: ($$value) => {
              enum_ = $$value;
              $$settled = false;
            },
            contentEncoding: ($$value) => {
              contentEncoding = $$value;
              $$settled = false;
            },
            password: ($$value) => {
              extra["password"] = $$value;
              $$settled = false;
            },
            minRows: ($$value) => {
              extra["minRows"] = $$value;
              $$settled = false;
            },
            disableCreate: ($$value) => {
              extra["disableCreate"] = $$value;
              $$settled = false;
            },
            disableVariablePicker: ($$value) => {
              extra["disableVariablePicker"] = $$value;
              $$settled = false;
            },
            dateFormat: ($$value) => {
              extra["dateFormat"] = $$value;
              $$settled = false;
            },
            enumLabels: ($$value) => {
              extra["enumLabels"] = $$value;
              $$settled = false;
            }
          },
          {}
        )}` : `${type == "number" || type == "integer" ? `${validate_component(NumberTypeNarrowing, "NumberTypeNarrowing").$$render(
          $$result,
          {
            min: extra["min"],
            max: extra["max"],
            currency: extra["currency"],
            currencyLocale: extra["currencyLocale"]
          },
          {
            min: ($$value) => {
              extra["min"] = $$value;
              $$settled = false;
            },
            max: ($$value) => {
              extra["max"] = $$value;
              $$settled = false;
            },
            currency: ($$value) => {
              extra["currency"] = $$value;
              $$settled = false;
            },
            currencyLocale: ($$value) => {
              extra["currencyLocale"] = $$value;
              $$settled = false;
            }
          },
          {}
        )}` : `${type == "object" && oneOf && oneOf.length >= 2 && !isFlowInput && !isAppInput ? `${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
          $$result,
          { class: "mb-2", selected: oneOfSelected },
          {
            selected: ($$value) => {
              oneOfSelected = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `${each(oneOf, (obj) => {
                return `${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: obj.title, label: obj.title }, {}, {})}`;
              })}`;
            }
          }
        )} ${oneOfSelected && oneOfSchemas ? (() => {
          let idx = oneOf.findIndex((obj) => obj.title === oneOfSelected);
          return ` <div class="border">${validate_component(EditableSchemaForm, "EditableSchemaForm").$$render(
            $$result,
            {
              noPreview: true,
              uiOnly: true,
              jsonEnabled: false,
              schema: oneOfSchemas[idx]
            },
            {
              schema: ($$value) => {
                oneOfSchemas[idx] = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div>`;
        })() : ``}` : `${type == "object" && format?.startsWith("dynselect-") ? `<div class="text-tertiary text-xs" data-svelte-h="svelte-oyqtbt">No settings available for Dynamic Select</div>` : `${type == "object" && !format?.startsWith("resource-") && !isFlowInput && !isAppInput ? `<div class="border">${validate_component(EditableSchemaForm, "EditableSchemaForm").$$render(
          $$result,
          {
            noPreview: true,
            uiOnly: true,
            jsonEnabled: false,
            schema
          },
          {
            schema: ($$value) => {
              schema = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div>` : `<div class="text-tertiary text-xs" data-svelte-h="svelte-1094tde">No settings available for this field type</div>`}`}`}`}`}</div>`;
      }
    })}</div>` : ``}`} ${slots.default ? slots.default({}) : ``}</div> </div>`;
  } while (!$$settled);
  return $$rendered;
});
const EditableSchemaForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { schema } = $$props;
  let { schemaSkippedValues = [] } = $$props;
  let { args = {} } = $$props;
  let { shouldHideNoInputs = false } = $$props;
  let { noVariablePicker = false } = $$props;
  let { flexWrap = false } = $$props;
  let { uiOnly = false } = $$props;
  let { isFlowInput = false } = $$props;
  let { noPreview = false } = $$props;
  let { offset: offset2 = 48 + 31 + 31 + 16 + 1 } = $$props;
  let { jsonEnabled = true } = $$props;
  let { isAppInput = false } = $$props;
  let { lightweightMode = false } = $$props;
  let { displayWebhookWarning = false } = $$props;
  let { dndType = void 0 } = $$props;
  createEventDispatcher();
  let { class: clazz = "" } = $$props;
  function setDefaults() {
    const nargs = {};
    Object.keys(schema?.properties ?? {}).forEach((key) => {
      if (schema?.properties[key].default != void 0 && args[key] == void 0) {
        let value = schema?.properties[key].default;
        nargs[key] = value === "object" ? structuredClone(value) : value;
      }
    });
    args = nargs;
  }
  let itemPicker = void 0;
  let variableEditor = void 0;
  let keys = Array.isArray(schema?.order) ? [...schema.order] : Object.keys(schema?.properties ?? {}) ?? Object.keys(schema?.properties ?? {});
  function alignOrderWithProperties(schema2) {
    if (schema2.order == void 0 && !Array.isArray(schema2.order)) {
      schema2.order = [];
    }
    let norder = [...schema2.order];
    let properties = Object.keys(schema2?.properties ?? {});
    let index = 0;
    let hasChanged = false;
    for (let k of properties) {
      if (schema2.properties[k].type === "object" && schema2.properties[k].properties) {
        hasChanged = hasChanged || alignOrderWithProperties(schema2.properties[k]);
      }
      if (!norder.includes(k)) {
        norder = [...norder.slice(0, index), k, ...norder.slice(index)];
      }
      index += 1;
    }
    norder = norder.filter((x) => properties.includes(x));
    if (!deepEqual(schema2.order, norder)) {
      schema2.order = norder;
      return true;
    }
    return hasChanged;
  }
  function onSchemaChange() {
    let editSchema = false;
    if (alignOrderWithProperties(schema)) {
      editSchema = true;
    }
    let lkeys = schema?.order ?? Object.keys(schema?.properties ?? {});
    if (schema?.properties && !deepEqual(lkeys, keys)) {
      keys = [...lkeys];
      editSchema = true;
      if (opened == void 0) {
        opened = keys[0];
      }
    }
    if (editSchema) {
      schema = schema;
    }
  }
  let opened = keys[0];
  let selected = "";
  function openField(key) {
    opened = key;
  }
  function deleteField(key) {
    delete args[key];
    delete schema.properties[key];
    if (schema.required?.includes(key)) {
      schema.required = schema.required?.filter((x) => x !== key);
    }
    if (schema.order) {
      schema.order = schema.order.filter((x) => x !== key);
    }
  }
  let jsonView = false;
  let schemaString = JSON.stringify(schema, null, "	");
  let error = void 0;
  let editor = void 0;
  if ($$props.schema === void 0 && $$bindings.schema && schema !== void 0) $$bindings.schema(schema);
  if ($$props.schemaSkippedValues === void 0 && $$bindings.schemaSkippedValues && schemaSkippedValues !== void 0) $$bindings.schemaSkippedValues(schemaSkippedValues);
  if ($$props.args === void 0 && $$bindings.args && args !== void 0) $$bindings.args(args);
  if ($$props.shouldHideNoInputs === void 0 && $$bindings.shouldHideNoInputs && shouldHideNoInputs !== void 0) $$bindings.shouldHideNoInputs(shouldHideNoInputs);
  if ($$props.noVariablePicker === void 0 && $$bindings.noVariablePicker && noVariablePicker !== void 0) $$bindings.noVariablePicker(noVariablePicker);
  if ($$props.flexWrap === void 0 && $$bindings.flexWrap && flexWrap !== void 0) $$bindings.flexWrap(flexWrap);
  if ($$props.uiOnly === void 0 && $$bindings.uiOnly && uiOnly !== void 0) $$bindings.uiOnly(uiOnly);
  if ($$props.isFlowInput === void 0 && $$bindings.isFlowInput && isFlowInput !== void 0) $$bindings.isFlowInput(isFlowInput);
  if ($$props.noPreview === void 0 && $$bindings.noPreview && noPreview !== void 0) $$bindings.noPreview(noPreview);
  if ($$props.offset === void 0 && $$bindings.offset && offset2 !== void 0) $$bindings.offset(offset2);
  if ($$props.jsonEnabled === void 0 && $$bindings.jsonEnabled && jsonEnabled !== void 0) $$bindings.jsonEnabled(jsonEnabled);
  if ($$props.isAppInput === void 0 && $$bindings.isAppInput && isAppInput !== void 0) $$bindings.isAppInput(isAppInput);
  if ($$props.lightweightMode === void 0 && $$bindings.lightweightMode && lightweightMode !== void 0) $$bindings.lightweightMode(lightweightMode);
  if ($$props.displayWebhookWarning === void 0 && $$bindings.displayWebhookWarning && displayWebhookWarning !== void 0) $$bindings.displayWebhookWarning(displayWebhookWarning);
  if ($$props.dndType === void 0 && $$bindings.dndType && dndType !== void 0) $$bindings.dndType(dndType);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  if ($$props.setDefaults === void 0 && $$bindings.setDefaults && setDefaults !== void 0) $$bindings.setDefaults(setDefaults);
  if ($$props.openField === void 0 && $$bindings.openField && openField !== void 0) $$bindings.openField(openField);
  if ($$props.deleteField === void 0 && $$bindings.deleteField && deleteField !== void 0) $$bindings.deleteField(deleteField);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (args == void 0 || typeof args !== "object") {
        args = {};
      }
    }
    schema && onSchemaChange();
    {
      if (opened && schema.properties[opened]) {
        selected = opened ? schema.properties[opened].type !== "object" ? schema.properties[opened].type : schema.properties[opened].format === "resource-s3_object" ? "S3" : schema.properties[opened].oneOf && schema.properties[opened].oneOf.length >= 2 ? "oneOf" : "object" : "";
      }
    }
    $$rendered = `<div${add_attribute("style", offset2 ? `height: calc(100vh - ${offset2}px);` : "h-full", 0)}>${validate_component(Splitpanes, "Splitpanes").$$render($$result, {}, {}, {
      default: () => {
        return `${!noPreview ? `${validate_component(Pane, "Pane").$$render($$result, { size: 50, minSize: 20 }, {}, {
          default: () => {
            return `<div class="p-4">${validate_component(SchemaFormDND, "SchemaFormDnd").$$render(
              $$result,
              {
                schema,
                dndType,
                lightweightMode,
                prettifyHeader: isAppInput,
                args
              },
              {
                args: ($$value) => {
                  args = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div>`;
          }
        })}` : ``} ${validate_component(Pane, "Pane").$$render(
          $$result,
          {
            size: noPreview ? 100 : 50,
            minSize: noPreview ? 100 : 20
          },
          {},
          {
            default: () => {
              return `${jsonEnabled ? `<div class="w-full p-2 flex justify-end">${validate_component(Toggle, "Toggle").$$render(
                $$result,
                {
                  label: "JSON View",
                  size: "xs",
                  options: {
                    right: "JSON Editor",
                    rightTooltip: "Arguments can be edited either using the wizard, or by editing their JSON Schema."
                  },
                  lightMode: true,
                  checked: jsonView
                },
                {
                  checked: ($$value) => {
                    jsonView = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div>` : ``} ${!jsonView ? `<div class="${"w-full " + escape(clazz, true) + " " + escape(flexWrap ? "flex flex-row flex-wrap gap-x-6 " : "", true) + " divide-y"}">${keys.length > 0 ? `${each(keys, (argName, i) => {
                return `<div>  <div${add_attribute(
                  "class",
                  twMerge("w-full flex bg-gray-50 dark:bg-gray-800 px-4 py-1 justify-between items-center hover:bg-gray-100 cursor-pointer", opened === argName ? "bg-gray-100 hover:bg-gray-200" : ""),
                  0
                )}><div class="flex flex-row gap-2">${escape(argName)} ${!uiOnly ? `<div>${validate_component(Popup, "Popup").$$render(
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
                          nonCaptureEvent: true,
                          startIcon: { icon: Pen },
                          iconOnly: true
                        },
                        {},
                        {}
                      )} `;
                    },
                    default: ({ close }) => {
                      return `${validate_component(Label, "Label").$$render($$result, { label: "Name" }, {}, {
                        default: () => {
                          return `<div class="flex flex-col gap-2"><input type="text" class="w-full !bg-surface"${add_attribute("value", argName, 0)}${add_attribute("id", argName + i, 0)}> ${validate_component(Button, "Button").$$render(
                            $$result,
                            {
                              variant: "border",
                              color: "light",
                              size: "xs"
                            },
                            {},
                            {
                              default: () => {
                                return `Rename
															`;
                              }
                            }
                          )}</div> `;
                        }
                      })} `;
                    }
                  }
                )} </div>` : ``}</div> ${schema.required?.includes(argName) ? `<span class="text-red-500 text-xs" data-svelte-h="svelte-armxbw">Required </span>` : ``} ${!uiOnly ? `<button class="rounded-full p-1 text-gray-500 bg-white duration-200 hover:bg-gray-600 focus:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white dark:hover:bg-gray-800" aria-label="Clear">${validate_component(X, "X").$$render($$result, { size: 16 }, {}, {})} </button>` : ``}</div> ${opened === argName ? `<div class="p-4 border-t">${!schemaSkippedValues.includes(argName) && Object.keys(schema?.properties ?? {}).includes(argName) ? `${typeof args == "object" && schema?.properties[argName] ? `${validate_component(PropertyEditor, "PropertyEditor").$$render(
                  $$result,
                  {
                    type: schema.properties[argName].type,
                    isFlowInput,
                    isAppInput,
                    description: schema.properties[argName].description,
                    oneOf: schema.properties[argName].oneOf,
                    pattern: schema.properties[argName].pattern,
                    enum_: schema.properties[argName].enum,
                    format: schema.properties[argName].format,
                    contentEncoding: schema.properties[argName].contentEncoding,
                    customErrorMessage: schema.properties[argName].customErrorMessage,
                    itemsType: schema.properties[argName].items,
                    extra: schema.properties[argName],
                    title: schema.properties[argName].title,
                    placeholder: schema.properties[argName].placeholder,
                    properties: schema.properties[argName].properties,
                    order: schema.properties[argName].order
                  },
                  {
                    description: ($$value) => {
                      schema.properties[argName].description = $$value;
                      $$settled = false;
                    },
                    oneOf: ($$value) => {
                      schema.properties[argName].oneOf = $$value;
                      $$settled = false;
                    },
                    pattern: ($$value) => {
                      schema.properties[argName].pattern = $$value;
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
                    contentEncoding: ($$value) => {
                      schema.properties[argName].contentEncoding = $$value;
                      $$settled = false;
                    },
                    customErrorMessage: ($$value) => {
                      schema.properties[argName].customErrorMessage = $$value;
                      $$settled = false;
                    },
                    itemsType: ($$value) => {
                      schema.properties[argName].items = $$value;
                      $$settled = false;
                    },
                    extra: ($$value) => {
                      schema.properties[argName] = $$value;
                      $$settled = false;
                    },
                    title: ($$value) => {
                      schema.properties[argName].title = $$value;
                      $$settled = false;
                    },
                    placeholder: ($$value) => {
                      schema.properties[argName].placeholder = $$value;
                      $$settled = false;
                    },
                    properties: ($$value) => {
                      schema.properties[argName].properties = $$value;
                      $$settled = false;
                    },
                    order: ($$value) => {
                      schema.properties[argName].order = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    typeeditor: () => {
                      return `${isFlowInput || isAppInput ? `${validate_component(Label, "Label").$$render($$result, { label: "Type" }, {}, {
                        default: () => {
                          return `${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
                            $$result,
                            {
                              tabListClass: "flex-wrap",
                              class: "h-auto",
                              selected
                            },
                            {
                              selected: ($$value) => {
                                selected = $$value;
                                $$settled = false;
                              }
                            },
                            {
                              default: () => {
                                return `${each(
                                  [
                                    ["String", "string"],
                                    ["Number", "number"],
                                    ["Integer", "integer"],
                                    ["Object", "object"],
                                    ["OneOf", "oneOf"],
                                    ["Array", "array"],
                                    ["Boolean", "boolean"],
                                    ["S3 Object", "S3"]
                                  ],
                                  (x) => {
                                    return `${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: x[1], label: x[0] }, {}, {})}`;
                                  }
                                )} `;
                              }
                            }
                          )} `;
                        }
                      })}` : ``} `;
                    },
                    default: () => {
                      return `${isFlowInput || isAppInput ? `${validate_component(FlowPropertyEditor, "FlowPropertyEditor").$$render(
                        $$result,
                        {
                          variableEditor,
                          itemPicker,
                          lightweightMode,
                          type: schema.properties[argName].type,
                          contentEncoding: schema.properties[argName].contentEncoding,
                          required: schema.required?.includes(argName) ?? false,
                          pattern: schema.properties[argName].pattern,
                          password: schema.properties[argName].password,
                          propsNames: schema.properties[argName].propsNames,
                          extra: schema.properties[argName],
                          customErrorMessage: schema.properties[argName].customErrorMessage,
                          itemsType: schema.properties[argName].items,
                          displayWebhookWarning,
                          defaultValue: schema.properties[argName].default,
                          nullable: schema.properties[argName].nullable,
                          oneOf: schema.properties[argName].oneOf,
                          format: schema.properties[argName].format,
                          showExpr: schema.properties[argName].showExpr,
                          properties: schema.properties[argName].properties,
                          order: schema.properties[argName].order,
                          requiredProperty: schema.properties[argName].required
                        },
                        {
                          defaultValue: ($$value) => {
                            schema.properties[argName].default = $$value;
                            $$settled = false;
                          },
                          nullable: ($$value) => {
                            schema.properties[argName].nullable = $$value;
                            $$settled = false;
                          },
                          oneOf: ($$value) => {
                            schema.properties[argName].oneOf = $$value;
                            $$settled = false;
                          },
                          format: ($$value) => {
                            schema.properties[argName].format = $$value;
                            $$settled = false;
                          },
                          showExpr: ($$value) => {
                            schema.properties[argName].showExpr = $$value;
                            $$settled = false;
                          },
                          properties: ($$value) => {
                            schema.properties[argName].properties = $$value;
                            $$settled = false;
                          },
                          order: ($$value) => {
                            schema.properties[argName].order = $$value;
                            $$settled = false;
                          },
                          requiredProperty: ($$value) => {
                            schema.properties[argName].required = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )}` : ``} `;
                    }
                  }
                )}` : ``}` : ``} </div>` : ``} </div>`;
              })}` : `${!shouldHideNoInputs ? `<div class="text-secondary text-sm p-2" data-svelte-h="svelte-mk6jv4">No inputs</div>` : ``}`}</div>` : `<div class="p-2"><div class="border rounded h-full">${validate_component(SimpleEditor, "SimpleEditor").$$render(
                $$result,
                {
                  small: true,
                  fixedOverflowWidgets: false,
                  lang: "json",
                  autoHeight: true,
                  automaticLayout: true,
                  this: editor,
                  code: schemaString
                },
                {
                  this: ($$value) => {
                    editor = $$value;
                    $$settled = false;
                  },
                  code: ($$value) => {
                    schemaString = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div> ${!emptyString(error) ? `<div class="text-red-400 text-xs">${escape(error)}</div>` : `<div data-svelte-h="svelte-jkt68h"><br></div>`}</div>`}`;
            }
          }
        )}`;
      }
    })}</div> ${!noVariablePicker ? `${validate_component(ItemPicker, "ItemPicker").$$render(
      $$result,
      {
        pickCallback: (path, _) => {
        },
        itemName: "Variable",
        tooltip: "Variables are dynamic values that have a key associated to them and can be retrieved during the execution of a Script or Flow.",
        documentationLink: "https://www.windmill.dev/docs/core_concepts/variables_and_secrets",
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
          return `<div slot="submission">${validate_component(Button, "Button").$$render(
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
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const AddPropertyForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name2 = "";
  createEventDispatcher();
  return `<div class="flex flex-row gap-2"><input placeholder="Field name"${add_attribute("value", name2, 0)}> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "contained",
      color: "dark",
      size: "xs",
      startIcon: { icon: Plus },
      id: "flow-editor-add-property",
      disabled: !name2
    },
    {},
    {
      default: () => {
        return `Add field`;
      }
    }
  )}</div>`;
});
const AddProperty = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { schema = emptySchema() } = $$props;
  const DEFAULT_PROPERTY = {
    selectedType: "string",
    description: "",
    name: "",
    required: false
  };
  const dispatch = createEventDispatcher();
  if (!schema) {
    schema = emptySchema();
  }
  let schemaString = "";
  reorder();
  function reorder() {
    if (schema.order && Array.isArray(schema.order)) {
      const n = {};
      schema.order.forEach((x) => {
        if (schema.properties && schema.properties[x] != void 0) {
          n[x] = schema.properties[x];
        }
      });
      Object.keys(schema.properties ?? {}).filter((x) => !schema.order?.includes(x)).forEach((x) => {
        n[x] = schema.properties[x];
      });
      schema.properties = n;
    }
  }
  function syncOrders() {
    if (schema) {
      schema.order = Object.keys(schema.properties ?? {});
    }
  }
  function handleDeleteArgument(argPath) {
    try {
      let modifiedObject = schema;
      let modifiedProperties = modifiedObject.properties;
      let argName = argPath.pop();
      argPath.forEach((property) => {
        if (Object.keys(modifiedProperties).includes(property)) {
          modifiedObject = modifiedProperties[property];
          modifiedProperties = modifiedObject.properties;
        } else {
          throw Error("Nested argument not found!");
        }
      });
      if (Object.keys(modifiedProperties).includes(argName)) {
        delete modifiedProperties[argName];
        modifiedObject.required = schema.required.filter((arg) => arg !== argName);
        if (modifiedObject.order) {
          modifiedObject.order = modifiedObject.order.filter((arg) => arg !== argName);
        }
        schema = schema;
        schemaString = JSON.stringify(schema, null, "	");
        dispatch("change", schema);
      } else {
        throw Error("Argument not found!");
      }
      syncOrders();
      dispatch("change", schema);
    } catch (err) {
      sendUserToast(`Could not delete argument: ${err}`, true);
    }
  }
  if ($$props.schema === void 0 && $$bindings.schema && schema !== void 0) $$bindings.schema(schema);
  if ($$props.DEFAULT_PROPERTY === void 0 && $$bindings.DEFAULT_PROPERTY && DEFAULT_PROPERTY !== void 0) $$bindings.DEFAULT_PROPERTY(DEFAULT_PROPERTY);
  if ($$props.handleDeleteArgument === void 0 && $$bindings.handleDeleteArgument && handleDeleteArgument !== void 0) $$bindings.handleDeleteArgument(handleDeleteArgument);
  return `<div class="flex">${validate_component(AddPropertyForm, "AddPropertyForm").$$render($$result, {}, {}, {})}</div>`;
});
const yOffset = 49;
const EditableSchemaDrawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items;
  let { schema } = $$props;
  let { parentId = void 0 } = $$props;
  createEventDispatcher();
  let addProperty = void 0;
  let schemaFormDrawer = void 0;
  let editableSchemaForm = void 0;
  let { jsonView = false } = $$props;
  let schemaString = JSON.stringify(schema, null, "	");
  let editor = void 0;
  let error = void 0;
  if ($$props.schema === void 0 && $$bindings.schema && schema !== void 0) $$bindings.schema(schema);
  if ($$props.parentId === void 0 && $$bindings.parentId && parentId !== void 0) $$bindings.parentId(parentId);
  if ($$props.jsonView === void 0 && $$bindings.jsonView && jsonView !== void 0) $$bindings.jsonView(jsonView);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    items = (schema?.order ?? Object.keys(schema.properties ?? {}))?.map((item, index) => {
      return { value: item, id: generateRandomString() };
    }) ?? [];
    $$rendered = `<div class="flex flex-col items-end mb-2 w-full">${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        label: "JSON View",
        size: "xs",
        options: {
          right: "JSON Editor",
          rightTooltip: "Arguments can be edited either using the wizard, or by editing their JSON Schema."
        },
        lightMode: true,
        checked: jsonView
      },
      {
        checked: ($$value) => {
          jsonView = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> ${validate_component(AddProperty, "AddProperty").$$render(
      $$result,
      { schema, this: addProperty },
      {
        schema: ($$value) => {
          schema = $$value;
          $$settled = false;
        },
        this: ($$value) => {
          addProperty = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${!jsonView ? `<div class="gap-1 flex flex-col mt-2">${items?.length > 0 ? `${each(items, (item) => {
      return `<div class="w-full flex flex-col justify-between border items-center py-1 px-2 rounded-md bg-surface text-sm">${schema.properties?.[item.value] ? `<div class="flex flex-row justify-between items-center w-full">${escape(`${item.value}${schema.properties?.[item.value]?.title ? ` (title: ${schema.properties?.[item.value]?.title})` : ""} `)}   <div class="flex flex-row gap-1 item-center h-full justify-center">${validate_component(Button, "Button").$$render(
        $$result,
        {
          iconOnly: true,
          size: "xs2",
          color: "light",
          startIcon: { icon: Trash }
        },
        {},
        {}
      )} ${validate_component(Button, "Button").$$render(
        $$result,
        {
          iconOnly: true,
          size: "xs2",
          color: "light",
          startIcon: { icon: Pen }
        },
        {},
        {}
      )} <div class="cursor-move flex items-center handle">${validate_component(Grip_vertical, "GripVertical").$$render($$result, { size: 16 }, {}, {})}</div> </div></div> ${schema.properties[item.value]?.type === "object" && !(schema.properties[item.value].oneOf && schema.properties[item.value].oneOf.length >= 2) ? `<div class="flex flex-col w-full mt-2">${validate_component(Label, "Label").$$render($$result, { label: "Nested Properties" }, {}, {
        default: () => {
          return `${validate_component(EditableSchemaDrawer, "svelte:self").$$render(
            $$result,
            {
              schema: schema.properties[item.value],
              parentId: item.value
            },
            {},
            {}
          )} `;
        }
      })} </div>` : ``}` : `<div class="text-tertiary" data-svelte-h="svelte-bro2p6">Value is undefined </div>`} </div>`;
    })}` : ``}</div> ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "1200px", this: schemaFormDrawer },
      {
        this: ($$value) => {
          schemaFormDrawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render(
            $$result,
            {
              noPadding: true,
              title: "UI Customisation"
            },
            {},
            {
              actions: () => {
                return `${validate_component(AddProperty, "AddProperty").$$render(
                  $$result,
                  { schema },
                  {
                    schema: ($$value) => {
                      schema = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )} `;
              },
              default: () => {
                return `${validate_component(EditableSchemaForm, "EditableSchemaForm").$$render(
                  $$result,
                  {
                    isAppInput: true,
                    offset: yOffset,
                    lightweightMode: true,
                    dndType: "drawer",
                    this: editableSchemaForm,
                    schema
                  },
                  {
                    this: ($$value) => {
                      editableSchemaForm = $$value;
                      $$settled = false;
                    },
                    schema: ($$value) => {
                      schema = $$value;
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
    )}` : `<div class="mt-2"></div> ${validate_component(SimpleEditor, "SimpleEditor").$$render(
      $$result,
      {
        small: true,
        fixedOverflowWidgets: false,
        lang: "json",
        autoHeight: true,
        automaticLayout: true,
        this: editor,
        code: schemaString
      },
      {
        this: ($$value) => {
          editor = $$value;
          $$settled = false;
        },
        code: ($$value) => {
          schemaString = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${!emptyString(error) ? `<div class="text-red-400 text-xs">${escape(error)}</div>` : `<div data-svelte-h="svelte-jkt68h"><br></div>`}`}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  AddProperty as A,
  ClearableInput as C,
  EditableSchemaForm as E,
  Trash_2 as T,
  EditableSchemaDrawer as a
};
