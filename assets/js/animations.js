document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in animation for hero section
    gsap.from('.hero-section', {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: 'power3.out'
    });

    // Animate profile picture and orbiting icons
    gsap.from('.profile-img', {
        scale: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.5)',
        delay: 0.5
    });

    gsap.from('.tech-icon', {
        opacity: 0,
        scale: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        delay: 1
    });

    // Animate sections on scroll
    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Animate project cards
    gsap.from('.project-card', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '#projects',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
});