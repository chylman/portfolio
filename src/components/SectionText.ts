import styled from "styled-components";
import {font} from "../styles/Common";

export const SectionText = styled.p`
    margin-bottom: 80px;
    ${font({weight: 400, Fmax: 32, Fmin: 24})}
    text-align: center;
    color: ${({theme}) => theme.colors.textSecond};

    @media ${({theme}) => theme.media.tablet} {
        margin-bottom: 50px;

    }
    @media ${({theme}) => theme.media.mobile} {
        margin-bottom: 30px;
    }
`
