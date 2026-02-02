export const quiz = {
  id: "quiz-maths-calculs",
  matiere: "Mathématiques",
  chapitre: "Calculs",

  questions: [

    {
      question: "Quel est le résultat de 48 + 27 ?",
      choices: ["65", "75", "85", "95"],
      correct: 1,
      solution_steps: [
        "On additionne les unités : 8 + 7 = 15.",
        "On écrit 5 et on retient 1.",
        "On additionne les dizaines : 4 + 2 + 1 = 7.",
        "Le résultat est 75."
      ],
      frequent_errors: [
        "Oublier la retenue",
        "Additionner 4 + 2 sans la retenue"
      ],
      jury_logic: "Le jury attend une maîtrise des techniques opératoires avec justification."
    },

    {
      question: "Quel est le résultat de 83 − 47 ?",
      choices: ["36", "44", "46", "56"],
      correct: 0,
      solution_steps: [
        "On ne peut pas enlever 7 à 3.",
        "On échange une dizaine : 13 − 7 = 6.",
        "Il reste 7 dizaines : 7 − 4 = 3.",
        "Le résultat est 36."
      ],
      frequent_errors: [
        "Soustraire chiffre par chiffre sans échange"
      ],
      jury_logic: "Le jury attend la compréhension du principe de l’échange."
    },

    {
      question: "Quel est le résultat de 6 × 7 ?",
      choices: ["36", "42", "49", "56"],
      correct: 1,
      solution_steps: [
        "6 × 7 correspond à 6 groupes de 7.",
        "6 × 7 = 42."
      ],
      frequent_errors: [
        "Confondre avec 7 × 7",
        "Erreur de table"
      ],
      jury_logic: "Le jury attend la maîtrise des tables de multiplication."
    },

    {
      question: "Quel est le résultat de 56 ÷ 7 ?",
      choices: ["6", "7", "8", "9"],
      correct: 2,
      solution_steps: [
        "On cherche combien de fois 7 est contenu dans 56.",
        "7 × 8 = 56.",
        "Le quotient est 8."
      ],
      frequent_errors: [
        "Confondre division et soustraction"
      ],
      jury_logic: "Le jury attend une compréhension du sens de la division."
    },

    {
      question: "Dans un calcul, à quoi sert la parenthèse ?",
      choices: [
        "À décorer le calcul",
        "À changer l’ordre des calculs",
        "À rendre le calcul plus long",
        "À éviter les erreurs d’écriture"
      ],
      correct: 1,
      solution_steps: [
        "La parenthèse indique ce qui doit être calculé en priorité.",
        "Elle modifie l’ordre des opérations."
      ],
      frequent_errors: [
        "Ne pas respecter les priorités opératoires"
      ],
      jury_logic: "Le jury attend la maîtrise des règles de priorité."
    },

    {
      question: "Quel est le résultat de 5 + 3 × 4 ?",
      choices: ["32", "17", "20", "35"],
      correct: 1,
      solution_steps: [
        "On calcule d’abord la multiplication.",
        "3 × 4 = 12.",
        "Puis 5 + 12 = 17."
      ],
      frequent_errors: [
        "Calculer dans l’ordre de lecture"
      ],
      jury_logic: "Le jury attend le respect des priorités opératoires."
    },

    {
      question: "Quel est le résultat de (5 + 3) × 4 ?",
      choices: ["17", "20", "32", "12"],
      correct: 2,
      solution_steps: [
        "On calcule d’abord ce qui est entre parenthèses.",
        "5 + 3 = 8.",
        "8 × 4 = 32."
      ],
      frequent_errors: [
        "Oublier l’effet des parenthèses"
      ],
      jury_logic: "Le jury attend une lecture rigoureuse des expressions."
    },

    {
      question: "Quel est le résultat de 0 × 18 ?",
      choices: ["0", "18", "1", "Impossible"],
      correct: 0,
      solution_steps: [
        "Multiplier par 0 donne toujours 0.",
        "Aucune quantité n’est répétée."
      ],
      frequent_errors: [
        "Penser que le résultat est 18"
      ],
      jury_logic: "Le jury attend la maîtrise des propriétés des opérations."
    },

    {
      question: "Quel est le résultat de 45 ÷ 10 ?",
      choices: ["4,5", "45", "0,45", "450"],
      correct: 0,
      solution_steps: [
        "Diviser par 10 décale la virgule d’un rang vers la gauche.",
        "45 ÷ 10 = 4,5."
      ],
      frequent_errors: [
        "Déplacer la virgule dans le mauvais sens"
      ],
      jury_logic: "Le jury attend la compréhension des effets de la division par 10."
    },

    {
      question: "Quel est le résultat de 2,4 + 1,6 ?",
      choices: ["3", "4", "4,0", "3,10"],
      correct: 1,
      solution_steps: [
        "On aligne les virgules.",
        "2,4 + 1,6 = 4,0.",
        "Le résultat est 4."
      ],
      frequent_errors: [
        "Additionner sans aligner les virgules"
      ],
      jury_logic: "Le jury attend une maîtrise du calcul décimal."
    },

    {
      question: "Pourquoi poser une opération ?",
      choices: [
        "Pour écrire plus",
        "Pour éviter les erreurs",
        "Pour faire joli",
        "Pour gagner du temps uniquement"
      ],
      correct: 1,
      solution_steps: [
        "La pose permet de structurer le calcul.",
        "Elle sécurise les étapes."
      ],
      frequent_errors: [
        "Calculer mentalement sans méthode"
      ],
      jury_logic: "Le jury attend une justification des outils de calcul."
    },

    {
      question: "Quelle est une erreur fréquente des élèves en calcul ?",
      choices: [
        "Vérifier le résultat",
        "Ne pas tenir compte du sens",
        "Poser l’opération",
        "Relire"
      ],
      correct: 1,
      solution_steps: [
        "Les élèves calculent parfois sans réfléchir au sens.",
        "Ils ne vérifient pas la cohérence du résultat."
      ],
      frequent_errors: [
        "Résultat incohérent non repéré"
      ],
      jury_logic: "Le jury attend une analyse des erreurs d’élèves."
    },

    {
      question: "Pourquoi estimer un résultat avant de calculer ?",
      choices: [
        "Pour perdre du temps",
        "Pour vérifier la cohérence du résultat",
        "Pour éviter le calcul",
        "Pour réciter"
      ],
      correct: 1,
      solution_steps: [
        "L’estimation donne un ordre de grandeur.",
        "Elle permet de repérer une erreur."
      ],
      frequent_errors: [
        "Faire confiance aveuglément au calcul"
      ],
      jury_logic: "Le jury attend une démarche réflexive."
    },

    {
      question: "Quel est le résultat de 9 × 0 ?",
      choices: ["0", "9", "1", "Impossible"],
      correct: 0,
      solution_steps: [
        "Multiplier par 0 donne toujours 0.",
        "Il n’y a aucune quantité."
      ],
      frequent_errors: [
        "Répondre 9 par automatisme"
      ],
      jury_logic: "Le jury attend la maîtrise des propriétés opératoires."
    },

    {
      question: "Pourquoi apprendre les tables de multiplication ?",
      choices: [
        "Pour réciter",
        "Pour automatiser certains calculs",
        "Pour évaluer",
        "Pour compliquer"
      ],
      correct: 1,
      solution_steps: [
        "Les tables libèrent la mémoire.",
        "Elles facilitent les calculs complexes."
      ],
      frequent_errors: [
        "Apprentissage sans compréhension"
      ],
      jury_logic: "Le jury attend un équilibre entre automatisation et compréhension."
    },

    {
      question: "Quelle opération permet de partager une quantité ?",
      choices: [
        "Addition",
        "Soustraction",
        "Multiplication",
        "Division"
      ],
      correct: 3,
      solution_steps: [
        "La division correspond à un partage.",
        "Elle répond à la question « combien par part ? »."
      ],
      frequent_errors: [
        "Confondre division et soustraction répétée"
      ],
      jury_logic: "Le jury attend une compréhension du sens des opérations."
    },

    {
      question: "Pourquoi varier les stratégies de calcul ?",
      choices: [
        "Pour faire plus long",
        "Pour s’adapter aux situations",
        "Pour éviter le calcul",
        "Pour noter"
      ],
      correct: 1,
      solution_steps: [
        "Toutes les situations ne se traitent pas de la même façon.",
        "La flexibilité est essentielle."
      ],
      frequent_errors: [
        "Utiliser une seule méthode"
      ],
      jury_logic: "Le jury attend une maîtrise des stratégies de calcul."
    },

    {
      question: "Quelle posture adopter face aux erreurs de calcul ?",
      choices: [
        "Punitive",
        "Indifférente",
        "Analytique et accompagnante",
        "Autoritaire"
      ],
      correct: 2,
      solution_steps: [
        "L’erreur révèle une difficulté.",
        "Elle permet d’adapter l’enseignement."
      ],
      frequent_errors: [
        "Corriger sans expliquer"
      ],
      jury_logic: "Le jury attend une posture professionnelle."
    },

    {
      question: "Quel est l’objectif principal de l’enseignement du calcul à l’école ?",
      choices: [
        "Aller vite",
        "Réussir les évaluations",
        "Comprendre et résoudre des situations",
        "Réciter des règles"
      ],
      correct: 2,
      solution_steps: [
        "Le calcul est un outil pour résoudre des problèmes.",
        "Il doit être compris."
      ],
      frequent_errors: [
        "Vision mécanique du calcul"
      ],
      jury_logic: "Le jury attend une approche fonctionnelle du calcul."
    },

    {
      question: "Quelle est l’attente principale du jury CRPE en calcul ?",
      choices: [
        "La rapidité",
        "La récitation",
        "Le raisonnement et la justification",
        "La quantité d’exercices"
      ],
      correct: 2,
      solution_steps: [
        "Le jury évalue un futur enseignant.",
        "Il attend une démarche expliquée."
      ],
      frequent_errors: [
        "Réponse juste sans justification"
      ],
      jury_logic: "Le jury attend une posture réflexive."
    }

  ]
};
