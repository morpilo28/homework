"use strict";

import { Question, ShortAnswerQuestion, MultipleChoiceQuestion } from "./models";

export class QuestionsCatalog {
    private questions: Question[];
    private maxQuestionsLength: number = 20;
    private currentNumOfQuestions: number;
    static final: number;
    static SHORT: number = 1;
    static MULTIPLE: number = 2;
    static BOTH: number = 3;

    constructor() {
        this.questions = [];
        this.currentNumOfQuestions = 0;
    }

    public addQuestion(q: Question): void {
        if ((this.questions).length < this.maxQuestionsLength) {
            this.questions.push(q);
            this.currentNumOfQuestions++;
        }
    }

    public generateQuestionnaire(num: number, type: number): Question[] {
        let newQuestionnaire = [];
        let j = 0;
        while (j < (this.questions).length) {
            if ((this.questions[j]) instanceof ShortAnswerQuestion && type == QuestionsCatalog.SHORT) {
                newQuestionnaire.push(this.questions[j]);
            } else if (this.questions[j] instanceof MultipleChoiceQuestion && type == QuestionsCatalog.MULTIPLE) {
                newQuestionnaire.push(this.questions[j]);
            } else if (type == QuestionsCatalog.BOTH) {
                newQuestionnaire.push(this.questions[j]);
            }
            j++;
        }
        newQuestionnaire.splice(num);
        return newQuestionnaire;
    }
}

