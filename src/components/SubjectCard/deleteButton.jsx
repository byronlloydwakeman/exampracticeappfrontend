import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

const DeleteButton = ({ subjectTitle }) => {
    return(
        <button className="button">
            <Link style={{textDecoration: 'none'}} to={`/delete/${subjectTitle}`}>
                <p className="button__text">Delete</p>
            </Link>
        </button>
    )
}

export default DeleteButton;