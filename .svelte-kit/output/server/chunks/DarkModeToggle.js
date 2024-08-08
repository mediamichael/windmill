import { c as create_ssr_component, v as validate_component, b as add_attribute } from "./ssr.js";
import { twMerge } from "tailwind-merge";
import { D as DarkModeObserver } from "./DarkModeObserver.js";
import { I as Icon } from "./Icon.js";
const Moon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "moon" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Sun = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "4" }],
    ["path", { "d": "M12 2v2" }],
    ["path", { "d": "M12 20v2" }],
    ["path", { "d": "m4.93 4.93 1.41 1.41" }],
    ["path", { "d": "m17.66 17.66 1.41 1.41" }],
    ["path", { "d": "M2 12h2" }],
    ["path", { "d": "M20 12h2" }],
    ["path", { "d": "m6.34 17.66-1.41 1.41" }],
    ["path", { "d": "m19.07 4.93-1.41 1.41" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "sun" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
function toggle() {
  if (!document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.add("dark");
    window.localStorage.setItem("dark-mode", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    window.localStorage.setItem("dark-mode", "light");
  }
}
const DarkModeToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { darkMode = document.documentElement.classList.contains("dark") } = $$props;
  let { forcedDarkMode = true } = $$props;
  if ($$props.darkMode === void 0 && $$bindings.darkMode && darkMode !== void 0) $$bindings.darkMode(darkMode);
  if ($$props.forcedDarkMode === void 0 && $$bindings.forcedDarkMode && forcedDarkMode !== void 0) $$bindings.forcedDarkMode(forcedDarkMode);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0) $$bindings.toggle(toggle);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<button${add_attribute(
      "class",
      twMerge("text-2xs text-white m-1 p-2 rounded-lg flex flex-row gap-2 justify-center hover:bg-gray-600", forcedDarkMode ? "text-white hover:bg-gray-600" : "text-primary hover:bg-surface-hover"),
      0
    )}>${darkMode ? `${validate_component(Sun, "Sun").$$render($$result, { class: "w-4 h-4" }, {}, {})}` : `${validate_component(Moon, "Moon").$$render($$result, { class: "w-4 h-4" }, {}, {})}`}</button> ${validate_component(DarkModeObserver, "DarkModeObserver").$$render(
      $$result,
      { darkMode },
      {
        darkMode: ($$value) => {
          darkMode = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  DarkModeToggle as D,
  Moon as M,
  Sun as S
};
