// Menú hamburguesa responsive
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !expanded);
        this.classList.toggle('open');
        navLinks.classList.toggle('open');
    });
    // Cierra el menú al hacer click fuera
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 900 && !hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
            navLinks.classList.remove('open');
        }
    });
    // Cierra el menú al hacer click en un enlace
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 900) {
                hamburger.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
                navLinks.classList.remove('open');
            }
        });
    });
}

// Siempre hacer scroll al tope al recargar la página
window.addEventListener('DOMContentLoaded', () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
});

// Animación de scroll para navbar activo
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});




// Submenú responsive: abre/cierra con tap o teclado en móvil/tablet, hover/focus en PC
const dropdown = document.querySelector('.dropdown');
if (dropdown) {
    // Click/tap en móvil/tablet
    dropdown.addEventListener('click', function(e) {
        if (window.innerWidth <= 900) {
            e.stopPropagation();
            const submenu = this.querySelector('.dropdown-content');
            submenu.classList.toggle('open');
            submenu.setAttribute('aria-expanded', submenu.classList.contains('open'));
        }
    });
    // Teclado accesible en móvil/tablet
    dropdown.querySelector('a').addEventListener('keydown', function(e) {
        if (window.innerWidth <= 900 && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            const submenu = dropdown.querySelector('.dropdown-content');
            submenu.classList.toggle('open');
            submenu.setAttribute('aria-expanded', submenu.classList.contains('open'));
        }
    });
    // Cierra el submenú si se hace clic fuera en móvil/tablet
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 900) {
            const dd = document.querySelector('.dropdown-content');
            if (dd && !dropdown.contains(e.target)) {
                dd.classList.remove('open');
                dd.setAttribute('aria-expanded', 'false');
            }
        }
    });
}


// Animación de scroll suave mejorada
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        if(target) {
            e.preventDefault();
            // Si es el inicio, sube al top real
            if(href === "#inicio") {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Animación de aparición por scroll
const sections = document.querySelectorAll('.section, .gallery img, .contact-form');
const showOnScroll = () => {
    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if(rect.top < window.innerHeight - 80) {
            sec.style.opacity = 1;
            sec.style.transform = 'none';
        } else {
            sec.style.opacity = 0;
            sec.style.transform = 'translateY(40px)';
        }
    });
};
window.addEventListener('scroll', showOnScroll);
window.addEventListener('DOMContentLoaded', showOnScroll);

// Validación simple de formulario de contacto
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
    this.reset();
});
