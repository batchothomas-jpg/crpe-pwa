import { buildExam } from "./exam-builder.js";
import { saveExamStat } from "../stats/stats-storage.js";


export function startExam(containerId, level) {
  const container = document.getElementById(containerId);

  const questions = buildExam(level);
  let index = 0;
  let score = 0;
  let timeLeft = 40 * 60;
  let timer = null;

  function stopTimer() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function exitExam() {
    stopTimer();
    window.go("menu");
  }

  timer = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      stopTimer();
      finishExam();
    }
    updateTimer();
  }, 1000);

  function updateTimer() {
    const min = Math.floor(timeLeft / 60);
    const sec = timeLeft % 60;
    const timerEl = document.getElementById("timer");
    if (timerEl) {
      timerEl.textContent = `${min}:${sec.toString().padStart(2, "0")}`;
    }
  }

  function renderQuestion() {
    const q = questions[index];

    const progress = Math.round(((index + 1) / 40) * 100);

    container.innerHTML = `
    <div class="exam-header">
        <button id="exit-exam">⬅️ Quitter l’examen</button>
        <span id="timer"></span>
        <span>Question ${index + 1} / 40</span>
    </div>

    <div class="progress-bar">
        <div class="progress" style="width:${progress}%"></div>
    </div>

    <p class="question-animate">${q.question}</p>
    <div id="choices"></div>
    `;


    // ✅ BOUTON RETOUR — BRANCHÉ ICI (APRÈS innerHTML)
    document.getElementById("exit-exam").onclick = () => {
      if (confirm("Quitter l’examen ? Le score ne sera pas enregistré.")) {
        exitExam();
      }
    };

    updateTimer();

    const choicesDiv = document.getElementById("choices");
    q.choices.forEach((choice, i) => {
      const btn = document.createElement("button");
      btn.textContent = choice;
      btn.onclick = () => handleAnswer(i);
      choicesDiv.appendChild(btn);
    });
  }

  function handleAnswer(selected) {
    if (selected === questions[index].correct) {
      score++;
    }
    index++;
    if (index < questions.length) {
      renderQuestion();
    } else {
      finishExam();
    }
  }

  function finishExam() {
    stopTimer();
    saveExamStat(level, score);

    container.innerHTML = `
      <h2>📝 Examen terminé</h2>
      <p>Score : ${score} / 40</p>
      <p>Note : ${(score / 40 * 20).toFixed(1)} / 20</p>
      <button onclick="window.go('menu')">🏠 Menu</button>
    `;
  }

  renderQuestion();
}
