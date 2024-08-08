import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { Chart, ScatterController } from "chart.js";
import { C as Chart$1 } from "./Line.js";
import { u as useForwardEvents } from "./svelte.js";
const Scatter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  Chart.register(ScatterController);
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
    $$rendered = `${validate_component(Chart$1, "Chart").$$render(
      $$result,
      Object.assign({}, { type: "scatter" }, props, { this: baseChartRef }, { chart }),
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
  Scatter as S
};
