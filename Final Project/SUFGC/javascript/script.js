/*
[1] Unknown, 'function showSlides(n)', 2019. Borrowed/Inspired code.
W3Schools
URL: https://www.w3schools.com/howto/howto_js_slideshow.asp 
*/
let index = 1;
showSlides(index);
// Thumbnail image controls
function currentSlide(n) {
    showSlides(index = n);
}
window.addEventListener("load", showSlides(index));
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("content_block");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        index = 1;
    }
    if (n < 1) {
        index = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index - 1].style.display = "block";
    dots[index - 1].className += " active";
}
function previousSlide() {
    index--;
    showSlides(index);
}
function nextSlide() {
    index++;
    showSlides(index);
}