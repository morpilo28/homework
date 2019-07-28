"use strict";

abstract class Question {
    protected _qText: string;

    protected set qText(x: string) {
        this._qText = x;
    }

    constructor(qwestionText: string) {
        this.qText = qwestionText;
    }

    protected toString(): string {
        return this._qText;
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

    public getCorrectAnswer(): string {
        return `right answer: ${this.answer}`;
    }
    public addCorrectAnswer(correctAnswer: string): void {
        this.answer = correctAnswer;
    }
}

class multipleChoiceQuestion extends Question {
    answers: string[];
    numbersOfAnswers: number;
    correctAnswerIndex: number;

    constructor(correctAnswer: string, question: string) {
        super(question);
        this.numbersOfAnswers = 1;
        this.correctAnswerIndex = 0;
        this.answers = [correctAnswer];
    }

    public toString(): string {
        let printAnswers;
        for (let i = 0; i < (this.answers).length; i++) {
            printAnswers += `${this.answers[i]} \n`;
        }
        return `question: ${super.toString()} \n
        * ${this.answers}`;
    }

    public getCorrectAnswer(): string {
        return `right answer: ${this.answers[0]}`;
    }
    public addCorrectAnswer(answer: string): void {
        this.answer = answer;
    }

}