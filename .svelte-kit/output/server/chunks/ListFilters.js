import { c as create_ssr_component, o as onDestroy, b as add_attribute, f as each, v as validate_component, q as missing_component, e as escape } from "./ssr.js";
import { g as classNames } from "./toast.js";
import "./index2.js";
import { B as Badge } from "./Badge.js";
import "./common.js";
/* empty css                                     */
import { A as APP_TO_ICON_COMPONENT } from "./index4.js";
import { U as User } from "./user2.js";
import { F as Folder } from "./VariableEditor.js";
const ListFilters = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filtersAndSelected;
  let { filters } = $$props;
  let { selectedFilter = void 0 } = $$props;
  let { resourceType = false } = $$props;
  let { queryName = "filter" } = $$props;
  let { syncQuery = false } = $$props;
  let { bottomMargin = true } = $$props;
  const queryChange = (url) => {
    if (syncQuery) {
      window.history.pushState(history.state, "", `?${url?.searchParams.toString()}`);
    }
  };
  const eventListener = (e) => {
    if (syncQuery) {
      loadFilterFromUrl();
    }
  };
  onDestroy(() => {
    window.removeEventListener("popstate", (e) => eventListener());
  });
  loadFilterFromUrl();
  function loadFilterFromUrl() {
    let queryValue = new URL(window.location.href).searchParams.get(queryName) ?? void 0;
    selectedFilter = queryValue;
  }
  function getIconComponent(name) {
    return APP_TO_ICON_COMPONENT[name] || APP_TO_ICON_COMPONENT[name.split("_")[0]];
  }
  async function setQuery(url, key, value) {
    if (value != void 0) {
      url.searchParams.set(key, value);
    } else {
      url.searchParams.delete(key);
    }
    queryChange(url);
  }
  if ($$props.filters === void 0 && $$bindings.filters && filters !== void 0) $$bindings.filters(filters);
  if ($$props.selectedFilter === void 0 && $$bindings.selectedFilter && selectedFilter !== void 0) $$bindings.selectedFilter(selectedFilter);
  if ($$props.resourceType === void 0 && $$bindings.resourceType && resourceType !== void 0) $$bindings.resourceType(resourceType);
  if ($$props.queryName === void 0 && $$bindings.queryName && queryName !== void 0) $$bindings.queryName(queryName);
  if ($$props.syncQuery === void 0 && $$bindings.syncQuery && syncQuery !== void 0) $$bindings.syncQuery(syncQuery);
  if ($$props.bottomMargin === void 0 && $$bindings.bottomMargin && bottomMargin !== void 0) $$bindings.bottomMargin(bottomMargin);
  if ($$props.setQuery === void 0 && $$bindings.setQuery && setQuery !== void 0) $$bindings.setQuery(setQuery);
  filtersAndSelected = selectedFilter ? filters.includes(selectedFilter) ? filters : [selectedFilter, ...filters] : filters;
  return `${Array.isArray(filtersAndSelected) && filtersAndSelected.length > 0 ? `<div${add_attribute("class", `gap-2 w-full flex flex-wrap ${bottomMargin ? "my-4" : "mt-4"}`, 0)}>${each(filtersAndSelected, (filter) => {
    return `<div>${validate_component(Badge, "Badge").$$render(
      $$result,
      {
        class: classNames("cursor-pointer inline-flex items-center gap-1 align-middle", filter === selectedFilter ? "hover:bg-blue-200" : "hover:bg-gray-200"),
        color: filter === selectedFilter ? "blue" : "gray",
        baseClass: filter === selectedFilter ? "border border-blue-500" : "border"
      },
      {},
      {
        default: () => {
          return `<span style="height: 12px" class="-mt-0.5">${resourceType ? `${validate_component(getIconComponent(filter) || missing_component, "svelte:component").$$render($$result, { height: "14px", width: "14px" }, {}, {})}` : `${filter.startsWith("u/") ? `${validate_component(User, "User").$$render($$result, { class: "mr-0.5", size: 14 }, {}, {})}` : `${filter.startsWith("f/") ? `${validate_component(Folder, "Folder").$$render($$result, { class: "mr-0.5", size: 14 }, {}, {})}` : ``}`}`}</span> ${escape(filter)} ${filter === selectedFilter ? `✗` : ``} `;
        }
      }
    )} </div>`;
  })}</div>` : ``}`;
});
export {
  ListFilters as L
};
