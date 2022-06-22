import MediaPlayer from "./MediaPlayer";
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';

const video = document.querySelector("video");
const playButton: HTMLElement = document.querySelector("#playButton");
const muteButton: HTMLElement = document.querySelector("#muteButton");

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