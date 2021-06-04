let menuBtn = document.getElementById("responsive-menu-btn");
let mainMenu = document.getElementById("main-menu");
let flagMenu = false;
// menuBtn.addEventListener("click", function() {
//   alert("Si funciona");
// });

menuBtn.onclick = () => {
  if (flagMenu === false) {
    mainMenu.classList.add("open-menu-responsive");
    flagMenu = true;
  } else {
    mainMenu.classList.remove("open-menu-responsive");
    flagMenu = false;
  }
};
