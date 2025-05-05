import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const breakpointDesctop = 1440;
let swiperGallery = null;
const gallerySlids = document.querySelectorAll('.gallery .swiper-slide');

const initSwiperGallery = () => {
  console.log('swiperGallery');
  console.log(swiperGallery);
  console.log(window.innerWidth);

  if (window.innerWidth < breakpointDesctop) {
    console.log('<1440');
    console.log('swiperGallery');
    console.log(swiperGallery);

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
      console.log(swiperGallery);
    }

  } else {
    // gallerySlids.forEach((item) => {
    //   item.classList.remove('swiper-slide');
    // });

    console.log('>=1440');
    if (swiperGallery) {
      swiperGallery.destroy(true, true);
      // console.log(swiperGallery);

      swiperGallery = null;

      // удалила стили swiper-slide - как их добавить на 320-768?

    }



  }

};

window.addEventListener('resize', initSwiperGallery);


export { initSwiperGallery };
