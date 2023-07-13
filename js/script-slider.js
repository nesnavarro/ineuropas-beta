  window.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.querySelector(".slider-container");
    const slider = document.querySelector(".slider");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let currentIndex = 0;

    function prevSlide() {
      if (currentIndex > 0) {
        currentIndex--;
        slideToIndex(currentIndex);
      }
    }

    function nextSlide() {
      const numSlides = slider.children.length;
      if (currentIndex < numSlides - 1) {
        currentIndex++;
        slideToIndex(currentIndex);
      }
    }

    function slideToIndex(index) {
      const slideWidth = slider.offsetWidth;
      slider.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);
  });
