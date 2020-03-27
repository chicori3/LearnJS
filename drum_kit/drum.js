window.addEventListener("keydown", function(a) {
  const audio = this.document.querySelector(`audio[data-key="${a.keyCode}"]`);
  if (!audio) return; // stop
  audio.currentTime = 0;
  audio.play();
});
