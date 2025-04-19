document.addEventListener('DOMContentLoaded', () => {
    try {
        const translations = {
            es: {
                'nav-home': 'Inicio',
                'nav-projects': 'Proyectos',
                'nav-experience': 'Experiencia',
                'nav-contact': 'Contacto',
                'hero-title': 'Hola, soy Jesús Carrilero',
                'hero-subtitle': 'Desarrollador Full-Stack | Apasionado por la Tecnología',
                'hero-cta': 'Ver Proyectos',
                'projects-title': 'Mis Proyectos',
                'project-1-title': 'Proyecto 1',
                'project-1-desc': 'Una aplicación web moderna construida con React y Node.js.',
                'project-2-title': 'Proyecto 2',
                'project-2-desc': 'Una plataforma de comercio electrónico con Vue.js y Firebase.',
                'project-3-title': 'Proyecto 3',
                'project-3-desc': 'Un sistema de gestión de tareas con Angular y MongoDB.',
                'project-details': 'Ver Detalles',
                'experience-title': 'Experiencia',
                'experience-1-title': 'Desarrollador Full-Stack',
                'experience-1-company': 'Tech Solutions',
                'experience-1-date': '2022 - Presente',
                'experience-1-desc': 'Desarrollo de aplicaciones web escalables con React, Node.js y MongoDB.',
                'experience-2-title': 'Desarrollador Frontend',
                'experience-2-company': 'Web Innovate',
                'experience-2-date': '2020 - 2022',
                'experience-2-desc': 'Creación de interfaces de usuario interactivas con Vue.js y Tailwind CSS.',
                'contact-title': 'Contacto',
                'contact-name': 'Nombre',
                'contact-email': 'Correo Electrónico',
                'contact-message': 'Mensaje',
                'contact-submit': 'Enviar Mensaje'
            },
            en: {
                'nav-home': 'Home',
                'nav-projects': 'Projects',
                'nav-experience': 'Experience',
                'nav-contact': 'Contact',
                'hero-title': 'Hello, I am Jesús Carrilero',
                'hero-subtitle': 'Full-Stack Developer | Passionate about Technology',
                'hero-cta': 'View Projects',
                'projects-title': 'My Projects',
                'project-1-title': 'Project 1',
                'project-1-desc': 'A modern web application built with React and Node.js.',
                'project-2-title': 'Project 2',
                'project-2-desc': 'An e-commerce platform using Vue.js and Firebase.',
                'project-3-title': 'Project 3',
                'project-3-desc': 'A task management system with Angular and MongoDB.',
                'project-details': 'View Details',
                'experience-title': 'Experience',
                'experience-1-title': 'Full-Stack Developer',
                'experience-1-company': 'Tech Solutions',
                'experience-1-date': '2022 - Present',
                'experience-1-desc': 'Developed scalable web applications using React, Node.js, and MongoDB.',
                'experience-2-title': 'Frontend Developer',
                'experience-2-company': 'Web Innovate',
                'experience-2-date': '2020 - 2022',
                'experience-2-desc': 'Built interactive user interfaces with Vue.js and Tailwind CSS.',
                'contact-title': 'Contact',
                'contact-name': 'Name',
                'contact-email': 'Email',
                'contact-message': 'Message',
                'contact-submit': 'Send Message'
            }
        };

        const langButtons = document.querySelectorAll('.lang-btn');
        const langElements = document.querySelectorAll('[data-lang]');

        if (langButtons && langElements) {
            function setLanguage(lang) {
                langElements.forEach(element => {
                    const key = element.getAttribute('data-lang');
                    element.textContent = translations[lang][key] || element.textContent;
                });
                localStorage.setItem('language', lang);
            }

            langButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const lang = button.getAttribute('data-lang');
                    setLanguage(lang);
                });
            });

            const savedLang = localStorage.getItem('language') || 'es';
            setLanguage(savedLang);
        }
    } catch (error) {
        console.error('Error en language.js:', error);
    }
});