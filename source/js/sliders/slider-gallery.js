import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';

// console.log('ky');
const breakpointDesctop = 1440;

const initSwiperGallery = () => {
  // console.log('swiperGallery');
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

  // console.log(window.innerWidth);

  if (window.innerWidth < breakpointDesctop) {
    // console.log(swiperGallery);
    return swiperGallery;
  } else {
    // console.log('>=1440 - destroy gallery-swiper');
    if (swiperGallery !== undefined) {
      swiperGallery.destroy(true, true);
      // console.log(swiperGallery);

    }
  }
};

export {initSwiperGallery};
