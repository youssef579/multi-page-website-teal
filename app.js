const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");

menu.onclick = () => nav.classList.add("clicked");
close.onclick = () => nav.classList.remove("clicked");