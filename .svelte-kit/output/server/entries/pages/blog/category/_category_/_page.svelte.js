import { h as head, d as escape_html, a as attr, f as stringify } from "../../../../../chunks/index2.js";
import { b as base } from "../../../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { P as PostsList, a as Pagination } from "../../../../../chunks/Pagination.js";
function _page($$renderer, $$props) {
  let { data } = $$props;
  const { page, posts, category, total } = data;
  head("10ff13b", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Category: ${escape_html(category)}</title>`);
    });
  });
  $$renderer.push(`<h1>Blog category: ${escape_html(category)}</h1> `);
  if (posts.length) {
    $$renderer.push("<!--[-->");
    PostsList($$renderer, { posts });
    $$renderer.push(`<!----> `);
    Pagination($$renderer, {
      currentPage: page,
      totalPosts: total,
      path: `/blog/category/${stringify(category)}/page`
    });
    $$renderer.push(`<!---->`);
  } else {
    $$renderer.push("<!--[!-->");
    $$renderer.push(`<p><strong>Ope!</strong> Sorry, couldn't find any posts in the category "${escape_html(category)}".</p> <p><a${attr("href", `${stringify(base)}/blog`)}>Back to blog</a></p>`);
  }
  $$renderer.push(`<!--]-->`);
}
export {
  _page as default
};
