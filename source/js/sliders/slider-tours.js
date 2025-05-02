import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';


const initswiperTours = () => {
const swiperTours = new Swiper('.tours__swiper', {
  modules: [Navigation],

  loop: false, // не зациклено
  allowTouchMove: true, // свайп и мышка
  spaceBetween: 15,
  grabCursor: true,

  navigation: {
    nextEl: '.swiper-button-next-tours',
    prevEl: '.swiper-button-back-tours',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 18,

    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});

// swiperTours.on('slideChange', () => {
//   console.log('slider change');
//   console.log(swiperTours.activeIndex);
// });
}

export {initswiperTours};


