import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const advList = document.querySelector('.adv__list');
const items = Array.from(document.querySelectorAll('.adv__item'));

const breakpointDesctop = 1440;
let swiperAdv = null;

const createSliderMarkup = () => {
  advList.innerHTML = '';
  for (let i = 0; i < items.length; i = i + 2) {
    const container = document.createElement('div')
    const subcontainer = document.createElement('div')
    container.classList.add('swiper-slide');
    subcontainer.classList.add('adv__item-container');
    subcontainer.append(items[i]);
    if (items[i + 1]) {
      subcontainer.append(items[i + 1]);
    }
    container.append(subcontainer)
    advList.append(container)
  }
};

const resetSliderMarkup = () => {
  advList.innerHTML = '';
  advList.append(...items)
}

export function initSwiperAdv() {
  const width = window.innerWidth;

  if (width >= breakpointDesctop && !swiperAdv) {
    createSliderMarkup();
    swiperAdv = new Swiper('.adv__swiper', {

      slidesPerView: 'auto',
      spaceBetween: 30,
      loop: true,
      allowTouchMove: true,
      grabCursor: true,
      loopAddBlankSlides: false,
      loopAdditionalSlides: 0,
      navigation: {
        nextEl: '.swiper-button-next-adv',
        prevEl: '.swiper-button-back-adv',
      },
    });
  } else if (width < breakpointDesctop && swiperAdv) {
    swiperAdv.destroy(true, true);
    swiperAdv = null;
    resetSliderMarkup();
  }
}

window.addEventListener('resize', initSwiperAdv);

