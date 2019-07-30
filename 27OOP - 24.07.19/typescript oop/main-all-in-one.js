/* 2. needs to choose question randomly
   3. change public when can, besides where it's required by the assignment
   4. needs to split classes to different files and check if works  */
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
        get: function () {
            return this._QText;
        },
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
    function ShortAnswerQuestion(question, answer) {
        var _this = _super.call(this, question) || this;
        _this.answer = answer;
        return _this;
    }
    ShortAnswerQuestion.prototype.getCorrectAnswer = function () {
        return this.answer;
    };
    ShortAnswerQuestion.prototype.addCorrectAnswer = function (correctAnswer) {
        this.answer = correctAnswer;
    };
    return ShortAnswerQuestion;
}(Question));
var MultipleChoiceQuestion = /** @class */ (function (_super) {
    __extends(MultipleChoiceQuestion, _super);
    function MultipleChoiceQuestion(question, correctAnswer) {
        var _this = _super.call(this, question) || this;
        _this.numbersOfAnswers = 1;
        _this.correctAnswerIndex = 0;
        _this.answers = [correctAnswer];
        return _this;
    }
    MultipleChoiceQuestion.prototype.toString = function () {
        var printAnswers = '\n';
        for (var i = 0; i < (this.answers).length; i++) {
            if (i < 6) {
                printAnswers += "* " + this.answers[i] + " \n";
            }
        }
        return printAnswers;
    };
    MultipleChoiceQuestion.prototype.getCorrectAnswer = function () {
        return this.answers[0];
    };
    MultipleChoiceQuestion.prototype.addCorrectAnswer = function (answer) {
        if ((this.answers).length < 6) {
            this.answers.push(answer);
            this.correctAnswerIndex = this.answers.indexOf(answer);
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
        if ((this.questions).length < this.maxQuestionsLength) {
            this.questions.push(q);
            this.currentNumOfQuestions++;
        }
    };
    QuestionsCatalog.prototype.generateQuestionnaire = function (num, type) {
        var newQuestionnaire = [];
        var j = 0;
        while (j < (this.questions).length) {
            if ((this.questions[j]) instanceof ShortAnswerQuestion && type == QuestionsCatalog.SHORT) {
                newQuestionnaire.push(this.questions[j]);
            }
            else if (this.questions[j] instanceof MultipleChoiceQuestion && type == QuestionsCatalog.MULTIPLE) {
                newQuestionnaire.push(this.questions[j]);
            }
            else if (type == QuestionsCatalog.BOTH) {
                newQuestionnaire.push(this.questions[j]);
            }
            j++;
        }
        newQuestionnaire.splice(num);
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
        this.numOfCorrectAnswers = 0;
        this.newCatQuestionnaire = cat.generateQuestionnaire(num, type);
    }
    Questionnaire.prototype.hasNext = function () {
        if (this.newCatQuestionnaire.length > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Questionnaire.prototype.getNext = function () {
        return this.newCatQuestionnaire[0];
    };
    Questionnaire.prototype.checkAnswer = function (answer) {
        if (this.newCatQuestionnaire.length > 0) {
            if (this.newCatQuestionnaire[0].getCorrectAnswer() == answer) {
                this.numOfCorrectAnswers++;
                this.newCatQuestionnaire.splice(0, 1);
                return true;
            }
            else {
                this.newCatQuestionnaire.splice(0, 1);
            }
        }
        return false;
    };
    Questionnaire.prototype.getTotalQuestions = function () {
        return this.num;
    };
    Questionnaire.prototype.getCorrectAnswers = function () {
        return this.numOfCorrectAnswers;
    };
    return Questionnaire;
}());
function main() {
    var q1 = new ShortAnswerQuestion("what is the capital of Israel?", "jerusalem");
    var q2 = new MultipleChoiceQuestion("How do people from jerusalem call apricot stone fruit?", "ajuim");
    q2.addAnswer("gogoim");
    q2.addAnswer("garin");
    q2.addAnswer("apricot stone fruit");
    var q3 = new ShortAnswerQuestion("How do people from jerusalem call a piggyback?", "abuyoyo");
    var q4 = new MultipleChoiceQuestion("How do people from jerusalem call a liquorice candy?", "bambalick");
    q4.addAnswer("horse tale");
    q4.addAnswer("liquorice");
    q4.addAnswer("red or black strips");
    var newQuestionCatalog = new QuestionsCatalog();
    newQuestionCatalog.addQuestion(q1);
    newQuestionCatalog.addQuestion(q2);
    newQuestionCatalog.addQuestion(q3);
    newQuestionCatalog.addQuestion(q4);
    var questionnaire = new Questionnaire(3, 4, newQuestionCatalog);
    while (questionnaire.hasNext()) {
        var question = questionnaire.getNext();
        if (question) {
            if (question instanceof MultipleChoiceQuestion) {
                console.log(question.QText + " \n " + question.toString());
            }
            else {
                console.log(question.QText);
            }
        }
        var usersAnswer = String(prompt('Enter Your Answer'));
        console.log(usersAnswer);
        console.log(questionnaire.checkAnswer(usersAnswer));
    }
    console.log("Correct Answers : " + questionnaire.numOfCorrectAnswers);
}
main();
