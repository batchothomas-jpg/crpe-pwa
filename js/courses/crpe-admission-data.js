// Synthèses et exercices originaux inspirés des thèmes des manuels fournis.
// Les modalités sont volontairement distinguées par session et voie de concours.
export const admissionCards = [
  {
    title: "1. Comprendre les voies et les épreuves",
    lesson: "Les manuels réunissent des repères de plusieurs sessions : malgré le nom du fichier fourni, la couverture intérieure du guide d’admission indique le concours 2024 ; le recueil des 22 sujets est consacré au CRPE 2022 et à un ancien format. Le concours externe bac+3 organisé depuis 2026 a une structure distincte. Les concours bac+5 sont maintenus à titre transitoire pour 2026 et 2027. Avant de s’entraîner sur un format, relever la voie, la session, les durées, les coefficients et les épreuves à partir de la page officielle de cette session.",
    prompt: "Expliquez au jury comment vous vérifieriez qu’un sujet d’entraînement correspond bien à votre voie de concours et à la session visée.",
    questions: [
      {q:"Pourquoi faut-il identifier la session et la voie avant d’utiliser une annale ?", a:["Les formats et épreuves peuvent différer","Les notions scolaires ne changent jamais","Les corrigés ne servent qu’une fois","Les annales ne comportent aucun programme"], c:0, e:"Les modalités dépendent de la voie et de la session ; une annale ancienne reste utile pour travailler des notions, mais pas forcément le format."},
      {q:"Quel est le meilleur repère pour les durées et épreuves d’une session ?", a:["Un manuel ancien","Une publication officielle à jour","Un forum non daté","Une annale d’une autre voie"], c:1, e:"Les textes et pages officielles de la session donnent le cadre applicable."},
      {q:"Le recueil de sujets corrigés fourni est surtout utile pour…", a:["Comprendre des formats et travailler des notions","Garantir le sujet de 2027","Remplacer tous les programmes","Apprendre les réponses par cœur"], c:0, e:"Ses sujets datés offrent des exercices et des raisonnements à réinvestir, sous réserve des différences de session."}
    ]
  },
  {
    title: "2. Lire un dossier et analyser une consigne",
    lesson: "Lire d’abord le sujet entier, puis repérer le niveau, la période, la place dans la séquence, le domaine et les productions ou documents fournis. Reformuler la demande en tâches concrètes : analyser, concevoir, justifier, évaluer ou remédier. Examiner la fonction de chaque document et sélectionner ce qui sert l’objectif. Une analyse critique décrit ce que le support permet et ses limites, sans juger son auteur.",
    prompt: "Présentez une démarche courte pour analyser un dossier de leçon avant de choisir les documents à utiliser.",
    questions: [
      {q:"Quel repère du sujet conditionne fortement les choix didactiques ?", a:["La couleur du dossier","Le niveau et la place de la séance dans la séquence","Le nombre de pages seulement","La longueur du titre"], c:1, e:"Les prérequis, les objectifs et le degré de guidage dépendent du niveau et du moment d’apprentissage."},
      {q:"Analyser un document de manuel signifie surtout…", a:["Le déclarer bon ou mauvais","Identifier ce qu’il fait travailler et ce qu’il ne permet pas encore","Le recopier dans l’exposé","Écarter tout document d’élève"], c:1, e:"Une analyse argumentée relie le support à l’objectif, aux acquis et aux besoins des élèves."},
      {q:"Avant de rédiger, le candidat devrait…", a:["Reformuler les tâches demandées","Réciter un plan standard","Commencer par les annexes","Ignorer les productions d’élèves"], c:0, e:"La reformulation évite de répondre à côté et aide à sélectionner les éléments utiles."}
    ]
  },
  {
    title: "3. Objectifs, compétences et prérequis",
    lesson: "Un objectif d’apprentissage décrit ce que l’élève pourra réaliser, avec un verbe observable et des critères de réussite adaptés. Une compétence mobilise des connaissances, capacités et attitudes dans une situation. Partir du programme et des acquis, déterminer les prérequis, puis choisir une tâche qui rend l’objectif visible. Éviter les objectifs trop nombreux ou formulés comme une activité (« faire une fiche ») plutôt que comme un apprentissage.",
    prompt: "Transformez « travailler les fractions » en objectif observable pour une séance et donnez un critère de réussite.",
    questions: [
      {q:"Quel énoncé décrit le mieux un objectif observable ?", a:["Découvrir les fractions","Résoudre et justifier une comparaison de fractions de même dénominateur","Faire une activité amusante","Aimer les mathématiques"], c:1, e:"L’action attendue et la justification sont observables et évaluables."},
      {q:"À quoi servent les prérequis ?", a:["À supprimer la recherche des élèves","À ajuster la tâche aux acquis nécessaires","À remplacer le programme","À classer définitivement les élèves"], c:1, e:"Ils aident à anticiper les obstacles et à choisir un point de départ accessible."},
      {q:"Une compétence mobilise notamment…", a:["Des connaissances, des capacités et des attitudes en situation","Une liste d’activités identiques","Un score isolé","Uniquement une trace écrite"], c:0, e:"Une compétence se manifeste par la mobilisation de ressources dans une situation."}
    ]
  },
  {
    title: "4. Construire une séquence cohérente",
    lesson: "Une séquence articule plusieurs séances au service d’un apprentissage principal. Une trame possible : diagnostic des acquis, mise en projet, situations de recherche, mise en commun, structuration et trace, entraînement, transfert, évaluation et régulation. Le nombre et l’ordre des séances dépendent de la notion et des besoins : le modèle est un outil de conception, pas un protocole obligatoire. Prévoir une progression et des liens avec les apprentissages précédents et suivants.",
    prompt: "Décrivez comment vous feriez évoluer une séquence si l’évaluation intermédiaire révèle une difficulté commune.",
    questions: [
      {q:"Une séquence est…", a:["Une séance longue sans étapes","Un ensemble articulé de séances autour d’un apprentissage","Une évaluation finale","Une succession d’exercices sans objectif"], c:1, e:"Les séances sont reliées dans le temps et organisées vers des objectifs d’apprentissage."},
      {q:"Pourquoi prévoir une phase de mise en commun ?", a:["Pour comparer les démarches et construire une formulation partagée","Pour supprimer la recherche","Pour classer les élèves","Pour gagner du temps sur toute séance"], c:0, e:"Elle rend visibles les procédures et prépare la structuration du savoir."},
      {q:"Si un obstacle est partagé par la classe, il faut d’abord…", a:["Refaire exactement la même séance","Analyser l’obstacle et ajuster la suite","Donner la réponse","Ignorer l’évaluation"], c:1, e:"La régulation s’appuie sur les indices recueillis et modifie les tâches ou les aides."}
    ]
  },
  {
    title: "5. Concevoir une séance et la présenter au jury",
    lesson: "Une présentation solide situe la séance dans la progression, annonce un objectif, les prérequis et les critères de réussite, puis décrit ce que font les élèves et ce que fait l’enseignant. Détailler les consignes, supports, organisation, recherche, échanges, institutionnalisation et évaluation. L’exposé est une explication professionnelle, pas une simulation théâtrale. Montrer l’activité intellectuelle des élèves et justifier les choix à partir du dossier.",
    prompt: "Présentez en deux minutes la structure d’une séance de lecture ou de mathématiques, du lancement à l’évaluation.",
    questions: [
      {q:"À quoi sert l’institutionnalisation ?", a:["À formuler et stabiliser le savoir construit","À remplacer les échanges","À donner une note","À faire disparaître les erreurs"], c:0, e:"Elle aide à nommer, organiser et mémoriser les apprentissages issus de la recherche."},
      {q:"Dans l’exposé, le jury doit pouvoir comprendre…", a:["Seulement ce que dit l’enseignant","Ce que font les élèves et pourquoi","Uniquement le titre du document","Le corrigé final seulement"], c:1, e:"La séance doit expliciter l’activité des élèves et les décisions pédagogiques qui la soutiennent."},
      {q:"Une justification didactique relie…", a:["Objectif, tâche, obstacles anticipés et apprentissage","Décor de classe et notation","Manuel et nombre de pages","Préférence personnelle et ordre des tables"], c:0, e:"Le choix d’une tâche se justifie par la notion, les élèves et les apprentissages visés."}
    ]
  },
  {
    title: "6. Évaluer, réguler et remédier",
    lesson: "L’évaluation diagnostique renseigne sur les acquis de départ ; l’évaluation formative fournit des informations pendant l’apprentissage pour ajuster l’enseignement ; une évaluation sommative dresse un bilan à un moment donné. Des critères de réussite compréhensibles soutiennent l’autoévaluation et l’évaluation par l’enseignant. Après l’analyse, proposer une remédiation ciblée, un entraînement ou un approfondissement plutôt qu’une répétition identique pour tous.",
    prompt: "Un élève donne une réponse fausse mais explique une démarche cohérente. Comment exploitez-vous cette réponse ?",
    questions: [
      {q:"Une évaluation diagnostique se place surtout…", a:["Avant ou au début d’un apprentissage","Uniquement à la fin de l’année","Après la certification","À la place des objectifs"], c:0, e:"Elle renseigne sur les acquis et représentations de départ."},
      {q:"Une évaluation formative sert à…", a:["Ajuster l’enseignement pendant l’apprentissage","Classer définitivement les élèves","Certifier un diplôme","Éviter les retours aux élèves"], c:0, e:"Elle donne des informations pour réguler la suite du travail."},
      {q:"Une remédiation pertinente…", a:["Reprend la même tâche sans diagnostic","Cible l’obstacle repéré avec une aide ou une tâche adaptée","Baisse systématiquement l’objectif","Remplace tout enseignement"], c:1, e:"Elle s’appuie sur l’analyse des erreurs et adapte les supports, démarches ou étayages."}
    ]
  },
  {
    title: "7. Démarches et méthodes pédagogiques",
    lesson: "Une démarche inductive part d’exemples ou de situations pour faire émerger une régularité ; une démarche déductive explicite une règle ou un modèle avant son application. La découverte, l’expérimentation, la démonstration, le questionnement et l’explication peuvent toutes être utiles selon l’objectif. L’important est d’articuler activité des élèves, explicitation et structuration, sans transformer une méthode en recette unique.",
    prompt: "Donnez une situation où une démarche de découverte est utile, puis expliquez comment vous stabilisez le savoir.",
    questions: [
      {q:"Une démarche inductive consiste plutôt à…", a:["Partir de cas pour dégager une régularité","Donner une règle sans observation","Évaluer avant d’enseigner","Éviter la formulation"], c:0, e:"Les élèves observent et comparent des cas avant la formulation d’une règle ou d’un savoir."},
      {q:"Quand une démarche déductive est-elle pertinente ?", a:["Lorsqu’un modèle explicite aide à résoudre une nouvelle série de tâches","Toujours, quel que soit le besoin","Uniquement en maternelle","Pour éviter toute activité élève"], c:0, e:"Son intérêt dépend des prérequis, de l’objectif et du besoin d’explicitation."},
      {q:"Après une recherche, il est utile de…", a:["Mettre en commun, structurer puis faire réinvestir","Passer directement à une autre notion","Éviter de nommer les stratégies","Noter uniquement la vitesse"], c:0, e:"La structuration rend le savoir partageable et le réinvestissement aide à le consolider."}
    ]
  },
  {
    title: "8. Comprendre l’erreur et différencier",
    lesson: "Une erreur est une information sur les procédures, les représentations, la compréhension de la consigne ou la charge de la tâche. La décrire précisément avant d’en rechercher l’origine. Différencier peut porter sur les supports, le temps, le degré de guidage, les outils, les modalités de travail ou la complexité intermédiaire, tout en gardant une ambition d’apprentissage commune. Une aide efficace rend progressivement l’élève plus autonome.",
    prompt: "Un élève confond périmètre et aire. Quelle hypothèse formulez-vous et quelle tâche de remédiation proposez-vous ?",
    questions: [
      {q:"Face à une erreur, la première étape est de…", a:["La sanctionner","Décrire la procédure et chercher l’obstacle","Donner la bonne réponse sans échange","Conclure à un manque de travail"], c:1, e:"L’erreur doit être analysée pour choisir une intervention adaptée."},
      {q:"La différenciation peut faire varier…", a:["Le support, le guidage ou le temps","La dignité des élèves","Le droit d’apprendre","La sécurité"], c:0, e:"Les voies d’accès peuvent changer sans renoncer à l’objectif d’apprentissage."},
      {q:"Une aide bien conçue vise à…", a:["Faire la tâche à la place de l’élève","Permettre une réussite plus autonome au fil du temps","Maintenir l’aide à l’identique","Éviter le retour sur erreur"], c:1, e:"L’étayage a vocation à soutenir puis à s’effacer quand les procédures se stabilisent."}
    ]
  },
  {
    title: "9. Développement de l’enfant et apprentissages",
    lesson: "Le développement moteur, cognitif, langagier, affectif et social évolue et varie selon les individus. Les théories proposent des angles différents : le béhaviorisme (Pavlov, Skinner) étudie l’apprentissage par associations, conséquences et retours ; Piaget décrit la construction active des connaissances, notamment par assimilation et accommodation ; Vygotski met en avant la médiation sociale et la zone proximale de développement ; Bruner éclaire l’étayage ; Wallon articule dimensions motrice, affective et sociale ; Bowlby et Ainsworth ont étudié l’attachement ; Bandura l’apprentissage par observation et le sentiment d’efficacité personnelle. Ces repères sont des cadres historiques de réflexion, pas des diagnostics ni des étiquettes d’élèves : observer les besoins et les tâches réelles.",
    prompt: "Comment tenez-vous compte de l’hétérogénéité du développement sans enfermer un élève dans une étiquette ?",
    questions: [
      {q:"Un repère de développement doit être utilisé…", a:["Comme une moyenne qui détermine tout","Avec prudence, en tenant compte de l’élève et de la situation","Pour diagnostiquer seul un trouble","Pour fixer les mêmes attentes sans observation"], c:1, e:"Les trajectoires sont diverses ; les repères orientent l’observation mais ne remplacent pas celle-ci."},
      {q:"Une approche socioconstructiviste met notamment l’accent sur…", a:["Les interactions et la médiation","La mémorisation seule","L’absence d’enseignant","Les notes comme moteur unique"], c:0, e:"Les échanges et l’étayage social participent à la construction des apprentissages."},
      {q:"Un retour efficace après un essai doit…", a:["Rendre visibles les critères et aider à ajuster la stratégie","Se limiter à « faux »","Comparer publiquement les élèves","Arriver seulement en fin d’année"], c:0, e:"Un retour précis aide l’élève à comprendre l’écart et la prochaine étape."},
      {q:"La zone proximale de développement chez Vygotski désigne…", a:["L’écart entre ce que l’élève fait seul et ce qu’il peut réussir avec une aide adaptée","Un âge fixe où tous les enfants apprennent la même chose","Une évaluation de personnalité","Un stade moteur universel"], c:0, e:"La notion met en relation les capacités actuelles, l’aide apportée et les apprentissages possibles."},
      {q:"Chez Piaget, l’assimilation et l’accommodation renvoient…", a:["À des processus de construction et de réorganisation des connaissances","À deux sanctions scolaires","À des types de mémoire uniquement","À des groupes d’âge fixes"], c:0, e:"Ces processus décrivent l’intégration d’une expérience aux schèmes existants et leur transformation."},
      {q:"L’étayage associé aux travaux de Bruner consiste à…", a:["Ajuster temporairement l’aide pour soutenir une tâche puis favoriser l’autonomie","Faire la tâche à la place de l’élève","Évaluer seulement le résultat final","Supprimer toute interaction"], c:0, e:"L’aide est adaptée à l’obstacle et peut s’effacer à mesure que l’élève progresse."},
      {q:"Les théories du développement sont utiles à l’enseignant surtout pour…", a:["Éclairer l’observation et choisir une aide, sans enfermer l’élève dans un modèle","Prédire exactement la réussite de chaque enfant","Remplacer les programmes et les évaluations","Attribuer une étiquette stable à chaque élève"], c:0, e:"Un cadre théorique soutient le raisonnement professionnel, mais ne remplace pas l’observation du contexte."}
    ]
  },
  {
    title: "10. Programmes, cycles et progressivité",
    lesson: "Situer une notion dans les programmes et dans la continuité des cycles. Une programmation ordonne les apprentissages sur une période ou une année ; une progression décrit leur complexification et les prérequis. Les objectifs de cycle doivent être traduits en situations adaptées à la classe. Les croisements entre disciplines donnent du sens lorsqu’ils servent les apprentissages visés, sans diluer les objectifs disciplinaires.",
    prompt: "Comment montrer qu’une séance de CM1 s’inscrit dans une progression et prépare les apprentissages suivants ?",
    questions: [
      {q:"Une programmation répond principalement à la question…", a:["Quand traiter les apprentissages ?","Qui aura la meilleure note ?","Quel élève sera dispensé ?","Quelle salle décorer ?"], c:0, e:"Elle répartit les apprentissages dans le temps."},
      {q:"Une progression rend surtout explicite…", a:["La montée en complexité et les étapes d’apprentissage","Le calendrier des sorties","Le classement des élèves","Les sanctions"], c:0, e:"Elle organise les acquisitions et leurs relations au fil du parcours."},
      {q:"Un croisement disciplinaire est pertinent quand…", a:["Il sert un objectif d’apprentissage identifiable","Il ajoute des matières sans lien","Il remplace les savoirs disciplinaires","Il évite toute évaluation"], c:0, e:"Le lien entre disciplines doit soutenir un apprentissage et rester lisible."}
    ]
  },
  {
    title: "11. Préparer une leçon de français",
    lesson: "Analyser la notion linguistique et le niveau demandé, puis lire l’ensemble du corpus : programmes, extraits de manuel, documents théoriques et productions d’élèves. Formuler un objectif et les prérequis, choisir une tâche qui fait raisonner sur la langue, prévoir la verbalisation et la trace écrite. Si une production d’élève est fournie, distinguer réussites, obstacles et remédiation. La séance doit être équilibrée entre recherche des élèves et apports de l’enseignant.",
    prompt: "À partir d’une production d’élève contenant une erreur d’accord, proposez une analyse, une question de relance et une remédiation.",
    questions: [
      {q:"Une séance d’étude de la langue doit faire travailler…", a:["La réflexion sur des exemples et la formulation de régularités","La récitation seule","La copie de définitions sans contexte","L’orthographe uniquement"], c:0, e:"Les manipulations et l’analyse contextualisée soutiennent la compréhension des faits de langue."},
      {q:"Que faire d’une production d’élève fournie dans le dossier ?", a:["La corriger sans l’analyser","Repérer réussites et procédures puis concevoir une suite pédagogique","La comparer à celle d’un autre candidat","La recopier"], c:1, e:"La production renseigne sur les apprentissages et aide à choisir une régulation."},
      {q:"Une trace écrite efficace…", a:["Stabilise l’essentiel construit par la classe","Remplace la recherche","Doit reproduire tout le manuel","N’a pas besoin d’être réutilisée"], c:0, e:"Elle synthétise le savoir à retenir et peut servir lors des séances ultérieures."}
    ]
  },
  {
    title: "12. Préparer une leçon de mathématiques",
    lesson: "Partir d’un problème ou d’une tâche qui mobilise la notion sans la rendre inaccessible. Anticiper les procédures possibles et les erreurs, choisir du matériel ou des représentations si elles éclairent le concept, puis organiser la comparaison des stratégies et la validation. Faire expliciter les raisonnements, institutionnaliser les connaissances et prévoir entraînement, transfert et critères d’évaluation. Dans les échanges, justifier le rôle des outils numériques et du calcul mental plutôt que les utiliser comme décor.",
    prompt: "Comment exploiter deux procédures différentes de résolution d’un problème pour construire un savoir commun ?",
    questions: [
      {q:"Une situation-problème pertinente…", a:["Amène les élèves à mobiliser ou construire la notion visée","Est choisie seulement parce qu’elle est ludique","Donne immédiatement la procédure","Ne comporte aucun critère de réussite"], c:0, e:"Le problème crée un besoin d’apprentissage et permet d’observer les stratégies."},
      {q:"La mise en comparaison des procédures sert à…", a:["Discuter leur validité et leurs conditions d’usage","Classer les élèves","Éviter la justification","Choisir toujours la procédure la plus longue"], c:0, e:"Comparer aide à expliciter les raisonnements et à valider les connaissances."},
      {q:"Un résultat numérique doit être…", a:["Confronté au contexte et à un ordre de grandeur","Accepté sans vérification","Arrondi au hasard","Vérifié uniquement avec une calculatrice"], c:0, e:"Le contexte et l’estimation aident à repérer une erreur de calcul ou d’unité."}
    ]
  },
  {
    title: "13. EPS : objectifs, situations et sécurité",
    lesson: "Construire un module d’EPS progressif à partir des apprentissages moteurs et des besoins du groupe. Une situation de référence permet d’observer les conduites initiales et les progrès. Organiser des situations qui font apprendre, préciser règles, rôles sociaux, matériel, espaces et critères de réussite. La sécurité est anticipée : règles explicites, vérification des installations, consignes, surveillance et adaptation aux capacités. L’EPS développe aussi coopération, autonomie, santé et culture corporelle.",
    prompt: "Dans un module de jeux collectifs, quelles observations vous aideraient à faire évoluer la tâche sans réduire l’activité à la victoire ?",
    questions: [
      {q:"Une situation de référence sert notamment à…", a:["Observer les conduites et mesurer les progrès","Remplacer toutes les séances","Sélectionner les meilleurs","Évaluer seulement la vitesse"], c:0, e:"Elle fournit des repères pour concevoir les situations et observer l’évolution."},
      {q:"En EPS, la sécurité suppose…", a:["Une anticipation des espaces, règles, matériels et capacités","Une consigne orale unique","La délégation totale aux élèves","Aucune adaptation"], c:0, e:"La prévention repose sur l’organisation et une vigilance active."},
      {q:"Des rôles d’observateur ou d’arbitre peuvent aider à…", a:["Développer responsabilité et compréhension des règles","Éliminer la pratique motrice","Créer un classement permanent","Remplacer les objectifs"], c:0, e:"Les rôles sociaux soutiennent les apprentissages citoyens et méthodologiques."}
    ]
  },
  {
    title: "14. Réussir l’entretien de motivation",
    lesson: "Préparer une présentation personnelle structurée, sincère et concise, qui relie parcours, expériences concrètes et projet professionnel. Ne pas réciter des qualités génériques : illustrer chaque affirmation et être capable d’en expliquer les limites ou les apprentissages. Écouter la question jusqu’au bout, répondre à son objet, argumenter avec nuance et reconnaître honnêtement ce qui reste à approfondir. Garder une communication claire et respectueuse tout au long de l’échange.",
    prompt: "Présentez une expérience qui vous a confirmé ou fait évoluer dans votre projet de devenir professeur des écoles.",
    questions: [
      {q:"Une motivation convaincante s’appuie surtout sur…", a:["Des expériences précises et une réflexion personnelle","Des slogans sur le métier","Une liste de qualités sans exemple","La critique d’autres métiers"], c:0, e:"Les exemples rendent le projet crédible et révèlent une capacité d’analyse."},
      {q:"Si une question du jury est difficile, il est utile de…", a:["Écouter, clarifier si besoin et raisonner avec prudence","Inventer une règle","Se braquer","Changer de sujet"], c:0, e:"La posture professionnelle inclut l’écoute, la nuance et la capacité à expliciter son raisonnement."},
      {q:"Un exemple personnel est utile s’il…", a:["Éclaire une compétence ou un apprentissage lié au métier","Remplace toutes les connaissances","Est le plus spectaculaire","Reste sans analyse"], c:0, e:"Il faut relier l’expérience au projet, aux compétences et à ce qu’on en a appris."}
    ]
  },
  {
    title: "15. Analyser une situation professionnelle",
    lesson: "Répondre avec une démarche stable : décrire les faits sans interprétation hâtive, repérer l’urgence et protéger les personnes, distinguer ce qui est connu de ce qui reste à vérifier, agir dans son rôle et selon les procédures de l’école, solliciter les interlocuteurs compétents, communiquer avec tact et confidentialité, puis assurer un suivi. Justifier les décisions par la sécurité, les droits des élèves, les valeurs du service public et l’intérêt éducatif.",
    prompt: "Un élève vous signale une moquerie répétée pendant la récréation. Quelles sont vos premières actions et quel suivi prévoyez-vous ?",
    questions: [
      {q:"Face à une situation professionnelle, la première réponse devrait…", a:["Établir les faits et traiter l’urgence","Chercher immédiatement un coupable","Promettre une sanction avant d’enquêter","Diffuser l’histoire aux familles"], c:0, e:"Une analyse factuelle et la protection immédiate évitent les conclusions hâtives."},
      {q:"La confidentialité implique de…", a:["Partager l’information uniquement avec les personnes concernées par l’action","Ne jamais signaler un danger","Tout garder pour soi","Parler de la situation publiquement"], c:0, e:"Les informations sont transmises selon le besoin d’agir et les procédures applicables."},
      {q:"Une réponse complète prévoit…", a:["Une action immédiate et un suivi","Une seule phrase générale","Une sanction automatique","Aucune vérification ultérieure"], c:0, e:"Le suivi permet de vérifier que la situation évolue et que les mesures sont efficaces."}
    ]
  },
  {
    title: "16. Valeurs de la République et laïcité",
    lesson: "L’école publique transmet les valeurs républicaines et apprend le respect des personnes, l’égalité et la liberté de conscience dans le cadre du service public. En situation, distinguer les faits, le cadre applicable et les besoins éducatifs. Expliquer les règles avec calme, éviter les stéréotypes et traiter les élèves avec équité. Pour les cas concrets, se référer aux textes officiels en vigueur et à l’équipe de direction plutôt que d’improviser une règle juridique.",
    prompt: "Comment réagiriez-vous à des moqueries visant les convictions ou l’apparence d’un élève ?",
    questions: [
      {q:"Une réponse éducative face à une discrimination doit…", a:["Protéger l’élève, faire cesser les faits et assurer un suivi","Minimiser pour éviter le conflit","Demander à la victime de changer","Exposer publiquement les élèves"], c:0, e:"La protection, l’écoute et le traitement éducatif sont nécessaires ; les procédures doivent être respectées."},
      {q:"La laïcité à l’école s’explique notamment par…", a:["La neutralité du service public et la liberté de conscience","L’interdiction de parler de l’histoire des religions","L’obligation d’avoir les mêmes convictions","L’absence de règles communes"], c:0, e:"Il faut distinguer neutralité du service, liberté de conscience et règles applicables aux élèves."},
      {q:"En cas de doute sur une règle juridique, le candidat devrait…", a:["Vérifier les textes et solliciter les interlocuteurs compétents","Inventer une interdiction","Décider selon ses convictions personnelles","Promettre une réponse immédiate sans vérification"], c:0, e:"Une posture responsable consiste à s’appuyer sur les textes et la chaîne institutionnelle."}
    ]
  },
  {
    title: "17. Fonctionnement de l’école et partenariats",
    lesson: "L’école fonctionne au sein d’une communauté éducative : direction, enseignants, personnels municipaux, familles, intervenants et partenaires ont des rôles distincts. Le travail collectif suppose de communiquer avec clarté, de respecter la confidentialité et de construire la coéducation sans transférer ses responsabilités professionnelles. Connaître les dispositifs d’aide à grands traits permet d’orienter une réflexion, mais leur mise en place dépend des procédures et textes en vigueur.",
    prompt: "Comment associer les familles à un suivi d’élève tout en respectant le rôle de chacun et la confidentialité ?",
    questions: [
      {q:"La coéducation suppose…", a:["Des échanges et une clarification des rôles","Que les parents remplacent l’enseignant","Une communication uniquement en cas de sanction","La divulgation des dossiers d’autres élèves"], c:0, e:"Le partenariat s’appuie sur la coopération, l’information utile et le respect des responsabilités."},
      {q:"Un intervenant extérieur…", a:["Agit dans un cadre défini avec l’équipe pédagogique","Décide seul des objectifs de classe","Remplace automatiquement l’enseignant","N’a pas à connaître les consignes"], c:0, e:"L’intervention doit s’inscrire dans le projet pédagogique et les règles de sécurité."},
      {q:"Pour un besoin d’aide durable, il faut…", a:["Échanger dans l’équipe et suivre les démarches adaptées","Étiqueter l’élève","Décider seul d’un dispositif","Éviter d’informer la famille"], c:0, e:"Les réponses s’élaborent dans un cadre collectif, avec les interlocuteurs concernés."}
    ]
  },
  {
    title: "18. Inclusion, besoins et dispositifs d’aide",
    lesson: "Observer les obstacles à l’apprentissage et les besoins de l’élève avant de choisir une adaptation. Selon la situation, ajuster consignes, supports, temps, outils, organisation ou étayage, en maintenant des objectifs ambitieux et accessibles. Les dispositifs tels que PPRE, PAP, PAI ou PPS répondent à des cadres et besoins différents : ne pas les confondre et vérifier le rôle des professionnels concernés. Protéger la dignité et la confidentialité de l’élève.",
    prompt: "Un élève ne parvient pas à entrer dans une tâche écrite longue. Quelles adaptations essayez-vous et comment en évaluez-vous l’effet ?",
    questions: [
      {q:"Avant de proposer une adaptation, il est utile de…", a:["Identifier l’obstacle et les réussites déjà observées","Réduire l’objectif sans analyse","Comparer l’élève à la moyenne","Transmettre son diagnostic à la classe"], c:0, e:"L’analyse des besoins aide à choisir une aide pertinente et respectueuse."},
      {q:"PPRE, PAP, PAI et PPS…", a:["Désignent des cadres différents à ne pas confondre","Sont des synonymes","Sont décidés par un seul enseignant sans échange","Remplacent les apprentissages"], c:0, e:"Chaque dispositif répond à un cadre spécifique ; les procédures et responsabilités doivent être vérifiées."},
      {q:"Une adaptation réussie doit être…", a:["Évaluée pour voir si elle réduit l’obstacle","Maintenue sans observation","Visible pour toute la classe","Sans lien avec l’objectif"], c:0, e:"On observe ses effets puis on ajuste pour soutenir l’accès et l’autonomie."}
    ]
  },
  {
    title: "19. Sécurité, surveillance et sorties",
    lesson: "La sécurité s’anticipe par la préparation des locaux, du matériel, des déplacements et des consignes. En cas d’incident, protéger, alerter les personnes compétentes, appliquer les protocoles et assurer une transmission factuelle. Pour les sorties, vérifier autorisations, encadrement, itinéraire, besoins particuliers et responsabilités selon le cadre actuel. Les détails réglementaires évoluent : les règles précises du département et de la session priment sur les chiffres d’un manuel ancien.",
    prompt: "Lors d’une sortie, un élève manque à l’appel au moment du rassemblement. Décrivez vos priorités immédiates.",
    questions: [
      {q:"Lors d’un incident, la priorité immédiate est…", a:["Mettre les élèves en sécurité et alerter selon le protocole","Chercher d’abord qui est fautif","Finir l’activité","Publier un message aux parents"], c:0, e:"La protection et l’alerte priment ; la suite se fait dans le cadre des procédures."},
      {q:"Pour préparer une sortie, il faut notamment…", a:["Vérifier encadrement, trajet, autorisations et besoins","Se fier à une règle mémorisée sans date","Prévenir seulement les élèves","Improviser le point de rassemblement"], c:0, e:"L’organisation doit anticiper les risques, les responsabilités et les besoins des élèves."},
      {q:"Pourquoi vérifier les règles locales et actuelles ?", a:["Les textes et modalités peuvent évoluer","Les manuels sont toujours faux","La sécurité est optionnelle","Les règles n’existent que pour les sorties"], c:0, e:"Les modalités réglementaires doivent être vérifiées dans leur version applicable."}
    ]
  },
  {
    title: "20. Posture professionnelle et sanctions éducatives",
    lesson: "La posture professionnelle associe responsabilité, neutralité, respect, discernement et coopération. Face à un comportement problématique, protéger les élèves, rappeler le cadre, écouter les personnes concernées, établir les faits et choisir une réponse proportionnée et éducative selon le règlement applicable. Une sanction ne doit pas humilier ni porter atteinte à la dignité. Distinguer sanction, punition, réparation et accompagnement, et assurer un suivi.",
    prompt: "Deux élèves se sont disputés et l’un a été blessé. Comment articulez-vous protection, recueil des faits et réponse éducative ?",
    questions: [
      {q:"Une réponse éducative à un comportement doit être…", a:["Proportionnée, explicite et conforme au cadre","Humiliante pour servir d’exemple","Automatique sans écouter","Décidée selon la popularité de l’élève"], c:0, e:"La réponse doit protéger, rappeler la règle et respecter la dignité de l’élève."},
      {q:"Après un conflit, il convient d’abord de…", a:["Sécuriser, écouter et établir les faits","Faire choisir une sanction à la classe","Publier les versions","Conclure sans vérifier"], c:0, e:"La sécurité et une compréhension factuelle de la situation guident les suites."},
      {q:"La réparation éducative vise notamment à…", a:["Faire comprendre l’impact et restaurer la relation lorsque c’est possible","Humilier l’élève","Remplacer toute règle","Éviter les échanges"], c:0, e:"Elle doit être liée au dommage et contribuer à la responsabilisation, dans un cadre adapté."}
    ]
  },
  {
    title: "21. Méthode des écrits : précision, temps et rédaction",
    lesson: "Lire chaque question jusqu’au bout et respecter exactement le verbe de consigne. Délimiter les extraits en français, nommer les catégories avec précision et justifier par des indices. En mathématiques, garder des notations correctes, une démarche lisible, les unités et une vérification de vraisemblance. Répartir le temps, laisser une question temporairement si elle bloque et suivre l’ordre du sujet. Une rédaction claire et structurée est préférable à une réponse longue hors sujet.",
    prompt: "Comment éviter de perdre du temps sur une question difficile tout en laissant une copie lisible et complète ?",
    questions: [
      {q:"En mathématiques, une réponse soignée doit généralement…", a:["Présenter les étapes utiles, les unités et une conclusion","Donner uniquement un nombre","Remplacer les notations par des mots vagues","Développer toutes les pistes même non demandées"], c:0, e:"Une démarche lisible et une conclusion contextualisée rendent le raisonnement vérifiable."},
      {q:"Si une question bloque, la stratégie la plus efficace est souvent de…", a:["Y consacrer tout le temps restant","La signaler, avancer et y revenir si le temps le permet","Écrire une réponse au hasard","Abandonner les autres exercices"], c:1, e:"La gestion du temps protège les points accessibles ailleurs dans le sujet."},
      {q:"Une réponse en français doit être…", a:["Précise et proportionnée à la consigne","La plus longue possible","Une liste de termes sans lien","Un résumé général quelle que soit la question"], c:0, e:"La précision et la pertinence comptent davantage que les développements hors sujet."}
    ]
  }
];

