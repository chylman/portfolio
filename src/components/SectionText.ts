import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const SectionText = styled.p`
  margin-bottom: 80px;
  ${font({color: theme.colors.textSmall, weight: 400, Fmax: 32, Fmin: 24})}
  text-align: center;
  color: ${theme.colors.textSecond};

  @media ${theme.media.tablet} {
    margin-bottom: 50px;

  }
  @media ${theme.media.mobile} {
    margin-bottom: 30px;
  }
`
