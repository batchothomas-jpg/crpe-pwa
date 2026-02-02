export function showCorrections(container, quizData, answers) {
  let html = `<h2>Correction détaillée CRPE</h2>`;

  quizData.questions.forEach((q, index) => {
    const userAnswer = answers[index];
    const isCorrect = userAnswer === q.correct;

    html += `
      <section style="margin-bottom:24px;">
        <h3>Question ${index + 1}</h3>
        <p><strong>${q.question}</strong></p>

        <p><strong>Ta réponse :</strong> ${userAnswer !== null ? q.choices[userAnswer] : "Aucune réponse"}</p>
        <p><strong>Bonne réponse :</strong> ${q.choices[q.correct]}</p>

        <p><strong>Résultat :</strong> ${isCorrect ? "✔️ Correct" : "❌ Incorrect"}</p>

        <h4>Raisonnement attendu</h4>
        <ul>
          ${q.solution_steps.map(step => `<li>${step}</li>`).join("")}
        </ul>

        <h4>Erreurs fréquentes au CRPE</h4>
        <ul>
          ${q.frequent_errors.map(error => `<li>${error}</li>`).join("")}
        </ul>

        <h4>Logique du jury</h4>
        <p>${q.jury_logic}</p>
      </section>
      <hr>
    `;
  });

  container.innerHTML = html;
}
