import { o as onDestroy } from "./ssr.js";
const eventPrefix = /^on/;
const events = [];
Object.keys(globalThis).forEach((key) => {
  if (eventPrefix.test(key)) {
    events.push(key.replace(eventPrefix, ""));
  }
});
function useForwardEvents(getRef) {
  const destructors = [];
  onDestroy(() => {
    while (destructors.length) {
      destructors.pop()();
    }
  });
}
export {
  useForwardEvents as u
};
