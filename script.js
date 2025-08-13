const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

function setTheme(isDark) {
  if (isDark) {
    body.classList.add('dark');
    toggleBtn.textContent = '☀️';
  } else {
    body.classList.remove('dark');
    toggleBtn.textContent = '🌙';
  }
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Load saved theme
const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme === 'dark');

toggleBtn.addEventListener('click', () => {
  setTheme(!body.classList.contains('dark'));
});