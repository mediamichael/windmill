import { c as create_ssr_component } from "./ssr.js";
import uFuzzy from "@leeoniya/ufuzzy";
const SearchItems = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let plaintextItems;
  let { filter = "" } = $$props;
  let { items } = $$props;
  let { f } = $$props;
  let { filteredItems } = $$props;
  let { opts = {} } = $$props;
  let uf = new uFuzzy(opts);
  function filterItems() {
    let trimmed = filter.trim();
    if (items == void 0 || trimmed.length == 0) {
      filteredItems = items;
      return;
    }
    let idxs = uf.filter(plaintextItems, trimmed) ?? [];
    let info = uf.info(idxs, plaintextItems, trimmed);
    let order = uf.sort(info, plaintextItems, trimmed);
    let result = [];
    for (let i = 0; i < order.length; i++) {
      let infoIdx = order[i];
      result.push({
        ...items[info.idx[infoIdx]],
        marked: uFuzzy.highlight(plaintextItems[info.idx[infoIdx]], info.ranges[infoIdx])
      });
    }
    filteredItems = result;
  }
  if ($$props.filter === void 0 && $$bindings.filter && filter !== void 0) $$bindings.filter(filter);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  if ($$props.f === void 0 && $$bindings.f && f !== void 0) $$bindings.f(f);
  if ($$props.filteredItems === void 0 && $$bindings.filteredItems && filteredItems !== void 0) $$bindings.filteredItems(filteredItems);
  if ($$props.opts === void 0 && $$bindings.opts && opts !== void 0) $$bindings.opts(opts);
  plaintextItems = items?.map((item) => f(item)) ?? [];
  plaintextItems && filter != void 0 && setTimeout(() => filterItems(), 0);
  return ``;
});
export {
  SearchItems as S
};
