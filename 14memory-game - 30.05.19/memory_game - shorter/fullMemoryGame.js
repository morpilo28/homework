"use strict";

var maxTime, timeCounter, interval, inputArray = [], imgArray = [], moves, firstChoice, secondChoice, countClicks, countFullBoxes, idxOfFirstBoxedClicked, idxOfSecondBoxedClicked, length;
homePage();

function homePage() {
    let homeDiv = document.createElement('div');
    homeDiv.id = 'homeDiv';
    document.body.appendChild(homeDiv);

    let header = document.createElement('h1');
    header.id = 'header';
    homeDiv.appendChild(header);
    header.innerHTML = "Memory Game";

    let paragraph = document.createElement('p');
    paragraph.id = 'paragraph';
    homeDiv.appendChild(paragraph);
    paragraph.innerHTML = "Let's start playing!" + "<br>" + "First, choose a board size out of these 4 options:";

    let boardDim = 4;
    let boardButton;
    for (let i = 0; i < 4; i++) {
        boardButton = document.createElement('button');
        boardButton.id = 'b' + i;
        homeDiv.appendChild(boardButton);
        boardButton.innerHTML = boardDim + 'x' + boardDim;
        boardDim += 2;
    }

    for (let i = 0; i < 4; i++) { // event on board choice
        document.getElementById('b' + i).addEventListener('click', boardChoice);
    }
}

function boardChoice() { //creating board size   
    let boardElementId = this.id;
    var idx = Number(boardElementId.substring(1));
    var homeElement = document.getElementById('homeDiv');
    homeElement.remove();
    if (idx == 0) {
        GamePage(4, 4, 2);
    } else if (idx == 1) {
        GamePage(6, 6, 5);
    } else if (idx == 2) {
        GamePage(8, 8, 8);
    } else if (idx == 3) {
        GamePage(10, 10, 10);
    }
}

function GamePage(row, column, boardMinutes) {
    let gameBox = document.createElement('div');
    gameBox.id = 'gameBox';
    document.body.appendChild(gameBox);

    let buttonPlayAgain = document.createElement('button');
    buttonPlayAgain.id = 'btnStart';
    buttonPlayAgain.className = 'SharedBtnStart';
    buttonPlayAgain.innerHTML = 'Start a New Game';
    gameBox.appendChild(buttonPlayAgain);

    buttonPlayAgain.addEventListener('click', function () {
        if (length == 16) {
            gameBox = document.getElementById('gameBox');
            gameBox.remove();
            GamePage(4, 4, 2);

        } else if (length == 36) {
            gameBox = document.getElementById('gameBox');
            gameBox.remove();
            GamePage(6, 6, 5);;

        } else if (length == 64) {
            gameBox = document.getElementById('gameBox');
            gameBox.remove();
            GamePage(8, 8, 8);

        } else if (length == 100) {
            gameBox = document.getElementById('gameBox');
            gameBox.remove();
            GamePage(10, 10, 10);
        }
    });

    let buttonChooseBoard = document.createElement('button');
    buttonChooseBoard.id = 'btnStart';
    buttonChooseBoard.className = 'SharedBtnStart';
    buttonChooseBoard.innerHTML = 'Choose Another Board';
    gameBox.appendChild(buttonChooseBoard);

    buttonChooseBoard.addEventListener('click', function () {
        if (countFullBoxes == length / 2 || timeCounter == -1) {
            gameBox = document.getElementById('gameBox');
            gameBox.remove();
            clearInterval(interval);
            homePage();
        } else {
            alert('You have to finish the game before you can choose a new board');
        }
    });

    let clockDiv = document.createElement('div'); // the time and count down box
    clockDiv.id = 'timeBox';
    gameBox.appendChild(clockDiv);
    clockDiv.innerHTML = '<span> <u> Your maximum time to complete the game is ' + boardMinutes + ' minutes:</u> </span>';

    let timer = document.createElement('span'); // the count down
    timer.id = 'timer';
    clockDiv.appendChild(timer);

    let gameBody = document.createElement('div'); // box of play area
    gameBody.id = 'gameBody';
    gameBox.appendChild(gameBody);

    length = row * column;
    let z = 0;

    for (let i = 0; i < length; i++) {
        imgArray[i] = 'img/a' + z + '.png';

        z++;
        if (z == length / 2) {
            z = 0;
        }
    }

    ShuffleArray(imgArray);
    console.log(imgArray);


    for (let i = 0; i < length; i++) {
        inputArray[i] = '';
        let div = document.createElement('div');
        div.id = 'div' + i;
        div.className = 'sharedDesign';
        gameBody.appendChild(div);
        if (length == 16) {
            document.getElementById('div' + i).style.width = "23%";
            document.getElementById('div' + i).style.height = '102px';
            document.getElementById('gameBody').style.width = "53%";

        } else if (length == 36) {
            document.getElementById('div' + i).style.width = "14%";
            document.getElementById('div' + i).style.height = '72px';
            document.getElementById('gameBody').style.width = "57%";

        } else if (length == 64) {
            document.getElementById('div' + i).style.width = "11%";
            document.getElementById('div' + i).style.height = '54px';
            document.getElementById('gameBody').style.width = "53%";

        } else if (length == 100) {
            document.getElementById('div' + i).style.width = "9%";
            document.getElementById('div' + i).style.height = '43px';
            document.getElementById('gameBody').style.width = "52%";
        }

        let img = document.createElement('img');
        img.id = "img" + i;
        img.src = imgArray[i];
        img.className = 'imgOpacity';
        div.appendChild(img);

    }

    countClicks = 0
    countFullBoxes = 0;
    moves = 0;

    clearInterval(interval);
    timeCounter = boardMinutes * 60;
    maxTime = timeCounter - 1;
    interval = setInterval(countIn, 1000);

    for (let i = 0; i < length; i++) { //event on play boxes
        document.getElementById('div' + i).addEventListener('click', gameMove);
    }
}

