import { c as create_ssr_component, v as validate_component, s as subscribe, f as each, e as escape, b as add_attribute, d as createEventDispatcher, o as onDestroy } from "../../../../../chunks/ssr.js";
import { A as AssignableTags } from "../../../../../chunks/AssignableTags.js";
import { C as CenteredPage } from "../../../../../chunks/CenteredPage.js";
import { T as Tooltip } from "../../../../../chunks/Tooltip.js";
import { B as Badge } from "../../../../../chunks/Badge.js";
import { B as Button, s as sendUserToast, R as pluralize, p as truncate, j as displayDate, S as groupBy } from "../../../../../chunks/toast.js";
import { D as Drawer, a as DrawerContent } from "../../../../../chunks/DrawerContent.js";
import { P as Popup } from "../../../../../chunks/Popup.js";
import { S as Skeleton } from "../../../../../chunks/Skeleton.js";
import { T as Tabs, a as Tab } from "../../../../../chunks/Tabs.js";
import "../../../../../chunks/common.js";
import "yaml";
import "../../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import "minimatch";
/* empty css                                                         */
import { W as WorkspaceService, b as WorkerService, g as SettingService, k as ConfigService } from "../../../../../chunks/services.gen.js";
import { e as enterpriseLicense, b as superadmin } from "../../../../../chunks/stores2.js";
import { D as DEFAULT_TAGS_WORKSPACES_SETTING } from "../../../../../chunks/consts.js";
import { T as Toggle } from "../../../../../chunks/Toggle.js";
import { M as MultiSelectWrapper } from "../../../../../chunks/MultiSelectWrapper.js";
import { A as Alert_triangle } from "../../../../../chunks/alert-triangle.js";
import { L as Loader_2 } from "../../../../../chunks/loader-2.js";
import { P as Pen } from "../../../../../chunks/pen.js";
import { P as PageHeader } from "../../../../../chunks/PageHeader.js";
import { A as Alert } from "../../../../../chunks/Alert.js";
import "chartjs-adapter-date-fns";
import { Chart, Title, Tooltip as Tooltip$1, Legend, LineElement, LinearScale, PointElement, CategoryScale, TimeScale, LogarithmicScale } from "chart.js";
import "../../../../../chunks/svelte.js";
import { L as Line } from "../../../../../chunks/Line.js";
import { D as DarkModeObserver } from "../../../../../chunks/DarkModeObserver.js";
import { S as SimpleEditor } from "../../../../../chunks/SimpleEditor.js";
import { D as DataTable, H as Head, C as Cell } from "../../../../../chunks/Head.js";
import "../../../../../chunks/index3.js";
import { T as ToggleButtonGroup, a as ToggleButton } from "../../../../../chunks/ToggleButtonGroup.js";
import { a as ConfirmationModal } from "../../../../../chunks/ConfirmationModal.js";
import { E as Editor } from "../../../../../chunks/Editor.js";
import { S as Section, T as Trash } from "../../../../../chunks/Section.js";
import { L as Label } from "../../../../../chunks/Label.js";
import { S as SimpleAutocomplete } from "../../../../../chunks/SimpleAutocomplete.js";
import { X } from "../../../../../chunks/x.js";
import { P as Plus } from "../../../../../chunks/plus.js";
import { M as MultiSelect } from "../../../../../chunks/MultiSelect2.js";
import { S as Settings } from "../../../../../chunks/settings.js";
import { C as Copy } from "../../../../../chunks/copy.js";
import { R as Refresh_ccw } from "../../../../../chunks/refresh-ccw.js";
import { I as Icon } from "../../../../../chunks/Icon.js";
import { F as File_json } from "../../../../../chunks/file-json.js";
import { S as Search } from "../../../../../chunks/search.js";
const Line_chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M3 3v18h18" }], ["path", { "d": "m19 9-5 5-4-4-3 3" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "line-chart" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const DefaultTagsInner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  let $superadmin, $$unsubscribe_superadmin;
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  $$unsubscribe_superadmin = subscribe(superadmin, (value) => $superadmin = value);
  let defaultTags = void 0;
  let { defaultTagPerWorkspace = void 0 } = $$props;
  let { defaultTagWorkspaces = void 0 } = $$props;
  let limitToWorkspaces = false;
  let workspaces = [];
  async function loadWorkspaces() {
    workspaces = (await WorkspaceService.listWorkspacesAsSuperAdmin()).map((m) => m.id);
  }
  async function loadDefaultTags() {
    try {
      defaultTags = await WorkerService.geDefaultTags() ?? [];
      defaultTagWorkspaces = await SettingService.getGlobal({ key: DEFAULT_TAGS_WORKSPACES_SETTING }) ?? [];
      limitToWorkspaces = defaultTagWorkspaces ? defaultTagWorkspaces.length > 0 : false;
    } catch (err) {
      sendUserToast(`Could not load default tags: ${err}`, true);
    }
  }
  loadDefaultTags();
  loadWorkspaces();
  if ($$props.defaultTagPerWorkspace === void 0 && $$bindings.defaultTagPerWorkspace && defaultTagPerWorkspace !== void 0) $$bindings.defaultTagPerWorkspace(defaultTagPerWorkspace);
  if ($$props.defaultTagWorkspaces === void 0 && $$bindings.defaultTagWorkspaces && defaultTagWorkspaces !== void 0) $$bindings.defaultTagWorkspaces(defaultTagWorkspaces);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="flex flex-col w-80 p-2 gap-2">${!$enterpriseLicense ? `<div class="flex text-xs items-center gap-1 text-yellow-500 whitespace-nowrap justify-end">${validate_component(Alert_triangle, "AlertTriangle").$$render($$result, { size: 16 }, {}, {})}
			EE only ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
      default: () => {
        return `Enterprise Edition only feature`;
      }
    })}</div>` : ``} ${defaultTagPerWorkspace == void 0 || defaultTags == void 0 ? `${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})}` : `<div class="flex flex-col gap-y-1">${each(defaultTags.sort(), (tag) => {
      return `<div class="flex gap-2 items-center"><div class="p-1 text-xs px-2 rounded border text-primary w-32">${escape(tag)} </div><div class="flex gap-2 items-center w-92">→
						<input class="text-xs w-full" disabled type="text"${add_attribute("value", defaultTagPerWorkspace ? `${tag}-$workspace` : tag, 0)}></div> </div>`;
    })}</div> <div class="py-4 flex flex-col gap-2">${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        options: { right: "workspace specific default tags" },
        checked: defaultTagPerWorkspace
      },
      {
        checked: ($$value) => {
          defaultTagPerWorkspace = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${defaultTagPerWorkspace ? `${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        options: { right: "only for some workspaces" },
        checked: limitToWorkspaces
      },
      {
        checked: ($$value) => {
          limitToWorkspaces = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${limitToWorkspaces ? `${validate_component(MultiSelectWrapper, "MultiSelectWrapper").$$render(
      $$result,
      {
        items: workspaces,
        value: defaultTagWorkspaces
      },
      {
        value: ($$value) => {
          defaultTagWorkspaces = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}` : ``}</div> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "contained",
        color: "blue",
        size: "sm",
        disabled: !$enterpriseLicense || !$superadmin
      },
      {},
      {
        default: () => {
          return `Save ${!$superadmin ? `<span class="text-2xs text-tertiary" data-svelte-h="svelte-1l95mpe">superadmin only</span>` : ``}`;
        }
      }
    )} <span class="text-2xs text-tertiary" data-svelte-h="svelte-1tldtdj">When tags use <pre class="inline">$workspace</pre>, the final tag has
			<pre class="inline">$workspace</pre> replaced with the workspace id, allowing multi-vpc setup with
			more ease, without having to assign a specific tag each time.</span>`}</div>`;
  } while (!$$settled);
  $$unsubscribe_enterpriseLicense();
  $$unsubscribe_superadmin();
  return $$rendered;
});
let placement = "bottom-end";
const DefaultTags = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { defaultTagPerWorkspace = void 0 } = $$props;
  let { defaultTagWorkspaces = void 0 } = $$props;
  if ($$props.defaultTagPerWorkspace === void 0 && $$bindings.defaultTagPerWorkspace && defaultTagPerWorkspace !== void 0) $$bindings.defaultTagPerWorkspace(defaultTagPerWorkspace);
  if ($$props.defaultTagWorkspaces === void 0 && $$bindings.defaultTagWorkspaces && defaultTagWorkspaces !== void 0) $$bindings.defaultTagWorkspaces(defaultTagWorkspaces);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Popup, "Popup").$$render(
      $$result,
      {
        floatingConfig: { strategy: "absolute", placement },
        containerClasses: "border rounded-lg shadow-lg p-4 bg-surface"
      },
      {},
      {
        button: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              color: "dark",
              size: "xs",
              nonCaptureEvent: true
            },
            {},
            {
              default: () => {
                return `<div class="flex flex-row gap-1 items-center">${validate_component(Pen, "Pen").$$render($$result, { size: 14 }, {}, {})} Default Tags ${validate_component(Tooltip, "Tooltip").$$render($$result, { light: true }, {}, {
                  default: () => {
                    return `Scripts and steps that have not been specifically assigned tags will use a default tag
					that can be customized here`;
                  }
                })}</div>`;
              }
            }
          )} `;
        },
        default: () => {
          return `${validate_component(DefaultTagsInner, "DefaultTagsInner").$$render(
            $$result,
            {
              defaultTagPerWorkspace,
              defaultTagWorkspaces
            },
            {
              defaultTagPerWorkspace: ($$value) => {
                defaultTagPerWorkspace = $$value;
                $$settled = false;
              },
              defaultTagWorkspaces: ($$value) => {
                defaultTagWorkspaces = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
function fillData(data, zero = 0) {
  const sorted = [];
  for (const el of [
    ...data,
    {
      created_at: (/* @__PURE__ */ new Date()).toISOString(),
      value: zero
    }
  ]) {
    const last = sorted.length > 0 ? new Date(sorted[sorted.length - 1].created_at).getTime() : void 0;
    const currentTs = new Date(el.created_at).getTime();
    if (last && currentTs - last > 1e3 * 60 * 2) {
      const numElements = Math.floor((currentTs - last) / (1e3 * 30));
      for (let i = 1; i < numElements; i++) {
        sorted.push({
          created_at: new Date(last + i * (1e3 * 30)).toISOString(),
          value: zero
        });
      }
    }
    sorted.push(el);
  }
  const light = [];
  for (const el of sorted) {
    const last = light.length > 0 ? light[light.length - 1] : void 0;
    if (!last || Math.abs((el.value - last.value) / last.value) > 0.1 || new Date(el.created_at).getTime() - new Date(last.created_at).getTime() > 1e3 * 60 * 15) {
      light.push(el);
    }
  }
  return light;
}
const QueueMetricsDrawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $superadmin, $$unsubscribe_superadmin;
  $$unsubscribe_superadmin = subscribe(superadmin, (value) => $superadmin = value);
  let { drawer } = $$props;
  let isOpen = false;
  let loading = true;
  const colorTuples = [
    ["#7EB26D", "rgba(126, 178, 109, 0.2)"],
    ["#EAB839", "rgba(234, 184, 57, 0.2)"],
    ["#6ED0E0", "rgba(110, 208, 224, 0.2)"],
    ["#EF843C", "rgba(239, 132, 60, 0.2)"],
    ["#E24D42", "rgba(226, 77, 66, 0.2)"],
    ["#1F78C1", "rgba(31, 120, 193, 0.2)"],
    ["#BA43A9", "rgba(186, 67, 169, 0.2)"],
    ["#705DA0", "rgba(112, 93, 160, 0.2)"],
    ["#508642", "rgba(80, 134, 66, 0.2)"],
    ["#CCA300", "rgba(204, 163, 0, 0.2)"],
    ["#447EBC", "rgba(68, 126, 188, 0.2)"],
    ["#C15C17", "rgba(193, 92, 23, 0.2)"],
    ["#890F02", "rgba(137, 15, 2, 0.2)"],
    ["#666666", "rgba(102, 102, 102, 0.2)"],
    ["#44AA99", "rgba(68, 170, 153, 0.2)"],
    ["#6D8764", "rgba(109, 135, 100, 0.2)"],
    ["#555555", "rgba(85, 85, 85, 0.2)"],
    ["#B3B3B3", "rgba(179, 179, 179, 0.2)"],
    ["#008C9E", "rgba(0, 140, 158, 0.2)"],
    ["#6BBA70", "rgba(107, 186, 112, 0.2)"]
  ];
  function getColors(labels) {
    const colors = labels.map((_, i) => colorTuples[i % colorTuples.length]);
    return Object.fromEntries(colors.map((c, i) => [labels[i], c]));
  }
  Chart.register(Title, Tooltip$1, Legend, LineElement, LinearScale, PointElement, CategoryScale, TimeScale, LogarithmicScale);
  let countData = void 0;
  let delayData = void 0;
  let minDate = /* @__PURE__ */ new Date();
  let noMetrics = false;
  async function loadMetrics() {
    loading = true;
    let metrics = await WorkerService.getQueueMetrics();
    if (metrics.length == 0) {
      noMetrics = true;
      loading = false;
      return;
    }
    const labels = metrics.map((m) => m.id.slice(12)).filter((v, i, a) => a.indexOf(v) === i).sort();
    const labelColors = getColors(labels);
    countData = {
      datasets: metrics.filter((m) => m.id.startsWith("queue_count_")).map((m) => {
        const [color, bgColor] = labelColors[m.id.slice(12)];
        return {
          label: m.id.slice(12),
          backgroundColor: bgColor,
          borderColor: color,
          data: fillData(m.values).map((v) => ({ x: v.created_at, y: v.value }))
        };
      })
    };
    delayData = {
      datasets: metrics.filter((m) => m.id.startsWith("queue_delay_")).map((m) => {
        const [color, bgColor] = labelColors[m.id.slice(12)];
        return {
          label: m.id.slice(12),
          borderColor: color,
          backgroundColor: bgColor,
          data: fillData(m.values, 1).map((v) => ({ x: v.created_at, y: v.value }))
        };
      })
    };
    minDate = new Date(Math.min(...countData.datasets.map((d) => new Date(d.data[0].x).getTime())));
    loading = false;
  }
  let darkMode = false;
  if ($$props.drawer === void 0 && $$bindings.drawer && drawer !== void 0) $$bindings.drawer(drawer);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if ($superadmin && isOpen) {
        loadMetrics();
      } else {
        countData = void 0;
        delayData = void 0;
      }
    }
    Chart.defaults.color = darkMode ? "#ccc" : "#666";
    Chart.defaults.borderColor = darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)";
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
      { this: drawer, open: isOpen },
      {
        this: ($$value) => {
          drawer = $$value;
          $$settled = false;
        },
        open: ($$value) => {
          isOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Queue Metrics" }, {}, {
            default: () => {
              return `${loading ? `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[20]] }, {}, {})}` : `${noMetrics ? `<p class="text-secondary" data-svelte-h="svelte-scjfux">No jobs delayed by more than 3 seconds in the last 14 days</p>` : `<div class="flex flex-col gap-4">${countData ? `${validate_component(Line, "Line").$$render(
                $$result,
                {
                  data: countData,
                  options: {
                    animation: false,
                    plugins: {
                      title: {
                        display: true,
                        text: "Number of delayed jobs per tag (> 3s)"
                      }
                    },
                    scales: {
                      x: {
                        type: "time",
                        min: minDate.toISOString(),
                        max: (/* @__PURE__ */ new Date()).toISOString()
                      },
                      y: { title: { display: true, text: "count" } }
                    }
                  }
                },
                {},
                {}
              )}` : ``} ${delayData ? `${validate_component(Line, "Line").$$render(
                $$result,
                {
                  data: delayData,
                  options: {
                    animation: false,
                    plugins: {
                      title: {
                        display: true,
                        text: "Queue delay per tag (> 3s)"
                      },
                      tooltip: {
                        callbacks: {
                          label(context) {
                            if (context.raw.y === 1) {
                              return context.dataset.label + ": 0";
                            } else {
                              return context.dataset.label + ": " + context.raw.y;
                            }
                          }
                        }
                      }
                    },
                    scales: {
                      x: {
                        type: "time",
                        min: minDate.toISOString(),
                        max: (/* @__PURE__ */ new Date()).toISOString()
                      },
                      y: {
                        type: "logarithmic",
                        title: { display: true, text: "delay (s)" },
                        ticks: {
                          callback: (value, _) => value === 1 ? "0" : value
                        }
                      }
                    }
                  }
                },
                {},
                {}
              )}` : ``} ${validate_component(Alert, "Alert").$$render($$result, { title: "Info" }, {}, {
                default: () => {
                  return `Only tags for jobs that have been delayed by more than 3 seconds in the last 14 days are
					included in the graph.`;
                }
              })}</div>`}`}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_superadmin();
  return $$rendered;
});
const WorkspaceGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected;
  let $superadmin, $$unsubscribe_superadmin;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_superadmin = subscribe(superadmin, (value) => $superadmin = value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  let { name } = $$props;
  let { config } = $$props;
  let { activeWorkers } = $$props;
  let { customTags } = $$props;
  let nconfig = {};
  let selectedPriorityTags = [];
  let customEnvVars = [];
  const defaultTags = [
    "deno",
    "python3",
    "go",
    "bash",
    "powershell",
    "dependency",
    "flow",
    "other",
    "bun",
    "php"
  ];
  const nativeTags = ["nativets", "postgresql", "mysql", "graphql", "snowflake", "mssql", "bigquery"];
  const aws_env_vars_preset = [
    "AWS_REGION",
    "AWS_DEFAULT_REGION",
    "AWS_ACCESS_KEY_ID",
    "AWS_SECRET_ACCESS_KEY",
    "AWS_ENDPOINT_URL"
  ];
  const ssl_env_vars_preset = [
    "DENO_CERT",
    "PIP_INDEX_CERT",
    "REQUESTS_CA_BUNDLE",
    "SSL_CERT_FILE",
    "SSL_CERT_DIR"
  ];
  let newTag = "";
  let workspaceTag = "";
  let { defaultTagPerWorkspace = void 0 } = $$props;
  let workspaces = [];
  async function listWorkspaces() {
    workspaces = await WorkspaceService.listWorkspacesAsSuperAdmin();
  }
  const dispatch = createEventDispatcher();
  let openDelete = false;
  let openClean = false;
  let drawer;
  let createdTags = [];
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.config === void 0 && $$bindings.config && config !== void 0) $$bindings.config(config);
  if ($$props.activeWorkers === void 0 && $$bindings.activeWorkers && activeWorkers !== void 0) $$bindings.activeWorkers(activeWorkers);
  if ($$props.customTags === void 0 && $$bindings.customTags && customTags !== void 0) $$bindings.customTags(customTags);
  if ($$props.defaultTagPerWorkspace === void 0 && $$bindings.defaultTagPerWorkspace && defaultTagPerWorkspace !== void 0) $$bindings.defaultTagPerWorkspace(defaultTagPerWorkspace);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    selected = nconfig?.dedicated_worker != void 0 ? "dedicated" : "normal";
    {
      {
        selectedPriorityTags = [];
        if (nconfig?.priority_tags !== void 0) {
          for (const [tag, _] of Object.entries(nconfig?.priority_tags)) {
            selectedPriorityTags.push(tag);
          }
        }
      }
    }
    $superadmin && listWorkspaces();
    $$rendered = `${validate_component(ConfirmationModal, "ConfirmationModal").$$render(
      $$result,
      {
        open: openDelete,
        title: "Delete worker group",
        confirmationText: "Remove"
      },
      {},
      {
        default: () => {
          return `<div class="flex flex-col w-full space-y-4"><span>Are you sure you want to remove this worker group ${escape(name)}?</span></div>`;
        }
      }
    )} ${validate_component(ConfirmationModal, "ConfirmationModal").$$render(
      $$result,
      {
        open: openClean,
        title: "Clear cache",
        confirmationText: "Remove"
      },
      {},
      {
        default: () => {
          return `<div class="flex flex-col w-full space-y-4" data-svelte-h="svelte-cugxfn"><span>Are you sure you want to clean the cache of all workers of this worker group (will also
			restart the workers and expect supervisor to restart them) ?</span></div>`;
        }
      }
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
              title: $superadmin ? `Edit worker config '${name}'` : `Worker config '${name}'`
            },
            {},
            {
              actions: () => {
                return `<div class="flex gap-4 items-center"><div class="flex gap-2 items-center">${``} ${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    variant: "contained",
                    color: "dark",
                    disabled: nconfig?.dedicated_worker == void 0 || !$enterpriseLicense || !$superadmin
                  },
                  {},
                  {
                    default: () => {
                      return `Apply changes`;
                    }
                  }
                )}</div></div> `;
              },
              default: () => {
                return `${!$enterpriseLicense ? `${validate_component(Alert, "Alert").$$render(
                  $$result,
                  {
                    type: "warning",
                    title: "Worker management UI is EE only"
                  },
                  {},
                  {
                    default: () => {
                      return `Workers can still have their WORKER_TAGS, INIT_SCRIPT and WHITELIST_ENVS passed as env.
				Dedicated workers are an enterprise only feature.`;
                    }
                  }
                )} <div class="pb-4"></div>` : ``} ${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
                  $$result,
                  {
                    selected,
                    disabled: !$superadmin,
                    class: "mb-4"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(ToggleButton, "ToggleButton").$$render(
                        $$result,
                        {
                          position: "left",
                          value: "normal",
                          size: "sm",
                          label: "Any jobs within worker tags"
                        },
                        {},
                        {}
                      )} ${validate_component(ToggleButton, "ToggleButton").$$render(
                        $$result,
                        {
                          position: "dedicated",
                          value: "dedicated",
                          size: "sm",
                          label: "Dedicated to a script/flow"
                        },
                        {},
                        {}
                      )}`;
                    }
                  }
                )} ${selected == "normal" ? `${validate_component(Section, "Section").$$render($$result, { label: "Tags to listen to" }, {}, {
                  default: () => {
                    return `${nconfig?.worker_tags != void 0 ? `<div class="flex gap-3 gap-y-2 flex-wrap pb-2">${each(nconfig.worker_tags, (tag) => {
                      return `<div class="flex gap-0.5 items-center"><div class="text-2xs p-1 rounded border text-primary">${escape(tag)}</div> ${$superadmin ? `<button${add_attribute("class", "z-10 rounded-full p-1 duration-200 hover:bg-gray-200", 0)} aria-label="Remove item">${validate_component(X, "X").$$render($$result, { size: 12 }, {}, {})}</button> ` : ``}</div>`;
                    })}</div> ${$superadmin ? `<div class="max-w-md">${validate_component(SimpleAutocomplete, "AutoComplete").$$render(
                      $$result,
                      {
                        noInputStyles: true,
                        items: [
                          ...customTags ?? [],
                          ...createdTags,
                          ...defaultTags,
                          ...nativeTags
                        ].filter((x) => !nconfig?.worker_tags?.includes(x)),
                        hideArrow: true,
                        inputClassName: 'flex !font-gray-600 !font-primary !bg-surface-primary"',
                        dropdownClassName: "!text-sm !py-2 !rounded-sm  !border-gray-200 !border !shadow-md",
                        className: "w-full !font-gray-600 !font-primary !bg-surface-primary",
                        onFocus: () => {
                          dispatch("focus");
                        },
                        create: true,
                        onCreate: (c) => {
                          createdTags.push(c);
                          createdTags = [...createdTags];
                          return c;
                        },
                        createText: "Press enter to use this non-predefined value",
                        selectedItem: newTag
                      },
                      {
                        selectedItem: ($$value) => {
                          newTag = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )} <div class="mt-1"></div> <div class="flex">${validate_component(Button, "Button").$$render(
                      $$result,
                      {
                        variant: "contained",
                        color: "blue",
                        size: "xs",
                        startIcon: { icon: Plus },
                        disabled: newTag == "" || nconfig.worker_tags?.includes(newTag)
                      },
                      {},
                      {
                        default: () => {
                          return `Add tag`;
                        }
                      }
                    )}</div></div> <div class="flex flex-wrap mt-2 items-center gap-1 pt-2">${validate_component(Button, "Button").$$render(
                      $$result,
                      {
                        variant: "contained",
                        color: "light",
                        size: "xs"
                      },
                      {},
                      {
                        default: () => {
                          return `Reset to all tags ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                            default: () => {
                              return `${escape((defaultTagPerWorkspace && workspaceTag ? defaultTags.concat(nativeTags).map((nt) => `${nt}-${workspaceTag}`) : defaultTags.concat(nativeTags)).join(", "))}`;
                            }
                          })}`;
                        }
                      }
                    )} ${validate_component(Button, "Button").$$render(
                      $$result,
                      {
                        variant: "contained",
                        color: "light",
                        size: "xs"
                      },
                      {},
                      {
                        default: () => {
                          return `Reset to all tags minus native ones ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                            default: () => {
                              return `${escape((defaultTagPerWorkspace ? defaultTags.map((nt) => `${nt}-${workspaceTag}`) : defaultTags).join(", "))}`;
                            }
                          })}`;
                        }
                      }
                    )} ${validate_component(Button, "Button").$$render(
                      $$result,
                      {
                        variant: "contained",
                        color: "light",
                        size: "xs"
                      },
                      {},
                      {
                        default: () => {
                          return `Reset to native tags ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                            default: () => {
                              return `${escape((defaultTagPerWorkspace && workspaceTag ? nativeTags.map((nt) => `${nt}-${workspaceTag}`) : nativeTags).join(", "))}`;
                            }
                          })}`;
                        }
                      }
                    )} ${defaultTagPerWorkspace ? `${validate_component(SimpleAutocomplete, "AutoComplete").$$render(
                      $$result,
                      {
                        noInputStyles: true,
                        hideArrow: true,
                        items: workspaces.map((w) => w.id),
                        inputClassName: "flex !font-gray-600 !font-primary !bg-surface-primary",
                        dropdownClassName: "!text-sm !py-2 !rounded-sm  !border-gray-200 !border !shadow-md",
                        className: "!font-gray-600 !font-primary !bg-surface-primary",
                        create: true,
                        onCreate: (c) => c,
                        placeholder: "Workspace ID",
                        selectedItem: workspaceTag
                      },
                      {
                        selectedItem: ($$value) => {
                          workspaceTag = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}` : ``}</div> <div class="max-w mt-2 items-center gap-1 pt-2">${nconfig?.worker_tags !== void 0 && nconfig?.worker_tags.length > 0 ? `${validate_component(Label, "Label").$$render($$result, { label: "High-priority tags" }, {}, {
                      header: () => {
                        return `${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                          default: () => {
                            return `Jobs with the following high-priority tags will be picked up in priority by
											this worker.
											${!enterpriseLicense ? `This is a feature only available in enterprise edition.` : ``}`;
                          }
                        })} `;
                      },
                      default: () => {
                        return `${validate_component(MultiSelect, "Multiselect").$$render(
                          $$result,
                          {
                            outerDivClass: "text-secondary !bg-surface-disabled",
                            disabled: !$enterpriseLicense,
                            options: nconfig?.worker_tags,
                            selectedOptionsDraggable: false,
                            ulOptionsClass: "!bg-surface-secondary",
                            placeholder: "High priority tags",
                            selected: selectedPriorityTags
                          },
                          {
                            selected: ($$value) => {
                              selectedPriorityTags = $$value;
                              $$settled = false;
                            }
                          },
                          {}
                        )}`;
                      }
                    })}` : ``}</div>` : ``}` : ``}`;
                  }
                })}` : `${selected == "dedicated" ? `${nconfig?.dedicated_worker != void 0 ? `<input ${!$superadmin ? "disabled" : ""} placeholder="<workspace>:<script path>" type="text"${add_attribute("value", nconfig.dedicated_worker, 0)}> ${$superadmin ? `<div class="py-2">${validate_component(Alert, "Alert").$$render(
                  $$result,
                  {
                    type: "info",
                    title: "Script's runtime setting 'dedicated worker' must be toggled on as well"
                  },
                  {},
                  {}
                )}</div> <p class="text-2xs text-tertiary mt-2" data-svelte-h="svelte-18akamv">Workers will get killed upon detecting this setting change. It is assumed they are in
						an environment where the supervisor will restart them. Upon restart, they will pick the
						new dedicated worker config.</p>` : ``}` : ``}` : ``}`} <div class="mt-8"></div> ${validate_component(Section, "Section").$$render(
                  $$result,
                  {
                    label: "Python runtime settings",
                    collapsable: true,
                    tooltip: "Add Python runtime specific settings like additional python paths and PIP local dependencies"
                  },
                  {},
                  {
                    default: () => {
                      return `<div class="flex flex-col gap-3 gap-y-2 pb-2 max-w"><span class="text-sm text-primary" data-svelte-h="svelte-1hd0acm">Additional Python Paths</span> ${each(nconfig.additional_python_paths ?? [], (additional_python_path, i) => {
                        return `<div class="flex gap-1 items-center"><input type="text" ${!$superadmin ? "disabled" : ""} placeholder="/path/to/python3.X/site-packages"${add_attribute("value", additional_python_path, 0)}> ${$superadmin ? `<button class="rounded-full bg-surface/60 hover:bg-gray-200" aria-label="Clear">${validate_component(X, "X").$$render($$result, { size: 14 }, {}, {})} </button>` : ``} </div>`;
                      })} ${$superadmin ? `<div class="flex">${validate_component(Button, "Button").$$render(
                        $$result,
                        {
                          variant: "contained",
                          color: "blue",
                          size: "xs",
                          startIcon: { icon: Plus }
                        },
                        {},
                        {
                          default: () => {
                            return `Add Additional Python Path`;
                          }
                        }
                      )}</div>` : ``} <span class="text-sm text-primary" data-svelte-h="svelte-1osiwt6">PIP local dependencies</span> ${each(nconfig.pip_local_dependencies ?? [], (pip_local_dependency, i) => {
                        return `<div class="flex gap-1 items-center"><input ${!$superadmin ? "disabled" : ""} type="text" placeholder="httpx"${add_attribute("value", pip_local_dependency, 0)}> ${$superadmin ? `<button class="rounded-full bg-surface/60 hover:bg-gray-200" aria-label="Clear">${validate_component(X, "X").$$render($$result, { size: 14 }, {}, {})} </button>` : ``} </div>`;
                      })} ${$superadmin ? `<div class="flex">${validate_component(Button, "Button").$$render(
                        $$result,
                        {
                          variant: "contained",
                          color: "blue",
                          size: "xs",
                          startIcon: { icon: Plus }
                        },
                        {},
                        {
                          default: () => {
                            return `Add PIP local dependency`;
                          }
                        }
                      )}</div>` : ``}</div>`;
                    }
                  }
                )} <div class="mt-8"></div> ${validate_component(Section, "Section").$$render(
                  $$result,
                  {
                    label: "Environment Variables passed to Jobs",
                    collapsable: true,
                    tooltip: "Add static and dynamic environment variables that will be passed to jobs handled by this worker group. Dynamic environment variable values will be loaded from the worker host environment variables while static environment variables will be set directly from their values below."
                  },
                  {},
                  {
                    default: () => {
                      return `<div class="flex flex-col gap-3 gap-y-2 pb-2 max-w">${each(customEnvVars, (envvar, i) => {
                        return `<div class="flex gap-1 items-center"><input ${!$superadmin ? "disabled" : ""} type="text" placeholder="ENV_VAR_NAME"${add_attribute("value", envvar.key, 0)}> ${validate_component(ToggleButtonGroup, "ToggleButtonGroup").$$render(
                          $$result,
                          {
                            disabled: !$superadmin,
                            class: "w-128",
                            selected: envvar.type
                          },
                          {
                            selected: ($$value) => {
                              envvar.type = $$value;
                              $$settled = false;
                            }
                          },
                          {
                            default: () => {
                              return `${validate_component(ToggleButton, "ToggleButton").$$render(
                                $$result,
                                {
                                  position: "left",
                                  value: "dynamic",
                                  label: "Dynamic"
                                },
                                {},
                                {}
                              )} ${validate_component(ToggleButton, "ToggleButton").$$render(
                                $$result,
                                {
                                  position: "right",
                                  value: "static",
                                  label: "Static"
                                },
                                {},
                                {}
                              )} `;
                            }
                          }
                        )} <input type="text" ${!$superadmin || envvar.type === "dynamic" ? "disabled" : ""}${add_attribute(
                          "placeholder",
                          envvar.type === "dynamic" ? "value read from worker env var" : "static value",
                          0
                        )}${add_attribute("value", envvar.value, 0)}> ${$superadmin ? `<button class="rounded-full bg-surface/60 hover:bg-gray-200" aria-label="Clear">${validate_component(X, "X").$$render($$result, { size: 14 }, {}, {})} </button>` : ``} </div>`;
                      })} ${$superadmin ? `<div class="flex">${validate_component(Button, "Button").$$render(
                        $$result,
                        {
                          variant: "contained",
                          color: "blue",
                          size: "xs",
                          startIcon: { icon: Plus }
                        },
                        {},
                        {
                          default: () => {
                            return `Add Environment Variable`;
                          }
                        }
                      )}</div>` : ``}</div> ${!superadmin ? `<div class="flex flex-wrap items-center gap-1 pt-2">${validate_component(Button, "Button").$$render(
                        $$result,
                        {
                          variant: "contained",
                          color: "light",
                          size: "xs"
                        },
                        {},
                        {
                          default: () => {
                            return `AWS env var preset ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                              default: () => {
                                return `${escape(`${aws_env_vars_preset.join(", ")} - see https://docs.aws.amazon.com/fr_fr/cli/latest/userguide/cli-configure-envvars.html for more options`)}`;
                              }
                            })}`;
                          }
                        }
                      )} ${validate_component(Button, "Button").$$render(
                        $$result,
                        {
                          variant: "contained",
                          color: "light",
                          size: "xs"
                        },
                        {},
                        {
                          default: () => {
                            return `SSL env var preset ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                              default: () => {
                                return `${escape(`${ssl_env_vars_preset.join(", ")}`)}`;
                              }
                            })}`;
                          }
                        }
                      )}</div>` : ``}`;
                    }
                  }
                )} <div class="mt-8"></div> ${validate_component(Section, "Section").$$render(
                  $$result,
                  {
                    label: "Init Script",
                    tooltip: "Bash scripts run at start of the workers. More lightweight than having to require the worker images at the cost of being run on every start."
                  },
                  {},
                  {
                    default: () => {
                      return `<div class="flex gap-4 py-2 pb-6 items-baseline w-full"><div class="border w-full h-40">${``} ${validate_component(Editor, "Editor").$$render(
                        $$result,
                        {
                          disabled: !$superadmin,
                          class: "flex flex-1 grow h-full w-full",
                          automaticLayout: true,
                          lang: "shell",
                          scriptLang: "bash",
                          useWebsockets: false,
                          fixedOverflowWidgets: false,
                          listenEmptyChanges: true,
                          code: config?.init_bash ?? ""
                        },
                        {},
                        {}
                      )}</div></div>`;
                    }
                  }
                )}`;
              }
            }
          )}`;
        }
      }
    )} <div class="flex gap-2 items-center justify-end flex-row my-2">${$superadmin ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "light",
        size: "xs",
        startIcon: {
          icon: config == void 0 ? Plus : Settings
        }
      },
      {},
      {
        default: () => {
          return `<div class="flex flex-row gap-1 items-center">${escape(config == void 0 ? "Create" : "Edit")} config</div>`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "light",
        size: "xs",
        startIcon: { icon: Copy }
      },
      {},
      {
        default: () => {
          return `Copy config`;
        }
      }
    )} ${config ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "light",
        size: "xs",
        startIcon: { icon: Trash },
        btnClasses: "text-red-400"
      },
      {},
      {
        default: () => {
          return `Delete config`;
        }
      }
    )}` : ``} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "light",
        size: "xs",
        btnClasses: "text-red-400",
        startIcon: { icon: Refresh_ccw }
      },
      {},
      {
        default: () => {
          return `Clean cache`;
        }
      }
    )}` : `${config ? `${validate_component(Button, "Button").$$render($$result, { color: "light", size: "xs" }, {}, {
      default: () => {
        return `<div class="flex flex-row gap-1 items-center" data-svelte-h="svelte-wra0to">config</div>`;
      }
    })}` : ``}`}</div>`;
  } while (!$$settled);
  $$unsubscribe_superadmin();
  $$unsubscribe_enterpriseLicense();
  return $$rendered;
});
const splitter = "_%%%_";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let worker_group;
  let $superadmin, $$unsubscribe_superadmin;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_superadmin = subscribe(superadmin, (value) => $superadmin = value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  let workers = void 0;
  let workerGroups = void 0;
  let groupedWorkers = [];
  let customTags = void 0;
  function groupWorkers(workers2, workerGroups2) {
    if (!workers2 && !workerGroups2) {
      return [];
    }
    let grouped = groupBy(groupBy(workers2 ?? [], (wp) => wp.worker_instance + splitter + wp.worker_group, (wp) => wp.worker), (x) => x[0]?.split(splitter)?.[1], (x) => x[0]?.split(splitter)?.[0]).sort((a, b) => b[1].length - a[1].length);
    Object.keys(workerGroups2 ?? {}).forEach((group) => {
      if (!grouped.some((x) => x[0] == group)) {
        grouped.push([group, []]);
      }
    });
    return grouped;
  }
  let timeSinceLastPing = 0;
  async function loadWorkers() {
    try {
      workers = await WorkerService.listWorkers({ perPage: 1e3, pingSince: 300 });
      timeSinceLastPing = 0;
    } catch (err) {
      sendUserToast(`Could not load workers: ${err}`, true);
    }
  }
  async function loadWorkerGroups() {
    try {
      workerGroups = Object.fromEntries((await ConfigService.listWorkerGroups()).map((x) => [x.name.substring(8), x.config]));
    } catch (err) {
      sendUserToast(`Could not load worker groups: ${err}`, true);
    }
  }
  async function loadCustomTags() {
    try {
      customTags = await WorkerService.getCustomTags() ?? [];
    } catch (err) {
      sendUserToast(`Could not load global cache: ${err}`, true);
    }
  }
  let defaultTagPerWorkspace = void 0;
  let defaultTagWorkspaces = void 0;
  async function loadDefaultTagsPerWorkspace() {
    try {
      defaultTagPerWorkspace = await WorkerService.isDefaultTagsPerWorkspace();
      defaultTagWorkspaces = await SettingService.getGlobal({ key: DEFAULT_TAGS_WORKSPACES_SETTING });
    } catch (err) {
      sendUserToast(`Could not load default tag per workspace setting: ${err}`, true);
    }
  }
  loadWorkers();
  loadWorkerGroups();
  loadCustomTags();
  onDestroy(() => {
  });
  let newConfigName = "";
  let importConfigDrawer = void 0;
  let importConfigCode = "";
  let queueMetricsDrawer;
  let selectedTab = "default";
  function updateSelectedTabIfDefaultDoesNotExist() {
    if (selectedTab == "default" && !workerGroups?.hasOwnProperty("default")) {
      selectedTab = Object.keys(workerGroups ?? {})[0] ?? "default";
    }
  }
  let search = "";
  function filterWorkerGroupByNames(worker_group2, search2) {
    if (!worker_group2) {
      return void 0;
    }
    {
      return worker_group2;
    }
  }
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    groupedWorkers = groupWorkers(workers, workerGroups);
    $superadmin && loadDefaultTagsPerWorkspace();
    workerGroups && selectedTab == "default" && updateSelectedTabIfDefaultDoesNotExist();
    worker_group = filterWorkerGroupByNames(groupedWorkers?.find((x) => x?.[0] == selectedTab));
    $$rendered = `${$superadmin ? `${validate_component(QueueMetricsDrawer, "QueueMetricsDrawer").$$render(
      $$result,
      { drawer: queueMetricsDrawer },
      {
        drawer: ($$value) => {
          queueMetricsDrawer = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "800px", this: importConfigDrawer },
      {
        this: ($$value) => {
          importConfigDrawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Import groups config from YAML" }, {}, {
            actions: () => {
              return `${validate_component(Button, "Button").$$render($$result, { size: "sm", disabled: !importConfigCode }, {}, {
                default: () => {
                  return `Import`;
                }
              })} `;
            },
            default: () => {
              return `${validate_component(SimpleEditor, "SimpleEditor").$$render(
                $$result,
                {
                  lang: "yaml",
                  class: "h-full",
                  fixedOverflowWidgets: false,
                  code: importConfigCode
                },
                {
                  code: ($$value) => {
                    importConfigCode = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })}`;
        }
      }
    )} ${validate_component(CenteredPage, "CenteredPage").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(PageHeader, "PageHeader").$$render(
          $$result,
          {
            title: "Workers",
            tooltip: "The workers are the dutiful servants that execute the jobs.",
            documentationLink: "https://www.windmill.dev/docs/core_concepts/worker_groups"
          },
          {},
          {
            default: () => {
              return `${$superadmin ? `<div class="flex flex-row-reverse w-full pb-2 items-center gap-4"><div>${validate_component(AssignableTags, "AssignableTags").$$render($$result, {}, {}, {})}</div> <div>${validate_component(DefaultTags, "DefaultTags").$$render(
                $$result,
                {
                  defaultTagPerWorkspace,
                  defaultTagWorkspaces
                },
                {
                  defaultTagPerWorkspace: ($$value) => {
                    defaultTagPerWorkspace = $$value;
                    $$settled = false;
                  },
                  defaultTagWorkspaces: ($$value) => {
                    defaultTagWorkspaces = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div> <div>${validate_component(Button, "Button").$$render(
                $$result,
                {
                  size: "xs",
                  color: "dark",
                  startIcon: { icon: Line_chart }
                },
                {},
                {
                  default: () => {
                    return `Queue metrics`;
                  }
                }
              )}</div></div>` : ``}`;
            }
          }
        )} ${workers != void 0 ? `${groupedWorkers.length == 0 ? `<p data-svelte-h="svelte-qfy6p3">No workers seem to be available</p>` : ``} <div class="py-4 w-full flex justify-between"><h4>${escape(groupWorkers?.length)} Worker Groups ${validate_component(Tooltip, "Tooltip").$$render(
          $$result,
          {
            documentationLink: "https://www.windmill.dev/docs/core_concepts/worker_groups"
          },
          {},
          {
            default: () => {
              return `Worker groups are groups of workers that share a config and are meant to be identical.
					Worker groups are meant to be used with tags. Tags can be assigned to scripts and flows
					and can be seen as dedicated queues. Only the corresponding`;
            }
          }
        )}</h4> <div></div> ${$superadmin ? `<div class="flex flex-row items-center">${validate_component(Popup, "Popup").$$render(
          $$result,
          {
            floatingConfig: {
              strategy: "absolute",
              placement: "bottom-end"
            },
            containerClasses: "border rounded-lg shadow-lg p-4 bg-surface"
          },
          {},
          {
            button: () => {
              return `<div class="flex items-center gap-2">${validate_component(Button, "Button").$$render(
                $$result,
                {
                  size: "sm",
                  variant: "border",
                  startIcon: { icon: File_json },
                  color: "dark"
                },
                {},
                {
                  default: () => {
                    return `<span class="hidden md:block" data-svelte-h="svelte-r7cxio">Copy groups config</span>`;
                  }
                }
              )} ${validate_component(Button, "Button").$$render(
                $$result,
                {
                  size: "sm",
                  startIcon: { icon: Plus },
                  nonCaptureEvent: true,
                  dropdownItems: $enterpriseLicense ? [
                    {
                      label: "Import groups config from YAML",
                      onClick: () => {
                        importConfigDrawer?.toggleDrawer?.();
                      }
                    }
                  ] : void 0
                },
                {},
                {
                  default: () => {
                    return `<span class="hidden md:block" data-svelte-h="svelte-1mwei9y">New group config</span> ${validate_component(Tooltip, "Tooltip").$$render($$result, { light: true }, {}, {
                      default: () => {
                        return `Worker Group configs are propagated to every workers in the worker group`;
                      }
                    })}`;
                  }
                }
              )}</div> `;
            },
            default: () => {
              return `<div class="flex flex-col gap-2"><input class="mr-2 h-full" placeholder="New group name"${add_attribute("value", newConfigName, 0)}> ${!$enterpriseLicense ? `<div class="flex items-center whitespace-nowrap text-yellow-600 gap-2">${validate_component(Alert_triangle, "AlertTriangle").$$render($$result, { size: 16 }, {}, {})}
									EE only</div>` : ``} ${validate_component(Button, "Button").$$render(
                $$result,
                {
                  size: "sm",
                  startIcon: { icon: Plus },
                  disabled: !newConfigName
                },
                {},
                {
                  default: () => {
                    return `Create`;
                  }
                }
              )}</div>`;
            }
          }
        )}</div> ` : ``}</div> ${(groupedWorkers ?? []).length > 5 ? `<div class="flex gap-2 items-center"><div class="text-secondary text-sm" data-svelte-h="svelte-z5gau8">Worker group:</div> ${validate_component(SimpleAutocomplete, "AutoComplete").$$render(
          $$result,
          {
            noInputStyles: true,
            items: groupedWorkers.map((x) => x[0]),
            hideArrow: true,
            inputClassName: 'flex !font-gray-600 !font-primary !bg-surface-primary"',
            dropdownClassName: "!text-sm !py-2 !rounded-sm  !border-gray-200 !border !shadow-md",
            className: "!font-gray-600 !font-primary !bg-surface-primary",
            selectedItem: selectedTab
          },
          {
            selectedItem: ($$value) => {
              selectedTab = $$value;
              $$settled = false;
            }
          },
          {}
        )} </div>` : `${validate_component(Tabs, "Tabs").$$render(
          $$result,
          { selected: selectedTab },
          {
            selected: ($$value) => {
              selectedTab = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `${each(groupedWorkers.map((x) => x[0]), (name) => {
                let worker_group2 = groupedWorkers.find((x) => x[0] == name);
                return ` ${worker_group2 ? (() => {
                  let activeWorkers = worker_group2?.[1].flatMap((x) => x[1]?.filter((y) => (y.last_ping ?? 0) < 15));
                  return ` ${validate_component(Tab, "Tab").$$render($$result, { value: worker_group2[0] }, {}, {
                    default: () => {
                      return `${escape(`${worker_group2[0]} - ${pluralize(activeWorkers?.length, "worker")}`)} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                        default: () => {
                          return `Number of workers active in the last 15s`;
                        }
                      })} `;
                    }
                  })}`;
                })() : `${validate_component(Tab, "Tab").$$render($$result, { value: name }, {}, {
                  default: () => {
                    return `${escape(name)} (0 worker)
						`;
                  }
                })}`}`;
              })}`;
            }
          }
        )}`} <div>${worker_group ? (() => {
          let config = (workerGroups ?? {})[worker_group[0]], activeWorkers = worker_group?.[1].flatMap((x) => x[1]?.filter((y) => (y.last_ping ?? 0) < 15));
          return `  ${validate_component(WorkspaceGroup, "WorkspaceGroup").$$render(
            $$result,
            {
              customTags,
              name: worker_group[0],
              config,
              activeWorkers: activeWorkers?.length ?? 0,
              defaultTagPerWorkspace
            },
            {},
            {}
          )} <div class="flex flex-row items-center gap-2 relative my-2"><input class="max-w-80 border rounded-md !pl-8" placeholder="Search workers by name..."${add_attribute("value", search, 0)}> ${validate_component(Search, "Search").$$render($$result, { class: "absolute left-2 ", size: 14 }, {}, {})}</div> ${worker_group?.[1].length == 0 && search ? `<div class="text-xs text-tertiary" data-svelte-h="svelte-1j4f7o1">No workers found. Reset the search to see all workers.</div>` : `${validate_component(DataTable, "DataTable").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                default: () => {
                  return `<tr>${validate_component(Cell, "Cell").$$render($$result, { head: true, first: true }, {}, {
                    default: () => {
                      return `Worker`;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, { head: true }, {}, {
                    default: () => {
                      return `<div class="flex flex-row items-center gap-1">Worker Tags
										${validate_component(Tooltip, "Tooltip").$$render(
                        $$result,
                        {
                          documentationLink: "https://www.windmill.dev/docs/core_concepts/worker_groups#assign-custom-worker-groups"
                        },
                        {},
                        {
                          default: () => {
                            return `If defined, the workers only pull jobs with the same corresponding tag`;
                          }
                        }
                      )}</div>`;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, { head: true }, {}, {
                    default: () => {
                      return `Last ping`;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, { head: true }, {}, {
                    default: () => {
                      return `Worker start`;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, { head: true }, {}, {
                    default: () => {
                      return `Jobs ran`;
                    }
                  })} ${(!config || config?.dedicated_worker == void 0) && $superadmin ? `${validate_component(Cell, "Cell").$$render($$result, { head: true }, {}, {
                    default: () => {
                      return `Current job`;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, { head: true }, {}, {
                    default: () => {
                      return `Occupancy rate`;
                    }
                  })}` : ``} ${validate_component(Cell, "Cell").$$render($$result, { head: true }, {}, {
                    default: () => {
                      return `Memory usage<br>(Windmill)`;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, { head: true }, {}, {
                    default: () => {
                      return `Limits`;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, { head: true }, {}, {
                    default: () => {
                      return `Version`;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, { head: true, last: true }, {}, {
                    default: () => {
                      return `Liveness`;
                    }
                  })}</tr>`;
                }
              })} <tbody class="divide-y">${each(worker_group[1], ([section, workers2]) => {
                return `<tr class="border-t">${validate_component(Cell, "Cell").$$render(
                  $$result,
                  {
                    first: true,
                    colspan: (!config || config?.dedicated_worker == void 0) && $superadmin ? 11 : 9,
                    scope: "colgroup",
                    class: "bg-surface-secondary/30 !py-1 border-b !text-xs"
                  },
                  {},
                  {
                    default: () => {
                      return `<div class="flex flex-row w-full"><div class="min-w-64">Host:
												<span class="font-semibold">${escape(section?.split(splitter)?.[0])}</span></div> <span class="ml-4" data-svelte-h="svelte-1uyqhyc">IP:</span> <span class="font-semibold">${escape(workers2[0].ip)}</span> ${workers2?.length > 1 ? `<span class="font-semibold ml-8">${escape(workers2?.length)} Workers</span>` : ``}</div> `;
                    }
                  }
                )}</tr> ${workers2 ? `${each(workers2, ({ worker, custom_tags, last_ping, started_at, jobs_executed, current_job_id, current_job_workspace_id, occupancy_rate, wm_version, vcpus, memory, memory_usage, wm_memory_usage }) => {
                  return `<tr>${validate_component(Cell, "Cell").$$render($$result, { first: true }, {}, {
                    default: () => {
                      return `${escape(worker)}`;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${custom_tags && custom_tags?.length > 2 ? `${escape(truncate(custom_tags?.join(", ") ?? "", 10))} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(custom_tags?.join(", "))}`;
                        }
                      })}` : `${escape(custom_tags?.join(", ") ?? "")}`} `;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(last_ping != void 0 ? last_ping + timeSinceLastPing : -1)}s ago`;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(displayDate(started_at))}`;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(jobs_executed)}`;
                    }
                  })} ${(!config || config?.dedicated_worker == void 0) && $superadmin ? `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${current_job_id ? `<a${add_attribute("href", `/run/${current_job_id}?workspace=${current_job_workspace_id}`, 0)}>View job</a> <br>
														(workspace ${escape(current_job_workspace_id)})` : ``} `;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(Math.ceil((occupancy_rate ?? 0) * 100))}%
												`;
                    }
                  })}` : ``} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="flex flex-col gap-1"><div>${escape(memory_usage ? Math.round(memory_usage / 1024 / 1024) + "MB" : "--")}</div> <div>(${escape(wm_memory_usage ? Math.round(wm_memory_usage / 1024 / 1024) + "MB" : "--")})
													</div></div> `;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="flex flex-col gap-1"><div>${escape(vcpus ? (vcpus / 1e5).toFixed(1) + " vCPUs" : "--")}</div> <div>${escape(memory ? Math.round(memory / 1024 / 1024) + "MB" : "--")} </div></div> `;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `<div class="!text-2xs">${escape(wm_version.split("-")[0])}${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(wm_version)}`;
                        }
                      })}</div> `;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, { last: true }, {}, {
                    default: () => {
                      return `${validate_component(Badge, "Badge").$$render(
                        $$result,
                        {
                          color: last_ping != void 0 ? last_ping < 60 ? "green" : "red" : "gray"
                        },
                        {},
                        {
                          default: () => {
                            return `${escape(last_ping != void 0 ? last_ping < 60 ? "Alive" : "Dead" : "Unknown")} `;
                          }
                        }
                      )} `;
                    }
                  })} </tr>`;
                })}` : ``}`;
              })}</tbody>`;
            }
          })}`}`;
        })() : (() => {
          let worker_group2 = Object.entries(workerGroups ?? {}).filter((x) => !groupedWorkers.some((y) => y[0] == x[0])).find((x) => x[0] == selectedTab);
          return ` ${worker_group2 ? `${validate_component(WorkspaceGroup, "WorkspaceGroup").$$render(
            $$result,
            {
              customTags,
              name: worker_group2[0],
              config: worker_group2[1],
              activeWorkers: 0
            },
            {},
            {}
          )} <div class="text-xs text-tertiary" data-svelte-h="svelte-z4p1zu">No workers currently in this worker group</div>` : ``}`;
        })()}</div> <div class="pb-4"></div>` : `<div class="flex flex-col">${each(new Array(4), (_) => {
          return `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[8], 1] }, {}, {})}`;
        })}</div>`}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_superadmin();
  $$unsubscribe_enterpriseLicense();
  return $$rendered;
});
export {
  Page as default
};
