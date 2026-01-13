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
      handleHttpError: ({ path, referrer, message }) => {
        // Ignorer certaines erreurs
        if (path.includes('/images/') || path === '/favicon.png') {
          return;
        }
        throw new Error(message);
      }
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