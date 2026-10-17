
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const copyEmail = document.getElementById("copyEmail");
const emailText = document.getElementById("emailText");
const toast = document.getElementById("toast");

// Mobile menu
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Automatic current year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Notification
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// Copy email
copyEmail.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(
      emailText.textContent.trim()
    );

    showToast("Email copied successfully!");
  } catch (error) {
    showToast("Please copy the email manually.");
  }
});

// Project-specific email links
document.querySelectorAll("[data-project]").forEach((link) => {
  link.addEventListener("click", () => {
    const project = link.dataset.project;
    const subject = encodeURIComponent(
      `Website Project Inquiry: ${project}`
    );

    link.href =
      `mailto:hussainiltaf321@gmail.com?subject=${subject}`;
  });
});


