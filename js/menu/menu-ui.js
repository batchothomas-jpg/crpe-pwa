import { navigate } from "../router.js";
import { menuData } from "./menu-data.js";

export function renderMenu(containerId) {
  const container = document.getElementById(containerId);

  container.innerHTML = `
    <h1>📘 Révisions CRPE</h1>

    <div class="menu-actions">
      <button onclick="window.go('exam')">🧪 Examen CRPE</button>
      <button id="btn-stats">📊 Statistiques</button>
      
    </div>

  `;

  // bouton stats
  document.getElementById("btn-stats").onclick = () => {
    navigate("stats");
  };

  // sections matières / chapitres
  menuData.forEach(sectionData => {
    const section = document.createElement("section");
    section.innerHTML = `<h2>${sectionData.matiere}</h2>`;

    sectionData.chapitres.forEach(chap => {
      const btn = document.createElement("button");
      btn.textContent = chap.titre;
      btn.onclick = () => navigate(chap.route);
      section.appendChild(btn);
    });

    container.appendChild(section);
  });
}
