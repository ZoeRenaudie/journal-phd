<script>
  import { base } from '$app/paths'
  let { data } = $props()
</script>

<svelte:head>
  <title>Ressources commentées — {data.tag}</title>
</svelte:head>

<div class="blog-layout">
  <aside class="categories-menu">
    <h2>Tags</h2>
    <ul>
      <li><a href="{base}/bibliographie">Tous ({data.total})</a></li>
      {#each data.allTags as tag}
        <li>
          <a href="{base}/bibliographie/theme/{tag}">
            {tag} ({data.tagCounts[tag]})
          </a>
        </li>
      {/each}
    </ul>
  </aside>

  <main class="posts-section">
    <h1>Ressources commentées</h1>
    <ul class="biblio-list">
      {#each data.entries as entry}
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