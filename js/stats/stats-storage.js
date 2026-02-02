const KEY = "crpe-stats-v2";

function load() {
  return JSON.parse(localStorage.getItem(KEY)) || {
    quizzes: {},
    exams: {}
  };
}

function save(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

/* ===== QUIZ ===== */

export function saveQuizStat(quizId, score, total) {
  const data = load();
  if (!data.quizzes[quizId]) data.quizzes[quizId] = [];

  data.quizzes[quizId].push({
    score,
    total,
    percent: Math.round((score / total) * 100),
    date: new Date().toLocaleString()
  });

  save(data);
}

export function getQuizStats() {
  return load().quizzes;
}

/* ===== EXAMENS ===== */

export function saveExamStat(level, score) {
  const data = load();
  if (!data.exams[level]) data.exams[level] = [];

  data.exams[level].push({
    score,
    note: Math.round((score / 40) * 20 * 10) / 10,
    date: new Date().toLocaleString()
  });

  save(data);
}

export function getExamStats() {
  return load().exams;
}

export function clearAllStats() {
  localStorage.removeItem(KEY);
}
