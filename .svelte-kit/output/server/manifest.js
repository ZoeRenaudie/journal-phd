export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/animation.css","css/code.css","css/components.css","css/fonts.css","css/forms.css","css/header-and-footer.css","css/layout.css","css/prism.css","css/root.css","css/typography.css","css/utilities.css","css/vars.css","favicon.png","fonts/Atkinson-Hyperlegible-Bold-102a.woff2","fonts/Atkinson-Hyperlegible-BoldItalic-102a.woff2","fonts/Atkinson-Hyperlegible-Italic-102a.woff2","fonts/Atkinson-Hyperlegible-Regular-102a.woff2","fonts/FiraCode-Regular.woff2","images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg","images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg","images/linus-nylund-Q5QspluNZmM-unsplash.jpg","link.svg"]),
	mimeTypes: {".css":"text/css",".png":"image/png",".woff2":"font/woff2",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.BDDRg8Js.js",app:"_app/immutable/entry/app.DiD5qv71.js",imports:["_app/immutable/entry/start.BDDRg8Js.js","_app/immutable/chunks/DY-uMXiN.js","_app/immutable/chunks/BZAZ7dM3.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/BEDWnk4e.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/Ceg_lTpE.js","_app/immutable/chunks/CPstbR3Q.js","_app/immutable/entry/app.DiD5qv71.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/r94AeSdQ.js","_app/immutable/chunks/BZAZ7dM3.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/6NTK1Tgg.js","_app/immutable/chunks/Cy9CnXI-.js","_app/immutable/chunks/CPstbR3Q.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/Ceg_lTpE.js","_app/immutable/chunks/DdIrJmQh.js","_app/immutable/chunks/DMWexucu.js","_app/immutable/chunks/BKQYGS6Q.js","_app/immutable/chunks/DajKFarX.js","_app/immutable/chunks/BmHO_4mE.js","_app/immutable/chunks/BEDWnk4e.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/about","/api/posts.json","/api/posts/count","/api/rss.xml","/bibliographie","/blog","/blog/__data.json","/blog/category","/blog/category/__data.json","/blog/page","/blog/page/__data.json","/contact","/api/posts/page/*","/blog/category/*/page/*","/blog/category/*/page/*/__data.json","/blog/category/page/*","/blog/category/page/*/__data.json","/blog/page/*","/blog/page/*/__data.json","/bibliographie/the-materiality-of-the-archive---creative-practice-in-context","/bibliographie/collecting-archives-of-objects-and-stories---on-the-lives-and-futures-of-contemporary-art-at-the-museum","/bibliographie/the-display-ontology","/bibliographie/introduction-in-conservation-of-contemporary-art","/bibliographie/making-time","/bibliographie/conserverrestaurer---loeuvre-dart--lpoque-de-sa-prservation-technique","/bibliographie/crip-curation-as-care","/bibliographie/sustainable-exhibition-design--construction","/bibliographie/la-documentation-et-la-diffusion-numrique-des-expositions-de-collections-nationales---le-muse-national-des-beaux-arts-du-qubec-et-le-muse-dart-contemporain-de-montral","/bibliographie/thinking-about-exhibitions","/bibliographie/quest-ce-que-le-contemporain","/bibliographie/publishing-as-a-conservation-strategy---platforms-care-and-contemporary-art","/bibliographie/sharing-knowledge-in-art-conservation---from-repository-building-to-research-publishing","/bibliographie/archiving-complex-digital-artworks","/bibliographie/from-collection-management-to-content-management-in-art-documentation---the-conservator-as-an-editor","/bibliographie/la-conservation-restauration-du-patrimoine-au-regard-des-humanits-numriques---enjeux-techniques-sociocognitifs-et-politiques","/blog/heading-links-example","/blog/mdsvex-component-example","/blog/exemple","/blog/syntax-highlighting-example","/blog/category/sveltekit","/blog/category/sveltekit/__data.json","/blog/category/markdown","/blog/category/markdown/__data.json","/blog/category/svelte","/blog/category/svelte/__data.json","/blog/category/web","/blog/category/web/__data.json","/blog/category/css","/blog/category/css/__data.json","/blog/category/*/page","/blog/category/*/page/__data.json","/blog/category/*","/blog/category/*/__data.json","/blog/category/page","/blog/category/page/__data.json"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
