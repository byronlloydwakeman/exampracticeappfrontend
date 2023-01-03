import React from "react";
import { Link } from "react-router-dom";
import "./flashcardElement.css";

export function FlashCardElement({SubjectTitle, Question, Answers, CorrectAnswer, Explanation, KnowledgeArea}){
    return(
        <div className="flashcardElement__container">
            <div className="flashcardElement-question__container">
                <p className="flashcardElement__text">
                    <b className="flashcardElement__text">Question:</b>{Question}
                </p>
                <div className="flashcardElement-answer__container">
                    <b className="flashcardElement__text">Answers:</b>
                        {Answers.map(answer => (<p className="flashcardElement-answer">{answer},&nbsp;</p>))}
                </div>
                <p className="flashcardElement__text">
                    <b className="flashcardElement__text">Correct Answer: </b>
                    {CorrectAnswer}</p>
                <p className="flashcardElement__text">
                    <b className="flashcardElement__text">Explanation: </b>
                    {Explanation}</p>
                <p className="flashcardElement__text">
                    <b className="flashcardElement__text">Knowledge Area: </b>
                    {KnowledgeArea}</p>
            </div>
            <div className="flashcardElement-button__container">
                <Link className="flashcardElement__text flashcardElement-edit__button" to={`/editquestion/${encodeURIComponent(SubjectTitle)}/${encodeURIComponent(Question)}`}>
                    <p className="flashcardElement-editbutton__text">Edit</p>
                </Link>
                <div className="flashcardElement__text flashcardElement-edit__button">
                    <p className="flashcardElement-editbutton__text">Delete</p>
                </div>
            </div>
        </div>

    )
}