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

// Card expand/collapse behavior
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', (e) => {
    // If click was on an actual link, do not toggle
    if (e.target.closest('a')) return;
    const panel = card.querySelector('.card-panel');
    const isOpen = panel.style.display === 'block';
    // close other panels
    document.querySelectorAll('.card-panel').forEach(p => p.style.display = 'none');
    // toggle current
    panel.style.display = isOpen ? 'none' : 'block';
    // update aria
    panel.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
  });
});

// Read ?project=... query param to auto-open a card
(function openFromQuery(){
  const params = new URLSearchParams(window.location.search);
  const project = params.get('project'); // e.g. ?project=cyclistic
  if (!project) return;
  const target = document.querySelector(`.card[data-project="${project}"]`);
  if (target){
    target.scrollIntoView({behavior:'smooth', block:'center'});
    const panel = target.querySelector('.card-panel');
    panel.style.display = 'block';
    panel.setAttribute('aria-hidden','false');
  }
})();
