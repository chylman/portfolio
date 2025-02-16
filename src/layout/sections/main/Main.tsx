import React from "react";
import Typewriter from 'typewriter-effect';
import photo from '../../../assets/image/content/my-photo.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {GradientText} from "../../../components/GradientText";
import {S} from "./Main_Styles"

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                    <S.MainTitle>
                        Hi 👋, <br/> My name is<br/> <GradientText>Ilja Afanasev</GradientText>
                        <Typewriter
                            options={{
                                strings: [`I'm a Front-end Developer`],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </S.MainTitle>
                    <S.ImageBlock>
                        <S.Decor></S.Decor>
                        <S.Decor></S.Decor>
                        <S.Decor></S.Decor>
                        <S.Decor></S.Decor>
                        <S.Decor></S.Decor>
                        <S.ImageWrapper>
                            <S.Photo src={photo}/>
                        </S.ImageWrapper>
                    </S.ImageBlock>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};
