// Прослушка события смены ориентации
//let lines = box.querySelectorAll('.line');
let out = "";
//var computedStyle;

window.addEventListener("orientationchange", function() {
    var relWidths = this.innerWidth / this.outerWidth
    var relHeights = this.innerHeight / this.outerHeight
    //var s = 'resize: relWidths=' + relWidths + ' relHeights=' + relHeights;
    var s = 'css size: outerWidth=' + this.outerWidth + ' outerHeight=' + this.outerHeight;
    s+= ' orientation=' + this.orientation;
    

    //console.log(s)
    let out=s;
	
    //computedStyle = window.getComputedStyle(box, null);
    
    //lines[0].innerHTML = out;

}, false);

