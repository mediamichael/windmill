import { c as create_ssr_component, d as createEventDispatcher, v as validate_component, e as escape, b as add_attribute, p as compute_slots } from "./ssr.js";
import { P as Portal, g as classNames } from "./toast.js";
/* empty css                                     */
import { T as Tooltip } from "./Tooltip.js";
import { C as CloseButton } from "./CloseButton.js";
const zIndexes = {
  appEditorComponents: 1e3,
  secondaryMenu: 1001,
  splitPanelHandle: 1001,
  colorInput: 1002,
  disposables: 1100,
  // Modals and Drawers
  svelteSelectOptions: 5e3,
  contextMenu: 6e3,
  draggingComponent: 1e4,
  monacoEditor: 1e4,
  monacoEditorSuggestions: 10001
};
let openedDrawers = [];
const Disposable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let zIndex;
  let { open = false } = $$props;
  let { id = (Math.random() + 1).toString(36).substring(10) } = $$props;
  if (open) {
    openedDrawers.push(id);
  }
  let { initialOffset = 0 } = $$props;
  let offset = initialOffset;
  function toggleDrawer() {
    if (!open) {
      openDrawer();
    } else {
      closeDrawer();
    }
  }
  function openDrawer() {
    open = true;
    offset = openedDrawers.length - 1;
    if (openedDrawers.includes(id)) {
      return;
    }
    openedDrawers.push(id);
  }
  function closeDrawer() {
    open = false;
    offset = initialOffset;
    openedDrawers = openedDrawers.filter((drawer) => drawer !== id);
  }
  function isOpen() {
    return open;
  }
  const dispatch = createEventDispatcher();
  function handleClickAway(e) {
    const last = openedDrawers[openedDrawers.length - 1];
    if (last === id) {
      e.stopPropagation();
      closeDrawer();
    }
  }
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.initialOffset === void 0 && $$bindings.initialOffset && initialOffset !== void 0) $$bindings.initialOffset(initialOffset);
  if ($$props.toggleDrawer === void 0 && $$bindings.toggleDrawer && toggleDrawer !== void 0) $$bindings.toggleDrawer(toggleDrawer);
  if ($$props.openDrawer === void 0 && $$bindings.openDrawer && openDrawer !== void 0) $$bindings.openDrawer(openDrawer);
  if ($$props.closeDrawer === void 0 && $$bindings.closeDrawer && closeDrawer !== void 0) $$bindings.closeDrawer(closeDrawer);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0) $$bindings.isOpen(isOpen);
  zIndex = zIndexes.disposables + offset;
  {
    open ? dispatch("open") : dispatch("close");
  }
  return ` ${slots.default ? slots.default({
    handleClickAway,
    zIndex,
    closeDrawer,
    open
  }) : ``}`;
});
const ConditionalPortal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { condition = false } = $$props;
  if ($$props.condition === void 0 && $$bindings.condition && condition !== void 0) $$bindings.condition(condition);
  return `${condition ? `${validate_component(Portal, "Portal").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${slots.default ? slots.default({}) : ``}`}`;
});
const css = {
  code: ".drawer.svelte-1ojnjbx.svelte-1ojnjbx{left:0;overflow:clip;pointer-events:none;position:fixed;top:0;transition:z-index var(--duration) step-end;z-index:-1}.drawer.svelte-1ojnjbx.svelte-1ojnjbx,.drawer.open.svelte-1ojnjbx.svelte-1ojnjbx{height:100%;width:100%}.drawer.open.svelte-1ojnjbx.svelte-1ojnjbx{pointer-events:auto;transition:z-index var(--duration) step-start;z-index:var(--zIndex)}.overlay.svelte-1ojnjbx.svelte-1ojnjbx{background:rgba(0,0,0,.5);height:100%;left:0;opacity:0;position:fixed;top:0;transition:opacity var(--duration) ease;width:100%;z-index:2}.drawer.open.svelte-1ojnjbx>.overlay.svelte-1ojnjbx{opacity:1}.drawer.close.svelte-1ojnjbx>.panel.svelte-1ojnjbx{height:0;overflow:hidden}.panel.svelte-1ojnjbx.svelte-1ojnjbx{--tw-bg-opacity:1;background-color:rgb(var(--color-surface)/var(--tw-bg-opacity));height:100%;position:fixed;transition:transform var(--duration) ease,max-width var(--duration) ease,max-height var(--duration) ease;width:100%;z-index:3}.panel.left.svelte-1ojnjbx.svelte-1ojnjbx{left:0;transform:translate(-100%)}.panel.right.svelte-1ojnjbx.svelte-1ojnjbx{right:0;transform:translate(100%)}.panel.top.svelte-1ojnjbx.svelte-1ojnjbx{top:0;transform:translateY(-100%)}.panel.bottom.svelte-1ojnjbx.svelte-1ojnjbx{bottom:0;transform:translateY(100%)}.panel.left.size.svelte-1ojnjbx.svelte-1ojnjbx,.panel.right.size.svelte-1ojnjbx.svelte-1ojnjbx{max-width:var(--size)}.panel.bottom.size.svelte-1ojnjbx.svelte-1ojnjbx,.panel.top.size.svelte-1ojnjbx.svelte-1ojnjbx{max-height:var(--size)}.drawer.open.svelte-1ojnjbx>.panel.svelte-1ojnjbx{transform:translate(0)}",
  map: null
};
const Drawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let durationMs;
  let style;
  let { open = false } = $$props;
  let { duration = 0.3 } = $$props;
  let { placement = "right" } = $$props;
  let { size = "600px" } = $$props;
  let { alwaysOpen = false } = $$props;
  let { shouldUsePortal = true } = $$props;
  let { offset = 0 } = $$props;
  let disposable = void 0;
  function toggleDrawer() {
    disposable?.toggleDrawer();
  }
  function openDrawer() {
    disposable?.openDrawer();
  }
  function closeDrawer() {
    disposable?.closeDrawer();
    setTimeout(
      () => {
        dispatch("afterClose");
      },
      durationMs
    );
  }
  function isOpen() {
    return open;
  }
  const dispatch = createEventDispatcher();
  let timeout = true;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0) $$bindings.duration(duration);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0) $$bindings.placement(placement);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.alwaysOpen === void 0 && $$bindings.alwaysOpen && alwaysOpen !== void 0) $$bindings.alwaysOpen(alwaysOpen);
  if ($$props.shouldUsePortal === void 0 && $$bindings.shouldUsePortal && shouldUsePortal !== void 0) $$bindings.shouldUsePortal(shouldUsePortal);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0) $$bindings.offset(offset);
  if ($$props.toggleDrawer === void 0 && $$bindings.toggleDrawer && toggleDrawer !== void 0) $$bindings.toggleDrawer(toggleDrawer);
  if ($$props.openDrawer === void 0 && $$bindings.openDrawer && openDrawer !== void 0) $$bindings.openDrawer(openDrawer);
  if ($$props.closeDrawer === void 0 && $$bindings.closeDrawer && closeDrawer !== void 0) $$bindings.closeDrawer(closeDrawer);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0) $$bindings.isOpen(isOpen);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    durationMs = duration * 1e3;
    style = `--duration: ${duration}s; --size: ${size};`;
    {
      open ? openDrawer() : closeDrawer();
    }
    {
      !open ? setTimeout(() => timeout = true, durationMs) : timeout = false;
    }
    $$rendered = `${validate_component(ConditionalPortal, "ConditionalPortal").$$render($$result, { condition: shouldUsePortal }, {}, {
      default: () => {
        return `${validate_component(Disposable, "Disposable").$$render(
          $$result,
          {
            initialOffset: offset,
            open,
            this: disposable
          },
          {
            open: ($$value) => {
              open = $$value;
              $$settled = false;
            },
            this: ($$value) => {
              disposable = $$value;
              $$settled = false;
            }
          },
          {
            default: ({ handleClickAway, zIndex }) => {
              return `<aside class="${[
                "drawer windmill-drawer " + escape($$props.class ?? "", true) + " " + escape($$props.positionClass ?? "", true) + " svelte-1ojnjbx",
                (open ? "open" : "") + " " + (!open && timeout ? "close" : "")
              ].join(" ").trim()}"${add_attribute("style", `${style}; --zIndex: ${zIndex};`, 0)}>  <div class="${"overlay " + escape($$props.positionClass ?? "", true) + " svelte-1ojnjbx"}"></div> <div class="${[
                "panel " + escape(placement, true) + " " + escape($$props.positionClass, true) + " svelte-1ojnjbx",
                size ? "size" : ""
              ].join(" ").trim()}">${open || !timeout || alwaysOpen ? `${slots.default ? slots.default({ open }) : ``}` : ``}</div></aside>`;
            }
          }
        )}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const DrawerContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { title = void 0 } = $$props;
  let { overflow_y = true } = $$props;
  let { noPadding = false } = $$props;
  let { forceOverflowVisible = false } = $$props;
  let { tooltip = "" } = $$props;
  let { documentationLink = void 0 } = $$props;
  let { fullScreen = true } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.overflow_y === void 0 && $$bindings.overflow_y && overflow_y !== void 0) $$bindings.overflow_y(overflow_y);
  if ($$props.noPadding === void 0 && $$bindings.noPadding && noPadding !== void 0) $$bindings.noPadding(noPadding);
  if ($$props.forceOverflowVisible === void 0 && $$bindings.forceOverflowVisible && forceOverflowVisible !== void 0) $$bindings.forceOverflowVisible(forceOverflowVisible);
  if ($$props.tooltip === void 0 && $$bindings.tooltip && tooltip !== void 0) $$bindings.tooltip(tooltip);
  if ($$props.documentationLink === void 0 && $$bindings.documentationLink && documentationLink !== void 0) $$bindings.documentationLink(documentationLink);
  if ($$props.fullScreen === void 0 && $$bindings.fullScreen && fullScreen !== void 0) $$bindings.fullScreen(fullScreen);
  return `<div${add_attribute("class", classNames("flex flex-col divide-y", fullScreen ? "h-screen max-h-screen" : "h-full"), 0)}><div class="flex justify-between w-full items-center px-4 py-2 gap-2"><div class="flex items-center gap-2 w-full truncate">${validate_component(CloseButton, "CloseButton").$$render($$result, {}, {}, {})} <span class="font-semibold truncate text-primary !text-lg max-w-sm">${escape(title ?? "")} ${tooltip != "" || documentationLink ? `${validate_component(Tooltip, "Tooltip").$$render($$result, { documentationLink, scale: 0.9 }, {}, {
    default: () => {
      return `${escape(tooltip)}`;
    }
  })} ` : ``}</span></div> ${$$slots.actions ? `<div class="flex gap-2 items-center justify-end">${slots.actions ? slots.actions({}) : ``}</div>` : ``}</div> <div class="${[
    escape(classNames(noPadding ? "" : "p-4", "grow h-full max-h-full", forceOverflowVisible ? "!overflow-visible" : ""), true),
    overflow_y ? "overflow-y-auto" : ""
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  ConditionalPortal as C,
  Drawer as D,
  DrawerContent as a,
  Disposable as b,
  zIndexes as z
};
