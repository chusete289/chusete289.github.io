document.addEventListener('DOMContentLoaded', () => {
    try {
        // Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mainNav = document.querySelector('.main-nav');

        if (mobileMenuBtn && mainNav) {
            mobileMenuBtn.addEventListener('click', () => {
                mainNav.classList.toggle('active');
            });
        }

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href').substring(1);
                const target = document.getElementById(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                }
            });
        });

        // Back to Top Button
        const backToTop = document.querySelector('.back-to-top');
        if (backToTop) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    backToTop.style.display = 'block';
                } else {
                    backToTop.style.display = 'none';
                }
            });

            backToTop.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // Contact Form Submission (Placeholder)
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Mensaje enviado! (Esta es una demo, la funcionalidad real requiere backend)');
                contactForm.reset();
            });
        }

        // Project Details Buttons (Temporary Alert)
        document.querySelectorAll('.project-btn').forEach(button => {
            button.addEventListener('click', () => {
                alert('Funcionalidad de "Ver Detalles" en desarrollo. Pronto se abrirá un modal con más información.');
            });
        });
    } catch (error) {
        console.error('Error en main.js:', error);
    }
});