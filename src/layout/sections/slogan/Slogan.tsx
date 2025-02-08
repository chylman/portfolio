import styled from "styled-components";
import {Container} from "../../../components/Container";
import {GradientText} from "../../../components/GradientText.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction={"column"} align={"center"} justify={"center"}>
                    <Caption>For any questions please mail me:</Caption>
                    <Link href={"mailto:chylmanprosto@gmail.com"}>
                        <GradientText>chylmanprosto@gmail.com</GradientText>
                    </Link>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
  padding: 100px 0;
`

const Link = styled.a`
  font-weight: 700;
  font-size: 58px;
  letter-spacing: -0.02em;
  cursor: pointer;
`

const Caption = styled.span`
  font-weight: 700;
  font-size: 58px;
  letter-spacing: -0.02em;
  color: ${theme.colors.textSmall};
`
