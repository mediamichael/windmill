import { c as create_ssr_component, d as createEventDispatcher, e as escape, v as validate_component, b as add_attribute, f as each } from "../../../../../chunks/ssr.js";
import { G as GroupService } from "../../../../../chunks/services.gen.js";
import { C as CenteredPage } from "../../../../../chunks/CenteredPage.js";
import "../../../../../chunks/index2.js";
import "yaml";
import "../../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import { B as Button } from "../../../../../chunks/toast.js";
import "minimatch";
import { D as Drawer, a as DrawerContent } from "../../../../../chunks/DrawerContent.js";
import { P as Popup } from "../../../../../chunks/Popup.js";
import "../../../../../chunks/common.js";
/* empty css                                                         */
import { S as Skeleton } from "../../../../../chunks/Skeleton.js";
import { T as TableCustom } from "../../../../../chunks/TableCustom.js";
import { P as PageHeader } from "../../../../../chunks/PageHeader.js";
import { P as Plus } from "../../../../../chunks/plus.js";
const InstanceGroupEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let email = "";
  let instance_group;
  let members = void 0;
  createEventDispatcher();
  async function load() {
    return Promise.all([loadInstanceGroup()]);
  }
  async function loadInstanceGroup() {
    instance_group = await GroupService.getInstanceGroup({ name });
    members = instance_group?.emails ? instance_group.emails.map((x) => {
      return { member_email: x };
    }) : [];
  }
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  {
    {
      load();
    }
  }
  return `<div class="flex flex-col gap-6"><h1>${escape(name)}</h1> ${instance_group !== void 0 ? `<div class="flex flex-col gap-1"><textarea rows="2" placeholder="Summary of the group">${escape(instance_group.summary || "")}</textarea> <div class="flex justify-end">${validate_component(Button, "Button").$$render($$result, { size: "xs" }, {}, {
    default: () => {
      return `Save Summary`;
    }
  })}</div></div> <h2>Members (${escape(members?.length ?? 0)})</h2> <div class="flex items-start"><input type="text" placeholder="john@acme.com"${add_attribute("value", email, 0)}> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "contained",
      color: "blue",
      size: "sm",
      btnClasses: "!ml-4"
    },
    {},
    {
      default: () => {
        return `Add member`;
      }
    }
  )}</div> ${members ? `${validate_component(TableCustom, "TableCustom").$$render($$result, {}, {}, {
    body: () => {
      return `<tbody slot="body">${each(members, ({ member_email }) => {
        return `<tr><td>${escape(member_email)}</td> <td><button class="ml-2 text-red-500" data-svelte-h="svelte-1y17ivx">remove</button></td> </tr>`;
      })}</tbody>`;
    },
    "header-row": () => {
      return `<tr slot="header-row" data-svelte-h="svelte-qx694u"><th>user</th> <th></th></tr>`;
    }
  })}` : `<div class="flex flex-col">${each(new Array(6), (_) => {
    return `${validate_component(Skeleton, "Skeleton").$$render($$result, { layout: [[2], 0.7] }, {}, {})}`;
  })}</div>`}` : ``}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let newGroupName = "";
  let instanceGroups = void 0;
  let groupDrawer;
  async function loadInstanceGroups() {
    try {
      instanceGroups = await GroupService.listInstanceGroups();
    } catch (e) {
      instanceGroups = void 0;
    }
  }
  let editGroupName = "";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        loadInstanceGroups();
      }
    }
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      { this: groupDrawer },
      {
        this: ($$value) => {
          groupDrawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(DrawerContent, "DrawerContent").$$render($$result, { title: "Instance Group " + editGroupName }, {}, {
            default: () => {
              return `${validate_component(InstanceGroupEditor, "InstanceGroupEditor").$$render($$result, { name: editGroupName }, {}, {})}`;
            }
          })}`;
        }
      }
    )} ${validate_component(CenteredPage, "CenteredPage").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(PageHeader, "PageHeader").$$render($$result, { title: "Instance Groups" }, {}, {
          default: () => {
            return `<div class="flex flex-row"><div>${validate_component(Popup, "Popup").$$render(
              $$result,
              {
                floatingConfig: {
                  strategy: "absolute",
                  placement: "bottom-end"
                },
                containerClasses: "border rounded-lg shadow-lg p-4 bg-surface"
              },
              {},
              {
                button: () => {
                  return `${validate_component(Button, "Button").$$render(
                    $$result,
                    {
                      size: "md",
                      startIcon: { icon: Plus },
                      nonCaptureEvent: true
                    },
                    {},
                    {
                      default: () => {
                        return `New group`;
                      }
                    }
                  )} `;
                },
                default: ({ close }) => {
                  return `<div class="flex-col flex gap-2"><input class="mr-2" placeholder="New instance group name"${add_attribute("value", newGroupName, 0)}> ${validate_component(Button, "Button").$$render(
                    $$result,
                    {
                      size: "md",
                      startIcon: { icon: Plus },
                      disabled: !newGroupName
                    },
                    {},
                    {
                      default: () => {
                        return `Create`;
                      }
                    }
                  )}</div>`;
                }
              }
            )}</div></div>`;
          }
        })} ${instanceGroups && instanceGroups.length > 0 ? `<div class="relative mb-20 pt-8">${validate_component(TableCustom, "TableCustom").$$render($$result, {}, {}, {
          body: () => {
            return `<tbody slot="body">${each(instanceGroups, ({ name, summary, emails }) => {
              return `<tr><td><a href="${"#" + escape(name, true)}">${escape(name)} </a></td> <td>${escape(summary ? summary.slice(0, 50) + (summary.length > 50 ? "..." : "") : "-")}</td> <td>${escape(emails?.length ?? 0)} members</td> <td>${validate_component(Button, "Button").$$render($$result, { color: "red", variant: "border" }, {}, {
                default: () => {
                  return `Delete`;
                }
              })}</td> </tr>`;
            })}</tbody>`;
          },
          "header-row": () => {
            return `<tr slot="header-row" data-svelte-h="svelte-18db2p1"><th>Name</th> <th>Summary</th> <th>Members</th> <th></th></tr>`;
          }
        })}</div>` : ``}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
