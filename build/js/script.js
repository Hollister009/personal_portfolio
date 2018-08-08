// Select DOM items
const menuBtn = document.querySelector(".navbar-toggle");
const menu = document.querySelector("#navbar");
const navItems = document.querySelectorAll(".nav-item");

// Set initial State Of Menu
let showMenu = false;

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    //Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    //Set Menu State
    showMenu = false;
  }
}

//Add event Listener
menuBtn.addEventListener('click', toggleMenu);
