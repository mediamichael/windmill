import { c as create_ssr_component, b as add_attribute, s as subscribe, e as escape, f as each, v as validate_component, a as set_store_value } from "../../../../../../../chunks/ssr.js";
import { g as goto } from "../../../../../../../chunks/navigation.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import { i as OauthService, U as UserService, W as WorkspaceService } from "../../../../../../../chunks/services.gen.js";
import { w as workspaceStore, u as userStore, a as usersWorkspaceStore, e as enterpriseLicense } from "../../../../../../../chunks/stores2.js";
import { s as sendUserToast, B as Button, g as classNames, U as parseQueryParams, b as emptyString } from "../../../../../../../chunks/toast.js";
import { g as getUserExt } from "../../../../../../../chunks/user.js";
import { W as WindmillIcon } from "../../../../../../../chunks/WindmillIcon.js";
import { L as LoginPageHeader } from "../../../../../../../chunks/LoginPageHeader.js";
import { D as DarkModeToggle } from "../../../../../../../chunks/DarkModeToggle.js";
import { c as clearStores } from "../../../../../../../chunks/storeUtils.js";
import { s as setLicense } from "../../../../../../../chunks/enterpriseUtils.js";
import "../../../../../../../chunks/client.js";
import "../../../../../../../chunks/index2.js";
/* empty css                                                               */
import "../../../../../../../chunks/common.js";
import { S as Skeleton } from "../../../../../../../chunks/Skeleton.js";
const Github = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = 16 } = $$props;
  let { style = "fill: white;" } = $$props;
  let { class: clazz = "" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("height", `${size}px`, 0)} viewBox="0 0 496 512"${add_attribute("class", clazz, 0)}${add_attribute("style", style, 0)}><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>`;
});
const Gitlab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = 16 } = $$props;
  let { style = "fill: white;" } = $$props;
  let { class: clazz = "" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("height", `${size}px`, 0)} viewBox="0 0 512 512"${add_attribute("class", clazz, 0)}${add_attribute("style", style, 0)}><path fill="currentColor" d="M503.5 204.6L502.8 202.8L433.1 21.02C431.7 17.45 429.2 14.43 425.9 12.38C423.5 10.83 420.8 9.865 417.9 9.57C415 9.275 412.2 9.653 409.5 10.68C406.8 11.7 404.4 13.34 402.4 15.46C400.5 17.58 399.1 20.13 398.3 22.9L351.3 166.9H160.8L113.7 22.9C112.9 20.13 111.5 17.59 109.6 15.47C107.6 13.35 105.2 11.72 102.5 10.7C99.86 9.675 96.98 9.295 94.12 9.587C91.26 9.878 88.51 10.83 86.08 12.38C82.84 14.43 80.33 17.45 78.92 21.02L9.267 202.8L8.543 204.6C-1.484 230.8-2.72 259.6 5.023 286.6C12.77 313.5 29.07 337.3 51.47 354.2L51.74 354.4L52.33 354.8L158.3 434.3L210.9 474L242.9 498.2C246.6 500.1 251.2 502.5 255.9 502.5C260.6 502.5 265.2 500.1 268.9 498.2L300.9 474L353.5 434.3L460.2 354.4L460.5 354.1C482.9 337.2 499.2 313.5 506.1 286.6C514.7 259.6 513.5 230.8 503.5 204.6z"></path></svg>`;
});
const Google = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = 16 } = $$props;
  let { style = "fill: white;" } = $$props;
  let { class: clazz = "" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("height", `${size}px`, 0)} viewBox="0 0 488 512"${add_attribute("class", clazz, 0)}${add_attribute("style", style, 0)}><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>`;
});
const Microsoft = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = 16 } = $$props;
  let { style = "fill: white;" } = $$props;
  let { class: clazz = "" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("height", `${size}px`, 0)} viewBox="0 0 448 512"${add_attribute("class", clazz, 0)}${add_attribute("style", style, 0)}>&gt;<path fill="currentColor" d="M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"></path></svg>`;
});
const Okta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = 16 } = $$props;
  let { style = "fill: white;" } = $$props;
  let { class: clazz = "" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  return `<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1594 1595"${add_attribute("height", `${size}px`, 0)}${add_attribute("class", clazz, 0)}${add_attribute("style", style, 0)}><title>oktaddd-svg</title><path fill="currentColor" id="Layer" fill-rule="evenodd" d="m877 11.5l-32.8 403.8c-15.5-1.8-31-2.7-46.9-2.7-19.9 0-39.4 1.3-58.5 4.4l-18.6-195.6c-0.4-6.2 4.5-11.6 10.7-11.6h33.2l-16-197.8c-0.4-6.2 4.5-11.6 10.2-11.6h108.5c6.2 0 11.1 5.4 10.2 11.1zm-166.1 410.4c-35 8-68.2 20.8-98.8 37.6l-84.6-177.5c-2.6-5.3 0-11.9 5.8-14.2l31.4-11.5-82.8-180.6c-2.6-5.3 0-11.9 5.8-14.2l101.9-37.2c5.7-2.2 11.9 1.4 13.7 7.1 0.4 0 107.6 390.5 107.6 390.5zm-357.4-278l234.3 330.2c-29.7 19.5-56.7 42.5-79.7 69.1l-140.5-138.1c-4.4-4.4-3.9-11.5 0.5-15.5l25.7-21.3-139.6-141.2c-4.4-4.4-3.9-11.5 0.9-15.5l82.9-69.5c4.8-4 11.5-3.1 15 1.8zm136.9 421.4c-21.3 27.9-38.5 58.9-51.4 92.1l-178.9-81.9c-5.8-2.2-8-9.3-4.9-14.6l16.8-28.8-179.8-85c-5.3-2.6-7.5-9.3-4.4-14.6l54-93.8c3.1-5.3 10.2-7.1 15.1-3.6zm-466 24.8c0.9-6.2 7.1-9.7 12.8-8.4l392 102.3c-10.2 33.2-15.9 68.2-16.8 104.5l-196.2-16c-6.2-0.4-10.7-6.2-9.3-12.4l5.7-32.7-198-18.6c-6.2-0.5-10.1-6.2-9.3-12.4l18.6-106.7zm-15 264.7l403.5-37.2c1.8 35.9 8.9 70.9 19.9 103.6l-189.5 52.3c-5.8 1.3-12-2.2-12.9-8.4l-5.7-32.8-192.3 50c-5.7 1.4-11.9-2.2-12.8-8.4l-19.1-106.7c-0.9-6.2 3.1-11.9 9.3-12.4zm63.4 280.7c-3.1-5.3-0.9-11.9 4.4-14.6l365.9-173.5c13.7 32.7 32.3 63.3 54.4 90.7l-160.3 114.2c-4.9 3.6-12 2.2-15.1-3.1l-16.8-29.2-163.4 112.9c-4.9 3.5-12 1.8-15.1-3.5 0 0-54.5-93.9-54-93.9zm525.7-9.3l-111.6 162c-3.5 5.4-10.6 6.2-15.5 2.3l-25.7-21.7-115.1 162c-3.6 4.9-10.2 5.8-15.1 1.8l-83.3-69.5c-4.8-4-5.3-11.1-0.9-15.5l284.8-288.2c24.4 25.6 52.3 48.2 82.4 66.8zm-138.6 395.8c-5.8-2.2-8.4-8.9-5.8-14.2l168.8-368.3c31 15.9 64.7 27.9 99.7 34.5l-49.7 190.4c-1.3 5.7-7.9 9.3-13.7 7.1l-31.4-11.5-52.7 191.7c-1.8 5.7-8 9.3-13.8 7l-101.8-37.1zm337.5-340c19.9 0 39.4-1.4 58.4-4.5l18.6 195.7c0.5 6.2-4.4 11.5-10.6 11.5h-33.2l15.9 197.9c0.9 6.2-3.9 11.5-10.1 11.5h-108.6c-5.7 0-10.6-5.3-10.2-11.5l32.8-403.7c15.5 2.2 31 3.1 47 3.1zm174.5-728.3c-31-15.5-64.2-27.5-99.7-34.5l49.6-190.4c1.8-5.8 8-9.3 13.8-7.1l31.4 11.5 52.7-191.7c1.8-5.7 8-9.3 13.8-7.1l101.8 37.2c5.8 2.2 8.5 8.4 5.8 14.2zm391.6-207.2l-284.9 288.2c-23.9-25.7-51.3-48.2-81.9-66.8l111.6-162.1c3.6-4.8 10.7-6.2 15.5-2.2l25.7 21.7 115.2-162c3.5-4.9 10.6-5.8 15-1.8l83.3 69.5c4.9 4 4.9 11.1 0.5 15.5zm153.7 227.1l-365.9 173.6c-14.2-32.8-32.3-63.4-54.5-90.8l160.3-114.2c4.9-4 12-2.2 15.1 3.1l16.8 28.8 163.5-112.9c4.9-3.1 11.9-1.8 15 3.5l54.5 93.9c3.1 5.3 1.4 11.9-4.4 14.6zm58 146.5l18.6 106.7c0.9 6.2-3.1 11.5-9.3 12.4l-403.5 37.6c-1.8-36.3-8.9-70.8-19.9-103.6l189.6-52.2c5.7-1.8 11.9 2.2 12.8 8.4l5.8 32.8 192.2-50.1c5.8-1.3 12 2.3 12.8 8.5zm-18.6 391.3l-392-102.3c10.2-33.2 16-68.1 16.9-104.4l196.2 15.9c6.2 0.9 10.2 6.2 9.3 12.4l-5.8 32.8 198 18.6c6.2 0.8 10.2 6.1 9.3 12.3l-18.6 106.7c-0.9 6.2-7.1 9.8-12.8 8.5zm-104.1 243.9c-3.1 5.3-10.2 6.6-15.1 3.5l-333.5-230.2c21.3-27.9 38.5-58.9 51.4-92.1l178.9 81.9c5.8 2.7 8 9.3 4.9 14.6l-16.8 28.8 179.8 85c5.3 2.7 7.5 9.3 4.4 14.6zm-446.5-135.9c29.7-19 56.3-42.5 79.8-69l140.4 138.1c4.4 4.4 4.4 11.5-0.5 15.5l-25.7 21.2 139.6 141.3c4 4.4 4 11.5-0.9 15.4l-82.8 69.6c-4.5 3.9-11.6 3.1-15.1-1.8l-234.3-330.3zm-1.8 449.8c-5.7 2.2-11.9-1.3-13.7-7.1l-107.2-390.4c35-8 68.2-20.8 98.8-37.7l84.6 177.6c2.6 5.7 0 12.4-5.8 14.1l-31.4 11.5 82.8 180.7c2.6 5.7 0 11.9-5.8 14.1l-101.8 37.2z"></path></svg>`;
});
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_workspaceStore;
  let $$unsubscribe_userStore;
  let $$unsubscribe_usersWorkspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => value);
  $$unsubscribe_usersWorkspaceStore = subscribe(usersWorkspaceStore, (value) => value);
  let { rd = void 0 } = $$props;
  let { email = void 0 } = $$props;
  let { password = void 0 } = $$props;
  let { error = void 0 } = $$props;
  const providers = [
    {
      type: "github",
      name: "GitHub",
      icon: Github
    },
    {
      type: "gitlab",
      name: "GitLab",
      icon: Gitlab
    },
    {
      type: "google",
      name: "Google",
      icon: Google
    },
    {
      type: "microsoft",
      name: "Microsoft",
      icon: Microsoft
    },
    { type: "okta", name: "Okta", icon: Okta }
  ];
  const providersType = providers.map((p) => p.type);
  let showPassword = false;
  let logins = void 0;
  let saml = void 0;
  async function loadLogins() {
    const allLogins = await OauthService.listOauthLogins();
    logins = allLogins.oauth;
    saml = allLogins.saml;
    showPassword = logins.length == 0 && !saml || email != void 0 && email.length > 0;
  }
  loadLogins();
  if ($$props.rd === void 0 && $$bindings.rd && rd !== void 0) $$bindings.rd(rd);
  if ($$props.email === void 0 && $$bindings.email && email !== void 0) $$bindings.email(email);
  if ($$props.password === void 0 && $$bindings.password && password !== void 0) $$bindings.password(password);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
  error && sendUserToast(error, true);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_userStore();
  $$unsubscribe_usersWorkspaceStore();
  return `<div class="bg-surface px-4 py-8 shadow md:border sm:rounded-lg sm:px-10"><div class="${"grid " + escape(logins && logins.length > 2 ? "grid-cols-2" : "", true) + " gap-4"}">${!logins ? `${each(Array(4), (_) => {
    return `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [0.5, [2.375]] }, {}, {})}`;
  })}` : `${each(providers, ({ type, icon, name }) => {
    return `${logins?.includes(type) ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "light",
        variant: "border",
        startIcon: { icon, classes: "h-4" }
      },
      {},
      {
        default: () => {
          return `${escape(name)} `;
        }
      }
    )}` : ``}`;
  })} ${each(logins.filter((x) => !providersType?.includes(x)), (login) => {
    return `${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "dark",
        variant: "border",
        btnClasses: "mt-2 w-full !border-gray-300"
      },
      {},
      {
        default: () => {
          return `${escape(login)} `;
        }
      }
    )}`;
  })}`} ${saml ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      color: "dark",
      variant: "border",
      btnClasses: "mt-2 w-full !border-gray-300"
    },
    {},
    {
      default: () => {
        return `SSO`;
      }
    }
  )}` : ``}</div> ${saml || logins && logins.length > 0 ? `<div${add_attribute("class", classNames("center-center", logins && logins.length > 0 ? "mt-6" : ""), 0)}>${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: "xs",
      color: "blue",
      variant: "border",
      btnClasses: "!border-none"
    },
    {},
    {
      default: () => {
        return `Log in without third-party`;
      }
    }
  )}</div>` : ``} ${showPassword ? `<div><div class="space-y-6">${``} <div><label for="email" class="block text-sm font-medium leading-6 text-primary" data-svelte-h="svelte-12sqy65">Email</label> <div><input type="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-primary shadow-sm ring-1 ring-inset placeholder:text-secondary focus:ring-2 focus:ring-inset focus:ring-frost-600 sm:text-sm sm:leading-6"${add_attribute("value", email, 0)}></div></div> <div><label for="password" class="block text-sm font-medium leading-6 text-primary" data-svelte-h="svelte-1esu53h">Password</label> <div><input id="password" type="password" autocomplete="current-password" class="block w-full rounded-md border-0 py-1.5 text-shadow shadow-sm ring-1 ring-inset placeholder:text-secondary focus:ring-2 focus:ring-inset focus:ring-frost-600 sm:text-sm sm:leading-6"${add_attribute("value", password, 0)}></div></div> <div class="pt-2"><button ${!email || !password ? "disabled" : ""} class="flex w-full justify-center rounded-md bg-frost-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-frost-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-frost-600">Sign in</button></div></div> ${``}</div>` : ``}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $userStore, $$unsubscribe_userStore;
  let $usersWorkspaceStore, $$unsubscribe_usersWorkspaceStore;
  let $page, $$unsubscribe_page;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_usersWorkspaceStore = subscribe(usersWorkspaceStore, (value) => $usersWorkspaceStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  const email = $page.url.searchParams.get("email") ?? "";
  const password = $page.url.searchParams.get("password") ?? "";
  const error = $page.url.searchParams.get("error") ?? void 0;
  const rd = $page.url.searchParams.get("rd") ?? void 0;
  async function redirectUser() {
    const firstTimeCookie = document.cookie.match("(^|;)\\s*first_time\\s*=\\s*([^;]+)")?.pop() || "0";
    if (Number(firstTimeCookie) > 0 && email === "admin@windmill.dev") {
      goto("/user/first-time");
      return;
    }
    if (rd?.startsWith("http")) {
      window.location.href = rd;
      return;
    }
    if ($workspaceStore) {
      goto(rd ?? "/");
    } else {
      let workspaceTarget = parseQueryParams(rd ?? void 0)["workspace"];
      if (rd && workspaceTarget) {
        set_store_value(workspaceStore, $workspaceStore = workspaceTarget, $workspaceStore);
        goto(rd);
        return;
      }
      if (!$usersWorkspaceStore) {
        try {
          usersWorkspaceStore.set(await WorkspaceService.listUserWorkspaces());
        } catch {
        }
      }
      const allWorkspaces = $usersWorkspaceStore?.workspaces.filter((x) => x.id != "admins");
      if (allWorkspaces?.length == 1) {
        workspaceStore.set(allWorkspaces[0].id);
        set_store_value(userStore, $userStore = await getUserExt($workspaceStore), $userStore);
        if (!$userStore?.is_super_admin && $userStore?.operator) {
          let defaultApp = await WorkspaceService.getWorkspaceDefaultApp({ workspace: $workspaceStore });
          if (!emptyString(defaultApp.default_app_path)) {
            goto(`/apps/get/${defaultApp.default_app_path}`);
          } else {
            goto(rd ?? "/");
          }
        } else {
          goto(rd ?? "/");
        }
      } else if (rd?.startsWith("/user/workspaces")) {
        goto(rd);
      } else if (rd == "/#user-settings") {
        goto(`/user/workspaces#user-settings`);
      } else {
        goto(`/user/workspaces${rd ? `?rd=${encodeURIComponent(rd)}` : ""}`);
      }
    }
  }
  async function redirectIfNecessary() {
    await UserService.getCurrentEmail();
    redirectUser();
  }
  try {
    setLicense();
    redirectIfNecessary();
  } catch {
    clearStores();
  }
  $$unsubscribe_workspaceStore();
  $$unsubscribe_userStore();
  $$unsubscribe_usersWorkspaceStore();
  $$unsubscribe_page();
  $$unsubscribe_enterpriseLicense();
  return `<div class="flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative bg-surface-secondary h-screen">${validate_component(LoginPageHeader, "LoginPageHeader").$$render($$result, {}, {}, {})} <div class="sm:mx-auto sm:w-full sm:max-w-md"><div class="mx-auto flex justify-center">${!$enterpriseLicense || !$enterpriseLicense?.endsWith("_whitelabel") ? `${validate_component(WindmillIcon, "WindmillIcon").$$render(
    $$result,
    {
      height: "80px",
      width: "80px",
      spin: "slow"
    },
    {},
    {}
  )}` : ``}</div> <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-primary" data-svelte-h="svelte-9ix2ep">Log in or sign up</h2> <p class="mt-2 text-center text-sm text-secondary" data-svelte-h="svelte-ssrgj8">Log in or sign up with any of the methods below</p></div> <div${add_attribute("class", classNames("mt-8 sm:mx-auto sm:w-full sm:max-w-xl", "mb-48"), 0)}><div class="flex justify-end">${validate_component(DarkModeToggle, "DarkModeToggle").$$render($$result, { forcedDarkMode: false }, {}, {})}</div> ${validate_component(Login, "Login").$$render($$result, { rd, error, password, email }, {}, {})}</div></div>`;
});
export {
  Page as default
};
