import Player from '@vimeo/player';
import { throttledSetItem } from './throttled-set-item.js';

const playbackTimeKey = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const playbackTime = localStorage.getItem(playbackTimeKey);

if (!!playbackTime) {
  const t = parseFloat(playbackTime);
  if (!isNaN(t)) {
    player.setCurrentTime(t);
  }
}

player.on('timeupdate', function() {
  player.getCurrentTime().then(value => {
    throttledSetItem(playbackTimeKey, value.toString());
  });
});
