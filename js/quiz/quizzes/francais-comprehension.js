export const quiz = {
  id: "francais-comprehension",
  matiere: "Français",
  chapitre: "Compréhension de texte",

  questions: [

    {
      question: "Comprendre un texte, c’est avant tout :",
      choices: [
        "Lire vite",
        "Reconnaître tous les mots",
        "Construire le sens du texte",
        "Savoir réciter le texte"
      ],
      correct: 2,
      solution_steps: [
        "La compréhension ne se limite pas au décodage.",
        "Le lecteur construit le sens à partir du texte et de ses connaissances."
      ],
      frequent_errors: [
        "Confondre lire et comprendre"
      ],
      jury_logic: "Le jury attend une conception active de la lecture."
    },

    {
      question: "Quelle stratégie aide à comprendre un texte long ?",
      choices: [
        "Lire sans s’arrêter",
        "Sauter les mots difficiles",
        "Faire des hypothèses de sens",
        "Lire uniquement la fin"
      ],
      correct: 2,
      solution_steps: [
        "Le lecteur anticipe le sens du texte.",
        "Les hypothèses sont confirmées ou infirmées."
      ],
      frequent_errors: [
        "Lire de manière passive"
      ],
      jury_logic: "Le jury valorise les stratégies de lecteur."
    },

    {
      question: "Pourquoi le contexte est-il important pour comprendre un mot ?",
      choices: [
        "Parce que le dictionnaire est inutile",
        "Parce qu’un mot peut avoir plusieurs sens",
        "Parce que le mot change d’orthographe",
        "Parce que le contexte est décoratif"
      ],
      correct: 1,
      solution_steps: [
        "Un mot peut être polysémique.",
        "Le contexte permet de choisir le bon sens."
      ],
      frequent_errors: [
        "Isoler le mot du texte"
      ],
      jury_logic: "Le jury attend une lecture contextualisée."
    },

    {
      question: "Comprendre l’implicite, c’est :",
      choices: [
        "Comprendre ce qui est écrit explicitement",
        "Comprendre ce qui n’est pas dit directement",
        "Inventer une histoire",
        "Lire entre les lignes sans appui"
      ],
      correct: 1,
      solution_steps: [
        "L’implicite repose sur des indices du texte.",
        "Le lecteur fait des inférences."
      ],
      frequent_errors: [
        "Inventer sans justification"
      ],
      jury_logic: "Le jury attend une inférence appuyée sur le texte."
    },

    {
      question: "Quelle question aide à repérer le thème d’un texte ?",
      choices: [
        "Qui parle ?",
        "De quoi parle le texte ?",
        "Quand a-t-il été écrit ?",
        "Combien de mots contient-il ?"
      ],
      correct: 1,
      solution_steps: [
        "Le thème correspond au sujet principal.",
        "Il répond à la question « de quoi parle-t-on ? »."
      ],
      frequent_errors: [
        "Confondre thème et détails"
      ],
      jury_logic: "Le jury attend une identification claire du thème."
    },

    {
      question: "Pourquoi reformuler un texte aide-t-il à la compréhension ?",
      choices: [
        "Pour répéter",
        "Pour vérifier la compréhension",
        "Pour aller plus vite",
        "Pour apprendre par cœur"
      ],
      correct: 1,
      solution_steps: [
        "Reformuler oblige à comprendre.",
        "On utilise ses propres mots."
      ],
      frequent_errors: [
        "Copier le texte mot à mot"
      ],
      jury_logic: "Le jury valorise les stratégies métacognitives."
    },

    {
      question: "Quelle est une erreur fréquente des élèves en compréhension ?",
      choices: [
        "Relire le texte",
        "Justifier avec le texte",
        "Répondre sans relire",
        "Chercher des indices"
      ],
      correct: 2,
      solution_steps: [
        "Les élèves répondent parfois de mémoire.",
        "Sans vérifier dans le texte."
      ],
      frequent_errors: [
        "Réponse intuitive non justifiée"
      ],
      jury_logic: "Le jury attend une analyse des erreurs d’élèves."
    },

    {
      question: "Pourquoi poser des questions avant la lecture ?",
      choices: [
        "Pour noter",
        "Pour guider l’attention",
        "Pour compliquer la tâche",
        "Pour perdre du temps"
      ],
      correct: 1,
      solution_steps: [
        "Les questions orientent la lecture.",
        "Elles aident à construire le sens."
      ],
      frequent_errors: [
        "Lire sans objectif"
      ],
      jury_logic: "Le jury attend une démarche pédagogique structurée."
    },

    {
      question: "Comprendre un texte narratif implique de repérer :",
      choices: [
        "Uniquement les personnages",
        "Le lieu seulement",
        "La situation initiale, les événements, la fin",
        "Les mots difficiles"
      ],
      correct: 2,
      solution_steps: [
        "Le récit suit une organisation.",
        "Repérer les étapes aide à comprendre."
      ],
      frequent_errors: [
        "Lire sans structure"
      ],
      jury_logic: "Le jury attend une maîtrise des types de textes."
    },

    {
      question: "Pourquoi faire justifier les réponses par le texte ?",
      choices: [
        "Pour sanctionner",
        "Pour obliger à relire",
        "Pour appuyer le raisonnement",
        "Pour gagner du temps"
      ],
      correct: 2,
      solution_steps: [
        "La justification montre la compréhension.",
        "Elle évite les réponses gratuites."
      ],
      frequent_errors: [
        "Réponses non étayées"
      ],
      jury_logic: "Le jury attend des réponses argumentées."
    },

    {
      question: "Quelle stratégie aide à comprendre un texte informatif ?",
      choices: [
        "Repérer les connecteurs logiques",
        "Lire seulement l’introduction",
        "Ignorer les titres",
        "Lire à voix haute uniquement"
      ],
      correct: 0,
      solution_steps: [
        "Les connecteurs structurent les idées.",
        "Ils aident à suivre le raisonnement."
      ],
      frequent_errors: [
        "Lire sans repérer l’organisation"
      ],
      jury_logic: "Le jury attend une lecture stratégique selon le type de texte."
    },

    {
      question: "Pourquoi travailler la compréhension orale ?",
      choices: [
        "Parce que c’est plus simple",
        "Parce qu’elle prépare la compréhension écrite",
        "Parce qu’elle remplace la lecture",
        "Parce qu’elle est évaluée"
      ],
      correct: 1,
      solution_steps: [
        "Les stratégies sont transférables.",
        "L’oral soutient l’écrit."
      ],
      frequent_errors: [
        "Séparer oral et écrit"
      ],
      jury_logic: "Le jury attend une vision globale de la compréhension."
    },

    {
      question: "Que signifie « faire des inférences » ?",
      choices: [
        "Répéter le texte",
        "Comprendre ce qui est dit explicitement",
        "Déduire des informations à partir d’indices",
        "Inventer une réponse"
      ],
      correct: 2,
      solution_steps: [
        "Les inférences s’appuient sur des indices.",
        "Elles complètent l’information explicite."
      ],
      frequent_errors: [
        "Réponses imaginées"
      ],
      jury_logic: "Le jury attend une inférence justifiée."
    },

    {
      question: "Pourquoi certains élèves comprennent-ils mal un texte ?",
      choices: [
        "Parce qu’ils lisent trop",
        "Parce qu’ils manquent de vocabulaire",
        "Parce qu’ils écrivent mal",
        "Parce qu’ils lisent lentement"
      ],
      correct: 1,
      solution_steps: [
        "Le vocabulaire conditionne la compréhension.",
        "Un mot inconnu bloque le sens."
      ],
      frequent_errors: [
        "Négliger le rôle du lexique"
      ],
      jury_logic: "Le jury attend une analyse des obstacles à la compréhension."
    },

    {
      question: "Pourquoi proposer des reformulations collectives ?",
      choices: [
        "Pour gagner du temps",
        "Pour confronter les compréhensions",
        "Pour imposer une réponse",
        "Pour évaluer"
      ],
      correct: 1,
      solution_steps: [
        "Les échanges enrichissent la compréhension.",
        "Ils permettent de clarifier le sens."
      ],
      frequent_errors: [
        "Chercher une seule bonne réponse"
      ],
      jury_logic: "Le jury valorise la construction collective du sens."
    },

    {
      question: "Quel est l’objectif principal de l’enseignement de la compréhension ?",
      choices: [
        "Lire vite",
        "Répondre juste",
        "Construire du sens",
        "Finir le programme"
      ],
      correct: 2,
      solution_steps: [
        "La compréhension est un processus actif.",
        "Elle permet l’autonomie du lecteur."
      ],
      frequent_errors: [
        "Vision utilitaire de la lecture"
      ],
      jury_logic: "Le jury attend une conception experte de la lecture."
    },

    {
      question: "Pourquoi varier les supports de lecture ?",
      choices: [
        "Pour faire plaisir",
        "Pour développer des stratégies variées",
        "Pour noter différemment",
        "Pour gagner du temps"
      ],
      correct: 1,
      solution_steps: [
        "Chaque texte sollicite des stratégies différentes.",
        "La variété enrichit les compétences."
      ],
      frequent_errors: [
        "Toujours proposer le même type de texte"
      ],
      jury_logic: "Le jury attend une pédagogie différenciée."
    },

    {
      question: "Quelle est une attente forte du jury CRPE en compréhension ?",
      choices: [
        "La rapidité",
        "La quantité de textes",
        "L’explicitation des démarches",
        "La mémorisation"
      ],
      correct: 2,
      solution_steps: [
        "Le jury évalue un futur enseignant.",
        "Il attend une justification pédagogique."
      ],
      frequent_errors: [
        "Réponses vagues"
      ],
      jury_logic: "Le jury attend une posture réflexive."
    },

    {
      question: "Pourquoi enseigner explicitement les stratégies de compréhension ?",
      choices: [
        "Pour aller plus vite",
        "Parce qu’elles ne sont pas innées",
        "Pour évaluer",
        "Pour faire des exercices"
      ],
      correct: 1,
      solution_steps: [
        "Tous les élèves n’utilisent pas spontanément les stratégies.",
        "L’enseignement explicite réduit les inégalités."
      ],
      frequent_errors: [
        "Penser que la compréhension va de soi"
      ],
      jury_logic: "Le jury attend une approche explicite et inclusive."
    }

  ]
};
