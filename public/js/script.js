//Menu Dropdown Mobile
const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");
const menuMobile = document.getElementById("menuMobile");

menuBtn.addEventListener("click", () => {
	menuMobile.classList.remove("translate-x-full");
});

closeMenu.addEventListener("click", () => {
	menuMobile.classList.add("translate-x-full");
});
