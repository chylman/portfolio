import styled from "styled-components";
import {theme} from "../styles/Theme";

export const GradientText = styled.span`
  background-image: linear-gradient(to right, ${theme.colors.accent}, ${theme.colors.accentSecond});
  color: transparent;
  background-clip: text;
`
