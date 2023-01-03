import React from "react";
import "./home.css";

import SubjectCard from './../../components/SubjectCard/subjectCard';
import CreateSubjectCard from "../../components/SubjectCard/createSubjectCard";
import { Title } from "../../components/Title/title";

const Home = () => {
    return (
        <>
            <Title text="Welcome back Byron"/>
            <div className="home__page">
                <SubjectCard subjectTitle="PCEP"/>
                <SubjectCard subjectTitle="PCAP"/>
                <SubjectCard subjectTitle="IF2"/>
                <CreateSubjectCard/>
            </div>
        </>


    )
}

export default Home