const STORAGE_KEY = "crpe_quiz_scores";

export function loadScores() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : {};
}

export function saveScore(quizId, score, total) {
  const scores = loadScores();

  if (!scores[quizId]) {
    scores[quizId] = {
      attempts: 0,
      bestScore: 0,
      lastScore: 0,
      totalQuestions: total,
      lastPlayed: null
    };
  }

  scores[quizId].attempts += 1;
  scores[quizId].lastScore = score;
  scores[quizId].totalQuestions = total;
  scores[quizId].lastPlayed = new Date().toISOString();

  if (score > scores[quizId].bestScore) {
    scores[quizId].bestScore = score;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(scores));
}

export function getQuizStats(quizId) {
  const scores = loadScores();
  return scores[quizId] || null;
}


export function saveQuizResult(quizId, score, total) {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  data[quizId] = { score, total, date: Date.now() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function getQuizResults() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
}
