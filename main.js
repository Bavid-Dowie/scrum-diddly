let playerDiv = document.getElementsByClassName('goldenTicket');

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
        playerDiv.style.left = parseInt(playerDiv.style.left) - 5 + 'px';
    }
    function charRight() {
        playerDiv.style.left = parseInt(playerDiv.style.left) + 5 + 'px';
    }
    
    playerDiv.addEventListener('onkeydown', moveLeftRight);