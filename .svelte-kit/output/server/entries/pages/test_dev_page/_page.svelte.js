import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { E as EditableSchemaWrapper } from "../../../chunks/EditableSchemaWrapper.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let schema = {
    type: "object",
    properties: {
      foo: {
        type: "string",
        description: "",
        required: [],
        nullable: false,
        default: "",
        disableVariablePicker: false,
        disableCreate: false,
        password: false
      }
    },
    order: ["foo"]
  };
  return `${validate_component(EditableSchemaWrapper, "EditableSchemaWrapper").$$render($$result, { schema }, {}, {})}`;
});
export {
  Page as default
};
