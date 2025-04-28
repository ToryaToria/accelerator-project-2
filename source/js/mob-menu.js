// console.log('ky');

const body = document.body;
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const link = document.querySelectorAll('.nav__link');

burger.addEventListener('click', () => {

  burger.classList.toggle('burger--close');
  burger.classList.toggle('burger--open');
  nav.classList.toggle('nav--open');
  body.classList.toggle('page__body--noscroll');
});

link.forEach((el) => {
  el.addEventListener('click', () => {
    burger.classList.remove('burger--open');
    burger.classList.add('burger--close');

    nav.classList.add('nav--open');
    body.classList.remove('page__body--noscroll');
  });
});
