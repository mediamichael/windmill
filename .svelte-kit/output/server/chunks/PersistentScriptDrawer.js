import { c as create_ssr_component, v as validate_component, s as subscribe, d as createEventDispatcher, o as onDestroy, e as escape, f as each } from "./ssr.js";
import { I as Icon } from "./Icon.js";
import { J as JobService } from "./services.gen.js";
import "./index2.js";
import { B as Badge } from "./Badge.js";
import { B as Button, y as sleep, j as displayDate } from "./toast.js";
import { D as Drawer, a as DrawerContent } from "./DrawerContent.js";
import "./common.js";
import { w as workspaceStore } from "./stores2.js";
import { b as base } from "./base.js";
import { T as TableCustom } from "./TableCustom.js";
import { R as Refresh_cw } from "./refresh-cw.js";
import { P as Play } from "./play.js";
import { H as Hourglass } from "./hourglass.js";
const Activity = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M22 12h-4l-3 9L9 3l-3 9H2" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "activity" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const PersistentScriptDrawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  createEventDispatcher();
  let drawer;
  let script;
  let loadQueuedJobs = true;
  let queuedJobsLoading = false;
  let queuedJobs = [];
  async function continuouslyLoadQueuedJobs() {
    while (loadQueuedJobs) {
      loadQueuedJobsOnce();
      await sleep(3 * 1e3);
    }
  }
  async function loadQueuedJobsOnce() {
    if (queuedJobsLoading) {
      return;
    }
    const timeStart = (/* @__PURE__ */ new Date()).getTime();
    queuedJobsLoading = true;
    let qjs = await JobService.listQueue({
      workspace: $workspaceStore ?? "",
      orderDesc: false,
      scriptPathExact: script.path
    });
    let loadingQueuedJobs = [];
    for (const qj of qjs) {
      loadingQueuedJobs.push({
        status: qj.started_at ? "running" : "queued",
        jobId: qj.id,
        scriptHash: qj.script_hash ?? "",
        scheduledFor: displayDate(qj.scheduled_for, true)
      });
    }
    queuedJobs = loadingQueuedJobs;
    const endStart = (/* @__PURE__ */ new Date()).getTime();
    setTimeout(
      () => {
        queuedJobsLoading = false;
      },
      3e3 - (endStart - timeStart)
    );
  }
  async function open(persistentScript) {
    if (persistentScript === void 0) {
      console.log("Unable to open persistent script drawer without a proper script definition");
      return;
    }
    script = persistentScript;
    loadQueuedJobs = true;
    continuouslyLoadQueuedJobs();
    drawer.openDrawer?.();
  }
  onDestroy(() => {
    loadQueuedJobs = false;
  });
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
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
              title: "Persistent script",
              overflow_y: false,
              tooltip: "Manage runs of persistent scripts. Scaling a persistent script to zero will cancel all current runs of this script based on the script path."
            },
            {},
            {
              actions: () => {
                return `<div slot="actions" class="flex gap-1">${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    color: "red",
                    disabled: queuedJobs.length === 0
                  },
                  {},
                  {
                    default: () => {
                      return `${`Scale down to 0`}`;
                    }
                  }
                )}</div>`;
              },
              default: () => {
                return `<div class="flex gap-2 items-center justify-between"><h2>Queued jobs for ${escape(script.path)}</h2> ${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    color: "light",
                    size: "md",
                    btnClasses: "w-full h-8",
                    variant: "border"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(Refresh_cw, "RefreshCw").$$render(
                        $$result,
                        {
                          class: queuedJobsLoading ? "animate-spin" : "",
                          size: 14
                        },
                        {},
                        {}
                      )}`;
                    }
                  }
                )}</div> ${validate_component(TableCustom, "TableCustom").$$render($$result, {}, {}, {
                  body: () => {
                    return `<tbody slot="body">${each(queuedJobs, ({ jobId, status, scriptHash, scheduledFor }) => {
                      return `<tr class=""><td class="text-xs"><a class="pr-3" href="${escape(base, true) + "/scripts/get/" + escape(scriptHash, true) + "?workspace=" + escape($workspaceStore, true)}" target="_blank">${escape(scriptHash)} </a></td> <td class="text-xs"><a class="pr-3" href="${escape(base, true) + "/run/" + escape(jobId, true) + "?workspace=" + escape($workspaceStore, true)}" target="_blank">${escape(jobId.substring(24))}</a></td> <td class="text-xs">${status === "running" ? `${validate_component(Badge, "Badge").$$render($$result, { color: "yellow", baseClass: "!px-1.5" }, {}, {
                        default: () => {
                          return `${validate_component(Play, "Play").$$render($$result, { size: 14 }, {}, {})} `;
                        }
                      })}` : `${validate_component(Badge, "Badge").$$render($$result, { baseClass: "!px-1.5" }, {}, {
                        default: () => {
                          return `${validate_component(Hourglass, "Hourglass").$$render($$result, { size: 14 }, {}, {})} `;
                        }
                      })}`}</td> <td class="text-xs">${escape(scheduledFor)}</td> </tr>`;
                    })}</tbody>`;
                  },
                  "header-row": () => {
                    return `<tr slot="header-row" data-svelte-h="svelte-dhbxf1"><th class="text-xs">Script Hash</th> <th class="text-xs">Job ID</th> <th class="text-xs">Status</th> <th class="text-xs">Scheduled For</th></tr>`;
                  }
                })}`;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  return $$rendered;
});
export {
  Activity as A,
  PersistentScriptDrawer as P
};
