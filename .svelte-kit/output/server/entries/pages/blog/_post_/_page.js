import { error } from "@sveltejs/kit";
const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
const load = async ({ params }) => {
  try {
    const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../lib/posts/heading-links-example.md": () => import("../../../../chunks/heading-links-example.js"), "../../../lib/posts/mdsvex-component-example.md": () => import("../../../../chunks/mdsvex-component-example.js"), "../../../lib/posts/syntax-highlighting-example.md": () => import("../../../../chunks/syntax-highlighting-example.js") }), `../../../lib/posts/${params.post}.md`, 6);
    return {
      PostContent: post.default,
      meta: { ...post.metadata, slug: params.post }
    };
  } catch (err) {
    error(404, err);
  }
};
export {
  load
};
