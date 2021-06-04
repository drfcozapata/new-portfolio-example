// ESTE ARCHIVO NO LO HEMOS VISTO

let images = document.getElementById("images").offsetTop;
let link = document.getElementById("link-pruebas");

document.addEventListener("scroll", function() {
  if (images < window.scrollY) {
    link.style.opacity = "1";
    link.setAttribute("class", "animated-link");
  }
});
