import { rapidPrepCards } from "../../courses/crpe-manuals-data.js";

export const quiz = {
  id: "crpe-guide-2024",
  matiere: "CRPE",
  chapitre: "Guide de préparation 2024 : français, mathématiques, EPS et oraux",
  questions: rapidPrepCards.flatMap(chapter => chapter.questions.map(item => ({
    question: item.q,
    choices: item.a,
    correct: item.c,
    solution_steps: [item.e],
    frequent_errors: ["Répondre sans vérifier la session ni justifier la démarche"],
    jury_logic: `Thème travaillé dans la fiche « ${chapter.title} » : mobiliser une connaissance et l'expliquer.`
  })))
};
