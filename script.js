// Initialisation de ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: false // L'animation ne se joue qu'une fois
});

// Appliquer les animations
sr.reveal('.reveal', { interval: 200 });
sr.reveal('.tag', { origin: 'left', distance: '30px' });
sr.reveal('.solution-visual', { delay: 400, scale: 0.9 });

// Smooth Scroll pour la navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Effet Glassmorphism au scroll sur la navbar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.padding = '1rem 10%';
        nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        nav.style.padding = '2rem 10%';
        nav.style.boxShadow = 'none';
    }
});