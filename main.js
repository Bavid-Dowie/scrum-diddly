let playerDiv = document.querySelector('.goldenTicket');

window.addEventListener('keydown', moveLeftRight);
function moveLeftRight(evt) {
    let key_code = evt.which || evt.keyCode;
    switch (key_code) {
        case 37: //left arrow
            charLeft();
            break;
        case 39: //right arrow
            charRight();
            break;
    }
}
function charLeft() {
    playerDiv.style.left = parseInt(playerDiv.style.left) - 15 + 'px';
}
function charRight() {
    playerDiv.style.left = parseInt(playerDiv.style.left) + 15 + 'px';
    console.log("This variable is this:", playerDiv.style.left)
}

