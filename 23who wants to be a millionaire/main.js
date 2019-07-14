"use strict";
var questionCounter = 0;
var questions;
var pickedAnswers = [];
var remainingTime;
var timer;

const promise = fetch('main.json').then(res => res.json()).then((data) => {
    questions = shuffleQuestionsAnswers(data);
    displayCurrentQuestion();
}).catch(err => { throw err });

function shuffleQuestionsAnswers(questions) {
    let newQuestions = shuffle(questions);
    for (let i = 0; i < newQuestions.length; i++) {
        const question = newQuestions[i];
        question.a = shuffle(question.a);
    }

    return newQuestions;
}

function shuffle(arr) {
    let newArr = [];
    while (arr.length > 0) {
        let index = Number(Math.floor(Math.random() * arr.length));
        let item = arr.splice(index, 1)[0];
        newArr.push(item);
    }
    return newArr;
}

function displayCurrentQuestion() {
    let questionObj = questions[questionCounter];
    let questionElement = document.getElementById('question');
    questionElement.innerHTML = questionObj.q;
    questionObj.a.forEach(function (answerObj, i) {
        var answerElement = document.getElementById('answer' + i);
        answerElement.innerHTML = answerObj.aText;
        answerElement.addEventListener("click", onAnswerClick);
    });

    startCountDown();
}

function onAnswerClick(element) {
    let pickedAnswerIndex = Number(element.target.id.substring("answer".length));
    pickedAnswers.push(pickedAnswerIndex);
    moveToNextQuestion();
}

function moveToNextQuestion() {
    questionCounter++;
    if (questionCounter < questions.length) {
        displayCurrentQuestion();
    }
    else {
        finishGame();
    }
}

function startCountDown() {
    remainingTime = 5;
    updateTimerView();
    clearInterval(timer);
    timer = setInterval(function () {
        remainingTime--;
        updateTimerView();
        if (remainingTime === 0) {
            pickedAnswers.push(-1);
            moveToNextQuestion();
        }
    }, 1000)
}

function updateTimerView() {
    let remainingTimeElement = document.getElementById('remainingTime');
    remainingTimeElement.innerHTML = 'time remaining: ' + remainingTime;
}

function finishGame() {
    clearInterval(timer);
    let correctAnswers = 0;
    questions.forEach(function (question, i) {
        let pickedAnswerIndex = pickedAnswers[i];
        if (pickedAnswerIndex !== -1 && question.a[pickedAnswerIndex].isTrue) {
            correctAnswers++;
        }
    });
    // removeGameBox(correctAnswers);
    alert("You were right in " + correctAnswers + "\nand wrong in " + (questions.length - correctAnswers) + "\nout of " + questions.length + " questions.");
}

/*  function removeGameBox(correctAnswers) {
    var gameBox = document.getElementById('gameBox');
    document.body.removeChild(gameBox);

    var result = document.createElement('div');
    result.id = 'resultBox';
    document.body.appendChild(result);
    result.innerHTML = "You were right in " + correctAnswers + " and wrong in " + (questions.length - correctAnswers) + " out of " + questions.length + " questions.";

    var startNewButton = document.createElement('button');
    startNewButton.id = 'startNewButton';
    document.body.appendChild(startNewButton);
    startNewButton.innerHTML = 'Start A New Game';
}  */
