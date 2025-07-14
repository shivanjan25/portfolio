const faders = document.querySelectorAll('.fade-in-section');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);  // Animate once
    }
  });
}, { threshold: 0.1 });

faders.forEach(fader => {
  observer.observe(fader);
});
