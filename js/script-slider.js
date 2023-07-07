  window.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.querySelector(".slider-container");
    const slider = document.querySelector(".slider");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let currentIndex = 0;

    // function updateSliderContainerSize() {
    //   const currentSlide = slider.children[currentIndex];
    //   const slideHeight = currentSlide.offsetHeight;
    //   sliderContainer.style.height = `${slideHeight}px`;
    // }

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
      // const slideHeight = slider.children[index].offsetHeight;
      const slideWidth = slider.offsetWidth;
      slider.style.transform = `translateX(-${index * slideWidth}px)`;
      // sliderContainer.style.height = `${slideHeight}px`;
    }

    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);

    // window.addEventListener("resize", updateSliderContainerSize);
    // updateSliderContainerSize();
  });