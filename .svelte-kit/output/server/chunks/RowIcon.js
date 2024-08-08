import { c as create_ssr_component, b as add_attribute, v as validate_component } from "./ssr.js";
import { g as classNames } from "./toast.js";
import { B as BarsStaggered } from "./util.js";
import { L as Layout_dashboard } from "./layout-dashboard.js";
import { C as Code_2 } from "./code-2.js";
const RowIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { kind } = $$props;
  let { href = "#" } = $$props;
  const color = {
    script: "bg-blue-50 border-blue-200 dark:bg-blue-800/20 dark:border-blue-500/70",
    flow: "bg-[#f0fdfa] border-[#99f6e4] dark:bg-teal-800/20 dark:border-teal-600/70",
    app: "bg-[#fff7ed] border-orange-300 dark:bg-orange-800/20 dark:border-orange-400/70",
    raw_app: "bg-[#fff7ed] border-orange-300 dark:bg-orange-800/20 dark:border-orange-400/70"
  }[kind];
  const iconColor = {
    script: "#60A5FA",
    flow: "#14b8a6",
    app: "#fb923c",
    raw_app: "#fb923c"
  }[kind];
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0) $$bindings.kind(kind);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  return `<a${add_attribute("href", href, 0)}${add_attribute("class", classNames("rounded-md p-1 flex justify-center items-center border", color), 0)}>${kind === "flow" ? `${validate_component(BarsStaggered, "BarsStaggered").$$render($$result, { size: 20, class: " text-[#14b8a6] p-0.5" }, {}, {})}` : `${kind === "app" || kind === "raw_app" ? `${validate_component(Layout_dashboard, "LayoutDashboard").$$render($$result, { size: 20, color: iconColor }, {}, {})}` : `${kind === "script" ? `${validate_component(Code_2, "Code2").$$render($$result, { size: 20, color: iconColor }, {}, {})}` : ``}`}`}</a>`;
});
export {
  RowIcon as R
};
