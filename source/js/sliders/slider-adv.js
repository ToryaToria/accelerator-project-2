import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const breakpointDesctop = 1440;
let swiperAdv = null;

export function initSwiperAdv() {
  const width = window.innerWidth;

  if (width >= breakpointDesctop && !swiperAdv) {
    swiperAdv = new Swiper('.adv__swiper', {
modules: [Navigation],

      // slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
      loop: true,
      allowTouchMove: true,
      grabCursor: true,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.swiper-button-next-adv',
        prevEl: '.swiper-button-back-adv',
      },
    });
  } else if (width < breakpointDesctop && swiperAdv) {
    swiperAdv.destroy(true, true);
    swiperAdv = null;
  }
}

window.addEventListener('resize', initSwiperAdv);

