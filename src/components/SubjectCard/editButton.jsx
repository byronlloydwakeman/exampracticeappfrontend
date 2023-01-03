import React from "react";
import "./button.css";
import { Link } from "react-router-dom"

const EditButton = ({ subjectTitle }) => {
    return(
        <button className="button">
            <Link style={{textDecoration: 'none'}} to={`/edit/${subjectTitle}`}>
                <p className="button__text">Edit</p>
            </Link>
        </button>
    )
}

export default EditButton;