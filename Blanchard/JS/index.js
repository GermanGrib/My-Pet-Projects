new Accordion('.accordion-container');

type = "text/javascript" >
  ymaps.ready(init);

function init() {

  var myMap = new ymaps.Map("map", {
    center: [55.758468, 37.601088],
    zoom: 14,
    controls: [],
  },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition: { top: "200px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "120px", right: "20px" }
    }
  );

  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/mapMarker.svg',
    iconImageSize: [20, 20],
  });

  myMap.geoObjects.add(myPlacemark);
}


// dropdowns
const dropdownButtons = document.querySelectorAll('.main__btn');
const boxes = document.querySelectorAll('.scrollbox');

document.addEventListener('click', function (event) {
  dropdownButtons.forEach(function (element) {
    element.classList.remove('main__btn--active');
  });
  boxes.forEach(function (element) {
    element.classList.remove('scrollbox--active');
  });

  const targetClassList = [...event.target.classList];

  if (targetClassList.includes('main__btn')) {
    event.target.classList.toggle('main__btn--active');
    event.target.nextElementSibling.classList.toggle('scrollbox--active');
  }
})


// Hamburger

// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
let headerNavigation = document.querySelector('.header__nav')
// On click
hamburger.addEventListener("click", function () {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
  headerNavigation.classList.toggle('header__nav--active')
});

// gallery

// let tabHoverGallery = document.querySelector('.gallery__hover');
// let tabHoverBox = document.querySelector('.gallery__hoverbox');

// tabHoverGallery.addEventListener('click', () {
//   tabHoverBox.classList.toggle('gallery__hoverbox--active')
// })

// document.addEventListener('click', function (event) {
//   tabHoverGallery.forEach(function (element) {
//     element.classList.remove('gallery__hoverbox--active')
//   }),
//     tabHoverBox.forEach(function (element) {
//       element.classList.remove('gallery__hover--active')
//     }),

//     const targetClassLists = [...event.target.classList];

//   if (targetClassLists.includes('gallery__hover')) {
//     event.target.classList.toggle('gallery__hoverbox--active');
//   }

// })


// Catalogue
let tabsBtn = document.querySelectorAll('.catalogue__btn');
let tabsCatalogueAboutPainter = document.querySelectorAll('.catalogue__aboutpainter');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('catalogue__btn--active') });
    e.currentTarget.classList.add('catalogue__btn--active');

    tabsCatalogueAboutPainter.forEach(function (item) { item.classList.remove('catalogue__aboutpainter--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('catalogue__aboutpainter--active');
  })
})


// tooltip

let tooltipBtnTab = document.querySelectorAll('.projects__tooltipbtn')

tippy(tooltipBtnTab, {
  content: 'Wow!!! here is very interesting information'
})


// Smooth Scroll

// document.querySelectorAll('.js-scroll-link').forEach(link => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();

//     const href = this.getAttribute('href').substring(1);
//     const scrollTarget = document.getElementById(href);
//     const elementPosition = scrollTarget.getBoundingClientRect().top;

//     window.scrollBy({
//       top: elementPosition,
//       behavior: 'smooth'
//     });
//   });


// Search Form

// здесь мы вызываем функцию и передаем в нее классы наших элементов
function setSearch(params) {
  const openBtn = document.querySelector(`.${params.openBtnClass}`);
  const search = document.querySelector(`.${params.searchClass}`);
  const closeBtn = search.querySelector(`.${params.closeBtnClass}`);

  search.addEventListener("animationend", function (evt) {
    if (this._isOpened) {
      this.classList.remove(params.activeClass);
      this.classList.remove(params.hiddenClass);
      this._isOpened = false;
    } else {
      this._isOpened = true;
    }
  });

  search.addEventListener('click', function (evt) {
    evt._isSearch = true;
  });

  openBtn.addEventListener("click", function (evt) {
    this.disabled = true;

    if (
      !search.classList.contains(params.activeClass) &&
      !search.classList.contains(params.hiddenClass)
    ) {
      search.classList.add(params.activeClass);
    }
  });

  closeBtn.addEventListener('click', function () {
    openBtn.disabled = false;
    search.classList.add(params.hiddenClass);
  });

  document.body.addEventListener('click', function (evt) {
    if (!evt._isSearch && search._isOpened) {
      openBtn.disabled = false;
      search.classList.add(params.hiddenClass);
    }
  });
}

setSearch({
  openBtnClass: "js-open-search", // класс кнопки открытия
  closeBtnClass: "js-close", // класс кнопки закрытия
  searchClass: "js-form", // класс формы поиска
  activeClass: "is-opened", // класс открытого состояния
  hiddenClass: "is-closed" // класс закрывающегося состояния (удаляется сразу после закрытия)
});
