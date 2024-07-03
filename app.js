//selecciones para barra de navegación burger
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav"); 


burger.addEventListener("click", () => {
     ul.classList.toggle("show");
});

//cerrar el menu de burger
const navLink = document.querySelectorAll("nav ul");

navLink.forEach((link) => 
     link.addEventListener("click", () => {
          ul.classList.remove("show");
     })
);

//seleccion de desplazar hacia arriba 
const scrollUp = document.querySelector("#scroll-up");

//funcionalidad de desplazar hacia arriba
scrollUp.addEventListener("click", () => {
     window.scrollTo({
    top: 0,
     left: 0, 
     behavior:"smooth",
});
});