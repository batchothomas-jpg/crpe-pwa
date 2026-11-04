import { francais50Fiches } from "../../courses/francais/francais-50-fiches.js";

export const quiz = {
  id: "francais-50-fiches",
  matiere: "Français",
  chapitre: "Remise à niveau : grammaire, orthographe et lexique",
  questions: francais50Fiches.flatMap(chapter => chapter.questions.map(item => ({
    question: item.q,
    choices: item.a,
    correct: item.c,
    solution_steps: [item.e],
    frequent_errors: ["Classer un élément sans analyser sa construction et son contexte"],
    jury_logic: `Approfondissement « ${chapter.title} » : justifier l’analyse à partir d’indices linguistiques.`
  })))
};
