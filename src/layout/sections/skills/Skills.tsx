import React from 'react';
import styled from "styled-components";
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



export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Tech Stack</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Skill icon={<IconHtml5 width={"120px"} height={"120px"}/>}></Skill>
                <Skill icon={<IconCSS width={"120px"} height={"120px"}/>}></Skill>
                <Skill icon={<IconJs width={"120px"} height={"120px"}/>}></Skill>
                <Skill icon={<IconReact width={"113px"} height={"101px"}/>}></Skill>
                <Skill icon={<IconRedux width={"105px"} height={"100px"}/>}></Skill>
                <Skill icon={<IconBootstrap width={"88px"} height={"87px"}/>}></Skill>
                <Skill icon={<IconTailwind width={"131px"} height={"131px"}/>}></Skill>
                <Skill icon={<IconSass width={"117px"} height={"87px"}/>}></Skill>
                <Skill icon={<IconGit width={"105px"} height={"105px"}/>}></Skill>
                <Skill icon={<IconGreensock width={"120px"} height={"120px"}/>}></Skill>
                <Skill icon={<IconVscode width={"112px"} height={"112px"}/>}></Skill>
                <Skill icon={<IconGithub width={"88px"} height={"88px"}/>}></Skill>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: #312949;
  min-height: 100vh;
`
