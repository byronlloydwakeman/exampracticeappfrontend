import React from "react";
import "./button.css";

export function ButtonSweep({ text, onClickFunction }){
    return (
        <div className="button-sweep__container">
            <button className="button-sweep" onClick={() => onClickFunction()}>{ text }</button>
        </div>
    )
}




