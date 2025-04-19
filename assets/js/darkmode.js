const themeToggle = document.querySelector('.theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark');
}

themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});