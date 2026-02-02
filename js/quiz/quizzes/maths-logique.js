export const quiz = {
  id: "maths-logique",
  matiere: "Mathématiques",
  chapitre: "Logique",

  questions: [

    {
      question: "Qu’est-ce qu’un raisonnement logique ?",
      choices: [
        "Appliquer une formule",
        "Donner une réponse rapide",
        "Enchaîner des étapes cohérentes",
        "Faire un calcul mental"
      ],
      correct: 2,
      solution_steps: [
        "Un raisonnement logique suit des étapes.",
        "Chaque étape s’appuie sur la précédente."
      ],
      frequent_errors: [
        "Donner une réponse sans justification"
      ],
      jury_logic: "Le jury attend une démarche argumentée."
    },

    {
      question: "Si tous les carrés sont des rectangles, alors :",
      choices: [
        "Tous les rectangles sont des carrés",
        "Un carré n’est pas un rectangle",
        "Un carré est un rectangle",
        "Aucune relation n’existe"
      ],
      correct: 2,
      solution_steps: [
        "Le carré possède les propriétés du rectangle.",
        "Il est donc inclus dans l’ensemble des rectangles."
      ],
      frequent_errors: [
        "Confondre inclusion et égalité"
      ],
      jury_logic: "Le jury attend une logique d’inclusion des ensembles."
    },

    {
      question: "Quelle phrase correspond à un raisonnement correct ?",
      choices: [
        "Il pleut, donc il fait froid",
        "Tous les multiples de 4 sont pairs, donc 8 est pair",
        "8 est pair, donc il est multiple de 4",
        "Il fait nuit, donc il est tard"
      ],
      correct: 1,
      solution_steps: [
        "Tous les multiples de 4 sont pairs.",
        "8 est un multiple de 4.",
        "Donc 8 est pair."
      ],
      frequent_errors: [
        "Confondre condition suffisante et nécessaire"
      ],
      jury_logic: "Le jury attend une logique rigoureuse."
    },

    {
      question: "Dans un raisonnement, à quoi sert un contre-exemple ?",
      choices: [
        "À confirmer une règle",
        "À illustrer une règle",
        "À montrer qu’une affirmation est fausse",
        "À compliquer"
      ],
      correct: 2,
      solution_steps: [
        "Un contre-exemple invalide une affirmation générale.",
        "Un seul suffit."
      ],
      frequent_errors: [
        "Chercher plusieurs contre-exemples"
      ],
      jury_logic: "Le jury attend la maîtrise du raisonnement par réfutation."
    },

    {
      question: "Quel est le contraire logique de « tous » ?",
      choices: ["Aucun", "Un seul", "Au moins un", "Toujours"],
      correct: 2,
      solution_steps: [
        "Le contraire de « tous » est « au moins un n’est pas ».",
        "Cela correspond à « il existe au moins un »."
      ],
      frequent_errors: [
        "Répondre « aucun »"
      ],
      jury_logic: "Le jury attend une maîtrise de la logique des quantificateurs."
    },

    {
      question: "Si une affirmation est vraie pour tous les cas observés, alors :",
      choices: [
        "Elle est forcément vraie",
        "Elle est toujours fausse",
        "Elle peut être vraie mais doit être prouvée",
        "Elle devient une règle"
      ],
      correct: 2,
      solution_steps: [
        "Observer ne suffit pas.",
        "Il faut démontrer."
      ],
      frequent_errors: [
        "Confondre observation et démonstration"
      ],
      jury_logic: "Le jury attend une distinction preuve / exemple."
    },

    {
      question: "Pourquoi demander à un élève de justifier sa réponse ?",
      choices: [
        "Pour le ralentir",
        "Pour vérifier le raisonnement",
        "Pour compliquer",
        "Pour sanctionner"
      ],
      correct: 1,
      solution_steps: [
        "La justification montre la logique utilisée.",
        "Elle permet de comprendre l’erreur."
      ],
      frequent_errors: [
        "Accepter une réponse juste sans explication"
      ],
      jury_logic: "Le jury attend une posture didactique."
    },

    {
      question: "Quelle est une erreur logique fréquente chez les élèves ?",
      choices: [
        "Vérifier",
        "Généraliser à partir d’un exemple",
        "Chercher un contre-exemple",
        "Justifier"
      ],
      correct: 1,
      solution_steps: [
        "Un exemple ne prouve pas une règle.",
        "Il faut une justification générale."
      ],
      frequent_errors: [
        "Confondre exemple et preuve"
      ],
      jury_logic: "Le jury attend une analyse des erreurs de raisonnement."
    },

    {
      question: "Quel raisonnement est valide ?",
      choices: [
        "Si A alors B, B est vrai donc A est vrai",
        "Si A alors B, A est vrai donc B est vrai",
        "A est faux donc B est faux",
        "B est vrai donc A est vrai"
      ],
      correct: 1,
      solution_steps: [
        "C’est un raisonnement de type implication.",
        "A entraîne B."
      ],
      frequent_errors: [
        "Confondre implication et équivalence"
      ],
      jury_logic: "Le jury attend une logique formelle élémentaire."
    },

    {
      question: "Pourquoi utiliser des problèmes de logique à l’école ?",
      choices: [
        "Pour faire réfléchir",
        "Pour faire des calculs",
        "Pour réciter",
        "Pour évaluer uniquement"
      ],
      correct: 0,
      solution_steps: [
        "La logique développe le raisonnement.",
        "Elle structure la pensée."
      ],
      frequent_errors: [
        "Voir la logique comme un jeu sans intérêt"
      ],
      jury_logic: "Le jury attend une vision formatrice de la logique."
    },

    {
      question: "Quel est le rôle de la logique en mathématiques ?",
      choices: [
        "Décorer les calculs",
        "Justifier les résultats",
        "Remplacer les calculs",
        "Accélérer"
      ],
      correct: 1,
      solution_steps: [
        "La logique permet de démontrer.",
        "Elle garantit la validité."
      ],
      frequent_errors: [
        "Se contenter du résultat"
      ],
      jury_logic: "Le jury attend une rigueur argumentative."
    },

    {
      question: "Pourquoi confronter les raisonnements des élèves ?",
      choices: [
        "Pour noter",
        "Pour enrichir la compréhension",
        "Pour imposer une réponse",
        "Pour aller plus vite"
      ],
      correct: 1,
      solution_steps: [
        "Comparer les démarches éclaire les erreurs.",
        "Cela renforce la compréhension."
      ],
      frequent_errors: [
        "Chercher une seule méthode"
      ],
      jury_logic: "Le jury attend une pédagogie du débat mathématique."
    },

    {
      question: "Quelle est la posture attendue de l’enseignant en logique ?",
      choices: [
        "Donner la solution",
        "Guider le raisonnement",
        "Corriger sans expliquer",
        "Accélérer"
      ],
      correct: 1,
      solution_steps: [
        "L’enseignant accompagne la réflexion.",
        "Il explicite les étapes."
      ],
      frequent_errors: [
        "Posture magistrale exclusive"
      ],
      jury_logic: "Le jury attend une posture d’accompagnement."
    },

    {
      question: "Pourquoi accepter plusieurs démarches correctes ?",
      choices: [
        "Pour faire plaisir",
        "Parce qu’un problème peut avoir plusieurs raisonnements",
        "Pour éviter d’expliquer",
        "Pour noter"
      ],
      correct: 1,
      solution_steps: [
        "Plusieurs raisonnements peuvent être valides.",
        "L’important est la cohérence."
      ],
      frequent_errors: [
        "Imposer une seule méthode"
      ],
      jury_logic: "Le jury attend une ouverture didactique."
    },

    {
      question: "Quel est le danger d’un raisonnement intuitif non vérifié ?",
      choices: [
        "Il est lent",
        "Il peut être faux",
        "Il est inutile",
        "Il est interdit"
      ],
      correct: 1,
      solution_steps: [
        "L’intuition peut tromper.",
        "La logique permet de vérifier."
      ],
      frequent_errors: [
        "Faire confiance à l’évidence"
      ],
      jury_logic: "Le jury attend une posture critique."
    },

    {
      question: "Pourquoi demander des explications même si la réponse est juste ?",
      choices: [
        "Pour compliquer",
        "Pour vérifier la compréhension",
        "Pour sanctionner",
        "Pour perdre du temps"
      ],
      correct: 1,
      solution_steps: [
        "Une réponse juste peut être due au hasard.",
        "L’explication valide la compréhension."
      ],
      frequent_errors: [
        "Valider sans justification"
      ],
      jury_logic: "Le jury attend une évaluation du raisonnement."
    },

    {
      question: "Quelle compétence logique est centrale au CRPE ?",
      choices: [
        "Calculer vite",
        "Justifier et argumenter",
        "Réciter",
        "Appliquer mécaniquement"
      ],
      correct: 1,
      solution_steps: [
        "Le CRPE évalue un futur enseignant.",
        "La justification est centrale."
      ],
      frequent_errors: [
        "Réponses brutes"
      ],
      jury_logic: "Le jury attend une posture professionnelle."
    },

    {
      question: "Pourquoi la logique est-elle transversale en mathématiques ?",
      choices: [
        "Parce qu’elle est optionnelle",
        "Parce qu’elle intervient dans tous les domaines",
        "Parce qu’elle est récente",
        "Parce qu’elle est facile"
      ],
      correct: 1,
      solution_steps: [
        "Tout raisonnement mathématique repose sur la logique."
      ],
      frequent_errors: [
        "La traiter comme un chapitre isolé"
      ],
      jury_logic: "Le jury attend une vision globale."
    },

    {
      question: "Quel est l’objectif final de l’enseignement de la logique ?",
      choices: [
        "Réussir les évaluations",
        "Former des élèves capables de raisonner",
        "Réciter des règles",
        "Aller vite"
      ],
      correct: 1,
      solution_steps: [
        "La logique forme l’esprit critique.",
        "Elle dépasse les mathématiques."
      ],
      frequent_errors: [
        "Vision scolaire limitée"
      ],
      jury_logic: "Le jury attend une formation du citoyen."
    },

    {
      question: "Quelle est l’attente principale du jury CRPE en logique ?",
      choices: [
        "La rapidité",
        "La récitation",
        "Le raisonnement structuré et justifié",
        "La quantité d’exercices"
      ],
      correct: 2,
      solution_steps: [
        "Le jury attend des raisonnements explicites.",
        "La structure est essentielle."
      ],
      frequent_errors: [
        "Réponse sans justification"
      ],
      jury_logic: "Le jury attend une posture réflexive."
    }

  ]
};
