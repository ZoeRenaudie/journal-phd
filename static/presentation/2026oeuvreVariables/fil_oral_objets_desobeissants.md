# Documentation des objets désobéissants
## Colloque *Œuvres variables*, Sorbonne Nouvelle, 6 juin 2026
### Zoë Renaudie — 13h40 CEST — 20 minutes

------

**[Slide 1 : Titre]** 

Bonjour, Je remercie grandement les organisatrices et les différents comités qui me permettent aujourd'hui de vous parler de cette problématique qui m'a menée au doctorat. 

Dans mes postes en institution mentionnés précédemment, j'avais dans les mains, des œuvres qui résistaient à nos outils. 

Pas dramatiquement, pas spectaculairement. 

Silencieusement, en débordant des cases, en exigeant des contournements, en forçant des compromis. 

Je ne comprenais pas pourquoi nos outils, pourtant si bien vendus par leur propriétaire, ne me permettaient pas de documenter cette complexité correctement. 

Donc, un peu têtue, 

j'ai cherché à comprendre la technologie qui se cache derrière nos systèmes, notamment en créant une base de données prototype. 

C'est cette expérience qui m'a amenée en doctorat, pour travailler sur la documentation de l'objet qui me semblait le plus variable et le plus complexe : l'exposition. 

Je vous livre aujourd'hui mes découvertes pas sur quelle documentation créer mais finalement plutot sur comment la gérer. D'abord un diagnostic, celui de l'inadéquation structurelle entre nos outils de gestion et les œuvres variables ; ensuite une proposition de modèle, fondée sur la séparation entre le conceptuel et le physique, et sur la notion d'item et d'événement ; et enfin un horizon, celui du web sémantique et des ontologies du patrimoine, avec leurs promesses et leurs angles morts.

---

**[Slide 2 : INADÉQUATION — Philippe Parreno, \*Danny et No More Reality\*, LUMA Arles]** 

Prenez l'installation de Philippe Parreno présentée à LUMA Arles. 

C'est une œuvre composée de deux espaces imbriqués dans une salle. 

Le premier, *Danny*, est conçu comme un automate vivant : un étang artificiel, un volet à miroir, un système sonore robotique qui réagit en temps réel aux données de son environnement. 

L'espace se chorégraphie lui-même. 

Les cartels eux-mêmes, les *Flickering Cartels*, clignotent, disparaissent, reviennent. 

Le second, *No More Reality*, est un film composé de dix films préexistants, fusionnés par l'ajout de séquences inédites. 

Les dalles LED s'usent, doivent être remplacées, il faut suivre leur dégradation et coordonner un prestataire. 

Tous les ans, le studio de l'artiste vient en résidence. 

Des éléments changent, évoluent. 

Pourtant l'œuvre reste la même, sous le même titre. Il a même présenté un travail avec Tino Sehgal, et par chance, dans ce cas-là, il n'est pas vraiment question de documentation. 

La question que ça pose : **comment documenter ce qui se reconfigure, se dégrade, disparaît, ou n'existe que dans l'instant de sa présentation ?** 

---

**[Slide 3 : CADRE EXISTANT — La base de données standard : une fiche, une œuvre]** 

Voici comment on documente traditionnellement une œuvre dans nos bases de données de gestion, usuellement des base de données relationnelles. 

**au centre - une œuvre.** 

Cette fiche peut avoir des images, un emplacement, un auteur, des éléments constitutifs, des documents associés, si on a de la chance. 

Tout est organisé autour d'une **entité centrale**, qui est l’œuvre décrite par des champs prédéfinis. 

Ce modèle repose sur **quatre présupposés implicites** : 

1. Un objet = une fiche. 

1. Cet objet a des métadonnées **stables**. 

1. Il a une **seule présence physique localisable**. 

1. Il peut être décrit par des **champs fixes**. 

**Et ça marche, pour un tableau.** Pour une sculpture. 

Mais pour les œuvres variables c'est Mettre une œuvre en conserve comme disait Marianne Mispelaëre hier. 

---

**[Slide 4 : INADÉQUATION — Carlos Amorales, \*Everything Louder Than Everything Else\*, 2003]** 

Prenez *Everything Louder Than Everything Else* de Carlos Amorales. Une installation où : 

- les objets **ne sont pas tous présentés simultanément**, la configuration change selon l'accrochage ; 

- les oiseaux sont **chacun dans un état distinct**, montés comme des mobiles dans l'espace ; 

