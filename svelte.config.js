import adapter from "@sveltejs/adapter-static";
import { mdsvex } from 'mdsvex';
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";


const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/journal-phd' : ''
    },
    
    prerender: {
      entries: [
        "*",
        "/api/posts/page/*",
        "/blog/category/*/page/",
        "/blog/category/*/page/*",
        "/blog/category/page/",
        "/blog/category/page/*",
        "/blog/page/",
        "/blog/page/*",
      ],
      handleHttpError: () => {},  // Ignorer TOUTES les erreurs
      handleMissingId: () => {},
      handleEntryGeneratorMismatch: () => {},
      handleUnseenRoutes: 'ignore' 
    },
  },
  
  preprocess: [
    mdsvex({
      extensions: [".md"],
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
      ],
      remarkPlugins: [
        [await import('remark-gfm').then(mod => mod.default)]
      ], // essaye de forcer le lancement de remark-gfm pour les footnotes mais ne fonctionne pas. Le html prend pas l'indication. 
    }),
  ],
};

export default config;