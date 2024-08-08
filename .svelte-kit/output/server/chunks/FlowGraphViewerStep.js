import { m as get_store_value, c as create_ssr_component, o as onDestroy, e as escape, t as compute_rest_props, w as spread, x as escape_object, l as add_classes, f as each, A as add_styles, v as validate_component, d as createEventDispatcher, b as add_attribute, s as subscribe } from "./ssr.js";
import register$4 from "highlight.js/lib/languages/python";
import register$7 from "highlight.js/lib/languages/typescript";
import register from "highlight.js/lib/languages/go";
import register$5 from "highlight.js/lib/languages/shell";
import register$1 from "highlight.js/lib/languages/graphql";
import javascript$1 from "highlight.js/lib/languages/javascript";
import register$6 from "highlight.js/lib/languages/sql";
import register$3 from "highlight.js/lib/languages/powershell";
import register$2 from "highlight.js/lib/languages/php";
import "./index2.js";
import "yaml";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import { j as displayDate, B as Button, F as cleanExpr, H as truncateHash } from "./toast.js";
import "minimatch";
/* empty css                                     */
import "./common.js";
import { H as HighlightTheme, a as Highlight, S as SchemaViewer } from "./SchemaViewer.js";
import { a as Clipboard_copy, F as FlowGraph } from "./util.js";
import { O as ObjectViewer } from "./LightweightSchemaForm.js";
import { B as Badge } from "./Badge.js";
import { I as IconedResourceType } from "./IconedResourceType.js";
import { B as Building } from "./building.js";
import { twMerge } from "tailwind-merge";
import { D as Drawer, a as DrawerContent } from "./DrawerContent.js";
import { S as Skeleton } from "./Skeleton.js";
import { g as getScriptByPath, b as scriptPathToHref } from "./scripts.js";
import { v as dbClockDrift, w as workspaceStore, h as hubBaseUrlStore } from "./stores2.js";
import { J as JobService, F as FlowService, c as ScriptService } from "./services.gen.js";
/* empty css                                               */
import { C as Copy } from "./copy.js";
function subtractSeconds(date, seconds) {
  date.setSeconds(date.getSeconds() - seconds);
  return date;
}
function adjustDate(drift) {
  return new Date(Date.now() + drift);
}
async function computeDrift() {
  const now = Date.now();
  const dbClock = await JobService.getDbClock();
  dbClockDrift.set(dbClock - now);
}
function forLater(scheduledString) {
  return getDbClockNow() < subtractSeconds(new Date(scheduledString), 5);
}
function getDbClockNow() {
  let drift = get_store_value(dbClockDrift);
  if (drift == void 0) {
    computeDrift();
    drift = 0;
  }
  return adjustDate(drift);
}
const TimeAgo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { date } = $$props;
  let { withDate = false } = $$props;
  let { agoOnlyIfRecent = false } = $$props;
  let computedTimeAgo = void 0;
  let isRecent = true;
  onDestroy(() => {
  });
  async function computeDate() {
    computedTimeAgo = await displayDaysAgo(date);
  }
  function isToday(someDate) {
    const today = getDbClockNow();
    return someDate.getDate() == today.getDate() && someDate.getMonth() == today.getMonth() && someDate.getFullYear() == today.getFullYear();
  }
  function daysAgo(someDate) {
    const today = getDbClockNow();
    return Math.floor((today.getTime() - someDate.getTime()) / 864e5);
  }
  function secondsAgo(date2) {
    return Math.max(0, Math.floor((getDbClockNow().getTime() - date2.getTime()) / 1e3));
  }
  async function displayDaysAgo(dateString) {
    const date2 = await new Date(dateString);
    const nbSecondsAgo = secondsAgo(date2);
    if (nbSecondsAgo < 600) {
      return `${nbSecondsAgo}s ago`;
    } else if (isToday(date2)) {
      isRecent = false;
      return `today at ${date2.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
    } else {
      isRecent = false;
      let dAgo = daysAgo(date2);
      if (dAgo == 0) {
        return `yesterday at ${date2.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
      } else if (dAgo > 7 && withDate) {
        return `${dAgo + 1} days ago at ${date2.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
      } else {
        return !withDate ? displayDate(dateString, false, withDate) : "";
      }
    }
  }
  if ($$props.date === void 0 && $$bindings.date && date !== void 0) $$bindings.date(date);
  if ($$props.withDate === void 0 && $$bindings.withDate && withDate !== void 0) $$bindings.withDate(withDate);
  if ($$props.agoOnlyIfRecent === void 0 && $$bindings.agoOnlyIfRecent && agoOnlyIfRecent !== void 0) $$bindings.agoOnlyIfRecent(agoOnlyIfRecent);
  date && computeDate();
  return `${withDate ? `${escape(displayDate(date))}` : ``} ${computedTimeAgo && (!agoOnlyIfRecent || isRecent) ? `${escape(computedTimeAgo)}` : ``}`;
});
const css$1 = {
  code: 'pre.svelte-13wubp.svelte-13wubp{margin:0}table.svelte-13wubp.svelte-13wubp,td.svelte-13wubp.svelte-13wubp,tr.svelte-13wubp.svelte-13wubp{border:0;margin:0;padding:0;vertical-align:baseline}table.svelte-13wubp.svelte-13wubp{border-collapse:collapse;border-spacing:0;width:100%}tr.svelte-13wubp:first-of-type td.svelte-13wubp{padding-top:1em}tr.svelte-13wubp:last-child td.svelte-13wubp{padding-bottom:1em}tr.svelte-13wubp td.svelte-13wubp:first-of-type{z-index:2}td.svelte-13wubp.svelte-13wubp{padding-left:var(--padding-left,1em);padding-right:var(--padding-right,1em)}td.hljs.svelte-13wubp.svelte-13wubp:not(.hideBorder):after{background:var(--border-color,currentColor);content:"";height:100%;position:absolute;right:0;top:0;width:1px}.wrapLines.svelte-13wubp.svelte-13wubp{white-space:pre-wrap}pre.svelte-13wubp.svelte-13wubp,td.svelte-13wubp.svelte-13wubp,td.svelte-13wubp>code.svelte-13wubp{position:relative}pre.svelte-13wubp.svelte-13wubp,td.svelte-13wubp>code.svelte-13wubp{z-index:1}.line-background.svelte-13wubp.svelte-13wubp{height:100%;left:0;position:absolute;top:0;width:100%;z-index:0}tr.svelte-13wubp:first-of-type td .line-background.svelte-13wubp,tr.svelte-13wubp:last-of-type td .line-background.svelte-13wubp{height:calc(100% - 1em)}tr.svelte-13wubp:first-of-type td .line-background.svelte-13wubp{top:1em}tr.svelte-13wubp:last-of-type td .line-background.svelte-13wubp{bottom:1em}',
  map: null
};
const DIGIT_WIDTH = 12;
const MIN_DIGITS = 2;
const HIGHLIGHTED_BACKGROUND = "rgba(254, 241, 96, 0.2)";
const LineNumbers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let lines;
  let len_digits;
  let len;
  let width;
  let $$restProps = compute_rest_props($$props, ["highlighted", "hideBorder", "wrapLines", "startingLineNumber", "highlightedLines"]);
  let { highlighted } = $$props;
  let { hideBorder = false } = $$props;
  let { wrapLines = false } = $$props;
  let { startingLineNumber = 1 } = $$props;
  let { highlightedLines = [] } = $$props;
  if ($$props.highlighted === void 0 && $$bindings.highlighted && highlighted !== void 0) $$bindings.highlighted(highlighted);
  if ($$props.hideBorder === void 0 && $$bindings.hideBorder && hideBorder !== void 0) $$bindings.hideBorder(hideBorder);
  if ($$props.wrapLines === void 0 && $$bindings.wrapLines && wrapLines !== void 0) $$bindings.wrapLines(wrapLines);
  if ($$props.startingLineNumber === void 0 && $$bindings.startingLineNumber && startingLineNumber !== void 0) $$bindings.startingLineNumber(startingLineNumber);
  if ($$props.highlightedLines === void 0 && $$bindings.highlightedLines && highlightedLines !== void 0) $$bindings.highlightedLines(highlightedLines);
  $$result.css.add(css$1);
  lines = highlighted.split("\n");
  len_digits = lines.length.toString().length;
  len = len_digits - MIN_DIGITS < 1 ? MIN_DIGITS : len_digits;
  width = len * DIGIT_WIDTH;
  return `<div${spread([escape_object($$restProps)], {
    classes: "svelte-13wubp",
    styles: { "overflow-x": `auto` }
  })}><table class="svelte-13wubp"><tbody${add_classes("hljs".trim())}>${each(lines, (line, i) => {
    let lineNumber = i + startingLineNumber;
    return ` <tr class="svelte-13wubp"><td class="${[
      "svelte-13wubp",
      "hljs " + (hideBorder ? "hideBorder" : "")
    ].join(" ").trim()}"${add_styles({
      "position": `sticky`,
      "left": `0`,
      "text-align": `right`,
      "user-select": `none`,
      "width": width + "px"
    })}><code class="svelte-13wubp"${add_styles({
      "color": `var(--line-number-color, currentColor)`
    })}>${escape(lineNumber)}</code> ${highlightedLines.includes(i) ? `<div class="${["svelte-13wubp", "line-background"].join(" ").trim()}"${add_styles({
      "background": `var(--highlighted-background, ${HIGHLIGHTED_BACKGROUND})`
    })}></div>` : ``}</td> <td class="svelte-13wubp"><pre class="${["svelte-13wubp", wrapLines ? "wrapLines" : ""].join(" ").trim()}"><code><!-- HTML_TAG_START -->${line || "\n"}<!-- HTML_TAG_END --></code></pre> ${highlightedLines.includes(i) ? `<div class="${["svelte-13wubp", "line-background"].join(" ").trim()}"${add_styles({
      "background": `var(--highlighted-background, ${HIGHLIGHTED_BACKGROUND})`
    })}></div>` : ``}</td> </tr>`;
  })}</tbody></table> </div>`;
});
const go = { name: "go", register };
const graphql = { name: "graphql", register: register$1 };
const javascript = { name: "javascript", register: javascript$1 };
const php = { name: "php", register: register$2 };
const powershell = { name: "powershell", register: register$3 };
const python = { name: "python", register: register$4 };
const shell = { name: "shell", register: register$5 };
const sql = { name: "sql", register: register$6 };
const typescript = { name: "typescript", register: register$7 };
const HighlightCode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let lang;
  let { code = "" } = $$props;
  let { language } = $$props;
  let { lines = false } = $$props;
  function getLang(lang2) {
    switch (lang2) {
      case "python3":
        return python;
      case "deno":
        return typescript;
      case "nativets":
        return typescript;
      case "bun":
        return typescript;
      case "bunnative":
        return typescript;
      case "go":
        return go;
      case "bash":
        return shell;
      case "frontend":
        return javascript;
      case "graphql":
        return graphql;
      case "mysql":
        return sql;
      case "postgresql":
        return sql;
      case "snowflake":
        return sql;
      case "bigquery":
        return sql;
      case "powershell":
        return powershell;
      case "php":
        return php;
      default:
        return typescript;
    }
  }
  if ($$props.code === void 0 && $$bindings.code && code !== void 0) $$bindings.code(code);
  if ($$props.language === void 0 && $$bindings.language && language !== void 0) $$bindings.language(language);
  if ($$props.lines === void 0 && $$bindings.lines && lines !== void 0) $$bindings.lines(lines);
  lang = getLang(language);
  return `${validate_component(HighlightTheme, "HighlightTheme").$$render($$result, {}, {}, {})} <div class="relative overflow-x-auto">${validate_component(Button, "Button").$$render(
    $$result,
    {
      wrapperClasses: "absolute top-2 right-2 z-20",
      color: "light",
      size: "xs2",
      startIcon: { icon: Clipboard_copy },
      iconOnly: true
    },
    {},
    {}
  )} ${code?.length < 5e3 ? `${!lines ? `${validate_component(Highlight, "Highlight").$$render(
    $$result,
    {
      class: "nowrap " + $$props.class,
      language: lang,
      code
    },
    {},
    {}
  )}` : `${validate_component(Highlight, "Highlight").$$render(
    $$result,
    {
      class: "nowrap " + $$props.class,
      language: lang,
      code
    },
    {},
    {
      default: ({ highlighted }) => {
        return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted }, {}, {})}`;
      }
    }
  )}`}` : `<pre class="${"overflow-auto max-h-screen " + escape($$props.class, true)}"><code class="${"language-" + escape(language, true)}">${escape(code)}</code></pre>`}</div>`;
});
const InputTransformsViewer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let entries;
  let { inputTransforms } = $$props;
  if ($$props.inputTransforms === void 0 && $$bindings.inputTransforms && inputTransforms !== void 0) $$bindings.inputTransforms(inputTransforms);
  entries = Object.entries(inputTransforms);
  return `${entries.length ? `<ul class="mb-1">${each(entries, ([key, val]) => {
    return `<li class="flex pb-2 last:pb-0"><span class="font-black text-secondary text-xs">${escape(key)}:</span> ${val.type == "static" ? `${typeof val.value == "object" ? `${validate_component(ObjectViewer, "ObjectViewer").$$render($$result, { json: val.value }, {}, {})}` : `<span class="text-xs text-primary whitespace-pre-wrap ml-2">${escape(val.value)} </span>`}` : `<span class="text-xs text-primary whitespace-pre-wrap ml-2">${escape(cleanExpr(val.expr))} </span>`} </li>`;
  })}</ul>` : `<div class="text-tertiary text-sm" data-svelte-h="svelte-1occpxt">No inputs</div>`}`;
});
const IconedPath = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { path } = $$props;
  let { hash = void 0 } = $$props;
  if ($$props.path === void 0 && $$bindings.path && path !== void 0) $$bindings.path(path);
  if ($$props.hash === void 0 && $$bindings.hash && hash !== void 0) $$bindings.hash(hash);
  return `<div class="${"flex space-x-2 items-center w-full shrink min-w-0 " + escape($$props.class, true)}">${path.startsWith("hub/") ? `<div>${validate_component(IconedResourceType, "IconedResourceType").$$render(
    $$result,
    {
      width: "20px",
      height: "20px",
      name: path.split("/")[2],
      silent: true
    },
    {},
    {}
  )}</div> <span class="text-sm truncate">${escape(path)}</span>` : `<div class="center-center">${validate_component(Building, "Building").$$render($$result, { size: 16 }, {}, {})}</div> <span class="text-sm truncate">${escape(path)}</span> ${hash ? `${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(truncateHash(hash))}`;
    }
  })}` : ``}`}</div>`;
});
const FlowGraphViewer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { flow } = $$props;
  let { overflowAuto = false } = $$props;
  let { noSide = false } = $$props;
  let { download = false } = $$props;
  let { noGraph = false } = $$props;
  let { stepDetail = void 0 } = $$props;
  createEventDispatcher();
  if ($$props.flow === void 0 && $$bindings.flow && flow !== void 0) $$bindings.flow(flow);
  if ($$props.overflowAuto === void 0 && $$bindings.overflowAuto && overflowAuto !== void 0) $$bindings.overflowAuto(overflowAuto);
  if ($$props.noSide === void 0 && $$bindings.noSide && noSide !== void 0) $$bindings.noSide(noSide);
  if ($$props.download === void 0 && $$bindings.download && download !== void 0) $$bindings.download(download);
  if ($$props.noGraph === void 0 && $$bindings.noGraph && noGraph !== void 0) $$bindings.noGraph(noGraph);
  if ($$props.stepDetail === void 0 && $$bindings.stepDetail && stepDetail !== void 0) $$bindings.stepDetail(stepDetail);
  return `<div class="grid grid-cols-3 w-full h-full">${!noGraph ? `<div class="${[
    escape(noSide ? "col-span-3" : "sm:col-span-2 col-span-3", true) + " w-full border max-h-full",
    overflowAuto ? "overflow-auto" : ""
  ].join(" ").trim()}">${validate_component(FlowGraph, "FlowGraph").$$render(
    $$result,
    {
      download,
      minHeight: 400,
      modules: flow?.value?.modules,
      failureModule: flow?.value?.failure_module,
      rebuildOnChange: flow
    },
    {},
    {}
  )}</div>` : ``} ${!noSide ? `<div${add_attribute("class", twMerge("relative w-full h-full min-h-[150px] max-h-[90vh] border-r border-b border-t p-2 pt-0 overflow-auto hidden sm:flex flex-col gap-4", noGraph ? "border-0 w-max" : ""), 0)}>${validate_component(FlowGraphViewerStep, "FlowGraphViewerStep").$$render($$result, { schema: flow.schema, stepDetail }, {}, {})}</div>` : ``}</div>`;
});
const FlowPathViewer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { path } = $$props;
  let { noSide = false } = $$props;
  let flow = void 0;
  async function loadFlow(path2) {
    flow = await FlowService.getFlowByPath({ workspace: $workspaceStore, path: path2 });
  }
  if ($$props.path === void 0 && $$bindings.path && path !== void 0) $$bindings.path(path);
  if ($$props.noSide === void 0 && $$bindings.noSide && noSide !== void 0) $$bindings.noSide(noSide);
  path && loadFlow(path);
  $$unsubscribe_workspaceStore();
  return `<div class="flex flex-col flex-1 h-full overflow-auto">${flow ? `${validate_component(FlowGraphViewer, "FlowGraphViewer").$$render($$result, { noSide, flow }, {}, {})}` : `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[40]] }, {}, {})}`}</div>`;
});
const css = {
  code: '.code-container.svelte-11aj4p2{overflow:hidden;position:relative}.code-container.svelte-11aj4p2:after{background:linear-gradient(to bottom,hsla(0,0%,100%,0),rgb(var(--color-surface)));bottom:0;content:"";height:100px;left:0;pointer-events:none;position:absolute;right:0}',
  map: null
};
const FlowModuleScript = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { path } = $$props;
  let { hash = void 0 } = $$props;
  let { showDate = false } = $$props;
  let { showAllCode = true } = $$props;
  let code;
  let language;
  let lock = void 0;
  let date = void 0;
  let notFound = false;
  async function loadCode(path2, hash2) {
    try {
      notFound = false;
      const script = hash2 ? await ScriptService.getScriptByHash({ workspace: $workspaceStore, hash: hash2 }) : await getScriptByPath(path2);
      code = script.content;
      language = script.language;
      lock = script.lock;
      date = script.created_at;
    } catch (e) {
      notFound = true;
      console.error(e);
    }
  }
  if ($$props.path === void 0 && $$bindings.path && path !== void 0) $$bindings.path(path);
  if ($$props.hash === void 0 && $$bindings.hash && hash !== void 0) $$bindings.hash(hash);
  if ($$props.showDate === void 0 && $$bindings.showDate && showDate !== void 0) $$bindings.showDate(showDate);
  if ($$props.showAllCode === void 0 && $$bindings.showAllCode && showAllCode !== void 0) $$bindings.showAllCode(showAllCode);
  $$result.css.add(css);
  path && loadCode(path, hash);
  $$unsubscribe_workspaceStore();
  return `<div class="flex flex-col flex-1 h-full overflow-auto p-2">${showDate && date ? `<span class="text-xs text-tertiary mb-4">${validate_component(TimeAgo, "TimeAgo").$$render(
    $$result,
    {
      agoOnlyIfRecent: true,
      withDate: true,
      date
    },
    {},
    {}
  )}</span>` : ``} ${notFound ? `<div class="text-red-400">script not found at ${escape(path)} in workspace ${escape($workspaceStore)}</div>` : `${showAllCode ? `${validate_component(HighlightCode, "HighlightCode").$$render($$result, { language, code }, {}, {})}` : `<div class="code-container h-full svelte-11aj4p2">${validate_component(HighlightCode, "HighlightCode").$$render(
    $$result,
    {
      language,
      code: code?.split("\n").slice(0, 10).join("\n")
    },
    {},
    {}
  )}</div> <button data-svelte-h="svelte-1cqvwio">Show all</button>`}`} ${lock ? `<h3 class="mb-2 mt-6" data-svelte-h="svelte-11o08la">Lock</h3> <pre class="bg-surface-secondary text-xs p-2 overflow-auto w-full">${escape(lock)}</pre>` : ``} </div>`;
});
const FlowGraphViewerStep = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $hubBaseUrlStore, $$unsubscribe_hubBaseUrlStore;
  $$unsubscribe_hubBaseUrlStore = subscribe(hubBaseUrlStore, (value) => $hubBaseUrlStore = value);
  let { schema = void 0 } = $$props;
  let { stepDetail = void 0 } = $$props;
  let codeViewer;
  if ($$props.schema === void 0 && $$bindings.schema && schema !== void 0) $$bindings.schema(schema);
  if ($$props.stepDetail === void 0 && $$bindings.stepDetail && stepDetail !== void 0) $$bindings.stepDetail(stepDetail);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(HighlightTheme, "HighlightTheme").$$render($$result, {}, {}, {})} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "900px", this: codeViewer },
      {
        this: ($$value) => {
          codeViewer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Expanded Code" }, {}, {
            default: () => {
              return `${stepDetail && typeof stepDetail != "string" ? `${stepDetail.value.type == "script" ? `<div class="mb-4"><a rel="noreferrer" target="_blank"${add_attribute("href", scriptPathToHref(stepDetail?.value?.path ?? "", $hubBaseUrlStore), 0)} class="">${validate_component(IconedPath, "IconedPath").$$render($$result, { path: stepDetail?.value?.path ?? "" }, {}, {})}</a></div> <div class="text-2xs mb-4 mt-2"><h3 class="mb-2" data-svelte-h="svelte-19ld7gk">Step Inputs</h3> ${validate_component(InputTransformsViewer, "InputTransformsViewer").$$render(
                $$result,
                {
                  inputTransforms: stepDetail?.value?.input_transforms ?? {}
                },
                {},
                {}
              )}</div> ${stepDetail.value.path.startsWith("hub/") ? `<div class="mt-6"><h3 class="mb-2" data-svelte-h="svelte-tr0f0y">Code</h3> <iframe class="w-full h-full text-sm" title="embedded script from hub" frameborder="0" src="${escape($hubBaseUrlStore, true) + "/embed/script/" + escape(stepDetail.value?.path?.substring(4), true)}"></iframe></div>` : ``}` : `${stepDetail.value.type == "rawscript" ? `<div class="text-2xs mb-4 mt-2"><h3 class="mb-2" data-svelte-h="svelte-19ld7gk">Step Inputs</h3> ${validate_component(InputTransformsViewer, "InputTransformsViewer").$$render(
                $$result,
                {
                  inputTransforms: stepDetail?.value?.input_transforms ?? {}
                },
                {},
                {}
              )}</div> <h3 class="mb-2" data-svelte-h="svelte-tr0f0y">Code</h3> <span class="!text-xs">${validate_component(HighlightCode, "HighlightCode").$$render(
                $$result,
                {
                  language: stepDetail.value.language,
                  code: stepDetail.value.content
                },
                {},
                {}
              )}</span> <h3 class="mt-4 mb-2" data-svelte-h="svelte-b6ndq6">Lockfile</h3> <div>${stepDetail.value.lock ? `<pre class="bg-surface-secondary text-sm p-2 h-full overflow-auto w-full">${escape(stepDetail.value.lock)}</pre>` : `<p class="bg-surface-secondary text-sm p-2" data-svelte-h="svelte-t7pg4s">There is no lock file for this script</p>`}</div>` : ``}`}` : ``}`;
            }
          })}`;
        }
      }
    )} <div${add_attribute("class", twMerge("p-2 overflow-y-scroll"), 0)}>${stepDetail == void 0 ? `<div><p class="font-medium text-secondary text-center pt-4 pb-8" data-svelte-h="svelte-1cxjze6">Click on a step to see its details</p> ${schema ? `<h3 class="mb-2 font-semibold" data-svelte-h="svelte-10duikp">Flow Inputs</h3> ${validate_component(SchemaViewer, "SchemaViewer").$$render($$result, { schema }, {}, {})}` : ``}</div>` : `${stepDetail == "Input" ? `${schema ? `${validate_component(SchemaViewer, "SchemaViewer").$$render($$result, { schema }, {}, {})}` : `<p class="font-medium text-secondary text-center pt-4 pb-8" data-svelte-h="svelte-w0qhjx">No input schema</p>`}` : `${stepDetail == "Result" ? `<p class="font-medium text-secondary text-center pt-4 pb-8" data-svelte-h="svelte-9ea7lo">End of the flow</p>` : `${typeof stepDetail != "string" && stepDetail.value ? `<div class=""><div class="sticky top-0 bg-surface w-full flex items-center py-2">${stepDetail.id ? `${validate_component(Badge, "Badge").$$render($$result, { color: "indigo" }, {}, {
      default: () => {
        return `${escape(stepDetail.id)}`;
      }
    })}` : ``} <span class="ml-2 font-medium text-lg">${stepDetail.summary ? `${escape(stepDetail.summary)}` : `${stepDetail.value.type == "identity" ? `Identity` : `${stepDetail.value.type == "forloopflow" ? `For loop ${stepDetail.value.parallel ? `(parallel)` : ``} ${stepDetail.value.skip_failures ? `(skip failures)` : ``}` : `${stepDetail.value.type == "branchall" ? `Run all branches ${stepDetail.value.parallel ? `(parallel)` : ``}` : `${stepDetail.value.type == "branchone" ? `Run one branch` : `${stepDetail.value.type == "flow" ? `Inner flow` : `Anonymous step`}`}`}`}`}`}</span></div> ${stepDetail.value.type == "script" ? `<div class="pb-2"><a rel="noreferrer" target="_blank"${add_attribute("href", scriptPathToHref(stepDetail?.value?.path ?? "", $hubBaseUrlStore), 0)} class="">${validate_component(IconedPath, "IconedPath").$$render($$result, { path: stepDetail?.value?.path ?? "" }, {}, {})}</a></div>` : ``}</div> ${stepDetail.value.type == "identity" ? `<p class="font-medium text-secondary text-center pt-4 pb-8" data-svelte-h="svelte-w3t695">An identity step returns its inputs as outputs</p>` : `${stepDetail.value.type == "rawscript" ? `<div class="text-xs"><h3 class="mb-2 font-semibold mt-2" data-svelte-h="svelte-18wcpph">Step Inputs</h3> ${validate_component(InputTransformsViewer, "InputTransformsViewer").$$render(
      $$result,
      {
        inputTransforms: stepDetail?.value?.input_transforms ?? {}
      },
      {},
      {}
    )}</div> <div><div class="mb-2 mt-4 flex justify-between items-center"><h3 class="font-semibold" data-svelte-h="svelte-qpvxgv">Code</h3> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs2",
        color: "light",
        variant: "contained"
      },
      {},
      {
        default: () => {
          return `Expand`;
        }
      }
    )}</div> <div class="border p-2 rounded-md">${validate_component(HighlightCode, "HighlightCode").$$render(
      $$result,
      {
        language: stepDetail.value.language,
        code: stepDetail.value.content,
        class: "whitespace-pre-wrap"
      },
      {},
      {}
    )}</div> <h3 class="mb-2 mt-4" data-svelte-h="svelte-lwy0yu">Lockfile</h3> <div>${stepDetail.value.lock ? `<pre class="bg-surface-secondary text-xs p-2 h-full overflow-auto w-full">${escape(stepDetail.value.lock)}</pre>` : `<p class="bg-surface-secondary text-sm p-2 rounded" data-svelte-h="svelte-cbw3y1">There is no lockfile for this inline script</p>`}</div></div>` : `${stepDetail.value.type == "script" ? `<div class="text-2xs"><h3 class="mb-2 font-semibold mt-2" data-svelte-h="svelte-18wcpph">Step Inputs</h3> ${validate_component(InputTransformsViewer, "InputTransformsViewer").$$render(
      $$result,
      {
        inputTransforms: stepDetail?.value?.input_transforms ?? {}
      },
      {},
      {}
    )}</div> ${stepDetail.value.path.startsWith("hub/") ? `<div class="flex flex-col grow"><div class="mb-2 flex justify-between items-center"><h3 class="font-semibold" data-svelte-h="svelte-qpvxgv">Code</h3> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs2",
        color: "light",
        variant: "contained"
      },
      {},
      {
        default: () => {
          return `Expand`;
        }
      }
    )}</div> <iframe class="w-full grow text-sm" title="embedded script from hub" frameborder="0" src="${escape($hubBaseUrlStore, true) + "/embed/script/" + escape(stepDetail.value?.path?.substring(4), true)}"></iframe></div>` : `${validate_component(FlowModuleScript, "FlowModuleScript").$$render($$result, { path: stepDetail.value.path }, {}, {})}`}` : `${stepDetail.value.type == "forloopflow" ? `<div><p class="font-medium text-secondary pb-2" data-svelte-h="svelte-1b2eugh">Iterator expression:</p> ${stepDetail.value.iterator.type == "static" ? `${validate_component(ObjectViewer, "ObjectViewer").$$render($$result, { json: stepDetail.value.iterator.value }, {}, {})}` : `<span class="text-xs">${validate_component(Highlight, "Highlight").$$render(
      $$result,
      {
        language: typescript,
        code: cleanExpr(stepDetail.value.iterator.expr)
      },
      {},
      {}
    )}</span>`}</div>` : `${stepDetail.value.type == "branchall" ? `<p class="font-medium text-secondary text-center pt-4 pb-8" data-svelte-h="svelte-djf2o5">All branches will run, regardless of the inputs</p>` : `${stepDetail.value.type == "branchone" ? `<p class="font-medium text-secondary text-center pt-4 pb-8" data-svelte-h="svelte-16mw1zh">Only one branch will run based on a predicate</p> <div class="flex-col flex gap-2"><div class="flex flex-row gap-4 text-sm p-2">${validate_component(Badge, "Badge").$$render($$result, { large: true, color: "blue" }, {}, {
      default: () => {
        return `Default branch`;
      }
    })} <p class="italic text-tertiary" data-svelte-h="svelte-1jc093">If none of the predicates&#39; expressions evaluated in-order match, this branch is chosen</p></div> ${each(stepDetail.value.branches, (v, i) => {
      return `<div class="flex flex-col gap-4-2 items-center"><div class="w-full flex gap-2 px-2 pt-4 pb-2">${validate_component(Badge, "Badge").$$render($$result, { large: true, color: "blue" }, {}, {
        default: () => {
          return `Branch ${escape(i + 1)}`;
        }
      })} <span>${escape(v.summary)}</span></div> <div class="w-full border p-2">${validate_component(HighlightCode, "HighlightCode").$$render($$result, { language: "frontend", code: v.expr }, {}, {})}</div> </div>`;
    })}</div>` : `${stepDetail.value.type == "flow" ? `<div class="text-sm mb-1 flex justify-end flex-row">${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs2",
        startIcon: { icon: Copy },
        color: "light"
      },
      {},
      {
        default: () => {
          return `Copy path`;
        }
      }
    )}</div> ${validate_component(FlowPathViewer, "FlowPathViewer").$$render(
      $$result,
      {
        noSide: true,
        path: stepDetail.value.path
      },
      {},
      {}
    )}` : ``}`}`}`}`}`}`}` : `<p class="font-medium text-secondary text-center pt-4 pb-8">Step ${escape(stepDetail)} selected</p>`}`}`}`}</div>`;
  } while (!$$settled);
  $$unsubscribe_hubBaseUrlStore();
  return $$rendered;
});
export {
  FlowGraphViewer as F,
  HighlightCode as H,
  IconedPath as I,
  TimeAgo as T,
  FlowPathViewer as a,
  FlowGraphViewerStep as b,
  FlowModuleScript as c,
  forLater as f,
  getDbClockNow as g,
  typescript as t
};
