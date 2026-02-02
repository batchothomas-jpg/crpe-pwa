export const quiz = {
  id: "maths-mesures",
  matiere: "Mathématiques",
  chapitre: "Grandeurs et mesures",

  questions: [

    {
      question: "Quelle grandeur mesure-t-on en mètres ?",
      choices: ["La masse", "La durée", "La longueur", "La capacité"],
      correct: 2,
      solution_steps: [
        "Le mètre est l’unité de base de la longueur.",
        "Il permet de mesurer des distances."
      ],
      frequent_errors: [
        "Confondre longueur et masse"
      ],
      jury_logic: "Le jury attend une maîtrise des unités de base."
    },

    {
      question: "Quelle est l’unité de masse la plus utilisée au quotidien ?",
      choices: ["La tonne", "Le gramme", "Le kilogramme", "Le milligramme"],
      correct: 2,
      solution_steps: [
        "Le kilogramme est l’unité de référence pour la masse.",
        "Il correspond à des objets usuels."
      ],
      frequent_errors: [
        "Utiliser le gramme pour de grandes masses"
      ],
      jury_logic: "Le jury attend une cohérence unité / situation."
    },

    {
      question: "Combien y a-t-il de centimètres dans 1 mètre ?",
      choices: ["10", "100", "1 000", "0,01"],
      correct: 1,
      solution_steps: [
        "1 mètre = 100 centimètres."
      ],
      frequent_errors: [
        "Confondre cm et mm"
      ],
      jury_logic: "Le jury attend la connaissance des équivalences."
    },

    {
      question: "Quel instrument permet de mesurer un angle ?",
      choices: ["La règle", "L’équerre", "Le compas", "Le rapporteur"],
      correct: 3,
      solution_steps: [
        "Le rapporteur est conçu pour mesurer des angles."
      ],
      frequent_errors: [
        "Utiliser l’équerre pour mesurer n’importe quel angle"
      ],
      jury_logic: "Le jury attend la maîtrise des instruments de mesure."
    },

    {
      question: "Quelle est l’unité utilisée pour mesurer une durée ?",
      choices: ["Le litre", "Le mètre", "La seconde", "Le kilogramme"],
      correct: 2,
      solution_steps: [
        "La seconde est l’unité de base du temps."
      ],
      frequent_errors: [
        "Confondre temps et longueur"
      ],
      jury_logic: "Le jury attend une connaissance des grandeurs fondamentales."
    },

    {
      question: "Combien y a-t-il de minutes dans 2 heures ?",
      choices: ["60", "100", "120", "180"],
      correct: 2,
      solution_steps: [
        "1 heure = 60 minutes.",
        "2 heures = 2 × 60 = 120 minutes."
      ],
      frequent_errors: [
        "Oublier la multiplication"
      ],
      jury_logic: "Le jury attend une conversion maîtrisée."
    },

    {
      question: "Quelle unité permet de mesurer une capacité ?",
      choices: ["Le mètre", "Le litre", "Le kilogramme", "La seconde"],
      correct: 1,
      solution_steps: [
        "Le litre est utilisé pour mesurer des volumes de liquides."
      ],
      frequent_errors: [
        "Confondre masse et capacité"
      ],
      jury_logic: "Le jury attend la distinction entre les grandeurs."
    },

    {
      question: "Pourquoi convertir des unités ?",
      choices: [
        "Pour compliquer",
        "Pour comparer ou calculer correctement",
        "Pour réciter",
        "Pour évaluer"
      ],
      correct: 1,
      solution_steps: [
        "Les calculs nécessitent des unités identiques.",
        "La conversion assure la cohérence."
      ],
      frequent_errors: [
        "Additionner des grandeurs non converties"
      ],
      jury_logic: "Le jury attend une rigueur mathématique."
    },

    {
      question: "Quelle est une erreur fréquente des élèves en mesures ?",
      choices: [
        "Convertir",
        "Choisir une unité incohérente",
        "Vérifier le résultat",
        "Lire l’énoncé"
      ],
      correct: 1,
      solution_steps: [
        "Les élèves choisissent parfois une unité inadaptée.",
        "Cela conduit à des résultats absurdes."
      ],
      frequent_errors: [
        "Mesurer une distance en grammes"
      ],
      jury_logic: "Le jury attend une analyse des erreurs d’élèves."
    },

    {
      question: "Pourquoi estimer avant de mesurer ou calculer ?",
      choices: [
        "Pour perdre du temps",
        "Pour vérifier la cohérence",
        "Pour éviter les conversions",
        "Pour noter"
      ],
      correct: 1,
      solution_steps: [
        "L’estimation donne un ordre de grandeur.",
        "Elle permet de repérer une erreur."
      ],
      frequent_errors: [
        "Accepter un résultat incohérent"
      ],
      jury_logic: "Le jury attend une démarche réflexive."
    },

    {
      question: "Quelle unité est la plus adaptée pour mesurer la longueur d’une salle de classe ?",
      choices: ["Le millimètre", "Le centimètre", "Le mètre", "Le kilomètre"],
      correct: 2,
      solution_steps: [
        "La salle mesure plusieurs mètres.",
        "Le mètre est l’unité adaptée."
      ],
      frequent_errors: [
        "Choisir une unité trop petite ou trop grande"
      ],
      jury_logic: "Le jury attend une adéquation unité / situation."
    },

    {
      question: "Quel instrument permet de mesurer une masse ?",
      choices: ["La règle", "Le thermomètre", "La balance", "Le chronomètre"],
      correct: 2,
      solution_steps: [
        "La balance permet de mesurer la masse."
      ],
      frequent_errors: [
        "Confondre masse et poids"
      ],
      jury_logic: "Le jury attend la maîtrise des instruments usuels."
    },

    {
      question: "Pourquoi enseigner les grandeurs et mesures à l’école primaire ?",
      choices: [
        "Pour réciter des unités",
        "Pour comprendre le monde réel",
        "Pour faire des tableaux",
        "Pour évaluer"
      ],
      correct: 1,
      solution_steps: [
        "Les grandeurs sont présentes dans la vie quotidienne.",
        "Elles donnent du sens aux mathématiques."
      ],
      frequent_errors: [
        "Apprentissage décontextualisé"
      ],
      jury_logic: "Le jury attend une approche fonctionnelle."
    },

    {
      question: "Quelle est la relation entre aire et périmètre ?",
      choices: [
        "Ce sont la même chose",
        "Ils mesurent des grandeurs différentes",
        "Ils ont la même unité",
        "Ils sont toujours proportionnels"
      ],
      correct: 1,
      solution_steps: [
        "Le périmètre mesure un contour.",
        "L’aire mesure une surface."
      ],
      frequent_errors: [
        "Confondre aire et périmètre"
      ],
      jury_logic: "Le jury attend une distinction claire des notions."
    },

    {
      question: "Quelle unité utilise-t-on pour mesurer une aire ?",
      choices: ["Le mètre", "Le mètre carré", "Le litre", "Le kilogramme"],
      correct: 1,
      solution_steps: [
        "L’aire s’exprime en unités carrées.",
        "Exemple : m²."
      ],
      frequent_errors: [
        "Utiliser des unités de longueur"
      ],
      jury_logic: "Le jury attend une rigueur dans les unités."
    },

    {
      question: "Pourquoi manipuler avant de formaliser en mesures ?",
      choices: [
        "Pour jouer",
        "Pour rendre les notions concrètes",
        "Pour éviter l’écrit",
        "Pour gagner du temps"
      ],
      correct: 1,
      solution_steps: [
        "La manipulation aide à comprendre.",
        "Elle prépare à l’abstraction."
      ],
      frequent_errors: [
        "Passer directement aux formules"
      ],
      jury_logic: "Le jury attend des démarches progressives."
    },

    {
      question: "Quelle posture adopter face aux erreurs en mesures ?",
      choices: [
        "Punitive",
        "Indifférente",
        "Analytique et accompagnante",
        "Autoritaire"
      ],
      correct: 2,
      solution_steps: [
        "L’erreur montre une incompréhension.",
        "Elle est un levier d’apprentissage."
      ],
      frequent_errors: [
        "Corriger sans expliquer"
      ],
      jury_logic: "Le jury attend une posture professionnelle."
    },

    {
      question: "Pourquoi relier grandeurs, mesures et calculs ?",
      choices: [
        "Pour faire plus d’exercices",
        "Parce qu’elles se complètent",
        "Pour noter",
        "Pour compliquer"
      ],
      correct: 1,
      solution_steps: [
        "Les conversions et calculs sont liés.",
        "Ils renforcent la compréhension."
      ],
      frequent_errors: [
        "Isoler les domaines"
      ],
      jury_logic: "Le jury attend une vision cohérente des mathématiques."
    },

    {
      question: "Quelle est l’attente principale du jury CRPE en grandeurs et mesures ?",
      choices: [
        "La rapidité",
        "La récitation",
        "Le raisonnement et la justification",
        "La quantité d’exercices"
      ],
      correct: 2,
      solution_steps: [
        "Le jury évalue la compréhension.",
        "Les justifications sont essentielles."
      ],
      frequent_errors: [
        "Réponse juste sans explication"
      ],
      jury_logic: "Le jury attend une posture réflexive."
    }

  ]
};
