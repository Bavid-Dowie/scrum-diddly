let playerDiv = document.querySelector('.goldenTicket');
let scoreDiv = document.querySelector('.sidebarRightScore');
let total = 0;

let score = function () {
    if (total < 50) {
        total += 10
        scoreDiv.textContent = total
        console.log(total)
    } else {
        scoreDiv.textContent = total
        return total
    }
}
window.addEventListener('keydown', moveLeftUpRight);
function moveLeftUpRight(evt) {
    let key_code = evt.which || evt.keyCode;
    switch (key_code) {
        case 37: //left arrow
            charLeft();
            break;
        case 38: //up arrow
            charUp();
            break;
        case 39: //right arrow
            charRight();
            break;
    }
}
function charLeft() {
    playerDiv.style.left = parseInt(playerDiv.style.left) - 15 + 'px';
}
function charUp() {
    playerDiv.style.top = parseInt(playerDiv.style.top) - 15 + 'px';
}
function charRight() {
    playerDiv.style.left = parseInt(playerDiv.style.left) + 15 + 'px';
}

function collisionHit() {
    let fall = document.getElementById('fallingObj');
    let posit = 0; // Starts at top of screen
    const id = setInterval(frame, 0); // Rate of falling object
    function frame() {
        if (posit >= 750) {
        } else {
            posit++;
            fall.style.top = posit + 'px';
            if (parseInt(playerDiv.style.top) < parseInt(fall.style.top)
                && parseInt(fall.style.left) > parseInt(playerDiv.style.left)
                && parseInt(fall.style.left) < parseInt(playerDiv.style.left) + 75) {
                // console.log('Yum!')
                    fall.style.top = 0;
                    posit = 0;
                // clearInterval(id);
                console.log('test')
                score()
            }
        }
    }
}

collisionHit()




                // let playerPosition = document.querySelector('#charlieBucket').getBoundingClientRect()
// console.log(playerPosition)
// let objectOne      = document.querySelector('#fallingObj').getBoundingClientRect()
// console.log(objectOne)

/* Tonight:
Points Count
Restart */