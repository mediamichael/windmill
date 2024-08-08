import { c as create_ssr_component, s as subscribe, d as createEventDispatcher, o as onDestroy } from "./ssr.js";
import { t as tick } from "./Head.js";
import { J as JobService } from "./services.gen.js";
import { w as workspaceStore } from "./stores2.js";
let ITERATIONS_BEFORE_SLOW_REFRESH = 10;
let ITERATIONS_BEFORE_SUPER_SLOW_REFRESH = 100;
const ResultJobLoader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let workspace;
  let $workspaceStore, $$unsubscribe_workspaceStore;
  $$unsubscribe_workspaceStore = subscribe(workspaceStore, (value) => $workspaceStore = value);
  let { isLoading = false } = $$props;
  let { job = void 0 } = $$props;
  let { workspaceOverride = void 0 } = $$props;
  let { notfound = false } = $$props;
  let { isEditor = false } = $$props;
  let { allowConcurentRequests = false } = $$props;
  const dispatch = createEventDispatcher();
  let syncIteration = 0;
  let errorIteration = 0;
  let lastStartedAt = Date.now();
  let currentId = void 0;
  let running = false;
  let lastCallbacks = void 0;
  let finished = [];
  async function abstractRun(fn, callbacks) {
    try {
      running = false;
      isLoading = true;
      clearCurrentJob();
      const startedAt = Date.now();
      const testId = await fn();
      lastCallbacks = callbacks;
      if (lastStartedAt < startedAt || allowConcurentRequests) {
        lastStartedAt = startedAt;
        if (testId) {
          dispatch("started", testId);
          try {
            await watchJob(testId, callbacks);
          } catch (e) {
            callbacks?.cancel();
            dispatch("cancel", testId);
            if (currentId === testId) {
              currentId = void 0;
            }
          }
        }
      }
      return testId;
    } catch (err) {
      callbacks?.error(err);
      isLoading = false;
      currentId = void 0;
      job = void 0;
      throw err;
    }
  }
  async function runScriptByPath(path, args, callbacks) {
    return abstractRun(
      () => JobService.runScriptByPath({
        workspace: $workspaceStore,
        path,
        requestBody: args
      }),
      callbacks
    );
  }
  async function runScriptByHash(hash, args, callbacks) {
    return abstractRun(
      () => JobService.runScriptByHash({
        workspace: $workspaceStore,
        hash,
        requestBody: args
      }),
      callbacks
    );
  }
  async function runFlowByPath(path, args, callbacks) {
    return abstractRun(
      () => JobService.runFlowByPath({
        workspace: $workspaceStore,
        path: path ?? "",
        requestBody: args
      }),
      callbacks
    );
  }
  async function runPreview(path, code, lang, args, tag, callbacks) {
    return abstractRun(
      () => JobService.runScriptPreview({
        workspace: $workspaceStore,
        requestBody: {
          path,
          content: code,
          args,
          language: lang,
          tag
        }
      }),
      callbacks
    );
  }
  async function cancelJob() {
    const id = currentId;
    if (id) {
      lastCallbacks?.cancel();
      lastCallbacks = void 0;
      dispatch("cancel", id);
      currentId = void 0;
      try {
        await JobService.cancelQueuedJob({
          workspace: $workspaceStore ?? "",
          id,
          requestBody: {}
        });
      } catch (err) {
        console.error(err);
      }
    }
  }
  async function clearCurrentJob() {
    if (currentId && !allowConcurentRequests) {
      lastCallbacks?.cancel();
      dispatch("cancel", currentId);
      lastCallbacks = void 0;
      job = void 0;
      await cancelJob();
    }
  }
  async function watchJob(testId, callbacks) {
    syncIteration = 0;
    errorIteration = 0;
    currentId = testId;
    job = void 0;
    const isCompleted = await loadTestJob(testId, callbacks);
    if (!isCompleted) {
      setTimeout(
        () => {
          syncer(testId, callbacks);
        },
        50
      );
    }
  }
  async function loadTestJob(id, callbacks) {
    let isCompleted = false;
    if (currentId === id || allowConcurentRequests) {
      try {
        let maybe_job = await JobService.getCompletedJobResultMaybe({
          workspace: workspace ?? "",
          id,
          getStarted: isEditor
        });
        if (maybe_job.started && !running) {
          running = true;
          dispatch("running", id);
        }
        if (maybe_job.completed) {
          isCompleted = true;
          if (currentId === id || allowConcurentRequests) {
            job = { ...maybe_job, id };
            await tick();
            if (!job?.success && typeof job?.result == "object" && "error" in (job?.result ?? {})) {
              callbacks?.error(job.result.error);
              dispatch("doneError", { id, error: job.result.error });
            } else {
              callbacks?.done(job.result);
              dispatch("done", job);
            }
            finished.push(id);
            if (!allowConcurentRequests) {
              currentId = void 0;
            }
          } else {
            callbacks?.cancel();
            dispatch("cancel", id);
          }
        }
        notfound = false;
      } catch (err) {
        errorIteration += 1;
        if (errorIteration == 5) {
          notfound = true;
          await clearCurrentJob();
          dispatch("doneError", err);
        }
        console.warn(err);
      }
      return isCompleted;
    } else {
      callbacks?.cancel();
      dispatch("cancel", id);
      return true;
    }
  }
  async function syncer(id, callbacks) {
    if (currentId != id && !allowConcurentRequests || finished.includes(id)) {
      callbacks?.cancel();
      dispatch("cancel", id);
      return;
    }
    syncIteration++;
    let r = await loadTestJob(id, callbacks);
    if (r) {
      return;
    }
    let nextIteration = 50;
    if (syncIteration > ITERATIONS_BEFORE_SLOW_REFRESH) {
      nextIteration = 500;
    } else if (syncIteration > ITERATIONS_BEFORE_SUPER_SLOW_REFRESH) {
      nextIteration = 2e3;
    }
    setTimeout(
      () => {
        syncer(id, callbacks);
      },
      nextIteration
    );
  }
  onDestroy(async () => {
    currentId = void 0;
  });
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading !== void 0) $$bindings.isLoading(isLoading);
  if ($$props.job === void 0 && $$bindings.job && job !== void 0) $$bindings.job(job);
  if ($$props.workspaceOverride === void 0 && $$bindings.workspaceOverride && workspaceOverride !== void 0) $$bindings.workspaceOverride(workspaceOverride);
  if ($$props.notfound === void 0 && $$bindings.notfound && notfound !== void 0) $$bindings.notfound(notfound);
  if ($$props.isEditor === void 0 && $$bindings.isEditor && isEditor !== void 0) $$bindings.isEditor(isEditor);
  if ($$props.allowConcurentRequests === void 0 && $$bindings.allowConcurentRequests && allowConcurentRequests !== void 0) $$bindings.allowConcurentRequests(allowConcurentRequests);
  if ($$props.abstractRun === void 0 && $$bindings.abstractRun && abstractRun !== void 0) $$bindings.abstractRun(abstractRun);
  if ($$props.runScriptByPath === void 0 && $$bindings.runScriptByPath && runScriptByPath !== void 0) $$bindings.runScriptByPath(runScriptByPath);
  if ($$props.runScriptByHash === void 0 && $$bindings.runScriptByHash && runScriptByHash !== void 0) $$bindings.runScriptByHash(runScriptByHash);
  if ($$props.runFlowByPath === void 0 && $$bindings.runFlowByPath && runFlowByPath !== void 0) $$bindings.runFlowByPath(runFlowByPath);
  if ($$props.runPreview === void 0 && $$bindings.runPreview && runPreview !== void 0) $$bindings.runPreview(runPreview);
  if ($$props.cancelJob === void 0 && $$bindings.cancelJob && cancelJob !== void 0) $$bindings.cancelJob(cancelJob);
  if ($$props.clearCurrentJob === void 0 && $$bindings.clearCurrentJob && clearCurrentJob !== void 0) $$bindings.clearCurrentJob(clearCurrentJob);
  if ($$props.watchJob === void 0 && $$bindings.watchJob && watchJob !== void 0) $$bindings.watchJob(watchJob);
  workspace = workspaceOverride ?? $workspaceStore;
  isLoading = currentId !== void 0;
  $$unsubscribe_workspaceStore();
  return ``;
});
export {
  ResultJobLoader as R
};
