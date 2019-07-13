"use strict";
//
var questionCounter = 0;
var questions;
var pickedAnswers = [];
var remainingTime;
var timer;

const promise = fetch('main.json').then(res => res.json()).then((data) => {
    questions = shuffleQuestionsAnswers(data);
    displayCurrentQuestion();
}).catch(err => { throw err });

function shuffle(arr) {
    var newArr = [];
    while (arr.length > 0) {
        let index = Math.floor(Math.random() * arr.length);
        let item = arr.splice(index, 1)[0];
        newArr.push(item);
    }
    return newArr;
}


function shuffleQuestionsAnswers(questions) {
    let newQuestions = shuffle(questions);
    for (let i = 0; i < newQuestions.length; i++) {
        const question = newQuestions[i];
        question.a = shuffle(question.a);
    }

    return newQuestions;
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

function finishGame() {
    clearInterval(timer);
    let correctAnswers = 0;
    questions.forEach(function (question, i) {
        let pickedAnswerIndex = pickedAnswers[i];
        if (pickedAnswerIndex !== -1 && question.a[pickedAnswerIndex].isTrue) {
            correctAnswers++;
        }
    });
    alert("You were right in " + correctAnswers + " and wrong in " + (questions.length - correctAnswers) + " out of " + questions.length + " questions.");
}

function updateTimerView() {
    let remainingTimeElement = document.getElementById('remainingTime');
    remainingTimeElement.innerHTML = remainingTime;
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

function displayCurrentQuestion() {
    
    let questionObj = questions[questionCounter];
    var questionElement = document.getElementById('question');
    questionElement.innerHTML = questionObj.q;
    questionObj.a.forEach(function (answerObj, i) {
        var answerElement = document.getElementById('answer' + i);
        answerElement.innerHTML = answerObj.aText;
        answerElement.addEventListener("click", onAnswerClick);
    });

    startCountDown();
}

