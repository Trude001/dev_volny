document.addEventListener('DOMContentLoaded', () => {
    // 1. Menu Burger
    const burger = document.getElementById('burger-menu');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-links a');

   burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active'); });

    links.forEach(link => {
        link.addEventListener('click', () => {
            // On retire la classe active pour cacher le menu
            navLinks.classList.remove('active');
            // On remet le bouton burger dans son état initial
            burger.classList.remove('active'); 
        }); 
    });

    // 2. Animation des Skills
    const skillBars = document.querySelectorAll('.progress-line span');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.parentElement.getAttribute('data-width');
                bar.style.width = width;
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.1 });

    skillBars.forEach(span => observer.observe(span));

    // 3. Personnalisation par rôle (Exemple simplifié)
    const roles = {
        'data': { title: "Volny Moget | Data Scientist", h1: "Data <span>Scientist</span>" },
        'chef-projet': { title: "Volny Moget | Chef de Projet", h1: "Chef de <span>Projet</span>" }
    };

    const role = new URLSearchParams(window.location.search).get('role');
    if (role && roles[role]) {
        document.title = roles[role].title;
        const h1 = document.querySelector('.hero-text h1');
        if (h1) h1.innerContent = roles[role].h1;
    }
});