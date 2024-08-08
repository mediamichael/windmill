function getSubModules(flowModule) {
  if (flowModule.value.type === "forloopflow" || flowModule.value.type === "whileloopflow") {
    return [flowModule.value.modules];
  } else if (flowModule.value.type === "branchall") {
    return flowModule.value.branches.map((branch) => branch.modules);
  } else if (flowModule.value.type == "branchone") {
    return [...flowModule.value.branches.map((branch) => branch.modules), flowModule.value.default];
  }
  return [];
}
function getAllSubmodules(flowModule) {
  return getSubModules(flowModule).map((modules) => {
    return modules.map((module) => {
      return [module, ...getAllSubmodules(module).flat()];
    }).flat();
  });
}
function getAllModules(flow_modules, failure_module) {
  let modules = [
    ...flow_modules,
    ...flow_modules.map((x) => getAllSubmodules(x).flat()),
    ...failure_module ? [failure_module] : []
  ].flat();
  return modules;
}
function getExpr(x) {
  if (x == void 0) return [];
  return x.type === "javascript" ? [x.expr] : [];
}
function exprsOfInputTransforms(x) {
  return Object.values(x).map((x2) => getExpr(x2)).flat();
}
function filterDependentComponents(modules, id) {
  return id == "Input" ? Object.fromEntries(
    modules.map((mod) => [mod.id, getModuleExprs(mod).filter((expr) => expr.includes(`flow_input`))]).filter((x) => x[1].length > 0)
  ) : Object.fromEntries(
    modules.map((mod) => [
      mod.id,
      getModuleExprs(mod).filter((expr) => {
        const pattern = new RegExp(`\\bresults\\.${id}(?:\\b|\\.)`);
        return pattern.test(expr);
      })
    ]).filter((x) => x[1].length > 0)
  );
}
function getModuleExprs(x) {
  let exprs = [];
  if (x.value.type === "forloopflow") {
    exprs.push(...getExpr(x.value.iterator));
  } else if (x.value.type === "branchone") {
    x.value.branches.map((branch) => {
      exprs.push(branch.expr);
    });
  } else if (x.value.type === "flow" || x.value.type === "script" || x.value.type == "rawscript") {
    exprs.push(...exprsOfInputTransforms(x.value.input_transforms));
    exprs.push(...getExpr(x.sleep));
    if (x.stop_after_if?.expr) {
      exprs.push(x.stop_after_if.expr);
    }
    exprs.push(...getExpr(x.sleep));
  }
  return exprs;
}
function getDependeeAndDependentComponents(id, modules, failure_module) {
  let all_modules = getAllModules(modules, failure_module);
  let module = all_modules.find((x) => x.id === id);
  let allIds = [
    ["Input", "flow_input"],
    ...all_modules.map((x) => [x.id, `results.${x.id}`])
  ];
  let dependees = {};
  if (module) {
    getModuleExprs(module).forEach((expr) => {
      allIds.forEach((y) => {
        if (expr.includes(y[1])) {
          dependees[y[0]] = dependees[y[0]] ?? [];
          dependees[y[0]].push(expr);
        }
      });
    });
  }
  let dependents = filterDependentComponents(all_modules, id);
  return { dependees, dependents };
}
export {
  getAllSubmodules as a,
  getSubModules as b,
  getDependeeAndDependentComponents as c,
  getAllModules as g
};
