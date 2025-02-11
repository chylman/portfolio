import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Menu = styled.nav`
  @media ${theme.media.tablet} {
    display: none;
  }
`

export const S = {
    Menu
}
