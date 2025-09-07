// Theme toggle with localStorage persistence
(function () {
  var storageKey = 'resume-theme';
  var saved = localStorage.getItem(storageKey);
  if (saved === 'light') document.documentElement.classList.add('theme-light');
  if (saved === 'dark') document.documentElement.classList.add('theme-dark');

  var btn = document.getElementById('themeToggle');
  if (btn) {
    btn.addEventListener('click', function () {
      var root = document.documentElement;
      var isDark = root.classList.toggle('theme-dark');
      root.classList.toggle('theme-light', !isDark);
      localStorage.setItem(storageKey, isDark ? 'dark' : 'light');
    });
  }
})();

// Back to top button visibility and behavior
(function () {
  var btn = document.getElementById('backToTop');
  if (!btn) return;
  function onScroll() {
    if (window.scrollY > 320) btn.classList.add('show');
    else btn.classList.remove('show');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  onScroll();
})();

// Current year
document.getElementById('year').textContent = new Date().getFullYear();


