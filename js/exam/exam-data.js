import { quizRegistry } from "../quiz/quiz-registry.js";

/**
 * Sélectionne 40 questions
 * Priorité : maths + français + sciences
 */
export function buildExamQuestions() {
  const prioritySubjects = [
    "maths",
    "francais",
    "sciences",
    "histoire",
    "technologie",
    "emc"
  ];

  let questions = [];

  Object.values(quizRegistry).forEach(quiz => {
    const isPriority = prioritySubjects.some(p =>
      quiz.id.startsWith(p)
    );

    const weight = isPriority ? 2 : 1;

    quiz.questions.forEach(q => {
      for (let i = 0; i < weight; i++) {
        questions.push({
          ...q,
          quizId: quiz.id,
          matiere: quiz.matiere,
          chapitre: quiz.chapitre
        });
      }
    });
  });

  // Mélange aléatoire
  questions.sort(() => Math.random() - 0.5);

  // Prend 40 questions
  return questions.slice(0, 40);
}
