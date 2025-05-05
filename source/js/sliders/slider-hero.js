import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// let heroSwiper = null;

const initSwiperHero = () => {
  new Swiper('.hero__swiper', {
    modules: [Pagination],
    loop: true, // зациклен
    allowTouchMove: true, // свайп и мышка
    direction: 'horizontal', // по умолчанию
    grabCursor: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    breakpoints: {
      1440: {
        simulateTouch: false,
        grabCursor: false,

      }
    },

    on: {
      slideChange: function () {
        this.slides.forEach((slide, index) => {
          const isActive = index === this.activeIndex;
          slide.querySelectorAll('a, button, input, textarea, select, [tabindex]')
            .forEach((el) => {
              el.tabIndex = isActive ? 0 : -1;
            });
        });
      },
    },
  });


  const heroBoolit = document.querySelectorAll('.swiper-pagination-bullet');

  heroBoolit.forEach((e) => {
    e.tabIndex = 0;
  });
};


export {
  initSwiperHero,
};
