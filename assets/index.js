import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.ts';

const video = document.querySelector("video");
const playButton = document.querySelector("#playButton");
const muteButton = document.querySelector("#muteButton");

const player = new MediaPlayer({ 
  el: video,
  plugins: [
     new AutoPlay(),
     new AutoPause()
  ] 
});


playButton.onclick = () => { player.togglePlay() };
muteButton.onclick = () => { player.toggleSound() };

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(new URL('/sw.js', import.meta.url),{type:'module'})
                         .catch(e => {console.log(e.message)});
}