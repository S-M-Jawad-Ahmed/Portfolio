// Dark mode toggle
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = 
    document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Expand/Collapse description
document.querySelectorAll(".toggle-desc").forEach(btn => {
  btn.addEventListener("click", () => {
    const desc = btn.nextElementSibling;
    desc.classList.toggle("hidden");
    btn.textContent = desc.classList.contains("hidden") ? "View Details" : "Hide Details";
  });
});
