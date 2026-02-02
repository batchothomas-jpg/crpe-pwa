export const quiz = {
  id: "maths-proportionnalite",
  matiere: "Mathématiques",
  chapitre: "Proportionnalité",

  questions: [

    {
      question: "Qu’est-ce qu’une situation de proportionnalité ?",
      choices: [
        "Une situation où on ajoute toujours le même nombre",
        "Une situation où les grandeurs varient ensemble selon un coefficient",
        "Une situation avec des nombres décimaux",
        "Une situation avec des tableaux"
      ],
      correct: 1,
      solution_steps: [
        "Dans une situation de proportionnalité, les grandeurs sont liées.",
        "On peut passer de l’une à l’autre par une multiplication."
      ],
      frequent_errors: [
        "Confondre proportionnalité et addition répétée"
      ],
      jury_logic: "Le jury attend une définition précise fondée sur la relation multiplicative."
    },

    {
      question: "Quel outil permet de vérifier une situation de proportionnalité ?",
      choices: [
        "La droite numérique",
        "Le tableau de proportionnalité",
        "Le graphique circulaire",
        "La soustraction"
      ],
      correct: 1,
      solution_steps: [
        "Le tableau permet de comparer les rapports.",
        "Il met en évidence la relation multiplicative."
      ],
      frequent_errors: [
        "Utiliser le tableau sans vérifier les coefficients"
      ],
      jury_logic: "Le jury attend la maîtrise des outils de représentation."
    },

    {
      question: "Dans une situation de proportionnalité, si une grandeur double, l’autre :",
      choices: [
        "Augmente de 2",
        "Reste la même",
        "Double aussi",
        "Diminue"
      ],
      correct: 2,
      solution_steps: [
        "La relation est multiplicative.",
        "Multiplier par 2 entraîne un doublement."
      ],
      frequent_errors: [
        "Raisonner de manière additive"
      ],
      jury_logic: "Le jury attend la compréhension du lien multiplicatif."
    },

    {
      question: "Quel est le coefficient de proportionnalité ?",
      choices: [
        "La différence entre deux grandeurs",
        "Le nombre que l’on ajoute",
        "Le nombre par lequel on multiplie",
        "Le total"
      ],
      correct: 2,
      solution_steps: [
        "Le coefficient permet de passer d’une grandeur à l’autre.",
        "Il s’agit d’une multiplication."
      ],
      frequent_errors: [
        "Chercher une addition"
      ],
      jury_logic: "Le jury attend une définition claire du coefficient."
    },

    {
      question: "Si 3 stylos coûtent 6 €, combien coûtent 5 stylos ?",
      choices: ["8 €", "9 €", "10 €", "12 €"],
      correct: 2,
      solution_steps: [
        "On cherche le prix d’un stylo : 6 ÷ 3 = 2 €.",
        "5 × 2 = 10 €."
      ],
      frequent_errors: [
        "Multiplier directement 6 × 5"
      ],
      jury_logic: "Le jury attend une démarche structurée."
    },

    {
      question: "Pourquoi le passage par l’unité est-il efficace ?",
      choices: [
        "Parce qu’il est plus rapide",
        "Parce qu’il clarifie le raisonnement",
        "Parce qu’il évite les calculs",
        "Parce qu’il est obligatoire"
      ],
      correct: 1,
      solution_steps: [
        "Le passage par l’unité permet de comprendre la relation.",
        "Il sécurise les calculs."
      ],
      frequent_errors: [
        "Chercher une formule sans comprendre"
      ],
      jury_logic: "Le jury valorise les démarches explicites."
    },

    {
      question: "Quel graphique représente une situation de proportionnalité ?",
      choices: [
        "Une courbe",
        "Une droite passant par l’origine",
        "Une droite quelconque",
        "Un cercle"
      ],
      correct: 1,
      solution_steps: [
        "En proportionnalité, le graphique est une droite.",
        "Elle passe par l’origine (0,0)."
      ],
      frequent_errors: [
        "Oublier le passage par l’origine"
      ],
      jury_logic: "Le jury attend la maîtrise des représentations graphiques."
    },

    {
      question: "Quelle situation n’est PAS proportionnelle ?",
      choices: [
        "Le prix selon la quantité",
        "La distance selon le temps à vitesse constante",
        "L’âge d’un enfant selon les années",
        "La masse selon le nombre d’objets identiques"
      ],
      correct: 2,
      solution_steps: [
        "L’âge augmente d’1 chaque année.",
        "La relation est additive, pas multiplicative."
      ],
      frequent_errors: [
        "Croire que toute évolution est proportionnelle"
      ],
      jury_logic: "Le jury attend la capacité à distinguer proportionnel et non proportionnel."
    },

    {
      question: "Dans un tableau, comment reconnaît-on la proportionnalité ?",
      choices: [
        "Les lignes sont longues",
        "Les différences sont constantes",
        "Les rapports sont constants",
        "Les nombres sont entiers"
      ],
      correct: 2,
      solution_steps: [
        "On compare les quotients.",
        "Ils doivent être égaux."
      ],
      frequent_errors: [
        "Comparer uniquement les différences"
      ],
      jury_logic: "Le jury attend une vérification mathématique rigoureuse."
    },

    {
      question: "Quel est l’intérêt de la proportionnalité à l’école primaire ?",
      choices: [
        "Faire des tableaux",
        "Résoudre des problèmes du quotidien",
        "Apprendre des formules",
        "Évaluer les élèves"
      ],
      correct: 1,
      solution_steps: [
        "La proportionnalité est très présente dans la vie quotidienne.",
        "Elle donne du sens aux mathématiques."
      ],
      frequent_errors: [
        "Travailler la proportionnalité hors contexte"
      ],
      jury_logic: "Le jury attend une approche concrète et fonctionnelle."
    },

    {
      question: "Quelle est une erreur fréquente des élèves en proportionnalité ?",
      choices: [
        "Vérifier les résultats",
        "Raisonner de manière additive",
        "Utiliser des tableaux",
        "Passer par l’unité"
      ],
      correct: 1,
      solution_steps: [
        "Les élèves ajoutent au lieu de multiplier.",
        "Ils n’identifient pas la relation multiplicative."
      ],
      frequent_errors: [
        "Confusion addition / multiplication"
      ],
      jury_logic: "Le jury attend une analyse des erreurs d’élèves."
    },

    {
      question: "Pourquoi utiliser des situations variées en proportionnalité ?",
      choices: [
        "Pour compliquer",
        "Pour favoriser le transfert",
        "Pour aller plus vite",
        "Pour noter"
      ],
      correct: 1,
      solution_steps: [
        "Varier les contextes favorise la généralisation.",
        "Les élèves reconnaissent la structure."
      ],
      frequent_errors: [
        "Toujours proposer le même type de problème"
      ],
      jury_logic: "Le jury attend une démarche pédagogique réfléchie."
    },

    {
      question: "Quel est le rôle de l’enseignant en proportionnalité ?",
      choices: [
        "Donner la formule",
        "Guider le raisonnement",
        "Corriger uniquement",
        "Aller vite"
      ],
      correct: 1,
      solution_steps: [
        "L’enseignant aide à identifier la relation.",
        "Il explicite les démarches."
      ],
      frequent_errors: [
        "Donner des procédures sans sens"
      ],
      jury_logic: "Le jury attend une posture d’accompagnement."
    },

    {
      question: "Pourquoi éviter d’introduire trop tôt la règle de trois ?",
      choices: [
        "Parce qu’elle est inutile",
        "Parce qu’elle masque le raisonnement",
        "Parce qu’elle est fausse",
        "Parce qu’elle est interdite"
      ],
      correct: 1,
      solution_steps: [
        "La règle de trois peut devenir mécanique.",
        "Elle cache la relation multiplicative."
      ],
      frequent_errors: [
        "Application automatique"
      ],
      jury_logic: "Le jury attend une approche conceptuelle."
    },

    {
      question: "Quel est l’effet d’un coefficient inférieur à 1 ?",
      choices: [
        "La grandeur augmente",
        "La grandeur diminue",
        "La grandeur reste stable",
        "La grandeur disparaît"
      ],
      correct: 1,
      solution_steps: [
        "Multiplier par un nombre inférieur à 1 réduit.",
        "Exemple : × 0,5."
      ],
      frequent_errors: [
        "Croire que multiplier fait toujours augmenter"
      ],
      jury_logic: "Le jury attend la compréhension des effets multiplicatifs."
    },

    {
      question: "Pourquoi utiliser des graphiques en proportionnalité ?",
      choices: [
        "Pour décorer",
        "Pour visualiser la relation",
        "Pour éviter les calculs",
        "Pour gagner du temps"
      ],
      correct: 1,
      solution_steps: [
        "Les graphiques rendent visibles les relations.",
        "Ils renforcent la compréhension."
      ],
      frequent_errors: [
        "Tracer sans interpréter"
      ],
      jury_logic: "Le jury attend une lecture de graphique argumentée."
    },

    {
      question: "Quelle posture adopter face aux erreurs en proportionnalité ?",
      choices: [
        "Punitive",
        "Indifférente",
        "Analytique et accompagnante",
        "Autoritaire"
      ],
      correct: 2,
      solution_steps: [
        "L’erreur révèle le type de raisonnement.",
        "Elle permet d’ajuster l’enseignement."
      ],
      frequent_errors: [
        "Corriger sans expliquer"
      ],
      jury_logic: "Le jury attend une posture professionnelle."
    },

    {
      question: "Pourquoi relier proportionnalité et calculs ?",
      choices: [
        "Pour faire des exercices",
        "Parce que la proportionnalité repose sur le calcul",
        "Pour évaluer",
        "Pour compliquer"
      ],
      correct: 1,
      solution_steps: [
        "La proportionnalité mobilise multiplication et division.",
        "Elle renforce le sens des opérations."
      ],
      frequent_errors: [
        "Séparer artificiellement les domaines"
      ],
      jury_logic: "Le jury attend une vision cohérente des mathématiques."
    },

    {
      question: "Quelle est l’attente principale du jury CRPE en proportionnalité ?",
      choices: [
        "La rapidité",
        "La règle de trois",
        "Le raisonnement et la justification",
        "La quantité d’exercices"
      ],
      correct: 2,
      solution_steps: [
        "Le jury évalue un futur enseignant.",
        "Il attend des démarches explicitées."
      ],
      frequent_errors: [
        "Réponse juste sans justification"
      ],
      jury_logic: "Le jury attend une posture réflexive."
    }

  ]
};
