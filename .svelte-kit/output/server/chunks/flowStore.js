import { w as writable } from "./index.js";
import { a as loadFlowModuleState, e as emptyFlowModuleState } from "./flowStateUtils.js";
async function initFlowState(flow, flowStateStore) {
  const modulesState = {};
  await mapFlowModules(flow.value.modules, modulesState);
  const failureModule = flow.value.failure_module ? await loadFlowModuleState(flow.value.failure_module) : emptyFlowModuleState();
  flowStateStore.set({
    ...modulesState,
    failure: failureModule
  });
}
async function mapFlowModule(flowModule, modulesState) {
  const value = flowModule.value;
  if (value.type === "forloopflow") {
    await mapFlowModules(value.modules, modulesState);
  }
  if (value.type === "branchone") {
    await mapFlowModules(value.default, modulesState);
  }
  if (value.type === "branchone" || value.type === "branchall") {
    await Promise.all(
      value.branches.map(
        (branchModule) => mapFlowModules(branchModule.modules, modulesState)
      )
    );
  }
  if (value.type === "identity") {
    modulesState[flowModule.id] = emptyFlowModuleState();
  } else {
    const flowModuleState = await loadFlowModuleState(flowModule);
    modulesState[flowModule.id] = flowModuleState;
  }
}
async function mapFlowModules(flowModules, modulesState) {
  await Promise.all(
    flowModules.map((flowModule) => mapFlowModule(flowModule, modulesState))
  );
}
const importFlowStore = writable(void 0);
async function initFlow(flow, flowStore, flowStateStore) {
  await initFlowState(flow, flowStateStore);
  flowStore.set(flow);
}
export {
  initFlow as a,
  importFlowStore as i
};
