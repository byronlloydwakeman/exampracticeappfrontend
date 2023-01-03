import React from "react";
import "./inputfield.css";

const InputField = ({ text, inputId, value }) => {
    return(
        <div className="inputfield__container">
            <label className="inputfield__label" for={inputId}>{ text }</label>
            <input className="inputfield__input" type="text" id={inputId} 
            name={inputId} defaultValue={value}></input>
        </div>
    )
}

export default InputField;