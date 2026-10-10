
---
title: "Structurer la donnée de l'activation de l'exposition"
date: "2026-07-29"
updated: "2026-07-29"
categories:
  - ontology
  - activation
  - itinerance
  - lmroo
  - cidoc-crm
  - exhibition
  - moma
  - wikidata
  - feux-pâles
excerpt: ""

---

Le moma propose pour ses exposition itinerente une modelisation parent (concept) - enfant (manifestation) dans wikidata. 

Je propose qu'on puisse etre un peu plus complet

```mermaid

timeline

title Selection of events in Feux pâles biography

section 1990-1991

    Feux Pâles : Display et catalogue - CapcMusée

    Un cabinet d'amateur : Oeuvre - Galerie Burrus

section 2014

    L'Ombre du jaseur : Display - MAMCO

section 2017

    Conservation Study : Documentation - Zoë Renaudie

section 2025

    Display Study : Documentation - Ouvroir

```

Ce que j'imagine moi

F1 WORK :  concept

F2 Expression : serait le projet d'activation, un evenement : expo originale, Ombre du jaseur, cabinet d'amateur

F3 Manifestation : ce serait ce qui se manifeste : un accorchage, un catalogue, une oeuvre

F5 Item : la documentation constitutive : le plan, la maquette, la photo, l'edition de l'oeuvre, les oeuvres exposées ? ou les display ? 

**Feux pâles** fits comfortably here as the Work, with each activation descending as an Expression, itself carrying a Manifestation that is a Set. But this neatness has a condition: you have to accept that **Feux pâles** is a Work in Goodman’s sense, and that its Expressions are its activations, whether or not Thomas directed them himself. If you accept that, the hierarchy holds. If you refuse it, the whole mapping collapses.

@todo reprendre definition de lmroo pour voir ce qui fonctionne et ce qui fonctionne pas. 

Exemple de Feux pales essai pour que ca rentre dans lrmoo

```mermaid

graph LR

classDef work fill:#fddc34,stroke:#333;
classDef expression fill:#fddc34,stroke:#333;
classDef manifestation fill:#fddc34,stroke:#333;
classDef item fill:#8b6815,stroke:#333;
direction LR

paleFires["Feux Pâles\n(F1_Work)"]:::work

expr1["Feux Pâles Scenography (1990)\n(F2_Expression)"]:::expression

expr2["Concept of L'Ombre du Jaseur\n(F2_Expression)"]:::expression

expr3["Plan/Structure of Cabinet d’amateur\n(F2_Expression)"]:::expression

expr4["Text of the Conservation Study\n(F2_Expression)"]:::expression

manif1("Specifications of the Feux Pâles Display\n(F3_Manifestation)"):::manifestation

manif2("Mockup/ISBN of the Catalog\n(F3_Manifestation)"):::manifestation

manif3("Specifications of L'Ombre du Jaseur\n(F3_Manifestation)"):::manifestation

manif5("Model of the Study Report\n(F3_Manifestation)"):::manifestation

manif6("Specifications of Edition 1/2\n(F3_Manifestation)"):::manifestation

item1["The Physical Installation in capc\n(F5_Item)"]:::item

item2["The Physical Installation in MAMCO\n(F5_Item)"]:::item

item5["The Signed Physical Copy\n(F5_Item)"]:::item

item6["The Paper Document of the Report\n(F5_Item)"]:::item

item7["The Physical Photographic Print\n(F5_Item)"]:::item

paleFires -->|lrmoo:R3_is realised in| expr1

paleFires -->|lrmoo:R3_is realised in| expr2

paleFires -->|lrmoo:R3_is realised in| expr3

paleFires -->|lrmoo:R3_is realised in| expr4

expr1 -->|lrmoo:R4_is embodied in| manif1

expr1 -->|lrmoo:R4_is embodied in| manif2

expr2 -->|lrmoo:R4_is embodied in| manif3

expr4 -->|lrmoo:R4_is embodied in| manif5

expr3 -->|lrmoo:R4_is embodied in| manif6

manif1 -->|lrmoo:R7 is exemplified by| item1

manif2 -->|lrmoo:R7 is exemplified by| item5

manif3 -->|lrmoo:R7 is exemplified by| item2

manif5 -->|lrmoo:R7 is exemplified by| item6

manif6 -->|lrmoo:R7 is exemplified by| item7

linkStyle default stroke-width:3px;

```

