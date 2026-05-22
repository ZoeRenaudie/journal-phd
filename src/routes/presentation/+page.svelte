<script>
  const presentations = [
    {
      titre: "Display : une infrastructure sémantique pour la documentation des accrochages",
      evenement: "Humanistica 2026",
      date: "2026-05-22",
      url: "/presentation/humanistica2026/"
    },
    {
      titre: "Documenting exhibition and collection displays: an ontological approach",
      evenement: "DH 2024",
      date: "2024",
      url: "/presentation/dh2024/"
    }
  ];
</script>

<h1>Présentations</h1>

<ul>
  {#each presentations as p}
    <li>
      <a href={p.url} target="_blank">{p.titre}</a>
      <span>{p.evenement} — {p.date}</span>
    </li>
  {/each}
</ul>