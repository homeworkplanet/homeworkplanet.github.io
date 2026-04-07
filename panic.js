// panic.js

// Function to apply the Google Docs disguise
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

// Function to enable disguise (called by button)
function enableDisguise() {
  localStorage.setItem("disguised", "true"); // save globally
  applyDisguise(); // apply immediately in this tab
}

// Listen for storage changes to sync across tabs
window.addEventListener("storage", (event) => {
  if (event.key === "disguised" && event.newValue === "true") {
    applyDisguise();
  }
});
