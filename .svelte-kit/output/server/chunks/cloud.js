import { B as BROWSER } from "./prod-ssr.js";
function isCloudHosted() {
  return BROWSER;
}
export {
  isCloudHosted as i
};
