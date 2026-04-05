<script>
// =============================================
// ULTRA RELIABLE PANIC - Ctrl + Q
// Works as hard as possible even inside iframes
// =============================================

let isPanicMode = false;
let originalHTML = '';
let originalTitle = '';
let originalFavicon = '';

function triggerPanic() {
    if (isPanicMode) return;
    isPanicMode = true;

    // Save original state
    originalHTML = document.body.innerHTML;
    originalTitle = document.title;
    const currentLink = document.querySelector("link[rel*='icon']");
    if (currentLink) originalFavicon = currentLink.href;

    // Extra safety: open real Google Classroom in new tab
    try { window.open('https://classroom.google.com', '_blank'); } catch(e) {}

    // Switch to fake Google Docs
    document.title = "Google Docs";

    setFavicon('https://upload.wikimedia.org/wikipedia/commons/e/ec/GDocs_Favicon_Recreation.png');

    document.body.innerHTML = `
        <img src="https://i.imgur.com/NSXIaAJ.png" 
             style="width:100vw; height:100vh; object-fit:contain; background:#f8f9fa; display:block; margin:0; padding:0;"
             alt="Google Docs">
    `;

    // Clean the URL
    history.replaceState(null, '', 'about:blank');
}

function restoreNormalSite() {
    if (!originalHTML || !isPanicMode) return;
    isPanicMode = false;

    document.body.innerHTML = originalHTML;
    document.title = originalTitle || "Homework Planet";

    setFavicon('https://png.pngtree.com/png-clipart/20221219/ourmid/pngtree-pencil-clipart-png-image_6529094.png');

    history.replaceState(null, '', window.location.pathname);
}

// Clean favicon changer
function setFavicon(url) {
    document.querySelectorAll("link[rel*='icon']").forEach(l => l.remove());
    const link = document.createElement('link');
    link.rel = 'shortcut icon';
    link.type = 'image/png';
    link.href = url;
    document.head.appendChild(link);
}

// ==================== KEY LISTENERS (Maximum Strength) ====================

function handleKey(e) {
    if (isPanicMode) return;

    const key = e.key.toLowerCase();
    const isCtrlQ = (e.ctrlKey || e.metaKey) && (key === 'q' || e.keyCode === 81);

    if (isCtrlQ) {
        e.preventDefault();
        e.stopImmediatePropagation();
        triggerPanic();
    }
}

// Attach as aggressively as possible
window.addEventListener('keydown', handleKey, true);           // Capture phase
document.addEventListener('keydown', handleKey, true);
document.body.addEventListener('keydown', handleKey, true);

// Extra backup for some stubborn iframes
setTimeout(() => {
    if (window.parent && window.parent !== window) {
        try {
            window.parent.addEventListener('keydown', handleKey, true);
        } catch(e) {}
    }
}, 500);

// ==================== FLOATING PANIC BUTTON (Always works) ====================

const panicBtn = document.createElement('button');
panicBtn.innerText = 'PANIC';
panicBtn.style.cssText = `
    position: fixed;
    top: 12px;
    right: 12px;
    z-index: 2147483647;
    padding: 12px 24px;
    font-size: 18px;
    font-weight: bold;
    background: #ff2222;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,0.4);
    user-select: none;
`;
panicBtn.onclick = () => {
    triggerPanic();
};
document.body.appendChild(panicBtn);

// Optional: Press Escape to restore (only works after panic is active)
document.addEventListener('keydown', function(e) {
    if (isPanicMode && e.key === 'Escape') {
        restoreNormalSite();
    }
}, true);

</script>
