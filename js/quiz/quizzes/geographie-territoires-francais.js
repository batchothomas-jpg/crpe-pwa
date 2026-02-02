export const quiz = {
  id: "geographie-territoires-francais",
  matiere: "Géographie",
  chapitre: "Les territoires français",

  questions: [

    {
      question: "Qu’est-ce que le territoire français ?",
      choices: [
        "Uniquement la France métropolitaine",
        "Un espace organisé par l’État français",
        "Un espace naturel uniquement",
        "Un espace européen"
      ],
      correct: 1,
      solution_steps: [
        "Le territoire français est organisé par l’État.",
        "Il comprend plusieurs espaces."
      ],
      frequent_errors: [
        "Oublier les territoires ultramarins"
      ],
      jury_logic: "Le jury attend une définition institutionnelle."
    },

    {
      question: "Que comprend la France métropolitaine ?",
      choices: [
        "L’Europe entière",
        "La France continentale et la Corse",
        "Tous les territoires français",
        "Uniquement Paris"
      ],
      correct: 1,
      solution_steps: [
        "La France métropolitaine comprend la partie européenne.",
        "Elle inclut la Corse."
      ],
      frequent_errors: [
        "Exclure la Corse"
      ],
      jury_logic: "Le jury attend un repère spatial précis."
    },

    {
      question: "Que sont les territoires ultramarins ?",
      choices: [
        "Des pays étrangers",
        "Des territoires français situés hors d’Europe",
        "Des colonies",
        "Des espaces sans habitants"
      ],
      correct: 1,
      solution_steps: [
        "Les territoires ultramarins appartiennent à la France.",
        "Ils sont situés hors du continent européen."
      ],
      frequent_errors: [
        "Les considérer comme indépendants"
      ],
      jury_logic: "Le jury attend une distinction claire."
    },

    {
      question: "Quel est un territoire ultramarin français ?",
      choices: [
        "La Martinique",
        "La Suisse",
        "La Belgique",
        "Le Maroc"
      ],
      correct: 0,
      solution_steps: [
        "La Martinique est un territoire français d’outre-mer.",
        "Elle fait partie de la République."
      ],
      frequent_errors: [
        "Confondre DOM et pays étrangers"
      ],
      jury_logic: "Le jury attend des exemples maîtrisés."
    },

    {
      question: "Pourquoi les territoires ultramarins sont-ils importants ?",
      choices: [
        "Pour décorer les cartes",
        "Pour la diversité culturelle et géographique",
        "Pour réduire la France",
        "Pour éviter les échanges"
      ],
      correct: 1,
      solution_steps: [
        "Ils apportent une grande diversité.",
        "Ils élargissent la présence française."
      ],
      frequent_errors: [
        "Les réduire à des lieux touristiques"
      ],
      jury_logic: "Le jury attend une vision globale."
    },

    {
      question: "Quel est le rôle des régions en France ?",
      choices: [
        "Gouverner le pays",
        "Aménager et développer le territoire",
        "Diriger l’armée",
        "Créer les lois"
      ],
      correct: 1,
      solution_steps: [
        "Les régions participent à l’aménagement.",
        "Elles soutiennent le développement."
      ],
      frequent_errors: [
        "Confondre région et État"
      ],
      jury_logic: "Le jury attend une connaissance des acteurs."
    },

    {
      question: "Qu’est-ce qu’une métropole ?",
      choices: [
        "Une petite ville",
        "Une grande ville attractive et dynamique",
        "Un village",
        "Une région"
      ],
      correct: 1,
      solution_steps: [
        "Les métropoles concentrent population et activités.",
        "Elles sont attractives."
      ],
      frequent_errors: [
        "Confondre métropole et capitale"
      ],
      jury_logic: "Le jury attend une définition géographique."
    },

    {
      question: "Pourquoi Paris est-elle une métropole mondiale ?",
      choices: [
        "Parce qu’elle est ancienne",
        "Parce qu’elle concentre des fonctions de commandement",
        "Parce qu’elle est touristique",
        "Parce qu’elle est la plus grande ville"
      ],
      correct: 1,
      solution_steps: [
        "Paris concentre pouvoirs politiques, économiques et culturels.",
        "Elle rayonne à l’échelle mondiale."
      ],
      frequent_errors: [
        "Réduire Paris au tourisme"
      ],
      jury_logic: "Le jury attend une analyse fonctionnelle."
    },

    {
      question: "Qu’est-ce que l’aménagement du territoire ?",
      choices: [
        "La décoration des villes",
        "L’organisation des espaces pour réduire les inégalités",
        "La destruction des espaces",
        "La construction sans règles"
      ],
      correct: 1,
      solution_steps: [
        "L’aménagement vise à équilibrer les territoires.",
        "Il répond à des besoins."
      ],
      frequent_errors: [
        "Confondre aménagement et urbanisation"
      ],
      jury_logic: "Le jury attend une finalité sociale."
    },

    {
      question: "Pourquoi cherche-t-on à réduire les inégalités territoriales ?",
      choices: [
        "Pour uniformiser",
        "Pour assurer l’égalité entre les territoires",
        "Pour supprimer les villes",
        "Pour éviter la géographie"
      ],
      correct: 1,
      solution_steps: [
        "Tous les territoires doivent être attractifs.",
        "Cela favorise la cohésion nationale."
      ],
      frequent_errors: [
        "Ignorer les disparités"
      ],
      jury_logic: "Le jury attend une approche citoyenne."
    },

    {
      question: "Quelle est une contrainte d’un territoire rural isolé ?",
      choices: [
        "Trop de services",
        "L’éloignement des services",
        "La surpopulation",
        "La pollution"
      ],
      correct: 1,
      solution_steps: [
        "Les services sont parfois éloignés.",
        "Les déplacements sont longs."
      ],
      frequent_errors: [
        "Idéaliser le rural"
      ],
      jury_logic: "Le jury attend une analyse réaliste."
    },

    {
      question: "Quel est un enjeu majeur des territoires littoraux français ?",
      choices: [
        "La désertification",
        "La surfréquentation et la protection",
        "L’isolement",
        "L’absence d’activités"
      ],
      correct: 1,
      solution_steps: [
        "Les littoraux attirent population et touristes.",
        "Ils doivent être protégés."
      ],
      frequent_errors: [
        "Voir le littoral comme un espace sans contraintes"
      ],
      jury_logic: "Le jury attend une analyse enjeux / contraintes."
    },

    {
      question: "Pourquoi les montagnes sont-elles des territoires spécifiques ?",
      choices: [
        "Parce qu’elles sont plates",
        "Parce qu’elles présentent des contraintes naturelles",
        "Parce qu’elles sont vides",
        "Parce qu’elles sont uniquement touristiques"
      ],
      correct: 1,
      solution_steps: [
        "Le relief et le climat contraignent les activités.",
        "Ils nécessitent des aménagements spécifiques."
      ],
      frequent_errors: [
        "Les réduire au tourisme"
      ],
      jury_logic: "Le jury attend une analyse géographique."
    },

    {
      question: "Quelle est une erreur fréquente des élèves sur les territoires français ?",
      choices: [
        "Comparer",
        "Penser que tous les territoires se ressemblent",
        "Utiliser une carte",
        "Justifier"
      ],
      correct: 1,
      solution_steps: [
        "Les territoires sont divers.",
        "Ils ont des contraintes différentes."
      ],
      frequent_errors: [
        "Vision homogène"
      ],
      jury_logic: "Le jury attend la prise en compte de la diversité."
    },

    {
      question: "Pourquoi comparer territoires métropolitains et ultramarins ?",
      choices: [
        "Pour juger",
        "Pour comprendre des réalités différentes",
        "Pour hiérarchiser",
        "Pour réciter"
      ],
      correct: 1,
      solution_steps: [
        "Les contextes géographiques diffèrent.",
        "La comparaison éclaire les enjeux."
      ],
      frequent_errors: [
        "Comparer sans contexte"
      ],
      jury_logic: "Le jury attend une démarche comparative."
    },

    {
      question: "Pourquoi enseigner les territoires français à l’école primaire ?",
      choices: [
        "Pour apprendre des listes",
        "Pour comprendre l’organisation du territoire national",
        "Pour dessiner",
        "Pour évaluer"
      ],
      correct: 1,
      solution_steps: [
        "Les élèves comprennent leur pays.",
        "Ils développent une conscience territoriale."
      ],
      frequent_errors: [
        "Vision descriptive uniquement"
      ],
      jury_logic: "Le jury attend une finalité citoyenne."
    },

    {
      question: "Quelle démarche est géographique pour étudier les territoires français ?",
      choices: [
        "Observer, décrire, expliquer",
        "Deviner",
        "Réciter",
        "Imaginer"
      ],
      correct: 0,
      solution_steps: [
        "La géographie repose sur l’analyse spatiale.",
        "L’explication est essentielle."
      ],
      frequent_errors: [
        "Raconter sans analyser"
      ],
      jury_logic: "Le jury attend une méthodologie rigoureuse."
    },

    {
      question: "Quelle posture adopter face aux erreurs sur les territoires français ?",
      choices: [
        "Punitive",
        "Indifférente",
        "Analytique et accompagnante",
        "Autoritaire"
      ],
      correct: 2,
      solution_steps: [
        "Les erreurs révèlent des incompréhensions.",
        "Elles permettent de progresser."
      ],
      frequent_errors: [
        "Corriger sans expliquer"
      ],
      jury_logic: "Le jury attend une posture professionnelle."
    },

    {
      question: "Quel est l’objectif principal de l’enseignement des territoires français ?",
      choices: [
        "Réciter",
        "Comprendre la diversité et les enjeux du territoire",
        "Dessiner",
        "Réussir les évaluations"
      ],
      correct: 1,
      solution_steps: [
        "Les territoires français sont variés.",
        "Ils posent des enjeux d’aménagement."
      ],
      frequent_errors: [
        "Accumuler des faits sans sens"
      ],
      jury_logic: "Le jury attend une formation intellectuelle."
    },

    {
      question: "Quelle est l’attente principale du jury CRPE en géographie des territoires français ?",
      choices: [
        "La rapidité",
        "La récitation",
        "Le raisonnement géographique expliqué",
        "La quantité de régions"
      ],
      correct: 2,
      solution_steps: [
        "Le jury attend des analyses argumentées.",
        "Le raisonnement est central."
      ],
      frequent_errors: [
        "Réponse sans justification"
      ],
      jury_logic: "Le jury attend une posture réflexive."
    }

  ]
};
