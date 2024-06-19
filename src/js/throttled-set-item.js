import throttle from 'lodash.throttle';

export const throttledSetItem = throttle(function(key, value) {
  localStorage.setItem(key, value);
}, 1000);
