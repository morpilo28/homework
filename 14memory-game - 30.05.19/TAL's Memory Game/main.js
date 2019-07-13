var startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', ShowPopup);
var closePopupBtn = document.getElementById('close-popup');
closePopupBtn.addEventListener('click', ClosePopup);
var openTdArray = [];
var answerHandler;
var timer;
var timeElapsed = 0;
for (var i = 1; i <= 4; i++) {
    var optBtn = document.getElementById('size' + i);
    optBtn.addEventListener('click', SelectSize);
}

function ShowPopup() {
    var popup = document.getElementById('size-popup');
    popup.style.display = 'block';
}
function ClosePopup() {
    var popup = document.getElementById('size-popup');
    popup.style.display = 'none';
}

function CreateMatrix(x, y) {
    var gameBody = document.getElementById('game-body');
    var table = document.createElement('table');
    var tdCount = 0;
    table.id = 'game-table';
    table.className = 'fade';
    gameBody.appendChild(table);
    for (var i = 0; i < x; i++) {
        var tr = document.createElement('tr');
        tr.id = 'r' + i;
        table.appendChild(tr);
    }

    for (var i = 0; i <= y; i++) {
        var findTr = document.getElementById('r' + i);
        for (var j = 0; j < y; j++) {
            if (findTr != null) {
                var td = document.createElement('td');
                td.id = 'c' + tdCount;
                findTr.appendChild(td);
                tdCount++;
            }
        }
    }

    var startBtn = document.getElementById('start-btn');
    Hide(startBtn);
}
function Image(src, pos1, pos2) {
    this.src = src;
    this.pos1 = pos1;
    this.pos2 = pos2;
}
/*Game Starts Here */
function Game(x, y) {
    /*Prepare table & board*/
    var matrixSize = x * y;
    var rndImgArray = [];
    var rndPosArray = [];
    while (rndImgArray.length < matrixSize / 2) { // choose unique random images in Matrix size / 2
        var imgRnd = "img (" + Math.floor((Math.random() * 50) + 1) + ")";
        if (rndImgArray.indexOf(imgRnd) === -1) {
            rndImgArray.push(imgRnd);
        }
    }

    for (var i = 0; i < matrixSize / 2; i++) {
        if (rndPosArray.indexOf(rndImgArray[i]) === -1) { //if image doesnt exist in position array push it twice
            rndPosArray.push(rndImgArray[i]);
            rndPosArray.push(rndImgArray[i]);
        }
    }

    ShuffleArray(rndPosArray); // random positions
    var finalImgArr = CreateImageObjArr(rndPosArray, rndImgArray);
    WriteImagesToTable(finalImgArr);

    /*Create Event Listeners Loop*/
    for (var i = 0; i < matrixSize; i++) {
        var td = document.getElementById('c' + i);
        td.addEventListener('click', OpenTd);
    }
}

function OpenTd() {
    //open
    if(openTdArray.length < 2){
        $(this.firstChild).css('opacity','1');
        openTdArray.push(this.id);
    }
        //check similarity
        if (openTdArray.length == 2) {
            img1 = document.getElementById(openTdArray[0]).firstChild.id;
            img2 = document.getElementById(openTdArray[1]).firstChild.id;

            if (img1 == img2) {
                RightAnswer();
                answerHandler = setTimeout(ResetAnswer,1000);
                console.log('similar');
                EmptyArray(openTdArray);
            } else if (img1 != img2) {
                WrongAnswer();
                answerHandler = setTimeout(ResetAnswer,1000);
                console.log('different');
                CloseTimer(1);
            }
        }
    
}

function RightAnswer(){
    var tdLength = $('td').length;
    $('#game-table').css('background-color','#b3c675');
    for(let i = 0; i < tdLength; i++){
        var td = document.getElementById('c' + i);
        $(td).css('border','1px solid #b3c675')
    }
}

function WrongAnswer(){
    var tdLength = $('td').length;
    $('#game-table').css('background-color','#e88c8c');
    for(let i = 0; i < tdLength; i++){
        var td = document.getElementById('c' + i);
        $(td).css('border','1px solid #e88c8c')
    }
}

function ResetAnswer(){
    var tdLength = $('td').length;
    $('#game-table').css('background-color','#bdbdbd');
    for(let i = 0; i < tdLength; i++){
        var td = document.getElementById('c' + i);
        $(td).css('border','1px solid #bdbdbd')
    }
}
function CloseTimer(seconds) {
    var seconds = seconds * 1000;
    setTimeout(CloseTdArray, seconds);
}

function CloseTd(el) {
    var td = document.getElementById(el);
    td.firstChild.style.opacity = '0';
}
function CloseTdArray() {
    for (var i = 0; i < openTdArray.length; i++) {
        CloseTd(openTdArray[i]);
    }
    EmptyArray(openTdArray);
}

