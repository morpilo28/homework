"use strict";

import { Question } from "./models";

export class MultipleChoiceQuestion extends Question {
    private answers: string[];
    private numbersOfAnswers: number;
    private correctAnswerIndex: number;

    constructor(question: string, correctAnswer: string) {
        super(question);
        this.numbersOfAnswers = 1;
        this.correctAnswerIndex = 0;
        this.answers = [correctAnswer];
    }

    public toString(): string {
        let printAnswers = '\n';
        for (let i = 0; i < (this.answers).length; i++) {
            if (i < 6) {
                printAnswers += `* ${this.answers[i]} \n`;
            }
        }
        return printAnswers;
    }

    public getCorrectAnswer(): string {
        return this.answers[0];
    }

    public addCorrectAnswer(answer: string): void {
        if ((this.answers).length < 6) {
            this.answers.push(answer);
            this.correctAnswerIndex = this.answers.indexOf(answer);
        }
    }

    public addAnswer(wrongAnswer: string): void {
        if ((this.answers).length !== 6) {
            this.answers.push(wrongAnswer);
        }
    }
}
