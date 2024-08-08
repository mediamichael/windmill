import { c as create_ssr_component, v as validate_component, d as createEventDispatcher, f as each, q as missing_component, e as escape, p as compute_slots } from "./ssr.js";
import { M as Menu } from "./common.js";
import { J as MenuButton, P as Portal, T as TransitionRoot, K as MenuItems, M as MenuItem } from "./toast.js";
import { offset, flip, shift } from "@floating-ui/dom";
import { c as createFloatingActions } from "./Section.js";
import { twMerge } from "tailwind-merge";
import { I as Icon } from "./Icon.js";
const More_vertical = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "1" }],
    ["circle", { "cx": "12", "cy": "5", "r": "1" }],
    ["circle", { "cx": "12", "cy": "19", "r": "1" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "more-vertical" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ResolveOpen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const dispatch = createEventDispatcher();
  let { open = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  {
    {
      if (open) {
        dispatch("open");
      } else {
        dispatch("close");
      }
    }
  }
  return ``;
});
const MenuV2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { placement = "bottom-start" } = $$props;
  let { justifyEnd = false } = $$props;
  let { lightMode = false } = $$props;
  createFloatingActions({
    strategy: "fixed",
    middleware: [offset(), flip(), shift()],
    placement
  });
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0) $$bindings.placement(placement);
  if ($$props.justifyEnd === void 0 && $$bindings.justifyEnd && justifyEnd !== void 0) $$bindings.justifyEnd(justifyEnd);
  if ($$props.lightMode === void 0 && $$bindings.lightMode && lightMode !== void 0) $$bindings.lightMode(lightMode);
  return `${validate_component(Menu, "Menu").$$render(
    $$result,
    {
      as: "div",
      class: "relative hover:z-50 flex w-full h-8"
    },
    {},
    {
      default: ({ open }) => {
        return `${validate_component(ResolveOpen, "ResolveOpen").$$render($$result, { open }, {}, {})} <div class="w-full">${validate_component(MenuButton, "MenuButton").$$render(
          $$result,
          {
            class: twMerge("w-full", justifyEnd ? "flex justify-end" : "")
          },
          {},
          {
            default: () => {
              return `${slots.trigger ? slots.trigger({}) : ``}`;
            }
          }
        )}</div> ${validate_component(Portal, "Portal").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="z-[6000]">${validate_component(TransitionRoot, "Transition").$$render(
              $$result,
              {
                open,
                enter: "transition ease-out duration-[25ms]",
                enterFrom: "transform opacity-0 scale-95",
                enterTo: "transform opacity-100 scale-100",
                leave: "transition ease-in duration-[25ms]",
                leaveFrom: "transform opacity-100 scale-100",
                leaveTo: "transform opacity-0 scale-95"
              },
              {},
              {
                default: () => {
                  return `${validate_component(MenuItems, "MenuItems").$$render(
                    $$result,
                    {
                      class: twMerge("border w-56 origin-top-right rounded-md shadow-md focus:outline-none", lightMode ? "bg-surface-inverse" : "bg-surface")
                    },
                    {},
                    {
                      default: () => {
                        return `<div class="my-1">${slots.default ? slots.default({}) : ``}</div>`;
                      }
                    }
                  )}`;
                }
              }
            )}</div>`;
          }
        })}`;
      }
    }
  )}`;
});
const DropdownV2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { items = [] } = $$props;
  let { justifyEnd = true } = $$props;
  function computeItems() {
    if (typeof items === "function") {
      return (items() ?? []).filter((item) => !item.hide);
    } else {
      return items.filter((item) => !item.hide);
    }
  }
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  if ($$props.justifyEnd === void 0 && $$bindings.justifyEnd && justifyEnd !== void 0) $$bindings.justifyEnd(justifyEnd);
  return `${validate_component(MenuV2, "Menu").$$render($$result, { placement: "bottom-end", justifyEnd }, {}, {
    trigger: () => {
      return `<div slot="trigger">${$$slots.buttonReplacement ? `${slots.buttonReplacement ? slots.buttonReplacement({}) : ``}` : `${validate_component(More_vertical, "MoreVertical").$$render(
        $$result,
        {
          size: 16,
          class: "w-8  h-8 p-2 hover:bg-surface-hover cursor-pointer rounded-md"
        },
        {},
        {}
      )}`}</div>`;
    },
    default: () => {
      return `<div class="flex flex-col">${each(computeItems() ?? [], (item) => {
        return `${validate_component(MenuItem, "MenuItem").$$render(
          $$result,
          {
            href: item?.href,
            disabled: item?.disabled,
            class: twMerge("px-4 py-2 text-primary hover:bg-surface-hover hover:text-primary cursor-pointer text-xs transition-all", "flex flex-row gap-2 items-center", item?.disabled && "text-gray-400 cursor-not-allowed", item?.type === "delete" && !item?.disabled && "text-red-500 hover:bg-red-100 hover:text-red-500")
          },
          {},
          {
            default: () => {
              return `${item.icon ? `${validate_component(item.icon || missing_component, "svelte:component").$$render($$result, { size: 14 }, {}, {})}` : ``} ${escape(item.displayName)} `;
            }
          }
        )}`;
      })}</div>`;
    }
  })}`;
});
export {
  DropdownV2 as D,
  More_vertical as M,
  MenuV2 as a
};
