import styled from "styled-components";
import {font} from "../styles/Common";

export const SectionTitle = styled.h2`
    margin-bottom: 49px;
    color: ${({theme}) => theme.colors.textSmall};
    ${font({weight: 700, Fmax: 48, Fmin: 32})}
    text-align: center;

    @media ${({theme}) => theme.media.tablet} {
        margin-bottom: 30px;

    }
    @media ${({theme}) => theme.media.mobile} {
        margin-bottom: 15px;
    }
`
