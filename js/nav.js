/* eslint-disable linebreak-style */
(function () {
  const MOBILE_WIDTH = '480px';
  const nav = document.querySelector('.nav-list');
  const menuButton = document.querySelector('.btn-nav');

  function processNavClasses() {
    if (window.matchMedia(`(max-width: ${MOBILE_WIDTH})`).matches) {
      nav.classList.add('nav-list__closed');
    }
  }

  function processMenu() {
    if (menuButton.classList.contains('btn-nav__open')) {
      menuButton.classList.remove('btn-nav__open');
      menuButton.classList.add('btn-nav__close');
      nav.classList.remove('nav-list__closed');
      nav.classList.add('nav-list__opened');
    } else {
      menuButton.classList.add('btn-nav__open');
      menuButton.classList.remove('btn-nav__close');
      nav.classList.add('nav-list__closed');
      nav.classList.remove('nav-list__opened');
    }
  }

  window.addEventListener('load', processNavClasses);
  window.addEventListener('resize', processNavClasses);
  menuButton.addEventListener('click', processMenu);
}());
