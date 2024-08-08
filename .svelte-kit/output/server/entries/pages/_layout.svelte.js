import { c as create_ssr_component, k as identity, s as subscribe, o as onDestroy, v as validate_component, q as missing_component, b as add_attribute, f as each, e as escape, z as null_to_empty } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { t as toast } from "../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import { t as tweened } from "../../chunks/tweened.js";
const css$2 = {
  code: '._toastItem.svelte-pfpkxu{-webkit-tap-highlight-color:transparent;align-items:center;background:var(--toastBackground,rgba(66,66,66,.9));border:var(--toastBorder,none);border-radius:var(--toastBorderRadius,.125rem);box-shadow:var(\n    --toastBoxShadow,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)\n  );color:var(--toastColor,#fff);display:flex;flex-direction:row;height:var(--toastHeight,auto);margin:var(--toastMargin,0 0 .5rem 0);min-height:var(--toastMinHeight,3.5rem);overflow:hidden;padding:var(--toastPadding,0);position:relative;width:var(--toastWidth,16rem);will-change:transform,opacity}._toastMsg.svelte-pfpkxu{flex:1 1 0%;padding:var(--toastMsgPadding,.75rem .5rem)}._toastMsg.svelte-pfpkxu a,.pe.svelte-pfpkxu{pointer-events:auto}._toastBtn.svelte-pfpkxu{cursor:pointer;height:var(--toastBtnHeight,100%);outline:none;width:var(--toastBtnWidth,2rem)}._toastBtn.svelte-pfpkxu:after{align-items:center;content:var(--toastBtnContent,"✕");display:flex;font:var(--toastBtnFont,1rem sans-serif);justify-content:center}._toastBar.svelte-pfpkxu{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:none;bottom:var(--toastBarBottom,0);display:block;height:var(--toastBarHeight,6px);left:var(--toastBarLeft,0);pointer-events:none;position:absolute;right:var(--toastBarRight,auto);top:var(--toastBarTop,auto);width:var(--toastBarWidth,100%)}._toastBar.svelte-pfpkxu::-webkit-progress-bar{background:transparent}._toastBar.svelte-pfpkxu::-webkit-progress-value{background:var(--toastProgressBackground,var(--toastBarBackground,rgba(33,150,243,.75)))}._toastBar.svelte-pfpkxu::-moz-progress-bar{background:var(--toastProgressBackground,var(--toastBarBackground,rgba(33,150,243,.75)))}',
  map: null
};
function check(prop, kind = "undefined") {
  return typeof prop === kind;
}
const ToastItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $progress, $$unsubscribe_progress;
  let { item } = $$props;
  let next = item.initial;
  let cprops = {};
  const progress = tweened(item.initial, { duration: item.duration, easing: identity });
  $$unsubscribe_progress = subscribe(progress, (value) => $progress = value);
  function close() {
    toast.pop(item.id);
  }
  function autoclose() {
    if ($progress === 1 || $progress === 0) close();
  }
  onDestroy(() => {
    if (check(item.onpop, "function")) {
      item.onpop(item.id);
    }
  });
  if ($$props.item === void 0 && $$bindings.item && item !== void 0) $$bindings.item(item);
  $$result.css.add(css$2);
  {
    if (!check(item.progress)) {
      item.next = item.progress;
    }
  }
  {
    if (next !== item.next) {
      next = item.next;
      progress.set(next).then(autoclose);
    }
  }
  {
    if (item.component) {
      const { props = {}, sendIdTo } = item.component;
      cprops = {
        ...props,
        ...sendIdTo && { [sendIdTo]: item.id }
      };
    }
  }
  $$unsubscribe_progress();
  return `<div role="status" class="${["_toastItem svelte-pfpkxu", item.pausable ? "pe" : ""].join(" ").trim()}"><div class="${["_toastMsg svelte-pfpkxu", item.component ? "pe" : ""].join(" ").trim()}">${item.component ? `${validate_component(item.component.src || missing_component, "svelte:component").$$render($$result, Object.assign({}, cprops), {}, {})}` : `<!-- HTML_TAG_START -->${item.msg}<!-- HTML_TAG_END -->`}</div> ${item.dismissable ? `<div class="_toastBtn pe svelte-pfpkxu" role="button" tabindex="0"></div>` : ``} <progress class="_toastBar svelte-pfpkxu"${add_attribute("value", $progress, 0)}></progress> </div>`;
});
const css$1 = {
  code: "._toastContainer.svelte-1x6b344{bottom:var(--toastContainerBottom,auto);left:var(--toastContainerLeft,auto);list-style-type:none;margin:0;padding:0;pointer-events:none;position:fixed;right:var(--toastContainerRight,2rem);top:var(--toastContainerTop,1.5rem);z-index:var(--toastContainerZIndex,9999)}",
  map: null
};
function getCss(theme) {
  return theme ? Object.keys(theme).reduce((a, c) => `${a}${c}:${theme[c]};`, "") : void 0;
}
const SvelteToast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $toast, $$unsubscribe_toast;
  $$unsubscribe_toast = subscribe(toast, (value) => $toast = value);
  let { options = {} } = $$props;
  let { target = "default" } = $$props;
  let items = [];
  if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0) $$bindings.target(target);
  $$result.css.add(css$1);
  {
    toast._init(target, options);
  }
  items = $toast.filter((i) => i.target === target);
  $$unsubscribe_toast();
  return `<ul class="_toastContainer svelte-1x6b344">${each(items, (item) => {
    return `<li class="${escape(null_to_empty(item.classes?.join(" ")), true) + " svelte-1x6b344"}"${add_attribute("style", getCss(item.theme), 0)}>${validate_component(ToastItem, "ToastItem").$$render($$result, { item }, {}, {})} </li>`;
  })} </ul>`;
});
const css = {
  code: ".wrap.svelte-33ukuq{display:contents;font-family:Inter,sans-serif;font-size:.875rem}.wrap.svelte-33ukuq strong{font-weight:600}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const toastOptions = {
    duration: 5e3,
    initial: 1,
    next: 0,
    pausable: true,
    dismissable: true,
    reversed: false,
    intro: { x: 256 },
    theme: {}
    // css var overrides
  };
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-miaoy1_START -->${$$result.title = `<title>${escape($page.data?.stuff?.title ? `${$page.data?.stuff?.title} | ` : "")}Windmill</title>`, ""}<!-- HEAD_svelte-miaoy1_END -->`, ""} ${slots.default ? slots.default({}) : ``} <div class="wrap svelte-33ukuq">${validate_component(SvelteToast, "SvelteToast").$$render($$result, { options: toastOptions }, {}, {})} </div>`;
});
export {
  Layout as default
};
