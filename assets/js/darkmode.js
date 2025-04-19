document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const html = document.documentElement;

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        html.classList.add('dark');
        darkModeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }

    darkModeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        if (html.classList.contains('dark')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
        } else {
            localStorage.setItem('darkMode', 'disabled');
            darkModeToggle.querySelector('i').classList.replace('fa-sun', 'fa-moon');
        }
    });
});