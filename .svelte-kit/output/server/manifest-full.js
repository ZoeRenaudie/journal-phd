export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "journal-phd/_app",
	assets: new Set(["css/animation.css","css/code.css","css/components.css","css/fonts.css","css/forms.css","css/header-and-footer.css","css/layout.css","css/prism.css","css/root.css","css/typography.css","css/utilities.css","css/vars.css","favicon.png","fonts/Atkinson-Hyperlegible-Bold-102a.woff2","fonts/Atkinson-Hyperlegible-BoldItalic-102a.woff2","fonts/Atkinson-Hyperlegible-Italic-102a.woff2","fonts/Atkinson-Hyperlegible-Regular-102a.woff2","fonts/FiraCode-Regular.woff2","images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg","images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg","images/linus-nylund-Q5QspluNZmM-unsplash.jpg","link.svg"]),
	mimeTypes: {".css":"text/css",".png":"image/png",".woff2":"font/woff2",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.-Ur_IZqd.js",app:"_app/immutable/entry/app.DPbVvyjL.js",imports:["_app/immutable/entry/start.-Ur_IZqd.js","_app/immutable/chunks/BmqkcKoL.js","_app/immutable/chunks/BpB-t60W.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CaVfWH2Q.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/DFS92bJd.js","_app/immutable/chunks/BBLx7_-_.js","_app/immutable/entry/app.DPbVvyjL.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/d2T7YLdN.js","_app/immutable/chunks/BpB-t60W.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/Dmn4sNRq.js","_app/immutable/chunks/BxuMwSg9.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/BBLx7_-_.js","_app/immutable/chunks/C3hIohKA.js","_app/immutable/chunks/DgwE4fI-.js","_app/immutable/chunks/D1E98oy7.js","_app/immutable/chunks/CDCPyqYr.js","_app/immutable/chunks/DpVrXM5N.js","_app/immutable/chunks/CaVfWH2Q.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
			__memo(() => import('./nodes/15.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/posts.json",
				pattern: /^\/api\/posts\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/posts.json/_server.js'))
			},
			{
				id: "/api/posts/count",
				pattern: /^\/api\/posts\/count\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/posts/count/_server.js'))
			},
			{
				id: "/api/posts/page/[page]",
				pattern: /^\/api\/posts\/page\/([^/]+?)\/?$/,
				params: [{"name":"page","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/posts/page/_page_/_server.js'))
			},
			{
				id: "/api/rss.xml",
				pattern: /^\/api\/rss\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/rss.xml/_server.js'))
			},
			{
				id: "/bibliographie",
				pattern: /^\/bibliographie\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/bibliographie/[slug]",
				pattern: /^\/bibliographie\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/blog/category",
				pattern: /^\/blog\/category\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/blog/category/page/[page]",
				pattern: /^\/blog\/category\/page\/([^/]+?)\/?$/,
				params: [{"name":"page","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/blog/category/[category]",
				pattern: /^\/blog\/category\/([^/]+?)\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/blog/category/[category]/page",
				pattern: /^\/blog\/category\/([^/]+?)\/page\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/blog/category/[category]/page/[page]",
				pattern: /^\/blog\/category\/([^/]+?)\/page\/([^/]+?)\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false},{"name":"page","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/blog/page",
				pattern: /^\/blog\/page\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/blog/page/[page]",
				pattern: /^\/blog\/page\/([^/]+?)\/?$/,
				params: [{"name":"page","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/blog/[post]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"post","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
