import { c as create_ssr_component, o as onDestroy, w as spread, x as escape_object, b as add_attribute, v as validate_component } from "./ssr.js";
import { Chart as Chart$1, LineController } from "chart.js";
import { u as useForwardEvents } from "./svelte.js";
function clean(props2) {
  let { data: data2, type: type2, options: options2, plugins: plugins2, children, $$scope, $$slots, ...rest } = props2;
  return rest;
}
const Chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  let { data = { datasets: [] } } = $$props;
  let { options = {} } = $$props;
  let { plugins = [] } = $$props;
  let { updateMode = void 0 } = $$props;
  let { chart = null } = $$props;
  let canvasRef;
  let props = clean($$props);
  onDestroy(() => {
    if (chart) chart.destroy();
    chart = null;
  });
  useForwardEvents();
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
  if ($$props.plugins === void 0 && $$bindings.plugins && plugins !== void 0) $$bindings.plugins(plugins);
  if ($$props.updateMode === void 0 && $$bindings.updateMode && updateMode !== void 0) $$bindings.updateMode(updateMode);
  if ($$props.chart === void 0 && $$bindings.chart && chart !== void 0) $$bindings.chart(chart);
  return `<canvas${spread([escape_object(props)], {})}${add_attribute("this", canvasRef, 0)}></canvas>`;
});
const Line = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  Chart$1.register(LineController);
  let { chart = null } = $$props;
  let props;
  let baseChartRef;
  useForwardEvents();
  if ($$props.chart === void 0 && $$bindings.chart && chart !== void 0) $$bindings.chart(chart);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    props = $$props;
    $$rendered = `${validate_component(Chart, "Chart").$$render(
      $$result,
      Object.assign({}, { type: "line" }, props, { this: baseChartRef }, { chart }),
      {
        this: ($$value) => {
          baseChartRef = $$value;
          $$settled = false;
        },
        chart: ($$value) => {
          chart = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Chart as C,
  Line as L
};
