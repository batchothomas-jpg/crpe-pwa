export const quiz = {
  id: "francais-conjugaison",
  matiere: "Français",
  chapitre: "Conjugaison",

  questions: [

    {
      question: "Quelle est la valeur principale de l’imparfait dans un récit ?",
      choices: [
        "Exprimer une action brève",
        "Installer le décor et décrire",
        "Exprimer une action future",
        "Donner un ordre"
      ],
      correct: 1,
      solution_steps: [
        "L’imparfait ne sert pas à raconter une action ponctuelle.",
        "Il décrit une situation ou une habitude passée.",
        "Il installe l’arrière-plan du récit."
      ],
      frequent_errors: [
        "Confondre imparfait et passé composé",
        "Se fier uniquement à la terminaison"
      ],
      jury_logic: "Le jury attend une analyse du lien entre temps verbal et sens du texte."
    },

    {
      question: "Quel temps exprime une action terminée et datée dans le passé ?",
      choices: [
        "Imparfait",
        "Passé composé",
        "Présent",
        "Futur simple"
      ],
      correct: 1,
      solution_steps: [
        "Le passé composé exprime un fait achevé.",
        "Il est souvent lié à un moment précis."
      ],
      frequent_errors: [
        "Utiliser l’imparfait pour une action ponctuelle"
      ],
      jury_logic: "Le jury attend une distinction claire imparfait / passé composé."
    },

    {
      question: "Dans « Quand il arriva, la porte était fermée », quel temps installe le décor ?",
      choices: [
        "Arriva",
        "Était",
        "Quand",
        "Fermée"
      ],
      correct: 1,
      solution_steps: [
        "« Était » est à l’imparfait.",
        "Il décrit l’état de la porte."
      ],
      frequent_errors: [
        "Choisir le verbe au passé simple"
      ],
      jury_logic: "Le jury attend une lecture fine des valeurs des temps."
    },

    {
      question: "Quel temps est principalement utilisé à l’oral pour raconter le passé ?",
      choices: [
        "Passé simple",
        "Plus-que-parfait",
        "Passé composé",
        "Imparfait"
      ],
      correct: 2,
      solution_steps: [
        "Le passé composé est dominant à l’oral.",
        "Le passé simple est surtout écrit."
      ],
      frequent_errors: [
        "Confondre usage oral et écrit"
      ],
      jury_logic: "Le jury valorise la connaissance des usages réels de la langue."
    },

    {
      question: "Le futur simple peut exprimer :",
      choices: [
        "Seulement une action future",
        "Une promesse ou un ordre atténué",
        "Une action passée",
        "Une hypothèse"
      ],
      correct: 1,
      solution_steps: [
        "Le futur peut avoir une valeur injonctive.",
        "Exemple : « Tu feras cet exercice. »"
      ],
      frequent_errors: [
        "Limiter le futur à la chronologie"
      ],
      jury_logic: "Le jury attend la connaissance des valeurs non temporelles."
    },

    {
      question: "Quel mode exprime le doute, le souhait ou l’émotion ?",
      choices: [
        "Indicatif",
        "Impératif",
        "Conditionnel",
        "Subjonctif"
      ],
      correct: 3,
      solution_steps: [
        "Le subjonctif n’exprime pas le réel certain.",
        "Il dépend d’une autre proposition."
      ],
      frequent_errors: [
        "Réciter une liste sans comprendre le sens"
      ],
      jury_logic: "Le jury attend une compréhension sémantique du subjonctif."
    },

    {
      question: "Dans « Il faut que tu viennes », pourquoi utilise-t-on le subjonctif ?",
      choices: [
        "Parce que l’action est passée",
        "Parce que l’action est certaine",
        "Parce qu’il y a une obligation",
        "Parce que le sujet change"
      ],
      correct: 2,
      solution_steps: [
        "« Il faut que » exprime une nécessité.",
        "Le subjonctif traduit cette dépendance."
      ],
      frequent_errors: [
        "Chercher une règle mécanique"
      ],
      jury_logic: "Le jury attend une justification par le sens."
    },

    {
      question: "Quel temps exprime une action antérieure à une autre action passée ?",
      choices: [
        "Passé composé",
        "Imparfait",
        "Plus-que-parfait",
        "Futur antérieur"
      ],
      correct: 2,
      solution_steps: [
        "Le plus-que-parfait marque l’antériorité.",
        "Il est formé avec l’imparfait de l’auxiliaire."
      ],
      frequent_errors: [
        "Confondre antériorité et durée"
      ],
      jury_logic: "Le jury attend une chronologie rigoureuse."
    },

    {
      question: "Quel temps est surtout utilisé dans les récits littéraires écrits ?",
      choices: [
        "Passé composé",
        "Imparfait",
        "Passé simple",
        "Présent"
      ],
      correct: 2,
      solution_steps: [
        "Le passé simple est un temps narratif.",
        "Il est rare à l’oral."
      ],
      frequent_errors: [
        "Penser qu’il a disparu"
      ],
      jury_logic: "Le jury attend une distinction usage oral / écrit."
    },

    {
      question: "Quel mode est utilisé pour donner un ordre direct ?",
      choices: [
        "Indicatif",
        "Conditionnel",
        "Impératif",
        "Subjonctif"
      ],
      correct: 2,
      solution_steps: [
        "L’impératif sert à ordonner ou conseiller.",
        "Le sujet n’est pas exprimé."
      ],
      frequent_errors: [
        "Confondre impératif et futur"
      ],
      jury_logic: "Le jury attend une identification claire des modes."
    },

    {
      question: "Le conditionnel peut exprimer :",
      choices: [
        "Un fait certain",
        "Une action passée",
        "Une hypothèse ou une information incertaine",
        "Un ordre"
      ],
      correct: 2,
      solution_steps: [
        "Le conditionnel marque la réserve.",
        "Il est fréquent dans les médias."
      ],
      frequent_errors: [
        "Le confondre avec le futur"
      ],
      jury_logic: "Le jury valorise la distinction futur / conditionnel."
    },

    {
      question: "Quelle forme verbale n’est pas conjuguée ?",
      choices: [
        "Présent",
        "Imparfait",
        "Infinitif",
        "Conditionnel"
      ],
      correct: 2,
      solution_steps: [
        "L’infinitif est une forme non personnelle.",
        "Il n’indique ni personne ni temps."
      ],
      frequent_errors: [
        "Confondre infinitif et présent"
      ],
      jury_logic: "Le jury attend une analyse grammaticale rigoureuse."
    },

    {
      question: "Pourquoi l’accord du participe passé est-il difficile pour les élèves ?",
      choices: [
        "Parce qu’il est rare",
        "Parce qu’il dépend de l’auxiliaire et du COD",
        "Parce qu’il n’a pas de règles",
        "Parce qu’il est oral"
      ],
      correct: 1,
      solution_steps: [
        "Avec être, on accorde avec le sujet.",
        "Avec avoir, on cherche le COD."
      ],
      frequent_errors: [
        "Accorder systématiquement"
      ],
      jury_logic: "Le jury attend une approche progressive et raisonnée."
    },

    {
      question: "Quel temps permet d’exprimer une action terminée avant une autre action future ?",
      choices: [
        "Plus-que-parfait",
        "Futur simple",
        "Futur antérieur",
        "Passé composé"
      ],
      correct: 2,
      solution_steps: [
        "Le futur antérieur exprime une antériorité future."
      ],
      frequent_errors: [
        "Le confondre avec le futur simple"
      ],
      jury_logic: "Le jury attend une maîtrise de la chronologie."
    },

    {
      question: "Pourquoi enseigner les valeurs des temps à l’école ?",
      choices: [
        "Pour apprendre des tableaux",
        "Pour mieux comprendre les textes",
        "Pour réciter des règles",
        "Pour éviter l’oral"
      ],
      correct: 1,
      solution_steps: [
        "Le sens d’un texte dépend des temps.",
        "La conjugaison est au service de la compréhension."
      ],
      frequent_errors: [
        "Apprentissage mécanique"
      ],
      jury_logic: "Le jury valorise une conjugaison au service du sens."
    },

    {
      question: "Quel est l’objectif didactique principal en conjugaison ?",
      choices: [
        "Faire apprendre par cœur",
        "Multiplier les exercices",
        "Relier le temps au sens",
        "Évaluer rapidement"
      ],
      correct: 2,
      solution_steps: [
        "La conjugaison n’est pas une fin en soi.",
        "Elle sert à produire et comprendre des textes."
      ],
      frequent_errors: [
        "Confondre quantité et efficacité"
      ],
      jury_logic: "Le jury attend une posture professionnelle."
    },

    {
      question: "Pourquoi partir des erreurs des élèves ?",
      choices: [
        "Pour sanctionner",
        "Pour aller plus vite",
        "Pour construire les apprentissages",
        "Pour noter"
      ],
      correct: 2,
      solution_steps: [
        "L’erreur révèle le raisonnement de l’élève.",
        "Elle permet d’adapter l’enseignement."
      ],
      frequent_errors: [
        "Voir l’erreur comme un échec"
      ],
      jury_logic: "Le jury valorise l’analyse des erreurs."
    },

    {
      question: "Quelle est l’attente principale du jury CRPE en conjugaison ?",
      choices: [
        "La récitation parfaite",
        "La rapidité",
        "Le raisonnement et la justification",
        "La quantité d’exercices"
      ],
      correct: 2,
      solution_steps: [
        "Le jury évalue un futur enseignant.",
        "Il attend une analyse claire."
      ],
      frequent_errors: [
        "Réponse scolaire sans recul"
      ],
      jury_logic: "Le jury attend une posture d’enseignant."
    }

  ]
};
