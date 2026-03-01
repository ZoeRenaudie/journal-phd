<script>
  import { writable } from "svelte/store";
  import { siteDescription } from '$lib/config'
	import { base } from '$app/paths';

  const modules = import.meta.glob('/src/lib/bibliographie/*.md', { eager: true });

  const normalizeSlug = (str) =>
    str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

  const entries = Object.entries(modules)
    .map(([path, mod]) => {
      const filename = path.split("/").pop().replace(".md", "");
      const slug = normalizeSlug(filename);
      return { slug, ...mod.metadata, content: mod.default };
    })
    .sort((a, b) => (b.date || 0) - (a.date || 0));

  const themes = ["Tous", ...new Set(entries.map(e => e.theme || "Autres"))];
  const selectedTheme = writable("Tous");

  $: filteredEntries = $selectedTheme === "Tous"
    ? entries
    : entries.filter(e => (e.theme || "Autres") === $selectedTheme);

  $: themeCounts = themes.reduce((acc, theme) => {
    acc[theme] = theme === "Tous"
      ? entries.length
      : entries.filter(e => (e.theme || "Autres") === theme).length;
    return acc;
  }, {});
</script>

<svelte:head>
	<title>Ressources commentées</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>

<div class="blog-layout">
  <aside class="categories-menu">
    <h2>Thèmes</h2>
    <ul>
      {#each themes as theme}
        <li>
          <button
            class:active={$selectedTheme === theme}
            onclick={() => selectedTheme.set(theme)}
          >
            {theme} ({themeCounts[theme]})
          </button>
        </li>
      {/each}
    </ul>
  </aside>

  <main class="posts-section">
    <h1>Ressources commentées</h1>
    <ul class="biblio-list">
      {#each filteredEntries as entry}
        <li class="research-note">
          <p class="citation">
            <a href="{base}/bibliographie/{entry.slug}">
              {@html entry.citation}
            </a>
          </p>
        </li>
      {/each}
    </ul>
  </main>
</div>