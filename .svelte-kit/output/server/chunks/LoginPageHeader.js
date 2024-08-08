import { c as create_ssr_component, e as escape, v as validate_component } from "./ssr.js";
import { a as SettingsService } from "./services.gen.js";
import { T as Tooltip } from "./Tooltip.js";
import { V as Version } from "./Version.js";
import { D as DarkModeToggle } from "./DarkModeToggle.js";
const Uptodate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let uptodate = void 0;
  async function loadVersion() {
    try {
      const res = await SettingsService.backendUptodate();
      if (res != "yes") {
        uptodate = res;
      }
    } catch (e) {
      console.warn("Could not fetch latest version", e);
    }
  }
  loadVersion();
  return `${uptodate ? `<span class="text-blue-400">${escape(uptodate)}  
		${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
    default: () => {
      return `${`How to update?<br>
				- docker: \`docker compose up -d\`<br>
				- <a href="https://github.com/windmill-labs/windmill-helm-charts#install" data-svelte-h="svelte-xjr0ex">helm</a>`}`;
    }
  })}</span>` : ``}`;
});
const LoginPageHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="absolute top-0 right-0 text-2xs text-gray-800 italic px-3 py-1"><div class="flex flex-row gap-2">${validate_component(DarkModeToggle, "DarkModeToggle").$$render($$result, { forcedDarkMode: false }, {}, {})} <div class="font-mono flex-col flex p-2 justify-center">${validate_component(Version, "Version").$$render($$result, {}, {}, {})} ${validate_component(Uptodate, "Uptodate").$$render($$result, {}, {}, {})}</div></div></div>`;
});
export {
  LoginPageHeader as L,
  Uptodate as U
};
