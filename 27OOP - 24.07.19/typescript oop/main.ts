"use strict";

abstract class Question {
    protected _QText: string;

    protected set QText(x: string) {
        this._QText = x;
    }

    constructor(questionText: string) {
        this.QText = questionText;
    }

    protected toString(): string {
        return this._QText;
    }

    public abstract getCorrectAnswer(): string;
    public abstract addCorrectAnswer(answer: string): void;
}

class ShortAnswerQuestion extends Question {
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

class MultipleChoiceQuestion extends Question {
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
            if (i < 6) {
                printAnswers += `\n * ${this.answers[i]} \n`;
            }
        }
        console.log(printAnswers);
        return `question: ${super.toString()} \n ${printAnswers}`;
    }

    public getCorrectAnswer(): string {
        return `right answer: ${this.answers[0]}`;
    }

    public addCorrectAnswer(answer: string): void {
        if ((this.answers).length !== 6) {
            this.answers.push(answer);
            this.correctAnswerIndex = (this.answers).length - 1;
        }
    }

    public addAnswer(wrongAnswer: string): void {
        if ((this.answers).length !== 6) {
            this.answers.push(wrongAnswer);
        }
    }
}

class QuestionsCatalog {
    public questions: Question[];
    public maxQuestionsLength: number = 20;
    public currentNumOfQuestions: number;
    public static final: number;
    public static SHORT: number = 1;
    public static MULTIPLE: number = 2;
    public static BOTH: number = 3;
    public num: number;
    public type: number;

    constructor() {
        this.questions = [];
        this.currentNumOfQuestions = 0;
    }

    public addQuestion(q: Question): void {
        if ((this.questions).length !== this.maxQuestionsLength) {
            this.questions.push(q);
        }
    }

    public generateQuestionnaire(num: number, type: number): Question[] {
        type = QuestionsCatalog.SHORT || QuestionsCatalog.MULTIPLE || QuestionsCatalog.BOTH;
        let newQuestionnaire = [];
        newQuestionnaire.length = num;
        for (let i = 0; i < (this.questions).length; i++) {

        }

        return newQuestionnaire;
    }
}

class Questionnaire {
    public type: number;
    public num: number
    public cat: QuestionsCatalog;
    public numOfCorrectAnswers: number;

    constructor(type: number, num: number, cat: QuestionsCatalog) {
        this.type = type;
        this.num = num;
        this.cat = cat;
        //this.numOfCorrectAnswers=0;
    }
    /*
        public hasNext(): boolean {
            if () {
                return true;
            } else {
                return false;
            }
        }
        
           public getNext():Question{
               return;
           }
       
           public checkAnswer(answer:string):void{
            
           }
       
           public getTotalQuestions():number{
               return num;
           }
       
           public getCorrectAnswers():number{
            if(the answer is right){
            this.numOfCorrectAnswers ++;
            }
            return this.numOfCorrectAnswers ;
           } */
}

/* function main() {
    cat: QuestionsCatalog = new QuestionsCatalog();
    q1: Question = new ShortAnswerQuestion("How much legs does the spider have?", "8");
    Cat.addQuestion(q1);
    q2: Question = new MultipleChoiceQuestion("Where is the sun rise?", "East");
    q2.addAnswer("West");
    q2.addAnswer("North");
    q2.addAnswer("South");
    cat.addQuestion(q2);
    // add more questions to the catalog

   Qnr: Questionnaire = new Questionnaire(5, Catalog.BOTH);
Console.log("Welcome to our questionnaire, its starts now!");
   while(qnr.hasNext()) {
     q: Question = qnr.getNext();
     console.log(q);
     console.log("Your answer: ");
     answer: string = scan.nextLine();
     qnr.checkAnswer(answer);
   }
   Console.log("Thank you for participating in our test");
   Correct: number = qnr.getCorrectAnswers();
   Total: number = qnr.getTotalQuestions();
  Console.log("You've answered " + correct + " correct answers out of " +
     total + " questions");
} */

