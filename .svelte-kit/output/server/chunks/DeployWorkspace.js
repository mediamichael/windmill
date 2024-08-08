import { c as create_ssr_component, s as subscribe, d as createEventDispatcher, v as validate_component, e as escape, b as add_attribute, f as each } from "./ssr.js";
import { b as base } from "./base.js";
import { w as workspaceStore, b as superadmin, e as enterpriseLicense } from "./stores2.js";
import { W as WorkspaceService, U as UserService, F as FlowService, c as ScriptService, A as AppService, e as RawAppService, V as VariableService, R as ResourceService, S as ScheduleService, d as FolderService } from "./services.gen.js";
import { g as getAllModules } from "./flowExplorer.js";
import { B as Button } from "./toast.js";
import { T as Tooltip } from "./Tooltip.js";
import { A as Alert } from "./Alert.js";
import { T as Toggle } from "./Toggle.js";
import { B as Badge } from "./Badge.js";
import { D as DiffDrawer } from "./DiffDrawer.js";
import { L as Loader_2 } from "./loader-2.js";
function computeStatusPath(kind, path) {
  return `${kind}:${path}`;
}
const DeployWorkspace = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $superadmin, $$unsubscribe_superadmin;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_superadmin = subscribe(superadmin, (value) => $superadmin = value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  const dispatch = createEventDispatcher();
  let { kind } = $$props;
  let { initialPath = "" } = $$props;
  let { workspaceToDeployTo = void 0 } = $$props;
  let { hideButton = false } = $$props;
  let seeTarget = void 0;
  let dependencies = void 0;
  const allAlreadyExists = {};
  let diffDrawer;
  let notSet = void 0;
  async function reload(path) {
    try {
      if (!$superadmin) {
        await UserService.whoami({ workspace: workspaceToDeployTo });
      }
      seeTarget = true;
    } catch {
      seeTarget = false;
      return;
    }
    const allDeps = await getDependencies(kind, path);
    let sortedSet = [];
    allDeps.forEach((x) => {
      if (!sortedSet.find((y) => y.kind == x.kind && y.path == x.path)) {
        sortedSet.push(x);
      }
    });
    for (const dep of sortedSet) {
      allAlreadyExists[computeStatusPath(dep.kind, dep.path)] = await checkAlreadyExists(dep.kind, dep.path);
    }
    dependencies = sortedSet.map((x) => ({
      ...x,
      include: x.kind != "variable" && x.kind != "resource" && x.kind != "resource_type" && (x.kind != "folder" || !allAlreadyExists[computeStatusPath(x.kind, x.path)])
    }));
  }
  async function getDependencies(kind2, path) {
    async function rec(kind3, path2) {
      if (kind3 == "schedule") {
        const schedule = await ScheduleService.getSchedule({ workspace: $workspaceStore, path: path2 });
        if (schedule.script_path && schedule.script_path != "") {
          if (schedule.script_path) {
            return [
              {
                kind: "script",
                path: schedule.script_path
              }
            ];
          } else {
            return [{ kind: "flow", path: schedule.script_path }];
          }
        } else {
          return [];
        }
      } else if (kind3 == "flow") {
        const flow = await FlowService.getFlowByPath({ workspace: $workspaceStore, path: path2 });
        return getAllModules(flow.value.modules, flow.value.failure_module).flatMap((x) => {
          let result = [];
          if (x.value.type == "script" || x.value.type == "rawscript" || x.value.type == "flow") {
            Object.values(x.value.input_transforms).forEach((y) => {
              if (y.type == "static" && typeof y.value == "string") {
                if (y.value.startsWith("$res:")) {
                  result.push({
                    kind: "resource",
                    path: y.value.substring(5)
                  });
                } else if (y.value.startsWith("$var:")) {
                  result.push({
                    kind: "variable",
                    path: y.value.substring(5)
                  });
                }
              }
            });
          }
          if (x.value.type == "script") {
            if (x.value.path && !x.value.path.startsWith("hub/")) {
              result.push({ kind: "script", path: x.value.path });
            }
          } else if (x.value.type == "flow") {
            if (x.value.path) {
              result.push({ kind: "flow", path: x.value.path });
            }
          }
          return result;
        });
      } else if (kind3 == "resource") {
        let recObj = function(obj) {
          if (typeof obj == "string" && obj.startsWith("$var:")) {
            return [{ kind: "variable", path: obj.substring(5) }];
          } else if (typeof obj == "object") {
            return Object.values(obj).flatMap((x) => recObj(x));
          } else {
            return [];
          }
        };
        const res = await ResourceService.getResource({ workspace: $workspaceStore, path: path2 });
        return [
          ...recObj(res.value),
          {
            kind: "resource_type",
            path: res.resource_type
          }
        ];
      }
      return [];
    }
    let toProcess = [{ kind: kind2, path }];
    let processed = [];
    while (toProcess.length > 0) {
      const { kind: kind3, path: path2 } = toProcess.pop();
      toProcess.push(...await rec(kind3, path2));
      processed.push({ kind: kind3, path: path2 });
    }
    let folders = [];
    for (const p of processed) {
      let split = p.path.split("/");
      if (split.length > 2 && split[0] == "f" && !folders.includes(split[1])) {
        folders.push(split[1]);
        processed.push({ kind: "folder", path: split[1] });
      }
    }
    processed.reverse();
    return processed;
  }
  async function checkAlreadyExists(kind2, path) {
    if (kind2 == "flow") {
      return await FlowService.existsFlowByPath({ workspace: workspaceToDeployTo, path });
    } else if (kind2 == "script") {
      return await ScriptService.existsScriptByPath({ workspace: workspaceToDeployTo, path });
    } else if (kind2 == "app") {
      return await AppService.existsApp({ workspace: workspaceToDeployTo, path });
    } else if (kind2 == "raw_app") {
      return await RawAppService.existsRawApp({ workspace: workspaceToDeployTo, path });
    } else if (kind2 == "variable") {
      return await VariableService.existsVariable({ workspace: workspaceToDeployTo, path });
    } else if (kind2 == "resource") {
      return await ResourceService.existsResource({ workspace: workspaceToDeployTo, path });
    } else if (kind2 == "schedule") {
      return await ScheduleService.existsSchedule({ workspace: workspaceToDeployTo, path });
    } else if (kind2 == "resource_type") {
      return await ResourceService.existsResourceType({ workspace: workspaceToDeployTo, path });
    } else if (kind2 == "folder") {
      let exists = true;
      try {
        await FolderService.getFolder({
          workspace: workspaceToDeployTo,
          name: path
        });
      } catch (e) {
        exists = false;
      }
      return exists;
    } else {
      throw new Error(`Unknown kind ${kind2}`);
    }
  }
  const deploymentStatus = {};
  async function deploy(kind2, path) {
    const statusPath = `${kind2}:${path}`;
    deploymentStatus[statusPath] = { status: "loading" };
    try {
      let alreadyExists = await checkAlreadyExists(kind2, path);
      if (kind2 == "flow") {
        const flow = await FlowService.getFlowByPath({ workspace: $workspaceStore, path });
        getAllModules(flow.value.modules).forEach((x) => {
          if (x.value.type == "script" && x.value.hash != void 0) {
            x.value.hash = void 0;
          }
        });
        if (alreadyExists) {
          await FlowService.updateFlow({
            workspace: workspaceToDeployTo,
            path,
            requestBody: { ...flow }
          });
        } else {
          await FlowService.createFlow({
            workspace: workspaceToDeployTo,
            requestBody: { ...flow }
          });
        }
      } else if (kind2 == "script") {
        const script = await ScriptService.getScriptByPath({ workspace: $workspaceStore, path });
        await ScriptService.createScript({
          workspace: workspaceToDeployTo,
          requestBody: {
            ...script,
            lock: script.lock,
            parent_hash: alreadyExists ? (await ScriptService.getScriptByPath({ workspace: workspaceToDeployTo, path })).hash : void 0
          }
        });
      } else if (kind2 == "app") {
        const app = await AppService.getAppByPath({ workspace: $workspaceStore, path });
        if (alreadyExists) {
          await AppService.updateApp({
            workspace: workspaceToDeployTo,
            path,
            requestBody: { ...app }
          });
        } else {
          await AppService.createApp({
            workspace: workspaceToDeployTo,
            requestBody: { ...app }
          });
        }
      } else if (kind2 == "variable") {
        const variable = await VariableService.getVariable({
          workspace: $workspaceStore,
          path,
          decryptSecret: true
        });
        if (alreadyExists) {
          await VariableService.updateVariable({
            workspace: workspaceToDeployTo,
            path,
            requestBody: {
              path,
              value: variable.value ?? "",
              is_secret: variable.is_secret,
              description: variable.description ?? ""
            },
            alreadyEncrypted: false
          });
        } else {
          await VariableService.createVariable({
            workspace: workspaceToDeployTo,
            requestBody: {
              path,
              value: variable.value ?? "",
              is_secret: variable.is_secret,
              description: variable.description ?? ""
            }
          });
        }
      } else if (kind2 == "resource") {
        const resource = await ResourceService.getResource({ workspace: $workspaceStore, path });
        if (alreadyExists) {
          await ResourceService.updateResource({
            workspace: workspaceToDeployTo,
            path,
            requestBody: {
              path,
              value: resource.value ?? "",
              description: resource.description ?? ""
            }
          });
        } else {
          await ResourceService.createResource({
            workspace: workspaceToDeployTo,
            requestBody: {
              path,
              value: resource.value ?? "",
              resource_type: resource.resource_type,
              description: resource.description ?? ""
            }
          });
        }
      } else if (kind2 == "resource_type") {
        const resource = await ResourceService.getResourceType({ workspace: $workspaceStore, path });
        if (alreadyExists) {
          await ResourceService.updateResourceType({
            workspace: workspaceToDeployTo,
            path,
            requestBody: {
              schema: resource.schema,
              description: resource.description ?? ""
            }
          });
        } else {
          await ResourceService.createResourceType({
            workspace: workspaceToDeployTo,
            requestBody: {
              description: resource.description ?? "",
              schema: resource.schema,
              name: resource.name
            }
          });
        }
      } else if (kind2 == "raw_app") {
        throw new Error("Raw app deploy not implemented yet");
      } else if (kind2 == "folder") {
        await FolderService.createFolder(
          {
            workspace: workspaceToDeployTo,
            requestBody: { name: path }
          }
        );
      } else {
        throw new Error(`Unknown kind ${kind2}`);
      }
      allAlreadyExists[statusPath] = true;
      deploymentStatus[statusPath] = { status: "deployed" };
    } catch (e) {
      deploymentStatus[statusPath] = {
        status: "failed",
        error: e.body || e.message
      };
    }
  }
  function deployAll() {
    dependencies?.slice().forEach(async ({ kind: kind2, path, include }) => {
      if (include) {
        await deploy(kind2, path);
      }
    });
    dispatch("update", initialPath);
  }
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0) $$bindings.kind(kind);
  if ($$props.initialPath === void 0 && $$bindings.initialPath && initialPath !== void 0) $$bindings.initialPath(initialPath);
  if ($$props.workspaceToDeployTo === void 0 && $$bindings.workspaceToDeployTo && workspaceToDeployTo !== void 0) $$bindings.workspaceToDeployTo(workspaceToDeployTo);
  if ($$props.hideButton === void 0 && $$bindings.hideButton && hideButton !== void 0) $$bindings.hideButton(hideButton);
  if ($$props.deployAll === void 0 && $$bindings.deployAll && deployAll !== void 0) $$bindings.deployAll(deployAll);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      WorkspaceService.getDeployTo({ workspace: $workspaceStore }).then((x) => {
        workspaceToDeployTo = x.deploy_to;
        if (x.deploy_to == void 0) {
          notSet = true;
        }
      });
    }
    workspaceToDeployTo && reload(initialPath);
    $$rendered = `<div class="mt-6"></div> ${!$enterpriseLicense ? `${validate_component(Alert, "Alert").$$render(
      $$result,
      {
        type: "error",
        title: "Enterprise license required"
      },
      {},
      {
        default: () => {
          return `Deploy to staging/prod from the web UI is only available with an enterprise license`;
        }
      }
    )}` : `${notSet == true ? `${validate_component(Alert, "Alert").$$render(
      $$result,
      {
        type: "error",
        title: "Staging/Prod deploy not set up"
      },
      {},
      {
        default: () => {
          return `As an admin, go to &quot;Workspace ${escape("->")} Dev/Staging/Prod&quot;`;
        }
      }
    )}` : `${validate_component(Alert, "Alert").$$render($$result, { type: "info", title: "Shareable page" }, {}, {
      default: () => {
        return `Share this <a href="${escape(base, true) + "/deploy/" + escape(kind, true) + "/" + escape(initialPath, true)}">link</a> to have another properly permissioned
		user do the deployment`;
      }
    })} <h3 class="mb-2 mt-8">Destination Workspace  ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
      default: () => {
        return `Workspace to deploy to is set in the workspace settings`;
      }
    })}</h3> <input class="max-w-xs" type="text" disabled${add_attribute("value", workspaceToDeployTo, 0)}> ${seeTarget == void 0 ? `<div class="mt-6"></div> ${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})}` : `${seeTarget == true ? `<h3 class="mb-6 mt-16" data-svelte-h="svelte-2iols5">All related deployable items</h3> ${validate_component(DiffDrawer, "DiffDrawer").$$render(
      $$result,
      { this: diffDrawer },
      {
        this: ($$value) => {
          diffDrawer = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="grid grid-cols-9 justify-center max-w-3xl gap-2">${each(dependencies ?? [], ({ kind: kind2, path, include }) => {
      let statusPath = computeStatusPath(kind2, path);
      return ` <div class="col-span-1 truncate text-secondary text-sm pt-0.5">${escape(kind2)}</div><div class="col-span-5 truncate font-semibold">${escape(path)}</div><div class="col-span-1 pt-1.5">${validate_component(Toggle, "Toggle").$$render(
        $$result,
        { size: "xs", checked: include },
        {
          checked: ($$value) => {
            include = $$value;
            $$settled = false;
          }
        },
        {}
      )}</div><div class="col-span-1">${allAlreadyExists[statusPath] == false ? `${include ? `${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
        default: () => {
          return `New ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
            default: () => {
              return `This ${escape(kind2)} doesn&#39;t exist yet on the target and will be created by the deployment`;
            }
          })}`;
        }
      })}` : `${validate_component(Badge, "Badge").$$render($$result, { color: "red" }, {}, {
        default: () => {
          return `Missing
								${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
            default: () => {
              return `${kind2 == "resource_type" ? `
										Resource types are not re-deployed by default. We strongly recommend to add
										shared resource types in &#39;admin&#39; workspace, which will have them be shared to
										every workspace.
									` : `
										This ${escape(kind2)} doesn&#39;t exist and is not included in the deployment. Variables and Resources
										are considered to be workspace specific and are never included by default.
									`}`;
            }
          })} `;
        }
      })}`} ` : `${allAlreadyExists[statusPath] == true ? `<button class="text-blue-600 font-normal mt-1" data-svelte-h="svelte-kyg2im">diff</button> ` : ``}`}</div> <div class="col-span-1 pr-1">${deploymentStatus[statusPath] ? `${deploymentStatus[statusPath].status == "loading" ? `${validate_component(Loader_2, "Loader2").$$render($$result, { class: "animate-spin" }, {}, {})}` : `${deploymentStatus[statusPath].status == "deployed" ? `${validate_component(Badge, "Badge").$$render($$result, { color: "green" }, {}, {
        default: () => {
          return `Deployed`;
        }
      })}` : `${deploymentStatus[statusPath].status == "failed" ? `<div class="inline-flex gap-1">${validate_component(Badge, "Badge").$$render($$result, { color: "red" }, {}, {
        default: () => {
          return `Failed`;
        }
      })} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(deploymentStatus[statusPath].error)}`;
        }
      })}</div>` : ``}`}`}` : `${validate_component(Button, "Button").$$render($$result, { color: "light", size: "xs" }, {}, {
        default: () => {
          return `Deploy`;
        }
      })}`} </div>`;
    })}</div> ${!hideButton ? `<div class="mt-16 flex flex-row-reverse max-w-3xl">${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Deploy All Toggled`;
      }
    })}</div>` : ``}` : `<div class="my-2"></div> ${validate_component(Alert, "Alert").$$render(
      $$result,
      {
        type: "error",
        title: "User not allowed to deploy to this workspace"
      },
      {},
      {
        default: () => {
          return `Ask a permissioned user to deploy this item using the shareable link or get the proper
			permissions on the target workspace`;
        }
      }
    )}`}`}`}`}`;
  } while (!$$settled);
  $$unsubscribe_workspaceStore();
  $$unsubscribe_superadmin();
  $$unsubscribe_enterpriseLicense();
  return $$rendered;
});
export {
  DeployWorkspace as D
};
