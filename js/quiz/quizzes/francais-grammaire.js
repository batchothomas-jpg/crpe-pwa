export const quiz = {
  id: "francais-grammaire",
  matiere: "Français",
  chapitre: "Grammaire",

  questions: [

    {
      question: "Quelle est la nature du mot « rapidement » ?",
      choices: ["Nom", "Adjectif", "Verbe", "Adverbe"],
      correct: 3,
      solution_steps: [
        "« Rapidement » modifie un verbe.",
        "Un mot qui modifie un verbe est un adverbe."
      ],
      frequent_errors: [
        "Confondre adverbe et adjectif"
      ],
      jury_logic: "Le jury attend une identification correcte de la nature des mots."
    },

    {
      question: "Quelle est la fonction du groupe nominal dans « Le chat mange » ?",
      choices: ["COD", "Sujet", "COI", "Attribut"],
      correct: 1,
      solution_steps: [
        "On cherche qui fait l’action.",
        "C’est « le chat » qui mange."
      ],
      frequent_errors: [
        "Chercher la fonction sans poser la question"
      ],
      jury_logic: "Le jury attend une analyse syntaxique rigoureuse."
    },

    {
      question: "Dans « Il parle à son ami », quelle est la fonction de « à son ami » ?",
      choices: ["COD", "Sujet", "COI", "Attribut"],
      correct: 2,
      solution_steps: [
        "On pose la question « il parle à qui ? ».",
        "La réponse est introduite par « à »."
      ],
      frequent_errors: [
        "Confondre COD et COI"
      ],
      jury_logic: "Le jury attend la maîtrise des compléments du verbe."
    },

    {
      question: "Quelle est la nature du mot « que » dans « Je pense que tu viens » ?",
      choices: ["Pronom", "Déterminant", "Conjonction de subordination", "Adverbe"],
      correct: 2,
      solution_steps: [
        "« Que » introduit une proposition subordonnée.",
        "Il relie deux propositions."
      ],
      frequent_errors: [
        "Dire que « que » est toujours un pronom"
      ],
      jury_logic: "Le jury attend une analyse contextuelle du mot « que »."
    },

    {
      question: "Quelle phrase contient un attribut du sujet ?",
      choices: [
        "Il mange une pomme",
        "Elle dort",
        "Il est fatigué",
        "Il parle à sa sœur"
      ],
      correct: 2,
      solution_steps: [
        "Le verbe « être » relie le sujet à une caractéristique.",
        "« Fatigué » donne une information sur le sujet."
      ],
      frequent_errors: [
        "Confondre attribut et COD"
      ],
      jury_logic: "Le jury attend la reconnaissance des constructions verbales."
    },

    {
      question: "Quelle est la fonction du mot « lentement » ?",
      choices: ["Sujet", "Complément du verbe", "Complément circonstanciel", "Attribut"],
      correct: 2,
      solution_steps: [
        "Il précise la manière.",
        "Il répond à la question « comment ? »."
      ],
      frequent_errors: [
        "Le confondre avec un COD"
      ],
      jury_logic: "Le jury attend une identification correcte des compléments."
    },

    {
      question: "Dans « La maison que j’ai vue », « que » est :",
      choices: [
        "Conjonction",
        "Pronom relatif",
        "Adverbe",
        "Déterminant"
      ],
      correct: 1,
      solution_steps: [
        "« Que » remplace « la maison ».",
        "Il relie deux propositions."
      ],
      frequent_errors: [
        "Confondre conjonction et pronom relatif"
      ],
      jury_logic: "Le jury attend la maîtrise des propositions relatives."
    },

    {
      question: "Quelle phrase contient un complément circonstanciel de temps ?",
      choices: [
        "Il mange une pomme",
        "Il part demain",
        "Il parle à son ami",
        "Il devient rouge"
      ],
      correct: 1,
      solution_steps: [
        "« Demain » indique quand se passe l’action."
      ],
      frequent_errors: [
        "Chercher un groupe long"
      ],
      jury_logic: "Le jury attend la reconnaissance des compléments circonstanciels."
    },

    {
      question: "Quelle est la nature du mot « ce » dans « ce livre » ?",
      choices: ["Pronom", "Déterminant", "Adjectif", "Adverbe"],
      correct: 1,
      solution_steps: [
        "« Ce » accompagne un nom.",
        "Il le détermine."
      ],
      frequent_errors: [
        "Confondre pronom et déterminant"
      ],
      jury_logic: "Le jury attend une analyse précise de la nature des mots."
    },

    {
      question: "Dans « Les enfants jouent », quel est le noyau du groupe sujet ?",
      choices: ["Les", "Enfants", "Jouent", "Les enfants"],
      correct: 1,
      solution_steps: [
        "Le noyau d’un groupe nominal est le nom.",
        "Ici, c’est « enfants »."
      ],
      frequent_errors: [
        "Donner tout le groupe comme noyau"
      ],
      jury_logic: "Le jury attend une analyse interne du groupe nominal."
    },

    {
      question: "Quelle phrase contient une proposition subordonnée ?",
      choices: [
        "Il mange",
        "Il court vite",
        "Je sais qu’il vient",
        "Il est fatigué"
      ],
      correct: 2,
      solution_steps: [
        "« Qu’il vient » dépend d’un autre verbe.",
        "Elle ne peut pas être seule."
      ],
      frequent_errors: [
        "Chercher uniquement la longueur de la phrase"
      ],
      jury_logic: "Le jury attend la compréhension de la phrase complexe."
    },

    {
      question: "Quel est le rôle du déterminant ?",
      choices: [
        "Remplacer un nom",
        "Préciser le nom",
        "Décrire une action",
        "Relier des phrases"
      ],
      correct: 1,
      solution_steps: [
        "Le déterminant accompagne le nom.",
        "Il en précise le sens."
      ],
      frequent_errors: [
        "Confondre avec l’adjectif"
      ],
      jury_logic: "Le jury attend la maîtrise du groupe nominal."
    },

    {
      question: "Dans « Elle devient rouge », « rouge » est :",
      choices: ["COD", "COI", "Attribut du sujet", "Complément circonstanciel"],
      correct: 2,
      solution_steps: [
        "Le verbe « devenir » est un verbe d’état.",
        "Il relie le sujet à une caractéristique."
      ],
      frequent_errors: [
        "Le confondre avec un adjectif épithète"
      ],
      jury_logic: "Le jury attend la distinction entre fonctions."
    },

    {
      question: "Pourquoi enseigner la grammaire à l’école ?",
      choices: [
        "Pour réciter des règles",
        "Pour écrire et comprendre des textes",
        "Pour faire des exercices",
        "Pour préparer les évaluations"
      ],
      correct: 1,
      solution_steps: [
        "La grammaire aide à structurer la langue.",
        "Elle sert la lecture et l’écriture."
      ],
      frequent_errors: [
        "Vision mécanique de la grammaire"
      ],
      jury_logic: "Le jury valorise une grammaire au service du sens."
    },

    {
      question: "Quelle est l’erreur fréquente des élèves en grammaire ?",
      choices: [
        "Trop réfléchir",
        "Appliquer une règle sans comprendre",
        "Lire les phrases",
        "Analyser le sens"
      ],
      correct: 1,
      solution_steps: [
        "Les élèves appliquent souvent des règles mécaniquement.",
        "Sans lien avec le sens."
      ],
      frequent_errors: [
        "Apprentissage par cœur"
      ],
      jury_logic: "Le jury attend une analyse des erreurs d’élèves."
    },

    {
      question: "Quelle est l’attente principale du jury CRPE en grammaire ?",
      choices: [
        "La rapidité",
        "La récitation",
        "Le raisonnement grammatical",
        "La quantité de notions"
      ],
      correct: 2,
      solution_steps: [
        "Le jury évalue un futur enseignant.",
        "Il attend une analyse claire et expliquée."
      ],
      frequent_errors: [
        "Réponse scolaire sans justification"
      ],
      jury_logic: "Le jury attend une posture professionnelle."
    },

    {
      question: "Pourquoi partir de phrases pour enseigner la grammaire ?",
      choices: [
        "Pour aller plus vite",
        "Pour donner du sens",
        "Pour faire plaisir",
        "Pour évaluer"
      ],
      correct: 1,
      solution_steps: [
        "La grammaire s’observe dans des phrases.",
        "Le sens guide l’analyse."
      ],
      frequent_errors: [
        "Commencer par des règles abstraites"
      ],
      jury_logic: "Le jury valorise une démarche inductive."
    },

    {
      question: "Quelle est la posture attendue de l’enseignant en grammaire ?",
      choices: [
        "Sanctionner",
        "Faire réciter",
        "Guider le raisonnement",
        "Aller vite"
      ],
      correct: 2,
      solution_steps: [
        "L’enseignant accompagne la réflexion.",
        "Il explicite les démarches."
      ],
      frequent_errors: [
        "Enseignement frontal"
      ],
      jury_logic: "Le jury attend une posture d’accompagnement."
    }

  ]
};
