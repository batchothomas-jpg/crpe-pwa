export const histoireComplete = {
  matiere: "Histoire",
  chapitre: "Histoire – Du temps historique à nos jours",
   quizzes: [
    { id: "histoire-prehistoire", label: "Préhistoire" },
    { id: "histoire-antique", label: "Antiquité" },
    { id: "histoire-moyen", label: "Moyen Âge" },
    { id: "histoire-temps", label: "Temps modernes" },
    { id: "histoire-epoque", label: "Époque contemporaine" },
    { id: "histoire-reperes", label: "Repères historiques" }
  ],

  
  sousChapitres: [

    /* =========================
       BASES DU TEMPS HISTORIQUE
    ========================= */

    {
      id: "hist-1",
      titre: "Se repérer dans le temps historique",

      contenu: `
<h3>🧠 À retenir</h3>
<p>
L’histoire étudie le passé des sociétés humaines.
</p>

<h3>📘 Explication simple</h3>
<p>
Pour étudier l’histoire, on utilise :
</p>
<ul>
  <li>des dates</li>
  <li>des périodes</li>
  <li>des repères chronologiques</li>
</ul>

<p>
On distingue le temps vécu (sa vie)
du temps historique (avant notre naissance).
</p>

<h3>🧒 Erreurs fréquentes des élèves</h3>
<ul>
  <li>Confondre passé proche et passé lointain</li>
  <li>Ne pas comprendre l’ordre chronologique</li>
</ul>

<h3>🧑‍🏫 Point didactique</h3>
<p>
La frise chronologique est un outil central.
</p>

<h3>🎯 Attendu CRPE</h3>
<p>
Le jury attend une maîtrise des repères temporels
et de leur construction.
</p>
`
    },

    /* =========================
       PRÉHISTOIRE
    ========================= */

    {
      id: "hist-2",
      titre: "La Préhistoire",

      contenu: `
<h3>🧠 À retenir</h3>
<p>
La Préhistoire est la période
avant l’invention de l’écriture.
</p>

<h3>📘 Explication</h3>
<p>
Les humains préhistoriques :
</p>
<ul>
  <li>étaient chasseurs-cueilleurs</li>
  <li>utilisaient des outils en pierre</li>
  <li>vivaient en groupes</li>
</ul>

<p>
Avec le Néolithique :
</p>
<ul>
  <li>agriculture</li>
  <li>élevage</li>
  <li>sédentarisation</li>
</ul>

<h3>🧒 Erreurs fréquentes</h3>
<ul>
  <li>Penser que les hommes préhistoriques étaient primitifs</li>
</ul>

<h3>🧑‍🏫 Didactique</h3>
<p>
Travailler à partir d’objets, d’images, de traces.
</p>

<h3>🎯 CRPE</h3>
<p>
Le jury attend une vision nuancée de la Préhistoire.
</p>
`
    },

    /* =========================
       ANTIQUITÉ
    ========================= */

    {
      id: "hist-3",
      titre: "L’Antiquité",

      contenu: `
<h3>🧠 À retenir</h3>
<p>
L’Antiquité commence avec l’invention de l’écriture.
</p>

<h3>📘 Explication</h3>
<p>
On étudie notamment :
</p>
<ul>
  <li>les premières civilisations</li>
  <li>la Grèce antique</li>
  <li>l’Empire romain</li>
</ul>

<p>
Rome a laissé des traces durables :
</p>
<ul>
  <li>routes</li>
  <li>villes</li>
  <li>lois</li>
</ul>

<h3>🧒 Erreurs fréquentes</h3>
<ul>
  <li>Confondre Grecs et Romains</li>
</ul>

<h3>🧑‍🏫 Didactique</h3>
<p>
Mettre en lien monuments, textes et modes de vie.
</p>

<h3>🎯 CRPE</h3>
<p>
Le jury attend une compréhension des héritages antiques.
</p>
`
    },

    /* =========================
       MOYEN ÂGE
    ========================= */

    {
      id: "hist-4",
      titre: "Le Moyen Âge",

      contenu: `
<h3>🧠 À retenir</h3>
<p>
Le Moyen Âge s’étend du Ve au XVe siècle.
</p>

<h3>📘 Explication</h3>
<p>
La société médiévale est organisée autour :
</p>
<ul>
  <li>des seigneurs</li>
  <li>des paysans</li>
  <li>de l’Église</li>
</ul>

<p>
Les châteaux forts protègent les territoires.
</p>

<h3>🧒 Erreurs fréquentes</h3>
<ul>
  <li>Penser que le Moyen Âge est une période sombre</li>
</ul>

<h3>🧑‍🏫 Didactique</h3>
<p>
Travailler sur des documents variés :
images, récits, objets.
</p>

<h3>🎯 CRPE</h3>
<p>
Le jury valorise une vision équilibrée du Moyen Âge.
</p>
`
    },

    /* =========================
       TEMPS MODERNES
    ========================= */

    {
      id: "hist-5",
      titre: "Les Temps modernes",

      contenu: `
<h3>🧠 À retenir</h3>
<p>
Les Temps modernes vont du XVe au XVIIIe siècle.
</p>

<h3>📘 Explication</h3>
<p>
Cette période est marquée par :
</p>
<ul>
  <li>les grandes découvertes</li>
  <li>la Renaissance</li>
  <li>le renforcement du pouvoir royal</li>
</ul>

<p>
Le roi concentre le pouvoir.
</p>

<h3>🧒 Erreurs fréquentes</h3>
<ul>
  <li>Confondre Renaissance et Révolution</li>
</ul>

<h3>🧑‍🏫 Didactique</h3>
<p>
Utiliser des portraits, cartes et œuvres d’art.
</p>

<h3>🎯 CRPE</h3>
<p>
Le jury attend une compréhension des changements politiques et culturels.
</p>
`
    },

    /* =========================
       RÉVOLUTION ET XIXe SIÈCLE
    ========================= */

    {
      id: "hist-6",
      titre: "La Révolution française et le XIXe siècle",

      contenu: `
<h3>🧠 À retenir</h3>
<p>
La Révolution française transforme profondément la société.
</p>

<h3>📘 Explication</h3>
<p>
Principes fondamentaux :
</p>
<ul>
  <li>liberté</li>
  <li>égalité</li>
  <li>souveraineté nationale</li>
</ul>

<p>
Le XIXe siècle voit :
</p>
<ul>
  <li>l’industrialisation</li>
  <li>des transformations sociales</li>
</ul>

<h3>🧒 Erreurs fréquentes</h3>
<ul>
  <li>Réduire la Révolution à un événement violent</li>
</ul>

<h3>🧑‍🏫 Didactique</h3>
<p>
Travailler sur des textes fondateurs
et des situations concrètes.
</p>

<h3>🎯 CRPE</h3>
<p>
Le jury attend une compréhension des valeurs républicaines.
</p>
`
    },

    /* =========================
       XXe SIÈCLE ET MONDE ACTUEL
    ========================= */

    {
      id: "hist-7",
      titre: "Le XXe siècle et le monde actuel",

      contenu: `
<h3>🧠 À retenir</h3>
<p>
Le XXe siècle est marqué par de grands bouleversements.
</p>

<h3>📘 Explication</h3>
<p>
Événements majeurs :
</p>
<ul>
  <li>Première Guerre mondiale</li>
  <li>Seconde Guerre mondiale</li>
  <li>construction européenne</li>
</ul>

<p>
Ces événements ont marqué durablement les sociétés.
</p>

<h3>🧒 Erreurs fréquentes</h3>
<ul>
  <li>Confondre les deux guerres mondiales</li>
</ul>

<h3>🧑‍🏫 Didactique</h3>
<p>
Aborder ces sujets avec rigueur et sensibilité.
</p>

<h3>🎯 CRPE</h3>
<p>
Le jury est attentif à la transmission de la mémoire.
</p>
`
    },

    /* =========================
       MÉTHODE ET ANALYSE CRPE
    ========================= */

    {
      id: "hist-8",
      titre: "Méthode historique et analyse CRPE",

      contenu: `
<h3>🧠 À retenir</h3>
<p>
L’histoire s’appuie sur des sources.
</p>

<h3>📘 Explication</h3>
<p>
Sources historiques :
</p>
<ul>
  <li>textes</li>
  <li>objets</li>
  <li>images</li>
</ul>

<p>
On croise les sources pour comprendre le passé.
</p>

<h3>🧒 Erreurs fréquentes</h3>
<ul>
  <li>Prendre un document pour la vérité absolue</li>
</ul>

<h3>🧑‍🏫 Didactique</h3>
<p>
Apprendre aux élèves à questionner les documents.
</p>

<h3>🎯 CRPE</h3>
<p>
Le jury attend une posture critique et professionnelle.
</p>
`
    }

  ]
};

export default histoireComplete;