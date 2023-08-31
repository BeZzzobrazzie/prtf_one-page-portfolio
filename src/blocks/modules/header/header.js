let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
let body = document.querySelector('body');
burger.addEventListener('click', hBurgerClick);

function hBurgerClick() {
  burger.classList.toggle('header__burger_active');
  menu.classList.toggle('header__menu_active');
  body.classList.toggle('body__lock');
}

let links = document.querySelectorAll('.header__link');

function hLinkClick() {
  if (burger.classList.contains('header__burger_active')) {
    hBurgerClick();
  }
}

for (let link of links) {
  link.addEventListener('click', hLinkClick);
}

// =====================

window.addEventListener('scroll', hScrollWindow);

function hScrollWindow() {
  let header = document.querySelector('.header');

  if (pageYOffset > 0) {

    header.classList.add('header_scrolling');
  }
  else {
    header.classList.remove('header_scrolling');
  }
}
