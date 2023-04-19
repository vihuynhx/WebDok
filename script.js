//SLIDESHOW MED JEANETTE//
var slideIndex = 1; // initialiser SlideIndex til 1
showSlides(slideIndex); //vis den første side

function nextSlides(n) // funktion bruges til at gå til næste eller forrige slide
{
  showSlides(slideIndex += n); //vis det næste eller forrige slide ved +
}

function showSlides(n) { //viser de forskellige slides
  var i;
  var slides = document.getElementsByClassName("mySlides"); //hent id i html
  var tilbageButton = document.querySelector(".tilbage"); //hent id i html
  
  if (n > slides.length) { //en if, som siger hvis slideIndex er større end antallet af slides 
    slideIndex = 1 //sæt slideIndex til 1 (start forfra)
  }
  if (n < 1) // hvis slideIndex er mindre end 1
  { 
    slideIndex = slides.length //sæt slideIndex til det sidste slide(alle mulige slides)
  }
  
  for (i = 0; i < slides.length; i++) // laver en loop igennem alle slides
  {
    slides[i].style.display = "none"; // skjul alle slides
  }
  
  slides[slideIndex-1].style.display = "block"; // Vis index slideIndex-1 (fordi arrays starter ved 0)
  
  // skjul tilbage-knappen på slide 1, og den vises fra slide 2 og 3
  if (slideIndex === 1) { 
    tilbageButton.style.display = "none"; //skjuler knappen
  } else {
    tilbageButton.style.display = "block"; //viser knappen
  }

  // skjul frem-knappen på slide 3
  if (slideIndex === slides.length) {
    document.querySelector(".frem").style.display = "none"; //skjuler knappen
  } else {
    document.querySelector(".frem").style.display = "block"; //viser knappen
  }
}

//GODE RÅD///

const rad1 = document.getElementById("rad1"); //henter id fra html
const rad2 = document.getElementById("rad2"); //henter id fra html
const rad3 = document.getElementById("rad3"); //henter id fra html
const rad4 = document.getElementById("rad4"); //henter id fra html

const hojrePil = document.getElementById("hojrePil");   //henter id fra html
const venstrePil = document.getElementById("venstrePil"); //henter id fra html

// Arrayet:
const carousel = [rad1, rad2, rad3, rad4]; //laver et array med 3 plaser (+0)

carousel[0].style.display = "block"; //vis slide 1
carousel[1].style.display = "none"; //skjul
carousel[2].style.display = "none"; //skjul
carousel[3].style.display = "none"; //skjul

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

