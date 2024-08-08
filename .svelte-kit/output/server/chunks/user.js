import { U as UserService } from "./services.gen.js";
async function getUserExt(workspace) {
  try {
    const user = await UserService.whoami({ workspace });
    return mapUserToUserExt(user);
  } catch (error) {
    return void 0;
  }
}
function mapUserToUserExt(user) {
  return {
    ...user,
    groups: user.groups,
    pgroups: user.groups.map((x) => `g/${x}`)
  };
}
export {
  getUserExt as g
};
