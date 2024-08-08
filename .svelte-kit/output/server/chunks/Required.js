import { c as create_ssr_component, v as validate_component, f as each, e as escape } from "./ssr.js";
import { I as Icon } from "./Icon.js";
import { D as DropdownV2 } from "./DropdownV2.js";
import { D as DataTable, H as Head, C as Cell } from "./Head.js";
const Dollar_sign = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "12",
        "x2": "12",
        "y1": "2",
        "y2": "22"
      }
    ],
    [
      "path",
      {
        "d": "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "dollar-sign" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const File_up = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
      }
    ],
    ["polyline", { "points": "14 2 14 8 20 8" }],
    ["path", { "d": "M12 12v6" }],
    ["path", { "d": "m15 15-3-3-3 3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "file-up" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const TableSimple = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { headers } = $$props;
  let { data } = $$props;
  let { keys } = $$props;
  let { size = "md" } = $$props;
  let { getRowActions = void 0 } = $$props;
  if ($$props.headers === void 0 && $$bindings.headers && headers !== void 0) $$bindings.headers(headers);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.keys === void 0 && $$bindings.keys && keys !== void 0) $$bindings.keys(keys);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.getRowActions === void 0 && $$bindings.getRowActions && getRowActions !== void 0) $$bindings.getRowActions(getRowActions);
  return `<div class="mt-2 w-full">${validate_component(DataTable, "DataTable").$$render($$result, { size }, {}, {
    default: () => {
      return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
        default: () => {
          return `<tr>${headers ? `${each(headers, (header, i) => {
            return `${validate_component(Cell, "Cell").$$render(
              $$result,
              {
                first: i == 0,
                last: i == headers.length - 1,
                head: true,
                class: "max-w-96"
              },
              {},
              {
                default: () => {
                  return `${escape(header)}`;
                }
              }
            )}`;
          })} ${getRowActions !== void 0 ? `${validate_component(Cell, "Cell").$$render($$result, { head: true, last: true }, {}, {})}` : ``}` : ``}</tr>`;
        }
      })} <tbody class="divide-y">${data && keys && data.length > 0 ? `${each(data, (row) => {
        let rowActions = getRowActions?.(row);
        return ` <tr>${each(keys, (key, i) => {
          return `${validate_component(Cell, "Cell").$$render(
            $$result,
            {
              first: i == 0,
              last: i == keys.length - 1,
              class: "max-w-96 whitespace-pre-wrap overflow-hidden text-ellipsis"
            },
            {},
            {
              default: () => {
                return `${escape(row[key] ?? "")} `;
              }
            }
          )}`;
        })} ${rowActions && rowActions.length > 0 ? `${validate_component(Cell, "Cell").$$render($$result, { last: true, shouldStopPropagation: true }, {}, {
          default: () => {
            return `${validate_component(DropdownV2, "DropdownV2").$$render($$result, { items: rowActions }, {}, {})} `;
          }
        })}` : ``} </tr>`;
      })}` : `<tr data-svelte-h="svelte-1hwx9ss">Loading...</tr>`}</tbody>`;
    }
  })}</div>`;
});
const Required = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { required } = $$props;
  let { detail = "" } = $$props;
  if ($$props.required === void 0 && $$bindings.required && required !== void 0) $$bindings.required(required);
  if ($$props.detail === void 0 && $$bindings.detail && detail !== void 0) $$bindings.detail(detail);
  return `${required ? `<span class="${"text-red-500 dark:text-red-400 text-sm font-normal " + escape($$props.class, true)}">*</span>` : `${detail || detail != "" ? `<span class="${"text-sm text-tertiary ml-2 font-normal " + escape($$props.class, true)}">(${escape(detail != "" ? `${detail}` : "")})</span>` : ``}`}`;
});
export {
  Dollar_sign as D,
  File_up as F,
  Required as R,
  TableSimple as T
};
