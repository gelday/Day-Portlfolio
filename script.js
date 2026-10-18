
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Open navigation menu" : "Close navigation menu"
  );

  navLinks.classList.toggle("open", !isOpen);
});

// Close mobile menu after clicking a navigation link
navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

// Highlight the active navigation section
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    navItems.forEach((link) => {
      const isActive =
        link.getAttribute("href") === `#${entry.target.id}`;

      link.classList.toggle("active", isActive);
    });
  });
}, {
  rootMargin: "-35% 0px -55% 0px"
});

sections.forEach((section) => {
  sectionObserver.observe(section);
});

// Automatic footer year
document.getElementById("year").textContent =
  new Date().getFullYear();
