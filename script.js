// Dark mode toggle
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Expand panel on card click
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const panel = card.querySelector(".panel");
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});
