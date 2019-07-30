"use strict";

import { Question, QuestionsCatalog } from "./models";

export class Questionnaire {
    public type: number;
    public num: number
    public cat: QuestionsCatalog;
    public numOfCorrectAnswers: number;
    private newCatQuestionnaire: Question[];

    constructor(type: number, num: number, cat: QuestionsCatalog) {
        this.type = type;
        this.num = num;
        this.cat = cat;
        this.numOfCorrectAnswers = 0;
        this.newCatQuestionnaire = cat.generateQuestionnaire(num, type);
    }

    public hasNext(): boolean {
        if (this.newCatQuestionnaire.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    public getNext(): Question {
        return this.newCatQuestionnaire[0];
    }

    public checkAnswer(answer: string): boolean {
        if (this.newCatQuestionnaire.length > 0) {
            if (this.newCatQuestionnaire[0].getCorrectAnswer() == answer) {
                this.numOfCorrectAnswers++;
                this.newCatQuestionnaire.splice(0, 1);
                return true;
            } else {
                this.newCatQuestionnaire.splice(0, 1);
            }
        }
        return false;
    }

    public getTotalQuestions(): number {
        return this.num;
    }

    public getCorrectAnswers(): number {
        return this.numOfCorrectAnswers;
    }
}
