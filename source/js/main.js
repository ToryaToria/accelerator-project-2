// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';


import './mob-menu.js';
import './footer-nav.js';

import {validatesForm} from './form-valid.js';
validatesForm();

import {initSwiperHero} from './sliders/slider-hero.js';
import {initswiperTours} from './sliders/slider-tours.js';
import {initswiperTraining} from './sliders/slider-training.js';
import {initswiperReviews} from './sliders/slider-reviwes.js';
import {initSwiperAdv} from './sliders/slider-adv.js';
import {initSwiperGallery} from './sliders/slider-gallery.js';

initSwiperHero();
initswiperTours();
initswiperTraining();
initswiperReviews();
initSwiperAdv();
initSwiperGallery();