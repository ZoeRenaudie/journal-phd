import { json } from "@sveltejs/kit";
const prerender = true;
const GET = () => {
  const posts = /* @__PURE__ */ Object.assign({ "/src/lib/posts/exemple.md": () => import("../../../../../chunks/exemple.js"), "/src/lib/posts/heading-links-example.md": () => import("../../../../../chunks/heading-links-example.js"), "/src/lib/posts/mdsvex-component-example.md": () => import("../../../../../chunks/mdsvex-component-example.js"), "/src/lib/posts/syntax-highlighting-example.md": () => import("../../../../../chunks/syntax-highlighting-example.js") });
  return json(Object.keys(posts).length);
};
export {
  GET,
  prerender
};
