/* AD Collection — main.js */

// Navbar scroll state
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// Mobile menu
const burger = document.getElementById('navBurger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove('open');
  }
});

// Scroll reveal — couvre toutes les classes reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

// Smooth anchor links avec offset navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const id = anchor.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const offset = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-h') || '52',
      10
    );
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - offset,
      behavior: 'smooth'
    });
  });
});

// Transition entrée de page (fade-in)
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.35s ease';
window.addEventListener('DOMContentLoaded', () => {
  requestAnimationFrame(() => { document.body.style.opacity = '1'; });
});

// Transition sortie de page sur les liens internes
document.querySelectorAll('a[href]').forEach(link => {
  const href = link.getAttribute('href');
  if (
    !href ||
    href.startsWith('#') ||
    href.startsWith('mailto') ||
    href.startsWith('http') ||
    link.target === '_blank'
  ) return;

  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.style.opacity = '0';
    setTimeout(() => { window.location.href = href; }, 320);
  });
});
