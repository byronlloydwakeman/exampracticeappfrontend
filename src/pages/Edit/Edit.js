import React from "react";
import { ReactDOM } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Title } from "../../components/Title/title";
import { SubTitle } from "../../components/Title/subtitle";
import { FlashCardElement } from "../../components/Edit/flashcardElement";
import { ButtonSweep } from './../../components/Button/button';

const Edit = ({ match }) => {
    const [list, setList] = useState([])

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/GetAll`, {
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
            .then(json => setList(json));
    }, [])

    console.log(list);

    if(list.length != 0)
    {
        return(
        <>
            <Title text={match.params.subjectTitle}/>
            {
                list.map(question => 
                    <>
                        <FlashCardElement 
                        SubjectTitle={match.params.subjectTitle}
                        Question={question.question}
                        Answers={question.answers}
                        CorrectAnswer={question.correctAnswer}
                        Explanation={question.explanation}
                        KnowledgeArea={question.knowledgeArea}/>
                    </>)
            }
            <Link to={`/createquestion/${match.params.subjectTitle}`}>
                <ButtonSweep text="Create question"/>
            </Link>
        </>
        )
    }
    else
    {
        return(
            <>
                <Title text={match.params.subjectTitle}/>
                <SubTitle text="No questions, create some!"/>
                <Link to="/createQuestion">
                    <ButtonSweep text="Create question"/>
                </Link>
            </>
        )
    }

}

export default Edit