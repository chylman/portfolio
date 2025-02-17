import styled from "styled-components";
import {theme} from "../../styles/Theme";

const GoTopButton = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primaryBg};

  width: 40px;
  height: 40px;
  cursor: pointer;

  svg {
    color: ${theme.colors.textSecond};
  }
`

export const S = {
    GoTopButton
}
