"use strict";


var canvas, ctx, cSize, boxSize, countClicks, array, input;
newGame();

function newGame() {
    array = [];
    for (let i = 0; i < 9; i++) {
        array[i] = ' ';
    }
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    cSize = 300;
    boxSize = cSize / 3;
    countClicks = 0;
    input = document.getElementById('input');
    input.value = '';
    drawLines();

    document.getElementById('x').addEventListener('click', function () {
        let inputValue = Number(document.getElementById('input').value);
        if (inputValue > 8 || inputValue < 0) {
            alert('choose a number between 0 to 8');
            input.value = '';
        } else {
            drawX(Number(document.getElementById('input').value));
        }
    })
    document.getElementById('o').addEventListener('click', function () {
        let inputValue = Number(document.getElementById('input').value);
        if (inputValue > 8 || inputValue < 0) {
            alert('choose a number between 0 to 8');
            input.value = '';
        } else {
            drawO(Number(document.getElementById('input').value));
        }
    })
}

function drawLines() {
    for (let y = 0; y <= 3; y++) {
        ctx.moveTo(0, y * boxSize);
        ctx.lineTo(cSize, y * boxSize);
    }

    for (let x = 0; x <= 3; x++) {
        ctx.moveTo(x * boxSize, 0);
        ctx.lineTo(x * boxSize, cSize);
    }
    ctx.stroke();
}

function drawX(numberOfBox) {
    input.value = '';
    let xButtonSelected = 'x';
    if (play(numberOfBox, xButtonSelected) !== false) {
        let xCoordinate = numberOfBox % 3 * boxSize;
        let yCoordinate = Math.floor(numberOfBox / 3) * boxSize;
        ctx.moveTo(xCoordinate + 20, yCoordinate + 20);
        ctx.lineTo((xCoordinate + boxSize) - 20, (yCoordinate + boxSize - 20));

        ctx.moveTo(xCoordinate + 20, (yCoordinate + boxSize) - 20);
        ctx.lineTo((xCoordinate + boxSize) - 20, yCoordinate + 20);

        ctx.stroke();
    }
}

function drawO(numberOfBox) {
    input.value = '';
    let oButtonSelected = 'o';
    if (play(numberOfBox, oButtonSelected) !== false) {
        ctx.beginPath();
        let radius = 35;
        let startAngle = 0 * Math.PI;
        let endAngle = 2 * Math.PI;
        let xCoordinate = numberOfBox % 3 * boxSize + boxSize / 2;
        let yCoordinate = Math.floor(numberOfBox / 3) * boxSize + boxSize / 2;

        ctx.arc(xCoordinate, yCoordinate, radius, startAngle, endAngle);
        ctx.stroke();
        input.value = '';
    }
}

function play(numberOfBox, buttonSelected) {
    if (array[numberOfBox] == ' ') {
        countClicks++;
        array[numberOfBox] = buttonSelected;
        tie();
        winner();
    } else {
        alert('choose an empty box');
        return false;
    }
}

function tie() {
    if (countClicks == 9) {
        alert("It's a tie!");
        clearPage();
    }
}

function winner() { // checks if someone won
    if (array[0] == 'x' && array[1] == 'x' && array[2] == 'x') { // winning by first row
        alert('X won!');
        clearPage();

    } else if (array[0] == 'o' && array[1] == 'o' && array[2] == 'o') {
        alert('O won!');
        clearPage();

    } else if (array[3] == 'x' && array[4] == 'x' && array[5] == 'x') { // winning by second row
        alert('X won!');
        clearPage();

    } else if (array[3] == 'o' && array[4] == 'o' && array[5] == 'o') {
        alert('O won!');
        clearPage();
        newGame();
    } else if (array[6] == 'x' && array[7] == 'x' && array[8] == 'x') { // winning by third row
        alert('X won!');
        clearPage();

    } else if (array[6] == 'o' && array[7] == 'o' && array[8] == 'o') {
        alert('O won!');
        clearPage();

    } else if (array[0] == 'x' && array[3] == 'x' && array[6] == 'x') { // winning by first column
        alert('X won!');
        clearPage();

    } else if (array[0] == 'o' && array[3] == 'o' && array[6] == 'o') {
        alert('O won!');
        clearPage();

    } else if (array[1] == 'x' && array[4] == 'x' && array[7] == 'x') { // winning by second column
        alert('X won!');
        clearPage();

    } else if (array[1] == 'o' && array[4] == 'o' && array[7] == 'o') {
        alert('O won!');
        clearPage();

    } else if (array[2] == 'x' && array[5] == 'x' && array[8] == 'x') { // winning by third column
        alert('X won!');
        clearPage();

    } else if (array[2] == 'o' && array[5] == 'o' && array[8] == 'o') {
        alert('O won!');
        clearPage();

    } else if (array[0] == 'x' && array[4] == 'x' && array[8] == 'x') { // winning by first diagonal
        alert('X won!');
        clearPage();

    } else if (array[0] == 'o' && array[4] == 'o' && array[8] == 'o') {
        alert('O won!');
        clearPage();

    } else if (array[2] == 'x' && array[4] == 'x' && array[6] == 'x') { // winning by second diagonal
        alert('X won!');
        clearPage();

    } else if (array[2] == 'o' && array[4] == 'o' && array[6] == 'o') {
        alert('O won!');
        clearPage();

    }
}

