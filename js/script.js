document.addEventListener("DOMContentLoaded", function () {
  const selector = document.querySelector(".choices")

  const choices = new Choices(selector, {
    searchEnabled: false,
    shouldSort: false,
    shouldSortItems: false,
    itemSelectText: '',
    classNames: {
      containerOuter: 'choices header_choices',
    },
  });

});

const swiperGallery = new Swiper('.swiper-gallery', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: false,
  spaceBetween: 50,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperEvents = new Swiper('.swiper-events', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: true,
  spaceBetween: 50,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperProject = new Swiper('.swiper-project', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: true,
  spaceBetween: 50,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

document.addEventListener("DOMContentLoaded", function () {
  let acc = new Accordion('.accordion__list', {
    duration: 700,
    elementClass: 'accordion__item',
    triggerClass: 'accordion__top',
    panelClass: 'accordion__bottom',
    showMultiple: false,
    openOnInit: [0],
    collapse: true
  });
})

let tabsLink = document.querySelectorAll('.accordion__bottom-item__link');
let tabsItem = document.querySelectorAll('.catalog-left__card');

tabsLink.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsLink.forEach(function (link) { link.classList.remove('accordion__link--active') });
    e.currentTarget.classList.add('accordion__link--active');

    tabsItem.forEach(function (element) { element.classList.remove('catalog-left__card--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog-left__card--active');
  })
})

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.758548, 37.601101],
    zoom: 15
  });

  var placemark = new ymaps.Placemark([55.758548, 37.601101], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/placemark.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-20, -20],
  });
  myMap.geoObjects.add(placemark);
}

var selectorTel = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selectorTel);

new JustValidate('.contact__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selectorTel.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: {
      required: "Недопустимый формат"
    },
    tel: {
      required: "Недопустимый формат"
    }
  }

});

const container = document.querySelector(".hero-container")
const swiper = new Swiper('.hero__swiper', {
  // Default parameters

  speed: 300,
  loop: true,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true
  }
})

let content = document.getElementById("gallery-kazemir")
let show = document.getElementById("gallery-showContent")
let hide = document.getElementById("gallery-closeContent")

show.addEventListener("click", () => {
  content.style.display = "flex"
})

hide.addEventListener("click", () => {
  content.style.display = "none"
})

const firstGalleryText = document.getElementById("first-gallery-text")
const secondGalleryText = document.getElementById("second-gallery-text")
const galleryPrevBtn = document.getElementById("gallery-prev")
const galleryNextBtn = document.getElementById("gallery-next")

galleryPrevBtn.addEventListener("click", () => {
  firstGalleryText.style.display = "block",
  secondGalleryText.style.display = "none"
})

galleryNextBtn.addEventListener("click", () => {
  firstGalleryText.style.display = "none",
  secondGalleryText.style.display = "block"
})

document.addEventListener("DOMContentLoaded", function () {
  let selectorHero = document.getElementById("hero-choices1")

  let choicesHero = new Choices(selectorHero, {
    searchEnabled: false,
    shouldSort: false,
    shouldSortItems: false,
    itemSelectText: '',
    classNames: {
      containerOuter: 'choices hero_choices',
      containerInner: 'hero__choices-inner',
      list: 'hero__choices-list',
      item: 'hero__choices-item'
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let selectorHero2 = document.getElementById("hero-choices2")

  let choicesHero2 = new Choices(selectorHero2, {
    searchEnabled: false,
    shouldSort: false,
    shouldSortItems: false,
    itemSelectText: '',
    classNames: {
      containerOuter: 'choices hero_choices',
      containerInner: 'hero__choices-inner',
      list: 'hero__choices-list',
      item: 'hero__choices-item'
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let selectorHero3 = document.getElementById("hero-choices3")

  let choicesHero3 = new Choices(selectorHero3, {
    searchEnabled: false,
    shouldSort: false,
    shouldSortItems: false,
    itemSelectText: '',
    classNames: {
      containerOuter: 'choices hero_choices',
      containerInner: 'hero__choices-inner',
      list: 'hero__choices-list',
      item: 'hero__choices-item'
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let selectorHero4 = document.getElementById("hero-choices4")

  let choicesHero4 = new Choices(selectorHero4, {
    searchEnabled: false,
    shouldSort: false,
    shouldSortItems: false,
    itemSelectText: '',
    classNames: {
      containerOuter: 'choices hero_choices',
      containerInner: 'hero__choices-inner',
      list: 'hero__choices-list',
      item: 'hero__choices-item'
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let selectorHero5 = document.getElementById("hero-choices5")

  let choicesHero5 = new Choices(selectorHero5, {
    searchEnabled: false,
    shouldSort: false,
    shouldSortItems: false,
    itemSelectText: '',
    classNames: {
      containerOuter: 'choices hero_choices',
      containerInner: 'hero__choices-inner',
      list: 'hero__choices-list',
      item: 'hero__choices-item'
    },
  });
});