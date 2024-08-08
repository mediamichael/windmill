import { c as create_ssr_component, v as validate_component, m as get_store_value } from "./ssr.js";
import { I as Icon } from "./Icon.js";
import { c as ccomponents, g as getRecommendedDimensionsByComponent } from "./components.js";
import { g as gridColumns } from "./gridUtils.js";
import { twMerge } from "tailwind-merge";
import "./index2.js";
import "yaml";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import "./common.js";
import "minimatch";
/* empty css                                     */
import { V as deepMergeWithPriority, s as sendUserToast } from "./toast.js";
import { e as enterpriseLicense } from "./stores2.js";
import { w as writable } from "./index.js";
const Unlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "18",
        "height": "11",
        "x": "3",
        "y": "11",
        "rx": "2",
        "ry": "2"
      }
    ],
    ["path", { "d": "M7 11V7a5 5 0 0 1 9.9-1" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "unlock" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const aCharCode = "a".charCodeAt(0);
const forbiddenIds = [
  "do",
  "bg",
  "ctx",
  "state",
  "if",
  "else",
  "for",
  "delete",
  "while",
  "new"
];
function numberToChars(n) {
  if (n < 0) {
    return "-" + numberToChars(-n);
  }
  var b = [n], sp, out, i, div;
  sp = 0;
  while (sp < b.length) {
    if (b[sp] > 25) {
      div = Math.floor(b[sp] / 26);
      b[sp + 1] = div - 1;
      b[sp] %= 26;
    }
    sp += 1;
  }
  out = "";
  for (i = 0; i < b.length; i += 1) {
    let charCode = aCharCode + b[i];
    out = String.fromCharCode(charCode) + out;
  }
  return out;
}
function getNextId(currentKeys) {
  const takenKeys = [...currentKeys, ...forbiddenIds].map(charsToNumber);
  let i = charsToNumber("a");
  while (true) {
    if (!takenKeys.includes(i)) {
      break;
    }
    i++;
  }
  return numberToChars(i);
}
function charsToNumber(n) {
  if (n.charAt(0) == "-") {
    return charsToNumber(n.slice(1)) * -1;
  }
  let b = Math.pow(26, n.length - 1);
  let res = 0;
  for (let c of n) {
    let charCode = c == "-" || c == "_" ? aCharCode + 25 : c.charCodeAt(0);
    res += (charCode - aCharCode + 1) * b;
    b = b / 26;
  }
  return res - 1;
}
const BG_PREFIX = "bg_";
function migrateApp(app) {
  (app?.hiddenInlineScripts ?? []).forEach((x) => {
    if (x.type == void 0) {
      x.type = "runnableByName";
    }
    if (x.doNotRecomputeOnInputChanged != void 0) {
      x.recomputeOnInputChanged = !x.doNotRecomputeOnInputChanged;
      x.doNotRecomputeOnInputChanged = void 0;
    }
  });
  allItems(app.grid, app.subgrids).forEach((x) => {
    gridColumns.forEach((column) => {
      if (x?.[column]?.fullHeight === void 0) {
        x[column].fullHeight = false;
      }
    });
  });
}
function allItems(grid, subgrids) {
  if (subgrids == void 0) {
    return grid;
  }
  return [...grid, ...Object.values(subgrids).flat()];
}
function schemaToInputsSpec(schema, defaultUserInput) {
  if (schema?.properties == void 0) {
    return {};
  }
  return Object.keys(schema.properties).reduce((accu, key) => {
    const property = schema.properties[key];
    accu[key] = {
      type: "static",
      value: property.default,
      fieldType: property.type,
      format: property.format
    };
    if (Array.isArray(property.enum)) {
      accu[key] = {
        ...accu[key],
        selectOptions: property.enum,
        fieldType: "select"
      };
    }
    return accu;
  }, {});
}
function accessPropertyByPath(object, path) {
  let a = path.split(".");
  for (let i = 0, depth = a.length; i < depth; ++i) {
    let key = a[i];
    if (object[key] != void 0) {
      object = object[key];
    } else {
      return;
    }
  }
  return object;
}
function fieldTypeToTsType(inputType) {
  switch (inputType) {
    case "number":
      return "number";
    case "integer":
      return "number";
    case "boolean":
      return "boolean";
    case "object":
      return "object";
    case "array":
      return "array";
    case "any":
      return "any";
    case "tab-select":
      return "Tab";
    default:
      return "string";
  }
}
function isScriptByNameDefined(appInput) {
  if (!appInput) {
    return false;
  }
  if (appInput.type === "runnable" && appInput.runnable?.type == "runnableByName") {
    return appInput.runnable?.name != void 0;
  }
  return false;
}
function isScriptByPathDefined(appInput) {
  if (!appInput) {
    return false;
  }
  if (appInput.type === "runnable" && appInput.runnable?.type == "runnableByPath") {
    return Boolean(appInput.runnable?.path);
  }
  return false;
}
function clearResultAppInput(appInput) {
  appInput.runnable = void 0;
  if (Object.keys(appInput.fields ?? {}).length > 0) {
    appInput.fields = {};
  }
  return appInput;
}
function toStatic(app, staticExporter, summary) {
  const newApp = JSON.parse(JSON.stringify(app));
  allItems(newApp.grid, newApp.subgrids).forEach((x) => {
    let c = x.data;
    if (c.componentInput?.type == "runnable") {
      c.componentInput.value = staticExporter[x.id]();
    }
  });
  newApp.hiddenInlineScripts?.forEach((x, i) => {
    x.noBackendValue = staticExporter[BG_PREFIX + i]();
  });
  return { app: newApp, summary };
}
function buildExtraLib(components, idToExclude, state, goto) {
  const cs = Object.entries(components).filter(([k, v]) => k != idToExclude && k != "state").map(([k, v]) => [k, Object.fromEntries(Object.entries(v).map(([k2, v2]) => [k2, v2.peak()]))]).map(
    ([k, v]) => `declare const ${k}: ${JSON.stringify(v)};
`
  ).join("\n");
  return `${cs}

/** The mutable state of the app */
declare const state: ${JSON.stringify(state)} & {[key: string]: any};

${goto ? `
/** open a window or tab
 * @param path path/url to go to
 * @param open in a tab?
*/
declare async function goto(path: string, newTab?: boolean): Promise<void>;

/** set tab
 * @param id component's id
 * @param index index of the tab to set
*/
declare function setTab(id: string, index: number): void;

/** recompute a component's runnable or background runnable
 * @param id component's id
*/
declare function recompute(id: string): void;

/** get the ag grid api from an AgGridTable
 * @param id component's id
*/
declare function getAgGrid(id: string): {api: any, columnApi: any} | undefined;

/** set value of a component
 * @param id component's id
 * @param value value to set
 */
declare function setValue(id: string, value: any): void;

/** set selected index of a table
 * @param id component's id
 * @param index index to set
 */
declare function setSelectedIndex(id: string, index: number): void;

/** close a drawer or modal
  * @param id component's id
 */
declare function open(id: string): void;

/** close a drawer or modal
  * @param id component's id
 */
declare function close(id: string): void;


/** validate form field property 'key'
 * @param id component's id
 * @param key property's key to validate
 */
declare function validate(id: string, key: string): void;

/** validate form field property 'key'
 * @param id component's id
 * @param key property's key to validate
 */
declare function invalidate(id: string, key: string, error: string): void;

/** validate all form's properties
 * @param id component's id
 */
declare function validateAll(id: string): void;

/** Clear the files of a file input component
 * @param id component's id
 */
declare function clearFiles(id: string): void;

/**  Display a toast message
 * @param message message to display
 */
declare function showToast(message: string, error?: boolean): void;

/**
 * Wait for a job to finish
 * @param id job id
 * @returns the result of the job
 */
declare async function waitJob(id: string): Promise<any>;


` : ""}

/** The iterator within the context of a list */
declare const iter: {index: number, value: any};

/** The row within the context of a table */
declare const row: {index: number, value: Record<string, any>, disabled: boolean};

/** The file within the s3 file input */
declare const file: File | undefined;

/** The group fields within the context of a container's group */
declare const group: Record<string, any>;

/** The result within the context of a transformer */
declare const result: any;

`;
}
function initCss(appCss, componentCss) {
  if (!componentCss) return {};
  return Object.fromEntries(
    Object.entries(componentCss).map(([key, v]) => {
      const appStyle = appCss?.[key]?.style?.trim() || "";
      const appEnding = appStyle?.endsWith(";") || !appStyle ? " " : "; ";
      const compStyle = v?.style?.trim() || "";
      const compEnding = compStyle?.endsWith(";") || !compStyle ? " " : ";";
      return [
        key,
        {
          style: (appStyle + appEnding + compStyle + compEnding).trim(),
          class: twMerge(appCss?.[key]?.class, v?.class),
          evalClass: appCss?.[key]?.evalClass || v?.evalClass
        }
      ];
    })
  );
}
function tailwindHorizontalAlignment(alignment) {
  if (!alignment) return "";
  const classes = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end"
  };
  return classes[alignment];
}
function tailwindVerticalAlignment(alignment) {
  if (!alignment) return "";
  const classes = {
    top: "items-start",
    center: "items-center",
    bottom: "items-end"
  };
  return classes[alignment];
}
const TailwindClassPatterns = {
  bg: /bg-(?:[^-\s]+-)?(?:[^-\s]+)/g,
  height: /(h-[^\s]+)/g,
  width: /(w-[^\s]+)/g
};
function hasTailwindClass(classes, pattern) {
  return Boolean(classes?.match(pattern));
}
function transformBareBase64IfNecessary(source) {
  if (!source) {
    return source;
  }
  if (source.startsWith("data:") || source.includes(",")) {
    return source;
  } else {
    return `data:application/octet-stream;base64,${source}`;
  }
}
function getImageDataURL(imageKind, image) {
  if (!imageKind || !image) {
    return null;
  }
  switch (imageKind) {
    case "png encoded as base64":
      return "data:image/png;base64," + image;
    case "jpeg encoded as base64":
      return "data:image/jpeg;base64," + image;
    case "svg encoded as base64":
      return "data:image/svg+xml;base64," + image;
    default:
      return image;
  }
}
const ctxRegex = /^ctx\.(workspace|groups|username|email|author)$/;
const makeMatrix = (rows, cols) => Array.from(Array(rows), () => new Array(cols));
function makeMatrixFromItems(items, row, col) {
  let matrix = makeMatrix(row, col);
  for (var i = 0; i < items.length; i++) {
    const value = items[i][col];
    if (value) {
      const { x, y, h } = value;
      const id = items[i].id;
      const w = Math.min(col, value.w);
      for (var j = y; j < y + h; j++) {
        const row2 = matrix[j];
        for (var k = x; k < x + w; k++) {
          row2[k] = { ...value, id };
        }
      }
    }
  }
  return matrix;
}
function findCloseBlocks(matrix, curObject) {
  const { h, x, y } = curObject;
  const w = Math.min(matrix[0].length, curObject.w);
  const tempR = matrix.slice(y, y + h);
  let result = [];
  for (var i = 0; i < tempR.length; i++) {
    let tempA = tempR[i].slice(x, x + w);
    result = [...result, ...tempA.map((val) => val?.id).filter((id) => id !== void 0 && id !== curObject.id)];
  }
  return [...new Set(result)];
}
function makeMatrixFromItemsIgnore(items, ignoreList, _row, _col) {
  let matrix = makeMatrix(_row, _col);
  for (var i = 0; i < items.length; i++) {
    const value = items[i][_col];
    const id = items[i].id;
    const { x, y, h } = value;
    const w = Math.min(_col, value.w);
    if (ignoreList.indexOf(id) === -1) {
      for (var j = y; j < y + h; j++) {
        const row = matrix[j];
        if (row) {
          for (var k = x; k < x + w; k++) {
            row[k] = { ...value, id };
          }
        }
      }
    }
  }
  return matrix;
}
function findItemsById(closeBlocks, items) {
  return items.filter((value) => closeBlocks.indexOf(value.id) !== -1);
}
function throttle(func, timeFrame) {
  let lastTime = (/* @__PURE__ */ new Date()).getTime();
  return function(...args) {
    let now = (/* @__PURE__ */ new Date()).getTime();
    if (now - lastTime >= timeFrame) {
      func(...args);
      lastTime = now;
    }
  };
}
function getRowsCount(items, cols) {
  const getItemsMaxHeight = items.map((val) => {
    const item = val[cols];
    return (item && item.y) + (item && item.h) || 0;
  });
  return Math.max(...getItemsMaxHeight, 1);
}
function getItemById(id, items) {
  return items.find((value) => value.id === id);
}
function isEmpty(matrix, x, y, w, h) {
  for (var i = 0; i < h; i++) {
    if (matrix[y + i]) {
      for (var j = 0; j < w; j++) {
        if (matrix[y + i][x + j] != void 0) {
          return false;
        }
      }
    }
  }
  return true;
}
function distance(a, b) {
  return Math.abs(a.x - b.x + 0.25) + Math.abs(a.y - b.y + 0.25);
}
function findFreeSpaceForItem(matrix, item) {
  const cols = matrix[0].length;
  const w = Math.min(cols, item.w);
  const h = item.h;
  let xNtime = cols - w + 1;
  let getMatrixRows = Math.max(matrix.length, item.y);
  const range = Array.from(
    { length: getMatrixRows },
    (_, y) => Array.from({ length: xNtime }, (_2, x) => ({ x, y }))
  ).flat(1).sort((a, b) => {
    let dst1 = distance(a, item);
    let dst2 = distance(b, item);
    if (dst1 > dst2) {
      return 1;
    } else if (dst1 < dst2) {
      return -1;
    } else {
      return 0;
    }
  });
  for (const { x, y } of range.values()) {
    if (isEmpty(matrix, x, y, w, h)) {
      return { x, y };
    }
  }
  return {
    y: getMatrixRows,
    x: 0
  };
}
const getItem = (item, col) => {
  return { ...item[col] };
};
const updateItem = (elements, active, position, col) => {
  return elements.map((value) => {
    if (value.id === active.id) {
      return { ...value, [col]: { ...value[col], ...position } };
    }
    return value;
  });
};
function moveItem(active, items, cols) {
  const item = getItem(active, cols);
  let matrix = makeMatrixFromItemsIgnore(items, [active.id], getRowsCount(items, cols), cols);
  const closeBlocks = findCloseBlocks(matrix, item);
  let closeObj = findItemsById(closeBlocks, items);
  const fixed = closeObj.find((value) => value[cols].fixed);
  if (fixed) return items;
  items = updateItem(items, active, item, cols);
  matrix = makeMatrixFromItemsIgnore(items, closeBlocks, getRowsCount(items, cols), cols);
  let tempItems = items;
  let tempCloseBlocks = closeBlocks;
  let exclude = [];
  closeObj.forEach((item2) => {
    let position = findFreeSpaceForItem(matrix, item2[cols]);
    exclude.push(item2.id);
    tempItems = updateItem(tempItems, item2, position, cols);
    let getIgnoreItems = tempCloseBlocks.filter((value) => exclude.indexOf(value) === -1);
    matrix = makeMatrixFromItemsIgnore(
      tempItems,
      getIgnoreItems,
      getRowsCount(tempItems, cols),
      cols
    );
  });
  return tempItems;
}
function adjust(items, col) {
  let matrix = makeMatrix(getRowsCount(items, col), col);
  let res = [];
  items.forEach((item) => {
    let position = findFreeSpaceForItem(matrix, item[col]);
    res.push({
      ...item,
      [col]: {
        ...item[col],
        ...position
      }
    });
    matrix = makeMatrixFromItems(res, getRowsCount(res, col), col);
  });
  return res;
}
function getUndefinedItems(items, col, breakpoints) {
  return items.map((value) => {
    if (!value[col]) {
      return value.id;
    }
  }).filter(Boolean);
}
function getClosestColumn(items, item, col, breakpoints) {
  return breakpoints.map(([_, column]) => item[column] && column).filter(Boolean).reduce(function(acc, value) {
    const isLower = Math.abs(value - col) < Math.abs(acc - col);
    return isLower ? value : acc;
  });
}
function specifyUndefinedColumns(items, col, breakpoints) {
  let matrix = makeMatrixFromItems(items, getRowsCount(items, col), col);
  const getUndefinedElements = getUndefinedItems(items, col);
  let newItems = [...items];
  getUndefinedElements.forEach((elementId) => {
    const getElement = items.find((item) => item.id === elementId);
    const closestColumn = getClosestColumn(items, getElement, col, breakpoints);
    const position = findFreeSpaceForItem(matrix, getElement[closestColumn]);
    const newItem = {
      ...getElement,
      [col]: {
        ...getElement[closestColumn],
        ...position
      }
    };
    newItems = newItems.map((value) => value.id === elementId ? newItem : value);
    matrix = makeMatrixFromItems(newItems, getRowsCount(newItems, col), col);
  });
  return newItems;
}
function makeItem(item) {
  const { min = { w: 1, h: 1 }, max } = item;
  return {
    fixed: false,
    fullHeight: false,
    min: {
      w: Math.max(1, min.w),
      h: Math.max(1, min.h)
    },
    max: { ...max },
    ...item
  };
}
const gridHelp = {
  adjust(items, col) {
    return adjust(items, col);
  },
  item(obj) {
    return makeItem(obj);
  },
  findSpace(item, items, cols) {
    let matrix = makeMatrixFromItems(items, getRowsCount(items, cols), cols);
    let position = findFreeSpaceForItem(matrix, item[cols]);
    return position;
  }
};
function findComponentSettings(app, id) {
  if (!id) return void 0;
  if (app?.grid) {
    const gridItem = app.grid.find((x) => x.data?.id === id);
    if (gridItem) {
      return { item: gridItem, parent: void 0 };
    }
  }
  if (app?.subgrids) {
    for (const key of Object.keys(app.subgrids ?? {})) {
      const gridItem = app.subgrids[key].find((x) => x.data?.id === id);
      if (gridItem) {
        return { item: gridItem, parent: key };
      }
    }
  }
  return void 0;
}
function dfs(grid, id, subgrids) {
  if (!grid) {
    return void 0;
  }
  for (const item of grid) {
    if (item.id === id) {
      return [id];
    } else if (item.data.type == "tablecomponent" && item.data.actionButtons.find((x) => id == x.id)) {
      return [item.id, id];
    } else if (item.data.type == "menucomponent" && item.data.menuItems.find((x) => id == x.id)) {
      return [item.id, id];
    } else if ((item.data.type == "aggridcomponent" || item.data.type == "aggridcomponentee" || item.data.type == "dbexplorercomponent" || item.data.type == "aggridinfinitecomponent" || item.data.type == "aggridinfinitecomponentee") && item.data.actions?.find((x) => id == x.id)) {
      return [item.id, id];
    } else {
      for (let i = 0; i < (item.data.numberOfSubgrids ?? 0); i++) {
        const res = dfs(subgrids[`${item.id}-${i}`], id, subgrids);
        if (res) {
          return [item.id, ...res];
        }
      }
    }
  }
  return void 0;
}
function findGridItemById(root, subGrids, id) {
  for (const gridItem of allItems(root, subGrids)) {
    if (gridItem.id === id) {
      return gridItem;
    }
  }
  return void 0;
}
function findGridItemParentGrid(app, id) {
  const gridItem = app.grid.find((x) => x.id === id);
  if (gridItem || app.subgrids === void 0) {
    return void 0;
  } else {
    for (const key of Object.keys(app.subgrids ?? {})) {
      const subGrid = app.subgrids[key];
      const gridItemIdx = subGrid.findIndex((x) => x.id === id);
      if (gridItemIdx > -1) {
        return key;
      }
    }
  }
}
function allsubIds(app, parentId) {
  let item = findGridItem(app, parentId);
  if (!item?.data.numberOfSubgrids) {
    let subIds = [parentId];
    if (item) {
      if (item.data.type === "tablecomponent") {
        subIds.push(...item.data.actionButtons?.map((x) => x.id));
      }
      if ((item.data.type === "aggridcomponent" || item.data.type === "aggridcomponentee" || item.data.type === "dbexplorercomponent" || item.data.type === "aggridinfinitecomponent" || item.data.type === "aggridinfinitecomponentee") && Array.isArray(item.data.actions)) {
        subIds.push(...item.data.actions?.map((x) => x.id));
      }
      if (item.data.type === "menucomponent") {
        subIds.push(...item.data.menuItems?.map((x) => x.id));
      }
    }
    return subIds;
  }
  return getAllSubgridsAndComponentIds(app, item?.data)[1];
}
function findGridItem(app, id) {
  return findGridItemById(app.grid, app.subgrids, id);
}
function getNextGridItemId(app) {
  const allIds = allItems(app.grid, app.subgrids).flatMap((x) => {
    if (x.data.type === "tablecomponent") {
      return [x.id, ...x.data.actionButtons.map((x2) => x2.id)];
    } else if ((x.data.type === "aggridcomponent" || x.data.type === "aggridcomponentee" || x.data.type === "dbexplorercomponent" || x.data.type === "aggridinfinitecomponent" || x.data.type === "aggridinfinitecomponentee") && Array.isArray(x.data.actions)) {
      return [x.id, ...x.data.actions.map((x2) => x2.id)];
    } else if (x.data.type === "menucomponent") {
      return [x.id, ...x.data.menuItems.map((x2) => x2.id)];
    } else {
      return [x.id];
    }
  });
  return getNextId(allIds);
}
function createNewGridItem(grid, id, data, columns, initialPosition = { x: 0, y: 0 }, recOverride) {
  const newComponent = {
    fixed: false,
    x: initialPosition.x,
    y: initialPosition.y,
    fullHeight: false
  };
  let newData = JSON.parse(JSON.stringify(data));
  newData.id = id;
  const newItem = {
    data: newData,
    id
  };
  gridColumns.forEach((column) => {
    if (!columns) {
      const rec = recOverride?.[column] ?? getRecommendedDimensionsByComponent(newData.type, column);
      newItem[column] = {
        ...newComponent,
        w: rec.w,
        h: rec.h
      };
    } else {
      newItem[column] = columns[column];
    }
    const position = gridHelp.findSpace(newItem, grid, column);
    newItem[column] = { ...newItem[column], ...position };
  });
  return newItem;
}
function cleanseValue(key, value) {
  if (!value) {
    return [key, void 0];
  }
  if (value.type === "static") {
    return [key, { type: value.type, value: value.value }];
  } else if (value.type === "eval") {
    return [key, { type: value.type, expr: value.expr }];
  } else {
    return [key, { type: value.type, expr: value.expr, connections: value.connections }];
  }
}
function cleanseOneOfConfiguration(configuration) {
  return Object.fromEntries(
    Object.entries(configuration).map(([key, val]) => [
      key,
      Object.fromEntries(Object.entries(val).map(([key2, val2]) => cleanseValue(key2, val2)))
    ])
  );
}
function appComponentFromType(type, overrideConfiguration, extra, override) {
  return (id) => {
    const init = JSON.parse(JSON.stringify(ccomponents[type].initialData));
    const configuration = Object.fromEntries(
      Object.entries(init.configuration).map(([key, value]) => {
        if (value.type != "oneOf") {
          return cleanseValue(key, value);
        } else {
          return [
            key,
            {
              type: value.type,
              selected: value.selected,
              configuration: cleanseOneOfConfiguration(value.configuration)
            }
          ];
        }
      })
    );
    return {
      type,
      //TODO remove tooltip from there
      configuration: deepMergeWithPriority(configuration, overrideConfiguration ?? {}),
      componentInput: override?.componnetInput ?? init.componentInput,
      panes: init.panes,
      tabs: init.tabs,
      conditions: init.conditions,
      nodes: init.nodes,
      customCss: deepMergeWithPriority(
        ccomponents[type].customCss,
        override?.customCss ?? {}
      ),
      recomputeIds: init.recomputeIds ? [] : void 0,
      actionButtons: init.actionButtons ? [] : void 0,
      actions: [],
      menuItems: init.menuItems ? [] : void 0,
      numberOfSubgrids: init.numberOfSubgrids,
      horizontalAlignment: override?.horizontalAlignment ?? init.horizontalAlignment,
      verticalAlignment: override?.verticalAlignment ?? init.verticalAlignment,
      id,
      ...{}
    };
  };
}
function insertNewGridItem(app, builddata, focusedGrid, columns, keepId, initialPosition = { x: 0, y: 0 }, recOverride) {
  const id = keepId ?? getNextGridItemId(app);
  const data = builddata(id);
  if (data.type == "aggridcomponentee" && !get_store_value(enterpriseLicense)) {
    sendUserToast("AgGrid Enterprise Edition require Windmill Enterprise Edition", true);
    throw Error("AgGrid Enterprise Edition require Windmill Enterprise Edition");
  }
  if (!app.subgrids) {
    app.subgrids = {};
  }
  if (!keepId) {
    for (let i = 0; i < (data.numberOfSubgrids ?? 0); i++) {
      app.subgrids[`${id}-${i}`] = [];
    }
  }
  const key = focusedGrid ? `${focusedGrid?.parentComponentId}-${focusedGrid?.subGridIndex ?? 0}` : void 0;
  if (key && app.subgrids[key] === void 0) {
    let parent = findGridItemById(app.grid, app.subgrids, key)?.data;
    let subgrids = parent?.numberOfSubgrids;
    if (subgrids === void 0) {
      throw Error(
        `Invalid subgrid selected, the parent has no subgrids: ${key}, parent: ${JSON.stringify(
          parent
        )}`
      );
    }
    if (focusedGrid?.subGridIndex && (focusedGrid?.subGridIndex < 0 || focusedGrid?.subGridIndex >= subgrids)) {
      throw Error(`Invalid subgrid selected: ${key}, max subgrids: ${subgrids}`);
    }
    app.subgrids[key] = [];
  }
  let grid = focusedGrid ? app.subgrids[key] : app.grid;
  const newItem = createNewGridItem(grid, id, data, columns, initialPosition, recOverride);
  grid.push(newItem);
  return id;
}
function copyComponent(app, item, parentGrid, subgrids, alreadyVisited) {
  if (alreadyVisited.includes(item.id)) {
    return;
  } else {
    alreadyVisited.push(item.id);
  }
  const newItem = insertNewGridItem(
    app,
    (id) => {
      if (item.data.type === "tablecomponent") {
        return {
          ...item.data,
          id,
          actionButtons: item.data.actionButtons.map((x) => ({
            ...x,
            id: x.id.replace(`${item.id}_`, `${id}_`)
          })) ?? []
        };
      } else if (item.data.type === "aggridcomponent" || item.data.type === "aggridcomponentee" || item.data.type === "dbexplorercomponent" || item.data.type === "aggridinfinitecomponent" || item.data.type === "aggridinfinitecomponentee") {
        return {
          ...item.data,
          id,
          actionButtons: (item.data.actions ?? []).map((x) => ({
            ...x,
            id: x.id.replace(`${item.id}_`, `${id}_`)
          })) ?? []
        };
      } else if (item.data.type === "menucomponent") {
        return {
          ...item.data,
          id,
          menuItems: item.data.menuItems.map((x) => ({
            ...x,
            id: x.id.replace(`${item.id}_`, `${id}_`)
          })) ?? []
        };
      } else {
        return { ...item.data, id };
      }
    },
    parentGrid,
    Object.fromEntries(gridColumns.map((column) => [column, item[column]]))
  );
  for (let i = 0; i < (item?.data?.numberOfSubgrids ?? 0); i++) {
    subgrids[`${item.id}-${i}`].forEach((subgridItem) => {
      copyComponent(
        app,
        subgridItem,
        { parentComponentId: newItem, subGridIndex: i },
        subgrids,
        alreadyVisited
      );
    });
  }
  return newItem;
}
function getAllSubgridsAndComponentIds(app, component) {
  const subgrids = [];
  let components2 = [component.id];
  if (component.type === "tablecomponent") {
    components2.push(...component.actionButtons?.map((x) => x.id));
  }
  if (component.type === "aggridcomponent" || component.type === "aggridcomponentee" || component.type === "dbexplorercomponent" || component.type === "aggridinfinitecomponent" || component.type === "aggridinfinitecomponentee") {
    components2.push(...component.actions?.map((x) => x.id) ?? []);
  }
  if (component.type === "menucomponent") {
    components2.push(...component.menuItems?.map((x) => x.id));
  }
  if (app.subgrids && component.numberOfSubgrids) {
    for (let i = 0; i < component.numberOfSubgrids; i++) {
      const key = `${component.id}-${i}`;
      const subgrid = app.subgrids[key];
      if (subgrid) {
        subgrids.push(key);
        for (const item of subgrid) {
          let [recSubgrids, recComponents] = getAllSubgridsAndComponentIds(app, item.data);
          subgrids.push(...recSubgrids);
          components2.push(...recComponents);
        }
      }
    }
  }
  return [subgrids, components2];
}
function getAllGridItems(app) {
  return app.grid.concat(Object.values(app.subgrids ?? {}).flat()).map((x) => {
    if (x?.data?.type === "tablecomponent") {
      return [x, ...x?.data?.actionButtons?.map((x2) => ({ data: x2, id: x2.id }))];
    } else if ((x?.data?.type === "aggridcomponent" || x?.data?.type === "aggridcomponentee" || x?.data?.type === "dbexplorercomponent" || x?.data?.type === "aggridinfinitecomponent" || x?.data?.type === "aggridinfinitecomponentee") && Array.isArray(x?.data?.actions)) {
      return [x, ...x?.data?.actions?.map((x2) => ({ data: x2, id: x2.id }))];
    } else if (x?.data?.type === "menucomponent") {
      return [x, ...x?.data?.menuItems?.map((x2) => ({ data: x2, id: x2.id }))];
    }
    return [x];
  }).flat();
}
function deleteGridItem(app, component, parent) {
  let [subgrids, components2] = getAllSubgridsAndComponentIds(app, component);
  if (app.subgrids) {
    subgrids.forEach((id) => {
      delete app.subgrids[id];
    });
  }
  if (parent) {
    app.subgrids && (app.subgrids[parent] = app.subgrids[parent].filter((item) => item.id !== component?.id));
  } else {
    app.grid = app.grid.filter((item) => item.id !== component?.id);
  }
  return components2;
}
function initOutput(world, id, init) {
  if (!world) {
    return {};
  }
  return Object.fromEntries(
    Object.entries(init).map(([key, value]) => [key, world.newOutput(id, key, value)])
  );
}
function initConfig(r, configuration) {
  return JSON.parse(
    JSON.stringify(
      Object.fromEntries(
        Object.entries(r).map(
          ([key, value]) => value.type == "static" ? [
            key,
            configuration?.[key]?.type == "static" ? configuration?.[key]?.["value"] : void 0
          ] : value.type == "oneOf" ? [
            key,
            {
              selected: value.selected,
              type: "oneOf",
              configuration: Object.fromEntries(
                Object.entries(value.configuration).map(([choice, config]) => {
                  const conf = initConfig(config, configuration?.[key]?.configuration?.[choice]);
                  Object.entries(config).forEach(([innerKey, innerValue]) => {
                    if (innerValue.type === "static" && !(innerKey in conf)) {
                      conf[innerKey] = innerValue.value;
                    }
                  });
                  return [choice, conf];
                })
              )
            }
          ] : [key, void 0]
        )
      )
    )
  );
}
function sortGridItemsPosition(gridItems, width) {
  return gridItems.sort((a, b) => {
    const aX = a[width].x;
    const aY = a[width].y;
    const bX = b[width].x;
    const bY = b[width].y;
    if (aY < bY) {
      return -1;
    } else if (aY > bY) {
      return 1;
    } else {
      if (aX < bX) {
        return -1;
      } else if (aX > bX) {
        return 1;
      } else {
        return 0;
      }
    }
  });
}
function recursivelyFilterKeyInJSON(json, search, extraSearch) {
  if (json === null || json === void 0 || typeof json != "object") {
    return json;
  }
  if (!search || search == "") {
    return json;
  }
  let filteredJSON = {};
  Object.keys(json).forEach((key) => {
    if (key.toLowerCase().includes(search.toLowerCase()) || extraSearch?.toLowerCase().includes(search.toLowerCase()) || typeof json[key] === "string" && json[key].toLowerCase().includes(search.toLowerCase()) || typeof json[key] === "number" && json[key].toString().toLowerCase().includes(search.toLowerCase())) {
      filteredJSON[key] = json[key];
    } else if (typeof json[key] === "object") {
      const res = recursivelyFilterKeyInJSON(json[key], search, extraSearch);
      if (Object.keys(res ?? {}).length !== 0) {
        filteredJSON[key] = res;
      }
    }
  });
  return filteredJSON;
}
function collectOneOfFields(fields, app) {
  return Object.fromEntries(
    Object.entries(fields ?? {}).filter(([k, v]) => v.type == "evalv2").map(([k, v]) => {
      let field = v;
      if (!field.connections || field.connections.length !== 1) {
        return [k, void 0];
      }
      const c = field.connections[0];
      const gridItem = findGridItem(app, c.componentId);
      if (field.expr !== c.componentId + "." + c.id) {
        return [k, void 0];
      }
      if (gridItem) {
        const c2 = gridItem.data;
        if (c2) {
          if (c2.type === "resourceselectcomponent" || c2.type === "selectcomponent" || c2.type === "multiselectcomponent" || c2.type === "multiselectcomponentv2") {
            if ((c2.type === "selectcomponent" || c2.type === "multiselectcomponent" || c2.type === "multiselectcomponentv2") && c2.configuration?.create?.type === "static" && c2.configuration?.create?.value === true) {
              return [k, void 0];
            }
            if (c2.configuration?.items?.type === "static") {
              const items = c2.configuration.items.value;
              if (items && Array.isArray(items)) {
                if (c2.type === "multiselectcomponent" || c2.type === "multiselectcomponentv2") {
                  return [k, items];
                } else {
                  const options = items.filter(
                    (item) => item && typeof item === "object" && "value" in item && item.value
                  ).map((item) => item.value);
                  return [k, options];
                }
              }
            }
          }
        }
      }
      return [k, void 0];
    }).filter(([k, v]) => v !== void 0)
  );
}
const ROW_HEIGHT = 36;
const ROW_GAP_Y = 2;
const ROW_GAP_X = 4;
function maxHeight(grid, windowHeight, breakpoint = "lg") {
  const totalRowHeight = ROW_HEIGHT + ROW_GAP_Y;
  let maxRows = Math.floor((windowHeight - ROW_GAP_Y) / totalRowHeight);
  if (!grid.length) {
    return maxRows;
  }
  const breakpointKey = breakpoint === "sm" ? 3 : 12;
  const maxRowPerGrid = grid.reduce((max, item) => {
    const y = item[breakpointKey].y;
    const h = item[breakpointKey].h;
    return Math.max(max, y + h);
  }, 0);
  return Math.max(maxRowPerGrid, maxRows);
}
function isTableAction(id, app) {
  const [tableId, actionId] = id.split("_");
  if (!tableId || !actionId) {
    return false;
  }
  const table = findGridItem(app, tableId);
  if (!table || table.data.type !== "tablecomponent" && table.data.type !== "aggridcomponent" && table.data.type !== "aggridcomponentee" && table.data.type !== "dbexplorercomponent" && table.data.type !== "aggridinfinitecomponent" && table.data.type !== "aggridinfinitecomponentee") {
    return false;
  }
  return true;
}
function setUpTopBarComponentContent(id, app) {
  insertNewGridItem(
    app,
    appComponentFromType(
      "textcomponent",
      {
        disableNoText: {
          value: true,
          type: "static",
          fieldType: "boolean"
        },
        tooltip: {
          type: "evalv2",
          fieldType: "text",
          expr: "`Author: ${ctx.author}`",
          connections: [
            {
              componentId: "ctx",
              id: "author"
            }
          ]
        }
      },
      void 0,
      {
        customCss: {
          text: {
            class: "text-xl font-semibold whitespace-nowrap truncate",
            style: ""
          }
        },
        verticalAlignment: "center",
        componnetInput: {
          type: "templatev2",
          fieldType: "template",
          eval: "${ctx.summary}",
          connections: [
            {
              id: "summary",
              componentId: "ctx"
            }
          ]
        }
      }
    ),
    {
      parentComponentId: id,
      subGridIndex: 0
    },
    void 0,
    void 0,
    void 0,
    {
      3: {
        w: 6,
        h: 1
      },
      12: {
        w: 6,
        h: 1
      }
    }
  );
  insertNewGridItem(
    app,
    appComponentFromType("recomputeallcomponent", void 0, void 0, {
      horizontalAlignment: "right"
    }),
    {
      parentComponentId: id,
      subGridIndex: 0
    },
    void 0,
    void 0,
    void 0,
    {
      3: {
        w: 3,
        h: 1
      },
      12: {
        w: 6,
        h: 1
      }
    }
  );
}
function initHistory(initial) {
  return writable({ history: [initial], index: 0 });
}
function push(history, value, noSetIndex = false, skipCopy = false) {
  history?.update((history2) => {
    history2.history = JSON.parse(JSON.stringify(history2.history.slice(0, history2.index + 1)));
    const toPush = skipCopy ? value : JSON.parse(JSON.stringify(value));
    history2.history.push(toPush);
    if (!noSetIndex) {
      history2.index = history2.history.length - 1;
    }
    if (history2.history.length > 20) {
      history2.history = history2.history.slice(history2.history.length - 20);
      history2.index -= 1;
    }
    return history2;
  });
}
export {
  findComponentSettings as A,
  deleteGridItem as B,
  maxHeight as C,
  ctxRegex as D,
  collectOneOfFields as E,
  isScriptByNameDefined as F,
  isScriptByPathDefined as G,
  transformBareBase64IfNecessary as H,
  getImageDataURL as I,
  hasTailwindClass as J,
  dfs as K,
  allItems as L,
  migrateApp as M,
  BG_PREFIX as N,
  buildExtraLib as O,
  cleanseOneOfConfiguration as P,
  fieldTypeToTsType as Q,
  ROW_HEIGHT as R,
  toStatic as S,
  TailwindClassPatterns as T,
  Unlock as U,
  forbiddenIds as V,
  allsubIds as W,
  schemaToInputsSpec as X,
  getAllGridItems as Y,
  clearResultAppInput as Z,
  isTableAction as _,
  appComponentFromType as a,
  initHistory as b,
  charsToNumber as c,
  ROW_GAP_X as d,
  ROW_GAP_Y as e,
  findGridItem as f,
  getRowsCount as g,
  specifyUndefinedColumns as h,
  insertNewGridItem as i,
  tailwindHorizontalAlignment as j,
  tailwindVerticalAlignment as k,
  accessPropertyByPath as l,
  initConfig as m,
  numberToChars as n,
  initOutput as o,
  push as p,
  initCss as q,
  recursivelyFilterKeyInJSON as r,
  setUpTopBarComponentContent as s,
  throttle as t,
  getItemById as u,
  moveItem as v,
  sortGridItemsPosition as w,
  findGridItemParentGrid as x,
  getAllSubgridsAndComponentIds as y,
  copyComponent as z
};
