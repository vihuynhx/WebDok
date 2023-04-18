var slideIndex = 1;
showSlides(slideIndex);

function nextSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var tilbageButton = document.querySelector(".tilbage");
  
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
  
  // skjul tilbage-knappen på slide 1, og den vises fra slide 2 og 3
  if (slideIndex === 1) { 
    tilbageButton.style.display = "none";
  } else {
    tilbageButton.style.display = "block";
  }
}