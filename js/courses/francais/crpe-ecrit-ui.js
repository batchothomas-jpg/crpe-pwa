import { navigate } from "../../router.js";
import { frCrpeChapters, frCrpeMockExams } from "./crpe-ecrit-manuel.js";
import { francais50Fiches } from "./francais-50-fiches.js";

function node(tag, className, text) {
  const item = document.createElement(tag);
  if (className) item.className = className;
  if (text !== undefined) item.textContent = text;
  return item;
}

function renderQuestion(question, number) {
  const card = node("article", "manual-question");
  card.append(node("h4", "", `Question ${number}`));
  card.append(node("p", "", question.q));
  const options = node("div", "manual-options");
  const feedback = node("p", "manual-feedback");
  feedback.hidden = true;

  question.a.forEach((choice, index) => {
    const button = node("button", "manual-option", `${String.fromCharCode(65 + index)}. ${choice}`);
    button.type = "button";
    button.addEventListener("click", () => {
      options.querySelectorAll("button").forEach(option => {
        option.disabled = true;
        option.classList.toggle("is-correct", Number(option.dataset.choice) === question.c);
      });
      button.dataset.choice = String(index);
      feedback.textContent = `${index === question.c ? "Bonne réponse." : `Réponse attendue : ${String.fromCharCode(65 + question.c)}.`} ${question.e}`;
      feedback.hidden = false;
    }, { once: true });
    button.dataset.choice = String(index);
    options.append(button);
  });

  card.append(options, feedback);
  return card;
}

function renderLessons(container, chapters = frCrpeChapters) {
  chapters.forEach((chapter, index) => {
    const section = node("details", "manual-chapter");
    if (index === 0) section.open = true;
    section.append(node("summary", "", chapter.title));
    section.append(node("p", "manual-lesson", chapter.lesson));

    const oral = node("aside", "manual-oral");
    oral.append(node("strong", "", "Vers l’oral"));
    oral.append(node("p", "", chapter.oral));
    section.append(oral);

    section.append(node("h3", "", "Quiz de révision"));
    chapter.questions.forEach((question, qIndex) => section.append(renderQuestion(question, qIndex + 1)));
    container.append(section);
  });
}

function renderExams(container) {
  frCrpeMockExams.forEach(exam => {
    const card = node("details", "manual-exam");
    card.append(node("summary", "", exam.title));
    card.append(node("p", "manual-duration", exam.duration));
    card.append(node("h3", "", "Support"));
    card.append(node("blockquote", "manual-text", exam.text));
    card.append(node("h3", "", "Travail demandé"));
    const tasks = node("ol", "");
    exam.tasks.forEach(task => tasks.append(node("li", "", task.replace(/^\d+\.\s*/, ""))));
    card.append(tasks);
    const correction = node("details", "manual-correction");
    correction.append(node("summary", "", "Afficher le corrigé indicatif"));
    const answers = node("ol", "");
    exam.correction.forEach(answer => answers.append(node("li", "", answer)));
    correction.append(answers, node("p", "manual-rubric", exam.rubric));
    card.append(correction);
    container.append(card);
  });
}

export function renderFrCrpeManual(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.replaceChildren();
  const back = node("button", "", "⬅️ Retour au menu");
  back.type = "button";
  back.addEventListener("click", () => navigate("menu"));
  container.append(back);
  container.append(node("h1", "", "Français — préparation à l’écrit du CRPE"));
  const totalQuestions = [...frCrpeChapters, ...francais50Fiches].reduce((sum, chapter) => sum + chapter.questions.length, 0);
  container.append(node("p", "manual-intro", `${frCrpeChapters.length + francais50Fiches.length} fiches synthétiques, ${totalQuestions} questions expliquées, des pistes pour l’oral et ${frCrpeMockExams.length} sujets blancs originaux avec corrigés indicatifs. Les compléments du recueil « 50 fiches » approfondissent les notions déjà au programme de révision avec des quiz supplémentaires.`));

  const tabs = node("div", "manual-tabs");
  const lessonsButton = node("button", "", "Fiches et quiz");
  const refreshButton = node("button", "", "Approfondissements — 50 fiches");
  const examsButton = node("button", "", "Épreuves blanches");
  lessonsButton.type = refreshButton.type = examsButton.type = "button";
  tabs.append(lessonsButton, refreshButton, examsButton);
  container.append(tabs);

  const content = node("section", "manual-content");
  container.append(content);
  renderLessons(content);

  lessonsButton.addEventListener("click", () => {
    content.replaceChildren();
    renderLessons(content);
  });
  refreshButton.addEventListener("click", () => {
    content.replaceChildren();
    renderLessons(content, francais50Fiches);
    content.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  examsButton.addEventListener("click", () => {
    content.replaceChildren();
    renderExams(content);
    content.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
