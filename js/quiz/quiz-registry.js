
/*QUIZ MATHS */
import { quiz as mathsLogiqueQuiz } from "./quizzes/maths-logique.js";
import { quiz as mathsCalculsQuiz } from "./quizzes/maths-calculs.js";
import { quiz as mathsGeometrieQuiz } from "./quizzes/maths-geometrie.js";
import { quiz as mathsMesuresQuiz } from "./quizzes/maths-mesures.js";
import { quiz as mathsNumerationQuiz } from "./quizzes/maths-numeration.js";
import { quiz as mathsProportionnaliteQuiz } from "./quizzes/maths-proportionnalite.js";
import { quiz as mathsStatsQuiz } from "./quizzes/maths-statistiques.js";
import { quiz as mathsProblemesQuiz } from "./quizzes/maths-problemes.js";

/*QUIZ EMC */
import { quiz as emcvaleurQuiz } from "./quizzes/emc-valeurs.js";

/* QUIZ FRANCAIS */
import { quiz as frComprehensionQuiz } from "./quizzes/francais-comprehension.js";
import { quiz as frConjugaisonQuiz } from "./quizzes/francais-conjugaison.js";
import { quiz as frDidactiqueQuiz } from "./quizzes/francais-didactique.js";
import { quiz as frGrammaireQuiz } from "./quizzes/francais-grammaire.js";
import { quiz as frOrthographeQuiz } from "./quizzes/francais-orthographe.js";
import { quiz as frVocabulaireQuiz } from "./quizzes/francais-vocabulaire.js";
import {quiz as frConjugaisonCompleteQuiz } from "./quizzes/francais-conjugaison-complete.js";

/*QUIZ GEOGRAPHIE */
import { quiz as geographiehabiteQuiz } from "./quizzes/geographie-habiter.js";
import { quiz as geographiemondeQuiz } from "./quizzes/geographie-monde.js";
import { quiz as geographiereperesQuiz } from "./quizzes/geographie-reperes.js";
import { quiz as geoterritoiresQuiz } from "./quizzes/geographie-territoires-francais.js";


/* QUIZ HISTOIRE */
import { quiz as histoireantiqueQuiz } from "./quizzes/histoire-antiquite.js";
import { quiz as histoiremoyenQuiz } from "./quizzes/histoire-moyen-age.js";
import { quiz as histoireepoqueQuizz } from "./quizzes/histoire-epoque-contemporaine.js";
import { quiz as histoireprehistoireQuiz } from "./quizzes/histoire-prehistoire.js";
import { quiz as histoiretempsQuiz } from "./quizzes/histoire-temps-modernes.js";
import { quiz as histoirereperesQuiz } from "./quizzes/histoire-reperes.js";


/* QUIZ SCIENCES */
import { quiz as sciencesEnergieQuiz } from "./quizzes/sciences-energie.js";
import { quiz as sciencesMatierQuiz } from "./quizzes/sciences-matiere.js";
import { quiz as sciencesTerreQuiz } from "./quizzes/sciences-terre.js";
import { quiz as sciencesVivantQuiz } from "./quizzes/sciences-vivant.js";
import { quiz as sciencesCorpsQuiz } from "./quizzes/sciences-corps.js";

/*QUIZ TECHNOLOGIE*/
import { quiz as technologieQuiz } from "./quizzes/technologie.js";

/*QUIZ  Système Éducatif*/
import { quiz as systemeQuiz } from "./quizzes/systeme-educatif.js";

export const quizRegistry = {
  /*=================================ROUTE QUIZ=================================== */

 "maths-logique": mathsLogiqueQuiz,
 "maths-calculs": mathsCalculsQuiz,
 "maths-geometrie": mathsGeometrieQuiz,
 "maths-mesures": mathsMesuresQuiz,
 "maths-proportionnalite": mathsProportionnaliteQuiz,
 "maths-statistique": mathsStatsQuiz,
 "maths-numeration": mathsNumerationQuiz,
 "maths-problemes": mathsProblemesQuiz,

 "emc-valeur": emcvaleurQuiz,

 "fr-conjugaison-complete": frConjugaisonCompleteQuiz ,
 "fr-comprehension": frComprehensionQuiz ,
 "fr-conjugaison": frConjugaisonQuiz ,
 "fr-didactique": frDidactiqueQuiz,
 "fr-grammaire": frGrammaireQuiz,
 "fr-othographe": frOrthographeQuiz,
 "fr-vocabulaire": frVocabulaireQuiz,

 "geographie-habite": geographiehabiteQuiz,
 "geographie-monde": geographiemondeQuiz ,
 "geographie-reperes": geographiereperesQuiz,
 "geographie-territoires": geoterritoiresQuiz ,


 "histoire-antique": histoireantiqueQuiz,
 "histoire-moyen": histoiremoyenQuiz ,
 "histoire-epoque": histoireepoqueQuizz ,
 "histoire-prehistoire": histoireprehistoireQuiz,
 "histoire-temps": histoiretempsQuiz,
 "quie-histoire-reperes": histoirereperesQuiz,


 "sciences-energie": sciencesEnergieQuiz,
 "sciences-matiere": sciencesMatierQuiz,
 "sciences-terre": sciencesTerreQuiz,
 "sciences-vivant": sciencesVivantQuiz,
 "sciences-corps" : sciencesCorpsQuiz,



 "technologie": technologieQuiz,




 "systeme": systemeQuiz,
};
