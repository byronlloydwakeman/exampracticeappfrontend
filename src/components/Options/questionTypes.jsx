import React from "react";
import { Link } from "react-router-dom";
import { ButtonSweep } from "../Button/button";

import "./questionTypes.css";
 
const QuestionTypes = ({ subjectTitle }) => {

    return (
        <div className="container">
            <div className="option__container">
                <label className="option__name" for="AllQuestions">All Questions</label>
                <input name="AllQuestions" id="AllQuestions" type="checkbox" value="AllQuestions"/>
            </div>
            <div className="option__container">
                <label className="option__name" for="IncorrectAnswers">Incorrect answers</label>
                <input name="IncorrectAnswers" id="IncorrectAnswers" type="checkbox" value="IncorrectAnswers"/>               
            </div>
            <div className="option__container">
                <label className="option__name" for="CorrectAnswers">Correct answers</label>
                <input name="CorrectAnswers" id="CorrectAnswers" type="checkbox" value="CorrectAnswers"/>       
            </div>
            <div className="option__container">
                <label className="option__name" for="NotSeenQuestions">Unseen questions</label>
                <input name="NotSeenQuestions" id="NotSeenQuestions" type="checkbox" value="NotSeenQuestions"/>
            </div>
            
        </div>
    )
}

export default QuestionTypes;