import { admissionCards } from "../../courses/crpe-admission-data.js";

export const quiz = {
  id: "crpe-admission",
  matiere: "CRPE",
  chapitre: "Admission, didactique et posture professionnelle",
  questions: admissionCards.flatMap(chapter => chapter.questions.map(item => ({
    question: item.q,
    choices: item.a,
    correct: item.c,
    solution_steps: [item.e],
    frequent_errors: ["Confondre une règle générale avec une réponse adaptée au contexte"],
    jury_logic: `Thème travaillé dans la fiche « ${chapter.title} » : expliciter les choix et vérifier le cadre applicable.`
  })))
};
