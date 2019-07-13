"use strict";

var d0 = document.getElementById("d0");
var d1 = document.getElementById("d1");
var d2 = document.getElementById("d2");
var d3 = document.getElementById("d3");
var d4 = document.getElementById("d4");
var d5 = document.getElementById("d5");
var d6 = document.getElementById("d6");
var d7 = document.getElementById("d7");
var d8 = document.getElementById("d8");

var array = [d0, d1, d2, d3, d4, d5, d6, d7, d8];
var resultArray = [];

for (var i = 0; i < 9; i++) {
    resultArray[i] = -1;
}

for (var i = 0; i < array.length; i++) {
    array[i].addEventListener("click", winner);
}

function winner() {
    var idx = this.id.toString().slice(-1); // takes last digit off string  
    var idx = Number(idx); // turns back to number type
    var pick = prompt("choose: X or O"); //input
    if (pick == "x" || pick == "o") { //check input
        if (resultArray[idx] == -1) {
            resultArray[idx] = pick;
            document.getElementById("d" + idx).innerHTML = pick;
            checkWinner();
        } else {
            var problem = alert('the box has already been filled');
        }
    } else {
        window.alert("Please write X or O");
    }
}

function checkWinner(){
    for (var i = 0; i < resultArray.length; i +=3){
        if(resultArray[i] == resultArray[i+1] == resultArray[i+2])
        return window.alert("Winner");
    }
    return;
}
