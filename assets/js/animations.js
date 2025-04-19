gsap.registerPlugin(ScrollTrigger);

// Loader Animation
window.addEventListener('load', () => {
    gsap.to('#loader', {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            document.querySelector('#loader').classList.add('hidden');
        }
    });
});

// Hero Section Animations
gsap.from('.hero-content', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.profile-img', {
    scale: 0,
    duration: 1,
    ease: 'elastic.out(1, 0.3)',
    delay: 0.5
});

// Typing Animation for Hero Titles
const titleItems = document.querySelectorAll('.title-item');
let currentTitle = 0;

function cycleTitles() {
    gsap.to(titleItems[currentTitle], {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            titleItems[currentTitle].classList.add('hidden');
            currentTitle = (currentTitle + 1) % titleItems.length;
            titleItems[currentTitle].classList.remove('hidden');
            gsap.to(titleItems[currentTitle], {
                opacity: 1,
                duration: 0.5
            });
        }
    });
}

setInterval(cycleTitles, 3000);

// Scroll-Triggered Animations
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out'
    });
});

gsap.utils.toArray('.skill-category').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: 'power2.out'
    });
});

gsap.utils.toArray('.timeline-item').forEach(item => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power2.out'
    });
});

gsap.utils.toArray('.project-card').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out'
    });
});

gsap.from('.contact-content', {
    scrollTrigger: {
        trigger: '.contact-content',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power2.out'
});