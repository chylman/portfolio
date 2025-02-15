import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const SectionTitle = styled.h2`
  margin-bottom: 49px;
  ${font({color: theme.colors.textSmall, weight: 700, Fmax: 48, Fmin: 32})}
  font-weight: 700;
  text-align: center;

  @media ${theme.media.tablet} {
    margin-bottom: 30px;

  }
  @media ${theme.media.mobile} {
    margin-bottom: 15px;
  }
`
