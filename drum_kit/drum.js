const keys = document.querySelectorAll(".key");

function playSound(a) {
  const audio = document.querySelector(`audio[data-key="${a.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${a.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.toggle("playing");
}

function removeTransition(a) {
  if (a.propertyName !== "transform") return;
  this.classList.remove("playing");
}

keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
