import styled from "styled-components";

export const GradientText = styled.span`
    background-image: linear-gradient(to right, ${({theme}) => theme.colors.accent}, ${({theme}) => theme.colors.accentSecond});
    color: transparent;
    background-clip: text;
`
