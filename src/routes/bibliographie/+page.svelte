<script>
  import { siteDescription } from '$lib/config'
  import { base } from '$app/paths';

  const modules = import.meta.glob('/src/lib/bibliographie/*.md', { eager: true });

  const normalizeSlug = (str) =>
    str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

  // Nettoie les tags : retire les préfixes comme "subject/"
  const cleanTag = (tag) => tag.split('/').pop()

  const entries = Object.entries(modules)
    .map(([path, mod]) => {
      const filename = path.split("/").pop().replace(".md", "");
      const slug = normalizeSlug(filename);
      const cleanedTags = (mod.metadata.tags ?? []).map(cleanTag)
      return { slug, ...mod.metadata, tags: cleanedTags, content: mod.default };
    })
    .sort((a, b) => (b.date || 0) - (a.date || 0));

  // Tous les tags uniques triés
  const allTags = [...new Set(entries.flatMap(e => e.tags ?? []))].sort()

  // Comptage par tag
  const tagCounts = allTags.reduce((acc, tag) => {
    acc[tag] = entries.filter(e => e.tags?.includes(tag)).length
    return acc;
  }, {});
</script>

<svelte:head>
  <title>Ressources commentées</title>
  <meta data-key="description" name="description" content={siteDescription}>
</svelte:head>

<div class="blog-layout">
  <aside class="categories-menu">
    <h2>Tags</h2>
    <ul>
      <li><a href="{base}/bibliographie">Tous ({entries.length})</a></li>
      {#each allTags as tag}
        <li>
          <a href="{base}/bibliographie/theme/{tag}">
            {tag} ({tagCounts[tag]})
          </a>
        </li>
      {/each}
    </ul>
  </aside>

  <main class="posts-section">
    <h1>Ressources commentées</h1>
    <ul class="biblio-list">
      {#each entries as entry}
        <li class="research-note">
          <p class="citation">
            <a href="{base}/bibliographie/{entry.slug}">
              {@html entry.bibliography}
            </a>
          </p>
        </li>
      {/each}
    </ul>
  </main>
</div>