import { c as create_ssr_component, s as subscribe, v as validate_component, e as escape } from "./ssr.js";
import { u as userStore } from "./stores2.js";
import { B as Badge } from "./Badge.js";
import { P as Popover } from "./Popover.js";
import { U as Users } from "./users.js";
const SharedBadge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let { extraPerms = {} } = $$props;
  let { canWrite } = $$props;
  let kind = void 0;
  let reason = "";
  if ($$props.extraPerms === void 0 && $$bindings.extraPerms && extraPerms !== void 0) $$bindings.extraPerms(extraPerms);
  if ($$props.canWrite === void 0 && $$bindings.canWrite && canWrite !== void 0) $$bindings.canWrite(canWrite);
  {
    {
      if ($userStore?.is_admin || $userStore?.is_super_admin) {
        kind = void 0;
      } else {
        let username = $userStore?.username ?? "";
        let pgroups = $userStore?.pgroups ?? [];
        let pusername = `u/${username}`;
        let extraPermsKeys = Object.keys(extraPerms);
        if (pusername in extraPermsKeys) {
          if (extraPerms[pusername]) {
            kind = "write";
          } else {
            kind = "read";
          }
          reason = "This item was shared to you personally";
        } else {
          let writeGroup = pgroups.find((x) => extraPermsKeys.includes(x) && extraPerms[x]);
          if (writeGroup) {
            kind = "write";
            reason = `This item was write shared to the group ${writeGroup} which you are a member of`;
          } else {
            let readGroup = pgroups.find((x) => extraPermsKeys.includes(x));
            if (readGroup) {
              kind = "read";
              reason = `This item was read-only shared to the group ${readGroup} which you are a member of`;
            } else {
              kind = void 0;
            }
          }
        }
        if (kind == "read" && canWrite) {
          kind = void 0;
        }
        if (kind == void 0 && !canWrite) {
          kind = "read";
          reason = "";
        }
      }
    }
  }
  $$unsubscribe_userStore();
  return `${kind === "read" || kind === "write" ? `${validate_component(Badge, "Badge").$$render(
    $$result,
    {
      capitalize: true,
      color: "blue",
      baseClass: "border border-blue-200 flex gap-1 items-center"
    },
    {},
    {
      default: () => {
        return `${validate_component(Popover, "Popover").$$render($$result, { notClickable: true }, {}, {
          text: () => {
            return `<span slot="text">${escape(kind == "read" ? "Read & Run only" : "Read & Write")} ${escape(reason)}</span>`;
          },
          default: () => {
            return `${validate_component(Users, "Users").$$render($$result, { size: 12 }, {}, {})}`;
          }
        })}`;
      }
    }
  )}` : ``}`;
});
export {
  SharedBadge as S
};
