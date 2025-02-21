import React from "react";
import Typewriter from 'typewriter-effect';
import {motion} from "motion/react"

import Tilt from 'react-parallax-tilt';
import photo from '../../../assets/image/content/my-photo.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {GradientText} from "../../../components/GradientText";
import {S} from "./Main_Styles"

export const Main: React.FC = () => {
    return (
        <S.Main id={"home"}>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                    <S.MainTitle>
                        Hi 👋, <br/> My name is<br/> <GradientText>Ilja Afanasev</GradientText>
                        <S.Title>
                            <Typewriter
                                options={{
                                    strings: [`I'm a Front-end Developer`],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </S.Title>
                    </S.MainTitle>
                    <S.ImageBlock>
                        <motion.div
                            initial={{scale: 0}}
                            animate={{
                                scale: 1,
                                transition: {duration: 2}
                            }}>
                            <S.Decor></S.Decor>
                            <S.Decor></S.Decor>
                            <S.Decor></S.Decor>
                            <S.Decor></S.Decor>
                            <S.Decor></S.Decor>
                        </motion.div>

                        <Tilt tiltEnable={false} scale={1.1} transitionSpeed={2500}>
                            <S.ImageWrapper>
                                <S.Photo src={photo}/>
                            </S.ImageWrapper>
                        </Tilt>
                    </S.ImageBlock>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};
