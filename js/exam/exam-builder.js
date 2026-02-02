import { quizRegistry } from "../quiz/quiz-registry.js";

export function buildExam(level) {
  let pool = [];

  Object.values(quizRegistry).forEach(quiz => {
    quiz.questions.forEach(q => {
      pool.push({
        ...q,
        matiere: quiz.matiere,
        chapitre: quiz.chapitre,
        quizId: quiz.id
      });
    });
  });

  // Niveau 1 : questions directes
  if (level === 1) {
    pool = pool.filter(q => q.solution_steps.length === 1);
  }

  // Niveau 2 : compréhension simple
  if (level === 2) {
    pool = pool.filter(q => q.solution_steps.length >= 1);
  }

  // Niveau 3 : raisonnement attendu
  if (level === 3) {
    pool = pool.filter(q => q.jury_logic);
  }

  // Niveau 4 : pièges + erreurs fréquentes
  if (level === 4) {
    pool = pool.filter(
      q => q.jury_logic && q.frequent_errors && q.frequent_errors.length > 0
    );
  }

  // Niveau 5 : CRPE expert
  if (level === 5) {
    pool = pool.filter(
      q =>
        q.jury_logic &&
        q.frequent_errors &&
        q.frequent_errors.length > 0 &&
        q.solution_steps.length >= 2
    );
  }

  // mélange aléatoire
  pool.sort(() => Math.random() - 0.5);

  return pool.slice(0, 40);
}
