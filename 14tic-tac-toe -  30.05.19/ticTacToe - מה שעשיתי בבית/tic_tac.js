"use strict";

var array = [" ", " ", " ", " ", " ", " ", " ", " ", " ",];
var moves = 0; // count each time that the user puts X or O

for (var i = 0; i < 9; i++) { // getting the elements from the html and listening to their click events
    document.getElementById("d" + i).addEventListener("click", gameMove);
}

var btn = document.getElementById("btn").addEventListener("click", newGame); //getting the element button from the html and listening to his click events

function gameMove() {
    var elementId = this.id; // getting the element that has been clicked on
    var idx = Number(elementId[1]); // getting only the number of the id and making it the indexer 
    if (array[idx] !== " ") {
        var full = alert("choose another box");
    } else {
        var pick = prompt("X or O ?");
        if (pick == "x" || pick == "o") {
            document.getElementById(elementId).innerText = pick; // printing the user's input to the box he clicked on
            array[idx] = pick; // putting the user's input in the array at the place of the indexer
            winner(array); // checks if there is a winner
            moves++; // each time the user puts an X or O input, the number of moves will go up by 1
            if(moves == 9){ // once the users filled the board with no winners, its a tie  
                alert ("it's a draw");
                newGame();
            } 
        } else {
            var wrongInput = alert("please choose X or O");
        }
    }
}

function winner() { // checks if someone won
    if (array[0] == "x" && array[1] == "x" && array[2] == "x") { // winning by first row
        alert('X won!');
        newGame();
    } else if (array[0] == "o" && array[1] == "o" && array[2] == "o") {
        alert('O won!');
        newGame();
    } else if (array[3] == "x" && array[4] == "x" && array[5] == "x") { // winning by second row
        alert('X won!');
        newGame();
    } else if (array[3] == "o" && array[4] == "o" && array[5] == "o") {
        alert('O won!');
        newGame();
    } else if (array[6] == "x" && array[7] == "x" && array[8] == "x") { // winning by third row
        alert('X won!');
        newGame();
    } else if (array[6] == "o" && array[7] == "o" && array[8] == "o") {
        alert('O won!');
        newGame();
    } else if (array[0] == "x" && array[3] == "x" && array[6] == "x") { // winning by first column
        alert('X won!');
        newGame();
    } else if (array[0] == "o" && array[3] == "o" && array[6] == "o") {
        alert('O won!');
        newGame();
    } else if (array[1] == "x" && array[4] == "x" && array[7] == "x") { // winning by second column
        alert('X won!');
        newGame();
    } else if (array[1] == "o" && array[4] == "o" && array[7] == "o") {
        alert('O won!');
        newGame();
    } else if (array[2] == "x" && array[5] == "x" && array[8] == "x") { // winning by third column
        alert('X won!');
        newGame();
    } else if (array[2] == "o" && array[5] == "o" && array[8] == "o") {
        alert('O won!');
        newGame();
    } else if (array[0] == "x" && array[4] == "x" && array[8] == "x") { // winning by first diagonal
        alert('X won!');
        newGame();
    } else if (array[0] == "o" && array[4] == "o" && array[8] == "o") {
        alert('O won!');
        newGame();
    } else if (array[2] == "x" && array[4] == "x" && array[6] == "x") { // winning by second diagonal
        alert('X won!');
        newGame();
    } else if (array[2] == "o" && array[4] == "o" && array[6] == "o") {
        alert('O won!');
        newGame();
    }
}

function newGame() { // starts a new game after someone won
    for (var i = 0; i <= 8; i++) {
        array[i] = " ";
        document.getElementById("d" + i).innerText = " ";
        moves=0;
    }
}

/* example of style by js?
document.getElementById("btn").style.borderBottomColor = "black";
*/