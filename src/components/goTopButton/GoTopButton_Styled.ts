import styled from "styled-components";

const GoTopButton = styled.button`
    z-index: 99999;
    position: fixed;
    right: 30px;
    bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.primaryBg};
    border-radius: 50%;

    width: 50px;
    height: 50px;
    cursor: pointer;

    svg {
        color: ${({theme}) => theme.colors.textSecond};
    }
`

export const S = {
    GoTopButton
}
