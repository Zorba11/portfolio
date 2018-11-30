//Select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const cube = document.querySelector("#cubeDiv");

const navItems = document.querySelectorAll(".nav-item");

//Set Initial state of the menu.

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

$(document).ready(function() {
  $(cube).click(function() {
    $(this).hide("blind", { direction: "vertical" }, 1000);
  });
});

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close"); //.classList.add() is a vanilla JS function used to add a class
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    document.getElementById("home").style.visibility = "hidden";

    //navItems used querySelecterAll() inorder to call all the three nav-item so, we are using forEach() here,which is a higher order array method

    navItems.forEach(item => item.classList.add("show"));

    //Set menu state.
    showMenu = true;
  } else {
    menuBtn.classList.remove("close"); //.classList.remove() is a vanilla JS function used to remove class
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    document.getElementById("home").style.visibility = "visible";

    //navItems used querySelecterAll() inorder to call all the three nav-item so, we are using forEach() here,which is a higher order array method

    navItems.forEach(item => item.classList.remove("show"));

    //Set menu state.
    showMenu = false;
  }
}

// function cubeExplode() {
//   $(document).ready(function() {
//     $("#boxDiv").hide("explode", { pieces: 16 }, 2000);
//   });
// }
