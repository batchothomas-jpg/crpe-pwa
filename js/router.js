// js/router.js

const routes = {};

/**
 * Enregistre une route
 * @param {string} name - nom unique de la route
 * @param {function} callback - fonction à exécuter
 */
export function registerRoute(name, callback) {
  routes[name] = callback;
}

/**
 * Navigue vers une route
 * @param {string} routeName
 */
export function navigate(routeName) {
  const app = document.getElementById("app");

  if (!app) {
    console.error("❌ Élément #app introuvable");
    return;
  }

  if (!routes[routeName]) {
    app.innerHTML = `
      <h2>❌ Page introuvable</h2>
      <button id="back-menu">🏠 Retour au menu</button>
    `;
    document.getElementById("back-menu").onclick = () => navigate("menu");
    return;
  }

  // Nettoyage de l'écran
  app.innerHTML = "";

  // Exécution de la route
  routes[routeName](app);
}

/**
 * Raccourci global (utilisé par les boutons HTML)
 */
window.go = navigate;
