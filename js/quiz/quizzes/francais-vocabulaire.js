export const quiz = {
  id: "francais-vocabulaire",
  matiere: "Français",
  chapitre: "Vocabulaire",

  questions: [

    {
      question: "Que sont deux mots synonymes ?",
      choices: [
        "Deux mots qui s’écrivent pareil",
        "Deux mots de sens proche",
        "Deux mots de sens contraire",
        "Deux mots de même nature"
      ],
      correct: 1,
      solution_steps: [
        "Les synonymes ont un sens proche.",
        "Ils peuvent souvent se remplacer dans une phrase."
      ],
      frequent_errors: [
        "Confondre synonyme et homonyme"
      ],
      jury_logic: "Le jury attend une définition précise des relations de sens."
    },

    {
      question: "Que sont deux mots antonymes ?",
      choices: [
        "Deux mots identiques",
        "Deux mots de sens proche",
        "Deux mots de sens contraire",
        "Deux mots de même famille"
      ],
      correct: 2,
      solution_steps: [
        "Les antonymes expriment des sens opposés.",
        "Exemple : grand / petit."
      ],
      frequent_errors: [
        "Confondre antonyme et synonyme"
      ],
      jury_logic: "Le jury attend une maîtrise du vocabulaire de base."
    },

    {
      question: "Que signifie le mot « polysémie » ?",
      choices: [
        "Un mot qui n’a qu’un sens",
        "Un mot qui a plusieurs sens",
        "Un mot de sens contraire",
        "Un mot rare"
      ],
      correct: 1,
      solution_steps: [
        "Un mot polysémique possède plusieurs sens.",
        "Le sens dépend du contexte."
      ],
      frequent_errors: [
        "Penser qu’un mot a toujours un seul sens"
      ],
      jury_logic: "Le jury attend la compréhension du rôle du contexte."
    },

    {
      question: "Dans « la clé du problème », le mot « clé » est utilisé :",
      choices: [
        "Au sens propre",
        "Au sens figuré",
        "Au sens technique",
        "Au sens scientifique"
      ],
      correct: 1,
      solution_steps: [
        "Il ne s’agit pas d’un objet réel.",
        "Le mot est utilisé de manière imagée."
      ],
      frequent_errors: [
        "Chercher un objet réel"
      ],
      jury_logic: "Le jury attend la distinction sens propre / sens figuré."
    },

    {
      question: "Que signifie le préfixe « re- » ?",
      choices: [
        "Négation",
        "Répétition",
        "Opposition",
        "Lieu"
      ],
      correct: 1,
      solution_steps: [
        "Le préfixe « re- » indique souvent l’idée de recommencement.",
        "Exemple : refaire."
      ],
      frequent_errors: [
        "Croire que tous les préfixes ont le même sens"
      ],
      jury_logic: "Le jury attend la connaissance des éléments de formation des mots."
    },

    {
      question: "Que permet la connaissance des familles de mots ?",
      choices: [
        "De réciter des listes",
        "De comprendre et orthographier",
        "De parler plus vite",
        "De mémoriser sans réfléchir"
      ],
      correct: 1,
      solution_steps: [
        "Les mots d’une même famille partagent un sens commun.",
        "Cela aide à comprendre et à écrire correctement."
      ],
      frequent_errors: [
        "Apprendre les mots isolément"
      ],
      jury_logic: "Le jury valorise les stratégies lexicales."
    },

    {
      question: "Que sont des homonymes ?",
      choices: [
        "Des mots de même sens",
        "Des mots de sens contraire",
        "Des mots qui se prononcent ou s’écrivent pareil",
        "Des mots rares"
      ],
      correct: 2,
      solution_steps: [
        "Les homonymes ont la même prononciation ou orthographe.",
        "Mais un sens différent."
      ],
      frequent_errors: [
        "Confondre homonyme et synonyme"
      ],
      jury_logic: "Le jury attend une maîtrise des relations lexicales."
    },

    {
      question: "Dans « un banc de poissons », le mot « banc » signifie :",
      choices: [
        "Un meuble",
        "Un groupe",
        "Une école",
        "Un lieu"
      ],
      correct: 1,
      solution_steps: [
        "Le contexte indique un ensemble d’animaux.",
        "Le mot change de sens selon le contexte."
      ],
      frequent_errors: [
        "Choisir le sens le plus courant"
      ],
      jury_logic: "Le jury attend une analyse contextualisée du vocabulaire."
    },

    {
      question: "Pourquoi travailler les champs lexicaux ?",
      choices: [
        "Pour apprendre des mots au hasard",
        "Pour enrichir la compréhension des textes",
        "Pour faire des listes",
        "Pour mémoriser sans contexte"
      ],
      correct: 1,
      solution_steps: [
        "Un champ lexical regroupe des mots liés à un thème.",
        "Il aide à comprendre l’univers du texte."
      ],
      frequent_errors: [
        "Chercher un seul mot"
      ],
      jury_logic: "Le jury valorise le lien vocabulaire / compréhension."
    },

    {
      question: "Quel est l’intérêt des synonymes dans un texte ?",
      choices: [
        "Répéter",
        "Éviter les répétitions",
        "Rendre le texte plus long",
        "Changer le sujet"
      ],
      correct: 1,
      solution_steps: [
        "Les synonymes permettent de varier le vocabulaire.",
        "Ils améliorent la qualité du texte."
      ],
      frequent_errors: [
        "Croire que les synonymes sont toujours interchangeables"
      ],
      jury_logic: "Le jury attend une utilisation réfléchie des synonymes."
    },

    {
      question: "Pourquoi le contexte est-il essentiel pour comprendre un mot ?",
      choices: [
        "Parce que le dictionnaire est inutile",
        "Parce que les mots peuvent avoir plusieurs sens",
        "Parce que le mot change d’orthographe",
        "Parce que le contexte est décoratif"
      ],
      correct: 1,
      solution_steps: [
        "Un mot peut être polysémique.",
        "Le contexte permet de choisir le bon sens."
      ],
      frequent_errors: [
        "Isoler le mot de la phrase"
      ],
      jury_logic: "Le jury attend une compréhension fine du lexique."
    },

    {
      question: "Que signifie le suffixe « -able » ?",
      choices: [
        "Qui fait peur",
        "Qui peut être",
        "Qui est fini",
        "Qui est interdit"
      ],
      correct: 1,
      solution_steps: [
        "« -able » exprime une possibilité.",
        "Exemple : lavable."
      ],
      frequent_errors: [
        "Apprendre sans exemples"
      ],
      jury_logic: "Le jury attend la maîtrise des suffixes courants."
    },

    {
      question: "Pourquoi enseigner le vocabulaire à l’école ?",
      choices: [
        "Pour réciter des listes",
        "Pour améliorer la compréhension et l’expression",
        "Pour faire des contrôles",
        "Pour compliquer la langue"
      ],
      correct: 1,
      solution_steps: [
        "Un vocabulaire riche améliore lecture et écriture.",
        "Il favorise la réussite scolaire."
      ],
      frequent_errors: [
        "Vision quantitative du vocabulaire"
      ],
      jury_logic: "Le jury valorise un vocabulaire au service du sens."
    },

    {
      question: "Quelle est une erreur fréquente des élèves en vocabulaire ?",
      choices: [
        "Analyser le contexte",
        "Chercher le sens exact",
        "Choisir le premier sens du dictionnaire",
        "Comparer plusieurs phrases"
      ],
      correct: 2,
      solution_steps: [
        "Les élèves prennent souvent le premier sens proposé.",
        "Sans vérifier le contexte."
      ],
      frequent_errors: [
        "Lecture superficielle"
      ],
      jury_logic: "Le jury attend une analyse des erreurs d’élèves."
    },

    {
      question: "Pourquoi relier vocabulaire et lecture ?",
      choices: [
        "Pour gagner du temps",
        "Pour mieux comprendre les textes",
        "Pour réciter des mots",
        "Pour évaluer plus vite"
      ],
      correct: 1,
      solution_steps: [
        "La compréhension dépend du lexique.",
        "Plus le vocabulaire est riche, meilleure est la lecture."
      ],
      frequent_errors: [
        "Travailler le vocabulaire isolément"
      ],
      jury_logic: "Le jury attend une vision intégrée des apprentissages."
    },

    {
      question: "Quel est l’objectif didactique principal en vocabulaire ?",
      choices: [
        "Accumuler des mots",
        "Construire des stratégies de compréhension",
        "Faire apprendre par cœur",
        "Multiplier les exercices"
      ],
      correct: 1,
      solution_steps: [
        "L’élève doit apprendre à comprendre des mots nouveaux.",
        "Les stratégies sont transférables."
      ],
      frequent_errors: [
        "Vision mécanique du lexique"
      ],
      jury_logic: "Le jury attend une démarche stratégique."
    },

    {
      question: "Pourquoi travailler les mots en réseau ?",
      choices: [
        "Pour faire des tableaux",
        "Pour relier les sens entre eux",
        "Pour réciter",
        "Pour noter"
      ],
      correct: 1,
      solution_steps: [
        "Les mots sont liés par le sens.",
        "Les réseaux facilitent la mémorisation."
      ],
      frequent_errors: [
        "Apprendre les mots isolément"
      ],
      jury_logic: "Le jury valorise une approche structurée du lexique."
    },

    {
      question: "Quelle posture adopter face aux erreurs lexicales ?",
      choices: [
        "Punitive",
        "Indifférente",
        "Accompagnante",
        "Autoritaire"
      ],
      correct: 2,
      solution_steps: [
        "L’erreur est un indicateur.",
        "Elle permet de construire le sens."
      ],
      frequent_errors: [
        "Sanctionner sans expliquer"
      ],
      jury_logic: "Le jury attend une posture bienveillante."
    },

    {
      question: "Quelle est l’attente principale du jury CRPE en vocabulaire ?",
      choices: [
        "La quantité de mots",
        "La récitation",
        "La compréhension et le raisonnement",
        "La rapidité"
      ],
      correct: 2,
      solution_steps: [
        "Le jury attend un futur enseignant.",
        "Il valorise le raisonnement."
      ],
      frequent_errors: [
        "Réponses sans justification"
      ],
      jury_logic: "Le jury attend une posture professionnelle."
    }

  ]
};