<figcaption>@prefix crm:     <"http://www.cidoc-crm.org/cidoc-crm/">   </figcaption>

<figcaption>@prefix la: <"https://linked.art/ns/terms/">   </figcaption>

<figcaption>@prefix lrmoo:   <"http://iflastandards.info/ns/lrm/lrmoo/"> .   </figcaption>

</figure>


la réparatition entre ce qui serait une expression, manifestation, item est discutable. Pour moi le catalogue serait soit une expression soit une manifestation. Dans les définitions de FRBR les items étaient plutôt destinés aux exemplaires bibliographiques qui pouvaient porter des marques de propriétaires, des annotations, etc.Mais ce dispositif était initialement pour les œuvres multiples et tu pourrais en avoir beosin pour les catalogues justement.

Le problème c'est que le concept du catalogue est pour moi une des manifestions de l'expression de l'exposition 

Ajout de composants comme docam

C'est trop rigide parce que moi je veux pouvoir déclarer qu'un parent est a la fois un enfant donc si on sort de ca mais avec une inspiration de lrmoo :

```mermaid

graph LR

classDef work fill:#fddc34,stroke:#333;
classDef expression fill:#fddc34,stroke:#333;
classDef manifestation fill:#fddc34,stroke:#333;
classDef item fill:#8b6815,stroke:#333;
classDef composant fill:#8b6815,stroke:#333;
direction LR

paleFires["Feux Pâles\n(Concept)"]:::work

expr1["Feux Pâles(1990)\n(Activation-Expression)"]:::expression

expr2["L'Ombre du Jaseur\n(Activation-Expression)"]:::expression

expr3["Cabinet d’amateur\n(Activation-Expression)"]:::expression

expr4["Étude de conservation\n(Activation-Expression)"]:::expression

manif1("Display de Feux Pâles (un la:set)\n(Manifestation)"):::manifestation

manif2("Catalogue (aussi un Concept donc la modélisation reprend ici au niveau 1)\n(Manifestation)"):::manifestation

manif3("Display Ombre du Jaseur (un la:set)\n(Manifestation)"):::manifestation

manif5("Rapport de conservation\n(Manifestation)"):::manifestation

manif6("Production de l'oeuvre\n(Manifestation)"):::manifestation

item1["archive capc type trace\n(Item)"]:::item

item2["archive MAMCO type trace\n(Item)"]:::item

item3["v1 accrochage FP\n(Item)"]:::item

item4["v2 accrochage FP\n(Item)"]:::item

item5["v1 accrochage OJ\n(Item)"]:::item

item6["exemplaire archive capc\n(Item)"]:::item

item7["Edition 1/2\n(Item)"]:::item

item8["Edition 2/2\n(Item)"]:::item

composant1["oeuvre1\n(Composant)"]:::composant

composant2["oeuvre2\n(Composant)"]:::composant

composant3["oeuvre3\n(Composant)"]:::composant

composant4["oeuvre4 (peut elle même devenir un concept de niveau 1)\n(Composant)"]:::composant

paleFires -->|lrmoo:R3 is realised in| expr1

paleFires -->|lrmoo:R3 is realised in| expr2

paleFires -->|lrmoo:R3 is realised in| expr3

paleFires -->|lrmoo:R3 is realised in| expr4

expr1 -->|is embodied in| manif1

expr1 -->|is embodied in| manif2

expr2 -->|is embodied in| manif3

expr4 -->|is embodied in| manif5

expr3 -->|is embodied in| manif6

manif1 -->|is exemplified by| item1
manif1 -->|is exemplified by| item3
manif1 -->|is exemplified by| item4

manif2 -->|is exemplified by| item6

manif3 -->|is exemplified by| item2
manif3 -->|is exemplified by| item5

manif5 -->|is exemplified by| item

manif6 -->|is exemplified by| item7
manif6 -->|is exemplified by| item8

item3 -->|is composed of| composant1
item3 -->|is composed of| composant2
item3 -->|is composed of| composant2
item3 -->|is composed of| composant4

linkStyle default stroke-width:3px;

```
```mermaid
flowchart LR
    classDef work fill:#ffd23f,stroke:#333
    classDef expression fill:#9ecfff,stroke:#333
    classDef manifestation fill:#b8e986,stroke:#333
    classDef item fill:#c9a227,stroke:#333
    classDef composant fill:#e0a8c0,stroke:#333

    paleFires["Feux pâles\n(Concept, F1 Work)"]:::work

    expr1["Feux pâles 1990\n(Activation, F2 Expression)"]:::expression
    expr2["L'Ombre du jaseur 2014\n(Activation, F2 Expression)"]:::expression
    expr3["Cabinet d'amateur\n(F2 Expression)"]:::expression
    expr4["Étude de conservation\n(F2 Expression)"]:::expression

    manif1["Display Feux pâles : un la:Set\n(F3 Manifestation)"]:::manifestation
    manif2["Catalogue FR 1990 (ISBN)\n(F3, aussi œuvre de niveau 1 — cf. schéma 3)"]:::manifestation
    manif3["Display Ombre du jaseur : un la:Set\n(F3 Manifestation)"]:::manifestation
    manif5["Rapport de conservation\n(F3 Manifestation)"]:::manifestation
    manif6["Production de l'oeuvre\n(F3 Manifestation)"]:::manifestation

    item1["Archive CAPC (trace)\n(F5 Item)"]:::item
    item2["Archive MAMCO (trace)\n(F5 Item)"]:::item
    item3["v1 accrochage FP\n(trace du Set)"]:::item
    item4["v2 accrochage FP\n(trace du Set)"]:::item
    item5["v1 accrochage OJ\n(trace du Set)"]:::item
    item6["Exemplaire archive CAPC\n(F5 Item)"]:::item
    item7["Édition 1/2\n(F5 Item)"]:::item
    item8["Édition 2/2\n(F5 Item)"]:::item
    item9["Exemplaire papier du rapport\n(F5 Item)"]:::item

    composant1["oeuvre1\n(E22)"]:::composant
    composant2["oeuvre2\n(E22)"]:::composant
    composant3["oeuvre3\n(E22)"]:::composant
    composant4["oeuvre4 — peut redevenir un Concept de niveau 1\n(F1 Work)"]:::composant

    paleFires -->|lrmoo:R3 is realised in| expr1
    paleFires -->|lrmoo:R3 is realised in| expr2
    paleFires -->|lrmoo:R3 is realised in| expr3
    paleFires -->|lrmoo:R3 is realised in| expr4

    expr1 -->|lrmoo:R4i is embodied in| manif1
    expr1 -->|lrmoo:R4i is embodied in| manif2
    expr2 -->|lrmoo:R4i is embodied in| manif3
    expr4 -->|lrmoo:R4i is embodied in| manif5
    expr3 -->|lrmoo:R4i is embodied in| manif6

    manif1 -->|lrmoo:R7i is exemplified by| item1
    manif1 -->|lrmoo:R7i is exemplified by| item3
    manif1 -->|lrmoo:R7i is exemplified by| item4
    manif2 -->|lrmoo:R7i is exemplified by| item6
    manif3 -->|lrmoo:R7i is exemplified by| item2
    manif3 -->|lrmoo:R7i is exemplified by| item5
    manif5 -->|lrmoo:R7i is exemplified by| item9
    manif6 -->|lrmoo:R7i is exemplified by| item7
    manif6 -->|lrmoo:R7i is exemplified by| item8

    item3 -->|crm:P46 is composed of| composant1
    item3 -->|crm:P46 is composed of| composant2
    item3 -->|crm:P46 is composed of| composant3
    item3 -->|crm:P46 is composed of| composant4

    linkStyle default stroke-width:3px
```

