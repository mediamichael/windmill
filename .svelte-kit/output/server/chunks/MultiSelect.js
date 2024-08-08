import { c as create_ssr_component, v as validate_component, d as createEventDispatcher, e as escape, b as add_attribute, f as each, z as null_to_empty, A as add_styles } from "./ssr.js";
import { V as VirtualList } from "./index3.js";
import { twMerge } from "tailwind-merge";
import { g as get_style, a as get_label } from "./utils2.js";
/* empty css                                          */
import { I as Icon } from "./Icon.js";
import { X } from "./x.js";
const Chevrons_up_down = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m7 15 5 5 5-5" }], ["path", { "d": "m7 9 5-5 5 5" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "chevrons-up-down" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const css = {
  code: ".svelte-1exgrpa.svelte-1exgrpa.svelte-1exgrpa:where(div.multiselect){align-items:center;background:var(--sms-bg);border:var(--sms-border,1pt solid #d3d3d3);border-radius:var(--sms-border-radius,3pt);box-sizing:border-box;color:var(--sms-text-color);cursor:text;display:flex;font-size:var(--sms-font-size,inherit);margin:var(--sms-margin);max-width:var(--sms-max-width);min-height:var(--sms-min-height,22pt);padding:var(--sms-padding,0 3pt);position:relative;width:var(--sms-width)}.svelte-1exgrpa.svelte-1exgrpa.svelte-1exgrpa:where(div.multiselect.open){z-index:var(--sms-open-z-index,4)}.svelte-1exgrpa.svelte-1exgrpa.svelte-1exgrpa:where(div.multiselect:focus-within){border:var(--sms-focus-border,1pt solid var(--sms-active-color,#6495ed))}.svelte-1exgrpa.svelte-1exgrpa.svelte-1exgrpa:where(div.multiselect.disabled){background:var(--sms-disabled-bg,#d3d3d3);cursor:not-allowed}.svelte-1exgrpa.svelte-1exgrpa.svelte-1exgrpa:where(div.multiselect>ul.selected){display:flex;flex:1;flex-wrap:wrap;margin:0;padding:0}.svelte-1exgrpa.svelte-1exgrpa.svelte-1exgrpa:where(div.multiselect>ul.selected>li){align-items:center;background:var(--sms-selected-bg,rgba(0,0,0,.15));border-radius:3pt;color:var(--sms-selected-text-color,var(--sms-text-color));display:flex;line-height:normal;margin:2pt;padding:var(--sms-selected-li-padding,1pt 5pt);transition:.3s;white-space:nowrap}.svelte-1exgrpa.svelte-1exgrpa.svelte-1exgrpa:where(div.multiselect>ul.selected>li[draggable=true]){cursor:grab}.svelte-1exgrpa.svelte-1exgrpa.svelte-1exgrpa:where(div.multiselect>ul.selected>li.active){background:var(--sms-li-active-bg,var(--sms-active-color,rgba(0,0,0,.15)))}.svelte-1exgrpa.svelte-1exgrpa.svelte-1exgrpa:where(div.multiselect button){background:transparent;border:none;border-radius:50%;color:inherit;cursor:pointer;display:flex;margin:0 0 0 3pt;outline:none;padding:0;transition:.2s}.svelte-1exgrpa.svelte-1exgrpa.svelte-1exgrpa:where(div.multiselect button.remove-all){margin:0 3pt}.svelte-1exgrpa.svelte-1exgrpa.svelte-1exgrpa:where(ul.selected>li button:hover,button.remove-all:hover,button:focus){background:var(--sms-remove-btn-hover-bg,rgba(0,0,0,.2));color:var(--sms-remove-btn-hover-color,#87cefa)}.svelte-1exgrpa.svelte-1exgrpa.svelte-1exgrpa:where(div.multiselect input){margin:auto 0;padding:0}.svelte-1exgrpa.svelte-1exgrpa.svelte-1exgrpa:where(div.multiselect>ul.selected>input){background:none;border:none;border-radius:0;color:var(--sms-text-color);cursor:inherit;flex:1;font-size:inherit;min-width:2em;outline:none}div.multiselect.svelte-1exgrpa>ul.selected.svelte-1exgrpa>input.svelte-1exgrpa::-moz-placeholder{color:var(--sms-placeholder-color);opacity:var(--sms-placeholder-opacity);padding-left:5pt}div.multiselect.svelte-1exgrpa>ul.selected.svelte-1exgrpa>input.svelte-1exgrpa::placeholder{color:var(--sms-placeholder-color);opacity:var(--sms-placeholder-opacity);padding-left:5pt}.svelte-1exgrpa.svelte-1exgrpa.svelte-1exgrpa:where(div.multiselect>input.form-control){background:transparent;border:none;opacity:0;outline:none;pointer-events:none;position:absolute;width:2em;z-index:-1}.svelte-1exgrpa.svelte-1exgrpa.svelte-1exgrpa:where(div.multiselect>ul.options){background:var(--sms-options-bg,#fff);border:var(--sms-options-border);border-radius:var(--sms-options-border-radius,1ex);border-width:var(--sms-options-border-width);box-sizing:border-box;left:0;list-style:none;margin:var(--sms-options-margin,inherit);max-height:var(--sms-options-max-height,50vh);overflow:auto;overscroll-behavior:var(--sms-options-overscroll,none);padding:var(--sms-options-padding);position:absolute;top:100%;transition:all .2s;width:100%}.svelte-1exgrpa.svelte-1exgrpa.svelte-1exgrpa:where(div.multiselect>ul.options.hidden){opacity:0;transform:translateY(50px);visibility:hidden}.svelte-1exgrpa.svelte-1exgrpa.svelte-1exgrpa:where(div.multiselect>ul.options>li){cursor:pointer;padding:3pt 2ex;scroll-margin:var(--sms-options-scroll-margin,100px)}.svelte-1exgrpa.svelte-1exgrpa.svelte-1exgrpa:where(div.multiselect>ul.options .user-msg){display:block;padding:3pt 2ex}.svelte-1exgrpa.svelte-1exgrpa.svelte-1exgrpa:where(div.multiselect>ul.options>li.selected){background:var(--sms-li-selected-bg);color:var(--sms-li-selected-color)}.svelte-1exgrpa.svelte-1exgrpa.svelte-1exgrpa:where(div.multiselect>ul.options>li.active){background:var(--sms-li-active-bg,var(--sms-active-color,rgba(0,0,0,.15)))}.svelte-1exgrpa.svelte-1exgrpa.svelte-1exgrpa:where(div.multiselect>ul.options>li.disabled){background:var(--sms-li-disabled-bg,#f5f5f6);color:var(--sms-li-disabled-text,#b8b8b8);cursor:not-allowed}.svelte-1exgrpa.svelte-1exgrpa.svelte-1exgrpa:where(span.max-select-msg){padding:0 3pt}.svelte-1exgrpa.svelte-1exgrpa.svelte-1exgrpa::highlight(sms-search-matches){color:#66cdaa}",
  map: null
};
const MultiSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let is_selected;
  let { activeIndex = null } = $$props;
  let { activeOption = null } = $$props;
  let { createOptionMsg = `Create this option...` } = $$props;
  let { allowUserOptions = false } = $$props;
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
  let { inputStyle = null } = $$props;
  let { inputmode = null } = $$props;
  let { invalid = false } = $$props;
  let { liSelectedClass = `` } = $$props;
  let { liSelectedStyle = null } = $$props;
  let { loading = false } = $$props;
  let { matchingOptions = [] } = $$props;
  let { maxSelect = null } = $$props;
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
  let { style = null } = $$props;
  let { ulSelectedClass = `` } = $$props;
  let { ulSelectedStyle = null } = $$props;
  let { value = null } = $$props;
  let { disableRemoveAll = false } = $$props;
  const selected_to_value = (selected2) => {
    value = maxSelect === 1 ? selected2[0] ?? null : selected2;
  };
  const value_to_selected = (value2) => {
    if (maxSelect === 1) selected = value2 ? [value2] : [];
    else selected = value2 ?? [];
  };
  createEventDispatcher();
  if (activeIndex !== null && !matchingOptions[activeIndex]) {
    throw `Run time error, activeIndex=${activeIndex} is out of bounds, matchingOptions.length=${matchingOptions.length}`;
  }
  let drag_idx = null;
  if ($$props.activeIndex === void 0 && $$bindings.activeIndex && activeIndex !== void 0) $$bindings.activeIndex(activeIndex);
  if ($$props.activeOption === void 0 && $$bindings.activeOption && activeOption !== void 0) $$bindings.activeOption(activeOption);
  if ($$props.createOptionMsg === void 0 && $$bindings.createOptionMsg && createOptionMsg !== void 0) $$bindings.createOptionMsg(createOptionMsg);
  if ($$props.allowUserOptions === void 0 && $$bindings.allowUserOptions && allowUserOptions !== void 0) $$bindings.allowUserOptions(allowUserOptions);
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
  if ($$props.inputStyle === void 0 && $$bindings.inputStyle && inputStyle !== void 0) $$bindings.inputStyle(inputStyle);
  if ($$props.inputmode === void 0 && $$bindings.inputmode && inputmode !== void 0) $$bindings.inputmode(inputmode);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0) $$bindings.invalid(invalid);
  if ($$props.liSelectedClass === void 0 && $$bindings.liSelectedClass && liSelectedClass !== void 0) $$bindings.liSelectedClass(liSelectedClass);
  if ($$props.liSelectedStyle === void 0 && $$bindings.liSelectedStyle && liSelectedStyle !== void 0) $$bindings.liSelectedStyle(liSelectedStyle);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
  if ($$props.matchingOptions === void 0 && $$bindings.matchingOptions && matchingOptions !== void 0) $$bindings.matchingOptions(matchingOptions);
  if ($$props.maxSelect === void 0 && $$bindings.maxSelect && maxSelect !== void 0) $$bindings.maxSelect(maxSelect);
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
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.ulSelectedClass === void 0 && $$bindings.ulSelectedClass && ulSelectedClass !== void 0) $$bindings.ulSelectedClass(ulSelectedClass);
  if ($$props.ulSelectedStyle === void 0 && $$bindings.ulSelectedStyle && ulSelectedStyle !== void 0) $$bindings.ulSelectedStyle(ulSelectedStyle);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.disableRemoveAll === void 0 && $$bindings.disableRemoveAll && disableRemoveAll !== void 0) $$bindings.disableRemoveAll(disableRemoveAll);
  $$result.css.add(css);
  {
    selected_to_value(selected);
  }
  {
    value_to_selected(value);
  }
  matchingOptions = options?.filter((opt) => filterFunc(opt, searchText) && // remove already selected options from dropdown list unless duplicate selections are allowed
  (!selected.map(key).includes(key(opt)) || duplicates));
  activeOption = matchingOptions?.[activeIndex ?? -1] ?? null;
  is_selected = (label) => selected.map(get_label).includes(label);
  {
    form_input?.setCustomValidity(``);
  }
  return ` <div class="${[
    "multiselect " + escape(outerDivClass, true) + " svelte-1exgrpa",
    (disabled ? "disabled" : "") + " " + (maxSelect === 1 ? "single" : "") + " " + (open ? "open" : "") + " " + (invalid ? "invalid" : "")
  ].join(" ").trim()}"${add_attribute("title", disabled ? disabledInputTitle : null, 0)}${add_attribute("data-id", id, 0)} role="searchbox" tabindex="-1"${add_attribute("style", style, 0)}${add_attribute("this", outerDiv, 0)}>  <input${add_attribute("name", name, 0)} ${required ? "required" : ""}${add_attribute(
    "value",
    selected.length >= Number(required) ? JSON.stringify(selected) : null,
    0
  )} tabindex="-1" aria-hidden="true" aria-label="ignore this, used only to prevent form submission if select is required but empty" class="form-control svelte-1exgrpa"${add_attribute("this", form_input, 0)}> ${slots["expand-icon"] ? slots["expand-icon"]({ open }) : ` ${validate_component(Chevrons_up_down, "ChevronsUpDown").$$render($$result, { size: 16 }, {}, {})} `} <ul class="${"selected " + escape(ulSelectedClass, true) + " svelte-1exgrpa"}" aria-label="selected options"${add_attribute("style", ulSelectedStyle, 0)}>${each(selected, (option, idx) => {
    return `<li class="${[
      escape(null_to_empty(liSelectedClass), true) + " svelte-1exgrpa",
      drag_idx === idx ? "active" : ""
    ].join(" ").trim()}" role="option" aria-selected="true"${add_attribute("draggable", selectedOptionsDraggable && !disabled && selected.length > 1, 0)} style="${escape(get_style(option, `selected`), true) + " " + escape(liSelectedStyle, true)}"> ${slots.selected ? slots.selected({ option, idx }) : ` ${slots.default ? slots.default({ option, idx }) : ` ${parseLabelsAsHtml ? `<!-- HTML_TAG_START -->${get_label(option)}<!-- HTML_TAG_END -->` : `${escape(get_label(option))}`} `} `} ${!disabled && (minSelect === null || selected.length > minSelect) ? `<button type="button" title="${escape(removeBtnTitle, true) + " " + escape(get_label(option), true)}" class="remove svelte-1exgrpa">${slots["remove-icon"] ? slots["remove-icon"]({}) : ` ${validate_component(X, "X").$$render(
      $$result,
      {
        size: 20,
        class: "text-primary dark:text-primary-inverse p-0.5"
      },
      {},
      {}
    )} `} </button>` : ``} </li>`;
  })} <input class="${escape(null_to_empty(inputClass), true) + " svelte-1exgrpa"}"${add_attribute("style", inputStyle, 0)}${add_attribute("id", id, 0)} ${disabled ? "disabled" : ""}${add_attribute("autocomplete", autocomplete, 0)}${add_attribute("inputmode", inputmode, 0)}${add_attribute("pattern", pattern, 0)}${add_attribute("placeholder", selected.length === 0 ? placeholder : void 0, 0)}${add_attribute("aria-invalid", invalid ? "true" : void 0, 0)}${add_attribute("this", input, 0)}${add_attribute("value", searchText, 0)}>  ${slots["after-input"] ? slots["after-input"]({
    selected,
    disabled,
    invalid,
    id,
    placeholder,
    open,
    required
  }) : ``}</ul> ${loading ? `${slots.spinner ? slots.spinner({}) : `spinner`}` : ``} ${disabled ? `${slots["disabled-icon"] ? slots["disabled-icon"]({}) : `disable`}` : `${selected.length > 0 ? `${maxSelect !== 1 && selected.length > 1 && !disableRemoveAll ? `<button type="button" class="remove remove-all svelte-1exgrpa"${add_attribute("title", removeAllTitle, 0)}>${slots["remove-icon"] ? slots["remove-icon"]({}) : ` ${validate_component(X, "X").$$render(
    $$result,
    {
      size: 24,
      class: "text-secondary p-1 rounded-full bg-surface hover:bg-surface-secondary"
    },
    {},
    {}
  )} `}</button>` : ``}` : ``}`}  ${searchText && noMatchingOptionsMsg || options?.length > 0 ? `<div class="options bg-surface shadow-md rounded-component svelte-1exgrpa">${validate_component(VirtualList, "VirtualList").$$render(
    $$result,
    {
      width: "100%",
      height: Math.min(32 * matchingOptions.length, 320),
      itemCount: matchingOptions.length,
      itemSize: 32
    },
    {},
    {
      footer: () => {
        return `<div slot="footer" class="h-0 svelte-1exgrpa"></div>`;
      },
      item: ({ style: style2, index }) => {
        let option = matchingOptions[index], { label, disabled: disabled2 = null, title = null, selectedTitle = null, disabledTitle = defaultDisabledTitle } = option instanceof Object ? option : { label: option };
        return `<div slot="item"${add_attribute("style", style2, 0)} class="svelte-1exgrpa"> <div${add_attribute(
          "title",
          disabled2 ? disabledTitle : is_selected(label) && selectedTitle || title,
          0
        )} class="${escape(null_to_empty(twMerge("hover:bg-blue-100 hover:dark:bg-gray-900 cursor-pointer  !px-2 py-1")), true) + " svelte-1exgrpa"}" role="option" aria-selected="false"${add_attribute("style", get_style(option, `option`), 0)}>${slots.option ? slots.option({ option, index }) : ` ${slots.default ? slots.default({ option, index }) : ` ${parseLabelsAsHtml ? `<!-- HTML_TAG_START -->${get_label(option)}<!-- HTML_TAG_END -->` : `${escape(get_label(option))}`} `} `}</div></div>`;
      }
    }
  )} ${searchText ? (() => {
    let text_input_is_duplicate = selected.map(get_label).includes(searchText), is_dupe = !duplicates && text_input_is_duplicate && `dupe`, can_create = Boolean(allowUserOptions && createOptionMsg) && `create`, no_match = Boolean(matchingOptions?.length == 0 && noMatchingOptionsMsg) && `no-match`, msgType = is_dupe || can_create || no_match;
    return `     ${msgType ? (() => {
      let msg = {
        dupe: duplicateOptionMsg,
        create: createOptionMsg,
        "no-match": noMatchingOptionsMsg
      }[msgType];
      return `  <div${add_attribute("title", createOptionMsg, 0)} role="option" aria-selected="false" class="${["user-msg p-1 svelte-1exgrpa", ""].join(" ").trim()}"${add_styles({
        "cursor": {
          dupe: `not-allowed`,
          create: `pointer`,
          "no-match": `default`
        }[msgType]
      })}>${slots["user-msg"] ? slots["user-msg"]({ searchText, msgType, msg }) : ` ${escape(msg)} `}</div>`;
    })() : ``}`;
  })() : ``}</div>` : ``} </div>`;
});
export {
  MultiSelect as M
};
