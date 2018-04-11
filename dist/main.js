var burger = document.getElementsByClassName("burger")[0],
  menu = document.getElementsByClassName("header--content")[0],
  menuItem = document.getElementsByClassName("menu__items"),
  submenu = document.getElementsByClassName("submenu"),
  darken = document.getElementsByClassName("darken")[0];

function onOff() {
  burger.classList.contains("burger--change") ? (burger.classList.remove("burger--change"), menu.classList.remove("header--contentShow"), darken.classList.remove("darken--show")) : (burger.classList.add("burger--change"), menu.classList.add("header--contentShow"), darken.classList.add("darken--show"))
}
burger.addEventListener("click", onOff, !1), darken.addEventListener("click", onOff, !1);
for (var index = 0; index < menuItem.length; index++) menuItem[index].lastElementChild.classList.contains("submenu") && menuItem[index].addEventListener("click", submenuToggle, !1);

function submenuToggle() {
  if (this.lastElementChild.classList.contains("submenu--show"))
    for (var e = 0; e < submenu.length; e++) submenu[e].classList.remove("submenu--show");
  else {
    for (e = 0; e < submenu.length; e++) submenu[e].classList.remove("submenu--show");
    this.lastElementChild.classList.add("submenu--show")
  }
}