Catalogue à integrer dans la modelisation

```mermaid
graph LR

classDef work fill:#fddc34,stroke:#333;

classDef expression fill:#fddc34,stroke:#333;

classDef manifestation fill:#fddc34,stroke:#333;

classDef item fill:#8b6815,stroke:#333;

direction LR

catalogpaleFires["Feux pâles : une pièce à conviction\n(F1_Work)"]:::work

catalogexpr1["texte en français\n(F2_Expression)"]:::expression

catalogexpr2["texte en anglais\n(F2_Expression)"]:::expression

catalogmanif1("Première impression FR erronée\n(F3_Manifestation)"):::manifestation

catalogmanif2("Deuxième impression FR corrigée\n(F3_Manifestation)"):::manifestation

catalogmanif3("Première impression EN\n(F3_Manifestation)"):::manifestation

catalogitem1["Copie dans les archives du capc\n(F5_Item)"]:::item

catalogitem2["The BK Copy\n(F5_Item)"]:::item

catalogpaleFires -->|lrmoo:R3_lrmoo:R3 is realised in| catalogexpr1

catalogpaleFires -->|lrmoo:R3_lrmoo:R3 is realised in| catalogexpr2

catalogexpr1 -->|lrmoo:R4_is embodied in| catalogmanif1

catalogexpr1 -->|lrmoo:R4_is embodied in| catalogmanif2

catalogexpr2 -->|lrmoo:R4_is embodied in| catalogmanif3

catalogmanif1 -->|lrmoo:R7 is exemplified by| catalogitem1

catalogmanif2 -->|lrmoo:R7 is exemplified by| catalogitem2

linkStyle default stroke-width:3px;

```


