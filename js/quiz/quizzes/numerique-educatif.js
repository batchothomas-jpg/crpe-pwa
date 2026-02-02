export const quiz = {
  id: "numerique-educatif",
  matiere: "Numérique éducatif",
  chapitre: "Enseigner avec le numérique",

  questions: [

    {
      question: "Quel est l’objectif principal du numérique éducatif à l’école ?",
      choices: [
        "Remplacer l’enseignant",
        "Former des élèves compétents et citoyens dans le numérique",
        "Occuper les élèves",
        "Moderniser l’école uniquement"
      ],
      correct: 1,
      solution_steps: [
        "Le numérique est un outil au service des apprentissages.",
        "Il vise des compétences et une citoyenneté numérique."
      ],
      frequent_errors: [
        "Voir le numérique comme une fin en soi"
      ],
      jury_logic: "Le jury attend une vision pédagogique du numérique."
    },

    {
      question: "Qu’est-ce qu’une compétence numérique ?",
      choices: [
        "Savoir utiliser un écran",
        "Savoir jouer à des jeux vidéo",
        "Savoir utiliser, comprendre et produire avec le numérique",
        "Savoir taper vite"
      ],
      correct: 2,
      solution_steps: [
        "Les compétences numériques sont multiples.",
        "Elles incluent l’usage, la compréhension et l’esprit critique."
      ],
      frequent_errors: [
        "Réduire les compétences à la technique"
      ],
      jury_logic: "Le jury attend une définition large."
    },

    {
      question: "Quel cadre définit les compétences numériques des élèves ?",
      choices: [
        "Le B2i",
        "Le CRCN",
        "Le socle européen",
        "Le programme local"
      ],
      correct: 1,
      solution_steps: [
        "Le CRCN définit les compétences numériques.",
        "Il s’applique de l’école au lycée."
      ],
      frequent_errors: [
        "Citer le B2i obsolète"
      ],
      jury_logic: "Le jury attend des repères institutionnels à jour."
    },

    {
      question: "Quelle est une compétence du CRCN ?",
      choices: [
        "Se divertir",
        "Protéger les données personnelles",
        "Jouer en ligne",
        "Regarder des vidéos"
      ],
      correct: 1,
      solution_steps: [
        "La protection des données est essentielle.",
        "Elle relève de la citoyenneté numérique."
      ],
      frequent_errors: [
        "Oublier la sécurité"
      ],
      jury_logic: "Le jury attend la connaissance des domaines du CRCN."
    },

    {
      question: "Pourquoi enseigner l’esprit critique face aux informations numériques ?",
      choices: [
        "Pour limiter Internet",
        "Pour apprendre à vérifier les sources",
        "Pour interdire les écrans",
        "Pour gagner du temps"
      ],
      correct: 1,
      solution_steps: [
        "Les informations peuvent être fausses.",
        "Les élèves doivent apprendre à vérifier."
      ],
      frequent_errors: [
        "Faire confiance automatiquement aux résultats"
      ],
      jury_logic: "Le jury attend une éducation aux médias."
    },

    {
      question: "Qu’est-ce qu’une donnée personnelle ?",
      choices: [
        "Une information publique",
        "Une information permettant d’identifier une personne",
        "Un mot de passe collectif",
        "Une image libre"
      ],
      correct: 1,
      solution_steps: [
        "Les données personnelles identifient une personne.",
        "Elles doivent être protégées."
      ],
      frequent_errors: [
        "Penser que seules les photos sont des données"
      ],
      jury_logic: "Le jury attend une définition juridique simple."
    },

    {
      question: "Pourquoi protéger ses données personnelles ?",
      choices: [
        "Pour compliquer",
        "Pour éviter les usages abusifs",
        "Pour ralentir Internet",
        "Pour cacher"
      ],
      correct: 1,
      solution_steps: [
        "Les données peuvent être utilisées sans consentement.",
        "La protection est essentielle."
      ],
      frequent_errors: [
        "Minimiser les risques"
      ],
      jury_logic: "Le jury attend une sensibilisation aux risques."
    },

    {
      question: "Quel est un usage pédagogique du numérique ?",
      choices: [
        "Regarder des vidéos sans objectif",
        "Faire un exercice interactif ciblé",
        "Remplacer le cahier",
        "Occuper les élèves"
      ],
      correct: 1,
      solution_steps: [
        "Le numérique doit servir un objectif pédagogique.",
        "Il est intégré à la séquence."
      ],
      frequent_errors: [
        "Usage gadget"
      ],
      jury_logic: "Le jury attend un usage raisonné."
    },

    {
      question: "Pourquoi le numérique favorise-t-il la différenciation pédagogique ?",
      choices: [
        "Parce qu’il est obligatoire",
        "Parce qu’il permet d’adapter les supports et rythmes",
        "Parce qu’il remplace l’enseignant",
        "Parce qu’il est automatique"
      ],
      correct: 1,
      solution_steps: [
        "Les outils numériques proposent des parcours variés.",
        "Ils s’adaptent aux besoins."
      ],
      frequent_errors: [
        "Penser que le numérique différencie seul"
      ],
      jury_logic: "Le jury attend une articulation outil / pédagogie."
    },

    {
      question: "Quel est le rôle de l’enseignant face au numérique ?",
      choices: [
        "Se retirer",
        "Accompagner, guider et réguler les usages",
        "Laisser faire",
        "Interdire"
      ],
      correct: 1,
      solution_steps: [
        "L’enseignant reste central.",
        "Il encadre les usages."
      ],
      frequent_errors: [
        "Penser que le numérique remplace le professeur"
      ],
      jury_logic: "Le jury attend une posture professionnelle claire."
    },

    {
      question: "Quelle est une erreur fréquente des élèves avec le numérique ?",
      choices: [
        "Comparer les sources",
        "Croire qu’Internet dit toujours vrai",
        "Protéger ses données",
        "Argumenter"
      ],
      correct: 1,
      solution_steps: [
        "Les élèves font confiance aux premiers résultats.",
        "Ils ne vérifient pas toujours."
      ],
      frequent_errors: [
        "Confondre popularité et fiabilité"
      ],
      jury_logic: "Le jury attend l’identification des difficultés."
    },

    {
      question: "Pourquoi travailler la recherche d’informations en classe ?",
      choices: [
        "Pour gagner du temps",
        "Pour apprendre à trier et vérifier",
        "Pour éviter les livres",
        "Pour noter"
      ],
      correct: 1,
      solution_steps: [
        "La recherche demande des compétences.",
        "Elle développe l’esprit critique."
      ],
      frequent_errors: [
        "Copier-coller sans analyse"
      ],
      jury_logic: "Le jury attend une éducation aux médias."
    },

    {
      question: "Qu’est-ce qu’une identité numérique ?",
      choices: [
        "Un pseudo",
        "L’ensemble des traces laissées en ligne",
        "Un compte scolaire",
        "Un mot de passe"
      ],
      correct: 1,
      solution_steps: [
        "Chaque action laisse une trace.",
        "Elle construit une identité numérique."
      ],
      frequent_errors: [
        "Penser que tout disparaît"
      ],
      jury_logic: "Le jury attend une sensibilisation responsable."
    },

    {
      question: "Pourquoi sensibiliser aux réseaux sociaux à l’école ?",
      choices: [
        "Pour les interdire",
        "Pour apprendre à les utiliser de manière responsable",
        "Pour faire de la publicité",
        "Pour remplacer l’EMC"
      ],
      correct: 1,
      solution_steps: [
        "Les réseaux font partie du quotidien.",
        "Il faut en comprendre les enjeux."
      ],
      frequent_errors: [
        "Ignorer leur existence"
      ],
      jury_logic: "Le jury attend une approche éducative."
    },

    {
      question: "Quel est un risque lié au numérique ?",
      choices: [
        "L’apprentissage",
        "La désinformation",
        "La coopération",
        "La créativité"
      ],
      correct: 1,
      solution_steps: [
        "Les informations peuvent être fausses.",
        "La désinformation est un enjeu."
      ],
      frequent_errors: [
        "Minimiser les risques"
      ],
      jury_logic: "Le jury attend une connaissance des dangers."
    },

    {
      question: "Pourquoi le numérique ne doit-il pas être systématique ?",
      choices: [
        "Parce qu’il est interdit",
        "Parce qu’il doit répondre à un objectif pédagogique",
        "Parce qu’il est difficile",
        "Parce qu’il est inutile"
      ],
      correct: 1,
      solution_steps: [
        "Le numérique est un moyen.",
        "Il n’est pas toujours pertinent."
      ],
      frequent_errors: [
        "Tout numériser"
      ],
      jury_logic: "Le jury attend un usage raisonné."
    },

    {
      question: "Quelle démarche pédagogique est adaptée au numérique ?",
      choices: [
        "Transmission passive",
        "Apprentissage actif et guidé",
        "Récitation",
        "Automatisation"
      ],
      correct: 1,
      solution_steps: [
        "Le numérique favorise l’activité des élèves.",
        "L’enseignant guide."
      ],
      frequent_errors: [
        "Laisser les élèves seuls"
      ],
      jury_logic: "Le jury attend une pédagogie active."
    },

    {
      question: "Quelle posture adopter face aux erreurs des élèves avec le numérique ?",
      choices: [
        "Punitive",
        "Indifférente",
        "Éducative et accompagnante",
        "Autoritaire"
      ],
      correct: 2,
      solution_steps: [
        "L’erreur permet d’apprendre.",
        "Elle est analysée."
      ],
      frequent_errors: [
        "Sanctionner sans expliquer"
      ],
      jury_logic: "Le jury attend une posture éducative."
    },

    {
      question: "Quel est l’objectif principal du numérique éducatif ?",
      choices: [
        "Réciter",
        "Former des citoyens numériques responsables",
        "Occuper",
        "Moderniser"
      ],
      correct: 1,
      solution_steps: [
        "Le numérique participe à la formation citoyenne.",
        "Il développe l’esprit critique."
      ],
      frequent_errors: [
        "Vision techniciste"
      ],
      jury_logic: "Le jury attend une formation globale."
    },

    {
      question: "Quelle est l’attente principale du jury CRPE en numérique éducatif ?",
      choices: [
        "La rapidité",
        "La récitation",
        "Le raisonnement pédagogique expliqué",
        "La quantité d’outils"
      ],
      correct: 2,
      solution_steps: [
        "Le jury attend une réflexion pédagogique.",
        "L’outil n’est jamais une fin."
      ],
      frequent_errors: [
        "Lister des outils sans justification"
      ],
      jury_logic: "Le jury attend une posture professionnelle."
    }

  ]
};
