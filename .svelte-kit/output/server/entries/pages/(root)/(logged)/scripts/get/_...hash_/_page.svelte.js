import { c as create_ssr_component, v as validate_component, s as subscribe, o as onDestroy, e as escape, f as each, a as set_store_value } from "../../../../../../../chunks/ssr.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import { b as base } from "../../../../../../../chunks/base.js";
import { W as WorkspaceService, c as ScriptService, J as JobService } from "../../../../../../../chunks/services.gen.js";
import { G as encodeState, A as ALL_DEPLOYABLE, a as canWrite, b as emptyString, f as defaultIfEmptyString, H as truncateHash, B as Button, s as sendUserToast, i as isDeployable } from "../../../../../../../chunks/toast.js";
import { T as Tooltip } from "../../../../../../../chunks/Tooltip.js";
import { S as ShareModal, a as Share } from "../../../../../../../chunks/ShareModal.js";
import { h as hubBaseUrlStore, u as userStore, w as workspaceStore, e as enterpriseLicense } from "../../../../../../../chunks/stores2.js";
import { S as SchemaViewer } from "../../../../../../../chunks/SchemaViewer.js";
import { H as HighlightCode, T as TimeAgo } from "../../../../../../../chunks/FlowGraphViewerStep.js";
import { A as Alert } from "../../../../../../../chunks/Alert.js";
import { B as Badge } from "../../../../../../../chunks/Badge.js";
import { D as Drawer, a as DrawerContent } from "../../../../../../../chunks/DrawerContent.js";
import "../../../../../../../chunks/common.js";
import { S as Skeleton } from "../../../../../../../chunks/Skeleton.js";
import { T as Tabs, a as Tab } from "../../../../../../../chunks/Tabs.js";
import { T as TabContent } from "../../../../../../../chunks/TabContent.js";
import { D as DetailPageLayout, C as ClipboardPanel, a as CliHelpBox, R as RunPageSchedules, W as WebhooksPanel, b as RunForm, c as DetailPageHeader, e as createAppFromScript, S as Server } from "../../../../../../../chunks/createAppFromScript.js";
import { g as goto } from "../../../../../../../chunks/navigation.js";
import { M as MoveDrawer, A as Archive } from "../../../../../../../chunks/MoveDrawer.js";
import { D as DeployWorkspaceDrawer } from "../../../../../../../chunks/DeployWorkspaceDrawer.js";
import { S as SavedInputs } from "../../../../../../../chunks/SavedInputs.js";
import { S as SharedBadge } from "../../../../../../../chunks/SharedBadge.js";
import { S as ScriptVersionHistory } from "../../../../../../../chunks/ScriptVersionHistory.js";
import { i as importStore } from "../../../../../../../chunks/store.js";
import { P as PersistentScriptDrawer, A as Activity } from "../../../../../../../chunks/PersistentScriptDrawer.js";
import { a as loadScriptSchedule } from "../../../../../../../chunks/scripts.js";
import { G as GfmMarkdown } from "../../../../../../../chunks/SchemaForm.js";
import { L as Loader_2 } from "../../../../../../../chunks/loader-2.js";
import { C as Calendar } from "../../../../../../../chunks/calendar.js";
import { G as Git_fork } from "../../../../../../../chunks/git-fork.js";
import { P as Play } from "../../../../../../../chunks/play.js";
import { H as History } from "../../../../../../../chunks/history2.js";
import { T as Table_2 } from "../../../../../../../chunks/table-2.js";
import { P as Pen } from "../../../../../../../chunks/pen.js";
import { F as Folder_open } from "../../../../../../../chunks/LightweightSchemaForm.js";
import { E as Eye } from "../../../../../../../chunks/eye.js";
import { G as Globe_2 } from "../../../../../../../chunks/globe-2.js";
import { I as Icon } from "../../../../../../../chunks/Icon.js";
import { T as Trash } from "../../../../../../../chunks/Section.js";
const Archive_restore = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "20",
        "height": "5",
        "x": "2",
        "y": "3",
        "rx": "1"
      }
    ],
    ["path", { "d": "M4 8v11a2 2 0 0 0 2 2h2" }],
    ["path", { "d": "M20 8v11a2 2 0 0 1-2 2h-2" }],
    ["path", { "d": "m9 15 3-3 3 3" }],
    ["path", { "d": "M12 12v9" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "archive-restore" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
function scriptToHubUrl(content, summary, description, kind, language, schema, lock, hubBaseUrl) {
  const url = new URL(hubBaseUrl + "/scripts/add");
  url.hash = encodeState({ content, summary, description, kind, language, schema, lock });
  return url;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cliCommand;
  let loading;
  let mainButtons;
  let $hubBaseUrlStore, $$unsubscribe_hubBaseUrlStore;
  let $userStore, $$unsubscribe_userStore;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  let $importStore, $$unsubscribe_importStore;
  let $page, $$unsubscribe_page;
  $$unsubscribe_hubBaseUrlStore = subscribe(hubBaseUrlStore, (value) => $hubBaseUrlStore = value);
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  $$unsubscribe_importStore = subscribe(importStore, (value) => $importStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let script;
  let topHash;
  let can_write = false;
  let deploymentInProgress = false;
  let intervalId;
  let shareModal;
  let runForm;
  let scheduledForStr = void 0;
  let invisible_to_owner = void 0;
  let overrideTag = void 0;
  let previousHash = void 0;
  async function deleteScript(hash2) {
    try {
      await ScriptService.deleteScriptByHash({ workspace: $workspaceStore, hash: hash2 });
      loadScript(hash2);
    } catch (err) {
      console.error(err);
      sendUserToast(`Could not delete this script ${err.body}`, true);
    }
  }
  async function archiveScript(hash2) {
    await ScriptService.archiveScriptByHash({ workspace: $workspaceStore, hash: hash2 });
    loadScript(hash2);
  }
  async function unarchiveScript(hash2) {
    const r = await ScriptService.getScriptByHash({ workspace: $workspaceStore, hash: hash2 });
    const ns = await ScriptService.createScript({
      workspace: $workspaceStore,
      requestBody: { ...r, parent_hash: hash2, lock: r.lock }
    });
    sendUserToast(`Unarchived script`);
    loadScript(ns);
    goto(`/scripts/get/${ns}`);
  }
  async function syncer() {
    if (script?.hash) {
      const status = await ScriptService.getScriptDeploymentStatus({
        workspace: $workspaceStore,
        hash: script?.hash
      });
      if (status.lock != void 0 || status.lock_error_logs != void 0) {
        deploymentInProgress = false;
        script.lock = status.lock;
        script.lock_error_logs = status.lock_error_logs;
        clearInterval(intervalId);
      }
    }
  }
  let schedule = void 0;
  async function loadScript(hash2) {
    try {
      script = await ScriptService.getScriptByHash({ workspace: $workspaceStore, hash: hash2 });
    } catch {
      script = await ScriptService.getScriptByPath({ workspace: $workspaceStore, path: hash2 });
      hash2 = script.hash;
    }
    can_write = script.workspace_id == $workspaceStore && canWrite(script.path, script.extra_perms, $userStore);
    schedule = await loadScriptSchedule(script.path, $workspaceStore);
    if (script.path && script.archived) {
      const script_by_path = await ScriptService.getScriptByPath({
        workspace: $workspaceStore,
        path: script.path
      }).catch((_) => console.error("this script has no non-archived version"));
      if (script_by_path?.hash != script.hash) {
        topHash = script_by_path?.hash;
      }
    } else {
      topHash = void 0;
    }
    intervalId && clearInterval(intervalId);
    deploymentInProgress = script.lock == void 0 && script.lock_error_logs == void 0;
    if (deploymentInProgress) {
      intervalId = setInterval(syncer, 500);
    }
    if (!script.path.startsWith(`u/${$userStore?.username}`) && script.path.split("/").length > 2) {
      invisible_to_owner = script.visible_to_runner_only;
    }
  }
  onDestroy(() => {
    intervalId && clearInterval(intervalId);
  });
  let isValid = true;
  let runLoading = false;
  async function runScript(scheduledForStr2, args2, invisibleToOwner, overrideTag2) {
    try {
      runLoading = true;
      const scheduledFor = scheduledForStr2 ? new Date(scheduledForStr2).toISOString() : void 0;
      let run = await JobService.runScriptByHash({
        workspace: $workspaceStore,
        hash: script?.hash ?? "",
        requestBody: args2,
        scheduledFor,
        invisibleToOwner,
        tag: overrideTag2
      });
      await goto("/run/" + run + "?workspace=" + $workspaceStore);
    } catch (err) {
      runLoading = false;
      sendUserToast(`Could not create job: ${err.body}`, true);
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
  let persistentScriptDrawer;
  function getMainButtons(script2, args2, topHash2, can_write2) {
    const buttons = [];
    if (!topHash2 && script2 && !$userStore?.operator && !script2.codebase) {
      buttons.push({
        label: "Fork",
        buttonProps: {
          href: `${base}/scripts/add?template=${script2.path}`,
          size: "xs",
          color: "light",
          startIcon: Git_fork
        }
      });
    }
    if (!script2) {
      return buttons;
    }
    buttons.push({
      label: `View runs`,
      buttonProps: {
        href: `${base}/runs/${script2.path}`,
        size: "xs",
        color: "light",
        startIcon: Play
      }
    });
    if (!script2 || $userStore?.operator || !can_write2) {
      return buttons;
    }
    if (Array.isArray(script2.parent_hashes) && script2.parent_hashes.length > 0) {
      buttons.push({
        label: `History`,
        buttonProps: {
          onClick: () => {
            versionsDrawerOpen = !versionsDrawerOpen;
          },
          size: "xs",
          color: "light",
          startIcon: History
        }
      });
    }
    if (!$userStore?.operator) {
      buttons.push({
        label: "Build App",
        buttonProps: {
          onClick: async () => {
            const app = createAppFromScript(script2.path, script2.schema);
            set_store_value(importStore, $importStore = JSON.parse(JSON.stringify(app)), $importStore);
            await goto("/apps/add?nodraft=true");
          },
          size: "xs",
          color: "light",
          startIcon: Table_2
        }
      });
      if (script2?.restart_unless_cancelled ?? false) {
        buttons.push({
          label: "Current runs",
          buttonProps: {
            onClick: () => {
              persistentScriptDrawer.open?.(script2);
            },
            size: "xs",
            startIcon: Activity,
            color: "dark",
            variant: "contained"
          }
        });
      }
      if (!script2.codebase) {
        buttons.push({
          label: "Edit",
          buttonProps: {
            href: `${base}/scripts/edit/${script2.path}?${topHash2 ? `&hash=${script2.hash}&topHash=` + topHash2 : ""}`,
            size: "xs",
            startIcon: Pen,
            color: "dark",
            variant: "contained",
            disabled: !can_write2
          }
        });
      }
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
  function getMenuItems(script2, deployUiSettings2) {
    if (!script2 || $userStore?.operator) return [];
    const menuItems = [];
    menuItems.push({
      label: "Move/Rename",
      Icon: Folder_open,
      onclick: () => {
        moveDrawer.openDrawer(script2?.path ?? "", script2?.summary, "script");
      }
    });
    menuItems.push({
      label: "Audit logs",
      Icon: Eye,
      onclick: () => {
        goto(`/audit_logs?resource=${script2?.path}`);
      }
    });
    menuItems.push({
      label: "Share",
      Icon: Share,
      onclick: () => {
        shareModal.openDrawer(script2?.path ?? "", "script");
      }
    });
    if (isDeployable("script", script2?.path ?? "", deployUiSettings2)) {
      menuItems.push({
        label: "Deploy to staging/prod",
        Icon: Server,
        onclick: () => {
          deploymentDrawer.openDrawer(script2?.path ?? "", "script");
        }
      });
    }
    {
      menuItems.push({
        label: "Publish to Hub",
        Icon: Globe_2,
        onclick: () => {
          if (!script2) return;
          window.open(scriptToHubUrl(script2.content, script2.summary, script2.description ?? "", script2.kind, script2.language, script2.schema, script2.lock ?? "", $hubBaseUrlStore).toString(), "_blank");
        }
      });
    }
    if (script2.archived) {
      menuItems.push({
        label: "Unarchive",
        Icon: Archive_restore,
        onclick: async () => {
          unarchiveScript(script2.hash);
        },
        color: "red"
      });
    } else {
      menuItems.push({
        label: "Archive",
        Icon: Archive,
        onclick: async () => {
          archiveScript(script2.hash);
        },
        color: "red"
      });
    }
    menuItems.push({
      label: "Delete",
      Icon: Trash,
      onclick: async () => {
        deleteScript(script2.hash);
      },
      color: "red"
    });
    return menuItems;
  }
  let versionsDrawerOpen = false;
  let token = "TOKEN_TO_CREATE";
  let detailSelected = "saved_inputs";
  let triggerSelected = "webhooks";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    cliCommand = `wmill script run ${script?.path} -d '${JSON.stringify(args)}'`;
    loading = !script;
    {
      if ($workspaceStore) {
        if (previousHash != $page.params.hash) {
          previousHash = $page.params.hash;
          loadScript($page.params.hash);
        }
      }
    }
    mainButtons = getMainButtons(script, args, topHash, can_write);
    $$rendered = `${validate_component(MoveDrawer, "MoveDrawer").$$render(
      $$result,
      { this: moveDrawer },
      {
        this: ($$value) => {
          moveDrawer = $$value;
          $$settled = false;
        }
      },
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
    )} ${validate_component(PersistentScriptDrawer, "PersistentScriptDrawer").$$render(
      $$result,
      { this: persistentScriptDrawer },
      {
        this: ($$value) => {
          persistentScriptDrawer = $$value;
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
    )} ${script ? `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { size: "1200px", open: versionsDrawerOpen },
      {
        open: ($$value) => {
          versionsDrawerOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Versions History" }, {}, {
            default: () => {
              return `${validate_component(ScriptVersionHistory, "ScriptVersionHistory").$$render(
                $$result,
                {
                  scriptPath: script.path,
                  openDetails: true
                },
                {},
                {}
              )}`;
            }
          })}`;
        }
      }
    )} ${validate_component(DetailPageLayout, "DetailPageLayout").$$render(
      $$result,
      {
        isOperator: $userStore?.operator,
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
        cli: () => {
          return `<div class="p-2 flex flex-col gap-4">${validate_component(ClipboardPanel, "ClipboardPanel").$$render($$result, { content: cliCommand }, {}, {})} ${validate_component(CliHelpBox, "CliHelpBox").$$render($$result, {}, {}, {})}</div> `;
        },
        details: () => {
          return `<div>${validate_component(Skeleton, "Skeleton").$$render($$result, { loading, layout: [[20]] }, {}, {})} ${validate_component(Tabs, "Tabs").$$render($$result, { selected: "code" }, {}, {
            content: () => {
              return `${validate_component(TabContent, "TabContent").$$render($$result, { value: "code" }, {}, {
                default: () => {
                  return `<div class="p-2 w-full overflow-auto">${validate_component(HighlightCode, "HighlightCode").$$render(
                    $$result,
                    {
                      language: script.language,
                      code: script.content,
                      class: "whitespace-pre-wrap"
                    },
                    {},
                    {}
                  )}</div>`;
                }
              })} ${validate_component(TabContent, "TabContent").$$render($$result, { value: "dependencies" }, {}, {
                default: () => {
                  return `<div>${script?.lock ? `<pre class="bg-surface-secondary text-sm p-2 h-full overflow-auto w-full">${escape(script.lock)}</pre>` : `<p class="bg-surface-secondary text-sm p-2" data-svelte-h="svelte-or1xzf">There is no lock file for this script</p>`}</div>`;
                }
              })} ${validate_component(TabContent, "TabContent").$$render($$result, { value: "arguments" }, {}, {
                default: () => {
                  return `<div class="p-2">${validate_component(SchemaViewer, "SchemaViewer").$$render($$result, { schema: script.schema }, {}, {})}</div>`;
                }
              })} `;
            },
            default: () => {
              return `${validate_component(Tab, "Tab").$$render($$result, { value: "code", size: "xs" }, {}, {
                default: () => {
                  return `Code`;
                }
              })} ${validate_component(Tab, "Tab").$$render($$result, { value: "dependencies", size: "xs" }, {}, {
                default: () => {
                  return `Lockfile`;
                }
              })} ${validate_component(Tab, "Tab").$$render($$result, { value: "arguments", size: "xs" }, {}, {
                default: () => {
                  return `<span class="inline-flex items-center gap-1">Inputs
								${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                    default: () => {
                      return `The jsonschema defines the constraints that the payload must respect to be
									compatible with the input parameters of this script. The UI form is generated
									automatically from the script jsonschema. See
									<a href="https://json-schema.org/" class="text-blue-500" data-svelte-h="svelte-1lai1gl">jsonschema documentation</a>`;
                    }
                  })}</span>`;
                }
              })}`;
            }
          })}</div> ${script.envs && script.envs.length > 0 ? `<h3 data-svelte-h="svelte-136qkow">Static Env Variables</h3> <ul>${each(script.envs, (e) => {
            return `<li>${escape(e)}</li>`;
          })}</ul>` : ``} `;
        },
        schedule: () => {
          return `${validate_component(RunPageSchedules, "RunPageSchedules").$$render(
            $$result,
            {
              isFlow: false,
              path: script.path ?? "",
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
              scopes: [`run:script/${script?.path}`],
              hash: script.hash,
              path: script.path,
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
        save_inputs: () => {
          return `${args ? `${validate_component(SavedInputs, "SavedInputs").$$render(
            $$result,
            {
              scriptPath: script?.path,
              scriptHash: topHash,
              isValid,
              args
            },
            {},
            {}
          )}` : ``} `;
        },
        form: () => {
          return `<div class="p-8 w-full max-w-3xl mx-auto"><div class="flex flex-col gap-0.5 mb-4">${script.lock_error_logs || topHash || script.archived || script.deleted ? `<div class="flex flex-col gap-2 my-2">${script.lock_error_logs ? `<div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert"><p class="font-bold" data-svelte-h="svelte-1ln7d2c">Error deploying this script</p> <p data-svelte-h="svelte-1lz8lhv">This script has not been deployed successfully because of the following
											errors:</p> <pre class="w-full text-xs mt-2 whitespace-pre-wrap">${escape(script.lock_error_logs)}</pre></div>` : ``} ${topHash ? `<div class="mt-2"></div> ${validate_component(Alert, "Alert").$$render($$result, { type: "warning", title: "Not HEAD" }, {}, {
            default: () => {
              return `This hash is not HEAD (latest non-archived version at this path) :
										<a href="${escape(base, true) + "/scripts/get/" + escape(topHash, true) + "?workspace=" + escape($workspaceStore, true)}">Go to the HEAD of this path</a>`;
            }
          })}` : ``} ${script.archived && !topHash ? `${validate_component(Alert, "Alert").$$render($$result, { type: "error", title: "Archived" }, {}, {
            default: () => {
              return `This path was archived`;
            }
          })}` : ``} ${script.deleted ? `<div class="bg-red-100 border-l-4 border-red-600 text-orange-700 p-4" role="alert" data-svelte-h="svelte-1v1u3zk"><p class="font-bold">Deleted</p> <p>The content of this script was deleted (by an admin, no less)</p></div>` : ``}</div>` : ``} ${!emptyString(script.description) ? `${validate_component(GfmMarkdown, "GfmMarkdown").$$render(
            $$result,
            {
              md: defaultIfEmptyString(script?.description, "No description")
            },
            {},
            {}
          )}` : ``}</div> ${deploymentInProgress ? `${validate_component(Badge, "Badge").$$render($$result, { color: "yellow" }, {}, {
            default: () => {
              return `${validate_component(Loader_2, "Loader2").$$render(
                $$result,
                {
                  size: 12,
                  class: "inline animate-spin mr-1"
                },
                {},
                {}
              )}
							Deployment in progress`;
            }
          })}` : ``} ${validate_component(RunForm, "RunForm").$$render(
            $$result,
            {
              viewKeybinding: true,
              loading: runLoading,
              autofocus: true,
              detailed: false,
              runnable: script,
              runAction: runScript,
              schedulable: true,
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
          )} <div class="py-10"></div> ${!emptyString(script.summary) ? `<div class="mb-2"><span class="!text-tertiary">${escape(script.path)}</span></div>` : ``} <div class="flex flex-row gap-x-2 flex-wrap items-center"><span class="text-sm text-tertiary">Edited ${validate_component(TimeAgo, "TimeAgo").$$render(
            $$result,
            {
              withDate: true,
              date: script.created_at || ""
            },
            {},
            {}
          )} by ${escape(script.created_by || "unknown")}</span> ${validate_component(Badge, "Badge").$$render($$result, { small: true, color: "gray" }, {}, {
            default: () => {
              return `${escape(truncateHash(script?.hash ?? ""))}`;
            }
          })} ${script?.is_template ? `${validate_component(Badge, "Badge").$$render($$result, { color: "blue" }, {}, {
            default: () => {
              return `Template`;
            }
          })}` : ``} ${script && script.kind !== "script" ? `${validate_component(Badge, "Badge").$$render($$result, { color: "blue" }, {}, {
            default: () => {
              return `${escape(script?.kind)}`;
            }
          })}` : ``} ${validate_component(SharedBadge, "SharedBadge").$$render(
            $$result,
            {
              canWrite: can_write,
              extraPerms: script?.extra_perms ?? {}
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
              menuItems: getMenuItems(script, deployUiSettings),
              title: defaultIfEmptyString(script.summary, script.path),
              errorHandlerKind: "script",
              scriptOrFlowPath: script.path,
              tag: script.tag,
              errorHandlerMuted: script.ws_error_handler_muted
            },
            {
              errorHandlerMuted: ($$value) => {
                script.ws_error_handler_muted = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${script.codebase ? `${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
                  default: () => {
                    return `bundle${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                      default: () => {
                        return `This script is deployed as a bundle and can only be deployed from the CLI for now`;
                      }
                    })}`;
                  }
                })}` : ``} ${script?.priority != void 0 ? `<div class="hidden md:block">${validate_component(Badge, "Badge").$$render(
                  $$result,
                  {
                    color: "blue",
                    variant: "outlined",
                    size: "xs"
                  },
                  {},
                  {
                    default: () => {
                      return `${escape(`Priority: ${script.priority}`)}`;
                    }
                  }
                )}</div>` : ``} ${script?.restart_unless_cancelled ?? false ? `<button><div class="hidden md:block">${validate_component(Badge, "Badge").$$render(
                  $$result,
                  {
                    color: "red",
                    variant: "outlined",
                    size: "xs"
                  },
                  {},
                  {
                    default: () => {
                      return `Persistent`;
                    }
                  }
                )}</div></button>` : ``} ${script?.concurrent_limit != void 0 && script.concurrency_time_window_s != void 0 ? `<div class="hidden md:block">${validate_component(Badge, "Badge").$$render(
                  $$result,
                  {
                    color: "gray",
                    variant: "outlined",
                    size: "xs"
                  },
                  {},
                  {
                    default: () => {
                      return `${escape(`Concurrency limit: ${script.concurrent_limit} runs every ${script.concurrency_time_window_s}s`)}`;
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
  $$unsubscribe_hubBaseUrlStore();
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
