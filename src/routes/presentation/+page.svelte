<script>
  const presentations = [
    {
      titre: "Documentation des collections autochtones : enjeux éthiques et numériques",
      evenement: "MSL Cours Muséologie UdeM",
      date: "2026-06-25",
      url: "/presentation/2026CADtoLOD/"
    },{
      titre: "Display : une infrastructure sémantique pour la documentation des accrochages",
      evenement: "Humanistica 2026",
      date: "2026-05-22",
      url: "/presentation/humanistica2026/"
    },{
      titre: "Présentation de l’ontologie et l’outil **Display**",
      evenement: "Midi-causerie Ouvroir",
      date: "2025-10-05",
      url: "/presentation/midicauserie/"
    },{
      titre: "Documenting Exhibitions with the Semantic Web",
      evenement: "Ouvroir",
      date: "2024-12-17",
      url: "/presentation/documenting/"
    },{
      titre: "Atelier Display : documenter des accrochages de collection à l’aide d’une approche ontologique",
      evenement: "Ouvroir",
      date: "2024-10-28",
      url: "/presentation/atelier/"
    },{
      titre: "Documenting exhibition and collection displays: an ontological approach",
      evenement: "DH 2024",
      date: "2024-08-07",
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