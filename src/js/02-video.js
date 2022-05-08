import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');

const player = new Vimeo.Player(iframe);

player.setVolume(0);

setPlaybackPosition();

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {
   console.log(data.seconds);
    
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data.seconds));
}
   
function setPlaybackPosition() {
  
  const savedData = localStorage.getItem(STORAGE_KEY);
  console.log(savedData);
 
  try {
    const parseddData = JSON.parse(savedData);
    console.log(parseddData);
    
    if (savedData) {
  
      player.setCurrentTime(parseddData);
      player.play();
    }
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}
    


