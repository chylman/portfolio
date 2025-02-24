import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {font} from "../../../styles/Common";

const Main = styled.div`
    display: flex;
    min-height: 100vh;
    background-color: ${({theme}) => theme.colors.primaryBg};
    overflow-x: clip;

    ${FlexWrapper} {
        padding: 100px 0;

        @media ${({theme}) => theme.media.tablet} {
            flex-direction: column;
            column-gap: 20px;
            justify-content: center;
        }
    }
`

const Photo = styled.img`
    padding: 2px;
    width: 349px;
    height: 349px;
    object-fit: cover;

    @media ${({theme}) => theme.media.mobile} {
        width: 100%;
        height: 100%;
    }
`

const MainTitle = styled.div`
    ${font({weight: 700, Fmax: 58, Fmin: 36})}
    text-align: left;
    max-width: 636px;
    min-height: 370px;
    color: ${({theme}) => theme.colors.textMain};
    letter-spacing: -0.02em;

    @media ${({theme}) => theme.media.tablet} {
        min-height: initial;
        align-self: flex-start;
        margin-bottom: 20px;
    }

    @media ${({theme}) => theme.media.mobile} {
        min-height: 230px;
    }
`

const Title = styled.h1`
    font-size: inherit;
    letter-spacing: inherit;
`

const ImageBlock = styled.div`
    position: relative;

    @media ${({theme}) => theme.media.mobile} {
        width: 100%;
        max-width: 349px;
    }
`

const ImageWrapper = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 50%;

    @media ${({theme}) => theme.media.mobile} {
        aspect-ratio: 1/1;
        width: 100%;
        max-width: 349px;
    }

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        padding: 9px;
        border-radius: 50%;
        background: linear-gradient(${({theme}) => theme.colors.accentSecond}, ${({theme}) => theme.colors.accent});
        mask: linear-gradient(#000 0 0) content-box,
        linear-gradient(#000 0 0);
        mask-composite: exclude;
    }
`

const Decor = styled.div`
    z-index: 0;
    position: absolute;
    left: -44px;
    top: -35px;
    width: 444px;
    height: 444px;
    border: 1px solid rgba(255, 255, 255, 0);
    opacity: 0.2;
    border-image: linear-gradient(to left top, rgba(255, 255, 255, 0) 35%, rgba(255, 255, 255, 0.5) 90%) 1;
    pointer-events: none;

    &:nth-of-type(1) {
        transform: rotate(-200deg);
    }

    &:nth-of-type(2) {
        transform: rotate(-185deg);
    }

    &:nth-of-type(3) {
        transform: rotate(-170deg);
    }

    &:nth-of-type(4) {
        transform: rotate(-155deg);
    }

    &:nth-of-type(5) {
        transform: rotate(-140deg);
    }

    @media ${({theme}) => theme.media.mobile} {
        left: -37px;
        top: -17px;
        width: calc(100% + 60px);
        height: calc(100% + 60px);
    }

`

export const S = {
    Main,
    Photo,
    MainTitle,
    Title,
    ImageBlock,
    ImageWrapper,
    Decor
}