export const professionalCases = [
  {
    title: "Moqueries répétées dans la cour",
    prompt: "Un élève signale qu’un groupe se moque régulièrement de son accent. Il ne veut pas que vous en parliez à ses parents.",
    guide: "Écouter sans minimiser ; faire cesser les faits et protéger l’élève ; recueillir des éléments séparément et avec tact ; alerter l’équipe selon les procédures de l’école ; évaluer le risque et organiser un suivi ; associer les familles et les ressources adaptées dans le respect de la confidentialité. Expliquer à l’élève les limites de la confidentialité lorsqu’une protection est nécessaire."
  },
  {
    title: "Désaccord avec une famille sur une évaluation",
    prompt: "Un parent conteste vivement une appréciation et demande les résultats détaillés d’un autre élève.",
    guide: "Accueillir la demande et écouter les faits ; expliquer les critères et les productions de son enfant ; protéger les données des autres élèves ; proposer un échange dans un cadre calme ; convenir d’un suivi pédagogique et solliciter la direction si nécessaire."
  },
  {
    title: "Blessure pendant une activité physique",
    prompt: "Un élève chute pendant une séance d’EPS et se plaint d’une douleur importante.",
    guide: "Arrêter ou sécuriser l’activité ; appliquer le protocole de premiers secours et alerter les personnes compétentes ; surveiller le reste du groupe ; informer selon la procédure ; consigner des faits précis et analyser ensuite l’organisation pour prévenir une répétition. Ne pas poser de diagnostic médical."
  },
  {
    title: "Élève en difficulté face à une consigne",
    prompt: "Plusieurs élèves n’ont pas commencé l’exercice et disent ne pas comprendre la consigne.",
    guide: "Vérifier la compréhension sans culpabiliser ; demander aux élèves de reformuler ; repérer les mots ou étapes qui bloquent ; expliciter ou représenter la tâche ; proposer un étayage ; observer si l’adaptation permet l’entrée dans l’activité puis ajuster."
  },
  {
    title: "Incident lors d’une sortie",
    prompt: "Au point de rassemblement, un élève manque à l’appel et le groupe attend près d’une route.",
    guide: "Mettre immédiatement le groupe à l’abri et le confier à l’adulte prévu ; appliquer le protocole de sortie ; alerter la direction et les secours si nécessaire ; ne jamais laisser le groupe sans surveillance ; établir ensuite une chronologie factuelle et assurer les transmissions prévues."
  },
  {
    title: "Question liée à la laïcité en classe",
    prompt: "Un échange sur une œuvre donne lieu à des propos dévalorisants envers une conviction religieuse.",
    guide: "Interrompre les propos portant atteinte à un élève ; rappeler le cadre de respect et de liberté de conscience ; distinguer étude d’un fait culturel ou religieux et adhésion ; reprendre l’objectif d’apprentissage ; solliciter l’équipe si la situation le requiert et vérifier les textes applicables."
  }
];

