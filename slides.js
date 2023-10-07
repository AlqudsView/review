 document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.add('active');

    const updateSlide = (direction) => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + direction + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    };

    document.getElementById('next').addEventListener('click', () => updateSlide(1));
    document.getElementById('prev').addEventListener('click', () => updateSlide(-1));
});
