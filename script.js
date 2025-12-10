// const elements = document.querySelectorAll('img, h1, h2, h3, p, section, article');
const elements = document.querySelectorAll('img, h1, h3, p, ul, li');


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.5 });

elements.forEach(el => {
  el.classList.add('hidden'); // start hidden
  observer.observe(el);
});