import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Tech Stack</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Skill iconId={"behance"} title={"HTML 5"} description={"text"}></Skill>
                <Skill iconId={"behance"} title={"HTML 5"} description={"text"}></Skill>
                <Skill iconId={"behance"} title={"HTML 5"} description={"text"}></Skill>
                <Skill iconId={"behance"} title={"HTML 5"} description={"text"}></Skill>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: #312949;
  min-height: 100vh;
`
