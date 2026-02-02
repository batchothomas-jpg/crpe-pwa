export const mathsStats = {
  matiere: "Mathématiques",
  chapitre: "Statistiques et probabilités",
  quizId:"maths-proportionnalite",
  quizId: "maths-statistique",
  sousChapitres: [

    /* =======================
       STATISTIQUES
    ======================= */

    {
      id: "maths-stats-1",
      titre: "Collecter des données",

      contenu: `
<h3>🧠 À retenir</h3>
<p>
Les statistiques servent à <strong>collecter, organiser et interpréter</strong> des données.
</p>

<h3>📘 Explication simple</h3>
<p>
Une donnée est une information recueillie.
</p>

<p>
Exemples de données :
</p>
<ul>
  <li>couleur préférée des élèves</li>
  <li>nombre de frères et sœurs</li>
  <li>temps de trajet pour venir à l’école</li>
</ul>

<p>
La collecte peut se faire par :
</p>
<ul>
  <li>questionnaire</li>
  <li>sondage</li>
  <li>observation</li>
</ul>

<h3>🧒 Erreurs fréquentes des élèves</h3>
<ul>
  <li>Ne pas comprendre ce qu’est une donnée</li>
  <li>Mélanger plusieurs questions dans un même tableau</li>
</ul>

<h3>🧑‍🏫 Point didactique</h3>
<p>
Il est essentiel que les élèves participent à la collecte des données.
</p>

<h3>🎯 Attendu CRPE</h3>
<p>
Le jury attend que tu montres que les statistiques
sont liées à des situations réelles.
</p>
`
    },

    {
      id: "maths-stats-2",
      titre: "Organiser des données : tableaux et graphiques",

      contenu: `
<h3>🧠 À retenir</h3>
<p>
Les tableaux et graphiques servent à rendre les données lisibles.
</p>

<h3>📘 Explication</h3>
<p>
On peut représenter des données avec :
</p>
<ul>
  <li>tableaux</li>
  <li>diagrammes en barres</li>
  <li>diagrammes circulaires (au cycle 3)</li>
</ul>

<p>
Chaque graphique doit avoir :
</p>
<ul>
  <li>un titre</li>
  <li>des axes lisibles</li>
  <li>des unités claires</li>
</ul>

<h3>🧒 Erreurs fréquentes</h3>
<ul>
  <li>Lire un graphique sans tenir compte des axes</li>
  <li>Confondre hauteur et valeur</li>
</ul>

<h3>🧑‍🏫 Didactique</h3>
<p>
Faire construire des graphiques à partir de données simples.
</p>

<h3>🎯 CRPE</h3>
<p>
Le jury apprécie la capacité à analyser et interpréter un graphique.
</p>
`
    },

    {
      id: "maths-stats-3",
      titre: "Lire et interpréter des données",

      contenu: `
<h3>🧠 À retenir</h3>
<p>
Lire un graphique, ce n’est pas seulement lire des nombres.
</p>

<h3>📘 Explication</h3>
<p>
Interpréter des données consiste à :
</p>
<ul>
  <li>comparer des valeurs</li>
  <li>repérer des tendances</li>
  <li>répondre à des questions</li>
</ul>

<p>
Les statistiques servent à <strong>prendre des décisions</strong>
ou à <strong>comprendre une situation</strong>.
</p>

<h3>🧒 Erreurs fréquentes</h3>
<ul>
  <li>Donner une réponse sans justification</li>
  <li>Lire uniquement la valeur la plus grande</li>
</ul>

<h3>🧑‍🏫 Didactique</h3>
<p>
Toujours demander aux élèves d’expliquer
comment ils ont lu le graphique.
</p>

<h3>🎯 CRPE</h3>
<p>
Le jury valorise l’argumentation et la justification.
</p>
`
    },

    /* =======================
       PROBABILITÉS
    ======================= */

    {
      id: "maths-proba-1",
      titre: "Découvrir le hasard",

      contenu: `
<h3>🧠 À retenir</h3>
<p>
Une situation de hasard a plusieurs issues possibles,
et on ne peut pas prévoir laquelle va se produire.
</p>

<h3>📘 Explication simple</h3>
<p>
Exemples de situations aléatoires :
</p>
<ul>
  <li>lancer un dé</li>
  <li>tirer une carte</li>
  <li>pile ou face</li>
</ul>

<p>
Le résultat dépend du hasard.
</p>

<h3>🧒 Erreurs fréquentes des élèves</h3>
<ul>
  <li>Penser que le hasard peut être contrôlé</li>
  <li>Croire qu’un événement est « dû »</li>
</ul>

<h3>🧑‍🏫 Didactique</h3>
<p>
Faire expérimenter plusieurs fois une même situation
pour observer la variabilité.
</p>

<h3>🎯 CRPE</h3>
<p>
Le jury attend une approche intuitive et progressive du hasard.
</p>
`
    },

    {
      id: "maths-proba-2",
      titre: "Événements possibles et impossibles",

      contenu: `
<h3>🧠 À retenir</h3>
<p>
Un événement peut être :
</p>
<ul>
  <li>possible</li>
  <li>impossible</li>
  <li>certain</li>
</ul>

<h3>📘 Explication</h3>
<p>
Exemple :
</p>
<p>
Sur un dé à 6 faces :
</p>
<ul>
  <li>obtenir 7 ➜ impossible</li>
  <li>obtenir un nombre entre 1 et 6 ➜ certain</li>
</ul>

<h3>🧒 Erreurs fréquentes</h3>
<ul>
  <li>Confondre possible et certain</li>
</ul>

<h3>🧑‍🏫 Didactique</h3>
<p>
Faire verbaliser les élèves :
« Pourquoi c’est possible ? Pourquoi c’est impossible ? »
</p>

<h3>🎯 CRPE</h3>
<p>
Le jury attend une justification claire des réponses.
</p>
`
    },

    {
      id: "maths-proba-3",
      titre: "Approche intuitive des probabilités",

      contenu: `
<h3>🧠 À retenir</h3>
<p>
Les probabilités permettent d’estimer les chances d’un événement.
</p>

<h3>📘 Explication</h3>
<p>
À l’école primaire, on travaille surtout :
</p>
<ul>
  <li>la comparaison des chances</li>
  <li>le langage des probabilités (plus probable, moins probable)</li>
</ul>

<p>
On évite les calculs complexes.
</p>

<h3>🧒 Erreurs fréquentes</h3>
<ul>
  <li>Utiliser des fractions sans comprendre</li>
</ul>

<h3>🧑‍🏫 Didactique</h3>
<p>
Privilégier le vocabulaire et l’expérimentation.
</p>

<h3>🎯 CRPE</h3>
<p>
Le jury attend une approche adaptée au niveau des élèves.
</p>
`
    }

  ]
};


export default mathsStats;