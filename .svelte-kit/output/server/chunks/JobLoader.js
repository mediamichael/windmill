import { c as create_ssr_component, s as subscribe, o as onDestroy } from "./ssr.js";
import { J as JobService, C as ConcurrencyGroupsService } from "./services.gen.js";
import { r as subtractDaysFromDateString, s as sendUserToast } from "./toast.js";
import { w as workspaceStore } from "./stores2.js";
import { t as tweened } from "./tweened.js";
function computeJobKinds(jobKindsCat) {
  if (jobKindsCat == "all") {
    let kinds = [
      "script",
      "flow",
      "dependencies",
      "flowdependencies",
      "appdependencies",
      "preview",
      "flowpreview",
      "script_hub"
    ];
    return kinds.join(",");
  } else if (jobKindsCat == "dependencies") {
    let kinds = ["dependencies", "flowdependencies", "appdependencies"];
    return kinds.join(",");
  } else if (jobKindsCat == "previews") {
    let kinds = ["preview", "flowpreview"];
    return kinds.join(",");
  } else if (jobKindsCat == "deploymentcallbacks") {
    let kinds = ["deploymentcallback"];
    return kinds.join(",");
  } else {
    let kinds = ["script", "flow"];
    return kinds.join(",");
  }
}
function updateWithNewJobs(jobs, newJobs) {
  const oldJobs = jobs?.map((x) => x.id);
  let ret = newJobs.filter((x) => !oldJobs.includes(x.id)).concat(jobs);
  newJobs.filter((x) => oldJobs.includes(x.id)).forEach((x) => ret[ret?.findIndex((y) => y.id == x.id)] = x);
  return ret;
}
function sortMinDate(minTs, jobs) {
  if (minTs != void 0) {
    const minDate = new Date(minTs);
    return jobs.filter((x) => x.started_at ? new Date(x.started_at) > minDate : x.created_at ? new Date(x.created_at) > minDate : false);
  } else {
    return jobs;
  }
}
function computeExternalJobs(obscuredJobs) {
  return obscuredJobs.map((x) => ({
    type: x.typ,
    started_at: x.started_at,
    running: x.started_at != void 0,
    id: "-",
    script_path: "-",
    created_by: "-",
    created_at: "-",
    success: false,
    canceled: false,
    is_flow_step: false,
    is_skipped: false,
    visible_to_owner: false,
    email: "-",
    permissioned_as: "-",
    tag: "-",
    job_kind: "script",
    duration_ms: x.duration_ms
  }));
}
const JobLoader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { jobs } = $$props;
  let { user } = $$props;
  let { label = null } = $$props;
  let { folder } = $$props;
  let { path } = $$props;
  let { success = void 0 } = $$props;
  let { isSkipped = false } = $$props;
  let { showSchedules = true } = $$props;
  let { showFutureJobs = true } = $$props;
  let { argFilter } = $$props;
  let { resultFilter = void 0 } = $$props;
  let { schedulePath = void 0 } = $$props;
  let { jobKindsCat } = $$props;
  let { minTs = void 0 } = $$props;
  let { maxTs = void 0 } = $$props;
  let { jobKinds = "" } = $$props;
  let { queue_count = void 0 } = $$props;
  let { autoRefresh = true } = $$props;
  let { completedJobs = void 0 } = $$props;
  let { externalJobs = void 0 } = $$props;
  let { concurrencyKey } = $$props;
  let { tag } = $$props;
  let { extendedJobs = void 0 } = $$props;
  let { argError = "" } = $$props;
  let { resultError = "" } = $$props;
  let { loading = false } = $$props;
  let { refreshRate = 5e3 } = $$props;
  let { syncQueuedRunsCount = true } = $$props;
  let { allWorkspaces = false } = $$props;
  let { computeMinAndMax } = $$props;
  let { lookback = 0 } = $$props;
  let { perPage = void 0 } = $$props;
  let intervalId;
  let sync = true;
  function onParamChanges() {
    resetJobs();
    loadJobsIntern(true);
  }
  let loadingFetch = false;
  async function fetchJobs(startedBefore, startedAfter, startedAfterCompletedJobs) {
    loadingFetch = true;
    try {
      let scriptPathStart = folder === null || folder === "" ? void 0 : `f/${folder}/`;
      let scriptPathExact = path === null || path === "" ? void 0 : path;
      return JobService.listJobs({
        workspace: $workspaceStore,
        createdOrStartedBefore: startedBefore,
        createdOrStartedAfter: startedAfter,
        createdOrStartedAfterCompletedJobs: startedAfterCompletedJobs,
        schedulePath,
        scriptPathExact,
        createdBy: user === null || user === "" ? void 0 : user,
        scriptPathStart,
        jobKinds,
        success: success == "success" ? true : success == "failure" ? false : void 0,
        running: success == "running" ? true : void 0,
        isSkipped: isSkipped ? void 0 : false,
        // isFlowStep: jobKindsCat != 'all' ? false : undefined,
        hasNullParent: scriptPathExact != void 0 || scriptPathStart != void 0 || jobKinds != "all" ? true : void 0,
        label: label === null || label === "" ? void 0 : label,
        tag: tag === null || tag === "" ? void 0 : tag,
        isNotSchedule: showSchedules == false ? true : void 0,
        scheduledForBeforeNow: showFutureJobs == false ? true : void 0,
        args: argFilter && argFilter != "{}" && argFilter != "" && argError == "" ? argFilter : void 0,
        result: resultFilter && resultFilter != "{}" && resultFilter != "" && resultError == "" ? resultFilter : void 0,
        allWorkspaces: allWorkspaces ? true : void 0,
        perPage
      });
    } catch (e) {
      sendUserToast("There was an issue loading jobs, see browser console for more details", true);
      console.error(e);
      return [];
    } finally {
      loadingFetch = false;
    }
  }
  async function fetchExtendedJobs(concurrencyKey2, startedBefore, startedAfter, startedAfterCompletedJobs) {
    loadingFetch = true;
    try {
      return ConcurrencyGroupsService.listExtendedJobs({
        rowLimit: 1e3,
        concurrencyKey: concurrencyKey2 == null || concurrencyKey2 == "" ? void 0 : concurrencyKey2,
        workspace: $workspaceStore,
        createdOrStartedBefore: startedBefore,
        createdOrStartedAfter: startedAfter,
        createdOrStartedAfterCompletedJobs: startedAfterCompletedJobs,
        schedulePath,
        scriptPathExact: path === null || path === "" ? void 0 : path,
        createdBy: user === null || user === "" ? void 0 : user,
        scriptPathStart: folder === null || folder === "" ? void 0 : `f/${folder}/`,
        jobKinds,
        success: success == "success" ? true : success == "failure" ? false : void 0,
        running: success == "running" ? true : void 0,
        isSkipped: isSkipped ? void 0 : false,
        isFlowStep: jobKindsCat != "all" ? false : void 0,
        label: label === null || label === "" ? void 0 : label,
        tag: tag === null || tag === "" ? void 0 : tag,
        isNotSchedule: showSchedules == false ? true : void 0,
        scheduledForBeforeNow: showFutureJobs == false ? true : void 0,
        args: argFilter && argFilter != "{}" && argFilter != "" && argError == "" ? argFilter : void 0,
        result: resultFilter && resultFilter != "{}" && resultFilter != "" && resultError == "" ? resultFilter : void 0,
        allWorkspaces: allWorkspaces ? true : void 0,
        perPage
      });
    } catch (e) {
      sendUserToast("There was an issue loading jobs, see browser console for more details", true);
      console.error(e);
      return { jobs: [], obscured_jobs: [] };
    } finally {
      loadingFetch = false;
    }
  }
  async function loadJobs(nMinTs, nMaxTs, reset, shouldGetCount) {
    minTs = nMinTs;
    maxTs = nMaxTs;
    if (reset) {
      resetJobs();
    }
    await loadJobsIntern(shouldGetCount);
  }
  function resetJobs() {
    jobs = void 0;
    completedJobs = void 0;
    externalJobs = void 0;
    extendedJobs = void 0;
    intervalId && clearInterval(intervalId);
    intervalId = setInterval(syncer, refreshRate);
  }
  async function loadJobsIntern(shouldGetCount) {
    if (shouldGetCount) {
      getCount();
    }
    loading = true;
    try {
      const extendedMinTs = subtractDaysFromDateString(minTs, lookback);
      if (concurrencyKey == null || concurrencyKey === "") {
        let newJobs = await fetchJobs(maxTs, void 0, extendedMinTs);
        extendedJobs = { jobs: newJobs, obscured_jobs: [] };
        jobs = sortMinDate(minTs, newJobs);
        externalJobs = [];
      } else {
        extendedJobs = await fetchExtendedJobs(concurrencyKey, maxTs, void 0, extendedMinTs);
        const newJobs = extendedJobs.jobs;
        const newExternalJobs = extendedJobs.obscured_jobs;
        if (minTs != void 0) {
          const minDate = new Date(minTs);
          jobs = newJobs.filter((x) => x.started_at ? new Date(x.started_at) > minDate : x.created_at ? new Date(x.created_at) > minDate : false);
          externalJobs = computeExternalJobs(newExternalJobs.filter((x) => x.started_at && new Date(x.started_at) > minDate));
        } else {
          jobs = newJobs;
          externalJobs = computeExternalJobs(newExternalJobs);
        }
      }
      computeCompletedJobs();
    } catch (err) {
      sendUserToast(`There was a problem fetching jobs: ${err}`, true);
      console.error(JSON.stringify(err));
    }
    loading = false;
  }
  async function getCount() {
    const qc = (await JobService.getQueueCount({
      workspace: $workspaceStore,
      allWorkspaces
    })).database_length;
    if (queue_count) {
      queue_count.set(qc);
    } else {
      queue_count = tweened(qc, { duration: 1e3 });
    }
  }
  async function syncer() {
    if (loadingFetch) {
      return;
    }
    if (sync) {
      if (syncQueuedRunsCount) {
        getCount();
      }
      if (computeMinAndMax) {
        const ts = computeMinAndMax();
        if (ts) {
          minTs = ts.minTs;
          maxTs = ts.maxTs;
          if (maxTs != void 0) {
            loadJobsIntern(false);
          }
        }
      }
      if (jobs && maxTs == void 0) {
        if (success == "running") {
          loadJobsIntern(false);
        } else {
          let ts = void 0;
          let cursor = 0;
          while (cursor < jobs.length && minTs == void 0) {
            let invCursor = jobs.length - 1 - cursor;
            let isQueuedJob = invCursor == 0 || jobs[invCursor].type == "QueuedJob";
            if (isQueuedJob) {
              if (cursor > 0) {
                let inc = invCursor == 0 && jobs[invCursor].type == "CompletedJob" ? 0 : 1;
                const date = new Date(jobs[invCursor + inc]?.started_at ?? jobs[invCursor + inc]?.created_at);
                date.setMilliseconds(date.getMilliseconds() + 1);
                ts = date.toISOString();
              }
              break;
            }
            cursor++;
          }
          loading = true;
          let newJobs;
          if (concurrencyKey == null || concurrencyKey === "") {
            newJobs = await fetchJobs(maxTs, minTs ?? ts, void 0);
          } else {
            extendedJobs = await fetchExtendedJobs(concurrencyKey, maxTs, void 0, minTs ?? ts);
            externalJobs = computeExternalJobs(extendedJobs.obscured_jobs);
            newJobs = sortMinDate(minTs ?? ts, extendedJobs.jobs);
          }
          if (newJobs && newJobs.length > 0 && jobs) {
            jobs = updateWithNewJobs(jobs, newJobs);
            jobs = jobs;
            if (concurrencyKey == null || concurrencyKey === "") {
              if (!extendedJobs) {
                extendedJobs = { jobs, obscured_jobs: [] };
              } else {
                extendedJobs.jobs = updateWithNewJobs(extendedJobs.jobs, newJobs);
                extendedJobs = extendedJobs;
              }
              externalJobs = [];
            }
            computeCompletedJobs();
          }
          loading = false;
        }
      }
    }
  }
  function computeCompletedJobs() {
    completedJobs = jobs?.filter((x) => x.type == "CompletedJob").map((x) => x) ?? [];
  }
  onDestroy(() => {
    sync = false;
    if (intervalId) {
      clearInterval(intervalId);
    }
  });
  if ($$props.jobs === void 0 && $$bindings.jobs && jobs !== void 0) $$bindings.jobs(jobs);
  if ($$props.user === void 0 && $$bindings.user && user !== void 0) $$bindings.user(user);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.folder === void 0 && $$bindings.folder && folder !== void 0) $$bindings.folder(folder);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0) $$bindings.path(path);
  if ($$props.success === void 0 && $$bindings.success && success !== void 0) $$bindings.success(success);
  if ($$props.isSkipped === void 0 && $$bindings.isSkipped && isSkipped !== void 0) $$bindings.isSkipped(isSkipped);
  if ($$props.showSchedules === void 0 && $$bindings.showSchedules && showSchedules !== void 0) $$bindings.showSchedules(showSchedules);
  if ($$props.showFutureJobs === void 0 && $$bindings.showFutureJobs && showFutureJobs !== void 0) $$bindings.showFutureJobs(showFutureJobs);
  if ($$props.argFilter === void 0 && $$bindings.argFilter && argFilter !== void 0) $$bindings.argFilter(argFilter);
  if ($$props.resultFilter === void 0 && $$bindings.resultFilter && resultFilter !== void 0) $$bindings.resultFilter(resultFilter);
  if ($$props.schedulePath === void 0 && $$bindings.schedulePath && schedulePath !== void 0) $$bindings.schedulePath(schedulePath);
  if ($$props.jobKindsCat === void 0 && $$bindings.jobKindsCat && jobKindsCat !== void 0) $$bindings.jobKindsCat(jobKindsCat);
  if ($$props.minTs === void 0 && $$bindings.minTs && minTs !== void 0) $$bindings.minTs(minTs);
  if ($$props.maxTs === void 0 && $$bindings.maxTs && maxTs !== void 0) $$bindings.maxTs(maxTs);
  if ($$props.jobKinds === void 0 && $$bindings.jobKinds && jobKinds !== void 0) $$bindings.jobKinds(jobKinds);
  if ($$props.queue_count === void 0 && $$bindings.queue_count && queue_count !== void 0) $$bindings.queue_count(queue_count);
  if ($$props.autoRefresh === void 0 && $$bindings.autoRefresh && autoRefresh !== void 0) $$bindings.autoRefresh(autoRefresh);
  if ($$props.completedJobs === void 0 && $$bindings.completedJobs && completedJobs !== void 0) $$bindings.completedJobs(completedJobs);
  if ($$props.externalJobs === void 0 && $$bindings.externalJobs && externalJobs !== void 0) $$bindings.externalJobs(externalJobs);
  if ($$props.concurrencyKey === void 0 && $$bindings.concurrencyKey && concurrencyKey !== void 0) $$bindings.concurrencyKey(concurrencyKey);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
  if ($$props.extendedJobs === void 0 && $$bindings.extendedJobs && extendedJobs !== void 0) $$bindings.extendedJobs(extendedJobs);
  if ($$props.argError === void 0 && $$bindings.argError && argError !== void 0) $$bindings.argError(argError);
  if ($$props.resultError === void 0 && $$bindings.resultError && resultError !== void 0) $$bindings.resultError(resultError);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
  if ($$props.refreshRate === void 0 && $$bindings.refreshRate && refreshRate !== void 0) $$bindings.refreshRate(refreshRate);
  if ($$props.syncQueuedRunsCount === void 0 && $$bindings.syncQueuedRunsCount && syncQueuedRunsCount !== void 0) $$bindings.syncQueuedRunsCount(syncQueuedRunsCount);
  if ($$props.allWorkspaces === void 0 && $$bindings.allWorkspaces && allWorkspaces !== void 0) $$bindings.allWorkspaces(allWorkspaces);
  if ($$props.computeMinAndMax === void 0 && $$bindings.computeMinAndMax && computeMinAndMax !== void 0) $$bindings.computeMinAndMax(computeMinAndMax);
  if ($$props.lookback === void 0 && $$bindings.lookback && lookback !== void 0) $$bindings.lookback(lookback);
  if ($$props.perPage === void 0 && $$bindings.perPage && perPage !== void 0) $$bindings.perPage(perPage);
  if ($$props.loadJobs === void 0 && $$bindings.loadJobs && loadJobs !== void 0) $$bindings.loadJobs(loadJobs);
  jobKinds = computeJobKinds(jobKindsCat);
  ($workspaceStore || path && label && success && isSkipped != void 0 && jobKinds && concurrencyKey && tag && lookback && user && folder && showFutureJobs != void 0 && showSchedules != void 0 && allWorkspaces != void 0 && argFilter != void 0 && resultFilter != void 0) && onParamChanges();
  {
    if (!intervalId && autoRefresh) {
      intervalId = setInterval(syncer, refreshRate);
    }
  }
  {
    if (intervalId && !autoRefresh) {
      clearInterval(intervalId);
      intervalId = void 0;
    }
  }
  $$unsubscribe_workspaceStore();
  return ``;
});
export {
  JobLoader as J
};
