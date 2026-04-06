// =============================================
// PANIC.JS (SHIFT+TAB TOGGLE)
// Shift + Tab toggles between site and docs.html
// =============================================

(function () {

    function goToDocs() {
        // Save current page
        sessionStorage.setItem("lastPage", window.location.href);

        // Go to docs
        window.location.replace("/docs.html");
    }

    function handleKey(e) {
        const isShiftTab =
            e.shiftKey &&
            (e.key === 'Tab' || e.code === 'Tab' || e.keyCode === 9);

        if (isShiftTab) {
            e.preventDefault();
            e.stopImmediatePropagation();
            goToDocs();
        }
    }

    // Key listeners (strong)
    window.addEventListener('keydown', handleKey, true);
    document.addEventListener('keydown', handleKey, true);

    // ====================
    // FOCUS LOCK (IMPORTANT)
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

        setInterval(forceFocus, 40);

        document.addEventListener('click', forceFocus, true);
        document.addEventListener('mousemove', forceFocus, true);
    });

})();
