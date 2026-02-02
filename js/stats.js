import { loadScores } from "./quiz/quiz-storage.js";

export function renderStats(container) {
  const scores = loadScores();

  if (Object.keys(scores).length === 0) {
    container.innerHTML = "<p>Aucune statistique enregistrée.</p>";
    return;
  }

  let html = `
    <table style="width:100%; border-collapse: collapse;">
      <thead>
        <tr>
          <th>Quiz</th>
          <th>Meilleur score</th>
          <th>Tentatives</th>
          <th>Dernière fois</th>
        </tr>
      </thead>
      <tbody>
  `;

  Object.entries(scores).forEach(([id, s]) => {
    html += `
      <tr>
        <td>${id}</td>
        <td>${s.bestScore} / ${s.totalQuestions}</td>
        <td>${s.attempts}</td>
        <td>${new Date(s.lastPlayed).toLocaleDateString()}</td>
      </tr>
    `;
  });

  html += "</tbody></table>";
  container.innerHTML = html;
}
