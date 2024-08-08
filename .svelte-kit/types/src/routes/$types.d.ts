import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type LayoutRouteId = RouteId | "/(root)/(logged)" | "/(root)/(logged)/apps/add" | "/(root)/(logged)/apps/edit/[...path]" | "/(root)/(logged)/apps/get/[...path]" | "/(root)/(logged)/apps/get_raw/[version]/[...path]" | "/(root)/(logged)/audit_logs" | "/(root)/(logged)/concurrency_groups" | "/(root)/(logged)/deploy/[kind]/[...path]" | "/(root)/(logged)/flows/add" | "/(root)/(logged)/flows/edit/[...path]" | "/(root)/(logged)/flows/get/[...path]" | "/(root)/(logged)/folders" | "/(root)/(logged)/groups" | "/(root)/(logged)/instance_groups" | "/(root)/(logged)/oauth/callback/[client_name]" | "/(root)/(logged)/oauth/callback_slack" | "/(root)/(logged)/oauth/callback_supabase" | "/(root)/(logged)/resources" | "/(root)/(logged)/run/[...run]" | "/(root)/(logged)/runs/[...path]" | "/(root)/(logged)/schedules" | "/(root)/(logged)/scripts/add" | "/(root)/(logged)/scripts/edit/[...path]" | "/(root)/(logged)/scripts/get/[...hash]" | "/(root)/(logged)/user/(user)/accept_invite" | "/(root)/(logged)/user/(user)/create_workspace" | "/(root)/(logged)/user/(user)/first-time" | "/(root)/(logged)/user/(user)/instance_settings" | "/(root)/(logged)/user/(user)/login" | "/(root)/(logged)/user/(user)/logout" | "/(root)/(logged)/user/(user)/workspaces" | "/(root)/(logged)/user/cli" | "/(root)/(logged)/user/cli-success" | "/(root)/(logged)/variables" | "/(root)/(logged)/workers" | "/(root)/(logged)/workspace_settings" | "/(root)/(logged)/workspace_settings/checkout" | "/(root)/embed_connect" | "/approve/[workspace]/[job]/[resume]/[hmac]" | "/dev" | "/flows/dev" | "/kitchen_sink" | "/public/[workspace]/[...secret]" | "/scripts/dev" | "/test_dev_page" | "/user/login_callback/[client_name]" | "/view_graph" | null
type LayoutParams = RouteParams & { path?: string; version?: string; kind?: string; client_name?: string; run?: string; hash?: string; workspace?: string; job?: string; resume?: string; hmac?: string; secret?: string }
type LayoutParentData = EnsureDefined<{}>;

export type LayoutServerData = null;
export type LayoutLoad<OutputData extends OutputDataShape<LayoutParentData> = OutputDataShape<LayoutParentData>> = Kit.Load<LayoutParams, LayoutServerData, LayoutParentData, OutputData, LayoutRouteId>;
export type LayoutLoadEvent = Parameters<LayoutLoad>[0];
export type LayoutData = Expand<Omit<LayoutParentData, keyof LayoutParentData & EnsureDefined<LayoutServerData>> & OptionalUnion<EnsureDefined<LayoutParentData & EnsureDefined<LayoutServerData>>>>;