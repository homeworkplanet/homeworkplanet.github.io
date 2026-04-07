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

// Button trigger for the disguise
function enableDisguise() {
  localStorage.setItem("disguised", "true");
  applyDisguise(); 
}

// --- NEW CODE STARTS HERE ---

/**
 * Function to navigate to the docs page
 */
function goToDocs() {
    // This changes the current tab to docs.html
    window.location.href = "docs.html";
}

/**
 * Automatically create the button and add it to the page
 */
(function createDocsButton() {
    const btn = document.createElement("button");
    btn.innerHTML = "Open Docs";
    btn.id = "panic-docs-nav-btn"; // You can use this ID in your CSS later
    
    // Attach the navigation function
    btn.onclick = goToDocs;

    // Add it to the end of the body
    document.body.appendChild(btn);
})();
