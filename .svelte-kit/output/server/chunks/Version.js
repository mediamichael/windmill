import { c as create_ssr_component, e as escape } from "./ssr.js";
import { a as SettingsService } from "./services.gen.js";
const Version = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let version = "";
  loadVersion();
  async function loadVersion() {
    version = await SettingsService.backendVersion();
  }
  return `<div class="text-secondary text-xs">${escape(version)}</div>`;
});
export {
  Version as V
};
