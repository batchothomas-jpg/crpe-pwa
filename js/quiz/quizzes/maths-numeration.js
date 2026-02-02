export const quiz = {
  id: "maths-numeration",
  matiere: "Mathématiques",
  chapitre: "Numération",

  questions: [

    {
      question: "Dans le nombre 4 582, quel est le chiffre des centaines ?",
      choices: ["4", "5", "8", "2"],
      correct: 2,
      solution_steps: [
        "On lit le nombre de droite à gauche.",
        "Unités : 2, dizaines : 8, centaines : 5 ? Non.",
        "On corrige : unités = 2, dizaines = 8, centaines = 5 ? Faux.",
        "On relit correctement : unités = 2, dizaines = 8, centaines = 5 → erreur.",
        "En réalité : milliers = 4, centaines = 5, dizaines = 8, unités = 2.",
        "Le chiffre des centaines est donc 5."
      ],
      frequent_errors: [
        "Confondre lecture de gauche à droite",
        "Confondre chiffre et rang"
      ],
      jury_logic: "Le jury attend une maîtrise rigoureuse du système décimal."
    },

    {
      question: "Que représente le chiffre 7 dans le nombre 7 043 ?",
      choices: [
        "7 unités",
        "7 dizaines",
        "7 centaines",
        "7 milliers"
      ],
      correct: 3,
      solution_steps: [
        "Le chiffre 7 est placé au rang des milliers.",
        "Il représente 7 000."
      ],
      frequent_errors: [
        "Lire le chiffre sans tenir compte de sa position"
      ],
      jury_logic: "Le jury attend la compréhension de la valeur positionnelle."
    },

    {
      question: "Quel est le plus grand nombre ?",
      choices: ["3 405", "3 450", "3 054", "3 045"],
      correct: 1,
      solution_steps: [
        "On compare les milliers, puis les centaines.",
        "Les milliers sont identiques.",
        "Les centaines : 4 > 0.",
        "3 450 est le plus grand."
      ],
      frequent_errors: [
        "Comparer chiffre par chiffre sans méthode"
      ],
      jury_logic: "Le jury attend une comparaison raisonnée des nombres."
    },

    {
      question: "Combien y a-t-il de dizaines dans 320 ?",
      choices: ["3", "32", "320", "30"],
      correct: 1,
      solution_steps: [
        "Une dizaine = 10.",
        "320 ÷ 10 = 32."
      ],
      frequent_errors: [
        "Répondre 3 en ne regardant que le chiffre"
      ],
      jury_logic: "Le jury attend une compréhension des groupements."
    },

    {
      question: "Quelle écriture correspond à 6 centaines + 4 dizaines + 2 unités ?",
      choices: ["642", "624", "6042", "6024"],
      correct: 0,
      solution_steps: [
        "6 centaines = 600.",
        "4 dizaines = 40.",
        "2 unités = 2.",
        "600 + 40 + 2 = 642."
      ],
      frequent_errors: [
        "Additionner les chiffres sans les valeurs"
      ],
      jury_logic: "Le jury attend une décomposition correcte des nombres."
    },

    {
      question: "Quel nombre correspond à la décomposition 9 000 + 300 + 5 ?",
      choices: ["9 305", "9 035", "9 350", "9 003"],
      correct: 0,
      solution_steps: [
        "On additionne les valeurs.",
        "9 000 + 300 + 5 = 9 305."
      ],
      frequent_errors: [
        "Oublier les zéros intermédiaires"
      ],
      jury_logic: "Le jury attend une écriture correcte des grands nombres."
    },

    {
      question: "Entre quels nombres entiers se situe 4,7 ?",
      choices: [
        "Entre 3 et 4",
        "Entre 4 et 5",
        "Entre 5 et 6",
        "Entre 4 et 6"
      ],
      correct: 1,
      solution_steps: [
        "4,7 est plus grand que 4.",
        "Il est plus petit que 5."
      ],
      frequent_errors: [
        "Comparer uniquement les chiffres"
      ],
      jury_logic: "Le jury attend la compréhension des nombres décimaux."
    },

    {
      question: "Quel est l’ordre de grandeur de 498 ?",
      choices: ["400", "500", "1 000", "450"],
      correct: 1,
      solution_steps: [
        "498 est proche de 500.",
        "L’ordre de grandeur est 500."
      ],
      frequent_errors: [
        "Choisir le nombre inférieur automatiquement"
      ],
      jury_logic: "Le jury attend une estimation raisonnée."
    },

    {
      question: "Dans 3,25, que représente le chiffre 2 ?",
      choices: [
        "2 unités",
        "2 dixièmes",
        "2 centièmes",
        "2 millièmes"
      ],
      correct: 1,
      solution_steps: [
        "Le chiffre après la virgule représente les dixièmes.",
        "2 est donc le chiffre des dixièmes."
      ],
      frequent_errors: [
        "Lire les décimaux comme des entiers"
      ],
      jury_logic: "Le jury attend une compréhension du sens des décimaux."
    },

    {
      question: "Quel nombre est égal à 1 000 unités ?",
      choices: ["10", "100", "1 000", "10 000"],
      correct: 2,
      solution_steps: [
        "1 000 unités = 1 millier.",
        "Cela correspond à 1 000."
      ],
      frequent_errors: [
        "Confondre unités et dizaines"
      ],
      jury_logic: "Le jury attend une maîtrise des relations entre unités."
    },

    {
      question: "Quel nombre a pour chiffre des dizaines 6 ?",
      choices: ["462", "406", "624", "640"],
      correct: 3,
      solution_steps: [
        "Le chiffre des dizaines est le 2e en partant de la droite.",
        "Dans 640, le chiffre des dizaines est 4 ? Non.",
        "Correction : unités = 0, dizaines = 4 → erreur.",
        "On vérifie : 462 → dizaines = 6.",
        "La bonne réponse est 462."
      ],
      frequent_errors: [
        "Se tromper de rang",
        "Aller trop vite"
      ],
      jury_logic: "Le jury attend une lecture précise des rangs."
    },

    {
      question: "Pourquoi utiliser la droite numérique en numération ?",
      choices: [
        "Pour décorer",
        "Pour visualiser l’ordre des nombres",
        "Pour calculer",
        "Pour réciter"
      ],
      correct: 1,
      solution_steps: [
        "La droite numérique permet de visualiser les positions.",
        "Elle aide à comparer et ordonner."
      ],
      frequent_errors: [
        "Utiliser la droite sans objectif"
      ],
      jury_logic: "Le jury attend une justification des outils pédagogiques."
    },

    {
      question: "Quelle est une erreur fréquente des élèves en numération ?",
      choices: [
        "Utiliser des schémas",
        "Confondre chiffre et nombre",
        "Décomposer les nombres",
        "Comparer"
      ],
      correct: 1,
      solution_steps: [
        "Un chiffre est un symbole.",
        "Un nombre est une quantité."
      ],
      frequent_errors: [
        "Dire “le chiffre 12”"
      ],
      jury_logic: "Le jury attend une analyse des erreurs d’élèves."
    },

    {
      question: "Pourquoi décomposer les nombres ?",
      choices: [
        "Pour compliquer",
        "Pour mieux comprendre leur structure",
        "Pour réciter",
        "Pour noter"
      ],
      correct: 1,
      solution_steps: [
        "La décomposition montre la valeur des chiffres.",
        "Elle facilite les calculs."
      ],
      frequent_errors: [
        "Voir la décomposition comme un exercice isolé"
      ],
      jury_logic: "Le jury attend une numération au service du calcul."
    },

    {
      question: "Quel est l’objectif principal de la numération à l’école primaire ?",
      choices: [
        "Réciter les nombres",
        "Comprendre le système décimal",
        "Faire des calculs rapides",
        "Évaluer"
      ],
      correct: 1,
      solution_steps: [
        "Le système décimal structure tous les calculs.",
        "Il est fondamental."
      ],
      frequent_errors: [
        "Se limiter à la lecture des nombres"
      ],
      jury_logic: "Le jury attend une vision structurante de la numération."
    },

    {
      question: "Pourquoi utiliser du matériel (cubes, jetons) en numération ?",
      choices: [
        "Pour jouer",
        "Pour rendre les nombres concrets",
        "Pour perdre du temps",
        "Pour décorer"
      ],
      correct: 1,
      solution_steps: [
        "Le matériel rend visible la quantité.",
        "Il aide à comprendre l’abstraction."
      ],
      frequent_errors: [
        "Passer trop vite à l’abstrait"
      ],
      jury_logic: "Le jury attend des démarches concrètes."
    },

    {
      question: "Quelle posture adopter face aux erreurs de numération ?",
      choices: [
        "Punitive",
        "Indifférente",
        "Accompagnante",
        "Autoritaire"
      ],
      correct: 2,
      solution_steps: [
        "L’erreur révèle la compréhension de l’élève.",
        "Elle est un point d’appui."
      ],
      frequent_errors: [
        "Corriger sans expliquer"
      ],
      jury_logic: "Le jury attend une posture bienveillante et exigeante."
    },

    {
      question: "Pourquoi la numération est-elle transversale en mathématiques ?",
      choices: [
        "Parce qu’elle est facile",
        "Parce qu’elle est utilisée dans tous les domaines",
        "Parce qu’elle est évaluée",
        "Parce qu’elle est ancienne"
      ],
      correct: 1,
      solution_steps: [
        "La numération intervient en calcul, mesures, problèmes.",
        "Elle structure toutes les mathématiques."
      ],
      frequent_errors: [
        "La traiter comme un chapitre isolé"
      ],
      jury_logic: "Le jury attend une vision globale des apprentissages."
    },

    {
      question: "Quelle est l’attente principale du jury CRPE en numération ?",
      choices: [
        "La rapidité",
        "La récitation",
        "Le raisonnement et l’explicitation",
        "La quantité d’exercices"
      ],
      correct: 2,
      solution_steps: [
        "Le jury évalue un futur enseignant.",
        "Il attend des justifications claires."
      ],
      frequent_errors: [
        "Réponse juste sans explication"
      ],
      jury_logic: "Le jury attend une posture professionnelle."
    }

  ]
};
