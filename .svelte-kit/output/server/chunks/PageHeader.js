import { c as create_ssr_component, e as escape, v as validate_component, p as compute_slots } from "./ssr.js";
import { T as Tooltip } from "./Tooltip.js";
const PageHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { title } = $$props;
  let { tooltip = "" } = $$props;
  let { documentationLink = void 0 } = $$props;
  let { primary = true } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.tooltip === void 0 && $$bindings.tooltip && tooltip !== void 0) $$bindings.tooltip(tooltip);
  if ($$props.documentationLink === void 0 && $$bindings.documentationLink && documentationLink !== void 0) $$bindings.documentationLink(documentationLink);
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0) $$bindings.primary(primary);
  return `<div class="flex flex-row flex-wrap justify-between pt-6 pb-2 my-4">${primary ? `<span class="flex items-center gap-2"><h1 class="!text-2xl font-semibold leading-6 tracking-tight">${escape(title)}</h1> ${tooltip != "" || documentationLink ? `${validate_component(Tooltip, "Tooltip").$$render($$result, { documentationLink }, {}, {
    default: () => {
      return `${escape(tooltip)}`;
    }
  })}` : ``}</span>` : `<span class="flex items-center gap-2"><h2 class="!text-sm font-semibold">${escape(title)}</h2> ${tooltip != "" || documentationLink ? `${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      documentationLink,
      wrapperClass: "mb-0.5"
    },
    {},
    {
      default: () => {
        return `${escape(tooltip)}`;
      }
    }
  )}` : ``}</span>`} ${$$slots.default ? `<div class="my-2">${slots.default ? slots.default({}) : ``}</div>` : ``}</div>`;
});
export {
  PageHeader as P
};
