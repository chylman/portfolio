import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Socials = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0 20px;
`
const SocialsItem = styled.li`
  width: 30px;
  height: 30px;
`
const SocialsLink = styled.a`
  display: inline-block;
  width: 100%;
  height: 100%;
  cursor: pointer;
  color: ${theme.colors.iconMain};
  transition: transform ${theme.animation.transitionDefault};

  @media (hover: hover) {
    &:hover {
      color: ${theme.colors.iconHover};
      transform: translateY(-2px);
    }
  }

  svg {
    width: 100%;
    height: 100%;
    color: inherit;
    transition: color ${theme.animation.transitionDefault};
  }
`

export const S = {
    SocialsLink,
    SocialsItem,
    Socials
}
