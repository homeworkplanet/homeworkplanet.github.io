function applyDisguise() {
  document.title = "Google Docs";

  let favicon = document.querySelector("link[rel~='icon']");
  if (!favicon) {
    favicon = document.createElement("link");
    favicon.rel = "icon";
    document.head.appendChild(favicon);
  }

  favicon.href = "https://upload.wikimedia.org/wikipedia/commons/e/ec/GDocs_Favicon_Recreation.png";
}

// ALWAYS check on load
(function () {
  if (localStorage.getItem("disguised") === "true") {
    applyDisguise();
  }
})();

// Sync across tabs
window.addEventListener("storage", (event) => {
  if (event.key === "disguised" && event.newValue === "true") {
    applyDisguise();
  }
});

// Button trigger
function enableDisguise() {
  localStorage.setItem("disguised", "true");
  applyDisguise(); // apply immediately in this tab
}
