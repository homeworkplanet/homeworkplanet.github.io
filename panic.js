function applyDisguise() {
  document.title = "Google Docs";

  let favicon = document.querySelector("link[rel~='icon']");
  if (!favicon) {
    favicon = document.createElement("link");
    favicon.rel = "icon";
    document.head.appendChild(favicon);
  }

  favicon.href = "https://upload.wikimedia.org/wikipedia/commons/e/ec/GDocs_Favicon_Recreation.png?_=20220509151807";
}

// Apply automatically on every page if activated
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("disguised") === "true") {
    applyDisguise();
  }
});
