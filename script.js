// Smoothly reveal sections as you scroll.
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, {threshold: 0.08});

document.querySelectorAll('section').forEach(section => {
  section.style.transition = 'opacity .7s ease, transform .7s ease';
  section.style.opacity = '0';
  section.style.transform = 'translateY(18px)';
  observer.observe(section);
});

document.addEventListener('scroll', () => {
  document.querySelectorAll('section.visible').forEach(section => {
    section.style.opacity = '1';
    section.style.transform = 'translateY(0)';
  });
}, {passive:true});
