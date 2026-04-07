// --- DISGUISE LOGIC ---

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

// Button trigger for the disguise (if you call this elsewhere)
function enableDisguise() {
  localStorage.setItem("disguised", "true");
  applyDisguise(); 
}

// --- NAVIGATION BUTTON & STYLES ---

(function initializePanicButton() {
  // 1. Inject your CSS into the document head
  const style = document.createElement('style');
  style.textContent = `
    #hide-tab-btn {
      position: fixed;
      top: 80px;
      left: 50%;
      transform: translate(-50%, 0); /* combine X + Y */
      z-index: 9999;
      background: #1c223c;
      color: #4f7cff;
      font-weight: 700;
      font-size: 13px;
      padding: 8px 16px;
      border-radius: 14px;
      border: 1px solid #4f7cff44;
      cursor: pointer;
      transition: all 0.25s ease;
      display: flex;
      align-items: center;
      gap: 6px;
      white-space: nowrap;
      font-family: sans-serif;
    }

    #hide-tab-btn:hover {
      background: #28304f;
      border-color: #4f7cff;
      box-shadow: 0 0 12px rgba(79, 124, 255, 0.35);
      color: #fff;
      transform: translate(-50%, -1px); /* keep X centering */
    }

    #hide-tab-btn:active {
      transform: translate(-50%, 0); /* keep X centering */
    }
  `;
  document.head.appendChild(style);

  // 2. Create the button element
  const btn = document.createElement("button");
  btn.id = "hide-tab-btn";
  btn.innerHTML = "Open Docs"; // You can change this text as needed
  
  // 3. Set the click action to open your docs page
  btn.onclick = function() {
    window.location.href = "docs.html";
  };

  // 4. Add the button to the page
  document.body.appendChild(btn);
})();
