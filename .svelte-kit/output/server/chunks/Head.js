import { C as set_current_component, r as run_all, D as current_component, c as create_ssr_component, v as validate_component, t as compute_rest_props, h as getContext, w as spread, x as escape_object, y as escape_attribute_value, b as add_attribute, d as createEventDispatcher, u as setContext, e as escape } from "./ssr.js";
import { i as is_void } from "./names.js";
import { twMerge } from "tailwind-merge";
import { B as Button } from "./toast.js";
import { I as Icon } from "./Icon.js";
import { A as Arrow_down } from "./arrow-down.js";
const dirty_components = [];
const binding_callbacks = [];
let render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = /* @__PURE__ */ Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function tick() {
  schedule_update();
  return resolved_promise;
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
const seen_callbacks = /* @__PURE__ */ new Set();
let flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length) binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
function flush_render_callbacks(fns) {
  const filtered = [];
  const targets = [];
  render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
  targets.forEach((c) => c());
  render_callbacks = filtered;
}
const Arrow_left = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m12 19-7-7 7-7" }], ["path", { "d": "M19 12H5" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "arrow-left" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Arrow_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M5 12h14" }], ["path", { "d": "m12 5 7 7-7 7" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "arrow-right" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Cell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["first", "last", "numeric", "head", "shouldStopPropagation", "selected", "sticky"]);
  let { first = false } = $$props;
  let { last = false } = $$props;
  let { numeric = false } = $$props;
  let { head = false } = $$props;
  let { shouldStopPropagation = false } = $$props;
  let { selected = false } = $$props;
  let { sticky = false } = $$props;
  let Tag = head ? "th" : "td";
  const { size } = getContext("datatable");
  if ($$props.first === void 0 && $$bindings.first && first !== void 0) $$bindings.first(first);
  if ($$props.last === void 0 && $$bindings.last && last !== void 0) $$bindings.last(last);
  if ($$props.numeric === void 0 && $$bindings.numeric && numeric !== void 0) $$bindings.numeric(numeric);
  if ($$props.head === void 0 && $$bindings.head && head !== void 0) $$bindings.head(head);
  if ($$props.shouldStopPropagation === void 0 && $$bindings.shouldStopPropagation && shouldStopPropagation !== void 0) $$bindings.shouldStopPropagation(shouldStopPropagation);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0) $$bindings.selected(selected);
  if ($$props.sticky === void 0 && $$bindings.sticky && sticky !== void 0) $$bindings.sticky(sticky);
  return ` ${((tag) => {
    return tag ? `<${Tag}${spread(
      [
        escape_object($$restProps),
        {
          class: escape_attribute_value(twMerge(
            "text-left text-xs text-primary font-normal whitespace-nowrap",
            first ? "sm:pl-6" : "",
            last ? "sm:pr-6" : "",
            first && size === "xs" ? "sm:pl-3" : "",
            last && size === "xs" ? "sm:pr-3" : "",
            numeric ? "text-right" : "",
            head ? "font-semibold " : "",
            $$restProps.class,
            sticky ? `!p-0 sticky ${first ? "left-0" : "right-0"}` : "px-2 py-3.5",
            size === "sm" ? "px-1.5 py-2.5" : "",
            size === "lg" ? "px-3 py-4" : "",
            size === "xs" ? "px-1 py-1.5" : "",
            selected ? "bg-blue-50 dark:bg-blue-900/50" : "",
            "transition-all"
          ))
        }
      ],
      {}
    )}>${is_void(tag) ? "" : `${sticky ? `<div${add_attribute("class", twMerge(first ? "border-r" : " border-l "), 0)}>${slots.default ? slots.default({}) : ``}</div>` : `${slots.default ? slots.default({}) : ``}`}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(Tag)}`;
});
const DataTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { paginated = false } = $$props;
  let { currentPage = 1 } = $$props;
  let { showNext = true } = $$props;
  let { loadMore = 0 } = $$props;
  let { shouldLoadMore = false } = $$props;
  let { rounded = true } = $$props;
  let { size = "md" } = $$props;
  let { perPage = void 0 } = $$props;
  let { shouldHidePagination = false } = $$props;
  let { noBorder = false } = $$props;
  let { rowCount = void 0 } = $$props;
  createEventDispatcher();
  setContext("datatable", { size });
  if ($$props.paginated === void 0 && $$bindings.paginated && paginated !== void 0) $$bindings.paginated(paginated);
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0) $$bindings.currentPage(currentPage);
  if ($$props.showNext === void 0 && $$bindings.showNext && showNext !== void 0) $$bindings.showNext(showNext);
  if ($$props.loadMore === void 0 && $$bindings.loadMore && loadMore !== void 0) $$bindings.loadMore(loadMore);
  if ($$props.shouldLoadMore === void 0 && $$bindings.shouldLoadMore && shouldLoadMore !== void 0) $$bindings.shouldLoadMore(shouldLoadMore);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.perPage === void 0 && $$bindings.perPage && perPage !== void 0) $$bindings.perPage(perPage);
  if ($$props.shouldHidePagination === void 0 && $$bindings.shouldHidePagination && shouldHidePagination !== void 0) $$bindings.shouldHidePagination(shouldHidePagination);
  if ($$props.noBorder === void 0 && $$bindings.noBorder && noBorder !== void 0) $$bindings.noBorder(noBorder);
  if ($$props.rowCount === void 0 && $$bindings.rowCount && rowCount !== void 0) $$bindings.rowCount(rowCount);
  return `<div${add_attribute("class", twMerge("h-full overflow-auto", rounded ? "rounded-md" : "", noBorder ? "border-0" : "border"), 0)}><div${add_attribute("class", twMerge("overflow-auto"), 0)}><table${add_attribute("class", twMerge("min-w-full divide-y"), 0)}>${slots.default ? slots.default({}) : ``}</table></div> ${paginated && !shouldHidePagination ? `<div class="bg-surface border-t flex flex-row justify-between p-1 items-center gap-2 sticky bottom-0"><div>${rowCount ? `<span class="text-xs mx-2">${escape(rowCount)} items</span>` : ``}</div> <div class="flex flex-row gap-2 items-center"><span class="text-xs">Page: ${escape(currentPage)} ${escape(perPage && rowCount ? `/ ${Math.ceil(rowCount / perPage)}` : "")}</span> ${perPage !== void 0 ? `<select class="!text-xs !w-16"><option${add_attribute("value", 25, 0)} data-svelte-h="svelte-1ua5rw2">25</option><option${add_attribute("value", 100, 0)} data-svelte-h="svelte-ic6cau">100</option><option${add_attribute("value", 1e3, 0)} data-svelte-h="svelte-qkil66">1000</option></select>` : ``} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      color: "light",
      size: "xs2",
      disabled: currentPage === 1,
      startIcon: { icon: Arrow_left }
    },
    {},
    {
      default: () => {
        return `Previous`;
      }
    }
  )} ${showNext ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      color: "light",
      size: "xs2",
      endIcon: { icon: Arrow_right }
    },
    {},
    {
      default: () => {
        return `Next`;
      }
    }
  )}` : ``}</div></div>` : `${shouldLoadMore ? `<div class="bg-surface border-t flex flex-row justify-center py-4 items-center gap-2">${validate_component(Button, "Button").$$render(
    $$result,
    {
      color: "light",
      size: "xs2",
      endIcon: { icon: Arrow_down }
    },
    {},
    {
      default: () => {
        return `Load ${escape(loadMore)} more`;
      }
    }
  )}</div>` : ``}`}</div>`;
});
const Head = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<thead class="bg-surface-secondary sticky top-0">${slots.default ? slots.default({}) : ``} <div class="absolute top-2 right-2">${slots.headerAction ? slots.headerAction({}) : ``}</div></thead>`;
});
export {
  Arrow_left as A,
  Cell as C,
  DataTable as D,
  Head as H,
  Arrow_right as a,
  add_render_callback as b,
  flush_render_callbacks as c,
  dirty_components as d,
  flush as f,
  schedule_update as s,
  tick as t
};
