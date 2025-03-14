// JavaScript Document

// Setup button
const show_nav = document.querySelector("#showNavigation");
const nav_bar = document.querySelector(".navigation");

function toggleNav(event) {
  const expanded = show_nav.getAttribute("aria-expanded") === "true";
  show_nav.setAttribute("aria-expanded", !expanded);
  nav_bar.classList.toggle("show");
}

// Close menu when clicking outside
function closeNav(event) {
  if (!nav_bar.contains(event.target) && !show_nav.contains(event.target)) {
    nav_bar.classList.remove("show");
    show_nav.setAttribute("aria-expanded", "false");
  }
}

show_nav.addEventListener("click", toggleNav);
document.addEventListener("click", closeNav);

// Use enter to select radio options
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    let focusedElement = document.activeElement;
    if (focusedElement.type === "radio") {
      focusedElement.checked = true;
    }
  }
});
