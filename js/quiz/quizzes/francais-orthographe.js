export const quiz = {
  id: "francais-orthographe",
  matiere: "Français",
  chapitre: "Orthographe",

  questions: [

    {
      question: "Dans « Les enfants sont arrivés », pourquoi écrit-on « arrivés » avec -s ?",
      choices: [
        "Parce que le verbe est au passé",
        "Parce que le sujet est pluriel",
        "Parce que le mot est long",
        "Parce que c’est obligatoire"
      ],
      correct: 1,
      solution_steps: [
        "Le verbe est conjugué avec l’auxiliaire être.",
        "Avec être, le participe passé s’accorde avec le sujet.",
        "Le sujet « les enfants » est pluriel."
      ],
      frequent_errors: [
        "Accorder sans identifier l’auxiliaire"
      ],
      jury_logic: "Le jury attend une justification claire de l’accord du participe passé."
    },

    {
      question: "Pourquoi n’accorde-t-on pas « mangé » dans « Les pommes qu’il a mangé » ?",
      choices: [
        "Parce que le verbe est transitif",
        "Parce que le COD est après le verbe",
        "Parce que le sujet est singulier",
        "Parce que c’est une exception"
      ],
      correct: 1,
      solution_steps: [
        "Avec l’auxiliaire avoir, on cherche le COD.",
        "Ici, le COD « les pommes » est placé après le verbe.",
        "Donc, pas d’accord."
      ],
      frequent_errors: [
        "Accorder systématiquement avec le sujet"
      ],
      jury_logic: "Le jury attend la maîtrise du raisonnement COD avant/après."
    },

    {
      question: "Dans « Elle s’est lavée », pourquoi y a-t-il un accord ?",
      choices: [
        "Parce que le verbe est pronominal",
        "Parce que le COD est le sujet",
        "Parce que le sujet est féminin",
        "Parce que le verbe est à l’imparfait"
      ],
      correct: 1,
      solution_steps: [
        "On cherche le COD du verbe « laver ».",
        "Elle lave qui ? Elle-même.",
        "Le COD est placé avant, donc accord."
      ],
      frequent_errors: [
        "Accorder tous les verbes pronominaux sans réfléchir"
      ],
      jury_logic: "Le jury attend une analyse raisonnée des verbes pronominaux."
    },

    {
      question: "Quelle phrase est correctement orthographiée ?",
      choices: [
        "Ils ont manger trop vite",
        "Ils ont mangés trop vite",
        "Ils ont mangé trop vite",
        "Ils ont mangés trop vites"
      ],
      correct: 2,
      solution_steps: [
        "Avec avoir, on n’accorde pas sans COD placé avant.",
        "Ici, aucun COD avant le verbe."
      ],
      frequent_errors: [
        "Accorder par automatisme"
      ],
      jury_logic: "Le jury attend une maîtrise des accords simples."
    },

    {
      question: "Pourquoi écrit-on « des chevaux » et non « des chevals » ?",
      choices: [
        "Parce que c’est plus joli",
        "Parce que c’est une exception mémorisée",
        "Parce que les noms en -al font toujours -aux",
        "Parce que le pluriel est irrégulier"
      ],
      correct: 3,
      solution_steps: [
        "Certains pluriels sont irréguliers.",
        "Ils doivent être mémorisés."
      ],
      frequent_errors: [
        "Appliquer une règle sans vérifier"
      ],
      jury_logic: "Le jury attend la distinction règle / exception."
    },

    {
      question: "Dans « une maison bleue », pourquoi écrit-on « bleue » ?",
      choices: [
        "Parce que le mot est long",
        "Parce que l’adjectif s’accorde avec le nom",
        "Parce que c’est féminin",
        "Parce que c’est obligatoire"
      ],
      correct: 1,
      solution_steps: [
        "L’adjectif qualificatif s’accorde avec le nom.",
        "« Maison » est féminin singulier."
      ],
      frequent_errors: [
        "Oublier l’accord de l’adjectif"
      ],
      jury_logic: "Le jury attend une maîtrise des accords dans le groupe nominal."
    },

    {
      question: "Quelle phrase contient une erreur d’orthographe ?",
      choices: [
        "Les filles sont parties",
        "Ils ont fini leur travail",
        "Elle s’est permise de parler",
        "Les élèves ont compris"
      ],
      correct: 2,
      solution_steps: [
        "Dans « se permettre », le COD vient après.",
        "Il ne faut pas accorder."
      ],
      frequent_errors: [
        "Accorder tous les verbes pronominaux"
      ],
      jury_logic: "Le jury attend une analyse fine des accords complexes."
    },

    {
      question: "Pourquoi écrit-on « il a pris » et non « il a prit » ?",
      choices: [
        "Parce que le verbe est au présent",
        "Parce que c’est une exception",
        "Parce que le participe passé se termine par -s",
        "Parce que le radical change"
      ],
      correct: 1,
      solution_steps: [
        "Certains participes passés sont irréguliers.",
        "Ils doivent être mémorisés."
      ],
      frequent_errors: [
        "Appliquer la terminaison du présent"
      ],
      jury_logic: "Le jury attend une connaissance des formes verbales irrégulières."
    },

    {
      question: "Dans « beaucoup de gens pensent », pourquoi écrit-on « pensent » ?",
      choices: [
        "Parce que « gens » est pluriel",
        "Parce que le verbe est difficile",
        "Parce que le sujet est éloigné",
        "Parce que c’est une exception"
      ],
      correct: 0,
      solution_steps: [
        "Le verbe s’accorde avec le noyau du sujet.",
        "Le noyau est « gens »."
      ],
      frequent_errors: [
        "Accorder avec le mot le plus proche"
      ],
      jury_logic: "Le jury attend une analyse du groupe sujet."
    },

    {
      question: "Quelle est la bonne orthographe ?",
      choices: [
        "Des chacals",
        "Des chacaux",
        "Des chacal",
        "Des chacalles"
      ],
      correct: 0,
      solution_steps: [
        "Tous les noms en -al ne font pas leur pluriel en -aux.",
        "« Chacal » fait « chacals »."
      ],
      frequent_errors: [
        "Généraliser la règle -al → -aux"
      ],
      jury_logic: "Le jury attend la maîtrise des exceptions courantes."
    },

    {
      question: "Pourquoi enseigner l’orthographe à l’école ?",
      choices: [
        "Pour sanctionner",
        "Pour respecter la norme écrite",
        "Pour faire des dictées",
        "Pour compliquer la langue"
      ],
      correct: 1,
      solution_steps: [
        "L’orthographe permet la compréhension.",
        "Elle assure une communication claire."
      ],
      frequent_errors: [
        "Vision punitive de l’orthographe"
      ],
      jury_logic: "Le jury valorise une orthographe au service du sens."
    },

    {
      question: "Quelle est une erreur fréquente des élèves en orthographe ?",
      choices: [
        "Analyser trop",
        "Appliquer une règle sans comprendre",
        "Lire la phrase",
        "Se poser des questions"
      ],
      correct: 1,
      solution_steps: [
        "Les élèves automatisent sans analyser.",
        "L’analyse doit précéder l’accord."
      ],
      frequent_errors: [
        "Apprentissage mécanique"
      ],
      jury_logic: "Le jury attend une réflexion sur les erreurs d’élèves."
    },

    {
      question: "Pourquoi partir des phrases pour enseigner l’orthographe ?",
      choices: [
        "Pour aller vite",
        "Pour donner du sens",
        "Pour évaluer",
        "Pour faire des dictées"
      ],
      correct: 1,
      solution_steps: [
        "L’orthographe dépend du contexte.",
        "Le sens guide l’accord."
      ],
      frequent_errors: [
        "Travailler hors contexte"
      ],
      jury_logic: "Le jury valorise une approche contextualisée."
    },

    {
      question: "Quelle est l’attente principale du jury CRPE en orthographe ?",
      choices: [
        "La récitation de règles",
        "La rapidité",
        "Le raisonnement orthographique",
        "La quantité d’exercices"
      ],
      correct: 2,
      solution_steps: [
        "Le jury attend un raisonnement expliqué.",
        "Pas une simple bonne réponse."
      ],
      frequent_errors: [
        "Réponse juste mais non justifiée"
      ],
      jury_logic: "Le jury attend une posture d’enseignant."
    },

    {
      question: "Pourquoi analyser les erreurs d’élèves ?",
      choices: [
        "Pour sanctionner",
        "Pour comprendre leur raisonnement",
        "Pour noter",
        "Pour aller plus vite"
      ],
      correct: 1,
      solution_steps: [
        "L’erreur révèle la logique de l’élève.",
        "Elle permet d’adapter l’enseignement."
      ],
      frequent_errors: [
        "Voir l’erreur comme un échec"
      ],
      jury_logic: "Le jury valorise l’analyse didactique."
    },

    {
      question: "Quelle posture adopter face aux erreurs orthographiques ?",
      choices: [
        "Punitive",
        "Indifférente",
        "Accompagnante",
        "Autoritaire"
      ],
      correct: 2,
      solution_steps: [
        "L’erreur est un outil d’apprentissage.",
        "L’enseignant guide la correction."
      ],
      frequent_errors: [
        "Multiplier les sanctions"
      ],
      jury_logic: "Le jury attend une posture bienveillante."
    },

    {
      question: "Pourquoi l’orthographe française est-elle difficile ?",
      choices: [
        "Parce qu’elle est inutile",
        "Parce qu’elle est phonétique",
        "Parce qu’elle combine son et sens",
        "Parce qu’elle est récente"
      ],
      correct: 2,
      solution_steps: [
        "L’orthographe n’est pas uniquement phonétique.",
        "Elle encode aussi le sens."
      ],
      frequent_errors: [
        "Croire qu’on écrit comme on parle"
      ],
      jury_logic: "Le jury attend une compréhension du système orthographique."
    },

    {
      question: "Quel est l’objectif didactique principal en orthographe ?",
      choices: [
        "Faire apprendre par cœur",
        "Réduire les erreurs",
        "Construire des stratégies",
        "Faire des dictées"
      ],
      correct: 2,
      solution_steps: [
        "L’élève doit apprendre à raisonner.",
        "Les stratégies sont transférables."
      ],
      frequent_errors: [
        "Multiplier les exercices mécaniques"
      ],
      jury_logic: "Le jury attend une démarche réflexive."
    },

    {
      question: "Pourquoi l’orthographe est-elle liée à la grammaire ?",
      choices: [
        "Parce qu’elles sont enseignées ensemble",
        "Parce que les accords dépendent de la syntaxe",
        "Parce que c’est obligatoire",
        "Parce que c’est plus simple"
      ],
      correct: 1,
      solution_steps: [
        "Les accords reposent sur la structure de la phrase.",
        "Grammaire et orthographe sont liées."
      ],
      frequent_errors: [
        "Travailler l’orthographe isolément"
      ],
      jury_logic: "Le jury attend une vision globale de la langue."
    }

  ]
};
