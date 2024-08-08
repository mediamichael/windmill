import { c as create_ssr_component, d as createEventDispatcher, b as add_attribute, v as validate_component, f as each, q as missing_component, e as escape } from "./ssr.js";
import { A as Alert } from "./Alert.js";
import { B as Badge } from "./Badge.js";
import "./common.js";
import { g as classNames, k as capitalize } from "./toast.js";
/* empty css                                     */
import "./index2.js";
import { S as Skeleton } from "./Skeleton.js";
import { N as NoItemFound } from "./SchemaForm.js";
import { A as APP_TO_ICON_COMPONENT } from "./index4.js";
import { L as ListFilters } from "./ListFilters.js";
import { I as IntegrationService, c as ScriptService } from "./services.gen.js";
import { L as Loader_2 } from "./loader-2.js";
const PickHubScript = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { kind = "script" } = $$props;
  let { filter = "" } = $$props;
  let { syncQuery = false } = $$props;
  let loading = false;
  let hubNotAvailable = false;
  createEventDispatcher();
  let appFilter = void 0;
  let items = [];
  let allApps = [];
  let apps = [];
  async function getAllApps(filterKind) {
    try {
      hubNotAvailable = false;
      allApps = (await IntegrationService.listHubIntegrations({ kind: filterKind })).map((x) => x.name);
    } catch (err) {
      console.error("Hub is not available");
      allApps = [];
      hubNotAvailable = true;
    }
  }
  let startTs = 0;
  async function applyFilter(filter2, filterKind, appFilter2) {
    try {
      loading = true;
      hubNotAvailable = false;
      const ts = Date.now();
      startTs = ts;
      await new Promise((r) => setTimeout(r, 100));
      if (ts < startTs) return;
      const scripts = filter2.length > 0 ? await ScriptService.queryHubScripts({
        text: `${filter2}`,
        limit: 40,
        kind: filterKind,
        app: appFilter2
      }) : (await ScriptService.getTopHubScripts({
        limit: 40,
        app: appFilter2,
        kind: filterKind
      })).asks ?? [];
      if (ts === startTs) {
        loading = false;
      }
      items = scripts.map((x) => ({
        ...x,
        path: `hub/${x.version_id}/${x.app}/${x.summary.toLowerCase().replaceAll(/\s+/g, "_")}`,
        summary: `${x.summary} (${x.app})`
      }));
    } catch (err) {
      hubNotAvailable = true;
      console.error("Hub not available");
      loading = false;
    }
  }
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0) $$bindings.kind(kind);
  if ($$props.filter === void 0 && $$bindings.filter && filter !== void 0) $$bindings.filter(filter);
  if ($$props.syncQuery === void 0 && $$bindings.syncQuery && syncQuery !== void 0) $$bindings.syncQuery(syncQuery);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    apps = filter.length > 0 ? Array.from(new Set(items?.map((x) => x.app) ?? [])).sort() : allApps;
    {
      applyFilter(filter, kind, appFilter);
    }
    {
      getAllApps(kind);
    }
    $$rendered = `<div class="w-full flex mt-1 items-center gap-2">${slots.default ? slots.default({}) : ``} <div class="relative w-full"><input type="text" placeholder="Search Hub Scripts" class="text-2xl grow !pr-9"${add_attribute("value", filter, 0)}> ${loading ? `${validate_component(Loader_2, "Loader2").$$render(
      $$result,
      {
        class: "animate-spin text-gray-400 absolute right-2 top-2.5"
      },
      {},
      {}
    )}` : ``}</div></div> ${hubNotAvailable ? `<div class="mt-2"></div> ${validate_component(Alert, "Alert").$$render(
      $$result,
      {
        type: "error",
        title: "Hub not available"
      },
      {},
      {}
    )}` : `${items.length > 0 && apps.length > 0 ? `${validate_component(ListFilters, "ListFilters").$$render(
      $$result,
      {
        syncQuery,
        filters: apps,
        resourceType: true,
        selectedFilter: appFilter
      },
      {
        selectedFilter: ($$value) => {
          appFilter = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${items.length == 0 ? `${validate_component(NoItemFound, "NoItemFound").$$render($$result, {}, {}, {})}` : `<ul class="divide-y border rounded-md">${each(items, (item) => {
      return `<li class="flex flex-row w-full"><button class="p-4 gap-4 flex flex-row grow hover:bg-surface-hover bg-surface transition-all items-center rounded-md"><div class="flex items-center gap-4"><div${add_attribute("class", classNames("rounded-md p-1 flex justify-center items-center border", "bg-surface border"), 0)}>${item["app"] in APP_TO_ICON_COMPONENT ? `${validate_component(APP_TO_ICON_COMPONENT[item["app"]] || missing_component, "svelte:component").$$render($$result, { height: 18, width: 18 }, {}, {})}` : ``}</div> <div class="w-full text-left font-normal"><div class="text-primary flex-wrap text-md font-semibold mb-1">${escape(item.summary ?? "")}</div> <div class="text-secondary text-xs">${escape(item.path)}</div> </div></div> ${kind !== "script" ? `${validate_component(Badge, "Badge").$$render($$result, { color: "gray", baseClass: "border" }, {}, {
        default: () => {
          return `${escape(capitalize(kind))}`;
        }
      })}` : ``}</button> </li>`;
    })}</ul>`} ${items.length == 40 ? `<div class="text-tertiary text-sm py-4" data-svelte-h="svelte-ji14pi">There are more items than being displayed. Refine your search.</div>` : ``}` : `<div class="my-2"></div> ${each(Array(10).fill(0), (_) => {
      return `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [0.5, [4]] }, {}, {})}`;
    })}`}`}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  PickHubScript as P
};
