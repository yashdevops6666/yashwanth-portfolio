// Smooth scroll offset for navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = 80; // navbar height
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll('.experience-card, .education-card, .contact-item').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s cubic-bezier(.4,2,.3,1), transform 0.6s cubic-bezier(.4,2,.3,1)';
    observer.observe(card);
});

// Animate skill bars on scroll into view
const skillBars = document.querySelectorAll('.bar-fill');
function animateSkillBars() {
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            bar.style.width = bar.parentElement.getAttribute('data-width');
        }
    });
}
window.addEventListener('scroll', animateSkillBars);

// Animate background circles
document.querySelectorAll('.animated-bg .circle').forEach((circle, i) => {
    circle.animate([
        { transform: 'scale(1) translateY(0)' },
        { transform: 'scale(1.07) translateY(-40px)' },
        { transform: 'scale(1) translateY(0)' }
    ], {
        duration: 18000 + i * 3000,
        iterations: Infinity
    });
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function toggleTheme() {
    body.classList.toggle('dark-theme');
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
}

themeToggle.addEventListener('click', toggleTheme);

console.log('Portfolio loaded successfully');