export const writtenPractice = [
  {
    title: "Mini-sujet français — lecture, langue et réflexion",
    duration: "Entraînement original — 50 minutes",
    text: "Chaque vendredi, la classe choisit une question à explorer dans le quartier. La semaine dernière, les élèves ont observé les arbres de la cour et comparé les endroits où le sol restait humide. Ils ont noté leurs hypothèses, puis sont revenus vérifier leurs observations après plusieurs jours. Certains avaient pensé que l’ombre expliquait tout ; les mesures ont montré que la nature du sol comptait aussi. Le carnet collectif garde la trace des questions, des désaccords et des découvertes. Il ne donne pas toujours une réponse immédiate, mais il apprend à chercher des indices et à réviser une idée.",
    tasks: [
      "1. Dans « les endroits où le sol restait humide », donnez la nature et la fonction de la proposition introduite par « où ».",
      "2. Analysez la forme verbale « avaient pensé » : infinitif, mode, temps, voix et valeur en contexte.",
      "3. Expliquez le sens du verbe « réviser » dans la dernière phrase et donnez un mot de la même famille.",
      "4. En vous appuyant sur le texte, rédigez un court développement : pourquoi confronter une hypothèse à des observations peut-il aider à apprendre ?"
    ],
    correction: [
      "« Où le sol restait humide » est une proposition subordonnée relative, introduite par le pronom relatif « où », qui complète l’antécédent « endroits ».",
      "« Avaient pensé » : infinitif penser, indicatif, plus-que-parfait, voix active. Le temps marque une hypothèse antérieure aux observations rapportées ensuite.",
      "« Réviser » signifie modifier ou réexaminer une idée à la lumière d’indices. Mot de la famille : révision ou révisable.",
      "Pistes : formuler une hypothèse rend le raisonnement explicite ; observer et mesurer apporte des indices ; comparer les résultats peut conduire à modifier une explication. Un développement doit relier ces idées au texte et les organiser."
    ],
    rubric: "Barème indicatif /20 : étude de la langue 8, lexique 3, réflexion 9. Valoriser les justifications précises et la qualité de la rédaction."
  },
  {
    title: "Mini-sujet français B — syntaxe, lexique et argumentation",
    duration: "Entraînement original — 45 minutes",
    text: "À l’école, le jardin n’est pas seulement un lieu où l’on observe des plantes. Les élèves y formulent des questions, confrontent leurs idées et apprennent à décrire avec précision les plantes qu’ils observent. Une observation attentive ne donne pas toujours immédiatement une explication : il faut parfois comparer, mesurer ou recommencer. Le carnet de terrain garde la trace de ces essais et permet à la classe de discuter les conclusions.",
    tasks: [
      "1. Dans « Les élèves y formulent des questions », donner la nature et la fonction de « y », puis préciser son référent.",
      "2. Dans « les plantes qu’ils observent », délimiter la proposition subordonnée relative et indiquer la fonction du pronom relatif.",
      "3. Expliquer la formation et le sens de l’adverbe « attentivement » dans le texte.",
      "4. En 8 à 10 lignes, expliquer en quoi la confrontation d’observations peut aider une classe à construire un savoir. Appuyer la réponse sur deux idées du texte et organiser le raisonnement."
    ],
    correction: [
      "« Y » est un pronom adverbial, complément de lieu du verbe « formulent » ; il reprend « au jardin », évoqué dans la phrase précédente.",
      "La subordonnée relative est « qu’ils observent ». Introduite par le pronom relatif « que », elle complète l’antécédent « plantes » ; « que » est COD du verbe « observent ».",
      "« Attentivement » est un adverbe formé sur la forme féminine « attentive », à laquelle s’ajoute le suffixe -ment. Il signifie ici que l’observation est menée avec soin et concentration.",
      "Pistes de réponse : formuler une question rend le problème explicite ; confronter les descriptions aide à distinguer observation et interprétation ; comparer, mesurer et recommencer permet de mettre les hypothèses à l’épreuve ; le carnet conserve des traces discutables par tous. Une réponse aboutie relie deux de ces idées et conclut sur la construction collective d’une explication."
    ],
    rubric: "Barème indicatif /20 : analyse syntaxique justifiée (7), lexique et formation du mot (3), compréhension des idées (4), argumentation organisée et langue (6)."
  },
  {
    title: "Mini-sujet mathématiques A — proportionnalité et géométrie",
    duration: "Entraînement original — 45 minutes",
    text: "Une école prépare une maquette d’un jardin rectangulaire de 24 m sur 15 m à l’échelle 1/200. Pour planter le pourtour, l’équipe prévoit un plant tous les 2 m, sans compter les quatre coins deux fois.",
    tasks: [
      "1. Calculer les dimensions de la maquette en centimètres.",
      "2. Calculer le périmètre réel du jardin.",
      "3. Estimer le nombre de plants nécessaires si un plant est placé tous les 2 m le long du pourtour. Expliquer votre convention aux coins.",
      "4. Une parcelle représente le quart de la surface du jardin. Calculer son aire."
    ],
    correction: [
      "À l’échelle 1/200 : 24 m = 2 400 cm, donc 12 cm ; 15 m = 1 500 cm, donc 7,5 cm.",
      "P = 2 × (24 + 15) = 78 m.",
      "78 ÷ 2 = 39 intervalles de 2 m sur un parcours fermé de 78 m, donc 39 positions distinctes si le point de départ est compté une seule fois. Les coins sont alors comptés une fois chacun.",
      "Aire = 24 × 15 = 360 m² ; le quart vaut 90 m²."
    ],
    rubric: "Barème indicatif /10 : conversions et échelle (3), périmètre et interprétation (3), aire et fraction (2), unités et justification (2)."
  },
  {
    title: "Mini-sujet mathématiques B — données et probabilités",
    duration: "Entraînement original — 45 minutes",
    text: "Dans une classe de 25 élèves, un relevé des livres empruntés donne les effectifs suivants : albums 10, bandes dessinées 8, documentaires 5, poésie 2. Pour une activité, une carte est tirée au hasard parmi 10 cartes rouges, 6 bleues et 4 vertes.",
    tasks: [
      "1. Calculer la fréquence des emprunts de documentaires et l’exprimer en pourcentage.",
      "2. Calculer la moyenne du nombre de pages lues par groupe si quatre groupes ont lu 12, 15, 9 et 16 pages.",
      "3. Donner la probabilité de tirer une carte bleue. Les couleurs sont-elles équiprobables ?",
      "4. On ajoute 5 cartes jaunes. Calculer la nouvelle probabilité de tirer une carte bleue."
    ],
    correction: [
      "5/25 = 1/5 = 0,2 = 20 %.",
      "(12 + 15 + 9 + 16)/4 = 52/4 = 13 pages.",
      "Il y a 20 cartes ; P(bleue) = 6/20 = 3/10. Les couleurs ne sont pas équiprobables car les effectifs diffèrent.",
      "Il y a maintenant 25 cartes et toujours 6 bleues : P(bleue) = 6/25."
    ],
    rubric: "Barème indicatif /10 : fréquences (2), moyenne (2), probabilité et justification (4), prise en compte du nouvel effectif (2)."
  },
  {
    title: "Mini-sujet mathématiques C — fonctions et résolution de problèmes",
    duration: "Entraînement original — 45 minutes",
    text: "Pour préparer un spectacle, une école commande des carnets. Le fournisseur A facture 2,40 € par carnet et 5 € de frais fixes. Le fournisseur B facture 2,65 € par carnet et 3 € de frais fixes.",
    tasks: [
      "1. Exprimer le prix A(n) et le prix B(n) en fonction du nombre n de carnets.",
      "2. Calculer chaque prix pour 8 carnets.",
      "3. Pour quelle valeur de n les deux prix sont-ils égaux ?",
      "4. À partir de quel nombre entier de carnets le fournisseur A est-il moins cher ? Justifier."
    ],
    correction: [
      "A(n) = 2,40n + 5 et B(n) = 2,65n + 3, en euros.",
      "A(8) = 19,20 + 5 = 24,20 €. B(8) = 21,20 + 3 = 24,20 €.",
      "2,40n + 5 = 2,65n + 3, donc 2 = 0,25n et n = 8.",
      "A(n) < B(n) équivaut à 2 < 0,25n, donc n > 8. À partir de 9 carnets, A est moins cher."
    ],
    rubric: "Barème indicatif /10 : modélisation (3), calculs et unités (2), résolution et interprétation de l’égalité (3), comparaison justifiée (2)."
  },
  {
    title: "Mini-sujet mathématiques D — géométrie et algorithmique",
    duration: "Entraînement original — 45 minutes",
    text: "Une cour rectangulaire mesure 12 m sur 8 m. On aménage une bande de circulation de 1 m de large à l’intérieur, tout autour, contre les murs. Un robot pédagogique doit ensuite tracer un carré de 50 cm de côté sur le sol.",
    tasks: [
      "1. Calculer l’aire totale de la cour.",
      "2. Déterminer les dimensions et l’aire de la partie centrale non occupée par la bande.",
      "3. Calculer l’aire de la bande de circulation.",
      "4. Décrire un algorithme Scratch utilisant une boucle pour tracer le carré de 50 cm de côté."
    ],
    correction: [
      "Aire totale : 12 × 8 = 96 m².",
      "La bande retire 1 m de chaque côté : dimensions intérieures 10 m sur 6 m ; aire 60 m².",
      "Aire de la bande : 96 − 60 = 36 m².",
      "Répéter 4 fois : avancer de 50 cm, tourner de 90°. Si le robot utilise une autre unité, convertir la longueur et garder une unité cohérente."
    ],
    rubric: "Barème indicatif /10 : aire totale (2), prise en compte des deux bandes sur chaque dimension (3), aire par différence (2), boucle et angle corrects (3)."
  },
  {
    title: "Mini-sujet mathématiques E — division, fractions et volumes",
    duration: "Entraînement original — 45 minutes",
    text: "Une école répartit 287 cahiers dans des lots identiques de 24 cahiers. Pour une activité, une boîte rectangulaire mesure 30 cm × 20 cm × 15 cm. Un réservoir est rempli aux trois quarts de sa capacité de 120 litres.",
    tasks: [
      "1. Effectuer la division euclidienne de 287 par 24 et interpréter le quotient et le reste.",
      "2. Calculer le volume de la boîte en cm³ puis en litres.",
      "3. Calculer la quantité d’eau dans le réservoir rempli aux trois quarts.",
      "4. Une quantité de 18 litres est partagée également entre 12 groupes. Quelle quantité reçoit chaque groupe en millilitres ?"
    ],
    correction: [
      "287 = 24 × 11 + 23 : on peut former 11 lots complets et il reste 23 cahiers.",
      "V = 30 × 20 × 15 = 9 000 cm³. Comme 1 L = 1 000 cm³, cela fait 9 L.",
      "120 × 3/4 = 90 L.",
      "18 ÷ 12 = 1,5 L par groupe, soit 1 500 mL."
    ],
    rubric: "Barème indicatif /10 : division interprétée (2), calcul et conversion du volume (3), fraction de quantité (2), partage et conversion (2), unités et rédaction (1)."
  },
  {
    title: "Mini-sujet mathématiques F — vitesses, données et dénombrement",
    duration: "Entraînement original — 45 minutes",
    text: "Lors d’une sortie, un groupe parcourt 6 km en 1 h 30 min à allure régulière. Pour financer le projet, les élèves vendent 18 objets à 4 € chacun et reçoivent une aide fixe de 35 €. Pour un jeu, ils choisissent un code composé d’une lettre parmi A, B, C, D suivie d’un chiffre de 0 à 9.",
    tasks: [
      "1. Calculer la durée du trajet en heures puis la vitesse moyenne en km/h.",
      "2. Quelle distance serait parcourue à la même vitesse en 2 h 15 min ?",
      "3. Calculer la recette totale. Expliquer pourquoi le montant dépend du nombre d’objets vendus de manière affine.",
      "4. Dans un tableur, les distances en kilomètres sont en colonne A et les durées en heures en colonne B. Quelle formule saisir en C2 pour calculer la vitesse moyenne du premier trajet, puis recopier vers le bas ?",
      "5. Combien de codes différents peut-on former ? Le code comporte toujours une lettre puis un chiffre."
    ],
    correction: [
      "1 h 30 min = 1,5 h ; vitesse moyenne = 6 ÷ 1,5 = 4 km/h.",
      "2 h 15 min = 2,25 h ; distance = 4 × 2,25 = 9 km.",
      "18 × 4 + 35 = 107 €. Pour n objets, la recette est R(n) = 4n + 35 : le prix unitaire produit une part proportionnelle, à laquelle s’ajoute l’aide fixe.",
      "En C2, saisir =A2/B2 ; la recopie adapte les références de ligne et calcule les vitesses en km/h. Contrôler qu’une durée a bien été convertie en heures décimales.",
      "Il y a 4 choix de lettres et 10 choix de chiffres. Le principe multiplicatif donne 4 × 10 = 40 codes."
    ],
    rubric: "Barème indicatif /12 : conversions et vitesse (3), distance (2), calcul et modélisation affine (3), formule et unités au tableur (2), dénombrement justifié (2)."
  }
];
