import React, { useEffect } from "react";
import "../components/layout.css";

export default function Home() {
  useEffect(() => {
    const btn = document.getElementById("theme-button");
    const body = document.body;

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark");
    } else {
      body.classList.add("light");
    }

    // Toggle button click
    btn.addEventListener("click", () => {
      if (body.classList.contains("light")) {
        body.classList.replace("light", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        body.classList.replace("dark", "light");
        localStorage.setItem("theme", "light");
      }
    });
  }, []);

  return (
    <main>
      {/* 3D Light/Dark Mode Button */}
      <div className="toggle-wrapper">
        <button id="theme-button" className="theme-btn">
          <div className="inner-circle"></div>
        </button>
      </div>

      {/* Your existing portfolio content */}
      <h1>Welcome to My Portfolio</h1>
      <p>This is my homepage with a 3D light/dark mode toggle button.</p>
    </main>
  );
}
