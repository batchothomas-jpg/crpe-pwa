import { fullCourseCards } from "../../courses/crpe-manuals-data.js";

export const quiz = {
  id: "crpe-tout-le-cours-2023",
  matiere: "CRPE",
  chapitre: "Tout le cours 2023-2024 : didactique, leçon, EPS et entretien",
  questions: fullCourseCards.flatMap(chapter => chapter.questions.map(item => ({
    question: item.q,
    choices: item.a,
    correct: item.c,
    solution_steps: [item.e],
    frequent_errors: ["Appliquer un conseil ancien sans vérifier la situation ni le cadre actuel"],
    jury_logic: `Thème travaillé dans la fiche « ${chapter.title} » : relier les savoirs, la tâche et les besoins des élèves.`
  })))
};
