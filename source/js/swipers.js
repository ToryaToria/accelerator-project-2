import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';

console.log('ky');



const swiperHero = new Swiper('.hero__swiper', {
  modules: [Navigation, Pagination],
  loop: true, // зациклен
  allowTouchMove: true, // свайп и мышка
  direction: 'horizontal', // по умолчанию

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    // кастомные свойства
//     renderBullet: function (index, className) {
// return '<span class="' + className + '">' + (index + 1) + '<span>';
//      }
  },

  breakpoints: {
    1440: {
      simulateTouch: false,
    }
  }
});

swiperHero.on('slideChange', () => {
  console.log('slider change');
  console.log(swiperHero.activeIndex);
});


const swiperTours = new Swiper('.tours__swiper', {
  loop: false, // не зациклено
  allowTouchMove: true, // свайп и мышка
  spaceBetween: 15,

  navigation: {
    nextEl: '.swiper-button-next-tours',
    prevEl: '.swiper-button-back-tours',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 18,

    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});

swiperTours.on('slideChange', () => {
  console.log('slider change');
  console.log(swiperTours.activeIndex);
});

const toursBtnNext = document.querySelector('.swiper-button-next-tours');

const toursBtnPrev = document.querySelector('.swiper-button-back-tours');

toursBtnNext.addEventListener('click', () => {
  swiperTours.slideNext();
  console.log('вперед');
});

toursBtnPrev.addEventListener('click', () => {
  swiperTours.slidePrev();
  console.log('назад');
});

const swiperTraining = new Swiper('.training__swiper', {
  loop: false, // не зациклено
  allowTouchMove: true, // свайп и мышка
  spaceBetween: 15,

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,

    },
    1440: {
      slidesPerView: 4,
    }
  }
});

swiperTraining.on('slideChange', () => {
  console.log('slider change');
  console.log(swiperTraining.activeIndex);
});

const swiperReviews = new Swiper('.reviews__swiper', {
  loop: false, // не зациклено
  allowTouchMove: true, // свайп и мышка
  spaceBetween: 15,

  breakpoints: {
    768: {
      spaceBetween: 30,

    },
    1440: {
      spaceBetween: 120,
    }
  }

});

swiperReviews.on('slideChange', () => {
  console.log('slider change');
  console.log(swiperReviews.activeIndex);
});


const swiperAdv = new Swiper('.adv__swiper', {
  breakpoints: {
    1440: {
      loop: true, // зациклен
      allowTouchMove: true, // свайп и мышка
      spaceBetween: 30,
    }
  }
});

swiperAdv.on('slideChange', () => {
  console.log('slider change');
  console.log(swiperAdv.activeIndex);
});

const swiperGallery = new Swiper('.gallery__swrapper', {
       loop: true, // зациклен
      allowTouchMove: true, // свайп и мышка
      slidesPerView: 2,
      spaceBetween: 5,

      breakpoints: {
        768: {
          slidesPerView: 3,
    
        },
        1440: {
// КАК ОТКЛЮЧИТЬ СЛАЙДЕР?
        }
      }
    
});

swiperGallery.on('slideChange', () => {
  console.log('slider change');
  console.log(swiperGallery.activeIndex);
});

