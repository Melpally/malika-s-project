//Slideshow implementation
let slideIndex = 1;
carousel(slideIndex);

//Previous, next button functions
function addSlides(n) {
  carousel(slideIndex += n);
}

function currentSlide(n) {
  carousel(slideIndex = n);
}
//The main carousel function that changes the pictures
function carousel(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";

}

