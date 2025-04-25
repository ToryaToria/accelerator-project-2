import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';

console.log('ky');

const swiperHero = new Swiper('.hero__swiper', {
  modules: [Pagination],
  loop: true, // зациклен
  allowTouchMove: true, // свайп и мышка
  direction: 'horizontal', // по умолчанию
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  breakpoints: {
    1440: {
      simulateTouch: false,
      grabCursor: false,

    }
  }
});

// swiperHero.on('slideChange', () => {
//   console.log('slider change');
//   console.log(swiperHero.activeIndex);
// });


const swiperTours = new Swiper('.tours__swiper', {
  modules: [Navigation],

  loop: false, // не зациклено
  allowTouchMove: true, // свайп и мышка
  spaceBetween: 15,
  grabCursor: true,

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

// const toursBtnNext = document.querySelector('.swiper-button-next-tours');

// const toursBtnPrev = document.querySelector('.swiper-button-back-tours');

// toursBtnNext.addEventListener('click', () => {
//   swiperTours.slideNext();
//   console.log('вперед');
// });

// toursBtnPrev.addEventListener('click', () => {
//   swiperTours.slidePrev();
//   console.log('назад');
// });

const swiperTraining = new Swiper('.training__swiper', {
  modules: [Navigation],

  loop: false, // не зациклено
  allowTouchMove: true, // свайп и мышка
  spaceBetween: 15,
  grabCursor: true,
  // centeredSlides: true,
  initialSlide: 2,

  navigation: {
    nextEl: '.swiper-button-next-training',
    prevEl: '.swiper-button-back-training',
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      initialSlide: 0,


    },
    1440: {
      slidesPerView: 4,
      initialSlide: 0,
      spaceBetween: 20,

    }
  }
});

// swiperTraining.on('slideChange', () => {
//   console.log('slider change');
//   console.log(swiperTraining.activeIndex);
// });

const swiperReviews = new Swiper('.reviews__swiper', {
  modules: [Navigation],

  loop: false, // не зациклено
  allowTouchMove: true, // свайп и мышка
  spaceBetween: 15,

  navigation: {
    nextEl: '.swiper-button-next-reviews',
    prevEl: '.swiper-button-back-reviews',
  },

  breakpoints: {
    768: {
      spaceBetween: 30,
      slidesPerView: '1.2',

    },
    1440: {
      spaceBetween: 120,
      slidesPerView: 'auto',

    }
  }

});

// swiperReviews.on('slideChange', () => {
//   console.log('slider change');
//   console.log(swiperReviews.activeIndex);
// });


// window.addEventListener('resize', () => {
//   console.log('обновили экран');


const body = document.body;
console.log(body.offsetWidth);

  const swiperAdv = new Swiper('.adv__swiper', {
    modules: [Navigation],
  
    enabled: false,
    breakpoints: {
      1440: {
        enabled: true,
        loop: true, // зациклен
        allowTouchMove: true, // свайп и мышка
        grabCursor: true,

  //       initialSlide: 2,
  // centeredSlides: true,


        spaceBetween: 30,
        slidesPerView: 'auto',
        slidesPerGroup: 2,
  // centeredSlides: true,
  // loopAddBlankSlides: true,
  // loopFillGroupWithBlank: true,
  
        navigation: {
          nextEl: '.swiper-button-next-adv',
          prevEl: '.swiper-button-back-adv',
        },
    
  
      }
    }
  });

  console.log(swiperAdv.slides.length);
  const adv = document.querySelector('.adv__list');


      // for (let i = 0; i < swiperAdv.slides.length; i++) {
      //   const virtualSlide = swiperAdv.slides[i].cloneNode(true);
      //   virtualSlide.style.backgroundColor = 'red';
      //   adv.appendChild(virtualSlide);
      // }


  if(body.offsetWidth < 1440) {
    swiperAdv.destroy();
  }
    

// swiperAdv.on('click', () => {
//   console.log('slider change');
//   console.log(swiperAdv.activeIndex);
//   adv.style.marginLeft = '0';
// });



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
      watchOverflow: true,
    }
  }

});

swiperGallery.on('slideChange', () => {
  console.log('slider change');
  console.log(swiperGallery.activeIndex);
});

