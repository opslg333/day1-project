const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up:not(.hero-fade)').forEach((el, index) => {
  el.style.transitionDelay = `${index * 150}ms`;
  observer.observe(el);
});
window.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero-fade');
  setTimeout(() => {
    hero.classList.add('visible');
  }, 400);
});