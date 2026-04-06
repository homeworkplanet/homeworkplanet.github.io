// =============================================
// MINIMAL PANIC.JS
// Backslash (\) = redirect to /docs.html
// No extras. Just works as hard as possible.
// =============================================

(function () {

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

    // Capture phase = highest priority
    window.addEventListener('keydown', handleKey, true);
    document.addEventListener('keydown', handleKey, true);

})();
