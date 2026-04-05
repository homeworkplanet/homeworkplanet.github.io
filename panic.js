<!-- Panic Mode - Shift + Tab -->
// Toggle: Fake Google Docs <-> Normal Homework Planet

let isPanicMode = false;
let originalHTML = '';
let originalTitle = '';
let originalFavicon = '';

window.addEventListener('keydown', function(e) {
    // Check for Shift + Tab
    if (e.key === 'Tab' && e.shiftKey) {
        e.preventDefault();        // This is very important
        
        if (isPanicMode) {
            restoreNormalSite();
        } else {
            activatePanicMode();
        }
    }
}, true);   // Capture phase = more reliable with iframes

function activatePanicMode() {
    isPanicMode = true;
  
    // Save original state
    originalHTML = document.body.innerHTML;
    originalTitle = document.title;
    
    // Save current favicon
    const currentLink = document.querySelector("link[rel*='icon']");
    if (currentLink) originalFavicon = currentLink.href;

    // Open real Google Classroom in new tab (as backup)
    window.open('https://classroom.google.com', '_blank');

    // Change to Google Docs mode
    document.title = "Google Docs";
    
    // Set Google Docs favicon
    setFavicon('https://upload.wikimedia.org/wikipedia/commons/e/ec/GDocs_Favicon_Recreation.png?_=20220509151807');

    // Show your Google Docs image full screen
    document.body.innerHTML = `
        <img src="https://i.imgur.com/NSXIaAJ.png"
             style="width:100vw; height:100vh; object-fit:contain; background:#f8f9fa; display:block;"
             alt="Google Docs">
    `;

    // Clean URL
    history.replaceState(null, '', 'about:blank');
}

function restoreNormalSite() {
    if (!originalHTML) return;
    
    isPanicMode = false;
    
    // Restore original content and title
    document.body.innerHTML = originalHTML;
    document.title = originalTitle || "Homework Planet";
    
    // Restore your original favicon
    setFavicon('https://png.pngtree.com/png-clipart/20221219/ourmid/pngtree-pencil-clipart-png-image_6529094.png');
    
    // Reset URL
    history.replaceState(null, '', window.location.pathname);
}

// Helper to cleanly change favicon
function setFavicon(url) {
    document.querySelectorAll("link[rel*='icon']").forEach(link => link.remove());
    const link = document.createElement('link');
    link.rel = 'shortcut icon';
    link.type = 'image/png';
    link.href = url;
    document.head.appendChild(link);
}
