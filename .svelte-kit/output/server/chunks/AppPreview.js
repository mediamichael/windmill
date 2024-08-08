import { C as set_current_component, n as noop, K as blank_object, r as run_all, L as children, M as detach, i as is_function, N as is_empty, O as run, D as current_component, P as start_hydrating, Q as end_hydrating, c as create_ssr_component, v as validate_component, d as createEventDispatcher, e as escape, b as add_attribute, h as getContext, s as subscribe, f as each, a as set_store_value, o as onDestroy, m as get_store_value, u as setContext, A as add_styles, t as compute_rest_props, w as spread, y as escape_attribute_value, x as escape_object, g as safe_not_equal, R as text, S as claim_text, T as insert_hydration, U as set_data, q as missing_component } from "./ssr.js";
import { w as writable, r as readable, d as derived } from "./index.js";
import { deepEqual } from "fast-equals";
import sum from "hash-sum";
import { g as classNames, Q as ButtonDropdown, M as MenuItem, B as Button, s as sendUserToast, ac as isCodeInjection, V as deepMergeWithPriority, P as Portal, ab as extractCustomProperties, a3 as copyToClipboard, a2 as getModifierKey, e as emptySchema, f as defaultIfEmptyString, ad as isObject } from "./toast.js";
import { g as getRowsCount, t as throttle, R as ROW_HEIGHT, d as ROW_GAP_X, e as ROW_GAP_Y, h as specifyUndefinedColumns, r as recursivelyFilterKeyInJSON, j as tailwindHorizontalAlignment, k as tailwindVerticalAlignment, l as accessPropertyByPath, m as initConfig, o as initOutput, q as initCss, u as getItemById, v as moveItem, w as sortGridItemsPosition, x as findGridItemParentGrid, f as findGridItem, y as getAllSubgridsAndComponentIds, p as push, i as insertNewGridItem, z as copyComponent, A as findComponentSettings, B as deleteGridItem, C as maxHeight, D as ctxRegex, E as collectOneOfFields, F as isScriptByNameDefined, G as isScriptByPathDefined, H as transformBareBase64IfNecessary, I as getImageDataURL, J as hasTailwindClass, T as TailwindClassPatterns, K as dfs, L as allItems, M as migrateApp, U as Unlock, N as BG_PREFIX } from "./history.js";
import { d as deepEqualWithOrderedArray, s as secondaryMenuLeft, t as tableOptions } from "./AppSliderInputs.svelte_svelte_type_style_lang.js";
import { twMerge } from "tailwind-merge";
import { P as Popover } from "./Popover.js";
import { g as gfmPlugin } from "./index2.js";
/* empty css                                     */
import { P as Popup } from "./Popup.js";
import "./common.js";
import { g as gridColumns, c as columnConfiguration, i as isFixed } from "./gridUtils.js";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import { w as workspaceStore, u as userStore, e as enterpriseLicense } from "./stores2.js";
import { O as ObjectViewer, L as LightweightSchemaForm, S as Select, a as SELECT_INPUT_DEFAULT_STYLE, D as Download, h as FileUpload, l as RangeSlider, g as FileInput, C as CurrencyInput } from "./LightweightSchemaForm.js";
import { X } from "./x.js";
import { I as Icon } from "./Icon.js";
import { P as Pen } from "./pen.js";
import { N as Network, b as components } from "./components.js";
import { A as Arrow_down_from_line, T as TestJobLoader, L as LogViewer, D as DisplayResult } from "./TimelineBar.js";
import { E as Expand } from "./expand.js";
import { M as Move } from "./util.js";
import { B as Bug } from "./bug.js";
import { f as flush, b as add_render_callback, c as flush_render_callbacks, d as dirty_components, s as schedule_update, t as tick, A as Arrow_left, a as Arrow_right } from "./Head.js";
import { J as JobService, A as AppService, m as CancelablePromise, R as ResourceService } from "./services.gen.js";
import "./index3.js";
import { c as createFloatingActions, T as Trash, C as Chevron_right } from "./Section.js";
import { offset, flip, shift } from "@floating-ui/dom";
import { M as MultiSelect } from "./MultiSelect2.js";
import { M as MultiSelect$1 } from "./MultiSelect.js";
import "yaml";
import "minimatch";
import { C as Copy } from "./copy.js";
import { b as Disposable, D as Drawer, a as DrawerContent } from "./DrawerContent.js";
import { A as Alert } from "./Alert.js";
import { R as ResultJobLoader } from "./ResultJobLoader.js";
import { R as Refresh_cw } from "./refresh-cw.js";
import { L as Loader_2 } from "./loader-2.js";
/* empty css                                                  */
import { T as Tabs, a as Tab } from "./Tabs.js";
import { C as Chart$1, L as Line } from "./Line.js";
import { Chart, DoughnutController, PieController, BarController, registerables, Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale, BarElement, TimeScale, LogarithmicScale, ArcElement } from "chart.js";
import { u as useForwardEvents } from "./svelte.js";
import { F as FlowStatusViewer } from "./FlowStatusViewer.js";
import easyReactive from "easy-reactive";
import "ag-grid-community";
import { B as Badge } from "./Badge.js";
/* empty css                                        */
import { a as ConfirmationModal } from "./ConfirmationModal.js";
import { T as Toggle } from "./Toggle.js";
import { A as Arrow_down } from "./arrow-down.js";
import { a as MenuV2 } from "./DropdownV2.js";
import { D as DarkModeObserver } from "./DarkModeObserver.js";
import { b as getLanguageByResourceType, c as buildParameters, d as getPrimaryKeys, C as ColumnIdentity, e as buildVisibleFieldList, g as getDbSchemas, h as getTablesByResource, l as loadTableMetaData } from "./utils3.js";
import init$1, { parse_mssql, parse_snowflake, parse_bigquery, parse_sql, parse_mysql } from "windmill-sql-datatype-parser-wasm";
import { a as argSigToJsonSchemaType } from "./inferArgSig.js";
import { P as Plus } from "./plus.js";
import { parseISO, format } from "date-fns";
import { D as DateTimeInput } from "./DateTimeInput.js";
import { I as IS_APP_PUBLIC_CONTEXT_KEY } from "./types.js";
import zoomPlugin from "chartjs-plugin-zoom";
import "chartjs-adapter-date-fns";
import { S as Scatter } from "./Scatter.js";
import { M as Markdown, T as Tooltip$1 } from "./Tooltip.js";
import { createTable } from "@tanstack/table-core";
import { C as Columns } from "./columns.js";
import { E as Eye } from "./eye.js";
import { i as is_void } from "./names.js";
import { C as Clipboard } from "./clipboard.js";
import { U as User } from "./user2.js";
import { S as Splitpanes, P as Pane } from "./Pane.js";
import { Map as Map$1, View, Feature } from "ol";
import { useGeographic } from "ol/proj.js";
import { OSM, Vector as Vector$1 } from "ol/source.js";
import { Tile, Vector } from "ol/layer.js";
import { Point } from "ol/geom.js";
import { defaults } from "ol/control.js";
import { Style, Circle, Fill, Stroke, Text } from "ol/style.js";
import { GlobalWorkerOptions } from "pdfjs-dist";
import { enUS, de, fr, ja, pt } from "date-fns/locale";
const outroing = /* @__PURE__ */ new Set();
let outros;
function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}
function transition_out(block, local, detach2, callback) {
  if (block && block.o) {
    if (outroing.has(block)) return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);
    });
    block.o(local);
  }
}
function create_component(block) {
  block && block.c();
}
function claim_component(block, parent_nodes) {
  block && block.l(parent_nodes);
}
function mount_component(component, target, anchor) {
  const { fragment, after_update } = component.$$;
  fragment && fragment.m(target, anchor);
  add_render_callback(() => {
    const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
    if (component.$$.on_destroy) {
      component.$$.on_destroy.push(...new_on_destroy);
    } else {
      run_all(new_on_destroy);
    }
    component.$$.on_mount = [];
  });
  after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    flush_render_callbacks($$.after_update);
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }
  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}
function init(component, options, instance2, create_fragment2, not_equal, props, append_styles = null, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = component.$$ = {
    fragment: null,
    ctx: [],
    // state
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
    // everything else
    callbacks: blank_object(),
    dirty,
    skip_bound: false,
    root: options.target || parent_component.$$.root
  };
  append_styles && append_styles($$.root);
  let ready = false;
  $$.ctx = instance2 ? instance2(component, options.props || {}, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;
    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
      if (ready) make_dirty(component, i);
    }
    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update);
  $$.fragment = create_fragment2 ? create_fragment2($$.ctx) : false;
  if (options.target) {
    if (options.hydrate) {
      start_hydrating();
      const nodes = children(options.target);
      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      $$.fragment && $$.fragment.c();
    }
    if (options.intro) transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor);
    end_hydrating();
    flush();
  }
  set_current_component(parent_component);
}
class SvelteComponent {
  /**
   * ### PRIVATE API
   *
   * Do not use, may change at any time
   *
   * @type {any}
   */
  $$ = void 0;
  /**
   * ### PRIVATE API
   *
   * Do not use, may change at any time
   *
   * @type {any}
   */
  $$set = void 0;
  /** @returns {void} */
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(type, callback) {
    if (!is_function(callback)) {
      return noop;
    }
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1) callbacks.splice(index, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(props) {
    if (this.$$set && !is_empty(props)) {
      this.$$.skip_bound = true;
      this.$$set(props);
      this.$$.skip_bound = false;
    }
  }
}
const Anchor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "5", "r": "3" }],
    [
      "line",
      {
        "x1": "12",
        "x2": "12",
        "y1": "22",
        "y2": "8"
      }
    ],
    ["path", { "d": "M5 12H2a10 10 0 0 0 20 0h-3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "anchor" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Arrow_left_circle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "M16 12H8" }],
    ["path", { "d": "m12 8-4 4 4 4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "arrow-left-circle" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Arrow_right_circle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "M8 12h8" }],
    ["path", { "d": "m12 16 4-4-4-4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "arrow-right-circle" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Chevron_left = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m15 18-6-6 6-6" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "chevron-left" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Loader$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "12",
        "x2": "12",
        "y1": "2",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "12",
        "x2": "12",
        "y1": "18",
        "y2": "22"
      }
    ],
    [
      "line",
      {
        "x1": "4.93",
        "x2": "7.76",
        "y1": "4.93",
        "y2": "7.76"
      }
    ],
    [
      "line",
      {
        "x1": "16.24",
        "x2": "19.07",
        "y1": "16.24",
        "y2": "19.07"
      }
    ],
    [
      "line",
      {
        "x1": "2",
        "x2": "6",
        "y1": "12",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "18",
        "x2": "22",
        "y1": "12",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "4.93",
        "x2": "7.76",
        "y1": "19.07",
        "y2": "16.24"
      }
    ],
    [
      "line",
      {
        "x1": "16.24",
        "x2": "19.07",
        "y1": "7.76",
        "y2": "4.93"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "loader" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Move_horizontal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["polyline", { "points": "18 8 22 12 18 16" }],
    ["polyline", { "points": "6 8 2 12 6 16" }],
    [
      "line",
      {
        "x1": "2",
        "x2": "22",
        "y1": "12",
        "y2": "12"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "move-horizontal" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Paintbrush_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z"
      }
    ],
    ["path", { "d": "M6 12V2h12v10" }],
    ["path", { "d": "M14 2v4" }],
    ["path", { "d": "M10 2v2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "paintbrush-2" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Plug_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M9 2v6" }],
    ["path", { "d": "M15 2v6" }],
    ["path", { "d": "M12 17v5" }],
    ["path", { "d": "M5 8h14" }],
    ["path", { "d": "M6 11V8h12v3a6 6 0 1 1-12 0v0Z" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "plug-2" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Scissors = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "6", "cy": "6", "r": "3" }],
    ["path", { "d": "M8.12 8.12 12 12" }],
    ["path", { "d": "M20 4 8.12 15.88" }],
    ["circle", { "cx": "6", "cy": "18", "r": "3" }],
    ["path", { "d": "M14.8 14.8 20 20" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "scissors" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Skip_back = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["polygon", { "points": "19 20 9 12 19 4 19 20" }],
    [
      "line",
      {
        "x1": "5",
        "x2": "5",
        "y1": "19",
        "y2": "5"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "skip-back" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Skip_forward = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["polygon", { "points": "5 4 15 12 5 20 5 4" }],
    [
      "line",
      {
        "x1": "19",
        "x2": "19",
        "y1": "5",
        "y2": "19"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "skip-forward" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Timer_reset = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M10 2h4" }],
    ["path", { "d": "M12 14v-4" }],
    [
      "path",
      {
        "d": "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"
      }
    ],
    ["path", { "d": "M9 17H4v5" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "timer-reset" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Zoom_in = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "11", "cy": "11", "r": "8" }],
    [
      "line",
      {
        "x1": "21",
        "x2": "16.65",
        "y1": "21",
        "y2": "16.65"
      }
    ],
    [
      "line",
      {
        "x1": "11",
        "x2": "11",
        "y1": "8",
        "y2": "14"
      }
    ],
    [
      "line",
      {
        "x1": "8",
        "x2": "14",
        "y1": "11",
        "y2": "11"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "zoom-in" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Zoom_out = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "11", "cy": "11", "r": "8" }],
    [
      "line",
      {
        "x1": "21",
        "x2": "16.65",
        "y1": "21",
        "y2": "16.65"
      }
    ],
    [
      "line",
      {
        "x1": "8",
        "x2": "14",
        "y1": "11",
        "y2": "11"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "zoom-out" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
function buildWorld(context) {
  const newWorld = buildObservableWorld();
  const stateId = writable(0);
  let writableWorld = void 0;
  const outputsById = {
    ctx: Object.fromEntries(
      Object.entries(context).map(([k, v]) => {
        return [k, newWorld.newOutput("ctx", k, stateId, v)];
      })
    ),
    state: {}
  };
  function newOutput(id, name, previousValue) {
    if (outputsById[id]?.[name]) {
      return outputsById[id][name];
    }
    let o = newWorld.newOutput(id, name, stateId, previousValue);
    if (!outputsById[id]) {
      outputsById[id] = {};
    }
    outputsById[id][name] = o;
    writableWorld?.update((x) => x);
    return o;
  }
  stateId.update((x) => x + 1);
  writableWorld = writable({
    outputsById,
    connect: newWorld.connect,
    stateId,
    newOutput
  });
  return writableWorld;
}
function buildObservableWorld() {
  const observables = {};
  function connect(connection, next, id, previousValue) {
    if (!connection) {
      return {
        id,
        peak: () => void 0,
        next: () => {
        }
      };
    }
    const input = cachedInput(next, id);
    const { componentId, id: idc } = connection;
    let obs = observables[`${componentId}.${idc}`];
    if (!obs) {
      if (componentId != "row" && componentId != "iter") {
        console.warn("Observable at " + componentId + "." + idc + " not found");
      }
      return {
        peak: () => void 0,
        next: () => {
        }
      };
    }
    obs.subscribe(input, previousValue);
    return input;
  }
  function newOutput(id, name, state, previousValue) {
    const output = settableOutput(state, previousValue);
    observables[`${id}.${name}`] = output;
    return output;
  }
  return {
    connect,
    newOutput
  };
}
function cachedInput(nextParan, id) {
  let value = void 0;
  function peak() {
    return value;
  }
  function next(x) {
    value = x;
    nextParan(x);
  }
  return {
    id,
    peak,
    next
  };
}
function settableOutput(state, previousValue) {
  let value = previousValue;
  const subscribers = [];
  function subscribe2(x, npreviousValue) {
    let currentSubscriber = subscribers.findIndex((y) => y === x || y.id && y.id === x.id);
    if (currentSubscriber == -1) {
      subscribers.push(x);
    } else {
      subscribers[currentSubscriber] = x;
    }
    if (value !== void 0 && !deepEqual(value, npreviousValue)) {
      x.next(value);
    }
    return () => {
      const index = subscribers.findIndex((y) => y === x || y.id && y.id === x.id);
      if (index !== -1) {
        subscribers.splice(index, 1);
      }
    };
  }
  let lastHash = void 0;
  function set(x, force = false) {
    let newHash = typeof x === "object" ? sum(x) : x;
    if (lastHash != newHash || force) {
      lastHash = newHash;
      state.update((x2) => x2 + 1);
      if (typeof x === "object") {
        if (Array.isArray(x)) {
          value = [...x];
        } else {
          value = Object.assign({}, x);
        }
      } else {
        value = x;
      }
      subscribers.forEach((x2) => x2.next(value));
    }
  }
  function peak() {
    return value;
  }
  return {
    subscribe: subscribe2,
    set,
    peak
  };
}
function getContainerHeight(items, yPerPx, cols) {
  return getRowsCount(items, cols) * yPerPx;
}
const css$9 = {
  code: ".svlt-grid-container.svelte-igi7b7{position:relative;width:100%}.svlt-grid-item.svelte-igi7b7{backface-visibility:hidden;-webkit-backface-visibility:hidden;position:absolute;touch-action:none;will-change:auto}",
  map: null
};
const GridViewer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let containerHeight;
  const dispatch = createEventDispatcher();
  let { items } = $$props;
  let { rowHeight = ROW_HEIGHT } = $$props;
  let { cols } = $$props;
  let { gap = [ROW_GAP_X, ROW_GAP_Y] } = $$props;
  let { throttleUpdate = 100 } = $$props;
  let { maxRow } = $$props;
  let { breakpoint } = $$props;
  let { allIdsInPath = void 0 } = $$props;
  let { containerWidth = void 0 } = $$props;
  let { parentWidth = void 0 } = $$props;
  let getComputedCols;
  let container;
  let xPerPx = 0;
  let yPerPx = rowHeight;
  throttle(
    () => {
      items = specifyUndefinedColumns(items, getComputedCols, cols);
      dispatch("resize", {
        cols: getComputedCols,
        xPerPx,
        yPerPx,
        width: containerWidth
      });
    },
    throttleUpdate
  );
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  if ($$props.rowHeight === void 0 && $$bindings.rowHeight && rowHeight !== void 0) $$bindings.rowHeight(rowHeight);
  if ($$props.cols === void 0 && $$bindings.cols && cols !== void 0) $$bindings.cols(cols);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0) $$bindings.gap(gap);
  if ($$props.throttleUpdate === void 0 && $$bindings.throttleUpdate && throttleUpdate !== void 0) $$bindings.throttleUpdate(throttleUpdate);
  if ($$props.maxRow === void 0 && $$bindings.maxRow && maxRow !== void 0) $$bindings.maxRow(maxRow);
  if ($$props.breakpoint === void 0 && $$bindings.breakpoint && breakpoint !== void 0) $$bindings.breakpoint(breakpoint);
  if ($$props.allIdsInPath === void 0 && $$bindings.allIdsInPath && allIdsInPath !== void 0) $$bindings.allIdsInPath(allIdsInPath);
  if ($$props.containerWidth === void 0 && $$bindings.containerWidth && containerWidth !== void 0) $$bindings.containerWidth(containerWidth);
  if ($$props.parentWidth === void 0 && $$bindings.parentWidth && parentWidth !== void 0) $$bindings.parentWidth(parentWidth);
  $$result.css.add(css$9);
  containerHeight = getContainerHeight(items, yPerPx, getComputedCols);
  return `<div class="svlt-grid-container svelte-igi7b7" style="${"height: " + escape(containerHeight, true) + "px"}"${add_attribute("this", container, 0)}>${``} </div>`;
});
const TabsDebug = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_componentControl;
  let { tabs = [] } = $$props;
  let { id } = $$props;
  let { isConditionalDebugMode = false } = $$props;
  const { componentControl } = getContext("AppViewerContext");
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => value);
  createEventDispatcher();
  if ($$props.tabs === void 0 && $$bindings.tabs && tabs !== void 0) $$bindings.tabs(tabs);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.isConditionalDebugMode === void 0 && $$bindings.isConditionalDebugMode && isConditionalDebugMode !== void 0) $$bindings.isConditionalDebugMode(isConditionalDebugMode);
  $$unsubscribe_componentControl();
  return `<button${add_attribute(
    "title",
    isConditionalDebugMode ? "Debug conditions" : "Debug tabs",
    0
  )}${add_attribute(
    "class",
    classNames("text-2xs py-0.5 font-bold w-fit border cursor-pointer rounded-sm", "bg-indigo-100 text-indigo-600 border-indigo-500 hover:bg-indigo-200 hover:text-indigo-800"),
    0
  )}>${validate_component(ButtonDropdown, "ButtonDropdown").$$render($$result, { hasPadding: false }, {}, {
    items: () => {
      return `${each(tabs ?? [], ({}, index) => {
        return `${validate_component(MenuItem, "MenuItem").$$render($$result, {}, {}, {
          default: () => {
            return `<div${add_attribute("class", classNames("!text-tertiary text-left px-4 py-2 gap-2 cursor-pointer hover:bg-surface-hover !text-xs font-semibold"), 0)}>${index === tabs.length - 1 ? `${escape(isConditionalDebugMode ? `Debug default condition` : `Debug tab ${index + 1}`)}` : `${escape(`Debug ${isConditionalDebugMode ? "condition" : "tab"} ${index + 1}`)}`}</div> `;
          }
        })}`;
      })} ${validate_component(MenuItem, "MenuItem").$$render($$result, {}, {}, {
        default: () => {
          return `<div${add_attribute("class", classNames("!text-red-600 dark:!text-red-400 text-left px-4 py-2 gap-2 cursor-pointer hover:bg-surface-hover !text-xs font-semibold"), 0)}>${escape(`Reset debug mode`)}</div>`;
        }
      })} `;
    },
    buttonReplacement: () => {
      return `<div class="px-1">${`${escape(isConditionalDebugMode ? `Debug conditions` : `Debug tabs`)}`}</div>`;
    }
  })}</button>`;
});
const ComponentOutputViewer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filtered;
  let $hasResult, $$unsubscribe_hasResult;
  let $search, $$unsubscribe_search;
  let $worldStore, $$unsubscribe_worldStore;
  let $connectingInput, $$unsubscribe_connectingInput;
  let { componentId } = $$props;
  let { hasContent = false } = $$props;
  let { suffix = "" } = $$props;
  const { worldStore, connectingInput } = getContext("AppViewerContext");
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => $connectingInput = value);
  const { search, hasResult } = getContext("ContextPanel");
  $$unsubscribe_search = subscribe(search, (value) => $search = value);
  $$unsubscribe_hasResult = subscribe(hasResult, (value) => $hasResult = value);
  let object = {};
  function subscribeToAllOutputs(observableOutputs) {
    if (observableOutputs) {
      Object.entries(observableOutputs).forEach(([k, output]) => {
        object[k] = void 0;
        output?.subscribe(
          {
            id: "alloutputs-" + suffix + componentId + "-" + k,
            next: (value) => {
              if (!hasContent) {
                hasContent = true;
              }
              object[k] = value;
            }
          },
          object[k]
        );
      });
    }
  }
  if ($$props.componentId === void 0 && $$bindings.componentId && componentId !== void 0) $$bindings.componentId(componentId);
  if ($$props.hasContent === void 0 && $$bindings.hasContent && hasContent !== void 0) $$bindings.hasContent(hasContent);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0) $$bindings.suffix(suffix);
  {
    subscribeToAllOutputs($worldStore?.outputsById?.[componentId]);
  }
  filtered = recursivelyFilterKeyInJSON(object, $search, componentId);
  set_store_value(hasResult, $hasResult[componentId] = Object.keys(filtered).length > 0, $hasResult);
  $$unsubscribe_hasResult();
  $$unsubscribe_search();
  $$unsubscribe_worldStore();
  $$unsubscribe_connectingInput();
  return `${object != void 0 && Object.keys(object).length > 0 ? `${$hasResult[componentId] || $search == "" ? `${validate_component(ObjectViewer, "ObjectViewer").$$render(
    $$result,
    {
      json: filtered,
      topBrackets: false,
      pureViewer: !$connectingInput.opened
    },
    {},
    {}
  )}` : `${$search.length > 0 ? `<div class="text-xs pl-2 text-tertiary" data-svelte-h="svelte-1pho6u4">No results</div>` : `<div class="text-xs pl-2 text-tertiary" data-svelte-h="svelte-ilb038">No outputs</div>`}`}` : ``}`;
});
function getFirstNode(nodes) {
  return nodes.find((node) => !nodes.some((n) => n.next.some((next) => next.id === node.id)));
}
function isDebugging(debuggingComponents, id) {
  return Object.keys(debuggingComponents).includes(id);
}
const DecisionTreeDebug = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $debuggingComponents, $$unsubscribe_debuggingComponents;
  let $componentControl, $$unsubscribe_componentControl;
  let $worldStore, $$unsubscribe_worldStore;
  let { nodes = [] } = $$props;
  let { id } = $$props;
  const { componentControl, debuggingComponents, worldStore } = getContext("AppViewerContext");
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => $componentControl = value);
  $$unsubscribe_debuggingComponents = subscribe(debuggingComponents, (value) => $debuggingComponents = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  createEventDispatcher();
  let currentNodeId = $worldStore.outputsById[id]?.currentNodeId?.peak() ?? "a";
  function subscribeToCurrentNode(id2) {
    return $worldStore.outputsById[id2]?.currentNodeId?.subscribe(
      {
        id: `id-${id2}-${currentNodeId}`,
        next: (value) => {
          currentNodeId = value;
        }
      },
      currentNodeId
    );
  }
  let subscription = subscribeToCurrentNode(id);
  function onDebugNode(debuggedNodeIndex) {
    if (debuggedNodeIndex === void 0) {
      return;
    }
    if (debuggedNodeIndex !== void 0 && nodes[debuggedNodeIndex]?.id === void 0) {
      currentNodeId = nodes[0]?.id ?? "";
      $componentControl?.[id]?.setTab?.(0);
      set_store_value(debuggingComponents, $debuggingComponents = Object.fromEntries(Object.entries($debuggingComponents).filter(([key]) => key !== id)), $debuggingComponents);
    }
  }
  let lastNodes = nodes;
  function onNodesChange(newNodes) {
    if (JSON.stringify(newNodes) !== JSON.stringify(lastNodes)) {
      lastNodes = newNodes;
      if (subscription) {
        subscription?.();
      }
      subscription = subscribeToCurrentNode(id);
    }
  }
  if ($$props.nodes === void 0 && $$bindings.nodes && nodes !== void 0) $$bindings.nodes(nodes);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  {
    onDebugNode($debuggingComponents[id]);
  }
  {
    onNodesChange(nodes);
  }
  $$unsubscribe_debuggingComponents();
  $$unsubscribe_componentControl();
  $$unsubscribe_worldStore();
  return `<button${add_attribute("title", "Debug tabs", 0)}${add_attribute(
    "class",
    classNames("text-2xs py-0.5 font-bold w-fit border cursor-pointer rounded-sm", isDebugging($debuggingComponents, id) ? "bg-red-100 text-red-600 border-red-500 hover:bg-red-200 hover:text-red-800" : "bg-indigo-100 text-indigo-600 border-indigo-500 hover:bg-indigo-200 hover:text-indigo-800"),
    0
  )}>${validate_component(ButtonDropdown, "ButtonDropdown").$$render($$result, { hasPadding: false }, {}, {
    items: () => {
      return `${each(nodes ?? [], (node, index) => {
        return `${validate_component(MenuItem, "MenuItem").$$render($$result, {}, {}, {
          default: () => {
            return `<div${add_attribute("class", classNames("!text-tertiary text-left px-4 py-2 gap-2 cursor-pointer hover:bg-gray-100 !text-xs font-semibold"), 0)}>${escape(`Debug node ${node.label}`)}</div> `;
          }
        })}`;
      })} ${validate_component(MenuItem, "MenuItem").$$render($$result, {}, {}, {
        default: () => {
          return `<div${add_attribute("class", classNames("!text-red-600 text-left px-4 py-2 gap-2 cursor-pointer hover:bg-gray-100 !text-xs font-semibold"), 0)}>${escape(`Reset debug mode`)}</div>`;
        }
      })} `;
    },
    buttonReplacement: () => {
      return `<div class="px-1">${isDebugging($debuggingComponents, id) ? `<div class="flex flex-row items-center gap-2">${escape(`Debugging node ${nodes[$debuggingComponents[id] ?? 0]?.id}`)} <button>${validate_component(X, "X").$$render($$result, { size: 14 }, {}, {})}</button></div>` : `${escape(`Debug nodes (current node: ${currentNodeId})`)}`}</div>`;
    }
  })}</button>`;
});
const ComponentHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $connectingInput, $$unsubscribe_connectingInput;
  let $errorByComponent, $$unsubscribe_errorByComponent;
  let $$unsubscribe_openDebugRun;
  let { component } = $$props;
  let { selected: selected2 } = $$props;
  let { locked = false } = $$props;
  let { hover = false } = $$props;
  let { connecting = false } = $$props;
  let { hasInlineEditor = false } = $$props;
  let { inlineEditorOpened = false } = $$props;
  let { errorHandledByComponent = false } = $$props;
  let { fullHeight = false } = $$props;
  createEventDispatcher();
  const { errorByComponent, openDebugRun, connectingInput } = getContext("AppViewerContext");
  $$unsubscribe_errorByComponent = subscribe(errorByComponent, (value) => $errorByComponent = value);
  $$unsubscribe_openDebugRun = subscribe(openDebugRun, (value) => value);
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => $connectingInput = value);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0) $$bindings.component(component);
  if ($$props.selected === void 0 && $$bindings.selected && selected2 !== void 0) $$bindings.selected(selected2);
  if ($$props.locked === void 0 && $$bindings.locked && locked !== void 0) $$bindings.locked(locked);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0) $$bindings.hover(hover);
  if ($$props.connecting === void 0 && $$bindings.connecting && connecting !== void 0) $$bindings.connecting(connecting);
  if ($$props.hasInlineEditor === void 0 && $$bindings.hasInlineEditor && hasInlineEditor !== void 0) $$bindings.hasInlineEditor(hasInlineEditor);
  if ($$props.inlineEditorOpened === void 0 && $$bindings.inlineEditorOpened && inlineEditorOpened !== void 0) $$bindings.inlineEditorOpened(inlineEditorOpened);
  if ($$props.errorHandledByComponent === void 0 && $$bindings.errorHandledByComponent && errorHandledByComponent !== void 0) $$bindings.errorHandledByComponent(errorHandledByComponent);
  if ($$props.fullHeight === void 0 && $$bindings.fullHeight && fullHeight !== void 0) $$bindings.fullHeight(fullHeight);
  $$unsubscribe_connectingInput();
  $$unsubscribe_errorByComponent();
  $$unsubscribe_openDebugRun();
  return `${connecting ? `<div class="absolute z-50 left-6 -top-[11px] overflow-auto">${validate_component(Popup, "Popup").$$render(
    $$result,
    {
      floatingConfig: {
        strategy: "fixed",
        placement: "bottom-start"
      }
    },
    {},
    {
      button: () => {
        return `<button${add_attribute("id", `connect-output-${component.id}`, 0)} class="bg-red-500/70 border border-red-600 px-1 py-0.5" title="Outputs" aria-label="Open output">${validate_component(Plug_2, "Plug2").$$render($$result, { size: 12 }, {}, {})}</button> `;
      },
      default: () => {
        return `${validate_component(ComponentOutputViewer, "ComponentOutputViewer").$$render(
          $$result,
          {
            suffix: "connect",
            componentId: component.id
          },
          {},
          {}
        )}`;
      }
    }
  )}</div>` : ``} ${selected2 || hover ? `  <span draggable="false"${add_attribute("title", `Id: ${component.id}`, 0)}${add_attribute(
    "class",
    twMerge("px-2 text-2xs font-semibold w-fit absolute shadow -top-[9px] -left-[8px] border rounded-sm z-50 cursor-move", selected2 ? "bg-indigo-500/90 border-indigo-600 text-white" : $connectingInput.opened ? "bg-red-500/90 border-red-600 text-white" : "bg-blue-500/90 border-blue-600 text-white"),
    0
  )}>${escape(component.id)}</span>` : ``} ${selected2 && !connecting ? `<div class="top-[-9px] -right-[8px] flex flex-row absolute gap-1.5 z-50">${hasInlineEditor ? `<button title="Edit"${add_attribute("class", classNames("px-1 text-2xs py-0.5 font-bold w-fit border cursor-pointer rounded-sm", "bg-indigo-100 text-indigo-600 border-indigo-500 hover:bg-indigo-200 hover:text-indigo-800"), 0)}>${inlineEditorOpened ? `${validate_component(Pen, "Pen").$$render(
    $$result,
    {
      "aria-label": "Unlock position",
      size: 14,
      class: "text-orange-500"
    },
    {},
    {}
  )}` : `${validate_component(Pen, "Pen").$$render($$result, { "aria-label": "Lock position", size: 14 }, {}, {})}`}</button>` : ``} ${component.type === "conditionalwrapper" ? `${validate_component(TabsDebug, "TabsDebug").$$render(
    $$result,
    {
      id: component.id,
      tabs: component.conditions ?? [],
      isConditionalDebugMode: true
    },
    {},
    {}
  )}` : `${component.type === "steppercomponent" || component.type === "tabscomponent" && component.configuration.tabsKind.type === "static" && component.configuration.tabsKind.value === "invisibleOnView" ? `${validate_component(TabsDebug, "TabsDebug").$$render(
    $$result,
    {
      id: component.id,
      tabs: component.tabs ?? []
    },
    {},
    {}
  )}` : `${component.type === "decisiontreecomponent" ? `<button${add_attribute("title", "Open Decision Tree Editor", 0)}${add_attribute("class", classNames("text-2xs py-0.5 px-1 font-bold w-fit border cursor-pointer rounded-sm", "bg-indigo-100 text-indigo-600 border-indigo-500 hover:bg-indigo-200 hover:text-indigo-800"), 0)}>${validate_component(Network, "Network").$$render($$result, { size: 14 }, {}, {})}</button> ${validate_component(DecisionTreeDebug, "DecisionTreeDebug").$$render(
    $$result,
    {
      id: component.id,
      nodes: component.nodes ?? []
    },
    {},
    {}
  )}` : ``}`}`}  <button title="Fill height"${add_attribute("class", classNames("px-1 text-2xs py-0.5 font-bold w-fit border cursor-pointer rounded-sm", "bg-indigo-100 text-indigo-600 border-indigo-500 hover:bg-indigo-200 hover:text-indigo-800"), 0)}>${validate_component(Arrow_down_from_line, "ArrowDownFromLine").$$render(
    $$result,
    {
      "aria-label": "Expand position",
      size: 14,
      class: fullHeight ? "text-orange-500" : ""
    },
    {},
    {}
  )}</button> <button title="Expand"${add_attribute("class", classNames("px-1 text-2xs py-0.5 font-bold w-fit border cursor-pointer rounded-sm", "bg-indigo-100 text-indigo-600 border-indigo-500 hover:bg-indigo-200 hover:text-indigo-800"), 0)}>${validate_component(Expand, "Expand").$$render(
    $$result,
    {
      "aria-label": "Expand position",
      size: 14
    },
    {},
    {}
  )}</button> <button title="Lock Position"${add_attribute("class", classNames("px-1 text-2xs py-0.5 font-bold w-fit border  rounded-sm cursor-pointer", "bg-indigo-100 text-indigo-600 border-indigo-500 hover:bg-indigo-200 hover:text-indigo-800"), 0)}>${locked ? `${validate_component(Anchor, "Anchor").$$render(
    $$result,
    {
      "aria-label": "Unlock position",
      size: 14,
      class: "text-orange-500"
    },
    {},
    {}
  )}` : `${validate_component(Anchor, "Anchor").$$render($$result, { "aria-label": "Lock position", size: 14 }, {}, {})}`}</button>  <div draggable="false" title="Move"${add_attribute("class", classNames("px-1 text-2xs py-0.5 font-bold w-fit border cursor-move rounded-sm", "bg-indigo-100 text-indigo-600 border-indigo-500 hover:bg-indigo-200 hover:text-indigo-800", "flex items-center justify-center"), 0)}>${validate_component(Move, "Move").$$render($$result, { size: 14 }, {}, {})}</div></div>` : ``} ${!errorHandledByComponent && $errorByComponent[component.id] ? (() => {
    let error = $errorByComponent[component.id]?.error;
    return ` <span title="Error"${add_attribute("class", classNames("text-red-500 px-1 text-2xs py-0.5 font-bold w-fit absolute border border-red-500 -bottom-1  shadow left-1/2 transform -translate-x-1/2 z-50 cursor-pointer"), 0)}>${validate_component(Popover, "Popover").$$render(
      $$result,
      {
        notClickable: true,
        placement: "bottom",
        popupClass: "!bg-surface border w-96"
      },
      {},
      {
        text: () => {
          return `<span slot="text"><div class="bg-surface"><pre class="whitespace-pre-wrap text-red-600 bg-surface border w-full p-4 text-xs mb-2">${escape(error ?? "")}	
								</pre></div> ${validate_component(Button, "Button").$$render($$result, { color: "red", variant: "border" }, {}, {
            default: () => {
              return `Open Debug Runs`;
            }
          })}</span>`;
        },
        default: () => {
          return `${validate_component(Bug, "Bug").$$render($$result, { size: 14 }, {}, {})}`;
        }
      }
    )}</span>`;
  })() : ``}`;
});
const AlignWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let { horizontalAlignment = void 0 } = $$props;
  let { verticalAlignment = void 0 } = $$props;
  let { noWFull = false } = $$props;
  let { hFull = false } = $$props;
  let { class: c = "" } = $$props;
  let { style = "" } = $$props;
  let { render = true } = $$props;
  if ($$props.horizontalAlignment === void 0 && $$bindings.horizontalAlignment && horizontalAlignment !== void 0) $$bindings.horizontalAlignment(horizontalAlignment);
  if ($$props.verticalAlignment === void 0 && $$bindings.verticalAlignment && verticalAlignment !== void 0) $$bindings.verticalAlignment(verticalAlignment);
  if ($$props.noWFull === void 0 && $$bindings.noWFull && noWFull !== void 0) $$bindings.noWFull(noWFull);
  if ($$props.hFull === void 0 && $$bindings.hFull && hFull !== void 0) $$bindings.hFull(hFull);
  if ($$props.class === void 0 && $$bindings.class && c !== void 0) $$bindings.class(c);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  classes = twMerge("flex z-auto", noWFull ? "" : "w-full", tailwindHorizontalAlignment(horizontalAlignment), tailwindVerticalAlignment(verticalAlignment), verticalAlignment || hFull ? "h-full" : "", c);
  return `${render ? `<div${add_attribute("class", classes, 0)}${add_attribute("style", style, 0)}>${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
const InitializeComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $initialized, $$unsubscribe_initialized;
  let { id } = $$props;
  const { initialized } = getContext("AppViewerContext");
  $$unsubscribe_initialized = subscribe(initialized, (value) => $initialized = value);
  onDestroy(() => {
    set_store_value(initialized, $initialized.initializedComponents = $initialized.initializedComponents.filter((c) => c !== id), $initialized);
  });
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  $$unsubscribe_initialized();
  return ``;
});
const ITERATIONS_BEFORE_SLOW_REFRESH = 10;
const ITERATIONS_BEFORE_SUPER_SLOW_REFRESH = 100;
async function waitJob(id) {
  const workspace = get_store_value(workspaceStore);
  if (!id) {
    return;
  }
  if (!workspace) {
    throw new Error("Workspace not found");
  }
  let syncIteration = 0;
  let errorIteration = 0;
  let job;
  return new Promise((resolve, reject) => {
    async function checkJob() {
      try {
        const maybeJob = await JobService.getCompletedJobResultMaybe({
          workspace,
          id,
          getStarted: false
        });
        if (maybeJob.completed) {
          job = { ...maybeJob, id };
          if (!job.success && typeof job.result === "object" && "error" in job.result) {
            reject(job.result.error);
          } else {
            resolve(job.result);
          }
          return;
        }
      } catch (err) {
        errorIteration += 1;
        if (errorIteration === 5) {
          try {
            await cancelJob(id, workspace);
          } catch (err2) {
            console.error(err2);
          }
        }
      }
      syncIteration++;
      let nextIteration = 50;
      if (syncIteration > ITERATIONS_BEFORE_SLOW_REFRESH) {
        nextIteration = 500;
      } else if (syncIteration > ITERATIONS_BEFORE_SUPER_SLOW_REFRESH) {
        nextIteration = 2e3;
      }
      setTimeout(checkJob, nextIteration);
    }
    job = void 0;
    checkJob();
  });
}
async function cancelJob(id, workspace) {
  if (id) {
    try {
      await JobService.cancelQueuedJob({
        workspace,
        id,
        requestBody: {}
      });
    } catch (err) {
      console.error(err);
    }
  }
}
function computeGlobalContext(world, extraContext = {}) {
  return {
    ...Object.fromEntries(
      Object.entries(world?.outputsById ?? {}).filter(([k, _]) => k != "state").map(([key, value]) => {
        return [
          key,
          Object.fromEntries(Object.entries(value ?? {}).map((x) => [x[0], x[1].peak()]))
        ];
      })
    ),
    ...extraContext
  };
}
function create_context_function_template(eval_string, contextKeys, noReturn) {
  let hasReturnAsLastLine = noReturn || eval_string.split("\n").some((x) => x.startsWith("return "));
  return `
return async function (context, state, goto, setTab, recompute, getAgGrid, setValue, setSelectedIndex, openModal, closeModal, open, close, validate, invalidate, validateAll, clearFiles, showToast, waitJob) {
"use strict";
${contextKeys && contextKeys.length > 0 ? `let ${contextKeys.map((key) => ` ${key} = context['${key}']`)};` : ``}
${hasReturnAsLastLine ? eval_string : `
return ${eval_string.startsWith("return ") ? eval_string.substring(7) : eval_string}`}

}                                                                                                                   
`;
}
let functorCache = {};
function make_context_evaluator(eval_string, contextKeys, noReturn) {
  let cacheKey = hashCode(JSON.stringify({ eval_string, contextKeys, noReturn }));
  if (functorCache[cacheKey]) {
    return functorCache[cacheKey];
  }
  let template = create_context_function_template(eval_string, contextKeys, noReturn);
  let functor = Function(template);
  let r = functor();
  functorCache[cacheKey] = r;
  return r;
}
function hashCode(s) {
  var hash = 0, i, chr;
  if (s.length === 0) return hash;
  for (i = 0; i < s.length; i++) {
    chr = s.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return hash;
}
async function eval_like(text2, context = {}, state, editor, controlComponents, worldStore, runnableComponents, noReturn) {
  const proxiedState = new Proxy(state, {
    set(target, key, value) {
      if (typeof key !== "string") {
        throw new Error("Invalid key");
      }
      target[key] = value;
      let o = worldStore?.newOutput("state", key, value);
      o?.set(value, true);
      return true;
    }
  });
  let evaluator = make_context_evaluator(text2, Object.keys(context ?? {}), noReturn);
  return await evaluator(
    context,
    proxiedState,
    async (x, newTab) => {
      if (newTab || editor) {
        if (!newTab) {
          sendUserToast(
            "In editor mode, `goto` opens a new tab to prevent losing your work. To test the redirection , use the preview mode."
          );
        }
        window.open(x, "_blank");
      } else {
        window.location.href = x;
      }
    },
    (id, index) => {
      controlComponents[id]?.setTab?.(index);
    },
    (id) => {
      runnableComponents[id]?.cb?.forEach((f) => f());
    },
    (id) => {
      return controlComponents[id]?.agGrid;
    },
    (id, value) => {
      controlComponents[id]?.setValue?.(value);
    },
    (id, index) => {
      controlComponents[id]?.setSelectedIndex?.(index);
    },
    (id) => {
      controlComponents[id]?.openModal?.();
    },
    (id) => {
      controlComponents[id]?.closeModal?.();
    },
    (id) => {
      controlComponents[id]?.open?.();
    },
    (id) => {
      controlComponents[id]?.close?.();
    },
    (id, key) => {
      controlComponents[id]?.validate?.(key);
    },
    (id, key, error) => {
      controlComponents[id]?.invalidate?.(key, error);
    },
    (id) => {
      controlComponents[id]?.validateAll?.();
    },
    (id) => {
      controlComponents[id]?.clearFiles?.();
    },
    (message, error) => {
      sendUserToast(message, error);
    },
    async (id) => waitJob(id)
  );
}
const debounce_ms = 50;
const InputValue = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fullContext;
  let stateId;
  let $iterContext, $$unsubscribe_iterContext;
  let $runnableComponents, $$unsubscribe_runnableComponents;
  let $worldStore, $$unsubscribe_worldStore;
  let $componentControl, $$unsubscribe_componentControl;
  let $mode, $$unsubscribe_mode;
  let $state, $$unsubscribe_state;
  let $rowContext, $$unsubscribe_rowContext;
  let $stateId, $$unsubscribe_stateId = noop, $$subscribe_stateId = () => ($$unsubscribe_stateId(), $$unsubscribe_stateId = subscribe(stateId, ($$value) => $stateId = $$value), stateId);
  let $groupContext, $$unsubscribe_groupContext;
  let { input } = $$props;
  let { value } = $$props;
  let { id = void 0 } = $$props;
  let { error = "" } = $$props;
  let { key = "" } = $$props;
  let { field = key } = $$props;
  let { onDemandOnly = false } = $$props;
  let { exportValueFunction = false } = $$props;
  const { componentControl, runnableComponents } = getContext("AppViewerContext");
  $$unsubscribe_componentControl = subscribe(componentControl, (value2) => $componentControl = value2);
  $$unsubscribe_runnableComponents = subscribe(runnableComponents, (value2) => $runnableComponents = value2);
  const editorContext = getContext("AppEditorContext");
  const iterContext = getContext("ListWrapperContext");
  $$unsubscribe_iterContext = subscribe(iterContext, (value2) => $iterContext = value2);
  const rowContext = getContext("RowWrapperContext");
  $$unsubscribe_rowContext = subscribe(rowContext, (value2) => $rowContext = value2);
  const groupContext = getContext("GroupContext");
  $$unsubscribe_groupContext = subscribe(groupContext, (value2) => $groupContext = value2);
  let previousConnectedValue = void 0;
  let previousConnectedValues = {};
  const dispatch = createEventDispatcher();
  if (input == void 0) {
    dispatch("done");
  }
  let lastInput = input ? JSON.parse(JSON.stringify(input)) : void 0;
  onDestroy(() => lastInput = void 0);
  const { worldStore, state, mode } = getContext("AppViewerContext");
  $$unsubscribe_worldStore = subscribe(worldStore, (value2) => $worldStore = value2);
  $$unsubscribe_state = subscribe(state, (value2) => $state = value2);
  $$unsubscribe_mode = subscribe(mode, (value2) => $mode = value2);
  let timeout = void 0;
  let firstDebounce = true;
  async function computeExpr(args) {
    return await evalExpr(lastInput, args);
  }
  function debounce(cb) {
    if (firstDebounce) {
      firstDebounce = false;
      cb();
      return;
    }
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(cb, debounce_ms);
  }
  function debounce2(cb) {
    if (firstDebounce) {
      firstDebounce = false;
      cb();
      return;
    }
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(cb, 50);
  }
  const debounceTemplate = async () => {
    let nvalue = await getValue(lastInput);
    if (!deepEqual(nvalue, value)) {
      value = nvalue;
    }
  };
  let lastExprHash = void 0;
  const debounceEval = async (s) => {
    let args = s == "exprChanged" ? { file: { name: "example.png" } } : void 0;
    let nvalue = await evalExpr(lastInput, args);
    if (field) {
      editorContext?.evalPreview.update((x) => {
        x[`${id}.${field}`] = nvalue;
        return x;
      });
    }
    if (!onDemandOnly) {
      let nhash = typeof nvalue != "object" ? nvalue : sum(nvalue);
      if (lastExprHash != nhash) {
        value = nvalue;
        lastExprHash = nhash;
      }
    }
  };
  async function handleConnection() {
    if (lastInput?.type === "connected") {
      if (lastInput.connection) {
        const { path, componentId } = lastInput.connection;
        const [p] = path ? path.split(".")[0].split("[") : [void 0];
        if (p) {
          const skey = `${id}-${key}-${rowContext ? $rowContext.index : 0}-${iterContext ? $iterContext.index : 0}`;
          $worldStore?.connect({ componentId, id: p }, onValueChange, skey, previousConnectedValue);
        } else {
          console.debug("path was invalid for connection", lastInput.connection);
        }
      }
    } else if (lastInput?.type === "static" || lastInput?.type == "template") {
      value = await getValue(lastInput);
    } else if (lastInput?.type == "eval") {
      value = await evalExpr(lastInput);
    } else if (lastInput?.type == "evalv2") {
      if (onDemandOnly && exportValueFunction) {
        value = (args) => {
          return evalExpr(lastInput, args);
        };
        return;
      }
      const skey = `${id}-${key}-${rowContext ? $rowContext.index : 0}-${iterContext ? $iterContext.index : 0}`;
      const input2 = lastInput;
      for (const c of input2.connections ?? []) {
        const previousValueKey = `${c.componentId}-${c.id}`;
        $worldStore?.connect(c, onEvalChange(previousValueKey), skey, previousConnectedValues[previousValueKey]);
      }
    } else if (lastInput?.type == "templatev2") {
      const input2 = lastInput;
      const skey = `${id}-${key}-${rowContext ? $rowContext.index : 0}-${iterContext ? $iterContext.index : 0}`;
      for (const c of input2.connections ?? []) {
        const previousValueKey = `${c.componentId}-${c.id}`;
        $worldStore?.connect(c, onTemplateChange(previousValueKey), skey, previousConnectedValues[previousValueKey]);
      }
    } else if (lastInput?.type == "upload") {
      value = lastInput.value;
    } else {
      value = void 0;
    }
    await tick();
    dispatch("done");
  }
  function onEvalChange(previousValueKey) {
    return (newValue) => {
      previousConnectedValues[previousValueKey] = newValue;
      debounceEval();
    };
  }
  function onTemplateChange(previousValueKey) {
    return (newValue) => {
      previousConnectedValues[previousValueKey] = newValue;
      debounceTemplate();
    };
  }
  async function evalExpr(input2, args) {
    if (iterContext && $iterContext.disabled) return;
    try {
      const context = computeGlobalContext($worldStore, deepMergeWithPriority(fullContext, args ?? {}));
      const r = await eval_like(input2.expr, context, $state, $mode == "dnd", $componentControl, $worldStore, $runnableComponents, false);
      error = "";
      return r;
    } catch (e) {
      error = e.message;
      console.warn("Eval error in app input '" + id + "' with key '" + key + "'", e);
      return value;
    }
  }
  async function getValue(input2) {
    if (iterContext && $iterContext.disabled) return;
    if (!input2) return;
    if ((input2.type === "template" || input2.type == "templatev2") && isCodeInjection(input2.eval)) {
      try {
        const r = await eval_like("`" + input2.eval + "`", computeGlobalContext($worldStore, fullContext), $state, $mode == "dnd", $componentControl, $worldStore, $runnableComponents, false);
        error = "";
        return r;
      } catch (e) {
        console.warn("Eval error in app input '" + id + "' with key '" + key + "'", e);
        return e.message;
      }
    } else if (input2.type === "static") {
      return input2.value;
    } else if (input2.type === "template" || input2.type == "templatev2") {
      return input2.eval;
    }
  }
  function onValueChange(newValue) {
    if (iterContext && $iterContext.disabled) return;
    if (lastInput?.type === "connected" && newValue !== void 0 && newValue !== null) {
      const { connection } = lastInput;
      if (!connection) {
        return;
      }
      previousConnectedValue = newValue;
      let { path } = connection;
      path = path.replace(/\[(\d+)\]/g, ".$1").replace(/\[\"(.*)\"\]/g, ".$1");
      let splitPoint = path.indexOf(".");
      if (splitPoint != -1) {
        const realPath = path.substring(splitPoint + 1);
        value = accessPropertyByPath(newValue, realPath);
      } else {
        value = newValue;
      }
    }
  }
  if ($$props.input === void 0 && $$bindings.input && input !== void 0) $$bindings.input(input);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0) $$bindings.key(key);
  if ($$props.field === void 0 && $$bindings.field && field !== void 0) $$bindings.field(field);
  if ($$props.onDemandOnly === void 0 && $$bindings.onDemandOnly && onDemandOnly !== void 0) $$bindings.onDemandOnly(onDemandOnly);
  if ($$props.exportValueFunction === void 0 && $$bindings.exportValueFunction && exportValueFunction !== void 0) $$bindings.exportValueFunction(exportValueFunction);
  if ($$props.computeExpr === void 0 && $$bindings.computeExpr && computeExpr !== void 0) $$bindings.computeExpr(computeExpr);
  fullContext = {
    iter: iterContext ? $iterContext : void 0,
    row: rowContext ? $rowContext : void 0,
    group: groupContext ? $groupContext : void 0
  };
  {
    if (input && !deepEqualWithOrderedArray(input, lastInput)) {
      lastInput = JSON.parse(JSON.stringify(input));
      if (lastInput && input?.["value"] instanceof ArrayBuffer) {
        lastInput.value = input?.["value"];
      }
    }
  }
  lastInput?.type == "evalv2" && !onDemandOnly && (fullContext.iter != void 0 || fullContext.row != void 0 || fullContext.group != void 0) && lastInput.connections?.some((x) => x.componentId == "row" || x.componentId == "iter" || x.componentId == "group") && debounceEval();
  lastInput && lastInput.type == "templatev2" && isCodeInjection(lastInput.eval) && (fullContext.iter != void 0 || fullContext.row != void 0 || fullContext.group != void 0) && lastInput.connections?.some((x) => x.componentId == "row" || x.componentId == "iter" || x.componentId == "group") && debounceTemplate();
  $$subscribe_stateId(stateId = $worldStore?.stateId);
  lastInput && $worldStore && debounce(handleConnection);
  lastInput && lastInput.type == "template" && isCodeInjection(lastInput.eval) && $stateId && $state && debounce(debounceTemplate);
  lastInput && lastInput.type == "eval" && $stateId && $state && debounce2(debounceEval);
  lastInput?.type == "evalv2" && lastInput.expr && debounceEval("exprChanged");
  lastInput?.type == "templatev2" && lastInput.eval && debounceTemplate();
  $$unsubscribe_iterContext();
  $$unsubscribe_runnableComponents();
  $$unsubscribe_worldStore();
  $$unsubscribe_componentControl();
  $$unsubscribe_mode();
  $$unsubscribe_state();
  $$unsubscribe_rowContext();
  $$unsubscribe_stateId();
  $$unsubscribe_groupContext();
  return ``;
});
const ResolveConfig = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { extraKey = "" } = $$props;
  let { key } = $$props;
  let { resolvedConfig } = $$props;
  let { configuration } = $$props;
  let { initialConfig = void 0 } = $$props;
  function handleSelected(selected2) {
    if (resolvedConfig?.selected != void 0 && resolvedConfig?.selected != selected2) {
      resolvedConfig.selected = selected2;
    }
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.extraKey === void 0 && $$bindings.extraKey && extraKey !== void 0) $$bindings.extraKey(extraKey);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0) $$bindings.key(key);
  if ($$props.resolvedConfig === void 0 && $$bindings.resolvedConfig && resolvedConfig !== void 0) $$bindings.resolvedConfig(resolvedConfig);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.initialConfig === void 0 && $$bindings.initialConfig && initialConfig !== void 0) $$bindings.initialConfig(initialConfig);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    configuration?.type == "oneOf" && handleSelected(configuration.selected);
    $$rendered = `${configuration?.type == "oneOf" && resolvedConfig?.type == "oneOf" ? (() => {
      let choice = resolvedConfig.selected;
      return ` ${each(Object.keys(configuration.configuration?.[choice] ?? {}), (nestedKey) => {
        return `${resolvedConfig.configuration?.[choice] != void 0 ? `${validate_component(InputValue, "InputValue").$$render(
          $$result,
          {
            field: nestedKey,
            key: key + choice + nestedKey + extraKey,
            id,
            input: configuration?.configuration?.[choice]?.[nestedKey],
            onDemandOnly: initialConfig?.type == "oneOf" && initialConfig?.configuration?.[choice]?.[nestedKey]?.onDemandOnly,
            exportValueFunction: true,
            value: resolvedConfig.configuration[choice][nestedKey]
          },
          {
            value: ($$value) => {
              resolvedConfig.configuration[choice][nestedKey] = $$value;
              $$settled = false;
            }
          },
          {}
        )}` : ``}`;
      })}`;
    })() : `${validate_component(InputValue, "InputValue").$$render(
      $$result,
      {
        field: key,
        key: key + extraKey,
        id,
        input: configuration,
        onDemandOnly: (initialConfig?.type == "static" || initialConfig?.type == "evalv2") && initialConfig?.onDemandOnly,
        exportValueFunction: true,
        value: resolvedConfig
      },
      {
        value: ($$value) => {
          resolvedConfig = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}`;
  } while (!$$settled);
  return $$rendered;
});
const ResolveStyle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { css: css2 } = $$props;
  let { id } = $$props;
  let { key } = $$props;
  let { extraKey = "" } = $$props;
  let { customCss = void 0 } = $$props;
  let { componentStyle = void 0 } = $$props;
  let evalClassValue = void 0;
  let evalClassValueGlobal = void 0;
  function updateCss(componentStyle2, customCss2, evalClassValue2, evalClassValueGlobal2) {
    const { class: componentClass, style: componentStyleValue } = componentStyle2?.[key] ?? {};
    const { class: customClass, style: customStyleValue } = customCss2?.[key] ?? {};
    const newCss = {
      class: [componentClass, customClass, evalClassValue2 ?? evalClassValueGlobal2].filter(Boolean).join(" "),
      style: [componentStyleValue, customStyleValue].filter(Boolean).join(";")
    };
    if (!deepEqual(newCss, css2)) {
      css2 = newCss;
    }
  }
  if ($$props.css === void 0 && $$bindings.css && css2 !== void 0) $$bindings.css(css2);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0) $$bindings.key(key);
  if ($$props.extraKey === void 0 && $$bindings.extraKey && extraKey !== void 0) $$bindings.extraKey(extraKey);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.componentStyle === void 0 && $$bindings.componentStyle && componentStyle !== void 0) $$bindings.componentStyle(componentStyle);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (customCss?.[key]?.evalClass === void 0 && evalClassValue !== void 0) {
        evalClassValue = void 0;
      }
    }
    {
      if (componentStyle?.[key]?.evalClass === void 0 && evalClassValueGlobal !== void 0) {
        evalClassValueGlobal = void 0;
      }
    }
    {
      updateCss(componentStyle, customCss, evalClassValue, evalClassValueGlobal);
    }
    $$rendered = `${customCss ? (() => {
      let property = customCss[key];
      return ` ${property?.evalClass ? `${validate_component(InputValue, "InputValue").$$render(
        $$result,
        {
          field: key,
          key: key + extraKey + "css",
          id,
          input: property.evalClass,
          value: evalClassValue
        },
        {
          value: ($$value) => {
            evalClassValue = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : ``}`;
    })() : ``} ${componentStyle ? (() => {
      let property = componentStyle[key];
      return ` ${property?.evalClass ? `${validate_component(InputValue, "InputValue").$$render(
        $$result,
        {
          field: key,
          key: key + extraKey + "cssGlobal",
          id,
          input: property.evalClass,
          value: evalClassValueGlobal
        },
        {
          value: ($$value) => {
            evalClassValueGlobal = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : ``}`;
    })() : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const AppMultiSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $componentControl, $$unsubscribe_componentControl;
  let $worldStore, $$unsubscribe_worldStore;
  let $$unsubscribe_selectedComponent;
  let { id } = $$props;
  let { configuration } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  let { verticalAlignment = void 0 } = $$props;
  createFloatingActions({
    strategy: "absolute",
    middleware: [offset(5), flip(), shift()]
  });
  const { app, worldStore, selectedComponent, componentControl } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value2) => $app = value2);
  $$unsubscribe_worldStore = subscribe(worldStore, (value2) => $worldStore = value2);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value2) => value2);
  $$unsubscribe_componentControl = subscribe(componentControl, (value2) => $componentControl = value2);
  let items;
  const resolvedConfig = initConfig(components["multiselectcomponent"].initialData.configuration, configuration);
  const outputs = initOutput($worldStore, id, { result: [] });
  let value = [...new Set(outputs?.result.peak())];
  set_store_value(
    componentControl,
    $componentControl[id] = {
      setValue(nvalue) {
        value = [...new Set(nvalue)];
        outputs?.result.set([...value ?? []]);
      }
    },
    $componentControl
  );
  function handleItems() {
    if (Array.isArray(resolvedConfig.items)) {
      items = resolvedConfig.items?.map((label) => {
        return typeof label === "string" ? label : `NOT_STRING`;
      });
    }
  }
  function handleDefaultItems() {
    if (Array.isArray(resolvedConfig.defaultItems)) {
      const nvalue = resolvedConfig.defaultItems?.map((label) => {
        return typeof label === "string" ? label : `NOT_STRING`;
      });
      value = [...new Set(nvalue)];
      outputs?.result.set([...value ?? []]);
    }
  }
  let css2 = initCss($app.css?.multiselectcomponent, customCss);
  function setOuterDivStyle(outerDiv2, portalRef2, style) {
    outerDiv2.setAttribute("style", style);
    const ul = portalRef2.querySelector("ul");
    ul?.setAttribute("style", extractCustomProperties(style));
  }
  let outerDiv = void 0;
  let portalRef = void 0;
  function moveOptionsToPortal() {
    outerDiv?.querySelector(".options");
  }
  let w = 0;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.verticalAlignment === void 0 && $$bindings.verticalAlignment && verticalAlignment !== void 0) $$bindings.verticalAlignment(verticalAlignment);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    resolvedConfig.items && handleItems();
    resolvedConfig.defaultItems && handleDefaultItems();
    outerDiv && portalRef && css2?.multiselect?.style && setOuterDivStyle(outerDiv, portalRef, css2?.multiselect?.style);
    {
      if (render && portalRef && outerDiv && items?.length > 0) {
        tick().then(() => {
          moveOptionsToPortal();
        });
      }
    }
    $$rendered = `${each(Object.keys(components["multiselectcomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.multiselectcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${validate_component(AlignWrapper, "AlignWrapper").$$render($$result, { render, hFull: true, verticalAlignment }, {}, {
      default: () => {
        return `<div class="w-full app-editor-input">${!value || Array.isArray(value) ? `<div style="display: contents; --sms-border:${escape("none", true)}; --sms-min-height:${escape("32px", true)}; --sms-focus-border:${escape("none", true)};">${validate_component(MultiSelect, "MultiSelect").$$render(
          $$result,
          {
            outerDivClass: `${resolvedConfig.allowOverflow ? "" : "h-full"}`,
            ulSelectedClass: `${resolvedConfig.allowOverflow ? "" : "overflow-auto max-h-full"} `,
            ulOptionsClass: "p-2 !bg-surface-secondary",
            options: Array.isArray(items) ? items : [],
            placeholder: resolvedConfig.placeholder,
            allowUserOptions: resolvedConfig.create,
            outerDiv,
            selected: value
          },
          {
            outerDiv: ($$value) => {
              outerDiv = $$value;
              $$settled = false;
            },
            selected: ($$value) => {
              value = $$value;
              $$settled = false;
            }
          },
          {
            default: ({ option }) => {
              return `  <div class="w-full">${escape(option)}</div>`;
            }
          }
        )}</div> ${validate_component(Portal, "Portal").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="z5000" ${"hidden"}>  <div class="multiselect"${add_attribute("style", `min-width: ${w}px;`, 0)}${add_attribute("this", portalRef, 0)}></div></div>`;
          }
        })}` : `Value ${escape(value)} is not an array`}</div>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_componentControl();
  $$unsubscribe_worldStore();
  $$unsubscribe_selectedComponent();
  return $$rendered;
});
const AppMultiSelectV2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $componentControl, $$unsubscribe_componentControl;
  let $worldStore, $$unsubscribe_worldStore;
  let $$unsubscribe_selectedComponent;
  let { id } = $$props;
  let { configuration } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  let { verticalAlignment = void 0 } = $$props;
  createFloatingActions({
    strategy: "absolute",
    middleware: [offset(5), flip(), shift()]
  });
  const { app, worldStore, selectedComponent, componentControl } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value2) => $app = value2);
  $$unsubscribe_worldStore = subscribe(worldStore, (value2) => $worldStore = value2);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value2) => value2);
  $$unsubscribe_componentControl = subscribe(componentControl, (value2) => $componentControl = value2);
  let items;
  const resolvedConfig = initConfig(components["multiselectcomponent"].initialData.configuration, configuration);
  const outputs = initOutput($worldStore, id, { result: [] });
  let value = [...new Set(outputs?.result.peak())];
  set_store_value(
    componentControl,
    $componentControl[id] = {
      setValue(nvalue) {
        value = [...new Set(nvalue)];
        outputs?.result.set([...value ?? []]);
      }
    },
    $componentControl
  );
  function handleItems() {
    if (Array.isArray(resolvedConfig.items)) {
      items = resolvedConfig.items?.map((label) => {
        return typeof label === "string" ? label : `NOT_STRING`;
      });
    }
  }
  function handleDefaultItems() {
    if (Array.isArray(resolvedConfig.defaultItems)) {
      const nvalue = resolvedConfig.defaultItems?.map((label) => {
        return typeof label === "string" ? label : `NOT_STRING`;
      });
      value = [...new Set(nvalue)];
      outputs?.result.set([...value ?? []]);
    }
  }
  let css2 = initCss($app.css?.multiselectcomponent, customCss);
  function setOuterDivStyle(outerDiv2, portalRef2, style) {
    outerDiv2.setAttribute("style", style);
    const ul = portalRef2.querySelector("ul");
    ul?.setAttribute("style", extractCustomProperties(style));
  }
  let outerDiv = void 0;
  let portalRef = void 0;
  function moveOptionsToPortal() {
    outerDiv?.querySelector(".options");
  }
  let w = 0;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.verticalAlignment === void 0 && $$bindings.verticalAlignment && verticalAlignment !== void 0) $$bindings.verticalAlignment(verticalAlignment);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    resolvedConfig.items && handleItems();
    resolvedConfig.defaultItems && handleDefaultItems();
    outerDiv && portalRef && css2?.multiselect?.style && setOuterDivStyle(outerDiv, portalRef, css2?.multiselect?.style);
    {
      if (render && portalRef && outerDiv && items?.length > 0) {
        tick().then(() => {
          moveOptionsToPortal();
        });
      }
    }
    $$rendered = `${each(Object.keys(components["multiselectcomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.multiselectcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${validate_component(AlignWrapper, "AlignWrapper").$$render($$result, { render, hFull: true, verticalAlignment }, {}, {
      default: () => {
        return `<div class="w-full app-editor-input">${!value || Array.isArray(value) ? `<div style="display: contents; --sms-border:${escape("none", true)}; --sms-min-height:${escape("32px", true)}; --sms-focus-border:${escape("none", true)};">${validate_component(MultiSelect$1, "MultiSelect").$$render(
          $$result,
          {
            outerDivClass: `${resolvedConfig.allowOverflow ? "" : "h-full"}`,
            ulSelectedClass: `${resolvedConfig.allowOverflow ? "" : "overflow-auto max-h-full"} `,
            options: items,
            placeholder: resolvedConfig.placeholder,
            allowUserOptions: resolvedConfig.create,
            outerDiv,
            selected: value
          },
          {
            outerDiv: ($$value) => {
              outerDiv = $$value;
              $$settled = false;
            },
            selected: ($$value) => {
              value = $$value;
              $$settled = false;
            }
          },
          {
            default: ({ option }) => {
              return `  <div class="w-full">${escape(option)}</div>`;
            }
          }
        )}</div> ${validate_component(Portal, "Portal").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="z5000" ${"hidden"}>  <div class="multiselect"${add_attribute("style", `min-width: ${w}px;`, 0)}${add_attribute("this", portalRef, 0)}></div></div>`;
          }
        })}` : `Value ${escape(value)} is not an array`}</div>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_componentControl();
  $$unsubscribe_worldStore();
  $$unsubscribe_selectedComponent();
  return $$rendered;
});
const css$8 = {
  code: '.svlt-grid-item.svelte-891l5e{backface-visibility:hidden;-webkit-backface-visibility:hidden;position:absolute;touch-action:none;will-change:auto}.svlt-grid-resizer-bottom.svelte-891l5e{bottom:0;cursor:s-resize;height:4px;width:100%}.svlt-grid-resizer-bottom.svelte-891l5e,.svlt-grid-resizer-side.svelte-891l5e{position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none}.svlt-grid-resizer-side.svelte-891l5e{cursor:e-resize;height:100%;right:0;top:0;width:4px}.svlt-grid-resizer.svelte-891l5e{bottom:0;cursor:se-resize;height:20px;position:absolute;right:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:20px}.svlt-grid-resizer.svelte-891l5e:after{border-bottom:2px solid rgba(0,0,0,.4);border-right:2px solid rgba(0,0,0,.4);bottom:3px;content:"";height:5px;position:absolute;right:3px;width:5px}.svlt-grid-active.svelte-891l5e{backface-visibility:hidden;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-o-backface-visibility:hidden;-ms-backface-visibility:hidden;cursor:grabbing;opacity:.5;position:fixed;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:300}.shadow-active.svelte-891l5e{transition:all .2s;z-index:2}.svlt-grid-shadow.svelte-891l5e{backface-visibility:hidden;-webkit-backface-visibility:hidden;background:red;background:pink;position:absolute;will-change:transform}',
  map: null
};
const MoveResize = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $scale, $$unsubscribe_scale;
  let $$unsubscribe_mode;
  createEventDispatcher();
  let { sensor } = $$props;
  let { width } = $$props;
  let { height } = $$props;
  let { left } = $$props;
  let { top } = $$props;
  let { id } = $$props;
  let { container } = $$props;
  let { xPerPx } = $$props;
  let { yPerPx } = $$props;
  let { gapX } = $$props;
  let { gapY } = $$props;
  let { item } = $$props;
  let { cols } = $$props;
  let { nativeContainer } = $$props;
  let { onTop } = $$props;
  let { shadow = void 0 } = $$props;
  const ctx = getContext("AppEditorContext");
  const { mode } = getContext("AppViewerContext");
  $$unsubscribe_mode = subscribe(mode, (value) => value);
  const scale = ctx ? ctx.scale : writable(100);
  $$unsubscribe_scale = subscribe(scale, (value) => $scale = value);
  const divId = `component-${id}`;
  let shadowElement;
  let active = false;
  let capturePos = { x: 0, y: 0 };
  let cordDiff = { x: 0, y: 0 };
  let newSize = { width, height };
  let trans = false;
  function inActivate() {
  }
  let _scrollTop = 0;
  let containerFrame;
  let rect;
  let scrollElement;
  const getContainerFrame = (element) => {
    if (element === document.documentElement || !element) {
      const { top: top2, bottom } = nativeContainer.getBoundingClientRect();
      return {
        top: Math.max(0, top2),
        bottom: Math.min(window.innerHeight, bottom)
      };
    }
    return element.getBoundingClientRect();
  };
  const getScroller = (element) => !element ? document.documentElement : element;
  function computeRect() {
    let gridItem = document.getElementById(divId);
    if (!gridItem) return;
    let subgrid = gridItem.closest(".subgrid");
    let irect = gridItem.getBoundingClientRect();
    if (subgrid && subgrid.parentElement) {
      let prect = subgrid.getBoundingClientRect();
      const factor = $scale / 100;
      rect = {
        top: (irect.top - prect.top) / factor,
        left: (irect.left - prect.left) / factor
      };
    } else {
      rect = irect;
    }
  }
  function initmove() {
    computeRect();
    newSize = { width, height };
    capturePos = { x: left, y: top };
    shadow = {
      x: item.x,
      y: item.y,
      w: item.w,
      h: item.h
    };
    cordDiff = { x: 0, y: 0 };
    active = true;
    trans = false;
    containerFrame = getContainerFrame(container);
    scrollElement = getScroller(container);
    _scrollTop = scrollElement.scrollTop;
  }
  let sign = { x: 0, y: 0 };
  let vel = { x: 0, y: 0 };
  let intervalId = void 0;
  const stopAutoscroll = () => {
    intervalId && clearInterval(intervalId);
    intervalId = void 0;
    sign = { x: 0, y: 0 };
    vel = { x: 0, y: 0 };
  };
  const update = () => {
    if (xPerPx != 0) {
      const boundX = capturePos.x + cordDiff.x;
      const _newScrollTop = (scrollElement?.scrollTop ?? 0) - (_scrollTop ?? 0);
      const boundY = capturePos.y + (cordDiff.y + _newScrollTop);
      let gridX = Math.round(boundX / xPerPx);
      let gridY = Math.round(boundY / yPerPx);
      if (shadow) {
        shadow.x = Math.max(Math.min(gridX, cols - shadow.w), 0);
        shadow.y = Math.max(gridY, 0);
      }
    }
  };
  function updateMove(newCoordDiff, clientY) {
    if (!active) {
      active = true;
    }
    if (trans) {
      trans = false;
    }
    cordDiff = newCoordDiff;
    const Y_SENSOR = sensor;
    if (containerFrame) {
      let velocityTop = Math.max(0, (containerFrame.top + Y_SENSOR - clientY) / Y_SENSOR);
      let velocityBottom = Math.max(0, (clientY - (containerFrame.bottom - Y_SENSOR)) / Y_SENSOR);
      const topSensor = velocityTop > 0 && velocityBottom === 0;
      const bottomSensor = velocityBottom > 0 && velocityTop === 0;
      sign.y = topSensor ? -1 : bottomSensor ? 1 : 0;
      vel.y = sign.y === -1 ? velocityTop : velocityBottom;
      if (vel.y > 0) {
        if (!intervalId) {
          intervalId = setInterval(
            () => {
              scrollElement.scrollTop += 2 * (vel.y + Math.sign(vel.y)) * sign.y;
              update();
            },
            10
          );
        }
      } else if (intervalId) {
        stopAutoscroll();
      } else {
        update();
      }
    } else {
      update();
    }
  }
  if ($$props.sensor === void 0 && $$bindings.sensor && sensor !== void 0) $$bindings.sensor(sensor);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.left === void 0 && $$bindings.left && left !== void 0) $$bindings.left(left);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0) $$bindings.top(top);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.container === void 0 && $$bindings.container && container !== void 0) $$bindings.container(container);
  if ($$props.xPerPx === void 0 && $$bindings.xPerPx && xPerPx !== void 0) $$bindings.xPerPx(xPerPx);
  if ($$props.yPerPx === void 0 && $$bindings.yPerPx && yPerPx !== void 0) $$bindings.yPerPx(yPerPx);
  if ($$props.gapX === void 0 && $$bindings.gapX && gapX !== void 0) $$bindings.gapX(gapX);
  if ($$props.gapY === void 0 && $$bindings.gapY && gapY !== void 0) $$bindings.gapY(gapY);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0) $$bindings.item(item);
  if ($$props.cols === void 0 && $$bindings.cols && cols !== void 0) $$bindings.cols(cols);
  if ($$props.nativeContainer === void 0 && $$bindings.nativeContainer && nativeContainer !== void 0) $$bindings.nativeContainer(nativeContainer);
  if ($$props.onTop === void 0 && $$bindings.onTop && onTop !== void 0) $$bindings.onTop(onTop);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0) $$bindings.shadow(shadow);
  if ($$props.inActivate === void 0 && $$bindings.inActivate && inActivate !== void 0) $$bindings.inActivate(inActivate);
  if ($$props.initmove === void 0 && $$bindings.initmove && initmove !== void 0) $$bindings.initmove(initmove);
  if ($$props.updateMove === void 0 && $$bindings.updateMove && updateMove !== void 0) $$bindings.updateMove(updateMove);
  $$result.css.add(css$8);
  $$unsubscribe_scale();
  $$unsubscribe_mode();
  return ` <div draggable="false"${add_attribute("id", divId, 0)} class="${[
    "svlt-grid-item svelte-891l5e",
    active || trans && rect ? "svlt-grid-active" : ""
  ].join(" ").trim()}" style="${"width: " + escape(xPerPx == 0 ? 0 : active ? newSize.width : width, true) + "px; height:" + escape(xPerPx == 0 ? 0 : active ? newSize.height : height, true) + "px; " + escape(xPerPx == 0 ? "overflow: hidden;" : "", true) + " " + escape(onTop ? "z-index: 1000;" : "", true) + " " + escape(
    active && rect ? `transform: translate(${cordDiff.x}px, ${cordDiff.y}px);top:${rect.top}px;left:${rect.left}px;z-index:10000;` : trans ? `transform: translate(${cordDiff.x}px, ${cordDiff.y}px); position:absolute; transition: width 0.2s, height 0.2s;` : `${xPerPx > 0 ? "transition: transform 0.1s, opacity 0.1s;" : ""} transform: translate(${left}px, ${top}px); `,
    true
  )}">${slots.default ? slots.default({}) : ``} <div class="svlt-grid-resizer-bottom svelte-891l5e"></div> <div class="svlt-grid-resizer-side svelte-891l5e"></div> <div class="svlt-grid-resizer svelte-891l5e"></div></div> ${xPerPx > 0 && (active || trans) && shadow ? `<div class="svlt-grid-shadow shadow-active svelte-891l5e" style="${"width: " + escape(shadow.w * xPerPx - gapX * 2, true) + "px; height: " + escape(shadow.h * yPerPx - gapY * 2, true) + "px; transform: translate(" + escape(shadow.x * xPerPx + gapX, true) + "px, " + escape(shadow.y * yPerPx + gapY, true) + "px);"}"${add_attribute("this", shadowElement, 0)}></div>` : ``}`;
});
const css$7 = {
  code: ".svlt-grid-container.svelte-c4r63m{position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}",
  map: null
};
const Grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let gapX;
  let gapY;
  let containerHeight;
  const dispatch = createEventDispatcher();
  let { items } = $$props;
  let { rowHeight = ROW_HEIGHT } = $$props;
  let { cols } = $$props;
  let { gap = [ROW_GAP_X, ROW_GAP_Y] } = $$props;
  let { throttleUpdate = 100 } = $$props;
  let { throttleResize = 100 } = $$props;
  let { selectedIds } = $$props;
  let { allIdsInPath } = $$props;
  let { containerWidth = void 0 } = $$props;
  let { scroller = void 0 } = $$props;
  let { sensor = 20 } = $$props;
  let { parentWidth = void 0 } = $$props;
  let getComputedCols;
  let container;
  let xPerPx = 0;
  let yPerPx = rowHeight;
  throttle(
    () => {
      items = specifyUndefinedColumns(items, getComputedCols, cols);
      dispatch("resize", {
        cols: getComputedCols,
        xPerPx,
        yPerPx,
        width: containerWidth
      });
    },
    throttleUpdate
  );
  let sortedItems = [];
  let initItems = void 0;
  const updateMatrix = ({ detail }) => {
    let isPointerUp = detail.isPointerUp;
    let citems;
    if (isPointerUp) {
      try {
        citems = JSON.parse(JSON.stringify(initItems));
      } catch (e) {
        citems = JSON.parse(JSON.stringify(sortedItems));
      }
      initItems = void 0;
    } else {
      if (initItems == void 0) {
        initItems = JSON.parse(JSON.stringify(sortedItems));
      }
      citems = JSON.parse(JSON.stringify(initItems));
    }
    let nselectedIds = selectedIds ?? [];
    if (detail.id && !selectedIds?.includes(detail.id)) {
      nselectedIds = [detail.id, ...selectedIds ?? []];
    }
    sortedItems = citems;
    for (let id of nselectedIds) {
      let activeItem = getItemById(id, sortedItems);
      if (activeItem) {
        activeItem = {
          ...activeItem,
          [getComputedCols]: {
            ...activeItem[getComputedCols],
            ...shadows[id]
          }
        };
        sortedItems = moveItem(activeItem, sortedItems, getComputedCols);
      }
    }
    for (let id of nselectedIds ?? []) {
      if (detail.activate) {
        moveResizes?.[id]?.inActivate();
      }
    }
    if (isPointerUp) {
      dispatch("redraw", sortGridItemsPosition(JSON.parse(JSON.stringify(sortedItems)), getComputedCols));
    }
  };
  const throttleMatrix = throttle(updateMatrix, throttleResize);
  let moveResizes = {};
  let shadows = {};
  function handleMove({ detail }) {
    Object.entries(moveResizes).forEach(([id, moveResize]) => {
      if (selectedIds?.includes(id)) {
        moveResize?.updateMove(JSON.parse(JSON.stringify(detail.cordDiff)), detail.eventY);
      }
    });
    throttleMatrix({
      detail: { isPointerUp: false, activate: false }
    });
  }
  function handleInitMove({ detail }) {
    Object.entries(moveResizes).forEach(([id, moveResize]) => {
      if (selectedIds?.includes(id)) {
        moveResize?.initmove();
      }
    });
  }
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  if ($$props.rowHeight === void 0 && $$bindings.rowHeight && rowHeight !== void 0) $$bindings.rowHeight(rowHeight);
  if ($$props.cols === void 0 && $$bindings.cols && cols !== void 0) $$bindings.cols(cols);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0) $$bindings.gap(gap);
  if ($$props.throttleUpdate === void 0 && $$bindings.throttleUpdate && throttleUpdate !== void 0) $$bindings.throttleUpdate(throttleUpdate);
  if ($$props.throttleResize === void 0 && $$bindings.throttleResize && throttleResize !== void 0) $$bindings.throttleResize(throttleResize);
  if ($$props.selectedIds === void 0 && $$bindings.selectedIds && selectedIds !== void 0) $$bindings.selectedIds(selectedIds);
  if ($$props.allIdsInPath === void 0 && $$bindings.allIdsInPath && allIdsInPath !== void 0) $$bindings.allIdsInPath(allIdsInPath);
  if ($$props.containerWidth === void 0 && $$bindings.containerWidth && containerWidth !== void 0) $$bindings.containerWidth(containerWidth);
  if ($$props.scroller === void 0 && $$bindings.scroller && scroller !== void 0) $$bindings.scroller(scroller);
  if ($$props.sensor === void 0 && $$bindings.sensor && sensor !== void 0) $$bindings.sensor(sensor);
  if ($$props.parentWidth === void 0 && $$bindings.parentWidth && parentWidth !== void 0) $$bindings.parentWidth(parentWidth);
  if ($$props.handleMove === void 0 && $$bindings.handleMove && handleMove !== void 0) $$bindings.handleMove(handleMove);
  if ($$props.handleInitMove === void 0 && $$bindings.handleInitMove && handleInitMove !== void 0) $$bindings.handleInitMove(handleInitMove);
  $$result.css.add(css$7);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    [gapX, gapY] = gap;
    containerHeight = getContainerHeight(items, yPerPx, getComputedCols);
    sortedItems = JSON.parse(JSON.stringify(items)).sort((a, b) => a.id.localeCompare(b.id));
    $$rendered = `<div class="svlt-grid-container svelte-c4r63m" style="${"height: " + escape(containerHeight, true) + "px"}"${add_attribute("this", container, 0)}>${each(sortedItems, (item) => {
      return `${item[getComputedCols] != void 0 ? `${validate_component(MoveResize, "MoveResize").$$render(
        $$result,
        {
          onTop: Boolean(allIdsInPath?.includes(item.id)),
          id: item.id,
          xPerPx,
          yPerPx,
          width: 0,
          height: (item[getComputedCols] && item[getComputedCols].h) * yPerPx - gapY * 2,
          top: (item[getComputedCols] && item[getComputedCols].y) * yPerPx + gapY,
          left: (item[getComputedCols] && item[getComputedCols].x) * xPerPx + gapX,
          item: item[getComputedCols],
          cols: getComputedCols,
          gapX,
          gapY,
          sensor,
          container: scroller,
          nativeContainer: container,
          shadow: shadows[item.id],
          this: moveResizes[item.id]
        },
        {
          shadow: ($$value) => {
            shadows[item.id] = $$value;
            $$settled = false;
          },
          this: ($$value) => {
            moveResizes[item.id] = $$value;
            $$settled = false;
          }
        },
        {
          default: () => {
            return `${item[getComputedCols] ? `${slots.default ? slots.default({ dataItem: item, hidden: false }) : ``}` : ``} `;
          }
        }
      )}` : ``}`;
    })} </div>`;
  } while (!$$settled);
  return $$rendered;
});
const ComponentWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_manuallyOpened;
  let $$unsubscribe_app;
  let $$unsubscribe_connectingInput;
  let { id } = $$props;
  let { type } = $$props;
  const { app, connectingInput, selectedComponent } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => value);
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => value);
  const { manuallyOpened } = getContext("ContextPanel");
  $$unsubscribe_manuallyOpened = subscribe(manuallyOpened, (value) => value);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  $$unsubscribe_manuallyOpened();
  $$unsubscribe_app();
  $$unsubscribe_connectingInput();
  return `   <div${add_attribute("class", $$props.class, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const ITEM_TYPE = "wm-grid-items";
const ComponentCallbacks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $selectedComponent, $$unsubscribe_selectedComponent;
  let $focusedGrid, $$unsubscribe_focusedGrid;
  let $movingcomponents, $$unsubscribe_movingcomponents;
  let $jobsDrawerOpen, $$unsubscribe_jobsDrawerOpen;
  let $componentControl, $$unsubscribe_componentControl;
  const { app, selectedComponent, focusedGrid, componentControl } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => $selectedComponent = value);
  $$unsubscribe_focusedGrid = subscribe(focusedGrid, (value) => $focusedGrid = value);
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => $componentControl = value);
  const { history, movingcomponents, jobsDrawerOpen } = getContext("AppEditorContext");
  $$unsubscribe_movingcomponents = subscribe(movingcomponents, (value) => $movingcomponents = value);
  $$unsubscribe_jobsDrawerOpen = subscribe(jobsDrawerOpen, (value) => $jobsDrawerOpen = value);
  let tempGridItems = void 0;
  function getSortedGridItemsOfChildren() {
    if (!$focusedGrid) {
      return $app.grid;
    }
    if (!$app.subgrids) {
      return [];
    }
    return $app.subgrids[`${$focusedGrid.parentComponentId}-${$focusedGrid.subGridIndex}`] ?? [];
  }
  function getGridItems() {
    if ($app.grid.find((item) => item.id === $selectedComponent?.[0])) {
      return $app.grid;
    }
    if (!$app.subgrids) {
      return [];
    }
    return Object.values($app.subgrids ?? {}).find((grid) => grid.find((item) => item.id === $selectedComponent?.[0])) ?? [];
  }
  function left(event) {
    if (!$componentControl[$selectedComponent?.[0] ?? ""]?.left?.()) {
      const sortedGridItems = getGridItems();
      const currentIndex = sortedGridItems.findIndex((item) => item.id === $selectedComponent?.[0]);
      if (currentIndex !== -1 && currentIndex > 0) {
        const left2 = sortedGridItems[currentIndex - 1];
        if (left2.data.type === "tablecomponent" && left2.data.actionButtons.length >= 1) {
          set_store_value(selectedComponent, $selectedComponent = [left2.data.actionButtons[left2.data.actionButtons.length - 1].id], $selectedComponent);
        } else if ((left2.data.type === "aggridcomponent" || left2.data.type === "aggridcomponentee" || left2.data.type === "dbexplorercomponent") && Array.isArray(left2.data.actions) && left2.data.actions.length >= 1) {
          set_store_value(selectedComponent, $selectedComponent = [left2.data.actions[left2.data.actions.length - 1].id], $selectedComponent);
        } else {
          set_store_value(selectedComponent, $selectedComponent = [left2.id], $selectedComponent);
        }
      }
    }
    event.preventDefault();
  }
  function right(event) {
    let r = $componentControl[$selectedComponent?.[0] ?? ""]?.right?.();
    if (typeof r === "string") {
      set_store_value(selectedComponent, $selectedComponent = [r], $selectedComponent);
      r = $componentControl[r]?.right?.(true);
    }
    if (!r) {
      const sortedGridItems = getGridItems();
      const currentIndex = sortedGridItems.findIndex((item) => item.id === $selectedComponent?.[0]);
      if (currentIndex !== -1 && currentIndex < sortedGridItems.length - 1) {
        set_store_value(selectedComponent, $selectedComponent = [sortedGridItems[currentIndex + 1].id], $selectedComponent);
      }
    }
    event.preventDefault();
  }
  function down(event) {
    if (!$focusedGrid) {
      set_store_value(selectedComponent, $selectedComponent = [getSortedGridItemsOfChildren()[0]?.id], $selectedComponent);
      event.preventDefault();
    } else if ($app.subgrids) {
      const index = $focusedGrid?.subGridIndex ?? 0;
      const subgrid = $app.subgrids[`${$selectedComponent}-${index}`];
      if (!subgrid || subgrid.length === 0) {
        return;
      }
      if (subgrid) {
        set_store_value(selectedComponent, $selectedComponent = [subgrid[0].id], $selectedComponent);
      }
      event.preventDefault();
    }
  }
  function handleEscape(event) {
    set_store_value(selectedComponent, $selectedComponent = void 0, $selectedComponent);
    set_store_value(focusedGrid, $focusedGrid = void 0, $focusedGrid);
    event.preventDefault();
  }
  function handleArrowUp(event) {
    if (!$selectedComponent) return;
    let parentId = findGridItemParentGrid($app, $selectedComponent?.[0])?.split("-")[0];
    if (parentId) {
      set_store_value(selectedComponent, $selectedComponent = [parentId], $selectedComponent);
    } else {
      set_store_value(selectedComponent, $selectedComponent = void 0, $selectedComponent);
      set_store_value(focusedGrid, $focusedGrid = void 0, $focusedGrid);
    }
  }
  async function handleCopy(event) {
    if (!$selectedComponent || $jobsDrawerOpen || window.getSelection()?.toString() != "") {
      return;
    }
    tempGridItems = void 0;
    const copiedGridItems = $selectedComponent.map((x) => findGridItem($app, x)).filter((x) => x != void 0);
    copyGridItemsToClipboard(copiedGridItems, "copy");
  }
  async function copyGridItemsToClipboard(items, type = void 0) {
    let allSubgrids = {};
    for (let item of items) {
      let subgrids = getAllSubgridsAndComponentIds($app, item.data)[0];
      for (let key of subgrids) {
        allSubgrids[key] = $app.subgrids?.[key];
      }
    }
    let success = await copyToClipboard(
      JSON.stringify({
        type: ITEM_TYPE,
        items,
        subgrids: allSubgrids
      }),
      false
    );
    if (!success) {
      sendUserToast("Could not copy to clipboard. Are you in an unsecure context?", true);
    } else if (type) {
      const text2 = type == "copy" ? "Copied" : "Cut";
      sendUserToast(`${text2} ${items.length} component${items.length > 1 ? "s" : ""}`);
    }
  }
  function handleCut(event) {
    if (!$selectedComponent) {
      return;
    }
    set_store_value(movingcomponents, $movingcomponents = JSON.parse(JSON.stringify($selectedComponent)), $movingcomponents);
    push(history, $app);
    let gridItems = $selectedComponent.map((x) => findGridItem($app, x)).filter((x) => x != void 0);
    copyGridItemsToClipboard(gridItems, "cut");
    if (!gridItems) {
      return;
    }
    tempGridItems = gridItems;
  }
  async function handlePaste(event) {
    let classes = event.target?.["className"];
    if (typeof classes === "string" && classes.includes("inputarea") || ["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) {
      return;
    }
    event.preventDefault();
    push(history, $app);
    set_store_value(movingcomponents, $movingcomponents = void 0, $movingcomponents);
    let copiedGridItems = void 0;
    let subgrids = $app.subgrids ?? {};
    const txt = event?.clipboardData?.getData("text");
    if (txt) {
      try {
        const parsed = JSON.parse(txt);
        if (parsed.type == ITEM_TYPE) {
          copiedGridItems = parsed.items;
          subgrids = parsed.subgrids ?? subgrids;
        } else {
          copiedGridItems = void 0;
        }
      } catch {
      }
    }
    if (tempGridItems != void 0) {
      for (let tempGridItem of tempGridItems) {
        if ($focusedGrid && getAllSubgridsAndComponentIds($app, tempGridItem.data)[0].includes(`${$focusedGrid.parentComponentId}-${$focusedGrid.subGridIndex}`)) {
          sendUserToast("Cannot paste a component into itself", true);
          return;
        }
        let parentGrid = findGridItemParentGrid($app, tempGridItem.id);
        if (parentGrid) {
          $app.subgrids && set_store_value(app, $app.subgrids[parentGrid] = $app.subgrids[parentGrid].filter((item) => item.id !== tempGridItem?.id), $app);
        } else {
          set_store_value(app, $app.grid = $app.grid.filter((item) => item.id !== tempGridItem?.id), $app);
        }
        const gridItem = tempGridItem;
        insertNewGridItem($app, (id) => ({ ...gridItem.data, id }), $focusedGrid, Object.fromEntries(gridColumns.map((column) => [column, gridItem[column]])), tempGridItem.id);
      }
      copyGridItemsToClipboard(tempGridItems);
      set_store_value(selectedComponent, $selectedComponent = tempGridItems.map((x) => x.id), $selectedComponent);
      tempGridItems = void 0;
    } else if (copiedGridItems) {
      let nitems = [];
      for (let copiedGridItem of copiedGridItems) {
        let newItem = copyComponent($app, copiedGridItem, $focusedGrid, subgrids, []);
        newItem && nitems.push(newItem);
      }
      set_store_value(selectedComponent, $selectedComponent = nitems.map((x) => x), $selectedComponent);
    }
    app.set($app);
  }
  if ($$props.left === void 0 && $$bindings.left && left !== void 0) $$bindings.left(left);
  if ($$props.right === void 0 && $$bindings.right && right !== void 0) $$bindings.right(right);
  if ($$props.down === void 0 && $$bindings.down && down !== void 0) $$bindings.down(down);
  if ($$props.handleEscape === void 0 && $$bindings.handleEscape && handleEscape !== void 0) $$bindings.handleEscape(handleEscape);
  if ($$props.handleArrowUp === void 0 && $$bindings.handleArrowUp && handleArrowUp !== void 0) $$bindings.handleArrowUp(handleArrowUp);
  if ($$props.handleCopy === void 0 && $$bindings.handleCopy && handleCopy !== void 0) $$bindings.handleCopy(handleCopy);
  if ($$props.handleCut === void 0 && $$bindings.handleCut && handleCut !== void 0) $$bindings.handleCut(handleCut);
  if ($$props.handlePaste === void 0 && $$bindings.handlePaste && handlePaste !== void 0) $$bindings.handlePaste(handlePaste);
  $$unsubscribe_app();
  $$unsubscribe_selectedComponent();
  $$unsubscribe_focusedGrid();
  $$unsubscribe_movingcomponents();
  $$unsubscribe_jobsDrawerOpen();
  $$unsubscribe_componentControl();
  return ``;
});
const DeleteComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $runnableComponents, $$unsubscribe_runnableComponents;
  let $app, $$unsubscribe_app;
  let $focusedGrid, $$unsubscribe_focusedGrid;
  let $selectedComponent, $$unsubscribe_selectedComponent;
  let $movingcomponents, $$unsubscribe_movingcomponents;
  let $errorByComponent, $$unsubscribe_errorByComponent;
  let $worldStore, $$unsubscribe_worldStore;
  let $componentControl, $$unsubscribe_componentControl;
  let { onDelete = void 0 } = $$props;
  let { noGrid = false } = $$props;
  const { app, runnableComponents, selectedComponent, worldStore, focusedGrid, errorByComponent, componentControl } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_runnableComponents = subscribe(runnableComponents, (value) => $runnableComponents = value);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => $selectedComponent = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_focusedGrid = subscribe(focusedGrid, (value) => $focusedGrid = value);
  $$unsubscribe_errorByComponent = subscribe(errorByComponent, (value) => $errorByComponent = value);
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => $componentControl = value);
  const { history, movingcomponents } = getContext("AppEditorContext");
  $$unsubscribe_movingcomponents = subscribe(movingcomponents, (value) => $movingcomponents = value);
  function removeGridElement() {
    const id = $selectedComponent?.[0];
    const componentSetting = findComponentSettings($app, id);
    push(history, $app);
    const onDeleteComponentControl = id ? $componentControl[id]?.onDelete : void 0;
    if (onDeleteComponentControl) {
      onDeleteComponentControl();
    }
    if (onDelete) {
      onDelete();
    }
    if (id) {
      delete $worldStore.outputsById[id];
      delete $errorByComponent[id];
      if ($movingcomponents?.includes(id)) {
        set_store_value(movingcomponents, $movingcomponents = $movingcomponents.filter((_id) => _id !== id), $movingcomponents);
      }
    }
    set_store_value(selectedComponent, $selectedComponent = void 0, $selectedComponent);
    set_store_value(focusedGrid, $focusedGrid = void 0, $focusedGrid);
    if (componentSetting?.item && !noGrid) {
      let ids = deleteGridItem($app, componentSetting?.item.data, componentSetting?.parent);
      for (const key of ids) {
        delete $runnableComponents[key];
      }
    }
    if (componentSetting?.item?.data?.id) {
      delete $runnableComponents[componentSetting?.item?.data?.id];
    }
    app.set($app);
    runnableComponents.set($runnableComponents);
    onDelete?.();
  }
  if ($$props.onDelete === void 0 && $$bindings.onDelete && onDelete !== void 0) $$bindings.onDelete(onDelete);
  if ($$props.noGrid === void 0 && $$bindings.noGrid && noGrid !== void 0) $$bindings.noGrid(noGrid);
  if ($$props.removeGridElement === void 0 && $$bindings.removeGridElement && removeGridElement !== void 0) $$bindings.removeGridElement(removeGridElement);
  $$unsubscribe_runnableComponents();
  $$unsubscribe_app();
  $$unsubscribe_focusedGrid();
  $$unsubscribe_selectedComponent();
  $$unsubscribe_movingcomponents();
  $$unsubscribe_errorByComponent();
  $$unsubscribe_worldStore();
  $$unsubscribe_componentControl();
  return ``;
});
const GridEditorMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $secondaryMenuLeft, $$unsubscribe_secondaryMenuLeft;
  let $selectedComponent, $$unsubscribe_selectedComponent;
  let $movingcomponents, $$unsubscribe_movingcomponents;
  $$unsubscribe_secondaryMenuLeft = subscribe(secondaryMenuLeft, (value) => $secondaryMenuLeft = value);
  let { id } = $$props;
  let componentCallbacks = void 0;
  const { selectedComponent } = getContext("AppViewerContext");
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => $selectedComponent = value);
  const { movingcomponents, stylePanel } = getContext("AppEditorContext");
  $$unsubscribe_movingcomponents = subscribe(movingcomponents, (value) => $movingcomponents = value);
  let deleteComponent = void 0;
  [
    {
      label: "Cut",
      onClick: () => {
        componentCallbacks?.handleCut(new KeyboardEvent("keydown"));
      },
      icon: Scissors,
      shortcut: `${getModifierKey()}X`,
      disabled: $movingcomponents?.includes($selectedComponent?.[0] ?? "")
    },
    {
      label: "Copy",
      onClick: () => {
        componentCallbacks?.handleCopy(new KeyboardEvent("keydown"));
      },
      icon: Copy,
      shortcut: `${getModifierKey()}C`
    },
    {
      label: "Show style panel",
      onClick: () => {
        secondaryMenuLeft?.toggle(stylePanel(), { type: "style" });
      },
      icon: Paintbrush_2,
      disabled: $secondaryMenuLeft.isOpen
    },
    {
      label: "Delete",
      onClick: () => {
        deleteComponent?.removeGridElement();
      },
      icon: Trash,
      shortcut: `Del`,
      color: "red"
    }
  ];
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(ComponentCallbacks, "ComponentCallbacks").$$render(
      $$result,
      { this: componentCallbacks },
      {
        this: ($$value) => {
          componentCallbacks = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(DeleteComponent, "DeleteComponent").$$render(
      $$result,
      { this: deleteComponent },
      {
        this: ($$value) => {
          deleteComponent = $$value;
          $$settled = false;
        }
      },
      {}
    )}    <div class="h-full w-full"> ${slots.default ? slots.default({}) : ``} ${``}</div>`;
  } while (!$$settled);
  $$unsubscribe_secondaryMenuLeft();
  $$unsubscribe_selectedComponent();
  $$unsubscribe_movingcomponents();
  return $$rendered;
});
const SubGridEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let highlight;
  let maxRow;
  let $breakpoint, $$unsubscribe_breakpoint;
  let $app, $$unsubscribe_app;
  let $$unsubscribe_connectingInput;
  let $focusedGrid, $$unsubscribe_focusedGrid;
  let $allIdsInPath, $$unsubscribe_allIdsInPath;
  let $mode, $$unsubscribe_mode;
  let $selectedComponent, $$unsubscribe_selectedComponent;
  let $parentWidth, $$unsubscribe_parentWidth;
  let { containerHeight = void 0 } = $$props;
  let { containerWidth = void 0 } = $$props;
  let { class: classes = "" } = $$props;
  let { style = "" } = $$props;
  let { noPadding = false } = $$props;
  let { noYPadding = false } = $$props;
  let { subGridId } = $$props;
  let { visible = true } = $$props;
  let { id } = $$props;
  let { shouldHighlight = true } = $$props;
  createEventDispatcher();
  const { app, connectingInput, selectedComponent, focusedGrid, mode, parentWidth, breakpoint, allIdsInPath } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => value);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => $selectedComponent = value);
  $$unsubscribe_focusedGrid = subscribe(focusedGrid, (value) => $focusedGrid = value);
  $$unsubscribe_mode = subscribe(mode, (value) => $mode = value);
  $$unsubscribe_parentWidth = subscribe(parentWidth, (value) => $parentWidth = value);
  $$unsubscribe_breakpoint = subscribe(breakpoint, (value) => $breakpoint = value);
  $$unsubscribe_allIdsInPath = subscribe(allIdsInPath, (value) => $allIdsInPath = value);
  const editorContext = getContext("AppEditorContext");
  let isActive = false;
  let sber = editorContext?.componentActive?.subscribe((x) => isActive = x);
  onDestroy(() => {
    sber?.();
  });
  let container = void 0;
  if ($$props.containerHeight === void 0 && $$bindings.containerHeight && containerHeight !== void 0) $$bindings.containerHeight(containerHeight);
  if ($$props.containerWidth === void 0 && $$bindings.containerWidth && containerWidth !== void 0) $$bindings.containerWidth(containerWidth);
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0) $$bindings.class(classes);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.noPadding === void 0 && $$bindings.noPadding && noPadding !== void 0) $$bindings.noPadding(noPadding);
  if ($$props.noYPadding === void 0 && $$bindings.noYPadding && noYPadding !== void 0) $$bindings.noYPadding(noYPadding);
  if ($$props.subGridId === void 0 && $$bindings.subGridId && subGridId !== void 0) $$bindings.subGridId(subGridId);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0) $$bindings.visible(visible);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.shouldHighlight === void 0 && $$bindings.shouldHighlight && shouldHighlight !== void 0) $$bindings.shouldHighlight(shouldHighlight);
  highlight = id === $focusedGrid?.parentComponentId && shouldHighlight;
  maxRow = maxHeight($app.subgrids?.[subGridId] ?? [], containerHeight ?? 0, $breakpoint);
  $$unsubscribe_breakpoint();
  $$unsubscribe_app();
  $$unsubscribe_connectingInput();
  $$unsubscribe_focusedGrid();
  $$unsubscribe_allIdsInPath();
  $$unsubscribe_mode();
  $$unsubscribe_selectedComponent();
  $$unsubscribe_parentWidth();
  return `<div class="${"translate-x-0 translate-y-0 w-full subgrid " + escape(visible ? "visible" : "invisible h-0 overflow-hidden", true)}"${add_attribute("this", container, 0)}><div${add_attribute(
    "class",
    twMerge(
      $allIdsInPath.includes(id) && $mode == "dnd" ? "overflow-visible" : "overflow-auto",
      noYPadding ? "" : "py-2",
      classes ?? "",
      noPadding ? "px-0" : "px-2"
    ),
    0
  )} style="${escape(
    containerHeight ? `height: ${containerHeight - 2}px;` : "",
    true
  ) + " " + escape(style ?? "", true)}">${$mode !== "preview" ? `<div${add_attribute(
    "class",
    highlight ? `animate-border border-dashed border-2 min-h-full ${isActive && !$selectedComponent?.includes(id) ? "border-orange-600" : "border-gray-600"}` : "",
    0
  )}>${validate_component(Grid, "Grid").$$render(
    $$result,
    {
      allIdsInPath: $allIdsInPath,
      items: $app.subgrids?.[subGridId] ?? [],
      selectedIds: $selectedComponent,
      cols: columnConfiguration,
      scroller: container,
      parentWidth: $parentWidth - 17,
      containerWidth
    },
    {},
    {
      default: ({ dataItem, hidden }) => {
        return `${validate_component(ComponentWrapper, "ComponentWrapper").$$render(
          $$result,
          {
            id: dataItem.id,
            type: dataItem.data.type,
            class: classNames(
              "h-full w-full center-center",
              $selectedComponent?.includes(dataItem.id) ? "active-grid-item" : "",
              "top-0"
            )
          },
          {},
          {
            default: () => {
              return `${validate_component(GridEditorMenu, "GridEditorMenu").$$render($$result, { id: dataItem.id }, {}, {
                default: () => {
                  return `${validate_component(Component, "Component").$$render(
                    $$result,
                    {
                      hidden,
                      fullHeight: dataItem?.[$breakpoint === "sm" ? 3 : 12]?.fullHeight,
                      render: visible,
                      component: dataItem.data,
                      selected: Boolean($selectedComponent?.includes(dataItem.id)),
                      locked: isFixed(dataItem)
                    },
                    {},
                    {}
                  )}`;
                }
              })}`;
            }
          }
        )}`;
      }
    }
  )}</div>` : `${validate_component(GridViewer, "GridViewer").$$render(
    $$result,
    {
      allIdsInPath: $allIdsInPath,
      items: $app.subgrids?.[subGridId] ?? [],
      cols: columnConfiguration,
      breakpoint: $breakpoint,
      parentWidth: $parentWidth - 17,
      containerWidth,
      maxRow
    },
    {},
    {
      default: ({ dataItem, hidden }) => {
        return ` <div${add_attribute("class", classNames("h-full w-full center-center", "top-0"), 0)}>${validate_component(Component, "Component").$$render(
          $$result,
          {
            fullHeight: dataItem?.[$breakpoint === "sm" ? 3 : 12]?.fullHeight,
            render: visible,
            component: dataItem.data,
            selected: Boolean($selectedComponent?.includes(dataItem.id)),
            locked: isFixed(dataItem),
            hidden
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}`}</div></div>`;
});
const AppModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let containerHeight;
  let $breakpoint, $$unsubscribe_breakpoint;
  let $app, $$unsubscribe_app;
  let $componentControl, $$unsubscribe_componentControl;
  let $worldStore, $$unsubscribe_worldStore;
  let $mode, $$unsubscribe_mode;
  let $$unsubscribe_focusedGrid;
  let $$unsubscribe_runnableComponents;
  let $$unsubscribe_connectingInput;
  let $$unsubscribe_selectedComponent;
  let { customCss = void 0 } = $$props;
  let { id } = $$props;
  let { configuration } = $$props;
  let { horizontalAlignment = void 0 } = $$props;
  let { verticalAlignment = void 0 } = $$props;
  let { noWFull = false } = $$props;
  let { render } = $$props;
  let { onOpenRecomputeIds = void 0 } = $$props;
  let { onCloseRecomputeIds = void 0 } = $$props;
  const { app, focusedGrid, selectedComponent, worldStore, connectingInput, mode, componentControl, runnableComponents, breakpoint } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_focusedGrid = subscribe(focusedGrid, (value) => value);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => value);
  $$unsubscribe_mode = subscribe(mode, (value) => $mode = value);
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => $componentControl = value);
  $$unsubscribe_runnableComponents = subscribe(runnableComponents, (value) => value);
  $$unsubscribe_breakpoint = subscribe(breakpoint, (value) => $breakpoint = value);
  initOutput($worldStore, id, { open: false });
  let css2 = initCss($app.css?.modalcomponent, customCss);
  let disposable = void 0;
  let resolvedConfig = initConfig(components["modalcomponent"].initialData.configuration, configuration);
  function unclosableModal() {
    setTimeout(
      () => {
      },
      1e3
    );
  }
  set_store_value(
    componentControl,
    $componentControl[id] = {
      openModal: () => {
        unclosableModal();
        disposable?.openDrawer();
      },
      closeModal: () => {
        disposable?.closeDrawer();
      },
      open: () => {
        unclosableModal();
        disposable?.openDrawer();
      },
      close: () => {
        disposable?.closeDrawer();
      }
    },
    $componentControl
  );
  let wrapperHeight = 0;
  let headerHeight = 0;
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.horizontalAlignment === void 0 && $$bindings.horizontalAlignment && horizontalAlignment !== void 0) $$bindings.horizontalAlignment(horizontalAlignment);
  if ($$props.verticalAlignment === void 0 && $$bindings.verticalAlignment && verticalAlignment !== void 0) $$bindings.verticalAlignment(verticalAlignment);
  if ($$props.noWFull === void 0 && $$bindings.noWFull && noWFull !== void 0) $$bindings.noWFull(noWFull);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.onOpenRecomputeIds === void 0 && $$bindings.onOpenRecomputeIds && onOpenRecomputeIds !== void 0) $$bindings.onOpenRecomputeIds(onOpenRecomputeIds);
  if ($$props.onCloseRecomputeIds === void 0 && $$bindings.onCloseRecomputeIds && onCloseRecomputeIds !== void 0) $$bindings.onCloseRecomputeIds(onCloseRecomputeIds);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    containerHeight = Math.min(
      // 8px * 2 of padding
      maxHeight($app.subgrids?.[`${id}-0`] ?? [], 0, $breakpoint) * (ROW_HEIGHT + ROW_GAP_Y) + 16,
      // 32px (2rem) of top and bottom margin
      wrapperHeight - headerHeight - 64
    );
    $$rendered = `${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${each(Object.keys(components["modalcomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.modalcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${render ? `<div class="h-full w-full">${validate_component(AlignWrapper, "AlignWrapper").$$render(
      $$result,
      {
        noWFull,
        horizontalAlignment,
        verticalAlignment
      },
      {},
      {
        default: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              btnClasses: twMerge(css2?.button?.class, "wm-button", "wm-modal-button"),
              wrapperClasses: twMerge(
                resolvedConfig?.buttonFillContainer ? "w-full h-full" : "",
                css2?.buttonContainer?.class,
                "wm-button-container",
                "wm-modal-button-container",
                resolvedConfig?.hideButtonOnView && $mode == "preview" ? "invisible h-0 overflow-hidden" : ""
              ),
              style: css2?.button?.style,
              wrapperStyle: css2?.buttonContainer?.style,
              disabled: resolvedConfig.buttonDisabled,
              size: resolvedConfig.buttonSize,
              color: resolvedConfig.buttonColor
            },
            {},
            {
              default: () => {
                return `<div>${escape(resolvedConfig.buttonLabel)}</div>`;
              }
            }
          )}`;
        }
      }
    )}</div>` : ``} ${validate_component(Portal, "Portal").$$render($$result, { target: "#app-editor-top-level-drawer" }, {}, {
      default: () => {
        return `${validate_component(Disposable, "Disposable").$$render(
          $$result,
          { id, this: disposable },
          {
            this: ($$value) => {
              disposable = $$value;
              $$settled = false;
            }
          },
          {
            default: ({ handleClickAway, zIndex, open }) => {
              return `<div${add_attribute(
                "class",
                twMerge(`${$mode == "dnd" ? "absolute" : "fixed"} top-0 bottom-0 left-0 right-0 transition-all duration-50`, open ? " bg-black bg-opacity-60" : "h-0 overflow-hidden invisible"),
                0
              )} style="${"z-index: " + escape(zIndex, true)}"><div${add_attribute("style", css2?.popup?.style, 0)}${add_attribute("class", twMerge("mx-24 mt-8 bg-surface rounded-lg relative", css2?.popup?.class), 0)}><div class="px-4 py-2 border-b flex justify-between items-center"><div>${escape(resolvedConfig.modalTitle)}</div> <div class="w-8"><button class="hover:bg-surface-hover bg-surface-secondary rounded-full w-8 h-8 flex items-center justify-center transition-all">${validate_component(X, "X").$$render($$result, { class: "text-tertiary" }, {}, {})}</button></div></div> <div${add_attribute("class", twMerge("wm-modal h-full", "overflow-y-auto"), 0)}>${$app.subgrids?.[`${id}-0`] ? `${validate_component(SubGridEditor, "SubGridEditor").$$render(
                $$result,
                {
                  visible: open && render,
                  id,
                  containerHeight,
                  subGridId: `${id}-0`
                },
                {},
                {}
              )}` : ``}</div></div></div>`;
            }
          }
        )}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_breakpoint();
  $$unsubscribe_app();
  $$unsubscribe_componentControl();
  $$unsubscribe_worldStore();
  $$unsubscribe_mode();
  $$unsubscribe_focusedGrid();
  $$unsubscribe_runnableComponents();
  $$unsubscribe_connectingInput();
  $$unsubscribe_selectedComponent();
  return $$rendered;
});
const RefreshIndicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { loading } = $$props;
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
  return `${loading ? `${validate_component(Popover, "Popover").$$render($$result, {}, {}, {
    text: () => {
      return `${loading ? `Refreshing...` : `Refresh`} `;
    },
    default: () => {
      return `<div${add_attribute("class", "bg-blue-100 dark:bg-blue-400 transition-all p-1 rounded-component", 0)}>${validate_component(Loader$1, "LoaderIcon").$$render(
        $$result,
        {
          size: 14,
          class: "animate-spin text-blue-800 dark:text-white"
        },
        {},
        {}
      )}</div>`;
    }
  })}` : ``}`;
});
const NonRunnableComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let outputs;
  let $worldStore, $$unsubscribe_worldStore;
  let { componentInput } = $$props;
  let { id } = $$props;
  let { result } = $$props;
  let { render } = $$props;
  let { hasChildrens } = $$props;
  let { noInitialize } = $$props;
  const { worldStore } = getContext("AppViewerContext");
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  function setOutput(v) {
    outputs?.result?.set(v, true);
  }
  let loading = false;
  let loadingStates = {};
  let subscriptions = [];
  function updateGlobalLoading() {
    loading = Object.values(loadingStates).some((state) => state === true);
  }
  function builtSubscriptions(connections) {
    if (subscriptions.length > 0) {
      subscriptions.forEach((unsubscribe) => unsubscribe?.());
      subscriptions = [];
      loadingStates = {};
      loading = false;
    }
    connections.forEach((connection) => {
      const output = $worldStore.outputsById[connection.componentId];
      if (output?.loading?.subscribe) {
        const unsubscribe = output.loading.subscribe(
          {
            id: `loading-${connection.componentId}`,
            next: (isConnectionLoading) => {
              loadingStates[connection.componentId] = isConnectionLoading;
              updateGlobalLoading();
            }
          },
          loadingStates[connection.componentId]
        );
        subscriptions.push(unsubscribe);
      }
    });
  }
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.result === void 0 && $$bindings.result && result !== void 0) $$bindings.result(result);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.hasChildrens === void 0 && $$bindings.hasChildrens && hasChildrens !== void 0) $$bindings.hasChildrens(hasChildrens);
  if ($$props.noInitialize === void 0 && $$bindings.noInitialize && noInitialize !== void 0) $$bindings.noInitialize(noInitialize);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    outputs = $worldStore?.outputsById?.[id];
    componentInput.type === "evalv2" && componentInput.connections && builtSubscriptions(componentInput.connections);
    result != void 0 && outputs && setOutput(result);
    $$rendered = `${!noInitialize ? `${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})}` : ``} ${componentInput.type !== "runnable" ? `${validate_component(InputValue, "InputValue").$$render(
      $$result,
      {
        key: "nonrunnable",
        id,
        input: componentInput,
        value: result
      },
      {
        value: ($$value) => {
          result = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${render || hasChildrens ? `<div${add_attribute(
      "class",
      render ? "h-full w-full" : "invisible h-0 overflow-hidden",
      0
    )}>${slots.default ? slots.default({}) : ``} <div class="flex absolute top-1 right-1 z-50 app-component-refresh-btn">${validate_component(RefreshIndicator, "RefreshIndicator").$$render($$result, { loading }, {}, {})}</div></div>` : `<div class="w-full h-full"></div>`}`;
  } while (!$$settled);
  $$unsubscribe_worldStore();
  return $$rendered;
});
const RefreshButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_runnableComponents;
  let { id } = $$props;
  let { loading } = $$props;
  const { runnableComponents } = getContext("AppViewerContext");
  $$unsubscribe_runnableComponents = subscribe(runnableComponents, (value) => value);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
  $$unsubscribe_runnableComponents();
  return `${validate_component(Popover, "Popover").$$render($$result, {}, {}, {
    text: () => {
      return `${loading ? `Refreshing...` : `Refresh`} `;
    },
    default: () => {
      return `${validate_component(Button, "Button").$$render(
        $$result,
        {
          startIcon: {
            icon: loading ? Loader$1 : Refresh_cw,
            classes: twMerge(loading ? "animate-spin text-blue-800" : "", "transition-all text-gray-500 dark:text-white")
          },
          color: "light",
          size: "xs2",
          btnClasses: twMerge(loading ? " bg-blue-100 dark:bg-blue-400" : "", "transition-all"),
          iconOnly: true
        },
        {},
        {}
      )}`;
    }
  })}`;
});
function getResultErrors(result) {
  const errorAsArray = Array.isArray(result) ? result.flat() : [result];
  const hasErrors = errorAsArray.some((r) => r?.error);
  if (!hasErrors) {
    return void 0;
  }
  return errorAsArray.map((r) => r?.error?.message).filter(Boolean).join("\n");
}
const RunnableComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let refreshOn;
  let $runnableComponents, $$unsubscribe_runnableComponents;
  let $errorByComponent, $$unsubscribe_errorByComponent;
  let $initialized, $$unsubscribe_initialized;
  let $app, $$unsubscribe_app;
  let $$unsubscribe_connectingInput;
  let $worldStore, $$unsubscribe_worldStore;
  let $componentControl, $$unsubscribe_componentControl;
  let $state, $$unsubscribe_state;
  let $rowContext, $$unsubscribe_rowContext;
  let $iterContext, $$unsubscribe_iterContext;
  let $jobsById, $$unsubscribe_jobsById;
  let $userStore, $$unsubscribe_userStore;
  let $groupContext, $$unsubscribe_groupContext;
  let $$unsubscribe_stateId;
  let $mode, $$unsubscribe_mode;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let { id } = $$props;
  let { fields } = $$props;
  let { runnable } = $$props;
  let { transformer } = $$props;
  let { extraQueryParams = {} } = $$props;
  let { autoRefresh = true } = $$props;
  let { result = void 0 } = $$props;
  let { forceSchemaDisplay = false } = $$props;
  let { wrapperClass = "" } = $$props;
  let { wrapperStyle = "" } = $$props;
  let { initializing = void 0 } = $$props;
  let { render } = $$props;
  let { outputs } = $$props;
  let { extraKey = "" } = $$props;
  let { recomputeOnInputChanged = true } = $$props;
  let { loading = false } = $$props;
  let { refreshOnStart = false } = $$props;
  let { recomputableByRefreshButton } = $$props;
  let { errorHandledByComponent = false } = $$props;
  let { hideRefreshButton = false } = $$props;
  let { hasChildrens } = $$props;
  let { allowConcurentRequests = false } = $$props;
  let { noInitialize = false } = $$props;
  let { overrideCallback = void 0 } = $$props;
  let { overrideAutoRefresh = false } = $$props;
  let { replaceCallback = false } = $$props;
  const { worldStore, runnableComponents, workspace, appPath, isEditor, jobs, jobsById, noBackend, errorByComponent, mode, stateId, state, componentControl, initialized, selectedComponent, app, connectingInput, bgRuns } = getContext("AppViewerContext");
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_runnableComponents = subscribe(runnableComponents, (value) => $runnableComponents = value);
  $$unsubscribe_jobsById = subscribe(jobsById, (value) => $jobsById = value);
  $$unsubscribe_errorByComponent = subscribe(errorByComponent, (value) => $errorByComponent = value);
  $$unsubscribe_mode = subscribe(mode, (value) => $mode = value);
  $$unsubscribe_stateId = subscribe(stateId, (value) => value);
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => $componentControl = value);
  $$unsubscribe_initialized = subscribe(initialized, (value) => $initialized = value);
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => value);
  const editorContext = getContext("AppEditorContext");
  const iterContext = getContext("ListWrapperContext");
  $$unsubscribe_iterContext = subscribe(iterContext, (value) => $iterContext = value);
  const rowContext = getContext("RowWrapperContext");
  $$unsubscribe_rowContext = subscribe(rowContext, (value) => $rowContext = value);
  const groupContext = getContext("GroupContext");
  $$unsubscribe_groupContext = subscribe(groupContext, (value) => $groupContext = value);
  const dispatch = createEventDispatcher();
  runnableComponents.set($runnableComponents);
  function setArgs(value) {
    args = value;
  }
  let args = void 0;
  let runnableInputValues = {};
  let executeTimeout = void 0;
  function setDebouncedExecute() {
    executeTimeout && clearTimeout(executeTimeout);
    executeTimeout = setTimeout(
      () => {
        console.debug("debounce execute");
        executeComponent(true);
      },
      200
    );
  }
  function computeStaticValues() {
    return Object.entries(fields ?? {}).filter(([k, v]) => v.type == "static").map(([name, field]) => {
      return [name, field["value"]];
    });
  }
  let lazyStaticValues = computeStaticValues();
  let currentStaticValues = lazyStaticValues;
  let isBg = id.startsWith("bg_");
  function refreshOnStaticChange() {
    if (!deepEqual(currentStaticValues, lazyStaticValues)) {
      lazyStaticValues = currentStaticValues;
      refreshIfAutoRefresh("static changed");
    }
  }
  let firstRefresh = true;
  function refreshIfAutoRefresh(src) {
    if (firstRefresh) {
      firstRefresh = false;
      if (src == "arg changed" && args == void 0 && Object.keys(runnableInputValues ?? {}).length == 0 && Object.keys(extraQueryParams ?? {}).length == 0) {
        return;
      }
    }
    const refreshEnabled = autoRefresh && ((recomputeOnInputChanged ?? true) || refreshOn?.length > 0);
    if (refreshEnabled && $initialized.initialized) {
      setDebouncedExecute();
    }
  }
  let schemaForm;
  function invalidate(key, error) {
    schemaForm?.invalidate(key, error);
  }
  function validate(key) {
    schemaForm?.validate(key);
  }
  function validateAll() {
    schemaForm?.validateAll();
  }
  let resultJobLoader = void 0;
  let schemaStripped = autoRefresh || forceSchemaDisplay ? emptySchema() : void 0;
  function stripSchema(inputs, s) {
    if (inputs === void 0) {
      return emptySchema();
    }
    let schema = runnable?.type == "runnableByName" ? runnable.inlineScript?.schema : runnable?.schema;
    try {
      schemaStripped = JSON.parse(JSON.stringify(schema));
    } catch (e) {
      console.warn("Error loading schema");
      return emptySchema();
    }
    Object.keys(inputs ?? {}).forEach((key) => {
      const input = inputs[key];
      if (["static", "eval", "connected", "evalv2"].includes(input.type) && schemaStripped !== void 0 && schemaStripped.properties) {
        delete schemaStripped.properties[key];
      }
    });
    return schemaStripped;
  }
  function generateNextFrontendJobId() {
    const prefix = "Frontend: ";
    let nextJobNumber = 1;
    while ($jobsById[`${prefix}#${nextJobNumber}`]) {
      nextJobNumber++;
    }
    return `${prefix}#${nextJobNumber}`;
  }
  function addJob(jobId) {
    set_store_value(
      jobsById,
      $jobsById[jobId] = {
        component: id,
        job: jobId,
        created_at: Date.now(),
        started_at: jobId.startsWith("Frontend") ? Date.now() : void 0
      },
      $jobsById
    );
    jobs.update((jobs2) => {
      const njobs = [...jobs2, jobId];
      if (njobs?.length > 100) {
        while (njobs?.length > 100) {
          delete $jobsById[njobs.shift()];
        }
      }
      return njobs;
    });
  }
  async function executeComponent(noToast = false, inlineScriptOverride, setRunnableJobEditorPanel, dynamicArgsOverride, callbacks) {
    let jobId;
    console.debug(`Executing ${id}`);
    if (iterContext && $iterContext.disabled) {
      callbacks?.done({});
      console.debug(`Skipping execution of ${id} because it is part of a disabled list`);
      return;
    }
    if (runnable?.type === "runnableByName" && runnable.inlineScript?.language === "frontend") {
      loading = true;
      let job;
      if (isEditor) {
        job = generateNextFrontendJobId();
        addJob(job);
      }
      console.log("Frontend job started", id);
      let r;
      try {
        r = await eval_like(
          runnable.inlineScript?.content,
          computeGlobalContext($worldStore, {
            iter: iterContext ? $iterContext : void 0,
            row: rowContext ? $rowContext : void 0,
            group: groupContext ? $groupContext : void 0
          }),
          $state,
          isEditor,
          $componentControl,
          $worldStore,
          $runnableComponents,
          true
        );
        await setResult(r, job);
        state.set($state);
      } catch (e) {
        sendUserToast(`Error running frontend script ${id}: ` + e.message, true);
        r = { error: { message: e.body ?? e.message } };
        await setResult(r, job);
      }
      loading = false;
      callbacks?.done(r);
      if (setRunnableJobEditorPanel && editorContext) {
        editorContext.runnableJobEditorPanel.update((p) => {
          return {
            ...p,
            frontendJobs: { ...p.frontendJobs, [id]: r }
          };
        });
      }
      return;
    } else if (noBackend) {
      if (!noToast) {
        sendUserToast("This app is not connected to a windmill backend, it is a static preview");
      }
      callbacks?.done({});
      return;
    }
    if (runnable?.type === "runnableByName" && !runnable.inlineScript) {
      callbacks?.done({});
      return;
    }
    if (!resultJobLoader) {
      console.warn("No test job loader");
      callbacks?.done({});
      return;
    }
    try {
      jobId = await resultJobLoader?.abstractRun(
        async () => {
          const nonStaticRunnableInputs = dynamicArgsOverride ?? {};
          const staticRunnableInputs = {};
          const allowUserResources = [];
          for (const k of Object.keys(fields ?? {})) {
            let field = fields[k];
            if (field?.type == "static" && fields[k]) {
              if (isEditor) {
                staticRunnableInputs[k] = field.value;
              }
            } else if (field?.type == "user") {
              nonStaticRunnableInputs[k] = args?.[k];
              if (isEditor && field.allowUserResources) {
                allowUserResources.push(k);
              }
            } else if (field?.type == "eval" || field?.type == "evalv2" && inputValues[k]) {
              const ctxMatch = field.expr.match(ctxRegex);
              if (ctxMatch) {
                nonStaticRunnableInputs[k] = "$ctx:" + ctxMatch[1];
              } else {
                nonStaticRunnableInputs[k] = await inputValues[k]?.computeExpr();
              }
              if (isEditor && field?.type == "evalv2" && field.allowUserResources) {
                allowUserResources.push(k);
              }
            } else {
              if (isEditor && field?.type == "connected" && field.allowUserResources) {
                allowUserResources.push(k);
              }
              nonStaticRunnableInputs[k] = runnableInputValues[k];
            }
          }
          const oneOfRunnableInputs = isEditor ? collectOneOfFields(fields, $app) : {};
          const requestBody = {
            args: nonStaticRunnableInputs,
            component: id,
            force_viewer_static_fields: !isEditor ? void 0 : staticRunnableInputs,
            force_viewer_one_of_fields: !isEditor ? void 0 : oneOfRunnableInputs,
            force_viewer_allow_user_resources: !isEditor ? void 0 : allowUserResources
          };
          if (runnable?.type === "runnableByName") {
            const { inlineScript } = inlineScriptOverride ? { inlineScript: inlineScriptOverride } : runnable;
            if (inlineScript) {
              requestBody["raw_code"] = {
                content: inlineScript.content,
                language: inlineScript.language ?? "",
                path: inlineScript.path,
                lock: inlineScript.lock,
                cache_ttl: inlineScript.cache_ttl
              };
            }
          } else if (runnable?.type === "runnableByPath") {
            const { path, runType } = runnable;
            requestBody["path"] = runType !== "hubscript" ? `${runType}/${path}` : `script/${path}`;
          }
          const uuid = await AppService.executeComponent({
            workspace,
            path: defaultIfEmptyString(appPath, `u/${$userStore?.username ?? "unknown"}/newapp`),
            requestBody
          });
          if (isEditor) {
            addJob(uuid);
          }
          return uuid;
        },
        callbacks
      );
      if (setRunnableJobEditorPanel && editorContext) {
        editorContext.runnableJobEditorPanel.update((p) => {
          return { ...p, jobs: { ...p.jobs, [id]: jobId } };
        });
      }
      return jobId;
    } catch (e) {
      let error = e.body ?? e.message;
      updateResult({ error });
      set_store_value(errorByComponent, $errorByComponent[id] = { error }, $errorByComponent);
      callbacks?.done({ error });
      sendUserToast(error, true);
      loading = false;
    }
  }
  async function runComponent(noToast = true, inlineScriptOverride, setRunnableJobEditorPanel, dynamicArgsOverride, callbacks) {
    try {
      if (cancellableRun && !dynamicArgsOverride) ;
      else {
        console.log("Run component", id);
        return await executeComponent(noToast, inlineScriptOverride, setRunnableJobEditorPanel, dynamicArgsOverride, callbacks);
      }
    } catch (e) {
      let error = e?.body ?? e?.message;
      updateResult({ error });
      set_store_value(errorByComponent, $errorByComponent[id] = { error }, $errorByComponent);
    }
  }
  function recordJob(jobId, result2, jobError, transformer2) {
    const error = jobError ?? JSON.stringify(transformer2?.error, null, 4);
    if (isEditor && jobId) {
      const oldJob = $jobsById[jobId];
      const job = {
        ...oldJob,
        ...result2 ? { result: result2 } : {},
        ...transformer2 ? { transformer: transformer2 } : {},
        error,
        duration_ms: oldJob?.started_at ? Date.now() - oldJob?.started_at : 1
      };
      set_store_value(jobsById, $jobsById[jobId] = job, $jobsById);
    }
    if (error) {
      set_store_value(errorByComponent, $errorByComponent[id] = { id: jobId, error }, $errorByComponent);
    } else {
      delete $errorByComponent[id];
      errorByComponent.set($errorByComponent);
    }
  }
  async function runTransformer(res) {
    if (transformer) {
      try {
        let raw = $worldStore.newOutput(id, "raw", res);
        raw.set(res);
        const transformerResult = await eval_like(
          transformer.content,
          computeGlobalContext($worldStore, {
            iter: iterContext ? $iterContext : void 0,
            row: rowContext ? $rowContext : void 0,
            result: res
          }),
          $state,
          isEditor,
          $componentControl,
          $worldStore,
          $runnableComponents,
          true
        );
        return transformerResult;
      } catch (err) {
        return {
          error: {
            name: "TransformerError",
            message: "An error occured in the transformer",
            stack: err.message
          }
        };
      }
    }
  }
  function updateResult(res) {
    outputs.result?.set(res);
    result = res;
  }
  async function setResult(res, jobId) {
    dispatch("resultSet");
    const errors = getResultErrors(res);
    if (errors) {
      const transformerResult2 = transformer ? {
        error: "Transformer could not be run because of previous errors"
      } : void 0;
      recordJob(jobId, errors, errors, transformerResult2);
      updateResult(res);
      dispatch("handleError", errors);
      return;
    }
    const transformerResult = await runTransformer(res);
    if (transformerResult && editorContext && get_store_value(editorContext.runnableJobEditorPanel)?.focused) {
      editorContext.runnableJobEditorPanel.update((p) => {
        return {
          ...p,
          frontendJobs: {
            ...p.frontendJobs,
            [id + "_transformer"]: transformerResult
          }
        };
      });
    }
    if (transformerResult?.error) {
      recordJob(jobId, res, void 0, transformerResult);
      updateResult(transformerResult);
      dispatch("handleError", transformerResult.error);
      return;
    }
    updateResult(transformerResult ?? res);
    recordJob(jobId, result, void 0, transformerResult);
    delete $errorByComponent[id];
    dispatch("success", result);
  }
  let cancellableRun = void 0;
  onDestroy(() => {
    set_store_value(initialized, $initialized.initializedComponents = $initialized.initializedComponents.filter((c) => c !== id), $initialized);
    delete $errorByComponent[id];
    if ($runnableComponents[id]) {
      set_store_value(
        runnableComponents,
        $runnableComponents[id] = {
          ...$runnableComponents[id],
          cb: $runnableComponents[id].cb.filter((cb) => cb !== cancellableRun)
        },
        $runnableComponents
      );
      runnableComponents.set($runnableComponents);
    }
  });
  let inputValues = {};
  function updateBgRuns(loading2) {
    if (loading2) {
      bgRuns.update((runs) => [...runs, id]);
    } else {
      bgRuns.update((runs) => runs.filter((r) => r !== id));
    }
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.fields === void 0 && $$bindings.fields && fields !== void 0) $$bindings.fields(fields);
  if ($$props.runnable === void 0 && $$bindings.runnable && runnable !== void 0) $$bindings.runnable(runnable);
  if ($$props.transformer === void 0 && $$bindings.transformer && transformer !== void 0) $$bindings.transformer(transformer);
  if ($$props.extraQueryParams === void 0 && $$bindings.extraQueryParams && extraQueryParams !== void 0) $$bindings.extraQueryParams(extraQueryParams);
  if ($$props.autoRefresh === void 0 && $$bindings.autoRefresh && autoRefresh !== void 0) $$bindings.autoRefresh(autoRefresh);
  if ($$props.result === void 0 && $$bindings.result && result !== void 0) $$bindings.result(result);
  if ($$props.forceSchemaDisplay === void 0 && $$bindings.forceSchemaDisplay && forceSchemaDisplay !== void 0) $$bindings.forceSchemaDisplay(forceSchemaDisplay);
  if ($$props.wrapperClass === void 0 && $$bindings.wrapperClass && wrapperClass !== void 0) $$bindings.wrapperClass(wrapperClass);
  if ($$props.wrapperStyle === void 0 && $$bindings.wrapperStyle && wrapperStyle !== void 0) $$bindings.wrapperStyle(wrapperStyle);
  if ($$props.initializing === void 0 && $$bindings.initializing && initializing !== void 0) $$bindings.initializing(initializing);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.outputs === void 0 && $$bindings.outputs && outputs !== void 0) $$bindings.outputs(outputs);
  if ($$props.extraKey === void 0 && $$bindings.extraKey && extraKey !== void 0) $$bindings.extraKey(extraKey);
  if ($$props.recomputeOnInputChanged === void 0 && $$bindings.recomputeOnInputChanged && recomputeOnInputChanged !== void 0) $$bindings.recomputeOnInputChanged(recomputeOnInputChanged);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
  if ($$props.refreshOnStart === void 0 && $$bindings.refreshOnStart && refreshOnStart !== void 0) $$bindings.refreshOnStart(refreshOnStart);
  if ($$props.recomputableByRefreshButton === void 0 && $$bindings.recomputableByRefreshButton && recomputableByRefreshButton !== void 0) $$bindings.recomputableByRefreshButton(recomputableByRefreshButton);
  if ($$props.errorHandledByComponent === void 0 && $$bindings.errorHandledByComponent && errorHandledByComponent !== void 0) $$bindings.errorHandledByComponent(errorHandledByComponent);
  if ($$props.hideRefreshButton === void 0 && $$bindings.hideRefreshButton && hideRefreshButton !== void 0) $$bindings.hideRefreshButton(hideRefreshButton);
  if ($$props.hasChildrens === void 0 && $$bindings.hasChildrens && hasChildrens !== void 0) $$bindings.hasChildrens(hasChildrens);
  if ($$props.allowConcurentRequests === void 0 && $$bindings.allowConcurentRequests && allowConcurentRequests !== void 0) $$bindings.allowConcurentRequests(allowConcurentRequests);
  if ($$props.noInitialize === void 0 && $$bindings.noInitialize && noInitialize !== void 0) $$bindings.noInitialize(noInitialize);
  if ($$props.overrideCallback === void 0 && $$bindings.overrideCallback && overrideCallback !== void 0) $$bindings.overrideCallback(overrideCallback);
  if ($$props.overrideAutoRefresh === void 0 && $$bindings.overrideAutoRefresh && overrideAutoRefresh !== void 0) $$bindings.overrideAutoRefresh(overrideAutoRefresh);
  if ($$props.replaceCallback === void 0 && $$bindings.replaceCallback && replaceCallback !== void 0) $$bindings.replaceCallback(replaceCallback);
  if ($$props.setArgs === void 0 && $$bindings.setArgs && setArgs !== void 0) $$bindings.setArgs(setArgs);
  if ($$props.invalidate === void 0 && $$bindings.invalidate && invalidate !== void 0) $$bindings.invalidate(invalidate);
  if ($$props.validate === void 0 && $$bindings.validate && validate !== void 0) $$bindings.validate(validate);
  if ($$props.validateAll === void 0 && $$bindings.validateAll && validateAll !== void 0) $$bindings.validateAll(validateAll);
  if ($$props.runComponent === void 0 && $$bindings.runComponent && runComponent !== void 0) $$bindings.runComponent(runComponent);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      outputs.loading?.set(loading);
    }
    isBg && updateBgRuns(loading);
    fields && (currentStaticValues = computeStaticValues());
    currentStaticValues && refreshOnStaticChange();
    (runnableInputValues || extraQueryParams || args) && resultJobLoader && refreshIfAutoRefresh("arg changed");
    runnableInputValues && dispatch("argsChanged");
    refreshOn = runnable && runnable.type === "runnableByName" ? runnable.inlineScript?.refreshOn ?? [] : [];
    (autoRefresh || forceSchemaDisplay) && Object.keys(fields ?? {}).length > 0 && (schemaStripped = stripSchema(fields));
    $$rendered = `${each(Object.entries(fields ?? {}), ([key, v]) => {
      return `${v.type != "static" && v.type != "user" ? `${validate_component(InputValue, "InputValue").$$render(
        $$result,
        {
          key: key + extraKey,
          id,
          input: fields[key],
          onDemandOnly: v.onDemandOnly,
          this: inputValues[key],
          value: runnableInputValues[key]
        },
        {
          this: ($$value) => {
            inputValues[key] = $$value;
            $$settled = false;
          },
          value: ($$value) => {
            runnableInputValues[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : ``}`;
    })} ${runnable?.type == "runnableByName" && runnable.inlineScript?.language == "frontend" ? `${each(runnable.inlineScript.refreshOn ?? [], ({ id: tid, key }) => {
      let fkey = `${tid}-${key}${extraKey}`;
      return ` ${validate_component(InputValue, "InputValue").$$render(
        $$result,
        {
          id,
          key: fkey,
          input: {
            type: "connected",
            connection: { componentId: tid, path: key },
            fieldType: "any"
          },
          value: runnableInputValues[fkey]
        },
        {
          value: ($$value) => {
            runnableInputValues[fkey] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}` : ``} ${validate_component(ResultJobLoader, "ResultJobLoader").$$render(
      $$result,
      {
        allowConcurentRequests,
        isEditor,
        workspaceOverride: workspace,
        this: resultJobLoader
      },
      {
        this: ($$value) => {
          resultJobLoader = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${render || hasChildrens ? `<div class="${"h-full flex relative flex-row flex-wrap " + escape(wrapperClass, true) + " " + escape(render ? "visible" : "invisible h-0 overflow-hidden", true)}"${add_attribute("style", wrapperStyle, 0)}> ${render && (autoRefresh || forceSchemaDisplay) && schemaStripped && Object.keys(schemaStripped?.properties ?? {}).length > 0 ? `<div class="px-2 h-fit min-h-0">${validate_component(LightweightSchemaForm, "LightweightSchemaForm").$$render(
      $$result,
      {
        schema: schemaStripped,
        this: schemaForm,
        args
      },
      {
        this: ($$value) => {
          schemaForm = $$value;
          $$settled = false;
        },
        args: ($$value) => {
          args = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : ``} ${!runnable && autoRefresh ? `${validate_component(Alert, "Alert").$$render(
      $$result,
      {
        type: "warning",
        size: "xs",
        class: "mt-2 px-1",
        title: "Missing runnable"
      },
      {},
      {
        default: () => {
          return `Please select a runnable`;
        }
      }
    )}` : `${result?.error && $mode === "preview" && !errorHandledByComponent ? `<div title="Error"${add_attribute("class", classNames("text-red-500 px-1 text-2xs py-0.5 font-bold w-fit absolute border border-red-500 -bottom-2  shadow left-1/2 transform -translate-x-1/2 z-50 cursor-pointer"), 0)}>${validate_component(Popover, "Popover").$$render(
      $$result,
      {
        notClickable: true,
        placement: "bottom",
        popupClass: "!bg-surface border w-96"
      },
      {},
      {
        text: () => {
          return `<span slot="text"><div class="bg-surface">${validate_component(Alert, "Alert").$$render(
            $$result,
            {
              type: "error",
              title: "Error during execution"
            },
            {},
            {
              default: () => {
                return `<div class="flex flex-col gap-2 overflow-auto">An error occured, please contact the app author.

									${$errorByComponent?.[id]?.error ? `<div class="font-bold">${escape($errorByComponent[id].error)}</div>` : ``} ${``}</div>`;
              }
            }
          )}</div></span>`;
        },
        default: () => {
          return `${validate_component(Bug, "Bug").$$render($$result, { size: 14 }, {}, {})}`;
        }
      }
    )}</div> <div class="block grow w-full max-h-full border border-red-30 relative">${slots.default ? slots.default({}) : ``}</div>` : `<div class="block grow w-full max-h-full">${slots.default ? slots.default({}) : ``}</div>`}`} ${render && !initializing && autoRefresh === true && !hideRefreshButton ? `<div class="flex absolute top-1 right-1 z-50 app-component-refresh-btn">${validate_component(RefreshButton, "RefreshButton").$$render($$result, { loading, id }, {}, {})}</div>` : ``}</div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_runnableComponents();
  $$unsubscribe_errorByComponent();
  $$unsubscribe_initialized();
  $$unsubscribe_app();
  $$unsubscribe_connectingInput();
  $$unsubscribe_worldStore();
  $$unsubscribe_componentControl();
  $$unsubscribe_state();
  $$unsubscribe_rowContext();
  $$unsubscribe_iterContext();
  $$unsubscribe_jobsById();
  $$unsubscribe_userStore();
  $$unsubscribe_groupContext();
  $$unsubscribe_stateId();
  $$unsubscribe_mode();
  return $$rendered;
});
const RunnableWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $componentControl, $$unsubscribe_componentControl;
  let $runnableComponents, $$unsubscribe_runnableComponents;
  let $$unsubscribe_staticExporter;
  let { componentInput } = $$props;
  let { noInitialize = false } = $$props;
  let { hideRefreshButton = void 0 } = $$props;
  let { overrideCallback = void 0 } = $$props;
  let { overrideAutoRefresh = false } = $$props;
  let { replaceCallback = false } = $$props;
  let { id } = $$props;
  let { result = void 0 } = $$props;
  let { initializing = true } = $$props;
  let { loading = false } = $$props;
  let { extraQueryParams = {} } = $$props;
  let { autoRefresh = true } = $$props;
  let { runnableComponent = void 0 } = $$props;
  let { forceSchemaDisplay = false } = $$props;
  let { runnableClass = "" } = $$props;
  let { runnableStyle = "" } = $$props;
  let { doOnSuccess = void 0 } = $$props;
  let { doOnError = void 0 } = $$props;
  let { render } = $$props;
  let { recomputeIds = [] } = $$props;
  let { outputs } = $$props;
  let { extraKey = void 0 } = $$props;
  let { refreshOnStart = false } = $$props;
  let { errorHandledByComponent = false } = $$props;
  let { hasChildrens = false } = $$props;
  let { allowConcurentRequests = false } = $$props;
  let { onSuccess = () => {
  } } = $$props;
  function setArgs(value) {
    runnableComponent?.setArgs(value);
  }
  const { staticExporter, noBackend, componentControl, runnableComponents } = getContext("AppViewerContext");
  $$unsubscribe_staticExporter = subscribe(staticExporter, (value) => value);
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => $componentControl = value);
  $$unsubscribe_runnableComponents = subscribe(runnableComponents, (value) => $runnableComponents = value);
  if (noBackend && componentInput?.type == "runnable") {
    result = componentInput?.["value"];
  }
  if (noBackend) {
    initializing = false;
  }
  if (!(initializing && componentInput?.type === "runnable" && isRunnableDefined(componentInput))) {
    initializing = false;
  }
  function isRunnableDefined(componentInput2) {
    return isScriptByNameDefined(componentInput2) && componentInput2.runnable.inlineScript != void 0 || isScriptByPathDefined(componentInput2);
  }
  async function handleSideEffect(success, errorMessage) {
    const sideEffect = success ? doOnSuccess : doOnError;
    if (recomputeIds && success) {
      recomputeIds.forEach((id2) => $runnableComponents?.[id2]?.cb.map((cb) => cb()));
    }
    if (!sideEffect) return;
    if (sideEffect.selected == "none") return;
    switch (sideEffect.selected) {
      case "setTab":
        let setTab = sideEffect?.configuration.setTab?.setTab;
        if (!setTab) return;
        if (typeof setTab === "function") {
          setTab = await setTab();
        }
        if (Array.isArray(setTab)) {
          setTab.forEach((tab) => {
            if (tab) {
              const { id: id2, index } = tab;
              $componentControl[id2].setTab?.(index);
            }
          });
        }
        break;
      case "gotoUrl":
        let gotoUrl = sideEffect?.configuration?.gotoUrl?.url;
        if (!gotoUrl) return;
        if (typeof gotoUrl === "function") {
          gotoUrl = await gotoUrl();
        }
        const newTab = sideEffect?.configuration?.gotoUrl?.newTab;
        if (newTab) {
          window.open(gotoUrl, "_blank");
        } else {
          window.location.href = gotoUrl;
        }
        break;
      case "sendToast": {
        let message = sideEffect?.configuration?.sendToast?.message;
        if (!message) return;
        if (typeof message === "function") {
          message = await message();
        }
        sendUserToast(message, !success);
        break;
      }
      case "sendErrorToast": {
        let message = sideEffect?.configuration?.sendErrorToast?.message;
        const appendError = sideEffect?.configuration?.sendErrorToast?.appendError;
        if (!message) return;
        if (typeof message === "function") {
          message = await message();
        }
        sendUserToast(message, true, [], appendError ? errorMessage : void 0);
        break;
      }
      case "openModal": {
        const modalId = sideEffect?.configuration?.openModal?.modalId;
        if (modalId) {
          $componentControl[modalId].openModal?.();
        }
        break;
      }
      case "closeModal": {
        const modalId = sideEffect?.configuration?.closeModal?.modalId;
        if (!modalId) return;
        $componentControl[modalId].closeModal?.();
        break;
      }
      case "open": {
        const id2 = sideEffect?.configuration?.open?.id;
        if (!id2) return;
        $componentControl[id2].open?.();
        break;
      }
      case "close": {
        const id2 = sideEffect?.configuration?.close?.id;
        if (!id2) return;
        $componentControl[id2].close?.();
        break;
      }
      case "clearFiles": {
        const id2 = sideEffect?.configuration?.clearFiles?.id;
        if (!id2) return;
        $componentControl[id2].clearFiles?.();
        break;
      }
    }
  }
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.noInitialize === void 0 && $$bindings.noInitialize && noInitialize !== void 0) $$bindings.noInitialize(noInitialize);
  if ($$props.hideRefreshButton === void 0 && $$bindings.hideRefreshButton && hideRefreshButton !== void 0) $$bindings.hideRefreshButton(hideRefreshButton);
  if ($$props.overrideCallback === void 0 && $$bindings.overrideCallback && overrideCallback !== void 0) $$bindings.overrideCallback(overrideCallback);
  if ($$props.overrideAutoRefresh === void 0 && $$bindings.overrideAutoRefresh && overrideAutoRefresh !== void 0) $$bindings.overrideAutoRefresh(overrideAutoRefresh);
  if ($$props.replaceCallback === void 0 && $$bindings.replaceCallback && replaceCallback !== void 0) $$bindings.replaceCallback(replaceCallback);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.result === void 0 && $$bindings.result && result !== void 0) $$bindings.result(result);
  if ($$props.initializing === void 0 && $$bindings.initializing && initializing !== void 0) $$bindings.initializing(initializing);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
  if ($$props.extraQueryParams === void 0 && $$bindings.extraQueryParams && extraQueryParams !== void 0) $$bindings.extraQueryParams(extraQueryParams);
  if ($$props.autoRefresh === void 0 && $$bindings.autoRefresh && autoRefresh !== void 0) $$bindings.autoRefresh(autoRefresh);
  if ($$props.runnableComponent === void 0 && $$bindings.runnableComponent && runnableComponent !== void 0) $$bindings.runnableComponent(runnableComponent);
  if ($$props.forceSchemaDisplay === void 0 && $$bindings.forceSchemaDisplay && forceSchemaDisplay !== void 0) $$bindings.forceSchemaDisplay(forceSchemaDisplay);
  if ($$props.runnableClass === void 0 && $$bindings.runnableClass && runnableClass !== void 0) $$bindings.runnableClass(runnableClass);
  if ($$props.runnableStyle === void 0 && $$bindings.runnableStyle && runnableStyle !== void 0) $$bindings.runnableStyle(runnableStyle);
  if ($$props.doOnSuccess === void 0 && $$bindings.doOnSuccess && doOnSuccess !== void 0) $$bindings.doOnSuccess(doOnSuccess);
  if ($$props.doOnError === void 0 && $$bindings.doOnError && doOnError !== void 0) $$bindings.doOnError(doOnError);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.recomputeIds === void 0 && $$bindings.recomputeIds && recomputeIds !== void 0) $$bindings.recomputeIds(recomputeIds);
  if ($$props.outputs === void 0 && $$bindings.outputs && outputs !== void 0) $$bindings.outputs(outputs);
  if ($$props.extraKey === void 0 && $$bindings.extraKey && extraKey !== void 0) $$bindings.extraKey(extraKey);
  if ($$props.refreshOnStart === void 0 && $$bindings.refreshOnStart && refreshOnStart !== void 0) $$bindings.refreshOnStart(refreshOnStart);
  if ($$props.errorHandledByComponent === void 0 && $$bindings.errorHandledByComponent && errorHandledByComponent !== void 0) $$bindings.errorHandledByComponent(errorHandledByComponent);
  if ($$props.hasChildrens === void 0 && $$bindings.hasChildrens && hasChildrens !== void 0) $$bindings.hasChildrens(hasChildrens);
  if ($$props.allowConcurentRequests === void 0 && $$bindings.allowConcurentRequests && allowConcurentRequests !== void 0) $$bindings.allowConcurentRequests(allowConcurentRequests);
  if ($$props.onSuccess === void 0 && $$bindings.onSuccess && onSuccess !== void 0) $$bindings.onSuccess(onSuccess);
  if ($$props.setArgs === void 0 && $$bindings.setArgs && setArgs !== void 0) $$bindings.setArgs(setArgs);
  if ($$props.handleSideEffect === void 0 && $$bindings.handleSideEffect && handleSideEffect !== void 0) $$bindings.handleSideEffect(handleSideEffect);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (!autoRefresh && componentInput?.type === "runnable" && componentInput.autoRefresh) {
        componentInput.autoRefresh = false;
        componentInput.recomputeOnInputChanged = false;
      }
    }
    $$rendered = `${componentInput === void 0 ? `${!noInitialize ? `${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})}` : ``} ${slots.default ? slots.default({}) : ``}` : `${componentInput.type === "runnable" && isRunnableDefined(componentInput) ? `${validate_component(RunnableComponent, "RunnableComponent").$$render(
      $$result,
      {
        noInitialize,
        allowConcurentRequests,
        refreshOnStart,
        extraKey,
        hasChildrens,
        replaceCallback,
        fields: componentInput.fields,
        runnable: componentInput.runnable,
        hideRefreshButton: componentInput.hideRefreshButton ?? hideRefreshButton,
        transformer: componentInput.transformer,
        autoRefresh,
        overrideCallback,
        overrideAutoRefresh,
        recomputableByRefreshButton: componentInput.autoRefresh ?? true,
        id,
        extraQueryParams,
        forceSchemaDisplay,
        initializing,
        wrapperClass: runnableClass,
        wrapperStyle: runnableStyle,
        render,
        outputs,
        errorHandledByComponent,
        loading,
        this: runnableComponent,
        result,
        recomputeOnInputChanged: componentInput.recomputeOnInputChanged
      },
      {
        loading: ($$value) => {
          loading = $$value;
          $$settled = false;
        },
        this: ($$value) => {
          runnableComponent = $$value;
          $$settled = false;
        },
        result: ($$value) => {
          result = $$value;
          $$settled = false;
        },
        recomputeOnInputChanged: ($$value) => {
          componentInput.recomputeOnInputChanged = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}` : `${validate_component(NonRunnableComponent, "NonRunnableComponent").$$render(
      $$result,
      {
        noInitialize,
        hasChildrens,
        render,
        id,
        componentInput,
        result
      },
      {
        result: ($$value) => {
          result = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`}`}`;
  } while (!$$settled);
  $$unsubscribe_componentControl();
  $$unsubscribe_runnableComponents();
  $$unsubscribe_staticExporter();
  return $$rendered;
});
const AppSchemaForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $componentControl, $$unsubscribe_componentControl;
  let $worldStore, $$unsubscribe_worldStore;
  let $$unsubscribe_connectingInput;
  let { id } = $$props;
  let { componentInput } = $$props;
  let { initializing = void 0 } = $$props;
  let { render } = $$props;
  let { configuration } = $$props;
  let { customCss = void 0 } = $$props;
  const { worldStore, connectingInput, app, selectedComponent, componentControl } = getContext("AppViewerContext");
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => value);
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => $componentControl = value);
  const iterContext = getContext("ListWrapperContext");
  const listInputs = getContext("ListInputs");
  const outputs = initOutput($worldStore, id, {
    result: void 0,
    loading: false,
    valid: true,
    values: {}
  });
  let result = void 0;
  let args = {};
  function handleArgsChange() {
    const newArgs = {};
    for (const key in args) {
      if (result?.properties[key]) {
        newArgs[key] = args[key];
      }
    }
    outputs.values.set(newArgs, true);
    if (iterContext && listInputs) {
      listInputs.set(id, newArgs);
    }
  }
  onDestroy(() => {
    listInputs?.remove(id);
  });
  let schemaForm;
  set_store_value(
    componentControl,
    $componentControl[id] = {
      setValue(nvalue) {
        args = nvalue;
      },
      invalidate(key, error) {
        schemaForm?.invalidate(key, error);
      },
      validateAll() {
        schemaForm?.validateAll();
      },
      validate(key) {
        schemaForm?.validate(key);
      }
    },
    $componentControl
  );
  let css2 = initCss($app.css?.schemaformcomponent, customCss);
  const resolvedConfig = initConfig(components["schemaformcomponent"].initialData.configuration, configuration);
  let valid = true;
  let previousDefault = resolvedConfig.defaultValues;
  function onDefaultChange() {
    previousDefault = structuredClone(resolvedConfig.defaultValues);
    args = previousDefault ?? {};
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.initializing === void 0 && $$bindings.initializing && initializing !== void 0) $$bindings.initializing(initializing);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    args && handleArgsChange();
    {
      outputs.valid.set(valid);
    }
    resolvedConfig.defaultValues && !deepEqual(previousDefault, resolvedConfig.defaultValues) && onDefaultChange();
    $$rendered = `${each(Object.keys(components["schemaformcomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.schemaformcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(RunnableWrapper, "RunnableWrapper").$$render(
      $$result,
      {
        outputs,
        render,
        autoRefresh: true,
        componentInput,
        id,
        initializing,
        result
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        },
        result: ($$value) => {
          result = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${result && Object.keys(result?.properties ?? {}).length > 0 ? `<div${add_attribute("class", twMerge("p-2 overflow-auto h-full", css2?.container?.class, "wm-schema-form"), 0)}${add_attribute("style", css2?.container?.style, 0)}>${validate_component(LightweightSchemaForm, "LightweightSchemaForm").$$render(
            $$result,
            {
              defaultValues: resolvedConfig.defaultValues,
              dynamicEnums: resolvedConfig.dynamicEnums,
              schema: result,
              displayType: Boolean(resolvedConfig.displayType),
              largeGap: Boolean(resolvedConfig.largeGap),
              css: css2,
              isValid: valid,
              args,
              this: schemaForm
            },
            {
              isValid: ($$value) => {
                valid = $$value;
                $$settled = false;
              },
              args: ($$value) => {
                args = $$value;
                $$settled = false;
              },
              this: ($$value) => {
                schemaForm = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div>` : `<p class="m-2 italic" data-svelte-h="svelte-pxefzn">Empty form (no property)</p>`}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_componentControl();
  $$unsubscribe_worldStore();
  $$unsubscribe_connectingInput();
  return $$rendered;
});
const Stepper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tabs } = $$props;
  let { selectedIndex = 0 } = $$props;
  let { maxReachedIndex = -1 } = $$props;
  let { statusByStep = [] } = $$props;
  let { hasValidations = false } = $$props;
  let { allowStepNavigation = false } = $$props;
  createEventDispatcher();
  function getStepColor(index, selectedIndex2, statusByStep2, maxReachedIndex2) {
    if (!hasValidations) {
      if (index === selectedIndex2) {
        return "bg-blue-500 text-white";
      } else if (index > maxReachedIndex2) {
        return "bg-gray-200";
      } else {
        return "bg-blue-200";
      }
    }
    const current = index === selectedIndex2;
    if (statusByStep2[index] === "success") {
      return current ? "border-green-500 border bg-green-200 text-green-600" : "border-green-500 border";
    } else if (statusByStep2[index] === "error") {
      return current ? "border-red-500 border bg-red-200 text-red-600" : "border-red-500 bg-red-100 border";
    } else {
      if (index <= maxReachedIndex2) {
        return current ? "border-blue-500 border bg-blue-200 text-blue-600" : "border-blue-500 border";
      } else {
        return current ? "border-gray-500 border bg-gray-200 text-tertiary" : "border-gray-500 border";
      }
    }
  }
  if ($$props.tabs === void 0 && $$bindings.tabs && tabs !== void 0) $$bindings.tabs(tabs);
  if ($$props.selectedIndex === void 0 && $$bindings.selectedIndex && selectedIndex !== void 0) $$bindings.selectedIndex(selectedIndex);
  if ($$props.maxReachedIndex === void 0 && $$bindings.maxReachedIndex && maxReachedIndex !== void 0) $$bindings.maxReachedIndex(maxReachedIndex);
  if ($$props.statusByStep === void 0 && $$bindings.statusByStep && statusByStep !== void 0) $$bindings.statusByStep(statusByStep);
  if ($$props.hasValidations === void 0 && $$bindings.hasValidations && hasValidations !== void 0) $$bindings.hasValidations(hasValidations);
  if ($$props.allowStepNavigation === void 0 && $$bindings.allowStepNavigation && allowStepNavigation !== void 0) $$bindings.allowStepNavigation(allowStepNavigation);
  return `<div class="flex justify-between"><ol class="relative z-20 flex justify-between items-centers text-sm font-medium text-tertiary">${each(tabs ?? [], (step, index) => {
    return ` <li${add_attribute(
      "class",
      classNames("flex items-center gap-2 px-2 py-1 hover:bg-gray-1200 rounded-md m-0.5", index <= maxReachedIndex || allowStepNavigation ? "cursor-pointer" : "cursor-not-allowed"),
      0
    )}>${statusByStep[index] === "pending" ? `${validate_component(Loader_2, "Loader2").$$render($$result, { class: "h-6 w-6 animate-spin" }, {}, {})}` : `<span class="${[
      escape(classNames("h-6 w-6 rounded-full flex items-center justify-center text-xs", getStepColor(index, selectedIndex, statusByStep, maxReachedIndex)), true),
      selectedIndex === index ? "font-bold" : ""
    ].join(" ").trim()}">${escape(index + 1)} </span>`} <span${add_attribute(
      "class",
      classNames("hidden sm:block", selectedIndex === index ? "font-semibold text-primary" : "font-normal text-tertiary"),
      0
    )}>${escape(step)} </span></li> ${index !== (tabs ?? []).length - 1 ? `<li class="flex items-center" data-svelte-h="svelte-aqexm9"><div class="h-0.5 w-4 bg-blue-200"></div> </li>` : ``}`;
  })}</ol></div>`;
});
const AppStepper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let lastStep;
  let $app, $$unsubscribe_app;
  let $componentControl, $$unsubscribe_componentControl;
  let $focusedGrid, $$unsubscribe_focusedGrid;
  let $worldStore, $$unsubscribe_worldStore;
  let $$unsubscribe_mode;
  let $$unsubscribe_connectingInput;
  let $$unsubscribe_selectedComponent;
  let $$unsubscribe_runnableComponents;
  let { id } = $$props;
  let { componentContainerHeight } = $$props;
  let { tabs } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  let { recomputeIds = void 0 } = $$props;
  let { extraQueryParams = {} } = $$props;
  let { componentInput } = $$props;
  let { onNext = void 0 } = $$props;
  let { onPrevious = void 0 } = $$props;
  const { app, worldStore, focusedGrid, selectedComponent, componentControl, connectingInput, mode, runnableComponents } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_focusedGrid = subscribe(focusedGrid, (value) => $focusedGrid = value);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => value);
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => $componentControl = value);
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => value);
  $$unsubscribe_mode = subscribe(mode, (value) => value);
  $$unsubscribe_runnableComponents = subscribe(runnableComponents, (value) => value);
  let selected2 = tabs[0];
  let tabHeight = 0;
  let footerHeight = 0;
  let runnableComponent;
  let selectedIndex = tabs?.indexOf(selected2) ?? -1;
  let maxReachedIndex = -1;
  let statusByStep = [];
  let debugMode = false;
  let outputs = initOutput($worldStore, id, {
    currentStepIndex: 0,
    result: void 0,
    loading: false,
    lastAction: void 0
  });
  async function handleTabSelection() {
    if (runnableComponent && !debugMode) {
      await runnableComponent?.runComponent();
    }
    selectedIndex = tabs?.indexOf(selected2);
    if (selectedIndex > maxReachedIndex) {
      maxReachedIndex = selectedIndex;
    }
    outputs?.currentStepIndex.set(selectedIndex);
    if ($focusedGrid?.parentComponentId != id || $focusedGrid?.subGridIndex != selectedIndex) {
      set_store_value(
        focusedGrid,
        $focusedGrid = {
          parentComponentId: id,
          subGridIndex: selectedIndex
        },
        $focusedGrid
      );
    }
  }
  let result = void 0;
  set_store_value(
    componentControl,
    $componentControl[id] = {
      left: () => {
        const index = tabs.indexOf(selected2);
        if (index > 0) {
          selected2 = tabs[index - 1];
          return true;
        }
        return false;
      },
      right: () => {
        const index = tabs.indexOf(selected2);
        if (index < tabs.length - 1) {
          selected2 = tabs[index + 1];
          return true;
        }
        return false;
      },
      setTab: (tab) => {
        debugMode = tab >= 0;
        if (debugMode) {
          selected2 = tabs[tab];
        } else {
          selected2 = tabs[0];
        }
        handleTabSelection();
      }
    },
    $componentControl
  );
  let css2 = initCss($app.css?.steppercomponent, customCss);
  let directionClicked = void 0;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.componentContainerHeight === void 0 && $$bindings.componentContainerHeight && componentContainerHeight !== void 0) $$bindings.componentContainerHeight(componentContainerHeight);
  if ($$props.tabs === void 0 && $$bindings.tabs && tabs !== void 0) $$bindings.tabs(tabs);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.recomputeIds === void 0 && $$bindings.recomputeIds && recomputeIds !== void 0) $$bindings.recomputeIds(recomputeIds);
  if ($$props.extraQueryParams === void 0 && $$bindings.extraQueryParams && extraQueryParams !== void 0) $$bindings.extraQueryParams(extraQueryParams);
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.onNext === void 0 && $$bindings.onNext && onNext !== void 0) $$bindings.onNext(onNext);
  if ($$props.onPrevious === void 0 && $$bindings.onPrevious && onPrevious !== void 0) $$bindings.onPrevious(onPrevious);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    selected2 != void 0 && handleTabSelection();
    lastStep = selectedIndex === tabs.length - 1;
    $$rendered = `${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.steppercomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${validate_component(RunnableWrapper, "RunnableWrapper").$$render(
      $$result,
      {
        hasChildrens: true,
        recomputeIds,
        render,
        componentInput,
        id,
        extraQueryParams,
        autoRefresh: false,
        forceSchemaDisplay: true,
        runnableClass: "!block",
        outputs,
        errorHandledByComponent: true,
        runnableComponent,
        result
      },
      {
        runnableComponent: ($$value) => {
          runnableComponent = $$value;
          $$settled = false;
        },
        result: ($$value) => {
          result = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="w-full overflow-auto"><div>${validate_component(Stepper, "Stepper").$$render(
            $$result,
            {
              tabs,
              selectedIndex,
              maxReachedIndex,
              statusByStep,
              hasValidations: Boolean(runnableComponent)
            },
            {},
            {}
          )}</div> <div class="w-full">${$app.subgrids ? `${each(tabs ?? [], (_res, i) => {
            return `${validate_component(SubGridEditor, "SubGridEditor").$$render(
              $$result,
              {
                id,
                visible: render && i === selectedIndex,
                subGridId: `${id}-${i}`,
                class: twMerge(css2?.container?.class, "wm-stepper"),
                style: css2?.container?.style,
                containerHeight: componentContainerHeight - tabHeight - footerHeight
              },
              {},
              {}
            )}`;
          })}` : ``}</div> <div><div class="flex justify-between h-10 p-2"><div class="flex items-center gap-2"><span class="text-sm font-medium text-tertiary">Step ${escape(selectedIndex + 1)} of ${escape(tabs.length)}</span></div> <div class="flex items-center gap-2">${validate_component(Button, "Button").$$render(
            $$result,
            {
              size: "xs",
              color: "light",
              variant: "contained",
              disabled: selectedIndex === 0
            },
            {},
            {
              default: () => {
                return `<div class="flex flex-row gap-2">${statusByStep[selectedIndex] === "pending" && directionClicked === "left" ? `${validate_component(Loader_2, "Loader2").$$render($$result, { class: "w-4 h-4 animate-spin" }, {}, {})}` : `${validate_component(Arrow_left, "ArrowLeftIcon").$$render($$result, { class: "w-4 h-4" }, {}, {})}`}
							Previous</div>`;
              }
            }
          )} ${validate_component(Button, "Button").$$render(
            $$result,
            {
              size: "xs",
              color: "dark",
              variant: "contained",
              disabled: lastStep
            },
            {},
            {
              default: () => {
                return `<div class="flex flex-row gap-2">Next
							${statusByStep[selectedIndex] === "pending" && directionClicked === "right" ? `${validate_component(Loader_2, "Loader2").$$render($$result, { class: "w-4 h-4 animate-spin" }, {}, {})}` : `${validate_component(Arrow_right, "ArrowRightIcon").$$render($$result, { class: "w-4 h-4" }, {}, {})}`}</div>`;
              }
            }
          )}</div></div></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_componentControl();
  $$unsubscribe_focusedGrid();
  $$unsubscribe_worldStore();
  $$unsubscribe_mode();
  $$unsubscribe_connectingInput();
  $$unsubscribe_selectedComponent();
  $$unsubscribe_runnableComponents();
  return $$rendered;
});
const AppSelectTab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $componentControl, $$unsubscribe_componentControl;
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  let { configuration } = $$props;
  let { horizontalAlignment = void 0 } = $$props;
  let { verticalAlignment = void 0 } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  const { app, worldStore, componentControl } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => $componentControl = value);
  const resolvedConfig = initConfig(components["selecttabcomponent"].initialData.configuration, configuration);
  const outputs = initOutput($worldStore, id, { result: void 0 });
  const iterContext = getContext("ListWrapperContext");
  const listInputs = getContext("ListInputs");
  let selected2 = "";
  onDestroy(() => {
    listInputs?.remove(id);
  });
  set_store_value(
    componentControl,
    $componentControl[id] = {
      setValue(nvalue) {
        selected2 = nvalue;
      },
      setTab(index) {
        selected2 = resolvedConfig.items?.[index]?.value;
      }
    },
    $componentControl
  );
  function setDefaultValue() {
    if (resolvedConfig.defaultValue === void 0) {
      selected2 = resolvedConfig.items?.[0]?.value;
    } else if (resolvedConfig.defaultValue) {
      selected2 = resolvedConfig.defaultValue;
    }
  }
  function handleSelection(value) {
    outputs?.result.set(value);
    if (iterContext && listInputs) {
      listInputs.set(id, value);
    }
  }
  let css2 = initCss($app.css?.selecttabcomponent, customCss);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.horizontalAlignment === void 0 && $$bindings.horizontalAlignment && horizontalAlignment !== void 0) $$bindings.horizontalAlignment(horizontalAlignment);
  if ($$props.verticalAlignment === void 0 && $$bindings.verticalAlignment && verticalAlignment !== void 0) $$bindings.verticalAlignment(verticalAlignment);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    selected2 === "" && resolvedConfig && setDefaultValue();
    selected2 && handleSelection(selected2);
    $$rendered = `${each(Object.keys(components["selecttabcomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.selecttabcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${validate_component(AlignWrapper, "AlignWrapper").$$render(
      $$result,
      {
        render,
        horizontalAlignment,
        verticalAlignment
      },
      {},
      {
        default: () => {
          return `<div class="w-full">${validate_component(Tabs, "Tabs").$$render(
            $$result,
            {
              class: twMerge(css2?.tabRow?.class, "wm-select-tab-row"),
              style: css2?.tabRow?.style,
              selected: selected2
            },
            {
              selected: ($$value) => {
                selected2 = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${each(resolvedConfig?.items ?? [], (item) => {
                  return `${validate_component(Tab, "Tab").$$render(
                    $$result,
                    {
                      value: item.value,
                      class: twMerge(css2?.allTabs?.class, "wm-select-tab"),
                      style: css2?.allTabs?.style,
                      selectedClass: twMerge(css2?.selectedTab?.class, "wm-select-tab-selected"),
                      selectedStyle: css2?.selectedTab?.style,
                      size: resolvedConfig?.tabSize
                    },
                    {},
                    {
                      default: () => {
                        return `<span class="font-semibold text-md">${escape(item.label)}</span> `;
                      }
                    }
                  )}`;
                })}`;
              }
            }
          )}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_componentControl();
  $$unsubscribe_worldStore();
  return $$rendered;
});
const AppConditionalWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $componentControl, $$unsubscribe_componentControl;
  let $runnableComponents, $$unsubscribe_runnableComponents;
  let $focusedGrid, $$unsubscribe_focusedGrid;
  let $app, $$unsubscribe_app;
  let $worldStore, $$unsubscribe_worldStore;
  let $$unsubscribe_connectingInput;
  let $$unsubscribe_selectedComponent;
  let { id } = $$props;
  let { componentContainerHeight } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  let { conditions } = $$props;
  let { onTabChange = void 0 } = $$props;
  const { app, focusedGrid, selectedComponent, worldStore, connectingInput, componentControl, runnableComponents } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_focusedGrid = subscribe(focusedGrid, (value) => $focusedGrid = value);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => value);
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => $componentControl = value);
  $$unsubscribe_runnableComponents = subscribe(runnableComponents, (value) => $runnableComponents = value);
  const outputs = initOutput($worldStore, id, { conditions: [], selectedTabIndex: 0 });
  let css2 = initCss($app.css?.conditionalwrapper, customCss);
  let resolvedConditions = [];
  let selectedConditionIndex = 0;
  function handleResolvedConditions() {
    const slicedArray = resolvedConditions.slice(0, conditions.length);
    const firstTrueIndex = slicedArray.findIndex((c) => c);
    outputs.conditions.set(slicedArray, true);
    setSelectedIndex(firstTrueIndex);
  }
  function setSelectedIndex(index) {
    set_store_value(
      focusedGrid,
      $focusedGrid = {
        parentComponentId: id,
        subGridIndex: index
      },
      $focusedGrid
    );
    selectedConditionIndex = index;
    outputs.selectedTabIndex.set(index);
    onTabChange?.forEach((id2) => $runnableComponents?.[id2]?.cb?.forEach((cb) => cb?.()));
  }
  set_store_value(
    componentControl,
    $componentControl[id] = {
      setTab: (conditionIndex) => {
        if (conditionIndex === -1) {
          handleResolvedConditions();
        } else {
          setSelectedIndex(conditionIndex);
        }
      }
    },
    $componentControl
  );
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.componentContainerHeight === void 0 && $$bindings.componentContainerHeight && componentContainerHeight !== void 0) $$bindings.componentContainerHeight(componentContainerHeight);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.conditions === void 0 && $$bindings.conditions && conditions !== void 0) $$bindings.conditions(conditions);
  if ($$props.onTabChange === void 0 && $$bindings.onTabChange && onTabChange !== void 0) $$bindings.onTabChange(onTabChange);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    resolvedConditions && handleResolvedConditions();
    $$rendered = `${each(conditions ?? [], (condition, index) => {
      return `${validate_component(InputValue, "InputValue").$$render(
        $$result,
        {
          key: "condition" + (index + 1),
          id,
          input: condition,
          value: resolvedConditions[index]
        },
        {
          value: ($$value) => {
            resolvedConditions[index] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.conditionalwrapper,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} <div class="w-full h-full">${$app.subgrids ? `${each(resolvedConditions ?? [], (_res, i) => {
      return `${validate_component(SubGridEditor, "SubGridEditor").$$render(
        $$result,
        {
          visible: render && i == selectedConditionIndex,
          id,
          class: twMerge(css2?.container?.class, "wm-conditional-tabs"),
          style: css2?.container?.style,
          subGridId: `${id}-${i}`,
          containerHeight: componentContainerHeight
        },
        {},
        {}
      )}`;
    })}` : ``}</div>`;
  } while (!$$settled);
  $$unsubscribe_componentControl();
  $$unsubscribe_runnableComponents();
  $$unsubscribe_focusedGrid();
  $$unsubscribe_app();
  $$unsubscribe_worldStore();
  $$unsubscribe_connectingInput();
  $$unsubscribe_selectedComponent();
  return $$rendered;
});
const AppSelectStep = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $componentControl, $$unsubscribe_componentControl;
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  let { configuration } = $$props;
  let { horizontalAlignment = void 0 } = $$props;
  let { verticalAlignment = void 0 } = $$props;
  let { render } = $$props;
  let { customCss = void 0 } = $$props;
  const { app, worldStore, componentControl } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => $componentControl = value);
  const resolvedConfig = initConfig(components["selectstepcomponent"].initialData.configuration, configuration);
  const outputs = initOutput($worldStore, id, { result: void 0 });
  let selected2 = "";
  let selectedIndex = 0;
  set_store_value(
    componentControl,
    $componentControl[id] = {
      setValue(nvalue) {
        selected2 = nvalue;
        selectedIndex = resolvedConfig.items.findIndex((item) => item.value === nvalue);
      },
      setTab(index) {
        selected2 = resolvedConfig.items?.[index]?.value;
        selectedIndex = index;
      }
    },
    $componentControl
  );
  function setDefaultValue() {
    if (resolvedConfig.defaultValue != void 0) {
      selectedIndex = resolvedConfig.items.findIndex((item) => item.value === resolvedConfig.defaultValue);
    }
    if (selectedIndex === -1 || resolvedConfig.defaultValue == void 0) {
      selected2 = resolvedConfig.items[0].value;
    } else if (resolvedConfig.defaultValue) {
      selected2 = resolvedConfig.items[selectedIndex].value;
    }
  }
  function handleSelection(value) {
    outputs?.result.set(value);
  }
  let css2 = initCss($app.css?.selectstepcomponent, customCss);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.horizontalAlignment === void 0 && $$bindings.horizontalAlignment && horizontalAlignment !== void 0) $$bindings.horizontalAlignment(horizontalAlignment);
  if ($$props.verticalAlignment === void 0 && $$bindings.verticalAlignment && verticalAlignment !== void 0) $$bindings.verticalAlignment(verticalAlignment);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    resolvedConfig.defaultValue != void 0 && setDefaultValue();
    selected2 && handleSelection(selected2);
    $$rendered = `${each(Object.keys(components["selectstepcomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.selectstepcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${validate_component(AlignWrapper, "AlignWrapper").$$render(
      $$result,
      {
        render,
        horizontalAlignment,
        verticalAlignment,
        class: twMerge(css2?.container?.class, "wm-select-step"),
        style: css2?.container?.style
      },
      {},
      {
        default: () => {
          return `<div class="w-full">${validate_component(Stepper, "Stepper").$$render(
            $$result,
            {
              tabs: (resolvedConfig?.items ?? []).map((item) => item.label),
              hasValidations: false,
              allowStepNavigation: true,
              selectedIndex
            },
            {},
            {}
          )}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_componentControl();
  $$unsubscribe_worldStore();
  return $$rendered;
});
function toKebabCase(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z0-9])([A-Z])/g, "$1-$2").replace(/([a-z])([0-9])/g, "$1-$2").toLowerCase();
}
async function loadIcon(name, parent, size, strokeWidth, color) {
  try {
    if (name) {
      await fetch(
        `https://cdn.jsdelivr.net/npm/lucide-static@0.367.0/icons/${toKebabCase(name)}.svg`
      ).then((response) => response.text()).then((svg) => parent.innerHTML = svg);
      let elem = parent.children?.[0];
      if (elem) {
        elem.setAttribute("width", size?.toString() ?? "24");
        elem.setAttribute("height", size?.toString() ?? "24");
        if (strokeWidth) {
          elem.setAttribute("stroke-width", strokeWidth.toString());
        }
        if (color) {
          elem.setAttribute("stroke", color);
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
}
const ComponentErrorHandler = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { hasError = false } = $$props;
  if ($$props.hasError === void 0 && $$bindings.hasError && hasError !== void 0) $$bindings.hasError(hasError);
  return `${hasError ? `<div${add_attribute("class", classNames("bg-red-100 w-full h-full flex items-center justify-center text-red-500"), 0)}>${validate_component(Popover, "Popover").$$render(
    $$result,
    {
      notClickable: true,
      placement: "bottom",
      popupClass: "!bg-surface border w-96"
    },
    {},
    {
      text: () => {
        return `<span slot="text"><div class="bg-surface">${validate_component(Alert, "Alert").$$render(
          $$result,
          {
            type: "error",
            title: "Error during execution"
          },
          {},
          {
            default: () => {
              return `<div class="flex flex-col gap-2" data-svelte-h="svelte-1qyi0ac">One of the configuration of the component is invalid. Please check the configuration
							and try again.</div>`;
            }
          }
        )}</div></span>`;
      },
      default: () => {
        return `${validate_component(Bug, "Bug").$$render($$result, { size: 14 }, {}, {})}`;
      }
    }
  )}</div>` : `${slots.default ? slots.default({}) : ``}`}`;
});
const AppDownload = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  let { configuration } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  let { horizontalAlignment = void 0 } = $$props;
  let { verticalAlignment = void 0 } = $$props;
  let { noWFull = false } = $$props;
  const resolvedConfig = initConfig(components["downloadcomponent"].initialData.configuration, configuration);
  const { app, worldStore } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  initOutput($worldStore, id, {});
  let beforeIconComponent;
  let afterIconComponent;
  async function handleBeforeIcon() {
    if (resolvedConfig.beforeIcon) {
      beforeIconComponent = await loadIcon(resolvedConfig.beforeIcon, beforeIconComponent, 14, void 0, void 0);
    }
  }
  async function handleAfterIcon() {
    if (resolvedConfig.afterIcon) {
      afterIconComponent = await loadIcon(resolvedConfig.afterIcon, afterIconComponent, 14, void 0, void 0);
    }
  }
  let css2 = initCss($app.css?.downloadcomponent, customCss);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.horizontalAlignment === void 0 && $$bindings.horizontalAlignment && horizontalAlignment !== void 0) $$bindings.horizontalAlignment(horizontalAlignment);
  if ($$props.verticalAlignment === void 0 && $$bindings.verticalAlignment && verticalAlignment !== void 0) $$bindings.verticalAlignment(verticalAlignment);
  if ($$props.noWFull === void 0 && $$bindings.noWFull && noWFull !== void 0) $$bindings.noWFull(noWFull);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    resolvedConfig.beforeIcon && beforeIconComponent && handleBeforeIcon();
    resolvedConfig.afterIcon && afterIconComponent && handleAfterIcon();
    $$rendered = `${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${each(Object.keys(components["downloadcomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.downloadcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${render ? `${validate_component(AlignWrapper, "AlignWrapper").$$render(
      $$result,
      {
        noWFull,
        horizontalAlignment,
        verticalAlignment
      },
      {},
      {
        default: () => {
          return `${validate_component(ComponentErrorHandler, "ComponentErrorHandler").$$render(
            $$result,
            {
              hasError: resolvedConfig?.source != void 0 && typeof resolvedConfig.source !== "string"
            },
            {},
            {
              default: () => {
                return `${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    btnClasses: twMerge(css2?.button?.class, "wm-button", "wm-download-button", resolvedConfig.fillContainer ? "w-full h-full" : ""),
                    wrapperClasses: twMerge("wm-button-container", "wm-download-button-container", resolvedConfig.fillContainer ? "w-full h-full" : ""),
                    style: css2?.button?.style,
                    disabled: resolvedConfig.source == void 0,
                    size: resolvedConfig.size,
                    color: resolvedConfig.color,
                    download: resolvedConfig.filename,
                    href: transformBareBase64IfNecessary(resolvedConfig.source),
                    target: "_self",
                    nonCaptureEvent: true
                  },
                  {},
                  {
                    default: () => {
                      return `<span class="truncate inline-flex gap-2 items-center">${resolvedConfig.beforeIcon ? `<div class="min-w-4"${add_attribute("this", beforeIconComponent, 0)}></div>` : ``} ${resolvedConfig.label && resolvedConfig.label?.length > 0 ? `<div>${escape(resolvedConfig.label)}</div>` : ``} ${resolvedConfig.afterIcon ? `<div class="min-w-4"${add_attribute("this", afterIconComponent, 0)}></div>` : ``}</span>`;
                    }
                  }
                )}`;
              }
            }
          )}`;
        }
      }
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_worldStore();
  return $$rendered;
});
const AppLogsComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(AlignWrapper, "AlignWrapper").$$render(
    $$result,
    {
      verticalAlignment: "center",
      horizontalAlignment: "center"
    },
    {},
    {
      default: () => {
        return `${validate_component(Alert, "Alert").$$render(
          $$result,
          {
            title: "Deprecated component",
            documentationLink: "https://www.windmill.dev/docs/apps/app_configuration_settings/log_display",
            tooltip: "See documentation of the new component:",
            type: "error"
          },
          {},
          {
            default: () => {
              return `This component is deprecated and has been removed. Please use the Log by Job Id component
		instead.`;
            }
          }
        )}`;
      }
    }
  )}`;
});
const AppFlowStatusComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(AlignWrapper, "AlignWrapper").$$render(
    $$result,
    {
      verticalAlignment: "center",
      horizontalAlignment: "center"
    },
    {},
    {
      default: () => {
        return `${validate_component(Alert, "Alert").$$render(
          $$result,
          {
            title: "Deprecated component",
            documentationLink: "https://www.windmill.dev/docs/apps/app_configuration_settings/flow_status",
            tooltip: "See documentation of the new component:",
            type: "error"
          },
          {},
          {
            default: () => {
              return `This component is deprecated and has been removed. Please use the Flow status by Job Id
		component instead.`;
            }
          }
        )}`;
      }
    }
  )}`;
});
const Doughnut = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  Chart.register(DoughnutController);
  let { chart = null } = $$props;
  let props;
  let baseChartRef;
  useForwardEvents();
  if ($$props.chart === void 0 && $$bindings.chart && chart !== void 0) $$bindings.chart(chart);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    props = $$props;
    $$rendered = `${validate_component(Chart$1, "Chart").$$render(
      $$result,
      Object.assign({}, { type: "doughnut" }, props, { this: baseChartRef }, { chart }),
      {
        this: ($$value) => {
          baseChartRef = $$value;
          $$settled = false;
        },
        chart: ($$value) => {
          chart = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Pie = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  Chart.register(PieController);
  let { chart = null } = $$props;
  let props;
  let baseChartRef;
  useForwardEvents();
  if ($$props.chart === void 0 && $$bindings.chart && chart !== void 0) $$bindings.chart(chart);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    props = $$props;
    $$rendered = `${validate_component(Chart$1, "Chart").$$render(
      $$result,
      Object.assign({}, { type: "pie" }, props, { this: baseChartRef }, { chart }),
      {
        this: ($$value) => {
          baseChartRef = $$value;
          $$settled = false;
        },
        chart: ($$value) => {
          chart = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Bar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  Chart.register(BarController);
  let { chart = null } = $$props;
  let props;
  let baseChartRef;
  useForwardEvents();
  if ($$props.chart === void 0 && $$bindings.chart && chart !== void 0) $$bindings.chart(chart);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    props = $$props;
    $$rendered = `${validate_component(Chart$1, "Chart").$$render(
      $$result,
      Object.assign({}, { type: "bar" }, props, { this: baseChartRef }, { chart }),
      {
        this: ($$value) => {
          baseChartRef = $$value;
          $$settled = false;
        },
        chart: ($$value) => {
          chart = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const AppChartJs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let options;
  let $app, $$unsubscribe_app;
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  let { componentInput } = $$props;
  let { configuration } = $$props;
  let { initializing = void 0 } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  const { app, worldStore } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  const outputs = initOutput($worldStore, id, { result: void 0, loading: false });
  Chart.register(...registerables);
  let result = void 0;
  const resolvedConfig = initConfig(components["chartjscomponent"].initialData.configuration, configuration);
  let css2 = initCss($app.css?.chartjscomponent, customCss);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.initializing === void 0 && $$bindings.initializing && initializing !== void 0) $$bindings.initializing(initializing);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    options = {
      responsive: true,
      animation: false,
      maintainAspectRatio: false,
      ...resolvedConfig.options ?? {}
    };
    $$rendered = `${each(Object.keys(components["chartjscomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.chartjscomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(RunnableWrapper, "RunnableWrapper").$$render(
      $$result,
      {
        outputs,
        render,
        autoRefresh: true,
        componentInput,
        id,
        initializing,
        result
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        },
        result: ($$value) => {
          result = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div${add_attribute("class", twMerge("w-full h-full", css2?.container?.class, "wm-chartjs"), 0)}${add_attribute("style", css2?.container?.style ?? "", 0)}>${result && resolvedConfig.type ? `${validate_component(Chart$1, "Chart").$$render(
            $$result,
            {
              type: resolvedConfig.type,
              data: result,
              options
            },
            {},
            {}
          )}` : ``}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_worldStore();
  return $$rendered;
});
const AppChartJsV2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let options;
  let data;
  let $app, $$unsubscribe_app;
  let $darkMode, $$unsubscribe_darkMode;
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  let { componentInput } = $$props;
  let { configuration } = $$props;
  let { initializing = void 0 } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  let { datasets } = $$props;
  let { xData } = $$props;
  let resolvedDatasets;
  let resolvedDatasetsValues = [];
  let resolvedXData = [];
  const { app, worldStore, darkMode } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  const outputs = initOutput($worldStore, id, { result: void 0, loading: false });
  Chart.register(...registerables);
  let result = void 0;
  const resolvedConfig = initConfig(components["chartjscomponent"].initialData.configuration, configuration);
  function hasScales() {
    const type = resolvedConfig?.type;
    return type === "bar" || type === "line" || type === "scatter" || type === "bubble";
  }
  let css2 = initCss($app.css?.chartjscomponent, customCss);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.initializing === void 0 && $$bindings.initializing && initializing !== void 0) $$bindings.initializing(initializing);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.datasets === void 0 && $$bindings.datasets && datasets !== void 0) $$bindings.datasets(datasets);
  if ($$props.xData === void 0 && $$bindings.xData && xData !== void 0) $$bindings.xData(xData);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    options = deepMergeWithPriority(resolvedConfig.options, {
      responsive: true,
      animation: false,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: $darkMode ? "#fff" : "#000" }
        }
      },
      ...hasScales() ? {
        scales: {
          y: {
            ticks: { color: $darkMode ? "#eee" : "#333" },
            grid: { color: $darkMode ? "#555" : "#ddd" }
          },
          x: {
            ticks: { color: $darkMode ? "#eee" : "#333" },
            grid: { color: $darkMode ? "#555" : "#ddd" }
          }
        }
      } : {}
    });
    data = datasets && xData && resolvedDatasets ? {
      labels: resolvedXData,
      datasets: resolvedDatasets?.map((d, index) => ({
        label: d.name,
        data: Array.isArray(resolvedDatasetsValues[index]) ? resolvedDatasetsValues[index] : []
      }))
    } : result;
    $$rendered = `${datasets ? `${validate_component(ResolveConfig, "ResolveConfig").$$render(
      $$result,
      {
        id,
        key: "datasets",
        configuration: datasets,
        resolvedConfig: resolvedDatasets
      },
      {
        resolvedConfig: ($$value) => {
          resolvedDatasets = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${xData ? `${validate_component(ResolveConfig, "ResolveConfig").$$render(
      $$result,
      {
        id,
        key: "xData",
        configuration: xData,
        resolvedConfig: resolvedXData
      },
      {
        resolvedConfig: ($$value) => {
          resolvedXData = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${resolvedDatasets ? `${each(resolvedDatasets, (resolvedDataset, index) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key: "datasets" + index,
          configuration: resolvedDataset.value,
          resolvedConfig: resolvedDatasetsValues[index]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedDatasetsValues[index] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}` : ``} ${each(Object.keys(components["chartjscomponentv2"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.chartjscomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(RunnableWrapper, "RunnableWrapper").$$render(
      $$result,
      {
        outputs,
        render,
        autoRefresh: true,
        componentInput,
        id,
        initializing,
        result
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        },
        result: ($$value) => {
          result = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div${add_attribute("class", twMerge("w-full h-full", css2?.container?.class, "wm-chartjs"), 0)}${add_attribute("style", css2?.container?.style ?? "", 0)}>${data && resolvedConfig.type ? `${validate_component(Chart$1, "Chart").$$render($$result, { type: resolvedConfig.type, data, options }, {}, {})}` : ``}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_darkMode();
  $$unsubscribe_worldStore();
  return $$rendered;
});
const css$6 = {
  code: ".ql-toolbar{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.dark .ql-toolbar{--tw-border-opacity:1;border-color:rgb(107 114 128/var(--tw-border-opacity))}.ql-toolbar .ql-stroke{fill:none;stroke:rgb(var(--color-text-primary)/1);border-top-left-radius:.375rem;border-top-right-radius:.375rem}.ql-toolbar .ql-fill{--tw-bg-opacity:1;fill:rgb(var(--color-text-primary)/1);stroke:none;background-color:rgb(239 68 68/var(--tw-bg-opacity))}.ql-toolbar .ql-picker{--tw-text-opacity:1;color:rgb(var(--color-text-primary)/var(--tw-text-opacity))}.ql-container{--tw-text-opacity:1;border-bottom-left-radius:.375rem;border-bottom-right-radius:.375rem;color:rgb(var(--color-text-primary)/var(--tw-text-opacity))}.dark .ql-container{--tw-border-opacity:1;border-color:rgb(107 114 128/var(--tw-border-opacity))}.dark .ql-container>.ql-editor.ql-blank:before{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}",
  map: null
};
const AppQuillEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $componentControl, $$unsubscribe_componentControl;
  let $worldStore, $$unsubscribe_worldStore;
  let $$unsubscribe_connectingInput;
  let $$unsubscribe_selectedComponent;
  let { id } = $$props;
  let { configuration } = $$props;
  let { render } = $$props;
  let editor;
  let quill;
  let { toolbarOptions = [
    [{ header: 1 }, { header: 2 }, "blockquote", "link", "image", "video"],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "ordered" }],
    [{ align: [] }],
    ["clean"]
  ] } = $$props;
  const { worldStore, componentControl, selectedComponent, connectingInput } = getContext("AppViewerContext");
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => $componentControl = value);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => value);
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => value);
  let placeholder = void 0;
  let defaultValue = void 0;
  let outputs = initOutput($worldStore, id, { result: "" });
  async function loadQuill() {
    const { default: Quill } = await import("quill");
    quill = new Quill(
      editor,
      {
        modules: { toolbar: toolbarOptions },
        theme: "snow",
        placeholder
      }
    );
    if (defaultValue) {
      quill.root.innerHTML = defaultValue;
    }
    quill.on("text-change", function(delta, oldDelta, source) {
      setOutput();
    });
  }
  set_store_value(
    componentControl,
    $componentControl[id] = {
      setValue(nvalue) {
        if (quill) {
          quill.root.innerHTML = nvalue;
          setOutput();
        }
      }
    },
    $componentControl
  );
  function setOutput() {
    if (quill) {
      outputs?.result.set(quill.root.innerHTML);
    }
  }
  function handleDefault(defaultValue2) {
    if (quill) {
      quill.root.innerHTML = defaultValue2;
      setOutput();
    }
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.toolbarOptions === void 0 && $$bindings.toolbarOptions && toolbarOptions !== void 0) $$bindings.toolbarOptions(toolbarOptions);
  $$result.css.add(css$6);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (!render) {
        quill = void 0;
      }
    }
    {
      if (!quill && render) {
        loadQuill();
      }
    }
    {
      handleDefault(defaultValue);
    }
    $$rendered = `${validate_component(InputValue, "InputValue").$$render(
      $$result,
      {
        key: "placeholder",
        id,
        input: configuration.placeholder,
        value: placeholder
      },
      {
        value: ($$value) => {
          placeholder = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(InputValue, "InputValue").$$render(
      $$result,
      {
        key: "value",
        id,
        input: configuration.defaultValue,
        value: defaultValue
      },
      {
        value: ($$value) => {
          defaultValue = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${render ? `<div class="editor-wrapper h-full flex-col flex max-h-full overflow-hidden"><div${add_attribute("this", editor, 0)}></div></div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_componentControl();
  $$unsubscribe_worldStore();
  $$unsubscribe_connectingInput();
  $$unsubscribe_selectedComponent();
  return $$rendered;
});
const ListWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $ctx, $$unsubscribe_ctx;
  let { index } = $$props;
  let { value } = $$props;
  let { disabled = false } = $$props;
  let { onSet = void 0 } = $$props;
  let { onRemove = void 0 } = $$props;
  const ctx = writable({ index, value, disabled });
  $$unsubscribe_ctx = subscribe(ctx, (value2) => $ctx = value2);
  setContext("ListWrapperContext", ctx);
  setContext("ListInputs", {
    set: (id, value2) => {
      onSet?.(id, value2);
    },
    remove(id) {
      onRemove?.(id);
    }
  });
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.onSet === void 0 && $$bindings.onSet && onSet !== void 0) $$bindings.onSet(onSet);
  if ($$props.onRemove === void 0 && $$bindings.onRemove && onRemove !== void 0) $$bindings.onRemove(onRemove);
  set_store_value(ctx, $ctx = { index, value, disabled }, $ctx);
  $$unsubscribe_ctx();
  return `${slots.default ? slots.default({}) : ``}`;
});
function getPagination(configuration, mode = "auto", initialData = [], page = 0) {
  const l = initialData ? initialData.length : 0;
  if (mode === "auto") {
    const pageSize = configuration.auto.pageSize ?? 0;
    const shouldDisplayPagination = pageSize < l;
    const total = Math.ceil(l / pageSize);
    return {
      shouldDisplayPagination,
      indexOffset: page * pageSize,
      maxIndex: (page + 1) * pageSize - 1,
      disableNext: pageSize > 0 && (page + 1) * pageSize >= l,
      total
    };
  } else {
    const pageCount = configuration.manual.pageCount ?? 0;
    const total = pageCount;
    return {
      shouldDisplayPagination: true,
      indexOffset: 0,
      maxIndex: l,
      disableNext: page + 1 >= pageCount,
      total
    };
  }
}
const AppList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isCard;
  let pagination;
  let $app, $$unsubscribe_app;
  let $$unsubscribe_focusedGrid;
  let $worldStore, $$unsubscribe_worldStore;
  let $allIdsInPath, $$unsubscribe_allIdsInPath;
  let $mode, $$unsubscribe_mode;
  let $$unsubscribe_connectingInput;
  let $$unsubscribe_selectedComponent;
  let { id } = $$props;
  let { componentInput } = $$props;
  let { configuration } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  let { initializing } = $$props;
  const { app, focusedGrid, selectedComponent, worldStore, connectingInput, allIdsInPath, mode } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_focusedGrid = subscribe(focusedGrid, (value) => value);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => value);
  $$unsubscribe_allIdsInPath = subscribe(allIdsInPath, (value) => $allIdsInPath = value);
  $$unsubscribe_mode = subscribe(mode, (value) => $mode = value);
  let page = 0;
  const outputs = initOutput($worldStore, id, {
    result: void 0,
    loading: false,
    inputs: {},
    page: 0
  });
  let resolvedConfig = initConfig(components["listcomponent"].initialData.configuration, configuration);
  let css2 = initCss($app.css?.listcomponent, customCss);
  let result = void 0;
  let inputs = {};
  let loading = false;
  let isPreviousLoading = false;
  let isNextLoading = false;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.initializing === void 0 && $$bindings.initializing && initializing !== void 0) $$bindings.initializing(initializing);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    isCard = resolvedConfig.width?.selected == "card";
    {
      if (!loading) {
        isPreviousLoading = false;
        isNextLoading = false;
      }
    }
    pagination = getPagination(resolvedConfig.pagination?.configuration, resolvedConfig.pagination?.selected, result, page);
    $$rendered = `${each(Object.keys(components["listcomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.listcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${validate_component(RunnableWrapper, "RunnableWrapper").$$render(
      $$result,
      {
        hasChildrens: true,
        render,
        outputs,
        autoRefresh: true,
        componentInput,
        id,
        initializing,
        result,
        loading
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        },
        result: ($$value) => {
          result = $$value;
          $$settled = false;
        },
        loading: ($$value) => {
          loading = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div${add_attribute("class", twMerge("w-full h-full", css2?.container?.class, "wm-list"), 0)}${add_attribute("style", css2?.container?.style, 0)}><div class="${"w-full h-full shrink flex " + escape(
            $allIdsInPath.includes(id) && $mode == "dnd" ? "overflow-visible" : "overflow-auto",
            true
          ) + " " + escape(
            isCard ? "gap-2 flex-wrap" : resolvedConfig?.displayBorders ? "divide-y flex-col" : "flex-col",
            true
          )}">${$app.subgrids?.[`${id}-0`] ? `${Array.isArray(result) && result.length > 0 ? `${each(result ?? [], (value, index) => {
            let inRange = index <= pagination.maxIndex && index >= pagination.indexOffset;
            return ` <div${add_attribute(
              "style",
              inRange ? `${isCard ? `min-width: ${resolvedConfig.width?.configuration?.card?.minWidthPx}px; ` : ""} max-height: ${resolvedConfig.heightPx}px;` : "",
              0
            )}${add_attribute(
              "class",
              inRange ? `${$allIdsInPath.includes(id) ? "overflow-visible" : resolvedConfig.heightPx ? "overflow-auto" : ""} ${!isCard ? "w-full" : resolvedConfig?.displayBorders ? "border" : ""}` : "h-0 float overflow-hidden invisible absolute",
              0
            )}>${validate_component(ListWrapper, "ListWrapper").$$render(
              $$result,
              {
                onSet: (id2, value2) => {
                  if (!inputs[id2]) {
                    inputs[id2] = { [index]: value2 };
                  } else {
                    inputs[id2] = { ...inputs[id2], [index]: value2 };
                  }
                  outputs?.inputs.set(inputs, true);
                },
                onRemove: (id2) => {
                  if (inputs?.[id2] == void 0) {
                    return;
                  }
                  if (index == 0) {
                    delete inputs[id2];
                    inputs = { ...inputs };
                  } else {
                    delete inputs[id2][index];
                    inputs[id2] = { ...inputs[id2] };
                  }
                  outputs?.inputs.set(inputs, true);
                },
                value,
                index
              },
              {},
              {
                default: () => {
                  return `${validate_component(SubGridEditor, "SubGridEditor").$$render(
                    $$result,
                    {
                      visible: render && inRange,
                      id,
                      subGridId: `${id}-0`,
                      containerHeight: resolvedConfig.heightPx
                    },
                    {},
                    {}
                  )} `;
                }
              }
            )} </div>`;
          })}` : `${validate_component(ListWrapper, "ListWrapper").$$render(
            $$result,
            {
              disabled: true,
              value: void 0,
              index: 0
            },
            {},
            {
              default: () => {
                return `${validate_component(SubGridEditor, "SubGridEditor").$$render($$result, { visible: false, id, subGridId: `${id}-0` }, {}, {})}`;
              }
            }
          )} ${!Array.isArray(result) ? `<div class="text-center text-tertiary" data-svelte-h="svelte-ej2i0b">Input data is not an array</div>` : ``}`}` : ``}</div> ${pagination.shouldDisplayPagination ? `<div class="bg-surface-secondary z-20 h-8 flex flex-row gap-1 p-1 items-center wm-list-pagination absolute bottom-0 w-full">${validate_component(Button, "Button").$$render(
            $$result,
            {
              size: "xs2",
              variant: "border",
              color: "light",
              btnClasses: "flex flex-row gap-1 items-center wm-list-pagination-buttons",
              disabled: page === 0
            },
            {},
            {
              default: () => {
                return `${isPreviousLoading && loading ? `${validate_component(Loader_2, "Loader2").$$render($$result, { size: 14, class: "animate-spin" }, {}, {})}` : `${validate_component(Chevron_left, "ChevronLeft").$$render($$result, { size: 14 }, {}, {})}`}
					Previous`;
              }
            }
          )} ${validate_component(Button, "Button").$$render(
            $$result,
            {
              size: "xs2",
              variant: "border",
              color: "light",
              btnClasses: "flex flex-row gap-1 items-center wm-list-pagination-buttons",
              disabled: pagination.disableNext && pagination.total > 0
            },
            {},
            {
              default: () => {
                return `Next

					${isNextLoading && loading ? `${validate_component(Loader_2, "Loader2").$$render($$result, { size: 14, class: "animate-spin" }, {}, {})}` : `${validate_component(Chevron_right, "ChevronRight").$$render($$result, { size: 14 }, {}, {})}`}`;
              }
            }
          )} <div class="text-xs">${escape(page + 1)} ${escape(pagination.total > 0 ? `of ${pagination.total}` : "")}</div></div>` : ``}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_focusedGrid();
  $$unsubscribe_worldStore();
  $$unsubscribe_allIdsInPath();
  $$unsubscribe_mode();
  $$unsubscribe_connectingInput();
  $$unsubscribe_selectedComponent();
  return $$rendered;
});
const AppJobIdLogComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  let { initializing = false } = $$props;
  let { customCss = void 0 } = $$props;
  let { configuration } = $$props;
  let { render } = $$props;
  const { app, worldStore, workspace } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  let resolvedConfig = initConfig(components["jobidlogcomponent"].initialData.configuration, configuration);
  const outputs = initOutput($worldStore, id, {
    result: void 0,
    loading: false,
    jobId: void 0
  });
  initializing = false;
  let css2 = initCss($app.css?.jobidlogcomponent, customCss);
  let testJobLoader = void 0;
  let testIsLoading = false;
  let testJob = void 0;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.initializing === void 0 && $$bindings.initializing && initializing !== void 0) $$bindings.initializing(initializing);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (resolvedConfig.jobId) {
        outputs.loading.set(true);
        testJobLoader?.watchJob(resolvedConfig?.["jobId"]);
      }
    }
    $$rendered = `${each(Object.keys(components["jobidlogcomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.jobidlogcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(TestJobLoader, "TestJobLoader").$$render(
      $$result,
      {
        workspaceOverride: workspace,
        this: testJobLoader,
        isLoading: testIsLoading,
        job: testJob
      },
      {
        this: ($$value) => {
          testJobLoader = $$value;
          $$settled = false;
        },
        isLoading: ($$value) => {
          testIsLoading = $$value;
          $$settled = false;
        },
        job: ($$value) => {
          testJob = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${render ? `<div class="flex flex-col w-full h-full component-wrapper"><div${add_attribute("class", twMerge("w-full border-b p-2 text-xs font-semibold text-primary bg-surface-secondary", css2?.header?.class), 0)}${add_attribute("style", css2?.header?.style, 0)}>Logs</div> <div${add_attribute("style", css2?.container?.style, 0)}${add_attribute("class", twMerge("grow overflow-auto", css2?.container?.class, "wm-log-container"), 0)}>${validate_component(LogViewer, "LogViewer").$$render(
      $$result,
      {
        jobId: testJob?.id,
        duration: testJob?.["duration_ms"],
        mem: testJob?.["mem_peak"],
        content: testJob?.logs,
        isLoading: testIsLoading,
        tag: testJob?.tag
      },
      {},
      {}
    )}</div></div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_worldStore();
  return $$rendered;
});
const AppJobIdFlowStatus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let jobId;
  let $app, $$unsubscribe_app;
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  let { initializing = false } = $$props;
  let { customCss = void 0 } = $$props;
  let { configuration } = $$props;
  let { render } = $$props;
  const { app, worldStore, workspace } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  const resolvedConfig = initConfig(components["jobidlogcomponent"].initialData.configuration, configuration);
  initOutput($worldStore, id, {
    result: void 0,
    loading: false,
    jobId: void 0
  });
  initializing = false;
  let css2 = initCss($app.css?.jobidflowstatuscomponent, customCss);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.initializing === void 0 && $$bindings.initializing && initializing !== void 0) $$bindings.initializing(initializing);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    jobId = resolvedConfig.jobId;
    $$rendered = `${each(Object.keys(components["jobidflowstatuscomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.jobidflowstatuscomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${render ? `<div class="flex flex-col w-full h-full component-wrapper"><div${add_attribute("class", twMerge("w-full border-b p-2 text-xs font-semibold text-primary bg-surface-secondary", css2?.header?.class), 0)}${add_attribute("style", css2?.header?.style, 0)}>Flow Status</div> <div${add_attribute("style", twMerge($app.css?.["flowstatuscomponent"]?.["container"]?.style, customCss?.container?.style), 0)}${add_attribute("class", twMerge("p-2 grow overflow-auto", $app.css?.["flowstatuscomponent"]?.["container"]?.class, customCss?.container?.class), 0)}>${jobId ? `${validate_component(FlowStatusViewer, "FlowStatusViewer").$$render($$result, { workspaceId: workspace, jobId }, {}, {})}` : `<span class="text-secondary text-xs" data-svelte-h="svelte-1w2n0i5">No flow</span>`}</div></div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_worldStore();
  return $$rendered;
});
const css$5 = {
  code: ":root{--sc-dot-size:6px;--sc-active-dot-size:8px;--sc-dot-size-animation-time:250ms}.sc-carousel-dot__dot.svelte-xpe3nm{-webkit-tap-highlight-color:transparent;background-color:var(--sc-color-rgb-light);border-radius:50%;cursor:pointer;display:inline-block;height:var(--sc-dot-size);opacity:.5;transition:opacity .1s ease,height var(--sc-dot-size-animation-time) ease,width var(--sc-dot-size-animation-time) ease;width:var(--sc-dot-size)}.sc-carousel-dot__dot.svelte-xpe3nm:hover{opacity:.9}.sc-carousel-dot__dot_active.svelte-xpe3nm{height:var(--sc-active-dot-size);opacity:.7;width:var(--sc-active-dot-size)}",
  map: null
};
const Dot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { active = false } = $$props;
  if ($$props.active === void 0 && $$bindings.active && active !== void 0) $$bindings.active(active);
  $$result.css.add(css$5);
  return `<button class="${[
    "sc-carousel-button sc-carousel-dot__dot svelte-xpe3nm",
    active ? "sc-carousel-dot__dot_active" : ""
  ].join(" ").trim()}"></button>`;
});
const css$4 = {
  code: ".sc-carousel-dots__container.svelte-qghin4{align-items:center;display:flex;flex-wrap:wrap;justify-content:center;padding:0 30px}.sc-carousel-dots__dot-container.svelte-qghin4{align-items:center;display:flex;height:calc(var(--sc-dot-size) + 14px);justify-content:center;width:calc(var(--sc-dot-size) + 10px)}",
  map: null
};
const Dots = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { pagesCount = 1 } = $$props;
  let { currentPageIndex = 0 } = $$props;
  if ($$props.pagesCount === void 0 && $$bindings.pagesCount && pagesCount !== void 0) $$bindings.pagesCount(pagesCount);
  if ($$props.currentPageIndex === void 0 && $$bindings.currentPageIndex && currentPageIndex !== void 0) $$bindings.currentPageIndex(currentPageIndex);
  $$result.css.add(css$4);
  return `<div class="sc-carousel-dots__container svelte-qghin4">${each(Array(pagesCount), (_, pageIndex) => {
    return `<div class="sc-carousel-dots__dot-container svelte-qghin4">${validate_component(Dot, "Dot").$$render($$result, { active: currentPageIndex === pageIndex }, {}, {})} </div>`;
  })} </div>`;
});
const PREV = "prev";
const NEXT = "next";
const css$3 = {
  code: ":root{--sc-arrow-size:2px}.sc-carousel-arrow__circle.svelte-jv14i5{-webkit-tap-highlight-color:transparent;align-items:center;background-color:var(--sc-color-rgb-light-50p);border-radius:50%;cursor:pointer;display:flex;height:20px;justify-content:center;transition:opacity .1s ease;width:20px}.sc-carousel-arrow__circle.svelte-jv14i5:hover{opacity:.9}.sc-carousel-arrow__arrow.svelte-jv14i5{border:solid var(--sc-color-hex-dark);border-width:0 var(--sc-arrow-size) var(--sc-arrow-size) 0;padding:var(--sc-arrow-size);position:relative}.sc-carousel-arrow__arrow-next.svelte-jv14i5{left:calc(var(--sc-arrow-size)/-2);transform:rotate(-45deg)}.sc-carousel-arrow__arrow-prev.svelte-jv14i5{right:calc(var(--sc-arrow-size)/-2);transform:rotate(135deg)}.sc-carousel-arrow__circle_disabled.svelte-jv14i5,.sc-carousel-arrow__circle_disabled.svelte-jv14i5:hover{opacity:.5}",
  map: null
};
const Arrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { direction = NEXT } = $$props;
  let { disabled = false } = $$props;
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0) $$bindings.direction(direction);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  $$result.css.add(css$3);
  return `<button class="${[
    "sc-carousel-button sc-carousel-arrow__circle svelte-jv14i5",
    disabled ? "sc-carousel-arrow__circle_disabled" : ""
  ].join(" ").trim()}"><i class="${[
    "sc-carousel-arrow__arrow svelte-jv14i5",
    (direction === NEXT ? "sc-carousel-arrow__arrow-next" : "") + " " + (direction === PREV ? "sc-carousel-arrow__arrow-prev" : "")
  ].join(" ").trim()}"></i> </button>`;
});
const css$2 = {
  code: ".sc-carousel-progress__indicator.svelte-174fgu0{background-color:var(--sc-color-hex-dark-50p);height:100%}",
  map: null
};
const MAX_PERCENT = 100;
const Progress = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let width;
  let { value = 0 } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  $$result.css.add(css$2);
  width = Math.min(Math.max(value * MAX_PERCENT, 0), MAX_PERCENT);
  return `<div class="sc-carousel-progress__indicator svelte-174fgu0" style="${"width: " + escape(width, true) + "%;"}"></div>`;
});
function getValueInRange(min, value, max) {
  return Math.max(min, Math.min(value, max));
}
function _getCurrentPageIndexByCurrentParticleIndexInfinite({
  currentParticleIndex,
  particlesCount,
  clonesCountHead,
  clonesCountTotal,
  particlesToScroll
}) {
  if (currentParticleIndex === particlesCount - clonesCountHead) return 0;
  if (currentParticleIndex === 0) return _getPagesCountByParticlesCountInfinite({
    particlesCountWithoutClones: particlesCount - clonesCountTotal,
    particlesToScroll
  }) - 1;
  return Math.floor((currentParticleIndex - clonesCountHead) / particlesToScroll);
}
function _getCurrentPageIndexByCurrentParticleIndexLimited({
  currentParticleIndex,
  particlesToScroll
}) {
  return Math.ceil(currentParticleIndex / particlesToScroll);
}
function getCurrentPageIndexByCurrentParticleIndex({
  currentParticleIndex,
  particlesCount,
  clonesCountHead,
  clonesCountTotal,
  infinite,
  particlesToScroll
}) {
  return infinite ? _getCurrentPageIndexByCurrentParticleIndexInfinite({
    currentParticleIndex,
    particlesCount,
    clonesCountHead,
    clonesCountTotal,
    particlesToScroll
  }) : _getCurrentPageIndexByCurrentParticleIndexLimited({
    currentParticleIndex,
    particlesToScroll
  });
}
function _getPagesCountByParticlesCountInfinite({
  particlesCountWithoutClones,
  particlesToScroll
}) {
  return Math.ceil(particlesCountWithoutClones / particlesToScroll);
}
function _getPagesCountByParticlesCountLimited({
  particlesCountWithoutClones,
  particlesToScroll,
  particlesToShow
}) {
  const partialPageSize = getPartialPageSize({
    particlesCountWithoutClones,
    particlesToScroll,
    particlesToShow
  });
  return Math.ceil(particlesCountWithoutClones / particlesToScroll) - partialPageSize;
}
function getPagesCountByParticlesCount({
  infinite,
  particlesCountWithoutClones,
  particlesToScroll,
  particlesToShow
}) {
  return infinite ? _getPagesCountByParticlesCountInfinite({
    particlesCountWithoutClones,
    particlesToScroll
  }) : _getPagesCountByParticlesCountLimited({
    particlesCountWithoutClones,
    particlesToScroll,
    particlesToShow
  });
}
function _getParticleIndexByPageIndexInfinite({
  pageIndex,
  clonesCountHead,
  clonesCountTail,
  particlesToScroll,
  particlesCount
}) {
  return getValueInRange(
    0,
    Math.min(clonesCountHead + pageIndex * particlesToScroll, particlesCount - clonesCountTail),
    particlesCount - 1
  );
}
function _getParticleIndexByPageIndexLimited({
  pageIndex,
  particlesToScroll,
  particlesCount,
  particlesToShow
}) {
  return getValueInRange(
    0,
    Math.min(pageIndex * particlesToScroll, particlesCount - particlesToShow),
    particlesCount - 1
  );
}
function getParticleIndexByPageIndex({
  infinite,
  pageIndex,
  clonesCountHead,
  clonesCountTail,
  particlesToScroll,
  particlesCount,
  particlesToShow
}) {
  return infinite ? _getParticleIndexByPageIndexInfinite({
    pageIndex,
    clonesCountHead,
    clonesCountTail,
    particlesToScroll,
    particlesCount
  }) : _getParticleIndexByPageIndexLimited({
    pageIndex,
    particlesToScroll,
    particlesCount,
    particlesToShow
  });
}
function applyParticleSizes({
  particlesContainerChildren,
  particleWidth
}) {
  for (let particleIndex = 0; particleIndex < particlesContainerChildren.length; particleIndex++) {
    particlesContainerChildren[particleIndex].style.minWidth = `${particleWidth}px`;
    particlesContainerChildren[particleIndex].style.maxWidth = `${particleWidth}px`;
  }
}
function getPartialPageSize({
  particlesToScroll,
  particlesToShow,
  particlesCountWithoutClones
}) {
  const overlap = particlesToScroll - particlesToShow;
  let particlesCount = particlesToShow;
  while (true) {
    const diff = particlesCountWithoutClones - particlesCount - overlap;
    if (diff < particlesToShow) {
      return Math.max(diff, 0);
    }
    particlesCount += particlesToShow + overlap;
  }
}
function createResizeObserver(onResize) {
  return new ResizeObserver((entries) => {
    onResize({
      width: entries[0].contentRect.width
    });
  });
}
function getClonesCount({
  infinite,
  particlesToShow,
  partialPageSize
}) {
  const clonesCount = infinite ? {
    // need to round with ceil as particlesToShow, particlesToShow can be floating (e.g. 1.5, 3.75)
    head: Math.ceil(partialPageSize || particlesToShow),
    tail: Math.ceil(particlesToShow)
  } : {
    head: 0,
    tail: 0
  };
  return {
    ...clonesCount,
    total: clonesCount.head + clonesCount.tail
  };
}
const get = (object, fieldName, defaultValue) => {
  if (object && object.hasOwnProperty(fieldName)) {
    return object[fieldName];
  }
  return defaultValue;
};
const switcher = (description) => (key) => {
  description[key] && description[key]();
};
function getIndexesOfParticlesWithoutClonesInPage({
  pageIndex,
  particlesToShow,
  particlesToScroll,
  particlesCount
}) {
  const overlap = pageIndex === 0 ? 0 : particlesToShow - particlesToScroll;
  const from = pageIndex * particlesToShow - pageIndex * overlap;
  const to = from + Math.max(particlesToShow, particlesToScroll) - 1;
  const indexes = [];
  for (let i = from; i <= Math.min(particlesCount - 1, to); i++) {
    indexes.push(i);
  }
  return indexes;
}
function getAdjacentIndexes({
  infinite,
  pageIndex,
  pagesCount,
  particlesCount,
  particlesToShow,
  particlesToScroll
}) {
  const _pageIndex = getValueInRange(0, pageIndex, pagesCount - 1);
  let rangeStart = _pageIndex - 1;
  let rangeEnd = _pageIndex + 1;
  rangeStart = infinite ? rangeStart < 0 ? pagesCount - 1 : rangeStart : Math.max(0, rangeStart);
  rangeEnd = infinite ? rangeEnd > pagesCount - 1 ? 0 : rangeEnd : Math.min(pagesCount - 1, rangeEnd);
  const pageIndexes = [.../* @__PURE__ */ new Set([
    rangeStart,
    _pageIndex,
    rangeEnd,
    // because of these values outputs for infinite/non-infinites are the same
    0,
    // needed to clone first page particles
    pagesCount - 1
    // needed to clone last page particles
  ])].sort((a, b) => a - b);
  const particleIndexes = pageIndexes.flatMap(
    (pageIndex2) => getIndexesOfParticlesWithoutClonesInPage({
      pageIndex: pageIndex2,
      particlesToShow,
      particlesToScroll,
      particlesCount
    })
  );
  return {
    pageIndexes,
    particleIndexes: [...new Set(particleIndexes)].sort((a, b) => a - b)
  };
}
const setIntervalImmediate = (fn, ms) => {
  fn();
  return setInterval(fn, ms);
};
const STEP_MS = 35;
const MAX_VALUE = 1;
class ProgressManager {
  constructor({ onProgressValueChange }) {
    this._onProgressValueChange = onProgressValueChange;
    this._autoplayDuration;
    this._onProgressValueChange;
    this._interval;
    this._paused = false;
  }
  setAutoplayDuration(autoplayDuration) {
    this._autoplayDuration = autoplayDuration;
  }
  start(onFinish) {
    return new Promise((resolve) => {
      this.reset();
      const stepMs = Math.min(STEP_MS, Math.max(this._autoplayDuration, 1));
      let progress = -stepMs;
      this._interval = setIntervalImmediate(async () => {
        if (this._paused) {
          return;
        }
        progress += stepMs;
        const value = progress / this._autoplayDuration;
        this._onProgressValueChange(value);
        if (value > MAX_VALUE) {
          this.reset();
          await onFinish();
          resolve();
        }
      }, stepMs);
    });
  }
  pause() {
    this._paused = true;
  }
  resume() {
    this._paused = false;
  }
  reset() {
    clearInterval(this._interval);
    this._onProgressValueChange(MAX_VALUE);
  }
}
function createCarousel(onChange) {
  const progressManager = new ProgressManager({
    onProgressValueChange: (value) => {
      onChange("progressValue", 1 - value);
    }
  });
  const reactive = easyReactive(
    {
      data: {
        particlesCountWithoutClones: 0,
        particlesToShow: 1,
        // normalized
        particlesToShowInit: 1,
        // initial value
        particlesToScroll: 1,
        // normalized
        particlesToScrollInit: 1,
        // initial value
        particlesCount: 1,
        currentParticleIndex: 1,
        infinite: false,
        autoplayDuration: 1e3,
        clonesCountHead: 0,
        clonesCountTail: 0,
        clonesCountTotal: 0,
        partialPageSize: 1,
        currentPageIndex: 1,
        pagesCount: 1,
        pauseOnFocus: false,
        focused: false,
        autoplay: false,
        autoplayDirection: "next",
        disabled: false,
        // disable page change while animation is in progress
        durationMsInit: 1e3,
        durationMs: 1e3,
        offset: 0,
        particleWidth: 0,
        loaded: []
      },
      watch: {
        setLoaded({ data: data2 }) {
          data2.loaded = getAdjacentIndexes({
            infinite: data2.infinite,
            pageIndex: data2.currentPageIndex,
            pagesCount: data2.pagesCount,
            particlesCount: data2.particlesCountWithoutClones,
            particlesToShow: data2.particlesToShow,
            particlesToScroll: data2.particlesToScroll
          }).particleIndexes;
        },
        setCurrentPageIndex({ data: data2 }) {
          data2.currentPageIndex = getCurrentPageIndexByCurrentParticleIndex({
            currentParticleIndex: data2.currentParticleIndex,
            particlesCount: data2.particlesCount,
            clonesCountHead: data2.clonesCountHead,
            clonesCountTotal: data2.clonesCountTotal,
            infinite: data2.infinite,
            particlesToScroll: data2.particlesToScroll
          });
        },
        setPartialPageSize({ data: data2 }) {
          data2.partialPageSize = getPartialPageSize({
            particlesToScroll: data2.particlesToScroll,
            particlesToShow: data2.particlesToShow,
            particlesCountWithoutClones: data2.particlesCountWithoutClones
          });
        },
        setClonesCount({ data: data2 }) {
          const { head, tail } = getClonesCount({
            infinite: data2.infinite,
            particlesToShow: data2.particlesToShow,
            partialPageSize: data2.partialPageSize
          });
          data2.clonesCountHead = head;
          data2.clonesCountTail = tail;
          data2.clonesCountTotal = head + tail;
        },
        setProgressManagerAutoplayDuration({ data: data2 }) {
          progressManager.setAutoplayDuration(data2.autoplayDuration);
        },
        toggleProgressManager({ data: { pauseOnFocus, focused } }) {
          if (pauseOnFocus) {
            if (focused) {
              progressManager.pause();
            } else {
              progressManager.resume();
            }
          }
        },
        initDuration({ data: data2 }) {
          data2.durationMs = data2.durationMsInit;
        },
        applyAutoplay({ data: data2, methods: { _applyAutoplayIfNeeded } }) {
          data2.autoplay && _applyAutoplayIfNeeded(data2.autoplay);
        },
        setPagesCount({ data: data2 }) {
          data2.pagesCount = getPagesCountByParticlesCount({
            infinite: data2.infinite,
            particlesCountWithoutClones: data2.particlesCountWithoutClones,
            particlesToScroll: data2.particlesToScroll,
            particlesToShow: data2.particlesToShow
          });
        },
        setParticlesToShow({ data: data2 }) {
          data2.particlesToShow = getValueInRange(
            1,
            data2.particlesToShowInit,
            data2.particlesCountWithoutClones
          );
        },
        setParticlesToScroll({ data: data2 }) {
          data2.particlesToScroll = getValueInRange(
            1,
            data2.particlesToScrollInit,
            data2.particlesCountWithoutClones
          );
        }
      },
      methods: {
        _prev({ data: data2 }) {
          data2.currentParticleIndex = getParticleIndexByPageIndex({
            infinite: data2.infinite,
            pageIndex: data2.currentPageIndex - 1,
            clonesCountHead: data2.clonesCountHead,
            clonesCountTail: data2.clonesCountTail,
            particlesToScroll: data2.particlesToScroll,
            particlesCount: data2.particlesCount,
            particlesToShow: data2.particlesToShow
          });
        },
        _next({ data: data2 }) {
          data2.currentParticleIndex = getParticleIndexByPageIndex({
            infinite: data2.infinite,
            pageIndex: data2.currentPageIndex + 1,
            clonesCountHead: data2.clonesCountHead,
            clonesCountTail: data2.clonesCountTail,
            particlesToScroll: data2.particlesToScroll,
            particlesCount: data2.particlesCount,
            particlesToShow: data2.particlesToShow
          });
        },
        _moveToParticle({ data: data2 }, particleIndex) {
          data2.currentParticleIndex = getValueInRange(
            0,
            particleIndex,
            data2.particlesCount - 1
          );
        },
        toggleFocused({ data: data2 }) {
          data2.focused = !data2.focused;
        },
        async _applyAutoplayIfNeeded({ data: data2, methods: methods2 }) {
          if (!data2.infinite && (data2.autoplayDirection === NEXT && data2.currentParticleIndex === data2.particlesCount - 1 || data2.autoplayDirection === PREV && data2.currentParticleIndex === 0)) {
            progressManager.reset();
            return;
          }
          if (data2.autoplay) {
            const onFinish = () => switcher({
              [NEXT]: async () => methods2.showNextPage(),
              [PREV]: async () => methods2.showPrevPage()
            })(data2.autoplayDirection);
            await progressManager.start(onFinish);
          }
        },
        // makes delayed jump to 1st or last element
        async _jumpIfNeeded({ data: data2, methods: methods2 }) {
          let jumped = false;
          if (data2.infinite) {
            if (data2.currentParticleIndex === 0) {
              await methods2.showParticle(
                data2.particlesCount - data2.clonesCountTotal,
                {
                  animated: false
                }
              );
              jumped = true;
            } else if (data2.currentParticleIndex === data2.particlesCount - data2.clonesCountTail) {
              await methods2.showParticle(data2.clonesCountHead, {
                animated: false
              });
              jumped = true;
            }
          }
          return jumped;
        },
        async changePage({ data: data2, methods: methods2 }, updateStoreFn, options) {
          progressManager.reset();
          if (data2.disabled) return;
          data2.disabled = true;
          updateStoreFn();
          await methods2.offsetPage({ animated: get(options, "animated", true) });
          data2.disabled = false;
          const jumped = await methods2._jumpIfNeeded();
          !jumped && methods2._applyAutoplayIfNeeded();
        },
        async showNextPage({ data: data2, methods: methods2 }, options) {
          if (data2.disabled) return;
          await methods2.changePage(methods2._next, options);
        },
        async showPrevPage({ data: data2, methods: methods2 }, options) {
          if (data2.disabled) return;
          await methods2.changePage(methods2._prev, options);
        },
        async showParticle({ methods: methods2 }, particleIndex, options) {
          await methods2.changePage(
            () => methods2._moveToParticle(particleIndex),
            options
          );
        },
        _getParticleIndexByPageIndex({ data: data2 }, pageIndex) {
          return getParticleIndexByPageIndex({
            infinite: data2.infinite,
            pageIndex,
            clonesCountHead: data2.clonesCountHead,
            clonesCountTail: data2.clonesCountTail,
            particlesToScroll: data2.particlesToScroll,
            particlesCount: data2.particlesCount,
            particlesToShow: data2.particlesToShow
          });
        },
        async showPage({ methods: methods2 }, pageIndex, options) {
          const particleIndex = methods2._getParticleIndexByPageIndex(pageIndex);
          await methods2.showParticle(particleIndex, options);
        },
        offsetPage({ data: data2 }, options) {
          const animated = get(options, "animated", true);
          return new Promise((resolve) => {
            data2.durationMs = animated ? data2.durationMsInit : 0;
            data2.offset = -data2.currentParticleIndex * data2.particleWidth;
            setTimeout(() => {
              resolve();
            }, data2.durationMs);
          });
        }
      }
    },
    {
      onChange
    }
  );
  const [data, methods] = reactive;
  return [{ data, progressManager }, methods, reactive._internal];
}
const css = {
  code: ":root{--sc-color-rgb-light-50p:rgba(93,93,93,.5);--sc-color-rgb-light:#5d5d5d;--sc-color-hex-dark-50p:rgba(30,30,30,.5);--sc-color-hex-dark:#1e1e1e}.sc-carousel__carousel-container.svelte-140cxcp{align-items:center;display:flex;flex-direction:column;width:100%}.sc-carousel__content-container.svelte-140cxcp{display:flex;position:relative;width:100%}.sc-carousel__pages-window.svelte-140cxcp{box-sizing:border-box;display:flex;flex:1;overflow:hidden;position:relative}.sc-carousel__pages-container.svelte-140cxcp{display:flex;transition-property:transform;width:100%}.sc-carousel__arrow-container.svelte-140cxcp{align-items:center;box-sizing:border-box;display:flex;justify-content:center;padding:5px}.sc-carousel-progress__container.svelte-140cxcp{background-color:var(--sc-color-rgb-light-50p);bottom:0;height:5px;position:absolute;width:100%}.sc-carousel-button{all:unset;cursor:pointer}.sc-carousel-button:focus{outline:5px auto}",
  map: null
};
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loaded = [];
  let currentPageIndex;
  let progressValue;
  let offset2 = 0;
  let durationMs = 0;
  let pagesCount = 1;
  const [{ data, progressManager }, methods, service] = createCarousel((key, value) => {
    switcher({
      "currentPageIndex": () => currentPageIndex = value,
      "progressValue": () => progressValue = value,
      "offset": () => offset2 = value,
      "durationMs": () => durationMs = value,
      "pagesCount": () => pagesCount = value,
      "loaded": () => loaded = value
    })(key);
  });
  const dispatch = createEventDispatcher();
  let { timingFunction = "ease-in-out" } = $$props;
  let { arrows = true } = $$props;
  let { infinite = true } = $$props;
  let { initialPageIndex = 0 } = $$props;
  let { duration = 500 } = $$props;
  let { autoplay = false } = $$props;
  let { autoplayDuration = 3e3 } = $$props;
  let { autoplayDirection = NEXT } = $$props;
  let { pauseOnFocus = false } = $$props;
  let { autoplayProgressVisible = false } = $$props;
  let { dots = true } = $$props;
  let { swiping = true } = $$props;
  let { particlesToShow = 1 } = $$props;
  let { particlesToScroll = 1 } = $$props;
  async function goTo(pageIndex, options) {
    const animated = get(options, "animated", true);
    if (typeof pageIndex !== "number") {
      throw new Error("pageIndex should be a number");
    }
    await methods.showPage(pageIndex, { animated });
  }
  async function goToPrev(options) {
    const animated = get(options, "animated", true);
    await methods.showPrevPage({ animated });
  }
  async function goToNext(options) {
    const animated = get(options, "animated", true);
    await methods.showNextPage({ animated });
  }
  let pageWindowWidth = 0;
  let pageWindowElement;
  let particlesContainer;
  const pageWindowElementResizeObserver = createResizeObserver(({ width }) => {
    pageWindowWidth = width;
    data.particleWidth = pageWindowWidth / data.particlesToShow;
    applyParticleSizes({
      particlesContainerChildren: particlesContainer.children,
      particleWidth: data.particleWidth
    });
    methods.offsetPage({ animated: false });
  });
  onDestroy(() => {
    pageWindowElementResizeObserver.disconnect();
    progressManager.reset();
  });
  async function handlePageChange(pageIndex) {
    await methods.showPage(pageIndex, { animated: true });
  }
  if ($$props.timingFunction === void 0 && $$bindings.timingFunction && timingFunction !== void 0) $$bindings.timingFunction(timingFunction);
  if ($$props.arrows === void 0 && $$bindings.arrows && arrows !== void 0) $$bindings.arrows(arrows);
  if ($$props.infinite === void 0 && $$bindings.infinite && infinite !== void 0) $$bindings.infinite(infinite);
  if ($$props.initialPageIndex === void 0 && $$bindings.initialPageIndex && initialPageIndex !== void 0) $$bindings.initialPageIndex(initialPageIndex);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0) $$bindings.duration(duration);
  if ($$props.autoplay === void 0 && $$bindings.autoplay && autoplay !== void 0) $$bindings.autoplay(autoplay);
  if ($$props.autoplayDuration === void 0 && $$bindings.autoplayDuration && autoplayDuration !== void 0) $$bindings.autoplayDuration(autoplayDuration);
  if ($$props.autoplayDirection === void 0 && $$bindings.autoplayDirection && autoplayDirection !== void 0) $$bindings.autoplayDirection(autoplayDirection);
  if ($$props.pauseOnFocus === void 0 && $$bindings.pauseOnFocus && pauseOnFocus !== void 0) $$bindings.pauseOnFocus(pauseOnFocus);
  if ($$props.autoplayProgressVisible === void 0 && $$bindings.autoplayProgressVisible && autoplayProgressVisible !== void 0) $$bindings.autoplayProgressVisible(autoplayProgressVisible);
  if ($$props.dots === void 0 && $$bindings.dots && dots !== void 0) $$bindings.dots(dots);
  if ($$props.swiping === void 0 && $$bindings.swiping && swiping !== void 0) $$bindings.swiping(swiping);
  if ($$props.particlesToShow === void 0 && $$bindings.particlesToShow && particlesToShow !== void 0) $$bindings.particlesToShow(particlesToShow);
  if ($$props.particlesToScroll === void 0 && $$bindings.particlesToScroll && particlesToScroll !== void 0) $$bindings.particlesToScroll(particlesToScroll);
  if ($$props.goTo === void 0 && $$bindings.goTo && goTo !== void 0) $$bindings.goTo(goTo);
  if ($$props.goToPrev === void 0 && $$bindings.goToPrev && goToPrev !== void 0) $$bindings.goToPrev(goToPrev);
  if ($$props.goToNext === void 0 && $$bindings.goToNext && goToNext !== void 0) $$bindings.goToNext(goToNext);
  $$result.css.add(css);
  {
    {
      dispatch("pageChange", currentPageIndex);
    }
  }
  {
    {
      data.infinite = infinite;
    }
  }
  {
    {
      data.durationMsInit = duration;
    }
  }
  {
    {
      data.autoplay = autoplay;
    }
  }
  {
    {
      data.autoplayDuration = autoplayDuration;
    }
  }
  {
    {
      data.autoplayDirection = autoplayDirection;
    }
  }
  {
    {
      data.pauseOnFocus = pauseOnFocus;
    }
  }
  {
    {
      data.particlesToShowInit = particlesToShow;
    }
  }
  {
    {
      data.particlesToScrollInit = particlesToScroll;
    }
  }
  return `<div class="sc-carousel__carousel-container svelte-140cxcp"><div class="sc-carousel__content-container svelte-140cxcp">${arrows ? `${slots.prev ? slots.prev({ showPrevPage: methods.showPrevPage }) : ` <div class="sc-carousel__arrow-container svelte-140cxcp">${validate_component(Arrow, "Arrow").$$render(
    $$result,
    {
      direction: "prev",
      disabled: !infinite && currentPageIndex === 0
    },
    {},
    {}
  )}</div> `}` : ``} <div class="sc-carousel__pages-window svelte-140cxcp"${add_attribute("this", pageWindowElement, 0)}><div class="sc-carousel__pages-container svelte-140cxcp" style="${"transform: translateX(" + escape(offset2, true) + "px); transition-duration: " + escape(durationMs, true) + "ms; transition-timing-function: " + escape(timingFunction, true) + ";"}"${add_attribute("this", particlesContainer, 0)}>${slots.default ? slots.default({ loaded, currentPageIndex }) : ``}</div> ${autoplayProgressVisible ? `<div class="sc-carousel-progress__container svelte-140cxcp">${validate_component(Progress, "Progress").$$render($$result, { value: progressValue }, {}, {})}</div>` : ``}</div> ${arrows ? `${slots.next ? slots.next({ showNextPage: methods.showNextPage }) : ` <div class="sc-carousel__arrow-container svelte-140cxcp">${validate_component(Arrow, "Arrow").$$render(
    $$result,
    {
      direction: "next",
      disabled: !infinite && currentPageIndex === pagesCount - 1
    },
    {},
    {}
  )}</div> `}` : ``}</div> ${dots ? `${slots.dots ? slots.dots({
    currentPageIndex,
    pagesCount,
    showPage: handlePageChange
  }) : ` ${validate_component(Dots, "Dots").$$render($$result, { pagesCount, currentPageIndex }, {}, {})} `}` : ``} </div>`;
});
const AppCarouselList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $focusedGrid, $$unsubscribe_focusedGrid;
  let $selectedComponent, $$unsubscribe_selectedComponent;
  let $app, $$unsubscribe_app;
  let $worldStore, $$unsubscribe_worldStore;
  let $$unsubscribe_connectingInput;
  let { id } = $$props;
  let { componentInput } = $$props;
  let { configuration } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  let { initializing } = $$props;
  let { componentContainerHeight } = $$props;
  const { app, focusedGrid, selectedComponent, worldStore, connectingInput } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_focusedGrid = subscribe(focusedGrid, (value) => $focusedGrid = value);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => $selectedComponent = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => value);
  const outputs = initOutput($worldStore, id, {
    result: void 0,
    loading: false,
    inputs: {}
  });
  const resolvedConfig = initConfig(components["carousellistcomponent"].initialData.configuration, configuration);
  let css2 = initCss($app.css?.carousellistcomponent, customCss);
  let result = void 0;
  let inputs = {};
  let carousel;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.initializing === void 0 && $$bindings.initializing && initializing !== void 0) $$bindings.initializing(initializing);
  if ($$props.componentContainerHeight === void 0 && $$bindings.componentContainerHeight && componentContainerHeight !== void 0) $$bindings.componentContainerHeight(componentContainerHeight);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $selectedComponent?.includes(id) && $focusedGrid === void 0 && set_store_value(focusedGrid, $focusedGrid = { parentComponentId: id, subGridIndex: 0 }, $focusedGrid);
    $$rendered = `${each(Object.keys(components["carousellistcomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.carousellistcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${validate_component(RunnableWrapper, "RunnableWrapper").$$render(
      $$result,
      {
        render: true,
        outputs,
        autoRefresh: true,
        componentInput,
        id,
        initializing,
        result
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        },
        result: ($$value) => {
          result = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="w-full flex flex-wrap overflow-auto divide-y max-h-full">${$app.subgrids?.[`${id}-0`] ? `${Array.isArray(result) && result.length > 0 ? `${validate_component(Carousel, "Carousel").$$render(
            $$result,
            {
              particlesToShow: 1,
              particlesToScroll: 1,
              autoplay: false,
              autoplayProgressVisible: false,
              timingFunction: resolvedConfig.timingFunction,
              dots: true,
              arrows: true,
              swiping: false,
              this: carousel
            },
            {
              this: ($$value) => {
                carousel = $$value;
                $$settled = false;
              }
            },
            {
              next: () => {
                return `<div slot="next" class="h-full flex justify-center flex-col p-2"><div>${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
                  default: () => {
                    return `${validate_component(Arrow_right_circle, "ArrowRightCircle").$$render($$result, { size: 16 }, {}, {})}`;
                  }
                })}</div></div>`;
              },
              prev: () => {
                return `<div slot="prev" class="h-full flex justify-center flex-col p-2"><div>${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
                  default: () => {
                    return `${validate_component(Arrow_left_circle, "ArrowLeftCircle").$$render($$result, { size: 16 }, {}, {})}`;
                  }
                })}</div></div>`;
              },
              default: () => {
                return `${each(result ?? [], (value, index) => {
                  return `<div class="overflow-auto w-full">${validate_component(ListWrapper, "ListWrapper").$$render(
                    $$result,
                    {
                      onSet: (id2, value2) => {
                        if (!inputs[id2]) {
                          inputs[id2] = { [index]: value2 };
                        } else {
                          inputs[id2] = { ...inputs[id2], [index]: value2 };
                        }
                        outputs?.inputs.set(inputs, true);
                      },
                      onRemove: (id2) => {
                        if (inputs?.[id2] == void 0) {
                          return;
                        }
                        if (index == 0) {
                          delete inputs[id2];
                          inputs = { ...inputs };
                        } else {
                          delete inputs[id2][index];
                          inputs[id2] = { ...inputs[id2] };
                        }
                        outputs?.inputs.set(inputs, true);
                      },
                      value,
                      index
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(SubGridEditor, "SubGridEditor").$$render(
                          $$result,
                          {
                            id,
                            visible: render,
                            class: twMerge(css2?.container?.class, "wm-carousel"),
                            style: css2?.container?.style,
                            subGridId: `${id}-0`,
                            containerHeight: componentContainerHeight - 40
                          },
                          {},
                          {}
                        )} `;
                      }
                    }
                  )} </div>`;
                })}`;
              }
            }
          )}` : `${validate_component(ListWrapper, "ListWrapper").$$render(
            $$result,
            {
              disabled: true,
              value: void 0,
              index: 0
            },
            {},
            {
              default: () => {
                return `${validate_component(SubGridEditor, "SubGridEditor").$$render($$result, { visible: false, id, subGridId: `${id}-0` }, {}, {})}`;
              }
            }
          )} ${!Array.isArray(result) ? `<div class="text-center text-tertiary" data-svelte-h="svelte-ej2i0b">Input data is not an array</div>` : ``}`}` : ``}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_focusedGrid();
  $$unsubscribe_selectedComponent();
  $$unsubscribe_app();
  $$unsubscribe_worldStore();
  $$unsubscribe_connectingInput();
  return $$rendered;
});
const SyncColumnDefs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_selectedComponent;
  let $$unsubscribe_app;
  let $mode, $$unsubscribe_mode;
  let { id } = $$props;
  let { columnDefs = [] } = $$props;
  let { result = [] } = $$props;
  let { allowColumnDefsActions = true } = $$props;
  const { app, mode, selectedComponent } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => value);
  $$unsubscribe_mode = subscribe(mode, (value) => $mode = value);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => value);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.columnDefs === void 0 && $$bindings.columnDefs && columnDefs !== void 0) $$bindings.columnDefs(columnDefs);
  if ($$props.result === void 0 && $$bindings.result && result !== void 0) $$bindings.result(result);
  if ($$props.allowColumnDefsActions === void 0 && $$bindings.allowColumnDefsActions && allowColumnDefsActions !== void 0) $$bindings.allowColumnDefsActions(allowColumnDefsActions);
  $$unsubscribe_selectedComponent();
  $$unsubscribe_app();
  $$unsubscribe_mode();
  return `${Array.isArray(result) && result.every(isObject) ? `${Array.isArray(columnDefs) && columnDefs.every(isObject) ? `${$mode === "dnd" && columnDefs?.length === 0 && result?.length > 0 && allowColumnDefsActions ? `<div class="m-16">${validate_component(Alert, "Alert").$$render($$result, { title: "Missing column definitions" }, {}, {
    default: () => {
      return `<div class="flex flex-col items-start gap-2"><div class="text-xs" data-svelte-h="svelte-iijmd3">No columns definition found. Columns found in data:</div> <div class="text-sm flex flex-row gap-2">${each(Object.keys(result[0] ?? []), (key) => {
        return `${validate_component(Badge, "Badge").$$render($$result, { small: true, color: "dark-gray" }, {}, {
          default: () => {
            return `${escape(key)}`;
          }
        })}`;
      })}</div> <div class="w-full flex fles-row justify-end">${validate_component(Button, "Button").$$render(
        $$result,
        {
          startIcon: { icon: Refresh_cw },
          size: "xs",
          color: "dark"
        },
        {},
        {
          default: () => {
            return `Sync columns definition`;
          }
        }
      )}</div></div>`;
    }
  })}</div>` : `${slots.default ? slots.default({}) : ``}`}` : `${columnDefs !== void 0 ? `<div class="m-16">${validate_component(Alert, "Alert").$$render(
    $$result,
    {
      title: "Parsing issues",
      type: "error",
      size: "xs"
    },
    {},
    {
      default: () => {
        return `<div class="flex flex-col items-start gap-2">The columnDefs should be an array of objects, received:
					<pre class="overflow-auto">${escape(JSON.stringify(columnDefs))}
				</pre> ${allowColumnDefsActions ? `<div class="w-full flex fles-row justify-end">${validate_component(Button, "Button").$$render(
          $$result,
          {
            startIcon: { icon: Refresh_cw },
            size: "xs",
            color: "red"
          },
          {},
          {
            default: () => {
              return `Fix columns definitions`;
            }
          }
        )}</div>` : ``}</div>`;
      }
    }
  )}</div>` : `${$mode === "dnd" ? `<div class="m-16">${validate_component(Alert, "Alert").$$render(
    $$result,
    {
      title: "Parsing issues",
      type: "error",
      size: "xs"
    },
    {},
    {
      default: () => {
        return `<div class="flex flex-col items-start gap-2">The columnDefs are undefined.
					${allowColumnDefsActions ? `<div class="w-full flex fles-row justify-end">${validate_component(Button, "Button").$$render(
          $$result,
          {
            startIcon: { icon: Refresh_cw },
            size: "xs",
            color: "red"
          },
          {},
          {
            default: () => {
              return `Fix columns definitions`;
            }
          }
        )}</div>` : ``}</div>`;
      }
    }
  )}</div>` : ``}`}`}` : ``}`;
});
const AppButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let errorsMessage;
  let $app, $$unsubscribe_app;
  let $$unsubscribe_selectedComponent;
  let $componentControl, $$unsubscribe_componentControl;
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  let { componentInput } = $$props;
  let { configuration } = $$props;
  let { recomputeIds = void 0 } = $$props;
  let { extraQueryParams = {} } = $$props;
  let { horizontalAlignment = void 0 } = $$props;
  let { verticalAlignment = void 0 } = $$props;
  let { noWFull = false } = $$props;
  let { preclickAction = void 0 } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  let { errorHandledByComponent = false } = $$props;
  let { extraKey = void 0 } = $$props;
  let { isMenuItem = false } = $$props;
  let { noInitialize = false } = $$props;
  let { replaceCallback = false } = $$props;
  let { controls = void 0 } = $$props;
  const { worldStore, app, componentControl, selectedComponent } = getContext("AppViewerContext");
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => $componentControl = value);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => value);
  const rowContext = getContext("RowWrapperContext");
  const rowInputs = getContext("RowInputs");
  const iterContext = getContext("ListWrapperContext");
  const listInputs = getContext("ListInputs");
  let resolvedConfig = initConfig(components["buttoncomponent"].initialData.configuration, configuration);
  let outputs = initOutput($worldStore, id, {
    result: void 0,
    loading: false,
    jobId: void 0
  });
  if (controls) {
    set_store_value(componentControl, $componentControl[id] = controls, $componentControl);
  }
  let runnableComponent;
  let confirmedCallback = void 0;
  let beforeIconComponent;
  let afterIconComponent;
  async function handleBeforeIcon() {
    if (resolvedConfig.beforeIcon) {
      beforeIconComponent = await loadIcon(resolvedConfig.beforeIcon, beforeIconComponent, 14, void 0, void 0);
    }
  }
  async function handleAfterIcon() {
    if (resolvedConfig.afterIcon) {
      afterIconComponent = await loadIcon(resolvedConfig.afterIcon, afterIconComponent, 14, void 0, void 0);
    }
  }
  onDestroy(() => {
    listInputs?.remove(id);
    rowInputs?.remove(id);
  });
  let errors = {};
  let runnableWrapper;
  let loading = false;
  let css2 = initCss($app.css?.buttoncomponent, customCss);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.recomputeIds === void 0 && $$bindings.recomputeIds && recomputeIds !== void 0) $$bindings.recomputeIds(recomputeIds);
  if ($$props.extraQueryParams === void 0 && $$bindings.extraQueryParams && extraQueryParams !== void 0) $$bindings.extraQueryParams(extraQueryParams);
  if ($$props.horizontalAlignment === void 0 && $$bindings.horizontalAlignment && horizontalAlignment !== void 0) $$bindings.horizontalAlignment(horizontalAlignment);
  if ($$props.verticalAlignment === void 0 && $$bindings.verticalAlignment && verticalAlignment !== void 0) $$bindings.verticalAlignment(verticalAlignment);
  if ($$props.noWFull === void 0 && $$bindings.noWFull && noWFull !== void 0) $$bindings.noWFull(noWFull);
  if ($$props.preclickAction === void 0 && $$bindings.preclickAction && preclickAction !== void 0) $$bindings.preclickAction(preclickAction);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.errorHandledByComponent === void 0 && $$bindings.errorHandledByComponent && errorHandledByComponent !== void 0) $$bindings.errorHandledByComponent(errorHandledByComponent);
  if ($$props.extraKey === void 0 && $$bindings.extraKey && extraKey !== void 0) $$bindings.extraKey(extraKey);
  if ($$props.isMenuItem === void 0 && $$bindings.isMenuItem && isMenuItem !== void 0) $$bindings.isMenuItem(isMenuItem);
  if ($$props.noInitialize === void 0 && $$bindings.noInitialize && noInitialize !== void 0) $$bindings.noInitialize(noInitialize);
  if ($$props.replaceCallback === void 0 && $$bindings.replaceCallback && replaceCallback !== void 0) $$bindings.replaceCallback(replaceCallback);
  if ($$props.controls === void 0 && $$bindings.controls && controls !== void 0) $$bindings.controls(controls);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    errorHandledByComponent = resolvedConfig?.onError?.selected !== "errorOverlay";
    resolvedConfig.beforeIcon && beforeIconComponent && handleBeforeIcon();
    resolvedConfig.afterIcon && afterIconComponent && handleAfterIcon();
    errorsMessage = Object.values(errors).filter((x) => x != "").join("\n");
    $$rendered = `${each(Object.entries(components["buttoncomponent"].initialData.configuration), ([key, initialConfig]) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          extraKey,
          key,
          configuration: configuration[key],
          initialConfig,
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          extraKey,
          key,
          componentStyle: $app.css?.buttoncomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}  ${validate_component(RunnableWrapper, "RunnableWrapper").$$render(
      $$result,
      {
        noInitialize,
        recomputeIds,
        componentInput,
        doOnSuccess: resolvedConfig.onSuccess,
        doOnError: resolvedConfig.onError,
        errorHandledByComponent,
        id,
        extraQueryParams,
        autoRefresh: false,
        render,
        outputs,
        extraKey,
        onSuccess: (r) => {
          let inputOutput = { result: r, loading: false };
          if (rowContext && rowInputs) {
            rowInputs.set(id, inputOutput);
          }
          if (iterContext && listInputs) {
            listInputs.set(id, inputOutput);
          }
        },
        refreshOnStart: resolvedConfig.triggerOnAppLoad,
        replaceCallback,
        this: runnableWrapper,
        runnableComponent,
        loading
      },
      {
        this: ($$value) => {
          runnableWrapper = $$value;
          $$settled = false;
        },
        runnableComponent: ($$value) => {
          runnableComponent = $$value;
          $$settled = false;
        },
        loading: ($$value) => {
          loading = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(AlignWrapper, "AlignWrapper").$$render(
            $$result,
            {
              noWFull,
              horizontalAlignment,
              verticalAlignment,
              class: "wm-button-wrapper"
            },
            {},
            {
              default: () => {
                return `${errorsMessage ? `<div class="text-red-500 text-xs">${escape(errorsMessage)}</div>` : ``} ${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    btnClasses: twMerge(css2?.button?.class ?? "", isMenuItem ? "flex items-center justify-start" : "", isMenuItem ? "!border-0" : "", "wm-button"),
                    variant: isMenuItem ? "border" : "contained",
                    style: css2?.button?.style,
                    wrapperClasses: twMerge(css2?.container?.class ?? "", resolvedConfig.fillContainer ? "w-full h-full" : "", isMenuItem ? "w-full" : "", "wm-button-container"),
                    wrapperStyle: css2?.container?.style,
                    disabled: resolvedConfig.disabled,
                    size: resolvedConfig.size,
                    color: resolvedConfig.color,
                    loading
                  },
                  {},
                  {
                    default: () => {
                      return `${resolvedConfig.beforeIcon ? `<div class="min-w-4"${add_attribute("this", beforeIconComponent, 0)}></div>` : ``} ${resolvedConfig.label?.toString() && resolvedConfig.label?.toString()?.length > 0 ? `<div>${escape(resolvedConfig.label.toString())}</div>` : ``} ${resolvedConfig.afterIcon ? `<div class="min-w-4"${add_attribute("this", afterIconComponent, 0)}></div>` : ``}`;
                    }
                  }
                )}`;
              }
            }
          )}`;
        }
      }
    )} ${resolvedConfig?.confirmationModal?.selected === "confirmationModal" ? `${validate_component(Portal, "Portal").$$render($$result, { target: "#app-editor-top-level-drawer" }, {}, {
      default: () => {
        return `${validate_component(ConfirmationModal, "ConfirmationModal").$$render(
          $$result,
          {
            open: Boolean(confirmedCallback),
            title: resolvedConfig?.confirmationModal?.configuration?.confirmationModal?.title ?? "",
            confirmationText: resolvedConfig?.confirmationModal?.configuration?.confirmationModal?.confirmationText ?? ""
          },
          {},
          {
            default: () => {
              return `<div class="flex flex-col w-full space-y-4"><span>${escape(resolvedConfig?.confirmationModal?.configuration?.confirmationModal?.description ?? "")}</span></div>`;
            }
          }
        )}`;
      }
    })}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_selectedComponent();
  $$unsubscribe_componentControl();
  $$unsubscribe_worldStore();
  return $$rendered;
});
const AppCheckbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $runnableComponents, $$unsubscribe_runnableComponents;
  let $worldStore, $$unsubscribe_worldStore;
  let $componentControl, $$unsubscribe_componentControl;
  let { id } = $$props;
  let { configuration } = $$props;
  let { horizontalAlignment = void 0 } = $$props;
  let { verticalAlignment = void 0 } = $$props;
  let { recomputeIds = void 0 } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  let { extraKey = void 0 } = $$props;
  let { preclickAction = void 0 } = $$props;
  let { noInitialize = false } = $$props;
  let { onToggle = void 0 } = $$props;
  let { controls = void 0 } = $$props;
  const { app, worldStore, componentControl, runnableComponents } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value2) => $app = value2);
  $$unsubscribe_worldStore = subscribe(worldStore, (value2) => $worldStore = value2);
  $$unsubscribe_componentControl = subscribe(componentControl, (value2) => $componentControl = value2);
  $$unsubscribe_runnableComponents = subscribe(runnableComponents, (value2) => $runnableComponents = value2);
  const iterContext = getContext("ListWrapperContext");
  const listInputs = getContext("ListInputs");
  const rowContext = getContext("RowWrapperContext");
  const rowInputs = getContext("RowInputs");
  let resolvedConfig = initConfig(components["checkboxcomponent"].initialData.configuration, configuration);
  let value = resolvedConfig.defaultValue ?? false;
  set_store_value(
    componentControl,
    $componentControl[id] = {
      setValue(nvalue) {
        value = nvalue;
        if (recomputeIds) {
          recomputeIds.forEach((id2) => $runnableComponents?.[id2]?.cb?.forEach((cb) => cb()));
        }
      }
    },
    $componentControl
  );
  if (controls) {
    set_store_value(componentControl, $componentControl[id] = { ...$componentControl[id], ...controls }, $componentControl);
  }
  let outputs = initOutput($worldStore, id, { result: false });
  function handleInput() {
    outputs.result.set(value);
    if (iterContext && listInputs) {
      listInputs.set(id, value);
    }
    if (rowContext && rowInputs) {
      rowInputs.set(id, value);
    }
  }
  function handleDefault() {
    value = resolvedConfig.defaultValue ?? false;
    handleInput();
    if (recomputeIds) {
      recomputeIds.forEach((id2) => $runnableComponents?.[id2]?.cb?.forEach((cb) => cb()));
    }
  }
  onDestroy(() => {
    listInputs?.remove(id);
    rowInputs?.remove(id);
  });
  let css2 = initCss($app.css?.checkboxcomponent, customCss);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.horizontalAlignment === void 0 && $$bindings.horizontalAlignment && horizontalAlignment !== void 0) $$bindings.horizontalAlignment(horizontalAlignment);
  if ($$props.verticalAlignment === void 0 && $$bindings.verticalAlignment && verticalAlignment !== void 0) $$bindings.verticalAlignment(verticalAlignment);
  if ($$props.recomputeIds === void 0 && $$bindings.recomputeIds && recomputeIds !== void 0) $$bindings.recomputeIds(recomputeIds);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.extraKey === void 0 && $$bindings.extraKey && extraKey !== void 0) $$bindings.extraKey(extraKey);
  if ($$props.preclickAction === void 0 && $$bindings.preclickAction && preclickAction !== void 0) $$bindings.preclickAction(preclickAction);
  if ($$props.noInitialize === void 0 && $$bindings.noInitialize && noInitialize !== void 0) $$bindings.noInitialize(noInitialize);
  if ($$props.onToggle === void 0 && $$bindings.onToggle && onToggle !== void 0) $$bindings.onToggle(onToggle);
  if ($$props.controls === void 0 && $$bindings.controls && controls !== void 0) $$bindings.controls(controls);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    value != void 0 && handleInput();
    resolvedConfig.defaultValue != void 0 && handleDefault();
    $$rendered = `${each(Object.keys(components["checkboxcomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          extraKey,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.checkboxcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${!noInitialize ? `${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})}` : ``} ${validate_component(AlignWrapper, "AlignWrapper").$$render(
      $$result,
      {
        render,
        horizontalAlignment,
        verticalAlignment,
        class: twMerge(css2?.container?.class, "wm-toggle-container"),
        style: css2?.container?.style
      },
      {},
      {
        default: () => {
          return `${validate_component(Toggle, "Toggle").$$render(
            $$result,
            {
              size: "sm",
              options: { right: resolvedConfig.label },
              textClass: twMerge(css2?.text?.class, "wm-toggle-text"),
              textStyle: css2?.text?.style ?? "",
              disabled: resolvedConfig.disabled,
              checked: value
            },
            {
              checked: ($$value) => {
                value = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_runnableComponents();
  $$unsubscribe_worldStore();
  $$unsubscribe_componentControl();
  return $$rendered;
});
const AppSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $runnableComponents, $$unsubscribe_runnableComponents;
  let $worldStore, $$unsubscribe_worldStore;
  let $componentControl, $$unsubscribe_componentControl;
  let $darkMode, $$unsubscribe_darkMode;
  let $$unsubscribe_connectingInput;
  let $$unsubscribe_selectedComponent;
  let { id } = $$props;
  let { configuration } = $$props;
  let { verticalAlignment = void 0 } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  let { extraKey = void 0 } = $$props;
  let { preclickAction = void 0 } = $$props;
  let { recomputeIds = void 0 } = $$props;
  let { noInitialize = false } = $$props;
  let { controls = void 0 } = $$props;
  let { noDefault = false } = $$props;
  let { onSelect = void 0 } = $$props;
  const { app, worldStore, connectingInput, selectedComponent, runnableComponents, componentControl, darkMode } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value2) => $app = value2);
  $$unsubscribe_worldStore = subscribe(worldStore, (value2) => $worldStore = value2);
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value2) => value2);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value2) => value2);
  $$unsubscribe_runnableComponents = subscribe(runnableComponents, (value2) => $runnableComponents = value2);
  $$unsubscribe_componentControl = subscribe(componentControl, (value2) => $componentControl = value2);
  $$unsubscribe_darkMode = subscribe(darkMode, (value2) => $darkMode = value2);
  const iterContext = getContext("ListWrapperContext");
  const listInputs = getContext("ListInputs");
  const rowContext = getContext("RowWrapperContext");
  const rowInputs = getContext("RowInputs");
  set_store_value(
    componentControl,
    $componentControl[id] = {
      setValue(nvalue) {
        setValue(JSON.stringify(nvalue));
      }
    },
    $componentControl
  );
  if (controls) {
    set_store_value(componentControl, $componentControl[id] = { ...$componentControl[id], ...controls }, $componentControl);
  }
  let resolvedConfig = initConfig(components["selectcomponent"].initialData.configuration, configuration);
  let outputs = initOutput($worldStore, id, { result: void 0 });
  let value = noDefault ? void 0 : outputs?.result.peak() ? JSON.stringify(outputs?.result.peak()) : void 0;
  let listItems = [];
  function handleItems() {
    listItems = Array.isArray(resolvedConfig.items) ? resolvedConfig.items.map((item) => {
      if (!item || typeof item !== "object") {
        console.error("Select component items should be an array of objects");
        return { label: "not object", value: "not object" };
      }
      return {
        label: item?.label ?? "undefined",
        value: item?.value != void 0 ? JSON.stringify(item.value) : "undefined"
      };
    }) : [];
    let rawValue;
    if (resolvedConfig.defaultValue !== void 0) {
      rawValue = resolvedConfig.defaultValue;
    } else if (listItems.length > 0 && resolvedConfig?.preselectFirst) {
      rawValue = resolvedConfig.items[0].value;
    }
    if (rawValue !== void 0 && rawValue !== null) {
      value = JSON.stringify(rawValue);
      outputs?.result.set(rawValue);
    }
    if (iterContext && listInputs) {
      listInputs.set(id, rawValue);
    }
    if (rowContext && rowInputs) {
      rowInputs.set(id, rawValue);
    }
  }
  onDestroy(() => {
    listInputs?.remove(id);
    rowInputs?.remove(id);
  });
  function setValue(nvalue) {
    let result = void 0;
    try {
      result = JSON.parse(nvalue);
    } catch (_) {
    }
    value = nvalue;
    outputs?.result.set(result);
    if (iterContext && listInputs) {
      listInputs.set(id, result);
    }
    if (rowContext && rowInputs) {
      rowInputs.set(id, result);
    }
    if (recomputeIds) {
      recomputeIds.forEach((id2) => $runnableComponents?.[id2]?.cb?.forEach((f) => f()));
    }
  }
  let css2 = initCss($app.css?.selectcomponent, customCss);
  function handleDefault() {
    if (resolvedConfig.defaultValue) {
      value = JSON.stringify(resolvedConfig.defaultValue);
      outputs?.result.set(resolvedConfig.defaultValue);
    }
  }
  let filterText = "";
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.verticalAlignment === void 0 && $$bindings.verticalAlignment && verticalAlignment !== void 0) $$bindings.verticalAlignment(verticalAlignment);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.extraKey === void 0 && $$bindings.extraKey && extraKey !== void 0) $$bindings.extraKey(extraKey);
  if ($$props.preclickAction === void 0 && $$bindings.preclickAction && preclickAction !== void 0) $$bindings.preclickAction(preclickAction);
  if ($$props.recomputeIds === void 0 && $$bindings.recomputeIds && recomputeIds !== void 0) $$bindings.recomputeIds(recomputeIds);
  if ($$props.noInitialize === void 0 && $$bindings.noInitialize && noInitialize !== void 0) $$bindings.noInitialize(noInitialize);
  if ($$props.controls === void 0 && $$bindings.controls && controls !== void 0) $$bindings.controls(controls);
  if ($$props.noDefault === void 0 && $$bindings.noDefault && noDefault !== void 0) $$bindings.noDefault(noDefault);
  if ($$props.onSelect === void 0 && $$bindings.onSelect && onSelect !== void 0) $$bindings.onSelect(onSelect);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    resolvedConfig.items && handleItems();
    resolvedConfig.defaultValue && handleDefault();
    $$rendered = `${each(Object.keys(components["selectcomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          extraKey,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.selectcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${!noInitialize ? `${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})}` : ``} ${validate_component(AlignWrapper, "AlignWrapper").$$render($$result, { render, verticalAlignment }, {}, {
      default: () => {
        return `<div class="app-select w-full" style="height: 34px;">${Array.isArray(listItems) && listItems.every((x) => x && typeof x == "object" && typeof x["label"] == "string" && `value` in x) ? `<div style="display: contents; --border-radius:0.250rem; --clear-icon-color:#6b7280; --border:${escape($darkMode ? "1px solid #6b7280" : "1px solid #d1d5db", true)};">${validate_component(Select, "Select").$$render(
          $$result,
          {
            inAppEditor: true,
            items: listItems,
            listAutoWidth: resolvedConfig.fullWidth,
            inputStyles: SELECT_INPUT_DEFAULT_STYLE.inputStyles,
            containerStyles: ($darkMode ? SELECT_INPUT_DEFAULT_STYLE.containerStylesDark : SELECT_INPUT_DEFAULT_STYLE.containerStyles) + css2?.input?.style,
            value,
            class: css2?.input?.class,
            placeholder: resolvedConfig.placeholder,
            disabled: resolvedConfig.disabled,
            filterText
          },
          {
            filterText: ($$value) => {
              filterText = $$value;
              $$settled = false;
            }
          },
          {
            item: ({ item }) => {
              return `${resolvedConfig.create ? `${escape(item.created ? "Add new: " : "")}` : ``}${escape(item.label)}`;
            }
          }
        )}</div>` : `${validate_component(Popover, "Popover").$$render(
          $$result,
          {
            notClickable: true,
            placement: "bottom",
            popupClass: "!bg-surface border w-96"
          },
          {},
          {
            text: () => {
              return `<span slot="text"><div class="bg-surface">${validate_component(Alert, "Alert").$$render(
                $$result,
                {
                  title: "Incorrect options",
                  type: "error",
                  size: "xs",
                  class: "h-full w-full "
                },
                {},
                {
                  default: () => {
                    return `The selectable items should be an array of ${escape('{"value": any, "label":}')}. Found:
							<pre class="w-full bg-surface p-2 rounded-md whitespace-pre-wrap">${escape(JSON.stringify(listItems, null, 4))}</pre>`;
                  }
                }
              )}</div></span>`;
            },
            default: () => {
              return `<div${add_attribute("class", classNames("bg-red-100 w-full h-full flex items-center justify-center text-red-500"), 0)}>${validate_component(Bug, "Bug").$$render($$result, { size: 14 }, {}, {})}</div>`;
            }
          }
        )}`}</div>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_runnableComponents();
  $$unsubscribe_worldStore();
  $$unsubscribe_componentControl();
  $$unsubscribe_darkMode();
  $$unsubscribe_connectingInput();
  $$unsubscribe_selectedComponent();
  return $$rendered;
});
const RowWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $ctx, $$unsubscribe_ctx;
  let { index } = $$props;
  let { value } = $$props;
  let { disabled = false } = $$props;
  let { onSet } = $$props;
  let { onRemove } = $$props;
  const ctx = writable({ index, value, disabled });
  $$unsubscribe_ctx = subscribe(ctx, (value2) => $ctx = value2);
  setContext("RowWrapperContext", ctx);
  setContext("RowInputs", {
    set: (id, value2) => {
      onSet(id, value2);
    },
    remove(id) {
      onRemove(id);
    }
  });
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.onSet === void 0 && $$bindings.onSet && onSet !== void 0) $$bindings.onSet(onSet);
  if ($$props.onRemove === void 0 && $$bindings.onRemove && onRemove !== void 0) $$bindings.onRemove(onRemove);
  set_store_value(ctx, $ctx = { index, value, disabled }, $ctx);
  $$unsubscribe_ctx();
  return `${slots.default ? slots.default({}) : ``}`;
});
const AppAggridTableActions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $hoverStore, $$unsubscribe_hoverStore;
  let $connectingInput, $$unsubscribe_connectingInput;
  let $selectedComponent, $$unsubscribe_selectedComponent;
  let $mode, $$unsubscribe_mode;
  let { id } = $$props;
  let { render } = $$props;
  let { actions = [] } = $$props;
  let { rowIndex } = $$props;
  let { row } = $$props;
  let { onSet } = $$props;
  let { onRemove } = $$props;
  let { wrapActions = void 0 } = $$props;
  let { selectRow } = $$props;
  const dispatch = createEventDispatcher();
  const { selectedComponent, hoverStore, mode, connectingInput } = getContext("AppViewerContext");
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => $selectedComponent = value);
  $$unsubscribe_hoverStore = subscribe(hoverStore, (value) => $hoverStore = value);
  $$unsubscribe_mode = subscribe(mode, (value) => $mode = value);
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => $connectingInput = value);
  let rowDiv = void 0;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.actions === void 0 && $$bindings.actions && actions !== void 0) $$bindings.actions(actions);
  if ($$props.rowIndex === void 0 && $$bindings.rowIndex && rowIndex !== void 0) $$bindings.rowIndex(rowIndex);
  if ($$props.row === void 0 && $$bindings.row && row !== void 0) $$bindings.row(row);
  if ($$props.onSet === void 0 && $$bindings.onSet && onSet !== void 0) $$bindings.onSet(onSet);
  if ($$props.onRemove === void 0 && $$bindings.onRemove && onRemove !== void 0) $$bindings.onRemove(onRemove);
  if ($$props.wrapActions === void 0 && $$bindings.wrapActions && wrapActions !== void 0) $$bindings.wrapActions(wrapActions);
  if ($$props.selectRow === void 0 && $$bindings.selectRow && selectRow !== void 0) $$bindings.selectRow(selectRow);
  $$unsubscribe_hoverStore();
  $$unsubscribe_connectingInput();
  $$unsubscribe_selectedComponent();
  $$unsubscribe_mode();
  return `${validate_component(RowWrapper, "RowWrapper").$$render(
    $$result,
    {
      value: row,
      index: rowIndex,
      onSet,
      onRemove
    },
    {},
    {
      default: () => {
        return `<div${add_attribute("class", twMerge("flex flex-row justify-center items-center gap-4 h-full px-4 py-1 w-full", wrapActions ? "flex-wrap" : ""), 0)}${add_attribute("this", rowDiv, 0)}>${each(actions, (action, actionIndex) => {
          return `   <div${add_attribute(
            "class",
            twMerge(
              ($selectedComponent?.includes(action.id) || $hoverStore === action.id) && $mode !== "preview" ? "outline outline-indigo-500 outline-1 outline-offset-1 relative " : "relative",
              $hoverStore === action.id && $selectedComponent?.[0] !== action.id ? "outline-blue-500" : "",
              "w-full cursor-pointer"
            ),
            0
          )}>${$mode !== "preview" ? `  <div${add_attribute("title", `Id: ${action.id}`, 0)}${add_attribute(
            "class",
            twMerge(
              "px-2 text-2xs font-bold absolute shadow  -top-2 -left-4 border z-50 rounded-sm w-8 !h-5 flex justify-center items-center",
              "bg-indigo-500/90 border-indigo-600 text-white",
              $hoverStore === action.id && $selectedComponent?.[0] !== action.id ? "bg-blue-500/90 border-blue-600" : "",
              $selectedComponent?.includes(action.id) || $hoverStore === action.id ? "opacity-100" : "opacity-0"
            ),
            0
          )}>${escape(action.id)}</div> ${$connectingInput.opened ? `<div class="absolute z-50 left-8 -top-[10px]">${validate_component(Popup, "Popup").$$render(
            $$result,
            {
              floatingConfig: {
                strategy: "absolute",
                placement: "bottom-start"
              }
            },
            {},
            {
              button: () => {
                return `<button class="bg-red-500/70 border border-red-600 px-1 py-0.5" title="Outputs" aria-label="Open output">${validate_component(Plug_2, "Plug2").$$render($$result, { size: 12 }, {}, {})}</button> `;
              },
              default: () => {
                return `${validate_component(ComponentOutputViewer, "ComponentOutputViewer").$$render($$result, { suffix: "table", componentId: action.id }, {}, {})} `;
              }
            }
          )} </div>` : ``}` : ``} ${rowIndex === 0 ? (() => {
            let controls = {
              left: () => {
                if (actionIndex === 0) {
                  $selectedComponent = [id];
                  return true;
                } else if (actionIndex > 0) {
                  $selectedComponent = [actions[actionIndex - 1].id];
                  return true;
                }
                return false;
              },
              right: () => {
                if (actionIndex === actions.length - 1) {
                  return id;
                } else if (actionIndex < actions.length - 1) {
                  $selectedComponent = [actions[actionIndex + 1].id];
                  return true;
                }
                return false;
              }
            };
            return ` ${action.type == "buttoncomponent" ? `${validate_component(AppButton, "AppButton").$$render(
              $$result,
              {
                noInitialize: true,
                extraKey: "idx" + rowIndex,
                render,
                noWFull: true,
                preclickAction: async () => {
                  dispatch("toggleRow");
                  selectRow();
                },
                id: action.id,
                customCss: action.customCss,
                configuration: action.configuration,
                recomputeIds: action.recomputeIds,
                extraQueryParams: { row },
                componentInput: action.componentInput,
                verticalAlignment: "center",
                replaceCallback: true,
                controls
              },
              {},
              {}
            )}` : `${action.type == "checkboxcomponent" ? `${validate_component(AppCheckbox, "AppCheckbox").$$render(
              $$result,
              {
                noInitialize: true,
                extraKey: "idx" + rowIndex,
                render,
                id: action.id,
                customCss: action.customCss,
                configuration: action.configuration,
                recomputeIds: action.recomputeIds,
                onToggle: action.onToggle,
                preclickAction: async () => {
                  dispatch("toggleRow");
                  selectRow();
                },
                verticalAlignment: "center",
                controls
              },
              {},
              {}
            )}` : `${action.type == "selectcomponent" ? `<div style="display: contents; --font-size:10px;">${validate_component(AppSelect, "AppSelect").$$render(
              $$result,
              {
                noDefault: true,
                noInitialize: true,
                extraKey: "idx" + rowIndex,
                render,
                id: action.id,
                customCss: action.customCss,
                configuration: action.configuration,
                recomputeIds: action.recomputeIds,
                onSelect: action.onSelect,
                preclickAction: async () => {
                  dispatch("toggleRow");
                  selectRow();
                },
                controls
              },
              {},
              {}
            )}</div>` : ``}`}`}`;
          })() : `${action.type == "buttoncomponent" ? `${validate_component(AppButton, "AppButton").$$render(
            $$result,
            {
              noInitialize: true,
              extraKey: "idx" + rowIndex,
              render,
              preclickAction: async () => {
                dispatch("toggleRow");
                selectRow();
              },
              noWFull: true,
              id: action.id,
              customCss: action.customCss,
              configuration: action.configuration,
              recomputeIds: action.recomputeIds,
              extraQueryParams: { row },
              replaceCallback: true,
              componentInput: action.componentInput
            },
            {},
            {}
          )}` : `${action.type == "checkboxcomponent" ? `${validate_component(AppCheckbox, "AppCheckbox").$$render(
            $$result,
            {
              noInitialize: true,
              extraKey: "idx" + rowIndex,
              render,
              id: action.id,
              customCss: action.customCss,
              configuration: action.configuration,
              recomputeIds: action.recomputeIds,
              onToggle: action.onToggle,
              preclickAction: async () => {
                dispatch("toggleRow");
                selectRow();
              }
            },
            {},
            {}
          )}` : `${action.type == "selectcomponent" ? `<div style="display: contents; --font-size:10px;">${validate_component(AppSelect, "AppSelect").$$render(
            $$result,
            {
              noDefault: true,
              noInitialize: true,
              extraKey: "idx" + rowIndex,
              render,
              id: action.id,
              customCss: action.customCss,
              configuration: action.configuration,
              recomputeIds: action.recomputeIds,
              onSelect: action.onSelect,
              preclickAction: async () => {
                dispatch("toggleRow");
                selectRow();
              }
            },
            {},
            {}
          )}</div>` : ``}`}`}`} </div>`;
        })}</div>`;
      }
    }
  )}`;
});
class AbstractCellRenderer {
  eGui;
  value;
  params;
  constructor(parentElement = "span") {
    this.eGui = document.createElement(parentElement);
  }
  init(params) {
    this.value = params.value;
    this.createComponent(params);
    this.eGui.addEventListener("click", () => params.onClick?.(params.data));
    this.params = params;
  }
  getGui() {
    return this.eGui;
  }
  refresh(params) {
    this.value = params.value;
    return true;
  }
}
function cellRendererFactory(svelteComponent) {
  class Renderer extends AbstractCellRenderer {
    createComponent(params) {
      svelteComponent(this, params);
    }
  }
  return Renderer;
}
function isLinkObject(value) {
  return value && typeof value === "object" && "href" in value && "label" in value;
}
function defaultCellRenderer(cellRendererType) {
  if (cellRendererType === "link") {
    return (params) => {
      if (isLinkObject(params.value)) {
        const value = params.value;
        return `<a href=${value.href} class="underline" target="_blank">${value.label}</a>`;
      } else if (params.value) {
        return `<a href=${params.value} class="underline" target="_blank">${params.value}</a>`;
      } else {
        return params.value;
      }
    };
  } else {
    return void 0;
  }
}
const css$1$3 = {
  code: ".ag-theme-alpine{--ag-row-border-style:solid;--ag-border-color:#d1d5db;--ag-header-border-style:solid;--ag-border-radius:0;--ag-alpine-active-color:#d1d5db}.ag-theme-alpine-dark{--ag-border-color:#4b5563;--ag-alpine-active-color:#64748b}.grid-cell-centered{align-items:center;display:flex;justify-content:center}.grid-cell-centered .svelte-select{height:32px!important}.grid-cell-centered .selected-item{margin-top:-4px}",
  map: null
};
const AppAggridTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_componentControl;
  let $worldStore, $$unsubscribe_worldStore;
  let $app, $$unsubscribe_app;
  let $$unsubscribe_selectedComponent;
  let $darkMode, $$unsubscribe_darkMode;
  let { id } = $$props;
  let { componentInput } = $$props;
  let { configuration } = $$props;
  let { initializing = void 0 } = $$props;
  let { render } = $$props;
  let { customCss = void 0 } = $$props;
  let { actions = void 0 } = $$props;
  const context = getContext("AppViewerContext");
  const contextPanel = getContext("ContextPanel");
  const iterContext = getContext("ListWrapperContext");
  const listInputs = getContext("ListInputs");
  const { app, worldStore, selectedComponent, componentControl, darkMode } = context;
  $$unsubscribe_app = subscribe(app, (value2) => $app = value2);
  $$unsubscribe_worldStore = subscribe(worldStore, (value2) => $worldStore = value2);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value2) => value2);
  $$unsubscribe_componentControl = subscribe(componentControl, (value2) => value2);
  $$unsubscribe_darkMode = subscribe(darkMode, (value2) => $darkMode = value2);
  const rowHeights = { normal: 40, compact: 30, comfortable: 50 };
  let css2 = initCss($app.css?.aggridcomponent, customCss);
  let result = void 0;
  let value = Array.isArray(result) ? result.map((x, i) => ({ ...x, __index: i.toString() })) : [{ error: "input was not an array" }];
  let loaded = false;
  async function setValues() {
    value = Array.isArray(result) ? result.map((x, i) => ({ ...x, __index: i.toString() })) : [{ error: "input was not an array" }];
    if (!loaded) {
      loaded = true;
    }
  }
  let resolvedConfig = initConfig(components["aggridcomponent"].initialData.configuration, configuration);
  let outputs = initOutput($worldStore, id, {
    selectedRowIndex: 0,
    selectedRow: {},
    selectedRows: [],
    result: [],
    loading: false,
    page: 0,
    newChange: {
      row: 0,
      column: "",
      value: void 0,
      old: void 0
    },
    ready: void 0,
    inputs: {},
    filters: {},
    displayedRowCount: 0
  });
  let selectedRowIndex = -1;
  function toggleRow(row) {
    if (row) {
      let rowIndex = row.rowIndex;
      let data = { ...row.data };
      delete data["__index"];
      if (selectedRowIndex !== rowIndex) {
        selectedRowIndex = rowIndex;
        outputs?.selectedRowIndex.set(rowIndex);
      }
      if (!deepEqual(outputs?.selectedRow?.peak(), data)) {
        outputs?.selectedRow.set(data);
      }
      if (iterContext && listInputs) {
        listInputs.set(id, { selectedRow: data, selectedRowIndex });
      }
    }
  }
  onDestroy(() => {
    listInputs?.remove(id);
  });
  let clientHeight;
  let clientWidth;
  function onCellValueChanged(event) {
    if (result) {
      let dataCell = event.newValue;
      try {
        dataCell = JSON.parse(dataCell);
      } catch (e) {
      }
      outputs?.newChange?.set({
        row: event.node.rowIndex,
        column: event.colDef.field,
        value: dataCell,
        old: result[Number(event.node.data["__index"])][event.colDef.field]
      });
      result[Number(event.node.data["__index"])][event.colDef.field] = dataCell;
      let data = { ...result[event.node.rowIndex] };
      outputs?.selectedRow?.set(data);
    }
  }
  let extraConfig = resolvedConfig.extraConfig;
  let api;
  let eGui;
  function refreshActions(actions2) {
    if (!deepEqual(actions2, lastActions)) {
      lastActions = [...actions2];
      updateOptions();
    }
  }
  let lastActions = void 0;
  let inputs = {};
  const tableActionsFactory = cellRendererFactory((c, p) => {
    const rowIndex = p.node.rowIndex ?? 0;
    const row = p.data;
    const componentContext = /* @__PURE__ */ new Map([["AppViewerContext", context], ["ContextPanel", contextPanel]]);
    new AppAggridTableActions({
      target: c.eGui,
      props: {
        id,
        actions,
        rowIndex,
        row,
        render,
        wrapActions: resolvedConfig.wrapActions,
        selectRow: () => {
          toggleRow(p);
          p.node.setSelected(true);
        },
        onSet: (id2, value2) => {
          if (!inputs[id2]) {
            inputs[id2] = { [rowIndex]: value2 };
          } else {
            inputs[id2] = { ...inputs[id2], [rowIndex]: value2 };
          }
          outputs?.inputs.set(inputs, true);
        },
        onRemove: (id2) => {
          if (inputs?.[id2] == void 0) {
            return;
          }
          delete inputs[id2][rowIndex];
          inputs[id2] = { ...inputs[id2] };
          if (Object.keys(inputs?.[id2] ?? {}).length == 0) {
            delete inputs[id2];
            inputs = { ...inputs };
          }
          outputs?.inputs.set(inputs, true);
        }
      },
      context: componentContext
    });
  });
  function updateOptions() {
    try {
      const columnDefs = Array.isArray(resolvedConfig?.columnDefs) && resolvedConfig.columnDefs.every(isObject) ? [...resolvedConfig?.columnDefs] : [];
      if (actions && actions.length > 0) {
        columnDefs.push({
          headerName: resolvedConfig?.customActionsHeader ? resolvedConfig?.customActionsHeader : "Actions",
          cellRenderer: tableActionsFactory,
          autoHeight: true,
          cellStyle: { textAlign: "center" },
          cellClass: "grid-cell-centered",
          ...!resolvedConfig?.wrapActions ? { minWidth: 130 * actions?.length } : {}
        });
      }
      api?.updateGridOptions({
        rowData: value,
        columnDefs: columnDefs.map((fields) => {
          let cr = defaultCellRenderer(fields.cellRendererType);
          return {
            ...fields,
            ...cr ? { cellRenderer: cr } : {}
          };
        }),
        pagination: resolvedConfig?.pagination,
        paginationAutoPageSize: resolvedConfig?.pagination,
        suppressPaginationPanel: true,
        suppressDragLeaveHidesColumns: true,
        defaultColDef: {
          flex: resolvedConfig.flex ? 1 : 0,
          editable: resolvedConfig?.allEditable,
          onCellValueChanged
        },
        rowSelection: resolvedConfig?.multipleSelectable ? "multiple" : "single",
        rowMultiSelectWithClick: resolvedConfig?.multipleSelectable ? resolvedConfig.rowMultiselectWithClick : void 0,
        rowHeight: resolvedConfig.compactness ? rowHeights[resolvedConfig.compactness] : rowHeights["normal"],
        ...resolvedConfig?.extraConfig ?? {}
      });
    } catch (e) {
      console.error(e);
      sendUserToast("Couldn't update the grid:" + e, true);
    }
  }
  let loading = false;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.initializing === void 0 && $$bindings.initializing && initializing !== void 0) $$bindings.initializing(initializing);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.actions === void 0 && $$bindings.actions && actions !== void 0) $$bindings.actions(actions);
  $$result.css.add(css$1$3);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    result && setValues();
    {
      outputs?.result?.set(result ?? []);
    }
    actions && refreshActions(actions);
    {
      if (!deepEqual(extraConfig, resolvedConfig.extraConfig)) {
        extraConfig = resolvedConfig.extraConfig;
      }
    }
    $$rendered = `${each(Object.keys(components["aggridcomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.tablecomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(RunnableWrapper, "RunnableWrapper").$$render(
      $$result,
      {
        outputs,
        render,
        componentInput,
        id,
        hideRefreshButton: true,
        initializing,
        result,
        loading
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        },
        result: ($$value) => {
          result = $$value;
          $$settled = false;
        },
        loading: ($$value) => {
          loading = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(SyncColumnDefs, "SyncColumnDefs").$$render(
            $$result,
            {
              id,
              columnDefs: resolvedConfig.columnDefs,
              result
            },
            {},
            {
              default: () => {
                return `<div${add_attribute("class", twMerge("flex flex-col h-full component-wrapper divide-y", css2?.container?.class, "wm-aggrid-container"), 0)}${add_attribute("style", css2?.container?.style, 0)}>${componentInput?.type === "runnable" && componentInput.autoRefresh ? `<div class="absolute top-2 right-2 z-50">${validate_component(RefreshButton, "RefreshButton").$$render($$result, { id, loading }, {}, {})}</div>` : ``} <div class="${[
                  "ag-theme-alpine relative",
                  $darkMode ? "ag-theme-alpine-dark" : ""
                ].join(" ").trim()}"${add_styles({
                  "height": `${clientHeight}px`,
                  "width": `${clientWidth}px`
                })}>${loaded ? `<div${add_styles({ "height": `100%` })}${add_attribute("this", eGui, 0)}></div>` : `${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})}`}</div> ${resolvedConfig.footer ? `<div class="flex gap-1 w-full justify-between items-center text-sm text-secondary/80 p-2"><div>${validate_component(Popover, "Popover").$$render($$result, {}, {}, {
                  text: () => {
                    return `Download`;
                  },
                  default: () => {
                    return `${validate_component(Button, "Button").$$render(
                      $$result,
                      {
                        startIcon: { icon: Download },
                        color: "light",
                        size: "xs2",
                        iconOnly: true
                      },
                      {},
                      {}
                    )}`;
                  }
                })}</div> <div class="flex flex-row gap-1 items-center">${resolvedConfig?.pagination ? `<div class="text-xs mx-2 text-primary">${escape(0 * 0 + 1)}
										to ${escape(Math.min(0, (0 + 1) * 0))}
										of ${escape(api?.paginationGetRowCount())}</div> ${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    iconOnly: true,
                    startIcon: { icon: Skip_back },
                    color: "light",
                    size: "xs2",
                    disabled: api?.paginationGetCurrentPage() == 0
                  },
                  {},
                  {}
                )} ${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    iconOnly: true,
                    startIcon: { icon: Chevron_left },
                    color: "light",
                    size: "xs2",
                    disabled: api?.paginationGetCurrentPage() == 0
                  },
                  {},
                  {}
                )} <div class="text-xs mx-2 text-primary">Page ${escape(0 + 1)} of ${escape(0)}</div> ${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    iconOnly: true,
                    startIcon: { icon: Chevron_right },
                    color: "light",
                    size: "xs2",
                    disabled: 0 + 1 == api?.paginationGetTotalPages()
                  },
                  {},
                  {}
                )} ${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    iconOnly: true,
                    startIcon: { icon: Skip_forward },
                    color: "light",
                    size: "xs2",
                    disabled: 0 + 1 == api?.paginationGetTotalPages()
                  },
                  {},
                  {}
                )}` : ``}</div></div>` : ``}</div>`;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_componentControl();
  $$unsubscribe_worldStore();
  $$unsubscribe_app();
  $$unsubscribe_selectedComponent();
  $$unsubscribe_darkMode();
  return $$rendered;
});
const AppAggridTableEe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { license } = $$props;
  let { componentInput } = $$props;
  let { configuration } = $$props;
  let { initializing = void 0 } = $$props;
  let { render } = $$props;
  let { customCss = void 0 } = $$props;
  let { actions = [] } = $$props;
  let loaded = false;
  async function load() {
    await import("ag-grid-enterprise");
    const { LicenseManager } = await import("ag-grid-enterprise");
    LicenseManager.setLicenseKey(license);
    loaded = true;
  }
  load();
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.license === void 0 && $$bindings.license && license !== void 0) $$bindings.license(license);
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.initializing === void 0 && $$bindings.initializing && initializing !== void 0) $$bindings.initializing(initializing);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.actions === void 0 && $$bindings.actions && actions !== void 0) $$bindings.actions(actions);
  return `${loaded ? `${validate_component(AppAggridTable, "AppAggridTable").$$render(
    $$result,
    {
      id,
      componentInput,
      configuration,
      initializing,
      render,
      customCss,
      actions
    },
    {},
    {}
  )}` : `${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})}`}`;
});
const AppCustomComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  let { render } = $$props;
  let { componentInput } = $$props;
  let { customComponent } = $$props;
  let divId = `custom-component-${id}`;
  const { worldStore, workspace } = getContext("AppViewerContext");
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  const outputs = initOutput($worldStore, id, {
    result: void 0,
    output: void 0,
    loading: false
  });
  let result;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.customComponent === void 0 && $$bindings.customComponent && customComponent !== void 0) $$bindings.customComponent(customComponent);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${render ? `<div class="${"w-full h-full overflow-auto " + escape(customComponent?.name ?? "no_name", true)}">${validate_component(RunnableWrapper, "RunnableWrapper").$$render(
      $$result,
      {
        outputs,
        render,
        autoRefresh: true,
        componentInput,
        id,
        result
      },
      {
        result: ($$value) => {
          result = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${`${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})}`} <div${add_attribute("id", divId, 0)}></div>`;
        }
      }
    )}</div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_worldStore();
  return $$rendered;
});
const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { loading } = $$props;
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
  return `${!loading ? `${slots.default ? slots.default({}) : ``}` : `<div class="w-full h-full"><div class="absolute inset-0 center-center flex-col bg-surface text-tertiary border">${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin", size: 16 }, {}, {})} <span class="text-xs mt-1" data-svelte-h="svelte-19kx0d7">Loading</span></div></div>`}`;
});
const AppStatCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isIcon;
  let $app, $$unsubscribe_app;
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  let { configuration } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  const { app, worldStore } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  let resolvedConfig = initConfig(components["statcomponent"].initialData.configuration, configuration);
  initOutput($worldStore, id, {});
  let css2 = initCss($app.css?.statcomponent, customCss);
  let iconComponent;
  async function handleIcon() {
    if (resolvedConfig?.media?.configuration?.icon?.icon) {
      iconComponent = await loadIcon(resolvedConfig?.media?.configuration?.icon?.icon, iconComponent, 34, void 0, void 0);
    }
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    isIcon = resolvedConfig.media?.selected == "icon";
    isIcon && resolvedConfig?.media?.configuration?.icon?.icon && iconComponent && handleIcon();
    $$rendered = `${each(Object.keys(components["statcomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.imagecomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${render ? `<div${add_attribute("class", twMerge("flex flex-row gap-4 items-center p-4 rounded-md shadow-md h-full", css2?.container?.class, "wm-statistic-card-container"), 0)}${add_attribute("style", css2?.container?.style, 0)}><div${add_attribute("class", twMerge("flex items-center justify-center w-12 h-12 border rounded-md p-2 text-black", css2?.media?.class, "wm-statistic-card-media"), 0)}${add_attribute("style", css2?.media?.style, 0)}>${isIcon ? `${resolvedConfig?.media ? `<div class="min-w-4 text-primary"${add_attribute("this", iconComponent, 0)}></div>` : ``}` : `${validate_component(Loader, "Loader").$$render(
      $$result,
      {
        loading: resolvedConfig?.media?.configuration?.image?.source == void 0
      },
      {},
      {
        default: () => {
          return `<img${add_attribute("src", getImageDataURL(resolvedConfig?.media?.configuration?.image?.sourceKind, resolvedConfig?.media?.configuration?.image?.source), 0)}${add_attribute("alt", resolvedConfig?.title, 0)}>`;
        }
      }
    )}`}</div> <div class="w-full"><div${add_attribute("class", twMerge("font-normal text-primary leading-none", css2?.title?.class, "wm-statistic-card-title"), 0)}${add_attribute("style", css2?.title?.style, 0)}>${escape(resolvedConfig?.title)}</div> <div class="mt-1 flex items-baseline justify-between"><div${add_attribute("class", twMerge("flex items-baseline text-2xl leading-none font-semibold text-blue-600 dark:text-blue-200", css2?.value?.class, "wm-statistic-card-value"), 0)}${add_attribute("style", css2?.value?.style, 0)}>${escape(resolvedConfig?.value)}</div> ${resolvedConfig?.progress !== void 0 && resolvedConfig?.progress !== null && resolvedConfig?.progress !== 0 ? `<div${add_attribute(
      "class",
      twMerge("flex items-center flex-row gap-2 rounded-full px-2.5 py-0.5 text-sm font-medium", resolvedConfig?.progress > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"),
      0
    )}>${validate_component(Arrow_down, "ArrowDown").$$render(
      $$result,
      {
        size: 16,
        class: resolvedConfig?.progress > 0 ? "transform rotate-180" : "transform rotate-0"
      },
      {},
      {}
    )} ${escape(resolvedConfig?.progress)}%</div>` : ``}</div></div></div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_worldStore();
  return $$rendered;
});
const AppForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let noInputs;
  let $app, $$unsubscribe_app;
  let $stateId, $$unsubscribe_stateId;
  let $componentControl, $$unsubscribe_componentControl;
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  let { componentInput } = $$props;
  let { configuration } = $$props;
  let { recomputeIds = void 0 } = $$props;
  let { extraQueryParams = {} } = $$props;
  let { horizontalAlignment = void 0 } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  let { errorHandledByComponent = false } = $$props;
  const staticOutputs = ["loading", "result", "jobId"];
  const { app, worldStore, stateId, componentControl } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_stateId = subscribe(stateId, (value) => $stateId = value);
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => $componentControl = value);
  const outputs = initOutput($worldStore, id, {
    result: void 0,
    loading: false,
    jobId: void 0
  });
  const resolvedConfig = initConfig(components["formcomponent"].initialData.configuration, configuration);
  set_store_value(
    componentControl,
    $componentControl[id] = {
      setValue(nvalue) {
        wrapper?.setArgs(nvalue);
      },
      invalidate(key, error) {
        runnableComponent?.invalidate(key, error);
      },
      validateAll() {
        runnableComponent?.validateAll();
      },
      validate(key) {
        runnableComponent?.validate(key);
      }
    },
    $componentControl
  );
  let runnableComponent;
  let loading = false;
  let css2 = initCss($app.css?.formcomponent, customCss);
  let wrapper;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.recomputeIds === void 0 && $$bindings.recomputeIds && recomputeIds !== void 0) $$bindings.recomputeIds(recomputeIds);
  if ($$props.extraQueryParams === void 0 && $$bindings.extraQueryParams && extraQueryParams !== void 0) $$bindings.extraQueryParams(extraQueryParams);
  if ($$props.horizontalAlignment === void 0 && $$bindings.horizontalAlignment && horizontalAlignment !== void 0) $$bindings.horizontalAlignment(horizontalAlignment);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.errorHandledByComponent === void 0 && $$bindings.errorHandledByComponent && errorHandledByComponent !== void 0) $$bindings.errorHandledByComponent(errorHandledByComponent);
  if ($$props.staticOutputs === void 0 && $$bindings.staticOutputs && staticOutputs !== void 0) $$bindings.staticOutputs(staticOutputs);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    errorHandledByComponent = resolvedConfig?.onError?.selected !== "errorOverlay";
    noInputs = $stateId != void 0 && (componentInput?.type != "runnable" || Object.keys(componentInput?.fields ?? {}).length == 0);
    $$rendered = `${each(Object.keys(components["formcomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.formcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(RunnableWrapper, "RunnableWrapper").$$render(
      $$result,
      {
        recomputeIds,
        render,
        componentInput,
        id,
        doOnSuccess: resolvedConfig.onSuccess,
        doOnError: resolvedConfig.onError,
        errorHandledByComponent,
        extraQueryParams,
        autoRefresh: false,
        forceSchemaDisplay: true,
        runnableClass: css2?.container?.class,
        runnableStyle: css2?.container?.style,
        outputs,
        this: wrapper,
        runnableComponent,
        loading
      },
      {
        this: ($$value) => {
          wrapper = $$value;
          $$settled = false;
        },
        runnableComponent: ($$value) => {
          runnableComponent = $$value;
          $$settled = false;
        },
        loading: ($$value) => {
          loading = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(AlignWrapper, "AlignWrapper").$$render($$result, { horizontalAlignment }, {}, {
            default: () => {
              return `<div${add_attribute("class", twMerge("flex flex-col gap-2 px-4 w-full", css2?.container?.class, "wm-submit"), 0)}${add_attribute("style", css2?.container?.style ?? "", 0)}><div>${noInputs ? `<div class="text-secondary italic text-sm my-4">Run forms are associated with a runnable that has user inputs.
						<br>
						Once a script or flow is chosen, set some <strong data-svelte-h="svelte-lp2dgg">Runnable Inputs</strong> to
						<strong>User Input
							${validate_component(User, "User").$$render(
                $$result,
                {
                  size: 20,
                  class: "rounded-sm bg-gray-200 p-1 ml-0.5"
                },
                {},
                {}
              )}</strong></div>` : ``}</div> <div class="flex justify-end my-1">${!noInputs ? `${validate_component(Button, "Button").$$render(
                $$result,
                {
                  loading,
                  btnClasses: twMerge(css2?.button?.class, "wm-submit-button"),
                  style: css2?.button?.style ?? "",
                  size: resolvedConfig.size,
                  color: resolvedConfig.color
                },
                {},
                {
                  default: () => {
                    return `${escape(resolvedConfig.label)}`;
                  }
                }
              )}` : ``}</div></div>`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_stateId();
  $$unsubscribe_componentControl();
  $$unsubscribe_worldStore();
  return $$rendered;
});
const AlwaysMountedModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $mode, $$unsubscribe_mode;
  let { title } = $$props;
  let { style = "" } = $$props;
  let { css: css2 = {} } = $$props;
  const { mode } = getContext("AppViewerContext");
  $$unsubscribe_mode = subscribe(mode, (value) => $mode = value);
  let isOpen = false;
  function close() {
    isOpen = false;
  }
  function open() {
    isOpen = true;
  }
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.css === void 0 && $$bindings.css && css2 !== void 0) $$bindings.css(css2);
  if ($$props.close === void 0 && $$bindings.close && close !== void 0) $$bindings.close(close);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  $$unsubscribe_mode();
  return `${validate_component(Portal, "Portal").$$render($$result, { target: "#app-editor-top-level-drawer" }, {}, {
    default: () => {
      return `<div${add_attribute("class", twMerge(`${$mode == "dnd" ? "absolute" : "fixed"} top-0 bottom-0 left-0 right-0 transition-all duration-50 overflow-hidden`, isOpen ? "z-[1100] bg-black bg-opacity-60" : "hidden"), 0)}><div class="flex min-h-full items-center justify-center p-4"><div${add_attribute("style", css2?.popup?.style, 0)}${add_attribute("class", twMerge("bg-surface max-w-5xl m-24 overflow-y-auto rounded-lg relative", css2?.popup?.class, "wm-modal-form-popup"), 0)}><div class="px-4 py-2 border-b flex justify-between items-center"><div>${escape(title)}</div> <div class="w-8"><button class="hover:bg-surface-hover bg-surface-secondary rounded-full w-8 h-8 flex items-center justify-center transition-all">${validate_component(X, "X").$$render($$result, { class: "text-tertiary" }, {}, {})}</button></div></div>  <div class="relative bg-surface rounded-md"><div${add_attribute("class", twMerge("max-w-screen-lg max-h-screen-80 overflow-auto flex flex-col", $$props.class), 0)}${add_attribute("style", style, 0)}>${slots.default ? slots.default({}) : ``}</div></div></div></div></div>`;
    }
  })}`;
});
const AppFormButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let errorsMessage;
  let noInputs;
  let $app, $$unsubscribe_app;
  let $worldStore, $$unsubscribe_worldStore;
  let $componentControl, $$unsubscribe_componentControl;
  let { id } = $$props;
  let { componentInput } = $$props;
  let { configuration } = $$props;
  let { recomputeIds = void 0 } = $$props;
  let { extraQueryParams = {} } = $$props;
  let { horizontalAlignment = void 0 } = $$props;
  let { verticalAlignment = void 0 } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  let { errorHandledByComponent = false } = $$props;
  const { app, worldStore, componentControl } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => $componentControl = value);
  set_store_value(
    componentControl,
    $componentControl[id] = {
      onDelete: () => {
        modal?.close();
      },
      invalidate(key, error) {
        runnableComponent?.invalidate(key, error);
      },
      validateAll() {
        runnableComponent?.validateAll();
      },
      validate(key) {
        runnableComponent?.validate(key);
      }
    },
    $componentControl
  );
  let outputs = initOutput($worldStore, id, { result: void 0, loading: false });
  let resolvedConfig = initConfig(components["formbuttoncomponent"].initialData.configuration, configuration);
  let runnableComponent;
  let errors = {};
  let css2 = initCss($app?.css?.formbuttoncomponent, customCss);
  let runnableWrapper;
  let loading = false;
  let modal;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.recomputeIds === void 0 && $$bindings.recomputeIds && recomputeIds !== void 0) $$bindings.recomputeIds(recomputeIds);
  if ($$props.extraQueryParams === void 0 && $$bindings.extraQueryParams && extraQueryParams !== void 0) $$bindings.extraQueryParams(extraQueryParams);
  if ($$props.horizontalAlignment === void 0 && $$bindings.horizontalAlignment && horizontalAlignment !== void 0) $$bindings.horizontalAlignment(horizontalAlignment);
  if ($$props.verticalAlignment === void 0 && $$bindings.verticalAlignment && verticalAlignment !== void 0) $$bindings.verticalAlignment(verticalAlignment);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.errorHandledByComponent === void 0 && $$bindings.errorHandledByComponent && errorHandledByComponent !== void 0) $$bindings.errorHandledByComponent(errorHandledByComponent);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    errorHandledByComponent = resolvedConfig?.onError?.selected !== "errorOverlay";
    errorsMessage = Object.values(errors).filter((x) => x != "").join("\n");
    noInputs = componentInput?.type != "runnable" || Object.keys(componentInput?.fields ?? {}).length == 0;
    $$rendered = `${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.formbuttoncomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(components["formbuttoncomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(AlwaysMountedModal, "AlwaysMountedModal").$$render(
      $$result,
      {
        css: css2,
        title: resolvedConfig.modalTitle ?? "",
        this: modal
      },
      {
        this: ($$value) => {
          modal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="flex flex-col gap-2 px-4 w-full pt-2">${validate_component(RunnableWrapper, "RunnableWrapper").$$render(
            $$result,
            {
              recomputeIds,
              render,
              componentInput,
              id,
              extraQueryParams,
              autoRefresh: false,
              forceSchemaDisplay: true,
              runnableClass: "!block",
              outputs,
              doOnSuccess: resolvedConfig.onSuccess,
              doOnError: resolvedConfig.onError,
              errorHandledByComponent,
              this: runnableWrapper,
              loading,
              runnableComponent
            },
            {
              this: ($$value) => {
                runnableWrapper = $$value;
                $$settled = false;
              },
              loading: ($$value) => {
                loading = $$value;
                $$settled = false;
              },
              runnableComponent: ($$value) => {
                runnableComponent = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${noInputs ? `<div class="text-secondary italic text-sm my-4">Run forms are associated with a runnable that has user inputs.
					<br>
					Once a script or flow is chosen, set some <strong data-svelte-h="svelte-lp2dgg">Runnable Inputs</strong> to
					<strong>User Input
						${validate_component(User, "User").$$render(
                  $$result,
                  {
                    size: 20,
                    class: "rounded-sm bg-gray-200 p-1 ml-0.5"
                  },
                  {},
                  {}
                )}</strong></div>` : ``} <div class="flex justify-end gap-3 p-2">${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    loading,
                    btnClasses: "my-1",
                    size: "xs",
                    color: "dark"
                  },
                  {},
                  {
                    default: () => {
                      return `Submit`;
                    }
                  }
                )}</div>`;
              }
            }
          )}</div>`;
        }
      }
    )} ${validate_component(AlignWrapper, "AlignWrapper").$$render(
      $$result,
      {
        render,
        horizontalAlignment,
        verticalAlignment
      },
      {},
      {
        default: () => {
          return `${errorsMessage ? `<div class="text-red-500 text-xs">${escape(errorsMessage)}</div>` : ``} ${validate_component(Button, "Button").$$render(
            $$result,
            {
              disabled: resolvedConfig.disabled ?? false,
              size: resolvedConfig.size ?? "md",
              color: resolvedConfig.color,
              btnClasses: twMerge(css2?.button?.class, "wm-button", "wm-modal-form-button"),
              style: css2?.button?.style ?? ""
            },
            {},
            {
              default: () => {
                return `${escape(resolvedConfig.label)}`;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_worldStore();
  $$unsubscribe_componentControl();
  return $$rendered;
});
const AppMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  let { configuration } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  let { horizontalAlignment = void 0 } = $$props;
  let { verticalAlignment = void 0 } = $$props;
  let { menuItems } = $$props;
  const { app, worldStore } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  initOutput($worldStore, id, {
    result: { latestButtonClicked: void 0 }
  });
  const resolvedConfig = initConfig(components["menucomponent"].initialData.configuration, configuration);
  let css2 = initCss($app.css?.menucomponent, customCss);
  let beforeIconComponent;
  let afterIconComponent;
  async function handleBeforeIcon() {
    if (resolvedConfig.beforeIcon) {
      beforeIconComponent = await loadIcon(resolvedConfig.beforeIcon, beforeIconComponent, 14, void 0, void 0);
    }
  }
  async function handleAfterIcon() {
    if (resolvedConfig.afterIcon) {
      afterIconComponent = await loadIcon(resolvedConfig.afterIcon, afterIconComponent, 14, void 0, void 0);
    }
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.horizontalAlignment === void 0 && $$bindings.horizontalAlignment && horizontalAlignment !== void 0) $$bindings.horizontalAlignment(horizontalAlignment);
  if ($$props.verticalAlignment === void 0 && $$bindings.verticalAlignment && verticalAlignment !== void 0) $$bindings.verticalAlignment(verticalAlignment);
  if ($$props.menuItems === void 0 && $$bindings.menuItems && menuItems !== void 0) $$bindings.menuItems(menuItems);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    resolvedConfig.beforeIcon && beforeIconComponent && handleBeforeIcon();
    resolvedConfig.afterIcon && afterIconComponent && handleAfterIcon();
    $$rendered = `${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${each(Object.keys(components["menucomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.menucomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${render ? `${validate_component(AlignWrapper, "AlignWrapper").$$render($$result, { horizontalAlignment, verticalAlignment }, {}, {
      default: () => {
        return `${validate_component(MenuV2, "Menu").$$render(
          $$result,
          {
            placement: "bottom-end",
            justifyEnd: false
          },
          {},
          {
            trigger: () => {
              return `<div slot="trigger">${validate_component(Button, "Button").$$render(
                $$result,
                {
                  btnClasses: twMerge(css2?.button?.class, "wm-button", "wm-menu-button", resolvedConfig.fillContainer ? "w-full h-full" : ""),
                  wrapperClasses: twMerge("wm-button-container", "wm-menu-button-container", resolvedConfig.fillContainer ? "w-full h-full" : ""),
                  style: css2?.button?.style,
                  size: resolvedConfig.size,
                  color: resolvedConfig.color,
                  nonCaptureEvent: true
                },
                {},
                {
                  default: () => {
                    return `<span class="truncate inline-flex gap-2 items-center">${resolvedConfig.beforeIcon ? `<div class="min-w-4"${add_attribute("this", beforeIconComponent, 0)}></div>` : ``} ${resolvedConfig.label && resolvedConfig.label?.length > 0 ? `<div>${escape(resolvedConfig.label)}</div>` : ``} ${resolvedConfig.afterIcon ? `<div class="min-w-4"${add_attribute("this", afterIconComponent, 0)}></div>` : ``}</span>`;
                  }
                }
              )}</div>`;
            },
            default: () => {
              return `<div class="flex flex-col w-full p-1 gap-2">${menuItems.length > 0 ? `${each(menuItems, (actionButton, actionIndex) => {
                return `${actionButton.type == "buttoncomponent" ? `<div>${validate_component(AppButton, "AppButton").$$render(
                  $$result,
                  {
                    extraKey: "idx" + actionIndex,
                    render,
                    id: actionButton.id,
                    customCss: actionButton.customCss,
                    configuration: actionButton.configuration,
                    recomputeIds: actionButton.recomputeIds,
                    componentInput: actionButton.componentInput,
                    noWFull: false,
                    isMenuItem: true
                  },
                  {},
                  {}
                )} </div>` : ``}`;
              })}` : ``}</div>`;
            }
          }
        )}`;
      }
    })}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_worldStore();
  return $$rendered;
});
const AppDecisionTree = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let resolvedConditions;
  let resolvedNext;
  let lastNodeId;
  let isNextDisabled;
  let $debuggingComponents, $$unsubscribe_debuggingComponents;
  let $focusedGrid, $$unsubscribe_focusedGrid;
  let $selectedComponent, $$unsubscribe_selectedComponent;
  let $componentControl, $$unsubscribe_componentControl;
  let $worldStore, $$unsubscribe_worldStore;
  let $app, $$unsubscribe_app;
  let $$unsubscribe_connectingInput;
  let { id } = $$props;
  let { componentContainerHeight } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  let { nodes } = $$props;
  const { app, focusedGrid, selectedComponent, connectingInput, componentControl, worldStore, debuggingComponents } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_focusedGrid = subscribe(focusedGrid, (value) => $focusedGrid = value);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => $selectedComponent = value);
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => value);
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => $componentControl = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_debuggingComponents = subscribe(debuggingComponents, (value) => $debuggingComponents = value);
  let css2 = initCss($app.css?.conditionalwrapper, customCss);
  let selectedConditionIndex = 0;
  let currentNodeId = getFirstNode(nodes)?.id ?? "";
  let outputs = initOutput($worldStore, id, {
    currentNodeId,
    currentNodeIndex: selectedConditionIndex
  });
  function onFocus(newIndex) {
    selectedConditionIndex = newIndex;
    const nodeId = nodes[newIndex]?.id;
    if (nodeId) {
      currentNodeId = nodeId;
      set_store_value(
        focusedGrid,
        $focusedGrid = {
          parentComponentId: id,
          subGridIndex: selectedConditionIndex
        },
        $focusedGrid
      );
    }
  }
  set_store_value(
    componentControl,
    $componentControl[id] = {
      setTab: (conditionIndex) => {
        if (conditionIndex !== -1) {
          onFocus(conditionIndex);
        }
      }
    },
    $componentControl
  );
  function updateDebuggingComponents() {
    const nodeIds = nodes.map((node) => node.id).sort();
    const debuggingComponentsIds = Object.keys($debuggingComponents).sort();
    if (JSON.stringify(nodeIds) !== JSON.stringify(debuggingComponentsIds)) {
      debuggingComponentsIds.forEach((id2) => {
        if (!nodeIds.includes(id2)) {
          delete $debuggingComponents[id2];
        }
      });
    }
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.componentContainerHeight === void 0 && $$bindings.componentContainerHeight && componentContainerHeight !== void 0) $$bindings.componentContainerHeight(componentContainerHeight);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.nodes === void 0 && $$bindings.nodes && nodes !== void 0) $$bindings.nodes(nodes);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    resolvedConditions = nodes.reduce(
      (acc, node) => {
        acc[node.id] = acc[node.id] || [];
        return acc;
      },
      resolvedConditions || {}
    );
    resolvedNext = nodes.reduce(
      (acc, node) => {
        acc[node.id] = acc[node.id] || false;
        return acc;
      },
      resolvedNext || {}
    );
    {
      if (!nodes.map((n) => n.id).includes(currentNodeId)) {
        const firstNode = getFirstNode(nodes)?.id;
        if (firstNode) {
          currentNodeId = firstNode;
        }
      }
    }
    lastNodeId = nodes?.find((node) => node.next.length === 0)?.id;
    isNextDisabled = resolvedNext?.[currentNodeId] === false;
    {
      if (currentNodeId) {
        outputs.currentNodeId.set(currentNodeId);
        outputs.currentNodeIndex.set(nodes.findIndex((next) => next.id == currentNodeId));
      }
    }
    {
      if ($selectedComponent?.[0] === id && !$focusedGrid) {
        set_store_value(
          focusedGrid,
          $focusedGrid = {
            parentComponentId: id,
            subGridIndex: nodes.findIndex((node) => node.id === currentNodeId)
          },
          $focusedGrid
        );
      }
    }
    nodes && $debuggingComponents && updateDebuggingComponents();
    $$rendered = `${Object.keys(resolvedConditions).length === nodes.length ? `${each(nodes ?? [], (node) => {
      return `${each(node.next ?? [], (next, conditionIndex) => {
        return `${next.condition ? `${validate_component(InputValue, "InputValue").$$render(
          $$result,
          {
            key: `condition-${node.id}-${conditionIndex}`,
            id,
            input: next.condition,
            field: `condition-${node.id}-${conditionIndex}`,
            value: resolvedConditions[node.id][conditionIndex]
          },
          {
            value: ($$value) => {
              resolvedConditions[node.id][conditionIndex] = $$value;
              $$settled = false;
            }
          },
          {}
        )}` : ``}`;
      })}`;
    })}` : ``} ${Object.keys(resolvedConditions).length === nodes.length ? `${each(nodes ?? [], (node) => {
      return `${node.allowed ? `${validate_component(InputValue, "InputValue").$$render(
        $$result,
        {
          key: "allowed",
          id,
          input: node.allowed,
          value: resolvedNext[node.id]
        },
        {
          value: ($$value) => {
            resolvedNext[node.id] = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : ``}`;
    })}` : ``} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.conditionalwrapper,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} <div class="w-full overflow-auto"><div class="w-full">${$app.subgrids ? `${each(Object.values(nodes) ?? [], (node, i) => {
      return `${validate_component(SubGridEditor, "SubGridEditor").$$render(
        $$result,
        {
          visible: render && node.id === currentNodeId,
          id,
          class: twMerge(css2?.container?.class, "wm-decision-tree"),
          style: css2?.container?.style,
          subGridId: `${id}-${i}`,
          containerHeight: componentContainerHeight - 40
        },
        {},
        {}
      )}`;
    })}` : ``}</div></div> <div class="h-8 flex flex-row gap-2 justify-end items-center px-2 bg-surface-primary z-50">${isDebugging($debuggingComponents, id) ? `${validate_component(Badge, "Badge").$$render($$result, { color: "red", size: "xs2" }, {}, {
      default: () => {
        return `${escape(`Debugging. Actions are disabled.`)}`;
      }
    })}` : ``} ${getFirstNode(nodes)?.id !== currentNodeId ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs2",
        color: "light",
        startIcon: { icon: Arrow_left },
        disabled: isDebugging($debuggingComponents, id)
      },
      {},
      {
        default: () => {
          return `Prev`;
        }
      }
    )}` : ``} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs2",
        color: "dark",
        endIcon: { icon: Arrow_right },
        disabled: isNextDisabled || currentNodeId === lastNodeId || isDebugging($debuggingComponents, id)
      },
      {},
      {
        default: () => {
          return `Next`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_debuggingComponents();
  $$unsubscribe_focusedGrid();
  $$unsubscribe_selectedComponent();
  $$unsubscribe_componentControl();
  $$unsubscribe_worldStore();
  $$unsubscribe_app();
  $$unsubscribe_connectingInput();
  return $$rendered;
});
const AppAgCharts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let resolvedDatasetsValues;
  let $app, $$unsubscribe_app;
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  let { componentInput } = $$props;
  let { configuration } = $$props;
  let { initializing = void 0 } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  let { datasets } = $$props;
  let { xData } = $$props;
  let { license = void 0 } = $$props;
  let { ee = false } = $$props;
  const { app, worldStore } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  let resolvedDatasets;
  let resolvedXData = [];
  const outputs = initOutput($worldStore, id, { result: void 0, loading: false });
  let result = void 0;
  const resolvedConfig = initConfig(components["agchartscomponent"].initialData.configuration, configuration);
  let css2 = initCss($app.css?.agchartscomponent, customCss);
  let chartInstance = void 0;
  function getChartStyleByTheme() {
    const gridColor = darkMode ? "#555555" : "#dddddd";
    const axisColor = darkMode ? "#555555" : "#dddddd";
    const textColor = darkMode ? "#eeeeee" : "#333333";
    return {
      axes: [
        {
          type: "category",
          position: "bottom",
          label: { color: textColor },
          line: { color: axisColor },
          tick: { color: axisColor },
          gridLine: { style: [{ stroke: gridColor }] }
        },
        {
          type: "number",
          position: "left",
          label: { color: textColor },
          line: { color: axisColor },
          tick: { color: axisColor },
          gridLine: { style: [{ stroke: gridColor }] }
        }
      ],
      background: { visible: false }
    };
  }
  function updateChart() {
    if (!chartInstance) {
      return;
    }
    let data = [];
    for (let i = 0; i < resolvedXData.length; i++) {
      const o = { x: resolvedXData[i] };
      for (let j = 0; j < resolvedDatasets.length; j++) {
        if (!resolvedDatasetsValues[j]) {
          continue;
        }
        if (resolvedDatasetsValues[j].type === "range-bar" || resolvedDatasetsValues[j].type === "range-area") {
          o[`y-${j}-low`] = resolvedDatasetsValues[j].value[i]?.[0];
          o[`y-${j}-high`] = resolvedDatasetsValues[j].value[i]?.[1];
        } else {
          o[`y-${j}`] = resolvedDatasetsValues[j].value[i];
        }
      }
      data.push(o);
    }
    const options = {
      container: document.getElementById(`agchart-${id}`),
      data,
      series: resolvedDatasets?.map((d, index) => {
        const type = resolvedDatasetsValues[index].type;
        if (type === "range-bar" || type === "range-area") {
          return {
            type,
            xKey: "x",
            yLowKey: `y-${index}-low`,
            yHighKey: `y-${index}-high`,
            yName: d.name
          };
        } else {
          return {
            type,
            xKey: "x",
            yKey: `y-${index}`,
            yName: d.name
          };
        }
      }) ?? [],
      ...getChartStyleByTheme()
    };
    outputs.result.set({
      data: options.data,
      series: options.series
    });
    AgChartsInstance?.update(chartInstance, options);
  }
  function updateChartByResult() {
    if (!result || !chartInstance) {
      return;
    }
    if (typeof result !== "object") {
      return;
    }
    const options = {
      container: document.getElementById(`agchart-${id}`),
      ...getChartStyleByTheme(),
      ...result
    };
    outputs.result.set({
      data: result?.["data"],
      series: result?.["series"]
    });
    AgChartsInstance?.update(chartInstance, options);
  }
  let AgChartsInstance = void 0;
  async function loadLibrary() {
    if (ee) {
      const enterprise = await import("ag-charts-enterprise");
      AgChartsInstance = enterprise.AgCharts;
      AgChartsInstance.setLicenseKey(license);
    } else {
      const community = await import("ag-charts-community");
      AgChartsInstance = community.AgCharts;
    }
  }
  function initChart() {
    try {
      const options = {
        container: document.getElementById(`agchart-${id}`),
        data: [],
        series: [],
        ...getChartStyleByTheme()
      };
      chartInstance = AgChartsInstance?.create(options);
    } catch (error) {
      console.error(error);
    }
  }
  function destroyChart() {
    if (chartInstance) {
      chartInstance.destroy();
      chartInstance = void 0;
    }
  }
  let darkMode = false;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.initializing === void 0 && $$bindings.initializing && initializing !== void 0) $$bindings.initializing(initializing);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.datasets === void 0 && $$bindings.datasets && datasets !== void 0) $$bindings.datasets(datasets);
  if ($$props.xData === void 0 && $$bindings.xData && xData !== void 0) $$bindings.xData(xData);
  if ($$props.license === void 0 && $$bindings.license && license !== void 0) $$bindings.license(license);
  if ($$props.ee === void 0 && $$bindings.ee && ee !== void 0) $$bindings.ee(ee);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    resolvedDatasetsValues = resolvedDatasets?.map((d) => {
      const config = initConfig(
        {
          value: {
            type: "oneOf",
            selected: "bar",
            labels: {
              bar: "Bar",
              scatter: "Scatter",
              line: "Line",
              area: "Area",
              ["range-bar"]: "Range Bar",
              ["range-area"]: "Range Area"
            },
            configuration: {
              bar: {
                value: {
                  type: "static",
                  fieldType: "array",
                  subFieldType: "number",
                  value: [25, 25, 50]
                }
              },
              scatter: {
                value: {
                  type: "static",
                  fieldType: "array",
                  subFieldType: "number",
                  value: [25, 25, 50]
                }
              },
              line: {
                value: {
                  type: "static",
                  fieldType: "array",
                  subFieldType: "number",
                  value: [25, 25, 50]
                }
              },
              area: {
                value: {
                  type: "static",
                  fieldType: "array",
                  subFieldType: "number",
                  value: [25, 25, 50]
                }
              },
              ["range-bar"]: {
                value: {
                  type: "static",
                  fieldType: "array",
                  subFieldType: "number-tuple",
                  value: [[10, 15], [20, 25], [18, 27]]
                }
              },
              ["range-area"]: {
                value: {
                  type: "static",
                  fieldType: "array",
                  subFieldType: "number-tuple",
                  value: [[10, 15], [20, 25], [18, 27]]
                }
              }
            }
          }
        },
        { value: d.value }
      );
      return {
        type: d.value["selected"],
        // @ts-ignore
        value: config.value?.["configuration"]?.[d.value["selected"]].value
      };
    });
    resolvedXData && resolvedDatasets && resolvedDatasetsValues && chartInstance && updateChart();
    result && chartInstance && updateChartByResult();
    license && loadLibrary();
    {
      if (render) {
        destroyChart();
        loadLibrary().then(() => {
          initChart();
        });
      }
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
    )} ${datasets ? `${validate_component(ResolveConfig, "ResolveConfig").$$render(
      $$result,
      {
        id,
        key: "datasets",
        configuration: datasets,
        resolvedConfig: resolvedDatasets
      },
      {
        resolvedConfig: ($$value) => {
          resolvedDatasets = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${xData ? `${validate_component(ResolveConfig, "ResolveConfig").$$render(
      $$result,
      {
        id,
        key: "xData",
        configuration: xData,
        resolvedConfig: resolvedXData
      },
      {
        resolvedConfig: ($$value) => {
          resolvedXData = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${resolvedDatasets ? `${each(resolvedDatasets, (resolvedDataset, index) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key: "datasets" + index,
          extraKey: resolvedDataset.name,
          configuration: resolvedDataset.value,
          resolvedConfig: resolvedDatasetsValues[index]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedDatasetsValues[index] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}` : ``} ${each(Object.keys(components["agchartscomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.chartjscomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(RunnableWrapper, "RunnableWrapper").$$render(
      $$result,
      {
        outputs,
        render,
        autoRefresh: true,
        componentInput,
        id,
        initializing,
        result
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        },
        result: ($$value) => {
          result = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div${add_attribute("class", twMerge("w-full h-full", css2?.container?.class, "wm-agchart"), 0)}${add_attribute("style", css2?.container?.style ?? "", 0)}> <div${add_attribute("id", `agchart-${id}`, 0)} class="h-full w-full"></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_worldStore();
  return $$rendered;
});
function updateWithAllValues(table, column, columns, dbType) {
  let query = buildParameters(
    [
      {
        field: "value_to_update",
        datatype: column.datatype
      },
      ...dbType === "snowflake" ? columns.flatMap((c) => [c, c]) : columns
    ],
    dbType
  );
  query += `
`;
  switch (dbType) {
    case "postgresql": {
      const conditions = columns.map(
        (c, i) => `($${i + 2}::text::${c.datatype} IS NULL AND ${c.field} IS NULL OR ${c.field} = $${i + 2}::text::${c.datatype})`
      ).join("\n    AND ");
      query += `
UPDATE ${table} SET ${column.field} = $1::text::${column.datatype} 
WHERE ${conditions}	RETURNING 1`;
      return query;
    }
    case "mysql": {
      const conditions = columns.map((c) => `(:${c.field} IS NULL AND ${c.field} IS NULL OR ${c.field} = :${c.field})`).join("\n    AND ");
      query += `
UPDATE ${table} SET ${column.field} = :value_to_update 
WHERE ${conditions}`;
      return query;
    }
    case "ms_sql_server": {
      const conditions = columns.map((c, i) => `(@p${i + 2} IS NULL AND ${c.field} IS NULL OR ${c.field} = @p${i + 2})`).join("\n    AND ");
      query += `
UPDATE ${table} SET ${column.field} = @p1 
WHERE ${conditions}`;
      return query;
    }
    case "snowflake": {
      const conditions = columns.map((c, i) => `(? = 'null' AND ${c.field} IS NULL OR ${c.field} = ?)`).join("\n    AND ");
      query += `
UPDATE ${table} SET ${column.field} = ? 
WHERE ${conditions}`;
      return query;
    }
    case "bigquery": {
      const conditions = columns.map(
        (c, i) => `(CAST(@${c.field} AS STRING) = 'null' AND ${c.field} IS NULL OR ${c.field} = @${c.field})`
      ).join("\n    AND ");
      query += `
UPDATE ${table} SET ${column.field} = @value_to_update 
WHERE ${conditions}`;
      return query;
    }
    default:
      throw new Error("Unsupported database type");
  }
}
function getUpdateInput(resource, table, column, columns, dbType) {
  if (!resource || !table) {
    return void 0;
  }
  const updateRunnable = {
    name: "AppDbExplorer",
    type: "runnableByName",
    inlineScript: {
      content: updateWithAllValues(table, column, columns, dbType),
      language: getLanguageByResourceType(dbType),
      schema: {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        properties: {},
        required: ["database"],
        type: "object"
      }
    }
  };
  const updateQuery = {
    runnable: updateRunnable,
    fields: {
      database: {
        type: "static",
        value: resource,
        fieldType: "object",
        format: `resource-${dbType}`
      }
    },
    type: "runnable",
    fieldType: "object"
  };
  return updateQuery;
}
const UpdateCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  const { worldStore } = getContext("AppViewerContext");
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  let outputs = initOutput($worldStore, `${id}_update`, {
    result: void 0,
    loading: false,
    jobId: void 0
  });
  let runnableComponent;
  let loading = false;
  let input = void 0;
  async function triggerUpdate(resource, table, column, allColumns, valueToUpdate, data, oldValue = void 0, dbType) {
    let primaryColumns = getPrimaryKeys(allColumns);
    let columns = allColumns?.filter((x) => primaryColumns.includes(x.field));
    input = getUpdateInput(resource, table, column, columns, dbType);
    await tick();
    if (runnableComponent) {
      let ndata = {};
      columns.forEach((x) => {
        ndata[x.field] = data[x.field];
      });
      ndata[column.field] = oldValue;
      await runnableComponent?.runComponent(void 0, void 0, void 0, { value_to_update: valueToUpdate, ...ndata }, {
        done: (x) => {
          sendUserToast("Value updated", false);
        },
        cancel: () => {
          sendUserToast("Error updating value", true);
        },
        error: () => {
          sendUserToast("Error updating value", true);
        }
      });
    }
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.triggerUpdate === void 0 && $$bindings.triggerUpdate && triggerUpdate !== void 0) $$bindings.triggerUpdate(triggerUpdate);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(RunnableWrapper, "RunnableWrapper").$$render(
      $$result,
      {
        noInitialize: true,
        componentInput: input,
        autoRefresh: false,
        render: false,
        id: `${id}_update`,
        outputs,
        runnableComponent,
        loading
      },
      {
        runnableComponent: ($$value) => {
          runnableComponent = $$value;
          $$settled = false;
        },
        loading: ($$value) => {
          loading = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_worldStore();
  return $$rendered;
});
const wasmUrl = "/_app/immutable/assets/windmill_sql_datatype_parser_wasm_bg.CougHMfv.wasm";
function rawTypeToSchemaType(typ) {
  if (typ.startsWith("list-")) {
    return {
      list: rawTypeToSchemaType(typ.replace("list-", ""))
    };
  } else if (typ == "str") {
    return { str: void 0 };
  } else {
    return typ;
  }
}
const InsertRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fields;
  init$1(wasmUrl);
  let { args = {} } = $$props;
  let { dbType = "postgresql" } = $$props;
  let schema = void 0;
  let { columnDefs = [] } = $$props;
  function parseSQLArgs(field, dbType2) {
    let rawType = "";
    switch (dbType2) {
      case "mysql":
        rawType = parse_mysql(field);
        break;
      case "postgresql":
        rawType = parse_sql(field);
        break;
      case "bigquery":
        rawType = parse_bigquery(field);
        break;
      case "snowflake":
        rawType = parse_snowflake(field);
        break;
      case "ms_sql_server":
        rawType = parse_mssql(field);
        break;
      default:
        throw new Error("Language not supported");
    }
    return rawType;
  }
  async function builtSchema(fields2, dbType2) {
    const properties = {};
    const required = [];
    await init$1(wasmUrl);
    fields2.forEach((field) => {
      const schemaProperty = { type: "string" };
      const parsedArg = columnDefs.find((arg) => arg.field === field.name);
      if (parsedArg) {
        let typ = rawTypeToSchemaType(parseSQLArgs(parsedArg.datatype.split("(")[0].trim(), dbType2));
        argSigToJsonSchemaType(typ, schemaProperty);
      }
      if (field.defaultValue) {
        if (schemaProperty.type === "number" || schemaProperty.type === "integer") {
          schemaProperty.default = field.defaultValue ? Number(field.defaultValue) : void 0;
        } else if (schemaProperty.type === "boolean") {
          schemaProperty.default = field.defaultValue?.toLocaleLowerCase() === "true";
        } else {
          schemaProperty.default = field.defaultValue;
        }
      }
      properties[field.name] = schemaProperty;
      const isRequired = (field.isPrimaryKey || field.defaultValue === void 0 || field.defaultValue === null) && field.nullable !== "YES" && ![ColumnIdentity.Always, ColumnIdentity.ByDefault].includes(field.identity);
      if (isRequired) {
        required.push(field.name);
      }
    });
    schema = {
      $schema: "http://json-schema.org/draft-07/schema#",
      type: "object",
      properties,
      required
    };
  }
  let { isInsertable = false } = $$props;
  if ($$props.args === void 0 && $$bindings.args && args !== void 0) $$bindings.args(args);
  if ($$props.dbType === void 0 && $$bindings.dbType && dbType !== void 0) $$bindings.dbType(dbType);
  if ($$props.columnDefs === void 0 && $$bindings.columnDefs && columnDefs !== void 0) $$bindings.columnDefs(columnDefs);
  if ($$props.isInsertable === void 0 && $$bindings.isInsertable && isInsertable !== void 0) $$bindings.isInsertable(isInsertable);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    fields = columnDefs?.filter((t) => {
      const shouldFilter = t.isidentity !== ColumnIdentity.Always && t?.hideInsert === true;
      return !shouldFilter;
    }).map((column) => {
      const type = column.datatype;
      const name = column.field;
      const isPrimaryKey = column.isprimarykey;
      const defaultValue = column.defaultValueNull ? null : column.defaultUserValue;
      return {
        type,
        name,
        isPrimaryKey,
        defaultValue,
        identity: column.isidentity,
        nullable: column.isnullable
      };
    });
    {
      builtSchema(fields ?? [], dbType);
    }
    {
      if (schema) {
        const requiredFields = schema.required ?? [];
        const filledFields = Object.keys(args).filter((key) => args[key] !== void 0 && args[key] !== null && args[key] !== "");
        isInsertable = requiredFields.every((field) => filledFields.includes(field));
      }
    }
    $$rendered = `${schema ? `${validate_component(LightweightSchemaForm, "LightweightSchemaForm").$$render(
      $$result,
      { schema, args },
      {
        args: ($$value) => {
          args = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
function makeCountQuery(dbType, table, whereClause = void 0, columnDefs) {
  const wherePrefix = " WHERE ";
  const andCondition = " AND ";
  let quicksearchCondition = "";
  let query = buildParameters(
    [{ field: "quicksearch", datatype: dbType === "bigquery" ? "string" : "text" }],
    dbType
  );
  query += "\n";
  if (whereClause) {
    quicksearchCondition = ` ${whereClause} AND `;
  }
  const filteredColumns = buildVisibleFieldList(columnDefs, dbType);
  switch (dbType) {
    case "mysql":
      if (filteredColumns.length > 0) {
        quicksearchCondition += ` (:quicksearch = '' OR CONCAT_WS(' ', ${filteredColumns.join(
          ", "
        )}) LIKE CONCAT('%', :quicksearch, '%'))`;
      } else {
        quicksearchCondition += ` (:quicksearch = '' OR 1 = 1)`;
      }
      query += `SELECT COUNT(*) as count FROM ${table}`;
      break;
    case "postgresql":
      if (filteredColumns.length > 0) {
        quicksearchCondition += `($1 = '' OR CONCAT(${filteredColumns.join(
          ", "
        )}) ILIKE '%' || $1 || '%')`;
      } else {
        quicksearchCondition += `($1 = '' OR 1 = 1)`;
      }
      query += `SELECT COUNT(*) as count FROM ${table}`;
      break;
    case "ms_sql_server":
      if (filteredColumns.length > 0) {
        quicksearchCondition += `(@p1 = '' OR CONCAT(${filteredColumns.join(
          ", +"
        )}) LIKE '%' + @p1 + '%')`;
      } else {
        quicksearchCondition += `(@p1 = '' OR 1 = 1)`;
      }
      query += `SELECT COUNT(*) as count FROM [${table}]`;
      break;
    case "snowflake": {
      query = "";
      if (filteredColumns.length > 0) {
        query += buildParameters(
          [
            { field: "quicksearch", datatype: "text" },
            { field: "quicksearch", datatype: "text" }
          ],
          dbType
        );
        query += "\n";
        quicksearchCondition += `(? = '' OR CONCAT(${filteredColumns.join(
          ", "
        )}) ILIKE '%' || ? || '%')`;
      } else {
        query += buildParameters([{ field: "quicksearch", datatype: "text" }], dbType);
        query += "\n";
        quicksearchCondition += `(? = '' OR 1 = 1)`;
      }
      query += `SELECT COUNT(*) as count FROM ${table}`;
      break;
    }
    case "bigquery": {
      if (filteredColumns.length > 0) {
        const searchClause = filteredColumns.map((col) => {
          const def = columnDefs.find((c) => c.field === col.slice(1, -1));
          if (def?.datatype === "JSON" || def?.datatype.startsWith("STRUCT") || def?.datatype.startsWith("ARRAY")) {
            return `TO_JSON_STRING(${col})`;
          }
          return `${col}`;
        }).join(",");
        quicksearchCondition += `(@quicksearch = '' OR REGEXP_CONTAINS(CONCAT(${searchClause}), '(?i)' || @quicksearch))`;
      } else {
        quicksearchCondition += `(@quicksearch = '' OR 1 = 1)`;
      }
      query += `SELECT COUNT(*) as count FROM \`${table}\``;
      break;
    }
    default:
      throw new Error("Unsupported database type:" + dbType);
  }
  if (whereClause) {
    query += `${wherePrefix}${quicksearchCondition}`;
  } else {
    query += dbType === "ms_sql_server" && !whereClause ? wherePrefix : andCondition;
    query += quicksearchCondition;
  }
  if (!whereClause && (dbType === "mysql" || dbType === "postgresql" || dbType === "snowflake" || dbType === "bigquery")) {
    query = query.replace(`${andCondition}`, wherePrefix);
  }
  return query;
}
function getCountInput(resource, table, resourceType, columnDefs, whereClause) {
  if (!resource || !table || !columnDefs) {
    return void 0;
  }
  const query = makeCountQuery(resourceType, table, whereClause, columnDefs);
  const updateRunnable = {
    name: "AppDbExplorer",
    type: "runnableByName",
    inlineScript: {
      content: query,
      language: getLanguageByResourceType(resourceType),
      schema: {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        properties: {
          database: {
            description: "Database name",
            type: "object",
            format: `resource-${resourceType}`
          }
        },
        required: ["database"],
        type: "object"
      }
    }
  };
  const updateQuery = {
    runnable: updateRunnable,
    fields: {
      database: {
        type: "static",
        value: resource,
        fieldType: "object",
        format: `resource-${resourceType}`
      }
    },
    type: "runnable",
    fieldType: "object"
  };
  return updateQuery;
}
const DbExplorerCount = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  let { table } = $$props;
  let { resource } = $$props;
  let { renderCount } = $$props;
  let { quicksearch } = $$props;
  let { resourceType } = $$props;
  let { columnDefs } = $$props;
  let { whereClause } = $$props;
  const { worldStore } = getContext("AppViewerContext");
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  let outputs = initOutput($worldStore, `${id}_count`, {
    result: void 0,
    loading: false,
    jobId: void 0
  });
  let runnableComponent;
  let loading = false;
  let input = void 0;
  let lastTableCount = void 0;
  let renderCountLast = -1;
  let quicksearchLast = void 0;
  let localColumnDefs = columnDefs;
  let lastTable = table;
  async function computeCount(forceCompute) {
    if (!forceCompute) {
      if (lastTableCount === table && renderCount == renderCountLast && quicksearch == quicksearchLast) {
        return;
      }
    }
    if (table != void 0 && resource !== void 0) {
      renderCountLast = renderCount;
      lastTableCount = table;
      quicksearchLast = quicksearch;
      await getCount(resource, table, quicksearch);
    }
  }
  async function getCount(resource2, table2, quicksearch2) {
    input = getCountInput(resource2, table2, resourceType, localColumnDefs, whereClause);
    await tick();
    if (runnableComponent) {
      await runnableComponent?.runComponent(void 0, void 0, void 0, { quicksearch: quicksearch2 });
    }
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.table === void 0 && $$bindings.table && table !== void 0) $$bindings.table(table);
  if ($$props.resource === void 0 && $$bindings.resource && resource !== void 0) $$bindings.resource(resource);
  if ($$props.renderCount === void 0 && $$bindings.renderCount && renderCount !== void 0) $$bindings.renderCount(renderCount);
  if ($$props.quicksearch === void 0 && $$bindings.quicksearch && quicksearch !== void 0) $$bindings.quicksearch(quicksearch);
  if ($$props.resourceType === void 0 && $$bindings.resourceType && resourceType !== void 0) $$bindings.resourceType(resourceType);
  if ($$props.columnDefs === void 0 && $$bindings.columnDefs && columnDefs !== void 0) $$bindings.columnDefs(columnDefs);
  if ($$props.whereClause === void 0 && $$bindings.whereClause && whereClause !== void 0) $$bindings.whereClause(whereClause);
  if ($$props.computeCount === void 0 && $$bindings.computeCount && computeCount !== void 0) $$bindings.computeCount(computeCount);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        if (table !== lastTable) {
          localColumnDefs = [];
          lastTable = table;
        }
      }
    }
    table && renderCount != void 0 && quicksearch != void 0 && computeCount();
    $$rendered = `${validate_component(RunnableWrapper, "RunnableWrapper").$$render(
      $$result,
      {
        noInitialize: true,
        componentInput: input,
        autoRefresh: false,
        render: false,
        id: `${id}_count`,
        outputs,
        runnableComponent,
        loading
      },
      {
        runnableComponent: ($$value) => {
          runnableComponent = $$value;
          $$settled = false;
        },
        loading: ($$value) => {
          loading = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_worldStore();
  return $$rendered;
});
const AppAggridExplorerTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_componentControl;
  let $app, $$unsubscribe_app;
  let $$unsubscribe_selectedComponent;
  let $darkMode, $$unsubscribe_darkMode;
  let { id } = $$props;
  let { customCss = void 0 } = $$props;
  let { containerHeight = void 0 } = $$props;
  let { resolvedConfig } = $$props;
  let { datasource } = $$props;
  let { state = void 0 } = $$props;
  let { outputs } = $$props;
  let { allowDelete } = $$props;
  let { actions = [] } = $$props;
  let { result = void 0 } = $$props;
  let { allowColumnDefsActions = true } = $$props;
  const context = getContext("AppViewerContext");
  getContext("ContextPanel");
  const { app, selectedComponent, componentControl, darkMode } = context;
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => value);
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => value);
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  let css2 = initCss($app.css?.aggridcomponent, customCss);
  let clientHeight;
  let clientWidth;
  createEventDispatcher();
  let eGui;
  function refreshActions(actions2) {
    if (!deepEqual(actions2, lastActions)) {
      lastActions = [...actions2];
    }
  }
  let lastActions = void 0;
  let firstRow = 0;
  let lastRow = 0;
  let extraConfig = resolvedConfig.extraConfig;
  function clearRows() {
  }
  function restoreColumns() {
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.containerHeight === void 0 && $$bindings.containerHeight && containerHeight !== void 0) $$bindings.containerHeight(containerHeight);
  if ($$props.resolvedConfig === void 0 && $$bindings.resolvedConfig && resolvedConfig !== void 0) $$bindings.resolvedConfig(resolvedConfig);
  if ($$props.datasource === void 0 && $$bindings.datasource && datasource !== void 0) $$bindings.datasource(datasource);
  if ($$props.state === void 0 && $$bindings.state && state !== void 0) $$bindings.state(state);
  if ($$props.outputs === void 0 && $$bindings.outputs && outputs !== void 0) $$bindings.outputs(outputs);
  if ($$props.allowDelete === void 0 && $$bindings.allowDelete && allowDelete !== void 0) $$bindings.allowDelete(allowDelete);
  if ($$props.actions === void 0 && $$bindings.actions && actions !== void 0) $$bindings.actions(actions);
  if ($$props.result === void 0 && $$bindings.result && result !== void 0) $$bindings.result(result);
  if ($$props.allowColumnDefsActions === void 0 && $$bindings.allowColumnDefsActions && allowColumnDefsActions !== void 0) $$bindings.allowColumnDefsActions(allowColumnDefsActions);
  if ($$props.clearRows === void 0 && $$bindings.clearRows && clearRows !== void 0) $$bindings.clearRows(clearRows);
  if ($$props.restoreColumns === void 0 && $$bindings.restoreColumns && restoreColumns !== void 0) $$bindings.restoreColumns(restoreColumns);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    actions && refreshActions(actions);
    {
      if (!deepEqual(extraConfig, resolvedConfig.extraConfig)) {
        extraConfig = resolvedConfig.extraConfig;
      }
    }
    $$rendered = `${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.tablecomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(SyncColumnDefs, "SyncColumnDefs").$$render(
      $$result,
      {
        id,
        columnDefs: resolvedConfig.columnDefs,
        result,
        allowColumnDefsActions
      },
      {},
      {
        default: () => {
          return `<div${add_attribute("class", twMerge("flex flex-col h-full component-wrapper divide-y", css2?.container?.class, "wm-aggrid-container"), 0)}${add_attribute(
            "style",
            containerHeight ? `height: ${containerHeight}px;` : css2?.container?.style,
            0
          )}><div class="${["ag-theme-alpine", $darkMode ? "ag-theme-alpine-dark" : ""].join(" ").trim()}"${add_styles({
            "height": `${clientHeight}px`,
            "width": `${clientWidth}px`
          })}><div${add_styles({ "height": `100%` })}${add_attribute("this", eGui, 0)}></div></div> ${resolvedConfig && "footer" in resolvedConfig && resolvedConfig.footer ? `<div class="flex gap-1 w-full justify-between items-center text-xs text-primary p-2"><div>${validate_component(Popover, "Popover").$$render($$result, {}, {}, {
            text: () => {
              return `Download`;
            },
            default: () => {
              return `${validate_component(Button, "Button").$$render(
                $$result,
                {
                  startIcon: { icon: Download },
                  color: "light",
                  size: "xs2",
                  iconOnly: true
                },
                {},
                {}
              )}`;
            }
          })}</div> ${datasource?.rowCount ? `${escape(firstRow)}${escape("->")}${escape(lastRow + 1)} of ${escape(datasource?.rowCount)} rows` : `${escape(firstRow)}${escape("->")}${escape(lastRow + 1)}`}</div>` : ``}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_componentControl();
  $$unsubscribe_app();
  $$unsubscribe_selectedComponent();
  $$unsubscribe_darkMode();
  return $$rendered;
});
function formatInsertValues(columns, dbType, startIndex = 1) {
  switch (dbType) {
    case "mysql":
      return columns.map((c) => `:${c.field}`).join(", ");
    case "postgresql":
      return columns.map((c, i) => `$${startIndex + i}::${c.datatype}`).join(", ");
    case "ms_sql_server":
      return columns.map((c, i) => `@p${startIndex + i}`).join(", ");
    case "snowflake":
      return columns.map(() => `?`).join(", ");
    case "bigquery":
      return columns.map((c) => `@${c.field}`).join(", ");
    default:
      throw new Error("Unsupported database type");
  }
}
function formatColumnNames(columns) {
  return columns.map((c) => c.field).join(", ");
}
function getUserDefaultValue(column) {
  if (column.defaultValueNull) {
    return "NULL";
  } else if (column.defaultUserValue) {
    return typeof column.defaultUserValue === "string" ? `'${column.defaultUserValue}'` : column.defaultUserValue;
  }
}
function formatDefaultValues(columns) {
  const defaultValues = columns.map((c) => {
    const userDefaultValue = getUserDefaultValue(c);
    if (c.overrideDefaultValue === true) {
      return userDefaultValue;
    }
    return userDefaultValue ?? c.defaultvalue;
  }).join(", ");
  return defaultValues;
}
function shouldOmitColumnInInsert(column) {
  if (!column.hideInsert || column.isidentity === ColumnIdentity.Always) {
    return true;
  }
  const userDefaultValue = column.defaultUserValue !== void 0 && column.defaultUserValue !== "" || column.defaultValueNull === true;
  const dbDefaultValue = Boolean(column.defaultvalue);
  if (column.isnullable === "NO") {
    if (!userDefaultValue && !dbDefaultValue && column.isidentity === ColumnIdentity.No) {
      throw new Error(`Column ${column.field} is not nullable and has no default value`);
    }
    if (!userDefaultValue && !dbDefaultValue) {
      return column.isidentity !== ColumnIdentity.No;
    }
    return !userDefaultValue && dbDefaultValue;
  } else if (column.isnullable === "YES") {
    return !userDefaultValue;
  }
  return false;
}
function makeInsertQuery(table, columns, dbType) {
  if (!table) throw new Error("Table name is required");
  const columnsInsert = columns.filter((x) => !x.hideInsert);
  const columnsDefault = columns.filter((c) => !shouldOmitColumnInInsert(c));
  const allInsertColumns = columnsInsert.concat(columnsDefault);
  let query = buildParameters(columnsInsert, dbType);
  query += "\n";
  const shouldInsertComma = columnsDefault.length > 0;
  const columnNames = formatColumnNames(allInsertColumns);
  const insertValues = formatInsertValues(columnsInsert, dbType);
  const defaultValues = formatDefaultValues(columnsDefault);
  const commaOrEmpty = shouldInsertComma ? ", " : "";
  query += `INSERT INTO ${table} (${columnNames}) VALUES (${insertValues}${commaOrEmpty}${defaultValues})`;
  return query;
}
function getInsertInput(table, columns, resource, dbType) {
  return {
    runnable: {
      name: "AppDbExplorer",
      type: "runnableByName",
      inlineScript: {
        content: makeInsertQuery(table, columns, dbType),
        language: getLanguageByResourceType(dbType),
        schema: {
          $schema: "https://json-schema.org/draft/2020-12/schema",
          properties: {},
          required: ["database"],
          type: "object"
        }
      }
    },
    fields: {
      database: {
        type: "static",
        value: resource,
        fieldType: "object",
        format: `resource-${dbType}`
      }
    },
    type: "runnable",
    fieldType: "object"
  };
}
const InsertRowRunnable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  const { worldStore } = getContext("AppViewerContext");
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  let outputs = initOutput($worldStore, `${id}_insert`, {
    result: void 0,
    loading: false,
    jobId: void 0
  });
  let runnableComponent;
  let loading = false;
  let input = void 0;
  const dispatch = createEventDispatcher();
  async function insertRow(resource, workspace, table, columns, values, resourceType) {
    if (!resource || !table || !workspace) {
      return false;
    }
    input = getInsertInput(table, columns, resource, resourceType);
    await tick();
    if (runnableComponent) {
      await runnableComponent?.runComponent(void 0, void 0, void 0, values, {
        done: (x) => {
          dispatch("insert");
          sendUserToast("Row inserted", false);
        },
        cancel: () => {
          sendUserToast("Error inserting row", true);
        },
        error: () => {
          sendUserToast("Error inserting row", true);
        }
      });
    }
    return false;
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.insertRow === void 0 && $$bindings.insertRow && insertRow !== void 0) $$bindings.insertRow(insertRow);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(RunnableWrapper, "RunnableWrapper").$$render(
      $$result,
      {
        noInitialize: true,
        componentInput: input,
        autoRefresh: false,
        render: false,
        id: `${id}_insert`,
        outputs,
        runnableComponent,
        loading
      },
      {
        runnableComponent: ($$value) => {
          runnableComponent = $$value;
          $$settled = false;
        },
        loading: ($$value) => {
          loading = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_worldStore();
  return $$rendered;
});
function deleteWithAllValues(table, columns, dbType) {
  let query = buildParameters(
    dbType === "snowflake" ? columns.flatMap((c) => [c, c]) : columns,
    dbType
  );
  switch (dbType) {
    case "postgresql": {
      const conditions = columns.map(
        (c, i) => `($${i + 1}::text::${c.datatype} IS NULL AND ${c.field} IS NULL OR ${c.field} = $${i + 1}::text::${c.datatype})`
      ).join("\n    AND ");
      query += `
DELETE FROM ${table} 
WHERE ${conditions} RETURNING 1;`;
      return query;
    }
    case "mysql": {
      const conditions = columns.map((c) => `(:${c.field} IS NULL AND ${c.field} IS NULL OR ${c.field} = :${c.field})`).join("\n    AND ");
      query += `
DELETE FROM ${table} 
WHERE ${conditions}`;
      return query;
    }
    case "ms_sql_server": {
      const conditions = columns.map((c, i) => `(@p${i + 1} IS NULL AND ${c.field} IS NULL OR ${c.field} = @p${i + 1})`).join("\n    AND ");
      query += `
DELETE FROM ${table} 
WHERE ${conditions}`;
      return query;
    }
    case "snowflake": {
      const conditions = columns.map((c, i) => `(? = 'null' AND ${c.field} IS NULL OR ${c.field} = ?)`).join("\n    AND ");
      query += `
DELETE FROM ${table} 
WHERE ${conditions}`;
      return query;
    }
    case "bigquery": {
      const conditions = columns.map(
        (c, i) => `(CAST(@${c.field} AS STRING) = 'null' AND ${c.field} IS NULL OR ${c.field} = @${c.field})`
      ).join("\n    AND ");
      query += `
DELETE FROM ${table} 
WHERE ${conditions}`;
      return query;
    }
    default:
      throw new Error("Unsupported database type");
  }
}
function getDeleteInput(resource, table, columns, dbType) {
  if (!resource || !table) {
    return void 0;
  }
  const deleteRunnable = {
    name: "AppDbExplorer",
    type: "runnableByName",
    inlineScript: {
      content: deleteWithAllValues(table, columns, dbType),
      language: getLanguageByResourceType(dbType),
      schema: {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        properties: {},
        required: ["database"],
        type: "object"
      }
    }
  };
  const deleteQuery = {
    runnable: deleteRunnable,
    fields: {
      database: {
        type: "static",
        value: resource,
        fieldType: "object",
        format: `resource-${dbType}`
      }
    },
    type: "runnable",
    fieldType: "object"
  };
  return deleteQuery;
}
const DeleteRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  const { worldStore } = getContext("AppViewerContext");
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  let outputs = initOutput($worldStore, `${id}_delete`, {
    result: void 0,
    loading: false,
    jobId: void 0
  });
  let runnableComponent;
  let loading = false;
  let input = void 0;
  const dispatch = createEventDispatcher();
  async function triggerDelete(resource, table, allColumns, data, dbType) {
    let primaryColumns = getPrimaryKeys(allColumns);
    let columns = allColumns?.filter((x) => primaryColumns.includes(x.field));
    input = getDeleteInput(resource, table, columns, dbType);
    await tick();
    if (runnableComponent) {
      let ndata = {};
      columns.forEach((x) => {
        ndata[x.field] = data[x.field];
      });
      await runnableComponent?.runComponent(void 0, void 0, void 0, { ...ndata }, {
        done: (x) => {
          sendUserToast("Row deleted", false);
          dispatch("deleted");
        },
        cancel: () => {
          sendUserToast("Error deleting row", true);
        },
        error: () => {
          sendUserToast("Error updating row", true);
        }
      });
    }
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.triggerDelete === void 0 && $$bindings.triggerDelete && triggerDelete !== void 0) $$bindings.triggerDelete(triggerDelete);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(RunnableWrapper, "RunnableWrapper").$$render(
      $$result,
      {
        noInitialize: true,
        componentInput: input,
        autoRefresh: false,
        render: false,
        id: `${id}_delete`,
        outputs,
        runnableComponent,
        loading
      },
      {
        runnableComponent: ($$value) => {
          runnableComponent = $$value;
          $$settled = false;
        },
        loading: ($$value) => {
          loading = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_worldStore();
  return $$rendered;
});
function makeSnowflakeSelectQuery(table, columnDefs, whereClause, options) {
  const limit = coerceToNumber() || 100;
  const offset2 = coerceToNumber() || 0;
  const headers = [
    {
      field: "quicksearch",
      datatype: "text"
    }
  ];
  let query = "";
  query += "\n";
  const filteredColumns = buildVisibleFieldList(columnDefs, "snowflake");
  const selectClause = filteredColumns.join(", ");
  query += `SELECT ${selectClause} FROM ${table}`;
  const quicksearchCondition = [
    "LENGTH(?) = 0",
    ...filteredColumns.map((column) => {
      headers.push({
        field: "quicksearch",
        datatype: "text"
      });
      return `CONCAT(${column}) ILIKE CONCAT('%', ?, '%')`;
    })
  ].join(" OR ");
  if (whereClause) {
    query += ` WHERE ${whereClause} AND (${quicksearchCondition})`;
  } else {
    query += ` WHERE ${quicksearchCondition}`;
  }
  const orderBy = columnDefs.map((column) => {
    headers.push(
      {
        field: "order_by",
        datatype: "text"
      },
      {
        field: "is_desc",
        datatype: "boolean"
      },
      {
        field: "order_by",
        datatype: "text"
      },
      {
        field: "is_desc",
        datatype: "boolean"
      }
    );
    return `CASE WHEN ? = '${column.field}' AND ? = FALSE THEN "${column.field}" END ASC,
		CASE WHEN ? = '${column.field}' AND ? = TRUE THEN "${column.field}" END DESC`;
  });
  query += ` ORDER BY ${orderBy.join(",\n")}`;
  query += ` LIMIT ${limit} OFFSET ${offset2}`;
  query = buildParameters(headers, "snowflake") + "\n" + query;
  return query;
}
function makeSelectQuery(table, columnDefs, whereClause, dbType, options) {
  if (!table) throw new Error("Table name is required");
  let quicksearchCondition = "";
  let query = buildParameters(
    [
      { field: "limit", datatype: dbType === "bigquery" ? "integer" : "int" },
      { field: "offset", datatype: dbType === "bigquery" ? "integer" : "int" },
      { field: "quicksearch", datatype: dbType === "bigquery" ? "string" : "text" },
      { field: "order_by", datatype: "string" },
      { field: "is_desc", datatype: "bool" }
    ],
    dbType
  );
  query += "\n";
  const filteredColumns = buildVisibleFieldList(columnDefs, dbType);
  const selectClause = filteredColumns.join(", ");
  switch (dbType) {
    case "mysql": {
      const orderBy2 = columnDefs.map((column) => {
        return `
CASE WHEN :order_by = '${column.field}' AND :is_desc IS false THEN \`${column.field}\` END,
CASE WHEN :order_by = '${column.field}' AND :is_desc IS true THEN \`${column.field}\` END DESC`;
      }).join(",\n");
      quicksearchCondition = ` (:quicksearch = '' OR CONCAT_WS(' ', ${filteredColumns.join(
        ", "
      )}) LIKE CONCAT('%', :quicksearch, '%'))`;
      query += `SELECT ${selectClause} FROM ${table}`;
      query += ` WHERE ${whereClause ? `${whereClause} AND` : ""} ${quicksearchCondition}`;
      query += ` ORDER BY ${orderBy2}`;
      query += ` LIMIT :limit OFFSET :offset`;
      break;
    }
    case "postgresql": {
      const orderBy2 = `
      ${columnDefs.map(
        (column) => `
      (CASE WHEN $4 = '${column.field}' AND $5 IS false THEN "${column.field}"::text END),
      (CASE WHEN $4 = '${column.field}' AND $5 IS true THEN "${column.field}"::text END) DESC`
      ).join(",\n")}`;
      quicksearchCondition = `($3 = '' OR CONCAT(${filteredColumns.join(
        ", "
      )}) ILIKE '%' || $3 || '%')`;
      query += `SELECT ${filteredColumns.map((column) => `${column}::text`).join(", ")} FROM ${table}
`;
      query += ` WHERE ${whereClause ? `${whereClause} AND` : ""} ${quicksearchCondition}
`;
      query += ` ORDER BY ${orderBy2}
`;
      query += ` LIMIT $1::INT OFFSET $2::INT`;
      break;
    }
    case "ms_sql_server":
      const orderBy = columnDefs.map((column) => {
        return `
(CASE WHEN @p4 = '${column.field}' AND @p5 = 0 THEN ${column.field} END) ASC,
(CASE WHEN @p4 = '${column.field}' AND @p5 = 1 THEN ${column.field} END) DESC`;
      }).join(",\n");
      quicksearchCondition = ` (@p3 = '' OR CONCAT(${selectClause}) LIKE '%' + @p3 + '%')`;
      query += `SELECT ${selectClause} FROM ${table}`;
      query += ` WHERE ${whereClause ? `${whereClause} AND` : ""} ${quicksearchCondition}`;
      query += ` ORDER BY ${orderBy}`;
      query += ` OFFSET @p2 ROWS FETCH NEXT @p1 ROWS ONLY`;
      break;
    case "snowflake": {
      return makeSnowflakeSelectQuery(table, columnDefs, whereClause);
    }
    case "bigquery": {
      const orderBy2 = columnDefs.map((column) => {
        if (column.datatype === "JSON" || column.datatype.startsWith("STRUCT") || column.datatype.startsWith("ARRAY") || column.datatype === "GEOGRAPHY") {
          return `
(CASE WHEN @order_by = '${column.field}' AND @is_desc = false THEN TO_JSON_STRING(${column.field}) END) ASC,
(CASE WHEN @order_by = '${column.field}' AND @is_desc = true THEN TO_JSON_STRING(${column.field}) END) DESC`;
        }
        return `
(CASE WHEN @order_by = '${column.field}' AND @is_desc = false THEN ${column.field} END) ASC,
(CASE WHEN @order_by = '${column.field}' AND @is_desc = true THEN ${column.field} END) DESC`;
      }).join(",\n");
      const searchClause = filteredColumns.map((col) => {
        const def = columnDefs.find((c) => c.field === col.slice(1, -1));
        if (def?.datatype === "JSON" || def?.datatype.startsWith("STRUCT") || def?.datatype.startsWith("ARRAY") || def?.datatype === "GEOGRAPHY") {
          return `TO_JSON_STRING(${col})`;
        }
        return `CAST(${col} AS STRING)`;
      }).join(",");
      quicksearchCondition = ` (@quicksearch = '' OR REGEXP_CONTAINS(CONCAT(${searchClause}), '(?i)' || @quicksearch))`;
      query += `SELECT ${selectClause} FROM ${table}`;
      query += ` WHERE ${whereClause ? `${whereClause} AND` : ""} ${quicksearchCondition}`;
      query += ` ORDER BY ${orderBy2}`;
      query += ` LIMIT @limit OFFSET @offset`;
      break;
    }
    default:
      throw new Error("Unsupported database type");
  }
  return query;
}
function coerceToNumber(value) {
  return 0;
}
function getSelectInput(resource, table, columnDefs, whereClause, dbType, options) {
  if (!resource || !table || !columnDefs) {
    return void 0;
  }
  if (columnDefs.length === 0) {
    return void 0;
  }
  const getRunnable = {
    name: "AppDbExplorer",
    type: "runnableByName",
    inlineScript: {
      content: makeSelectQuery(table, columnDefs, whereClause, dbType),
      language: getLanguageByResourceType(dbType)
    }
  };
  const getQuery = {
    runnable: getRunnable,
    fields: {
      database: {
        type: "static",
        value: resource,
        fieldType: "object",
        format: `resource-${dbType}`
      }
    },
    type: "runnable",
    fieldType: "object",
    hideRefreshButton: true
  };
  return getQuery;
}
const DebouncedInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["placeholder", "value", "debounceDelay", "class"]);
  let { placeholder = "Search..." } = $$props;
  let { value } = $$props;
  let { debounceDelay = 100 } = $$props;
  let { class: parentClass = void 0 } = $$props;
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.debounceDelay === void 0 && $$bindings.debounceDelay && debounceDelay !== void 0) $$bindings.debounceDelay(debounceDelay);
  if ($$props.class === void 0 && $$bindings.class && parentClass !== void 0) $$bindings.class(parentClass);
  return `<input${spread(
    [
      {
        placeholder: escape_attribute_value(placeholder)
      },
      {
        class: escape_attribute_value(twMerge(parentClass, "mb-1 h-8 !rounded-md !shadow-none"))
      },
      escape_object($$restProps)
    ],
    {}
  )}>`;
});
function updateOneOfConfiguration(oneOfConfiguration, resolvedConfig, patch) {
  const selectedConfig = oneOfConfiguration.configuration[resolvedConfig.selected];
  if (!selectedConfig) {
    console.warn(`Selected configuration '${resolvedConfig.selected}' does not exist.`);
    return;
  }
  Object.keys(patch).forEach((key) => {
    oneOfConfiguration.configuration[resolvedConfig.selected][key] = {
      ...oneOfConfiguration.configuration[resolvedConfig.selected][key],
      ...patch[key]
    };
  });
}
function isSubset(subset, superset) {
  return Object.keys(subset).every((key) => {
    return superset[key] === subset[key];
  });
}
function shouldReturnEarly(subset, superset) {
  const subsetKeys = Object.keys(subset);
  const supersetKeys = Object.keys(superset);
  if (supersetKeys.length === 0) return false;
  if (subsetKeys.length !== supersetKeys.length) {
    return false;
  }
  if (JSON.stringify(supersetKeys.sort()) === JSON.stringify(subsetKeys.sort()) && !subsetKeys.every((key) => isSubset(subset[key], superset[key]))) {
    return false;
  }
  return true;
}
const AppDbExplorer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let table;
  let hideSearch;
  let hideInsert;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $worldStore, $$unsubscribe_worldStore;
  let $selectedComponent, $$unsubscribe_selectedComponent;
  let $app, $$unsubscribe_app;
  let $mode, $$unsubscribe_mode;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { id } = $$props;
  let { configuration } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  let { initializing = true } = $$props;
  let { actions = [] } = $$props;
  function clearColumns() {
    if (!(lastTable && table && lastTable !== table) && !(lastTable && !table)) {
      return;
    }
    if (lastTable && !table) {
      lastTable = void 0;
    }
    clearColumnDefs();
  }
  function clearColumnDefs() {
    const gridItem = findGridItem($app, id);
    if (!gridItem) {
      return;
    }
    gridItem.data.configuration.columnDefs = {
      value: [],
      type: "static",
      loading: false
    };
    set_store_value(app, $app = { ...$app }, $app);
  }
  const resolvedConfig = initConfig(components["dbexplorercomponent"].initialData.configuration, configuration);
  let timeoutInput = void 0;
  function computeInput(columnDefs, whereClause, resource) {
    if (timeoutInput) {
      clearTimeout(timeoutInput);
    }
    timeoutInput = setTimeout(
      () => {
        timeoutInput = void 0;
        console.log("compute input");
        input = getSelectInput(resource, resolvedConfig.type.configuration[resolvedConfig.type.selected].table, columnDefs, whereClause, resolvedConfig.type.selected);
      },
      1e3
    );
  }
  const { app, worldStore, mode, selectedComponent } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_mode = subscribe(mode, (value) => $mode = value);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => $selectedComponent = value);
  const editorContext = getContext("AppEditorContext");
  let input = void 0;
  let quicksearch = "";
  let aggrid;
  let firstQuicksearch = true;
  initializing = false;
  let updateCell;
  let insertDrawer = void 0;
  let componentContainerHeight = void 0;
  let args = {};
  let outputs = initOutput($worldStore, id, {
    selectedRowIndex: 0,
    selectedRow: {},
    selectedRows: [],
    result: [],
    inputs: {},
    loading: false,
    page: 0,
    newChange: { row: 0, column: "", value: void 0 },
    ready: void 0
  });
  let lastResource = void 0;
  async function listTables() {
    let resource = resolvedConfig.type.configuration?.[resolvedConfig.type.selected]?.resource;
    if (!resource) return;
    if (lastResource === resource) return;
    lastResource = resource;
    const gridItem = findGridItem($app, id);
    if (!gridItem) {
      return;
    }
    updateOneOfConfiguration(gridItem.data.configuration.type, resolvedConfig.type, {
      table: { selectOptions: [], loading: true }
    });
    if (!resolvedConfig.type?.configuration?.[resolvedConfig.type.selected]?.resource) {
      set_store_value(app, $app = { ...$app }, $app);
      return;
    }
    try {
      const dbSchemas = {};
      await getDbSchemas(resolvedConfig?.type?.selected, resolvedConfig.type.configuration[resolvedConfig?.type?.selected].resource.split(":")[1], $workspaceStore, dbSchemas, (message) => {
      });
      updateOneOfConfiguration(gridItem.data.configuration.type, resolvedConfig.type, {
        table: {
          selectOptions: dbSchemas ? await getTablesByResource(dbSchemas, resolvedConfig?.type?.selected, resource.split(":")[1], $workspaceStore) : [],
          loading: false
        }
      });
      set_store_value(app, $app = { ...$app }, $app);
    } catch (e) {
    }
  }
  let datasource = {
    rowCount: 0,
    async getRows(params) {
      const currentParams = {
        offset: params.startRow,
        limit: params.endRow - params.startRow,
        quicksearch,
        order_by: params.sortModel?.[0]?.colId ?? resolvedConfig.columnDefs?.[0]?.field,
        is_desc: params.sortModel?.[0]?.sort === "desc"
      };
      if (!render) {
        return;
      }
      if (!runnableComponent) {
        params.successCallback([], 0);
        return;
      }
      runnableComponent?.runComponent(void 0, void 0, void 0, currentParams, {
        done: (items) => {
          let lastRow = -1;
          if (datasource?.rowCount && datasource.rowCount <= params.endRow) {
            lastRow = datasource.rowCount;
          }
          if (items && Array.isArray(items)) {
            if (resolvedConfig.type.selected === "ms_sql_server") {
              items = items?.[0];
            }
            let processedData = items.map((item) => {
              let primaryKeys = getPrimaryKeys(resolvedConfig.columnDefs);
              let o = {};
              primaryKeys.forEach((pk) => {
                o[pk] = item[pk];
              });
              item["__index"] = JSON.stringify(o);
              return item;
            });
            if (items.length < params.endRow - params.startRow) {
              lastRow = params.startRow + items.length;
            }
            params.successCallback(processedData, lastRow);
          } else {
            params.failCallback();
          }
        },
        cancel: () => {
          params.failCallback();
        },
        error: () => {
          params.failCallback();
        }
      });
    }
  };
  let lastTable = void 0;
  let timeout = void 0;
  async function listColumnsIfAvailable() {
    const selected2 = resolvedConfig.type.selected;
    let table2 = resolvedConfig.type.configuration?.[resolvedConfig.type.selected]?.table;
    if (lastTable === table2) return;
    lastTable = table2;
    const gridItem = findGridItem($app, id);
    if (!gridItem) return;
    let columnDefs = gridItem.data.configuration.columnDefs;
    if (columnDefs.type !== "static") return;
    gridItem.data.configuration.columnDefs.loading = true;
    gridItem.data = gridItem.data;
    app.set($app);
    let tableMetadata = await loadTableMetaData(resolvedConfig.type.configuration[selected2].resource, $workspaceStore, resolvedConfig.type.configuration[selected2].table, selected2);
    if (!tableMetadata) return;
    let old = columnDefs?.value ?? [];
    if (!Array.isArray(old)) {
      console.log("old is not an array RESET");
      old = [];
    }
    const oldMap = Object.fromEntries(old.filter((x) => x != void 0).map((x) => [x.field, x]));
    const newMap = Object.fromEntries(tableMetadata?.map((x) => [x.field, x]) ?? []);
    if (shouldReturnEarly(newMap, oldMap)) {
      gridItem.data.configuration.columnDefs.loading = false;
      gridItem.data = gridItem.data;
      app.set($app);
      return;
    }
    let ncols = [];
    Object.entries(oldMap).forEach(([key, value]) => {
      if (newMap[key]) {
        ncols.push({ ...value, ...newMap[key] });
      }
    });
    Object.entries(newMap).forEach(([key, value]) => {
      if (!oldMap[key]) {
        ncols.push(value);
      }
    });
    ncols = ncols.map((x) => {
      let o = {};
      Object.keys(x).forEach((k) => {
        if ([
          "field",
          "datatype",
          "defaultvalue",
          "isprimarykey",
          "isidentity",
          "isnullable",
          "isenum"
        ].includes(k.toLocaleLowerCase())) {
          o[k.toLowerCase()] = x[k];
        } else {
          o[k] = x[k];
        }
      });
      return o;
    });
    state = void 0;
    if (lastTable !== table2) {
      return;
    }
    gridItem.data.configuration.columnDefs = {
      value: ncols,
      type: "static",
      loading: false
    };
    gridItem.data = gridItem.data;
    app.set($app);
    let oldS = $selectedComponent;
    set_store_value(selectedComponent, $selectedComponent = [], $selectedComponent);
    await tick();
    set_store_value(selectedComponent, $selectedComponent = oldS, $selectedComponent);
    resolvedConfig.columnDefs = ncols;
    timeout && clearTimeout(timeout);
    timeout = setTimeout(
      () => {
        timeout = void 0;
      },
      1500
    );
  }
  let isInsertable = false;
  function connectToComponents() {
    if ($worldStore && datasource !== void 0) {
      const outputs2 = $worldStore.outputsById[`${id}_count`];
      if (outputs2) {
        outputs2.result.subscribe(
          {
            id: "dbexplorer-count-" + id,
            next: (value) => {
              if (value?.error) {
                const message = value?.error?.message ?? value?.error;
                sendUserToast(message, true);
                return;
              }
              if (Array.isArray(value) && value.length === 1 && resolvedConfig.type.selected === "ms_sql_server") {
                datasource.rowCount = value?.[0]?.[0]?.count;
              } else if (resolvedConfig.type.selected === "snowflake") {
                datasource.rowCount = value?.[0]?.COUNT;
              } else {
                datasource.rowCount = value?.[0]?.count;
              }
            }
          },
          datasource.rowCount
        );
      }
    }
  }
  let runnableComponent;
  let state = void 0;
  let insertRowRunnable;
  let deleteRow;
  let dbExplorerCount = void 0;
  let refreshCount = 0;
  let loading = false;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.initializing === void 0 && $$bindings.initializing && initializing !== void 0) $$bindings.initializing(initializing);
  if ($$props.actions === void 0 && $$bindings.actions && actions !== void 0) $$bindings.actions(actions);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    table = resolvedConfig.type.configuration?.[resolvedConfig.type?.selected]?.table;
    table !== null && render && clearColumns();
    resolvedConfig.type.selected && render && computeInput(resolvedConfig.columnDefs, resolvedConfig.whereClause, resolvedConfig.type.configuration[resolvedConfig.type.selected].resource);
    editorContext != void 0 && $mode == "dnd" && resolvedConfig.type && listTables();
    editorContext != void 0 && $mode == "dnd" && resolvedConfig.type.configuration?.[resolvedConfig?.type?.selected]?.table && listColumnsIfAvailable();
    {
      if (quicksearch !== void 0) {
        if (firstQuicksearch) {
          firstQuicksearch = false;
        } else {
          aggrid?.clearRows();
        }
      }
    }
    $worldStore && render && connectToComponents();
    hideSearch = resolvedConfig.hideSearch;
    hideInsert = resolvedConfig.hideInsert;
    $$rendered = `${each(Object.keys(components["dbexplorercomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          extraKey: "db_explorer",
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InsertRowRunnable, "InsertRowRunnable").$$render(
      $$result,
      { id, this: insertRowRunnable },
      {
        this: ($$value) => {
          insertRowRunnable = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${resolvedConfig.allowDelete ? `${validate_component(DeleteRow, "DeleteRow").$$render(
      $$result,
      { id, this: deleteRow },
      {
        this: ($$value) => {
          deleteRow = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${validate_component(UpdateCell, "UpdateCell").$$render(
      $$result,
      { id, this: updateCell },
      {
        this: ($$value) => {
          updateCell = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${render ? `${validate_component(DbExplorerCount, "DbExplorerCount").$$render(
      $$result,
      {
        renderCount: refreshCount,
        id,
        quicksearch,
        table,
        resource: resolvedConfig?.type?.configuration?.[resolvedConfig?.type?.selected]?.resource,
        resourceType: resolvedConfig?.type?.selected,
        columnDefs: resolvedConfig?.columnDefs,
        whereClause: resolvedConfig?.whereClause,
        this: dbExplorerCount
      },
      {
        this: ($$value) => {
          dbExplorerCount = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${validate_component(RunnableWrapper, "RunnableWrapper").$$render(
      $$result,
      {
        allowConcurentRequests: true,
        noInitialize: true,
        componentInput: input,
        autoRefresh: false,
        render,
        id,
        outputs,
        overrideCallback: () => new CancelablePromise(async (resolve) => {
          await dbExplorerCount?.computeCount(true);
          aggrid?.clearRows();
          resolve();
        }),
        overrideAutoRefresh: true,
        runnableComponent,
        loading
      },
      {
        runnableComponent: ($$value) => {
          runnableComponent = $$value;
          $$settled = false;
        },
        loading: ($$value) => {
          loading = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="h-full">${!(hideSearch === true && hideInsert === true) ? `<div class="flex py-2 h-12 justify-between gap-4">${hideSearch !== true ? `${validate_component(DebouncedInput, "DebouncedInput").$$render(
            $$result,
            {
              class: "w-full max-w-[300px]",
              type: "text",
              placeholder: "Search...",
              value: quicksearch
            },
            {
              value: ($$value) => {
                quicksearch = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``} <div class="flex flex-row gap-2">${validate_component(RefreshButton, "RefreshButton").$$render($$result, { id, loading }, {}, {})} ${hideInsert !== true ? `${validate_component(Button, "Button").$$render(
            $$result,
            {
              startIcon: { icon: Plus },
              color: "dark",
              size: "xs2"
            },
            {},
            {
              default: () => {
                return `Insert`;
              }
            }
          )}` : ``}</div></div>` : ``} ${resolvedConfig.type.configuration?.[resolvedConfig?.type?.selected]?.resource && resolvedConfig.type.configuration?.[resolvedConfig?.type?.selected]?.table ? `   ${validate_component(AppAggridExplorerTable, "AppAggridExplorerTable").$$render(
            $$result,
            {
              id,
              datasource,
              resolvedConfig,
              customCss,
              outputs,
              allowDelete: resolvedConfig.allowDelete ?? false,
              containerHeight: componentContainerHeight - 0,
              allowColumnDefsActions: false,
              actions,
              this: aggrid,
              state
            },
            {
              this: ($$value) => {
                aggrid = $$value;
                $$settled = false;
              },
              state: ($$value) => {
                state = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``}</div>`;
        }
      }
    )} ${validate_component(Portal, "Portal").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Drawer, "Drawer").$$render(
          $$result,
          { size: "800px", this: insertDrawer },
          {
            this: ($$value) => {
              insertDrawer = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Insert row" }, {}, {
                actions: () => {
                  return `${validate_component(Button, "Button").$$render(
                    $$result,
                    {
                      color: "dark",
                      size: "xs",
                      disabled: !isInsertable
                    },
                    {},
                    {
                      default: () => {
                        return `Insert`;
                      }
                    }
                  )} `;
                },
                default: () => {
                  return `${validate_component(InsertRow, "InsertRow").$$render(
                    $$result,
                    {
                      columnDefs: resolvedConfig.columnDefs,
                      dbType: resolvedConfig.type.selected,
                      args,
                      isInsertable
                    },
                    {
                      args: ($$value) => {
                        args = $$value;
                        $$settled = false;
                      },
                      isInsertable: ($$value) => {
                        isInsertable = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })}`;
            }
          }
        )}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_worldStore();
  $$unsubscribe_selectedComponent();
  $$unsubscribe_app();
  $$unsubscribe_mode();
  return $$rendered;
});
let forceDisplayUploads = false;
const AppS3FileInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let resolvedConfigS3;
  let $app, $$unsubscribe_app;
  let $worldStore, $$unsubscribe_worldStore;
  let $fileUploads, $$unsubscribe_fileUploads;
  let $componentControl, $$unsubscribe_componentControl;
  let $$unsubscribe_runnableComponents;
  let { id } = $$props;
  let { configuration } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  let { extraKey = void 0 } = $$props;
  let { onFileChange = void 0 } = $$props;
  let resolvedConfig = initConfig(components["s3fileinputcomponent"].initialData.configuration, configuration);
  let fileUploads = writable([]);
  $$unsubscribe_fileUploads = subscribe(fileUploads, (value) => $fileUploads = value);
  const { app, worldStore, componentControl, runnableComponents } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => $componentControl = value);
  $$unsubscribe_runnableComponents = subscribe(runnableComponents, (value) => value);
  set_store_value(
    componentControl,
    $componentControl[id] = {
      clearFiles: () => {
        outputs.result.set([]);
        set_store_value(fileUploads, $fileUploads = [], $fileUploads);
      }
    },
    $componentControl
  );
  const outputs = initOutput($worldStore, id, {
    result: [],
    loading: false,
    jobId: void 0
  });
  let css2 = initCss($app.css?.fileinputcomponent, customCss);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.extraKey === void 0 && $$bindings.extraKey && extraKey !== void 0) $$bindings.extraKey(extraKey);
  if ($$props.onFileChange === void 0 && $$bindings.onFileChange && onFileChange !== void 0) $$bindings.onFileChange(onFileChange);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    resolvedConfigS3 = resolvedConfig.type.configuration.s3;
    $$rendered = `${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.fileinputcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.entries(components["s3fileinputcomponent"].initialData.configuration), ([key, value]) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          extraKey,
          key,
          configuration: configuration[key],
          initialConfig: value,
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}  ${render ? `${validate_component(FileUpload, "FileUpload").$$render(
      $$result,
      {
        acceptedFileTypes: resolvedConfigS3.acceptedFileTypes?.length ? resolvedConfigS3.acceptedFileTypes : void 0,
        pathTransformer: resolvedConfig?.type?.configuration?.s3?.pathTemplate,
        allowMultiple: resolvedConfigS3.allowMultiple,
        containerText: resolvedConfigS3.text,
        customResourcePath: resolvedConfigS3.resource,
        customResourceType: "s3",
        customClass: css2?.container?.class,
        customStyle: css2?.container?.style,
        forceDisplayUploads
      },
      {},
      {}
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_worldStore();
  $$unsubscribe_fileUploads();
  $$unsubscribe_componentControl();
  $$unsubscribe_runnableComponents();
  return $$rendered;
});
const AppAlert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  let { configuration } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  let { verticalAlignment = void 0 } = $$props;
  const { app, worldStore } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  let resolvedConfig = initConfig(components["alertcomponent"].initialData.configuration, configuration);
  initOutput($worldStore, id, {});
  let css2 = initCss($app.css?.alertcomponent, customCss);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.verticalAlignment === void 0 && $$bindings.verticalAlignment && verticalAlignment !== void 0) $$bindings.verticalAlignment(verticalAlignment);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${each(Object.keys(components["alertcomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.alertcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${render ? `${validate_component(AlignWrapper, "AlignWrapper").$$render($$result, { verticalAlignment }, {}, {
      default: () => {
        return `<div${add_attribute("class", twMerge("w-full", css2?.container?.class, "wm-alert-card-container"), 0)}${add_attribute("style", css2?.container?.style, 0)}>${validate_component(Alert, "Alert").$$render(
          $$result,
          {
            title: resolvedConfig.title ?? "",
            type: resolvedConfig.type,
            notRounded: resolvedConfig.notRounded,
            tooltip: resolvedConfig.tooltip,
            size: resolvedConfig.size,
            collapsible: resolvedConfig.collapsible,
            bgClass: css2?.background?.class,
            bgStyle: css2?.background?.style,
            iconClass: css2?.icon?.class,
            iconStyle: css2?.icon?.style,
            titleClass: css2?.title?.class,
            titleStyle: css2?.title?.style,
            descriptionClass: css2?.description?.class,
            descriptionStyle: css2?.description?.style,
            isCollapsed: resolvedConfig.initiallyCollapsed
          },
          {},
          {
            default: () => {
              return `${escape(resolvedConfig.description)}`;
            }
          }
        )}</div>`;
      }
    })}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_worldStore();
  return $$rendered;
});
const css$1$2 = {
  code: ".rangeSlider.vertical{height:80%;min-height:10px!important}",
  map: null
};
const spanClass$1 = "text-center text-sm font-medium bg-blue-100 text-blue-800 rounded px-2.5 py-0.5";
const AppDateSliderInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $componentControl, $$unsubscribe_componentControl;
  let $worldStore, $$unsubscribe_worldStore;
  let $$unsubscribe_selectedComponent;
  let { id } = $$props;
  let { configuration } = $$props;
  let { verticalAlignment = void 0 } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  const iterContext = getContext("ListWrapperContext");
  const listInputs = getContext("ListInputs");
  const { app, worldStore, selectedComponent, componentControl } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => value);
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => $componentControl = value);
  let resolvedConfig = initConfig(components["dateslidercomponent"].initialData.configuration, configuration);
  onDestroy(() => {
    listInputs?.remove(id);
  });
  let values = [
    resolvedConfig.defaultValue ? new Date(resolvedConfig.defaultValue).getTime() : (/* @__PURE__ */ new Date()).getTime()
  ];
  function handleDefault() {
    values = [
      resolvedConfig.defaultValue ? new Date(resolvedConfig.defaultValue).getTime() : (/* @__PURE__ */ new Date()).getTime()
    ];
  }
  let slider;
  const outputs = initOutput($worldStore, id, { result: null });
  set_store_value(
    componentControl,
    $componentControl[id] = {
      setValue(nvalue) {
        values = [nvalue];
      }
    },
    $componentControl
  );
  function formatDate(dateString, formatString = "dd.MM.yyyy") {
    if (formatString === "") {
      formatString = "dd.MM.yyyy";
    }
    try {
      const isoDate = parseISO(dateString);
      return format(isoDate, formatString);
    } catch (error) {
      return "Error formatting date:" + error.message;
    }
  }
  function handleValues() {
    const dateString = values[0] ? new Date(values[0]).toISOString() : (/* @__PURE__ */ new Date()).toISOString();
    outputs?.result.set(formatDate(dateString, resolvedConfig.outputFormat));
    if (iterContext && listInputs) {
      listInputs.set(id, formatDate(dateString, resolvedConfig.outputFormat));
    }
  }
  let css2 = initCss($app.css?.dateslidercomponent, customCss);
  let lastStyle = void 0;
  let width = 0;
  function computeWidth() {
    let maxValue = resolvedConfig.max ?? 0 + (resolvedConfig.step ?? 0);
    if (typeof document !== "undefined") {
      const span = document.createElement("span");
      span.style.visibility = "hidden";
      span.style.position = "absolute";
      span.style.whiteSpace = "nowrap";
      span.className = spanClass$1;
      span.textContent = maxValue.toString();
      document.body.appendChild(span);
      width = span?.offsetWidth;
      document.body.removeChild(span);
    }
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.verticalAlignment === void 0 && $$bindings.verticalAlignment && verticalAlignment !== void 0) $$bindings.verticalAlignment(verticalAlignment);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  $$result.css.add(css$1$2);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    resolvedConfig.defaultValue != void 0 && handleDefault();
    values && handleValues();
    {
      if (css2 && slider && lastStyle !== css2?.handle?.style) {
        const handle = slider.querySelector(".rangeNub");
        if (handle) {
          lastStyle = css2?.handle?.style;
          handle.style.cssText = css2?.handle?.style ?? "";
        }
      }
    }
    {
      if (resolvedConfig.max != void 0 && resolvedConfig.step && render) {
        computeWidth();
      }
    }
    $$rendered = `${each(Object.keys(components["dateslidercomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.dateslidercomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${validate_component(AlignWrapper, "AlignWrapper").$$render($$result, { render, hFull: true, verticalAlignment }, {}, {
      default: () => {
        return `<div class="${"flex " + escape(resolvedConfig.vertical ? "flex-col" : "", true) + " items-center w-full h-full gap-1 px-1"}"><span${add_attribute("class", twMerge(css2?.limits?.class, "font-mono whitespace-nowrap  wm-slider-limits"), 0)}${add_attribute("style", css2?.limits?.style ?? "", 0)}>${escape(resolvedConfig?.min ? new Date(resolvedConfig?.min).toDateString() : (/* @__PURE__ */ new Date()).toDateString())}</span> <div${add_attribute("class", twMerge("grow", css2?.bar?.class, "font-mono wm-slider-bar", resolvedConfig?.vertical ? "h-full" : "w-full"), 0)}${add_attribute("style", css2?.bar?.style, 0)}>${validate_component(RangeSlider, "RangeSlider").$$render(
          $$result,
          {
            springValues: { stiffness: 1, damping: 1 },
            vertical: resolvedConfig.vertical,
            step: (resolvedConfig.step ?? 1) * 1e3 * 60 * 60 * 24,
            min: resolvedConfig?.min ? new Date(resolvedConfig?.min).getTime() : (/* @__PURE__ */ new Date()).getTime(),
            max: resolvedConfig?.max ? new Date(resolvedConfig?.max).getTime() : (/* @__PURE__ */ new Date()).getTime(),
            disabled: resolvedConfig.disabled,
            slider,
            values
          },
          {
            slider: ($$value) => {
              slider = $$value;
              $$settled = false;
            },
            values: ($$value) => {
              values = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div> <span${add_attribute("class", twMerge(css2?.limits?.class, "font-mono whitespace-nowrap wm-slider-limits"), 0)}${add_attribute("style", css2?.limits?.style ?? "", 0)}>${escape(resolvedConfig?.max ? new Date(resolvedConfig?.max).toDateString() : (/* @__PURE__ */ new Date()).toDateString())}</span> <span class="mx-2"><span${add_attribute("class", twMerge(spanClass$1, css2?.value?.class ?? "", "font-mono  whitespace-nowrap  wm-slider-value"), 0)}${add_attribute("style", `${css2?.value?.style ?? ""} ${width ? `width: ${width}px;` : ""}`, 0)}>${escape(values[0] ? new Date(values[0]).toDateString() : (/* @__PURE__ */ new Date()).toDateString())}</span></span></div>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_componentControl();
  $$unsubscribe_worldStore();
  $$unsubscribe_selectedComponent();
  return $$rendered;
});
function convertToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}
const AppTimeInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $worldStore, $$unsubscribe_worldStore;
  let $componentControl, $$unsubscribe_componentControl;
  let $$unsubscribe_selectedComponent;
  let { id } = $$props;
  let { configuration } = $$props;
  let { verticalAlignment = void 0 } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  const { app, worldStore, selectedComponent, componentControl } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value2) => $app = value2);
  $$unsubscribe_worldStore = subscribe(worldStore, (value2) => $worldStore = value2);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value2) => value2);
  $$unsubscribe_componentControl = subscribe(componentControl, (value2) => $componentControl = value2);
  let resolvedConfig = initConfig(components["timeinputcomponent"].initialData.configuration, configuration);
  let value = void 0;
  set_store_value(
    componentControl,
    $componentControl[id] = {
      setValue(nvalue) {
        value = nvalue;
      }
    },
    $componentControl
  );
  let outputs = initOutput($worldStore, id, { result: void 0, validity: true });
  function handleDefault(defaultValue) {
    value = defaultValue;
  }
  let css2 = initCss($app.css?.timeinputcomponent, customCss);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.verticalAlignment === void 0 && $$bindings.verticalAlignment && verticalAlignment !== void 0) $$bindings.verticalAlignment(verticalAlignment);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    !value && handleDefault(resolvedConfig.defaultValue);
    {
      {
        if (value) {
          if (!resolvedConfig["24hFormat"]) {
            let time = value.split(":");
            let hours = parseInt(time[0]);
            let minutes = time[1];
            let ampm = hours >= 12 ? "pm" : "am";
            hours = hours % 12;
            hours = hours ? hours : 12;
            outputs?.result.set(hours + ":" + minutes + " " + ampm);
          } else {
            outputs?.result.set(value);
          }
          let currentValueInMinutes = convertToMinutes(value);
          let isValid = true;
          if (resolvedConfig.minTime) {
            const minTimeInMinutes = convertToMinutes(resolvedConfig.minTime);
            if (currentValueInMinutes < minTimeInMinutes) {
              isValid = false;
            }
          }
          if (resolvedConfig.maxTime) {
            const maxTimeInMinutes = convertToMinutes(resolvedConfig.maxTime);
            if (currentValueInMinutes > maxTimeInMinutes) {
              isValid = false;
            }
          }
          outputs?.validity.set(isValid);
        }
      }
    }
    $$rendered = `${each(Object.keys(components["timeinputcomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.timeinputcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${validate_component(AlignWrapper, "AlignWrapper").$$render($$result, { render, verticalAlignment }, {}, {
      default: () => {
        return `<input type="time"${add_attribute("min", resolvedConfig.minTime, 0)}${add_attribute("max", resolvedConfig.maxTime, 0)} placeholder="Type..."${add_attribute("class", twMerge("windmillapp w-full py-1.5 text-sm px-2", css2?.input?.class), 0)}${add_attribute("style", css2?.input?.style ?? "", 0)}${add_attribute("value", value, 0)}>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_worldStore();
  $$unsubscribe_componentControl();
  $$unsubscribe_selectedComponent();
  return $$rendered;
});
const AppDateTimeInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $worldStore, $$unsubscribe_worldStore;
  let $componentControl, $$unsubscribe_componentControl;
  let $$unsubscribe_selectedComponent;
  let { id } = $$props;
  let { configuration } = $$props;
  let { inputType } = $$props;
  let { verticalAlignment = void 0 } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  const { app, worldStore, componentControl, selectedComponent } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value2) => $app = value2);
  $$unsubscribe_worldStore = subscribe(worldStore, (value2) => $worldStore = value2);
  $$unsubscribe_componentControl = subscribe(componentControl, (value2) => $componentControl = value2);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value2) => value2);
  let resolvedConfig = initConfig(components["datetimeinputcomponent"].initialData.configuration, configuration);
  let value = void 0;
  set_store_value(
    componentControl,
    $componentControl[id] = {
      setValue(nvalue) {
        value = nvalue;
      }
    },
    $componentControl
  );
  let outputs = initOutput($worldStore, id, { result: void 0, validity: true });
  function formatDate(dateString, formatString = "dd.MM.yyyy HH:mm") {
    if (formatString === "") {
      formatString = "dd.MM.yyyy HH:mm";
    }
    try {
      const isoDate = parseISO(dateString);
      return format(isoDate, formatString);
    } catch (error) {
      return "Error formatting date:" + error.message;
    }
  }
  function handleDefault(defaultValue) {
    value = defaultValue;
  }
  let css2 = initCss($app.css?.datetimeinputcomponent, customCss);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.inputType === void 0 && $$bindings.inputType && inputType !== void 0) $$bindings.inputType(inputType);
  if ($$props.verticalAlignment === void 0 && $$bindings.verticalAlignment && verticalAlignment !== void 0) $$bindings.verticalAlignment(verticalAlignment);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      handleDefault(resolvedConfig.defaultValue);
    }
    {
      {
        if (value) {
          outputs?.result.set(formatDate(value, resolvedConfig.outputFormat));
          const valueDate = new Date(value);
          if (resolvedConfig.minDateTime) {
            const minDate = new Date(resolvedConfig.minDateTime);
            if (minDate.getDay() === valueDate.getDay() && minDate.getMonth() === valueDate.getMonth() && minDate.getFullYear() === valueDate.getFullYear()) {
              outputs?.validity.set(minDate.getTime() < valueDate.getTime());
            }
            if (minDate.getTime() > valueDate.getTime()) {
              outputs?.validity.set(false);
            }
          }
          if (resolvedConfig.maxDateTime) {
            const maxDate = new Date(resolvedConfig.maxDateTime);
            if (maxDate.getDay() === valueDate.getDay() && maxDate.getMonth() === valueDate.getMonth() && maxDate.getFullYear() === valueDate.getFullYear()) {
              outputs?.validity.set(maxDate.getTime() > valueDate.getTime());
            }
            if (maxDate.getTime() < valueDate.getTime()) {
              outputs?.validity.set(false);
            }
          }
        } else {
          outputs?.result.set(void 0);
        }
      }
    }
    $$rendered = `${each(Object.keys(components["datetimeinputcomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.datetimeinputcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${validate_component(AlignWrapper, "AlignWrapper").$$render($$result, { render, verticalAlignment }, {}, {
      default: () => {
        return `<div${add_attribute("class", twMerge(css2?.container?.class, "w-full"), 0)}${add_attribute("style", css2?.container?.style, 0)}>${inputType === "date" ? `${validate_component(DateTimeInput, "DateTimeInput").$$render(
          $$result,
          {
            useDropdown: resolvedConfig?.displayPresets,
            inputClass: twMerge("windmillapp w-full py-1.5 px-2 text-sm", "app-editor-input"),
            minDate: resolvedConfig.minDateTime ? formatDate(resolvedConfig.minDateTime, "yyyy-MM-dd") : void 0,
            maxDate: resolvedConfig.maxDateTime ? formatDate(resolvedConfig.maxDateTime, "yyyy-MM-dd") : void 0,
            disabled: resolvedConfig.disabled,
            value
          },
          {
            value: ($$value) => {
              value = $$value;
              $$settled = false;
            }
          },
          {}
        )}` : ``}</div>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_worldStore();
  $$unsubscribe_componentControl();
  $$unsubscribe_selectedComponent();
  return $$rendered;
});
const AppAggridInfiniteTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $worldStore, $$unsubscribe_worldStore;
  let $app, $$unsubscribe_app;
  let { id } = $$props;
  let { componentInput } = $$props;
  let { configuration } = $$props;
  let { initializing = void 0 } = $$props;
  let { render } = $$props;
  let { customCss = void 0 } = $$props;
  let { actions = void 0 } = $$props;
  let runnableComponent = void 0;
  const context = getContext("AppViewerContext");
  const { app, worldStore } = context;
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  let css2 = initCss($app.css?.aggridcomponent, customCss);
  let result = void 0;
  let loading = false;
  let resolvedConfig = initConfig(components["aggridinfinitecomponent"].initialData.configuration, configuration);
  let outputs = initOutput($worldStore, id, {
    selectedRowIndex: 0,
    selectedRow: {},
    selectedRows: [],
    result: [],
    inputs: {},
    loading: false,
    page: 0,
    newChange: { row: 0, column: "", value: void 0 },
    ready: void 0,
    params: {
      offset: 0,
      limit: 10,
      orderBy: resolvedConfig.columnDefs?.[0]?.field,
      isDesc: false,
      search: ""
    }
  });
  let aggrid = void 0;
  const datasource = {
    rowCount: void 0,
    async getRows(params) {
      if (!render) {
        return;
      }
      const currentParams = {
        offset: params.startRow,
        limit: params.endRow - params.startRow,
        orderBy: params.sortModel?.[0]?.colId ?? void 0,
        isDesc: params.sortModel?.[0]?.sort === "desc",
        search: resolvedConfig.searchEnabled ? searchValue : ""
      };
      outputs.params.set(currentParams);
      if (!runnableComponent && result) {
        params.successCallback(result, result.length);
        return;
      }
      if (!runnableComponent && !result) {
        params.successCallback([], 0);
        return;
      }
      runnableComponent?.runComponent(void 0, void 0, void 0, currentParams, {
        done: (items) => {
          let lastRow = -1;
          if (datasource?.rowCount && datasource.rowCount <= params.endRow) {
            lastRow = datasource.rowCount;
          }
          if (items && Array.isArray(items)) {
            let processedData = items.map((item) => {
              let primaryKeys = getPrimaryKeys(resolvedConfig.columnDefs);
              let o = {};
              primaryKeys.forEach((pk) => {
                o[pk] = item[pk];
              });
              item["__index"] = JSON.stringify(o);
              return item;
            });
            if (items.length < params.endRow - params.startRow) {
              lastRow = params.startRow + items.length;
            }
            datasource.rowCount = void 0;
            params.successCallback(processedData, lastRow);
          } else {
            params.failCallback();
          }
        },
        cancel: () => {
          params.failCallback();
        },
        error: () => {
          params.failCallback();
        }
      });
    }
  };
  let searchValue = "";
  function updateSearchInOutputs() {
    outputs.params.set({
      ...outputs.params.peak(),
      search: searchValue
    });
    aggrid?.clearRows();
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.initializing === void 0 && $$bindings.initializing && initializing !== void 0) $$bindings.initializing(initializing);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.actions === void 0 && $$bindings.actions && actions !== void 0) $$bindings.actions(actions);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    searchValue !== void 0 && updateSearchInOutputs();
    $$rendered = `${each(Object.keys(components["aggridinfinitecomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.tablecomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${validate_component(RunnableWrapper, "RunnableWrapper").$$render(
      $$result,
      {
        outputs,
        componentInput,
        id,
        render,
        autoRefresh: true,
        allowConcurentRequests: true,
        initializing,
        result,
        loading,
        runnableComponent
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        },
        result: ($$value) => {
          result = $$value;
          $$settled = false;
        },
        loading: ($$value) => {
          loading = $$value;
          $$settled = false;
        },
        runnableComponent: ($$value) => {
          runnableComponent = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="flex flex-col h-full">${resolvedConfig.searchEnabled ? `<div class="flex flex-row w-full justify-between items-center h-12"><div class="grow max-w-[300px]">${validate_component(DebouncedInput, "DebouncedInput").$$render(
            $$result,
            {
              placeholder: "Search...",
              parentClass: "h-full ",
              value: searchValue
            },
            {
              value: ($$value) => {
                searchValue = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div></div>` : ``} ${validate_component(AppAggridExplorerTable, "AppAggridExplorerTable").$$render(
            $$result,
            {
              id,
              datasource,
              resolvedConfig,
              customCss,
              outputs,
              result,
              actions,
              allowDelete: false,
              this: aggrid
            },
            {
              this: ($$value) => {
                aggrid = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_worldStore();
  $$unsubscribe_app();
  return $$rendered;
});
const AppAggridInfiniteTableEe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { license } = $$props;
  let { componentInput } = $$props;
  let { configuration } = $$props;
  let { initializing = void 0 } = $$props;
  let { render } = $$props;
  let { customCss = void 0 } = $$props;
  let { actions = [] } = $$props;
  let loaded = false;
  async function load() {
    await import("ag-grid-enterprise");
    const { LicenseManager } = await import("ag-grid-enterprise");
    LicenseManager.setLicenseKey(license);
    loaded = true;
  }
  load();
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.license === void 0 && $$bindings.license && license !== void 0) $$bindings.license(license);
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.initializing === void 0 && $$bindings.initializing && initializing !== void 0) $$bindings.initializing(initializing);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.actions === void 0 && $$bindings.actions && actions !== void 0) $$bindings.actions(actions);
  return `${loaded ? `${validate_component(AppAggridInfiniteTable, "AppAggridInfiniteTable").$$render(
    $$result,
    {
      id,
      componentInput,
      configuration,
      initializing,
      render,
      customCss,
      actions
    },
    {},
    {}
  )}` : `${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})}`}`;
});
const AppDisplayComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $worldStore, $$unsubscribe_worldStore;
  let $componentControl, $$unsubscribe_componentControl;
  let { id } = $$props;
  let { componentInput } = $$props;
  let { initializing = void 0 } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  let { configuration } = $$props;
  const requireHtmlApproval = getContext(IS_APP_PUBLIC_CONTEXT_KEY);
  const { app, worldStore, componentControl, workspace } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => $componentControl = value);
  let result = void 0;
  const resolvedConfig = initConfig(components["displaycomponent"].initialData.configuration, configuration);
  set_store_value(
    componentControl,
    $componentControl[id] = {
      setValue(value) {
        result = value;
      }
    },
    $componentControl
  );
  const outputs = initOutput($worldStore, id, { result: void 0, loading: false });
  let css2 = initCss($app.css?.displaycomponent, customCss);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.initializing === void 0 && $$bindings.initializing && initializing !== void 0) $$bindings.initializing(initializing);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${each(Object.keys(components["displaycomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.displaycomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(RunnableWrapper, "RunnableWrapper").$$render(
      $$result,
      {
        outputs,
        render,
        componentInput,
        id,
        initializing,
        result
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        },
        result: ($$value) => {
          result = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="flex flex-col w-full h-full component-wrapper"><div${add_attribute("class", twMerge("w-full border-b p-2 text-xs font-semibold text-primary bg-surface-secondary", css2?.header?.class, "wm-rich-result-header"), 0)}${add_attribute("style", css2?.header?.style, 0)}>${escape(resolvedConfig?.title ? resolvedConfig?.title : "Result")}</div> <div${add_attribute("style", twMerge($app.css?.["displaycomponent"]?.["container"]?.style, customCss?.container?.style, "wm-rich-result-container"), 0)}${add_attribute("class", twMerge("p-2 grow overflow-auto", $app.css?.["displaycomponent"]?.["container"]?.class, customCss?.container?.class), 0)}>${validate_component(DisplayResult, "DisplayResult").$$render(
            $$result,
            {
              workspaceId: workspace,
              result,
              requireHtmlApproval,
              disableExpand: resolvedConfig?.hideDetails
            },
            {},
            {}
          )}</div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_worldStore();
  $$unsubscribe_componentControl();
  return $$rendered;
});
const AppTimeseries = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let options;
  let data;
  let $app, $$unsubscribe_app;
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  let { componentInput } = $$props;
  let { configuration } = $$props;
  let { initializing = void 0 } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  const { app, worldStore } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  const outputs = initOutput($worldStore, id, { result: void 0, loading: false });
  let logarithmicScale = false;
  let zoomable = false;
  let pannable = false;
  Chart.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale, BarElement, zoomPlugin, TimeScale, LogarithmicScale);
  let result = void 0;
  let css2 = initCss($app.css?.timeseriescomponent, customCss);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.initializing === void 0 && $$bindings.initializing && initializing !== void 0) $$bindings.initializing(initializing);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    options = {
      responsive: true,
      animation: false,
      maintainAspectRatio: false,
      plugins: {
        zoom: {
          pan: { enabled: pannable },
          zoom: {
            drag: { enabled: false },
            wheel: { enabled: zoomable }
          }
        }
      },
      scales: {
        x: { type: "time" },
        y: {
          type: logarithmicScale ? "logarithmic" : "linear"
        }
      }
    };
    data = { datasets: result ?? [] };
    $$rendered = `${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.timeseriescomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InputValue, "InputValue").$$render(
      $$result,
      {
        key: "logarithmicScale",
        id,
        input: configuration.logarithmicScale,
        value: logarithmicScale
      },
      {
        value: ($$value) => {
          logarithmicScale = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(InputValue, "InputValue").$$render(
      $$result,
      {
        key: "zoomable",
        id,
        input: configuration.zoomable,
        value: zoomable
      },
      {
        value: ($$value) => {
          zoomable = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(InputValue, "InputValue").$$render(
      $$result,
      {
        key: "pannable",
        id,
        input: configuration.pannable,
        value: pannable
      },
      {
        value: ($$value) => {
          pannable = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(RunnableWrapper, "RunnableWrapper").$$render(
      $$result,
      {
        outputs,
        render,
        autoRefresh: true,
        componentInput,
        id,
        initializing,
        result
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        },
        result: ($$value) => {
          result = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div${add_attribute("class", twMerge("w-full h-full", css2?.container?.class, "wm-timeseries"), 0)}${add_attribute("style", css2?.container?.style ?? "", 0)}>${result ? `${validate_component(Scatter, "Scatter").$$render($$result, { data, options }, {}, {})}` : ``}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_worldStore();
  return $$rendered;
});
const AppHtml = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  let { componentInput } = $$props;
  let { initializing = void 0 } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  const { app, worldStore } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  const outputs = initOutput($worldStore, id, { result: void 0, loading: false });
  let result = void 0;
  let css2 = initCss($app.css?.htmlcomponent, customCss);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.initializing === void 0 && $$bindings.initializing && initializing !== void 0) $$bindings.initializing(initializing);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.htmlcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} <div class="h-full w-full">${validate_component(RunnableWrapper, "RunnableWrapper").$$render(
      $$result,
      {
        outputs,
        render,
        autoRefresh: true,
        componentInput,
        id,
        initializing,
        result
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        },
        result: ($$value) => {
          result = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="w-full h-full overflow-auto"><!-- HTML_TAG_START -->${result}<!-- HTML_TAG_END --></div>`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_worldStore();
  return $$rendered;
});
const AppMarkdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  let { componentInput } = $$props;
  let { initializing = void 0 } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  let { configuration } = $$props;
  const { app, worldStore } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  const resolvedConfig = initConfig(components["mardowncomponent"].initialData.configuration, configuration);
  const outputs = initOutput($worldStore, id, { result: void 0, loading: false });
  let result = void 0;
  let css2 = initCss($app.css?.mardowncomponent, customCss);
  const proseMapping = {
    sm: "prose-sm",
    Default: "prose-base",
    lg: "prose-lg",
    xl: "prose-xl",
    "2xl": "prose-2xl"
  };
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.initializing === void 0 && $$bindings.initializing && initializing !== void 0) $$bindings.initializing(initializing);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${each(Object.keys(components["mardowncomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.mardowncomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} <div${add_attribute(
      "class",
      classNames(
        "h-full w-full overflow-y-auto prose max-w-full",
        resolvedConfig?.size ? proseMapping[resolvedConfig.size] : "",
        css2?.container?.class,
        " dark:prose-invert",
        "wm-markdown"
      ),
      0
    )}${add_attribute("style", css2?.container?.style, 0)}>${validate_component(RunnableWrapper, "RunnableWrapper").$$render(
      $$result,
      {
        outputs,
        render,
        autoRefresh: true,
        componentInput,
        id,
        initializing,
        result
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        },
        result: ($$value) => {
          result = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${result ? `${validate_component(Markdown, "Markdown").$$render($$result, { md: result, plugins: [gfmPlugin()] }, {}, {})}` : ``}`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_worldStore();
  return $$rendered;
});
const VegaLiteHtml = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  let { componentInput } = $$props;
  let { configuration } = $$props;
  let { initializing = void 0 } = $$props;
  let { render } = $$props;
  let result = void 0;
  let divEl = null;
  const { worldStore } = getContext("AppViewerContext");
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  const outputs = initOutput($worldStore, id, { result: void 0, loading: false });
  let canvas = false;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.initializing === void 0 && $$bindings.initializing && initializing !== void 0) $$bindings.initializing(initializing);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(InputValue, "InputValue").$$render(
      $$result,
      {
        key: "canvas",
        id,
        input: configuration.canvas,
        value: canvas
      },
      {
        value: ($$value) => {
          canvas = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="w-full h-full">${validate_component(RunnableWrapper, "RunnableWrapper").$$render(
      $$result,
      {
        outputs,
        render,
        componentInput,
        id,
        initializing,
        result
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        },
        result: ($$value) => {
          result = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div${add_attribute("this", divEl, 0)}></div>`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_worldStore();
  return $$rendered;
});
const PlotlyHtml = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_darkMode;
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  let { componentInput } = $$props;
  let { configuration } = $$props;
  let { initializing = void 0 } = $$props;
  let { render } = $$props;
  const { worldStore, darkMode } = getContext("AppViewerContext");
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => value);
  let resolvedConfig = initConfig(components["plotlycomponent"].initialData.configuration, configuration);
  const outputs = initOutput($worldStore, id, { result: void 0, loading: false });
  let result = void 0;
  let divEl = null;
  darkMode.subscribe(() => {
  });
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.initializing === void 0 && $$bindings.initializing && initializing !== void 0) $$bindings.initializing(initializing);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${each(Object.keys(components["plotlycomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} <div class="w-full h-full">${validate_component(RunnableWrapper, "RunnableWrapper").$$render(
      $$result,
      {
        outputs,
        render,
        componentInput,
        id,
        initializing,
        result
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        },
        result: ($$value) => {
          result = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${``} <div${add_attribute("this", divEl, 0)}></div>`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_darkMode();
  $$unsubscribe_worldStore();
  return $$rendered;
});
const PlotlyHtmlV2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_darkMode;
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  let { componentInput } = $$props;
  let { configuration } = $$props;
  let { datasets } = $$props;
  let { xData } = $$props;
  let { initializing = void 0 } = $$props;
  let { render } = $$props;
  const { worldStore, darkMode } = getContext("AppViewerContext");
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => value);
  let resolvedConfig = initConfig(components["plotlycomponentv2"].initialData.configuration, configuration);
  const outputs = initOutput($worldStore, id, { result: void 0, loading: false });
  let result = void 0;
  let divEl = null;
  darkMode.subscribe(() => {
  });
  let resolvedDatasets;
  let resolvedDatasetsValues = [];
  let resolvedXData = [];
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.datasets === void 0 && $$bindings.datasets && datasets !== void 0) $$bindings.datasets(datasets);
  if ($$props.xData === void 0 && $$bindings.xData && xData !== void 0) $$bindings.xData(xData);
  if ($$props.initializing === void 0 && $$bindings.initializing && initializing !== void 0) $$bindings.initializing(initializing);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    datasets && xData && resolvedDatasets ? resolvedDatasets.map((d, index) => {
      const fields = d.type === "pie" ? { values: resolvedDatasetsValues[index] } : {
        x: resolvedXData,
        y: resolvedDatasetsValues[index]
      };
      return {
        type: d.type,
        color: d.color,
        text: d.tooltip,
        ...fields,
        marker: { color: d.color },
        transforms: [
          {
            type: "aggregate",
            groups: resolvedXData,
            aggregations: [
              {
                target: "y",
                func: d.aggregation_method,
                enabled: true
              }
            ]
          }
        ],
        ...d?.extraOptions ?? {}
      };
    }) : Array.isArray(result) ? result : [result];
    $$rendered = `${each(Object.keys(components["plotlycomponentv2"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${datasets ? `${validate_component(ResolveConfig, "ResolveConfig").$$render(
      $$result,
      {
        id,
        key: "datasets",
        configuration: datasets,
        resolvedConfig: resolvedDatasets
      },
      {
        resolvedConfig: ($$value) => {
          resolvedDatasets = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${xData ? `${validate_component(ResolveConfig, "ResolveConfig").$$render(
      $$result,
      {
        id,
        key: "xData",
        configuration: xData,
        resolvedConfig: resolvedXData
      },
      {
        resolvedConfig: ($$value) => {
          resolvedXData = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${resolvedDatasets ? `${each(resolvedDatasets, (resolvedDataset, index) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key: "datasets" + index,
          configuration: resolvedDataset.value,
          resolvedConfig: resolvedDatasetsValues[index]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedDatasetsValues[index] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}` : ``} <div class="w-full h-full">${validate_component(RunnableWrapper, "RunnableWrapper").$$render(
      $$result,
      {
        outputs,
        render,
        componentInput,
        id,
        initializing,
        result
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        },
        result: ($$value) => {
          result = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${``} <div${add_attribute("this", divEl, 0)}></div>`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_darkMode();
  $$unsubscribe_worldStore();
  return $$rendered;
});
const AppScatterChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let options;
  let data;
  let $app, $$unsubscribe_app;
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  let { componentInput } = $$props;
  let { configuration } = $$props;
  let { initializing = void 0 } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  let zoomable = false;
  let pannable = false;
  const { app, worldStore } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  const outputs = initOutput($worldStore, id, { result: void 0, loading: false });
  Chart.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale, BarElement, zoomPlugin);
  let result = void 0;
  let css2 = initCss($app.css?.scatterchartcomponent, customCss);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.initializing === void 0 && $$bindings.initializing && initializing !== void 0) $$bindings.initializing(initializing);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    options = {
      responsive: true,
      animation: false,
      maintainAspectRatio: false,
      plugins: {
        zoom: {
          pan: { enabled: pannable },
          zoom: {
            drag: { enabled: false },
            wheel: { enabled: zoomable }
          }
        }
      }
    };
    data = { datasets: result ?? [] };
    $$rendered = `${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.scatterchartcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InputValue, "InputValue").$$render(
      $$result,
      {
        key: "zoomable",
        id,
        input: configuration.zoomable,
        value: zoomable
      },
      {
        value: ($$value) => {
          zoomable = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(InputValue, "InputValue").$$render(
      $$result,
      {
        key: "pannable",
        id,
        input: configuration.pannable,
        value: pannable
      },
      {
        value: ($$value) => {
          pannable = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(RunnableWrapper, "RunnableWrapper").$$render(
      $$result,
      {
        outputs,
        render,
        autoRefresh: true,
        componentInput,
        id,
        initializing,
        result
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        },
        result: ($$value) => {
          result = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div${add_attribute("class", twMerge("w-full h-full", css2?.container?.class, "wm-scatter-chart"), 0)}${add_attribute("style", css2?.container?.style ?? "", 0)}>${result ? `${validate_component(Scatter, "Scatter").$$render($$result, { data, options }, {}, {})}` : ``}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_worldStore();
  return $$rendered;
});
const AppPieChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let backgroundColor;
  let data;
  let $app, $$unsubscribe_app;
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  let { componentInput } = $$props;
  let { configuration } = $$props;
  let { initializing = void 0 } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  const { app, worldStore } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  const outputs = initOutput($worldStore, id, { result: void 0, loading: false });
  Chart.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale, ArcElement);
  let result = void 0;
  let theme = "theme1";
  let doughnut = false;
  const options = {
    responsive: true,
    animation: false,
    maintainAspectRatio: false
  };
  let css2 = initCss($app.css?.piechartcomponent, customCss);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.initializing === void 0 && $$bindings.initializing && initializing !== void 0) $$bindings.initializing(initializing);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    backgroundColor = {
      theme1: ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED", "#36A2EB"],
      // blue theme
      theme2: ["#4e73df", "#1cc88a", "#36b9cc", "#f6c23e", "#e74a3b"],
      // red theme
      theme3: ["#e74a3b", "#4e73df", "#1cc88a", "#36b9cc", "#f6c23e"]
    }[theme];
    data = {
      labels: result?.labels ?? [],
      datasets: [
        {
          data: result?.data ?? [],
          backgroundColor
        }
      ]
    };
    $$rendered = `${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.piechartcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InputValue, "InputValue").$$render(
      $$result,
      {
        key: "theme",
        id,
        input: configuration.theme,
        value: theme
      },
      {
        value: ($$value) => {
          theme = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(InputValue, "InputValue").$$render(
      $$result,
      {
        key: "doughnut",
        id,
        input: configuration.doughnutStyle,
        value: doughnut
      },
      {
        value: ($$value) => {
          doughnut = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(RunnableWrapper, "RunnableWrapper").$$render(
      $$result,
      {
        outputs,
        render,
        autoRefresh: true,
        componentInput,
        id,
        initializing,
        result
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        },
        result: ($$value) => {
          result = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div${add_attribute("class", twMerge("w-full h-full", css2?.container?.class, "wm-pie-chart"), 0)}${add_attribute("style", css2?.container?.style ?? "", 0)}>${result ? `${doughnut ? `${validate_component(Doughnut, "Doughnut").$$render($$result, { data, options }, {}, {})}` : `${validate_component(Pie, "Pie").$$render($$result, { data, options }, {}, {})}`}` : ``}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_worldStore();
  return $$rendered;
});
/**
 * svelte-table
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function create_fragment$1(ctx) {
  let t;
  return {
    c() {
      t = text(
        /*content*/
        ctx[0]
      );
    },
    l(nodes) {
      t = claim_text(
        nodes,
        /*content*/
        ctx[0]
      );
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*content*/
      1) set_data(
        t,
        /*content*/
        ctx2[0]
      );
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) detach(t);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { content } = $$props;
  $$self.$$set = ($$props2) => {
    if ("content" in $$props2) $$invalidate(0, content = $$props2.content);
  };
  return [content];
}
class Placeholder$1 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment$1, safe_not_equal, { content: 0 });
  }
}
const PlaceholderServer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${escape($$props.content)}`;
});
var Placeholder = typeof document === "undefined" ? PlaceholderServer : Placeholder$1;
function create_fragment(ctx, Comp, props) {
  let c;
  let current;
  c = new Comp({
    props,
    $$inline: true
  });
  return {
    c() {
      create_component(c.$$.fragment);
    },
    l(nodes) {
      claim_component(c.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(c, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current) return;
      transition_in(c.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(c.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(c, detaching);
    }
  };
}
function renderClient(Comp, props) {
  return class WrapperComp extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, null, (ctx) => create_fragment(ctx, Comp, props), safe_not_equal, {}, void 0);
    }
  };
}
function renderServer(Comp, props) {
  const WrapperComp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    return `${validate_component(Comp, "TableComponent").$$render($$result, props, {}, {})}`;
  });
  return WrapperComp;
}
const renderComponent = typeof window === "undefined" ? renderServer : renderClient;
function isSvelteServerComponent(component) {
  return typeof component === "object" && typeof component.$$render === "function" && typeof component.render === "function";
}
function isSvelteClientComponent(component) {
  var _component$name, _component$name2;
  let isHMR = "__SVELTE_HMR" in window;
  return component.prototype instanceof SvelteComponent || isHMR && ((_component$name = component.name) == null ? void 0 : _component$name.startsWith("Proxy<")) && ((_component$name2 = component.name) == null ? void 0 : _component$name2.endsWith(">"));
}
function isSvelteComponent(component) {
  if (typeof document === "undefined") {
    return isSvelteServerComponent(component);
  } else {
    return isSvelteClientComponent(component);
  }
}
function wrapInPlaceholder(content) {
  return renderComponent(Placeholder, {
    content
  });
}
function flexRender(component, props) {
  if (!component) return null;
  if (isSvelteComponent(component)) {
    return renderComponent(component, props);
  }
  if (typeof component === "function") {
    const result = component(props);
    if (result === null || result === void 0) return null;
    if (isSvelteComponent(result)) {
      return renderComponent(result, props);
    }
    return wrapInPlaceholder(result);
  }
  return wrapInPlaceholder(component);
}
function createSvelteTable(options) {
  let optionsStore;
  if ("subscribe" in options) {
    optionsStore = options;
  } else {
    optionsStore = readable(options);
  }
  let resolvedOptions = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...get_store_value(optionsStore)
  };
  let table = createTable(resolvedOptions);
  let stateStore = writable(
    /** @type {number} */
    table.initialState
  );
  let stateOptionsStore = derived([stateStore, optionsStore], (s) => s);
  const tableReadable = readable(table, function start(set) {
    const unsubscribe = stateOptionsStore.subscribe((_ref) => {
      let [state, options2] = _ref;
      table.setOptions((prev) => {
        return {
          ...prev,
          ...options2,
          state: {
            ...state,
            ...options2.state
          },
          // Similarly, we'll maintain both our internal state and any user-provided
          // state.
          onStateChange: (updater) => {
            if (updater instanceof Function) {
              stateStore.update(updater);
            } else {
              stateStore.set(updater);
            }
            resolvedOptions.onStateChange == null || resolvedOptions.onStateChange(updater);
          }
        };
      });
      set(table);
    });
    return function stop() {
      unsubscribe();
    };
  });
  return tableReadable;
}
const AppTableFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $table, $$unsubscribe_table;
  let { result } = $$props;
  let { manualPagination } = $$props;
  let { pageSize } = $$props;
  let { table } = $$props;
  $$unsubscribe_table = subscribe(table, (value) => $table = value);
  let { download = true } = $$props;
  let { loading = false } = $$props;
  let { class: c = "" } = $$props;
  let { style = "" } = $$props;
  let isPreviousLoading = false;
  let isNextLoading = false;
  if ($$props.result === void 0 && $$bindings.result && result !== void 0) $$bindings.result(result);
  if ($$props.manualPagination === void 0 && $$bindings.manualPagination && manualPagination !== void 0) $$bindings.manualPagination(manualPagination);
  if ($$props.pageSize === void 0 && $$bindings.pageSize && pageSize !== void 0) $$bindings.pageSize(pageSize);
  if ($$props.table === void 0 && $$bindings.table && table !== void 0) $$bindings.table(table);
  if ($$props.download === void 0 && $$bindings.download && download !== void 0) $$bindings.download(download);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
  if ($$props.class === void 0 && $$bindings.class && c !== void 0) $$bindings.class(c);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  {
    if (!loading) {
      isPreviousLoading = false;
      isNextLoading = false;
    }
  }
  $$unsubscribe_table();
  return `${result.length > pageSize || manualPagination || download ? `<div${add_attribute("class", twMerge("px-2 py-1 text-xs gap-2 items-center justify-between", c, "flex flex-row"), 0)}${add_attribute("style", style, 0)}><div class="flex items-center gap-1 flex-row">${download ? `${validate_component(Popover, "Popover").$$render($$result, {}, {}, {
    text: () => {
      return `Download as CSV`;
    },
    default: () => {
      return `${validate_component(Button, "Button").$$render(
        $$result,
        {
          size: "xs2",
          color: "light",
          startIcon: { icon: Download },
          wrapperClasses: "app-table-footer-btn",
          iconOnly: true
        },
        {},
        {}
      )}`;
    }
  })}` : ``} ${!$table.getIsAllColumnsVisible() ? `${validate_component(Popover, "Popover").$$render($$result, {}, {}, {
    text: () => {
      return `Display hidden columns`;
    },
    default: () => {
      return `${validate_component(Button, "Button").$$render(
        $$result,
        {
          size: "xs2",
          color: "light",
          startIcon: { icon: Columns },
          wrapperClasses: "app-table-footer-btn",
          iconOnly: true
        },
        {},
        {}
      )}`;
    }
  })}` : ``}</div> ${result.length > pageSize || manualPagination ? `<div class="flex items-center gap-2 flex-row">${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: "xs2",
      variant: "border",
      color: "light",
      disabled: !$table.getCanPreviousPage(),
      loading: isPreviousLoading && loading,
      startIcon: { icon: Chevron_left },
      wrapperClasses: "app-table-footer-btn"
    },
    {},
    {
      default: () => {
        return `Previous`;
      }
    }
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: "xs2",
      variant: "border",
      color: "light",
      disabled: !$table.getCanNextPage(),
      loading: isNextLoading && loading,
      endIcon: { icon: Chevron_right },
      wrapperClasses: "app-table-footer-btn"
    },
    {},
    {
      default: () => {
        return `Next`;
      }
    }
  )} <div>Page:
					${escape($table.getState().pagination.pageIndex + 1)} ${escape($table.getPageCount() > 0 ? ` of ${$table.getPageCount()}` : "")}</div></div>` : ``}</div>` : ``}`;
});
const AppCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isEditable, $$unsubscribe_isEditable;
  let { type = "text" } = $$props;
  let { value } = $$props;
  let { width } = $$props;
  let isEditable = writable(false);
  $$unsubscribe_isEditable = subscribe(isEditable, (value2) => $isEditable = value2);
  let tempValue = value;
  createEventDispatcher();
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  $$unsubscribe_isEditable();
  return `<td${add_attribute("class", twMerge("p-4 whitespace-pre-wrap truncate text-xs text-primary", $isEditable && "bg-gray-100"), 0)}${add_attribute("style", "width: " + width + "px", 0)}>${type === "badge" ? `${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(value)}`;
    }
  })}` : `${type === "link" ? `${isLinkObject(value) ? `<a${add_attribute("href", value.href, 0)} class="underline" target="_blank">${escape(value.label)}</a>` : `<a${add_attribute("href", value, 0)} class="underline" target="_blank">${escape(value)}</a>`}` : `${$isEditable ? `<input type="text"${add_attribute("value", tempValue, 0)} id="cell" class="!appearance-none !bg-transparent !border-none !p-0 !m-0 leading-normal !text-xs" style="outline: none; box-shadow: none; height: auto; resize: none;">` : ` <div>${escape(value)}</div>`}`}`}</td>`;
});
function searchInResult(result, searchValue) {
  if (searchValue === "") {
    return result;
  }
  return result.filter((row) => {
    return Object.values(row).some((value) => value?.toString()?.includes(searchValue));
  });
}
const AppTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $table, $$unsubscribe_table = noop, $$subscribe_table = () => ($$unsubscribe_table(), $$unsubscribe_table = subscribe(table, ($$value) => $table = $$value), table);
  let $selectedComponent, $$unsubscribe_selectedComponent;
  let $componentControl, $$unsubscribe_componentControl;
  let $app, $$unsubscribe_app;
  let $options, $$unsubscribe_options;
  let $worldStore, $$unsubscribe_worldStore;
  let $hoverStore, $$unsubscribe_hoverStore;
  let $mode, $$unsubscribe_mode;
  let $connectingInput, $$unsubscribe_connectingInput;
  let { id } = $$props;
  let { componentInput } = $$props;
  let { configuration } = $$props;
  let { actionButtons } = $$props;
  let { initializing = void 0 } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  const iterContext = getContext("ListWrapperContext");
  const listInputs = getContext("ListInputs");
  let result = void 0;
  const { app, worldStore, componentControl, selectedComponent, hoverStore, mode, connectingInput } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => $componentControl = value);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => $selectedComponent = value);
  $$unsubscribe_hoverStore = subscribe(hoverStore, (value) => $hoverStore = value);
  $$unsubscribe_mode = subscribe(mode, (value) => $mode = value);
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => $connectingInput = value);
  let searchValue = "";
  let outputs = initOutput($worldStore, id, {
    selectedRowIndex: 0,
    selectedRow: void 0,
    loading: false,
    result: [],
    inputs: {},
    search: "",
    page: 1
  });
  let inputs = {};
  let loading = false;
  function setSearch(srch) {
    $table.setPageIndex(0);
    outputs?.search?.set(srch);
  }
  const options = writable({ ...tableOptions, data: [], columns: [] });
  $$unsubscribe_options = subscribe(options, (value) => $options = value);
  let table = createSvelteTable(options);
  $$subscribe_table();
  let resolvedConfig = initConfig(components["tablecomponent"].initialData.configuration, configuration);
  let selectedRowIndex = -1;
  function toggleRow(row, force = false) {
    let data = { ...row.original };
    let index = data["__index"];
    delete data["__index"];
    let peak = outputs?.selectedRow.peak();
    if (selectedRowIndex !== index || peak == void 0 || sum(data) != sum(peak) || force) {
      selectedRowIndex = index;
      outputs?.selectedRow.set(data, force);
      outputs?.selectedRowIndex.set(index, force);
      if (iterContext && listInputs) {
        listInputs.set(id, {
          selectedRow: data,
          selectedRowIndex: index
        });
      }
    }
  }
  onDestroy(() => {
    listInputs?.remove(id);
  });
  let mounted = false;
  function renderCell(x, props) {
    try {
      return flexRender(x, props);
    } catch (e) {
      return void 0;
    }
  }
  let filteredResult = [];
  function setFilteredResult() {
    console.log("setting filtered result");
    const wIndex = Array.isArray(result) ? result.map((x, i) => ({ ...x, __index: i })) : [{ error: "input was not an array" }];
    if (resolvedConfig.search === "By Runnable" || resolvedConfig.search === "Disabled") {
      filteredResult = wIndex ?? [];
    } else {
      filteredResult = searchInResult(wIndex ?? [], searchValue);
    }
  }
  function rerender() {
    if (!Array.isArray(result)) {
      return;
    }
    const headers = Array.from(new Set(result.flatMap((row) => typeof row == "object" ? Object.keys(row ?? {}) : [])));
    set_store_value(
      options,
      $options = {
        ...tableOptions,
        ...resolvedConfig?.pagination?.selected != "manual" ? {
          initialState: {
            ...resolvedConfig.initialState,
            pagination: {
              pageSize: resolvedConfig?.pagination?.configuration?.auto?.pageSize ?? 20
            }
          }
        } : {},
        manualPagination: resolvedConfig?.pagination?.selected == "manual",
        pageCount: resolvedConfig?.pagination?.selected == "manual" ? resolvedConfig?.pagination?.configuration.manual.pageCount ?? -1 : void 0,
        data: filteredResult,
        columns: headers.map((header) => {
          return {
            accessorKey: header,
            cell: (info) => info.getValue()
          };
        })
      },
      $options
    );
    $$subscribe_table(table = createSvelteTable(options));
    if (result) {
      if (resolvedConfig?.selectFirstRowByDefault != false) {
        toggleRow({ original: filteredResult[0] }, true);
      }
    }
    if (outputs.page.peak()) {
      $table.setPageIndex(outputs?.page.peak());
    }
  }
  let css2 = initCss($app.css?.tablecomponent, customCss);
  set_store_value(
    componentControl,
    $componentControl[id] = {
      right: (skipActions) => {
        if (skipActions) {
          return false;
        }
        const hasActions = actionButtons.length >= 1;
        if (hasActions) {
          set_store_value(selectedComponent, $selectedComponent = [actionButtons[0].id], $selectedComponent);
          return true;
        }
        return false;
      },
      setSelectedIndex: (index) => {
        if (filteredResult) {
          toggleRow({ original: filteredResult[index] }, true);
        }
      }
    },
    $componentControl
  );
  function getHeaderGroups(table2) {
    try {
      return table2.getHeaderGroups();
    } catch (e) {
      sendUserToast("Couldn't render table header groups: " + e, true);
      console.error(e);
      return [];
    }
  }
  function getDisplayNameById(id2) {
    const component = resolvedConfig?.columnDefs?.find((columnDef) => columnDef.field === id2);
    return component?.headerName;
  }
  function safeVisibleCell(row) {
    try {
      return row.getVisibleCells();
    } catch (e) {
      sendUserToast("Couldn't render table header groups: " + e, true);
      console.error(e);
      return [];
    }
  }
  function updateTable(resolvedConfig2, searchValue2) {
    if (resolvedConfig2?.columnDefs) {
      $table.getAllLeafColumns().map((column) => {
        const columnConfig = resolvedConfig2.columnDefs.find(
          // @ts-ignore
          (columnDef) => columnDef.field === column.columnDef.accessorKey
        );
        if (columnConfig?.hideColumn === column.getIsVisible()) {
          column.toggleVisibility();
        }
      });
      $table.setColumnOrder(() => resolvedConfig2.columnDefs.map((columnDef) => columnDef.field));
    }
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.actionButtons === void 0 && $$bindings.actionButtons && actionButtons !== void 0) $$bindings.actionButtons(actionButtons);
  if ($$props.initializing === void 0 && $$bindings.initializing && initializing !== void 0) $$bindings.initializing(initializing);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      setSearch(searchValue);
    }
    resolvedConfig?.selectFirstRowByDefault != false && selectedRowIndex === -1 && Array.isArray(result) && result.length > 0 && // We need to wait until the component is mounted so the world is created
    mounted && outputs && toggleRow({ original: { ...result[0], __index: 0 } });
    (result || resolvedConfig.search || searchValue || resolvedConfig.pagination) && setFilteredResult();
    {
      outputs.page.set($table.getState().pagination.pageIndex);
    }
    filteredResult != void 0 && rerender();
    $table && updateTable(resolvedConfig);
    $$rendered = `${each(Object.keys(components["tablecomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.tablecomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(RunnableWrapper, "RunnableWrapper").$$render(
      $$result,
      {
        outputs,
        render,
        componentInput,
        id,
        initializing,
        result,
        loading
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        },
        result: ($$value) => {
          result = $$value;
          $$settled = false;
        },
        loading: ($$value) => {
          loading = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${Array.isArray(result) && result.every(isObject) ? `<div class="flex flex-col h-full">${resolvedConfig.search !== "Disabled" ? `<div class="flex flex-row w-full justify-between items-center h-12">${resolvedConfig.search !== "Disabled" ? `<div class="grow max-w-[300px]">${validate_component(DebouncedInput, "DebouncedInput").$$render(
            $$result,
            {
              placeholder: "Search...",
              parentClass: "h-full ",
              value: searchValue
            },
            {
              value: ($$value) => {
                searchValue = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div>` : `<div></div>`} ${componentInput?.hideRefreshButton && componentInput["autoRefresh"] ? `${validate_component(RefreshButton, "RefreshButton").$$render($$result, { id, loading }, {}, {})}` : ``}</div>` : `${componentInput?.hideRefreshButton && componentInput["autoRefresh"] ? `<div class="absolute right-2 top-2 z-50">${validate_component(RefreshButton, "RefreshButton").$$render($$result, { id, loading }, {}, {})}</div>` : ``}`} <div${add_attribute("class", twMerge("component-wrapper bg-surface", "divide-y h-full", css2?.container?.class ?? "", "wm-table-container", "flex flex-col"), 0)}${add_attribute("style", css2?.container?.style ?? "", 0)}><div class="overflow-x-auto flex-1 w-full"><table class="relative w-full border-b"><thead${add_attribute("class", twMerge("bg-surface-secondary text-left", css2?.tableHeader?.class ?? "", "wm-table-header", "sticky top-0 z-40"), 0)}${add_attribute("style", css2?.tableHeader?.style ?? "", 0)}>${each(getHeaderGroups($table), (headerGroup) => {
            return `<tr class="divide-x">${each(headerGroup.headers, (header) => {
              return `${header?.column?.columnDef?.header ? (() => {
                let context = header?.getContext();
                return ` ${context ? (() => {
                  let component = renderCell(header.column.columnDef.header, context), displayName = getDisplayNameById(header.id);
                  return `  <th class="!p-0"><div class="flex flex-row items-center gap-1 px-4 py-4 text-xs text-primary font-medium border-b">${displayName ? `${escape(displayName)}` : `${!header.isPlaceholder && component ? `${validate_component(component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : ``}`} ${header.column.getIsVisible() ? `<button class="w-6 flex justify-center items-center">${validate_component(Eye, "EyeIcon").$$render(
                    $$result,
                    {
                      size: "14",
                      class: "hover:text-gray-600 text-gray-400 rounded-full "
                    },
                    {},
                    {}
                  )} </button>` : ``}</div> </th>`;
                })() : ``}`;
              })() : ``}`;
            })} ${actionButtons.length > 0 ? `<th class="!p-0" data-svelte-h="svelte-ixat46"><div class="flex flex-row items-center px-4 py-4 text-xs text-primary font-medium border-b">Actions</div> </th>` : ``} </tr>`;
          })}</thead> <tbody${add_attribute("class", twMerge("divide-y bg-surface", css2?.tableBody?.class ?? "", "wm-table-body"), 0)}${add_attribute("style", css2?.tableBody?.style ?? "", 0)}>${each($table.getRowModel().rows, (row, index) => {
            let isLastRow = index === filteredResult.length - 1, rowIndex = row.original["__index"];
            return `  <tr${add_attribute(
              "class",
              twMerge(isLastRow ? "!border-b-0" : "", "divide-x w-full", index % 2 === 0 ? "bg-gray-50/50" : "", selectedRowIndex === rowIndex ? "bg-blue-100 hover:bg-blue-200 dark:bg-surface-selected dark:hover:bg-surface-hover divide-blue-200 hover:divide-blue-300 dark:divide-gray-600 dark:hover:divide-gray-700 wm-table-row-selected" : "hover:bg-blue-50 dark:hover:bg-surface-hover wm-table-row"),
              0
            )}>${each(safeVisibleCell(row), (cell, index2) => {
              return `${cell?.column?.columnDef?.cell ? (() => {
                let context = cell?.getContext();
                return ` ${context ? `${validate_component(AppCell, "AppCell").$$render(
                  $$result,
                  {
                    type: resolvedConfig.columnDefs?.find(
                      // TS types are wrong here
                      // @ts-ignore
                      (c) => c.field === cell.column.columnDef.accessorKey
                    )?.type ?? "text",
                    value: cell.getValue(),
                    width: cell.column.getSize()
                  },
                  {},
                  {}
                )}` : ``}`;
              })() : ``}`;
            })} ${actionButtons.length > 0 ? `<td class="p-2" style="${"width: " + escape((actionButtons ?? []).length * 130, true) + "px"}"><div class="center-center h-full w-full flex-wrap gap-2">${each(actionButtons, (actionButton, actionIndex) => {
              return ` ${validate_component(RowWrapper, "RowWrapper").$$render(
                $$result,
                {
                  value: row.original,
                  index: rowIndex,
                  onSet: (id2, value) => {
                    if (!inputs[id2]) {
                      inputs[id2] = { [rowIndex]: value };
                    } else {
                      inputs[id2] = { ...inputs[id2], [rowIndex]: value };
                    }
                    outputs?.inputs.set(inputs, true);
                  },
                  onRemove: (id2) => {
                    if (inputs?.[id2] == void 0) {
                      return;
                    }
                    delete inputs[id2][rowIndex];
                    inputs[id2] = { ...inputs[id2] };
                    if (Object.keys(inputs?.[id2] ?? {}).length == 0) {
                      delete inputs[id2];
                      inputs = { ...inputs };
                    }
                    outputs?.inputs.set(inputs, true);
                  }
                },
                {},
                {
                  default: () => {
                    return ` <div${add_attribute(
                      "class",
                      classNames(($selectedComponent?.includes(actionButton.id) || $hoverStore === actionButton.id) && $mode !== "preview" ? "outline outline-indigo-500 outline-1 outline-offset-1 relative" : "relative"),
                      0
                    )}>${$mode !== "preview" ? `  <span${add_attribute("title", `Id: ${actionButton.id}`, 0)}${add_attribute(
                      "class",
                      classNames("px-2 text-2xs font-bold w-fit absolute shadow  -top-2 -left-2 border z-50 rounded-sm", "bg-indigo-500/90 border-indigo-600 text-white", $selectedComponent?.includes(actionButton.id) || $hoverStore === actionButton.id ? "opacity-100" : "opacity-0"),
                      0
                    )}>${escape(actionButton.id)}</span> ${$connectingInput.opened ? `<div class="absolute z-50 left-8 -top-[10px]">${validate_component(Popup, "Popup").$$render(
                      $$result,
                      {
                        floatingConfig: {
                          strategy: "absolute",
                          placement: "bottom-start"
                        }
                      },
                      {},
                      {
                        button: () => {
                          return `<button class="bg-red-500/70 border border-red-600 px-1 py-0.5" title="Outputs" aria-label="Open output">${validate_component(Plug_2, "Plug2").$$render($$result, { size: 12 }, {}, {})}</button> `;
                        },
                        default: () => {
                          return `${validate_component(ComponentOutputViewer, "ComponentOutputViewer").$$render(
                            $$result,
                            {
                              suffix: "table",
                              componentId: actionButton.id
                            },
                            {},
                            {}
                          )} `;
                        }
                      }
                    )} </div>` : ``}` : ``} ${rowIndex == 0 ? (() => {
                      let controls = {
                        left: () => {
                          if (actionIndex === 0) {
                            $selectedComponent = [id];
                            return true;
                          } else if (actionIndex > 0) {
                            $selectedComponent = [actionButtons[actionIndex - 1].id];
                            return true;
                          }
                          return false;
                        },
                        right: () => {
                          if (actionIndex === actionButtons.length - 1) {
                            return id;
                          } else if (actionIndex < actionButtons.length - 1) {
                            $selectedComponent = [actionButtons[actionIndex + 1].id];
                            return true;
                          }
                          return false;
                        }
                      };
                      return ` ${actionButton.type == "buttoncomponent" ? `${validate_component(AppButton, "AppButton").$$render(
                        $$result,
                        {
                          noInitialize: true,
                          extraKey: "idx" + rowIndex,
                          render,
                          noWFull: true,
                          preclickAction: async () => {
                            toggleRow(row);
                          },
                          id: actionButton.id,
                          customCss: actionButton.customCss,
                          configuration: actionButton.configuration,
                          recomputeIds: actionButton.recomputeIds,
                          extraQueryParams: { row: row.original },
                          componentInput: actionButton.componentInput,
                          controls
                        },
                        {},
                        {}
                      )}` : `${actionButton.type == "checkboxcomponent" ? `${validate_component(AppCheckbox, "AppCheckbox").$$render(
                        $$result,
                        {
                          noInitialize: true,
                          extraKey: "idx" + rowIndex,
                          render,
                          id: actionButton.id,
                          customCss: actionButton.customCss,
                          configuration: actionButton.configuration,
                          recomputeIds: actionButton.recomputeIds,
                          onToggle: actionButton.onToggle,
                          preclickAction: async () => {
                            toggleRow(row);
                          },
                          controls
                        },
                        {},
                        {}
                      )}` : `${actionButton.type == "selectcomponent" ? `<div class="w-40">${validate_component(AppSelect, "AppSelect").$$render(
                        $$result,
                        {
                          noDefault: true,
                          noInitialize: true,
                          extraKey: "idx" + rowIndex,
                          render,
                          id: actionButton.id,
                          customCss: actionButton.customCss,
                          configuration: actionButton.configuration,
                          recomputeIds: actionButton.recomputeIds,
                          onSelect: actionButton.onSelect,
                          preclickAction: async () => {
                            toggleRow(row);
                          },
                          controls
                        },
                        {},
                        {}
                      )} </div>` : ``}`}`}`;
                    })() : `${actionButton.type == "buttoncomponent" ? `${validate_component(AppButton, "AppButton").$$render(
                      $$result,
                      {
                        noInitialize: true,
                        extraKey: "idx" + rowIndex,
                        render,
                        noWFull: true,
                        id: actionButton.id,
                        customCss: actionButton.customCss,
                        configuration: actionButton.configuration,
                        recomputeIds: actionButton.recomputeIds,
                        preclickAction: async () => {
                          toggleRow(row);
                        },
                        extraQueryParams: { row: row.original },
                        componentInput: actionButton.componentInput
                      },
                      {},
                      {}
                    )}` : `${actionButton.type == "checkboxcomponent" ? `${validate_component(AppCheckbox, "AppCheckbox").$$render(
                      $$result,
                      {
                        noInitialize: true,
                        extraKey: "idx" + rowIndex,
                        render,
                        id: actionButton.id,
                        customCss: actionButton.customCss,
                        configuration: actionButton.configuration,
                        recomputeIds: actionButton.recomputeIds,
                        onToggle: actionButton.onToggle,
                        preclickAction: async () => {
                          toggleRow(row);
                        }
                      },
                      {},
                      {}
                    )}` : `${actionButton.type == "selectcomponent" ? `<div class="w-40">${validate_component(AppSelect, "AppSelect").$$render(
                      $$result,
                      {
                        noDefault: true,
                        noInitialize: true,
                        extraKey: "idx" + rowIndex,
                        render,
                        id: actionButton.id,
                        customCss: actionButton.customCss,
                        configuration: actionButton.configuration,
                        recomputeIds: actionButton.recomputeIds,
                        onSelect: actionButton.onSelect,
                        preclickAction: async () => {
                          toggleRow(row);
                        }
                      },
                      {},
                      {}
                    )} </div>` : ``}`}`}`}</div> `;
                  }
                }
              )}`;
            })}</div> </td>` : ``} </tr>`;
          })}</tbody></table></div> ${validate_component(AppTableFooter, "AppTableFooter").$$render(
            $$result,
            {
              download: resolvedConfig?.downloadButton,
              pageSize: resolvedConfig?.pagination?.configuration?.auto?.pageSize ?? 20,
              manualPagination: resolvedConfig?.pagination?.selected == "manual",
              result: filteredResult,
              table,
              class: twMerge(css2?.tableFooter?.class, "wm-table-footer"),
              style: css2?.tableFooter?.style,
              loading
            },
            {},
            {}
          )}</div></div>` : `${result != void 0 ? `<div class="flex flex-col h-full w-full overflow-auto">${validate_component(Alert, "Alert").$$render(
            $$result,
            {
              title: "Parsing issues",
              type: "error",
              size: "xs",
              class: "h-full w-full "
            },
            {},
            {
              default: () => {
                return `The result should be an array of objects. Received:
				<pre class="w-full bg-surface p-2 rounded-md whitespace-pre-wrap mt-2">${escape(JSON.stringify(result, null, 4))}
				</pre>`;
              }
            }
          )}</div>` : ``}`}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_table();
  $$unsubscribe_selectedComponent();
  $$unsubscribe_componentControl();
  $$unsubscribe_app();
  $$unsubscribe_options();
  $$unsubscribe_worldStore();
  $$unsubscribe_hoverStore();
  $$unsubscribe_mode();
  $$unsubscribe_connectingInput();
  return $$rendered;
});
let rows = 1;
const AppText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let initialValue;
  let editableValue;
  let $componentControl, $$unsubscribe_componentControl;
  let $worldStore, $$unsubscribe_worldStore;
  let $app, $$unsubscribe_app;
  let $mode, $$unsubscribe_mode;
  let { id } = $$props;
  let { componentInput } = $$props;
  let { horizontalAlignment = "left" } = $$props;
  let { verticalAlignment = void 0 } = $$props;
  let { configuration } = $$props;
  let { initializing = void 0 } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  let { editorMode = false } = $$props;
  let resolvedConfig = initConfig(components["textcomponent"].initialData.configuration, configuration);
  const { app, worldStore, mode, componentControl } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_mode = subscribe(mode, (value) => $mode = value);
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => $componentControl = value);
  let css2 = initCss($app.css?.textcomponent, customCss);
  let result = void 0;
  if (componentInput?.type == "template" || componentInput?.type == "templatev2" && !isCodeInjection(componentInput.eval)) {
    result = componentInput.eval;
    initializing = false;
  }
  set_store_value(
    componentControl,
    $componentControl[id] = {
      ...$componentControl[id],
      setValue(value) {
        result = value;
      }
    },
    $componentControl
  );
  const outputs = initOutput($worldStore, id, { result, loading: initializing });
  function getComponent() {
    switch (resolvedConfig.style) {
      case "Title":
        return "h1";
      case "Subtitle":
        return "h3";
      case "Body":
        return "p";
      case "Caption":
        return "p";
      case "Label":
        return "label";
      default:
        return "p";
    }
  }
  function getClasses() {
    switch (resolvedConfig.style) {
      case "Caption":
        return "text-sm italic text-tertiary";
      case "Label":
        return "font-semibold text-sm";
      default:
        return "";
    }
  }
  function getClassesByType() {
    switch (resolvedConfig.style) {
      case "Title":
        return "h1-textarea";
      case "Subtitle":
        return "h3-textarea";
      case "Body":
        return "p-textarea";
      case "Caption":
        return "p-textarea";
      case "Label":
        return "label";
      default:
        return "p-textarea";
    }
  }
  let component = "p";
  let classes = "";
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.horizontalAlignment === void 0 && $$bindings.horizontalAlignment && horizontalAlignment !== void 0) $$bindings.horizontalAlignment(horizontalAlignment);
  if ($$props.verticalAlignment === void 0 && $$bindings.verticalAlignment && verticalAlignment !== void 0) $$bindings.verticalAlignment(verticalAlignment);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.initializing === void 0 && $$bindings.initializing && initializing !== void 0) $$bindings.initializing(initializing);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.editorMode === void 0 && $$bindings.editorMode && editorMode !== void 0) $$bindings.editorMode(editorMode);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    resolvedConfig.style && (component = getComponent());
    resolvedConfig.style && (classes = getClasses());
    initialValue = componentInput?.type == "template" || componentInput?.type == "templatev2" ? componentInput.eval : "";
    editableValue = initialValue ?? "";
    $$rendered = `${each(Object.keys(components["textcomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.textcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(RunnableWrapper, "RunnableWrapper").$$render(
      $$result,
      {
        outputs,
        render,
        componentInput,
        id,
        initializing,
        result
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        },
        result: ($$value) => {
          result = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return ` <div${add_attribute("class", twMerge("h-full w-full overflow-hidden", css2.container?.class, "wm-text-container"), 0)}${add_attribute("style", css2?.container?.style, 0)}>${$mode == "dnd" && editorMode && (componentInput?.type == "template" || componentInput?.type == "templatev2") ? `${validate_component(AlignWrapper, "AlignWrapper").$$render($$result, { verticalAlignment }, {}, {
            default: () => {
              return `<textarea${add_attribute(
                "class",
                twMerge("whitespace-pre-wrap !outline-none !border-0 !bg-transparent !resize-none !overflow-hidden !ring-0 !p-0", css2?.text?.class, "wm-text", classes, getClasses(), getClassesByType(), horizontalAlignment === "center" ? "text-center" : horizontalAlignment === "right" ? "text-right" : "text-left"),
                0
              )}${add_attribute("style", css2?.text?.style, 0)}${add_attribute("id", `text-${id}`, 0)}${add_attribute("rows", rows, 0)}>${escape(editableValue, false)}</textarea>`;
            }
          })}` : `${validate_component(AlignWrapper, "AlignWrapper").$$render($$result, { verticalAlignment }, {}, {
            default: () => {
              return `${!result || result === "" ? `<div class="text-ternary bg-surface-primary flex justify-center items-center h-full w-full">${resolvedConfig?.disableNoText === false ? `No text` : ``}</div>` : ` <div class="${"flex flex-wrap gap-2 pb-0.5 w-full " + escape(
                $mode === "dnd" && (componentInput?.type == "template" || componentInput?.type == "templatev2") ? "cursor-text" : "",
                true
              )}">${((tag) => {
                return tag ? `<${component}${add_attribute(
                  "class",
                  twMerge("whitespace-pre-wrap w-full", css2?.text?.class, classes, horizontalAlignment === "center" ? "text-center" : horizontalAlignment === "right" ? "text-right" : "text-left"),
                  0
                )}${add_attribute("style", css2?.text?.style, 0)}>${is_void(tag) ? "" : `${escape(String(result))} ${resolvedConfig.tooltip && resolvedConfig.tooltip != "" ? `${validate_component(Tooltip$1, "Tooltip").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(resolvedConfig.tooltip)}`;
                  }
                })}` : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
              })(component)} ${resolvedConfig.copyButton && result ? `<div class="flex">${validate_component(Button, "Button").$$render(
                $$result,
                {
                  title: "Copy to clipboard",
                  variant: "border",
                  size: "xs",
                  color: "light",
                  btnClasses: "!p-1"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Clipboard, "Clipboard").$$render($$result, { size: 14, strokeWidth: 2 }, {}, {})}`;
                  }
                }
              )}</div>` : ``}</div>`}`;
            }
          })}`}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_componentControl();
  $$unsubscribe_worldStore();
  $$unsubscribe_app();
  $$unsubscribe_mode();
  return $$rendered;
});
const AppTextInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classInput;
  let $app, $$unsubscribe_app;
  let $componentControl, $$unsubscribe_componentControl;
  let $worldStore, $$unsubscribe_worldStore;
  let $$unsubscribe_connectingInput;
  let { id } = $$props;
  let { configuration } = $$props;
  let { inputType = "text" } = $$props;
  let { verticalAlignment = void 0 } = $$props;
  let { customCss = void 0 } = $$props;
  let { appCssKey = "textinputcomponent" } = $$props;
  let { render } = $$props;
  const { app, worldStore, selectedComponent, connectingInput, componentControl } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value2) => $app = value2);
  $$unsubscribe_worldStore = subscribe(worldStore, (value2) => $worldStore = value2);
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value2) => value2);
  $$unsubscribe_componentControl = subscribe(componentControl, (value2) => $componentControl = value2);
  let resolvedConfig = initConfig(components["textinputcomponent"].initialData.configuration, configuration);
  const iterContext = getContext("ListWrapperContext");
  const listInputs = getContext("ListInputs");
  let value = resolvedConfig.defaultValue;
  let outputs = initOutput($worldStore, id, { result: "" });
  onDestroy(() => {
    listInputs?.remove(id);
  });
  set_store_value(
    componentControl,
    $componentControl[id] = {
      setValue(nvalue) {
        value = nvalue;
      }
    },
    $componentControl
  );
  function handleDefault(defaultValue) {
    value = defaultValue;
  }
  let css2 = initCss($app.css?.[appCssKey], customCss);
  let beforeIconComponent;
  let afterIconComponent;
  async function handleBeforeIcon() {
    if (resolvedConfig.beforeIcon) {
      beforeIconComponent = await loadIcon(resolvedConfig.beforeIcon, beforeIconComponent, 14, void 0, void 0);
    }
  }
  async function handleAfterIcon() {
    if (resolvedConfig.afterIcon) {
      afterIconComponent = await loadIcon(resolvedConfig.afterIcon, afterIconComponent, 14, void 0, void 0);
    }
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.inputType === void 0 && $$bindings.inputType && inputType !== void 0) $$bindings.inputType(inputType);
  if ($$props.verticalAlignment === void 0 && $$bindings.verticalAlignment && verticalAlignment !== void 0) $$bindings.verticalAlignment(verticalAlignment);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.appCssKey === void 0 && $$bindings.appCssKey && appCssKey !== void 0) $$bindings.appCssKey(appCssKey);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      handleDefault(resolvedConfig.defaultValue);
    }
    {
      {
        let val = value ?? "";
        outputs?.result.set(val);
        if (iterContext && listInputs) {
          listInputs.set(id, val);
        }
      }
    }
    classInput = twMerge("windmillapp w-full py-1.5 px-2 text-sm", "app-editor-input", css2?.input?.class ?? "", "wm-input", "wm-text-input");
    resolvedConfig.beforeIcon && beforeIconComponent && handleBeforeIcon();
    resolvedConfig.afterIcon && afterIconComponent && handleAfterIcon();
    $$rendered = `${each(Object.keys(components["textinputcomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.textinputcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${render ? `${inputType === "textarea" ? `<textarea${add_attribute("class", twMerge(classInput, beforeIconComponent && "pl-8", afterIconComponent && "pr-8", "h-full"), 0)} style="${"resize:none; " + escape(css2?.input?.style ?? "", true)}"${add_attribute("placeholder", resolvedConfig.placeholder, 0)} ${resolvedConfig.disabled ? "disabled" : ""}>${escape(value || "")}</textarea>` : `${validate_component(AlignWrapper, "AlignWrapper").$$render($$result, { render, verticalAlignment }, {}, {
      default: () => {
        return `<div class="relative w-full"><div class="absolute top-1/2 -translate-y-1/2 left-2">${resolvedConfig.beforeIcon ? `<div class="min-w-4"${add_attribute("this", beforeIconComponent, 0)}></div>` : ``}</div> ${inputType === "password" ? `<input${add_attribute("class", twMerge(classInput, resolvedConfig.beforeIcon ? "!pl-8" : "", resolvedConfig.afterIcon ? "!pr-8" : ""), 0)}${add_attribute("style", css2?.input?.style ?? "", 0)} type="password"${add_attribute("placeholder", resolvedConfig.placeholder, 0)} ${resolvedConfig.disabled ? "disabled" : ""}${add_attribute("value", value, 0)}>` : `${inputType === "text" ? `<input${add_attribute("class", twMerge(classInput, resolvedConfig.beforeIcon ? "!pl-8" : "", resolvedConfig.afterIcon ? "!pr-8" : ""), 0)}${add_attribute("style", css2?.input?.style ?? "", 0)} type="text"${add_attribute("placeholder", resolvedConfig.placeholder, 0)} ${resolvedConfig.disabled ? "disabled" : ""}${add_attribute("value", value, 0)}>` : `${inputType === "email" ? `<input${add_attribute("class", twMerge(classInput, resolvedConfig.beforeIcon ? "!pl-8" : "", resolvedConfig.afterIcon ? "!pr-8" : ""), 0)}${add_attribute("style", css2?.input?.style ?? "", 0)} type="email"${add_attribute("placeholder", resolvedConfig.placeholder, 0)} ${resolvedConfig.disabled ? "disabled" : ""}${add_attribute("value", value, 0)}>` : ``}`}`} <div class="absolute top-1/2 -translate-y-1/2 right-2">${resolvedConfig.afterIcon ? `<div class="min-w-4"${add_attribute("this", afterIconComponent, 0)}></div>` : ``}</div></div>`;
      }
    })}`}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_componentControl();
  $$unsubscribe_worldStore();
  $$unsubscribe_connectingInput();
  return $$rendered;
});
const AppDateInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $worldStore, $$unsubscribe_worldStore;
  let $componentControl, $$unsubscribe_componentControl;
  let $$unsubscribe_selectedComponent;
  let { id } = $$props;
  let { configuration } = $$props;
  let { inputType } = $$props;
  let { verticalAlignment = void 0 } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  const { app, worldStore, selectedComponent, componentControl } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value2) => $app = value2);
  $$unsubscribe_worldStore = subscribe(worldStore, (value2) => $worldStore = value2);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value2) => value2);
  $$unsubscribe_componentControl = subscribe(componentControl, (value2) => $componentControl = value2);
  let resolvedConfig = initConfig(components["dateinputcomponent"].initialData.configuration, configuration);
  let value = void 0;
  set_store_value(
    componentControl,
    $componentControl[id] = {
      setValue(nvalue) {
        value = nvalue;
      }
    },
    $componentControl
  );
  let outputs = initOutput($worldStore, id, { result: void 0 });
  function formatDate(dateString, formatString = "dd.MM.yyyy") {
    if (formatString === "") {
      formatString = "dd.MM.yyyy";
    }
    try {
      const isoDate = parseISO(dateString);
      return format(isoDate, formatString);
    } catch (error) {
      return "Error formatting date:" + error.message;
    }
  }
  function handleDefault(defaultValue) {
    value = defaultValue;
  }
  let css2 = initCss($app.css?.dateinputcomponent, customCss);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.inputType === void 0 && $$bindings.inputType && inputType !== void 0) $$bindings.inputType(inputType);
  if ($$props.verticalAlignment === void 0 && $$bindings.verticalAlignment && verticalAlignment !== void 0) $$bindings.verticalAlignment(verticalAlignment);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    !value && handleDefault(resolvedConfig.defaultValue);
    {
      {
        if (value) {
          outputs?.result.set(formatDate(value, resolvedConfig.outputFormat));
        } else {
          outputs?.result.set(void 0);
        }
      }
    }
    $$rendered = `${each(Object.keys(components["dateinputcomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.dateinputcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${validate_component(AlignWrapper, "AlignWrapper").$$render($$result, { render, verticalAlignment }, {}, {
      default: () => {
        return `${inputType === "date" ? `<input type="date"${add_attribute("min", resolvedConfig.minDate, 0)}${add_attribute("max", resolvedConfig.maxDate, 0)} placeholder="Type..."${add_attribute("class", twMerge("windmillapp w-full py-1.5 text-sm px-1 app-editor-input", css2?.input?.class, "wm-date-input"), 0)}${add_attribute("style", css2?.input?.style ?? "", 0)}${add_attribute("value", value, 0)}>` : ``}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_worldStore();
  $$unsubscribe_componentControl();
  $$unsubscribe_selectedComponent();
  return $$rendered;
});
const AppBarChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let backgroundColor;
  let data;
  let $app, $$unsubscribe_app;
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  let { componentInput } = $$props;
  let { configuration } = $$props;
  let { initializing = void 0 } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  const { app, worldStore } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  let resolvedConfig = initConfig(components["barchartcomponent"].initialData.configuration, configuration);
  let outputs = initOutput($worldStore, id, { result: void 0, loading: false });
  Chart.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale, BarElement);
  let result = void 0;
  const lineOptions = {
    responsive: true,
    animation: false,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } }
  };
  const barOptions = {
    responsive: true,
    animation: false,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } }
  };
  let css2 = initCss($app.css?.barchartcomponent, customCss);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.componentInput === void 0 && $$bindings.componentInput && componentInput !== void 0) $$bindings.componentInput(componentInput);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.initializing === void 0 && $$bindings.initializing && initializing !== void 0) $$bindings.initializing(initializing);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    backgroundColor = {
      theme1: ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED", "#36A2EB"],
      // blue theme
      theme2: ["#4e73df", "#1cc88a", "#36b9cc", "#f6c23e", "#e74a3b"],
      // red theme
      theme3: ["#e74a3b", "#4e73df", "#1cc88a", "#36b9cc", "#f6c23e"]
    }[resolvedConfig.theme ?? "theme1"];
    data = {
      labels: result?.labels ?? [],
      datasets: [
        {
          data: result?.data ?? [],
          backgroundColor
        }
      ],
      options: {
        scales: {
          y: {
            ticks: {
              // Include a dollar sign in the ticks
              callback(value, index, ticks) {
                return "$" + value;
              }
            }
          }
        }
      }
    };
    $$rendered = `${each(Object.keys(components["barchartcomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.barchartcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(RunnableWrapper, "RunnableWrapper").$$render(
      $$result,
      {
        outputs,
        render,
        autoRefresh: true,
        componentInput,
        id,
        initializing,
        result
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        },
        result: ($$value) => {
          result = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div${add_attribute("class", twMerge("w-full h-full", css2?.container?.class, "wm-bar-chart"), 0)}${add_attribute("style", css2?.container?.style ?? "", 0)}>${result ? `${resolvedConfig.line ? `${validate_component(Line, "Line").$$render($$result, { data, options: lineOptions }, {}, {})}` : `${validate_component(Bar, "Bar").$$render($$result, { data, options: barOptions }, {}, {})}`}` : ``}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_worldStore();
  return $$rendered;
});
const AppDivider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $worldStore, $$unsubscribe_worldStore;
  let $app, $$unsubscribe_app;
  let { id } = $$props;
  let { configuration } = $$props;
  let { horizontalAlignment = void 0 } = $$props;
  let { verticalAlignment = void 0 } = $$props;
  let { customCss = void 0 } = $$props;
  let { position } = $$props;
  let { render } = $$props;
  const { app, worldStore } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  let size = 2;
  let color = "#00000060";
  let css2 = initCss($app.css?.[position + "dividercomponent"], customCss);
  initOutput($worldStore, id, {});
  function getSize() {
    if (position === "horizontal") {
      return hasTailwindClass(css2?.divider?.class, TailwindClassPatterns.height) ? "" : `height: ${size}px;`;
    } else if (position === "vertical") {
      return hasTailwindClass(css2?.divider?.class, TailwindClassPatterns.width) ? "" : `width: ${size}px;`;
    }
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.horizontalAlignment === void 0 && $$bindings.horizontalAlignment && horizontalAlignment !== void 0) $$bindings.horizontalAlignment(horizontalAlignment);
  if ($$props.verticalAlignment === void 0 && $$bindings.verticalAlignment && verticalAlignment !== void 0) $$bindings.verticalAlignment(verticalAlignment);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0) $$bindings.position(position);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(InputValue, "InputValue").$$render(
      $$result,
      {
        key: "size",
        id,
        input: configuration.size,
        value: size
      },
      {
        value: ($$value) => {
          size = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(InputValue, "InputValue").$$render(
      $$result,
      {
        key: "color",
        id,
        input: configuration.color,
        value: color
      },
      {
        value: ($$value) => {
          color = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.[position + "dividercomponent"],
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(AlignWrapper, "AlignWrapper").$$render(
      $$result,
      {
        horizontalAlignment,
        verticalAlignment,
        class: twMerge(
          css2?.container?.class,
          position === "horizontal" ? "wm-horizontal-divider-container" : "wm-vertical-divider-container",
          "h-full"
        ),
        style: css2?.container?.style,
        render
      },
      {},
      {
        default: () => {
          return `<div${add_attribute(
            "class",
            twMerge(`rounded-full ${position === "horizontal" ? "w-full" : "h-full"}`, css2?.divider?.class, position === "horizontal" ? "wm-horizontal-divider" : "wm-vertical-divider"),
            0
          )} style="${"" + escape(getSize(), true) + " " + escape(css2?.divider?.style ?? "", true) + " " + escape(
            hasTailwindClass(css2?.divider?.class, TailwindClassPatterns.bg) ? "" : `background-color: ${color};`,
            true
          )}"></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_worldStore();
  $$unsubscribe_app();
  return $$rendered;
});
const css$1$1 = {
  code: "#range-slider.rangeSlider{font-size:12px;text-transform:uppercase}.dark #range-slider.rangeSlider{background-color:#3b4252}#range-slider.rangeSlider .rangeHandle{height:2em;width:2em}#range-slider.rangeSlider .rangeFloat{background:transparent;opacity:1;top:50%;transform:translate(-50%,-50%)}.dark #range-slider.rangeSlider>.rangePips>.pip{color:#eee}",
  map: null
};
const AppRangeInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $componentControl, $$unsubscribe_componentControl;
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  let { configuration } = $$props;
  let { verticalAlignment = void 0 } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  const { app, worldStore, componentControl } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => $componentControl = value);
  const iterContext = getContext("ListWrapperContext");
  const listInputs = getContext("ListInputs");
  let resolvedConfig = initConfig(components["rangecomponent"].initialData.configuration, configuration);
  let values = [0, 1];
  function handleDefault() {
    values = [resolvedConfig?.defaultLow ?? 0, resolvedConfig?.defaultHigh ?? 1];
  }
  let slider;
  let outputs = initOutput($worldStore, id, { result: null });
  set_store_value(
    componentControl,
    $componentControl[id] = {
      setValue(nvalue) {
        values = nvalue;
      }
    },
    $componentControl
  );
  onDestroy(() => {
    listInputs?.remove(id);
  });
  let css2 = initCss($app.css?.rangecomponent, customCss);
  let lastStyle = void 0;
  const format2 = (v, i, p) => {
    return `${v}`;
  };
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.verticalAlignment === void 0 && $$bindings.verticalAlignment && verticalAlignment !== void 0) $$bindings.verticalAlignment(verticalAlignment);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  $$result.css.add(css$1$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    (resolvedConfig.defaultLow != void 0 || resolvedConfig.defaultHigh != void 0) && handleDefault();
    {
      {
        outputs?.result.set(values);
        if (iterContext && listInputs) {
          listInputs.set(id, values);
        }
      }
    }
    {
      if (css2 && slider && lastStyle !== css2?.handles?.style) {
        const handles = slider.querySelectorAll(".rangeNub");
        if (handles) {
          lastStyle = css2?.handles?.style;
          handles.forEach((handle) => handle.style.cssText = css2?.handles?.style ?? "");
        }
      }
    }
    $$rendered = `${each(Object.keys(components["rangecomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.rangecomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${validate_component(AlignWrapper, "AlignWrapper").$$render($$result, { render, verticalAlignment }, {}, {
      default: () => {
        return `<div class="flex flex-col w-full"><div class="flex items-center w-full gap-1"><div${add_attribute("class", twMerge("grow", "wm-slider-bar"), 0)} style="${"--range-handle-focus: " + escape("#7e9abd", true) + "; --range-handle: " + escape("#7e9abd", true) + "; " + escape(css2?.bar?.style ?? "", true)}">${validate_component(RangeSlider, "RangeSlider").$$render(
          $$result,
          {
            id: "range-slider",
            springValues: { stiffness: 1, damping: 1 },
            min: resolvedConfig.min == void 0 ? 0 : +resolvedConfig.min,
            max: resolvedConfig.max == void 0 ? 1 : +resolvedConfig.max,
            range: true,
            disabled: resolvedConfig.disabled,
            pips: true,
            float: true,
            first: "label",
            last: "label",
            step: resolvedConfig.step ?? 1,
            pipstep: (resolvedConfig.axisStep ?? 1) / (resolvedConfig.step ?? 1),
            formatter: format2,
            slider,
            values
          },
          {
            slider: ($$value) => {
              slider = $$value;
              $$settled = false;
            },
            values: ($$value) => {
              values = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div></div></div>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_componentControl();
  $$unsubscribe_worldStore();
  return $$rendered;
});
const AppTabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $componentControl, $$unsubscribe_componentControl;
  let $focusedGrid, $$unsubscribe_focusedGrid;
  let $runnableComponents, $$unsubscribe_runnableComponents;
  let $worldStore, $$unsubscribe_worldStore;
  let $mode, $$unsubscribe_mode;
  let $$unsubscribe_connectingInput;
  let $$unsubscribe_selectedComponent;
  let { id } = $$props;
  let { configuration } = $$props;
  let { componentContainerHeight } = $$props;
  let { tabs } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  let { disabledTabs } = $$props;
  let { onTabChange = void 0 } = $$props;
  let resolvedConfig = initConfig(components["tabscomponent"].initialData.configuration, configuration);
  const { app, worldStore, focusedGrid, selectedComponent, mode, componentControl, connectingInput, runnableComponents } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_focusedGrid = subscribe(focusedGrid, (value) => $focusedGrid = value);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => value);
  $$unsubscribe_mode = subscribe(mode, (value) => $mode = value);
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => $componentControl = value);
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => value);
  $$unsubscribe_runnableComponents = subscribe(runnableComponents, (value) => $runnableComponents = value);
  let selected2 = tabs[0];
  let tabHeight = 0;
  let outputs = initOutput($worldStore, id, { selectedTabIndex: 0 });
  function handleTabSelection() {
    selectedIndex = tabs?.indexOf(selected2);
    outputs?.selectedTabIndex.set(selectedIndex);
    onTabChange?.forEach((id2) => $runnableComponents?.[id2]?.cb?.forEach((cb) => cb?.()));
    if ($focusedGrid?.parentComponentId != id || $focusedGrid?.subGridIndex != selectedIndex) {
      set_store_value(
        focusedGrid,
        $focusedGrid = {
          parentComponentId: id,
          subGridIndex: selectedIndex
        },
        $focusedGrid
      );
    }
  }
  set_store_value(
    componentControl,
    $componentControl[id] = {
      left: () => {
        const index = tabs.indexOf(selected2);
        if (index > 0) {
          selected2 = tabs[index - 1];
          return true;
        }
        return false;
      },
      right: () => {
        const index = tabs.indexOf(selected2);
        if (index < tabs.length - 1) {
          selected2 = tabs[index + 1];
          return true;
        }
        return false;
      },
      setTab: (tab) => {
        selected2 = tabs[tab];
        handleTabSelection();
      }
    },
    $componentControl
  );
  let selectedIndex = tabs?.indexOf(selected2) ?? -1;
  let css2 = initCss($app.css?.tabscomponent, customCss);
  let resolvedDisabledTabs = [];
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.componentContainerHeight === void 0 && $$bindings.componentContainerHeight && componentContainerHeight !== void 0) $$bindings.componentContainerHeight(componentContainerHeight);
  if ($$props.tabs === void 0 && $$bindings.tabs && tabs !== void 0) $$bindings.tabs(tabs);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.disabledTabs === void 0 && $$bindings.disabledTabs && disabledTabs !== void 0) $$bindings.disabledTabs(disabledTabs);
  if ($$props.onTabChange === void 0 && $$bindings.onTabChange && onTabChange !== void 0) $$bindings.onTabChange(onTabChange);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    selected2 != void 0 && handleTabSelection();
    $$rendered = `${validate_component(InputValue, "InputValue").$$render(
      $$result,
      {
        key: "kind",
        id,
        input: configuration.tabsKind,
        value: resolvedConfig.tabsKind
      },
      {
        value: ($$value) => {
          resolvedConfig.tabsKind = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.tabscomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${each(disabledTabs ?? [], (disableTab, index) => {
      return `${validate_component(InputValue, "InputValue").$$render(
        $$result,
        {
          key: "tabDisabled " + index,
          id,
          input: disableTab,
          value: resolvedDisabledTabs[index]
        },
        {
          value: ($$value) => {
            resolvedDisabledTabs[index] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} <div${add_attribute(
      "class",
      resolvedConfig.tabsKind == "sidebar" ? "flex gap-4 w-full h-full" : "w-full",
      0
    )}>${!resolvedConfig.tabsKind || resolvedConfig.tabsKind == "tabs" || resolvedConfig.tabsKind == "invisibleOnView" && $mode == "dnd" ? `<div>${validate_component(Tabs, "Tabs").$$render(
      $$result,
      {
        class: twMerge(css2?.tabRow?.class, "wm-tabs-tabRow"),
        style: css2?.tabRow?.style,
        selected: selected2
      },
      {
        selected: ($$value) => {
          selected2 = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(tabs ?? [], (res, index) => {
            return `${validate_component(Tab, "Tab").$$render(
              $$result,
              {
                value: res,
                class: twMerge(css2?.allTabs?.class, "wm-tabs-alltabs"),
                style: css2?.allTabs?.style,
                selectedClass: twMerge(css2?.selectedTab?.class, "wm-tabs-selectedTab"),
                selectedStyle: css2?.selectedTab?.style,
                disabled: resolvedDisabledTabs[index]
              },
              {},
              {
                default: () => {
                  return `<span class="font-semibold">${escape(res)}</span> `;
                }
              }
            )}`;
          })}`;
        }
      }
    )}</div>` : `${resolvedConfig.tabsKind == "sidebar" ? `<div${add_attribute("class", twMerge("flex gap-y-2 flex-col w-1/6 max-w-[160px] bg-surface text-secondary opacity-80 px-4 pt-4 border-r ", css2?.tabRow?.class, "wm-tabs-tabRow"), 0)}${add_attribute("style", css2?.tabRow?.style, 0)}>${each(tabs ?? [], (res) => {
      return `<button${add_attribute(
        "class",
        twMerge("rounded-sm !truncate text-sm  hover:text-primary px-1 py-2", css2?.allTabs?.class, "wm-tabs-alltabs", selected2 == res ? twMerge("border-r  border-primary border-l bg-surface text-primary", css2?.selectedTab?.class, "wm-tabs-selectedTab") : ""),
        0
      )}${add_attribute(
        "style",
        selected2 == res ? [css2?.allTabs?.style, css2?.selectedTab?.style].filter(Boolean).join(";") : css2?.allTabs?.style,
        0
      )}>${escape(res)} </button>`;
    })}</div>` : ``}`} <div class="w-full">${$app.subgrids ? `${each(tabs ?? [], (_res, i) => {
      return `${validate_component(SubGridEditor, "SubGridEditor").$$render(
        $$result,
        {
          id,
          visible: render && i === selectedIndex,
          subGridId: `${id}-${i}`,
          class: twMerge(css2?.container?.class, "wm-tabs-container"),
          style: css2?.container?.style,
          containerHeight: resolvedConfig.tabsKind !== "sidebar" && $mode !== "preview" ? componentContainerHeight - tabHeight : componentContainerHeight
        },
        {},
        {}
      )}`;
    })}` : ``}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_componentControl();
  $$unsubscribe_focusedGrid();
  $$unsubscribe_runnableComponents();
  $$unsubscribe_worldStore();
  $$unsubscribe_mode();
  $$unsubscribe_connectingInput();
  $$unsubscribe_selectedComponent();
  return $$rendered;
});
const GroupWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { groupContext } = $$props;
  setContext("GroupContext", groupContext);
  if ($$props.groupContext === void 0 && $$bindings.groupContext && groupContext !== void 0) $$bindings.groupContext(groupContext);
  return `${slots.default ? slots.default({}) : ``}`;
});
const AppContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $$unsubscribe_focusedGrid;
  let $groupContext, $$unsubscribe_groupContext;
  let $worldStore, $$unsubscribe_worldStore;
  let $$unsubscribe_connectingInput;
  let $$unsubscribe_selectedComponent;
  let { id } = $$props;
  let { componentContainerHeight } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  let { groupFields = void 0 } = $$props;
  const { app, focusedGrid, selectedComponent, worldStore, connectingInput } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_focusedGrid = subscribe(focusedGrid, (value) => value);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => value);
  let groupContext = writable({});
  $$unsubscribe_groupContext = subscribe(groupContext, (value) => $groupContext = value);
  let outputs = initOutput($worldStore, id, { group: $groupContext });
  let css2 = initCss($app.css?.containercomponent, customCss);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.componentContainerHeight === void 0 && $$bindings.componentContainerHeight && componentContainerHeight !== void 0) $$bindings.componentContainerHeight(componentContainerHeight);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.groupFields === void 0 && $$bindings.groupFields && groupFields !== void 0) $$bindings.groupFields(groupFields);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      outputs.group.set($groupContext, true);
    }
    $$rendered = `${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.containercomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(groupFields ?? {}), (field) => {
      return `${groupFields && field in groupFields ? `${validate_component(InputValue, "InputValue").$$render(
        $$result,
        {
          key: field,
          id,
          input: groupFields[field],
          value: $groupContext[field]
        },
        {
          value: ($$value) => {
            $groupContext[field] = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : ``}`;
    })} <div class="w-full h-full">${$app.subgrids?.[`${id}-0`] ? `${validate_component(GroupWrapper, "GroupWrapper").$$render($$result, { groupContext }, {}, {
      default: () => {
        return `${validate_component(SubGridEditor, "SubGridEditor").$$render(
          $$result,
          {
            visible: render,
            id,
            class: twMerge(css2?.container?.class, "wm-container"),
            style: css2?.container?.style,
            subGridId: `${id}-0`,
            containerHeight: componentContainerHeight
          },
          {},
          {}
        )}`;
      }
    })}` : ``}</div>`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_focusedGrid();
  $$unsubscribe_groupContext();
  $$unsubscribe_worldStore();
  $$unsubscribe_connectingInput();
  $$unsubscribe_selectedComponent();
  return $$rendered;
});
const AppSplitpanes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $focusedGrid, $$unsubscribe_focusedGrid;
  let $componentControl, $$unsubscribe_componentControl;
  let $app, $$unsubscribe_app;
  let $worldStore, $$unsubscribe_worldStore;
  let $$unsubscribe_selectedComponent;
  let $$unsubscribe_connectingInput;
  let { id } = $$props;
  let { componentContainerHeight } = $$props;
  let { customCss = void 0 } = $$props;
  let { horizontal = false } = $$props;
  let { panes } = $$props;
  let { render } = $$props;
  const { app, focusedGrid, selectedComponent, componentControl, worldStore, connectingInput } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_focusedGrid = subscribe(focusedGrid, (value) => $focusedGrid = value);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => value);
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => $componentControl = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => value);
  initOutput($worldStore, id, {});
  let css2 = initCss($app.css?.containercomponent, customCss);
  set_store_value(
    componentControl,
    $componentControl[id] = {
      left: () => {
        if ($focusedGrid?.subGridIndex) {
          const index = $focusedGrid?.subGridIndex ?? 0;
          if (index > 0) {
            set_store_value(focusedGrid, $focusedGrid.subGridIndex = index - 1, $focusedGrid);
            return true;
          }
        }
        return false;
      },
      right: () => {
        if ($focusedGrid?.subGridIndex !== void 0) {
          const index = $focusedGrid?.subGridIndex ?? 0;
          if (index < panes.length - 1) {
            set_store_value(focusedGrid, $focusedGrid.subGridIndex = index + 1, $focusedGrid);
            return true;
          }
        }
        return false;
      }
    },
    $componentControl
  );
  let sumedup = panes.map((x) => x / panes.reduce((a, b) => a + b, 0) * 100);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.componentContainerHeight === void 0 && $$bindings.componentContainerHeight && componentContainerHeight !== void 0) $$bindings.componentContainerHeight(componentContainerHeight);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0) $$bindings.horizontal(horizontal);
  if ($$props.panes === void 0 && $$bindings.panes && panes !== void 0) $$bindings.panes(panes);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        let ns = panes.map((x) => x / panes.reduce((a, b) => a + b, 0) * 100);
        if (!deepEqual(ns, sumedup)) {
          sumedup = ns;
        }
      }
    }
    $$rendered = `${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.[horizontal ? "horizontalsplitpanescomponent" : "verticalsplitpanescomponent"],
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} <div class="h-full w-full border">${validate_component(Splitpanes, "Splitpanes").$$render($$result, { horizontal }, {}, {
      default: () => {
        return `${each(sumedup, (paneSize, index) => {
          return `${validate_component(Pane, "Pane").$$render($$result, { size: paneSize, minSize: 20 }, {}, {
            default: () => {
              return `<div class="w-full h-full">${$app.subgrids?.[`${id}-${index}`] ? `${validate_component(SubGridEditor, "SubGridEditor").$$render(
                $$result,
                {
                  visible: render,
                  id,
                  shouldHighlight: $focusedGrid?.subGridIndex === index,
                  class: twMerge(css2?.container?.class, horizontal ? "wm-horizontal-split-panes" : "wm-vertical-split-panes"),
                  style: css2?.container?.style,
                  subGridId: `${id}-${index}`,
                  containerHeight: horizontal ? void 0 : componentContainerHeight - 8
                },
                {},
                {}
              )}` : ``}</div> `;
            }
          })}`;
        })}`;
      }
    })}</div>`;
  } while (!$$settled);
  $$unsubscribe_focusedGrid();
  $$unsubscribe_componentControl();
  $$unsubscribe_app();
  $$unsubscribe_worldStore();
  $$unsubscribe_selectedComponent();
  $$unsubscribe_connectingInput();
  return $$rendered;
});
const AppIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  let { horizontalAlignment = "left" } = $$props;
  let { verticalAlignment = void 0 } = $$props;
  let { configuration } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  const { app, worldStore } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  let resolvedConfig = initConfig(components["iconcomponent"].initialData.configuration, configuration);
  initOutput($worldStore, id, {});
  let iconComponent;
  async function handleIcon(conf, comp) {
    if (conf.icon && comp) {
      await loadIcon(conf.icon, iconComponent, conf.size, conf.strokeWidth, conf.color);
    }
  }
  let css2 = initCss($app.css?.iconcomponent, customCss);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.horizontalAlignment === void 0 && $$bindings.horizontalAlignment && horizontalAlignment !== void 0) $$bindings.horizontalAlignment(horizontalAlignment);
  if ($$props.verticalAlignment === void 0 && $$bindings.verticalAlignment && verticalAlignment !== void 0) $$bindings.verticalAlignment(verticalAlignment);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      handleIcon(resolvedConfig, iconComponent);
    }
    $$rendered = `${each(Object.keys(components["iconcomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.iconcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${validate_component(AlignWrapper, "AlignWrapper").$$render(
      $$result,
      {
        render,
        horizontalAlignment,
        verticalAlignment,
        class: twMerge(css2?.container?.class, "wm-icon-container"),
        style: css2?.container?.style ?? ""
      },
      {},
      {
        default: () => {
          return `${resolvedConfig.icon ? `<div${add_attribute("class", twMerge(css2?.icon?.class, "wm-icon"), 0)}${add_attribute("style", css2?.icon?.style ?? "", 0)}${add_attribute("this", iconComponent, 0)}></div>` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_worldStore();
  return $$rendered;
});
const AppFileInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $mode, $$unsubscribe_mode;
  let $componentControl, $$unsubscribe_componentControl;
  let $app, $$unsubscribe_app;
  let $$unsubscribe_runnableComponents;
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  let { configuration } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  let { onFileChange = void 0 } = $$props;
  let { extraKey = void 0 } = $$props;
  const { app, worldStore, componentControl, mode, runnableComponents } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => $componentControl = value);
  $$unsubscribe_mode = subscribe(mode, (value) => $mode = value);
  $$unsubscribe_runnableComponents = subscribe(runnableComponents, (value) => value);
  let outputs = initOutput($worldStore, id, { result: [] });
  let resolvedConfig = initConfig(components["fileinputcomponent"].initialData.configuration, configuration);
  let css2 = initCss($app.css?.fileinputcomponent, customCss);
  let fileInput = void 0;
  set_store_value(
    componentControl,
    $componentControl[id] = {
      clearFiles: () => {
        fileInput?.clearFiles();
      }
    },
    $componentControl
  );
  let files = void 0;
  function preFillFiles() {
    const data = outputs?.result?.peak();
    if (data && Array.isArray(data) && data.length > 0) {
      files = data.map((file) => new File([], file?.name));
    }
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.onFileChange === void 0 && $$bindings.onFileChange && onFileChange !== void 0) $$bindings.onFileChange(onFileChange);
  if ($$props.extraKey === void 0 && $$bindings.extraKey && extraKey !== void 0) $$bindings.extraKey(extraKey);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    outputs.result && files === void 0 && $mode === "dnd" && preFillFiles();
    $$rendered = `${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.fileinputcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(components["fileinputcomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          extraKey,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${render ? `<div class="w-full h-full">${validate_component(FileInput, "FileInput").$$render(
      $$result,
      {
        accept: resolvedConfig?.acceptedFileTypes?.length ? resolvedConfig?.acceptedFileTypes?.join(", ") : void 0,
        multiple: resolvedConfig?.allowMultiple,
        convertTo: "base64",
        returnFileNames: true,
        class: twMerge("w-full h-full", css2?.container?.class, "wm-file-input"),
        style: css2?.container?.style,
        submittedText: resolvedConfig?.submittedFileText,
        disabled: resolvedConfig.disabled,
        this: fileInput,
        files
      },
      {
        this: ($$value) => {
          fileInput = $$value;
          $$settled = false;
        },
        files: ($$value) => {
          files = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${escape(resolvedConfig?.text)}`;
        }
      }
    )}</div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_mode();
  $$unsubscribe_componentControl();
  $$unsubscribe_app();
  $$unsubscribe_runnableComponents();
  $$unsubscribe_worldStore();
  return $$rendered;
});
const AppImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  let { configuration } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  const resolvedConfig = initConfig(components["imagecomponent"].initialData.configuration, configuration);
  const { app, worldStore } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  const fit = {
    cover: "object-cover",
    contain: "object-contain",
    fill: "object-fill"
  };
  initOutput($worldStore, id, {});
  let css2 = initCss($app.css?.imagecomponent, customCss);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${each(Object.keys(components["imagecomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.imagecomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${render ? `${validate_component(Loader, "Loader").$$render(
      $$result,
      {
        loading: resolvedConfig.source == void 0
      },
      {},
      {
        default: () => {
          return `<img${add_attribute(
            "src",
            resolvedConfig.sourceKind == "png encoded as base64" ? "data:image/png;base64," + resolvedConfig.source : resolvedConfig.sourceKind == "jpeg encoded as base64" ? "data:image/jpeg;base64," + resolvedConfig.source : resolvedConfig.sourceKind == "svg encoded as base64" ? "data:image/svg+xml;base64," + resolvedConfig.source : resolvedConfig.source,
            0
          )}${add_attribute("alt", resolvedConfig.altText, 0)}${add_attribute("style", css2?.image?.style ?? "", 0)}${add_attribute("class", twMerge(`w-full h-full ${fit[resolvedConfig.imageFit || "cover"]}`, css2?.image?.class, "wm-image"), 0)}>`;
        }
      }
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_worldStore();
  return $$rendered;
});
const AppDrawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $componentControl, $$unsubscribe_componentControl;
  let $worldStore, $$unsubscribe_worldStore;
  let $mode, $$unsubscribe_mode;
  let $$unsubscribe_focusedGrid;
  let $$unsubscribe_runnableComponents;
  let $$unsubscribe_connectingInput;
  let $$unsubscribe_selectedComponent;
  let { customCss = void 0 } = $$props;
  let { id } = $$props;
  let { configuration } = $$props;
  let { horizontalAlignment = void 0 } = $$props;
  let { verticalAlignment = void 0 } = $$props;
  let { noWFull = false } = $$props;
  let { render } = $$props;
  let { onOpenRecomputeIds = void 0 } = $$props;
  let { onCloseRecomputeIds = void 0 } = $$props;
  const { app, focusedGrid, selectedComponent, worldStore, connectingInput, mode, componentControl, runnableComponents } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_focusedGrid = subscribe(focusedGrid, (value) => value);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => value);
  $$unsubscribe_mode = subscribe(mode, (value) => $mode = value);
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => $componentControl = value);
  $$unsubscribe_runnableComponents = subscribe(runnableComponents, (value) => value);
  const resolvedConfig = initConfig(components["drawercomponent"].initialData.configuration, configuration);
  initOutput($worldStore, id, { open: false });
  let appDrawer;
  set_store_value(
    componentControl,
    $componentControl[id] = {
      open: () => {
        appDrawer?.openDrawer();
      },
      close: () => {
        appDrawer?.closeDrawer();
      }
    },
    $componentControl
  );
  let css2 = initCss($app.css?.drawercomponent, customCss);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.horizontalAlignment === void 0 && $$bindings.horizontalAlignment && horizontalAlignment !== void 0) $$bindings.horizontalAlignment(horizontalAlignment);
  if ($$props.verticalAlignment === void 0 && $$bindings.verticalAlignment && verticalAlignment !== void 0) $$bindings.verticalAlignment(verticalAlignment);
  if ($$props.noWFull === void 0 && $$bindings.noWFull && noWFull !== void 0) $$bindings.noWFull(noWFull);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.onOpenRecomputeIds === void 0 && $$bindings.onOpenRecomputeIds && onOpenRecomputeIds !== void 0) $$bindings.onOpenRecomputeIds(onOpenRecomputeIds);
  if ($$props.onCloseRecomputeIds === void 0 && $$bindings.onCloseRecomputeIds && onCloseRecomputeIds !== void 0) $$bindings.onCloseRecomputeIds(onCloseRecomputeIds);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${each(Object.keys(components["drawercomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.drawercomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} <div class="h-full w-full">${validate_component(AlignWrapper, "AlignWrapper").$$render(
      $$result,
      {
        noWFull,
        horizontalAlignment,
        verticalAlignment
      },
      {},
      {
        default: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              btnClasses: twMerge(css2?.button?.class, "wm-drawer-button"),
              wrapperClasses: twMerge(css2?.container?.class, "wm-drawer-button-container", resolvedConfig?.fillContainer ? "w-full h-full" : "", resolvedConfig?.hideButtonOnView && $mode == "preview" ? "invisible h-0 overflow-hidden" : ""),
              wrapperStyle: css2?.container?.style,
              disabled: resolvedConfig?.disabled,
              size: resolvedConfig.size,
              color: resolvedConfig.color,
              style: css2?.button?.style
            },
            {},
            {
              default: () => {
                return `${resolvedConfig.label && resolvedConfig.label?.length > 0 ? `<div>${escape(resolvedConfig.label)}</div>` : ``}`;
              }
            }
          )}`;
        }
      }
    )}</div> ${validate_component(Portal, "Portal").$$render($$result, { target: "#app-editor-top-level-drawer" }, {}, {
      default: () => {
        return `${validate_component(Drawer, "Drawer").$$render(
          $$result,
          {
            size: "800px",
            alwaysOpen: true,
            positionClass: $mode == "dnd" ? "!absolute" : "!fixed",
            shouldUsePortal: false,
            this: appDrawer
          },
          {
            this: ($$value) => {
              appDrawer = $$value;
              $$settled = false;
            }
          },
          {
            default: ({ open }) => {
              return `${validate_component(DrawerContent, "DrawerContent").$$render(
                $$result,
                {
                  title: resolvedConfig.drawerTitle,
                  fullScreen: $mode !== "dnd"
                },
                {},
                {
                  default: () => {
                    return `<div${add_attribute("class", twMerge("h-full", css2?.drawer?.class, "wm-drawer"), 0)}${add_attribute("style", css2?.drawer?.style, 0)}>${$app.subgrids?.[`${id}-0`] ? `${validate_component(SubGridEditor, "SubGridEditor").$$render(
                      $$result,
                      {
                        visible: open && render,
                        id,
                        subGridId: `${id}-0`
                      },
                      {},
                      {}
                    )}` : ``}</div>`;
                  }
                }
              )}`;
            }
          }
        )}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_componentControl();
  $$unsubscribe_worldStore();
  $$unsubscribe_mode();
  $$unsubscribe_focusedGrid();
  $$unsubscribe_runnableComponents();
  $$unsubscribe_connectingInput();
  $$unsubscribe_selectedComponent();
  return $$rendered;
});
const AppMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $$unsubscribe_focusedGrid;
  let $$unsubscribe_selectedComponent;
  let $$unsubscribe_connectingInput;
  let $worldStore, $$unsubscribe_worldStore;
  let $mode, $$unsubscribe_mode;
  const LAYER_NAME = { MARKER: "Marker" };
  let { id } = $$props;
  let { configuration } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  let { extraKey = void 0 } = $$props;
  const { app, worldStore, selectedComponent, connectingInput, focusedGrid, mode } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => value);
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => value);
  $$unsubscribe_focusedGrid = subscribe(focusedGrid, (value) => value);
  $$unsubscribe_mode = subscribe(mode, (value) => $mode = value);
  const resolvedConfig = initConfig(components["mapcomponent"].initialData.configuration, configuration);
  let outputs = initOutput($worldStore, id, {
    mapRegion: {
      topLeft: { lat: 0, lon: 0 },
      bottomRight: { lat: 0, lon: 0 }
    }
  });
  let map = void 0;
  let mapElement = void 0;
  function getLayersByName(name) {
    return map?.getLayers()?.getArray()?.filter((l) => l.getProperties().name === LAYER_NAME[name]);
  }
  function getMarkerArray() {
    let array = void 0;
    try {
      if (typeof resolvedConfig.markers === "string") {
        const json = JSON.parse(resolvedConfig.markers);
        array = Array.isArray(json) ? json : [json];
      } else {
        array = resolvedConfig.markers;
      }
      return array?.filter((m) => !isNaN(+m.lat) && !isNaN(+m.lon));
    } catch (error) {
      console.log(error);
      return void 0;
    }
  }
  function createMarkerLayers() {
    const markerArray = getMarkerArray();
    return markerArray?.map((m) => {
      const feature = new Feature({
        geometry: new Point([+m.lon, +m.lat]),
        name: m.title
      });
      feature.setStyle(new Style({
        image: new Circle({
          radius: m.radius ?? 7,
          fill: new Fill({ color: m.color ?? "#dc2626" }),
          stroke: new Stroke({
            width: m.strokeWidth ?? 3,
            color: m.strokeColor ?? "#fca5a5"
          })
        }),
        text: new Text({
          text: m.title,
          font: "12px Calibri,sans-serif",
          fill: new Fill({ color: "#000" }),
          stroke: new Stroke({ color: "#fff", width: 2 }),
          offsetY: -15
        })
      }));
      return new Vector({
        properties: { name: LAYER_NAME.MARKER },
        source: new Vector$1({ features: [feature] })
      });
    });
  }
  function updateMarkers() {
    const layers = getLayersByName("MARKER");
    if (layers?.length) {
      layers.forEach((l) => map?.removeLayer(l));
    }
    createMarkerLayers()?.forEach((l) => map?.addLayer(l));
  }
  let previousLock = void 0;
  function updateInteractions(map2) {
    if (previousLock === resolvedConfig.lock) {
      return;
    }
    previousLock = resolvedConfig.lock;
    map2.getInteractions().forEach((i) => {
      i.setActive(!resolvedConfig.lock);
    });
    map2.changed();
  }
  let css2 = initCss($app.css?.mapcomponent, customCss);
  function updateRegionOutput() {
    if (map && !resolvedConfig.lock) {
      let extent = map.getView().calculateExtent(map.getSize());
      const [left, bottom, right, top] = extent;
      if (outputs?.mapRegion) {
        outputs.mapRegion.set({
          topLeft: { lat: top, lon: left },
          bottomRight: { lat: bottom, lon: right }
        });
      }
    }
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.extraKey === void 0 && $$bindings.extraKey && extraKey !== void 0) $$bindings.extraKey(extraKey);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (!render) {
        map = void 0;
        mapElement = void 0;
      }
    }
    {
      if (!map && mapElement) {
        useGeographic();
        map = new Map$1({
          target: mapElement,
          layers: [new Tile({ source: new OSM() }), ...createMarkerLayers() || []],
          view: new View({
            center: [resolvedConfig.longitude ?? 0, resolvedConfig.latitude ?? 0],
            zoom: resolvedConfig.zoom ?? 2
          }),
          controls: defaults({ attribution: false })
        });
        updateRegionOutput();
      }
    }
    {
      if (map && resolvedConfig.longitude && resolvedConfig.latitude) {
        map.getView().setCenter([resolvedConfig.longitude, resolvedConfig.latitude]);
      }
    }
    {
      if (map && resolvedConfig.zoom) {
        map.getView().setZoom(resolvedConfig.zoom);
      }
    }
    {
      if (map && resolvedConfig.markers) {
        updateMarkers();
      }
    }
    map && resolvedConfig && updateInteractions(map);
    $$rendered = `${each(Object.entries(components["mapcomponent"].initialData.configuration), ([key, initialConfig]) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          extraKey,
          key,
          configuration: configuration[key],
          initialConfig,
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.mapcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${render ? `<div class="relative h-full w-full component-wrapper"><div${add_attribute("class", twMerge(`w-full h-full`, css2?.map?.class, "wm-map"), 0)}${add_attribute("style", css2?.map?.style ?? "", 0)}${add_attribute("this", mapElement, 0)}></div> ${$mode !== "preview" ? `<div class="absolute bottom-0 left-0 px-1 py-0.5 bg-indigo-500 text-white text-2xs" data-svelte-h="svelte-1wtbral">Set region</div>` : ``}</div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_focusedGrid();
  $$unsubscribe_selectedComponent();
  $$unsubscribe_connectingInput();
  $$unsubscribe_worldStore();
  $$unsubscribe_mode();
  return $$rendered;
});
const AppPdf = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $worldStore, $$unsubscribe_worldStore;
  let $mode, $$unsubscribe_mode;
  let $selectedComponent, $$unsubscribe_selectedComponent;
  GlobalWorkerOptions.workerSrc = "pdfjs-dist/build/pdf.worker.mjs";
  let { id } = $$props;
  let { configuration } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  const { app, mode, worldStore, selectedComponent } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_mode = subscribe(mode, (value) => $mode = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => $selectedComponent = value);
  initOutput($worldStore, id, { loading: false });
  let source = void 0;
  let wrapper = void 0;
  let error = void 0;
  let doc = void 0;
  let pages = [];
  let zoom = void 0;
  let pageNumber = 1;
  async function resetDoc() {
    await doc?.destroy();
    doc = void 0;
  }
  function handleZoom() {
    if (zoom && wrapper) {
      try {
        renderPdf(false);
      } catch (err) {
        error = err?.message ?? (typeof err === "string" ? err : "Error loading PDF");
      }
    }
  }
  async function renderPdf(scaleToViewport = true, resizing = false) {
    if (!doc || !wrapper || !zoom) return;
    const scrollPosition = wrapper.scrollTop / wrapper.scrollHeight;
    pages = resizing ? pages : [];
    const nextChildren = [];
    const width = wrapper.getBoundingClientRect().width;
    let scale = zoom / 100;
    if (scaleToViewport) {
      const firstViewport = await doc.getPage(1).getViewport({ scale: 1 });
      zoom = Math.floor(width / firstViewport.width * 10) * 10;
      scale = zoom / 100;
    }
    for (let i = 0; i < doc.numPages; i++) {
      const page = await doc.getPage(i + 1);
      pages.push(page);
      const viewport = page.getViewport({ scale });
      const canvas = document.createElement("canvas");
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      canvas.classList.add("mx-auto", "my-4", "shadow-sm");
      await page.render({
        canvasContext: canvas.getContext("2d"),
        viewport
      }).promise;
      nextChildren.push(canvas);
    }
    while (wrapper.firstChild) {
      wrapper.removeChild(wrapper.firstChild);
    }
    wrapper.append(...nextChildren);
    wrapper.scrollTo({
      top: scrollPosition * wrapper.scrollHeight
    });
  }
  let css2 = initCss($app.css?.pdfcomponent, customCss);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (source == "") {
        resetDoc();
        error = 'Set the "Source" attribute of the PDF component';
      }
    }
    zoom && handleZoom();
    {
      {
        {
          wideView = false;
        }
      }
    }
    $$rendered = `${validate_component(InputValue, "InputValue").$$render(
      $$result,
      {
        key: "source",
        id,
        input: configuration.source,
        value: source
      },
      {
        value: ($$value) => {
          source = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(InputValue, "InputValue").$$render(
      $$result,
      {
        key: "zoom",
        id,
        input: configuration.zoom,
        value: zoom
      },
      {
        value: ($$value) => {
          zoom = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.pdfcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${render ? `<div class="relative flex flex-col w-full h-full bg-gray-100 component-wrapper">${source && zoom ? `${pages?.length ? `<div class="flex flex-row w-full justify-between overflow-x-auto bg-surface border-b mx-auto py-1"><div class="flex justify-start items-center px-2 text-secondary text-sm">${validate_component(Button, "Button").$$render(
      $$result,
      {
        disabled: !doc,
        size: "xs",
        color: "light",
        variant: "border",
        title: "Zoom out",
        "aria-label": "Zoom out",
        btnClasses: "!rounded-r-none !px-2"
      },
      {},
      {
        default: () => {
          return `${validate_component(Zoom_out, "ZoomOut").$$render($$result, { size: 16 }, {}, {})}`;
        }
      }
    )} ${wideView ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        disabled: !doc,
        size: "xs",
        color: "light",
        variant: "border",
        title: "Reset zoom",
        "aria-label": "Reset zoom",
        btnClasses: "!w-[50px] !font-medium !rounded-none !border-l-0 !px-1"
      },
      {},
      {
        default: () => {
          return `${escape(zoom.toFixed(0))}%`;
        }
      }
    )}` : ``} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        disabled: !doc,
        size: "xs",
        color: "light",
        variant: "border",
        title: "Scale to viewport",
        "aria-label": "Scale to viewport",
        btnClasses: "!rounded-none !border-l-0 !px-2"
      },
      {},
      {
        default: () => {
          return `${validate_component(Move_horizontal, "MoveHorizontal").$$render($$result, { size: 16 }, {}, {})}`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        disabled: !doc,
        size: "xs",
        color: "light",
        variant: "border",
        title: "Zoom in",
        "aria-label": "Zoom in",
        btnClasses: "!rounded-l-none !px-2 !border-l-0"
      },
      {},
      {
        default: () => {
          return `${validate_component(Zoom_in, "ZoomIn").$$render($$result, { size: 16 }, {}, {})}`;
        }
      }
    )}</div> <div class="center-center px-2 text-secondary text-sm"><input min="1"${add_attribute("max", pages.length, 0)}${add_attribute("value", pageNumber, 0)} ${!doc ? "disabled" : ""} type="number" class="!w-[45px] !px-1 !py-0"> <span class="whitespace-nowrap pl-1">/ ${escape(pages.length)}</span></div> <div class="flex justify-end items-center px-2 text-secondary text-sm">${validate_component(Button, "Button").$$render(
      $$result,
      {
        disabled: !doc,
        size: "xs",
        color: "light",
        title: "Download PDF",
        "aria-label": "Download PDF",
        btnClasses: "!font-medium !px-2"
      },
      {},
      {
        default: () => {
          return `${validate_component(Download, "Download").$$render($$result, { size: 14 }, {}, {})}`;
        }
      }
    )}</div></div>` : `<div class="absolute inset-0 center-center flex-col text-center text-sm bg-surface text-secondary">${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin mb-2" }, {}, {})}
                    Loading PDF</div>`} <div${add_attribute("class", twMerge("w-full h-full overflow-auto", css2?.container?.class ?? "", "bg-gray-100", "wm-pdf"), 0)}${add_attribute("style", css2?.container?.style ?? "", 0)}${add_attribute("this", wrapper, 0)}></div>` : ``} ${$mode !== "preview" && $selectedComponent?.includes(id) ? `<button class="fixed z-10 bottom-0 left-0 px-2 py-0.5 bg-indigo-500/90 hover:bg-indigo-500 focus:bg-indigo-500 duration-200 text-white text-2xs" data-svelte-h="svelte-74obyv">Sync zoom value</button>` : ``} ${error ? `<div class="absolute inset-0 z-20 center-center bg-gray-100 text-center text-secondary text-sm">${escape(error)}</div>` : ``}</div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_worldStore();
  $$unsubscribe_mode();
  $$unsubscribe_selectedComponent();
  return $$rendered;
});
const AppCurrencyInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $componentControl, $$unsubscribe_componentControl;
  let $worldStore, $$unsubscribe_worldStore;
  let $$unsubscribe_selectedComponent;
  let { id } = $$props;
  let { configuration } = $$props;
  let { verticalAlignment = void 0 } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  const { app, worldStore, selectedComponent, componentControl } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value2) => $app = value2);
  $$unsubscribe_worldStore = subscribe(worldStore, (value2) => $worldStore = value2);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value2) => value2);
  $$unsubscribe_componentControl = subscribe(componentControl, (value2) => $componentControl = value2);
  const iterContext = getContext("ListWrapperContext");
  const listInputs = getContext("ListInputs");
  const outputs = initOutput($worldStore, id, { result: null });
  onDestroy(() => {
    listInputs?.remove(id);
  });
  let resolvedConfig = initConfig(components["currencycomponent"].initialData.configuration, configuration);
  let value = resolvedConfig.defaultValue;
  set_store_value(
    componentControl,
    $componentControl[id] = {
      setValue(nvalue) {
        value = nvalue;
      }
    },
    $componentControl
  );
  function handleInput() {
    outputs?.result.set(value ?? null);
    if (iterContext && listInputs) {
      listInputs.set(id, value ?? null);
    }
  }
  function handleDefault(dflt) {
    value = dflt;
    handleInput();
  }
  let css2 = initCss($app.css?.currencycomponent, customCss);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.verticalAlignment === void 0 && $$bindings.verticalAlignment && verticalAlignment !== void 0) $$bindings.verticalAlignment(verticalAlignment);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    value != void 0 && handleInput();
    {
      handleDefault(resolvedConfig.defaultValue);
    }
    $$rendered = `${each(Object.keys(components["currencycomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.currencycomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${validate_component(AlignWrapper, "AlignWrapper").$$render($$result, { render, verticalAlignment }, {}, {
      default: () => {
        return `<div class="w-full">${validate_component(CurrencyInput, "CurrencyInput").$$render(
          $$result,
          {
            inputClasses: {
              formatted: twMerge("px-2 text-sm w-full py-1.5 windmillapp app-editor-input", css2?.input?.class, "wm-currency-input"),
              wrapper: "w-full windmillapp",
              formattedZero: twMerge("windmillapp ", css2?.input?.class, "wm-currency")
            },
            style: css2?.input?.style,
            currency: resolvedConfig.currency,
            locale: resolvedConfig.locale,
            isNegativeAllowed: resolvedConfig.isNegativeAllowed,
            value
          },
          {
            value: ($$value) => {
              value = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_componentControl();
  $$unsubscribe_worldStore();
  $$unsubscribe_selectedComponent();
  return $$rendered;
});
const css$1 = {
  code: "#slider-input.rangeSlider{font-size:12px;text-transform:uppercase}#slider-input.rangeSlider .rangeHandle{height:2em;width:2em}#slider-input.rangeSlider .rangeFloat{background:transparent;opacity:1;top:50%;transform:translate(-50%,-50%)}",
  map: null
};
const spanClass = "text-center text-sm font-medium bg-blue-100 text-blue-800 rounded px-2.5 py-0.5";
const AppSliderInputs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $componentControl, $$unsubscribe_componentControl;
  let $worldStore, $$unsubscribe_worldStore;
  let $$unsubscribe_selectedComponent;
  let { id } = $$props;
  let { configuration } = $$props;
  let { verticalAlignment = void 0 } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  const iterContext = getContext("ListWrapperContext");
  const listInputs = getContext("ListInputs");
  const { app, worldStore, selectedComponent, componentControl } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => value);
  $$unsubscribe_componentControl = subscribe(componentControl, (value) => $componentControl = value);
  let resolvedConfig = initConfig(components["slidercomponent"].initialData.configuration, configuration);
  onDestroy(() => {
    listInputs?.remove(id);
  });
  let values = [resolvedConfig.defaultValue ?? 0];
  function handleDefault() {
    values = [resolvedConfig?.defaultValue ?? 0];
  }
  let slider;
  const outputs = initOutput($worldStore, id, { result: null });
  set_store_value(
    componentControl,
    $componentControl[id] = {
      setValue(nvalue) {
        values = [nvalue];
      }
    },
    $componentControl
  );
  function handleValues() {
    const num = isNaN(+values[0]) ? null : +values[0];
    outputs?.result.set(num);
    if (iterContext && listInputs) {
      listInputs.set(id, num);
    }
  }
  let css2 = initCss($app.css?.slidercomponent, customCss);
  let lastStyle = void 0;
  function computeWidth() {
    let maxValue = resolvedConfig.max ?? 0 + (resolvedConfig.step ?? 0);
    if (typeof document !== "undefined") {
      const span = document.createElement("span");
      span.style.visibility = "hidden";
      span.style.position = "absolute";
      span.style.whiteSpace = "nowrap";
      span.className = spanClass;
      span.textContent = maxValue.toString();
      document.body.appendChild(span);
      document.body.removeChild(span);
    }
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.verticalAlignment === void 0 && $$bindings.verticalAlignment && verticalAlignment !== void 0) $$bindings.verticalAlignment(verticalAlignment);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    resolvedConfig.defaultValue != void 0 && handleDefault();
    values && handleValues();
    {
      if (css2 && slider && lastStyle !== css2?.handle?.style) {
        const handle = slider.querySelector(".rangeNub");
        if (handle) {
          lastStyle = css2?.handle?.style;
          handle.style.cssText = css2?.handle?.style ?? "";
        }
      }
    }
    {
      if (resolvedConfig.max != void 0 && resolvedConfig.step && render) {
        computeWidth();
      }
    }
    $$rendered = `${each(Object.keys(components["slidercomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.slidercomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${validate_component(AlignWrapper, "AlignWrapper").$$render($$result, { render, hFull: true, verticalAlignment }, {}, {
      default: () => {
        return `<div class="${"flex " + escape(resolvedConfig.vertical ? "flex-col" : "", true) + " items-center w-full h-full gap-1"}"><div${add_attribute("class", twMerge("grow", css2?.bar?.class, "font-mono wm-slider-bar", resolvedConfig?.vertical ? "h-full" : "w-full"), 0)} style="${"--range-handle-focus: " + escape("#7e9abd", true) + "; --range-handle: " + escape("#7e9abd", true) + "; " + escape(css2?.bar?.style ?? "", true)}">${validate_component(RangeSlider, "RangeSlider").$$render(
          $$result,
          {
            id: "slider-input",
            springValues: { stiffness: 1, damping: 1 },
            vertical: resolvedConfig.vertical,
            step: resolvedConfig.step ?? 1,
            pipstep: (resolvedConfig.axisStep ?? 1) / (resolvedConfig.step ?? 1),
            min: +(resolvedConfig?.min ?? 0),
            max: +(resolvedConfig?.max ?? 0),
            disabled: resolvedConfig.disabled,
            pips: true,
            float: true,
            first: "label",
            last: "label",
            slider,
            values
          },
          {
            slider: ($$value) => {
              slider = $$value;
              $$settled = false;
            },
            values: ($$value) => {
              values = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div></div>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_componentControl();
  $$unsubscribe_worldStore();
  $$unsubscribe_selectedComponent();
  return $$rendered;
});
const AppNumberInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $worldStore, $$unsubscribe_worldStore;
  let $componentControl, $$unsubscribe_componentControl;
  let $$unsubscribe_selectedComponent;
  let { id } = $$props;
  let { configuration } = $$props;
  let { verticalAlignment = void 0 } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  const { app, worldStore, selectedComponent, componentControl } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value2) => $app = value2);
  $$unsubscribe_worldStore = subscribe(worldStore, (value2) => $worldStore = value2);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value2) => value2);
  $$unsubscribe_componentControl = subscribe(componentControl, (value2) => $componentControl = value2);
  const iterContext = getContext("ListWrapperContext");
  const listInputs = getContext("ListInputs");
  let resolvedConfig = initConfig(components["numberinputcomponent"].initialData.configuration, configuration);
  let value = resolvedConfig.defaultValue;
  set_store_value(
    componentControl,
    $componentControl[id] = {
      setValue(nvalue) {
        value = nvalue;
      }
    },
    $componentControl
  );
  onDestroy(() => {
    listInputs?.remove(id);
  });
  let outputs = initOutput($worldStore, id, { result: void 0 });
  function handleDefault(defaultValue) {
    value = defaultValue;
  }
  let css2 = initCss($app.css?.numberinputcomponent, customCss);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.verticalAlignment === void 0 && $$bindings.verticalAlignment && verticalAlignment !== void 0) $$bindings.verticalAlignment(verticalAlignment);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      handleDefault(resolvedConfig.defaultValue);
    }
    {
      {
        outputs?.result.set(value);
        if (iterContext && listInputs) {
          listInputs.set(id, value);
        }
      }
    }
    $$rendered = `${each(Object.keys(components["numberinputcomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.numberinputcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${validate_component(AlignWrapper, "AlignWrapper").$$render($$result, { render, verticalAlignment }, {}, {
      default: () => {
        return `<input${add_attribute("class", twMerge("windmillapp w-full py-1.5 px-2 text-sm  app-editor-input", css2?.input?.class ?? "", "wm-number-input"), 0)}${add_attribute("style", css2?.input?.style ?? "", 0)}${add_attribute("min", resolvedConfig.min, 0)}${add_attribute("max", resolvedConfig.max, 0)}${add_attribute("step", resolvedConfig.step, 0)} type="number" inputmode="numeric" pattern="\\d*"${add_attribute("placeholder", resolvedConfig.placeholder, 0)}${add_attribute("value", value, 0)}>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_worldStore();
  $$unsubscribe_componentControl();
  $$unsubscribe_selectedComponent();
  return $$rendered;
});
const ResolveNavbarItemPath = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { navbarItem } = $$props;
  let { id } = $$props;
  let { index } = $$props;
  let { resolvedPath = void 0 } = $$props;
  let resolvedConfig = initConfig({ path: navbarItem.path }, { path: navbarItem.path });
  if ($$props.navbarItem === void 0 && $$bindings.navbarItem && navbarItem !== void 0) $$bindings.navbarItem(navbarItem);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  if ($$props.resolvedPath === void 0 && $$bindings.resolvedPath && resolvedPath !== void 0) $$bindings.resolvedPath(resolvedPath);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    resolvedPath = resolvedConfig?.path?.selected === "href" ? resolvedConfig?.path?.configuration?.href?.href : resolvedConfig?.path?.configuration?.app?.path + (resolvedConfig?.path?.configuration?.app?.queryParamsOrHash ?? "");
    $$rendered = `${validate_component(ResolveConfig, "ResolveConfig").$$render(
      $$result,
      {
        id,
        key: "path",
        extraKey: String(index),
        configuration: navbarItem.path,
        resolvedConfig: resolvedConfig.path
      },
      {
        resolvedConfig: ($$value) => {
          resolvedConfig.path = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
let selected = writable(void 0);
function extractPathDetails() {
  const url = window.location.pathname + window.location.search + window.location.hash;
  const processedUrl = url.replace("/apps/edit/", "").replace("/apps/get/", "");
  return processedUrl;
}
const AppNavbarItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let buttonProps;
  let $selected, $$unsubscribe_selected;
  let $worldStore, $$unsubscribe_worldStore;
  $$unsubscribe_selected = subscribe(selected, (value) => $selected = value);
  let { navbarItem } = $$props;
  let { id } = $$props;
  let { borderColor = void 0 } = $$props;
  let { index } = $$props;
  let { output } = $$props;
  let { orientation = void 0 } = $$props;
  let icon;
  async function handleIcon() {
    if (navbarItem.icon) {
      icon = await loadIcon(navbarItem.icon, icon, 14, void 0, void 0);
    }
  }
  const { appPath, replaceStateFn, gotoFn, isEditor, worldStore } = getContext("AppViewerContext");
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  let resolvedPath = void 0;
  let resolvedLabel = void 0;
  let resolvedDisabled = void 0;
  let resolvedHidden = void 0;
  let initialized = false;
  function initSelection() {
    initialized = true;
    if ($selected) return;
    set_store_value(
      selected,
      $selected = resolvedPath === extractPathDetails() ? resolvedPath : void 0,
      $selected
    );
  }
  function getButtonProps(resolvedPath2) {
    if (appPath && resolvedPath2?.includes(appPath)) {
      return {
        onClick: () => {
          output.result.set({ currentPath: resolvedPath2 ?? "" });
          if (!resolvedPath2) return;
          const url = new URL(resolvedPath2, window.location.origin);
          const queryParams = url.search;
          const hash = url.hash;
          replaceStateFn?.(`${window.location.pathname}${queryParams}${hash}`);
          $worldStore.outputsById["ctx"].query.set(Object.fromEntries(new URLSearchParams(queryParams).entries()));
          $worldStore.outputsById["ctx"].hash.set(url.hash);
          set_store_value(
            selected,
            $selected = resolvedPath2 === extractPathDetails() ? resolvedPath2 : void 0,
            $selected
          );
        },
        href: void 0,
        target: void 0
      };
    } else if (navbarItem.path.selected === "app") {
      if (isEditor) {
        return {
          href: `/apps/get/${resolvedPath2}`,
          target: "_blank",
          onClick: void 0
        };
      } else {
        return {
          onClick: () => {
            if (resolvedPath2) {
              gotoFn?.(`/apps/get/${resolvedPath2}`);
            }
          },
          href: void 0,
          target: void 0
        };
      }
    } else {
      return {
        href: resolvedPath2,
        target: "_blank",
        onClick: void 0
      };
    }
  }
  if ($$props.navbarItem === void 0 && $$bindings.navbarItem && navbarItem !== void 0) $$bindings.navbarItem(navbarItem);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.borderColor === void 0 && $$bindings.borderColor && borderColor !== void 0) $$bindings.borderColor(borderColor);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  if ($$props.output === void 0 && $$bindings.output && output !== void 0) $$bindings.output(output);
  if ($$props.orientation === void 0 && $$bindings.orientation && orientation !== void 0) $$bindings.orientation(orientation);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    navbarItem.icon && icon && handleIcon();
    !initialized && resolvedPath && initSelection();
    buttonProps = getButtonProps(resolvedPath);
    $$rendered = `${validate_component(ResolveNavbarItemPath, "ResolveNavbarItemPath").$$render(
      $$result,
      { navbarItem, id, index, resolvedPath },
      {
        resolvedPath: ($$value) => {
          resolvedPath = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ResolveConfig, "ResolveConfig").$$render(
      $$result,
      {
        id,
        key: "label",
        extraKey: String(index),
        configuration: navbarItem.label,
        resolvedConfig: resolvedLabel
      },
      {
        resolvedConfig: ($$value) => {
          resolvedLabel = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ResolveConfig, "ResolveConfig").$$render(
      $$result,
      {
        id,
        key: "disabled",
        extraKey: String(index),
        configuration: navbarItem.disabled,
        resolvedConfig: resolvedDisabled
      },
      {
        resolvedConfig: ($$value) => {
          resolvedDisabled = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ResolveConfig, "ResolveConfig").$$render(
      $$result,
      {
        id,
        key: "hidden",
        extraKey: String(index),
        configuration: navbarItem.hidden,
        resolvedConfig: resolvedHidden
      },
      {
        resolvedConfig: ($$value) => {
          resolvedHidden = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${!resolvedHidden ? `<div${add_attribute("class", twMerge("py-2 border-b-2"), 0)}${add_attribute(
      "style",
      `border-color: ${$selected === resolvedPath ? borderColor ?? "transparent" : "transparent"}`,
      0
    )}>${validate_component(Button, "Button").$$render(
      $$result,
      {
        href: buttonProps.href,
        target: buttonProps.target ?? "_self",
        color: "light",
        size: "xs",
        disabled: resolvedDisabled,
        btnClasses: orientation === "vertical" ? "!justify-start !whitespace-normal !text-left" : ""
      },
      {},
      {
        default: () => {
          return `${navbarItem.icon ? `<div class="min-w-4"${add_attribute("this", icon, 0)}></div>` : ``} ${escape(resolvedLabel ?? "No Label")}`;
        }
      }
    )}</div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_selected();
  $$unsubscribe_worldStore();
  return $$rendered;
});
const AppNavbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  let { configuration } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  let { navbarItems = [] } = $$props;
  const { app, worldStore } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  let resolvedConfig = initConfig(components["navbarcomponent"].initialData.configuration, configuration);
  let output = initOutput($worldStore, id, { result: { currentPath: void 0 } });
  let css2 = initCss($app.css?.navbarcomponent, customCss);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.navbarItems === void 0 && $$bindings.navbarItems && navbarItems !== void 0) $$bindings.navbarItems(navbarItems);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${each(Object.keys(components["navbarcomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.navbarcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${render ? `<div${add_attribute(
      "class",
      twMerge(resolvedConfig?.orientation === "horizontal" ? "flex flex-row w-full items-center border-b px-4 gap-4 h-12" : "flex flex-col h-full items-start border-r px-8 gap-2 w-56 mt-4"),
      0
    )}>${resolvedConfig.logo?.selected === "yes" ? `<img${add_attribute(
      "src",
      resolvedConfig.logo?.configuration?.yes?.sourceKind == "png encoded as base64" ? "data:image/png;base64," + resolvedConfig.logo?.configuration?.yes?.source : resolvedConfig.logo?.configuration?.yes?.sourceKind == "jpeg encoded as base64" ? "data:image/jpeg;base64," + resolvedConfig.logo?.configuration?.yes?.source : resolvedConfig.logo?.configuration?.yes?.sourceKind == "svg encoded as base64" ? "data:image/svg+xml;base64," + resolvedConfig.logo?.configuration?.yes?.source : resolvedConfig.logo?.configuration?.yes?.source,
      0
    )}${add_attribute("alt", resolvedConfig.logo?.configuration?.yes?.altText, 0)}${add_attribute("style", css2?.image?.style ?? "", 0)}${add_attribute("class", twMerge(`w-auto h-8`, css2?.image?.class, "wm-image"), 0)}>` : ``} <div class="font-semibold">${escape(resolvedConfig?.title ?? "No Title")}</div> <div${add_attribute(
      "class",
      twMerge(resolvedConfig?.orientation === "horizontal" ? "flex flex-row gap-4 overflow-x-auto" : "flex flex-col gap-4 overflow-y-auto"),
      0
    )}>${each(navbarItems ?? [], (navbarItem, index) => {
      return `${validate_component(Popover, "Popover").$$render(
        $$result,
        {
          notClickable: true,
          disablePopup: !Boolean(navbarItem.caption)
        },
        {},
        {
          text: () => {
            return `${escape(navbarItem.caption)}`;
          },
          default: () => {
            return `${validate_component(AppNavbarItem, "AppNavbarItem").$$render(
              $$result,
              {
                navbarItem,
                id,
                borderColor: resolvedConfig?.borderColor,
                index,
                orientation: resolvedConfig?.orientation,
                output
              },
              {
                output: ($$value) => {
                  output = $$value;
                  $$settled = false;
                }
              },
              {}
            )} `;
          }
        }
      )}`;
    })}</div></div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_worldStore();
  return $$rendered;
});
function computeDayPerMonth(selectedMonth, selectedYear) {
  if (!selectedMonth || !selectedYear) {
    return 31;
  }
  const monthIndex = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ].indexOf(selectedMonth) + 1;
  const daysInMonth = new Date(Number(selectedYear), monthIndex, 0).getDate();
  return daysInMonth;
}
const AppDateSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let monthItems;
  let $app, $$unsubscribe_app;
  let $worldStore, $$unsubscribe_worldStore;
  let $componentControl, $$unsubscribe_componentControl;
  let { id } = $$props;
  let { configuration } = $$props;
  let { verticalAlignment = void 0 } = $$props;
  let { customCss = void 0 } = $$props;
  let { render } = $$props;
  const { app, worldStore, componentControl } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value2) => $app = value2);
  $$unsubscribe_worldStore = subscribe(worldStore, (value2) => $worldStore = value2);
  $$unsubscribe_componentControl = subscribe(componentControl, (value2) => $componentControl = value2);
  let resolvedConfig = initConfig(components["dateselectcomponent"].initialData.configuration, configuration);
  let value = void 0;
  set_store_value(
    componentControl,
    $componentControl[id] = {
      setValue(nvalue) {
        value = nvalue;
      }
    },
    $componentControl
  );
  let outputs = initOutput($worldStore, id, {
    day: void 0,
    month: void 0,
    year: void 0
  });
  function getLocale(locale = "en-US") {
    const localeMapping = {
      "en-US": enUS,
      "en-GB": enUS,
      "en-IE": enUS,
      "de-DE": de,
      "fr-FR": fr,
      "br-FR": fr,
      "ja-JP": ja,
      "pt-TL": pt,
      "fr-CA": fr,
      "en-CA": enUS
    };
    return localeMapping[resolvedConfig?.locale] || enUS;
  }
  function handleDefault(defaultValue) {
    value = defaultValue;
    if (value) {
      const date = parseISO(value);
      const locale = getLocale(resolvedConfig.locale);
      selectedDay = String(date.getDate());
      selectedMonth = format(date, "MMMM", { locale });
      selectedYear = String(date.getFullYear());
      if (resolvedConfig?.enableDay) {
        outputs.day.set(Number(selectedDay));
      }
      if (resolvedConfig?.enableMonth) {
        outputs.month.set(date.getMonth() + 1);
      }
      if (resolvedConfig?.enableYear) {
        outputs.year.set(Number(selectedYear));
      }
    }
  }
  let css2 = initCss($app.css?.dateinputcomponent, customCss);
  let darkMode = false;
  let selectedDay = void 0;
  let selectedMonth = void 0;
  let selectedYear = void 0;
  function updateOutputs(enableDay, enableMonth, enableYear) {
    if (enableDay) {
      outputs.day.set(Number(selectedDay));
    } else {
      outputs.day.set(void 0);
    }
    if (enableMonth) {
      const monthIndex = monthItems.findIndex((item) => item.label === selectedMonth);
      outputs.month.set(monthIndex + 1);
    } else {
      outputs.month.set(void 0);
    }
    if (enableYear) {
      outputs.year.set(Number(selectedYear));
    } else {
      outputs.year.set(void 0);
    }
  }
  function computeMonthItems(locale = "en-US") {
    return [
      {
        label: format(new Date(2e3, 0, 1), "MMMM", { locale: getLocale(locale) }),
        value: "January"
      },
      {
        label: format(new Date(2e3, 1, 1), "MMMM", { locale: getLocale(locale) }),
        value: "February"
      },
      {
        label: format(new Date(2e3, 2, 1), "MMMM", { locale: getLocale(locale) }),
        value: "March"
      },
      {
        label: format(new Date(2e3, 3, 1), "MMMM", { locale: getLocale(locale) }),
        value: "April"
      },
      {
        label: format(new Date(2e3, 4, 1), "MMMM", { locale: getLocale(locale) }),
        value: "May"
      },
      {
        label: format(new Date(2e3, 5, 1), "MMMM", { locale: getLocale(locale) }),
        value: "June"
      },
      {
        label: format(new Date(2e3, 6, 1), "MMMM", { locale: getLocale(locale) }),
        value: "July"
      },
      {
        label: format(new Date(2e3, 7, 1), "MMMM", { locale: getLocale(locale) }),
        value: "August"
      },
      {
        label: format(new Date(2e3, 8, 1), "MMMM", { locale: getLocale(locale) }),
        value: "September"
      },
      {
        label: format(new Date(2e3, 9, 1), "MMMM", { locale: getLocale(locale) }),
        value: "October"
      },
      {
        label: format(new Date(2e3, 10, 1), "MMMM", { locale: getLocale(locale) }),
        value: "November"
      },
      {
        label: format(new Date(2e3, 11, 1), "MMMM", { locale: getLocale(locale) }),
        value: "December"
      }
    ];
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.verticalAlignment === void 0 && $$bindings.verticalAlignment && verticalAlignment !== void 0) $$bindings.verticalAlignment(verticalAlignment);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    !value && handleDefault(resolvedConfig.defaultValue);
    monthItems = computeMonthItems(resolvedConfig?.locale);
    {
      updateOutputs(resolvedConfig.enableDay, resolvedConfig.enableMonth, resolvedConfig.enableYear);
    }
    $$rendered = `${each(Object.keys(components["dateselectcomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.dateselectcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(DarkModeObserver, "DarkModeObserver").$$render(
      $$result,
      { darkMode },
      {
        darkMode: ($$value) => {
          darkMode = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${validate_component(AlignWrapper, "AlignWrapper").$$render($$result, { render, verticalAlignment }, {}, {
      default: () => {
        return `<div${add_attribute(
          "class",
          twMerge(
            "w-full",
            resolvedConfig?.orientation === "horizontal" ? "flex flex-row gap-2  " : "flex  gap-2 flex-col",
            css2?.container?.class
          ),
          0
        )}${add_attribute("style", css2?.container?.style, 0)}>${resolvedConfig?.enableDay ? `<div${add_attribute(
          "class",
          twMerge("grow", resolvedConfig?.orientation === "horizontal" ? "w-1/4" : "w-full"),
          0
        )}>${validate_component(Select, "Select").$$render(
          $$result,
          {
            portal: false,
            value: selectedDay,
            items: Array.from(
              {
                length: computeDayPerMonth(selectedMonth, selectedYear)
              },
              (_, i) => {
                return {
                  label: String(i + 1),
                  value: String(i + 1)
                };
              }
            ),
            class: twMerge("text-clip min-w-0", css2?.input?.class, "wm-date-select"),
            containerStyles: (darkMode ? SELECT_INPUT_DEFAULT_STYLE.containerStylesDark : SELECT_INPUT_DEFAULT_STYLE.containerStyles) + css2?.input?.style,
            inputStyles: SELECT_INPUT_DEFAULT_STYLE.inputStyles,
            placeholder: "Pick a day"
          },
          {},
          {}
        )}</div>` : ``} ${resolvedConfig?.enableMonth ? `<div${add_attribute(
          "class",
          twMerge("grow", resolvedConfig?.orientation === "horizontal" ? "w-1/2" : "w-full"),
          0
        )}>${validate_component(Select, "Select").$$render(
          $$result,
          {
            portal: false,
            value: selectedMonth,
            items: monthItems,
            placeholder: "Pick a month",
            class: twMerge("text-clip min-w-0", css2?.input?.class, "wm-date-select"),
            containerStyles: (darkMode ? SELECT_INPUT_DEFAULT_STYLE.containerStylesDark : SELECT_INPUT_DEFAULT_STYLE.containerStyles) + css2?.input?.style,
            clearable: true
          },
          {},
          {}
        )}</div>` : ``} ${resolvedConfig?.enableYear ? `<div${add_attribute(
          "class",
          twMerge("grow", resolvedConfig?.orientation === "horizontal" ? "w-1/4" : "w-full"),
          0
        )}>${validate_component(Select, "Select").$$render(
          $$result,
          {
            portal: false,
            value: selectedYear,
            items: Array.from({ length: 201 }, (_, i) => `${1900 + i}`),
            placeholder: "Pick a year",
            inputStyles: SELECT_INPUT_DEFAULT_STYLE.inputStyles,
            class: twMerge("text-clip min-w-0", css2?.input?.class, "wm-date-select"),
            containerStyles: (darkMode ? SELECT_INPUT_DEFAULT_STYLE.containerStylesDark : SELECT_INPUT_DEFAULT_STYLE.containerStyles) + css2?.input?.style,
            clearable: true
          },
          {},
          {}
        )}</div>` : ``}</div>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_worldStore();
  $$unsubscribe_componentControl();
  return $$rendered;
});
const RecomputeAllButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { componentNumber = 0 } = $$props;
  let { interval = void 0 } = $$props;
  let { refreshing = [] } = $$props;
  let { progress = 100 } = $$props;
  let { loading = false } = $$props;
  const dispatch = createEventDispatcher();
  const items = [
    {
      displayName: "Once",
      action: () => dispatch("setInter", void 0)
    },
    ...[1, 2, 3, 4, 5, 6].map((i) => ({
      displayName: `Every ${i * 5} seconds`,
      action: () => dispatch("setInter", i * 5e3)
    }))
  ];
  if ($$props.componentNumber === void 0 && $$bindings.componentNumber && componentNumber !== void 0) $$bindings.componentNumber(componentNumber);
  if ($$props.interval === void 0 && $$bindings.interval && interval !== void 0) $$bindings.interval(interval);
  if ($$props.refreshing === void 0 && $$bindings.refreshing && refreshing !== void 0) $$bindings.refreshing(refreshing);
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0) $$bindings.progress(progress);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
  return `<div class="border rounded-md overflow-hidden"><div${add_attribute("class", twMerge("flex items-center"), 0)}>${validate_component(Button, "Button").$$render(
    $$result,
    {
      disabled: componentNumber == 0,
      color: "light",
      size: "xs",
      variant: "border",
      btnClasses: twMerge("!rounded-none text-tertiary !text-2xs !border-r border-y-0 border-l-0 group"),
      title: "Refresh " + componentNumber + " component" + (componentNumber > 1 ? "s" : "") + " " + (interval ? `every ${interval / 1e3} seconds` : "Once") + " " + (refreshing?.length > 0 ? `(live: ${refreshing?.join(", ")}))` : "")
    },
    {},
    {
      default: () => {
        return `<div class="z-10 flex flex-row items-center gap-2">${!loading ? `${validate_component(Refresh_cw, "RefreshCw").$$render($$result, { size: 14 }, {}, {})}` : `${validate_component(Loader_2, "Loader2").$$render(
          $$result,
          {
            class: "animate-spin text-blue-500",
            size: 14
          },
          {},
          {}
        )}`}

				(${escape(componentNumber)})</div>`;
      }
    }
  )} ${validate_component(ButtonDropdown, "ButtonDropdown").$$render($$result, { hasPadding: false }, {}, {
    items: () => {
      return `${each(items ?? [], ({}, index) => {
        return `${validate_component(MenuItem, "MenuItem").$$render($$result, {}, {}, {
          default: () => {
            return `<div${add_attribute("class", classNames("!text-tertiary text-left px-4 py-2 gap-2 cursor-pointer hover:bg-surface-hover !text-xs font-semibold"), 0)}>${index === 0 ? `Once` : `${escape(`Every ${index * 5} seconds`)}`}</div> `;
          }
        })}`;
      })} `;
    },
    label: () => {
      return `<span${add_attribute("class", twMerge("text-xs min-w-[2rem] ", interval ? "text-blue-500" : "text-tertiary"), 0)}>${escape(interval ? `${interval / 1e3}s` : "Once")}</span> `;
    },
    buttonReplacement: () => {
      return `<slot:fragment slot="buttonReplacement"><div class="flex flex-row gap-2 text-xs hover:bg-surface-hover px-2 items-center h-7">${interval ? `${validate_component(Badge, "Badge").$$render($$result, { color: "blue", small: true }, {}, {
        default: () => {
          return `${escape(interval ? `Every ${interval / 1e3}s` : "Once")}`;
        }
      })}` : ``} <div class="flex justify-center items-center">${validate_component(Timer_reset, "TimerReset").$$render($$result, { size: 14 }, {}, {})}</div></div></slot:fragment>`;
    }
  })}</div> ${interval ? `<div class="w-full bg-gray-200 rounded-full h-0.5 dark:bg-gray-700"><div class="bg-blue-300 h-0.5 rounded-full dark:bg-blue-500 transition-all" style="${"width: " + escape(progress, true) + "%"}"></div></div>` : ``}</div>`;
});
const RecomputeAllWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $selectedComponent, $$unsubscribe_selectedComponent;
  let $allIdsInPath, $$unsubscribe_allIdsInPath;
  let $bgRuns, $$unsubscribe_bgRuns;
  let $connectingInput, $$unsubscribe_connectingInput;
  let $recomputeAllContext, $$unsubscribe_recomputeAllContext;
  let { containerClass = void 0 } = $$props;
  let { containerStyle = void 0 } = $$props;
  const { selectedComponent, app, connectingInput, allIdsInPath, bgRuns, recomputeAllContext } = getContext("AppViewerContext");
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => $selectedComponent = value);
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => $connectingInput = value);
  $$unsubscribe_allIdsInPath = subscribe(allIdsInPath, (value) => $allIdsInPath = value);
  $$unsubscribe_bgRuns = subscribe(bgRuns, (value) => $bgRuns = value);
  $$unsubscribe_recomputeAllContext = subscribe(recomputeAllContext, (value) => $recomputeAllContext = value);
  let previousSelectedIds = void 0;
  if ($$props.containerClass === void 0 && $$bindings.containerClass && containerClass !== void 0) $$bindings.containerClass(containerClass);
  if ($$props.containerStyle === void 0 && $$bindings.containerStyle && containerStyle !== void 0) $$bindings.containerStyle(containerStyle);
  {
    if (!deepEqual(previousSelectedIds, $selectedComponent)) {
      previousSelectedIds = $selectedComponent;
      set_store_value(allIdsInPath, $allIdsInPath = ($selectedComponent ?? []).flatMap((id) => dfs($app.grid, id, $app.subgrids ?? {})).filter((x) => x != void 0), $allIdsInPath);
    }
  }
  $$unsubscribe_app();
  $$unsubscribe_selectedComponent();
  $$unsubscribe_allIdsInPath();
  $$unsubscribe_bgRuns();
  $$unsubscribe_connectingInput();
  $$unsubscribe_recomputeAllContext();
  return `<div${add_attribute("class", twMerge("flex justify-center h-8 items-center gap-2", containerClass), 0)}${add_attribute("style", containerStyle, 0)}><div class="w-9">${$bgRuns.length > 0 ? `${validate_component(Popover, "Popover").$$render($$result, { notClickable: true }, {}, {
    text: () => {
      return `<span slot="text"><div class="flex flex-col">${each($bgRuns, (bgRun) => {
        return `<div class="flex gap-2 items-center"><div class="text-2xs">${escape(bgRun)}</div> </div>`;
      })}</div></span>`;
    },
    default: () => {
      return `<span class="!text-2xs text-tertiary inline-flex gap-1 items-center">${validate_component(Loader_2, "Loader2").$$render($$result, { size: 10, class: "animate-spin" }, {}, {})} ${escape($bgRuns.length)}</span>`;
    }
  })}` : ``}</div> <div>${!$connectingInput.opened ? `${validate_component(RecomputeAllButton, "RecomputeAllButton").$$render(
    $$result,
    {
      interval: $recomputeAllContext.interval,
      componentNumber: $recomputeAllContext.componentNumber ?? 0,
      refreshing: $recomputeAllContext.refreshing,
      progress: $recomputeAllContext.progress,
      loading: $recomputeAllContext.loading
    },
    {},
    {}
  )}` : ``}</div></div>`;
});
const AppRecomputeAll = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $app, $$unsubscribe_app;
  let $worldStore, $$unsubscribe_worldStore;
  let { id } = $$props;
  let { initializing = false } = $$props;
  let { customCss = void 0 } = $$props;
  let { configuration } = $$props;
  let { render } = $$props;
  let { horizontalAlignment = void 0 } = $$props;
  const { app, worldStore, policy } = getContext("AppViewerContext");
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  let resolvedConfig = initConfig(components["recomputeallcomponent"].initialData.configuration, configuration);
  initOutput($worldStore, id, { loading: void 0 });
  initializing = false;
  let css2 = initCss($app.css?.recomputeallcomponent, customCss);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.initializing === void 0 && $$bindings.initializing && initializing !== void 0) $$bindings.initializing(initializing);
  if ($$props.customCss === void 0 && $$bindings.customCss && customCss !== void 0) $$bindings.customCss(customCss);
  if ($$props.configuration === void 0 && $$bindings.configuration && configuration !== void 0) $$bindings.configuration(configuration);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.horizontalAlignment === void 0 && $$bindings.horizontalAlignment && horizontalAlignment !== void 0) $$bindings.horizontalAlignment(horizontalAlignment);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${each(Object.keys(components["recomputeallcomponent"].initialData.configuration), (key) => {
      return `${validate_component(ResolveConfig, "ResolveConfig").$$render(
        $$result,
        {
          id,
          key,
          configuration: configuration[key],
          resolvedConfig: resolvedConfig[key]
        },
        {
          resolvedConfig: ($$value) => {
            resolvedConfig[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${each(Object.keys(css2 ?? {}), (key) => {
      return `${validate_component(ResolveStyle, "ResolveStyle").$$render(
        $$result,
        {
          id,
          customCss,
          key,
          componentStyle: $app.css?.recomputeallcomponent,
          css: css2[key]
        },
        {
          css: ($$value) => {
            css2[key] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})} ${validate_component(AlignWrapper, "AlignWrapper").$$render($$result, { horizontalAlignment }, {}, {
      default: () => {
        return `${render && policy ? `${validate_component(RecomputeAllWrapper, "RecomputeAllWrapper").$$render(
          $$result,
          {
            containerClass: css2?.container?.class,
            containerStyle: css2?.container?.style
          },
          {},
          {}
        )}` : ``}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_app();
  $$unsubscribe_worldStore();
  return $$rendered;
});
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ismoving;
  let $hoverStore, $$unsubscribe_hoverStore;
  let $movingcomponents, $$unsubscribe_movingcomponents;
  let $mode, $$unsubscribe_mode;
  let $connectingInput, $$unsubscribe_connectingInput;
  let $app, $$unsubscribe_app;
  let { component } = $$props;
  let { selected: selected2 } = $$props;
  let { locked = false } = $$props;
  let { render } = $$props;
  let { hidden } = $$props;
  let { fullHeight } = $$props;
  const { mode, app, hoverStore, connectingInput } = getContext("AppViewerContext");
  $$unsubscribe_mode = subscribe(mode, (value) => $mode = value);
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_hoverStore = subscribe(hoverStore, (value) => $hoverStore = value);
  $$unsubscribe_connectingInput = subscribe(connectingInput, (value) => $connectingInput = value);
  const editorContext = getContext("AppEditorContext");
  const movingcomponents = editorContext?.movingcomponents;
  $$unsubscribe_movingcomponents = subscribe(movingcomponents, (value) => $movingcomponents = value);
  let initializing = void 0;
  let errorHandledByComponent = false;
  let componentContainerHeight = 0;
  let inlineEditorOpened = false;
  if ($$props.component === void 0 && $$bindings.component && component !== void 0) $$bindings.component(component);
  if ($$props.selected === void 0 && $$bindings.selected && selected2 !== void 0) $$bindings.selected(selected2);
  if ($$props.locked === void 0 && $$bindings.locked && locked !== void 0) $$bindings.locked(locked);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0) $$bindings.hidden(hidden);
  if ($$props.fullHeight === void 0 && $$bindings.fullHeight && fullHeight !== void 0) $$bindings.fullHeight(fullHeight);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    ismoving = movingcomponents != void 0 && $mode == "dnd" && $movingcomponents?.includes(component.id);
    $$rendered = `  <div class="${"h-full flex flex-col w-full component " + escape(initializing ? "overflow-hidden h-0" : "", true) + " " + escape(hidden && $mode === "preview" ? "hidden" : "", true)}">${$mode !== "preview" ? `${validate_component(ComponentHeader, "ComponentHeader").$$render(
      $$result,
      {
        hover: $hoverStore === component.id,
        component,
        selected: selected2,
        fullHeight,
        connecting: $connectingInput.opened,
        locked,
        inlineEditorOpened,
        hasInlineEditor: component.type === "textcomponent" && component.componentInput && component.componentInput.type !== "connected",
        errorHandledByComponent
      },
      {},
      {}
    )}` : ``} ${ismoving ? `<div class="absolute -top-8 w-40"><button class="border p-0.5 text-xs" data-svelte-h="svelte-1571wuf">Cancel move</button></div>` : ``} <div${add_attribute(
      "class",
      twMerge(
        "h-full outline-1",
        $mode === "dnd" ? "bg-surface/40" : "",
        $hoverStore === component.id && $mode !== "preview" ? $connectingInput.opened ? "outline outline-orange-600" : "outline outline-blue-600" : "",
        selected2 && $mode !== "preview" ? "outline outline-indigo-600" : "",
        $mode != "preview" ? "cursor-pointer" : "",
        "relative z-auto",
        $app.css?.["app"]?.["component"]?.class,
        "wm-app-component",
        ismoving ? "animate-pulse" : ""
      ),
      0
    )}${add_attribute("style", $app.css?.["app"]?.["component"]?.style, 0)}>${component.type === "displaycomponent" ? `${validate_component(AppDisplayComponent, "AppDisplayComponent").$$render(
      $$result,
      {
        id: component.id,
        customCss: component.customCss,
        componentInput: component.componentInput,
        configuration: component.configuration,
        render,
        initializing
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${component.type === "logcomponent" ? `${validate_component(AppLogsComponent, "AppLogsComponent").$$render($$result, {}, {}, {})}` : `${component.type === "jobidlogcomponent" ? `${validate_component(AppJobIdLogComponent, "AppJobIdLogComponent").$$render(
      $$result,
      {
        id: component.id,
        customCss: component.customCss,
        configuration: component.configuration,
        render,
        initializing
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${component.type === "flowstatuscomponent" ? `${validate_component(AppFlowStatusComponent, "AppFlowStatusComponent").$$render($$result, {}, {}, {})}` : `${component.type === "jobidflowstatuscomponent" ? `${validate_component(AppJobIdFlowStatus, "AppJobIdFlowStatus").$$render(
      $$result,
      {
        id: component.id,
        customCss: component.customCss,
        configuration: component.configuration,
        render,
        initializing
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${component.type === "barchartcomponent" ? `${validate_component(AppBarChart, "AppBarChart").$$render(
      $$result,
      {
        configuration: component.configuration,
        id: component.id,
        customCss: component.customCss,
        componentInput: component.componentInput,
        render,
        initializing
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${component.type === "timeseriescomponent" ? `${validate_component(AppTimeseries, "AppTimeseries").$$render(
      $$result,
      {
        id: component.id,
        customCss: component.customCss,
        configuration: component.configuration,
        componentInput: component.componentInput,
        render,
        initializing
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${component.type === "htmlcomponent" ? `${validate_component(AppHtml, "AppHtml").$$render(
      $$result,
      {
        id: component.id,
        customCss: component.customCss,
        componentInput: component.componentInput,
        render,
        initializing
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${component.type === "customcomponent" ? `${validate_component(AppCustomComponent, "AppCustomComponent").$$render(
      $$result,
      {
        customComponent: component.customComponent,
        id: component.id,
        componentInput: component.componentInput,
        render
      },
      {},
      {}
    )}` : `${component.type === "mardowncomponent" ? `${validate_component(AppMarkdown, "AppMarkdown").$$render(
      $$result,
      {
        id: component.id,
        customCss: component.customCss,
        componentInput: component.componentInput,
        configuration: component.configuration,
        render,
        initializing
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${component.type === "vegalitecomponent" ? `${validate_component(VegaLiteHtml, "VegaLiteHtml").$$render(
      $$result,
      {
        configuration: component.configuration,
        id: component.id,
        componentInput: component.componentInput,
        render,
        initializing
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${component.type === "plotlycomponent" ? `${validate_component(PlotlyHtml, "PlotlyHtml").$$render(
      $$result,
      {
        id: component.id,
        configuration: component.configuration,
        componentInput: component.componentInput,
        render,
        initializing
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${component.type === "plotlycomponentv2" ? `${validate_component(PlotlyHtmlV2, "PlotlyHtmlV2").$$render(
      $$result,
      {
        id: component.id,
        configuration: component.configuration,
        componentInput: component.componentInput,
        datasets: component.datasets,
        xData: component.xData,
        render,
        initializing
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${component.type === "scatterchartcomponent" ? `${validate_component(AppScatterChart, "AppScatterChart").$$render(
      $$result,
      {
        configuration: component.configuration,
        id: component.id,
        customCss: component.customCss,
        componentInput: component.componentInput,
        render,
        initializing
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${component.type === "piechartcomponent" ? `${validate_component(AppPieChart, "AppPieChart").$$render(
      $$result,
      {
        configuration: component.configuration,
        id: component.id,
        customCss: component.customCss,
        componentInput: component.componentInput,
        render,
        initializing
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${component.type === "agchartscomponent" ? `${validate_component(AppAgCharts, "AppAgCharts").$$render(
      $$result,
      {
        configuration: component.configuration,
        id: component.id,
        customCss: component.customCss,
        componentInput: component.componentInput,
        datasets: component.datasets,
        xData: component.xData,
        render,
        initializing
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${component.type === "agchartscomponentee" ? `${validate_component(AppAgCharts, "AppAgCharts").$$render(
      $$result,
      {
        configuration: component.configuration,
        id: component.id,
        customCss: component.customCss,
        componentInput: component.componentInput,
        datasets: component.datasets,
        xData: component.xData,
        license: component.license,
        ee: true,
        render,
        initializing
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${component.type === "tablecomponent" ? `${validate_component(AppTable, "AppTable").$$render(
      $$result,
      {
        configuration: component.configuration,
        id: component.id,
        customCss: component.customCss,
        componentInput: component.componentInput,
        actionButtons: component.actionButtons,
        render,
        initializing
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${component.type === "dbexplorercomponent" ? `${validate_component(AppDbExplorer, "AppDbExplorer").$$render(
      $$result,
      {
        configuration: component.configuration,
        id: component.id,
        customCss: component.customCss,
        actions: component.actions ?? [],
        render,
        initializing
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${component.type === "aggridcomponent" ? `${validate_component(AppAggridTable, "AppAggridTable").$$render(
      $$result,
      {
        id: component.id,
        configuration: component.configuration,
        componentInput: component.componentInput,
        customCss: component.customCss,
        actions: component.actions ?? [],
        render,
        initializing
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${component.type === "aggridcomponentee" ? `${validate_component(AppAggridTableEe, "AppAggridTableEe").$$render(
      $$result,
      {
        license: component.license,
        id: component.id,
        configuration: component.configuration,
        componentInput: component.componentInput,
        customCss: component.customCss,
        actions: component.actions ?? [],
        render,
        initializing
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${component.type === "aggridinfinitecomponent" ? `${validate_component(AppAggridInfiniteTable, "AppAggridInfiniteTable").$$render(
      $$result,
      {
        id: component.id,
        configuration: component.configuration,
        componentInput: component.componentInput,
        customCss: component.customCss,
        actions: component.actions ?? [],
        render,
        initializing
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${component.type === "aggridinfinitecomponentee" ? `${validate_component(AppAggridInfiniteTableEe, "AppAggridInfiniteTableEe").$$render(
      $$result,
      {
        license: component.license,
        id: component.id,
        configuration: component.configuration,
        componentInput: component.componentInput,
        customCss: component.customCss,
        actions: component.actions ?? [],
        render,
        initializing
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${component.type === "textcomponent" ? `${validate_component(AppText, "AppText").$$render(
      $$result,
      {
        id: component.id,
        verticalAlignment: component.verticalAlignment,
        horizontalAlignment: component.horizontalAlignment,
        configuration: component.configuration,
        customCss: component.customCss,
        componentInput: component.componentInput,
        render,
        initializing,
        editorMode: inlineEditorOpened
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        },
        editorMode: ($$value) => {
          inlineEditorOpened = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${component.type === "buttoncomponent" ? `${validate_component(AppButton, "AppButton").$$render(
      $$result,
      {
        id: component.id,
        verticalAlignment: component.verticalAlignment,
        horizontalAlignment: component.horizontalAlignment,
        configuration: component.configuration,
        customCss: component.customCss,
        componentInput: component.componentInput,
        recomputeIds: component.recomputeIds,
        render,
        errorHandledByComponent
      },
      {
        errorHandledByComponent: ($$value) => {
          errorHandledByComponent = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${component.type === "downloadcomponent" ? `${validate_component(AppDownload, "AppDownload").$$render(
      $$result,
      {
        id: component.id,
        verticalAlignment: component.verticalAlignment,
        horizontalAlignment: component.horizontalAlignment,
        configuration: component.configuration,
        customCss: component.customCss,
        render
      },
      {},
      {}
    )}` : `${component.type === "selectcomponent" || component.type === "resourceselectcomponent" ? `${validate_component(AppSelect, "AppSelect").$$render(
      $$result,
      {
        recomputeIds: component.recomputeIds,
        id: component.id,
        verticalAlignment: component.verticalAlignment,
        configuration: component.configuration,
        customCss: component.customCss,
        onSelect: component.onSelect,
        render
      },
      {},
      {}
    )}` : `${component.type === "multiselectcomponent" ? `${validate_component(AppMultiSelect, "AppMultiSelect").$$render(
      $$result,
      {
        id: component.id,
        configuration: component.configuration,
        customCss: component.customCss,
        verticalAlignment: component.verticalAlignment,
        render
      },
      {},
      {}
    )}` : `${component.type === "multiselectcomponentv2" ? `${validate_component(AppMultiSelectV2, "AppMultiSelectV2").$$render(
      $$result,
      {
        id: component.id,
        configuration: component.configuration,
        customCss: component.customCss,
        verticalAlignment: component.verticalAlignment,
        render
      },
      {},
      {}
    )}` : `${component.type === "formcomponent" ? `${validate_component(AppForm, "AppForm").$$render(
      $$result,
      {
        id: component.id,
        horizontalAlignment: component.horizontalAlignment,
        configuration: component.configuration,
        customCss: component.customCss,
        componentInput: component.componentInput,
        recomputeIds: component.recomputeIds,
        render,
        errorHandledByComponent
      },
      {
        errorHandledByComponent: ($$value) => {
          errorHandledByComponent = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${component.type === "formbuttoncomponent" ? `${validate_component(AppFormButton, "AppFormButton").$$render(
      $$result,
      {
        id: component.id,
        verticalAlignment: component.verticalAlignment,
        horizontalAlignment: component.horizontalAlignment,
        configuration: component.configuration,
        customCss: component.customCss,
        componentInput: component.componentInput,
        recomputeIds: component.recomputeIds,
        render,
        errorHandledByComponent
      },
      {
        errorHandledByComponent: ($$value) => {
          errorHandledByComponent = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${component.type === "checkboxcomponent" ? `${validate_component(AppCheckbox, "AppCheckbox").$$render(
      $$result,
      {
        id: component.id,
        verticalAlignment: component.verticalAlignment,
        horizontalAlignment: component.horizontalAlignment,
        configuration: component.configuration,
        customCss: component.customCss,
        recomputeIds: component.recomputeIds,
        onToggle: component.onToggle,
        render
      },
      {},
      {}
    )}` : `${component.type === "textinputcomponent" ? `${validate_component(AppTextInput, "AppTextInput").$$render(
      $$result,
      {
        id: component.id,
        verticalAlignment: component.verticalAlignment,
        configuration: component.configuration,
        customCss: component.customCss,
        render
      },
      {},
      {}
    )}` : `${component.type === "quillcomponent" ? `${validate_component(AppQuillEditor, "AppQuillEditor").$$render(
      $$result,
      {
        id: component.id,
        configuration: component.configuration,
        render
      },
      {},
      {}
    )}` : `${component.type === "textareainputcomponent" ? `${validate_component(AppTextInput, "AppTextInput").$$render(
      $$result,
      {
        id: component.id,
        verticalAlignment: component.verticalAlignment,
        configuration: component.configuration,
        customCss: component.customCss,
        inputType: "textarea",
        appCssKey: "textareainputcomponent",
        render
      },
      {},
      {}
    )}` : `${component.type === "emailinputcomponent" ? `${validate_component(AppTextInput, "AppTextInput").$$render(
      $$result,
      {
        verticalAlignment: component.verticalAlignment,
        configuration: component.configuration,
        inputType: "email",
        appCssKey: "emailinputcomponent",
        id: component.id,
        customCss: component.customCss,
        render
      },
      {},
      {}
    )}` : `${component.type === "passwordinputcomponent" ? `${validate_component(AppTextInput, "AppTextInput").$$render(
      $$result,
      {
        verticalAlignment: component.verticalAlignment,
        configuration: component.configuration,
        inputType: "password",
        appCssKey: "passwordinputcomponent",
        id: component.id,
        customCss: component.customCss,
        render
      },
      {},
      {}
    )}` : `${component.type === "dateinputcomponent" ? `${validate_component(AppDateInput, "AppDateInput").$$render(
      $$result,
      {
        verticalAlignment: component.verticalAlignment,
        configuration: component.configuration,
        inputType: "date",
        id: component.id,
        customCss: component.customCss,
        render
      },
      {},
      {}
    )}` : `${component.type === "timeinputcomponent" ? `${validate_component(AppTimeInput, "AppTimeInput").$$render(
      $$result,
      {
        verticalAlignment: component.verticalAlignment,
        configuration: component.configuration,
        id: component.id,
        customCss: component.customCss,
        render
      },
      {},
      {}
    )}` : `${component.type === "datetimeinputcomponent" ? `${validate_component(AppDateTimeInput, "AppDateTimeInput").$$render(
      $$result,
      {
        verticalAlignment: component.verticalAlignment,
        configuration: component.configuration,
        inputType: "date",
        id: component.id,
        customCss: component.customCss,
        render
      },
      {},
      {}
    )}` : `${component.type === "numberinputcomponent" ? `${validate_component(AppNumberInput, "AppNumberInput").$$render(
      $$result,
      {
        verticalAlignment: component.verticalAlignment,
        configuration: component.configuration,
        id: component.id,
        customCss: component.customCss,
        render
      },
      {},
      {}
    )}` : `${component.type === "currencycomponent" ? `${validate_component(AppCurrencyInput, "AppCurrencyInput").$$render(
      $$result,
      {
        verticalAlignment: component.verticalAlignment,
        configuration: component.configuration,
        id: component.id,
        customCss: component.customCss,
        render
      },
      {},
      {}
    )}` : `${component.type === "slidercomponent" ? `${validate_component(AppSliderInputs, "AppSliderInputs").$$render(
      $$result,
      {
        verticalAlignment: component.verticalAlignment,
        configuration: component.configuration,
        id: component.id,
        customCss: component.customCss,
        render
      },
      {},
      {}
    )}` : `${component.type === "dateslidercomponent" ? `${validate_component(AppDateSliderInput, "AppDateSliderInput").$$render(
      $$result,
      {
        verticalAlignment: component.verticalAlignment,
        configuration: component.configuration,
        id: component.id,
        customCss: component.customCss,
        render
      },
      {},
      {}
    )}` : `${component.type === "horizontaldividercomponent" ? `${validate_component(AppDivider, "AppDivider").$$render(
      $$result,
      {
        verticalAlignment: component.verticalAlignment,
        horizontalAlignment: component.horizontalAlignment,
        configuration: component.configuration,
        id: component.id,
        customCss: component.customCss,
        position: "horizontal",
        render
      },
      {},
      {}
    )}` : `${component.type === "verticaldividercomponent" ? `${validate_component(AppDivider, "AppDivider").$$render(
      $$result,
      {
        verticalAlignment: component.verticalAlignment,
        horizontalAlignment: component.horizontalAlignment,
        configuration: component.configuration,
        id: component.id,
        customCss: component.customCss,
        position: "vertical",
        render
      },
      {},
      {}
    )}` : `${component.type === "rangecomponent" ? `${validate_component(AppRangeInput, "AppRangeInput").$$render(
      $$result,
      {
        verticalAlignment: component.verticalAlignment,
        configuration: component.configuration,
        id: component.id,
        customCss: component.customCss,
        render
      },
      {},
      {}
    )}` : `${component.type === "tabscomponent" && component.tabs ? `${validate_component(AppTabs, "AppTabs").$$render(
      $$result,
      {
        configuration: component.configuration,
        id: component.id,
        tabs: component.tabs,
        disabledTabs: component.disabledTabs,
        onTabChange: component.onTabChange,
        customCss: component.customCss,
        componentContainerHeight,
        render
      },
      {},
      {}
    )}` : `${component.type === "steppercomponent" && component.tabs ? `${validate_component(AppStepper, "AppStepper").$$render(
      $$result,
      {
        id: component.id,
        tabs: component.tabs,
        customCss: component.customCss,
        componentContainerHeight,
        componentInput: component.componentInput,
        onNext: component.onNext,
        onPrevious: component.onPrevious,
        render
      },
      {},
      {}
    )}` : `${component.type === "conditionalwrapper" && component.conditions ? `${validate_component(AppConditionalWrapper, "AppConditionalWrapper").$$render(
      $$result,
      {
        id: component.id,
        conditions: component.conditions,
        customCss: component.customCss,
        onTabChange: component.onTabChange,
        componentContainerHeight,
        render
      },
      {},
      {}
    )}` : `${component.type === "containercomponent" ? `${validate_component(AppContainer, "AppContainer").$$render(
      $$result,
      {
        groupFields: component.groupFields,
        id: component.id,
        customCss: component.customCss,
        componentContainerHeight,
        render
      },
      {},
      {}
    )}` : `${component.type === "listcomponent" ? `${validate_component(AppList, "AppList").$$render(
      $$result,
      {
        id: component.id,
        customCss: component.customCss,
        configuration: component.configuration,
        componentInput: component.componentInput,
        render,
        initializing
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${component.type === "verticalsplitpanescomponent" ? `${validate_component(AppSplitpanes, "AppSplitpanes").$$render(
      $$result,
      {
        id: component.id,
        customCss: component.customCss,
        panes: component.panes,
        componentContainerHeight,
        render
      },
      {},
      {}
    )}` : `${component.type === "horizontalsplitpanescomponent" ? `${validate_component(AppSplitpanes, "AppSplitpanes").$$render(
      $$result,
      {
        id: component.id,
        customCss: component.customCss,
        panes: component.panes,
        componentContainerHeight,
        horizontal: true,
        render
      },
      {},
      {}
    )}` : `${component.type === "iconcomponent" ? `${validate_component(AppIcon, "AppIcon").$$render(
      $$result,
      {
        verticalAlignment: component.verticalAlignment,
        horizontalAlignment: component.horizontalAlignment,
        configuration: component.configuration,
        id: component.id,
        customCss: component.customCss,
        render
      },
      {},
      {}
    )}` : `${component.type === "fileinputcomponent" ? `${validate_component(AppFileInput, "AppFileInput").$$render(
      $$result,
      {
        configuration: component.configuration,
        id: component.id,
        customCss: component.customCss,
        onFileChange: component.onFileChange,
        render
      },
      {},
      {}
    )}` : `${component.type === "s3fileinputcomponent" ? `${validate_component(AppS3FileInput, "AppS3FileInput").$$render(
      $$result,
      {
        configuration: component.configuration,
        id: component.id,
        customCss: component.customCss,
        onFileChange: component.onFileChange,
        render
      },
      {},
      {}
    )}` : `${component.type === "imagecomponent" ? `${validate_component(AppImage, "AppImage").$$render(
      $$result,
      {
        configuration: component.configuration,
        id: component.id,
        customCss: component.customCss,
        render
      },
      {},
      {}
    )}` : `${component.type === "drawercomponent" ? `${validate_component(AppDrawer, "AppDrawer").$$render(
      $$result,
      {
        verticalAlignment: component.verticalAlignment,
        horizontalAlignment: component.horizontalAlignment,
        configuration: component.configuration,
        id: component.id,
        customCss: component.customCss,
        onOpenRecomputeIds: component.onOpenRecomputeIds,
        onCloseRecomputeIds: component.onCloseRecomputeIds,
        render
      },
      {},
      {}
    )}` : `${component.type === "mapcomponent" ? `${validate_component(AppMap, "AppMap").$$render(
      $$result,
      {
        configuration: component.configuration,
        id: component.id,
        customCss: component.customCss,
        render
      },
      {},
      {}
    )}` : `${component.type === "pdfcomponent" ? `${validate_component(AppPdf, "AppPdf").$$render(
      $$result,
      {
        configuration: component.configuration,
        id: component.id,
        customCss: component.customCss,
        render
      },
      {},
      {}
    )}` : `${component.type === "modalcomponent" ? `${validate_component(AppModal, "AppModal").$$render(
      $$result,
      {
        verticalAlignment: component.verticalAlignment,
        horizontalAlignment: component.horizontalAlignment,
        configuration: component.configuration,
        id: component.id,
        customCss: component.customCss,
        onOpenRecomputeIds: component.onOpenRecomputeIds,
        onCloseRecomputeIds: component.onCloseRecomputeIds,
        render
      },
      {},
      {}
    )}` : `${component.type === "schemaformcomponent" ? `${validate_component(AppSchemaForm, "AppSchemaForm").$$render(
      $$result,
      {
        id: component.id,
        componentInput: component.componentInput,
        configuration: component.configuration,
        customCss: component.customCss,
        initializing,
        render
      },
      {},
      {}
    )}` : `${component.type === "selecttabcomponent" ? `${validate_component(AppSelectTab, "AppSelectTab").$$render(
      $$result,
      {
        id: component.id,
        verticalAlignment: component.verticalAlignment,
        horizontalAlignment: component.horizontalAlignment,
        configuration: component.configuration,
        customCss: component.customCss,
        render
      },
      {},
      {}
    )}` : `${component.type === "selectstepcomponent" ? `${validate_component(AppSelectStep, "AppSelectStep").$$render(
      $$result,
      {
        id: component.id,
        verticalAlignment: component.verticalAlignment,
        horizontalAlignment: component.horizontalAlignment,
        configuration: component.configuration,
        customCss: component.customCss,
        render
      },
      {},
      {}
    )}` : `${component.type === "chartjscomponent" ? `${validate_component(AppChartJs, "AppChartJs").$$render(
      $$result,
      {
        configuration: component.configuration,
        id: component.id,
        customCss: component.customCss,
        componentInput: component.componentInput,
        render,
        initializing
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${component.type === "chartjscomponentv2" ? `${validate_component(AppChartJsV2, "AppChartJsV2").$$render(
      $$result,
      {
        configuration: component.configuration,
        id: component.id,
        customCss: component.customCss,
        componentInput: component.componentInput,
        datasets: component.datasets,
        xData: component.xData,
        render,
        initializing
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${component.type === "carousellistcomponent" ? `${validate_component(AppCarouselList, "AppCarouselList").$$render(
      $$result,
      {
        id: component.id,
        configuration: component.configuration,
        componentInput: component.componentInput,
        customCss: component.customCss,
        componentContainerHeight,
        render,
        initializing
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${component.type === "statcomponent" ? `${validate_component(AppStatCard, "AppStatCard").$$render(
      $$result,
      {
        id: component.id,
        configuration: component.configuration,
        customCss: component.customCss,
        render
      },
      {},
      {}
    )}` : `${component.type === "menucomponent" ? `${validate_component(AppMenu, "AppMenu").$$render(
      $$result,
      {
        id: component.id,
        verticalAlignment: component.verticalAlignment,
        horizontalAlignment: component.horizontalAlignment,
        configuration: component.configuration,
        customCss: component.customCss,
        menuItems: component.menuItems,
        render
      },
      {},
      {}
    )}` : `${component.type === "decisiontreecomponent" && component.nodes ? `${validate_component(AppDecisionTree, "AppDecisionTree").$$render(
      $$result,
      {
        id: component.id,
        nodes: component.nodes,
        customCss: component.customCss,
        componentContainerHeight,
        render
      },
      {},
      {}
    )}` : `${component.type === "alertcomponent" ? `${validate_component(AppAlert, "AppAlert").$$render(
      $$result,
      {
        id: component.id,
        configuration: component.configuration,
        customCss: component.customCss,
        verticalAlignment: component.verticalAlignment,
        render
      },
      {},
      {}
    )}` : `${component.type === "navbarcomponent" ? `${validate_component(AppNavbar, "AppNavbar").$$render(
      $$result,
      {
        id: component.id,
        configuration: component.configuration,
        customCss: component.customCss,
        navbarItems: component.navbarItems,
        render
      },
      {},
      {}
    )}` : `${component.type === "dateselectcomponent" ? `${validate_component(AppDateSelect, "AppDateSelect").$$render(
      $$result,
      {
        id: component.id,
        configuration: component.configuration,
        customCss: component.customCss,
        verticalAlignment: component.verticalAlignment,
        render
      },
      {},
      {}
    )}` : `${component.type === "jobiddisplaycomponent" ? `${validate_component(AppRecomputeAll, "AppDisplayComponentByJobId").$$render(
      $$result,
      {
        id: component.id,
        customCss: component.customCss,
        configuration: component.configuration,
        render,
        initializing
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${component.type === "recomputeallcomponent" ? `${validate_component(AppRecomputeAll, "AppRecomputeAll").$$render(
      $$result,
      {
        id: component.id,
        customCss: component.customCss,
        configuration: component.configuration,
        horizontalAlignment: component.horizontalAlignment,
        render,
        initializing
      },
      {
        initializing: ($$value) => {
          initializing = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}</div></div> ${initializing ? `  <div class="absolute inset-0 center-center flex-col bg- border animate-skeleton"></div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_hoverStore();
  $$unsubscribe_movingcomponents();
  $$unsubscribe_mode();
  $$unsubscribe_connectingInput();
  $$unsubscribe_app();
  return $$rendered;
});
const DEFAULT_THEME = "f/app_themes/theme_0";
async function getTheme(workspace, path) {
  try {
    return AppService.getPublicResource({
      workspace,
      path
    });
  } catch (e) {
    sendUserToast(`Theme not found ${path}`);
    return {
      value: "",
      name: "Not found"
    };
  }
}
async function resolveTheme(theme, workspace) {
  let css2 = "";
  if (theme?.type === "inlined") {
    css2 = theme.css;
  } else if (theme?.type === "path" && theme.path && workspace) {
    let loadedCss = await ResourceService.getResourceValue({
      workspace,
      path: theme.path
    });
    css2 = loadedCss.value ?? "";
  }
  return css2;
}
const HiddenComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $worldStore, $$unsubscribe_worldStore;
  let $$unsubscribe_staticExporter;
  let $runnableComponents, $$unsubscribe_runnableComponents;
  let { id } = $$props;
  let { runnable } = $$props;
  const { worldStore, staticExporter, noBackend, runnableComponents } = getContext("AppViewerContext");
  $$unsubscribe_worldStore = subscribe(worldStore, (value) => $worldStore = value);
  $$unsubscribe_staticExporter = subscribe(staticExporter, (value) => value);
  $$unsubscribe_runnableComponents = subscribe(runnableComponents, (value) => $runnableComponents = value);
  let result = noBackend ? runnable.noBackendValue : void 0;
  function onSuccess() {
    if (runnable.recomputeIds) {
      runnable.recomputeIds.forEach((id2) => $runnableComponents?.[id2]?.cb?.map((cb) => cb()));
    }
  }
  let outputs = initOutput($worldStore, id, { result, loading: false, jobId: void 0 });
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.runnable === void 0 && $$bindings.runnable && runnable !== void 0) $$bindings.runnable(runnable);
  if ($$props.onSuccess === void 0 && $$bindings.onSuccess && onSuccess !== void 0) $$bindings.onSuccess(onSuccess);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${runnable && (runnable.type == "runnableByPath" || runnable.type == "runnableByName" && runnable.inlineScript != void 0) ? `${validate_component(RunnableComponent, "RunnableComponent").$$render(
      $$result,
      {
        hasChildrens: false,
        render: false,
        id,
        fields: runnable.fields,
        autoRefresh: true,
        transformer: runnable?.transformer,
        recomputeOnInputChanged: runnable.recomputeOnInputChanged ?? true,
        runnable,
        wrapperClass: "hidden",
        recomputableByRefreshButton: runnable.autoRefresh ?? true,
        outputs,
        result
      },
      {
        result: ($$value) => {
          result = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}` : `${validate_component(InitializeComponent, "InitializeComponent").$$render($$result, { id }, {}, {})}`}`;
  } while (!$$settled);
  $$unsubscribe_worldStore();
  $$unsubscribe_staticExporter();
  $$unsubscribe_runnableComponents();
  return $$rendered;
});
const RecomputeAllComponents = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $recomputeAllContext, $$unsubscribe_recomputeAllContext;
  let $runnableComponents, $$unsubscribe_runnableComponents;
  let $initialized, $$unsubscribe_initialized;
  let $app, $$unsubscribe_app;
  const { runnableComponents, app, initialized, recomputeAllContext } = getContext("AppViewerContext");
  $$unsubscribe_runnableComponents = subscribe(runnableComponents, (value) => $runnableComponents = value);
  $$unsubscribe_app = subscribe(app, (value) => $app = value);
  $$unsubscribe_initialized = subscribe(initialized, (value) => $initialized = value);
  $$unsubscribe_recomputeAllContext = subscribe(recomputeAllContext, (value) => $recomputeAllContext = value);
  getContext("AppEditorContext");
  let firstLoad = false;
  let refreshing = [];
  function refresh() {
    let isFirstLoad = false;
    if (!firstLoad) {
      set_store_value(initialized, $initialized.initialized = true, $initialized);
      firstLoad = true;
      isFirstLoad = true;
    }
    set_store_value(recomputeAllContext, $recomputeAllContext.loading = true, $recomputeAllContext);
    set_store_value(recomputeAllContext, $recomputeAllContext.progress = 100, $recomputeAllContext);
    console.log("refresh all");
    refreshing = [];
    const promises = Object.keys($runnableComponents).flatMap((id) => {
      if (!$runnableComponents?.[id]?.autoRefresh && (!isFirstLoad || !$runnableComponents?.[id]?.refreshOnStart)) {
        return;
      }
      let cb = $runnableComponents?.[id]?.cb;
      if (cb) {
        console.log("refresh start", id);
        refreshing.push(id);
        return cb.map((f) => f().then(() => {
          console.log("refreshed", id);
          refreshing = refreshing.filter((x) => x !== id);
        }).catch((e) => {
          console.error("refresh error", id);
          refreshing = refreshing.filter((x) => x !== id);
        }).finally(() => {
          set_store_value(recomputeAllContext, $recomputeAllContext.refreshing = refreshing, $recomputeAllContext);
        }));
      }
    }).filter(Boolean);
    Promise.all(promises).finally(() => {
      set_store_value(recomputeAllContext, $recomputeAllContext.loading = false, $recomputeAllContext);
    });
  }
  !firstLoad && $initialized.initializedComponents?.length == allItems($app.grid, $app.subgrids).length + ($app.hiddenInlineScripts?.length ?? 0) && refresh();
  set_store_value(recomputeAllContext, $recomputeAllContext.componentNumber = Object.values($runnableComponents).filter((x) => x.autoRefresh).length ?? 0, $recomputeAllContext);
  $$unsubscribe_recomputeAllContext();
  $$unsubscribe_runnableComponents();
  $$unsubscribe_initialized();
  $$unsubscribe_app();
  return `${validate_component(RecomputeAllButton, "RecomputeAllButton").$$render(
    $$result,
    {
      interval: $recomputeAllContext.interval,
      refreshing,
      componentNumber: $recomputeAllContext.componentNumber ?? 0,
      loading: $recomputeAllContext.loading,
      progress: $recomputeAllContext.progress
    },
    {},
    {}
  )}`;
});
const cssId = "wm-global-style";
function addOrRemoveCss(isPremium, cssString) {
  const existingElement = document.getElementById(cssId);
  if (!isPremium) {
    if (existingElement) {
      existingElement.remove();
    }
  } else {
    if (!existingElement && cssString) {
      const head = document.head;
      const link = document.createElement("style");
      link.id = cssId;
      link.innerHTML = cssString;
      head.appendChild(link);
    } else if (existingElement) {
      if (cssString) {
        existingElement.innerHTML = cssString;
      } else {
        existingElement.innerHTML = "";
      }
    }
  }
}
const AppPreview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let width;
  let lockedClasses;
  let maxRow;
  let $breakpoint, $$unsubscribe_breakpoint;
  let $appStore, $$unsubscribe_appStore;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  let $$unsubscribe_darkMode;
  let $selectedComponent, $$unsubscribe_selectedComponent;
  let $allIdsInPath, $$unsubscribe_allIdsInPath;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $$unsubscribe_parentWidth;
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { app } = $$props;
  let { appPath = "" } = $$props;
  let { breakpoint = writable("lg") } = $$props;
  $$unsubscribe_breakpoint = subscribe(breakpoint, (value) => $breakpoint = value);
  let { policy = {} } = $$props;
  let { summary = "" } = $$props;
  let { workspace = $workspaceStore } = $$props;
  let { isEditor = false } = $$props;
  let { context } = $$props;
  let { noBackend = false } = $$props;
  let { isLocked = false } = $$props;
  let { hideRefreshBar = false } = $$props;
  let { replaceStateFn = (path) => window.history.replaceState(null, "", path) } = $$props;
  let { gotoFn = (path, opt) => window.history.pushState(null, "", path) } = $$props;
  migrateApp(app);
  const appStore = writable(app);
  $$unsubscribe_appStore = subscribe(appStore, (value) => $appStore = value);
  const selectedComponent = writable(void 0);
  $$unsubscribe_selectedComponent = subscribe(selectedComponent, (value) => $selectedComponent = value);
  const mode = writable("preview");
  const connectingInput = writable({
    opened: false,
    input: void 0,
    hoveredComponent: void 0
  });
  const allIdsInPath = writable([]);
  $$unsubscribe_allIdsInPath = subscribe(allIdsInPath, (value) => $allIdsInPath = value);
  let ncontext = {
    ...context,
    workspace,
    mode: "viewer",
    summary,
    author: policy.on_behalf_of_email
  };
  function resizeWindow() {
    !isEditor && set_store_value(breakpoint, $breakpoint = window.innerWidth < 769 ? "sm" : "lg", $breakpoint);
  }
  resizeWindow();
  const parentWidth = writable(0);
  $$unsubscribe_parentWidth = subscribe(parentWidth, (value) => value);
  const darkMode = writable(document.documentElement.classList.contains("dark"));
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => value);
  const state = writable({});
  let parentContext = getContext("AppViewerContext");
  setContext("AppViewerContext", {
    worldStore: buildWorld(ncontext),
    initialized: writable({
      initialized: false,
      initializedComponents: []
    }),
    app: appStore,
    summary: writable(summary),
    selectedComponent,
    bgRuns: writable([]),
    mode,
    connectingInput,
    breakpoint,
    runnableComponents: writable({}),
    appPath,
    workspace,
    onchange: void 0,
    isEditor,
    jobs: parentContext?.jobs ?? writable([]),
    jobsById: parentContext?.jobsById ?? writable({}),
    staticExporter: writable({}),
    noBackend,
    errorByComponent: writable({}),
    openDebugRun: writable(void 0),
    focusedGrid: writable(void 0),
    stateId: writable(0),
    parentWidth,
    state,
    componentControl: writable({}),
    hoverStore: writable(void 0),
    allIdsInPath,
    darkMode,
    cssEditorOpen: writable(false),
    previewTheme: writable(void 0),
    debuggingComponents: writable({}),
    replaceStateFn,
    gotoFn,
    policy,
    recomputeAllContext: writable({
      loading: false,
      componentNumber: 0,
      refreshing: [],
      progress: 100
    })
  });
  let previousSelectedIds = void 0;
  let css2 = void 0;
  appStore.subscribe(loadTheme);
  async function loadTheme(currentAppStore) {
    if (!currentAppStore.theme) {
      return;
    }
    if (currentAppStore.theme.type === "inlined") {
      css2 = currentAppStore.theme.css;
    } else if (currentAppStore.theme.type === "path" && currentAppStore.theme.path) {
      let loadedCss = await getTheme(workspace, currentAppStore.theme.path);
      if (loadedCss) {
        css2 = loadedCss.value;
      }
    }
  }
  let appHeight = 0;
  if ($$props.app === void 0 && $$bindings.app && app !== void 0) $$bindings.app(app);
  if ($$props.appPath === void 0 && $$bindings.appPath && appPath !== void 0) $$bindings.appPath(appPath);
  if ($$props.breakpoint === void 0 && $$bindings.breakpoint && breakpoint !== void 0) $$bindings.breakpoint(breakpoint);
  if ($$props.policy === void 0 && $$bindings.policy && policy !== void 0) $$bindings.policy(policy);
  if ($$props.summary === void 0 && $$bindings.summary && summary !== void 0) $$bindings.summary(summary);
  if ($$props.workspace === void 0 && $$bindings.workspace && workspace !== void 0) $$bindings.workspace(workspace);
  if ($$props.isEditor === void 0 && $$bindings.isEditor && isEditor !== void 0) $$bindings.isEditor(isEditor);
  if ($$props.context === void 0 && $$bindings.context && context !== void 0) $$bindings.context(context);
  if ($$props.noBackend === void 0 && $$bindings.noBackend && noBackend !== void 0) $$bindings.noBackend(noBackend);
  if ($$props.isLocked === void 0 && $$bindings.isLocked && isLocked !== void 0) $$bindings.isLocked(isLocked);
  if ($$props.hideRefreshBar === void 0 && $$bindings.hideRefreshBar && hideRefreshBar !== void 0) $$bindings.hideRefreshBar(hideRefreshBar);
  if ($$props.replaceStateFn === void 0 && $$bindings.replaceStateFn && replaceStateFn !== void 0) $$bindings.replaceStateFn(replaceStateFn);
  if ($$props.gotoFn === void 0 && $$bindings.gotoFn && gotoFn !== void 0) $$bindings.gotoFn(gotoFn);
  {
    if (!deepEqual(previousSelectedIds, $selectedComponent)) {
      previousSelectedIds = $selectedComponent;
      set_store_value(allIdsInPath, $allIdsInPath = ($selectedComponent ?? []).flatMap((id) => dfs(app.grid, id, app.subgrids ?? {})).filter((x) => x != void 0), $allIdsInPath);
    }
  }
  width = $breakpoint === "sm" ? "max-w-[640px]" : "w-full min-w-[768px]";
  lockedClasses = isLocked ? "!max-h-[400px] overflow-hidden pointer-events-none" : "";
  {
    addOrRemoveCss($enterpriseLicense !== void 0 || isEditor, css2);
  }
  maxRow = maxHeight($appStore.grid, appHeight, $breakpoint);
  $$unsubscribe_breakpoint();
  $$unsubscribe_appStore();
  $$unsubscribe_enterpriseLicense();
  $$unsubscribe_darkMode();
  $$unsubscribe_selectedComponent();
  $$unsubscribe_allIdsInPath();
  $$unsubscribe_workspaceStore();
  $$unsubscribe_parentWidth();
  return `${validate_component(DarkModeObserver, "DarkModeObserver").$$render($$result, {}, {}, {})}  <div class="relative h-full"><div id="app-editor-top-level-drawer"></div> <div id="app-editor-select"></div> <div class="${escape($$props.class, true) + " " + escape(lockedClasses, true) + " " + escape(width, true) + " h-full bg-surface " + escape(app.fullscreen ? "" : "max-w-7xl", true) + " mx-auto"}" id="app-content">${$appStore.grid ? `<div${add_attribute(
    "class",
    twMerge("mx-auto", hideRefreshBar || $appStore?.norefreshbar || $appStore.hideLegacyTopBar === true ? "invisible h-0 overflow-hidden" : ""),
    0
  )}><div class="w-full sticky top-0 flex justify-between border-b bg-surface-secondary px-4 py-1 items-center gap-4"><h2 class="truncate">${escape(summary)}</h2> ${validate_component(RecomputeAllComponents, "RecomputeAllComponents").$$render($$result, {}, {}, {})} <div class="text-2xs text-secondary">${escape(policy.on_behalf_of ? `on behalf of ${policy.on_behalf_of_email}` : "")}</div></div></div>` : ``} <div${add_attribute("style", app.css?.["app"]?.["grid"]?.style, 0)}${add_attribute("class", twMerge("p-2 overflow-visible", app.css?.["app"]?.["grid"]?.class ?? "", "wm-app-grid subgrid"), 0)}><div>${validate_component(GridViewer, "GridViewer").$$render(
    $$result,
    {
      allIdsInPath: $allIdsInPath,
      items: app.grid,
      cols: columnConfiguration,
      maxRow,
      breakpoint: $breakpoint
    },
    {},
    {
      default: ({ dataItem, hidden }) => {
        return ` <div${add_attribute("class", "h-full w-full center-center", 0)}>${validate_component(Component, "Component").$$render(
          $$result,
          {
            render: true,
            component: dataItem.data,
            selected: false,
            locked: true,
            fullHeight: dataItem?.[$breakpoint === "sm" ? 3 : 12]?.fullHeight,
            hidden
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}</div></div></div> ${isLocked ? `  <div class="absolute inset-0 center-center bg-black/20 z-50 backdrop-blur-[1px] cursor-pointer">${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Unlock preview
				${validate_component(Unlock, "Unlock").$$render(
        $$result,
        {
          size: 18,
          class: "ml-1",
          strokeWidth: 2.5
        },
        {},
        {}
      )}`;
    }
  })}</div>` : ``}</div> ${app.hiddenInlineScripts ? `${each(app.hiddenInlineScripts, (runnable, index) => {
    return `${runnable ? `${validate_component(HiddenComponent, "HiddenComponent").$$render($$result, { id: BG_PREFIX + index, runnable }, {}, {})}` : ``}`;
  })}` : ``}`;
});
export {
  AppPreview as A,
  ComponentWrapper as C,
  DEFAULT_THEME as D,
  Grid as G,
  HiddenComponent as H,
  Plug_2 as P,
  RecomputeAllComponents as R,
  GridEditorMenu as a,
  Component as b,
  ComponentOutputViewer as c,
  ComponentCallbacks as d,
  Paintbrush_2 as e,
  ResolveConfig as f,
  ResolveNavbarItemPath as g,
  Chevron_left as h,
  buildWorld as i,
  getTheme as j,
  resolveTheme as r
};
