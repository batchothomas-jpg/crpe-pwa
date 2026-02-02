export const quiz = {
  id: "technologie-1",
  title: "Technologie – CRPE",
  questions: [
    {
      question: "Quelle est la fonction d’usage principale d’une lampe ?",
      choices: [
        "Produire de la chaleur",
        "Éclairer",
        "Décorer",
        "Transmettre une information"
      ],
      correct: 1,

      solution_steps: [
        "La fonction d’usage correspond au service rendu à l’utilisateur.",
        "Une lampe sert avant tout à fournir de la lumière.",
        "La fonction d’usage est donc éclairer."
      ],

      frequent_errors: [
        "Confondre fonction d’usage et fonction technique.",
        "Choisir une fonction secondaire.",
        "Décrire le fonctionnement au lieu du service rendu."
      ],

      jury_logic: "Le jury vérifie la distinction entre fonction d’usage et fonctionnement technique."
    },

    {
      question: "À quoi correspond la chaîne d’énergie d’un objet technique ?",
      choices: [
        "À la forme de l’objet",
        "Au parcours de l’énergie dans l’objet",
        "À l’information envoyée à l’utilisateur",
        "Aux matériaux utilisés"
      ],
      correct: 1,

      solution_steps: [
        "La chaîne d’énergie décrit comment l’énergie est utilisée.",
        "Elle va de l’alimentation à l’action finale.",
        "Elle permet de comprendre le fonctionnement global de l’objet."
      ],

      frequent_errors: [
        "Confondre chaîne d’énergie et chaîne d’information.",
        "Répondre par une caractéristique physique.",
        "Ne pas relier la notion au fonctionnement."
      ],

      jury_logic: "Le jury attend une compréhension structurée des notions technologiques."
    }
  ]
};
