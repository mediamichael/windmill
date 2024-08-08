import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape, f as each, s as subscribe } from "./ssr.js";
import { A as Alert } from "./Alert.js";
import { B as Button, D as Chevron_down, k as capitalize, g as classNames, s as sendUserToast } from "./toast.js";
/* empty css                                     */
import { T as Tooltip, I as Info } from "./Tooltip.js";
import { C as CloseButton } from "./CloseButton.js";
import "./common.js";
import { T as TestConnection, S as SecondsInput } from "./TestConnection.js";
import { T as Tabs, a as Tab } from "./Tabs.js";
import { T as TabContent } from "./TabContent.js";
import { k as ConfigService, g as SettingService } from "./services.gen.js";
import { T as Toggle } from "./Toggle.js";
import "./index2.js";
import { twMerge } from "tailwind-merge";
import "yaml";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import "minimatch";
import { I as IconedResourceType, D as Database } from "./IconedResourceType.js";
import { deepEqual } from "fast-equals";
import { T as ToggleButtonGroup, a as ToggleButton } from "./ToggleButtonGroup.js";
import { i as isCloudHosted } from "./cloud.js";
import { e as enterpriseLicense } from "./stores2.js";
import { M as Minus } from "./minus.js";
import { P as Plus } from "./plus.js";
import { P as Password } from "./Password.js";
import { P as Popover } from "./Popover.js";
import { A as Alert_triangle } from "./alert-triangle.js";
import { I as Icon } from "./Icon.js";
import { X } from "./x.js";
const Badge_check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      }
    ],
    ["path", { "d": "m9 12 2 2 4-4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "badge-check" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Badge_x = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      }
    ],
    [
      "line",
      {
        "x1": "15",
        "x2": "9",
        "y1": "9",
        "y2": "15"
      }
    ],
    [
      "line",
      {
        "x1": "9",
        "x2": "15",
        "y1": "9",
        "y2": "15"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "badge-x" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const settings = {
  Core: [
    {
      label: "Base Url",
      description: "Public base url of the instance",
      key: "base_url",
      fieldType: "text",
      placeholder: "https://windmill.com",
      storage: "setting",
      error: "Base url must start with http:// or https:// and not end with / or a space",
      isValid: (value) => value ? value?.startsWith("http") && value.includes("://") && !value?.endsWith("/") && !value?.endsWith(" ") : false
    },
    {
      label: "Email domain",
      description: "Domain to display in webhooks for email triggers (should match the MX record)",
      key: "email_domain",
      fieldType: "text",
      storage: "setting",
      placeholder: "mail.windmill.com"
    },
    {
      label: "Request Size Limit In MB",
      description: "Maximum size of HTTP requests in MB.",
      cloudonly: true,
      key: "request_size_limit_mb",
      fieldType: "number",
      placeholder: "50",
      storage: "setting"
    },
    {
      label: "Default timeout",
      key: "job_default_timeout",
      description: "Default timeout for individual jobs",
      fieldType: "seconds",
      storage: "setting",
      cloudonly: false
    },
    {
      label: "Max Timeout for sync endpoints",
      key: "timeout_wait_result",
      cloudonly: true,
      fieldType: "seconds",
      placeholder: "60",
      storage: "config"
    },
    {
      label: "License Key",
      description: "License Key required to use the EE (switch image for windmill-ee)",
      key: "license_key",
      fieldType: "license_key",
      placeholder: "only needed to prepare upgrade to EE",
      storage: "setting"
    },
    {
      label: "Non-prod instance",
      description: "Whether we should consider the reported usage of this instance as non-prod",
      key: "dev_instance",
      fieldType: "boolean",
      storage: "setting",
      ee_only: "This is only relevant for EE"
    },
    {
      label: "Retention Period in secs",
      key: "retention_period_secs",
      description: "How long to keep the jobs data in the database (max 30 days on CE)",
      fieldType: "seconds",
      placeholder: "30",
      storage: "setting",
      ee_only: "You can only adjust this setting to above 30 days in the EE version",
      cloudonly: false
    },
    {
      label: "Expose metrics",
      description: "Expose prometheus metrics for workers and servers on port 8001 at /metrics",
      key: "expose_metrics",
      fieldType: "boolean",
      storage: "setting",
      ee_only: ""
    },
    {
      label: "S3/Azure for Python/Go Cache & Large Logs",
      description: "Bucket to store large logs and global cache for Python and Go.",
      key: "object_store_cache_config",
      fieldType: "object_store_config",
      storage: "setting",
      ee_only: ""
    },
    {
      label: "Critical Error Channels",
      description: "Channels to send critical errors to. SMTP must be configured for the email channel.",
      key: "critical_error_channels",
      fieldType: "critical_error_channels",
      storage: "setting",
      ee_only: "Channels other than tracing are only available in the EE version"
    },
    {
      label: "Azure OpenAI base path",
      description: "All Windmill AI features will run on the specified deployed model. Format: https://{your-resource-name}.openai.azure.com/openai/deployments/{deployment-id}",
      key: "openai_azure_base_path",
      fieldType: "text",
      storage: "setting",
      ee_only: ""
    },
    {
      label: "Private hub base url",
      description: "Base url of your private hub instance, without trailing slash",
      placeholder: "https://hub.company.com",
      key: "hub_base_url",
      fieldType: "text",
      storage: "setting",
      ee_only: ""
    }
  ],
  "SSO/OAuth": [],
  Registries: [
    {
      label: "Pip Index Url",
      description: "Add private PIP registry",
      key: "pip_index_url",
      fieldType: "text",
      placeholder: "https://username:password@pypi.company.com/simple",
      storage: "setting",
      ee_only: ""
    },
    {
      label: "Pip Extra Index Url",
      description: "Add private extra PIP registry",
      key: "pip_extra_index_url",
      fieldType: "text",
      placeholder: "https://username:password@pypi.company.com/simple",
      storage: "setting",
      ee_only: ""
    },
    {
      label: "Npm Config Registry",
      description: "Add private NPM registry",
      key: "npm_config_registry",
      fieldType: "text",
      placeholder: "https://registry.npmjs.org/:_authToken=npm_FOOBAR",
      storage: "setting",
      ee_only: ""
    },
    {
      label: "Bunfig Install Scopes",
      description: "Add private scoped registries for Bun, See: https://bun.sh/docs/install/registries",
      key: "bunfig_install_scopes",
      fieldType: "text",
      placeholder: '"@myorg3" = { token = "mytoken", url = "https://registry.myorg.com/" }',
      storage: "setting",
      ee_only: ""
    }
  ],
  SMTP: [
    {
      label: "Host",
      key: "smtp_host",
      fieldType: "text",
      placeholder: "smtp.gmail.com",
      storage: "config"
    },
    {
      label: "Port",
      key: "smtp_port",
      fieldType: "number",
      placeholder: "587",
      storage: "config"
    },
    {
      label: "Username",
      key: "smtp_username",
      fieldType: "text",
      placeholder: "ruben@windmill.dev",
      storage: "config"
    },
    {
      label: "Password",
      key: "smtp_password",
      fieldType: "password",
      storage: "config"
    },
    {
      label: "From Address",
      key: "smtp_from",
      placeholder: "noreply@windmill.dev",
      fieldType: "email",
      storage: "config"
    },
    {
      label: "Implicit TLS",
      key: "smtp_tls_implicit",
      fieldType: "boolean",
      storage: "config"
    }
  ],
  "SCIM/SAML": [
    {
      label: "SCIM Token",
      description: "Token used to authenticate requests from the IdP",
      key: "scim_token",
      fieldType: "text",
      placeholder: "mytoken",
      storage: "setting",
      ee_only: ""
    },
    {
      label: "SAML metadata",
      description: "XML metadata url OR content for the SAML IdP",
      key: "saml_metadata",
      fieldType: "textarea",
      placeholder: "https://dev-2578259.okta.com/app/exkaell8gidiiUWrg5d7/sso/saml/metadata ",
      storage: "setting",
      ee_only: ""
    }
  ],
  Debug: [
    {
      label: "Keep Job Directories",
      key: "keep_job_dir",
      fieldType: "boolean",
      tooltip: "Keep Job directories after execution at /tmp/windmill/<worker>/<job_id>",
      storage: "setting"
    },
    {
      label: "Expose Debug Metrics",
      key: "expose_debug_metrics",
      fieldType: "boolean",
      tooltip: "Expose additional metrics (require metrics to be enabled)",
      storage: "setting"
    }
  ],
  Telemetry: [
    {
      label: "Disable telemetry",
      key: "disable_stats",
      fieldType: "boolean",
      storage: "setting"
    }
  ]
};
const settingsKeys = Object.keys(settings);
const CollapseLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let { text } = $$props;
  let { small = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
  if ($$props.small === void 0 && $$bindings.small && small !== void 0) $$bindings.small(small);
  return `<div${add_attribute("class", twMerge("flex", $$props.class), 0)}>${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "border",
      color: "light",
      btnClasses: "text-primary " + (small ? "text-xs" : "") + " ",
      endIcon: {
        icon: Chevron_down,
        classes: open ? "transform rotate-180" : ""
      }
    },
    {},
    {
      default: () => {
        return `${escape(text)}`;
      }
    }
  )}</div> ${open ? `<div>${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
const OAuthSetting = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let enabled;
  let { name } = $$props;
  let { value } = $$props;
  let { login = true } = $$props;
  let allowed_domains = value?.["allowed_domains"] ?? "";
  let tenant = "";
  function changeTenantId(tenant2) {
    if (value && tenant2) {
      {
        if (value["login_config"]) {
          delete value["login_config"];
        }
      }
    }
  }
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.login === void 0 && $$bindings.login && login !== void 0) $$bindings.login(login);
  enabled = value != void 0;
  name == "microsoft" && changeTenantId(tenant);
  return `<div class="flex flex-col gap-1"><label class="text-sm flex gap-4 items-center font-medium text-primary"><div class="w-[120px]">${validate_component(IconedResourceType, "IconedResourceType").$$render($$result, { name, after: true }, {}, {})}</div>${validate_component(Toggle, "Toggle").$$render($$result, { checked: enabled }, {}, {})}</label> ${enabled ? `<div class="p-2 rounded border"><label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-1olgts8">Client Id</span> <input type="text" placeholder="Client Id"${add_attribute("value", value["id"], 0)}></label> <label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-d878s5">Client Secret</span> <input type="text" placeholder="Client Secret"${add_attribute("value", value["secret"], 0)}></label> ${name == "microsoft" ? `<label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-e9wxvh">Tenant Id</span> <input type="text" placeholder="Tenant Id"${add_attribute("value", tenant, 0)}></label>` : `${login ? `<label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-1kzgtrw">Allowed domain</span> <input type="text" placeholder="windmill.dev"${add_attribute("value", allowed_domains, 0)}></label>` : ``}`} ${name == "google" ? `${validate_component(CollapseLink, "CollapseLink").$$render($$result, { text: "Instructions" }, {}, {
    default: () => {
      return `<div class="text-sm text-secondary border p-2" data-svelte-h="svelte-1bera53">Create a new OAuth 2.0 Client <a href="https://console.cloud.google.com/apis/credentials" target="_blank">in Google console</a>
						and set the redirect URI to <code>BASE_URL/user/login_callback/google</code>
						where BASE_URL is what you configured as core BASE_URL</div>`;
    }
  })}` : `${name == "slack" ? `${validate_component(CollapseLink, "CollapseLink").$$render($$result, { text: "Instructions" }, {}, {
    default: () => {
      return `<div class="text-sm text-secondary border p-2" data-svelte-h="svelte-1nmq3jf">Create a new App <a href="https://api.slack.com/apps?new_app=1" target="_blank">in Slack API Console</a>.
					Pick &quot;From an app manifest&quot;, then YAML and paste manifest template found on <a href="https://www.windmill.dev/docs/misc/setup_oauth#slack" target="_blank">Windmill Docs</a> and then paste Client ID and Client Secret here.</div>`;
    }
  })}` : `${name == "microsoft" ? `${validate_component(CollapseLink, "CollapseLink").$$render($$result, { text: "Instructions" }, {}, {
    default: () => {
      return `<div class="text-sm text-secondary border p-2">Create a new OAuth 2.0 Client <a href="https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade" target="_blank" data-svelte-h="svelte-xhfc3u">in Microsoft portal</a>
						&quot;Add&quot; ${escape("->")} &quot;App Registration&quot; -&gt; &quot;Accounts in this organizational directory only (Default
						Directory only - Single tenant)&quot;, and in the &quot;Authentication&quot; tab, set the redirect URI to
						Web and
						<code data-svelte-h="svelte-10gefmq">BASE_URL/user/login_callback/microsoft</code>. Then copy the &quot;Directory (tenant
						ID)&quot; in the tenant ID field. Then copy the Client ID from &quot;Application (client) ID&quot; and
						create a secret in &quot;Client credentials&quot;. Last, include &quot;Sign in&quot; and &quot;read user profile&quot;
						under &quot;Delegated Permissions&quot;.</div>`;
    }
  })}` : ``}`}`}</div>` : ``}</div>`;
});
const OktaSetting = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let enabled;
  let { value } = $$props;
  function changeDomain(domain, custom) {
    if (value) {
      let baseUrl = custom ? `https://${domain}` : `https://${domain}.okta.com`;
      value = {
        ...value,
        login_config: {
          auth_url: `${baseUrl}/oauth2/v1/authorize`,
          token_url: `${baseUrl}/oauth2/v1/token`,
          userinfo_url: `${baseUrl}/oauth2/v1/userinfo`,
          scopes: ["openid", "profile", "email"]
        },
        connect_config: {
          auth_url: `${baseUrl}/oauth2/v1/authorize`,
          token_url: `${baseUrl}/oauth2/v1/token`,
          scopes: ["openid", "profile", "email"]
        }
      };
    }
  }
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    enabled = value != void 0;
    {
      changeDomain(value?.["domain"], value?.["custom"]);
    }
    $$rendered = `<div class="flex flex-col gap-1"><label class="text-sm font-medium text-primary flex gap-4 items-center"><div class="w-[120px]">${validate_component(IconedResourceType, "IconedResourceType").$$render($$result, { name: "okta", after: true }, {}, {})}</div>${validate_component(Toggle, "Toggle").$$render($$result, { checked: enabled }, {}, {})}</label> ${enabled ? `<div class="p-2 rounded border"><label class="block pb-2"><div class="flex gap-2 items-end"><div>${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
      $$result,
      { selected: value["custom"] },
      {
        selected: ($$value) => {
          value["custom"] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: false, label: "Org" }, {}, {})} ${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: true, label: "Custom" }, {}, {})}`;
        }
      }
    )}</div> <div class="grow"><span class="text-primary font-semibold text-sm">${value["custom"] ? `Custom (${escape("https://<domain>")})` : `
								Org (${escape("https://<your org>.okta.com")})`}</span> <input type="text" placeholder="yourorg"${add_attribute("value", value["domain"], 0)}></div></div></label> <label class="block pb-2"><span class="text-primary font-semibold text-sm">Client Id ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
      default: () => {
        return `Client credential from the client ID section of the okta service configuration`;
      }
    })}</span> <input type="text" placeholder="Client Id"${add_attribute("value", value["id"], 0)}></label> <label class="block pb-2"><span class="text-primary font-semibold text-sm">Client Secret ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
      default: () => {
        return `from the CLIENT SECRETS section of the okta service configuration`;
      }
    })}</span> <input type="text" placeholder="Client Secret"${add_attribute("value", value["secret"], 0)}></label> ${validate_component(CollapseLink, "CollapseLink").$$render($$result, { text: "Instructions" }, {}, {
      default: () => {
        return `<div class="text-sm text-secondary border p-2" data-svelte-h="svelte-523oqq">From your Admin page, setup windmill using the service flow <br>Create a new app
					integration <br>a. For &quot;sign-in method&quot; select &quot;OIDC - Open ID Connect&quot; <br>
					b. For &quot;application type&quot; select &quot;Web Appliction&quot; <br>
					Select all of the following options for Grant type of &quot;Client acting on behalf of a user&quot;:
					<br> Authorization Code Refresh Token Implicit (hybrid) <br>
					Allow ID Token with implicit grant type <br>
					Allow Access Token with implicit grant type <br>
					For Refresh Token, select &quot;Rotate token after every use&quot; <br>
					Under &quot;LOGIN&quot;, set the following: <br>&quot;Sign-in redirect URIs&quot;
					\`BASE_URL/user/login_callback/okta\`<br>
					&quot;Sign-out redirect URIs&quot; \`BASE_URL/auth/logout\` <br>&quot;Login initiated by&quot; App Only <br>
					&quot;Initiate login URI&quot; \`BASE_URL/user/login\`</div>`;
      }
    })}</div>` : ``}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const KeycloakSetting = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let enabled;
  let { value } = $$props;
  let org = "";
  function changeOrg(org2) {
    if (value) {
      value = {
        ...value,
        connect_config: {
          auth_url: `${org2}/protocol/openid-connect/auth`,
          token_url: `${org2}/protocol/openid-connect/token`,
          scopes: ["openid", "offline_access"]
        },
        login_config: {
          auth_url: `${org2}/protocol/openid-connect/auth`,
          token_url: `${org2}/protocol/openid-connect/token`,
          userinfo_url: `${org2}/protocol/openid-connect/userinfo`,
          scopes: ["openid", "offline_access"]
        }
      };
    }
  }
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  enabled = value != void 0;
  {
    changeOrg(org);
  }
  return `<div class="flex flex-col gap-1"><label class="text-sm font-medium text-primary flex gap-4 items-center"><div class="w-[120px]">${validate_component(IconedResourceType, "IconedResourceType").$$render($$result, { name: "keycloak", after: true }, {}, {})}</div>${validate_component(Toggle, "Toggle").$$render($$result, { checked: enabled }, {}, {})}</label> ${enabled ? `<div class="border rounded p-2"><label class="block pb-2"><span class="text-primary font-semibold text-sm">Realm Url (${escape("REALM_URL/protocol/openid-connect/auth")})</span> <input type="text" placeholder="yourorg"${add_attribute("value", org, 0)}></label> <label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-1olgts8">Client Id</span> <input type="text" placeholder="Client Id"${add_attribute("value", value["id"], 0)}></label> <label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-uunohp">Client Secret</span> <input type="text" placeholder="Client Secret"${add_attribute("value", value["secret"], 0)}></label></div>` : ``}</div>`;
});
const OauthExtraParams = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { extra_params = {} } = $$props;
  let extra_params_vec = Object.entries(extra_params);
  if ($$props.extra_params === void 0 && $$bindings.extra_params && extra_params !== void 0) $$bindings.extra_params(extra_params);
  return `${each(extra_params_vec, (o) => {
    return `<div class="flex flex-row max-w-md mb-2"><input type="text"${add_attribute("value", o[0], 0)}> <input type="text"${add_attribute("value", o[1], 0)}> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "border",
        color: "red",
        size: "xs",
        btnClasses: "mx-6",
        startIcon: { icon: Minus },
        iconOnly: true
      },
      {},
      {}
    )} </div>`;
  })} <div class="flex items-center mt-1">${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "border",
      color: "blue",
      hover: "yo",
      size: "sm",
      endIcon: { icon: Plus }
    },
    {},
    {
      default: () => {
        return `Add item`;
      }
    }
  )} <span class="ml-2 text-sm text-tertiary">(${escape((extra_params_vec ?? []).length)} item${escape((extra_params_vec ?? []).length > 1 ? "s" : "")})</span></div>`;
});
const OauthScopes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { scopes = [] } = $$props;
  if ($$props.scopes === void 0 && $$bindings.scopes && scopes !== void 0) $$bindings.scopes(scopes);
  return `${scopes && Array.isArray(scopes) ? `${each(scopes, (v) => {
    return `<div class="flex flex-row max-w-md mb-2"><input type="text"${add_attribute("value", v, 0)}> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "border",
        color: "red",
        size: "xs",
        btnClasses: "mx-6",
        startIcon: { icon: Minus },
        iconOnly: true
      },
      {},
      {}
    )} </div>`;
  })}` : ``} <div class="flex items-center mt-1">${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "border",
      color: "blue",
      hover: "yo",
      size: "sm",
      endIcon: { icon: Plus }
    },
    {},
    {
      default: () => {
        return `Add item`;
      }
    }
  )} <span class="ml-2 text-sm text-tertiary">(${escape((scopes ?? []).length)} item${escape((scopes ?? []).length > 1 ? "s" : "")})</span></div>`;
});
const CustomOauth = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { connect_config = {
    scopes: [],
    auth_url: "",
    token_url: "",
    req_body_auth: false,
    extra_params: {},
    extra_params_callback: {}
  } } = $$props;
  if ($$props.connect_config === void 0 && $$bindings.connect_config && connect_config !== void 0) $$bindings.connect_config(connect_config);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (!connect_config) {
        connect_config = {
          scopes: [],
          auth_url: "",
          token_url: "",
          req_body_auth: false,
          extra_params: {},
          extra_params_callback: {}
        };
      }
    }
    $$rendered = `<label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-nwqumt">Auth URL</span> <input type="text" placeholder="https://github.com/login/oauth/authorize"${add_attribute("value", connect_config.auth_url, 0)}></label> <label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-dbe38w">Token URL</span> <input type="text" placeholder="https://github.com/login/oauth/access_token"${add_attribute("value", connect_config.token_url, 0)}></label>  <label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-57worb">Scopes</span> ${validate_component(OauthScopes, "OauthScopes").$$render(
      $$result,
      { scopes: connect_config.scopes },
      {
        scopes: ($$value) => {
          connect_config.scopes = $$value;
          $$settled = false;
        }
      },
      {}
    )}</label>  <label class="block pb-2"><span class="text-primary font-semibold text-sm">Extra Query Args for Authorize Request ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
      default: () => {
        return `Not needed in most cases. Examples of uses: google apis require the 2 extra args
			&quot;access_type=offline&amp;prompt=consent&quot;`;
      }
    })}</span> ${validate_component(OauthExtraParams, "OauthExtraParams").$$render(
      $$result,
      {
        extra_params: connect_config.extra_params
      },
      {
        extra_params: ($$value) => {
          connect_config.extra_params = $$value;
          $$settled = false;
        }
      },
      {}
    )}</label>  <label class="block pb-2"><span class="text-primary font-semibold text-sm">Extra Query Args for Token request ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
      default: () => {
        return `Not needed in most cases`;
      }
    })}</span> ${validate_component(OauthExtraParams, "OauthExtraParams").$$render(
      $$result,
      {
        extra_params: connect_config.extra_params_callback
      },
      {
        extra_params: ($$value) => {
          connect_config.extra_params_callback = $$value;
          $$settled = false;
        }
      },
      {}
    )}</label>  <label class="block pb-2"><span class="text-primary font-semibold text-sm">Payload ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
      default: () => {
        return `Auth (client id/client secret) is passed as basic auth most commonly but can be passed in the
			body x-www-form-urlencoded. Some LinkedIn is an example of OAuth using x-www-form-urlencoded`;
      }
    })}</span> <div>${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        options: {
          left: "in query args",
          right: "in body x-www-form-urlencoded"
        },
        checked: connect_config.req_body_auth
      },
      {
        checked: ($$value) => {
          connect_config.req_body_auth = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></label>`;
  } while (!$$settled);
  return $$rendered;
});
const CustomSso = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { login_config = {
    scopes: [],
    auth_url: "",
    token_url: "",
    userinfo_url: "",
    req_body_auth: false,
    extra_params: {},
    extra_params_callback: {}
  } } = $$props;
  if ($$props.login_config === void 0 && $$bindings.login_config && login_config !== void 0) $$bindings.login_config(login_config);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (!login_config) {
        login_config = {
          scopes: [],
          auth_url: "",
          token_url: "",
          userinfo_url: "",
          req_body_auth: false,
          extra_params: {},
          extra_params_callback: {}
        };
      }
    }
    $$rendered = `<label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-nwqumt">Auth URL</span> <input type="text" placeholder="https://github.com/login/oauth/authorize"${add_attribute("value", login_config.auth_url, 0)}></label> <label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-dbe38w">Token URL</span> <input type="text" placeholder="https://github.com/login/oauth/access_token"${add_attribute("value", login_config.token_url, 0)}></label> <label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-nwulmm">Userinfo URL</span> <input type="text" placeholder="https://github.com/login/oauth/userinfo"${add_attribute("value", login_config.userinfo_url, 0)}></label>  <label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-57worb">Scopes</span> ${validate_component(OauthScopes, "OauthScopes").$$render(
      $$result,
      { scopes: login_config.scopes },
      {
        scopes: ($$value) => {
          login_config.scopes = $$value;
          $$settled = false;
        }
      },
      {}
    )}</label>  <label class="block pb-2"><span class="text-primary font-semibold text-sm">Extra Query Args for Authorize Request ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
      default: () => {
        return `Not needed in most cases. Examples of uses: google apis require the 2 extra args
			&quot;access_type=offline&amp;prompt=consent&quot;`;
      }
    })}</span> ${validate_component(OauthExtraParams, "OauthExtraParams").$$render(
      $$result,
      { extra_params: login_config.extra_params },
      {
        extra_params: ($$value) => {
          login_config.extra_params = $$value;
          $$settled = false;
        }
      },
      {}
    )}</label>  <label class="block pb-2"><span class="text-primary font-semibold text-sm">Extra Query Args for Token request ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
      default: () => {
        return `Not needed in most cases`;
      }
    })}</span> ${validate_component(OauthExtraParams, "OauthExtraParams").$$render(
      $$result,
      {
        extra_params: login_config.extra_params_callback
      },
      {
        extra_params: ($$value) => {
          login_config.extra_params_callback = $$value;
          $$settled = false;
        }
      },
      {}
    )}</label>  <label class="block pb-2"><span class="text-primary font-semibold text-sm">Payload ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
      default: () => {
        return `Auth is passed in query most commonly. LinkedIn is an example of OAuth using
			x-www-form-urlencoded`;
      }
    })}</span> <div>${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        options: {
          left: "in query args",
          right: "in body x-www-form-urlencoded"
        },
        checked: login_config.req_body_auth
      },
      {
        checked: ($$value) => {
          login_config.req_body_auth = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></label>`;
  } while (!$$settled);
  return $$rendered;
});
const AuthentikSetting = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let enabled;
  let { value } = $$props;
  let org = "";
  function changeOrg(org2) {
    if (value) {
      value = {
        ...value,
        connect_config: {
          auth_url: `${org2}/application/o/authorize/`,
          token_url: `${org2}/application/o/token/`,
          scopes: ["openid", "offline_access"]
        },
        login_config: {
          auth_url: `${org2}/application/o/authorize/`,
          token_url: `${org2}/application/o/token/`,
          userinfo_url: `${org2}/application/o/userinfo/`,
          scopes: ["openid", "offline_access", "email"]
        }
      };
    }
  }
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  enabled = value != void 0;
  {
    changeOrg(org);
  }
  return `<div class="flex flex-col gap-1"><label class="text-sm font-medium text-primary flex gap-4 items-center"><div class="w-[120px]">${validate_component(IconedResourceType, "IconedResourceType").$$render($$result, { name: "authentik", after: true }, {}, {})}</div>${validate_component(Toggle, "Toggle").$$render($$result, { checked: enabled }, {}, {})}</label> ${enabled ? `<div class="border rounded p-2"><label class="block pb-2"><span class="text-primary font-semibold text-sm">Authentik Url (${escape("AUTHENTIK_HOST/application/o/authorize/")})</span> <input type="text" placeholder="yourorg"${add_attribute("value", org, 0)}></label> <label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-1olgts8">Client Id</span> <input type="text" placeholder="Client Id"${add_attribute("value", value["id"], 0)}></label> <label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-uunohp">Client Secret</span> <input type="text" placeholder="Client Secret"${add_attribute("value", value["secret"], 0)}></label></div>` : ``}</div>`;
});
const AutheliaSetting = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let enabled;
  let { value } = $$props;
  let org = "";
  function changeOrg(org2) {
    if (value) {
      value = {
        ...value,
        connect_config: {
          auth_url: `${org2}/api/oidc/authorization`,
          token_url: `${org2}/api/oidc/token`,
          scopes: ["openid", "profile", "email", "groups"]
        },
        login_config: {
          auth_url: `${org2}/api/oidc/authorization`,
          token_url: `${org2}/api/oidc/token`,
          userinfo_url: `${org2}/api/oidc/userinfo`,
          scopes: ["openid", "profile", "email", "groups"]
        }
      };
    }
  }
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  enabled = value != void 0;
  {
    changeOrg(org);
  }
  return `<div class="flex flex-col gap-1"><label class="text-sm font-medium text-primary flex gap-4 items-center"><div class="w-[120px]">${validate_component(IconedResourceType, "IconedResourceType").$$render($$result, { name: "authelia", after: true }, {}, {})}</div>${validate_component(Toggle, "Toggle").$$render($$result, { checked: enabled }, {}, {})}</label> ${enabled ? `<div class="border rounded p-2"><label class="block pb-2"><span class="text-primary font-semibold text-sm">Authelia Url (${escape("AUTHELIA_URL/api/oidc/authorization")})</span> <input type="text" placeholder="yourorg"${add_attribute("value", org, 0)}></label> <label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-1olgts8">Client Id</span> <input type="text" placeholder="Client Id"${add_attribute("value", value["id"], 0)}></label> <label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-uunohp">Client Secret</span> <input type="text" placeholder="Client Secret"${add_attribute("value", value["secret"], 0)}></label></div>` : ``}</div>`;
});
const AUTH_URL_SUFFIX = "/ui/oauth2";
const KanidmSetting = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let enabled;
  let derivedBaseUrl;
  let baseUrl;
  let { value } = $$props;
  let proxyUrlValue = void 0;
  function changeValues({ baseUrl: baseUrl2, id }) {
    if (value) {
      value = {
        ...value,
        connect_config: {
          auth_url: `${baseUrl2}${AUTH_URL_SUFFIX}`,
          token_url: `${baseUrl2}/oauth2/token`,
          scopes: ["openid", "profile", "email"]
        },
        login_config: {
          auth_url: `${baseUrl2}${AUTH_URL_SUFFIX}`,
          token_url: `${baseUrl2}/oauth2/token`,
          userinfo_url: `${baseUrl2}/oauth2/openid/${id}/userinfo`,
          scopes: ["openid", "profile", "email"]
        }
      };
      proxyUrlValue = baseUrl2;
    }
  }
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  enabled = value != void 0;
  derivedBaseUrl = value?.connect_config?.auth_url?.replace(AUTH_URL_SUFFIX, "");
  baseUrl = proxyUrlValue ?? derivedBaseUrl ?? "";
  {
    changeValues({ baseUrl, id: value?.id ?? "" });
  }
  return `<div class="flex flex-col gap-1"><label class="text-sm font-medium text-primary flex gap-4 items-center"><div class="w-[120px]">${validate_component(IconedResourceType, "IconedResourceType").$$render($$result, { name: "kanidm", after: true }, {}, {})}</div>${validate_component(Toggle, "Toggle").$$render($$result, { checked: enabled }, {}, {})}</label> ${enabled ? `<div class="border rounded p-2"><label class="block pb-2"><span class="text-primary font-semibold text-sm">Kanidm Url (${escape("KANIDM_URL/ui/oauth2")})</span> <input type="text" placeholder="Base URL"${add_attribute("value", baseUrl, 0)}></label> <label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-1olgts8">Client Id</span> <input type="text" placeholder="Client Id"${add_attribute("value", value["id"], 0)}></label> <label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-uunohp">Client Secret</span> <input type="text" placeholder="Client Secret"${add_attribute("value", value["secret"], 0)}></label></div>` : ``}</div>`;
});
const ZitadelSetting = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let enabled;
  let { value } = $$props;
  let org = "";
  function changeOrg(org2) {
    if (value) {
      value = {
        ...value,
        connect_config: {
          auth_url: `${org2}/oauth/v2/authorize`,
          token_url: `${org2}/oauth/v2/token`,
          scopes: ["openid", "profile", "email"]
        },
        login_config: {
          auth_url: `${org2}/oauth/v2/authorize`,
          token_url: `${org2}/oauth/v2/token`,
          userinfo_url: `${org2}/oidc/v1/userinfo`,
          scopes: ["openid", "profile", "email"]
        }
      };
    }
  }
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  enabled = value != void 0;
  {
    changeOrg(org);
  }
  return `<div class="flex flex-col gap-1"><label class="text-sm font-medium text-primary flex gap-4 items-center"><div class="w-[120px]">${validate_component(IconedResourceType, "IconedResourceType").$$render($$result, { name: "zitadel", after: true }, {}, {})}</div>${validate_component(Toggle, "Toggle").$$render($$result, { checked: enabled }, {}, {})}</label> ${enabled ? `<div class="border rounded p-2"><label class="block pb-2"><span class="text-primary font-semibold text-sm">Zitadel Url (${escape("ZITADEL_URL/oauth/v2/authorize")})</span> <input type="text" placeholder="yourorg"${add_attribute("value", org, 0)}></label> <label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-1olgts8">Client Id</span> <input type="text" placeholder="Client Id"${add_attribute("value", value["id"], 0)}></label> <label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-uunohp">Client Secret</span> <input type="text" placeholder="Client Secret"${add_attribute("value", value["secret"], 0)}></label></div>` : ``}</div>`;
});
const ObjectStoreConfigSettings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { bucket_config = void 0 } = $$props;
  if ($$props.bucket_config === void 0 && $$bindings.bucket_config && bucket_config !== void 0) $$bindings.bucket_config(bucket_config);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    bucket_config?.type == "S3" && bucket_config.allow_http == void 0 && (bucket_config.allow_http = true);
    $$rendered = `<div>${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        options: { right: "Enable" },
        checked: Boolean(bucket_config)
      },
      {},
      {}
    )}</div> ${bucket_config ? `<div class="flex gap-2">${validate_component(Button, "Button").$$render(
      $$result,
      {
        spacingSize: "sm",
        size: "xs",
        btnClasses: "h-8",
        color: "light",
        variant: "border"
      },
      {},
      {
        default: () => {
          return `${`${validate_component(Database, "Database").$$render($$result, { class: "mr-2 !h-4 !w-4" }, {}, {})}`}
			Test from a server`;
        }
      }
    )} ${validate_component(TestConnection, "TestConnection").$$render(
      $$result,
      {
        args: bucket_config,
        resourceType: "s3_bucket",
        workspaceOverride: "admins",
        buttonTextOverride: "Test from a worker"
      },
      {},
      {}
    )}</div> ${validate_component(Tabs, "Tabs").$$render(
      $$result,
      { selected: bucket_config.type },
      {
        selected: ($$value) => {
          bucket_config.type = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Tab, "Tab").$$render($$result, { size: "sm", value: "S3" }, {}, {
            default: () => {
              return `S3`;
            }
          })} ${validate_component(Tab, "Tab").$$render($$result, { size: "sm", value: "Azure" }, {}, {
            default: () => {
              return `Azure Blob`;
            }
          })}`;
        }
      }
    )} ${bucket_config.type === "S3" ? `<label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-1dsatji">Bucket</span> <input type="text" placeholder="bucket-name"${add_attribute("value", bucket_config.bucket, 0)}></label> <label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-z5efy4">Region</span> <span class="text-tertiary text-2xs" data-svelte-h="svelte-4f4x1d">If left empty, will be derived automatically from $AWS_REGION</span> <input type="text"${add_attribute("value", bucket_config.region, 0)}></label> <label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-1xyd2gu">Access Key ID</span> <span class="text-tertiary text-2xs" data-svelte-h="svelte-19a43zy">If left empty, will be derived automatically from $AWS_ACCESS_KEY_ID, pod or ec2 profile</span> <input type="text"${add_attribute("value", bucket_config.access_key, 0)}></label> <label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-1m2zqcp">Secret Key</span> <span class="text-tertiary text-2xs" data-svelte-h="svelte-1n6jnao">If left empty, will be derived automatically from $AWS_SECRET_KEY, pod or ec2 profile</span> <input type="password"${add_attribute("value", bucket_config.secret_key, 0)}></label> <label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-gys547">Endpoint</span> <span class="text-tertiary text-2xs" data-svelte-h="svelte-1k7p2ex">Only needed for non AWS S3 providers like R2 or MinIo</span> <input type="text"${add_attribute("value", bucket_config.endpoint, 0)}></label> <div class="block pb-2"><span class="text-tertiary text-2xs" data-svelte-h="svelte-z8e8wo">Disable if using https only policy</span> <div>${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        options: { right: "allow http" },
        checked: bucket_config.allow_http
      },
      {
        checked: ($$value) => {
          bucket_config.allow_http = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>` : `${bucket_config.type === "Azure" ? `<label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-1129wra">Account Name</span> <input type="text" placeholder="account-name"${add_attribute("value", bucket_config.accountName, 0)}></label> <label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-xupvcm">Container Name</span> <input type="text" placeholder="container-name"${add_attribute("value", bucket_config.containerName, 0)}></label> <label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-1ys3bs3">Access Key</span> <input type="password"${add_attribute("value", bucket_config.accessKey, 0)}></label> <label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-38e0iw">Tenant ID <span class="text-2xs text-tertiary">(optional)</span></span> <input type="text"${add_attribute("value", bucket_config.tenantId, 0)}></label> <label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-w8rklb">Client ID <span class="text-2xs text-tertiary">(optional)</span></span> <input type="text"${add_attribute("value", bucket_config.clientId, 0)}></label> <label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-1gt3a0">Endpoint <span class="text-2xs text-tertiary">(optional)</span></span> <span class="text-tertiary text-2xs" data-svelte-h="svelte-stx9v5">Only needed for non Azure Blob providers like Azurite</span> <input type="text"${add_attribute("value", bucket_config.endpoint, 0)}></label>` : `<div>Unknown bucket type ${escape(bucket_config["type"])}</div>`}`}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
