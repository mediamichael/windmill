import { c as create_ssr_component, d as createEventDispatcher, b as add_attribute, v as validate_component } from "./ssr.js";
import { twMerge } from "tailwind-merge";
import { A as AddProperty, E as EditableSchemaForm } from "./EditableSchemaDrawer.js";
const EditableSchemaWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { schema } = $$props;
  let { offset = 0 } = $$props;
  let { uiOnly = false } = $$props;
  let { noPreview = false } = $$props;
  let { fullHeight = true } = $$props;
  let { lightweightMode = false } = $$props;
  let addProperty = void 0;
  createEventDispatcher();
  if ($$props.schema === void 0 && $$bindings.schema && schema !== void 0) $$bindings.schema(schema);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0) $$bindings.offset(offset);
  if ($$props.uiOnly === void 0 && $$bindings.uiOnly && uiOnly !== void 0) $$bindings.uiOnly(uiOnly);
  if ($$props.noPreview === void 0 && $$bindings.noPreview && noPreview !== void 0) $$bindings.noPreview(noPreview);
  if ($$props.fullHeight === void 0 && $$bindings.fullHeight && fullHeight !== void 0) $$bindings.fullHeight(fullHeight);
  if ($$props.lightweightMode === void 0 && $$bindings.lightweightMode && lightweightMode !== void 0) $$bindings.lightweightMode(lightweightMode);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div${add_attribute("class", twMerge(fullHeight ? "h-full" : "h-80", "border overflow-y-auto rounded-md"), 0)}><div class="p-4 border-b">${validate_component(AddProperty, "AddProperty").$$render(
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
    )}</div> ${validate_component(EditableSchemaForm, "EditableSchemaForm").$$render(
      $$result,
      {
        isFlowInput: true,
        offset,
        uiOnly,
        noPreview,
        lightweightMode,
        schema
      },
      {
        schema: ($$value) => {
          schema = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  EditableSchemaWrapper as E
};
