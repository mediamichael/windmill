import { m as get_store_value } from "./ssr.js";
import { t as tutorialsToDo } from "./stores2.js";
import { U as UserService } from "./services.gen.js";
const MAX_TUTORIAL_ID = 7;
async function updateProgress(id) {
  const bef = get_store_value(tutorialsToDo);
  const aft = bef.filter((x) => x != id);
  tutorialsToDo.set(aft);
  let bits = 0;
  for (let i = 0; i <= MAX_TUTORIAL_ID; i++) {
    let mask = 1 << i;
    if (!aft.includes(i)) {
      bits = bits | mask;
    }
  }
  await UserService.updateTutorialProgress({ requestBody: { progress: bits } });
}
async function syncTutorialsTodos() {
  const bits = (await UserService.getTutorialProgress()).progress;
  const todos = [];
  for (let i = 0; i <= MAX_TUTORIAL_ID; i++) {
    let mask = 1 << i;
    if ((bits & mask) == 0) {
      todos.push(i);
    }
  }
  tutorialsToDo.set(todos);
}
export {
  syncTutorialsTodos as s,
  updateProgress as u
};
