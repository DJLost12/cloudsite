const output = document.getElementById("projectOutput");
const button = document.getElementById("projectBtn");
const yearSpan = document.getElementById("year");

yearSpan.textContent = new Date().getFullYear();

let expanded = false;

button.addEventListener("click", () => {
  expanded = !expanded;

  output.textContent = expanded
    ? "This site gives me a place to learn in public, practice the basics, and slowly build something that feels like mine."
    : "";

  button.textContent = expanded ? "Hide message" : "Why this site exists";
});
