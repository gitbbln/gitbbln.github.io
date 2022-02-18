var cstyle = {}
var style = {}
var colors = ['magenta', 'orange', 'cyan', 'yellow'];
var ht_arr = [];

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function randomFloor(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function prepareAnim() {
/*
px.classList.add('py');
py.classList.add('py');
*/
apt.classList.add('at-point');
pt.classList.add('point');

//at.style.top = (at.style.top - 5) + 'px';

//apt.style.top = (apt.style.top - 5) + 'px';
container.style.height = sunSize + 'px';
container.style.width = sunSize + 'px';
ct.style.height = container.style.height;
ct.style.width = container.style.width;

container.appendChild(apt);
cstyle.apt = getComputedStyle(apt)
//apt.style.left = (cstyle.apt.left - 5) + 'px';
style.apt = {};

style.apt.left = cstyle.apt.left;
style.apt.left = style.apt.left.replace('px', '');
width = cstyle.apt.width;
width = width.replace('px', '');
style.apt.left = Number(style.apt.left) - width / 2;
apt.style.left = style.apt.left + 'px';

style.apt.top = cstyle.apt.top;
style.apt.top = style.apt.top.replace('px', '');
height = cstyle.apt.height;
height = height.replace('px', '');
style.apt.top = Number(style.apt.top) - height / 2;
apt.style.top = style.apt.top + 'px';
/*
console.log('container.top=', container.style.top);
//console.log(cstyle.apt);
console.log('cstyle.apt.x=', cstyle.apt.y);
console.log('style.apt.left=', style.apt.top);
console.log('style.width=', width);
console.log('py.style.width = ' + py.style.width);

ax = 50
ay = 50;

py.style.width = '1px';
py.style.height = 50 + '%';
py.style.background = colors[i / 120];
//py.style.border = "1px solid " + colors[i / 120];


px.style.height = '1px';
px.style.width = 50 + '%';
px.style.background = colors[i / 120];

container.appendChild(px);
container.appendChild(py);
*/
t = 1;
var ray = 9;
while (i < 360) {
  var r = (Math.PI / 180) * i;
  //console.log('radian=', r);

  //x = 2 * y;

  //var pt = $('<div>');
  /*var ht = $('<div>').attr('class', 'ht');*/
  var ht = document.createElement('div');
  ht.appendChild(pt);
  ht.classList.add('ht');
  ht.style.background = colors[t];
  ht.style.width = randomInteger(sunSize, 300) + 'px';

  //pt.attr('class', 'point');
  //pt.appendChild(ht);
  // 
  var angle = ray * t;
  //cx = randomInteger(0, cx);
  //at.style.left = (ax) + 'px';
  //at.style.top = (ay) + 'px';

  //var cx = ((x - ax) * Math.cos(r)) - ((y - ay) * Math.sin(r));
  //var cy = ((y - ay) * Math.cos(r)) + ((x - ax) * Math.sin(r));


  ht.style.transform = 'rotate(' + angle + 'deg)';


  //console.log('pt.style.transform=', pt.style.transform);


  //px.style.border = "1px solid " + colors[i / 120];


  //ht.style.left = 0 + 'px';
  //ht.style.top = 0 + 'px';

  container.appendChild(ht);
  /*
  console.log('cx=', cx, 'cy=', cy);
  console.log('pt.style.left=', pt.style.left)
  console.log('pt.style.top=', pt.style.top)
  */
  //container.appendChild(py);
  ht_arr[t] = ht


  //
  i += ray;
  t++;
}

var start = 1000;
}

function step(timestamp) {
  if (!start) start = timestamp;
  //console.log('timestamp=', timestamp);
  var progress = timestamp - start;
  //console.log('progress=', progress);
  ht_arr.forEach((item) => {
    item.style.width = randomInteger(sunSize, 320) + 'px';

  });

  setTimeout(step, 2550);


}

var container = document.querySelector('.container');
var sunSize = 100;
var i = 0,
  x = 0,
  y = 0,
  t = false;
var body = document.querySelector('body');
body.style.background = 'blue';

var ct = document.createElement('div');
var pt = document.createElement('div');
var apt = document.createElement('div');
var px = document.createElement('div');
var py = document.createElement('div');

ct.classList.add('container-above');
ct.style.height = container.style.height;
ct.style.width = container.style.width;

ct.style.top = container.style.top;
ct.style.left = container.style.left;

container.appendChild(ct);
//alert('1');
prepareAnim();
window.requestAnimationFrame(step);

function updateTransition() {
  var els = document.querySelectorAll(".parent > div[class]");
  for (var c = els.length, i = 0; i < c; i++) {
    if (i == c - 1) els[i].classList.toggle("box1");
  }
};
var intervalID = window.setInterval(updateTransition, 2400);
updateTransition()

//0 120 240 360
//console.log('t=', (t - 1));