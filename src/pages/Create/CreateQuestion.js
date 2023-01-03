import React from "react";

import { Title } from "../../components/Title/title";
import { Link } from "react-router-dom";
import InputField from './../../components/EditQuestion/inputfield';
import AddAnswers from "../../components/EditQuestion/addanswers";
import { ButtonSweep } from './../../components/Button/button';

var SubjectTitle = "";

function APICreateQuestion()
{
    var Question = document.getElementById("question").value;
    var CorrectAnswer = document.getElementById("correctanswer").value;
    var Explanation = document.getElementById("explanation").value;
    var KnowledgeArea = document.getElementById("knowledgearea").value;
    var Answers = [];

    console.log(Question);

    var answerDiv = document.getElementsByClassName("answers__container");

    for(let i = 0; i < answerDiv[0].childNodes.length; i++)
    {
        Answers.push(answerDiv[0].childNodes[i].id);
    }

    fetch(`http://127.0.0.1:8000/Post`, {
        method: "POST",
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

export function CreateQuestion({ match })
{
    SubjectTitle = match.params.subjectTitle;
    return(
        <>
            <Title text="Add"/>
            <InputField text="Question" inputId="question" value={""}/>
            <AddAnswers text="Answers" inputId="answers" value={[]}/>
            <InputField text="Correct Answer" inputId="correctanswer" value={""}/>
            <InputField text="Explanation" inputId="explanation" value={""}/>
            <InputField text="Knowledge Area" inputId="knowledgearea" value={""}/>
            <Link to={`/edit/${match.params.subjectTitle}`}>
                <ButtonSweep text="Save" onClickFunction={APICreateQuestion}/>
            </Link>
        </>
    )
}