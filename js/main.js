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

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove('open');
  }
});

// Scroll reveal
const revealEls = document.querySelectorAll(
  '.product-feature-info, .product-feature-media, .card, .story-text, .story-visual, .section-title, .section-sub, .cta-title, .cta-sub'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => observer.observe(el));

// Thumbnail click — swap main image
document.querySelectorAll('.product-feature-media').forEach(media => {
  const mainImg = media.querySelector('.product-img');
  const thumbs = media.querySelectorAll('.thumb-wrap img');

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      if (mainImg && thumb.src) {
        const tmp = mainImg.src;
        mainImg.src = thumb.src;
        thumb.src = tmp;

        const tmpAlt = mainImg.alt;
        mainImg.alt = thumb.alt;
        thumb.alt = tmpAlt;
      }
    });
    thumb.style.cursor = 'pointer';
  });
});

// Smooth anchor links with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = parseInt(getComputedStyle(document.documentElement)
      .getPropertyValue('--nav-h') || '52', 10);
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - offset,
      behavior: 'smooth'
    });
  });
});