composant4["oeuvre4 (peut elle même devenir un concept de niveau 1)\n(Composant)"]:::composant a ingré dans le shéma

```mermaid

graph LR

classDef work fill:#fddc34,stroke:#333;
classDef expression fill:#fddc34,stroke:#333;
classDef manifestation fill:#fddc34,stroke:#333;
classDef item fill:#8b6815,stroke:#333;
classDef composant fill:#8b6815,stroke:#333;
direction LR

parquet["Parquet\n(Concept)"]:::work

parquetexpr1["oeuvre à acquerir\n(Expression)"]:::expression

parquetexpr2["propriété privée\n(Expression)"]:::expression

parquetmanif1("lettrage v1\n(Manifestation)"):::manifestation

parquetmanif2("lettrage v2\n(Manifestation)"):::manifestation

parquetitem1["trace\n(Item)"]:::item

parquetitem2["oeuvre conservée au MAMCO\n(Item)"]:::item

parquetcomposant1["parquet\n(Composant)"]:::composant

parquetcomposant2["panneau\n(Composant)"]:::composant

parquetcomposant3["photo catalogue\n(Composant)"]:::composant


parquet -->|is realised in| expr1

parquet -->|is realised in| expr2

parquetexpr1 -->|is embodied in| manif1

parquetexpr2 -->|is embodied in| manif2

parquetmanif1 -->|is exemplified by| item1
parquetmanif2 -->|is exemplified by| item2

parquetitem2 -->|is composed of| composant1
parquetitem2 -->|is composed of| composant2
parquetitem1 -->|is composed of| composant3

linkStyle default stroke-width:3px;

```

Le schéma 2 reste une arborescence ; or ce qu'on veut montrer, c'est un meshwork : des fils qui traversent les niveaux WEMI au lieu de s'y empiler. Parquet et le Catalogue ne sont pas des sous-nœuds de Feux pâles — ce sont des lignes qui croisent la chaîne des activations en plusieurs points : le catalogue est inspiré par le concept et publié lors de l'activation 1990 ; Parquet est une œuvre-composant exposée dans l'accrochage v1, photographiée dans le catalogue, et conservée au MAMCO dans la réactivation 2014. Chaque fil redevient concept de niveau 1 à chaque croisement (récursivité).

