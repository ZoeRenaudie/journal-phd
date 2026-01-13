import { _ as __vite_glob_0_7, a as __vite_glob_0_6, b as __vite_glob_0_5, c as __vite_glob_0_4, d as __vite_glob_0_3, e as __vite_glob_0_2, f as __vite_glob_0_1, g as __vite_glob_0_0 } from "../../../chunks/Thinking About Exhibitions.js";
const load = () => {
  const modules = /* @__PURE__ */ Object.assign({ "/src/lib/bibliographie/Collecting archives of objects and stories - on the lives and futures of contemporary art at the museum.md": __vite_glob_0_0, "/src/lib/bibliographie/ConserverRestaurer - l'oeuvre d'art à l'époque de sa préservation technique.md": __vite_glob_0_1, "/src/lib/bibliographie/Crip Curation as Care.md": __vite_glob_0_2, "/src/lib/bibliographie/La documentation et la diffusion numérique des expositions de collections nationales - le Musée national des beaux-arts du Québec et le Musée d’art contemporain de Montréal.md": __vite_glob_0_3, "/src/lib/bibliographie/Making Time.md": __vite_glob_0_4, "/src/lib/bibliographie/Qu'est-ce que le contemporain.md": __vite_glob_0_5, "/src/lib/bibliographie/Sustainable Exhibition Design & Construction.md": __vite_glob_0_6, "/src/lib/bibliographie/Thinking About Exhibitions.md": __vite_glob_0_7 });
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
