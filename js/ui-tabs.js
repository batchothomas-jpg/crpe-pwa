export function initTabs(container) {
  const buttons = container.querySelectorAll(".tabs button");
  const contents = container.querySelectorAll(".tab-content");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab;

      buttons.forEach(b => b.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      container.querySelector(`#${target}`).classList.add("active");
    });
  });

  // Onglet par défaut
  buttons[0].click();
}
