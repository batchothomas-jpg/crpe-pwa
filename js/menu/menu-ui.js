import { navigate } from "../router.js";
import { menuData } from "./menu-data.js";
import { getQuizStats, getExamStats } from "../stats/stats-storage.js";

const subjectStyles = [
  { icon: "∑", tone: "lavender", label: "Raisonnement" },
  { icon: "Aa", tone: "rose", label: "Langue & didactique" },
  { icon: "✳", tone: "mint", label: "Observer le monde" },
  { icon: "◷", tone: "amber", label: "Repères historiques" },
  { icon: "⌖", tone: "blue", label: "Lire les territoires" },
  { icon: "⚖", tone: "rose", label: "Citoyenneté" },
  { icon: "⌘", tone: "blue", label: "Pratiques numériques" },
  { icon: "⌂", tone: "mint", label: "Le métier" },
];

function getActivitySummary() {
  const quizzes = Object.values(getQuizStats());
  const exams = Object.values(getExamStats());
  const quizSessions = quizzes.reduce((total, attempts) => total + attempts.length, 0);
  const examSessions = exams.reduce((total, attempts) => total + attempts.length, 0);
  const bestScores = quizzes.flatMap(attempts => attempts.map(attempt => attempt.percent));
  return {
    quizSessions,
    examSessions,
    best: bestScores.length ? Math.max(...bestScores) : null,
  };
}

function renderSubjectCard(section, index) {
  const style = subjectStyles[index] || subjectStyles[0];
  const chapters = section.chapitres.map(chapter => `
    <button class="chapter-link" type="button" data-route="${chapter.route}">
      <span>${chapter.titre}</span><span class="chapter-arrow" aria-hidden="true">↗</span>
    </button>
  `).join("");

  return `
    <section class="subject-card tone-${style.tone}" aria-labelledby="subject-${index}">
      <div class="subject-topline">
        <span class="subject-icon" aria-hidden="true">${style.icon}</span>
        <span class="subject-count">${section.chapitres.length} parcours</span>
      </div>
      <p class="eyebrow">${style.label}</p>
      <h2 id="subject-${index}">${section.matiere.replace(/^\S+\s/, "")}</h2>
      <div class="chapter-list">${chapters}</div>
    </section>
  `;
}

export function renderMenu(containerId) {
  const container = document.getElementById(containerId);
  const activity = getActivitySummary();
  const subjectCount = menuData.reduce((total, section) => total + section.chapitres.length, 0);
  const bestLabel = activity.best === null ? "—" : `${activity.best}%`;
  const actionLabel = activity.quizSessions ? "Continuer ma préparation" : "Commencer à réviser";

  container.innerHTML = `
    <div class="dashboard">
      <section class="welcome-hero">
        <div class="hero-copy">
          <p class="hero-kicker"><span class="live-dot"></span> TON ESPACE DE PRÉPARATION</p>
          <h1>Le CRPE se prépare.<br><em>Tu es au bon endroit.</em></h1>
          <p class="hero-description">Des révisions claires, des entraînements réguliers et une progression à ton rythme.</p>
          <div class="hero-actions">
            <a class="button button-light" href="#matieres">${actionLabel}<span aria-hidden="true">→</span></a>
            <button class="hero-text-button" id="hero-exam" type="button">Me tester en conditions réelles <span aria-hidden="true">↗</span></button>
          </div>
          <div class="hero-proof"><span class="proof-avatar">✦</span><span><strong>${subjectCount} parcours pour avancer</strong><small>Fiches, quiz et épreuves blanches</small></span></div>
        </div>
        <div class="hero-art" aria-hidden="true">
          <div class="hero-orbit orbit-one"></div><div class="hero-orbit orbit-two"></div>
          <div class="hero-spark spark-one">✳</div><div class="hero-spark spark-two">✦</div>
          <div class="hero-note"><span class="note-icon">✓</span><span><strong>Un pas après l’autre</strong><small>La régularité fait la différence</small></span></div>
          <div class="hero-book"><div class="book-spine"></div><div class="book-lines"><i></i><i></i><i></i><i></i></div><span>CRPE<br><b>2027</b></span><div class="book-ribbon"></div></div>
          <div class="hero-stamp">PRÊT·E<br>À RÉUSSIR</div>
        </div>
      </section>

      <section class="quick-stats" aria-label="Ta préparation">
        <div class="quick-stat"><span class="stat-icon stat-icon-lavender">✎</span><span><strong>${activity.quizSessions}</strong><small>quiz réalisés</small></span></div>
        <div class="stat-divider"></div>
        <div class="quick-stat"><span class="stat-icon stat-icon-amber">◷</span><span><strong>${activity.examSessions}</strong><small>épreuves tentées</small></span></div>
        <div class="stat-divider"></div>
        <div class="quick-stat"><span class="stat-icon stat-icon-mint">↗</span><span><strong>${bestLabel}</strong><small>meilleur quiz</small></span></div>
        <button class="stats-cta" id="open-stats" type="button">Voir ma progression <span aria-hidden="true">→</span></button>
      </section>

      <section class="study-path" aria-label="Méthode de révision">
        <div class="study-path-copy"><span class="path-label">LA BONNE MÉTHODE</span><strong>Un peu chaque jour.<br>Beaucoup plus de confiance.</strong></div>
        <div class="path-steps"><span class="path-step"><i>01</i> Comprendre</span><span class="path-line"></span><span class="path-step"><i>02</i> S’entraîner</span><span class="path-line"></span><span class="path-step"><i>03</i> Progresser</span></div>
        <span class="path-flower" aria-hidden="true">✳</span>
      </section>

      <section id="matieres" class="subjects-section">
        <div class="section-heading">
          <div><p class="eyebrow">CHOISIS TON PROCHAIN PAS</p><h2>Explorer les matières</h2><p>À toi de choisir par quoi commencer aujourd’hui.</p></div>
          <label class="search-box"><span aria-hidden="true">⌕</span><input id="subject-search" type="search" placeholder="Rechercher un cours…" aria-label="Rechercher une matière ou un cours"></label>
        </div>
        <div class="subject-grid">${menuData.map(renderSubjectCard).join("")}</div>
        <p class="no-results" id="no-subject-results" hidden>Aucun cours ne correspond. Essaie un autre mot-clé.</p>
      </section>

      <footer class="dashboard-footer"><span class="footer-star">✳</span><span>Chaque grande réussite commence par une petite séance.</span><a href="#matieres">On s’y met ? ↑</a></footer>
    </div>
  `;

  container.querySelectorAll("[data-route]").forEach(button => {
    button.addEventListener("click", () => navigate(button.dataset.route));
  });
  container.querySelector("#open-stats").addEventListener("click", () => navigate("stats"));
  container.querySelector("#hero-exam").addEventListener("click", () => navigate("exam"));
  container.querySelector(".button-light").addEventListener("click", event => {
    event.preventDefault();
    document.querySelector("#matieres").scrollIntoView({ behavior: "smooth" });
  });

  const search = container.querySelector("#subject-search");
  search.addEventListener("input", () => {
    const query = search.value.trim().toLocaleLowerCase("fr");
    let visibleCount = 0;
    container.querySelectorAll(".subject-card").forEach(card => {
      const visible = card.textContent.toLocaleLowerCase("fr").includes(query);
      card.hidden = !visible;
      visibleCount += Number(visible);
    });
    container.querySelector("#no-subject-results").hidden = visibleCount > 0;
  });
}
