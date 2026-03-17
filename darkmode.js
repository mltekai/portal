// Dark / Light mode toggle for MLTEK Solutions
(function () {
  var MOON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  var SUN  = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';

  var btn = document.createElement('button');
  btn.className = 'darkmode-toggle';
  btn.setAttribute('aria-label', 'Toggle light / dark mode');
  document.body.appendChild(btn);

  function applyMode(isLight) {
    if (isLight) {
      document.body.classList.add('lightmode');
      btn.innerHTML = SUN;
      btn.title = 'Switch to dark mode';
      localStorage.setItem('mltek-theme', 'light');
    } else {
      document.body.classList.remove('lightmode');
      btn.innerHTML = MOON;
      btn.title = 'Switch to light mode';
      localStorage.setItem('mltek-theme', 'dark');
    }
  }

  var saved = localStorage.getItem('mltek-theme');
  applyMode(saved === 'light');

  btn.addEventListener('click', function () {
    applyMode(!document.body.classList.contains('lightmode'));
  });
})();
