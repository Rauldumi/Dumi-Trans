document.addEventListener('DOMContentLoaded', () => {
  const btn   = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');


  if (btn && links) {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !expanded);
      links.classList.toggle('show');
    });
  }

  document.querySelectorAll('a[href^=\"#\"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        links.classList.remove('show');
        btn.setAttribute('aria-expanded', false);
        window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
      }
    });
  });


  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