Voila ce que je veux faire. comment exprimer ca ontologie partageable ? Qu'est ce qui pose probleme ? 
```mermaid

graph LR

classDef work fill:#fddc34,stroke:#333;
classDef expression fill:#fddc34,stroke:#333;
classDef manifestation fill:#fddc34,stroke:#333;
classDef item fill:#8b6815,stroke:#333;
classDef composant fill:#8b6815,stroke:#333;
direction LR

paleFires["Feux Pâles\n(Concept)"]:::work

expr1["Feux Pâles(1990)\n(Activation-Expression)"]:::expression

expr2["L'Ombre du Jaseur\n(Activation-Expression)"]:::expression

expr3["Cabinet d’amateur\n(Activation-Expression)"]:::expression

expr4["Étude de conservation\n(Activation-Expression)"]:::expression

manif1("Display de Feux Pâles (un la:set)\n(Manifestation)"):::manifestation

catalogpaleFires("Catalogue (aussi un Concept donc la modélisation reprend ici au niveau 1)\n(Manifestation)"):::manifestation

manif3("Display Ombre du Jaseur (un la:set)\n(Manifestation)"):::manifestation

manif5("Etude de conservation\n(Manifestation)"):::manifestation

manif6("Production de l'oeuvre\n(Manifestation)"):::manifestation

item1["archive capc type trace\n(Item)"]:::item

item2["archive MAMCO type trace\n(Item)"]:::item

item3["v1 accrochage FP\n(Item)"]:::item

item4["v2 accrochage FP\n(Item)"]:::item

item5["v1 accrochage OJ\n(Item)"]:::item

item6["Rapport\n(Item)"]:::item

item7["Edition 1/2\n(Item)"]:::item

item8["Edition 2/2\n(Item)"]:::item

composant1["oeuvre1\n(Composant)"]:::composant

composant2["oeuvre2\n(Composant)"]:::composant

composant3["oeuvre3\n(Composant)"]:::composant

parquet["oeuvre4 \n(Composant ET Work)"]:::composant

paleFires -->|is realised in| expr1

paleFires -->|is realised in| expr2

paleFires -->|is realised in| expr3

paleFires -->|is realised in| expr4

expr1 -->|is embodied in| manif1

expr1 -->|is embodied in| catalogpaleFires

expr2 -->|is embodied in| manif3

expr4 -->|is embodied in| manif5

expr3 -->|is embodied in| manif6

manif1 -->|is exemplified by| item1
manif1 -->|is exemplified by| item3
manif1 -->|is exemplified by| item4

manif3 -->|is exemplified by| item2
manif3 -->|is exemplified by| item5

manif5 -->|is exemplified by| item6

manif6 -->|is exemplified by| item7
manif6 -->|is exemplified by| item8

item3 -->|is composed of| composant1
item3 -->|is composed of| composant2
item3 -->|is composed of| composant3
item3 -->|is composed of| parquetitem1
item4 -->|is composed of| parquetitem2
item5 -->|is composed of| parquetitem2

parquet["Parquet\n(Concept)"]:::work

parquetexpr1["oeuvre à acquerir\n(Expression)"]:::expression

parquetexpr2["propriété privée\n(Expression)"]:::expression

parquetmanif1("lettrage v1\n(Manifestation)"):::manifestation

parquetmanif2("lettrage v2\n(Manifestation)"):::manifestation

parquetitem1["trace\n(Item)"]:::item

parquetitem2["oeuvre conservée au MAMCO\n(Item)"]:::item

parquetcomposant1["parquet\n(Composant)"]:::composant

parquetcomposant2["panneau\n(Composant)"]:::composant

parquetcomposant3["photo catalogue\n(Composant)"]:::composant

parquet -->|is realised in| parquetexpr1

parquet -->|is realised in| parquetexpr2

parquetexpr1 -->|is embodied in| parquetmanif1

parquetexpr2 -->|is embodied in| parquetmanif2

parquetmanif1 -->|is exemplified by| parquetitem1
parquetmanif2 -->|is exemplified by| parquetitem2

parquetitem2 -->|is composed of| parquetcomposant1
parquetitem2 -->|is composed of| parquetcomposant2
parquetitem1 -->|is composed of| parquetcomposant3

catalogpaleFires["Feux pâles : une pièce à conviction(catalog\n(Manifestation ET F1_Work)"]:::work

catalogexpr1["texte en français\n(F2_Expression)"]:::expression

catalogexpr2["texte en anglais\n(F2_Expression)"]:::expression

catalogmanif1("Première impression FR erronée\n(F3_Manifestation)"):::manifestation

catalogmanif2("Deuxième impression FR corrigée\n(F3_Manifestation)"):::manifestation

catalogmanif3("Première impression EN\n(F3_Manifestation)"):::manifestation

catalogitem1["Copie dans les archives du capc\n(F5_Item)"]:::item

catalogitem2["The BK Copy\n(F5_Item)"]:::item

catalogpaleFires -->|lrmoo:R3_lrmoo:R3 is realised in| catalogexpr1

catalogpaleFires -->|lrmoo:R3_lrmoo:R3 is realised in| catalogexpr2

catalogexpr1 -->|lrmoo:R4_is embodied in| catalogmanif1

catalogexpr1 -->|lrmoo:R4_is embodied in| catalogmanif2

catalogexpr2 -->|lrmoo:R4_is embodied in| catalogmanif3

catalogmanif1 -->|lrmoo:R7 is exemplified by| catalogitem1

catalogmanif2 -->|lrmoo:R7 is exemplified by| catalogitem2

linkStyle default stroke-width:3px;

```


