import React from "react";
import ReactDOM from 'react-dom';

import "./addanswers.css";
import "./inputfield.css";

function CreateAnswerElement(input)
{
    var del = document.createElement("button");
    del.classList.add("answers-del__button");
    del.textContent = "X";
    
    var div = document.createElement('div');
    div.classList.add("answers__element")
    div.setAttribute("id", input);

    div.appendChild(document.createTextNode(input));
    div.appendChild(del);

    del.addEventListener("click", function() {div.remove()})

    document.getElementsByClassName("answers__container")[0].appendChild(div);
}

const AddAnswers = ({ value }) => {

    return(
        <>
            <div className="answer__container">
                <label className="inputfield__label">Answers</label>
                <div className="answer-input__container">
                    <input className="inputfield__input" type="text" id="answers-input"></input> 
                    <button 
                    onClick={() => {
                        var input = document.getElementById("answers-input").value

                        //Check value isn't empty
                        if(input.length == 0)
                        {
                            alert("Please enter a valid answer");
                            return;
                        }

                        CreateAnswerElement(input);
                    }} 
                    className="answer-input__button">Add
                    </button>  
                </div>
            </div>
            <div className="answers__container">
                {
                    value?.map((answer) => 
                    {
                        CreateAnswerElement(answer)
                    })
                }

            </div>
        </>

    )
}

export default AddAnswers;