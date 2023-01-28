const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");
const boxes = document.querySelector(".directors");

menu.onclick = () => nav.classList.add("clicked");
close.onclick = () => nav.classList.remove("clicked");

if (boxes != null) {
    boxes.querySelectorAll("button").forEach((btn, index) => {
        btn.onclick = function () {
            btn.parentElement.parentElement.style.setProperty("transform", `rotateY(${(index % 2 == 0)? -180 : 0}deg)`);
        };
    });
}