document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-btn');
    const langElements = document.querySelectorAll('[data-lang-es]');
    let currentLang = localStorage.getItem('language') || 'es';

    // Initial language setup
    setLanguage(currentLang);

    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang !== currentLang) {
                currentLang = lang;
                setLanguage(lang);
                localStorage.setItem('language', lang);

                // Dispatch language change event for CV link update
                const event = new CustomEvent('languageChange', { detail: lang });
                document.dispatchEvent(event);
            }
        });
    });

    function setLanguage(lang) {
        langElements.forEach(element => {
            const text = element.getAttribute(`data-lang-${lang}`);
            if (text) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = text;
                } else if (element.tagName === 'H3' && element.closest('.skill-card')) {
                    // Skip skill-card h3 elements with icons
                    const skillText = element.getAttribute(`data-lang-${lang}`);
                    if (skillText) {
                        element.textContent = skillText;
                    }
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