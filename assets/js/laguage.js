document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-btn');
    const langElements = document.querySelectorAll('[data-lang-es]');

    // Load language preference from localStorage
    const savedLang = localStorage.getItem('language') || 'es';
    setLanguage(savedLang);

    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
            localStorage.setItem('language', lang);
        });
    });

    function setLanguage(lang) {
        langElements.forEach(element => {
            const text = element.getAttribute(`data-lang-${lang}`);
            if (text) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = text;
                } else {
                    element.textContent = text;
                }
            }
        });

        // Update active language button
        langButtons.forEach(btn => {
            btn.style.opacity = btn.getAttribute('data-lang') === lang ? '1' : '0.5';
        });
    }
});