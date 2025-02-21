import React from 'react';
import {Slide} from "react-awesome-reveal";
import {S} from './About_Styles';
import {Container} from '../../../components/Container';
import {SectionTitle} from '../../../components/SectionTitle';
import {SectionText} from '../../../components/SectionText';
import {AboutCard} from "./AboutCard/AboutCard";

const experienceData = [
    {
        position: "Junior Web Developer",
        company: "Dr. Rajkumar’s Learning App",
        location: "Bengaluru",
        timePeriod: "Sep 2021 - Dec 2021",
        formatWork: "Full Time",
    }
]

const educationData = [
    {
        position: "Junior Web Developer",
        company: "Dr. Rajkumar’s Learning App",
        location: "Bengaluru",
        timePeriod: "Sep 2021 - Dec 2021",
        formatWork: "Full Time",
    }
]
export const About: React.FC = () => {
    return (
        <S.About id={"about"}>
            <Container>
                <SectionTitle>About Me</SectionTitle>
                <SectionText>The Generator App is an online tool that helps you to export ready-made templates ready to
                    work as your future website. It helps you to combine slides, panels and other components and export
                    it as a set of static files: HTML/CSS/JS.</SectionText>
                <SectionTitle as={"h3"}>Work Experience</SectionTitle>
                <S.AboutList>
                    {
                        experienceData.map((C, index) => {
                            return (
                                <Slide direction="left" triggerOnce key={index}>
                                    <S.AboutItem>
                                        <AboutCard position={C.position} company={C.company} formatWork={C.formatWork}
                                                   location={C.location} timePeriod={C.timePeriod}/>
                                    </S.AboutItem>
                                </Slide>
                            )
                        })
                    }
                </S.AboutList>
                <SectionTitle as={"h3"}>Education</SectionTitle>
                <S.AboutList>
                    {
                        educationData.map((C, index) => {
                            return (
                                <Slide direction="left" triggerOnce key={index}>
                                    <S.AboutItem>
                                        <AboutCard position={C.position} company={C.company} formatWork={C.formatWork}
                                                   location={C.location} timePeriod={C.timePeriod}/>
                                    </S.AboutItem>
                                </Slide>
                            )
                        })
                    }
                </S.AboutList>
            </Container>
        </S.About>
    );
};