- ces oiseaux ne peuvent ne peuvent pas être identifiés, pas recevoir de marquage du numéro d'inventaire ; 

- il n'existe pas de **protocole spécifique pour la peinture murale**, seulement des préconisations. 

**Combien de fiches faut-il créer pour cette œuvre ?** Une ? Deux ? Dix ? Et comment documenter ce qui **n'existe pas en permanence** ? 

Le problème, ce n'est pas l'œuvre. **C'est notre façon de la penser.** 

---

**[Slide 5 : ACCUMULATION DOCUMENTAIRE — Des dizaines de documents]** 

Si on regarde la documentation produite tout au long de la vie d'une œuvre, voici ce qu'on obtient : 

- À la **création** : photos d'atelier, dessins, notes, échanges avec l'artiste. 

- À l'**acquisition** : dossier d'acquisition, constats d'état, contrats, descriptions. 

- À la **publicisation** : documents de prêt, vues d'exposition, articles critiques, doc logistique 

- À la **conservation** : notices, photographies, dossiers d'œuvre, préconisations, rapports d'interventions 

**Des dizaines de documents.** Produits par des personnes différentes, à des moments différents, dans des outils différents. 

Stocker dans des dossiers et formats différents dans des endroits differents. 

**Et entre eux ? Rien.** Pas de lien. Pas de connexion. 

L'information est enfermée dans le document. Chaque document existe dans son **propre silo**. 

**C'est ça, le vrai problème.** Pas seulement le manque d'informations. **Le manque de liens.** 

Mais à quoi ressemble vraiment la vie d'une œuvre variable ? 

---

