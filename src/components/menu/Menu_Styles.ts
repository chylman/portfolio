import styled from "styled-components";

const Menu = styled.nav`
    @media ${({theme}) => theme.media.tablet} {
        display: none;
    }
`

export const S = {
    Menu
}
