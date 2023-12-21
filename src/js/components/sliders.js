import { auto } from '@popperjs/core';
import Swiper, { Navigation, EffectFade, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);


const trendsSlider = new Swiper('.trends__slider', {
  spaceBetween: 30,
  slidesPerView: 1,
  loop: true,

  breakpoints: {
    768: {
      slidesPerView: 3,
    },

    1024: {
      slidesPerView: 4,
    },

    1440: {
      slidesPerView: 6
    },
  }
});


const reviewsSlider = new Swiper('.reviews__slider', {
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  slidesPerView: auto,
  loop: true,
});
