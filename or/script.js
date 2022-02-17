// Прослушка события смены ориентации
let box = document.querySelector('.box');
let lines = box.querySelectorAll('.line');
let out = "";
var computedStyle;

window.addEventListener("orientationchange", function() {
    var relWidths = this.innerWidth / this.outerWidth
    var relHeights = this.innerHeight / this.outerHeight
    //var s = 'resize: relWidths=' + relWidths + ' relHeights=' + relHeights;
    var s = 'resize: outerWidths=' + this.outerWidths + ' outerHeights=' + this.outerHeights;
    s = ' orientation=' + this.orientation;
    

    //console.log(s)
    let out=s;
	box.style.height='100%';
	box.style.width='100%';
    computedStyle = window.getComputedStyle(box, null);
    out+="-"+computedStyle['width']+':'+computedStyle['height'];
    
    lines[0].innerHTML = out;

}, false);

