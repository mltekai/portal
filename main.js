'use strict';

// =========================================================
// MLTEK Solutions – Main JS
// =========================================================

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// ---- Mobile menu toggle ----
function toggleMenu() {
  const menu   = document.getElementById('mobileMenu');
  const btn    = document.querySelector('.hamburger');
  const isOpen = menu.classList.toggle('open');
  btn.setAttribute('aria-expanded', String(isOpen));
}

document.querySelector('.hamburger').addEventListener('click', toggleMenu);

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', toggleMenu);
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  const menu      = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');
  if (menu.classList.contains('open') && !menu.contains(e.target) && e.target !== hamburger) {
    menu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

// ---- Contact form submission ----
document.getElementById('contactForm').addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  const errorEl = document.getElementById('formError');
  const btn     = form.querySelector('button[type="submit"]');

  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    errorEl.textContent = 'Please fill in all required fields.';
    return;
  }
  errorEl.textContent = '';

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

// ---- Consolidated & Throttled Scroll Handler ----
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');
const backToTop = document.getElementById('backToTop');

let ticking = false;
let lastScrollY = 0;

function updateScrollState() {
  lastScrollY = window.scrollY;
  
  // Update active nav link
  let current = '';
  sections.forEach(sec => {
    if (lastScrollY >= sec.offsetTop - 140) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
  
  // Update back-to-top button
  backToTop.classList.toggle('visible', lastScrollY > 500);
  
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(updateScrollState);
    ticking = true;
  }
}, { passive: true });

// Initial call
updateScrollState();

// ---- Back to top smooth scroll ----
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ---- Scroll-reveal animation with optimized staggering ----
const revealEls = document.querySelectorAll('.reveal');

// Pre-calculate cumulative delays for siblings
revealEls.forEach((el) => {
  const parent = el.parentElement;
  if (parent) {
    const siblings = Array.from(parent.querySelectorAll('.reveal'));
    const index = siblings.indexOf(el);
    if (siblings.length > 1 && index > 0) {
      el.style.transitionDelay = `${index * 80}ms`;
    }
  }
});

// Use Intersection Observer for efficient reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

