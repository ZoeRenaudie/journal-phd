<script>
  import { base } from '$app/paths'
  let { data } = $props()
</script>

<svelte:head>
  <title>Bibliographie — {data.theme}</title>
</svelte:head>

<div class="blog-layout">
  <!-- même menu que la page principale -->
  <main>
    <h1>Ressources commentées</h1>
    <ul class="biblio-list">
      {#each data.entries as entry}
        <li><a href="{base}/bibliographie/{entry.slug}">{@html entry.citation}</a></li>
      {/each}
    </ul>
  </main>
</div>