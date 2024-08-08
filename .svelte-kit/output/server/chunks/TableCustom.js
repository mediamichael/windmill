import { c as create_ssr_component, d as createEventDispatcher, e as escape } from "./ssr.js";
const TableCustom = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { paginated = false } = $$props;
  let { currentPage = 1 } = $$props;
  let { showNext = true } = $$props;
  createEventDispatcher();
  if ($$props.paginated === void 0 && $$bindings.paginated && paginated !== void 0) $$bindings.paginated(paginated);
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0) $$bindings.currentPage(currentPage);
  if ($$props.showNext === void 0 && $$bindings.showNext && showNext !== void 0) $$bindings.showNext(showNext);
  return ` <div class="${"flex flex-col " + escape($$props.class, true) + " min-w-full"}"><div class="inline-block min-w-full py-2 align-middle"><table class="table-custom min-w-full table-auto divide-y"><thead>${slots["header-row"] ? slots["header-row"]({}) : ``}</thead> ${slots.body ? slots.body({}) : ``}</table></div> ${paginated ? `<div class="sticky flex flex-row-reverse text-tertiary mb-6"><button class="${"ml-2 drop-shadow-md " + escape(showNext ? "visible" : "invisible", true)}">Next</button> <button class="${"mx-2 drop-shadow-md " + escape(currentPage === 1 ? "hidden" : "", true)}">Previous</button></div>` : ``}</div>`;
});
export {
  TableCustom as T
};
