const video = document.querySelector("video");
const boton = document.querySelector("button");

function MediaPlayer(config) {
  this.media = config.el;
}

MediaPlayer.prototype.play = function () {
  this.media.play();
};

MediaPlayer.prototype.pause = function () {
  this.media.pause();
};

MediaPlayer.prototype.getStatus = function () {
  return this.media.paused;
};

const player = new MediaPlayer({ el: video });
boton.onclick = () => {
  if (player.getStatus()) {
    player.play();
  } else {
    player.pause();
  }
};
