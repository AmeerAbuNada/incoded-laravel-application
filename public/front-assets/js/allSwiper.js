





var swiper = new Swiper(".headerSwiper", {
    dir:"rtl",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
      },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


/////////////////////////////////

var swiper = new Swiper(".swiperC1", {
  dir:"rtl",
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});
/////////////////////////////////

var swiper = new Swiper(".swiperC3", {
  dir:"rtl",
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});

////////////////////////////////////////////////////


var swiper = new Swiper(".swiperCH", {
  dir:"rtl",
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".nextSP",
    prevEl: ".prevSP",
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 3,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerGroup: 3,
    },
  },
});