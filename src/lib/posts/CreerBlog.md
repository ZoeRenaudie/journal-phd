---
title: "Créer ce blog"
date: "2026-01-13"
updated: ""
categories:
  - "outils numériques"
excerpt: Présentation des outils et du processus de création de ce blog.
---

J’ai créé mon blog pour partager mes recherches et mes réflexions de thèse, et... me forcer à écrire. Mais aussi pour comprendre comment fonctionne la création d’un site web de A à Z, en partant de zéro, en utilisant des outils open-source et gratuits. Tout est là : https://github.com/ZoeRenaudie/journal-phd, si ça peut aider quelqu'un. Ce qui est certain, c'est que j'ai besoin de *Faire* pour réfléchir[^1].

## Outils utilisés
J’ai commencé par choisir une structure simple et efficace, en optant pour SvelteKit, qui me permet de travailler rapidement avec du JavaScript moderne et de personnaliser facilement le design. Je suis partie du modèle de [Josh Collinsworth](github.com/josh-collinsworth/sveltekit-blog-starter)

Ensuite, j’ai modifié un peu l’architecture des pages et des articles afin d'introduire ma section bibliographie commentée, en définissant la manière dont je voulais que les métadonnées comme l’auteur, la date ou les tags apparaissent. Cette partie est connectée à mon vault Obsidian ou je gère mes références bibliographiques avec Zotero.

J'ai choisi Svelte parce que c'est une solution de site statique qui me permet de déployer facilement le blog et d'avoir la main mise sur toutes mes données. Mes textes sont en textes pur markdown donc je peux les modifier avec n'importe quel éditeur de texte. Je voulais aussi préparer la possibilité de pouvoir utiliser la Librairie Javascript [Reframe](https://ouvroir.umontreal.ca/projets/reframe) que nous développons à L'Ouvroir pour la présentation de contenus visuels. 

## Graphisme

J'ai conservé la majorité des réglages d'origine de Josh Collinsworth. J’ai modifié le CSS afin d’ajuster les marges. Mon frère, [Evan Renaudie](https://evanrenaudie.com/), artiste et graphiste, a selectionné les typographies et les couleurs, que j'ai implémenté dans le code. J’ai aussi pris le temps d’ajouter un favicon pour que le blog ait sa propre identité visuelle.

Les typographies sont non-binaires distibué par le collectif Bye-Bye Binary. Les titres sont en *Manifont Grotesk* (c) CUTE Sophie Vela, Max Lillo et al. et le texte courant en *DM Sans* (c) OFL Camille Circlude, Eugénie Bidaut, Mariel Nils, Bérénice Bouin. J'ai modifié légerement cette dernière pour obtenir un italique.
[Gitlab](https://gitlab.com/bye-bye-binary) 
[Typothèque](https://typotheque.genderfluid.space/)

## Contenu

Plus qu'à rassembler le contenu ! 


[^1]: Ingold, Tim, Hervé (Traducteur) Gosselin, et Hicham-Stéphane Afeissa. 2017. Faire: anthropologie, archéologie, art et architecture. Éditions Dehors.
