import photo from '../../../assets/image/content/503536831.jpg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"}>
                    <div>
                        <MainTitle>Hi 👋, My name is Ilya Afanasev I build things for web</MainTitle>
                    </div>
                    <Photo src={photo}/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  background-color: #191919;
  min-height: 100vh;
`

const Photo = styled.img`
  width: 367px;
  height: 367px;
  object-fit: cover;
`

const MainTitle = styled.h1`
  color: #ffffff;
`
