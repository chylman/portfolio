import styled from "styled-components";
import {StyledLogo} from "../../components/logo/Logo.tsx";

const Footer = styled.footer`
    ${StyledLogo} {
        @media ${({theme}) => theme.media.tablet} {
            margin-bottom: 20px;
        }
    }
`

const LinkList = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    column-gap: 33px;

    @media ${({theme}) => theme.media.tablet} {
        justify-content: center;
        row-gap: 15px;
    }
`
const LinkItem = styled.li`

`

const Link = styled.a`
    display: inline-flex;
    font-weight: 400;
    font-size: 18px;
    color: ${({theme}) => theme.colors.textSecond};
    transition: color ${({theme}) => theme.animation.transitionDefault};

    &:hover {
        color: ${({theme}) => theme.colors.white};
    }
`

const Copyright = styled.small`
    font-weight: 400;
    font-size: 18px;
    color: ${({theme}) => theme.colors.textSecond};
`

const FooterTop = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 35px 0;

    &::before {
        position: absolute;
        bottom: 0;
        left: 0;
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: ${({theme}) => theme.colors.accentDecor};
    }

    @media ${({theme}) => theme.media.tablet} {
        flex-direction: column;
        column-gap: 33px;
        justify-content: center;
        flex-wrap: wrap;
    }

`

const FooterBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 135px;

    @media ${({theme}) => theme.media.tablet} {
        justify-content: center;
    }
`

export const S = {
    Footer,
    LinkList,
    LinkItem,
    Link,
    Copyright,
    FooterTop,
    FooterBottom
}
