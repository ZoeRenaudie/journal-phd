import { h as head, d as escape_html } from "../../chunks/index2.js";
import { s as siteTitle } from "../../chunks/config.js";
function _page($$renderer, $$props) {
  let { data } = $$props;
  head("1uha8ag", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>${escape_html(siteTitle)}</title>`);
    });
  });
  $$renderer.push(`<!---->`);
  data.ReadMe($$renderer, {});
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
