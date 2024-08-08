import { c as create_ssr_component, s as subscribe, v as validate_component, e as escape, a as set_store_value } from "../../../../../../../chunks/ssr.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import { W as WorkspaceService, F as FlowService, J as JobService } from "../../../../../../../chunks/services.gen.js";
import { A as ALL_DEPLOYABLE, a as canWrite, b as emptyString, f as defaultIfEmptyString, B as Button, i as isDeployable, s as sendUserToast } from "../../../../../../../chunks/toast.js";
import { D as DetailPageLayout, C as ClipboardPanel, a as CliHelpBox, R as RunPageSchedules, W as WebhooksPanel, b as RunForm, c as DetailPageHeader, d as createAppFromFlow, S as Server } from "../../../../../../../chunks/createAppFromScript.js";
import { g as goto } from "../../../../../../../chunks/navigation.js";
import { b as base } from "../../../../../../../chunks/base.js";
import { A as Alert } from "../../../../../../../chunks/Alert.js";
import { B as Badge } from "../../../../../../../chunks/Badge.js";
/* empty css                                                               */
import "../../../../../../../chunks/index2.js";
import "../../../../../../../chunks/common.js";
import { S as Skeleton } from "../../../../../../../chunks/Skeleton.js";
import { M as MoveDrawer, A as Archive } from "../../../../../../../chunks/MoveDrawer.js";
import { S as ShareModal, a as Share } from "../../../../../../../chunks/ShareModal.js";
import { u as userStore, w as workspaceStore, e as enterpriseLicense } from "../../../../../../../chunks/stores2.js";
import { D as DeployWorkspaceDrawer } from "../../../../../../../chunks/DeployWorkspaceDrawer.js";
import { S as SavedInputs } from "../../../../../../../chunks/SavedInputs.js";
import { T as TimeAgo, F as FlowGraphViewer } from "../../../../../../../chunks/FlowGraphViewerStep.js";
import { S as SchemaViewer } from "../../../../../../../chunks/SchemaViewer.js";
import { i as importStore } from "../../../../../../../chunks/store.js";
/* empty css                                                                       */
import "../../../../../../../chunks/index3.js";
/* empty css                                                                            */
import "../../../../../../../chunks/scripts.js";
/* empty css                                                                         */
import { l as loadFlowSchedule } from "../../../../../../../chunks/scheduleUtils.js";
import { G as GfmMarkdown } from "../../../../../../../chunks/SchemaForm.js";
import { F as FlowHistory } from "../../../../../../../chunks/FlowHistory.js";
import { C as Calendar } from "../../../../../../../chunks/calendar.js";
import { G as Git_fork } from "../../../../../../../chunks/git-fork.js";
import { H as History } from "../../../../../../../chunks/history2.js";
import { C as Columns } from "../../../../../../../chunks/columns.js";
import { P as Pen } from "../../../../../../../chunks/pen.js";
import { F as Folder_open } from "../../../../../../../chunks/LightweightSchemaForm.js";
import { E as Eye } from "../../../../../../../chunks/eye.js";
import { T as Trash } from "../../../../../../../chunks/Section.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let path;
  let cliCommand;
  let mainButtons;
  let $userStore, $$unsubscribe_userStore;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  let $importStore, $$unsubscribe_importStore;
  let $page, $$unsubscribe_page;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  $$unsubscribe_importStore = subscribe(importStore, (value) => $importStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let flow;
  let can_write = false;
  let shareModal;
  let scheduledForStr = void 0;
  let invisible_to_owner = void 0;
  let overrideTag = void 0;
  let previousPath = void 0;
  async function archiveFlow() {
    await FlowService.archiveFlowByPath({
      workspace: $workspaceStore,
      path,
      requestBody: { archived: !flow?.archived }
    });
    loadFlow();
  }
  async function deleteFlow() {
    await FlowService.deleteFlowByPath({ workspace: $workspaceStore, path });
    sendUserToast("Flow deleted");
    goto("/");
  }
  let schedule = void 0;
  async function loadFlow() {
    flow = await FlowService.getFlowByPath({ workspace: $workspaceStore, path });
    if (!flow.path.startsWith(`u/${$userStore?.username}`) && flow.path.split("/").length > 2) {
      invisible_to_owner = flow.visible_to_runner_only;
    }
    can_write = canWrite(flow.path, flow.extra_perms, $userStore);
    try {
      schedule = await loadFlowSchedule(path, $workspaceStore);
    } catch {
    }
  }
  let isValid = true;
  let loading = false;
  async function runFlow(scheduledForStr2, args2, invisibleToOwner, overrideTag2) {
    loading = true;
    const scheduledFor = scheduledForStr2 ? new Date(scheduledForStr2).toISOString() : void 0;
    try {
      let run = await JobService.runFlowByPath({
        workspace: $workspaceStore,
        path,
        invisibleToOwner,
        requestBody: args2,
        scheduledFor,
        tag: overrideTag2
      });
      await goto("/run/" + run + "?workspace=" + $workspaceStore);
    } catch (e) {
      throw e;
    } finally {
      loading = false;
    }
  }
  let args = void 0;
  let hash = window.location.hash;
  if (hash.length > 1) {
    try {
      let searchParams = new URLSearchParams(hash.slice(1));
      let params = [...searchParams.entries()].map(([k, v]) => [k, JSON.parse(v)]);
      args = Object.fromEntries(params);
    } catch (e) {
      console.error("Was not able to transform hash as args", e);
    }
  }
  let moveDrawer;
  let deploymentDrawer;
  let runForm;
  function getMainButtons(flow2, args2) {
    const buttons = [];
    if (flow2 && !$userStore?.operator) {
      buttons.push({
        label: "Fork",
        buttonProps: {
          href: `${base}/flows/add?template=${flow2.path}`,
          color: "light",
          size: "xs",
          startIcon: Git_fork
        }
      });
    }
    if (!flow2) {
      return buttons;
    }
    buttons.push({
      label: `View runs`,
      buttonProps: {
        href: `${base}/runs/${flow2.path}`,
        size: "xs",
        color: "light",
        startIcon: History
      }
    });
    if (!flow2 || $userStore?.operator || !can_write) {
      return buttons;
    }
    if (!$userStore?.operator) {
      buttons.push({
        label: "Build App",
        buttonProps: {
          onClick: async () => {
            const app = createAppFromFlow(flow2.path, flow2.schema);
            set_store_value(importStore, $importStore = JSON.parse(JSON.stringify(app)), $importStore);
            await goto("/apps/add?nodraft=true");
          },
          size: "xs",
          color: "light",
          startIcon: Columns
        }
      });
      buttons.push({
        label: "Edit",
        buttonProps: {
          href: `${base}/flows/edit/${path}?nodraft=true`,
          variant: "contained",
          size: "xs",
          color: "dark",
          disabled: !can_write,
          startIcon: Pen
        }
      });
    }
    return buttons;
  }
  let deployUiSettings = void 0;
  async function getDeployUiSettings() {
    if (!$enterpriseLicense) {
      deployUiSettings = ALL_DEPLOYABLE;
      return;
    }
    let settings = await WorkspaceService.getSettings({ workspace: $workspaceStore });
    deployUiSettings = settings.deploy_ui ?? ALL_DEPLOYABLE;
  }
  getDeployUiSettings();
  function getMenuItems(flow2, deployUiSettings2) {
    if (!flow2 || $userStore?.operator) return [];
    const menuItems = [];
    menuItems.push({
      label: "Share",
      onclick: () => shareModal.openDrawer(flow2?.path ?? "", "flow"),
      Icon: Share,
      disabled: !can_write
    });
    menuItems.push({
      label: "Move/Rename",
      onclick: () => moveDrawer.openDrawer(flow2?.path ?? "", flow2?.summary, "flow"),
      Icon: Folder_open
    });
    menuItems.push({
      label: "Audit logs",
      Icon: Eye,
      onclick: () => {
        goto(`/audit_logs?resource=${flow2?.path}`);
      }
    });
    if (isDeployable("flow", flow2?.path ?? "", deployUiSettings2)) {
      menuItems.push({
        label: "Deploy to staging/prod",
        onclick: () => deploymentDrawer.openDrawer(flow2?.path ?? "", "flow"),
        Icon: Server
      });
    }
    if (can_write) {
      menuItems.push({
        label: "Deployments",
        onclick: () => flowHistory?.open(),
        Icon: History
      });
      menuItems.push({
        label: flow2.archived ? "Unarchive" : "Archive",
        onclick: () => flow2?.path && archiveFlow(),
        Icon: Archive,
        color: "red"
      });
      menuItems.push({
        label: "Delete",
        onclick: () => flow2?.path && deleteFlow(),
        Icon: Trash,
        color: "red"
      });
    }
    return menuItems;
  }
  let stepDetail = void 0;
  let token = "TOKEN_TO_CREATE";
  let detailSelected = "saved_inputs";
  let triggerSelected = "webhooks";
  let flowHistory = void 0;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    path = $page.params.path;
    cliCommand = `wmill flow run ${flow?.path} -d '${JSON.stringify(args)}'`;
    {
      {
        if ($workspaceStore && $userStore && $page.params.path) {
          if (previousPath !== path) {
            previousPath = path;
            loadFlow();
          }
        }
      }
    }
    mainButtons = getMainButtons(flow);
    $$rendered = `${validate_component(Skeleton, "Skeleton").$$render(
      $$result,
      {
        class: "!max-w-7xl !px-4 sm:!px-6 md:!px-8",
        loading: !flow,
        layout: [0.75, [2, 0, 2], 2.25, [{ h: 1.5, w: 40 }], 0.2, [{ h: 1, w: 30 }]]
      },
      {},
      {}
    )}  ${validate_component(DeployWorkspaceDrawer, "DeployWorkspaceDrawer").$$render(
      $$result,
      { this: deploymentDrawer },
      {
        this: ($$value) => {
          deploymentDrawer = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(ShareModal, "ShareModal").$$render(
      $$result,
      { this: shareModal },
      {
        this: ($$value) => {
          shareModal = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(MoveDrawer, "MoveDrawer").$$render(
      $$result,
      { this: moveDrawer },
      {
        this: ($$value) => {
          moveDrawer = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${flow ? `${validate_component(FlowHistory, "FlowHistory").$$render(
      $$result,
      { path: flow.path, this: flowHistory },
      {
        this: ($$value) => {
          flowHistory = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${flow ? `${validate_component(DetailPageLayout, "DetailPageLayout").$$render(
      $$result,
      {
        isOperator: $userStore?.operator,
        flow_json: {
          value: flow.value,
          summary: flow.summary,
          description: flow.description,
          schema: flow.schema
        },
        hasStepDetails: Boolean(stepDetail),
        triggerSelected,
        selected: detailSelected
      },
      {
        triggerSelected: ($$value) => {
          triggerSelected = $$value;
          $$settled = false;
        },
        selected: ($$value) => {
          detailSelected = $$value;
          $$settled = false;
        }
      },
      {
        flow_step: () => {
          return `${``} `;
        },
        cli: () => {
          return `<div class="p-2">${validate_component(ClipboardPanel, "ClipboardPanel").$$render($$result, { content: cliCommand }, {}, {})} ${validate_component(CliHelpBox, "CliHelpBox").$$render($$result, {}, {}, {})}</div> `;
        },
        schedule: () => {
          return `${validate_component(RunPageSchedules, "RunPageSchedules").$$render(
            $$result,
            {
              isFlow: true,
              path: flow.path ?? "",
              can_write
            },
            {},
            {}
          )} `;
        },
        webhooks: () => {
          return `${validate_component(WebhooksPanel, "WebhooksPanel").$$render(
            $$result,
            {
              scopes: [`run:flow/${flow?.path}`],
              path: flow?.path,
              isFlow: true,
              args,
              token
            },
            {
              token: ($$value) => {
                token = $$value;
                $$settled = false;
              }
            },
            {}
          )} `;
        },
        details: () => {
          return `<div class="p-1">${validate_component(SchemaViewer, "SchemaViewer").$$render($$result, { schema: flow.schema }, {}, {})}</div> `;
        },
        save_inputs: () => {
          return `${validate_component(SavedInputs, "SavedInputs").$$render(
            $$result,
            {
              flowPath: flow?.path,
              isValid,
              args: args ?? {}
            },
            {},
            {}
          )} `;
        },
        form: () => {
          return `<div class="flex-col flex h-full justify-between"><div class="p-8 w-full max-w-3xl mx-auto gap-2 bg-surface"><div class="flex flex-col gap-2 mb-8">${!emptyString(flow?.description) ? `${validate_component(GfmMarkdown, "GfmMarkdown").$$render(
            $$result,
            {
              md: defaultIfEmptyString(flow?.description, "No description")
            },
            {},
            {}
          )}` : ``}</div> ${``} ${validate_component(RunForm, "RunForm").$$render(
            $$result,
            {
              viewKeybinding: true,
              loading,
              autofocus: true,
              detailed: false,
              runnable: flow,
              runAction: runFlow,
              scheduledForStr,
              invisible_to_owner,
              overrideTag,
              isValid,
              args,
              this: runForm
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
              isValid: ($$value) => {
                isValid = $$value;
                $$settled = false;
              },
              args: ($$value) => {
                args = $$value;
                $$settled = false;
              },
              this: ($$value) => {
                runForm = $$value;
                $$settled = false;
              }
            },
            {}
          )} <div class="py-10"></div> ${!emptyString(flow.summary) ? `<div class="mb-2"><span class="!text-tertiary">${escape(flow.path)}</span></div>` : ``} <div class="flex flex-row gap-x-2 flex-wrap items-center"><span class="text-sm text-tertiary">Edited ${validate_component(TimeAgo, "TimeAgo").$$render(
            $$result,
            {
              withDate: true,
              date: flow.edited_at ?? ""
            },
            {},
            {}
          )} by ${escape(flow.edited_by)}</span> ${flow.archived ? `<div class=""></div> ${validate_component(Alert, "Alert").$$render($$result, { type: "error", title: "Archived" }, {}, {
            default: () => {
              return `This flow was archived`;
            }
          })}` : ``}</div></div> <div class="mt-8">${validate_component(FlowGraphViewer, "FlowGraphViewer").$$render(
            $$result,
            {
              download: true,
              flow,
              overflowAuto: true,
              noSide: true
            },
            {},
            {}
          )}</div></div> `;
        },
        header: () => {
          return `${validate_component(DetailPageHeader, "DetailPageHeader").$$render(
            $$result,
            {
              mainButtons,
              menuItems: getMenuItems(flow, deployUiSettings),
              title: defaultIfEmptyString(flow.summary, flow.path),
              scriptOrFlowPath: flow.path,
              errorHandlerKind: "flow",
              tag: flow.tag,
              errorHandlerMuted: flow.ws_error_handler_muted
            },
            {
              errorHandlerMuted: ($$value) => {
                flow.ws_error_handler_muted = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${flow?.value?.priority != void 0 ? `<div class="hidden md:block">${validate_component(Badge, "HeaderBadge").$$render(
                  $$result,
                  {
                    color: "blue",
                    variant: "outlined",
                    size: "xs"
                  },
                  {},
                  {
                    default: () => {
                      return `${escape(`Priority: ${flow?.value?.priority}`)}`;
                    }
                  }
                )}</div>` : ``} ${flow?.value?.concurrent_limit != void 0 && flow?.value?.concurrency_time_window_s != void 0 ? `<div class="hidden md:block">${validate_component(Badge, "HeaderBadge").$$render(
                  $$result,
                  {
                    color: "gray",
                    variant: "outlined",
                    size: "xs"
                  },
                  {},
                  {
                    default: () => {
                      return `${escape(`Concurrency limit: ${flow?.value?.concurrent_limit} runs every ${flow?.value?.concurrency_time_window_s}s`)}`;
                    }
                  }
                )}</div>` : ``} ${schedule?.enabled ? `${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    btnClasses: "inline-flex",
                    startIcon: { icon: Calendar },
                    variant: "contained",
                    color: "light",
                    size: "xs"
                  },
                  {},
                  {
                    default: () => {
                      return `${escape(schedule.cron ?? "")}`;
                    }
                  }
                )}` : ``}`;
              }
            }
          )}`;
        }
      }
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_userStore();
  $$unsubscribe_workspaceStore();
  $$unsubscribe_enterpriseLicense();
  $$unsubscribe_importStore();
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
