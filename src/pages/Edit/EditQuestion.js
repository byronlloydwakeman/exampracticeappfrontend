import React from "react";
import { useState, useEffect } from "react";

import { Title } from "../../components/Title/title";
import InputField from './../../components/EditQuestion/inputfield';
import AddAnswers from "../../components/EditQuestion/addanswers";
import { ButtonSweep } from './../../components/Button/button';
import QuestionField from "../../components/EditQuestion/questionfield";
import { Link } from "react-router-dom";

var SubjectTitle = "";

function APIEditQuestion() {
    var Question = document.getElementById("question").innerHTML;
    var CorrectAnswer = document.getElementById("correctanswer").value;
    var Explanation = document.getElementById("explanation").value;
    var KnowledgeArea = document.getElementById("knowledgearea").value;
    var Answers = [];

    var answerDiv = document.getElementsByClassName("answers__container");

    for(let i = 0; i < answerDiv[0].childNodes.length; i++)
    {
        Answers.push(answerDiv[0].childNodes[i].id);
    }

    fetch(`http://127.0.0.1:8000/Put/question/${Question}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify
        ({
            "dbConnectionData": {
            hostName: "mongodb://localhost:27017",
            databaseName: "exampracticeapp",
            collectionName : SubjectTitle
            },
            "question": Question,
            "correctAnswer": CorrectAnswer,
            "answers": Answers,
            "explanation": Explanation,
            "knowledgeArea": KnowledgeArea
        })
        })
        .then(res => res.json())
        .then(json => console.log(`changed ${json.count} entries`));
}

const EditQuestion = ({ match }) => {
    const [question, setQuestion] = useState([])

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/GetOne/question/${match.params.questionName}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify
                ({
                    hostName: "mongodb://localhost:27017",
                    databaseName: "exampracticeapp",
                    collectionName : match.params.subjectTitle
                })
            })
            .then(res => res.json())
            .then(json => 
            {
                setQuestion(json);
                SubjectTitle = match.params.subjectTitle;
            });
    }, [])

    console.log(match.params.questionName);

    return(
        <>
            <Title text="Edit"/>
            <QuestionField text={question.question}/>
            <AddAnswers text="Answers" inputId="answers" value={question.answers}/>
            <InputField text="Correct Answer" inputId="correctanswer" value={question.correctAnswer}/>
            <InputField text="Explanation" inputId="explanation" value={question.explanation}/>
            <InputField text="Knowledge Area" inputId="knowledgearea" value={question.knowledgeArea}/>
            <Link to={`/edit/${match.params.subjectTitle}`}>
                <ButtonSweep text="Save" onClickFunction={APIEditQuestion}/>
            </Link>
        </>
    )
}

export default EditQuestion;