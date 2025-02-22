import styled from "styled-components";
import {animateScroll as scroll} from "react-scroll";
import React from "react";
// import {useRef} from 'react';
// import gsap from 'gsap';
// import {useGSAP} from '@gsap/react';

type LogoPropsType = {
    Icon?: JSX.Element
}

export const Logo: React.FC = (props: LogoPropsType) => {
    //
    // const container = useRef();
    //
    // useGSAP(() => {
    //     gsap.to(container.current, {
    //         duration: 2,
    //         x: 200,
    //         rotation: 360,
    //     });
    //
    // })

    return (
        <StyledLogo as="button" onClick={scroll.scrollToTop}>
            {props.Icon}
        </StyledLogo>
    );
};

export const StyledLogo = styled.a`
    cursor: pointer;

    svg {
        width: 180px;
        height: 40px;

        @media ${({theme}) => theme.media.tablet} {
            width: 150px;
            height: 30px;
        }
    }
`
