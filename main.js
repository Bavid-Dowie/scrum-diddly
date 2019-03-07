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
    let posit = 0;
    const id = setInterval(frame,10);
    function frame() {
        if (posit == 300) {
            clearInterval(id);
        } else {
            posit++;
            fall.style.top = posit + 'px';
            fall.style.left = posit + 'px';
        }
    }
}