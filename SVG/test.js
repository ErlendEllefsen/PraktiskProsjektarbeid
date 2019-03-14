var letterTime = 2000;

var lineDrawing = anime({
  targets: "path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutCubic",
  duration: letterTime,
  delay: function(el, i) {
    return letterTime * i;
  },
  begin: function(anim) {
    var letters = document.querySelectorAll("path"),
      i;

    for (i = 0; i < letters.length; ++i) {
      letters[i].setAttribute("stroke", "black");
      letters[i].setAttribute("fill", "none");
    }
  },
  update: function(anim) {
    if (anim.currentTime >= letterTime) {
      document.querySelector(".letter-m").setAttribute("fill", "#e91e63");
    }
    if (anim.currentTime >= 2 * letterTime) {
      document.querySelector(".letter-o").setAttribute("fill", "#3F51B5");
    }
    if (anim.currentTime >= 3 * letterTime) {
      document.querySelector(".letter-n").setAttribute("fill", "#8BC34A");
    }
    if (anim.currentTime >= 4 * letterTime) {
      document.querySelector(".letter-t").setAttribute("fill", "#FF5722");
    }
    if (anim.currentTime >= 5 * letterTime) {
      document.querySelector(".letter-y").setAttribute("fill", "#795548");
    }
  },
  autoplay: false
});

document.querySelector(".play-drawing").onclick = lineDrawing.restart;
