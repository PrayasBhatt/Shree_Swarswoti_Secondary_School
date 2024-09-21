const carouselInner = document.getElementById('carouselInner');
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
let currentIndex = 0;

document.getElementById('nextSlide').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
});

document.getElementById('prevSlide').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

function updateCarousel() {
    const offset = currentIndex * -100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}