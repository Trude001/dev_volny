document.addEventListener('DOMContentLoaded', () => {
    // 1. Menu Burger
    const burger = document.getElementById('burger-menu');
    const nav = document.getElementById('nav-links');

    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

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
        if (h1) h1.innerHTML = roles[role].h1;
    }
});