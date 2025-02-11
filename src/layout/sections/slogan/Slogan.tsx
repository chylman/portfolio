import styled from "styled-components";
import {Container} from "../../../components/Container";
import {GradientText} from "../../../components/GradientText.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {font} from "../../../styles/Common.ts";

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

  ${FlexWrapper} {
    @media ${theme.media.mobile} {
      display: block;
    }
  }

  @media ${theme.media.tablet} {
    padding: 50px 0;
  }
  @media ${theme.media.mobile} {
    padding: 20px 0;
  }
`

const Link = styled.a`
  font-weight: 700;
  font-size: 58px;
  letter-spacing: -0.02em;
  cursor: pointer;
  ${font({weight: 700, Fmax: 58, Fmin: 28, color: theme.colors.textSecond})};

  ${GradientText} {
    @media ${theme.media.mobile} {
      word-wrap: break-word;
    }
  }

`

const Caption = styled.span`
  display: block;
  ${font({weight: 700, Fmax: 58, Fmin: 28, color: theme.colors.textSecond})};
  letter-spacing: -0.02em;
  color: ${theme.colors.textSmall};
`
