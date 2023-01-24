document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".list__btn").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".dropdown");
    
    document.querySelectorAll(".dropdown").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("active-dropdown");
      }
    })
    dropdown.classList.toggle("active-dropdown");
    btn.classList.toggle("active-btn")
  })
})

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".hero__list")) {
    document.querySelectorAll(".dropdown").forEach(el => {
        el.classList.remove("active-dropdown");
    })
    document.querySelectorAll(".list__btn").forEach(el => {
      el.classList.remove("active-btn");
  });
  }
})
})

const swiperGallery = new Swiper('.swiper-gallery', {
  pagination: {
    el: ".gallery-pagination",
    type: "fraction",
  },
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 100,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 100,
    },
    580: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
});

const swiperEvents = new Swiper('.swiper-events', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 200,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".events-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
      pagination: {
        el: ".events-pagination",
        clickable: true,
      },
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
      pagination: {
        el: ".events-pagination",
        clickable: true,
      },
    },
    1300: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
});

let swiperProject = new Swiper('.swiper-project', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 50,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    450: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20,
    },
    580: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 33,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 25,
    },
    1300: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const selector = document.querySelector(".choices")

  const choices = new Choices(selector, {
    searchEnabled: false,
    itemSelectText: "",
    classNames: {
      containerOuter: 'choices header_choices',
    },
  });
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
    zoom: 15,
    scroll: false,
  });

  myMap.behaviors.disable('scrollZoom');
  
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
    type: 'bullets',
    clickable: true
  }
})

// появление карточки Каземира при клике
let content = document.getElementById("gallery-kazemir")
let show = document.getElementById("gallery-showContent")
let hide = document.getElementById("gallery-closeContent")

show.addEventListener("click", () => {
  content.style.display = "flex"
})

hide.addEventListener("click", () => {
  content.style.display = "none"
})

// бургер-меню
const loginBtn = document.querySelector(".btn-login-burger")
document.querySelector(".header__btn-open").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.add("active")
  loginBtn.classList.add("show-btn")
  
})
document.querySelector(".nav__close").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.remove("active")
  loginBtn.classList.remove("show-btn")
})

// инпут в хедере при max-width: 1400рх
let headerLogo = document.querySelector(".header__logo")
document.querySelector(".header__input-tablet__btn").addEventListener("click", function() {
  document.querySelector(".hero__menu__search-input").classList.add("show-btn-tablet"),
  document.querySelector(".header__input__btn-close").classList.add("show-btn-tablet")
})
document.querySelector(".header__input__btn-close").addEventListener("click", function() {
  document.querySelector(".hero__menu__search-input").classList.remove("show-btn-tablet"),
  document.querySelector(".header__input__btn-close").classList.remove("show-btn-tablet")
})
