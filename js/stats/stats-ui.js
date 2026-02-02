import {
  getQuizStats,
  getExamStats,
  clearAllStats
} from "./stats-storage.js";

export function renderStats(containerId) {
  const container = document.getElementById(containerId);
  const quizStats = getQuizStats();
  const examStats = getExamStats();

  let html = `
    <button onclick="window.go('menu')">⬅️ Menu</button>
    <h1>📊 Statistiques CRPE</h1>
  `;

  /* ===== QUIZ ===== */
  html += `<h2>📘 Quiz</h2>`;
  if (Object.keys(quizStats).length === 0) {
    html += `<p>Aucun quiz complété.</p>`;
  } else {
    Object.entries(quizStats).forEach(([id, attempts]) => {
      const last = attempts.at(-1);
      const best = Math.max(...attempts.map(a => a.percent));
      html += `
        <div class="stat-card">
          <strong>${id}</strong><br>
          Tentatives : ${attempts.length}<br>
          Dernier score : ${last.percent}%<br>
          Meilleur score : ${best}%
        </div>
      `;
    });
  }

  /* ===== EXAMENS ===== */
  html += `<h2>🧪 Examens</h2>`;
  if (Object.keys(examStats).length === 0) {
    html += `<p>Aucun examen effectué.</p>`;
  } else {
    Object.entries(examStats).forEach(([level, attempts]) => {
      const last = attempts.at(-1);
      const best = Math.max(...attempts.map(a => a.note));
      const avg =
        Math.round(
          (attempts.reduce((s, a) => s + a.note, 0) / attempts.length) * 10
        ) / 10;

      html += `
        <div class="stat-card">
          <strong>Examen ${level}</strong><br>
          Tentatives : ${attempts.length}<br>
          Dernière note : ${last.note} / 20<br>
          Meilleure note : ${best} / 20<br>
          Moyenne : ${avg} / 20
        </div>
      `;
    });
  }

  html += `
    <button id="clear-stats">🗑️ Réinitialiser toutes les stats</button>
  `;

  container.innerHTML = html;

  document.getElementById("clear-stats").onclick = () => {
    if (confirm("Supprimer toutes les statistiques ?")) {
      clearAllStats();
      renderStats(containerId);
    }
  };
}
