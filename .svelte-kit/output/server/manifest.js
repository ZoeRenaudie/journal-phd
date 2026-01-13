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
		client: {start:"_app/immutable/entry/start.DPRYe0MJ.js",app:"_app/immutable/entry/app.CWZrmdc_.js",imports:["_app/immutable/entry/start.DPRYe0MJ.js","_app/immutable/chunks/mtsj_UHH.js","_app/immutable/chunks/CKWCygOj.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CUcU8hso.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/5CdW8RWE.js","_app/immutable/chunks/C_5iC-Q3.js","_app/immutable/chunks/CPstbR3Q.js","_app/immutable/entry/app.CWZrmdc_.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/DTC3uytc.js","_app/immutable/chunks/CKWCygOj.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/DDA8RsG3.js","_app/immutable/chunks/DEqlx5Hf.js","_app/immutable/chunks/CPstbR3Q.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/C_5iC-Q3.js","_app/immutable/chunks/DEQchbew.js","_app/immutable/chunks/BJahvI2o.js","_app/immutable/chunks/DWH6M6pG.js","_app/immutable/chunks/BuNWiGHT.js","_app/immutable/chunks/B94_EYBA.js","_app/immutable/chunks/CUcU8hso.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/journal-phd/","/journal-phd/about","/journal-phd/api/posts.json","/journal-phd/api/posts/count","/journal-phd/api/rss.xml","/journal-phd/bibliographie","/journal-phd/blog","/journal-phd/blog/__data.json","/journal-phd/blog/category","/journal-phd/blog/category/__data.json","/journal-phd/blog/page","/journal-phd/blog/page/__data.json","/journal-phd/contact","/journal-phd/api/posts/page/*","/journal-phd/blog/category/*/page/*","/journal-phd/blog/category/*/page/*/__data.json","/journal-phd/blog/category/page/*","/journal-phd/blog/category/page/*/__data.json","/journal-phd/blog/page/*","/journal-phd/blog/page/*/__data.json","/journal-phd/blog/heading-links-example","/journal-phd/blog/mdsvex-component-example","/journal-phd/blog/exemple","/journal-phd/blog/syntax-highlighting-example","/journal-phd/blog/category/sveltekit","/journal-phd/blog/category/sveltekit/__data.json","/journal-phd/blog/category/markdown","/journal-phd/blog/category/markdown/__data.json","/journal-phd/blog/category/svelte","/journal-phd/blog/category/svelte/__data.json","/journal-phd/blog/category/web","/journal-phd/blog/category/web/__data.json","/journal-phd/blog/category/css","/journal-phd/blog/category/css/__data.json","/journal-phd/blog/category/*/page","/journal-phd/blog/category/*/page/__data.json","/journal-phd/blog/category/page","/journal-phd/blog/category/page/__data.json"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
