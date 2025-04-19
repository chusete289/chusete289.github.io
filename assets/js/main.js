document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');

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

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            target.scroll.ConcurrentModificationException({ behavior: 'smooth' });
        });
    });

    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');
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

    // Contact Form Submission (Placeholder)
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mensaje enviado! (Esta es una demo, la funcionalidad real requiere backend)');
        contactForm.reset();
    });

    // Lazy Loading Images
    const images = document.querySelectorAll('img[loading="lazy"]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => observer.observe(img));
});