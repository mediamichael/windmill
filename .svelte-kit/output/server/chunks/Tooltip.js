import { c as create_ssr_component, v as validate_component, u as setContext, h as getContext, t as compute_rest_props, w as spread, x as escape_object, s as subscribe, f as each, q as missing_component, e as escape, b as add_attribute } from "./ssr.js";
import { w as writable } from "./index.js";
import { i as is_void } from "./names.js";
import { r as resolveComponent, s as svgTags, c as createParser, n as nonNullable, g as gfmPlugin } from "./index2.js";
import { P as Popover, E as External_link } from "./Popover.js";
import { I as Icon } from "./Icon.js";
const Info = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "M12 16v-4" }],
    ["path", { "d": "M12 8h.01" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "info" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const componentsContextKey = "components";
const getComponentsMap = () => getContext(componentsContextKey);
const setComponentsContext = (value) => setContext(componentsContextKey, value);
const createComponentsContextValue = (init) => {
  const { set, subscribe: subscribe2 } = writable(init);
  return { set, subscribe: subscribe2 };
};
const astContextKey = "ast";
const setAstContext = (value) => setContext(astContextKey, value);
const createAstContextValue = (init) => {
  const { set, subscribe: subscribe2 } = writable(init);
  return { set, subscribe: subscribe2 };
};
const SVGElement = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["__tag"]);
  let { __tag } = $$props;
  if ($$props.__tag === void 0 && $$bindings.__tag && __tag !== void 0) $$bindings.__tag(__tag);
  return `  ${((tag) => {
    return tag ? `<${__tag}${spread([escape_object($$restProps)], {})}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(__tag)}`;
});
const Renderer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $components, $$unsubscribe_components;
  let { astNode } = $$props;
  const svgTags$1 = svgTags;
  const components = getComponentsMap();
  $$unsubscribe_components = subscribe(components, (value) => $components = value);
  const astContext = createAstContextValue(astNode);
  setAstContext(astContext);
  if ($$props.astNode === void 0 && $$bindings.astNode && astNode !== void 0) $$bindings.astNode(astNode);
  {
    astContext.set(astNode);
  }
  $$unsubscribe_components();
  return `${astNode.type === "root" ? `${each(astNode.children, (child) => {
    return `${validate_component(Renderer, "svelte:self").$$render($$result, { astNode: child }, {}, {})}`;
  })}` : `${astNode.type === "element" ? (() => {
    let component = resolveComponent($components, astNode.tagName);
    return `${typeof component === "string" ? `${svgTags$1.includes(component) ? `${Array.isArray(astNode.children) && astNode.children.length !== 0 ? `${validate_component(SVGElement, "SVGElement").$$render($$result, Object.assign({}, { __tag: component }, astNode.properties), {}, {
      default: () => {
        return `${each(astNode.children, (child) => {
          return `${validate_component(Renderer, "svelte:self").$$render($$result, { astNode: child }, {}, {})}`;
        })}`;
      }
    })}` : `${validate_component(SVGElement, "SVGElement").$$render($$result, Object.assign({}, { __tag: component }, astNode.properties), {}, {})}`}` : `${Array.isArray(astNode.children) && astNode.children.length !== 0 ? `${((tag) => {
      return tag ? `<${component}${spread([escape_object(astNode.properties)], {})}>${is_void(tag) ? "" : `${each(astNode.children, (child) => {
        return `${validate_component(Renderer, "svelte:self").$$render($$result, { astNode: child }, {}, {})}`;
      })}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
    })(component)}` : `${((tag) => {
      return tag ? `<${component}${spread([escape_object(astNode.properties)], {})}>${is_void(tag) ? "" : ``}${is_void(tag) ? "" : `</${tag}>`}` : "";
    })(component)}`}`}` : `${component !== null ? `${Array.isArray(astNode.children) && astNode.children.length !== 0 ? `${validate_component(component || missing_component, "svelte:component").$$render($$result, Object.assign({}, astNode.properties), {}, {
      default: () => {
        return `${each(astNode.children, (child) => {
          return `${validate_component(Renderer, "svelte:self").$$render($$result, { astNode: child }, {}, {})}`;
        })}`;
      }
    })}` : `${validate_component(component || missing_component, "svelte:component").$$render($$result, Object.assign({}, astNode.properties), {}, {})}`}` : ``}`}`;
  })() : `${astNode.type === "text" || astNode.type === "raw" ? `${escape(astNode.value)}` : ``}`}`}`;
});
const Markdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { md } = $$props;
  let { plugins = [] } = $$props;
  let parse;
  const componentsContextValue = createComponentsContextValue({});
  setComponentsContext(componentsContextValue);
  let result;
  if ($$props.md === void 0 && $$bindings.md && md !== void 0) $$bindings.md(md);
  if ($$props.plugins === void 0 && $$bindings.plugins && plugins !== void 0) $$bindings.plugins(plugins);
  parse = createParser(plugins);
  {
    componentsContextValue.set({
      ...plugins.map((plugin) => plugin.renderer).filter(nonNullable).reduce((acc, cur) => ({ ...acc, ...cur }), {})
    });
  }
  result = parse(md);
  return `${validate_component(Renderer, "Renderer").$$render($$result, { astNode: result }, {}, {})}`;
});
const Tooltip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { light = false } = $$props;
  let { wrapperClass = "" } = $$props;
  let { placement = void 0 } = $$props;
  let { documentationLink = void 0 } = $$props;
  let { small = false } = $$props;
  let { markdownTooltip = void 0 } = $$props;
  let { customSize = "100%" } = $$props;
  const plugins = [gfmPlugin()];
  if ($$props.light === void 0 && $$bindings.light && light !== void 0) $$bindings.light(light);
  if ($$props.wrapperClass === void 0 && $$bindings.wrapperClass && wrapperClass !== void 0) $$bindings.wrapperClass(wrapperClass);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0) $$bindings.placement(placement);
  if ($$props.documentationLink === void 0 && $$bindings.documentationLink && documentationLink !== void 0) $$bindings.documentationLink(documentationLink);
  if ($$props.small === void 0 && $$bindings.small && small !== void 0) $$bindings.small(small);
  if ($$props.markdownTooltip === void 0 && $$bindings.markdownTooltip && markdownTooltip !== void 0) $$bindings.markdownTooltip(markdownTooltip);
  if ($$props.customSize === void 0 && $$bindings.customSize && customSize !== void 0) $$bindings.customSize(customSize);
  return `${validate_component(Popover, "Popover").$$render(
    $$result,
    {
      notClickable: true,
      placement,
      class: wrapperClass,
      style: "transform: scale(" + parseFloat(customSize) / 100 + ");"
    },
    {},
    {
      text: () => {
        return `${markdownTooltip ? `<div class="prose-sm">${validate_component(Markdown, "Markdown").$$render($$result, { md: markdownTooltip, plugins }, {}, {})}</div>` : `${slots.default ? slots.default({}) : ``}`} ${documentationLink ? `<a${add_attribute("href", documentationLink, 0)} target="_blank" class="text-blue-300 text-xs"><div class="flex flex-row gap-2 mt-4">See documentation
					${validate_component(External_link, "ExternalLink").$$render($$result, { size: "16" }, {}, {})}</div></a>` : ``} `;
      },
      default: () => {
        return `<div class="${"inline-flex w-3 mx-0.5 h-3 " + escape(light ? "text-tertiary-inverse" : "text-tertiary", true) + " " + escape($$props.class, true) + " relative"}">${validate_component(Info, "InfoIcon").$$render(
          $$result,
          {
            class: (small ? "bottom-0" : "-bottom-0.5") + " absolute",
            size: small ? 12 : 14
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}`;
});
export {
  Info as I,
  Markdown as M,
  Tooltip as T
};
