import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import {Button} from "../../../components/Button";
import {GradientText} from "../../../components/GradientText.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";

const Contacts = styled.section`
  padding: 100px 0;
  background-color: ${theme.colors.primaryBg};

  ${Button} {
    position: relative;
    z-index: 1;
    margin: 10px 0 0 0;
  }

  ${FlexWrapper} {
    margin: 100px 0;

    @media ${theme.media.tablet} {
      margin: 50px 0;
    }

    @media ${theme.media.mobile} {
      display: block;
      margin: 20px 0;
    }
  }


  @media ${theme.media.tablet} {
    padding: 50px 0;
  }
  @media ${theme.media.mobile} {
    padding: 20px 0;
  }
`
const Form = styled.form`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  max-width: 750px;
  width: 100%;

  textarea {
    resize: none;
    height: 155px;
  }

  @media ${theme.media.mobile} {
    max-width: initial;
  }
`
const Field = styled.input`
  padding: 7px 15px;
  width: 100%;
  background-color: ${theme.colors.secondBg};
  border-radius: 5px;
  border: 1px solid ${theme.colors.textSecond};

  ${font({family: "\"Poppins\", sans-serif", weight: 300, Fmax: 18, Fmin: 16, color: theme.colors.textSecond})};

  &::placeholder {
    text-transform: capitalize;
    color: ${theme.colors.textSecond};

    ${font({family: "\"Poppins\", sans-serif", weight: 300, Fmax: 18, Fmin: 16, color: theme.colors.textSecond})};
  }

  &:focus {
    outline: 1px solid ${theme.colors.outline};
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

export const S = {
    Contacts,
    Form,
    Field,
    Link,
    Caption
}
