import { c as create_ssr_component, v as validate_component, s as subscribe, e as escape, f as each, b as add_attribute } from "./ssr.js";
import { w as workspaceStore } from "./stores2.js";
import { B as Button, p as truncate } from "./toast.js";
import { D as Drawer, a as DrawerContent } from "./DrawerContent.js";
import { O as ObjectViewer, D as Download } from "./LightweightSchemaForm.js";
import { T as Tooltip } from "./Tooltip.js";
import "./common.js";
import { a as Clipboard_copy } from "./util.js";
import { E as Expand } from "./expand.js";
import "./index2.js";
import { deepEqual } from "fast-equals";
import "yaml";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import "minimatch";
import { S as Skeleton } from "./Skeleton.js";
import { D as DataTable, H as Head, C as Cell } from "./Head.js";
import { R as Row } from "./Row.js";
import { H as HighlightTheme, a as Highlight, j as json } from "./SchemaViewer.js";
import { I as Icon } from "./Icon.js";
const Chevron_right_square = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "18",
        "height": "18",
        "x": "3",
        "y": "3",
        "rx": "2"
      }
    ],
    ["path", { "d": "m10 8 4 4-4 4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "chevron-right-square" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
function isString(value) {
  return typeof value === "string" || value instanceof String;
}
const ArgInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value2) => value2);
  let { value } = $$props;
  let jsonViewer;
  let jsonViewerContent;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "800px", this: jsonViewer },
      {
        this: ($$value) => {
          jsonViewer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Argument Details" }, {}, {
            actions: () => {
              return `${validate_component(Button, "Button").$$render(
                $$result,
                {
                  color: "light",
                  size: "xs",
                  startIcon: { icon: Clipboard_copy }
                },
                {},
                {
                  default: () => {
                    return `Copy`;
                  }
                }
              )} `;
            },
            default: () => {
              return `${isString(jsonViewerContent) ? `<pre>${escape(jsonViewerContent)}</pre>` : `${validate_component(ObjectViewer, "ObjectViewer").$$render(
                $$result,
                {
                  pureViewer: true,
                  json: jsonViewerContent
                },
                {},
                {}
              )}`}`;
            }
          })}`;
        }
      }
    )} ${value == void 0 || value == null ? `<span class="text-tertiary" data-svelte-h="svelte-195hebg">null</span>` : `${value == "<function call>" ? `${escape("<function call>")}${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
      default: () => {
        return `The arg was none and the default argument of the script is a function call, hence the actual
		value used for this arg was the output of the script&#39;s function call for this arg`;
      }
    })}` : `${isString(value) && value.startsWith("$res:") ? `<button class="text-xs text-blue-500">${escape(value)}</button>` : `${isString(value) && value.startsWith("$var:") ? `<button class="text-xs text-blue-500">${escape(value)}</button>` : `${typeof value !== "object" ? `${escape(truncate(JSON.stringify(value), 100))} ${JSON.stringify(value).length > 100 ? `<button class="text-xs text-blue-500" data-svelte-h="svelte-16c0kpa">See expanded</button>` : ``}` : `<div class="relative">${JSON.stringify(value).length > 120 ? `<button class="text-xs absolute top-0 right-4 text-tertiary">${validate_component(Expand, "Expand").$$render($$result, { size: 18 }, {}, {})}</button>` : ``} <div class="max-h-40 overflow-auto">${validate_component(ObjectViewer, "ObjectViewer").$$render(
      $$result,
      {
        collapsed: false,
        topBrackets: true,
        pureViewer: true,
        json: value
      },
      {},
      {}
    )}</div></div>`}`}`}`}`}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const JobArgs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = void 0 } = $$props;
  let { args } = $$props;
  let { argLabel = void 0 } = $$props;
  let { workspace = void 0 } = $$props;
  let jsonViewer;
  let runLocally;
  let jsonStr = "";
  function pythonCode() {
    return `
if __name__ == "__main__":
${Object.entries(args).map(([arg, value]) => {
      return `    ${arg} = ${JSON.stringify(value)}`;
    }).join("\n")}

	main(${Object.keys(args).map((x) => `${x} = ${x}`).join(", ")})
`;
  }
  function typescriptCode() {
    return `
if (import.meta.main) {
${Object.entries(args).map(([arg, value]) => {
      return `  let ${arg} = ${JSON.stringify(value)}`;
    }).join("\n")}

  await main(...)
}
`;
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.args === void 0 && $$bindings.args && args !== void 0) $$bindings.args(args);
  if ($$props.argLabel === void 0 && $$bindings.argLabel && argLabel !== void 0) $$bindings.argLabel(argLabel);
  if ($$props.workspace === void 0 && $$bindings.workspace && workspace !== void 0) $$bindings.workspace(workspace);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${id && workspace && args && typeof args === "object" && deepEqual(Object.keys(args), ["reason"]) && args["reason"] == "WINDMILL_TOO_BIG" ? `The args are too big in size to be able to fetch alongside job. Please <a href="${"/api/w/" + escape(workspace, true) + "/jobs_u/get_args/" + escape(id, true)}" target="_blank">download the JSON file to view them</a>.` : `<div class="relative">${validate_component(DataTable, "DataTable").$$render($$result, { size: "sm" }, {}, {
      default: () => {
        return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
          headerAction: () => {
            return `<button>${validate_component(Expand, "Expand").$$render($$result, { size: 18 }, {}, {})}</button> `;
          },
          default: () => {
            return `<tr>${validate_component(Cell, "Cell").$$render($$result, { head: true, first: true }, {}, {
              default: () => {
                return `${escape(argLabel ?? "Arg")}`;
              }
            })} ${validate_component(Cell, "Cell").$$render($$result, { head: true, last: true }, {}, {
              default: () => {
                return `Value`;
              }
            })}</tr>`;
          }
        })} <tbody class="divide-y">${args && Object.keys(args).length > 0 ? `${each(Object.entries(args).sort((a, b) => a[0].localeCompare(b[0])), ([arg, value]) => {
          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Cell, "Cell").$$render($$result, { first: true }, {}, {
                default: () => {
                  return `${escape(arg)}`;
                }
              })} ${validate_component(Cell, "Cell").$$render($$result, { last: true }, {}, {
                default: () => {
                  return `${validate_component(ArgInfo, "ArgInfo").$$render($$result, { value }, {}, {})}`;
                }
              })} `;
            }
          })}`;
        })}` : `${args ? `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
              default: () => {
                return `No arguments`;
              }
            })}`;
          }
        })}` : `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Cell, "Cell").$$render($$result, { first: true }, {}, {
              default: () => {
                return `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[1], 0.5, [1]] }, {}, {})}`;
              }
            })} ${validate_component(Cell, "Cell").$$render($$result, { last: true }, {}, {
              default: () => {
                return `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[1], 0.5, [1]] }, {}, {})}`;
              }
            })}`;
          }
        })}`}`}</tbody>`;
      }
    })}</div>`} ${validate_component(HighlightTheme, "HighlightTheme").$$render($$result, {}, {}, {})} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "900px", this: jsonViewer },
      {
        this: ($$value) => {
          jsonViewer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Expanded Args" }, {}, {
            actions: () => {
              return `${validate_component(Button, "Button").$$render(
                $$result,
                {
                  download: "windmill-args.json",
                  href: id && workspace ? `/api/w/${workspace}/jobs_u/get_args/${id}` : `data:text/json;charset=utf-8,${encodeURIComponent(jsonStr)}`,
                  startIcon: { icon: Download },
                  size: "xs",
                  color: "light"
                },
                {},
                {
                  default: () => {
                    return `Download`;
                  }
                }
              )} ${validate_component(Button, "Button").$$render(
                $$result,
                {
                  color: "light",
                  size: "xs",
                  startIcon: { icon: Chevron_right_square }
                },
                {},
                {
                  default: () => {
                    return `Use in a local script`;
                  }
                }
              )} ${validate_component(Button, "Button").$$render(
                $$result,
                {
                  color: "light",
                  size: "xs",
                  startIcon: { icon: Clipboard_copy }
                },
                {},
                {
                  default: () => {
                    return `Copy to clipboard`;
                  }
                }
              )} `;
            },
            default: () => {
              return `${jsonStr.length > 1e5 || id && workspace && args && typeof args === "object" && deepEqual(Object.keys(args), ["reason"]) && args["reason"] == "WINDMILL_TOO_BIG" ? `<div class="text-sm mb-2 text-tertiary"><a download="windmill-args.json"${add_attribute(
                "href",
                id && workspace ? `/api/w/${workspace}/jobs_u/get_args/${id}` : `data:text/json;charset=utf-8,${encodeURIComponent(jsonStr)}`,
                0
              )}>JSON is too large to be displayed in full.</a></div>` : `${validate_component(Highlight, "Highlight").$$render(
                $$result,
                {
                  language: json,
                  code: jsonStr.replace(/\\n/g, "\n")
                },
                {},
                {}
              )}`}`;
            }
          })}`;
        }
      }
    )} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "900px", this: runLocally },
      {
        this: ($$value) => {
          runLocally = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Run locally" }, {}, {
            default: () => {
              return `<h3 class="mb-2" data-svelte-h="svelte-1hv0djh">Envs</h3>
		If using the wmill client in your code, set the following env variables:
		<pre><code>BASE_URL=&quot;${escape(window.location.origin)}&quot;
WM_TOKEN=&quot;${escape("<TOKEN>")}&quot;</code></pre> <h3 class="mt-8" data-svelte-h="svelte-eiwqls">TypeScript</h3> <pre><code>${escape(typescriptCode())}</code></pre> <h3 class="mt-8" data-svelte-h="svelte-4rjm1v">Python</h3> <pre><code>${escape(pythonCode())}</code></pre>`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  JobArgs as J
};
