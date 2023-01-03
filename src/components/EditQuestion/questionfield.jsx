import React from "react";
import "./inputfield.css";

const QuestionField = ({ text }) => {
    return(
        <div className="inputfield__container">
            <label className="inputfield__label">Question : </label>
            <label className="inputfield__label" id="question">{ text }</label>
        </div>
    )
}

export default QuestionField;