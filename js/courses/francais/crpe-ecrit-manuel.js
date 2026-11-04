// Fiches, questions et entraînements originaux organisés selon le sommaire
// du manuel Français CRPE 2024-2025 (épreuve écrite d'admissibilité).
export const frCrpeChapters = [
  {
    title: "Méthodologie — préparer l’épreuve écrite",
    lesson: "Commencer par analyser les verbes de consigne et les objets demandés : identifier, classer, justifier, comparer ou rédiger ne mobilisent pas les mêmes démarches. Répartir le temps entre les parties, s’appuyer sur les formulations exactes du sujet et rendre visibles les étapes du raisonnement. Les rapports de jury aident à repérer des attentes récurrentes : précision terminologique, justification par des indices, lecture attentive et expression écrite maîtrisée. Ils décrivent des sessions données et ne remplacent pas le programme officiel de la session visée.",
    oral: "Comment transformer une consigne de grammaire en étapes de travail explicites, sans donner directement la réponse ?",
    questions: [
      {q:"Pour commencer une question de grammaire, quel réflexe est le plus utile ?", a:["Repérer le verbe de consigne et l’objet demandé","Écrire une règle générale","Chercher une réponse dans une annale","Commencer par la conclusion"], c:0, e:"La consigne précise l’opération attendue et les éléments à traiter."},
      {q:"Un rapport de jury permet surtout de…", a:["Connaître les attentes observées lors d’une session","Remplacer les programmes","Garantir le sujet de la prochaine session","Éviter de justifier ses réponses"], c:0, e:"Il apporte des indications utiles sur les réussites et difficultés observées, sans prédire l’épreuve future."},
      {q:"Une réponse de concours gagne en clarté quand elle…", a:["Donne une étiquette sans preuve","Relie la réponse à des indices précis du texte","Accumule les termes techniques","Répète la consigne"], c:1, e:"La justification rend le raisonnement vérifiable et montre la maîtrise des notions."}
    ]
  },
  {
    title: "Repères — décrire la langue et manipuler les phrases",
    lesson: "La grammaire décrit le fonctionnement d’une langue à partir d’énoncés observables ; les catégories ne sont pas de simples étiquettes à réciter. Les manipulations aident à formuler et vérifier une analyse : substitution (remplacer un élément), déplacement, effacement ou ajout/expansion. Il faut interpréter leur résultat en tenant compte de la construction et du sens. Une manipulation est un indice argumentatif, pas une recette qui classe automatiquement tous les cas.",
    oral: "Faites découvrir une fonction grammaticale par substitution ou déplacement, puis expliquez ce que la manipulation permet de conclure et ses limites.",
    questions: [
      {q:"Remplacer « le petit chien » par « il » permet notamment de tester…", a:["La catégorie du verbe","La possibilité de reprise pronominale d’un groupe","Le temps du récit","La ponctuation finale"], c:1, e:"La substitution par un pronom est un test utile pour délimiter certains groupes."},
      {q:"Déplacer un complément dans une phrase permet d’observer…", a:["Sa mobilité dans cette construction","Son étymologie","Son genre grammatical","Le nombre de syllabes"], c:0, e:"Le déplacement teste la mobilité, souvent utile pour analyser un complément circonstanciel."},
      {q:"Pourquoi croiser plusieurs manipulations ?", a:["Une manipulation suffit toujours","Les tests apportent des indices dont la portée dépend de la construction","Pour éviter d’analyser le sens","Pour rendre chaque phrase passive"], c:1, e:"Les diagnostics ont des limites ; plusieurs indices et le contexte renforcent l’analyse."}
    ]
  },
  {
    title: "1. Classer un mot ou un groupe de mots",
    lesson: "La classe grammaticale (ou nature) identifie ce qu’est un mot : nom, déterminant, adjectif, pronom, verbe, adverbe, préposition ou conjonction. La fonction décrit son rôle dans une phrase : sujet, complément du verbe, complément du nom, attribut, etc. La nature est généralement stable ; la fonction dépend de la construction. Pour analyser, délimiter d’abord le groupe, repérer son noyau, puis tester sa relation avec les autres constituants.",
    oral: "Comment feriez-vous comprendre à des élèves la différence entre la nature et la fonction, en partant d’exemples qu’ils peuvent manipuler ?",
    questions: [
      {q:"Dans « Ces jeunes pousses grandissent », quelle est la nature de « jeunes » ?", a:["Nom","Adjectif","Adverbe","Déterminant"], c:1, e:"« Jeunes » caractérise le nom « pousses » : c’est un adjectif qualificatif."},
      {q:"Dans « Ces jeunes pousses grandissent », quelle est la fonction de « Ces jeunes pousses » ?", a:["COD","Sujet","Attribut","Complément du nom"], c:1, e:"Le groupe commande l’accord du verbe et désigne ce qui grandit : il est sujet."},
      {q:"Dans « Lina parle à son voisin », « à son voisin » est…", a:["COD","COI","Sujet","Épithète"], c:1, e:"Le groupe prépositionnel est régi par « parler à » : c’est un complément indirect du verbe."}
    ]
  },
  {
    title: "2. La phrase et ses constituants",
    lesson: "Une phrase verbale s’organise autour d’un ou plusieurs verbes conjugués ; une phrase non verbale s’organise autrement (« Quel beau jardin ! »). Les ressources peuvent classer l’exclamation comme type ; la terminologie de référence récente la traite comme une forme, avec les types déclaratif, interrogatif et injonctif. Les formes négative, passive, emphatique et impersonnelle sont une autre dimension. Dans une analyse, suivre le cadre de la consigne et distinguer ces critères. Une phrase simple comporte une proposition ; une phrase complexe en comporte plusieurs.",
    oral: "Proposez une activité de manipulation pour faire distinguer le type et la forme d’une phrase.",
    questions: [
      {q:"« N’ouvrez pas les fenêtres. » Quel est son type ?", a:["Déclaratif","Interrogatif","Impératif","Exclamatif"], c:2, e:"La phrase donne un ordre à la forme négative : son type est impératif."},
      {q:"« Quel spectacle magnifique ! » est principalement…", a:["Une phrase non verbale exclamative","Une phrase interrogative","Une phrase passive","Une phrase complexe"], c:0, e:"Elle ne comporte pas de verbe conjugué et exprime une exclamation."},
      {q:"« Paul affirme qu’il reviendra. » Combien de propositions ?", a:["Une","Deux","Trois","Aucune"], c:1, e:"Les verbes conjugués « affirme » et « reviendra » structurent deux propositions."}
    ]
  },
  {
    title: "3. Les fonctions dans la phrase",
    lesson: "Les fonctions se définissent par la relation syntaxique. Le sujet commande l’accord du verbe. Les compléments du verbe peuvent être directs ou introduits par une préposition ; certains verbes appellent un attribut du sujet ou de l’objet. Les compléments du nom et de l’adjectif dépendent de ces noyaux. Les compléments circonstanciels apportent notamment des indications de temps, lieu, manière ou cause et sont souvent mobiles ou supprimables. Les tests doivent être croisés : aucun test isolé ne suffit toujours.",
    oral: "Comment éviter que les élèves identifient un COD uniquement en posant la question « qui ? » ou « quoi ? » ?",
    questions: [
      {q:"Dans « Le ciel devient sombre », « sombre » est…", a:["COD","Attribut du sujet","COI","Complément circonstanciel"], c:1, e:"Le verbe d’état « devenir » relie l’attribut « sombre » au sujet « le ciel »."},
      {q:"Dans « Elle range les cahiers dans l’armoire », « les cahiers » est…", a:["Sujet","COD","COI","Complément du nom"], c:1, e:"Le groupe complète directement le verbe « range », sans préposition : COD."},
      {q:"Dans « un chemin de montagne », « de montagne » complète…", a:["Le verbe","Le nom « chemin »","Le sujet","L’adjectif"], c:1, e:"Le groupe prépositionnel dépend du nom « chemin » : complément du nom."}
    ]
  },
  {
    title: "4. Les propositions dans la phrase complexe",
    lesson: "Une proposition s’organise autour d’un verbe conjugué, avec des cas particuliers pour les constructions infinitives et participiales. Les propositions peuvent être indépendantes, coordonnées ou juxtaposées. Une subordonnée dépend d’une autre proposition : relative, complétive, circonstancielle ou interrogative indirecte. Pour la classer, repérer son introducteur, son mode verbal, sa fonction et le terme dont elle dépend. Une relative est introduite par un pronom relatif et complète généralement un nom.",
    oral: "Comment feriez-vous repérer les propositions dans une phrase longue sans réduire l’analyse au comptage mécanique des verbes ?",
    questions: [
      {q:"Dans « Le livre que tu m’as prêté est passionnant », « que tu m’as prêté » est…", a:["Une relative","Une complétive","Une circonstancielle","Une indépendante"], c:0, e:"Introduite par le pronom relatif « que », elle complète l’antécédent « livre »."},
      {q:"Dans « Je pense qu’elle a raison », la subordonnée introduite par « que » est…", a:["Relative","Complétive","Circonstancielle de temps","Incise"], c:1, e:"La proposition complète le verbe « pense » : c’est une complétive conjonctive."},
      {q:"Dans « Quand la cloche sonnera, les élèves sortiront », la subordonnée exprime…", a:["La cause","Le temps","Le but","La concession"], c:1, e:"« Quand » introduit ici une circonstancielle qui situe l’action dans le temps."}
    ]
  },
  {
    title: "5. Le verbe : conjugaison et emplois des temps",
    lesson: "Pour analyser un verbe, distinguer son infinitif, son groupe, son mode, son temps, sa personne et sa voix. Le mode indicatif présente des faits envisagés comme réels ; le subjonctif exprime notamment une relation de volonté, doute ou nécessité ; l’impératif sert à l’injonction. Les temps situent les faits et organisent leurs relations (antériorité, simultanéité, postériorité). La voix passive met en avant le patient ; elle se construit avec être et le participe passé.",
    oral: "Comment relier l’observation des temps verbaux à l’interprétation d’un texte plutôt qu’à une récitation de tableaux ?",
    questions: [
      {q:"Dans « Les lettres ont été envoyées hier », quelle est la voix ?", a:["Active","Passive","Pronominale","Impersonnelle"], c:1, e:"Le sujet « les lettres » subit l’action ; la forme associe « être » et un participe passé."},
      {q:"Dans « Il faut que vous veniez », le verbe « veniez » est au…", a:["Indicatif présent","Subjonctif présent","Conditionnel présent","Impératif présent"], c:1, e:"La construction impersonnelle « il faut que » appelle ici le subjonctif."},
      {q:"Dans « Quand elle eut terminé, elle sortit », « eut terminé » exprime…", a:["Une action postérieure à « sortit »","Une action antérieure à « sortit »","Une habitude actuelle","Un ordre"], c:1, e:"Le passé antérieur marque une action achevée avant l’action au passé simple."}
    ]
  },
  {
    title: "6. L’énonciation",
    lesson: "La situation d’énonciation comprend qui parle, à qui, où et quand. Les pronoms personnels, déterminants possessifs, marques de temps et démonstratifs peuvent être ancrés dans cette situation : ce sont des indices déictiques. Dans un récit, on distingue souvent le plan ancré dans la situation d’énonciation et le plan détaché, où les repères sont organisés dans le récit. Il faut interpréter ces indices dans leur contexte.",
    oral: "Quelle activité permettrait aux élèves de voir comment les pronoms et les repères temporels changent selon le locuteur ?",
    questions: [
      {q:"Dans « Je te retrouverai demain », « demain » est…", a:["Un repère déictique dépendant du moment d’énonciation","Un pronom relatif","Un connecteur de cause","Un temps verbal"], c:0, e:"« Demain » se comprend par rapport au jour où l’énoncé est produit."},
      {q:"Quel élément est nécessaire pour interpréter « ici » dans un énoncé ?", a:["Le lieu de l’énonciation","Le sujet grammatical","Le temps composé","Le genre du nom"], c:0, e:"« Ici » désigne le lieu associé à la situation de parole."},
      {q:"« Elle entra dans la pièce. Il faisait froid. » Le récit est principalement…", a:["Ancré dans le moment où le narrateur parle","Détaché de la situation d’énonciation","Un dialogue direct","Une injonction"], c:1, e:"Les temps du récit situent les événements dans un cadre narratif distinct du présent de parole."}
    ]
  },
  {
    title: "7. Le discours rapporté",
    lesson: "Le discours direct reproduit les paroles avec leurs marques propres (pronoms, temps, ponctuation). Le discours indirect intègre les paroles dans la syntaxe du récit et peut entraîner des changements de personnes, de repères et de temps. Le discours indirect libre mêle des marques du récit et l’expressivité du personnage sans verbe introducteur ni guillemets. Le discours narrativisé résume l’acte de parole sans en restituer le contenu exact.",
    oral: "Comment une comparaison de deux versions d’un dialogue peut-elle faire observer les transformations du discours indirect ?",
    questions: [
      {q:"« Il demanda : “Viendras-tu demain ?” » est du discours…", a:["Indirect","Direct","Indirect libre","Narrativisé"], c:1, e:"Les paroles sont rapportées telles quelles, avec guillemets et question directe."},
      {q:"Dans « Elle a annoncé qu’elle partirait le lendemain », on trouve…", a:["Du discours direct","Du discours indirect","Du discours narrativisé uniquement","Une incise"], c:1, e:"La parole est intégrée par « que » et les repères sont transposés."},
      {q:"« Il entra. Quelle injustice ! On ne l’avait même pas prévenu. » L’exclamation peut signaler…", a:["Un discours indirect libre","Une relative","Une proposition infinitive","Un discours direct avec guillemets"], c:0, e:"La voix du personnage affleure dans le récit sans guillemets ni verbe introducteur."}
    ]
  },
  {
    title: "8. Chaîne anaphorique : anaphores nominales et pronominales",
    lesson: "Une chaîne anaphorique relie les expressions qui renvoient à un même référent dans le texte. Une anaphore pronominale reprend le référent par un pronom ; une anaphore nominale le reprend par un groupe nominal, parfois avec une reformulation. Pour interpréter un pronom, on vérifie les accords, la cohérence syntaxique et le sens. Une reprise peut maintenir le thème ou apporter une nouvelle caractérisation.",
    oral: "Comment aider les élèves à justifier à quel personnage renvoie un pronom quand plusieurs antécédents sont possibles ?",
    questions: [
      {q:"« Nora a adopté un chat. Elle l’a appelé Mistral. » « l’ » reprend…", a:["Nora","un chat","Mistral","la maison"], c:1, e:"Le pronom COD « l’ » reprend le groupe nominal « un chat »."},
      {q:"« Un renard traversa le champ. L’animal disparut dans les herbes. » « L’animal » est…", a:["Une reprise nominale","Une reprise pronominale","Un connecteur","Un déictique"], c:0, e:"Le groupe nominal reprend le référent en le catégorisant à nouveau."},
      {q:"Pour lever une ambiguïté de référence d’un pronom, il faut surtout…", a:["Choisir le nom le plus proche sans vérifier","Croiser syntaxe, accords et sens","Ignorer le contexte","Remplacer toujours par « il »"], c:1, e:"La proximité seule ne suffit pas ; plusieurs indices doivent converger."}
    ]
  },
  {
    title: "9. Les éléments qui organisent le texte",
    lesson: "La progression thématique décrit la manière dont le texte fait avancer l’information : thème constant, progression linéaire ou thèmes dérivés d’un hyperthème. Les connecteurs rendent visibles des relations logiques ou temporelles (cause, conséquence, opposition, addition, succession). Leur interprétation dépend du contexte. Un texte cohérent articule les reprises, la progression de l’information et les relations entre propositions.",
    oral: "Quelle tâche de réécriture permettrait de montrer l’effet d’un connecteur d’opposition ou de conséquence ?",
    questions: [
      {q:"Dans « Il pleuvait ; pourtant, la sortie a été maintenue », « pourtant » marque…", a:["La cause","L’opposition / concession","L’addition","La chronologie"], c:1, e:"Le connecteur introduit un résultat contraire à l’attente créée par la pluie."},
      {q:"« Le jardin comprend trois espaces. Le premier… Le second… Le dernier… » illustre surtout…", a:["Une progression à thèmes dérivés","Un discours direct","Une anaphore pronominale seule","Une phrase non verbale"], c:0, e:"Les sous-thèmes se rattachent à l’hyperthème « le jardin »."},
      {q:"Quel connecteur exprime clairement une conséquence ?", a:["Cependant","D’abord","Par conséquent","En revanche"], c:2, e:"« Par conséquent » annonce une conséquence ; les autres marquent opposition ou ordre."}
    ]
  },
  {
    title: "10. La phonologie",
    lesson: "La phonétique étudie la production et la perception des sons ; la phonologie étudie leur rôle dans le système d’une langue. Un phonème est une unité sonore qui permet de distinguer des mots. L’alphabet phonétique international note les sons sans dépendre de l’orthographe. Un graphème est une ou plusieurs lettres correspondant à un phonème. Les élèves doivent apprendre à comparer oral et écrit, en tenant compte des variations et du contexte.",
    oral: "Comment faire distinguer aux élèves un son (phonème) de la ou des lettres qui le notent ?",
    questions: [
      {q:"L’API sert principalement à noter…", a:["Les lettres de l’alphabet français","Les sons de la parole","Les fonctions grammaticales","Les syllabes écrites seulement"], c:1, e:"L’alphabet phonétique international fournit une notation des sons."},
      {q:"Dans le mot « chapeau », les lettres « ch » forment…", a:["Deux phonèmes obligatoirement","Un graphème correspondant à un son","Une syllabe entière","Un morphème grammatical"], c:1, e:"Deux lettres peuvent former un graphème qui note un seul phonème."},
      {q:"La phonologie s’intéresse notamment…", a:["Au rôle distinctif des sons dans une langue","À la ponctuation des phrases","À l’origine des mots","Aux fonctions des groupes"], c:0, e:"Elle étudie l’organisation des sons et leurs oppositions pertinentes."}
    ]
  },
  {
    title: "11. L’orthographe",
    lesson: "L’orthographe française combine des régularités phonographiques, morphologiques et lexicales. Les accords rendent visibles des relations syntaxiques : le verbe avec son sujet, l’adjectif avec le nom, le participe passé selon sa construction et les règles applicables. Les homophones grammaticaux se distinguent par leur catégorie et leur rôle dans la phrase, pas uniquement par une astuce de remplacement. Une démarche efficace consiste à repérer les donneurs et receveurs d’accord puis à justifier la forme écrite.",
    oral: "Comment construire une séance où les élèves justifient leurs choix d’accord au lieu de seulement corriger leurs erreurs ?",
    questions: [
      {q:"Dans « Les feuilles que j’ai ramassées », pourquoi « ramassées » prend-il -ées ?", a:["Parce que le sujet est féminin","Le COD « que », placé avant, reprend « feuilles »","Parce que tous les participes en -é s’accordent","Parce que le verbe est à l’imparfait"], c:1, e:"Avec l’auxiliaire avoir, le participe s’accorde ici avec le COD antéposé « que » (= feuilles)."},
      {q:"Dans « Les enfants jouent », quel élément commande l’accord de « jouent » ?", a:["Le COD","Le sujet « les enfants »","Le complément circonstanciel","L’adjectif"], c:1, e:"Le verbe s’accorde avec son sujet, à la 3e personne du pluriel."},
      {q:"Pour distinguer « a » et « à », quelle analyse est la plus solide ?", a:["Se fier uniquement à la prononciation","Identifier la catégorie et le rôle dans la phrase","Mettre toujours au pluriel","Regarder la longueur du mot"], c:1, e:"« a » est une forme du verbe avoir ; « à » est une préposition. La syntaxe tranche."}
    ]
  },
  {
    title: "12. Origine, évolution et formation des mots",
    lesson: "Le lexique évolue : des mots apparaissent, changent de forme ou de sens, et certains disparaissent. La dérivation construit un mot par ajout d’affixes à une base ; la composition associe plusieurs bases. On distingue aussi emprunts, sigles, abréviations et changements de catégorie. Pour analyser un mot, isoler une base reconnaissable, examiner les affixes et vérifier que l’hypothèse rend compte du sens en contexte. L’étymologie éclaire parfois le sens, sans suffire à définir l’usage actuel.",
    oral: "Comment faire découvrir le rôle d’un préfixe ou d’un suffixe à partir d’une famille de mots ?",
    questions: [
      {q:"« Relecture » est formé par…", a:["Composition","Dérivation avec préfixe et suffixe","Emprunt","Siglaison"], c:1, e:"Le préfixe re- et le suffixe -ure sont associés à la base verbale lire."},
      {q:"Le mot « porte-monnaie » illustre principalement…", a:["La composition","La dérivation suffixale","Une flexion verbale","Une onomatopée"], c:0, e:"Il associe deux bases lexicales : porte et monnaie."},
      {q:"L’étymologie d’un mot…", a:["Donne toujours son sens actuel exact","Peut éclairer son histoire mais doit être confrontée à l’usage actuel","Remplace l’analyse du contexte","Est identique à sa nature grammaticale"], c:1, e:"L’histoire du mot est informative, mais les sens peuvent évoluer."}
    ]
  },
  {
    title: "13. Rapports entre les mots et champs de signification",
    lesson: "Les relations lexicales comprennent notamment synonymie, antonymie, hyperonymie/hyponymie et polysémie. Un champ lexical rassemble des mots associés à un même domaine ; le champ sémantique regroupe les différents sens possibles d’un mot. Le contexte sélectionne le sens pertinent. Les relations ne sont pas toujours interchangeables : deux synonymes ont rarement exactement les mêmes emplois et nuances.",
    oral: "Quelle activité de classement aiderait les élèves à distinguer synonymes, mots d’un même champ lexical et termes génériques ?",
    questions: [
      {q:"« Rose », « tulipe » et « iris » sont des hyponymes de…", a:["Fleur","Jardinier","Pétale","Printemps"], c:0, e:"« Fleur » est le terme générique qui englobe ces catégories particulières."},
      {q:"Dans « Il a perdu la clé du coffre » puis « la clé du problème », le mot clé illustre…", a:["L’antonymie","La polysémie","La dérivation","La conjugaison"], c:1, e:"Le même mot possède plusieurs sens liés, sélectionnés par le contexte."},
      {q:"Un champ lexical de la mer rassemble…", a:["Uniquement des synonymes","Des mots associés au domaine maritime","Des mots de même classe grammaticale","Des mots de même origine obligatoirement"], c:1, e:"Les mots peuvent être de classes et de sens différents tout en relevant du même domaine."}
    ]
  },
  {
    title: "Figures de style — repérer un procédé et interpréter son effet",
    lesson: "Une figure de style transforme l’expression pour produire un effet de sens ou de rythme. Une comparaison rapproche deux éléments avec un outil comparatif ; une métaphore établit un rapprochement sans cet outil ; une personnification attribue des traits humains à un non-humain. L’hyperbole amplifie, l’antithèse oppose, la répétition insiste et la litote suggère davantage en disant moins. Pour l’analyser, citer un indice précis, nommer le procédé avec prudence puis expliquer son effet dans ce passage : une figure ne porte pas une interprétation fixe hors contexte.",
    oral: "Comment aideriez-vous des élèves à passer du repérage d’une image à l’explication de ce qu’elle fait comprendre au lecteur ?",
    questions: [
      {q:"Dans « La ville s’éveillait sous le soleil », le procédé est surtout…", a:["Une personnification", "Une comparaison", "Une litote", "Une énumération"], c:0, e:"La ville reçoit une action associée à un être vivant ; l’effet dépend du contexte descriptif."},
      {q:"Dans « Ses paroles étaient des flèches », on trouve…", a:["Une métaphore", "Une comparaison avec outil", "Une hyperbole numérique", "Une antithèse"], c:0, e:"Le rapprochement entre paroles et flèches est direct, sans « comme » ou autre outil comparatif."},
      {q:"Dans « Je ne te déteste pas » pour suggérer un sentiment positif, on peut analyser…", a:["Une litote, si le contexte confirme l’atténuation", "Une personnification nécessairement", "Une comparaison", "Une onomatopée"], c:0, e:"La formulation atténuée peut laisser entendre davantage que ce qui est littéralement dit."},
      {q:"Une analyse pertinente d’une figure de style doit…", a:["Relier un indice précis à un effet interprété dans le passage", "Nommer une figure sans preuve", "Attribuer toujours le même effet à chaque figure", "Résumer seulement le paragraphe"], c:0, e:"Le procédé et son effet doivent être justifiés à partir de la formulation et du contexte."}
    ]
  },
  {
    title: "14. Sujet de réflexion à partir d’un texte",
    lesson: "Une réponse de réflexion mobilise précisément le texte, répond à la question posée et développe un raisonnement organisé. Commencer par cerner la consigne, dégager une idée directrice, sélectionner des éléments pertinents et les expliquer. Construire des paragraphes articulés par des connecteurs, puis relire pour vérifier la cohérence, la syntaxe, l’orthographe et le respect du sujet. Une citation doit être brève, exacte et commentée.",
    oral: "Comment accompagnez-vous des élèves pour passer du repérage d’informations à une réponse argumentée ?",
    questions: [
      {q:"Quel est le meilleur usage d’une citation dans une réponse ?", a:["La recopier sans commentaire","L’utiliser brièvement puis expliquer son lien avec l’idée","Remplacer toute l’analyse par plusieurs citations","La choisir parce qu’elle est longue"], c:1, e:"Une citation sert de preuve ; le candidat doit en interpréter la pertinence."},
      {q:"Avant de rédiger, il faut d’abord…", a:["Recopier le texte","Analyser la consigne et définir les axes de réponse","Écrire la conclusion","Compter les lignes"], c:1, e:"Comprendre la question permet de sélectionner et organiser les éléments utiles."},
      {q:"Une réponse argumentée doit…", a:["Enchaîner des opinions sans preuve","Présenter une idée, l’appuyer et l’expliquer","Éviter les connecteurs","Résumer seulement le texte"], c:1, e:"L’argumentation relie une idée à des preuves expliquées et à la consigne."}
    ]
  },
  {
    title: "15. Sujet corrigé : méthode de résolution",
    lesson: "Pour traiter un sujet complet, repérer les parties et les verbes de consigne, gérer le temps, puis répondre dans l’ordre avec des justifications explicites. En étude de la langue, nommer les unités et expliquer les manipulations. En réflexion, formuler une réponse organisée qui s’appuie sur le texte. Pour le corrigé, vérifier que chaque réponse est démontrée et que le vocabulaire grammatical est précis. Les sujets blancs ci-dessous sont originaux et conçus pour l’entraînement.",
    oral: "Comment analyseriez-vous une réponse d’élève qui obtient le bon résultat grammatical sans pouvoir expliquer son raisonnement ?",
    questions: [
      {q:"Dans une analyse grammaticale, une réponse solide comporte…", a:["Une étiquette seule","L’identification et une justification fondée sur la phrase","Une règle apprise sans exemple","Une intuition non vérifiée"], c:1, e:"Le candidat doit relier la terminologie à des indices observables et à la construction."},
      {q:"Face à une consigne comportant plusieurs sous-questions, il est utile de…", a:["Ignorer les verbes de consigne","Repérer chaque tâche et vérifier qu’elle est traitée","Répondre seulement à la dernière","Faire un résumé général"], c:1, e:"Le repérage des tâches réduit les oublis et aide à répartir le temps."},
      {q:"Le corrigé d’un sujet blanc sert surtout à…", a:["Mémoriser des phrases toutes faites","Comparer les raisonnements et repérer les notions à retravailler","Remplacer tout entraînement","Éviter la relecture"], c:1, e:"Un corrigé permet d’identifier les écarts de raisonnement et de planifier la révision."}
    ]
  }
];

