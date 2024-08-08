import { c as create_ssr_component, v as validate_component, s as subscribe, a as set_store_value, f as each, b as add_attribute, e as escape } from "./ssr.js";
import { I as Icon } from "./Icon.js";
import "./index2.js";
import YAML from "yaml";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import { M as Menu } from "./common.js";
import "minimatch";
/* empty css                                     */
import { T as Tabs, a as Tab } from "./Tabs.js";
import { T as TabContent } from "./TabContent.js";
import { S as SplitPanesWrapper } from "./SplitPanesWrapper.js";
import { S as Splitpanes, P as Pane } from "./Pane.js";
import { B as Button, f as defaultIfEmptyString, b as emptyString, H as truncateHash, a0 as computeSharableHash, J as MenuButton, P as Portal, T as TransitionRoot, K as MenuItems, g as classNames, N as generateRandomString } from "./toast.js";
import { H as HighlightTheme, a as Highlight, j as json } from "./SchemaViewer.js";
import { C as Clipboard } from "./clipboard.js";
import { y as yaml } from "./yaml.js";
import { B as Badge } from "./Badge.js";
import { P as Popup } from "./Popup.js";
import { S as SchemaForm } from "./SchemaForm.js";
import { S as SharedBadge } from "./SharedBadge.js";
import { T as TimeAgo, t as typescript } from "./FlowGraphViewerStep.js";
import { autoPlacement } from "@floating-ui/core";
import { L as Label } from "./Label.js";
import { C as CloseButton } from "./CloseButton.js";
import { T as Toggle } from "./Toggle.js";
import { T as Tooltip } from "./Tooltip.js";
import { p as workerTags, u as userStore, w as workspaceStore } from "./stores2.js";
import { b as WorkerService, g as SettingService, S as ScheduleService } from "./services.gen.js";
import { D as DateTimeInput } from "./DateTimeInput.js";
import { p as page } from "./stores.js";
import { r as replaceState } from "./client.js";
import { C as Corner_down_left } from "./ConfirmationModal.js";
import { C as Calendar } from "./calendar.js";
import { twMerge } from "tailwind-merge";
import { M as MenuItem } from "./MenuItem.js";
import { M as More_vertical } from "./DropdownV2.js";
import { E as ErrorHandlerToggleButton } from "./ErrorHandlerToggleButton.js";
import register from "highlight.js/lib/languages/bash";
import { A as Alert } from "./Alert.js";
import { T as ToggleButtonGroup, a as ToggleButton } from "./ToggleButtonGroup.js";
import { a as DEFAULT_WEBHOOK_TYPE } from "./consts.js";
import { U as UserSettings } from "./UserSettings.js";
import { S as ScheduleEditor } from "./ScheduleEditor.js";
import { S as Skeleton } from "./Skeleton.js";
import { b as base } from "./base.js";
import { J as JobArgs } from "./JobArgs.js";
import { L as List_ordered } from "./list-ordered.js";
import { P as Pen_square } from "./pen-square.js";
const Arrow_down_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m7 7 10 10" }], ["path", { "d": "M17 7v10H7" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "arrow-down-right" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Arrow_up_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M7 7h10v10" }], ["path", { "d": "M7 17 17 7" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "arrow-up-right" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Calendar_check_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"
      }
    ],
    [
      "line",
      {
        "x1": "16",
        "x2": "16",
        "y1": "2",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "8",
        "x2": "8",
        "y1": "2",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "3",
        "x2": "21",
        "y1": "10",
        "y2": "10"
      }
    ],
    ["path", { "d": "m16 20 2 2 4-4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "calendar-check-2" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Server = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "20",
        "height": "8",
        "x": "2",
        "y": "2",
        "rx": "2",
        "ry": "2"
      }
    ],
    [
      "rect",
      {
        "width": "20",
        "height": "8",
        "x": "2",
        "y": "14",
        "rx": "2",
        "ry": "2"
      }
    ],
    [
      "line",
      {
        "x1": "6",
        "x2": "6.01",
        "y1": "6",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "6",
        "x2": "6.01",
        "y1": "18",
        "y2": "18"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "server" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Terminal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["polyline", { "points": "4 17 10 11 4 5" }],
    [
      "line",
      {
        "x1": "12",
        "x2": "20",
        "y1": "19",
        "y2": "19"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "terminal" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Webhook = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"
      }
    ],
    [
      "path",
      {
        "d": "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"
      }
    ],
    [
      "path",
      {
        "d": "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "webhook" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const bash = { name: "bash", register };
const DetailPageDetailPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { triggerSelected = "webhooks" } = $$props;
  let { flow_json = void 0 } = $$props;
  let { hasStepDetails = false } = $$props;
  let { isOperator = false } = $$props;
  let { selected } = $$props;
  let rawType = "yaml";
  if ($$props.triggerSelected === void 0 && $$bindings.triggerSelected && triggerSelected !== void 0) $$bindings.triggerSelected(triggerSelected);
  if ($$props.flow_json === void 0 && $$bindings.flow_json && flow_json !== void 0) $$bindings.flow_json(flow_json);
  if ($$props.hasStepDetails === void 0 && $$bindings.hasStepDetails && hasStepDetails !== void 0) $$bindings.hasStepDetails(hasStepDetails);
  if ($$props.isOperator === void 0 && $$bindings.isOperator && isOperator !== void 0) $$bindings.isOperator(isOperator);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0) $$bindings.selected(selected);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (hasStepDetails) {
        selected = "flow_step";
      }
    }
    !hasStepDetails && selected === "flow_step" && (selected = "saved_inputs");
    $$rendered = `${validate_component(HighlightTheme, "HighlightTheme").$$render($$result, {}, {}, {})} ${validate_component(Splitpanes, "Splitpanes").$$render($$result, { horizontal: true, class: "h-full" }, {}, {
      default: () => {
        return `${validate_component(Pane, "Pane").$$render($$result, { size: 100 }, {}, {
          default: () => {
            return `${validate_component(Tabs, "Tabs").$$render(
              $$result,
              { selected },
              {
                selected: ($$value) => {
                  selected = $$value;
                  $$settled = false;
                }
              },
              {
                content: () => {
                  return `<div class="overflow-hidden" style="height:calc(100% - 32px);">${validate_component(TabContent, "TabContent").$$render(
                    $$result,
                    {
                      value: "saved_inputs",
                      class: "flex flex-col flex-1 h-full"
                    },
                    {},
                    {
                      default: () => {
                        return `${slots.save_inputs ? slots.save_inputs({}) : ``}`;
                      }
                    }
                  )} ${validate_component(TabContent, "TabContent").$$render(
                    $$result,
                    {
                      value: "details",
                      class: "flex flex-col flex-1 h-full"
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(Splitpanes, "Splitpanes").$$render($$result, { horizontal: true, class: "h-full" }, {}, {
                          default: () => {
                            return `${validate_component(Pane, "Pane").$$render($$result, { size: 50, minSize: 20 }, {}, {
                              default: () => {
                                return `${slots.details ? slots.details({}) : ``}`;
                              }
                            })} ${validate_component(Pane, "Pane").$$render($$result, { size: 50, minSize: 20 }, {}, {
                              default: () => {
                                return `${validate_component(Tabs, "Tabs").$$render(
                                  $$result,
                                  { selected: triggerSelected },
                                  {
                                    selected: ($$value) => {
                                      triggerSelected = $$value;
                                      $$settled = false;
                                    }
                                  },
                                  {
                                    default: () => {
                                      return `${validate_component(Tab, "Tab").$$render($$result, { value: "webhooks" }, {}, {
                                        default: () => {
                                          return `<span class="flex flex-row gap-2 items-center">${validate_component(Webhook, "Webhook").$$render($$result, { size: 14 }, {}, {})}
											Webhooks</span>`;
                                        }
                                      })} ${validate_component(Tab, "Tab").$$render($$result, { value: "schedule" }, {}, {
                                        default: () => {
                                          return `<span class="flex flex-row gap-2 items-center">${validate_component(Calendar_check_2, "CalendarCheck2").$$render($$result, { size: 14 }, {}, {})}
											Schedules</span>`;
                                        }
                                      })} ${validate_component(Tab, "Tab").$$render($$result, { value: "cli" }, {}, {
                                        default: () => {
                                          return `<span class="flex flex-row gap-2 items-center">${validate_component(Terminal, "Terminal").$$render($$result, { size: 14 }, {}, {})}
											CLI</span>`;
                                        }
                                      })}`;
                                    }
                                  }
                                )} <div class="h-[calc(100%-32px)]"><div class="h-full overflow-auto">${triggerSelected === "webhooks" ? `${slots.webhooks ? slots.webhooks({}) : ``}` : `${triggerSelected === "schedule" ? `${slots.schedule ? slots.schedule({}) : ``}` : `${triggerSelected === "cli" ? `${slots.cli ? slots.cli({}) : ``}` : ``}`}`}</div></div>`;
                              }
                            })}`;
                          }
                        })}`;
                      }
                    }
                  )} ${validate_component(TabContent, "TabContent").$$render(
                    $$result,
                    {
                      value: "raw",
                      class: "flex flex-col flex-1 h-full overflow-auto"
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(Tabs, "Tabs").$$render(
                          $$result,
                          { wrapperClass: "mt-4", selected: rawType },
                          {
                            selected: ($$value) => {
                              rawType = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            content: () => {
                              return `<div class="relative pt-2">${validate_component(Button, "Button").$$render(
                                $$result,
                                {
                                  color: "light",
                                  variant: "border",
                                  size: "xs",
                                  startIcon: { icon: Clipboard },
                                  btnClasses: "absolute top-2 right-2 w-min"
                                },
                                {},
                                {
                                  default: () => {
                                    return `Copy content`;
                                  }
                                }
                              )} ${validate_component(Highlight, "Highlight").$$render(
                                $$result,
                                {
                                  class: "overflow-auto px-1",
                                  language: rawType === "yaml" ? yaml : json,
                                  code: rawType === "yaml" ? YAML.stringify(flow_json) : JSON.stringify(flow_json, null, 4)
                                },
                                {},
                                {}
                              )}</div> `;
                            },
                            default: () => {
                              return `${validate_component(Tab, "Tab").$$render($$result, { value: "yaml" }, {}, {
                                default: () => {
                                  return `YAML`;
                                }
                              })} ${validate_component(Tab, "Tab").$$render($$result, { value: "json" }, {}, {
                                default: () => {
                                  return `JSON`;
                                }
                              })}`;
                            }
                          }
                        )}`;
                      }
                    }
                  )} ${validate_component(TabContent, "TabContent").$$render(
                    $$result,
                    {
                      value: "flow_step",
                      class: "flex flex-col flex-1 h-full"
                    },
                    {},
                    {
                      default: () => {
                        return `${slots.flow_step ? slots.flow_step({}) : ``}`;
                      }
                    }
                  )}</div> `;
                },
                default: () => {
                  return `${validate_component(Tab, "Tab").$$render($$result, { value: "saved_inputs" }, {}, {
                    default: () => {
                      return `Saved inputs`;
                    }
                  })} ${!isOperator ? `${validate_component(Tab, "Tab").$$render($$result, { value: "details" }, {}, {
                    default: () => {
                      return `Details &amp; Triggers`;
                    }
                  })}` : ``} ${flow_json ? `${validate_component(Tab, "Tab").$$render($$result, { value: "raw" }, {}, {
                    default: () => {
                      return `Raw`;
                    }
                  })}` : ``} ${hasStepDetails ? `${validate_component(Tab, "Tab").$$render($$result, { value: "flow_step" }, {}, {
                    default: () => {
                      return `Step`;
                    }
                  })}` : ``}`;
                }
              }
            )}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const DetailPageLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isOperator = false } = $$props;
  let { flow_json = void 0 } = $$props;
  let { hasStepDetails = false } = $$props;
  let { selected } = $$props;
  let { triggerSelected = "webhooks" } = $$props;
  let mobileTab = "form";
  let clientWidth = window.innerWidth;
  if ($$props.isOperator === void 0 && $$bindings.isOperator && isOperator !== void 0) $$bindings.isOperator(isOperator);
  if ($$props.flow_json === void 0 && $$bindings.flow_json && flow_json !== void 0) $$bindings.flow_json(flow_json);
  if ($$props.hasStepDetails === void 0 && $$bindings.hasStepDetails && hasStepDetails !== void 0) $$bindings.hasStepDetails(hasStepDetails);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0) $$bindings.selected(selected);
  if ($$props.triggerSelected === void 0 && $$bindings.triggerSelected && triggerSelected !== void 0) $$bindings.triggerSelected(triggerSelected);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<main class="h-screen w-full">${clientWidth >= 768 ? `<div class="h-full w-full">${slots.header ? slots.header({}) : ``} ${validate_component(SplitPanesWrapper, "SplitPanesWrapper").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Splitpanes, "Splitpanes").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Pane, "Pane").$$render($$result, { size: 65, minSize: 50 }, {}, {
              default: () => {
                return `${slots.form ? slots.form({}) : ``}`;
              }
            })} ${validate_component(Pane, "Pane").$$render($$result, { size: 35, minSize: 15 }, {}, {
              default: () => {
                return `${validate_component(DetailPageDetailPanel, "DetailPageDetailPanel").$$render(
                  $$result,
                  {
                    isOperator,
                    flow_json,
                    hasStepDetails,
                    triggerSelected,
                    selected
                  },
                  {
                    triggerSelected: ($$value) => {
                      triggerSelected = $$value;
                      $$settled = false;
                    },
                    selected: ($$value) => {
                      selected = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    flow_step: () => {
                      return `${slots.flow_step ? slots.flow_step({ slot: "flow_step" }) : ``}`;
                    },
                    save_inputs: () => {
                      return `${slots.save_inputs ? slots.save_inputs({ slot: "save_inputs" }) : ``}`;
                    },
                    details: () => {
                      return `${slots.details ? slots.details({ slot: "details" }) : ``}`;
                    },
                    cli: () => {
                      return `${slots.cli ? slots.cli({ slot: "cli" }) : ``}`;
                    },
                    schedule: () => {
                      return `${slots.schedule ? slots.schedule({ slot: "schedule" }) : ``}`;
                    },
                    webhooks: () => {
                      return `${slots.webhooks ? slots.webhooks({ slot: "webhooks" }) : ``}`;
                    }
                  }
                )}`;
              }
            })}`;
          }
        })}`;
      }
    })}</div>` : `<div class="h-full">${slots.header ? slots.header({}) : ``} ${validate_component(Tabs, "Tabs").$$render(
      $$result,
      { selected: mobileTab },
      {
        selected: ($$value) => {
          mobileTab = $$value;
          $$settled = false;
        }
      },
      {
        content: () => {
          return `${validate_component(TabContent, "TabContent").$$render(
            $$result,
            {
              value: "form",
              class: "flex flex-col flex-1 h-full"
            },
            {},
            {
              default: () => {
                return `${slots.form ? slots.form({}) : ``}`;
              }
            }
          )} ${validate_component(TabContent, "TabContent").$$render(
            $$result,
            {
              value: "detail",
              class: "flex flex-col flex-1 h-full"
            },
            {},
            {
              default: () => {
                return `${validate_component(DetailPageDetailPanel, "DetailPageDetailPanel").$$render(
                  $$result,
                  {
                    isOperator,
                    hasStepDetails,
                    triggerSelected,
                    selected
                  },
                  {
                    triggerSelected: ($$value) => {
                      triggerSelected = $$value;
                      $$settled = false;
                    },
                    selected: ($$value) => {
                      selected = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    flow_step: () => {
                      return `${slots.flow_step ? slots.flow_step({ slot: "flow_step" }) : ``}`;
                    },
                    save_inputs: () => {
                      return `${slots.save_inputs ? slots.save_inputs({ slot: "save_inputs" }) : ``}`;
                    },
                    details: () => {
                      return `${slots.details ? slots.details({ slot: "details" }) : ``}`;
                    },
                    cli: () => {
                      return `${slots.cli ? slots.cli({ slot: "cli" }) : ``}`;
                    },
                    schedule: () => {
                      return `${slots.schedule ? slots.schedule({ slot: "schedule" }) : ``}`;
                    },
                    webhooks: () => {
                      return `${slots.webhooks ? slots.webhooks({ slot: "webhooks" }) : ``}`;
                    }
                  }
                )}`;
              }
            }
          )} `;
        },
        default: () => {
          return `${validate_component(Tab, "Tab").$$render($$result, { value: "form" }, {}, {
            default: () => {
              return `Run form`;
            }
          })} ${validate_component(Tab, "Tab").$$render($$result, { value: "detail" }, {}, {
            default: () => {
              return `Details`;
            }
          })}`;
        }
      }
    )}</div>`}</main>`;
  } while (!$$settled);
  return $$rendered;
});
const RunFormAdvancedPopup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workerTags, $$unsubscribe_workerTags;
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_workerTags = subscribe(workerTags, (value) => $workerTags = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let { runnable } = $$props;
  let { scheduledForStr } = $$props;
  let { invisible_to_owner } = $$props;
  let { overrideTag } = $$props;
  loadWorkerGroups();
  async function loadWorkerGroups() {
    if (!$workerTags) {
      set_store_value(workerTags, $workerTags = await WorkerService.getCustomTags(), $workerTags);
    }
  }
  if ($$props.runnable === void 0 && $$bindings.runnable && runnable !== void 0) $$bindings.runnable(runnable);
  if ($$props.scheduledForStr === void 0 && $$bindings.scheduledForStr && scheduledForStr !== void 0) $$bindings.scheduledForStr(scheduledForStr);
  if ($$props.invisible_to_owner === void 0 && $$bindings.invisible_to_owner && invisible_to_owner !== void 0) $$bindings.invisible_to_owner(invisible_to_owner);
  if ($$props.overrideTag === void 0 && $$bindings.overrideTag && overrideTag !== void 0) $$bindings.overrideTag(overrideTag);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="flex flex-col gap-4 p-2"><div class="flex flex-col gap-2">${`<div class="">${validate_component(Label, "Label").$$render($$result, { label: "Schedule to run later" }, {}, {
      action: () => {
        return `${validate_component(CloseButton, "CloseButton").$$render($$result, { noBg: true }, {}, {})}`;
      }
    })} <div class="flex flex-row items-center my-1"><div><label for="run-time"></label> ${validate_component(DateTimeInput, "DateTimeInput").$$render($$result, { value: scheduledForStr }, {}, {})}</div> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "border",
        color: "light",
        size: "xs",
        btnClasses: "mx-2 "
      },
      {},
      {
        default: () => {
          return `Clear`;
        }
      }
    )}</div></div>`}</div> ${!$userStore?.operator ? `${$workerTags && $workerTags?.length > 0 ? `<div class="w-full"><select placeholder="Worker group">${overrideTag ? `<option value="" data-svelte-h="svelte-1vcxyd9">reset to default</option>` : `<option value="" disabled selected data-svelte-h="svelte-77lhp0">Override Worker Group Tag</option>`}${each($workerTags ?? [], (tag) => {
      return `<option${add_attribute("value", tag, 0)}>${escape(tag)}</option>`;
    })}</select></div>` : ``}` : ``} ${runnable?.path?.startsWith(`u/${$userStore?.username}`) != true && (runnable?.path?.split("/")?.length ?? 0) > 2 ? `<div class="flex items-center gap-1">${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        options: { right: `make run invisible to others` },
        checked: invisible_to_owner
      },
      {
        checked: ($$value) => {
          invisible_to_owner = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
      default: () => {
        return `By default, runs are visible to the owner(s) of the script or flow being triggered`;
      }
    })}</div>` : ``}</div>`;
  } while (!$$settled);
  $$unsubscribe_workerTags();
  $$unsubscribe_userStore();
  return $$rendered;
});
let blockPopupOpen = false;
const RunForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { runnable } = $$props;
  let { runAction } = $$props;
  let { buttonText = "Run" } = $$props;
  let { schedulable = true } = $$props;
  let { detailed = true } = $$props;
  let { autofocus = false } = $$props;
  let { topButton = false } = $$props;
  let { loading = false } = $$props;
  let { noVariablePicker = false } = $$props;
  let { viewKeybinding = false } = $$props;
  let { scheduledForStr } = $$props;
  let { invisible_to_owner } = $$props;
  let { overrideTag } = $$props;
  let { args = {} } = $$props;
  async function setArgs(nargs) {
    args = nargs;
  }
  function run() {
    runAction(scheduledForStr, args, invisible_to_owner, overrideTag);
  }
  let { isValid = true } = $$props;
  let debounced = void 0;
  function onArgsChange(args2) {
    try {
      debounced && clearTimeout(debounced);
      debounced = setTimeout(
        () => {
          const nurl = new URL(window.location.href);
          nurl.hash = computeSharableHash(args2);
          try {
            replaceState(nurl.toString(), $page.state);
          } catch (e) {
            console.error(e);
          }
        },
        200
      );
    } catch (e) {
      console.error("Impossible to set hash in args", e);
    }
  }
  if ($$props.runnable === void 0 && $$bindings.runnable && runnable !== void 0) $$bindings.runnable(runnable);
  if ($$props.runAction === void 0 && $$bindings.runAction && runAction !== void 0) $$bindings.runAction(runAction);
  if ($$props.buttonText === void 0 && $$bindings.buttonText && buttonText !== void 0) $$bindings.buttonText(buttonText);
  if ($$props.schedulable === void 0 && $$bindings.schedulable && schedulable !== void 0) $$bindings.schedulable(schedulable);
  if ($$props.detailed === void 0 && $$bindings.detailed && detailed !== void 0) $$bindings.detailed(detailed);
  if ($$props.autofocus === void 0 && $$bindings.autofocus && autofocus !== void 0) $$bindings.autofocus(autofocus);
  if ($$props.topButton === void 0 && $$bindings.topButton && topButton !== void 0) $$bindings.topButton(topButton);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
  if ($$props.noVariablePicker === void 0 && $$bindings.noVariablePicker && noVariablePicker !== void 0) $$bindings.noVariablePicker(noVariablePicker);
  if ($$props.viewKeybinding === void 0 && $$bindings.viewKeybinding && viewKeybinding !== void 0) $$bindings.viewKeybinding(viewKeybinding);
  if ($$props.scheduledForStr === void 0 && $$bindings.scheduledForStr && scheduledForStr !== void 0) $$bindings.scheduledForStr(scheduledForStr);
  if ($$props.invisible_to_owner === void 0 && $$bindings.invisible_to_owner && invisible_to_owner !== void 0) $$bindings.invisible_to_owner(invisible_to_owner);
  if ($$props.overrideTag === void 0 && $$bindings.overrideTag && overrideTag !== void 0) $$bindings.overrideTag(overrideTag);
  if ($$props.args === void 0 && $$bindings.args && args !== void 0) $$bindings.args(args);
  if ($$props.setArgs === void 0 && $$bindings.setArgs && setArgs !== void 0) $$bindings.setArgs(setArgs);
  if ($$props.run === void 0 && $$bindings.run && run !== void 0) $$bindings.run(run);
  if ($$props.isValid === void 0 && $$bindings.isValid && isValid !== void 0) $$bindings.isValid(isValid);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      onArgsChange(args);
    }
    $$rendered = `<div class="max-w-3xl">${detailed ? `${runnable ? `<div class="flex flex-row flex-wrap justify-between gap-4"><div><div class="flex flex-col mb-2"><h1 class="break-words py-2 mr-2">${escape(defaultIfEmptyString(runnable.summary, runnable.path ?? ""))}</h1> ${!emptyString(runnable.summary) ? `<h2 class="font-bold pb-4">${escape(runnable.path)}</h2>` : ``} <div class="flex items-center gap-2"><span class="text-sm text-tertiary">${runnable ? `Edited ${validate_component(TimeAgo, "TimeAgo").$$render(
      $$result,
      {
        withDate: true,
        agoOnlyIfRecent: true,
        date: runnable.created_at || ""
      },
      {},
      {}
    )} by ${escape(runnable.created_by || "unknown")}` : ``}</span> ${validate_component(Badge, "Badge").$$render($$result, { color: "dark-gray" }, {}, {
      default: () => {
        return `${escape(truncateHash(runnable?.hash ?? ""))}`;
      }
    })} ${runnable?.is_template ? `${validate_component(Badge, "Badge").$$render($$result, { color: "blue" }, {}, {
      default: () => {
        return `Template`;
      }
    })}` : ``} ${runnable && runnable.kind !== "runnable" ? `${validate_component(Badge, "Badge").$$render($$result, { color: "blue" }, {}, {
      default: () => {
        return `${escape(runnable?.kind)}`;
      }
    })}` : ``} ${validate_component(SharedBadge, "SharedBadge").$$render(
      $$result,
      {
        canWrite: runnable.can_write ?? true,
        extraPerms: runnable?.extra_perms ?? {}
      },
      {},
      {}
    )}</div></div></div></div>` : `<h1 data-svelte-h="svelte-urq4jq">Loading...</h1>`}` : ``} ${topButton ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        btnClasses: "!px-6 !py-1 w-full",
        disabled: !isValid
      },
      {},
      {
        default: () => {
          return `${escape(buttonText)}`;
        }
      }
    )}` : ``} ${runnable?.schema ? `<div class="my-2"></div> ${!runnable.schema.properties || Object.keys(runnable.schema.properties).length === 0 ? `<div class="text-sm py-4 italic" data-svelte-h="svelte-f9pol0">No arguments</div>` : `${validate_component(SchemaForm, "SchemaForm").$$render(
      $$result,
      {
        helperScript: runnable.hash ? { type: "hash", hash: runnable.hash } : void 0,
        prettifyHeader: true,
        noVariablePicker,
        autofocus,
        schema: runnable.schema,
        isValid,
        args
      },
      {
        isValid: ($$value) => {
          isValid = $$value;
          $$settled = false;
        },
        args: ($$value) => {
          args = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}` : `<div class="text-xs text-tertiary" data-svelte-h="svelte-vhldzx">No arguments</div>`} ${schedulable ? `<div class="mt-10"></div> <div class="flex gap-2 items-start flex-wrap justify-between mt-2 md:mt-6 mb-6"><div class="flex-row-reverse flex-wrap flex w-full gap-4">${validate_component(Button, "Button").$$render(
      $$result,
      {
        loading,
        color: "dark",
        btnClasses: "!px-6 !py-1 !h-8 inline-flex gap-2",
        disabled: !isValid,
        shortCut: {
          Icon: Corner_down_left,
          hide: !viewKeybinding
        }
      },
      {},
      {
        default: () => {
          return `${escape(scheduledForStr ? "Schedule to run later" : buttonText)}`;
        }
      }
    )} <div>${validate_component(Popup, "Popup").$$render(
      $$result,
      {
        floatingConfig: {
          middleware: [
            autoPlacement({
              allowedPlacements: [
                "bottom-start",
                "bottom-end",
                "top-start",
                "top-end",
                "top",
                "bottom"
              ]
            })
          ]
        },
        blockOpen: blockPopupOpen
      },
      {},
      {
        button: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              nonCaptureEvent: true,
              startIcon: { icon: Calendar },
              size: "xs",
              color: "light"
            },
            {},
            {
              default: () => {
                return `Advanced`;
              }
            }
          )} `;
        },
        default: ({ close }) => {
          return `${validate_component(RunFormAdvancedPopup, "RunFormAdvancedPopup").$$render(
            $$result,
            {
              scheduledForStr,
              invisible_to_owner,
              overrideTag,
              runnable
            },
            {
              scheduledForStr: ($$value) => {
                scheduledForStr = $$value;
                $$settled = false;
              },
              invisible_to_owner: ($$value) => {
                invisible_to_owner = $$value;
                $$settled = false;
              },
              overrideTag: ($$value) => {
                overrideTag = $$value;
                $$settled = false;
              },
              runnable: ($$value) => {
                runnable = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}</div></div> ${overrideTag ? `<div class="flex-row-reverse flex w-full text-primary text-sm">tag override: ${escape(overrideTag)}</div>` : ``} ${invisible_to_owner ? `<div class="flex-row-reverse flex w-full text-primary text-sm" data-svelte-h="svelte-12xv5le">Job will be invisible to owner</div>` : ``}</div>` : `${!topButton ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        btnClasses: "!px-6 !py-1 w-full",
        disabled: !isValid,
        shortCut: {
          Icon: Corner_down_left,
          hide: !viewKeybinding
        }
      },
      {},
      {
        default: () => {
          return `${escape(buttonText)}`;
        }
      }
    )}` : ``}`}</div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
const Menu_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Menu, "Menu").$$render(
    $$result,
    {
      as: "div",
      class: "relative hover:z-50 flex w-full h-full"
    },
    {},
    {
      default: ({ open }) => {
        return `<span>${validate_component(MenuButton, "MenuButton").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Button, "Button").$$render(
              $$result,
              {
                nonCaptureEvent: true,
                color: "light",
                size: "xs",
                startIcon: { icon: More_vertical },
                iconOnly: true
              },
              {},
              {}
            )}`;
          }
        })}</span> ${validate_component(Portal, "Portal").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="z-[2000]">${validate_component(TransitionRoot, "Transition").$$render(
              $$result,
              {
                show: open,
                enter: "transition ease-out duration-[25ms]",
                enterFrom: "transform opacity-0 scale-95",
                enterTo: "transform opacity-100 scale-100",
                leave: "transition ease-in duration-[25ms]",
                leaveFrom: "transform opacity-100 scale-100",
                leaveTo: "transform opacity-0 scale-95"
              },
              {},
              {
                default: () => {
                  return `${validate_component(MenuItems, "MenuItems").$$render(
                    $$result,
                    {
                      class: "absolute border right-0 z-50 w-56 origin-top-right top-1 rounded-md bg-surface shadow-md focus:outline-none cursor-pointer"
                    },
                    {},
                    {
                      default: () => {
                        return `<div class="my-1">${slots.items ? slots.items({}) : ``}</div>`;
                      }
                    }
                  )}`;
                }
              }
            )}</div>`;
          }
        })}`;
      }
    }
  )}`;
});
const DetailPageHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let { mainButtons = [] } = $$props;
  let { menuItems = [] } = $$props;
  let { title } = $$props;
  let { tag } = $$props;
  let { errorHandlerKind } = $$props;
  let { scriptOrFlowPath } = $$props;
  let { errorHandlerMuted } = $$props;
  if ($$props.mainButtons === void 0 && $$bindings.mainButtons && mainButtons !== void 0) $$bindings.mainButtons(mainButtons);
  if ($$props.menuItems === void 0 && $$bindings.menuItems && menuItems !== void 0) $$bindings.menuItems(menuItems);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
  if ($$props.errorHandlerKind === void 0 && $$bindings.errorHandlerKind && errorHandlerKind !== void 0) $$bindings.errorHandlerKind(errorHandlerKind);
  if ($$props.scriptOrFlowPath === void 0 && $$bindings.scriptOrFlowPath && scriptOrFlowPath !== void 0) $$bindings.scriptOrFlowPath(scriptOrFlowPath);
  if ($$props.errorHandlerMuted === void 0 && $$bindings.errorHandlerMuted && errorHandlerMuted !== void 0) $$bindings.errorHandlerMuted(errorHandlerMuted);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="border-b p-2 shadow-md"><div class="mx-auto"><div class="flex w-full flex-wrap md:flex-nowrap justify-end gap-x-2 gap-y-4 items-center"><div class="grow px-2 inline-flex items-center gap-4 min-w-0"><div${add_attribute("class", twMerge("text-lg min-w-24 font-bold truncate", $userStore?.operator ? "pl-10" : ""), 0)}>${escape(title)} </div>${tag ? ` ${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
      default: () => {
        return `tag: ${escape(tag)}`;
      }
    })}` : ``} ${slots.default ? slots.default({}) : ``}</div> <div class="flex gap-1 md:gap-2 items-center">${menuItems.length > 0 ? `${validate_component(Menu_1, "Menu").$$render($$result, {}, {}, {
      items: () => {
        return `${each(menuItems, ({ label, Icon: Icon2, onclick, color }) => {
          return `${validate_component(MenuItem, "MenuItem").$$render($$result, {}, {}, {
            default: () => {
              return `<div${add_attribute("class", classNames("text-xs flex items-center gap-2 flex-row-2 ", color === "red" ? "text-red-500" : ""), 0)}>${validate_component(Icon2, "Icon").$$render($$result, { class: "h-4" }, {}, {})} ${escape(label)}</div> `;
            }
          })}`;
        })}`;
      }
    })}` : ``} ${validate_component(ErrorHandlerToggleButton, "ErrorHandlerToggleButton").$$render(
      $$result,
      {
        kind: errorHandlerKind,
        scriptOrFlowPath,
        errorHandlerMuted
      },
      {
        errorHandlerMuted: ($$value) => {
          errorHandlerMuted = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${each(mainButtons, (btn) => {
      return `${validate_component(Button, "Button").$$render(
        $$result,
        Object.assign(
          {},
          btn.buttonProps,
          {
            startIcon: { icon: btn.buttonProps.startIcon }
          },
          {
            btnClasses: "hidden md:flex items-center gap-1"
          }
        ),
        {},
        {
          default: () => {
            return `${escape(btn.label)} `;
          }
        }
      )} ${validate_component(Button, "Button").$$render(
        $$result,
        Object.assign(
          {},
          btn.buttonProps,
          {
            startIcon: { icon: btn.buttonProps.startIcon }
          },
          { iconOnly: true },
          {
            btnClasses: "flex md:hidden items-center gap-1"
          }
        ),
        {},
        {
          default: () => {
            return `${escape(btn.label)} `;
          }
        }
      )}`;
    })}</div></div></div></div>`;
  } while (!$$settled);
  $$unsubscribe_userStore();
  return $$rendered;
});
const ClipboardPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0) $$bindings.content(content);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  return `${title !== void 0 ? `<div class="text-xs font-semibold">${escape(title)}</div>` : ``}  <div class="px-2 py-1 border flex items-center cursor-pointer bg-surface-secondary text-primary justify-between rounded-md"><div class="text-xs truncate whitespace-pre-wrap w-11/12">${escape(content)}</div> ${validate_component(Clipboard, "Clipboard").$$render($$result, { size: 14, class: "w-1/12" }, {}, {})}</div>`;
});
const WebhooksPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let url;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $page, $$unsubscribe_page;
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let userSettings;
  let { token } = $$props;
  let { args } = $$props;
  let { scopes = [] } = $$props;
  let { isFlow = false } = $$props;
  let { hash = void 0 } = $$props;
  let { path } = $$props;
  let selectedTab = "rest";
  let webhooks;
  let emailDomain = null;
  async function getEmailDomain() {
    emailDomain = await SettingService.getGlobal({ key: "email_domain" }) ?? null;
  }
  getEmailDomain();
  function computeScriptWebhooks(hash2, path2) {
    let base2 = `${$page.url.origin}/api/w/${$workspaceStore}/jobs`;
    return {
      async: {
        hash: `${base2}/run/h/${hash2}`,
        path: `${base2}/run/p/${path2}`
      },
      sync: {
        hash: `${base2}/run_wait_result/h/${hash2}`,
        path: `${base2}/run_wait_result/p/${path2}`,
        get_path: `${base2}/run_wait_result/p/${path2}`
      }
    };
  }
  function computeFlowWebhooks(path2) {
    let base2 = `${$page.url.origin}/api/w/${$workspaceStore}/jobs`;
    let urlAsync = `${base2}/run/f/${path2}`;
    let urlSync = `${base2}/run_wait_result/f/${path2}`;
    return {
      async: { path: urlAsync },
      sync: { path: urlSync, get_path: urlSync }
    };
  }
  let webhookType = DEFAULT_WEBHOOK_TYPE;
  let requestType = isFlow ? "path" : "path";
  let tokenType = "headers";
  function headers() {
    const headers2 = {};
    if (requestType != "get_path") {
      headers2["Content-Type"] = "application/json";
    }
    if (tokenType === "headers") {
      headers2["Authorization"] = `Bearer ${token}`;
    }
    return headers2;
  }
  function emailAddress() {
    return `${$workspaceStore}+${requestType === "hash" ? "hash." + hash : (isFlow ? "flow." : "") + path.replaceAll("/", ".")}+${token}@${emailDomain}`;
  }
  function fetchCode() {
    if (webhookType === "sync") {
      return `
export async function main() {
  const jobTriggerResponse = await triggerJob();
  const data = await jobTriggerResponse.json();
  return data;
}

async function triggerJob() {
  ${requestType === "get_path" ? "// Payload is a base64 encoded string of the arguments" : `const body = JSON.stringify(${JSON.stringify(args, null, 2).replaceAll("\n", "\n	")});`}
  const endpoint = \`${url}\`;

  return await fetch(endpoint, {
    method: '${requestType === "get_path" ? "GET" : "POST"}',
    headers: ${JSON.stringify(headers(), null, 2).replaceAll("\n", "\n		")}${requestType === "get_path" ? "" : `,
		body`}
  });
}`;
    }
    let mainFunction = `
export async function main() {
  const jobTriggerResponse = await triggerJob();
  const UUID = await jobTriggerResponse.text();
  const jobCompletionData = await waitForJobCompletion(UUID);
  return jobCompletionData;
}`;
    let triggerJobFunction = `
async function triggerJob() {
  const body = JSON.stringify(${JSON.stringify(args, null, 2).replaceAll("\n", "\n	")});
  const endpoint = \`${url}\`;

  return await fetch(endpoint, {
    method: '${requestType === "get_path" ? "GET" : "POST"}',
    headers: ${JSON.stringify(headers(), null, 2).replaceAll("\n", "\n		")},
    body
  });
}`;
    let waitForJobCompletionFunction = `
function waitForJobCompletion(UUID) {
  return new Promise(async (resolve, reject) => {
    try {
      const endpoint = \`${$page.url.origin}/api/w/${$workspaceStore}/jobs_u/completed/get_result_maybe/\${UUID}\`;
      const checkResponse = await fetch(endpoint, {
        method: 'GET',
        headers: ${JSON.stringify(headers(), null, 2).replaceAll("\n", "\n				")}
      });

      const checkData = await checkResponse.json();

      if (checkData.completed) {
        resolve(checkData);
      } else {
        // If not completed, wait for a second then try again
        setTimeout(async () => {
          const result = await waitForJobCompletion(UUID);
          resolve(result);
        }, 1000);
      }
    } catch (error) {
      reject(error);
    }
  });
}`;
    return `${mainFunction}

${triggerJobFunction}

${waitForJobCompletionFunction}`;
  }
  function curlCode() {
    return `TOKEN='${token}'
${requestType !== "get_path" ? `BODY='${JSON.stringify(args)}'` : ""}
URL='${url}'
${webhookType === "sync" ? "RESULT" : "UUID"}=$(curl -s ${requestType != "get_path" ? "-H 'Content-Type: application/json'" : ""} ${tokenType === "headers" ? `-H "Authorization: Bearer $TOKEN"` : ""} -X ${requestType === "get_path" ? "GET" : "POST"} ${requestType !== "get_path" ? `-d "$BODY" ` : ""}$URL)

${webhookType === "sync" ? "echo -E $RESULT | jq" : `
URL="${$page.url.origin}/api/w/${$workspaceStore}/jobs_u/completed/get_result_maybe/$UUID"
while true; do
  curl -s -H "Authorization: Bearer $TOKEN" $URL -o res.json
  COMPLETED=$(cat res.json | jq .completed)
  if [ "$COMPLETED" = "true" ]; then
    cat res.json | jq .result
    break
  else
    sleep 1
  fi
done`}`;
  }
  if ($$props.token === void 0 && $$bindings.token && token !== void 0) $$bindings.token(token);
  if ($$props.args === void 0 && $$bindings.args && args !== void 0) $$bindings.args(args);
  if ($$props.scopes === void 0 && $$bindings.scopes && scopes !== void 0) $$bindings.scopes(scopes);
  if ($$props.isFlow === void 0 && $$bindings.isFlow && isFlow !== void 0) $$bindings.isFlow(isFlow);
  if ($$props.hash === void 0 && $$bindings.hash && hash !== void 0) $$bindings.hash(hash);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0) $$bindings.path(path);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    webhooks = isFlow ? computeFlowWebhooks(path) : computeScriptWebhooks(hash, path);
    {
      if (webhookType === "sync" && selectedTab === "email") {
        webhookType = "async";
      }
    }
    {
      if (webhookType === "async" && requestType === "get_path") {
        requestType = "hash";
      }
    }
    url = webhooks[webhookType][requestType] + (tokenType === "query" ? `?token=${token}${requestType === "get_path" ? `&payload=${encodeURIComponent(btoa(JSON.stringify(args)))}` : ""}` : `${requestType === "get_path" ? `?payload=${encodeURIComponent(btoa(JSON.stringify(args)))}` : ""}`);
    $$rendered = `${validate_component(HighlightTheme, "HighlightTheme").$$render($$result, {}, {}, {})} ${validate_component(UserSettings, "UserSettings").$$render(
      $$result,
      {
        newTokenLabel: `webhook-${$userStore?.username ?? "superadmin"}-${generateRandomString(4)}`,
        scopes,
        this: userSettings
      },
      {
        this: ($$value) => {
          userSettings = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="p-2 flex flex-col w-full gap-4">${`<div class="flex flex-row justify-between my-2 gap-2"><input placeholder="paste your token here once created to alter examples below" class="!text-xs"${add_attribute("value", token, 0)}> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs",
        color: "light",
        variant: "border"
      },
      {},
      {
        default: () => {
          return `Create a Webhook-specific Token
				${validate_component(Tooltip, "Tooltip").$$render($$result, { light: true }, {}, {
            default: () => {
              return `The token will have a scope such that it can only be used to trigger this script. It is
					safe to share as it cannot be used to impersonate you.`;
            }
          })}`;
        }
      }
    )}</div>`} <div class="flex flex-col gap-2"><div class="flex flex-row justify-between"><div class="text-xs font-semibold flex flex-row items-center" data-svelte-h="svelte-1ggesi5">Request type</div> ${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
      $$result,
      {
        class: "h-[30px] w-auto",
        selected: webhookType
      },
      {
        selected: ($$value) => {
          webhookType = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              label: "Async",
              value: "async",
              tooltip: "The returning value is the uuid of the job assigned to execute the job."
            },
            {},
            {}
          )} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              label: "Sync",
              value: "sync",
              tooltip: "Triggers the execution, wait for the job to complete and return it as a response.",
              disabled: selectedTab === "email"
            },
            {},
            {}
          )}`;
        }
      }
    )}</div> <div class="flex flex-row justify-between"><div class="text-xs font-semibold flex flex-row items-center" data-svelte-h="svelte-cfq1kr">Call method</div> ${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
      $$result,
      {
        class: "h-[30px] w-auto",
        selected: requestType
      },
      {
        selected: ($$value) => {
          requestType = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              label: "POST by path",
              value: "path",
              icon: Arrow_up_right,
              selectedColor: "#fb923c"
            },
            {},
            {}
          )} ${!isFlow ? `${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              label: "POST by hash",
              value: "hash",
              icon: Arrow_up_right,
              selectedColor: "#fb923c"
            },
            {},
            {}
          )}` : ``} ${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              label: "GET by path",
              value: "get_path",
              icon: Arrow_down_right,
              disabled: webhookType !== "sync",
              selectedColor: "#14b8a6"
            },
            {},
            {}
          )}`;
        }
      }
    )}</div> ${selectedTab !== "email" ? `<div class="flex flex-row justify-between"><div class="text-xs font-semibold flex flex-row items-center" data-svelte-h="svelte-107nqjp">Token configuration</div> ${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
      $$result,
      {
        class: "h-[30px] w-auto",
        selected: tokenType
      },
      {
        selected: ($$value) => {
          tokenType = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ToggleButton, "ToggleButton").$$render(
            $$result,
            {
              label: "Token in Headers",
              value: "headers"
            },
            {},
            {}
          )} ${validate_component(ToggleButton, "ToggleButton").$$render($$result, { label: "Token in Query", value: "query" }, {}, {})}`;
        }
      }
    )}</div>` : ``}</div>   ${validate_component(Tabs, "Tabs").$$render(
      $$result,
      { selected: selectedTab },
      {
        selected: ($$value) => {
          selectedTab = $$value;
          $$settled = false;
        }
      },
      {
        content: () => {
          return `${validate_component(TabContent, "TabContent").$$render(
            $$result,
            {
              value: "rest",
              class: "flex flex-col flex-1 h-full "
            },
            {},
            {
              default: () => {
                return `<div class="flex flex-col gap-2">${validate_component(ClipboardPanel, "ClipboardPanel").$$render($$result, { title: "Url", content: url }, {}, {})} ${requestType !== "get_path" ? `${validate_component(ClipboardPanel, "ClipboardPanel").$$render(
                  $$result,
                  {
                    title: "Body",
                    content: JSON.stringify(args, null, 2)
                  },
                  {},
                  {}
                )}` : ``} ${validate_component(ClipboardPanel, "ClipboardPanel").$$render(
                  $$result,
                  {
                    title: "Headers",
                    content: JSON.stringify(headers(), null, 2)
                  },
                  {},
                  {}
                )}</div>`;
              }
            }
          )} ${validate_component(TabContent, "TabContent").$$render(
            $$result,
            {
              value: "curl",
              class: "flex flex-col flex-1 h-full"
            },
            {},
            {
              default: () => {
                return `<div class="relative"><div class="flex flex-row flex-1 h-full border p-2 rounded-md overflow-auto relative">${validate_component(Highlight, "Highlight").$$render($$result, { language: bash, code: curlCode() }, {}, {})} ${validate_component(Clipboard, "Clipboard").$$render(
                  $$result,
                  {
                    size: 14,
                    class: "w-8 top-2 right-2 absolute"
                  },
                  {},
                  {}
                )}</div></div>`;
              }
            }
          )} ${validate_component(TabContent, "TabContent").$$render($$result, { value: "fetch" }, {}, {
            default: () => {
              return `<div class="flex flex-row flex-1 h-full border p-2 rounded-md overflow-auto relative">${validate_component(Highlight, "Highlight").$$render($$result, { language: typescript, code: fetchCode() }, {}, {})} ${validate_component(Clipboard, "Clipboard").$$render(
                $$result,
                {
                  size: 14,
                  class: "w-8 top-2 right-2 absolute"
                },
                {},
                {}
              )}</div> `;
            }
          })} ${validate_component(TabContent, "TabContent").$$render($$result, { value: "email" }, {}, {
            default: () => {
              return `${emailDomain ? `<div class="flex flex-col gap-4"><div class="flex flex-col gap-2">${validate_component(ClipboardPanel, "ClipboardPanel").$$render(
                $$result,
                {
                  title: "Email address",
                  content: emailAddress()
                },
                {},
                {}
              )}</div> ${validate_component(Alert, "Alert").$$render($$result, { title: "Email triggers", size: "xs" }, {}, {
                default: () => {
                  return `To trigger the job by email, send an email to the address above. The job will
								receive two arguments: \`raw_email\` containing the raw email as string, and
								\`parsed_email\` containing the parsed email as an object.`;
                }
              })}</div>` : `<div>${validate_component(Alert, "Alert").$$render(
                $$result,
                {
                  title: "Email triggers are disabled",
                  size: "xs",
                  kind: "danger"
                },
                {},
                {
                  default: () => {
                    return `Ask an instance superadmin to setup the instance for email triggering (<a target="_blank" href="https://windmill.dev/docs/advanced/email_triggers" data-svelte-h="svelte-1au5bqa">docs</a>) and to set the email domain in the instance settings.`;
                  }
                }
              )}</div>`}`;
            }
          })} `;
        },
        default: () => {
          return `${validate_component(Tab, "Tab").$$render($$result, { value: "rest", size: "xs" }, {}, {
            default: () => {
              return `REST`;
            }
          })} ${`${validate_component(Tab, "Tab").$$render($$result, { value: "curl", size: "xs" }, {}, {
            default: () => {
              return `Curl`;
            }
          })}`} ${validate_component(Tab, "Tab").$$render($$result, { value: "fetch", size: "xs" }, {}, {
            default: () => {
              return `Fetch`;
            }
          })} ${validate_component(Tab, "Tab").$$render($$result, { value: "email", size: "xs" }, {}, {
            default: () => {
              return `Email`;
            }
          })}`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_page();
  $$unsubscribe_userStore();
  return $$rendered;
});
const CliHelpBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let url;
  let $page, $$unsubscribe_page;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  url = `${$page.url.protocol}//${$page.url.hostname}/`;
  $$unsubscribe_page();
  $$unsubscribe_workspaceStore();
  return `<div><div class="text-sm font-semibold" data-svelte-h="svelte-w5nqgo">CLI quick setup</div> <div class="text-sm" role="alert" id="dynamic-input-help-box"><ul class="pl-0 pt-2 list-decimal list-inside flex flex-col gap-2"><li>Install the latest wmill CLI from deno.land:
				${validate_component(ClipboardPanel, "ClipboardPanel").$$render(
    $$result,
    {
      content: "deno install -q -A https://deno.land/x/wmill/main.ts"
    },
    {},
    {}
  )}</li> <li>Setup the wmill cli for this workspace &amp; remote:
				${validate_component(ClipboardPanel, "ClipboardPanel").$$render(
    $$result,
    {
      content: `wmill workspace add ${$workspaceStore} ${$workspaceStore} ${url}`
    },
    {},
    {}
  )}</li> <li data-svelte-h="svelte-1nnaj5x">Follow the prompts in your terminal</li> <li data-svelte-h="svelte-8hirgo">Use the run command above!</li></ul></div></div>`;
});
const RunPageSchedules = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { isFlow } = $$props;
  let { path } = $$props;
  let { can_write } = $$props;
  let scheduleEditor;
  let schedule = void 0;
  let schedules = void 0;
  async function loadSchedule() {
    try {
      let exists = await ScheduleService.existsSchedule({ workspace: $workspaceStore ?? "", path });
      if (exists) {
        schedule = await ScheduleService.getSchedule({ workspace: $workspaceStore ?? "", path });
      } else {
        schedule = false;
      }
    } catch (e) {
      console.log("no primary schedule");
    }
  }
  async function loadSchedules() {
    try {
      schedules = (await ScheduleService.listSchedules({
        workspace: $workspaceStore ?? "",
        path,
        isFlow
      })).filter((s) => s.path != path);
    } catch (e) {
      console.error("impossible to load schedules");
    }
  }
  if ($$props.isFlow === void 0 && $$bindings.isFlow && isFlow !== void 0) $$bindings.isFlow(isFlow);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0) $$bindings.path(path);
  if ($$props.can_write === void 0 && $$bindings.can_write && can_write !== void 0) $$bindings.can_write(can_write);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    path && loadSchedule();
    path && loadSchedules();
    $$rendered = `${validate_component(ScheduleEditor, "ScheduleEditor").$$render(
      $$result,
      { this: scheduleEditor },
      {
        this: ($$value) => {
          scheduleEditor = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="p-2 flex flex-col">${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "border",
        color: "light",
        size: "xs",
        startIcon: { icon: Calendar }
      },
      {},
      {
        default: () => {
          return `New Schedule`;
        }
      }
    )}</div> ${schedule ? `<div class="p-2 flex flex-col gap-2"><div class="flex flex-row justify-between h-8"><div class="flex flex-row gap-2 items-center"><input class="inline-block !w-32" type="text" id="cron-schedule" name="cron-schedule" placeholder="*/30 * * * *"${add_attribute("value", schedule.schedule, 0)} ${"disabled"}> <div>${validate_component(Badge, "Badge").$$render($$result, { color: "indigo", small: true }, {}, {
      default: () => {
        return `Primary ${validate_component(Tooltip, "Tooltip").$$render($$result, { light: true }, {}, {
          default: () => {
            return `Share the same path as the script or flow it is attached to and its path get renamed
							whenever the source path is renamed`;
          }
        })}`;
      }
    })}</div></div> <div class="flex flex-row gap-2 items-center">${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        checked: schedule.enabled,
        options: { right: "On" },
        size: "xs"
      },
      {},
      {}
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xs",
        variant: "border",
        color: "light",
        href: `${base}/runs/${path}`
      },
      {},
      {
        default: () => {
          return `<div class="flex flex-row gap-2">${validate_component(List_ordered, "ListOrdered").$$render($$result, { size: 14 }, {}, {})}
						Runs</div>`;
        }
      }
    )} ${validate_component(Button, "Button").$$render($$result, { size: "xs", color: "dark" }, {}, {
      default: () => {
        return `${validate_component(Pen_square, "PenBox").$$render($$result, { size: 14 }, {}, {})}`;
      }
    })}</div></div> ${Object.keys(schedule?.args ?? {}).length > 0 ? `<div class="">${validate_component(JobArgs, "JobArgs").$$render($$result, { args: schedule.args ?? {} }, {}, {})}</div>` : `<div class="text-xs texg-gray-700" data-svelte-h="svelte-1bvf82p">No arguments</div>`}</div>` : `${schedule == void 0 ? `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[6]] }, {}, {})}` : ``}`} <h3 class="px-2 pt-4" data-svelte-h="svelte-19y264x">Other schedules</h3> ${schedules ? `${schedules.length == 0 ? `<div class="text-xs text-secondary px-2" data-svelte-h="svelte-1l10wcu">No other schedules</div>` : `<div class="flex flex-col divide-y px-2 pt-2">${each(schedules, (schedule2) => {
      return `<div class="grid grid-cols-6 text-2xs items-center py-2"><div class="col-span-3 truncate">${escape(schedule2.path)}</div><div>${escape(schedule2.schedule)}</div> <div>${escape(schedule2.enabled ? "on" : "off")}</div> <button data-svelte-h="svelte-uvy3vu">Edit</button> </div>`;
    })}</div>`}` : `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[8]] }, {}, {})}`}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
function createAppFromScript(path, schema) {
  return {
    grid: [
      {
        "3": {
          fixed: false,
          x: 0,
          y: 2,
          w: 2,
          h: 8,
          fullHeight: false
        },
        "12": {
          fixed: false,
          x: 0,
          y: 2,
          w: 12,
          h: 21,
          fullHeight: false
        },
        data: {
          type: "verticalsplitpanescomponent",
          configuration: {},
          panes: [50, 50],
          customCss: {},
          numberOfSubgrids: 2,
          id: "a"
        },
        id: "a"
      },
      {
        "3": {
          fixed: false,
          x: 0,
          y: 8,
          fullHeight: false,
          w: 6,
          h: 2
        },
        "12": {
          fixed: false,
          x: 0,
          y: 0,
          fullHeight: false,
          w: 12,
          h: 2
        },
        data: {
          type: "containercomponent",
          configuration: {},
          customCss: {
            container: {
              class: "!p-0",
              style: ""
            }
          },
          actions: [],
          numberOfSubgrids: 1,
          id: "g"
        },
        id: "g"
      }
    ],
    fullscreen: false,
    unusedInlineScripts: [],
    hiddenInlineScripts: [],
    css: {},
    norefreshbar: false,
    hideLegacyTopBar: true,
    subgrids: {
      "a-0": [
        {
          "3": {
            fixed: false,
            x: 0,
            y: 1,
            w: 3,
            h: 8,
            fullHeight: false
          },
          "12": {
            fixed: false,
            x: 0,
            y: 0,
            w: 12,
            h: 19,
            fullHeight: false
          },
          data: {
            type: "schemaformcomponent",
            configuration: {
              displayType: {
                type: "static",
                value: false
              },
              largeGap: {
                type: "static",
                value: false
              }
            },
            componentInput: {
              type: "static",
              fieldType: "schema",
              value: schema
            },
            customCss: {},
            id: "c"
          },
          id: "c"
        },
        {
          "3": {
            fixed: false,
            x: 0,
            y: 0,
            w: 1,
            h: 1,
            fullHeight: false
          },
          "12": {
            fixed: false,
            x: 0,
            y: 19,
            w: 12,
            h: 1,
            fullHeight: false
          },
          data: {
            type: "buttoncomponent",
            configuration: {
              label: {
                type: "static",
                value: "Submit"
              },
              color: {
                type: "static",
                value: "dark"
              },
              size: {
                type: "static",
                value: "xs"
              },
              fillContainer: {
                type: "static",
                value: false
              },
              disabled: {
                type: "eval",
                expr: "!c.valid"
              },
              beforeIcon: {
                type: "static",
                value: ""
              },
              afterIcon: {
                type: "static",
                value: ""
              },
              triggerOnAppLoad: {
                type: "static",
                value: false
              },
              onSuccess: {
                type: "oneOf",
                selected: "none",
                configuration: {
                  none: {},
                  gotoUrl: {
                    url: {
                      type: "static",
                      value: ""
                    },
                    newTab: {
                      type: "static",
                      value: true
                    }
                  },
                  setTab: {
                    setTab: {
                      type: "static",
                      value: []
                    }
                  },
                  sendToast: {
                    message: {
                      type: "static",
                      value: ""
                    }
                  },
                  openModal: {
                    modalId: {
                      type: "static",
                      value: ""
                    }
                  },
                  closeModal: {
                    modalId: {
                      type: "static",
                      value: ""
                    }
                  },
                  open: {
                    id: {
                      type: "static",
                      value: ""
                    }
                  },
                  close: {
                    id: {
                      type: "static",
                      value: ""
                    }
                  }
                }
              },
              onError: {
                type: "oneOf",
                selected: "errorOverlay",
                configuration: {
                  errorOverlay: {},
                  gotoUrl: {
                    url: {
                      type: "static",
                      value: ""
                    },
                    newTab: {
                      type: "static",
                      value: true
                    }
                  },
                  setTab: {
                    setTab: {
                      type: "static",
                      value: []
                    }
                  },
                  sendErrorToast: {
                    message: {
                      type: "static",
                      value: ""
                    },
                    appendError: {
                      type: "static",
                      value: true
                    }
                  },
                  openModal: {
                    modalId: {
                      type: "static",
                      value: ""
                    }
                  },
                  closeModal: {
                    modalId: {
                      type: "static",
                      value: ""
                    }
                  },
                  open: {
                    id: {
                      type: "static",
                      value: ""
                    }
                  },
                  close: {
                    id: {
                      type: "static",
                      value: ""
                    }
                  }
                }
              }
            },
            componentInput: {
              type: "runnable",
              fieldType: "any",
              fields: convertSchemaToFields(schema),
              runnable: {
                type: "runnableByPath",
                path,
                runType: "script",
                schema,
                name: path
              },
              autoRefresh: true,
              recomputeOnInputChanged: true
            },
            customCss: {},
            recomputeIds: [],
            horizontalAlignment: "right",
            verticalAlignment: "center",
            id: "d"
          },
          id: "d"
        }
      ],
      "a-1": [
        {
          "3": {
            fixed: false,
            x: 0,
            y: 0,
            w: 2,
            h: 8,
            fullHeight: false
          },
          "12": {
            fixed: false,
            x: 0,
            y: 0,
            w: 12,
            h: 20,
            fullHeight: false
          },
          data: {
            type: "tabscomponent",
            configuration: {
              tabsKind: {
                type: "static",
                value: "tabs"
              }
            },
            tabs: ["Result", "Logs"],
            customCss: {},
            numberOfSubgrids: 2,
            id: "b",
            disabledTabs: [
              {
                type: "static",
                value: false,
                fieldType: "boolean"
              },
              {
                type: "static",
                value: false,
                fieldType: "boolean"
              }
            ]
          },
          id: "b"
        }
      ],
      "b-0": [
        {
          "3": {
            fixed: false,
            x: 0,
            y: 0,
            w: 2,
            h: 8,
            fullHeight: false
          },
          "12": {
            fixed: false,
            x: 0,
            y: 0,
            w: 12,
            h: 18,
            fullHeight: false
          },
          data: {
            type: "displaycomponent",
            configuration: {},
            componentInput: {
              type: "connected",
              fieldType: "object",
              connection: {
                componentId: "d",
                path: "result"
              }
            },
            customCss: {},
            id: "e"
          },
          id: "e"
        }
      ],
      "b-1": [
        {
          "3": {
            fixed: false,
            x: 0,
            y: 0,
            w: 2,
            h: 8,
            fullHeight: false
          },
          "12": {
            fixed: false,
            x: 0,
            y: 0,
            w: 12,
            h: 18,
            fullHeight: false
          },
          data: {
            type: "jobidlogcomponent",
            configuration: {
              jobId: {
                type: "connected",
                connection: {
                  componentId: "d",
                  path: "jobId"
                }
              }
            },
            customCss: {},
            id: "f"
          },
          id: "f"
        }
      ],
      "g-0": [
        {
          "3": {
            fixed: false,
            x: 0,
            y: 0,
            fullHeight: false,
            w: 6,
            h: 1
          },
          "12": {
            fixed: false,
            x: 0,
            y: 0,
            fullHeight: false,
            w: 6,
            h: 1
          },
          data: {
            type: "textcomponent",
            configuration: {
              style: {
                type: "static",
                value: "Body"
              },
              copyButton: {
                type: "static",
                value: false
              },
              tooltip: {
                type: "evalv2",
                value: "",
                fieldType: "text",
                expr: "`Author: ${ctx.author}`",
                connections: [
                  {
                    componentId: "ctx",
                    id: "author"
                  }
                ]
              },
              disableNoText: {
                type: "static",
                value: true,
                fieldType: "boolean"
              }
            },
            componentInput: {
              type: "templatev2",
              fieldType: "template",
              eval: "${ctx.summary}",
              connections: [
                {
                  id: "summary",
                  componentId: "ctx"
                }
              ]
            },
            customCss: {
              text: {
                class: "text-xl font-semibold whitespace-nowrap truncate",
                style: ""
              },
              container: {
                class: "",
                style: ""
              }
            },
            actions: [],
            horizontalAlignment: "left",
            verticalAlignment: "center",
            id: "h"
          },
          id: "h"
        },
        {
          "3": {
            fixed: false,
            x: 0,
            y: 1,
            fullHeight: false,
            w: 3,
            h: 1
          },
          "12": {
            fixed: false,
            x: 6,
            y: 0,
            fullHeight: false,
            w: 6,
            h: 1
          },
          data: {
            type: "recomputeallcomponent",
            configuration: {},
            customCss: {
              container: {
                style: "",
                class: ""
              }
            },
            actions: [],
            menuItems: [],
            horizontalAlignment: "right",
            verticalAlignment: "center",
            id: "i"
          },
          id: "i"
        }
      ]
    }
  };
}
function convertSchemaToFields(schema) {
  const fields = {};
  if (!schema) {
    return fields;
  }
  Object.entries(schema.properties).forEach(([fieldName, fieldInfo]) => {
    fields[fieldName] = {
      type: "connected",
      value: fieldInfo.default,
      fieldType: fieldInfo.type,
      format: fieldInfo.format,
      allowUserResources: true,
      connection: {
        componentId: "c",
        path: `values.${fieldName}`
      }
    };
  });
  return fields;
}
function createAppFromFlow(path, schema) {
  return {
    grid: [
      {
        "3": {
          fixed: false,
          x: 0,
          y: 2,
          w: 2,
          h: 8,
          fullHeight: false
        },
        "12": {
          fixed: false,
          x: 0,
          y: 2,
          w: 12,
          h: 21,
          fullHeight: false
        },
        data: {
          type: "verticalsplitpanescomponent",
          configuration: {},
          panes: [50, 50],
          customCss: {},
          numberOfSubgrids: 2,
          id: "a"
        },
        id: "a"
      },
      {
        "3": {
          fixed: false,
          x: 0,
          y: 8,
          fullHeight: false,
          w: 6,
          h: 2
        },
        "12": {
          fixed: false,
          x: 0,
          y: 0,
          fullHeight: false,
          w: 12,
          h: 2
        },
        data: {
          type: "containercomponent",
          configuration: {},
          customCss: {
            container: {
              class: "!p-0",
              style: ""
            }
          },
          actions: [],
          numberOfSubgrids: 1,
          id: "g"
        },
        id: "g"
      }
    ],
    fullscreen: false,
    unusedInlineScripts: [],
    hiddenInlineScripts: [],
    css: {},
    norefreshbar: false,
    hideLegacyTopBar: true,
    subgrids: {
      "a-0": [
        {
          "3": {
            fixed: false,
            x: 0,
            y: 1,
            w: 3,
            h: 8,
            fullHeight: false
          },
          "12": {
            fixed: false,
            x: 0,
            y: 0,
            w: 12,
            h: 19,
            fullHeight: false
          },
          data: {
            type: "schemaformcomponent",
            configuration: {
              displayType: {
                type: "static",
                value: false
              },
              largeGap: {
                type: "static",
                value: false
              }
            },
            componentInput: {
              type: "static",
              fieldType: "schema",
              value: schema
            },
            customCss: {},
            id: "c"
          },
          id: "c"
        },
        {
          "3": {
            fixed: false,
            x: 0,
            y: 0,
            w: 1,
            h: 1,
            fullHeight: false
          },
          "12": {
            fixed: false,
            x: 0,
            y: 19,
            w: 12,
            h: 1,
            fullHeight: false
          },
          data: {
            type: "buttoncomponent",
            configuration: {
              label: {
                type: "static",
                value: "Submit"
              },
              color: {
                type: "static",
                value: "dark"
              },
              size: {
                type: "static",
                value: "xs"
              },
              fillContainer: {
                type: "static",
                value: false
              },
              disabled: {
                type: "eval",
                expr: "!c.valid"
              },
              beforeIcon: {
                type: "static",
                value: ""
              },
              afterIcon: {
                type: "static",
                value: ""
              },
              triggerOnAppLoad: {
                type: "static",
                value: false
              },
              onSuccess: {
                type: "oneOf",
                selected: "none",
                configuration: {
                  none: {},
                  gotoUrl: {
                    url: {
                      type: "static",
                      value: ""
                    },
                    newTab: {
                      type: "static",
                      value: true
                    }
                  },
                  setTab: {
                    setTab: {
                      type: "static",
                      value: []
                    }
                  },
                  sendToast: {
                    message: {
                      type: "static",
                      value: ""
                    }
                  },
                  openModal: {
                    modalId: {
                      type: "static",
                      value: ""
                    }
                  },
                  closeModal: {
                    modalId: {
                      type: "static",
                      value: ""
                    }
                  },
                  open: {
                    id: {
                      type: "static",
                      value: ""
                    }
                  },
                  close: {
                    id: {
                      type: "static",
                      value: ""
                    }
                  }
                }
              },
              onError: {
                type: "oneOf",
                selected: "errorOverlay",
                configuration: {
                  errorOverlay: {},
                  gotoUrl: {
                    url: {
                      type: "static",
                      value: ""
                    },
                    newTab: {
                      type: "static",
                      value: true
                    }
                  },
                  setTab: {
                    setTab: {
                      type: "static",
                      value: []
                    }
                  },
                  sendErrorToast: {
                    message: {
                      type: "static",
                      value: ""
                    },
                    appendError: {
                      type: "static",
                      value: true
                    }
                  },
                  openModal: {
                    modalId: {
                      type: "static",
                      value: ""
                    }
                  },
                  closeModal: {
                    modalId: {
                      type: "static",
                      value: ""
                    }
                  },
                  open: {
                    id: {
                      type: "static",
                      value: ""
                    }
                  },
                  close: {
                    id: {
                      type: "static",
                      value: ""
                    }
                  }
                }
              }
            },
            componentInput: {
              type: "runnable",
              fieldType: "any",
              fields: convertSchemaToFields(schema),
              runnable: {
                type: "runnableByPath",
                path,
                runType: "flow",
                schema,
                name: path
              },
              autoRefresh: false,
              recomputeOnInputChanged: false
            },
            customCss: {},
            recomputeIds: [],
            horizontalAlignment: "right",
            verticalAlignment: "center",
            id: "d"
          },
          id: "d"
        }
      ],
      "a-1": [
        {
          "3": {
            fixed: false,
            x: 0,
            y: 0,
            w: 2,
            h: 8,
            fullHeight: false
          },
          "12": {
            fixed: false,
            x: 0,
            y: 0,
            w: 12,
            h: 20,
            fullHeight: false
          },
          data: {
            type: "tabscomponent",
            configuration: {
              tabsKind: {
                type: "static",
                value: "tabs"
              }
            },
            tabs: ["Result", "Logs"],
            customCss: {},
            numberOfSubgrids: 2,
            id: "b",
            disabledTabs: [
              {
                type: "static",
                value: false,
                fieldType: "boolean"
              },
              {
                type: "static",
                value: false,
                fieldType: "boolean"
              }
            ]
          },
          id: "b"
        }
      ],
      "b-0": [
        {
          "3": {
            fixed: false,
            x: 0,
            y: 0,
            w: 2,
            h: 8,
            fullHeight: false
          },
          "12": {
            fixed: false,
            x: 0,
            y: 0,
            w: 12,
            h: 18,
            fullHeight: false
          },
          data: {
            type: "jobidflowstatuscomponent",
            configuration: {
              jobId: {
                type: "connected",
                value: "",
                connection: {
                  componentId: "d",
                  path: "jobId"
                }
              }
            },
            customCss: {},
            id: "e"
          },
          id: "e"
        }
      ],
      "b-1": [
        {
          "3": {
            fixed: false,
            x: 0,
            y: 0,
            w: 2,
            h: 8,
            fullHeight: false
          },
          "12": {
            fixed: false,
            x: 0,
            y: 0,
            w: 12,
            h: 18,
            fullHeight: false
          },
          data: {
            type: "jobidlogcomponent",
            configuration: {
              jobId: {
                type: "connected",
                connection: {
                  componentId: "d",
                  path: "jobId"
                }
              }
            },
            customCss: {},
            id: "f"
          },
          id: "f"
        }
      ],
      "g-0": [
        {
          "3": {
            fixed: false,
            x: 0,
            y: 0,
            fullHeight: false,
            w: 6,
            h: 1
          },
          "12": {
            fixed: false,
            x: 0,
            y: 0,
            fullHeight: false,
            w: 6,
            h: 1
          },
          data: {
            type: "textcomponent",
            configuration: {
              style: {
                type: "static",
                value: "Body"
              },
              copyButton: {
                type: "static",
                value: false
              },
              tooltip: {
                type: "evalv2",
                value: "",
                fieldType: "text",
                expr: "`Author: ${ctx.author}`",
                connections: [
                  {
                    componentId: "ctx",
                    id: "author"
                  }
                ]
              },
              disableNoText: {
                type: "static",
                value: true,
                fieldType: "boolean"
              }
            },
            componentInput: {
              type: "templatev2",
              fieldType: "template",
              eval: "${ctx.summary}",
              connections: [
                {
                  id: "summary",
                  componentId: "ctx"
                }
              ]
            },
            customCss: {
              text: {
                class: "text-xl font-semibold whitespace-nowrap truncate",
                style: ""
              },
              container: {
                class: "",
                style: ""
              }
            },
            actions: [],
            horizontalAlignment: "left",
            verticalAlignment: "center",
            id: "h"
          },
          id: "h"
        },
        {
          "3": {
            fixed: false,
            x: 0,
            y: 1,
            fullHeight: false,
            w: 3,
            h: 1
          },
          "12": {
            fixed: false,
            x: 6,
            y: 0,
            fullHeight: false,
            w: 6,
            h: 1
          },
          data: {
            type: "recomputeallcomponent",
            configuration: {},
            customCss: {
              container: {
                style: "",
                class: ""
              }
            },
            actions: [],
            menuItems: [],
            horizontalAlignment: "right",
            verticalAlignment: "center",
            id: "i"
          },
          id: "i"
        }
      ]
    }
  };
}
export {
  ClipboardPanel as C,
  DetailPageLayout as D,
  RunPageSchedules as R,
  Server as S,
  WebhooksPanel as W,
  CliHelpBox as a,
  RunForm as b,
  DetailPageHeader as c,
  createAppFromFlow as d,
  createAppFromScript as e
};
