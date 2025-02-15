import IconGithub from "../../../../assets/image/icons/github-mini-white.svg";
import IconChain from "../../../../assets/image/icons/chain.svg";
import {Button} from "../../../../components/Button.ts";
import {S} from "./Work_Styles.ts"
import React from "react";

type WorkPropsType = {
    title: string
    description: string
    src: string
    titleStack: string
    stack: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <Button>View project</Button>
                <S.Image src={props.src} alt=""/>
            </S.ImageWrapper>
            <S.Content>
                <S.Title>{props.title}</S.Title>
                <S.Description>{props.description}</S.Description>
                <S.Stack>
                    <S.TitleStack>{props.titleStack}</S.TitleStack>
                    {props.stack}
                </S.Stack>
                <S.Link href={"#"}>
                    <IconChain/>
                    Live Preview
                </S.Link>
                <S.Link href={"#"}>
                    <IconGithub/>
                    View Code
                </S.Link>
            </S.Content>
        </S.Work>
    );
};

