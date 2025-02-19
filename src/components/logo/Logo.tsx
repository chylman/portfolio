import styled from "styled-components";
import {animateScroll as scroll} from "react-scroll";
import React from "react";
import {theme} from "../../styles/Theme";
// import {useRef} from 'react';
// import gsap from 'gsap';
// import {useGSAP} from '@gsap/react';

type LogoPropsType = {
    Icon?: JSX.Element
}

export const Logo = (props: LogoPropsType) => {
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

const StyledLogo = styled.a`
  cursor: pointer;

  svg {
    width: 200px;
    height: 48px;

    @media ${theme.media.tablet} {
      width: 150px;
      height: 30px;
    }
  }
`
