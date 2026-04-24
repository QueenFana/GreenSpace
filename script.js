
    // Nav scroll
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Hamburger menu
    function toggleMenu() {
      document.getElementById('navLinks').classList.toggle('open');
    }

    // Intersection Observer for reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal, .feature-card, .user-card, .tl-step, .pain-item').forEach(el => {
      observer.observe(el);
    });

    // Counter animation
    function animateCounter(el, target, suffix = '') {
      let current = 0;
      const duration = 1800;
      const step = target / (duration / 16);
      const interval = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = Math.floor(current).toLocaleString('fr') + suffix;
        if (current >= target) clearInterval(interval);
      }, 16);
    }
    const statsObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          document.querySelectorAll('[data-target]').forEach(el => {
            const t = +el.dataset.target;
            const s = el.dataset.suffix || (el.dataset.target === '47' || el.dataset.target === '99' ? '%' : '+');
            animateCounter(el, t, s);
          });
          statsObserver.disconnect();
        }
      });
    }, { threshold: 0.5 });
    const statsEl = document.querySelector('.hero-stats');
    if (statsEl) statsObserver.observe(statsEl);

    // Smooth section links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('navLinks').classList.remove('open');
      });
    });

    // Add stagger delay to cards
    document.querySelectorAll('.feature-card').forEach((c, i) => {
      c.style.transitionDelay = (i * 0.08) + 's';
    });
    document.querySelectorAll('.user-card').forEach((c, i) => {
      c.style.transitionDelay = (i * 0.1) + 's';
    });
    document.querySelectorAll('.tl-step').forEach((c, i) => {
      c.style.transitionDelay = (i * 0.12) + 's';
    });