const {
  styler,
  delay,
  listen,
  pointer,
  value,
  tween,
  everyFrame,
  spring,
  easing } =
window.popmotion;

const BASE_SHADOW = '0px 1px 4px rgba(97, 115, 136, 0.2), 0px 2px 20px rgba(57, 71, 87, 0.16)';

const track = document.querySelector('.slider__track');
const thumb = document.querySelector('.slider__thumb');
const thumbStyler = styler(thumb);
let trackWidth = track.offsetWidth;
let thumbWidth = thumb.offsetWidth;

let thumbX = 0;
let shadowOffsets = [0, 0, 0];

const sliderX = value(0, v => {
  const xPos = v;

  shadowOffsets.forEach((_, i) => {
    delay((i + 1) * 20).start({
      complete: () => {
        shadowOffsets[i] = xPos;
      } });

  });

  thumbX = xPos;
});

// TODO: there's efficiency gains to be had here - e.g. stopping the updater on mouse up
everyFrame().start(() => {
  thumbStyler.set({
    x: thumbX,
    boxShadow: `${BASE_SHADOW},
			${shadowOffsets[0] - thumbX}px 0 0 #FF6AFF,
			${shadowOffsets[1] - thumbX}px 0 0 #3EE8FF,
			${shadowOffsets[2] - thumbX}px 0 0 #FFF500` });

});

listen(thumb, 'mousedown  touchstart').
start(() => {
  trackWidth = track.offsetWidth;
  thumbWidth = thumb.offsetWidth;

  pointer({ x: sliderX.get() }).
  pipe(({ x }) => Math.max(0, Math.min(trackWidth - thumbWidth, x))).
  start(sliderX);
});

listen(document, 'mouseup touchend').
start(() => {
  sliderX.stop();
});

listen(track, 'click').
start(e => {
  trackWidth = track.offsetWidth;
  thumbWidth = thumb.offsetWidth;

  let x = e.pageX - track.getBoundingClientRect().left - thumbWidth / 2;
  jumpTo(x);
});

function jumpTo(xPos) {
  spring({
    from: sliderX.get(),
    to: xPos,
    stiffness: 200,
    velocity: 3,
    mass: 1.2,
    damping: 20 }).
  start(sliderX);
}

if (document.querySelector('.PreviewHidden') != null) {
  tween({
    from: trackWidth * 0.1,
    to: trackWidth * 0.8,
    duration: 1800,
    ease: easing.anticipate,
    flip: Infinity }).
  start(sliderX);
}