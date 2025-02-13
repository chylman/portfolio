import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";

const Skills = styled.section`
  padding: 100px 0;

  ${FlexWrapper} {
    @media ${theme.media.mobile} {
      column-gap: 50px;
      row-gap: 40px;
    }
  }

  @media ${theme.media.tablet} {
    padding: 50px 0;
  }
  @media ${theme.media.mobile} {
    padding: 20px 0;
  }
`

export const S = {
    Skills
}
bnnnnnnnn
