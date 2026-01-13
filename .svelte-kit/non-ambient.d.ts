
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about" | "/api" | "/api/posts.json" | "/api/posts" | "/api/posts/count" | "/api/posts/page" | "/api/posts/page/[page]" | "/api/rss.xml" | "/bibliographie" | "/bibliographie/[slug]" | "/blog" | "/blog/category" | "/blog/category/page" | "/blog/category/page/[page]" | "/blog/category/[category]" | "/blog/category/[category]/page" | "/blog/category/[category]/page/[page]" | "/blog/page" | "/blog/page/[page]" | "/blog/[post]" | "/contact";
		RouteParams(): {
			"/api/posts/page/[page]": { page: string };
			"/bibliographie/[slug]": { slug: string };
			"/blog/category/page/[page]": { page: string };
			"/blog/category/[category]": { category: string };
			"/blog/category/[category]/page": { category: string };
			"/blog/category/[category]/page/[page]": { category: string; page: string };
			"/blog/page/[page]": { page: string };
			"/blog/[post]": { post: string }
		};
		LayoutParams(): {
			"/": { page?: string; slug?: string; category?: string; post?: string };
			"/about": Record<string, never>;
			"/api": { page?: string };
			"/api/posts.json": Record<string, never>;
			"/api/posts": { page?: string };
			"/api/posts/count": Record<string, never>;
			"/api/posts/page": { page?: string };
			"/api/posts/page/[page]": { page: string };
			"/api/rss.xml": Record<string, never>;
			"/bibliographie": { slug?: string };
			"/bibliographie/[slug]": { slug: string };
			"/blog": { page?: string; category?: string; post?: string };
			"/blog/category": { page?: string; category?: string };
			"/blog/category/page": { page?: string };
			"/blog/category/page/[page]": { page: string };
			"/blog/category/[category]": { category: string; page?: string };
			"/blog/category/[category]/page": { category: string; page?: string };
			"/blog/category/[category]/page/[page]": { category: string; page: string };
			"/blog/page": { page?: string };
			"/blog/page/[page]": { page: string };
			"/blog/[post]": { post: string };
			"/contact": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/about/" | "/api" | "/api/" | "/api/posts.json" | "/api/posts.json/" | "/api/posts" | "/api/posts/" | "/api/posts/count" | "/api/posts/count/" | "/api/posts/page" | "/api/posts/page/" | `/api/posts/page/${string}` & {} | `/api/posts/page/${string}/` & {} | "/api/rss.xml" | "/api/rss.xml/" | "/bibliographie" | "/bibliographie/" | `/bibliographie/${string}` & {} | `/bibliographie/${string}/` & {} | "/blog" | "/blog/" | "/blog/category" | "/blog/category/" | "/blog/category/page" | "/blog/category/page/" | `/blog/category/page/${string}` & {} | `/blog/category/page/${string}/` & {} | `/blog/category/${string}` & {} | `/blog/category/${string}/` & {} | `/blog/category/${string}/page` & {} | `/blog/category/${string}/page/` & {} | `/blog/category/${string}/page/${string}` & {} | `/blog/category/${string}/page/${string}/` & {} | "/blog/page" | "/blog/page/" | `/blog/page/${string}` & {} | `/blog/page/${string}/` & {} | `/blog/${string}` & {} | `/blog/${string}/` & {} | "/contact" | "/contact/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/css/animation.css" | "/css/code.css" | "/css/components.css" | "/css/fonts.css" | "/css/forms.css" | "/css/header-and-footer.css" | "/css/layout.css" | "/css/prism.css" | "/css/root.css" | "/css/typography.css" | "/css/utilities.css" | "/css/vars.css" | "/favicon.png" | "/fonts/BBBDMSans-Bold.woff2" | "/fonts/BBBDMSans-Regular.woff2" | "/fonts/BBBManifontGrotesk-Book.woff" | "/fonts/BBBManifontGrotesk-Book.woff2" | "/fonts/BBBManifontGrotesk-BookItalic.woff" | "/fonts/BBBManifontGrotesk-BookItalic.woff2" | "/fonts/FiraCode-Regular.woff2" | "/images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg" | "/images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg" | "/images/linus-nylund-Q5QspluNZmM-unsplash.jpg" | "/link.svg" | string & {};
	}
}