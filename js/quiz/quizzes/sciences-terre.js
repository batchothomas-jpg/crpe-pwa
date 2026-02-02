export const quiz = {
  id: "sciences-terre",
  matiere: "Sciences",
  chapitre: "La Terre et l’environnement",

  questions: [

    {
      question: "Quelle est la forme de la Terre ?",
      choices: [
        "Plate",
        "Cubique",
        "Sphérique",
        "Triangulaire"
      ],
      correct: 2,
      solution_steps: [
        "La Terre est approximativement sphérique.",
        "Elle n’est ni plate ni parfaitement ronde."
      ],
      frequent_errors: [
        "Penser que la Terre est parfaitement ronde"
      ],
      jury_logic: "Le jury attend une connaissance scientifique actuelle."
    },

    {
      question: "Pourquoi parle-t-on d’alternance jour / nuit ?",
      choices: [
        "Parce que la Terre tourne autour du Soleil",
        "Parce que le Soleil tourne autour de la Terre",
        "Parce que la Terre tourne sur elle-même",
        "Parce que la Lune éclaire la Terre"
      ],
      correct: 2,
      solution_steps: [
        "La Terre tourne sur elle-même en 24 heures.",
        "La face éclairée est le jour, l’autre est la nuit."
      ],
      frequent_errors: [
        "Confondre rotation et révolution"
      ],
      jury_logic: "Le jury attend la distinction rotation / révolution."
    },

    {
      question: "Quel mouvement de la Terre explique les saisons ?",
      choices: [
        "La rotation sur elle-même",
        "La révolution autour du Soleil",
        "Le mouvement de la Lune",
        "Le vent"
      ],
      correct: 1,
      solution_steps: [
        "La Terre tourne autour du Soleil en un an.",
        "L’inclinaison de l’axe explique les saisons."
      ],
      frequent_errors: [
        "Attribuer les saisons à la distance Terre–Soleil"
      ],
      jury_logic: "Le jury attend une explication correcte des saisons."
    },

    {
      question: "Quel astre est une étoile ?",
      choices: [
        "La Lune",
        "La Terre",
        "Le Soleil",
        "Mars"
      ],
      correct: 2,
      solution_steps: [
        "Le Soleil produit sa propre lumière.",
        "C’est une étoile."
      ],
      frequent_errors: [
        "Dire que la Lune est une étoile"
      ],
      jury_logic: "Le jury attend une classification des astres."
    },

    {
      question: "Quel est le rôle principal de l’atmosphère terrestre ?",
      choices: [
        "Produire de l’eau",
        "Protéger la Terre et permettre la vie",
        "Créer le vent",
        "Éclairer la planète"
      ],
      correct: 1,
      solution_steps: [
        "L’atmosphère protège des rayonnements.",
        "Elle rend la vie possible."
      ],
      frequent_errors: [
        "Réduire l’atmosphère à l’air"
      ],
      jury_logic: "Le jury attend une vision fonctionnelle de l’atmosphère."
    },

    {
      question: "Qu’est-ce qu’un paysage ?",
      choices: [
        "Une photo",
        "Un ensemble d’éléments naturels et humains",
        "Un décor",
        "Une carte"
      ],
      correct: 1,
      solution_steps: [
        "Un paysage comprend des éléments naturels.",
        "Il comprend aussi des éléments construits par l’homme."
      ],
      frequent_errors: [
        "Ne considérer que le naturel"
      ],
      jury_logic: "Le jury attend une définition géographique et scientifique."
    },

    {
      question: "Quelle action humaine peut dégrader l’environnement ?",
      choices: [
        "Recycler",
        "Planter des arbres",
        "Polluer les sols",
        "Réduire les déchets"
      ],
      correct: 2,
      solution_steps: [
        "La pollution dégrade les milieux.",
        "Elle affecte les êtres vivants."
      ],
      frequent_errors: [
        "Minimiser l’impact humain"
      ],
      jury_logic: "Le jury attend une conscience environnementale."
    },

    {
      question: "Pourquoi parle-t-on de ressources naturelles ?",
      choices: [
        "Parce qu’elles sont fabriquées",
        "Parce qu’elles proviennent de la nature",
        "Parce qu’elles sont gratuites",
        "Parce qu’elles sont infinies"
      ],
      correct: 1,
      solution_steps: [
        "Les ressources naturelles viennent de la nature.",
        "Elles sont utilisées par les humains."
      ],
      frequent_errors: [
        "Croire que toutes sont renouvelables"
      ],
      jury_logic: "Le jury attend une distinction claire."
    },

    {
      question: "Quelle ressource est renouvelable ?",
      choices: [
        "Le pétrole",
        "Le charbon",
        "Le gaz naturel",
        "L’énergie solaire"
      ],
      correct: 3,
      solution_steps: [
        "Le Soleil est inépuisable à l’échelle humaine."
      ],
      frequent_errors: [
        "Classer le gaz comme renouvelable"
      ],
      jury_logic: "Le jury attend une classification correcte des ressources."
    },

    {
      question: "Pourquoi l’eau est-elle une ressource précieuse ?",
      choices: [
        "Parce qu’elle est rare partout",
        "Parce qu’elle est indispensable à la vie",
        "Parce qu’elle est chère",
        "Parce qu’elle est invisible"
      ],
      correct: 1,
      solution_steps: [
        "Tous les êtres vivants ont besoin d’eau.",
        "Elle est essentielle à la vie."
      ],
      frequent_errors: [
        "Penser que l’eau est illimitée"
      ],
      jury_logic: "Le jury attend une approche responsable."
    },

    {
      question: "Qu’est-ce que le cycle de l’eau ?",
      choices: [
        "Le trajet de l’eau dans les tuyaux",
        "La circulation naturelle de l’eau sur Terre",
        "La consommation d’eau",
        "La fabrication de l’eau"
      ],
      correct: 1,
      solution_steps: [
        "L’eau circule entre océans, atmosphère et continents.",
        "Ce cycle est continu."
      ],
      frequent_errors: [
        "Limiter le cycle à l’évaporation"
      ],
      jury_logic: "Le jury attend une vision globale du cycle."
    },

    {
      question: "Quel phénomène permet la formation des nuages ?",
      choices: [
        "La fusion",
        "La condensation",
        "La solidification",
        "La combustion"
      ],
      correct: 1,
      solution_steps: [
        "La vapeur d’eau se transforme en gouttelettes.",
        "C’est la condensation."
      ],
      frequent_errors: [
        "Confondre avec l’évaporation"
      ],
      jury_logic: "Le jury attend une maîtrise du vocabulaire scientifique."
    },

    {
      question: "Pourquoi faut-il protéger la biodiversité ?",
      choices: [
        "Pour décorer la planète",
        "Parce qu’elle est inutile",
        "Parce qu’elle équilibre les écosystèmes",
        "Parce qu’elle est fragile seulement"
      ],
      correct: 2,
      solution_steps: [
        "Les espèces sont interdépendantes.",
        "La biodiversité assure l’équilibre des milieux."
      ],
      frequent_errors: [
        "Limiter la biodiversité aux animaux"
      ],
      jury_logic: "Le jury attend une compréhension des équilibres naturels."
    },

    {
      question: "Quelle est une erreur fréquente des élèves sur la Terre ?",
      choices: [
        "Observer",
        "Penser que les saisons dépendent de la distance au Soleil",
        "Comparer",
        "Mesurer"
      ],
      correct: 1,
      solution_steps: [
        "Les saisons dépendent de l’inclinaison de l’axe terrestre.",
        "Pas de la distance."
      ],
      frequent_errors: [
        "Modèle faux des saisons"
      ],
      jury_logic: "Le jury attend l’identification des conceptions erronées."
    },

    {
      question: "Pourquoi enseigner l’environnement à l’école primaire ?",
      choices: [
        "Pour apprendre des mots",
        "Pour former des citoyens responsables",
        "Pour faire des expériences",
        "Pour évaluer"
      ],
      correct: 1,
      solution_steps: [
        "Les élèves doivent comprendre les enjeux environnementaux.",
        "Cela développe la responsabilité."
      ],
      frequent_errors: [
        "Approche moralisatrice sans explication"
      ],
      jury_logic: "Le jury attend une éducation citoyenne."
    },

    {
      question: "Quelle démarche est scientifique pour étudier la Terre ?",
      choices: [
        "Observer, questionner, expliquer",
        "Deviner, répondre, corriger",
        "Lire, copier, réciter",
        "Regarder, apprendre"
      ],
      correct: 0,
      solution_steps: [
        "La science repose sur l’observation.",
        "Les explications sont argumentées."
      ],
      frequent_errors: [
        "Donner une réponse sans justification"
      ],
      jury_logic: "Le jury attend une méthodologie rigoureuse."
    },

    {
      question: "Quelle posture adopter face aux erreurs en sciences de la Terre ?",
      choices: [
        "Punitive",
        "Indifférente",
        "Analytique et accompagnante",
        "Autoritaire"
      ],
      correct: 2,
      solution_steps: [
        "L’erreur permet de comprendre les représentations.",
        "Elle aide à progresser."
      ],
      frequent_errors: [
        "Corriger sans expliquer"
      ],
      jury_logic: "Le jury attend une posture professionnelle."
    },

    {
      question: "Quel est l’objectif principal de l’enseignement de la Terre et de l’environnement ?",
      choices: [
        "Réciter des définitions",
        "Comprendre le monde et agir de manière responsable",
        "Faire des expériences",
        "Réussir les évaluations"
      ],
      correct: 1,
      solution_steps: [
        "Les élèves doivent comprendre leur environnement.",
        "Cela favorise des comportements responsables."
      ],
      frequent_errors: [
        "Accumuler des faits sans sens"
      ],
      jury_logic: "Le jury attend une formation globale."
    },

    {
      question: "Quelle est l’attente principale du jury CRPE en sciences de la Terre ?",
      choices: [
        "La rapidité",
        "La récitation",
        "Le raisonnement scientifique expliqué",
        "La quantité d’expériences"
      ],
      correct: 2,
      solution_steps: [
        "Le jury attend des explications argumentées.",
        "Le raisonnement est central."
      ],
      frequent_errors: [
        "Réponse juste sans justification"
      ],
      jury_logic: "Le jury attend une posture réflexive."
    }

  ]
};
