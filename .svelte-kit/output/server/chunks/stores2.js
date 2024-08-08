import { d as derived, w as writable } from "./index.js";
const tutorialsToDo = writable([]);
const globalEmailInvite = writable("");
const awarenessStore = writable(void 0);
const enterpriseLicense = writable(void 0);
const workerTags = writable(void 0);
const usageStore = writable(0);
const workspaceUsageStore = writable(0);
const initialArgsStore = writable(void 0);
const oauthStore = writable(void 0);
const userStore = writable(void 0);
const workspaceStore = writable(
  void 0
);
const defaultScripts = writable(void 0);
const dbClockDrift = writable(void 0);
const isPremiumStore = writable(false);
const starStore = writable(1);
const usersWorkspaceStore = writable(void 0);
const superadmin = writable(void 0);
const lspTokenStore = writable(void 0);
const hubBaseUrlStore = writable("https://hub.windmill.dev");
const userWorkspaces = derived([usersWorkspaceStore, superadmin], ([store, superadmin2]) => {
  const originalWorkspaces = store?.workspaces ?? [];
  if (superadmin2) {
    return [
      ...originalWorkspaces.filter((x) => x.id != "admins"),
      {
        id: "admins",
        name: "Admins",
        username: "superadmin"
      }
    ];
  } else {
    return originalWorkspaces;
  }
});
const copilotInfo = writable({
  exists_openai_resource_path: false,
  code_completion_enabled: false
});
const codeCompletionLoading = writable(false);
const codeCompletionSessionEnabled = writable(true);
const metadataCompletionEnabled = writable(true);
const stepInputCompletionEnabled = writable(true);
const formatOnSave = writable(true);
const dbSchemas = writable({});
export {
  starStore as A,
  usersWorkspaceStore as a,
  superadmin as b,
  codeCompletionSessionEnabled as c,
  defaultScripts as d,
  enterpriseLicense as e,
  copilotInfo as f,
  codeCompletionLoading as g,
  hubBaseUrlStore as h,
  initialArgsStore as i,
  dbSchemas as j,
  formatOnSave as k,
  lspTokenStore as l,
  metadataCompletionEnabled as m,
  userWorkspaces as n,
  oauthStore as o,
  workerTags as p,
  globalEmailInvite as q,
  awarenessStore as r,
  stepInputCompletionEnabled as s,
  tutorialsToDo as t,
  userStore as u,
  dbClockDrift as v,
  workspaceStore as w,
  isPremiumStore as x,
  workspaceUsageStore as y,
  usageStore as z
};
