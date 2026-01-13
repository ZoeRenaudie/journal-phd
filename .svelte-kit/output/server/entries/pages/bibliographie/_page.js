import { _ as __vite_glob_0_15, a as __vite_glob_0_14, b as __vite_glob_0_13, c as __vite_glob_0_12, d as __vite_glob_0_11, e as __vite_glob_0_10, f as __vite_glob_0_9, g as __vite_glob_0_8, h as __vite_glob_0_7, i as __vite_glob_0_6, j as __vite_glob_0_5, k as __vite_glob_0_4, l as __vite_glob_0_3, m as __vite_glob_0_2, n as __vite_glob_0_1, o as __vite_glob_0_0 } from "../../../chunks/Thinking About Exhibitions.js";
const load = () => {
  const modules = /* @__PURE__ */ Object.assign({ "/src/lib/bibliographie/*Archiving complex digital artworks.md": __vite_glob_0_0, "/src/lib/bibliographie/*From Collection Management to Content Management in Art Documentation - The Conservator as an Editor.md": __vite_glob_0_1, "/src/lib/bibliographie/*Introduction in Conservation of Contemporary Art.md": __vite_glob_0_2, "/src/lib/bibliographie/*La conservation-restauration du patrimoine au regard des humanités numériques - enjeux techniques, sociocognitifs et politiques.md": __vite_glob_0_3, "/src/lib/bibliographie/*Publishing as a conservation strategy - Platforms, care and contemporary art.md": __vite_glob_0_4, "/src/lib/bibliographie/*Sharing Knowledge in Art Conservation - From Repository Building to Research Publishing.md": __vite_glob_0_5, "/src/lib/bibliographie/*The Display Ontology.md": __vite_glob_0_6, "/src/lib/bibliographie/*The Materiality of the Archive - Creative Practice in Context.md": __vite_glob_0_7, "/src/lib/bibliographie/Collecting archives of objects and stories - on the lives and futures of contemporary art at the museum.md": __vite_glob_0_8, "/src/lib/bibliographie/ConserverRestaurer - l'oeuvre d'art à l'époque de sa préservation technique.md": __vite_glob_0_9, "/src/lib/bibliographie/Crip Curation as Care.md": __vite_glob_0_10, "/src/lib/bibliographie/La documentation et la diffusion numérique des expositions de collections nationales - le Musée national des beaux-arts du Québec et le Musée d’art contemporain de Montréal.md": __vite_glob_0_11, "/src/lib/bibliographie/Making Time.md": __vite_glob_0_12, "/src/lib/bibliographie/Qu'est-ce que le contemporain.md": __vite_glob_0_13, "/src/lib/bibliographie/Sustainable Exhibition Design & Construction.md": __vite_glob_0_14, "/src/lib/bibliographie/Thinking About Exhibitions.md": __vite_glob_0_15 });
  const entries = Object.entries(modules).map(([path, mod]) => {
    const slug = path.split("/").pop().replace(".md", "");
    return {
      slug,
      ...mod.metadata
    };
  });
  entries.sort((a, b) => (b.date || 0) - (a.date || 0));
  return { entries };
};
export {
  load
};
