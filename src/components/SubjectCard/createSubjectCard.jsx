import React from "react";
import "./subjectCard.css";
import "./createSubjectCard.css";
import Plus from "./Plus.png"
import { Link } from "react-router-dom";

const CreateSubjectCard = () => {
    return(
        <div className="subjectCard createSubjectCard">
            <Link className="createSubjectCard__img-container" to="/create">
                <img className="createSubjectCard__img" src={Plus} alt="+"/>
            </Link>
        </div>
    )
}

export default CreateSubjectCard;