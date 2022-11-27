var swiper = new Swiper(".gallery__swiper", {

  loop: true,
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 49,

  breakpoints: {

    1024: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },

    1920: {
      slidesPerView: 3,
    }
  },


  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperEvent = new Swiper('.event__swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,

  breakpoints: {
    1024: {
      spaceBetween: 27,
      slidesPerGroup: 3,
    },

    1920: {
      spaceBetween: 50,
    }

  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
  },

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

});


const swiperProjects = new Swiper('.projects__swiper', {
  // Optional parameters
  loop: true,

  breakpoints: {
    1024: {
      spaceBetween: 50,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    1920: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
    }

  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
