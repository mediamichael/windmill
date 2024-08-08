const Breakpoints = {
  sm: 640,
  lg: 1024
};
const WIDE_GRID_COLUMNS = 12;
const NARROW_GRID_COLUMNS = 3;
const columnConfiguration = [
  [Breakpoints.lg, WIDE_GRID_COLUMNS],
  [Breakpoints.sm, NARROW_GRID_COLUMNS]
];
const gridColumns = columnConfiguration.map((value) => value[1]);
function isFixed(component) {
  let fixed = false;
  gridColumns.forEach((column) => {
    if (component[column].fixed) {
      fixed = true;
    }
  });
  return fixed;
}
export {
  columnConfiguration as c,
  gridColumns as g,
  isFixed as i
};
