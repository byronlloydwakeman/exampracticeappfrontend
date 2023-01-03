import React, { useState, useEffect } from "react";
import Question from "../components/question";
import Answers from "../components/answers";
import QuestionSelection from "../components/questionselection";
import queryString from 'query-string';

const QuestionsPage = ({match, location}) => 
{
    /*Get collection name and any search dicts */
    const {collectionName, searchDicts} = queryString.parse(location.search);
    const [list, setList] = useState([])


    // useEffect(() => {
    //     fetch(`http://127.0.0.1:8000/GetAll`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             hostName: "mongodb://localhost:27017",
    //             databaseName: "exampracticeapp",
    //             collectionName : collectionName
    //         })
    //       })
    //       .then(res => res.json())
    //       .then(json => setList({ json }))
    // }, [])

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
                    collectionName : collectionName
                })
            })
            .then(res => res.json())
            .then(json => setList(json));
    }, [match.params.questionNumber])

    if(list.length != 0) 
    {
        return (
            <div>
                <Question question={list[match.params.questionNumber].question}/>
                <Answers answers={list[match.params.questionNumber].answers}/>
                <QuestionSelection collectionName={collectionName} questionIndex={match.params.questionNumber}/>
            </div>
        )
    }
}

export default QuestionsPage;