import { c as create_ssr_component, s as subscribe, d as createEventDispatcher, v as validate_component, f as each, e as escape, b as add_attribute } from "./ssr.js";
import { T as Tooltip } from "./Tooltip.js";
import "yaml";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import { s as sendUserToast, B as Button } from "./toast.js";
import "minimatch";
/* empty css                                     */
import { P as Popup } from "./Popup.js";
import "./common.js";
import "./index2.js";
import { b as WorkerService } from "./services.gen.js";
import { b as superadmin } from "./stores2.js";
import { N as NoWorkerWithTagWarning } from "./NoWorkerWithTagWarning.js";
import { b as base } from "./base.js";
import { L as Loader_2 } from "./loader-2.js";
import { X } from "./x.js";
import { E as External_link } from "./Popover.js";
import { P as Pen } from "./pen.js";
const AssignableTagsInner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $superadmin, $$unsubscribe_superadmin;
  $$unsubscribe_superadmin = subscribe(superadmin, (value) => $superadmin = value);
  let newTag = "";
  let customTags = void 0;
  async function loadCustomTags() {
    try {
      customTags = await WorkerService.getCustomTags() ?? [];
    } catch (err) {
      sendUserToast(`Could not load global cache: ${err}`, true);
    }
  }
  createEventDispatcher();
  loadCustomTags();
  $$unsubscribe_superadmin();
  return `<div class="flex flex-col w-72 p-2 gap-2">${customTags == void 0 ? `${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})}` : `<div class="flex flex-col gap-y-1">${each(customTags, (customTag) => {
    return `<div class="flex gap-0.5 items-center"><div class="text-2xs p-1 rounded border text-primary">${escape(customTag)}</div> <button class="z-10 rounded-full p-1 duration-200 hover:bg-gray-200" aria-label="Remove item">${validate_component(X, "X").$$render($$result, { size: 12 }, {}, {})} </button>${validate_component(NoWorkerWithTagWarning, "NoWorkerWithTagWarning").$$render($$result, { tag: customTag }, {}, {})} </div>`;
  })}</div> <input type="text"${add_attribute("value", newTag, 0)}> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "contained",
      color: "blue",
      size: "sm",
      disabled: newTag.trim() == "" || !$superadmin
    },
    {},
    {
      default: () => {
        return `Add ${!$superadmin ? `<span class="text-2xs text-tertiary" data-svelte-h="svelte-1l95mpe">superadmin only</span>` : ``}`;
      }
    }
  )} <span class="text-sm text-primary">Configure <a href="${escape(base, true) + "/workers"}" target="_blank" class="inline-flex gap-1 items-baseline">worker groups ${validate_component(External_link, "ExternalLink").$$render($$result, { size: 12 }, {}, {})}</a> to listen to tags</span> <span class="text-2xs text-tertiary" data-svelte-h="svelte-81hawa">For tags specific to some workspaces, use <pre class="inline">tag(workspace1+workspace2)</pre></span> <span class="text-2xs text-tertiary" data-svelte-h="svelte-ugmciz">For dynamic tags based on the workspace, use <pre class="inline">$workspace</pre>, e.g:
			<pre class="inline">tag-$workspace</pre></span>`}</div>`;
});
const AssignableTags = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { placement = "bottom-end" } = $$props;
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0) $$bindings.placement(placement);
  return `${validate_component(Popup, "Popup").$$render(
    $$result,
    {
      floatingConfig: { strategy: "absolute", placement },
      containerClasses: "border rounded-lg shadow-lg p-4 bg-surface"
    },
    {},
    {
      button: () => {
        return `${validate_component(Button, "Button").$$render(
          $$result,
          {
            color: "dark",
            size: "xs",
            nonCaptureEvent: true
          },
          {},
          {
            default: () => {
              return `<div class="flex flex-row gap-1 items-center">${validate_component(Pen, "Pen").$$render($$result, { size: 14 }, {}, {})} Custom Tags ${validate_component(Tooltip, "Tooltip").$$render($$result, { light: true }, {}, {
                default: () => {
                  return `Tags are assigned to scripts and flows. Workers only accept jobs that correspond to their
					worker tags. Scripts have a default tag based on the language they are in but users can
					choose to override their tags with custom ones. This editor allow you to set the custom
					tags one can override the scripts and flows with.`;
                }
              })}</div>`;
            }
          }
        )} `;
      },
      default: () => {
        return `${validate_component(AssignableTagsInner, "AssignableTagsInner").$$render($$result, {}, {}, {})}`;
      }
    }
  )}`;
});
export {
  AssignableTags as A
};
