function switchLanguage(lang) {
    if (lang === 'es') {
        document.documentElement.lang = "es";
        document.querySelector("#hero-description").innerText = "Desarrollador Web | Freelancer";
        document.querySelector("#about h2").innerText = "Sobre mí";
        document.querySelector("#about-text").innerText = "Soy un apasionado desarrollador web con experiencia en crear, mantener y diseñar sitios web dinámicos y responsivos. Mi objetivo es transformar ideas en proyectos digitales atractivos, ayudando a las empresas a alcanzar sus metas con soluciones tecnológicas innovadoras.";
        document.querySelector("#skills h2").innerText = "Habilidades";
        document.querySelector("#skills ul").innerHTML = `
            <li>Desarrollo Frontend: HTML, CSS, JavaScript, React</li>
            <li>Desarrollo Backend: Node.js, Express, Python, Django</li>
            <li>Base de Datos: MongoDB, MySQL</li>
            <li>Control de Versiones: Git, GitHub</li>`;
        document.querySelector("#projects h2").innerText = "Proyectos";
        document.querySelector("#projects .project:nth-child(1) h3").innerText = "E-commerce Platform: Culinary King";
        document.querySelector("#projects .project:nth-child(1) p").innerText = "Desarrollé una plataforma de comercio electrónico con una colección de productos alimenticios, presentada con características de diseño modernas y CSS avanzado.";
        document.querySelector("#projects .project:nth-child(1) a").innerText = "Ver proyecto";
        document.querySelector("#projects .project:nth-child(2) h3").innerText = "Project Management Application: TravelLite";
        document.querySelector("#projects .project:nth-child(2) p").innerText = "Creé una aplicación web para una agencia de viajes, utilizando Django y MySQL, con un diseño de Materialize CSS.";
        document.querySelector("#projects .project:nth-child(2) a").innerText = "Ver proyecto";
        document.querySelector("#projects .project:nth-child(3) h3").innerText = "Data Analysis Tool: Adventour";
        document.querySelector("#projects .project:nth-child(3) p").innerText = "Desarrollé una herramienta de análisis de datos utilizando HTML, CSS y JavaScript, facilitando la visualización y el análisis de datos para la toma de decisiones estratégicas.";
        document.querySelector("#projects .project:nth-child(3) a").innerText = "Ver proyecto";
        document.querySelector("#testimonials h2").innerText = "Testimonios";
        document.querySelector("#testimonials .testimonial:nth-child(1) p:nth-child(2)").innerText = "Jesús es un desarrollador increíble. Su trabajo ha sido esencial para el éxito de nuestro proyecto.";
        document.querySelector("#testimonials .testimonial:nth-child(1) p:nth-child(3)").innerText = "- María González, CEO de TechCorp";
        document.querySelector("#testimonials .testimonial:nth-child(2) p:nth-child(2)").innerText = "La calidad y atención al detalle que Jesús ofrece es excepcional. Lo recomendaría sin dudar.";
        document.querySelector("#testimonials .testimonial:nth-child(2) p:nth-child(3)").innerText = "- Juan Pérez, Gerente de Proyecto en Innovate Ltd.";
        document.querySelector("#contact h2").innerText = "Contacto";
        document.querySelector("#contact form label[for='name']").innerText = "Nombre:";
        document.querySelector("#contact form label[for='email']").innerText = "Email:";
        document.querySelector("#contact form label[for='message']").innerText = "Mensaje:";
        document.querySelector("#contact form button").innerText = "Enviar";
    } else if (lang === 'en') {
        document.documentElement.lang = "en";
        document.querySelector("#hero-description").innerText = "Web Developer | Freelancer";
        document.querySelector("#about h2").innerText = "About Me";
        document.querySelector("#about-text").innerText = "I am a passionate web developer with extensive experience in creating, maintaining, and designing dynamic and responsive websites. My goal is to transform ideas into attractive digital projects, helping companies achieve their goals with innovative technological solutions.";
        document.querySelector("#skills h2").innerText = "Skills";
        document.querySelector("#skills ul").innerHTML = `
            <li>Frontend Development: HTML, CSS, JavaScript, React</li>
            <li>Backend Development: Node.js, Express, Python, Django</li>
            <li>Database: MongoDB, MySQL</li>
            <li>Version Control: Git, GitHub</li>`;
        document.querySelector("#projects h2").innerText = "Projects";
        document.querySelector("#projects .project:nth-child(1) h3").innerText = "E-commerce Platform: Culinary King";
        document.querySelector("#projects .project:nth-child(1) p").innerText = "Developed an e-commerce platform with a collection of food products, featuring modern design characteristics and advanced CSS.";
        document.querySelector("#projects .project:nth-child(1) a").innerText = "View Project";
        document.querySelector("#projects .project:nth-child(2) h3").innerText = "Project Management Application: TravelLite";
        document.querySelector("#projects .project:nth-child(2) p").innerText = "Created a web application for a travel agency, using Django and MySQL, with a Materialize CSS design.";
        document.querySelector("#projects .project:nth-child(2) a").innerText = "View Project";
        document.querySelector("#projects .project:nth-child(3) h3").innerText = "Data Analysis Tool: Adventour";
        document.querySelector("#projects .project:nth-child(3) p").innerText = "Developed a data analysis tool using HTML, CSS, and JavaScript, facilitating the visualization and analysis of data for strategic decision-making.";
        document.querySelector("#projects .project:nth-child(3) a").innerText = "View Project";
        document.querySelector("#testimonials h2").innerText = "Testimonials";
        document.querySelector("#testimonials .testimonial:nth-child(1) p:nth-child(2)").innerText = "Jesus is an amazing developer. His work has been essential to the success of our project.";
        document.querySelector("#testimonials .testimonial:nth-child(1) p:nth-child(3)").innerText = "- Maria Gonzalez, CEO of TechCorp";
        document.querySelector("#testimonials .testimonial:nth-child(2) p:nth-child(2)").innerText = "The quality and attention to detail that Jesus offers is exceptional. I would recommend him without hesitation.";
        document.querySelector("#testimonials .testimonial:nth-child(2) p:nth-child(3)").innerText = "- Juan Perez, Project Manager at Innovate Ltd.";
        document.querySelector("#contact h2").innerText = "Contact";
        document.querySelector("#contact form label[for='name']").innerText = "Name:";
        document.querySelector("#contact form label[for='email']").innerText = "Email:";
        document.querySelector("#contact form label[for='message']").innerText = "Message:";
        document.querySelector("#contact form button").innerText = "Send";
    }
}

const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 0;
const size = images[0].clientWidth;

function updateCarousel() {
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

document.querySelector('.next').addEventListener('click', () => {
    if (counter >= images.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    if (counter <= 0) {
        counter = images.length - 1;
    } else {
        counter--;
    }
    updateCarousel();
});

setInterval(() => {
    if (counter >= images.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    updateCarousel();
}, 3000); // Cambia la imagen cada 3 segundos
