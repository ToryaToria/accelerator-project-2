import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const initswiperReviews = () => {
  new Swiper('.reviews__swiper', {
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
        slidesPerView: 'auto',
      },

      1440: {
        spaceBetween: 120,
        slidesPerView: 'auto',
      }
    }
  });
};

export {initswiperReviews};
