const swiper = new Swiper('.gallery__swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 50,

});

const swiperEvent = new Swiper('.event__swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
  },
  spaceBetween: 48,

});

const swiperProjects = new Swiper('.projects__swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 50,

});
