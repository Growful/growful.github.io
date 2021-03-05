function gfddOnMouseOver(x) {
  for (i = 1; i < 6; i++) {
    if (i===x) {
      if (!document.getElementById("gfmyDropdown"+i).classList.contains("gfshow")) {
        document.getElementById("gfmyDropdown"+i).classList.toggle("gfshow");
      }
    }
    else {
      document.getElementById("gfmyDropdown"+i).classList.remove("gfshow");
    }
  }
}

function gfddOnClick(pageName) {
  window.location.href = '/' + pageName + '.html#top'
}

window.onclick = function(event) {
  if (!event.target.matches('.gfdropbtn')) {
    var dropdowns = document.getElementsByClassName("gfdropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('gfshow')) {
        openDropdown.classList.remove('gfshow');
      }
    }
  }
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("gfSlides");
  var dots = document.getElementsByClassName("slidedot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slideactive", "");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " slideactive";
  setTimeout(showSlides, 3500);     
}