Pas sur pour composant en fait. Faut il déclaré que item peut etre composé d'item ? un peu comme on fait dans display

flowchart LR
    classDef concept fill:#ffd23f,stroke:#333
    classDef activation fill:#9ecfff,stroke:#333
    classDef manifestation fill:#b8e986,stroke:#333
    classDef item fill:#c9a227,stroke:#333

    FP1990["Feux pâles 1990<br/>Activation"]:::activation
    ACC["Accrochage v1<br/>Item"]:::item
    
    CAT["Catalogue<br/>Manifestation et Concept"]:::concept
    CFR["Texte en français<br/>Activation"]:::activation
    CEN["Texte en anglais<br/>Activation"]:::activation
    CI1["Première impression FR, erronée<br/>Manifestation"]:::manifestation
    CI2["Deuxième impression FR, corrigée<br/>Manifestation"]:::manifestation
    CI3["Première impression EN<br/>Manifestation"]:::manifestation
    
    PQ["Propriété privée, 1990<br/>Concept"]:::concept
    PA["Œuvre à acquérir<br/>Activation, obsolète"]:::activation
    PB["Propriété privée<br/>Activation, conservée"]:::activation
    PL1["Lettrage v1<br/>Manifestation"]:::manifestation
    PL2["Lettrage v2<br/>Manifestation"]:::manifestation
    PT["Trace<br/>Item"]:::item
    PM["Œuvre conservée au MAMCO<br/>Item"]:::item
    PC1["Propriété privée, 1990<br/>Composant"]:::item
    PC2["Panneau<br/>Composant"]:::item
    PC3["Photo du catalogue<br/>Composant"]:::item
    
    FP1990 -->|ex:hasManifestation| CAT
    CFR -->|ex:activates| CAT
    CEN -->|ex:activates| CAT
    CFR -->|ex:hasManifestation| CI1
    CFR -->|ex:hasManifestation| CI2
    CEN -->|ex:hasManifestation| CI3
    
    PA -->|ex:activates| PQ
    PB -->|ex:activates| PQ
    PA -->|ex:hasManifestation| PL1
    PB -->|ex:hasManifestation| PL2
    PL1 -->|ex:hasItem| PT
    PL2 -->|ex:hasItem| PM
    PM -->|ex:hasComponent| PC1
    PM -->|ex:hasComponent| PC2
    PT -->|ex:hasComponent| PC3
    
    ACC -->|ex:hasComponent| PM

## Exprimer le modèle dans une ontologie partageable

Pour que ce modèle circule, plusieurs choix de forme s'imposent.

