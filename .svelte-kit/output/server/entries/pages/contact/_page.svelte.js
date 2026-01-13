import { h as head, a as attr } from "../../../chunks/index2.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const email1 = ["zoe.renaudie", "umontreal.ca"].join("@");
    const email2 = ["zoe.renaudie", "gmail.com"].join("@");
    head("1bv7ezn", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Contact</title>`);
      });
    });
    $$renderer2.push(`<h1>Contact</h1> <p>You can write to <a${attr("href", `mailto:${email1}`)}>umontreal</a> or <a${attr("href", `mailto:${email2}`)}>gmail</a>.</p> <p>Follow me on social media:</p> <ul><li><a href="https://www.linkedin.com/in/zoerenaudie" target="_blank" rel="noopener">LinkedIn</a></li> <li><a href="https://www.instagram.com/zoerenaudie" target="_blank" rel="noopener">Instagram</a></li></ul>`);
  });
}
export {
  _page as default
};
