export const quiz = {
  id: "histoire-reperes",
  matiere: "Histoire",
  chapitre: "Se repérer dans le temps",

  questions: [

    {
      question: "À quoi sert la chronologie en histoire ?",
      choices: [
        "À apprendre des dates par cœur",
        "À ordonner les événements dans le temps",
        "À comparer des lieux",
        "À faire des calculs"
      ],
      correct: 1,
      solution_steps: [
        "La chronologie permet de situer les événements.",
        "Elle aide à comprendre les successions et les liens."
      ],
      frequent_errors: [
        "Apprendre des dates sans les relier"
      ],
      jury_logic: "Le jury attend une compréhension du temps historique."
    },

    {
      question: "Combien de grandes périodes distingue-t-on classiquement en histoire ?",
      choices: ["3", "4", "5", "6"],
      correct: 2,
      solution_steps: [
        "On distingue généralement 5 grandes périodes.",
        "Elles structurent l’enseignement de l’histoire."
      ],
      frequent_errors: [
        "Oublier une période"
      ],
      jury_logic: "Le jury attend les repères institutionnels."
    },

    {
      question: "Quelle période commence avec l’invention de l’écriture ?",
      choices: [
        "La Préhistoire",
        "L’Antiquité",
        "Le Moyen Âge",
        "Les Temps modernes"
      ],
      correct: 1,
      solution_steps: [
        "L’écriture marque l’entrée dans l’Histoire.",
        "Elle permet des sources écrites."
      ],
      frequent_errors: [
        "Confondre Préhistoire et Antiquité"
      ],
      jury_logic: "Le jury attend un repère fondamental."
    },

    {
      question: "Quelle période précède l’Antiquité ?",
      choices: [
        "Le Moyen Âge",
        "La Préhistoire",
        "Les Temps modernes",
        "L’époque contemporaine"
      ],
      correct: 1,
      solution_steps: [
        "La Préhistoire précède l’Histoire.",
        "Elle est marquée par l’absence d’écriture."
      ],
      frequent_errors: [
        "Penser que l’histoire commence toujours avec des dates"
      ],
      jury_logic: "Le jury attend la distinction avec et sans sources écrites."
    },

    {
      question: "Quel événement marque traditionnellement la fin de l’Antiquité ?",
      choices: [
        "La chute de l’Empire romain d’Occident",
        "La Révolution française",
        "La découverte de l’Amérique",
        "La naissance de Jésus-Christ"
      ],
      correct: 0,
      solution_steps: [
        "La chute de l’Empire romain d’Occident est un repère.",
        "Elle marque la fin de l’Antiquité."
      ],
      frequent_errors: [
        "Choisir un événement symbolique sans repère scolaire"
      ],
      jury_logic: "Le jury attend des repères chronologiques scolaires."
    },

    {
      question: "Quelle période suit l’Antiquité ?",
      choices: [
        "La Préhistoire",
        "Le Moyen Âge",
        "Les Temps modernes",
        "L’époque contemporaine"
      ],
      correct: 1,
      solution_steps: [
        "Le Moyen Âge suit l’Antiquité.",
        "Il s’étend sur plusieurs siècles."
      ],
      frequent_errors: [
        "Inverser les périodes"
      ],
      jury_logic: "Le jury attend une chronologie maîtrisée."
    },

    {
      question: "Quel événement marque traditionnellement le début des Temps modernes ?",
      choices: [
        "La chute de Rome",
        "La découverte de l’Amérique",
        "La Révolution française",
        "La Première Guerre mondiale"
      ],
      correct: 1,
      solution_steps: [
        "1492 est un repère majeur.",
        "Il marque le début des Temps modernes."
      ],
      frequent_errors: [
        "Confondre avec la Révolution française"
      ],
      jury_logic: "Le jury attend des repères datés."
    },

    {
      question: "Quelle période commence avec la Révolution française ?",
      choices: [
        "Les Temps modernes",
        "Le Moyen Âge",
        "L’époque contemporaine",
        "L’Antiquité"
      ],
      correct: 2,
      solution_steps: [
        "1789 marque l’entrée dans l’époque contemporaine.",
        "C’est un repère majeur."
      ],
      frequent_errors: [
        "Placer la Révolution dans les Temps modernes"
      ],
      jury_logic: "Le jury attend une périodisation claire."
    },

    {
      question: "Pourquoi découpe-t-on l’histoire en périodes ?",
      choices: [
        "Pour simplifier l’apprentissage",
        "Pour imposer une vision unique",
        "Pour éviter les dates",
        "Pour faire des tableaux"
      ],
      correct: 0,
      solution_steps: [
        "Les périodes aident à structurer le temps.",
        "Elles facilitent la compréhension."
      ],
      frequent_errors: [
        "Penser que les périodes sont des réalités fixes"
      ],
      jury_logic: "Le jury attend une réflexion critique sur la périodisation."
    },

    {
      question: "Qu’est-ce qu’un événement historique ?",
      choices: [
        "Un fait imaginaire",
        "Un fait important du passé",
        "Un fait actuel",
        "Un fait personnel"
      ],
      correct: 1,
      solution_steps: [
        "Un événement historique a une importance collective.",
        "Il est étudié par les historiens."
      ],
      frequent_errors: [
        "Confondre événement personnel et historique"
      ],
      jury_logic: "Le jury attend une définition rigoureuse."
    },

    {
      question: "Pourquoi utilise-t-on des frises chronologiques à l’école ?",
      choices: [
        "Pour décorer",
        "Pour visualiser le temps",
        "Pour réciter",
        "Pour noter"
      ],
      correct: 1,
      solution_steps: [
        "La frise rend visible la succession des événements.",
        "Elle aide à se repérer."
      ],
      frequent_errors: [
        "Utiliser la frise sans explication"
      ],
      jury_logic: "Le jury attend un usage pédagogique des outils."
    },

    {
      question: "Quelle est une erreur fréquente des élèves en histoire ?",
      choices: [
        "Comparer les périodes",
        "Confondre l’ordre des périodes",
        "Utiliser une frise",
        "Justifier"
      ],
      correct: 1,
      solution_steps: [
        "Les élèves inversent souvent les périodes.",
        "Le repérage temporel est difficile."
      ],
      frequent_errors: [
        "Mélanger Antiquité et Moyen Âge"
      ],
      jury_logic: "Le jury attend l’analyse des difficultés des élèves."
    },

    {
      question: "Pourquoi distinguer passé et présent ?",
      choices: [
        "Pour séparer les matières",
        "Pour comprendre les évolutions",
        "Pour éviter les comparaisons",
        "Pour noter"
      ],
      correct: 1,
      solution_steps: [
        "Comparer passé et présent montre les changements.",
        "Cela donne du sens à l’histoire."
      ],
      frequent_errors: [
        "Jugement anachronique"
      ],
      jury_logic: "Le jury attend une approche historique contextualisée."
    },

    {
      question: "Qu’est-ce qu’un repère chronologique ?",
      choices: [
        "Une date isolée",
        "Un événement permettant de se situer dans le temps",
        "Une période",
        "Un siècle"
      ],
      correct: 1,
      solution_steps: [
        "Le repère aide à situer d’autres événements.",
        "Il structure la chronologie."
      ],
      frequent_errors: [
        "Apprendre les dates sans lien"
      ],
      jury_logic: "Le jury attend une compréhension des repères."
    },

    {
      question: "Pourquoi enseigner l’histoire à l’école primaire ?",
      choices: [
        "Pour réciter des dates",
        "Pour comprendre le monde et le passé",
        "Pour faire des exercices",
        "Pour évaluer"
      ],
      correct: 1,
      solution_steps: [
        "L’histoire aide à comprendre la société.",
        "Elle forme des citoyens."
      ],
      frequent_errors: [
        "Vision uniquement mémorielle"
      ],
      jury_logic: "Le jury attend une finalité éducative."
    },

    {
      question: "Quelle démarche est historique ?",
      choices: [
        "Observer des documents, questionner, interpréter",
        "Deviner, répondre, corriger",
        "Lire, copier, réciter",
        "Regarder, apprendre"
      ],
      correct: 0,
      solution_steps: [
        "L’histoire repose sur l’étude de sources.",
        "L’interprétation est argumentée."
      ],
      frequent_errors: [
        "Raconter sans sources"
      ],
      jury_logic: "Le jury attend une méthodologie historique."
    },

    {
      question: "Quelle posture adopter face aux erreurs en histoire ?",
      choices: [
        "Punitive",
        "Indifférente",
        "Analytique et accompagnante",
        "Autoritaire"
      ],
      correct: 2,
      solution_steps: [
        "L’erreur révèle une difficulté de repérage.",
        "Elle permet de réajuster."
      ],
      frequent_errors: [
        "Corriger sans expliquer"
      ],
      jury_logic: "Le jury attend une posture professionnelle."
    },

    {
      question: "Pourquoi contextualiser un événement historique ?",
      choices: [
        "Pour compliquer",
        "Pour éviter les jugements anachroniques",
        "Pour réciter",
        "Pour noter"
      ],
      correct: 1,
      solution_steps: [
        "Le contexte explique les actions.",
        "Il évite les jugements actuels."
      ],
      frequent_errors: [
        "Juger le passé avec des critères actuels"
      ],
      jury_logic: "Le jury attend une rigueur historique."
    },

    {
      question: "Quel est l’objectif principal de l’enseignement de l’histoire ?",
      choices: [
        "Réciter",
        "Comprendre les sociétés humaines",
        "Faire des frises",
        "Réussir les évaluations"
      ],
      correct: 1,
      solution_steps: [
        "L’histoire permet de comprendre les sociétés.",
        "Elle développe l’esprit critique."
      ],
      frequent_errors: [
        "Accumuler des faits sans sens"
      ],
      jury_logic: "Le jury attend une formation intellectuelle."
    },

    {
      question: "Quelle est l’attente principale du jury CRPE en histoire ?",
      choices: [
        "La rapidité",
        "La récitation",
        "Le raisonnement historique expliqué",
        "La quantité de dates"
      ],
      correct: 2,
      solution_steps: [
        "Le jury attend une analyse expliquée.",
        "Le raisonnement est central."
      ],
      frequent_errors: [
        "Réponse juste sans justification"
      ],
      jury_logic: "Le jury attend une posture réflexive."
    }

  ]
};
