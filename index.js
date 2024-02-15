document.addEventListener("DOMContentLoaded", function () {
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

  function openNav() {
    const menu = document.getElementById("mobile-backdrop");
    if (menu) menu.classList.remove("hidden");
  }

  function closeNav() {
    const menu = document.getElementById("mobile-backdrop");
    if (menu) menu.classList.add("hidden");
  }

  const burgerMenuButton = document.querySelector(".burger-menu");
  if (burgerMenuButton) burgerMenuButton.addEventListener("click", openNav);

  const closeButton = document.querySelector(".backdrop-close-btn");
  if (closeButton) closeButton.addEventListener("click", closeNav);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeNav();
    }
  });

  const navLinks = document.querySelectorAll(
    ".mobile-nav-link, .global-aside-links .link"
  );
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      closeNav();
    });
  });
});
