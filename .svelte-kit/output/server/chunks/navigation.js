import { g as goto$1 } from "./client.js";
import { b as base } from "./paths.js";
function goto(path, options = {}) {
  if (base == "") {
    return goto$1(path, options);
  } else {
    const fullPath = path.startsWith(base) ? path : `${base}${path}`;
    return goto$1(fullPath, options);
  }
}
async function setQuery(url, key, value, currentHash = void 0) {
  if (value !== void 0) {
    url.searchParams.set(key, value);
  } else {
    url.searchParams.delete(key);
  }
  await goto(
    currentHash ? `?${url.searchParams.toString()}${currentHash}` : `?${url.searchParams.toString()}`
  );
}
export {
  goto as g,
  setQuery as s
};
