import { e as ensure_array_like, d as escape_html, ab as bind_props } from "../../../../chunks/index2.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    const metadata = data.metadata;
    const displayFields = ["author", "title", "date", "abstract", "tags", "theme"];
    const displayValue = (v) => {
      if (v == null) return "";
      if (Array.isArray(v)) return v.join(", ");
      return v;
    };
    $$renderer2.push(`<article class="research-note"><header><div class="yaml-box"><!--[-->`);
    const each_array = ensure_array_like(displayFields);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let key = each_array[$$index];
      if (metadata[key] !== void 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p><strong>${escape_html(key)}:</strong> ${escape_html(displayValue(metadata[key]))}</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div></header> <!---->`);
    data.content?.($$renderer2, {});
    $$renderer2.push(`<!----></article>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
