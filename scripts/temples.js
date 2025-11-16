// Footer Year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Last Modified
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  if (navMenu.style.display === "flex") {
    navMenu.style.display = "none";
    hamburger.textContent = "☰";
  } else {
    navMenu.style.display = "flex";
    hamburger.textContent = "✖";
  }
});