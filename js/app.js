import { registerRoute, navigate } from "./router.js";
import { renderMenu } from "./menu/menu-ui.js";
import { startQuiz } from "./quiz/start-quiz.js";
import { quizRegistry } from "./quiz/quiz-registry.js";
import { renderStats } from "./stats/stats-ui.js";
import { renderExam } from "./exam/exam-ui.js";
import { renderCourse } from "./course-renderer.js";



/* IMPORT COURS */
import mathsNumeration from "./courses/maths/01-numeration.js";
import mathsCalculs from "./courses/maths/02-calculs.js";
import mathsProportionnalite from "./courses/maths/03-proportionnalite.js";
import mathsProblemes from "./courses/maths/04-resolution-problemes.js";
import mathsGeometrie from "./courses/maths/05-geometrie.js";
import mathsMesures from "./courses/maths/06-grandeurs-mesures.js";
import mathsStats from "./courses/maths/07-statistiques-probabilites.js";
import mathsLogique from "./courses/maths/09-logique.js";

import frOrthographe from "./courses/francais/01-orthographe.js";
import frGrammaire from "./courses/francais/02-grammaire.js";
import frConjugaison from "./courses/francais/03-conjugaison.js";
import frVocabulaire from "./courses/francais/04-vocabulaire.js";
import frComprehension from "./courses/francais/05-comprehension-texte.js";
import frDidactique from "./courses/francais/06-didactique-francais.js";
import frConjugaisonComplete from "./courses/francais/07-conjugaison-complete.js";

import sciencesVivant from "./courses/sciences/01-le-vivants.js";
import sciencesCorps from "./courses/sciences/02-corps-humain-sante.js";
import sciencesMatiere from "./courses/sciences/03-matiere-materiaux.js";
import sciencesEnergie from "./courses/sciences/04-energie-forces-machines.js";
import sciencesTerre from "./courses/sciences/05-terre-environnement.js";

import histoireComplete from "./courses/histoire/01-histoire-complete.js";
import geographieComplete from "./courses/geographie/01-geographie-complete.js";
import emcComplete from "./courses/emc/01-emc-complet.js";
import numeriqueEducatif from "./courses/numerique/01-numerique-educatif-complet.js";
import systemeEducatif from "./courses/systeme/01-systeme-educatif.js";


/* ROUTE MENU */
registerRoute("menu", () => {
  renderMenu("app");
});

/* ROUTE STATS */
registerRoute("stats", () => {
  renderStats("app");
});

/* ROUTES QUIZ (AUTO) */
Object.entries(quizRegistry).forEach(([quizId, quizData]) => {
  registerRoute(`quiz-${quizId}`, () => {
    startQuiz("app", quizData);
  });
});

/*ROUTE EXAMEN */
registerRoute("exam", () => {renderExam("app");});

/* ROUTES MATHS */
registerRoute("maths-numeration", () => renderCourse("app", mathsNumeration));
registerRoute("maths-calculs", () => renderCourse("app", mathsCalculs));
registerRoute("maths-proportionnalite", () => renderCourse("app", mathsProportionnalite));
registerRoute("maths-problemes", () => renderCourse("app", mathsProblemes));
registerRoute("maths-geometrie", () => renderCourse("app", mathsGeometrie));
registerRoute("maths-mesures", () => renderCourse("app", mathsMesures));
registerRoute("maths-stats", () => renderCourse("app", mathsStats));
registerRoute("maths-logique", () => renderCourse("app", mathsLogique));

/* ROUTES FRANÇAIS */
registerRoute("fr-orthographe", () => renderCourse("app", frOrthographe));
registerRoute("fr-grammaire", () => renderCourse("app", frGrammaire));
registerRoute("fr-conjugaison", () => renderCourse("app", frConjugaison));
registerRoute("fr-vocabulaire", () => renderCourse("app", frVocabulaire));
registerRoute("fr-comprehension", () => renderCourse("app", frComprehension));
registerRoute("fr-didactique", () => renderCourse("app", frDidactique));
registerRoute("fr-conjugaison-complete", () => renderCourse("app", frConjugaisonComplete));

/* ROUTES AUTRES */
registerRoute("sciences-vivant", () => renderCourse("app", sciencesVivant));
registerRoute("sciences-corps", () => renderCourse("app", sciencesCorps));
registerRoute("sciences-matiere", () => renderCourse("app", sciencesMatiere));
registerRoute("sciences-energie", () => renderCourse("app", sciencesEnergie));
registerRoute("sciences-terre", () => renderCourse("app", sciencesTerre));

registerRoute("histoire-complete", () => renderCourse("app", histoireComplete));
registerRoute("geographie-complete", () => renderCourse("app", geographieComplete));
registerRoute("emc-complet", () => renderCourse("app", emcComplete));
registerRoute("numerique-educatif", () => renderCourse("app", numeriqueEducatif));
registerRoute("systeme-educatif", () => renderCourse("app", systemeEducatif));

document.addEventListener("DOMContentLoaded", () => {
  navigate("menu");
});

/*if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/crpe-pwa/service-worker.js");
      .then(reg => {
        console.log("✅ Service Worker enregistré", reg.scope);
      })
      .catch(err => {
        console.error("❌ Service Worker erreur", err);
      });
  });
}
*/

