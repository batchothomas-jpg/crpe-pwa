import { frCrpeChapters } from "../../courses/francais/crpe-ecrit-manuel.js";

export const quiz = {
  id: "crpe-francais-manuel",
  matiere: "Français",
  chapitre: "Notions du manuel CRPE — écrit",
  questions: frCrpeChapters.flatMap(chapter => chapter.questions.map(item => ({
    question: item.q,
    choices: item.a,
    correct: item.c,
    solution_steps: [item.e],
    frequent_errors: ["Répondre sans justifier l’analyse"],
    jury_logic: `Notion travaillée dans la fiche « ${chapter.title} » : la réponse doit être reliée à des indices précis.`
  })))
};
