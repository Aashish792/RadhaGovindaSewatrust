document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-right ul li a");
  const fadeElements = document.querySelectorAll(".fade-in");
  const navbar = document.querySelector(".navbar");
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  /* Smooth Scrolling for Navigation Links */
  navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const section = document.querySelector(this.getAttribute("href"));
      section.scrollIntoView({ behavior: "smooth", block: "start" });

      // Close menu after clicking a link (on mobile)
      navMenu.classList.remove("show");
    });
  });

  /* Scroll-triggered Animations */
  function checkVisibility() {
    fadeElements.forEach(element => {
      const position = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (position < windowHeight - 100) {
        element.classList.add("visible");
      }
    });
  }

  /* Navbar Background Change on Scroll */
  function updateNavbar() {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "#033080";
      navbar.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    } else {
      navbar.style.backgroundColor = "#0441a4";
      navbar.style.boxShadow = "none";
    }
  }

  /* Mobile Navigation Toggle */
  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });

  /* Scroll Events */
  window.addEventListener("scroll", () => {
    checkVisibility();
    updateNavbar();
  });

  // Initial execution
  checkVisibility();
  updateNavbar();
});