function EmptyArray(arr) {
    while (arr.length != 0) {
        arr.pop();
    }
}
/*Game Ends Here */
/*Write Table*/
function WriteImagesToTable(finalImgArr) {
    for (var i = 0; i < finalImgArr.length; i++) {
        var id = finalImgArr[i].src;
        id = id.replace(/\s/g, '');
        id = id.replace(/[{()}]/g, '');
        var inner = "<img class='game-img' id='" + id + "' src='images/" + finalImgArr[i].src + ".jpg' style='opacity:0;'>"
        document.getElementById('c' + finalImgArr[i].pos1).innerHTML = inner;
        document.getElementById('c' + finalImgArr[i].pos2).innerHTML = inner;
    }
}
function CreateImageObjArr(posArr, imgArr) {
    var finalImgArr = [];
    for (var i = 0; i < imgArr.length; i++) {
        var positions = SearchPositions(posArr, imgArr[i]);
        var imgObj = new Image(imgArr[i], positions[0], positions[1]);
        finalImgArr.push(imgObj);
    }
    return finalImgArr;
}
function SearchPositions(arr, target) {
    var arrCopy = arr.slice(); //clone position array
    var imgPositions = [];
    while (arrCopy.indexOf(target) != -1) { //if target exists in array, push position to imgPositions and remove from array
        imgPositions.push(arrCopy.indexOf(target));
        var tempIndex = arrCopy.indexOf(target);
        arrCopy[tempIndex] = -1;
    }
    return imgPositions;
}

function ShuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function ClearGame() {
    var gameBody = document.getElementById('game-body');
    while (gameBody.firstChild) {
        gameBody.removeChild(gameBody.firstChild);
    }
}

function SelectSize() {
    var id = this.id;
    var sizeId = Number(id.slice(-1));
    this.style.border = "2px solid #aad15e";
    for (var i = 1; i <= 4; i++) {
        var op = document.getElementById('size' + i);
        if (op.id != id) {
            op.style.border = "none";
        }
    }
    var btn = document.getElementById('matrix-btn');
    btn.addEventListener('click', function () { StartGame(sizeId); }, false);
    btn.addEventListener('click', ClosePopup);
}

function StartGame(id) {
    switch (id) {
        case 1:
            ClearGame();
            SetGameElements();
            SetCountdown(120);
            CreateMatrix(4, 4);
            Game(4, 4);
            break;
        case 2:
            ClearGame();
            SetGameElements();
            SetCountdown(300);
            CreateMatrix(6, 6);
            Game(6, 6);
            break;
        case 3:
            ClearGame();
            SetGameElements();
            SetCountdown(480);
            CreateMatrix(8, 8);
            Game(8, 8);
            break;
        case 4:
            ClearGame();
            SetGameElements();
            SetCountdown(600);
            CreateMatrix(10, 10);
            Game(10, 10);
            break;
    }
}

function SetGameElements() {
    //create UI elements
    var gameBody = document.getElementById('game-body');
    var ui = document.createElement('div');
    var resetBtn = document.createElement('button');
    var countdownTimer = document.createElement('div');
    //style and configuration
    //UI
    ui.className = 'ui';
    $(ui).css({'width':'100%',
    'margin-bottom':'10px'});
    //reset button
    resetBtn.className = 'btn';
    resetBtn.id = 'reset-btn';
    resetBtn.innerText = 'RESET';
    //timer
    countdownTimer.className = 'timer';
    countdownTimer.id = 'countdown-timer';
    countdownTimer.innerText = "00:00";
    $(countdownTimer).css({
    'display':'inline-block',
    'font-size':'20pt',
    'text-align':'center',
    'font-family':'"poppins", sans-serif',
    'background-color':'#ececec',
    'color':'#5b5b5b',
    'border-radius':'10px',
    'height':'29px',
    'width':'110px',
    'margin-right':'10px',
    'padding':'0px 5px 10px 10px',
    'transition':'all 0.2s ease-in-out'});
    resetBtn.addEventListener('click', ShowPopup);
    //Appends
    ui.appendChild(countdownTimer);
    ui.appendChild(resetBtn);
    gameBody.appendChild(ui);

}

function SetCountdown(seconds){
    if(timer){
        clearInterval(timer);
    }
    var start = new Date;
    var countdown = Math.floor((new Date - start) / 1000, 0);
    if(countdown <= seconds){
        timer = setInterval(function() {
            var countdown = Math.floor((new Date - start) / 1000, 0); // update
            timeElapsed = countdown;
            WriteTime(timeElapsed,seconds);
            if(timeElapsed == seconds){
                alert('game over k');
                clearInterval(timer);
            }
        }, 1000);
    }
}
function ClearTimer(){
      clearInterval(timer);
}
function WriteTime(timeElapsed, totalTime){
    totalTime = totalTime - timeElapsed;
    var minutes = Math.floor(totalTime / 60);
    var seconds = totalTime % 60;

    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    if(minutes == 0 && seconds <= 30){
        $('.timer').css({'background-color':'#ec7225','color':'#ffffff'});
    }
    if(minutes == 0 && seconds <= 10){
        $('.timer').css({'background-color':'#bf0f0f'});
    }
    $('.timer').text(minutes + " : " + seconds);
}
function Hide(element) {
    element.style.display = "none";
}

function Show(element) {
    element.style.display = "block";
}
function GameOver() {
    alert("Game Over");
}
