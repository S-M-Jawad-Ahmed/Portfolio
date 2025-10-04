// Theme toggle with persistence
const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('site-theme');
if (savedTheme === 'dark') document.body.classList.add('dark');
themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  localStorage.setItem('site-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Card expand/collapse behavior (one open at a time)
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', (e) => {
    if (e.target.closest('a')) return; // allow links to work without toggling
    const panel = card.querySelector('.card-panel');
    const isOpen = panel.style.display === 'block';
    // close other panels
    document.querySelectorAll('.card-panel').forEach(p => p.style.display = 'none');
    // toggle current
    panel.style.display = isOpen ? 'none' : 'block';
    panel.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
    if (!isOpen) { card.scrollIntoView({behavior:'smooth', block:'center'}); }
  });
});

// Smooth scrolling for nav links
document.querySelectorAll('.main-nav a').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});    panel.style.display = 'block';
    panel.setAttribute('aria-hidden','false');
  }
})();
