// ============================================
// PARTICLE NETWORK
// ============================================
(function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];

    function resize() {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() { this.reset(true); }

        reset(init) {
            this.x  = Math.random() * canvas.width;
            this.y  = init ? Math.random() * canvas.height : -10;
            this.vx = (Math.random() - 0.5) * 0.35;
            this.vy = (Math.random() - 0.5) * 0.35;
            this.r  = Math.random() * 1.6 + 0.6;
            this.a  = Math.random() * 0.45 + 0.08;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width)  this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height)  this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0,229,255,${this.a})`;
            ctx.fill();
        }
    }

    function init() {
        resize();
        const count = Math.min(Math.floor(canvas.width / 14), 110);
        particles   = Array.from({ length: count }, () => new Particle());
    }

    function drawLines() {
        const MAX_DIST = 140;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx   = particles[i].x - particles[j].x;
                const dy   = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < MAX_DIST) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(0,229,255,${(1 - dist / MAX_DIST) * 0.12})`;
                    ctx.lineWidth   = 0.6;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        drawLines();
        requestAnimationFrame(animate);
    }

    init();
    animate();
    window.addEventListener('resize', init);
})();

// ============================================
// SCROLL PROGRESS BAR
// ============================================
(function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    window.addEventListener('scroll', () => {
        const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
        bar.style.width = pct + '%';
    }, { passive: true });
})();

// ============================================
// NAVBAR SCROLL CLASS
// ============================================
(function initNavbar() {
    const nav = document.querySelector('.navbar');
    if (!nav) return;
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
})();

// ============================================
// MOBILE NAV TOGGLE
// ============================================
(function initMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const links  = document.querySelector('.nav-links');
    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        links.classList.toggle('open');
    });

    links.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            toggle.classList.remove('active');
            links.classList.remove('open');
        });
    });
})();

// ============================================
// ACTIVE NAV LINK
// ============================================
(function initActiveLink() {
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
        const href = a.getAttribute('href');
        if (href === page || (page === '' && href === 'index.html')) {
            a.classList.add('active');
        }
    });
})();

// ============================================
// TYPING ANIMATION
// ============================================
(function initTyping() {
    const el = document.querySelector('.typing-text');
    if (!el) return;

    const strings   = ['DevOps Engineer', 'Cloud Architect', 'CI/CD Specialist', 'Infrastructure Automation', 'Kubernetes Expert', 'Site Reliability Engineer'];
    let si = 0, ci = 0, deleting = false;

    function tick() {
        const cur = strings[si];
        el.textContent = cur.substring(0, ci);

        if (!deleting) {
            if (ci < cur.length) { ci++; setTimeout(tick, 90); }
            else { deleting = true; setTimeout(tick, 2000); }
        } else {
            if (ci > 0) { ci--; setTimeout(tick, 48); }
            else { deleting = false; si = (si + 1) % strings.length; setTimeout(tick, 300); }
        }
    }

    setTimeout(tick, 900);
})();

// ============================================
// SCROLL REVEAL
// ============================================
(function initReveal() {
    const obs = new IntersectionObserver(
        entries => entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }
        }),
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();

// ============================================
// SKILL BAR ANIMATION
// ============================================
(function initSkillBars() {
    const obs = new IntersectionObserver(
        entries => entries.forEach(e => {
            if (e.isIntersecting) {
                const fill = e.target.querySelector('.skill-bar-fill');
                const pct  = e.target.getAttribute('data-pct');
                if (fill && pct) setTimeout(() => { fill.style.width = pct; }, 120);
                obs.unobserve(e.target);
            }
        }),
        { threshold: 0.3 }
    );
    document.querySelectorAll('.skill-bar-item').forEach(b => obs.observe(b));
})();

// ============================================
// CARD 3-D TILT
// ============================================
(function initTilt() {
    document.querySelectorAll('.project-card, .skill-category-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const r = card.getBoundingClientRect();
            const x = ((e.clientX - r.left) / r.width  - 0.5) *  9;
            const y = ((e.clientY - r.top)  / r.height - 0.5) * -9;
            card.style.transition = 'transform 0.08s ease, border-color 0.3s, box-shadow 0.3s';
            card.style.transform  = `translateY(-8px) perspective(700px) rotateX(${y}deg) rotateY(${x}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1), border-color 0.3s, box-shadow 0.3s';
            card.style.transform  = '';
        });
    });
})();

// ============================================
// SMOOTH SCROLL (on-page anchors)
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    });
});

// ============================================
// SCHEDULE FORM FEEDBACK
// ============================================
(function initForm() {
    const form = document.getElementById('schedule-form');
    if (!form) return;
    form.addEventListener('submit', e => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const orig = btn.textContent;
        btn.textContent = 'Message Sent!';
        btn.style.background = 'linear-gradient(135deg,#00ff9d,#00e5ff)';
        setTimeout(() => { btn.textContent = orig; btn.style.background = ''; }, 3000);
    });
})();

console.log('%c⚡ Portfolio loaded', 'color:#00e5ff;font-family:monospace;font-size:13px');
