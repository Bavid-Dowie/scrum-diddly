
function gameHeight() {
    var gameSpace = document.getElementById("grid");
    var txt = "Height including padding: " + gameSpace.clientHeight + "px<br>";
    txt += "Width including padding: " + gameSpace.clientWidth + "px";
    document.getElementById("grid").innerHTML = txt;
    console.log(txt)
}

let ticketWinner = document.body.getElementsByClassName('goldenTicket');

ticketWinner.click = function(e) {
    switch (e.keyCode) {
        case 37:
            console.log('left');
            break;
        case 38:
            console.log('up');
            break;
        case 39:
            console.log('right');
            break;
        case 40:
            console.log('down');
            break;
    }
    console.log(e)
};
