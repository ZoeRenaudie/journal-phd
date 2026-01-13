import { _ as __vite_glob_0_15, a as __vite_glob_0_14, b as __vite_glob_0_13, c as __vite_glob_0_12, d as __vite_glob_0_11, e as __vite_glob_0_10, f as __vite_glob_0_9, g as __vite_glob_0_8, h as __vite_glob_0_7, i as __vite_glob_0_6, j as __vite_glob_0_5, k as __vite_glob_0_4, l as __vite_glob_0_3, m as __vite_glob_0_2, n as __vite_glob_0_1, o as __vite_glob_0_0 } from "../../../chunks/Thinking About Exhibitions.js";
import { b as store_get, e as ensure_array_like, d as escape_html, a as attr, u as unsubscribe_stores } from "../../../chunks/index2.js";
import { w as writable } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { h as html } from "../../../chunks/html.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const modules = /* @__PURE__ */ Object.assign({ "/src/lib/bibliographie/*Archiving complex digital artworks.md": __vite_glob_0_0, "/src/lib/bibliographie/*From Collection Management to Content Management in Art Documentation - The Conservator as an Editor.md": __vite_glob_0_1, "/src/lib/bibliographie/*Introduction in Conservation of Contemporary Art.md": __vite_glob_0_2, "/src/lib/bibliographie/*La conservation-restauration du patrimoine au regard des humanités numériques - enjeux techniques, sociocognitifs et politiques.md": __vite_glob_0_3, "/src/lib/bibliographie/*Publishing as a conservation strategy - Platforms, care and contemporary art.md": __vite_glob_0_4, "/src/lib/bibliographie/*Sharing Knowledge in Art Conservation - From Repository Building to Research Publishing.md": __vite_glob_0_5, "/src/lib/bibliographie/*The Display Ontology.md": __vite_glob_0_6, "/src/lib/bibliographie/*The Materiality of the Archive - Creative Practice in Context.md": __vite_glob_0_7, "/src/lib/bibliographie/Collecting archives of objects and stories - on the lives and futures of contemporary art at the museum.md": __vite_glob_0_8, "/src/lib/bibliographie/ConserverRestaurer - l'oeuvre d'art à l'époque de sa préservation technique.md": __vite_glob_0_9, "/src/lib/bibliographie/Crip Curation as Care.md": __vite_glob_0_10, "/src/lib/bibliographie/La documentation et la diffusion numérique des expositions de collections nationales - le Musée national des beaux-arts du Québec et le Musée d’art contemporain de Montréal.md": __vite_glob_0_11, "/src/lib/bibliographie/Making Time.md": __vite_glob_0_12, "/src/lib/bibliographie/Qu'est-ce que le contemporain.md": __vite_glob_0_13, "/src/lib/bibliographie/Sustainable Exhibition Design & Construction.md": __vite_glob_0_14, "/src/lib/bibliographie/Thinking About Exhibitions.md": __vite_glob_0_15 });
    const normalizeSlug = (str) => str.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
    const entries = Object.entries(modules).map(([path, mod]) => {
      const filename = path.split("/").pop().replace(".md", "");
      const slug = normalizeSlug(filename);
      return { slug, ...mod.metadata, content: mod.default };
    }).sort((a, b) => (b.date || 0) - (a.date || 0));
    const selectedTheme = writable("Tous");
    const themes = [...new Set(entries.map((e) => e.theme || "Autres"))];
    $$renderer2.push(`<h1>Bibliographie commentée</h1> <div class="theme-selector"><label for="theme-select">Filtrer par thème :</label> `);
    $$renderer2.select(
      {
        id: "theme-select",
        value: store_get($$store_subs ??= {}, "$selectedTheme", selectedTheme)
      },
      ($$renderer3) => {
        $$renderer3.option({ value: "Tous" }, ($$renderer4) => {
          $$renderer4.push(`Tous`);
        });
        $$renderer3.push(`<!--[-->`);
        const each_array = ensure_array_like(themes);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let theme = each_array[$$index];
          $$renderer3.option({ value: theme }, ($$renderer4) => {
            $$renderer4.push(`${escape_html(theme)}`);
          });
        }
        $$renderer3.push(`<!--]-->`);
      }
    );
    $$renderer2.push(`</div> <!--[-->`);
    const each_array_1 = ensure_array_like(store_get($$store_subs ??= {}, "$selectedTheme", selectedTheme) === "Tous" ? themes : [
      store_get($$store_subs ??= {}, "$selectedTheme", selectedTheme)
    ]);
    for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
      let theme = each_array_1[$$index_2];
      $$renderer2.push(`<section><h2>${escape_html(theme)}</h2> <ul><!--[-->`);
      const each_array_2 = ensure_array_like(entries.filter((e) => (e.theme || "Autres") === theme));
      for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
        let entry = each_array_2[$$index_1];
        $$renderer2.push(`<li class="research-note"><p class="citation"><a${attr("href", `${base}/bibliographie/${entry.slug}`)}>${html(entry.citation)}</a></p></li>`);
      }
      $$renderer2.push(`<!--]--></ul></section>`);
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
