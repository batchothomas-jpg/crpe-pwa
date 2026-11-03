import { hgemcCards } from "../../courses/crpe-manuals-data.js";

export const quiz = {
  id: "crpe-hgemc-manuel",
  matiere: "Histoire, géographie et EMC",
  chapitre: "Notions disciplinaires, didactique et méthode de dossier",
  questions: hgemcCards.flatMap(chapter => chapter.questions.map(item => ({
    question: item.q,
    choices: item.a,
    correct: item.c,
    solution_steps: [item.e],
    frequent_errors: ["Confondre connaissance, document et démarche d'enseignement"],
    jury_logic: `Thème travaillé dans la fiche « ${chapter.title} » : contextualiser les savoirs et justifier leur enseignement.`
  })))
};
