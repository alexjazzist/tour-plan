var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.hotelslider__button__next',
    prevEl: '.hotelslider__button__prev',
  },
  effect: "coverflow",
})

var reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button__next',
    prevEl: '.reviews-slider__button__prev',
  },
})



