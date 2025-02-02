import styled from "styled-components";

type SkillsPropsType = {
    icon: any
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