**[Slide 6 : COMPLEXITÉ RÉELLE — La vie d'une œuvre : réseau]** 

**À ça.** 

Ce n'est pas une chronologie. **C'est un réseau.** 

- L'artiste, le fabricant, le propriétaire, les critiques, le public… **chacun produit des informations**. 

- L'œuvre est une **idée** qui devient une création, qui est conservée, acquise, publiée, activée, re-documentée. De nouveaux éléments entrent en jeu. **Ces étapes ne sont pas linéaires.** Elles se croisent, se répètent, se contredisent parfois. 

**La connaissance sur une œuvre variable est, par nature, dispersée.** Et nos systèmes actuels ont été conçus pour gérer une fiche… **pas pour habiter ce réseau.** 

----

**[Slide 7 : CHANGEMENT DE FOCUS — Modéliser les items]** 

Alors, comment modéliser ça ? En **séparant ce qui est conceptuel de ce qui est physique ou logistique**. 

- **L'Œuvre** : c'est le **concept**. L'idée. Le titre peut lui-même varier. 

- **L'Item** : c'est l'**entité physique** qu'on expose, qu'on prête, qu'on localise, qui part dans une caisse, ce qui voyage, ce qui a une logistique propre pour être exposé. 

On voit apparaître dans ce schéma quelque chose d'essentiel : **l'Événement**. Une activation, une réactivation, une intervention de restauration, une exposition. 

C'est ce qui permet de documenter non pas seulement l'objet dans sa staticité, mais ce qui lui arrive dans le temps. 

*(Courte pause.)* 

Ce déplacement, de l'œuvre vers l'item, c'est simple en apparence. Mais il change tout ce qu'on peut dire d'une collection. 

---

**[Slide 10 : PROCESSUS — Processus logistique]** 

Regardez ce schéma. Un élément part en prêt : les informations sont réparties entre le document de transport, le contrat, le budget, les rapports des restaurateurs. 

Aujourd'hui, on recrée ces documents à la main, en ressaisissant des données déjà présentes dans le système. C'est du temps perdu, et c'est une source d'erreurs. 

Si toutes les métadonnées sont dans la base, pourquoi ne pas s'en servir pour renseigner directement les documents ? 

Le constat d'état, le rapport d'installation, la fiche de suivi de maintenance, les éléments pour les calculs de rappoet éco-responsables. 

Le flux s'inverse : on ne verse plus des documents dans la base. **On produit des documents depuis la base.** 

---

**[Slide 8 : PLUSIEURS DÉCLARATIONS — Néda Razavipour, \*Oscillation\* (2014)]** 

Prenez *Oscillation* de Néda Razavipour, 2014. 

Cette œuvre existe sous deux formes dans la collection du CNAP : une sculpture et une performance.  

---

**[Slide 10 : DÉCLARATIONS D'ITEM — Néda Razavipour, \*Oscillation\* (2014)]** 

Imaginons que nous avons acces a toutes les informations pour constituer le reseau de l'oeuvre. 

---

**[Slide 11 : DÉCLARATIONS D'ITEM — Néda Razavipour, \*Oscillation\* (2014)]** 

Avec le modèle par items, on n'a plus qu'une seule entrée. 

Et sous cette entrée, on peut avoir d’items distincts, chacun avec sa propre logique de suivi. 

L'Item Sculpture : objet physique, dimensions fixes, localisation en réserve. L'Item Caisse : caisse de transport d'origine, en bon état, localisation quai 3. L'Item Performance : événement temporel, protocole d'origine, chaque activation. 

L'Item Vidéo : master VHS, pour archive, non présentable. 

Et ainsi de suite : l'Étagère, les Assiettes peuvent être un lot de consommable dont on gère le stock, le Certificat peut etre localisé, la Vidéo d'expo peut alors avoir plusieurs supports. 

Chaque item peut désormais générer sa propre chaîne documentaire. 

La caisse a ses documents de transport. Le protocole a ses rapports d'activation. La sculpture a ses constats d'état. 

**Tout est relié à une seule œuvre, sans duplication.** 

Et cette organisation pose une question que je veux nommer : dans les musées, le numéro d'inventaire est sur l'objet. 

Mais si l'objet, c'est l'item, et que l'item peut être une performance ou un certificat, comment gère-t-on l'inventaire ? 

La base de gestion des items n'est pas l'inventaire légal. 

Ce sont deux choses distinctes, et il est possible de les faire coexister. 

---

**[Slides 12 : OUTIL / OUTILS — De l'outil de stockage à l'outil de production]** 

Voici ce que ça change concrètement. 

Dans le premier état, la base de données est au centre, et tous les documents gravitent autour d'elle comme des satellites déconnectés. 

On verse, on stocke, on classe. 

Et c'est chronophage, parce qu'on ressaisit à la main ce qu'on a déjà produit ailleurs. 

---

**[Slides 13 : OUTIL / OUTILS — De l'outil de stockage à l'outil de production]** 

Dans le second état, la flèche s'inverse. 

La base alimente le PSBC, le site web, les documents de prêt, les rapports. **C'est un outil de production**, pas seulement d'archivage. 

L'interface doit permettre des profils de visualisation différents selon les services : le régisseur, le conservateur et le médiateur n'ont pas les mêmes besoins 

----

[Slide 14 : Accumuler ne suffit plus. Il faut articuler.] 

Mais la bdd relationnelle reste une solution technique extrêmement rigide, ajouter une catégories, une rubrique n'est pas si simple. 

Il faut aussi **repenser la façon dont on organise la connaissance**. 

Nos systèmes actuels **accumulent**. Ils stockent. Ils classent. Ils produisent des fiches. 

**Accumuler ne suffit plus. Il faut articuler.** 

- **Relier** des informations dispersées **sans les centraliser**. 

- **Préserver les tensions** sans les résoudre. 

- Faire de la documentation un **acte épistémique**, pas seulement logistique. 

*(Voix plus douce.)* Pour ça, je vous propose une métaphore : **la mangrove.** 

Chez Édouard Glissant, la mangrove, c’est un écosystème où les racines **s’entrelacent sans hiérarchie**, où **sédimentation et décomposition coexistent**. Où certaines communautés ont **le droit à l’opacité** 

 le droit de ne pas traduire leur savoir dans un langage universalisant. 

**Nos œuvres variables, c’est ça.** Des racines qui s’entremêlent. Des savoirs qui **coexistent sans se réduire les uns aux autres**. 

---

**[Slide 14 : LINKED OPEN USABLE DATA — Modéliser les relations, pas seulement les objets]** 

Alors, comment faire pour **relier ces informations dispersées** sans tout centraliser ? une réponse seraient les **Linked Open Usable Data** — ou LOUD. Ce ne sont pas une nouvelle base de données centrale. Pas un outil qui remplace les vôtres. 

C’est une **méthode pour publier et relier des données** sur le web, en utilisant des **standards ouverts**. 

Chaque entité a un identifiant unique et persistant, comme une URL. Chaque relation est nommée et typée. Le musée A documente la sculpture d'*Oscillation*. Le site de l'artiste documente la performance. (*clin d'oeil a Stéphane)*
Avec les LOUD, on peut relier ces deux items à la même œuvre sans fusionner les systèmes. On peut aussi relier un constat d'état au contrat de prêt correspondant, sans que les deux services n'aient à adopter le même outil. 

Concrètement, cela passe par **Linked Art**, un profil d'application basé sur CIDOC-CRM qui permet aux musées de publier leurs données de collection dans un format interopérable.  

----

**[Slide 15 : WEB 3.0 — CIDOC-CRM / LMRoo]** 

Pour ce faire, il faut s'interesser au **web sémantique.** Au lieu de stocker les données dans des tables, on les publie comme des données liées, où chaque entité a un identifiant persistant et chaque relation est nommée. 

Aujourd’hui, un ordinateur voit 'Razavipour' comme une chaîne de caractères. Avec le web sémantique, il saurait que c’est une artiste, qui a créé *Occiliation, et que cette œuvre est liée au cnap. 

À gauche, CIDOC-CRM** : un standard générique pour le patrimoine culturel. 

- Il décrit des **actants** (E39), des **entités temporelles** (E2), des **objets conceptuels ou matériels** (E28/E24), des **lieux** (E53). 

- **Problème** : Il ne distingue pas clairement *l’œuvre* de ses *manifestations*. 

**À droite, LMRoo** : une extension bibliographique qui **comble ce vide**. 

- Elle introduit une **chaîne hiérarchique** : **F1 Work → F2 Expression → F3 Manifestation → F5 Item**. 

---

Voici une modélisation LMRoo d'*Oscillation*. Un seul F1 Work au sommet. Une F2 Expression pour la version 2014. Trois F3 Manifestations : Sculpture, Performance, Film. Et sous chaque manifestation, les F5 Items physiques : Sculpture #123, Lot d'assiettes, Étagère #456, les captations vidéo. 

Mais Camille Delattre pourra mieux vous parler de la modélisation de la performance, etant son sujet de thèse. Mais ce que ce schéma permet de dire, qu'une fiche standard ne peut pas dire : **la sculpture et la performance sont deux manifestations de la même œuvre**, pas deux œuvres différentes. Et chaque item a son propre identifiant, sa propre traçabilité, tout en restant relié au concept commun. 

| **Classe**             | **Couleur de remplissage** | **Description**                                              |
| ---------------------- | -------------------------- | ------------------------------------------------------------ |
| **Work (F1)**          | lilas                      | Représente l'**œuvre conceptuelle** (ex: "Oscillation"). C'est l'idée abstraite de l'œuvre. |
| **Expression (F2)**    | jaune pâle                 | Représente une **version spécifique** de l'œuvre (ex: "Version 2014"). |
| **Manifestation (F3)** | bleu pâle                  | Représente une **forme concrète** de l'expression (ex: sculpture, performance, film). |
| **Item (F5)**          | vert pâle                  | Représente un **exemplaire physique ou numérique** (ex: "Sculpture #123", "Captation MP4"). |

---

Slides 18

Et voici ce que ça donne quand on ajoute la documentation. L'entretien avec Razavipour — un E73 Information Object — est relié à la fois au F1 Work et à la F2 Expression. Il porte sur l'œuvre et sur une version spécifique. Il est produit par un interviewer et par Razavipour elle-même, dans un studio, à une date précise. La transcription et l'enregistrement audio sont des entités distinctes, avec leurs propres identifiants. 

Ce n'est plus un fichier quelque part sur un serveur. **C'est un nœud dans le réseau de connaissance de l'œuvre.** 

----

Slides 19

Dans le cadre de **ma thèse sur la documentation d'expositions**, ces outils ouvrent des perspectives incroyables. Reprenons l’exemple de **Philippe Parreno** qui est à la fois une exposition et une œuvre. Les deux sont confondus. 

Ce que LMRoo et CIDOC-CRM permettent de faire, c'est de documenter toutes les informations liées à cette exposition sans effort supplémentaire si la base est un outil de production. Ces données nourrissent à la fois la documentation des œuvres et les archives de l'exposition. Et elles sont structurées pour être exploitables : pour la diffusion, pour la recherche, pour les institutions partenaires. 

Certains musées ont déjà commencé à appliquer une couche de web sémantique à leurs collections en ligne. **Mais le travail est immense** - et c’est aussi ce qui le rend passionnant ! 

----

Slides 20 

Mais des angles morts demeurent. Voici une fiche de la plateforme GRASAC : un sac bandoulier ani shi naa bé du XIXe siècle, conservé au Pitt Rivers Museum. 

Cara Krmpotich et le groupe GRASAC ont documenté les objets autochtones des Grands Lacs conservés dans des musées canadiens et britanniques. Ces objets ne sont pas des artefacts à classer. Ce sont des parents à introduire. Leur plateforme ne propose pas de description, mais une introduction : l'objet "réside actuellement dans un musée", avec mention de la saisonnalité, des relations de parenté, de l'histoire vivante. 

Aucun de nos schémas — ni CIDOC-CRM, ni LMRoo — ne prévoit ce régime d'existence. J'explore la possibilité de construire une méta-ontologie qui n'imposerait pas un régime de description unique, mais permettrait à plusieurs régimes de coexister. qui permettrait aussi d'accepté le droit à l'opacité de Glissant, traduit en architecture de données.

----

DIAPO 21 — EXPOSITION-OEUVRE — Philippe Parreno, LMRoo 

Cela permettrait aussi pour les oeuvres variables de leur conféré différent statuts. 

Ici la modélisation LMRoo de *Danny et No More Reality* en tant qu'oeuvre. Un F1 Work au sommet. Deux F2 Expressions : version 2021-22, version 2023-24. Chaque expression contient deux F3 Manifestations — Danny et No More Reality — qui déploient leurs F5 Items respectifs. 

Ce que ce schéma rend visible : Pound, Moquette, Lilies sont des items qui persistent d'une version à l'autre. Iceman et Miroir apparaissent en 2023-24. Film 1 existe dans les deux versions, Film 2 et Film 3 seulement dans la seconde. **L'œuvre est la même. Mais chaque version est documentable séparément**, avec ses propres items, ses propres états, ses propres événements. 

---

DIAPO 22 — ÉVÉNEMENT — Philippe Parreno, CIDOC-CRM 

Et voici la couche événementielle, en CIDOC-CRM. 

L'exposition devient un Evenement (a vrai dire une activité E7 Activity). Il a eu lieu à LUMA Arles. Il s'est tenu du 15 juin 2021 au 30 septembre 2022. Il a été porté par Philippe Parreno en tant que commissaire. Et il est lié à des E73 Information Objects : le catalogue, les contrats, les photographies. 

C'est ici que LMRoo et CIDOC-CRM se rejoignent. La chaîne conceptuelle de LMRoo — l'œuvre, ses versions, ses items — est reliée à la chaîne événementielle de CIDOC-CRM — l'exposition, ses dates, ses acteurs, ses documents. 

Les informations ne sont pas répetées, les deux ontologies se complètent sans se remplacer.

---

**[Slide 16 : CONCLUSION — Pourquoi ce pont est-il si difficile à construire ?]** 

Si l'œuvre variable est moins un objet qu'un processus, alors sa documentation est moins un inventaire qu'une **cartographie en mouvement**. 

Il y a beaucoup de travaux en ce moment sur l'utilisation de l'IA pour documenter les collections. C'est sérieux et prometteur. Mais méfiez-vous des solutions miracles. Il n'en existe pas, pas même celles que je vous présente. L'IA peut accélérer l'accumulation. **Elle ne remplace pas le travail d'articulation.** 

Ce travail, c'est un jugement situé, une expertise contextuelle, une responsabilité éthique envers les œuvres et leurs communautés. C'est un travail humain. 

Il existe, dans nos institutions, des gens formés précisément pour faire ce pont entre les informaticiens et les praticiens. Des ingénieurs de recherche, des spécialistes en humanités numériques. On le voit avec l'axe 4 du CIECO. Ce pont fonctionne déjà dans les bibliothèques, les archives, l'archéologie, les cinémathèques. 

**Alors pourquoi est-il si difficile à construire dans nos musées ?** 

---

**[Slide 17 : Merci]** 

*(Sourire. Ton plus léger.)* Si cette question vous intrigue, **parlons-en**. 

Mon adresse est là. Et si vous voulez voir le prototype dont je vous ai parlé, **je serai ravie de vous le montrer**. 

Tout mon travail est en **licence libre**, parce que je crois à l'open science et à la co-construction. 

**Merci.** 







La solution pour decrire existe depuis des années. 

D'un point de vue de la description TOUTES les oeuvres sont variables.  

