import MediaPlayer from "./MediaPlayer.js";

const video = document.querySelector("video");
const boton = document.querySelector("button");

const player = new MediaPlayer({ el: video });
boton.onclick = () => {
  if (player.getStatus()) {
    player.play();
  } else {
    player.pause();
  }
};
