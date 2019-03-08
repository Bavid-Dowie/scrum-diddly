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
        if (posit >= 750) {
            clearInterval(id);
        } else {
            posit++;
            fall.style.top = posit + 'px';
            // console.log(parseInt(fall.style.left), parseInt(playerDiv.style.left) - 75) 
            // console.log(parseInt(playerDiv.width))




            console.log(parseInt(fall.style.left) > parseInt(playerDiv.style.left) - 75)
            if (parseInt(playerDiv.style.top) < parseInt(fall.style.top) 
            && parseInt(fall.style.left) > parseInt(playerDiv.style.left) 
                    && parseInt(fall.style.left) < parseInt(playerDiv.style.left) + 75) {
                console.log('boom', playerDiv.style.top, fall.style.top)

            }

            // console.log(playerDiv.style.top)
        }
    }
}
fallingObject()
// setInterval(fallingObject(), 3000)


// Attempts at collision detection - all failed

let playerPosition = document.querySelector('#charlieBucket').getBoundingClientRect()
console.log(playerPosition)
// let playerTop = playerPosition.top;
// let playerHeight = playerPosition.height;
// let playerLeft = playerPosition.left;
// let playerWidth = playerPosition.width;
let objectOne = document.querySelector('#fallingObj').getBoundingClientRect()
console.log(objectOne)
// let objectOneTop = objectOne.top;
// let objectOneHeight = objectOne.height;
// let objectOneLeft = objectOne.left;
// let objectOneWidth = objectOne.width;
// function isCollide(playerPosition, objectOne) {
//     let player = playerPosition;
//     let objec1 = objectOne;
// if ()
//     return !(
//         ((player.top + player.height) < (objec1.top)) ||
//         (player.top > (objec1.top + objec1.height))   ||
//         ((player.left + player.width) < objec1.left)  ||
//         (player.left > (objec1.left + objec1.width))
//     );
// }