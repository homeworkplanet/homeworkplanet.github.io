// =============================================
// PANIC.JS (SHIFT + TAB ONLY)
// Shift + Tab = redirect to /docs.html
// Includes focus-lock to beat iframes
// =============================================

(function () {

    // ====================
    // PANIC TRIGGER
    // ====================

    function triggerPanic() {
        window.location.replace("/docs.html");
    }

    function handleKey(e) {
        const isShiftTab =
            e.shiftKey &&
            (e.key === 'Tab' || e.code === 'Tab' || e.keyCode === 9);

        if (isShiftTab) {
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

        // Constantly reclaim focus
        setInterval(forceFocus, 50);

        document.addEventListener('click', forceFocus, true);
        document.addEventListener('mousemove', forceFocus, true);
    });

})();
