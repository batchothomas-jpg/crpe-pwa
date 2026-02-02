import { examLevels } from "./exam-levels.js";
import { startExam } from "./exam-engine.js";

export function renderExam(containerId) {
  const container = document.getElementById(containerId);

  let html = `
    <h1>🧪 Examens CRPE</h1>
    <p>Progression du niveau facile vers expert</p>
  `;

  Object.entries(examLevels).forEach(([level, data]) => {
    html += `
      <div class="exam-card">
        <h3>${data.label}</h3>
        <p>${data.description}</p>
        <button id="exam-${level}">▶️ Commencer</button>
      </div>
    `;
  });

  html += `<button onclick="window.go('menu')">⬅️ Menu</button>`;
  container.innerHTML = html;

  Object.keys(examLevels).forEach(level => {
    document.getElementById(`exam-${level}`).onclick = () => {
      startExam(containerId, Number(level));
    };
  });
}
