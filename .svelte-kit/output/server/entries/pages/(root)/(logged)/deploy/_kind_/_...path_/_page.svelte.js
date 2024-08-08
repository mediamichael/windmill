import { c as create_ssr_component, s as subscribe, v as validate_component, e as escape } from "../../../../../../../chunks/ssr.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import { C as CenteredPage } from "../../../../../../../chunks/CenteredPage.js";
import { D as DeployWorkspace } from "../../../../../../../chunks/DeployWorkspace.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let kind;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  function asKind(kind2) {
    return kind2;
  }
  kind = asKind($page.params.kind);
  $$unsubscribe_page();
  return `${validate_component(CenteredPage, "CenteredPage").$$render($$result, {}, {}, {
    default: () => {
      return `<h1 class="mt-6">Deploy ${escape($page.params.kind)} ${escape($page.params.path)}</h1> ${validate_component(DeployWorkspace, "DeployWorkspace").$$render($$result, { kind, initialPath: $page.params.path }, {}, {})}`;
    }
  })}`;
});
export {
  Page as default
};
