import { h as head, d as escape_html, a as attr } from "../../../../../chunks/index2.js";
import { a as Pagination, P as PostsList } from "../../../../../chunks/Pagination.js";
import { a as siteDescription, p as postsPerPage } from "../../../../../chunks/config.js";
function _page($$renderer, $$props) {
  let { data } = $$props;
  const { page, totalPosts, posts } = data;
  let lowerBound = page * postsPerPage - (postsPerPage - 1) || 1;
  let upperBound = Math.min(page * postsPerPage, totalPosts);
  head("1k8ychv", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Blog - page ${escape_html(page)}</title>`);
    });
    $$renderer2.push(`<meta data-key="description" name="description"${attr("content", siteDescription)}/>`);
  });
  if (posts.length) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<h1>Posts ${escape_html(lowerBound)}–${escape_html(upperBound)} of ${escape_html(totalPosts)}</h1> `);
    Pagination($$renderer, { currentPage: page, totalPosts });
    $$renderer.push(`<!----> `);
    PostsList($$renderer, { posts });
    $$renderer.push(`<!----> `);
    Pagination($$renderer, { currentPage: page, totalPosts });
    $$renderer.push(`<!---->`);
  } else {
    $$renderer.push("<!--[!-->");
    $$renderer.push(`<h1>Oops!</h1> <p>Sorry, no posts to show here.</p> <a href="/blog">Back to blog</a>`);
  }
  $$renderer.push(`<!--]-->`);
}
export {
  _page as default
};
