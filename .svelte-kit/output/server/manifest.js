export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "svelte-radial-progress-demo/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.qXL7YPze.js","app":"_app/immutable/entry/app.E-ExoxFG.js","imports":["_app/immutable/entry/start.qXL7YPze.js","_app/immutable/chunks/entry.DIyPgXxe.js","_app/immutable/chunks/scheduler.DYmyj1sh.js","_app/immutable/entry/app.E-ExoxFG.js","_app/immutable/chunks/scheduler.DYmyj1sh.js","_app/immutable/chunks/index.CQbjDcNK.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
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
