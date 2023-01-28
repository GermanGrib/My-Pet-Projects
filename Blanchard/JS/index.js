new Accordion('.accordion-container');

// Yandex Map
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

  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {
    balloonContentHeader: 'Леонтьевский пер., 5, стр. 1',
    balloonContentBody: 'Москва, Россия, 125009',
  }, {
    iconLayout: 'default#image',
    iconImageHref: './img/mapMarker.svg',
    iconImageSize: [20, 20],
  });

  myMap.geoObjects.add(myPlacemark);
}


// dropdowns
const dropdownButtons = document.querySelectorAll('.hero__btn');
const boxes = document.querySelectorAll('.scrollbox');

document.addEventListener('click', function (event) {
  dropdownButtons.forEach(function (element) {
    element.classList.remove('hero__btn--active');
  });
  boxes.forEach(function (element) {
    element.classList.remove('scrollbox--active');
  });

  const targetClassList = [...event.target.classList];

  if (targetClassList.includes('hero__btn')) {
    event.target.classList.toggle('hero__btn--active');
    event.target.nextElementSibling.classList.toggle('scrollbox--active');
  }

  let headerNav = document.querySelector('.header__nav')
  let hamburger = document.querySelector('.hamburger')

  if (!headerNav.contains(event.target) && !hamburger.contains(event.target)) {
    headerNav.classList.remove('header__nav--active')
    hamburger.classList.remove('is-active')
  }

  if (event.target.classList.contains('nav__link')) {
    headerNav.classList.remove('header__nav--active')
    hamburger.classList.remove('is-active')
  }

  if (hamburger.classList.contains('is-active')) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
})


// Hamburger

// Look for .hamburger
let hamburger = document.querySelector(".hamburger");
let headerNavigation = document.querySelector('.header__nav')
// On click
hamburger.addEventListener("click", function () {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
  headerNavigation.classList.toggle('header__nav--active')

  if (hamburger.classList.contains('is-active')) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
});


// gallery
const galleryCards = document.querySelectorAll('.gallery__popuphover');
const galleryPopups = document.querySelectorAll('.gallery__popup');

galleryCards.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    galleryCards.forEach(function (btn) { btn.classList.remove('gallery__popup--active') });
    e.currentTarget.classList.add('gallery__hover--active');

    galleryPopups.forEach(function (item) { item.classList.remove('gallery__popup--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('gallery__popup--active');
  })
})



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

document.querySelectorAll('.js-scroll-link').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const href = this.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
      top: elementPosition,
      behavior: 'smooth'
    });
  });
});


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
      !search.classList.contains(params.activeClass)
    ) {
      search.classList.remove(params.hiddenClass);
      search.classList.add(params.activeClass);
    }
  });

  closeBtn.addEventListener('click', function () {
    openBtn.disabled = false;
    search.classList.remove(params.activeClass);
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


// Input Mask
const phoneElement = document.querySelector(".input-tel");

const im = new Inputmask("+7(999) 999-99-99");
im.mask(phoneElement);

const validation = new window.JustValidate('.footer__formbox', {
  errorFieldCssClass: 'is-invalid',
  errorFieldStyle: {
    border: '1px solid #FF5C00',
  },
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    color: '#FF5C00',
  },
  focusInvalidField: true,
  lockForm: true,
});

validation
  .addField('.input-name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Имя должно содержать хотя бы 3 буквы'
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя не может содержать более 30 символов'
    },
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя'
    }
  ])

  .addField('.input-tel', [
    {
      validator: () => {
        const phone = phoneElement.inputmask.unmaskedvalue();
        const result = Number(phone) && phone.length === 10;
        return result === 0 ? false : result;
      },
      errorMessage: 'Вы не ввели телефон',
    }
  ]);
