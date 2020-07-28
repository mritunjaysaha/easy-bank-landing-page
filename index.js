const btn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close__btn");
const menu = document.querySelector("#mobile__menu");

btn.addEventListener("click", () => {
    btn.classList.add("disable");
    closeBtn.classList.remove("disable");
    menu.classList.remove("disable");
});

closeBtn.addEventListener("click", () => {
    btn.classList.remove("disable");
    closeBtn.classList.add("disable");
    menu.classList.add("disable");
});
