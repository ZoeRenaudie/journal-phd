import adapter from "@sveltejs/adapter-static";
import { mdsvex } from 'mdsvex';
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkFootnotes from "remark-footnotes";


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
      handleHttpError: () => {},
      handleMissingId: () => {},
      handleEntryGeneratorMismatch: () => {},
      handleUnseenRoutes: 'ignore' 
    },
  },

  preprocess: [
    mdsvex({
      extensions: [".md"],
      remarkPlugins: [
        remarkGfm,
        [remarkFootnotes, { inlineNotes: true }], // notes de bas de page
        ],
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
      ],
    }),
  ],
};

export default config;
