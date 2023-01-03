import React from "react";

const Answers = ({ answers }) => 
{
    console.log(answers);
    return (
    <div>
        <h1>These are the Answers</h1>
        {
            // answers.map(answer => (
            //     <input type="radio" value={answer}/>
            // ))

            answers.map(answer => (
                <div>
                    <label for={answers}>{answer}</label>
                    <input name="answers" id={answer} type="radio" value={answer}/>  
                </div>
            ))
        }
    </div>

    )
}

export default Answers;