import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute, f as each, s as subscribe, d as createEventDispatcher, o as onDestroy, z as null_to_empty } from "./ssr.js";
import { i as OauthService, b as WorkerService, R as ResourceService, V as VariableService } from "./services.gen.js";
import { w as workspaceStore, j as dbSchemas, u as userStore } from "./stores2.js";
import { B as Button, e as emptySchema, b as emptyString, a5 as urlize, t as truncateRev, s as sendUserToast, u as isOwner, a as canWrite, N as generateRandomString, a6 as setInputCat, a7 as getSchemaFromProperties, Y as debounce, a8 as allTrue, a9 as computeShow } from "./toast.js";
import { g as gfmPlugin } from "./index2.js";
/* empty css                                     */
import "./common.js";
import "yaml";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import "minimatch";
import { D as Drawer, a as DrawerContent } from "./DrawerContent.js";
import { S as Skeleton } from "./Skeleton.js";
import { I as IconedResourceType } from "./IconedResourceType.js";
import { S as SearchItems } from "./SearchItems.js";
import { R as Rotate_cw, O as ObjectViewer, S as Select, a as SELECT_INPUT_DEFAULT_STYLE, c as S3FilePicker, h as FileUpload, b as FieldHeader, i as Range, C as CurrencyInput, j as DateInput, d as LightweightArgInput } from "./LightweightSchemaForm.js";
import { P as Path, S as Save, V as VariableEditor } from "./VariableEditor.js";
import { T as ToggleButtonGroup, a as ToggleButton } from "./ToggleButtonGroup.js";
import { g as getResourceTypes } from "./resourceTypesStore.js";
import { t as tick } from "./Head.js";
import "./index3.js";
import { S as SimpleEditor } from "./SimpleEditor.js";
import { twMerge } from "tailwind-merge";
import { T as TestConnection, S as SecondsInput } from "./TestConnection.js";
import { M as Markdown, T as Tooltip } from "./Tooltip.js";
import { b as base } from "./base.js";
import { deepEqual } from "fast-equals";
import { P as Plus } from "./plus.js";
import { T as Toggle } from "./Toggle.js";
import { S as SupabaseIcon } from "./index4.js";
import { P as Popup } from "./Popup.js";
import { A as Alert } from "./Alert.js";
import { R as Required, D as Dollar_sign } from "./Required.js";
import { P as Pen } from "./pen.js";
import { D as DarkModeObserver } from "./DarkModeObserver.js";
import "monaco-editor";
import "monaco-editor/esm/vs/basic-languages/graphql/graphql.contribution.js";
import { s as scripts, f as formatGraphqlSchema, a as formatSchema, g as getDbSchemas } from "./utils3.js";
import { R as Refresh_ccw } from "./refresh-ccw.js";
import { L as Loader_2 } from "./loader-2.js";
import "monaco-editor/esm/vs/editor/editor.api.js";
import "monaco-editor/esm/vs/basic-languages/sql/sql.contribution.js";
import "monaco-editor/esm/vs/basic-languages/yaml/yaml.contribution.js";
import "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution.js";
import "monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution.js";
import "monaco-editor/esm/vs/language/typescript/monaco.contribution.js";
import "monaco-editor/esm/vs/language/json/monaco.contribution.js";
import "monaco-editor/esm/vs/basic-languages/css/css.contribution.js";
import "monaco-editor/esm/vs/language/css/monaco.contribution.js";
import "monaco-languageclient";
import "vscode/services";
import { I as Icon } from "./Icon.js";
import { S as SimpleAutocomplete } from "./SimpleAutocomplete.js";
import { D as DateTimeInput } from "./DateTimeInput.js";
import { P as Password } from "./Password.js";
import { R as ResultJobLoader } from "./ResultJobLoader.js";
import { M as MultiSelect } from "./MultiSelect2.js";
import { X } from "./x.js";
const Grip_vertical = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "9", "cy": "12", "r": "1" }],
    ["circle", { "cx": "9", "cy": "5", "r": "1" }],
    ["circle", { "cx": "9", "cy": "19", "r": "1" }],
    ["circle", { "cx": "15", "cy": "12", "r": "1" }],
    ["circle", { "cx": "15", "cy": "5", "r": "1" }],
    ["circle", { "cx": "15", "cy": "19", "r": "1" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "grip-vertical" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Pipette = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "m2 22 1-1h3l9-9" }],
    ["path", { "d": "M3 21v-3l9-9" }],
    [
      "path",
      {
        "d": "m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "pipette" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const NoItemFound = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex justify-center items-center h-48" data-svelte-h="svelte-1kyea5h"><div class="text-tertiary text-center"><div class="text-2xl font-bold">No items found</div> <div class="text-sm">Try changing your search or filters</div></div></div>`;
});
const JsonEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tooBig;
  let { code } = $$props;
  let { value = void 0 } = $$props;
  let { error = "" } = $$props;
  let { editor = void 0 } = $$props;
  let { small = false } = $$props;
  function parseJson() {
    try {
      if (code == "") {
        value = void 0;
        error = "";
        return;
      }
      value = JSON.parse(code ?? "");
      error = "";
    } catch (e) {
      error = e.message;
    }
  }
  if ($$props.code === void 0 && $$bindings.code && code !== void 0) $$bindings.code(code);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
  if ($$props.editor === void 0 && $$bindings.editor && editor !== void 0) $$bindings.editor(editor);
  if ($$props.small === void 0 && $$bindings.small && small !== void 0) $$bindings.small(small);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    tooBig = code && code?.length > 1e6;
    code != void 0 && parseJson();
    $$rendered = `${tooBig ? `<span class="text-tertiary" data-svelte-h="svelte-1jcyqso">JSON to edit is too big</span>` : `<div class="flex flex-col w-full"><div class="border w-full">${validate_component(SimpleEditor, "SimpleEditor").$$render(
      $$result,
      {
        small,
        autoHeight: true,
        lang: "json",
        this: editor,
        code
      },
      {
        this: ($$value) => {
          editor = $$value;
          $$settled = false;
        },
        code: ($$value) => {
          code = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> ${error != "" ? `<span class="text-red-600 text-xs">${escape(error)}</span>` : ``}</div>`}`;
  } while (!$$settled);
  return $$rendered;
});
const ItemPicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pickCallback } = $$props;
  let { loadItems } = $$props;
  let { extraField = "path" } = $$props;
  let { extraField2 = void 0 } = $$props;
  let { itemName } = $$props;
  let { closeOnClick = true } = $$props;
  let { noItemMessage = "There are no items in the list" } = $$props;
  let { buttons = {} } = $$props;
  let { tooltip = "" } = $$props;
  let { documentationLink = void 0 } = $$props;
  let loading = false;
  let items = [];
  let filteredItems = [];
  let filter = "";
  function openDrawer() {
    loading = true;
    loadItems().then((v) => {
      items = v;
    }).finally(() => {
      loading = false;
    });
    drawer.openDrawer?.();
  }
  let drawer;
  let refreshing = false;
  if ($$props.pickCallback === void 0 && $$bindings.pickCallback && pickCallback !== void 0) $$bindings.pickCallback(pickCallback);
  if ($$props.loadItems === void 0 && $$bindings.loadItems && loadItems !== void 0) $$bindings.loadItems(loadItems);
  if ($$props.extraField === void 0 && $$bindings.extraField && extraField !== void 0) $$bindings.extraField(extraField);
  if ($$props.extraField2 === void 0 && $$bindings.extraField2 && extraField2 !== void 0) $$bindings.extraField2(extraField2);
  if ($$props.itemName === void 0 && $$bindings.itemName && itemName !== void 0) $$bindings.itemName(itemName);
  if ($$props.closeOnClick === void 0 && $$bindings.closeOnClick && closeOnClick !== void 0) $$bindings.closeOnClick(closeOnClick);
  if ($$props.noItemMessage === void 0 && $$bindings.noItemMessage && noItemMessage !== void 0) $$bindings.noItemMessage(noItemMessage);
  if ($$props.buttons === void 0 && $$bindings.buttons && buttons !== void 0) $$bindings.buttons(buttons);
  if ($$props.tooltip === void 0 && $$bindings.tooltip && tooltip !== void 0) $$bindings.tooltip(tooltip);
  if ($$props.documentationLink === void 0 && $$bindings.documentationLink && documentationLink !== void 0) $$bindings.documentationLink(documentationLink);
  if ($$props.openDrawer === void 0 && $$bindings.openDrawer && openDrawer !== void 0) $$bindings.openDrawer(openDrawer);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(SearchItems, "SearchItems").$$render(
      $$result,
      {
        filter,
        items,
        f: (x) => (extraField2 ? x[extraField2] + " " : "") + (x[extraField] ?? "") + " " + (x["path"] && x["path"] != x[extraField] ? "(" + x["path"] + ")" : "") + " " + (x["description"] != x[extraField] ? x["description"] ?? "" : ""),
        filteredItems
      },
      {
        filteredItems: ($$value) => {
          filteredItems = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "600px", this: drawer },
      {
        this: ($$value) => {
          drawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render(
            $$result,
            {
              tooltip,
              documentationLink,
              overflow_y: false,
              title: "Search " + itemName + "s"
            },
            {},
            {
              actions: () => {
                return `${slots.submission ? slots.submission({}) : ``} `;
              },
              default: () => {
                return `<div class="w-full h-full flex flex-col"><div class="flex flex-row gap-2 pb-4"><input type="text" placeholder="${"Search " + escape(itemName, true) + "s"}" class="search-item" autofocus${add_attribute("value", filter, 0)}> ${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    color: "light",
                    variant: "border",
                    iconOnly: true,
                    startIcon: {
                      icon: Rotate_cw,
                      classes: loading || refreshing ? "animate-spin" : ""
                    }
                  },
                  {},
                  {}
                )}</div> ${loading ? `${each(new Array(3), (_) => {
                  return `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[5], 0.2] }, {}, {})}`;
                })}` : `${!items?.length ? `<div class="text-center text-sm text-tertiary mt-2"><!-- HTML_TAG_START -->${noItemMessage}<!-- HTML_TAG_END --></div>` : `${filteredItems?.length ? `<div class="border rounded-md divide-y w-full overflow-auto pb-12 grow">${each(filteredItems, (obj) => {
                  return `<div class="hover:bg-surface-hover w-full flex items-center p-4 gap-4 first-of-type:!border-t-0 first-of-type:rounded-t-md last-of-type:rounded-b-md"><div class="inline-flex items-center grow"><button class="py-2 px-1 gap-1 flex grow border-gray-300 border-opacity-0 text-primary">${`app` in obj ? `<div class="mr-2 text-sm text-left center-center w-30">${validate_component(IconedResourceType, "IconedResourceType").$$render(
                    $$result,
                    {
                      after: true,
                      silent: false,
                      name: obj["app"]
                    },
                    {},
                    {}
                  )} </div>` : ``} ${`resource_type` in obj ? `<div class="mr-2 text-left w-30 center-center text-sm">${validate_component(IconedResourceType, "IconedResourceType").$$render($$result, { after: true, name: obj["resource_type"] }, {}, {})} </div>` : ``} <div class="flex grow flex-col break-all overflow-hidden">${obj.marked ? `<div class="text-sm font-semibold text-left"><!-- HTML_TAG_START -->${obj.marked}<!-- HTML_TAG_END --> </div>` : `<div class="text-sm font-semibold flex flex-col"><span class="mr-2 text-left">${escape(obj[extraField] ?? "")}</span> ${extraField != "path" ? `<span class="font-normal text-xs text-left italic">${escape(obj["path"] ?? "")}</span>` : ``}</div> ${extraField != "description" ? `<div class="text-xs font-light italic text-left">${escape(obj["description"] ?? "")}</div>` : ``}`}</div> </button></div> ${buttons ? `<div class="flex flex-row items-center">${each(Object.entries(buttons), ([name, button]) => {
                    return `<div>${validate_component(Button, "Button").$$render($$result, { size: "sm", variant: "border" }, {}, {
                      default: () => {
                        return `${escape(name)} `;
                      }
                    })} </div>`;
                  })} </div>` : ``} </div>`;
                })}</div>` : `${validate_component(NoItemFound, "NoItemFound").$$render($$result, {}, {}, {})}`}`}`}</div>`;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const ApiConnectForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { resourceType } = $$props;
  let { resourceTypeInfo } = $$props;
  let { args = {} } = $$props;
  let { linkedSecret = void 0 } = $$props;
  let { isValid = true } = $$props;
  let { linkedSecretCandidates = void 0 } = $$props;
  let schema = emptySchema();
  let notFound = false;
  let supabaseWizard = false;
  async function isSupabaseAvailable() {
    supabaseWizard = (await OauthService.listOauthConnects() ?? {})["supabase_wizard"] != void 0;
  }
  async function loadSchema() {
    if (!resourceTypeInfo) return;
    rawCode = "{}";
    viewJsonSchema = false;
    try {
      schema = resourceTypeInfo.schema;
      schema.order = schema.order ?? Object.keys(schema.properties).sort();
      notFound = false;
    } catch (e) {
      notFound = true;
    }
  }
  function parseJson() {
    try {
      args = JSON.parse(rawCode);
      error = "";
      isValid = true;
    } catch (e) {
      isValid = false;
      error = e.message;
    }
  }
  let error = "";
  let rawCode = "";
  let viewJsonSchema = false;
  let connectionString = "";
  let rawCodeEditor = void 0;
  if ($$props.resourceType === void 0 && $$bindings.resourceType && resourceType !== void 0) $$bindings.resourceType(resourceType);
  if ($$props.resourceTypeInfo === void 0 && $$bindings.resourceTypeInfo && resourceTypeInfo !== void 0) $$bindings.resourceTypeInfo(resourceTypeInfo);
  if ($$props.args === void 0 && $$bindings.args && args !== void 0) $$bindings.args(args);
  if ($$props.linkedSecret === void 0 && $$bindings.linkedSecret && linkedSecret !== void 0) $$bindings.linkedSecret(linkedSecret);
  if ($$props.isValid === void 0 && $$bindings.isValid && isValid !== void 0) $$bindings.isValid(isValid);
  if ($$props.linkedSecretCandidates === void 0 && $$bindings.linkedSecretCandidates && linkedSecretCandidates !== void 0) $$bindings.linkedSecretCandidates(linkedSecretCandidates);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $workspaceStore && loadSchema();
    notFound && rawCode && parseJson();
    rawCode && parseJson();
    resourceType == "postgresql" && isSupabaseAvailable();
    $$rendered = `${!notFound ? `<div class="w-full flex gap-4 flex-row-reverse items-center">${validate_component(Toggle, "Toggle").$$render($$result, { options: { right: "As JSON" } }, {}, {})} ${validate_component(TestConnection, "TestConnection").$$render($$result, { resourceType, args }, {}, {})} ${resourceType == "postgresql" ? `${validate_component(Popup, "Popup").$$render($$result, { floatingConfig: { placement: "bottom" } }, {}, {
      button: () => {
        return `${validate_component(Button, "Button").$$render(
          $$result,
          {
            spacingSize: "sm",
            size: "xs",
            btnClasses: "h-8",
            color: "light",
            variant: "border",
            nonCaptureEvent: true
          },
          {},
          {
            default: () => {
              return `From connection string`;
            }
          }
        )} `;
      },
      default: ({ close }) => {
        return `<div class="block text-primary"><div class="w-[550px] flex flex-col items-start gap-1"><div class="flex flex-row gap-1 w-full"><input type="text" placeholder="postgres://user:password@host:5432/dbname?sslmode=disable"${add_attribute("value", connectionString, 0)}> ${validate_component(Button, "Button").$$render(
          $$result,
          {
            size: "xs",
            color: "blue",
            buttonType: "button",
            disabled: connectionString.length <= 0
          },
          {},
          {
            default: () => {
              return `Apply`;
            }
          }
        )}</div> ${``}</div></div>`;
      }
    })}` : ``} ${resourceType == "postgresql" && supabaseWizard ? `<a target="_blank" href="${escape(base, true) + "/api/oauth/connect/supabase_wizard"}" class="border rounded-lg flex flex-row gap-2 items-center text-xs px-3 py-1.5 h-8 bg-[#F1F3F5] hover:bg-[#E6E8EB] dark:bg-[#1C1C1C] dark:hover:bg-black">${validate_component(SupabaseIcon, "SupabaseIcon").$$render($$result, { height: "16px", width: "16px" }, {}, {})} <div class="text-[#11181C] dark:text-[#EDEDED] font-semibold" data-svelte-h="svelte-duq0fe">Connect Supabase</div></a>` : ``}</div>` : `<p class="italic text-tertiary text-xs mb-4">No corresponding resource type found in your workspace for ${escape(resourceType)}. Define the value in
		JSON directly</p>`} ${notFound || viewJsonSchema ? `${!emptyString(error) ? `<span class="text-red-400 text-xs mb-1 flex flex-row-reverse">${escape(error)}</span>` : `<div class="py-2"></div>`} ${validate_component(SimpleEditor, "SimpleEditor").$$render(
      $$result,
      {
        autoHeight: true,
        lang: "json",
        fixedOverflowWidgets: false,
        this: rawCodeEditor,
        code: rawCode
      },
      {
        this: ($$value) => {
          rawCodeEditor = $$value;
          $$settled = false;
        },
        code: ($$value) => {
          rawCode = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${validate_component(SchemaForm, "SchemaForm").$$render(
      $$result,
      {
        onlyMaskPassword: true,
        noDelete: true,
        linkedSecretCandidates,
        isValid: true,
        schema,
        linkedSecret,
        args
      },
      {
        linkedSecret: ($$value) => {
          linkedSecret = $$value;
          $$settled = false;
        },
        args: ($$value) => {
          args = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const WhitelistIp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ips = void 0;
  WorkerService.listWorkers({ pingSince: 300 }).then((workers) => {
    ips = [
      ...new Set(workers.filter((worker) => {
        return worker.ip != "unretrievable IP" && worker.last_ping && worker.last_ping < 300;
      }).map((worker) => worker.ip))
    ];
  });
  return `${ips ? `<div class="mt-4"></div> ${validate_component(Alert, "Alert").$$render(
    $$result,
    {
      size: "xs",
      type: "info",
      title: "IPs to whitelist"
    },
    {},
    {
      default: () => {
        return `<span class="text-tertiary" data-svelte-h="svelte-9adeu7">If necessary, the workers IPs to whitelist are:</span> ${escape(ips.join(", "))}`;
      }
    }
  )}` : ``}`;
});
const css$1 = {
  code: ".pgap>p{margin-bottom:.5rem;margin-top:.5rem}",
  map: null
};
const GfmMarkdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { md } = $$props;
  if ($$props.md === void 0 && $$bindings.md && md !== void 0) $$bindings.md(md);
  $$result.css.add(css$1);
  return `<div class="!prose-xs pgap">${validate_component(Markdown, "Markdown").$$render($$result, { md, plugins: [gfmPlugin()] }, {}, {})} </div>`;
});
const apiTokenApps = {
  airtable: {
    img: "/airtable_connect.png",
    instructions: [
      'Go to <a href="https://airtable.com/create/tokens" target="_blank" rel=”noopener noreferrer”>https://airtable.com/create/tokens</a>',
      'Click on "Create new token"',
      'Set a name, specify the scopes or the access level and click on "Create token"',
      "Copy the token"
    ]
  },
  discord_webhook: {
    img: "/discord_webhook.png",
    instructions: ["Click on Server Settings", "Click on Integration", 'Find "Webhooks"'],
    linkedSecret: "webhook_url"
  },
  toggl: {
    img: "/toggl_connect.png",
    instructions: [
      'Go to <a href="https://track.toggl.com/profile" target="_blank" rel=”noopener noreferrer”>https://track.toggl.com/profile</a>',
      'Find "API Token"'
    ]
  },
  mailchimp: {
    img: "/mailchimp_connect.png",
    instructions: [
      'Go to <a href="https://admin.mailchimp.com/account/api" target="_blank" rel=”noopener noreferrer”>https://admin.mailchimp.com/account/api</a>',
      'Find "Your API Keys"'
    ]
  },
  sendgrid: {
    img: "/sendgrid_connect.png",
    instructions: [
      'Go to <a href="https://app.sendgrid.com/settings/api_keys" target="_blank" rel=”noopener noreferrer”>https://app.sendgrid.com/settings/api_keys</a>',
      "Create an API key",
      "Copy your key"
    ]
  },
  supabase: {
    img: "/supabase_connect.png",
    instructions: ["Go to the API Settings of your app to find the project URL and key"]
  },
  square: {
    img: "/square_connect.gif",
    instructions: [
      'Go to <a href="https://developer.squareup.com/apps" target="_blank" rel=”noopener noreferrer”>https://developer.squareup.com/apps</a>',
      "In the left pane, choose Credentials",
      "At the top of the page, choose Production mode for a production access token or Sandbox mode for a Sandbox access token."
    ]
  }
};
function linkedSecretValue(x) {
  let r = 0;
  let lowerCasedX = x.toLowerCase();
  if (lowerCasedX.includes("secret")) {
    r += 10;
  }
  if (lowerCasedX.includes("password")) {
    r += 5;
  }
  if (lowerCasedX.includes("private")) {
    r += 4;
  }
  if (lowerCasedX.includes("key")) {
    r += 3;
  }
  if (lowerCasedX.includes("token")) {
    r += 2;
  }
  if (lowerCasedX.includes("pass")) {
    r += 1;
  }
  return r;
}
function forceSecretValue(resourceType) {
  if (resourceType == "git_repository") {
    return "url";
  }
}
const AppConnectInner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let linkedSecretCandidates;
  let linkedSecret;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value2) => $workspaceStore = value2);
  let { step = 1 } = $$props;
  let { resourceType = "" } = $$props;
  let { isGoogleSignin = false } = $$props;
  let { disabled = false } = $$props;
  let { manual = true } = $$props;
  let isValid = true;
  const nativeLanguagesCategory = ["postgresql", "mysql", "bigquery", "snowflake", "mssql", "graphql"];
  let filter = "";
  let value = "";
  let valueToken = void 0;
  let connects = void 0;
  let connectsManual = void 0;
  let args = {};
  let renderDescription = true;
  let scopes = [];
  let extra_params = [];
  let path;
  let description = "";
  let resourceTypeInfo = void 0;
  let pathError = "";
  async function open(rt) {
    if (!rt) {
      loadResourceTypes();
    }
    step = 1;
    value = "";
    description = "";
    resourceType = rt ?? "";
    valueToken = void 0;
    await loadConnects();
    manual = !connects?.includes(resourceType);
    if (rt) {
      next();
    }
  }
  async function loadConnects() {
    if (!connects) {
      connects = (await OauthService.listOauthConnects()).filter((x) => x != "supabase_wizard");
    }
  }
  const connectAndManual = ["gitlab"];
  async function loadResourceTypes() {
    if (connectsManual) {
      return;
    }
    const availableRts = await ResourceService.listResourceTypeNames({ workspace: $workspaceStore });
    connectsManual = availableRts.filter((x) => connectAndManual.includes(x) || !Object.keys(connects ?? {}).includes(x)).map((x) => [
      x,
      apiTokenApps[x] ?? {
        instructions: "",
        img: void 0,
        linkedSecret: void 0
      }
    ]);
    const filteredNativeLanguages = filteredConnectsManual?.filter((o) => nativeLanguagesCategory?.includes(o[0]) ?? false);
    try {
      filteredConnectsManual = [
        ...filteredNativeLanguages ?? [],
        ...(filteredConnectsManual ?? []).filter(([key, _]) => !nativeLanguagesCategory.includes(key))
      ];
    } catch (e) {
    }
  }
  function popupListener(event) {
    let data = event.data;
    if (event.origin !== window.location.origin) {
      return;
    }
    if (data.type === "error") {
      sendUserToast(event.data.error, true);
      step = 2;
    } else if (data.type === "success") {
      resourceType = data.resource_type;
      value = data.res.access_token;
      valueToken = data.res;
      step = 4;
    }
  }
  async function getScopesAndParams() {
    const connect = await OauthService.getOauthConnect({ client: resourceType });
    scopes = connect.scopes ?? [];
    extra_params = Object.entries(connect.extra_params ?? {});
  }
  async function getResourceTypeInfo() {
    resourceTypeInfo = await ResourceService.getResourceType({
      workspace: $workspaceStore,
      path: resourceType
    });
  }
  async function next() {
    if (step == 1) {
      if (manual) {
        getResourceTypeInfo();
        args = {};
      } else {
        getResourceTypeInfo();
        getScopesAndParams();
      }
      step += 1;
    } else if (step == 2 && !manual) {
      const url = new URL(`/api/oauth/connect/${resourceType}`, window.location.origin);
      url.searchParams.append("scopes", scopes.join("+"));
      if (extra_params.length > 0) {
        extra_params.forEach(([key, value2]) => url.searchParams.append(key, value2));
      }
      window.addEventListener("message", popupListener, { once: true });
      window.open(url.toString(), "_blank", "popup=true");
      step += 1;
    } else {
      let exists = await VariableService.existsVariable(
        { workspace: $workspaceStore, path }
      );
      if (exists) {
        throw Error(`Variable at path ${path} already exists. Delete it or pick another path`);
      }
      exists = await ResourceService.existsResource({ workspace: $workspaceStore, path });
      if (exists) {
        throw Error(`Resource at path ${path} already exists. Delete it or pick another path`);
      }
      let account = void 0;
      if (valueToken?.expires_in != void 0) {
        account = Number(await OauthService.createAccount({
          workspace: $workspaceStore,
          requestBody: {
            refresh_token: valueToken.refresh_token ?? "",
            expires_in: valueToken.expires_in,
            client: resourceType
          }
        }));
      }
      const resourceValue = args;
      let saveVariable = false;
      if (!manual || linkedSecret != void 0) {
        let v = manual ? args[linkedSecret ?? ""] : value;
        if (typeof v == "string" && v != "" && !v.startsWith("$var:")) {
          saveVariable = true;
          await VariableService.createVariable({
            workspace: $workspaceStore,
            requestBody: {
              path,
              value: v,
              is_secret: true,
              description: emptyString(description) ? `${manual ? "Token" : "OAuth token"} for ${resourceType}` : description,
              is_oauth: !manual,
              account
            }
          });
          resourceValue[linkedSecret ?? "token"] = `$var:${path}`;
        }
      }
      await ResourceService.createResource({
        workspace: $workspaceStore,
        requestBody: {
          resource_type: resourceType,
          path,
          value: resourceValue,
          description
        }
      });
      dispatch("refresh", path);
      dispatch("close");
      sendUserToast(`Saved resource${saveVariable ? " and variable" : ""} path: ${path}`);
      step = 1;
      resourceType = "";
    }
  }
  async function back() {
    if (step == 4) {
      step -= 2;
    } else if (step > 1) {
      step -= 1;
    }
    if (step == 1) {
      loadConnects();
      loadResourceTypes();
    }
  }
  const dispatch = createEventDispatcher();
  let filteredConnects = [];
  let filteredConnectsManual = [];
  if ($$props.step === void 0 && $$bindings.step && step !== void 0) $$bindings.step(step);
  if ($$props.resourceType === void 0 && $$bindings.resourceType && resourceType !== void 0) $$bindings.resourceType(resourceType);
  if ($$props.isGoogleSignin === void 0 && $$bindings.isGoogleSignin && isGoogleSignin !== void 0) $$bindings.isGoogleSignin(isGoogleSignin);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.manual === void 0 && $$bindings.manual && manual !== void 0) $$bindings.manual(manual);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.loadResourceTypes === void 0 && $$bindings.loadResourceTypes && loadResourceTypes !== void 0) $$bindings.loadResourceTypes(loadResourceTypes);
  if ($$props.next === void 0 && $$bindings.next && next !== void 0) $$bindings.next(next);
  if ($$props.back === void 0 && $$bindings.back && back !== void 0) $$bindings.back(back);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    linkedSecretCandidates = apiTokenApps[resourceType]?.linkedSecret ? [apiTokenApps[resourceType]?.linkedSecret] : args != void 0 ? Object.keys(args).filter((x) => ["token", "secret", "key", "pass", "private"].some((y) => x.toLowerCase().includes(y))) : void 0;
    linkedSecret = forceSecretValue(resourceType) ?? linkedSecretCandidates?.sort((ua, ub) => linkedSecretValue(ub) - linkedSecretValue(ua))?.[0];
    isGoogleSignin = step == 1 && (resourceType == "google" || resourceType == "gmail" || resourceType == "gcal" || resourceType == "gdrive" || resourceType == "gsheets");
    disabled = step == 1 && resourceType == "" || step == 2 && value == "" && args && args["token"] == "" && args["password"] == "" && args["api_key"] == "" && args["key"] == "" && linkedSecret != void 0 || step == 3 || step == 4 && pathError != "" || !isValid;
    $$rendered = `${validate_component(SearchItems, "SearchItems").$$render(
      $$result,
      {
        filter,
        items: connects ? connects.sort((a, b) => a.localeCompare(b)).map((key) => ({ key })) : void 0,
        f: (x) => x.key,
        filteredItems: filteredConnects
      },
      {
        filteredItems: ($$value) => {
          filteredConnects = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(SearchItems, "SearchItems").$$render(
      $$result,
      {
        filter,
        items: connectsManual?.sort((a, b) => a[0].localeCompare(b[0])),
        f: (x) => x[0],
        filteredItems: filteredConnectsManual
      },
      {
        filteredItems: ($$value) => {
          filteredConnectsManual = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${step == 1 ? `<div class="w-12/12 pb-2 flex flex-row my-1 gap-1"><input type="text" placeholder="Search resource type" class="text-2xl grow"${add_attribute("value", filter, 0)}></div> <h2 class="mb-4" data-svelte-h="svelte-1qw9zbv">OAuth APIs</h2> <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-1 items-center mb-2">${filteredConnects ? `${each(filteredConnects, ({ key }) => {
      return `${validate_component(Button, "Button").$$render(
        $$result,
        {
          size: "sm",
          variant: "border",
          color: key === resourceType ? "blue" : "light",
          btnClasses: key === resourceType ? "!border-2" : "m-[1px]"
        },
        {},
        {
          default: () => {
            return `${validate_component(IconedResourceType, "IconedResourceType").$$render(
              $$result,
              {
                name: key,
                after: true,
                width: "20px",
                height: "20px"
              },
              {},
              {}
            )} `;
          }
        }
      )}`;
    })}` : `${each(new Array(3), (_) => {
      return `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[2]] }, {}, {})}`;
    })}`}</div> ${connects && connects.length == 0 ? `<div class="text-secondary text-sm w-full" data-svelte-h="svelte-1l1rwjo">No OAuth APIs has been setup on the instance. To add oauth APIs, first sync the resource
			types with the hub, then add oauth configuration. See <a href="https://www.windmill.dev/docs/misc/setup_oauth">documentation</a></div>` : ``} <h2 class="mt-8 mb-4" data-svelte-h="svelte-xbk4p4">Others</h2> ${connectsManual && connectsManual?.length < 10 ? `<div class="text-secondary p-2" data-svelte-h="svelte-1f3k54z">Resource Types have not been synced with the hub. Go to the admins workspace to sync them (and
			add a schedule to do daily):
			<p class="mt-4">1. Go to the &quot;admins&quot; workspaces:
				<img src="${escape(base, true) + "/sync_resource_types.png"}" alt="sync resource types" class="mt-2"></p> <p class="mt-4">2: Run the synchronization script:
				<img src="${escape(base, true) + "/sync_resource_types2.png"}" alt="sync resource types" class="mt-2"></p></div>` : ``} <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-1 items-center mb-2">${filteredConnectsManual ? `${each(filteredConnectsManual, ([key, _]) => {
      return `${nativeLanguagesCategory.includes(key) ? `${validate_component(Button, "Button").$$render(
        $$result,
        {
          size: "sm",
          variant: "border",
          color: key === resourceType ? "blue" : "light",
          btnClasses: key === resourceType ? "!border-2" : "m-[1px]"
        },
        {},
        {
          default: () => {
            return `${validate_component(IconedResourceType, "IconedResourceType").$$render(
              $$result,
              {
                name: key,
                after: true,
                width: "20px",
                height: "20px"
              },
              {},
              {}
            )} `;
          }
        }
      )}` : ``}`;
    })}` : ``}</div> <div class="mt-8 mb-4"></div> <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-1 items-center mb-2">${filteredConnectsManual ? `${each(filteredConnectsManual, ([key, _]) => {
      return `${!nativeLanguagesCategory.includes(key) ? ` ${validate_component(Button, "Button").$$render(
        $$result,
        {
          size: "sm",
          variant: "border",
          color: key === resourceType ? "blue" : "light",
          btnClasses: key === resourceType ? "!border-2" : "m-[1px]"
        },
        {},
        {
          default: () => {
            return `${validate_component(IconedResourceType, "IconedResourceType").$$render(
              $$result,
              {
                name: key,
                after: true,
                width: "20px",
                height: "20px"
              },
              {},
              {}
            )} `;
          }
        }
      )}` : ``}`;
    })}` : `${each(new Array(9), (_) => {
      return `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[2]] }, {}, {})}`;
    })}`}</div>` : `${step == 2 && manual ? `${validate_component(Path, "Path").$$render(
      $$result,
      {
        initialPath: "",
        namePlaceholder: resourceType,
        kind: "resource",
        error: pathError,
        path
      },
      {
        error: ($$value) => {
          pathError = $$value;
          $$settled = false;
        },
        path: ($$value) => {
          path = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${apiTokenApps[resourceType] ? `<h2 class="mt-4 mb-2" data-svelte-h="svelte-1s5bos">Instructions</h2> <div class="pl-10"><ol class="list-decimal">${each(apiTokenApps[resourceType].instructions, (step2) => {
      return `<li><!-- HTML_TAG_START -->${step2}<!-- HTML_TAG_END --> </li>`;
    })}</ol></div> ${apiTokenApps[resourceType].img ? `<div class="mt-4 w-full overflow-hidden"><img class="m-auto max-h-60" alt="connect"${add_attribute("src", base + apiTokenApps[resourceType].img, 0)}></div>` : ``}` : `${!emptyString(resourceTypeInfo?.description) ? `<h4 class="mt-8 mb-2">${escape(resourceTypeInfo?.name)} description</h4> <div class="text-sm">${validate_component(Markdown, "Markdown").$$render(
      $$result,
      {
        md: urlize(resourceTypeInfo?.description ?? "")
      },
      {},
      {}
    )}</div>` : ``}`} ${resourceType == "postgresql" || resourceType == "mysql" || resourceType == "mongodb" ? `${validate_component(WhitelistIp, "WhitelistIp").$$render($$result, {}, {}, {})}` : ``} <h4 class="mt-8 inline-flex items-center gap-4">Resource description ${validate_component(Required, "Required").$$render($$result, { required: false }, {}, {})} <div class="flex gap-1 items-center">${validate_component(Toggle, "Toggle").$$render(
      $$result,
      { size: "xs", checked: renderDescription },
      {
        checked: ($$value) => {
          renderDescription = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Pen, "Pen").$$render($$result, { size: 14 }, {}, {})}</div></h4> ${renderDescription ? `<div><div class="flex flex-row-reverse text-2xs text-tertiary -mt-1" data-svelte-h="svelte-ycrum8">GH Markdown</div> <textarea${add_attribute("placeholder", "Resource description", 0)}>${escape(description || "")}</textarea></div>` : `${description == void 0 || description == "" ? `<div class="text-sm text-tertiary" data-svelte-h="svelte-1a321bl">No description provided</div>` : `<div class="mt-2"></div> ${validate_component(GfmMarkdown, "GfmMarkdown").$$render($$result, { md: description }, {}, {})}`}`} <div class="mt-12">${validate_component(ApiConnectForm, "ApiConnectForm").$$render(
      $$result,
      {
        linkedSecret,
        linkedSecretCandidates,
        resourceType,
        resourceTypeInfo,
        args,
        isValid
      },
      {
        args: ($$value) => {
          args = $$value;
          $$settled = false;
        },
        isValid: ($$value) => {
          isValid = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : `${step == 2 && !manual ? `${manual == false && resourceType != "" ? `<h1 class="mb-4">${escape(resourceType)}</h1> <div class="my-4 text-secondary" data-svelte-h="svelte-e626lf">Click connect to create a resource backed by an oauth connection, whose token is fetched from
			the external services and refreshed automatically if needed before expiration (using its
			refresh token)</div> <h4 class="mb-2" data-svelte-h="svelte-geigwr">Description</h4> <div class="text-sm mb-8">${validate_component(Markdown, "Markdown").$$render(
      $$result,
      {
        md: urlize(resourceTypeInfo?.description ?? "")
      },
      {},
      {}
    )}</div> <h3 class="mb-4 flex gap-4">Scopes <button>${validate_component(Pen, "Pen").$$render($$result, { size: 14 }, {}, {})}</button></h3> ${`<div class="flex flex-col gap-1">${each(scopes, (scope) => {
      return `<div class="py-0.5 pl-2 text-xs">- ${escape(scope)}</div>`;
    })}</div>`}` : ``}` : `${step == 3 && !manual ? `Finish connection in popup window` : `${validate_component(Path, "Path").$$render(
      $$result,
      {
        initialPath: "",
        namePlaceholder: resourceType,
        kind: "resource",
        error: pathError,
        path
      },
      {
        error: ($$value) => {
          pathError = $$value;
          $$settled = false;
        },
        path: ($$value) => {
          path = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${apiTokenApps[resourceType] || !manual ? `<ul class="mt-10"><li>1. A secret variable containing the ${escape(apiTokenApps[resourceType]?.linkedSecret ?? "token")} <span class="font-bold">${escape(truncateRev(value, 5, "*****"))}</span>
				will be stored a
				<span class="font-mono whitespace-nowrap">${escape(path)}</span>.</li> <li class="mt-4">2. The resource containing that token will be stored at the same path <span class="font-mono whitespace-nowrap">${escape(path)}</span>. The Variable and Resource will be &quot;linked together&quot;, they will be deleted and renamed
				together.</li></ul>` : ``}`}`}`}`}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const AppConnectDrawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let drawer;
  let resourceType = "";
  let step = 1;
  let disabled = false;
  let isGoogleSignin = false;
  let manual = true;
  let appConnectInner = void 0;
  let rtToLoad = "";
  async function open(rt) {
    rtToLoad = rt;
    drawer.openDrawer?.();
  }
  createEventDispatcher();
  let darkMode = false;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      appConnectInner?.open(rtToLoad);
    }
    $$rendered = `${validate_component(DarkModeObserver, "DarkModeObserver").$$render(
      $$result,
      { darkMode },
      {
        darkMode: ($$value) => {
          darkMode = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "800px", this: drawer },
      {
        this: ($$value) => {
          drawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render(
            $$result,
            {
              title: "Add a Resource",
              tooltip: "Resources represent connections to third party systems. Learn more on how to integrate external APIs.",
              documentationLink: "https://www.windmill.dev/docs/integrations/integrations_on_windmill"
            },
            {},
            {
              actions: () => {
                return `<div slot="actions" class="flex gap-1">${step > 1 ? `${validate_component(Button, "Button").$$render($$result, { variant: "border" }, {}, {
                  default: () => {
                    return `Back`;
                  }
                })}` : ``} ${isGoogleSignin ? `<button ${disabled ? "disabled" : ""}><img class="h-10 w-auto object-contain"${add_attribute(
                  "src",
                  darkMode ? "/google_signin_dark.png" : "/google_signin_light.png",
                  0
                )} alt="Google sign-in"></button>` : `${validate_component(Button, "Button").$$render($$result, { disabled }, {}, {
                  default: () => {
                    return `${step == 2 && !manual ? `Connect` : `${step == 1 ? `Next` : `Save`}`}`;
                  }
                })}`}</div>`;
              },
              default: () => {
                return `${validate_component(AppConnectInner, "AppConnectInner").$$render(
                  $$result,
                  {
                    this: appConnectInner,
                    step,
                    resourceType,
                    isGoogleSignin,
                    disabled,
                    manual
                  },
                  {
                    this: ($$value) => {
                      appConnectInner = $$value;
                      $$settled = false;
                    },
                    step: ($$value) => {
                      step = $$value;
                      $$settled = false;
                    },
                    resourceType: ($$value) => {
                      resourceType = $$value;
                      $$settled = false;
                    },
                    isGoogleSignin: ($$value) => {
                      isGoogleSignin = $$value;
                      $$settled = false;
                    },
                    disabled: ($$value) => {
                      disabled = $$value;
                      $$settled = false;
                    },
                    manual: ($$value) => {
                      manual = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const GraphqlSchemaViewer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let divEl = null;
  let editor;
  let { code = "" } = $$props;
  onDestroy(() => {
    try {
      editor && editor.dispose();
    } catch (err) {
    }
  });
  if ($$props.code === void 0 && $$bindings.code && code !== void 0) $$bindings.code(code);
  return `<div class="${escape($$props.class ?? "", true) + " editor"}"${add_attribute("this", divEl, 0)}></div>`;
});
const DBSchemaExplorer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let shouldDisplayError;
  let $dbSchemas, $$unsubscribe_dbSchemas;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_dbSchemas = subscribe(dbSchemas, (value) => $dbSchemas = value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { resourceType } = $$props;
  let { resourcePath = void 0 } = $$props;
  let dbSchema = void 0;
  let loading = false;
  let drawer;
  async function getSchema() {
    if (!resourceType || !resourcePath) return;
    if ($dbSchemas[resourcePath]) return;
    loading = true;
    try {
      await getDbSchemas(resourceType, resourcePath, $workspaceStore, $dbSchemas, (message) => {
        if (drawer?.isOpen()) {
          sendUserToast(message, true);
        }
      });
      dbSchemas.set($dbSchemas);
    } catch (e) {
      console.error(e);
    }
    loading = false;
  }
  if ($$props.resourceType === void 0 && $$bindings.resourceType && resourceType !== void 0) $$bindings.resourceType(resourceType);
  if ($$props.resourcePath === void 0 && $$bindings.resourcePath && resourcePath !== void 0) $$bindings.resourcePath(resourcePath);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    resourcePath && Object.keys(scripts).includes(resourceType || "") && getSchema();
    dbSchema = resourcePath && resourcePath in $dbSchemas ? $dbSchemas[resourcePath] : void 0;
    shouldDisplayError = resourcePath && resourcePath in $dbSchemas && !$dbSchemas[resourcePath];
    $$rendered = `${loading ? `${validate_component(Loader_2, "Loader2").$$render($$result, { size: 14, class: "animate-spin " }, {}, {})}` : ``} ${dbSchema ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs",
        variant: "border",
        color: "blue",
        spacingSize: "xs2",
        btnClasses: "mt-1"
      },
      {},
      {
        default: () => {
          return `Explore schema`;
        }
      }
    )} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { this: drawer },
      {
        this: ($$value) => {
          drawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Schema Explorer" }, {}, {
            actions: () => {
              return `${validate_component(Button, "Button").$$render(
                $$result,
                {
                  startIcon: { icon: Refresh_ccw },
                  loading,
                  size: "xs",
                  color: "light"
                },
                {},
                {
                  default: () => {
                    return `Refresh`;
                  }
                }
              )} `;
            },
            default: () => {
              return `${dbSchema.lang !== "graphql" && (dbSchema.schema?.public || dbSchema.schema?.PUBLIC || dbSchema.schema?.dbo) ? `${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
                $$result,
                {
                  class: "mb-4",
                  selected: dbSchema.publicOnly
                },
                {
                  selected: ($$value) => {
                    dbSchema.publicOnly = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `${validate_component(ToggleButton, "ToggleButton").$$render(
                      $$result,
                      {
                        value: true,
                        label: dbSchema.schema.dbo ? "Dbo" : "Public"
                      },
                      {},
                      {}
                    )} ${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: false, label: "All" }, {}, {})}`;
                  }
                }
              )}` : ``} ${dbSchema.lang === "graphql" ? `${validate_component(GraphqlSchemaViewer, "GraphqlSchemaViewer").$$render(
                $$result,
                {
                  code: formatGraphqlSchema(dbSchema.schema),
                  class: "h-full"
                },
                {},
                {}
              )}` : `${validate_component(ObjectViewer, "ObjectViewer").$$render(
                $$result,
                {
                  json: formatSchema(dbSchema),
                  pureViewer: true,
                  collapseLevel: 1
                },
                {},
                {}
              )}`}`;
            }
          })}`;
        }
      }
    )}` : `${shouldDisplayError ? `${validate_component(Alert, "Alert").$$render(
      $$result,
      {
        type: "error",
        size: "xs",
        title: "Schema not available",
        class: "mt-2"
      },
      {},
      {
        default: () => {
          return `Schema could not be loaded. Please check the permissions of the resource.`;
        }
      }
    )}` : ``}`}`;
  } while (!$$settled);
  $$unsubscribe_dbSchemas();
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const ResourceEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let { canSave = true } = $$props;
  let { resource_type = void 0 } = $$props;
  let { path = "" } = $$props;
  let { newResource = false } = $$props;
  let { hidePath = false } = $$props;
  let { watchChanges = false } = $$props;
  let isValid = true;
  let jsonError = "";
  let can_write = true;
  let initialPath = path;
  let resourceToEdit = void 0;
  let description = "";
  let DESCRIPTION_PLACEHOLDER = `Describe what this resource is for`;
  let resourceSchema = void 0;
  let args = {};
  let loadingSchema = true;
  let linkedVars = [];
  let resourceTypeInfo = void 0;
  let editDescription = false;
  const dispatch = createEventDispatcher();
  let rawCode = void 0;
  async function initEdit() {
    resourceToEdit = await ResourceService.getResource({ workspace: $workspaceStore, path });
    description = resourceToEdit.description ?? "";
    resource_type = resourceToEdit.resource_type;
    args = resourceToEdit?.value ?? {};
    loadResourceType();
    can_write = resourceToEdit.workspace_id == $workspaceStore && canWrite(path, resourceToEdit.extra_perms ?? {}, $userStore);
    linkedVars = Object.entries(args).filter(([_, v]) => typeof v == "string" && v == `$var:${initialPath}`).map(([k, _]) => k);
  }
  if (!newResource) {
    initEdit();
  } else if (resource_type) {
    loadResourceType();
  } else {
    sendUserToast("Resource type cannot be undefined for new resource creation", true);
  }
  async function editResource() {
    if (resourceToEdit) {
      await ResourceService.updateResource({
        workspace: $workspaceStore,
        path: resourceToEdit.path,
        requestBody: { path, value: args, description }
      });
      sendUserToast(`Updated resource at ${path}`);
      dispatch("refresh", path);
    } else {
      throw Error("Cannot edit undefined resourceToEdit");
    }
  }
  async function createResource() {
    await ResourceService.createResource({
      workspace: $workspaceStore,
      requestBody: {
        path,
        value: args,
        description,
        resource_type
      }
    });
    sendUserToast(`Updated resource at ${path}`);
    dispatch("refresh", path);
  }
  async function loadResourceType() {
    if (resource_type) {
      try {
        const resourceType = await ResourceService.getResourceType({
          workspace: $workspaceStore,
          path: resource_type
        });
        resourceTypeInfo = resourceType;
        if (resourceType.schema) {
          resourceSchema = resourceType.schema;
        }
      } catch (err) {
        resourceSchema = void 0;
        loadingSchema = false;
        rawCode = JSON.stringify(args, null, 2);
      }
    } else {
      sendUserToast(`ResourceType cannot be undefined.`, true);
    }
    loadingSchema = false;
  }
  function parseJson() {
    try {
      args = JSON.parse(rawCode ?? "");
      jsonError = "";
    } catch (e) {
      jsonError = e.message;
    }
  }
  function updateArgsFromLinkedVars() {
    linkedVars.forEach((k) => {
      args[k] = `$var:${path}`;
    });
  }
  if ($$props.canSave === void 0 && $$bindings.canSave && canSave !== void 0) $$bindings.canSave(canSave);
  if ($$props.resource_type === void 0 && $$bindings.resource_type && resource_type !== void 0) $$bindings.resource_type(resource_type);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0) $$bindings.path(path);
  if ($$props.newResource === void 0 && $$bindings.newResource && newResource !== void 0) $$bindings.newResource(newResource);
  if ($$props.hidePath === void 0 && $$bindings.hidePath && hidePath !== void 0) $$bindings.hidePath(hidePath);
  if ($$props.watchChanges === void 0 && $$bindings.watchChanges && watchChanges !== void 0) $$bindings.watchChanges(watchChanges);
  if ($$props.editResource === void 0 && $$bindings.editResource && editResource !== void 0) $$bindings.editResource(editResource);
  if ($$props.createResource === void 0 && $$bindings.createResource && createResource !== void 0) $$bindings.createResource(createResource);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    canSave = can_write && isValid && jsonError == "";
    watchChanges && dispatch("change", { path, args, description });
    rawCode && parseJson();
    linkedVars.length > 0 && path && updateArgsFromLinkedVars();
    $$rendered = `<div><div class="flex flex-col gap-3 py-3">${!hidePath ? `<div>${!can_write ? `<div class="m-2">${validate_component(Alert, "Alert").$$render(
      $$result,
      {
        type: "warning",
        title: "Only read access"
      },
      {},
      {
        default: () => {
          return `You only have read access to this resource and cannot edit it`;
        }
      }
    )}</div>` : ``} ${validate_component(Path, "Path").$$render(
      $$result,
      {
        disabled: initialPath != "" && !isOwner(initialPath, $userStore, $workspaceStore),
        initialPath,
        namePlaceholder: "resource",
        kind: "resource",
        path
      },
      {
        path: ($$value) => {
          path = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : ``} ${!emptyString(resourceTypeInfo?.description) ? `<h4 class="mt-4 mb-2">${escape(resourceTypeInfo?.name)} description</h4> <div class="text-sm">${validate_component(Markdown, "Markdown").$$render(
      $$result,
      {
        md: urlize(resourceTypeInfo?.description ?? "")
      },
      {},
      {}
    )}</div>` : ``} <h4 class="mt-4 inline-flex items-center gap-4">Resource description ${validate_component(Required, "Required").$$render($$result, { required: false }, {}, {})} ${can_write ? `<div class="flex gap-1 items-center">${validate_component(Toggle, "Toggle").$$render(
      $$result,
      { size: "xs", checked: editDescription },
      {
        checked: ($$value) => {
          editDescription = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Pen, "Pen").$$render($$result, { size: 14 }, {}, {})}</div> ` : ``}</h4> ${can_write && editDescription ? `<div><div class="flex flex-row-reverse text-2xs text-tertiary -mt-1" data-svelte-h="svelte-ycrum8">GH Markdown</div> <textarea ${!can_write ? "disabled" : ""}${add_attribute("placeholder", DESCRIPTION_PLACEHOLDER, 0)}>${escape(description || "")}</textarea></div>` : `${description == void 0 || description == "" ? `<div class="text-sm text-tertiary" data-svelte-h="svelte-1a321bl">No description provided</div>` : `<div class="mt-2"></div> ${validate_component(GfmMarkdown, "GfmMarkdown").$$render($$result, { md: description }, {}, {})}`}`} <div class="flex w-full justify-between items-center mt-4"><div></div> ${validate_component(TestConnection, "TestConnection").$$render(
      $$result,
      {
        resourceType: resourceToEdit?.resource_type,
        args
      },
      {},
      {}
    )} ${validate_component(Toggle, "Toggle").$$render($$result, { options: { right: "As JSON" } }, {}, {})}</div> <div class="text-sm">${loadingSchema ? `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[4]] }, {}, {})}` : `${resourceSchema && resourceSchema?.properties ? `${validate_component(SchemaForm, "SchemaForm").$$render(
      $$result,
      {
        onlyMaskPassword: true,
        noDelete: true,
        disabled: !can_write,
        compact: true,
        schema: resourceSchema,
        args,
        isValid
      },
      {
        args: ($$value) => {
          args = $$value;
          $$settled = false;
        },
        isValid: ($$value) => {
          isValid = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${!can_write ? `<input type="text" disabled${add_attribute("value", rawCode, 0)}>` : `${`<p class="italic text-secondary text-xs mb-4">No corresponding resource type found in your workspace for ${escape(resource_type)}. Define the
						value in JSON directly</p>`} ${!emptyString(jsonError) ? `<span class="text-red-400 text-xs mb-1 flex flex-row-reverse">${escape(jsonError)}</span>` : `<div class="py-2"></div>`} <div class="h-full w-full border p-1 rounded">${validate_component(SimpleEditor, "SimpleEditor").$$render(
      $$result,
      {
        autoHeight: true,
        class: "editor",
        lang: "json",
        fixedOverflowWidgets: false,
        code: rawCode
      },
      {
        code: ($$value) => {
          rawCode = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>`}`}`}</div></div></div>`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_userStore();
  return $$rendered;
});
const ResourceEditorDrawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let drawer;
  let canSave = true;
  let resource_type = void 0;
  let resourceEditor = void 0;
  let path = void 0;
  let newResource = false;
  async function initEdit(p) {
    resource_type = void 0;
    newResource = false;
    path = p;
    drawer.openDrawer?.();
  }
  async function initNew(resourceType) {
    newResource = true;
    path = void 0;
    resource_type = resourceType;
    drawer.openDrawer?.();
  }
  if ($$props.initEdit === void 0 && $$bindings.initEdit && initEdit !== void 0) $$bindings.initEdit(initEdit);
  if ($$props.initNew === void 0 && $$bindings.initNew && initNew !== void 0) $$bindings.initNew(initNew);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "800px", this: drawer },
      {
        this: ($$value) => {
          drawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render(
            $$result,
            {
              title: path ? "Edit " + path : "Add a resource"
            },
            {},
            {
              actions: () => {
                return `${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    startIcon: { icon: Save },
                    disabled: !canSave
                  },
                  {},
                  {
                    default: () => {
                      return `Save`;
                    }
                  }
                )} `;
              },
              default: () => {
                return `${validate_component(ResourceEditor, "ResourceEditor").$$render(
                  $$result,
                  {
                    newResource,
                    path,
                    resource_type,
                    this: resourceEditor,
                    canSave
                  },
                  {
                    this: ($$value) => {
                      resourceEditor = $$value;
                      $$settled = false;
                    },
                    canSave: ($$value) => {
                      canSave = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const ResourcePicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value2) => $workspaceStore = value2);
  const dispatch = createEventDispatcher();
  let { initialValue = void 0 } = $$props;
  let { value = initialValue } = $$props;
  let { valueType = void 0 } = $$props;
  let { resourceType = void 0 } = $$props;
  let { disablePortal = false } = $$props;
  let { showSchemaExplorer = false } = $$props;
  let { selectFirst = false } = $$props;
  let valueSelect = initialValue || value ? {
    value: value ?? initialValue,
    label: value ?? initialValue,
    type: valueType
  } : void 0;
  let collection = valueSelect ? [valueSelect] : [];
  async function loadResources(resourceType2) {
    const nc = (await ResourceService.listResource({ workspace: $workspaceStore, resourceType: resourceType2 })).filter((x) => x.resource_type != "state" && x.resource_type != "cache").map((x) => ({
      value: x.path,
      label: x.path,
      type: x.resource_type
    }));
    if (!nc.find((x) => x.value == value) && (initialValue || value)) {
      nc.push({
        value: value ?? initialValue,
        label: value ?? initialValue,
        type: ""
      });
    }
    collection = nc;
    if (collection.length == 1 && selectFirst && valueSelect == void 0) {
      value = collection[0].value;
      valueType = collection[0].type;
      valueSelect = collection[0];
    }
  }
  let appConnect;
  let resourceEditor;
  let darkMode = false;
  if ($$props.initialValue === void 0 && $$bindings.initialValue && initialValue !== void 0) $$bindings.initialValue(initialValue);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.valueType === void 0 && $$bindings.valueType && valueType !== void 0) $$bindings.valueType(valueType);
  if ($$props.resourceType === void 0 && $$bindings.resourceType && resourceType !== void 0) $$bindings.resourceType(resourceType);
  if ($$props.disablePortal === void 0 && $$bindings.disablePortal && disablePortal !== void 0) $$bindings.disablePortal(disablePortal);
  if ($$props.showSchemaExplorer === void 0 && $$bindings.showSchemaExplorer && showSchemaExplorer !== void 0) $$bindings.showSchemaExplorer(showSchemaExplorer);
  if ($$props.selectFirst === void 0 && $$bindings.selectFirst && selectFirst !== void 0) $$bindings.selectFirst(selectFirst);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (value === void 0 && initialValue) {
        value = initialValue;
      }
    }
    $workspaceStore && loadResources(resourceType);
    {
      dispatch("change", value);
    }
    $$rendered = `${validate_component(DarkModeObserver, "DarkModeObserver").$$render(
      $$result,
      { darkMode },
      {
        darkMode: ($$value) => {
          darkMode = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(AppConnectDrawer, "AppConnect").$$render(
      $$result,
      { this: appConnect },
      {
        this: ($$value) => {
          appConnect = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ResourceEditorDrawer, "ResourceEditorDrawer").$$render(
      $$result,
      { this: resourceEditor },
      {
        this: ($$value) => {
          resourceEditor = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="flex flex-col w-full items-start"><div class="flex flex-row gap-x-1 w-full">${validate_component(Select, "Select").$$render(
      $$result,
      {
        portal: !disablePortal,
        value: valueSelect,
        items: collection,
        class: "text-clip grow min-w-0",
        placeholder: (resourceType ?? "any") + " resource",
        inputStyles: SELECT_INPUT_DEFAULT_STYLE.inputStyles,
        containerStyles: darkMode ? SELECT_INPUT_DEFAULT_STYLE.containerStylesDark : SELECT_INPUT_DEFAULT_STYLE.containerStyles
      },
      {},
      {}
    )} ${value && value != "" ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "light",
        variant: "border",
        size: "xs",
        startIcon: { icon: Pen },
        iconOnly: true
      },
      {},
      {}
    )}` : ``} ${resourceType?.includes(",") ? `${each(resourceType.split(","), (rt) => {
      return `${validate_component(Button, "Button").$$render(
        $$result,
        {
          color: "light",
          variant: "border",
          size: "xs",
          startIcon: { icon: Plus }
        },
        {},
        {
          default: () => {
            return `${escape(rt)}`;
          }
        }
      )}`;
    })}` : `${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "light",
        variant: "border",
        size: "xs",
        startIcon: { icon: Plus },
        iconOnly: true
      },
      {},
      {}
    )}`} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "border",
        color: "light",
        size: "xs",
        startIcon: { icon: Rotate_cw },
        iconOnly: true
      },
      {},
      {}
    )}</div> ${showSchemaExplorer ? `${validate_component(DBSchemaExplorer, "DBSchemaExplorer").$$render($$result, { resourceType, resourcePath: value }, {}, {})}` : ``}</div>`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const S3ObjectPicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  let { editor = void 0 } = $$props;
  createEventDispatcher();
  let s3FilePicker;
  let s3FileUploadRawMode;
  function evalValueToRaw() {
    JSON.stringify(value, null, 2);
  }
  evalValueToRaw();
  function focus() {
  }
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.editor === void 0 && $$bindings.editor && editor !== void 0) $$bindings.editor(editor);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0) $$bindings.focus(focus);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(S3FilePicker, "S3FilePicker").$$render(
      $$result,
      {
        readOnlyMode: false,
        this: s3FilePicker,
        selectedFileKey: value
      },
      {
        this: ($$value) => {
          s3FilePicker = $$value;
          $$settled = false;
        },
        selectedFileKey: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="flex flex-col w-full gap-1">${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        class: "flex justify-end",
        size: "xs",
        options: { left: "Raw S3 object input" },
        checked: s3FileUploadRawMode
      },
      {
        checked: ($$value) => {
          s3FileUploadRawMode = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${s3FileUploadRawMode ? `${validate_component(JsonEditor, "JsonEditor").$$render(
      $$result,
      {
        code: JSON.stringify(value ?? { s3: "" }, null, 2),
        editor,
        value
      },
      {
        editor: ($$value) => {
          editor = $$value;
          $$settled = false;
        },
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "border",
        color: "light",
        size: "xs",
        btnClasses: "mt-1",
        startIcon: { icon: Pipette }
      },
      {},
      {
        default: () => {
          return `Choose an object from the catalog`;
        }
      }
    )}` : `${validate_component(FileUpload, "FileUpload").$$render(
      $$result,
      {
        allowMultiple: false,
        randomFileKey: true,
        defaultValue: value?.s3
      },
      {},
      {}
    )}`}</div>`;
  } while (!$$settled);
  return $$rendered;
});
function isString(value) {
  return typeof value === "string" || value instanceof String;
}
const ObjectResourceInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { format } = $$props;
  let { value } = $$props;
  let { disablePortal = false } = $$props;
  let { showSchemaExplorer = false } = $$props;
  let { selectFirst = false } = $$props;
  let { defaultValue } = $$props;
  let path = "";
  function isResource() {
    return isString(value) && value.length >= "$res:".length;
  }
  function valueToPath() {
    if (isResource()) {
      path = value.substr("$res:".length);
    }
  }
  if ($$props.format === void 0 && $$bindings.format && format !== void 0) $$bindings.format(format);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.disablePortal === void 0 && $$bindings.disablePortal && disablePortal !== void 0) $$bindings.disablePortal(disablePortal);
  if ($$props.showSchemaExplorer === void 0 && $$bindings.showSchemaExplorer && showSchemaExplorer !== void 0) $$bindings.showSchemaExplorer(showSchemaExplorer);
  if ($$props.selectFirst === void 0 && $$bindings.selectFirst && selectFirst !== void 0) $$bindings.selectFirst(selectFirst);
  if ($$props.defaultValue === void 0 && $$bindings.defaultValue && defaultValue !== void 0) $$bindings.defaultValue(defaultValue);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    value && valueToPath();
    $$rendered = `<div class="flex flex-row w-full flex-wrap gap-x-2 gap-y-0.5">${format === "resource-s3_object" ? `${validate_component(S3ObjectPicker, "S3ObjectPicker").$$render(
      $$result,
      { value },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${validate_component(ResourcePicker, "ResourcePicker").$$render(
      $$result,
      {
        selectFirst,
        disablePortal,
        initialValue: defaultValue,
        resourceType: format.split("-").length > 1 ? format.substring("resource-".length) : void 0,
        showSchemaExplorer,
        value: path
      },
      {
        value: ($$value) => {
          path = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const ArgEnum = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { disabled } = $$props;
  let { value } = $$props;
  let { enum_ } = $$props;
  let { autofocus } = $$props;
  let { defaultValue } = $$props;
  let { valid } = $$props;
  let { create } = $$props;
  let { required } = $$props;
  let { enumLabels = void 0 } = $$props;
  const dispatch = createEventDispatcher();
  let customItems = [];
  function onCreate(newItem) {
    console.log(newItem);
    customItems = [...customItems, newItem];
    return newItem;
  }
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.enum_ === void 0 && $$bindings.enum_ && enum_ !== void 0) $$bindings.enum_(enum_);
  if ($$props.autofocus === void 0 && $$bindings.autofocus && autofocus !== void 0) $$bindings.autofocus(autofocus);
  if ($$props.defaultValue === void 0 && $$bindings.defaultValue && defaultValue !== void 0) $$bindings.defaultValue(defaultValue);
  if ($$props.valid === void 0 && $$bindings.valid && valid !== void 0) $$bindings.valid(valid);
  if ($$props.create === void 0 && $$bindings.create && create !== void 0) $$bindings.create(create);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0) $$bindings.required(required);
  if ($$props.enumLabels === void 0 && $$bindings.enumLabels && enumLabels !== void 0) $$bindings.enumLabels(enumLabels);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="w-full flex-col"><div class="w-full">${validate_component(SimpleAutocomplete, "AutoComplete").$$render(
      $$result,
      {
        items: [...required ? [] : [""], ...enum_ ? enum_ : [], ...customItems],
        labelFunction: (val) => enumLabels ? enumLabels[val] ?? val : val,
        inputClassName: twMerge("bg-surface-secondary flex", valid ? "" : "border border-red-700 border-opacity-30 focus:border-red-700 focus:border-opacity-30 bg-red-100"),
        value: value ?? defaultValue,
        hideArrow: true,
        dropdownClassName: "!text-sm !py-2 !rounded-sm !border-gray-200 !border !shadow-md !bg-surface-primary",
        className: "w-full",
        noInputStyles: true,
        onFocus: () => {
          dispatch("focus");
        },
        onBlur: () => {
          dispatch("blur");
        },
        create,
        required,
        onCreate,
        disabled,
        autofocus,
        createText: "Press enter to use this non-predefined value",
        selectedItem: value
      },
      {
        selectedItem: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const PasswordArgInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_userStore = subscribe(userStore, (value2) => $userStore = value2);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value2) => $workspaceStore = value2);
  let { value = void 0 } = $$props;
  let { disabled } = $$props;
  let path = "";
  let password = value && !value.startsWith("$var:") ? value : "";
  async function generateValue() {
    let npath = "u/" + ($userStore?.username ?? $userStore?.email)?.split("@")[0] + "/secret_arg/" + generateRandomString(12);
    let nvalue = "$var:" + npath;
    await VariableService.createVariable({
      workspace: $workspaceStore,
      requestBody: {
        value: password,
        is_secret: true,
        path: npath,
        description: "",
        expires_at: new Date(Date.now() + 1e3 * 60 * 60 * 24 * 7).toISOString()
      }
    });
    path = npath;
    value = nvalue;
  }
  async function updateValue() {
    await VariableService.updateVariable({
      workspace: $workspaceStore,
      path,
      requestBody: { value: password }
    });
  }
  function debouncedUpdate() {
    setTimeout(updateValue, 500);
  }
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    password && debouncedUpdate();
    $workspaceStore && ($userStore?.username || $userStore?.email) && path == "" && password != "" && generateValue();
    $$rendered = `${validate_component(Password, "Password").$$render(
      $$result,
      { disabled, password },
      {
        password: ($$value) => {
          password = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_userStore();
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var FEATURE_FLAG_NAMES = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
_defineProperty({}, FEATURE_FLAG_NAMES.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, false);
var _ID_TO_INSTRUCTION;
var INSTRUCTION_IDs = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
_ID_TO_INSTRUCTION = {}, _defineProperty(_ID_TO_INSTRUCTION, INSTRUCTION_IDs.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), _defineProperty(_ID_TO_INSTRUCTION, INSTRUCTION_IDs.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list"), _ID_TO_INSTRUCTION;
const flipDurationMs = 200;
const SchemaFormDND = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dndType = void 0 } = $$props;
  let { schema } = $$props;
  let { args = {} } = $$props;
  let { prettifyHeader = false } = $$props;
  let { lightweightMode = false } = $$props;
  let { onlyMaskPassword = false } = $$props;
  let { disablePortal = false } = $$props;
  let { disabled = false } = $$props;
  createEventDispatcher();
  let items = computeItems();
  let dragDisabled = true;
  function computeItems() {
    return (schema?.order ?? Object.keys(schema?.properties ?? {}) ?? []).map((key) => ({ id: key, value: key })) ?? [];
  }
  function updateItems() {
    const newItems = computeItems();
    if (!deepEqual(newItems, items)) {
      items = newItems;
    }
  }
  if ($$props.dndType === void 0 && $$bindings.dndType && dndType !== void 0) $$bindings.dndType(dndType);
  if ($$props.schema === void 0 && $$bindings.schema && schema !== void 0) $$bindings.schema(schema);
  if ($$props.args === void 0 && $$bindings.args && args !== void 0) $$bindings.args(args);
  if ($$props.prettifyHeader === void 0 && $$bindings.prettifyHeader && prettifyHeader !== void 0) $$bindings.prettifyHeader(prettifyHeader);
  if ($$props.lightweightMode === void 0 && $$bindings.lightweightMode && lightweightMode !== void 0) $$bindings.lightweightMode(lightweightMode);
  if ($$props.onlyMaskPassword === void 0 && $$bindings.onlyMaskPassword && onlyMaskPassword !== void 0) $$bindings.onlyMaskPassword(onlyMaskPassword);
  if ($$props.disablePortal === void 0 && $$bindings.disablePortal && disablePortal !== void 0) $$bindings.disablePortal(disablePortal);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    schema && dragDisabled && updateItems();
    $$rendered = `    ${validate_component(SchemaForm, "SchemaForm").$$render(
      $$result,
      {
        lightweightMode,
        args,
        prettifyHeader,
        onlyMaskPassword,
        disablePortal,
        disabled,
        dndConfig: {
          items,
          flipDurationMs,
          dropTargetStyle: {},
          type: dndType ?? "top-level"
        },
        items,
        schema
      },
      {
        schema: ($$value) => {
          schema = $$value;
          $$settled = false;
        }
      },
      {
        actions: () => {
          return `<div class="w-4 h-8 cursor-move ml-2 handle" aria-label="drag-handle">${validate_component(Grip_vertical, "GripVertical").$$render($$result, { size: 16 }, {}, {})}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
function validSelectObject(x) {
  if (typeof x != "object") {
    return JSON.stringify(x) + " is not an object";
  }
  let keys = Object.keys(x);
  if (!keys.includes("value") || !keys.includes("label")) {
    return JSON.stringify(x) + " does not contain value or label field";
  }
  if (typeof x["label"] != "string") {
    return JSON.stringify(x) + " label is not a string";
  }
  return;
}
const DynSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value = void 0 } = $$props;
  let { helperScript = void 0 } = $$props;
  let { entrypoint } = $$props;
  let { args = {} } = $$props;
  let { name } = $$props;
  let darkMode = false;
  let rawCode = JSON.stringify(value, null, 2);
  async function getItemsFromOptions(text) {
    return new Promise((resolve, reject) => {
      let cb = {
        done(res) {
          if (!res || !Array.isArray(res)) {
            reject("Result was not an array");
            return;
          }
          if (res.length == 0) {
            resolve([]);
          }
          if (res.every((x) => typeof x == "string")) {
            res = res.map((x) => ({ label: x, value: x }));
          } else if (res.find((x) => validSelectObject(x) != void 0)) {
            reject(validSelectObject(res.find((x) => validSelectObject(x) != void 0)));
          } else {
            if (text != void 0 && text != "") {
              res = res.filter((x) => x["label"].includes(text));
            }
            resolve(res);
          }
        },
        cancel() {
          reject();
        },
        error(err) {
          reject(err);
        }
      };
      helperScript?.type == "inline" ? resultJobLoader?.runPreview(
        helperScript?.path ?? "NO_PATH",
        helperScript.code,
        helperScript.lang,
        {
          ...args,
          text,
          _ENTRYPOINT_OVERRIDE: entrypoint
        },
        void 0,
        cb
      ) : resultJobLoader?.runScriptByHash(
        helperScript?.hash ?? "NO_HASH",
        {
          ...args,
          text,
          _ENTRYPOINT_OVERRIDE: entrypoint
        },
        cb
      );
    });
  }
  let lastArgs = structuredClone({ ...args, [name]: void 0 });
  let timeout = void 0;
  function changeArgs() {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(
      () => {
        let argsWithoutSelf = { ...args, [name]: void 0 };
        if (deepEqual(argsWithoutSelf, lastArgs)) {
          return;
        }
        refreshOptions();
        lastArgs = structuredClone(argsWithoutSelf);
        timeout = void 0;
      },
      1e3
    );
  }
  function refreshOptions() {
    error = void 0;
  }
  let error = void 0;
  let resultJobLoader;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.helperScript === void 0 && $$bindings.helperScript && helperScript !== void 0) $$bindings.helperScript(helperScript);
  if ($$props.entrypoint === void 0 && $$bindings.entrypoint && entrypoint !== void 0) $$bindings.entrypoint(entrypoint);
  if ($$props.args === void 0 && $$bindings.args && args !== void 0) $$bindings.args(args);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    (entrypoint || helperScript) && refreshOptions();
    args && changeArgs();
    $$rendered = `${helperScript ? `${validate_component(DarkModeObserver, "DarkModeObserver").$$render(
      $$result,
      { darkMode },
      {
        darkMode: ($$value) => {
          darkMode = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ResultJobLoader, "ResultJobLoader").$$render(
      $$result,
      { this: resultJobLoader },
      {
        this: ($$value) => {
          resultJobLoader = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="w-full flex-col flex"><div class="w-full">${validate_component(Select, "Select").$$render(
      $$result,
      {
        value,
        computeOnClick: value == void 0,
        loadOptions: getItemsFromOptions,
        inputStyles: SELECT_INPUT_DEFAULT_STYLE.inputStyles,
        containerStyles: darkMode ? SELECT_INPUT_DEFAULT_STYLE.containerStylesDark : SELECT_INPUT_DEFAULT_STYLE.containerStyles
      },
      {},
      {}
    )}</div> ${error ? `<div class="text-red-400 text-2xs">error: ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(JSON.stringify(error))}`;
      }
    })}</div>` : ``}</div>` : `<div class="flex flex-col gap-1 w-full"><div class="text-xs text-tertiary" data-svelte-h="svelte-1fhvvqu">Dynamic Select is not available in this mode, write value directly</div> ${validate_component(JsonEditor, "JsonEditor").$$render(
      $$result,
      { code: rawCode, value },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>`}`;
  } while (!$$settled);
  return $$rendered;
});
const css = {
  code: "input.svelte-1bqrn0o::-webkit-inner-spin-button,input.svelte-1bqrn0o::-webkit-outer-spin-button{-webkit-appearance:none!important;margin:0}input[type=number].svelte-1bqrn0o{-moz-appearance:textfield!important}",
  map: null
};
function testRegex(pattern, value) {
  try {
    const regex = new RegExp(pattern);
    return regex.test(value);
  } catch (err) {
    return false;
  }
}
const ArgInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "" } = $$props;
  let { value } = $$props;
  let { defaultValue = void 0 } = $$props;
  let { description = "" } = $$props;
  let { format = "" } = $$props;
  let { contentEncoding = void 0 } = $$props;
  let { type = void 0 } = $$props;
  let { oneOf = void 0 } = $$props;
  let { required = false } = $$props;
  let { pattern = void 0 } = $$props;
  let { valid = true } = $$props;
  let { enum_ = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { itemsType = void 0 } = $$props;
  let { displayHeader = true } = $$props;
  let { properties = void 0 } = $$props;
  let { nestedRequired = void 0 } = $$props;
  let { autofocus = null } = $$props;
  let { compact = false } = $$props;
  let { password = false } = $$props;
  let { pickForField = void 0 } = $$props;
  let { variableEditor = void 0 } = $$props;
  let { itemPicker = void 0 } = $$props;
  let { noMargin = false } = $$props;
  let { extra = {} } = $$props;
  let { minW = true } = $$props;
  let { prettifyHeader = false } = $$props;
  let { resourceTypes } = $$props;
  let { disablePortal = false } = $$props;
  let { showSchemaExplorer = false } = $$props;
  let { simpleTooltip = void 0 } = $$props;
  let { customErrorMessage = void 0 } = $$props;
  let { onlyMaskPassword = false } = $$props;
  let { nullable = false } = $$props;
  let { title = void 0 } = $$props;
  let { placeholder = void 0 } = $$props;
  let { order = void 0 } = $$props;
  let { editor = void 0 } = $$props;
  let { orderEditable = false } = $$props;
  let { shouldDispatchChanges = false } = $$props;
  let { helperScript = void 0 } = $$props;
  let { otherArgs = {} } = $$props;
  let oneOfSelected = void 0;
  async function updateOneOfSelected(oneOf2) {
    if (oneOf2 && oneOf2.length >= 2 && (!oneOfSelected || !oneOf2.some((o) => o.title === oneOfSelected))) {
      if (value && value["label"] && oneOf2.some((o) => o.title === value["label"])) {
        const existingValue = JSON.parse(JSON.stringify(value));
        oneOfSelected = value["label"];
        await tick();
        value = existingValue;
      } else {
        oneOfSelected = oneOf2[0]["title"];
      }
    }
  }
  function updateOneOfSelectedValue(oneOfSelected2) {
    if (oneOfSelected2) {
      value = { label: oneOfSelected2 };
    }
  }
  const dispatch = createEventDispatcher();
  let ignoreValueUndefined = false;
  let error = "";
  let s3FilePicker;
  let s3FileUploadRawMode;
  let isListJson = false;
  let el = void 0;
  let inputCat = setInputCat(type, format, itemsType?.type, enum_, contentEncoding);
  let rawValue = void 0;
  function computeDefaultValue(nvalue, inputCat2, defaultValue2, nnullable) {
    if ((value == void 0 || value == null) && !ignoreValueUndefined) {
      value = defaultValue2;
      if (defaultValue2 === void 0 || defaultValue2 === null) {
        if (inputCat2 === "string") {
          value = nullable ? null : "";
        } else if (inputCat2 == "enum" && required) {
          value = enum_?.[0];
        } else if (inputCat2 == "boolean") {
          value = false;
        } else if (inputCat2 == "list") {
          value = [];
        }
      } else if (inputCat2 === "object") {
        evalValueToRaw();
      }
    }
    if (nnullable && type === "string" && value === "") {
      value = null;
    }
  }
  computeDefaultValue();
  let oldDefaultValue = defaultValue;
  function handleDefaultValueChange() {
    if (value == oldDefaultValue) {
      value = defaultValue;
    }
    oldDefaultValue = defaultValue;
  }
  function evalValueToRaw() {
    rawValue = inputCat === "object" || inputCat === "resource-object" || inputCat == "list" && !isListJson ? JSON.stringify(value, null, 2) : void 0;
  }
  evalValueToRaw();
  function focus() {
  }
  function validateInput(pattern2, v, required2) {
    if (nullable && emptyString(v)) {
      error = "";
      valid && (valid = true);
    } else if (required2 && (v == void 0 || v == null || v === "")) {
      error = "Required";
      valid && (valid = false);
    } else {
      if (pattern2 && !testRegex(pattern2, v)) {
        if (!emptyString(customErrorMessage)) {
          error = customErrorMessage ?? "";
        } else if (format == "email") {
          error = "invalid email address";
        } else {
          error = `Should match ${pattern2}`;
        }
        valid && (valid = false);
      } else {
        error = "";
        !valid && (valid = true);
      }
    }
  }
  let itemsLimit = 50;
  let oldValue = value;
  function compareValues(value2) {
    if (!deepEqual(oldValue, value2)) {
      oldValue = value2;
      dispatch("change");
    }
  }
  let debounced = debounce(() => compareValues(value), 50);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.defaultValue === void 0 && $$bindings.defaultValue && defaultValue !== void 0) $$bindings.defaultValue(defaultValue);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  if ($$props.format === void 0 && $$bindings.format && format !== void 0) $$bindings.format(format);
  if ($$props.contentEncoding === void 0 && $$bindings.contentEncoding && contentEncoding !== void 0) $$bindings.contentEncoding(contentEncoding);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.oneOf === void 0 && $$bindings.oneOf && oneOf !== void 0) $$bindings.oneOf(oneOf);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0) $$bindings.required(required);
  if ($$props.pattern === void 0 && $$bindings.pattern && pattern !== void 0) $$bindings.pattern(pattern);
  if ($$props.valid === void 0 && $$bindings.valid && valid !== void 0) $$bindings.valid(valid);
  if ($$props.enum_ === void 0 && $$bindings.enum_ && enum_ !== void 0) $$bindings.enum_(enum_);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.itemsType === void 0 && $$bindings.itemsType && itemsType !== void 0) $$bindings.itemsType(itemsType);
  if ($$props.displayHeader === void 0 && $$bindings.displayHeader && displayHeader !== void 0) $$bindings.displayHeader(displayHeader);
  if ($$props.properties === void 0 && $$bindings.properties && properties !== void 0) $$bindings.properties(properties);
  if ($$props.nestedRequired === void 0 && $$bindings.nestedRequired && nestedRequired !== void 0) $$bindings.nestedRequired(nestedRequired);
  if ($$props.autofocus === void 0 && $$bindings.autofocus && autofocus !== void 0) $$bindings.autofocus(autofocus);
  if ($$props.compact === void 0 && $$bindings.compact && compact !== void 0) $$bindings.compact(compact);
  if ($$props.password === void 0 && $$bindings.password && password !== void 0) $$bindings.password(password);
  if ($$props.pickForField === void 0 && $$bindings.pickForField && pickForField !== void 0) $$bindings.pickForField(pickForField);
  if ($$props.variableEditor === void 0 && $$bindings.variableEditor && variableEditor !== void 0) $$bindings.variableEditor(variableEditor);
  if ($$props.itemPicker === void 0 && $$bindings.itemPicker && itemPicker !== void 0) $$bindings.itemPicker(itemPicker);
  if ($$props.noMargin === void 0 && $$bindings.noMargin && noMargin !== void 0) $$bindings.noMargin(noMargin);
  if ($$props.extra === void 0 && $$bindings.extra && extra !== void 0) $$bindings.extra(extra);
  if ($$props.minW === void 0 && $$bindings.minW && minW !== void 0) $$bindings.minW(minW);
  if ($$props.prettifyHeader === void 0 && $$bindings.prettifyHeader && prettifyHeader !== void 0) $$bindings.prettifyHeader(prettifyHeader);
  if ($$props.resourceTypes === void 0 && $$bindings.resourceTypes && resourceTypes !== void 0) $$bindings.resourceTypes(resourceTypes);
  if ($$props.disablePortal === void 0 && $$bindings.disablePortal && disablePortal !== void 0) $$bindings.disablePortal(disablePortal);
  if ($$props.showSchemaExplorer === void 0 && $$bindings.showSchemaExplorer && showSchemaExplorer !== void 0) $$bindings.showSchemaExplorer(showSchemaExplorer);
  if ($$props.simpleTooltip === void 0 && $$bindings.simpleTooltip && simpleTooltip !== void 0) $$bindings.simpleTooltip(simpleTooltip);
  if ($$props.customErrorMessage === void 0 && $$bindings.customErrorMessage && customErrorMessage !== void 0) $$bindings.customErrorMessage(customErrorMessage);
  if ($$props.onlyMaskPassword === void 0 && $$bindings.onlyMaskPassword && onlyMaskPassword !== void 0) $$bindings.onlyMaskPassword(onlyMaskPassword);
  if ($$props.nullable === void 0 && $$bindings.nullable && nullable !== void 0) $$bindings.nullable(nullable);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.order === void 0 && $$bindings.order && order !== void 0) $$bindings.order(order);
  if ($$props.editor === void 0 && $$bindings.editor && editor !== void 0) $$bindings.editor(editor);
  if ($$props.orderEditable === void 0 && $$bindings.orderEditable && orderEditable !== void 0) $$bindings.orderEditable(orderEditable);
  if ($$props.shouldDispatchChanges === void 0 && $$bindings.shouldDispatchChanges && shouldDispatchChanges !== void 0) $$bindings.shouldDispatchChanges(shouldDispatchChanges);
  if ($$props.helperScript === void 0 && $$bindings.helperScript && helperScript !== void 0) $$bindings.helperScript(helperScript);
  if ($$props.otherArgs === void 0 && $$bindings.otherArgs && otherArgs !== void 0) $$bindings.otherArgs(otherArgs);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0) $$bindings.focus(focus);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      updateOneOfSelected(oneOf);
    }
    {
      updateOneOfSelectedValue(oneOfSelected);
    }
    inputCat = setInputCat(type, format, itemsType?.type, enum_, contentEncoding);
    {
      computeDefaultValue(value, inputCat, defaultValue, nullable);
    }
    defaultValue != void 0 && handleDefaultValueChange();
    {
      validateInput(pattern, value, required);
    }
    shouldDispatchChanges && debounced(value);
    $$rendered = `${validate_component(S3FilePicker, "S3FilePicker").$$render(
      $$result,
      {
        readOnlyMode: false,
        this: s3FilePicker,
        selectedFileKey: value
      },
      {
        this: ($$value) => {
          s3FilePicker = $$value;
          $$settled = false;
        },
        selectedFileKey: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}  <div class="${"flex flex-col w-full " + escape(minW ? "min-w-[250px]" : "", true)}"><div>${displayHeader ? `${validate_component(FieldHeader, "FieldHeader").$$render(
      $$result,
      {
        prettify: prettifyHeader,
        label: title && !emptyString(title) ? title : label,
        disabled,
        required,
        type,
        contentEncoding,
        format,
        simpleTooltip
      },
      {},
      {}
    )}` : ``} ${description ? `<div class="text-xs italic pb-1 text-secondary"><pre class="font-main whitespace-normal">${escape(description)}</pre></div>` : ``} <div class="flex space-x-1">${inputCat == "number" ? `${extra["min"] != void 0 && extra["max"] != void 0 ? `${validate_component(Range, "Range").$$render(
      $$result,
      {
        min: extra["min"],
        max: extra["max"],
        defaultValue,
        value
      },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${extra["seconds"] !== void 0 ? `${validate_component(SecondsInput, "SecondsInput").$$render(
      $$result,
      { seconds: value },
      {
        seconds: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${extra?.currency ? `${validate_component(CurrencyInput, "CurrencyInput").$$render(
      $$result,
      {
        inputClasses: {
          formatted: "px-2 w-full py-1.5 text-black dark:text-white",
          wrapper: "w-full windmillapp",
          formattedZero: "text-black dark:text-white"
        },
        noColor: true,
        currency: extra?.currency,
        locale: extra?.currencyLocale ?? "en-US",
        value
      },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `<div class="relative w-full"><input ${autofocus ? "autofocus" : ""} ${disabled ? "disabled" : ""} type="number" class="${escape(
      null_to_empty(valid ? "" : "border border-red-700 border-opacity-30 focus:border-red-700 focus:border-opacity-30 bg-red-100"),
      true
    ) + " svelte-1bqrn0o"}"${add_attribute("placeholder", placeholder ?? defaultValue ?? "", 0)}${add_attribute("min", extra["min"], 0)}${add_attribute("max", extra["max"], 0)}${add_attribute("value", value, 0)}></div>`}`}`}` : `${inputCat == "boolean" ? `${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        disabled,
        class: valid ? "" : "border border-red-700 border-opacity-30 focus:border-red-700 focus:border-opacity-30 bg-red-100",
        checked: value
      },
      {
        checked: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${type == "boolean" && value == void 0 ? `<span data-svelte-h="svelte-5wn5dd">  Not set</span>` : ``}` : `${inputCat == "list" && !isListJson ? `<div class="w-full flex gap-4"><div class="w-full">${Array.isArray(itemsType?.multiselect) && Array.isArray(value) ? `<div class="items-start">${validate_component(MultiSelect, "Multiselect").$$render(
      $$result,
      {
        ulOptionsClass: "p-2 !bg-surface-secondary",
        disabled,
        options: itemsType?.multiselect ?? [],
        selectedOptionsDraggable: true,
        selected: value
      },
      {
        selected: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : `${itemsType?.enum != void 0 && Array.isArray(itemsType?.enum) && Array.isArray(value) ? `<div class="items-start">${validate_component(MultiSelect, "Multiselect").$$render(
      $$result,
      {
        ulOptionsClass: "p-2 !bg-surface-secondary",
        disabled,
        options: itemsType?.enum ?? [],
        selectedOptionsDraggable: true,
        selected: value
      },
      {
        selected: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : `<div class="w-full">${Array.isArray(value) ? `${each(value ?? [], (v, i) => {
      return `${i < itemsLimit ? `<div class="flex max-w-md mt-1 w-full items-center">${itemsType?.type == "number" ? `<input type="number" id="arg-input-number-array" class="svelte-1bqrn0o"${add_attribute("value", v, 0)}>` : `${itemsType?.type == "string" && itemsType?.contentEncoding == "base64" ? `<input type="file" class="my-6 svelte-1bqrn0o" ${""}>` : `${itemsType?.type == "object" && itemsType?.resourceType === void 0 && itemsType?.properties === void 0 ? `${validate_component(JsonEditor, "JsonEditor").$$render(
        $$result,
        {
          code: JSON.stringify(v, null, 2),
          value: v
        },
        {
          value: ($$value) => {
            v = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `${Array.isArray(itemsType?.enum) ? `${validate_component(ArgEnum, "ArgEnum").$$render(
        $$result,
        {
          required: true,
          create: extra["disableCreate"] != true,
          defaultValue,
          valid,
          disabled,
          autofocus,
          enum_: itemsType?.enum ?? [],
          enumLabels: extra["enumLabels"],
          value: v
        },
        {
          value: ($$value) => {
            v = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `${itemsType?.type == "resource" && itemsType?.resourceType ? `${validate_component(ResourcePicker, "ResourcePicker").$$render(
        $$result,
        {
          resourceType: itemsType?.resourceType,
          value: v
        },
        {
          value: ($$value) => {
            v = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `${itemsType?.type === "object" && itemsType?.properties ? `<div class="p-8 border rounded-md w-full">${validate_component(SchemaForm, "SchemaForm").$$render(
        $$result,
        {
          onlyMaskPassword,
          disablePortal,
          disabled,
          noDelete: true,
          schema: getSchemaFromProperties(itemsType?.properties),
          args: v
        },
        {
          args: ($$value) => {
            v = $$value;
            $$settled = false;
          }
        },
        {}
      )} </div>` : `<input type="text" id="arg-input-array" class="svelte-1bqrn0o"${add_attribute("value", v, 0)}>`}`}`}`}`}`} <button class="rounded-full p-1 bg-surface-secondary duration-200 hover:bg-surface-hover ml-2" aria-label="Clear">${validate_component(X, "X").$$render($$result, { size: 14 }, {}, {})}</button> </div>` : ``}`;
    })} ${value.length > itemsLimit ? `<button class="text-xs py-2 text-blue-600">${escape(itemsLimit)}/${escape(value.length)}: Load 50 more...</button>` : ``}` : ``}</div> <div class="flex mt-2 gap-20 items-baseline">${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "border",
        color: "light",
        size: "xs",
        btnClasses: "mt-1",
        id: "arg-input-add-item",
        startIcon: { icon: Plus }
      },
      {},
      {
        default: () => {
          return `Add item`;
        }
      }
    )}</div>`}`}</div> <div class="mt-2 mr-4">${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        checked: isListJson,
        textClass: "text-secondary",
        size: "xs",
        options: { right: "json" }
      },
      {},
      {}
    )}</div></div>` : `${inputCat == "dynselect" ? `${validate_component(DynSelect, "DynSelect").$$render(
      $$result,
      {
        name: label,
        args: otherArgs,
        helperScript,
        entrypoint: format.substring("dynselect_".length),
        value
      },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${inputCat == "resource-object" && resourceTypes == void 0 ? `<span class="text-2xs text-tertiary" data-svelte-h="svelte-1dg4her">Loading resource types...</span>` : `${inputCat == "resource-object" && (resourceTypes == void 0 || format.split("-").length > 1 && resourceTypes.includes(format.substring("resource-".length))) ? `${validate_component(ObjectResourceInput, "ObjectResourceInput").$$render(
      $$result,
      {
        defaultValue,
        selectFirst: true,
        disablePortal,
        format,
        showSchemaExplorer,
        value
      },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${inputCat == "resource-object" && format.split("-").length > 1 && format.replace("resource-", "").replace("_", "").toLowerCase() == "s3object" ? `<div class="flex flex-col w-full gap-1">${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        class: "flex justify-end",
        size: "xs",
        options: { left: "Raw S3 object input" },
        checked: s3FileUploadRawMode
      },
      {
        checked: ($$value) => {
          s3FileUploadRawMode = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${s3FileUploadRawMode ? `${validate_component(JsonEditor, "JsonEditor").$$render(
      $$result,
      {
        code: JSON.stringify(value ?? defaultValue ?? { s3: "" }, null, 2),
        editor,
        value
      },
      {
        editor: ($$value) => {
          editor = $$value;
          $$settled = false;
        },
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "border",
        color: "light",
        size: "xs",
        btnClasses: "mt-1",
        startIcon: { icon: Pipette }
      },
      {},
      {
        default: () => {
          return `Choose an object from the catalog`;
        }
      }
    )}` : `${validate_component(FileUpload, "FileUpload").$$render(
      $$result,
      {
        allowMultiple: false,
        randomFileKey: true,
        defaultValue: defaultValue?.s3
      },
      {},
      {}
    )}`}</div>` : `${inputCat == "object" || inputCat == "resource-object" || isListJson ? `${oneOf && oneOf.length >= 2 ? `<div class="flex flex-col gap-2 w-full">${oneOf && oneOf.length >= 2 ? `${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
      $$result,
      { selected: oneOfSelected },
      {
        selected: ($$value) => {
          oneOfSelected = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(oneOf, (obj) => {
            return `${validate_component(ToggleButton, "ToggleButton").$$render($$result, { value: obj.title, label: obj.title }, {}, {})}`;
          })}`;
        }
      }
    )} ${oneOfSelected ? (() => {
      let objIdx = oneOf.findIndex((o) => o.title === oneOfSelected), obj = oneOf[objIdx];
      return `  ${obj && obj.properties && Object.keys(obj.properties).length > 0 ? `<div class="p-4 pl-8 border rounded w-full">${orderEditable ? `${validate_component(SchemaFormDND, "SchemaFormDnd").$$render(
        $$result,
        {
          onlyMaskPassword,
          disablePortal,
          disabled,
          schema: {
            properties: Object.fromEntries(Object.entries(obj.properties).filter(([k, v]) => k !== "label")),
            order: obj.order?.filter((k) => k !== "label") ?? void 0,
            $schema: "",
            required: obj.required ?? [],
            type: "object"
          },
          args: value,
          dndType: `nested-${title}`
        },
        {},
        {}
      )}` : `${validate_component(SchemaForm, "SchemaForm").$$render(
        $$result,
        {
          onlyMaskPassword,
          disablePortal,
          disabled,
          noDelete: true,
          schema: {
            properties: Object.fromEntries(Object.entries(obj.properties).filter(([k, v]) => k !== "label")),
            order: obj.order?.filter((k) => k !== "label") ?? void 0,
            $schema: "",
            required: obj.required ?? [],
            type: "object"
          },
          args: value
        },
        {
          args: ($$value) => {
            value = $$value;
            $$settled = false;
          }
        },
        {}
      )}`}</div>` : `${disabled ? `<textarea disabled></textarea>` : `${validate_component(JsonEditor, "JsonEditor").$$render(
        $$result,
        { code: rawValue, editor, value },
        {
          editor: ($$value) => {
            editor = $$value;
            $$settled = false;
          },
          value: ($$value) => {
            value = $$value;
            $$settled = false;
          }
        },
        {}
      )}`}`}`;
    })() : ``}` : `${disabled ? `<textarea disabled></textarea>` : `${validate_component(JsonEditor, "JsonEditor").$$render(
      $$result,
      { code: rawValue, editor, value },
      {
        editor: ($$value) => {
          editor = $$value;
          $$settled = false;
        },
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}`}</div>` : `${properties && Object.keys(properties).length > 0 && inputCat !== "list" ? `<div class="p-4 pl-8 border rounded-md w-full">${orderEditable ? `${validate_component(SchemaFormDND, "SchemaFormDnd").$$render(
      $$result,
      {
        onlyMaskPassword,
        disablePortal,
        disabled,
        schema: {
          properties,
          $schema: "",
          required: nestedRequired ?? [],
          type: "object",
          order
        },
        args: value,
        dndType: `nested-${title}`
      },
      {},
      {}
    )}` : `${validate_component(SchemaForm, "SchemaForm").$$render(
      $$result,
      {
        onlyMaskPassword,
        disablePortal,
        disabled,
        schema: {
          properties,
          order,
          $schema: "",
          required: nestedRequired ?? [],
          type: "object"
        },
        args: value
      },
      {
        args: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}</div>` : `${disabled ? `<textarea disabled></textarea>` : `${validate_component(JsonEditor, "JsonEditor").$$render(
      $$result,
      { code: rawValue, editor, value },
      {
        editor: ($$value) => {
          editor = $$value;
          $$settled = false;
        },
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}`}`} ${inputCat == "list" ? `<div class="block">${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        checked: isListJson,
        textClass: "text-secondary",
        size: "xs",
        options: { right: "json" }
      },
      {},
      {}
    )}</div>` : ``}` : `${inputCat == "enum" ? `<div class="flex flex-row w-full gap-1">${validate_component(ArgEnum, "ArgEnum").$$render(
      $$result,
      {
        required,
        create: extra["disableCreate"] != true,
        defaultValue,
        valid,
        disabled,
        enum_,
        autofocus,
        enumLabels: extra["enumLabels"],
        value
      },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : `${inputCat == "date" ? `${format === "date" ? `${validate_component(DateInput, "DateInput").$$render(
      $$result,
      {
        autofocus,
        dateFormat: extra?.["dateFormat"],
        value
      },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${validate_component(DateTimeInput, "DateTimeInput").$$render(
      $$result,
      { useDropdown: true, autofocus, value },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}` : `${inputCat == "sql" || inputCat == "yaml" ? `<div class="border my-1 mb-4 w-full border-primary">${validate_component(SimpleEditor, "SimpleEditor").$$render(
      $$result,
      {
        lang: inputCat,
        autoHeight: true,
        this: editor,
        code: value
      },
      {
        this: ($$value) => {
          editor = $$value;
          $$settled = false;
        },
        code: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : `${inputCat == "base64" ? `<div class="flex flex-col my-6 w-full"><input ${autofocus ? "autofocus" : ""} type="file" ${""} class="svelte-1bqrn0o"> ${value?.length ? `<div class="text-2xs text-tertiary mt-1">File length: ${escape(value.length)} base64 chars (${escape((value.length / 1024 / 1024).toFixed(2))}MB)</div>` : ``}</div>` : `${inputCat == "resource-string" ? `${validate_component(ResourcePicker, "ResourcePicker").$$render(
      $$result,
      {
        selectFirst: true,
        disablePortal,
        initialValue: defaultValue,
        resourceType: format && format.split("-").length > 1 ? format.substring("resource-".length) : void 0,
        showSchemaExplorer,
        value
      },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${inputCat == "email" ? `<input ${autofocus ? "autofocus" : ""} ${disabled ? "disabled" : ""} type="email" class="${escape(
      null_to_empty(valid ? "" : "border border-red-700 border-opacity-30 focus:border-red-700 focus:border-opacity-3"),
      true
    ) + " svelte-1bqrn0o"}"${add_attribute("placeholder", placeholder ?? defaultValue ?? "", 0)}${add_attribute("value", value, 0)}>` : `${inputCat == "string" ? `<div class="flex flex-col w-full"><div class="flex flex-row w-full items-center justify-between relative">${password || extra?.["password"] == true ? `${onlyMaskPassword ? `${validate_component(Password, "Password").$$render(
      $$result,
      {
        disabled,
        placeholder: placeholder ?? defaultValue ?? "",
        password: value
      },
      {
        password: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${validate_component(PasswordArgInput, "PasswordArgInput").$$render(
      $$result,
      { disabled, value },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}` : `<textarea ${autofocus ? "autofocus" : ""}${add_attribute(
      "rows",
      extra?.["minRows"] ? extra["minRows"]?.toString() : "1",
      0
    )} ${disabled ? "disabled" : ""}${add_attribute(
      "class",
      twMerge("w-full", valid ? "" : "border border-red-700 border-opacity-30 focus:border-red-700 focus:border-opacity-3"),
      0
    )}${add_attribute("placeholder", placeholder ?? defaultValue ?? "", 0)}${add_attribute("this", el, 0)}>${escape(value || "")}</textarea> ${!disabled && itemPicker && extra?.["disableVariablePicker"] != true ? ` <button class="absolute right-1 top-1 py-1 min-w-min !px-2 items-center text-gray-800 bg-surface-secondary border rounded center-center hover:bg-gray-300 transition-all cursor-pointer" title="Insert a Variable">${validate_component(Dollar_sign, "DollarSign").$$render($$result, { class: "!text-tertiary", size: 14 }, {}, {})}</button>` : ``}`}</div> ${variableEditor ? `<div class="text-sm text-tertiary">${value && typeof value == "string" && value?.startsWith("$var:") ? `Linked to variable <button class="text-blue-500 underline">${escape(value.slice(5))}</button>` : ``}</div>` : ``}</div>` : ``}`}`}`}`}`}`}`}`}`}`}`}`}`}`} ${slots.actions ? slots.actions({}) : ``}</div> ${!compact || error && error != "" ? `<div class="text-right text-xs text-red-600 dark:text-red-400">${disabled || error === "" ? ` ` : `${escape(error)}`}</div>` : `${!noMargin ? `<div class="mb-2"></div>` : ``}`}</div> </div>`;
  } while (!$$settled);
  return $$rendered;
});
const SchemaForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fields;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { schema } = $$props;
  let { schemaSkippedValues = [] } = $$props;
  let { schemaFieldTooltip = {} } = $$props;
  let { args = {} } = $$props;
  let { disabledArgs = [] } = $$props;
  let { disabled = false } = $$props;
  let { isValid = true } = $$props;
  let { autofocus = false } = $$props;
  let { shouldHideNoInputs = false } = $$props;
  let { compact = false } = $$props;
  let { linkedSecret = void 0 } = $$props;
  let { linkedSecretCandidates = void 0 } = $$props;
  let { noVariablePicker = false } = $$props;
  let { flexWrap = false } = $$props;
  let { noDelete = false } = $$props;
  let { prettifyHeader = false } = $$props;
  let { disablePortal = false } = $$props;
  let { showSchemaExplorer = false } = $$props;
  let { showReset = false } = $$props;
  let { onlyMaskPassword = false } = $$props;
  let { lightweightMode = false } = $$props;
  let { dndConfig = void 0 } = $$props;
  let { items = void 0 } = $$props;
  let { helperScript = void 0 } = $$props;
  const dispatch = createEventDispatcher();
  let inputCheck = {};
  function setDefaults() {
    const nargs = {};
    Object.keys(schema?.properties ?? {}).forEach((key) => {
      if (schema?.properties[key].default != void 0 && args[key] == void 0) {
        let value = schema?.properties[key].default;
        nargs[key] = value === "object" ? JSON.parse(JSON.stringify(value)) : value;
      }
    });
    args = nargs;
  }
  let keys = Array.isArray(schema?.order) ? schema?.order : Object.keys(schema?.properties ?? {});
  function removeExtraKey() {
    const nargs = {};
    Object.keys(args ?? {}).forEach((key) => {
      if (keys.includes(key)) {
        nargs[key] = args[key];
      }
    });
    args = nargs;
  }
  let pickForField;
  let itemPicker = void 0;
  let variableEditor = void 0;
  let resourceTypes = void 0;
  async function loadResourceTypes() {
    resourceTypes = await getResourceTypes();
  }
  loadResourceTypes();
  function hasExtraKeys() {
    return Object.keys(args ?? {}).some((x) => !keys.includes(x));
  }
  function reorder() {
    let lkeys = Object.keys(schema?.properties ?? {});
    if (!deepEqual(schema?.order, lkeys) || !deepEqual(keys, lkeys)) {
      if (schema?.order && Array.isArray(schema.order)) {
        const n = {};
        schema.order.forEach((x) => {
          if (schema.properties && schema.properties[x] != void 0) {
            n[x] = schema.properties[x];
          }
        });
        Object.keys(schema.properties ?? {}).filter((x) => !schema.order?.includes(x)).forEach((x) => {
          n[x] = schema.properties[x];
        });
        schema.properties = n;
      }
      let nkeys = Object.keys(schema.properties ?? {});
      if (!deepEqual(keys, nkeys)) {
        keys = nkeys;
        dispatch("change");
      }
    }
    if (!noDelete && hasExtraKeys()) {
      removeExtraKey();
    }
  }
  if ($$props.schema === void 0 && $$bindings.schema && schema !== void 0) $$bindings.schema(schema);
  if ($$props.schemaSkippedValues === void 0 && $$bindings.schemaSkippedValues && schemaSkippedValues !== void 0) $$bindings.schemaSkippedValues(schemaSkippedValues);
  if ($$props.schemaFieldTooltip === void 0 && $$bindings.schemaFieldTooltip && schemaFieldTooltip !== void 0) $$bindings.schemaFieldTooltip(schemaFieldTooltip);
  if ($$props.args === void 0 && $$bindings.args && args !== void 0) $$bindings.args(args);
  if ($$props.disabledArgs === void 0 && $$bindings.disabledArgs && disabledArgs !== void 0) $$bindings.disabledArgs(disabledArgs);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.isValid === void 0 && $$bindings.isValid && isValid !== void 0) $$bindings.isValid(isValid);
  if ($$props.autofocus === void 0 && $$bindings.autofocus && autofocus !== void 0) $$bindings.autofocus(autofocus);
  if ($$props.shouldHideNoInputs === void 0 && $$bindings.shouldHideNoInputs && shouldHideNoInputs !== void 0) $$bindings.shouldHideNoInputs(shouldHideNoInputs);
  if ($$props.compact === void 0 && $$bindings.compact && compact !== void 0) $$bindings.compact(compact);
  if ($$props.linkedSecret === void 0 && $$bindings.linkedSecret && linkedSecret !== void 0) $$bindings.linkedSecret(linkedSecret);
  if ($$props.linkedSecretCandidates === void 0 && $$bindings.linkedSecretCandidates && linkedSecretCandidates !== void 0) $$bindings.linkedSecretCandidates(linkedSecretCandidates);
  if ($$props.noVariablePicker === void 0 && $$bindings.noVariablePicker && noVariablePicker !== void 0) $$bindings.noVariablePicker(noVariablePicker);
  if ($$props.flexWrap === void 0 && $$bindings.flexWrap && flexWrap !== void 0) $$bindings.flexWrap(flexWrap);
  if ($$props.noDelete === void 0 && $$bindings.noDelete && noDelete !== void 0) $$bindings.noDelete(noDelete);
  if ($$props.prettifyHeader === void 0 && $$bindings.prettifyHeader && prettifyHeader !== void 0) $$bindings.prettifyHeader(prettifyHeader);
  if ($$props.disablePortal === void 0 && $$bindings.disablePortal && disablePortal !== void 0) $$bindings.disablePortal(disablePortal);
  if ($$props.showSchemaExplorer === void 0 && $$bindings.showSchemaExplorer && showSchemaExplorer !== void 0) $$bindings.showSchemaExplorer(showSchemaExplorer);
  if ($$props.showReset === void 0 && $$bindings.showReset && showReset !== void 0) $$bindings.showReset(showReset);
  if ($$props.onlyMaskPassword === void 0 && $$bindings.onlyMaskPassword && onlyMaskPassword !== void 0) $$bindings.onlyMaskPassword(onlyMaskPassword);
  if ($$props.lightweightMode === void 0 && $$bindings.lightweightMode && lightweightMode !== void 0) $$bindings.lightweightMode(lightweightMode);
  if ($$props.dndConfig === void 0 && $$bindings.dndConfig && dndConfig !== void 0) $$bindings.dndConfig(dndConfig);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  if ($$props.helperScript === void 0 && $$bindings.helperScript && helperScript !== void 0) $$bindings.helperScript(helperScript);
  if ($$props.setDefaults === void 0 && $$bindings.setDefaults && setDefaults !== void 0) $$bindings.setDefaults(setDefaults);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (args == void 0 || typeof args !== "object") {
        args = {};
      }
    }
    isValid = allTrue(inputCheck ?? {});
    schema && reorder();
    fields = items ?? keys.map((x) => ({ id: x, value: x }));
    $$rendered = `${showReset ? `<div class="flex flex-row-reverse w-full">${validate_component(Button, "Button").$$render($$result, { size: "xs", color: "light" }, {}, {
      default: () => {
        return `Reset args to runnable&#39;s defaults`;
      }
    })}</div>` : ``} <div class="${"w-full " + escape($$props.class, true) + " " + escape(flexWrap ? "flex flex-row flex-wrap gap-x-6 " : "", true)}">${keys.length > 0 ? `${each(fields, (item, i) => {
      let argName = item.value;
      return `<div> ${!schemaSkippedValues.includes(argName) && Object.keys(schema?.properties ?? {}).includes(argName) ? ` <div class="flex flex-row items-center bg-surface">${typeof args == "object" && schema?.properties[argName] ? `${computeShow(argName, schema?.properties[argName].showExpr, args) ? `${lightweightMode ? `${validate_component(LightweightArgInput, "LightweightArgInput").$$render(
        $$result,
        {
          label: argName,
          description: schema.properties[argName].description,
          type: schema.properties[argName].type,
          oneOf: schema.properties[argName].oneOf,
          required: schema?.required?.includes(argName),
          pattern: schema.properties[argName].pattern,
          defaultValue: schema.properties[argName].default,
          enum_: schema.properties[argName].enum,
          format: schema.properties[argName].format,
          contentEncoding: schema.properties[argName].contentEncoding,
          customErrorMessage: schema.properties[argName].customErrorMessage,
          nestedRequired: schema.properties[argName]?.required,
          itemsType: schema.properties[argName].items,
          extra: schema.properties[argName],
          title: schema.properties[argName].title,
          placeholder: schema.properties[argName].placeholder,
          value: args[argName],
          valid: inputCheck[argName],
          properties: schema.properties[argName].properties
        },
        {
          value: ($$value) => {
            args[argName] = $$value;
            $$settled = false;
          },
          valid: ($$value) => {
            inputCheck[argName] = $$value;
            $$settled = false;
          },
          properties: ($$value) => {
            schema.properties[argName].properties = $$value;
            $$settled = false;
          }
        },
        {
          actions: () => {
            return `${slots.actions ? slots.actions({}) : ``} ${linkedSecretCandidates?.includes(argName) ? `<div>${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render($$result, { selected: linkedSecret == argName }, {}, {
              default: () => {
                return `${validate_component(ToggleButton, "ToggleButton").$$render(
                  $$result,
                  {
                    value: false,
                    size: "sm",
                    label: "Inlined",
                    tooltip: "The value is inlined in the resource and thus has no special treatment."
                  },
                  {},
                  {}
                )} ${validate_component(ToggleButton, "ToggleButton").$$render(
                  $$result,
                  {
                    position: "right",
                    value: true,
                    size: "sm",
                    label: "Secret",
                    tooltip: "The value will be stored in a newly created linked secret variable at the same path. That variable can be permissioned differently, will be treated as a secret the UI, operators will not be able to load it and every access will generate a corresponding audit log."
                  },
                  {},
                  {}
                )} `;
              }
            })} </div>` : ``} `;
          }
        }
      )}` : `${validate_component(ArgInput, "ArgInput").$$render(
        $$result,
        {
          disablePortal,
          resourceTypes,
          prettifyHeader,
          autofocus: i == 0 && autofocus ? true : null,
          label: argName,
          description: schema.properties[argName].description,
          type: schema.properties[argName].type,
          oneOf: schema.properties[argName].oneOf,
          required: schema?.required?.includes(argName),
          pattern: schema.properties[argName].pattern,
          defaultValue: schema.properties[argName].default,
          enum_: schema.properties[argName].enum,
          format: schema.properties[argName].format,
          contentEncoding: schema.properties[argName].contentEncoding,
          customErrorMessage: schema.properties[argName].customErrorMessage,
          nestedRequired: schema.properties[argName]?.required,
          itemsType: schema.properties[argName].items,
          disabled: disabledArgs.includes(argName) || disabled,
          compact,
          variableEditor,
          itemPicker,
          password: linkedSecret == argName,
          extra: schema.properties[argName],
          showSchemaExplorer,
          simpleTooltip: schemaFieldTooltip[argName],
          onlyMaskPassword,
          nullable: schema.properties[argName].nullable,
          title: schema.properties[argName].title,
          placeholder: schema.properties[argName].placeholder,
          orderEditable: dndConfig != void 0,
          otherArgs: args,
          helperScript,
          value: args[argName],
          valid: inputCheck[argName],
          properties: schema.properties[argName].properties,
          order: schema.properties[argName].order,
          pickForField
        },
        {
          value: ($$value) => {
            args[argName] = $$value;
            $$settled = false;
          },
          valid: ($$value) => {
            inputCheck[argName] = $$value;
            $$settled = false;
          },
          properties: ($$value) => {
            schema.properties[argName].properties = $$value;
            $$settled = false;
          },
          order: ($$value) => {
            schema.properties[argName].order = $$value;
            $$settled = false;
          },
          pickForField: ($$value) => {
            pickForField = $$value;
            $$settled = false;
          }
        },
        {
          actions: () => {
            return `${slots.actions ? slots.actions({}) : ``} ${linkedSecretCandidates?.includes(argName) ? `<div>${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render($$result, { selected: linkedSecret == argName }, {}, {
              default: () => {
                return `${validate_component(ToggleButton, "ToggleButton").$$render(
                  $$result,
                  {
                    value: false,
                    size: "sm",
                    label: "Inlined",
                    tooltip: "The value is inlined in the resource and thus has no special treatment."
                  },
                  {},
                  {}
                )} ${validate_component(ToggleButton, "ToggleButton").$$render(
                  $$result,
                  {
                    position: "right",
                    value: true,
                    size: "sm",
                    label: "Secret",
                    tooltip: "The value will be stored in a newly created linked secret variable at the same path. That variable can be permissioned differently, will be treated as a secret the UI, operators will not be able to load it and every access will generate a corresponding audit log."
                  },
                  {},
                  {}
                )} `;
              }
            })} </div>` : ``}`;
          }
        }
      )}`}  ` : ``}` : ``} </div>` : ``} </div>`;
    })}` : `${!shouldHideNoInputs ? `<div class="text-secondary text-sm" data-svelte-h="svelte-vz4qhn">No inputs</div>` : ``}`}</div> ${!noVariablePicker ? `${validate_component(ItemPicker, "ItemPicker").$$render(
      $$result,
      {
        pickCallback: (path, _) => {
          if (pickForField) {
            args[pickForField] = "$var:" + path;
          }
        },
        itemName: "Variable",
        tooltip: "Variables are dynamic values that have a key associated to them and can be retrieved during the execution of a Script or Flow.",
        documentationLink: "https://www.windmill.dev/docs/core_concepts/variables_and_secrets",
        extraField: "path",
        loadItems: async () => (await VariableService.listVariable({ workspace: $workspaceStore ?? "" })).map((x) => ({ name: x.path, ...x })),
        this: itemPicker
      },
      {
        this: ($$value) => {
          itemPicker = $$value;
          $$settled = false;
        }
      },
      {
        submission: () => {
          return `<div slot="submission">${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "border",
              color: "blue",
              size: "sm",
              startIcon: { icon: Plus }
            },
            {},
            {
              default: () => {
                return `New Variable`;
              }
            }
          )}</div>`;
        }
      }
    )} ${validate_component(VariableEditor, "VariableEditor").$$render(
      $$result,
      { this: variableEditor },
      {
        this: ($$value) => {
          variableEditor = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
export {
  AppConnectInner as A,
  GfmMarkdown as G,
  ItemPicker as I,
  JsonEditor as J,
  NoItemFound as N,
  ResourceEditorDrawer as R,
  SchemaForm as S,
  AppConnectDrawer as a,
  ResourcePicker as b,
  ArgInput as c,
  SchemaFormDND as d,
  Grip_vertical as e
};
