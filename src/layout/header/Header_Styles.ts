import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";
import {S as S_Menu} from "../../components/menu/Menu_Styles";

const Header = styled.header`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 41px 0 21px;
  background-color: ${theme.colors.primaryBg};

  ${S_Menu.Menu} {
    @media ${theme.media.tablet} {
      display: none;
    }
  }

  .header-desktop-socials {
    @media ${theme.media.tablet} {
      display: none;
    }
  }

  @media ${theme.media.tablet} {
    padding: 5px 0 10px;
  }
`

export const S = {
    Header,
}
