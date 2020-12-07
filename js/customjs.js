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

var cycleIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("gfcycle");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  cycleIndex++;
  if (cycleIndex > x.length) {cycleIndex = 1}
  x[cycleIndex-1].style.display = "block";
  setTimeout(carousel, 2000);
}