import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const breakpointDesctop = 1440;

const initSwiperGallery = () => {
  const swiperGallery = new Swiper('.gallery__swrapper', {
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
        // КАК ОТКЛЮЧИТЬ СЛАЙДЕР?
        // watchOverflow: false,
        enabled: false,
      }
    }

  });

  const gallerySlids = document.querySelectorAll('.gallery .swiper-slide');

  if (window.innerWidth < breakpointDesctop) {
    swiperGallery.init;
  } else { // ошибка lint-js  39:5  error  Expected an assignment or function call and instead saw an expression  no-unused-expressions

    if (swiperGallery !== undefined) {
      swiperGallery.destroy(true, true);

      // удалила стили swiper-slide - как их добавить на 320-768?
      gallerySlids.forEach((item) => {
        item.classList.remove('swiper-slide');
      });
    }
  }
};

export {initSwiperGallery};
