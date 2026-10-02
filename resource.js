// Optional enhancement: every question and link works without JavaScript.
(function () {
  'use strict';
  const button = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');
  let theme;
  try { theme = localStorage.getItem('vio_quiz_theme'); } catch (e) {}
  if (theme !== 'dark' && theme !== 'light') {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function applyTheme() {
    document.documentElement.dataset.theme = theme;
    icon.innerHTML = theme === 'dark'
      ? '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'
      : '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>';
    const label = 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' theme';
    button.setAttribute('aria-label', label);
    button.title = label;
  }
  applyTheme();
  button.hidden = false;
  button.addEventListener('click', function () {
    theme = theme === 'dark' ? 'light' : 'dark';
    applyTheme();
    try { localStorage.setItem('vio_quiz_theme', theme); } catch (e) {}
  });
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () {});
    });
  }
})();
