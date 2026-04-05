// Real Google Classroom Panic Mode
// Press \ (backslash) to instantly open real Google Classroom in a new tab

document.addEventListener('keydown', function(e) {
    // Check for backslash key (\)
    if (e.key === '\\') {
        e.preventDefault();           // prevent typing the \ character
        openGoogleClassroom();
    }
});

function openGoogleClassroom() {
    // Opens real Google Classroom in a new tab/window
    window.open('https://classroom.google.com', '_blank');
    
    // Optional: You can also hide the current tab quickly
    // document.body.style.display = 'none';   // uncomment if you want extra stealth
}
