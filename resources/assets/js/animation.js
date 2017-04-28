var x=95,y=50;

function drawCircle(x,y) {
    var c = document.getElementById("animation");
    if (c) {
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(x,y,40,0,2*Math.PI);
        ctx.stroke();
    } else {
        console.log('false')
    }
}

function init() {
    drawCircle(95,50)
}

// $(document).ready

var update = function update() {
    x++;
    y++;
    console.log('x:' + x)
    console.log('y:' + y)
    drawCircle(x,y)
}

document.addEventListener("DOMContentLoaded", function(event) {
    init()

    setInterval(update,35/1000)

});