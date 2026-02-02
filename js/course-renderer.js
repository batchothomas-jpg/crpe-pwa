import { navigate } from "./router.js";

export function renderCourse(containerId, courseData) {
  const container = document.getElementById(containerId);

  if (!courseData) {
    container.innerHTML = "<p>❌ Cours introuvable</p>";
    return;
  }

  let html = `
    <button id="back-menu">⬅️ Retour au menu</button>
    <h1>${courseData.matiere || courseData.titre}</h1>
  `;

  /* =====================================================
     CAS 1 : COURS AVEC PLUSIEURS QUIZ (géographie, histoire)
     ===================================================== */
  if (Array.isArray(courseData.quizzes)) {
    if (courseData.chapitre) {
      html += `<h2>${courseData.chapitre}</h2>`;
    }

    html += `<div class="quiz-list">`;

    courseData.quizzes.forEach((q, index) => {
      html += `
        <button class="quiz-btn" data-quiz="${q.id}">
          📝 Quiz – ${q.label}
        </button>
      `;
    });

    html += `</div>`;

    if (Array.isArray(courseData.sousChapitres)) {
      courseData.sousChapitres.forEach((sc, index) => {
        html += `
          <div class="course-subchapter">
            <h3>${index + 1}. ${sc.titre}</h3>
            <p>${sc.contenu}</p>
          </div>
        `;
      });
    }

    container.innerHTML = html;

    // événements
    document.getElementById("back-menu").onclick = () => navigate("menu");

    container.querySelectorAll(".quiz-btn").forEach(btn => {
      btn.onclick = () => {
        const quizId = btn.dataset.quiz;
        navigate(`quiz-${quizId}`);
      };
    });

    return;
  }

  /* =====================================================
     CAS 2 : COURS CLASSIQUE AVEC UN SEUL QUIZ
     ===================================================== */
  if (courseData.chapitre && Array.isArray(courseData.sousChapitres)) {
    html += `
      <h2>${courseData.chapitre}</h2>
      <button class="quiz-btn" id="start-quiz">
        📝 Lancer le quiz
      </button>
    `;

    courseData.sousChapitres.forEach((sc, index) => {
      html += `
        <div class="course-subchapter">
          <h3>${index + 1}. ${sc.titre}</h3>
          <p>${sc.contenu}</p>
        </div>
      `;
    });

    container.innerHTML = html;

    document.getElementById("back-menu").onclick = () => navigate("menu");
    document.getElementById("start-quiz").onclick = () =>
      navigate(`quiz-${courseData.quizId}`);

    return;
  }

  /* =====================================================
     FALLBACK
     ===================================================== */
  container.innerHTML = html;
  document.getElementById("back-menu").onclick = () => navigate("menu");
}
