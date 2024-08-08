import { c as create_ssr_component, e as escape, v as validate_component, s as subscribe, o as onDestroy, b as add_attribute, f as each, d as createEventDispatcher } from "../../../../../chunks/ssr.js";
import { p as page } from "../../../../../chunks/stores.js";
import { T as Tooltip } from "../../../../../chunks/Tooltip.js";
import { B as Button, j as displayDate } from "../../../../../chunks/toast.js";
import { a as Arrow_right, D as DataTable, H as Head, C as Cell } from "../../../../../chunks/Head.js";
import { g as goto } from "../../../../../chunks/navigation.js";
import { C as CalendarPicker, F as Filter } from "../../../../../chunks/CalendarPicker.js";
import { j as AuditService, U as UserService, R as ResourceService, c as ScriptService, F as FlowService, A as AppService } from "../../../../../chunks/services.gen.js";
import { w as workspaceStore, u as userStore, e as enterpriseLicense } from "../../../../../chunks/stores2.js";
import { S as SimpleAutocomplete } from "../../../../../chunks/SimpleAutocomplete.js";
import { R as Refresh_ccw } from "../../../../../chunks/refresh-ccw.js";
import { L as Loader_2 } from "../../../../../chunks/loader-2.js";
import { B as Badge } from "../../../../../chunks/Badge.js";
import { R as Row } from "../../../../../chunks/Row.js";
import { L as List_filter } from "../../../../../chunks/list-filter.js";
import "../../../../../chunks/index2.js";
import "yaml";
import "../../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import "minimatch";
/* empty css                                                         */
import { P as Popup } from "../../../../../chunks/Popup.js";
import "../../../../../chunks/common.js";
import { A as Alert } from "../../../../../chunks/Alert.js";
import { D as Drawer, a as DrawerContent } from "../../../../../chunks/DrawerContent.js";
import { S as SplitPanesWrapper } from "../../../../../chunks/SplitPanesWrapper.js";
import { S as Splitpanes, P as Pane } from "../../../../../chunks/Pane.js";
const AuditLogDetails = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { logs } = $$props;
  let { selectedId = void 0 } = $$props;
  const ViewFlowOp = ["jobs.run.flow", "flows.create", "flows.update"];
  const ViewAppOp = ["apps.create", "apps.update"];
  if ($$props.logs === void 0 && $$bindings.logs && logs !== void 0) $$bindings.logs(logs);
  if ($$props.selectedId === void 0 && $$bindings.selectedId && selectedId !== void 0) $$bindings.selectedId(selectedId);
  return `<div class="p-4 flex flex-col gap-2 border-t items-start">${selectedId ? (() => {
    let log = logs.find((e) => e.id === selectedId);
    return ` ${log ? `<span class="font-semibold text-xs leading-6" data-svelte-h="svelte-1eseilb">ID</span> <span class="text-xs">${escape(log.id)}</span> <span class="font-semibold text-xs leading-6" data-svelte-h="svelte-2rnipm">Parameters</span> <div class="text-xs p-2 bg-surface-secondary rounded-sm">${escape(JSON.stringify(log.parameters, null, 2))}</div> ${log?.parameters?.uuid ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        href: `run/${log.parameters.uuid}`,
        color: "light",
        variant: "border",
        size: "xs",
        target: "_blank"
      },
      {},
      {
        default: () => {
          return `View run`;
        }
      }
    )}` : ``} ${log.operation === "jobs.run.script" ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        href: `scripts/get/${log.resource}`,
        color: "dark",
        variant: "contained",
        size: "xs",
        target: "_blank"
      },
      {},
      {
        default: () => {
          return `View script`;
        }
      }
    )}` : ``} ${ViewFlowOp.includes(log.operation) ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        href: `flows/get/${log.resource}`,
        color: "dark",
        variant: "contained",
        size: "xs",
        target: "_blank",
        endIcon: { icon: Arrow_right }
      },
      {},
      {
        default: () => {
          return `View flow`;
        }
      }
    )}` : ``} ${ViewAppOp.includes(log.operation) ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        href: `apps/get/${log.resource}`,
        color: "dark",
        variant: "contained",
        size: "xs",
        target: "_blank",
        endIcon: { icon: Arrow_right }
      },
      {},
      {
        default: () => {
          return `View app`;
        }
      }
    )}` : ``}` : ``}`;
  })() : `<span class="text-xs" data-svelte-h="svelte-182i08k">No log selected</span>`}</div>`;
});
const AuditLogsFilters = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let usernames;
  let resources;
  let loading = false;
  let { logs = [] } = $$props;
  let { username = "all" } = $$props;
  let { pageIndex = 0 } = $$props;
  let { before = void 0 } = $$props;
  let { after = void 0 } = $$props;
  let { perPage = 100 } = $$props;
  let { operation = "all" } = $$props;
  let { resource = "all" } = $$props;
  let { actionKind = "all" } = $$props;
  async function loadLogs(username2, page2, perPage2, before2, after2, operation2, resource2, actionKind2) {
    loading = true;
    if (username2 == "all") {
      username2 = void 0;
    }
    if (operation2 == "all" || operation2 == "") {
      operation2 = void 0;
    }
    if (actionKind2 == "all" || actionKind2 == "") {
      actionKind2 = void 0;
    }
    if (resource2 == "all" || resource2 == "") {
      resource2 = void 0;
    }
    logs = await AuditService.listAuditLogs({
      workspace: $workspaceStore,
      page: page2,
      perPage: perPage2,
      before: before2,
      after: after2,
      username: username2,
      operation: operation2,
      resource: resource2,
      actionKind: actionKind2
    });
    loading = false;
  }
  async function loadUsers() {
    usernames = $userStore?.is_admin || $userStore?.is_super_admin ? await UserService.listUsernames({ workspace: $workspaceStore }) : [$userStore?.username ?? ""];
  }
  async function loadResources() {
    const r = await ResourceService.listResource({ workspace: $workspaceStore });
    const sPaths = await ScriptService.listScriptPaths({ workspace: $workspaceStore });
    const fPaths = await FlowService.listFlowPaths({ workspace: $workspaceStore });
    const a = await AppService.listApps({ workspace: $workspaceStore });
    resources = r.map((r2) => r2.path).concat(sPaths).concat(fPaths).concat(a.map((a2) => a2.path)).sort();
  }
  function updateQueryParams({ username: username2, perPage: perPage2, before: before2, after: after2, operation: operation2, resource: resource2, actionKind: actionKind2 }) {
    const queryParams = [];
    function addQueryParam(key, value) {
      if (value !== void 0 && value !== null && value !== "" && value !== "all") {
        queryParams.push(`${key}=${encodeURIComponent(value)}`);
      }
    }
    addQueryParam("username", username2);
    addQueryParam("page", 0);
    addQueryParam("perPage", perPage2);
    addQueryParam("before", before2);
    addQueryParam("after", after2);
    addQueryParam("operation", operation2);
    addQueryParam("resource", resource2);
    addQueryParam("actionKind", actionKind2);
    const query = "?" + queryParams.join("&");
    goto(query);
  }
  function updatePageQueryParams(pageIndex2) {
    const queryParams = [];
    function addQueryParam(key, value) {
      if (value !== void 0 && value !== null && value !== "" && value !== "all") {
        queryParams.push(`${key}=${encodeURIComponent(value)}`);
      }
    }
    addQueryParam("username", username);
    addQueryParam("page", pageIndex2);
    addQueryParam("perPage", perPage);
    addQueryParam("before", before);
    addQueryParam("after", after);
    addQueryParam("operation", operation);
    addQueryParam("resource", resource);
    addQueryParam("actionKind", actionKind);
    const query = "?" + queryParams.join("&");
    goto(query);
  }
  window.addEventListener("popstate", handlePopState);
  function handlePopState() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    username = urlSearchParams.get("username") ?? "all";
    pageIndex = Number(urlSearchParams.get("page")) || 1;
    before = urlSearchParams.get("before") ?? void 0;
    after = urlSearchParams.get("after") ?? void 0;
    perPage = Number(urlSearchParams.get("perPage")) || 100;
    operation = urlSearchParams.get("operation") ?? "all";
    resource = urlSearchParams.get("resource") ?? void 0;
    actionKind = urlSearchParams.get("actionKind") ?? "all";
  }
  onDestroy(() => {
    window.removeEventListener("popstate", handlePopState);
  });
  const operations = {
    JOBS_RUN: "jobs.run",
    JOBS_RUN_SCRIPT: "jobs.run.script",
    JOBS_RUN_PREVIEW: "jobs.run.preview",
    JOBS_RUN_FLOW: "jobs.run.flow",
    JOBS_RUN_FLOW_PREVIEW: "jobs.run.flow_preview",
    JOBS_RUN_SCRIPT_HUB: "jobs.run.script_hub",
    JOBS_RUN_DEPENDENCIES: "jobs.run.dependencies",
    JOBS_RUN_IDENTITY: "jobs.run.identity",
    JOBS_RUN_NOOP: "jobs.run.noop",
    JOBS_FLOW_DEPENDENCIES: "jobs.flow_dependencies",
    JOBS_APP_DEPENDENCIES: "jobs.app_dependencies",
    JOBS: "jobs",
    JOBS_CANCEL: "jobs.cancel",
    JOBS_FORCE_CANCEL: "jobs.force_cancel",
    JOBS_DISAPPROVAL: "jobs.disapproval",
    JOBS_DELETE: "jobs.delete",
    ACCOUNT_DELETE: "account.delete",
    OPENAI_REQUEST: "openai.request",
    RESOURCES_CREATE: "resources.create",
    RESOURCES_UPDATE: "resources.update",
    RESOURCES_DELETE: "resources.delete",
    RESOURCE_TYPES_CREATE: "resource_types.create",
    RESOURCE_TYPES_UPDATE: "resource_types.update",
    RESOURCE_TYPES_DELETE: "resource_types.delete",
    SCHEDULE_CREATE: "schedule.create",
    SCHEDULE_SETENABLED: "schedule.setenabled",
    SCHEDULE_EDIT: "schedule.edit",
    SCHEDULE_DELETE: "schedule.delete",
    SCRIPTS_CREATE: "scripts.create",
    SCRIPTS_UPDATE: "scripts.update",
    SCRIPTS_ARCHIVE: "scripts.archive",
    SCRIPTS_DELETE: "scripts.delete",
    USERS_CREATE: "users.create",
    USERS_DELETE: "users.delete",
    USERS_SETPASSWORD: "users.setpassword",
    USERS_UPDATE: "users.update",
    USERS_LOGIN: "users.login",
    USERS_LOGOUT: "users.logout",
    USERS_ACCEPT_INVITE: "users.accept_invite",
    USERS_DECLINE_INVITE: "users.decline_invite",
    USERS_TOKEN_CREATE: "users.token.create",
    USERS_TOKEN_DELETE: "users.token.delete",
    USERS_ADD_TO_WORKSPACE: "users.add_to_workspace",
    USERS_ADD_GLOBAL: "users.add_global",
    USERS_IMPERSONATE: "users.impersonate",
    USERS_LEAVE_WORKSPACE: "users.leave_workspace",
    OAUTH_LOGIN: "oauth.login",
    OAUTH_SIGNUP: "oauth.signup",
    VARIABLES_CREATE: "variables.create",
    VARIABLES_DELETE: "variables.delete",
    VARIABLES_UPDATE: "variables.update",
    FLOWS_CREATE: "flows.create",
    FLOWS_UPDATE: "flows.update",
    FLOWS_DELETE: "flows.delete",
    FLOWS_ARCHIVE: "flows.archive",
    APPS_CREATE: "apps.create",
    APPS_UPDATE: "apps.update",
    APPS_DELETE: "apps.delete",
    FOLDER_CREATE: "folder.create",
    FOLDER_UPDATE: "folder.update",
    FOLDER_DELETE: "folder.delete",
    FOLDER_ADD_OWNER: "folder.add_owner",
    FOLDER_REMOVE_OWNER: "folder.remove_owner",
    GROUP_CREATE: "group.create",
    GROUP_DELETE: "group.delete",
    GROUP_EDIT: "group.edit",
    GROUP_ADDUSER: "group.adduser",
    GROUP_REMOVEUSER: "group.removeuser",
    IGROUP_CREATE: "igroup.create",
    IGROUP_DELETE: "igroup.delete",
    IGROUP_ADDUSER: "igroup.adduser",
    IGROUP_REMOVEUSER: "igroup.removeuser",
    VARIABLES_DECRYPT_SECRET: "variables.decrypt_secret",
    WORKSPACES_EDIT_COMMAND_SCRIPT: "workspaces.edit_command_script",
    WORKSPACES_EDIT_DEPLOY_TO: "workspaces.edit_deploy_to",
    WORKSPACES_EDIT_AUTO_INVITE_DOMAIN: "workspaces.edit_auto_invite_domain",
    WORKSPACES_EDIT_WEBHOOK: "workspaces.edit_webhook",
    WORKSPACES_EDIT_COPILOT_CONFIG: "workspaces.edit_copilot_config",
    WORKSPACES_EDIT_ERROR_HANDLER: "workspaces.edit_error_handler",
    WORKSPACES_CREATE: "workspaces.create",
    WORKSPACES_UPDATE: "workspaces.update",
    WORKSPACES_ARCHIVE: "workspaces.archive",
    WORKSPACES_UNARCHIVE: "workspaces.unarchive",
    WORKSPACES_DELETE: "workspaces.delete"
  };
  let refresh = 1;
  if ($$props.logs === void 0 && $$bindings.logs && logs !== void 0) $$bindings.logs(logs);
  if ($$props.username === void 0 && $$bindings.username && username !== void 0) $$bindings.username(username);
  if ($$props.pageIndex === void 0 && $$bindings.pageIndex && pageIndex !== void 0) $$bindings.pageIndex(pageIndex);
  if ($$props.before === void 0 && $$bindings.before && before !== void 0) $$bindings.before(before);
  if ($$props.after === void 0 && $$bindings.after && after !== void 0) $$bindings.after(after);
  if ($$props.perPage === void 0 && $$bindings.perPage && perPage !== void 0) $$bindings.perPage(perPage);
  if ($$props.operation === void 0 && $$bindings.operation && operation !== void 0) $$bindings.operation(operation);
  if ($$props.resource === void 0 && $$bindings.resource && resource !== void 0) $$bindings.resource(resource);
  if ($$props.actionKind === void 0 && $$bindings.actionKind && actionKind !== void 0) $$bindings.actionKind(actionKind);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        if ($workspaceStore && refresh) {
          loadUsers();
          loadResources();
          loadLogs(username, pageIndex, perPage, before, after, operation, resource, actionKind);
        }
      }
    }
    {
      updateQueryParams({
        username,
        perPage,
        before,
        after,
        operation,
        resource,
        actionKind
      });
    }
    {
      updatePageQueryParams(pageIndex);
    }
    $$rendered = `<div class="flex flex-col items-center gap-6 2xl:gap-1 2xl:flex-row mt-4 xl:mt-0"><div class="flex gap-1 relative w-full"><span class="text-xs absolute -top-4" data-svelte-h="svelte-3xmg0c">After</span> <input type="text"${add_attribute("value", after ?? "After", 0)} disabled> ${validate_component(CalendarPicker, "CalendarPicker").$$render(
      $$result,
      {
        date: after,
        placement: "bottom-end",
        label: "After"
      },
      {},
      {}
    )}</div> <div class="flex gap-1 relative w-full"><span class="text-xs absolute -top-4" data-svelte-h="svelte-189a6ct">Before</span> <input type="text"${add_attribute("value", before ?? "Before", 0)} disabled> ${validate_component(CalendarPicker, "CalendarPicker").$$render(
      $$result,
      {
        label: "Before",
        placement: "bottom-end",
        date: before
      },
      {
        date: ($$value) => {
          before = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="flex gap-1 relative w-full"><span class="text-xs absolute -top-4" data-svelte-h="svelte-1or4072">Username</span> <select>${usernames ? `${$userStore?.is_admin || $userStore?.is_super_admin ? `<option selected value="all" data-svelte-h="svelte-1x8g6im">all</option>` : ``} ${each(usernames, (e) => {
      return `${e == username || $userStore?.is_admin || $userStore?.is_super_admin ? `<option${add_attribute("value", e, 0)}>${escape(e)}</option>` : `<option disabled${add_attribute("value", e, 0)}>${escape(e)}</option>`}`;
    })}` : ``}</select></div> <div class="flex gap-1 relative w-full"><span class="text-xs absolute -top-4" data-svelte-h="svelte-1eobiai">Resource</span> ${validate_component(SimpleAutocomplete, "AutoComplete").$$render(
      $$result,
      {
        noInputStyles: true,
        items: resources,
        value: resource,
        inputClassName: "!h-[34px] py-1 !text-xs !w-48",
        hideArrow: true,
        dropdownClassName: "!text-sm",
        selectedItem: resource
      },
      {
        selectedItem: ($$value) => {
          resource = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="flex gap-1 relative w-full"><span class="text-xs absolute -top-4" data-svelte-h="svelte-1vqbpd">Operation</span> <select><option selected value="all" data-svelte-h="svelte-13ir8pv">all</option>${each(Object.keys(operations), (e) => {
      return `<option${add_attribute("value", operations[e], 0)}>${escape(e)}</option>`;
    })}</select></div> <div class="flex gap-1 relative w-full"><span class="text-xs absolute -top-4" data-svelte-h="svelte-7cq53s">Action</span> <select class="!truncate"><option selected value="all" data-svelte-h="svelte-13ir8pv">all</option>${each(["Create", "Update", "Delete", "Execute"], (e) => {
      return `<option${add_attribute("value", e.toLocaleLowerCase(), 0)}>${escape(e)}</option>`;
    })}</select></div> <div class="flex flex-row gap-1">${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "contained",
        color: "light",
        size: "xs"
      },
      {},
      {
        default: () => {
          return `Clear filters`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "contained",
        color: "dark",
        size: "xs"
      },
      {},
      {
        default: () => {
          return `<div class="flex flex-row gap-1 items-center">${loading ? `${validate_component(Loader_2, "Loader2").$$render($$result, { size: 14, class: "animate-spin" }, {}, {})}` : `${validate_component(Refresh_ccw, "RefreshCcw").$$render($$result, { size: 14 }, {}, {})}`}
				Refresh</div>`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_userStore();
  return $$rendered;
});
const css = {
  code: ".no-scrollbar.svelte-1tti2gn::-webkit-scrollbar{display:none}.no-scrollbar.svelte-1tti2gn{-ms-overflow-style:none;scrollbar-width:none}",
  map: null
};
function kindToBadgeColor(kind) {
  if (kind == "Execute") {
    return "blue";
  } else if (kind == "Delete") {
    return "red";
  } else if (kind == "Update") {
    return "yellow";
  } else if (kind == "Create") {
    return "green";
  }
  return "gray";
}
const AuditLogsTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let groupedLogs;
  let { logs = [] } = $$props;
  let { pageIndex = 1 } = $$props;
  let { perPage = 100 } = $$props;
  let { actionKind = void 0 } = $$props;
  let { operation = void 0 } = $$props;
  let { selectedId = void 0 } = $$props;
  let { usernameFilter = void 0 } = $$props;
  let { resourceFilter = void 0 } = $$props;
  function groupLogsByDay(logs2) {
    const groupedLogs2 = {};
    if (!logs2) return groupedLogs2;
    for (const log of logs2) {
      const date = new Date(log.timestamp);
      const key = date.toLocaleString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
      });
      if (!groupedLogs2[key]) {
        groupedLogs2[key] = [];
      }
      groupedLogs2[key].push(log);
    }
    return groupedLogs2;
  }
  createEventDispatcher();
  if ($$props.logs === void 0 && $$bindings.logs && logs !== void 0) $$bindings.logs(logs);
  if ($$props.pageIndex === void 0 && $$bindings.pageIndex && pageIndex !== void 0) $$bindings.pageIndex(pageIndex);
  if ($$props.perPage === void 0 && $$bindings.perPage && perPage !== void 0) $$bindings.perPage(perPage);
  if ($$props.actionKind === void 0 && $$bindings.actionKind && actionKind !== void 0) $$bindings.actionKind(actionKind);
  if ($$props.operation === void 0 && $$bindings.operation && operation !== void 0) $$bindings.operation(operation);
  if ($$props.selectedId === void 0 && $$bindings.selectedId && selectedId !== void 0) $$bindings.selectedId(selectedId);
  if ($$props.usernameFilter === void 0 && $$bindings.usernameFilter && usernameFilter !== void 0) $$bindings.usernameFilter(usernameFilter);
  if ($$props.resourceFilter === void 0 && $$bindings.resourceFilter && resourceFilter !== void 0) $$bindings.resourceFilter(resourceFilter);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    groupedLogs = groupLogsByDay(logs);
    $$rendered = `${validate_component(DataTable, "DataTable").$$render(
      $$result,
      {
        currentPage: pageIndex,
        paginated: true,
        rounded: false,
        size: "sm",
        shouldHidePagination: logs?.length === 0,
        perPage
      },
      {
        perPage: ($$value) => {
          perPage = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Cell, "Cell").$$render($$result, { first: true, head: true }, {}, {
                default: () => {
                  return `ID`;
                }
              })} ${validate_component(Cell, "Cell").$$render($$result, { head: true }, {}, {
                default: () => {
                  return `Timestamp`;
                }
              })} ${validate_component(Cell, "Cell").$$render($$result, { head: true }, {}, {
                default: () => {
                  return `Username`;
                }
              })} ${validate_component(Cell, "Cell").$$render($$result, { head: true }, {}, {
                default: () => {
                  return `Operation`;
                }
              })} ${validate_component(Cell, "Cell").$$render($$result, { head: true, last: true }, {}, {
                default: () => {
                  return `Resource`;
                }
              })}`;
            }
          })} ${logs?.length > 0 ? `<tbody class="divide-y">${each(Object.entries(groupedLogs), ([date, logsByDay]) => {
            return `<tr class="border-t">${validate_component(Cell, "Cell").$$render(
              $$result,
              {
                first: true,
                colspan: "6",
                scope: "colgroup",
                class: "bg-surface-secondary/30 py-2 border-b font-semibold"
              },
              {},
              {
                default: () => {
                  return `${escape(date)} `;
                }
              }
            )}</tr> ${each(logsByDay, ({ id, timestamp, username, operation: op, action_kind, resource, parameters }) => {
              return `${validate_component(Row, "Row").$$render(
                $$result,
                {
                  hoverable: true,
                  selected: id === selectedId
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Cell, "Cell").$$render($$result, { first: true }, {}, {
                      default: () => {
                        return `${escape(id)} `;
                      }
                    })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(displayDate(timestamp))} `;
                      }
                    })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                      default: () => {
                        return `<div class="flex flex-row gap-2 items-center"><div class="whitespace-nowrap overflow-x-auto no-scrollbar max-w-52 svelte-1tti2gn">${escape(username)} ${parameters && "end_user" in parameters ? `<span>(${escape(parameters.end_user)})</span>` : ``}</div> ${validate_component(Button, "Button").$$render(
                          $$result,
                          {
                            color: "light",
                            size: "xs2",
                            iconOnly: true,
                            startIcon: { icon: List_filter }
                          },
                          {},
                          {}
                        )}</div> `;
                      }
                    })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                      default: () => {
                        return `<div class="flex flex-row gap-1">${validate_component(Badge, "Badge").$$render($$result, { color: kindToBadgeColor(action_kind) }, {}, {
                          default: () => {
                            return `${escape(action_kind)}`;
                          }
                        })} ${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
                          default: () => {
                            return `${escape(op)} `;
                          }
                        })}</div> `;
                      }
                    })} ${validate_component(Cell, "Cell").$$render($$result, { last: true }, {}, {
                      default: () => {
                        return `<div class="flex flex-row gap-2 items-center"><div class="whitespace-nowrap overflow-x-auto no-scrollbar w-48 svelte-1tti2gn">${escape(resource)}</div> ${validate_component(Button, "Button").$$render(
                          $$result,
                          {
                            color: "light",
                            size: "xs2",
                            iconOnly: true,
                            startIcon: { icon: List_filter }
                          },
                          {},
                          {}
                        )}</div> `;
                      }
                    })} `;
                  }
                }
              )}`;
            })}`;
          })}</tbody>` : `<tr data-svelte-h="svelte-1mwjgbn"><td colspan="4" class="text-center py-8"><div class="text-xs text-secondary">No logs found for the selected filters.</div></td></tr>`}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const AuditLogMobileFilters = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Popup, "Popup").$$render(
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
        return `${validate_component(Button, "Button").$$render(
          $$result,
          {
            color: "dark",
            size: "xs",
            nonCaptureEvent: true,
            startIcon: { icon: Filter }
          },
          {},
          {
            default: () => {
              return `Filters`;
            }
          }
        )} `;
      },
      default: () => {
        return `<div class="flex flex-col w-80">${slots.filters ? slots.filters({}) : ``}</div>`;
      }
    }
  )}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  let username = $page.url.searchParams.get("username") ?? "all";
  let pageIndex = Number($page.url.searchParams.get("page")) || 0;
  let before = $page.url.searchParams.get("before") ?? void 0;
  let after = $page.url.searchParams.get("after") ?? void 0;
  let perPage = Number($page.url.searchParams.get("perPage")) || 100;
  let operation = $page.url.searchParams.get("operation") ?? "all";
  let resource = $page.url.searchParams.get("resource") ?? void 0;
  let actionKind = $page.url.searchParams.get("actionKind") ?? "all";
  let logs;
  let selectedId = void 0;
  let auditLogDrawer;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="w-full h-screen"><div class="px-2"><div class="flex items-center space-x-2 flex-row justify-between"><div class="flex flex-row flex-wrap justify-between py-2 my-4 px-4 gap-1 items-center"><h1 class="!text-2xl font-semibold leading-6 tracking-tight" data-svelte-h="svelte-1lqc650">Audit logs</h1> ${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        documentationLink: "https://www.windmill.dev/docs/core_concepts/audit_logs"
      },
      {},
      {
        default: () => {
          return `You can only see your own audit logs unless you are an admin.`;
        }
      }
    )}</div> <div class="hidden 2xl:block">${validate_component(AuditLogsFilters, "AuditLogsFilters").$$render(
      $$result,
      {
        logs,
        username,
        before,
        after,
        actionKind,
        operation,
        resource,
        pageIndex,
        perPage
      },
      {
        logs: ($$value) => {
          logs = $$value;
          $$settled = false;
        },
        username: ($$value) => {
          username = $$value;
          $$settled = false;
        },
        before: ($$value) => {
          before = $$value;
          $$settled = false;
        },
        after: ($$value) => {
          after = $$value;
          $$settled = false;
        },
        actionKind: ($$value) => {
          actionKind = $$value;
          $$settled = false;
        },
        operation: ($$value) => {
          operation = $$value;
          $$settled = false;
        },
        resource: ($$value) => {
          resource = $$value;
          $$settled = false;
        },
        pageIndex: ($$value) => {
          pageIndex = $$value;
          $$settled = false;
        },
        perPage: ($$value) => {
          perPage = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="2xl:hidden">${validate_component(AuditLogMobileFilters, "AuditLogMobileFilters").$$render($$result, {}, {}, {
      filters: () => {
        return `${validate_component(AuditLogsFilters, "AuditLogsFilters").$$render(
          $$result,
          {
            logs,
            username,
            before,
            after,
            actionKind,
            operation,
            resource
          },
          {
            logs: ($$value) => {
              logs = $$value;
              $$settled = false;
            },
            username: ($$value) => {
              username = $$value;
              $$settled = false;
            },
            before: ($$value) => {
              before = $$value;
              $$settled = false;
            },
            after: ($$value) => {
              after = $$value;
              $$settled = false;
            },
            actionKind: ($$value) => {
              actionKind = $$value;
              $$settled = false;
            },
            operation: ($$value) => {
              operation = $$value;
              $$settled = false;
            },
            resource: ($$value) => {
              resource = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}</div></div> ${!$enterpriseLicense || $enterpriseLicense.endsWith("_pro") ? `${validate_component(Alert, "Alert").$$render(
      $$result,
      {
        title: "Redacted audit logs",
        type: "warning"
      },
      {},
      {
        default: () => {
          return `You need an enterprise license to see unredacted audit logs.`;
        }
      }
    )} <div class="py-2"></div>` : ``}</div> ${validate_component(SplitPanesWrapper, "SplitPanesWrapper").$$render($$result, { class: "hidden md:block" }, {}, {
      default: () => {
        return `${validate_component(Splitpanes, "Splitpanes").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Pane, "Pane").$$render($$result, { size: 70, minSize: 50 }, {}, {
              default: () => {
                return `${validate_component(AuditLogsTable, "AuditLogsTable").$$render(
                  $$result,
                  {
                    logs,
                    selectedId,
                    pageIndex,
                    perPage,
                    actionKind,
                    operation,
                    usernameFilter: username,
                    resourceFilter: resource
                  },
                  {
                    pageIndex: ($$value) => {
                      pageIndex = $$value;
                      $$settled = false;
                    },
                    perPage: ($$value) => {
                      perPage = $$value;
                      $$settled = false;
                    },
                    actionKind: ($$value) => {
                      actionKind = $$value;
                      $$settled = false;
                    },
                    operation: ($$value) => {
                      operation = $$value;
                      $$settled = false;
                    },
                    usernameFilter: ($$value) => {
                      username = $$value;
                      $$settled = false;
                    },
                    resourceFilter: ($$value) => {
                      resource = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })} ${validate_component(Pane, "Pane").$$render($$result, { size: 30, minSize: 15 }, {}, {
              default: () => {
                return `${validate_component(AuditLogDetails, "AuditLogDetails").$$render($$result, { logs, selectedId }, {}, {})}`;
              }
            })}`;
          }
        })}`;
      }
    })} <div class="md:hidden">${validate_component(AuditLogsTable, "AuditLogsTable").$$render(
      $$result,
      {
        logs,
        pageIndex,
        perPage,
        actionKind,
        operation,
        usernameFilter: username,
        resourceFilter: resource
      },
      {
        pageIndex: ($$value) => {
          pageIndex = $$value;
          $$settled = false;
        },
        perPage: ($$value) => {
          perPage = $$value;
          $$settled = false;
        },
        actionKind: ($$value) => {
          actionKind = $$value;
          $$settled = false;
        },
        operation: ($$value) => {
          operation = $$value;
          $$settled = false;
        },
        usernameFilter: ($$value) => {
          username = $$value;
          $$settled = false;
        },
        resourceFilter: ($$value) => {
          resource = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { this: auditLogDrawer },
      {
        this: ($$value) => {
          auditLogDrawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Log details" }, {}, {
            default: () => {
              return `${validate_component(AuditLogDetails, "AuditLogDetails").$$render($$result, { logs, selectedId }, {}, {})}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_enterpriseLicense();
  return $$rendered;
});
export {
  Page as default
};
