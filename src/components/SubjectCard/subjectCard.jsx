import React from "react";
import "./subjectCard.css";
import EditButton from "./editButton.jsx";
import DeleteButton from "./deleteButton";

import { Link } from "react-router-dom";

const SubjectCard = ({ subjectTitle }) => {
    return(
        <Link style={{textDecoration: "none"}} to={`/options/${subjectTitle}`}>
            <div className="subjectCard">
                <h1 className="subjectCard__title">{ subjectTitle }</h1>
                <div className="subjectCard__button-container">
                    <EditButton subjectTitle={ subjectTitle }/>
                    <DeleteButton/>
                </div>
            </div>
        </Link>
    )
}

export default SubjectCard