var burger = document.getElementsByClassName('burger')[0];
var menu = document.getElementsByClassName('header--content')[0];
var menuItem = document.getElementsByClassName('menu__items');
var submenu = document.getElementsByClassName('submenu');
var darken = document.getElementsByClassName('darken')[0];

burger.addEventListener('click', onOff, false);
darken.addEventListener('click', onOff, false);

function onOff() {
  if (burger.classList.contains('burger--change')) {
    burger.classList.remove('burger--change');
    menu.classList.remove('header--contentShow');
    darken.classList.remove('darken--show');
  } else {
    burger.classList.add('burger--change');
    menu.classList.add('header--contentShow');
    darken.classList.add('darken--show');
  }
}

for (var index = 0; index < menuItem.length; index++) {
  if (menuItem[index].lastElementChild.classList.contains('submenu')) {
    menuItem[index].addEventListener('click', submenuToggle, false);
  };
}

function submenuToggle() {
  if (this.lastElementChild.classList.contains('submenu--show')) {
    for (var index = 0; index < submenu.length; index++) {
      submenu[index].classList.remove('submenu--show');
    }
  } else {
    for (var index = 0; index < submenu.length; index++) {
      submenu[index].classList.remove('submenu--show');
    }
    this.lastElementChild.classList.add('submenu--show');
  }
}