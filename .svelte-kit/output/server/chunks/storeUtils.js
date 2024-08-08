import { r as resourceTypesStore } from "./resourceTypesStore.js";
import { u as userStore, w as workspaceStore, a as usersWorkspaceStore, b as superadmin } from "./stores2.js";
function switchWorkspace(workspace) {
  try {
    localStorage.removeItem("flow");
    localStorage.removeItem("app");
  } catch (e) {
    console.error("error interacting with local storage", e);
  }
  resourceTypesStore.set(void 0);
  workspaceStore.set(workspace);
}
function clearStores() {
  try {
    localStorage.removeItem("flow");
    localStorage.removeItem("app");
    localStorage.removeItem("workspace");
  } catch (e) {
    console.error("error interacting with local storage", e);
  }
  resourceTypesStore.set(void 0);
  userStore.set(void 0);
  workspaceStore.set(void 0);
  usersWorkspaceStore.set(void 0);
  superadmin.set(void 0);
}
export {
  clearStores as c,
  switchWorkspace as s
};
