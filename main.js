
// function gameHeight() {
//     var gameSpace = document.getElementById("grid");
//     var txt = "Height including padding: " + gameSpace.clientHeight + "px<br>";
//     txt += "Width including padding: " + gameSpace.clientWidth + "px";
//     document.getElementById("grid").innerHTML = txt;
//     console.log(txt)
// }

/*const downKeys = new Set();
let x = 0;
let y = 0;
const ticketHolder = document.getElementsByClassName('goldenTicket');
document.addEventListener('keydown', event => downKeys.add(event.key));
console.log(ticketHolder)
document.addEventListener('keyup'  , event => downKeys.delete(event.key));

function update() {
    function downKeys(key) {return downKeys.has(key)}
    // function isDown(key) {return downKeys.has(key)}
    const gt = ticketHolder.style;
    // const g  = isDown('Shift') ? 10 : 1;
    if (isDown('ArrowDown'))  gt.top = (y += g) + 'px';
    if (isDown('ArrowUp'))    gt.top = (y -= g) + 'px';
    if (isDown('ArrowRight')) gt.down = (x += g) + 'px';
    if (isDown('ArrowLeft'))  gt.down = (x -= g) + 'px';
    
    window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)*/

// function arrowPressLeft() {
//     let moveLeft = ticketHolder;
//     moveLeft.style.left = parseInt(moveLeft.style.left) - 5 + 'px';    
// }

// function arrowPressRight() {
//     let moveRight = ticketHolder;
//     moveRight.style.right = parseInt(moveRight.style.right) + 5 + 'px';    
// }

// window.onload = init;
/*window.onload = function()  {
    



  */

 // }
 

 
 let playerChar = null;
 
 function init() {
     playerChar = document.getElementsByClassName('goldenTicket');
     playerChar.style.position = 'relative';
     playerChar.style.left = '0px';
     playerChar.style.top = '0px';
    }
    function getKeyAndMove(event) {
        let key_code = event.which || event.keyCode;
        switch (key_code) {
            case 37: //left arrow
            moveLeft();
            break;
            case 38: //up arrow
            moveUp();
            break;
            case 39: //right arrow
            moveRight();
            break;
            case 40: //down arrow
            moveDown();
            break;
        }
    }
    function moveLeft() {
        objDiv.style.left = parseInt(objDiv.style.left) - 5 + 'px';
    }
    function moveUp() {
        objDiv.style.top = parseInt(objDiv.style.top) - 5 + 'px';
    }
    function moveRight() {
        objDiv.style.left = parseInt(objDiv.style.left) + 5 + 'px';
    }
    function moveDown() {
        objDiv.style.top = parseInt(objDiv.style.top) + 5 + 'px';
    }
    window.onload = init;
            function gameLoop() {
                movePlayer();
                setTimeout('gameloop()', 10);
                }