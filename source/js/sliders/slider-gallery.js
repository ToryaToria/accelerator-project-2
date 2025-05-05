import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const breakpointDesctop = 1440;
let swiperGallery = null;

const initSwiperGallery = () => {
  if (window.innerWidth < breakpointDesctop) {

    if (!swiperGallery) {
      swiperGallery = new Swiper('.gallery__swrapper', {
        modules: [Navigation],
        loop: true, // зациклен
        allowTouchMove: true, // свайп и мышка
        slidesPerView: 2,
        spaceBetween: 5,

        navigation: {
          nextEl: '.swiper-button-next-gallery',
          prevEl: '.swiper-button-back-gallery',
        },

        breakpoints: {
          768: {
            slidesPerView: 3,

          },
          1440: {
            enabled: false,
          }
        }

      });
    }

  } else {
    if (swiperGallery) {
      swiperGallery.destroy(true, true);
      swiperGallery = null;
    }
  }

};

window.addEventListener('resize', initSwiperGallery);

export { initSwiperGallery };
