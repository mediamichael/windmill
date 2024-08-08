export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","Inter-Variable.ttf","airtable_connect.png","cc.iife.js","discord_webhook.png","dummy.pdf","google_signin_dark.png","google_signin_light.png","icons/bash-lang.svg","icons/go-lang.svg","icons/hub-script.svg","icons/inline-script.svg","icons/python-lang.svg","icons/ts-lang.svg","logo.svg","mailchimp_connect.png","openapi.html","openapi2.html","sendgrid_connect.png","square_connect.gif","supabase_connect.png","sync_resource_types.png","sync_resource_types2.png","tailwind.js","toggl_connect.png","trigger_button.png","web-components.min.js","workers/graphql.worker.bundle.js"]),
	mimeTypes: {".ttf":"font/ttf",".png":"image/png",".js":"text/javascript",".pdf":"application/pdf",".svg":"image/svg+xml",".html":"text/html",".gif":"image/gif"},
	_: {
		client: null,
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/19.js')),
			__memo(() => import('./nodes/20.js')),
			__memo(() => import('./nodes/21.js')),
			__memo(() => import('./nodes/22.js')),
			__memo(() => import('./nodes/23.js')),
			__memo(() => import('./nodes/24.js')),
			__memo(() => import('./nodes/25.js')),
			__memo(() => import('./nodes/26.js')),
			__memo(() => import('./nodes/27.js')),
			__memo(() => import('./nodes/28.js')),
			__memo(() => import('./nodes/29.js')),
			__memo(() => import('./nodes/30.js')),
			__memo(() => import('./nodes/31.js')),
			__memo(() => import('./nodes/32.js')),
			__memo(() => import('./nodes/33.js')),
			__memo(() => import('./nodes/34.js')),
			__memo(() => import('./nodes/35.js')),
			__memo(() => import('./nodes/36.js')),
			__memo(() => import('./nodes/37.js')),
			__memo(() => import('./nodes/38.js')),
			__memo(() => import('./nodes/39.js')),
			__memo(() => import('./nodes/40.js')),
			__memo(() => import('./nodes/41.js')),
			__memo(() => import('./nodes/42.js')),
			__memo(() => import('./nodes/43.js')),
			__memo(() => import('./nodes/44.js')),
			__memo(() => import('./nodes/45.js')),
			__memo(() => import('./nodes/46.js')),
			__memo(() => import('./nodes/47.js')),
			__memo(() => import('./nodes/48.js')),
			__memo(() => import('./nodes/49.js')),
			__memo(() => import('./nodes/50.js')),
			__memo(() => import('./nodes/51.js'))
		],
		routes: [
			{
				id: "/(root)/(logged)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/approve/[workspace]/[job]/[resume]/[hmac]",
				pattern: /^\/approve\/([^/]+?)\/([^/]+?)\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"workspace","optional":false,"rest":false,"chained":false},{"name":"job","optional":false,"rest":false,"chained":false},{"name":"resume","optional":false,"rest":false,"chained":false},{"name":"hmac","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 43 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/apps/add",
				pattern: /^\/apps\/add\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/apps/edit/[...path]",
				pattern: /^\/apps\/edit(?:\/(.*))?\/?$/,
				params: [{"name":"path","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/apps/get_raw/[version]/[...path]",
				pattern: /^\/apps\/get_raw\/([^/]+?)(?:\/(.*))?\/?$/,
				params: [{"name":"version","optional":false,"rest":false,"chained":false},{"name":"path","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/apps/get/[...path]",
				pattern: /^\/apps\/get(?:\/(.*))?\/?$/,
				params: [{"name":"path","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/audit_logs",
				pattern: /^\/audit_logs\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/concurrency_groups",
				pattern: /^\/concurrency_groups\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/deploy/[kind]/[...path]",
				pattern: /^\/deploy\/([^/]+?)(?:\/(.*))?\/?$/,
				params: [{"name":"kind","optional":false,"rest":false,"chained":false},{"name":"path","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/dev",
				pattern: /^\/dev\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 44 },
				endpoint: null
			},
			{
				id: "/(root)/embed_connect",
				pattern: /^\/embed_connect\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 42 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/flows/add",
				pattern: /^\/flows\/add\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/flows/dev",
				pattern: /^\/flows\/dev\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 45 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/flows/edit/[...path]",
				pattern: /^\/flows\/edit(?:\/(.*))?\/?$/,
				params: [{"name":"path","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/flows/get/[...path]",
				pattern: /^\/flows\/get(?:\/(.*))?\/?$/,
				params: [{"name":"path","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/folders",
				pattern: /^\/folders\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/groups",
				pattern: /^\/groups\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/instance_groups",
				pattern: /^\/instance_groups\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/kitchen_sink",
				pattern: /^\/kitchen_sink\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 46 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/oauth/callback_slack",
				pattern: /^\/oauth\/callback_slack\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/oauth/callback_supabase",
				pattern: /^\/oauth\/callback_supabase\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/oauth/callback/[client_name]",
				pattern: /^\/oauth\/callback\/([^/]+?)\/?$/,
				params: [{"name":"client_name","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/public/[workspace]/[...secret]",
				pattern: /^\/public\/([^/]+?)(?:\/(.*))?\/?$/,
				params: [{"name":"workspace","optional":false,"rest":false,"chained":false},{"name":"secret","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 47 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/resources",
				pattern: /^\/resources\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/runs/[...path]",
				pattern: /^\/runs(?:\/(.*))?\/?$/,
				params: [{"name":"path","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/run/[...run]",
				pattern: /^\/run(?:\/(.*))?\/?$/,
				params: [{"name":"run","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/schedules",
				pattern: /^\/schedules\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/scripts/add",
				pattern: /^\/scripts\/add\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/scripts/dev",
				pattern: /^\/scripts\/dev\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 48 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/scripts/edit/[...path]",
				pattern: /^\/scripts\/edit(?:\/(.*))?\/?$/,
				params: [{"name":"path","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/scripts/get/[...hash]",
				pattern: /^\/scripts\/get(?:\/(.*))?\/?$/,
				params: [{"name":"hash","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/test_dev_page",
				pattern: /^\/test_dev_page\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 49 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/user/(user)/accept_invite",
				pattern: /^\/user\/accept_invite\/?$/,
				params: [],
				page: { layouts: [0,2,4,], errors: [1,,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/user/cli-success",
				pattern: /^\/user\/cli-success\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/user/cli",
				pattern: /^\/user\/cli\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/user/(user)/create_workspace",
				pattern: /^\/user\/create_workspace\/?$/,
				params: [],
				page: { layouts: [0,2,4,], errors: [1,,,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/user/(user)/first-time",
				pattern: /^\/user\/first-time\/?$/,
				params: [],
				page: { layouts: [0,2,4,], errors: [1,,,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/user/(user)/instance_settings",
				pattern: /^\/user\/instance_settings\/?$/,
				params: [],
				page: { layouts: [0,2,4,], errors: [1,,,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/user/login_callback/[client_name]",
				pattern: /^\/user\/login_callback\/([^/]+?)\/?$/,
				params: [{"name":"client_name","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 50 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/user/(user)/login",
				pattern: /^\/user\/login\/?$/,
				params: [],
				page: { layouts: [0,2,4,], errors: [1,,,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/user/(user)/logout",
				pattern: /^\/user\/logout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/user/(user)/workspaces",
				pattern: /^\/user\/workspaces\/?$/,
				params: [],
				page: { layouts: [0,2,4,], errors: [1,,,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/variables",
				pattern: /^\/variables\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/view_graph",
				pattern: /^\/view_graph\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 51 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/workers",
				pattern: /^\/workers\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 39 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/workspace_settings",
				pattern: /^\/workspace_settings\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 40 },
				endpoint: null
			},
			{
				id: "/(root)/(logged)/workspace_settings/checkout",
				pattern: /^\/workspace_settings\/checkout\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 41 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
