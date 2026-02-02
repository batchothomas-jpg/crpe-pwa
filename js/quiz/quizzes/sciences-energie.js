export const quiz = {
  id: "sciences-matiere",
  matiere: "Sciences",
  chapitre: "La matière et les matériaux",

  questions: [

    {
      question: "Qu’appelle-t-on la matière ?",
      choices: [
        "Ce qui est vivant",
        "Ce qui peut être mesuré uniquement",
        "Tout ce qui a une masse et occupe un espace",
        "Uniquement les solides"
      ],
      correct: 2,
      solution_steps: [
        "La matière occupe un volume.",
        "Elle possède une masse."
      ],
      frequent_errors: [
        "Limiter la matière aux solides"
      ],
      jury_logic: "Le jury attend une définition scientifique simple et exacte."
    },

    {
      question: "Quels sont les trois états de la matière enseignés à l’école primaire ?",
      choices: [
        "Solide, liquide, gazeux",
        "Dur, mou, fluide",
        "Froid, chaud, tiède",
        "Visible, invisible, transparent"
      ],
      correct: 0,
      solution_steps: [
        "La matière peut être solide, liquide ou gazeuse.",
        "Ces états dépendent des conditions."
      ],
      frequent_errors: [
        "Confondre état et propriété"
      ],
      jury_logic: "Le jury attend une classification claire."
    },

    {
      question: "Quelle propriété caractérise un solide ?",
      choices: [
        "Il n’a pas de forme propre",
        "Il occupe tout l’espace",
        "Il a une forme propre",
        "Il est toujours dur"
      ],
      correct: 2,
      solution_steps: [
        "Un solide conserve sa forme.",
        "Il ne s’adapte pas au récipient."
      ],
      frequent_errors: [
        "Dire qu’un solide est forcément dur"
      ],
      jury_logic: "Le jury attend une distinction état / propriété."
    },

    {
      question: "Quelle propriété caractérise un liquide ?",
      choices: [
        "Il a une forme propre",
        "Il s’écoule et prend la forme du récipient",
        "Il est invisible",
        "Il ne peut pas changer d’état"
      ],
      correct: 1,
      solution_steps: [
        "Un liquide s’écoule.",
        "Il n’a pas de forme propre."
      ],
      frequent_errors: [
        "Confondre liquide et gaz"
      ],
      jury_logic: "Le jury attend une observation correcte."
    },

    {
      question: "Quelle propriété caractérise un gaz ?",
      choices: [
        "Il a une forme fixe",
        "Il occupe un volume fixe",
        "Il occupe tout l’espace disponible",
        "Il est visible"
      ],
      correct: 2,
      solution_steps: [
        "Un gaz se diffuse.",
        "Il occupe tout l’espace."
      ],
      frequent_errors: [
        "Dire qu’un gaz n’a pas de masse"
      ],
      jury_logic: "Le jury attend une compréhension du comportement des gaz."
    },

    {
      question: "Qu’est-ce qu’un matériau ?",
      choices: [
        "Un objet",
        "Une matière utilisée pour fabriquer des objets",
        "Un outil",
        "Une énergie"
      ],
      correct: 1,
      solution_steps: [
        "Un matériau sert à fabriquer.",
        "Exemples : bois, métal, plastique."
      ],
      frequent_errors: [
        "Confondre objet et matériau"
      ],
      jury_logic: "Le jury attend une distinction claire."
    },

    {
      question: "Quel matériau est un bon conducteur électrique ?",
      choices: [
        "Le bois",
        "Le plastique",
        "Le métal",
        "Le carton"
      ],
      correct: 2,
      solution_steps: [
        "Les métaux laissent passer le courant.",
        "Ils sont conducteurs."
      ],
      frequent_errors: [
        "Penser que tous les solides conduisent"
      ],
      jury_logic: "Le jury attend la connaissance des propriétés des matériaux."
    },

    {
      question: "Quel matériau est un isolant thermique ?",
      choices: [
        "Le métal",
        "Le verre",
        "La laine",
        "L’aluminium"
      ],
      correct: 2,
      solution_steps: [
        "La laine limite les échanges de chaleur.",
        "Elle est isolante."
      ],
      frequent_errors: [
        "Confondre conducteur et isolant"
      ],
      jury_logic: "Le jury attend une application concrète."
    },

    {
      question: "Pourquoi classe-t-on les matériaux ?",
      choices: [
        "Pour les mémoriser",
        "Pour choisir le matériau adapté à un usage",
        "Pour faire des listes",
        "Pour évaluer"
      ],
      correct: 1,
      solution_steps: [
        "Chaque matériau a des propriétés.",
        "Le choix dépend de l’usage."
      ],
      frequent_errors: [
        "Classer sans critère"
      ],
      jury_logic: "Le jury attend un lien propriété / usage."
    },

    {
      question: "Quelle transformation est un changement d’état ?",
      choices: [
        "Couper du bois",
        "Fondre de la glace",
        "Peindre un mur",
        "Assembler des objets"
      ],
      correct: 1,
      solution_steps: [
        "La glace passe de l’état solide à liquide.",
        "C’est un changement d’état."
      ],
      frequent_errors: [
        "Confondre transformation physique et mécanique"
      ],
      jury_logic: "Le jury attend une identification correcte des transformations."
    },

    {
      question: "Comment s’appelle le passage de l’état liquide à solide ?",
      choices: [
        "Fusion",
        "Évaporation",
        "Solidification",
        "Condensation"
      ],
      correct: 2,
      solution_steps: [
        "La solidification correspond au passage liquide → solide."
      ],
      frequent_errors: [
        "Confondre fusion et solidification"
      ],
      jury_logic: "Le jury attend la maîtrise du vocabulaire scientifique."
    },

    {
      question: "Quel facteur peut provoquer un changement d’état ?",
      choices: [
        "La couleur",
        "La forme",
        "La température",
        "La taille"
      ],
      correct: 2,
      solution_steps: [
        "La température influence l’état de la matière.",
        "Chauffer ou refroidir provoque un changement."
      ],
      frequent_errors: [
        "Ignorer le rôle de la température"
      ],
      jury_logic: "Le jury attend une compréhension causale."
    },

    {
      question: "Pourquoi l’eau liquide devient-elle de la vapeur ?",
      choices: [
        "Parce qu’elle est légère",
        "Parce qu’elle est chauffée",
        "Parce qu’elle est agitée",
        "Parce qu’elle est visible"
      ],
      correct: 1,
      solution_steps: [
        "La chaleur fournit de l’énergie.",
        "L’eau passe à l’état gazeux."
      ],
      frequent_errors: [
        "Penser que l’eau disparaît"
      ],
      jury_logic: "Le jury attend une conservation de la matière."
    },

    {
      question: "Quelle est une erreur fréquente des élèves sur la matière ?",
      choices: [
        "Observer",
        "Penser que le gaz n’est pas de la matière",
        "Comparer",
        "Mesurer"
      ],
      correct: 1,
      solution_steps: [
        "Les gaz ont une masse et un volume.",
        "Ils sont donc de la matière."
      ],
      frequent_errors: [
        "Dire que l’air n’existe pas"
      ],
      jury_logic: "Le jury attend une analyse des conceptions erronées."
    },

    {
      question: "Pourquoi manipuler en sciences de la matière ?",
      choices: [
        "Pour jouer",
        "Pour rendre les notions observables",
        "Pour éviter l’écrit",
        "Pour gagner du temps"
      ],
      correct: 1,
      solution_steps: [
        "La manipulation rend visible l’invisible.",
        "Elle facilite la compréhension."
      ],
      frequent_errors: [
        "Manipuler sans objectif"
      ],
      jury_logic: "Le jury attend une démarche expérimentale."
    },

    {
      question: "Pourquoi enseigner la matière à l’école primaire ?",
      choices: [
        "Pour réciter des définitions",
        "Pour comprendre le monde matériel",
        "Pour faire des expériences",
        "Pour évaluer"
      ],
      correct: 1,
      solution_steps: [
        "La matière est omniprésente.",
        "La comprendre aide à agir sur le monde."
      ],
      frequent_errors: [
        "Vision uniquement descriptive"
      ],
      jury_logic: "Le jury attend une formation scientifique."
    },

    {
      question: "Quelle démarche est scientifique en étude de la matière ?",
      choices: [
        "Observer, expérimenter, conclure",
        "Deviner, répondre, corriger",
        "Lire, copier, réciter",
        "Regarder, écrire, apprendre"
      ],
      correct: 0,
      solution_steps: [
        "La science repose sur l’observation et l’expérimentation.",
        "Les conclusions sont argumentées."
      ],
      frequent_errors: [
        "Donner la réponse sans preuve"
      ],
      jury_logic: "Le jury attend une méthodologie rigoureuse."
    },

    {
      question: "Quelle posture adopter face aux erreurs en sciences de la matière ?",
      choices: [
        "Punitive",
        "Indifférente",
        "Analytique et accompagnante",
        "Autoritaire"
      ],
      correct: 2,
      solution_steps: [
        "L’erreur fait partie de l’apprentissage.",
        "Elle permet de construire le savoir."
      ],
      frequent_errors: [
        "Corriger sans expliquer"
      ],
      jury_logic: "Le jury attend une posture professionnelle."
    },

    {
      question: "Quel est l’objectif principal de l’enseignement de la matière ?",
      choices: [
        "Réciter",
        "Former l’esprit scientifique",
        "Faire des expériences",
        "Réussir les évaluations"
      ],
      correct: 1,
      solution_steps: [
        "La matière est un support pour raisonner.",
        "Elle développe l’esprit critique."
      ],
      frequent_errors: [
        "Accumuler des faits sans sens"
      ],
      jury_logic: "Le jury attend une formation intellectuelle."
    },

    {
      question: "Quelle est l’attente principale du jury CRPE en sciences de la matière ?",
      choices: [
        "La rapidité",
        "La récitation",
        "Le raisonnement scientifique expliqué",
        "La quantité d’expériences"
      ],
      correct: 2,
      solution_steps: [
        "Le jury attend une démarche expliquée.",
        "Le raisonnement est central."
      ],
      frequent_errors: [
        "Réponse juste sans justification"
      ],
      jury_logic: "Le jury attend une posture réflexive."
    }

  ]
};
