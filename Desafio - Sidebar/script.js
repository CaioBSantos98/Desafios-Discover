var sidebar = document.getElementById("sidebar");

var searchContainer = document.getElementById("search-container");

var logotype = document.getElementById("logotype-container");

var sidebarBtn = document.getElementById("sidebarBtn");

var logout = document.getElementById("logout-content");

var logoutBtn = document.getElementById("logoutBtn");

var sidebarList = document.getElementById("sidebarList");

var searchText = document.getElementById("searchText");

var dashboardText = document.getElementById("dashboardText");

var petsText = document.getElementById("petsText");

var clientesText = document.getElementById("clientesText");

var vetsText = document.getElementById("vetsText");

var ajustesText = document.getElementById("ajustesText");

var profile = document.getElementById("profile-container");

function openSidebar() {
  sidebar.style.width = "250px";
  sidebarBtn.style.right = "16px";
  logotype.style.display = "block";
  logout.style.width = "250px";
  logoutBtn.style.right = "14px";
  sidebarBtn.onclick = closeSidebar;
  searchContainer.style.width = "212px";
  searchText.style.opacity = "1";
  searchText.style.width = "auto";
  searchText.style.margin = "5px 0 0 13px";
  dashboardText.style.opacity = "1";
  dashboardText.style.width = "172px";
  petsText.style.opacity = "1";
  petsText.style.width = "172px";
  clientesText.style.opacity = "1";
  clientesText.style.width = "172px";
  vetsText.style.opacity = "1";
  vetsText.style.width = "172px";
  ajustesText.style.opacity = "1";
  ajustesText.style.width = "172px";
  profile.style.opacity= "1";
  profile.style.width= "150px";
}

function closeSidebar() {
  sidebar.style.width = "78px";
  sidebarBtn.style.right = "27px";
  logout.style.width = "78px";
  logotype.style.display = "none";
  logoutBtn.style.right = "27px";
  sidebarBtn.onclick = openSidebar;
  searchContainer.style.width = "35px";
  searchText.style.opacity = "0";
  searchText.style.width = "0";
  searchText.style.margin = "5px 0 0 0";
  dashboardText.style.opacity = "0";
  petsText.style.opacity = "0";
  dashboardText.style.width = "0";
  petsText.style.width = "0";
  clientesText.style.opacity = "0";
  clientesText.style.width = "0";
  vetsText.style.opacity = "0";
  vetsText.style.width = "0";
  ajustesText.style.opacity = "0";
  ajustesText.style.width = "0";
  profile.style.opacity= "0";
  profile.style.width= "0";
}
