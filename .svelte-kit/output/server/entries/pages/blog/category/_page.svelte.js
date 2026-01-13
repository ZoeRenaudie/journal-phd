import { h as head, e as ensure_array_like, a as attr, d as escape_html, f as stringify } from "../../../../chunks/index2.js";
import { b as base } from "../../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
function _page($$renderer, $$props) {
  let { data } = $$props;
  const { uniqueCategories } = data;
  head("180f2nq", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Blog | Categories</title>`);
    });
  });
  $$renderer.push(`<div class="compressed-content"><h1 class="h2">All blog categories</h1> <ul><!--[-->`);
  const each_array = ensure_array_like(uniqueCategories);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let category = each_array[$$index];
    $$renderer.push(`<li><a${attr("href", `${stringify(base)}/blog/category/${stringify(category.title)}`)}>${escape_html(category.title)}</a> (${escape_html(category.count)})</li>`);
  }
  $$renderer.push(`<!--]--></ul></div>`);
}
export {
  _page as default
};
