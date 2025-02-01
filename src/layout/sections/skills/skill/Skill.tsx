import React, {JSX} from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillsPropsType = {
    icon: JSX
    title?: string
    description?: string
}

export const Skill = (props: SkillsPropsType) => {
    return (
        <StyledSkill>
            {props.icon}
            {props.title && <SkillTitle>{props.title}</SkillTitle>}
            {props.description && <SkillText>{props.description}</SkillText>}
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
`

const SkillTitle = styled.h3`
`

const SkillText = styled.p`
`
