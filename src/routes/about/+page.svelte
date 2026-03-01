<script>
  import CV from './cv.md'
</script>

<svelte:head>
  <title>Recherche & CV</title>
</svelte:head>

<div class="blog-layout">
  <nav class="categories-menu">
    <h2>Sections</h2>
    <ul>
      <li><a href="#biographie">Biographie</a></li>
      <li><a href="#competences">Compétences</a></li>
      <li><a href="#recherche">Activité de recherche</a></li>
      <li><a href="#formation">Formation</a></li>
      <li><a href="#experience">Expériences professionnelles</a></li>
      <li><a href="#distinctions">Distinctions</a></li>
      <li><a href="#implications">Autres implications</a></li>
      <li><a href="#projets">Projets annexes</a></li>
    </ul>
  </nav>
  <main class="posts-section">
    <h1>Recherche & CV</h1>
    <CV />
  </main>
</div>