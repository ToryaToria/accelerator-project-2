import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';

console.log('hero__swiper');
const breakpointDesctop = 1440; // почему в слайдере не работает?

const initSwiperHero = () => {
  const swiperHero = new Swiper('.hero__swiper', {
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

  // swiperHero.on('slideChange', () => {
  //   console.log('slider change');
  //   console.log(swiperHero.activeIndex);
  // });
}

export { initSwiperHero };

