"use strict";

import { ShortAnswerQuestion, MultipleChoiceQuestion, QuestionsCatalog, Questionnaire } from "./models";

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