const output = document.getElementById("projectOutput");
const button = document.getElementById("projectBtn");
const projectTitle = document.getElementById("projectTitle");
const projectMessage = document.getElementById("projectMessage");
const yearSpan = document.getElementById("year");

const reasons = [
  {
    title: "A place to build in public",
    message:
      "I wanted a place to show what I'm working on while I learn. Keeping it live gives me a reason to keep improving it instead of leaving projects half-finished on my computer.",
  },
  {
    title: "A real-world lab",
    message:
      "This site lets me practice more than just HTML and CSS. I get hands-on reps with Git, deployments, server management, Docker, and the small details that come with maintaining something real.",
  },
  {
    title: "Proof of steady progress",
    message:
      "I'm not trying to pretend I know everything already. This site is a record of progress, and I want it to get better as my skills get better.",
  },
];

yearSpan.textContent = new Date().getFullYear();

let currentReason = -1;

button.addEventListener("click", () => {
  currentReason = (currentReason + 1) % reasons.length;

  const reason = reasons[currentReason];
  projectTitle.textContent = reason.title;
  projectMessage.textContent = reason.message;
  output.hidden = false;
  button.setAttribute("aria-expanded", "true");
  button.textContent = `Show reason ${((currentReason + 1) % reasons.length) + 1} of ${reasons.length}`;
});
