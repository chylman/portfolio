import styled from "styled-components";

const Skill = styled.div`
    width: 120px;
    height: 120px;

    svg {
        width: 100%;
        height: 100%;
    }

    @media ${({theme}) => theme.media.mobile} {
        width: 100px;
        height: 100px;
    }
`

const SkillTitle = styled.h3`
`

const SkillText = styled.p`
`

export const S = {
    Skill,
    SkillTitle,
    SkillText
}
