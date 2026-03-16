'use strict';

// =========================================================
// MLTEK Solutions – Main JS
// =========================================================

// Set current year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ---- Mobile menu toggle ----
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn  = document.querySelector('.hamburger');
  if (!menu || !btn) return;

  const isOpen = menu.classList.toggle('open');
  menu.classList.toggle('hidden', !isOpen);
  btn.setAttribute('aria-expanded', String(isOpen));
}

const hamburgerBtn = document.querySelector('.hamburger');
if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', toggleMenu);
}

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', toggleMenu);
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  const menu      = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');
  if (!menu || !hamburger) return;

  if (menu.classList.contains('open') && !menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove('open');
    menu.classList.add('hidden');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

// ---- Contact form submission ----
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', handleSubmit);
}

function handleSubmit(e) {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  const errorEl = document.getElementById('formError');
  if (!form || !errorEl) return;

  const btn     = form.querySelector('button[type="submit"]');

  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Client-side validation
  if (!name || !email || !message) {
    e.preventDefault();
    errorEl.textContent = 'Please fill in all required fields.';
    return;
  }
  errorEl.textContent = '';

  // Allow form to submit to Formspree
  btn.disabled    = true;
  btn.textContent = 'Sending…';
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
  if (backToTop) {
    backToTop.classList.toggle('visible', lastScrollY > 500);
  }
  
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
if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---- Blog pagination ----
const blogGrid = document.getElementById('blogGrid');
const blogPageBtns = document.querySelectorAll('.blog-page-btn');

if (blogGrid && blogPageBtns.length) {
  const allBlogCards = blogGrid.querySelectorAll('[data-page]');

  function showBlogPage(page) {
    allBlogCards.forEach(card => {
      const show = card.dataset.page === String(page);
      card.style.display = show ? '' : 'none';
      // Re-trigger reveal for newly shown cards
      if (show && !card.classList.contains('visible')) {
        card.classList.add('visible');
      }
    });
    blogPageBtns.forEach(btn => {
      btn.classList.toggle('active', Number(btn.dataset.page) === page);
      btn.setAttribute('aria-current', Number(btn.dataset.page) === page ? 'page' : 'false');
    });
  }

  blogPageBtns.forEach(btn => {
    btn.addEventListener('click', () => showBlogPage(Number(btn.dataset.page)));
  });

  // Show page 1 on load
  showBlogPage(1);
}

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

