{let playerDiv = document.querySelector('.goldenTicket');
let scoreDiv = document.querySelector('.sidebarRightScore');
let total = 0;

let score = function () {
    if (total < 50) {
        total += 10
    } else if (total === 50) {
        alert('hi')
    } 
    scoreDiv.textContent = total
}
window.addEventListener('keydown', moveLeftUpRight);
function moveLeftUpRight(evt) {
    let key_code = evt.which || evt.keyCode;
    switch (key_code) {
        case 37:
            charLeft();
            break;
        case 38:
            charUp();
            break;
        case 39:
            charRight();
            break;
        case 40:
            charDown();
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
function charDown() {
    playerDiv.style.top = parseInt(playerDiv.style.top) + 15 + 'px';
}

function collisionHit() {
    let fall = document.getElementById('fallingObj');
    let startItemDrop = 0;
    const fallRate = setInterval(frame, 0);
    function frame() {
        if (startItemDrop >= 750) {
            fall.style.top = 0;
            startItemDrop = 0;
        } else {
            startItemDrop++;
            fall.style.top = startItemDrop + 'px';
            if (parseInt(playerDiv.style.top) < parseInt(fall.style.top)
                && parseInt(fall.style.left) > parseInt(playerDiv.style.left)
                && parseInt(fall.style.left) < parseInt(playerDiv.style.left) + 85) {
                    fall.style.top = 0;
                    startItemDrop = 0;
                score()
            }
        }
    }
}


collisionHit()

}

const restartGame = function() {
    score()
    moveLeftUpRight()
    charLeft()
    charUp()
    charRight()
    charDown()
    collisionHit()
    frame()
}

// restartGame()