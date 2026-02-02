export const quiz = {
  id: "geographie-reperes",
  matiere: "Géographie",
  chapitre: "Se repérer dans l’espace",

  questions: [

    {
      question: "À quoi sert la géographie à l’école primaire ?",
      choices: [
        "À apprendre des noms par cœur",
        "À comprendre l’organisation de l’espace",
        "À dessiner des cartes",
        "À faire des calculs"
      ],
      correct: 1,
      solution_steps: [
        "La géographie aide à comprendre les espaces vécus.",
        "Elle permet de lire et interpréter les territoires."
      ],
      frequent_errors: [
        "Limiter la géographie à la mémorisation"
      ],
      jury_logic: "Le jury attend une finalité de compréhension des espaces."
    },

    {
      question: "Qu’est-ce qu’un espace géographique ?",
      choices: [
        "Un lieu imaginaire",
        "Un espace organisé par les sociétés humaines",
        "Un espace naturel uniquement",
        "Un espace sans habitants"
      ],
      correct: 1,
      solution_steps: [
        "Un espace géographique est organisé.",
        "Il résulte de l’action humaine."
      ],
      frequent_errors: [
        "Opposer strictement naturel et humain"
      ],
      jury_logic: "Le jury attend une définition institutionnelle."
    },

    {
      question: "Quel outil permet de se repérer sur une carte ?",
      choices: [
        "La légende",
        "Le texte",
        "La photographie",
        "Le graphique"
      ],
      correct: 0,
      solution_steps: [
        "La légende explique les symboles.",
        "Elle permet de comprendre la carte."
      ],
      frequent_errors: [
        "Lire la carte sans la légende"
      ],
      jury_logic: "Le jury attend la maîtrise des outils cartographiques."
    },

    {
      question: "À quoi sert une légende sur une carte ?",
      choices: [
        "À décorer",
        "À expliquer les symboles",
        "À raconter une histoire",
        "À noter"
      ],
      correct: 1,
      solution_steps: [
        "Les symboles représentent des éléments.",
        "La légende les explique."
      ],
      frequent_errors: [
        "Confondre légende et titre"
      ],
      jury_logic: "Le jury attend une lecture rigoureuse des cartes."
    },

    {
      question: "Qu’indique l’orientation sur une carte ?",
      choices: [
        "La taille des villes",
        "La position des continents",
        "Les directions (Nord, Sud, Est, Ouest)",
        "Le relief"
      ],
      correct: 2,
      solution_steps: [
        "L’orientation indique les directions.",
        "Le Nord est souvent en haut."
      ],
      frequent_errors: [
        "Penser que le Nord est toujours en haut"
      ],
      jury_logic: "Le jury attend une compréhension des conventions."
    },

    {
      question: "Quel est le rôle de l’échelle sur une carte ?",
      choices: [
        "Décorer",
        "Indiquer la réduction de la réalité",
        "Montrer les couleurs",
        "Indiquer la population"
      ],
      correct: 1,
      solution_steps: [
        "L’échelle montre le rapport carte / réalité.",
        "Elle permet de mesurer des distances."
      ],
      frequent_errors: [
        "Ignorer l’échelle"
      ],
      jury_logic: "Le jury attend une maîtrise des proportions."
    },

    {
      question: "Pourquoi utilise-t-on différentes échelles en géographie ?",
      choices: [
        "Pour compliquer",
        "Pour observer un espace à différents niveaux",
        "Pour éviter les cartes",
        "Pour noter"
      ],
      correct: 1,
      solution_steps: [
        "Changer d’échelle change le point de vue.",
        "Cela enrichit l’analyse."
      ],
      frequent_errors: [
        "Toujours utiliser la même échelle"
      ],
      jury_logic: "Le jury attend une approche multi-scalaire."
    },

    {
      question: "Qu’est-ce qu’un plan ?",
      choices: [
        "Une carte du monde",
        "Une représentation à grande échelle d’un espace proche",
        "Une photographie",
        "Un graphique"
      ],
      correct: 1,
      solution_steps: [
        "Le plan représente un espace restreint.",
        "Il est très détaillé."
      ],
      frequent_errors: [
        "Confondre plan et carte"
      ],
      jury_logic: "Le jury attend une distinction claire."
    },

    {
      question: "Pourquoi apprendre à lire des cartes dès l’école primaire ?",
      choices: [
        "Pour réciter",
        "Pour se repérer et comprendre les espaces",
        "Pour dessiner",
        "Pour évaluer"
      ],
      correct: 1,
      solution_steps: [
        "La lecture de cartes est une compétence citoyenne.",
        "Elle est utile au quotidien."
      ],
      frequent_errors: [
        "Voir la carte comme un simple dessin"
      ],
      jury_logic: "Le jury attend une finalité pratique."
    },

    {
      question: "Quelle est une erreur fréquente des élèves en géographie ?",
      choices: [
        "Observer",
        "Lire la carte sans la légende",
        "Comparer",
        "Justifier"
      ],
      correct: 1,
      solution_steps: [
        "Sans la légende, la carte est incompréhensible.",
        "Les symboles doivent être expliqués."
      ],
      frequent_errors: [
        "Interprétation intuitive"
      ],
      jury_logic: "Le jury attend l’analyse des difficultés."
    },

    {
      question: "Pourquoi partir de l’espace vécu des élèves ?",
      choices: [
        "Pour simplifier",
        "Pour donner du sens aux apprentissages",
        "Pour éviter la théorie",
        "Pour aller vite"
      ],
      correct: 1,
      solution_steps: [
        "L’espace proche est connu.",
        "Il facilite la compréhension."
      ],
      frequent_errors: [
        "Commencer directement par le monde"
      ],
      jury_logic: "Le jury attend une progression pédagogique."
    },

    {
      question: "Qu’est-ce qu’un territoire ?",
      choices: [
        "Un espace vide",
        "Un espace approprié et organisé par une société",
        "Un espace naturel uniquement",
        "Un espace imaginaire"
      ],
      correct: 1,
      solution_steps: [
        "Un territoire est habité, organisé et vécu.",
        "Il résulte de choix humains."
      ],
      frequent_errors: [
        "Réduire le territoire au relief"
      ],
      jury_logic: "Le jury attend une définition géographique."
    },

    {
      question: "Pourquoi comparer des territoires ?",
      choices: [
        "Pour dire lequel est meilleur",
        "Pour comprendre des organisations différentes",
        "Pour juger",
        "Pour réciter"
      ],
      correct: 1,
      solution_steps: [
        "Chaque territoire est organisé différemment.",
        "La comparaison éclaire les choix."
      ],
      frequent_errors: [
        "Comparer sans critères"
      ],
      jury_logic: "Le jury attend une démarche comparative."
    },

    {
      question: "Pourquoi enseigner la géographie à l’école primaire ?",
      choices: [
        "Pour apprendre des listes",
        "Pour comprendre le monde et les territoires",
        "Pour dessiner",
        "Pour évaluer"
      ],
      correct: 1,
      solution_steps: [
        "La géographie forme des citoyens.",
        "Elle aide à comprendre le monde."
      ],
      frequent_errors: [
        "Vision descriptive uniquement"
      ],
      jury_logic: "Le jury attend une finalité éducative."
    },

    {
      question: "Quelle démarche est géographique ?",
      choices: [
        "Observer, décrire, expliquer",
        "Deviner",
        "Réciter",
        "Imaginer"
      ],
      correct: 0,
      solution_steps: [
        "La géographie repose sur l’observation.",
        "L’explication donne du sens."
      ],
      frequent_errors: [
        "Raconter sans analyser"
      ],
      jury_logic: "Le jury attend une méthodologie rigoureuse."
    },

    {
      question: "Quelle posture adopter face aux erreurs en géographie ?",
      choices: [
        "Punitive",
        "Indifférente",
        "Analytique et accompagnante",
        "Autoritaire"
      ],
      correct: 2,
      solution_steps: [
        "Les erreurs révèlent des incompréhensions.",
        "Elles permettent de progresser."
      ],
      frequent_errors: [
        "Corriger sans expliquer"
      ],
      jury_logic: "Le jury attend une posture professionnelle."
    },

    {
      question: "Pourquoi changer d’échelle d’analyse en géographie ?",
      choices: [
        "Pour compliquer",
        "Pour mieux comprendre les phénomènes",
        "Pour éviter les cartes",
        "Pour noter"
      ],
      correct: 1,
      solution_steps: [
        "Un phénomène s’explique à plusieurs niveaux.",
        "Changer d’échelle éclaire différemment."
      ],
      frequent_errors: [
        "Rester à une seule échelle"
      ],
      jury_logic: "Le jury attend une pensée spatiale."
    },

    {
      question: "Quel est l’objectif principal de l’enseignement de la géographie ?",
      choices: [
        "Réciter",
        "Comprendre l’organisation des espaces",
        "Dessiner",
        "Réussir les évaluations"
      ],
      correct: 1,
      solution_steps: [
        "La géographie explique l’organisation du monde.",
        "Elle développe l’esprit critique."
      ],
      frequent_errors: [
        "Accumuler des faits sans sens"
      ],
      jury_logic: "Le jury attend une formation intellectuelle."
    },

    {
      question: "Quelle est l’attente principale du jury CRPE en géographie ?",
      choices: [
        "La rapidité",
        "La récitation",
        "Le raisonnement géographique expliqué",
        "La quantité de cartes"
      ],
      correct: 2,
      solution_steps: [
        "Le jury attend des analyses justifiées.",
        "Le raisonnement est central."
      ],
      frequent_errors: [
        "Réponse sans justification"
      ],
      jury_logic: "Le jury attend une posture réflexive."
    }

  ]
};
