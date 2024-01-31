const navbar = document.querySelector(".navbar");
const menuButtont = document.querySelector(".menu-button");

menuButtont.addEventListener("click", () => {
  navbar.classList.toggle("show-menu");
});
