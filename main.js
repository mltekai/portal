// =========================================================
// MLTEK Solutions – Main JS
// =========================================================

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// Contact form – client-side only (shows success message)
// Connect to a back-end / Formspree / EmailJS for real email delivery
function handleSubmit(e) {
  e.preventDefault();
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  const btn     = form.querySelector('button[type="submit"]');

  btn.disabled    = true;
  btn.textContent = 'Sending…';

  // Simulate async submit – replace with real fetch() call when ready
  setTimeout(() => {
    form.reset();
    btn.disabled    = false;
    btn.textContent = 'Send Message';
    success.classList.add('visible');
    setTimeout(() => success.classList.remove('visible'), 5000);
  }, 1000);
}

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}`
      ? 'var(--clr-text)'
      : '';
  });
}, { passive: true });
