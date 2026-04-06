// =============================================
// PANIC.JS (MAX RELIABILITY VERSION)
// Backslash (\) = redirect to /docs.html
// Includes focus-lock trick to beat iframes
// =============================================

(function () {

    // ====================
    // PANIC TRIGGER
    // ====================

    function triggerPanic() {
        window.location.replace("/docs.html");
    }

    function handleKey(e) {
        if (e.key === '\\' || e.code === 'Backslash') {
            e.preventDefault();
            e.stopImmediatePropagation();
            triggerPanic();
        }
    }

    // Capture phase (strongest possible)
    window.addEventListener('keydown', handleKey, true);
    document.addEventListener('keydown', handleKey, true);

    // ====================
    // FOCUS LOCK (DIRTY TRICK)
    // ====================

    const focusTrap = document.createElement('input');

    focusTrap.style.position = 'fixed';
    focusTrap.style.opacity = '0';
    focusTrap.style.pointerEvents = 'none';
    focusTrap.style.height = '0';
    focusTrap.style.width = '0';

    document.addEventListener('DOMContentLoaded', () => {
        document.body.appendChild(focusTrap);

        function forceFocus() {
            focusTrap.focus();
        }

        // Constantly steal focus back from iframes
        setInterval(forceFocus, 50);

        // Reinforce on user interaction
        document.addEventListener('click', forceFocus, true);
        document.addEventListener('mousemove', forceFocus, true);
    });

})();// =============================================
// PANIC.JS (MAX RELIABILITY VERSION)
// Backslash (\) = redirect to /docs.html
// Includes focus-lock trick to beat iframes
// =============================================

(function () {

    // ====================
    // PANIC TRIGGER
    // ====================

    function triggerPanic() {
        window.location.replace("/docs.html");
    }

    function handleKey(e) {
        if (e.key === '\\' || e.code === 'Backslash') {
            e.preventDefault();
            e.stopImmediatePropagation();
            triggerPanic();
        }
    }

    // Capture phase (strongest possible)
    window.addEventListener('keydown', handleKey, true);
    document.addEventListener('keydown', handleKey, true);

    // ====================
    // FOCUS LOCK (DIRTY TRICK)
    // ====================

    const focusTrap = document.createElement('input');

    focusTrap.style.position = 'fixed';
    focusTrap.style.opacity = '0';
    focusTrap.style.pointerEvents = 'none';
    focusTrap.style.height = '0';
    focusTrap.style.width = '0';

    document.addEventListener('DOMContentLoaded', () => {
        document.body.appendChild(focusTrap);

        function forceFocus() {
            focusTrap.focus();
        }

        // Constantly steal focus back from iframes
        setInterval(forceFocus, 50);

        // Reinforce on user interaction
        document.addEventListener('click', forceFocus, true);
        document.addEventListener('mousemove', forceFocus, true);
    });

})();
