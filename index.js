document.addEventListener("DOMContentLoaded", function () {
  // Slideshow ----------------------------------------------
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(index) {
    slides.forEach((slide) => {
      slide.style.opacity = "0";
    });
    slides[index].style.opacity = "1";
  }

  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 4000);

  // Opening and closing the mobile menu ---------------------------
  function openNav() {
    const menu = document.getElementById("mobile-backdrop");
    if (menu) menu.classList.remove("hidden");
  }

  function closeNav() {
    const menu = document.getElementById("mobile-backdrop");
    if (menu) menu.classList.add("hidden");
  }

  const burgerMenuButton = document.querySelector(".burger-menu");
  if (burgerMenuButton) {
    burgerMenuButton.addEventListener("click", function (event) {
      openNav();
      event.stopPropagation();
    });
  }

  const closeButton = document.querySelector(".backdrop-close-btn");
  if (closeButton) {
    closeButton.addEventListener("click", function (event) {
      closeNav();
      event.stopPropagation();
    });
  }
  // Closeing the menu with escape key and clicking outside the menu
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeNav();
    }
  });
  window.addEventListener("click", function (event) {
    const menu = document.getElementById("mobile-backdrop");
    if (menu && !menu.contains(event.target)) {
      closeNav();
    }
  });

  // closing the menu when a link is clicked
  const navLinks = document.querySelectorAll(
    ".mobile-nav-link, .global-aside-links .link"
  );
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      closeNav();
    });
  });
});
