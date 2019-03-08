let playerDiv = document.querySelector('.goldenTicket');
let scoreDiv = document.querySelector('.sidebarRightScore');
let total = 0;

let score = function () {
    if (total < 20) {
        total += 10
        scoreDiv.textContent = total
        return total
    } else {
        scoreDiv.textContent = total
        console.log("Test: 1, 2, 3")
        location.reload()
    }
}

// const hitReaction = function () {
//     score += 10;
//     console.log(score)
// }

// aBall.addEventListener('click', hitReaction)

// let scoreDiv = document.querySelector('.js-score')
// let total = 0
// let incrementScore = function () {
  
//     if (total >= 90) {
//         document.querySelector('.level-winner').setAttribute('style', 'opacity: 1')
   
//     } else {
//         total += 10
//         scoreDiv.textContent = total

//     }
// }
// aBall.addEventListener('click', incrementScore)


window.addEventListener('keydown', moveLeftUpRight);
function moveLeftUpRight(evt) {
    let key_code = evt.which || evt.keyCode;
    switch (key_code) {
        case 37: //left arrow
            // console.log(key_code)
            charLeft();
            break;
        case 38: //up arrow
            // console.log(key_code)
            charUp();
            break;
        case 39: //right arrow
            // console.log(key_code)
            charRight();
            break;
    }
}
function charLeft() {
    playerDiv.style.left = parseInt(playerDiv.style.left) - 15 + 'px';
}
function charUp() {
    playerDiv.style.top  = parseInt(playerDiv.style.top) - 15 + 'px';
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
            clearInterval(id);
        } else {
            posit++;
            fall.style.top = posit + 'px';
            // console.log(parseInt(fall.style.left) > parseInt(playerDiv.style.left) - 75)
            if (parseInt(playerDiv.style.top) < parseInt(fall.style.top)
                && parseInt(fall.style.left) > parseInt(playerDiv.style.left)
                && parseInt(fall.style.left) < parseInt(playerDiv.style.left) + 75) {
                    console.log('Yum!')
                    score()
                }

                // console.log('boom', playerDiv.style.top, fall.style.top)
            // console.log(parseInt(fall.style.left), parseInt(playerDiv.style.left) - 75) 
            // console.log(parseInt(playerDiv.width))
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