"use strict";

export abstract class Question {
    private _QText: string;

    public set QText(x: string) {
        this._QText = x;
    }

    public get QText(): string {
        return this._QText;
    }

    constructor(questionText: string) {
        this.QText = questionText;
    }

    public toString(): string {
        return this._QText;
    }

    public abstract getCorrectAnswer(): string;
    public abstract addCorrectAnswer(answer: string): void;
}