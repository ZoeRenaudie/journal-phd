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
		client: {start:"_app/immutable/entry/start.CWQF9hPG.js",app:"_app/immutable/entry/app.ttc97nzs.js",imports:["_app/immutable/entry/start.CWQF9hPG.js","_app/immutable/chunks/BKrxyNGg.js","_app/immutable/chunks/BAkzhmWV.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/Bira8TSU.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/jnr2Sag3.js","_app/immutable/chunks/BVGtCwCS.js","_app/immutable/chunks/CPstbR3Q.js","_app/immutable/entry/app.ttc97nzs.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/eQk9XeUl.js","_app/immutable/chunks/BAkzhmWV.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/D8v4aw1E.js","_app/immutable/chunks/CA4olaDf.js","_app/immutable/chunks/CPstbR3Q.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/BVGtCwCS.js","_app/immutable/chunks/B-BPV3Ng.js","_app/immutable/chunks/DDPabs_Q.js","_app/immutable/chunks/k8l0Vrc1.js","_app/immutable/chunks/DJeGj2OJ.js","_app/immutable/chunks/BmVkqB8C.js","_app/immutable/chunks/Bira8TSU.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/journal-phd/","/journal-phd/about","/journal-phd/api/posts.json","/journal-phd/api/posts/count","/journal-phd/api/rss.xml","/journal-phd/bibliographie","/journal-phd/blog","/journal-phd/blog/__data.json","/journal-phd/blog/category","/journal-phd/blog/category/__data.json","/journal-phd/blog/page","/journal-phd/blog/page/__data.json","/journal-phd/contact","/journal-phd/api/posts/page/*","/journal-phd/blog/category/*/page/*","/journal-phd/blog/category/*/page/*/__data.json","/journal-phd/blog/category/page/*","/journal-phd/blog/category/page/*/__data.json","/journal-phd/blog/page/*","/journal-phd/blog/page/*/__data.json","/journal-phd/bibliographie/introduction-in-conservation-of-contemporary-art","/journal-phd/bibliographie/making-time","/journal-phd/bibliographie/conserverrestaurer---loeuvre-dart--lpoque-de-sa-prservation-technique","/journal-phd/bibliographie/publishing-as-a-conservation-strategy---platforms-care-and-contemporary-art","/journal-phd/bibliographie/sharing-knowledge-in-art-conservation---from-repository-building-to-research-publishing","/journal-phd/bibliographie/archiving-complex-digital-artworks","/journal-phd/bibliographie/from-collection-management-to-content-management-in-art-documentation---the-conservator-as-an-editor","/journal-phd/bibliographie/la-conservation-restauration-du-patrimoine-au-regard-des-humanits-numriques---enjeux-techniques-sociocognitifs-et-politiques","/journal-phd/bibliographie/the-display-ontology","/journal-phd/bibliographie/the-materiality-of-the-archive---creative-practice-in-context","/journal-phd/bibliographie/collecting-archives-of-objects-and-stories---on-the-lives-and-futures-of-contemporary-art-at-the-museum","/journal-phd/bibliographie/la-documentation-et-la-diffusion-numrique-des-expositions-de-collections-nationales---le-muse-national-des-beaux-arts-du-qubec-et-le-muse-dart-contemporain-de-montral","/journal-phd/bibliographie/crip-curation-as-care","/journal-phd/bibliographie/sustainable-exhibition-design--construction","/journal-phd/bibliographie/quest-ce-que-le-contemporain","/journal-phd/bibliographie/thinking-about-exhibitions","/journal-phd/blog/heading-links-example","/journal-phd/blog/mdsvex-component-example","/journal-phd/blog/exemple","/journal-phd/blog/syntax-highlighting-example","/journal-phd/blog/category/sveltekit","/journal-phd/blog/category/sveltekit/__data.json","/journal-phd/blog/category/markdown","/journal-phd/blog/category/markdown/__data.json","/journal-phd/blog/category/svelte","/journal-phd/blog/category/svelte/__data.json","/journal-phd/blog/category/web","/journal-phd/blog/category/web/__data.json","/journal-phd/blog/category/css","/journal-phd/blog/category/css/__data.json","/journal-phd/blog/category/*/page","/journal-phd/blog/category/*/page/__data.json","/journal-phd/blog/category/page","/journal-phd/blog/category/page/__data.json"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