- **Un profil d'application.** Un espace de noms propre dont les classes et propriétés sont des sous-classes et sous-propriétés de CIDOC-CRM, sans rien redéfinir. Une activation est ainsi une sous-classe de `crm:E7_Activity`, et `ex:hasComponent` une sous-propriété de `crm:P46_is_composed_of`.
- **Des vocabulaires SKOS.** Les types d'activation, de manifestation et d'item, ainsi que les statuts (obsolète, conservée), sont des schémas de concepts, reliés par `crm:P2_has_type`.
- **Pas de disjonctions.** Le catalogue est à la fois une manifestation et un concept. Si l'ontologie déclarait ces classes disjointes, un raisonneur OWL y verrait une incohérence. Les contraintes (absence de cycle de composition, cohérence des dates) sont donc exprimées en SHACL.
- **Des questions de compétence.** Par exemple : où **Propriété privée**, 1990* a-t-il été exposé ? Quelles activations sont obsolètes ? Quels catalogues documentent l'activation de 1990 ?

```turtle
@prefix ex:    <https://example.org/display/ns#> .
@prefix exd:   <https://example.org/display/data/> .
@prefix exv:   <https://example.org/display/voc/> .
@prefix crm:   <http://www.cidoc-crm.org/cidoc-crm/> .
@prefix lrmoo: <http://iflastandards.info/ns/lrm/lrmoo/> .
@prefix skos:  <http://www.w3.org/2004/02/skos/core#> .

ex:Activation rdfs:subClassOf ex:Activable, crm:E7_Activity ;
    skos:closeMatch lrmoo:F2_Expression .

ex:hasComponent rdfs:subPropertyOf crm:P46_is_composed_of ;
    rdfs:domain ex:Item ; rdfs:range ex:Item .

exd:ProprietePrivee, 1990ActivationB a ex:Activation ;
    crm:P2_has_type exv:production-oeuvre ;
    ex:activates exd:ProprietePrivee, 1990 ;
    ex:status exv:conservee ;
    ex:hasManifestation exd:ProprietePrivee, 1990LettrageV2 .

exd:ProprietePrivee, 1990LettrageV2 ex:hasItem exd:ProprietePrivee, 1990MAMCO .
exd:AccrochageV1 ex:hasComponent exd:ProprietePrivee, 1990MAMCO .
```

La question « où *Propriété privée, 1990* est-il exposé ? » se résout alors par un chemin : accrochage, composant, item de *Propriété privée, 1990*, manifestation, activation.

```sparql
SELECT ?accrochage WHERE {
  ?accrochage ex:hasComponent+ ?p .
  ?a ex:activates exd:Propriété privée, 1990 ;
     ex:hasManifestation/ex:hasItem ?p .
}
```

## Compatibilité avec le modèle du MoMA

Le modèle du MoMA devient une projection du mien, non son équivalent. Le concept de l'exposition *Feux pâles* correspond au parent, les manifestations correspondent aux enfants, et les activations n'ont pas de contrepartie directe : elles forment la couche supplémentaire. Une requête de construction suffit à produire le lien parent-enfant sans les activations.

```sparql
CONSTRUCT { ?concept ex:parentOf ?manifestation }
WHERE {
  ?activation ex:activates ?concept ;
              ex:hasManifestation ?manifestation .
}
```



## Questions ouvertes

- Le catalogue est à la fois une manifestation et un concept, est ce que je peux déclarer les deux sans avoir de contradiction ? 
- Le modèle du MoMA devient une projection du mien, non son équivalent. Le concept de l'exposition *Feux pâles* correspond au parent, les manifestations correspondent aux enfants, et les activations n'ont pas de contrepartie directe : elles forment la couche supplémentaire. Comment faire en sorte que le modèle reste  rétrocompatible avec Wikidata tout en exprimant ce que celui-ci ne dit pas ? 
- Pour *Propriété privée, 1990*, l'état obsolète n'a plus d'objet, seulement des traces. Comment déclarer cette absence plutôt que de simplement l'omettre ? **cf les lacunes** 
- Est-ce que les activations, expressions d'une œuvre au sens de Goodman, peuvent être traités comme des activités (`crm:E7_Activity`) ? 

- **Display et `la:Set`.** Un Set de Linked Art est de nature physique, alors que F3 est informationnel. Le typage du display reste à trancher.