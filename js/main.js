(() => {
  const header = document.querySelector('[data-header]');
  const nav = document.querySelector('[data-nav]');
  const toggle = document.querySelector('[data-nav-toggle]');
  const year = document.querySelectorAll('[data-year]');
  year.forEach(el => el.textContent = new Date().getFullYear());

  const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 16);
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded','false'); nav.classList.remove('is-open');
    }));
  }

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = document.querySelectorAll('.reveal');
  if (reduced || !('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('is-visible'));
  } else {
    const obs = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); obs.unobserve(entry.target); }
    }), {threshold:.12, rootMargin:'0px 0px -40px'});
    reveals.forEach(el => obs.observe(el));
  }

})();
