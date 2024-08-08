const get_label = (opt) => {
  if (opt instanceof Object) {
    if (opt.label === void 0) {
      console.error(`MultiSelect option ${JSON.stringify(opt)} is an object but has no label key`);
    }
    return opt.label;
  }
  return `${opt}`;
};
function get_style(option, key = null) {
  let css_str = ``;
  if (![`selected`, `option`, null].includes(key)) {
    console.error(`MultiSelect: Invalid key=${key} for get_style`);
  }
  if (typeof option == `object` && option.style) {
    if (typeof option.style == `string`) {
      css_str = option.style;
    }
    if (typeof option.style == `object`) {
      if (key && key in option.style) return option.style[key] ?? ``;
      else {
        console.error(`Invalid style object for option=${JSON.stringify(option)}`);
      }
    }
  }
  if (css_str.trim() && !css_str.trim().endsWith(`;`)) css_str += `;`;
  return css_str;
}
function scroll_into_view_if_needed_polyfill(elem, centerIfNeeded = true) {
  const observer = new IntersectionObserver(function([entry]) {
    const ratio = entry.intersectionRatio;
    if (ratio < 1) {
      const place = ratio <= 0 && centerIfNeeded ? `center` : `nearest`;
      elem.scrollIntoView({
        block: place,
        inline: place
      });
    }
    observer.disconnect();
  });
  observer.observe(elem);
  return observer;
}
export {
  get_label as a,
  get_style as g,
  scroll_into_view_if_needed_polyfill as s
};
