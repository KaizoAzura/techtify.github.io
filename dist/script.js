// Animation Slide
window.addEventListener("resize", adjustAnimation);

function adjustAnimation() {
  const slider = document.querySelector(".logo-slider");
  const containerWidth = document.querySelector(".logo-container").offsetWidth;
  const totalWidth = Array.from(slider.children).reduce(
    (total, img) => total + img.offsetWidth,
    0
  );

  slider.style.animationDuration = `${(totalWidth / containerWidth) * 2}s`;
}

// Initial adjustment
adjustAnimation();
