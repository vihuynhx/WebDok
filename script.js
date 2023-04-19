//SLIDESHOW MED JEANETTE//
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

  // skjul frem-knappen på slide 3
  if (slideIndex === slides.length) {
    document.querySelector(".frem").style.display = "none";
  } else {
    document.querySelector(".frem").style.display = "block";
  }
}

//GODE RÅD///

const rad1 = document.getElementById("rad1");
const rad2 = document.getElementById("rad2");
const rad3 = document.getElementById("rad3");
const rad4 = document.getElementById("rad4");

const hojrePil = document.getElementById("hojrePil");
const venstrePil = document.getElementById("venstrePil");

// Arrayet:
const carousel = [rad1, rad2, rad3, rad4];

carousel[0].style.display = "block";
carousel[1].style.display = "none";
carousel[2].style.display = "none";
carousel[3].style.display = "none";

// Knapper:
hojrePil.addEventListener("click", naesteBillede);
venstrePil.addEventListener("click", forrigeBillede);

// Funktioner:
function naesteBillede(){
    carousel[0].style.display = "none"; // Skjul den viste
    carousel.push(carousel[0]); // Put den første ind til sidst
    carousel.shift(); // Fjern den første og flyt alle en ned
    carousel[0].style.display = "block"; // Vis den der nu er først
}

function forrigeBillede(){
    carousel[0].style.display = "none";
    carousel.unshift(carousel[3]);
    carousel.pop();
    carousel[0].style.display = "block";
}

