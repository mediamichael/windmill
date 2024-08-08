import { c as create_ssr_component, s as subscribe, v as validate_component, e as escape } from "./ssr.js";
import { s as setLicense } from "./enterpriseUtils.js";
import { e as enterpriseLicense } from "./stores2.js";
import { W as WindmillIcon } from "./WindmillIcon.js";
import { L as LoginPageHeader } from "./LoginPageHeader.js";
const CenteredModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  let { subtitle = void 0 } = $$props;
  let { title = "Windmill" } = $$props;
  let { disableLogo = false } = $$props;
  setLicense();
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0) $$bindings.subtitle(subtitle);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.disableLogo === void 0 && $$bindings.disableLogo && disableLogo !== void 0) $$bindings.disableLogo(disableLogo);
  $$unsubscribe_enterpriseLicense();
  return `<div class="center-center min-h-screen p-4 relative bg-surface-secondary"><div class="flex flex-col gap-2 items-center w-full">${!disableLogo && !$enterpriseLicense || !$enterpriseLicense?.endsWith("_whitelabel") ? `<div class="hidden lg:block"><div>${validate_component(WindmillIcon, "WindmillIcon").$$render(
    $$result,
    {
      height: "100px",
      width: "100px",
      spin: "slow"
    },
    {},
    {}
  )}</div> <h2 class="text-center pt-2 text-primary" data-svelte-h="svelte-1r9p6rz">Windmill</h2></div>` : ``} <div class="border rounded-md shadow-md bg-surface w-full max-w-[640px] p-4 sm:py-8 sm:px-10 mb-6 md:mb-20 z-10"><div class="mb-10"><h1 class="text-center text-primary">${escape(title)}</h1> ${subtitle ? `<p class="text-sm text-center text-secondary mt-2">${escape(subtitle)}</p>` : ``}</div> ${slots.default ? slots.default({}) : ``}</div></div> ${validate_component(LoginPageHeader, "LoginPageHeader").$$render($$result, {}, {}, {})}</div>`;
});
export {
  CenteredModal as C
};
