import { c as create_ssr_component, t as compute_rest_props, w as spread, y as escape_attribute_value, x as escape_object, l as add_classes, e as escape, d as createEventDispatcher, v as validate_component, f as each } from "./ssr.js";
import { e as emptySchema } from "./toast.js";
import register from "highlight.js/lib/languages/json";
import { T as TableCustom } from "./TableCustom.js";
import { T as Tabs, a as Tab } from "./Tabs.js";
import { T as TabContent } from "./TabContent.js";
import "./index2.js";
import { B as Badge } from "./Badge.js";
import "./common.js";
/* empty css                                     */
/* empty css                                             */
import hljs from "highlight.js/lib/core";
const css$1 = {
  code: ".langtag.svelte-1deyj1k{position:relative}.langtag.svelte-1deyj1k:after{align-items:center;background:var(--langtag-background,inherit);border-radius:var(--langtag-border-radius,0);color:var(--langtag-color,inherit);content:attr(data-language);display:flex;justify-content:center;padding:var(--langtag-padding,1em);position:absolute;right:var(--langtag-right,0);top:var(--langtag-top,0)}",
  map: null
};
const LangTag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["code", "highlighted", "languageName", "langtag"]);
  let { code } = $$props;
  let { highlighted } = $$props;
  let { languageName = "plaintext" } = $$props;
  let { langtag = false } = $$props;
  if ($$props.code === void 0 && $$bindings.code && code !== void 0) $$bindings.code(code);
  if ($$props.highlighted === void 0 && $$bindings.highlighted && highlighted !== void 0) $$bindings.highlighted(highlighted);
  if ($$props.languageName === void 0 && $$bindings.languageName && languageName !== void 0) $$bindings.languageName(languageName);
  if ($$props.langtag === void 0 && $$bindings.langtag && langtag !== void 0) $$bindings.langtag(langtag);
  $$result.css.add(css$1);
  return `<pre${spread(
    [
      {
        "data-language": escape_attribute_value(languageName)
      },
      escape_object($$restProps)
    ],
    {
      classes: (langtag ? "langtag" : "") + " svelte-1deyj1k"
    }
  )}><code${add_classes("hljs".trim())}>${highlighted ? `<!-- HTML_TAG_START -->${highlighted}<!-- HTML_TAG_END -->` : `${escape(code)}`}</code></pre>`;
});
const Highlight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["language", "code", "langtag"]);
  let { language } = $$props;
  let { code } = $$props;
  let { langtag = false } = $$props;
  createEventDispatcher();
  let highlighted = "";
  if ($$props.language === void 0 && $$bindings.language && language !== void 0) $$bindings.language(language);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0) $$bindings.code(code);
  if ($$props.langtag === void 0 && $$bindings.langtag && langtag !== void 0) $$bindings.langtag(langtag);
  {
    {
      hljs.registerLanguage(language.name, language.register);
      highlighted = hljs.highlight(code, { language: language.name }).value;
    }
  }
  return `${slots.default ? slots.default({ highlighted }) : ` ${validate_component(LangTag, "LangTag").$$render($$result, Object.assign({}, $$restProps, { languageName: language.name }, { langtag }, { highlighted }, { code }), {}, {})} `}`;
});
const json = { name: "json", register };
const css = {
  code: "pre code.hljs{display:block;overflow-x:auto;overflow:visible!important;padding:1em}code.hljs{padding:3px 5px}.dark .hljs{background:#2e3440!important}.dark .hljs,.dark .hljs-subst{color:#d8dee9!important}.dark .hljs-selector-tag{color:#81a1c1!important}.dark .hljs-selector-id{color:#8fbcbb!important;font-weight:700!important}.dark .hljs-selector-attr,.dark .hljs-selector-class{color:#8fbcbb!important}.dark .hljs-property,.dark .hljs-selector-pseudo{color:#88c0d0!important}.dark .hljs-addition{background-color:hsla(92,28%,65%,.5)!important}.dark .hljs-deletion{background-color:rgba(191,97,106,.5)!important}.dark .hljs-built_in,.dark .hljs-class,.dark .hljs-type{color:#8fbcbb!important}.dark .hljs-function,.dark .hljs-function>.hljs-title,.dark .hljs-title.hljs-function{color:#88c0d0!important}.dark .hljs-keyword,.dark .hljs-literal,.dark .hljs-symbol{color:#81a1c1!important}.dark .hljs-number{color:#b48ead!important}.dark .hljs-regexp{color:#ebcb8b!important}.dark .hljs-string{color:#a3be8c!important}.dark .hljs-title{color:#8fbcbb!important}.dark .hljs-params{color:#d8dee9!important}.dark .hljs-bullet{color:#81a1c1!important}.dark .hljs-code{color:#8fbcbb!important}.dark .hljs-emphasis{font-style:italic!important}.dark .hljs-formula{color:#8fbcbb!important}.dark .hljs-strong{font-weight:700!important}.dark .hljs-link:hover{-webkit-text-decoration:underline!important;text-decoration:underline!important}.dark .hljs-comment,.dark .hljs-quote{color:#4c566a!important}.dark .hljs-doctag{color:#8fbcbb!important}.dark .hljs-meta,.dark .hljs-meta .hljs-keyword{color:#5e81ac!important}.dark .hljs-meta .hljs-string{color:#a3be8c!important}.dark .hljs-attr{color:#8fbcbb!important}.dark .hljs-attribute{color:#d8dee9!important}.dark .hljs-name{color:#81a1c1!important}.dark .hljs-section{color:#88c0d0!important}.dark .hljs-tag{color:#81a1c1!important}.dark .hljs-template-variable,.dark .hljs-variable{color:#d8dee9!important}.dark .hljs-template-tag{color:#5e81ac!important}.dark .language-abnf .hljs-attribute{color:#88c0d0!important}.dark .language-abnf .hljs-symbol{color:#ebcb8b!important}.dark .language-apache .hljs-attribute{color:#88c0d0!important}.dark .language-apache .hljs-section{color:#81a1c1!important}.dark .language-arduino .hljs-built_in{color:#88c0d0!important}.dark .language-aspectj .hljs-meta{color:#d08770!important}.dark .language-aspectj>.hljs-title{color:#88c0d0!important}.dark .language-bnf .hljs-attribute{color:#8fbcbb!important}.dark .language-clojure .hljs-name{color:#88c0d0!important}.dark .language-clojure .hljs-symbol{color:#ebcb8b!important}.dark .language-coq .hljs-built_in{color:#88c0d0!important}.dark .language-cpp .hljs-meta .hljs-string{color:#8fbcbb!important}.dark .language-css .hljs-built_in{color:#88c0d0!important}.dark .language-css .hljs-keyword{color:#d08770!important}.dark .language-diff .hljs-meta,.dark .language-ebnf .hljs-attribute{color:#8fbcbb!important}.dark .language-glsl .hljs-built_in{color:#88c0d0!important}.dark .language-groovy .hljs-meta:not(:first-child),.dark .language-haxe .hljs-meta,.dark .language-java .hljs-meta{color:#d08770!important}.dark .language-ldif .hljs-attribute{color:#8fbcbb!important}.dark .language-lisp .hljs-name,.dark .language-lua .hljs-built_in,.dark .language-moonscript .hljs-built_in,.dark .language-nginx .hljs-attribute{color:#88c0d0!important}.dark .language-nginx .hljs-section{color:#5e81ac!important}.dark .language-pf .hljs-built_in,.dark .language-processing .hljs-built_in{color:#88c0d0!important}.dark .language-scss .hljs-keyword,.dark .language-stylus .hljs-keyword{color:#81a1c1!important}.dark .language-swift .hljs-meta{color:#d08770!important}.dark .language-vim .hljs-built_in{color:#88c0d0!important;font-style:italic!important}.dark .language-yaml .hljs-meta{color:#d08770!important}.hljs{background:#fff;color:#24292e}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#d73a49}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#6f42c1}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#005cc5}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#032f62}.hljs-built_in,.hljs-symbol{color:#e36209}.hljs-code,.hljs-comment,.hljs-formula{color:#6a737d}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#22863a}.hljs-subst{color:#24292e}.hljs-section{color:#005cc5;font-weight:700}.hljs-bullet{color:#735c0f}.hljs-emphasis{color:#24292e;font-style:italic}.hljs-strong{color:#24292e;font-weight:700}.hljs-addition{background-color:#f0fff4;color:#22863a}.hljs-deletion{background-color:#ffeef0;color:#b31d28}",
  map: null
};
const HighlightTheme = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return ``;
});
function getProperties(schema) {
  if (schema.properties) {
    return Object.entries(schema.properties);
  }
  return [];
}
const SchemaViewer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { schema = emptySchema() } = $$props;
  if ($$props.schema === void 0 && $$bindings.schema && schema !== void 0) $$bindings.schema(schema);
  return `${validate_component(HighlightTheme, "HighlightTheme").$$render($$result, {}, {}, {})} <div class="w-full">${validate_component(Tabs, "Tabs").$$render($$result, { selected: "arguments" }, {}, {
    content: () => {
      return `<div class="overflow-auto pt-2">${validate_component(TabContent, "TabContent").$$render($$result, { value: "arguments" }, {}, {
        default: () => {
          return `${schema && schema.properties && Object.keys(schema.properties).length > 0 && schema.required ? `<div class="flex flex-row">${validate_component(TableCustom, "TableCustom").$$render($$result, {}, {}, {
            body: () => {
              return `<tbody slot="body">${each(getProperties(schema), ([name, property]) => {
                return `<tr><td class="font-semibold pl-1">${escape(name)}</td> <td>${validate_component(Badge, "Badge").$$render($$result, { color: "blue" }, {}, {
                  default: () => {
                    return `${!property.type ? ` any ` : ` ${escape(property.type)} `}`;
                  }
                })}</td> <td>${escape(property.description ?? "")}</td> <td>${escape(property.default == "<function call>" ? "<function call>" : property.default ? JSON.stringify(property.default) : "")}</td> <td>${escape(property.format ?? "")} ${escape(property.contentEncoding ? `(encoding: ${property.contentEncoding})` : "")}</td> <td>${schema.required.includes(name) ? ` <span class="text-red-600 font-bold text-lg" data-svelte-h="svelte-1i1pid9">*</span> ` : ``}</td> </tr>`;
              })}</tbody>`;
            },
            "header-row": () => {
              return `<tr slot="header-row" class="underline" data-svelte-h="svelte-3q9lz0"><th>name</th> <th>type</th> <th>description</th> <th>default</th> <th>format</th> <th>required</th></tr>`;
            }
          })}</div>` : `<div class="text-secondary text-xs italic m-1" data-svelte-h="svelte-3jw3qo">No arguments</div>`}`;
        }
      })} ${validate_component(TabContent, "TabContent").$$render($$result, { value: "advanced" }, {}, {
        default: () => {
          return `${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: json,
              code: JSON.stringify(schema, null, 4)
            },
            {},
            {}
          )}`;
        }
      })}</div> `;
    },
    default: () => {
      return `${validate_component(Tab, "Tab").$$render($$result, { value: "arguments" }, {}, {
        default: () => {
          return `Arguments`;
        }
      })} ${validate_component(Tab, "Tab").$$render($$result, { value: "advanced" }, {}, {
        default: () => {
          return `Advanced`;
        }
      })}`;
    }
  })}</div>`;
});
export {
  HighlightTheme as H,
  SchemaViewer as S,
  Highlight as a,
  json as j
};
