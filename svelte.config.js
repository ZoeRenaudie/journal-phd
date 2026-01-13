import adapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex";
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
      base: dev ? '' : '/journal-phd'
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
      handleHttpError: 'warn'  // ← Simplifié !
    },
  },
  
  preprocess: [
    mdsvex({
      extensions: [".md"],
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
      ],
    }),
  ],
};

export default config;