document.addEventListener('DOMContentLoaded', () => {
    try {
        // Check if GSAP and ScrollTrigger are available
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
            console.error('GSAP o ScrollTrigger no están disponibles');
            return;
        }

        // Register GSAP ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Fade-in animation for hero section
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            gsap.from(heroSection, {
                opacity: 0,
                y: 50,
                duration: 1.5,
                ease: 'power3.out'
            });
        }

        // Animate profile picture and orbiting icons
        const profileImg = document.querySelector('.profile-img');
        if (profileImg) {
            gsap.from(profileImg, {
                scale: 0,
                duration: 1,
                ease: 'elastic.out(1, 0.5)',
                delay: 0.5
            });
        }

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
        const projectsSection = document.querySelector('#projects');
        if (projectsSection) {
            gsap.from('.project-card', {
                opacity: 0,
                y: 20,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: projectsSection,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            });
        }
    } catch (error) {
        console.error('Error en animations.js:', error);
    }
});