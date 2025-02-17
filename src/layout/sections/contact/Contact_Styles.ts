import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const Contacts = styled.section`
  position: relative;
  padding: 100px 0;
  background-color: ${theme.colors.primaryBg};

  @media ${theme.media.tablet} {
    padding: 50px 0;
  }
  @media ${theme.media.mobile} {
    padding: 20px 0;
  }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  max-width: 540px;
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

export const S = {
    Contacts,
    Form,
    Field
}
