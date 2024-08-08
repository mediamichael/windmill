import "./index2.js";
import "yaml";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import { r as BUTTON_COLORS } from "./common.js";
import "minimatch";
/* empty css                                     */
import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { I as Icon } from "./Icon.js";
import { L as List } from "./list.js";
import { D as Download } from "./LightweightSchemaForm.js";
import { C as Code_2 } from "./code-2.js";
import { T as Table_2 } from "./table-2.js";
import { D as Dollar_sign } from "./Required.js";
import { S as Sliders_horizontal } from "./sliders-horizontal.js";
import { C as Calendar } from "./calendar.js";
import { C as Clock } from "./DateTimeInput.js";
import { L as List_ordered } from "./list-ordered.js";
import { M as Menu } from "./menu.js";
import { D as Database } from "./IconedResourceType.js";
import { A as Alert_triangle } from "./alert-triangle.js";
import { R as Refresh_cw } from "./refresh-cw.js";
const App_window = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "x": "2",
        "y": "4",
        "width": "20",
        "height": "16",
        "rx": "2"
      }
    ],
    ["path", { "d": "M10 4v4" }],
    ["path", { "d": "M2 8h20" }],
    ["path", { "d": "M6 4v4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "app-window" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const At_sign = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "4" }],
    [
      "path",
      {
        "d": "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "at-sign" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Bar_chart_4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M3 3v18h18" }],
    ["path", { "d": "M13 17V9" }],
    ["path", { "d": "M18 17V5" }],
    ["path", { "d": "M8 17v-3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "bar-chart-4" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Binary = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "x": "14",
        "y": "14",
        "width": "4",
        "height": "6",
        "rx": "2"
      }
    ],
    [
      "rect",
      {
        "x": "6",
        "y": "4",
        "width": "4",
        "height": "6",
        "rx": "2"
      }
    ],
    ["path", { "d": "M6 20h4" }],
    ["path", { "d": "M14 10h4" }],
    ["path", { "d": "M6 14h2v6" }],
    ["path", { "d": "M14 4h2v6" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "binary" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Box_select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M5 3a2 2 0 0 0-2 2" }],
    ["path", { "d": "M19 3a2 2 0 0 1 2 2" }],
    ["path", { "d": "M21 19a2 2 0 0 1-2 2" }],
    ["path", { "d": "M5 21a2 2 0 0 1-2-2" }],
    ["path", { "d": "M9 3h1" }],
    ["path", { "d": "M9 21h1" }],
    ["path", { "d": "M14 3h1" }],
    ["path", { "d": "M14 21h1" }],
    ["path", { "d": "M3 9v1" }],
    ["path", { "d": "M21 9v1" }],
    ["path", { "d": "M3 14v1" }],
    ["path", { "d": "M21 14v1" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "box-select" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Calendar_clock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"
      }
    ],
    ["path", { "d": "M16 2v4" }],
    ["path", { "d": "M8 2v4" }],
    ["path", { "d": "M3 10h5" }],
    ["path", { "d": "M17.5 17.5 16 16.25V14" }],
    [
      "path",
      {
        "d": "M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "calendar-clock" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const File_bar_chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
      }
    ],
    ["polyline", { "points": "14 2 14 8 20 8" }],
    ["path", { "d": "M12 18v-4" }],
    ["path", { "d": "M8 18v-2" }],
    ["path", { "d": "M16 18v-6" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "file-bar-chart" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const File_text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
      }
    ],
    ["polyline", { "points": "14 2 14 8 20 8" }],
    [
      "line",
      {
        "x1": "16",
        "x2": "8",
        "y1": "13",
        "y2": "13"
      }
    ],
    [
      "line",
      {
        "x1": "16",
        "x2": "8",
        "y1": "17",
        "y2": "17"
      }
    ],
    [
      "line",
      {
        "x1": "10",
        "x2": "8",
        "y1": "9",
        "y2": "9"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "file-text" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Flip_horizontal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3"
      }
    ],
    [
      "path",
      {
        "d": "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"
      }
    ],
    ["path", { "d": "M12 20v2" }],
    ["path", { "d": "M12 14v2" }],
    ["path", { "d": "M12 8v2" }],
    ["path", { "d": "M12 2v2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "flip-horizontal" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Flip_vertical = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"
      }
    ],
    [
      "path",
      {
        "d": "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"
      }
    ],
    ["path", { "d": "M4 12H2" }],
    ["path", { "d": "M10 12H8" }],
    ["path", { "d": "M16 12h-2" }],
    ["path", { "d": "M22 12h-2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "flip-vertical" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Form_input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "20",
        "height": "12",
        "x": "2",
        "y": "6",
        "rx": "2"
      }
    ],
    ["path", { "d": "M12 12h.01" }],
    ["path", { "d": "M17 12h.01" }],
    ["path", { "d": "M7 12h.01" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "form-input" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Grip_horizontal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "9", "r": "1" }],
    ["circle", { "cx": "19", "cy": "9", "r": "1" }],
    ["circle", { "cx": "5", "cy": "9", "r": "1" }],
    ["circle", { "cx": "12", "cy": "15", "r": "1" }],
    ["circle", { "cx": "19", "cy": "15", "r": "1" }],
    ["circle", { "cx": "5", "cy": "15", "r": "1" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "grip-horizontal" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Heading_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M4 12h8" }],
    ["path", { "d": "M4 18V6" }],
    ["path", { "d": "M12 18V6" }],
    ["path", { "d": "m17 12 3-2v8" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "heading-1" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    ["circle", { "cx": "9", "cy": "9", "r": "2" }],
    [
      "path",
      {
        "d": "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "image" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Lock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    ["path", { "d": "M7 11V7a5 5 0 0 1 10 0v4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "lock" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Map_pin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
      }
    ],
    ["circle", { "cx": "12", "cy": "10", "r": "3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "map-pin" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Monitor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "20",
        "height": "14",
        "x": "2",
        "y": "3",
        "rx": "2"
      }
    ],
    [
      "line",
      {
        "x1": "8",
        "x2": "16",
        "y1": "21",
        "y2": "21"
      }
    ],
    [
      "line",
      {
        "x1": "12",
        "x2": "12",
        "y1": "17",
        "y2": "21"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "monitor" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Mouse_pointer_square = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"
      }
    ],
    ["path", { "d": "m12 12 4 10 1.7-4.3L22 16Z" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "mouse-pointer-square" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Network = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "x": "16",
        "y": "16",
        "width": "6",
        "height": "6",
        "rx": "1"
      }
    ],
    [
      "rect",
      {
        "x": "2",
        "y": "16",
        "width": "6",
        "height": "6",
        "rx": "1"
      }
    ],
    [
      "rect",
      {
        "x": "9",
        "y": "2",
        "width": "6",
        "height": "6",
        "rx": "1"
      }
    ],
    [
      "path",
      {
        "d": "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"
      }
    ],
    ["path", { "d": "M12 12V8" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "network" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Panel_left_close = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    ["path", { "d": "M9 3v18" }],
    ["path", { "d": "m16 15-3-3 3-3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "panel-left-close" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Panel_left = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
        "x1": "9",
        "x2": "9",
        "y1": "3",
        "y2": "21"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "panel-left" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Panel_top_inactive = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    ["path", { "d": "M14 9h1" }],
    ["path", { "d": "M19 9h2" }],
    ["path", { "d": "M3 9h2" }],
    ["path", { "d": "M9 9h1" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "panel-top-inactive" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Panel_top = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
        "x1": "3",
        "x2": "21",
        "y1": "9",
        "y2": "9"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "panel-top" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Paperclip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "paperclip" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Pie_chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M21.21 15.89A10 10 0 1 1 8 2.83" }],
    ["path", { "d": "M22 12A10 10 0 0 0 12 2v10z" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "pie-chart" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Plus_square = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    ["path", { "d": "M8 12h8" }],
    ["path", { "d": "M12 8v8" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "plus-square" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Separator_horizontal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "3",
        "x2": "21",
        "y1": "12",
        "y2": "12"
      }
    ],
    ["polyline", { "points": "8 8 12 4 16 8" }],
    ["polyline", { "points": "16 16 12 20 8 16" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "separator-horizontal" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Separator_vertical = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "12",
        "x2": "12",
        "y1": "3",
        "y2": "21"
      }
    ],
    ["polyline", { "points": "8 8 4 12 8 16" }],
    ["polyline", { "points": "16 16 20 12 16 8" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "separator-vertical" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Smile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "M8 14s1.5 2 4 2 4-2 4-2" }],
    [
      "line",
      {
        "x1": "9",
        "x2": "9.01",
        "y1": "9",
        "y2": "9"
      }
    ],
    [
      "line",
      {
        "x1": "15",
        "x2": "15.01",
        "y1": "9",
        "y2": "9"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "smile" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Split = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M16 3h5v5" }],
    ["path", { "d": "M8 3H3v5" }],
    [
      "path",
      {
        "d": "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"
      }
    ],
    ["path", { "d": "m15 9 6-6" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "split" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Text_cursor_input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1"
      }
    ],
    [
      "path",
      {
        "d": "M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5"
      }
    ],
    [
      "path",
      {
        "d": "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"
      }
    ],
    [
      "path",
      {
        "d": "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"
      }
    ],
    ["path", { "d": "M9 7v10" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "text-cursor-input" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Toggle_left = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "20",
        "height": "12",
        "x": "2",
        "y": "6",
        "rx": "6",
        "ry": "6"
      }
    ],
    ["circle", { "cx": "8", "cy": "12", "r": "2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "toggle-left" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Type = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["polyline", { "points": "4 7 4 4 20 4 20 7" }],
    [
      "line",
      {
        "x1": "9",
        "x2": "15",
        "y1": "20",
        "y2": "20"
      }
    ],
    [
      "line",
      {
        "x1": "12",
        "x2": "12",
        "y1": "4",
        "y2": "20"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "type" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Upload_cloud = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
      }
    ],
    ["path", { "d": "M12 12v9" }],
    ["path", { "d": "m16 16-4-4-4 4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "upload-cloud" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const defaultAlignement = {
  horizontalAlignment: "center",
  verticalAlignment: "center"
};
function getRecommendedDimensionsByComponent(componentType, column) {
  return processDimension(components[componentType].dims, column);
}
function processDimension(dimension, column) {
  if (!dimension) {
    return { w: 1, h: 1 };
  }
  const size = dimension.split("-")[column === 3 ? 0 : 1].split(":");
  return { w: +size[0], h: +size[1] };
}
const buttonColorOptions = [...BUTTON_COLORS];
const selectOptions = {
  buttonColorOptions,
  tabsKindOptions: ["tabs", "sidebar", "invisibleOnView"],
  buttonSizeOptions: ["xs", "sm", "md", "lg", "xl"],
  tableSearchOptions: ["By Component", "By Runnable", "Disabled"],
  chartThemeOptions: ["theme1", "theme2", "theme3"],
  textStyleOptions: ["Title", "Subtitle", "Body", "Label", "Caption"],
  currencyOptions: ["USD", "EUR", "GBP", "CAD", "AUD", "JPY", "CNY", "INR", "BRL"],
  localeOptions: [
    "en-US",
    "en-GB",
    "en-IE",
    "de-DE",
    "fr-FR",
    "br-FR",
    "ja-JP",
    "pt-TL",
    "fr-CA",
    "en-CA"
  ],
  objectFitOptions: ["contain", "cover", "fill"],
  splitPanelOptions: ["2", "3", "4"],
  formorientationOptions: ["Horizontal", "Vertical"],
  chartTypeOptions: [
    "bar",
    "bubble",
    "doughnut",
    "line",
    "pie",
    "polarArea",
    "radar",
    "scatter"
  ],
  animationTimingFunctionOptions: ["linear", "ease", "ease-in", "ease-out", "ease-in-out"],
  prose: ["sm", "Default", "lg", "xl", "2xl"],
  imageSourceKind: [
    "url",
    "png encoded as base64",
    "jpeg encoded as base64",
    "svg encoded as base64"
  ]
};
const labels = {
  none: "Do nothing",
  errorOverlay: "Show error overlay",
  gotoUrl: "Go to an url",
  setTab: "Set the tab of a tabs component",
  sendToast: "Display a toast notification",
  sendErrorToast: "Display an error toast notification",
  open: "Open a modal or a drawer",
  close: "Close a modal or a drawer",
  openModal: "Open a modal (deprecated)",
  closeModal: "Close a modal (deprecated)",
  clearFiles: "Clear files from a S3 file input"
};
const onSuccessClick = {
  type: "oneOf",
  tooltip: "Action to perform on success",
  selected: "none",
  labels,
  configuration: {
    none: {},
    gotoUrl: {
      url: {
        tooltip: "Go to the given url, absolute or relative",
        fieldType: "text",
        type: "static",
        value: "",
        placeholder: "/apps/get/foo",
        onDemandOnly: true
      },
      newTab: {
        tooltip: "Open the url in a new tab",
        fieldType: "boolean",
        type: "static",
        value: true
      }
    },
    setTab: {
      setTab: {
        type: "static",
        value: [],
        fieldType: "array",
        subFieldType: "tab-select",
        tooltip: "Set the tabs id and index to go to on success",
        onDemandOnly: true
      }
    },
    sendToast: {
      message: {
        tooltip: "The message of the toast to display",
        fieldType: "text",
        type: "static",
        value: "",
        placeholder: "Hello there",
        onDemandOnly: true
      }
    },
    openModal: {
      modalId: {
        tooltip: "The id of the modal to open",
        fieldType: "text",
        type: "static",
        value: "",
        deprecated: true
      }
    },
    closeModal: {
      modalId: {
        tooltip: "The id of the modal to close",
        fieldType: "text",
        type: "static",
        value: "",
        deprecated: true
      }
    },
    open: {
      id: {
        tooltip: "The id of the modal or the drawer to open",
        fieldType: "text",
        type: "static",
        value: ""
      }
    },
    close: {
      id: {
        tooltip: "The id of the modal or the drawer to close",
        fieldType: "text",
        type: "static",
        value: ""
      }
    },
    clearFiles: {
      id: {
        tooltip: "The id of s3 file input to clear",
        fieldType: "text",
        type: "static",
        value: ""
      }
    }
  }
};
const onErrorClick = {
  type: "oneOf",
  tooltip: "Action to perform on error",
  selected: "errorOverlay",
  labels,
  configuration: {
    errorOverlay: {},
    gotoUrl: {
      url: {
        tooltip: "Go to the given url, absolute or relative",
        fieldType: "text",
        type: "static",
        value: "",
        placeholder: "/apps/get/foo",
        onDemandOnly: true
      },
      newTab: {
        tooltip: "Open the url in a new tab",
        fieldType: "boolean",
        type: "static",
        value: true
      }
    },
    setTab: {
      setTab: {
        type: "static",
        value: [],
        fieldType: "array",
        subFieldType: "tab-select",
        tooltip: "Set the tabs id and index to go to on error",
        onDemandOnly: true
      }
    },
    sendErrorToast: {
      message: {
        tooltip: "The message of the toast to display",
        fieldType: "text",
        type: "static",
        value: "An error occured",
        placeholder: "Hello there",
        onDemandOnly: true
      },
      appendError: {
        tooltip: "Append the error message to the toast",
        fieldType: "boolean",
        type: "static",
        value: true
      }
    },
    open: {
      id: {
        tooltip: "The id of the modal or the drawer to open",
        fieldType: "text",
        type: "static",
        value: "",
        noVariablePicker: true
      }
    },
    close: {
      id: {
        tooltip: "The id of the modal or the drawer to close",
        fieldType: "text",
        type: "static",
        value: "",
        noVariablePicker: true
      }
    }
  }
};
const paginationOneOf = {
  type: "oneOf",
  selected: "auto",
  labels: {
    auto: "Managed by component",
    manual: "Managed by runnable"
  },
  tooltip: "Pagination can be managed using two methods: By the component: Based on a specified page size, the component divides the array into several pages. By the runnable: The component shows all items, leaving the task of pagination to the runnable. The current page number is available in the component outputs.",
  configuration: {
    auto: {
      pageSize: {
        type: "static",
        fieldType: "number",
        value: 20,
        tooltip: "Number of rows per page"
      }
    },
    manual: {
      pageCount: {
        type: "static",
        fieldType: "number",
        value: -1,
        tooltip: "Number of pages (-1 if you do not know)"
      }
    }
  }
};
const documentationBaseUrl = "https://www.windmill.dev/docs/apps/app_configuration_settings";
const aggridcomponentconst = {
  name: "AgGrid Table",
  icon: Table_2,
  documentationLink: `${documentationBaseUrl}/aggrid_table`,
  dims: "3:10-6:10",
  customCss: {
    container: { class: "", style: "" }
  },
  initialData: {
    configuration: {
      columnDefs: {
        type: "static",
        fieldType: "array",
        subFieldType: "ag-grid",
        value: [
          { field: "id", flex: 1 },
          { field: "name", editable: true, flex: 1 },
          { field: "age", flex: 1 }
        ]
      },
      flex: {
        type: "static",
        fieldType: "boolean",
        value: true,
        tooltip: "default col flex is 1 (see ag-grid docs)"
      },
      allEditable: {
        type: "static",
        fieldType: "boolean",
        value: false,
        hide: true,
        tooltip: "Configure all columns as Editable by users"
      },
      multipleSelectable: {
        type: "static",
        fieldType: "boolean",
        value: false,
        tooltip: "Make multiple rows selectable at once"
      },
      rowMultiselectWithClick: {
        type: "static",
        fieldType: "boolean",
        value: true,
        tooltip: "If multiple selectable, allow multiselect with click"
      },
      pagination: {
        type: "static",
        fieldType: "boolean",
        value: false
      },
      selectFirstRowByDefault: {
        type: "static",
        fieldType: "boolean",
        value: true,
        tooltip: "Select the first row by default on start"
      },
      extraConfig: {
        type: "static",
        fieldType: "object",
        value: {},
        tooltip: "any configuration that can be passed to ag-grid top level"
      },
      compactness: {
        type: "static",
        fieldType: "select",
        value: "normal",
        selectOptions: ["normal", "compact", "comfortable"],
        tooltip: "Change the row height"
      },
      wrapActions: {
        type: "static",
        fieldType: "boolean",
        value: false,
        tooltip: "When true, actions will wrap to the next line. Otherwise, the column will grow to fit the actions."
      },
      footer: {
        type: "static",
        fieldType: "boolean",
        value: true,
        tooltip: "Allow visible footer for pagination and download"
      },
      customActionsHeader: {
        type: "static",
        fieldType: "text",
        value: void 0,
        tooltip: "Custom header for the actions columns"
      }
    },
    componentInput: {
      type: "static",
      fieldType: "array",
      subFieldType: "object",
      value: [
        {
          id: 1,
          name: "A cell with a long name",
          age: 42
        },
        {
          id: 2,
          name: "A briefer cell",
          age: 84
        }
      ]
    }
  }
};
const aggridinfinitecomponentconst = {
  name: "AgGrid Infinite Table",
  icon: Table_2,
  documentationLink: `${documentationBaseUrl}/aggrid_table#aggrid-infinite-table`,
  dims: "3:10-6:10",
  customCss: {
    container: { class: "", style: "" }
  },
  initialData: {
    configuration: {
      columnDefs: {
        type: "static",
        fieldType: "array",
        subFieldType: "ag-grid",
        value: []
      },
      flex: {
        type: "static",
        fieldType: "boolean",
        value: true,
        tooltip: "default col flex is 1 (see ag-grid docs)"
      },
      allEditable: {
        type: "static",
        fieldType: "boolean",
        value: false,
        hide: true,
        tooltip: "Configure all columns as Editable by users"
      },
      multipleSelectable: {
        type: "static",
        fieldType: "boolean",
        value: false,
        tooltip: "Make multiple rows selectable at once"
      },
      rowMultiselectWithClick: {
        type: "static",
        fieldType: "boolean",
        value: true,
        tooltip: "If multiple selectable, allow multiselect with click"
      },
      selectFirstRowByDefault: {
        type: "static",
        fieldType: "boolean",
        value: true,
        tooltip: "Select the first row by default on start"
      },
      extraConfig: {
        type: "static",
        fieldType: "object",
        value: {},
        tooltip: "any configuration that can be passed to ag-grid top level"
      },
      compactness: {
        type: "static",
        fieldType: "select",
        value: "normal",
        selectOptions: ["normal", "compact", "comfortable"],
        tooltip: "Change the row height"
      },
      wrapActions: {
        type: "static",
        fieldType: "boolean",
        value: false,
        tooltip: "When true, actions will wrap to the next line. Otherwise, the column will grow to fit the actions."
      },
      searchEnabled: {
        type: "static",
        fieldType: "boolean",
        value: false,
        tooltip: "Enable search in the table"
      },
      footer: {
        type: "static",
        fieldType: "boolean",
        value: true,
        tooltip: "Allow visible footer for pagination and download"
      },
      customActionsHeader: {
        type: "static",
        fieldType: "text",
        value: void 0,
        tooltip: "Custom header for the actions columns"
      }
    },
    componentInput: {
      type: "runnable",
      fieldType: "any",
      fields: {},
      runnable: void 0
    }
  }
};
const agchartscomponentconst = {
  name: "AgCharts",
  icon: Bar_chart_4,
  documentationLink: `${documentationBaseUrl}/agcharts`,
  dims: "2:8-6:8",
  customCss: {
    container: { class: "", style: "" }
  },
  initialData: {
    configuration: {},
    componentInput: void 0
  }
};
const components = {
  displaycomponent: {
    name: "Rich Result",
    icon: Monitor,
    documentationLink: `${documentationBaseUrl}/rich_result`,
    dims: "2:8-6:8",
    customCss: {
      header: { class: "", style: "" },
      container: { class: "", style: "" }
    },
    initialData: {
      componentInput: {
        type: "static",
        fieldType: "object",
        value: { foo: 42 }
      },
      configuration: {
        title: {
          type: "static",
          fieldType: "text",
          value: "Result"
        },
        hideDetails: {
          type: "static",
          fieldType: "boolean",
          value: false,
          tooltip: "Hide the details section: the object keys, the clipboard button and the maximise button"
        }
      }
    }
  },
  jobidlogcomponent: {
    name: "Log by Job Id",
    icon: Monitor,
    documentationLink: `${documentationBaseUrl}/log_display`,
    dims: "2:8-6:8",
    customCss: {
      header: { class: "", style: "" },
      container: { class: "", style: "" }
    },
    initialData: {
      configuration: {
        jobId: {
          type: "static",
          fieldType: "text",
          value: "",
          tooltip: "Job id to display logs from"
        }
      }
    }
  },
  logcomponent: {
    name: "Log",
    icon: Monitor,
    documentationLink: `${documentationBaseUrl}/log_display`,
    dims: "2:8-6:8",
    customCss: {
      header: { class: "", style: "" },
      container: { class: "", style: "" }
    },
    initialData: {
      configuration: {},
      componentInput: {
        type: "runnable",
        fieldType: "any",
        fields: {},
        runnable: void 0
      }
    }
  },
  flowstatuscomponent: {
    name: "Flow Status",
    icon: Monitor,
    documentationLink: `${documentationBaseUrl}/flow_status`,
    dims: "2:8-6:8",
    customCss: {
      header: { class: "", style: "" },
      container: { class: "", style: "" }
    },
    initialData: {
      configuration: {},
      componentInput: {
        type: "runnable",
        fieldType: "any",
        fields: {},
        runnable: void 0
      }
    }
  },
  jobidflowstatuscomponent: {
    name: "Flow Status by Job Id",
    icon: Monitor,
    documentationLink: `${documentationBaseUrl}/flow_status`,
    dims: "2:8-6:8",
    customCss: {
      header: { class: "", style: "" },
      container: { class: "", style: "" }
    },
    initialData: {
      configuration: {
        jobId: {
          type: "static",
          fieldType: "text",
          value: "",
          tooltip: "Job id to display status from"
        }
      }
    }
  },
  containercomponent: {
    name: "Container",
    icon: Box_select,
    documentationLink: `${documentationBaseUrl}/container`,
    dims: "2:8-6:8",
    customCss: {
      container: { class: "", style: "" }
    },
    initialData: {
      configuration: {},
      componentInput: void 0,
      numberOfSubgrids: 1
    }
  },
  listcomponent: {
    name: "List",
    icon: List,
    documentationLink: `${documentationBaseUrl}/list`,
    dims: "3:8-12:8",
    customCss: {
      container: { class: "", style: "" }
    },
    initialData: {
      configuration: {
        width: {
          type: "oneOf",
          selected: "card",
          labels: {
            card: "Card",
            row: "Full Row"
          },
          configuration: {
            card: {
              minWidthPx: {
                type: "static",
                fieldType: "number",
                value: 300,
                tooltip: "Min Width in pixels"
              }
            },
            row: {}
          }
        },
        heightPx: {
          type: "static",
          fieldType: "number",
          value: void 0,
          tooltip: "Height in pixels"
        },
        pagination: {
          type: "oneOf",
          selected: "auto",
          labels: {
            auto: "Managed by component",
            manual: "Managed by runnable"
          },
          tooltip: "Pagination can be managed using two methods: By the component: Based on a specified page size, the component divides the array into several pages. By the runnable: The component shows all items, leaving the task of pagination to the runnable. The current page number is available in the component outputs.",
          configuration: {
            manual: {
              pageCount: {
                type: "static",
                fieldType: "number",
                value: -1,
                tooltip: "Number of pages (-1 if you do not know)"
              }
            },
            auto: {
              pageSize: {
                type: "static",
                fieldType: "number",
                value: 20,
                tooltip: "Number of items per page"
              }
            }
          }
        },
        displayBorders: {
          type: "static",
          fieldType: "boolean",
          value: true,
          tooltip: "Display borders between items"
        }
      },
      componentInput: {
        type: "static",
        fieldType: "array",
        subFieldType: "object",
        value: [{ foo: 1 }, { foo: 2 }, { foo: 3 }]
      },
      numberOfSubgrids: 1
    }
  },
  textcomponent: {
    name: "Text",
    icon: Type,
    dims: "1:1-3:1",
    documentationLink: `${documentationBaseUrl}/text`,
    customCss: {
      text: { class: "", style: "" },
      container: { class: "", style: "" }
    },
    initialData: {
      horizontalAlignment: "left",
      verticalAlignment: "top",
      componentInput: {
        type: "templatev2",
        fieldType: "template",
        eval: "Hello ${ctx.username}",
        connections: [
          {
            id: "username",
            componentId: "ctx"
          }
        ]
      },
      configuration: {
        style: {
          fieldType: "select",
          type: "static",
          selectOptions: selectOptions.textStyleOptions,
          value: "Body"
        },
        copyButton: {
          type: "static",
          value: false,
          fieldType: "boolean"
        },
        tooltip: {
          type: "static",
          value: "",
          fieldType: "text",
          tooltip: "Tooltip text if not empty"
        },
        disableNoText: {
          type: "static",
          value: false,
          fieldType: "boolean",
          tooltip: 'Remove the "No text" placeholder'
        }
      }
    }
  },
  buttoncomponent: {
    name: "Button",
    icon: Mouse_pointer_square,
    dims: "1:1-2:1",
    documentationLink: `${documentationBaseUrl}/button`,
    customCss: {
      button: { style: "", class: "" },
      container: { style: "", class: "" }
    },
    initialData: {
      ...defaultAlignement,
      componentInput: {
        type: "runnable",
        fieldType: "any",
        fields: {},
        runnable: void 0
      },
      recomputeIds: true,
      configuration: {
        label: {
          type: "static",
          fieldType: "text",
          value: "Press me"
        },
        color: {
          fieldType: "select",
          type: "static",
          selectOptions: selectOptions.buttonColorOptions,
          value: "blue",
          tooltip: "These presets can be overwritten with custom styles."
        },
        size: {
          fieldType: "select",
          type: "static",
          selectOptions: selectOptions.buttonSizeOptions,
          value: "xs"
        },
        fillContainer: {
          fieldType: "boolean",
          type: "static",
          value: false,
          tooltip: "This will make the button fill the container width and height. Height and width can be overwritten with custom styles."
        },
        disabled: {
          fieldType: "boolean",
          type: "static",
          value: false
        },
        beforeIcon: {
          type: "static",
          value: void 0,
          fieldType: "icon-select"
        },
        afterIcon: {
          type: "static",
          value: void 0,
          fieldType: "icon-select"
        },
        triggerOnAppLoad: {
          type: "static",
          value: false,
          fieldType: "boolean"
        },
        onSuccess: onSuccessClick,
        onError: onErrorClick,
        confirmationModal: {
          type: "oneOf",
          selected: "none",
          tooltip: "If defined, the user will be asked to confirm the action in a modal.",
          labels: {
            none: "Do nothing",
            confirmationModal: "Show confirmation modal"
          },
          configuration: {
            none: {},
            confirmationModal: {
              title: {
                fieldType: "text",
                type: "static",
                value: "Title",
                placeholder: "Confirmation modal title"
              },
              description: {
                fieldType: "text",
                type: "static",
                value: "Are you sure?",
                placeholder: "Are you sure?"
              },
              confirmationText: {
                fieldType: "text",
                type: "static",
                value: "Confirm",
                placeholder: "Confirm",
                tooltip: "The text of the button that confirms the action."
              }
            }
          }
        }
      }
    }
  },
  downloadcomponent: {
    name: "Download Button",
    icon: Download,
    documentationLink: `${documentationBaseUrl}/download_button`,
    dims: "1:1-2:1",
    customCss: {
      button: { style: "", class: "" }
    },
    initialData: {
      ...defaultAlignement,
      configuration: {
        source: {
          type: "static",
          value: "",
          fieldType: "text",
          fileUpload: {
            accept: "*",
            convertTo: "base64"
          },
          placeholder: "Enter URL or upload file (base64)"
        },
        filename: {
          type: "static",
          fieldType: "text",
          value: "windmill.file"
        },
        label: {
          type: "static",
          fieldType: "text",
          value: "Press me"
        },
        color: {
          fieldType: "select",
          type: "static",
          selectOptions: selectOptions.buttonColorOptions,
          value: "blue"
        },
        size: {
          fieldType: "select",
          type: "static",
          selectOptions: selectOptions.buttonSizeOptions,
          value: "xs"
        },
        fillContainer: {
          fieldType: "boolean",
          type: "static",
          value: false
        },
        beforeIcon: {
          type: "static",
          value: void 0,
          fieldType: "icon-select"
        },
        afterIcon: {
          type: "static",
          value: void 0,
          fieldType: "icon-select"
        }
      }
    }
  },
  formcomponent: {
    name: "Submit Form",
    icon: Form_input,
    documentationLink: `${documentationBaseUrl}/submit_form`,
    dims: "3:5-6:5",
    customCss: {
      container: { class: "", style: "" },
      button: { class: "", style: "" }
    },
    initialData: {
      horizontalAlignment: "center",
      componentInput: {
        type: "runnable",
        fieldType: "any",
        fields: {},
        runnable: void 0
      },
      recomputeIds: true,
      configuration: {
        label: {
          type: "static",
          value: "Submit",
          fieldType: "text"
        },
        color: {
          fieldType: "select",
          type: "static",
          value: "dark",
          selectOptions: selectOptions.buttonColorOptions
        },
        size: {
          fieldType: "select",
          type: "static",
          value: "xs",
          selectOptions: selectOptions.buttonSizeOptions
        },
        onSuccess: onSuccessClick,
        onError: onErrorClick
      }
    }
  },
  formbuttoncomponent: {
    name: "Modal Form",
    icon: Plus_square,
    documentationLink: `${documentationBaseUrl}/modal_form`,
    dims: "1:1-2:1",
    customCss: {
      button: { class: "", style: "" },
      popup: { class: "", style: "" }
    },
    initialData: {
      horizontalAlignment: "center",
      verticalAlignment: "center",
      componentInput: {
        type: "runnable",
        fieldType: "any",
        fields: {},
        runnable: void 0
      },
      recomputeIds: true,
      configuration: {
        modalTitle: {
          type: "static",
          fieldType: "text",
          value: "Modal title"
        },
        label: {
          type: "static",
          value: "Open popup",
          fieldType: "text"
        },
        color: {
          fieldType: "select",
          type: "static",
          value: "dark",
          selectOptions: buttonColorOptions,
          tooltip: "These presets can be overwritten with custom styles."
        },
        size: {
          fieldType: "select",
          type: "static",
          value: "xs",
          selectOptions: selectOptions.buttonSizeOptions
        },
        onSuccess: onSuccessClick,
        onError: onErrorClick,
        disabled: {
          fieldType: "boolean",
          type: "static",
          value: false
        }
      }
    }
  },
  piechartcomponent: {
    name: "Pie Chart",
    icon: Pie_chart,
    documentationLink: `${documentationBaseUrl}/pie_chart`,
    dims: "2:8-6:8",
    customCss: {
      container: { class: "", style: "" }
    },
    initialData: {
      configuration: {
        theme: {
          type: "static",
          fieldType: "select",
          selectOptions: selectOptions.chartThemeOptions,
          value: "theme1"
        },
        doughnutStyle: {
          type: "static",
          fieldType: "boolean",
          value: false
        }
      },
      componentInput: {
        type: "static",
        fieldType: "object",
        value: { data: [25, 50, 25], labels: ["Pie", "Charts", "<3"] }
      }
    }
  },
  chartjscomponent: {
    name: "ChartJs",
    icon: Pie_chart,
    documentationLink: `${documentationBaseUrl}/chartjs`,
    dims: "2:8-6:8",
    customCss: {
      container: { class: "", style: "" }
    },
    initialData: {
      configuration: {
        type: {
          type: "static",
          fieldType: "select",
          selectOptions: selectOptions.chartTypeOptions,
          value: "pie"
        },
        options: {
          type: "static",
          fieldType: "object",
          value: {},
          tooltip: "ChartJs options object https://www.chartjs.org/docs/latest/general/options.html"
        }
      },
      componentInput: {
        type: "static",
        fieldType: "object",
        value: {
          labels: ["Pie", "Charts", "<3"],
          datasets: [
            {
              data: [25, 50, 25],
              backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56"]
            }
          ]
        }
      }
    }
  },
  chartjscomponentv2: {
    name: "ChartJs",
    icon: Pie_chart,
    documentationLink: `${documentationBaseUrl}/chartjs`,
    dims: "2:8-6:8",
    customCss: {
      container: { class: "", style: "" }
    },
    initialData: {
      configuration: {
        type: {
          type: "static",
          fieldType: "select",
          selectOptions: selectOptions.chartTypeOptions,
          value: "pie"
        },
        options: {
          type: "static",
          fieldType: "object",
          value: {},
          tooltip: "ChartJs options object https://www.chartjs.org/docs/latest/general/options.html"
        }
      },
      componentInput: void 0
    }
  },
  barchartcomponent: {
    name: "Bar/Line Chart",
    icon: Bar_chart_4,
    documentationLink: `${documentationBaseUrl}/bar_line_chart`,
    dims: "2:8-6:8",
    customCss: {
      container: { class: "", style: "" }
    },
    initialData: {
      configuration: {
        theme: {
          type: "static",
          fieldType: "select",
          selectOptions: selectOptions.chartThemeOptions,
          value: "theme1"
        },
        line: {
          type: "static",
          fieldType: "boolean",
          value: false
        }
      },
      componentInput: {
        type: "static",
        fieldType: "object",
        value: { data: [25, 50, 25], labels: ["Bar", "Charts", "<3"] }
      }
    }
  },
  agchartscomponent: agchartscomponentconst,
  agchartscomponentee: { ...agchartscomponentconst, name: "AgCharts EE" },
  htmlcomponent: {
    name: "HTML",
    icon: Code_2,
    documentationLink: `${documentationBaseUrl}/html`,
    dims: "1:2-1:2",
    customCss: {
      container: { class: "", style: "" }
    },
    initialData: {
      componentInput: {
        type: "templatev2",
        fieldType: "template",
        eval: `<img
src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1024&amp;h=1280&amp;q=80"
>
<h1 class="absolute top-4 left-2 text-white">
Hello \${ctx.username}
</h1>`,
        connections: [
          {
            id: "username",
            componentId: "ctx"
          }
        ]
      },
      configuration: {}
    }
  },
  customcomponent: {
    name: "Custom",
    icon: Code_2,
    documentationLink: `https://www.windmill.dev/docs/apps/react_components`,
    dims: "1:2-1:2",
    customCss: {
      container: { class: "", style: "" }
    },
    initialData: {
      componentInput: {
        type: "static",
        fieldType: "object",
        value: {}
      },
      configuration: {}
    }
  },
  mardowncomponent: {
    name: "Markdown",
    icon: Heading_1,
    documentationLink: `${documentationBaseUrl}/html`,
    dims: "1:2-4:4",
    customCss: {
      container: { class: "", style: "" }
    },
    initialData: {
      componentInput: {
        type: "templatev2",
        fieldType: "template",
        eval: `# This is a header
## This is a subheader				
This is a paragraph.
				
* This is a list
* With two items`,
        connections: []
      },
      configuration: {
        size: {
          fieldType: "select",
          type: "static",
          selectOptions: selectOptions.prose,
          value: "Default",
          tooltip: "See Tailwind documentation: https://tailwindcss.com/docs/typography-plugin"
        }
      }
    }
  },
  vegalitecomponent: {
    name: "Vega Lite",
    icon: Pie_chart,
    documentationLink: `${documentationBaseUrl}/vega_lite`,
    dims: "2:8-6:8",
    customCss: {},
    initialData: {
      componentInput: {
        type: "static",
        fieldType: "object",
        value: {
          data: {
            values: [
              { a: "A", b: 28 },
              { a: "B", b: 55 },
              { a: "C", b: 43 },
              { a: "D", b: 91 }
            ]
          },
          mark: "bar",
          encoding: {
            x: { field: "a", type: "ordinal" },
            y: { field: "b", type: "quantitative" }
          }
        }
      },
      configuration: {
        canvas: {
          type: "static",
          fieldType: "boolean",
          value: false,
          tooltip: "Use the canvas renderer instead of the svg one for more interactive plots"
        }
      }
    }
  },
  plotlycomponent: {
    name: "Plotly",
    icon: Pie_chart,
    documentationLink: `${documentationBaseUrl}/plotly`,
    dims: "2:8-6:8",
    customCss: {},
    initialData: {
      componentInput: {
        type: "static",
        fieldType: "object",
        value: {
          type: "bar",
          x: [1, 2, 3, 4],
          y: [5, 10, 2, 8],
          marker: {
            color: "#C8A2C8",
            line: {
              width: 2.5
            }
          }
        }
      },
      configuration: {
        layout: {
          type: "static",
          fieldType: "object",
          value: {},
          tooltip: "Layout options for the plot. See https://plotly.com/javascript/reference/layout/ for more information"
        }
      }
    }
  },
  plotlycomponentv2: {
    name: "Plotly",
    icon: Pie_chart,
    documentationLink: `${documentationBaseUrl}/plotly`,
    dims: "2:8-6:8",
    customCss: {},
    initialData: {
      componentInput: void 0,
      configuration: {
        layout: {
          type: "static",
          fieldType: "object",
          value: {},
          tooltip: "Layout options for the plot. See https://plotly.com/javascript/reference/layout/ for more information"
        }
      }
    }
  },
  timeseriescomponent: {
    name: "Timeseries",
    icon: Grip_horizontal,
    documentationLink: `${documentationBaseUrl}/timeseries`,
    dims: "2:8-6:8",
    customCss: {
      container: { class: "", style: "" }
    },
    initialData: {
      configuration: {
        logarithmicScale: {
          type: "static",
          fieldType: "boolean",
          value: false
        },
        zoomable: {
          type: "static",
          fieldType: "boolean",
          value: false
        },
        pannable: {
          type: "static",
          fieldType: "boolean",
          value: false
        }
      },
      componentInput: {
        type: "static",
        fieldType: "array",
        subFieldType: "object",
        value: [
          {
            label: "foo",
            data: [
              {
                x: "2021-11-06 23:39:30",
                y: 50
              },
              {
                x: "2021-11-07 01:00:28",
                y: 60
              },
              {
                x: "2021-11-07 09:00:28",
                y: 20
              }
            ],
            backgroundColor: "rgb(255, 12, 137)"
          },
          {
            label: "foobar",
            data: [
              {
                x: "2021-11-06 23:39:30",
                y: 20
              },
              {
                x: "2021-11-07 01:00:28",
                y: 13
              },
              {
                x: "2021-11-07 09:00:28",
                y: 45
              }
            ],
            backgroundColor: "orange"
          }
        ]
      }
    }
  },
  scatterchartcomponent: {
    name: "Scatter Chart",
    icon: Grip_horizontal,
    documentationLink: `${documentationBaseUrl}/scatter_chart`,
    dims: "2:8-6:8",
    customCss: {
      container: { class: "", style: "" }
    },
    initialData: {
      configuration: {
        zoomable: {
          type: "static",
          fieldType: "boolean",
          value: false
        },
        pannable: {
          type: "static",
          fieldType: "boolean",
          value: false
        }
      },
      componentInput: {
        type: "static",
        fieldType: "array",
        subFieldType: "object",
        value: [
          {
            label: "foo",
            data: [
              { x: 25, y: 50 },
              { x: 23, y: 23 },
              { x: 12, y: 37 }
            ],
            backgroundColor: "rgb(255, 12, 137)"
          },
          {
            label: "foobar",
            data: [
              { x: 32, y: 32 },
              { x: 25, y: 42 },
              { x: 3, y: 27 }
            ],
            backgroundColor: "orange"
          }
        ]
      }
    }
  },
  tablecomponent: {
    name: "TanStack Table",
    icon: Table_2,
    documentationLink: `${documentationBaseUrl}/table`,
    dims: "3:10-6:10",
    customCss: {
      container: { class: "", style: "" },
      tableHeader: { class: "", style: "" },
      tableBody: { class: "", style: "" },
      tableFooter: { class: "", style: "" }
    },
    initialData: {
      configuration: {
        columnDefs: {
          type: "static",
          fieldType: "array",
          subFieldType: "table-column",
          value: [{ field: "id" }, { field: "name" }, { field: "age" }]
        },
        search: {
          fieldType: "select",
          type: "static",
          selectOptions: selectOptions.tableSearchOptions,
          value: "Disabled",
          tooltip: "Search can be configured in the following ways: Disabled: The search is disabled,By Runnable: The search is done in the backend, or by component: The search is done in the frontend."
        },
        pagination: paginationOneOf,
        downloadButton: {
          type: "static",
          fieldType: "boolean",
          value: true,
          tooltip: "display a button to download the table as a csv file"
        },
        initialState: {
          type: "static",
          fieldType: "object",
          value: {},
          tooltip: "any configuration that can be passed to the tanstack table component as initial state (https://tanstack.com/table/v8/docs/api/core/table#initialstate)"
        },
        selectFirstRowByDefault: {
          type: "static",
          fieldType: "boolean",
          value: true,
          tooltip: "Select the first row by default on start"
        }
      },
      componentInput: {
        type: "static",
        fieldType: "array",
        subFieldType: "object",
        value: [
          {
            id: 1,
            name: "A cell with a long name",
            age: 42
          },
          {
            id: 2,
            name: "A briefer cell",
            age: 84
          }
        ],
        hideRefreshButton: true
      },
      actionButtons: true
    }
  },
  aggridcomponent: aggridcomponentconst,
  aggridcomponentee: { ...aggridcomponentconst, name: "AgGrid Table EE" },
  aggridinfinitecomponent: aggridinfinitecomponentconst,
  aggridinfinitecomponentee: { ...aggridinfinitecomponentconst, name: "AgGrid Infinite Table EE" },
  checkboxcomponent: {
    name: "Toggle",
    icon: Toggle_left,
    documentationLink: `${documentationBaseUrl}/toggle`,
    dims: "1:1-2:1",
    customCss: {
      text: { class: "", style: "" },
      container: { class: "", style: "" }
    },
    initialData: {
      ...defaultAlignement,
      componentInput: void 0,
      onToggle: [],
      recomputeIds: true,
      configuration: {
        label: {
          type: "static",
          value: "Label",
          fieldType: "text"
        },
        defaultValue: {
          type: "static",
          value: void 0,
          fieldType: "boolean"
        },
        disabled: {
          type: "static",
          value: false,
          fieldType: "boolean"
        }
      }
    }
  },
  textinputcomponent: {
    name: "Text Input",
    icon: Text_cursor_input,
    documentationLink: `${documentationBaseUrl}/text_input`,
    dims: "2:1-2:1",
    customCss: {
      input: { class: "", style: "" }
    },
    initialData: {
      verticalAlignment: "center",
      componentInput: void 0,
      configuration: {
        placeholder: {
          type: "static",
          value: "Type...",
          fieldType: "text"
        },
        defaultValue: {
          type: "static",
          value: void 0,
          fieldType: "text"
        },
        disabled: {
          type: "static",
          value: false,
          fieldType: "boolean"
        },
        beforeIcon: {
          type: "static",
          value: void 0,
          fieldType: "icon-select"
        },
        afterIcon: {
          type: "static",
          value: void 0,
          fieldType: "icon-select"
        }
      }
    }
  },
  quillcomponent: {
    name: "Rich Text Editor",
    icon: Text_cursor_input,
    documentationLink: `${documentationBaseUrl}/rich_text_editor`,
    dims: "2:1-4:4",
    customCss: {},
    initialData: {
      componentInput: void 0,
      configuration: {
        placeholder: {
          type: "static",
          value: "Type...",
          fieldType: "text"
        },
        defaultValue: {
          type: "static",
          value: void 0,
          fieldType: "text"
        }
      }
    }
  },
  textareainputcomponent: {
    name: "Textarea",
    icon: Text_cursor_input,
    documentationLink: `${documentationBaseUrl}/textarea`,
    dims: "2:1-2:1",
    customCss: {
      input: { class: "", style: "" }
    },
    initialData: {
      componentInput: void 0,
      configuration: {
        placeholder: {
          type: "static",
          value: "Type...",
          fieldType: "text"
        },
        defaultValue: {
          type: "static",
          value: void 0,
          fieldType: "text"
        },
        disabled: {
          type: "static",
          value: false,
          fieldType: "boolean"
        }
      }
    }
  },
  selectcomponent: {
    name: "Select",
    icon: List,
    documentationLink: `${documentationBaseUrl}/select`,
    dims: "2:1-3:1",
    customCss: {
      input: {
        style: "",
        tooltip: "https://github.com/rob-balfre/svelte-select/blob/master/docs/theming_variables.md",
        class: ""
      }
    },
    initialData: {
      recomputeIds: true,
      verticalAlignment: "center",
      componentInput: void 0,
      configuration: {
        items: {
          type: "static",
          fieldType: "array",
          subFieldType: "labeledselect",
          value: [
            { value: "foo", label: "Foo" },
            { value: "bar", label: "Bar" }
          ]
        },
        create: {
          type: "static",
          fieldType: "boolean",
          value: false,
          tooltip: "Allows user to manually add new value",
          customTitle: "User creatable"
        },
        placeholder: {
          type: "static",
          fieldType: "text",
          value: "Select an item"
        },
        disabled: {
          fieldType: "boolean",
          type: "static",
          value: false
        },
        defaultValue: {
          type: "static",
          value: void 0,
          fieldType: "object"
        },
        preselectFirst: {
          type: "static",
          value: true,
          fieldType: "boolean",
          tooltip: "Preselect first item in the options if no default value is set"
        },
        fullWidth: {
          type: "static",
          fieldType: "boolean",
          value: true,
          tooltip: "Set the width of the options popup to 100% of the select width"
        }
      }
    }
  },
  multiselectcomponent: {
    name: "Multi Select",
    icon: List,
    documentationLink: `${documentationBaseUrl}/multiselect`,
    dims: "2:1-3:1",
    customCss: {
      multiselect: {
        style: "",
        tooltip: "See https://multiselect.janosh.dev/#with-css-variables for the available variables"
      }
    },
    initialData: {
      componentInput: void 0,
      verticalAlignment: "center",
      configuration: {
        items: {
          type: "static",
          fieldType: "array",
          subFieldType: "text",
          value: ["Foo", "Bar"]
        },
        defaultItems: {
          type: "static",
          fieldType: "array",
          subFieldType: "text",
          value: []
        },
        placeholder: {
          type: "static",
          fieldType: "text",
          value: "Select items"
        },
        create: {
          type: "static",
          fieldType: "boolean",
          value: false,
          tooltip: "Allows user to manually add new value",
          customTitle: "User creatable"
        },
        allowOverflow: {
          type: "static",
          fieldType: "boolean",
          value: true,
          tooltip: "If too many items, the box overflow its container instead of having an internal scroll"
        }
      }
    }
  },
  multiselectcomponentv2: {
    name: "Multi Select",
    icon: List,
    documentationLink: `${documentationBaseUrl}/multiselect`,
    dims: "2:1-3:1",
    customCss: {
      multiselect: {
        style: "",
        tooltip: "See https://multiselect.janosh.dev/#with-css-variables for the available variables"
      }
    },
    initialData: {
      componentInput: void 0,
      verticalAlignment: "center",
      configuration: {
        items: {
          type: "static",
          fieldType: "array",
          subFieldType: "text",
          value: ["Foo", "Bar"]
        },
        defaultItems: {
          type: "static",
          fieldType: "array",
          subFieldType: "text",
          value: []
        },
        placeholder: {
          type: "static",
          fieldType: "text",
          value: "Select items"
        },
        create: {
          type: "static",
          fieldType: "boolean",
          value: false,
          tooltip: "Allows user to manually add new value",
          customTitle: "User creatable"
        },
        allowOverflow: {
          type: "static",
          fieldType: "boolean",
          value: true,
          tooltip: "If too many items, the box overflow its container instead of having an internal scroll"
        }
      }
    }
  },
  resourceselectcomponent: {
    name: "Resource Select",
    icon: List,
    documentationLink: `${documentationBaseUrl}/resource_select`,
    dims: "2:1-3:1",
    customCss: {
      input: { style: "" }
    },
    initialData: {
      verticalAlignment: "center",
      componentInput: void 0,
      configuration: {
        items: {
          type: "static",
          fieldType: "array",
          subFieldType: "labeledresource",
          allowTypeChange: false,
          value: []
        },
        placeholder: {
          type: "static",
          fieldType: "text",
          value: "Select an item"
        },
        fullWidth: {
          type: "static",
          fieldType: "boolean",
          value: true,
          tooltip: "Set the width of the options popup to 100% of the select width"
        },
        disabled: {
          type: "static",
          fieldType: "boolean",
          value: false
        }
      }
    }
  },
  numberinputcomponent: {
    name: "Number",
    icon: Binary,
    documentationLink: `${documentationBaseUrl}/number_input`,
    dims: "2:1-3:1",
    customCss: {
      input: { class: "", style: "" }
    },
    initialData: {
      verticalAlignment: "center",
      componentInput: void 0,
      configuration: {
        placeholder: {
          type: "static",
          value: "Type...",
          fieldType: "text"
        },
        defaultValue: {
          type: "static",
          value: void 0,
          fieldType: "number"
        },
        min: {
          type: "static",
          value: void 0,
          fieldType: "number"
        },
        max: {
          type: "static",
          value: void 0,
          fieldType: "number"
        },
        step: {
          type: "static",
          value: 1,
          fieldType: "number",
          tooltip: "Spread between each number suggestion"
        }
      }
    }
  },
  currencycomponent: {
    name: "Currency",
    icon: Dollar_sign,
    documentationLink: `${documentationBaseUrl}/currency_input`,
    dims: "2:1-3:1",
    customCss: {
      input: { class: "", style: "" }
    },
    initialData: {
      verticalAlignment: "center",
      componentInput: void 0,
      configuration: {
        defaultValue: {
          type: "static",
          value: void 0,
          fieldType: "number"
        },
        isNegativeAllowed: {
          type: "static",
          value: false,
          fieldType: "boolean"
        },
        currency: {
          type: "static",
          value: "USD",
          fieldType: "select",
          selectOptions: selectOptions.currencyOptions
        },
        locale: {
          type: "static",
          value: "en-US",
          fieldType: "select",
          selectOptions: selectOptions.localeOptions,
          tooltip: "Currency format"
        }
      }
    }
  },
  slidercomponent: {
    name: "Slider",
    icon: Sliders_horizontal,
    documentationLink: `${documentationBaseUrl}/slider`,
    dims: "3:1-4:1",
    customCss: {
      bar: { style: "", class: "" },
      handle: { style: "", class: "" },
      limits: { class: "", style: "" },
      value: { class: "", style: "" }
    },
    initialData: {
      verticalAlignment: "center",
      componentInput: void 0,
      configuration: {
        min: {
          type: "static",
          value: 0,
          fieldType: "number"
        },
        max: {
          type: "static",
          value: 42,
          fieldType: "number"
        },
        defaultValue: {
          type: "static",
          value: 20,
          fieldType: "number"
        },
        step: {
          type: "static",
          value: 1,
          fieldType: "number",
          tooltip: "Spread between each number suggestion"
        },
        vertical: {
          type: "static",
          fieldType: "boolean",
          value: false
        },
        disabled: {
          type: "static",
          value: false,
          fieldType: "boolean"
        },
        axisStep: {
          type: "static",
          value: 10,
          fieldType: "number",
          tooltip: "Spread between each number suggestion when using the arrow keys"
        }
      }
    }
  },
  dateslidercomponent: {
    name: "Date Slider",
    icon: Sliders_horizontal,
    documentationLink: `${documentationBaseUrl}/date_slider`,
    dims: "3:1-4:1",
    customCss: {
      bar: { style: "", class: "" },
      handle: { style: "", class: "" },
      limits: { class: "", style: "" },
      value: { class: "", style: "" }
    },
    initialData: {
      verticalAlignment: "center",
      componentInput: void 0,
      configuration: {
        min: {
          type: "static",
          value: "",
          fieldType: "date"
        },
        max: {
          type: "static",
          value: "",
          fieldType: "date"
        },
        defaultValue: {
          type: "static",
          value: "",
          fieldType: "date"
        },
        step: {
          type: "static",
          value: 1,
          fieldType: "number",
          tooltip: "Number of days between each date suggestion"
        },
        vertical: {
          type: "static",
          fieldType: "boolean",
          value: false
        },
        disabled: {
          type: "static",
          value: false,
          fieldType: "boolean"
        },
        outputFormat: {
          type: "static",
          value: void 0,
          fieldType: "text",
          tooltip: "See date-fns format for more information",
          documentationLink: "https://date-fns.org/v1.29.0/docs/format"
        }
      }
    }
  },
  rangecomponent: {
    name: "Range",
    icon: Sliders_horizontal,
    documentationLink: `${documentationBaseUrl}/range`,
    dims: "3:2-4:2",
    customCss: {
      handles: { style: "" },
      bar: { style: "" },
      limits: { class: "", style: "" },
      values: { class: "", style: "" }
    },
    initialData: {
      verticalAlignment: "center",
      componentInput: void 0,
      configuration: {
        min: {
          type: "static",
          value: 0,
          fieldType: "number"
        },
        max: {
          type: "static",
          value: 42,
          fieldType: "number"
        },
        defaultLow: {
          type: "static",
          value: 10,
          fieldType: "number"
        },
        defaultHigh: {
          type: "static",
          value: 20,
          fieldType: "number"
        },
        step: {
          type: "static",
          value: 1,
          fieldType: "number",
          tooltip: "Spread between each number suggestion"
        },
        disabled: {
          type: "static",
          value: false,
          fieldType: "boolean",
          tooltip: "Determine if the slider is disabled, or enabled (only disables interactions, and events)"
        },
        axisStep: {
          type: "static",
          value: 10,
          fieldType: "number",
          tooltip: "Spread between each number suggestion when using the arrow keys"
        }
      }
    }
  },
  passwordinputcomponent: {
    name: "Password",
    icon: Lock,
    documentationLink: `${documentationBaseUrl}/password_input`,
    dims: "2:1-3:1",
    customCss: {
      input: { class: "", style: "" }
    },
    initialData: {
      verticalAlignment: "center",
      componentInput: void 0,
      configuration: {
        placeholder: {
          type: "static",
          value: "Password",
          fieldType: "text"
        },
        disabled: {
          type: "static",
          value: false,
          fieldType: "boolean"
        },
        beforeIcon: {
          type: "static",
          value: void 0,
          fieldType: "icon-select"
        },
        afterIcon: {
          type: "static",
          value: void 0,
          fieldType: "icon-select"
        }
      }
    }
  },
  emailinputcomponent: {
    name: "Email Input",
    icon: At_sign,
    documentationLink: `${documentationBaseUrl}/email_input`,
    dims: "2:1-3:1",
    customCss: {
      input: { class: "", style: "" }
    },
    initialData: {
      verticalAlignment: "center",
      componentInput: void 0,
      configuration: {
        placeholder: {
          type: "static",
          value: "Email",
          fieldType: "text"
        },
        defaultValue: {
          type: "static",
          value: void 0,
          fieldType: "text"
        },
        disabled: {
          type: "static",
          value: false,
          fieldType: "boolean"
        },
        beforeIcon: {
          type: "static",
          value: void 0,
          fieldType: "icon-select"
        },
        afterIcon: {
          type: "static",
          value: void 0,
          fieldType: "icon-select"
        }
      }
    }
  },
  dateinputcomponent: {
    name: "Date",
    icon: Calendar,
    documentationLink: `${documentationBaseUrl}/date_input`,
    dims: "2:1-3:1",
    customCss: {
      input: { class: "", style: "" }
    },
    initialData: {
      verticalAlignment: "center",
      componentInput: void 0,
      configuration: {
        minDate: {
          type: "static",
          value: "",
          fieldType: "date",
          tooltip: 'The minimum date that can be selected. The format is: "yyyy-MM-dd"'
        },
        maxDate: {
          type: "static",
          value: "",
          fieldType: "date",
          tooltip: 'The maximum date that can be selected. The format is: "yyyy-MM-dd"'
        },
        defaultValue: {
          type: "static",
          value: void 0,
          fieldType: "date"
        },
        outputFormat: {
          type: "static",
          value: "yyyy-MM-dd",
          fieldType: "text",
          markdownTooltip: `### Output format				
See date-fns format for more information. By default, it is 'yyyy-MM-dd'

| Format      | Result | Description |
| ----------- | ----------- | ----------- |
| dd 				| 01, 02, ..., 31 | Day of the month |
| d 				| 1, 2, ..., 31 | Day of the month |
| MM 				| 01, 02, ..., 12 | Month |
| MMM 				| Jan, Feb, ..., Dec | Month |
| MMMM 				| January, February, ..., December | Month |
| yyyy 				| 2021, 2022, ... | Year |
`,
          documentationLink: "https://date-fns.org/v2.30.0/docs/format",
          placeholder: "yyyy-MM-dd"
        }
      }
    }
  },
  datetimeinputcomponent: {
    name: "Date & Time",
    icon: Calendar_clock,
    documentationLink: `${documentationBaseUrl}/datetime_input`,
    dims: "2:1-6:2",
    customCss: {
      container: { class: "", style: "" }
    },
    initialData: {
      verticalAlignment: "center",
      componentInput: void 0,
      configuration: {
        displayPresets: {
          type: "static",
          value: false,
          fieldType: "boolean",
          tooltip: "Display presets to select the date for example, in 1 week, in 1 month, etc."
        },
        minDateTime: {
          type: "static",
          value: "",
          fieldType: "datetime",
          tooltip: 'The minimum date and time that can be selected. The format is the ISO 8601 format: "yyyy-MM-ddTHH:mm:ss:SSSZ", for example "2021-11-06T23:39:30.000Z", or toISOString() from a Date'
        },
        maxDateTime: {
          type: "static",
          value: "",
          fieldType: "datetime",
          tooltip: 'The maximum date and time that can be selected. The format is the ISO 8601 format: "yyyy-MM-ddTHH:mm:ss:SSSZ", for example "2021-11-06T23:39:30.000Z", or toISOString() from a Date'
        },
        outputFormat: {
          type: "static",
          value: void 0,
          fieldType: "text",
          documentationLink: "https://date-fns.org/v2.30.0/docs/format",
          placeholder: "dd.MM.yyyy HH:mm",
          markdownTooltip: `### Output format				
See date-fns format for more information. By default, it is 'dd.MM.yyyy HH:mm'

| Format      | Result | Description |
| ----------- | ----------- | ----------- |
| dd 				| 01, 02, ..., 31 | Day of the month |
| d 				| 1, 2, ..., 31 | Day of the month |
| MM 				| 01, 02, ..., 12 | Month |
| MMM 				| Jan, Feb, ..., Dec | Month |
| MMMM 				| January, February, ..., December | Month |
| yyyy 				| 2021, 2022, ... | Year |
| HH 				| 00, 01, ..., 23 | Hours |
| mm 				| 00, 01, ..., 59 | Minutes |
| ss 				| 00, 01, ..., 59 | Seconds |
					`
        },
        defaultValue: {
          type: "static",
          value: void 0,
          fieldType: "datetime"
        },
        disabled: {
          type: "static",
          value: false,
          fieldType: "boolean"
        }
      }
    }
  },
  timeinputcomponent: {
    name: "Time",
    icon: Clock,
    documentationLink: `${documentationBaseUrl}/time_input`,
    dims: "2:1-3:1",
    customCss: {
      input: { class: "", style: "" }
    },
    initialData: {
      verticalAlignment: "center",
      componentInput: void 0,
      configuration: {
        minTime: {
          type: "static",
          value: "",
          fieldType: "time",
          tooltip: 'The minimum time that can be selected. If the time provided is not valid, it will set the output "validity" to false. The format is: "HH:mm"'
        },
        maxTime: {
          type: "static",
          value: "",
          fieldType: "time",
          tooltip: 'The maximum time that can be selected. If the time provided is not valid, it will set the output "validity" to false. The format is: "HH:mm"'
        },
        defaultValue: {
          type: "static",
          value: void 0,
          fieldType: "time"
        },
        ["24hFormat"]: {
          type: "static",
          value: true,
          fieldType: "boolean",
          tooltip: "Use 24h format. Will change the format of the output of the component: HH:mm to hh:mm am/pm"
        }
      }
    }
  },
  tabscomponent: {
    name: "Tabs",
    icon: List_ordered,
    documentationLink: `${documentationBaseUrl}/tabs`,
    dims: "2:8-6:8",
    customCss: {
      tabRow: { class: "", style: "" },
      allTabs: { class: "", style: "" },
      selectedTab: { class: "", style: "" },
      container: { class: "", style: "" }
    },
    initialData: {
      configuration: {
        tabsKind: {
          fieldType: "select",
          type: "static",
          selectOptions: selectOptions.tabsKindOptions,
          value: "tabs",
          tooltip: `Tabs can be configured to be either horizontal (tabs), vertical (sidebar), or invisible.`
        }
      },
      componentInput: void 0,
      numberOfSubgrids: 2,
      tabs: ["First tab", "Second tab"]
    }
  },
  steppercomponent: {
    name: "Stepper",
    icon: List_ordered,
    documentationLink: `${documentationBaseUrl}/stepper`,
    dims: "2:8-6:8",
    customCss: {
      container: { class: "", style: "" }
    },
    initialData: {
      configuration: {},
      componentInput: {
        type: "runnable",
        fieldType: "any",
        fields: {},
        runnable: void 0
      },
      numberOfSubgrids: 2,
      tabs: ["First", "Second"]
    }
  },
  carousellistcomponent: {
    name: "Carousel List",
    icon: List,
    documentationLink: `${documentationBaseUrl}/carousel`,
    dims: "3:8-12:8",
    customCss: {
      container: { class: "", style: "" }
    },
    initialData: {
      configuration: {
        timingFunction: {
          fieldType: "select",
          type: "static",
          selectOptions: selectOptions.animationTimingFunctionOptions,
          value: "linear",
          tooltip: "Sets how an animation progresses through the duration of each cycle, see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function"
        }
      },
      componentInput: {
        type: "static",
        fieldType: "array",
        subFieldType: "object",
        value: [{ foo: 1 }, { foo: 2 }, { foo: 3 }]
      },
      numberOfSubgrids: 1
    }
  },
  iconcomponent: {
    name: "Icon",
    icon: Smile,
    documentationLink: `${documentationBaseUrl}/icon`,
    dims: "1:3-1:2",
    customCss: {
      container: { class: "", style: "" },
      icon: { class: "", style: "" }
    },
    initialData: {
      horizontalAlignment: "center",
      verticalAlignment: "center",
      componentInput: void 0,
      configuration: {
        icon: {
          type: "static",
          value: "Smile",
          fieldType: "icon-select",
          tooltip: "The icons can be found at https://lucide.dev/"
        },
        color: {
          type: "static",
          value: "currentColor",
          fieldType: "color",
          tooltip: "The color of the icon can be overridden by the `background-color` property in the styling menu"
        },
        size: {
          type: "static",
          value: 24,
          fieldType: "number"
        },
        strokeWidth: {
          type: "static",
          value: 2,
          fieldType: "number"
        }
      }
    }
  },
  horizontaldividercomponent: {
    name: "Divider X",
    icon: Separator_horizontal,
    documentationLink: `${documentationBaseUrl}/divider_x`,
    dims: "3:1-12:1",
    customCss: {
      container: { class: "", style: "" },
      divider: {
        class: "",
        style: "",
        tooltip: "`background-color` and `height` are handled by the component configuration"
      }
    },
    initialData: {
      verticalAlignment: "center",
      componentInput: void 0,
      configuration: {
        size: {
          type: "static",
          value: 2,
          fieldType: "number",
          tooltip: "The height of the divider in pixels can be overridden by the `height` property in the styling menu"
        },
        color: {
          type: "static",
          value: "#00000060",
          fieldType: "color",
          tooltip: "The color of the divider can be overridden by the `background-color` property in the styling menu"
        }
      }
    }
  },
  verticaldividercomponent: {
    name: "Divider Y",
    icon: Separator_vertical,
    documentationLink: `${documentationBaseUrl}/divider_y`,
    dims: "1:4-1:6",
    customCss: {
      container: { class: "", style: "" },
      divider: { class: "", style: "" }
    },
    initialData: {
      horizontalAlignment: "center",
      componentInput: void 0,
      configuration: {
        size: {
          type: "static",
          value: 2,
          fieldType: "number",
          tooltip: "The width of the divider in pixels can be overridden by the `width` property in the styling menu"
        },
        color: {
          type: "static",
          value: "#00000060",
          fieldType: "color",
          tooltip: "The color of the divider can be overridden by the `background-color` property in the styling menu"
        }
      }
    }
  },
  fileinputcomponent: {
    name: "File Input",
    icon: Paperclip,
    documentationLink: `${documentationBaseUrl}/file_input`,
    dims: "3:4-6:4",
    customCss: {
      container: { class: "", style: "" }
    },
    initialData: {
      componentInput: void 0,
      configuration: {
        acceptedFileTypes: {
          type: "static",
          value: ["image/*", "application/pdf"],
          fieldType: "array"
        },
        allowMultiple: {
          type: "static",
          value: false,
          fieldType: "boolean",
          tooltip: "If allowed, the user will be able to select more than one file"
        },
        text: {
          type: "static",
          value: "Drag and drop files or click to select them",
          fieldType: "text"
        },
        includeMimeType: {
          type: "static",
          value: false,
          fieldType: "boolean",
          tooltip: "If enabled, the mime type of the file will be included."
        },
        submittedFileText: {
          type: "static",
          value: "Selected file",
          fieldType: "text"
        },
        disabled: {
          type: "static",
          value: false,
          fieldType: "boolean"
        }
      }
    }
  },
  imagecomponent: {
    name: "Image",
    icon: Image,
    documentationLink: `${documentationBaseUrl}/image`,
    dims: "3:4-5:4",
    customCss: {
      image: { class: "", style: "" }
    },
    initialData: {
      componentInput: void 0,
      configuration: {
        source: {
          type: "static",
          value: "/logo.svg",
          fieldType: "text",
          fileUpload: {
            accept: "image/*",
            convertTo: "base64"
          }
        },
        sourceKind: {
          fieldType: "select",
          type: "static",
          selectOptions: selectOptions.imageSourceKind,
          value: "url"
        },
        imageFit: {
          fieldType: "select",
          type: "static",
          selectOptions: selectOptions.objectFitOptions,
          value: "contain",
          tooltip: "The image fit property can be overridden by the `object-fit` property in the styling menu"
        },
        altText: {
          type: "static",
          value: "",
          fieldType: "text",
          tooltip: "This text will appear if the image can't be loaded for any reason"
        }
      }
    }
  },
  drawercomponent: {
    name: "Drawer",
    icon: Panel_left_close,
    documentationLink: `${documentationBaseUrl}/drawer`,
    dims: "1:1-2:1",
    customCss: {
      button: { style: "", class: "" },
      container: { class: "", style: "" },
      drawer: { class: "", style: "" }
    },
    initialData: {
      horizontalAlignment: "center",
      verticalAlignment: "center",
      configuration: {
        drawerTitle: {
          type: "static",
          fieldType: "text",
          value: "Drawer title"
        },
        hideButtonOnView: {
          fieldType: "boolean",
          type: "static",
          value: false,
          tooltip: "Make button invisible when app is used outside of the edit mode"
        },
        label: {
          type: "static",
          fieldType: "text",
          value: "Press me"
        },
        color: {
          fieldType: "select",
          type: "static",
          selectOptions: buttonColorOptions,
          value: "blue",
          tooltip: "The color of the button can be overridden by the `background-color` property in the styling menu"
        },
        size: {
          fieldType: "select",
          type: "static",
          selectOptions: selectOptions.buttonSizeOptions,
          value: "xs"
        },
        fillContainer: {
          fieldType: "boolean",
          type: "static",
          value: false,
          tooltip: "This will make the button fill the container width and height. Height and width can be overwritten with custom styles."
        },
        disabled: {
          fieldType: "boolean",
          type: "static",
          value: false
        }
      },
      componentInput: void 0,
      numberOfSubgrids: 1
    }
  },
  mapcomponent: {
    name: "Map",
    icon: Map_pin,
    documentationLink: `${documentationBaseUrl}/map`,
    dims: "3:6-6:10",
    customCss: {
      map: { class: "", style: "" }
    },
    initialData: {
      componentInput: void 0,
      configuration: {
        longitude: {
          fieldType: "number",
          type: "static",
          value: 15
        },
        latitude: {
          fieldType: "number",
          type: "static",
          value: 50
        },
        zoom: {
          fieldType: "number",
          type: "static",
          value: 3
        },
        markers: {
          fieldType: "array",
          type: "static",
          subFieldType: "object",
          fileUpload: {
            accept: "application/json",
            convertTo: "text"
          },
          value: [
            {
              lon: 12.496366,
              lat: 41.902783,
              title: "Rome",
              radius: 7,
              color: "#dc2626",
              strokeWidth: 3,
              strokeColor: "#fca5a5"
            },
            {
              lon: -0.136439,
              lat: 51.507359,
              title: "London"
            }
          ]
        },
        lock: {
          fieldType: "boolean",
          type: "static",
          value: false,
          tooltip: "Lock the map to prevent user interaction"
        }
      }
    }
  },
  verticalsplitpanescomponent: {
    name: "Vertical Split Panes",
    icon: Flip_horizontal,
    documentationLink: `${documentationBaseUrl}/vertical_split_panes`,
    dims: "2:8-6:8",
    customCss: {
      container: { class: "", style: "" }
    },
    initialData: {
      configuration: {},
      componentInput: void 0,
      panes: [50, 50],
      numberOfSubgrids: 2
    }
  },
  horizontalsplitpanescomponent: {
    name: "Horizontal Split Panes",
    icon: Flip_vertical,
    documentationLink: `${documentationBaseUrl}/horizontal_split_panes`,
    dims: "2:8-6:8",
    customCss: {
      container: { class: "", style: "" }
    },
    initialData: {
      configuration: {},
      componentInput: void 0,
      panes: [50, 50],
      numberOfSubgrids: 2
    }
  },
  pdfcomponent: {
    name: "PDF",
    icon: File_text,
    documentationLink: `${documentationBaseUrl}/pdf`,
    dims: "3:8-8:12",
    customCss: {
      container: { class: "", style: "" }
    },
    initialData: {
      componentInput: void 0,
      configuration: {
        source: {
          type: "static",
          value: "/dummy.pdf",
          fieldType: "text",
          fileUpload: {
            accept: "application/pdf",
            convertTo: "base64"
          },
          placeholder: "Enter URL or upload file (base64)"
        },
        zoom: {
          fieldType: "number",
          type: "static",
          value: 100
        }
      }
    }
  },
  modalcomponent: {
    name: "Modal",
    icon: Panel_left_close,
    documentationLink: `${documentationBaseUrl}/modal`,
    dims: "1:1-2:1",
    customCss: {
      button: { class: "", style: "" },
      buttonContainer: { class: "", style: "" },
      popup: { class: "", style: "" }
    },
    initialData: {
      horizontalAlignment: "center",
      verticalAlignment: "center",
      configuration: {
        modalTitle: {
          type: "static",
          fieldType: "text",
          value: "Modal title"
        },
        hideButtonOnView: {
          fieldType: "boolean",
          type: "static",
          value: false,
          tooltip: "Make button invisible when app is used outside of the edit mode"
        },
        buttonLabel: {
          type: "static",
          fieldType: "text",
          value: "Press me"
        },
        buttonColor: {
          fieldType: "select",
          type: "static",
          selectOptions: buttonColorOptions,
          value: "blue",
          tooltip: "These presets can be overwritten with custom styles."
        },
        buttonSize: {
          fieldType: "select",
          type: "static",
          selectOptions: selectOptions.buttonSizeOptions,
          value: "xs"
        },
        buttonFillContainer: {
          fieldType: "boolean",
          type: "static",
          value: false,
          tooltip: "This will make the button fill the container width and height. Height and width can be overwritten with custom styles."
        },
        buttonDisabled: {
          fieldType: "boolean",
          type: "static",
          value: false
        }
      },
      componentInput: void 0,
      numberOfSubgrids: 1
    }
  },
  schemaformcomponent: {
    name: "Form",
    icon: File_text,
    documentationLink: `${documentationBaseUrl}/form_input`,
    dims: "3:8-8:12",
    customCss: {
      container: { class: "", style: "" },
      label: { class: "", style: "" },
      description: { class: "", style: "" }
    },
    initialData: {
      componentInput: {
        type: "static",
        fieldType: "schema",
        value: {
          properties: {
            first_name: {
              type: "string",
              description: "your name",
              default: "default"
            }
          },
          required: []
        }
      },
      configuration: {
        defaultValues: {
          type: "static",
          fieldType: "object",
          value: {},
          tooltip: "This enables setting default form values dynamically using an object: keys are field names, and values are the defaults."
        },
        dynamicEnums: {
          type: "static",
          fieldType: "object",
          value: {},
          tooltip: "This enables setting form enum values dynamically using an object: keys are field names, and values are arrays of strings."
        },
        displayType: {
          fieldType: "boolean",
          type: "static",
          value: false,
          tooltip: "This will display the type and/or the format on the field next to the label."
        },
        largeGap: {
          fieldType: "boolean",
          type: "static",
          value: false,
          tooltip: "This will add a large gap between the form elements."
        }
      }
    }
  },
  selecttabcomponent: {
    name: "Select Tab",
    icon: List,
    documentationLink: `${documentationBaseUrl}/select_tab`,
    dims: "2:1-3:1",
    customCss: {
      tabRow: { class: "", style: "" },
      allTabs: { class: "", style: "" },
      selectedTab: { class: "", style: "" }
    },
    initialData: {
      verticalAlignment: "center",
      componentInput: void 0,
      configuration: {
        items: {
          type: "static",
          fieldType: "array",
          subFieldType: "labeledselect",
          value: [
            { value: "foo", label: "Foo" },
            { value: "bar", label: "Bar" }
          ]
        },
        defaultValue: {
          type: "static",
          value: void 0,
          fieldType: "object"
        },
        tabSize: {
          type: "static",
          value: "sm",
          fieldType: "select",
          selectOptions: selectOptions.buttonSizeOptions,
          tooltip: "Size of the tabs can be overwritten with custom styles using `font-size` in CSS or using tailwind classes."
        }
      }
    }
  },
  selectstepcomponent: {
    name: "Select Step",
    icon: List,
    documentationLink: `${documentationBaseUrl}/select_step`,
    dims: "2:1-3:1",
    customCss: {
      container: { class: "", style: "" }
    },
    initialData: {
      verticalAlignment: "center",
      componentInput: void 0,
      configuration: {
        items: {
          type: "static",
          fieldType: "array",
          subFieldType: "labeledselect",
          value: [
            { value: "foo", label: "Foo" },
            { value: "bar", label: "Bar" }
          ]
        },
        defaultValue: {
          type: "static",
          value: void 0,
          fieldType: "object"
        }
      }
    }
  },
  conditionalwrapper: {
    name: "Conditional Tabs",
    icon: Split,
    documentationLink: `${documentationBaseUrl}/conditional_tabs`,
    dims: "2:8-6:8",
    customCss: {
      container: { class: "", style: "" }
    },
    initialData: {
      configuration: {},
      componentInput: void 0,
      numberOfSubgrids: 2,
      conditions: [
        {
          type: "evalv2",
          expr: "false",
          fieldType: "boolean",
          connections: []
        },
        {
          type: "evalv2",
          expr: "true",
          fieldType: "boolean",
          connections: []
        }
      ]
    }
  },
  statcomponent: {
    name: "Statistic Card",
    icon: File_bar_chart,
    documentationLink: `${documentationBaseUrl}/statistic_card`,
    dims: "2:4-3:4",
    quickstyle: {
      title: {
        quickCss: ["font-size: 1rem", "font-size: 1.5rem", "font-size: 2rem"],
        quickTailwindClasses: ["text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl"]
      },
      value: {
        quickCss: ["font-size: 1rem", "font-size: 1.5rem", "font-size: 2rem"],
        quickTailwindClasses: ["text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl"]
      }
    },
    customCss: {
      title: {
        class: "",
        style: ""
      },
      container: { class: "", style: "" },
      value: {
        class: "",
        style: ""
      },
      media: { class: "", style: "" }
    },
    initialData: {
      configuration: {
        title: {
          type: "static",
          value: "Title",
          fieldType: "text"
        },
        value: {
          type: "static",
          value: "Value",
          fieldType: "text"
        },
        progress: {
          type: "static",
          value: 0,
          fieldType: "number"
        },
        media: {
          type: "oneOf",
          selected: "image",
          labels: {
            icon: "Icon",
            image: "Image"
          },
          configuration: {
            icon: {
              icon: {
                type: "static",
                value: void 0,
                fieldType: "icon-select"
              }
            },
            image: {
              source: {
                type: "static",
                value: "/logo.svg",
                fieldType: "text",
                fileUpload: {
                  accept: "image/*",
                  convertTo: "base64"
                }
              },
              sourceKind: {
                fieldType: "select",
                type: "static",
                selectOptions: selectOptions.imageSourceKind,
                value: "url"
              }
            }
          }
        }
      }
    }
  },
  menucomponent: {
    name: "Dropdown Menu",
    icon: Menu,
    documentationLink: `${documentationBaseUrl}/dropdown_menu`,
    dims: "1:1-1:2",
    customCss: {
      button: { style: "", class: "" }
    },
    initialData: {
      ...defaultAlignement,
      componentInput: void 0,
      configuration: {
        label: {
          type: "static",
          fieldType: "text",
          value: ""
        },
        color: {
          fieldType: "select",
          type: "static",
          selectOptions: selectOptions.buttonColorOptions,
          value: "light"
        },
        size: {
          fieldType: "select",
          type: "static",
          selectOptions: selectOptions.buttonSizeOptions,
          value: "xs"
        },
        fillContainer: {
          fieldType: "boolean",
          type: "static",
          value: false
        },
        beforeIcon: {
          type: "static",
          value: "Menu",
          fieldType: "icon-select"
        },
        afterIcon: {
          type: "static",
          value: void 0,
          fieldType: "icon-select"
        }
      },
      menuItems: true
    }
  },
  decisiontreecomponent: {
    name: "Decision Tree",
    icon: Network,
    documentationLink: `${documentationBaseUrl}/decision_tree`,
    dims: "2:8-6:8",
    customCss: {
      container: { class: "", style: "" }
    },
    initialData: {
      configuration: {},
      componentInput: void 0,
      numberOfSubgrids: 1,
      nodes: [
        {
          id: "a",
          label: "a",
          allowed: {
            type: "evalv2",
            expr: "true",
            fieldType: "boolean",
            connections: []
          },
          next: []
        }
      ]
    }
  },
  s3fileinputcomponent: {
    name: "S3 File Uploader",
    icon: Upload_cloud,
    documentationLink: `${documentationBaseUrl}/s3fileinput`,
    dims: "2:8-6:8",
    customCss: {
      container: { class: "", style: "" }
    },
    initialData: {
      configuration: {
        type: {
          type: "oneOf",
          selected: "s3",
          labels: {
            s3: "S3"
          },
          configuration: {
            s3: {
              resource: {
                type: "static",
                fieldType: "resource",
                value: "",
                subFieldType: "s3"
              },
              acceptedFileTypes: {
                type: "static",
                value: ["image/*", "application/pdf"],
                fieldType: "array"
              },
              allowMultiple: {
                type: "static",
                value: false,
                fieldType: "boolean",
                tooltip: "If allowed, the user will be able to select more than one file"
              },
              text: {
                type: "static",
                value: "Drag and drop files or click to select them",
                fieldType: "text"
              },
              /*
              displayDirectLink: {
              	type: 'static',
              	value: false,
              	fieldType: 'boolean'
              },
              */
              pathTemplate: {
                type: "evalv2",
                expr: `\`\${file.name}\``,
                fieldType: "template",
                connections: [],
                onDemandOnly: true
              },
              disabled: {
                type: "static",
                value: false,
                fieldType: "boolean"
              }
            }
          }
        }
      }
    }
  },
  dbexplorercomponent: {
    name: "Database Studio Table",
    icon: Database,
    documentationLink: `${documentationBaseUrl}/database_studio`,
    dims: "2:8-6:8",
    customCss: {
      container: { class: "", style: "" }
    },
    initialData: {
      configuration: {
        type: {
          type: "oneOf",
          selected: "postgresql",
          labels: {
            postgresql: "PostgreSQL",
            mysql: "MySQL",
            ms_sql_server: "MS SQL Server",
            snowflake: "Snowflake",
            bigquery: "BigQuery"
          },
          configuration: {
            postgresql: {
              resource: {
                type: "static",
                fieldType: "resource",
                subFieldType: "postgres",
                value: "",
                allowTypeChange: false
              },
              table: {
                fieldType: "select",
                subFieldType: "db-table",
                type: "static",
                selectOptions: [],
                value: void 0,
                allowTypeChange: false
              }
            },
            mysql: {
              resource: {
                type: "static",
                fieldType: "resource",
                subFieldType: "mysql",
                value: ""
              },
              table: {
                fieldType: "select",
                subFieldType: "db-table",
                type: "static",
                selectOptions: [],
                value: void 0
              }
            },
            ms_sql_server: {
              resource: {
                type: "static",
                fieldType: "resource",
                subFieldType: "ms_sql_server",
                value: ""
              },
              table: {
                fieldType: "select",
                subFieldType: "db-table",
                type: "static",
                selectOptions: [],
                value: void 0
              }
            },
            snowflake: {
              resource: {
                type: "static",
                fieldType: "resource",
                subFieldType: "snowflake",
                value: ""
              },
              table: {
                fieldType: "select",
                subFieldType: "db-table",
                type: "static",
                selectOptions: [],
                value: void 0
              }
            },
            bigquery: {
              resource: {
                type: "static",
                fieldType: "resource",
                subFieldType: "bigquery",
                value: ""
              },
              table: {
                fieldType: "select",
                subFieldType: "db-table",
                type: "static",
                selectOptions: [],
                value: void 0
              }
            }
          }
        },
        columnDefs: {
          type: "static",
          fieldType: "array",
          subFieldType: "db-explorer",
          value: [],
          loading: false
        },
        whereClause: {
          type: "static",
          fieldType: "text",
          value: "",
          allowTypeChange: false
        },
        flex: {
          type: "static",
          fieldType: "boolean",
          value: true,
          tooltip: "default col flex is 1 (see ag-grid docs)"
        },
        allEditable: {
          type: "static",
          fieldType: "boolean",
          value: false,
          hide: true,
          tooltip: "Configure all columns as Editable by users"
        },
        allowDelete: {
          type: "static",
          fieldType: "boolean",
          value: false,
          hide: true,
          tooltip: "Allow deleting rows"
        },
        multipleSelectable: {
          type: "static",
          fieldType: "boolean",
          value: false,
          tooltip: "Make multiple rows selectable at once"
        },
        rowMultiselectWithClick: {
          type: "static",
          fieldType: "boolean",
          value: true,
          tooltip: "If multiple selectable, allow multiselect with click"
        },
        selectFirstRowByDefault: {
          type: "static",
          fieldType: "boolean",
          value: true,
          tooltip: "Select the first row by default on start"
        },
        extraConfig: {
          type: "static",
          fieldType: "object",
          value: {},
          tooltip: "any configuration that can be passed to ag-grid top level"
        },
        hideInsert: {
          type: "static",
          fieldType: "boolean",
          value: false,
          tooltip: "Hide the insert button"
        },
        hideSearch: {
          type: "static",
          fieldType: "boolean",
          value: false,
          tooltip: "Hide the search bar"
        },
        wrapActions: {
          type: "static",
          fieldType: "boolean",
          value: false,
          tooltip: "When true, actions will wrap to the next line. Otherwise, the column will grow to fit the actions."
        },
        footer: {
          type: "static",
          fieldType: "boolean",
          value: true,
          tooltip: "Allow visible footer for pagination and download"
        },
        customActionsHeader: {
          type: "static",
          fieldType: "text",
          value: void 0,
          tooltip: "Custom header for the actions columns"
        }
      },
      componentInput: void 0
    }
  },
  alertcomponent: {
    name: "Alert",
    icon: Alert_triangle,
    documentationLink: `${documentationBaseUrl}/alert`,
    dims: "2:1-4:5",
    customCss: {
      container: { class: "", style: "" },
      background: { class: "", style: "" },
      icon: { class: "", style: "" },
      title: { class: "", style: "" },
      description: { class: "", style: "" }
    },
    initialData: {
      verticalAlignment: "center",
      componentInput: void 0,
      configuration: {
        type: {
          fieldType: "select",
          type: "static",
          selectOptions: [
            { value: "info", label: "Info" },
            { value: "success", label: "Success" },
            { value: "warning", label: "Warning" },
            { value: "error", label: "Error" }
          ],
          value: "info"
        },
        title: {
          type: "static",
          value: "Title",
          fieldType: "text"
        },
        description: {
          type: "static",
          value: "Description",
          fieldType: "text"
        },
        notRounded: {
          type: "static",
          value: false,
          fieldType: "boolean"
        },
        tooltip: {
          type: "static",
          value: "",
          fieldType: "text"
        },
        size: {
          type: "static",
          value: "sm",
          fieldType: "select",
          selectOptions: [
            { value: "xs", label: "Extra Small" },
            { value: "sm", label: "Small" }
          ]
        },
        collapsible: {
          type: "static",
          value: false,
          fieldType: "boolean"
        },
        initiallyCollapsed: {
          type: "static",
          value: false,
          fieldType: "boolean"
        }
      }
    }
  },
  navbarcomponent: {
    name: "Navbar",
    icon: App_window,
    documentationLink: `${documentationBaseUrl}/navbar`,
    dims: "12:1-12:2",
    customCss: {
      container: { class: "", style: "" },
      image: { class: "", style: "" }
    },
    initialData: {
      ...defaultAlignement,
      componentInput: void 0,
      configuration: {
        title: {
          type: "static",
          fieldType: "text",
          value: "Title"
        },
        borderColor: {
          type: "static",
          value: "#555",
          fieldType: "color"
        },
        logo: {
          type: "oneOf",
          selected: "no",
          labels: {
            yes: "Use logo",
            no: "No logo"
          },
          configuration: {
            yes: {
              source: {
                type: "static",
                value: "/logo.svg",
                fieldType: "text",
                fileUpload: {
                  accept: "image/*",
                  convertTo: "base64"
                }
              },
              sourceKind: {
                fieldType: "select",
                type: "static",
                selectOptions: selectOptions.imageSourceKind,
                value: "url"
              },
              altText: {
                type: "static",
                value: "",
                fieldType: "text",
                tooltip: "This text will appear if the image can't be loaded for any reason"
              }
            },
            no: {}
          }
        },
        orientation: {
          type: "static",
          fieldType: "select",
          value: "horizontal",
          selectOptions: [
            { value: "horizontal", label: "Horizontal" },
            { value: "vertical", label: "Vertical" }
          ]
        }
      }
    }
  },
  dateselectcomponent: {
    name: "Date Select",
    icon: Calendar,
    documentationLink: `${documentationBaseUrl}/date_select`,
    dims: "3:4-6:4",
    customCss: {
      container: { class: "", style: "" },
      input: { class: "", style: "" }
    },
    initialData: {
      componentInput: void 0,
      verticalAlignment: "center",
      configuration: {
        enableDay: {
          type: "static",
          value: true,
          fieldType: "boolean"
        },
        enableMonth: {
          type: "static",
          value: true,
          fieldType: "boolean"
        },
        enableYear: {
          type: "static",
          value: true,
          fieldType: "boolean"
        },
        defaultValue: {
          type: "static",
          value: void 0,
          fieldType: "date"
        },
        orientation: {
          type: "static",
          value: "horizontal",
          fieldType: "select",
          selectOptions: [
            { value: "horizontal", label: "Horizontal" },
            { value: "vertical", label: "Vertical" }
          ]
        },
        locale: {
          type: "static",
          value: "en-US",
          fieldType: "select",
          selectOptions: selectOptions.localeOptions,
          tooltip: "Format on the month names"
        }
      }
    }
  },
  jobiddisplaycomponent: {
    name: "Rich Result by Job Id",
    icon: Monitor,
    documentationLink: `${documentationBaseUrl}/rich_result_by_job_id`,
    dims: "2:8-6:8",
    customCss: {
      header: { class: "", style: "" },
      container: { class: "", style: "" }
    },
    initialData: {
      configuration: {
        jobId: {
          type: "static",
          fieldType: "text",
          value: "",
          tooltip: "Job id to display result from"
        },
        title: {
          type: "static",
          fieldType: "text",
          value: "Result"
        },
        hideDetails: {
          type: "static",
          fieldType: "boolean",
          value: false,
          tooltip: "Hide the details section: the object keys, the clipboard button and the maximise button"
        }
      }
    }
  },
  recomputeallcomponent: {
    name: "Recompute all",
    icon: Refresh_cw,
    documentationLink: `${documentationBaseUrl}/recompute_all`,
    dims: "4:1-6:1",
    customCss: {
      container: { style: "", class: "" }
    },
    initialData: {
      ...defaultAlignement,
      componentInput: void 0,
      configuration: {},
      menuItems: true
    }
  }
};
const presetComponents = {
  sidebartabscomponent: {
    name: "Sidebar Tabs",
    icon: Panel_left,
    targetComponent: "tabscomponent",
    configuration: {
      tabsKind: {
        value: "sidebar"
      }
    },
    type: "sidebartabscomponent"
  },
  invisibletabscomponent: {
    name: "Invisible Tabs",
    icon: Panel_top_inactive,
    targetComponent: "tabscomponent",
    configuration: {
      tabsKind: {
        value: "invisibleOnView"
      }
    },
    type: "invisibletabscomponent"
  },
  topbarcomponent: {
    name: "Top Bar",
    icon: Panel_top,
    targetComponent: "containercomponent",
    configuration: {},
    type: "topbarcomponent",
    dims: "6:2-12:2"
  }
};
const presets = presetComponents;
const ccomponents = components;
export {
  Form_input as F,
  Lock as L,
  Mouse_pointer_square as M,
  Network as N,
  Text_cursor_input as T,
  presets as a,
  components as b,
  ccomponents as c,
  Type as d,
  getRecommendedDimensionsByComponent as g,
  processDimension as p,
  selectOptions as s
};
