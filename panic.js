// Panic Mode - Backslash (\)
// Toggle: Fake Google Docs <-> Normal Homework Planet

let isPanicMode = false;
let originalHTML = '';
let originalTitle = '';

document.addEventListener('keydown', function(e) {
    if (e.key === '\\') {
        e.preventDefault();
        
        if (isPanicMode) {
            restoreNormalSite();
        } else {
            activatePanicMode();
        }
    }
});

function activatePanicMode() {
    isPanicMode = true;
    
    // Save original state
    originalHTML = document.body.innerHTML;
    originalTitle = document.title;

    // Open real Google Classroom in new tab
    window.open('https://classroom.google.com', '_blank');

    // Change tab title to Google Docs
    document.title = "Google Docs";

    // Change favicon to Google Docs
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://upload.wikimedia.org/wikipedia/commons/e/ec/GDocs_Favicon_Recreation.png?_=20220509151807';
    document.head.appendChild(link);

    // Show your Google Docs image as full screen
    document.body.innerHTML = `
        <img src="https://i.imgur.com/NSXIaAJ.png" 
             style="width:100vw; height:100vh; object-fit:cover; display:block;" 
             alt="Google Docs">
    `;

    // Change URL in address bar
    history.replaceState(null, '', 'about:blank');
}

function restoreNormalSite() {
    if (!originalHTML) return;

    isPanicMode = false;

    // Restore original content
    document.body.innerHTML = originalHTML;
    document.title = originalTitle;

    // Restore original favicon (this is approximate - GitHub Pages favicon)
    let link = document.querySelector("link[rel*='']");
    if (link) {
        link.href = 'https://png.pngtree.com/png-clipart/20221219/ourmid/pngtree-pencil-clipart-png-image_6529094.png'; // You can put your original favicon URL here if you have one
    }

    // Reset URL
    history.replaceState(null, '', window.location.pathname);
}
