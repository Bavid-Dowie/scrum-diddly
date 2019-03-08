function Shape(x, y) {
    this.x=x;
    this.y=y;
}
Shape.toString = function() {
    return 'Shape at '+this.x+', '+this.y;
}
function Circle(x, y, r) {
    Shape.call(this, x, y);
    this.r = r;
}
Circle = new Shape();
Circl.toString = function() {
    
}

let playerDiv = document.querySelector('.goldenTicket');

window.addEventListener('keydown', moveLeftUpRight);
function moveLeftUpRight(evt) {
    let key_code = evt.which || evt.keyCode;
    switch (key_code) {
        case 37: //left arrow
        console.log(key_code)
            charLeft();
            break;
        case 38: //up arrow
        console.log(key_code)
            charUp();
            break;
        case 39: //right arrow
        console.log(key_code)
            charRight();
            break;
    }
}
function charLeft() {
    playerDiv.style.left = parseInt(playerDiv.style.left) - 25 + 'px';
    console.log("This variable is this:", playerDiv.style.left)
}
function charUp() {
    playerDiv.style.top = parseInt(playerDiv.style.top) - 25 + 'px';
    console.log("This variable is this:", playerDiv.style.top)
}
function charRight() {
    playerDiv.style.left = parseInt(playerDiv.style.left) + 25 + 'px';
    console.log("This variable is this:", playerDiv.style.left)
}

function fallingObject() {
    let fall = document.getElementById('fallingObj');
    let posit = 0; // Starts at top of screen
    const id = setInterval(frame,0); // Rate of falling object
    function frame() {
        if (posit == 750) {
            clearInterval(id);
        } else {
            posit++;
            fall.style.top = posit + 'px';
        }
    }
}