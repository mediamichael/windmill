import { c as create_ssr_component, e as escape, b as add_attribute, l as add_classes } from "./ssr.js";
const WindmillIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { height = "24px" } = $$props;
  let { width = "24px" } = $$props;
  let { white = false } = $$props;
  let { spin = void 0 } = $$props;
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.white === void 0 && $$bindings.white && white !== void 0) $$bindings.white(white);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0) $$bindings.spin(spin);
  return ` <svg class="${[
    escape($$props.class, true),
    (spin === "veryfast" ? "animate-[spin_2s_linear_infinite]" : "") + " " + (spin === "fast" ? "animate-[spin_5s_linear_infinite]" : "") + " " + (spin === "medium" ? "animate-[spin_15s_linear_infinite]" : "") + " " + (spin === "slow" ? "animate-[spin_50s_linear_infinite]" : "")
  ].join(" ").trim()}" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} viewBox="0 0 256 256" style="enable-background:new 0 0 256 256;" xml:space="preserve"><style type="text/css">.st0,.st1{fill:#fff}.st1{opacity:.4}.st2{fill:#bcd4fc}.st2-gray{fill:#ccc}.st3{fill:#3b82f6}.st4{fill:#b3b3b3}.st5{fill:url(#SVGID_1_)}.st6{fill:url(#SVGID_00000021089067129159788970000008246765442136188072_)}.st7{fill:url(#SVGID_00000117639240116366130650000015074833605515028638_)}.st8{fill:url(#SVGID_00000101781798616409025840000016567063639337360777_)}.st8,.st9{opacity:.4}.st9{fill:url(#SVGID_00000052086836598721292040000002033117744178971046_)}.st10{fill:url(#SVGID_00000159460939004760751800000002448009281983951536_);opacity:.4}.st11{fill:url(#SVGID_00000013177830667419993080000017721442101626521532_);opacity:.4}.st12{fill:url(#SVGID_00000152235521444854938490000006526001119318383285_);opacity:.4}.st13{fill:url(#SVGID_00000119823135212293698520000012774889010992664993_);opacity:.4}</style><g><polygon points="134.78,14.22 114.31,48.21 101.33,69.75 158.22,69.75 177.97,36.95 191.67,14.22 	"${add_classes(((!white ? "st2" : "") + " " + (white ? "st2-gray" : "")).trim())}></polygon><polygon points="227.55,69.75 186.61,69.75 101.33,69.75 129.78,119.02 158.16,119.02 228.61,119.02 256,119.02 	"${add_classes(((!white ? "st3" : "") + " " + (white ? "st0" : "")).trim())}></polygon><polygon points="136.93,132.47 116.46,167.93 73.82,241.78 130.71,241.78 144.9,217.2 180.13,156.18 193.82,132.46 	
		"${add_classes(((!white ? "st3" : "") + " " + (white ? "st0" : "")).trim())}></polygon><polygon points="121.7,131.95 101.23,96.49 58.59,22.63 30.15,71.91 44.34,96.49 79.57,157.5 93.26,181.22 	"${add_classes(((!white ? "st3" : "") + " " + (white ? "st0" : "")).trim())}></polygon><polygon points="64.81,131.95 25.15,131.21 0,130.74 28.44,180.01 66.73,180.72 93.26,181.21 	"${add_classes(((!white ? "st2" : "") + " " + (white ? "st2-gray" : "")).trim())}></polygon><polygon points="165.38,181.74 184.58,216.46 196.75,238.47 225.19,189.2 206.66,155.69 193.83,132.46 	"${add_classes(((!white ? "st2" : "") + " " + (white ? "st2-gray" : "")).trim())}></polygon></g></svg>`;
});
export {
  WindmillIcon as W
};
