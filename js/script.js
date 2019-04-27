(function(){

    var parallax = document.querySelectorAll("#myCarousel"),
        speed = 0.5;

    window.onscroll = function(){
      [].slice.call(parallax).forEach(function(el,i){

        var windowYOffset = window.pageYOffset,
            elBackgrounPos = "-" + (windowYOffset * speed) + "px";

        el.style.top = elBackgrounPos;

      });
    };

  })();