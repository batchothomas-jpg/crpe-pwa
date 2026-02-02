import { startQuiz } from "./start-quiz.js";
import { quiz as francaisConjugaison } from "./quizzes/francais-conjugaison.js";

// Bouton : Français → Conjugaison
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn-fr-conj");

  if (!btn) {
    console.error("Bouton btn-fr-conj introuvable");
    return;
  }

  btn.onclick = () => {
    startQuiz("app", francaisConjugaison);
  };
});
