var swiper = new Swiper(".gallery__swiper", {

  loop: true,
  spaceBetween: 50,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 38,
      slidesPerGroup: 2,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },

    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },

    3000: {
      slidesPerView: 3,
      slidesPerGroup: 3,
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

  breakpoints: {
    768: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    1024: {
      spaceBetween: 27,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },

    1920: {
      slidesPerView: 3,
      spaceBetween: 50,
    }

  },

  // Navigation arrows
  navigation: {
    nextEl: '.event__swiperbtnnext',
  },

  pagination: {
    el: '.event__pagination',
    type: 'bullets',
    clickable: true,
  },

});


const swiperProjects = new Swiper('.projects__swiper', {
  // Optional parameters
  loop: true,

  breakpoints: {
    768: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

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
