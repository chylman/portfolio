import photo from '../../../assets/image/content/my-photo.jpg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {GradientText} from "../../../components/GradientText";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <MainTitle>Hi 👋, <br/> My name is<br/> <GradientText>Ilja Afanasev</GradientText> <br/> I'm a
                        Front-end Developer</MainTitle>
                    <ImageBlock>
                        <Decor></Decor>
                        <Decor></Decor>
                        <Decor></Decor>
                        <Decor></Decor>
                        <Decor></Decor>
                        <ImageWrapper>
                            <Photo src={photo}/>
                        </ImageWrapper>
                    </ImageBlock>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 100px 0;
  background-color: #191919;
  overflow: hidden;
`

const Photo = styled.img`
  padding: 2px;
  width: 349px;
  height: 349px;
  object-fit: cover;
`

const MainTitle = styled.h1`
  text-align: left;
  max-width: 636px;
  color: ${theme.colors.textMain};

  font-weight: 700;
  font-size: 58px;
  letter-spacing: -0.02em;
`

const ImageBlock = styled.div`
  position: relative;
`

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;


  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 9px;
    border-radius: 50%;
    background: linear-gradient(${theme.colors.accentSecond}, ${theme.colors.accent});
    mask: linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
    mask-composite: exclude;
  }
`

const Decor = styled.div`
  position: absolute;
  left: -44px;
  top: -35px;
  width: 444px;
  height: 444px;
  border: 1px solid rgba(255, 255, 255, 0);
  border-image: linear-gradient(to left top, rgba(255, 255, 255, 0) 35%, rgba(255, 255, 255, 0.3) 90%) 1;
  pointer-events: none;

  &:nth-of-type(1) {
    transform: rotate(-200deg);
  }

  &:nth-of-type(2) {
    transform: rotate(-185deg);
  }

  &:nth-of-type(3) {
    transform: rotate(-170deg);
  }

  &:nth-of-type(4) {
    transform: rotate(-155deg);
  }

  &:nth-of-type(5) {
    transform: rotate(-140deg);
  }

`
