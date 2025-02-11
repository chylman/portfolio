import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

type SkillsPropsType = {
    icon: JSX.Element
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
  width: 120px;
  height: 120px;

  svg {
    width: 100%;
    height: 100%;
  }

  @media ${theme.media.mobile} {
    width: 100px;
    height: 100px;
  }
`

const SkillTitle = styled.h3`
`

const SkillText = styled.p`
`
