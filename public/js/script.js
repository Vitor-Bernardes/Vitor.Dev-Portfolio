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

//Cards Porjects
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");

// abre modal ao clicar no card
document.querySelectorAll("[data-modal]").forEach((btn) => {
	btn.addEventListener("click", () => {
		modal.classList.remove("hidden");
		modal.classList.add("flex");

		// animação suave
		setTimeout(() => {
			modalContent.classList.remove("scale-95", "opacity-0");
		}, 10);
	});
});

// fechar pelo botão
closeModal.addEventListener("click", () => {
	closeModalFn();
});

// fechar clicando fora
modal.addEventListener("click", (e) => {
	if (e.target === modal) {
		closeModalFn();
	}
});

function closeModalFn() {
	modalContent.classList.add("scale-95", "opacity-0");

	setTimeout(() => {
		modal.classList.add("hidden");
		modal.classList.remove("flex");
	}, 200);
}
