const translations = {
    es: {
        'nav-home': 'Inicio',
        'nav-projects': 'Proyectos',
        'nav-experience': 'Experiencia',
        'nav-contact': 'Contacto',
        'hero-greeting': 'Hola, soy',
        'hero-title-1': 'Desarrollador Full-Stack',
        'hero-title-2': 'Experto en React',
        'hero-title-3': 'Especialista en TypeScript',
        'hero-description': 'Desarrollador Full-Stack con experiencia en React, Vue, Angular y TypeScript. Especializado en crear aplicaciones escalables y optimizadas, aplicando mejores prácticas (SOLID, TDD, DDD) en entornos ágiles.',
        'hero-cta-projects': 'Ver Proyectos',
        'hero-cta-contact': 'Contactar',
        'scroll-down': 'Desplázate para ver más',
        'skills-title': 'Habilidades Técnicas',
        'skills-frontend': 'Frontend',
        'skills-backend': 'Backend',
        'skills-database': 'Bases de Datos',
        'skills-devops': 'DevOps & Cloud',
        'experience-title': 'Experiencia Profesional',
        'job-title-walkiria': 'Desarrollador Full-Stack',
        'walkiria-resp-1': 'Desarrollé interfaces dinámicas con React, Vue y Angular, garantizando un diseño responsivo y una experiencia de usuario excepcional.',
        'walkiria-resp-2': 'Implementé soluciones backend con Node.js y .NET (C#), integrando APIs RESTful y microservicios.',
        'walkiria-resp-3': 'Gestioné y optimicé bases de datos SQL/NoSQL (PostgreSQL, MongoDB, Redis).',
        'walkiria-resp-4': 'Automatizé despliegues con herramientas CI/CD (GitHub Actions, Azure DevOps) y pruebas automatizadas (Jest, Cypress).',
        'walkiria-resp-5': 'Colaboré en equipos ágiles (Scrum, Kanban) usando Jira para planificación y seguimiento.',
        'job-title-air-force': 'Desarrollador Web',
        'air-resp-1': 'Coordiné y optimicé procesos tecnológicos y logísticos internos.',
        'air-resp-2': 'Desarrollé y mantuve software de gestión operativa, mejorando eficiencia y seguridad.',
        'projects-title': 'Proyectos Destacados',
        'project1-title': 'Aplicación E-Commerce',
        'project1-desc': 'Desarrollé una plataforma de comercio electrónico con React y Node.js, integrando pasarelas de pago y un diseño responsivo.',
        'project2-title': 'Sistema de Gestión',
        'project2-desc': 'Implementé un sistema de gestión interna con Angular y .NET, optimizando procesos logísticos.',
        'project3-title': 'Aplicación Móvil Híbrida',
        'project3-desc': 'Creé una app móvil con Ionic y Vue, integrando APIs RESTful y notificaciones push.',
        'project-details': 'Ver Detalles',
        'contact-title': 'Contáctame',
        'contact-info-title': 'Información de Contacto',
        'contact-form-title': 'Envíame un Mensaje',
        'contact-name-placeholder': 'Nombre',
        'contact-email-placeholder': 'Correo Electrónico',
        'contact-message-placeholder': 'Mensaje',
        'contact-submit': 'Enviar Mensaje',
        'footer-description': 'Desarrollador Full-Stack apasionado por crear soluciones innovadoras.',
        'footer-nav-title': 'Navegación',
        'footer-contact-title': 'Contacto',
        'footer-social-title': 'Redes Sociales',
        'footer-rights': 'Todos los derechos reservados.'
    },
    en: {
        'nav-home': 'Home',
        'nav-projects': 'Projects',
        'nav-experience': 'Experience',
        'nav-contact': 'Contact',
        'hero-greeting': 'Hello, I am',
        'hero-title-1': 'Full-Stack Developer',
        'hero-title-2': 'React Expert',
        'hero-title-3': 'TypeScript Specialist',
        'hero-description': 'Full-Stack Developer with expertise in React, Vue, Angular, and TypeScript. Specialized in building scalable and optimized applications, applying best practices (SOLID, TDD, DDD) in agile environments.',
        'hero-cta-projects': 'View Projects',
        'hero-cta-contact': 'Contact Me',
        'scroll-down': 'Scroll down to see more',
        'skills-title': 'Technical Skills',
        'skills-frontend': 'Frontend',
        'skills-backend': 'Backend',
        'skills-database': 'Databases',
        'skills-devops': 'DevOps & Cloud',
        'experience-title': 'Professional Experience',
        'job-title-walkiria': 'Full-Stack Developer',
        'walkiria-resp-1': 'Developed dynamic interfaces with React, Vue, and Angular, ensuring responsive design and excellent user experience.',
        'walkiria-resp-2': 'Implemented backend solutions with Node.js and .NET (C#), integrating RESTful APIs and microservices.',
        'walkiria-resp-3': 'Managed and optimized SQL/NoSQL databases (PostgreSQL, MongoDB, Redis).',
        'walkiria-resp-4': 'Automated deployments with CI/CD tools (GitHub Actions, Azure DevOps) and implemented automated tests (Jest, Cypress).',
        'walkiria-resp-5': 'Collaborated in agile teams (Scrum, Kanban) using Jira for planning and tracking.',
        'job-title-air-force': 'Web Developer',
        'air-resp-1': 'Coordinated and optimized internal technological and logistical processes.',
        'air-resp-2': 'Developed and maintained operational management software, improving efficiency and security.',
        'projects-title': 'Featured Projects',
        'project1-title': 'E-Commerce Application',
        'project1-desc': 'Built an e-commerce platform with React and Node.js, integrating payment gateways and responsive design.',
        'project2-title': 'Management System',
        'project2-desc': 'Implemented an internal management system with Angular and .NET, optimizing logistical processes.',
        'project3-title': 'Hybrid Mobile App',
        'project3-desc': 'Created a mobile app with Ionic and Vue, integrating RESTful APIs and push notifications.',
        'project-details': 'View Details',
        'contact-title': 'Contact Me',
        'contact-info-title': 'Contact Information',
        'contact-form-title': 'Send Me a Message',
        'contact-name-placeholder': 'Name',
        'contact-email-placeholder': 'Email',
        'contact-message-placeholder': 'Message',
        'contact-submit': 'Send Message',
        'footer-description': 'Full-Stack Developer passionate about creating innovative solutions.',
        'footer-nav-title': 'Navigation',
        'footer-contact-title': 'Contact',
        'footer-social-title': 'Social Media',
        'footer-rights': 'All rights reserved.'
    }
};

let currentLang = 'es';

function updateLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('bg-gray-300', btn.getAttribute('data-lang') === lang);
    });
}

document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        updateLanguage(lang);
    });
});

// Initialize with Spanish
updateLanguage('es');