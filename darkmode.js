// darkmode.js

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");
  if (isDarkMode) {
    localStorage.setItem("darkMode", "true");
    document.getElementById('modeButton').innerHTML = '<span id="modeIcon">☀️</span> Light Mode'; // Sun symbol for light mode
  } else {
    localStorage.removeItem("darkMode");
    document.getElementById('modeButton').innerHTML = '<span id="modeIcon">🌙</span> Dark Mode'; // Moon symbol for dark mode
  }
}

function checkDarkMode() {
  const body = document.body;
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  if (isDarkMode) {
    body.classList.add("dark-mode");
    document.getElementById('modeButton').innerHTML = '<span id="modeIcon">☀️</span> Light Mode'; // Sun symbol for light mode
  }
}

checkDarkMode();