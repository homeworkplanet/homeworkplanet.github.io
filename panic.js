// Opens real Google Classroom + closes/hides Homework Planet tab

document.addEventListener('keydown', function(e) {
    if (e.key === '\\') {
        e.preventDefault();
        triggerPanic();
    }
});

function triggerPanic() {
    // 1. Try to open real Google Classroom in a new window
    const classroomWin = window.open(
        'https://classroom.google.com',
        'Classroom',
        'width=1280,height=860,menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes'
    );

    // Fallback: if popup blocked, open in new tab
    if (!classroomWin || classroomWin.closed || typeof classroomWin.closed === 'undefined') {
        window.open('https://classroom.google.com', '_blank');
    }

    // 2. Close / hide current Homework Planet tab
    // Option A: Try to close the tab (works sometimes)
    window.close();

    // Option B: If close() doesn't work, hide everything (safer on school Chromebooks)
    document.body.innerHTML = '';
    document.body.style.background = '#ffffff';
    document.title = 'Google Classroom';

    // Extra: Change URL in address bar to about:blank (helps a little)
    history.replaceState(null, '', 'about:blank');
}
