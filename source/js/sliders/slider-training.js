import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';

// console.log('ky');
const breakpointDesctop = 1440;

const initswiperTraining = () => {
const swiperTraining = new Swiper('.training__swiper', {
  modules: [Navigation],

  loop: false, // не зациклено
  allowTouchMove: true, // свайп и мышка
  spaceBetween: 15,
  grabCursor: true,
  initialSlide: 2,
  // autoHeight: false,

  navigation: {
    nextEl: '.swiper-button-next-training',
    prevEl: '.swiper-button-back-training',
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      initialSlide: 0,
    },
    1440: {
      slidesPerView: 4,
      initialSlide: 0,
      spaceBetween: 20,

    }
  }

  // swiperTraining.on('slideChange', () => {
//   console.log('slider change');
//   console.log(swiperTraining.activeIndex);
// });
});
}

export {initswiperTraining};