function ShuffleArray(array) {
    var i = array.length, j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
    }
}

function gameMove() {
    if (countClicks < 2) {
        idxOfFirstBoxedClicked;
        idxOfSecondBoxedClicked;
        firstChoice;
        secondChoice;
        let elementId = this.id;
        let idx = Number(elementId.substring(3));
        moves++;
        if (inputArray[idx] == '') {
            countClicks++;
            if (countClicks == 1) {
                document.getElementById('img' + idx).style.opacity = "1";
                document.getElementById('img' + idx).style.backgroundColor = "#ffffff";
                idxOfFirstBoxedClicked = idx;
                firstChoice = imgArray[idxOfFirstBoxedClicked];
                inputArray[idxOfFirstBoxedClicked] = 'full';
            } else if (countClicks == 2) {
                document.getElementById('img' + idx).style.opacity = "1";
                document.getElementById('img' + idx).style.backgroundColor = "#ffffff";
                idxOfSecondBoxedClicked = idx;
                secondChoice = imgArray[idxOfSecondBoxedClicked];
                inputArray[idxOfSecondBoxedClicked] = 'full';
                checkIfSame();
            }
        } else if (inputArray[idx] == 'full') {
            alert("you have already clicked on this card. choose an unflipped card");
        }
    }

    function checkIfSame() {
        if (firstChoice == secondChoice) {
            countClicks = 0;
            countFullBoxes++;
            if (countFullBoxes == length / 2) {
                let timeFinished = timeCounter;
                alert("CONGRATULATIONS! You finished the game with " + moves + " moves in a time of: " + convertSeconds(maxTime - timeFinished));
                clearInterval(interval);
                for (let i = 0; i < length; i++) { //remove event listener on play boxes
                    document.getElementById('div' + i).removeEventListener('click', gameMove);
                }
            }
        } else if (firstChoice !== secondChoice) {
            inputArray[idxOfFirstBoxedClicked] = '';
            inputArray[idxOfSecondBoxedClicked] = '';
            setTimeout(deleteCards, 1 * 1000);
        }
    }

    function deleteCards() {
        document.getElementById('img' + idxOfFirstBoxedClicked).style.opacity = "0";
        document.getElementById('img' + idxOfSecondBoxedClicked).style.opacity = "0";
        countClicks = 0;
    }
}

function countIn() {
    document.getElementById('timer').innerHTML = '<span> <b>' + convertSeconds(timeCounter) + ' </b> </span>';
    timeCounter--;
    if (timeCounter == -1) {
        clearInterval(interval);
        alert('Time Out. Try again :)');
        for (let i = 0; i < length; i++) { //remove event listener on play boxes
            document.getElementById('div' + i).removeEventListener('click', gameMove);
        }
    }
}

function convertSeconds(s) {
    let minutes = Math.floor(s / 60);
    let seconds = (s % 60);
    if ((minutes + "").length === 1) {
        minutes = "0" + minutes;
    }
    if ((seconds + "").length === 1) {
        seconds = "0" + seconds;
    }
    return minutes + ':' + seconds;
}