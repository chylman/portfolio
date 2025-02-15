import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import IconHtml5 from '../../../assets/image/icons/html5.svg';
import IconCSS from '../../../assets/image/icons/css.svg';
import IconJs from '../../../assets/image/icons/js.svg';
import IconReact from '../../../assets/image/icons/react.svg';
import IconRedux from '../../../assets/image/icons/redux.svg';
import IconTailwind from '../../../assets/image/icons/tailwind.svg';
import IconSass from '../../../assets/image/icons/sass.svg';
import IconBootstrap from '../../../assets/image/icons/bootstrap.svg';
import IconGit from '../../../assets/image/icons/git.svg';
import IconGreensock from '../../../assets/image/icons/greensock.svg';
import IconVscode from '../../../assets/image/icons/vscode.svg';
import IconGithub from '../../../assets/image/icons/github.svg';
import {Container} from "../../../components/Container";
import {SectionText} from "../../../components/SectionText";
import {S} from "./Skills_Styles"
import React from "react";

const skillsData = [
    {
        icon: <IconHtml5/>,
    },
    {
        icon: <IconCSS/>,
    },
    {
        icon: <IconJs/>,
    },
    {
        icon: <IconReact/>,
    },
    {
        icon: <IconRedux/>,
    },
    {
        icon: <IconBootstrap/>,
    },
    {
        icon: <IconTailwind/>,
    },
    {
        icon: <IconSass/>,
    },
    {
        icon: <IconGit/>,
    },
    {
        icon: <IconGreensock/>,
    },
    {
        icon: <IconVscode/>,
    },
    {
        icon: <IconGithub/>,
    },
]

export const Skills: React.FC = () => {
    return (
        <S.Skills>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionText> Technologies I’ve been working with recently</SectionText>
                <FlexWrapper wrap={"wrap"} gapcolumn={"100px"} gaprow={"80px"} justify={"center"}>
                    {
                        skillsData.map((s, index) => <Skill icon={s.icon} key={index}/>)
                    }
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};
