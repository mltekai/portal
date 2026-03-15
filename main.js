// =========================================================
// MLTEK Solutions – Main JS
// =========================================================

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// ---- Mobile menu toggle ----
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');
  if (menu.classList.contains('open') && !menu.contains(e.target) && e.target !== hamburger) {
    menu.classList.remove('open');
  }
});

// ---- Contact form submission ----
function handleSubmit(e) {
  e.preventDefault();
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  const btn     = form.querySelector('button[type="submit"]');

  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all required fields.');
    return;
  }

  btn.disabled    = true;
  btn.textContent = 'Sending…';

  // TODO: Replace timeout with real email service (Formspree, EmailJS, etc.)
  setTimeout(() => {
    form.reset();
    btn.disabled    = false;
    btn.textContent = 'Send Message';
    success.classList.add('visible');
    setTimeout(() => success.classList.remove('visible'), 6000);
  }, 1200);
}

// ---- Active nav link on scroll (CSS class approach) ----
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 140) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

// ---- Back to top button ----
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 500);
}, { passive: true });

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ---- Scroll-reveal animation ----
const revealEls = document.querySelectorAll('.reveal');
revealEls.forEach((el, i) => {
  // Stagger sibling cards for a cascade effect
  const siblings = el.parentElement ? el.parentElement.querySelectorAll('.reveal') : [];
  if (siblings.length > 1) {
    el.style.transitionDelay = `${Array.from(siblings).indexOf(el) * 80}ms`;
  }
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

