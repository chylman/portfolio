import styled from "styled-components";
import {animateScroll as scroll} from "react-scroll";

type LogoPropsType = {
    src: string
}

export const Logo = (props: LogoPropsType) => {
    return (
        <StyledLogo as="button" onClick={scroll.scrollToTop}>
            <img src={props.src} alt={""} width={"97"} height={"59"}/>
        </StyledLogo>
    );
};

const StyledLogo = styled.a`
  cursor: pointer;
`
