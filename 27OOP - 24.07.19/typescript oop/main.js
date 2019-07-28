"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Question = /** @class */ (function () {
    function Question(qwestionText) {
        this.qText = qwestionText;
    }
    Object.defineProperty(Question.prototype, "qText", {
        set: function (x) {
            this._qText = x;
        },
        enumerable: true,
        configurable: true
    });
    Question.prototype.toString = function () {
        return this._qText;
    };
    return Question;
}());
var shortAnswerQuestion = /** @class */ (function (_super) {
    __extends(shortAnswerQuestion, _super);
    function shortAnswerQuestion(answer, question) {
        var _this = _super.call(this, question) || this;
        _this.answer = answer;
        return _this;
    }
    shortAnswerQuestion.prototype.getCorrectAnswer = function () {
        return "right answer: " + this.answer;
    };
    shortAnswerQuestion.prototype.addCorrectAnswer = function (correctAnswer) {
        this.answer = correctAnswer;
    };
    return shortAnswerQuestion;
}(Question));
var multipleChoiceQuestion = /** @class */ (function (_super) {
    __extends(multipleChoiceQuestion, _super);
    function multipleChoiceQuestion(correctAnswer, question) {
        var _this = _super.call(this, question) || this;
        _this.numbersOfAnswers = 1;
        _this.correctAnswerIndex = 0;
        _this.answers = [correctAnswer];
        return _this;
    }
    multipleChoiceQuestion.prototype.toString = function () {
        var printAnswers;
        for (var i = 0; i < (this.answers).length; i++) {
            printAnswers += this.answers[i] + " \n";
        }
        return "question: " + _super.prototype.toString.call(this) + " \n\n        * " + this.answers;
    };
    multipleChoiceQuestion.prototype.getCorrectAnswer = function () {
        return "right answer: " + this.answers[0];
    };
    multipleChoiceQuestion.prototype.addCorrectAnswer = function (answer) {
        this.answer = answer;
    };
    return multipleChoiceQuestion;
}(Question));
