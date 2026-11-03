import { navigate } from "../router.js";
import { admissionCards, professionalCases, writtenPractice } from "./crpe-admission-data.js";
import { rapidPrepCards, hgemcCards, hgemcPractice } from "./crpe-manuals-data.js";

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

function renderCards(content, cards) {
  cards.forEach((data, index) => {
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

function renderWritten(content, exams) {
  exams.forEach(exam => {
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
  root.append(back, make("h1", "", "CRPE — cours, méthodes et entraînements"));

  const note = make("aside", "admission-update");
  note.append(make("strong", "", "Choisissez le bon format avant de vous entraîner."));
  note.append(make("p", "", "Les ouvrages intégrés couvrent des sessions 2022 à 2025. Ils servent à travailler les connaissances et les démarches ; leurs formats, programmes et exemples réglementaires ne décrivent pas nécessairement la session actuelle. Pour 2027, les concours bac+3 et bac+5 coexistent et leurs programmes diffèrent. Vérifiez la voie et la session visées sur les pages officielles avant de vous entraîner."));
  note.append(make("p", "", "Manuels étudiés : CRPE 2024 — Préparation rapide et complète aux épreuves écrites et orales (collectif) ; CRPE Concours de professeur des écoles — Histoire, géographie et EMC, tout-en-un 2024-2025 (André Janson, Nicolas Lebrun et autres auteurs). Les fiches et exercices de cette application sont des synthèses et créations originales."));
  const links = make("div", "admission-links");
  [
    ["Épreuves officielles du CRPE bac+3", "https://www.devenirenseignant.gouv.fr/les-epreuves-du-concours-externe-bac3-de-recrutement-de-professeurs-des-ecoles-1380"],
    ["Épreuves officielles du CRPE bac+5", "https://www.devenirenseignant.gouv.fr/les-epreuves-du-concours-externe-bac-5-de-recrutement-de-professeurs-des-ecoles-1009"],
    ["Programmes officiels des concours et session 2027", "https://www.devenirenseignant.gouv.fr/les-epreuves-des-concours-de-recrutement-de-professeurs-des-ecoles-1100"],
    ["Calendrier officiel de la session 2027", "https://www.devenirenseignant.gouv.fr/le-calendrier-des-concours-de-recrutement-de-professeurs-des-ecoles-de-la-session-2027-1091"]
  ].forEach(([label, href]) => {
    const a = make("a", "", label);
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    links.append(a);
  });
  note.append(links);
  root.append(note);

  const counts = `${admissionCards.length + rapidPrepCards.length + hgemcCards.length} fiches, ${[...admissionCards, ...rapidPrepCards, ...hgemcCards].reduce((sum, card) => sum + card.questions.length, 0)} questions expliquées, ${professionalCases.length} situations professionnelles et ${writtenPractice.length + hgemcPractice.length} sujets blancs originaux.`;
  root.append(make("p", "manual-intro", counts));

  const tabs = make("div", "manual-tabs");
  const choices = [
    ["Admission : fiches + quiz", content => renderCards(content, admissionCards)],
    ["Guide CRPE 2024", content => renderCards(content, rapidPrepCards)],
    ["Histoire, géographie, EMC", content => renderCards(content, hgemcCards)],
    ["Situations professionnelles", renderCases],
    ["Sujets français / maths", content => renderWritten(content, writtenPractice)],
    ["Sujets originaux HG / EMC", content => renderWritten(content, hgemcPractice)]
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
  renderCards(content, admissionCards);
}
