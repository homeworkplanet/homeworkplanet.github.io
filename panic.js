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

// Button trigger
function enableDisguise() {
  localStorage.setItem("disguised", "true");
  applyDisguise(); 
}

// --- NEW FUNCTIONALITY WITH YOUR CSS ---

(function initializePanicButton() {
  // 1. Inject the CSS into the <head>
  const style = document.createElement('style');
  style.textContent = `
    #hide-tab-btn {
      position: fixed;
      top: 90px;
      left: 5.5%;
      transform: translate(-50%, 0);
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
      font-family: sans-serif; /* Added for clean look */
    }

    #hide-tab-btn:hover {
      background: #28304f;
      border-color: #4f7cff;
      box-shadow: 0 0 12px rgba(79, 124, 255, 0.35);
      color: #fff;
      transform: translate(-50%, -1px);
    }

    #hide-tab-btn:active {
      transform: translate(-50%, 0);
    }
  `;
  document.head.appendChild(style);

  // 2. Create the button element
  const btn = document.createElement("button");
  btn.id = "hide-tab-btn";
  btn.innerHTML = `
    <span class="icon">🤫</span>
    <span class="text">Hide Tab</span>
`;
  
  // 3. Set the click action
  btn.onclick = function() {
    window.location.href = "docs.html";
  };

  // 4. Add it to the page
  document.body.appendChild(btn);
})();
