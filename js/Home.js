document.addEventListener("DOMContentLoaded", function () {
  const myslide = document.querySelectorAll(".section1-slide");
  const dot = document.querySelectorAll(".dot");
  let counter = 0;
  slidefun(counter);
  let timer = setInterval(autoslide, 3500);

  function autoslide() {
    counter = (counter + 1) % myslide.length;
    slidefun(counter);
  }

  function currentSlide(n) {
    counter = n;
    slidefun(counter);
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoslide, 5000);
  }

  function slidefun(n) {
    for (let i = 0; i < myslide.length; i++) {
      myslide[i].style.display = "none";
    }
    for (let i = 0; i < dot.length; i++) {
      dot[i].classList.remove("active");
    }
    myslide[counter].style.display = "block";
    dot[counter].classList.add("active");
  }

  for (let i = 0; i < dot.length; i++) {
    dot[i].addEventListener("click", function () {
      currentSlide(i);
    });
  }
});
