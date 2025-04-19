document.addEventListener('DOMContentLoaded', () => {
    try {
        // Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mainNav = document.querySelector('.main-nav');

        if (mobileMenuBtn && mainNav) {
            mobileMenuBtn.addEventListener('click', () => {
                mainNav.classList.toggle('hidden');
                mainNav.classList.toggle('flex');
                mainNav.classList.toggle('flex-col');
                mainNav.classList.toggle('absolute');
                mainNav.classList.toggle('top-16');
                mainNav.classList.toggle('left-0');
                mainNav.classList.toggle('w-full');
                mainNav.classList.toggle('bg-white');
                mainNav.classList.toggle('dark:bg-gray-800');
                mainNav.classList.toggle('p-4');
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
            });
        });

        // Back to Top Button
        const backToTop = document.querySelector('.back-to-top');
        if (backToTop) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    backToTop.classList.remove('hidden');
                    backToTop.classList.add('show');
                } else {
                    backToTop.classList.add('hidden');
                    backToTop.classList.remove('show');
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
        document.querySelectorAll('.project-card .btn-primary').forEach(button => {
            button.addEventListener('click', () => {
                alert('Funcionalidad de "Ver Detalles" en desarrollo. Pronto se abrirá un modal con más información.');
            });
        });
    } catch (error) {
        console.error('Error en main.js:', error);
    }
});