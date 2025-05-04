import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

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
    }
  });
};

export { initSwiperHero };
