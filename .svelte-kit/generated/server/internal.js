
import root from '../root.svelte';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_dir: "_app",
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/logo.svg\" />\n\t\t<style type=\"text/css\">\n\t\t\t.st2 {\n\t\t\t\tfill: #bcd4fc;\n\t\t\t}\n\n\t\t\t.st3 {\n\t\t\t\tfill: #3b82f6;\n\t\t\t}\n\t\t</style>\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\t</head>\n\t<body data-sveltekit-preload-code=\"viewport\" class=\"outline-none focus:outline-none\">\n\t\t<div style=\"display: contents\">\n\t\t\t<div style=\"position: fixed; left: 50%; top: 40%; transform: translate(-50%, -50%)\">\n\t\t\t\t<svg\n\t\t\t\t\tversion=\"1.1\"\n\t\t\t\t\tid=\"Windmill\"\n\t\t\t\t\txmlns=\"http://www.w3.org/2000/svg\"\n\t\t\t\t\txmlns:xlink=\"http://www.w3.org/1999/xlink\"\n\t\t\t\t\tx=\"0px\"\n\t\t\t\t\ty=\"0px\"\n\t\t\t\t\twidth=\"128px\"\n\t\t\t\t\theight=\"128px\"\n\t\t\t\t\tviewBox=\"0 0 256 256\"\n\t\t\t\t\tstyle=\"enable-background: new 0 0 256 256\"\n\t\t\t\t\txml:space=\"preserve\"\n\t\t\t\t>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<polygon\n\t\t\t\t\t\t\tclass=\"st2\"\n\t\t\t\t\t\t\tpoints=\"134.78,14.22 114.31,48.21 101.33,69.75 158.22,69.75 177.97,36.95 191.67,14.22 \t\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<polygon\n\t\t\t\t\t\t\tclass=\"st3\"\n\t\t\t\t\t\t\tpoints=\"227.55,69.75 186.61,69.75 101.33,69.75 129.78,119.02 158.16,119.02 228.61,119.02 256,119.02 \t\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<polygon\n\t\t\t\t\t\t\tclass=\"st3\"\n\t\t\t\t\t\t\tpoints=\"136.93,132.47 116.46,167.93 73.82,241.78 130.71,241.78 144.9,217.2 180.13,156.18 193.82,132.46 \t\n\t\t\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<polygon\n\t\t\t\t\t\t\tclass=\"st3\"\n\t\t\t\t\t\t\tpoints=\"121.7,131.95 101.23,96.49 58.59,22.63 30.15,71.91 44.34,96.49 79.57,157.5 93.26,181.22 \t\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<polygon\n\t\t\t\t\t\t\tclass=\"st2\"\n\t\t\t\t\t\t\tpoints=\"64.81,131.95 25.15,131.21 0,130.74 28.44,180.01 66.73,180.72 93.26,181.21 \t\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<polygon\n\t\t\t\t\t\t\tclass=\"st2\"\n\t\t\t\t\t\t\tpoints=\"165.38,181.74 184.58,216.46 196.75,238.47 225.19,189.2 206.66,155.69 193.83,132.46 \t\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t</g>\n\t\t\t\t</svg>\n\t\t\t\t<div\n\t\t\t\t\tstyle=\"\n\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\tmargin-top: 30px;\n\t\t\t\t\t\tcolor: gray;\n\t\t\t\t\t\tfont-family: Arial, Helvetica, sans-serif;\n\t\t\t\t\t\"\n\t\t\t\t>\n\t\t\t\t\tLoading...\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t" + body + "\n\t\t</div>\n\t</body>\n</html>\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "zruce7"
};

export async function get_hooks() {
	return {
		
		...(await import("../../../src/hooks.ts")),
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation, set_safe_public_env };
