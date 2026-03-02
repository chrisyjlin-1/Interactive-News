// repo code from class, changed code to add all of my slides to it
let current = 1;
document.onclick = function(event) {
      if (event.clientX > window.innerWidth / 2) {
        // right side clicked - go forward
        current = current + 1;
        if (current > 10) current = 1;
      } else {
        // left side clicked - go backward  
        current = current - 1;
        if (current < 1) current = 10;
      }
      
      // hide all, show current
      document.getElementById('slide1').style.display = 'none';
      document.getElementById('slide2').style.display = 'none';
      document.getElementById('slide3').style.display = 'none';
      document.getElementById('slide4').style.display = 'none';
      document.getElementById('slide5').style.display = 'none';
      document.getElementById('slide6').style.display = 'none';
      document.getElementById('slide7').style.display = 'none';
      document.getElementById('slide8').style.display = 'none';
      document.getElementById('slide9').style.display = 'none';
      document.getElementById('slide10').style.display = 'none';
      document.getElementById('slide' + current).style.display = 'flex';}



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls (comment by open source)
function plusSlides(n) {
  showSlides(slideIndex += n);
  event.stopPropagation();
}

// Thumbnail image controls (comment by open source)
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}