function parseDate(license_key) {
  let splitted = license_key.split(".");
  if (splitted.length >= 3) {
    try {
      let i = parseInt(splitted[1]);
      let date = new Date(i * 1e3);
      return date.toLocaleDateString();
    } catch {
    }
  }
  return void 0;
}
const InstanceSettings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  let { tab = "Core" } = $$props;
  let { hideTabs = false } = $$props;
  let { hideSave = false } = $$props;
  let values = {};
  let initialOauths = {};
  let initialRequirePreexistingUserForOauth = false;
  let requirePreexistingUserForOauth = false;
  let ssoOrOauth = "sso";
  let latestKeyRenewalAttempt = null;
  let serverConfig = {};
  let initialValues = {};
  loadSettings();
  async function loadSettings() {
    try {
      serverConfig = await ConfigService.getConfig({ name: "server" }) ?? {};
    } catch (e) {
      console.log("Sever config not found, assuming it's first setup");
    }
    async function getValue(key, storage) {
      if (storage == "setting") {
        return SettingService.getGlobal({ key });
      } else if (storage == "config") {
        return serverConfig[key];
      }
    }
    initialOauths = await SettingService.getGlobal({ key: "oauths" }) ?? {};
    requirePreexistingUserForOauth = await SettingService.getGlobal({
      key: "require_preexisting_user_for_oauth"
    }) ?? false;
    initialRequirePreexistingUserForOauth = requirePreexistingUserForOauth;
    oauths = JSON.parse(JSON.stringify(initialOauths));
    initialValues = Object.fromEntries((await Promise.all(Object.entries(settings).map(async ([_, y]) => await Promise.all(y.map(async (x) => [x.key, await getValue(x.key, x.storage)]))))).flat());
    values = JSON.parse(JSON.stringify(initialValues));
    if (values["base_url"] == void 0) {
      values["base_url"] = window.location.origin;
    }
    if (values["retention_period_secs"] == void 0) {
      values["retention_period_secs"] = 60 * 60 * 24 * 30;
    }
    if (values["base_url"] == void 0) {
      values["base_url"] = "http://localhost";
    }
    latestKeyRenewalAttempt = await SettingService.getLatestKeyRenewalAttempt();
  }
  async function saveSettings() {
    if (values) {
      const allSettings = Object.values(settings).flatMap((x) => Object.entries(x));
      const newServerConfig = Object.fromEntries(allSettings.filter((x) => x[1].storage == "config" && values?.[x[1].key] && values?.[x[1].key] != "").map((x) => [x[1].key, values?.[x[1].key]]));
      if (!deepEqual(newServerConfig, serverConfig)) {
        await ConfigService.updateConfig({
          name: "server",
          requestBody: newServerConfig
        });
        serverConfig = JSON.parse(JSON.stringify(newServerConfig));
      }
      await Promise.all(allSettings.filter((x) => {
        return x[1].storage == "setting" && !deepEqual(initialValues?.[x[1].key], values?.[x[1].key]) && (values?.[x[1].key] != "" || initialValues?.[x[1].key] != void 0 || initialValues?.[x[1].key] != null);
      }).map(async ([_, x]) => {
        await SettingService.setGlobal({
          key: x.key,
          requestBody: { value: values?.[x.key] }
        });
      }));
      initialValues = JSON.parse(JSON.stringify(values));
      if (!deepEqual(initialOauths, oauths)) {
        await SettingService.setGlobal({
          key: "oauths",
          requestBody: { value: oauths }
        });
        initialOauths = JSON.parse(JSON.stringify(oauths));
      }
      if (initialRequirePreexistingUserForOauth !== requirePreexistingUserForOauth) {
        await SettingService.setGlobal({
          key: "require_preexisting_user_for_oauth",
          requestBody: { value: requirePreexistingUserForOauth }
        });
      }
    } else {
      console.error("Values not loaded");
    }
    sendUserToast("Settings updated");
  }
  let oauths = {};
  let to = "";
  const windmillBuiltins = [
    "github",
    "gitlab",
    "bitbucket",
    "slack",
    "gsheets",
    "gdrive",
    "gmail",
    "gcal",
    "gforms",
    "gcloud",
    "gworkspace",
    "basecamp",
    "linkedin",
    "quickbooks",
    "visma"
  ];
  let oauth_name = void 0;
  let clientName = "";
  let renewing = false;
  async function renewLicenseKey() {
    renewing = true;
    try {
      await SettingService.renewLicenseKey();
      sendUserToast("Key renewal successful");
      loadSettings();
    } catch (err) {
      latestKeyRenewalAttempt = await SettingService.getLatestKeyRenewalAttempt();
      throw err;
    } finally {
      renewing = false;
    }
  }
  let opening = false;
  async function openCustomerPortal() {
    opening = true;
    try {
      const url = await SettingService.createCustomerPortalSession();
      window.open(url, "_blank");
    } finally {
      opening = false;
    }
  }
  if ($$props.tab === void 0 && $$bindings.tab && tab !== void 0) $$bindings.tab(tab);
  if ($$props.hideTabs === void 0 && $$bindings.hideTabs && hideTabs !== void 0) $$bindings.hideTabs(hideTabs);
  if ($$props.hideSave === void 0 && $$bindings.hideSave && hideSave !== void 0) $$bindings.hideSave(hideSave);
  if ($$props.saveSettings === void 0 && $$bindings.saveSettings && saveSettings !== void 0) $$bindings.saveSettings(saveSettings);
  if ($$props.renewLicenseKey === void 0 && $$bindings.renewLicenseKey && renewLicenseKey !== void 0) $$bindings.renewLicenseKey(renewLicenseKey);
  if ($$props.openCustomerPortal === void 0 && $$bindings.openCustomerPortal && openCustomerPortal !== void 0) $$bindings.openCustomerPortal(openCustomerPortal);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="pb-8"> ${validate_component(Tabs, "Tabs").$$render(
      $$result,
      { hideTabs, selected: tab },
      {
        selected: ($$value) => {
          tab = $$value;
          $$settled = false;
        }
      },
      {
        content: () => {
          return `<div class="pt-4"></div> ${each(Object.keys(settings), (category) => {
            return `${validate_component(TabContent, "TabContent").$$render($$result, { value: category }, {}, {
              default: () => {
                return `${category == "SMTP" ? `<div class="text-secondary pb-4 text-xs" data-svelte-h="svelte-4uey4i">Setting SMTP unlocks sending emails upon adding new users to the workspace or the
							instance.</div>` : `${category == "Telemetry" ? `<div class="text-secondary pb-4 text-xs" data-svelte-h="svelte-14j0nsy">Anonymous usage data is collected to help improve Windmill.
							<br>The following information is collected:
							<ul class="list-disc list-inside pl-2"><li>version</li> <li>number and total duration of jobs</li> <li>accounts usage</li> <li>login type usage</li> <li>workers usage</li> <li>vcpus usage</li> </ul></div> ${$enterpriseLicense ? `${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    variant: "border",
                    color: "light",
                    btnClasses: "w-auto",
                    wrapperClasses: "mb-4",
                    size: "xs"
                  },
                  {},
                  {
                    default: () => {
                      return `Send usage`;
                    }
                  }
                )}` : ``}` : ``}`} ${category == "SSO/OAuth" ? `<div>${validate_component(Tabs, "Tabs").$$render(
                  $$result,
                  { class: "mt-2 mb-4", selected: ssoOrOauth },
                  {
                    selected: ($$value) => {
                      ssoOrOauth = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    default: () => {
                      return `${validate_component(Tab, "Tab").$$render($$result, { value: "sso" }, {}, {
                        default: () => {
                          return `SSO`;
                        }
                      })} ${validate_component(Tab, "Tab").$$render($$result, { value: "oauth" }, {}, {
                        default: () => {
                          return `OAuth`;
                        }
                      })} `;
                    }
                  }
                )}</div> <div class="mb-6">${ssoOrOauth === "sso" ? `${!$enterpriseLicense || $enterpriseLicense.endsWith("_pro") ? `${validate_component(Alert, "Alert").$$render(
                  $$result,
                  {
                    type: "warning",
                    title: "Limited to 10 SSO users"
                  },
                  {},
                  {
                    default: () => {
                      return `Without EE, the number of SSO users is limited to 10. SCIM/SAML is available on
										EE
									`;
                    }
                  }
                )}` : ``} <div class="py-1"></div> ${validate_component(Alert, "Alert").$$render($$result, { type: "info", title: "Single Sign On" }, {}, {
                  default: () => {
                    return `When at least one of the below option is set, users will be able to login to
									Windmill via their third-party account.
									<br> To test SSO, the recommended workflow is to to save the settings and try to
									login in an incognito window.
								`;
                  }
                })} <div class="flex flex-col gap-2 py-4">${validate_component(OAuthSetting, "OAuthSetting").$$render(
                  $$result,
                  { name: "google", value: oauths["google"] },
                  {
                    value: ($$value) => {
                      oauths["google"] = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )} ${validate_component(OAuthSetting, "OAuthSetting").$$render(
                  $$result,
                  {
                    name: "microsoft",
                    value: oauths["microsoft"]
                  },
                  {
                    value: ($$value) => {
                      oauths["microsoft"] = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )} ${validate_component(OktaSetting, "OktaSetting").$$render(
                  $$result,
                  { value: oauths["okta"] },
                  {
                    value: ($$value) => {
                      oauths["okta"] = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )} ${validate_component(OAuthSetting, "OAuthSetting").$$render(
                  $$result,
                  { name: "github", value: oauths["github"] },
                  {
                    value: ($$value) => {
                      oauths["github"] = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )} ${validate_component(OAuthSetting, "OAuthSetting").$$render(
                  $$result,
                  { name: "gitlab", value: oauths["gitlab"] },
                  {
                    value: ($$value) => {
                      oauths["gitlab"] = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )} ${validate_component(OAuthSetting, "OAuthSetting").$$render(
                  $$result,
                  {
                    name: "jumpcloud",
                    value: oauths["jumpcloud"]
                  },
                  {
                    value: ($$value) => {
                      oauths["jumpcloud"] = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )} ${validate_component(KeycloakSetting, "KeycloakSetting").$$render(
                  $$result,
                  { value: oauths["keycloak"] },
                  {
                    value: ($$value) => {
                      oauths["keycloak"] = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )} ${validate_component(AuthentikSetting, "AuthentikSetting").$$render(
                  $$result,
                  { value: oauths["authentik"] },
                  {
                    value: ($$value) => {
                      oauths["authentik"] = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )} ${validate_component(AutheliaSetting, "AutheliaSetting").$$render(
                  $$result,
                  { value: oauths["authelia"] },
                  {
                    value: ($$value) => {
                      oauths["authelia"] = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )} ${validate_component(KanidmSetting, "KanidmSetting").$$render(
                  $$result,
                  { value: oauths["kanidm"] },
                  {
                    value: ($$value) => {
                      oauths["kanidm"] = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )} ${validate_component(ZitadelSetting, "ZitadelSetting").$$render(
                  $$result,
                  { value: oauths["zitadel"] },
                  {
                    value: ($$value) => {
                      oauths["zitadel"] = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )} ${each(Object.keys(oauths), (k) => {
                  return `${![
                    "authelia",
                    "authentik",
                    "google",
                    "microsoft",
                    "github",
                    "gitlab",
                    "jumpcloud",
                    "okta",
                    "keycloak",
                    "slack",
                    "kanidm",
                    "zitadel"
                  ].includes(k) && "login_config" in oauths[k] ? `${oauths[k] ? `<div class="flex flex-col gap-2 pb-4"><div class="flex flex-row items-center gap-2"><label class="text-md font-medium text-primary">${escape(k)}</label> ${validate_component(CloseButton, "CloseButton").$$render($$result, {}, {}, {})}</div> <div class="p-2 border rounded"><label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-1olgts8">Client Id</span> <input type="text" placeholder="Client Id"${add_attribute("value", oauths[k]["id"], 0)}></label> <label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-d878s5">Client Secret</span> <input type="text" placeholder="Client Secret"${add_attribute("value", oauths[k]["secret"], 0)}></label> ${!windmillBuiltins.includes(k) && k != "slack" ? `${validate_component(CustomSso, "CustomSso").$$render(
                    $$result,
                    { login_config: oauths[k]["login_config"] },
                    {
                      login_config: ($$value) => {
                        oauths[k]["login_config"] = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}` : ``}</div> </div>` : ``}` : ``}`;
                })}</div> <div class="flex gap-2 py-4"><input type="text" placeholder="client_id"${add_attribute("value", clientName, 0)}> ${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    variant: "border",
                    color: "blue",
                    hover: "yo",
                    size: "sm",
                    endIcon: { icon: Plus },
                    disabled: clientName == ""
                  },
                  {},
                  {
                    default: () => {
                      return `Add custom SSO client ${escape(!$enterpriseLicense ? "(requires ee)" : "")} `;
                    }
                  }
                )}</div> <div class="flex gap-2 py-4">${validate_component(Toggle, "Toggle").$$render(
                  $$result,
                  {
                    options: {
                      right: "Require users to have been added manually to windmill to sign in through OAuth"
                    },
                    checked: requirePreexistingUserForOauth
                  },
                  {
                    checked: ($$value) => {
                      requirePreexistingUserForOauth = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )} </div>` : `${ssoOrOauth === "oauth" ? `${validate_component(Alert, "Alert").$$render($$result, { type: "info", title: "OAuth Resources" }, {}, {
                  default: () => {
                    return `When one of the below option is set, you will be able to create a specific
									resource containing a token automatically generated by the third-party provider.
									<br>
									To test it after setting an oauth client, go to the Resources menu and create a new
									one of the type of your oauth client (i.e. a &#39;github&#39; resource if you set Github OAuth).
								`;
                  }
                })} <div class="py-1"></div> ${validate_component(OAuthSetting, "OAuthSetting").$$render(
                  $$result,
                  {
                    login: false,
                    name: "slack",
                    value: oauths["slack"]
                  },
                  {
                    value: ($$value) => {
                      oauths["slack"] = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )} <div class="py-1"></div> ${each(Object.keys(oauths), (k) => {
                  return `${oauths[k] && !("login_config" in oauths[k]) ? `${!["slack"].includes(k) && oauths[k] ? `<div class="flex flex-col gap-2 pb-4"><div class="flex flex-row items-center gap-2"><label class="text-md font-medium text-primary">${escape(k)}</label> ${validate_component(CloseButton, "CloseButton").$$render($$result, {}, {}, {})}</div> <div class="p-2 border rounded"><label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-1olgts8">Client Id</span> <input type="text" placeholder="Client Id"${add_attribute("value", oauths[k]["id"], 0)}></label> <label class="block pb-2"><span class="text-primary font-semibold text-sm" data-svelte-h="svelte-d878s5">Client Secret</span> <input type="text" placeholder="Client Secret"${add_attribute("value", oauths[k]["secret"], 0)}></label> ${!windmillBuiltins.includes(k) && k != "slack" ? `${validate_component(CustomOauth, "CustomOauth").$$render(
                    $$result,
                    {
                      connect_config: oauths[k]["connect_config"]
                    },
                    {
                      connect_config: ($$value) => {
                        oauths[k]["connect_config"] = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}` : ``}</div> </div>` : ``}` : ``}`;
                })} <div class="flex gap-2"><select name="oauth_name" id="oauth_name"><option${add_attribute("value", void 0, 0)}>Select an OAuth client</option><option value="custom" data-svelte-h="svelte-1l5aqf9">Fully Custom (requires ee)</option>${each(windmillBuiltins, (name) => {
                  return `<option${add_attribute("value", name, 0)}>${escape(capitalize(name))}</option>`;
                })}</select> ${`<input type="text"${add_attribute("value", "", 0)} disabled>`} ${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    variant: "border",
                    color: "blue",
                    hover: "yo",
                    size: "sm",
                    endIcon: { icon: Plus },
                    disabled: !oauth_name
                  },
                  {},
                  {
                    default: () => {
                      return `Add OAuth client ${escape("")} `;
                    }
                  }
                )} </div>` : ``}`} </div>` : ``} <div><div class="flex-col flex gap-2 pb-4">${each(settings[category], (setting) => {
                  return `${!setting.cloudonly || isCloudHosted() ? `${setting.ee_only != void 0 && !$enterpriseLicense ? `<div class="flex text-xs items-center gap-1 text-yellow-500 whitespace-nowrap">${validate_component(Alert_triangle, "AlertTriangle").$$render($$result, { size: 16 }, {}, {})}
											EE only ${setting.ee_only != "" ? `${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(setting.ee_only)}`;
                    }
                  })}` : ``} </div>` : ``} <label class="block pb-2"><span class="text-primary font-semibold text-sm">${escape(setting.label)}</span> ${setting.description ? `<span class="text-secondary text-xs">${escape(setting.description)}</span>` : ``} ${setting.tooltip ? `${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(setting.tooltip)}`;
                    }
                  })}` : ``} ${values ? (() => {
                    let hasError = setting.isValid && !setting.isValid(values[setting.key]);
                    return ` ${setting.fieldType == "text" ? `<input ${setting.ee_only != void 0 && !$enterpriseLicense ? "disabled" : ""} type="text"${add_attribute("placeholder", setting.placeholder, 0)}${add_attribute(
                      "class",
                      hasError ? "border !border-red-700 !border-opacity-30 !focus:border-red-700 !focus:border-opacity-30" : "",
                      0
                    )}${add_attribute("value", values[setting.key], 0)}>` : `${setting.fieldType == "textarea" ? `<textarea rows="2"${add_attribute("placeholder", setting.placeholder, 0)}>${escape(values[setting.key] || "")}</textarea> ${setting.key == "saml_metadata" ? `<div class="flex mt-2">${validate_component(Button, "Button").$$render($$result, {}, {}, {
                      default: () => {
                        return `Test content/url`;
                      }
                    })} </div>` : ``}` : `${setting.fieldType == "license_key" ? `<div class="flex gap-2">${validate_component(Password, "Password").$$render(
                      $$result,
                      {
                        small: true,
                        placeholder: setting.placeholder,
                        password: values[setting.key]
                      },
                      {
                        password: ($$value) => {
                          values[setting.key] = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )} ${validate_component(Button, "Button").$$render(
                      $$result,
                      {
                        variant: values[setting.key] ? "contained" : "border",
                        size: "xs"
                      },
                      {},
                      {
                        default: () => {
                          return `Test Key
													`;
                        }
                      }
                    )}</div> <div class="mt-1 flex flex-col gap-1 items-start">${values[setting.key]?.length > 0 ? `${parseDate(values[setting.key]) ? `<div class="flex flex-row gap-1 items-center">${validate_component(Info, "Info").$$render($$result, { size: 12, class: "text-tertiary" }, {}, {})} <span class="text-tertiary text-xs">License key expires on ${escape(parseDate(values[setting.key]))}</span> </div>` : ``}` : ``} ${latestKeyRenewalAttempt ? (() => {
                      let attemptedAt = new Date(latestKeyRenewalAttempt.attempted_at).toLocaleString();
                      return ` <div class="relative">${validate_component(Popover, "Popover").$$render($$result, { notClickable: true }, {}, {
                        text: () => {
                          return `<div slot="text">${latestKeyRenewalAttempt.result === "success" ? `<span class="text-green-300">Latest key renewal succeeded on ${escape(attemptedAt)} </span>` : `<span class="text-red-300">Latest key renewal failed on ${escape(attemptedAt)}: ${escape(latestKeyRenewalAttempt.result.replace("error: ", ""))} </span>`} <br>
																	As long as invoices are paid and usage corresponds to the subscription,
																	the key is renewed daily with a validity of 35 days (grace period).
																</div>`;
                        },
                        default: () => {
                          return `<div class="flex flex-row items-center gap-1">${latestKeyRenewalAttempt.result === "success" ? `${validate_component(Badge_check, "BadgeCheck").$$render($$result, { class: "text-green-600", size: 12 }, {}, {})}` : `${validate_component(Badge_x, "BadgeX").$$render($$result, { class: "text-red-600", size: 12 }, {}, {})}`} <span${add_attribute(
                            "class",
                            classNames("text-xs", latestKeyRenewalAttempt.result === "success" ? "text-green-600" : "text-red-600"),
                            0
                          )}>${escape(latestKeyRenewalAttempt.result === "success" ? "Latest key renewal succeeded" : "Latest key renewal failed")}
																		on ${escape(attemptedAt)} </span></div> `;
                        }
                      })} </div>`;
                    })() : ``} ${``} ${$enterpriseLicense ? `<div class="flex flex-row gap-2 mt-1">${validate_component(Button, "Button").$$render(
                      $$result,
                      {
                        loading: renewing,
                        size: "xs",
                        color: "dark"
                      },
                      {},
                      {
                        default: () => {
                          return `Renew key
															`;
                        }
                      }
                    )} ${validate_component(Button, "Button").$$render(
                      $$result,
                      {
                        color: "dark",
                        size: "xs",
                        loading: opening
                      },
                      {},
                      {
                        default: () => {
                          return `Open customer portal
															`;
                        }
                      }
                    )} </div>` : ``} </div>` : `${setting.fieldType == "email" ? `<input type="email"${add_attribute("placeholder", setting.placeholder, 0)}${add_attribute("value", values[setting.key], 0)}>` : `${setting.fieldType == "critical_error_channels" ? `<div class="w-full"><div class="flex max-w-md mt-1 gap-2 w-full items-center"><select disabled><option value="Tracing" data-svelte-h="svelte-1dfvezs">Tracing</option></select> <input disabled> <button class="rounded-full p-1 bg-surface-secondary duration-200 hover:bg-surface-hover" aria-label="Clear" disabled>${validate_component(X, "X").$$render($$result, { size: 14 }, {}, {})} </button></div> ${$enterpriseLicense && Array.isArray(values[setting.key]) ? `${each(values[setting.key] ?? [], (v, i) => {
                      return `<div class="flex max-w-md mt-1 gap-2 w-full items-center"><select><option value="email" data-svelte-h="svelte-1g2qjrq">Email</option></select> <input type="email" placeholder="Email address"${add_attribute("value", v?.email ?? "", 0)}> <button class="rounded-full p-1 bg-surface-secondary duration-200 hover:bg-surface-hover" aria-label="Clear">${validate_component(X, "X").$$render($$result, { size: 14 }, {}, {})}</button> </div>`;
                    })}` : ``}</div> <div class="flex mt-2 gap-20 items-baseline">${validate_component(Button, "Button").$$render(
                      $$result,
                      {
                        variant: "border",
                        color: "light",
                        size: "xs",
                        btnClasses: "mt-1",
                        id: "arg-input-add-item",
                        startIcon: { icon: Plus },
                        disabled: !$enterpriseLicense
                      },
                      {},
                      {
                        default: () => {
                          return `Add item
													`;
                        }
                      }
                    )} </div>` : `${setting.fieldType == "object_store_config" ? `${validate_component(ObjectStoreConfigSettings, "ObjectStoreConfigSettings").$$render(
                      $$result,
                      { bucket_config: values[setting.key] },
                      {
                        bucket_config: ($$value) => {
                          values[setting.key] = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )} <div class="mb-6"></div>` : `${setting.fieldType == "number" ? `<input type="number"${add_attribute("placeholder", setting.placeholder, 0)}${add_attribute("value", values[setting.key], 0)}>` : `${setting.fieldType == "password" ? `<input type="password"${add_attribute("placeholder", setting.placeholder, 0)}${add_attribute("value", values[setting.key], 0)}>` : `${setting.fieldType == "boolean" ? `<div>${validate_component(Toggle, "Toggle").$$render(
                      $$result,
                      { checked: values[setting.key] },
                      {
                        checked: ($$value) => {
                          values[setting.key] = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )} </div>` : `${setting.fieldType == "seconds" ? `<div>${validate_component(SecondsInput, "SecondsInput").$$render(
                      $$result,
                      {
                        max: setting.ee_only != void 0 && !$enterpriseLicense ? 60 * 60 * 24 * 30 : void 0,
                        seconds: values[setting.key]
                      },
                      {
                        seconds: ($$value) => {
                          values[setting.key] = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )} </div>` : ``}`}`}`}`}`}`}`}`}`} ${hasError ? `<span class="text-red-500 text-xs">${escape(setting.error ?? "")} </span>` : ``}`;
                  })() : `<input disabled placeholder="Loading...">`} </label>` : ``}`;
                })} </div></div> ${category == "SMTP" ? `<div class="flex gap-4"><input type="email" placeholder="contact@windmill.dev"${add_attribute("value", to, 0)}> ${validate_component(Button, "Button").$$render($$result, { disabled: to == "" }, {}, {
                  default: () => {
                    return `Test SMTP settings`;
                  }
                })}</div>` : ``} `;
              }
            })}`;
          })} `;
        },
        default: () => {
          return `${each(settingsKeys, (category) => {
            return `${validate_component(Tab, "Tab").$$render($$result, { value: category }, {}, {
              default: () => {
                return `${escape(category)}`;
              }
            })}`;
          })}`;
        }
      }
    )}</div> ${!hideSave ? `${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Save settings`;
      }
    })} <div class="pb-8"></div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_enterpriseLicense();
  return $$rendered;
});
export {
  InstanceSettings as I,
  settingsKeys as s
};
