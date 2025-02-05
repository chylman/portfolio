import photo from '../../../assets/image/content/50353683 1.png'
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
                    <MainTitle>Hi 👋, <br/> My name is<br/> <GradientText>Ilya Afanasev</GradientText> <br/> I build
                        things for
                        web</MainTitle>
                    <ImageBlock>
                        <Photo src={photo}/>
                    </ImageBlock>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  display: flex;
  min-height: 100vh;
  padding-top: 120px;
  background-color: #191919;
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
