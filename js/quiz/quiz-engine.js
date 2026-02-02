import { saveQuizStat } from "../stats/stats-storage.js";


export function runQuiz(containerId, quiz) {
  console.log("✅ quiz-engine.js chargé");

  const container = document.getElementById(containerId);
  let index = 0;
  let score = 0;

  function renderQuestion() {
    console.log("✅ renderQuestion appelée");

    const q = quiz.questions[index];
    const lastQuizId = localStorage.getItem("currentCourseQuizId");

    const progress = Math.round(((index + 1) / quiz.questions.length) * 100);

    container.innerHTML = `
      <div class="quiz-header">
        <button id="back-course">⬅️</button>
        <span>${index + 1} / ${quiz.questions.length}</span>
      </div>

      <div class="progress-bar">
        <div class="progress" style="width:${progress}%"></div>
      </div>

      <p class="question-animate">${q.question}</p>
      <div id="choices"></div>
    `;


    document.getElementById("back-course").onclick = () => {
      if (lastQuizId) {
        window.go(lastQuizId);
      } else {
        window.go("menu");
      }
    };

    const choicesDiv = document.getElementById("choices");
    q.choices.forEach((choice, i) => {
      const btn = document.createElement("button");
      btn.textContent = choice;
      btn.onclick = () => handleAnswer(i);
      choicesDiv.appendChild(btn);
    });
  }

  function handleAnswer(selectedIndex) {
    const q = quiz.questions[index];
    if (selectedIndex === q.correct) score++;

    container.innerHTML = `
      <h3>Correction</h3>
      <p>${q.solution_steps.join("<br>")}</p>
      <button id="next">Suivant</button>
    `;

    document.getElementById("next").onclick = () => {
      index++;
      if (index < quiz.questions.length) {
        renderQuestion();
      } else {
        finishQuiz();
      }
    };
  }

  function finishQuiz() {
    saveQuizStat(quiz.id, score, quiz.questions.length);
    container.innerHTML = `
      <h2>Quiz terminé</h2>
      <p>Score : ${score}/${quiz.questions.length}</p>
      <button onclick="window.go('menu')">🏠 Menu</button>
    `;
  }

  renderQuestion();
}
