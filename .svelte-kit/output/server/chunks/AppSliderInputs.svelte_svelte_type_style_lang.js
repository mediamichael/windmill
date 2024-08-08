import { createCustomEqual, deepEqual } from "fast-equals";
import { w as writable } from "./index.js";
import { getCoreRowModel, getPaginationRowModel } from "@tanstack/table-core";
function compareObjectsKeysOrder(obj1, obj2) {
  return deepEqual(Object.keys(obj1), Object.keys(obj2));
}
const deepEqualWithOrderedArray = createCustomEqual({
  createCustomConfig: (defaultConfig) => ({
    ...defaultConfig,
    areObjectsEqual: (a, b, state) => {
      return defaultConfig.areObjectsEqual(a, b, state) && compareObjectsKeysOrder(a, b);
    }
  })
});
const secondaryMenuRightStore = writable({
  isOpen: false,
  component: void 0,
  props: {}
});
const secondaryMenuLeftStore = writable({
  isOpen: false,
  component: void 0,
  props: {}
});
const secondaryMenuRight = secondaryMenuController(secondaryMenuRightStore);
const secondaryMenuLeft = secondaryMenuController(secondaryMenuLeftStore);
function secondaryMenuController(store) {
  return {
    subscribe: store.subscribe,
    toggle: (component, props = {}, onClose = void 0) => {
      store.update((str) => ({ isOpen: !str.isOpen, component, props, onClose }));
    },
    open: (component, props = {}, onClose = void 0) => {
      store.set({ isOpen: true, component, props, onClose });
    },
    close: () => {
      store.update((state) => {
        if (state.onClose) state.onClose();
        return { isOpen: false, component: void 0, props: {} };
      });
    }
  };
}
const tableOptions = {
  data: [],
  columns: [],
  enableColumnResizing: false,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  initialState: {
    pagination: {
      pageSize: 25
    }
  },
  getRowId(originalRow, index, parent) {
    return originalRow?.["__index"] ?? index;
  }
};
export {
  secondaryMenuRight as a,
  secondaryMenuRightStore as b,
  secondaryMenuLeftStore as c,
  deepEqualWithOrderedArray as d,
  secondaryMenuLeft as s,
  tableOptions as t
};
