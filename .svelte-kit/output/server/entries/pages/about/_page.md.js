import { h as head } from "../../../chunks/index2.js";
import { h as html } from "../../../chunks/html.js";
function _page_md($$renderer) {
  head("1b155ms", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>About</title>`);
    });
  });
  $$renderer.push(`<h1 id="about"><a aria-hidden="true" tabindex="-1" href="#about"><span class="icon icon-link"></span></a>About</h1> <p>This is an example of how you can have <em>markdown</em> in page content!</p> <ul><li>How</li> <li><strong>Cool</strong></li> <li>Is <em>that</em>!?</li></ul> <p>If you like, you can also import markdown into any Svelte page.</p> <p>Anyway, you can find this file here:</p> <pre class="language-undefined">${html(`<code class="language-undefined">src/routes/about/+page.md</code>`)}</pre> <p>Here’s the <a href="/">home link</a> if you wanna go back.</p>`);
}
export {
  _page_md as default
};
