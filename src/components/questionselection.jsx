import React from "react";
import { Link } from "react-router-dom";

const QuestionSelection = ({ collectionName, questionIndex}) => 
{
    return (
        <div>
            <Link to={`${questionIndex - 1}?collectionName=${collectionName}`}>
                <button>
                    Go back
                </button>
            </Link>

            <Link to={`${questionIndex + 1}?collectionName=${collectionName}`}>
                <button>
                    Go forward
                </button>
            </Link>
        </div>
    )
}

export default QuestionSelection;