function clearPage() {
    ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    newGame();
}



/*
TicTacToeBoard();
function TicTacToeBoard() {
    mainDivElement = document.createElement('div');
    mainDivElement.id = 'mainDivElement';
    document.body.appendChild(mainDivElement);

    canvas = document.createElement('canvas');
    ctx = canvas.getContext('2d');
    canvas.id = 'myCanvas';
    canvas.width = '300';
    canvas.height = '300';
    mainDivElement.appendChild(canvas);

    buttonDiv = document.createElement('div');
    buttonDiv.id = 'homeDiv';
    mainDivElement.appendChild(buttonDiv);

    let span = document.createElement('span');
    span.id = 'span';
    span.innerHTML = 'Enter A Box Number From 0 to 8: ';
    buttonDiv.appendChild(span);

    inputElement = document.createElement('input');
    inputElement.id = 'input';
    inputElement.size = '1'
    buttonDiv.appendChild(inputElement);

    let button1 = document.createElement('button');
    button1.id = 'x';
    button1.innerHTML = 'X';
    buttonDiv.appendChild(button1);

    let button2 = document.createElement('button');
    button2.id = 'o';
    button2.innerHTML = 'O';
    buttonDiv.appendChild(button2);

    newGame();
}
*/

























/*
newGame();
function newGame() {
    const canvas = document.getElementById('myCanvas');
    var input, countClicks, array;

    input = document.getElementById('input');
    input.value = '';
    countClicks = 0;

    array = [];
    for (let i = 0; i < 9; i++) {
        array[i] = '';
    }

    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.clientWidth, canvas.height);

    drawLine(0, 0, 0, 300); // draw vertical line 1
    drawLine(100, 0, 100, 300); // draw vertical line 2
    drawLine(200, 0, 200, 300); // draw vertical line 3
    drawLine(300, 0, 300, 300); // draw vertical line 4

    drawLine(0, 0, 300, 0); // draw horizontal line 1
    drawLine(0, 100, 300, 100); // draw horizontal line 2
    drawLine(0, 200, 300, 200); // draw horizontal line 3
    drawLine(0, 300, 300, 300); // draw horizontal line 4



    document.getElementById('x').addEventListener('click', play);
    document.getElementById('o').addEventListener('click', play);

    function play() {
        let idx = Number(input.value);
        let XorY = this.id;
        console.log(idx);
        if (idx > 8 || idx < 0) {
            alert('choose a number between 0 to 8');
            input.value = '';
        } else {
            if (array[idx] == '') {
                countClicks++;
                if (countClicks == 9) {
                    alert("it's a draw");
                    console.log(array);
                    newGame();
                } else {
                    if (XorY == 'x') {
                        array[idx] = XorY;
                        if (idx == 0) {
                            drawLine(20, 20, 80, 80); // draw the X
                            drawLine(80, 20, 20, 80); // draw the X
                            input.value = '';
                            winner();
                        } else if (idx == 1) {
                            drawLine(120, 20, 180, 80); // draw the X
                            drawLine(180, 20, 120, 80); // draw the X
                            input.value = '';
                            winner();
                        } else if (idx == 2) {
                            drawLine(220, 20, 280, 80); // draw the X
                            drawLine(280, 20, 220, 80); // draw the X
                            input.value = '';
                            winner();
                        } else if (idx == 3) {
                            drawLine(20, 120, 80, 180); // draw the X
                            drawLine(80, 120, 20, 180); // draw the X
                            input.value = '';
                            winner();
                        } else if (idx == 4) {
                            drawLine(120, 120, 180, 180); // draw the X
                            drawLine(180, 120, 120, 180); // draw the X
                            input.value = '';
                            winner();
                        } else if (idx == 5) {
                            drawLine(220, 120, 280, 180); // draw the X
                            drawLine(280, 120, 220, 180); // draw the X
                            input.value = '';
                            winner();
                        } else if (idx == 6) {
                            drawLine(20, 220, 80, 280); // draw the X
                            drawLine(80, 220, 20, 280); // draw the X
                            input.value = '';
                            winner();
                        } else if (idx == 7) {
                            drawLine(120, 220, 180, 280); // draw the X
                            drawLine(180, 220, 120, 280); // draw the X
                            input.value = '';
                            winner();
                        } else if (idx == 8) {
                            drawLine(220, 220, 280, 280); // draw the X
                            drawLine(280, 220, 220, 280); // draw the X
                            input.value = '';
                            winner();
                        }
                    } else if (XorY == 'o') {
                        array[idx] = XorY;
                        if (idx == 0) {
                            drawO(50, 50, 35, 0, (2 * Math.PI));
                            input.value = '';
                            winner();
                        } else if (idx == 1) {
                            drawO(150, 50, 35, 0, (2 * Math.PI));
                            input.value = '';
                            winner();
                        } else if (idx == 2) {
                            drawO(250, 50, 35, 0, (2 * Math.PI));
                            input.value = '';
                            winner();
                        } else if (idx == 3) {
                            drawO(50, 150, 35, 0, (2 * Math.PI));
                            input.value = '';
                            winner();
                        } else if (idx == 4) {
                            drawO(150, 150, 35, 0, (2 * Math.PI));
                            input.value = '';
                            winner();
                        } else if (idx == 5) {
                            drawO(250, 150, 35, 0, (2 * Math.PI));
                            input.value = '';
                            winner();
                        } else if (idx == 6) {
                            drawO(50, 250, 35, 0, (2 * Math.PI));
                            input.value = '';
                            winner();
                        } else if (idx == 7) {
                            drawO(150, 250, 35, 0, (2 * Math.PI));
                            input.value = '';
                            winner();
                        } else if (idx == 8) {
                            drawO(250, 250, 35, 0, (2 * Math.PI));
                            input.value = '';
                            winner();
                        }
                    }
                }
            } else {
                alert('choose another box')
                input.value = '';
            }
        }
    }

    function drawLine(x, y, corX, corY) {
        const line = canvas.getContext('2d');
        line.beginPath();       // Start a new path
        line.moveTo(x, y);    // Move the pen to
        line.lineTo(corX, corY);  // Draw a line to
        line.stroke();          // Render the path
    }

    function drawO(a, b, c, d, e) {
        var o = document.getElementById('myCanvas');
        var ctx = o.getContext('2d');
        ctx.beginPath();
        ctx.arc(a, b, c, d, e);
        ctx.stroke();
    }

    function winner() { // checks if someone won
        if (array[0] == 'x' && array[1] == 'x' && array[2] == 'x') { // winning by first row
            alert('X won!');
            newGame();
        } else if (array[0] == 'o' && array[1] == 'o' && array[2] == 'o') {
            alert('O won!');
            newGame();
        } else if (array[3] == 'x' && array[4] == 'x' && array[5] == 'x') { // winning by second row
            alert('X won!');
            newGame();
        } else if (array[3] == 'o' && array[4] == 'o' && array[5] == 'o') {
            alert('O won!');
            newGame();
        } else if (array[6] == 'x' && array[7] == 'x' && array[8] == 'x') { // winning by third row
            alert('X won!');
            newGame();
        } else if (array[6] == 'o' && array[7] == 'o' && array[8] == 'o') {
            alert('O won!');
            newGame();
        } else if (array[0] == 'x' && array[3] == 'x' && array[6] == 'x') { // winning by first column
            alert('X won!');
            newGame();
        } else if (array[0] == 'o' && array[3] == 'o' && array[6] == 'o') {
            alert('O won!');
            newGame();
        } else if (array[1] == 'x' && array[4] == 'x' && array[7] == 'x') { // winning by second column
            alert('X won!');
            newGame();
        } else if (array[1] == 'o' && array[4] == 'o' && array[7] == 'o') {
            alert('O won!');
            newGame();
        } else if (array[2] == 'x' && array[5] == 'x' && array[8] == 'x') { // winning by third column
            alert('X won!');
            newGame();
        } else if (array[2] == 'o' && array[5] == 'o' && array[8] == 'o') {
            alert('O won!');
            newGame();
        } else if (array[0] == 'x' && array[4] == 'x' && array[8] == 'x') { // winning by first diagonal
            alert('X won!');
            newGame();
        } else if (array[0] == 'o' && array[4] == 'o' && array[8] == 'o') {
            alert('O won!');
            newGame();
        } else if (array[2] == 'x' && array[4] == 'x' && array[6] == 'x') { // winning by second diagonal
            alert('X won!');
            newGame();
        } else if (array[2] == 'o' && array[4] == 'o' && array[6] == 'o') {
            alert('O won!');
            newGame();
        }
    }
}


const canvas = document.getElementById('myCanvas');

function drawLine(x, y, corX, corY) {
    const line = canvas.getContext('2d');
    line.beginPath();       // Start a new path
    line.moveTo(x, y);    // Move the pen to
    line.lineTo(corX, corY);  // Draw a line to
    line.stroke();          // Render the path
}


drawLine(0, 0, 0, 300); // draw vertical line 1
drawLine(100, 0, 100, 300); // draw vertical line 2
drawLine(200, 0, 200, 300); // draw vertical line 3
drawLine(300, 0, 300, 300); // draw vertical line 4

drawLine(0, 0, 300, 0); // draw horizontal line 1
drawLine(0, 100, 300, 100); // draw horizontal line 2
drawLine(0, 200, 300, 200); // draw horizontal line 3
drawLine(0, 300, 300, 300); // draw horizontal line 4

var ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.arc(250, 250, 35, 0, 2 * Math.PI);
ctx.stroke();
*/
