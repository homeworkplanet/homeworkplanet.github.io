// Panic Mode - Opens REAL Google Classroom in a new WINDOW
// Trigger: Backslash key (\)

document.addEventListener('keydown', function(e) {
    if (e.key === '\\') {
        e.preventDefault();
        openGoogleClassroomWindow();
    }
});

function openGoogleClassroomWindow() {
    // This forces a new window (popup) instead of a tab
    const classroomWindow = window.open(
        'https://classroom.google.com', 
        'GoogleClassroom', 
        'width=1200,height=800,menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes'
    );

    // Optional: If the popup gets blocked, fallback to new tab
    if (!classroomWindow || classroomWindow.closed || typeof classroomWindow.closed === 'undefined') {
        window.open('https://classroom.google.com', '_blank');
    }
}
