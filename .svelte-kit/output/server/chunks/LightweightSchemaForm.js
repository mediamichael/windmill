import { c as create_ssr_component, v as validate_component, t as compute_rest_props, d as createEventDispatcher, b as add_attribute, e as escape, f as each, w as spread, y as escape_attribute_value, x as escape_object, s as subscribe, z as null_to_empty, o as onDestroy, n as noop, h as getContext, p as compute_slots } from "./ssr.js";
import { B as Button, g as classNames, b as emptyString, aa as displaySize, j as displayDate, P as Portal, p as truncate, R as pluralize, k as capitalize, ab as extractCustomProperties, a6 as setInputCat, a7 as getSchemaFromProperties, a8 as allTrue, a9 as computeShow } from "./toast.js";
import "./index2.js";
import { B as Badge } from "./Badge.js";
import "./common.js";
/* empty css                                     */
import { w as workspaceStore } from "./stores2.js";
import { H as HelpersService, R as ResourceService } from "./services.gen.js";
import { b as base } from "./base.js";
import { A as Alert } from "./Alert.js";
import { D as Drawer, a as DrawerContent } from "./DrawerContent.js";
import { T as Trash, S as Section, c as createFloatingActions } from "./Section.js";
import { V as VirtualList } from "./index3.js";
import { F as File_up, T as TableSimple, R as Required } from "./Required.js";
import { a as ConfirmationModal } from "./ConfirmationModal.js";
import { X } from "./x.js";
import { I as Icon } from "./Icon.js";
import { L as Loader_2 } from "./loader-2.js";
/* empty css                                                  */
import { twMerge } from "tailwind-merge";
import { t as tick } from "./Head.js";
import { T as Tooltip } from "./Tooltip.js";
import { T as Toggle } from "./Toggle.js";
import { s as spring, M as MultiSelect } from "./MultiSelect2.js";
import { deepEqual } from "fast-equals";
import { offset, flip, shift } from "@floating-ui/dom";
import { D as DarkModeObserver } from "./DarkModeObserver.js";
import "yaml";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import "minimatch";
import { P as Plus } from "./plus.js";
import { D as DateTimeInput } from "./DateTimeInput.js";
import { P as Password } from "./Password.js";
import { T as ToggleButtonGroup, a as ToggleButton } from "./ToggleButtonGroup.js";
import { w as writable } from "./index.js";
import { t as tweened } from "./tweened.js";
import { R as Refresh_ccw } from "./refresh-ccw.js";
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
const Ban = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "m4.9 4.9 14.2 14.2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "ban" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Check_check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M18 6 7 17l-5-5" }],
    ["path", { "d": "m22 10-7.5 7.5L13 16" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "check-check" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Download = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
      }
    ],
    ["polyline", { "points": "7 10 12 15 17 10" }],
    [
      "line",
      {
        "x1": "12",
        "x2": "12",
        "y1": "15",
        "y2": "3"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "download" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const File_warning = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
      }
    ],
    ["path", { "d": "M12 9v4" }],
    ["path", { "d": "M12 17h.01" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "file-warning" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const File = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
      }
    ],
    ["polyline", { "points": "14 2 14 8 20 8" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "file" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Files = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z"
      }
    ],
    [
      "path",
      {
        "d": "M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8"
      }
    ],
    ["path", { "d": "M15 2v5h5" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "files" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Folder_closed = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      }
    ],
    ["path", { "d": "M2 10h20" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "folder-closed" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Folder_open = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "folder-open" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Move_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M18 8L22 12L18 16" }], ["path", { "d": "M2 12H22" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "move-right" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Panel_right_open = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "18",
        "height": "18",
        "x": "3",
        "y": "3",
        "rx": "2",
        "ry": "2"
      }
    ],
    [
      "line",
      {
        "x1": "15",
        "x2": "15",
        "y1": "3",
        "y2": "21"
      }
    ],
    ["path", { "d": "m10 15-3-3 3-3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "panel-right-open" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Rotate_cw = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"
      }
    ],
    ["path", { "d": "M21 3v5h-5" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "rotate-cw" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const FileInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "class",
    "style",
    "accept",
    "multiple",
    "convertTo",
    "hideIcon",
    "iconSize",
    "returnFileNames",
    "submittedText",
    "defaultFile",
    "disabled",
    "files",
    "clearFiles"
  ]);
  let { class: c = "" } = $$props;
  let { style = "" } = $$props;
  let { accept = "*" } = $$props;
  let { multiple = false } = $$props;
  let { convertTo = void 0 } = $$props;
  let { hideIcon = false } = $$props;
  let { iconSize = 36 } = $$props;
  let { returnFileNames = false } = $$props;
  let { submittedText = void 0 } = $$props;
  let { defaultFile = void 0 } = $$props;
  let { disabled = void 0 } = $$props;
  const dispatch = createEventDispatcher();
  let { files = void 0 } = $$props;
  async function convertFile(file) {
    return new Promise((resolve) => {
      if (!convertTo) {
        return resolve(null);
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      switch (convertTo) {
        case "buffer":
          reader.readAsArrayBuffer(file);
          break;
        case "binary":
          reader.readAsBinaryString(file);
          break;
        case "base64":
          reader.readAsDataURL(file);
          break;
        case "text":
          reader.readAsText(file);
          break;
      }
    });
  }
  async function dispatchChange() {
    files = files;
    if (convertTo && files) {
      const promises = files.map(convertFile);
      let converted = await Promise.all(promises);
      if (returnFileNames) {
        converted = converted.map((c2, i) => ({ name: files[i].name, data: c2 }));
      }
      dispatch("change", converted);
    } else {
      dispatch("change", files);
    }
  }
  function clearFiles() {
    files = void 0;
    dispatchChange();
  }
  if ($$props.class === void 0 && $$bindings.class && c !== void 0) $$bindings.class(c);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.accept === void 0 && $$bindings.accept && accept !== void 0) $$bindings.accept(accept);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0) $$bindings.multiple(multiple);
  if ($$props.convertTo === void 0 && $$bindings.convertTo && convertTo !== void 0) $$bindings.convertTo(convertTo);
  if ($$props.hideIcon === void 0 && $$bindings.hideIcon && hideIcon !== void 0) $$bindings.hideIcon(hideIcon);
  if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0) $$bindings.iconSize(iconSize);
  if ($$props.returnFileNames === void 0 && $$bindings.returnFileNames && returnFileNames !== void 0) $$bindings.returnFileNames(returnFileNames);
  if ($$props.submittedText === void 0 && $$bindings.submittedText && submittedText !== void 0) $$bindings.submittedText(submittedText);
  if ($$props.defaultFile === void 0 && $$bindings.defaultFile && defaultFile !== void 0) $$bindings.defaultFile(defaultFile);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.files === void 0 && $$bindings.files && files !== void 0) $$bindings.files(files);
  if ($$props.clearFiles === void 0 && $$bindings.clearFiles && clearFiles !== void 0) $$bindings.clearFiles(clearFiles);
  return `<button${add_attribute(
    "class",
    twMerge(
      `relative center-center flex-col text-center font-medium text-tertiary 
		border border-dashed border-gray-400 hover:border-blue-500 
		focus-within:border-blue-300 hover:bg-blue-50 dark:hover:bg-frost-900  
		duration-200 rounded-component p-1`,
      c
    ),
    0
  )}${add_attribute("style", style, 0)} ${disabled ? "disabled" : ""}>${!hideIcon && !files ? `${validate_component(File_up, "FileUp").$$render($$result, { size: iconSize, class: "mb-2" }, {}, {})}` : ``} ${files ? `<div class="w-full max-h-full overflow-auto px-6">${slots["selected-title"] ? slots["selected-title"]({}) : ` <div class="text-center mb-2 px-2">${escape(submittedText ? submittedText : `Selected file${files.length > 1 ? "s" : ""}`)}:</div> `} <ul class="relative z-20 max-w-[500px] bg-surface rounded-lg overflow-hidden mx-auto">${each(files, ({ name }, i) => {
    return `<li class="flex justify-between items-center font-normal text-sm hover:bg-gray-300/20 duration-200 py-1 px-2 cursor-default"><span class="pr-2 ellipsize">${escape(name)}</span> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs",
        color: "red",
        variant: "border",
        iconOnly: true,
        btnClasses: "bg-transparent",
        startIcon: { icon: Trash }
      },
      {},
      {}
    )} </li>`;
  })}</ul></div>` : `${slots.default ? slots.default({}) : ` <span>Drag and drop ${escape(multiple ? "files" : "a file")}</span> `}`} <input${spread(
    [
      {
        class: "!absolute !inset-0 !z-10 !opacity-0 !cursor-pointer"
      },
      { type: "file" },
      {
        title: escape_attribute_value(files ? `${files.length} file${files.length > 1 ? "s" : ""} chosen` : "No file chosen")
      },
      { accept: escape_attribute_value(accept) },
      { multiple: multiple || null },
      escape_object($$restProps)
    ],
    {}
  )}> ${defaultFile ? `<div class="w-full border-dashed border-t-2 text-2xs pt-1 text-tertiary mt-2">Default file: <span class="text-blue-500">${escape(defaultFile)}</span></div>` : ``}</button>`;
});
function filterByKey(obj, key) {
  if (Object(obj) !== obj) {
    return obj;
  } else if (Array.isArray(obj)) {
    return obj.map((o) => filterByKey(o, key));
  } else {
    return Object.fromEntries(
      Object.entries(obj).filter(([k, v]) => !k.includes(key)).map(([k, v]) => [k, filterByKey(v, key)])
    );
  }
}
function diff(target, source) {
  if (Array.isArray(target)) {
    return target;
  }
  const result = {};
  Object.keys(target ?? {}).forEach((key) => {
    if (typeof source[key] === "object") {
      const difference = diff(target[key], source[key]);
      if (Object.keys(difference).length > 0) {
        result[key] = difference;
      }
    } else if (source[key] !== target[key]) {
      result[key] = target[key];
    }
  });
  return result;
}
function keepByKey(json, key) {
  if (!json) {
    return {};
  }
  return diff(json, filterByKey(json, key));
}
const validJSExpressionRegex = new RegExp(
  /^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc][$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc0-9\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19b0-\u19c0\u19c8\u19c9\u19d0-\u19d9\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf2-\u1cf4\u1dc0-\u1de6\u1dfc-\u1dff\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua880\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8e0-\ua8f1\ua900-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f]*$/
);
function computeKey(key, isArray, currentPath) {
  const isIdentifierValid = validJSExpressionRegex.test(key);
  const oldKey = key;
  if (!isIdentifierValid) {
    key = `["${key}"]`;
  }
  if (isArray) {
    if (currentPath === "step") {
      return `step(${oldKey})`;
    }
    return `${currentPath}[${oldKey}]`;
  } else {
    if (currentPath) {
      const separator = isIdentifierValid ? "." : "";
      return `${currentPath}${separator}${key}`;
    } else {
      return key;
    }
  }
}
const WarningMessage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex px-2 bg-yellow-100 rounded-lg dark:bg-yellow-200" role="alert" data-svelte-h="svelte-1ck4of9"><div class="text-xs font-medium text-yellow-700 dark:text-yellow-800">Require testing flow</div></div>`;
});
const NEVER_TESTED_THIS_FAR = "never tested this far";
const css$a = {
  code: ".progress-bar.svelte-1suwj18{background-color:#d3d3d3;border-radius:5px;height:10px;overflow:hidden;width:100%}.progress.svelte-1suwj18{background-color:var(--color);height:100%;transition:width .4s ease-out}.blinking.svelte-1suwj18{animation:svelte-1suwj18-blink 1s linear infinite}@keyframes svelte-1suwj18-blink{0%,to{opacity:1}50%{opacity:.5}}",
  map: null
};
const FileProgressBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $tweenedProgress, $$unsubscribe_tweenedProgress;
  let { color = "blue" } = $$props;
  let { progress = 0 } = $$props;
  let { ended = false } = $$props;
  const tweenedProgress = tweened(progress, { duration: 400, easing: cubicOut });
  $$unsubscribe_tweenedProgress = subscribe(tweenedProgress, (value) => $tweenedProgress = value);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0) $$bindings.progress(progress);
  if ($$props.ended === void 0 && $$bindings.ended && ended !== void 0) $$bindings.ended(ended);
  $$result.css.add(css$a);
  {
    tweenedProgress.set(progress);
  }
  $$unsubscribe_tweenedProgress();
  return `<div class="flex flex-row gap-1 items-center justify-between w-full">${ended ? `${slots.default ? slots.default({}) : ``}` : `<div class="progress-bar svelte-1suwj18"><div class="${escape(null_to_empty(`progress ${!ended ? "blinking" : ""}`), true) + " svelte-1suwj18"}"${add_attribute("style", `--color: ${color}; width: ${Math.round($tweenedProgress)}%`, 0)}></div></div> <span class="text-xs p-1">${escape(Math.round($tweenedProgress))}%</span>`}</div>`;
});
const FileUpload = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_workspaceStore;
  let $fileUploads, $$unsubscribe_fileUploads;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => value);
  let { acceptedFileTypes = ["*"] } = $$props;
  let { allowMultiple = true } = $$props;
  let { containerText = "Drag and drop files here or click to browse" } = $$props;
  let { customResourcePath = void 0 } = $$props;
  let { customResourceType = void 0 } = $$props;
  let { customClass = "" } = $$props;
  let { customStyle = "" } = $$props;
  let { randomFileKey = false } = $$props;
  let { pathTransformer = void 0 } = $$props;
  let { forceDisplayUploads = false } = $$props;
  let { defaultValue = void 0 } = $$props;
  createEventDispatcher();
  let fileUploads = writable([]);
  $$unsubscribe_fileUploads = subscribe(fileUploads, (value) => $fileUploads = value);
  let activeUploads = [];
  function clearRequests() {
    activeUploads.forEach(({ xhr }) => xhr.abort());
    activeUploads = [];
  }
  onDestroy(() => {
    clearRequests();
  });
  if ($$props.acceptedFileTypes === void 0 && $$bindings.acceptedFileTypes && acceptedFileTypes !== void 0) $$bindings.acceptedFileTypes(acceptedFileTypes);
  if ($$props.allowMultiple === void 0 && $$bindings.allowMultiple && allowMultiple !== void 0) $$bindings.allowMultiple(allowMultiple);
  if ($$props.containerText === void 0 && $$bindings.containerText && containerText !== void 0) $$bindings.containerText(containerText);
  if ($$props.customResourcePath === void 0 && $$bindings.customResourcePath && customResourcePath !== void 0) $$bindings.customResourcePath(customResourcePath);
  if ($$props.customResourceType === void 0 && $$bindings.customResourceType && customResourceType !== void 0) $$bindings.customResourceType(customResourceType);
  if ($$props.customClass === void 0 && $$bindings.customClass && customClass !== void 0) $$bindings.customClass(customClass);
  if ($$props.customStyle === void 0 && $$bindings.customStyle && customStyle !== void 0) $$bindings.customStyle(customStyle);
  if ($$props.randomFileKey === void 0 && $$bindings.randomFileKey && randomFileKey !== void 0) $$bindings.randomFileKey(randomFileKey);
  if ($$props.pathTransformer === void 0 && $$bindings.pathTransformer && pathTransformer !== void 0) $$bindings.pathTransformer(pathTransformer);
  if ($$props.forceDisplayUploads === void 0 && $$bindings.forceDisplayUploads && forceDisplayUploads !== void 0) $$bindings.forceDisplayUploads(forceDisplayUploads);
  if ($$props.defaultValue === void 0 && $$bindings.defaultValue && defaultValue !== void 0) $$bindings.defaultValue(defaultValue);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_fileUploads();
  return `<div class="w-full h-full p-0 flex flex-col">${$fileUploads.length > 0 && !forceDisplayUploads ? `<div class="border rounded-md flex flex-col gap-1 divide-y h-full w-full p-1"><div class="flex h-full overflow-y-auto flex-col">${each($fileUploads, (fileUpload) => {
    return `<div class="w-full flex flex-col gap-1 p-2"><div class="flex flex-row items-center justify-between"><div class="flex flex-col gap-1"><span class="text-xs font-bold">${escape(fileUpload.name)}</span> <span class="text-xs">${escape(`${Math.round(fileUpload.size / 1024 / 1024 * 100) / 100} MB`)}</span></div> <div class="flex flex-row gap-1 items-center">${fileUpload.errorMessage ? `${validate_component(File_warning, "FileWarning").$$render($$result, { class: "w-4 h-4 text-red-500" }, {}, {})}` : `${fileUpload.cancelled ? `${validate_component(File_warning, "FileWarning").$$render($$result, { class: "w-4 h-4 text-yellow-500" }, {}, {})}` : `${fileUpload.progress === 100 ? `${validate_component(Check_check, "CheckCheck").$$render($$result, { class: "w-4 h-4 text-green-500" }, {}, {})}` : ``}`}`} ${fileUpload.cancelled || fileUpload.errorMessage !== void 0 ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs2",
        color: "light",
        variant: "border",
        startIcon: { icon: Refresh_ccw }
      },
      {},
      {
        default: () => {
          return `Retry Upload
									`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs2",
        color: "light",
        variant: "border",
        startIcon: { icon: Refresh_ccw }
      },
      {},
      {
        default: () => {
          return `Remove from list
									`;
        }
      }
    )}` : ``} ${fileUpload.progress < 100 && !fileUpload.cancelled && !fileUpload.errorMessage ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs2",
        color: "light",
        variant: "border",
        startIcon: { icon: Ban }
      },
      {},
      {
        default: () => {
          return `Cancel Upload
									`;
        }
      }
    )}` : ``} ${fileUpload.progress === 100 && !fileUpload.cancelled ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs2",
        color: "red",
        variant: "border",
        startIcon: { icon: Trash }
      },
      {},
      {
        default: () => {
          return `Delete
									`;
        }
      }
    )}` : ``} </div></div> ${validate_component(FileProgressBar, "FileProgressBar").$$render(
      $$result,
      {
        progress: fileUpload.progress,
        color: fileUpload.errorMessage ? "#ef4444" : fileUpload.cancelled ? "#eab308" : fileUpload.progress === 100 ? "#22c55e" : "#3b82f6",
        ended: fileUpload.cancelled || fileUpload.errorMessage !== void 0
      },
      {},
      {
        default: () => {
          return `${fileUpload.errorMessage ? `<span class="text-xs text-red-600">${escape(fileUpload.errorMessage)}</span>` : `${fileUpload.cancelled ? `<span class="text-xs text-yellow-600" data-svelte-h="svelte-50jaa5">Upload cancelled</span>` : ``}`} `;
        }
      }
    )} ${!(fileUpload.cancelled || fileUpload.errorMessage !== void 0) ? `<span class="text-xs text-gray-500 dark:text-gray-200">${escape(fileUpload.progress === 100 ? "Upload finished" : `Uploading`)} to path: ${escape(fileUpload.path ?? "N/A")} </span>` : ``} </div>`;
  })}</div> ${allowMultiple ? `<div class="flex flex-row gap-1 items-center justify-end p-1">${!$fileUploads.every((fileUpload) => fileUpload.progress === 100 || fileUpload.cancelled) ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: "xs2",
      color: "light",
      startIcon: { icon: Ban }
    },
    {},
    {
      default: () => {
        return `Cancel All Uploads`;
      }
    }
  )}` : ``} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: "xs2",
      color: "light",
      startIcon: { icon: Files },
      disabled: $fileUploads.some((fileUpload) => fileUpload.progress !== 100 && !fileUpload.cancelled)
    },
    {},
    {
      default: () => {
        return `Upload more files`;
      }
    }
  )}</div>` : ``}</div>` : `${validate_component(FileInput, "FileInput").$$render(
    $$result,
    {
      accept: acceptedFileTypes?.join(","),
      multiple: allowMultiple,
      returnFileNames: true,
      includeMimeType: true,
      class: twMerge("w-full h-full", customClass, "wm-file-input"),
      style: customStyle,
      defaultFile: defaultValue
    },
    {},
    {
      default: () => {
        return `${escape(containerText)}`;
      }
    }
  )}`}</div>`;
});
const FileUploadModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { open = false } = $$props;
  let { fileKey = void 0 } = $$props;
  let s3Folder = "";
  createEventDispatcher();
  function cleanFilePath(rawFolder, fileName) {
    if (emptyString(rawFolder)) {
      return fileName;
    }
    if (!rawFolder.endsWith("/")) {
      rawFolder = `${rawFolder}/`;
    }
    return `${rawFolder}${fileName}`;
  }
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.fileKey === void 0 && $$bindings.fileKey && fileKey !== void 0) $$bindings.fileKey(fileKey);
  return `${open ? `<div${add_attribute("class", "absolute top-0 bottom-0 left-0 right-0 z-[5000]", 0)} role="dialog"><div${add_attribute(
    "class",
    classNames("fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity", open ? "ease-out duration-300 opacity-100" : "ease-in duration-200 opacity-0"),
    0
  )}></div> <div class="fixed inset-0 z-10 overflow-y-auto"><div class="flex min-h-full items-center justify-center p-4"><div${add_attribute(
    "class",
    classNames("relative transform overflow-hidden rounded-lg bg-surface px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6", open ? "ease-out duration-300 opacity-100 translate-y-0 sm:scale-100" : "ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"),
    0
  )}><div class="flex flex-col gap-2"><div class="flex justify-between"><h3 class="text-lg font-medium text-primary">${escape(title)}</h3> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      title: "Close",
      color: "light",
      size: "sm",
      iconOnly: true,
      startIcon: { icon: X }
    },
    {},
    {}
  )}</div> <div class="flex items-center gap-2"><span data-svelte-h="svelte-1q1xyrw">Folder:</span> <input type="text" placeholder="folder/nested/" class="text-2xl grow"${add_attribute("value", s3Folder, 0)}></div> <div class="w-full h-full">${validate_component(FileUpload, "FileUpload").$$render(
    $$result,
    {
      allowMultiple: true,
      pathTransformer: (file) => cleanFilePath(s3Folder, file.file.name)
    },
    {},
    {}
  )}</div></div></div></div></div></div>` : ``}`;
});
const maxKeys = 1e3;
const S3FilePicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let deletionModalOpen = false;
  let fileDeletionInProgress = false;
  let fileListUnavailable = void 0;
  let moveModalOpen = false;
  let moveDestKey = void 0;
  let fileMoveInProgress = false;
  let uploadModalOpen = false;
  let workspaceSettingsInitialized = true;
  let { fromWorkspaceSettings = false } = $$props;
  let { readOnlyMode } = $$props;
  let { initialFileKey = void 0 } = $$props;
  let { selectedFileKey = void 0 } = $$props;
  let csvSeparatorChar = ",";
  let csvHasHeader = true;
  createEventDispatcher();
  let drawer;
  let fileInfoLoading = true;
  let fileListLoading = true;
  let allFilesByKey = {};
  let displayedFileKeys = [];
  let listDivHeight = 0;
  let fileMetadata = void 0;
  let filePreviewLoading = false;
  let filePreview = void 0;
  let listMarkers;
  let page = 0;
  let count = 0;
  let filter2 = "";
  let timeout = void 0;
  let firstLoad = true;
  function onFilterChange() {
    if (!firstLoad) {
      timeout && clearTimeout(timeout);
      timeout = setTimeout(
        () => {
          page = 0;
          listMarkers = [];
          loadFiles();
        },
        500
      );
    } else {
      firstLoad = false;
    }
  }
  async function loadFiles() {
    fileListLoading = true;
    let availableFiles = await HelpersService.listStoredFiles({
      workspace: $workspaceStore,
      maxKeys,
      marker: page == 0 ? void 0 : listMarkers[page - 1],
      prefix: filter2.trim() != "" ? filter2 : void 0,
      storage
    });
    if (availableFiles.restricted_access === null || availableFiles.restricted_access === void 0 || availableFiles.restricted_access === true) {
      fileListUnavailable = true;
      loadFileMetadataPlusPreviewAsync(selectedFileKey?.s3);
      return;
    }
    fileListUnavailable = false;
    allFilesByKey = {};
    displayedFileKeys = [];
    for (let file_path of availableFiles.windmill_large_files) {
      let split_path = file_path.s3.split("/");
      let parent_path = void 0;
      let current_path = void 0;
      let nestingLevel = 0;
      for (let i = 0; i < split_path.length; i++) {
        parent_path = current_path;
        current_path = current_path === void 0 ? split_path[i] : current_path + split_path[i];
        if (i < split_path.length - 1) {
          current_path += "/";
        }
        nestingLevel = i * 2;
        if (allFilesByKey[current_path] !== void 0) {
          continue;
        }
        allFilesByKey[current_path] = {
          type: i === split_path.length - 1 ? "leaf" : "folder",
          full_key: current_path,
          display_name: split_path[i],
          collapsed: true,
          parentPath: parent_path,
          nestingLevel
        };
        if (i == 0) {
          displayedFileKeys.push(current_path);
        }
      }
    }
    if (listMarkers.length == page) {
      count = availableFiles.windmill_large_files.length;
      const nextMarker = availableFiles.windmill_large_files?.[availableFiles.windmill_large_files.length - 1]?.s3;
      if (nextMarker) listMarkers.push(nextMarker);
    }
    displayedFileKeys = displayedFileKeys.sort();
    if (selectedFileKey !== void 0 && !emptyString(selectedFileKey.s3)) {
      let split_path = selectedFileKey.s3.split("/");
      let current_path = void 0;
      for (let i = 0; i < split_path.length; i++) {
        current_path = current_path === void 0 ? split_path[i] : current_path + split_path[i];
        if (i < split_path.length - 1) {
          current_path += "/";
        }
        let indexOf = displayedFileKeys.indexOf(current_path);
        if (indexOf >= 0) {
          selectItem(indexOf, true);
        }
      }
    }
    fileListLoading = false;
    fileInfoLoading = false;
  }
  async function loadFileMetadataPlusPreviewAsync(fileKey) {
    if (fileKey === void 0 || emptyString(fileKey)) {
      fileInfoLoading = false;
      return;
    }
    fileInfoLoading = true;
    let fileMetadataRaw = await HelpersService.loadFileMetadata({
      workspace: $workspaceStore,
      fileKey,
      storage
    });
    if (fileMetadataRaw !== void 0) {
      fileMetadata = {
        fileKey,
        size: fileMetadataRaw.size_in_bytes,
        sizeStr: displaySize(fileMetadataRaw.size_in_bytes),
        mimeType: fileMetadataRaw.mime_type,
        lastModified: displayDate(fileMetadataRaw.last_modified)
      };
    }
    loadFilePreview(fileKey, fileMetadataRaw.size_in_bytes, fileMetadataRaw.mime_type);
  }
  async function loadFilePreview(fileKey, fileSizeInBytes, fileMimeType) {
    filePreviewLoading = true;
    let filePreviewRaw = await HelpersService.loadFilePreview({
      workspace: $workspaceStore,
      fileKey,
      fileSizeInBytes,
      fileMimeType,
      csvSeparator: csvSeparatorChar,
      csvHasHeader,
      readBytesFrom: 0,
      readBytesLength: 128 * 1024,
      storage
    });
    let filePreviewContent = filePreviewRaw.content;
    if (filePreviewContent !== null && filePreviewContent !== void 0 && filePreviewContent.length >= 128 * 1024) {
      filePreviewContent = filePreviewContent?.substring(0, 128 * 1024 - 35) + "\n\n ... FILE CONTENT TRUNCATED ...\n\n";
    }
    if (filePreviewRaw !== void 0) {
      filePreview = {
        fileKey,
        contentPreview: filePreviewContent,
        contentType: filePreviewRaw.content_type
      };
    }
    filePreviewLoading = false;
    fileInfoLoading = false;
  }
  let storage = void 0;
  async function open(preSelectedFileKey = void 0) {
    storage = preSelectedFileKey?.storage;
    if (preSelectedFileKey !== void 0) {
      initialFileKey = { ...preSelectedFileKey };
      selectedFileKey = { ...preSelectedFileKey };
    }
    displayedFileKeys = [];
    allFilesByKey = {};
    count = 0;
    page = 0;
    filter2 = "";
    listMarkers = [];
    fileMetadata = void 0;
    filePreview = void 0;
    reloadContent();
    drawer.openDrawer?.();
  }
  async function reloadContent() {
    if (initialFileKey !== void 0) {
      ({ ...initialFileKey });
    }
    try {
      await HelpersService.datasetStorageTestConnection({ workspace: $workspaceStore, storage });
      workspaceSettingsInitialized = true;
    } catch (e) {
      console.error("Workspace not connected to object storage: ", e);
      workspaceSettingsInitialized = false;
      return;
    }
    await loadFiles();
    if (selectedFileKey !== void 0) {
      if (allFilesByKey[selectedFileKey.s3] === void 0) {
        selectedFileKey = { s3: "" };
      } else {
        loadFileMetadataPlusPreviewAsync(selectedFileKey.s3);
      }
    }
  }
  function selectItem(index, toggleCollapsed = true) {
    let item_key = displayedFileKeys[index];
    let item = allFilesByKey[item_key];
    if (item.type === "folder") {
      if (toggleCollapsed) {
        item.collapsed = !item.collapsed;
      }
      if (item.collapsed) {
        let elt_to_remove = 0;
        for (let i = index + 1; i < displayedFileKeys.length; i++) {
          let file_key = displayedFileKeys[i];
          if (file_key.startsWith(item_key)) {
            elt_to_remove += 1;
          } else {
            break;
          }
        }
        if (elt_to_remove > 0) {
          displayedFileKeys.splice(index + 1, elt_to_remove);
        }
      } else {
        for (let file_key in allFilesByKey) {
          let file_info = allFilesByKey[file_key];
          if (file_info.parentPath === item_key) {
            displayedFileKeys.push(file_key);
            if (file_info.type === "folder" && !file_info.collapsed) {
              selectItem(displayedFileKeys.length - 1, false);
            }
          }
        }
      }
      displayedFileKeys = displayedFileKeys.sort();
    } else {
      selectedFileKey = { s3: item_key };
      loadFileMetadataPlusPreviewAsync(selectedFileKey.s3);
    }
  }
  if ($$props.fromWorkspaceSettings === void 0 && $$bindings.fromWorkspaceSettings && fromWorkspaceSettings !== void 0) $$bindings.fromWorkspaceSettings(fromWorkspaceSettings);
  if ($$props.readOnlyMode === void 0 && $$bindings.readOnlyMode && readOnlyMode !== void 0) $$bindings.readOnlyMode(readOnlyMode);
  if ($$props.initialFileKey === void 0 && $$bindings.initialFileKey && initialFileKey !== void 0) $$bindings.initialFileKey(initialFileKey);
  if ($$props.selectedFileKey === void 0 && $$bindings.selectedFileKey && selectedFileKey !== void 0) $$bindings.selectedFileKey(selectedFileKey);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    filter2 != void 0 && onFilterChange();
    $$rendered = `  ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "1200px", this: drawer },
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
              title: "S3 file browser",
              overflow_y: false,
              tooltip: "Files present in the Workspace S3 bucket. You can set the workspace S3 bucket in the settings.",
              documentationLink: "https://www.windmill.dev/docs/integrations/s3"
            },
            {},
            {
              actions: () => {
                return `<div slot="actions" class="flex gap-1">${!readOnlyMode ? `${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    variant: "border",
                    color: "light",
                    disabled: workspaceSettingsInitialized === false,
                    startIcon: { icon: File_up }
                  },
                  {},
                  {
                    default: () => {
                      return `Upload File`;
                    }
                  }
                )} ${!fromWorkspaceSettings ? `${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    disable: selectedFileKey === void 0 || emptyString(selectedFileKey.s3)
                  },
                  {},
                  {
                    default: () => {
                      return `Select`;
                    }
                  }
                )}` : ``}` : ``}</div>`;
              },
              default: () => {
                return `${workspaceSettingsInitialized === false ? `${fromWorkspaceSettings ? `${validate_component(Alert, "Alert").$$render(
                  $$result,
                  {
                    type: "error",
                    title: "Connection to remote S3 bucket unsuccessful"
                  },
                  {},
                  {
                    default: () => {
                      return `<div class="flex flex-row gap-x-1 w-full items-center" data-svelte-h="svelte-be04pn"><p class="text-clip grow min-w-0">Double check the S3 resource fields and try again.</p></div>`;
                    }
                  }
                )}` : `${validate_component(Alert, "Alert").$$render(
                  $$result,
                  {
                    type: "error",
                    title: "Workspace not connected to any S3 storage"
                  },
                  {},
                  {
                    default: () => {
                      return `<div class="flex flex-row gap-x-1 w-full items-center"><p class="text-clip grow min-w-0" data-svelte-h="svelte-1hed6ns">The workspace needs to be connected to an S3 storage to use this feature. You can <a target="_blank" href="${escape(base, true) + "/workspace_settings?tab=windmill_lfs"}">configure it here</a>.</p> ${validate_component(Button, "Button").$$render(
                        $$result,
                        {
                          variant: "border",
                          color: "light",
                          startIcon: { icon: Rotate_cw }
                        },
                        {},
                        {}
                      )}</div>`;
                    }
                  }
                )}`}` : `${fileListUnavailable == true ? `<div class="mb-2">${validate_component(Alert, "Alert").$$render(
                  $$result,
                  {
                    type: "info",
                    title: "Access to S3 bucket restricted"
                  },
                  {},
                  {
                    default: () => {
                      return `<p data-svelte-h="svelte-143c7dr">You don&#39;t have access to the S3 bucket resource and your administrator has restricted
							the access to it. You are not authorized to browse the bucket content. If you think
							this is incorrect, please contact your workspace administrator.</p> <p data-svelte-h="svelte-or26eu">More info in <a href="https://www.windmill.dev/docs/core_concepts/persistent_storage/large_data_files" target="_blank">Windmill&#39;s documentation</a></p>`;
                    }
                  }
                )}</div>` : ``} <div class="flex flex-row border rounded-md h-full">${!fileListUnavailable ? `<div class="min-w-[30%] border-r h-full flex flex-col"><div class="w-12/12 pb-2 flex flex-row mb-1 gap-1"><input type="text" placeholder="Folder prefix" class="text-2xl"${add_attribute("value", filter2, 0)}></div> ${fileListLoading === false && displayedFileKeys.length === 0 ? `<div class="p-4 text-tertiary text-xs text-center italic" data-svelte-h="svelte-k3ebs6">No files in the workspace S3 bucket at that prefix</div>` : `<div class="grow max-h-3/4">${validate_component(VirtualList, "VirtualList").$$render(
                  $$result,
                  {
                    width: "100%",
                    height: listDivHeight,
                    itemCount: displayedFileKeys.length,
                    itemSize: 42
                  },
                  {},
                  {
                    item: ({ style, index }) => {
                      let file_info = allFilesByKey[displayedFileKeys[index]];
                      return `<div slot="item"${add_attribute("style", style, 0)} class="hover:bg-surface-hover border"><div${add_attribute(
                        "class",
                        `flex flex-row h-full font-semibold text-xs items-center justify-start ${selectedFileKey !== void 0 && selectedFileKey.s3 === file_info.full_key ? "bg-surface-hover" : ""} `,
                        0
                      )}><div${add_attribute("class", `flex flex-row w-full ml-${2 + file_info.nestingLevel} gap-2 h-full items-center`, 0)}>${file_info.type === "folder" ? `${file_info.collapsed ? `${validate_component(Folder_closed, "FolderClosed").$$render($$result, { size: 16 }, {}, {})}` : `${validate_component(Folder_open, "FolderOpen").$$render($$result, { size: 16 }, {}, {})}`} <div class="truncate text-ellipsis w-56">${escape(file_info.display_name)}</div>` : `${validate_component(File, "FileIcon").$$render($$result, { size: 16 }, {}, {})} <div class="truncate text-ellipsis w-56">${escape(file_info.display_name)}</div>`}</div></div></div>`;
                    }
                  }
                )}</div> <div class="flex gap-2 text-2xs items-center text-secondary px-2 w-full h-max-[30px] pt-2 border-t"><div>${escape(count)} items on this page</div> <div>Page ${escape(page + 1)}</div> ${count == maxKeys ? `<button class="text-secondary border p-1 underline text-2xs whitespace-nowrap text-center" data-svelte-h="svelte-2qbw7s">Previous</button> <button class="text-secondary border p-1 underline text-2xs whitespace-nowrap text-center" data-svelte-h="svelte-nwm0r6">Next</button>` : ``}</div> ${fileListLoading === true ? `<div class="flex text-secondary mt-1 text-xs justify-center items-center w-full">${validate_component(Loader_2, "Loader2").$$render($$result, { size: 12, class: "animate-spin mr-1" }, {}, {})} Loading content</div>` : ``}`}</div>` : ``} <div class="flex flex-col h-full w-full overflow-auto">${fileMetadata === void 0 ? `<div class="p-4">${fileInfoLoading ? `${validate_component(Section, "Section").$$render($$result, { label: "Loading..." }, {}, {})}` : `${fileListUnavailable ? `${validate_component(Section, "Section").$$render($$result, { label: "No file to preview" }, {}, {})}` : `${validate_component(Section, "Section").$$render($$result, { label: "Select a file to preview" }, {}, {})}`}`}</div>` : `<div class="p-4 gap-2">${validate_component(Section, "Section").$$render($$result, { label: fileMetadata.fileKey }, {}, {
                  action: () => {
                    return `<div slot="action" class="flex gap-2">${filePreview !== void 0 ? `${validate_component(Button, "Button").$$render(
                      $$result,
                      {
                        title: "Download file from S3",
                        variant: "border",
                        color: "light",
                        href: `${base}/api/w/${$workspaceStore}/job_helpers/download_s3_file?file_key=${fileMetadata?.fileKey}${storage ? `&storage=${storage}` : ""}`,
                        download: fileMetadata?.fileKey.split("/").pop() ?? "unnamed_download.file",
                        startIcon: { icon: Download },
                        iconOnly: true
                      },
                      {},
                      {}
                    )} ${validate_component(Button, "Button").$$render(
                      $$result,
                      {
                        title: "Move file",
                        variant: "border",
                        color: "light",
                        startIcon: { icon: Move_right },
                        iconOnly: true
                      },
                      {},
                      {}
                    )} ${validate_component(Button, "Button").$$render(
                      $$result,
                      {
                        title: "Delete file from S3",
                        variant: "border",
                        color: "red",
                        startIcon: { icon: Trash },
                        iconOnly: true
                      },
                      {},
                      {}
                    )}` : ``}</div>`;
                  }
                })} ${validate_component(TableSimple, "TableSimple").$$render(
                  $$result,
                  {
                    headers: ["Last modified", "Size", "Type"],
                    data: [fileMetadata],
                    keys: ["lastModified", "sizeStr", "mimeType"]
                  },
                  {},
                  {}
                )}</div>`} <div class="flex flex-col h-full w-full overflow-auto text-xs p-4 bg-surface-secondary">${fileMetadata !== void 0 && filePreview !== void 0 ? `<div class="flex h-6 items-center text-tertiary mb-4">${filePreview.contentType === "Unknown" ? `Type of file not supported for preview.` : `${filePreview.contentType === "Csv" ? `Previewing a ${escape(filePreview.contentType?.toLowerCase())} file. Separator character:
									<div class="inline-flex w-12 ml-2 mr-2"><select class="h-8"><option value="," data-svelte-h="svelte-1oq6dhq">,</option><option value=";" data-svelte-h="svelte-zl12hk">;</option><option value="\\t" data-svelte-h="svelte-14z0q1a">\\t</option><option value="|" data-svelte-h="svelte-1f29t5a">|</option></select></div>
									Header row:
									<div class="inline-flex item-center w-4 ml-2 mr-2"><input ${""} type="checkbox" id="csv-header" class="h-5"${add_attribute("checked", csvHasHeader, 1)}></div>` : `Previewing a ${escape(filePreview.contentType?.toLowerCase())} file.`}`}</div> <pre class="grow whitespace-no-wrap break-words">${!emptyString(filePreview.contentPreview) ? `${escape(filePreview.contentPreview)}` : `${filePreview.contentType !== void 0 ? `Preview impossible.` : ``}`}</pre>` : `${filePreviewLoading ? `<div class="flex h-6 items-center text-tertiary mb-4">${validate_component(Loader_2, "Loader2").$$render($$result, { size: 12, class: "animate-spin mr-1" }, {}, {})} File preview loading</div>` : ``}`}</div></div></div>`}`;
              }
            }
          )}`;
        }
      }
    )} ${validate_component(ConfirmationModal, "ConfirmationModal").$$render(
      $$result,
      {
        open: deletionModalOpen,
        title: "Permanently delete file",
        confirmationText: "Delete permanently",
        keyListen: false,
        loading: fileDeletionInProgress
      },
      {
        loading: ($$value) => {
          fileDeletionInProgress = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="flex flex-col w-full space-y-4"><span>Are you sure you want to permanently delete ${escape(fileMetadata?.fileKey)} from the S3 bucket?</span></div>`;
        }
      }
    )} ${validate_component(ConfirmationModal, "ConfirmationModal").$$render(
      $$result,
      {
        open: moveModalOpen,
        title: "Move file to new location",
        confirmationText: "Move",
        keyListen: false,
        loading: fileMoveInProgress
      },
      {
        loading: ($$value) => {
          fileMoveInProgress = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="flex flex-col space-y-4"><div class="flex items-center justify-between"><span class="w-24" data-svelte-h="svelte-s1o2qw">New key:</span> <input type="text" placeholder="folder/nested/file.txt" class="text-2xl"${add_attribute("value", moveDestKey, 0)}></div> <span>Are you sure you want to permanently move ${escape(fileMetadata?.fileKey)}?</span></div>`;
        }
      }
    )} ${validate_component(FileUploadModal, "FileUploadModal").$$render(
      $$result,
      {
        open: uploadModalOpen,
        title: "Upload file to S3 bucket"
      },
      {},
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const css$9 = {
  code: "ul.svelte-w7b03k{font-size:.875rem;line-height:1.25rem;list-style:none}.val.null.svelte-w7b03k,.val.undefined.svelte-w7b03k{--tw-text-opacity:1;color:rgb(var(--color-text-tertiary)/var(--tw-text-opacity))}.val.string.svelte-w7b03k{--tw-text-opacity:1;color:rgb(22 163 74/var(--tw-text-opacity))}.svelte-w7b03k:is(.dark .val.string){color:rgba(74,222,128,.8)}.val.number.svelte-w7b03k{--tw-text-opacity:1;color:rgb(234 88 12/var(--tw-text-opacity))}.svelte-w7b03k:is(.dark .val.number){color:rgba(251,146,60,.9)}.val.number.svelte-w7b03k{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.val.boolean.svelte-w7b03k{--tw-text-opacity:1;color:rgb(37 99 235/var(--tw-text-opacity))}.svelte-w7b03k:is(.dark .val.boolean){color:rgba(96,165,250,.9)}",
  map: null
};
const collapsedSymbol = "...";
function getTypeAsString(arg) {
  if (arg === null) {
    return "null";
  }
  if (arg === void 0) {
    return "undefined";
  }
  if (Object.keys(arg).length === 1 && Object.keys(arg).includes("s3")) {
    return "s3object";
  }
  return typeof arg;
}
const ObjectViewer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let keys;
  let isArray;
  let openBracket;
  let closeBracket;
  let keyLimit;
  let fullyCollapsed;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { json } = $$props;
  let { level = 0 } = $$props;
  let { currentPath = "" } = $$props;
  let { pureViewer = false } = $$props;
  let { collapsed = level != 0 && level % 3 == 0 || Array.isArray(json) } = $$props;
  let { rawKey = false } = $$props;
  let { topBrackets = false } = $$props;
  let { topLevelNode = false } = $$props;
  let { allowCopy = true } = $$props;
  let { collapseLevel = void 0 } = $$props;
  let s3FileViewer;
  createEventDispatcher();
  if ($$props.json === void 0 && $$bindings.json && json !== void 0) $$bindings.json(json);
  if ($$props.level === void 0 && $$bindings.level && level !== void 0) $$bindings.level(level);
  if ($$props.currentPath === void 0 && $$bindings.currentPath && currentPath !== void 0) $$bindings.currentPath(currentPath);
  if ($$props.pureViewer === void 0 && $$bindings.pureViewer && pureViewer !== void 0) $$bindings.pureViewer(pureViewer);
  if ($$props.collapsed === void 0 && $$bindings.collapsed && collapsed !== void 0) $$bindings.collapsed(collapsed);
  if ($$props.rawKey === void 0 && $$bindings.rawKey && rawKey !== void 0) $$bindings.rawKey(rawKey);
  if ($$props.topBrackets === void 0 && $$bindings.topBrackets && topBrackets !== void 0) $$bindings.topBrackets(topBrackets);
  if ($$props.topLevelNode === void 0 && $$bindings.topLevelNode && topLevelNode !== void 0) $$bindings.topLevelNode(topLevelNode);
  if ($$props.allowCopy === void 0 && $$bindings.allowCopy && allowCopy !== void 0) $$bindings.allowCopy(allowCopy);
  if ($$props.collapseLevel === void 0 && $$bindings.collapseLevel && collapseLevel !== void 0) $$bindings.collapseLevel(collapseLevel);
  if ($$props.getTypeAsString === void 0 && $$bindings.getTypeAsString && getTypeAsString !== void 0) $$bindings.getTypeAsString(getTypeAsString);
  $$result.css.add(css$9);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    keys = ["object", "s3object"].includes(getTypeAsString(json)) ? Object.keys(json) : [];
    isArray = Array.isArray(json);
    openBracket = isArray ? "[" : "{";
    closeBracket = isArray ? "]" : "}";
    keyLimit = isArray ? 1 : 100;
    fullyCollapsed = keys.length > 1 && collapsed;
    $$rendered = `${validate_component(Portal, "Portal").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(S3FilePicker, "S3FilePicker").$$render(
          $$result,
          { readOnlyMode: true, this: s3FileViewer },
          {
            this: ($$value) => {
              s3FileViewer = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })} ${keys.length > 0 ? `${!fullyCollapsed ? `<span class="svelte-w7b03k">${level != 0 && keys.length > 1 ? `  <span class="cursor-pointer border hover:bg-surface-hover px-1 rounded svelte-w7b03k" data-svelte-h="svelte-1fic7a3">-</span>` : ``} ${level == 0 && topBrackets ? `<span class="h-0 svelte-w7b03k">${escape(openBracket)}</span>` : ``} <ul class="${escape(null_to_empty(`w-full pl-2 ${level === 0 ? "border-none" : "border-l border-dotted"}`), true) + " svelte-w7b03k"}">${each(keys.length > keyLimit ? keys.slice(0, keyLimit) : keys, (key, index) => {
      return `<li class="svelte-w7b03k"><button class="whitespace-nowrap svelte-w7b03k">${topLevelNode ? `${validate_component(Badge, "Badge").$$render(
        $$result,
        {
          baseClass: "border border-blue-600",
          color: "indigo"
        },
        {},
        {
          default: () => {
            return `${escape(key)}`;
          }
        }
      )} ` : `<span class="${"key " + escape(pureViewer ? "cursor-auto" : "border ", true) + " font-semibold rounded px-1 hover:bg-surface-hover text-2xs text-secondary svelte-w7b03k"}">${escape(!isArray ? key : index)}</span> `}:</button> ${getTypeAsString(json[key]) === "object" ? `${validate_component(ObjectViewer, "svelte:self").$$render(
        $$result,
        {
          json: json[key],
          level: level + 1,
          currentPath: computeKey(key, isArray, currentPath),
          pureViewer,
          allowCopy,
          collapseLevel,
          collapsed: collapseLevel !== void 0 ? level + 1 >= collapseLevel : void 0
        },
        {},
        {}
      )}` : `<button class="${"val text-left " + escape(pureViewer ? "cursor-auto" : "", true) + " rounded px-1 hover:bg-blue-100 dark:hover:bg-blue-100/10 " + escape(getTypeAsString(json[key]), true) + " svelte-w7b03k"}">${json[key] === NEVER_TESTED_THIS_FAR ? `${validate_component(WarningMessage, "WarningMessage").$$render($$result, {}, {}, {})}` : `${json[key] == void 0 ? `<span class="text-2xs svelte-w7b03k" data-svelte-h="svelte-14ipu5q">undefined</span>` : `${json[key] == null ? `<span class="text-2xs svelte-w7b03k" data-svelte-h="svelte-wnp6z5">null</span>` : `${typeof json[key] == "string" ? `<span${add_attribute("title", json[key], 0)} class="text-2xs svelte-w7b03k">&quot;${escape(truncate(json[key], 200))}&quot;</span>` : `<span${add_attribute("title", JSON.stringify(json[key]), 0)} class="text-2xs svelte-w7b03k">${escape(truncate(JSON.stringify(json[key]), 200))} </span>`}`}`}`} </button>`} </li>`;
    })} ${keys.length > keyLimit ? (() => {
      let increment = Math.min(100, keys.length - keyLimit);
      return ` <button class="text-xs py-2 text-blue-600 svelte-w7b03k">${escape(keyLimit)}/${escape(keys.length)}: Load ${escape(increment)} more...</button>`;
    })() : ``}</ul> ${level == 0 && topBrackets ? `<div class="flex svelte-w7b03k"><span class="h-0 svelte-w7b03k">${escape(closeBracket)}</span> ${getTypeAsString(json) === "s3object" ? `<a class="text-secondary underline font-semibold text-2xs whitespace-nowrap ml-1 w-fit svelte-w7b03k"${add_attribute("href", `/api/w/${$workspaceStore}/job_helpers/download_s3_file?file_key=${json?.s3}${json?.storage ? `&storage=${json.storage}` : ""}`, 0)}${add_attribute("download", json?.s3.split("/").pop() ?? "unnamed_download.file", 0)}><span class="flex items-center gap-1 svelte-w7b03k">${validate_component(Download, "Download").$$render($$result, { size: 12 }, {}, {})}download</span></a> <button class="text-secondary underline text-2xs whitespace-nowrap ml-1 svelte-w7b03k"><span class="flex items-center gap-1 svelte-w7b03k">${validate_component(Panel_right_open, "PanelRightOpen").$$render($$result, { size: 12 }, {}, {})}open preview</span></button>` : ``}</div>` : ``}</span>` : ``}   <span class="${[
      "border border-blue-600 rounded px-1 cursor-pointer hover:bg-gray-200 svelte-w7b03k",
      !fullyCollapsed ? "hidden" : ""
    ].join(" ").trim()}">${escape(openBracket)}${escape(collapsedSymbol)}${escape(closeBracket)}</span> ${fullyCollapsed ? `<span class="text-tertiary text-xs svelte-w7b03k">${escape(pluralize(Object.keys(json).length, Array.isArray(json) ? "item" : "key"))}</span>` : ``}` : `${topBrackets ? `<span class="text-primary svelte-w7b03k">${escape(openBracket)}${escape(closeBracket)}</span>` : `${json == void 0 ? `<span class="text-tertiary text-2xs ml-2 svelte-w7b03k" data-svelte-h="svelte-3uqlk0">undefined</span>` : `<span class="text-tertiary text-2xs ml-2 svelte-w7b03k" data-svelte-h="svelte-ysk3vq">No items ([])</span>`}`}`}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
const FieldHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label } = $$props;
  let { format = "" } = $$props;
  let { contentEncoding = "" } = $$props;
  let { type = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { required = false } = $$props;
  let { displayType = true } = $$props;
  let { labelClass = "" } = $$props;
  let { prettify = false } = $$props;
  let { simpleTooltip = void 0 } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.format === void 0 && $$bindings.format && format !== void 0) $$bindings.format(format);
  if ($$props.contentEncoding === void 0 && $$bindings.contentEncoding && contentEncoding !== void 0) $$bindings.contentEncoding(contentEncoding);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0) $$bindings.required(required);
  if ($$props.displayType === void 0 && $$bindings.displayType && displayType !== void 0) $$bindings.displayType(displayType);
  if ($$props.labelClass === void 0 && $$bindings.labelClass && labelClass !== void 0) $$bindings.labelClass(labelClass);
  if ($$props.prettify === void 0 && $$bindings.prettify && prettify !== void 0) $$bindings.prettify(prettify);
  if ($$props.simpleTooltip === void 0 && $$bindings.simpleTooltip && simpleTooltip !== void 0) $$bindings.simpleTooltip(simpleTooltip);
  return `<div class="inline-flex flex-row items-baseline truncated"><span${add_attribute("class", twMerge(disabled ? "text-tertiary" : "", "font-semibold", labelClass), 0)}>${prettify ? `${escape(label.replace(/_/g, " ").split(" ").map(capitalize).join(" "))}` : `${escape(label)}`}</span> ${!disabled ? `${validate_component(Required, "Required").$$render($$result, { required, class: "!ml-0" }, {}, {})}` : ``} ${displayType ? `${format && !format.startsWith("resource") ? `<span class="text-xs italic ml-2 text-tertiary dark:text-indigo-400">${escape(format)}</span>` : `<span class="text-xs italic ml-2 text-tertiary dark:text-indigo-400">${escape(type ?? "any")}${escape(contentEncoding && contentEncoding != "" ? `, encoding: ${contentEncoding}` : "")}</span>`}` : ``} ${!emptyString(simpleTooltip) ? `${validate_component(Tooltip, "Tooltip").$$render($$result, { class: "ml-2" }, {}, {
    default: () => {
      return `<span class="text-xs">${escape(simpleTooltip)}</span>`;
    }
  })}` : ``}</div>`;
});
const css$8 = {
  code: ".rangeSlider{--pip:var(--range-pip,#789);--pip-text:var(--range-pip-text,var(--pip));--pip-active:var(--range-pip-active,#2f4f4f);--pip-active-text:var(--range-pip-active-text,var(--pip-active));--pip-hover:var(--range-pip-hover,#2f4f4f);--pip-hover-text:var(--range-pip-hover-text,var(--pip-hover));--pip-in-range:var(--range-pip-in-range,var(--pip-active));--pip-in-range-text:var(--range-pip-in-range-text,var(--pip-active-text))}.rangePips{bottom:-1em;height:1em;left:0;position:absolute;right:0}.rangePips.vertical{bottom:0;height:auto;left:100%;right:auto;top:0;width:1em}.rangePips .pip{height:.4em;position:absolute;top:.25em;white-space:nowrap;width:1px}.rangePips.vertical .pip{bottom:auto;height:1px;left:.25em;top:auto;width:.4em}.rangePips .pipVal{position:absolute;top:.4em;transform:translate(-50%,25%)}.rangePips.vertical .pipVal{left:.4em;position:absolute;top:0;transform:translate(25%,-50%)}.rangePips .pip{transition:all .15s ease}.rangePips .pipVal{transition:all .15s ease,font-weight 0s linear}.rangePips .pip{background-color:#789;background-color:var(--pip);color:#789;color:var(--pip-text)}.rangePips .pip.selected{background-color:#2f4f4f;background-color:var(--pip-active);color:#2f4f4f;color:var(--pip-active-text)}.rangePips.hoverable:not(.disabled) .pip:hover{background-color:#2f4f4f;background-color:var(--pip-hover);color:#2f4f4f;color:var(--pip-hover-text)}.rangePips .pip.in-range{background-color:#2f4f4f;background-color:var(--pip-in-range);color:#2f4f4f;color:var(--pip-in-range-text)}.rangePips .pip.selected{height:.75em}.rangePips.vertical .pip.selected{height:1px;width:.75em}.rangePips .pip.selected .pipVal{font-weight:700;top:.75em}.rangePips.vertical .pip.selected .pipVal{left:.75em;top:0}.rangePips.hoverable:not(.disabled) .pip:not(.selected):hover{transition:none}.rangePips.hoverable:not(.disabled) .pip:not(.selected):hover .pipVal{font-weight:700;transition:none}",
  map: null
};
const RangePips = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pipStep;
  let pipCount;
  let pipVal;
  let isSelected;
  let inRange;
  let { range = false } = $$props;
  let { min = 0 } = $$props;
  let { max = 100 } = $$props;
  let { step: step2 = 1 } = $$props;
  let { values = [(max + min) / 2] } = $$props;
  let { vertical = false } = $$props;
  let { reversed = false } = $$props;
  let { hoverable = true } = $$props;
  let { disabled = false } = $$props;
  let { pipstep = void 0 } = $$props;
  let { all = true } = $$props;
  let { first = void 0 } = $$props;
  let { last = void 0 } = $$props;
  let { rest = void 0 } = $$props;
  let { prefix = "" } = $$props;
  let { suffix = "" } = $$props;
  let { formatter = (v, i, p) => v } = $$props;
  let { focus = void 0 } = $$props;
  let { orientationStart = void 0 } = $$props;
  let { percentOf = void 0 } = $$props;
  let { moveHandle = void 0 } = $$props;
  let { fixFloat = void 0 } = $$props;
  let { normalisedClient: normalisedClient2 = void 0 } = $$props;
  if ($$props.range === void 0 && $$bindings.range && range !== void 0) $$bindings.range(range);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0) $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0) $$bindings.max(max);
  if ($$props.step === void 0 && $$bindings.step && step2 !== void 0) $$bindings.step(step2);
  if ($$props.values === void 0 && $$bindings.values && values !== void 0) $$bindings.values(values);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0) $$bindings.vertical(vertical);
  if ($$props.reversed === void 0 && $$bindings.reversed && reversed !== void 0) $$bindings.reversed(reversed);
  if ($$props.hoverable === void 0 && $$bindings.hoverable && hoverable !== void 0) $$bindings.hoverable(hoverable);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.pipstep === void 0 && $$bindings.pipstep && pipstep !== void 0) $$bindings.pipstep(pipstep);
  if ($$props.all === void 0 && $$bindings.all && all !== void 0) $$bindings.all(all);
  if ($$props.first === void 0 && $$bindings.first && first !== void 0) $$bindings.first(first);
  if ($$props.last === void 0 && $$bindings.last && last !== void 0) $$bindings.last(last);
  if ($$props.rest === void 0 && $$bindings.rest && rest !== void 0) $$bindings.rest(rest);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0) $$bindings.prefix(prefix);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0) $$bindings.suffix(suffix);
  if ($$props.formatter === void 0 && $$bindings.formatter && formatter !== void 0) $$bindings.formatter(formatter);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0) $$bindings.focus(focus);
  if ($$props.orientationStart === void 0 && $$bindings.orientationStart && orientationStart !== void 0) $$bindings.orientationStart(orientationStart);
  if ($$props.percentOf === void 0 && $$bindings.percentOf && percentOf !== void 0) $$bindings.percentOf(percentOf);
  if ($$props.moveHandle === void 0 && $$bindings.moveHandle && moveHandle !== void 0) $$bindings.moveHandle(moveHandle);
  if ($$props.fixFloat === void 0 && $$bindings.fixFloat && fixFloat !== void 0) $$bindings.fixFloat(fixFloat);
  if ($$props.normalisedClient === void 0 && $$bindings.normalisedClient && normalisedClient2 !== void 0) $$bindings.normalisedClient(normalisedClient2);
  $$result.css.add(css$8);
  pipStep = pipstep || ((max - min) / step2 >= (vertical ? 50 : 100) ? (max - min) / (vertical ? 10 : 20) : 1);
  pipCount = parseInt((max - min) / (step2 * pipStep), 10);
  pipVal = function(val) {
    return fixFloat(min + val * step2 * pipStep);
  };
  isSelected = function(val) {
    return values.some((v) => fixFloat(v) === fixFloat(val));
  };
  inRange = function(val) {
    if (range === "min") {
      return values[0] > val;
    } else if (range === "max") {
      return values[0] < val;
    } else if (range) {
      return values[0] < val && values[1] > val;
    }
  };
  return ` <div class="${[
    "rangePips",
    (disabled ? "disabled" : "") + " " + (hoverable ? "hoverable" : "") + " " + (vertical ? "vertical" : "") + " " + (reversed ? "reversed" : "") + " " + (focus ? "focus" : "")
  ].join(" ").trim()}">${all && first !== false || first ? `<span class="${[
    "pip first",
    (isSelected(min) ? "selected" : "") + " " + (inRange(min) ? "in-range" : "")
  ].join(" ").trim()}" style="${escape(orientationStart, true) + ": 0%;"}">${all === "label" || first === "label" ? `<span class="pipVal">${prefix ? `<span class="pipVal-prefix">${escape(prefix)}</span>` : ``}<!-- HTML_TAG_START -->${formatter(fixFloat(min), 0, 0)}<!-- HTML_TAG_END -->${suffix ? `<span class="pipVal-suffix">${escape(suffix)}</span>` : ``}</span>` : ``}</span>` : ``} ${all && rest !== false || rest ? `${each(Array(pipCount + 1), (_, i) => {
    return `${pipVal(i) !== min && pipVal(i) !== max ? `<span class="${[
      "pip",
      (isSelected(pipVal(i)) ? "selected" : "") + " " + (inRange(pipVal(i)) ? "in-range" : "")
    ].join(" ").trim()}" style="${escape(orientationStart, true) + ": " + escape(percentOf(pipVal(i)), true) + "%;"}">${all === "label" || rest === "label" ? `<span class="pipVal">${prefix ? `<span class="pipVal-prefix">${escape(prefix)}</span>` : ``}<!-- HTML_TAG_START -->${formatter(pipVal(i), i, percentOf(pipVal(i)))}<!-- HTML_TAG_END -->${suffix ? `<span class="pipVal-suffix">${escape(suffix)}</span>` : ``} </span>` : ``} </span>` : ``}`;
  })}` : ``} ${all && last !== false || last ? `<span class="${[
    "pip last",
    (isSelected(max) ? "selected" : "") + " " + (inRange(max) ? "in-range" : "")
  ].join(" ").trim()}" style="${escape(orientationStart, true) + ": 100%;"}">${all === "label" || last === "label" ? `<span class="pipVal">${prefix ? `<span class="pipVal-prefix">${escape(prefix)}</span>` : ``}<!-- HTML_TAG_START -->${formatter(fixFloat(max), pipCount, 100)}<!-- HTML_TAG_END -->${suffix ? `<span class="pipVal-suffix">${escape(suffix)}</span>` : ``}</span>` : ``}</span>` : ``}</div>`;
});
const css$7 = {
  code: '.rangeSlider{--slider:var(--range-slider,#d7dada);--handle-inactive:var(--range-handle-inactive,#99a2a2);--handle:var(--range-handle,#838de7);--handle-focus:var(--range-handle-focus,#4a40d4);--handle-border:var(--range-handle-border,var(--handle));--range-inactive:var(--range-range-inactive,var(--handle-inactive));--range:var(--range-range,var(--handle-focus));--float-inactive:var(--range-float-inactive,var(--handle-inactive));--float:var(--range-float,var(--handle-focus));--float-text:var(--range-float-text,#fff);border-radius:100px;height:.5em;margin:1em;position:relative;transition:opacity .2s ease;-webkit-user-select:none;-moz-user-select:none;user-select:none}.rangeSlider *{-webkit-user-select:none;-moz-user-select:none;user-select:none}.rangeSlider.pips{margin-bottom:1.8em}.rangeSlider.pip-labels{margin-bottom:2.8em}.rangeSlider.vertical{border-radius:100px;display:inline-block;min-height:200px;width:.5em}.rangeSlider.vertical.pips{margin-bottom:1em;margin-right:1.8em}.rangeSlider.vertical.pip-labels{margin-bottom:1em;margin-right:2.8em}.rangeSlider .rangeHandle{bottom:auto;display:block;height:1.4em;position:absolute;top:.25em;transform:translateY(-50%) translateX(-50%);width:1.4em;z-index:2}.rangeSlider.reversed .rangeHandle{transform:translateY(-50%) translateX(50%)}.rangeSlider.vertical .rangeHandle{left:.25em;top:auto;transform:translateY(50%) translateX(-50%)}.rangeSlider.vertical.reversed .rangeHandle{transform:translateY(-50%) translateX(-50%)}.rangeSlider .rangeHandle:before,.rangeSlider .rangeNub{border-radius:10em;display:block;height:100%;left:0;position:absolute;top:0;transition:box-shadow .2s ease;width:100%}.rangeSlider .rangeHandle:before{bottom:1px;box-shadow:0 0 0 0 var(--handle-border);content:"";height:auto;left:1px;opacity:0;right:1px;top:1px;width:auto}.rangeSlider.hoverable:not(.disabled) .rangeHandle:hover:before{box-shadow:0 0 0 8px var(--handle-border);opacity:.2}.rangeSlider.hoverable:not(.disabled) .rangeHandle.press:before,.rangeSlider.hoverable:not(.disabled) .rangeHandle.press:hover:before{box-shadow:0 0 0 12px var(--handle-border);opacity:.4}.rangeSlider.range:not(.min):not(.max) .rangeNub{border-radius:10em 10em 10em 1.6em}.rangeSlider.range .rangeHandle:first-of-type .rangeNub{transform:rotate(-135deg)}.rangeSlider.range .rangeHandle:nth-of-type(2) .rangeNub{transform:rotate(45deg)}.rangeSlider.range.reversed .rangeHandle:first-of-type .rangeNub{transform:rotate(45deg)}.rangeSlider.range.reversed .rangeHandle:nth-of-type(2) .rangeNub{transform:rotate(-135deg)}.rangeSlider.range.vertical .rangeHandle:first-of-type .rangeNub{transform:rotate(135deg)}.rangeSlider.range.vertical .rangeHandle:nth-of-type(2) .rangeNub{transform:rotate(-45deg)}.rangeSlider.range.vertical.reversed .rangeHandle:first-of-type .rangeNub{transform:rotate(-45deg)}.rangeSlider.range.vertical.reversed .rangeHandle:nth-of-type(2) .rangeNub{transform:rotate(135deg)}.rangeSlider .rangeFloat{border-radius:.2em;display:block;font-size:.9em;left:50%;opacity:0;padding:.2em .4em;pointer-events:none;position:absolute;text-align:center;top:-.5em;transform:translate(-50%,-100%);transition:all .2s ease;white-space:nowrap}.rangeSlider .rangeHandle.active .rangeFloat,.rangeSlider.hoverable .rangeHandle:hover .rangeFloat{opacity:1;top:-.2em;transform:translate(-50%,-100%)}.rangeSlider .rangeBar{border-radius:1em;display:block;height:.5em;position:absolute;top:0;transition:background .2s ease;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:1}.rangeSlider.vertical .rangeBar{height:auto;width:.5em}.rangeSlider{background-color:#d7dada;background-color:var(--slider)}.rangeSlider .rangeBar{background-color:#99a2a2;background-color:var(--range-inactive)}.rangeSlider.focus .rangeBar{background-color:#838de7;background-color:var(--range)}.rangeSlider .rangeNub{background-color:#99a2a2;background-color:var(--handle-inactive)}.rangeSlider.focus .rangeNub{background-color:#838de7;background-color:var(--handle)}.rangeSlider .rangeHandle.active .rangeNub{background-color:#4a40d4;background-color:var(--handle-focus)}.rangeSlider .rangeFloat{background-color:#99a2a2;background-color:var(--float-inactive);color:#fff;color:var(--float-text)}.rangeSlider.focus .rangeFloat{background-color:#4a40d4;background-color:var(--float)}.rangeSlider.disabled{opacity:.5}.rangeSlider.disabled .rangeNub{background-color:#d7dada;background-color:var(--slider)}',
  map: null
};
function normalisedClient(e) {
  if (e.type.includes("touch")) {
    return e.touches[0] || e.changedTouches[0];
  } else {
    return e;
  }
}
function pureText(possibleHtml) {
  return `${possibleHtml}`.replace(/<[^>]*>/g, "");
}
const RangeSlider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let percentOf;
  let clampValue;
  let alignValueToStep;
  let orientationStart;
  let orientationEnd;
  let $springPositions, $$unsubscribe_springPositions = noop, $$subscribe_springPositions = () => ($$unsubscribe_springPositions(), $$unsubscribe_springPositions = subscribe(springPositions, ($$value) => $springPositions = $$value), springPositions);
  let { slider = void 0 } = $$props;
  let { range = false } = $$props;
  let { pushy = false } = $$props;
  let { min = 0 } = $$props;
  let { max = 100 } = $$props;
  let { step: step2 = 1 } = $$props;
  let { values = [(max + min) / 2] } = $$props;
  let { vertical = false } = $$props;
  let { float = false } = $$props;
  let { reversed = false } = $$props;
  let { hoverable = true } = $$props;
  let { disabled = false } = $$props;
  let { pips = false } = $$props;
  let { pipstep = void 0 } = $$props;
  let { all = void 0 } = $$props;
  let { first = void 0 } = $$props;
  let { last = void 0 } = $$props;
  let { rest = void 0 } = $$props;
  let { id = void 0 } = $$props;
  let { prefix = "" } = $$props;
  let { suffix = "" } = $$props;
  let { formatter = (v, i, p) => v } = $$props;
  let { handleFormatter = formatter } = $$props;
  let { ariaLabels = [] } = $$props;
  let { precision = 2 } = $$props;
  let { springValues = { stiffness: 0.15, damping: 0.4 } } = $$props;
  const dispatch = createEventDispatcher();
  let valueLength = 0;
  let focus = false;
  let activeHandle = values.length - 1;
  let startValue;
  let previousValue;
  let springPositions;
  const fixFloat = (v) => parseFloat((+v).toFixed(precision));
  function trimRange(values2) {
    if (range === "min" || range === "max") {
      return values2.slice(0, 1);
    } else if (range) {
      return values2.slice(0, 2);
    } else {
      return values2;
    }
  }
  function moveHandle(index, value) {
    value = alignValueToStep(value);
    if (typeof index === "undefined") {
      index = activeHandle;
    }
    if (range) {
      if (index === 0 && value > values[1]) {
        if (pushy) {
          values[1] = value;
        } else {
          value = values[1];
        }
      } else if (index === 1 && value < values[0]) {
        if (pushy) {
          values[0] = value;
        } else {
          value = values[0];
        }
      }
    }
    if (values[index] !== value) {
      values[index] = value;
    }
    if (previousValue !== value) {
      eChange();
      previousValue = value;
    }
    return value;
  }
  function rangeStart(values2) {
    if (range === "min") {
      return 0;
    } else {
      return values2[0];
    }
  }
  function rangeEnd(values2) {
    if (range === "max") {
      return 0;
    } else if (range === "min") {
      return 100 - values2[0];
    } else {
      return 100 - values2[1];
    }
  }
  function eChange() {
    !disabled && dispatch("change", {
      activeHandle,
      startValue,
      previousValue: typeof previousValue === "undefined" ? startValue : previousValue,
      value: values[activeHandle],
      values: values.map((v) => alignValueToStep(v))
    });
  }
  if ($$props.slider === void 0 && $$bindings.slider && slider !== void 0) $$bindings.slider(slider);
  if ($$props.range === void 0 && $$bindings.range && range !== void 0) $$bindings.range(range);
  if ($$props.pushy === void 0 && $$bindings.pushy && pushy !== void 0) $$bindings.pushy(pushy);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0) $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0) $$bindings.max(max);
  if ($$props.step === void 0 && $$bindings.step && step2 !== void 0) $$bindings.step(step2);
  if ($$props.values === void 0 && $$bindings.values && values !== void 0) $$bindings.values(values);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0) $$bindings.vertical(vertical);
  if ($$props.float === void 0 && $$bindings.float && float !== void 0) $$bindings.float(float);
  if ($$props.reversed === void 0 && $$bindings.reversed && reversed !== void 0) $$bindings.reversed(reversed);
  if ($$props.hoverable === void 0 && $$bindings.hoverable && hoverable !== void 0) $$bindings.hoverable(hoverable);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.pips === void 0 && $$bindings.pips && pips !== void 0) $$bindings.pips(pips);
  if ($$props.pipstep === void 0 && $$bindings.pipstep && pipstep !== void 0) $$bindings.pipstep(pipstep);
  if ($$props.all === void 0 && $$bindings.all && all !== void 0) $$bindings.all(all);
  if ($$props.first === void 0 && $$bindings.first && first !== void 0) $$bindings.first(first);
  if ($$props.last === void 0 && $$bindings.last && last !== void 0) $$bindings.last(last);
  if ($$props.rest === void 0 && $$bindings.rest && rest !== void 0) $$bindings.rest(rest);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0) $$bindings.prefix(prefix);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0) $$bindings.suffix(suffix);
  if ($$props.formatter === void 0 && $$bindings.formatter && formatter !== void 0) $$bindings.formatter(formatter);
  if ($$props.handleFormatter === void 0 && $$bindings.handleFormatter && handleFormatter !== void 0) $$bindings.handleFormatter(handleFormatter);
  if ($$props.ariaLabels === void 0 && $$bindings.ariaLabels && ariaLabels !== void 0) $$bindings.ariaLabels(ariaLabels);
  if ($$props.precision === void 0 && $$bindings.precision && precision !== void 0) $$bindings.precision(precision);
  if ($$props.springValues === void 0 && $$bindings.springValues && springValues !== void 0) $$bindings.springValues(springValues);
  $$result.css.add(css$7);
  clampValue = function(val) {
    return val <= min ? min : val >= max ? max : val;
  };
  alignValueToStep = function(val) {
    if (val <= min) {
      return fixFloat(min);
    } else if (val >= max) {
      return fixFloat(max);
    } else {
      val = fixFloat(val);
    }
    let remainder = (val - min) % step2;
    let aligned = val - remainder;
    if (Math.abs(remainder) * 2 >= step2) {
      aligned += remainder > 0 ? step2 : -step2;
    }
    aligned = clampValue(aligned);
    return fixFloat(aligned);
  };
  percentOf = function(val) {
    let perc = (val - min) / (max - min) * 100;
    if (isNaN(perc) || perc <= 0) {
      return 0;
    } else if (perc >= 100) {
      return 100;
    } else {
      return fixFloat(perc);
    }
  };
  {
    {
      if (!Array.isArray(values)) {
        values = [(max + min) / 2];
        console.error("'values' prop should be an Array (https://github.com/simeydotme/svelte-range-slider-pips#slider-props)");
      }
      const trimmedAlignedValues = trimRange(values.map((v) => alignValueToStep(v)));
      if (!(values.length === trimmedAlignedValues.length) || !values.every((element, index) => fixFloat(element) === trimmedAlignedValues[index])) {
        values = trimmedAlignedValues;
      }
      if (valueLength !== values.length) {
        $$subscribe_springPositions(springPositions = spring(values.map((v) => percentOf(v)), springValues));
      } else {
        springPositions.set(values.map((v) => percentOf(v)));
      }
      valueLength = values.length;
      if (values.length > 1 && !Array.isArray(ariaLabels)) {
        console.warn(`'ariaLabels' prop should be an Array (https://github.com/simeydotme/svelte-range-slider-pips#slider-props)`);
      }
    }
  }
  orientationStart = vertical ? reversed ? "top" : "bottom" : reversed ? "right" : "left";
  orientationEnd = vertical ? reversed ? "bottom" : "top" : reversed ? "left" : "right";
  $$unsubscribe_springPositions();
  return `    <div${add_attribute("id", id, 0)} role="none" class="${[
    "rangeSlider",
    (range ? "range" : "") + " " + (disabled ? "disabled" : "") + " " + (hoverable ? "hoverable" : "") + " " + (vertical ? "vertical" : "") + " " + (reversed ? "reversed" : "") + "  " + (range === "min" ? "min" : "") + " " + (range === "max" ? "max" : "") + " " + (pips ? "pips" : "") + " " + (all === "label" || first === "label" || last === "label" || rest === "label" ? "pip-labels" : "")
  ].join(" ").trim()}"${add_attribute("this", slider, 0)}>${each(values, (value, index) => {
    return `<span role="slider" class="${[
      "rangeHandle",
      " "
    ].join(" ").trim()}"${add_attribute("data-handle", index, 0)} style="${escape(orientationStart, true) + ": " + escape($springPositions[index], true) + "%; z-index: " + escape(activeHandle === index ? 3 : 2, true) + ";"}"${add_attribute("aria-label", ariaLabels[index], 0)}${add_attribute("aria-valuemin", range === true && index === 1 ? values[0] : min, 0)}${add_attribute("aria-valuemax", range === true && index === 0 ? values[1] : max, 0)}${add_attribute("aria-valuenow", value, 0)} aria-valuetext="${escape(prefix, true) + escape(pureText(handleFormatter(value, index, percentOf(value))), true) + escape(suffix, true)}"${add_attribute("aria-orientation", vertical ? "vertical" : "horizontal", 0)}${add_attribute("aria-disabled", disabled, 0)} ${disabled ? "disabled" : ""}${add_attribute("tabindex", disabled ? -1 : 0, 0)}><span class="rangeNub"></span> ${float ? `<span class="rangeFloat">${prefix ? `<span class="rangeFloat-prefix">${escape(prefix)}</span>` : ``}<!-- HTML_TAG_START -->${handleFormatter(value, index, percentOf(value))}<!-- HTML_TAG_END -->${suffix ? `<span class="rangeFloat-suffix">${escape(suffix)}</span>` : ``} </span>` : ``} </span>`;
  })} ${range ? `<span class="rangeBar" style="${escape(orientationStart, true) + ": " + escape(rangeStart($springPositions), true) + "%; " + escape(orientationEnd, true) + ": " + escape(rangeEnd($springPositions), true) + "%;"}"></span>` : ``} ${pips ? `${validate_component(RangePips, "RangePips").$$render(
    $$result,
    {
      values,
      min,
      max,
      step: step2,
      range,
      vertical,
      reversed,
      orientationStart,
      hoverable,
      disabled,
      all,
      first,
      last,
      rest,
      pipstep,
      prefix,
      suffix,
      formatter,
      focus,
      percentOf,
      moveHandle,
      fixFloat,
      normalisedClient
    },
    {},
    {}
  )}` : ``}</div> `;
});
const css$6 = {
  code: "#range-slider-form.rangeSlider{font-size:12px;text-transform:uppercase}.dark #range-slider-form.rangeSlider{background-color:#3b4252}#range-slider-form.rangeSlider .rangeHandle{display:flex;height:2em;justify-content:center;justify-items:center;width:var(--handle-width,2em)!important}#range-slider-form.rangeSlider .rangeFloat{background:transparent;opacity:1;top:50%;transform:translate(-50%,-50%)}.dark #range-slider-form.rangeSlider>.rangePips>.pip{color:#eee}",
  map: null
};
let step = 1;
function calculateAxisStep(min, max) {
  const range = max - min;
  return range < 100 ? 1 : range / 20;
}
const Range = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let axisStep;
  let handleWidth;
  let { min = 0 } = $$props;
  let { max = 100 } = $$props;
  let { initialValue = 0 } = $$props;
  let { value = typeof initialValue === "string" ? parseInt(initialValue) : initialValue } = $$props;
  let { disabled = false } = $$props;
  let { defaultValue = void 0 } = $$props;
  let slider;
  const format = (v, i, p) => {
    return `${v}`;
  };
  if ($$props.min === void 0 && $$bindings.min && min !== void 0) $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0) $$bindings.max(max);
  if ($$props.initialValue === void 0 && $$bindings.initialValue && initialValue !== void 0) $$bindings.initialValue(initialValue);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.defaultValue === void 0 && $$bindings.defaultValue && defaultValue !== void 0) $$bindings.defaultValue(defaultValue);
  $$result.css.add(css$6);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (value === null) {
        value = 0;
      }
    }
    axisStep = calculateAxisStep(min, max);
    handleWidth = `${Math.max(max.toString().length ?? 2, 2)}em`;
    $$rendered = `<div class="flex flex-row w-full mx-2 items-center gap-8"> <div${add_attribute("class", "grow", 0)} style="${"--range-handle-focus: " + escape("#7e9abd", true) + "; --range-handle: " + escape("#7e9abd", true) + "; --handle-width: " + escape(handleWidth, true) + "; --handle-border: 4px;"}">${max <= min ? ` <div class="text-secondary text-sm">Impossible to display range: ${escape(`max (${max}) <= min (${min})`)}</div>` : ` ${validate_component(RangeSlider, "RangeSlider").$$render(
      $$result,
      {
        id: "range-slider-form",
        springValues: { stiffness: 1, damping: 1 },
        min: min == void 0 ? 0 : +min,
        max: max == void 0 ? 1 : +max,
        defaultValue,
        disabled,
        values: [value],
        pips: true,
        float: true,
        first: "label",
        last: "label",
        step,
        pipstep: (axisStep ?? 1) / step,
        formatter: format,
        slider
      },
      {
        slider: ($$value) => {
          slider = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}</div> <input type="number" class="!w-16 h-8 !text-xs mb-6"${add_attribute("max", max, 0)}${add_attribute("min", min, 0)} ${disabled ? "disabled" : ""}${add_attribute("value", value, 0)}> </div>`;
  } while (!$$settled);
  return $$rendered;
});
function filter({
  loadOptions,
  filterText,
  items,
  value,
  itemId,
  groupBy,
  filterSelectedItems,
  itemFilter,
  convertStringItemsToObjects: convertStringItemsToObjects2,
  filterGroupedItems,
  label
}) {
  if (items && loadOptions) return items;
  if (!items) return [];
  if (items && items.length > 0 && typeof items[0] !== "object") {
    items = convertStringItemsToObjects2(items);
  }
  let filterResults = items.filter((item) => {
    let matchesFilter = itemFilter(item[label], filterText, item);
    return matchesFilter;
  });
  if (groupBy) {
    filterResults = filterGroupedItems(filterResults);
  }
  return filterResults;
}
async function getItems({
  dispatch,
  loadOptions,
  convertStringItemsToObjects: convertStringItemsToObjects2,
  filterText
}) {
  let res = await loadOptions(filterText).catch((err) => {
    console.warn("svelte-select loadOptions error :>> ", err);
    dispatch("error", { type: "loadOptions", details: err });
  });
  if (res && !res.cancelled) {
    if (res) {
      if (res && res.length > 0 && typeof res[0] !== "object") {
        res = convertStringItemsToObjects2(res);
      }
      dispatch("loaded", { items: res });
    } else {
      res = [];
    }
    return {
      filteredItems: res,
      loading: false,
      focused: true,
      listOpen: true
    };
  }
}
const css$5 = {
  code: "svg.svelte-1cidz43{color:var(--chevron-icon-colour,currentColor);height:var(--chevron-icon-width,20px);width:var(--chevron-icon-width,20px)}",
  map: null
};
const ChevronIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<svg width="100%" height="100%" viewBox="0 0 20 20" focusable="false" aria-hidden="true" class="svelte-1cidz43"><path fill="currentColor" d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747
          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0
          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502
          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0
          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>`;
});
const css$4 = {
  code: "svg.svelte-1vqnp8a{color:var(--clear-icon-color,currentColor);height:var(--clear-icon-width,20px);width:var(--clear-icon-width,20px)}",
  map: null
};
const ClearIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<svg width="100%" height="100%" viewBox="-2 -2 50 50" focusable="false" aria-hidden="true" role="presentation" class="svelte-1vqnp8a"><path fill="currentColor" d="M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124
    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"></path></svg>`;
});
const css$3 = {
  code: ".loading.svelte-1wg2des{animation:svelte-1wg2des-rotate .75s linear infinite;color:var(--spinner-color,var(--icons-color));height:var(--spinner-height,20px);transform:none;transform-origin:center center;width:var(--spinner-width,20px)}.circle_path.svelte-1wg2des{stroke-dasharray:90;stroke-linecap:round}@keyframes svelte-1wg2des-rotate{to{transform:rotate(1turn)}}",
  map: null
};
const LoadingIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<svg class="loading svelte-1wg2des" viewBox="25 25 50 50"><circle class="circle_path svelte-1wg2des" cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10"></circle></svg>`;
});
const ConditionalPortal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let target;
  let $mode, $$unsubscribe_mode;
  let { condition = false } = $$props;
  const { mode } = getContext("AppViewerContext");
  $$unsubscribe_mode = subscribe(mode, (value) => $mode = value);
  if ($$props.condition === void 0 && $$bindings.condition && condition !== void 0) $$bindings.condition(condition);
  target = $mode === "preview" ? "#app-editor-select" : "body";
  $$unsubscribe_mode();
  return `${condition ? `${validate_component(Portal, "Portal").$$render($$result, { target }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${slots.default ? slots.default({}) : ``}`}`;
});
const ConditionalPortalGlobal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { condition = false } = $$props;
  if ($$props.condition === void 0 && $$bindings.condition && condition !== void 0) $$bindings.condition(condition);
  return `${condition ? `${validate_component(Portal, "Portal").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${slots.default ? slots.default({}) : ``}`}`;
});
const css$2 = {
  code: ".svelte-select.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h{--borderRadius:var(--border-radius);--clearSelectColor:var(--clear-select-color);--clearSelectWidth:var(--clear-select-width);--disabledBackground:var(--disabled-background);--disabledBorderColor:var(--disabled-border-color);--disabledColor:var(--disabled-color);--disabledPlaceholderColor:var(--disabled-placeholder-color);--disabledPlaceholderOpacity:var(--disabled-placeholder-opacity);--errorBackground:var(--error-background);--errorBorder:var(--error-border);--groupItemPaddingLeft:var(--group-item-padding-left);--groupTitleColor:var(--group-title-color);--groupTitleFontSize:var(--group-title-font-size);--groupTitleFontWeight:var(--group-title-font-weight);--groupTitlePadding:var(--group-title-padding);--groupTitleTextTransform:var(--group-title-text-transform);--indicatorColor:var(--chevron-color);--indicatorHeight:var(--chevron-height);--indicatorWidth:var(--chevron-width);--inputColor:var(--input-color);--inputLeft:var(--input-left);--inputLetterSpacing:var(--input-letter-spacing);--inputMargin:var(--input-margin);--inputPadding:var(--input-padding);--itemActiveBackground:var(--item-active-background);--itemColor:var(--item-color);--itemFirstBorderRadius:var(--item-first-border-radius);--itemHoverBG:var(--item-hover-bg);--itemHoverColor:var(--item-hover-color);--itemIsActiveBG:var(--item-is-active-bg);--itemIsActiveColor:var(--item-is-active-color);--itemIsNotSelectableColor:var(--item-is-not-selectable-color);--itemPadding:var(--item-padding);--listBackground:var(--list-background);--listBorder:var(--list-border);--listBorderRadius:var(--list-border-radius);--listEmptyColor:var(--list-empty-color);--listEmptyPadding:var(--list-empty-padding);--listEmptyTextAlign:var(--list-empty-text-align);--listMaxHeight:var(--list-max-height);--listPosition:var(--list-position);--listShadow:var(--list-shadow);--listZIndex:var(--list-z-index);--multiItemBG:var(--multi-item-bg);--multiItemBorderRadius:var(--multi-item-border-radius);--multiItemDisabledHoverBg:var(--multi-item-disabled-hover-bg);--multiItemDisabledHoverColor:var(--multi-item-disabled-hover-color);--multiItemHeight:var(--multi-item-height);--multiItemMargin:var(--multi-item-margin);--multiItemPadding:var(--multi-item-padding);--multiSelectInputMargin:var(--multi-select-input-margin);--multiSelectInputPadding:var(--multi-select-input-padding);--multiSelectPadding:var(--multi-select-padding);--placeholderColor:var(--placeholder-color);--placeholderOpacity:var(--placeholder-opacity);--selectedItemPadding:var(--selected-item-padding);--spinnerColor:var(--spinner-color);--spinnerHeight:var(--spinner-height);--spinnerWidth:var(--spinner-width);--internal-padding:0 0 0 16px;align-items:stretch;background:var(--background,#fff);border:var(--border,1px solid #d8dbdf);border-radius:var(--border-radius,6px);display:flex;font-size:var(--font-size,16px);margin:var(--margin,0);max-height:var(--max-height);min-height:var(--height,42px);padding:var(--padding,var(--internal-padding));position:relative;width:var(--width,100%)}.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h{box-sizing:var(--box-sizing,border-box)}.svelte-select.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h:hover{border:var(--border-hover,1px solid #b2b8bf)}.value-container.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h{align-items:center;align-self:stretch;display:flex;flex:1 1 0%;flex-wrap:wrap;gap:5px 10px;overflow:var(--value-container-overflow,hidden);padding:var(--value-container-padding,5px 0);padding:0!important;position:relative}.indicators.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h,.prepend.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h{align-items:center;display:flex;flex-shrink:0}.indicators.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h{bottom:var(--indicators-bottom);position:var(--indicators-position);right:var(--indicators-right);top:var(--indicators-top)}input.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h{background:transparent;border:none;bottom:0;color:var(--input-color,var(--item-color));cursor:default;font-size:var(--font-size,16px);left:0;letter-spacing:var(--input-letter-spacing,inherit);margin:var(--input-margin,0);min-width:10px;padding:var(--input-padding,0);position:absolute;right:0;top:0}.svelte-kacw3h:not(.multi)>.value-container.svelte-kacw3h>input.svelte-kacw3h{height:100%;width:100%}input.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h::-moz-placeholder{color:var(--placeholder-color,#78848f);opacity:var(--placeholder-opacity,1)}input.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h::placeholder{color:var(--placeholder-color,#78848f);opacity:var(--placeholder-opacity,1)}input.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h:focus{outline:none}.svelte-select.focused.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h{border:var(--border-focused,1px solid #006fe8);border-radius:var(--border-radius-focused,var(--border-radius,6px))}.disabled.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h{background:var(--disabled-background,#ebedef);border-color:var(--disabled-border-color,#ebedef);color:var(--disabled-color,#c1c6cc)}.disabled.svelte-kacw3h input.svelte-kacw3h.svelte-kacw3h::-moz-placeholder{color:var(--disabled-placeholder-color,#c1c6cc);opacity:var(--disabled-placeholder-opacity,.8)}.disabled.svelte-kacw3h input.svelte-kacw3h.svelte-kacw3h::placeholder{color:var(--disabled-placeholder-color,#c1c6cc);opacity:var(--disabled-placeholder-opacity,.8)}.selected-item.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h{color:var(--selected-item-color,inherit);font-size:var(--font-size,16px);overflow:var(--selected-item-overflow,hidden);padding:var(--selected-item-padding,0 20px 0 0);position:relative;text-overflow:ellipsis;white-space:nowrap}.multi.svelte-kacw3h .selected-item.svelte-kacw3h.svelte-kacw3h{height:var(--height,42px);line-height:var(--height,42px);position:absolute}.selected-item.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h:focus{outline:none}.hide-selected-item.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h{opacity:0}.icon.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h{align-items:center;display:flex;justify-content:center}.clear-select.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h{all:unset;align-items:center;color:var(--clear-select-color,var(--icons-color));display:flex;flex-shrink:0;height:var(--clear-select-height,100%);justify-content:center;margin:var(--clear-select-margin,0);pointer-events:all;width:var(--clear-select-width,40px)}.clear-select.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h:focus{outline:var(--clear-select-focus-outline,1px solid #006fe8)}.loading.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h{color:var(--loading-color,var(--icons-color));flex-shrink:0;height:var(--loading-height);margin:var(--loading--margin,0);width:var(--loading-width,40px)}.chevron.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h{background:var(--chevron-background,transparent);border:var(--chevron-border,0 0 0 1px solid #d8dbdf);color:var(--chevron-color,var(--icons-color));flex-shrink:0;height:var(--chevron-height,40px);pointer-events:var(--chevron-pointer-events,none);width:var(--chevron-width,40px)}.multi.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h{padding:var(--multi-select-padding,var(--internal-padding))}.multi.svelte-kacw3h input.svelte-kacw3h.svelte-kacw3h{flex:1 1 40px;margin:var(--multi-select-input-margin,5px 0);padding:var(--multi-select-input-padding,0);position:relative}.svelte-select.error.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h{background:var(--error-background,#fff);border:var(--error-border,1px solid #ff2d55)}.a11y-text.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h{clip:rect(1px,1px,1px,1px);border:0;height:1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px;z-index:9999}.multi-item.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h{background:var(--multi-item-bg,#ebedef);border-radius:var(--multi-item-border-radius,4px);color:var(--multi-item-color,var(--item-color));cursor:default;display:flex;gap:var(--multi-item-gap,4px);height:var(--multi-item-height,25px);line-height:var(--multi-item-height,25px);margin:var(--multi-item-margin,0);max-width:var(--multi-max-width,none);outline:var(--multi-item-outline,1px solid #ddd);outline-offset:-1px;overflow:hidden;padding:var(--multi-item-padding,0 5px)}.multi-item.disabled.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h:hover{background:var(--multi-item-disabled-hover-bg,#ebedef);color:var(--multi-item-disabled-hover-color,#c1c6cc)}.multi-item-text.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.multi-item-clear.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h{--clear-icon-color:var(--multi-item-clear-icon-color,#000);align-items:center;display:flex;justify-content:center}.multi-item.active.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h{outline:var(--multi-item-active-outline,1px solid #006fe8)}.svelte-select-list.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h{background:var(--list-background,#fff);border:var(--list-border);border-radius:var(--list-border-radius,4px);box-shadow:var(--list-shadow,0 2px 3px 0 rgba(44,62,80,.24));font-size:small!important;max-height:var(--list-max-height,252px);overflow-y:auto;position:var(--list-position,absolute);z-index:var(--list-z-index,5000)}.prefloat.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h{opacity:0;pointer-events:none}.list-group-title.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h{color:var(--group-title-color,#8f8f8f);cursor:default;font-size:var(--group-title-font-size,16px);font-weight:var(--group-title-font-weight,600);height:var(--height,42px);line-height:var(--height,42px);overflow-x:hidden;padding:var(--group-title-padding,0 20px);text-overflow:ellipsis;text-transform:var(--group-title-text-transform,uppercase);white-space:nowrap}.empty.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h{color:var(--list-empty-color,#78848f);padding:var(--list-empty-padding,20px 0);text-align:var(--list-empty-text-align,center)}.item.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h{align-items:center;color:var(--item-color,inherit);cursor:default;height:var(--item-height,var(--height,42px));line-height:var(--item-line-height,var(--height,42px));overflow:hidden;padding:var(--item-padding,0 20px);text-overflow:ellipsis;transition:var(--item-transition,all .2s);white-space:nowrap;width:100%}.item.group-item.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h{padding-left:var(--group-item-padding-left,40px)}.item.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h:active{background:var(--item-active-background,#b9daff)}.item.active.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h{background:var(--item-is-active-bg,#007aff);color:var(--item-is-active-color,#fff)}.item.first.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h{border-radius:var(--item-first-border-radius,4px 4px 0 0)}.item.hover.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h:not(.active){background:var(--item-hover-bg,#e7f2ff);color:var(--item-hover-color,inherit)}.item.active.item.not-selectable.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h,.item.hover.item.not-selectable.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h,.item.not-selectable.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h,.item.not-selectable.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h:active{background:transparent;color:var(--item-is-not-selectable-color,#999)}.required.svelte-kacw3h.svelte-kacw3h.svelte-kacw3h{bottom:0;left:0;opacity:0;position:absolute;right:0;top:0;z-index:-1}",
  map: null
};
function convertStringItemsToObjects(_items) {
  return _items.map((item, index) => {
    return { index, value: item, label: `${item}` };
  });
}
function isItemActive(item, value, itemId) {
  return value && value[itemId] === item[itemId];
}
function isItemFirst(itemIndex) {
  return itemIndex === 0;
}
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hasValue;
  let hideSelectedItem;
  let showClear;
  let placeholderText;
  let ariaSelection;
  let ariaContext;
  let filteredItems;
  let $$slots = compute_slots(slots);
  const dispatch = createEventDispatcher();
  let { portal = true } = $$props;
  let { justValue = null } = $$props;
  let { inAppEditor = false } = $$props;
  let PortalWrapper = inAppEditor ? ConditionalPortal : ConditionalPortalGlobal;
  let { filter: filter$1 = filter } = $$props;
  let { getItems: getItems$1 = getItems } = $$props;
  let { id = null } = $$props;
  let { name = null } = $$props;
  let { container = void 0 } = $$props;
  let { input = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { focused = false } = $$props;
  let { value = void 0 } = $$props;
  let { filterText = "" } = $$props;
  let { placeholder = "Please select" } = $$props;
  let { items = void 0 } = $$props;
  let { label = "label" } = $$props;
  let { itemFilter = (label2, filterText2, option) => `${label2}`.toLowerCase().includes(filterText2.toLowerCase()) } = $$props;
  let { groupBy = void 0 } = $$props;
  let { groupFilter = (groups) => groups } = $$props;
  let { groupHeaderSelectable = false } = $$props;
  let { itemId = "value" } = $$props;
  let { loadOptions = void 0 } = $$props;
  let { containerStyles = "" } = $$props;
  let { hasError = false } = $$props;
  let { filterSelectedItems = true } = $$props;
  let { required = false } = $$props;
  let { closeListOnChange = true } = $$props;
  let { computeOnClick = false } = $$props;
  let { createGroupHeaderItem = (groupValue, item) => {
    return { value: groupValue, [label]: groupValue };
  } } = $$props;
  const getFilteredItems = () => {
    return filteredItems;
  };
  let { searchable = true } = $$props;
  let { inputStyles = "" } = $$props;
  let { clearable = true } = $$props;
  let { loading = false } = $$props;
  let { listOpen = false } = $$props;
  let timeout;
  let { debounce = (fn, wait = 1) => {
    clearTimeout(timeout);
    timeout = setTimeout(fn, wait);
  } } = $$props;
  let { debounceWait = 300 } = $$props;
  let { hideEmptyState = false } = $$props;
  let { inputAttributes = {} } = $$props;
  let { listAutoWidth = true } = $$props;
  let { showChevron = false } = $$props;
  let { listOffset = 5 } = $$props;
  let { hoverItemIndex = 0 } = $$props;
  let { floatingConfig = {} } = $$props;
  let { class: containerClasses = "" } = $$props;
  let prev_filterText;
  let hasClicked = false;
  function setValue() {
    if (typeof value === "string") {
      let item = (items || []).find((item2) => item2[itemId] === value);
      value = item || { [itemId]: value, label: value };
    }
  }
  let _inputAttributes;
  function assignInputAttributes() {
    _inputAttributes = Object.assign(
      {
        autocapitalize: "none",
        autocomplete: "off",
        autocorrect: "off",
        spellcheck: false,
        tabindex: 0,
        type: "text",
        "aria-autocomplete": "list"
      },
      inputAttributes
    );
    if (id) {
      _inputAttributes["id"] = id;
    }
    if (!searchable) {
      _inputAttributes["readonly"] = true;
    }
  }
  function filterGroupedItems(_items) {
    const groupValues = [];
    const groups = {};
    _items.forEach((item) => {
      const groupValue = groupBy(item);
      if (!groupValues.includes(groupValue)) {
        groupValues.push(groupValue);
        groups[groupValue] = [];
        if (groupValue) {
          groups[groupValue].push(Object.assign(createGroupHeaderItem(groupValue, item), {
            id: groupValue,
            groupHeader: true,
            selectable: groupHeaderSelectable
          }));
        }
      }
      groups[groupValue].push(Object.assign({ groupItem: !!groupValue }, item));
    });
    const sortedGroupedItems = [];
    groupFilter(groupValues).forEach((groupValue) => {
      if (groups[groupValue]) sortedGroupedItems.push(...groups[groupValue]);
    });
    return sortedGroupedItems;
  }
  function dispatchSelectedItem() {
    {
      dispatch("input", value);
    }
  }
  function setValueIndexAsHoverIndex() {
    const valueIndex = filteredItems.findIndex((i) => {
      return i[itemId] === value[itemId];
    });
    checkHoverSelectable(valueIndex, true);
  }
  function dispatchHover(i) {
    dispatch("hoverItem", i);
  }
  function checkHoverSelectable(startingIndex = 0, ignoreGroup) {
    hoverItemIndex = startingIndex < 0 ? 0 : startingIndex;
    if (!ignoreGroup && groupBy && filteredItems[hoverItemIndex] && !filteredItems[hoverItemIndex].selectable) {
      setHoverIndex(1);
    }
  }
  function setupFilterText() {
    if (computeOnClick && !hasClicked) return;
    if (!loadOptions && filterText.length === 0) return;
    if (loadOptions) {
      debounce(
        async function() {
          loading = true;
          let res = await getItems$1({
            dispatch,
            loadOptions,
            convertStringItemsToObjects,
            filterText
          });
          if (res) {
            loading = res.loading;
            listOpen = listOpen ? res.listOpen : filterText.length > 0 ? true : false;
            focused = listOpen && res.focused;
            items = groupBy ? filterGroupedItems(res.filteredItems) : res.filteredItems;
          } else {
            loading = false;
            focused = true;
            listOpen = true;
          }
        },
        debounceWait
      );
    } else {
      listOpen = true;
    }
  }
  function handleFilterEvent(items2) {
    if (listOpen) dispatch("filter", items2);
  }
  function computeJustValue() {
    return value ? value[itemId] : value;
  }
  function findItem(selection) {
    let matchTo = selection ? selection[itemId] : value[itemId];
    return items.find((item) => item[itemId] === matchTo);
  }
  function updateValueDisplay(items2) {
    if (!items2 || items2.length === 0 || items2.some((item) => typeof item !== "object")) return;
    if (!value || !value[itemId]) return;
    if (Array.isArray(value)) {
      value = value.map((selection) => findItem(selection) || selection);
    } else {
      value = findItem() || value;
    }
  }
  function handleFocus(e) {
    if (focused && input === document?.activeElement) return;
    input.focus();
    focused = true;
  }
  function handleClear() {
    dispatch("clear", value);
    value = void 0;
    closeList();
    handleFocus();
  }
  function closeList() {
    filterText = "";
    listOpen = false;
  }
  let { ariaValues = (values) => {
    return `Option ${values}, selected.`;
  } } = $$props;
  let { ariaListOpen = (label2, count) => {
    return `You are currently focused on option ${label2}. There are ${count} results available.`;
  } } = $$props;
  let { ariaFocused = () => {
    return `Select is focused, type to refine list, press down to open the menu.`;
  } } = $$props;
  function handleAriaSelection() {
    let selected = void 0;
    selected = value[label];
    return ariaValues(selected);
  }
  function handleAriaContent() {
    if (!filteredItems || filteredItems.length === 0) return "";
    let _item = filteredItems[hoverItemIndex];
    if (listOpen && _item) {
      let count = filteredItems ? filteredItems.length : 0;
      return ariaListOpen(_item[label], count);
    } else {
      return ariaFocused();
    }
  }
  let list = null;
  onDestroy(() => {
  });
  function setHoverIndex(increment) {
    let selectableFilteredItems = filteredItems.filter((item) => !Object.hasOwn(item, "selectable") || item.selectable === true);
    if (selectableFilteredItems.length === 0) {
      return hoverItemIndex = 0;
    }
    if (hoverItemIndex === filteredItems.length - 1) {
      hoverItemIndex = 0;
    } else {
      hoverItemIndex = hoverItemIndex + increment;
    }
    const hover = filteredItems[hoverItemIndex];
    if (hover && hover.selectable === false) {
      setHoverIndex(increment);
      return;
    }
  }
  function setListWidth() {
    const { width } = container.getBoundingClientRect();
    list.style.width = listAutoWidth && list.clientWidth && list.clientWidth < width ? width + "px" : "auto";
  }
  let _floatingConfig = {
    strategy: "absolute",
    placement: "bottom-start",
    middleware: [offset(listOffset), flip(), shift()],
    autoUpdate: false
  };
  const [floatingRef, floatingContent, floatingUpdate] = createFloatingActions(_floatingConfig);
  let prefloat = true;
  function listMounted(list2, listOpen2) {
    return prefloat = true;
  }
  if ($$props.portal === void 0 && $$bindings.portal && portal !== void 0) $$bindings.portal(portal);
  if ($$props.justValue === void 0 && $$bindings.justValue && justValue !== void 0) $$bindings.justValue(justValue);
  if ($$props.inAppEditor === void 0 && $$bindings.inAppEditor && inAppEditor !== void 0) $$bindings.inAppEditor(inAppEditor);
  if ($$props.filter === void 0 && $$bindings.filter && filter$1 !== void 0) $$bindings.filter(filter$1);
  if ($$props.getItems === void 0 && $$bindings.getItems && getItems$1 !== void 0) $$bindings.getItems(getItems$1);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.container === void 0 && $$bindings.container && container !== void 0) $$bindings.container(container);
  if ($$props.input === void 0 && $$bindings.input && input !== void 0) $$bindings.input(input);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.focused === void 0 && $$bindings.focused && focused !== void 0) $$bindings.focused(focused);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.filterText === void 0 && $$bindings.filterText && filterText !== void 0) $$bindings.filterText(filterText);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.itemFilter === void 0 && $$bindings.itemFilter && itemFilter !== void 0) $$bindings.itemFilter(itemFilter);
  if ($$props.groupBy === void 0 && $$bindings.groupBy && groupBy !== void 0) $$bindings.groupBy(groupBy);
  if ($$props.groupFilter === void 0 && $$bindings.groupFilter && groupFilter !== void 0) $$bindings.groupFilter(groupFilter);
  if ($$props.groupHeaderSelectable === void 0 && $$bindings.groupHeaderSelectable && groupHeaderSelectable !== void 0) $$bindings.groupHeaderSelectable(groupHeaderSelectable);
  if ($$props.itemId === void 0 && $$bindings.itemId && itemId !== void 0) $$bindings.itemId(itemId);
  if ($$props.loadOptions === void 0 && $$bindings.loadOptions && loadOptions !== void 0) $$bindings.loadOptions(loadOptions);
  if ($$props.containerStyles === void 0 && $$bindings.containerStyles && containerStyles !== void 0) $$bindings.containerStyles(containerStyles);
  if ($$props.hasError === void 0 && $$bindings.hasError && hasError !== void 0) $$bindings.hasError(hasError);
  if ($$props.filterSelectedItems === void 0 && $$bindings.filterSelectedItems && filterSelectedItems !== void 0) $$bindings.filterSelectedItems(filterSelectedItems);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0) $$bindings.required(required);
  if ($$props.closeListOnChange === void 0 && $$bindings.closeListOnChange && closeListOnChange !== void 0) $$bindings.closeListOnChange(closeListOnChange);
  if ($$props.computeOnClick === void 0 && $$bindings.computeOnClick && computeOnClick !== void 0) $$bindings.computeOnClick(computeOnClick);
  if ($$props.createGroupHeaderItem === void 0 && $$bindings.createGroupHeaderItem && createGroupHeaderItem !== void 0) $$bindings.createGroupHeaderItem(createGroupHeaderItem);
  if ($$props.getFilteredItems === void 0 && $$bindings.getFilteredItems && getFilteredItems !== void 0) $$bindings.getFilteredItems(getFilteredItems);
  if ($$props.searchable === void 0 && $$bindings.searchable && searchable !== void 0) $$bindings.searchable(searchable);
  if ($$props.inputStyles === void 0 && $$bindings.inputStyles && inputStyles !== void 0) $$bindings.inputStyles(inputStyles);
  if ($$props.clearable === void 0 && $$bindings.clearable && clearable !== void 0) $$bindings.clearable(clearable);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
  if ($$props.listOpen === void 0 && $$bindings.listOpen && listOpen !== void 0) $$bindings.listOpen(listOpen);
  if ($$props.debounce === void 0 && $$bindings.debounce && debounce !== void 0) $$bindings.debounce(debounce);
  if ($$props.debounceWait === void 0 && $$bindings.debounceWait && debounceWait !== void 0) $$bindings.debounceWait(debounceWait);
  if ($$props.hideEmptyState === void 0 && $$bindings.hideEmptyState && hideEmptyState !== void 0) $$bindings.hideEmptyState(hideEmptyState);
  if ($$props.inputAttributes === void 0 && $$bindings.inputAttributes && inputAttributes !== void 0) $$bindings.inputAttributes(inputAttributes);
  if ($$props.listAutoWidth === void 0 && $$bindings.listAutoWidth && listAutoWidth !== void 0) $$bindings.listAutoWidth(listAutoWidth);
  if ($$props.showChevron === void 0 && $$bindings.showChevron && showChevron !== void 0) $$bindings.showChevron(showChevron);
  if ($$props.listOffset === void 0 && $$bindings.listOffset && listOffset !== void 0) $$bindings.listOffset(listOffset);
  if ($$props.hoverItemIndex === void 0 && $$bindings.hoverItemIndex && hoverItemIndex !== void 0) $$bindings.hoverItemIndex(hoverItemIndex);
  if ($$props.floatingConfig === void 0 && $$bindings.floatingConfig && floatingConfig !== void 0) $$bindings.floatingConfig(floatingConfig);
  if ($$props.class === void 0 && $$bindings.class && containerClasses !== void 0) $$bindings.class(containerClasses);
  if ($$props.handleClear === void 0 && $$bindings.handleClear && handleClear !== void 0) $$bindings.handleClear(handleClear);
  if ($$props.ariaValues === void 0 && $$bindings.ariaValues && ariaValues !== void 0) $$bindings.ariaValues(ariaValues);
  if ($$props.ariaListOpen === void 0 && $$bindings.ariaListOpen && ariaListOpen !== void 0) $$bindings.ariaListOpen(ariaListOpen);
  if ($$props.ariaFocused === void 0 && $$bindings.ariaFocused && ariaFocused !== void 0) $$bindings.ariaFocused(ariaFocused);
  $$result.css.add(css$2);
  {
    if (value) setValue();
  }
  {
    if (inputAttributes || !searchable) assignInputAttributes();
  }
  {
    if (value) dispatchSelectedItem();
  }
  {
    if (!focused && input) closeList();
  }
  {
    if (filterText !== prev_filterText) setupFilterText();
  }
  filteredItems = filter$1({
    loadOptions,
    filterText,
    items,
    value,
    itemId,
    groupBy,
    label,
    filterSelectedItems,
    itemFilter,
    convertStringItemsToObjects,
    filterGroupedItems
  });
  {
    if (listOpen && value && filteredItems) setValueIndexAsHoverIndex();
  }
  {
    if (filterText) hoverItemIndex = 0;
  }
  {
    dispatchHover(hoverItemIndex);
  }
  hasValue = value;
  hideSelectedItem = hasValue && filterText.length > 0;
  showClear = hasValue && clearable && !disabled && !loading;
  placeholderText = value ? "" : placeholder;
  ariaSelection = value ? handleAriaSelection() : "";
  ariaContext = handleAriaContent();
  {
    updateValueDisplay(items);
  }
  justValue = computeJustValue();
  {
    if (listOpen && filteredItems && !value) checkHoverSelectable();
  }
  {
    handleFilterEvent(filteredItems);
  }
  {
    if (container && floatingConfig?.autoUpdate === void 0) {
      _floatingConfig.autoUpdate = true;
    }
  }
  {
    if (container && floatingConfig) floatingUpdate(Object.assign(_floatingConfig, floatingConfig));
  }
  {
    listMounted();
  }
  {
    if (listOpen && container && list) setListWidth();
  }
  {
    if (input && listOpen && !focused) handleFocus();
  }
  return ` <div class="${[
    escape(null_to_empty(twMerge("svelte-select", containerClasses)), true) + " svelte-kacw3h",
    (disabled ? "disabled" : "") + " " + (focused ? "focused" : "") + " " + (listOpen ? "list-open" : "") + " " + (showChevron ? "show-chevron" : "") + " " + (hasError ? "error" : "")
  ].join(" ").trim()}"${add_attribute("style", containerStyles, 0)}${add_attribute("this", container, 0)}>${listOpen ? `${validate_component(PortalWrapper, "PortalWrapper").$$render($$result, { condition: portal }, {}, {
    default: () => {
      return `<div${add_attribute("style", extractCustomProperties(containerStyles), 0)} class="${["svelte-select-list svelte-kacw3h", prefloat ? "prefloat" : ""].join(" ").trim()}"${add_attribute("this", list, 0)}>${$$slots["list-prepend"] ? `${slots["list-prepend"] ? slots["list-prepend"]({}) : ``}` : ``} ${$$slots.list ? `${slots.list ? slots.list({ filteredItems }) : ``}` : `${filteredItems.length > 0 ? `${each(filteredItems, (item, i) => {
        return `<div class="list-item svelte-kacw3h" tabindex="-1"><div class="${[
          "item svelte-kacw3h",
          (item.groupHeader ? "list-group-title" : "") + " " + (isItemActive(item, value, itemId) ? "active" : "") + " " + (isItemFirst(i) ? "first" : "") + " " + (hoverItemIndex === i ? "hover" : "") + " " + (item.groupItem ? "group-item" : "") + " " + (item?.selectable === false ? "not-selectable" : "")
        ].join(" ").trim()}">${slots.item ? slots.item({ item, index: i }) : ` ${escape(item ? truncate(item?.[label], 80) : "")} `}</div> </div>`;
      })}` : `${!hideEmptyState ? `${slots.empty ? slots.empty({}) : ` <div class="empty svelte-kacw3h" data-svelte-h="svelte-16ffy3h">No options</div> `}` : ``}`}`} ${$$slots["list-append"] ? `${slots["list-append"] ? slots["list-append"]({}) : ``}` : ``}</div>`;
    }
  })}` : ``} <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="a11y-text svelte-kacw3h">${focused ? `<span id="aria-selection" class="svelte-kacw3h">${escape(ariaSelection)}</span> <span id="aria-context" class="svelte-kacw3h">${escape(ariaContext)}</span>` : ``}</span> <div class="prepend svelte-kacw3h">${slots.prepend ? slots.prepend({}) : ``}</div> <div class="value-container svelte-kacw3h">${hasValue ? `<div class="${["selected-item svelte-kacw3h", hideSelectedItem ? "hide-selected-item" : ""].join(" ").trim()}">${slots.selection ? slots.selection({ selection: value }) : ` ${escape(value[label])} `}</div>` : ``} <input${spread(
    [
      { readonly: !searchable || null },
      escape_object(_inputAttributes),
      {
        placeholder: escape_attribute_value(placeholderText)
      },
      {
        style: escape_attribute_value(inputStyles)
      }
    ],
    { classes: "svelte-kacw3h" }
  )}${add_attribute("this", input, 0)}${add_attribute("value", filterText, 0)}></div> <div class="indicators svelte-kacw3h">${loading ? `<div class="icon loading svelte-kacw3h" aria-hidden="true">${slots["loading-icon"] ? slots["loading-icon"]({}) : ` ${validate_component(LoadingIcon, "LoadingIcon").$$render($$result, {}, {}, {})} `}</div>` : ``} ${showClear ? `<button type="button" class="icon clear-select svelte-kacw3h">${slots["clear-icon"] ? slots["clear-icon"]({}) : ` ${validate_component(ClearIcon, "ClearIcon").$$render($$result, {}, {}, {})} `}</button>` : ``} ${showChevron ? `<div class="icon chevron svelte-kacw3h" aria-hidden="true">${slots["chevron-icon"] ? slots["chevron-icon"]({ listOpen }) : ` ${validate_component(ChevronIcon, "ChevronIcon").$$render($$result, {}, {}, {})} `}</div>` : ``}</div> ${slots["input-hidden"] ? slots["input-hidden"]({ value }) : ` <input${add_attribute("name", name, 0)} type="hidden"${add_attribute("value", value ? JSON.stringify(value) : null, 0)} class="svelte-kacw3h"> `} ${required && (!value || value.length === 0) ? `${slots.required ? slots.required({ value }) : ` <select class="required svelte-kacw3h" required tabindex="-1" aria-hidden="true"></select> `}` : ``} </div>`;
});
const SELECT_INPUT_DEFAULT_STYLE = {
  inputStyles: "border-radius: 0;",
  containerStyles: "--height: 34px; --padding: 0 0 0 8px; --font-size: 0.875rem;",
  containerStylesDark: "--height: 34px; --padding: 0 0 0 8px; border-color: #4b5563; --font-size: 0.875rem; --disabled-border-color: #3e4c60; --background: #2e3440; --disabled-background: transparent; --list-background: #3b4252;--item-is-active-bg:#434c5e;--item-hover-bg:#4c566a;"
};
const LightweightResourcePicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value2) => $workspaceStore = value2);
  const dispatch = createEventDispatcher();
  let { initialValue = void 0 } = $$props;
  let { value = initialValue } = $$props;
  let { resourceType = void 0 } = $$props;
  let { disablePortal = false } = $$props;
  const appViewerContext = getContext("AppViewerContext");
  let valueSelect = initialValue || value ? {
    value: value ?? initialValue,
    label: value ?? initialValue
  } : "";
  let collection = [valueSelect];
  async function loadResources(resourceType2) {
    const nc = (await ResourceService.listResource({ workspace: $workspaceStore, resourceType: resourceType2 })).map((x) => ({ value: x.path, label: x.path }));
    if (!nc.find((x) => x.value == value) && (initialValue || value)) {
      nc.push({
        value: value ?? initialValue,
        label: value ?? initialValue
      });
    }
    collection = nc;
  }
  let darkMode = false;
  let drawer = void 0;
  if ($$props.initialValue === void 0 && $$bindings.initialValue && initialValue !== void 0) $$bindings.initialValue(initialValue);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.resourceType === void 0 && $$bindings.resourceType && resourceType !== void 0) $$bindings.resourceType(resourceType);
  if ($$props.disablePortal === void 0 && $$bindings.disablePortal && disablePortal !== void 0) $$bindings.disablePortal(disablePortal);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
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
              default: () => {
                return `<iframe title="App connection" class="w-full h-full" src="${escape(base, true) + "/embed_connect?resource_type=" + escape(resourceType, true) + "&workspace=" + escape(appViewerContext?.workspace ?? $workspaceStore, true)}"></iframe>`;
              }
            }
          )}`;
        }
      }
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
    )} ${resourceType ? `${validate_component(Button, "Button").$$render(
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
    )}` : ``}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
