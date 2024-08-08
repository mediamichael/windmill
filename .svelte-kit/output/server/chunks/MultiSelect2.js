import { c as create_ssr_component, A as add_styles, E as merge_ssr_styles, e as escape, s as subscribe, w as spread, x as escape_object, d as createEventDispatcher, b as add_attribute, v as validate_component, f as each, z as null_to_empty } from "./ssr.js";
import "./index3.js";
import { w as writable } from "./index.js";
import { n as now, l as loop, i as is_date } from "./utils.js";
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map(
      (_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i])
    );
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token) fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
const css$1 = {
  code: "div.svelte-r8vkck{animation:var(--duration) infinite svelte-r8vkck-rotate;border-radius:50%;border-style:solid;border-width:.2em;display:inline-block;margin:0 3pt;vertical-align:middle}@keyframes svelte-r8vkck-rotate{to{transform:rotate(1turn)}}",
  map: null
};
const CircleSpinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = `cornflowerblue` } = $$props;
  let { duration = `1.5s` } = $$props;
  let { size = `1em` } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0) $$bindings.duration(duration);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  $$result.css.add(css$1);
  return `<div${add_styles(merge_ssr_styles("--duration: " + escape(duration, true), {
    "border-color": `${color} transparent ${color}
  ${color}`,
    "width": size,
    "height": size
  }))} class="svelte-r8vkck"></div>`;
});
const Wiggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  let { wiggle = false } = $$props;
  let { angle = 0 } = $$props;
  let { scale = 1 } = $$props;
  let { dx = 0 } = $$props;
  let { dy = 0 } = $$props;
  let { duration = 200 } = $$props;
  let { stiffness = 0.05 } = $$props;
  let { damping = 0.1 } = $$props;
  let rest_state = { angle: 0, scale: 1, dx: 0, dy: 0 };
  let store = spring(rest_state, { stiffness, damping });
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  if ($$props.wiggle === void 0 && $$bindings.wiggle && wiggle !== void 0) $$bindings.wiggle(wiggle);
  if ($$props.angle === void 0 && $$bindings.angle && angle !== void 0) $$bindings.angle(angle);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0) $$bindings.scale(scale);
  if ($$props.dx === void 0 && $$bindings.dx && dx !== void 0) $$bindings.dx(dx);
  if ($$props.dy === void 0 && $$bindings.dy && dy !== void 0) $$bindings.dy(dy);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0) $$bindings.duration(duration);
  if ($$props.stiffness === void 0 && $$bindings.stiffness && stiffness !== void 0) $$bindings.stiffness(stiffness);
  if ($$props.damping === void 0 && $$bindings.damping && damping !== void 0) $$bindings.damping(damping);
  {
    if (wiggle) setTimeout(() => wiggle = false, duration);
  }
  {
    store.set(wiggle ? { scale, angle, dx, dy } : rest_state);
  }
  $$unsubscribe_store();
  return `<span${add_styles({
    "transform": `rotate(${$store.angle}deg) scale(${$store.scale}) translate(${$store.dx}px,
  ${$store.dy}px)`
  })}>${slots.default ? slots.default({}) : ``}</span>`;
});
const ChevronExpand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread([escape_object($$props), { fill: "currentColor" }, { viewBox: "0 0 16 16" }], {})}><path d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"></path></svg>`;
});
const Cross = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread([escape_object($$props), { viewBox: "0 0 24 24" }, { fill: "currentColor" }], {})}><path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path></svg> `;
});
const Disabled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg${spread([escape_object($$props), { viewBox: "0 0 24 24" }, { fill: "currentColor" }], {})}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Zm-4.906-3.68L18.32 7.094A8 8 0 0 1 7.094 18.32ZM5.68 16.906A8 8 0 0 1 16.906 5.68L5.68 16.906Z"></path></svg>`;
});
const get_label = (opt) => {
  if (opt instanceof Object) {
    if (opt.label === void 0) {
      console.error(`MultiSelect option ${JSON.stringify(opt)} is an object but has no label key`);
    }
    return opt.label;
  }
  return `${opt}`;
};
function get_style(option, key = null) {
  if (!option?.style)
    return null;
  if (![`selected`, `option`, null].includes(key)) {
    console.error(`MultiSelect: Invalid key=${key} for get_style`);
    return;
  }
  if (typeof option == `object` && option.style) {
    if (typeof option.style == `string`) {
      return option.style;
    }
    if (typeof option.style == `object`) {
      if (key && key in option.style)
        return option.style[key];
      else {
        console.error(`Invalid style object for option=${JSON.stringify(option)}`);
      }
    }
  }
}
const css = {
  code: ".svelte-1xgvm21.svelte-1xgvm21.svelte-1xgvm21:where(div.multiselect){align-items:center;background:var(--sms-bg);border:var(--sms-border,1pt solid #d3d3d3);border-radius:var(--sms-border-radius,3pt);box-sizing:border-box;color:var(--sms-text-color);cursor:text;display:flex;font-size:var(--sms-font-size,inherit);margin:var(--sms-margin);max-width:var(--sms-max-width);min-height:var(--sms-min-height,22pt);padding:var(--sms-padding,0 3pt);position:relative;width:var(--sms-width)}.svelte-1xgvm21.svelte-1xgvm21.svelte-1xgvm21:where(div.multiselect.open){z-index:var(--sms-open-z-index,4)}.svelte-1xgvm21.svelte-1xgvm21.svelte-1xgvm21:where(div.multiselect:focus-within){border:var(--sms-focus-border,1pt solid var(--sms-active-color,#6495ed))}.svelte-1xgvm21.svelte-1xgvm21.svelte-1xgvm21:where(div.multiselect.disabled){background:var(--sms-disabled-bg,#d3d3d3);cursor:not-allowed}.svelte-1xgvm21.svelte-1xgvm21.svelte-1xgvm21:where(div.multiselect>ul.selected){display:flex;flex:1;flex-wrap:wrap;margin:0;padding:0}.svelte-1xgvm21.svelte-1xgvm21.svelte-1xgvm21:where(div.multiselect>ul.selected>li){align-items:center;background:var(--sms-selected-bg,rgba(0,0,0,.15));border-radius:3pt;color:var(--sms-selected-text-color,var(--sms-text-color));display:flex;line-height:normal;margin:2pt;padding:var(--sms-selected-li-padding,1pt 5pt);transition:.3s;white-space:nowrap}.svelte-1xgvm21.svelte-1xgvm21.svelte-1xgvm21:where(div.multiselect>ul.selected>li[draggable=true]){cursor:grab}.svelte-1xgvm21.svelte-1xgvm21.svelte-1xgvm21:where(div.multiselect>ul.selected>li.active){background:var(--sms-li-active-bg,var(--sms-active-color,rgba(0,0,0,.15)))}.svelte-1xgvm21.svelte-1xgvm21.svelte-1xgvm21:where(div.multiselect button){background:transparent;border:none;border-radius:50%;color:inherit;cursor:pointer;display:flex;margin:0 0 0 3pt;outline:none;padding:0;transition:.2s}.svelte-1xgvm21.svelte-1xgvm21.svelte-1xgvm21:where(div.multiselect button.remove-all){margin:0 3pt}.svelte-1xgvm21.svelte-1xgvm21.svelte-1xgvm21:where(ul.selected>li button:hover,button.remove-all:hover,button:focus){background:var(--sms-remove-btn-hover-bg,rgba(0,0,0,.2));color:var(--sms-remove-btn-hover-color,#87cefa)}.svelte-1xgvm21.svelte-1xgvm21.svelte-1xgvm21:where(div.multiselect input){margin:auto 0;padding:0}.svelte-1xgvm21.svelte-1xgvm21.svelte-1xgvm21:where(div.multiselect>ul.selected>input){background:none;border:none;border-radius:0;color:var(--sms-text-color);cursor:inherit;flex:1;font-size:inherit;min-width:2em;outline:none}div.multiselect.svelte-1xgvm21>ul.selected.svelte-1xgvm21>input.svelte-1xgvm21::-moz-placeholder{color:var(--sms-placeholder-color);opacity:var(--sms-placeholder-opacity);padding-left:5pt}div.multiselect.svelte-1xgvm21>ul.selected.svelte-1xgvm21>input.svelte-1xgvm21::placeholder{color:var(--sms-placeholder-color);opacity:var(--sms-placeholder-opacity);padding-left:5pt}.svelte-1xgvm21.svelte-1xgvm21.svelte-1xgvm21:where(div.multiselect>input.form-control){background:transparent;border:none;opacity:0;outline:none;pointer-events:none;position:absolute;width:2em;z-index:-1}.svelte-1xgvm21.svelte-1xgvm21.svelte-1xgvm21:where(div.multiselect>ul.options){background:var(--sms-options-bg,#fff);border:var(--sms-options-border);border-radius:var(--sms-options-border-radius,1ex);border-width:var(--sms-options-border-width);box-shadow:var(--sms-options-shadow,0 0 14pt -8pt #000);box-sizing:border-box;left:0;list-style:none;margin:var(--sms-options-margin,inherit);max-height:var(--sms-options-max-height,50vh);overflow:auto;overscroll-behavior:var(--sms-options-overscroll,none);padding:var(--sms-options-padding);position:absolute;top:100%;transition:all .2s;width:100%}.svelte-1xgvm21.svelte-1xgvm21.svelte-1xgvm21:where(div.multiselect>ul.options.hidden){opacity:0;transform:translateY(50px);visibility:hidden}.svelte-1xgvm21.svelte-1xgvm21.svelte-1xgvm21:where(div.multiselect>ul.options>li){cursor:pointer;padding:3pt 2ex;scroll-margin:var(--sms-options-scroll-margin,100px)}.svelte-1xgvm21.svelte-1xgvm21.svelte-1xgvm21:where(div.multiselect>ul.options .user-msg){display:block;padding:3pt 2ex}.svelte-1xgvm21.svelte-1xgvm21.svelte-1xgvm21:where(div.multiselect>ul.options>li.selected){background:var(--sms-li-selected-bg);color:var(--sms-li-selected-color)}.svelte-1xgvm21.svelte-1xgvm21.svelte-1xgvm21:where(div.multiselect>ul.options>li.active){background:var(--sms-li-active-bg,var(--sms-active-color,rgba(0,0,0,.15)))}.svelte-1xgvm21.svelte-1xgvm21.svelte-1xgvm21:where(div.multiselect>ul.options>li.disabled){background:var(--sms-li-disabled-bg,#f5f5f6);color:var(--sms-li-disabled-text,#b8b8b8);cursor:not-allowed}.svelte-1xgvm21.svelte-1xgvm21.svelte-1xgvm21:where(span.max-select-msg){padding:0 3pt}.svelte-1xgvm21.svelte-1xgvm21.svelte-1xgvm21::highlight(sms-search-matches){color:#66cdaa}",
  map: null
};
const MultiSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let is_selected;
  let { activeIndex = null } = $$props;
  let { activeOption = null } = $$props;
  let { createOptionMsg = `Create this option...` } = $$props;
  let { allowUserOptions = false } = $$props;
  let { allowEmpty = false } = $$props;
  let { autocomplete = `off` } = $$props;
  let { autoScroll = true } = $$props;
  let { breakpoint = 800 } = $$props;
  let { defaultDisabledTitle = `This option is disabled` } = $$props;
  let { disabled = false } = $$props;
  let { disabledInputTitle = `This input is disabled` } = $$props;
  let { duplicateOptionMsg = `This option is already selected` } = $$props;
  let { duplicates = false } = $$props;
  let { key = (opt) => `${get_label(opt)}`.toLowerCase() } = $$props;
  let { filterFunc = (opt, searchText2) => {
    if (!searchText2) return true;
    return `${get_label(opt)}`.toLowerCase().includes(searchText2.toLowerCase());
  } } = $$props;
  let { closeDropdownOnSelect = `desktop` } = $$props;
  let { form_input = null } = $$props;
  let { highlightMatches = true } = $$props;
  let { id = null } = $$props;
  let { input = null } = $$props;
  let { inputClass = `` } = $$props;
  let { inputmode = null } = $$props;
  let { invalid = false } = $$props;
  let { liActiveOptionClass = `` } = $$props;
  let { liOptionClass = `` } = $$props;
  let { liSelectedClass = `` } = $$props;
  let { loading = false } = $$props;
  let { matchingOptions = [] } = $$props;
  let { maxOptions = void 0 } = $$props;
  let { maxSelect = null } = $$props;
  let { maxSelectMsg = (current, max) => max > 1 ? `${current}/${max}` : `` } = $$props;
  let { maxSelectMsgClass = `` } = $$props;
  let { name = null } = $$props;
  let { noMatchingOptionsMsg = `No matching options` } = $$props;
  let { open = false } = $$props;
  let { options } = $$props;
  let { outerDiv = null } = $$props;
  let { outerDivClass = `` } = $$props;
  let { parseLabelsAsHtml = false } = $$props;
  let { pattern = null } = $$props;
  let { placeholder = null } = $$props;
  let { removeAllTitle = `Remove all` } = $$props;
  let { removeBtnTitle = `Remove` } = $$props;
  let { minSelect = null } = $$props;
  let { required = false } = $$props;
  let { resetFilterOnAdd = true } = $$props;
  let { searchText = `` } = $$props;
  let { selected = options?.filter((opt) => opt instanceof Object && opt?.preselected).slice(0, maxSelect ?? void 0) ?? [] } = $$props;
  let { sortSelected = false } = $$props;
  let { selectedOptionsDraggable = !sortSelected } = $$props;
  let { ulOptionsClass = `` } = $$props;
  let { ulSelectedClass = `` } = $$props;
  let { value = null } = $$props;
  const selected_to_value = (selected2) => {
    value = maxSelect === 1 ? selected2[0] ?? null : selected2;
  };
  const value_to_selected = (value2) => {
    if (maxSelect === 1) selected = value2 ? [value2] : [];
    else selected = value2 ?? [];
  };
  let wiggle = false;
  if (!(options?.length > 0)) {
    if (allowUserOptions || loading || disabled || allowEmpty) {
      options = [];
    } else {
      console.error(`MultiSelect received no options`);
    }
  }
  if (maxSelect !== null && maxSelect < 1) {
    console.error(`MultiSelect's maxSelect must be null or positive integer, got ${maxSelect}`);
  }
  if (!Array.isArray(selected)) {
    console.error(`MultiSelect's selected prop should always be an array, got ${selected}`);
  }
  if (maxSelect && typeof required === `number` && required > maxSelect) {
    console.error(`MultiSelect maxSelect=${maxSelect} < required=${required}, makes it impossible for users to submit a valid form`);
  }
  if (parseLabelsAsHtml && allowUserOptions) {
    console.warn(`Don't combine parseLabelsAsHtml and allowUserOptions. It's susceptible to XSS attacks!`);
  }
  if (sortSelected && selectedOptionsDraggable) {
    console.warn(`MultiSelect's sortSelected and selectedOptionsDraggable should not be combined as any user re-orderings of selected options will be undone by sortSelected on component re-renders.`);
  }
  if (allowUserOptions && !createOptionMsg && createOptionMsg !== null) {
    console.error(`MultiSelect has allowUserOptions=${allowUserOptions} but createOptionMsg=${createOptionMsg} is falsy. This prevents the "Add option" <span> from showing up, resulting in a confusing user experience.`);
  }
  if (maxOptions && (typeof maxOptions != `number` || maxOptions < 0 || maxOptions % 1 != 0)) {
    console.error(`MultiSelect's maxOptions must be undefined or a positive integer, got ${maxOptions}`);
  }
  createEventDispatcher();
  if (activeIndex !== null && !matchingOptions[activeIndex]) {
    throw `Run time error, activeIndex=${activeIndex} is out of bounds, matchingOptions.length=${matchingOptions.length}`;
  }
  let drag_idx = null;
  let ul_options;
  if ($$props.activeIndex === void 0 && $$bindings.activeIndex && activeIndex !== void 0) $$bindings.activeIndex(activeIndex);
  if ($$props.activeOption === void 0 && $$bindings.activeOption && activeOption !== void 0) $$bindings.activeOption(activeOption);
  if ($$props.createOptionMsg === void 0 && $$bindings.createOptionMsg && createOptionMsg !== void 0) $$bindings.createOptionMsg(createOptionMsg);
  if ($$props.allowUserOptions === void 0 && $$bindings.allowUserOptions && allowUserOptions !== void 0) $$bindings.allowUserOptions(allowUserOptions);
  if ($$props.allowEmpty === void 0 && $$bindings.allowEmpty && allowEmpty !== void 0) $$bindings.allowEmpty(allowEmpty);
  if ($$props.autocomplete === void 0 && $$bindings.autocomplete && autocomplete !== void 0) $$bindings.autocomplete(autocomplete);
  if ($$props.autoScroll === void 0 && $$bindings.autoScroll && autoScroll !== void 0) $$bindings.autoScroll(autoScroll);
  if ($$props.breakpoint === void 0 && $$bindings.breakpoint && breakpoint !== void 0) $$bindings.breakpoint(breakpoint);
  if ($$props.defaultDisabledTitle === void 0 && $$bindings.defaultDisabledTitle && defaultDisabledTitle !== void 0) $$bindings.defaultDisabledTitle(defaultDisabledTitle);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.disabledInputTitle === void 0 && $$bindings.disabledInputTitle && disabledInputTitle !== void 0) $$bindings.disabledInputTitle(disabledInputTitle);
  if ($$props.duplicateOptionMsg === void 0 && $$bindings.duplicateOptionMsg && duplicateOptionMsg !== void 0) $$bindings.duplicateOptionMsg(duplicateOptionMsg);
  if ($$props.duplicates === void 0 && $$bindings.duplicates && duplicates !== void 0) $$bindings.duplicates(duplicates);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0) $$bindings.key(key);
  if ($$props.filterFunc === void 0 && $$bindings.filterFunc && filterFunc !== void 0) $$bindings.filterFunc(filterFunc);
  if ($$props.closeDropdownOnSelect === void 0 && $$bindings.closeDropdownOnSelect && closeDropdownOnSelect !== void 0) $$bindings.closeDropdownOnSelect(closeDropdownOnSelect);
  if ($$props.form_input === void 0 && $$bindings.form_input && form_input !== void 0) $$bindings.form_input(form_input);
  if ($$props.highlightMatches === void 0 && $$bindings.highlightMatches && highlightMatches !== void 0) $$bindings.highlightMatches(highlightMatches);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.input === void 0 && $$bindings.input && input !== void 0) $$bindings.input(input);
  if ($$props.inputClass === void 0 && $$bindings.inputClass && inputClass !== void 0) $$bindings.inputClass(inputClass);
  if ($$props.inputmode === void 0 && $$bindings.inputmode && inputmode !== void 0) $$bindings.inputmode(inputmode);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0) $$bindings.invalid(invalid);
  if ($$props.liActiveOptionClass === void 0 && $$bindings.liActiveOptionClass && liActiveOptionClass !== void 0) $$bindings.liActiveOptionClass(liActiveOptionClass);
  if ($$props.liOptionClass === void 0 && $$bindings.liOptionClass && liOptionClass !== void 0) $$bindings.liOptionClass(liOptionClass);
  if ($$props.liSelectedClass === void 0 && $$bindings.liSelectedClass && liSelectedClass !== void 0) $$bindings.liSelectedClass(liSelectedClass);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
  if ($$props.matchingOptions === void 0 && $$bindings.matchingOptions && matchingOptions !== void 0) $$bindings.matchingOptions(matchingOptions);
  if ($$props.maxOptions === void 0 && $$bindings.maxOptions && maxOptions !== void 0) $$bindings.maxOptions(maxOptions);
  if ($$props.maxSelect === void 0 && $$bindings.maxSelect && maxSelect !== void 0) $$bindings.maxSelect(maxSelect);
  if ($$props.maxSelectMsg === void 0 && $$bindings.maxSelectMsg && maxSelectMsg !== void 0) $$bindings.maxSelectMsg(maxSelectMsg);
  if ($$props.maxSelectMsgClass === void 0 && $$bindings.maxSelectMsgClass && maxSelectMsgClass !== void 0) $$bindings.maxSelectMsgClass(maxSelectMsgClass);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.noMatchingOptionsMsg === void 0 && $$bindings.noMatchingOptionsMsg && noMatchingOptionsMsg !== void 0) $$bindings.noMatchingOptionsMsg(noMatchingOptionsMsg);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
  if ($$props.outerDiv === void 0 && $$bindings.outerDiv && outerDiv !== void 0) $$bindings.outerDiv(outerDiv);
  if ($$props.outerDivClass === void 0 && $$bindings.outerDivClass && outerDivClass !== void 0) $$bindings.outerDivClass(outerDivClass);
  if ($$props.parseLabelsAsHtml === void 0 && $$bindings.parseLabelsAsHtml && parseLabelsAsHtml !== void 0) $$bindings.parseLabelsAsHtml(parseLabelsAsHtml);
  if ($$props.pattern === void 0 && $$bindings.pattern && pattern !== void 0) $$bindings.pattern(pattern);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.removeAllTitle === void 0 && $$bindings.removeAllTitle && removeAllTitle !== void 0) $$bindings.removeAllTitle(removeAllTitle);
  if ($$props.removeBtnTitle === void 0 && $$bindings.removeBtnTitle && removeBtnTitle !== void 0) $$bindings.removeBtnTitle(removeBtnTitle);
  if ($$props.minSelect === void 0 && $$bindings.minSelect && minSelect !== void 0) $$bindings.minSelect(minSelect);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0) $$bindings.required(required);
  if ($$props.resetFilterOnAdd === void 0 && $$bindings.resetFilterOnAdd && resetFilterOnAdd !== void 0) $$bindings.resetFilterOnAdd(resetFilterOnAdd);
  if ($$props.searchText === void 0 && $$bindings.searchText && searchText !== void 0) $$bindings.searchText(searchText);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0) $$bindings.selected(selected);
  if ($$props.sortSelected === void 0 && $$bindings.sortSelected && sortSelected !== void 0) $$bindings.sortSelected(sortSelected);
  if ($$props.selectedOptionsDraggable === void 0 && $$bindings.selectedOptionsDraggable && selectedOptionsDraggable !== void 0) $$bindings.selectedOptionsDraggable(selectedOptionsDraggable);
  if ($$props.ulOptionsClass === void 0 && $$bindings.ulOptionsClass && ulOptionsClass !== void 0) $$bindings.ulOptionsClass(ulOptionsClass);
  if ($$props.ulSelectedClass === void 0 && $$bindings.ulSelectedClass && ulSelectedClass !== void 0) $$bindings.ulSelectedClass(ulSelectedClass);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      selected_to_value(selected);
    }
    {
      value_to_selected(value);
    }
    matchingOptions = options.filter((opt) => filterFunc(opt, searchText) && // remove already selected options from dropdown list unless duplicate selections are allowed
    (!selected.map(key).includes(key(opt)) || duplicates));
    activeOption = matchingOptions[activeIndex ?? -1] ?? null;
    is_selected = (label) => selected.map(get_label).includes(label);
    $$rendered = ` <div class="${[
      "multiselect " + escape(outerDivClass, true) + " svelte-1xgvm21",
      (disabled ? "disabled" : "") + " " + (maxSelect === 1 ? "single" : "") + " " + (open ? "open" : "") + " " + (invalid ? "invalid" : "")
    ].join(" ").trim()}"${add_attribute("title", disabled ? disabledInputTitle : null, 0)}${add_attribute("data-id", id, 0)} role="searchbox" tabindex="-1"${add_attribute("this", outerDiv, 0)}>  <input${add_attribute("name", name, 0)} ${Boolean(required) ? "required" : ""}${add_attribute(
      "value",
      selected.length >= Number(required) ? JSON.stringify(selected) : null,
      0
    )} tabindex="-1" aria-hidden="true" aria-label="ignore this, used only to prevent form submission if select is required but empty" class="form-control svelte-1xgvm21"${add_attribute("this", form_input, 0)}> ${slots["expand-icon"] ? slots["expand-icon"]({ open }) : ` ${validate_component(ChevronExpand, "ExpandIcon").$$render(
      $$result,
      {
        width: "15px",
        style: "min-width: 1em; padding: 0 1pt; cursor: pointer;"
      },
      {},
      {}
    )} `} <ul class="${"selected " + escape(ulSelectedClass, true) + " svelte-1xgvm21"}" aria-label="selected options">${each(selected, (option, idx) => {
      return `<li class="${[
        escape(null_to_empty(liSelectedClass), true) + " svelte-1xgvm21",
        drag_idx === idx ? "active" : ""
      ].join(" ").trim()}" role="option" aria-selected="true"${add_attribute("draggable", selectedOptionsDraggable && !disabled && selected.length > 1, 0)}${add_attribute("style", get_style(option, `selected`), 0)}> ${slots.selected ? slots.selected({ option, idx }) : ` ${slots.default ? slots.default({ option, idx }) : ` ${parseLabelsAsHtml ? `<!-- HTML_TAG_START -->${get_label(option)}<!-- HTML_TAG_END -->` : `${escape(get_label(option))}`} `} `} ${!disabled && (minSelect === null || selected.length > minSelect) ? `<button type="button" title="${escape(removeBtnTitle, true) + " " + escape(get_label(option), true)}" class="remove svelte-1xgvm21">${slots["remove-icon"] ? slots["remove-icon"]({}) : ` ${validate_component(Cross, "CrossIcon").$$render($$result, { width: "15px" }, {}, {})} `} </button>` : ``} </li>`;
    })} <input class="${escape(null_to_empty(inputClass), true) + " svelte-1xgvm21"}"${add_attribute("id", id, 0)} ${disabled ? "disabled" : ""}${add_attribute("autocomplete", autocomplete, 0)}${add_attribute("inputmode", inputmode, 0)}${add_attribute("pattern", pattern, 0)}${add_attribute("placeholder", selected.length == 0 ? placeholder : null, 0)}${add_attribute("aria-invalid", invalid ? `true` : null, 0)} ondrop="return false"${add_attribute("this", input, 0)}${add_attribute("value", searchText, 0)}>  ${slots["after-input"] ? slots["after-input"]({
      selected,
      disabled,
      invalid,
      id,
      placeholder,
      open,
      required
    }) : ``}</ul> ${loading ? `${slots.spinner ? slots.spinner({}) : ` ${validate_component(CircleSpinner, "CircleSpinner").$$render($$result, {}, {}, {})} `}` : ``} ${disabled ? `${slots["disabled-icon"] ? slots["disabled-icon"]({}) : ` ${validate_component(Disabled, "DisabledIcon").$$render(
      $$result,
      {
        width: "14pt",
        style: "margin: 0 2pt;",
        "data-name": "disabled-icon"
      },
      {},
      {}
    )} `}` : `${selected.length > 0 ? `${maxSelect && (maxSelect > 1 || maxSelectMsg) ? `${validate_component(Wiggle, "Wiggle").$$render(
      $$result,
      { angle: 20, wiggle },
      {
        wiggle: ($$value) => {
          wiggle = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<span class="${"max-select-msg " + escape(maxSelectMsgClass, true) + " svelte-1xgvm21"}">${escape(maxSelectMsg?.(selected.length, maxSelect))}</span>`;
        }
      }
    )}` : ``} ${maxSelect !== 1 && selected.length > 1 ? `<button type="button" class="remove remove-all svelte-1xgvm21"${add_attribute("title", removeAllTitle, 0)}>${slots["remove-icon"] ? slots["remove-icon"]({}) : ` ${validate_component(Cross, "CrossIcon").$$render($$result, { width: "15px" }, {}, {})} `}</button>` : ``}` : ``}`}  ${searchText && noMatchingOptionsMsg || options?.length > 0 ? `<ul class="${[
      "options " + escape(ulOptionsClass, true) + " svelte-1xgvm21",
      !open ? "hidden" : ""
    ].join(" ").trim()}" role="listbox"${add_attribute("aria-multiselectable", maxSelect === null || maxSelect > 1, 0)}${add_attribute("aria-expanded", open, 0)}${add_attribute("aria-disabled", disabled ? `true` : null, 0)}${add_attribute("this", ul_options, 0)}>${each(matchingOptions.slice(0, Math.max(0, maxOptions ?? 0) || Infinity), (option, idx) => {
      let { label, disabled: disabled2 = null, title = null, selectedTitle = null, disabledTitle = defaultDisabledTitle } = option instanceof Object ? option : { label: option }, active = activeIndex === idx;
      return `  <li${add_attribute(
        "title",
        disabled2 ? disabledTitle : is_selected(label) && selectedTitle || title,
        0
      )} class="${[
        escape(liOptionClass, true) + " " + escape(active ? liActiveOptionClass : ``, true) + " svelte-1xgvm21",
        (is_selected(label) ? "selected" : "") + " " + (active ? "active" : "") + " " + (disabled2 ? "disabled" : "")
      ].join(" ").trim()}" role="option" aria-selected="false"${add_attribute("style", get_style(option, `option`), 0)}>${slots.option ? slots.option({ option, idx }) : ` ${slots.default ? slots.default({ option, idx }) : ` ${parseLabelsAsHtml ? `<!-- HTML_TAG_START -->${get_label(option)}<!-- HTML_TAG_END -->` : `${escape(get_label(option))}`} `} `} </li>`;
    })} ${searchText ? (() => {
      let text_input_is_duplicate = selected.map(get_label).includes(searchText), is_dupe = !duplicates && text_input_is_duplicate && `dupe`, can_create = Boolean(allowUserOptions && createOptionMsg) && `create`, no_match = Boolean(matchingOptions?.length == 0 && noMatchingOptionsMsg) && `no-match`, msgType = is_dupe || can_create || no_match;
      return `     ${msgType ? (() => {
        let msg = {
          dupe: duplicateOptionMsg,
          create: createOptionMsg,
          "no-match": noMatchingOptionsMsg
        }[msgType];
        return ` <li${add_attribute("title", createOptionMsg, 0)} role="option" aria-selected="false" class="${["user-msg svelte-1xgvm21", ""].join(" ").trim()}"${add_styles({
          "cursor": {
            dupe: `not-allowed`,
            create: `pointer`,
            "no-match": `default`
          }[msgType]
        })}>${slots["user-msg"] ? slots["user-msg"]({ searchText, msgType, msg }) : ` ${escape(msg)} `}</li>`;
      })() : ``}`;
    })() : ``}</ul>` : ``} </div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  MultiSelect as M,
  spring as s
};
