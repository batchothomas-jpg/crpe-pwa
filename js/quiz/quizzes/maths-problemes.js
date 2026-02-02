export const quiz = {
  id: "maths-problemes",
  matiere: "Mathématiques",
  chapitre: "Résolution de problèmes",

  questions: [

    {
      question: "Quelle est la première étape pour résoudre un problème mathématique ?",
      choices: [
        "Choisir une opération",
        "Lire et comprendre l’énoncé",
        "Faire un calcul",
        "Écrire la réponse"
      ],
      correct: 1,
      solution_steps: [
        "La compréhension de l’énoncé est indispensable.",
        "Il faut identifier la situation et la question posée."
      ],
      frequent_errors: [
        "Se précipiter sur un calcul",
        "Ignorer la question finale"
      ],
      jury_logic: "Le CRPE évalue la démarche avant le résultat."
    },

    {
      question: "Pourquoi doit-on repérer les informations utiles dans un problème ?",
      choices: [
        "Pour recopier l’énoncé",
        "Pour choisir la bonne opération",
        "Pour aller plus vite",
        "Pour écrire plus"
      ],
      correct: 1,
      solution_steps: [
        "Les données utiles permettent de résoudre le problème.",
        "Les données inutiles peuvent induire en erreur."
      ],
      frequent_errors: [
        "Utiliser toutes les données sans réflexion"
      ],
      jury_logic: "Le jury attend une sélection raisonnée des informations."
    },

    {
      question: "Quel type de problème correspond à une situation de réunion ?",
      choices: [
        "Comparer deux quantités",
        "Partager équitablement",
        "Réunir plusieurs quantités",
        "Trouver un reste"
      ],
      correct: 2,
      solution_steps: [
        "Réunir correspond à une addition.",
        "On rassemble plusieurs quantités."
      ],
      frequent_errors: [
        "Utiliser une multiplication"
      ],
      jury_logic: "Le CRPE vérifie le sens des opérations."
    },

    {
      question: "Quel type de problème demande généralement une soustraction ?",
      choices: [
        "Réunir",
        "Multiplier",
        "Comparer ou enlever",
        "Partager"
      ],
      correct: 2,
      solution_steps: [
        "La soustraction sert à enlever ou comparer.",
        "Elle exprime une différence."
      ],
      frequent_errors: [
        "Soustraire systématiquement"
      ],
      jury_logic: "Le jury attend la compréhension des situations."
    },

    {
      question: "Dans un problème de partage équitable, quelle opération est souvent utilisée ?",
      choices: [
        "Addition",
        "Soustraction",
        "Multiplication",
        "Division"
      ],
      correct: 3,
      solution_steps: [
        "Partager équitablement correspond à une division.",
        "On répartit une quantité en parts égales."
      ],
      frequent_errors: [
        "Multiplier au lieu de diviser"
      ],
      jury_logic: "Le CRPE vérifie le lien situation / opération."
    },

    {
      question: "Pourquoi est-il important de reformuler un problème avec ses propres mots ?",
      choices: [
        "Pour gagner du temps",
        "Pour vérifier la compréhension",
        "Pour faire joli",
        "Pour éviter de calculer"
      ],
      correct: 1,
      solution_steps: [
        "La reformulation montre que le problème est compris.",
        "Elle aide à structurer la démarche."
      ],
      frequent_errors: [
        "Répéter l’énoncé sans le comprendre"
      ],
      jury_logic: "Le jury valorise les stratégies de compréhension."
    },

    {
      question: "Quelle est la fonction de la question finale dans un problème ?",
      choices: [
        "Décorer",
        "Indiquer ce qu’il faut chercher",
        "Ajouter une donnée",
        "Faire réfléchir inutilement"
      ],
      correct: 1,
      solution_steps: [
        "La question guide la résolution.",
        "Elle précise l’objectif."
      ],
      frequent_errors: [
        "Répondre à une autre question"
      ],
      jury_logic: "Le CRPE sanctionne les réponses hors sujet."
    },

    {
      question: "Pourquoi faut-il vérifier la cohérence du résultat ?",
      choices: [
        "Pour écrire plus",
        "Pour s’assurer que le résultat a du sens",
        "Pour refaire le calcul",
        "Pour corriger l’énoncé"
      ],
      correct: 1,
      solution_steps: [
        "Un résultat doit être plausible.",
        "La vérification fait partie de la démarche."
      ],
      frequent_errors: [
        "Accepter un résultat absurde"
      ],
      jury_logic: "Le jury valorise l’esprit critique."
    },

    {
      question: "Quelle erreur est fréquente chez les élèves face aux problèmes ?",
      choices: [
        "Lire l’énoncé",
        "Choisir une opération au hasard",
        "Vérifier",
        "Expliquer"
      ],
      correct: 1,
      solution_steps: [
        "Les élèves se précipitent souvent sur le calcul.",
        "Ils négligent la compréhension."
      ],
      frequent_errors: [
        "Calcul automatique"
      ],
      jury_logic: "Le CRPE attend l’analyse des difficultés des élèves."
    },

    {
      question: "Pourquoi demander aux élèves d’expliquer leur raisonnement ?",
      choices: [
        "Pour perdre du temps",
        "Pour évaluer la compréhension",
        "Pour compliquer",
        "Pour allonger la réponse"
      ],
      correct: 1,
      solution_steps: [
        "L’explication révèle la démarche.",
        "Elle permet d’identifier les erreurs."
      ],
      frequent_errors: [
        "Évaluer uniquement le résultat"
      ],
      jury_logic: "Le jury valorise la verbalisation."
    },

    {
      question: "Quel est l’intérêt d’utiliser un schéma ou un dessin ?",
      choices: [
        "Décorer",
        "Aider à comprendre la situation",
        "Remplacer le calcul",
        "Faire perdre du temps"
      ],
      correct: 1,
      solution_steps: [
        "Le schéma aide à visualiser le problème.",
        "Il soutient le raisonnement."
      ],
      frequent_errors: [
        "Dessiner sans lien avec le problème"
      ],
      jury_logic: "Le CRPE valorise les outils de représentation."
    },

    {
      question: "Pourquoi certains problèmes contiennent-ils des données inutiles ?",
      choices: [
        "Pour tromper",
        "Pour vérifier la capacité de tri",
        "Par erreur",
        "Pour allonger"
      ],
      correct: 1,
      solution_steps: [
        "Les données inutiles testent la compréhension.",
        "Il faut apprendre à les écarter."
      ],
      frequent_errors: [
        "Utiliser toutes les données"
      ],
      jury_logic: "Le jury évalue la capacité de sélection."
    },

    {
      question: "Quel type de problème fait intervenir plusieurs étapes ?",
      choices: [
        "Problème simple",
        "Problème à une opération",
        "Problème complexe",
        "Problème oral"
      ],
      correct: 2,
      solution_steps: [
        "Un problème complexe nécessite plusieurs calculs.",
        "Il faut organiser la démarche."
      ],
      frequent_errors: [
        "Faire une seule opération"
      ],
      jury_logic: "Le CRPE attend une structuration du raisonnement."
    },

    {
      question: "Pourquoi enseigner explicitement la démarche de résolution ?",
      choices: [
        "Pour réciter",
        "Pour rendre les élèves autonomes",
        "Pour simplifier les évaluations",
        "Pour gagner du temps"
      ],
      correct: 1,
      solution_steps: [
        "La démarche aide les élèves à se repérer.",
        "Elle favorise l’autonomie."
      ],
      frequent_errors: [
        "Laisser les élèves seuls face aux problèmes"
      ],
      jury_logic: "Le jury attend une posture didactique."
    },

    {
      question: "Quel rôle joue la verbalisation en résolution de problèmes ?",
      choices: [
        "Aucun",
        "Elle aide à structurer la pensée",
        "Elle remplace le calcul",
        "Elle complique"
      ],
      correct: 1,
      solution_steps: [
        "Dire ce que l’on fait aide à comprendre.",
        "La verbalisation clarifie la démarche."
      ],
      frequent_errors: [
        "Agir sans expliquer"
      ],
      jury_logic: "Le CRPE valorise les démarches explicites."
    },

    {
      question: "Pourquoi proposer des problèmes variés aux élèves ?",
      choices: [
        "Pour les piéger",
        "Pour développer des stratégies",
        "Pour les fatiguer",
        "Pour gagner du temps"
      ],
      correct: 1,
      solution_steps: [
        "La variété développe l’adaptabilité.",
        "Elle évite les automatismes."
      ],
      frequent_errors: [
        "Toujours le même type de problème"
      ],
      jury_logic: "Le jury attend une réflexion pédagogique."
    },

    {
      question: "Quel est l’objectif principal de la résolution de problèmes ?",
      choices: [
        "Calculer vite",
        "Développer le raisonnement",
        "Apprendre des formules",
        "Réciter"
      ],
      correct: 1,
      solution_steps: [
        "La résolution développe la logique.",
        "Le calcul est un moyen."
      ],
      frequent_errors: [
        "Se focaliser uniquement sur le résultat"
      ],
      jury_logic: "Le CRPE valorise la construction du raisonnement."
    },

    {
      question: "Quelle posture adopter face aux erreurs des élèves ?",
      choices: [
        "Punitive",
        "Indifférente",
        "Analytique et accompagnante",
        "Autoritaire"
      ],
      correct: 2,
      solution_steps: [
        "L’erreur permet de comprendre les difficultés.",
        "Elle fait partie de l’apprentissage."
      ],
      frequent_errors: [
        "Sanctionner sans expliquer"
      ],
      jury_logic: "Le jury attend une posture professionnelle."
    },

    {
      question: "Pourquoi relier les problèmes à des situations concrètes ?",
      choices: [
        "Pour décorer",
        "Pour donner du sens aux mathématiques",
        "Pour éviter le calcul",
        "Pour simplifier"
      ],
      correct: 1,
      solution_steps: [
        "Les situations concrètes rendent le problème compréhensible.",
        "Elles favorisent l’engagement."
      ],
      frequent_errors: [
        "Problèmes abstraits sans contexte"
      ],
      jury_logic: "Le CRPE valorise le sens des apprentissages."
    },

    {
      question: "Quelle est l’attente principale du jury CRPE en résolution de problèmes ?",
      choices: [
        "La rapidité",
        "Le résultat uniquement",
        "Le raisonnement expliqué",
        "La quantité de calculs"
      ],
      correct: 2,
      solution_steps: [
        "Le jury attend une démarche structurée.",
        "L’explication est centrale."
      ],
      frequent_errors: [
        "Réponse sans justification"
      ],
      jury_logic: "Le CRPE évalue la maîtrise didactique."
    }

  ]
};
