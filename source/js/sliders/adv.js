import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';

// console.log('ky');
const breakpointDesctop = 1440;

let swiperAdv = undefined;

const initSwiperAdv = () => {
  // console.log('swiperAdv');

  new Swiper('.adv__swiper', {
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

  
};

// const swiperAdv = initSwiperAdv;

const adv = () => {
  if (window.innerWidth >= 1440) {
    initSwiperAdv();
    // swiperAdv();

    console.log(swiperAdv.slides.length);
    const adv = document.querySelector('.adv__list');

    for (let i = 0; i <= 4; i++) {
      const virtualSlide = swiperAdv.slides[i].cloneNode(true);
      virtualSlide.style.backgroundColor = 'red';
      adv.appendChild(virtualSlide);
    }

  } else {
    // console.log('<1440 - без слайдера');
    if (swiperAdv !== undefined) {
      swiperAdv.destroy(true, true);
      console.log(swiperAdv);
    }
  }
}

adv();

const body = document.documentElement;

body.addEventListener('resize', () => {
  console.log('resize');
});

// export { initSwiperAdv };

