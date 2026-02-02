export const quiz = {
  id: "francais-conjugaison",
  matiere: "Français",
  chapitre: "Conjugaison – Tous les temps",

  questions: [

    {
      question: "À quoi sert la conjugaison dans une phrase ?",
      choices: [
        "À décorer la phrase",
        "À indiquer le temps et la personne",
        "À compliquer le français",
        "À remplacer le vocabulaire"
      ],
      correct: 1,
      solution_steps: [
        "La conjugaison indique quand se déroule l’action.",
        "Elle précise aussi qui réalise l’action."
      ],
      frequent_errors: [
        "Voir la conjugaison comme une simple récitation"
      ],
      jury_logic: "Le CRPE attend la compréhension du rôle grammatical du verbe."
    },

    {
      question: "Quel temps exprime une action qui se déroule au moment où l’on parle ?",
      choices: [
        "Imparfait",
        "Passé composé",
        "Présent de l’indicatif",
        "Futur simple"
      ],
      correct: 2,
      solution_steps: [
        "Le présent exprime une action actuelle.",
        "Il peut aussi exprimer une vérité générale."
      ],
      frequent_errors: [
        "Limiter le présent à l’instant strict"
      ],
      jury_logic: "Le jury vérifie la valeur du présent."
    },

    {
      question: "Quel temps est principalement utilisé pour raconter des faits passés terminés ?",
      choices: [
        "Imparfait",
        "Passé composé",
        "Plus-que-parfait",
        "Présent"
      ],
      correct: 1,
      solution_steps: [
        "Le passé composé exprime une action achevée.",
        "Il est très utilisé dans le récit."
      ],
      frequent_errors: [
        "Confondre imparfait et passé composé"
      ],
      jury_logic: "Le CRPE évalue la chronologie des actions."
    },

    {
      question: "Quel temps permet de décrire une habitude ou une description dans le passé ?",
      choices: [
        "Passé composé",
        "Imparfait",
        "Futur",
        "Conditionnel"
      ],
      correct: 1,
      solution_steps: [
        "L’imparfait exprime la durée, l’habitude ou la description.",
        "Il installe le décor."
      ],
      frequent_errors: [
        "Utiliser le passé composé"
      ],
      jury_logic: "Le jury attend la maîtrise des valeurs de l’imparfait."
    },

    {
      question: "Quel temps exprime une action qui aura lieu plus tard ?",
      choices: [
        "Présent",
        "Imparfait",
        "Futur simple",
        "Passé composé"
      ],
      correct: 2,
      solution_steps: [
        "Le futur simple situe l’action après le moment de parole.",
        "Il exprime ce qui n’est pas encore réalisé."
      ],
      frequent_errors: [
        "Employer le présent sans contexte"
      ],
      jury_logic: "Le CRPE vérifie la gestion du temps verbal."
    },

    {
      question: "Quel temps exprime une action antérieure à une autre action passée ?",
      choices: [
        "Imparfait",
        "Passé composé",
        "Plus-que-parfait",
        "Futur antérieur"
      ],
      correct: 2,
      solution_steps: [
        "Le plus-que-parfait exprime l’antériorité dans le passé.",
        "Il se forme avec l’imparfait de l’auxiliaire."
      ],
      frequent_errors: [
        "Utiliser le passé composé"
      ],
      jury_logic: "Le jury attend une maîtrise des temps composés."
    },

    {
      question: "Quel mode est utilisé pour exprimer un ordre ou un conseil ?",
      choices: [
        "Indicatif",
        "Conditionnel",
        "Impératif",
        "Subjonctif"
      ],
      correct: 2,
      solution_steps: [
        "L’impératif sert à donner un ordre ou un conseil.",
        "Il s’emploie sans sujet exprimé."
      ],
      frequent_errors: [
        "Ajouter le sujet"
      ],
      jury_logic: "Le CRPE vérifie la connaissance des modes."
    },

    {
      question: "Dans quelle situation utilise-t-on le subjonctif ?",
      choices: [
        "Pour exprimer un fait certain",
        "Après une expression de doute ou de volonté",
        "Pour raconter un événement passé",
        "Pour décrire une habitude"
      ],
      correct: 1,
      solution_steps: [
        "Le subjonctif exprime l’incertitude, le souhait ou l’émotion.",
        "Il dépend du sens de la phrase."
      ],
      frequent_errors: [
        "Apprendre une liste sans comprendre"
      ],
      jury_logic: "Le jury valorise le lien sens / grammaire."
    },

    {
      question: "Quel mode permet d’exprimer une hypothèse ou une condition ?",
      choices: [
        "Indicatif",
        "Impératif",
        "Conditionnel",
        "Subjonctif"
      ],
      correct: 2,
      solution_steps: [
        "Le conditionnel exprime une action soumise à une condition.",
        "Il est souvent associé à une hypothèse."
      ],
      frequent_errors: [
        "Le confondre avec le futur"
      ],
      jury_logic: "Le CRPE vérifie la nuance des modes."
    },

    {
      question: "Pourquoi la conjugaison est-elle difficile pour les élèves ?",
      choices: [
        "Elle est inutile",
        "Elle combine temps, personne et accords",
        "Elle est trop courte",
        "Elle est facultative"
      ],
      correct: 1,
      solution_steps: [
        "La conjugaison mobilise plusieurs notions simultanément.",
        "Les élèves doivent coordonner ces règles."
      ],
      frequent_errors: [
        "Travailler la conjugaison isolément"
      ],
      jury_logic: "Le jury attend l’analyse des obstacles d’apprentissage."
    },

    {
      question: "Quelle est une erreur fréquente en conjugaison ?",
      choices: [
        "Identifier le sujet",
        "Confondre les terminaisons",
        "Lire la phrase",
        "Comprendre le sens"
      ],
      correct: 1,
      solution_steps: [
        "Les terminaisons proches sont souvent confondues.",
        "Exemple : imparfait / futur."
      ],
      frequent_errors: [
        "Apprendre sans manipuler"
      ],
      jury_logic: "Le CRPE valorise l’analyse des erreurs."
    },

    {
      question: "Pourquoi faire manipuler les phrases en conjugaison ?",
      choices: [
        "Pour jouer",
        "Pour comprendre les effets des temps",
        "Pour perdre du temps",
        "Pour réciter"
      ],
      correct: 1,
      solution_steps: [
        "La manipulation permet d’observer les changements de sens.",
        "Elle favorise la compréhension."
      ],
      frequent_errors: [
        "Limiter la conjugaison aux tableaux"
      ],
      jury_logic: "Le jury attend une approche didactique."
    },

    {
      question: "Quel est le rôle du verbe dans la phrase ?",
      choices: [
        "Décorer",
        "Exprimer une action ou un état",
        "Remplacer le sujet",
        "Ajouter un complément"
      ],
      correct: 1,
      solution_steps: [
        "Le verbe est le noyau de la phrase.",
        "Il exprime l’action ou l’état."
      ],
      frequent_errors: [
        "Confondre verbe et nom"
      ],
      jury_logic: "Le CRPE vérifie les bases grammaticales."
    },

    {
      question: "Pourquoi travailler la conjugaison en contexte ?",
      choices: [
        "Pour compliquer",
        "Pour donner du sens aux temps verbaux",
        "Pour éviter les règles",
        "Pour aller plus vite"
      ],
      correct: 1,
      solution_steps: [
        "Le contexte permet de comprendre la valeur du temps.",
        "Il évite l’apprentissage mécanique."
      ],
      frequent_errors: [
        "Apprendre les tableaux seuls"
      ],
      jury_logic: "Le jury valorise une approche contextualisée."
    },

    {
      question: "Quel temps peut exprimer une vérité générale ?",
      choices: [
        "Imparfait",
        "Passé composé",
        "Présent",
        "Futur"
      ],
      correct: 2,
      solution_steps: [
        "Le présent peut exprimer une vérité générale.",
        "Exemple : « L’eau bout à 100 °C »."
      ],
      frequent_errors: [
        "Limiter le présent à l’instant"
      ],
      jury_logic: "Le CRPE attend une maîtrise des valeurs du présent."
    },

    {
      question: "Quel temps permet d’exprimer un futur vu depuis le passé ?",
      choices: [
        "Futur simple",
        "Conditionnel présent",
        "Imparfait",
        "Plus-que-parfait"
      ],
      correct: 1,
      solution_steps: [
        "Le conditionnel peut exprimer le futur dans le passé.",
        "Il dépend du contexte."
      ],
      frequent_errors: [
        "Employer le futur simple"
      ],
      jury_logic: "Le jury attend la maîtrise des concordances."
    },

    {
      question: "Pourquoi accorde-t-on le verbe avec le sujet ?",
      choices: [
        "Pour décorer",
        "Pour respecter la grammaire française",
        "Pour compliquer",
        "Pour varier"
      ],
      correct: 1,
      solution_steps: [
        "L’accord assure la cohérence de la phrase.",
        "Il indique qui fait l’action."
      ],
      frequent_errors: [
        "Accorder avec le mot le plus proche"
      ],
      jury_logic: "Le CRPE vérifie la rigueur grammaticale."
    },

    {
      question: "Quel est l’intérêt de comparer plusieurs temps verbaux ?",
      choices: [
        "Pour réciter",
        "Pour comprendre les nuances de sens",
        "Pour gagner du temps",
        "Pour éviter le contexte"
      ],
      correct: 1,
      solution_steps: [
        "Comparer les temps montre leurs valeurs spécifiques.",
        "Cela aide à choisir le temps correct."
      ],
      frequent_errors: [
        "Apprendre les temps isolément"
      ],
      jury_logic: "Le jury valorise la réflexion grammaticale."
    },

    {
      question: "Quelle posture adopter face aux erreurs des élèves en conjugaison ?",
      choices: [
        "Punitive",
        "Indifférente",
        "Analytique et bienveillante",
        "Autoritaire"
      ],
      correct: 2,
      solution_steps: [
        "L’erreur est un outil d’apprentissage.",
        "Elle doit être analysée."
      ],
      frequent_errors: [
        "Sanctionner sans expliquer"
      ],
      jury_logic: "Le CRPE attend une posture pédagogique."
    },

    {
      question: "Quelle est l’attente principale du jury CRPE en conjugaison ?",
      choices: [
        "La rapidité",
        "La récitation",
        "La compréhension du sens et des valeurs des temps",
        "La quantité de règles"
      ],
      correct: 2,
      solution_steps: [
        "Le jury attend une compréhension fine des temps.",
        "Le sens prime sur la récitation."
      ],
      frequent_errors: [
        "Lister des règles sans contexte"
      ],
      jury_logic: "Le CRPE évalue la maîtrise grammaticale et didactique."
    }

  ]
};
