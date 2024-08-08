import { c as create_ssr_component, t as compute_rest_props, e as escape, b as add_attribute, f as each, w as spread, y as escape_attribute_value, x as escape_object } from "./ssr.js";
const css = {
  code: '.autocomplete.svelte-r3u5g3.svelte-r3u5g3{display:inline-block;height:2.25em;max-width:100%;min-width:200px;position:relative;vertical-align:top}.autocomplete.svelte-r3u5g3.svelte-r3u5g3:not(.hide-arrow):not(.is-loading):after{border-bottom:3px solid #3273dc;border-left:3px solid #3273dc;border-radius:2px;border-right:0;border-right-color:#3273dc;border-top:0;border-top-color:#3273dc;content:" ";display:block;height:.625em;margin-top:-.4375em;pointer-events:none;position:absolute;right:1.125em;top:50%;transform:rotate(-45deg);transform-origin:center;width:.625em;z-index:4}.autocomplete.show-clear.svelte-r3u5g3.svelte-r3u5g3:not(.hide-arrow):after{right:2.3em}.autocomplete.svelte-r3u5g3 .svelte-r3u5g3{box-sizing:border-box}.autocomplete-input.svelte-r3u5g3.svelte-r3u5g3{font:inherit;height:100%;padding:5px 11px;width:100%}.autocomplete.svelte-r3u5g3:not(.hide-arrow) .autocomplete-input.svelte-r3u5g3{padding-right:2em}.autocomplete.show-clear.svelte-r3u5g3:not(.hide-arrow) .autocomplete-input.svelte-r3u5g3{padding-right:3.2em}.autocomplete.hide-arrow.show-clear.svelte-r3u5g3 .autocomplete-input.svelte-r3u5g3{padding-right:2em}.autocomplete-list.svelte-r3u5g3.svelte-r3u5g3{background:#fff;border:1px solid #999;max-height:calc(15rem + 165px);overflow-y:auto;padding:10px 0;position:relative;top:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%;z-index:99}.autocomplete-list.svelte-r3u5g3.svelte-r3u5g3:empty{padding:0}.autocomplete-list-item.svelte-r3u5g3.svelte-r3u5g3{color:#333;cursor:pointer;line-height:1;padding:5px 15px}.autocomplete-list-item.confirmed.svelte-r3u5g3.svelte-r3u5g3{background-color:#789fed;color:#fff}.autocomplete-list-item.selected.svelte-r3u5g3.svelte-r3u5g3{background-color:#2e69e2;color:#fff}.autocomplete-list-item-no-results.svelte-r3u5g3.svelte-r3u5g3{color:#999;line-height:1;padding:5px 15px}.autocomplete-list-item-create.svelte-r3u5g3.svelte-r3u5g3,.autocomplete-list-item-loading.svelte-r3u5g3.svelte-r3u5g3{line-height:1;padding:5px 15px}.autocomplete-list.hidden.svelte-r3u5g3.svelte-r3u5g3{visibility:hidden}.autocomplete.show-clear.svelte-r3u5g3 .autocomplete-clear-button.svelte-r3u5g3{cursor:pointer;display:block;padding:.3em .6em;position:absolute;right:.1em;text-align:center;top:50%;transform:translateY(-50%);z-index:4}.autocomplete.svelte-r3u5g3 select.svelte-r3u5g3,.autocomplete.svelte-r3u5g3:not(.show-clear) .autocomplete-clear-button.svelte-r3u5g3{display:none}.autocomplete.is-multiple.svelte-r3u5g3 .input-container.svelte-r3u5g3{align-items:stretch;background-color:#fff;border:1px solid #b5b5b5;border-radius:4px;box-shadow:inset 0 1px 2px hsla(0,0%,4%,.1);display:flex;flex-wrap:wrap;height:auto;padding-left:.4em;padding-right:.4em}.autocomplete.is-multiple.svelte-r3u5g3 .tag.svelte-r3u5g3{display:flex;margin-bottom:.3em;margin-top:.5em}.autocomplete.is-multiple.svelte-r3u5g3 .tag.is-delete.svelte-r3u5g3{cursor:pointer}.autocomplete.is-multiple.svelte-r3u5g3 .tags.svelte-r3u5g3{margin-bottom:0;margin-right:.3em}.autocomplete.is-multiple.svelte-r3u5g3 .autocomplete-input.svelte-r3u5g3{background:none;border:none;box-shadow:none;display:flex;flex:1 1 50px;min-width:3em;width:100%}',
  map: null
};
function safeFunction(theFunction, argument) {
  if (typeof theFunction !== "function") {
    console.error("Not a function: " + theFunction + ", argument: " + argument);
    return void 0;
  }
  let result;
  try {
    result = theFunction(argument);
  } catch (error) {
    console.warn("Error executing Autocomplete function on value: " + argument + " function: " + theFunction);
  }
  return result;
}
function safeStringFunction(theFunction, argument) {
  let result = safeFunction(theFunction, argument);
  if (result === void 0 || result === null) {
    result = "";
  }
  if (typeof result !== "string") {
    result = result.toString();
  }
  return result;
}
function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
const SimpleAutocomplete = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showList;
  let hasSelection;
  let clearable;
  let locked;
  let $$restProps = compute_rest_props($$props, [
    "items",
    "searchFunction",
    "labelFieldName",
    "keywordsFieldName",
    "valueFieldName",
    "labelFunction",
    "keywordsFunction",
    "valueFunction",
    "keywordsCleanFunction",
    "textCleanFunction",
    "beforeChange",
    "onChange",
    "onFocus",
    "onBlur",
    "onCreate",
    "selectFirstIfEmpty",
    "minCharactersToSearch",
    "maxItemsToShowInList",
    "multiple",
    "create",
    "ignoreAccents",
    "matchAllKeywords",
    "sortByMatchedKeywords",
    "itemFilterFunction",
    "itemSortFunction",
    "lock",
    "delay",
    "localFiltering",
    "localSorting",
    "cleanUserText",
    "lowercaseKeywords",
    "closeOnBlur",
    "orderableSelection",
    "hideArrow",
    "showClear",
    "clearText",
    "showLoadingIndicator",
    "noResultsText",
    "loadingText",
    "moreItemsText",
    "createText",
    "placeholder",
    "className",
    "inputClassName",
    "inputId",
    "name",
    "selectName",
    "selectId",
    "title",
    "html5autocomplete",
    "autocompleteOffValue",
    "readonly",
    "dropdownClassName",
    "disabled",
    "noInputStyles",
    "required",
    "debug",
    "tabindex",
    "selectedItem",
    "value",
    "highlightedItem",
    "text",
    "highlightFilter"
  ]);
  let { items = [] } = $$props;
  let { searchFunction = false } = $$props;
  let { labelFieldName = void 0 } = $$props;
  let { keywordsFieldName = labelFieldName } = $$props;
  let { valueFieldName = void 0 } = $$props;
  let { labelFunction = function(item) {
    if (item === void 0 || item === null) {
      return "";
    }
    return labelFieldName ? item[labelFieldName] : item;
  } } = $$props;
  let { keywordsFunction = function(item) {
    if (item === void 0 || item === null) {
      return "";
    }
    return keywordsFieldName ? item[keywordsFieldName] : labelFunction(item);
  } } = $$props;
  let { valueFunction = function(item, forceSingle = false) {
    if (item === void 0 || item === null) {
      return item;
    }
    if (!multiple || forceSingle) {
      return valueFieldName ? item[valueFieldName] : item;
    } else {
      return item.map((i) => valueFieldName ? i[valueFieldName] : i);
    }
  } } = $$props;
  let { keywordsCleanFunction = function(keywords) {
    return keywords;
  } } = $$props;
  let { textCleanFunction = function(userEnteredText) {
    return userEnteredText;
  } } = $$props;
  let { beforeChange = function(oldSelectedItem, newSelectedItem) {
    return true;
  } } = $$props;
  let { onChange = function(newSelectedItem) {
  } } = $$props;
  let { onFocus = function() {
  } } = $$props;
  let { onBlur = function() {
  } } = $$props;
  let { onCreate = function(text2) {
    if (debug) {
      console.log("onCreate: " + text2);
    }
  } } = $$props;
  let { selectFirstIfEmpty = false } = $$props;
  let { minCharactersToSearch = 1 } = $$props;
  let { maxItemsToShowInList = 0 } = $$props;
  let { multiple = false } = $$props;
  let { create = false } = $$props;
  let { ignoreAccents = true } = $$props;
  let { matchAllKeywords = true } = $$props;
  let { sortByMatchedKeywords = false } = $$props;
  let { itemFilterFunction = void 0 } = $$props;
  let { itemSortFunction = void 0 } = $$props;
  let { lock = false } = $$props;
  let { delay = 0 } = $$props;
  let { localFiltering = true } = $$props;
  let { localSorting = true } = $$props;
  let { cleanUserText = true } = $$props;
  let { lowercaseKeywords = true } = $$props;
  let { closeOnBlur = false } = $$props;
  let { orderableSelection = false } = $$props;
  let { hideArrow = false } = $$props;
  let { showClear = false } = $$props;
  let { clearText = "&#10006;" } = $$props;
  let { showLoadingIndicator = false } = $$props;
  let { noResultsText = "No results found" } = $$props;
  let { loadingText = "Loading results..." } = $$props;
  let { moreItemsText = "items not shown" } = $$props;
  let { createText = "Not found, add anyway?" } = $$props;
  let { placeholder = void 0 } = $$props;
  let { className = void 0 } = $$props;
  let { inputClassName = void 0 } = $$props;
  let { inputId = void 0 } = $$props;
  let { name = void 0 } = $$props;
  let { selectName = void 0 } = $$props;
  let { selectId = void 0 } = $$props;
  let { title = void 0 } = $$props;
  let { html5autocomplete = void 0 } = $$props;
  let { autocompleteOffValue = "off" } = $$props;
  let { readonly = void 0 } = $$props;
  let { dropdownClassName = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { noInputStyles = false } = $$props;
  let { required = null } = $$props;
  let { debug = false } = $$props;
  let { tabindex = 0 } = $$props;
  let { selectedItem = multiple ? [] : void 0 } = $$props;
  let { value = void 0 } = $$props;
  let { highlightedItem = void 0 } = $$props;
  const uniqueId = "sautocomplete-" + Math.floor(Math.random() * 1e3);
  let input;
  let list;
  let inputContainer;
  let opened = false;
  let loading = false;
  let highlightIndex = -1;
  let { text = void 0 } = $$props;
  let filteredListItems;
  let listItems = [];
  function safeLabelFunction(item) {
    return safeStringFunction(labelFunction, item);
  }
  function safeKeywordsFunction(item) {
    const keywords = safeStringFunction(keywordsFunction, item);
    let result = safeStringFunction(keywordsCleanFunction, keywords);
    result = lowercaseKeywords ? result.toLowerCase().trim() : result;
    if (ignoreAccents) {
      result = removeAccents(result);
    }
    if (debug) {
      console.log("Extracted keywords: '" + result + "' from item: " + JSON.stringify(item));
    }
    return result;
  }
  function prepareListItems() {
    let timerId;
    if (debug) {
      timerId = `Autocomplete prepare list ${inputId ? `(id: ${inputId})` : ""}`;
      console.time(timerId);
      console.log("Prepare items to search");
      console.log("items: " + JSON.stringify(items));
    }
    if (!Array.isArray(items)) {
      console.warn("Autocomplete items / search function did not return array but", items);
      items = [];
    }
    const length = items ? items.length : 0;
    listItems = new Array(length);
    if (length > 0) {
      items.forEach((item, i) => {
        const listItem = getListItem(item);
        if (listItem === void 0) {
          console.log("Undefined item for: ", item);
        }
        listItems[i] = listItem;
      });
    }
    filteredListItems = listItems;
    if (debug) {
      console.log(listItems.length + " items to search");
      console.timeEnd(timerId);
    }
  }
  function getListItem(item) {
    return {
      // keywords representation of the item
      keywords: localFiltering ? safeKeywordsFunction(item) : [],
      // item label
      label: safeLabelFunction(item),
      // store reference to the origial item
      item
    };
  }
  function onSelectedItemChanged() {
    value = valueFunction(selectedItem);
    if (selectedItem && !multiple) {
      text = safeLabelFunction(selectedItem);
    }
    filteredListItems = listItems;
    onChange(selectedItem);
  }
  function unselectItem(tag) {
    if (debug) {
      console.log("unselectItem", tag);
    }
    selectedItem = selectedItem.filter((i) => i !== tag);
    input.focus();
  }
  function highlightFilter(keywords, field) {
    return (item) => {
      let label = item[field];
      const newItem = Object.assign({ highlighted: void 0 }, item);
      newItem.highlighted = label;
      const labelLowercase = label.toLowerCase();
      const labelLowercaseNoAc = ignoreAccents ? removeAccents(labelLowercase) : labelLowercase;
      if (keywords && keywords.length) {
        const positions = [];
        for (let i = 0; i < keywords.length; i++) {
          let keyword = keywords[i];
          if (ignoreAccents) {
            keyword = removeAccents(keyword);
          }
          const keywordLen = keyword.length;
          let pos1 = 0;
          do {
            pos1 = labelLowercaseNoAc.indexOf(keyword, pos1);
            if (pos1 >= 0) {
              let pos2 = pos1 + keywordLen;
              positions.push([pos1, pos2]);
              pos1 = pos2;
            }
          } while (pos1 !== -1);
        }
        if (positions.length > 0) {
          const keywordPatterns = /* @__PURE__ */ new Set();
          for (let i = 0; i < positions.length; i++) {
            const pair = positions[i];
            const pos1 = pair[0];
            const pos2 = pair[1];
            const keywordPattern = labelLowercase.substring(pos1, pos2);
            keywordPatterns.add(keywordPattern);
          }
          for (let keywordPattern of keywordPatterns) {
            if (keywordPattern === "b") {
              continue;
            }
            const reg = new RegExp("(" + keywordPattern + ")", "ig");
            const newHighlighted = newItem.highlighted.replace(reg, "<b>$1</b>");
            newItem.highlighted = newHighlighted;
          }
        }
      }
      return newItem;
    };
  }
  function isConfirmed(listItem) {
    if (!selectedItem) {
      return false;
    }
    if (multiple) {
      return selectedItem.includes(listItem);
    } else {
      return listItem === selectedItem;
    }
  }
  let draggingOver = false;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  if ($$props.searchFunction === void 0 && $$bindings.searchFunction && searchFunction !== void 0) $$bindings.searchFunction(searchFunction);
  if ($$props.labelFieldName === void 0 && $$bindings.labelFieldName && labelFieldName !== void 0) $$bindings.labelFieldName(labelFieldName);
  if ($$props.keywordsFieldName === void 0 && $$bindings.keywordsFieldName && keywordsFieldName !== void 0) $$bindings.keywordsFieldName(keywordsFieldName);
  if ($$props.valueFieldName === void 0 && $$bindings.valueFieldName && valueFieldName !== void 0) $$bindings.valueFieldName(valueFieldName);
  if ($$props.labelFunction === void 0 && $$bindings.labelFunction && labelFunction !== void 0) $$bindings.labelFunction(labelFunction);
  if ($$props.keywordsFunction === void 0 && $$bindings.keywordsFunction && keywordsFunction !== void 0) $$bindings.keywordsFunction(keywordsFunction);
  if ($$props.valueFunction === void 0 && $$bindings.valueFunction && valueFunction !== void 0) $$bindings.valueFunction(valueFunction);
  if ($$props.keywordsCleanFunction === void 0 && $$bindings.keywordsCleanFunction && keywordsCleanFunction !== void 0) $$bindings.keywordsCleanFunction(keywordsCleanFunction);
  if ($$props.textCleanFunction === void 0 && $$bindings.textCleanFunction && textCleanFunction !== void 0) $$bindings.textCleanFunction(textCleanFunction);
  if ($$props.beforeChange === void 0 && $$bindings.beforeChange && beforeChange !== void 0) $$bindings.beforeChange(beforeChange);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0) $$bindings.onChange(onChange);
  if ($$props.onFocus === void 0 && $$bindings.onFocus && onFocus !== void 0) $$bindings.onFocus(onFocus);
  if ($$props.onBlur === void 0 && $$bindings.onBlur && onBlur !== void 0) $$bindings.onBlur(onBlur);
  if ($$props.onCreate === void 0 && $$bindings.onCreate && onCreate !== void 0) $$bindings.onCreate(onCreate);
  if ($$props.selectFirstIfEmpty === void 0 && $$bindings.selectFirstIfEmpty && selectFirstIfEmpty !== void 0) $$bindings.selectFirstIfEmpty(selectFirstIfEmpty);
  if ($$props.minCharactersToSearch === void 0 && $$bindings.minCharactersToSearch && minCharactersToSearch !== void 0) $$bindings.minCharactersToSearch(minCharactersToSearch);
  if ($$props.maxItemsToShowInList === void 0 && $$bindings.maxItemsToShowInList && maxItemsToShowInList !== void 0) $$bindings.maxItemsToShowInList(maxItemsToShowInList);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0) $$bindings.multiple(multiple);
  if ($$props.create === void 0 && $$bindings.create && create !== void 0) $$bindings.create(create);
  if ($$props.ignoreAccents === void 0 && $$bindings.ignoreAccents && ignoreAccents !== void 0) $$bindings.ignoreAccents(ignoreAccents);
  if ($$props.matchAllKeywords === void 0 && $$bindings.matchAllKeywords && matchAllKeywords !== void 0) $$bindings.matchAllKeywords(matchAllKeywords);
  if ($$props.sortByMatchedKeywords === void 0 && $$bindings.sortByMatchedKeywords && sortByMatchedKeywords !== void 0) $$bindings.sortByMatchedKeywords(sortByMatchedKeywords);
  if ($$props.itemFilterFunction === void 0 && $$bindings.itemFilterFunction && itemFilterFunction !== void 0) $$bindings.itemFilterFunction(itemFilterFunction);
  if ($$props.itemSortFunction === void 0 && $$bindings.itemSortFunction && itemSortFunction !== void 0) $$bindings.itemSortFunction(itemSortFunction);
  if ($$props.lock === void 0 && $$bindings.lock && lock !== void 0) $$bindings.lock(lock);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0) $$bindings.delay(delay);
  if ($$props.localFiltering === void 0 && $$bindings.localFiltering && localFiltering !== void 0) $$bindings.localFiltering(localFiltering);
  if ($$props.localSorting === void 0 && $$bindings.localSorting && localSorting !== void 0) $$bindings.localSorting(localSorting);
  if ($$props.cleanUserText === void 0 && $$bindings.cleanUserText && cleanUserText !== void 0) $$bindings.cleanUserText(cleanUserText);
  if ($$props.lowercaseKeywords === void 0 && $$bindings.lowercaseKeywords && lowercaseKeywords !== void 0) $$bindings.lowercaseKeywords(lowercaseKeywords);
  if ($$props.closeOnBlur === void 0 && $$bindings.closeOnBlur && closeOnBlur !== void 0) $$bindings.closeOnBlur(closeOnBlur);
  if ($$props.orderableSelection === void 0 && $$bindings.orderableSelection && orderableSelection !== void 0) $$bindings.orderableSelection(orderableSelection);
  if ($$props.hideArrow === void 0 && $$bindings.hideArrow && hideArrow !== void 0) $$bindings.hideArrow(hideArrow);
  if ($$props.showClear === void 0 && $$bindings.showClear && showClear !== void 0) $$bindings.showClear(showClear);
  if ($$props.clearText === void 0 && $$bindings.clearText && clearText !== void 0) $$bindings.clearText(clearText);
  if ($$props.showLoadingIndicator === void 0 && $$bindings.showLoadingIndicator && showLoadingIndicator !== void 0) $$bindings.showLoadingIndicator(showLoadingIndicator);
  if ($$props.noResultsText === void 0 && $$bindings.noResultsText && noResultsText !== void 0) $$bindings.noResultsText(noResultsText);
  if ($$props.loadingText === void 0 && $$bindings.loadingText && loadingText !== void 0) $$bindings.loadingText(loadingText);
  if ($$props.moreItemsText === void 0 && $$bindings.moreItemsText && moreItemsText !== void 0) $$bindings.moreItemsText(moreItemsText);
  if ($$props.createText === void 0 && $$bindings.createText && createText !== void 0) $$bindings.createText(createText);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.inputClassName === void 0 && $$bindings.inputClassName && inputClassName !== void 0) $$bindings.inputClassName(inputClassName);
  if ($$props.inputId === void 0 && $$bindings.inputId && inputId !== void 0) $$bindings.inputId(inputId);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.selectName === void 0 && $$bindings.selectName && selectName !== void 0) $$bindings.selectName(selectName);
  if ($$props.selectId === void 0 && $$bindings.selectId && selectId !== void 0) $$bindings.selectId(selectId);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.html5autocomplete === void 0 && $$bindings.html5autocomplete && html5autocomplete !== void 0) $$bindings.html5autocomplete(html5autocomplete);
  if ($$props.autocompleteOffValue === void 0 && $$bindings.autocompleteOffValue && autocompleteOffValue !== void 0) $$bindings.autocompleteOffValue(autocompleteOffValue);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0) $$bindings.readonly(readonly);
  if ($$props.dropdownClassName === void 0 && $$bindings.dropdownClassName && dropdownClassName !== void 0) $$bindings.dropdownClassName(dropdownClassName);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.noInputStyles === void 0 && $$bindings.noInputStyles && noInputStyles !== void 0) $$bindings.noInputStyles(noInputStyles);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0) $$bindings.required(required);
  if ($$props.debug === void 0 && $$bindings.debug && debug !== void 0) $$bindings.debug(debug);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0) $$bindings.tabindex(tabindex);
  if ($$props.selectedItem === void 0 && $$bindings.selectedItem && selectedItem !== void 0) $$bindings.selectedItem(selectedItem);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.highlightedItem === void 0 && $$bindings.highlightedItem && highlightedItem !== void 0) $$bindings.highlightedItem(highlightedItem);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
  if ($$props.highlightFilter === void 0 && $$bindings.highlightFilter && highlightFilter !== void 0) $$bindings.highlightFilter(highlightFilter);
  $$result.css.add(css);
  {
    searchFunction || prepareListItems();
  }
  {
    onSelectedItemChanged();
  }
  highlightedItem = filteredListItems && highlightIndex && highlightIndex >= 0 && highlightIndex < filteredListItems.length ? filteredListItems[highlightIndex].item : null;
  showList = opened;
  hasSelection = multiple && selectedItem && selectedItem.length > 0 || !multiple && selectedItem;
  clearable = showClear || (lock || multiple) && hasSelection;
  locked = lock && hasSelection;
  return `<div class="${[
    escape(className ? className : "", true) + " autocomplete select is-fullwidth " + escape(uniqueId, true) + " svelte-r3u5g3",
    (hideArrow || !items.length ? "hide-arrow" : "") + " " + (multiple ? "is-multiple" : "") + " " + (clearable ? "show-clear" : "") + " " + (showLoadingIndicator && loading ? "is-loading" : "")
  ].join(" ").trim()}"><select${add_attribute("name", selectName, 0)}${add_attribute("id", selectId, 0)} ${multiple ? "multiple" : ""} class="svelte-r3u5g3">${!multiple && hasSelection ? `<option${add_attribute("value", valueFunction(selectedItem, true), 0)} selected class="svelte-r3u5g3">${escape(safeLabelFunction(selectedItem))}</option>` : `${multiple && hasSelection ? `${each(selectedItem, (i) => {
    return `<option${add_attribute("value", valueFunction(i, true), 0)} selected class="svelte-r3u5g3">${escape(safeLabelFunction(i))} </option>`;
  })}` : ``}`}</select> <div class="input-container svelte-r3u5g3"${add_attribute("this", inputContainer, 0)}>${multiple && hasSelection ? `${each(selectedItem, (tagItem, i) => {
    return `<div${add_attribute("draggable", true, 0)} class="${["svelte-r3u5g3", draggingOver === i ? "is-active" : ""].join(" ").trim()}">${slots.tag ? slots.tag({
      label: safeLabelFunction(tagItem),
      item: tagItem,
      unselectItem
    }) : ` <div class="tags has-addons svelte-r3u5g3"><span class="tag svelte-r3u5g3">${escape(safeLabelFunction(tagItem))}</span> <span class="tag is-delete svelte-r3u5g3"></span></div> `} </div>`;
  })}` : ``} <input${spread(
    [
      { type: "text" },
      {
        class: escape(inputClassName ? inputClassName : "", true) + " " + escape(noInputStyles ? "" : "input autocomplete-input", true)
      },
      {
        id: escape_attribute_value(inputId ? inputId : "")
      },
      {
        autocomplete: escape_attribute_value(html5autocomplete ? "on" : autocompleteOffValue)
      },
      {
        placeholder: escape_attribute_value(placeholder)
      },
      { name: escape_attribute_value(name) },
      { disabled: disabled || null },
      { required: required || null },
      { title: escape_attribute_value(title) },
      { readonly: readonly || locked || null },
      {
        tabindex: escape_attribute_value(tabindex)
      },
      escape_object($$restProps)
    ],
    { classes: "svelte-r3u5g3" }
  )}${add_attribute("this", input, 0)}${add_attribute("value", text, 0)}> ${clearable ? `<span class="autocomplete-clear-button svelte-r3u5g3"><!-- HTML_TAG_START -->${clearText}<!-- HTML_TAG_END --></span>` : ``}</div> <div class="${escape(dropdownClassName ? dropdownClassName : "", true) + " autocomplete-list " + escape(showList ? "" : "hidden", true) + " is-fullwidth svelte-r3u5g3"}"${add_attribute("this", list, 0)}>${filteredListItems && filteredListItems.length > 0 ? `${slots["dropdown-header"] ? slots["dropdown-header"]({
    nbItems: filteredListItems.length,
    maxItemsToShowInList
  }) : ``} ${each(filteredListItems, (listItem, i) => {
    return `${listItem && (maxItemsToShowInList <= 0 || i < maxItemsToShowInList) ? `<div class="${[
      "autocomplete-list-item svelte-r3u5g3",
      (i === highlightIndex ? "selected" : "") + " " + (isConfirmed(listItem.item) ? "confirmed" : "")
    ].join(" ").trim()}">${slots.item ? slots.item({
      item: listItem.item,
      label: listItem.highlighted ? listItem.highlighted : listItem.label
    }) : ` ${listItem.highlighted ? `<!-- HTML_TAG_START -->${listItem.highlighted}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${listItem.label}<!-- HTML_TAG_END -->`} `} </div>` : ``}`;
  })} ${slots["dropdown-footer"] ? slots["dropdown-footer"]({
    nbItems: filteredListItems.length,
    maxItemsToShowInList
  }) : ` ${maxItemsToShowInList > 0 && filteredListItems.length > maxItemsToShowInList ? `${moreItemsText ? `<div class="autocomplete-list-item-no-results svelte-r3u5g3">...${escape(filteredListItems.length - maxItemsToShowInList)} ${escape(moreItemsText)}</div>` : ``}` : ``} `}` : `${`${create ? `<div class="autocomplete-list-item-create svelte-r3u5g3">${slots.create ? slots.create({ createText }) : `${escape(createText)}`}</div>` : `${noResultsText ? `<div class="autocomplete-list-item-no-results svelte-r3u5g3">${slots["no-results"] ? slots["no-results"]({ noResultsText }) : `${escape(noResultsText)}`}</div>` : ``}`}`}`}</div></div> `;
});
export {
  SimpleAutocomplete as S
};
