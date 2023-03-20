const burger = document.querySelector(".burger_");
const navMenu = document.querySelector(".navMenu");

burger.addEventListener("click", () => {
    burger.classList.toggle(".active")
    navMenu.classList.toggle(".active")
})