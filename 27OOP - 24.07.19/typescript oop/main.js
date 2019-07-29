"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Question = /** @class */ (function () {
    function Question(questionText) {
        this.QText = questionText;
    }
    Object.defineProperty(Question.prototype, "QText", {
        set: function (x) {
            this._QText = x;
        },
        enumerable: true,
        configurable: true
    });
    Question.prototype.toString = function () {
        return this._QText;
    };
    return Question;
}());
var ShortAnswerQuestion = /** @class */ (function (_super) {
    __extends(ShortAnswerQuestion, _super);
    function ShortAnswerQuestion(answer, question) {
        var _this = _super.call(this, question) || this;
        _this.answer = answer;
        return _this;
    }
    ShortAnswerQuestion.prototype.getCorrectAnswer = function () {
        return "right answer: " + this.answer;
    };
    ShortAnswerQuestion.prototype.addCorrectAnswer = function (correctAnswer) {
        this.answer = correctAnswer;
    };
    return ShortAnswerQuestion;
}(Question));
var MultipleChoiceQuestion = /** @class */ (function (_super) {
    __extends(MultipleChoiceQuestion, _super);
    function MultipleChoiceQuestion(correctAnswer, question) {
        var _this = _super.call(this, question) || this;
        _this.numbersOfAnswers = 1;
        _this.correctAnswerIndex = 0;
        _this.answers = [correctAnswer];
        return _this;
    }
    MultipleChoiceQuestion.prototype.toString = function () {
        var printAnswers;
        for (var i = 0; i < (this.answers).length; i++) {
            if (i < 6) {
                printAnswers += "\n * " + this.answers[i] + " \n";
            }
        }
        console.log(printAnswers);
        return "question: " + _super.prototype.toString.call(this) + " \n " + printAnswers;
    };
    MultipleChoiceQuestion.prototype.getCorrectAnswer = function () {
        return "right answer: " + this.answers[0];
    };
    MultipleChoiceQuestion.prototype.addCorrectAnswer = function (answer) {
        if ((this.answers).length !== 6) {
            this.answers.push(answer);
            this.correctAnswerIndex = (this.answers).length - 1;
        }
    };
    MultipleChoiceQuestion.prototype.addAnswer = function (wrongAnswer) {
        if ((this.answers).length !== 6) {
            this.answers.push(wrongAnswer);
        }
    };
    return MultipleChoiceQuestion;
}(Question));
var QuestionsCatalog = /** @class */ (function () {
    function QuestionsCatalog() {
        this.maxQuestionsLength = 20;
        this.questions = [];
        this.currentNumOfQuestions = 0;
    }
    QuestionsCatalog.prototype.addQuestion = function (q) {
        if ((this.questions).length !== this.maxQuestionsLength) {
            this.questions.push(q);
        }
    };
    QuestionsCatalog.prototype.generateQuestionnaire = function (num, type) {
        type = QuestionsCatalog.SHORT || QuestionsCatalog.MULTIPLE || QuestionsCatalog.BOTH;
        var newQuestionnaire = [];
        newQuestionnaire.length = num;
        for (var i = 0; i < (this.questions).length; i++) {
        }
        return newQuestionnaire;
    };
    QuestionsCatalog.SHORT = 1;
    QuestionsCatalog.MULTIPLE = 2;
    QuestionsCatalog.BOTH = 3;
    return QuestionsCatalog;
}());
var Questionnaire = /** @class */ (function () {
    function Questionnaire(type, num, cat) {
        this.type = type;
        this.num = num;
        this.cat = cat;
        //this.numOfCorrectAnswers=0;
    }
    return Questionnaire;
}());
