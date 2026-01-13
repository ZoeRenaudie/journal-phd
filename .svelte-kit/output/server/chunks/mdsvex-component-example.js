import "clsx";
import { C as Callout } from "./Callout.js";
const metadata = {
  "title": "A Markdown post with a Svelte component",
  "date": "2023-04-28",
  "updated": "2023-04-28",
  "categories": ["sveltekit", "markdown", "svelte"],
  "coverImage": "/images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg",
  "coverWidth": 16,
  "coverHeight": 9,
  "excerpt": "This post demonstrates how to include a Svelte component in a Markdown post."
};
const {
  title,
  date,
  updated,
  categories,
  coverImage,
  coverWidth,
  coverHeight,
  excerpt
} = metadata;
function Mdsvex_component_example_md($$renderer) {
  $$renderer.push(`<p>This starter includes an <code>Callout.svelte</code> component. It’s not particularly useful on its own, but here’s how you might use it inside of a Markdown post, thanks to mdsvex.</p> `);
  Callout($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->This is an example of the Callout.svelte component! Find it in <code>src/lib/components/Callout.svelte</code>.`);
    }
  });
  $$renderer.push(`<!----> <p>You can inject any Svelte components you want into Markdown! Just import them in a <code>&lt;script></code> tag and then use them wherever you like.</p> <p>For that matter, you can inject any HTML anywhere! (Note that you cannot use Markdown <em>inside</em> Svelte components or HTML, however. Any opened tag must be closed before returning to Markdown.)</p>`);
}
export {
  Mdsvex_component_example_md as default,
  metadata
};
