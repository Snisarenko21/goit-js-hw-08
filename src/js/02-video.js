import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');

const player = new Vimeo.Player(iframe);

player.setVolume(0);
    
player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {
   console.log(data.seconds);
    
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data.seconds));
}
   
player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
    
