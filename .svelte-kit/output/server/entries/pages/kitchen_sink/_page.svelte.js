import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { B as Button } from "../../../chunks/toast.js";
import { T as Tabs, a as Tab } from "../../../chunks/Tabs.js";
import { T as TabContent } from "../../../chunks/TabContent.js";
import { D as DarkModeToggle } from "../../../chunks/DarkModeToggle.js";
import { G as Globe } from "../../../chunks/globe.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tab = "button";
  let dropdownItems = [
    {
      label: "Lorem ipsum",
      onClick: () => {
      }
    }
  ];
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(DarkModeToggle, "DarkModeToggle").$$render($$result, { forcedDarkMode: false }, {}, {})} ${validate_component(Tabs, "Tabs").$$render(
      $$result,
      { selected: tab },
      {
        selected: ($$value) => {
          tab = $$value;
          $$settled = false;
        }
      },
      {
        content: () => {
          return `${validate_component(TabContent, "TabContent").$$render(
            $$result,
            {
              value: "button",
              class: "p-4 flex gap-4 flex-col "
            },
            {},
            {
              default: () => {
                return `<div class="font-bold text-md" data-svelte-h="svelte-1aazauf">Contained buttons</div> <div class="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6">${validate_component(Button, "Button").$$render($$result, {}, {}, {
                  default: () => {
                    return `Lorem`;
                  }
                })} ${validate_component(Button, "Button").$$render($$result, { disabled: true }, {}, {
                  default: () => {
                    return `Lorem`;
                  }
                })} ${validate_component(Button, "Button").$$render($$result, { color: "dark", loading: true }, {}, {
                  default: () => {
                    return `Lorem`;
                  }
                })} ${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    color: "gray",
                    startIcon: { icon: Globe }
                  },
                  {},
                  {
                    default: () => {
                      return `Lorem`;
                    }
                  }
                )} ${validate_component(Button, "Button").$$render($$result, { color: "green" }, {}, {
                  default: () => {
                    return `Lorem`;
                  }
                })} ${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
                  default: () => {
                    return `Lorem`;
                  }
                })} ${validate_component(Button, "Button").$$render($$result, { color: "none" }, {}, {
                  default: () => {
                    return `Lorem`;
                  }
                })} ${validate_component(Button, "Button").$$render($$result, { color: "red" }, {}, {
                  default: () => {
                    return `Lorem`;
                  }
                })}</div> <div class="font-bold text-md" data-svelte-h="svelte-a0ob90">Border buttons</div> <div class="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6">${validate_component(Button, "Button").$$render($$result, { variant: "border" }, {}, {
                  default: () => {
                    return `Lorem`;
                  }
                })} ${validate_component(Button, "Button").$$render($$result, { variant: "border", color: "dark" }, {}, {
                  default: () => {
                    return `Lorem`;
                  }
                })} ${validate_component(Button, "Button").$$render($$result, { variant: "border", color: "gray" }, {}, {
                  default: () => {
                    return `Lorem`;
                  }
                })} ${validate_component(Button, "Button").$$render($$result, { variant: "border", color: "green" }, {}, {
                  default: () => {
                    return `Lorem`;
                  }
                })} ${validate_component(Button, "Button").$$render($$result, { variant: "border", color: "light" }, {}, {
                  default: () => {
                    return `Lorem`;
                  }
                })} ${validate_component(Button, "Button").$$render($$result, { variant: "border", color: "none" }, {}, {
                  default: () => {
                    return `Lorem`;
                  }
                })} ${validate_component(Button, "Button").$$render($$result, { variant: "border", color: "red" }, {}, {
                  default: () => {
                    return `Lorem`;
                  }
                })}</div> <div class="font-bold text-md" data-svelte-h="svelte-1xt3gc9">Dropdown buttons</div> <div class="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6">${validate_component(Button, "Button").$$render($$result, { dropdownItems }, {}, {
                  default: () => {
                    return `Lorem`;
                  }
                })} ${validate_component(Button, "Button").$$render($$result, { dropdownItems, color: "dark" }, {}, {
                  default: () => {
                    return `Lorem`;
                  }
                })} ${validate_component(Button, "Button").$$render($$result, { dropdownItems, color: "gray" }, {}, {
                  default: () => {
                    return `Lorem`;
                  }
                })} ${validate_component(Button, "Button").$$render($$result, { dropdownItems, color: "green" }, {}, {
                  default: () => {
                    return `Lorem`;
                  }
                })} ${validate_component(Button, "Button").$$render($$result, { dropdownItems, color: "light" }, {}, {
                  default: () => {
                    return `Lorem`;
                  }
                })} ${validate_component(Button, "Button").$$render($$result, { dropdownItems, color: "none" }, {}, {
                  default: () => {
                    return `Lorem`;
                  }
                })} ${validate_component(Button, "Button").$$render($$result, { dropdownItems, color: "red" }, {}, {
                  default: () => {
                    return `Lorem`;
                  }
                })}</div> <div class="font-bold text-md" data-svelte-h="svelte-1xt3gc9">Dropdown buttons</div> <div class="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6">${validate_component(Button, "Button").$$render($$result, { variant: "border", dropdownItems }, {}, {
                  default: () => {
                    return `Lorem`;
                  }
                })} ${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    variant: "border",
                    dropdownItems,
                    color: "dark"
                  },
                  {},
                  {
                    default: () => {
                      return `Lorem`;
                    }
                  }
                )} ${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    variant: "border",
                    dropdownItems,
                    color: "gray"
                  },
                  {},
                  {
                    default: () => {
                      return `Lorem`;
                    }
                  }
                )} ${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    variant: "border",
                    dropdownItems,
                    color: "green"
                  },
                  {},
                  {
                    default: () => {
                      return `Lorem`;
                    }
                  }
                )} ${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    variant: "border",
                    dropdownItems,
                    color: "light"
                  },
                  {},
                  {
                    default: () => {
                      return `Lorem`;
                    }
                  }
                )} ${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    variant: "border",
                    dropdownItems,
                    color: "none"
                  },
                  {},
                  {
                    default: () => {
                      return `Lorem`;
                    }
                  }
                )} ${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    variant: "border",
                    dropdownItems,
                    color: "red"
                  },
                  {},
                  {
                    default: () => {
                      return `Lorem`;
                    }
                  }
                )}</div>`;
              }
            }
          )} `;
        },
        default: () => {
          return `${validate_component(Tab, "Tab").$$render($$result, { value: "button" }, {}, {
            default: () => {
              return `Buttons`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
