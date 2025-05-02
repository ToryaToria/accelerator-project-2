import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';

// console.log('ky');
const breakpointDesctop = 1440;

const initswiperReviews = () => {
const swiperReviews = new Swiper('.reviews__swiper', {
  modules: [Navigation],

  loop: false, // не зациклено
  allowTouchMove: true, // свайп и мышка
  spaceBetween: 15,

  navigation: {
    nextEl: '.swiper-button-next-reviews',
    prevEl: '.swiper-button-back-reviews',
  },

  breakpoints: {
    768: {
      spaceBetween: 30,
      slidesPerView: '1.2',
    },

    1440: {
      spaceBetween: 120,
      slidesPerView: 'auto',
    }
  }

  // swiperReviews.on('slideChange', () => {
  //   console.log('slider change');
  //   console.log(swiperReviews.activeIndex);
  // });
});
}


export {initswiperReviews};
