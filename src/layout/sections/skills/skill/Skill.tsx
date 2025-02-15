import {S} from "./Skill_Styles.ts"
import React from "react";

type SkillsPropsType = {
    icon: JSX.Element
    title?: string
    description?: string
}

export const Skill: React.FC<SkillsPropsType> = (props: SkillsPropsType) => {
    return (
        <S.Skill>
            {props.icon}
            {props.title && <S.SkillTitle>{props.title}</S.SkillTitle>}
            {props.description && <S.SkillText>{props.description}</S.SkillText>}
        </S.Skill>
    );
};
