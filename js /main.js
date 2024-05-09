const carouselContainer = document.querySelector(".carousel-container");
const carouselBoxes = document.querySelectorAll(".carousel-box");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
const totalBoxes = carouselBoxes.length;
const boxWidth = carouselBoxes[0].offsetWidth;

function showBox(index) {
	const offset = -index * boxWidth;
	carouselContainer.style.transform = `translateX(${offset}px)`;
}

function nextBox() {
	currentIndex = (currentIndex + 1) % totalBoxes;
	showBox(currentIndex);
}

function prevBox() {
	currentIndex = (currentIndex - 1 + totalBoxes) % totalBoxes;
	showBox(currentIndex);
}

nextBtn.addEventListener("click", nextBox);
prevBtn.addEventListener("click", prevBox);

// Optional: Auto slide
// setInterval(nextBox, 3000); // Uncomment to enable auto slide
