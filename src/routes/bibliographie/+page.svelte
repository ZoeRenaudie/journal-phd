<script>
  import { writable } from "svelte/store";
  import { base } from '$app/paths';

  const modules = import.meta.glob('/src/lib/bibliographie/*.md', { eager: true });

  // Normalisation du slug
  const normalizeSlug = (str) =>
    str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

  const entries = Object.entries(modules)
    .map(([path, mod]) => {
      const filename = path.split("/").pop().replace(".md", "");
      const slug = normalizeSlug(filename);
      return { slug, ...mod.metadata, content: mod.default };
    })
    .sort((a, b) => (b.date || 0) - (a.date || 0));

  const selectedTheme = writable("Tous");

  const themes = [...new Set(entries.map(e => e.theme || "Autres"))];
</script>

<h1>Bibliographie commentée</h1>

<div class="theme-selector">
  <label for="theme-select">Filtrer par thème : </label>
  <select id="theme-select" bind:value={$selectedTheme}>
    <option value="Tous">Tous</option>
    {#each themes as theme}
      <option value={theme}>{theme}</option>
    {/each}
  </select>
</div>

{#each $selectedTheme === "Tous" ? themes : [$selectedTheme] as theme}
  <section>
    <h2>{theme}</h2>
    <ul>
      {#each entries.filter(e => (e.theme || "Autres") === theme) as entry}
        <li class="research-note">
          <p class="citation">
            <a href={`${base}/bibliographie/${entry.slug}`}>
              {@html entry.citation}
            </a>
          </p>
        </li>
      {/each}
    </ul>
  </section>
{/each}
