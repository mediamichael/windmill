import { c as create_ssr_component, s as subscribe, a as set_store_value, o as onDestroy, v as validate_component, f as each, e as escape } from "../../../../../../../chunks/ssr.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import { b as base } from "../../../../../../../chunks/base.js";
import { b as emptyString, B as Button } from "../../../../../../../chunks/toast.js";
import { C as CenteredModal } from "../../../../../../../chunks/CenteredModal.js";
import "../../../../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import { w as workspaceStore, u as userStore, e as enterpriseLicense } from "../../../../../../../chunks/stores2.js";
import { A as Alert } from "../../../../../../../chunks/Alert.js";
/* empty css                                                               */
import { T as Tooltip } from "../../../../../../../chunks/Tooltip.js";
import "../../../../../../../chunks/common.js";
import { S as ScheduleEditor } from "../../../../../../../chunks/ScheduleEditor.js";
import { J as JobArgs } from "../../../../../../../chunks/JobArgs.js";
import "d3-dag";
import "d3-zoom";
/* empty css                                                                             */
import "@leeoniya/ufuzzy";
import { m as mergeSchema } from "../../../../../../../chunks/common2.js";
import { S as SchemaForm } from "../../../../../../../chunks/SchemaForm.js";
import { s as setLicense } from "../../../../../../../chunks/enterpriseUtils.js";
import "../../../../../../../chunks/index3.js";
/* empty css                                                                            */
import "@json2csv/plainjs";
/* empty css                                                                  */
import "../../../../../../../chunks/index2.js";
import "ag-grid-community";
import "ol/proj.js";
/* empty css                                                                       */
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let alreadyResumed;
  let approvalStep;
  let schema;
  let $userStore, $$unsubscribe_userStore;
  let $page, $$unsubscribe_page;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  let $enterpriseLicense, $$unsubscribe_enterpriseLicense;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  $$unsubscribe_enterpriseLicense = subscribe(enterpriseLicense, (value) => $enterpriseLicense = value);
  set_store_value(workspaceStore, $workspaceStore = $page.params.workspace, $workspaceStore);
  $page.url.href.replace($page.url.origin, "");
  let job = void 0;
  let currentApprovers = [];
  let approver = $page.url.searchParams.get("approver") ?? void 0;
  let completed = false;
  let dynamicSchema = {};
  let default_payload = {};
  let enum_payload = {};
  setLicense();
  onDestroy(() => {
  });
  let valid = true;
  let scheduleEditor;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    completed = job?.type == "CompletedJob";
    alreadyResumed = currentApprovers.map((x) => x.resume_id).includes(new Number($page.params.resume).valueOf());
    approvalStep = 1 - 1;
    schema = dynamicSchema;
    $$rendered = `${validate_component(ScheduleEditor, "ScheduleEditor").$$render(
      $$result,
      { this: scheduleEditor },
      {
        this: ($$value) => {
          scheduleEditor = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(CenteredModal, "CenteredModal").$$render(
      $$result,
      {
        title: "Approval for resuming of flow",
        disableLogo: true
      },
      {},
      {
        default: () => {
          return `${`<div class="flex flex-row justify-between flex-wrap sm:flex-nowrap gap-x-4"><div class="w-full"><h2 class="mt-4" data-svelte-h="svelte-178mboh">Approvers:</h2> <p class="text-xs italic" data-svelte-h="svelte-1q88lf4">Each approver can only approve once and cannot change their approver name set by the
					approval sender</p> <div class="my-4">${currentApprovers.length > 0 ? `<ul>${each(currentApprovers, (approver2) => {
            return `<li><b>${escape(approver2.approver)}${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
              default: () => {
                return `Unique id of approval: ${escape(approver2.resume_id)}`;
              }
            })}</b></li>`;
          })}</ul>` : `<p class="text-sm" data-svelte-h="svelte-dwn3f9">No current approvers for this step (approval steps can require more than one
							approval)</p>`}</div></div> <div class="w-full">${``}</div></div> ${!completed ? `<h2 class="mt-4 mb-2" data-svelte-h="svelte-ypqyld">Flow arguments</h2> ${validate_component(JobArgs, "JobArgs").$$render(
            $$result,
            {
              id: job?.id,
              workspace: $workspaceStore ?? "no_w",
              args: job?.args
            },
            {},
            {}
          )}` : ``} <div class="mt-8">${approver ? `<p>Approving as: <b>${escape(approver)}</b></p>` : ``}</div> ${completed ? `<div class="my-2" data-svelte-h="svelte-io5sge"><p><b>The flow is not running anymore. You cannot cancel or resume it.</b></p></div>` : `${alreadyResumed ? `<div class="my-2" data-svelte-h="svelte-1u69wqr"><p><b>You have already approved this flow to be resumed</b></p></div>` : ``}`} ${``} ${schema && !completed ? `${emptyString($enterpriseLicense) ? `${validate_component(Alert, "Alert").$$render(
            $$result,
            {
              type: "warning",
              title: "Adding a form to the approval page is an EE feature"
            },
            {},
            {}
          )}` : `${validate_component(SchemaForm, "SchemaForm").$$render(
            $$result,
            {
              onlyMaskPassword: true,
              noVariablePicker: true,
              schema: mergeSchema(schema, enum_payload),
              isValid: valid,
              args: default_payload
            },
            {
              isValid: ($$value) => {
                valid = $$value;
                $$settled = false;
              },
              args: ($$value) => {
                default_payload = $$value;
                $$settled = false;
              }
            },
            {}
          )}`}` : ``} ${!completed ? `<div class="w-max-md flex flex-row gap-x-4 gap-y-4 justify-between w-full flex-wrap mt-2">${`${validate_component(Button, "Button").$$render(
            $$result,
            {
              btnClasses: "grow",
              color: "red",
              size: "md",
              disabled: completed || alreadyResumed
            },
            {},
            {
              default: () => {
                return `Deny`;
              }
            }
          )}`} ${validate_component(Button, "Button").$$render(
            $$result,
            {
              btnClasses: "grow",
              color: "green",
              size: "md",
              disabled: completed || alreadyResumed || !valid
            },
            {},
            {
              default: () => {
                return `Approve`;
              }
            }
          )}</div>` : ``} ${!completed && !alreadyResumed && job?.raw_flow?.modules?.[approvalStep]?.suspend?.user_auth_required && job?.raw_flow?.modules?.[approvalStep]?.suspend?.self_approval_disabled && $userStore && $userStore.email === job.email && $userStore.is_admin ? `<div class="mt-2">${validate_component(Alert, "Alert").$$render($$result, { type: "warning", title: "Warning" }, {}, {
            default: () => {
              return `As an administrator, by resuming or cancelling this stage of the flow, you bypass the
					self-approval interdiction.`;
            }
          })}</div>` : ``} <div class="mt-4 flex flex-row flex-wrap justify-between"><a target="_blank" rel="noreferrer" href="${escape(base, true) + "/run/" + escape(job?.id, true) + "?workspace=" + escape(job?.workspace_id, true)}">Flow run details (require auth)</a></div> ${``}`}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_userStore();
  $$unsubscribe_page();
  $$unsubscribe_workspaceStore();
  $$unsubscribe_enterpriseLicense();
  return $$rendered;
});
export {
  Page as default
};
