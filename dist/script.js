window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const featuresSection = document.querySelector("#features");
  const featuresTop = featuresSection.offsetTop;
  const featuresHeight = featuresSection.offsetHeight;
  const scrollPosition = window.scrollY;

  if (
    scrollPosition >= featuresTop &&
    scrollPosition <= featuresTop + featuresHeight
  ) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});
