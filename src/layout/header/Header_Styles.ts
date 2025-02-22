import styled from "styled-components";
import {S as S_Menu} from "../../components/menu/Menu_Styles";

const Header = styled.header`
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 20px 0 20px;
    background-color: ${({theme}) => theme.colors.primaryBg};

    ${S_Menu.Menu} {
        @media ${({theme}) => theme.media.tablet} {
            display: none;
        }
    }

    .header-desktop-socials {
        @media ${({theme}) => theme.media.tablet} {
            display: none;
        }
    }

    @media ${({theme}) => theme.media.tablet} {
        padding: 5px 0 10px;
    }
`

export const S = {
    Header,
}
