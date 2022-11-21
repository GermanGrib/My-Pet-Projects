let tabsBtn = document.querySelectorAll('.ourwork__links');
let tabsItem = document.querySelectorAll('.ourwork__tabsitem');
let tabsimg = document.querySelectorAll('.tabsimg');
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__list');
let menuLinks = menu.querySelectorAll('.header__links');
let searchMenuBox = document.querySelector('.header__searchiconbox');
let searchOpen = document.querySelector('.header__searchicon');
let searchClose = document.querySelector('.header__serchcloseiccon');

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  a11y: {
    paginationBulletMessage: 'Переход на следующий слайд {{index}}'
  },
});

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('ourwork__links--active') });
    e.currentTarget.classList.add('ourwork__links--active');

    tabsItem.forEach(function (item) { item.classList.remove('ourwork__tabsitem--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('ourwork__tabsitem--active');

    tabsimg.forEach(function (image) { image.classList.remove('tabsimg--active') });
    document.querySelector(`[data-img-target="${path}"]`).classList.add('tabsimg--active');
  });
});

new Accordion('.accordion-container');

burger.addEventListener('click',

  function () {
    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__list--active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__list--active');

    document.body.classList.remove('stop-scroll')
  })
})

searchOpen.addEventListener('click', function () {

  searchMenuBox.classList.add('header__searchiconbox--active');

  searchClose.classList.add('header__serchcloseiccon--active');

})

searchClose.addEventListener('click', function () {

  searchMenuBox.classList.remove('header__searchiconbox--active');

  searchClose.classList.remove('header__serchcloseiccon--active');
})

