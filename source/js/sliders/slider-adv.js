import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const breakpointDesctop = 1440;
let swiperAdv = null;

const initSwiperAdv = () => {
  const width = window.innerWidth;

  if (width >= breakpointDesctop && !swiperAdv) {
    swiperAdv = new Swiper('.adv__swiper', {
      modules: [Navigation],

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

    });

    const adv = document.querySelector('.adv__list');

    for (let i = 0; i <= 4; i++) {
      const virtualSlide = swiperAdv.slides[i].cloneNode(true);
      // virtualSlide.style.backgroundColor = 'red';
      adv.appendChild(virtualSlide);
    }


  } else if (width < breakpointDesctop && swiperAdv) {
    swiperAdv.destroy(true, true);
    swiperAdv = null;
    const advItem = document.querySelectorAll('.adv__item');

    for (let i = 5; i <= 9; i++) {
      advItem[i].remove();
    }
  }
};

window.addEventListener('resize', initSwiperAdv);

export {initSwiperAdv};
