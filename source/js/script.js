'use strict';

try {
  var navHeader = document.querySelector('.nav');
  var navToggle = document.querySelector('.toggle__button');

  navHeader.classList.remove('nav--no-js');

  navToggle.addEventListener('click', function () {
    if (!navHeader.classList.contains('nav--active')) {
      navHeader.classList.add('nav--active');
      navToggle.classList.add('toggle__button--cross');
    } else {
      navHeader.classList.remove('nav--active');
      navToggle.classList.remove('toggle__button--cross');
    }
  });
} catch (e) {
  throw Error('Ошибка ' + e.name + ':' + e.message + '\n' + e.stack);
}
