const footerNav = document.querySelectorAll('.footer__item');
const breakpointTabl = 768;

const footerNavChenge = () => {

  if (window.innerWidth >= breakpointTabl) {
    // console.log('>=768');
    footerNav[0].style.order = '1';
    footerNav[1].style.order = '4';
    footerNav[2].style.order = '2';
    footerNav[3].style.order = '5';
    footerNav[4].style.order = '3';
    footerNav[5].style.order = '6';
  } else {
    // console.log('=320');
    footerNav.forEach((e) => {
      e.style.order = 'unset';
    });
  }
};

footerNavChenge();

window.addEventListener('resize', () => {
  footerNavChenge();
});
