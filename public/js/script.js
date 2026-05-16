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

// DADOS DOS PROJETOS
const projects = {
	codeon: {
		title: "Codeon",

		images: [
			"./assets/img/digital-brain.webp",
			"./assets/img/grafo_obsidian.png",
		],

		versions: [
			{
				version: "Versão 1.0",
				subtitle: "Versão inicial do projeto",
				color: "green",

				description:
					"Primeira estrutura do projeto utilizando HTML, Tailwind e JavaScript.",

				features: [
					"Estrutura inicial responsiva",
					"Criação dos cards de projeto",
					"Sistema de modal",
				],
			},
		],
	},

	pricewatch: {
		title: "Price Watch",

		images: [
			"./assets/img/money_grafic.jpg",
			"./assets/img/analystics_dashboard.png",
		],

		versions: [
			{
				version: "Versão 1.0",
				subtitle: "Versão inicial do projeto",
				color: "green",

				description: "Projeto focado em monitoramento inteligente de preços.",

				features: [
					"Dashboard de analytics",
					"Sistema de alertas",
					"Monitoramento de preços",
				],
			},
			{
				version: "Versão 1.0",
				subtitle: "Versão inicial do projeto",
				color: "red",

				description: "Projeto focado em monitoramento inteligente de preços.",

				features: [
					"Dashboard de analytics",
					"Sistema de alertas",
					"Monitoramento de preços",
				],
			},
		],
	},
};

// MODAL
const modal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");

const modalTitle = document.getElementById("modalTitle");
const modalImages = document.getElementById("modalImages");
const modalVersions = document.getElementById("modalVersions");

// ABRIR MODAL
document.querySelectorAll("[data-project]").forEach((btn) => {
	btn.addEventListener("click", () => {
		const projectName = btn.dataset.project;
		const project = projects[projectName];

		// título
		modalTitle.textContent = project.title;

		// imagens
		modalImages.innerHTML = `
			<img
				src="${project.images[0]}"
				class="w-[45%] rounded-xl border border-white/20"
			/>

			<div class="h-32 border-l border-dashed border-white/30"></div>

			<img
				src="${project.images[1]}"
				class="w-[45%] rounded-xl border border-white/20"
			/>
		`;

		// versões
		modalVersions.innerHTML = "";

		project.versions.forEach((version, index) => {
			const versionCard = document.createElement("div");

			versionCard.className = `
				versionCard
				border
				border-${version.color}-400/40
				rounded-2xl
				overflow-hidden
				mb-5
				bg-zinc-800/40
			`;

			versionCard.innerHTML = `
				<button
					class="versionToggle w-full flex items-center justify-between px-5 py-4 text-left"
				>
					<div>
						<h3 class="text-xl font-semibold text-${version.color}-300">
							${version.version}
						</h3>

						<p class="text-sm text-white/50">
							${version.subtitle}
						</p>
					</div>

					<span
						class="text-2xl text-${version.color}-300 transition-transform duration-300"
					>
						⌄
					</span>
				</button>

				<div
					class="versionContent max-h-0 overflow-hidden transition-all duration-500"
				>
					<div class="px-5 pb-5">
						<p class="text-white/70 leading-relaxed mb-4">
							${version.description}
						</p>

						<ul class="space-y-2 text-sm text-white/60">
							${version.features.map((feature) => `<li>• ${feature}</li>`).join("")}
						</ul>
					</div>
				</div>
			`;

			modalVersions.appendChild(versionCard);

			// abre primeira versão automaticamente
			if (index === 0) {
				const content = versionCard.querySelector(".versionContent");

				const arrow = versionCard.querySelector(".versionToggle span");

				content.style.maxHeight = content.scrollHeight + "px";

				arrow.style.transform = "rotate(0)";
			}
		});

		// listeners das versões
		const versionToggles = document.querySelectorAll(".versionToggle");

		versionToggles.forEach((toggle) => {
			const content = toggle.parentElement.querySelector(".versionContent");

			const arrow = toggle.querySelector("span");

			toggle.addEventListener("click", () => {
				if (content.style.maxHeight && content.style.maxHeight !== "0px") {
					content.style.maxHeight = "0px";

					arrow.style.transform = "rotate(0deg)";
				} else {
					content.style.maxHeight = content.scrollHeight + "px";

					arrow.style.transform = "rotate(180deg)";
				}
			});
		});

		// abre modal
		modal.classList.remove("hidden");
		modal.classList.add("flex");

		setTimeout(() => {
			modalContent.classList.remove("scale-95", "opacity-0");
		}, 10);
	});
});

// FECHAR MODAL
closeModal.addEventListener("click", closeModalFn);

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
