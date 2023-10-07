function ShowBox() {
  var overlay = document.getElementById("section3");
  overlay.style.display = "block";
  var overlay = document.getElementById("section3-overlay1");
  overlay.style.display = "block";
}

function ResetPass() {
  let div = document.getElementById("section3-overlay1");
  div.style.display = "none";
  document.getElementById("section3-overlay2").style.display = "block";
}
function HideBox() {
  var overlay = document.getElementById("section3");
  overlay.style.display = "none";
}
function moveToNextInput(currentInput, nextInputId) {
  if (currentInput.value.length >= currentInput.maxLength) {
    document.getElementById(nextInputId).focus();
  }
}
