import { c as create_ssr_component, v as validate_component, d as createEventDispatcher, e as escape, b as add_attribute, t as compute_rest_props, w as spread, y as escape_attribute_value, x as escape_object, q as missing_component, p as compute_slots, h as getContext, s as subscribe, z as null_to_empty, f as each, u as setContext, a as set_store_value } from "./ssr.js";
import { dagStratify, sugiyama, decrossOpt, coordCenter } from "d3-dag";
import { g as classNames, b as emptyString, f as defaultIfEmptyString, C as Check_circle_2, B as Button, m as msToSec } from "./toast.js";
import { w as writable } from "./index.js";
import "d3-zoom";
/* empty css                                                   */
import "./index2.js";
/* empty css                                     */
import "./common.js";
import { P as PostgresIcon, M as Mysql, B as BigQueryIcon, a as MSSqlServerIcon, G as GraphqlIcon, A as APP_TO_ICON_COMPONENT } from "./index4.js";
import { D as Database, I as IconedResourceType } from "./IconedResourceType.js";
import { B as Badge } from "./Badge.js";
import { P as Popover, E as External_link } from "./Popover.js";
import { twMerge } from "tailwind-merge";
import { I as Icon } from "./Icon.js";
import { X } from "./x.js";
import { A as Alert_triangle } from "./alert-triangle.js";
import "yaml";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import "minimatch";
import { f as copilotInfo, w as workspaceStore } from "./stores2.js";
import { c as ScriptService } from "./services.gen.js";
import { S as SearchItems } from "./SearchItems.js";
import { W as Wand_2 } from "./wand-2.js";
import { a as prettyLanguage } from "./common2.js";
import { L as List_filter } from "./list-filter.js";
import { A as Arrow_down } from "./arrow-down.js";
import { B as Building } from "./building.js";
import { b as base } from "./base.js";
import { a as getAllSubmodules, b as getSubModules, c as getDependeeAndDependentComponents } from "./flowExplorer.js";
import { deepEqual } from "fast-equals";
import { D as DarkModeObserver } from "./DarkModeObserver.js";
const Bed = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M2 4v16" }],
    ["path", { "d": "M2 8h18a2 2 0 0 1 2 2v10" }],
    ["path", { "d": "M2 17h20" }],
    ["path", { "d": "M6 8v9" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "bed" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Clipboard_copy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "8",
        "height": "4",
        "x": "8",
        "y": "2",
        "rx": "1",
        "ry": "1"
      }
    ],
    [
      "path",
      {
        "d": "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
      }
    ],
    ["path", { "d": "M16 4h2a2 2 0 0 1 2 2v4" }],
    ["path", { "d": "M21 14H11" }],
    ["path", { "d": "m15 10-4 4 4 4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "clipboard-copy" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Code = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["polyline", { "points": "16 18 22 12 16 6" }],
    ["polyline", { "points": "8 6 2 12 8 18" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "code" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Cross = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "cross" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Gauge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "m12 14 4-4" }],
    ["path", { "d": "M3.34 19a10 10 0 1 1 17.32 0" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "gauge" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Git_branch_plus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M6 3v12" }],
    [
      "path",
      {
        "d": "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
      }
    ],
    [
      "path",
      {
        "d": "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
      }
    ],
    ["path", { "d": "M15 6a9 9 0 0 0-9 9" }],
    ["path", { "d": "M18 15v6" }],
    ["path", { "d": "M21 18h-6" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "git-branch-plus" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Git_branch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "6",
        "x2": "6",
        "y1": "3",
        "y2": "15"
      }
    ],
    ["circle", { "cx": "18", "cy": "6", "r": "3" }],
    ["circle", { "cx": "6", "cy": "18", "r": "3" }],
    ["path", { "d": "M18 9a9 9 0 0 1-9 9" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "git-branch" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Move = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["polyline", { "points": "5 9 2 12 5 15" }],
    ["polyline", { "points": "9 5 12 2 15 5" }],
    ["polyline", { "points": "15 19 12 22 9 19" }],
    ["polyline", { "points": "19 9 22 12 19 15" }],
    [
      "line",
      {
        "x1": "2",
        "x2": "22",
        "y1": "12",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "12",
        "x2": "12",
        "y1": "2",
        "y2": "22"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "move" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Phone_incoming = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["polyline", { "points": "16 2 16 8 22 8" }],
    [
      "line",
      {
        "x1": "22",
        "x2": "16",
        "y1": "2",
        "y2": "8"
      }
    ],
    [
      "path",
      {
        "d": "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "phone-incoming" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Repeat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "m17 2 4 4-4 4" }],
    ["path", { "d": "M3 11v-1a4 4 0 0 1 4-4h14" }],
    ["path", { "d": "m7 22-4-4 4-4" }],
    ["path", { "d": "M21 13v1a4 4 0 0 1-4 4H3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "repeat" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Square = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "square" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Voicemail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "6", "cy": "12", "r": "4" }],
    ["circle", { "cx": "18", "cy": "12", "r": "4" }],
    [
      "line",
      {
        "x1": "6",
        "x2": "18",
        "y1": "16",
        "y2": "16"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "voicemail" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Zap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "polygon",
      {
        "points": "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "zap" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { noMinW = false } = $$props;
  let { show = false } = $$props;
  let { wrapperClasses = "" } = $$props;
  let { popupClasses = "" } = $$props;
  let { transitionDuration = 25 } = $$props;
  let { pointerDown = false } = $$props;
  let menu;
  let { placement = "bottom-start" } = $$props;
  function close() {
    show = false;
  }
  const placementsClasses = {
    "bottom-center": "origin-top-left left-1/2 transform -translate-x-1/2",
    "bottom-start": "origin-top-left left-0",
    "bottom-end": "origin-top-right right-0",
    "top-start": "origin-bottom-left left-0 bottom-0",
    "top-end": "origin-bottom-right right-0 bottom-0"
  };
  createEventDispatcher();
  if ($$props.noMinW === void 0 && $$bindings.noMinW && noMinW !== void 0) $$bindings.noMinW(noMinW);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.wrapperClasses === void 0 && $$bindings.wrapperClasses && wrapperClasses !== void 0) $$bindings.wrapperClasses(wrapperClasses);
  if ($$props.popupClasses === void 0 && $$bindings.popupClasses && popupClasses !== void 0) $$bindings.popupClasses(popupClasses);
  if ($$props.transitionDuration === void 0 && $$bindings.transitionDuration && transitionDuration !== void 0) $$bindings.transitionDuration(transitionDuration);
  if ($$props.pointerDown === void 0 && $$bindings.pointerDown && pointerDown !== void 0) $$bindings.pointerDown(pointerDown);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0) $$bindings.placement(placement);
  return `<div class="${"relative " + escape(wrapperClasses, true)}"${add_attribute("this", menu, 0)}>  <div class="relative">${slots.trigger ? slots.trigger({ class: "triggerable" }) : ``}</div> ${show ? `<div${add_attribute("class", classNames("z-50 absolute mt-2 rounded-md shadow-lg bg-surface ring-1 ring-black ring-opacity-5 focus:outline-none", placementsClasses[placement], noMinW ? "min-w-0" : "w-60", popupClasses), 0)} role="menu" tabindex="-1">${slots.default ? slots.default({ close }) : ``}</div>` : ``}</div>`;
});
const BarsStaggered = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = 16 } = $$props;
  let { style = "fill: white;" } = $$props;
  let { class: clazz = "" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("height", `${size}px`, 0)} viewBox="0 0 512 512"${add_attribute("class", clazz, 0)}${add_attribute("style", style, 0)}><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path></svg>`;
});
const Bash = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["width", "height"]);
  let { width = 16 } = $$props;
  let { height = 16 } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  return `<svg${spread(
    [
      { width: escape_attribute_value(width) },
      { height: escape_attribute_value(height) },
      escape_object($$restProps),
      { viewBox: "0 0 16 16" },
      { fill: "none" },
      { xmlns: "http://www.w3.org/2000/svg" }
    ],
    {}
  )}><path d="M14.1478 3.56504L9.4137 0.752673C8.84829 0.415776 8.15106 0.415776 7.58566 0.752673L2.85152 3.56504C2.28612 3.899 1.9375 4.52007 1.9375 5.19093V10.8127C1.9375 11.4836 2.28612 12.1047 2.85152 12.4386L7.58566 15.2481C7.8669 15.415 8.18329 15.5 8.49968 15.5C8.81607 15.5 9.12953 15.415 9.4137 15.2481L14.1478 12.4386C14.7132 12.1017 15.0619 11.4836 15.0619 10.8127V5.19093C15.0619 4.52007 14.7132 3.899 14.1478 3.56504Z" fill="white"></path><path d="M14.1478 3.5651L9.4137 0.752734C9.13246 0.58575 8.81607 0.500793 8.49968 0.500793C8.18329 0.500793 7.86983 0.58575 7.58566 0.752734L2.85152 3.5651C2.28612 3.89906 1.9375 4.52013 1.9375 5.19099V10.8128C1.9375 11.4837 2.28612 12.1047 2.85152 12.4387L7.58566 15.2481C7.8669 15.4151 8.18329 15.5001 8.49968 15.5001C8.81607 15.5001 9.12953 15.4151 9.4137 15.2481L14.1478 12.4387C14.7132 12.1018 15.0619 11.4837 15.0619 10.8128V5.19099C15.0619 4.52013 14.7132 3.89906 14.1478 3.5651ZM7.75265 14.961L3.0185 12.1516C2.55563 11.8762 2.26854 11.3635 2.26854 10.8128V5.19099C2.26854 4.64024 2.55563 4.12757 3.0185 3.85219L7.75265 1.04276C7.98115 0.908 8.23895 0.837691 8.49968 0.837691C8.76041 0.837691 9.02114 0.908 9.24671 1.04276L13.9809 3.85219C14.3705 4.08363 14.6341 4.48497 14.7074 4.93612C14.5492 4.60216 14.1976 4.50841 13.7846 4.75156L9.3053 7.51998C8.74576 7.84516 8.33562 8.21428 8.33562 8.88515V14.4044C8.33562 14.8087 8.49675 15.0694 8.74869 15.1456C8.66666 15.1602 8.58464 15.169 8.49968 15.169C8.23895 15.1661 7.97822 15.0958 7.75265 14.961Z" fill="#283037"></path><path d="M12.9086 11.3547L11.728 12.0607C11.6958 12.0783 11.6724 12.0988 11.6724 12.1369V12.4445C11.6724 12.4826 11.6987 12.4972 11.728 12.4796L12.9262 11.7531C12.9584 11.7355 12.9614 11.7004 12.9614 11.6623V11.3899C12.9643 11.3518 12.9379 11.3371 12.9086 11.3547Z" fill="#4DA825"></path><path d="M10.3983 8.75913C10.4364 8.73863 10.4686 8.76499 10.4686 8.81479L10.4715 9.222C10.6414 9.15462 10.7908 9.13704 10.9256 9.16634C10.9549 9.17513 10.9666 9.21321 10.9549 9.26008L10.8641 9.62042C10.8582 9.64678 10.8406 9.67608 10.8231 9.69366C10.8143 9.70245 10.8084 9.70831 10.7996 9.71123C10.7879 9.71709 10.7762 9.72002 10.7645 9.71709C10.7029 9.70245 10.5565 9.67022 10.328 9.7874C10.0877 9.91044 10.0028 10.1184 10.0057 10.2737C10.0086 10.4583 10.1024 10.5169 10.4305 10.5198C10.867 10.5256 11.0574 10.719 11.0604 11.1584C11.0662 11.592 10.8348 12.0549 10.4803 12.342L10.4891 12.7462C10.4891 12.796 10.4569 12.8517 10.4188 12.8693L10.1786 13.007C10.1405 13.0275 10.1082 13.004 10.1082 12.9542L10.1053 12.5558C9.90025 12.6408 9.69225 12.6613 9.56042 12.6086C9.53406 12.5998 9.52527 12.5617 9.53406 12.5207L9.62194 12.1545C9.6278 12.1252 9.64538 12.0959 9.66589 12.0783C9.67468 12.0724 9.68053 12.0666 9.68932 12.0607C9.70397 12.0549 9.71569 12.0519 9.72741 12.0578C9.87096 12.1047 10.0526 12.0842 10.2284 11.9933C10.451 11.8791 10.6004 11.6535 10.5975 11.425C10.5946 11.22 10.4832 11.135 10.2137 11.1321C9.87095 11.1321 9.5487 11.0647 9.54285 10.5579C9.53992 10.1419 9.7567 9.70831 10.0995 9.43293L10.0965 9.02572C10.0965 8.97592 10.1258 8.92026 10.1668 8.89975L10.3983 8.75913Z" fill="white"></path></svg>`;
});
const Go = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["width", "height"]);
  let { width = 16 } = $$props;
  let { height = 16 } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  return `<svg${spread(
    [
      { width: escape_attribute_value(width) },
      { height: escape_attribute_value(height) },
      escape_object($$restProps),
      { viewBox: "0 0 16 16" },
      { fill: "none" },
      { xmlns: "http://www.w3.org/2000/svg" }
    ],
    {}
  )}><path d="M1.20743 6.82123C1.17627 6.82123 1.16848 6.80565 1.18406 6.78228L1.34764 6.57197C1.36322 6.5486 1.40217 6.53302 1.43333 6.53302H4.21424C4.2454 6.53302 4.25319 6.55639 4.23761 6.57976L4.10519 6.78228C4.08961 6.80565 4.05066 6.82902 4.02729 6.82902L1.20743 6.82123Z" fill="#00ACD7"></path><path d="M0.0311587 7.53787C0 7.53787 -0.00778968 7.52229 0.00778968 7.49892L0.171373 7.28861C0.186952 7.26524 0.225901 7.24966 0.257059 7.24966H3.80915C3.84031 7.24966 3.85589 7.27303 3.8481 7.2964L3.78578 7.48335C3.77799 7.5145 3.74684 7.53008 3.71568 7.53008L0.0311587 7.53787Z" fill="#00ACD7"></path><path d="M1.91641 8.25449C1.88525 8.25449 1.87746 8.23112 1.89304 8.20775L2.0021 8.01301C2.01768 7.98965 2.04884 7.96628 2.08 7.96628H3.63793C3.66909 7.96628 3.68467 7.98965 3.68467 8.0208L3.66909 8.20775C3.66909 8.23891 3.63793 8.26228 3.61456 8.26228L1.91641 8.25449Z" fill="#00ACD7"></path><path d="M10.002 6.68102C9.51124 6.80565 9.17629 6.89912 8.69333 7.02375C8.57648 7.05491 8.56869 7.0627 8.46742 6.94586C8.35058 6.81344 8.26489 6.72776 8.10131 6.64986C7.61056 6.40839 7.13539 6.47849 6.69138 6.7667C6.16168 7.10944 5.88904 7.61575 5.89683 8.24669C5.90462 8.86984 6.33305 9.38394 6.94844 9.46962C7.47814 9.53973 7.92215 9.35278 8.27268 8.95552C8.34279 8.86984 8.40511 8.77637 8.483 8.66732C8.20258 8.66732 7.85204 8.66732 6.9796 8.66732C6.81601 8.66732 6.77706 8.56605 6.83159 8.43363C6.93286 8.19216 7.11981 7.78711 7.22887 7.58459C7.25224 7.53785 7.30676 7.45996 7.42361 7.45996C7.82088 7.45996 9.28534 7.45996 10.2591 7.45996C10.2435 7.67027 10.2435 7.88059 10.2123 8.0909C10.1266 8.65174 9.91631 9.16584 9.57356 9.61762C9.0127 10.3576 8.28047 10.8172 7.3535 10.9418C6.59011 11.0431 5.88125 10.8951 5.25808 10.4277C4.68164 9.99151 4.35447 9.4151 4.26879 8.69847C4.16752 7.84943 4.41679 7.08607 4.93091 6.41618C5.48398 5.69177 6.21621 5.23219 7.11202 5.06861C7.84425 4.93619 8.54532 5.02188 9.17629 5.45029C9.58914 5.72292 9.88515 6.09681 10.0799 6.5486C10.1266 6.6187 10.0955 6.65765 10.002 6.68102Z" fill="#00ACD7"></path><path d="M12.5805 10.9886C11.8717 10.973 11.2251 10.7705 10.6798 10.3031C10.2202 9.90584 9.93202 9.39953 9.83855 8.79975C9.69833 7.91955 9.93981 7.14061 10.4695 6.44735C11.0382 5.69957 11.7236 5.3101 12.6506 5.14652C13.4452 5.00631 14.193 5.08421 14.8707 5.54378C15.4861 5.96441 15.8678 6.53304 15.969 7.28082C16.1014 8.33239 15.7977 9.18922 15.0732 9.92142C14.5591 10.4433 13.9281 10.7705 13.2037 10.9185C12.9934 10.9574 12.783 10.9652 12.5805 10.9886ZM14.4345 7.84165C14.4267 7.74039 14.4267 7.6625 14.4111 7.5846C14.2709 6.81345 13.562 6.37725 12.822 6.54861C12.0976 6.71219 11.6302 7.17177 11.4588 7.90397C11.3186 8.51154 11.6146 9.1269 12.1755 9.37617C12.6039 9.56311 13.0323 9.53974 13.4452 9.32943C14.0606 9.01006 14.3955 8.51154 14.4345 7.84165Z" fill="#00ACD7"></path></svg>`;
});
const Python = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["width", "height"]);
  let { width = 16 } = $$props;
  let { height = 16 } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  return `<svg${spread(
    [
      { width: escape_attribute_value(width) },
      { height: escape_attribute_value(height) },
      escape_object($$restProps),
      { viewBox: "0 0 17 16" },
      { fill: "none" },
      { xmlns: "http://www.w3.org/2000/svg" }
    ],
    {}
  )}><g clip-path="url(#clip0_128_281)"><path d="M8.4728 0C4.6952 0 4.65462 1.46633 4.65462 1.76815C4.65462 2.22604 4.65462 3.6 4.65462 3.6H8.54553V4.14996C8.54553 4.14996 4.49433 4.14996 3.10916 4.14996C1.95295 4.14996 0.5 4.85295 0.5 7.96814C0.5 10.8297 1.63338 11.9363 2.77724 11.9363C3.11687 11.9363 4.13636 11.9363 4.13636 11.9363C4.13636 11.9363 4.13636 10.5159 4.13636 10.0272C4.13636 9.22851 4.53215 7.74996 6.37724 7.74996C8.69142 7.74996 9.28211 7.74996 10.2363 7.74996C10.8039 7.74996 12.4044 7.50327 12.4044 5.65455C12.4044 3.69789 12.4044 3.05236 12.4044 2.13178C12.4046 1.67316 12.3262 0 8.4728 0ZM6.32735 1.23185C6.71455 1.23185 7.02742 1.54458 7.02742 1.93193C7.02742 2.31898 6.71455 2.632 6.32735 2.632C5.94015 2.632 5.62727 2.31913 5.62727 1.93193C5.62727 1.54458 5.94015 1.23185 6.32735 1.23185Z" fill="url(#paint0_linear_128_281)"></path><path d="M8.527 16C12.3029 16 12.3498 14.506 12.3498 14.2319C12.3498 13.774 12.3498 12.4 12.3498 12.4H8.45427V11.85C8.45427 11.85 12.5317 11.85 13.8906 11.85C15.0556 11.85 16.4998 11.1295 16.4998 8.03187C16.4998 4.63957 14.967 4.06372 14.2226 4.06372C13.8828 4.06372 12.8634 4.06372 12.8634 4.06372C12.8634 4.06372 12.8634 5.54968 12.8634 5.97281C12.8634 6.7715 12.4807 8.25005 10.6226 8.25005C8.30838 8.25005 7.78969 8.25005 6.76336 8.25005C6.19725 8.25005 4.59521 8.52583 4.59521 10.3455C4.59521 12.4509 4.59521 13.0022 4.59521 13.8682C4.59521 14.629 5.06009 16 8.527 16ZM10.6726 14.7682C10.2854 14.7682 9.97252 14.4553 9.97252 14.0681C9.97252 13.6809 10.2853 13.368 10.6726 13.368C11.0597 13.368 11.3727 13.6809 11.3727 14.0681C11.3727 14.4553 11.0597 14.7682 10.6726 14.7682Z" fill="url(#paint1_linear_128_281)"></path></g><defs><linearGradient id="paint0_linear_128_281" x1="1.99942" y1="1.42927" x2="9.95251" y2="9.40896" gradientUnits="userSpaceOnUse"><stop stop-color="#387EB8"></stop><stop offset="1" stop-color="#366994"></stop></linearGradient><linearGradient id="paint1_linear_128_281" x1="6.83245" y1="6.52758" x2="15.3593" y2="14.6967" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE052"></stop><stop offset="1" stop-color="#FFC331"></stop></linearGradient><clipPath id="clip0_128_281"><rect width="16" height="16" fill="white" transform="translate(0.5)"></rect></clipPath></defs></svg>`;
});
const TypeScript = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["width", "height"]);
  let { width = 16 } = $$props;
  let { height = 16 } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  return `<svg${spread(
    [
      { width: escape_attribute_value(width) },
      { height: escape_attribute_value(height) },
      escape_object($$restProps),
      { viewBox: "0 0 17 16" },
      { fill: "none" },
      { xmlns: "http://www.w3.org/2000/svg" }
    ],
    {}
  )}><g clip-path="url(#clip0_128_278)"><path d="M14.9375 0H2.0625C1.19956 0 0.5 0.699555 0.5 1.5625V14.4375C0.5 15.3004 1.19956 16 2.0625 16H14.9375C15.8004 16 16.5 15.3004 16.5 14.4375V1.5625C16.5 0.699555 15.8004 0 14.9375 0Z" fill="#3178C6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4062 12.7187V14.2812C10.6594 14.4125 10.9688 14.5094 11.3125 14.575C11.6562 14.6406 12.0312 14.6719 12.4062 14.6719C12.7812 14.6719 13.125 14.6375 13.4688 14.5656C13.8125 14.4937 14.0938 14.375 14.3438 14.2219C14.5969 14.0562 14.8125 13.8469 14.9375 13.5656C15.0625 13.2844 15.1594 12.9719 15.1594 12.5656C15.1594 12.2812 15.1156 12.0344 15.0312 11.8156C14.9469 11.5969 14.825 11.4094 14.6562 11.2531C14.4969 11.0875 14.3125 10.9406 14.0938 10.8156C13.875 10.6906 13.625 10.5594 13.3438 10.4406C13.1375 10.3562 12.9688 10.275 12.7812 10.1937C12.6188 10.1125 12.4781 10.0312 12.375 9.94998C12.2594 9.86561 12.1719 9.77811 12.1094 9.68748C12.0469 9.59373 12.0156 9.49061 12.0156 9.37498C12.0156 9.26873 12.0434 9.17186 12.1 9.08436C12.1566 8.99686 12.2344 8.92498 12.3344 8.86248C12.4344 8.79998 12.5594 8.75311 12.7094 8.71873C12.8563 8.68436 13.0188 8.66873 13.2094 8.66873C13.3406 8.66873 13.4781 8.67842 13.6156 8.69811C13.7594 8.7178 13.9063 8.74811 14.0531 8.78873C14.2 8.82936 14.3438 8.87936 14.4906 8.94186C14.6281 9.00436 14.7563 9.07623 14.8656 9.15748V7.68873C14.6281 7.59811 14.3656 7.52936 14.0844 7.48561C13.8031 7.44186 13.4906 7.41998 13.1156 7.41998C12.7406 7.41998 12.3969 7.46061 12.0531 7.53873C11.7094 7.61686 11.4281 7.74186 11.1781 7.91373C10.925 8.08248 10.7406 8.28873 10.5844 8.56998C10.4375 8.83248 10.3656 9.13248 10.3656 9.50748C10.3656 9.97623 10.5 10.3825 10.7719 10.695C11.0406 11.0387 11.4594 11.2887 11.9906 11.5387C12.2063 11.6262 12.3969 11.7137 12.5844 11.7981C12.7719 11.8825 12.9281 11.97 13.0531 12.0606C13.1875 12.1512 13.2938 12.2512 13.3656 12.3575C13.4438 12.4637 13.4844 12.5887 13.4844 12.7325C13.4844 12.8325 13.46 12.9262 13.4125 13.0137C13.365 13.1012 13.2906 13.1762 13.1906 13.2387C13.0906 13.3012 12.9688 13.3512 12.8156 13.3887C12.6688 13.4231 12.5031 13.4419 12.2844 13.4419C11.9406 13.4419 11.5969 13.3825 11.2844 13.2637C10.9406 13.145 10.6281 12.9669 10.3469 12.7325L10.4062 12.7187ZM7.78125 8.87498H9.78125V7.59373H4.1875V8.87498H6.1875V14.5937H7.78125V8.87498Z" fill="white"></path></g><defs><clipPath id="clip0_128_278"><rect width="16" height="16" fill="white" transform="translate(0.5)"></rect></clipPath></defs></svg>`;
});
const JavaScript = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = 16 } = $$props;
  let { height = 16 } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} viewBox="0 0 630 630"><rect width="630" height="630" fill="#f7df1e"></rect><path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"></path></svg>`;
});
const FetchIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<span class="text-sm text-blue-600 font-mono" data-svelte-h="svelte-1rffp19">HTTP</span>`;
});
const DockerIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { height = "24px" } = $$props;
  let { width = "24px" } = $$props;
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  return `<svg xmlns="http://www.w3.org/2000/svg" aria-label="Docker" role="img" viewBox="0 0 512 512" x="0px" y="0px"${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}><rect width="512" height="512" rx="15%" fill="#ffffff"></rect><path stroke="#066da5" stroke-width="38" d="M296 226h42m-92 0h42m-91 0h42m-91 0h41m-91 0h42m8-46h41m8 0h42m7 0h42m-42-46h42"></path><path fill="#066da5" d="m472 228s-18-17-55-11c-4-29-35-46-35-46s-29 35-8 74c-6 3-16 7-31 7H68c-5 19-5 145 133 145 99 0 173-46 208-130 52 4 63-39 63-39"></path></svg>`;
});
const RestIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { height = "24px" } = $$props;
  let { width = "24px" } = $$props;
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  return `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><g><path d="M732.4,557.3c-4.2-0.8-12.5-1.2-25.2-1.2h-16.9v49.3h19.2c13.7,0,23-1,27.6-2.8c4.7-1.8,8.3-4.7,11-8.6c2.7-3.9,4-8.3,4-13.5c0-6.3-1.8-11.6-5.5-15.7C742.8,560.9,738.1,558.3,732.4,557.3z M845.2,483.1c-13.4,0-26.4,1.8-38.8,5.3c2.2-10,3.4-20.4,3.4-31c0-79.2-63.9-143.4-142.6-143.4c-32.5,0-62.6,11-86.5,29.5C541.2,274,467,227.2,381.7,227.2c-117.6,0-214.4,89.2-227.3,203.8C72.6,444,10,515.1,10,600.8c0,95,76.8,172,171.4,172h663.7l0,0c80,0,144.9-64.9,144.9-144.9C990.1,547.9,925.3,483.1,845.2,483.1z M342.1,700.5h-35v-76.1h-68.5v76.1h-35V526.7h35v68.5h68.5v-68.5h35V700.5z M497.3,556.1h-51.2v144.4h-35V556.1h-51.4v-29.4h137.5V556.1z M639,556.1h-51.2v144.4h-35V556.1h-51.4v-29.4H639V556.1z M782.3,607.1c-3.9,7.2-8.8,13-14.7,17.1c-5.9,4.1-11.9,6.9-18.1,8.2c-8.3,1.7-20.4,2.5-36.3,2.5h-22.8v65.6h-35l0-173.8h56.1c21.2,0,35.1,0.8,41.6,2.7c9.9,2.7,18.2,8.3,25,17c6.6,8.7,10,20,10,33.9C788.1,590.8,786,599.9,782.3,607.1z"></path></g></svg>`;
});
const PowershellIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { height = "24px" } = $$props;
  let { width = "24px" } = $$props;
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  return `<svg version="1.1" id="Powershell" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} viewBox="0 0 128 128" enable-background="new 0 0 128 128" xml:space="preserve"><g><line fill="none" x1="0" y1="128" x2="0" y2="0"></line></g><line opacity="0" fill-rule="evenodd" clip-rule="evenodd" fill="#00FF18" x1="0" y1="128" x2="0" y2="0"></line><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="95.2667" y1="91.9263" x2="26.7" y2="30.68"><stop offset="0" style="stop-color:#A9C8FF"></stop><stop offset="1" style="stop-color:#C7E6FF"></stop></linearGradient><path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" fill="url(#SVGID_1_)" d="M9.033,109c-1.633,0-3.046-0.638-3.978-1.798
	c-0.952-1.185-1.279-2.814-0.896-4.47l17.986-77.911C22.899,21.557,26.062,19,29.349,19h89.623c1.634,0,3.047,0.638,3.978,1.798
	c0.952,1.184,1.279,2.814,0.896,4.47l-17.986,77.911c-0.753,3.264-3.917,5.822-7.203,5.822H9.033z"></path><g><g><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="26.5854" y1="30.7778" x2="93.5854" y2="90.2778"><stop offset="0" style="stop-color:#2D4664"></stop><stop offset="0.1689" style="stop-color:#29405B"></stop><stop offset="0.4445" style="stop-color:#1E2F43"></stop><stop offset="0.7902" style="stop-color:#0C131B"></stop><stop offset="1" style="stop-color:#000000"></stop></linearGradient><path fill-rule="evenodd" clip-rule="evenodd" fill="url(#SVGID_2_)" d="M118.5,20H29.634c-2.769,0-5.53,2.259-6.168,5.045
			L5.632,102.955C4.995,105.742,6.722,108,9.491,108h88.865c2.769,0,5.53-2.258,6.168-5.045l17.834-77.911
			C122.996,22.259,121.268,20,118.5,20z"></path></g></g><path fill-rule="evenodd" clip-rule="evenodd" fill="#2C5591" d="M64.165,87.558h21.613c2.513,0,4.55,2.125,4.55,4.746
	c0,2.621-2.037,4.747-4.55,4.747H64.165c-2.513,0-4.55-2.125-4.55-4.747C59.615,89.683,61.652,87.558,64.165,87.558z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#2C5591" d="M78.184,66.455c-0.372,0.749-1.144,1.575-2.509,2.534
	L35.562,97.798c-2.19,1.591-5.334,1.001-7.021-1.319c-1.687-2.32-1.28-5.49,0.91-7.082l36.173-26.194v-0.538L42.896,38.487
	c-1.854-1.972-1.661-5.161,0.431-7.124c2.092-1.962,5.29-1.954,7.144,0.018l27.271,29.012C79.29,62.04,79.405,64.534,78.184,66.455z
	"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M77.184,65.455c-0.372,0.749-1.144,1.575-2.509,2.534
	L34.562,96.798c-2.19,1.591-5.334,1.001-7.021-1.319c-1.687-2.32-1.28-5.49,0.91-7.082l36.173-26.194v-0.538L41.896,37.487
	c-1.854-1.972-1.661-5.161,0.431-7.124c2.092-1.962,5.29-1.954,7.144,0.018l27.271,29.012C78.29,61.04,78.405,63.534,77.184,65.455z
	"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M63.55,87h21.613c2.513,0,4.55,2.015,4.55,4.5
	c0,2.485-2.037,4.5-4.55,4.5H63.55C61.037,96,59,93.985,59,91.5C59,89.015,61.037,87,63.55,87z"></path></svg>`;
});
const SnowflakeIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { height = "24px" } = $$props;
  let { width = "24px" } = $$props;
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 146.36 139.16"${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} style="fill: currentcolor;"><g><path d="m134.81,60.1l-16.47,9.48,16.47,9.46c4.16,2.4,5.58,7.67,3.18,11.82-2.4,4.13-7.71,5.54-11.86,3.15l-29.5-16.96c-1.97-1.14-3.33-2.93-3.94-4.93-.29-.92-.42-1.88-.39-2.82.02-.68.12-1.36.31-2.04.59-2.11,1.97-4,4.02-5.19l29.5-16.94c4.15-2.38,9.46-.97,11.86,3.17,2.41,4.13.98,9.41-3.18,11.8Zm-15.6,45.96l-29.5-16.93c-1.58-.92-3.34-1.27-5.03-1.13-4.5.32-8.03,4.06-8.03,8.61v33.9c0,4.78,3.87,8.65,8.68,8.65s8.69-3.87,8.69-8.65v-18.96l16.52,9.49c4.15,2.4,9.46.98,11.85-3.15,2.39-4.14.98-9.44-3.18-11.83Zm-34.04-33.16l-12.26,12.19c-.35.36-1.03.65-1.54.65h-3.61c-.49,0-1.18-.29-1.54-.65l-12.26-12.19c-.35-.34-.63-1.03-.63-1.52v-3.59c0-.5.28-1.19.63-1.54l12.26-12.19c.36-.36,1.04-.64,1.54-.64h3.61c.5,0,1.19.28,1.54.64l12.26,12.19c.35.35.63,1.04.63,1.54v3.59c0,.49-.28,1.18-.63,1.52Zm-9.8-3.38c0-.49-.3-1.18-.65-1.54l-3.55-3.52c-.35-.35-1.04-.64-1.53-.64h-.14c-.49,0-1.18.29-1.53.64l-3.55,3.52c-.36.36-.63,1.05-.63,1.54v.14c0,.49.27,1.17.63,1.52l3.55,3.53c.35.35,1.03.64,1.53.64h.14c.49,0,1.18-.29,1.53-.64l3.55-3.53c.35-.35.65-1.03.65-1.52v-.14ZM19.93,33.08l29.5,16.95c1.58.91,3.34,1.27,5.04,1.13,4.49-.33,8.03-4.08,8.03-8.62V8.64c0-4.77-3.9-8.64-8.68-8.64s-8.69,3.87-8.69,8.64v18.97l-16.53-9.5c-4.14-2.39-9.45-.97-11.85,3.16-2.39,4.15-.98,9.43,3.17,11.82Zm64.76,18.08c1.69.14,3.45-.22,5.03-1.13l29.5-16.95c4.16-2.39,5.57-7.67,3.18-11.82-2.39-4.13-7.7-5.55-11.85-3.16l-16.52,9.5V8.64c0-4.77-3.88-8.64-8.69-8.64s-8.68,3.87-8.68,8.64v33.9c0,4.55,3.53,8.29,8.03,8.62Zm-30.22,36.84c-1.69-.14-3.46.21-5.04,1.13l-29.5,16.93c-4.15,2.39-5.57,7.69-3.17,11.83,2.41,4.13,7.71,5.55,11.85,3.15l16.53-9.49v18.96c0,4.78,3.88,8.65,8.69,8.65s8.68-3.87,8.68-8.65v-33.9c0-4.55-3.54-8.29-8.03-8.61Zm-8-15.88c.29-.92.42-1.88.39-2.82-.03-.68-.12-1.36-.32-2.04-.58-2.11-1.97-4-4.04-5.19l-29.48-16.94c-4.16-2.38-9.47-.97-11.86,3.17-2.41,4.13-.99,9.41,3.17,11.8l16.47,9.48-16.47,9.46c-4.16,2.4-5.58,7.67-3.17,11.82,2.39,4.13,7.69,5.54,11.86,3.15l29.48-16.96c1.99-1.14,3.34-2.93,3.96-4.93ZM139.62,15.91h-1.32v1.62h1.32c.61,0,1.01-.28,1.01-.8,0-.55-.37-.83-1.01-.83Zm-2.94-1.5h2.97c1.62,0,2.7.89,2.7,2.27,0,.86-.43,1.5-1.07,1.9l1.16,1.69v.34h-1.69l-1.13-1.62h-1.32v1.62h-1.62v-6.19Zm8.31,3.22c0-3.31-2.21-5.82-5.58-5.82s-5.52,2.39-5.52,5.82,2.21,5.82,5.52,5.82,5.58-2.51,5.58-5.82Zm1.38,0c0,3.89-2.61,7.14-6.96,7.14s-6.9-3.28-6.9-7.14,2.57-7.14,6.9-7.14,6.96,3.25,6.96,7.14Z"></path></g></svg>`;
});
const BunIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { height = 24 } = $$props;
  let { width = 24 } = $$props;
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  return `<svg id="Bun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 70"${add_attribute("width", `${width}px`, 0)}${add_attribute("height", `${height}px`, 0)}><title>Bun Logo</title><path id="Shadow" d="M71.09,20.74c-.16-.17-.33-.34-.5-.5s-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5A26.46,26.46,0,0,1,75.5,35.7c0,16.57-16.82,30.05-37.5,30.05-11.58,0-21.94-4.23-28.83-10.86l.5.5.5.5.5.5.5.5.5.5.5.5.5.5C19.55,65.3,30.14,69.75,42,69.75c20.68,0,37.5-13.48,37.5-30C79.5,32.69,76.46,26,71.09,20.74Z"></path><g id="Body"><path id="Background" d="M73,35.7c0,15.21-15.67,27.54-35,27.54S3,50.91,3,35.7C3,26.27,9,17.94,18.22,13S33.18,3,38,3s8.94,4.13,19.78,10C67,17.94,73,26.27,73,35.7Z" style="fill:#fbf0df"></path><path id="Bottom_Shadow" data-name="Bottom Shadow" d="M73,35.7a21.67,21.67,0,0,0-.8-5.78c-2.73,33.3-43.35,34.9-59.32,24.94A40,40,0,0,0,38,63.24C57.3,63.24,73,50.89,73,35.7Z" style="fill:#f6dece"></path><path id="Light_Shine" data-name="Light Shine" d="M24.53,11.17C29,8.49,34.94,3.46,40.78,3.45A9.29,9.29,0,0,0,38,3c-2.42,0-5,1.25-8.25,3.13-1.13.66-2.3,1.39-3.54,2.15-2.33,1.44-5,3.07-8,4.7C8.69,18.13,3,26.62,3,35.7c0,.4,0,.8,0,1.19C9.06,15.48,20.07,13.85,24.53,11.17Z" style="fill:#fffefc"></path><path id="Top" d="M35.12,5.53A16.41,16.41,0,0,1,29.49,18c-.28.25-.06.73.3.59,3.37-1.31,7.92-5.23,6-13.14C35.71,5,35.12,5.12,35.12,5.53Zm2.27,0A16.24,16.24,0,0,1,39,19c-.12.35.31.65.55.36C41.74,16.56,43.65,11,37.93,5,37.64,4.74,37.19,5.14,37.39,5.49Zm2.76-.17A16.42,16.42,0,0,1,47,17.12a.33.33,0,0,0,.65.11c.92-3.49.4-9.44-7.17-12.53C40.08,4.54,39.82,5.08,40.15,5.32ZM21.69,15.76a16.94,16.94,0,0,0,10.47-9c.18-.36.75-.22.66.18-1.73,8-7.52,9.67-11.12,9.45C21.32,16.4,21.33,15.87,21.69,15.76Z" style="fill:#ccbea7;fill-rule:evenodd"></path><path id="Outline" d="M38,65.75C17.32,65.75.5,52.27.5,35.7c0-10,6.18-19.33,16.53-24.92,3-1.6,5.57-3.21,7.86-4.62,1.26-.78,2.45-1.51,3.6-2.19C32,1.89,35,.5,38,.5s5.62,1.2,8.9,3.14c1,.57,2,1.19,3.07,1.87,2.49,1.54,5.3,3.28,9,5.27C69.32,16.37,75.5,25.69,75.5,35.7,75.5,52.27,58.68,65.75,38,65.75ZM38,3c-2.42,0-5,1.25-8.25,3.13-1.13.66-2.3,1.39-3.54,2.15-2.33,1.44-5,3.07-8,4.7C8.69,18.13,3,26.62,3,35.7,3,50.89,18.7,63.25,38,63.25S73,50.89,73,35.7C73,26.62,67.31,18.13,57.78,13,54,11,51.05,9.12,48.66,7.64c-1.09-.67-2.09-1.29-3-1.84C42.63,4,40.42,3,38,3Z"></path></g><g id="Mouth"><g id="Background-2" data-name="Background"><path d="M45.05,43a8.93,8.93,0,0,1-2.92,4.71,6.81,6.81,0,0,1-4,1.88A6.84,6.84,0,0,1,34,47.71,8.93,8.93,0,0,1,31.12,43a.72.72,0,0,1,.8-.81H44.26A.72.72,0,0,1,45.05,43Z" style="fill:#b71422"></path></g><g id="Tongue"><path id="Background-3" data-name="Background" d="M34,47.79a6.91,6.91,0,0,0,4.12,1.9,6.91,6.91,0,0,0,4.11-1.9,10.63,10.63,0,0,0,1-1.07,6.83,6.83,0,0,0-4.9-2.31,6.15,6.15,0,0,0-5,2.78C33.56,47.4,33.76,47.6,34,47.79Z" style="fill:#ff6164"></path><path id="Outline-2" data-name="Outline" d="M34.16,47a5.36,5.36,0,0,1,4.19-2.08,6,6,0,0,1,4,1.69c.23-.25.45-.51.66-.77a7,7,0,0,0-4.71-1.93,6.36,6.36,0,0,0-4.89,2.36A9.53,9.53,0,0,0,34.16,47Z"></path></g><path id="Outline-3" data-name="Outline" d="M38.09,50.19a7.42,7.42,0,0,1-4.45-2,9.52,9.52,0,0,1-3.11-5.05,1.2,1.2,0,0,1,.26-1,1.41,1.41,0,0,1,1.13-.51H44.26a1.44,1.44,0,0,1,1.13.51,1.19,1.19,0,0,1,.25,1h0a9.52,9.52,0,0,1-3.11,5.05A7.42,7.42,0,0,1,38.09,50.19Zm-6.17-7.4c-.16,0-.2.07-.21.09a8.29,8.29,0,0,0,2.73,4.37A6.23,6.23,0,0,0,38.09,49a6.28,6.28,0,0,0,3.65-1.73,8.3,8.3,0,0,0,2.72-4.37.21.21,0,0,0-.2-.09Z"></path></g><g id="Face"><ellipse id="Right_Blush" data-name="Right Blush" cx="53.22" cy="40.18" rx="5.85" ry="3.44" style="fill:#febbd0"></ellipse><ellipse id="Left_Bluch" data-name="Left Bluch" cx="22.95" cy="40.18" rx="5.85" ry="3.44" style="fill:#febbd0"></ellipse><path id="Eyes" d="M25.7,38.8a5.51,5.51,0,1,0-5.5-5.51A5.51,5.51,0,0,0,25.7,38.8Zm24.77,0A5.51,5.51,0,1,0,45,33.29,5.5,5.5,0,0,0,50.47,38.8Z" style="fill-rule:evenodd"></path><path id="Iris" d="M24,33.64a2.07,2.07,0,1,0-2.06-2.07A2.07,2.07,0,0,0,24,33.64Zm24.77,0a2.07,2.07,0,1,0-2.06-2.07A2.07,2.07,0,0,0,48.75,33.64Z" style="fill:#fff;fill-rule:evenodd"></path></g></svg>`;
});
const DenoIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { height = 24 } = $$props;
  let { width = 24 } = $$props;
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  return `<svg class="text-black dark:text-gray-900" viewBox="0 0 30 30"${add_attribute("width", `${width}px`, 0)}${add_attribute("height", `${height}px`, 0)} xmlns="http://www.w3.org/2000/svg" aria-label="Deno Logo"><g clip-path="url(#clip0_29_599)"><path d="M15 0C23.2843 0 30 6.71572 30 15C30 23.2843 23.2843 30 15 30C6.71572 30 0 23.2843 0 15C0 6.71572 6.71572 0 15 0Z" fill="currentColor"></path><path d="M14.6635 22.3394C14.2788 22.2357 13.8831 22.4584 13.7705 22.8381L13.7655 22.8558L12.7694 26.5472L12.7649 26.565C12.6711 26.9498 12.9011 27.3414 13.2858 27.4451C13.6704 27.549 14.0661 27.3263 14.1787 26.9465L14.1837 26.9289L15.1797 23.2375L15.1843 23.2196C15.1911 23.1919 15.1962 23.164 15.1997 23.1362L15.2026 23.1084L15.179 22.9888L15.1445 22.8166L15.1227 22.7091C15.076 22.619 15.0111 22.5396 14.932 22.4759C14.853 22.4123 14.7615 22.3658 14.6635 22.3394ZM7.7224 18.5379C7.70424 18.5741 7.68883 18.6123 7.67658 18.6522L7.66967 18.6763L6.67358 22.3677L6.669 22.3856C6.57525 22.7704 6.80524 23.1619 7.1899 23.2657C7.57451 23.3695 7.97026 23.1469 8.08287 22.7671L8.08779 22.7494L8.99096 19.4023C8.51793 19.1518 8.09336 18.8628 7.7224 18.5379ZM5.34707 14.2929C4.9624 14.1891 4.56666 14.4117 4.4541 14.7915L4.44912 14.8092L3.45303 18.5006L3.44846 18.5184C3.35471 18.9032 3.58469 19.2947 3.96936 19.3985C4.35397 19.5023 4.74971 19.2797 4.86232 18.8999L4.86725 18.8822L5.86334 15.1908L5.86791 15.173C5.96166 14.7882 5.73174 14.3967 5.34707 14.2929ZM27.682 13.4546C27.2973 13.3508 26.9015 13.5734 26.789 13.9532L26.784 13.9709L25.7879 17.6623L25.7833 17.6801C25.6896 18.0649 25.9196 18.4564 26.3042 18.5602C26.6889 18.664 27.0846 18.4414 27.1972 18.0616L27.2021 18.0439L28.1982 14.3525L28.2028 14.3347C28.2965 13.9499 28.0666 13.5584 27.682 13.4546ZM3.17781 8.52527C2.34361 10.0444 1.81243 11.7112 1.61377 13.4329C1.7088 13.5412 1.83381 13.619 1.97301 13.6563C2.35768 13.7602 2.75342 13.5375 2.86598 13.1577L2.87096 13.1401L3.86705 9.44865L3.87162 9.43084C3.96537 9.04599 3.73539 8.65447 3.35072 8.5507C3.2943 8.53547 3.23623 8.52694 3.17781 8.52527ZM25.159 8.5507C24.7744 8.44687 24.3786 8.66953 24.266 9.04933L24.2611 9.06697L23.265 12.7584L23.2604 12.7762C23.1667 13.161 23.3966 13.5526 23.7813 13.6563C24.1659 13.7602 24.5617 13.5375 24.6743 13.1577L24.6792 13.1401L25.6753 9.44865L25.6799 9.43084C25.7736 9.04599 25.5436 8.65447 25.159 8.5507Z" fill="white"></path><path d="M7.51285 5.04065C7.12824 4.93682 6.73249 5.15948 6.61988 5.53929L6.61495 5.55692L5.61886 9.24833L5.61429 9.26614C5.52054 9.65098 5.75052 10.0425 6.13519 10.1463C6.5198 10.2501 6.91554 10.0274 7.02816 9.64764L7.03308 9.63001L8.02917 5.9386L8.03374 5.92079C8.12749 5.53595 7.89751 5.14442 7.51285 5.04065ZM20.3116 5.73845C19.9269 5.63462 19.5312 5.85727 19.4186 6.23708L19.4136 6.25471L18.7443 8.73499C19.1779 8.94915 19.5917 9.20126 19.9809 9.48839L20.0453 9.53643L20.8279 6.63639L20.8324 6.61858C20.9262 6.23374 20.6963 5.84221 20.3116 5.73845ZM13.7968 1.57642C13.3296 1.61771 12.8647 1.68338 12.4043 1.77317L12.3066 1.79263L11.3782 5.23419L11.3736 5.252C11.2799 5.63684 11.5099 6.02837 11.8945 6.13214C12.2792 6.23596 12.6749 6.01331 12.7875 5.6335L12.7924 5.61587L13.7885 1.92446L13.7931 1.90665C13.8196 1.79831 13.8209 1.68533 13.7968 1.57642ZM22.9626 4.1263L22.7669 4.85169L22.7623 4.86944C22.6686 5.25429 22.8986 5.64581 23.2832 5.74958C23.6678 5.85341 24.0636 5.63075 24.1762 5.25095L24.1811 5.23331L24.2025 5.15462C23.8362 4.81205 23.4511 4.49009 23.0491 4.19022L22.9626 4.1263ZM17.1672 1.69677L16.8139 3.00593L16.8094 3.02374C16.7156 3.40858 16.9456 3.80011 17.3303 3.90388C17.7149 4.0077 18.1106 3.78505 18.2233 3.40524L18.2282 3.38761L18.6 2.00966C18.1624 1.88867 17.719 1.79001 17.2714 1.71405L17.1672 1.69677Z" fill="white"></path><path d="M9.69085 24.6253C9.80341 24.2455 10.1992 24.0229 10.5838 24.1266C10.9685 24.2303 11.1984 24.6219 11.1047 25.0068L11.1001 25.0246L10.3872 27.6664L10.2876 27.6297C9.85836 27.4694 9.43765 27.2873 9.0271 27.0839L9.68587 24.6429L9.69085 24.6253Z" fill="white"></path><path d="M14.4141 8.49082C10.0522 8.49082 6.65918 11.2368 6.65918 14.6517C6.65918 17.8769 9.78123 19.9362 14.6211 19.8331C15.0327 19.8243 15.1517 20.1008 15.2856 20.4734C15.4196 20.846 15.7796 22.8097 16.0665 24.3117C16.3233 25.656 16.5842 27.0052 16.7834 28.3596C19.9439 27.9418 22.8663 26.3807 25.0076 24.0261L22.7237 15.5088C22.1544 13.4518 21.489 11.5564 19.7283 10.1794C18.3118 9.07166 16.5122 8.49082 14.4141 8.49082Z" fill="white"></path><path d="M15.3516 10.957C15.8694 10.957 16.2891 11.3767 16.2891 11.8945C16.2891 12.4123 15.8694 12.832 15.3516 12.832C14.8338 12.832 14.4141 12.4123 14.4141 11.8945C14.4141 11.3767 14.8338 10.957 15.3516 10.957Z" fill="currentColor"></path></g><defs><clipPath id="clip0_29_599"><rect width="30" height="30" fill="white"></rect></clipPath></defs></svg>`;
});
const PHPIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { height = "24px" } = $$props;
  let { width = "24px" } = $$props;
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  return `<svg${add_attribute("height", height, 0)}${add_attribute("width", width, 0)} id="svg3430" version="1.1" viewBox="0 0 711.20123 383.5975" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><title id="title3510">Official PHP Logo</title><defs id="defs3434"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath3444"><path d="M 11.52,162 C 11.52,81.677 135.307,16.561 288,16.561 l 0,0 c 152.693,0 276.481,65.116 276.481,145.439 l 0,0 c 0,80.322 -123.788,145.439 -276.481,145.439 l 0,0 C 135.307,307.439 11.52,242.322 11.52,162" id="path3446"></path></clipPath><radialGradient cx="0" cy="0" fx="0" fy="0" gradientTransform="matrix(363.05789,0,0,-363.05789,177.52002,256.30713)" gradientUnits="userSpaceOnUse" id="radialGradient3452" r="1" spreadMethod="pad"><stop id="stop3454" offset="0" style="stop-opacity:1;stop-color:#aeb2d5"></stop><stop id="stop3456" offset="0.3" style="stop-opacity:1;stop-color:#aeb2d5"></stop><stop id="stop3458" offset="0.75" style="stop-opacity:1;stop-color:#484c89"></stop><stop id="stop3460" offset="1" style="stop-opacity:1;stop-color:#484c89"></stop></radialGradient><clipPath clipPathUnits="userSpaceOnUse" id="clipPath3468"><path d="M 0,324 576,324 576,0 0,0 0,324 Z" id="path3470"></path></clipPath><clipPath clipPathUnits="userSpaceOnUse" id="clipPath3480"><path d="M 0,324 576,324 576,0 0,0 0,324 Z" id="path3482"></path></clipPath></defs><g id="g3438" transform="matrix(1.25,0,0,-1.25,-4.4,394.29875)"><g id="g3440"><g clip-path="url(#clipPath3444)" id="g3442"><g id="g3448"><g id="g3450"><path d="M 11.52,162 C 11.52,81.677 135.307,16.561 288,16.561 l 0,0 c 152.693,0 276.481,65.116 276.481,145.439 l 0,0 c 0,80.322 -123.788,145.439 -276.481,145.439 l 0,0 C 135.307,307.439 11.52,242.322 11.52,162" id="path3462" style="fill:url(#radialGradient3452);stroke:none"></path></g></g></g></g><g id="g3464"><g clip-path="url(#clipPath3468)" id="g3466"><g id="g3472" transform="translate(288,27.3594)"><path d="M 0,0 C 146.729,0 265.68,60.281 265.68,134.641 265.68,209 146.729,269.282 0,269.282 -146.729,269.282 -265.68,209 -265.68,134.641 -265.68,60.281 -146.729,0 0,0" id="path3474" style="fill:#777bb3;fill-opacity:1;fill-rule:nonzero;stroke:none"></path></g></g></g><g id="g3476"><g clip-path="url(#clipPath3480)" id="g3478"><g id="g3484" transform="translate(161.7344,145.3066)"><path d="m 0,0 c 12.065,0 21.072,2.225 26.771,6.611 5.638,4.341 9.532,11.862 11.573,22.353 1.903,9.806 1.178,16.653 -2.154,20.348 C 32.783,53.086 25.417,55 14.297,55 L -4.984,55 -15.673,0 0,0 Z m -63.063,-67.75 c -0.895,0 -1.745,0.4 -2.314,1.092 -0.57,0.691 -0.801,1.601 -0.63,2.48 L -37.679,81.573 C -37.405,82.982 -36.17,84 -34.734,84 L 26.32,84 C 45.508,84 59.79,78.79 68.767,68.513 77.792,58.182 80.579,43.741 77.05,25.592 75.614,18.198 73.144,11.331 69.709,5.183 66.27,-0.972 61.725,-6.667 56.198,-11.747 49.582,-17.939 42.094,-22.429 33.962,-25.071 25.959,-27.678 15.681,-29 3.414,-29 l -24.722,0 -7.06,-36.322 c -0.274,-1.41 -1.508,-2.428 -2.944,-2.428 l -31.751,0 z" id="path3486" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"></path></g><g id="g3488" transform="translate(159.2236,197.3071)"><path d="m 0,0 16.808,0 c 13.421,0 18.083,-2.945 19.667,-4.7 2.628,-2.914 3.124,-9.058 1.435,-17.767 C 36.012,-32.217 32.494,-39.13 27.452,-43.012 22.29,-46.986 13.898,-49 2.511,-49 L -9.523,-49 0,0 Z m 28.831,35 -61.055,0 c -2.872,0 -5.341,-2.036 -5.889,-4.855 l -28.328,-145.751 c -0.342,-1.759 0.12,-3.578 1.259,-4.961 1.14,-1.383 2.838,-2.183 4.63,-2.183 l 31.75,0 c 2.873,0 5.342,2.036 5.89,4.855 l 6.588,33.895 22.249,0 c 12.582,0 23.174,1.372 31.479,4.077 8.541,2.775 16.399,7.48 23.354,13.984 5.752,5.292 10.49,11.232 14.08,17.657 3.591,6.427 6.171,13.594 7.668,21.302 3.715,19.104 0.697,34.402 -8.969,45.466 C 63.965,29.444 48.923,35 28.831,35 m -45.633,-90 19.313,0 c 12.801,0 22.336,2.411 28.601,7.234 6.266,4.824 10.492,12.875 12.688,24.157 2.101,10.832 1.144,18.476 -2.871,22.929 C 36.909,3.773 28.87,6 16.808,6 L -4.946,6 -16.802,-55 M 28.831,29 C 47.198,29 60.597,24.18 69.019,14.539 77.44,4.898 79.976,-8.559 76.616,-25.836 75.233,-32.953 72.894,-39.46 69.601,-45.355 66.304,-51.254 61.999,-56.648 56.679,-61.539 50.339,-67.472 43.296,-71.7 35.546,-74.218 27.796,-76.743 17.925,-78 5.925,-78 l -27.196,0 -7.531,-38.75 -31.75,0 28.328,145.75 61.055,0" id="path3490" style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"></path></g><g id="g3492" transform="translate(311.583,116.3066)"><path d="m 0,0 c -0.896,0 -1.745,0.4 -2.314,1.092 -0.571,0.691 -0.802,1.6 -0.631,2.48 L 9.586,68.061 C 10.778,74.194 10.484,78.596 8.759,80.456 7.703,81.593 4.531,83.5 -4.848,83.5 L -27.55,83.5 -43.305,2.428 C -43.579,1.018 -44.814,0 -46.25,0 l -31.5,0 c -0.896,0 -1.745,0.4 -2.315,1.092 -0.57,0.691 -0.801,1.601 -0.63,2.48 l 28.328,145.751 c 0.274,1.409 1.509,2.427 2.945,2.427 l 31.5,0 c 0.896,0 1.745,-0.4 2.315,-1.091 0.57,-0.692 0.801,-1.601 0.63,-2.481 L -21.813,113 2.609,113 c 18.605,0 31.221,-3.28 38.569,-10.028 7.49,-6.884 9.827,-17.891 6.947,-32.719 L 34.945,2.428 C 34.671,1.018 33.437,0 32,0 L 0,0 Z" id="path3494" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"></path></g><g id="g3496" transform="translate(293.6611,271.0571)"><path d="m 0,0 -31.5,0 c -2.873,0 -5.342,-2.036 -5.89,-4.855 l -28.328,-145.751 c -0.342,-1.759 0.12,-3.578 1.26,-4.961 1.14,-1.383 2.838,-2.183 4.63,-2.183 l 31.5,0 c 2.872,0 5.342,2.036 5.89,4.855 l 15.283,78.645 20.229,0 c 9.363,0 11.328,-2 11.407,-2.086 0.568,-0.611 1.315,-3.441 0.082,-9.781 l -12.531,-64.489 c -0.342,-1.759 0.12,-3.578 1.26,-4.961 1.14,-1.383 2.838,-2.183 4.63,-2.183 l 32,0 c 2.872,0 5.342,2.036 5.89,4.855 l 13.179,67.825 c 3.093,15.921 0.447,27.864 -7.861,35.5 -7.928,7.281 -21.208,10.82 -40.599,10.82 l -20.784,0 6.143,31.605 C 6.231,-5.386 5.77,-3.566 4.63,-2.184 3.49,-0.801 1.792,0 0,0 m 0,-6 -7.531,-38.75 28.062,0 c 17.657,0 29.836,-3.082 36.539,-9.238 6.703,-6.16 8.711,-16.141 6.032,-29.938 l -13.18,-67.824 -32,0 12.531,64.488 c 1.426,7.336 0.902,12.34 -1.574,15.008 -2.477,2.668 -7.746,4.004 -15.805,4.004 l -25.176,0 -16.226,-83.5 -31.5,0 L -31.5,-6 0,-6" id="path3498" style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"></path></g><g id="g3500" transform="translate(409.5498,145.3066)"><path d="m 0,0 c 12.065,0 21.072,2.225 26.771,6.611 5.638,4.34 9.532,11.861 11.574,22.353 1.903,9.806 1.178,16.653 -2.155,20.348 C 32.783,53.086 25.417,55 14.297,55 L -4.984,55 -15.673,0 0,0 Z m -63.062,-67.75 c -0.895,0 -1.745,0.4 -2.314,1.092 -0.57,0.691 -0.802,1.601 -0.631,2.48 L -37.679,81.573 C -37.404,82.982 -36.17,84 -34.733,84 L 26.32,84 C 45.509,84 59.79,78.79 68.768,68.513 77.793,58.183 80.579,43.742 77.051,25.592 75.613,18.198 73.144,11.331 69.709,5.183 66.27,-0.972 61.725,-6.667 56.198,-11.747 49.582,-17.939 42.094,-22.429 33.962,-25.071 25.959,-27.678 15.681,-29 3.414,-29 l -24.723,0 -7.057,-36.322 c -0.275,-1.41 -1.509,-2.428 -2.946,-2.428 l -31.75,0 z" id="path3502" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"></path></g><g id="g3504" transform="translate(407.0391,197.3071)"><path d="M 0,0 16.808,0 C 30.229,0 34.891,-2.945 36.475,-4.7 39.104,-7.614 39.6,-13.758 37.91,-22.466 36.012,-32.217 32.493,-39.13 27.452,-43.012 22.29,-46.986 13.898,-49 2.511,-49 L -9.522,-49 0,0 Z m 28.831,35 -61.054,0 c -2.872,0 -5.341,-2.036 -5.889,-4.855 L -66.44,-115.606 c -0.342,-1.759 0.12,-3.578 1.259,-4.961 1.14,-1.383 2.838,-2.183 4.63,-2.183 l 31.75,0 c 2.872,0 5.342,2.036 5.89,4.855 l 6.587,33.895 22.249,0 c 12.582,0 23.174,1.372 31.479,4.077 8.541,2.775 16.401,7.481 23.356,13.986 5.752,5.291 10.488,11.23 14.078,17.655 3.591,6.427 6.171,13.594 7.668,21.302 3.715,19.105 0.697,34.403 -8.969,45.467 C 63.965,29.444 48.924,35 28.831,35 m -45.632,-90 19.312,0 c 12.801,0 22.336,2.411 28.601,7.234 6.267,4.824 10.492,12.875 12.688,24.157 2.102,10.832 1.145,18.476 -2.871,22.929 C 36.909,3.773 28.87,6 16.808,6 L -4.946,6 -16.801,-55 M 28.831,29 C 47.198,29 60.597,24.18 69.019,14.539 77.441,4.898 79.976,-8.559 76.616,-25.836 75.233,-32.953 72.894,-39.46 69.601,-45.355 66.304,-51.254 61.999,-56.648 56.679,-61.539 50.339,-67.472 43.296,-71.7 35.546,-74.218 27.796,-76.743 17.925,-78 5.925,-78 l -27.196,0 -7.53,-38.75 -31.75,0 28.328,145.75 61.054,0" id="path3506" style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"></path></g></g></g></g></svg>`;
});
const LanguageIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["lang", "width", "height", "scale"]);
  let { lang } = $$props;
  let { width = 30 } = $$props;
  let { height = 30 } = $$props;
  let { scale = 1 } = $$props;
  const languageLabel = {
    python3: "Python",
    deno: "TypeScript",
    go: "Go",
    bash: "Bash",
    powershell: "PowerShell",
    nativets: "HTTP",
    bunnative: "HTTP",
    graphql: "GraphQL",
    postgresql: "Postgresql",
    bigquery: "BigQuery",
    snowflake: "Snowflake",
    mysql: "MySQL",
    mssql: "MS SQL Server",
    bun: "TypeScript",
    php: "PHP"
  };
  const langToComponent = {
    go: Go,
    python3: Python,
    deno: TypeScript,
    // graphql: TypeScriptIcon,
    bun: TypeScript,
    bunnative: RestIcon,
    bash: Bash,
    pgsql: PostgresIcon,
    mysql: Mysql,
    bigquery: BigQueryIcon,
    snowflake: SnowflakeIcon,
    mssql: MSSqlServerIcon,
    javascript: JavaScript,
    fetch: FetchIcon,
    docker: DockerIcon,
    powershell: PowershellIcon,
    postgresql: PostgresIcon,
    nativets: RestIcon,
    graphql: GraphqlIcon,
    php: PHPIcon
  };
  let subIconScale = width === 30 ? 0.6 : 0.8;
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0) $$bindings.lang(lang);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0) $$bindings.scale(scale);
  return `<div class="relative">${validate_component(langToComponent[lang] || missing_component, "svelte:component").$$render($$result, Object.assign({}, { title: languageLabel[lang] }, { width: width * scale }, { height: height * scale }, $$restProps), {}, {})} ${lang === "deno" ? `<div class="absolute -top-1.5 -right-1.5 bg-surface rounded-full flex items-center"${add_attribute("style", `width: ${width * scale * subIconScale}px; height: ${height * scale * subIconScale}px;`, 0)}>${validate_component(DenoIcon, "DenoIcon").$$render(
    $$result,
    {
      width: width * scale * subIconScale,
      height: height * scale * subIconScale
    },
    {},
    {}
  )}</div>` : ``} ${lang === "bun" ? `<div class="absolute -top-1.5 -right-1.5 bg-surface rounded-full flex items-center justify-center"${add_attribute("style", `width: ${width * scale * subIconScale}px; height: ${height * scale * subIconScale}px;`, 0)}>${validate_component(BunIcon, "BunIcon").$$render(
    $$result,
    {
      width: width * scale * (subIconScale - 0.1),
      height: height * scale * (subIconScale - 0.1)
    },
    {},
    {}
  )}</div>` : ``}</div>`;
});
const css = {
  code: ".module.svelte-vr8w6z:hover .trash.svelte-vr8w6z{display:flex!important}",
  map: null
};
const FlowModuleSchemaItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let $copilotCurrentStepStore, $$unsubscribe_copilotCurrentStepStore;
  let $flowInputsStore, $$unsubscribe_flowInputsStore;
  let { selected = false } = $$props;
  let { deletable = false } = $$props;
  let { retry = false } = $$props;
  let { cache = false } = $$props;
  let { earlyStop = false } = $$props;
  let { suspend = false } = $$props;
  let { sleep = false } = $$props;
  let { mock = false } = $$props;
  let { bold = false } = $$props;
  let { id = void 0 } = $$props;
  let { label } = $$props;
  let { modType = void 0 } = $$props;
  let { bgColor = "" } = $$props;
  let { concurrency = false } = $$props;
  let { retries = void 0 } = $$props;
  let { warningMessage = void 0 } = $$props;
  const { flowInputsStore } = getContext("FlowGraphContext");
  $$unsubscribe_flowInputsStore = subscribe(flowInputsStore, (value) => $flowInputsStore = value);
  createEventDispatcher();
  const { currentStepStore: copilotCurrentStepStore } = getContext("FlowCopilotContext") || {};
  $$unsubscribe_copilotCurrentStepStore = subscribe(copilotCurrentStepStore, (value) => $copilotCurrentStepStore = value);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0) $$bindings.selected(selected);
  if ($$props.deletable === void 0 && $$bindings.deletable && deletable !== void 0) $$bindings.deletable(deletable);
  if ($$props.retry === void 0 && $$bindings.retry && retry !== void 0) $$bindings.retry(retry);
  if ($$props.cache === void 0 && $$bindings.cache && cache !== void 0) $$bindings.cache(cache);
  if ($$props.earlyStop === void 0 && $$bindings.earlyStop && earlyStop !== void 0) $$bindings.earlyStop(earlyStop);
  if ($$props.suspend === void 0 && $$bindings.suspend && suspend !== void 0) $$bindings.suspend(suspend);
  if ($$props.sleep === void 0 && $$bindings.sleep && sleep !== void 0) $$bindings.sleep(sleep);
  if ($$props.mock === void 0 && $$bindings.mock && mock !== void 0) $$bindings.mock(mock);
  if ($$props.bold === void 0 && $$bindings.bold && bold !== void 0) $$bindings.bold(bold);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.modType === void 0 && $$bindings.modType && modType !== void 0) $$bindings.modType(modType);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0) $$bindings.bgColor(bgColor);
  if ($$props.concurrency === void 0 && $$bindings.concurrency && concurrency !== void 0) $$bindings.concurrency(concurrency);
  if ($$props.retries === void 0 && $$bindings.retries && retries !== void 0) $$bindings.retries(retries);
  if ($$props.warningMessage === void 0 && $$bindings.warningMessage && warningMessage !== void 0) $$bindings.warningMessage(warningMessage);
  $$result.css.add(css);
  $$unsubscribe_copilotCurrentStepStore();
  $$unsubscribe_flowInputsStore();
  return `  <div class="${escape(
    null_to_empty(classNames(
      "w-full module flex rounded-sm cursor-pointer",
      selected ? "outline outline-offset-1 outline-2  outline-gray-600 dark:outline-gray-400" : "",
      "flex relative",
      $copilotCurrentStepStore === id ? "z-[901]" : ""
    )),
    true
  ) + " svelte-vr8w6z"}" style="${"width: 275px; height: 34px; background-color: " + escape(bgColor, true) + ";"}"><div class="absolute text-sm right-12 -bottom-3 flex flex-row gap-1 z-10">${retry ? `${validate_component(Popover, "Popover").$$render($$result, { notClickable: true }, {}, {
    text: () => {
      return `Retries`;
    },
    default: () => {
      return `<div class="center-center rounded border bg-surface border-gray-400 text-secondary px-1 py-0.5">${retries ? `<span class="text-red-400 mr-2">${escape(retries)}</span>` : ``} ${validate_component(Repeat, "Repeat").$$render($$result, { size: 14 }, {}, {})}</div>`;
    }
  })}` : ``} ${concurrency ? `${validate_component(Popover, "Popover").$$render($$result, { notClickable: true }, {}, {
    text: () => {
      return `Concurrency Limits`;
    },
    default: () => {
      return `<div class="center-center rounded border bg-surface border-gray-400 text-secondary px-1 py-0.5">${validate_component(Gauge, "Gauge").$$render($$result, { size: 14 }, {}, {})}</div>`;
    }
  })}` : ``} ${cache ? `${validate_component(Popover, "Popover").$$render($$result, { notClickable: true }, {}, {
    text: () => {
      return `Cached`;
    },
    default: () => {
      return `<div class="center-center rounded border bg-surface border-gray-400 text-secondary px-1 py-0.5">${validate_component(Database, "Database").$$render($$result, { size: 14 }, {}, {})}</div>`;
    }
  })}` : ``} ${earlyStop ? `${validate_component(Popover, "Popover").$$render($$result, { notClickable: true }, {}, {
    text: () => {
      return `Early stop/break`;
    },
    default: () => {
      return `<div class="center-center bg-surface rounded border border-gray-400 text-secondary px-1 py-0.5">${validate_component(Square, "Square").$$render($$result, { size: 14 }, {}, {})}</div>`;
    }
  })}` : ``} ${suspend ? `${validate_component(Popover, "Popover").$$render($$result, { notClickable: true }, {}, {
    text: () => {
      return `Suspend`;
    },
    default: () => {
      return `<div class="center-center bg-surface rounded border border-gray-400 text-secondary px-1 py-0.5">${validate_component(Phone_incoming, "PhoneIncoming").$$render($$result, { size: 14 }, {}, {})}</div>`;
    }
  })}` : ``} ${sleep ? `${validate_component(Popover, "Popover").$$render($$result, { notClickable: true }, {}, {
    text: () => {
      return `Sleep`;
    },
    default: () => {
      return `<div class="center-center bg-surface rounded border border-gray-400 text-secondary px-1 py-0.5">${validate_component(Bed, "Bed").$$render($$result, { size: 14 }, {}, {})}</div>`;
    }
  })}` : ``} ${mock ? `${validate_component(Popover, "Popover").$$render($$result, { notClickable: true }, {}, {
    text: () => {
      return `Mocked`;
    },
    default: () => {
      return `<div class="center-center bg-surface rounded border border-gray-400 text-secondary px-1 py-0.5">${validate_component(Voicemail, "Voicemail").$$render($$result, { size: 14 }, {}, {})}</div>`;
    }
  })}` : ``}</div> <div class="flex gap-1 justify-between items-center w-full overflow-hidden rounded-sm border border-gray-400 dark:border-gray-600 p-2 text-2xs module text-primary">${$$slots.icon ? `${slots.icon ? slots.icon({}) : ``} <span class="mr-2"></span>` : ``} <div class="${["flex-1 truncate", bold ? "font-bold" : ""].join(" ").trim()}">${escape(label)}</div> <div class="flex items-center space-x-2">${id ? `${validate_component(Badge, "Badge").$$render($$result, { color: "indigo" }, {}, {
    default: () => {
      return `${escape(id)}`;
    }
  })}` : ``}</div></div> ${deletable ? `<button class="${"absolute -top-[10px] -right-[10px] rounded-full h-[20px] w-[20px] trash center-center text-primary border-[1.5px] border-gray-700 bg-surface duration-150 hover:bg-red-400 hover:text-white hover:border-red-700 " + escape(selected ? "" : "!hidden", true) + " svelte-vr8w6z"}">${validate_component(X, "X").$$render(
    $$result,
    {
      class: "mx-[3px]",
      size: 14,
      strokeWidth: 2
    },
    {},
    {}
  )}</button> <button class="${"absolute -top-[10px] right-[35px] rounded-full h-[20px] w-[20px] trash center-center text-primary border-[1.5px] border-gray-700 bg-surface duration-150 hover:bg-blue-400 hover:text-white hover:border-blue-700 " + escape(selected ? "" : "!hidden", true) + " svelte-vr8w6z"}">${validate_component(Move, "Move").$$render(
    $$result,
    {
      class: "mx-[3px]",
      size: 14,
      strokeWidth: 2
    },
    {},
    {}
  )}</button> ${id && Object.values($flowInputsStore?.[id]?.flowStepWarnings || {}).length > 0 || Boolean(warningMessage) ? `<div class="absolute -top-[10px] -left-[10px]">${validate_component(Popover, "Popover").$$render($$result, {}, {}, {
    text: () => {
      return `<ul class="list-disc px-2">${id ? `${each(Object.values($flowInputsStore?.[id]?.flowStepWarnings || {}), (m) => {
        return `<li>${escape(m.message)} </li>`;
      })}` : ``}</ul> `;
    },
    default: () => {
      return `<div class="${escape(
        null_to_empty(twMerge("flex items-center justify-center h-full w-full rounded-md p-0.5 border  duration-150 ", id && Object.values($flowInputsStore?.[id]?.flowStepWarnings || {})?.some((x) => x.type === "error") ? "border-red-600 text-red-600 bg-red-100 hover:bg-red-300" : "border-yellow-600 text-yellow-600 bg-yellow-100 hover:bg-yellow-300")),
        true
      ) + " svelte-vr8w6z"}">${validate_component(Alert_triangle, "AlertTriangle").$$render($$result, { size: 14, strokeWidth: 2 }, {}, {})}</div>`;
    }
  })}</div>` : ``}` : ``} </div>`;
});
const StepGen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let prefilteredItems;
  let $$unsubscribe_flowStore;
  let $$unsubscribe_flowStateStore;
  let $$unsubscribe_copilotModulesStore;
  let $$unsubscribe_copilotInfo;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_copilotInfo = subscribe(copilotInfo, (value) => value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { index } = $$props;
  let { open } = $$props;
  let { close } = $$props;
  let { funcDesc } = $$props;
  let { modules } = $$props;
  let { trigger = false } = $$props;
  let { disableAi = false } = $$props;
  let input;
  let hubCompletions = [];
  const { flowStore, flowStateStore } = getContext("FlowEditorContext");
  $$unsubscribe_flowStore = subscribe(flowStore, (value) => value);
  $$unsubscribe_flowStateStore = subscribe(flowStateStore, (value) => value);
  const { modulesStore: copilotModulesStore, genFlow } = getContext("FlowCopilotContext");
  $$unsubscribe_copilotModulesStore = subscribe(copilotModulesStore, (value) => value);
  let scripts = void 0;
  let filteredItems = [];
  async function loadScripts() {
    const loadedScripts = await ScriptService.listScripts({ workspace: $workspaceStore, perPage: 300 });
    scripts = loadedScripts;
  }
  createEventDispatcher();
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.close === void 0 && $$bindings.close && close !== void 0) $$bindings.close(close);
  if ($$props.funcDesc === void 0 && $$bindings.funcDesc && funcDesc !== void 0) $$bindings.funcDesc(funcDesc);
  if ($$props.modules === void 0 && $$bindings.modules && modules !== void 0) $$bindings.modules(modules);
  if ($$props.trigger === void 0 && $$bindings.trigger && trigger !== void 0) $$bindings.trigger(trigger);
  if ($$props.disableAi === void 0 && $$bindings.disableAi && disableAi !== void 0) $$bindings.disableAi(disableAi);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    prefilteredItems = scripts ?? [];
    scripts == void 0 && funcDesc?.length > 1 && loadScripts();
    {
      {
        if (open) {
          setTimeout(
            () => {
            },
            0
          );
        }
      }
    }
    $$rendered = `${validate_component(SearchItems, "SearchItems").$$render(
      $$result,
      {
        filter: funcDesc,
        items: prefilteredItems,
        f: (x) => emptyString(x.summary) ? x.path : x.summary + " (" + x.path + ")",
        filteredItems
      },
      {
        filteredItems: ($$value) => {
          filteredItems = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="${"text-primary transition-all " + escape(funcDesc.length > 0 ? "w-96" : "w-60", true)}"><div><div class="flex p-2 relative"><input type="text" placeholder="${"Search " + escape(trigger ? "triggers" : "scripts", true) + " or AI gen"}"${add_attribute("this", input, 0)}${add_attribute("value", funcDesc, 0)}> ${funcDesc.length === 0 ? `${validate_component(Wand_2, "Wand2").$$render(
      $$result,
      {
        size: 14,
        class: "absolute right-4 top-1/2 -translate-y-1/2 fill-current opacity-70 text-violet-800 dark:text-violet-400"
      },
      {},
      {}
    )}` : ``}</div> ${!disableAi && funcDesc.length > 0 ? `<ul class="transition-all divide-y"><li><button class="py-2 gap-4 flex flex-row hover:bg-surface-hover transition-all items-center justify-between w-full"><div class="flex items-center gap-2.5 px-2"><div class="rounded-md p-1 flex justify-center items-center bg-surface border w-6 h-6">${validate_component(Wand_2, "Wand2").$$render(
      $$result,
      {
        size: 14,
        class: "text-violet-800 dark:text-violet-400"
      },
      {},
      {}
    )}</div> <div class="text-left text-xs text-secondary">Generate &quot;${escape(funcDesc)}&quot; in TypeScript</div></div></button></li> <li><button class="py-2 gap-4 flex flex-row hover:bg-surface-hover transition-all items-center justify-between w-full"><div class="flex items-center gap-2.5 px-2"><div class="rounded-md p-1 flex justify-center items-center bg-surface border w-6 h-6">${validate_component(Wand_2, "Wand2").$$render(
      $$result,
      {
        size: 14,
        class: "text-violet-800 dark:text-violet-400"
      },
      {},
      {}
    )}</div> <div class="text-left text-xs text-secondary">Generate &quot;${escape(funcDesc)}&quot; in Python</div></div></button></li></ul>` : ``} ${funcDesc.length > 0 && filteredItems.length > 0 ? `<div class="text-left mt-2"><p class="text-xs text-secondary ml-2">Workspace ${escape(trigger ? "Triggers" : "Scripts")}</p> <ul class="transition-all divide-y">${each(filteredItems.slice(0, 3), (item) => {
      return `<li><button class="py-2 gap-4 flex flex-row hover:bg-surface-hover transition-all items-center justify-between w-full"><div class="flex items-center gap-2.5 px-2"><div class="rounded-md p-1 flex justify-center items-center bg-surface border w-6 h-6">${validate_component(APP_TO_ICON_COMPONENT[item["app"]] || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div> <div class="text-left text-xs text-secondary">${escape(defaultIfEmptyString(item.summary, item.path))}</div> </div></button> </li>`;
    })}</ul></div>` : ``} ${hubCompletions.length > 0 ? `<div class="text-left mt-2"><p class="text-xs text-secondary ml-2">Hub ${escape(trigger ? "Triggers" : "Scripts")}</p> <ul class="transition-all divide-y">${each(hubCompletions, (item) => {
      return `<li><button class="py-2 gap-4 flex flex-row hover:bg-surface-hover transition-all items-center justify-between w-full"><div class="flex items-center gap-2.5 px-2"><div class="rounded-md p-1 flex justify-center items-center bg-surface border w-6 h-6">${validate_component(APP_TO_ICON_COMPONENT[item["app"]] || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div> <div class="text-left text-xs text-secondary">${escape(item.summary ?? "")} (${escape(item.app)})</div> </div></button> </li>`;
    })}</ul></div>` : ``}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_flowStore();
  $$unsubscribe_flowStateStore();
  $$unsubscribe_copilotModulesStore();
  $$unsubscribe_copilotInfo();
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const InsertModuleButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { trigger = false } = $$props;
  let { stop = false } = $$props;
  let { open = void 0 } = $$props;
  let { index } = $$props;
  let { funcDesc = "" } = $$props;
  let { modules } = $$props;
  let { disableAi = false } = $$props;
  let customUi = getContext("customUi");
  if ($$props.trigger === void 0 && $$bindings.trigger && trigger !== void 0) $$bindings.trigger(trigger);
  if ($$props.stop === void 0 && $$bindings.stop && stop !== void 0) $$bindings.stop(stop);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  if ($$props.funcDesc === void 0 && $$bindings.funcDesc && funcDesc !== void 0) $$bindings.funcDesc(funcDesc);
  if ($$props.modules === void 0 && $$bindings.modules && modules !== void 0) $$bindings.modules(modules);
  if ($$props.disableAi === void 0 && $$bindings.disableAi && disableAi !== void 0) $$bindings.disableAi(disableAi);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    !open && (funcDesc = "");
    $$rendered = `${validate_component(Menu, "Menu").$$render(
      $$result,
      {
        transitionDuration: 0,
        pointerDown: true,
        noMinW: true,
        placement: "bottom-center",
        show: open
      },
      {
        show: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        trigger: () => {
          return `<button title="Add step" slot="trigger"${add_attribute("id", `flow-editor-add-step-${index}`, 0)} type="button" class="text-primary bg-surface border-[1px] mx-[1px] border-gray-300 dark:border-gray-500 focus:outline-none hover:bg-surface-hover focus:ring-4 focus:ring-surface-selected font-medium rounded-full text-sm w-[25px] h-[25px] flex items-center justify-center">${validate_component(Cross, "Cross").$$render($$result, { class: "mx-[5px]", size: 15 }, {}, {})}</button>`;
        },
        default: ({ close }) => {
          return `<div id="flow-editor-insert-module">${validate_component(StepGen, "StepGen").$$render(
            $$result,
            {
              index,
              close,
              modules,
              disableAi,
              funcDesc,
              open
            },
            {
              funcDesc: ($$value) => {
                funcDesc = $$value;
                $$settled = false;
              },
              open: ($$value) => {
                open = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${funcDesc.length === 0 ? `<div class="font-mono divide-y text-xs w-full text-secondary"><button class="w-full text-left py-2 px-3 hover:bg-surface-hover whitespace-nowrap flex flex-row gap-2 items-center" role="menuitem" tabindex="-1">${validate_component(Code, "Code").$$render($$result, { size: 14 }, {}, {})}
					Action</button> ${customUi?.triggers != false && trigger ? `<button class="w-full text-left py-2 px-3 hover:bg-surface-hover whitespace-nowrap flex flex-row gap-2 items-center" role="menuitem" tabindex="-1">${validate_component(Zap, "Zap").$$render($$result, { size: 14 }, {}, {})}
						Trigger</button>` : ``} <button class="w-full text-left py-2 px-3 hover:bg-surface-hover whitespace-nowrap flex flex-row gap-2 items-center" role="menuitem" tabindex="-1">${validate_component(Check_circle_2, "CheckCircle2").$$render($$result, { size: 14 }, {}, {})}
					Approval/Prompt</button> <button class="w-full text-left py-2 px-3 hover:bg-surface-hover whitespace-nowrap flex flex-row gap-2 items-center" role="menuitem">${validate_component(Repeat, "Repeat").$$render($$result, { size: 14 }, {}, {})}

					For Loop</button> <button class="w-full text-left py-2 px-3 hover:bg-surface-hover whitespace-nowrap flex flex-row gap-2 items-center" role="menuitem">${validate_component(Repeat, "Repeat").$$render($$result, { size: 14 }, {}, {})}

					While Loop</button> <button class="w-full text-left py-2 px-3 hover:bg-surface-hover whitespace-nowrap flex flex-row gap-2 items-center" role="menuitem">${validate_component(Git_branch, "GitBranch").$$render($$result, { size: 14 }, {}, {})}
					Branch to one</button> <button class="w-full text-left py-2 px-3 hover:bg-surface-hover whitespace-nowrap flex flex-row gap-2 items-center" role="menuitem">${validate_component(Git_branch, "GitBranch").$$render($$result, { size: 14 }, {}, {})}

					Branch to all</button> ${customUi?.flowNode != false ? `<button class="w-full text-left py-2 px-3 hover:bg-surface-hover rounded-none whitespace-nowrap flex flex-row gap-2 items-center" role="menuitem">${validate_component(BarsStaggered, "BarsStaggered").$$render($$result, { size: 14 }, {}, {})}
						Flow</button>` : ``} ${stop ? `<button class="w-full text-left py-2 px-3 hover:bg-surface-hover inline-flex gap-2.5" role="menuitem">${validate_component(Square, "Square").$$render($$result, { size: 14 }, {}, {})}
						End Flow</button>` : ``}</div>` : ``}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const FlowJobsMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { open = void 0 } = $$props;
  let { index } = $$props;
  let { flowJobs } = $$props;
  let { flowJobsSuccess } = $$props;
  let { selected } = $$props;
  let filter = void 0;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  if ($$props.flowJobs === void 0 && $$bindings.flowJobs && flowJobs !== void 0) $$bindings.flowJobs(flowJobs);
  if ($$props.flowJobsSuccess === void 0 && $$bindings.flowJobsSuccess && flowJobsSuccess !== void 0) $$bindings.flowJobsSuccess(flowJobsSuccess);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0) $$bindings.selected(selected);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Menu, "Menu").$$render(
      $$result,
      {
        transitionDuration: 0,
        pointerDown: true,
        noMinW: true,
        placement: "bottom-center",
        show: open
      },
      {
        show: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        trigger: () => {
          return `<button title="Pick an iteration" slot="trigger"${add_attribute("id", `flow-editor-iteration picker-${index}`, 0)} type="button" class="${"text-xs bg-surface border-[1px] border-gray-300 dark:border-gray-500 focus:outline-none hover:bg-surface-hover focus:ring-4 focus:ring-surface-selected font-medium rounded-sm w-[40px] gap-1 h-[20px] flex items-center justify-center " + escape(
            flowJobsSuccess?.[selected] == false ? "text-red-400" : "text-secondary",
            true
          )}">#${escape(selected == -1 ? "?" : selected + 1)} ${validate_component(List_filter, "ListFilter").$$render($$result, { size: 15 }, {}, {})}</button>`;
        },
        default: ({ close }) => {
          return `<div id="flow-editor-insert-module"><div class="font-mono divide-y text-xs w-full text-secondary max-h-[200px] overflow-auto"><input autofocus type="number"${add_attribute("value", filter, 0)}> ${each(flowJobs ?? [], (id, idx) => {
            return `${`<button class="${"w-full text-left py-1 pl-2 min-w-20 hover:bg-surface-hover whitespace-nowrap flex flex-row gap-2 items-center " + escape(flowJobsSuccess?.[idx] == false ? "text-red-400" : "", true)}" role="menuitem" tabindex="-1">#${escape(idx + 1)} </button>`}`;
          })}</div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const MapItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let idx;
  let itemProps;
  let $selectedId, $$unsubscribe_selectedId;
  let { mod } = $$props;
  let { trigger } = $$props;
  let { insertable } = $$props;
  let { insertableEnd = false } = $$props;
  let { annotation = void 0 } = $$props;
  let { branchable = false } = $$props;
  let { bgColor = "" } = $$props;
  let { modules } = $$props;
  let { moving = void 0 } = $$props;
  let { duration_ms = void 0 } = $$props;
  let { disableAi = false } = $$props;
  let { wrapperId = void 0 } = $$props;
  let { retries = void 0 } = $$props;
  let { flowJobs } = $$props;
  const { selectedId } = getContext("FlowGraphContext");
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => $selectedId = value);
  createEventDispatcher();
  let openMenu = void 0;
  let openMenu2 = void 0;
  if ($$props.mod === void 0 && $$bindings.mod && mod !== void 0) $$bindings.mod(mod);
  if ($$props.trigger === void 0 && $$bindings.trigger && trigger !== void 0) $$bindings.trigger(trigger);
  if ($$props.insertable === void 0 && $$bindings.insertable && insertable !== void 0) $$bindings.insertable(insertable);
  if ($$props.insertableEnd === void 0 && $$bindings.insertableEnd && insertableEnd !== void 0) $$bindings.insertableEnd(insertableEnd);
  if ($$props.annotation === void 0 && $$bindings.annotation && annotation !== void 0) $$bindings.annotation(annotation);
  if ($$props.branchable === void 0 && $$bindings.branchable && branchable !== void 0) $$bindings.branchable(branchable);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0) $$bindings.bgColor(bgColor);
  if ($$props.modules === void 0 && $$bindings.modules && modules !== void 0) $$bindings.modules(modules);
  if ($$props.moving === void 0 && $$bindings.moving && moving !== void 0) $$bindings.moving(moving);
  if ($$props.duration_ms === void 0 && $$bindings.duration_ms && duration_ms !== void 0) $$bindings.duration_ms(duration_ms);
  if ($$props.disableAi === void 0 && $$bindings.disableAi && disableAi !== void 0) $$bindings.disableAi(disableAi);
  if ($$props.wrapperId === void 0 && $$bindings.wrapperId && wrapperId !== void 0) $$bindings.wrapperId(wrapperId);
  if ($$props.retries === void 0 && $$bindings.retries && retries !== void 0) $$bindings.retries(retries);
  if ($$props.flowJobs === void 0 && $$bindings.flowJobs && flowJobs !== void 0) $$bindings.flowJobs(flowJobs);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    idx = modules.findIndex((m) => m.id === mod.id);
    itemProps = {
      selected: $selectedId === mod.id,
      retry: mod.retry?.constant != void 0 || mod.retry?.exponential != void 0,
      earlyStop: mod.stop_after_if != void 0,
      suspend: Boolean(mod.suspend),
      sleep: Boolean(mod.sleep),
      cache: Boolean(mod.cache_ttl),
      mock: Boolean(mod.mock?.enabled),
      concurrency: Boolean(mod?.value?.["concurrent_limit"])
    };
    $$rendered = `${mod ? `${insertable ? `<div class="${escape(openMenu ? "z-20" : "", true) + " w-[27px] absolute -top-[35px] left-[50%] right-[50%] -translate-x-1/2"}">${moving ? `<button title="Add branch" type="button" ${wrapperId === moving ? "disabled" : ""} class="text-primary bg-surface border mx-[1px] border-gray-300 dark:border-gray-500 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm w-[25px] h-[25px] flex items-center justify-center">${validate_component(Clipboard_copy, "ClipboardCopy").$$render($$result, { class: "m-[5px]", size: 15 }, {}, {})}</button>` : `${validate_component(InsertModuleButton, "InsertModuleButton").$$render(
      $$result,
      {
        disableAi,
        trigger,
        index: idx,
        modules,
        open: openMenu
      },
      {
        open: ($$value) => {
          openMenu = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}</div>` : ``} <div class="relative">${moving == mod.id ? `<div class="absolute z-10 right-20 top-0.5 center-center">${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "dark",
        size: "xs",
        variant: "border"
      },
      {},
      {
        default: () => {
          return `Cancel move`;
        }
      }
    )}</div>` : ``} ${duration_ms ? `<div class="absolute z-10 right-0 -top-4 center-center text-tertiary text-2xs">${escape(msToSec(duration_ms))}s</div>` : ``} ${annotation && annotation != "" ? `<div class="absolute z-10 left-0 -top-5 center-center text-tertiary">${escape(annotation)}</div>` : ``} ${flowJobs && !insertable ? `<div class="absolute z-10 right-8 -top-5">${validate_component(FlowJobsMenu, "FlowJobsMenu").$$render(
      $$result,
      {
        flowJobsSuccess: flowJobs.flowJobsSuccess,
        flowJobs: flowJobs.flowJobs,
        selected: flowJobs.selected,
        index: idx
      },
      {},
      {}
    )}</div>` : ``} <div${add_attribute("class", moving == mod.id ? "opacity-50" : "", 0)}>${mod.value.type === "forloopflow" || mod.value.type === "whileloopflow" ? `${validate_component(FlowModuleSchemaItem, "FlowModuleSchemaItem").$$render(
      $$result,
      Object.assign(
        {},
        { deletable: insertable },
        {
          label: `${mod.summary || (mod.value.type == "forloopflow" ? "For loop" : "While loop")}  ${mod.value.parallel ? "(parallel)" : ""} ${mod.value.skip_failures ? "(skip failures)" : ""}`
        },
        { id: mod.id },
        itemProps,
        { bgColor },
        {
          warningMessage: mod?.value?.type === "forloopflow" && mod?.value?.iterator?.type === "javascript" && mod?.value?.iterator?.expr === "" ? "Iterator expression is empty" : ""
        }
      ),
      {},
      {
        icon: () => {
          return `<div slot="icon">${validate_component(Repeat, "Repeat").$$render($$result, { size: 16 }, {}, {})}</div>`;
        }
      }
    )}` : `${mod.value.type === "branchone" ? `${validate_component(FlowModuleSchemaItem, "FlowModuleSchemaItem").$$render($$result, Object.assign({}, { deletable: insertable }, itemProps, { id: mod.id }, { label: mod.summary || "Run one branch" }, { bgColor }), {}, {
      icon: () => {
        return `<div slot="icon">${validate_component(Git_branch, "GitBranch").$$render($$result, { size: 16 }, {}, {})}</div>`;
      }
    })}` : `${mod.value.type === "branchall" ? `${validate_component(FlowModuleSchemaItem, "FlowModuleSchemaItem").$$render(
      $$result,
      Object.assign(
        {},
        { deletable: insertable },
        { id: mod.id },
        itemProps,
        {
          label: mod.summary || `Run all branches${mod.value.parallel ? " (parallel)" : ""}`
        },
        { bgColor }
      ),
      {},
      {
        icon: () => {
          return `<div slot="icon">${validate_component(Git_branch, "GitBranch").$$render($$result, { size: 16 }, {}, {})}</div>`;
        }
      }
    )}` : `${validate_component(FlowModuleSchemaItem, "FlowModuleSchemaItem").$$render(
      $$result,
      Object.assign({}, { retries }, { deletable: insertable }, { id: mod.id }, itemProps, { modType: mod.value.type }, { bgColor }, {
        label: mod.summary || (`path` in mod.value ? mod.value.path : void 0) || (mod.value.type === "rawscript" ? `Inline ${prettyLanguage(mod.value.language)}` : "To be defined")
      }),
      {},
      {
        icon: () => {
          return `<div slot="icon">${mod.value.type === "rawscript" ? `${validate_component(LanguageIcon, "LanguageIcon").$$render(
            $$result,
            {
              lang: mod.value.language,
              width: 16,
              height: 16
            },
            {},
            {}
          )}` : `${mod.summary == "Terminate flow" ? `${validate_component(Square, "Square").$$render($$result, { size: 16 }, {}, {})}` : `${mod.value.type === "identity" ? `${validate_component(Arrow_down, "ArrowDown").$$render($$result, { size: 16 }, {}, {})}` : `${mod.value.type === "flow" ? `${validate_component(BarsStaggered, "BarsStaggered").$$render($$result, { size: 16 }, {}, {})}` : `${mod.value.type === "script" ? `${mod.value.path.startsWith("hub/") ? `<div>${validate_component(IconedResourceType, "IconedResourceType").$$render(
            $$result,
            {
              width: "20px",
              height: "20px",
              name: mod.value.path.split("/")[2],
              silent: true
            },
            {},
            {}
          )}</div>` : `${validate_component(Building, "Building").$$render($$result, { size: 14 }, {}, {})}`}` : ``}`}`}`}`}</div>`;
        }
      }
    )}`}`}`}</div></div> ${insertable && insertableEnd ? `<div class="${escape(openMenu2 ? "z-20" : "", true) + " w-[27px] absolute top-[49px] left-[50%] right-[50%] -translate-x-1/2"}">${moving ? `<button title="Add branch" type="button" ${wrapperId === moving ? "disabled" : ""} class="text-primary bg-surface border mx-[1px] border-gray-300 dark:border-gray-500 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm w-[25px] h-[25px] flex items-center justify-center">${validate_component(Clipboard_copy, "ClipboardCopy").$$render($$result, { class: "m-[5px]", size: 15 }, {}, {})}</button>` : `${validate_component(InsertModuleButton, "InsertModuleButton").$$render(
      $$result,
      {
        disableAi,
        trigger,
        index: idx + 1,
        modules,
        open: openMenu2
      },
      {
        open: ($$value) => {
          openMenu2 = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}</div>` : ``} ${insertable && branchable ? `<div class="w-[27px] absolute top-[45px] left-[60%] right-[40%] -translate-x-1/2"><button title="Add branch" type="button" id="add-branch-button" class="text-primary bg-surface border mx-[1px] rotate-180 dark:border-gray-500 border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm w-[25px] h-[25px] flex items-center justify-center">${validate_component(Git_branch_plus, "GitBranchPlus").$$render($$result, { class: "m-[5px]", size: 15 }, {}, {})}</button></div>` : ``}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_selectedId();
  return $$rendered;
});
const InsertTriggerButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { open = void 0 } = $$props;
  let { index } = $$props;
  let { funcDesc = "" } = $$props;
  let { modules } = $$props;
  let { disableAi = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  if ($$props.funcDesc === void 0 && $$bindings.funcDesc && funcDesc !== void 0) $$bindings.funcDesc(funcDesc);
  if ($$props.modules === void 0 && $$bindings.modules && modules !== void 0) $$bindings.modules(modules);
  if ($$props.disableAi === void 0 && $$bindings.disableAi && disableAi !== void 0) $$bindings.disableAi(disableAi);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    !open && (funcDesc = "");
    $$rendered = `${validate_component(Menu, "Menu").$$render(
      $$result,
      {
        transitionDuration: 0,
        pointerDown: true,
        noMinW: true,
        placement: "bottom-center",
        show: open
      },
      {
        show: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        trigger: () => {
          return `<button title="Add a Trigger" slot="trigger" type="button" class="text-primary bg-surface border-[1px] mx-[1px] border-gray-300 dark:border-gray-500 rotate-180 focus:outline-none hover:bg-surface-hover focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm w-[25px] h-[25px] flex items-center justify-center">${validate_component(Zap, "Zap").$$render($$result, { size: 14 }, {}, {})}</button>`;
        },
        default: ({ close }) => {
          return `${!disableAi ? `${validate_component(StepGen, "StepGen").$$render(
            $$result,
            {
              index,
              close,
              modules,
              trigger: true,
              funcDesc,
              open
            },
            {
              funcDesc: ($$value) => {
                funcDesc = $$value;
                $$settled = false;
              },
              open: ($$value) => {
                open = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``} ${funcDesc.length === 0 ? `<div class="font-mono divide-y text-xs w-full text-secondary whitespace-nowrap"><button class="w-full text-left py-2 px-3 hover:bg-surface-hover flex flex-row items-center gap-2" role="menuitem" tabindex="-1">${validate_component(Zap, "Zap").$$render($$result, { size: 14 }, {}, {})}Trigger</button></div>` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const VirtualItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let $copilotCurrentStepStore, $$unsubscribe_copilotCurrentStepStore;
  let $copilotInfo, $$unsubscribe_copilotInfo;
  let $$unsubscribe_copilotDrawerStore;
  $$unsubscribe_copilotInfo = subscribe(copilotInfo, (value) => $copilotInfo = value);
  let { label } = $$props;
  let { modules } = $$props;
  let { index } = $$props;
  let { insertable } = $$props;
  let { bgColor = "" } = $$props;
  let { selected } = $$props;
  let { selectable } = $$props;
  let { deleteBranch = void 0 } = $$props;
  let { id = void 0 } = $$props;
  let { moving = void 0 } = $$props;
  let { center = true } = $$props;
  let { disableAi = false } = $$props;
  let { wrapperNode = void 0 } = $$props;
  let { borderColor = void 0 } = $$props;
  let { hideId = false } = $$props;
  createEventDispatcher();
  let openMenu = false;
  let triggerOpenMenu = false;
  let openNoCopilot = false;
  const { drawerStore: copilotDrawerStore, currentStepStore: copilotCurrentStepStore } = getContext("FlowCopilotContext") || {};
  $$unsubscribe_copilotDrawerStore = subscribe(copilotDrawerStore, (value) => value);
  $$unsubscribe_copilotCurrentStepStore = subscribe(copilotCurrentStepStore, (value) => $copilotCurrentStepStore = value);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.modules === void 0 && $$bindings.modules && modules !== void 0) $$bindings.modules(modules);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  if ($$props.insertable === void 0 && $$bindings.insertable && insertable !== void 0) $$bindings.insertable(insertable);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0) $$bindings.bgColor(bgColor);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0) $$bindings.selected(selected);
  if ($$props.selectable === void 0 && $$bindings.selectable && selectable !== void 0) $$bindings.selectable(selectable);
  if ($$props.deleteBranch === void 0 && $$bindings.deleteBranch && deleteBranch !== void 0) $$bindings.deleteBranch(deleteBranch);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.moving === void 0 && $$bindings.moving && moving !== void 0) $$bindings.moving(moving);
  if ($$props.center === void 0 && $$bindings.center && center !== void 0) $$bindings.center(center);
  if ($$props.disableAi === void 0 && $$bindings.disableAi && disableAi !== void 0) $$bindings.disableAi(disableAi);
  if ($$props.wrapperNode === void 0 && $$bindings.wrapperNode && wrapperNode !== void 0) $$bindings.wrapperNode(wrapperNode);
  if ($$props.borderColor === void 0 && $$bindings.borderColor && borderColor !== void 0) $$bindings.borderColor(borderColor);
  if ($$props.hideId === void 0 && $$bindings.hideId && hideId !== void 0) $$bindings.hideId(hideId);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${insertable && deleteBranch ? `<div class="w-[27px] absolute -top-[40px] left-[50%] right-[50%] -translate-x-1/2"><button title="Delete branch" type="button" class="text-primary bg-surface border mx-[1px] 'border-gray-300 dark:border-gray-500 focus:outline-none hover:bg-surface-hover focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm w-[25px] h-[25px] flex items-center justify-center">${validate_component(X, "X").$$render($$result, { class: "m-[5px]", size: 15 }, {}, {})}</button></div>` : ``}   <div${add_attribute(
      "class",
      classNames(
        "w-full flex relative overflow-hidden rounded-sm",
        selectable ? "cursor-pointer" : "",
        selected ? "outline outline-offset-1 outline-2  outline-gray-600" : "",
        label === "Input" && $copilotCurrentStepStore === "Input" ? "z-[901]" : ""
      ),
      0
    )} style="${"min-width: 275px; max-height: 80px; background-color: " + escape(bgColor, true) + ";"}"${add_attribute("id", `flow-editor-virtual-${label}`, 0)}><div${add_attribute("style", borderColor ? `border-color: ${borderColor};` : "", 0)} class="${"flex gap-1 justify-between " + escape(center ? "items-center" : "items-baseline", true) + " w-full overflow-hidden rounded-sm border p-2 text-2xs module text-primary border-gray-400 dark:border-gray-600"}">${$$slots.icon ? `${slots.icon ? slots.icon({}) : ``} <span class="mr-2"></span>` : ``} <div></div> <div class="flex-1 truncate"><pre>${escape(label)}</pre></div> <div class="flex items-center space-x-2">${id && !hideId ? `${validate_component(Badge, "Badge").$$render($$result, { color: "indigo" }, {}, {
      default: () => {
        return `${escape(id)}`;
      }
    })}` : ``}</div></div></div> ${insertable && modules && (label != "Input" || modules.length == 0) ? `<div class="${escape(openMenu ? "z-20" : "", true) + " w-[27px] absolute top-[49px] left-[50%] right-[50%] -translate-x-1/2"}">${moving ? `<button title="Add branch" type="button" ${wrapperNode?.id === moving ? "disabled" : ""} class="text-primary bg-surface border mx-[1px] border-gray-300 dark:border-gray-500 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm w-[25px] h-[25px] flex items-center justify-center">${validate_component(Clipboard_copy, "ClipboardCopy").$$render($$result, { size: 12 }, {}, {})}</button>` : `${validate_component(InsertModuleButton, "InsertModuleButton").$$render(
      $$result,
      {
        disableAi,
        trigger: label == "Input",
        index,
        modules: modules ?? [],
        open: openMenu
      },
      {
        open: ($$value) => {
          openMenu = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}</div>` : ``} ${insertable && modules && label == "Input" ? `${!disableAi ? `<div class="${escape(openNoCopilot ? "z-10" : "", true) + " w-9 absolute -top-10 left-[50%] right-[50%] -translate-x-1/2"}">${validate_component(Menu, "Menu").$$render(
      $$result,
      {
        pointerDown: true,
        noMinW: true,
        placement: "bottom-center",
        show: openNoCopilot
      },
      {
        show: ($$value) => {
          openNoCopilot = $$value;
          $$settled = false;
        }
      },
      {
        trigger: () => {
          return `<button title="AI Flow Builder" slot="trigger" type="button" class="bg-surface text-violet-800 dark:text-violet-400 border mx-0.5 focus:outline-none hover:bg-surface-hover focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm w-8 h-8 flex items-center justify-center">${validate_component(Wand_2, "Wand2").$$render($$result, { size: 16 }, {}, {})}</button>`;
        },
        default: ({ close }) => {
          return `${!$copilotInfo.exists_openai_resource_path ? `<div class="text-primary p-4"><p class="text-sm w-80">Enable Windmill AI in the
							<a href="${escape(base, true) + "/workspace_settings?tab=openai"}" target="_blank" class="inline-flex flex-row items-center gap-1">workspace settings
								${validate_component(External_link, "ExternalLink").$$render($$result, { size: 16 }, {}, {})}</a></p></div>` : ``}`;
        }
      }
    )}</div>` : ``} <div class="${escape(triggerOpenMenu ? "z-10" : "", true) + " w-[27px] absolute top-[50px] left-[65%] right-[35%] -translate-x-1/2"}">${validate_component(InsertTriggerButton, "InsertTriggerButton").$$render(
      $$result,
      {
        disableAi,
        index: 0,
        modules: modules ?? [],
        open: triggerOpenMenu
      },
      {
        open: ($$value) => {
          triggerOpenMenu = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_copilotCurrentStepStore();
  $$unsubscribe_copilotInfo();
  $$unsubscribe_copilotDrawerStore();
  return $$rendered;
});
function schemaToObject(schema, args) {
  const object = {};
  if (!schema || !schema.properties) {
    return object;
  }
  const propKeys = Object.keys(schema.properties);
  propKeys.forEach((key) => {
    object[key] = args[key] ?? null;
  });
  return object;
}
function dfs(id, flow, getParents = true) {
  return dfsByModule(id, flow.value.modules, getParents);
}
function dfsByModule(id, modules, getParents = true) {
  if (id === void 0) {
    return [];
  }
  function rec(id2, moduleBranches) {
    for (let modules2 of moduleBranches) {
      for (const [i, module] of modules2.entries()) {
        if (module.id === id2) {
          return getParents ? [module] : modules2.slice(0, i + 1).reverse();
        } else {
          const submodules = getSubModules(module);
          if (submodules) {
            let found = rec(id2, submodules);
            if (found) {
              return getParents ? [...found, module] : [...found, ...modules2.slice(0, i).reverse()];
            }
          }
        }
      }
    }
    return void 0;
  }
  return rec(id, [modules]) ?? [];
}
function getFlowInput(parentModules, flowState, args, schema) {
  const parentModule = parentModules.shift();
  const topFlowInput = schemaToObject(schema, args);
  const parentState = parentModule ? flowState[parentModule.id] : void 0;
  if (parentState && parentModule) {
    if (parentState.previewArgs && !(parentModule.value?.type === "forloopflow" && parentModule.value?.modules?.length === 1)) {
      return { ...topFlowInput, ...parentState.previewArgs };
    } else {
      let parentFlowInput = getFlowInput(parentModules, flowState, args, schema);
      if (parentModule.value.type === "forloopflow") {
        let parentFlowInputIter = { ...parentFlowInput };
        if (parentFlowInputIter.hasOwnProperty("iter")) {
          parentFlowInputIter["iter_parent"] = parentFlowInputIter["iter"];
          delete parentFlowInputIter["iter"];
        }
        let topFlowInputIter = { ...topFlowInput };
        if (topFlowInputIter.hasOwnProperty("iter")) {
          topFlowInputIter["iter_parent"] = topFlowInputIter["iter"];
          delete topFlowInputIter["iter"];
        }
        return {
          ...topFlowInputIter,
          ...parentFlowInputIter,
          iter: {
            value: "Iteration's value",
            index: "Iteration's index"
          }
        };
      } else {
        return { ...topFlowInput, ...parentFlowInput };
      }
    }
  } else {
    return topFlowInput;
  }
}
function getPreviousIds(id, flow, include_node) {
  const df = dfs(id, flow, false);
  {
    df.shift();
  }
  return df.map((x) => {
    let submodules = getAllSubmodules(x).flat().map((x2) => x2.id);
    if (submodules.includes(id)) {
      return [x.id];
    } else {
      return [x.id, ...submodules];
    }
  }).flat();
}
function getFailureStepPropPicker(flowState, flow, args) {
  const allIds = flow.value.modules.map((x) => x.id);
  let priorIds = Object.fromEntries(
    allIds.map((id) => [id, flowState[id]?.previewResult ?? {}]).reverse()
  );
  const flowInput = getFlowInput(
    dfs(flow.value.modules[0].id, flow),
    flowState,
    args,
    flow.schema
  );
  return {
    pickableProperties: {
      flow_input: schemaToObject(flow.schema, args),
      priorIds,
      previousId: void 0,
      hasResume: false
    },
    extraLib: `
/**
* Error object
*/
declare const error: {
	message: string
	name: string
	stack: string
}

/**
* result by id
*/
declare const results = ${JSON.stringify(priorIds)}

/**
* flow input as an object
*/
declare const flow_input = ${JSON.stringify(flowInput)};
		`
  };
}
function getStepPropPicker(flowState, parentModule, previousModule, id, flow, args, include_node) {
  const flowInput = getFlowInput(
    dfs(parentModule?.id, flow),
    flowState,
    args,
    flow.schema
  );
  const previousIds = getPreviousIds(id, flow);
  let priorIds = Object.fromEntries(
    previousIds.map((id2) => [id2, flowState[id2]?.previewResult ?? {}]).reverse()
  );
  const pickableProperties = {
    flow_input: flowInput,
    priorIds,
    previousId: previousIds[0],
    hasResume: previousModule?.suspend != void 0
  };
  if (pickableProperties.hasResume) {
    pickableProperties["approvers"] = "The list of approvers";
  }
  return {
    extraLib: buildExtraLib(flowInput, priorIds, previousModule?.suspend != void 0),
    pickableProperties
  };
}
function buildExtraLib(flowInput, results, resume) {
  return `
/**
* get variable (including secret) at path
* @param {string} path - path of the variable (e.g: f/examples/secret)
*/
declare function variable(path: string): string;

/**
* get resource at path
* @param {string} path - path of the resource (e.g: f/examples/my_resource)
*/
declare function resource(path: string): any;

/**
* flow input as an object
*/
declare const flow_input = ${JSON.stringify(flowInput)};

/**
* static params of this same step
*/
declare const params: any;

/**
 * result by id
 */
declare const results = ${JSON.stringify(results)};

${resume ? `
/**
 * resume payload
 */
declare const resume: any

/**
 * The list of approvers separated by ,
 */
declare const approvers: string
` : ""}
`;
}
const FlowGraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showDataflow;
  let $selectedId, $$unsubscribe_selectedId;
  let { success = void 0 } = $$props;
  let { modules = [] } = $$props;
  let { failureModule = void 0 } = $$props;
  let { minHeight = 0 } = $$props;
  let { maxHeight = void 0 } = $$props;
  let { notSelectable = false } = $$props;
  let { flowModuleStates = void 0 } = $$props;
  let { rebuildOnChange = void 0 } = $$props;
  let { selectedId = writable(void 0) } = $$props;
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => $selectedId = value);
  let { insertable = false } = $$props;
  let { moving = void 0 } = $$props;
  let { scroll = false } = $$props;
  let { download = false } = $$props;
  let { fullSize = false } = $$props;
  let { disableAi = false } = $$props;
  let { flowInputsStore = writable(void 0) } = $$props;
  setContext("FlowGraphContext", { selectedId, flowInputsStore });
  let idGenerator;
  let nestedNodes;
  let nodes = [];
  let edges = [];
  let width, height;
  let fullWidth;
  let errorHandlers = {};
  let containerHeight = window.innerHeight;
  let error = void 0;
  let dataflow = false;
  let dispatch = createEventDispatcher();
  let oldRebuildOnChange = rebuildOnChange ? JSON.parse(JSON.stringify(rebuildOnChange)) : void 0;
  let darkMode = false;
  function triggerRebuild() {
    if (!deepEqual(oldRebuildOnChange, rebuildOnChange)) {
      oldRebuildOnChange = JSON.parse(JSON.stringify(rebuildOnChange));
      createGraph();
    }
  }
  async function createGraph() {
    try {
      nodes = [];
      edges = [];
      errorHandlers = {};
      if (modules) {
        idGenerator = createIdGenerator();
      } else {
        nodes = edges = [];
        return;
      }
      nestedNodes = nodes = [];
      nestedNodes.push(createVirtualNode(getParentIds(), "Input", modules, void 0, void 0, 0, 0, true, void 0, void 0, "Input", void 0, void 0));
      modules.forEach((m, i) => {
        const item = getConvertedFlowModule(m, void 0, void 0, 0, i + 1 == modules?.length, modules);
        item && nestedNodes.push(item);
      });
      nestedNodes.push(createVirtualNode(
        getParentIds(),
        "Result",
        void 0,
        void 0,
        void 0,
        0,
        modules.length,
        true,
        void 0,
        void 0,
        void 0,
        success == void 0 ? void 0 : success ? "Success" : "Failure",
        void 0
      ));
      if (!flowModuleStates) {
        if (failureModule) nestedNodes.push(createErrorHandler(failureModule));
      } else {
        Object.entries(flowModuleStates ?? []).filter(([k, v]) => k.startsWith("failure")).forEach(([k, v]) => {
          nestedNodes.push(createErrorHandler({ id: k }, v.parent_module, k));
        });
      }
      const flatNodes = flattenNestedNodes(nestedNodes);
      const layered = layoutNodes(flatNodes);
      nodes = layered.nodes;
      let hfull = Math.max(layered.height, minHeight);
      fullWidth = layered.width;
      height = fullSize ? hfull : Math.max(hfull, maxHeight ?? containerHeight);
      let useDataflow = dataflow && showDataflow;
      edges = useDataflow ? [] : createEdges(nodes);
      if (useDataflow && $selectedId) ;
      if (error) error = void 0;
    } catch (e) {
      error = e.message;
    }
  }
  function getConvertedFlowModule(module, parent, edgeLabel, loopDepth, insertableEnd, modules2, wrapper = void 0) {
    const type = module.value.type;
    const parentIds = getParentIds(parent);
    if (type === "forloopflow" || type == "whileloopflow") {
      return flowModuleToLoop(modules2, module, parent, loopDepth);
    } else if (type === "branchone") {
      const branches = [
        {
          summary: "Default Branch",
          modules: module.value.default,
          removable: false
        },
        ...module.value.branches.map((b, i) => ({
          summary: defaultIfEmptyString(b.summary, "Branch " + (i + 1)) + "\n`" + b.expr + "`",
          modules: b.modules,
          removable: true
        }))
      ];
      return flowModuleToBranch(
        module,
        modules2,
        branches,
        [],
        //['', ...module.value.branches.map((x) => `${truncateRev(x.expr, 20)}`)],
        parent,
        loopDepth,
        false
      );
    } else if (type === "branchall") {
      const branches = module.value.branches.map((b, i) => ({
        summary: defaultIfEmptyString(b.summary, `Branch ${i + 1}`),
        modules: b.modules,
        removable: true
      }));
      return flowModuleToBranch(module, modules2, branches, [], parent, loopDepth, true);
    }
    return flowModuleToNode(parentIds, module, edgeLabel, void 0, loopDepth, insertableEnd, false, modules2, wrapper, void 0);
  }
  function getParentIds(items = void 0) {
    if (typeof items == "string") {
      return [items];
    }
    const item = items?.at(-1) || nestedNodes.at(-1);
    if (!item) return [];
    if (isNode(item)) {
      const id = item.id;
      return [id];
    } else if (isLoop(item)) {
      return getParentIds(item.items);
    } else if (isBranch(item)) {
      return [item.nodeEnd.id];
    }
    return [];
  }
  function flowModuleToNode(parentIds, mod, edgeLabel, annotation, loopDepth, insertableEnd, branchable, modules2, wrapper, flowJobs) {
    let type = flowModuleStates?.[mod.id]?.type;
    if (!type && flowJobs) {
      type = "InProgress";
    }
    return {
      type: "node",
      id: mod.id,
      position: { x: -1, y: -1 },
      data: {
        custom: {
          component: MapItem,
          props: {
            trigger: parentIds.length == 0,
            mod,
            insertable,
            insertableEnd,
            branchable,
            retries: flowModuleStates?.[mod.id]?.retries,
            duration_ms: flowModuleStates?.[mod.id]?.duration_ms,
            bgColor: getStateColor(type, darkMode),
            annotation,
            modules: modules2,
            moving,
            disableAi,
            wrapperId: wrapper?.id,
            flowJobs
          },
          cb: (e, detail) => {
            if (e == "delete") {
              dispatch("delete", detail);
            } else if (e == "select") {
              if (!notSelectable) {
                if ($selectedId != mod.id) {
                  set_store_value(selectedId, $selectedId = mod.id, $selectedId);
                }
                dispatch("select", mod);
              }
            } else if (e == "insert") {
              dispatch("insert", detail);
            } else if (e == "newBranch") {
              dispatch("newBranch", detail);
            } else if (e == "move") {
              dispatch("move", { module: mod, modules: modules2 });
            } else if (e == "selectedIteration") {
              dispatch("selectedIteration", { ...detail, moduleId: mod.id });
            }
          }
        }
      },
      width: NODE.width,
      height: NODE.height,
      parentIds,
      sourcePosition: "bottom",
      targetPosition: "top",
      edgeLabel,
      loopDepth
    };
  }
  function flowModuleToLoop(modules2, module, parent, loopDepth) {
    let state = flowModuleStates?.[module.id];
    const loop = {
      type: "loop",
      items: [
        flowModuleToNode(
          getParentIds(parent),
          module,
          void 0,
          state?.flow_jobs ? "iterations " + state?.flow_jobs?.length + "/" + (state?.iteration_total ?? "?") : "",
          loopDepth,
          false,
          false,
          modules2,
          void 0,
          state?.flow_jobs ? {
            flowJobs: state?.flow_jobs,
            selected: state?.selectedForloopIndex ?? -1,
            flowJobsSuccess: state?.flow_jobs_success
          } : void 0
        )
      ]
    };
    const innerModules = module.value.modules;
    let borderStatus = void 0;
    let success2 = state?.flow_jobs_success?.[state?.selectedForloopIndex ?? 0];
    if (success2 != void 0) {
      borderStatus = success2 ? "Success" : "Failure";
    }
    loop.items.push(createVirtualNode(getParentIds(loop.items), `Do one iteration`, innerModules, void 0, 1e3, loopDepth + 1, 0, false, void 0, void 0, void 0, void 0, borderStatus, true, module));
    innerModules.forEach((innerModule, i) => {
      const item = getConvertedFlowModule(innerModule, loop.items, void 0, loopDepth + 1, i + 1 == innerModules?.length, innerModules, module);
      item && loop.items.push(item);
    });
    loop.items.push(createVirtualNode(getParentIds(loop.items), `Collect result of each iteration`, modules2, void 0, 1e3, loopDepth, modules2.findIndex((m) => m.id == module.id) + 1, true, void 0, module.id, void 0, void 0, flowModuleStates?.[module.id]?.type));
    return loop;
  }
  function flowModuleToBranch(module, modules2, branches, edgesLabel, parent = void 0, loopDepth, branchall) {
    const wrapper = JSON.parse(JSON.stringify(module));
    const node = flowModuleToNode(getParentIds(parent), module, void 0, void 0, loopDepth, false, true, modules2, void 0, void 0);
    const bitems = [];
    const branchParent = [node.id];
    if (branches.length == 0) {
      bitems.push([
        createVirtualNode(branchParent, "No branches", void 0, void 0, 0, loopDepth, 0, false, void 0, void 0, void 0, void 0, void 0)
      ]);
    }
    branches.forEach(({ summary, modules: modules3, removable }, i) => {
      const items = [];
      let borderStatus = void 0;
      if (module.value.type == "branchall" || module.value.type == "forloopflow") {
        let flow_jobs_success = flowModuleStates?.[module.id]?.flow_jobs_success;
        if (!flow_jobs_success) {
          borderStatus = "WaitingForPriorSteps";
        } else {
          let status = flow_jobs_success?.[i];
          if (status == void 0) {
            borderStatus = "WaitingForExecutor";
          } else {
            borderStatus = status ? "Success" : "Failure";
          }
        }
      } else if (module.value.type == "branchone") {
        if (flowModuleStates?.[module.id]?.branchChosen == i) {
          borderStatus = flowModuleStates?.[module.id]?.type;
        }
      }
      items.push(createVirtualNode(branchParent, summary, modules3, edgesLabel[i], void 0, loopDepth, 0, true, removable ? { module, index: i } : void 0, module.id, void 0, void 0, borderStatus, false, wrapper, true));
      if (modules3.length) {
        modules3.forEach((innerModule, j) => {
          const item = getConvertedFlowModule(innerModule, items, void 0, loopDepth, j + 1 == modules3?.length, modules3, module);
          item && items.push(item);
        });
      }
      items.length && bitems.push(items);
    });
    return {
      type: "branch",
      node,
      nodeEnd: createVirtualNode(
        bitems.map((i) => getParentIds(i)).flat(),
        branchall ? "Collect result of each branch" : "Result of the chosen branch",
        modules2,
        void 0,
        0,
        loopDepth,
        modules2.findIndex((m) => m.id == module.id) + 1,
        true,
        void 0,
        module.id,
        void 0,
        void 0,
        flowModuleStates?.[module.id]?.type
      ),
      items: bitems
    };
  }
  function flattenNestedNodes(nestedNodes2, nodes2 = []) {
    const array = nodes2;
    nestedNodes2.forEach((node) => {
      if (isNode(node)) {
        array.push(node);
      } else if (isLoop(node)) {
        flattenNestedNodes(node.items, array);
      } else if (isBranch(node)) {
        array.push(node.node);
        node.items.forEach((item) => {
          flattenNestedNodes(item, array);
        });
        array.push(node.nodeEnd);
      }
    });
    return array;
  }
  function layoutNodes(nodes2) {
    let seenId = [];
    for (const n of nodes2) {
      if (seenId.includes(n.id)) {
        n.id = n.id + "_dup";
      }
      seenId.push(n.id);
    }
    const stratify = dagStratify().id(({ id }) => id);
    const dag = stratify(nodes2);
    let boxSize;
    try {
      const layout = sugiyama().decross(decrossOpt()).coord(coordCenter()).nodeSize(() => [NODE.width + NODE.gap.horizontal, NODE.height + NODE.gap.vertical]);
      boxSize = layout(dag);
    } catch {
      const layout = sugiyama().coord(coordCenter()).nodeSize(() => [NODE.width + NODE.gap.horizontal, NODE.height + NODE.gap.vertical]);
      boxSize = layout(dag);
    }
    return {
      nodes: dag.descendants().map((des) => ({
        ...des.data,
        id: des.data.id,
        position: {
          x: des.x ? des.data.loopDepth * 50 + des.x + (fullSize ? fullWidth : width) / 2 - boxSize.width / 2 - NODE.width / 2 : 0,
          y: des.y || 0
        }
      })),
      height: boxSize.height + NODE.height,
      width: boxSize.width + NODE.width
    };
  }
  function createEdges(nodes2) {
    const edges2 = [];
    nodes2.forEach((node) => {
      node.parentIds.forEach((pid, i) => {
        {
          edges2.push({
            id: `e-${pid}-${node.id}`,
            source: pid,
            target: node.id,
            labelBgColor: "white",
            arrow: false,
            animate: false,
            noHandle: true,
            label: node.edgeLabel,
            edgeColor: "#999",
            type: "bezier"
          });
        }
      });
    });
    return edges2;
  }
  function createVirtualNode(parentIds, label, modules2, edgeLabel, offset, loopDepth, index, selectable, deleteBranch, mid, fixed_id, module_status, borderStatus, center = true, wrapperNode = void 0, hideId = false) {
    const id = fixed_id ?? -idGenerator.next().value - 2 + (offset ?? 0);
    let bgColor;
    if (module_status) {
      bgColor = getStateColor(module_status, darkMode);
    } else {
      bgColor = darkMode ? "#2e3440" : "#dfe6ee";
    }
    return {
      type: "node",
      id: id.toString(),
      position: { x: -1, y: -1 },
      data: {
        // html: `
        // 	<div class="w-full max-h-full text-center ellipsize-multi-line text-2xs [-webkit-line-clamp:2] px-1">
        // 		${label}
        // 	</div>
        // `
        custom: {
          component: VirtualItem,
          props: {
            label,
            insertable,
            modules: modules2,
            bgColor,
            borderColor: borderStatus ? getStateColor(borderStatus, darkMode) + (!darkMode ? "; border-width: 3px" : "") : void 0,
            selected: $selectedId == label,
            index,
            selectable,
            deleteBranch,
            id: mid,
            moving,
            center,
            disableAi,
            wrapperNode,
            hideId
          },
          cb: (e, detail) => {
            if (e == "insert") {
              dispatch("insert", detail);
            } else if (e == "select") {
              set_store_value(selectedId, $selectedId = detail, $selectedId);
              dispatch("select", detail);
            } else if (e == "deleteBranch") {
              set_store_value(selectedId, $selectedId = label, $selectedId);
              dispatch("deleteBranch", detail);
            }
          }
        }
      },
      width: NODE.width,
      height: NODE.height,
      borderColor: $selectedId == label ? "black" : "#999",
      sourcePosition: "bottom",
      targetPosition: "top",
      parentIds,
      edgeLabel,
      loopDepth
    };
  }
  function createErrorHandler(mod, parent_module, customNodeId) {
    const nId = customNodeId ?? "failure";
    parent_module && (errorHandlers[parent_module] = nId);
    let label = "Error handler";
    return {
      type: "node",
      id: nId,
      position: { x: -1, y: -1 },
      data: {
        custom: {
          component: VirtualItem,
          props: {
            label,
            insertable: false,
            modules: void 0,
            bgColor: getStateColor(flowModuleStates?.[mod.id]?.type, darkMode),
            selected: $selectedId == mod.id,
            index: 0,
            selectable: true,
            id: mod.id,
            disableAi
          },
          cb: (e, detail) => {
            if (e == "select") {
              set_store_value(selectedId, $selectedId = detail, $selectedId);
              dispatch("select", detail);
            }
          }
        }
      },
      width: NODE.width,
      height: NODE.height,
      sourcePosition: "bottom",
      targetPosition: "top",
      parentIds: parent_module ? [parent_module] : [],
      loopDepth: 0
    };
  }
  if ($$props.success === void 0 && $$bindings.success && success !== void 0) $$bindings.success(success);
  if ($$props.modules === void 0 && $$bindings.modules && modules !== void 0) $$bindings.modules(modules);
  if ($$props.failureModule === void 0 && $$bindings.failureModule && failureModule !== void 0) $$bindings.failureModule(failureModule);
  if ($$props.minHeight === void 0 && $$bindings.minHeight && minHeight !== void 0) $$bindings.minHeight(minHeight);
  if ($$props.maxHeight === void 0 && $$bindings.maxHeight && maxHeight !== void 0) $$bindings.maxHeight(maxHeight);
  if ($$props.notSelectable === void 0 && $$bindings.notSelectable && notSelectable !== void 0) $$bindings.notSelectable(notSelectable);
  if ($$props.flowModuleStates === void 0 && $$bindings.flowModuleStates && flowModuleStates !== void 0) $$bindings.flowModuleStates(flowModuleStates);
  if ($$props.rebuildOnChange === void 0 && $$bindings.rebuildOnChange && rebuildOnChange !== void 0) $$bindings.rebuildOnChange(rebuildOnChange);
  if ($$props.selectedId === void 0 && $$bindings.selectedId && selectedId !== void 0) $$bindings.selectedId(selectedId);
  if ($$props.insertable === void 0 && $$bindings.insertable && insertable !== void 0) $$bindings.insertable(insertable);
  if ($$props.moving === void 0 && $$bindings.moving && moving !== void 0) $$bindings.moving(moving);
  if ($$props.scroll === void 0 && $$bindings.scroll && scroll !== void 0) $$bindings.scroll(scroll);
  if ($$props.download === void 0 && $$bindings.download && download !== void 0) $$bindings.download(download);
  if ($$props.fullSize === void 0 && $$bindings.fullSize && fullSize !== void 0) $$bindings.fullSize(fullSize);
  if ($$props.disableAi === void 0 && $$bindings.disableAi && disableAi !== void 0) $$bindings.disableAi(disableAi);
  if ($$props.flowInputsStore === void 0 && $$bindings.flowInputsStore && flowInputsStore !== void 0) $$bindings.flowInputsStore(flowInputsStore);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    showDataflow = $selectedId != void 0 && !$selectedId.startsWith("constants") && !$selectedId.startsWith("settings") && $selectedId !== "failure" && $selectedId !== "Result";
    {
      {
        createGraph();
      }
    }
    rebuildOnChange && triggerRebuild();
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
    )}  <div${add_attribute("class", fullSize ? "" : "w-full h-full overflow-hidden relative", 0)} id="flow-graph">${!error ? `${``}` : `<div class="p-4 text-center text-xl text-red-600">Error computing the graph: ${escape(error)}</div>`}</div>`;
  } while (!$$settled);
  $$unsubscribe_selectedId();
  return $$rendered;
});
function isNode(item) {
  return item?.["type"] === "node";
}
function isLoop(item) {
  return item?.["type"] === "loop";
}
function isBranch(item) {
  return item?.["type"] === "branch";
}
const NODE = {
  width: 275,
  height: 34,
  gap: {
    horizontal: 40,
    vertical: 50
  }
};
function* createIdGenerator() {
  let id = 0;
  while (true) {
    yield id++;
  }
}
function getStateColor(state, isDark) {
  switch (state) {
    case "Success":
      return isDark ? "#059669" : "rgb(193, 255, 216)";
    case "Failure":
      return isDark ? "#dc2626" : "rgb(248 113 113)";
    case "InProgress":
      return isDark ? "#f59e0b" : "rgb(253, 240, 176)";
    case "WaitingForEvents":
      return isDark ? "#db2777" : "rgb(229, 176, 253)";
    case "WaitingForExecutor":
      return isDark ? "#ea580c" : "rgb(255, 208, 193)";
    default:
      return isDark ? "#2e3440" : "#fff";
  }
}
export {
  BarsStaggered as B,
  Code as C,
  FlowGraph as F,
  Git_branch as G,
  LanguageIcon as L,
  Move as M,
  Phone_incoming as P,
  Repeat as R,
  Square as S,
  Voicemail as V,
  Zap as Z,
  Clipboard_copy as a,
  getStepPropPicker as b,
  Gauge as c,
  dfs as d,
  Bed as e,
  getFailureStepPropPicker as f,
  getPreviousIds as g,
  Menu as h,
  schemaToObject as s
};
