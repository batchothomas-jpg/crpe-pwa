export const geographieComplete = {
  matiere: "Géographie",
  chapitre: "Géographie – Espaces, territoires et développement durable",
   quizzes: [
    { id: "geographie-habite", label: "Habiter les espaces" },
    { id: "geographie-monde", label: "Le monde" },
    { id: "geographie-reperes", label: "Repères géographiques" },
    { id: "geographie-territoires", label: "Territoires français" }
  ],

  
  sousChapitres: [

    /* =========================
       SE REPÉRER DANS L’ESPACE
    ========================= */

    {
      id: "geo-1",
      titre: "Se repérer dans l’espace",

      contenu: `
<h3>🧠 À retenir</h3>
<p>
La géographie étudie les espaces
et la manière dont les humains les organisent.
</p>

<h3>📘 Explication simple</h3>
<p>
Pour se repérer, on utilise :
</p>
<ul>
  <li>des plans</li>
  <li>des cartes</li>
  <li>des repères spatiaux</li>
</ul>

<p>
Les points cardinaux sont :
</p>
<ul>
  <li>Nord</li>
  <li>Sud</li>
  <li>Est</li>
  <li>Ouest</li>
</ul>

<h3>🧒 Erreurs fréquentes des élèves</h3>
<ul>
  <li>Confondre droite/gauche et est/ouest</li>
</ul>

<h3>🧑‍🏫 Point didactique</h3>
<p>
Commencer par des espaces connus
avant d’élargir l’échelle.
</p>

<h3>🎯 Attendu CRPE</h3>
<p>
Le jury attend une progression des échelles
cohérente et réfléchie.
</p>
`
    },

    /* =========================
       CARTES ET PAYSAGES
    ========================= */

    {
      id: "geo-2",
      titre: "Lire une carte et un paysage",

      contenu: `
<h3>🧠 À retenir</h3>
<p>
Une carte est une représentation simplifiée
d’un espace réel.
</p>

<h3>📘 Explication</h3>
<p>
Une carte comporte :
</p>
<ul>
  <li>un titre</li>
  <li>une légende</li>
  <li>des symboles</li>
</ul>

<p>
Un paysage est ce que l’on voit sur un territoire.
</p>

<h3>🧒 Erreurs fréquentes</h3>
<ul>
  <li>Lire une carte sans la légende</li>
</ul>

<h3>🧑‍🏫 Didactique</h3>
<p>
Apprendre aux élèves à décrire
avant d’interpréter.
</p>

<h3>🎯 CRPE</h3>
<p>
Le jury valorise l’analyse rigoureuse des documents.
</p>
`
    },

    /* =========================
       LES ESPACES DE VIE
    ========================= */

    {
      id: "geo-3",
      titre: "Les espaces de vie",

      contenu: `
<h3>🧠 À retenir</h3>
<p>
Les espaces de vie sont les lieux
où les humains vivent et se déplacent.
</p>

<h3>📘 Explication</h3>
<p>
Exemples d’espaces de vie :
</p>
<ul>
  <li>ville</li>
  <li>campagne</li>
  <li>littoral</li>
  <li>montagne</li>
</ul>

<p>
Chaque espace a des fonctions spécifiques.
</p>

<h3>🧒 Erreurs fréquentes</h3>
<ul>
  <li>Penser qu’un espace a une seule fonction</li>
</ul>

<h3>🧑‍🏫 Didactique</h3>
<p>
Comparer différents espaces
pour faire ressortir les différences.
</p>

<h3>🎯 CRPE</h3>
<p>
Le jury attend une compréhension
des dynamiques spatiales.
</p>
`
    },

    /* =========================
       LA FRANCE
    ========================= */

    {
      id: "geo-4",
      titre: "La France et ses territoires",

      contenu: `
<h3>🧠 À retenir</h3>
<p>
La France est organisée en plusieurs niveaux de territoires.
</p>

<h3>📘 Explication</h3>
<p>
On distingue :
</p>
<ul>
  <li>la commune</li>
  <li>le département</li>
  <li>la région</li>
</ul>

<p>
La France comprend aussi des territoires d’outre-mer.
</p>

<h3>🧒 Erreurs fréquentes</h3>
<ul>
  <li>Confondre région et département</li>
</ul>

<h3>🧑‍🏫 Didactique</h3>
<p>
Travailler à partir de cartes administratives.
</p>

<h3>🎯 CRPE</h3>
<p>
Le jury attend des repères spatiaux précis.
</p>
`
    },

    /* =========================
       L’EUROPE ET LE MONDE
    ========================= */

    {
      id: "geo-5",
      titre: "L’Europe et le monde",

      contenu: `
<h3>🧠 À retenir</h3>
<p>
La France fait partie de l’Europe et du monde.
</p>

<h3>📘 Explication</h3>
<p>
L’Europe est un continent
composé de plusieurs États.
</p>

<p>
Les échanges entre les pays sont nombreux :
</p>
<ul>
  <li>échanges commerciaux</li>
  <li>échanges culturels</li>
</ul>

<h3>🧒 Erreurs fréquentes</h3>
<ul>
  <li>Confondre Europe et Union européenne</li>
</ul>

<h3>🧑‍🏫 Didactique</h3>
<p>
Situer les pays sur des cartes simples.
</p>

<h3>🎯 CRPE</h3>
<p>
Le jury valorise la capacité à changer d’échelle.
</p>
`
    },

    /* =========================
       DÉVELOPPEMENT DURABLE
    ========================= */

    {
      id: "geo-6",
      titre: "Développement durable et territoires",

      contenu: `
<h3>🧠 À retenir</h3>
<p>
Le développement durable vise
à répondre aux besoins actuels
sans compromettre l’avenir.
</p>

<h3>📘 Explication</h3>
<p>
Il repose sur trois piliers :
</p>
<ul>
  <li>économique</li>
  <li>social</li>
  <li>environnemental</li>
</ul>

<p>
Les territoires doivent être aménagés durablement.
</p>

<h3>🧒 Erreurs fréquentes</h3>
<ul>
  <li>Réduire le développement durable à l’écologie</li>
</ul>

<h3>🧑‍🏫 Didactique</h3>
<p>
Relier les notions à des projets concrets locaux.
</p>

<h3>🎯 CRPE</h3>
<p>
Le jury attend une approche équilibrée et réaliste.
</p>
`
    },

    /* =========================
       MÉTHODE ET ANALYSE CRPE
    ========================= */

    {
      id: "geo-7",
      titre: "Méthode géographique et analyse CRPE",

      contenu: `
<h3>🧠 À retenir</h3>
<p>
La géographie s’appuie sur des documents variés.
</p>

<h3>📘 Explication</h3>
<p>
Documents utilisés :
</p>
<ul>
  <li>cartes</li>
  <li>photographies</li>
  <li>schémas</li>
</ul>

<p>
On analyse toujours le document avant de conclure.
</p>

<h3>🧒 Erreurs fréquentes</h3>
<ul>
  <li>Donner une réponse sans appui documentaire</li>
</ul>

<h3>🧑‍🏫 Didactique</h3>
<p>
Apprendre aux élèves à décrire,
localiser et expliquer.
</p>

<h3>🎯 CRPE</h3>
<p>
Le jury attend une posture d’enseignant
capable de guider l’analyse.
</p>
`
    }

  ]
};

export default geographieComplete;