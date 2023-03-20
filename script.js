const burger = document.querySelector(".burger_");
const navMenu = document.querySelector(".navMenu");
const social = document.querySelector(".social_");
const close = document.querySelector(".close_");

burger.addEventListener("click", () => {
    burger.classList.toggle("active")
    navMenu.classList.toggle("active")
    social.classList.toggle("active")
    close.classList.toggle("active")
})

document.querySelectorAll("li").forEach(n => n.addEventListener("click", () => {
    burger.classList.remove("active")
    navMenu.classList.remove("active")
    social.classList.remove("active")
}))

close.addEventListener("click", () => {
    navMenu.classList.remove("active")
    social.classList.remove("active")
})