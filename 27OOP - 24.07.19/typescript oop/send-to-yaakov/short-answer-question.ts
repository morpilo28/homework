"use strict";

import { Question } from "./models";

export class ShortAnswerQuestion extends Question {
    private answer: string;

    constructor(question: string, answer: string) {
        super(question);
        this.answer = answer;
    }

    public getCorrectAnswer(): string {
        return this.answer;
    }
    public addCorrectAnswer(correctAnswer: string): void {
        this.answer = correctAnswer;
    }
}


