var menu = [document.getElementById("header-navbar"), document.getElementById("walletBtn"), document.getElementById("navbar-list")];

var navbarBtn = document.getElementById("navbarBtn");

function showMenu() {
  for (var i = 0; i < menu.length; i++) {
    menu[i].style.display = "flex";
    menu[i].style.flexDirection = "column";
    menu[i].style.gap = "5px";
    menu[i].style.margin = "20px 0";
    menu[i].style.width = "100%";
  }
  navbarBtn.onclick = closeMenu;
}

function closeMenu() {
  for (var i = 0; i < menu.length; i++) {
    menu[i].style.display = "";
    menu[i].style.flexDirection = "row";
    menu[i].style.gap = "60px";
    menu[i].style.margin = "0";
    menu[i].style.width = "";
  }
  navbarBtn.onclick = showMenu;
}