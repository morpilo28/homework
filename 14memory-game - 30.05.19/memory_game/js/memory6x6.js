"use strict";

(function () {
    var maxTime, timeCounter, interval, arrayInput = [], contentArray = [], moves, firstChoice, secondChoice, countClicks, countFullBoxes, idxOfFirstBoxedClicked, idxOfSecondBoxedClicked;
    document.getElementById('btnStart').addEventListener('click', newGame);

    newGame();

    function newGame() {
        arrayInput = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
            '', '', '', '', '', '', '', '', ''];
        contentArray = ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6', '7', '7', '8', '8', '9', '9', '10', '10',
            '11', '11', '12', '12', '13', '13', '14', '14', '15', '15', '16', '16', '17', '17', '18', '18'];
        for (var i = 0; i < contentArray.length; i++) {
            document.getElementById('d' + i).addEventListener('click', gameMove);
        }
        document.getElementById('setTime').innerHTML = '<span> <u> Your maximum time to complete the game is 5 minutes:</u> </span>';
        clearInterval(interval);
        timeCounter = 300;
        maxTime = 299;
        interval = setInterval(countIn, 1000);
        moves = 0;
        firstChoice = "";
        secondChoice = "";
        countClicks = 0;
        countFullBoxes = 0;
        ShuffleArray(contentArray);
        console.log(contentArray);
        for (var i = 0; i < arrayInput.length; i++) {
            document.getElementById('d' + i).innerHTML = '<div>' + arrayInput[i] + '</div>';
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


    function countIn() {
        document.getElementById('timer').innerHTML = '<span> <b>' + convertSeconds(timeCounter) + ' </b> </span>';
        timeCounter--;
        if (timeCounter == -1) {
            clearInterval(interval);
            alert('Time Out. Try again :)');
        }
    }

    function convertSeconds(s) {
        var minutes = Math.floor(s / 60);
        var seconds = (s % 60);
        if ((minutes + "").length === 1) {
            minutes = "0" + minutes;
        }
        if ((seconds + "").length === 1) {
            seconds = "0" + seconds;
        }

        return minutes + ':' + seconds;
    }


    function gameMove() {

        if (countClicks < 2) {
            var elementId = this.id;
            var idx = Number(elementId.substring(1));
            moves++;
            if (arrayInput[idx] == '') {
                countClicks++;
                if (countClicks == 1) {
                    idxOfFirstBoxedClicked = idx;
                    firstChoice = contentArray[idx];
                    arrayInput[idx] = contentArray[idx];
                    document.getElementById('d' + idx).innerHTML = '<div>' + contentArray[idx] + '</div>';
                } else if (countClicks == 2) {
                    idxOfSecondBoxedClicked = idx;
                    secondChoice = contentArray[idx];
                    document.getElementById('d' + idx).innerHTML = '<div>' + contentArray[idx] + '</div>';
                    checkIfSame();
                }
            } else {
                alert("you have already clicked in this card. choose an unflipped card")
            }
        }
    }


    function checkIfSame() {
        if (firstChoice == secondChoice) {
            arrayInput[idxOfFirstBoxedClicked] = contentArray[idxOfFirstBoxedClicked];
            arrayInput[idxOfSecondBoxedClicked] = contentArray[idxOfSecondBoxedClicked];
            countClicks = 0;
            countFullBoxes++;
            if (countFullBoxes == contentArray.length / 2) {
                var timeFinished = timeCounter;
                alert("CONGRATULATIONS! \n You finished the game with " + moves + " moves in a time of: " + convertSeconds(maxTime - timeFinished));
                clearInterval(interval);
                newGame();
            }
        } else if (firstChoice !== secondChoice) {
            arrayInput[idxOfFirstBoxedClicked] = '';
            arrayInput[idxOfSecondBoxedClicked] = '';
            setTimeout(deleteCards, 1 * 1000);
        }
    }


    function deleteCards() {
        document.getElementById('d' + idxOfFirstBoxedClicked).innerHTML = '<div>' + arrayInput[idxOfFirstBoxedClicked] + '</div>';
        document.getElementById('d' + idxOfSecondBoxedClicked).innerHTML = '<div>' + arrayInput[idxOfSecondBoxedClicked] + '</div>';
        countClicks = 0;
    }

})();


