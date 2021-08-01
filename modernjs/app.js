import Clock from './clock.js';
import ExtendedClock from './extended-clock.js';
let clock = new Clock({
  template: 'h:m:s',
});
clock.start();

/* 만드신 클래스는 아래와 같이 동작해야합니다. */

let lowResolutionClock = new ExtendedClock({
  template: 'h:m:s',
  precision: 10000,
});

lowResolutionClock.start();
