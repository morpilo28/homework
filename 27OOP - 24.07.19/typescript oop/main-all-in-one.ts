/* 2. needs to choose question randomly
   3. needs to split classes to different files and check if works  */
"use strict";

abstract class Question {
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

class ShortAnswerQuestion extends Question {
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

class MultipleChoiceQuestion extends Question {
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

class QuestionsCatalog {
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

class Questionnaire {
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

function main(): void {
    let q1 = new ShortAnswerQuestion("what is the capital of Israel?", "jerusalem");
    let q2 = new MultipleChoiceQuestion("How do people from jerusalem call apricot stone fruit?", "ajuim");
    q2.addAnswer("gogoim");
    q2.addAnswer("garin");
    q2.addAnswer("apricot stone fruit");
    let q3 = new ShortAnswerQuestion("How do people from jerusalem call a piggyback?", "abuyoyo");
    let q4 = new MultipleChoiceQuestion("How do people from jerusalem call a liquorice candy?", "bambalick");
    q4.addAnswer("horse tale");
    q4.addAnswer("liquorice");
    q4.addAnswer("red or black strips");

    let newQuestionCatalog = new QuestionsCatalog();
    newQuestionCatalog.addQuestion(q1);
    newQuestionCatalog.addQuestion(q2);
    newQuestionCatalog.addQuestion(q3);
    newQuestionCatalog.addQuestion(q4);

    let questionnaire = new Questionnaire(3, 4, newQuestionCatalog);
    while (questionnaire.hasNext()) {
        let question = questionnaire.getNext();
        if (question) {
            if (question instanceof MultipleChoiceQuestion) {
                console.log(`${question.QText} \n ${question.toString()}`);
            } else {
                console.log(question.QText);
            }
        }
        let usersAnswer = String(prompt('Enter Your Answer'));
        console.log(questionnaire.checkAnswer(usersAnswer));
    }
    console.log(`Correct Answers : ${questionnaire.numOfCorrectAnswers}`);
}

main();

