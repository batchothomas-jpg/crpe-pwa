import { navigate } from "../router.js";
import { admissionCards, professionalCases, writtenPractice } from "./crpe-admission-data.js";

function make(tag, className = "", text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}

function quizQuestion(question, number) {
  const card = make("article", "manual-question");
  card.append(make("h4", "", `Question ${number}`), make("p", "", question.q));
  const options = make("div", "manual-options");
  const feedback = make("p", "manual-feedback");
  feedback.hidden = true;
  question.a.forEach((answer, index) => {
    const button = make("button", "manual-option", `${String.fromCharCode(65 + index)}. ${answer}`);
    button.type = "button";
    button.dataset.choice = String(index);
    button.addEventListener("click", () => {
      options.querySelectorAll("button").forEach(option => {
        option.disabled = true;
        option.classList.toggle("is-correct", Number(option.dataset.choice) === question.c);
      });
      feedback.textContent = `${index === question.c ? "Bonne réponse." : `Réponse attendue : ${String.fromCharCode(65 + question.c)}.`} ${question.e}`;
      feedback.hidden = false;
    }, { once: true });
    options.append(button);
  });
  card.append(options, feedback);
  return card;
}

function renderCards(content) {
  admissionCards.forEach((data, index) => {
    const section = make("details", "manual-chapter");
    if (index === 0) section.open = true;
    section.append(make("summary", "", data.title));
    section.append(make("p", "manual-lesson", data.lesson));
    const oral = make("aside", "manual-oral");
    oral.append(make("strong", "", "Question d’oral"), make("p", "", data.prompt));
    section.append(oral, make("h3", "", "Quiz de révision"));
    data.questions.forEach((question, i) => section.append(quizQuestion(question, i + 1)));
    content.append(section);
  });
}

function renderCases(content) {
  professionalCases.forEach(data => {
    const section = make("details", "manual-exam");
    section.append(make("summary", "", data.title));
    section.append(make("p", "", data.prompt));
    const selfCheck = make("ul", "");
    ["Ai-je commencé par sécuriser et écouter ?", "Ai-je distingué les faits de mes hypothèses ?", "Ai-je sollicité les bons interlocuteurs ?", "Ai-je prévu un suivi et protégé la confidentialité ?"].forEach(item => selfCheck.append(make("li", "", item)));
    section.append(make("h3", "", "Auto-évaluation"), selfCheck);
    const answer = make("details", "manual-correction");
    answer.append(make("summary", "", "Afficher une piste de réponse"), make("p", "", data.guide));
    section.append(answer);
    content.append(section);
  });
}

function renderWritten(content) {
  writtenPractice.forEach(exam => {
    const section = make("details", "manual-exam");
    section.append(make("summary", "", exam.title));
    section.append(make("p", "manual-duration", exam.duration));
    section.append(make("h3", "", "Support"), make("blockquote", "manual-text", exam.text));
    section.append(make("h3", "", "Questions"));
    const tasks = make("ol");
    exam.tasks.forEach(task => tasks.append(make("li", "", task.replace(/^\d+\.\s*/, ""))));
    section.append(tasks);
    const correction = make("details", "manual-correction");
    correction.append(make("summary", "", "Afficher le corrigé indicatif"));
    const answers = make("ol");
    exam.correction.forEach(answer => answers.append(make("li", "", answer)));
    correction.append(answers, make("p", "manual-rubric", exam.rubric));
    section.append(correction);
    content.append(section);
  });
}

export function renderCrpeAdmission(containerId) {
  const root = document.getElementById(containerId);
  if (!root) return;
  root.replaceChildren();
  const back = make("button", "", "⬅️ Retour au menu");
  back.type = "button";
  back.addEventListener("click", () => navigate("menu"));
  root.append(back, make("h1", "", "CRPE — admission et entraînement français / mathématiques"));

  const note = make("aside", "admission-update");
  note.append(make("strong", "", "Choisissez le bon format avant de vous entraîner."));
  note.append(make("p", "", "Ces ressources viennent d’un guide d’admission 2025 et d’un recueil d’écrits de 2022. Le concours externe bac+3, organisé depuis 2026, a un format différent ; le bac+5 est maintenu à titre transitoire pour 2026 et 2027. Les épreuves d’admission évoluent aussi en 2027. Vérifiez les modalités de votre voie et de votre session sur les pages officielles."));
  const links = make("div", "admission-links");
  [
    ["Épreuves officielles du CRPE bac+3", "https://www.devenirenseignant.gouv.fr/les-epreuves-du-concours-externe-bac3-de-recrutement-de-professeurs-des-ecoles-1380"],
    ["Épreuves officielles du CRPE bac+5", "https://www.devenirenseignant.gouv.fr/les-epreuves-du-concours-externe-bac-5-de-recrutement-de-professeurs-des-ecoles-1009"],
    ["Arrêté modificatif pour la session 2027", "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054861950"]
  ].forEach(([label, href]) => {
    const a = make("a", "", label);
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    links.append(a);
  });
  note.append(links);
  root.append(note);

  const counts = `${admissionCards.length} fiches, ${admissionCards.reduce((sum, card) => sum + card.questions.length, 0)} questions, ${professionalCases.length} situations professionnelles et ${writtenPractice.length} mini-sujets originaux.`;
  root.append(make("p", "manual-intro", counts));

  const tabs = make("div", "manual-tabs");
  const choices = [
    ["Fiches + quiz", renderCards],
    ["Situations professionnelles", renderCases],
    ["Sujets blancs français / maths", renderWritten]
  ];
  const content = make("section", "manual-content");
  choices.forEach(([label, render], index) => {
    const button = make("button", "", label);
    button.type = "button";
    button.addEventListener("click", () => {
      content.replaceChildren();
      render(content);
      if (index !== 0) content.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    tabs.append(button);
  });
  root.append(tabs, content);
  renderCards(content);
}
