const menuIcon = document.querySelector(".menuIcon");
const menuList = document.querySelector(".sm-view");
menuIcon.addEventListener("click", function () {
    menuList.classList.toggle("show");
})