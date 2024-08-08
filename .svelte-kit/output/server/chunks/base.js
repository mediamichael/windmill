var define_import_meta_env_default = { BASE_URL: "/", DEV: false, MODE: "production", PROD: true, SSR: true, VITE_DEFAULT_WEBHOOK_TYPE: "async" };
const base = define_import_meta_env_default.VITE_BASE_URL ?? "";
export {
  base as b
};
