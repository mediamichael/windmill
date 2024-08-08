import { R as ResourceService } from "./services.gen.js";
import { w as workspaceStore } from "./stores2.js";
import { w as writable } from "./index.js";
import { m as get_store_value } from "./ssr.js";
const resourceTypesStore = writable(void 0);
async function getResourceTypes() {
  const rts = get_store_value(resourceTypesStore);
  if (rts) {
    return rts;
  } else {
    let workspace = get_store_value(workspaceStore);
    if (workspace) {
      try {
        const nrts = await ResourceService.listResourceTypeNames({ workspace });
        resourceTypesStore.set(nrts);
        return nrts;
      } catch (e) {
        return ["error_fetching_names"];
      }
    } else {
      return ["workspace_is_undefined"];
    }
  }
}
export {
  getResourceTypes as g,
  resourceTypesStore as r
};
