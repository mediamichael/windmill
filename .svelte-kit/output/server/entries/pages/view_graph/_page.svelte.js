import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../../chunks/ssr.js";
import { F as FlowGraph } from "../../../chunks/util.js";
import { d as decodeState } from "../../../chunks/toast.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let content = localStorage.getItem("svelvet");
  const { modules, failureModule } = content ? decodeState(content) : { modules: [], failureModule: void 0 };
  return `${validate_component(FlowGraph, "FlowGraph").$$render($$result, { fullSize: true, modules, failureModule }, {}, {})} <a download="flow.json"${add_attribute(
    "href",
    "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(
      {
        value: { modules, failureModule },
        summary: ""
      },
      null,
      4
    )),
    0
  )}>Download</a>`;
});
export {
  Page as default
};
