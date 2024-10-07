let slideIndex = 0;
showSlides(slideIndex);

// Function to show slides
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

// Function for next/previous controls
function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}