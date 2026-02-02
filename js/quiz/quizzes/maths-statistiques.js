export const quiz = {
  id: "maths-statistiques",
  matiere: "Mathématiques",
  chapitre: "Statistiques",

  questions: [

    {
      question: "Qu’est-ce qu’une donnée statistique ?",
      choices: [
        "Un calcul",
        "Une information recueillie",
        "Un graphique",
        "Une moyenne"
      ],
      correct: 1,
      solution_steps: [
        "Une donnée est une information collectée.",
        "Elle peut être numérique ou qualitative."
      ],
      frequent_errors: [
        "Confondre donnée et résultat"
      ],
      jury_logic: "Le jury attend une définition claire des notions statistiques."
    },

    {
      question: "Quel est le but principal des statistiques à l’école primaire ?",
      choices: [
        "Faire des calculs complexes",
        "Organiser et interpréter des données",
        "Tracer des graphiques décoratifs",
        "Apprendre des formules"
      ],
      correct: 1,
      solution_steps: [
        "Les statistiques servent à comprendre des informations.",
        "Elles aident à prendre des décisions."
      ],
      frequent_errors: [
        "Limiter les statistiques aux calculs"
      ],
      jury_logic: "Le jury attend une approche fonctionnelle."
    },

    {
      question: "Qu’est-ce qu’un effectif ?",
      choices: [
        "Une moyenne",
        "Le nombre total de données",
        "Le nombre d’occurrences d’une valeur",
        "Un graphique"
      ],
      correct: 2,
      solution_steps: [
        "L’effectif correspond au nombre de fois qu’une valeur apparaît."
      ],
      frequent_errors: [
        "Confondre effectif et total"
      ],
      jury_logic: "Le jury attend une maîtrise du vocabulaire statistique."
    },

    {
      question: "Qu’est-ce que l’effectif total ?",
      choices: [
        "Le nombre de valeurs différentes",
        "Le nombre total de données recueillies",
        "La valeur la plus fréquente",
        "La moyenne"
      ],
      correct: 1,
      solution_steps: [
        "On additionne tous les effectifs.",
        "Cela donne le nombre total de données."
      ],
      frequent_errors: [
        "Additionner les valeurs au lieu des effectifs"
      ],
      jury_logic: "Le jury attend une lecture rigoureuse des tableaux."
    },

    {
      question: "Quelle est la valeur la plus fréquente d’une série ?",
      choices: [
        "La moyenne",
        "La médiane",
        "Le mode",
        "L’étendue"
      ],
      correct: 2,
      solution_steps: [
        "Le mode correspond à la valeur la plus fréquente."
      ],
      frequent_errors: [
        "Confondre mode et moyenne"
      ],
      jury_logic: "Le jury attend la connaissance des indicateurs simples."
    },

    {
      question: "Qu’est-ce que la moyenne ?",
      choices: [
        "La valeur du milieu",
        "La valeur la plus fréquente",
        "La somme des valeurs divisée par leur nombre",
        "La plus grande valeur"
      ],
      correct: 2,
      solution_steps: [
        "On additionne toutes les valeurs.",
        "On divise par le nombre de données."
      ],
      frequent_errors: [
        "Diviser par la mauvaise quantité"
      ],
      jury_logic: "Le jury attend une compréhension du calcul de la moyenne."
    },

    {
      question: "Qu’est-ce que la médiane ?",
      choices: [
        "La moyenne",
        "La valeur la plus fréquente",
        "La valeur du milieu dans une série ordonnée",
        "La plus petite valeur"
      ],
      correct: 2,
      solution_steps: [
        "On range les valeurs dans l’ordre.",
        "La médiane est celle du milieu."
      ],
      frequent_errors: [
        "Oublier de trier la série"
      ],
      jury_logic: "Le jury attend une démarche correcte."
    },

    {
      question: "Pourquoi faut-il ordonner une série pour trouver la médiane ?",
      choices: [
        "Pour faire joli",
        "Pour repérer la valeur centrale",
        "Pour calculer plus vite",
        "Pour tracer un graphique"
      ],
      correct: 1,
      solution_steps: [
        "Sans ordre, on ne peut pas identifier le milieu."
      ],
      frequent_errors: [
        "Chercher la médiane sans trier"
      ],
      jury_logic: "Le jury attend une rigueur méthodologique."
    },

    {
      question: "Qu’est-ce que l’étendue d’une série ?",
      choices: [
        "La somme des valeurs",
        "La différence entre la plus grande et la plus petite valeur",
        "La valeur la plus fréquente",
        "La moyenne"
      ],
      correct: 1,
      solution_steps: [
        "Étendue = maximum − minimum."
      ],
      frequent_errors: [
        "Confondre étendue et moyenne"
      ],
      jury_logic: "Le jury attend la maîtrise des indicateurs de dispersion."
    },

    {
      question: "Pourquoi utiliser des graphiques en statistiques ?",
      choices: [
        "Pour décorer",
        "Pour visualiser et comparer les données",
        "Pour éviter les calculs",
        "Pour aller plus vite"
      ],
      correct: 1,
      solution_steps: [
        "Les graphiques rendent les données lisibles.",
        "Ils facilitent la comparaison."
      ],
      frequent_errors: [
        "Lire le graphique sans interpréter"
      ],
      jury_logic: "Le jury attend une lecture interprétative."
    },

    {
      question: "Quel graphique est adapté pour comparer des effectifs ?",
      choices: [
        "Diagramme en bâtons",
        "Diagramme circulaire",
        "Courbe",
        "Droite"
      ],
      correct: 0,
      solution_steps: [
        "Le diagramme en bâtons permet de comparer facilement les effectifs."
      ],
      frequent_errors: [
        "Utiliser un graphique inadapté"
      ],
      jury_logic: "Le jury attend un choix pertinent de représentation."
    },

    {
      question: "Quelle est une erreur fréquente des élèves en statistiques ?",
      choices: [
        "Vérifier les résultats",
        "Confondre moyenne et médiane",
        "Lire les tableaux",
        "Tracer des graphiques"
      ],
      correct: 1,
      solution_steps: [
        "Les indicateurs ont des rôles différents.",
        "Ils ne doivent pas être confondus."
      ],
      frequent_errors: [
        "Utiliser la moyenne partout"
      ],
      jury_logic: "Le jury attend une analyse des erreurs d’élèves."
    },

    {
      question: "Pourquoi travailler des situations réelles en statistiques ?",
      choices: [
        "Pour compliquer",
        "Pour donner du sens aux données",
        "Pour gagner du temps",
        "Pour noter"
      ],
      correct: 1,
      solution_steps: [
        "Les données réelles sont motivantes.",
        "Elles favorisent la compréhension."
      ],
      frequent_errors: [
        "Données abstraites sans contexte"
      ],
      jury_logic: "Le jury attend une contextualisation."
    },

    {
      question: "Quel indicateur décrit la tendance générale d’une série ?",
      choices: [
        "L’étendue",
        "Le mode",
        "La moyenne",
        "Le minimum"
      ],
      correct: 2,
      solution_steps: [
        "La moyenne donne une valeur représentative globale."
      ],
      frequent_errors: [
        "Choisir le maximum ou le minimum"
      ],
      jury_logic: "Le jury attend une compréhension du rôle des indicateurs."
    },

    {
      question: "Pourquoi comparer plusieurs indicateurs ?",
      choices: [
        "Pour faire plus de calculs",
        "Pour avoir une vision plus complète",
        "Pour évaluer",
        "Pour compliquer"
      ],
      correct: 1,
      solution_steps: [
        "Chaque indicateur apporte une information différente.",
        "Les comparer enrichit l’analyse."
      ],
      frequent_errors: [
        "Se contenter d’un seul indicateur"
      ],
      jury_logic: "Le jury attend une analyse nuancée."
    },

    {
      question: "Quelle posture adopter face aux erreurs en statistiques ?",
      choices: [
        "Punitive",
        "Indifférente",
        "Analytique et accompagnante",
        "Autoritaire"
      ],
      correct: 2,
      solution_steps: [
        "Les erreurs révèlent une incompréhension.",
        "Elles permettent d’ajuster l’enseignement."
      ],
      frequent_errors: [
        "Corriger sans expliquer"
      ],
      jury_logic: "Le jury attend une posture professionnelle."
    },

    {
      question: "Pourquoi enseigner les statistiques à l’école primaire ?",
      choices: [
        "Pour réciter des définitions",
        "Pour développer l’esprit critique",
        "Pour faire des tableaux",
        "Pour évaluer"
      ],
      correct: 1,
      solution_steps: [
        "Les statistiques sont omniprésentes.",
        "Elles aident à interpréter le monde."
      ],
      frequent_errors: [
        "Vision technique des statistiques"
      ],
      jury_logic: "Le jury attend une formation du citoyen."
    },

    {
      question: "Quel lien existe entre statistiques et citoyenneté ?",
      choices: [
        "Aucun",
        "Les statistiques permettent de manipuler",
        "Elles aident à comprendre des informations publiques",
        "Elles servent uniquement à l’école"
      ],
      correct: 2,
      solution_steps: [
        "Les statistiques sont utilisées dans les médias.",
        "Les comprendre évite les manipulations."
      ],
      frequent_errors: [
        "Lire les chiffres sans recul"
      ],
      jury_logic: "Le jury attend une éducation critique."
    },

    {
      question: "Quel est l’objectif principal de l’enseignement des statistiques ?",
      choices: [
        "Aller vite",
        "Faire des calculs",
        "Interpréter des données",
        "Réciter des règles"
      ],
      correct: 2,
      solution_steps: [
        "Les statistiques servent à comprendre des données.",
        "L’interprétation est centrale."
      ],
      frequent_errors: [
        "Se focaliser sur le calcul"
      ],
      jury_logic: "Le jury attend une approche interprétative."
    },

    {
      question: "Quelle est l’attente principale du jury CRPE en statistiques ?",
      choices: [
        "La rapidité",
        "La récitation",
        "Le raisonnement et l’interprétation",
        "La quantité d’exercices"
      ],
      correct: 2,
      solution_steps: [
        "Le jury attend des analyses justifiées.",
        "L’interprétation est essentielle."
      ],
      frequent_errors: [
        "Réponse sans justification"
      ],
      jury_logic: "Le jury attend une posture réflexive."
    }

  ]
};