export const frCrpeMockExams = [
  {
    title: "Épreuve blanche 1 — Étude de la langue",
    duration: "45 min — entraînement original",
    text: "Au lever du jour, les jardiniers que la pluie avait surpris reprirent leur travail. Ils installèrent les jeunes plants près du mur, car cet endroit restait abrité.",
    tasks: [
      "1. Relevez le sujet de « reprirent » et justifiez l’accord.",
      "2. Analysez la proposition « que la pluie avait surpris » : nature, introducteur et fonction.",
      "3. Donnez la nature et la fonction de « abrité » dans la dernière phrase.",
      "4. Expliquez l’accord de « surpris » dans « que la pluie avait surpris ».",
      "5. Relevez un connecteur et précisez la relation exprimée."
    ],
    correction: [
      "Le sujet de « reprirent » est le groupe nominal « les jardiniers ». Le verbe est au pluriel, à la 3e personne.",
      "« Que la pluie avait surpris » est une proposition subordonnée relative, introduite par le pronom relatif « que ». Elle complète l’antécédent « jardiniers ».",
      "« Abrité » est un adjectif qualificatif employé comme attribut du sujet « cet endroit » par l’intermédiaire du verbe d’état « rester ».",
      "« Surpris » est un participe passé avec l’auxiliaire avoir. Le COD « que », qui reprend « les jardiniers », est placé avant le verbe : accord masculin pluriel.",
      "« Car » introduit la cause qui explique l’installation des plants près du mur."
    ],
    rubric: "Barème indicatif sur 10 : 2 points par tâche, dont une part pour la justification et l’emploi précis du vocabulaire."
  },
  {
    title: "Épreuve blanche 2 — Orthographe, lexique et cohésion",
    duration: "45 min — entraînement original",
    text: "Les élèves ont relu leurs réponses avant de les remettre. Plusieurs avaient repéré une erreur, mais aucun n’avait encore trouvé pourquoi la terminaison changeait.",
    tasks: [
      "1. Justifiez l’accord de « relu ».",
      "2. Dans « avant de les remettre », indiquez ce que reprend « les » et sa fonction.",
      "3. Analysez « pourquoi la terminaison changeait » et précisez sa fonction.",
      "4. Expliquez le rôle de « mais » dans la cohésion du passage.",
      "5. Formez un mot de la famille de « terminaison » et décrivez sa formation."
    ],
    correction: [
      "« Relu » est un participe passé avec avoir ; le COD « leurs réponses » est placé après le verbe, donc pas d’accord.",
      "« Les » reprend « leurs réponses » et est COD de l’infinitif « remettre ».",
      "La proposition interrogative indirecte « pourquoi la terminaison changeait » complète le verbe « trouver » ; elle a la fonction de COD de « trouvé ».",
      "« Mais » marque une opposition entre le repérage d’une erreur et l’absence d’explication de la terminaison.",
      "Exemple : « terminer » (base termin- + suffixe verbal -er) ou « terminal ». La réponse doit identifier une base et un procédé cohérent."
    ],
    rubric: "Barème indicatif sur 10 : exactitude de l’analyse, justification des accords et prise en compte des relations dans le texte."
  },
  {
    title: "Épreuve blanche 3 — Réflexion à partir d’un texte",
    duration: "60 min — entraînement original",
    text: "Dans une classe, un carnet de lecture circule chaque semaine. Chacun y note une phrase qui l’a marqué, une question ou un lien avec une autre histoire. Les élèves découvrent ainsi des livres qu’ils n’auraient pas choisis seuls. Le carnet ne remplace pas la lecture : il ouvre un espace pour en parler et donne envie de poursuivre.",
    tasks: [
      "Sujet : À partir du texte, montrez comment un dispositif collectif peut soutenir le goût de lire. Vous organiserez votre réponse en deux ou trois paragraphes, en vous appuyant sur des éléments précis du texte et sur une réflexion personnelle.",
      "Étape de préparation : formulez une idée directrice et relevez trois éléments du texte qui peuvent l’étayer.",
      "Rédaction : écrivez une réponse argumentée de 180 à 250 mots et relisez-la."
    ],
    correction: [
      "Pistes : le partage élargit les choix de lecture ; la citation ou la question personnelle favorise une lecture active ; les échanges créent une communauté de lecteurs. Le dispositif accompagne la lecture sans s’y substituer.",
      "Exemples de preuves : le carnet « circule chaque semaine » ; chacun peut noter une phrase, une question ou un lien ; les élèves découvrent des livres qu’ils n’auraient pas choisis seuls.",
      "Une copie réussie répond au sujet, organise les idées, explique ses exemples et distingue les éléments du texte de l’apport personnel. Le corrigé est une grille de pistes, pas un modèle à recopier."
    ],
    rubric: "Barème indicatif sur 20 : compréhension du sujet (4), organisation (4), preuves tirées du texte et analyse (6), qualité de la langue (6)."
  }
];
