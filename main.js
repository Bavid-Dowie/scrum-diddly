playerChar = document.getElementsByClassName('goldenTicket');

    function moveLeftRight(e) {
        let key_code = e.which || e.keyCode;
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
        playerChar.style.left = parseInt(playerChar.style.left) - 5 + 'px';
    }
    function charRight() {
        playerChar.style.left = parseInt(playerChar.style.left) + 5 + 'px';
    }
    
    playerChar.addEventListener("keydown", moveLeftRight);