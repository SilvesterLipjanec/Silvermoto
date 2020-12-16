/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("navbar")[0].style.top = "0";
  } else {

    if(document.getElementById("toggle-nav").getAttribute("aria-expanded") == "true"){
        document.getElementById("toggle-nav").click();
    }
    
    document.getElementsByClassName("navbar")[0].style.top = "-70px";
    if(currentScrollPos <= 0){
      document.getElementsByClassName("navbar")[0].style.top = "0";
    }
  }
  prevScrollpos = currentScrollPos;
}
