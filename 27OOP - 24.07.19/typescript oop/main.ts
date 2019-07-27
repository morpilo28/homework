"use strict";

abstract class Question {
    private _qText: string;

    set qText(x: string) {
        this._qText = x;
    }

    constructor(qText: string) {
        this.qText = qText;
    }

    public toString(): string {
        return `${this._qText}`;
    }

    public abstract getCorrectAnswer(): string;
    public abstract addCorrectAnswer(answer: string): void;
}

class shortAnswerQuestion extends Question {
    public answer: string;

    constructor(answer: string, question: string) {
        super(question);
        this.answer = answer;
    }

    getCorrectAnswer(): string {
        return `right answer: ${this.answer}`;
    }
    addCorrectAnswer(answer: string): void {
        this.answer = answer;
    }
}

class multipleChoiceQuestion extends Question {
    answers: string[];
    numbersOfAnswers: number;
    correctAnswerIndex: number;

    constructor(answers: string[], numbersOfAnswers: number, correctAnswerIndex: number, answer: string, question: string) {
        super(question);
        this.numbersOfAnswers = numbersOfAnswers;
        this.correctAnswerIndex = correctAnswerIndex;
        this.answers[0] = answer[correctAnswerIndex];
    }

    toString(): string {
        return `question: ${super.toString()} <br>
        * ${this.answers}`;
    }

    getCorrectAnswer(): string {
        return `right answer: ${this.answer}`;
    }
    addCorrectAnswer(answer: string): void {
        this.answer = answer;
    }

}