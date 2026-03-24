(function () {
  const root = document.documentElement;
  const stored = localStorage.getItem('akro-lang');
  const initial = stored === 'pt' ? 'pt' : 'en';
  root.setAttribute('data-lang', initial);

  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.langBtn === initial);
    btn.addEventListener('click', () => {
      const lang = btn.dataset.langBtn;
      root.setAttribute('data-lang', lang);
      localStorage.setItem('akro-lang', lang);
      document.querySelectorAll('[data-lang-btn]').forEach((b) => {
        b.classList.toggle('active', b.dataset.langBtn === lang);
      });
    });
  });
})();
