import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const breakpointDesctop = 1440;

const initSwiperAdv = () => {
  const swiperAdv = new Swiper('.adv__swiper', {
    modules: [Navigation],
    enabled: false,
    breakpoints: {
      1440: {
        enabled: true,
        loop: true, // зациклен
        allowTouchMove: true, // свайп и мышка
        grabCursor: true,

        spaceBetween: 30,
        slidesPerView: 'auto',
        slidesPerGroup: 2,
        // centeredSlides: true,
        loopAddBlankSlides: false,
        // loopFillGroupWithBlank: true,

        navigation: {
          nextEl: '.swiper-button-next-adv',
          prevEl: '.swiper-button-back-adv',
        },
      }
    }
  });

  if (window.innerWidth >= breakpointDesctop) {
    swiperAdv.init();

    // console.log(swiperAdv.slides.length);
    const adv = document.querySelector('.adv__list');

    for (let i = 0; i <= 4; i++) {
      const virtualSlide = swiperAdv.slides[i].cloneNode(true);
      // virtualSlide.style.backgroundColor = 'red';
      adv.appendChild(virtualSlide);
    }

  } else {
    // console.log('<1440 - без слайдера');
    if (swiperAdv !== undefined) {
      swiperAdv.destroy(true, true);
      // console.log(swiperAdv);
    }
  }
};

export { initSwiperAdv };
