export const quiz = {
  id: "maths-geometrie",
  matiere: "Mathématiques",
  chapitre: "Géométrie",

  questions: [

    {
      question: "Qu’est-ce qu’un segment ?",
      choices: [
        "Une droite infinie",
        "Une portion de droite limitée par deux points",
        "Une ligne courbe",
        "Un angle"
      ],
      correct: 1,
      solution_steps: [
        "Un segment est une partie de droite.",
        "Il est limité par deux points appelés extrémités."
      ],
      frequent_errors: [
        "Confondre segment et droite"
      ],
      jury_logic: "Le jury attend une définition précise des objets géométriques."
    },

    {
      question: "Combien de côtés possède un triangle ?",
      choices: ["2", "3", "4", "5"],
      correct: 1,
      solution_steps: [
        "Un triangle est un polygone à trois côtés."
      ],
      frequent_errors: [
        "Confondre côtés et sommets"
      ],
      jury_logic: "Le jury attend la connaissance des figures de base."
    },

    {
      question: "Comment appelle-t-on un triangle ayant trois côtés égaux ?",
      choices: [
        "Triangle isocèle",
        "Triangle rectangle",
        "Triangle équilatéral",
        "Triangle quelconque"
      ],
      correct: 2,
      solution_steps: [
        "Équi signifie égal.",
        "Les trois côtés ont la même longueur."
      ],
      frequent_errors: [
        "Confondre isocèle et équilatéral"
      ],
      jury_logic: "Le jury attend une classification correcte des triangles."
    },

    {
      question: "Qu’est-ce qu’un angle droit ?",
      choices: [
        "Un angle de 45°",
        "Un angle plus grand que 90°",
        "Un angle de 90°",
        "Un angle nul"
      ],
      correct: 2,
      solution_steps: [
        "Un angle droit mesure exactement 90°."
      ],
      frequent_errors: [
        "Reconnaître un angle à l’œil sans outil"
      ],
      jury_logic: "Le jury attend l’usage d’outils de vérification."
    },

    {
      question: "Quel outil permet de vérifier un angle droit ?",
      choices: [
        "La règle",
        "Le compas",
        "L’équerre",
        "Le rapporteur"
      ],
      correct: 2,
      solution_steps: [
        "L’équerre est conçue pour vérifier les angles droits."
      ],
      frequent_errors: [
        "Utiliser la règle pour vérifier un angle"
      ],
      jury_logic: "Le jury attend la maîtrise des instruments de géométrie."
    },

    {
      question: "Qu’est-ce qu’un polygone ?",
      choices: [
        "Une figure avec des courbes",
        "Une figure fermée composée de segments",
        "Une droite",
        "Un cercle"
      ],
      correct: 1,
      solution_steps: [
        "Un polygone est une figure fermée.",
        "Ses côtés sont des segments."
      ],
      frequent_errors: [
        "Inclure le cercle dans les polygones"
      ],
      jury_logic: "Le jury attend une définition rigoureuse."
    },

    {
      question: "Combien de sommets possède un quadrilatère ?",
      choices: ["2", "3", "4", "5"],
      correct: 2,
      solution_steps: [
        "Un quadrilatère possède quatre côtés.",
        "Il a donc quatre sommets."
      ],
      frequent_errors: [
        "Confondre sommets et côtés"
      ],
      jury_logic: "Le jury attend une compréhension des propriétés des figures."
    },

    {
      question: "Quel quadrilatère possède quatre angles droits ?",
      choices: [
        "Losange",
        "Rectangle",
        "Trapèze",
        "Parallélogramme"
      ],
      correct: 1,
      solution_steps: [
        "Le rectangle est défini par quatre angles droits."
      ],
      frequent_errors: [
        "Confondre carré et rectangle"
      ],
      jury_logic: "Le jury attend une classification correcte des quadrilatères."
    },

    {
      question: "Quelle figure possède quatre côtés égaux et quatre angles droits ?",
      choices: [
        "Rectangle",
        "Losange",
        "Carré",
        "Trapèze"
      ],
      correct: 2,
      solution_steps: [
        "Le carré cumule les propriétés du rectangle et du losange."
      ],
      frequent_errors: [
        "Penser que le carré n’est pas un rectangle"
      ],
      jury_logic: "Le jury attend une vision inclusive des figures."
    },

    {
      question: "Qu’est-ce qu’un axe de symétrie ?",
      choices: [
        "Une ligne décorative",
        "Une droite qui coupe une figure en deux parties superposables",
        "Une diagonale",
        "Une hauteur"
      ],
      correct: 1,
      solution_steps: [
        "Les deux parties se superposent par pliage.",
        "L’axe partage la figure en deux moitiés égales."
      ],
      frequent_errors: [
        "Confondre axe et diagonale"
      ],
      jury_logic: "Le jury attend une compréhension de la symétrie axiale."
    },

    {
      question: "Quel outil est nécessaire pour tracer un cercle ?",
      choices: [
        "Règle",
        "Équerre",
        "Rapporteur",
        "Compas"
      ],
      correct: 3,
      solution_steps: [
        "Le compas permet de tracer un cercle à partir d’un centre."
      ],
      frequent_errors: [
        "Tracer un cercle à main levée"
      ],
      jury_logic: "Le jury attend la maîtrise des constructions."
    },

    {
      question: "Qu’est-ce que le centre d’un cercle ?",
      choices: [
        "Un point sur le cercle",
        "Un point à égale distance de tous les points du cercle",
        "Un diamètre",
        "Un rayon"
      ],
      correct: 1,
      solution_steps: [
        "Tous les points du cercle sont à la même distance du centre."
      ],
      frequent_errors: [
        "Confondre centre et rayon"
      ],
      jury_logic: "Le jury attend une compréhension des propriétés du cercle."
    },

    {
      question: "Quelle est la longueur d’un diamètre par rapport au rayon ?",
      choices: [
        "Égale",
        "La moitié",
        "Le double",
        "Le triple"
      ],
      correct: 2,
      solution_steps: [
        "Le diamètre est deux fois le rayon."
      ],
      frequent_errors: [
        "Confondre rayon et diamètre"
      ],
      jury_logic: "Le jury attend une maîtrise des relations dans le cercle."
    },

    {
      question: "Qu’est-ce qu’une figure plane ?",
      choices: [
        "Une figure en volume",
        "Une figure dessinée sur une surface",
        "Une figure en relief",
        "Une figure imaginaire"
      ],
      correct: 1,
      solution_steps: [
        "Les figures planes sont en deux dimensions."
      ],
      frequent_errors: [
        "Inclure les solides"
      ],
      jury_logic: "Le jury attend une distinction plan / espace."
    },

    {
      question: "Quel solide possède des faces carrées ?",
      choices: [
        "Cylindre",
        "Pyramide",
        "Cube",
        "Sphère"
      ],
      correct: 2,
      solution_steps: [
        "Le cube est composé de six faces carrées."
      ],
      frequent_errors: [
        "Confondre cube et pavé droit"
      ],
      jury_logic: "Le jury attend la connaissance des solides usuels."
    },

    {
      question: "Pourquoi utiliser des manipulations en géométrie ?",
      choices: [
        "Pour jouer",
        "Pour rendre les notions concrètes",
        "Pour gagner du temps",
        "Pour éviter l’écrit"
      ],
      correct: 1,
      solution_steps: [
        "Les manipulations aident à visualiser.",
        "Elles facilitent la compréhension."
      ],
      frequent_errors: [
        "Passer trop vite à l’abstrait"
      ],
      jury_logic: "Le jury attend des démarches actives."
    },

    {
      question: "Quelle est une erreur fréquente des élèves en géométrie ?",
      choices: [
        "Utiliser les outils",
        "Se fier uniquement à l’apparence",
        "Tracer avec précision",
        "Vérifier"
      ],
      correct: 1,
      solution_steps: [
        "L’œil peut tromper.",
        "Il faut vérifier avec des outils."
      ],
      frequent_errors: [
        "Reconnaissance visuelle sans justification"
      ],
      jury_logic: "Le jury attend une approche rigoureuse."
    },

    {
      question: "Pourquoi apprendre le vocabulaire géométrique ?",
      choices: [
        "Pour réciter",
        "Pour communiquer précisément",
        "Pour faire des exercices",
        "Pour noter"
      ],
      correct: 1,
      solution_steps: [
        "Le vocabulaire permet de décrire et expliquer.",
        "Il structure la pensée géométrique."
      ],
      frequent_errors: [
        "Utiliser des termes approximatifs"
      ],
      jury_logic: "Le jury attend une précision lexicale."
    },

    {
      question: "Quel est l’objectif principal de la géométrie à l’école primaire ?",
      choices: [
        "Dessiner",
        "Reconnaître et raisonner sur les formes",
        "Faire des figures complexes",
        "Évaluer"
      ],
      correct: 1,
      solution_steps: [
        "La géométrie développe le raisonnement spatial.",
        "Elle aide à structurer l’espace."
      ],
      frequent_errors: [
        "Limiter la géométrie au dessin"
      ],
      jury_logic: "Le jury attend une vision formatrice de la géométrie."
    },

    {
      question: "Quelle est l’attente principale du jury CRPE en géométrie ?",
      choices: [
        "La rapidité",
        "La récitation",
        "Le raisonnement et la justification",
        "La quantité de figures"
      ],
      correct: 2,
      solution_steps: [
        "Le jury évalue la capacité à expliquer.",
        "La justification est centrale."
      ],
      frequent_errors: [
        "Réponse sans argument"
      ],
      jury_logic: "Le jury attend une posture professionnelle."
    }

  ]
};
