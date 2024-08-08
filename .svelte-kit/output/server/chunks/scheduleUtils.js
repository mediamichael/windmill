import { S as ScheduleService } from "./services.gen.js";
async function loadFlowSchedule(path, workspace) {
  const existsSchedule = await ScheduleService.existsSchedule({
    workspace,
    path
  });
  if (!existsSchedule) {
    throw new Error(`Flow at path: ${path} doesn't exist`);
  }
  const schedule = await ScheduleService.getSchedule({
    workspace,
    path
  });
  return {
    summary: schedule.summary,
    enabled: schedule.enabled,
    cron: schedule.schedule,
    timezone: schedule.timezone,
    args: schedule.args ?? {}
  };
}
export {
  loadFlowSchedule as l
};
