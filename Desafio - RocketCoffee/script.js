var itemsToHidden = [document.getElementById("description-container"), document.getElementById("getCoffeeBtn"), document.getElementById("title-container"), document.getElementById("image-container"), document.getElementById("menuBtn")];

var itemsToShow = [document.getElementById("menu-container"), document.getElementById("closeMenuBtn")];

function openMenu() {
  for (var i = 0; i < itemsToHidden.length; i++) {
      itemsToHidden[i].style.display = "none";
  }
  for (var j = 0; j < itemsToShow.length; j++) {
    itemsToShow[j].style.display = "block";  
  }
}
function closeMenu() {
  for (var i = 0; i < itemsToHidden.length; i++) {
      itemsToHidden[i].style.display = "";
  }
  for (var j = 0; j < itemsToShow.length; j++) {
    itemsToShow[j].style.display = "";  
  }
}