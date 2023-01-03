import React from "react";

import QuestionTypes from "../../components/Options/questionTypes";
import { Title } from "../../components/Title/title";
import { ButtonSweep } from "../../components/Button/button";

const SubjectCardOption = ({ match }) => {
    return(
        <div>
            <Title text="Select knowledge area(s)"/>
            <QuestionTypes/>
            <ButtonSweep text="Do an exam"/>
            <ButtonSweep text="Practice flash cards"/>          
        </div>
    )
}

export default SubjectCardOption;