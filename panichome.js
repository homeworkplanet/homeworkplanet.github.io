// =============================================
// PANIC.JS (HOMEPAGE VERSION - NO FOCUS LOCK)
// Shift + Tab toggles to docs.html
// Does NOT interfere with inputs/search bars
// =============================================

(function () {

    function goToDocs() {
        sessionStorage.setItem("lastPage", window.location.href);
        window.location.replace("/docs.html");
    }

    function handleKey(e) {
        const isShiftTab =
            e.shiftKey &&
            (e.key === 'Tab' || e.code === 'Tab' || e.keyCode === 9);

        if (!isShiftTab) return;

        // 🚫 Ignore if typing in inputs/search bars
        const tag = document.activeElement.tagName.toLowerCase();
        const isTyping =
            tag === 'input' ||
            tag === 'textarea' ||
            document.activeElement.isContentEditable;

        if (isTyping) return;

        e.preventDefault();
        e.stopImmediatePropagation();
        goToDocs();
    }

    // Capture phase (still strong, but safe)
    window.addEventListener('keydown', handleKey, true);
    document.addEventListener('keydown', handleKey, true);

})();