function isString(value) {
  return typeof value === "string" || value instanceof String;
}
const LightweightObjectResourceInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { format } = $$props;
  let { value } = $$props;
  let { disablePortal = false } = $$props;
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
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    value && valueToPath();
    $$rendered = `<div class="flex flex-row w-full flex-wrap gap-x-2 gap-y-0.5">${validate_component(LightweightResourcePicker, "LightweightResourcePicker").$$render(
      $$result,
      {
        disablePortal,
        resourceType: format.split("-").length > 1 ? format.substring("resource-".length) : void 0,
        value: path
      },
      {
        value: ($$value) => {
          path = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const DateInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value = void 0 } = $$props;
  let { autofocus = false } = $$props;
  let { minDate = void 0 } = $$props;
  let { maxDate = void 0 } = $$props;
  let { dateFormat = "dd-MM-yyyy" } = $$props;
  let date = void 0;
  createEventDispatcher();
  let randomId = "datetarget-" + Math.random().toString(36).substring(7);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.autofocus === void 0 && $$bindings.autofocus && autofocus !== void 0) $$bindings.autofocus(autofocus);
  if ($$props.minDate === void 0 && $$bindings.minDate && minDate !== void 0) $$bindings.minDate(minDate);
  if ($$props.maxDate === void 0 && $$bindings.maxDate && maxDate !== void 0) $$bindings.maxDate(maxDate);
  if ($$props.dateFormat === void 0 && $$bindings.dateFormat && dateFormat !== void 0) $$bindings.dateFormat(dateFormat);
  return `<div class="flex flex-row gap-1 items-center w-full"${add_attribute("id", randomId, 0)}><input type="date" ${autofocus ? "autofocus" : ""} class="!w-full app-editor-input"${add_attribute("min", minDate, 0)}${add_attribute("max", maxDate, 0)}${add_attribute("value", date, 0)}></div>`;
});
const css = {
  code: "input.currencyInput__formatted.svelte-1794knf{border:1px solid #e2e2e2;box-sizing:border-box;padding:10px}input.currencyInput__formatted--zero.svelte-1794knf{--tw-text-opacity:1;color:rgb(var(--color-text-primary)/var(--tw-text-opacity))}input.currencyInput__formatted--positive.svelte-1794knf{--tw-text-opacity:1;color:rgb(21 128 61/var(--tw-text-opacity))}input.currencyInput__formatted--negative.svelte-1794knf{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}input.currencyInput__formatted.svelte-1794knf:disabled{background-color:#e2e2e2;color:#999;cursor:default;pointer-events:none}",
  map: null
};
const DEFAULT_LOCALE = "en-US";
const DEFAULT_CURRENCY = "USD";
const DEFAULT_NAME = "total";
const DEFAULT_VALUE = 0;
const DEFAULT_FRACTION_DIGITS = 2;
const DEFAULT_CLASS_WRAPPER = "currencyInput";
const DEFAULT_CLASS_UNFORMATTED = "currencyInput__unformatted";
const DEFAULT_CLASS_FORMATTED = "currencyInput__formatted";
const DEFAULT_CLASS_FORMATTED_POSITIVE = "currencyInput__formatted--positive";
const DEFAULT_CLASS_FORMATTED_NEGATIVE = "currencyInput__formatted--negative";
const DEFAULT_CLASS_FORMATTED_ZERO = "currencyInput__formatted--zero";
const CurrencyInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isZero;
  let isNegative;
  let { value = DEFAULT_VALUE } = $$props;
  let { locale = DEFAULT_LOCALE } = $$props;
  let { currency = DEFAULT_CURRENCY } = $$props;
  let { name = DEFAULT_NAME } = $$props;
  let { required = false } = $$props;
  let { disabled = false } = $$props;
  let { placeholder = DEFAULT_VALUE } = $$props;
  let { isNegativeAllowed = true } = $$props;
  let { fractionDigits = DEFAULT_FRACTION_DIGITS } = $$props;
  let { inputClasses = null } = $$props;
  let { noColor = false } = $$props;
  let { style = "" } = $$props;
  const formatCurrency = (value2, maximumFractionDigits, minimumFractionDigits) => {
    try {
      return new Intl.NumberFormat(
        locale,
        {
          currency,
          style: "currency",
          maximumFractionDigits: maximumFractionDigits || 0,
          minimumFractionDigits: minimumFractionDigits || 0
        }
      ).format(value2);
    } catch (e) {
      console.error(e);
      return "ERR";
    }
  };
  const setUnformattedValue = (event) => {
    const currencyDecimal = new Intl.NumberFormat(locale).format(1.1).charAt(1);
    const isDecimalComma = currencyDecimal === ",";
    formatCurrency(0, 0).replace("0", "").replace(
      /\u00A0/,
      ""
    );
    let unformattedValue = isNegativeAllowed ? formattedValue.replace(/[^0-9,.-]/g, "") : formattedValue.replace(/[^0-9,.]/g, "");
    if (Number.isNaN(parseFloat(unformattedValue))) {
      value = 0;
    } else {
      unformattedValue = unformattedValue.replace(isDecimalComma ? /\./g : /\,/g, "");
      if (isDecimalComma) unformattedValue = unformattedValue.replace(",", ".");
      value = parseFloat(unformattedValue);
    }
  };
  const setFormattedValue = () => {
    const startCaretPosition = 0;
    const previousFormattedValueLength = formattedValue.length;
    formattedValue = formatCurrency(value, fractionDigits, 0);
    setUnformattedValue();
    startCaretPosition + formattedValue.length - previousFormattedValueLength;
    setTimeout(
      () => {
      },
      0.1
    );
  };
  let formattedValue = "";
  let formattedPlaceholder = placeholder !== null ? formatCurrency(placeholder, fractionDigits, fractionDigits) : "";
  let darkMode = false;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.locale === void 0 && $$bindings.locale && locale !== void 0) $$bindings.locale(locale);
  if ($$props.currency === void 0 && $$bindings.currency && currency !== void 0) $$bindings.currency(currency);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0) $$bindings.required(required);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.isNegativeAllowed === void 0 && $$bindings.isNegativeAllowed && isNegativeAllowed !== void 0) $$bindings.isNegativeAllowed(isNegativeAllowed);
  if ($$props.fractionDigits === void 0 && $$bindings.fractionDigits && fractionDigits !== void 0) $$bindings.fractionDigits(fractionDigits);
  if ($$props.inputClasses === void 0 && $$bindings.inputClasses && inputClasses !== void 0) $$bindings.inputClasses(inputClasses);
  if ($$props.noColor === void 0 && $$bindings.noColor && noColor !== void 0) $$bindings.noColor(noColor);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    isZero = value === 0;
    isNegative = value < 0;
    {
      setFormattedValue();
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
    )} <div${add_attribute("class", inputClasses?.wrapper ?? DEFAULT_CLASS_WRAPPER, 0)}><input class="${escape(null_to_empty(inputClasses?.unformatted ?? DEFAULT_CLASS_UNFORMATTED), true) + " svelte-1794knf"}" type="hidden"${add_attribute("name", name, 0)} ${disabled ? "disabled" : ""}${add_attribute("value", value, 0)}> <input class="${"" + escape(inputClasses?.formatted ?? DEFAULT_CLASS_FORMATTED, true) + " " + escape(
      isNegativeAllowed && !isZero && !isNegative ? inputClasses?.formattedPositive ?? DEFAULT_CLASS_FORMATTED_POSITIVE : "",
      true
    ) + " " + escape(
      isZero ? inputClasses?.formattedZero ?? DEFAULT_CLASS_FORMATTED_ZERO : "",
      true
    ) + " " + escape(
      isNegativeAllowed && isNegative ? inputClasses?.formattedNegative ?? DEFAULT_CLASS_FORMATTED_NEGATIVE : "",
      true
    ) + " svelte-1794knf"}"${add_attribute(
      "style",
      style ? style : noColor ? darkMode ? "color: white;" : "color: black;" : "",
      0
    )} type="text" inputmode="numeric"${add_attribute("name", `formatted-${name}`, 0)} ${required && !isZero ? "required" : ""}${add_attribute("placeholder", formattedPlaceholder, 0)} ${disabled ? "disabled" : ""}${add_attribute("value", formattedValue, 0)}> </div>`;
  } while (!$$settled);
  return $$rendered;
});
const css$1 = {
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
const LightweightArgInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputCat;
  let { css: css2 = void 0 } = $$props;
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
  let { valid = required ? false : true } = $$props;
  let { enum_ = void 0 } = $$props;
  let { itemsType = void 0 } = $$props;
  let { displayHeader = true } = $$props;
  let { properties = void 0 } = $$props;
  let { nestedRequired = void 0 } = $$props;
  let { extra = {} } = $$props;
  let { displayType = true } = $$props;
  let { customErrorMessage = void 0 } = $$props;
  let { render = true } = $$props;
  let { title = void 0 } = $$props;
  let { placeholder = void 0 } = $$props;
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
  createEventDispatcher();
  let { error = "" } = $$props;
  let el = void 0;
  let rawValue = void 0;
  function evalRawValueToValue() {
    if (!rawValue || rawValue === "") {
      value = void 0;
      error = "";
    } else {
      try {
        value = JSON.parse(rawValue);
        error = "";
      } catch (err) {
        error = err.toString();
      }
    }
  }
  function evalValueToRaw() {
    if (value) {
      rawValue = JSON.stringify(value, null, 4);
    } else {
      rawValue = "";
    }
  }
  function focus() {
  }
  function validateInput(pattern2, v, required2) {
    if (!render) {
      error = "";
      value = true;
    }
    if (required2 && (v == void 0 || v == null || v === "")) {
      error = "Required";
      valid && (valid = false);
    } else {
      if (pattern2 && !testRegex(pattern2, v)) {
        if (!emptyString(customErrorMessage)) {
          error = customErrorMessage ?? "";
        } else if (format == "email") {
          error = "invalid email address";
        } else {
          error = `should match ${pattern2}`;
        }
        valid && (valid = false);
      } else {
        error = "";
        !valid && (valid = true);
      }
    }
  }
  let prevDefaultValue = void 0;
  async function changeDefaultValue(inputCat2, defaultValue2) {
    if (value == null || value == void 0 || deepEqual(value, prevDefaultValue)) {
      value = defaultValue2;
    }
    prevDefaultValue = structuredClone(defaultValue2);
    if (value == null || value == void 0) {
      if (defaultValue2 === void 0 || defaultValue2 === null) {
        if (inputCat2 === "string") {
          value = "";
        } else if (inputCat2 == "enum" && required) {
          value = enum_?.[0];
        } else if (inputCat2 == "boolean") {
          value = false;
        }
      }
    }
    if (inputCat2 === "object") {
      evalValueToRaw();
    }
  }
  function onRenderFalse() {
    value = void 0;
    valid = true;
    error = "";
  }
  if ($$props.css === void 0 && $$bindings.css && css2 !== void 0) $$bindings.css(css2);
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
  if ($$props.itemsType === void 0 && $$bindings.itemsType && itemsType !== void 0) $$bindings.itemsType(itemsType);
  if ($$props.displayHeader === void 0 && $$bindings.displayHeader && displayHeader !== void 0) $$bindings.displayHeader(displayHeader);
  if ($$props.properties === void 0 && $$bindings.properties && properties !== void 0) $$bindings.properties(properties);
  if ($$props.nestedRequired === void 0 && $$bindings.nestedRequired && nestedRequired !== void 0) $$bindings.nestedRequired(nestedRequired);
  if ($$props.extra === void 0 && $$bindings.extra && extra !== void 0) $$bindings.extra(extra);
  if ($$props.displayType === void 0 && $$bindings.displayType && displayType !== void 0) $$bindings.displayType(displayType);
  if ($$props.customErrorMessage === void 0 && $$bindings.customErrorMessage && customErrorMessage !== void 0) $$bindings.customErrorMessage(customErrorMessage);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0) $$bindings.render(render);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
  if ($$props.evalValueToRaw === void 0 && $$bindings.evalValueToRaw && evalValueToRaw !== void 0) $$bindings.evalValueToRaw(evalValueToRaw);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0) $$bindings.focus(focus);
  $$result.css.add(css$1);
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
    render && changeDefaultValue(inputCat, defaultValue);
    (rawValue || inputCat === "object") && evalRawValueToValue();
    {
      validateInput(pattern, value, required);
    }
    render == false && onRenderFalse();
    $$rendered = `${render ? `<div class="flex flex-col w-full min-w-[250px]"><div>${displayHeader ? `${validate_component(FieldHeader, "FieldHeader").$$render(
      $$result,
      {
        prettify: emptyString(title),
        label: title && !emptyString(title) ? title : label,
        required,
        type,
        contentEncoding,
        format,
        displayType,
        labelClass: css2?.label?.class
      },
      {},
      {}
    )}` : ``} ${description ? `<div${add_attribute("class", twMerge("text-xs italic pb-1", css2?.description?.class), 0)}><pre class="font-main whitespace-normal">${escape(description)}</pre></div>` : ``} <div class="flex space-x-1">${inputCat == "number" ? `${extra["min"] != void 0 && extra["max"] != void 0 ? `${validate_component(Range, "Range").$$render(
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
    )}` : `<input type="number" class="${escape(
      null_to_empty(twMerge(valid && error == "" ? "" : "border !border-red-700 !border-opacity-70 focus:!border-red-700 focus:!border-opacity-30")),
      true
    ) + " svelte-1bqrn0o"}"${add_attribute("placeholder", placeholder ?? defaultValue ?? "", 0)}${add_attribute("min", extra["min"], 0)}${add_attribute("max", extra["max"], 0)}${add_attribute("value", value, 0)}>`}`}` : `${inputCat == "boolean" ? `${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        class: twMerge(
          valid && error == "" ? "" : "border !border-red-700 !border-opacity-70 focus:!border-red-700 focus:!border-opacity-30",
          "w-full"
        ),
        checked: value
      },
      {
        checked: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${type == "boolean" && value == void 0 ? `<span data-svelte-h="svelte-5wn5dd">  Not set</span>` : ``}` : `${inputCat == "list" ? `<div class="w-full">${Array.isArray(itemsType?.multiselect) && Array.isArray(value) ? `<div class="items-start">${validate_component(MultiSelect, "Multiselect").$$render(
      $$result,
      {
        ulOptionsClass: "!bg-surface-secondary",
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
    )}</div>` : `${Array.isArray(itemsType?.enum) && Array.isArray(value) ? `<div class="items-start">${validate_component(MultiSelect, "Multiselect").$$render(
      $$result,
      {
        ulOptionsClass: "!bg-surface-secondary",
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
    )}</div>` : `${Array.isArray(enum_) && Array.isArray(value) ? `<div class="items-start">${validate_component(MultiSelect, "Multiselect").$$render(
      $$result,
      {
        ulOptionsClass: "!bg-surface-secondary",
        options: enum_ ?? [],
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
      return `<div class="flex flex-row max-w-md mt-1 w-full">${itemsType?.type == "number" ? `<input type="number" class="svelte-1bqrn0o"${add_attribute("value", v, 0)}>` : `${itemsType?.type == "string" && itemsType?.contentEncoding == "base64" ? `<input type="file" class="my-6 svelte-1bqrn0o" ${""}>` : `${Array.isArray(itemsType?.enum) ? `<select class="px-6">${each(itemsType?.enum ?? [], (e) => {
        return `<option${add_attribute("value", e, 0)}>${escape(e)}</option>`;
      })}</select>` : `${itemsType?.type == "resource" && itemsType?.resourceType ? `${validate_component(LightweightResourcePicker, "LightweightResourcePicker").$$render(
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
      )}` : `${itemsType?.type === "object" && itemsType?.properties ? `<div class="p-8 border rounded-md w-full">${validate_component(LightweightSchemaForm, "LightweightSchemaForm").$$render(
        $$result,
        {
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
      )} </div>` : `<input type="text" class="svelte-1bqrn0o"${add_attribute("value", v, 0)}>`}`}`}`}`} <button class="rounded-full p-1 bg-surface-secondary duration-200 hover:bg-surface-hover ml-2 flex items-center h-6" aria-label="Clear">${validate_component(X, "X").$$render($$result, { size: 14 }, {}, {})}</button> </div>`;
    })}` : `${value != void 0 ? `List is not an array` : ``}`}</div> <div class="flex my-2">${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "border",
        color: "light",
        size: "sm",
        btnClasses: "mt-1",
        startIcon: { icon: Plus }
      },
      {},
      {
        default: () => {
          return `Add`;
        }
      }
    )}</div> <span class="ml-2">${escape((value ?? []).length)} item${escape((value ?? []).length != 1 ? "s" : "")}</span>`}`}`}</div>` : `${inputCat == "resource-object" && format.split("-").length > 1 && format.replace("resource-", "").replace("_", "").toLowerCase() == "s3object" ? `<div class="flex flex-col w-full gap-1">${validate_component(FileUpload, "FileUpload").$$render(
      $$result,
      {
        allowMultiple: false,
        randomFileKey: true,
        defaultValue: defaultValue?.s3
      },
      {},
      {}
    )}</div>` : `${inputCat == "resource-object" ? `${validate_component(LightweightObjectResourceInput, "LightweightObjectResourceInput").$$render(
      $$result,
      { format, value },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${inputCat == "object" && oneOf && oneOf.length >= 2 ? `<div class="flex flex-col gap-2 w-full">${oneOf && oneOf.length >= 2 ? `${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
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
      return `  ${obj && obj.properties && Object.keys(obj.properties).length > 0 ? `<div class="p-4 pl-8 border rounded w-full">${validate_component(LightweightSchemaForm, "LightweightSchemaForm").$$render(
        $$result,
        {
          schema: {
            properties: Object.fromEntries(Object.entries(obj.properties).filter(([k, v]) => k !== "label")),
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
      )}</div>` : ``}`;
    })() : ``}` : ``}</div>` : `${inputCat == "object" ? `${properties && Object.keys(properties).length > 0 ? `<div class="p-4 pl-8 border rounded w-full">${validate_component(LightweightSchemaForm, "LightweightSchemaForm").$$render(
      $$result,
      {
        schema: {
          properties,
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
    )}</div>` : `<textarea style="min-height: 5px;" class="${"col-span-10 " + escape(
      valid && error == "" ? "" : "border !border-red-700 !border-opacity-70 focus:!border-red-700 focus:!border-opacity-30",
      true
    )}"${add_attribute(
      "placeholder",
      defaultValue ? JSON.stringify(defaultValue, null, 4) : "",
      0
    )}${add_attribute("this", el, 0)}>${escape(rawValue || "")}</textarea>`}` : `${inputCat == "enum" ? `<select class="px-6">${each(enum_ ?? [], (e) => {
      return `<option${add_attribute("value", e, 0)}>${escape(extra?.["enumLabels"]?.[e] ?? e)}</option>`;
    })}</select>` : `${inputCat == "date" ? `${format === "date" ? `${validate_component(DateInput, "DateInput").$$render(
      $$result,
      { dateFormat: extra["dateFormat"], value },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${validate_component(DateTimeInput, "DateTimeInput").$$render(
      $$result,
      { useDropdown: true, value },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}` : `${inputCat == "base64" ? `<div class="flex flex-col my-6 w-full"><input type="file" ${""} class="svelte-1bqrn0o"> ${value?.length ? `<div class="text-2xs text-tertiary mt-1">File length: ${escape(value.length)} base64 chars (${escape((value.length / 1024 / 1024).toFixed(2))}MB)</div>` : ``}</div>` : `${inputCat == "resource-string" ? `<div class="flex flex-row gap-x-1 w-full">${validate_component(LightweightResourcePicker, "LightweightResourcePicker").$$render(
      $$result,
      {
        resourceType: format.split("-").length > 1 ? format.substring("resource-".length) : void 0,
        value
      },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : `${inputCat == "email" ? `<input type="email" class="${escape(
      null_to_empty(valid ? "" : "border border-red-700 border-opacity-30 focus:border-red-700 focus:border-opacity-3"),
      true
    ) + " svelte-1bqrn0o"}"${add_attribute("placeholder", placeholder ?? defaultValue ?? "", 0)}${add_attribute("value", value, 0)}>` : `${inputCat == "currency" ? `<input type="number" class="${escape(
      null_to_empty(valid ? "" : "border border-red-700 border-opacity-30 focus:border-red-700 focus:border-opacity-3"),
      true
    ) + " svelte-1bqrn0o"}"${add_attribute("placeholder", placeholder ?? defaultValue ?? "", 0)}${add_attribute("value", value, 0)}>` : `${inputCat == "string" ? `<div class="flex flex-col w-full"><div class="flex flex-row w-full items-center justify-between">${extra?.["password"] == true ? `${validate_component(Password, "Password").$$render(
      $$result,
      { password: value },
      {
        password: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `<textarea${add_attribute("rows", extra?.["minRows"] || 1, 0)} class="${"col-span-10 " + escape(
      valid && error == "" ? "" : "border !border-red-700 !border-opacity-70 focus:!border-red-700 focus:!border-opacity-30",
      true
    )}"${add_attribute("placeholder", placeholder ?? defaultValue ?? "", 0)}${add_attribute("this", el, 0)}>${escape(value || "")}</textarea>`}</div></div>` : ``}`}`}`}`}`}`}`}`}`}`}`}`}`} ${slots.actions ? slots.actions({}) : ``}</div> ${error && error != "" ? `<div class="text-right text-xs text-red-600 dark:text-red-400">${error === "" ? ` ` : `${escape(error)}`}</div>` : ``}</div></div>` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const LightweightSchemaForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { css: css2 = void 0 } = $$props;
  let { schema } = $$props;
  let { args = void 0 } = $$props;
  let { displayType = true } = $$props;
  let { largeGap = false } = $$props;
  let { isValid = true } = $$props;
  let { defaultValues = {} } = $$props;
  let { dynamicEnums = {} } = $$props;
  let inputCheck = {};
  let errors = {};
  function invalidate(key, error) {
    inputCheck[key] = false;
    errors[key] = error;
  }
  function validate(key) {
    inputCheck[key] = true;
    errors[key] = "";
  }
  function validateAll() {
    inputCheck = Object.fromEntries(Object.entries(inputCheck).map((x) => [x[0], true]));
    errors = Object.fromEntries(Object.entries(errors).map((x) => [x[0], ""]));
  }
  let keys = Array.isArray(schema?.order) ? schema?.order : Object.keys(schema?.properties ?? {});
  function reorder() {
    let lkeys = Object.keys(schema?.properties ?? {});
    if (!deepEqual(schema?.order, lkeys) || !deepEqual(keys, lkeys)) {
      console.debug("reorder");
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
      keys = Object.keys(schema.properties ?? {});
    }
  }
  if ($$props.css === void 0 && $$bindings.css && css2 !== void 0) $$bindings.css(css2);
  if ($$props.schema === void 0 && $$bindings.schema && schema !== void 0) $$bindings.schema(schema);
  if ($$props.args === void 0 && $$bindings.args && args !== void 0) $$bindings.args(args);
  if ($$props.displayType === void 0 && $$bindings.displayType && displayType !== void 0) $$bindings.displayType(displayType);
  if ($$props.largeGap === void 0 && $$bindings.largeGap && largeGap !== void 0) $$bindings.largeGap(largeGap);
  if ($$props.isValid === void 0 && $$bindings.isValid && isValid !== void 0) $$bindings.isValid(isValid);
  if ($$props.defaultValues === void 0 && $$bindings.defaultValues && defaultValues !== void 0) $$bindings.defaultValues(defaultValues);
  if ($$props.dynamicEnums === void 0 && $$bindings.dynamicEnums && dynamicEnums !== void 0) $$bindings.dynamicEnums(dynamicEnums);
  if ($$props.invalidate === void 0 && $$bindings.invalidate && invalidate !== void 0) $$bindings.invalidate(invalidate);
  if ($$props.validate === void 0 && $$bindings.validate && validate !== void 0) $$bindings.validate(validate);
  if ($$props.validateAll === void 0 && $$bindings.validateAll && validateAll !== void 0) $$bindings.validateAll(validateAll);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    isValid = allTrue(inputCheck) ?? false;
    {
      if (args === void 0) {
        args = {};
      }
    }
    schema && reorder();
    $$rendered = `<div${add_attribute("class", twMerge("w-full flex flex-col px-0.5 pb-2", largeGap ? "gap-8" : "gap-2"), 0)}>${each(keys, (argName) => {
      return `${typeof args == "object" && schema?.properties[argName] && args ? `${validate_component(LightweightArgInput, "LightweightArgInput").$$render(
        $$result,
        {
          render: computeShow(argName, schema?.properties[argName].showExpr, args),
          label: argName,
          description: schema.properties[argName].description,
          type: schema.properties[argName].type,
          oneOf: schema.properties[argName].oneOf,
          required: schema.required?.includes(argName) ?? false,
          pattern: schema.properties[argName].pattern,
          defaultValue: defaultValues?.[argName] ?? schema.properties[argName].default,
          enum_: dynamicEnums?.[argName] ?? schema.properties[argName].enum,
          format: schema.properties[argName].format,
          contentEncoding: schema.properties[argName].contentEncoding,
          customErrorMessage: schema.properties[argName].customErrorMessage,
          properties: schema.properties[argName].properties,
          nestedRequired: schema.properties[argName].required,
          itemsType: schema.properties[argName].items,
          extra: schema.properties[argName],
          title: schema.properties[argName].title,
          placeholder: schema.properties[argName].placeholder,
          displayType,
          css: css2,
          value: args[argName],
          valid: inputCheck[argName],
          error: errors[argName]
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
          error: ($$value) => {
            errors[argName] = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : ``}`;
    })}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  CurrencyInput as C,
  Download as D,
  Folder_open as F,
  LightweightSchemaForm as L,
  Move_right as M,
  NEVER_TESTED_THIS_FAR as N,
  ObjectViewer as O,
  Panel_right_open as P,
  Rotate_cw as R,
  Select as S,
  SELECT_INPUT_DEFAULT_STYLE as a,
  FieldHeader as b,
  S3FilePicker as c,
  LightweightArgInput as d,
  LoadingIcon as e,
  File as f,
  FileInput as g,
  FileUpload as h,
  Range as i,
  DateInput as j,
  keepByKey as k,
  RangeSlider as l
};
